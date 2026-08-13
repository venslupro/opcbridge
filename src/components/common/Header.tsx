import Link from 'next/link';

import type { DictionaryLanguageSwitcher, DictionaryNav, Locale } from '@/types';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  readonly locale: Locale;
  readonly nav: DictionaryNav;
  readonly languageSwitcher: DictionaryLanguageSwitcher;
  readonly siteName: string;
}

export function Header({ locale, nav, languageSwitcher, siteName }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-left">
          <Link href={`/${locale}`} className="logo">
            <span className="logo-mark">◈</span>
            <span className="logo-text">{siteName}</span>
          </Link>
          <nav className="nav">
            <Link href={`/${locale}#projects`} className="nav-link">
              {nav.projects}
            </Link>
            <Link href={`/${locale}#contact`} className="nav-link">
              {nav.contact}
            </Link>
            <Link href={`/${locale}#contact`} className="nav-link nav-link-accent">
              {nav.invest}
            </Link>
          </nav>
        </div>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} label={languageSwitcher.label} />
        </div>
      </div>
    </header>
  );
}
