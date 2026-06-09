/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C4632E',
          dark: '#9E4E24',
          light: '#E8B89A',
          50: '#FBF0EA',
        },
        honey: {
          DEFAULT: '#B8893A',
          light: '#F2E2C4',
          50: '#FDF8EE',
        },
        gold: {
          DEFAULT: '#B58D3E',
          light: '#C9A14A',
          muted: '#9A7532',
        },
        cedar: {
          DEFAULT: '#4A3829',
          dark: '#352820',
          light: '#6B5344',
        },
        burgundy: {
          DEFAULT: '#4A2824',
          dark: '#3D1E1A',
          deep: '#352018',
          light: '#5C3A36',
          muted: '#6B4540',
        },
        wood: { DEFAULT: '#8B6F5C' },
        sage: {
          DEFAULT: '#7A9B7E',
          light: '#D4E5D6',
          mist: '#EEF4EF',
          dark: '#5D7A61',
        },
        cream: { DEFAULT: '#FAF5EB' },
        linen: { DEFAULT: '#F3EDE2' },
        parchment: { DEFAULT: '#E8DFD0' },
        'warm-gray': { DEFAULT: '#C9BFB0', dark: '#9A8F82' },
        ink: { DEFAULT: '#2A221C' },
        charcoal: { DEFAULT: '#443A32' },
        muted: { DEFAULT: '#6B5F54' },
        'white-warm': '#FFFCF7',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['44px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        section: '6rem',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(74, 56, 41, 0.07)',
        'warm-md': '0 4px 16px rgba(74, 56, 41, 0.09)',
        'warm-lg': '0 12px 40px rgba(74, 56, 41, 0.11)',
        'terracotta-glow': '0 4px 24px rgba(196, 99, 46, 0.25)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to bottom, rgba(53,40,32,0.55) 0%, rgba(53,40,32,0.25) 55%, rgba(53,40,32,0.70) 100%)',
        'hero-cinematic':
          'radial-gradient(ellipse 85% 70% at 50% 45%, rgba(12,8,6,0.72) 0%, rgba(12,8,6,0.45) 55%, rgba(12,8,6,0.65) 100%), linear-gradient(to bottom, rgba(12,8,6,0.55) 0%, rgba(12,8,6,0.35) 50%, rgba(12,8,6,0.7) 100%)',
        'section-warm': 'linear-gradient(180deg, #FAF5EB 0%, #F3EDE2 100%)',
        'manifesto-dark':
          'linear-gradient(160deg, #3D1E1A 0%, #4A2824 42%, #352018 100%)',
      },
      maxWidth: {
        content: '1200px',
        prose: '680px',
      },
      transitionDuration: {
        250: '250ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        gentle: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
