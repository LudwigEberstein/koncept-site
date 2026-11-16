import { describe, expect, it } from 'vitest'
import { buildNetwork } from './network'

// Mêmes réglages que l'écran d'accueil (Gateway.tsx).
const GATEWAY = { seed: 7, count: 22, x: [40, 720], y: [40, 820] } as { seed: number; count: number; x: [number, number]; y: [number, number] }

describe('buildNetwork', () => {
  it('est déterministe : même graine, même réseau (rendu serveur = rendu navigateur)', () => {
    expect(buildNetwork(GATEWAY)).toEqual(buildNetwork(GATEWAY))
  })

  it('change avec la graine', () => {
    expect(buildNetwork({ ...GATEWAY, seed: 8 }).nodes).not.toEqual(buildNetwork(GATEWAY).nodes)
  })

  it('place le nombre de nœuds demandé, en pixels entiers, dans la zone demandée', () => {
    const { nodes } = buildNetwork(GATEWAY)
    expect(nodes).toHaveLength(GATEWAY.count)
    for (const { x, y } of nodes) {
      expect(Number.isInteger(x) && Number.isInteger(y)).toBe(true)
      expect(x).toBeGreaterThanOrEqual(GATEWAY.x[0])
      expect(x).toBeLessThanOrEqual(GATEWAY.x[0] + GATEWAY.x[1])
      expect(y).toBeGreaterThanOrEqual(GATEWAY.y[0])
      expect(y).toBeLessThanOrEqual(GATEWAY.y[0] + GATEWAY.y[1])
    }
  })

  it('relie chaque nœud à ses 2 plus proches voisins suivants, sans doublon', () => {
    const { nodes, edges } = buildNetwork(GATEWAY)
    const dist = (i: number, j: number) => Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)

    expect(new Set(edges.map(e => e.join('-'))).size).toBe(edges.length)
    nodes.forEach((_, i) => {
      const targets = edges.filter(([a]) => a === i).map(([, b]) => b)
      const following = nodes.map((__, j) => j).filter(j => j > i)
      expect(targets).toHaveLength(Math.min(2, following.length))
      // Aucun nœud non relié n'est plus proche que le plus lointain des voisins retenus.
      const farthestKept = Math.max(0, ...targets.map(j => dist(i, j)))
      for (const j of following.filter(j => !targets.includes(j))) expect(dist(i, j)).toBeGreaterThanOrEqual(farthestKept)
    })
  })

  it('gère les cas limites (0 ou 1 nœud)', () => {
    expect(buildNetwork({ ...GATEWAY, count: 0 })).toEqual({ nodes: [], edges: [] })
    expect(buildNetwork({ ...GATEWAY, count: 1 }).edges).toEqual([])
  })
})
