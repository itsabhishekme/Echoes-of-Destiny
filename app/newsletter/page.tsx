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
  ArrowRight,
  ScrollText,
  MoonStar,
  Gem,
  Crown,
  Star,
  Shield,
  Inbox,
  PenLine,
  Library,
  Orbit,
  Wand2,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the Echoes of Destiny newsletter and receive reflections, stories, letters, insights, books, and soulful inspiration directly in your inbox.",
};

const benefits = [
  {
    icon: Feather,
    title: "Exclusive Reflections",
    description:
      "Receive thoughtful essays, private reflections, and deeper writings available only to subscribers.",
  },
  {
    icon: BookOpen,
    title: "Books & New Releases",
    description:
      "Get early access to book announcements, launches, previews, and literary projects.",
  },
  {
    icon: Heart,
    title: "Meaningful Inspiration",
    description:
      "Explore ideas around destiny, memory, purpose, relationships, and personal growth.",
  },
];

const includes = [
  "New articles and featured stories",
  "Subscriber-only reflections",
  "Book announcements and previews",
  "Creative writing inspiration",
  "Letters and soulful essays",
  "Monthly literary highlights",
  "Behind-the-scenes writing updates",
  "Special editions and curated collections",
];

const highlights = [
  {
    icon: ScrollText,
    title: "Letters",
    description:
      "Personal letters, reflections, and stories delivered directly to readers.",
  },
  {
    icon: MoonStar,
    title: "Destiny",
    description:
      "Thought-provoking insights exploring fate, synchronicity, and life's deeper meaning.",
  },
  {
    icon: Orbit,
    title: "Connection",
    description:
      "Ideas that inspire connection with yourself, others, and your journey.",
  },
  {
    icon: Library,
    title: "Literature",
    description:
      "Discover books, essays, poetry, and creative works worth exploring.",
  },
];

const testimonials = [
  {
    quote:
      "A peaceful corner of the internet where thoughtful writing still matters.",
  },
  {
    quote:
      "Every newsletter feels like opening a handwritten letter from a trusted friend.",
  },
  {
    quote:
      "Meaningful, inspiring, and beautifully written from beginning to end.",
  },
];

export default function NewsletterPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[280px]" />

        <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[220px]" />

        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="px-6 pt-32 pb-28">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <Mail className="h-4 w-4 text-violet-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Literary Newsletter
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">
              Stay Connected
            </span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              To Every Echo
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Join a growing community of readers receiving stories,
            reflections, letters, books, and soulful inspiration
            directly in their inbox.
          </p>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Inbox className="mx-auto mb-4 h-8 w-8 text-violet-300" />
              <h3 className="font-semibold text-white">
                Weekly Insights
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <BookOpen className="mx-auto mb-4 h-8 w-8 text-fuchsia-300" />
              <h3 className="font-semibold text-white">
                New Books
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Heart className="mx-auto mb-4 h-8 w-8 text-cyan-300" />
              <h3 className="font-semibold text-white">
                Inspiration
              </h3>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Stars className="mx-auto mb-4 h-8 w-8 text-violet-300" />
              <h3 className="font-semibold text-white">
                Exclusive Content
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* NEWSLETTER FORM */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}

              <div className="relative overflow-hidden p-10 md:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-transparent to-fuchsia-950/30" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10">
                    <Bell className="h-12 w-12 text-violet-300" />
                  </div>

                  <h2 className="text-5xl font-bold text-white">
                    Subscribe Today
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                    Receive carefully curated content designed to inspire
                    reflection, creativity, imagination, and meaningful
                    conversations.
                  </p>

                  <div className="mt-10 space-y-5">
                    {includes.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-300" />

                        <span className="text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="p-10 md:p-16">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  <Gem className="h-4 w-4" />
                  Free Subscription
                </div>

                <h3 className="text-4xl font-bold text-white">
                  Join The Community
                </h3>

                <p className="mt-5 text-zinc-400">
                  Become part of a literary journey filled with
                  stories, memories, reflections, and inspiration.
                </p>

                <form className="mt-10 space-y-6">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-white px-8 py-5 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="h-5 w-5" />

                    Subscribe Now

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* ===================================================== */}
      {/* BENEFITS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Why Subscribe
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              What You'll Receive
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/20"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-10 w-10 text-violet-300" />
                </div>

                <h3 className="mb-5 text-3xl font-bold text-white">
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

      {/* ===================================================== */}
      {/* HIGHLIGHTS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-white">
              Newsletter Highlights
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <item.icon className="mb-6 h-10 w-10 text-violet-300" />

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TESTIMONIALS */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
              >
                <Quote className="mb-6 h-8 w-8 text-violet-300" />

                <p className="text-lg leading-relaxed text-zinc-300">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* QUOTE */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <Quote className="mx-auto mb-10 h-14 w-14 text-violet-300" />

            <blockquote className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              “Every letter begins
              <br />
              with a reader.
              <br />
              Every journey begins
              <br />
              with a subscription.”
            </blockquote>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-400">
                <Star className="h-4 w-4 text-violet-300" />
                Echoes Of Destiny
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-14 text-center backdrop-blur-3xl md:p-24">
            <div className="mb-10 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                <Crown className="h-12 w-12 text-violet-300" />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Become Part Of The Story
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Follow the echoes of stories, books, reflections,
              memories, creativity, and destiny delivered directly
              to your inbox.
            </p>

            <div className="mt-14 flex justify-center">
              <button className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105">
                <PenLine className="h-5 w-5" />

                Subscribe Today

                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-400">
                <Shield className="h-4 w-4 text-violet-300" />
                Privacy respected • No spam • Unsubscribe anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}