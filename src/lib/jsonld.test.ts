import { describe, expect, it } from 'vitest'
import { JOBS, JOBS_DATE_POSTED, SITE, type Job } from './content'
import { jobPostingJsonLd, organizationJsonLd } from './jsonld'

describe('organizationJsonLd', () => {
  const org = organizationJsonLd()

  it('décrit Koncept comme une Organization schema.org avec un identifiant stable', () => {
    expect(org['@context']).toBe('https://schema.org')
    expect(org['@type']).toBe('Organization')
    expect(org['@id']).toBe(`${SITE.url}/#organization`)
    expect(org.url).toBe(SITE.url)
    expect(org.email).toBe(SITE.email)
    expect(org.sameAs).toContain(SITE.linkedin)
    expect(org.address).toMatchObject({ postalCode: '31400', addressLocality: 'Toulouse', addressCountry: 'FR' })
  })

  it('pointe vers des URL absolues du site', () => {
    expect(org.logo.startsWith(`${SITE.url}/`)).toBe(true)
    expect(org.image.startsWith(`${SITE.url}/`)).toBe(true)
  })
})

describe.each(JOBS.map(job => [job.slug, job] as const))('jobPostingJsonLd(%s)', (_, job) => {
  const posting = jobPostingJsonLd(job)

  it('reprend le titre, la date de publication et l\'URL de la page de l\'offre', () => {
    expect(posting['@type']).toBe('JobPosting')
    expect(posting.title).toBe(job.title)
    expect(posting.datePosted).toBe(JOBS_DATE_POSTED)
    expect(posting.url).toBe(`${SITE.url}/carrieres/offres/${job.slug}`)
  })

  it('rattache l\'offre à la fiche Organization de Koncept', () => {
    expect(posting.hiringOrganization['@id']).toBe(organizationJsonLd()['@id'])
  })

  it('publie le salaire de l\'offre, en euros par an', () => {
    expect(posting.baseSalary).toMatchObject({ currency: 'EUR' })
    expect(posting.baseSalary.value).toMatchObject({ minValue: job.salaryRange[0], maxValue: job.salaryRange[1], unitText: 'YEAR' })
  })

  it('reprend tout le contenu affiché sur la page (exigence Google for Jobs)', () => {
    const escape = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    for (const text of [job.intro, job.desc, ...job.profile, ...job.daily]) expect(posting.description).toContain(escape(text))
  })
})

describe('jobPostingJsonLd : échappement', () => {
  it('échappe le HTML des textes de l\'offre dans la description', () => {
    const job = { ...JOBS[0], intro: 'Front <React> & back <Node>', profile: ['<script>alert(1)</script>'] } as unknown as Job
    const { description } = jobPostingJsonLd(job)
    expect(description).toContain('Front &lt;React&gt; &amp; back &lt;Node&gt;')
    expect(description).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(description).not.toContain('<script>')
  })
})
