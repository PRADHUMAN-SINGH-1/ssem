# Project Structure & Architecture Guide

Welcome to the **Shree Shyam Earth Movers (SSEM)** codebase. This document outlines the project structure, design patterns, asset locations, and maintenance guidelines. Keep this file updated whenever modules, sections, or assets are added or refactored.

---

## 1. Project Overview & Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Vanilla CSS with CSS Custom Properties (Variables), modular section-scoped stylesheets, and smooth scrolling via `lenis`.
- **Icons**: `lucide-react`
- **Linting**: `oxlint`

---

## 2. Directory Tree

```
ssem/
├── public/                               # Static public assets (served directly at root)
│   ├── images/
│   │   ├── gallery/                      # Gallery section showcase images (1-8)
│   │   │   ├── gallery-1.jpg
│   │   │   ├── gallery-2.jpg
│   │   │   ├── gallery-3.jpg
│   │   │   ├── gallery-4.jpg
│   │   │   ├── gallery-5.jpg
│   │   │   ├── gallery-6.jpg
│   │   │   ├── gallery-7.jpg
│   │   │   └── gallery-8-truck.jpg
│   │   ├── services/                     # Service cards showcase imagery
│   │   │   ├── heavy-machinery-plant-mobilization.webp
│   │   │   └── road-construction-material-haulage.avif
│   │   └── ssem-hero-poster.jpg          # Video placeholder poster for hero background
│   ├── videos/
│   │   └── about-truck.mp4               # High-definition fleet video for About section
│   ├── favicon.svg                       # Crisp vector favicon badge with authentic SSEM mark
│   ├── favicon-32x32.png                 # Standard 32x32 browser tab icon
│   ├── favicon-16x16.png                 # Standard 16x16 browser tab icon
│   ├── favicon.ico                       # Legacy multi-resolution ICO icon
│   ├── apple-touch-icon.png              # 180x180 high-res icon for Apple & mobile bookmarks
│   └── logo.png                          # OpenGraph social sharing preview banner
│
├── src/
│   ├── assets/                           # Bundled assets imported directly in TSX
│   │   └── logo-white.png                # Primary high-res transparent logo used in Header & Footer
│   │
│   ├── components/                       # Shared / Reusable UI components
│   │   ├── ContactForm.tsx & .css       # Interactive inquiry form with live validation & feedback
│   │   ├── Footer.tsx & .css            # Global footer with dynamic vertical links & contact info
│   │   └── Header.tsx & .css            # Sticky responsive navigation bar with mobile toggle
│   │
│   ├── data/                             # Single Source of Truth for site data
│   │   └── siteData.ts                   # Navigation, company info, services, projects, stats, gallery
│   │
│   ├── hooks/                            # Custom React hooks
│   │   └── useCountUp.ts                 # Smooth animated counter hook for stats and metrics
│   │
│   ├── sections/                         # Landing page sections in visual sequence
│   │   ├── Hero.tsx & .css              # Full-screen video hero, dispatch stats, CTA buttons
│   │   ├── About.tsx & .css             # (id="about") Company story, operational video, metrics
│   │   ├── Services.tsx & .css          # (id="capabilities") Core transport & fleet services
│   │   ├── Capabilities.tsx & .css      # Technical advantages, fleet tech, GPS tracking
│   │   ├── ProjectStatus.tsx & .css     # (id="projects") Live contracts, progress bars & dispatch table
│   │   ├── Gallery.tsx & .css           # (id="gallery") High-resolution operational field photo grid
│   │   ├── PreFooterCta.tsx & .css      # High-impact mobilization call-to-action banner
│   │   └── Contact.tsx & .css           # (id="contact") Office headquarters info & inquiry form
│   │
│   ├── styles/                           # Global CSS and Design Tokens
│   │   ├── variables.css                # Color palette, typography, radii, shadows, z-indices
│   │   ├── reset.css                    # Modern CSS reset and box-sizing rules
│   │   └── global.css                   # Global utilities, status badge colors, progress bars
│   │
│   ├── App.tsx                           # Root application component orchestrating all sections
│   ├── main.tsx                          # Vite React DOM entrypoint with Lenis smooth-scroll setup
│   └── vite-env.d.ts                    # TypeScript ambient declarations for Vite
│
├── index.html                            # HTML entrypoint with metadata, SEO & OpenGraph tags
├── package.json                          # NPM dependencies and development scripts
├── tsconfig.json                         # TypeScript base configuration
├── tsconfig.app.json                     # TypeScript application configuration
├── tsconfig.node.json                    # TypeScript tooling configuration
├── vite.config.ts                        # Vite configuration
└── STRUCTURE.md                          # This architecture & file structure reference
```

