/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: colors.gray,
        secondary: colors.yellow,
        neutral: colors.gray,
      },

      borderColor: {
        primary: colors.gray,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
};
