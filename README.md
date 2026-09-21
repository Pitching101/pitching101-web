# Pitching101 Web

Next.js (App Router) site for **Pitching101** — youth & elite pitching instruction focused on the **Naples, Florida** area.

## Preview

- Production preview (Vercel): https://pitching101-web.vercel.app/
- Repo: https://github.com/Pitching101/pitching101-web

This project replaces the legacy WordPress site over time. Do **not** change live pitching101.com DNS from this repo without an explicit cutover plan.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Deployed on Vercel (linked to this GitHub repo)

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Parent-friendly homepage (programs, CTAs, contact) |
| `/naples-fl-pitching-lessons` | Local SEO landing page for Naples FL pitching lessons |

## Contact (scaffold)

- Primary: Get started form at `/contact/`
- Phone appears in the site footer only (do not add it to pages)
- Email: nickdeisng@gmail.com
- Area: Naples, FL (no street address on site yet)
