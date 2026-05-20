/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── PALETTE RESIDENCE V.G ──────────────────────────────────────────────
      // Verde salvia + oro caldo + neutri linen — elegante, caldo, autorevole
      colors: {
        // Primari — Verde foresta / salvia
        forest: {
          DEFAULT: "#2D3A2E",
          50:  "#F2F5F2",
          100: "#D8E2D9",
          200: "#B5C8B7",
          300: "#8FAE92",
          400: "#6B9070",
          500: "#4A6741",
          600: "#2D3A2E", // DEFAULT
          700: "#223024",
          800: "#18231A",
          900: "#0F1610",
        },
        sage: {
          DEFAULT: "#6B8F71",
          50:  "#F4F8F4",
          100: "#E0EDE1",
          200: "#C0D9C3",
          300: "#A8C5A0",
          400: "#8AAF8E",
          500: "#6B8F71", // DEFAULT
          600: "#4A6741",
          700: "#374E31",
          800: "#253622",
          900: "#141E12",
        },
        // Accent — Oro caldo
        gold: {
          DEFAULT: "#C9A84C",
          50:  "#FDF9EE",
          100: "#FAF0D0",
          200: "#F4DFA0",
          300: "#E8C97A",
          400: "#D9B05E",
          500: "#C9A84C", // DEFAULT
          600: "#A88B38",
          700: "#8B6914",
          800: "#6B4E0F",
          900: "#4A360A",
        },
        // Neutri caldi — base del sito
        linen: {
          DEFAULT: "#F5F2ED",
          50:  "#FDFCFA",
          100: "#F5F2ED", // DEFAULT (sfondo globale)
          200: "#EDE9E0", // parchment (sezioni alternate)
          300: "#D4CFC7", // warm gray (bordi)
          400: "#B5AFA5",
          500: "#958E83",
        },
        // Testo
        ink: {
          DEFAULT: "#1A1A1A",
          light: "#3D3D3D",
          muted: "#717171",
        },
        // Superfici
        cream: "#FDF6E3",
        parchment: "#EDE9E0",
        // Legacy — mantenuto per compatibilità con articoli blog
        "warm-50": "#FFFBEB",
      },

      // ── TIPOGRAFIA ─────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["56px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["44px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["36px", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },

      // ── SPACING ────────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "6rem",
      },

      // ── BORDER RADIUS ──────────────────────────────────────────────────────
      borderRadius: {
        "xl":  "12px",
        "2xl": "16px",
        "3xl": "24px",
      },

      // ── ANIMAZIONI ─────────────────────────────────────────────────────────
      transitionDuration: {
        "250": "250ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      // ── OMBRE ─────────────────────────────────────────────────────────────
      boxShadow: {
        "warm-sm": "0 1px 3px rgba(45, 58, 46, 0.08)",
        "warm-md": "0 4px 12px rgba(45, 58, 46, 0.10)",
        "warm-lg": "0 12px 40px rgba(45, 58, 46, 0.12)",
        "gold-glow": "0 0 20px rgba(201, 168, 76, 0.20)",
      },

      // ── BACKGROUND ────────────────────────────────────────────────────────
      backgroundImage: {
        "hero-overlay": "linear-gradient(to bottom, rgba(45,58,46,0.55) 0%, rgba(45,58,46,0.30) 60%, rgba(45,58,46,0.65) 100%)",
        "section-gradient": "linear-gradient(to bottom, #F5F2ED, #EDE9E0)",
      },

      // ── CONTAINERS ────────────────────────────────────────────────────────
      maxWidth: {
        "content": "1200px",
        "prose-wide": "780px",
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-reverse": "marquee var(--duration, 40s) linear infinite reverse",
      },
    },
  },
  plugins: [],
};
