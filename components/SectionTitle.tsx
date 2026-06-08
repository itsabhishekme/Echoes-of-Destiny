"use client";

import { Sparkles } from "lucide-react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  gradient?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  maxWidth = "lg",
  gradient = true,
}: SectionTitleProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const widths = {
    sm: "max-w-xl",
    md: "max-w-2xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  return (
    <div
      className={`mx-auto flex flex-col ${alignment[align]} ${widths[maxWidth]}`}
    >
      {badge && (
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${
          gradient
            ? "bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
          {subtitle}
        </p>
      )}

      <div className="mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" />
    </div>
  );
}