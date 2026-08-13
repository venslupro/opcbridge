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

  return (
    <div className="language-switcher" aria-label={label}>
      {LOCALES.map((item) => (
        <Link
          key={item}
          href={buildHref(item)}
          className={`language-option${item === locale ? ' active' : ''}`}
          aria-current={item === locale ? 'true' : undefined}
        >
          {LOCALE_LABELS[item]}
        </Link>
      ))}
    </div>
  );
}
