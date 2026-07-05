#!/usr/bin/env node
// Daily lane: scan recent iNaturalist activity within ~60km of Mana Kai
// (all of Maui plus the ʻAlalākeiki/Pailolo channels) for genuinely notable
// wildlife — a curated watchlist first, then a rarity fallback for anything
// else unusual — and push a Telegram message for anything new. Silent if
// nothing notable turns up; never claims a sighting is guaranteed or exact.
//
// State: research/.notable-sightings-seen.json (gitignored) tracks
// observation ids already alerted so re-runs don't repeat a notification.
//
// Telegram: reads the bot token directly from
// ~/.claude/channels/telegram/.env (same path the telegram-channel-setup
// memory documents for out-of-MCP sends) rather than committing any secret.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";
import {
  classifyTaxon,
  isWithinCooldown,
  selectFindings,
} from "./lib/notable-sightings.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const statePath = path.join(
  projectRoot,
  "research/.notable-sightings-seen.json",
);

const BASE = "https://api.inaturalist.org/v1";
const HEADERS = {
  "User-Agent":
    "maui-field-guide-notable-sightings/1.0 (family trip planning site)",
};
const MANA_KAI = { lat: 20.7049, lng: -156.4465 };
const RADIUS_KM = 60; // whole Maui plus the inter-island whale channels
const LOOKBACK_DAYS = 3; // buffer for iNaturalist's own upload/ID lag
const TELEGRAM_ENV_PATH = path.join(
  os.homedir(),
  ".claude/channels/telegram/.env",
);
const WATCHLIST_COOLDOWN_DAYS = 3;
const FALLBACK_COOLDOWN_DAYS = 14;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getJSON(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

function loadState() {
  if (!existsSync(statePath)) return { seenIds: {}, taxonLastAlertedAt: {} };
  try {
    const parsed = JSON.parse(readFileSync(statePath, "utf8"));
    return {
      seenIds: parsed.seenIds ?? {},
      taxonLastAlertedAt: parsed.taxonLastAlertedAt ?? {},
    };
  } catch {
    return { seenIds: {}, taxonLastAlertedAt: {} };
  }
}

function saveState(state) {
  const cutoff = Date.now() - 60 * 86_400_000;
  const pruned = {};
  for (const [id, seenAt] of Object.entries(state.seenIds)) {
    if (new Date(seenAt).getTime() >= cutoff) pruned[id] = seenAt;
  }
  writeFileSync(
    statePath,
    JSON.stringify(
      { seenIds: pruned, taxonLastAlertedAt: state.taxonLastAlertedAt },
      null,
      2,
    ) + "\n",
  );
}

function readTelegramConfig() {
  if (!existsSync(TELEGRAM_ENV_PATH)) return undefined;
  const contents = readFileSync(TELEGRAM_ENV_PATH, "utf8");
  const value = (key) =>
    contents.match(new RegExp(`^${key}=(.+)$`, "m"))?.[1]?.trim();
  return {
    token: value("TELEGRAM_BOT_TOKEN"),
    chatId: value("TELEGRAM_CHAT_ID"),
  };
}

async function sendTelegramMessage(text) {
  const config = readTelegramConfig();
  if (!config?.token || !config.chatId) {
    process.stderr.write(
      "Telegram token or chat ID missing; skipping notification (would have sent):\n" +
        text +
        "\n",
    );
    return false;
  }
  const res = await fetch(
    `https://api.telegram.org/bot${config.token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        chat_id: config.chatId,
        text,
        disable_web_page_preview: "true",
      }),
    },
  );
  if (!res.ok) {
    process.stderr.write(
      `Telegram send failed: ${res.status} ${await res.text()}\n`,
    );
    return false;
  }
  return true;
}

async function fetchRecentObservations() {
  const d1 = new Date(Date.now() - LOOKBACK_DAYS * 86_400_000)
    .toISOString()
    .slice(0, 10);
  const results = [];
  for (const qualityGrade of ["research", "needs_id"]) {
    const url = `${BASE}/observations?${new URLSearchParams({
      lat: String(MANA_KAI.lat),
      lng: String(MANA_KAI.lng),
      radius: String(RADIUS_KM),
      taxon_id: "1",
      d1,
      quality_grade: qualityGrade,
      captive: "false",
      photos: "true",
      order_by: "observed_on",
      order: "desc",
      per_page: "200",
    })}`;
    const data = await getJSON(url);
    results.push(...(data.results ?? []));
    await sleep(1100);
  }
  return results;
}

function formatMessage(findings) {
  const lines = [
    `🐢 Notable Maui wildlife — ${findings.length} new ${
      findings.length === 1 ? "sighting" : "sightings"
    } worth a look:`,
    "",
  ];
  for (const find of findings) {
    const grade =
      find.qualityGrade === "research"
        ? "research-grade"
        : "awaiting community ID";
    lines.push(
      `• ${find.commonName ?? find.scientificName} (${find.scientificName}) · ${grade}`,
    );
    lines.push(`  ${find.reason}`);
    lines.push(
      `  ${find.observedOn ?? "date unknown"}${
        find.placeGuess ? ` near ${find.placeGuess}` : ""
      } — ${find.uri}`,
    );
  }
  const deepDive = findings.find((find) => find.context);
  if (deepDive) {
    lines.push("");
    lines.push(`🔎 Field note: ${deepDive.context.fieldNote}`);
    lines.push(`Research: ${deepDive.context.researchUrl}`);
    if (deepDive.context.experience) {
      lines.push(
        `Try this: ${deepDive.context.experience}${
          deepDive.context.experienceUrl
            ? ` ${deepDive.context.experienceUrl}`
            : ""
        }`,
      );
    }
  }
  lines.push("");
  lines.push(
    "Community-logged evidence, not a promise. Never approach, feed, or crowd wildlife.",
  );
  return lines.join("\n");
}

async function main() {
  const state = loadState();
  const observations = await fetchRecentObservations();

  const findings = [];
  const seenThisRun = new Set();
  for (const obs of observations) {
    const taxon = obs.taxon;
    if (!taxon?.name) continue;
    if (state.seenIds[String(obs.id)]) continue;
    if (seenThisRun.has(obs.id)) continue;

    const classification = classifyTaxon(taxon);
    if (!classification.notable) continue;
    const lastTaxonAlert = state.taxonLastAlertedAt[String(taxon.id)];
    const cooldownDays = classification.watchlisted
      ? WATCHLIST_COOLDOWN_DAYS
      : FALLBACK_COOLDOWN_DAYS;
    if (isWithinCooldown(lastTaxonAlert, cooldownDays)) {
      continue;
    }

    seenThisRun.add(obs.id);
    findings.push({
      id: obs.id,
      taxonId: taxon.id,
      scientificName: taxon.name,
      commonName: taxon.preferred_common_name,
      reason: classification.reason,
      score:
        (classification.score ?? 0) +
        (obs.quality_grade === "research" ? 10 : 0),
      context: classification.context,
      qualityGrade: obs.quality_grade,
      observedOn: obs.observed_on,
      placeGuess: obs.place_guess,
      uri: obs.uri,
    });
  }

  if (findings.length === 0) {
    process.stderr.write("No new notable sightings this run.\n");
    return;
  }

  // Keep one observation per species and cap the push to five high-signal
  // finds so a burst of records from one taxon cannot dominate the alert.
  const toSend = selectFindings(findings);

  const dryRun = process.argv.includes("--dry-run");
  if (dryRun) {
    process.stderr.write("--dry-run: not sending, not updating state.\n");
    console.log(formatMessage(toSend));
    return;
  }

  const sent = await sendTelegramMessage(formatMessage(toSend));
  if (sent) {
    const alertedAt = new Date().toISOString();
    for (const find of toSend) {
      state.seenIds[String(find.id)] = alertedAt;
      state.taxonLastAlertedAt[String(find.taxonId)] = alertedAt;
    }
    saveState(state);
    process.stderr.write(`Sent alert for ${toSend.length} sighting(s).\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
