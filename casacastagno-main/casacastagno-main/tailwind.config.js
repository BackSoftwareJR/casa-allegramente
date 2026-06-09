/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}', './src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        /** Titoli editoriali luxury (Giornata tipo grid) */
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f3efe6',
          200: '#e5dac9',
          300: '#d4c4a8',
          700: '#5c4d3d',
          800: '#3d3429',
          900: '#2a231c',
        },
        /** Il Castagno — luxury boutique: salvia, crema, legno, oro */
        castagno: {
          cream: '#FAF7F0',
          'cream-deep': '#F0EBE0',
          sage: '#8B9A7E',
          'sage-deep': '#6B7A62',
          'sage-ink': '#3D4537',
          wood: '#6B4E3D',
          'wood-light': '#8B6F5A',
          gold: '#B8942E',
          'gold-bright': '#D4B84A',
          ink: '#1C1B18',
          muted: '#4A4540',
          /** Verde bosco — CTA e titoli hero (design reference) */
          forest: '#2D4A31',
          /** Marrone caldo — seconda riga headline */
          umber: '#6B4A3A',
          /** Oro brunito — cornici editoriali */
          'gold-bronze': '#8B784A',
        },
      },
      keyframes: {
        'hero-float-a': {
          '0%, 100%': { transform: 'translateY(0) rotate(3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'hero-float-b': {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(8px) rotate(-4deg)' },
        },
      },
      animation: {
        'hero-float-a': 'hero-float-a 5.5s ease-in-out infinite',
        'hero-float-b': 'hero-float-b 6s ease-in-out infinite 0.4s',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        'footer-mesh':
          'radial-gradient(ellipse 80% 50% at 20% -10%, rgba(184,148,46,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 80%, rgba(139,154,126,0.12), transparent 50%), radial-gradient(ellipse 50% 30% at 50% 50%, rgba(250,247,240,0.04), transparent 70%)',
        'hero-contact':
          'linear-gradient(135deg, #1C2B1E 0%, #2D4A31 40%, #3D4537 75%, #1C1B18 100%)',
      },
      boxShadow: {
        glass: '0 25px 50px -12px rgba(28, 27, 24, 0.18)',
      },
    },
  },
  plugins: [],
}
