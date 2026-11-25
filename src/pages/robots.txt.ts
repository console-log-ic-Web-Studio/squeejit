import type { APIRoute } from "astro";

// Points crawlers at the sitemap. Built from `site` in astro.config.mjs so
// the address stays right when the real domain goes live.
export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
