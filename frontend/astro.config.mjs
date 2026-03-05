// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";

// https://astro.build/config
const enableKeystatic =
  process.env.NODE_ENV === "development" || process.env.ENABLE_KEYSTATIC === "true";
const rawSiteInput = process.env.SITE_URL ?? "https://krassnigg.at";
const parsedSiteUrl = new URL(rawSiteInput);
const siteUrl = parsedSiteUrl.origin;
const rawBasePath = process.env.BASE_PATH ?? parsedSiteUrl.pathname ?? "/";
const basePath = rawBasePath === "/"
  ? "/"
  : `/${rawBasePath.replace(/^\/+|\/+$/g, "")}/`;

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: 'static',
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind(), react(), ...(enableKeystatic ? [keystatic()] : [])]
});
