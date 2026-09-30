import { normalizeUrl } from '@/lib/utils/url';

export const SITE_NAME = 'OPC Bridge';

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL?.trim() || 'venslu.pro@gmail.com';

// Normalized without a trailing slash so callers can append paths like `${SITE_URL}/sitemap.xml`.
export const SITE_URL =
  normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? 'https://opcbridge.vercel.app';
