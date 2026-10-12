import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Notre méthode d'accompagnement des projets IT",
  description: 'Comprendre votre besoin, proposer les bons profils, suivre nos consultants : la façon de travailler de Koncept, ESN à taille humaine.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/methodologie' },
}

export default function MethodologieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
