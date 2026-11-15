import type { APIRoute } from "astro";

// Every .astro page in src/pages becomes a URL here, so a new page is listed
// without editing this file. Dynamic routes ([slug]) and error pages are left
// out because they have no single fixed URL to list.
const pages = Object.keys(import.meta.glob("./**/*.astro"))
  .filter((file) => !file.includes("[") && !/\/(404|500)\.astro$/.test(file))
  .map((file) =>
    file
      .replace(/^\.\//, "/")
      .replace(/\.astro$/, "")
      .replace(/\/index$/, "/")
  )
  .sort();

export const GET: APIRoute = ({ site }) => {
  // `site` comes from astro.config.mjs, so the URLs follow the domain
  // once it changes from the placeholder.
  const urls = pages
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
