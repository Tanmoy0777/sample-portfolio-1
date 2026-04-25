# Tanmoy Acharjee — Portfolio

Personal portfolio for **Tanmoy Acharjee**, Account Management & Campaign Strategy specialist.

Live: https://tanmoy0777.github.io/tanmoy-portfolio/

## Stack

- React 18 + TypeScript + Vite
- GSAP / ScrollTrigger for animation
- Three.js + @react-three/fiber + Rapier physics for the 3D character and tech-stack scene
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/tanmoy-portfolio/
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

The Vite `base` is set to `/tanmoy-portfolio/` (in `vite.config.ts`) so asset paths match the GitHub Pages URL. If you ever rename the repo or move to a custom domain, update that one value.

## Editing content

All site copy (hero, about, capabilities, experience, projects, social links) lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit there and `npm run build` — pushing to `main` triggers an automatic redeploy.

The four full project case studies are static HTML in [`public/projects/`](public/projects/).

## Sections

1. Animated loader with marquee (Account Management / Campaign Strategy / CRM Workflows / BI Automation)
2. Navbar — `Tanmoy.` brand, ABOUT / WORK / CONTACT
3. Hero — "TANMOY ACHARJEE", rotating words, proof stats
4. About
5. What I Do — Account Intelligence and Campaign Strategy panels
6. Career timeline (3 roles)
7. Work — 4 horizontal project cards linking to full case studies
8. Tech Stack — animated 3D physics scene with Dynamics 365, ZoomInfo, Seamless.ai, Excel, PowerPoint, MS Office
9. Contact — email, focus, location, social links

## Performance notes

- DPR is capped on the Three.js canvases
- Heavy physics are gated by `isActive` / IntersectionObserver
- TechStack chunk is a single ~2.5MB lazy-loaded chunk so the initial paint stays light

## License

MIT — see `LICENSE`.
