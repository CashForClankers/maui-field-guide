import type { DailyBrief } from "./types";

export const dailyBrief = {
  date: "2026-07-04",
  dateLabel: "Sat · Jul 4",
  countdown: "4 days to arrival",
  headline: "Kīpuka Olowalu is now the clearest early-trip give-back move.",
  summary:
    "Today’s publisher consumed the same-day handoff, reverified the dated calendar against primary sources, and added only the one lead that cleared the bar: Kīpuka Olowalu’s official Wednesday/Thursday volunteer workdays. The close GOAT movie, Waiheʻe workday, NOAA center, and Haleakalā sunrise reservation rules still check out from direct sources.",
  topFinding: {
    title: "Kīpuka Olowalu volunteer workday",
    detail:
      "Wed Jul 8 or Thu Jul 9 · 7:30–11:30am · free · about 34 min from Mana Kai · signup first and wait for email confirmation",
    eventId: "kipuka-olowalu-workday",
    action: "Request a Kīpuka workday",
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
      status: "new",
      finding:
        "Kīpuka Olowalu publishes Wednesday and Thursday volunteer days, 7:30–11:30am, with public signup and email confirmation; its team page names the local staff and board behind the work.",
      sourceLabel: "Kīpuka Olowalu",
      sourceUrl: "https://kipukaolowalu.org/volunteer",
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
      label: "Best new give-back lead",
      status: "new",
      detail:
        "Kīpuka Olowalu now has a calendar card for Wed Jul 8 or Thu Jul 9, built from the official volunteer schedule and team page rather than a third-party voluntour listing.",
      sourceLabel: "Kīpuka Olowalu team page",
      sourceUrl: "https://kipukaolowalu.org/team-2",
    },
    {
      label: "Calendar recheck",
      status: "confirmed",
      detail:
        "Maui County still lists the July 10 South District GOAT movie at Kamaʻole III; Hawaiʻi Land Trust still lists the July 11 Waiheʻe loko iʻa kalo workday.",
      sourceLabel: "Maui County calendar",
      sourceUrl: "https://www.mauicounty.gov/calendar.aspx",
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
        "NPS still says sunrise entry reservations are required from 3–7am, released 60 days out at 7am HST with a smaller 48-hour release.",
      sourceLabel: "National Park Service sunrise rules",
      sourceUrl: "https://www.nps.gov/hale/planyourvisit/sunrise.htm",
    },
  ],
  watch: [
    {
      title: "Kīpuka is not booked until they reply",
      detail:
        "The public schedule fits Jul 8 and Jul 9, but Kīpuka says dates vary and volunteer days can be cancelled for weather, so the family should wait for email confirmation.",
      sourceLabel: "Kīpuka Olowalu volunteer page",
      sourceUrl: "https://kipukaolowalu.org/volunteer",
    },
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
