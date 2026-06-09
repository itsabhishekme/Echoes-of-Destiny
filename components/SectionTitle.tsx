"use client";

import { Sparkles, Stars, ChevronRight } from "lucide-react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  gradient?: boolean;
  showLine?: boolean;
  showGlow?: boolean;
  showDecoration?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  maxWidth = "lg",
  gradient = true,
  showLine = true,
  showGlow = true,
  showDecoration = true,
}: SectionTitleProps) {
  const alignment = {
    left: {
      container: "items-start text-left",
      line: "justify-start",
      badge: "justify-start",
    },
    center: {
      container: "items-center text-center",
      line: "justify-center",
      badge: "justify-center",
    },
    right: {
      container: "items-end text-right",
      line: "justify-end",
      badge: "justify-end",
    },
  };

  const widths = {
    sm: "max-w-xl",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  };

  return (
    <section
      className={`relative mx-auto flex flex-col ${alignment[align].container} ${widths[maxWidth]}`}
    >
      {/* Background Glow */}
      {showGlow && (
        <>
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[140px]" />
        </>
      )}

      {/* Floating Decorations */}
      {showDecoration && (
        <>
          <Stars className="absolute -left-4 top-0 h-5 w-5 animate-pulse text-violet-400/60" />
          <Stars className="absolute -right-4 top-10 h-4 w-4 animate-pulse text-cyan-400/60" />

          <div className="absolute left-10 top-16 h-2 w-2 rounded-full bg-violet-400 blur-sm" />
          <div className="absolute right-16 top-24 h-2 w-2 rounded-full bg-fuchsia-400 blur-sm" />
          <div className="absolute left-1/3 top-4 h-1.5 w-1.5 rounded-full bg-cyan-400 blur-sm" />
        </>
      )}

      {/* Badge */}
      {badge && (
        <div
          className={`relative mb-8 flex w-full ${alignment[align].badge}`}
        >
          <div className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/30 hover:bg-violet-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-300" />

              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-xs font-semibold uppercase tracking-[0.35em] text-transparent">
                {badge}
              </span>

              <ChevronRight className="h-3.5 w-3.5 text-violet-300/80" />
            </div>
          </div>
        </div>
      )}

      {/* Title */}
      <div className="relative">
        <h2
          className={`relative text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl ${
            gradient
              ? "bg-gradient-to-r from-white via-violet-100 to-cyan-100 bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          {title}
        </h2>

        {/* Title Glow */}
        {gradient && (
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl"
          />
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-zinc-300 md:text-2xl">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-500 md:text-lg">
          {description}
        </p>
      )}

      {/* Premium Divider */}
      {showLine && (
        <div
          className={`mt-12 flex w-full ${alignment[align].line}`}
        >
          <div className="relative">
            <div className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />
            </div>

            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black p-1">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}