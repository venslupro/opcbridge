import 'server-only';

import type { Project } from '@/types';

import { PROJECTS } from '@/lib/constants/projects';
import { projectSiteUrl } from '@/lib/constants/site';

const projectsCache: readonly Project[] = PROJECTS.map((project) => ({
  ...project,
  siteLink: projectSiteUrl(project.siteName),
}));

export async function getProjects(): Promise<readonly Project[]> {
  return projectsCache;
}
