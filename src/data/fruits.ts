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
  },
  {
    name: "Lychee",
    julySignal: "possible",
    lookFor:
      "The tail end of the season can linger into July; fresh shells should still be bright, not dry brown.",
    taste: "Rosewater, grape, and pear with a slippery translucent flesh.",
    question: "Was this picked this week, and is the seed small or large?",
  },
  {
    name: "Apple banana",
    julySignal: "year-round",
    lookFor:
      "Short, plump bananas sold in small hands. Let yellow fruit develop freckles.",
    taste: "Sweeter and tangier than a supermarket Cavendish.",
    question: "Is this apple banana or another local banana cultivar?",
  },
  {
    name: "Lilikoʻi",
    julySignal: "possible",
    lookFor:
      "Wrinkled fruit is often ripe rather than spoiled; shake for a juicy interior.",
    taste: "High-acid tropical perfume; excellent over yogurt or shaved ice.",
    question: "Is this Maui-grown, and should we wait for it to wrinkle?",
  },
  {
    name: "Dragon fruit",
    julySignal: "possible",
    lookFor:
      "Local red-fleshed cultivars can be dramatically richer than pale imported fruit.",
    taste:
      "Kiwi-like texture; mild to berry-sweet depending on cultivar and ripeness.",
    question: "What color is the flesh, and where was it grown?",
  },
  {
    name: "Papaya",
    julySignal: "year-round",
    lookFor:
      "Yellowing skin and a sweet smell at the stem; buy one ripe and one green-yellow.",
    taste: "Musky melon; lime transforms it.",
    question: "When will this be ready to eat?",
  },
  {
    name: "Pineapple",
    julySignal: "year-round",
    lookFor:
      "Maui Gold is grown for low acidity and sweetness; color alone is not a perfect ripeness test.",
    taste: "Dense, candy-sweet, and less sharp than commodity pineapple.",
    question: "Was this grown at Hāliʻimaile, and when was it harvested?",
  },
  {
    name: "ʻUlu · breadfruit",
    julySignal: "possible",
    lookFor:
      "Treat it as a staple food, not a hand fruit. Ask for it roasted, fried, mashed, or in a dish.",
    taste: "Potato, fresh bread, and chestnut notes when cooked.",
    question: "How was this ʻulu prepared, and what variety is it?",
  },
] satisfies FruitNote[];
