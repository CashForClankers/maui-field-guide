import type { DriveEat, EatSpot, KitchenMission } from "./types";

export const eatSpots = [
  {
    id: "tobis-kihei",
    name: "Tobi’s Kīhei",
    kind: "poke",
    area: "Kīhei",
    driveMinutes: 9,
    order: "Fresh ahi poke + one natural-syrup shave ice",
    why: "The rare two-for-one stop that takes both fish and shave ice seriously. The Kīhei shop opened in 2026, and the owner says its fish comes from local fishermen and produce from island farms.",
    move: "Ask which poke was cut most recently, then split the shave ice instead of making a second dessert stop.",
    cost: "$ · verify today’s board",
    freshness: "Fish and flavors vary daily; ask before choosing.",
    familyFit: "Fast, close, and everyone can choose a different lane.",
    localSignal:
      "Maui-based, woman-owned, direct local-fisher and farm sourcing claim.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Tobi’s official site",
    sourceUrl: "https://tobispokeandshaveice.com/",
    mapUrl: "https://maps.google.com/?q=Tobi%27s+Poke+and+Shave+Ice+Kihei",
    tags: ["closest", "fresh fish", "two-in-one", "local-owned"],
  },
  {
    id: "south-maui-fish-company",
    name: "South Maui Fish Company",
    kind: "poke",
    area: "Kīhei",
    driveMinutes: 10,
    order: "Traditional poke bowl + fish tacos",
    why: "A tiny fish-first truck whose concise menu follows the catch: poke, ceviche, tacos, plates, and curry rather than a sprawling tourist menu.",
    move: "Go for an early lunch. Ask what is local and never frozen that day; pivot to the fish plate if the poke is gone.",
    cost: "$–$$ · menu changes",
    freshness:
      "Catch and sell-outs drive the menu; early is the useful strategy.",
    familyFit: "Casual outdoor seating; take it back to the beach if crowded.",
    localSignal: "Independent Kīhei fish truck with a catch-led menu.",
    confidence: "mixed",
    verifiedAt: "2026-07-07",
    sourceLabel: "Current South Maui Fish Company guide",
    sourceUrl:
      "https://www.mauihawaii.org/restaurants/south-maui-fish-company/",
    mapUrl: "https://maps.google.com/?q=South+Maui+Fish+Company+Kihei",
    tags: ["fresh fish", "food truck", "early lunch", "nearby"],
  },
  {
    id: "kitoko",
    name: "Kitoko",
    kind: "wild card",
    area: "South Maui Gardens",
    driveMinutes: 10,
    order: "Fresh ono poke with Okinawa sweet-potato chips",
    why: "This is the splurge-food-truck move: island ingredients get fine-dining treatment without committing the family to a formal restaurant.",
    move: "Pair it with the gardens or Thursday market. Check the normal menu before going—the posted hula-show menu is separate.",
    cost: "$$–$$$ · posted ono poke $28 on show menu",
    freshness: "Fish and island produce can change; confirm the day’s menu.",
    familyFit:
      "Open-air garden setting makes an ambitious plate easier with kids.",
    localSignal:
      "South Maui Gardens describes fresh island ingredients and a small-team truck format.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "South Maui Gardens · Kitoko",
    sourceUrl: "https://www.southmauigardens.com/kitoko",
    mapUrl: "https://maps.google.com/?q=Kitoko+Maui",
    tags: ["unique", "garden", "ono", "splurge"],
  },
  {
    id: "da-kitchen",
    name: "Da Kitchen Kīhei",
    kind: "plate lunch",
    area: "Kīhei",
    driveMinutes: 12,
    order:
      "One Hawaiian plate to share: lau lau, kālua pork, lomi salmon, poi, greens, rice, and mac salad",
    why: "It is the efficient way to taste the traditional plate components without buying a luau ticket—and the official menu is unusually clear about exactly what arrives.",
    move: "Share first; the plate is broad and heavy. Add the $6 keiki grilled cheese only if a child opts out.",
    cost: "$$ · Hawaiian plate currently $35",
    freshness: "A composed plate, not a fish-counter freshness play.",
    familyFit: "Big portions and a low-risk keiki fallback.",
    localSignal:
      "Long-running local-style plate-lunch format; direct menu and prices.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Da Kitchen official menu",
    sourceUrl: "https://www.dakitchenkihei.com/menus",
    mapUrl: "https://maps.google.com/?q=Da+Kitchen+Kihei",
    tags: ["Hawaiian food", "shareable", "poi", "keiki fallback"],
  },
  {
    id: "ululanis-sugar-beach",
    name: "Ululani’s Hawaiian Shave Ice",
    kind: "sweet",
    area: "North Kīhei",
    driveMinutes: 18,
    order:
      "Party in the Mouth: tamarind, passion fruit, calamansi + fresh mochi if available",
    why: "Skip rainbow syrup and order the sharpest, most grown-up combination: tart tropical fruit, tamarind, and calamansi. It is more specific to this trip than generic strawberry-blue raspberry.",
    move: "Make it the cold half of a Sugar Beach Bake Shop double-stop; they are neighbors.",
    cost: "$ · toppings extra",
    freshness:
      "Natural fruit purées or juices are used in signature syrups; mochi can sell out.",
    familyFit:
      "Choose up to three flavors, so cautious kids can run their own experiment.",
    localSignal:
      "Maui-born shave-ice specialist using pure cane sugar and fruit-forward syrups.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Ululani’s official menu",
    sourceUrl: "https://www.ululanishawaiianshaveice.com/menu-and-products/",
    mapUrl: "https://maps.google.com/?q=Ululani%27s+Hawaiian+Shave+Ice+Kihei",
    tags: ["shave ice", "tamarind", "calamansi", "double-stop"],
  },
  {
    id: "sugar-beach-bake-shop",
    name: "Sugar Beach Bake Shop",
    kind: "bakery",
    area: "North Kīhei",
    driveMinutes: 18,
    order: "Hot malasadas + lilikoi key-lime pie",
    why: "One stop covers the hot Portuguese-Hawaiʻi classic and a bright island-fruit dessert made with fresh-picked lilikoi and Maui Meyer lemon zest.",
    move: "Go early, buy only what is fresh that morning, then walk next door for shave ice later—not both at once.",
    cost: "$ · verify case prices",
    freshness:
      "Baked daily; the selection changes and popular items can go early.",
    familyFit: "Breakfast-sized commitment with easy sharing.",
    localSignal:
      "Independent bakery explicitly building around local fruit flavors.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Sugar Beach Bake Shop",
    sourceUrl: "https://sugarbeachbakeshop.com/",
    mapUrl: "https://maps.google.com/?q=Sugar+Beach+Bake+Shop+Kihei",
    tags: ["malasada", "lilikoi", "early", "fresh baked"],
  },
  {
    id: "sweet-hula",
    name: "Sweet Hula",
    kind: "fresh",
    area: "South Maui Gardens",
    driveMinutes: 10,
    order:
      "La Perouse bowl: açaí, papaya, bee pollen, blueberries, peanut butter",
    why: "A genuinely useful reset between plate lunches: papaya and bee pollen make this more Maui-specific than a standard mainland açaí bowl.",
    move: "Ask which fruit is Maui-grown that morning and swap toward it rather than ordering by photo.",
    cost: "$–$$ · verify live menu",
    freshness: "Made to order each morning; local fruit availability changes.",
    familyFit: "Easy breakfast or shared afternoon cooldown in the gardens.",
    localSignal: "Maui truck with an explicit fresh/local sourcing focus.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Sweet Hula official site",
    sourceUrl: "https://sweethulamaui.com/",
    mapUrl: "https://maps.google.com/?q=Sweet+Hula+Maui",
    tags: ["fresh fruit", "papaya", "breakfast", "garden"],
  },
  {
    id: "tin-roof",
    name: "Tin Roof",
    kind: "plate lunch",
    area: "Kahului · airport move",
    driveMinutes: 32,
    order: "Mochiko chicken, animal style, over garlic noodles",
    why: "Sheldon and Janice Simeon’s mom-and-pop shop turns a familiar plate lunch into something singular: overnight ginger-sake-shoyu chicken, sweet-rice crust, su-miso gochujang aioli, furikake crunch, and banchan.",
    move: "Order online and attach this to the airport or Kahului—do not burn a beach day on a standalone drive.",
    cost: "$ · bowl currently $14; noodles +$4",
    freshness: "Cooked-to-order comfort food; specials and fish rotate.",
    familyFit:
      "Takeout only; easy to share, but sauces carry heat and allergens.",
    localSignal:
      "Chef-owned Maui shop sourcing from local farmers, fishers, ranchers, and artisans.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Tin Roof official ordering menu",
    sourceUrl:
      "https://tinroofmaui.toast.site/order/tinroof/item-mochiko-chicken_08960b50-f596-4d65-beb3-64b1a7119228",
    mapUrl: "https://maps.google.com/?q=Tin+Roof+Maui",
    tags: ["airport route", "mochiko", "chef-owned", "good deal"],
  },
  {
    id: "kaleis-lunchbox",
    name: "Kalei’s Lunchbox Maui Lani",
    kind: "plate lunch",
    area: "Wailuku · airport/upcountry move",
    driveMinutes: 36,
    order: "Chicken katsu curry",
    why: "This is the straightforward local lunchbox answer to the curry craving: crisp cutlet, rice, and gravy without resort pricing or a ceremony around it.",
    move: "Use it only when already crossing central Maui. Check the live ordering menu because plate pricing and specials move.",
    cost: "$–$$ · verify live price",
    freshness:
      "Best eaten immediately; this is texture, heat, and gravy—not a scenic takeout hold.",
    familyFit: "Familiar components for kids; generous plate-lunch format.",
    localSignal:
      "Local lunchbox with current direct ordering and keiki choices.",
    confidence: "mixed",
    verifiedAt: "2026-07-07",
    sourceLabel: "Kalei’s live ordering menu",
    sourceUrl: "https://www.orderspoon.com/store/kaleislbmauilani",
    mapUrl: "https://maps.google.com/?q=Kalei%27s+Lunchbox+Maui+Lani",
    tags: ["curry", "plate lunch", "central Maui", "value"],
  },
  {
    id: "pho-noodle-bar",
    name: "Pho Noodle Bar",
    kind: "wild card",
    area: "Kīhei",
    driveMinutes: 12,
    order: "Signature hot-stone pho",
    why: "The any-cuisine wildcard: family-owned Vietnamese pho arrives on a sizzling stone so the broth stays bubbling—memorable theater with a practical purpose.",
    move: "Use it for a windy or everyone-needs-soup night. Confirm availability; the signature format is the reason to choose it.",
    cost: "$$ · verify current menu",
    freshness:
      "Broth and herbs are the signal; ask about the day’s herb garnishes.",
    familyFit: "Share carefully—the stone and broth are genuinely hot.",
    localSignal: "Family-owned Kīhei restaurant with a distinct house format.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceLabel: "Pho Noodle Bar official site",
    sourceUrl: "https://phonoodlebar.com/",
    mapUrl: "https://maps.google.com/?q=Pho+Noodle+Bar+Kihei",
    tags: ["Vietnamese", "hot stone", "family-owned", "rainy-day"],
  },
] satisfies EatSpot[];

