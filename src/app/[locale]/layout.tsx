import type { ReactNode } from 'react';

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { SITE_NAME } from '@/lib/constants/site';
import { ensureLocale } from '@/lib/i18n/ensure-locale';
import { getAllLocales, getDictionary } from '@/lib/i18n/get-dictionary';
import { buildAllSchemaLd, buildMetadata } from '@/lib/seo';

import '../globals.css';

import { Inter, Noto_Sans_SC } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

interface LocaleLayoutProps {
  readonly children: ReactNode;
  readonly params: Promise<{ readonly locale: string }>;
}

export function generateStaticParams() {
  return getAllLocales().map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<{ readonly locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = await ensureLocale(rawLocale);
  return buildMetadata(locale);
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale = await ensureLocale(rawLocale);
  const dict = await getDictionary(locale);
  const jsonLd = buildAllSchemaLd(locale);

  return (
    <html
      lang={locale === 'zh' ? 'zh-CN' : 'en'}
      className={`${inter.variable} ${notoSansSC.variable}`}
    >
      <body>
        <SchemaOrg data={jsonLd} />
        <Header
          locale={locale}
          nav={dict.nav}
          languageSwitcher={dict.languageSwitcher}
          siteName={SITE_NAME}
        />
        <main>{children}</main>
        <Footer footer={dict.footer} siteName={SITE_NAME} />
      </body>
    </html>
  );
}
