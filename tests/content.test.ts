import assert from "node:assert/strict";
import test from "node:test";

import { experiences } from "../src/data/experiences";
import { creaturePlaces, creatures } from "../src/data/creatures";
import { dailyBrief } from "../src/data/daily";
import { calendarOptions } from "../src/data/events";
import { localAnchors } from "../src/data/locals";
import { fieldMissions } from "../src/data/missions";
import { fruitSources } from "../src/data/sourcing";
import { creatureSightings } from "../src/data/sightings";
import { inaturalistDiscoveryTrails } from "../src/data/inaturalistDiscovery";
import { wildlifeSpotlights } from "../src/data/wildlifeSpotlights";
import {
  rankedCalendarOptions,
  rankedCreaturePlaces,
  rankedExperiences,
  rankedLocalAnchors,
  rankCalendarOption,
  rankCreaturePlace,
  rankExperience,
  rankLocalAnchor,
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
      assert.ok(date >= "2026-07-08" && date <= "2026-07-12");
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

test("daily brief stays current, sourced, and linked to a calendar option", () => {
  assert.match(dailyBrief.date, /^2026-\d{2}-\d{2}$/);
  assert.ok(
    calendarOptions.some(
      (option) => option.id === dailyBrief.topFinding.eventId,
    ),
    `daily top finding references missing event ${dailyBrief.topFinding.eventId}`,
  );
  assert.ok(dailyBrief.checks.length >= 1);
  assert.ok(
    experiences.some(
      (experience) => experience.id === dailyBrief.adventure.experienceId,
    ),
    `daily adventure references missing experience ${dailyBrief.adventure.experienceId}`,
  );
  assert.equal(dailyBrief.adventure.fieldPlan.length, 3);
  assert.equal(dailyBrief.researchPulse.length, 4);
  assert.deepEqual(
    new Set(dailyBrief.researchPulse.map((item) => item.lane)),
    new Set(["adventure", "experience", "give-back", "closure"]),
  );
  assert.match(dailyBrief.adventure.sourceUrl, /^https:\/\//);
  assert.match(dailyBrief.adventure.accessSourceUrl, /^https:\/\//);
  for (const item of dailyBrief.researchPulse) {
    assert.match(item.sourceUrl, /^https:\/\//);
    assert.ok(item.finding.length >= 30);
  }
  for (const item of [...dailyBrief.checks, ...dailyBrief.watch]) {
    assert.match(item.sourceUrl, /^https:\/\//);
    assert.ok(item.detail.length >= 30);
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
  assert.ok(creatures.length >= 14);
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

test("every creature has ranked, sourced field-map options", () => {
  const creatureIds = new Set(creatures.map((creature) => creature.id));
  const placeIds = new Set<string>();
  for (const place of creaturePlaces) {
    assert.equal(placeIds.has(place.id), false, `duplicate place: ${place.id}`);
    placeIds.add(place.id);
    assert.ok(
      creatureIds.has(place.creatureId),
      `${place.id} references missing creature ${place.creatureId}`,
    );
    assert.match(place.sourceUrl, /^https:\/\//);
    assert.match(place.mapUrl, /^https:\/\/www\.google\.com\/maps\/search/);
    assert.match(place.verifiedAt, /^2026-\d{2}-\d{2}$/);
    assert.ok(place.parking.length >= 30, `${place.id} parking is too vague`);
    assert.ok(place.caveat.length >= 40, `${place.id} caveat is too weak`);
    for (const [name, value] of Object.entries(place.metrics)) {
      assert.ok(value >= 0 && value <= 5, `${place.id}.${name}=${value}`);
    }
    const score = rankCreaturePlace(place);
    assert.ok(score >= 0 && score <= 100, `${place.id} score=${score}`);
  }

  for (const creature of creatures) {
    const sourceOrder = creaturePlaces.filter(
      (place) => place.creatureId === creature.id,
    );
    const firstOriginal = sourceOrder[0]?.id;
    assert.ok(
      sourceOrder.length >= 2,
      `${creature.id} needs at least two places`,
    );
    const ranked = rankedCreaturePlaces(sourceOrder);
    assert.equal(sourceOrder[0]?.id, firstOriginal);
    for (let index = 1; index < ranked.length; index += 1) {
      const previous = ranked[index - 1]!;
      const current = ranked[index]!;
      assert.ok(
        previous.driveMinutes <= current.driveMinutes,
        `${creature.id} proximity inversion at ${index}`,
      );
      if (previous.driveMinutes === current.driveMinutes) {
        assert.ok(
          rankCreaturePlace(previous) >= rankCreaturePlace(current),
          `${creature.id} evidence inversion at ${index}`,
        );
      }
    }
  }
});

test("wildlife spotlights triangulate community records with deeper research", () => {
  assert.equal(wildlifeSpotlights.length, 3);
  const ids = new Set<string>();
  for (const spotlight of wildlifeSpotlights) {
    assert.equal(ids.has(spotlight.id), false, `duplicate: ${spotlight.id}`);
    ids.add(spotlight.id);
    assert.match(spotlight.scientificName, /\s/);
    assert.match(
      spotlight.observationUrl,
      /^https:\/\/www\.inaturalist\.org\/observations\/\d+$/,
    );
    assert.match(spotlight.experienceUrl, /^https:\/\//);
    assert.ok(spotlight.whyInteresting.length >= 100);
    assert.ok(spotlight.fieldMark.length >= 80);
    assert.ok(spotlight.researchLinks.length >= 2);
    for (const link of spotlight.researchLinks) {
      assert.match(link.url, /^https:\/\//);
      assert.equal(link.url.includes("inaturalist.org"), false);
    }
  }
});

test("iNaturalist discovery doors expand beyond the curated creature reel", () => {
  assert.equal(inaturalistDiscoveryTrails.length, 6);
  const ids = new Set<string>();
  for (const trail of inaturalistDiscoveryTrails) {
    assert.equal(ids.has(trail.id), false, `duplicate trail: ${trail.id}`);
    ids.add(trail.id);
    assert.ok(trail.speciesCount > 0, `${trail.id} has no species evidence`);
    assert.ok(trail.description.length >= 100);
    assert.ok(trail.fieldPrompt.length >= 60);
    const url = new URL(trail.url);
    assert.equal(url.origin, "https://www.inaturalist.org");
    assert.equal(url.pathname, "/observations");
    assert.equal(url.searchParams.get("quality_grade"), "research");
    assert.equal(url.searchParams.get("captive"), "false");
    assert.equal(url.searchParams.get("view"), "species");
    assert.equal(url.searchParams.get("subview"), "grid");
    assert.equal(url.searchParams.get("radius"), "50");
    assert.equal(url.searchParams.get("lat"), "20.7049");
    assert.equal(url.searchParams.get("lng"), "-156.4465");
    const d1 = url.searchParams.get("d1") ?? "";
    assert.match(d1, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(url.searchParams.get("photos"), "true");
    assert.match(trail.generatedAt, /^2026-\d{2}-\d{2}$/);
    assert.equal(
      (Date.parse(trail.generatedAt) - Date.parse(d1)) / 86_400_000,
      365,
    );
  }
  assert.ok(
    inaturalistDiscoveryTrails[0]!.speciesCount > creatures.length * 5,
    "the atlas handoff should materially expand beyond the curated guide",
  );
});

test("fruit sources carry safe links, real distances, and a corridor", () => {
  assert.ok(fruitSources.length >= 4);
  const ids = new Set<string>();
  const corridors = new Set<string>();
  for (const source of fruitSources) {
    assert.match(source.id, /^[a-z0-9-]+$/);
    assert.equal(ids.has(source.id), false, `duplicate source: ${source.id}`);
    ids.add(source.id);
    corridors.add(source.corridor);
    assert.match(source.sourceUrl, /^https:\/\//);
    assert.match(source.mapUrl, /^https:\/\//);
    assert.match(source.verifiedAt, /^2026-\d{2}-\d{2}$/);
    assert.ok(source.driveFromBase >= 0 && source.driveFromBase <= 180);
    assert.ok(source.freshPick.length >= 24);
    assert.ok(source.routeNote.length >= 16);
  }
  assert.ok(corridors.has("near-base"));
  assert.ok(corridors.has("airport-route"));
});

test("local anchors use direct public sources and explicit trip friction", () => {
  assert.ok(localAnchors.length >= 4);
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
    assert.ok(anchor.contactNote.length >= 20);
    if (anchor.quote) assert.ok(anchor.quote.length >= 10);
    for (const [name, value] of Object.entries(anchor.metrics)) {
      assert.ok(value >= 0 && value <= 5, `${anchor.id}.${name}=${value}`);
    }
    const score = rankLocalAnchor(anchor);
    assert.ok(score >= 0 && score <= 100, `${anchor.id} score=${score}`);
  }
});

test("local anchors rank by evidence without mutating source order", () => {
  const firstOriginal = localAnchors[0]?.id;
  const ranked = rankedLocalAnchors(localAnchors);
  assert.equal(localAnchors[0]?.id, firstOriginal);
  for (let index = 1; index < ranked.length; index += 1) {
    assert.ok(
      rankLocalAnchor(ranked[index - 1]!) >= rankLocalAnchor(ranked[index]!),
      `local ranking inversion at ${index}`,
    );
  }
});

test("field passport missions are unique, actionable, and internally routed", () => {
  assert.equal(fieldMissions.length, 6);
  const ids = new Set<string>();
  for (const mission of fieldMissions) {
    assert.match(mission.id, /^[a-z0-9-]+$/);
    assert.equal(
      ids.has(mission.id),
      false,
      `duplicate mission: ${mission.id}`,
    );
    ids.add(mission.id);
    assert.ok(mission.title.length >= 12);
    assert.ok(mission.prompt.length >= 40);
    assert.doesNotMatch(mission.href, /^(?:https?:|\/)/);
    if (mission.href.startsWith("creatures/#")) {
      const creatureId = mission.href.split("#")[1];
      assert.ok(
        creatures.some((creature) => creature.id === creatureId),
        `${mission.id} references missing creature ${creatureId}`,
      );
    }
  }
});

test("iNaturalist sightings reference real creatures and public observations", () => {
  const creatureIds = new Set(creatures.map((creature) => creature.id));
  const seen = new Set<string>();
  for (const sighting of creatureSightings) {
    assert.ok(
      creatureIds.has(sighting.creatureId),
      `sighting references unknown creature: ${sighting.creatureId}`,
    );
    assert.equal(
      seen.has(sighting.creatureId),
      false,
      `duplicate sighting entry: ${sighting.creatureId}`,
    );
    seen.add(sighting.creatureId);
    assert.ok(sighting.recentObservations >= 0);
    if (sighting.observationUrl) {
      assert.match(
        sighting.observationUrl,
        /^https:\/\/www\.inaturalist\.org\/observations\/\d+$/,
      );
    }
  }
  assert.equal(
    creatureSightings.length,
    creatures.length,
    "every creature should have a sightings entry (even if zero observations)",
  );
});
