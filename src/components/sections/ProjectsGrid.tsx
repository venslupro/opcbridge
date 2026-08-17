import type { DictionaryProjects, Locale } from '@/types';
import { getProjects } from '@/lib/data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  readonly locale: Locale;
  readonly projects: DictionaryProjects;
}

export async function ProjectsGrid({ locale, projects }: ProjectsGridProps) {
  const projectList = await getProjects();

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">{projects.sectionBadge}</span>
          <h2 className="section-title">{projects.sectionTitle}</h2>
          <p className="section-subtitle">{projects.sectionSubtitle}</p>
        </div>
        <div className="projects-list">
          {projectList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              keyFeaturesLabel={projects.keyFeatures}
              tabImage={projects.tabImage}
              tabVideo={projects.tabVideo}
              _downloadLabel={projects.download}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
