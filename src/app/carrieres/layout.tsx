import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carrières : rejoindre une ESN à taille humaine',
  description: 'Rejoignez Koncept à Toulouse : développement, DevOps, agilité, pilotage de projet et analyse fonctionnelle, dans une ESN où chacun est connu et suivi.',
  alternates: { canonical: '/carrieres' },
}

export default function CarrieresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
