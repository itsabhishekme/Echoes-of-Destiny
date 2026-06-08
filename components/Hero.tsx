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
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Main Glow */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[220px]" />

        {/* Secondary Glows */}
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[200px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <Sparkles className="absolute left-[15%] top-[20%] h-6 w-6 animate-pulse text-violet-300/50" />
        <Stars className="absolute right-[18%] top-[25%] h-5 w-5 animate-pulse text-fuchsia-300/40" />
        <Sparkles className="absolute bottom-[25%] left-[20%] h-4 w-4 animate-pulse text-cyan-300/40" />
        <Stars className="absolute bottom-[20%] right-[15%] h-5 w-5 animate-pulse text-violet-300/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-300">
            Literary Sanctuary
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-6xl text-6xl font-bold leading-tight text-white md:text-8xl xl:text-9xl">
          Echoes
          <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            of Destiny
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          A place where memories linger, letters remain unsent, dreams find
          meaning, and destiny whispers through stories that continue to echo
          long after the final page.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="h-5 w-5" />
            Explore Stories
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/books"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20 hover:bg-white/10"
          >
            <PenTool className="h-5 w-5" />
            Discover Books
          </Link>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-24 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
                <Feather className="h-7 w-7 text-violet-300" />
              </div>
            </div>

            <h3 className="text-4xl font-bold text-white">Letters</h3>

            <p className="mt-3 text-zinc-400">
              Words written from the heart and preserved through time.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-400/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/10">
                <Heart className="h-7 w-7 text-fuchsia-300" />
              </div>
            </div>

            <h3 className="text-4xl font-bold text-white">Memories</h3>

            <p className="mt-3 text-zinc-400">
              Moments that continue speaking long after they pass.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Stars className="h-7 w-7 text-cyan-300" />
              </div>
            </div>

            <h3 className="text-4xl font-bold text-white">Destiny</h3>

            <p className="mt-3 text-zinc-400">
              Exploring purpose, synchronicity, and meaningful connections.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mx-auto mt-24 max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl md:p-14">
          <p className="text-2xl font-light leading-relaxed text-white md:text-4xl">
            “Some stories are written to be read.
            <br />
            Others are written to be remembered.”
          </p>

          <div className="mt-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Echoes of Destiny
          </div>
        </div>
      </div>
    </section>
  );
}