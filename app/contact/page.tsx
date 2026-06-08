import type { Metadata } from "next";
import {
  Mail,
  Send,
  PenTool,
  BookOpen,
  Heart,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Echoes of Destiny for questions, collaborations, feedback, and literary conversations.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[220px]" />
        <div className="absolute right-0 top-32 h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-600/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <Mail className="h-4 w-4 text-violet-300" />
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-300">
              Get In Touch
            </span>
          </div>

          <h1 className="text-6xl font-bold text-white md:text-8xl">
            Contact
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Echoes of Destiny
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Whether you wish to share your thoughts, discuss a book, ask a
            question, or simply connect through words, your message is always
            welcome.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <Mail className="h-8 w-8 text-violet-300" />
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Contact Information
                </h2>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  Feel free to reach out regarding books, writing, reflections,
                  collaborations, or general inquiries.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-violet-300" />
                    <div>
                      <p className="text-sm text-zinc-500">Email</p>
                      <p className="text-white">
                        hello@echoesofdestiny.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-violet-300" />
                    <div>
                      <p className="text-sm text-zinc-500">Location</p>
                      <p className="text-white">
                        Available Worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 text-violet-300" />
                    <div>
                      <p className="text-sm text-zinc-500">Response Time</p>
                      <p className="text-white">
                        Within 24–48 Hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Why Reach Out?
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <BookOpen className="h-5 w-5 text-violet-300" />
                    <span className="text-zinc-400">
                      Questions about books and publications
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <PenTool className="h-5 w-5 text-violet-300" />
                    <span className="text-zinc-400">
                      Writing and literary discussions
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <Heart className="h-5 w-5 text-violet-300" />
                    <span className="text-zinc-400">
                      Sharing personal reflections and feedback
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <Sparkles className="h-5 w-5 text-violet-300" />
                    <span className="text-zinc-400">
                      Collaboration opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl md:p-12">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-white">
                  Send a Message
                </h2>

                <p className="mt-4 text-zinc-400">
                  Share your thoughts and begin a conversation.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                    />
                  </div>
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

                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can I help?"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Message
                  </label>

                  <textarea
                    rows={8}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-violet-400/30"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 text-center backdrop-blur-3xl md:p-20">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Every Meaningful Connection
              <span className="block mt-3 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Begins With A Message
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Thank you for visiting Echoes of Destiny. Your words, thoughts,
              and reflections are always valued.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}