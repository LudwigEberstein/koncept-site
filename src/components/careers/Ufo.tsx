'use client'

import { useEffect, useRef, useState } from "react"
import "./ufo.css"

/**
 * Clin d'œil de la partie Carrières : un OVNI en pixel art traverse l'écran de temps en temps.
 * Sprite dessiné en SVG (un carré = un pixel), mouvement saccadé façon 8 bits, aucune interaction.
 * Désactivé si le visiteur préfère un affichage sans mouvement.
 */

const COLORS: Record<string, string> = {
  k: "#1A2744", // contour
  g: "#BFD7FF", // verre
  G: "#FFFFFF", // reflet
  a: "#3DDC84", // alien
  e: "#15151A", // yeux
  s: "#C9CEDA", // métal clair
  m: "#8A90A0", // métal
  d: "#4A5166", // métal sombre
  b: "#D42020", // faisceau (rouge Koncept)
}

// 18 colonnes : dôme, alien, soucoupe. Les feux rouges sont ajoutés à part pour pouvoir clignoter.
const SPRITE = [
  "......kkkkkk......",
  ".....kggGgggk.....",
  "....kgaaaaaagk....",
  "....kgaeaaeagk....",
  ".kkkkkkkkkkkkkkkk.",
  "kssssssssssssssssk",
  "kmmmmmmmmmmmmmmmmk",
  ".kddddddddddddddk.",
  "..kkkkkkkkkkkkkk..",
]
const LIGHTS = [3, 8, 13] // colonnes des feux, sur la rangée 6
const BEAM = [
  [6, 11],
  [5, 12],
  [4, 13],
  [3, 14],
] // [première, dernière] colonne de chaque rangée du faisceau (rangées 9 à 12)

const W = 18
const H = SPRITE.length + BEAM.length

/** Fusionne les pixels voisins de même couleur en un seul rectangle (évite les liserés entre carrés). */
const RUNS = SPRITE.flatMap((row, y) => {
  const runs: { x: number; y: number; w: number; c: string }[] = []
  for (let x = 0; x < row.length; ) {
    const ch = row[x]
    if (ch === ".") { x++; continue }
    let w = 1
    while (row[x + w] === ch) w++
    runs.push({ x, y, w, c: COLORS[ch] })
    x += w
  }
  return runs
})

interface Flight { id: number; rtl: boolean; top: number; px: number; duration: number }

const rand = (min: number, max: number) => min + Math.random() * (max - min)

export default function Ufo() {
  const [flight, setFlight] = useState<Flight | null>(null)
  const shown = useRef(0)

  // Programme la prochaine apparition : la première assez tôt pour être vue, les suivantes plus rares.
  useEffect(() => {
    if (flight) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const delay = shown.current === 0 ? rand(12000, 35000) : rand(40000, 110000)
    const timer = setTimeout(() => {
      shown.current += 1
      setFlight({ id: shown.current, rtl: Math.random() < 0.5, top: rand(14, 60), px: [3, 4][Math.floor(rand(0, 2))], duration: rand(8, 12) })
    }, delay)
    return () => clearTimeout(timer)
  }, [flight])

  if (!flight) return null

  return (
    <div
      key={flight.id}
      className={`ufo ${flight.rtl ? "ufo--rtl" : "ufo--ltr"}`}
      aria-hidden="true"
      style={{
        top: `${flight.top}vh`,
        ["--px" as string]: `${flight.px}px`,
        ["--ufo-duration" as string]: `${flight.duration}s`,
        ["--ufo-steps" as string]: Math.round(flight.duration * 10), // 10 images par seconde
      }}
      onAnimationEnd={e => { if (e.target === e.currentTarget) setFlight(null) }}
    >
      <div className="ufo-bob">
        <svg className="ufo-sprite" viewBox={`0 0 ${W} ${H}`} shapeRendering="crispEdges" focusable="false">
          {BEAM.map(([a, b], i) => (
            <rect key={`b${i}`} className="ufo-beam" style={{ animationDelay: `${i * 0.1}s` }} x={a} y={SPRITE.length + i} width={b - a + 1} height={1} fill={COLORS.b} />
          ))}
          {RUNS.map((r, i) => <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.c} />)}
          {LIGHTS.map((x, i) => <rect key={`l${x}`} className="ufo-light" style={{ animationDelay: `${i * 0.27}s` }} x={x} y={6} width={1} height={1} fill="#D42020" />)}
        </svg>
      </div>
    </div>
  )
}
