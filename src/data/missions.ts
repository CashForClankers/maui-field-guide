import type { FieldMission } from "./types";

export const fieldMissions = [
  {
    id: "reef-field-mark",
    category: "notice",
    title: "Name one reef field mark",
    prompt:
      "Identify an animal by shape, color, or behavior without following or crowding it.",
    href: "creatures/",
    action: "Open wildlife guide",
  },
  {
    id: "aeo-listen",
    category: "notice",
    title: "Listen for aeʻo",
    prompt:
      "Notice the stilt’s call or long pink legs, then respect every nesting closure and sign.",
    href: "creatures/#hawaiian-stilt",
    action: "Meet the aeʻo",
  },
  {
    id: "cultivar-question",
    category: "taste",
    title: "Ask for the cultivar",
    prompt:
      "Ask a grower what variety it is, where it grew, and how they know it is ripe.",
    href: "fruit/",
    action: "Build a fruit flight",
  },
  {
    id: "learn-a-name",
    category: "connect",
    title: "Learn one local name",
    prompt:
      "Meet a named host or small team and learn what their work protects or produces.",
    href: "locals/",
    action: "Meet local anchors",
  },
  {
    id: "useful-support",
    category: "care",
    title: "Do one useful thing",
    prompt:
      "Complete an assigned stewardship task or buy directly from a Maui producer.",
    href: "locals/",
    action: "Choose direct support",
  },
  {
    id: "teach-back-rule",
    category: "care",
    title: "Let a kid teach the rule",
    prompt:
      "Have a child explain one wildlife distance or reef rule before the family needs it.",
    href: "rules/",
    action: "Practice field rules",
  },
] satisfies FieldMission[];
