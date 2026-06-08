"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sparkles,
  ChevronRight,
  BookOpen,
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

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-3xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                <Sparkles className="h-5 w-5 text-violet-300 transition-transform duration-500 group-hover:rotate-12" />
              </div>

              <div>
                <h1 className="text-lg font-bold text-white">
                  Echoes of Destiny
                </h1>

                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Literary Sanctuary
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/newsletter"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20 hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4" />
                Subscribe

                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[320px] border-l border-white/10 bg-black/90 backdrop-blur-3xl transition-transform duration-500 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center border-b border-white/10 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                <Sparkles className="h-5 w-5 text-violet-300" />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Echoes of Destiny
                </h2>

                <p className="text-xs text-zinc-500">
                  Literary Sanctuary
                </p>
              </div>
            </div>
          </div>

          <nav className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                      isActive
                        ? "bg-violet-500/10 text-violet-300"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>

                    <ChevronRight className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <Link
                href="/newsletter"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-medium text-black transition hover:scale-[1.02]"
              >
                <BookOpen className="h-5 w-5" />
                Subscribe to Newsletter
              </Link>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-relaxed text-zinc-500">
                Stories, reflections, memories, destiny, and meaningful words
                gathered into one literary sanctuary.
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}