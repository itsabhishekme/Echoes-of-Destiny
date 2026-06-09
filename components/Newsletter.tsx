"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  Bell,
  Feather,
  BookOpen,
  Heart,
  ArrowRight,
  Star,
  Quote,
  ShieldCheck,
  PenTool,
  Users,
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const benefits = [
    {
      icon: Feather,
      title: "Exclusive Reflections",
      description:
        "Private letters, personal insights, and behind-the-scenes thoughts shared only with subscribers.",
    },
    {
      icon: BookOpen,
      title: "New Stories & Books",
      description:
        "Be the first to know about upcoming books, chapters, releases, and literary projects.",
    },
    {
      icon: Heart,
      title: "Meaningful Inspiration",
      description:
        "Words crafted to inspire deeper thinking, self-discovery, and personal growth.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Readers",
    },
    {
      icon: PenTool,
      value: "250+",
      label: "Articles",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Rating",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Animated Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[220px]" />

        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-fuchsia-600/15 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-violet-950/40 via-black/70 to-fuchsia-950/40 backdrop-blur-3xl shadow-[0_0_100px_rgba(139,92,246,0.15)]">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative p-10 md:p-16 xl:p-20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">
                  <Sparkles className="h-4 w-4 text-violet-300" />
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-violet-300">
                    Literary Newsletter
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">
                  Stay Connected
                  <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                    To Every Echo
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                  Receive thoughtful reflections, inspiring letters, exclusive
                  stories, and updates from the world of writing—delivered
                  beautifully to your inbox.
                </p>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {stats.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                    >
                      <item.icon className="mb-3 h-5 w-5 text-violet-300" />

                      <div className="text-2xl font-bold text-white">
                        {item.value}
                      </div>

                      <div className="text-sm text-zinc-500">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mt-14 space-y-6">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="group flex gap-5 rounded-3xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10">
                        <item.icon className="h-6 w-6 text-violet-300" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <Quote className="mb-4 h-6 w-6 text-violet-300" />

                  <p className="italic leading-relaxed text-zinc-300">
                    Every story leaves an echo. Every echo carries a destiny.
                    Join a community where words become journeys.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex items-center p-10 md:p-16 xl:p-20">
              <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-500/5 via-transparent to-transparent" />

              <div className="relative z-10 w-full">
                {!subscribed ? (
                  <>
                    {/* Icon */}
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10">
                      <Bell className="h-12 w-12 text-violet-300" />
                    </div>

                    <h3 className="text-4xl font-bold text-white">
                      Join The Journey
                    </h3>

                    <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                      Become part of a growing circle of readers, dreamers,
                      thinkers, and storytellers receiving curated inspiration
                      every month.
                    </p>

                    {/* Form */}
                    <form
                      onSubmit={handleSubmit}
                      className="mt-10 space-y-5"
                    >
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="h-16 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-14 pr-5 text-white outline-none backdrop-blur-xl transition-all placeholder:text-zinc-500 focus:border-violet-400/40 focus:bg-white/[0.06]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-8 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                      >
                        <Send className="h-5 w-5" />

                        <span>Subscribe Now</span>

                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>

                    {/* Features */}
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        Privacy Protected
                      </div>

                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        No Spam Ever
                      </div>

                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <Heart className="h-4 w-4 text-pink-400" />
                        Crafted With Intention
                      </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-zinc-500">
                      Unsubscribe anytime. We respect your inbox.
                    </p>
                  </>
                ) : (
                  <div className="rounded-[36px] border border-emerald-500/20 bg-emerald-500/10 p-12 text-center backdrop-blur-xl">
                    <CheckCircle2 className="mx-auto h-20 w-20 text-emerald-400" />

                    <h3 className="mt-8 text-4xl font-bold text-white">
                      Welcome Aboard
                    </h3>

                    <p className="mx-auto mt-5 max-w-md leading-relaxed text-zinc-300">
                      Thank you for subscribing. Your place in the community is
                      confirmed, and your next inspiring letter will arrive
                      soon.
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-5 py-3 text-sm text-emerald-300">
                      <Sparkles className="h-4 w-4" />
                      Subscription Successful
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 bg-black/30 px-10 py-7 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
              <div className="flex flex-wrap items-center gap-3">
                <Sparkles className="h-4 w-4 text-violet-300" />

                <span className="text-sm text-zinc-400">
                  Stories • Reflections • Destiny • Books • Inspiration •
                  Letters
                </span>
              </div>

              <div className="text-sm text-zinc-500">
                Join thousands of readers discovering meaningful stories every
                month.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}