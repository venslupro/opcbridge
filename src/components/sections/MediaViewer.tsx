'use client';

import type { ComponentType, ReactElement } from 'react';
import { useState } from 'react';

type MediaType = 'image' | 'video';

interface MediaRendererProps {
  readonly src: string;
  readonly alt: string;
}

interface MediaTab {
  readonly type: MediaType;
  readonly label: string;
  readonly render: (src: string, alt: string) => ReactElement;
}

function renderImage(src: string, alt: string): ReactElement {
  return (
    <img
      className="media-image"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}

function renderVideo(src: string, alt: string): ReactElement {
  return (
    <video
      className="media-video"
      src={src}
      controls
      preload="metadata"
      playsInline
      aria-label={alt}
    />
  );
}

const DEFAULT_REGISTRY: Record<MediaType, ComponentType<MediaRendererProps>> = {
  image: function ImageRenderer({ src, alt }: MediaRendererProps): ReactElement {
    return renderImage(src, alt);
  },
  video: function VideoRenderer({ src, alt }: MediaRendererProps): ReactElement {
    return renderVideo(src, alt);
  },
};

export type MediaRendererRegistry = Partial<Record<MediaType, ComponentType<MediaRendererProps>>>;

interface MediaViewerProps {
  readonly images: readonly string[];
  readonly videos: readonly string[];
  readonly alt: string;
  readonly tabImage: string;
  readonly tabVideo: string;
  readonly registryOverride?: MediaRendererRegistry;
}

function pickFirst(items: readonly string[]): string | undefined {
  return items[0];
}

export function MediaViewer({
  images,
  videos,
  alt,
  tabImage,
  tabVideo,
  registryOverride,
}: MediaViewerProps): ReactElement {
  const hasVideo = videos.length > 0;
  const [tab, setTab] = useState<MediaType>('image');

  const imageTab: MediaTab = {
    type: 'image',
    label: tabImage,
    render: renderImage,
  };

  const videoTab: MediaTab | undefined = hasVideo
    ? {
      type: 'video',
      label: tabVideo,
      render: renderVideo,
    }
    : undefined;

  const tabs: readonly MediaTab[] = [imageTab, videoTab].filter(
    (t): t is MediaTab => t !== undefined,
  );

  const activeMedia: MediaTab | undefined =
    tabs.find((t) => t.type === tab) ?? tabs[0];

  const activeSrc =
    activeMedia?.type === 'video' ? pickFirst(videos) : pickFirst(images);

  const renderer = registryOverride?.[activeMedia?.type ?? 'image'] ??
    DEFAULT_REGISTRY[activeMedia?.type ?? 'image'];

  if (activeMedia === undefined || activeSrc === undefined || renderer === undefined) {
    const fallbackSrc = pickFirst(images);
    if (fallbackSrc === undefined) {
      return <div className="media-viewer media-viewer-empty" />;
    }
    return (
      <div className="media-viewer">
        <div className="media-frame">{renderImage(fallbackSrc, alt)}</div>
      </div>
    );
  }

  const RendererComponent = renderer;

  return (
    <div className="media-viewer">
      {tabs.length > 1 && (
        <div className="media-tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.type}
              type="button"
              role="tab"
              aria-selected={t.type === tab}
              className={`media-tab${t.type === tab ? ' active' : ''}`}
              onClick={() => setTab(t.type)}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
      <div className="media-frame">
        <RendererComponent src={activeSrc} alt={alt} />
      </div>
    </div>
  );
}
