import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Cormorant Garamond", ...defaultTheme.fontFamily.serif],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },

        secondary: {
          DEFAULT: "#ec4899",
          foreground: "#ffffff",
        },

        accent: {
          DEFAULT: "#06b6d4",
          foreground: "#ffffff",
        },

        muted: {
          DEFAULT: "#18181b",
          foreground: "#a1a1aa",
        },

        card: {
          DEFAULT: "#09090b",
          foreground: "#ffffff",
        },

        popover: {
          DEFAULT: "#09090b",
          foreground: "#ffffff",
        },
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(139,92,246,0.20) 0%, rgba(236,72,153,0.15) 50%, rgba(6,182,212,0.15) 100%)",

        "text-gradient":
          "linear-gradient(90deg, #c4b5fd 0%, #f0abfc 50%, #67e8f9 100%)",

        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",

        "footer-gradient":
          "linear-gradient(180deg, rgba(139,92,246,0.15), rgba(0,0,0,0))",

        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",

        "cosmic-gradient":
          "radial-gradient(circle at center, rgba(139,92,246,0.25), rgba(0,0,0,0))",
      },

      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.35)",
        "glow-sm": "0 0 20px rgba(139,92,246,0.25)",
        "glow-lg": "0 0 80px rgba(139,92,246,0.45)",

        glass:
          "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",

        card:
          "0 20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(139,92,246,0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          "0%, 100%": {
            opacity: "0.5",
            filter: "blur(40px)",
          },
          "50%": {
            opacity: "1",
            filter: "blur(60px)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },

        pulseSlow: {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        orbit: {
          from: {
            transform: "rotate(0deg) translateX(20px) rotate(0deg)",
          },
          to: {
            transform:
              "rotate(360deg) translateX(20px) rotate(-360deg)",
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
        scaleIn: "scaleIn 0.5s ease forwards",
        orbit: "orbit 10s linear infinite",
      },

      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.zinc.300"),

            maxWidth: "none",

            h1: {
              color: "#ffffff",
              fontWeight: "700",
            },

            h2: {
              color: "#ffffff",
              fontWeight: "700",
            },

            h3: {
              color: "#ffffff",
              fontWeight: "600",
            },

            h4: {
              color: "#ffffff",
              fontWeight: "600",
            },

            strong: {
              color: "#ffffff",
            },

            a: {
              color: "#c4b5fd",
              textDecoration: "none",
            },

            blockquote: {
              color: "#e4e4e7",
              borderLeftColor: "#8b5cf6",
              fontStyle: "italic",
            },

            code: {
              color: "#f0abfc",
            },

            hr: {
              borderColor: "rgba(255,255,255,0.1)",
            },
          },
        },

        invert: {
          css: {
            "--tw-prose-body": "#d4d4d8",
            "--tw-prose-headings": "#ffffff",
            "--tw-prose-links": "#c4b5fd",
            "--tw-prose-bold": "#ffffff",
            "--tw-prose-quotes": "#e4e4e7",
          },
        },
      }),

      backdropBlur: {
        xs: "2px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
    },
  },

  plugins: [typography, animate],
};

export default config;