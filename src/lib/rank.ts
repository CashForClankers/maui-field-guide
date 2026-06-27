import type { Confidence, Experience } from "../data/types";

const confidencePoints: Record<Confidence, number> = {
  primary: 6,
  mixed: 3,
  verify: 0,
};

export function rankExperience(experience: Experience): number {
  const { metrics } = experience;
  const proximity = Math.max(0, 10 - experience.driveMinutes / 12);
  const raw =
    metrics.kidWow * 4 +
    metrics.nature * 4 +
    metrics.local * 3 +
    metrics.value * 3 +
    metrics.learning * 3 +
    metrics.novelty * 2 +
    proximity +
    (experience.isFree ? 4 : 0) +
    confidencePoints[experience.confidence] -
    metrics.friction * 4;

  return Math.round(Math.max(0, Math.min(100, raw / 1.15)));
}

export function rankedExperiences(experiences: Experience[]): Experience[] {
  return [...experiences].sort((a, b) => {
    const scoreDelta = rankExperience(b) - rankExperience(a);
    if (scoreDelta !== 0) return scoreDelta;
    if (a.driveMinutes !== b.driveMinutes)
      return a.driveMinutes - b.driveMinutes;
    return a.title.localeCompare(b.title);
  });
}

export function isFresh(experience: Experience, today = new Date()): boolean {
  const added = new Date(`${experience.addedAt}T12:00:00Z`);
  const ageDays = (today.getTime() - added.getTime()) / 86_400_000;
  return ageDays >= 0 && ageDays <= 7;
}
