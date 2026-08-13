import { NextRequest, NextResponse } from 'next/server';

import { LOCALES } from '@/lib/i18n/config';
import { detectPreferredLocale } from '@/lib/i18n/detect-locale';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get('accept-language');
  const preferred = detectPreferredLocale(acceptLanguage);

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|assets|favicon.ico|robots.txt|.*\\..*).*)'],
};
