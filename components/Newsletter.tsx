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
    },
    {
      icon: BookOpen,
      title: "New Stories & Books",
    },
    {
      icon: Heart,
      title: "Meaningful Inspiration",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/50 via-black/40 to-fuchsia-950/50 backdrop-blur-3xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="relative p-10 md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-violet-300" />
                  <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
                    Newsletter
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white md:text-6xl">
                  Stay Connected
                  <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                    To Every Echo
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                  Receive stories, reflections, letters, book updates, and
                  thoughtful insights delivered directly to your inbox.
                </p>

                <div className="mt-10 space-y-5">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                        <item.icon className="h-5 w-5 text-violet-300" />
                      </div>

                      <span className="text-zinc-300">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center p-10 md:p-16">
              <div className="w-full">
                {!subscribed ? (
                  <>
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">
                      <Bell className="h-10 w-10 text-violet-300" />
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      Join The Journey
                    </h3>

                    <p className="mt-4 text-zinc-400">
                      Subscribe and become part of a growing community of
                      readers, dreamers, and storytellers.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-4"
                    >
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                      >
                        <Send className="h-5 w-5" />
                        Subscribe Now
                      </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-zinc-500">
                      No spam. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  <div className="rounded-[32px] border border-emerald-500/20 bg-emerald-500/10 p-10 text-center">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      Subscription Successful
                    </h3>

                    <p className="mt-4 text-zinc-300">
                      Thank you for joining the Echoes of Destiny community.
                      Your next literary journey begins soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="border-t border-white/10 bg-black/20 px-10 py-6 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-violet-300" />
                <span className="text-sm text-zinc-400">
                  Stories • Reflections • Destiny • Memories
                </span>
              </div>

              <div className="text-sm text-zinc-500">
                Join readers discovering meaningful stories every month.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}