export const kitchenMissions = [
  {
    id: "poke-condo-board",
    title: "Build a poke-counter dinner board",
    buy: [
      "Two quarter-pounds of the freshest poke—not two tubs of the same sauce",
      "Hot rice, nori, cucumber, avocado, edamame, and pickled ginger",
      "One unfamiliar pupu: tako, pipikaula, boiled peanuts, or limu when available",
    ],
    method:
      "Start the rice first. Put everything in separate bowls and let each person build hand rolls or rice bowls. Keep raw fish cold and eat it immediately—do not save it for tomorrow’s beach lunch.",
    why: "It turns a grocery counter into a low-cost tasting flight and lets the kids compare texture, salt, seaweed, heat, and acid without committing to a restaurant entrée.",
    sourceName: "Foodland Kīhei",
    sourceNote:
      "Foodland says its poke is made fresh daily and its counters also carry local-style pupu.",
    sourceUrl: "https://foodland.com/hawaiis-home-for-poke/",
    mapUrl: "https://maps.google.com/?q=Foodland+Kihei+Maui",
    driveMinutes: 12,
    timing: "Late morning or early lunch, while the counter is full",
    verify:
      "Ask what is fresh rather than previously frozen, and what was cut most recently.",
  },
  {
    id: "market-fish-skillet",
    title: "Cook the day’s fish with a market-fruit salsa",
    buy: [
      "A firm local fillet such as ono or mahi, only when the seller confirms origin and day",
      "Maui-grown pineapple or mango, lime, Maui onion, cilantro, and a small chile",
      "Rice plus one bottle of local chili-pepper water",
    ],
    method:
      "Dice the fruit, onion, lime, cilantro, and chile first. Pat the fish dry, salt it, and sear in a hot lightly oiled pan until just opaque. Spoon the cold salsa over rice and fish.",
    why: "This is the best condo-kitchen flex: one pan, ten minutes, and the meal changes with the actual catch and ripe fruit instead of a fixed recipe.",
    sourceName: "Upcountry Farmers Market",
    sourceNote:
      "Saturday’s grower-heavy market is the high-yield route for produce and occasional fish; inventory is never guaranteed.",
    sourceUrl: "https://www.upcountryfarmersmarket.com/",
    mapUrl:
      "https://maps.google.com/?q=Upcountry+Farmers+Market+55+Kiopaa+Street",
    driveMinutes: 45,
    timing: "Saturday at 7–8am; only as part of an Upcountry morning",
    verify:
      "Ask who caught the fish, where it was landed, and which fruit is ripe today.",
  },
  {
    id: "local-fruit-breakfast",
    title: "Make a five-fruit Maui breakfast lab",
    buy: [
      "Apple bananas and one ripe papaya",
      "Three unfamiliar ripe fruits—ask for names and how to open them",
      "Maui honey, coconut, local granola, yogurt, and lime",
    ],
    method:
      "Cut tiny tasting portions before adding yogurt. Score each fruit for aroma, acid, sweetness, texture, and weirdness; then build bowls from the winners.",
    why: "It makes breakfast an actual field-guide activity and prevents buying a pile of photogenic fruit nobody knows how to ripen or eat.",
    sourceName: "Farmers Market Maui · North Kīhei",
    sourceNote:
      "The family-operated market directly lists island produce Monday–Saturday and is next to the Sugar Beach double-stop.",
    sourceUrl: "https://www.farmersmarketsmaui.com/kihei",
    mapUrl: "https://maps.google.com/?q=Farmers+Market+Maui+61+S+Kihei+Rd",
    driveMinutes: 18,
    timing: "Morning; closed Sunday",
    verify: "Ask which items are Maui-grown, ripe now, and need refrigeration.",
  },
  {
    id: "portuguese-sausage-fried-rice",
    title: "Make local-style Portuguese-sausage fried rice",
    buy: [
      "Portuguese sausage, eggs, green onion, Maui onion, and day-old or chilled rice",
      "A small bottle of shoyu and furikake",
      "Kimchi or pickled vegetables for acid",
    ],
    method:
      "Brown sliced sausage and onion, add cold rice and shoyu, then fold in scrambled egg. Finish with green onion and furikake; keep kimchi cold on the side.",
    why: "It is a forgiving, inexpensive local breakfast-dinner that uses one skillet and turns leftover rice into the point rather than waste.",
    sourceName: "Foodland Kīhei",
    sourceNote:
      "Use the regular grocery run for the staples; the mission is the combination, not a claim that every packaged ingredient is Maui-made.",
    sourceUrl: "https://foodland.com/",
    mapUrl: "https://maps.google.com/?q=Foodland+Kihei+Maui",
    driveMinutes: 12,
    timing: "Any evening; chill cooked rice before the next morning",
    verify:
      "Read origin labels if buying local matters; Hawaiʻi branding does not always mean Hawaiʻi-made.",
  },
  {
    id: "kihei-market-taco-night",
    title: "Let Saturday’s Kīhei market choose taco night",
    buy: [
      "Whatever Maui-grown vegetables the farmer says are best that week",
      "Tortillas, avocado, lime, and a simple protein or black beans",
      "A locally made salsa, hot sauce, or seasoning from a named vendor",
    ],
    method:
      "Char or sauté the vegetables in one pan, warm tortillas, and put the market condiment in the center. Keep the producer’s name attached to the jar so the kids know whose flavor they are trying.",
    why: "This is the flexible give-back meal: purchases go directly to local farmers and makers, but the recipe still works if July inventory is different from expectations.",
    sourceName: "Kō Mahiʻai Mākeke",
    sourceNote:
      "Locally owned Saturday market explicitly centered on Maui farmers, spices, and baked goods.",
    sourceUrl: "https://www.komahiaimakeke.com/",
    mapUrl: "https://maps.google.com/?q=Ko+Mahiai+Makeke+Kukui+Mall+Kihei",
    driveMinutes: 9,
    timing: "Saturday 8am–noon",
    verify:
      "Ask which produce the vendor grew and which packaged goods were actually made on Maui.",
  },
] satisfies KitchenMission[];

