# OPC Bridge

> Official showcase platform for OPC experimental initiatives.

OPC Bridge is a bilingual (Chinese / English) marketing website that showcases four flagship experimental projects spanning AI decision intelligence, graph world models, smart rail monitoring, and field-service maintenance agents. The site is built with Next.js and TypeScript, and is hosted on Vercel.

## Features

- **Bilingual support** — seamless Chinese (zh) / English (en) switching with locale-based routing
- **Static generation** — fully pre-rendered pages for fast loading and SEO
- **SEO optimized** — robots.txt, sitemap.xml, Open Graph, Twitter cards, and Google Site Verification
- **Project showcase** — responsive project cards with image / video media tabs, key features, and external project links
- **Contact & investment CTA** — prominent contact email for investor inquiries

## Tech Stack

| Category        | Technology                                      |
| --------------- | ----------------------------------------------- |
| Framework       | Next.js 15 (App Router)                         |
| Language        | TypeScript 5 (strict mode)                      |
| Styling         | CSS Modules / global CSS                        |
| Package manager | pnpm 8                                          |
| Linting         | ESLint (next/core-web-vitals, next/typescript)  |
| Formatting      | Prettier                                        |
| Deployment      | Vercel                                          |

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

| Variable              | Description                        | Default                          |
| --------------------- | ---------------------------------- | -------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (for SEO metadata) | `https://opcbridge.vercel.app`  |
| `CONTACT_EMAIL`        | Contact email displayed on site    | `venslu.pro@gmail.com`          |

### Development

```bash
pnpm dev
```

The site will be available at <http://localhost:3000>.

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start the development server         |
| `pnpm build`      | Create a production build            |
| `pnpm start`      | Start the production server          |
| `pnpm lint`       | Run ESLint                           |
| `pnpm type-check` | Run TypeScript type checking (tsc)   |

## Build & Deployment

```bash
pnpm build
pnpm start
```

The project is configured for deployment on Vercel. Push to the `main` branch to trigger a production deploy.

## Project Structure

```
src/
├── app/                     # Next.js App Router entry
│   └── [locale]/            # Locale-based routes (en, zh)
├── components/
│   ├── common/              # Shared components (Header, Footer, CTA, etc.)
│   ├── sections/            # Page sections (Hero, Projects, Contact)
│   └── seo/                 # SEO components (Schema.org JSON-LD)
├── lib/
│   ├── constants/           # Site and project constants
│   ├── data/                # Data access layer
│   ├── i18n/                # Internationalization (config, detection, dictionaries)
│   └── utils/               # Utility functions
├── types/                   # Shared TypeScript types
└── middleware.ts            # Locale detection & redirection middleware
```

## Internationalization

- Supported locales: `en`, `zh`
- Locale is detected from the `Accept-Language` header and redirected via middleware
- Translations are stored as JSON files in `src/lib/i18n/translations/`
- Dictionary loading uses Promise-level memoization to avoid redundant imports

## License

This project is proprietary. All rights reserved.
