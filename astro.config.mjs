// @ts-check
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";
import { APP_BASE_PATH, APP_SITE_URL } from "./app.config.js";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: APP_SITE_URL,
  // Choose deployment configuration:
  // For root deployment: use base: "/"
  // For subdirectory deployment: use base: APP_BASE_PATH
  base: APP_BASE_PATH,
  outDir: `dist${APP_BASE_PATH}`,
  vite: {
    plugins: [
      tailwindcss(),
      svgr({
        include: "**/*.svg?react",
        svgrOptions: {
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          svgoConfig: {
            plugins: [
              "preset-default",
              "removeTitle",
              "removeDesc",
              "removeDoctype",
              "cleanupIds",
            ],
          },
        },
      }),
    ],
  },

  integrations: [react(), icon(), pagefind()],
});
