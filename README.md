# Koncept IS — site web

Site marketing de Koncept IS (ESN toulousaine), construit avec Next.js App Router.

## Stack

- **Next.js 16** (App Router, Turbopack en build ; `next dev --webpack` en développement)
- **React 19**
- **TypeScript 6** (strict) — TS 7 compile le projet mais typescript-eslint ne le supporte pas encore
- **Tailwind CSS v4** (`@tailwindcss/postcss`) — uniquement le reset global ; les pages stylent en `style={{}}` + classes de `styles/decor.css`
- **Motion** (`motion/react`) pour les animations
- **lucide-react** 1.x pour les icônes (les logos de marque, ex. LinkedIn, sont des SVG locaux)
- **ESLint** (`eslint-config-next`, flat config)
- Polices via `next/font` (Outfit + Inter)

## Structure

```
src/
  app/                  routes (App Router) — pages 'use client' (animations Motion)
    <route>/layout.tsx  metadata (title/description/canonical) — colocalisé car page.tsx est un Client Component
  components/
    gateway/            écran d'accueil « choisir son côté » (Solutions / Carrières)
    layout/             Nav, Footer, KonamiCode, SpotlightCards, YearClient
    home/               sections de la page d'accueil Solutions
    ui/                 primitives partagées : Container, Eyebrow, HeroSection, HeroDecor, CtaBand, LinkedinIcon, ToValidate...
    CollaboratorCard.tsx fiche collaborateur réutilisable
  lib/
    content.ts          données statiques du site (nav, jobs, stats...)
    motion.ts           helpers d'animation (makeFadeUp, hook useFadeUp)
    network.ts          génération déterministe du réseau décoratif
styles/
  tokens.css            tokens CSS (couleurs, accents) consommés via var(--color-*)
  decor.css             habillage partagé : héros, cartes spotlight/HUD, bandeaux CTA, GIFs de la culture Carrières
```

## Redirections

D'anciennes routes pré-refonte (`/qui-sommes-nous`, `/notre-offre`, `/recrutement`, `/nous-rejoindre`, `/ethique`, `/formation`) sont redirigées en 308 vers leurs équivalents actuels dans `next.config.ts`.

## Variables d'env

Aucune variable d'environnement requise actuellement.

## Développement

```bash
npm install
npm run dev        # serveur de développement
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # build de production
```
