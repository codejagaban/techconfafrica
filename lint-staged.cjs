module.exports = {
  "*.{ts,tsx,astro}": [
    "eslint --max-warnings=0",
    () => "tsc --skipLibCheck --noEmit",
  ],
  "*.{ts,tsx,json,css,js,astro}": ["prettier --write --plugin-search-dir=. --plugin=prettier-plugin-astro"],
};
