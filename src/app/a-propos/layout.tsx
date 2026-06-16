import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Fondée en 2014 à Toulouse, Koncept IS réunit 50 experts Java, .NET et DevOps. Découvrez notre histoire, nos valeurs et nos équipes.',
  alternates: { canonical: 'https://koncept-is.fr/a-propos' },
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
