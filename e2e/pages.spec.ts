import { test, expect } from '@playwright/test'
import sitemap from '../src/app/sitemap'
import { SITE } from '../src/lib/content'

// Une vérification par page publique : la liste vient du sitemap, une page ajoutée au sitemap est testée d'office.
const PATHS = sitemap().map(({ url }) => new URL(url).pathname)

const withoutTrailingSlash = (url: string) => url.replace(/\/$/, '')

for (const path of PATHS) {
  test(`${path} s'affiche sans erreur, avec ses métadonnées`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', e => errors.push(`exception : ${e.message}`))
    page.on('console', msg => { if (msg.type() === 'error') errors.push(`console : ${msg.text()}`) })

    const res = await page.goto(path)
    expect(res?.status()).toBe(200)

    await expect(page).toHaveTitle(/\S/)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/)
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    expect(withoutTrailingSlash(canonical ?? '')).toBe(withoutTrailingSlash(`${SITE.url}${path}`))

    // Laisse l'hydratation et les animations démarrer : c'est là que plantent les Client Components.
    await page.waitForLoadState('networkidle')
    expect(errors).toEqual([])
  })
}

test('une adresse inconnue renvoie une 404', async ({ page }) => {
  const res = await page.goto('/cette-page-n-existe-pas')
  expect(res?.status()).toBe(404)
})

test('une offre inconnue renvoie une 404', async ({ page }) => {
  const res = await page.goto('/carrieres/offres/offre-inexistante')
  expect(res?.status()).toBe(404)
})
