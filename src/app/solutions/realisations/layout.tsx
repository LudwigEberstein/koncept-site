import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réalisations : nos interventions chez nos clients',
  description: 'Contexte, intervention, technologies et résultats : quelques missions menées par les consultants de Koncept chez leurs clients.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/realisations' },
}

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
