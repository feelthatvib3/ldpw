/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
