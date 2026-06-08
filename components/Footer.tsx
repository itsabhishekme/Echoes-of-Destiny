"use client";

import Link from "next/link";
import {
  Heart,
  Mail,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Feather,
  Stars,
  Crown,
  Quote,
  PenTool,
  ScrollText,
  Compass,
  MoonStar,
  Gem,
  ChevronRight,
  Shield,
  Library,
  PenLine,
  ArrowRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Books", href: "/books" },
  { name: "Destiny", href: "/destiny" },
  { name: "Soulmate", href: "/soulmate" },
  { name: "Echoes", href: "/echoes" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Contact", href: "/contact" },
];

const explore = [
  {
    name: "Reflections",
    href: "/blog",
    icon: Feather,
  },
  {
    name: "Letters",
    href: "/blog",
    icon: ScrollText,
  },
  {
    name: "Stories",
    href: "/blog",
    icon: PenTool,
  },
  {
    name: "Memories",
    href: "/echoes",
    icon: Heart,
  },
  {
    name: "Purpose",
    href: "/destiny",
    icon: Compass,
  },
  {
    name: "Connections",
    href: "/soulmate",
    icon: MoonStar,
  },
];

const quickStats = [
  {
    value: "100+",
    label: "Reflections",
  },
  {
    value: "∞",
    label: "Stories",
  },
  {
    value: "24/7",
    label: "Inspiration",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[220px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-600/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ====================================================== */}
      {/* NEWSLETTER CTA */}
      {/* ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/70 via-black/50 to-fuchsia-950/70 p-10 backdrop-blur-3xl md:p-16 xl:p-20">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">
                <Mail className="h-4 w-4 text-violet-300" />

                <span className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Literary Newsletter
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Stay Connected
                <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  To Every Echo
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Receive reflections, letters, stories, books,
                creative inspiration, and thoughtful insights
                delivered directly to your inbox.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
                  Weekly Reflections
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
                  New Books
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
                  Exclusive Letters
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <Link
                href="/newsletter"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Subscribe Now

                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>

              <p className="text-center text-sm text-zinc-500">
                No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* MAIN FOOTER */}
      {/* ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* ====================================================== */}
          {/* BRAND */}
          {/* ====================================================== */}

          <div>
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10">
                <Sparkles className="h-8 w-8 text-violet-300" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  Echoes of Destiny
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Stories • Letters • Reflections • Destiny
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md text-base leading-relaxed text-zinc-400">
              A literary sanctuary where memories linger,
              stories find their voice, and destiny reveals
              itself through words that continue to echo
              through time.
            </p>

            <div className="mt-10 flex items-center gap-3 text-zinc-500">
              <Feather className="h-4 w-4" />

              <span>
                Written for dreamers, seekers, and storytellers.
              </span>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl"
                >
                  <div className="text-2xl font-bold text-white">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ====================================================== */}
          {/* NAVIGATION */}
          {/* ====================================================== */}

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                <Compass className="h-5 w-5 text-violet-300" />
              </div>

              <h4 className="text-xl font-semibold text-white">
                Navigation
              </h4>
            </div>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-zinc-400 transition-all duration-300 hover:text-violet-300"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ====================================================== */}
          {/* EXPLORE */}
          {/* ====================================================== */}

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10">
                <Gem className="h-5 w-5 text-fuchsia-300" />
              </div>

              <h4 className="text-xl font-semibold text-white">
                Explore
              </h4>
            </div>

            <ul className="space-y-5">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-zinc-400 transition-all duration-300 hover:text-violet-300"
                  >
                    <item.icon className="h-4 w-4" />

                    <span>{item.name}</span>

                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ====================================================== */}
          {/* FEATURED CARD */}
          {/* ====================================================== */}

          <div>
            <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                <Library className="h-8 w-8 text-violet-300" />
              </div>

              <h5 className="text-2xl font-bold text-white">
                Literary Collection
              </h5>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Explore books, essays, reflections,
                destiny writings, soulful letters,
                and timeless stories.
              </p>

              <Link
                href="/books"
                className="mt-8 inline-flex items-center gap-2 text-violet-300 transition-all duration-300 hover:gap-3"
              >
                Explore Collection

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-950/40 to-fuchsia-950/40 p-8 backdrop-blur-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Quote className="h-6 w-6 text-violet-300" />
              </div>

              <blockquote className="text-sm leading-relaxed text-zinc-300">
                "Some destinies arrive as people.
                Others arrive as words."
              </blockquote>

              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Echoes of Destiny
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* DIVIDER */}
        {/* ====================================================== */}

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ====================================================== */}
        {/* BOTTOM */}
        {/* ====================================================== */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Echoes of Destiny.
              All rights reserved.
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              A literary sanctuary for stories, memories,
              reflections, and meaningful connections.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-400">
              <Shield className="h-4 w-4 text-violet-300" />
              Privacy Focused
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-400">
              <PenLine className="h-4 w-4 text-fuchsia-300" />
              Original Writing
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-400">
              <Crown className="h-4 w-4 text-violet-300" />
              Curated Content
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* FINAL SIGNATURE */}
        {/* ====================================================== */}

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3 text-zinc-500">
              Crafted with
              <Heart className="h-4 w-4 fill-pink-400 text-pink-400" />
              for meaningful stories
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc-600">
              <Stars className="h-3.5 w-3.5" />
              Echoes Of Destiny
              <Stars className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}