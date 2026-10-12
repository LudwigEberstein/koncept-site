import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment Koncept collecte, utilise et protège vos données personnelles, et comment exercer vos droits.',
  alternates: { canonical: 'https://koncept-is.fr/politique-de-confidentialite' },
}

export default function ConfidentialiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
