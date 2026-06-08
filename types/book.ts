export interface Book {
  id: string;
  slug: string;

  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;

  author: string;

  coverImage?: string;
  gallery?: string[];

  category:
    | "Memoir"
    | "Destiny"
    | "Soulmate"
    | "Letters"
    | "Reflections"
    | "Poetry"
    | "Spiritual"
    | "Fiction"
    | "Non-Fiction";

  tags?: string[];

  publishedDate?: string;
  publicationYear?: number;

  isbn?: string;
  language?: string;
  pages?: number;
  format?: ("Paperback" | "Hardcover" | "eBook" | "Audiobook")[];

  featured?: boolean;
  bestseller?: boolean;
  comingSoon?: boolean;

  rating?: number;
  reviewsCount?: number;

  purchaseUrl?: string;
  previewUrl?: string;

  quote?: string;

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };

  createdAt?: string;
  updatedAt?: string;
}

export interface BookReview {
  id: string;
  bookId: string;

  name: string;
  title?: string;
  rating: number;
  review: string;

  createdAt: string;
}

export interface BookFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface BookChapter {
  number: number;
  title: string;
  description?: string;
}

export interface BookDetail extends Book {
  features?: BookFeature[];
  chapters?: BookChapter[];
  reviews?: BookReview[];
}

export type BookCategory =
  | "Memoir"
  | "Destiny"
  | "Soulmate"
  | "Letters"
  | "Reflections"
  | "Poetry"
  | "Spiritual"
  | "Fiction"
  | "Non-Fiction";

export type BookFormat =
  | "Paperback"
  | "Hardcover"
  | "eBook"
  | "Audiobook";

export interface BooksResponse {
  books: Book[];
  total: number;
}

export interface FeaturedBooksResponse {
  featured: Book[];
}

export interface BookFilters {
  category?: BookCategory;
  featured?: boolean;
  bestseller?: boolean;
  comingSoon?: boolean;
  search?: string;
}

export interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export interface BookHeroProps {
  book: Book;
}

export interface BookGridProps {
  books: Book[];
}

export interface BookSectionProps {
  title: string;
  subtitle?: string;
  books: Book[];
}

export const DEFAULT_BOOK: Book = {
  id: "",
  slug: "",
  title: "",
  description: "",
  author: "Vihaan",
  category: "Reflections",
  featured: false,
  bestseller: false,
  comingSoon: false,
  rating: 0,
  reviewsCount: 0,
};

export const FEATURED_BOOK: Book = {
  id: "my-spouse-before-i-met-her",
  slug: "my-spouse-before-i-met-her",
  title: "My Spouse Before I Met Her",
  subtitle: "Karmic Clues, Dreams, and the Echoes of Her Soul",
  description:
    "A deeply personal literary journey exploring destiny, intuition, dreams, soul recognition, and the mysterious connection between two people before they meet.",
  author: "Vihaan",
  category: "Soulmate",
  publicationYear: 2026,
  featured: true,
  rating: 5,
  reviewsCount: 0,
  tags: [
    "Soulmate",
    "Destiny",
    "Dreams",
    "Spiritual Journey",
    "Love",
    "Karmic Connection",
  ],
  quote:
    "Some books are written for readers. Others are written for destiny.",
};