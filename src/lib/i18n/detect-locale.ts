import type { Locale } from '@/types';

import { DEFAULT_LOCALE, LOCALES } from './config';

export function detectPreferredLocale(
  acceptLanguageHeader: string | null,
  fallback: Locale = DEFAULT_LOCALE,
): Locale {
  const header = acceptLanguageHeader?.toLowerCase() ?? '';
  if (!header) {
    return fallback;
  }
  for (const locale of LOCALES) {
    if (header.includes(locale)) {
      return locale;
    }
  }
  return fallback;
}
