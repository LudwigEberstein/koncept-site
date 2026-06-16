import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secteurs',
  description: 'Koncept IS intervient dans 7 secteurs — aéronautique, banque, télécoms, transport, santé, robotique, secteur public. Expertises et missions par domaine.',
  alternates: { canonical: 'https://koncept-is.fr/secteurs' },
}

export default function SecteursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
