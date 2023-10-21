const { violet, blackA } = require('@radix-ui/colors')

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        familia: {
          primary: '#faba16',
          secondary: '#111827',
          accent: '#9ca3af',
          neutral: '#1B1929',
          'base-100': '#3F3D48',
          info: '#1CC4F2',
          success: '#118D49',
          warning: '#fde047',
          error: '#E3313F',
        },
      },
      'bumblebee',
    ],
  },
  theme: {
    data: {
      active: 'ui~="active"',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        brand: {
          500: '#FFE500',
          600: '#E9D404',
          700: '#FABA16',
        },
        aux: {
          500: '#1C2328',
          400: '#293339',
        },
        zinc: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#181919',
          900: '#121313',
        },
      },
    },
  },
  extend: {
    colors: { ...violet, ...blackA },
    keyframes: {
      slideDownAndFade: {
        from: { opacity: 0, transform: 'translateY(-2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: 'translateX(-2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
    },
    animation: {
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade:
        'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('daisyui'),
  ],
}
