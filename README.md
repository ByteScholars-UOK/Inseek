# Inseek — Online Job Searching Platform

[CSCI 12562 Web Programming](https://fct.kln.ac.lk/degree-programmes/computer-science) group project by **ByteScholars-UOK**.

A job search platform with **8 pages** built using HTML5, Bootstrap 5, vanilla JavaScript, and jQuery. Users can search jobs, apply with resume upload, manage their profile (dynamic across site), save listings, and chat.

## Pages

| Page | What it does | Built by |
|------|-------------|----------|
| **index.html** | Landing page with hero, stats ribbon, feature cards, login/register forms | Nimeth |
| **dashboard.html** | User dashboard with slider, featured jobs, company logos | Rithika |
| **profile.html** | Candidate profile — all fields saved to localStorage, name/photo propagates site-wide | Nisagi |
| **auth.html** | Sign up / Login with JS validation | Dinuga |
| **jobsearch.html** | Search 55+ jobs with live filtering by keyword, location, category | Nimeth |
| **messages.html** | Chat UI with Inseek contact | — |
| **apply.html** | 3-step multi-step application form with CV upload (.pdf/.docx) | Prabodha |
| **saved-jobs.html** | Saved jobs from localStorage with remove & empty state | Dulina |
| **docs/process/index.html** | About Us page (Mission, Vision, What We Offer) | — |

## Project Structure

```
inseek/
├── index.html
├── dashboard.html
├── profile.html
├── auth.html
├── jobsearch.html
├── messages.html
├── apply.html
├── saved-jobs.html
├── cache.js
├── footer.js
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── search.css
│   │   ├── apply.css
│   │   ├── categories.css
│   │   └── companies.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── search.js
│   │   ├── apply.js
│   │   ├── dashboard.js
│   │   ├── categories.js
│   │   └── profile.js
│   └── images/
│       ├── icons/favicon.png
│       ├── logo-transparent.png
│       ├── logo.jpeg
│       └── ...
├── docs/
│   ├── assignment.md
│   └── process/index.html
├── bin/
├── README.md
├── rules.md
├── project.md
├── updates.md
├── CONTRIBUTION.txt
└── mock.json
```

## Team

| # | Name | Contribution |
|---|------|-------------|
| 1 | Rithika | Dashboard, global.css, dashboard.js |
| 2 | Nimeth | index.html, search.js, cache.js |
| 3 | Nisagi | profile.html |
| 4 | Dinuga | auth.html, auth.js |
| 5 | Yasith | categories (grid with hover) |
| 6 | Prabodha | apply.html, apply.js |
| 7 | Tharusha | companies (directory) |
| 8 | Dulina | saved-jobs.html, footer.js |

## Tech Stack

- HTML5
- Bootstrap 5.3 (CDN)
- Bootstrap Icons (CDN)
- JavaScript (vanilla + jQuery 3.7)
- Inter font (Google Fonts)
- localStorage for persistence

## How to Run

Just open `index.html` in a browser. No build step, no server needed. Everything loads from CDNs.

## University

[University of Kelaniya — Faculty of Computing and Technology](https://fct.kln.ac.lk/home)
