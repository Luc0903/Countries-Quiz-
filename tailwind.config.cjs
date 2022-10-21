/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'dark-blue': '#2F527B',
        'violet-text': '#6066d0cc',
        'main-yellow': '#F9A826',
      },
      boxShadow: {
        'main-shadow': '0 2px 4px rgba(252, 168, 47, 0.4);',
      },
    },
  },
  plugins: [],
};
