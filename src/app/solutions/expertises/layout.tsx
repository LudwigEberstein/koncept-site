import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises',
  description: 'Développement logiciel Java, .NET et Angular, intégration continue, bases de données, accompagnement fonctionnel et pilotage : les compétences de Koncept IS.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/expertises' },
}

export default function ExpertisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
