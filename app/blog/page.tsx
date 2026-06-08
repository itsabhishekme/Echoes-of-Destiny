import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Search,
  BookOpen,
  Sparkles,
  Feather,
  Heart,
  PenTool,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore reflections, letters, stories, memories, destiny, and soulful writings from Echoes of Destiny.",
};

const featuredPost = {
  slug: "before-i-became-me",
  title: "Before I Became Me",
  excerpt:
    "A journey through identity, growth, memories, and the silent moments that shape who we become.",
  category: "Reflections",
  date: "June 1, 2026",
  readTime: "8 min read",
};

const blogPosts = [
  {
    slug: "before-i-became-me",
    title: "Before I Became Me",
    excerpt:
      "The story of becoming, remembering, and discovering the person hidden beneath the years.",
    category: "Reflections",
    date: "June 1, 2026",
    readTime: "8 min read",
  },
  {
    slug: "the-letter-i-never-sent",
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain forever suspended between memory and destiny.",
    category: "Letters",
    date: "May 24, 2026",
    readTime: "6 min read",
  },
  {
    slug: "echoes-across-time",
    title: "Echoes Across Time",
    excerpt:
      "How memories continue speaking long after the moments themselves have passed.",
    category: "Memories",
    date: "May 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "whispers-of-destiny",
    title: "Whispers of Destiny",
    excerpt:
      "The invisible threads connecting people, places, dreams, and purpose.",
    category: "Destiny",
    date: "April 28, 2026",
    readTime: "9 min read",
  },
  {
    slug: "the-weight-of-silence",
    title: "The Weight of Silence",
    excerpt:
      "What silence teaches us about healing, patience, and understanding.",
    category: "Reflections",
    date: "April 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "when-memories-return",
    title: "When Memories Return",
    excerpt:
      "A reflection on nostalgia and the emotions hidden inside forgotten moments.",
    category: "Memories",
    date: "March 30, 2026",
    readTime: "7 min read",
  },
];

const categories = [
  {
    title: "Letters",
    icon: PenTool,
    description: "Words written from the heart.",
  },
  {
    title: "Reflections",
    icon: Feather,
    description: "Thoughts on life and growth.",
  },
  {
    title: "Memories",
    icon: Heart,
    description: "Moments that never truly leave.",
  },
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[200px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[180px]" />
        <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-cyan-600/10 blur-[160px]" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Literary Journal
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            Echoes
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            A collection of reflections, letters, memories, and stories that
            explore the beauty of human experience, destiny, and emotion.
          </p>

          <div className="mx-auto mt-12 max-w-xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <input
                type="text"
                placeholder="Search stories..."
                className="w-full rounded-full border border-white/10 bg-white/5 py-4 pl-14 pr-6 text-white placeholder:text-zinc-500 backdrop-blur-xl outline-none transition focus:border-violet-400/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-violet-300" />
            <h2 className="text-3xl font-bold text-white">
              Featured Story
            </h2>
          </div>

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900" />

                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <h2 className="text-center text-4xl font-bold text-white md:text-6xl">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center p-10 md:p-16">
                <span className="mb-5 w-fit rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  {featuredPost.category}
                </span>

                <h3 className="text-4xl font-bold text-white">
                  {featuredPost.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105"
                >
                  Read Story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <category.icon className="h-8 w-8 text-violet-300" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="text-zinc-400">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Latest Stories
            </h2>

            <p className="mt-4 text-zinc-400">
              Explore reflections, memories, and timeless narratives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900 transition duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <h3 className="text-center text-3xl font-bold text-white">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                    {post.category}
                  </span>

                  <p className="mt-5 leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-violet-300 transition-all duration-300 hover:gap-3"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}