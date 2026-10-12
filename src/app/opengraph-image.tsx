import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { SITE } from '@/lib/content'

// Image de partage (LinkedIn, messageries…) générée au build, par défaut pour toutes les pages.
export const alt = `${SITE.name} — ${SITE.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public/brand/logo-koncept-web.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '72px 80px', color: '#F0EDE8',
          background: 'radial-gradient(circle at 88% 12%, rgba(212,32,32,0.35), rgba(212,32,32,0) 48%), #15151A',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={420} height={84} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 76, lineHeight: 1.08, letterSpacing: -2 }}>
          <span>Les bonnes compétences,</span>
          <span style={{ color: '#D42020' }}>au bon moment.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#A8A8A5', letterSpacing: 1 }}>
          ESN à taille humaine · Toulouse
        </div>
      </div>
    ),
    size,
  )
}
