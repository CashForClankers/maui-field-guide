import type { DailyBrief } from "./types";

export const dailyBrief = {
  date: "2026-07-03",
  dateLabel: "Fri · Jul 3",
  countdown: "5 days to arrival",
  headline: "The Daily tab now tells you what to prioritize.",
  summary:
    "A live top-five ranking now turns the research pile into a decision list. Today’s source sweep also sharpened what wildlife to look for in July, reconfirmed the Waiheʻe workday, and kept current closures visible.",
  topFinding: {
    title: "Waiheʻe loko iʻa kalo workday",
    detail:
      "Sat Jul 11 · 8am–noon · free · about 45 min from Mana Kai · minors supported through the official guardian waiver",
    eventId: "waihee-hilt-workday",
    action: "Review the service option",
  },
  checks: [
    {
      label: "Service",
      status: "confirmed",
      detail:
        "Hawaiʻi Land Trust still lists the Waiheʻe loko iʻa kalo workday for July 11, 8am–noon, with direct registration.",
      sourceLabel: "Hawaiʻi Land Trust",
      sourceUrl: "https://www.hilt.org/volunteer",
    },
    {
      label: "Wildlife timing",
      status: "new",
      detail:
        "July is still aeʻo breeding and fledging season at Keālia. Look for resident Hawaiian stilts and coots; winter migrants arrive later, and pond areas may close to protect chicks.",
      sourceLabel: "U.S. Fish & Wildlife Service",
      sourceUrl: "https://www.fws.gov/refuge/kealia-pond/species",
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
      label: "Summit",
      status: "confirmed",
      detail:
        "NPS lists the sunrise orientation every day through October 31; the talk is free, but sunrise entry still needs a $1 vehicle reservation plus park admission.",
      sourceLabel: "National Park Service",
      sourceUrl:
        "https://www.nps.gov/planyourvisit/event-details.htm?id=632bbd02-00bc-facb-ec92627ee0c0468e",
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
      title: "Keālia access can protect nesting birds",
      detail:
        "The boardwalk is open daily, but follow all refuge closures and signs if nesting aeʻo make parts of the ponds temporarily inaccessible.",
      sourceLabel: "U.S. Fish & Wildlife Service",
      sourceUrl: "https://www.fws.gov/refuge/kealia-pond/visit-us",
    },
    {
      title: "No swimming at the Pools of ʻOheʻo",
      detail:
        "NPS says the pools can be viewed from Kūloa Point Trail but remain inaccessible for swimming.",
      sourceLabel: "National Park Service alerts",
      sourceUrl: "https://www.nps.gov/hale/planyourvisit/conditions.htm",
    },
  ],
} satisfies DailyBrief;
