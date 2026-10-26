# OPC Bridge

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

Official bilingual showcase platform for OPC experimental initiatives.

**Live site:** <https://www.opcbridge.top> · **Contact:** [venslu.pro@gmail.com](mailto:venslu.pro@gmail.com)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Showcased Projects](#showcased-projects)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Internationalization](#internationalization)
- [SEO & Indexing](#seo--indexing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

OPC Bridge is a statically generated marketing site that presents four experimental projects spanning AI decision intelligence, graph world models, space computing, and smart rail monitoring. It is built with Next.js (App Router) and TypeScript, supports English and Chinese out of the box, and is deployed on Vercel.

## Features

- **Bilingual by default** — locale-prefixed routes (`/en`, `/zh`) with `Accept-Language` detection and automatic redirect from `/`
- **Static generation** — every page is pre-rendered at build time for fast loads and reliable crawling
- **SEO ready** — per-locale metadata, canonical URLs, hreflang (`en`, `zh`, `x-default`), Open Graph, Twitter cards, JSON-LD (`WebSite` + `Organization`), `robots.txt`, `sitemap.xml`, and Google site verification
- **Project showcase** — responsive cards with image/video media tabs, feature lists, and links to each project homepage
- **Image optimization** — `next/image` for local assets and remote Unsplash images
- **Investment CTA** — prominent contact email for investor and partnership inquiries

## Showcased Projects

Each project is declared in [`src/lib/constants/projects.ts`](src/lib/constants/projects.ts) with a unique `siteName` that maps to its homepage URL environment variable.

| #   | Project (EN)                           | Project (ZH)          | `siteName`   | Env var          |
| --- | -------------------------------------- | --------------------- | ------------ | ---------------- |
| 1   | AI-Powered Intelligent Decision System | AI 驱动的智能决策系统 | `ontodecide` | `ONTODECIDE_URL` |
| 2   | Graph World Model                      | 图世界模型            | `graphverse` | `GRAPHVERSE_URL` |
| 3   | Space Computing Technology             | 太空计算技术          | `starweave`  | `STARWEAVE_URL`  |
| 4   | Smart Light Rail Monitoring System     | 智慧轻轨监测系统      | `smartrail`  | `SMARTRAIL_URL`  |

## Tech Stack

| Category        | Technology                                        |
| --------------- | ------------------------------------------------- |
| Framework       | Next.js 15 (App Router, static generation)        |
| Language        | TypeScript 5 (strict mode)                        |
| UI library      | React 19                                          |
| Styling         | Global CSS with design tokens (`globals.css`)     |
| Package manager | pnpm 8                                            |
| Linting         | ESLint (`next/core-web-vitals`, `next/typescript`) |
| Formatting      | Prettier                                          |
| Runtime         | Node.js 24.x                                      |
| Deployment      | Vercel                                            |

## Getting Started

### Prerequisites

- Node.js 24.x (pinned via `engines.node`; must match the Vercel project runtime)
- pnpm 8 (`corepack enable` will pick up `packageManager` from `package.json`)

### Installation

```bash
pnpm install
```

### Environment Variables

All variables are optional and fall back to defaults. Copy the example file to get started:

```bash
cp .env.example .env.local
```

| Variable         | Description                                      | Fallback                        |
| ---------------- | ------------------------------------------------ | ------------------------------- |
| `SITE_URL`       | Full public URL used by metadata, sitemap, robots | `https://opcbridge.vercel.app`  |
| `CONTACT_EMAIL`  | Contact address rendered on the site             | `venslu.pro@gmail.com`          |
| `ONTODECIDE_URL` | Homepage of the AI Decision project              | `https://ontodecide.vercel.app` |
| `GRAPHVERSE_URL` | Homepage of the Graph World Model project        | `https://graphverse.vercel.app` |
| `STARWEAVE_URL`  | Homepage of the Space Computing project          | `https://starweave.vercel.app`  |
| `SMARTRAIL_URL`  | Homepage of the Smart Light Rail project         | `https://smartrail.vercel.app`  |

Values are read at build time. In production, `SITE_URL` is set to `https://www.opcbridge.top`; change it only together with the deployment, then rebuild — canonicals, hreflang, and the sitemap are generated from it.

### Run Locally

```bash
pnpm dev
```

Open <http://localhost:3000>; you will be redirected to `/en` or `/zh` based on your browser language.

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start the development server         |
| `pnpm build`      | Create an optimized production build |
| `pnpm start`      | Serve the production build           |
| `pnpm lint`       | Run ESLint                           |
| `pnpm type-check` | Run `tsc --noEmit`                   |

## Project Structure

```text
src/
├── app/
│   ├── [locale]/                 # Locale-prefixed routes (/en, /zh)
│   │   ├── layout.tsx            # Layout: metadata, Header, Footer, JSON-LD
│   │   └── page.tsx              # Home page: Hero, Projects, Contact
│   ├── globals.css               # Global styles and design tokens
│   ├── icon.svg                  # Favicon
│   ├── robots.ts                 # robots.txt generator
│   └── sitemap.ts                # sitemap.xml generator (with hreflang)
├── components/
│   ├── common/                   # Header, Footer, CTAButton, LanguageSwitcher
│   ├── sections/                 # Hero, ProjectsGrid, ProjectCard, MediaViewer, Contact
│   └── seo/
│       └── SchemaOrg.tsx         # JSON-LD renderer
├── lib/
│   ├── constants/                # Project definitions and site-wide constants
│   ├── data/                     # Data access layer (resolves project links)
│   ├── i18n/                     # Locale config, detection, dictionaries
│   │   └── translations/         # en.json, zh.json
│   ├── utils/                    # Localized string helpers
│   └── seo.ts                    # Metadata and JSON-LD builders
├── types/
│   └── index.ts                  # Shared types
└── middleware.ts                 # Locale detection and redirect
```

## Internationalization

- **Locales:** `en` and `zh`, configured in [`src/lib/i18n/config.ts`](src/lib/i18n/config.ts)
- **Routing:** content lives under `/{locale}`; `/` is redirected by the middleware based on `Accept-Language`
- **Dictionaries:** JSON files in `src/lib/i18n/translations/`, loaded with Promise-level memoization to avoid redundant imports
- **Coverage:** navigation, hero, project copy, contact copy, and footer are fully localized in both languages; changes must be applied to both files

## SEO & Indexing

The technical setup is complete and verifiable:

- [`src/lib/seo.ts`](src/lib/seo.ts) builds per-locale metadata: title/description, canonical, hreflang (`en`, `zh`, `x-default`), Open Graph, Twitter card, robots directives, JSON-LD, and the Google site verification token
- [`src/app/robots.ts`](src/app/robots.ts) and [`src/app/sitemap.ts`](src/app/sitemap.ts) expose `/robots.txt` and `/sitemap.xml` from `SITE_URL`
- `opcbridge.top` (HTTP and non-`www`) permanently redirects to `https://www.opcbridge.top`

Being crawlable is not the same as being indexed. After deploying, submit the site in [Google Search Console](https://search.google.com/search-console), then:

1. Verify the `https://www.opcbridge.top` property (the verification token is emitted by `buildMetadata`)
2. Submit `https://www.opcbridge.top/sitemap.xml`
3. Use URL Inspection to request indexing for `/en` and `/zh`

## Deployment

Deployed on Vercel; pushes to `main` trigger production builds.

1. Import the repository into Vercel
2. Set the environment variables above under _Settings → Environment Variables_ (at minimum `SITE_URL`)
3. Keep _Settings → General → Node.js Version_ on `24.x` to match `engines.node`
4. Redeploy after changing any environment variable, since values are inlined at build time

For a local production check:

```bash
pnpm build
pnpm start
```

## Contributing

1. Branch from `main` using a prefixed name, e.g. `fix/seo-google-indexing` or `chore/node-24-engine`
2. Keep changes focused; follow the existing TypeScript strict-mode conventions
3. Run `pnpm lint`, `pnpm type-check`, and `pnpm build` before opening a pull request
4. Open the pull request against `main` with a semantic title such as `fix(MASTER): ...`

## License

Proprietary. All rights reserved. No part of this repository may be copied, modified, or redistributed without permission.
