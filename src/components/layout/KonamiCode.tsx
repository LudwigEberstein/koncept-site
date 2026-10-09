'use client'

import { useEffect, useState } from "react"
import KBolt from "@/components/ui/KBolt"

// ↑ ↑ ↓ ↓ ← → ← → B A
const SEQUENCE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
const RAIN = Array.from({ length: 16 }, (_, i) => ({ left: (i * 37 + 8) % 100, delay: (i % 8) * 0.18, size: 22 + (i % 4) * 8 }))

/** Easter egg : le code Konami déclenche une pluie de K-éclair et un message. Écoute globale, invisible sinon. */
export default function KonamiCode() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let pos = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === SEQUENCE[pos]) {
        pos++
        if (pos === SEQUENCE.length) {
          pos = 0
          setActive(true)
          clearTimeout(timer)
          timer = setTimeout(() => setActive(false), 5200)
        }
      } else {
        pos = key === SEQUENCE[0] ? 1 : 0
      }
    }
    window.addEventListener("keydown", onKey)
    return () => { window.removeEventListener("keydown", onKey); clearTimeout(timer) }
  }, [])

  if (!active) return null
  return (
    <div className="konami" role="status" aria-live="polite">
      <div className="konami-rain" aria-hidden="true">
        {RAIN.map((r, i) => (
          <span key={i} style={{ left: `${r.left}%`, animationDelay: `${r.delay}s`, width: r.size, height: r.size * 1.3 }}><KBolt /></span>
        ))}
      </div>
      <div className="konami-toast">
        <span className="konami-title">Cheat code activé</span>
        <span className="konami-sub">+30 vies, café illimité. Bienvenue dans la team.</span>
      </div>
    </div>
  )
}
