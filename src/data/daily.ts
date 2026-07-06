import type { DailyBrief } from "./types";

export const dailyBrief = {
  date: "2026-07-06",
  dateLabel: "Mon · Jul 6",
  countdown: "2 days to arrival",
  headline:
    "Beach Buddies turns a beach day into a shelter-dog rescue mission.",
  summary:
    "Today’s publisher consumed the same-day handoff, reverified the calendar against primary sources, and added the one lead with fresh support value that was not already covered: Maui Humane Society’s Beach Buddies outing, Thu-Sat by reservation. Kīpuka Olowalu, Waiheʻe, GOAT movie night, ʻĪao closure, and the Haleakalā Pools of ʻOheʻo warning remain current checks.",
  topFinding: {
    title: "Maui Humane Society Beach Buddies",
    detail:
      "Thu-Sat Jul 9–11 · by reservation · $75 fee supports shelter care · kids may join while adults 18+ handle the dog · about 18 min from Mana Kai",
    eventId: "maui-humane-beach-buddies",
    action: "Check Beach Buddies slots",
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
      status: "new",
      finding:
        "Maui Humane Society’s Beach Buddies page now gives the actionable rules: $75 fee, kids welcome if noted on registration, adults handle the dog, Wednesday/Sunday closed, and new slots may open 10 days out.",
      sourceLabel: "Maui Humane Society",
      sourceUrl: "https://www.mauihumanesociety.org/beachbuddies/",
    },
    {
      lane: "give-back",
      status: "confirmed",
      finding:
        "Kīpuka Olowalu still posts Wednesday/Thursday volunteer days, 7:30-11:30am, with email confirmation and weather caveats, so it remains the best early-trip land-stewardship option.",
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
      label: "Wildlife guide opens wider",
      status: "new",
      detail:
        "The curated creature cards now end with six species-first iNaturalist doors covering the full local animal atlas, reef fish, nudibranchs, birds, threatened wildlife, and plants plus fungi.",
      sourceLabel: "iNaturalist search URL guide",
      sourceUrl: "https://www.inaturalist.org/pages/search+urls",
    },
    {
      label: "Wildlife signal → field story",
      status: "new",
      detail:
        "Recent grey reef shark, kole, and nēnē records now open into identification clues, deeper agency or museum research, and one realistic family experience instead of ending at an observation link.",
      sourceLabel: "Florida Museum grey reef shark profile",
      sourceUrl:
        "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/grey-reef-shark/",
    },
    {
      label: "Best new support lead",
      status: "new",
      detail:
        "Beach Buddies clears the calendar bar because the direct page explains the fee, booking path, kid fit, adult-handler rule, supplies, and shelter-support purpose.",
      sourceLabel: "Maui Humane Society",
      sourceUrl: "https://www.mauihumanesociety.org/beachbuddies/",
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
      label: "Farm tour handoff lead",
      status: "confirmed",
      detail:
        "Oʻo Farm is legitimate and direct, with Monday-Friday tours, but it did not beat already-covered Upcountry farm choices for this run because it is another paid farm slot rather than a new support lane.",
      sourceLabel: "Oʻo Farm",
      sourceUrl: "https://oofarm.com/tours",
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
      label: "Reef field guide",
      status: "new",
      detail:
        "The creature directory now covers 35 animals with quick field marks, expandable safety and maps, and a wider Maui reef set checked against Hawaiʻi Sea Grant and Waikīkī Aquarium references.",
      sourceLabel: "University of Hawaiʻi Sea Grant reef guide",
      sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
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
      title: "Beach Buddies requires the right dog-handler fit",
      detail:
        "Maui Humane Society says Beach Buddies dogs are often young, large, energetic, or still learning manners; skip it if an adult cannot confidently handle that dog.",
      sourceLabel: "Maui Humane Society",
      sourceUrl: "https://www.mauihumanesociety.org/beachbuddies/",
    },
    {
      title: "Honu Watch is a conservation watch item, not a plan yet",
      detail:
        "Hawaiʻi Wildlife Fund confirms May–October turtle nesting season and volunteer paths, but the public Honu Watch page does not provide current south-Maui site hours for a family drop-in plan.",
      sourceLabel: "Hawaiʻi Wildlife Fund",
      sourceUrl:
        "https://www.wildhawaii.org/our-work/conservation/green-sea-turtle-honu-watch/",
    },
    {
      title: "Surfing Goat is not a Sunday option",
      detail:
        "The dairy lists Tuesday-Saturday hours and is closed every Sunday and Monday, so the new card deliberately stops at Saturday, July 11.",
      sourceLabel: "Surfing Goat Dairy tour schedule",
      sourceUrl: "https://surfinggoatdairy.com/pages/our-tour-schedule",
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
