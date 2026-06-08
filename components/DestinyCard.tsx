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
} from "lucide-react";

interface DestinyCardProps {
  title: string;
  description: string;
  slug?: string;
  category?: string;
  quote?: string;
  icon?: "destiny" | "love" | "time" | "journey" | "cosmic";
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
      className={`group relative overflow-hidden rounded-[36px] border transition-all duration-700 hover:-translate-y-3 ${
        featured
          ? "border-violet-500/30 bg-gradient-to-br from-violet-950/60 via-black/60 to-fuchsia-950/60"
          : "border-white/10 bg-white/[0.03]"
      } backdrop-blur-3xl`}
    >
      {/* Animated Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Cosmic Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating Stars */}
      <div className="pointer-events-none absolute inset-0">
        <Sparkles className="absolute left-8 top-8 h-4 w-4 text-violet-300/40" />
        <Sparkles className="absolute right-10 top-16 h-3 w-3 text-fuchsia-300/40" />
        <Sparkles className="absolute bottom-16 left-10 h-3 w-3 text-cyan-300/40" />
      </div>

      <div className="relative z-10 p-8 md:p-10">
        {/* Category */}
        <div className="mb-8 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
            <Sparkles className="h-3 w-3" />
            {category}
          </span>

          {featured && (
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              Featured
            </span>
          )}
        </div>

        {/* Icon */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20 transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-10 w-10 text-violet-300" />
        </div>

        {/* Title */}
        <h2 className="mb-5 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base leading-relaxed text-zinc-400">
          {description}
        </p>

        {/* Quote */}
        {quote && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="italic leading-relaxed text-zinc-300">
              “{quote}”
            </p>
          </div>
        )}

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Link
            href={slug}
            className="inline-flex items-center gap-2 font-medium text-violet-300 transition-all duration-300 hover:gap-3"
          >
            Explore Further
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
            <Stars className="h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
          </div>
        </div>
      </div>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
    </article>
  );
}