# Portfolio Todo List

---

## 🔴 Bugs & Broken

- [ ] **`index.html` is missing `</head>` closing tag** — invalid HTML, could cause browser parsing quirks
- [ ] **Tailwind CDN in production** — `cdn.tailwindcss.com` ships the full unoptimized dev build; switch to the Vite Tailwind plugin for tree-shaking and real CSS output
- [ ] **No `tailwind.config.js` or `postcss.config.js`** — the npm-installed `tailwindcss` package is entirely unused; the CDN does all the work, which means unused classes are never purged and custom config only lives inside `index.html`'s inline `<script>` block
- [ ] **`framer-motion` installed but never imported** — it's in `package.json` but zero files import it; remove it to cut ~140KB from the production bundle
- [ ] **`react-helmet-async` installed but never used** — added with an `overrides` block (effort was spent setting it up), but `<HelmetProvider>` and `<Helmet>` are never imported anywhere; wire it up to fix all the per-page SEO issues below, or remove it
- [ ] **`vite.config.ts` bakes `GEMINI_API_KEY` into the client bundle** — the `define` block inlines the API key into the built JS; if `.env` has that key set, anyone can read it by inspecting the bundle; move API calls to a server-side function or remove the key exposure
- [ ] **`ChangelogItem` type is missing `title?: string`** — `Dashboard.tsx` accesses `log.title` but `types.ts` only defines `date` and `change` on `ChangelogItem`; TypeScript won't catch bugs here; add `title?: string` to the interface
- [ ] **`Dashboard.tsx` has unused imports** — `Gamepad` is imported but data uses `Gamepad2` (imported in `data.ts`); `Youtube` is imported but only used in `Footer.tsx`; both are dead imports that bloat the module
- [ ] **`CaseStudy.tsx` redirects to `/404`** — there's no explicit `/404` route; the wildcard `*` catches it so it renders correctly, but the URL becomes `/404` instead of staying on the bad path; render `<NotFound />` directly or use `<Navigate to="/" replace />`
- [ ] **`Projects.tsx` has a redundant `window.scrollTo(0,0)`** — `App.tsx` already handles this with `<ScrollToTop />`; remove the duplicate `useEffect` in `Projects.tsx`
- [ ] **`TECH_STACK` has a broken/fake URL** — `https://antigravity.google/` doesn't exist; fix or remove
- [ ] **`GEAR` has a placeholder URL** — `Vibe Coding` links to `"#"`; fill it in or remove the item
- [ ] **Accordion `max-h-[1000px]` can clip long content** — Desk Setup and Books sections can exceed 1000px on mobile; bump to `max-h-[2000px]` or use a JS-measured height
- [ ] **Photos module uses Picsum placeholder images** — `picsum.photos` random images aren't your photos; replace with real ones or remove the section

---

## 🟠 Accessibility

