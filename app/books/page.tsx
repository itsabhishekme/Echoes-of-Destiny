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
  ScrollText,
  MoonStar,
  Library,
  PenTool,
  Gem,
  Crown,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore the literary collection of Vihaan — reflections, destiny, soul connections, memories, letters, and stories written from the heart.",
};

const featuredBook = {
  title: "My Spouse Before I Met Her",
  subtitle: "Karmic Clues, Dreams, and the Echoes of Her Soul",
  author: "Vihaan",
  year: "2026",
  description:
    "A deeply personal literary journey written before meeting the woman it was meant for. Through dreams, intuition, destiny, soul recognition, and heartfelt reflections, this book explores the mysterious connection between two souls before they meet.",
};

const books = [
  {
    title: "My Spouse Before I Met Her",
    subtitle: "Karmic Clues, Dreams, and the Echoes of Her Soul",
    year: "2026",
    category: "Soulmate • Destiny • Reflection",
    description:
      "A collection of reflections, dreams, letters, and intuitive insights written for a future spouse before destiny united two paths.",
  },
  {
    title: "Letters Never Sent",
    subtitle: "Words That Refused To Fade",
    year: "Coming Soon",
    category: "Letters • Emotions • Memory",
    description:
      "A literary collection exploring unfinished conversations, unsent letters, remembered emotions, and echoes left behind by time.",
  },
  {
    title: "Before I Became Me",
    subtitle: "The Journey Toward Becoming",
    year: "Coming Soon",
    category: "Memoir • Growth • Identity",
    description:
      "A deeply reflective memoir exploring identity, personal transformation, dreams, challenges, and self-discovery.",
  },
  {
    title: "Echoes Across Time",
    subtitle: "Stories Between Memory and Fate",
    year: "Coming Soon",
    category: "Stories • Reflection • Destiny",
    description:
      "An exploration of memory, nostalgia, fate, and the invisible moments that quietly shape every human life.",
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

const stats = [
  {
    icon: Library,
    value: "4+",
    label: "Books & Projects",
  },
  {
    icon: ScrollText,
    value: "100+",
    label: "Reflections",
  },
  {
    icon: PenTool,
    value: "∞",
    label: "Stories To Tell",
  },
];

export default function BooksPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[250px]" />

        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[200px]" />

        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative px-6 pt-32 pb-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <BookOpen className="h-4 w-4 text-violet-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Literary Collection
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">Books</span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              & Publications
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            A collection of stories, reflections, letters, dreams,
            memories, and destiny woven into books created to inspire,
            heal, and leave a lasting echo within the soul.
          </p>

          <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <stat.icon className="mx-auto mb-4 h-8 w-8 text-violet-300" />

                <div className="text-4xl font-bold text-white">
                  {stat.value}
                </div>

                <div className="mt-2 text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FEATURED BOOK */}
      {/* ====================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex min-h-[760px] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-fuchsia-950" />

                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

                <div className="relative z-10 w-[360px] rounded-[34px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-12 shadow-2xl">
                  <div className="mb-10 flex justify-center">
                    <MoonStar className="h-16 w-16 text-violet-300" />
                  </div>

                  <h2 className="text-center text-4xl font-bold text-white">
                    My Spouse
                  </h2>

                  <h2 className="mt-2 text-center text-4xl font-bold text-white">
                    Before I Met Her
                  </h2>

                  <div className="my-10 border-t border-white/10" />

                  <p className="text-center text-sm uppercase tracking-[0.25em] text-zinc-400">
                    Karmic Clues
                  </p>

                  <p className="mt-2 text-center text-sm uppercase tracking-[0.25em] text-zinc-400">
                    Dreams & Echoes
                  </p>

                  <p className="mt-2 text-center text-sm uppercase tracking-[0.25em] text-zinc-400">
                    Of Her Soul
                  </p>

                  <div className="mt-14 text-center text-zinc-500">
                    — Vihaan —
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-10 md:p-16 xl:p-20">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
                  <Crown className="h-4 w-4" />
                  Featured Publication
                </div>

                <h2 className="text-5xl font-bold leading-tight text-white xl:text-6xl">
                  {featuredBook.title}
                </h2>

                <p className="mt-5 text-xl text-zinc-400">
                  {featuredBook.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300">
                    Author: {featuredBook.author}
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300">
                    Published: {featuredBook.year}
                  </div>
                </div>

                <p className="mt-10 text-lg leading-relaxed text-zinc-400">
                  {featuredBook.description}
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105">
                    <ShoppingBag className="h-5 w-5" />
                    Buy Book
                  </button>

                  <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10">
                    <Bookmark className="h-5 w-5" />
                    Read Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEMES */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Themes Behind The Books
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/20"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <theme.icon className="h-10 w-10 text-violet-300" />
                </div>

                <h3 className="mb-4 text-3xl font-bold text-white">
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

      {/* BOOKS GRID */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Complete Collection
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/20"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                  <Gem className="h-8 w-8 text-violet-300" />
                </div>

                <div className="mb-4 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
                  {book.year}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {book.title}
                </h3>

                <p className="mt-3 text-zinc-500">
                  {book.subtitle}
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-violet-300">
                  {book.category}
                </p>

                <p className="mt-6 leading-relaxed text-zinc-400">
                  {book.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-violet-300 transition-all hover:gap-4">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <Quote className="mx-auto mb-10 h-14 w-14 text-violet-300" />

            <blockquote className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              “Some books are written for readers.
              <br />
              Others are written for destiny.”
            </blockquote>

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2 text-zinc-500">
                <Star className="h-4 w-4" />
                Echoes of Destiny
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-14 text-center backdrop-blur-3xl md:p-24">
            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Continue The Journey
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
              Explore reflections, stories, letters, books, memories,
              and soulful writing crafted to leave a lasting echo.
            </p>

            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
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