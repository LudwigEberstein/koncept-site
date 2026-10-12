import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact : parlons de votre projet IT',
  description: 'Projet, candidature ou partenariat : contactez l\'équipe Koncept à Toulouse. Un formulaire adapté à votre demande.',
  alternates: { canonical: '/solutions/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
