import { defineConfig } from 'astro/config';
import { siteUrl } from './src/site.mjs';

export default defineConfig({
  site: siteUrl.href,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
