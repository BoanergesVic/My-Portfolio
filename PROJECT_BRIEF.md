# Project Brief: VIF Portfolio

## Purpose and scope

This repository contains the existing VIF portfolio web application. Its current page presents Technology, Projects, Experience, Creative Studio, and Contact sections.

Technology and Creative Studio are two intentional pillars of the portfolio. The work should continue within this application and its established architecture. This brief does not authorize scaffolding, redesigning, or rebuilding the site.

BOANERGES-AI is a separate project. This portfolio may accurately describe it as one of the owner's projects, but it is not the BOANERGES AI application or codebase.

## Verified repository facts

These statements describe the repository's files and configuration:

- The package is named `vif-portfolio`.
- It uses Next.js 16.4.2 with the App Router, React 19.3.0, TypeScript, and Tailwind CSS 4.
- TypeScript strict mode is enabled. The `@/*` import alias maps to `src/*`.
- Next.js is configured with `output: "export"` and unoptimized images. The static build output is configured for `out/`.
- The available package scripts are:
  - `dev`: `next dev`
  - `build`: `next build`
  - `start`: `next start` (existing script; its suitability for the static-export deployment workflow has not been established)
  - `lint`: `eslint`
- The application code is organized as follows:
  - `src/app/`: the home page, root layout, global styles, and favicon.
  - `src/components/`: header, footer, reusable section, and VIF monogram components.
  - `src/content/`: site navigation and technology/creative content, project entries, and experience entries.
- The layout uses Bodoni Moda for display text and Instrument Sans for body text.
- The current implementation includes responsive navigation, a skip-to-content link, visible keyboard focus styling, and reduced-motion handling.

These facts describe the current implementation. They do not establish the owner's final product requirements or approved brand specification.

## Current page and content structure

The home page currently renders these sections:

1. **Technology** — technology areas and descriptions are stored in `src/content/site.ts`.
2. **Projects** — featured project descriptions and status labels are stored in `src/content/projects.ts`.
3. **Experience** — placements, role labels, dates, locations, and descriptions are stored in `src/content/experience.ts`.
4. **Creative Studio** — the current content lists music and piano, videography and editing, graphic design, and media and audio.
5. **Contact** — email, LinkedIn, and GitHub links are conditionally rendered from `src/content/site.ts`.

Current content gaps visible in the repository:

- The contact configuration is empty, so no contact details or social links are displayed.
- Creative Studio currently displays text tiles rather than work samples, media, or project links.
- Project entries do not currently include repository links, demos, or supporting evidence of outcomes.
- Education and other biography details are limited to statements in the page source.
- Role titles, dates, locations, skills, and project status in content files have not been independently verified by the repository configuration.

## Personal claims in existing site content

The following are statements currently present in the site's content. Their presence in source files does not independently verify them. Confirm uncertain details with the owner before treating them as final public content or publishing them.

- **Identity and education:** The page names Victor Iyanuoluwa Fadeyi and describes him as a Computer Science student at the University of Ibadan.
- **Professional experience:** `src/content/experience.ts` lists an industrial trainee placement at Airtel Telecommunications with the displayed period `October 2026 to present`; a placement at the Institute of Agricultural Research and Training from June to August 2026; and a placement at the University of Ibadan College of Medicine, IT Unit, from 7 July to 26 September 2025. These are owner-supplied claims. For Airtel, confirm the exact start date, official role title, and description before final public publication; do not infer or assume a more precise date. Confirm the other placements' dates, official role titles, locations, and descriptions as well.
- **Technical interests and experience:** `src/content/site.ts` describes networking, cybersecurity, Cisco coursework, Linux learning environments, IT support, and a small Python command-line tool for network device records. Preserve the owner's confirmed level of experience; do not inflate coursework or practice into credentials or professional expertise.
- **Creative practice:** The current site lists piano and music, videography and editing, graphic design, and media and audio. The site does not yet show samples.
- **BOANERGES AI:** `src/content/projects.ts` describes an intelligent assistant envisioned for web, desktop, mobile, and voice. It says a Python/FastAPI/Uvicorn foundation exists and most of the roadmap is planned. Confirm current status and wording with the owner. Do not describe planned capabilities as implemented features.
- **VIF brand:** The source contains a first-pass VIF monogram and a dark, restrained visual style. Treat these as current design choices, not necessarily the final approved brand direction.
- **Contact information:** No email address, LinkedIn profile, or GitHub profile is currently configured.

## Project boundaries and working requirements

- Preserve the existing Next.js, React, TypeScript, Tailwind CSS, App Router, and static-export setup unless a proposed change is justified and discussed with the owner.
- Keep the portfolio separate from BOANERGES-AI. Any portfolio description of BOANERGES AI must accurately distinguish implemented work from prototypes, experiments, and planned capabilities.
- Do not invent personal details, credentials, employment information, dates, achievements, statistics, project results, or creative samples.
- Do not publish personal contact details or identifying information without the owner's explicit approval.
- Do not deploy the site, purchase services, or connect paid services without the owner's explicit approval.
- Do not expose secrets or commit sensitive or unrelated files.
- Before writing application code, read the relevant installed Next.js guide in `node_modules/next/dist/docs/`, as required by `AGENTS.md`.
