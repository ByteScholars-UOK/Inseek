# Inseek — Team Guide & Task Map

**Course**: CSCI 12562 — Web Programming  
**Team**: ByteScholars-UOK  
**Version**: 2.0 (June 2026)

## 1. How Our Site Works

Inseek is a multi-page job search platform. Pages share a common navigation bar, footer, and global stylesheet.

### Navigation (every page)
**Home · Jobs · Messages · Saved · About**

### Core Pages
- **index.html** — Landing (hero, stats, feature cards, auth forms)
- **dashboard.html** — User dashboard (slider, featured jobs)
- **jobsearch.html** — Job search with live filtering
- **messages.html** — Chat with Inseek support

### User Pages
- **profile.html** — Candidate profile (dynamic via localStorage, propagates site-wide)
- **apply.html** — 3-step multi-step application form
- **saved-jobs.html** — Saved jobs (persisted in localStorage)
- **docs/process/index.html** — About Us (Mission, Vision, etc.)

### Shared
- **global.css** — Master stylesheet with brand color variables
- **footer.js** — Dynamic footer with Bootstrap Icons, loaded via document.write
- **cache.js** — Image preloading with slider-first priority

## 2. Who Is Doing What

### Rithika — Dashboard & Design System
- dashboard.html layout and slider
- global.css (brand colors, nav, hero, slide layers, chat, cards)
- dashboard.js slider logic (slide-left animation, preloading, z-index swap)
- Brand design owner

### Nimeth — Home & Search
- index.html (hero, stats ribbon, feature cards)
- search.js (55+ job dataset, live filtering by keyword/location/category)
- cache.js (image preloading with prefetch)

### Nisagi — Profile
- profile.html (responsive layout, photo upload, form fields)
- profile.js (save/load all fields to localStorage, update nav site-wide)

### Dinuga — Auth
- auth.html (sign up / login toggle)
- auth.js (email validation, password ≥ 8 chars, confirm match, localStorage name save)

### Yasith — Categories
- categories.html (job sectors grid with hover animations)
- categories.js (4 category cards with inline-styled image wrappers)

### Prabodha — Apply
- apply.html (3-step multi-step form: Personal Info → Resume & Skills → Review & Submit)
- apply.js (step navigation, per-step validation, progress bar, clock on submit, success summary)

### Tharusha — Companies
- companies.html (company directory with embedded video)

### Dulina — Saved Jobs & Footer
- saved-jobs.html (localStorage-backed saved jobs with remove, empty state, responsive card layout on mobile)
- footer.js (dynamic footer with Bootstrap Icons CDN, contact links, social icons)

## 3. Brand Colors

Defined in `global.css` as CSS custom properties:

| Role | Color | Hex |
|------|-------|-----|
| Brand Primary | Blue | `#007AFF` |
| Brand Dark | Darker Blue | `#0059C6` |
| Brand Light | Lighter Blue | `#4DA6FF` |
| Text Main | Almost Black | `#0B0F19` |
| Text Muted | Gray | `#64748B` |
| Background | Off-White | `#F8FAFC` |

## 4. Key Technical Decisions

- **Bootstrap 5** (CDN) instead of Tailwind — simpler setup, no build step
- **Inter font** from Google Fonts for the "Apple-style" premium look
- **localStorage** for profile data and saved jobs — no backend needed
- **Two-layer slider** with absolutely-positioned `.slide-layer` divs for smooth left-slide animation
- **Bootstrap Icons CDN** injected via footer.js so all pages get icons automatically
- **Multi-step form** uses show/hide pattern with validation per step

## 5. Current Status (June 2026)

### Done
- All 8 pages built and functional
- Consistent nav across all pages
- Profile dynamically propagates to all pages via localStorage
- Job search with 55+ real jobs across 7 categories
- Saved jobs persist in localStorage
- 3-step application form with validation
- Dashboard slider with smooth animations
- Responsive design on profile, saved-jobs, and all pages
- About Us page fully written

### To Do
- Fill categories.html and companies.html with real content (currently placeholders)
- Create common.js (referenced but missing — causes 404)
- Build docs/process/group.html (currently empty)
- Fix index.html title (still says "inseek - Sign In" instead of "Home")
- Hard-refresh test all pages after changes
