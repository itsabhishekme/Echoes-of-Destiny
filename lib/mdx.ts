import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
// Some environments may not have type declarations for rehype-autolink-headings.
// Use a require with ts-ignore to avoid TypeScript module-not-found errors.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const rehypeAutolinkHeadings = require("rehype-autolink-headings");
// Some environments may not have type declarations for rehype-slug.
// Use a require with ts-ignore to avoid TypeScript module-not-found errors.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const rehypeSlug = require("rehype-slug");
// Some environments may not have type declarations for remark-gfm.
// Use a require with ts-ignore to avoid TypeScript module-not-found errors.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const remarkGfm = require("remark-gfm");

export interface MDXFrontmatter {
  title: string;
  excerpt: string;
  description?: string;
  slug: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  featured?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}

export interface MDXPost {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
  readingTime: string;
}

const CONTENT_PATH = path.join(process.cwd(), "content");
const BLOG_PATH = path.join(CONTENT_PATH, "blog");

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function getMDXFiles(dir: string): string[] {
  ensureDirectoryExists(dir);

  return fs
    .readdirSync(dir)
    .filter(
      (file) =>
        file.endsWith(".mdx") ||
        file.endsWith(".md")
    );
}

function getFileContent(filePath: string): MDXPost {
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  const slug =
    data.slug ||
    path.basename(filePath).replace(/\.(md|mdx)$/, "");

  return {
    slug,
    frontmatter: {
      title: data.title || "",
      excerpt: data.excerpt || "",
      description: data.description || data.excerpt || "",
      slug,
      category: data.category || "Reflections",
      tags: data.tags || [],
      coverImage: data.coverImage || "",
      featured: data.featured || false,
      publishedAt: data.publishedAt || "",
      updatedAt: data.updatedAt || "",
      author: data.author || "Vihaan",
    },
    content,
    readingTime: readingTime(content).text,
  };
}

/* -------------------------------------------------------------------------- */
/*                                 Blog Posts                                 */
/* -------------------------------------------------------------------------- */

export function getAllPosts(): MDXPost[] {
  const files = getMDXFiles(BLOG_PATH);

  const posts = files.map((file) =>
    getFileContent(path.join(BLOG_PATH, file))
  );

  return posts.sort((a, b) => {
    const dateA = new Date(
      a.frontmatter.publishedAt || 0
    ).getTime();

    const dateB = new Date(
      b.frontmatter.publishedAt || 0
    ).getTime();

    return dateB - dateA;
  });
}

export function getFeaturedPosts(): MDXPost[] {
  return getAllPosts().filter(
    (post) => post.frontmatter.featured
  );
}

export function getPostBySlug(
  slug: string
): MDXPost | null {
  const posts = getAllPosts();

  return (
    posts.find((post) => post.slug === slug) || null
  );
}

export function getPostsByCategory(
  category: string
): MDXPost[] {
  return getAllPosts().filter(
    (post) =>
      post.frontmatter.category?.toLowerCase() ===
      category.toLowerCase()
  );
}

export function getRelatedPosts(
  slug: string,
  limit = 3
): MDXPost[] {
  const currentPost = getPostBySlug(slug);

  if (!currentPost) return [];

  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== slug &&
        post.frontmatter.category ===
          currentPost.frontmatter.category
    )
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();

  return Array.from(
    new Set(
      posts
        .map((post) => post.frontmatter.category)
        .filter(Boolean)
    )
  ) as string[];
}

export function getAllTags(): string[] {
  const posts = getAllPosts();

  return Array.from(
    new Set(
      posts.flatMap(
        (post) => post.frontmatter.tags || []
      )
    )
  );
}

/* -------------------------------------------------------------------------- */
/*                                MDX Compile                                 */
/* -------------------------------------------------------------------------- */

export async function compilePost(
  source: string
) {
  const result = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  return result;
}

/* -------------------------------------------------------------------------- */
/*                             Search & Filtering                             */
/* -------------------------------------------------------------------------- */

export function searchPosts(
  query: string
): MDXPost[] {
  const search = query.toLowerCase();

  return getAllPosts().filter((post) => {
    return (
      post.frontmatter.title
        .toLowerCase()
        .includes(search) ||
      post.frontmatter.excerpt
        .toLowerCase()
        .includes(search) ||
      post.content
        .toLowerCase()
        .includes(search) ||
      post.frontmatter.tags?.some((tag) =>
        tag.toLowerCase().includes(search)
      )
    );
  });
}

/* -------------------------------------------------------------------------- */
/*                               Static Params                                */
/* -------------------------------------------------------------------------- */

export function generatePostParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/*                               Content Stats                                */
/* -------------------------------------------------------------------------- */

export function getContentStats() {
  const posts = getAllPosts();

  const categories = getAllCategories();
  const tags = getAllTags();

  return {
    totalPosts: posts.length,
    totalCategories: categories.length,
    totalTags: tags.length,
    featuredPosts: posts.filter(
      (post) => post.frontmatter.featured
    ).length,
  };
}

function readingTime(content: string) {
  return {
    text: estimateReadingTime(content),
  };
}
