import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echoesofdestiny.com"),

  title: {
    default: "Echoes of Destiny",
    template: "%s | Echoes of Destiny",
  },

  description:
    "A literary sanctuary of fate, memories, untold stories, soulful reflections, destiny, dreams, and timeless letters written from the heart.",

  keywords: [
    "Echoes of Destiny",
    "Vihaan",
    "Letters Never Sent",
    "Before I Became Me",
    "Soulmate",
    "Destiny",
    "Dreams",
    "Reflections",
    "Stories",
    "Poetry",
    "Literature",
    "Creative Writing",
    "Personal Growth",
    "Memoir",
    "Spiritual Writing",
  ],

  authors: [
    {
      name: "Vihaan",
    },
  ],

  creator: "Vihaan",

  publisher: "Echoes of Destiny",

  category: "Literature",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Echoes of Destiny",
    description:
      "A literary sanctuary of fate, memories, untold stories, soulful reflections, destiny, dreams, and timeless letters.",

    url: "https://echoesofdestiny.com",

    siteName: "Echoes of Destiny",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Echoes of Destiny",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Echoes of Destiny",

    description:
      "A literary sanctuary of fate, memories, untold stories, soulful reflections, destiny, dreams, and timeless letters.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://echoesofdestiny.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${playfair.variable} ${inter.variable} relative min-h-screen overflow-x-hidden bg-[#050507] text-white antialiased`}
      >
        {/* ================================================================= */}
        {/* GLOBAL COSMIC BACKGROUND                                           */}
        {/* ================================================================= */}

        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Main Background */}
          <div className="absolute inset-0 bg-[#050507]" />

          {/* Aurora Layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-[140px]" />
        </div>

        {/* ================================================================= */}
        {/* FLOATING GLOWS                                                     */}
        {/* ================================================================= */}

        <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[220px]" />

          <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-[220px]" />

          <div className="absolute right-1/4 top-1/4 h-[240px] w-[240px] rounded-full bg-violet-400/10 blur-[120px]" />
        </div>

        {/* ================================================================= */}
        {/* STAR PARTICLES                                                     */}
        {/* ================================================================= */}

        <div className="pointer-events-none fixed inset-0 -z-30">
          <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white/60" />
          <div className="absolute left-[22%] top-[70%] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute left-[78%] top-[25%] h-1 w-1 rounded-full bg-white/50" />
          <div className="absolute left-[65%] top-[60%] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute left-[88%] top-[80%] h-1 w-1 rounded-full bg-white/60" />
          <div className="absolute left-[45%] top-[12%] h-1 w-1 rounded-full bg-white/50" />
          <div className="absolute left-[35%] top-[85%] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute left-[8%] top-[50%] h-1 w-1 rounded-full bg-white/50" />
        </div>

        {/* ================================================================= */}
        {/* PAGE FRAME                                                         */}
        {/* ================================================================= */}

        <div className="relative flex min-h-screen flex-col">
          <Navbar />

          <main className="relative flex-1 pt-20">
            {children}
          </main>

          <Footer />
        </div>

        {/* ================================================================= */}
        {/* BOTTOM FADE                                                        */}
        {/* ================================================================= */}

        <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 h-40 bg-gradient-to-t from-[#050507] to-transparent" />
      </body>
    </html>
  );
}