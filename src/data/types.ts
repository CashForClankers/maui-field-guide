export type ExperienceKind =
  "ocean" | "wildlife" | "birds" | "fruit" | "farm" | "plants" | "culture";

export type Confidence = "primary" | "mixed" | "verify";

export type TripDate =
  | "2026-07-08"
  | "2026-07-09"
  | "2026-07-10"
  | "2026-07-11"
  | "2026-07-12"
  | "2026-07-13";

export type CalendarKind =
  | "local event"
  | "nature"
  | "culture"
  | "market"
  | "hands-on"
  | "paid experience";

export type CostBand = "free" | "budget" | "paid" | "splurge";

export interface CalendarOption {
  id: string;
  experienceId?: string;
  title: string;
  kind: CalendarKind;
  summary: string;
  whyItFits: string;
  decisionNote: string;
  dates: TripDate[];
  dateLabel: string;
  timeLabel: string;
  driveMinutes: number;
  duration: string;
  cost: string;
  costBand: CostBand;
  ageFit: string;
  reservation: string;
  bookingRequired: boolean;
  safety: string;
  tags: string[];
  metrics: {
    kidWow: number;
    local: number;
    value: number;
    novelty: number;
    certainty: number;
    friction: number;
  };
  confidence: Confidence;
  addedAt: string;
  verifiedAt: string;
  sourceLabel: string;
  sourceUrl: string;
  mapUrl: string;
  calendar?: {
    date: TripDate;
    startTime: string;
    endTime: string;
    location: string;
    basis: string;
  };
}

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

export interface Creature {
  id: string;
  commonName: string;
  hawaiianName: string;
  scientificName: string;
  kind: "reef fish" | "marine mammal" | "sea turtle" | "wetland bird";
  image: string;
  imageAlt: string;
  recognition: string;
  scienceNote: string;
  kidMission: string;
  whereToLook: string;
  driveMinutes: number;
  safety: string;
  sourceLabel: string;
  sourceUrl: string;
  mapUrl: string;
  photoCredit: string;
  photoLicense: string;
  photoSourceUrl: string;
}

export interface LocalAnchor {
  id: string;
  people: string;
  organization: string;
  kind: "land & culture" | "food resilience" | "animal rescue" | "small farm";
  place: string;
  summary: string;
  whyThisFits: string;
  helpAction: string;
  kidTakeaway: string;
  tripFit: string;
  driveMinutes: number;
  cost: string;
  friction: string;
  contactLabel: string;
  contactUrl: string;
  sourceUrl: string;
  mapUrl: string;
  verifiedAt: string;
  topPick?: boolean;
}
