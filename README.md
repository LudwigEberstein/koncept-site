# Koncept IS — site web

Site marketing de Koncept IS (ESN toulousaine), construit avec Next.js App Router.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) — utilisé uniquement pour le reset global ; les pages stylent en `style={{}}` inline
- **Motion** (`motion/react`, ex-Framer Motion) pour les animations
- **lucide-react** pour les icônes
- Polices via `next/font` (Outfit + Inter)

## Structure

```
src/
  app/                  routes (App Router) — chaque page.tsx 'use client'
    <route>/layout.tsx  metadata (title/description/canonical) — colocalisé car page.tsx est un Client Component
  components/
    layout/             Nav, Footer, YearClient
    home/                composants de la page d'accueil
    ui/                  PageHero, RevealSection (composants partagés)
    CollaboratorCard.tsx fiche collaborateur réutilisable (carrières / réalisations)
  lib/
    content.ts           données statiques du site (nav, équipe, jobs, images...)
    motion.ts             helpers d'animation partagés (makeFadeUp, makeHeroEntrance)
styles/
  tokens.css              tokens CSS (couleurs, accents) consommés via var(--color-*)
```

## Redirections

D'anciennes routes pré-refonte (`/qui-sommes-nous`, `/notre-offre`, `/recrutement`, `/nous-rejoindre`, `/ethique`, `/formation`) sont redirigées en 308 vers leurs équivalents actuels dans `next.config.ts`.

## Variables d'env

Aucune variable d'environnement requise actuellement.

## Développement

```bash
npm install
npm run dev
```
