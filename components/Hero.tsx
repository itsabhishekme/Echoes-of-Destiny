"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Feather,
  Heart,
  Stars,
  PenTool,
  Quote,
  ScrollText,
  MoonStar,
  WandSparkles,
  Library,
  Compass,
} from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "Letters",
    desc: "Thoughts preserved beyond time, carrying emotions through every chapter.",
    color: "violet",
  },
  {
    icon: Heart,
    title: "Memories",
    desc: "Fragments of life transformed into meaningful stories and reflections.",
    color: "fuchsia",
  },
  {
    icon: Stars,
    title: "Destiny",
    desc: "Exploring synchronicity, purpose, and the invisible threads of life.",
    color: "cyan",
  },
];

const pillars = [
  {
    icon: ScrollText,
    title: "Stories",
    text: "Immersive narratives inspired by memory, longing, and transformation.",
  },
  {
    icon: Library,
    title: "Books",
    text: "Collections of meaningful words crafted to inspire and resonate.",
  },
  {
    icon: MoonStar,
    title: "Dreams",
    text: "Reflections on symbolism, intuition, and unseen possibilities.",
  },
  {
    icon: Compass,
    title: "Journey",
    text: "A path of self-discovery guided by creativity and purpose.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[250px]" />

        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[220px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
      </div>

      {/* Floating Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Sparkles className="absolute left-[10%] top-[20%] h-6 w-6 animate-pulse text-violet-300/50" />
        <Stars className="absolute right-[12%] top-[15%] h-5 w-5 animate-pulse text-fuchsia-300/50" />
        <MoonStar className="absolute bottom-[25%] left-[15%] h-6 w-6 animate-pulse text-cyan-300/50" />
        <WandSparkles className="absolute bottom-[18%] right-[18%] h-5 w-5 animate-pulse text-violet-300/50" />

        <div className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-violet-400/40" />
        <div className="absolute right-[25%] top-[45%] h-2 w-2 rounded-full bg-fuchsia-400/40" />
        <div className="absolute bottom-[35%] left-[30%] h-2 w-2 rounded-full bg-cyan-400/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="flex min-h-screen flex-col items-center justify-center py-24 text-center">
          {/* Badge */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-2xl">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-300">
              Literary Sanctuary
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-7xl text-6xl font-black leading-none tracking-tight md:text-8xl xl:text-[10rem]">
            <span className="block text-white">Echoes</span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              of Destiny
            </span>
          </h1>

          {/* Divider */}
          <div className="my-10 h-px w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Description */}
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            A sanctuary where stories linger beyond their final pages, where
            letters remain alive in memory, and where destiny reveals itself
            through words, dreams, and meaningful connections.
          </p>

          {/* CTA */}
          <div className="mt-14 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/blog"
              className="group relative overflow-hidden rounded-full bg-white px-9 py-4 font-semibold text-black transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <BookOpen className="h-5 w-5" />
                Explore Stories
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/books"
              className="group rounded-full border border-white/10 bg-white/[0.04] px-9 py-4 font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.08]"
            >
              <span className="flex items-center gap-3">
                <PenTool className="h-5 w-5" />
                Discover Books
              </span>
            </Link>
          </div>

          {/* Small Metrics */}
          <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["50+", "Stories"],
              ["10+", "Essays"],
              ["100%", "Original"],
              ["∞", "Inspiration"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
              >
                <h3 className="text-3xl font-bold">{number}</h3>
                <p className="mt-2 text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="pb-32">
          <div className="mb-14 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Core Themes
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Stories That Stay
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold">{item.title}</h3>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="pb-32">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                About The Space
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                Every Word Holds
                <span className="block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  A Deeper Meaning
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                This is more than a collection of writings. It is a place where
                memories become narratives, emotions become poetry, and destiny
                becomes a conversation between the past, present, and future.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Through stories, reflections, books, and letters, every piece
                is crafted to leave a lasting impression long after reading.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl"
                  >
                    <Icon className="mb-5 h-8 w-8 text-violet-300" />

                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="pb-32">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl md:p-16">
            <div className="absolute right-10 top-10 opacity-10">
              <Quote className="h-32 w-32" />
            </div>

            <div className="mx-auto max-w-5xl text-center">
              <Quote className="mx-auto mb-8 h-12 w-12 text-violet-300" />

              <p className="text-3xl font-light leading-relaxed md:text-5xl">
                Some stories are written to be read.
                <br />
                Others are written to be remembered.
              </p>

              <div className="mt-10 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="mt-8 text-sm uppercase tracking-[0.35em] text-zinc-500">
                Echoes of Destiny
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="pb-32">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-12 text-center backdrop-blur-3xl">
            <h2 className="text-4xl font-bold md:text-6xl">
              Begin Your Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
              Explore stories, reflections, books, and meaningful narratives
              crafted to inspire, heal, and illuminate.
            </p>

            <Link
              href="/blog"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Start Reading
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}