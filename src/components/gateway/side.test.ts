import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { DEST, RETURNING_VISITOR_REDIRECT, STORAGE_KEY } from './side'

/**
 * Exécute le script en ligne du <head> avec un faux localStorage et un faux location,
 * et renvoie l'adresse vers laquelle il redirige (ou undefined).
 */
function runRedirect({ stored, pathname = '/', search = '', storageThrows = false }: {
  stored?: string | null; pathname?: string; search?: string; storageThrows?: boolean
}) {
  const replace = vi.fn()
  const localStorage = {
    getItem: (key: string) => {
      if (storageThrows) throw new Error('stockage bloqué')
      return key === STORAGE_KEY ? (stored ?? null) : null
    },
  }
  const location = { pathname, search, replace }
  new Function('localStorage', 'location', RETURNING_VISITOR_REDIRECT)(localStorage, location)
  return replace.mock.calls[0]?.[0] as string | undefined
}

describe('redirection des visiteurs de retour (script du <head>)', () => {
  it.each(Object.entries(DEST))('un visiteur qui avait choisi « %s » est renvoyé vers %s', (side, dest) => {
    expect(runRedirect({ stored: side })).toBe(dest)
  })

  it('aucune redirection pour un premier visiteur', () => {
    expect(runRedirect({ stored: null })).toBeUndefined()
  })

  it('aucune redirection pour une valeur stockée inconnue', () => {
    expect(runRedirect({ stored: 'autre-chose' })).toBeUndefined()
  })

  it('aucune redirection ailleurs que sur l\'accueil', () => {
    expect(runRedirect({ stored: 'pro', pathname: '/carrieres' })).toBeUndefined()
  })

  it('/?choisir (logo du header) réaffiche l\'écran de choix', () => {
    expect(runRedirect({ stored: 'pro', search: '?choisir' })).toBeUndefined()
  })

  it('ne plante pas si le navigateur bloque le stockage local', () => {
    expect(() => runRedirect({ storageThrows: true })).not.toThrow()
    expect(runRedirect({ storageThrows: true })).toBeUndefined()
  })
})

describe('destinations', () => {
  it.each(Object.values(DEST))('%s est une page existante', dest => {
    expect(existsSync(join(process.cwd(), 'src/app', dest, 'page.tsx'))).toBe(true)
  })
})