export const condoPantryHunt = [
  "Maui chili-pepper water",
  "ʻInamona or limu seasoning",
  "Li hing mui powder",
  "Furikake from a Hawaiʻi maker",
  "Portuguese sausage",
  "Taro or sweet rolls",
  "Roselani haupia or macadamia-nut ice cream",
  "Maui honey or jam with a named farm",
];

export const driveEats = [
  {
    id: "leodas-olowalu",
    name: "Leoda’s Kitchen & Pie Shop",
    area: "Olowalu · West Maui gateway",
    driveMinutes: 43,
    order: "Olowalu lime pie + one savory pie or fresh-bread sandwich",
    foodReason:
      "The lime pie ties the stop to citrus grown across the road, while the shop bakes its breads and pies and states a farm-fresh, local-provider focus. This is a place-specific order, not dessert you could get in Wailea.",
    routeReason:
      "It sits before Lāhainā, so it can reward a West Maui day without forcing the family deeper into resort traffic just for lunch.",
    pairWith:
      "Olowalu cultural or reef stewardship, a deliberate Lāhainā support day, or the West Maui loop—never a standalone 86-minute round trip for pie.",
    timing: "Open daily 10am–6pm; order ahead when the route matters.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceUrl: "https://www.leodas.com/",
    mapUrl: "https://maps.google.com/?q=Leoda%27s+Kitchen+and+Pie+Shop",
  },
  {
    id: "aloha-mixed-plate",
    name: "Aloha Mixed Plate",
    area: "Lāhainā",
    driveMinutes: 55,
    order:
      "Aliʻi plate: kālua pig, pork lau lau, poke, lomi salmon, and Old Lāhainā Lūʻau poi",
    foodReason:
      "It compresses a traditional Hawaiian feast into one direct-menu plate and connects to Old Lāhainā Lūʻau’s poi—stronger culinary specificity than driving west for generic oceanfront fish.",
    routeReason:
      "Eating at an operating Lāhainā business puts trip spending into West Maui, but the visit should follow current access guidance and avoid treating recovery areas as sightseeing.",
    pairWith:
      "A planned, respectful Lāhainā or Kaʻanapali day. Reserve or confirm first; do not improvise a disaster-tour loop.",
    timing:
      "Make it the main West Maui meal; share the plate before adding anything.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceUrl: "https://alohamixedplate.com/menu",
    mapUrl: "https://maps.google.com/?q=Aloha+Mixed+Plate+Lahaina",
  },
  {
    id: "star-noodle-lahaina",
    name: "Star Noodle",
    area: "Lāhainā",
    driveMinutes: 56,
    order: "Lāhainā fried soup + one table of shared small plates",
    foodReason:
      "Its house-made fat chow funn, pork, bean sprouts, and sesame preserve a specific Maui noodle form; the official menu says its ramen, saimin, chow funn, and udon noodles are made in-house daily.",
    routeReason:
      "This clears the drive only for people who care about noodles and already have a West Maui plan. It does not beat Kīhei on convenience or value.",
    pairWith:
      "A Lāhainā support day; book dinner rather than gambling an hour-long drive on a walk-in.",
    timing:
      "Dinner anchor; verify the current menu and reservation before leaving South Maui.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceUrl: "https://www.starnoodle.com/",
    mapUrl: "https://maps.google.com/?q=Star+Noodle+Lahaina",
  },
  {
    id: "komoda-makawao",
    name: "T. Komoda Store & Bakery",
    area: "Makawao · Upcountry",
    driveMinutes: 43,
    order:
      "One stick donut, one cream puff, one guava malasada—split everything",
    foodReason:
      "A 1916 family bakery and its oddball stick donut are true only-here material. Small batches sell out, so an early empty rack is more credible than an all-day tourist bakery.",
    routeReason:
      "Makawao, the Saturday Upcountry Farmers Market, farms, and Haleakalā turn the mileage into a full Upcountry morning.",
    pairWith:
      "Upcountry Farmers Market on Saturday or a Makawao and farm loop. Never drive up late solely for a pastry that may be gone.",
    timing:
      "Go early; closed Wednesday and Sunday according to current visitor guidance—verify before driving.",
    confidence: "mixed",
    verifiedAt: "2026-07-07",
    sourceUrl:
      "https://www.hawaiianairlines.com.au/island-guide/maui/places/restaurants/komoda-bakery",
    mapUrl: "https://maps.google.com/?q=T+Komoda+Store+and+Bakery+Makawao",
  },
  {
    id: "grandmas-coffee-kula",
    name: "Grandma’s Coffee House",
    area: "Keokea · high Upcountry",
    driveMinutes: 48,
    order: "Estate-grown house coffee + the freshest baked item still warm",
    foodReason:
      "Four generations grow, hand-pick, sun-dry, and roast the same Arabica strain on Haleakalā’s slopes. The reason to come is traceable Maui coffee at its source—not a fancy breakfast plate.",
    routeReason:
      "It makes sense after Haleakalā, a Kula farm, or a south-Upcountry drive and gives the family a direct farm-to-cup story.",
    pairWith:
      "Haleakalā, Keokea, or Kula; buy beans for Mana Kai so the drive keeps paying off at breakfast.",
    timing:
      "Open daily 7am–2pm; go earlier for baked goods and cooler Upcountry air.",
    confidence: "primary",
    verifiedAt: "2026-07-07",
    sourceUrl: "https://www.grandmascoffeehousemaui.com/",
    mapUrl: "https://maps.google.com/?q=Grandma%27s+Coffee+House+Maui",
  },
] satisfies DriveEat[];
