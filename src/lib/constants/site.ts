export const SITE_NAME = 'OPC Bridge';

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL?.trim() || 'venslu.pro@gmail.com';

/**
 * Root domain the site and all project homepages live under, e.g. `opcbridge.top`.
 * Tolerates a pasted URL: scheme, `www.`, path and trailing slashes are stripped.
 */
export const SITE_DOMAIN =
  process.env.SITE_DOMAIN?.trim()
    .replace(/^[a-z][a-z0-9+.-]*:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/.*$/, '') || 'opcbridge.top';

export const SITE_URL = `https://www.${SITE_DOMAIN}`;

/** Project homepage on its own subdomain, e.g. `ontodecide` -> `https://ontodecide.opcbridge.top`. */
export function projectSiteUrl(siteName: string): string {
  return `https://${siteName}.${SITE_DOMAIN}`;
}
