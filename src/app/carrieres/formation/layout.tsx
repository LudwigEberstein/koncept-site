import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation & Évolution',
  description: '1 500 €/an de budget formation dès le 1er jour : certifications AWS, Azure, Kubernetes financées, kata club hebdo, 3 trajectoires de carrière.',
  alternates: { canonical: 'https://koncept-is.fr/carrieres/formation' },
}

export default function FormationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
