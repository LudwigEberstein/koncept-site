import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vie chez Koncept',
  description: 'Découvrez le quotidien chez Koncept IS : stand-up à 9h30, deep work, déjeuners partagés, jeudi mousse, weekend d\'agence, télétravail 2j/semaine, mutuelle prise en charge, outils premium. La vraie vie d\'une ESN humaine.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/vie' },
}

export default function VieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
