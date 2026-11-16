import { test, expect } from '@playwright/test'

test('menu desktop : le sous-menu Solutions mène aux pages', async ({ page, isMobile }) => {
  test.skip(isMobile, 'menu desktop uniquement')
  await page.goto('/carrieres')
  await page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Solutions' }).hover()
  await page.getByRole('menuitem', { name: 'Expertises' }).click()
  await expect(page).toHaveURL('/solutions/expertises')
})

test('menu mobile : ouverture, sous-menu Carrières, navigation', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'menu mobile uniquement')
  await page.goto('/solutions')
  await page.getByRole('button', { name: 'Ouvrir le menu' }).click()
  const menu = page.getByRole('navigation', { name: 'Menu mobile' })
  await menu.getByRole('button', { name: 'Sous-menu Carrières' }).click()
  await menu.getByRole('link', { name: "Offres d'emploi", exact: true }).click()
  await expect(page).toHaveURL('/carrieres/offres')
})
