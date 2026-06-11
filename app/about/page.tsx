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
      {/* FEATURED AUTHOR / ABOUT THE MOVEMENT */}
      {/* ================================================= */}

      <section className="relative overflow-hidden px-6 py-32">

        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-24 lg:grid-cols-2">

            {/* ========================================= */}
            {/* LEFT CONTENT */}
            {/* ========================================= */}

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
                <Stars className="h-4 w-4" />
                Literary Vision
              </div>

              <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
                More Than
                <span className="block bg-gradient-to-r from-violet-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  A Website
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
                Echoes of Destiny was created as a timeless space
                where memories, emotions, stories, dreams,
                reflections, and personal journeys can live
                beyond fleeting moments.
              </p>

              <div className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-400">

                <p>
                  In a world moving faster every day, meaningful
                  experiences are often forgotten before they are
                  fully understood. This platform exists to slow
                  down that process and preserve what truly matters.
                </p>

                <p>
                  Every person carries untold stories,
                  unanswered questions, spiritual insights,
                  lessons from love, moments of transformation,
                  and memories that deserve a place in history.
                </p>

                <p>
                  Through essays, books, letters, journals,
                  reflections, community stories, and creative
                  writing, Echoes of Destiny seeks to create a
                  bridge between personal experience and
                  collective wisdom.
                </p>

                <p>
                  This is not simply a publication platform.
                  It is a living archive of human emotion,
                  destiny, connection, growth, and self-discovery.
                </p>

              </div>

              {/* Statistics */}

              <div className="mt-12 grid gap-6 sm:grid-cols-3">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="text-3xl font-bold text-white">
                    100+
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">
                    Shared Reflections
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="text-3xl font-bold text-white">
                    Infinite
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">
                    Human Stories
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="text-3xl font-bold text-white">
                    One
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">
                    Shared Journey
                  </div>
                </div>

              </div>

              {/* Pillars */}

              <div className="mt-16">
                <h3 className="mb-8 text-2xl font-bold text-white">
                  Core Pillars
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">

                  {pillars.map((item, index) => (
                    <div
                      key={index}
                      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                          <item.icon className="h-6 w-6 text-violet-300" />
                        </div>

                        <div>
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm text-zinc-500">
                            Building meaningful human connections
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>

            {/* ========================================= */}
            {/* RIGHT VISUAL */}
            {/* ========================================= */}

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-violet-500/20 blur-3xl" />

              {/* Main Card */}

              <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">

                {/* Decorative Elements */}

                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

                <div className="relative">

                  <Image
                    src="/logo.png"
                    alt="Echoes Of Destiny"
                    width={1000}
                    height={1000}
                    priority
                    className="mx-auto max-h-[700px] w-auto object-contain transition-all duration-700 hover:scale-105"
                  />

                </div>

              </div>

              {/* Floating Cards */}

              <div className="absolute -left-10 top-16 hidden rounded-3xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl xl:block">
                <div className="text-sm text-zinc-500">
                  Preserving
                </div>

                <div className="font-semibold text-white">
                  Human Stories
                </div>
              </div>

              <div className="absolute -right-10 bottom-16 hidden rounded-3xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl xl:block">
                <div className="text-sm text-zinc-500">
                  Inspired By
                </div>

                <div className="font-semibold text-white">
                  Destiny & Reflection
                </div>
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
      {/* MISSION • PURPOSE • VISION */}
      {/* ================================================= */}

      <section className="relative overflow-hidden px-6 py-36">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
          <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}

          <div className="mb-20 text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              <ScrollText className="h-4 w-4" />
              Our Purpose
            </div>

            <h2 className="text-5xl font-black text-white md:text-7xl">
              Our Mission
            </h2>

            <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500" />

            <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-zinc-400">
              To create meaningful writing that inspires reflection,
              preserves emotions, encourages connection, and reminds
              readers that every life contains stories worth remembering.
              Through words, experiences, and shared journeys, we seek
              to build a timeless archive of human wisdom and emotional truth.
            </p>

          </div>

          {/* Main Card */}

          <div className="relative overflow-hidden rounded-[60px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl md:p-16 xl:p-24">

            {/* Decorative Effects */}

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

            <div className="relative">

              {/* Mission Statement */}

              <div className="mx-auto max-w-5xl text-center">

                <div className="mb-10 flex justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10">
                    <ScrollText className="h-12 w-12 text-violet-300" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white md:text-5xl">
                  Words That Outlive Moments
                </h3>

                <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
                  Echoes Of Destiny exists because stories matter.
                  Emotions matter. Human experiences matter.
                  Every reflection, lesson, memory, dream,
                  challenge, and triumph contributes to the larger
                  story of who we are as individuals and as a society.
                </p>

                <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-zinc-400">
                  Our mission is not only to publish words but to
                  preserve meaning. Through thoughtful storytelling,
                  reflective essays, books, letters, and shared
                  experiences, we create a space where readers can
                  pause, reconnect with themselves, and discover
                  deeper understanding.
                </p>

              </div>

              {/* Core Values */}

              <div className="mt-24">

                <h4 className="mb-12 text-center text-3xl font-bold text-white">
                  Core Values
                </h4>

                <div className="grid gap-8 md:grid-cols-3">

                  {[
                    {
                      title: "Inspire Reflection",
                      description:
                        "Encouraging readers to pause, think deeply, and discover meaning within their own experiences.",
                    },
                    {
                      title: "Preserve Memories",
                      description:
                        "Protecting stories, emotions, and moments that deserve to be remembered across generations.",
                    },
                    {
                      title: "Create Connection",
                      description:
                        "Building bridges between people through shared experiences, empathy, and understanding.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.05]"
                    >

                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                        <CheckCircle2 className="h-8 w-8 text-violet-300" />
                      </div>

                      <h5 className="mb-4 text-2xl font-semibold text-white">
                        {item.title}
                      </h5>

                      <p className="leading-relaxed text-zinc-400">
                        {item.description}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* Additional Mission Blocks */}

              <div className="mt-24 grid gap-8 lg:grid-cols-3">

                <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
                  <div className="mb-5 text-5xl font-black text-violet-300">
                    01
                  </div>

                  <h4 className="mb-4 text-xl font-semibold text-white">
                    Preserve Human Stories
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    Every life contains wisdom, memories, and experiences
                    that deserve a place beyond fleeting moments.
                  </p>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
                  <div className="mb-5 text-5xl font-black text-violet-300">
                    02
                  </div>

                  <h4 className="mb-4 text-xl font-semibold text-white">
                    Encourage Growth
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    Through thoughtful writing and reflection,
                    readers are invited to explore new perspectives.
                  </p>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
                  <div className="mb-5 text-5xl font-black text-violet-300">
                    03
                  </div>

                  <h4 className="mb-4 text-xl font-semibold text-white">
                    Build Meaningful Connections
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    Stories create empathy and understanding,
                    bringing people together through shared humanity.
                  </p>
                </div>

              </div>

              {/* Quote Block */}

              <div className="mt-24 rounded-[40px] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 p-10 text-center">

                <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
                  "The greatest stories are not always found in books.
                  They are often found in ordinary lives,
                  waiting to be remembered."
                </p>

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