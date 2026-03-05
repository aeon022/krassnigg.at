import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://krassnigg.at";
  const pages = ["/", "/kontakt", "/impressum", "/datenschutz"];

  const urls = pages
    .map(
      (page) => `<url>
  <loc>${base}${page}</loc>
  <changefreq>monthly</changefreq>
  <priority>${page === "/" ? "1.0" : "0.7"}</priority>
</url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
