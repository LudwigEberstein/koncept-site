import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

/**
 * Tests unitaires (Vitest) : la logique pure et la cohérence des données, sans navigateur.
 * Fichiers *.test.ts(x) rangés à côté du code testé. Les tests end-to-end (Playwright) vivent dans e2e/.
 */
export default defineConfig({
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'node',
  },
})
