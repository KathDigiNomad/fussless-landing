# Indie App Landing — Reusable Astro Template

A fast, accessible, SEO-ready landing page template designed for indie SaaS apps.
Built with Astro, Tailwind CSS, and TypeScript. Target Lighthouse score: **95+** on
mobile and desktop.

Reusable across all your apps: Fussless, Plantsy, Pace, TricipeChef, BudgetBuster,
PackTale, and everything you build next.

---

## Table of contents

1. [Quick start](#1-quick-start)
2. [Project structure](#2-project-structure)
3. [Configuring a new app (5-minute workflow)](#3-configuring-a-new-app)
4. [Cursor workflow — using AI to speed things up](#4-cursor-workflow)
5. [Deploying to Vercel with GitHub](#5-deploying-to-vercel)
6. [Connecting your domain and routing `/app` to Lovable](#6-domain--app-routing)
7. [Checklist before going live](#7-go-live-checklist)
8. [Reusing this template for your next app](#8-reusing-for-next-app)

---

## 1. Quick start

**Requirements:** Node.js 20 or higher. Install from [nodejs.org](https://nodejs.org)
if you don't have it — accept all defaults.

```bash
# 1. Open Cursor, open this folder
# 2. Open the built-in terminal (Ctrl + `  or  Cmd + `)
# 3. Install dependencies (only the first time)
npm install

# 4. Start the dev server
npm run dev

# 5. Open http://localhost:4321 in your browser
```

The page updates instantly as you edit files. To stop the server press `Ctrl + C`
in the terminal.

To build the production version and preview it:

```bash
npm run build
npm run preview
```

---

## 2. Project structure

```
indie-app-landing/
├── public/                      # static assets (copied as-is to /)
│   ├── images/                  # hero, screenshots, og-image
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── config.ts                # ← THE ONLY FILE YOU EDIT PER APP
│   ├── styles/
│   │   └── theme.css            # brand colors and typography per app
│   ├── layouts/
│   │   └── BaseLayout.astro     # <html>, <head>, SEO, structured data
│   ├── components/              # one file per section, all use config.ts
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── Testimonials.astro
│   │   ├── Faq.astro
│   │   ├── FinalCta.astro
│   │   └── Footer.astro
│   └── pages/
│       ├── index.astro          # home page
│       ├── privacy.astro
│       └── terms.astro
├── astro.config.mjs             # site domain lives here — change per app
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

The architecture principle: **`src/config.ts` and `src/styles/theme.css` are the
only two files you edit per app**. Every component reads from `config.ts`, so
copying the template and changing those two files gives you a new app landing.

---

## 3. Configuring a new app

Open `src/config.ts`. It is fully typed and commented. Sections to fill in:

- **Identity** — name, tagline, domain, app URL, support email
- **Hero** — headline, subheadline, CTA labels and URLs, hero image
- **Trust** — one-line social proof
- **Features** — 3 features with icon (emoji is fine), title, body
- **How it works** — 3 steps
- **Testimonials** — 2-4 quotes with name and role
- **FAQ** — 4-8 questions and answers (also generates structured data for Google)
- **Final CTA** — closing call-to-action
- **SEO** — title, description, OG image path, keywords
- **Theme** — font names (families loaded in `BaseLayout.astro`)
- **Analytics** — optional Plausible or PostHog

Then open `src/styles/theme.css` and adjust the six brand colors. The comment
block at the top shows how to verify **WCAG 2.2 AA contrast (4.5:1)** for each
combination. Use [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
to verify.

Finally, update the `site` value in `astro.config.mjs` to your production domain.

---

## 4. Cursor workflow

Cursor is where this template shines. Two patterns save you the most time:

### Pattern A — Generate a new app's config from a description

Open `src/config.ts` in Cursor. Press `Cmd/Ctrl + K` (inline edit) and paste:

> Replace the Fussless config with a new AppConfig for my app **Plantsy**.
> Plantsy is a plant care and watering reminder app for houseplant hobbyists.
> Target audience: urban millennials with 5+ houseplants. Tone: calm, friendly,
> slightly playful. Domain: plantsy.app. App URL: /app. Keep the same structure
> (3 features, 3 how-it-works steps, 2 testimonials, 4 FAQ items). Generate
> plausible testimonials with Dutch/Belgian names.

Cursor rewrites the entire config in place. Review each section, tweak the copy
where needed, and save.

### Pattern B — Regenerate the theme for a new app

Open `src/styles/theme.css`, press `Cmd/Ctrl + K`, paste:

> Replace the Fussless brown/cream palette with a fresh sage-green + off-white
> palette suitable for a plant care app. All text/background combinations must
> meet WCAG 2.2 AA (4.5:1 for normal text). Update the contrast-check comment
> block at the top with the new ratios.

Verify the ratios Cursor claims using the WebAIM contrast checker before
deploying.

### Pattern C — Update a specific section

Highlight the section you want to change (e.g. the Hero component) and press
`Cmd/Ctrl + K`:

> Add an animated gradient behind the hero headline, but keep the LCP element
> (h1 text) fully visible from first paint. Respect prefers-reduced-motion.

---

## 5. Deploying to Vercel

### 5a. Push to GitHub (one-time setup per app)

```bash
# In the project folder, in Cursor's terminal:
git init
git add .
git commit -m "Initial commit: Fussless landing"
```

Now create a repo on GitHub:

1. Go to [github.com/new](https://github.com/new)
2. Name: `fussless-landing` (or your app)
3. Keep it Private
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

Follow the "push an existing repository" instructions GitHub shows you. It looks
like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/fussless-landing.git
git branch -M main
git push -u origin main
```

### 5b. Connect Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click "Add New… → Project".
3. Select the `fussless-landing` repo. Vercel detects Astro automatically.
4. Leave all settings on default. Click **Deploy**.
5. Within a minute you get a `fussless-landing.vercel.app` URL. Open it — this is
   your landing page live on the internet.

Every time you push to `main`, Vercel redeploys automatically. Preview deploys
for other branches are automatic too.

---

## 6. Domain & `/app` routing

You chose to keep the Lovable app at **fussless.one/app** (same domain, different
path). Here is how to wire that up:

### 6a. Point fussless.one at Vercel

1. In Vercel, open your project → **Settings → Domains** → add `fussless.one`
   and `www.fussless.one`.
2. Vercel shows you the DNS records to add. Go to your registrar (Namecheap,
   Cloudflare, Vimexx, TransIP — wherever you bought fussless.one).
3. Add the `A` and `CNAME` records exactly as Vercel shows them. Save.
4. Wait 5-60 minutes for DNS to propagate. Vercel shows a green checkmark when
   the domain is ready.

### 6b. Route `/app` to the Lovable app

Lovable apps run on a `lovable.app` subdomain (or a custom subdomain you set up
in Lovable). To keep users on `fussless.one/app`, add a Vercel rewrite.

Create a file called `vercel.json` in the project root:

```json
{
  "rewrites": [
    { "source": "/app", "destination": "https://your-fussless.lovable.app" },
    { "source": "/app/:path*", "destination": "https://your-fussless.lovable.app/:path*" }
  ]
}
```

Replace `your-fussless.lovable.app` with your actual Lovable app URL. Commit and
push — Vercel picks up `vercel.json` automatically.

> **Note:** rewrites work for most Lovable apps but some client-side routing
> setups need an extra step. If you see routing issues in the app after
> deployment, use a **redirect** instead of a rewrite (change `rewrites` to
> `redirects` and add `"permanent": false`). This sends the user to
> `your-fussless.lovable.app/…` in the address bar instead of keeping them on
> `fussless.one/app/…`. Slightly less pretty, but bulletproof.

### 6c. Update all `/app` links in your config

In `src/config.ts`, every CTA that points to your app should use `/app` (already
set in the Fussless config). If you later move to a subdomain, change all `href`
values from `/app` to `https://app.fussless.one` — no other files need editing.

---

## 7. Go-live checklist

Before you announce your site, verify:

- [ ] All copy in `src/config.ts` matches your final brand voice
- [ ] `src/styles/theme.css` passes WCAG 2.2 AA (verify on webaim.org)
- [ ] Hero image is a **WebP** file, max 100 KB, in `public/images/`
- [ ] `public/images/og-image.png` exists, 1200×630 px, under 200 KB
- [ ] `public/favicon.svg` matches your brand
- [ ] `astro.config.mjs` has the correct `site` domain
- [ ] `public/robots.txt` references the right sitemap URL
- [ ] Privacy and terms pages have real content, not placeholder
- [ ] Analytics keys added to `src/config.ts` (or removed if unused)
- [ ] `vercel.json` points `/app` to the correct Lovable URL
- [ ] `npm run build` succeeds locally with no errors
- [ ] Lighthouse mobile score is 90+ (test on the deployed URL, not localhost)

Test with:

- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://webpagetest.org)
- Real mobile device on 4G

---

## 8. Reusing for your next app

Rough workflow when you start on Plantsy:

```bash
# In your projects folder:
git clone https://github.com/YOUR-USERNAME/fussless-landing.git plantsy-landing
cd plantsy-landing
rm -rf .git
git init

# Open in Cursor
code .
```

Then:

1. Use **Cursor Pattern A** to rewrite `src/config.ts` for Plantsy
2. Use **Cursor Pattern B** to rewrite `src/styles/theme.css` for Plantsy
3. Replace `public/images/hero.webp` and `og-image.png`
4. Update `site` in `astro.config.mjs` to `https://plantsy.app`
5. Create a new GitHub repo, push, connect to Vercel
6. Add the domain in Vercel

Realistic time for app #2: **1-2 hours**. Every subsequent app: **under an
hour**.

---

## Why this template hits 95+ Lighthouse

- **Zero client-side JS by default** — Astro ships static HTML, no React
  hydration on the landing.
- **Preloaded LCP image** with `fetchpriority="high"` — the hero renders in the
  first paint.
- **Inlined critical CSS** — `inlineStylesheets: 'auto'` in `astro.config.mjs`
  prevents render-blocking CSS.
- **`font-display: swap`** — text is visible immediately even before fonts
  load.
- **Preconnect** to Google Fonts origins.
- **Structured data** — SoftwareApplication and FAQPage JSON-LD generated
  automatically.
- **WCAG 2.2 AA colors** — palette designed for 4.5:1 minimum.
- **Sitemap + robots.txt** — automatic from `@astrojs/sitemap`.
- **Semantic HTML** — real `<header>`, `<main>`, `<footer>`, `<nav>`, `<ol>`,
  `<figure>`, no random `<div>` soup.

---

## Support

If Cursor gets stuck on something, paste the error into the chat panel with the
prefix "In this Astro project…". Cursor handles Astro syntax well but sometimes
confuses it with Next.js — remind it if that happens.
