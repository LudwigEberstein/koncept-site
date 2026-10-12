import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qui sommes-nous ? Une ESN à taille humaine',
  description: 'Koncept, ESN à taille humaine fondée à Toulouse en 2014 : notre histoire, nos valeurs et les personnes derrière Koncept.',
  alternates: { canonical: '/a-propos' },
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
