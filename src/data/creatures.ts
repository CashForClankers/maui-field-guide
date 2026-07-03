import type { Creature } from "./types";

export const creatures = [
  {
    id: "honu",
    commonName: "Hawaiian green sea turtle",
    hawaiianName: "Honu",
    scientificName: "Chelonia mydas",
    kind: "sea turtle",
    habitat: "reef",
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
    habitat: "reef",
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
    habitat: "reef",
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
    habitat: "shoreline",
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
    habitat: "wetland",
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
  {
    id: "spinner-dolphin",
    commonName: "Spinner dolphin",
    hawaiianName: "Naiʻa",
    scientificName: "Stenella longirostris",
    kind: "marine mammal",
    habitat: "open ocean",
    image: "creatures/spinner-dolphin.jpg",
    imageAlt: "A spinner dolphin leaping clear of calm ocean water",
    recognition:
      "A small, slender dolphin—4 to 7 feet—with a long thin snout and three-tone gray coloring. The name comes from the leaping, length-wise spins that can turn a body more than once per jump.",
    scienceNote:
      "Spinner dolphins rest in Maui's calm leeward bays by day after hunting in deep water all night. They sleep with only half their brain at a time, so one eye and half the brain stay alert while the other half rests—true unihemispheric sleep.",
    kidMission:
      "If a pod appears near a boat, count spins per leap instead of chasing photos. Notice how the group surfaces and breathes together in a tight cluster.",
    whereToLook:
      "A lawful boat encounter or a distant shoreline sighting in Maui Nui is possible, but never something to plan the day around. Daytime groups may be resting even when they look active.",
    driveMinutes: 24,
    safety:
      "Federal law requires staying 50 yards away and never swimming toward, chasing, or blocking resting dolphins. Daytime rest is essential to their survival—let boats and guides set the distance.",
    sourceLabel: "NOAA Fisheries · spinner dolphin",
    sourceUrl: "https://www.fisheries.noaa.gov/species/spinner-dolphin",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Perouse+Bay+Maui",
    photoCredit: "Magnus Kjaergaard / Wikimedia Commons",
    photoLicense: "CC BY 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Spinner_dolphin_jumping.JPG",
  },
  {
    id: "day-octopus",
    commonName: "Day octopus",
    hawaiianName: "Heʻe",
    scientificName: "Octopus cyanea",
    kind: "cephalopod",
    habitat: "reef",
    image: "creatures/day-octopus.jpg",
    imageAlt:
      "A day octopus gripping reef rock with textured, color-shifting skin",
    recognition:
      "Usually invisible until it moves—look for a patch of reef that suddenly changes texture or color, or a single wary eye poking from a hole. Suckers run in two rows down each of the eight arms.",
    scienceNote:
      "Like other octopuses, it has three hearts: two move blood through the gills and one circulates oxygenated blood through the body. Its camouflage can change both color and skin texture against reef rock.",
    kidMission:
      "Stare at one patch of reef rubble for a full minute without moving. Camouflage only fails when the animal moves, so patience beats searching.",
    whereToLook:
      "Scan one shallow reef patch from a respectful distance at Ulua Beach or ʻĀhihi-Kīnaʻu only when access and ocean conditions allow. A wild sighting is never assured.",
    driveMinutes: 12,
    safety:
      "Watch only—never pry an octopus from a hole or handle one. Keep hands and fins off coral and leave any animal that changes color defensively (a stress response) alone.",
    sourceLabel: "NOAA Ocean Service · octopus biology",
    sourceUrl:
      "https://oceanservice.noaa.gov/news/feb26/undersea-creatures-valentines-day.html",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "ImagePerson / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Day_octopus_Octopus_cyanea,_Maui_Ocean_Centre_4390.jpg",
  },
  {
    id: "wedge-tailed-shearwater",
    commonName: "Wedge-tailed shearwater",
    hawaiianName: "ʻUaʻu kani",
    scientificName: "Ardenna pacifica",
    kind: "seabird",
    habitat: "open ocean",
    image: "creatures/wedge-tailed-shearwater.jpg",
    imageAlt:
      "A wedge-tailed shearwater standing at the entrance to its burrow nest",
    recognition:
      "Long thin wings, a wedge-shaped tail, and a hooked bill built for gliding low over waves. Comes in a grayish-brown-and-white morph or an all-sooty-brown morph.",
    scienceNote:
      'Its Hawaiian name, ʻuaʻu kani, means "moaning petrel"—colonies dig nesting burrows into old volcanic ground and wail eerily to each other after dark. July falls in peak incubation season after eggs are laid in June.',
    kidMission:
      "Listen for the moaning call at dusk on a Molokini crossing. From a boat, count how many birds glide without a single wingbeat before landing on the water.",
    whereToLook:
      "Scan low over open water from a lawful boat crossing or coastal lookout. Never leave a marked trail to seek a colony: the species nests in fragile burrows on offshore islets and volcanic slopes.",
    driveMinutes: 20,
    safety:
      "Never step off trail near burrow colonies; a collapsed burrow can kill a chick or egg instantly. Keep pets and food away from nesting slopes.",
    sourceLabel: "Hawaiʻi DLNR · ʻuaʻu kani",
    sourceUrl: "https://dlnr.hawaii.gov/wildlife/birds/uau-kani/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Puu+Olai+Makena+Maui",
    photoCredit: "Forest & Kim Starr",
    photoLicense: "CC BY 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Starr_060405-6955_Ardenna_pacifica.jpg",
  },
  {
    id: "hawaiian-hoary-bat",
    commonName: "Hawaiian hoary bat",
    hawaiianName: "ʻŌpeʻapeʻa",
    scientificName: "Lasiurus semotus",
    kind: "land mammal",
    habitat: "resort grounds",
    image: "creatures/hawaiian-hoary-bat.jpg",
    imageAlt: "A Hawaiian hoary bat held gently for a wildlife survey",
    recognition:
      'About a one-foot wingspan with frosted brown, cream, and mahogany fur tips (the "hoary" look). Flies alone at dusk, not in visible groups like mainland bat colonies.',
    scienceNote:
      "This is Hawaiʻi's only native land mammal and the official state land mammal. It finds moths and beetles in total darkness using echolocation chirps pitched far above human hearing.",
    kidMission:
      "At dusk, watch open sky near trees for a fast, erratic flight path—unlike a bird's, a hunting bat never flies in a straight line for long.",
    whereToLook:
      "Possible—but not predictable—at dusk around low-elevation trees and open sky. DLNR reports that low-elevation activity on Hawaiʻi Island peaked April through December; that is context, not a Maui sighting promise.",
    driveMinutes: 0,
    safety:
      "Never touch a bat, grounded or otherwise. If one is found on the ground, keep pets and kids back and tell resort staff—do not attempt to handle it.",
    sourceLabel: "Hawaiʻi DLNR · ʻōpeʻapeʻa",
    sourceUrl: "https://dlnr.hawaii.gov/wildlife/opeapea/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mana+Kai+Maui",
    photoCredit: "Kim Uyehara / USFWS",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://www.fws.gov/species/hawaiian-hoary-bat-lasiurus-semotus",
  },
  {
    id: "red-junglefowl",
    commonName: "Red junglefowl (feral chicken)",
    hawaiianName: "Moa",
    scientificName: "Gallus gallus",
    kind: "land bird",
    habitat: "resort grounds",
    image: "creatures/red-junglefowl.jpg",
    imageAlt:
      "A rooster with iridescent orange, green, and black plumage walking on open ground",
    recognition:
      "Roosters are unmistakable: iridescent orange-and-green plumage, a red comb, and loud, all-hours crowing. Hens are smaller and mottled brown for camouflage.",
    scienceNote:
      "Red junglefowl are ancestors of domestic chickens. A genetic study of Kauaʻi—not Maui—found a hybrid feral population and an admixture event around 1981 consistent with chickens released during Hurricane ʻIwa.",
    kidMission:
      "Watch a rooster, hen, and chicks together and guess who is in charge. Listen for different calls—an alarm call sounds nothing like a crow.",
    whereToLook:
      "Often seen outdoors around Kīhei lawns and parking areas, including resort grounds, but no individual bird is guaranteed.",
    driveMinutes: 0,
    safety:
      "Do not feed or corner them; a defensive rooster can spur. Keep a respectful distance from hens with chicks.",
    sourceLabel: "Nature (Heredity) · Hawaiian feral chicken genetics",
    sourceUrl: "https://www.nature.com/articles/s41437-022-00589-z",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kihei+Maui",
    photoCredit: "jaybergesen / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Feral_rooster_on_Kauai.jpg",
  },
  {
    id: "zebra-dove",
    commonName: "Zebra dove",
    scientificName: "Geopelia striata",
    kind: "land bird",
    habitat: "resort grounds",
    image: "creatures/zebra-dove.jpg",
    imageAlt:
      "A zebra dove with barred neck and wing feathers perched on lava rock",
    recognition:
      'Small and grey-brown with fine black-and-white barring across the neck and wings. A soft, rising "coo-coo-cooo" often gives it away before it\'s seen.',
    scienceNote:
      "Introduced to Hawaiʻi in the 1920s, zebra doves became part of the familiar urban soundscape. Pairs usually mate for life, and males bow, coo, and flare their tails during courtship.",
    kidMission:
      "Find a pair walking together and watch their head-bob as they step—count how many steps happen per bob.",
    whereToLook:
      "Often seen on resort lawns, sidewalks, and parking areas in Kīhei or Wailea; listen for the soft rising coo before searching the ground.",
    driveMinutes: 0,
    safety:
      "Never feed them; human food and crowding around picnic tables makes wild birds dependent and aggressive toward people.",
    sourceLabel: "Hawaiʻi Public Radio · Manu Minute",
    sourceUrl:
      "https://www.hawaiipublicradio.org/podcast/manu-minute/2022-10-06/manu-minute-the-zebra-dove",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Wailea+Maui",
    photoCredit: "Footwarrior / Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Geopelia_striata_Big_Island_Hawaii.JPG",
  },
] satisfies Creature[];
