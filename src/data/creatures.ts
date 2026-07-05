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
  {
    id: "achilles-tang",
    commonName: "Achilles tang",
    hawaiianName: "Pākuʻikuʻi",
    scientificName: "Acanthurus achilles",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/achilles-tang.jpg",
    imageAlt: "A dark Achilles tang with a vivid orange tail patch",
    recognition:
      "A near-black oval body with one blazing orange teardrop beside the tail and a white blade-like tail spine.",
    scienceNote:
      "A surge-zone surgeonfish built for oxygen-rich water. Its narrow mouth scrapes algae while the tail spine is defense, not a tool for people to test.",
    kidMission:
      "Find the orange teardrop first, then watch whether the fish holds position against moving water.",
    whereToLook:
      "Scan clear, wave-washed reef edges from shore or over sand; it favors more surge than yellow tang usually do.",
    driveMinutes: 7,
    safety:
      "Do not enter surge to follow one. Keep hands away from every surgeonfish tail spine and fins off reef.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "FakirNL / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Acanthurus_achilles_in_Ouwehands_Dierenpark_03.jpg",
  },
  {
    id: "convict-tang",
    commonName: "Convict tang",
    hawaiianName: "Manini",
    scientificName: "Acanthurus triostegus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/convict-tang.jpg",
    imageAlt: "A pale convict tang with narrow black vertical bars",
    recognition:
      "Pale silver with five narrow black bars, including one through the eye—like a tiny reef zebra.",
    scienceNote:
      "Manini often graze in groups. Many small mouths cropping algae at once can clear a visible feeding patch.",
    kidMission:
      "Count bars on one fish, then count how many neighbors turn together when the school changes direction.",
    whereToLook:
      "Shallow reef flats and the sand-rock boundary in calm, clear morning water.",
    driveMinutes: 0,
    safety:
      "Watch a school pass; never herd it toward shore or stand on reef for a better angle.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Brian Gratwicke / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Convict_Surgeonfish,_Acanthurus_triostegus.jpg",
  },
  {
    id: "orangespine-unicornfish",
    commonName: "Orangespine unicornfish",
    scientificName: "Naso lituratus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/orangespine-unicornfish.jpg",
    imageAlt: "A gray orangespine unicornfish with orange lips and tail spines",
    recognition:
      "Slate gray with orange lips, a dark face mask, and two bright orange plates at the tail base.",
    scienceNote:
      "Despite the family name, this species lacks a long forehead horn. The orange tail plates are fixed scalpels used for defense.",
    kidMission:
      "Use three clues in order: orange mouth, black mask, orange tail plates.",
    whereToLook:
      "Clear reef slopes and edges where larger herbivores cruise between feeding patches.",
    driveMinutes: 7,
    safety:
      "Never corner or touch a surgeonfish; its tail plates can cut. Stay over sand and let it choose the distance.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "Rjcastillo / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Naso_lituratus_A74265620241123.jpg",
  },
  {
    id: "milletseed-butterflyfish",
    commonName: "Milletseed butterflyfish",
    scientificName: "Chaetodon miliaris",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/milletseed-butterflyfish.jpg",
    imageAlt: "A yellow milletseed butterflyfish covered in small dark spots",
    recognition:
      "A yellow oval sprinkled with neat black dots, plus a black eye bar and one dark patch near the tail.",
    scienceNote:
      "This butterflyfish is endemic to Hawaiʻi and often plucks drifting zooplankton above the reef instead of biting coral.",
    kidMission:
      "Look for a fish hovering above the reef and pecking at invisible specks in the water.",
    whereToLook:
      "Above shallow reef, especially where a small current carries plankton past the fish.",
    driveMinutes: 0,
    safety:
      "Observe without swimming into a feeding group; watch current and remain over sand.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Alfonsin11 / Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:SNORKELING_IN_MAUI,_HAWAII.jpg",
  },
  {
    id: "raccoon-butterflyfish",
    commonName: "Raccoon butterflyfish",
    hawaiianName: "Kīkākapu",
    scientificName: "Chaetodon lunula",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/raccoon-butterflyfish.jpg",
    imageAlt: "A yellow raccoon butterflyfish with a broad black eye mask",
    recognition:
      "Yellow body, broad black raccoon mask, white forehead band, and diagonal dark lines behind the head.",
    scienceNote:
      "A nighttime feeder that shelters close to reef by day, using its narrow snout to take small invertebrates.",
    kidMission:
      "Compare its wide mask with the thin eye stripe on the milletseed butterflyfish.",
    whereToLook:
      "Near ledges and reef crevices; paired fish may stay close together.",
    driveMinutes: 7,
    safety:
      "Do not shine lights into holes or reach under ledges. Keep the reef between you and your curiosity.",
    sourceLabel: "Waikīkī Aquarium · butterflyfish biology",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/fishes/butterflyfishes/tinkers-butterflyfish/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "Brian Gratwicke / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Raccoon_butterflyfish,_Chaetodon_lunula.jpg",
  },
  {
    id: "saddle-wrasse",
    commonName: "Saddle wrasse",
    hawaiianName: "Hīnālea lauwili",
    scientificName: "Thalassoma duperrey",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/saddle-wrasse.jpg",
    imageAlt: "Two colorful saddle wrasses feeding above reef",
    recognition:
      "A fast green-blue wrasse with a red-orange saddle behind the head; smaller fish can look browner and less vivid.",
    scienceNote:
      "Endemic to Hawaiʻi and famous for changing color and sex as social roles shift within a group.",
    kidMission:
      "Follow with your eyes, not your fins: how many sharp turns can it make in ten seconds?",
    whereToLook:
      "Almost any healthy shallow reef edge, weaving close to rock and rubble.",
    driveMinutes: 0,
    safety:
      "Fast fish tempt chasing. Hold position instead and keep fins high above the bottom.",
    sourceLabel: "Waikīkī Aquarium · Hawaiian marine communities",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/exhibits/hawaiian-marine-communities/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Brocken Inaglory / Wikimedia Commons",
    photoLicense: "CC BY-SA 2.5",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Two_Saddle_Wrasse_are_feeding_on_sea_urchin.jpg",
  },
  {
    id: "bird-wrasse",
    commonName: "Bird wrasse",
    scientificName: "Gomphosus varius",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/bird-wrasse.jpg",
    imageAlt: "A green-blue bird wrasse with a long curved snout",
    recognition:
      "The long curved beak is unmistakable; adults may be deep blue-green while females and juveniles are paler brown-white.",
    scienceNote:
      "Its beak-like snout probes narrow reef gaps for small crustaceans that rounder fish cannot reach.",
    kidMission:
      "Watch the beak: count how many different cracks it checks before moving on.",
    whereToLook: "Reef faces with many cracks and small ledges.",
    driveMinutes: 7,
    safety:
      "Never put your own fingers into the holes a wrasse investigates; reef crevices belong to wildlife.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "H. Zell / Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gomphosus_varius_-_Wilhelma_01.jpg",
  },
  {
    id: "hawaiian-sergeant",
    commonName: "Hawaiian sergeant",
    scientificName: "Abudefduf abdominalis",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/hawaiian-sergeant.jpg",
    imageAlt:
      "A silvery Hawaiian sergeant with dark bars and yellow upper body",
    recognition:
      "A sturdy silver fish with five dark bars and a yellow wash across the upper back.",
    scienceNote:
      "Found only around Hawaiʻi and nearby Johnston Atoll. Males darken while guarding eggs attached to reef surfaces.",
    kidMission:
      "If one fish keeps circling one patch, back away and see whether it is guarding eggs.",
    whereToLook:
      "Shallow reef and rocky edges, sometimes in loose groups above the bottom.",
    driveMinutes: 0,
    safety:
      "Give territorial fish extra room and never inspect or touch an egg patch.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "NOAA Photo Library / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Corl0096_(28009595452).jpg",
  },
  {
    id: "hawaiian-dascyllus",
    commonName: "Hawaiian dascyllus",
    scientificName: "Dascyllus albisella",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/hawaiian-dascyllus.jpg",
    imageAlt: "A round Hawaiian dascyllus hovering near branching coral",
    recognition:
      "Young fish are pale with a dark head and dark fins; adults become charcoal gray with a round, high-backed shape.",
    scienceNote:
      "An endemic damselfish that uses branching coral as a shelter tower, darting out for plankton and back into cover.",
    kidMission:
      "Pick one coral head from far away and count how many times a fish leaves and returns.",
    whereToLook:
      "Near intact branching coral, never by swimming directly over or between branches.",
    driveMinutes: 7,
    safety:
      "Coral is alive and fragile. Stay well above it and never use it to steady yourself.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "NOAA Photo Library / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Corl0066_(28034439531).jpg",
  },
  {
    id: "bluespotted-cornetfish",
    commonName: "Bluespotted cornetfish",
    hawaiianName: "Nūnū",
    scientificName: "Fistularia commersonii",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/bluespotted-cornetfish.jpg",
    imageAlt: "A very long, slender cornetfish hovering above reef",
    recognition:
      "A pencil-thin fish with a tube snout, tiny tail flag, and a body that can look blue-green or brown.",
    scienceNote:
      "It is an ambush hunter that can shadow larger fish, using them as moving cover before darting at small prey.",
    kidMission:
      "Look for a straight line that does not belong: can you spot the fish before it moves?",
    whereToLook:
      "Hovering above sand channels and reef edges, sometimes nearly vertical.",
    driveMinutes: 0,
    safety:
      "Do not chase a camouflaged hunter into deeper water. Keep your own route and shore position clear.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Diego Delso / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pez_corneta_pintada_(Fistularia_commersonii),_Anilao,_Filipinas,_2023-08-23,_DD_177.jpg",
  },
  {
    id: "spotted-eagle-ray",
    commonName: "Spotted eagle ray",
    hawaiianName: "Hīhīmanu",
    scientificName: "Aetobatus ocellatus",
    kind: "ray",
    habitat: "open ocean",
    image: "creatures/spotted-eagle-ray.jpg",
    imageAlt: "A spotted eagle ray gliding with its long tail trailing behind",
    recognition:
      "A dark kite-shaped back scattered with white spots, a projecting duck-bill snout, and a very long whip tail.",
    scienceNote:
      "Flattened tooth plates crush buried clams and snails. The ray uses its snout and wing beats to expose prey in sand.",
    kidMission:
      "From a boat or shore, compare wing motion with a bird: flap, glide, or both?",
    whereToLook:
      "An incidental clear-water sighting over sand or beside reef—not a reason to swim farther offshore.",
    driveMinutes: 18,
    safety:
      "Never pursue, touch, or block a ray. Stay clear of the tail and let it leave in any direction.",
    sourceLabel: "University of Hawaiʻi Sea Grant · interactive reef",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Makena+Landing+Maui",
    photoCredit: "BEDO Thailand / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Aetobatus_ocellatus.jpg",
  },
  {
    id: "shingle-urchin",
    commonName: "Shingle urchin",
    hawaiianName: "Hāʻukeʻuke",
    scientificName: "Colobocentrotus atratus",
    kind: "echinoderm",
    habitat: "shoreline",
    image: "creatures/shingle-urchin.jpg",
    imageAlt: "A dark shingle urchin clinging to wave-washed Hawaiian rock",
    recognition:
      "A low purple-black dome covered in smooth overlapping plates instead of long spines.",
    scienceNote:
      "Its shingle-like spines, low profile, and powerful tube feet are adaptations for clinging inside the full force of surf.",
    kidMission:
      "From dry ground, compare its shape with a stream-smoothed pebble. Why would low and round beat tall and spiky?",
    whereToLook:
      "Wave-hit lava rock only from a stable dry viewpoint; never enter the impact zone to find one.",
    driveMinutes: 24,
    safety:
      "Wave-washed rock can be deadly. Observation is from dry, lawful ground with no climbing or tidepool handling.",
    sourceLabel: "Waikīkī Aquarium · shingle urchin",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/invertebrates/echinoderms/shingle-urchin/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahihi+Kinau+Natural+Area+Reserve+Maui",
    photoCredit: "Dayna Bubenicek / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Colobocentrotus_atratus.jpg",
  },
  {
    id: "cushion-star",
    commonName: "Cushion star",
    scientificName: "Culcita novaeguineae",
    kind: "echinoderm",
    habitat: "reef",
    image: "creatures/cushion-star.jpg",
    imageAlt: "A thick five-sided cushion star viewed from below",
    recognition:
      "A plump pentagon that looks more like a patterned pillow than a five-armed sea star.",
    scienceNote:
      "Its arms become so inflated that only the five-part outline remains obvious; hundreds of tube feet still work underneath.",
    kidMission:
      "Find the hidden star: trace five corners in the cushion shape without touching it.",
    whereToLook:
      "On reef rubble or sand near coral, usually as a lucky stationary find.",
    driveMinutes: 7,
    safety:
      "Never lift or turn a sea star. Keep it submerged, untouched, and exactly where it is.",
    sourceLabel: "Waikīkī Aquarium · echinoderm guide",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/invertebrates/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "Nick Hobgood / Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Culcita_novaeguineae.jpg",
  },
  {
    id: "long-spine-porcupinefish",
    commonName: "Long-spine porcupinefish",
    scientificName: "Diodon holocanthus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/long-spine-porcupinefish.jpg",
    imageAlt: "A spotted long-spine porcupinefish with large round eyes",
    recognition:
      "Big round eyes, a blunt beak, dark spots, and long flattened spines lying against the body when relaxed.",
    scienceNote:
      "It inflates only under severe threat. The spines stand up as the body expands, so making one puff is animal harassment, not a trick.",
    kidMission:
      "Spot the beak and resting spines while the fish stays calm—success means it never inflates.",
    whereToLook: "Under ledges and near holes, often resting quietly by day.",
    driveMinutes: 7,
    safety:
      "Never touch, corner, lift, or try to inflate a puffer or porcupinefish.",
    sourceLabel: "Waikīkī Aquarium · edge-of-reef animals",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/exhibits/edge-of-the-reef/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "NOAA / Wikimedia Commons",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Diodon_holocanthus.jpg",
  },
  {
    id: "snowflake-moray",
    commonName: "Snowflake moray",
    hawaiianName: "Puhi kāpā",
    scientificName: "Echidna nebulosa",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/snowflake-moray.jpg",
    imageAlt: "A snowflake moray patterned with black and yellow starbursts",
    recognition:
      "Creamy white with black starbursts and yellow flecks, plus a blunt pebble-crushing snout.",
    scienceNote:
      "Its rounded teeth are built for crabs and other hard-shelled prey, unlike fish-eating morays with sharper teeth.",
    kidMission:
      "Watch the mouth open and close: the eel is pumping water over its gills, not threatening you.",
    whereToLook:
      "A head peeking from a reef hole; the rest of the eel may stay completely hidden.",
    driveMinutes: 0,
    safety:
      "Never feed an eel or put hands into any hole. Give the animal an open exit.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "David Burdick / NOAA",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Echidna_nebulosa.jpg",
  },
  {
    id: "whitemouth-moray",
    commonName: "Whitemouth moray",
    scientificName: "Gymnothorax meleagris",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/whitemouth-moray.jpg",
    imageAlt: "A dark whitemouth moray with white spots and a white mouth",
    recognition:
      "Dark brown or black with many small white spots and a startlingly white mouth lining.",
    scienceNote:
      "Morays have a second set of jaws in the throat that moves forward to pull prey back for swallowing.",
    kidMission:
      "Use only the pattern: tiny white body spots plus a white mouth. Do not move closer to confirm.",
    whereToLook:
      "Reef crevices and ledges, usually with only the head visible.",
    driveMinutes: 7,
    safety:
      "No feeding and no hands in holes. A hidden eel needs distance, not a portrait.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "David Burdick / NOAA",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gymnothorax_meleagris.jpg",
  },
  {
    id: "black-sea-cucumber",
    commonName: "Black sea cucumber",
    hawaiianName: "Loli",
    scientificName: "Holothuria atra",
    kind: "echinoderm",
    habitat: "reef",
    image: "creatures/black-sea-cucumber.jpg",
    imageAlt: "A black sea cucumber partly dusted with reef sand",
    recognition:
      "A thick black cylinder often dusted with sand, leaving bead-like strings of cleaned sediment behind.",
    scienceNote:
      "A reef recycler: it swallows sand for organic particles and returns processed sediment, helping turn over the seafloor.",
    kidMission:
      "Trace a sand trail with your eyes and find the recycler at one end—without touching either.",
    whereToLook: "Quiet sandy patches beside reef and in shallow lagoons.",
    driveMinutes: 0,
    safety:
      "Never squeeze, lift, or provoke one; stressed sea cucumbers can eject defensive material.",
    sourceLabel: "Waikīkī Aquarium · black sea cucumber",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/animal-guide/invertebrates/echinoderms/sea-cucumbers/black-sea-cucumber/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Philippe Bourjon / Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Holothuria_atra.jpg",
  },
  {
    id: "cauliflower-coral",
    commonName: "Cauliflower coral",
    hawaiianName: "Koʻa",
    scientificName: "Pocillopora meandrina",
    kind: "coral",
    habitat: "reef",
    image: "creatures/cauliflower-coral.jpg",
    imageAlt: "A branching cauliflower coral colony on a Hawaiian reef",
    recognition:
      "Compact branching heads with knobby ridges, often cream, brown, or pink and shaped like cauliflower florets.",
    scienceNote:
      "A coral head is a colony of tiny animals. Each polyp builds skeleton while microscopic algae in its tissue turn sunlight into food.",
    kidMission:
      "From above, look for one colony with many repeated branch tips—one neighborhood, thousands of animals.",
    whereToLook:
      "Clear shallow reef, viewed from enough height that no fin or foot can touch it.",
    driveMinutes: 7,
    safety:
      "Never stand on, kick, collect, or handle coral. Mineral sunscreen and shade are better reef choices than careless contact.",
    sourceLabel: "Waikīkī Aquarium · edge of the reef",
    sourceUrl:
      "https://www.waikikiaquarium.org/experience/exhibits/edge-of-the-reef/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "Dwayne Meadows / NOAA",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pocillopora_meandrina.jpg",
  },
  {
    id: "whitetip-reef-shark",
    commonName: "Whitetip reef shark",
    scientificName: "Triaenodon obesus",
    kind: "shark",
    habitat: "open ocean",
    image: "creatures/whitetip-reef-shark.jpg",
    imageAlt: "A whitetip reef shark cruising above the seafloor",
    recognition:
      "Slender gray body with bright white tips on the first dorsal fin and upper tail lobe.",
    scienceNote:
      "Unlike many sharks, it can pump water across its gills while resting and may lie on sand beneath reef ledges by day.",
    kidMission:
      "From a lawful boat or distant viewpoint, find the two white fin tips—then let the shark keep its resting place.",
    whereToLook:
      "An incidental reef or boat sighting only; never search under ledges or swim toward one.",
    driveMinutes: 20,
    safety:
      "Stay calm, keep distance, never feed or pursue, and follow lifeguard or operator instructions immediately.",
    sourceLabel: "University of Hawaiʻi Sea Grant · interactive reef",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Maalaea+Harbor+Maui",
    photoCredit: "Leonard Low / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Triaenodon_obesus.jpg",
  },
  {
    id: "dussumiers-surgeonfish",
    commonName: "Dussumier’s surgeonfish",
    hawaiianName: "Palani",
    scientificName: "Acanthurus dussumieri",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/dussumiers-surgeonfish.jpg",
    imageAlt: "A Dussumier's surgeonfish with blue lines and a pale tail",
    recognition:
      "Fine blue lines over a gray-brown body, a yellow eye ring, and a white tail with dark speckles.",
    scienceNote:
      "A large grazer that helps remove algae and detritus from reef surfaces; its colors intensify as it matures.",
    kidMission:
      "Find the eye ring, then the pale tail. Can you see the tiny blue lines only after the big clues?",
    whereToLook:
      "Deeper reef edges and clear channels where larger surgeonfish cruise.",
    driveMinutes: 7,
    safety:
      "Give large surgeonfish room and avoid their tail scalpels. Never follow one into deeper water.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "NOAA Photo Library / Wikimedia Commons",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Acanthurus_dussumieri.jpg",
  },
  {
    id: "orange-lined-triggerfish",
    commonName: "Orange-lined triggerfish",
    scientificName: "Balistapus undulatus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/orange-lined-triggerfish.jpg",
    imageAlt: "A dark triggerfish crossed by bright diagonal orange lines",
    recognition:
      "Dark green body crossed by many diagonal orange lines, with an orange tail base and blue-green face marks.",
    scienceNote:
      "The first dorsal spine locks upright like a trigger, helping the fish wedge itself into reef crevices.",
    kidMission:
      "Count orange diagonal lines without losing track when the fish turns sideways.",
    whereToLook:
      "Close to reef faces and holes, often alone and moving deliberately.",
    driveMinutes: 7,
    safety:
      "Triggerfish can defend space. Back away from repeated turns toward you and never reach into a refuge hole.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "Leonard Low / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Balistapus_undulatus.jpg",
  },
  {
    id: "goldring-surgeonfish",
    commonName: "Goldring surgeonfish",
    hawaiianName: "Kole",
    scientificName: "Ctenochaetus strigosus",
    kind: "reef fish",
    habitat: "reef",
    image: "creatures/goldring-surgeonfish.jpg",
    imageAlt:
      "A brown goldring surgeonfish with a bright yellow ring around its eye",
    recognition:
      "A compact brown-olive oval fish with faint blue-gray body stripes and one unmistakable field mark: a vivid gold-yellow ring circling each eye.",
    scienceNote:
      "Endemic to Hawaiʻi. Unlike tangs that bite algae, kole use flexible bristle-like teeth to sift fine diatoms and detritus off rock and sand, a different feeding niche on the same reef.",
    kidMission:
      "Find the gold eye-ring first, then watch the mouth work the rock surface—count how many spots it sifts in 20 seconds.",
    whereToLook:
      "Common on shallow reef flats and rock rubble close to shore, often alone or loosely scattered rather than in tight schools.",
    driveMinutes: 7,
    safety:
      "Like other surgeonfish it carries a tail-base spine; keep hands and fins away and never corner it against rock.",
    sourceLabel: "University of Hawaiʻi Sea Grant · reef fish guide",
    sourceUrl: "https://seagrant.soest.hawaii.edu/?da_image=41729",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ulua+Beach+Maui",
    photoCredit: "NasserHalaweh / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Acanthuridae_Ctenochaetus_strigosus_1.jpg",
  },
  {
    id: "grey-reef-shark",
    commonName: "Grey reef shark",
    scientificName: "Carcharhinus amblyrhynchos",
    kind: "shark",
    habitat: "open ocean",
    image: "creatures/grey-reef-shark.jpg",
    imageAlt: "A grey reef shark cruising over a reef drop-off",
    recognition:
      "A stocky gray-bronze shark with a broad rounded snout, large eyes, and a wide black rear margin on the tail fin; the first dorsal fin is plain or only faintly white-tipped.",
    scienceNote:
      "One of the most common reef sharks across the Indo-Pacific, but the IUCN lists it as endangered because reef-shark populations recover slowly from fishing pressure. It patrols reef drop-offs and channels, often circling in loose groups by day.",
    kidMission:
      "From a boat or a lawful deep-channel view, count how many times the shark passes the same stretch of reef before it turns.",
    whereToLook:
      "An incidental sighting on a boat dive or snorkel trip along a reef drop-off or channel—never a reason to swim out searching for one.",
    driveMinutes: 20,
    safety:
      "Stay calm, keep distance, never spearfish or carry bait nearby, and follow the dive or boat operator's instructions immediately if one appears.",
    sourceLabel: "Hawaiʻi DLNR · gray reef shark",
    sourceUrl: "https://dlnr.hawaii.gov/sharks/sharks/gray-reef-shark/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Maalaea+Harbor+Maui",
    photoCredit: "Marek Ślusarczyk (Tupungato) / Wikimedia Commons",
    photoLicense: "CC BY 3.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:20_Shark_in_Valencia_Oceanarium_-_Grey_Reef_Shark,_Carcharhinus_amblyrhynchos_-_Creative_Commons.jpg",
  },
  {
    id: "teated-sea-cucumber",
    commonName: "Teated sea cucumber (black teatfish)",
    scientificName: "Holothuria whitmaei",
    kind: "echinoderm",
    habitat: "reef",
    image: "creatures/teated-sea-cucumber.jpg",
    imageAlt:
      "A large black teated sea cucumber with raised bumps on a reef flat",
    recognition:
      "A large, uniformly black sea cucumber—up to about two feet long—with a stiff sand-dusted skin and 5 to 10 raised, teat-like bumps along its underside edge.",
    scienceNote:
      "Heavily targeted worldwide for the dried sea cucumber (bêche-de-mer) trade, which is why the IUCN lists it as endangered. As a deposit feeder it processes large volumes of reef sediment, recycling nutrients and helping keep sand clean.",
    kidMission:
      "If you find one, look for the row of raised teat-like bumps without touching—that field mark separates it from smaller, smoother sea cucumbers.",
    whereToLook:
      "An uncommon, lucky find on quiet reef flats and sandy lagoon margins; genuinely rare on Maui, so treat any sighting as a bonus, not a plan.",
    driveMinutes: 7,
    safety:
      "Never lift, squeeze, or collect any sea cucumber—this species is protected by its endangered status and stressed animals can eject internal material defensively.",
    sourceLabel: "IUCN Red List · Holothuria whitmaei",
    sourceUrl: "https://www.iucnredlist.org/species/pdf/1615368",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Keawakapu+Beach+Maui",
    photoCredit: "Don Loarie / Wikimedia Commons",
    photoLicense: "CC BY 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Holothuria_whitmaei_(19260385).jpg",
  },
] satisfies Creature[];

