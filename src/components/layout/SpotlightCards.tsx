'use client'

import { useEffect } from "react"

/** Pose --mx / --my (position de la souris dans la carte) sur la .glass-card survolée : alimente le halo « spotlight ». */
export default function SpotlightCards() {
  useEffect(() => {
    let raf = 0
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      const card = (e.target as Element | null)?.closest?.(".glass-card") as HTMLElement | null
      if (!card) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect()
        card.style.setProperty("--mx", `${e.clientX - r.left}px`)
        card.style.setProperty("--my", `${e.clientY - r.top}px`)
      })
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => { document.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf) }
  }, [])
  return null
}
