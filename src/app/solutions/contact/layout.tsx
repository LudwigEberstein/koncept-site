import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Projet, candidature ou partenariat : contactez l\'équipe Koncept IS à Toulouse. Un formulaire adapté à votre demande.',
  alternates: { canonical: 'https://koncept-is.fr/solutions/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
