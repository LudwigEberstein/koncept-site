import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  COLLABORATORS, EXPERTISES, FEATURED_PORTRAITS, IMAGES, JOBS, JOBS_DATE_POSTED, NAV_CAREER, NAV_CLIENT, SECTORS, SITE,
  getCollaborators, getJob,
} from './content'

const ROOT = process.cwd()
/** Une route statique existe si src/app/<route>/page.tsx existe. */
const routeExists = (href: string) => existsSync(join(ROOT, 'src/app', href, 'page.tsx'))
/** Une image référencée par « /chemin » doit exister dans public/. */
const publicFileExists = (src: string) => existsSync(join(ROOT, 'public', src))

const duplicates = (values: readonly string[]) => values.filter((v, i) => values.indexOf(v) !== i)

describe('identifiants uniques', () => {
  it.each([
    ['offres (JOBS)', JOBS.map(j => j.slug)],
    ['expertises (EXPERTISES)', EXPERTISES.map(e => e.slug)],
    ['secteurs (SECTORS)', SECTORS.map(s => s.slug)],
    ['portraits (COLLABORATORS)', COLLABORATORS.map(c => c.name)],
  ])('%s', (_, ids) => {
    expect(duplicates(ids)).toEqual([])
  })

  it('les slugs d\'offres sont utilisables tels quels dans une URL', () => {
    for (const { slug } of JOBS) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })
})

describe('offres d\'emploi', () => {
  it.each(JOBS.map(j => [j.slug, j] as const))('%s : fourchette de salaire cohérente avec le libellé affiché', (_, job) => {
    const [min, max] = job.salaryRange
    expect(min).toBeGreaterThan(0)
    expect(min).toBeLessThan(max)
    // Le libellé « 35–40 K€ » (page) doit dire la même chose que salaryRange (données Google for Jobs).
    const match = job.salary.match(/^(\d+)\s*[–-]\s*(\d+)\s*K€$/)
    expect(match, `libellé inattendu : « ${job.salary} »`).not.toBeNull()
    expect([Number(match![1]) * 1000, Number(match![2]) * 1000]).toEqual([min, max])
  })

  it('JOBS_DATE_POSTED est une date valide au format AAAA-MM-JJ', () => {
    expect(JOBS_DATE_POSTED).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(new Date(`${JOBS_DATE_POSTED}T00:00:00Z`).toISOString().slice(0, 10)).toBe(JOBS_DATE_POSTED)
  })

  it('getJob retrouve une offre par son slug, et rien pour un slug inconnu', () => {
    for (const job of JOBS) expect(getJob(job.slug)).toBe(job)
    expect(getJob('offre-inexistante')).toBeUndefined()
  })
})

describe('portraits collaborateurs', () => {
  it('getCollaborators renvoie les portraits dans l\'ordre demandé', () => {
    const names = COLLABORATORS.map(c => c.name).reverse()
    expect(getCollaborators(names).map(c => c.name)).toEqual(names)
  })

  it('getCollaborators échoue sur un prénom inconnu (pas de carte qui disparaît en silence)', () => {
    expect(() => getCollaborators(['Inconnu'])).toThrow(/Inconnu/)
  })

  it.each(Object.entries(FEATURED_PORTRAITS))('les portraits mis en avant sur /%s existent', (_, names) => {
    expect(() => getCollaborators(names)).not.toThrow()
  })

  it('chaque portrait a une citation, et sa photo existe si elle est renseignée', () => {
    for (const c of COLLABORATORS) {
      expect(c.quote.trim(), c.name).not.toBe('')
      if (c.img) expect(publicFileExists(c.img), `${c.name} : ${c.img} absent de public/`).toBe(true)
    }
  })
})

describe('liens et fichiers', () => {
  it.each([...NAV_CLIENT, ...NAV_CAREER].map(l => [l.label, l.href] as const))('le lien de menu « %s » mène à une page existante', (_, href) => {
    expect(routeExists(href), `${href} : pas de page.tsx`).toBe(true)
  })

  it.each(Object.entries(IMAGES))('l\'image %s existe dans public/', (_, src) => {
    expect(publicFileExists(src)).toBe(true)
  })

  it('les adresses e-mail publiées sont sur le domaine de Koncept', () => {
    expect(SITE.email).toMatch(/^[a-z.-]+@koncept-is\.fr$/)
    expect(SITE.recruitmentEmail).toMatch(/^[a-z.-]+@koncept-is\.fr$/)
  })
})
