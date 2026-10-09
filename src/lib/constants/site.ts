export const SITE_NAME = 'OPC Bridge';

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL?.trim() || 'venslu.pro@gmail.com';

export const SITE_URL =
  process.env.SITE_URL?.trim().replace(/\/+$/, '') || 'https://opcbridge.vercel.app';

export const ONTODECIDE_URL =
  process.env.ONTODECIDE_URL?.trim().replace(/\/+$/, '') || 'https://ontodecide.vercel.app';
export const GRAPHVERSE_URL =
  process.env.GRAPHVERSE_URL?.trim().replace(/\/+$/, '') || 'https://graphverse.vercel.app';
export const STARWEAVE_URL =
  process.env.STARWEAVE_URL?.trim().replace(/\/+$/, '') || 'https://starweave.vercel.app';
export const SMARTRAIL_URL =
  process.env.SMARTRAIL_URL?.trim().replace(/\/+$/, '') || 'https://smartrail.vercel.app';

const PROJECT_URLS: Record<string, string> = {
  ontodecide: ONTODECIDE_URL,
  graphverse: GRAPHVERSE_URL,
  starweave: STARWEAVE_URL,
  smartrail: SMARTRAIL_URL,
};

/** Project homepage URL by siteName, resolved from environment variables. */
export function projectSiteUrl(siteName: string): string {
  return PROJECT_URLS[siteName] ?? `https://${siteName}.vercel.app`;
}
