export const SUPPORTED_LOCALES = ['en', 'zh'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export type LocalizedString = Record<Locale, string>;

export interface ProjectMedia {
  images: string[];
  videos?: string[];
}

export interface Project {
  id: string;
  index: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  media: ProjectMedia;
  downloadLink: string;
  downloadLabel: LocalizedString;
  siteLink?: string;
  siteLinkLabel?: LocalizedString;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    projects: string;
    contact: string;
    invest: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: HeroStat[];
  };
  projects: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    keyFeatures: string;
    download: string;
    visitSite: string;
    tabImage: string;
    tabVideo: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  languageSwitcher: {
    label: string;
  };
}

export type DictionaryNav = Dictionary['nav'];
export type DictionaryHero = Dictionary['hero'];
export type DictionaryProjects = Dictionary['projects'];
export type DictionaryContact = Dictionary['contact'];
export type DictionaryFooter = Dictionary['footer'];
export type DictionaryLanguageSwitcher = Dictionary['languageSwitcher'];
