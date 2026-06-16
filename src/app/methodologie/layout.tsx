import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Méthodologie',
  description: 'Découverte, cadrage, conception, développement, tests, mise en production : les 7 étapes de notre méthodologie pour des livraisons fiables.',
  alternates: { canonical: 'https://koncept-is.fr/methodologie' },
}

export default function MethodologieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