---

## 3. Page Layout & Navigation Anchors

The application is structured as a high-performance single-page application (SPA). Navigation items in `Header.tsx` correspond to specific anchor IDs defined on section components:

| Menu Label | Anchor Link | Component | Section Description |
| :--- | :--- | :--- | :--- |
| **Home** | `#hero` / `top` | `src/sections/Hero.tsx` | Hero banner with dispatch stats & CTAs |
| **About** | `#about` | `src/sections/About.tsx` | About SSEM, operational video, mission |
| **Capabilities** | `#capabilities`| `src/sections/Services.tsx` | Comprehensive Fleet Operations & Services |
| **Projects** | `#projects` | `src/sections/ProjectStatus.tsx` | Fleet Dispatch & Contracts with live status |
| **Gallery** | `#gallery` | `src/sections/Gallery.tsx` | Fleet in Action field photography |
| **Contact** | `#contact` | `src/sections/Contact.tsx` | Dispatch inquiry form & contact details |

---

## 4. Single Source of Truth (`src/data/siteData.ts`)

All content, project information, and navigation links are maintained in `src/data/siteData.ts`. When making content updates, update this file rather than hardcoding values into UI components.

Key exported data structures:
- `company`: Official name, short name, established year, address, direct phones, emails, working hours.
- `navigation`: Menu label, anchor href, order, and whether it displays as a highlighted CTA.
- `services`: Detailed descriptions, badges, features, and local image paths (`public/images/services/`).
- `capabilities`: Feature cards detailing fleet management, safety certifications, and compliance.
- `projects`: Live contract records containing `name`, `location`, `category`, `status` (`'ongoing'` | `'completed'` | `'awaited'`), and `progress` (`0-100`).
- `gallery`: Operational image records with balanced categories (`'fleet'`, `'aggregates'`, `'dispatch'`), tags, locations, and descriptions.

> **Dynamic Stats**:
> Both the metric summary cards in `ProjectStatus.tsx` and the `liveProjectsCount` in `siteData.ts` automatically compute metrics (Active Deployments, Completed Contracts, Awaited Operations) from the `projects` array to guarantee 100% consistency.

---

## 5. Asset Management Guidelines

- **Brand Logos**:
  - `src/assets/logo-white.png`: Used in Header and Footer. Imported directly into React components.
  - `public/logo.png`: Used for favicon and social share previews (`<link rel="icon">`, `<meta property="og:image">`).
- **Public Assets (`public/`)**:
  - Store gallery images in `public/images/gallery/` (`gallery-1.jpg` through `gallery-8-truck.jpg`).
  - Store service banner images in `public/images/services/` using descriptive kebab-case file names (e.g., `heavy-machinery-plant-mobilization.webp`).
  - Reference public assets in code using root-relative paths like `/images/...` or `/videos/...`.
- **No Duplicate Assets**:
  - Never keep identical images in both `src/assets/` and `public/`.
  - Always clean up unused files immediately.

---

## 6. Styling System & Conventions

- **Design Tokens**: Managed in `src/styles/variables.css`. Always use CSS variables:
  - Colors: `--color-primary`, `--color-primary-light`, `--color-accent`, `--color-surface`, `--color-bg`, `--color-text`, `--color-border`.
  - Spacing & Radii: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`.
- **Component Styles**: Each section has its own `.css` file co-located with the `.tsx` file (e.g., `Services.tsx` and `Services.css`).
- **Global Elements**: Status badges (`.status-badge`), `.status--ongoing`, `.status--completed`, and `.status--awaited` are declared in `src/styles/global.css`.

---

## 7. Developer Workflow & Commands

```bash
# Start development server
npm run dev

# Lint code with oxlint
npm run lint

# Production build (Type-check + Vite bundle)
npm run build

# Preview production build locally
npm run preview
```

---

## 8. Maintenance Checklist for Developers

Whenever you make changes to this repository:
1. **Adding a New Section**: Co-locate `NewSection.tsx` and `NewSection.css` inside `src/sections/`, import it into `App.tsx`, and update the navigation table in this document.
2. **Adding/Modifying Projects or Services**: Modify `src/data/siteData.ts` exclusively.
3. **Adding Media**: Place images in `public/images/<category>/`. Delete any replaced or obsolete images to keep the repository lightweight.
4. **Verifying Builds**: Run `npm run build` to confirm zero TypeScript and bundle errors before submitting changes.
5. **Keep STRUCTURE.md Updated**: Update the directory tree and tables in this file if files are created, renamed, or deleted.
