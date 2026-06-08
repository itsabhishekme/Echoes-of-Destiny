import type { Metadata } from "next";
import {
  Mail,
  Sparkles,
  BookOpen,
  Feather,
  Heart,
  Stars,
  Bell,
  Send,
  CheckCircle2,
  Quote,
  PenTool,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the Echoes of Destiny newsletter and receive reflections, stories, letters, insights, and new releases directly in your inbox.",
};

const benefits = [
  {
    icon: Feather,
    title: "Exclusive Reflections",
    description:
      "Receive thoughtful essays, personal reflections, and writings not published elsewhere.",
  },
  {
    icon: BookOpen,
    title: "New Stories & Books",
    description:
      "Be the first to know about new articles, books, letters, and literary releases.",
  },
  {
    icon: Heart,
    title: "Meaningful Inspiration",
    description:
      "Discover ideas about memory, destiny, purpose, love, and personal growth.",
  },
];

const includes = [
  "New articles and featured stories",
  "Exclusive subscriber-only reflections",
  "Book announcements and updates",
  "Writing insights and creative inspiration",
  "Letters, memories, and destiny explorations",
  "Monthly highlights from Echoes of Destiny",
];

export default function NewsletterPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[250px]" />
        <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[200px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <Mail className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Literary Newsletter
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            Stay Connected To
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Every Echo
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Join readers who receive stories, reflections, letters, and new
            releases directly in their inbox. A quiet space for meaningful
            words, inspiration, and literary discoveries.
          </p>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="relative overflow-hidden p-10 md:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-transparent to-fuchsia-950/30" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">
                    <Bell className="h-10 w-10 text-violet-300" />
                  </div>

                  <h2 className="text-4xl font-bold text-white">
                    Subscribe Today
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                    Receive carefully curated content designed to inspire
                    reflection, creativity, and meaningful conversations.
                  </p>

                  <div className="mt-10 space-y-4">
                    {includes.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-300" />
                        <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="p-10 md:p-16">
                <h3 className="text-3xl font-bold text-white">
                  Join The Community
                </h3>

                <p className="mt-4 text-zinc-400">
                  Enter your details below and become part of the journey.
                </p>

                <form className="mt-10 space-y-6">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="h-5 w-5" />
                    Subscribe Now
                  </button>

                  <p className="text-center text-sm text-zinc-500">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-violet-300">
              Why Subscribe
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              What You'll Receive
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-8 w-8 text-violet-300" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-3xl md:p-20">
            <Quote className="mx-auto mb-8 h-12 w-12 text-violet-300" />

            <blockquote className="text-3xl leading-relaxed text-white md:text-5xl">
              “Every letter begins with a reader.
              <br />
              Every journey begins with a single subscription.”
            </blockquote>

            <p className="mt-10 text-zinc-500">
              — Echoes of Destiny
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 text-center backdrop-blur-3xl md:p-20">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <Stars className="h-10 w-10 text-violet-300" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Become Part Of The Story
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Follow the echoes of stories, reflections, books, memories, and
              destiny delivered directly to your inbox.
            </p>

            <div className="mt-10 flex justify-center">
              <button className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
                <PenTool className="h-5 w-5" />
                Subscribe Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}