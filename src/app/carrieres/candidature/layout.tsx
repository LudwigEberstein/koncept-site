import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Candidature spontanée : tous nos métiers',
  description: 'Pas de poste qui vous correspond ? Envoyez une candidature spontanée à Koncept : développement, architecture, DevOps, analyse, agilité, gestion de projet.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/candidature' },
}

export default function CandidatureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
