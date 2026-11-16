import { defineConfig, devices } from '@playwright/test'

/**
 * Tests end-to-end (Playwright).
 *
 * Par défaut : build de production puis `next start` sur le port 3100, comme en ligne.
 * Contre un site déjà déployé (préproduction Vercel, ou koncept-is.fr le jour de la bascule) :
 *   PLAYWRIGHT_BASE_URL=https://… npm run test:e2e
 * Les tests de formulaires se désactivent d'eux-mêmes sur koncept-is.fr (voir e2e/forms.spec.ts).
 */
const PORT = 3100
const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL
const CI = !!process.env.CI

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 1 : 0,
  reporter: CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: externalBaseURL ?? `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] },
      // Redirections et fichiers SEO : de simples requêtes HTTP, inutile de les rejouer en mobile.
      testIgnore: ['redirects.spec.ts', 'seo-files.spec.ts'],
    },
  ],
  webServer: externalBaseURL
    ? undefined
    : {
        command: `npm run build && npm run start -- --port ${PORT}`,
        url: `http://localhost:${PORT}`,
        reuseExistingServer: !CI,
        timeout: 300_000,
      },
})
