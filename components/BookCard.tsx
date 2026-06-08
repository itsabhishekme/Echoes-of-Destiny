"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  ArrowRight,
  Calendar,
  Star,
  Heart,
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
    <article
      className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        featured
          ? "border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-black/40 to-fuchsia-950/40"
          : "border-white/10 bg-white/[0.03]"
      } backdrop-blur-2xl`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* Cover */}
      <div className="relative h-[420px] overflow-hidden">
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <BookOpen className="h-10 w-10 text-violet-300" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                {title}
              </h3>

              {subtitle && (
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-300">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute left-5 top-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-medium text-yellow-300">
              <Star className="h-3.5 w-3.5 fill-current" />
              Featured Book
            </div>
          </div>
        )}

        {/* Category */}
        {category && (
          <div className="absolute bottom-5 left-5">
            <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl">
              {category}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-8">
        <div className="mb-4 flex items-center justify-between">
          {year ? (
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Calendar className="h-4 w-4" />
              {year}
            </div>
          ) : (
            <div />
          )}

          <button
            className="rounded-full border border-white/10 p-2 text-zinc-400 transition-all hover:border-pink-400/20 hover:text-pink-300"
            aria-label="Favorite"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-violet-300">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-zinc-500">
            {subtitle}
          </p>
        )}

        <p className="mt-5 line-clamp-4 leading-relaxed text-zinc-400">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <Link
            href={`/books/${slug}`}
            className="inline-flex items-center gap-2 font-medium text-violet-300 transition-all duration-300 hover:gap-3"
          >
            Read Details
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10" />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
    </article>
  );
}