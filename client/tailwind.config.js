/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Yeseva One, cursive"],
        default: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light_primary: "#fafafa",
        dark_primary: "#111111",

        light_header_text: "#666666",
        light_header_text_hover: "#000000",

        dark_header_text: "#888888",
        dark_header_text_hover: "#ffffff",

        light_border: "#eaeaea",
        dark_border: "#333333",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
