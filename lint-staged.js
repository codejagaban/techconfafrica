module.exports = {
  "*.{ts,tsx,astro}": [
    "eslint --max-warnings=0",
    () => "tsc --skipLibCheck --noEmit",
  ],
  "*.{ts,tsx,css,astro}": ["prettier --write"],
};
