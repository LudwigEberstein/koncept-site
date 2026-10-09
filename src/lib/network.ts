export interface NetworkNode { x: number; y: number }
export interface Network { nodes: NetworkNode[]; edges: [number, number][] }

interface NetworkOptions {
  seed: number
  count: number
  /** Zone de placement des nœuds : [début, étendue] sur chaque axe. */
  x: [number, number]
  y: [number, number]
}

/**
 * Petit réseau décoratif : nœuds pseudo-aléatoires mais déterministes (SSR = client),
 * chacun relié à ses 2 plus proches voisins suivants. Utilisé par l'écran d'accueil et les héros.
 */
export function buildNetwork({ seed, count, x, y }: NetworkOptions): Network {
  let s = seed
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647
  const nodes = Array.from({ length: count }, () => ({ x: Math.round(x[0] + rnd() * x[1]), y: Math.round(y[0] + rnd() * y[1]) }))
  const edges: [number, number][] = []
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter(o => o.j > i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach(o => edges.push([i, o.j]))
  })
  return { nodes, edges }
}
