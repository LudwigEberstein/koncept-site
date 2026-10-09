import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation et évolution',
  description: 'Budget formation dédié dès le 1er jour : certifications financées (cloud, agile, gestion de projet…), kata club hebdo, 3 trajectoires de carrière.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/formation' },
}

export default function FormationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
