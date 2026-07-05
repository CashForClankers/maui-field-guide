import type { WildlifeSpotlight } from "./types";

export const wildlifeSpotlights = [
  {
    id: "grey-reef-shark",
    commonName: "Grey reef shark",
    scientificName: "Carcharhinus amblyrhynchos",
    signal: "Research-grade record · July 4",
    whyInteresting:
      "This reef-edge hunter often gathers with others by day, becomes more active at night, and can return repeatedly to favored reef habitat. Its small litters and late maturity make population losses slow to replace.",
    fieldMark:
      "Look for a stocky grey shark with a broad black margin along the trailing edge of the tail—not white tips on the dorsal and tail like a whitetip reef shark.",
    experience:
      "Use Maui Ocean Center’s Open Ocean tunnel as the safe comparison lab: naturalists can help distinguish grey reef, blacktip reef, whitetip reef, and sandbar sharks before any boat day.",
    experienceUrl: "https://mauioceancenter.com/exhibit/open-ocean/",
    observationUrl: "https://www.inaturalist.org/observations/378157889",
    verifiedAt: "2026-07-05",
    researchLinks: [
      {
        label: "Florida Museum species profile",
        url: "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/grey-reef-shark/",
      },
      {
        label: "Maui Ocean Center shark exhibit",
        url: "https://mauioceancenter.com/exhibit/open-ocean/",
      },
    ],
  },
  {
    id: "kole",
    commonName: "Kole · goldring surgeonfish",
    scientificName: "Ctenochaetus strigosus",
    signal: "Community ID in progress · July 4",
    whyInteresting:
      "Kole are endemic to Hawaiʻi and Johnston Atoll. Despite being grouped with herbivorous surgeonfish, their bristlelike teeth brush up detritus, sediments, diatoms, microbes, and tiny algae from reef surfaces.",
    fieldMark:
      "The bright gold ring around the eye gives it away. Adults are brown with fine pale horizontal lines; juveniles begin dramatically yellow before darkening.",
    experience:
      "Turn a calm, lawful snorkel into a feeding-strategy hunt: hover without kicking coral and compare a kole’s surface-brushing behavior with a yellow tang cropping algae.",
    experienceUrl: "https://dlnr.hawaii.gov/holomua/surgeonfish/",
    observationUrl: "https://www.inaturalist.org/observations/378156602",
    verifiedAt: "2026-07-05",
    researchLinks: [
      {
        label: "Hawaiʻi DLNR kole ecology brief",
        url: "https://dlnr.hawaii.gov/dar/files/2024/07/Data-Review-and-Management-Brief-for-the-West-Hawai%CA%BBi-Commercial-Aquarium-Fishery-Updated-July-2024-With-Track-Changes-Shown.pdf#page=80",
      },
      {
        label: "DLNR surgeonfish field guide",
        url: "https://dlnr.hawaii.gov/holomua/surgeonfish/",
      },
    ],
  },
  {
    id: "nene",
    commonName: "Nēnē · Hawaiian goose",
    scientificName: "Branta sandvicensis",
    signal: "Research-grade Haleakalā record · July 3",
    whyInteresting:
      "The nēnē is the only surviving endemic Hawaiian goose. It disappeared from Maui before 1890, then returned when conservationists reintroduced birds at Haleakalā beginning in 1962.",
    fieldMark:
      "Notice the black head, buff cheeks, deeply furrowed neck, long walking legs, and reduced toe webbing—an island adaptation for crossing rough lava rather than spending life on ponds.",
    experience:
      "Make Kalahaku Overlook a slow wildlife stop rather than only a crater photo. Scan nearby grass and shrubland, stay on designated paths, and drive carefully because birds may stand near roads.",
    experienceUrl:
      "https://www.nps.gov/hale/learn/nature/birds-of-the-summit-district.htm",
    observationUrl: "https://www.inaturalist.org/observations/378449603",
    verifiedAt: "2026-07-05",
    researchLinks: [
      {
        label: "Haleakalā nēnē history",
        url: "https://www.nps.gov/hale/learn/nature/haleakala-nene.htm",
      },
      {
        label: "NPS Summit District bird guide",
        url: "https://www.nps.gov/hale/learn/nature/birds-of-the-summit-district.htm",
      },
    ],
  },
] satisfies WildlifeSpotlight[];
