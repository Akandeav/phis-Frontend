const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: colors.teal,
      cyan: colors.cyan,
      orange: colors.orange,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      green: colors.green,
      blue: colors.blue,
      skyblue: colors.lightBlue,
      red: colors.red,
      rose: colors.rose
    }
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')]
}
