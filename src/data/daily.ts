import type { DailyBrief } from "./types";

export const dailyBrief = {
  date: "2026-07-03",
  dateLabel: "Fri · Jul 3",
  countdown: "5 days to arrival",
  headline: "The free GOAT movie still looks like the easiest exact-date win.",
  summary:
    "Today’s calendar-first sweep rechecked the strongest July 8–12 options and rejected a stale Kaʻehu volunteer lead because the direct listings now point outside the trip window. The close, free Kamaʻole III movie and Waiheʻe workday remain the clearest low-friction and give-back decisions.",
  topFinding: {
    title: "GOAT movie night at Kamaʻole III",
    detail:
      "Fri Jul 10 · starts at sunset · free · about 4 min from Mana Kai · bring alcohol-free drinks, snacks, and low-back seating",
    eventId: "kam-iii-goat-movie",
    action: "Add the free movie night",
  },
  adventure: {
    experienceId: "kealia-pond",
    title: "Keālia sunrise bird detective",
    pitch:
      "Use the coastal boardwalk as a 45-minute family field mission: find the pink legs of an aeʻo, the white shield of an ʻalae keʻokeʻo, and one sign that this wetland is a nursery—not empty land.",
    fieldPlan: [
      "Arrive near the 6:30am boardwalk opening, before heat and the rest of the day build.",
      "Let each kid choose one field mark, one behavior, and one question; photograph without approaching wildlife.",
      "Treat every closure rope and sign as part of the lesson: aeʻo breeding and fledging can restrict pond access through July.",
    ],
    planB:
      "If access, weather, or family energy is wrong, use the free NOAA Kīhei visitor center on a weekday from 9:30am–2:30pm.",
    sourceLabel: "USFWS breeding-season guidance",
    sourceUrl: "https://www.fws.gov/refuge/kealia-pond/species",
    accessSourceLabel: "USFWS hours and access",
    accessSourceUrl: "https://www.fws.gov/refuge/kealia-pond/visit-us",
  },
  researchPulse: [
    {
      lane: "adventure",
      status: "new",
      finding:
        "Keālia now has an explicit dawn field plan built around resident aeʻo and ʻalae keʻokeʻo, not an unrealistic summer migrant checklist.",
      sourceLabel: "U.S. Fish & Wildlife Service",
      sourceUrl: "https://www.fws.gov/refuge/kealia-pond/species",
    },
    {
      lane: "experience",
      status: "confirmed",
      finding:
        "The free NOAA Kīhei visitor center remains the strongest low-effort indoor marine-learning fallback, open weekdays 9:30am–2:30pm.",
      sourceLabel: "NOAA Sanctuary",
      sourceUrl:
        "https://hawaiihumpbackwhale.noaa.gov/visit/visitor-centers.html",
    },
    {
      lane: "give-back",
      status: "confirmed",
      finding:
        "Hawaiʻi Land Trust still publishes the July 11 Waiheʻe loko iʻa kalo workday, 8am–noon, with a direct registration path.",
      sourceLabel: "Hawaiʻi Land Trust",
      sourceUrl: "https://www.hilt.org/volunteer",
    },
    {
      lane: "closure",
      status: "watch",
      finding:
        "ʻĪao Valley remains closed through July 17, so it stays out of the trip calendar despite its normal reservation details.",
      sourceLabel: "Hawaiʻi DLNR",
      sourceUrl:
        "https://dlnr.hawaii.gov/dsp/parks/maui/iao-valley-state-monument/",
    },
  ],
  checks: [
    {
      label: "Closest wildlife",
      status: "new",
      detail:
        "Kihikihi, Hawaiian cleaner wrasse, and rock-boring ʻina now start with the on-site Keawakapu reef edge, and every creature map sorts by travel time from Mana Kai before evidence breaks a tie.",
      sourceLabel: "Waikīkī Aquarium · Hawaiian reef animal guides",
      sourceUrl:
        "https://www.waikikiaquarium.org/experience/animal-guide/fishes/moorish-idol/moorish-idol/",
    },
    {
      label: "Wildlife field maps",
      status: "new",
      detail:
        "Every creature now has two ranked observation access points with exact pins when verified, parking or entry instructions, and an evidence label that separates documented sites from habitat fits and low-confidence watches.",
      sourceLabel: "Maui County · Ulua–Mōkapu access",
      sourceUrl:
        "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    },
    {
      label: "Closest exact event",
      status: "confirmed",
      detail:
        "Maui County still lists GOAT for Friday, July 10 at Kamaʻole III Beach Park, south end, starting at sunset with free admission.",
      sourceLabel: "Maui County calendar",
      sourceUrl:
        "https://www.mauicounty.gov/Calendar.aspx?EID=13876&calType=0&day=1&month=7&year=2026",
    },
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
      title: "Kaʻehu did not clear the date-fit bar",
      detail:
        "A HandsOn lead suggested Kaʻehu Mālama ʻĀina, but the direct Pacific Whale Foundation event page currently lists July 15 and the open HandsOn detail shows August 19, so it stays off the July 8–12 calendar.",
      sourceLabel: "Pacific Whale Foundation",
      sourceUrl:
        "https://pacificwhale.org/event/ka%CA%BBehu-volunteering-opportunity/",
    },
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
