import type { FruitNote } from "./types";

export const fruits = [
  {
    name: "Mango",
    julySignal: "strong",
    lookFor:
      "Multiple named varieties, fragrant skin, and fruit that yields slightly at the shoulder.",
    taste:
      "Floral, resinous, or citrusy depending on the cultivar—not one generic mango flavor.",
    question: "Which variety is this, and was it grown on Maui?",
    image: "fruit/mango.jpg",
    imageAlt: "A cluster of ripe whole mangoes",
    photoCredit: "Saidismailanik / Wikimedia Commons",
    photoLicense: "CC0 1.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:A_bunch_of_mangoes.jpg",
  },
  {
    name: "Lychee",
    julySignal: "possible",
    lookFor:
      "The tail end of the season can linger into July; fresh shells should still be bright, not dry brown.",
    taste: "Rosewater, grape, and pear with a slippery translucent flesh.",
    question: "Was this picked this week, and is the seed small or large?",
    image: "fruit/lychee.jpg",
    imageAlt: "A bunch of red lychee fruits still on the branch",
    photoCredit: "Mazhar Zarif / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Lychee-fruits-bunch.jpg",
  },
  {
    name: "Apple banana",
    julySignal: "year-round",
    lookFor:
      "Short, plump bananas sold in small hands. Let yellow fruit develop freckles.",
    taste: "Sweeter and tangier than a supermarket Cavendish.",
    question: "Is this apple banana or another local banana cultivar?",
    image: "fruit/apple-banana.jpg",
    imageAlt: "A single whole yellow banana with its peel on",
    photoCredit: "Renee Comet / National Cancer Institute",
    photoLicense: "Public domain",
    photoSourceUrl: "https://commons.wikimedia.org/wiki/File:Banana_(1).jpg",
  },
  {
    name: "Lilikoʻi",
    julySignal: "possible",
    lookFor:
      "Wrinkled fruit is often ripe rather than spoiled; shake for a juicy interior.",
    taste: "High-acid tropical perfume; excellent over yogurt or shaved ice.",
    question: "Is this Maui-grown, and should we wait for it to wrinkle?",
    image: "fruit/lilikoi.jpg",
    imageAlt: "Green liliko'i passion fruit growing at a Maui marketplace",
    photoCredit: "Forest & Kim Starr / Wikimedia Commons",
    photoLicense: "CC BY 3.0 US",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Starr-090702-2115-Passiflora_edulis-green_fruit-Nahiku_Marketplace-Maui_(24968517265).jpg",
  },
  {
    name: "Dragon fruit",
    julySignal: "possible",
    lookFor:
      "Local red-fleshed cultivars can be dramatically richer than pale imported fruit.",
    taste:
      "Kiwi-like texture; mild to berry-sweet depending on cultivar and ripeness.",
    question: "What color is the flesh, and where was it grown?",
    image: "fruit/dragon-fruit.jpg",
    imageAlt: "Sliced dragon fruit showing pink skin and speckled flesh",
    photoCredit: "Roei.tabak / Wikimedia Commons",
    photoLicense: "CC BY-SA 4.0",
    photoSourceUrl: "https://commons.wikimedia.org/wiki/File:Pitaya_Colors.jpg",
  },
  {
    name: "Papaya",
    julySignal: "year-round",
    lookFor:
      "Yellowing skin and a sweet smell at the stem; buy one ripe and one green-yellow.",
    taste: "Musky melon; lime transforms it.",
    question: "When will this be ready to eat?",
    image: "fruit/papaya.jpg",
    imageAlt: "A large green papaya fruit growing on the tree in Olinda, Maui",
    photoCredit: "Forest & Kim Starr / Wikimedia Commons",
    photoLicense: "CC BY 3.0 US",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Starr-140117-4027-Carica_papaya-very_large_green_fruit-Hawea_Pl_Olinda-Maui_(25213240756).jpg",
  },
  {
    name: "Pineapple",
    julySignal: "year-round",
    lookFor:
      "Maui Gold is grown for low acidity and sweetness; color alone is not a perfect ripeness test.",
    taste: "Dense, candy-sweet, and less sharp than commodity pineapple.",
    question: "Was this grown at Hāliʻimaile, and when was it harvested?",
    image: "fruit/pineapple.jpg",
    imageAlt: "Immature pineapple fruit growing on plants in Olinda, Maui",
    photoCredit: "Forest & Kim Starr / Wikimedia Commons",
    photoLicense: "CC BY 3.0 US",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Starr-160415-0787-Ananas_comosus-lots_of_immature_fruit-Hawea_Pl_Olinda-Maui_(27333611135).jpg",
  },
  {
    name: "ʻUlu · breadfruit",
    julySignal: "possible",
    lookFor:
      "Treat it as a staple food, not a hand fruit. Ask for it roasted, fried, mashed, or in a dish.",
    taste: "Potato, fresh bread, and chestnut notes when cooked.",
    question: "How was this ʻulu prepared, and what variety is it?",
    image: "fruit/ulu-breadfruit.jpg",
    imageAlt: "A round green breadfruit hanging on its tree",
    photoCredit: "Marion Schneider & Christoph Aistleitner / Wikimedia Commons",
    photoLicense: "Public domain",
    photoSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Breadfruit_-_Artocarpus_altilis.jpg",
  },
] satisfies FruitNote[];
