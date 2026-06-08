export const SITE_CONFIG = {
  name: "Echoes of Destiny",
  shortName: "Echoes",
  title: "Echoes of Destiny",
  description:
    "A literary sanctuary where memories linger, destiny whispers, soul connections unfold, and stories continue to echo through time.",
  url: "https://echoesofdestiny.com",
  ogImage: "/images/og-image.jpg",
  author: {
    name: "Vihaan",
    email: "hello@echoesofdestiny.com",
  },
  keywords: [
    "Echoes of Destiny",
    "Destiny",
    "Soulmate",
    "Memories",
    "Letters",
    "Stories",
    "Reflections",
    "Writing",
    "Literature",
    "Spiritual Journey",
    "Love",
    "Dreams",
    "Personal Growth",
  ],
};

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Books",
    href: "/books",
  },
  {
    title: "Destiny",
    href: "/destiny",
  },
  {
    title: "Soulmate",
    href: "/soulmate",
  },
  {
    title: "Echoes",
    href: "/echoes",
  },
  {
    title: "Newsletter",
    href: "/newsletter",
  },
  {
    title: "Contact",
    href: "/contact",
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    {
      title: "Reflections",
      href: "/blog",
    },
    {
      title: "Letters",
      href: "/blog",
    },
    {
      title: "Stories",
      href: "/blog",
    },
    {
      title: "Memories",
      href: "/echoes",
    },
    {
      title: "Destiny",
      href: "/destiny",
    },
    {
      title: "Soulmate",
      href: "/soulmate",
    },
  ],

  resources: [
    {
      title: "Books",
      href: "/books",
    },
    {
      title: "Newsletter",
      href: "/newsletter",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export const ARTICLE_CATEGORIES = [
  "Reflections",
  "Letters",
  "Memories",
  "Destiny",
  "Soulmate",
  "Stories",
  "Poetry",
  "Life",
  "Spiritual",
] as const;

export const BOOK_CATEGORIES = [
  "Destiny",
  "Soulmate",
  "Letters",
  "Reflections",
  "Memoir",
  "Poetry",
  "Spiritual",
  "Fiction",
  "Non-Fiction",
] as const;

export const FEATURED_QUOTES = [
  "Some stories are written to be read. Others are written to be remembered.",
  "Every memory leaves an echo. Every echo carries a story.",
  "Destiny rarely announces itself. It whispers through moments.",
  "The most meaningful journeys begin long before we recognize them.",
  "Perhaps soulmates are not found. Perhaps they are remembered.",
  "What is meant for you often arrives through unexpected paths.",
];

export const FEATURED_BOOKS = [
  {
    id: "my-spouse-before-i-met-her",
    slug: "my-spouse-before-i-met-her",
    title: "My Spouse Before I Met Her",
    subtitle: "Karmic Clues, Dreams, and the Echoes of Her Soul",
    category: "Soulmate",
    featured: true,
    year: 2026,
    description:
      "A deeply personal literary journey exploring destiny, dreams, intuition, soul recognition, and the mysterious connection between two people before they meet.",
    cover: "/books/my-spouse-before-i-met-her.jpg",
  },
];

export const FEATURED_ARTICLES = [
  {
    slug: "before-i-became-me",
    title: "Before I Became Me",
    category: "Reflections",
    readTime: "8 min read",
    excerpt:
      "A reflection on identity, growth, memories, and the silent moments that shape who we become.",
  },
  {
    slug: "the-letter-i-never-sent",
    title: "The Letter I Never Sent",
    category: "Letters",
    readTime: "6 min read",
    excerpt:
      "Some words remain suspended between memory and destiny, waiting for a place to belong.",
  },
  {
    slug: "echoes-across-time",
    title: "Echoes Across Time",
    category: "Memories",
    readTime: "7 min read",
    excerpt:
      "How memories continue speaking long after the moments themselves have passed.",
  },
];

export const NEWSLETTER_BENEFITS = [
  "Exclusive reflections and essays",
  "New stories and article updates",
  "Book launch announcements",
  "Writing insights and inspiration",
  "Subscriber-only content",
  "Monthly literary highlights",
];

export const HERO_STATS = [
  {
    title: "Stories",
    description:
      "Narratives exploring memory, destiny, and transformation.",
  },
  {
    title: "Letters",
    description:
      "Words written from the heart and preserved through time.",
  },
  {
    title: "Reflections",
    description:
      "Thoughtful explorations of life, purpose, and meaning.",
  },
  {
    title: "Echoes",
    description:
      "Moments that continue resonating long after they pass.",
  },
];

export const SOCIAL_LINKS = [];

export const THEME_COLORS = {
  primary: "violet",
  secondary: "fuchsia",
  accent: "cyan",
};

export const SEO_DEFAULTS = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  image: SITE_CONFIG.ogImage,
  keywords: SITE_CONFIG.keywords,
};

export const READING_TIME_WPM = 225;

export const PAGINATION = {
  POSTS_PER_PAGE: 9,
  BOOKS_PER_PAGE: 6,
};

export const ANIMATION = {
  duration: 0.5,
  delay: 0.1,
};

export const COPYRIGHT = `© ${new Date().getFullYear()} Echoes of Destiny. All rights reserved.`;