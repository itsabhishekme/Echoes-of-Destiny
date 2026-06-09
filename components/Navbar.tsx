"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Sparkles,
  Stars,
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
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ============================= */}
      {/* BACKDROP GLOW */}
      {/* ============================= */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-40 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-0 top-[-120px] h-[260px] w-[260px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      {/* ============================= */}
      {/* NAVBAR */}
      {/* ============================= */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/60 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-3xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* ===================================== */}
            {/* LOGO */}
            {/* ===================================== */}
            <Link
              href="/"
              className="group flex items-center gap-4"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-xl transition-all duration-500 group-hover:bg-violet-500/30" />

                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
                  <Image
                    src="/logo.png"
                    alt="Echoes of Destiny"
                    width={56}
                    height={56}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold tracking-wide text-white">
                    Echoes of Destiny
                  </h1>

                  <Sparkles className="h-4 w-4 text-violet-300 opacity-80" />
                </div>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.38em] text-zinc-500">
                  Literary Sanctuary
                </p>
              </div>
            </Link>

            {/* ===================================== */}
            {/* DESKTOP MENU */}
            {/* ===================================== */}
            <nav className="hidden items-center lg:flex">
              <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-2xl">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 backdrop-blur-xl" />
                      )}

                      <span className="relative z-10">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ===================================== */}
            {/* CTA */}
            {/* ===================================== */}
            <div className="hidden lg:flex">
              <Link
                href="/newsletter"
                className="group relative overflow-hidden rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 px-5 py-3 text-sm font-medium text-white backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />

                  Subscribe

                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* ===================================== */}
            {/* MOBILE BUTTON */}
            {/* ===================================== */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label="Toggle Navigation"
              className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-2xl transition-all duration-300 hover:bg-white/10 lg:hidden"
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

      {/* ===================================== */}
      {/* MOBILE MENU */}
      {/* ===================================== */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
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

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[340px] max-w-[90vw] overflow-y-auto border-l border-white/10 bg-[#050505]/95 backdrop-blur-3xl transition-transform duration-500 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="relative overflow-hidden border-b border-white/10 px-6 py-6">
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="relative flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Echoes of Destiny"
                  width={60}
                  height={60}
                  className="h-14 w-14 object-cover"
                />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Echoes of Destiny
                </h2>

                <p className="text-xs tracking-widest text-zinc-500 uppercase">
                  Literary Sanctuary
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="p-6">
            <div className="space-y-3">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? "border-violet-500/20 bg-violet-500/10 text-violet-300"
                        : "border-white/5 bg-white/[0.03] text-zinc-400 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>

                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/newsletter"
                className="flex items-center justify-center gap-3 rounded-3xl bg-white px-6 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.02]"
              >
                <BookOpen className="h-5 w-5" />

                Subscribe to Newsletter
              </Link>
            </div>

            {/* Quote Card */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-2 text-violet-300">
                  <Stars className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Echoes of Destiny
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  Stories, memories, destiny, soul connections,
                  reflections, and timeless words gathered into
                  one beautiful literary sanctuary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}