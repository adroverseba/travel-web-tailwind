/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./public/*.{html,js}', './src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
