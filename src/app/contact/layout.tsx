import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Démarrez un projet, postulez ou proposez un partenariat. L\'équipe Koncept IS vous répond sous 24h depuis Toulouse. Formulaire adaptatif selon votre besoin.',
  alternates: { canonical: 'https://koncept-is.fr/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
