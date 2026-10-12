import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises : développement, DevOps et analyse métier',
  description: 'Développement Java, .NET et Angular, intégration continue, bases de données, analyse fonctionnelle et pilotage de projet : les compétences de nos consultants.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/expertises' },
}

export default function ExpertisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
