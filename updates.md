# Inseek — Updates

Keep track of what's been done so we don't lose progress.

## Latest Updates (June 2026)

- **Nav overhaul**: All pages now have consistent nav: Home · Jobs · Messages · Saved · About
- **Activity/Saved page**: Renamed from Activity → Saved, uses localStorage to persist saved jobs from search results
- **Profile dynamic**: profile.js saves/loads all fields (name, DOB, gender, career, email, phone, address, city, country, photo) to localStorage. Nav bar name & avatar update site-wide
- **Messages page**: Chat UI with Inseek contact, messy human-written formatting
- **Apply form**: 3-step multi-step form with validation, progress bar, clock on submit
- **Job search**: 55+ jobs across IT, Finance, Marketing, Health, HR, Operations, Legal with live filtering by keyword/location/category
- **Dashboard slider**: Smooth slide-left animation with preloading, z-index layers
- **Landing page**: Hero with 120px logo, stats ribbon, feature cards, login/register forms
- **About Us**: Full page with Mission, Vision, What We Offer, Why Choose InSeek
- **Cache.js**: Image preloading with slider-first priority + prefetch links
- **Favicon**: Using favicon.png across all pages, also as chat profile icon
- **global.css**: Brand colors as CSS vars (#007AFF, #0059C6, #4DA6FF), Inter font

## Known Issues

- common.js referenced in messages.html, saved-jobs.html, docs/process/index.html but file does NOT exist → 404
- savedjobs.css referenced in old saved-jobs.html but file does NOT exist (now using inline styles)
- categories.html and companies.html are still placeholders
- docs/process/group.html is empty (0 bytes)
- mock.json exists but not loaded by any page

## Team Contributions (from CONTRIBUTION.txt)

- Rithika — Dashboard, global.css, dashboard.js
- Nimeth — index.html, search.js, cache.js
- Nisagi — profile.html
- Dinuga — auth.html, auth.js
- Yasith — categories (placeholder)
- Prabodha — apply.html, apply.js
- Tharusha — companies (placeholder)
- Dulina — saved-jobs.html, footer.js

---

Before: Static pages, no localStorage, no save feature.
After: Dynamic profile across all pages, saved jobs persist, consistent nav everywhere.

Update this as you go!
