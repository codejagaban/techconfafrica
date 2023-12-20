module.exports = {
  "*.{ts,tsx}": ["eslint --max-warnings=0 --fix", "tsc --skipLibCheck --noEmit"],
  "*.{ts,tsx,json,css,js}": [
    "prettier --write --plugin-search-dir=. --plugin=prettier-plugin-astro",
  ],
};
