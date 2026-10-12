import type { Metadata } from 'next'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  // Redéfini ici pour que les pages d'offre [slug] gardent le suffixe « | Koncept » (un `title` simple coupe le gabarit hérité).
  title: { default: "Offres d'emploi en CDI à Toulouse", template: `%s | ${SITE.name}` },
  description: 'Découvrez les postes ouverts chez Koncept à Toulouse et postulez directement en ligne.',
  alternates: { canonical: '/carrieres/offres' },
}

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
