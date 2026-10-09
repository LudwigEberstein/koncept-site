import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Les interventions de Koncept IS : contexte, intervention, technologies et résultats.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/realisations' },
}

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
