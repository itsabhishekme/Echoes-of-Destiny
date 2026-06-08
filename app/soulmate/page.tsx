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
  Crown,
  Gem,
  Orbit,
  Star,
  Eye,
  Wand2,
  Sunrise,
  ScrollText,
  ChevronRight,
  Shield,
  CheckCircle2,
  Flower2,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soulmate",
  description:
    "Explore soulmate connections, destiny, intuition, spiritual bonds, meaningful relationships, and the mysterious paths that bring two souls together.",
};

type Connection = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Reflection = {
  title: string;
  text: string;
};

type Journey = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const connections: Connection[] = [
  {
    icon: Heart,
    title: "Soul Recognition",
    description:
      "Some people feel strangely familiar from the first conversation, as though a connection existed long before the meeting itself.",
  },
  {
    icon: Infinity,
    title: "Timeless Bond",
    description:
      "A soulmate connection often feels deeper than attraction, rooted in understanding, growth, trust, and transformation.",
  },
  {
    icon: Compass,
    title: "Guided Paths",
    description:
      "Life has a remarkable way of aligning circumstances, timing, and experiences to bring meaningful people together.",
  },
];

const reflections: Reflection[] = [
  {
    title: "Before The Meeting",
    text: "Sometimes the heart begins preparing for someone long before their arrival. Through dreams, intuition, hope, and unexpected signs, a future connection quietly enters our awareness.",
  },
  {
    title: "The Familiar Stranger",
    text: "A soulmate may initially appear as a stranger, yet their presence often feels natural, comforting, and deeply recognizable.",
  },
  {
    title: "Growth Through Connection",
    text: "The purpose of a soulmate is not merely companionship. They inspire healing, growth, self-discovery, and transformation.",
  },
  {
    title: "The Beauty Of Timing",
    text: "Meaningful connections rarely arrive too early or too late. They appear when life has prepared both souls for the journey ahead.",
  },
];

const journey: Journey[] = [
  {
    number: "01",
    title: "Dream",
    description:
      "A feeling, intuition, vision, or hope of a connection yet to come.",
    icon: MoonStar,
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "Life teaches lessons that shape the soul before the destined meeting occurs.",
    icon: Wand2,
  },
  {
    number: "03",
    title: "Encounter",
    description:
      "Two paths unexpectedly cross and a completely new chapter begins.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Evolution",
    description:
      "Both individuals grow, heal, and evolve through the bond they create together.",
    icon: Infinity,
  },
];

const qualities = [
  {
    icon: Eye,
    title: "Deep Understanding",
    description:
      "Feeling seen, heard, and understood beyond ordinary communication.",
  },
  {
    icon: Flower2,
    title: "Mutual Growth",
    description:
      "Both individuals encourage one another toward their highest potential.",
  },
  {
    icon: Orbit,
    title: "Meaningful Synchronicities",
    description:
      "Unexpected coincidences often appear throughout the relationship journey.",
  },
  {
    icon: Shield,
    title: "Emotional Safety",
    description:
      "A connection built on trust, acceptance, honesty, and compassion.",
  },
];

const inspirations = [
  {
    title: "Dreams",
    description:
      "Many people report dreams and intuitions before meeting significant individuals.",
  },
  {
    title: "Destiny",
    description:
      "Life often reveals connections through unexpected timing and circumstances.",
  },
  {
    title: "Growth",
    description:
      "Soulmate relationships frequently inspire personal evolution.",
  },
];

export default function SoulmatePage() {
  return (
    <main className="relative overflow-hidden">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[280px]" />

        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[220px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[240px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative px-6 pt-32 pb-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <Heart className="h-4 w-4 text-pink-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Soulmate Journey
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">
              The Mystery Of
            </span>

            <span className="block bg-gradient-to-r from-pink-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Soulmates
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            A soulmate is more than a romantic idea.
            It is a connection that inspires growth,
            awakens understanding, and reminds us that
            some meetings feel destined from the very beginning.
          </p>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Heart className="mx-auto mb-4 h-8 w-8 text-pink-300" />
              <h3 className="font-semibold text-white">
                Connection
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Infinity className="mx-auto mb-4 h-8 w-8 text-violet-300" />
              <h3 className="font-semibold text-white">
                Bond
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Compass className="mx-auto mb-4 h-8 w-8 text-fuchsia-300" />
              <h3 className="font-semibold text-white">
                Destiny
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Stars className="mx-auto mb-4 h-8 w-8 text-pink-300" />
              <h3 className="font-semibold text-white">
                Meaning
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* QUOTE */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <Quote className="mx-auto mb-10 h-14 w-14 text-pink-300" />

            <blockquote className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              “Perhaps soulmates
              <br />
              are not found.
              <br />
              Perhaps they are
              <br />
              remembered.”
            </blockquote>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-400">
                <Star className="h-4 w-4 text-pink-300" />
                Echoes Of Destiny
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONNECTIONS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-pink-300">
              Soul Connections
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              What Makes A Soulmate Special
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {connections.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-pink-400/20"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500/20 to-violet-500/20">
                  <item.icon className="h-10 w-10 text-pink-300" />
                </div>

                <h3 className="mb-5 text-3xl font-bold text-white">
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

      {/* ===================================================== */}
      {/* JOURNEY */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              The Soulmate Journey
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
              >
                <div className="mb-8 text-6xl font-bold text-pink-300/20">
                  {item.number}
                </div>

                <item.icon className="mb-6 h-10 w-10 text-pink-300" />

                <h3 className="mb-4 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* QUALITIES */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Qualities Of A Deep Connection
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {qualities.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <item.icon className="mb-6 h-10 w-10 text-pink-300" />

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* REFLECTIONS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-pink-300">
              Reflections
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white">
              Thoughts About Soulmates
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:border-pink-400/20"
              >
                <h3 className="mb-5 text-3xl font-bold text-white">
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

      {/* ===================================================== */}
      {/* FEATURED */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-pink-950/60 via-black/40 to-violet-950/60 p-14 backdrop-blur-3xl md:p-24">
            <div className="text-center">
              <Sunrise className="mx-auto mb-10 h-16 w-16 text-pink-300" />

              <h2 className="text-5xl font-bold text-white md:text-7xl">
                Some Connections Feel Written
              </h2>

              <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400">
                Whether through coincidence, intuition,
                dreams, or destiny, certain relationships
                feel different from the beginning.
                They challenge us, inspire us, heal us,
                and reveal parts of ourselves we may never
                have discovered alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* INSPIRATIONS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {inspirations.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-2xl"
              >
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <div className="mb-10 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-500/10">
                <Crown className="h-12 w-12 text-pink-300" />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Continue The Journey
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
              Explore destiny, memories, reflections,
              stories, and meaningful connections that
              celebrate the beauty of the human soul.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/destiny"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
              >
                <Stars className="h-5 w-5" />
                Explore Destiny

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-white transition-all duration-300 hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />
                Discover Books

                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 border-t border-white/10 pt-10">
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