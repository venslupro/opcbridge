import 'server-only';

import type { Metadata } from 'next';

import type { Locale } from '@/types';

import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/constants/site';
import { getAllLocales, getDictionary } from '@/lib/i18n/get-dictionary';

export async function buildMetadata(locale: Locale): Promise<Metadata> {
  const dict = await getDictionary(locale);
  const description = dict.metadata.description;
  const title = dict.metadata.title;

  const locales = getAllLocales();
  const alternatesLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternatesLanguages[l] = `/${l}`;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: [
      'OPC',
      'Experimental Projects',
      'AI Decision System',
      'Graph World Model',
      'Smart Railway',
      'Predictive Maintenance',
      'Investment',
    ],
    authors: [
      {
        name: SITE_NAME,
      },
    ],
    creator: SITE_NAME,
    openGraph: {
      type: 'website',
      locale,
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&q=80&auto=format&fit=crop',
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&q=80&auto=format&fit=crop',
      ],
      creator: '@venslupro',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: alternatesLanguages,
    },
  };
}

export function buildWebSiteSchema({
  siteName,
  siteUrl,
  locale,
}: {
  readonly siteName: string;
  readonly siteUrl: string;
  readonly locale: Locale;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildOrganizationSchema({
  siteName,
  siteUrl,
  contactEmail,
}: {
  readonly siteName: string;
  readonly siteUrl: string;
  readonly contactEmail: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    email: contactEmail,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: contactEmail,
        contactType: 'investor relations',
        availableLanguage: ['English', 'Chinese'],
      },
    ],
    sameAs: [siteUrl],
  };
}

export function buildAllSchemaLd(locale: Locale): Array<Record<string, unknown>> {
  return [
    buildWebSiteSchema({ siteName: SITE_NAME, siteUrl: SITE_URL, locale }),
    buildOrganizationSchema({
      siteName: SITE_NAME,
      siteUrl: SITE_URL,
      contactEmail: CONTACT_EMAIL,
    }),
  ];
}
