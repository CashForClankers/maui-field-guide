import type { Creature, CreaturePlace } from "./types";

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
  {
    id: "moorish-idol",
    commonName: "Moorish idol",
    hawaiianName: "Kihikihi",
    scientificName: "Zanclus cornutus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/moorish-idol.jpg",
    imageAlt:
      "A Moorish idol with bold black, white, and yellow bands swimming over reef",
    recognition:
      "A tall disk-shaped body crossed by black, white, and yellow bands, an orange patch on the snout, a black tail, and one long white dorsal streamer.",
    scienceNote:
      "Kihikihi are the only living species in their family. They are common in Hawaiʻi from rocky shallows to deep reef and use a slightly extended jaw to pull sponge and other food from crevices.",
    kidMission:
      "Use the color test: orange jaw plus black tail means Moorish idol. A similar bannerfish has a white jaw and yellow tail.",
    whereToLook:
      "Start from shore at Keawakapu beside Mana Kai, then try the compact reef edge at Ulua–Mōkapu only when the water is calm.",
    driveMinutes: 0,
    safety:
      "Watch from shore first. If entering, stay over sand, keep fins off reef, and leave immediately if surf, current, visibility, or comfort changes.",
    sourceLabel: "Waikīkī Aquarium · Moorish idol",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/fishes/moorish-idol/moorish-idol/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Diego Delso / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%C3%8Ddolo_moro_(Zanclus_cornutus),_Anilao,_Filipinas,_2023-08-22,_DD_188.jpg",
  },
  {
    id: "hawaiian-cleaner-wrasse",
    commonName: "Hawaiian cleaner wrasse",
    scientificName: "Labroides phthirophagus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/hawaiian-cleaner-wrasse.jpg",
    imageAlt:
      "A small Hawaiian cleaner wrasse with a purple body and bright yellow head",
    recognition:
      "Small—about four inches—with a bright yellow head fading into magenta and purple. Juveniles are black with one broad electric-blue stripe.",
    scienceNote:
      "This fish occurs only in the Hawaiian Islands. It runs reef cleaning stations where larger fish pause while the wrasse removes tiny crustacean parasites, mucus, and some scales.",
    kidMission:
      "Look for a bigger fish holding unusually still with fins, mouth, or gill covers spread. The tiny dancer nearby may be its cleaner.",
    whereToLook:
      "Try the closest calm reef edge from Keawakapu, then Ulua–Mōkapu. Look for cleaning behavior rather than chasing one tiny fish.",
    driveMinutes: 0,
    safety:
      "Observe without surrounding a cleaning station. Stay over sand, never touch coral, and do not follow client fish or block their route away.",
    sourceLabel: "Waikīkī Aquarium · Hawaiian cleaner wrasse",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/fishes/wrasses/hawaiian-cleaner-wrasse/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Dwayne Meadows / NOAA",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Labroides_phthirophagus.jpg",
  },
  {
    id: "rock-boring-urchin",
    commonName: "Rock-boring urchin",
    hawaiianName: "ʻIna",
    scientificName: "Echinometra mathaei",
    kind: "echinoderm",
    habitat: "reef",
    image: "creatures/rock-boring-urchin.jpg",
    imageAlt: "A tan rock-boring urchin wedged into a shallow reef crevice",
    recognition:
      "A small oval urchin, usually green-gray, tan, or pink, packed into its own shallow rock hollow. Short sturdy spines radiate around five paired rows of tube feet.",
    scienceNote:
      "This is Hawaiʻi’s most common shallow-water urchin. Its spines and scraping jaws enlarge a natural rock hollow as it grows, while the animal grazes algae from wave-washed reef.",
    kidMission:
      "Without touching, count the five-part pattern. Can you spot five zones of tube feet alternating with five zones of spines?",
    whereToLook:
      "From Keawakapu or Ulua–Mōkapu, inspect wet rock and shallow reef crevices only from a stable, respectful position.",
    driveMinutes: 0,
    safety:
      "Never pull an urchin from its hole or put hands and feet into reef crevices. Avoid wave-washed rock, sharp reef, and any water entry in poor conditions.",
    sourceLabel: "Waikīkī Aquarium · rock-boring urchin",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/invertebrates/echinoderms/rock-boring-urchin/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Blowing Puffer Fish / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Echinometra_mathaei_BPF.jpg",
  },
] satisfies Creature[];

