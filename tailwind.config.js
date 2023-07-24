const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      gray: {
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#CCCCCC",
        300: "#B8B8B8",
        400: "#A3A3A3",
        500: "#8F8F8F",
        600: "#7A7A7A",
        700: "#666666",
        800: "#525252",
        900: "#3D3D3D",
        950: "#292929",
      },
    },
  },
  extend: {
    colors: {
      customGreen: {
        light: "#60efff",
        DEFAULT: "#00DD75",
      },
      customOrange: {
        light: "#F89B29",
        DEFAULT: "#FF0F7B",
      },
      customCyan: {
        light: "#D0FFD6",
        DEFAULT: "##06AED4",
      },
      // customViolet: {
      //   // DEFAULT: ""
      // },
    },
  },
  plugins: [],
};
