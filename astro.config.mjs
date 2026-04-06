// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production' || process.env.CI === 'true';

export default defineConfig({
  site: 'https://asrajavel.github.io',
  base: isProd ? '/iskcon-thoothukudi-v3' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
