import Link from "next/link";
import {
  ArrowRight,
  Feather,
  BookOpen,
  Heart,
  Sparkles,
  PenTool,
  Mail,
  ScrollText,
  Stars,
  Quote,
  Compass,
  MoonStar,
} from "lucide-react";

export const metadata = {
  title: "Echoes of Destiny",
  description:
    "A literary sanctuary where memories, destiny, emotions, dreams, and untold stories find their voice.",
};

const featuredWritings = [
  {
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain suspended between the heart and the horizon, waiting for a destination that may never arrive.",
  },
  {
    title: "Before I Became Me",
    excerpt:
      "A reflection on becoming, losing, remembering, and discovering the person hidden beneath the years.",
  },
  {
    title: "Echoes Across Time",
    excerpt:
      "Every memory leaves a footprint. Some fade. Others become the roads we continue to walk.",
  },
];

const pillars = [
  {
    icon: Heart,
    title: "Unspoken Emotions",
    description:
      "Letters and reflections carrying emotions too profound for ordinary conversations.",
  },
  {
    icon: Feather,
    title: "Soulful Writing",
    description:
      "Words woven with vulnerability, memory, wonder, and the beauty of introspection.",
  },
  {
    icon: Stars,
    title: "Destiny & Meaning",
    description:
      "Explorations of fate, purpose, synchronicity, and invisible threads connecting lives.",
  },
];

const journey = [
  {
    icon: ScrollText,
    title: "Letters",
    text: "Words written for moments, memories, dreams, and people who changed everything.",
  },
  {
    icon: Compass,
    title: "Destiny",
    text: "Stories exploring purpose, timing, coincidence, and life's hidden design.",
  },
  {
    icon: MoonStar,
    title: "Soul",
    text: "Reflections on growth, healing, connection, and the quiet wisdom within.",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* ================================================= */}
      {/* HERO SECTION                                      */}
      {/* ================================================= */}

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />
          <div className="absolute bottom-10 left-0 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
          <div className="absolute right-0 top-32 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-xs uppercase tracking-[0.35em] text-zinc-300">
              Literary Sanctuary
            </span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-none md:text-8xl xl:text-9xl">
            <span className="block text-white">Echoes</span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              of Destiny
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            A place where memories linger, letters remain unsent,
            dreams refuse to fade, and destiny whispers through every
            page written from the heart.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
            >
              Explore Stories

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/books"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20 hover:bg-white/10"
            >
              Discover Books
            </Link>
          </div>

          {/* Hero Stats */}

          <div className="mx-auto mt-24 grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <ScrollText className="mb-5 h-10 w-10 text-violet-300" />

              <h3 className="text-3xl font-bold text-white">
                Letters
              </h3>

              <p className="mt-3 text-zinc-400">
                Words written for memories, emotions, and the people
                who shaped our lives.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Heart className="mb-5 h-10 w-10 text-fuchsia-300" />

              <h3 className="text-3xl font-bold text-white">
                Reflections
              </h3>

              <p className="mt-3 text-zinc-400">
                Honest explorations of growth, healing, identity, and
                becoming.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <Stars className="mb-5 h-10 w-10 text-cyan-300" />

              <h3 className="text-3xl font-bold text-white">
                Destiny
              </h3>

              <p className="mt-3 text-zinc-400">
                Stories about timing, purpose, synchronicity, and
                invisible connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PHILOSOPHY                                        */}
      {/* ================================================= */}

      <section className="px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              What Lives Here
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              Words Beyond Time
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
              Every page is an echo of something once felt deeply —
              a memory, a dream, a promise, a goodbye, or a destiny
              waiting to unfold.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/20"
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

      {/* ================================================= */}
      {/* FEATURED WRITING                                 */}
      {/* ================================================= */}

      <section className="px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-violet-300">
              Featured Writing
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              Recent Echoes
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredWritings.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/20"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                  <BookOpen className="h-8 w-8 text-violet-300" />
                </div>

                <h3 className="mb-5 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mb-8 leading-relaxed text-zinc-400">
                  {item.excerpt}
                </p>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-violet-300 transition-all hover:gap-4"
                >
                  Continue Reading

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* JOURNEY SECTION                                  */}
      {/* ================================================= */}

      <section className="px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {journey.map((item, index) => (
              <div
                key={index}
                className="rounded-[34px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
              >
                <item.icon className="mb-8 h-10 w-10 text-violet-300" />

                <h3 className="mb-4 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* QUOTE                                             */}
      {/* ================================================= */}

      <section className="px-6 py-36">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-3xl md:p-24">
            <Quote className="mx-auto mb-10 h-14 w-14 text-violet-300" />

            <blockquote className="text-4xl font-light leading-relaxed text-white md:text-6xl">
              “Some destinies arrive as people.
              <br />
              Others arrive as words.”
            </blockquote>

            <p className="mt-12 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Echoes of Destiny
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA                                                */}
      {/* ================================================= */}

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-14 backdrop-blur-3xl md:p-24">
            <div className="text-center">
              <div className="mb-10 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-12 w-12 text-violet-300" />
                </div>
              </div>

              <h2 className="text-5xl font-bold text-white md:text-7xl">
                Begin Your Journey
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
                Explore letters, reflections, destiny, memories, and
                stories crafted for thoughtful readers seeking meaning,
                beauty, and connection.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-105"
                >
                  <PenTool className="h-5 w-5" />
                  Start Reading
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20 hover:bg-white/10"
                >
                  About This Space
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}