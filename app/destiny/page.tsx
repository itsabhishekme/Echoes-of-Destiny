import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Stars,
  Heart,
  Clock3,
  ArrowRight,
  Orbit,
  BookOpen,
  Quote,
  Compass,
  MoonStar,
  Gem,
  ScrollText,
  Feather,
  Eye,
  Mountain,
  Infinity,
  Star,
  Sunrise,
  Shield,
  Wand2,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Destiny",
  description:
    "Explore destiny, synchronicity, meaningful coincidences, life paths, soul connections, and the invisible threads that shape every journey.",
};

const pillars = [
  {
    icon: Compass,
    title: "Life Paths",
    description:
      "Every journey unfolds through decisions, experiences, lessons, and unexpected moments that quietly guide our future.",
  },
  {
    icon: Orbit,
    title: "Invisible Connections",
    description:
      "Some encounters feel strangely familiar, as if they were written into the story long before they happened.",
  },
  {
    icon: Clock3,
    title: "Divine Timing",
    description:
      "What belongs in our lives often arrives precisely when we are ready to receive it.",
  },
];

const reflections = [
  {
    title: "The People We Are Meant To Meet",
    text: "Certain individuals enter our lives and forever change our direction. Whether they stay or leave, their purpose remains fulfilled.",
  },
  {
    title: "The Beauty Of Waiting",
    text: "Destiny is not always about arrival. Sometimes it is about becoming the person capable of embracing what is coming.",
  },
  {
    title: "The Language Of Signs",
    text: "Dreams, intuition, synchronicities, and meaningful coincidences often feel like whispers from a greater story unfolding.",
  },
  {
    title: "The Roads Not Taken",
    text: "Even missed opportunities become part of the path. What feels like a detour today may reveal itself as guidance tomorrow.",
  },
];

const journey = [
  {
    step: "01",
    title: "Dream",
    description:
      "Every destiny begins as a possibility hidden inside imagination.",
    icon: MoonStar,
  },
  {
    step: "02",
    title: "Journey",
    description:
      "Growth emerges through lessons, challenges, failures, and perseverance.",
    icon: Mountain,
  },
  {
    step: "03",
    title: "Meeting",
    description:
      "People, opportunities, and experiences arrive exactly when needed.",
    icon: Heart,
  },
  {
    step: "04",
    title: "Purpose",
    description:
      "The experiences of a lifetime eventually reveal deeper meaning.",
    icon: Infinity,
  },
];

const insights = [
  {
    icon: Eye,
    title: "Awareness",
    description:
      "Destiny often reveals itself through awareness rather than certainty.",
  },
  {
    icon: Feather,
    title: "Trust",
    description:
      "The journey becomes easier when we trust the unfolding process.",
  },
  {
    icon: Wand2,
    title: "Transformation",
    description:
      "Every challenge carries the potential to transform who we become.",
  },
  {
    icon: Shield,
    title: "Resilience",
    description:
      "Difficult seasons often prepare us for meaningful destinations.",
  },
];

export default function DestinyPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ================================================= */}
      {/* COSMIC BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[260px]" />

        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[220px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[250px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative px-6 pt-32 pb-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <Stars className="h-4 w-4 text-violet-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Echoes Of Destiny
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">
              The Art Of
            </span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Destiny
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Destiny is not merely a destination.
            It is the unfolding story of every choice,
            every lesson, every encounter, every dream,
            and every moment that quietly shapes who we become.
          </p>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Compass className="mx-auto mb-4 h-8 w-8 text-violet-300" />
              <h3 className="font-semibold text-white">
                Direction
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Heart className="mx-auto mb-4 h-8 w-8 text-fuchsia-300" />
              <h3 className="font-semibold text-white">
                Connection
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Clock3 className="mx-auto mb-4 h-8 w-8 text-cyan-300" />
              <h3 className="font-semibold text-white">
                Timing
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Infinity className="mx-auto mb-4 h-8 w-8 text-violet-300" />
              <h3 className="font-semibold text-white">
                Purpose
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* QUOTE */}
      {/* ================================================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <Quote className="mx-auto mb-10 h-14 w-14 text-violet-300" />

            <blockquote className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              “Perhaps destiny is not about finding
              <br />
              the right path.
              <br />
              Perhaps it is about becoming
              <br />
              the right person.”
            </blockquote>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-400">
                <Star className="h-4 w-4 text-violet-300" />
                Echoes Of Destiny
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PILLARS */}
      {/* ================================================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Understanding Destiny
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              Three Essential Pillars
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/20"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-10 w-10 text-violet-300" />
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

      {/* ================================================= */}
      {/* TIMELINE */}
      {/* ================================================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Journey Of Destiny
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
              >
                <div className="mb-8 text-6xl font-bold text-violet-300/20">
                  {item.step}
                </div>

                <item.icon className="mb-6 h-10 w-10 text-violet-300" />

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

      {/* ================================================= */}
      {/* REFLECTIONS */}
      {/* ================================================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Reflections
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white">
              Thoughts On Fate & Meaning
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/20"
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

      {/* ================================================= */}
      {/* INSIGHTS */}
      {/* ================================================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Principles Of Destiny
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {insights.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <item.icon className="mb-6 h-10 w-10 text-violet-300" />

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

      {/* ================================================= */}
      {/* FEATURED INSIGHT */}
      {/* ================================================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-14 backdrop-blur-3xl md:p-24">
            <div className="text-center">
              <Sunrise className="mx-auto mb-10 h-16 w-16 text-violet-300" />

              <h2 className="text-5xl font-bold text-white md:text-7xl">
                Every Soul Has A Story
              </h2>

              <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400">
                Some stories unfold through certainty.
                Others reveal themselves through patience,
                intuition, trust, and time.
                Destiny often works quietly,
                shaping lives through moments that appear ordinary
                until we look back and understand their meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <div className="mb-10 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10">
                <BookOpen className="h-12 w-12 text-violet-300" />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Continue Exploring
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
              Discover stories, reflections, letters, and insights
              inspired by destiny, memory, purpose,
              soul connections, and the lifelong journey of becoming.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
              >
                Read Articles

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-white transition-all duration-300 hover:bg-white/10"
              >
                <Heart className="h-5 w-5" />
                Explore Books

                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}