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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Destiny",
  description:
    "Explore destiny, synchronicity, meaningful coincidences, life paths, and the unseen threads connecting every soul.",
};

const pillars = [
  {
    icon: Compass,
    title: "Life Paths",
    description:
      "Every journey unfolds through choices, experiences, lessons, and moments that quietly shape our future.",
  },
  {
    icon: Orbit,
    title: "Invisible Connections",
    description:
      "Some encounters feel familiar from the beginning, as though destiny arranged the meeting long ago.",
  },
  {
    icon: Clock3,
    title: "Divine Timing",
    description:
      "What is meant to arrive often appears when the soul is finally ready to receive it.",
  },
];

const reflections = [
  {
    title: "The People We Are Meant To Meet",
    text: "Certain individuals enter our lives and change our direction forever. Sometimes they stay. Sometimes they leave. Yet their purpose remains fulfilled.",
  },
  {
    title: "The Beauty Of Waiting",
    text: "Destiny is not always about arrival. Sometimes it is about becoming the person capable of embracing what is coming.",
  },
  {
    title: "The Language Of Signs",
    text: "Synchronicities, dreams, intuition, and meaningful coincidences often feel like whispers from a larger story unfolding around us.",
  },
  {
    title: "The Roads Not Taken",
    text: "Even missed opportunities become part of the path. What seems like a detour today may reveal itself as guidance tomorrow.",
  },
];

const journey = [
  {
    step: "01",
    title: "Dream",
    description:
      "Every destiny begins as a possibility hidden within the imagination.",
  },
  {
    step: "02",
    title: "Journey",
    description:
      "Life unfolds through lessons, growth, challenges, and unexpected turns.",
  },
  {
    step: "03",
    title: "Meeting",
    description:
      "People, opportunities, and moments arrive exactly when they are needed.",
  },
  {
    step: "04",
    title: "Purpose",
    description:
      "The experiences of a lifetime eventually reveal a deeper meaning.",
  },
];

export default function DestinyPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[240px]" />
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[200px]" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <Stars className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Echoes of Destiny
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            The Art of
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Destiny
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Destiny is not merely a destination. It is the unfolding story of
            every choice, every encounter, every lesson, and every dream that
            quietly shapes who we become.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <Quote className="mx-auto mb-8 h-12 w-12 text-violet-300" />

            <blockquote className="text-3xl leading-relaxed text-white md:text-5xl">
              “Perhaps destiny is not about finding
              <br />
              the right path.
              <br />
              Perhaps it is about becoming the right person.”
            </blockquote>

            <p className="mt-10 text-zinc-500">
              — Echoes of Destiny
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              Understanding Destiny
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Three Essential Pillars
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-8 w-8 text-violet-300" />
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
              The Journey Of Destiny
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="mb-6 text-5xl font-bold text-violet-300/40">
                  {item.step}
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
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              Reflections
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Thoughts On Fate & Meaning
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/20"
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
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 backdrop-blur-3xl md:p-20">
            <div className="text-center">
              <MoonStar className="mx-auto mb-8 h-14 w-14 text-violet-300" />

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Every Soul Has A Story
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Some stories unfold through certainty. Others reveal themselves
                through patience, intuition, and trust. Destiny often works
                quietly, shaping lives through experiences that seem ordinary
                until we look back and understand their meaning.
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
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">
                <BookOpen className="h-10 w-10 text-violet-300" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Continue Exploring
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Discover stories, reflections, letters, and insights inspired by
              destiny, memory, purpose, and the journey of becoming.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105"
              >
                Read Articles
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10"
              >
                <Heart className="h-5 w-5" />
                Explore Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}