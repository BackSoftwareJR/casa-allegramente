/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── PALETTE CASA ALLEGRAMENTE (dal logo) ──────────────────────────────
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        // Primari dal logo — arancione pastello
        primary: {
          DEFAULT: '#E8956A',
          dark: '#D97B4E',
          light: '#F5D4BC',
          50: '#FAF0E8',
          100: '#FAEDE3',
          200: '#F5D4BC',
          300: '#EDB896',
          400: '#E8956A',
          500: '#E8760A',
          600: '#D97B4E',
          700: '#B8653A',
          800: '#8F4E2E',
          900: '#5C3A1E',
        },
        // Verde logo — pastello
        secondary: {
          DEFAULT: '#7FBE6E',
          dark: '#5A9A4A',
          light: '#D0E8C4',
          50: '#EAF4E4',
          100: '#D0E8C4',
          200: '#A8D49A',
          300: '#7FBE6E',
          400: '#6BA85C',
          500: '#5A8C3A',
          600: '#4A7230',
          700: '#3A5826',
          800: '#2A401C',
          900: '#1A2812',
        },
        // Colori caldi dal logo — pastello
        warm: {
          brown: '#8A7060',
          sand: '#F5E8C8',
          terracotta: '#D48472',
          yellow: '#E8CC5A',
        },
        // Token brand per box e sfondi
        brand: {
          orange: { pastel: '#FAEDE3', soft: '#F5D4BC', accent: '#E8956A' },
          green: { pastel: '#EAF4E4', soft: '#D0E8C4', accent: '#7FBE6E' },
          yellow: { pastel: '#FDF8E3', soft: '#F9EDB8', accent: '#E8CC5A' },
          terracotta: { pastel: '#F9EAE6', soft: '#EFD0C8', accent: '#D48472' },
          brown: { pastel: '#F0E8E0', soft: '#D9C9BA', accent: '#8A7060' },
        },
        // Superfici calde
        linen: {
          DEFAULT: '#FAF6F0',
          50: '#FFFDFB',
          100: '#FAF6F0',
          200: '#F2EAE0',
          300: '#E5D8CC',
          400: '#CDBFB0',
          500: '#B0A090',
        },
        // Testo caldo
        ink: {
          DEFAULT: '#2A1A0E',
          light: '#5C3A1E',
          muted: '#8A7060',
        },
        // Antracite caldo — testo moderno (non cold gray)
        anthracite: {
          DEFAULT: '#2D2A26',
          light: '#4A4540',
          muted: '#6B6560',
        },
        cream: '#FDF8F2',
        parchment: '#F2EAE0',

        // ── Legacy aliases (mantengono compatibilità con componenti esistenti)
        forest: {
          DEFAULT: '#5C3A1E',
          50: '#FAF6F0',
          100: '#F2EAE0',
          200: '#E5D8CC',
          300: '#CDBFB0',
          400: '#A08060',
          500: '#7A5A3A',
          600: '#5C3A1E',
          700: '#4A2E16',
          800: '#3A2210',
          900: '#2A1A0A',
        },
        sage: {
          DEFAULT: '#7FBE6E',
          50: '#EAF4E4',
          100: '#D0E8C4',
          200: '#A8D49A',
          300: '#7FBE6E',
          400: '#6BA85C',
          500: '#5A8C3A',
          600: '#4A7230',
          700: '#3A5826',
          800: '#2A401C',
          900: '#1A2812',
        },
        gold: {
          DEFAULT: '#E8956A',
          50: '#FAF0E8',
          100: '#FAEDE3',
          200: '#F5D4BC',
          300: '#EDB896',
          400: '#E8956A',
          500: '#E8760A',
          600: '#D97B4E',
          700: '#B8653A',
          800: '#8F4E2E',
          900: '#5C3A1E',
        },
        // Legacy — mantenuto per articoli blog
        "warm-50": "#FEF5EB",
      },

      // ── TIPOGRAFIA ─────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-display)", "Nunito", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Source Sans 3", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Nunito", "system-ui", "sans-serif"],
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
        "4xl": "32px",
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

      // ── OMBRE CALDE ────────────────────────────────────────────────────────
      boxShadow: {
        "warm-sm": "0 1px 3px rgba(138,112,96,0.06)",
        "warm-md": "0 4px 16px rgba(138,112,96,0.08)",
        "warm-lg": "0 12px 40px rgba(138,112,96,0.10)",
        "gold-glow": "0 0 24px rgba(232,149,106,0.18)",
        "primary-glow": "0 0 28px rgba(232,149,106,0.22)",
      },

      // ── BACKGROUND ────────────────────────────────────────────────────────
      backgroundImage: {
        "hero-overlay": "linear-gradient(to bottom, rgba(42,26,14,0.55) 0%, rgba(42,26,14,0.30) 60%, rgba(42,26,14,0.65) 100%)",
        "section-gradient": "linear-gradient(to bottom, #FAF6F0, #F2EAE0)",
        "warm-gradient": "linear-gradient(135deg, #FAF6F0 0%, #F2EAE0 100%)",
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-reverse": "marquee var(--duration, 40s) linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        blob: "blob 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
