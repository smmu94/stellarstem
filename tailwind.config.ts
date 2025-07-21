/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",           
  ],
  theme: {
    extend: {
      colors: {
        navy: "#202338",
        red: "#ED513A",
        gold: "#FFC447",
        base: "#FFFFFF",
        gray: "#6D7682",
        dark: "#131413",
      },
    },
  },
  plugins: [],
};