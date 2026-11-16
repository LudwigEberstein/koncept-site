import { existsSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { describe, expect, it } from 'vitest'
import nextConfig from '../../next.config'
import { JOBS, SITE } from '@/lib/content'
import robots from './robots'
import sitemap from './sitemap'

const APP_DIR = join(process.cwd(), 'src/app')

/** Routes statiques de l'App Router : chaque dossier qui contient un page.tsx, hors segments dynamiques ([slug]). */
function staticRoutes(dir = APP_DIR): string[] {
  const here = existsSync(join(dir, 'page.tsx')) ? ['/' + relative(APP_DIR, dir).split(sep).join('/')] : []
  const children = readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
    .flatMap(d => staticRoutes(join(dir, d.name)))
  return [...here, ...children].map(r => (r === '/' ? '/' : r.replace(/\/$/, '')))
}

const entries = sitemap()
const sitemapPaths = entries.map(e => new URL(e.url).pathname)

describe('sitemap', () => {
  it('ne contient que des URL absolues du site, sans doublon', () => {
    for (const { url } of entries) expect(url.startsWith(SITE.url)).toBe(true)
    expect(new Set(sitemapPaths).size).toBe(sitemapPaths.length)
  })

  it('liste chaque page du site (une page oubliée ne serait ni indexée ni testée en end-to-end)', () => {
    const missing = staticRoutes().filter(r => !sitemapPaths.includes(r))
    expect(missing).toEqual([])
  })

  it('ne liste aucune page qui n\'existe pas', () => {
    const offers = JOBS.map(j => `/carrieres/offres/${j.slug}`)
    const ghosts = sitemapPaths.filter(p => !offers.includes(p) && !staticRoutes().includes(p))
    expect(ghosts).toEqual([])
  })

  it('liste chaque offre d\'emploi', () => {
    for (const { slug } of JOBS) expect(sitemapPaths).toContain(`/carrieres/offres/${slug}`)
  })

  it('a des priorités comprises entre 0 et 1, l\'accueil en tête', () => {
    for (const { priority } of entries) expect(priority).toBeGreaterThanOrEqual(0)
    for (const { priority } of entries) expect(priority).toBeLessThanOrEqual(1)
    expect(entries.find(e => new URL(e.url).pathname === '/')?.priority).toBe(1)
  })
})

describe('robots.txt', () => {
  it('autorise tout et pointe vers le sitemap', () => {
    const { rules, sitemap: url } = robots()
    expect(rules).toEqual({ userAgent: '*', allow: '/' })
    expect(url).toBe(`${SITE.url}/sitemap.xml`)
  })
})

const redirects = (await nextConfig.redirects?.()) ?? []

describe('redirections de l\'ancien site (next.config.ts)', () => {
  it('existent (les 9 URL de l\'ancien WordPress)', () => {
    expect(redirects.length).toBeGreaterThanOrEqual(9)
  })

  it('sont toutes permanentes (308), pour transmettre le référencement', () => {
    for (const r of redirects) expect(r.permanent, r.source).toBe(true)
  })

  it('n\'ont pas deux fois la même source', () => {
    const sources = redirects.map(r => r.source)
    expect(new Set(sources).size).toBe(sources.length)
  })

  it('mènent toutes à une page du sitemap', () => {
    for (const r of redirects) expect(sitemapPaths, `${r.source} → ${r.destination}`).toContain(r.destination)
  })

  it('ne redirigent jamais une page qui existe encore', () => {
    for (const r of redirects) expect(staticRoutes(), r.source).not.toContain(r.source)
  })
})
