import type { DailyBrief } from "./types";

export const dailyBrief = {
  date: "2026-07-07",
  dateLabel: "Tue · Jul 7",
  countdown: "1 day to arrival",
  headline:
    "Honu Hero turns any beach hour into a real reef-protection mission.",
  summary:
    "Today’s publisher consumed the same-day Agy handoff, reverified the calendar against primary sources, and added the strongest uncovered support lead: MOC Marine Institute’s free Honu Hero cleanup kit, usable any trip day without turning the guide into a generic attraction list. Kīpuka Olowalu, GOAT movie night, Beach Buddies, ʻĪao closure, and the wildlife evidence refresh remain current checks.",
  topFinding: {
    title: "Honu Hero beach cleanup kit",
    detail:
      "Jul 8–12 · free kit pickup 10am–2pm at Maui Ocean Center · choose a beach, collect debris, and return the data sheet · about 22 min from Mana Kai",
    eventId: "moc-honu-hero-cleanup",
    action: "Arrange a Honu Hero kit",
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
      status: "confirmed",
      finding:
        "Keālia remains the best dawn wildlife mission; July framing stays focused on resident aeʻo and ʻalae keʻokeʻo rather than winter migrants.",
      sourceLabel: "U.S. Fish & Wildlife Service",
      sourceUrl: "https://www.fws.gov/refuge/kealia-pond/species",
    },
    {
      lane: "experience",
      status: "new",
      finding:
        "Maui Ocean Center’s volunteer page confirms free Honu Hero cleanup kits with bucket or bag, data sheet, clipboard, pencils, gloves, beach choice, and 10am–2pm pickup.",
      sourceLabel: "Maui Ocean Center",
      sourceUrl: "https://mauioceancenter.com/volunteer-opportunities/",
    },
    {
      lane: "give-back",
      status: "confirmed",
      finding:
        "Kīpuka Olowalu still posts Wednesday/Thursday volunteer days, 7:30-11:30am, with email confirmation and weather caveats, so it remains the strongest early-trip land-stewardship option.",
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
      label: "Wildlife evidence refresh",
      status: "new",
      detail:
        "The iNaturalist refresh moved the local animal atlas to 926 species and the plants-plus-fungi trail to 868 species, with dated URLs regenerated for July 7.",
      sourceLabel: "iNaturalist API",
      sourceUrl: "https://api.inaturalist.org/v1/docs/",
    },
    {
      label: "Handoff lead accepted",
      status: "new",
      detail:
        "Honu Hero cleared the bar because the direct source gives the supply list, pickup window, beach-choice model, data sheet, and free family mission; it is not tied to aquarium admission.",
      sourceLabel: "Maui Ocean Center",
      sourceUrl: "https://mauioceancenter.com/volunteer-opportunities/",
    },
    {
      label: "Handoff lead already covered",
      status: "confirmed",
      detail:
        "Kīpuka Olowalu’s direct page still supports the existing Wed/Thu workday card, so today improved the calendar with a different ocean-support lane instead of duplicating that lead.",
      sourceLabel: "Kīpuka Olowalu",
      sourceUrl: "https://kipukaolowalu.org/volunteer",
    },
    {
      label: "Calendar recheck",
      status: "confirmed",
      detail:
        "Maui County still lists the July 10 South District GOAT movie at Kamaʻole III, while the existing Beach Buddies card remains backed by Maui Humane Society’s direct rules.",
      sourceLabel: "Maui County calendar",
      sourceUrl: "https://www.mauicounty.gov/calendar.aspx",
    },
    {
      label: "Farm handoff lead held",
      status: "watch",
      detail:
        "Hua Momona’s Voluntour is legitimate and mission-aligned, but it adds a higher-friction West Maui farm slot; it did not beat the free, close, flexible Honu Hero lead today.",
      sourceLabel: "Hua Momona Farms",
      sourceUrl: "https://www.huamomonafarms.com/voluntour",
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
