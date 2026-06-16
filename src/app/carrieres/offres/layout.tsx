import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offres d\'emploi',
  description: 'Postes ouverts chez Koncept IS à Toulouse : développeur JS FullStack, Java, .NET, DevOps. CDI, 2j télétravail/semaine, réponse sous 48h.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/offres' },
}

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
