/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "!./node_modules/**",
    "!./dist/**",
    "!./scripts/**",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#164E63',
          secondary: '#0891B2',
          accent: '#059669',
          bg: '#F0FDFA',
          surface: '#FFFFFF',
          text: '#115E59',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        display: ['Figtree', 'sans-serif'],
        classic: ['Playfair Display', 'serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        'lg': '14px',
        'xl': '20px',
        '2xl': '32px',
      },
      spacing: {
        '18': '4.5rem',
      },
      fontSize: {
        'body': '16px',
        'h1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['42px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #164E63 0%, #0891B2 100%)',
      },
      transitionDuration: {
        '250': '250ms',
      }
    }
  },
  plugins: [],
}
