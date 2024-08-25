/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
     'small-phone': '320px',
     'medium-phone': '375px',
     'large-phone': '425px',
     'tablet': '760px',
     'laptop': '1024px',
     'medium-laptop': '1360px',
     'large-laptop': '1440px',
     '4k': '2560px' 
    },

    extend: {
      fontFamily: {
        display: 'Titillium Web, sans-serif',
        body: 'Roboto, sans-serif'
      },
      colors: {
        darkBlue: '#233D4D',
        lightOrange: '#F2AF29',
      },
    },

  },
  plugins: [],
};

