import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Candidature spontanée',
  description: 'Pas de poste qui vous corresponde ? Envoyez une candidature spontanée à Koncept IS — développeur, architecte, DevOps, business analyst, product owner, scrum master, chef de projet. Valentine répond personnellement.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/candidature' },
}

export default function CandidatureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
