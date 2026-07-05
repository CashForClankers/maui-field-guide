import assert from "node:assert/strict";
import test from "node:test";

import {
  classifyTaxon,
  isWithinCooldown,
  selectFindings,
  SPECIES_CONTEXT,
  WATCHLIST,
} from "../scripts/lib/notable-sightings.mjs";

test("watchlist species are always notable with their curated reason", () => {
  for (const entry of WATCHLIST) {
    const result = classifyTaxon({ name: entry.scientificName });
    assert.equal(
      result.notable,
      true,
      `${entry.scientificName} should be notable`,
    );
    assert.equal(result.watchlisted, true);
    assert.equal(result.reason, entry.reason);
  }
});

test("threatened taxa are notable even if not on the watchlist", () => {
  const result = classifyTaxon({
    name: "Some Made-up Species",
    ancestor_ids: [48460, 1],
    threatened: true,
    observations_count: 50_000,
  });
  assert.equal(result.notable, true);
  assert.equal(result.watchlisted, false);
  assert.match(result.reason!, /threatened|endangered/i);
});

test("endemic taxa are notable even if common and not threatened", () => {
  const result = classifyTaxon({
    name: "Some Endemic Thing",
    ancestor_ids: [48460, 1],
    endemic: true,
    threatened: false,
    observations_count: 50_000,
  });
  assert.equal(result.notable, true);
  assert.match(result.reason!, /endemic/i);
});

test("globally rare taxa (low observation count) are notable via the fallback", () => {
  const rare = classifyTaxon({
    name: "Obscure Vagrant",
    ancestor_ids: [48460, 1],
    observations_count: 42,
  });
  assert.equal(rare.notable, true);
  assert.match(rare.reason!, /rarely logged/i);

  const common = classifyTaxon({
    name: "Common Waxbill",
    ancestor_ids: [48460, 1],
    observations_count: 13_074,
  });
  assert.equal(common.notable, false);
});

test("introduced species are never notable via the fallback, even if globally threatened or rare", () => {
  // Real case: Java Sparrow is globally IUCN-threatened but an introduced
  // pest bird in Hawaiʻi — must not fire a false "rare find" alert.
  const introducedButGloballyThreatened = classifyTaxon({
    name: "Padda oryzivora",
    ancestor_ids: [48460, 1],
    native: false,
    introduced: true,
    endemic: false,
    threatened: true,
    observations_count: 4685,
  });
  assert.equal(introducedButGloballyThreatened.notable, false);

  const introducedAndRareGlobally = classifyTaxon({
    name: "Some Introduced Rarity",
    ancestor_ids: [48460, 1],
    introduced: true,
    observations_count: 10,
  });
  assert.equal(introducedAndRareGlobally.notable, false);
});

test("ordinary, common, non-watchlisted taxa are not notable", () => {
  const result = classifyTaxon({
    name: "Zebrasoma flavescens",
    ancestor_ids: [48460, 1],
    endemic: false,
    threatened: false,
    native: false,
    observations_count: 20_000,
  });
  assert.equal(result.notable, false);
  assert.equal(result.reason, undefined);
});

test("non-animal taxa never trigger the wildlife fallback", () => {
  const silversword = classifyTaxon({
    name: "Argyroxiphium sandwicense",
    ancestor_ids: [48460, 47126],
    threatened: true,
    endemic: true,
    observations_count: 200,
  });
  assert.equal(silversword.notable, false);
});

test("watchlist entries have unique scientific names and non-trivial reasons", () => {
  const names = new Set<string>();
  for (const entry of WATCHLIST) {
    assert.equal(
      names.has(entry.scientificName),
      false,
      `duplicate: ${entry.scientificName}`,
    );
    names.add(entry.scientificName);
    assert.match(entry.scientificName, /^[A-Z][a-z]+ [a-z-]+$/);
    assert.ok(entry.commonName.length >= 3);
    assert.ok(entry.reason.length >= 20);
  }
});

test("alert selection favors signal and keeps one record per species", () => {
  const selected = selectFindings(
    [
      { id: 1, taxonId: 10, score: 60, observedOn: "2026-07-05" },
      { id: 2, taxonId: 20, score: 100, observedOn: "2026-07-03" },
      { id: 3, taxonId: 20, score: 90, observedOn: "2026-07-05" },
      { id: 4, taxonId: 30, score: 80, observedOn: "2026-07-04" },
    ],
    2,
  );
  assert.deepEqual(
    selected.map((item) => item.id),
    [2, 4],
  );
});

test("species cooldown handles recent, expired, missing, and malformed state", () => {
  const now = Date.parse("2026-07-05T12:00:00Z");
  assert.equal(isWithinCooldown("2026-07-04T12:00:00Z", 3, now), true);
  assert.equal(isWithinCooldown("2026-07-01T12:00:00Z", 3, now), false);
  assert.equal(isWithinCooldown(undefined, 3, now), false);
  assert.equal(isWithinCooldown("not-a-date", 3, now), false);
});

test("curated species context carries compact authoritative follow-up", () => {
  assert.ok(SPECIES_CONTEXT.size >= 5);
  for (const context of SPECIES_CONTEXT.values()) {
    assert.ok(context.fieldNote.length >= 80);
    assert.match(context.researchUrl, /^https:\/\//);
    assert.ok(context.experience.length >= 60);
    if (context.experienceUrl)
      assert.match(context.experienceUrl, /^https:\/\//);
  }
});
