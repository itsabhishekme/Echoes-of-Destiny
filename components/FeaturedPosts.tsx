"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Sparkles,
  TrendingUp,
  BookOpen,
  Star,
  Eye,
  Feather,
  Heart,
  ScrollText,
  Bookmark,
  Quote,
  ChevronRight,
  Crown,
  PenTool,
  Library,
  Gem,
  LucideIcon,
} from "lucide-react";

interface Post {
  id: number | string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
}

interface FeaturedPostsProps {
  posts?: Post[];
}

const defaultPosts: Post[] = [
  {
    id: 1,
    title: "Before I Became Me",
    excerpt:
      "A reflection on identity, growth, memories, and the silent moments that shape who we become. Every version of ourselves leaves behind traces that continue guiding the journey ahead.",
    slug: "before-i-became-me",
    category: "Reflections",
    date: "June 1, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain suspended between memory and destiny, waiting for a place to belong and a heart willing to receive them.",
    slug: "the-letter-i-never-sent",
    category: "Letters",
    date: "May 24, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Echoes Across Time",
    excerpt:
      "How memories continue speaking long after the moments themselves have passed, shaping who we become.",
    slug: "echoes-across-time",
    category: "Memories",
    date: "May 10, 2026",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "The Shape Of Destiny",
    excerpt:
      "Exploring meaningful coincidences, synchronicities, and the invisible paths connecting our lives.",
    slug: "the-shape-of-destiny",
    category: "Destiny",
    date: "April 28, 2026",
    readTime: "9 min read",
  },
];

const categoryIcons: Record<string, LucideIcon> = {
  Reflections: Feather,
  Letters: ScrollText,
  Memories: Heart,
  Destiny: Sparkles,
};

export default function FeaturedPosts({
  posts = defaultPosts,
}: FeaturedPostsProps) {
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[250px]" />

        <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

        <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-600/10 blur-[180px]" />
      </div>

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="mx-auto mb-20 max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3">
              <TrendingUp className="h-4 w-4 text-violet-300" />

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-violet-300">
                Featured Stories
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Stories Worth
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Reading
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Explore reflections, memories, destiny, letters,
              and stories that continue resonating long after
              the final page has been turned.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-2xl transition-all duration-300 hover:border-violet-400/20 hover:bg-white/10"
          >
            View All Articles

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ===================================================== */}
      {/* CONTENT GRID */}
      {/* ===================================================== */}

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.5fr_0.9fr]">
          {/* ===================================================== */}
          {/* FEATURED POST */}
          {/* ===================================================== */}

          {featuredPost && (
            <article className="group relative overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 hover:border-violet-400/20">
              {/* Hero Cover */}

              <div className="relative h-[620px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-fuchsia-950 transition-transform duration-1000 group-hover:scale-105" />

                <div className="absolute left-20 top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-[120px]" />

                <div className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[120px]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Badge */}

                <div className="absolute left-8 top-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3 backdrop-blur-xl">
                    <Crown className="h-4 w-4 text-violet-300" />

                    <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
                      Featured Story
                    </span>
                  </div>
                </div>

                {/* Decorative Icon */}

                <div className="absolute right-8 top-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl">
                    <BookOpen className="h-8 w-8 text-violet-300" />
                  </div>
                </div>

                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                    <Sparkles className="h-3.5 w-3.5 text-violet-300" />

                    <span className="text-xs uppercase tracking-[0.25em] text-zinc-300">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h3 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                    {featuredPost.title}
                  </h3>
                </div>
              </div>

              {/* Content Area */}

              <div className="p-10 md:p-14">
                <div className="mb-8 flex flex-wrap gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>

                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Featured Reading
                  </div>
                </div>

                <p className="max-w-4xl text-xl leading-relaxed text-zinc-400">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
                  >
                    Read Story

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10">
                    <Bookmark className="h-4 w-4" />
                    Save For Later
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-1000 group-hover:w-full" />
            </article>
          )}

          {/* ===================================================== */}
          {/* SIDEBAR POSTS */}
          {/* ===================================================== */}

          <div className="space-y-8">
            {secondaryPosts.map((post) => {
              const Icon =
                categoryIcons[post.category] ?? BookOpen;

              return (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
                >
                  {/* Cover */}

                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-fuchsia-950 transition-transform duration-1000 group-hover:scale-110" />

                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-xl">
                      <Icon className="h-6 w-6 text-violet-300" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="mb-4 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-xl">
                        {post.category}
                      </span>

                      <h3 className="text-2xl font-bold text-white">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-8">
                    <p className="line-clamp-4 leading-relaxed text-zinc-400">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4 text-xs text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-7 inline-flex items-center gap-2 font-medium text-violet-300 transition-all duration-300 hover:gap-3"
                    >
                      Continue Reading

                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="h-[3px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* QUOTE SECTION */}
      {/* ===================================================== */}

      <div className="mx-auto mt-32 max-w-6xl">
        <div className="rounded-[48px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
          <Quote className="mx-auto mb-8 h-12 w-12 text-violet-300" />

          <blockquote className="text-3xl font-light leading-relaxed text-white md:text-5xl">
            “Some stories are read.
            <br />
            Others are remembered.”
          </blockquote>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-400">
              <Gem className="h-4 w-4 text-violet-300" />
              Echoes Of Destiny
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <div className="mx-auto mt-20 max-w-7xl">
        <div className="overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 text-center backdrop-blur-3xl md:p-20">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
              <Library className="h-10 w-10 text-violet-300" />
            </div>
          </div>

          <h3 className="text-4xl font-bold text-white md:text-6xl">
            Explore Every Story
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Discover reflections, letters, destiny,
            memories, and stories created to inspire
            thought, connection, and imagination.
          </p>

          <Link
            href="/blog"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Explore The Blog

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}