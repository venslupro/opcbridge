import 'server-only';

import type { Locale } from '@/types';
import type { Dictionary } from '@/types';

import { LOCALES } from './config';

const DICTIONARIES: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./translations/en.json').then((module) => module.default as Dictionary),
  zh: () => import('./translations/zh.json').then((module) => module.default as Dictionary),
};

const dictionaryCache = new Map<Locale, Promise<Dictionary>>();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const cached = dictionaryCache.get(locale);
  if (cached !== undefined) {
    return cached;
  }
  const loader = DICTIONARIES[locale];
  const promise = loader();
  dictionaryCache.set(locale, promise);
  return promise;
}

export function getAllLocales(): readonly Locale[] {
  return LOCALES;
}
