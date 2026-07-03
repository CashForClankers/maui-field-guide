import type { DailyBrief } from "./types";

export const dailyBrief = {
  date: "2026-07-02",
  dateLabel: "Thu · Jul 2",
  countdown: "6 days to arrival",
  headline: "A second real way to give back on Saturday.",
  summary:
    "Hawaiʻi Land Trust now gives the family a directly registered Waiheʻe workday alongside the higher-friction Maui Cultural Lands option. Today’s source sweep also reconfirmed the closest free nature stops and the closures that should stay off the plan.",
  topFinding: {
    title: "Waiheʻe loko iʻa kalo workday",
    detail:
      "Sat Jul 11 · 8am–noon · free · about 45 min from Mana Kai · minors supported through the official guardian waiver",
    eventId: "waihee-hilt-workday",
    action: "See the ranked calendar card",
  },
  checks: [
    {
      label: "Service",
      status: "new",
      detail:
        "Hawaiʻi Land Trust lists the Waiheʻe workday for July 11 and links directly to registration.",
      sourceLabel: "Hawaiʻi Land Trust",
      sourceUrl: "https://www.hilt.org/volunteer",
    },
    {
      label: "Close + free",
      status: "confirmed",
      detail:
        "NOAA’s Kīhei visitor center remains open weekdays, 9:30am–2:30pm, with admission-free marine exhibits and family programs.",
      sourceLabel: "NOAA Sanctuary",
      sourceUrl:
        "https://hawaiihumpbackwhale.noaa.gov/visit/visitor-centers.html",
    },
    {
      label: "Bird stop",
      status: "confirmed",
      detail:
        "Keālia’s coastal boardwalk remains open daily; the refuge’s visitor center is a separate weekday stop.",
      sourceLabel: "U.S. Fish & Wildlife Service",
      sourceUrl: "https://www.fws.gov/refuge/kealia-pond/visit-us",
    },
    {
      label: "Evenings",
      status: "confirmed",
      detail:
        "ProArts still lists Waiakoa Jul 8, Jazz Organ Summit Jul 10, Kalani Peʻa Jul 11, and Magic in Paradise Jul 12.",
      sourceLabel: "ProArts July calendar",
      sourceUrl: "https://proartsmaui.org/all-events/month/2026-07/",
    },
  ],
  watch: [
    {
      title: "ʻĪao remains off the calendar",
      detail:
        "Hawaiʻi State Parks still lists the monument closed through July 17 for safety improvements.",
      sourceLabel: "Hawaiʻi DLNR",
      sourceUrl:
        "https://dlnr.hawaii.gov/dsp/parks/maui/iao-valley-state-monument/",
    },
    {
      title: "Haleakalā is open, with two caveats",
      detail:
        "Summit sunrise still requires the $1 vehicle reservation, and NPS says the Pools of ʻOheʻo are not open for swimming.",
      sourceLabel: "National Park Service alerts",
      sourceUrl: "https://www.nps.gov/hale/planyourvisit/conditions.htm",
    },
  ],
} satisfies DailyBrief;
