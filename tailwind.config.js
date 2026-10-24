/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6EDE3',
          50: '#FDFBF9',
          100: '#FAF4ED',
          200: '#F6EDE3',
          300: '#EBDCCE',
          400: '#E0CBB9',
        },
        sand: {
          DEFAULT: '#EADBCB',
          50: '#F8F4EF',
          100: '#F2E8DC',
          200: '#EADBCB',
          300: '#DFCBBA',
          400: '#D2B9A2',
        },
        espresso: {
          DEFAULT: '#2A1F1A',
          lighter: '#48352D',
          light: '#372922',
          DEFAULT: '#2A1F1A',
          dark: '#1F1713',
          darker: '#140E0C',
        },
        coffee: {
          DEFAULT: '#6B4430',
          light: '#83543C',
          dark: '#543525',
          darker: '#3E271B',
        },
        caramel: {
          DEFAULT: '#B8794A',
          light: '#CD8D5E',
          dark: '#9F6438',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(42, 31, 26, 0.08), 0 1px 4px -1px rgba(42, 31, 26, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(42, 31, 26, 0.12), 0 4px 12px -2px rgba(42, 31, 26, 0.06)',
        'warm-lg': '0 16px 36px -6px rgba(42, 31, 26, 0.16), 0 8px 16px -4px rgba(42, 31, 26, 0.08)',
        'warm-xl': '0 24px 48px -12px rgba(42, 31, 26, 0.22)',
      },
    },
  },
  plugins: [],
}
