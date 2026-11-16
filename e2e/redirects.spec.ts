import { test, expect } from '@playwright/test'

/**
 * Les 9 URL du sitemap de l'ancien site WordPress (koncept-is.fr) : volontairement recopiées ici
 * plutôt que lues dans next.config.ts, pour que la suppression d'une redirection fasse échouer le test.
 * Elles portent le référencement acquis : à garder au moins un an après la bascule.
 */
const LEGACY_REDIRECTS: [from: string, to: string][] = [
  ['/qui-sommes-nous', '/a-propos'],
  ['/ethique', '/a-propos'],
  ['/notre-offre', '/solutions/expertises'],
  ['/formation', '/carrieres/formation'],
  ['/nous-rejoindre', '/carrieres'],
  ['/recrutement', '/carrieres/offres'],
  ['/contact', '/solutions/contact'],
  ['/mentions-legales-politique-de-confidentialite', '/mentions-legales'],
  ['/politique-de-cookies-ue', '/politique-de-confidentialite'],
]

for (const [from, to] of LEGACY_REDIRECTS) {
  test(`${from} redirige en permanent (308) vers ${to}`, async ({ request }) => {
    const res = await request.get(from, { maxRedirects: 0 })
    expect(res.status()).toBe(308)
    expect(new URL(res.headers()['location'], 'http://localhost').pathname).toBe(to)
  })

  // WordPress publiait ses URL avec une barre finale : c'est sous cette forme que Google les connaît.
  test(`${from}/ (forme WordPress) aboutit sur ${to}`, async ({ request }) => {
    const res = await request.get(`${from}/`)
    expect(res.status()).toBe(200)
    expect(new URL(res.url()).pathname).toBe(to)
  })
}
