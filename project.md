Inseek — Team Guide & Task Map
Version: 1.0

Course: CSCI 12562 — Web Programming

Team: ByteScholars-UOK

1. How Our Site Works
Inseek is a straightforward, multi-page website. Instead of complex frameworks, we are building clean HTML pages that share a few common design pieces to keep everything looking unified.

Our Basic Page Map:

Shared Top: Navigation Bar (on every page)

Core Pages: Home (index.html), Search (dashboard.html), Browse (categories.html), Auth (auth.html)

User Pages: Profile (profile.html), Apply (apply.html), Companies (companies.html), Saved Jobs (saved-jobs.html)

Shared Bottom: Site Footer (on every page)

How Files Load:
Every page will load our single master stylesheet (global.css) to handle the design, followed by jQuery and then the specific JavaScript file needed for that exact page's interactive features.

2. Who is Doing What
Here is the breakdown of what each team member is responsible for building.

2.1 Home Page (index.html)
Team: Nimeth (Search mechanics) / Rithika (Layout)

What it needs: A welcoming banner, a search bar (keywords, location, category), and a grid showing 3–6 featured jobs.

Interactivity: The search bar should filter the jobs on the screen instantly without needing to refresh the page.

2.2 Dashboard (dashboard.html)
Team: Rithika

What it needs: The main hub for the user. Show simple stat cards (jobs applied to, saved jobs) and a table showing the status of their current applications.

Interactivity: Smooth progress bars and clean state updates.

2.3 Candidate Profile (profile.html)
Team: Nisagi

What it needs: A clean resume-style page showing the user's bio, education, work history, and skills.

Interactivity: Use jQuery to let users click sections to expand/collapse them, or click an "edit" button to type directly into the profile fields.

2.4 Registration & Login (auth.html)
Team: Dinuga

What it needs: A simple page that lets users switch between a "Sign Up" form and a "Login" form.

Interactivity: Crucial step — use plain JavaScript to check that the email looks like a real email, the password is at least 8 characters, and the "confirm password" matches. If they don't, show an error and stop the form from submitting.

2.5 Job Categories (categories.html)
Team: Yasith

What it needs: A visual grid of different industries (like Tech, Healthcare, Design).

Interactivity: Make the category cards lift up smoothly or cast a nice shadow when the user hovers over them using jQuery.

2.6 Application Portal (apply.html)
Team: Prabodha

What it needs: The form where users actually apply for a job and upload their CV.

Interactivity: Crucial step — use JavaScript to check the uploaded file. It must only accept .pdf or .docx files, and it shouldn't be too large. Give the user a visual cue if they drag and drop a file successfully.

2.7 Company Directory (companies.html)
Team: Tharush

What it needs: A showcase of companies hiring on the platform. Include logos, open roles, and a short bio. Add an embedded video or a sliding carousel of employee reviews.

Interactivity: A smooth carousel slider for the reviews.

2.8 Saved Jobs & Site Footer (saved-jobs.html)
Team: Dulina

What it needs: A table organizing jobs the user wants to look at later. You will also build the global footer that goes at the bottom of every page on the site.

Interactivity: Let users remove jobs from their saved list. Crucial step — use a native JavaScript Date object in the footer to display the current live time/date.

3. Our Official Brand Colors
To keep the "Apple-style" premium and ultra-minimalist look across the site, stick strictly to these exact color codes in global.css.

The Blues (Brand Identity)
Brand Primary: #007AFF

Use for: Main Logo, primary buttons, active links, and key branding moments.

Brand Secondary (Darker): #0059C6

Use for: Button hover states, interactive click states, and subtle highlights.

Brand Secondary (Lighter): #4DA6FF

Use for: Data points, charts, or lighter tonal variations.

The Neutrals (Typography & Lines)
Primary Text: #0B0F19

Use for: Main headings, primary paragraph text, and heavy dark background sections.

Secondary Text: #64748B

Use for: Subheadings, muted captions, borders, divider lines, and disabled/grayed-out buttons.

The Backgrounds (Layout & Structure)
Pure White: #FFFFFF

Use for: The main page background to maintain that ultra-minimalist, clean feel.

Off-White: #F8FAFC

Use for: Job cards, section blocks, and subtle structural layering (creates a nice contrast against the pure white background).