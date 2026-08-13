import type { Locale, Project } from '@/types';
import { localize } from '@/lib/utils/localize';
import { MediaViewer } from './MediaViewer';

interface ProjectCardProps {
  readonly project: Project;
  readonly locale: Locale;
  readonly keyFeaturesLabel: string;
  readonly tabImage: string;
  readonly tabVideo: string;
  readonly downloadLabel: string;
  readonly reversed: boolean;
}

export function ProjectCard({
  project,
  locale,
  keyFeaturesLabel,
  tabImage,
  tabVideo,
  reversed,
}: ProjectCardProps) {
  const title = localize(project.title, locale);
  const videos = project.media.videos ?? [];

  return (
    <article className={`project-card${reversed ? ' reversed' : ''}`} id={project.id}>
      <div className="project-media">
        <MediaViewer
          images={project.media.images}
          videos={videos}
          alt={title}
          tabImage={tabImage}
          tabVideo={tabVideo}
        />
      </div>
      <div className="project-body">
        <span className="project-index">{project.index}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-tagline">{localize(project.tagline, locale)}</p>
        <p className="project-description">{localize(project.description, locale)}</p>
        <div className="project-features">
          <h4 className="project-features-title">{keyFeaturesLabel}</h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature.en}>{localize(feature, locale)}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
