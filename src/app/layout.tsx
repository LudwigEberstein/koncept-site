import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/content'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default: `${SITE.name} | ESN à Toulouse - Java, .NET, DevOps`,
  },
  description: "ESN toulousaine de 50 experts. Développement Java, .NET et Angular, conseil DevOps et transformation digitale pour 7 secteurs d'activité.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body style={{ background: "var(--color-bg)", color: "var(--color-ink)", fontFamily: "var(--font-body, Inter, sans-serif)" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
