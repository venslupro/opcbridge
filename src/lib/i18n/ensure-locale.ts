import 'server-only';

import { notFound } from 'next/navigation';

import type { Locale } from '@/types';

import { isLocale } from './config';

export async function ensureLocale(
  rawLocale: string | undefined,
): Promise<Locale> {
  if (rawLocale === undefined || !isLocale(rawLocale)) {
    notFound();
  }
  const locale: Locale = rawLocale;
  return locale;
}
