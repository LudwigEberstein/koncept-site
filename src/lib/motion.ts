// Shared animation helpers — import in any 'use client' component

export type ReducedMotion = boolean | null

/**
 * Returns spread-ready Motion props for a fade-up entrance.
 * Pass the result of useReducedMotion() as `reduce`.
 * Pass `reduce = false` at module scope (non-hook contexts).
 */
export function makeFadeUp(reduce: ReducedMotion, delay = 0) {
  if (reduce) return false as const
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 as const },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }
}

/** Standard hero entrance — use animate (not whileInView) */
export function makeHeroEntrance(reduce: ReducedMotion, delay = 0) {
  if (reduce) return {}
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }
}
