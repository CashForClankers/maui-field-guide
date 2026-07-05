import assert from "node:assert/strict";
import test from "node:test";

import { classifyTaxon, WATCHLIST } from "../scripts/lib/notable-sightings.mjs";

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
    observations_count: 42,
  });
  assert.equal(rare.notable, true);
  assert.match(rare.reason!, /rarely logged/i);

  const common = classifyTaxon({
    name: "Common Waxbill",
    observations_count: 13_074,
  });
  assert.equal(common.notable, false);
});

test("introduced species are never notable via the fallback, even if globally threatened or rare", () => {
  // Real case: Java Sparrow is globally IUCN-threatened but an introduced
  // pest bird in Hawaiʻi — must not fire a false "rare find" alert.
  const introducedButGloballyThreatened = classifyTaxon({
    name: "Padda oryzivora",
    native: false,
    introduced: true,
    endemic: false,
    threatened: true,
    observations_count: 4685,
  });
  assert.equal(introducedButGloballyThreatened.notable, false);

  const introducedAndRareGlobally = classifyTaxon({
    name: "Some Introduced Rarity",
    introduced: true,
    observations_count: 10,
  });
  assert.equal(introducedAndRareGlobally.notable, false);
});

test("ordinary, common, non-watchlisted taxa are not notable", () => {
  const result = classifyTaxon({
    name: "Zebrasoma flavescens",
    endemic: false,
    threatened: false,
    native: false,
    observations_count: 20_000,
  });
  assert.equal(result.notable, false);
  assert.equal(result.reason, undefined);
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
