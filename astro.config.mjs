// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public site URL — powers absolute canonical/hreflang links for SEO.
  // Update if the production domain changes.
  site: 'https://riceguardsentinel.com',

  // URL-per-language routing (RIC-44x).
  //   /            → Thai   (default, no prefix)
  //   /en/ , /en/… → English
  //   /zh/ , /zh/… → Chinese  (code matches the ui.ts dictionary)
  i18n: {
    locales: ['th', 'en', 'zh'],
    defaultLocale: 'th',
    routing: {
      // Thai (default) has no /th prefix; other languages are prefixed.
      prefixDefaultLocale: false,
      // Don't force-redirect "/" to "/th/".
      redirectToDefaultLocale: false,
    },
  },
});