- [ ] **Accordion toggle button missing `aria-expanded`** — screen readers can't tell if a `DashboardModule` is open or closed; add `aria-expanded={isOpen}` to the button
- [ ] **`focus:outline-none` with no visible replacement** — the accordion button removes the focus ring entirely; add `focus-visible:ring-2 focus-visible:ring-electricBlue` instead
- [ ] **Vague image alt text** — CaseStudy uses `"Project Screenshot 1/2"` and Dashboard uses `"Gallery image 1"` — make these descriptive (e.g., `"OrthoStar dashboard showing review management"`)
- [ ] **`ChevronDown` scroll indicator lacks `aria-hidden`** — it's decorative; add `aria-hidden="true"` to its container
- [ ] **MusicWidget auto-rotates content without `aria-live`** — add `aria-live="polite"` and `aria-atomic="true"` on the artist name span so screen readers announce updates
- [ ] **No skip-to-content link** — add a visually-hidden `<a href="#work">Skip to content</a>` as the first focusable element in the DOM
- [ ] **Small text contrast** — `font-mono text-xs text-grey` (#888 on #000) at 10–12px is borderline for WCAG AA; nudge grey to `#999` or `#aaa` for small labels

---

## 🟡 Design Consistency

- [ ] **Inconsistent border radius** — `ProjectSection` uses `rounded-sm`, `CaseStudy` uses `rounded-md`, `Projects.tsx` uses `rounded-lg`; pick one radius for project image cards and apply it everywhere
- [ ] **"Back" link styles differ across pages** — `CaseStudy` uses `font-mono text-xs text-grey`, `Projects` uses unstyled `text-grey`; unify into one shared back-link style
- [ ] **`ProjectSection` title font mismatch** — project titles in the home feed use `font-serif`, but the archive grid also uses `font-serif italic`; home feed cards drop the `italic`; decide and align
- [ ] **No active/current page indicator in header** — the header has no way to tell a visitor which page they're on; add a subtle active state or breadcrumb on inner pages
- [ ] **`hover:bg-blue-600` doesn't match `electricBlue`** — Hero and NotFound buttons use `hover:bg-blue-600` (#2563EB) but `electricBlue` is `#007BFF`; the hue visibly shifts on hover; change to `hover:brightness-90` or define a consistent darker blue in the Tailwind config
- [ ] **Hero CTA button and CaseStudy CTA button differ** — Hero uses `rounded-md hover:bg-blue-600`, CaseStudy uses `rounded-sm hover:bg-electricBlue`; unify hover color and radius
- [ ] **Changelog dates use 2-digit years** — `"12-12-25"` is ambiguous (year 25 or 2025?); use 4-digit years (`"12-12-2025"`) for clarity

---

## 🟡 SEO & Meta

- [ ] **Page title is generic** — `<title>The Creative Builder</title>` won't rank for your name; change to `Syreese Delos Santos — Creative Builder`
- [ ] **Missing Open Graph tags** — no `og:title`, `og:description`, `og:image`; links shared on social show blank previews
- [ ] **Missing favicon** — no `<link rel="icon">` in `<head>`; browsers show a blank tab icon
- [ ] **CaseStudy pages have no unique `<title>` or meta** — every project page shares the same generic head; dynamically update `document.title` with the project name in `CaseStudy.tsx`
- [ ] **No canonical URL tag** — add `<link rel="canonical">` to avoid duplicate content issues

---

## 🟡 Performance

- [ ] **No lazy loading on project images** — all project card images load on page load; add `loading="lazy"` to `<img>` tags below the fold
- [ ] **No image dimensions set** — omitting `width`/`height` on `<img>` causes layout shift (CLS); add explicit dimensions or `aspect-ratio` wrappers
- [ ] **Google Fonts blocks render** — fonts are loaded via a standard `<link>`; add `&display=swap` to the fonts URL (it may already be there, but confirm) and consider self-hosting for reliability
- [ ] **No skeleton/placeholder for project images** — images pop in from nothing; add a `bg-white/5` shimmer placeholder that fades out when the image loads

---

## 🟢 UX Improvements

- [ ] **MusicWidget cycles too fast (2s)** — artists flash by before you can read them; increase interval to 4–5 seconds and add a CSS `opacity` fade transition between names
- [ ] **CaseStudy back nav is fragile** — if a user lands directly on `/project/orthostar`, `location.state` is null and "BACK TO WORK" goes to `/`; this is correct behavior but could be improved by also checking `document.referrer`
- [ ] **No visual cue that there are more than 3 projects** — the `ProjectSection` shows 3 and drops a "View All Projects" link at the bottom; add a muted project count label like `"3 of 11 shown"` near the section heading
- [ ] **Accordion opens but doesn't scroll into view** — when a module opens, its content can be partially off-screen; smooth-scroll the opened section into view
- [ ] **"Coming Soon" cards have no visual personality** — KonaFit shows a blank white/5 box; add a subtle pattern, initials, or icon so it doesn't look broken
- [ ] **Contact section has no copy email option** — the `mailto:` link opens an email client; add a one-click "Copy email" button next to it
- [ ] **No 404 page visual treatment** — `NotFound.tsx` presumably has minimal design; give it personality consistent with the rest of the site

---

## 🟢 Creative & Feature Upgrades

- [ ] **Scroll-triggered entrance animations** — sections beyond the hero animate in on load, not on scroll; use `IntersectionObserver` to trigger `fade-in-up` as each section enters the viewport
- [ ] **Add a "Now" module to the Dashboard** — a live-feeling widget showing what you're currently building, reading, or listening to; updates when `data.ts` changes
- [ ] **Project filter tags on the archive page** — add type tags (SaaS, CLI, Mobile, Community) to each project and a filter bar on `/projects` so visitors can browse by category
- [ ] **Keyboard navigation between case studies** — add `←` / `→` arrow key listeners in `CaseStudy.tsx` to jump between projects without reaching for the mouse
- [ ] **"Killed Projects" section** *(already in Changelog as future TODO)* — a graveyard of ideas that didn't ship; great for personality and relatability
- [ ] **"Bucket List" section** *(already in Changelog as future TODO)* — lightweight addition to Dashboard modules
- [ ] **Live health stats section** *(already in Changelog as future TODO)* — steps, calories, sleep; pull from a fitness API or Google Fit export
- [ ] **Subtle page transition** — add a `opacity 0→1` or slide transition between routes using React Router's location key instead of the hard cut that happens now
- [ ] **Noise/grain texture overlay** — a 3–5% CSS `background-image: url(noise.png)` overlay adds tactile depth to the flat black background without clashing with the aesthetic
- [ ] **"Open to work / building" status badge** — a small pill in the header or hero (`● Building in public`) communicates availability and energy at a glance

---

## 🔵 Content

- [ ] **PushRise doesn't appear in the `PROJECTS` array** — there's a full privacy policy page at `/pushrise/privacy-policy`, which means it's a real shipped product, but it's invisible in the portfolio; add it as a project card
- [ ] **`metadata.json` description is stale** — reads "bridging physical construction and web technology" which has nothing to do with the actual site; update to match the real tagline or purpose
- [ ] **Case study writing is too simplified** — problem/solution/result copy reads at a very low reading level (short sentences, basic vocabulary); elevate it slightly to match the sophisticated design
- [ ] **Orthostar `videoUrl` is a `.jpg`** — the field is named `videoUrl` but it points to a static image everywhere in the codebase; rename to `coverUrl` in `types.ts` and `data.ts` for clarity
- [ ] **KonaFit is missing a `videoUrl`/cover image** — only project with no visual in the archive grid; add a cover screenshot
- [ ] **Momentum `caseStudy` has no `liveLink`** — same for KonaFit; either add links or mark them clearly as "Private / Personal Use"
- [ ] **Instagram link in Photos module points to `syreesepic`; Footer points to `syreesefit`** — pick the right handle or confirm both are intentional
