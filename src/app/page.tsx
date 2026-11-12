import type { Metadata } from 'next'
import Gateway from '@/components/gateway/Gateway'
import JsonLd from '@/components/seo/JsonLd'
import { SITE } from '@/lib/content'
import { organizationJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | ESN à taille humaine à Toulouse` },
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Gateway />
    </>
  )
}
