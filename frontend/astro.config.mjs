// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://krassnigg.at',
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind(), keystatic(), react()]
});
