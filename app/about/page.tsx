import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Feather,
  Heart,
  BookOpen,
  Sparkles,
  PenTool,
  Mail,
  Quote,
  ScrollText,
  Stars,
  PenSquare,
  BookMarked,
  Compass,
  Crown,
  CheckCircle2,
  Orbit,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Echoes of Destiny",
  description:
    "Discover the story behind Echoes of Destiny — a literary sanctuary of memories, reflections, destiny, letters, and timeless storytelling.",
};

const values = [
  {
    icon: Heart,
    title: "Human Emotions",
    description:
      "Every meaningful story begins with emotion. Love, longing, nostalgia, hope, wonder, and remembrance all become living experiences through words.",
  },
  {
    icon: Feather,
    title: "Soulful Writing",
    description:
      "Writing that seeks more than attention. Every sentence is crafted to resonate deeply and remain with the reader long after the final page.",
  },
  {
    icon: Sparkles,
    title: "Destiny & Meaning",
    description:
      "Exploring unseen connections, synchronicities, dreams, memories, and the invisible threads that guide our journeys.",
  },
];

const journey = [
  {
    title: "A Thought",
    description:
      "Every story begins as a quiet idea waiting patiently to become something meaningful.",
  },
  {
    title: "A Letter",
    description:
      "Thoughts transform into words. Words become letters carrying emotions across time and distance.",
  },
  {
    title: "An Echo",
    description:
      "The most memorable stories stay with us, continuing to speak long after the final sentence.",
  },
  {
    title: "A Destiny",
    description:
      "Every meaningful story leaves a mark and becomes part of a larger journey.",
  },
];

const pillars = [
  {
    icon: PenSquare,
    title: "Reflections",
  },
  {
    icon: BookMarked,
    title: "Stories",
  },
  {
    icon: Orbit,
    title: "Destiny",
  },
  {
    icon: Compass,
    title: "Purpose",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[220px]" />

        <div className="absolute left-0 top-[25%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

        <div className="absolute right-0 top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[220px]" />
      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative px-6 pb-32 pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl">
              <BookOpen className="h-4 w-4 text-violet-300" />

              <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
                About Echoes Of Destiny
              </span>
            </div>

            <h1 className="mx-auto max-w-6xl text-5xl font-bold leading-tight text-white md:text-7xl xl:text-8xl">
              Where Stories Become
              <span className="mt-3 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Timeless Echoes
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Echoes of Destiny is a literary sanctuary devoted to memories,
              reflections, destiny, emotions, and the unseen connections that
              shape our lives. It is a place where words are written not merely
              to be read, but to be remembered.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
              >
                Explore Stories

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                View Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURED AUTHOR SECTION */}
      {/* ================================================= */}

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                <Stars className="h-4 w-4" />
                Literary Vision
              </div>

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                More Than A Website
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>
                  Echoes of Destiny was created to preserve emotions, ideas,
                  memories, and reflections that often disappear in the noise of
                  everyday life.
                </p>

                <p>
                  It is inspired by the belief that every individual carries
                  stories worth remembering and experiences worth sharing.
                </p>

                <p>
                  Through essays, letters, reflections, books, and personal
                  narratives, this space seeks to inspire thought, connection,
                  and self-discovery.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {pillars.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                      <item.icon className="h-5 w-5 text-violet-300" />
                    </div>

                    <span className="font-medium text-white">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl">
                <Image
                  src="/logo.png"
                  alt="Echoes Of Destiny"
                  width={800}
                  height={800}
                  className="mx-auto max-h-[520px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* QUOTE SECTION */}
      {/* ================================================= */}

      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/30 via-black/40 to-fuchsia-950/30 p-12 text-center backdrop-blur-3xl md:p-20">
            <Quote className="mx-auto mb-8 h-14 w-14 text-violet-300" />

            <blockquote className="text-3xl font-light leading-relaxed text-white md:text-5xl">
              The most meaningful stories are not the ones we simply read.
              They are the ones that quietly become part of who we are.
            </blockquote>

            <div className="mt-10 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Echoes Of Destiny
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* VALUES */}
      {/* ================================================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Core Values
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
              What Guides This Space
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/20"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-10 w-10 text-violet-300" />
                </div>

                <h3 className="mb-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* JOURNEY */}
      {/* ================================================= */}

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Journey
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              From Thought To Destiny
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((step, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <div className="absolute right-4 top-4 text-7xl font-bold text-white/[0.03]">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-xl font-bold text-violet-300">
                    {index + 1}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MISSION */}
      {/* ================================================= */}

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-12 backdrop-blur-3xl md:p-24">
            <div className="text-center">
              <ScrollText className="mx-auto mb-8 h-14 w-14 text-violet-300" />

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Our Mission
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
                To create meaningful writing that inspires reflection, preserves
                emotions, encourages connection, and reminds readers that every
                life contains stories worth remembering.
              </p>

              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {[
                  "Inspire Reflection",
                  "Preserve Memories",
                  "Create Connection",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-violet-300" />

                    <p className="font-medium text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/50 via-black/50 to-fuchsia-950/50 p-14 text-center backdrop-blur-3xl md:p-24">
            <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Crown className="h-10 w-10 text-violet-300" />
              </div>

              <h2 className="text-4xl font-bold text-white md:text-7xl">
                Continue Exploring
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Discover stories, reflections, letters, books, destiny, and the
                echoes waiting between every line.
              </p>

              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-black transition-all duration-300 hover:scale-105"
                >
                  <PenTool className="h-5 w-5" />
                  Explore Home
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Read Stories

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}