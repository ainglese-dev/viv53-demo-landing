# Setup Instructions - Phase 1 Complete!

## ✅ What's Been Done

Phase 1 scaffolding is complete! Here's what's ready:

- [x] Created `migration/react-typescript` branch
- [x] Backed up old vanilla source to `src-old/`
- [x] Created new React + TypeScript structure
- [x] Updated `package.json` with all dependencies
- [x] Created TypeScript configs (`tsconfig.json`, `tsconfig.node.json`)
- [x] Created Vite config for React (`vite.config.ts`)
- [x] Created Tailwind CSS config with VIV53 custom colors
- [x] Created shadcn/ui config (`components.json`)
- [x] Created basic React app structure (`App.tsx`, `main.tsx`)
- [x] Created Tailwind CSS with dark/light mode variables
- [x] Created directory structure for components
- [x] Created utility files (`utils.ts`, `.env.example`)
- [x] Created GitHub Pages 404.html for SPA routing

## 🚦 Next Step: Install Dependencies

Node.js/npm isn't available in my current shell. Please run:

```bash
cd /Users/ainglese-macbook/Documents/aiv-dev-projects/viv53-demo-landing
npm install
```

This will install:
- React 18 + TypeScript
- React Router
- Tailwind CSS
- shadcn/ui dependencies (Radix UI primitives)
- React Hook Form + Zod
- i18next for internationalization
- Analytics libraries
- All dev dependencies

## 🧪 Test the Dev Server

After `npm install`, run:

```bash
npm run dev
```

You should see the app at `http://localhost:3000` with a simple "Phase 1 Complete!" message.

## 📁 New Structure

```
viv53-demo-landing/
├── src/                          # New React source
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components (empty, will install next)
│   │   ├── layout/               # Header, Footer, etc.
│   │   ├── sections/             # Hero, Services, About, etc.
│   │   ├── forms/                # ContactForm, BookingForm
│   │   ├── features/             # ThemeToggle, WhatsApp button
│   │   └── common/               # Reusable components
│   ├── lib/                      # Utilities (utils.ts)
│   ├── hooks/                    # Custom hooks
│   ├── contexts/                 # React contexts (theme, etc.)
│   ├── types/                    # TypeScript types
│   ├── data/                     # Static content
│   ├── pages/                    # Page components
│   ├── assets/                   # Images, fonts
│   ├── App.tsx                   # Main app
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Tailwind styles
├── src-old/                      # Backup of vanilla JS code
├── public/                       # Static files (CNAME, 404.html)
├── index.html                    # HTML entry point
└── [config files]                # TS, Vite, Tailwind configs

```

## 🎨 Tailwind Colors

VIV53 custom colors are configured:
- `bg-viv53-primary-bg` - #0a0a0a (black)
- `text-viv53-gold` - #d4af37 (gold accent)
- `bg-viv53-primary-bg-secondary` - #1a1a1a (dark gray)

Dark mode is the default, light mode is available via theme toggle.

## 📦 What's Next (After npm install)

1. ✅ **You**: Run `npm install`
2. ✅ **You**: Test with `npm run dev`
3. **Me**: Install shadcn/ui components
4. **Me**: Start Phase 2 - Layout & Routing

Let me know when npm install is done and the dev server works!
