import type { Metadata } from 'next'
import HomeHero from '@/components/home/HomeHero'
import HomeWhy from '@/components/home/HomeWhy'
import HomeExpertises from '@/components/home/HomeExpertises'
import HomeExplore from '@/components/home/HomeExplore'
import HomeAbout from '@/components/home/HomeAbout'
import CtaBand from '@/components/ui/CtaBand'

export const metadata: Metadata = {
  title: 'ESN toulousaine : des consultants IT pour vos projets',
  description: "Développeurs, architectes, DevOps, analystes et chefs de projet : Koncept accompagne vos projets IT (Java, .NET, Angular) avec des consultants suivis de près.",
  alternates: { canonical: '/solutions' },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhy />
      <HomeExpertises />
      <HomeExplore />
      <HomeAbout />
      <CtaBand side="pro" prev="bg2" title="Parlons de votre besoin."
        text="Décrivez-nous votre contexte : nous vous répondons simplement et directement."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
        secondary={{ label: "Rejoindre l'équipe", href: "/carrieres" }}
      />
    </>
  )
}
