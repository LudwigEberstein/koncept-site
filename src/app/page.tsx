import type { Metadata } from 'next'
import HomeHero from '@/components/home/HomeHero'
import HomeStats from '@/components/home/HomeStats'
import HomeBifurcation from '@/components/home/HomeBifurcation'
import HomeSectorMarquee from '@/components/home/HomeSectorMarquee'
import HomeExpertises from '@/components/home/HomeExpertises'
import HomeTechStack from '@/components/home/HomeTechStack'
import HomeAbout from '@/components/home/HomeAbout'
import HomeJoinCTA from '@/components/home/HomeJoinCTA'

export const metadata: Metadata = {
  title: 'Accueil',
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeBifurcation />
      <HomeExpertises />
      <HomeSectorMarquee />
      <HomeTechStack />
      <HomeAbout />
      <HomeJoinCTA />
    </>
  )
}
