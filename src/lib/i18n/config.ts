import type { Locale } from '@/types';

import { SUPPORTED_LOCALES } from '@/types';

export type { Locale };

export const LOCALES = SUPPORTED_LOCALES;

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
