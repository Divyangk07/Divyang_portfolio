# Divyang Katariya — Portfolio

A personal portfolio site for Mamta Katariya, Graphic & Packaging Designer.
Built with plain HTML/CSS/JS — no build step, no dependencies to install.

## What's here

```
index.html    → page structure and content
style.css     → all styling (design system + layout)
script.js     → small interactions (scroll reveal, footer date/year)
images/       → put your project photos/mockups here
```

## 1. Add your real project images

The "Featured Case Study" section currently has **placeholder blocks**
(dashed borders, marked with a target icon). Before you publish, swap
these for real images of your work — packaging mockups, dielines, flat
artwork, product photography, whatever best shows the project.

Steps:
1. Drop your image files into the `images/` folder (e.g. `hero-mockup.jpg`, `dieline.jpg`).
2. In `index.html`, find each block that looks like this:
   ```html
   <figure class="case-visual is-placeholder">
     <div class="placeholder-inner">
       <span class="placeholder-mark">⊕</span>
       <span class="placeholder-label">Add hero packaging mockup...</span>
     </div>
   </figure>
   ```
3. Replace it with:
   ```html
   <figure class="case-visual">
     <img src="images/hero-mockup.jpg" alt="Sunrise Foods packaging front mockup" style="width:100%;height:100%;object-fit:cover;">
   </figure>
   ```
4. Repeat for each placeholder block (there are 5 total: 1 hero shot, 1 dieline/flat, 3 flavor/shelf shots).

Recommended image sizes: roughly 1200×900px (landscape) or 1000×1300px
(the tall one), JPG or WebP, kept under ~500KB each so the page loads fast.

If you have other packaging or branding projects, duplicate the
`<article class="case-study">` block for a second case study, or keep
it to one strong project — one well-documented project usually beats
three thin ones.

## 2. Personalize the copy

The featured project is currently written as an example ("Sunrise
Foods — Snack Packaging Redesign") based on the personal project on
your resume. Replace the brand name, brief, process, and solution text
with the real story of your project — what the problem was, what you
tried, and why you made the choices you made. Specifics (real client
names if you can share them, real constraints, real production
details) make a case study far more convincing to a recruiter than
generic description.

## 3. Publish it for free with GitHub Pages

1. Create a new repository on GitHub (e.g. `mamta-portfolio`).
2. Upload these files (`index.html`, `style.css`, `script.js`, `images/`) to the repo — either via the GitHub web UI ("Add file → Upload files") or with git:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/mamta-portfolio.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a live URL, usually:
   `https://YOUR-USERNAME.github.io/mamta-portfolio/`
   (takes 1–2 minutes to go live after the first deploy)

## 4. Add it to LinkedIn

- Add the URL to the **"Contact info"** section of your LinkedIn profile (Featured link).
- Also add it under **"Featured"** on your profile — you can attach it as a link with a custom thumbnail.
- Put it in your headline or About section too, so it's visible without a click.
- Add the GitHub repo link itself to your LinkedIn "Projects" section, and pin the repo on your GitHub profile.

## Design notes

The visual language borrows directly from print production: corner
registration marks, crop marks on the hero, a CMYK/spot-color bar, and
"proof sheet" labeling — because that's your actual working world, not
a generic portfolio template. Feel free to adjust the accent color
(`--spot-magenta` in `style.css`) if you want a different signature
color once you see it against your real project photography.
