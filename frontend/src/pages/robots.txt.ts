import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://krassnigg.at";
  const basePath = import.meta.env.BASE_URL || "/";
  const normalizedBasePath = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const sitemapUrl = `${base}${normalizedBasePath}/sitemap.xml`;
  const body = `User-agent: *\nAllow: /\nDisallow: /keystatic\nDisallow: /keystatic/\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
