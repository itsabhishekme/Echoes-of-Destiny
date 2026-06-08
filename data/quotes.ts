export interface Quote {
  id: string;
  quote: string;
  author: string;
  category:
    | "Destiny"
    | "Soulmate"
    | "Memories"
    | "Letters"
    | "Reflections"
    | "Dreams"
    | "Love"
    | "Life"
    | "Spiritual";
  featured?: boolean;
}

export const quotes: Quote[] = [
  {
    id: "q1",
    quote:
      "Some stories are written to be read. Others are written to be remembered.",
    author: "Vihaan",
    category: "Reflections",
    featured: true,
  },
  {
    id: "q2",
    quote:
      "Every memory leaves an echo. Every echo carries a story waiting to be heard.",
    author: "Vihaan",
    category: "Memories",
    featured: true,
  },
  {
    id: "q3",
    quote:
      "Destiny rarely announces itself. It whispers through moments that seem ordinary until we look back.",
    author: "Vihaan",
    category: "Destiny",
    featured: true,
  },
  {
    id: "q4",
    quote:
      "Perhaps soulmates are not found. Perhaps they are remembered.",
    author: "Vihaan",
    category: "Soulmate",
    featured: true,
  },
  {
    id: "q5",
    quote:
      "The most meaningful journeys begin long before we recognize them.",
    author: "Vihaan",
    category: "Life",
  },
  {
    id: "q6",
    quote:
      "Some letters are never sent, yet they still reach the hearts they were written for.",
    author: "Vihaan",
    category: "Letters",
  },
  {
    id: "q7",
    quote:
      "A dream is sometimes a memory from a future that has not yet arrived.",
    author: "Vihaan",
    category: "Dreams",
  },
  {
    id: "q8",
    quote:
      "Love is not always loud. Sometimes it exists quietly within patience, hope, and faith.",
    author: "Vihaan",
    category: "Love",
  },
  {
    id: "q9",
    quote:
      "What is meant for you often travels through unexpected roads before reaching your life.",
    author: "Vihaan",
    category: "Destiny",
  },
  {
    id: "q10",
    quote:
      "The heart often recognizes a connection before the mind understands it.",
    author: "Vihaan",
    category: "Soulmate",
  },
  {
    id: "q11",
    quote:
      "Every ending leaves behind an echo, and every echo becomes part of who we are.",
    author: "Vihaan",
    category: "Memories",
  },
  {
    id: "q12",
    quote:
      "Growth happens quietly, hidden inside ordinary days that later become extraordinary memories.",
    author: "Vihaan",
    category: "Life",
  },
  {
    id: "q13",
    quote:
      "Sometimes the person we are waiting for is also waiting for us somewhere beyond the horizon.",
    author: "Vihaan",
    category: "Soulmate",
  },
  {
    id: "q14",
    quote:
      "Destiny is not merely arrival. It is the transformation that happens while we travel.",
    author: "Vihaan",
    category: "Destiny",
  },
  {
    id: "q15",
    quote:
      "The most powerful words are often the ones we never speak aloud.",
    author: "Vihaan",
    category: "Letters",
  },
  {
    id: "q16",
    quote:
      "A memory does not fade when it is woven into the soul.",
    author: "Vihaan",
    category: "Memories",
  },
  {
    id: "q17",
    quote:
      "Dreams are bridges connecting imagination, intuition, and possibility.",
    author: "Vihaan",
    category: "Dreams",
  },
  {
    id: "q18",
    quote:
      "Love teaches us that two lives can remain distinct while still sharing a common journey.",
    author: "Vihaan",
    category: "Love",
  },
  {
    id: "q19",
    quote:
      "The universe often answers quietly, through signs that only the heart notices.",
    author: "Vihaan",
    category: "Spiritual",
  },
  {
    id: "q20",
    quote:
      "Some people enter our lives for a season, yet their echo lasts forever.",
    author: "Vihaan",
    category: "Reflections",
  },
  {
    id: "q21",
    quote:
      "Meaningful coincidences are often destiny introducing itself.",
    author: "Vihaan",
    category: "Destiny",
  },
  {
    id: "q22",
    quote:
      "Every soul carries a story written in experiences, hopes, and hidden chapters.",
    author: "Vihaan",
    category: "Spiritual",
  },
  {
    id: "q23",
    quote:
      "The future is not something we discover. It is something we slowly become.",
    author: "Vihaan",
    category: "Life",
  },
  {
    id: "q24",
    quote:
      "The echoes of yesterday often guide the choices of tomorrow.",
    author: "Vihaan",
    category: "Reflections",
  },
  {
    id: "q25",
    quote:
      "Sometimes a single encounter changes the entire direction of a life.",
    author: "Vihaan",
    category: "Soulmate",
  },
];

export const featuredQuotes = quotes.filter(
  (quote) => quote.featured
);

export const destinyQuotes = quotes.filter(
  (quote) => quote.category === "Destiny"
);

export const soulmateQuotes = quotes.filter(
  (quote) => quote.category === "Soulmate"
);

export const memoryQuotes = quotes.filter(
  (quote) => quote.category === "Memories"
);

export const reflectionQuotes = quotes.filter(
  (quote) => quote.category === "Reflections"
);

export const loveQuotes = quotes.filter(
  (quote) => quote.category === "Love"
);

export const dreamQuotes = quotes.filter(
  (quote) => quote.category === "Dreams"
);

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function getQuotesByCategory(
  category: Quote["category"]
): Quote[] {
  return quotes.filter((quote) => quote.category === category);
}