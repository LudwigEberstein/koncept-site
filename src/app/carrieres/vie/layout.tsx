import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ambiance et quotidien dans notre équipe toulousaine',
  description: "Rituels d'équipe, moments partagés, télétravail et outils : découvrez le quotidien chez Koncept, une ESN à taille humaine.",
  alternates: { canonical: 'https://koncept-is.fr/carrieres/vie' },
}

export default function VieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
