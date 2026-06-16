import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carrières',
  description: 'Rejoignez Koncept IS à Toulouse : CDI Java, .NET, DevOps. Ambiance humaine, projets exigeants, 1 500 €/an de formation, 2j de télétravail.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres' },
}

export default function CarrieresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
