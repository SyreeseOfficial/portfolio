# Portfolio Todo List

---

## 🔴 Bugs & Broken

- [x] **`index.html` is missing `</head>` closing tag** — fixed
- [x] **Tailwind CDN in production** — migrated to Vite Tailwind plugin; CSS now 20 kB vs CDN's ~3 MB dev build
- [x] **No `tailwind.config.js` or `postcss.config.js`** — created both; inline config moved to `tailwind.config.js`, styles to `index.css`
- [x] **`framer-motion` installed but never imported** — removed
- [x] **`react-helmet-async` installed but never used** — removed (including the overrides block)
- [x] **`vite.config.ts` bakes `GEMINI_API_KEY` into the client bundle** — removed the define block; key was unused in code anyway
- [x] **`ChangelogItem` type is missing `title?: string`** — was already present in types.ts
- [x] **`Dashboard.tsx` has unused imports** — removed `Gamepad` and `Youtube`
- [x] **`CaseStudy.tsx` redirects to `/404`** — changed to `<Navigate to="/" replace />`; also guarded useEffect against undefined project
- [x] **`Projects.tsx` has a redundant `window.scrollTo(0,0)`** — was already absent; previously fixed
- [x] **`TECH_STACK` has a broken/fake URL** — replaced `Antigravity` with `Claude Code` (https://claude.ai/code)
- [x] **`GEAR` has a placeholder URL** — `Vibe Coding` now points to https://claude.ai/code
- [x] **Accordion `max-h-[1000px]` can clip long content** — bumped to `max-h-[2000px]`
- [skip] **Photos module uses Picsum placeholder images** — keeping placeholders until real photos are ready

---

## 🟠 Accessibility

- [x] **Accordion toggle button missing `aria-expanded`** — screen readers can't tell if a `DashboardModule` is open or closed; add `aria-expanded={isOpen}` to the button
- [x] **`focus:outline-none` with no visible replacement** — the accordion button removes the focus ring entirely; add `focus-visible:ring-2 focus-visible:ring-electricBlue` instead
- [x] **Vague image alt text** — CaseStudy uses `"Project Screenshot 1/2"` and Dashboard uses `"Gallery image 1"` — make these descriptive (e.g., `"OrthoStar dashboard showing review management"`)
- [x] **`ChevronDown` scroll indicator lacks `aria-hidden`** — it's decorative; add `aria-hidden="true"` to its container
- [x] **MusicWidget auto-rotates content without `aria-live`** — add `aria-live="polite"` and `aria-atomic="true"` on the artist name span so screen readers announce updates
- [x] **No skip-to-content link** — add a visually-hidden `<a href="#work">Skip to content</a>` as the first focusable element in the DOM
- [x] **Small text contrast** — `font-mono text-xs text-grey` (#888 on #000) at 10–12px is borderline for WCAG AA; nudge grey to `#999` or `#aaa` for small labels

---

## 🟡 Design Consistency

- [x] **Inconsistent border radius** — unified to `rounded-md` across ProjectSection, CaseStudy images, and Projects archive grid
- [x] **"Back" link styles differ across pages** — both now use `font-mono text-xs text-grey hover:text-electricBlue`
- [x] **`ProjectSection` title font mismatch** — home feed cards now use `font-serif italic` to match the archive grid
- [x] **No active/current page indicator in header** — dot indicator (`● Page Name`) appears below the name on inner pages
- [x] **`hover:bg-blue-600` doesn't match `electricBlue`** — added `electricBlueDark: '#0062CC'` to Tailwind config; Hero and CaseStudy buttons now use `hover:bg-electricBlueDark`
- [x] **Hero CTA button and CaseStudy CTA button differ** — both now use `rounded-md hover:bg-electricBlueDark`
- [x] **Changelog dates use 2-digit years** — fixed to `"12-12-2025"`, `"12-17-2025"`, `"12-18-2025"`

---

## 🟡 SEO & Meta

- [x] **Page title is generic** — `<title>The Creative Builder</title>` won't rank for your name; change to `Syreese Delos Santos — Creative Builder`
- [x] **Missing Open Graph tags** — no `og:title`, `og:description`, `og:image`; links shared on social show blank previews
- [x] **Missing favicon** — no `<link rel="icon">` in `<head>`; browsers show a blank tab icon
- [x] **CaseStudy pages have no unique `<title>` or meta** — every project page shares the same generic head; dynamically update `document.title` with the project name in `CaseStudy.tsx`
- [x] **No canonical URL tag** — add `<link rel="canonical">` to avoid duplicate content issues

---

## 🟡 Performance

- [x] **No lazy loading on project images** — all project card images load on page load; add `loading="lazy"` to `<img>` tags below the fold
- [x] **No image dimensions set** — omitting `width`/`height` on `<img>` causes layout shift (CLS); add explicit dimensions or `aspect-ratio` wrappers
- [x] **Google Fonts blocks render** — fonts are loaded via a standard `<link>`; `&display=swap` was already present; confirmed
- [x] **No skeleton/placeholder for project images** — images pop in from nothing; add a `bg-white/5` shimmer placeholder that fades out when the image loads

---

## 🟢 UX Improvements

- [skip] **MusicWidget cycles too fast (2s)** — artists flash by before you can read them; increase interval to 4–5 seconds and add a CSS `opacity` fade transition between names
- [x] **CaseStudy back nav is fragile** — if a user lands directly on `/project/orthostar`, `location.state` is null and "BACK TO WORK" goes to `/`; this is correct behavior but could be improved by also checking `document.referrer`
- [x] **No visual cue that there are more than 3 projects** — the `ProjectSection` shows 3 and drops a "View All Projects" link at the bottom; add a muted project count label like `"3 of 11 shown"` near the section heading
- [x] **Accordion opens but doesn't scroll into view** — when a module opens, its content can be partially off-screen; smooth-scroll the opened section into view
- [x] **"Coming Soon" cards have no visual personality** — KonaFit shows a blank white/5 box; add a subtle pattern, initials, or icon so it doesn't look broken
- [x] **Contact section has no copy email option** — the `mailto:` link opens an email client; add a one-click "Copy email" button next to it
- [x] **No 404 page visual treatment** — `NotFound.tsx` presumably has minimal design; give it personality consistent with the rest of the site

---

## 🟢 Creative & Feature Upgrades

- [x] **Scroll-triggered entrance animations** — `ScrollReveal` component using `IntersectionObserver`; project cards stagger at 0/150/300ms, Dashboard section fades in on scroll
- [x] **Add a "Now" module to the Dashboard** — Building/Reading/Listening rows driven by `NOW` in `data.ts`
- [x] **Project filter tags on the archive page** — `tag` field on each project; sidebar label filter on `/projects`
- [x] **Keyboard navigation between case studies** — `←` / `→` key listeners in `CaseStudy.tsx` via `useNavigate`
- [x] **"Killed Projects" section** — Dashboard module; Hyperion listed; driven by `KILLED_PROJECTS` in `data.ts`
- [x] **"Bucket List" section** — Dashboard module driven by `BUCKET_LIST` in `data.ts`
- [x] **Live health stats section** — Dashboard module with static placeholder in `HEALTH_STATS`; update `data.ts` when wiring to a real API
- [x] **Subtle page transition** — `animate-fade-in` CSS keyframe defined in `index.html`; applied to Home, Projects, CaseStudy, NotFound
- [skip] **Noise/grain texture overlay** — skipped per user preference; flat black is fine as-is
- [x] **"Open to work / building" status badge** — `● Open to work` in Header, shown only on home page

---

## 🔵 Content

- [ ] **PushRise doesn't appear in the `PROJECTS` array** — there's a full privacy policy page at `/pushrise/privacy-policy`, which means it's a real shipped product, but it's invisible in the portfolio; add it as a project card
- [ ] **`metadata.json` description is stale** — reads "bridging physical construction and web technology" which has nothing to do with the actual site; update to match the real tagline or purpose
- [ ] **Case study writing is too simplified** — problem/solution/result copy reads at a very low reading level (short sentences, basic vocabulary); elevate it slightly to match the sophisticated design
- [ ] **Orthostar `videoUrl` is a `.jpg`** — the field is named `videoUrl` but it points to a static image everywhere in the codebase; rename to `coverUrl` in `types.ts` and `data.ts` for clarity
- [ ] **KonaFit is missing a `videoUrl`/cover image** — only project with no visual in the archive grid; add a cover screenshot
- [ ] **Momentum `caseStudy` has no `liveLink`** — same for KonaFit; either add links or mark them clearly as "Private / Personal Use"
- [ ] **Instagram link in Photos module points to `syreesepic`; Footer points to `syreesefit`** — pick the right handle or confirm both are intentional
