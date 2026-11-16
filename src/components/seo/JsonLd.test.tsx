import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import JsonLd from './JsonLd'

describe('JsonLd', () => {
  it('rend un <script type="application/ld+json"> dont le contenu se relit à l\'identique', () => {
    const data = { '@type': 'Organization', name: 'Koncept', note: 'R&D « Toulouse »' }
    const html = renderToStaticMarkup(<JsonLd data={data} />)
    const inner = html.match(/^<script type="application\/ld\+json">([\s\S]*)<\/script>$/)?.[1]
    expect(inner).toBeDefined()
    expect(JSON.parse(inner!)).toEqual(data)
  })

  it('une valeur ne peut pas refermer la balise <script> (injection HTML)', () => {
    const html = renderToStaticMarkup(<JsonLd data={{ name: '</script><script>alert(1)</script>' }} />)
    expect(html.match(/<\/script>/g)).toHaveLength(1)
    expect(html).not.toContain('<script>alert')
  })
})
