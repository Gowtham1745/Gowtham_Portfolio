# Gowtham A — Portfolio

Built with Astro + Tailwind CSS. Fully static, deployed via GitHub Actions to GitHub Pages.

## Local development
    npm install
    npm run dev

## Project structure
- src/pages/index.astro — homepage (hero, about, experience, skills, education, certifications, contact)
- src/pages/projects/*.astro — one file per detailed case study
- src/data/projects.js — the project list that drives the homepage cards; every project lives here whether or not it has a detail page
- src/layouts/Layout.astro — shared nav/footer/head
- src/styles/global.css — design tokens (colors, fonts) — change once, applies everywhere
- public/media/ — images and video referenced by /media/... paths

## Adding a new project
1. Add an object to the projects array in src/data/projects.js (copy an existing one as a template).
2. Drop any images/video into public/media/.
3. If it deserves a full case study page, copy src/pages/projects/rc-aircraft.astro to a new file named after your project's slug, edit the content, and set that project's href in projects.js to match.
4. If it's a smaller project, leave href: null — it shows as a card with no link, same as the VAWT/Drone/EV entries now.
5. Commit and push to main — GitHub Actions rebuilds and redeploys automatically.

## Deploying for the first time
1. Push this repo to GitHub (e.g. Gowtham1745/portfolio).
2. In the repo's Settings, Pages, set Source to "GitHub Actions".
3. Push to main — the included workflow (.github/workflows/deploy.yml) builds and publishes automatically.

## Known gaps (see chat for details)
- Unreal Engine showcase videos and the additive-manufacturing/Ansys certificate images are referenced in copy but not yet placed in public/media/ — pull them from Drive and drop them in, then wire up a video tag on the Pandora project page.
- No email address or resume file yet — add them to the Contact section in index.astro when ready.
- Contra-Rotating VAWT, Drone Additive Manufacturing, and EV Battery & Motor Design have no case-study page yet — same steps as above once you have content and confirm the Jet Aerospace date discrepancy noted in chat.
