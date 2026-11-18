// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The domain the client chose. Canonical URLs, the social image, the
  // sitemap and robots.txt are all built from this, so they resolve once
  // getsqueejit.com is registered and pointed at Netlify.
  site: 'https://getsqueejit.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
