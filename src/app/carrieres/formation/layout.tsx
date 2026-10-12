import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation et évolution de carrière en ESN',
  description: 'Formations, certifications, partage de connaissances et trajectoires d\'évolution : comment Koncept accompagne la progression de ses consultants.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/formation' },
}

export default function FormationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
