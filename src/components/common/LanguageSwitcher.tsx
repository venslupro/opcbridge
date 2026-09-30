'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  readonly locale: Locale;
  readonly label: string;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function buildHref(target: Locale): string {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    if (firstSegment !== undefined && isLocale(firstSegment)) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    return `/${segments.join('/')}`;
  }

  // Show the language the user can switch to, not the current one.
  const target = LOCALES.find((item) => item !== locale) ?? locale;

  return (
    <Link
      href={buildHref(target)}
      className="language-switcher language-option"
      hrefLang={target}
      lang={target}
      aria-label={`${label}: ${LOCALE_LABELS[target]}`}
    >
      {LOCALE_LABELS[target]}
    </Link>
  );
}
