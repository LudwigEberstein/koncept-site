import type { MetadataRoute } from 'next'
import { JOBS, SITE } from '@/lib/content'

// Priorité : accueil et pages d'entrée des deux univers > pages de contenu > pages légales.
const ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/solutions', priority: 0.9 },
  { path: '/solutions/expertises', priority: 0.8 },
  { path: '/solutions/secteurs', priority: 0.7 },
  { path: '/solutions/methodologie', priority: 0.7 },
  { path: '/solutions/realisations', priority: 0.7 },
  { path: '/solutions/contact', priority: 0.8 },
  { path: '/a-propos', priority: 0.7 },
  { path: '/carrieres', priority: 0.9 },
  { path: '/carrieres/vie', priority: 0.7 },
  { path: '/carrieres/formation', priority: 0.7 },
  { path: '/carrieres/offres', priority: 0.8 },
  { path: '/carrieres/candidature', priority: 0.6 },
  { path: '/mentions-legales', priority: 0.2 },
  { path: '/politique-de-confidentialite', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const offers = JOBS.map(({ slug }) => ({ path: `/carrieres/offres/${slug}`, priority: 0.7 }))
  return [...ROUTES, ...offers].map(({ path, priority }) => ({ url: `${SITE.url}${path}`, priority }))
}
