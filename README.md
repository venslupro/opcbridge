# OPC Bridge

> Official showcase platform for OPC experimental initiatives.

OPC Bridge is a bilingual (English / Chinese) marketing website that showcases four flagship experimental projects spanning AI decision intelligence, graph world models, space computing, and smart rail monitoring. Built with Next.js and TypeScript, statically generated, and deployed on Vercel.

## Features

- **Bilingual support** — seamless English (`en`) / Chinese (`zh`) switching with locale-prefixed routing and `Accept-Language` based redirection
- **Static generation** — all pages pre-rendered at build time for fast loading and SEO
- **SEO optimized** — `robots.txt`, `sitemap.xml`, Open Graph, Twitter cards, JSON-LD structured data, and Google Site Verification
- **Project showcase** — responsive project cards with image/video media tabs, key feature lists, and external project homepage links
- **Image optimization** — `next/image` for both local assets and remote Unsplash images
- **Contact & investment CTA** — prominent contact email for investor inquiries

## Tech Stack

| Category        | Technology                                          |
| --------------- | --------------------------------------------------- |
| Framework       | Next.js 15 (App Router)                             |
| Language        | TypeScript 5 (strict mode)                          |
| UI library      | React 19                                            |
| Styling         | Global CSS (`src/app/globals.css`)                  |
| Package manager | pnpm 8                                              |
| Linting         | ESLint (`next/core-web-vitals`, `next/typescript`)  |
| Formatting      | Prettier                                            |
| Deployment      | Vercel                                              |

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm 8

### Installation

```bash
pnpm install
```

### Environment Variables

Copy the example file and adjust values as needed:

```bash
cp .env.example .env.local
```

All variables are optional and fall back to sensible defaults. They are read at build time, so redeploy after changing them.

| Variable          | Description                                           | Default                            |
| ----------------- | ----------------------------------------------------- | ---------------------------------- |
| `SITE_URL`        | Full URL of the main site (SEO, sitemap, robots)      | `https://opcbridge.vercel.app`     |
| `CONTACT_EMAIL`   | Contact email displayed on the site                   | `venslu.pro@gmail.com`             |
| `ONTODECIDE_URL`  | Homepage URL of the AI Decision project               | `https://ontodecide.vercel.app`    |
| `GRAPHVERSE_URL`  | Homepage URL of the Graph World Model project         | `https://graphverse.vercel.app`    |
| `STARWEAVE_URL`   | Homepage URL of the Space Computing project           | `https://starweave.vercel.app`     |
| `SMARTRAIL_URL`   | Homepage URL of the Smart Light Rail project          | `https://smartrail.vercel.app`     |

`SITE_URL` is used directly as the main site URL. Each project declares a `siteName` in `src/lib/constants/projects.ts`, and its homepage URL is read from the matching `*_URL` environment variable.

### Development

```bash
pnpm dev
```

The site will be available at <http://localhost:3000>.

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start the development server         |
| `pnpm build`      | Create an optimized production build |
| `pnpm start`      | Start the production server          |
| `pnpm lint`       | Run ESLint                           |
| `pnpm type-check` | Run TypeScript type checking (`tsc`) |

## Projects

The site showcases four projects. Each is defined in `src/lib/constants/projects.ts` with a unique `siteName` that maps to its homepage URL environment variable.

| # | Project (EN)                           | Project (ZH)               | `siteName`   | Env var         |
| - | -------------------------------------- | -------------------------- | ------------ | --------------- |
| 1 | AI-Powered Intelligent Decision System | AI 驱动的智能决策系统      | `ontodecide` | `ONTODECIDE_URL`|
| 2 | Graph World Model                      | 图世界模型                 | `graphverse` | `GRAPHVERSE_URL`|
| 3 | Space Computing Technology             | 太空计算技术               | `starweave`  | `STARWEAVE_URL` |
| 4 | Smart Light Rail Monitoring System     | 智慧轻轨监测系统           | `smartrail`  | `SMARTRAIL_URL` |

## Project Structure

```
src/
├── app/                          # Next.js App Router entry
│   ├── [locale]/                 # Locale-prefixed routes (/en, /zh)
│   │   ├── layout.tsx            # Root layout (Header, Footer, SchemaOrg)
│   │   └── page.tsx              # Home page (Hero, Projects, Contact)
│   ├── globals.css               # Global styles and design tokens
│   ├── icon.svg                  # Site favicon / logo
│   ├── robots.ts                 # robots.txt generator
│   └── sitemap.ts                # sitemap.xml generator
├── components/
│   ├── common/                   # Shared components
│   │   ├── CTAButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── sections/                 # Page sections
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── MediaViewer.tsx       # Image/video tabbed media viewer
│   │   ├── ProjectCard.tsx
│   │   └── ProjectsGrid.tsx
│   └── seo/
│       └── SchemaOrg.tsx         # JSON-LD structured data renderer
├── lib/
│   ├── constants/
│   │   ├── projects.ts           # Project definitions (title, features, media)
│   │   └── site.ts               # Site URL, contact email, project URLs
│   ├── data/
│   │   └── projects.ts           # Data access layer (resolves siteLink)
│   ├── i18n/
│   │   ├── config.ts             # Locale list, labels, type guard
│   │   ├── detect-locale.ts      # Accept-Language header detection
│   │   ├── ensure-locale.ts      # Locale validation
│   │   ├── get-dictionary.ts     # Translation loading (memoized)
│   │   └── translations/
│   │       ├── en.json
│   │       └── zh.json
│   ├── utils/
│   │   └── localize.ts           # Localized string resolver
│   └── seo.ts                    # Metadata and JSON-LD builders
├── types/
│   └── index.ts                  # Shared TypeScript types
└── middleware.ts                 # Locale detection & redirect middleware
```

## Internationalization

- **Supported locales**: `en` (English), `zh` (Chinese)
- **Locale detection**: the `Accept-Language` header is parsed in middleware; visitors hitting `/` are redirected to their preferred locale
- **Routing**: pages live under `/{locale}` (e.g. `/en`, `/zh`)
- **Translations**: stored as JSON in `src/lib/i18n/translations/`, loaded via dynamic import with Promise-level memoization
- **Content**: all project titles, descriptions, features, and UI strings are localized

## Deployment

The project is configured for deployment on Vercel.

1. Push to the `main` branch to trigger a production deploy
2. Configure environment variables in Vercel under _Settings → Environment Variables_, then redeploy

For local production testing:

```bash
pnpm build
pnpm start
```

## License

This project is proprietary. All rights reserved.
