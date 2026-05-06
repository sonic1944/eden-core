# Eden-Core Website

A premium React/Vite website for Eden-Core — digital growth partner for SMEs.

## Project Structure

```
eden-core/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── globals.css          ← CSS variables, base styles, utilities
    ├── assets/
    │   └── images/
    │       ├── hero-network-bg.png   ← Hero section background (dark network/grid)
    │       ├── hero-bg.png           ← Secondary hero visual
    │       └── cta-bg.png            ← CTA section background (neon triangles)
    └── components/
        ├── Navbar.jsx / .css         ← Sticky navigation
        ├── Hero.jsx / .css           ← Hero with background image + triangle SVG
        ├── Services.jsx / .css       ← 5 service cards in 3-col grid
        ├── WhyEdenCore.jsx / .css    ← Sticky left + 6-card right grid
        ├── Process.jsx / .css        ← 6-step process timeline
        ├── Packages.jsx / .css       ← 4 package cards (no prices shown)
        ├── AIChatbot.jsx / .css      ← AI chatbot section with animated chat UI
        ├── CTA.jsx / .css            ← Full CTA with neon bg image + contact info
        └── Footer.jsx / .css         ← 4-column footer
```

## Setup & Run

```bash
npm install
npm run dev
```

Open: http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Brand Colors

- Deep Navy: `#060721`
- Cyan: `#18EFE0`
- Electric Blue: `#26B9FF`
- Neon Indigo: `#4525E6`

All colors are defined as CSS variables in `src/styles/globals.css`.

## Typography

- **Display/Headings**: Syne (Google Fonts)
- **Body**: DM Sans (Google Fonts)

Both loaded via `<link>` in `index.html` — no install needed.


