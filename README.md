# Code-Tech — Website

A modern, premium, fully responsive React website for **Code-Tech**, a software and web development company based in **Zomba, Malawi**.

> **From Development to Production**

## ✨ Highlights

- ⚡ **React 18 + Vite** for a fast, modern developer experience.
- 🎨 **Tailwind CSS** with a custom design system (deep blue / electric blue / cyan).
- 🎞 **Framer Motion** for elegant scroll and page-transition animations.
- 🧭 **React Router** with smooth `AnimatePresence` page transitions.
- 🧩 **Lucide React** icons (tree-shakeable).
- 🔍 **SEO-friendly** markup with `react-helmet-async`, OpenGraph, and Twitter cards.
- 📱 **Mobile-first responsive** design across every page and breakpoint.
- 🧱 Clean, modular component architecture and reusable UI primitives.
- 🖼 Royalty-free imagery from Unsplash (African tech professionals, modern offices, code environments).
- 🧰 Custom preloader, animated counters, filterable portfolio, FAQ accordion, and a working contact form UI.

## 🗂 Project structure

```
code-tech/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── home/        # Hero, Stats, Services, WhyChooseUs, Process, FeaturedProjects, Testimonials, FAQ
│   │   ├── layout/      # Navbar, Footer, Preloader, PageWrapper, PageHeader, ScrollToTop
│   │   └── ui/          # Button, Section, SectionHeading, StatCounter, Reveal, CTA, AnimatedIcon
│   ├── data/            # company.js, services.js, portfolio.js, testimonials.js, team.js
│   ├── pages/           # Home, About, Services, ServiceDetail, Portfolio, Contact, NotFound
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 🧭 Pages

| Path                  | Page                  |
| --------------------- | --------------------- |
| `/`                   | Home                  |
| `/about`              | About                 |
| `/services`           | Services overview     |
| `/services/:slug`     | Service detail        |
| `/portfolio`          | Filterable portfolio  |
| `/contact`            | Contact + form + map  |
| `*`                   | 404 Not found         |

## 🎨 Brand & design

- **Primary:** `#0F172A` (deep blue)
- **Secondary:** `#2563EB` (electric blue)
- **Accent:** `#06B6D4` (cyan)
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (display) + [Inter](https://fonts.google.com/specimen/Inter) (body)

The design uses subtle grid backgrounds, mesh-gradient blobs, glassy cards, animated counters, and floating chips for an "international premium agency" feel — with subtle African-modern accents throughout.

## ☎️ Contact (Code-Tech)

- **Location:** Zomba, Malawi
- **Phone:** +265 995 818766 · +265 995 479580
- **Tagline:** From Development to Production

---

© Code-Tech. All rights reserved.
