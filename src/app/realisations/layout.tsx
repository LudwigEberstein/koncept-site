import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Études de cas clients Koncept IS : transport, santé, culture, aéronautique. Projets livrés avec résultats mesurés et stack technique détaillée.',
  alternates: { canonical: 'https://koncept-is.fr/realisations' },
}

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
