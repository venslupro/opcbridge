import 'server-only';

import type { Project } from '@/types';

import { PROJECTS } from '@/lib/constants/projects';

/** Env var that overrides a project's homepage, e.g. `ontodecide` -> `ONTODECIDE_SITE_URL`. */
export function siteUrlEnvKey(siteName: string): string {
  return `${siteName.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_SITE_URL`;
}

/** Homepage URL: `<NAME>_SITE_URL` if set, otherwise `https://<name>.vercel.app`. */
export function resolveSiteLink(siteName: string): string {
  const override = process.env[siteUrlEnvKey(siteName)]?.trim();
  return override || `https://${siteName}.vercel.app`;
}

const projectsCache: readonly Project[] = PROJECTS.map((project) => ({
  ...project,
  siteLink: resolveSiteLink(project.siteName),
}));

export async function getProjects(): Promise<readonly Project[]> {
  return projectsCache;
}
