export type ExperienceKind =
  "ocean" | "wildlife" | "birds" | "fruit" | "farm" | "plants" | "culture";

export type Confidence = "primary" | "mixed" | "verify";

export interface Experience {
  id: string;
  title: string;
  kind: ExperienceKind;
  summary: string;
  whyItFits: string;
  kidTakeaway: string;
  driveMinutes: number;
  duration: string;
  cost: string;
  isFree: boolean;
  ageFit: string;
  bestWindow: string;
  reservation: string;
  safety: string;
  tags: string[];
  metrics: {
    kidWow: number;
    nature: number;
    local: number;
    value: number;
    learning: number;
    novelty: number;
    friction: number;
  };
  confidence: Confidence;
  addedAt: string;
  verifiedAt: string;
  sourceLabel: string;
  sourceUrl: string;
  mapUrl: string;
  scheduledDate?: string;
}

export interface DailyUpdate {
  date: string;
  title: string;
  note: string;
  experienceIds: string[];
}

export interface FruitNote {
  name: string;
  julySignal: "strong" | "possible" | "year-round";
  lookFor: string;
  taste: string;
  question: string;
}
