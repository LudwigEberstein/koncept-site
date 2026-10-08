'use client'

import { useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SITE, IMAGES } from "@/lib/content"
import { DEST, STORAGE_KEY, type Side } from "./side"
import "./gateway.css"
const CIRCLE_BG: Record<Side, string> = {
  pro: "#3b82f6",
  fun: "linear-gradient(135deg, #D42020, #8f1010)",
}

/** Réseau décoratif (côté Solutions) : positions pseudo-aléatoires mais déterministes. */
function buildNetwork() {
  let seed = 7
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  const nodes = Array.from({ length: 22 }, () => ({ x: Math.round(40 + rnd() * 720), y: Math.round(40 + rnd() * 820) }))
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

function isNarrow() {
  return window.matchMedia("(max-width: 860px)").matches
}

export default function Gateway() {
  const router = useRouter()
  const [x, setX] = useState(50)
  const [dim, setDim] = useState<Side | null>(null)
  const net = useMemo(buildNetwork, [])
  const choosing = useRef(false) // évite les doubles clics (plusieurs cercles + navigations)

  function hover(side: Side | null) {
    setDim(side === "pro" ? "fun" : side === "fun" ? "pro" : null)
    if (side === null) return setX(50)
    const narrow = isNarrow()
    setX(side === "pro" ? (narrow ? 58 : 62) : (narrow ? 42 : 38))
  }

  function choose(side: Side, e: React.MouseEvent<HTMLAnchorElement>) {
    // clic « normal » uniquement : ctrl/cmd-clic, clic milieu… gardent le comportement d'un lien
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    if (choosing.current) return
    choosing.current = true
    try { localStorage.setItem(STORAGE_KEY, side) } catch { /* ignore */ }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return router.push(DEST[side])

    // clic au clavier : e.clientX/Y valent 0 → on part du centre de l'élément
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX || rect.left + rect.width / 2
    const cy = e.clientY || rect.top + rect.height / 2
    const r = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) + 20

    // le cercle vit hors de React : il survit au changement de page puis s'efface
    const circle = document.createElement("div")
    circle.setAttribute("aria-hidden", "true")
    circle.style.cssText = `position:fixed;inset:0;z-index:2147483000;pointer-events:none;background:${CIRCLE_BG[side]};clip-path:circle(0 at ${cx}px ${cy}px)`
    document.body.appendChild(circle)
    const grow = circle.animate(
      [{ clipPath: `circle(0 at ${cx}px ${cy}px)` }, { clipPath: `circle(${r}px at ${cx}px ${cy}px)` }],
      { duration: 650, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" },
    )
    grow.onfinish = () => {
      router.push(DEST[side])
      // on garde le cercle tant que la nouvelle page n'est pas affichée (compilation lente en dev, réseau lent…)
      const startedAt = Date.now()
      const wait = setInterval(() => {
        const arrived = window.location.pathname !== "/"
        if (!arrived && Date.now() - startedAt < 6000) return
        clearInterval(wait)
        if (!arrived) choosing.current = false
        setTimeout(() => {
          circle.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, fill: "forwards" }).onfinish = () => circle.remove()
        }, 250)
      }, 50)
    }
  }

  const { nodes, edges } = net

  return (
    <div
      className={`gw${dim ? ` gw-dim-${dim}` : ""}`}
      style={{ ["--gw-x" as string]: x }}
      onMouseLeave={() => hover(null)}
    >
      <h1 className="gw-sr">{SITE.name} — ESN à Toulouse : solutions IT pour les entreprises et carrières pour les développeurs</h1>

      <div className="gw-logo">
        <Image src={IMAGES.logo} alt={SITE.name} width={120} height={30} priority />
      </div>

      {/* ============ Solutions ============ */}
      <Link
        href={DEST.pro}
        className="gw-half gw-pro"
        onMouseEnter={() => hover("pro")}
        onFocus={() => hover("pro")}
        onBlur={() => hover(null)}
        onClick={e => choose("pro", e)}
        aria-label="Entreprises : découvrir nos solutions"
      >
        <div className="gw-bg gw-glow" />
        <div className="gw-bg gw-grid" />
        <svg className="gw-net" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {edges.map(([i, j]) => (
            <line key={`l${i}-${j}`} x1={nodes[i].x} y1={nodes[i].y} x2={nodes[j].x} y2={nodes[j].y} stroke="rgba(96,165,250,.28)" strokeWidth="1" />
          ))}
          {nodes.map((n, i) => (
            <circle key={`n${i}`} cx={n.x} cy={n.y} r={i % 5 === 0 ? 7 : 3.5} fill={i % 5 === 0 ? "#0a1830" : "#60a5fa"} stroke="#60a5fa" strokeWidth={i % 5 === 0 ? 1.5 : 0} />
          ))}
          {edges.filter((_, k) => k % 3 === 0).map(([i, j], k) => (
            <circle key={`p${i}-${j}`} r="2.6" fill="#9cc5ff">
              <animateMotion dur={`${3 + (k % 4)}s`} repeatCount="indefinite" begin={`${(-k * 0.7).toFixed(1)}s`} path={`M${nodes[i].x},${nodes[i].y} L${nodes[j].x},${nodes[j].y}`} />
            </circle>
          ))}
        </svg>
        <div className="gw-scan" />

        <div className="gw-glass" style={{ bottom: "2.5%", left: "6vw", animationDelay: "-4s", minWidth: 230 }} aria-hidden="true">
          <span className="gw-ok">Pipeline en production</span>
          <b>42 services</b>
          <span style={{ fontFamily: "ui-monospace, Consolas, monospace", fontSize: 11 }}>$ deploy --env prod ✓</span>
        </div>

        <div className="gw-inner">
          <div className="gw-tag">Solutions · Entreprises</div>
          <h2 className="gw-title">Nous construisons<br />vos <em>systèmes</em>.</h2>
          <p className="gw-txt">Développement, architecture, cloud, DevOps. Des équipes qui s&apos;intègrent à vos projets avec méthode et engagement.</p>
          <span className="gw-cta">Découvrir nos solutions →</span>
        </div>
      </Link>

      {/* ============ Carrières ============ */}
      <Link
        href={DEST.fun}
        className="gw-half gw-fun"
        onMouseEnter={() => hover("fun")}
        onFocus={() => hover("fun")}
        onBlur={() => hover(null)}
        onClick={e => choose("fun", e)}
        aria-label="Candidats : rejoindre l'équipe"
      >
        <div className="gw-bg"><div className="gw-blob gw-b1" /><div className="gw-blob gw-b2" /></div>
        <div className="gw-bg gw-dots" />
        <div className="gw-marq" aria-hidden="true"><span>REJOINS L&apos;AVENTURE ★ ON RECRUTE ★ REJOINS L&apos;AVENTURE ★ ON RECRUTE ★&nbsp;</span></div>
        <div className="gw-bg gw-vig" />
        <div className="gw-figure" aria-hidden="true">
          {/* GIF animé (<img> : next/image n'optimise pas les GIF), image fixe si l'utilisateur réduit les animations */}
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/luchador-static.png" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/culture/luchador.gif" alt="" />
          </picture>
        </div>

        <div className="gw-inner">
          <div className="gw-tag">Carrières · Candidats</div>
          <h2 className="gw-title">Viens <em>coder</em><br />avec nous.</h2>
          <p className="gw-txt">Des missions qui ont du sens, une équipe soudée, et un café qui t&apos;attend. Rejoins l&apos;aventure.</p>
          <span className="gw-cta">Rejoindre l&apos;équipe →</span>
        </div>
      </Link>

      <div className="gw-hint">Choisis ton côté</div>
    </div>
  )
}
