import type { Metadata } from 'next'
import Ufo from '@/components/careers/Ufo'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  // Un `title` simple dans ce layout coupe le gabarit du layout racine pour les sous-pages : on le redéfinit ici.
  title: { default: 'Carrières : rejoindre une ESN à taille humaine', template: `%s | ${SITE.name}` },
  description: 'Rejoignez Koncept à Toulouse : développement, DevOps, agilité, pilotage de projet et analyse fonctionnelle, dans une ESN où chacun est connu et suivi.',
  alternates: { canonical: '/carrieres' },
}

export default function CarrieresLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Ufo />
    </>
  )
}
