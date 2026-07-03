export type ExperienceKind =
  | "ocean"
  | "adventure"
  | "wildlife"
  | "birds"
  | "fruit"
  | "farm"
  | "plants"
  | "culture";

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

export interface DailyBrief {
  date: string;
  dateLabel: string;
  countdown: string;
  headline: string;
  summary: string;
  topFinding: {
    title: string;
    detail: string;
    eventId: string;
    action: string;
  };
  adventure: {
    experienceId: string;
    title: string;
    pitch: string;
    fieldPlan: string[];
    planB: string;
    sourceLabel: string;
    sourceUrl: string;
    accessSourceLabel: string;
    accessSourceUrl: string;
  };
  researchPulse: {
    lane: "adventure" | "experience" | "give-back" | "closure";
    status: "new" | "confirmed" | "watch";
    finding: string;
    sourceLabel: string;
    sourceUrl: string;
  }[];
  checks: {
    label: string;
    status: "new" | "confirmed" | "watch";
    detail: string;
    sourceLabel: string;
    sourceUrl: string;
  }[];
  watch: {
    title: string;
    detail: string;
    sourceLabel: string;
    sourceUrl: string;
  }[];
}

export interface FieldMission {
  id: string;
  category: "notice" | "taste" | "connect" | "care";
  title: string;
  prompt: string;
  href: string;
  action: string;
}

export interface FruitNote {
  name: string;
  julySignal: "strong" | "possible" | "year-round";
  lookFor: string;
  taste: string;
  question: string;
}

export interface FruitSource {
  id: string;
  name: string;
  category: "coffee" | "market" | "swap meet" | "farm stand";
  corridor: "near-base" | "airport-route";
  driveFromBase: number;
  routeNote: string;
  openLabel: string;
  freshPick: string;
  tripFit: string;
  confidence: Confidence;
  verifiedAt: string;
  sourceLabel: string;
  sourceUrl: string;
  mapUrl: string;
}

export type CreatureHabitat =
  "reef" | "open ocean" | "shoreline" | "wetland" | "resort grounds";

export interface Creature {
  id: string;
  commonName: string;
  hawaiianName?: string;
  scientificName: string;
  kind:
    | "reef fish"
    | "marine mammal"
    | "sea turtle"
    | "wetland bird"
    | "seabird"
    | "land bird"
    | "land mammal"
    | "cephalopod";
  habitat: CreatureHabitat;
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
  kind:
    | "land & culture"
    | "food resilience"
    | "animal rescue"
    | "small farm"
    | "farm & lessons";
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
  contactNote: string;
  sourceUrl: string;
  mapUrl: string;
  verifiedAt: string;
  metrics: {
    kidWow: number;
    local: number;
    learning: number;
    support: number;
    novelty: number;
    friction: number;
  };
  quote?: string;
  quoteCite?: string;
}
