const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Shalimar']
      }
    },
    colors: {
      
        caramel: '#ffe8d6',
        rose: '#ffafcc',
        sky: '#bde0fe',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
