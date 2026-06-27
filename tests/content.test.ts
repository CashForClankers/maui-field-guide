import assert from "node:assert/strict";
import test from "node:test";

import { experiences } from "../src/data/experiences";
import { creatures } from "../src/data/creatures";
import { rankedExperiences, rankExperience } from "../src/lib/rank";

test("experience identifiers and source URLs are safe and unique", () => {
  const ids = new Set<string>();
  for (const experience of experiences) {
    assert.match(experience.id, /^[a-z0-9-]+$/);
    assert.equal(
      ids.has(experience.id),
      false,
      `duplicate id: ${experience.id}`,
    );
    ids.add(experience.id);
    assert.match(experience.sourceUrl, /^https:\/\//);
    assert.match(experience.mapUrl, /^https:\/\//);
  }
});

test("ranking evidence stays in its declared range", () => {
  for (const experience of experiences) {
    for (const [name, value] of Object.entries(experience.metrics)) {
      assert.ok(value >= 0 && value <= 5, `${experience.id}.${name}=${value}`);
    }
    const score = rankExperience(experience);
    assert.ok(score >= 0 && score <= 100, `${experience.id} score=${score}`);
  }
});

test("ranked output is descending and does not mutate source data", () => {
  const firstOriginal = experiences[0]?.id;
  const ranked = rankedExperiences(experiences);
  assert.equal(experiences[0]?.id, firstOriginal);
  for (let index = 1; index < ranked.length; index += 1) {
    assert.ok(
      rankExperience(ranked[index - 1]!) >= rankExperience(ranked[index]!),
      `ranking inversion at ${index}`,
    );
  }
});

test("scheduled discoveries fall inside the trip window", () => {
  for (const experience of experiences) {
    if (!experience.scheduledDate) continue;
    assert.ok(experience.scheduledDate >= "2026-07-08");
    assert.ok(experience.scheduledDate <= "2026-07-13");
  }
});

test("wildlife records always carry an explicit safety statement", () => {
  for (const experience of experiences.filter((item) =>
    ["ocean", "wildlife", "birds"].includes(item.kind),
  )) {
    assert.ok(
      experience.safety.length >= 24,
      `${experience.id} safety note is too weak`,
    );
  }
});

test("creature guide keeps science, safety, maps, and photo rights visible", () => {
  assert.ok(creatures.length >= 5);
  const ids = new Set<string>();
  for (const creature of creatures) {
    assert.equal(
      ids.has(creature.id),
      false,
      `duplicate creature: ${creature.id}`,
    );
    ids.add(creature.id);
    assert.match(creature.scientificName, /\s/);
    assert.match(creature.sourceUrl, /^https:\/\//);
    assert.match(creature.mapUrl, /^https:\/\//);
    assert.match(creature.photoSourceUrl, /^https:\/\//);
    assert.ok(creature.photoCredit.length >= 8);
    assert.ok(creature.photoLicense.length >= 8);
    assert.ok(creature.safety.length >= 40);
  }
});
