/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito"]
      }
    },
  },
  plugins: [],
  plugins: [require("rippleui")],
}