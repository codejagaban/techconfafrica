import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  trailingSlash: 'always',
  // Use to always append '/' at end of url
  integrations: [tailwind(), react(), sitemap()]
});