Inseek — Team Rules

1. Our Tech Stack
Here is exactly what we are using to build Inseek. To keep things simple, we are loading Tailwind and jQuery directly via web links (CDNs) so nobody has to install complicated software on their computers.

HTML5: For the basic structure of our pages.

Tailwind CSS (v3): For styling everything quickly without writing endless CSS files.

Vanilla JavaScript: For our core logic and form checks.

jQuery (v3): For smooth animations and dynamic page updates.

2. Our Design & Tailwind Setup
The Setup Script (Copy & Paste This)
You must put the Tailwind script inside the <head> tag of every single page. Immediately below that script, you must include our official brand color configuration.

Rithika is the owner of this design setup. Do not change these colors without checking with him first. (I might look like i'm angry all the time, that's not the case!)

HTML
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#4DA6FF',   /* Lighter blue for data points and subtle highlights */
            DEFAULT: '#007AFF', /* Main Inseek blue for logos, links, and primary buttons */
            dark: '#0059C6'     /* Darker blue for hover states and clicks */
          },
          text: {
            main: '#0B0F19',    /* Almost black for headings and main paragraphs */
            muted: '#64748B'    /* Gray for captions, borders, and disabled buttons */
          },
          bg: {
            white: '#FFFFFF',   /* Pure white for the main page background */
            offWhite: '#F8FAFC' /* Off-white for job cards and section blocks */
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif']
        }
      }
    }
  }
</script>
Styling Rules
Use Tailwind classes for almost everything (spacing, colors, text size).

Only use our global.css file for things Tailwind can't do easily, like complex custom animations or overriding third-party tools.

Keep your class names organized so they are easy to read. Put layout classes first (like flex), then sizing, then colors, and put interactive states (like hover:) at the very end.

3. Writing Clean HTML
Layouts & Spacing
Build your layouts using <div> blocks.

Never use a <table> to build a page layout. Only use tables for actual rows of data (like the saved jobs list).

Use Real Tabs: Set your code editor to use Tabs (with a width of 4). Do not use the spacebar to indent your code. Every time you open a new tag, hit Tab for the code inside it.

File Links & Deletions
Always link to files relative to where you are. (e.g., href="assets/css/global.css"). Never paste the exact file path from your personal computer's C: drive.

Never permanently delete a file. If a page, image, or script is no longer needed, move it into the bin/ folder. This is our safety net.

4. Making Things Interactive (JavaScript)
Form Checks (Mandatory)
Before any form is allowed to submit, your JavaScript must check the user's answers and stop the form if they made a mistake. Show them a helpful error message right next to the box.

auth.html: Check that the email looks real, the password is at least 8 characters, and the passwords match.

apply.html: Check that the uploaded resume is strictly a .pdf or .docx and isn't too large.

jQuery Requirements (Mandatory)
Every single page needs to use jQuery to make it feel alive.

Use it for things like live search filtering, smooth dropdown menus, hovering animations on the job categories, or sliding carousels for the company reviews.

Live Dates (Mandatory)
We need to prove we know how to use JavaScript's native timekeeping.

Dulina will use the Date object to put a live, ticking timestamp inside the main site footer.

Other pages can use it to calculate application deadlines or show exactly when a job was posted.

5. Saving & Sharing Code (Git)
Branching
Never push your code directly to the main branch. If everyone does this, the website will break. You must work inside your own "branch" (an isolated copy of the code).

Name your branches clearly so we know who is doing what: feature/<your-name>-<what-you-are-building>

Example: feature/rithika-dashboard

Example: feature/nisagi-profile-page

Submitting Your Work
When you finish your page, follow these steps:

Push your branch up to GitHub.

Open a "Pull Request" (PR) asking to merge your work into the main code.

Write a clear message about what you did (e.g., "Feature: Built the login form and added password checks").

Another team member must look at your code and test it to make sure it works.

Once approved, it gets merged into main.

6. Images & Media
Save all images inside assets/images/. Keep the file names simple and use dashes instead of spaces (e.g., google-logo.png).

Put company logos in the company-logos folder and small graphics in the icons folder.

We need a minimum of 10 images used across the entire platform.

Always add alt="description" to your images so the website is accessible.