# Inseek — Team Rules

## 1. Our Tech Stack (Actual — we switched from Tailwind)

We originally planned Tailwind but switched to **Bootstrap 5** via CDN for simplicity.

- **HTML5**: Page structure
- **Bootstrap 5.3** (CDN): Layout, grid, components, responsive design
- **Bootstrap Icons** (CDN): Icons across the site
- **Vanilla JS**: Form validation, localStorage, DOM manipulation
- **jQuery 3.7** (CDN): Animations, dynamic updates, event handling
- **Inter font** (Google Fonts): Primary typeface (weights 400–900)
- **CSS custom properties**: Brand colors defined in global.css as `--brand`, `--brand-dark`, `--brand-light`, etc.

## 2. Brand Colors (in global.css — don't change without Rithika)

```css
--brand: #007AFF
--brand-dark: #0059C6
--brand-light: #4DA6FF
--text-main: #0B0F19
--text-muted: #64748B
--bg-off-white: #F8FAFC
```

Rithika owns global.css. Do not change these colors without checking first.

## 3. Writing Clean HTML

- Layouts using `<div>` blocks, never `<table>` for layout
- Tables only for actual data rows (e.g., saved jobs, search results)
- Use tabs for indentation (width 4), not spaces
- Always use relative paths (e.g., `href="assets/css/global.css"`)
- Never use absolute C: drive paths

## 4. JavaScript Rules

### Form Validation (Mandatory)
- auth.html: Check email format, password ≥ 8 chars, confirm password match
- apply.html: Resume must be .pdf or .docx only, max 5MB, drag-and-drop visual feedback

### jQuery (Mandatory on every page)
- Live search filtering (search.js)
- Smooth animations and transitions
- Dynamic DOM updates

### localStorage Usage
- Profile data saved/loaded via profile.js
- Saved jobs persist across sessions

### JS Date (Mandatory — at least one page)
- Apply page shows submission timestamp on form submit
- Footer clock tracks live time

## 5. Git Rules

- Never push to main directly. Use branches: `feature/<your-name>-<what>`
- Open a Pull Request for review before merging
- Write clear commit messages

## 6. Images & Media

- All images in `assets/images/`
- Use dashes in filenames (e.g., `google-logo.png`)
- Minimum 10 images across the platform
- Always add `alt` attributes

## 7. File Management

- Never permanently delete files. Move unused ones to `bin/`
- Don't leave placeholder comments for unfinished pages
