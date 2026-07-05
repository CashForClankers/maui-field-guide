// Pure classification logic for "is this iNaturalist observation worth a
// push notification" — kept separate from the network/IO code so it's
// unit-testable without hitting the API. See tests/notable-sightings.test.ts.

// Curated watchlist: species a family visiting Maui would genuinely want a
// push notification about. Keyed by scientific name (as returned by the
// API's taxon.name). Keep this short and high-signal — the rarity fallback
// below catches anything else worth flagging.
export const WATCHLIST = [
  {
    scientificName: "Megaptera novaeangliae",
    commonName: "Humpback whale",
    reason:
      "Humpbacks are mostly gone from Maui waters by July — an off-season sighting is unusual.",
  },
  {
    scientificName: "Pseudorca crassidens",
    commonName: "False killer whale",
    reason:
      "The main Hawaiian Islands insular population is endangered and rarely encountered.",
  },
  {
    scientificName: "Globicephala macrorhynchus",
    commonName: "Short-finned pilot whale",
    reason:
      "An offshore species seldom confirmed from shore or nearshore water.",
  },
  {
    scientificName: "Neomonachus schauinslandi",
    commonName: "Hawaiian monk seal",
    reason:
      "Fewer than ~1,600 remain; every confirmed haul-out is a genuine rarity.",
  },
  {
    scientificName: "Eretmochelys imbricata",
    commonName: "Hawksbill sea turtle",
    reason: "Far rarer in Hawaiʻi than the green sea turtle — a real find.",
  },
  {
    scientificName: "Mobula alfredi",
    commonName: "Reef manta ray",
    reason:
      "Uncommon around Maui compared to Kona; a notable nearshore encounter.",
  },
  {
    scientificName: "Galeocerdo cuvier",
    commonName: "Tiger shark",
    reason:
      "A genuinely rare direct sighting worth knowing about (view only from a safe distance).",
  },
  {
    scientificName: "Branta sandvicensis",
    commonName: "Nēnē (Hawaiian goose)",
    reason:
      "The state bird and an endangered endemic — a real find at lower elevation on Maui.",
  },
  {
    scientificName: "Puffinus newelli",
    commonName: "Newell's shearwater (ʻAʻo)",
    reason:
      "A threatened, mostly night-active seabird — an unusual daytime or nearshore record.",
  },
];

export const SPECIES_CONTEXT = new Map([
  [
    "Carcharhinus amblyrhynchos",
    {
      fieldNote:
        "Look for the charcoal-black trailing edge on the tail; grey reef sharks often group by day and hunt more actively at night.",
      researchUrl:
        "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/grey-reef-shark/",
      experience:
        "Safe close-up: compare reef-shark markings in Maui Ocean Center’s Open Ocean tunnel.",
      experienceUrl: "https://mauioceancenter.com/exhibit/open-ocean/",
    },
  ],
  [
    "Ctenochaetus strigosus",
    {
      fieldNote:
        "Kole are Hawaiian-endemic bristletooths: the gold eye ring is the giveaway, and their brushing teeth collect detritus and microbes from reef surfaces.",
      researchUrl:
        "https://dlnr.hawaii.gov/dar/files/2024/07/Data-Review-and-Management-Brief-for-the-West-Hawai%CA%BBi-Commercial-Aquarium-Fishery-Updated-July-2024-With-Track-Changes-Shown.pdf#page=80",
      experience:
        "Field mission: find the gold eye ring while hovering still above a lawful reef entry—never chase it across coral.",
    },
  ],
  [
    "Branta sandvicensis",
    {
      fieldNote:
        "Nēnē are the last surviving endemic Hawaiian goose; their reduced toe webbing is adapted for walking on rough lava.",
      researchUrl: "https://www.nps.gov/hale/learn/nature/haleakala-nene.htm",
      experience:
        "Best fit: scan grass and shrubland near Kalahaku Overlook while driving slowly and never feeding birds.",
      experienceUrl:
        "https://www.nps.gov/hale/learn/nature/birds-of-the-summit-district.htm",
    },
  ],
  [
    "Holothuria whitmaei",
    {
      fieldNote:
        "This high-value reef sea cucumber is protected under CITES Appendix II; the listing is meant to limit trade pressure, not turn a rough community location into a collection lead.",
      researchUrl:
        "https://www.dcceew.gov.au/environment/wildlife-trade/publications/non-detriment-finding-cites-holothuria-sea-cucumbers",
      experience:
        "Reef-recycler mission: watch sea cucumbers process bottom material from a distance and leave every animal exactly where it is.",
    },
  ],
  [
    "Marioniopsis hawaiiensis",
    {
      fieldNote:
        "This branching nudibranch was described from Hawaiʻi in 1860; modern phylogenetic work reinstated the genus Marioniopsis, making its name part of a recent taxonomy update.",
      researchUrl:
        "https://academic.oup.com/zoolinnean/advance-article-abstract/doi/10.1093/zoolinnean/zlad013/7222883",
      experience:
        "Tiny-life mission: slow down around reef structure and look for camouflage and branching shapes without touching coral or turning rocks.",
    },
  ],
]);

