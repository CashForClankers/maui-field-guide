import type { DailyUpdate } from "./types";

export const updates = [
  {
    date: "2026-06-27",
    title: "Trip-date closure and one Hāna night option",
    note: "DLNR now marks ʻĪao Valley closed through Jul 17, so it was demoted to a closure watch; Hāna Arts' Jul 9 free Summer Mele concert was added only for a deliberately planned Hāna day or overnight.",
    experienceIds: ["iao-valley", "hana-arts-summer-mele"],
  },
  {
    date: "2026-06-27",
    title: "The field guide is alive",
    note: "Initial ranking favors nearby reef observation, endemic birds, local fruit, and free learning over generic tourist volume.",
    experienceIds: [
      "keawakapu-reef-ritual",
      "kealia-pond",
      "hosmer-grove",
      "upcountry-market",
    ],
  },
] satisfies DailyUpdate[];
