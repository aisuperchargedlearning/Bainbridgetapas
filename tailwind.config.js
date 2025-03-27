/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        brand: ['"Montserrat Alternates"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      fontWeight: {
        black: '900',
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.2' }],
        '8xl': ['6rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}