# syreese.com

Personal portfolio of Syreese Delos Santos. Next.js and TypeScript, statically generated and hosted on Vercel.

## Run it

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. `npm run build` makes the production build.

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, global CSS, sitemap, robots |
| `components/` | UI, with home page sections in `components/home/` |
| `data/projects.ts` | All projects. Array order sets the archive and "next project" order |
| `data/home.ts` | Home page content |
| `content/posts/` | Blog posts |
| `content/changelog/` | Changelog entries |
| `public/uploads/` | Images, videos and the resume |

## Add a post

Create `content/posts/your-slug.md`, then push. It goes live after the Vercel build.

```
---
title: Your title
date: 2026-10-01
summary: Optional. Defaults to the first paragraph.
---

Body in markdown.
```

## Add a changelog entry

Same format, in `content/changelog/your-slug.md`. The home page shows the newest four.

## Add a project

Add an entry to `data/projects.ts` and put its images at `public/uploads/projects/<slug>.webp` and `<slug>-thumb.webp`. The build fails if an image is missing.
