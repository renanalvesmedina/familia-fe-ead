/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      },
      colors: {
        brand: {
          500: '#FFE500',
          600: '#E9D404',
          700: '#FABA16'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
