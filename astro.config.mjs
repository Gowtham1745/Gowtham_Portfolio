import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://gowtham1745.github.io',
  base: '/Gowtham_Portfolio',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
