/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
        },
        aux: {
          500: '#1C2328',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
});
