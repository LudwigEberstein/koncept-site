import { test, expect } from '@playwright/test'
import { JOBS, SITE } from '../src/lib/content'

test('robots.txt autorise l\'indexation et pointe vers le sitemap', async ({ request }) => {
  const res = await request.get('/robots.txt')
  expect(res.status()).toBe(200)
  const body = await res.text()
  expect(body).toContain('Allow: /')
  expect(body).toContain(`Sitemap: ${SITE.url}/sitemap.xml`)
})

test('sitemap.xml liste chaque offre d\'emploi', async ({ request }) => {
  const res = await request.get('/sitemap.xml')
  expect(res.status()).toBe(200)
  const body = await res.text()
  for (const job of JOBS) expect(body).toContain(`<loc>${SITE.url}/carrieres/offres/${job.slug}</loc>`)
})

test('l\'image de partage (Open Graph) est générée', async ({ page, request }) => {
  await page.goto('/solutions')
  const ogImage = await page.locator('meta[property="og:image"]').first().getAttribute('content')
  expect(ogImage).toBeTruthy()
  // L'URL publiée est absolue (domaine de production) : on la rejoue sur le serveur testé.
  const { pathname, search } = new URL(ogImage!)
  const res = await request.get(pathname + search)
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toContain('image/png')
})
