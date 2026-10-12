import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offres d\'emploi en CDI à Toulouse',
  description: 'Découvrez les postes ouverts chez Koncept à Toulouse et postulez directement en ligne.',
  alternates: { canonical: '/carrieres/offres' },
}

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
