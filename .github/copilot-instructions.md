# Copilot Instructions for Team EPFL 2025 Wiki

## Project Overview
- This is a React + TypeScript single-page app for the iGEM EPFL 2025 team wiki, built with Vite.
- All code/assets to generate the wiki (except images/videos) must be in this repo. Images/icons/fonts go on static.igem.wiki; videos are embedded from iGEM Video Universe.

## Key Structure & Patterns
- **App entry:** `src/main.tsx` (mounts the app)
- **Main container:** `src/containers/App/App.tsx`
- **Navigation:** `src/components/Navbar/Navbar.tsx` and `src/pages.ts` (defines routes/pages)
- **Content pages:** `src/contents/*.tsx` (each file = a wiki page)
- **Reusable UI:** `src/components/` (Navbar, Footer, LoadingSpinner, etc.)
- **Utilities:** `src/utils/` (e.g., `stringToSlug.ts`, `getPathMapping.ts`)
- **Styling:** CSS modules per component (e.g., `Navbar.css`, `drone.css`)

## Developer Workflows
- **Install:** `yarn install` (Node.js v18.18.0 or >=20.0.0 recommended)
- **Dev server:** `yarn run dev` (hot reloads at http://localhost:5173)
- **Build:** `yarn run build` (outputs to `dist/`)
- **Test/Deploy:** Automated on commit to main branch (CI/CD not in this repo)

## Project Conventions
- **Pages:** Add new pages by creating a `.tsx` in `src/contents/` and mapping it in `src/pages.ts`.
- **Components:** Place shared UI in `src/components/`, use subfolders for organization.
- **Containers:** Use `src/containers/` for major app sections (e.g., Team, Project, Wetlab).
- **No direct asset imports:** Do not import images/fonts directly; use URLs from static.igem.wiki.
- **Routing:** All navigation is handled via React Router and `src/pages.ts`.
- **TypeScript:** Use strict typing; see `tsconfig.json` for settings.

## Integration & Dependencies
- Uses React, React Router, React Bootstrap, Bootstrap, Vite.
- No backend/server code in this repo; all is static frontend.
- For new dependencies, update `package.json` and run `yarn install`.

## Examples
- To add a new wiki page:
  1. Create `src/contents/my-page.tsx`.
  2. Add an entry in `src/pages.ts` to map a route to your new page.
- To add a new component:
  1. Create `src/components/MyComponent/MyComponent.tsx` and (optionally) `MyComponent.css`.
  2. Import and use in containers/pages as needed.

## References
- See `README.md` for setup and structure.
- See `src/pages.ts` and `src/contents/` for routing/content patterns.
- See `src/containers/App/App.tsx` for app structure.

---

If you are unsure about a pattern, check for similar usage in `src/contents/`, `src/components/`, or `src/containers/` before introducing new conventions.
