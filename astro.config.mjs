import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://techconf.africa/",
  trailingSlash: "ignore",
  // Use to always append '/' at end of url
  integrations: [react(), sitemap()],
    vite: {
    plugins: [tailwindcss()],
  },
});
