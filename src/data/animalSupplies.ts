import type { AnimalSupplyStore } from "./types";

// Retail feed/farm-supply stores on Maui that sell live chicks, ducklings,
// rabbits, and animal feed — a fun, no-appointment "meet a baby animal"
// stop that is nothing like the protected-wildlife rules elsewhere on this
// site. These are ordinary retail businesses, not tours or sanctuaries;
// hours are third-party aggregated (Yelp/Yellow Pages), so treat them as
// `verify` and call ahead before a special trip.
export const animalSupplyStores = [
  {
    id: "dels-farm-supply",
    name: "Del's Feed & Farm Supply",
    driveMinutes: 22,
    address: "326 Hanamau St, Kahului, HI 96732",
    whatFor:
      "A working feed store that regularly stocks baby chicks, ducklings, and rabbits alongside chicken scratch, hay, and coops — a genuine walk-in animal stop, not a petting-zoo attraction.",
    hoursLabel: "Mon–Sat ≈8am–6pm, Sun ≈10am–4pm · verify same-day",
    confidence: "verify",
    verifiedAt: "2026-07-05",
    sourceLabel: "Yelp · Del's Farm Supply",
    sourceUrl: "https://www.yelp.com/biz/dels-farm-supply-kahului",
    mapUrl: "https://maps.google.com/?q=326+Hanamau+St+Kahului+HI+96732",
  },
  {
    id: "maui-feed-farm-supplies",
    name: "Maui Feed & Farm Supplies",
    driveMinutes: 22,
    address: "495 Hukilike St, Suite 7, Kahului, HI 96732",
    whatFor:
      "A long-running Kahului feed store carrying layer and all-flock feed, horse supplies, and hay; call ahead to ask what livestock is currently in stock.",
    hoursLabel: "Mon–Fri ≈8am–5pm, Sat ≈9am–12pm, closed Sun · verify",
    confidence: "verify",
    verifiedAt: "2026-07-05",
    sourceLabel: "Yelp · Maui Feed Farm Supplies",
    sourceUrl: "https://www.yelp.com/biz/maui-feed-farm-supplies-kahului-3",
    mapUrl:
      "https://maps.google.com/?q=495+Hukilike+St+Suite+7+Kahului+HI+96732",
  },
] satisfies AnimalSupplyStore[];
