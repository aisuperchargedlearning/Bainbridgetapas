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
    },
  },
  plugins: [],
}