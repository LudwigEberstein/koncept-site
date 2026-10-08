import type { Metadata } from 'next'
import Gateway from '@/components/gateway/Gateway'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | ESN à Toulouse - Java, .NET, DevOps` },
  alternates: { canonical: 'https://koncept-is.fr' },
}

export default function Home() {
  return <Gateway />
}
