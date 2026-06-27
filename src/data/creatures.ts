import type { Creature } from "./types";

export const creatures = [
  {
    id: "honu",
    commonName: "Hawaiian green sea turtle",
    hawaiianName: "Honu",
    scientificName: "Chelonia mydas",
    kind: "sea turtle",
    image: "creatures/honu.jpg",
    imageAlt: "A green sea turtle swimming just below the ocean surface",
    recognition:
      "A smooth oval shell, a small rounded head, and one pair of large scales between the eyes. Adults often look olive, brown, or charcoal—not bright green.",
    scienceNote:
      "Green turtles are the only sea turtles that become mainly herbivorous. On Maui they graze algae and help move energy through the shallow reef. Their name refers to the color of their fat, not the shell.",
    kidMission:
      "Watch from one place. Can you tell whether it is traveling, surfacing for air, resting, or grazing? Behavior is a better observation than a close-up.",
    whereToLook:
      "Try a calm early look from Keawakapu, then Maluaka Beach or the shore-access area at ʻĀhihi-Kīnaʻu when conditions and signs allow.",
    driveMinutes: 16,
    safety:
      "Stay at least 10 feet away on land and in water. Never touch, feed, follow, crowd, or block the route to air.",
    sourceLabel: "NOAA Fisheries · green turtle science",
    sourceUrl: "https://www.fisheries.noaa.gov/species/green-turtle/science",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Maluaka+Beach+Maui",
    photoCredit: "NOAA Fisheries / Pacific Islands Fisheries Science Center",
    photoLicense: "U.S. government image",
    photoSourceUrl:
      "https://www.fisheries.noaa.gov/species/green-turtle/science",
  },
  {
    id: "yellow-tang",
    commonName: "Yellow tang",
    hawaiianName: "Lauʻīpala",
    scientificName: "Zebrasoma flavescens",
    kind: "reef fish",
    image: "creatures/yellow-tang.jpg",
    imageAlt: "A bright yellow tang swimming against a purple reef background",
    recognition:
      "A flat, leaf-shaped fish that is almost entirely school-bus yellow. Look for the small pale defensive spine at the base of its tail; admire it without reaching.",
    scienceNote:
      "Yellow tang are surgeonfish and reef grazers. By cropping algae they help maintain the competition between algae and corals. Protected reef habitat also gives young fish shelter and adults room to feed and reproduce.",
    kidMission:
      "Count grazing pecks for 20 seconds. Then look for the tiny mouth shape that lets this fish trim algae close to rock.",
    whereToLook:
      "Scan shallow reef edges at Ulua Beach or ʻĀhihi-Kīnaʻu. They may travel alone or in loose groups; never chase a school.",
    driveMinutes: 12,
    safety:
      "Observe from the surface, keep fins and feet off coral, and leave the water if visibility, current, surf, or comfort changes.",
    sourceLabel: "University of Hawaiʻi Sea Grant · interactive reef",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "Adrian Pingstone / Wikimedia Commons",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Yellow.tang.arp.jpg",
  },
  {
    id: "reef-triggerfish",
    commonName: "Reef triggerfish",
    hawaiianName: "Humuhumunukunukuāpuaʻa",
    scientificName: "Rhinecanthus rectangulus",
    kind: "reef fish",
    image: "creatures/reef-triggerfish.jpg",
    imageAlt:
      "A reef triggerfish with black, white, yellow, and blue markings over coral",
    recognition:
      "A cream body crossed by sharp black wedges, yellow lips, and blue lines near the eyes. The Hawaiian name is often translated as “triggerfish with a snout like a pig.”",
    scienceNote:
      "This is one of Hawaiʻi’s common carnivorous reef fishes. It searches around sand and rock for small animal prey. The sturdy body and small mouth are useful field clues alongside its unmistakable pattern.",
    kidMission:
      "Listen and watch for the pig-like snout working near the bottom. Sketch the black triangle by the tail before trying the long Hawaiian name.",
    whereToLook:
      "Look along rocky reef margins at Ulua Beach and the permitted shoreline at ʻĀhihi-Kīnaʻu, especially where sand meets reef.",
    driveMinutes: 12,
    safety:
      "Do not feed reef fish or put hands into holes. Give nesting or defensive fish extra room and never stand on coral.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahihi+Kinau+Natural+Area+Reserve+Maui",
    photoCredit: "Rickard Zerpe / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Wedgetail_triggerfish_(Rhinecanthus_rectangulus)_(42586037405).jpg",
  },
  {
    id: "hawaiian-monk-seal",
    commonName: "Hawaiian monk seal",
    hawaiianName: "ʻĪlioholoikauaua",
    scientificName: "Neomonachus schauinslandi",
    kind: "marine mammal",
    image: "creatures/monk-seal.jpg",
    imageAlt: "A Hawaiian monk seal resting on a sandy beach",
    recognition:
      "A large gray-brown seal with short front flippers, a round head, and whiskers. A seal lying still on a beach is usually resting—not stranded.",
    scienceNote:
      "This seal exists only in the Hawaiian archipelago. NOAA estimates roughly 1,600 remain. It is a solitary, generalist hunter that eats fish, squid, octopus, eels, and crustaceans, often near the seafloor.",
    kidMission:
      "Use zoom, not feet. From far away, look for natural scars or pale marks that researchers use to recognize individuals.",
    whereToLook:
      "There is no reliable appointment. Scan beaches from a distance, including the overlook at Hoʻokipa, and treat any sighting as a lucky stop—not a pursuit.",
    driveMinutes: 38,
    safety:
      "Stay at least 50 feet away and 150 feet from a mother with a pup. Respect ropes and signs; move away if a seal approaches.",
    sourceLabel: "NOAA Fisheries · Hawaiian monk seal",
    sourceUrl: "https://www.fisheries.noaa.gov/species/hawaiian-monk-seal",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hookipa+Beach+Lookout+Maui",
    photoCredit: "E Bailey / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Hawaiian_monk_seal_close-up_(Neomonachus_schauinslandi).jpg",
  },
  {
    id: "hawaiian-stilt",
    commonName: "Hawaiian stilt",
    hawaiianName: "Aeʻo",
    scientificName: "Himantopus mexicanus knudseni",
    kind: "wetland bird",
    image: "creatures/hawaiian-stilt.jpg",
    imageAlt:
      "Several black-and-white Hawaiian stilts standing in shallow wetland water",
    recognition:
      "Black back, white face and belly, needle-like bill, and astonishingly long pink legs. Their sharp chatter can reveal them before you see them.",
    scienceNote:
      "Aeʻo are an endangered Hawaiian subspecies built for very shallow water—often seven inches or less. Their long legs and bill reach food other shorebirds cannot. July overlaps nesting and chick-rearing at Keālia.",
    kidMission:
      "Stand on the boardwalk and compare leg length with body length. If adults call or dive, back away: chicks may be hidden and motionless nearby.",
    whereToLook:
      "Keālia Pond National Wildlife Refuge and its coastal boardwalk are the high-signal, low-effort bird stop from Mana Kai.",
    driveMinutes: 16,
    safety:
      "Stay on open trails and boardwalks. Never approach nests or chicks, and honor seasonal closures during breeding season.",
    sourceLabel: "U.S. Fish & Wildlife Service · Keālia species",
    sourceUrl: "https://www.fws.gov/refuge/kealia-pond/species",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kealia+Pond+National+Wildlife+Refuge",
    photoCredit: "Laurel Smith / USFWS",
    photoLicense: "Public domain",
    photoSourceUrl: "https://www.fws.gov/media/hawaiian-stilt-aeriels",
  },
] satisfies Creature[];
