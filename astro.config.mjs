// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tortollandia.pl',
  trailingSlash: 'ignore',
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap(),
    compress({ CSS: true, HTML: true, JavaScript: true, Image: false, SVG: true }),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Playfair Display',
        cssVariable: '--font-display',
        weights: [500, 600, 700],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['Georgia', 'serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Poppins',
        cssVariable: '--font-body',
        weights: [400, 500, 600],
        styles: ['normal'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['system-ui', 'sans-serif'],
      },
    ],
  },
});
