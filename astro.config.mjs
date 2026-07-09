import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: change this to your production domain for each app
  site: 'https://fussless.one',
  integrations: [
    tailwind({
      applyBaseStyles: false, // we use our own base styles
    }),
    // sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto', // inline small stylesheets, avoids render-blocking CSS
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false, // only prefetch links with data-astro-prefetch
    defaultStrategy: 'hover',
  },
});
