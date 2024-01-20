/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        redSecondary:"#FF3951",
        redSecondaryD:"#E33046",
        redPrimary:"#FF7686",
        blackSecondary:"#000000",
        blackPrimary:"#929292",
        grey:"#C4C4C4"
      }
    },
  },
  plugins: [],
}