# Koncept — site web

Site marketing de Koncept (ESN toulousaine), construit avec Next.js App Router.

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
    ui/                 primitives partagées : Container, Eyebrow, HeroSection, HeroDecor, CtaBand, LinkedinIcon...
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

## Tests end-to-end (Playwright)

Les tests sont dans `e2e/` et tournent sur un build de production (`next start`, port 3100), en desktop et en mobile (Chromium).

```bash
npx playwright install chromium   # une fois, après npm install
npm run test:e2e                  # build + lancement de toute la suite
npm run test:e2e:ui               # mode interactif, pour écrire ou déboguer un test
npm run test:e2e:report           # rapport HTML du dernier lancement
```

Ce qui est vérifié :

- `pages.spec.ts` : chaque page du sitemap répond 200, sans erreur dans la console, avec titre, description, un seul `h1` et une URL canonique correcte ; les adresses inconnues renvoient 404.
- `redirects.spec.ts` : les 9 anciennes URL WordPress redirigent en 308, y compris avec la barre finale.
- `seo-files.spec.ts` : `robots.txt`, `sitemap.xml` (toutes les offres) et l'image Open Graph.
- `gateway.spec.ts` : le choix du côté sur l'écran d'accueil est mémorisé, `/?choisir` le réaffiche.
- `navigation.spec.ts` : menus desktop et mobile.
- `forms.spec.ts` : contact et candidature jusqu'au message de confirmation, champs obligatoires. Quand l'envoi par Resend sera branché, ces tests devront simuler l'appel serveur.

Contre un site déployé (préproduction, ou production le jour de la bascule) :

```bash
PLAYWRIGHT_BASE_URL=https://koncept-is.fr npm run test:e2e
```

Sous PowerShell : `$env:PLAYWRIGHT_BASE_URL = "https://koncept-is.fr"; npm run test:e2e`.

Les tests de formulaires sont ignorés d'office sur `koncept-is.fr`, pour ne pas envoyer de faux messages à l'équipe.

La CI GitHub Actions (`.github/workflows/ci.yml`) lance lint, types et tests end-to-end à chaque PR vers `master`. Elle est informative : rien n'empêche de fusionner une PR dont la CI échoue. Le résultat s'affiche en bas de la PR sur GitHub (onglet Checks) ; en cas d'échec, le rapport Playwright est joint au run.
