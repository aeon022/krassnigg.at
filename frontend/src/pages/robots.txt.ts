import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://krassnigg.at";
  const body = `User-agent: *\nAllow: /\nDisallow: /keystatic\nDisallow: /keystatic/\n\nSitemap: ${base}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
