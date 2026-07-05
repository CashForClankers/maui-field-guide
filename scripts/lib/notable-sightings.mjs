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

const watchlistBySciName = new Map(
  WATCHLIST.map((entry) => [entry.scientificName, entry]),
);

// Rarity fallback for anything not on the curated list: trust iNaturalist's
// own taxon flags (endemic/threatened) plus a low global-observation-count
// proxy for "seldom logged, even if not formally listed."
const RARE_OBSERVATION_COUNT_THRESHOLD = 300;

/**
 * @param {{ name: string, endemic?: boolean, threatened?: boolean, introduced?: boolean, native?: boolean, observations_count?: number }} taxon
 * @returns {{ notable: boolean, reason?: string, watchlisted?: boolean }}
 */
export function classifyTaxon(taxon) {
  const watch = watchlistBySciName.get(taxon.name);
  if (watch) {
    return { notable: true, reason: watch.reason, watchlisted: true };
  }
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
    };
  }
  if (taxon.endemic) {
    return {
      notable: true,
      reason: "An endemic species found nowhere else on Earth.",
      watchlisted: false,
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
    };
  }
  return { notable: false };
}
