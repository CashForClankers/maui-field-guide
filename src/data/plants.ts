import type { NativePlant } from "./types";

export const plants = [
  {
    id: "kalo-taro",
    commonName: "Taro",
    hawaiianName: "Kalo",
    scientificName: "Colocasia esculenta",
    role: "canoe plant",
    recognition:
      "Broad heart-shaped leaves on tall stalks, often standing in shallow flooded patches (loʻi).",
    kidTakeaway:
      "Kalo's starchy underground corm is pounded into poi—one plant, brought by voyaging canoe, that still anchors a meal today.",
    whereToSee: "Maui Nui Botanical Gardens' Hawaiian collection",
    image: "plants/kalo-taro.jpg",
    imageAlt:
      "Taro plants with broad heart-shaped leaves at Maui Nui Botanical Garden",
    photoCredit: "Forest & Kim Starr / Wikimedia Commons",
    photoLicense: "CC BY 3.0 US",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Starr-050303-4803-Colocasia_esculenta-habit-Maui_Nui_Botanical_Garden-Maui_(24444221920).jpg",
  },
  {
    id: "niu-coconut",
    commonName: "Coconut palm",
    hawaiianName: "Niu",
    scientificName: "Cocos nucifera",
    role: "canoe plant",
    recognition:
      "A tall single-trunked palm with a crown of long feathery fronds and round green-to-brown fruit clusters.",
    kidTakeaway:
      "Every part had a job: water and food from the nut, cordage from the husk fiber, thatch from the leaves.",
    whereToSee: "Along Kīhei and Hoʻokipa shoreline groves",
    image: "plants/niu-coconut.jpg",
    imageAlt: "A coconut palm tree at Hoʻokipa, Maui",
    photoCredit: "Forest & Kim Starr / Wikimedia Commons",
    photoLicense: "CC BY 3.0 US",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Starr-010704-0044-Cocos_nucifera-divers-Hookipa-Maui_(24506753066).jpg",
  },
  {
    id: "kukui-candlenut",
    commonName: "Candlenut",
    hawaiianName: "Kukui",
    scientificName: "Aleurites moluccanus",
    role: "canoe plant",
    recognition:
      "Pale, silvery-green leaves on a large tree; the state tree of Hawaiʻi, easy to spot from a distance on a green hillside.",
    kidTakeaway:
      "The oily nut once fueled lamps and torches—kukui means 'light,' and the shelled nuts shown here are still strung into lei.",
    whereToSee: "Hillside groves visible from the Kula and Upcountry drive",
    image: "plants/kukui-candlenut.jpg",
    imageAlt: "Shelled candlenuts from the kukui tree",
    photoCredit: "David E Mead / Wikimedia Commons",
    photoLicense: "CC0 1.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Candlenuts_(Aleurites_moluccana).jpg",
  },
  {
    id: "hala-pandanus",
    commonName: "Pandanus",
    hawaiianName: "Hala",
    scientificName: "Pandanus tectorius",
    role: "native plant",
    recognition:
      "Spiky spiral-arranged leaves and stilt-like prop roots, with a round fruit that looks like a spiky pineapple.",
    kidTakeaway:
      "Its long leaves (lauhala) are stripped, dried, and woven into mats and hats—a plant you can watch turn into a craft.",
    whereToSee: "Kahanu Garden and Hāna-area coastline",
    image: "plants/hala-pandanus.jpg",
    imageAlt: "A ripe orange hala (pandanus) fruit",
    photoCredit: "Anton Croos / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pandanus_tectorius_fruit_(riped).JPG",
  },
  {
    id: "ilima",
    commonName: "Yellow ʻilima",
    hawaiianName: "ʻIlima",
    scientificName: "Sida fallax",
    role: "native plant",
    recognition:
      "A low shrub with small, delicate golden-yellow flowers, each about an inch across.",
    kidTakeaway:
      "It takes 500+ paper-thin ʻilima blossoms to make one lei—count how many flowers are on a single plant to feel that scale.",
    whereToSee: "Coastal scrub and native plant beds islandwide",
    image: "plants/ilima.jpg",
    imageAlt: "Close-up of yellow ʻilima flowers",
    photoCredit: "Carl Clifford / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%60Ilima_papa_(Sida_fallax)_(2858295092).jpg",
  },
] satisfies NativePlant[];
