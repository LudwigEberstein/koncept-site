import { test, expect } from '@playwright/test'
import { JOBS } from '../src/lib/content'

/**
 * Formulaires de contact et de candidature.
 * Aujourd'hui ils n'envoient rien (simple message de confirmation). Quand l'envoi par Resend sera branché,
 * ces tests devront simuler l'appel serveur (page.route) ou utiliser les adresses de test de Resend.
 * Ils ne tournent jamais sur le site de production, pour ne pas envoyer de faux messages à l'équipe.
 */
test.beforeEach(({ baseURL }) => {
  const host = new URL(baseURL!).hostname
  test.skip(host === 'koncept-is.fr' || host.endsWith('.koncept-is.fr'), 'pas de soumission de formulaire en production')
})

test.describe('contact', () => {
  test('une demande de projet aboutit au message de confirmation', async ({ page }) => {
    await page.goto('/solutions/contact')
    await page.getByRole('button', { name: /Projet IT/ }).click()

    const form = page.locator('form')
    await form.locator('[name="prenom"]').fill('Jean')
    await form.locator('[name="nom"]').fill('Test')
    await form.locator('[name="email"]').fill('jean.test@example.com')
    await form.locator('[name="societe"]').fill('Société de test')
    await form.locator('[name="budget"]').selectOption('50-150k')
    await form.locator('[name="message"]').fill('Message envoyé par les tests automatiques.')
    await page.getByRole('button', { name: 'Envoyer', exact: true }).click()

    await expect(page.getByRole('heading', { name: 'Message bien reçu.' })).toBeVisible()
    await expect(page.getByText('Aurélie vous recontactera')).toBeVisible()
  })

  test('les champs obligatoires bloquent l\'envoi', async ({ page }) => {
    await page.goto('/solutions/contact')
    await page.getByRole('button', { name: /Autre/ }).click()
    await page.getByRole('button', { name: 'Envoyer', exact: true }).click()

    await expect(page.locator('form [name="prenom"]')).toHaveJSProperty('validity.valid', false)
    await expect(page.getByRole('heading', { name: 'Message bien reçu.' })).toHaveCount(0)
  })
})

test.describe('candidature', () => {
  test('« Postuler » depuis une offre pré-remplit le poste, puis l\'envoi aboutit', async ({ page }) => {
    const job = JOBS[0]
    await page.goto(`/carrieres/offres/${job.slug}`)
    await page.getByRole('link', { name: 'Postuler' }).first().click()
    await expect(page).toHaveURL(/\/carrieres\/candidature\?poste=/)
    await expect(page.getByLabel('Poste visé')).toHaveValue(job.title)

    await page.getByLabel('Prénom').fill('Jean')
    await page.getByLabel('Nom', { exact: true }).fill('Test')
    await page.getByLabel('Email').fill('jean.test@example.com')
    await page.getByLabel('Ton message').fill('Candidature envoyée par les tests automatiques.')
    await page.getByRole('button', { name: 'Envoyer ma candidature' }).click()

    await expect(page.getByRole('heading', { name: 'Candidature bien reçue !' })).toBeVisible()
  })

  test('les champs obligatoires bloquent l\'envoi', async ({ page }) => {
    await page.goto('/carrieres/candidature')
    await page.getByRole('button', { name: 'Envoyer ma candidature' }).click()

    await expect(page.getByLabel('Prénom')).toHaveJSProperty('validity.valid', false)
    await expect(page.getByRole('heading', { name: 'Candidature bien reçue !' })).toHaveCount(0)
  })
})
