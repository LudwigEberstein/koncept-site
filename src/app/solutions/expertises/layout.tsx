import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises : développement, DevOps & cloud, fonctionnel et pilotage',
  description: 'Développement full stack (Java, .NET, Node.js, Angular, React), DevOps et cloud (AWS, Azure), accompagnement fonctionnel et pilotage de projet : les compétences de nos consultants.',
  alternates: { canonical: '/solutions/expertises' },
}

export default function ExpertisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
