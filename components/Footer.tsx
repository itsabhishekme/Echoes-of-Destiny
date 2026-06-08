"use client";

import Link from "next/link";
import {
  Heart,
  Mail,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Feather,
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
  { name: "Reflections", href: "/blog" },
  { name: "Letters", href: "/blog" },
  { name: "Stories", href: "/blog" },
  { name: "Memories", href: "/echoes" },
  { name: "Purpose", href: "/destiny" },
  { name: "Connections", href: "/soulmate" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      {/* Newsletter CTA */}
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-10 backdrop-blur-3xl md:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                <Mail className="h-4 w-4 text-violet-300" />
                <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
                  Newsletter
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Stay Connected To Every Echo
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Receive stories, reflections, letters, and literary insights
                delivered directly to your inbox.
              </p>
            </div>

            <Link
              href="/newsletter"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Subscribe Now
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                <Sparkles className="h-7 w-7 text-violet-300" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Echoes of Destiny
                </h3>

                <p className="text-sm text-zinc-500">
                  Stories • Reflections • Destiny
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-relaxed text-zinc-400">
              A literary sanctuary where memories linger, stories find their
              voice, and destiny reveals itself through words that continue to
              echo through time.
            </p>

            <div className="mt-8 flex items-center gap-3 text-zinc-500">
              <Feather className="h-4 w-4" />
              Written for dreamers, seekers, and storytellers.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Navigation
            </h4>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-violet-300"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Explore
            </h4>

            <ul className="space-y-4">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-violet-300"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                <BookOpen className="h-6 w-6 text-violet-300" />
              </div>

              <h5 className="font-semibold text-white">
                Literary Collection
              </h5>

              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Explore books, essays, reflections, and timeless letters.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Echoes of Destiny. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            Crafted with
            <Heart className="h-4 w-4 fill-current text-pink-400" />
            for meaningful stories
          </div>
        </div>
      </div>
    </footer>
  );
}