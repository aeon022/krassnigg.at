// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";

// https://astro.build/config
const enableKeystatic =
  process.env.NODE_ENV === "development" || process.env.ENABLE_KEYSTATIC === "true";

export default defineConfig({
  site: 'https://krassnigg.at',
  output: 'static',
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind(), react(), ...(enableKeystatic ? [keystatic()] : [])]
});
