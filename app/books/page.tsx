import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Star,
  Heart,
  Sparkles,
  Feather,
  Quote,
  ShoppingBag,
  Bookmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore the books of Echoes of Destiny — heartfelt reflections, letters, destiny, memories, and soulful storytelling.",
};

const featuredBook = {
  title: "My Spouse Before I Met Her",
  subtitle: "Karmic Clues, Dreams, and the Echoes of Her Soul",
  author: "Vihaan",
  year: "2026",
  description:
    "A deeply personal literary journey written before meeting the woman it was meant for. Through dreams, intuition, destiny, and heartfelt reflections, this book explores the mysterious connection between souls before they meet.",
};

const books = [
  {
    title: "My Spouse Before I Met Her",
    subtitle: "Karmic Clues, Dreams, and the Echoes of Her Soul",
    year: "2026",
    category: "Memoir • Destiny • Spiritual Reflection",
    description:
      "A collection of letters, reflections, and soul-centered thoughts written for a future spouse before destiny brought two paths together.",
  },
  {
    title: "Letters Never Lost",
    subtitle: "Words That Refused To Fade",
    year: "Coming Soon",
    category: "Letters • Emotions",
    description:
      "A journey through unsent messages, unfinished conversations, and the emotions that continue echoing through time.",
  },
  {
    title: "Echoes Across Time",
    subtitle: "Stories Between Memory and Fate",
    year: "Coming Soon",
    category: "Stories • Reflections",
    description:
      "An exploration of memory, destiny, and the invisible moments that shape every human life.",
  },
];

const themes = [
  {
    icon: Heart,
    title: "Love Beyond Time",
    description:
      "Exploring emotional connections that seem destined long before they appear in reality.",
  },
  {
    icon: Feather,
    title: "Soulful Reflections",
    description:
      "Thoughtful writing designed to resonate with the quiet corners of the heart.",
  },
  {
    icon: Sparkles,
    title: "Destiny & Meaning",
    description:
      "Stories and reflections centered on purpose, synchronicity, and life's hidden patterns.",
  },
];

export default function BooksPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[220px]" />
        <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <BookOpen className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Literary Collection
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            Books
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              & Publications
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            A collection of heartfelt writing, reflections, memories, destiny,
            and stories created to inspire connection and contemplation.
          </p>
        </div>
      </section>

      {/* Featured Book */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="grid lg:grid-cols-2">
              {/* Book Cover */}
              <div className="relative flex min-h-[700px] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900" />

                <div className="relative z-10 w-[320px] rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-10 shadow-2xl">
                  <div className="mb-10 flex justify-center">
                    <BookOpen className="h-14 w-14 text-violet-300" />
                  </div>

                  <h2 className="text-center text-3xl font-bold text-white">
                    My Spouse
                  </h2>

                  <h3 className="mt-2 text-center text-3xl font-bold text-white">
                    Before I Met Her
                  </h3>

                  <div className="my-8 border-t border-white/10" />

                  <p className="text-center text-sm uppercase tracking-[0.2em] text-zinc-400">
                    Karmic Clues, Dreams,
                  </p>

                  <p className="text-center text-sm uppercase tracking-[0.2em] text-zinc-400">
                    and the Echoes of Her Soul
                  </p>

                  <div className="mt-12 text-center text-zinc-500">
                    — Vihaan —
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10 md:p-16">
                <div className="mb-4 inline-flex w-fit rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Featured Publication
                </div>

                <h2 className="text-5xl font-bold text-white">
                  {featuredBook.title}
                </h2>

                <h3 className="mt-3 text-xl text-zinc-400">
                  {featuredBook.subtitle}
                </h3>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-zinc-300">
                    Author: {featuredBook.author}
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-zinc-300">
                    Published: {featuredBook.year}
                  </div>
                </div>

                <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                  {featuredBook.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:scale-105">
                    <ShoppingBag className="h-5 w-5" />
                    Buy Book
                  </button>

                  <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10">
                    <Bookmark className="h-5 w-5" />
                    Read Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Themes Behind The Books
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <theme.icon className="h-8 w-8 text-violet-300" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {theme.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Complete Collection
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {books.map((book, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                  <BookOpen className="h-8 w-8 text-violet-300" />
                </div>

                <div className="mb-4 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
                  {book.year}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {book.title}
                </h3>

                <p className="mt-2 text-zinc-500">
                  {book.subtitle}
                </p>

                <p className="mt-4 text-sm uppercase tracking-wide text-violet-300">
                  {book.category}
                </p>

                <p className="mt-6 leading-relaxed text-zinc-400">
                  {book.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-violet-300 transition-all hover:gap-3">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <Quote className="mx-auto mb-8 h-12 w-12 text-violet-300" />

            <blockquote className="text-3xl leading-relaxed text-white md:text-5xl">
              “Some books are written for readers.
              <br />
              Others are written for destiny.”
            </blockquote>

            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-2 text-zinc-500">
                <Star className="h-4 w-4" />
                Echoes of Destiny
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 text-center backdrop-blur-3xl md:p-20">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Continue The Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Explore reflections, stories, letters, and books created to leave
              a lasting echo within the heart.
            </p>

            <Link
              href="/blog"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:scale-105"
            >
              Explore Blog
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}