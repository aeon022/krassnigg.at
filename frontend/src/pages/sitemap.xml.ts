import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://krassnigg.at";
  const pages = ["/", "/kontakt", "/impressum", "/datenschutz"];
  const lastmod = new Date().toISOString().split("T")[0];

  const staticPages = pages
    .map(
      (page) => `<url>
  <loc>${base}${page}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>${page === "/" ? "1.0" : "0.7"}</priority>
</url>`
    )
    .join("\n");

  const collections = ["expertise", "experience", "education", "certifications"];
  let dynamicPages = "";

  for (const collection of collections) {
    const entries = await getCollection(collection as any);
    dynamicPages += entries
      .map(
        (entry) => `<url>
  <loc>${base}/${collection}/${entry.slug}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.5</priority>
</url>`
      )
      .join("\n");
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages}
${dynamicPages}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
