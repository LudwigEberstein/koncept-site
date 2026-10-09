import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secteurs',
  description: 'Les secteurs dans lesquels les consultants de Koncept IS interviennent : aéronautique, banque, télécoms, services IT, robotique, transport, secteur public.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/secteurs' },
}

export default function SecteursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
