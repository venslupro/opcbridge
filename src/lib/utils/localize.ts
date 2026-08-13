import type { Locale, LocalizedString } from '@/types';

export function localize(text: LocalizedString, locale: Locale): string {
  return text[locale] ?? text.en;
}
