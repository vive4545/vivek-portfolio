# Vivek Joshi — Developer Portfolio

A premium, dark, performance-minded personal portfolio for **Vivek Joshi**, Full Stack Developer.
Built with the App Router, fully typed, content-driven, and zero-config deployable to Vercel.

![Built with Next.js, Tailwind CSS and Framer Motion](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

---

## ✨ Highlights

- **Next.js 15 (App Router) + TypeScript (strict)**
- **Tailwind CSS** with a single source-of-truth design-token system (`:root` CSS variables)
- **Three.js + React Three Fiber** WebGL hero — a mouse-reactive, accent-tinted particle field. **Desktop-only** (skipped on mobile/touch and reduced-motion → lean CSS fallback), code-split (`next/dynamic`, `ssr: false`), deferred to `requestIdleCallback` so it never blocks first paint, unmounted once scrolled past, and DPR-capped
- **GSAP ScrollTrigger** for scroll-driven parallax depth and count-up stat reveals
- **Framer Motion** micro-interactions (magnetic buttons, scroll reveals, cursor-spotlight cards, scroll-progress bar, scroll-spy nav) — loaded via **`LazyMotion` + `domAnimation`** so only the minimal feature set ships
- Every animation across all three libraries is gated behind `prefers-reduced-motion`
- **Content-driven**: every bit of copy lives in typed files under `/data` — edit content without touching components
- **SEO out of the box**: metadata + Open Graph + Twitter cards, dynamically generated social image & favicon, `sitemap.xml`, `robots.txt`, web manifest, and JSON-LD structured data
- **Accessible**: semantic landmarks, skip link, keyboard-navigable menu, visible focus rings, ARIA where it matters
- **Fast**: image-light by design, lazy-loaded `next/image` for any screenshots, system-friendly fonts via `next/font`

---

## 🧱 Project structure

```
.
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, SEO, JSON-LD, skip link
│   ├── page.tsx              # Page composition (section order)
│   ├── globals.css           # Design tokens (:root) + base/component/utility layers
│   ├── icon.tsx              # Generated favicon (next/og)
│   ├── opengraph-image.tsx   # Generated 1200×630 social card
│   ├── twitter-image.tsx     # Re-uses the OG card
│   ├── manifest.ts           # PWA web manifest
│   ├── sitemap.ts            # /sitemap.xml
│   └── robots.ts             # /robots.txt
├── components/
│   ├── Navbar.tsx            # Sticky blur nav, scroll-spy, mobile menu
│   ├── Hero.tsx              # Hero + WebGL background + CTAs
│   ├── About.tsx             # Bio, count-up stats, education, skill badges
│   ├── Projects.tsx          # Project grid
│   ├── ProjectCard.tsx       # Interactive project card (spotlight, lift)
│   ├── Experience.tsx        # Vertical timeline
│   ├── Contact.tsx           # Contact card + socials
│   ├── Footer.tsx
│   ├── three/                # WebGL hero (react-three-fiber)
│   │   ├── HeroBackground.tsx  # Smart wrapper: WebGL vs CSS fallback
│   │   ├── HeroCanvas.tsx      # <Canvas> (dynamically imported, ssr:false)
│   │   └── ParticleField.tsx   # The particle shell + interactions
│   └── ui/                   # Reusable primitives (Reveal, MagneticButton,
│                             #   Parallax, CountUp, MagneticButton, …)
├── data/
│   ├── site.ts               # Name, role, contact, socials, nav  ← edit me
│   ├── projects.ts           # Projects                            ← edit me
│   ├── experience.ts         # Work history                        ← edit me
│   └── skills.ts             # Skills, education, stats             ← edit me
├── lib/
│   ├── types.ts              # Shared TypeScript types
│   ├── motion.ts             # Framer Motion variants / easings
│   ├── gsap.ts               # GSAP + ScrollTrigger registration
│   └── utils.ts              # cn() className helper
└── public/
    └── Vivek_Joshi_Resume.pdf  # Your CV — served at site.resumeUrl
```

---

## 🚀 Run locally

> Requires **Node 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open <http://localhost:3000>.

### Production build

```bash
npm run build
npm run start
```

---

## ✏️ Make it yours

All content is typed and lives in `/data` — no component edits needed for copy changes.

| Want to change…            | Edit                          |
| -------------------------- | ----------------------------- |
| Name, role, contact, socials | `data/site.ts`              |
| Projects (and their links) | `data/projects.ts`            |
| Work experience            | `data/experience.ts`          |
| Skills / education / stats | `data/skills.ts`              |
| Accent color & theme tokens | `app/globals.css` (`:root`)  |

**Theme color:** change `--accent`, `--accent-strong`, and `--accent-foreground` in `app/globals.css`
(values are space-separated RGB channels so Tailwind opacity utilities like `bg-accent/10` work).

**Resume:** drop your PDF in `public/` and make sure `data/site.ts → resumeUrl` matches its
file name exactly (currently `/Vivek_Joshi_Resume.pdf`).

**Project links:** the placeholder repo/npm URLs in `data/projects.ts` point at example paths —
update them to your real repositories. Links only render when present, so private projects can
simply have an empty `links: []`.

**Project screenshots (optional):** drop an image in `public/projects/` and set
`image: "/projects/your-shot.png"` on a project in `data/projects.ts`. It will be lazy-loaded and
optimized automatically via `next/image`.

---

## 🌐 Deploy to Vercel

This project is zero-config on Vercel.

**Option A — Dashboard**

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to <https://vercel.com/new> and **Import** the repository.
3. Framework preset auto-detects **Next.js** — keep the defaults and click **Deploy**.

**Option B — CLI**

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

### Recommended environment variable

Set your real domain so canonical URLs, Open Graph, and the sitemap are correct:

| Variable               | Example                     |
| ---------------------- | --------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://vivekjoshi.dev`    |

In Vercel: **Project → Settings → Environment Variables**. Locally, add it to `.env.local`.
If unset, it falls back to the value in `data/site.ts`.

---

## ♿ Accessibility & performance notes

- Every animation respects `prefers-reduced-motion` (gated in both JS and CSS).
- Semantic HTML (`header`, `main`, `section[aria-label]`, `nav`, `footer`, `ol`/`ul`), a skip link,
  keyboard-operable mobile menu (Escape to close, focus trap-free), and visible focus rings.
- Image-light design + `next/font` (no layout-shifting font loading) keep Lighthouse scores high.
- The Three.js bundle is code-split (`next/dynamic`, `ssr: false`) and mounted on
  `requestIdleCallback` **after** first paint, then unmounted when the hero scrolls out of
  view. It runs on **desktop only** — mobile/touch and reduced-motion get a lightweight CSS
  background, keeping the throttled-mobile Lighthouse score high.
- Framer Motion ships through `LazyMotion`/`domAnimation`, trimming the homepage's JS.
- **Always audit a production build:** `npm run build && npm run start`, then run Lighthouse in
  an **Incognito window** (browser extensions inject scripts that distort the score). `next dev`
  is unminified + dev-mode React and is not representative of production performance.

---

## 🧰 Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 3.4 · Three.js + React Three Fiber ·
GSAP (ScrollTrigger) · Framer Motion 11 · Lucide React

---

Built by Vivek Joshi.