const watchlistBySciName = new Map(
  WATCHLIST.map((entry) => [entry.scientificName, entry]),
);

// Rarity fallback for anything not on the curated list: trust iNaturalist's
// own taxon flags (endemic/threatened) plus a low global-observation-count
// proxy for "seldom logged, even if not formally listed."
const RARE_OBSERVATION_COUNT_THRESHOLD = 300;

/**
 * @param {{ name: string, ancestor_ids?: number[], endemic?: boolean, threatened?: boolean, introduced?: boolean, native?: boolean, observations_count?: number }} taxon
 * @returns {{ notable: boolean, reason?: string, watchlisted?: boolean, score?: number, context?: object }}
 */
export function classifyTaxon(taxon) {
  const watch = watchlistBySciName.get(taxon.name);
  if (watch) {
    return {
      notable: true,
      reason: watch.reason,
      watchlisted: true,
      score: 100,
      context: SPECIES_CONTEXT.get(taxon.name),
    };
  }
  // Taxon 1 is Animalia. This explicit ancestor check prevents plants such
  // as threatened silverswords from leaking into a wildlife-only alert.
  if (!taxon.ancestor_ids?.includes(1)) return { notable: false };
  // iNaturalist's threatened/endemic flags are relative to the observation's
  // location, but they reflect *global* IUCN status — an introduced pest
  // (e.g. Java Sparrow, globally Vulnerable but a non-native bird in Hawaiʻi)
  // can be "threatened: true" while being locally common and unremarkable.
  // Skip the fallback checks entirely for known-introduced taxa.
  if (taxon.introduced) {
    return { notable: false };
  }
  if (taxon.threatened) {
    return {
      notable: true,
      reason: "Listed as a threatened/endangered species.",
      watchlisted: false,
      score: 80,
      context: SPECIES_CONTEXT.get(taxon.name),
    };
  }
  if (taxon.endemic) {
    return {
      notable: true,
      reason: "An endemic species found nowhere else on Earth.",
      watchlisted: false,
      score: 70,
      context: SPECIES_CONTEXT.get(taxon.name),
    };
  }
  if (
    typeof taxon.observations_count === "number" &&
    taxon.observations_count > 0 &&
    taxon.observations_count < RARE_OBSERVATION_COUNT_THRESHOLD
  ) {
    return {
      notable: true,
      reason: `Rarely logged anywhere: only ${taxon.observations_count} iNaturalist observations exist worldwide.`,
      watchlisted: false,
      score: 60 + Math.max(0, 10 - Math.floor(taxon.observations_count / 30)),
      context: SPECIES_CONTEXT.get(taxon.name),
    };
  }
  return { notable: false };
}

export function selectFindings(findings, limit = 5) {
  const selected = [];
  const taxonIds = new Set();
  const ranked = [...findings].sort(
    (a, b) =>
      b.score - a.score ||
      (b.observedOn ?? "").localeCompare(a.observedOn ?? ""),
  );
  for (const finding of ranked) {
    if (taxonIds.has(finding.taxonId)) continue;
    taxonIds.add(finding.taxonId);
    selected.push(finding);
    if (selected.length === limit) break;
  }
  return selected;
}

export function isWithinCooldown(
  lastAlertedAt,
  cooldownDays,
  now = Date.now(),
) {
  if (!lastAlertedAt) return false;
  const timestamp = new Date(lastAlertedAt).getTime();
  if (!Number.isFinite(timestamp)) return false;
  return now - timestamp < cooldownDays * 86_400_000;
}
