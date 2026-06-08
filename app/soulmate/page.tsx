import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Stars,
  ArrowRight,
  BookOpen,
  Feather,
  MoonStar,
  Quote,
  Infinity,
  Compass,
  PenTool,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soulmate",
  description:
    "A journey into soul connections, destiny, love, intuition, and the mysterious paths that bring two souls together.",
};

const connections = [
  {
    icon: Heart,
    title: "Soul Recognition",
    description:
      "Some people feel strangely familiar from the first conversation, as though a connection existed long before the meeting.",
  },
  {
    icon: Infinity,
    title: "Timeless Bond",
    description:
      "A soulmate connection often feels deeper than ordinary attraction, rooted in growth, understanding, and mutual transformation.",
  },
  {
    icon: Compass,
    title: "Guided Paths",
    description:
      "Life has a remarkable way of aligning circumstances, experiences, and timing to bring meaningful people together.",
  },
];

const reflections = [
  {
    title: "Before The Meeting",
    text: "Sometimes the heart begins preparing for someone long before their arrival. Through dreams, intuition, hope, and unexpected signs, a future connection quietly enters our awareness.",
  },
  {
    title: "The Familiar Stranger",
    text: "A soulmate may initially appear as a stranger, yet their presence often feels comforting, natural, and strangely recognizable.",
  },
  {
    title: "Growth Through Connection",
    text: "The purpose of a soulmate is not merely companionship. They often inspire healing, growth, self-discovery, and transformation.",
  },
  {
    title: "The Beauty Of Timing",
    text: "Meaningful connections rarely arrive too early or too late. They appear when life has prepared both souls for the journey ahead.",
  },
];

const journey = [
  {
    number: "01",
    title: "Dream",
    description:
      "A feeling, intuition, or vision of a connection yet to come.",
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "Life teaches lessons that shape the soul before the meeting occurs.",
  },
  {
    number: "03",
    title: "Encounter",
    description:
      "Two paths unexpectedly cross and a new chapter begins.",
  },
  {
    number: "04",
    title: "Evolution",
    description:
      "Both individuals grow through the bond they create together.",
  },
];

export default function SoulmatePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[260px]" />
        <div className="absolute left-0 top-1/2 h-[450px] w-[450px] rounded-full bg-pink-600/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[200px]" />
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <Heart className="h-4 w-4 text-pink-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Soulmate Journey
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            The Mystery Of
            <span className="block bg-gradient-to-r from-pink-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Soulmates
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            A soulmate is more than a romantic idea. It is a connection that
            inspires growth, awakens deeper understanding, and reminds us that
            some meetings feel destined from the very beginning.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <Quote className="mx-auto mb-8 h-12 w-12 text-pink-300" />

            <blockquote className="text-3xl leading-relaxed text-white md:text-5xl">
              “Perhaps soulmates are not found.
              <br />
              Perhaps they are remembered.”
            </blockquote>

            <p className="mt-10 text-zinc-500">
              — Echoes of Destiny
            </p>
          </div>
        </div>
      </section>

      {/* Connection Cards */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-pink-300">
              Soul Connections
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              What Makes A Soulmate Special
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {connections.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-violet-500/20">
                  <item.icon className="h-8 w-8 text-pink-300" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
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

      {/* Journey Timeline */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              The Soulmate Journey
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="mb-6 text-5xl font-bold text-pink-300/40">
                  {item.number}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
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

      {/* Reflections */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-pink-300">
              Reflections
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Thoughts About Soulmates
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-pink-400/20"
              >
                <h3 className="mb-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-pink-950/60 via-black/40 to-violet-950/60 p-12 backdrop-blur-3xl md:p-20">
            <div className="text-center">
              <MoonStar className="mx-auto mb-8 h-14 w-14 text-pink-300" />

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Some Connections Feel Written
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Whether through coincidence, intuition, dreams, or destiny,
                certain relationships feel different from the beginning.
                They challenge us, inspire us, and reveal parts of ourselves
                we may never have discovered alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10">
                <Sparkles className="h-10 w-10 text-pink-300" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Continue The Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Explore reflections, destiny, love, memories, and stories that
              celebrate meaningful human connections.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/destiny"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105"
              >
                <Stars className="h-5 w-5" />
                Explore Destiny
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />
                Discover Books
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-10">
              <div className="flex items-center justify-center gap-3 text-zinc-500">
                <Feather className="h-4 w-4" />
                Written for dreamers, believers, and souls searching for meaning.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}