export interface Article {
  id: string;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  author: string;

  category:
    | "Reflections"
    | "Letters"
    | "Memories"
    | "Destiny"
    | "Soulmate"
    | "Stories"
    | "Poetry"
    | "Life"
    | "Spiritual";

  tags?: string[];

  coverImage?: string;
  featuredImage?: string;

  publishedDate: string;
  updatedDate?: string;

  readTime: string;

  featured?: boolean;
  trending?: boolean;

  views?: number;
  likes?: number;

  quote?: string;

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };

  createdAt?: string;
}

export interface ArticleAuthor {
  name: string;
  bio?: string;
  avatar?: string;
  website?: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleComment {
  id: string;
  articleId: string;

  name: string;
  email?: string;

  comment: string;
  createdAt: string;
}

export interface RelatedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
}

export interface ArticleDetail extends Article {
  sections?: ArticleSection[];
  relatedArticles?: RelatedArticle[];
  comments?: ArticleComment[];
}

export type ArticleCategory =
  | "Reflections"
  | "Letters"
  | "Memories"
  | "Destiny"
  | "Soulmate"
  | "Stories"
  | "Poetry"
  | "Life"
  | "Spiritual";

export interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export interface FeaturedArticlesProps {
  articles: Article[];
}

export interface ArticleFilters {
  category?: ArticleCategory;
  featured?: boolean;
  trending?: boolean;
  search?: string;
  tag?: string;
}

export interface ArticlesResponse {
  articles: Article[];
  total: number;
}

export const DEFAULT_ARTICLE: Article = {
  id: "",
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  author: "Vihaan",
  category: "Reflections",
  publishedDate: "",
  readTime: "5 min read",
  featured: false,
  trending: false,
};

export const FEATURED_ARTICLES: Article[] = [
  {
    id: "1",
    slug: "before-i-became-me",
    title: "Before I Became Me",
    excerpt:
      "A reflection on identity, growth, memories, and the silent moments that shape who we become.",
    content: "",
    author: "Vihaan",
    category: "Reflections",
    publishedDate: "2026-06-01",
    readTime: "8 min read",
    featured: true,
    trending: true,
    tags: ["Growth", "Life", "Identity"],
    quote:
      "The person we become is built from thousands of invisible moments.",
  },
  {
    id: "2",
    slug: "the-letter-i-never-sent",
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain suspended between memory and destiny, waiting for a place to belong.",
    content: "",
    author: "Vihaan",
    category: "Letters",
    publishedDate: "2026-05-24",
    readTime: "6 min read",
    featured: true,
    tags: ["Letters", "Emotions", "Memories"],
  },
  {
    id: "3",
    slug: "echoes-across-time",
    title: "Echoes Across Time",
    excerpt:
      "How memories continue speaking long after the moments themselves have passed.",
    content: "",
    author: "Vihaan",
    category: "Memories",
    publishedDate: "2026-05-10",
    readTime: "7 min read",
    featured: true,
    tags: ["Memories", "Reflection", "Time"],
  },
];

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Reflections",
  "Letters",
  "Memories",
  "Destiny",
  "Soulmate",
  "Stories",
  "Poetry",
  "Life",
  "Spiritual",
];