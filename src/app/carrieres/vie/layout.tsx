import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vie chez Koncept',
  description: 'Découvrez le quotidien chez Koncept IS : gaming lunch, événements trimestriels, télétravail 2j/semaine, mutuelle Alan, carte Swile, GitHub Copilot. La vraie vie d\'une ESN humaine.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/vie' },
}

export default function VieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
