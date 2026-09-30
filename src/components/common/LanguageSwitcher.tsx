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
      <svg
        className="language-icon"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
      </svg>
      <span>{LOCALE_LABELS[target]}</span>
    </Link>
  );
}
