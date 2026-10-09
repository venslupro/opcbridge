import 'server-only';

import { notFound } from 'next/navigation';

import type { Locale } from '@/types';

import { isLocale } from './config';

export function ensureLocale(rawLocale: string | undefined): Locale {
  if (rawLocale === undefined || !isLocale(rawLocale)) {
    notFound();
  }
  return rawLocale;
}
