import assert from "node:assert/strict";
import test from "node:test";

import { experiences } from "../src/data/experiences";
import { creatures } from "../src/data/creatures";
import { calendarOptions } from "../src/data/events";
import { localAnchors } from "../src/data/locals";
import {
  rankedCalendarOptions,
  rankedExperiences,
  rankCalendarOption,
  rankExperience,
} from "../src/lib/rank";

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

test("calendar index stays sourced, trip-bound, and rankable", () => {
  assert.ok(calendarOptions.length > 0);
  const ids = new Set<string>();
  const canonicalExperienceIds = new Set(experiences.map((item) => item.id));
  const referencedExperienceIds = new Set<string>();
  const validTime = /^([01]\d|2[0-3]):[0-5]\d$/;
  const minutes = (value: string) => {
    const [hour, minute] = value.split(":").map(Number);
    return hour! * 60 + minute!;
  };
  for (const option of calendarOptions) {
    assert.match(option.id, /^[a-z0-9-]+$/);
    assert.equal(
      ids.has(option.id),
      false,
      `duplicate calendar id: ${option.id}`,
    );
    ids.add(option.id);
    assert.ok(option.dates.length >= 1, `${option.id} has no trip date`);
    for (const date of option.dates) {
      assert.ok(date >= "2026-07-08" && date <= "2026-07-13");
    }
    assert.match(option.sourceUrl, /^https:\/\//);
    assert.match(option.mapUrl, /^https:\/\//);
    assert.ok(option.decisionNote.length >= 30);
    if (option.experienceId) {
      assert.ok(
        canonicalExperienceIds.has(option.experienceId),
        `${option.id} references missing experience ${option.experienceId}`,
      );
      assert.equal(
        referencedExperienceIds.has(option.experienceId),
        false,
        `duplicate canonical experience reference: ${option.experienceId}`,
      );
      referencedExperienceIds.add(option.experienceId);
    }
    for (const [name, value] of Object.entries(option.metrics)) {
      assert.ok(value >= 0 && value <= 5, `${option.id}.${name}=${value}`);
    }
    const score = rankCalendarOption(option);
    assert.ok(score >= 0 && score <= 100, `${option.id} score=${score}`);
    if (option.calendar) {
      assert.ok(new Set<string>(option.dates).has(option.calendar.date));
      assert.match(option.calendar.startTime, validTime);
      assert.match(option.calendar.endTime, validTime);
      assert.ok(
        minutes(option.calendar.endTime) > minutes(option.calendar.startTime),
        `${option.id} calendar end must follow start`,
      );
      assert.ok(option.calendar.basis.length >= 20);
    }
  }

  const ranked = rankedCalendarOptions(calendarOptions);
  assert.equal(ranked[0]?.id, "kam-iii-goat-movie");
  for (let index = 1; index < ranked.length; index += 1) {
    assert.ok(
      rankCalendarOption(ranked[index - 1]!) >=
        rankCalendarOption(ranked[index]!),
      `calendar ranking inversion at ${index}`,
    );
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

test("local anchors use direct public sources and explicit trip friction", () => {
  assert.ok(localAnchors.length >= 4);
  assert.equal(localAnchors.filter((anchor) => anchor.topPick).length, 1);
  const ids = new Set<string>();
  for (const anchor of localAnchors) {
    assert.equal(
      ids.has(anchor.id),
      false,
      `duplicate local anchor: ${anchor.id}`,
    );
    ids.add(anchor.id);
    assert.match(anchor.sourceUrl, /^https:\/\//);
    assert.match(anchor.contactUrl, /^https:\/\//);
    assert.match(anchor.mapUrl, /^https:\/\//);
    assert.match(anchor.verifiedAt, /^2026-\d{2}-\d{2}$/);
    assert.ok(anchor.people.length >= 8);
    assert.ok(anchor.helpAction.length >= 40);
    assert.ok(anchor.friction.length >= 40);
  }
});
