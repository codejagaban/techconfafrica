/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,}"],
  theme: {
    // **TODO: Fontsource will be releasing a new version soon with geist as a font we should upgrade to that
    fontFamily: {
      medium: ["GeistMedium", "sans-serif"],
      heading: ["GeistSemiBold", "sans-serif"],
      sans: ["GeistRegular", "sans-serif"],
    },
  },
};
