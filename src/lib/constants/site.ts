export const SITE_NAME = 'OPC Bridge';

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL?.trim() || 'venslu.pro@gmail.com';

// Trailing slash stripped so callers can append paths like `${SITE_URL}/sitemap.xml`.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://opcbridge.vercel.app'
).replace(/\/+$/, '');
