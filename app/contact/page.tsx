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
  MessageCircle,
  Feather,
  Quote,
  Stars,
  ArrowRight,
  ScrollText,
  MoonStar,
  Gem,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Vihaan and Echoes of Destiny for literary conversations, books, collaborations, reflections, and meaningful discussions.",
};

const reasons = [
  {
    icon: BookOpen,
    title: "Books & Publications",
    description:
      "Questions regarding published books, upcoming releases, previews, and literary projects.",
  },
  {
    icon: PenTool,
    title: "Writing Discussions",
    description:
      "Meaningful conversations about writing, creativity, storytelling, and personal expression.",
  },
  {
    icon: Heart,
    title: "Reader Reflections",
    description:
      "Share personal insights, emotional experiences, and thoughts inspired by the books.",
  },
  {
    icon: Sparkles,
    title: "Collaborations",
    description:
      "Partnerships, interviews, guest appearances, podcasts, and creative opportunities.",
  },
];

const values = [
  {
    icon: Feather,
    title: "Authentic Conversations",
    description:
      "Every message is treated with care, respect, and genuine attention.",
  },
  {
    icon: ScrollText,
    title: "Meaningful Dialogue",
    description:
      "Thoughtful discussions often begin with a single sincere message.",
  },
  {
    icon: MoonStar,
    title: "Shared Reflection",
    description:
      "Stories become more meaningful when they create connection.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[260px]" />

        <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[200px]" />

        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-cyan-600/10 blur-[200px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <Mail className="h-4 w-4 text-violet-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Connect Through Words
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">
              Contact
            </span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Echoes of Destiny
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Whether you wish to discuss a book, share a reflection,
            ask a question, explore collaboration opportunities,
            or simply connect through meaningful conversation,
            your message is always welcome.
          </p>

          <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Mail className="mx-auto mb-5 h-8 w-8 text-violet-300" />

              <h3 className="text-xl font-semibold text-white">
                Open Communication
              </h3>

              <p className="mt-3 text-zinc-400">
                Every thoughtful message deserves attention.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Heart className="mx-auto mb-5 h-8 w-8 text-fuchsia-300" />

              <h3 className="text-xl font-semibold text-white">
                Reader Connection
              </h3>

              <p className="mt-3 text-zinc-400">
                Built around meaningful conversations and shared stories.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Stars className="mx-auto mb-5 h-8 w-8 text-cyan-300" />

              <h3 className="text-xl font-semibold text-white">
                Creative Opportunities
              </h3>

              <p className="mt-3 text-zinc-400">
                Open to literary and creative collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTACT SECTION */}
      {/* ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 xl:grid-cols-[430px_1fr]">
            {/* ====================================== */}
            {/* LEFT PANEL */}
            {/* ====================================== */}

            <div className="space-y-8">
              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <MessageCircle className="h-10 w-10 text-violet-300" />
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Contact Information
                </h2>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  Feel free to reach out regarding books,
                  writing, reflections, literary projects,
                  collaborations, or general inquiries.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="flex gap-5">
                    <Mail className="mt-1 h-5 w-5 text-violet-300" />

                    <div>
                      <p className="text-sm text-zinc-500">
                        Email
                      </p>

                      <p className="text-white">
                        hello@echoesofdestiny.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <MapPin className="mt-1 h-5 w-5 text-violet-300" />

                    <div>
                      <p className="text-sm text-zinc-500">
                        Availability
                      </p>

                      <p className="text-white">
                        Worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <Clock className="mt-1 h-5 w-5 text-violet-300" />

                    <div>
                      <p className="text-sm text-zinc-500">
                        Response Time
                      </p>

                      <p className="text-white">
                        Usually within 24–48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
                <h3 className="mb-8 text-2xl font-bold text-white">
                  Why Reach Out?
                </h3>

                <div className="space-y-6">
                  {reasons.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <item.icon className="mt-1 h-5 w-5 text-violet-300" />

                      <div>
                        <h4 className="font-medium text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
                <h3 className="mb-8 text-2xl font-bold text-white">
                  Core Values
                </h3>

                <div className="space-y-6">
                  {values.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <item.icon className="mt-1 h-5 w-5 text-violet-300" />

                      <div>
                        <h4 className="font-medium text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ====================================== */}
            {/* EXTENDED CONTACT FORM */}
            {/* ====================================== */}

            <div className="rounded-[42px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl md:p-12 xl:p-14">
              <div className="mb-12">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  <Gem className="h-4 w-4" />
                  Send A Message
                </div>

                <h2 className="text-5xl font-bold text-white">
                  Start A Conversation
                </h2>

                <p className="mt-5 text-lg text-zinc-400 max-w-2xl">
                  Share your thoughts, reflections, questions,
                  collaboration ideas, personal experiences,
                  spiritual journeys, writing inquiries, media
                  requests, or simply connect through a meaningful
                  conversation.
                </p>
              </div>

              <form className="space-y-8">

                {/* Name */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      First Name *
                    </label>

                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Country
                    </label>

                    <input
                      type="text"
                      placeholder="India"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="Bangalore"
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="inquiryType" className="mb-3 block text-sm text-zinc-400">
                    Inquiry Type
                  </label>

                  <select id="inquiryType" className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10">
                    <option className="bg-zinc-900">
                      General Inquiry
                    </option>

                    <option className="bg-zinc-900">
                      Collaboration
                    </option>

                    <option className="bg-zinc-900">
                      Writing & Publishing
                    </option>

                    <option className="bg-zinc-900">
                      Media & Interview
                    </option>

                    <option className="bg-zinc-900">
                      Spiritual Discussion
                    </option>

                    <option className="bg-zinc-900">
                      Feedback
                    </option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Subject *
                  </label>

                  <input
                    type="text"
                    placeholder="How can I help?"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Website / Social Profile
                  </label>

                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Message *
                  </label>

                  <textarea
                    rows={10}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Additional Notes
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Any extra details you'd like to share..."
                    className="w-full resize-none rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/10"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 text-sm text-zinc-400">
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10"
                    />

                    <span>
                      I agree to the collection and processing
                      of my submitted information.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-sm text-zinc-400">
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10"
                    />

                    <span>
                      Subscribe me to occasional updates,
                      articles, and announcements.
                    </span>
                  </label>
                </div>

                {/* Upload */}
                <div>
                  <label htmlFor="attachment" className="mb-3 block text-sm text-zinc-400">
                    Attachment (Optional)
                  </label>

                  <input
                    id="attachment"
                    type="file"
                    className="w-full rounded-3xl border border-dashed border-white/10 bg-white/5 px-6 py-5 text-zinc-400 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-5 file:py-2 file:text-black"
                  />
                </div>

                {/* Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
                  >
                    <Send className="h-5 w-5" />

                    Send Message

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </form>
            </div>

            {/* close grid and container for contact section */}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* QUOTE */}
      {/* ===================================================== */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-14 text-center backdrop-blur-3xl md:p-24">
            <Quote className="mx-auto mb-10 h-14 w-14 text-violet-300" />

            <h2 className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              Every Meaningful Connection
              <span className="mt-4 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Begins With A Message
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Thank you for visiting Echoes of Destiny.
              Your thoughts, reflections, and words are
              always valued and appreciated.
            </p>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-400">
                <CheckCircle2 className="h-4 w-4 text-violet-300" />
                Every message matters
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
