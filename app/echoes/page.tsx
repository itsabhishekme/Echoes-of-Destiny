import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Quote,
  Sparkles,
  Heart,
  Feather,
  Clock3,
  ArrowRight,
  BookOpen,
  Stars,
  PenTool,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Echoes",
  description:
    "Explore echoes of memories, emotions, dreams, destiny, and the moments that continue to live within us long after they pass.",
};

const echoes = [
  {
    icon: Heart,
    title: "Echoes of Love",
    description:
      "Some hearts leave a lasting presence. Their memory continues speaking through moments, songs, places, and silence.",
  },
  {
    icon: Clock3,
    title: "Echoes of Time",
    description:
      "Years may pass, yet certain memories remain untouched, returning with the same emotion they carried long ago.",
  },
  {
    icon: Feather,
    title: "Echoes of Words",
    description:
      "Letters, conversations, promises, and stories often continue living long after they have been spoken.",
  },
];

const reflections = [
  {
    title: "The Sound Of A Memory",
    text: "Memories rarely disappear. They transform into quiet echoes that revisit us unexpectedly through a familiar scent, a forgotten photograph, or a passing thought.",
  },
  {
    title: "What Remains After Goodbye",
    text: "People may leave, moments may end, but the emotions they created often continue shaping our lives in unseen ways.",
  },
  {
    title: "The Echo Within",
    text: "Every experience leaves an imprint upon the soul. These imprints become part of who we are and who we continue becoming.",
  },
  {
    title: "The Beauty Of Remembering",
    text: "Remembering is not living in the past. It is honoring the moments that helped create the present.",
  },
];

const journey = [
  {
    number: "01",
    title: "Moment",
    description:
      "Every echo begins with a single meaningful experience.",
  },
  {
    number: "02",
    title: "Memory",
    description:
      "The moment becomes part of our inner world and stays with us.",
  },
  {
    number: "03",
    title: "Reflection",
    description:
      "Over time, understanding deepens and new meaning emerges.",
  },
  {
    number: "04",
    title: "Echo",
    description:
      "The experience continues to influence our life long afterward.",
  },
];

export default function EchoesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[240px]" />
        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-600/10 blur-[180px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[200px]" />
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <Waves className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Echoes of Destiny
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            The Power Of
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Echoes
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Some moments end, yet they never truly leave. They become echoes —
            lingering memories, emotions, and stories that continue shaping our
            lives across time.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <Quote className="mx-auto mb-8 h-12 w-12 text-violet-300" />

            <blockquote className="text-3xl leading-relaxed text-white md:text-5xl">
              “An echo is proof that
              <br />
              something meaningful was once here.”
            </blockquote>

            <p className="mt-10 text-zinc-500">
              — Echoes of Destiny
            </p>
          </div>
        </div>
      </section>

      {/* Echo Categories */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              What Echoes Leave Behind
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Three Lasting Impressions
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {echoes.map((item, index) => (
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

      {/* Journey */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              How Echoes Are Created
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="mb-6 text-5xl font-bold text-violet-300/40">
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
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              Reflections
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Listening To The Echoes
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

      {/* Featured Section */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 backdrop-blur-3xl md:p-20">
            <div className="text-center">
              <Wind className="mx-auto mb-8 h-14 w-14 text-violet-300" />

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Every Memory Has A Voice
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                We often believe that moments disappear once they pass.
                Yet the truth is different. They remain within us as lessons,
                emotions, wisdom, inspiration, and stories that continue
                speaking through the years.
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
                <Stars className="h-10 w-10 text-violet-300" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Explore More Echoes
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Discover stories, letters, reflections, and memories that
              continue resonating long after the final page.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105"
              >
                <PenTool className="h-5 w-5" />
                Read Stories
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />
                Explore Books
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}