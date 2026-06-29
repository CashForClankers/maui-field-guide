import type { FruitSource } from "./types";

// Where to buy the freshest fruit — and coffee, which is a fruit — sorted by two
// real questions: what is closest to Mana Kai on Keawakapu, and what can be grabbed
// on the OGG (Kahului) → Kīhei drive without a detour. Coffee cherry counts.
export const fruitSources = [
  {
    id: "lava-java-roasters",
    name: "Lava Java Coffee Roasters of Maui · S. Kīhei",
    category: "coffee",
    corridor: "near-base",
    driveFromBase: 7,
    routeNote:
      "Official site lists Kai Ani Village, 1367 S. Kīhei Rd, and Kīhei Kalama Village, 1941-A S. Kīhei Rd.",
    openLabel: "Daily mornings · verify current hours",
    freshPick:
      "100% Maui-grown beans roasted on-site, with two public Kīhei addresses from the operator.",
    tripFit: "Any morning walk-up before the beach.",
    confidence: "mixed",
    verifiedAt: "2026-06-29",
    sourceLabel: "Lava Java Maui",
    sourceUrl: "https://lavajavamaui.com/",
    mapUrl:
      "https://maps.google.com/?q=Lava+Java+Coffee+Roasters+1367+S+Kihei+Rd",
  },
  {
    id: "akamai-coffee-wailea",
    name: "Akamai Coffee Co. · Wailea Village",
    category: "coffee",
    corridor: "near-base",
    driveFromBase: 6,
    routeNote:
      "116 Wailea Ike — the closest official Akamai location to Mana Kai.",
    openLabel: "Daily · verify current hours",
    freshPick:
      "100% Maui coffee and locally roasted beans without driving north into Kīhei traffic.",
    tripFit:
      "Best quick coffee-and-beans stop before a Wailea or Mākena morning.",
    confidence: "mixed",
    verifiedAt: "2026-06-29",
    sourceLabel: "Akamai Coffee Co.",
    sourceUrl: "https://www.akamaicoffee.com/",
    mapUrl: "https://maps.google.com/?q=Akamai+Coffee+116+Wailea+Ike",
  },
  {
    id: "akamai-coffee-kihei",
    name: "Akamai Coffee Co. · Kīhei",
    category: "coffee",
    corridor: "near-base",
    driveFromBase: 6,
    routeNote: "1325 S. Kīhei Rd — a short hop north on the same road as base.",
    openLabel: "Daily 6am–6pm · verify",
    freshPick:
      "Award-winning Maui Mokka, locally grown and roasted; buy whole beans to brew at the condo.",
    tripFit: "Any morning; reliable early open for sunrise drivers.",
    confidence: "mixed",
    verifiedAt: "2026-06-28",
    sourceLabel: "Akamai Coffee Co.",
    sourceUrl: "https://www.akamaicoffee.com/",
    mapUrl: "https://maps.google.com/?q=Akamai+Coffee+1325+S+Kihei+Road",
  },
  {
    id: "akamai-coffee-kahului-drivethru",
    name: "Akamai Coffee Co. · Kahului drive-through",
    category: "coffee",
    corridor: "airport-route",
    driveFromBase: 25,
    routeNote:
      "100 Pakaula St by the Home Depot lot — a 2-minute pull-off right after leaving OGG.",
    openLabel: "Daily · early open · verify",
    freshPick:
      "The first Maui-grown coffee of the trip without leaving the car, minutes from baggage claim.",
    tripFit: "Arrival day, straight off the OGG runway toward Kīhei.",
    confidence: "mixed",
    verifiedAt: "2026-06-28",
    sourceLabel: "Akamai Coffee Co.",
    sourceUrl: "https://www.akamaicoffee.com/",
    mapUrl: "https://maps.google.com/?q=Akamai+Coffee+100+Pakaula+St+Kahului",
  },
  {
    id: "maui-fresh-produce-kaahumanu",
    name: "Maui's Fresh Produce Farmers Market",
    category: "market",
    corridor: "airport-route",
    driveFromBase: 20,
    routeNote:
      "Queen Kaʻahumanu Center on Kaʻahumanu Ave — the main OGG→Kīhei artery, ~5 min off the line.",
    openLabel: "Tue, Wed & Fri · 8am–4pm · verify",
    freshPick:
      "Maui-grown mango, papaya, apple banana and lilikoʻi from a covered weekday market right on the road south.",
    tripFit: "Open Wed Jul 8 (fly-in day) and Fri Jul 10.",
    confidence: "mixed",
    verifiedAt: "2026-06-28",
    sourceLabel: "Maui County Farm Bureau market list",
    sourceUrl: "https://mauicountyfarmbureau.org/maui-farmers-markets/",
    mapUrl:
      "https://maps.google.com/?q=Queen+Kaahumanu+Center+Farmers+Market+Kahului",
  },
  {
    id: "maui-swap-meet",
    name: "Maui Swap Meet",
    category: "swap meet",
    corridor: "airport-route",
    driveFromBase: 22,
    routeNote:
      "UH Maui College, 310 W. Kaʻahumanu Ave, Kahului — on the corridor; small entry fee, verify.",
    openLabel: "Sat only · 7am–1pm",
    freshPick:
      "Around 200 local vendors — the widest single haul of just-picked island fruit, flowers and produce anywhere on Maui.",
    tripFit: "Sat Jul 11 — pair it with the Upcountry market run.",
    confidence: "mixed",
    verifiedAt: "2026-06-28",
    sourceLabel: "Maui Swap Meet",
    sourceUrl: "https://mauiswapmeet.website/",
    mapUrl: "https://maps.google.com/?q=Maui+Swap+Meet+Kahului",
  },
] satisfies FruitSource[];
