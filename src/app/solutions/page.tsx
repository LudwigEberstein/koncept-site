import type { Metadata } from 'next'
import HomeHero from '@/components/home/HomeHero'
import HomeWhy from '@/components/home/HomeWhy'
import HomeExpertises from '@/components/home/HomeExpertises'
import HomeExplore from '@/components/home/HomeExplore'
import HomeTechStack from '@/components/home/HomeTechStack'
import HomeAbout from '@/components/home/HomeAbout'
import CtaBand from '@/components/ui/CtaBand'

export const metadata: Metadata = {
  title: 'Solutions',
  description: "ESN toulousaine à taille humaine : développement logiciel (Java, .NET, Angular), accompagnement technique et fonctionnel de vos projets.",
  alternates: { canonical: 'https://koncept-is.fr/solutions' },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhy />
      <HomeExpertises />
      <HomeExplore />
      <HomeTechStack />
      <HomeAbout />
      <CtaBand side="pro" prev="bg2" title="Parlons de votre besoin."
        text="Décrivez-nous votre contexte : nous vous répondons simplement et directement."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
        secondary={{ label: "Rejoindre l'équipe", href: "/carrieres" }}
      />
    </>
  )
}
