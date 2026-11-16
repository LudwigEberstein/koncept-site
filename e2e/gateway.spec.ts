import { test, expect } from '@playwright/test'

// Écran d'accueil « choisir son côté » : le choix est mémorisé, et un visiteur qui revient sur « / »
// est renvoyé directement vers son côté par le script en ligne du layout racine.
// Les deux moitiés couvrent tout l'écran, découpées en biais (clip-path) : on clique sur le bouton visible
// de chaque moitié, comme un visiteur, et non au centre du lien (qui tombe dans l'autre moitié).
const SIDES = [
  { link: /^Entreprises/, cta: 'Découvrir nos solutions', dest: '/solutions' },
  { link: /^Candidats/, cta: "Rejoindre l'équipe", dest: '/carrieres' },
]

for (const { link, cta, dest } of SIDES) {
  test(`choisir le côté ${dest} y mène et est mémorisé`, async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: link }).getByText(cta).click()
    await expect(page).toHaveURL(dest)

    // Visite suivante de l'accueil : redirection avant affichage (on n'attend que le début du chargement,
    // la redirection interrompt celui de « / »).
    await page.goto('/', { waitUntil: 'commit' })
    await expect(page).toHaveURL(dest)

    // Le logo du header (/?choisir) réaffiche l'écran de choix.
    await page.goto('/?choisir')
    await expect(page.getByRole('link', { name: /^Entreprises/ })).toBeVisible()
    await expect(page).toHaveURL('/?choisir')
  })
}
