"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Sparkles,
  TrendingUp,
  BookOpen,
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
      "A reflection on identity, growth, memories, and the silent moments that shape who we become.",
    slug: "before-i-became-me",
    category: "Reflections",
    date: "June 1, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain suspended between memory and destiny, waiting for a place to belong.",
    slug: "the-letter-i-never-sent",
    category: "Letters",
    date: "May 24, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Echoes Across Time",
    excerpt:
      "How memories continue speaking long after the moments themselves have passed.",
    slug: "echoes-across-time",
    category: "Memories",
    date: "May 10, 2026",
    readTime: "7 min read",
  },
];

export default function FeaturedPosts({
  posts = defaultPosts,
}: FeaturedPostsProps) {
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  return (
    <section className="relative px-6 py-24">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
              <TrendingUp className="h-4 w-4 text-violet-300" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
                Featured Stories
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Stories Worth Reading
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Reflections, memories, destiny, and letters that continue to
              resonate long after the final page.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition-all hover:border-violet-400/20 hover:bg-white/10"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          {/* Featured Large Post */}
          {featuredPost && (
            <article className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 hover:border-violet-400/20">
              {/* Cover */}
              <div className="relative h-[520px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900 transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute left-8 top-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </span>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <span className="mb-4 inline-flex rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-xl">
                    {featuredPost.category}
                  </span>

                  <h3 className="max-w-3xl text-4xl font-bold text-white md:text-5xl">
                    {featuredPost.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="mb-6 flex flex-wrap gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
                  {featuredPost.excerpt}
                </p>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-medium text-violet-300 transition-all duration-300 hover:gap-3"
                >
                  Read Story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
            </article>
          )}

          {/* Side Posts */}
          <div className="space-y-8">
            {secondaryPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                {/* Mini Cover */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900 transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <BookOpen className="absolute top-5 left-5 h-5 w-5 text-violet-300" />

                    <h3 className="text-2xl font-bold text-white">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-wide text-violet-300">
                    {post.category}
                  </span>

                  <p className="mt-4 line-clamp-3 leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:gap-3"
                  >
                    Continue Reading
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="h-[2px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}