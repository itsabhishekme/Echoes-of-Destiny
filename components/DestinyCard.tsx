"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Stars,
  Heart,
  Clock3,
  Compass,
  Orbit,
  Crown,
  Quote,
  Zap,
  Moon,
} from "lucide-react";

interface DestinyCardProps {
  title: string;
  description: string;
  slug?: string;
  category?: string;
  quote?: string;
  icon?:
    | "destiny"
    | "love"
    | "time"
    | "journey"
    | "cosmic";
  featured?: boolean;
}

const iconMap = {
  destiny: Stars,
  love: Heart,
  time: Clock3,
  journey: Compass,
  cosmic: Orbit,
};

export default function DestinyCard({
  title,
  description,
  slug = "#",
  category = "Destiny",
  quote,
  icon = "destiny",
  featured = false,
}: DestinyCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className={`
        group relative isolate overflow-hidden rounded-[40px]
        border transition-all duration-700 ease-out
        hover:-translate-y-4 hover:shadow-[0_40px_120px_rgba(139,92,246,0.25)]
        ${
          featured
            ? "border-violet-500/30 bg-gradient-to-br from-violet-950/80 via-black to-fuchsia-950/80"
            : "border-white/10 bg-white/[0.03]"
        }
        backdrop-blur-3xl
      `}
    >
      {/* ========================================================= */}
      {/* Animated Background Layers */}
      {/* ========================================================= */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Aurora Layer */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-20%] top-[-10%] h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute right-[-20%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      {/* ========================================================= */}
      {/* Cosmic Grid */}
      {/* ========================================================= */}

      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* Animated Stars */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Sparkles className="absolute left-8 top-10 h-4 w-4 animate-pulse text-violet-300/50" />

        <Sparkles
          className="absolute right-10 top-20 h-3 w-3 animate-pulse text-fuchsia-300/50"
          style={{ animationDelay: "1s" }}
        />

        <Sparkles
          className="absolute bottom-20 left-12 h-3 w-3 animate-pulse text-cyan-300/50"
          style={{ animationDelay: "2s" }}
        />

        <Moon
          className="absolute right-16 bottom-16 h-5 w-5 text-violet-300/20"
          strokeWidth={1}
        />
      </div>

      {/* ========================================================= */}
      {/* Border Glow */}
      {/* ========================================================= */}

      <div className="absolute inset-0 rounded-[40px] border border-white/5" />

      <div className="absolute inset-[1px] rounded-[39px] bg-gradient-to-b from-white/[0.03] to-transparent opacity-50" />

      {/* ========================================================= */}
      {/* Content */}
      {/* ========================================================= */}

      <div className="relative z-20 p-8 md:p-10 xl:p-12">
        {/* Header */}

        <div className="mb-10 flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="
                inline-flex items-center gap-2 rounded-full
                border border-violet-500/20
                bg-violet-500/10
                px-4 py-2
                text-[11px] font-semibold uppercase
                tracking-[0.25em]
                text-violet-300
              "
            >
              <Sparkles className="h-3 w-3" />
              {category}
            </span>

            <span
              className="
                inline-flex items-center gap-2 rounded-full
                border border-white/10
                bg-white/[0.04]
                px-4 py-2
                text-[11px] uppercase tracking-[0.2em]
                text-zinc-400
              "
            >
              <Stars className="h-3 w-3" />
              Cosmic Insight
            </span>
          </div>

          {featured && (
            <div
              className="
                flex items-center gap-2 rounded-full
                border border-amber-400/20
                bg-amber-400/10
                px-4 py-2
                text-xs font-medium
                text-amber-300
              "
            >
              <Crown className="h-3.5 w-3.5" />
              Featured
            </div>
          )}
        </div>

        {/* Icon Section */}

        <div className="mb-10 flex items-center justify-between">
          <div
            className="
              relative flex h-24 w-24 items-center justify-center
              rounded-[30px]
              bg-gradient-to-br
              from-violet-500/20
              via-fuchsia-500/10
              to-cyan-500/20
              transition-all duration-700
              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <div className="absolute inset-0 rounded-[30px] border border-white/10" />

            <Icon className="h-11 w-11 text-violet-300" />
          </div>

          <div
            className="
              hidden rounded-3xl border border-white/10
              bg-white/[0.03]
              px-5 py-4
              md:block
            "
          >
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap className="h-4 w-4 text-violet-300" />
              <span className="text-sm">
                Spiritual Guidance
              </span>
            </div>
          </div>
        </div>

        {/* Title */}

        <h2
          className="
            mb-6 text-3xl font-bold leading-tight
            text-white
            transition-colors duration-500
            group-hover:text-violet-300
            md:text-4xl
          "
        >
          {title}
        </h2>

        {/* Description */}

        <p
          className="
            text-base leading-8
            text-zinc-400
            md:text-lg
          "
        >
          {description}
        </p>

        {/* Quote */}

        {quote && (
          <div
            className="
              relative mt-10 overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              p-6
            "
          >
            <div className="absolute right-4 top-4 opacity-10">
              <Quote className="h-14 w-14 text-white" />
            </div>

            <div className="flex items-start gap-4">
              <div
                className="
                  mt-1 flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-violet-500/10
                "
              >
                <Quote className="h-4 w-4 text-violet-300" />
              </div>

              <div>
                <p
                  className="
                    text-base italic leading-8
                    text-zinc-300
                  "
                >
                  “{quote}”
                </p>

                <div
                  className="
                    mt-4 h-px w-20
                    bg-gradient-to-r
                    from-violet-400
                    to-transparent
                  "
                />
              </div>
            </div>
          </div>
        )}

        {/* Stats Row */}

        <div
          className="
            mt-10 grid grid-cols-3 gap-3
          "
        >
          <div
            className="
              rounded-2xl border border-white/10
              bg-white/[0.03]
              p-4 text-center
            "
          >
            <div className="text-lg font-bold text-white">
              ∞
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              Wisdom
            </div>
          </div>

          <div
            className="
              rounded-2xl border border-white/10
              bg-white/[0.03]
              p-4 text-center
            "
          >
            <div className="text-lg font-bold text-white">
              ✦
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              Destiny
            </div>
          </div>

          <div
            className="
              rounded-2xl border border-white/10
              bg-white/[0.03]
              p-4 text-center
            "
          >
            <div className="text-lg font-bold text-white">
              ☾
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              Cosmic
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between">
          <Link
            href={slug}
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-violet-500/20
              bg-violet-500/10
              px-6 py-3
              font-medium
              text-violet-300
              transition-all duration-300
              hover:border-violet-400/40
              hover:bg-violet-500/20
              hover:gap-4
            "
          >
            Explore Further
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div
            className="
              flex h-14 w-14 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.03]
              transition-all duration-500
              group-hover:border-violet-400/30
              group-hover:bg-violet-500/10
              group-hover:rotate-180
            "
          >
            <Stars className="h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Animated Bottom Gradient */}
      {/* ========================================================= */}

      <div
        className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-gradient-to-r
          from-violet-400
          via-fuchsia-400
          to-cyan-400
          transition-all duration-700
          group-hover:w-full
        "
      />

      {/* Corner Glow */}

      <div
        className="
          absolute -right-20 -top-20 h-40 w-40
          rounded-full bg-violet-500/10 blur-3xl
          opacity-0 transition-opacity duration-700
          group-hover:opacity-100
        "
      />

      <div
        className="
          absolute -bottom-20 -left-20 h-40 w-40
          rounded-full bg-fuchsia-500/10 blur-3xl
          opacity-0 transition-opacity duration-700
          group-hover:opacity-100
        "
      />
    </article>
  );
}