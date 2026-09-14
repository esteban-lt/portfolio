// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://esteban-lt.github.io",
  integrations: [
    tailwind(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        "simple-icons": ["*"],
      },
    }),
    sitemap(),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    }),
  ],
  outDir: "dist",
  output: "static",
});
