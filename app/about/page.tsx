import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story behind Echoes of Destiny — a literary sanctuary of memories, reflections, destiny, and timeless letters.",
};

const values = [
  {
    icon: Heart,
    title: "Human Emotions",
    description:
      "Every story begins with a feeling. Joy, longing, hope, nostalgia, and love all find a home here.",
  },
  {
    icon: Feather,
    title: "Soulful Writing",
    description:
      "Words crafted not merely to be read, but to be felt, remembered, and carried forward.",
  },
  {
    icon: Sparkles,
    title: "Destiny & Meaning",
    description:
      "Exploring the invisible threads that connect moments, people, dreams, and purpose.",
  },
];

const journey = [
  {
    title: "A Thought",
    description:
      "Every meaningful creation begins with a single thought — a quiet whisper asking to be heard.",
  },
  {
    title: "A Letter",
    description:
      "Thoughts become words. Words become letters. Letters become bridges between souls.",
  },
  {
    title: "An Echo",
    description:
      "Some stories stay long after the final sentence. Their echoes continue within the reader.",
  },
  {
    title: "A Destiny",
    description:
      "Every encounter with a story changes something within us and becomes part of our journey.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-24">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[140px]" />
          <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <BookOpen className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.2em] text-zinc-300">
              About Echoes of Destiny
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            More Than
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              A Collection Of Words
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Echoes of Destiny is a literary space where memories linger,
            emotions breathe, and stories continue long after the final page.
            It is a sanctuary for reflections, letters, dreams, and the unseen
            connections that shape our lives.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
                The Story
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Where Words Become Memories
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>
                  Some stories are written to entertain. Others are written to
                  preserve a feeling that might otherwise disappear with time.
                </p>

                <p>
                  Echoes of Destiny was created as a place for those moments —
                  the thoughts left unsaid, the letters never sent, the dreams
                  remembered at dawn, and the emotions too profound for ordinary
                  conversation.
                </p>

                <p>
                  Here, every piece of writing seeks to create connection. Not
                  only between writer and reader, but between the reader and
                  their own memories, questions, hopes, and destiny.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">
              <Quote className="mb-6 h-12 w-12 text-violet-300" />

              <blockquote className="text-2xl leading-relaxed text-white md:text-3xl">
                “The most powerful stories are not those we simply read.
                They are the ones that quietly become part of us.”
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-6 text-zinc-500">
                Echoes of Destiny
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              What Guides This Space
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Core Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-8 w-8 text-violet-300" />
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

      {/* Journey */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              The Journey
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              From Thought To Destiny
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-xl font-bold text-violet-300">
                  {index + 1}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <ScrollText className="mx-auto mb-8 h-12 w-12 text-violet-300" />

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              The Mission
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              To create writing that resonates beyond the moment. To preserve
              emotions, inspire reflection, encourage connection, and remind
              readers that every life contains stories worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 text-center backdrop-blur-3xl md:p-20">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-10 w-10 text-violet-300" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Continue Exploring
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Discover letters, reflections, stories, and the echoes waiting
              between the lines.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105"
              >
                <PenTool className="h-5 w-5" />
                Explore Home
              </Link>

              <Link
                href="/letters"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Read Letters
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}