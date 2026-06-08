import type { Metadata } from "next";

const SITE_NAME = "Echoes of Destiny";
const SITE_URL = "https://echoesofdestiny.com";
const DEFAULT_TITLE = "Echoes of Destiny";
const DEFAULT_DESCRIPTION =
  "A literary sanctuary of stories, reflections, destiny, memories, soul connections, and timeless letters.";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateSEO({
  title,
  description,
  image,
  url,
  keywords = [],
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Vihaan",
}: SEOProps): Metadata {
  const seoTitle = title
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;

  const seoDescription = description || DEFAULT_DESCRIPTION;

  const seoImage = image || DEFAULT_OG_IMAGE;

  const seoUrl = url
    ? `${SITE_URL}${url}`
    : SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),

    title: seoTitle,

    description: seoDescription,

    keywords: [
      "Echoes of Destiny",
      "Destiny",
      "Soulmate",
      "Letters",
      "Stories",
      "Reflections",
      "Memories",
      "Literature",
      "Writing",
      "Vihaan",
      ...keywords,
    ],

    authors: [
      {
        name: author,
      },
    ],

    creator: author,

    publisher: SITE_NAME,

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: seoUrl,
    },

    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type,

      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],

      ...(publishedTime && {
        publishedTime,
      }),

      ...(modifiedTime && {
        modifiedTime,
      }),

      authors: [author],
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,

      images: [seoImage],

      creator: "@echoesofdestiny",
    },

    category: "Literature",
  };
}

export function generateArticleSEO({
  title,
  description,
  slug,
  image,
  publishedTime,
  modifiedTime,
  keywords = [],
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}): Metadata {
  return generateSEO({
    title,
    description,
    image,
    url: `/blog/${slug}`,
    type: "article",
    publishedTime,
    modifiedTime,
    keywords,
  });
}

export function generateBookSEO({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
}): Metadata {
  return generateSEO({
    title,
    description,
    image,
    url: `/books/${slug}`,
    keywords: [
      "Book",
      "Author",
      "Literature",
      "Publishing",
    ],
  });
}

export function generatePageSEO(
  title: string,
  description: string,
  path: string
): Metadata {
  return generateSEO({
    title,
    description,
    url: path,
  });
}

export function generateStructuredData({
  title,
  description,
  url,
  image,
  type = "WebPage",
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    image: image || DEFAULT_OG_IMAGE,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateArticleStructuredData({
  title,
  description,
  slug,
  image,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || DEFAULT_OG_IMAGE,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: "Vihaan",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };
}

export function generateBookStructuredData({
  title,
  description,
  image,
  isbn,
}: {
  title: string;
  description: string;
  image?: string;
  isbn?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    description,
    image: image || DEFAULT_OG_IMAGE,
    author: {
      "@type": "Person",
      name: "Vihaan",
    },
    ...(isbn && {
      isbn,
    }),
  };
}

export const seoConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION,
  defaultImage: DEFAULT_OG_IMAGE,
};