const expandedCreatureIds = [
  "achilles-tang",
  "convict-tang",
  "orangespine-unicornfish",
  "milletseed-butterflyfish",
  "raccoon-butterflyfish",
  "saddle-wrasse",
  "bird-wrasse",
  "hawaiian-sergeant",
  "hawaiian-dascyllus",
  "bluespotted-cornetfish",
  "spotted-eagle-ray",
  "shingle-urchin",
  "cushion-star",
  "long-spine-porcupinefish",
  "snowflake-moray",
  "whitemouth-moray",
  "black-sea-cucumber",
  "cauliflower-coral",
  "whitetip-reef-shark",
  "dussumiers-surgeonfish",
  "orange-lined-triggerfish",
  "goldring-surgeonfish",
  "grey-reef-shark",
  "teated-sea-cucumber",
] as const;

function expandedCreaturePlaces(
  creatureId: (typeof expandedCreatureIds)[number],
): CreaturePlace[] {
  const creature = creatures.find((item) => item.id === creatureId);
  if (!creature) throw new Error(`Missing expanded creature: ${creatureId}`);

  if (creature.habitat === "open ocean") {
    return [
      {
        id: `${creatureId}-makena-landing`,
        creatureId,
        name: "Mākena Landing · shore scan",
        coordinates: "20.653776, -156.440785",
        driveMinutes: 18,
        reason:
          "A public shoreline for an incidental clear-water scan without turning the animal into a pursuit.",
        parking:
          "Use the marked Mākena Landing public lot; leave if full rather than parking on the road.",
        timing: "Calm morning while already there; scan from shore first.",
        caveat:
          "Habitat fit only. Never swim offshore or book a trip for a promised wild encounter.",
        evidence: "official habitat fit",
        verifiedAt: "2026-07-05",
        sourceLabel: "Maui County · Mākena Landing access",
        sourceUrl:
          "https://www.mauicounty.gov/facilities/facility/details/Makena-Landing-Park-251",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=20.653776%2C-156.440785",
        metrics: { signal: 2, ease: 4, safety: 4 },
      },
      {
        id: `${creatureId}-maalaea`,
        creatureId,
        name: "Māʻalaea Harbor · lawful boat crossing",
        driveMinutes: 20,
        reason:
          "Open-water wildlife is best treated as a possible bonus on an existing operator-led crossing.",
        parking: "Follow the booked operator’s harbor and parking directions.",
        timing: "Morning crossing; let crew set every wildlife distance.",
        caveat:
          "No sighting is assured. Never ask a captain to chase, surround, feed, or crowd wildlife.",
        evidence: "low-confidence watch",
        verifiedAt: "2026-07-05",
        sourceLabel: "Hawaiʻi DLNR · ocean recreation safety",
        sourceUrl: "https://dlnr.hawaii.gov/dobor/ocean-safety/",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Maalaea+Harbor+Maui",
        metrics: { signal: 2, ease: 2, safety: 4 },
      },
    ];
  }

  if (creature.habitat === "shoreline") {
    return [
      {
        id: `${creatureId}-ahihi-shore`,
        creatureId,
        name: "ʻĀhihi-Kīnaʻu · dry shoreline look",
        driveMinutes: 24,
        reason:
          "Protected lava shoreline matches wave-zone habitat, but the safe observation point remains dry and lawful.",
        parking:
          "Use the paid Kanahena lot only; roadside stopping is prohibited.",
        timing: "Daylight, from dry stable ground after reading posted signs.",
        caveat:
          "Never enter wave impact, climb wet lava, or cross a closure for an animal.",
        evidence: "official habitat fit",
        verifiedAt: "2026-07-05",
        sourceLabel: "Hawaiʻi DLNR · ʻĀhihi-Kīnaʻu rules",
        sourceUrl:
          "https://dlnr.hawaii.gov/ecosystems/nars/maui/ahihi-kinau-2/",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Ahihi-Kinau+Natural+Area+Reserve+Parking+Lot",
        metrics: { signal: 3, ease: 2, safety: 3 },
      },
      {
        id: `${creatureId}-keawakapu-shore`,
        creatureId,
        name: "Keawakapu · dry reef-edge scan",
        coordinates: "20.704932, -156.446466",
        driveMinutes: 0,
        reason:
          "A no-drive chance to inspect exposed shoreline texture from dry sand without entering the wave zone.",
        parking:
          "Walk from Mana Kai, or use the public lot across South Kīhei Road at Kilohana Drive.",
        timing: "Daylight and calm conditions; remain on stable dry sand.",
        caveat:
          "Low-confidence watch only. Never climb wet rock or approach breaking waves for a closer look.",
        evidence: "low-confidence watch",
        verifiedAt: "2026-07-05",
        sourceLabel: "Maui County · Keawakapu access",
        sourceUrl:
          "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
        metrics: { signal: 1, ease: 5, safety: 4 },
      },
    ];
  }

  return [
    {
      id: `${creatureId}-keawakapu`,
      creatureId,
      name: "Keawakapu · Mana Kai reef edge",
      coordinates: "20.704932, -156.446466",
      driveMinutes: 0,
      reason:
        "The lowest-friction first look is the nearby sand-to-reef edge, scanned from shore before any water entry.",
      parking:
        "Walk from Mana Kai, or use the public lot across South Kīhei Road at Kilohana Drive.",
      timing: "Calm, clear early morning; stop at the first safety doubt.",
      caveat:
        "Official habitat fit, not a sighting record. No lifeguard; never touch or stand on reef.",
      evidence: "official habitat fit",
      verifiedAt: "2026-07-05",
      sourceLabel: "Maui County · Keawakapu access",
      sourceUrl:
        "https://www.mauicounty.gov/facilities/facility/details/Keawakapu-I-Beach-Park-Parking-Lot-385",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=20.704932%2C-156.446466",
      metrics: { signal: 3, ease: 5, safety: 3 },
    },
    {
      id: `${creatureId}-ulua`,
      creatureId,
      name: "Ulua–Mōkapu reef edge",
      coordinates: "20.690531, -156.443670",
      driveMinutes: 7,
      reason:
        "A compact public reef access with parking and a clear sand-to-rock boundary for a second patient look.",
      parking: "Use the signed Ulua Beach public lot off Halealiʻi Place.",
      timing: "Calm early morning, staying over sand and away from coral.",
      caveat:
        "Habitat fit only. Water conditions and animal presence are never guaranteed.",
      evidence: "official habitat fit",
      verifiedAt: "2026-07-05",
      sourceLabel: "Maui County · Ulua–Mōkapu access",
      sourceUrl:
        "https://www.mauicounty.gov/facilities/facility/details/Ulua-M333kapu-Beach-388",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=20.690531%2C-156.443670",
      metrics: { signal: 4, ease: 5, safety: 3 },
    },
  ];
}

export const creaturePlaces = [
  ...expandedCreatureIds.flatMap(expandedCreaturePlaces),
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
