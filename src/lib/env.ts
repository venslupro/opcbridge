const FALLBACK_CONTACT_EMAIL = 'venslu.pro@gmail.com';
const FALLBACK_SITE_URL = 'https://opcbridge.vercel.app';

export function getContactEmail(): string {
  return process.env.CONTACT_EMAIL ?? FALLBACK_CONTACT_EMAIL;
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;
}
