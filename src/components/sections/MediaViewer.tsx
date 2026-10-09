'use client';

import type { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';

type MediaType = 'image' | 'video';

interface MediaTab {
  readonly type: MediaType;
  readonly label: string;
  readonly render: (src: string, alt: string) => ReactElement;
}

function renderImage(src: string, alt: string): ReactElement {
  return <Image className="media-image" src={src} alt={alt} fill sizes="100vw" />;
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

interface MediaViewerProps {
  readonly images: readonly string[];
  readonly videos: readonly string[];
  readonly alt: string;
  readonly tabImage: string;
  readonly tabVideo: string;
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

  const activeMedia: MediaTab | undefined = tabs.find((t) => t.type === tab) ?? tabs[0];

  const activeSrc = activeMedia?.type === 'video' ? pickFirst(videos) : pickFirst(images);

  if (activeMedia === undefined || activeSrc === undefined) {
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
      <div className="media-frame">{activeMedia.render(activeSrc, alt)}</div>
    </div>
  );
}
