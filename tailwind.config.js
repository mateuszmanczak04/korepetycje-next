const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'],
      },
      colors: {
        primary: colors.indigo,
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
