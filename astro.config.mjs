// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import remarkCitations from './plugins/remark-citations.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
  site: 'https://folkprotocol.com',
  markdown: {
    remarkPlugins: [remarkCitations],
  },
});
