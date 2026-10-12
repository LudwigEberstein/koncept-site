import type { Metadata } from 'next'
import Gateway from '@/components/gateway/Gateway'
import { RETURNING_VISITOR_REDIRECT } from '@/components/gateway/side'
import JsonLd from '@/components/seo/JsonLd'
import { SITE } from '@/lib/content'
import { organizationJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | ESN à taille humaine à Toulouse` },
  alternates: { canonical: 'https://koncept-is.fr' },
}

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: RETURNING_VISITOR_REDIRECT }} />
      <JsonLd data={organizationJsonLd()} />
      <Gateway />
    </>
  )
}