export const creaturePlaces = [
  {
    id: "honu-keawakapu",
    creatureId: "honu",
    name: "Keawakapu Beach · north access",
    coordinates: "20.702045, -156.444191",
    driveMinutes: 0,
    reason:
      "Start from shore at the reef beside Mana Kai; it is the lowest-friction check and the County explicitly notes marine-life observation here.",
    parking:
      "Walk from Mana Kai, or use the public lot across South Kīhei Road at Kilohana Drive.",
    timing: "Calm early morning; scan from shore before deciding to enter.",
    caveat:
      "No lifeguard. A turtle may never appear; keep the NOAA 10-foot buffer.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Keawakapu access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.702045%2C-156.444191",
    metrics: { signal: 3, ease: 5, safety: 3 },
  },
  {
    id: "honu-hookipa",
    creatureId: "honu",
    name: "Hoʻokipa Lookout",
    coordinates: "20.934421, -156.355848",
    driveMinutes: 38,
    reason:
      "A paved overlook makes a dry-land scan easy, with no need to enter powerful north-shore water.",
    parking:
      "Use the signed Lookout Point lot: 38 paved and 25 unpaved spaces are listed by the County.",
    timing: "Pair with a north-shore day; use zoom from the overlook.",
    caveat:
      "This is a scan point, not a turtle appointment. Do not descend to crowd resting wildlife.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Hoʻokipa Beach Park",
    sourceUrl:
      "https://www.mauicounty.gov/Facilities/Facility/Details/Hookipa-Beach-Park-169",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.934421%2C-156.355848",
    metrics: { signal: 4, ease: 4, safety: 5 },
  },
  {
    id: "yellow-tang-ulua",
    creatureId: "yellow-tang",
    name: "Ulua–Mōkapu reef edge",
    coordinates: "20.690531, -156.443670",
    driveMinutes: 7,
    reason:
      "The closest named public reef access with parking, showers, restrooms, and a clear sand-to-rock edge to scan.",
    parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
    timing: "Calm early morning, staying over sand and looking toward rock.",
    caveat:
      "No lifeguard. Reef habitat fits the fish; an individual sighting is not documented or assured.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Ulua–Mōkapu Beach Parks",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
    metrics: { signal: 4, ease: 5, safety: 3 },
  },
  {
    id: "yellow-tang-ahihi",
    creatureId: "yellow-tang",
    name: "ʻĀhihi-Kīnaʻu · Kanahena lot",
    driveMinutes: 24,
    reason:
      "A protected no-take reserve with a designated activity zone and official visitor map.",
    parking:
      "Park only in the paid Kanahena lot; roadside stopping and shoulder parking are prohibited.",
    timing:
      "Arrive early, read the posted activity map, and enter only if conditions allow.",
    caveat:
      "Daily access is posted 5:30 a.m.–7:30 p.m.; $10 per car, card only. Anchialine pools are closed.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi DLNR · ʻĀhihi-Kīnaʻu visitor rules",
    sourceUrl: "https://dlnr.hawaii.gov/ecosystems/nars/maui/ahihi-kinau-2/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahihi-Kinau+Natural+Area+Reserve+Parking+Lot",
    metrics: { signal: 5, ease: 2, safety: 3 },
  },
  {
    id: "triggerfish-ahihi",
    creatureId: "reef-triggerfish",
    name: "ʻĀhihi-Kīnaʻu · Kanahena lot",
    driveMinutes: 24,
    reason:
      "The reserve protects reef animals and its official activity map directs visitors to the lawful water-access zone.",
    parking:
      "Use the paid Kanahena lot only; do not park or unload on the reserve road shoulder.",
    timing:
      "Calm early morning; inspect the sand-and-rock boundary without feeding fish.",
    caveat:
      "Posted access 5:30 a.m.–7:30 p.m.; $10 per car, card only. Follow closures and signs on arrival.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi DLNR · ʻĀhihi-Kīnaʻu visitor rules",
    sourceUrl: "https://dlnr.hawaii.gov/ecosystems/nars/maui/ahihi-kinau-2/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahihi-Kinau+Natural+Area+Reserve+Parking+Lot",
    metrics: { signal: 5, ease: 2, safety: 3 },
  },
  {
    id: "triggerfish-ulua",
    creatureId: "reef-triggerfish",
    name: "Ulua–Mōkapu reef edge",
    coordinates: "20.690531, -156.443670",
    driveMinutes: 7,
    reason:
      "A much easier first look: public facilities and a compact reef edge close to the family’s base.",
    parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
    timing: "Calm early morning; watch the bottom where sand meets rock.",
    caveat:
      "No lifeguard. Never feed fish, put hands in holes, or stand on reef.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Ulua–Mōkapu Beach Parks",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
    metrics: { signal: 3, ease: 5, safety: 3 },
  },
  {
    id: "monk-seal-hookipa",
    creatureId: "hawaiian-monk-seal",
    name: "Hoʻokipa Lookout",
    coordinates: "20.934421, -156.355848",
    driveMinutes: 38,
    reason:
      "The elevated, paved lookout supports a wide beach scan without walking the strand in search of a resting seal.",
    parking:
      "Use the signed Lookout Point lot rather than the beach-level lots.",
    timing:
      "A short scan when already on the north shore; binoculars or phone zoom only.",
    caveat:
      "No reliable appointment. Stay 50 feet away—150 feet for a mother and pup—and obey ropes.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Hoʻokipa Beach Park",
    sourceUrl:
      "https://www.mauicounty.gov/Facilities/Facility/Details/Hookipa-Beach-Park-169",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.934421%2C-156.355848",
    metrics: { signal: 4, ease: 4, safety: 5 },
  },
  {
    id: "monk-seal-keawakapu",
    creatureId: "hawaiian-monk-seal",
    name: "Keawakapu shoreline walk",
    coordinates: "20.702045, -156.444191",
    driveMinutes: 0,
    reason:
      "The no-drive fallback is simply to scan the open beach during an ordinary walk, never to seek or approach a seal.",
    parking:
      "Walk from Mana Kai; public overflow is across the road at Kilohana Drive.",
    timing:
      "Any normal beach walk; check far ahead before continuing along the sand.",
    caveat:
      "Low-confidence watch only. If a seal is present, stop well back and give it the beach.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Keawakapu access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.702045%2C-156.444191",
    metrics: { signal: 1, ease: 5, safety: 4 },
  },
  {
    id: "stilt-boardwalk",
    creatureId: "hawaiian-stilt",
    name: "Keālia Coastal Boardwalk",
    coordinates: "20.796345, -156.489581",
    driveMinutes: 18,
    reason:
      "The strongest easy family stop: the refuge specifically names aeʻo viewing and the boardwalk crosses wetland habitat.",
    parking:
      "Use the 14-stall boardwalk lot off North Kīhei Road; do not route to the separate refuge headquarters.",
    timing: "Early morning; boardwalk hours are posted as 6:30 a.m.–7 p.m.",
    caveat:
      "Stay on the boardwalk and back away if adults alarm-call; July can include chicks and closures.",
    evidence: "documented site",
    verifiedAt: "2026-07-03",
    sourceLabel: "USFWS · Keālia visit and access",
    sourceUrl: "https://www.fws.gov/refuge/kealia-pond/visit-us",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.796345%2C-156.489581",
    metrics: { signal: 5, ease: 5, safety: 5 },
  },
  {
    id: "stilt-headquarters",
    creatureId: "hawaiian-stilt",
    name: "Keālia visitor center · Kanuimanu Ponds",
    coordinates: "20.795050, -156.466150",
    driveMinutes: 17,
    reason:
      "Staff updates plus flat pond levees make this the better choice when the weekday visitor center is open.",
    parking:
      "Enter at Milepost 6 on Maui Veterans Highway and use the visitor-center lot.",
    timing: "Weekdays; visitor center currently posts 9 a.m.–3 p.m.",
    caveat:
      "This is a different entrance from the coastal boardwalk. Check gate hours and seasonal trail closures.",
    evidence: "documented site",
    verifiedAt: "2026-07-03",
    sourceLabel: "USFWS · Keālia visit and access",
    sourceUrl: "https://www.fws.gov/refuge/kealia-pond/visit-us",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.795050%2C-156.466150",
    metrics: { signal: 5, ease: 4, safety: 5 },
  },
  {
    id: "spinner-la-perouse",
    creatureId: "spinner-dolphin",
    name: "Keoneʻōʻio · La Perouse Bay shore",
    coordinates: "20.597272, -156.422682",
    driveMinutes: 34,
    reason:
      "NOAA identifies La Perouse Bay as essential daytime spinner-dolphin habitat; observe from shore only.",
    parking:
      "Use the rough Keoneʻōʻio end-of-road lot; never stop on the reserve road shoulder.",
    timing: "A distant shore scan, not a swim or dolphin-directed trip.",
    caveat:
      "The time-area closure shown by NOAA is proposed, not final. The active 50-yard federal rule still applies.",
    evidence: "documented site",
    verifiedAt: "2026-07-03",
    sourceLabel: "NOAA Fisheries · proposed La Perouse habitat map",
    sourceUrl:
      "https://www.fisheries.noaa.gov/resource/map/maps-proposed-time-area-closures-hawaiian-spinner-dolphins",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.597272%2C-156.422682",
    metrics: { signal: 5, ease: 2, safety: 4 },
  },
  {
    id: "spinner-makena-landing",
    creatureId: "spinner-dolphin",
    name: "Mākena Landing · dry-land scan",
    coordinates: "20.653776, -156.440785",
    driveMinutes: 18,
    reason:
      "A closer public shoreline viewpoint for an incidental scan across open water, with no pursuit or bay entry.",
    parking:
      "Use the marked Mākena Landing public lot; leave if it is full rather than roadside-park.",
    timing:
      "Only while already there for a shore stop; a sighting is unlikely and never the plan.",
    caveat:
      "Low-confidence watch. Federal law prohibits approaching or remaining within 50 yards.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "NOAA Fisheries · spinner dolphin viewing rule",
    sourceUrl:
      "https://www.fisheries.noaa.gov/action/final-rule-prohibit-swimming-and-approaching-hawaiian-spinner-dolphins",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.653776%2C-156.440785",
    metrics: { signal: 1, ease: 4, safety: 4 },
  },
  {
    id: "octopus-ulua",
    creatureId: "day-octopus",
    name: "Ulua–Mōkapu reef edge",
    coordinates: "20.690531, -156.443670",
    driveMinutes: 7,
    reason:
      "The easiest patient search over a small reef patch, with a signed public lot and facilities.",
    parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
    timing:
      "Calm early morning; hold still and watch one patch of rubble for a full minute.",
    caveat:
      "No lifeguard. Habitat fit only—never reach into a hole or pry at an animal.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Ulua–Mōkapu Beach Parks",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
    metrics: { signal: 4, ease: 5, safety: 3 },
  },
  {
    id: "octopus-ahihi",
    creatureId: "day-octopus",
    name: "ʻĀhihi-Kīnaʻu · Kanahena lot",
    driveMinutes: 24,
    reason:
      "Protected no-take reef habitat offers the stronger ecological fit when access and ocean conditions are good.",
    parking: "Use the paid Kanahena lot only; roadside stopping is prohibited.",
    timing: "Arrive early and use only the activity-map access zone.",
    caveat:
      "Posted access 5:30 a.m.–7:30 p.m.; $10 per car, card only. Pools and closed areas stay closed.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi DLNR · ʻĀhihi-Kīnaʻu visitor rules",
    sourceUrl: "https://dlnr.hawaii.gov/ecosystems/nars/maui/ahihi-kinau-2/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahihi-Kinau+Natural+Area+Reserve+Parking+Lot",
    metrics: { signal: 5, ease: 2, safety: 3 },
  },
  {
    id: "shearwater-kamaole",
    creatureId: "wedge-tailed-shearwater",
    name: "Kamaʻole III · lawn and seaward scan",
    coordinates: "20.721331, -156.447401",
    driveMinutes: 5,
    reason:
      "DLNR documented monitored ʻuaʻu kani burrows here; the lawful observation is from established lawn and paths only.",
    parking: "Use the County park lot with 82 spaces at 2800 South Kīhei Road.",
    timing: "Dusk listening from pavement or mown lawn; keep lights low.",
    caveat:
      "Never seek a burrow, step into rough vegetation, use flash, or approach a calling bird.",
    evidence: "documented site",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi DLNR · Maui ʻuaʻu kani monitoring",
    sourceUrl: "https://dlnr.hawaii.gov/dofaw/fw-announcements/nr15-059f/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.721331%2C-156.447401",
    metrics: { signal: 5, ease: 5, safety: 4 },
  },
  {
    id: "shearwater-molokini",
    creatureId: "wedge-tailed-shearwater",
    name: "Molokini · view from a lawful boat",
    coordinates: "20.632871, -156.496028",
    driveMinutes: 20,
    reason:
      "DLNR identifies ʻuaʻu kani as Molokini’s main seabird residents, so the crossing is the strongest open-water scan.",
    parking:
      "Use the operator’s assigned harbor check-in and parking instructions; there is no public landing on the islet.",
    timing:
      "Watch the air and water on an existing lawful crossing—do not book solely for a bird sighting.",
    caveat:
      "Molokini is a closed seabird sanctuary: no landing or climbing. Boat access and wildlife are never assured.",
    evidence: "documented site",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi DLNR · Maui offshore islet sanctuaries",
    sourceUrl:
      "https://dlnr.hawaii.gov/wildlife/sanctuaries/mauioffshoreislets/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.632871%2C-156.496028",
    metrics: { signal: 5, ease: 1, safety: 4 },
  },
  {
    id: "bat-mana-kai",
    creatureId: "hawaiian-hoary-bat",
    name: "Mana Kai · open sky at dusk",
    coordinates: "20.704932, -156.446466",
    driveMinutes: 0,
    reason:
      "The right first move is no move: watch the open sky near trees from the family’s own grounds.",
    parking: "No drive or special parking; observe from a lawful common area.",
    timing: "Ten quiet minutes around dusk; look for solitary, erratic flight.",
    caveat:
      "Low-confidence habitat watch only. DLNR’s seasonal detail is from Hawaiʻi Island, not a Maui-site promise.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi DLNR · ʻōpeʻapeʻa ecology",
    sourceUrl: "https://dlnr.hawaii.gov/wildlife/opeapea/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
    metrics: { signal: 1, ease: 5, safety: 5 },
  },
  {
    id: "bat-kalama",
    creatureId: "hawaiian-hoary-bat",
    name: "Kalama Park · open lawn at dusk",
    coordinates: "20.731544, -156.453037",
    driveMinutes: 9,
    reason:
      "A large public park with mature landscaping and open sky gives a clear flight silhouette without entering habitat.",
    parking: "Use one of the County park’s four lots; 282 spaces are listed.",
    timing: "Dusk only when already nearby; remain in lit public areas.",
    caveat:
      "Low-confidence habitat watch, not a known roost. Never touch a grounded bat.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Kalama Park access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Kalama-Park-207",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.731544%2C-156.453037",
    metrics: { signal: 1, ease: 4, safety: 4 },
  },
  {
    id: "chicken-mana-kai",
    creatureId: "red-junglefowl",
    name: "Mana Kai · lawns and parking edge",
    coordinates: "20.704932, -156.446466",
    driveMinutes: 0,
    reason:
      "Begin on site: ordinary lawns and paved edges are the lowest-effort place to notice feral chickens without feeding them.",
    parking: "No drive; observe only from lawful resort common areas.",
    timing: "Early morning, when calls make birds easier to locate.",
    caveat:
      "No individual bird is guaranteed. Keep away from hens with chicks and never feed them.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Nature · Hawaiian feral chicken genetics",
    sourceUrl: "https://www.nature.com/articles/s41437-022-00589-z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
    metrics: { signal: 3, ease: 5, safety: 5 },
  },
  {
    id: "chicken-kalama",
    creatureId: "red-junglefowl",
    name: "Kalama Park · open lawns",
    coordinates: "20.731544, -156.453037",
    driveMinutes: 9,
    reason:
      "Large public lawns and four parking lots make this an easy incidental check during another Kīhei stop.",
    parking:
      "Use any signed County park lot; do not stop traffic to watch a bird.",
    timing: "Morning, paired with the playground or coastal walk.",
    caveat:
      "Access is documented; animal presence is not. Watch, do not feed or corner.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Kalama Park access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Kalama-Park-207",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.731544%2C-156.453037",
    metrics: { signal: 2, ease: 5, safety: 5 },
  },
  {
    id: "zebra-dove-mana-kai",
    creatureId: "zebra-dove",
    name: "Mana Kai · lawn edge",
    coordinates: "20.704932, -156.446466",
    driveMinutes: 0,
    reason:
      "Listen first from the resort grounds; the soft rising call is more useful than driving to a speculative hotspot.",
    parking:
      "No drive; stay in lawful common areas and keep away from occupied rooms.",
    timing: "Quiet morning, watching the ground beneath trees and shrubs.",
    caveat:
      "Low-confidence watch only. Do not feed birds around patios or parking areas.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Hawaiʻi Public Radio · Zebra dove field marks",
    sourceUrl:
      "https://www.hawaiipublicradio.org/podcast/manu-minute/2022-10-06/manu-minute-the-zebra-dove",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
    metrics: { signal: 3, ease: 5, safety: 5 },
  },
  {
    id: "zebra-dove-kalama",
    creatureId: "zebra-dove",
    name: "Kalama Park · mature landscaping",
    coordinates: "20.731544, -156.453037",
    driveMinutes: 9,
    reason:
      "The park’s open lawns and mature landscaping make an easy secondary listen while doing something else nearby.",
    parking:
      "Use one of four signed County lots; the park lists ample parking.",
    timing: "Morning; listen beneath ambient road and playground noise.",
    caveat:
      "Access is documented, not dove abundance. Never bait birds with food.",
    evidence: "low-confidence watch",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Kalama Park access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Kalama-Park-207",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.731544%2C-156.453037",
    metrics: { signal: 2, ease: 5, safety: 5 },
  },
  {
    id: "moorish-idol-keawakapu",
    creatureId: "moorish-idol",
    name: "Keawakapu · Mana Kai reef edge",
    coordinates: "20.704932, -156.446466",
    driveMinutes: 0,
    reason:
      "The on-site reef edge is the first check because Moorish idols can forage in rocky shallows and are visible from shore when water is clear.",
    parking:
      "No drive: use only Mana Kai common access, or the public Keawakapu lot across South Kīhei Road at Kilohana Drive.",
    timing: "Calm early morning; scan from dry sand before considering entry.",
    caveat:
      "Official habitat fit, not a site-specific sighting record. No lifeguard; never enter rough or cloudy water.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Keawakapu access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
    metrics: { signal: 4, ease: 5, safety: 3 },
  },
  {
    id: "moorish-idol-ulua",
    creatureId: "moorish-idol",
    name: "Ulua–Mōkapu reef edge",
    coordinates: "20.690531, -156.443670",
    driveMinutes: 7,
    reason:
      "A compact, named public reef access with parking and a clear sand-to-rock boundary for a second look.",
    parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
    timing: "Calm early morning; look low over reef and rocky shallows.",
    caveat:
      "No lifeguard. The species is common in Hawaiʻi, but this exact access point never guarantees an encounter.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Ulua–Mōkapu Beach Parks",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
    metrics: { signal: 4, ease: 5, safety: 3 },
  },
  {
    id: "cleaner-wrasse-keawakapu",
    creatureId: "hawaiian-cleaner-wrasse",
    name: "Keawakapu · Mana Kai reef edge",
    coordinates: "20.704932, -156.446466",
    driveMinutes: 0,
    reason:
      "Start with the reef beside the hotel and search for the behavior—a larger fish posing still—rather than trying to chase a four-inch wrasse.",
    parking:
      "No drive: use Mana Kai common access, or the public Keawakapu lot across South Kīhei Road at Kilohana Drive.",
    timing:
      "Calm early morning with good visibility; watch one reef patch patiently.",
    caveat:
      "Habitat fit only. A cleaning station is never assured, and poor visibility makes this tiny fish impractical to find.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Keawakapu access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
    metrics: { signal: 2, ease: 5, safety: 3 },
  },
  {
    id: "cleaner-wrasse-ulua",
    creatureId: "hawaiian-cleaner-wrasse",
    name: "Ulua–Mōkapu reef edge",
    coordinates: "20.690531, -156.443670",
    driveMinutes: 7,
    reason:
      "The compact reef edge is a practical second observation site for patient cleaning-station behavior.",
    parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
    timing:
      "Calm early morning; stay still and let fish resume normal behavior.",
    caveat:
      "No lifeguard. Do not crowd client fish, follow a cleaner, touch reef, or treat the map pin as a sighting report.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Ulua–Mōkapu Beach Parks",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
    metrics: { signal: 3, ease: 5, safety: 3 },
  },
  {
    id: "rock-boring-urchin-keawakapu",
    creatureId: "rock-boring-urchin",
    name: "Keawakapu · Mana Kai reef edge",
    coordinates: "20.704932, -156.446466",
    driveMinutes: 0,
    reason:
      "The nearest lawful look is the hotel’s own reef edge, where the species’ preferred shallow rock crevices can be inspected without a special trip.",
    parking:
      "No drive: use Mana Kai common access, or the public Keawakapu lot across South Kīhei Road at Kilohana Drive.",
    timing:
      "Calm, clear water; inspect from dry sand or over sand without touching rock.",
    caveat:
      "Habitat fit only. Never balance on wet reef or reach into a hole; a missed sighting is safer than a closer look.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Keawakapu access",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
    metrics: { signal: 4, ease: 5, safety: 3 },
  },
  {
    id: "rock-boring-urchin-ulua",
    creatureId: "rock-boring-urchin",
    name: "Ulua–Mōkapu reef edge",
    coordinates: "20.690531, -156.443670",
    driveMinutes: 7,
    reason:
      "A compact second reef access where shallow crevices can be scanned while keeping hands and feet away.",
    parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
    timing:
      "Calm early morning; look into rock hollows without stepping onto reef.",
    caveat:
      "No lifeguard. Urchin spines and reef can puncture skin; observation never requires touching or extraction.",
    evidence: "official habitat fit",
    verifiedAt: "2026-07-03",
    sourceLabel: "Maui County · Ulua–Mōkapu Beach Parks",
    sourceUrl:
      "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
    metrics: { signal: 4, ease: 5, safety: 3 },
  },
] satisfies CreaturePlace[];
