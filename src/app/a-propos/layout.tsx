import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Koncept IS, ESN à taille humaine fondée à Toulouse en 2014 : notre histoire, nos valeurs et les personnes derrière Koncept.',
  alternates: { canonical: 'https://koncept-is.fr/a-propos' },
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
