"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Star,
  Heart,
  Sparkles,
  Bookmark,
  Eye,
  Quote,
} from "lucide-react";

interface BookCardProps {
  title: string;
  subtitle?: string;
  description: string;
  cover?: string;
  slug: string;
  year?: string;
  category?: string;
  featured?: boolean;
}

export default function BookCard({
  title,
  subtitle,
  description,
  cover,
  slug,
  year,
  category,
  featured = false,
}: BookCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-3xl transition-all duration-700 hover:-translate-y-3 hover:border-violet-400/30 hover:shadow-[0_40px_100px_-20px_rgba(139,92,246,0.35)]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:bg-violet-500/20" />
        <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl transition-all duration-700 group-hover:bg-fuchsia-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      {/* Featured Glow Border */}
      {featured && (
        <>
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-yellow-500/20 via-violet-500/20 to-fuchsia-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute inset-[1px] rounded-[35px] border border-yellow-400/20" />
        </>
      )}

      {/* Cover Section */}
      <div className="relative h-[460px] overflow-hidden">
        {cover ? (
          <>
            <Image
              src={cover}
              alt={title}
              fill
              priority={featured}
              className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-fuchsia-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                  <BookOpen className="h-12 w-12 text-violet-300" />
                </div>
              </div>

              <h3 className="max-w-xs text-3xl font-bold leading-tight text-white">
                {title}
              </h3>

              {subtitle && (
                <p className="mt-4 text-xs uppercase tracking-[0.35em] text-zinc-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
          {featured ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 backdrop-blur-xl">
              <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
              <span className="text-xs font-semibold tracking-wide text-yellow-300">
                Featured Book
              </span>
            </div>
          ) : (
            <div />
          )}

          <button
            aria-label="Add to favorites"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-pink-300"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Category */}
        {category && (
          <div className="absolute bottom-5 left-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              {category}
            </div>
          </div>
        )}

        {/* Floating Stats */}
        <div className="absolute bottom-5 right-5">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
            <Eye className="h-4 w-4 text-zinc-300" />
            <span className="text-xs text-zinc-300">Read Story</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Meta */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {year && (
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <CalendarDays className="h-4 w-4" />
                {year}
              </div>
            )}

            <div className="h-1 w-1 rounded-full bg-zinc-700" />

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Bookmark className="h-4 w-4" />
              Book
            </div>
          </div>

          <Quote className="h-5 w-5 text-violet-400/60" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold leading-tight text-white transition-colors duration-500 group-hover:text-violet-300">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-sm font-medium tracking-wide text-zinc-500">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="mt-6 line-clamp-4 text-[15px] leading-8 text-zinc-400">
          {description}
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Link
            href={`/books/${slug}`}
            className="inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:gap-4"
          >
            Explore Book
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
              <BookOpen className="h-5 w-5 text-zinc-300 transition-colors duration-500 group-hover:text-violet-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />

      {/* Animated Side Accent */}
      <div className="absolute right-0 top-0 h-0 w-[3px] bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:h-full" />
    </article>
  );
}