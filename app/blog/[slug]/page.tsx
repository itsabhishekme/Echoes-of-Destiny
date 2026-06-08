import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  User,
  Share2,
  Heart,
  Bookmark,
  ArrowRight,
} from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
};

const posts: BlogPost[] = [
  {
    slug: "before-i-became-me",
    title: "Before I Became Me",
    excerpt:
      "A reflection on identity, growth, memories, and the silent moments that shape who we become.",
    date: "June 1, 2026",
    readTime: "8 min read",
    category: "Reflections",
    author: "Vihaan",
    content: `
Before I became the person I am today, there existed countless versions of me.

Some were hopeful.
Some were lost.
Some believed in impossible dreams.
Others feared the future.

Life is rarely transformed through a single moment.
Instead, it changes us quietly.

Every disappointment leaves a lesson.
Every victory leaves a memory.
Every goodbye leaves an echo.

The person we become is built from thousands of invisible moments.

There are conversations we still remember years later.
There are places we revisit only in memory.
There are people who leave fingerprints on our souls without realizing it.

Perhaps becoming is not about changing into someone new.

Perhaps it is about remembering who we always were beneath the noise of the world.

And perhaps every step of the journey was preparing us for the version of ourselves waiting patiently ahead.
`,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[160px]" />
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            {post.category}
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            {post.title}
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            {post.excerpt}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-zinc-500">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-[500px] overflow-hidden rounded-[40px] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-fuchsia-900" />

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="max-w-3xl px-10 text-center text-4xl font-bold text-white md:text-6xl">
                {post.title}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_320px]">
          {/* Article */}
          <article>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-16 backdrop-blur-2xl">
              <div className="prose prose-invert max-w-none">
                {post.content
                  .trim()
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-8 text-lg leading-relaxed text-zinc-300"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Article Actions */}
              <div className="mt-16 border-t border-white/10 pt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300 transition hover:bg-white/10">
                      <Heart className="h-4 w-4" />
                      Like
                    </button>

                    <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300 transition hover:bg-white/10">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </button>
                  </div>

                  <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300 transition hover:bg-white/10">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-xl font-semibold text-white">
                About Author
              </h3>

              <p className="leading-relaxed text-zinc-400">
                Vihaan writes reflections, letters, and stories inspired by
                memory, destiny, growth, and the unseen journeys of the human
                soul.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-semibold text-white">
                Continue Reading
              </h3>

              <div className="space-y-5">
                {relatedPosts.length === 0 && (
                  <p className="text-zinc-500">
                    More articles coming soon.
                  </p>
                )}

                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block rounded-2xl border border-white/10 p-4 transition hover:border-violet-500/20 hover:bg-white/[0.03]"
                  >
                    <h4 className="font-medium text-white">
                      {related.title}
                    </h4>

                    <div className="mt-2 flex items-center gap-2 text-sm text-violet-300">
                      Read Article
                      <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-950/60 via-black/40 to-fuchsia-950/60 p-12 text-center backdrop-blur-3xl md:p-20">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              More Stories Await
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Explore reflections, letters, memories, and stories crafted to
              resonate long after the final page.
            </p>

            <Link
              href="/blog"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:scale-105"
            >
              Explore Blog
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}