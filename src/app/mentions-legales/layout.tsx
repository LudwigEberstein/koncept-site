import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Koncept : éditeur, hébergeur, propriété intellectuelle.',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
