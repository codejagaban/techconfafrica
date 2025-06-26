module.exports = {
  "*.{ts,tsx,astro}": ["eslint --max-warnings=0 --fix"],
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{ts,tsx,json,css, astro}": [
    "prettier --write --plugin-search-dir=. --plugin=prettier-plugin-astro ",
  ],
};
