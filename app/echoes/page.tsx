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
  MoonStar,
  ScrollText,
  Infinity,
  Eye,
  Gem,
  Star,
  Compass,
  Music4,
  Sunrise,
  ChevronRight,
  Orbit,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Echoes",
  description:
    "Explore echoes of memories, emotions, dreams, destiny, and the moments that continue living within us long after they pass.",
};

const echoes = [
  {
    icon: Heart,
    title: "Echoes of Love",
    description:
      "Some hearts leave a lasting presence. Their memory continues speaking through places, songs, conversations, and silence.",
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
      "Letters, promises, stories, and conversations often continue living long after they have been spoken.",
  },
];

const reflections = [
  {
    title: "The Sound Of A Memory",
    text: "Memories rarely disappear. They transform into quiet echoes that revisit us through a scent, a photograph, a place, or a fleeting thought.",
  },
  {
    title: "What Remains After Goodbye",
    text: "People may leave and moments may end, but the emotions they created often continue shaping our lives in unseen ways.",
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
      "Every echo begins with a meaningful experience that leaves an impression.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Memory",
    description:
      "The experience becomes part of our inner world and remains with us.",
    icon: MoonStar,
  },
  {
    number: "03",
    title: "Reflection",
    description:
      "Time deepens understanding and reveals new meaning hidden within the memory.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Echo",
    description:
      "The experience continues influencing our thoughts, choices, and perspective.",
    icon: Infinity,
  },
];

const influences = [
  {
    icon: Music4,
    title: "Songs",
    description:
      "A melody can instantly return us to a forgotten chapter of life.",
  },
  {
    icon: Compass,
    title: "Places",
    description:
      "Certain locations carry emotional fingerprints that never truly fade.",
  },
  {
    icon: ScrollText,
    title: "Stories",
    description:
      "Stories preserve emotions and experiences long after moments disappear.",
  },
  {
    icon: Orbit,
    title: "Destiny",
    description:
      "Some echoes continue guiding us toward people and experiences meant for us.",
  },
];

export default function EchoesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[260px]" />

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[220px]" />

        <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[250px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative px-6 pt-32 pb-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <Waves className="h-4 w-4 text-violet-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Echoes Of Destiny
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">
              The Power Of
            </span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Echoes
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Some moments end, yet they never truly leave.
            They become echoes — lingering memories,
            emotions, dreams, lessons, and stories that continue
            shaping our lives across time.
          </p>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Heart className="mx-auto mb-4 h-8 w-8 text-fuchsia-300" />

              <h3 className="font-semibold text-white">
                Love
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Clock3 className="mx-auto mb-4 h-8 w-8 text-cyan-300" />

              <h3 className="font-semibold text-white">
                Time
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Feather className="mx-auto mb-4 h-8 w-8 text-violet-300" />

              <h3 className="font-semibold text-white">
                Words
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Infinity className="mx-auto mb-4 h-8 w-8 text-violet-300" />

              <h3 className="font-semibold text-white">
                Legacy
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
            <Quote className="mx-auto mb-10 h-14 w-14 text-violet-300" />

            <blockquote className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              “An echo is proof that
              <br />
              something meaningful
              <br />
              was once here.”
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

      {/* ===================================================== */}
      {/* ECHO CATEGORIES */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              What Echoes Leave Behind
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              Lasting Impressions
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {echoes.map((item, index) => (
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

      {/* ===================================================== */}
      {/* JOURNEY */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              How Echoes Are Created
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
              >
                <div className="mb-8 text-6xl font-bold text-violet-300/20">
                  {item.number}
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

      {/* ===================================================== */}
      {/* REFLECTIONS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Reflections
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white">
              Listening To The Echoes
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

      {/* ===================================================== */}
      {/* INFLUENCES */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Where Echoes Live
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {influences.map((item, index) => (
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

      {/* ===================================================== */}
      {/* FEATURED SECTION */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-14 backdrop-blur-3xl md:p-24">
            <div className="text-center">
              <Wind className="mx-auto mb-10 h-16 w-16 text-violet-300" />

              <h2 className="text-5xl font-bold text-white md:text-7xl">
                Every Memory Has A Voice
              </h2>

              <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400">
                We often believe that moments disappear once they pass.
                Yet the truth is different.
                They remain within us as wisdom, emotion, inspiration,
                lessons, and stories that continue speaking through the years.
              </p>
            </div>
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
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10">
                <Stars className="h-12 w-12 text-violet-300" />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Explore More Echoes
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
              Discover stories, letters, reflections, memories,
              and soulful writing that continue resonating
              long after the final page.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
              >
                <PenTool className="h-5 w-5" />
                Read Stories

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-white transition-all duration-300 hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />
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