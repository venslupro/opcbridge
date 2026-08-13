import 'server-only';

import type { Project } from '@/types';

import { PROJECTS } from '@/lib/constants/projects';

const projectsCache: readonly Project[] = PROJECTS;

export async function getProjects(): Promise<readonly Project[]> {
  return projectsCache;
}
