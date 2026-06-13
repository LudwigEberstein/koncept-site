import type { Metadata } from 'next'
import HomeHero from '@/components/home/HomeHero'
import HomeStats from '@/components/home/HomeStats'
import HomeServices from '@/components/home/HomeServices'
import HomeSectorMarquee from '@/components/home/HomeSectorMarquee'
import HomeTechStack from '@/components/home/HomeTechStack'
import HomeAbout from '@/components/home/HomeAbout'
import HomeSectors from '@/components/home/HomeSectors'
import HomeJoinCTA from '@/components/home/HomeJoinCTA'

export const metadata: Metadata = {
  title: 'Accueil',
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeSectorMarquee />
      <HomeTechStack />
      <HomeAbout />
      <HomeSectors />
      <HomeJoinCTA />
    </>
  )
}
