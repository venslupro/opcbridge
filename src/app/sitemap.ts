import type { MetadataRoute } from 'next';

import { LOCALES } from '@/lib/i18n/config';
import { SITE_URL } from '@/lib/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((item) => [item, `${SITE_URL}/${item}`])),
    },
  }));
}
