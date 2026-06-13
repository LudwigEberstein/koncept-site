'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"
import { SITE, NAV_LINKS, IMAGES } from "@/lib/content"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(13,13,13,0.92)" : "rgba(13,13,13,0.75)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--color-border)",
      height: 68,
      transition: "background 0.3s",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <img src={IMAGES.logo} alt="Koncept" style={{ height: 30, width: "auto", objectFit: "contain" }} />
        </Link>

        {/* Desktop nav — centre */}
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.filter(l => l.href !== "/").map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href} style={{
                padding: "6px 12px", borderRadius: 6,
                color: active ? "var(--color-ink)" : "var(--color-ink-2)",
                textDecoration: "none", fontSize: 13, fontWeight: 500,
                background: active ? "rgba(240,237,232,0.07)" : "transparent",
                transition: "color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
              >{label}</Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a href={SITE.phoneHref} style={{ color: "var(--color-ink-2)", fontSize: 13, fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
          >
            <Phone size={13} />{SITE.phone}
          </a>
          <Link href="/contact" style={{
            background: "var(--color-accent)", color: "#fff", padding: "9px 18px",
            borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none",
            transition: "background 0.2s, transform 0.1s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#E53535" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-accent)" }}
            onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = "scale(0.97)" }}
            onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-mobile" onClick={() => setMenuOpen(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-ink)", padding: 8, display: "none" }}
          aria-label={menuOpen ? "Fermer" : "Menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 0 }}>
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href} style={{
                padding: "13px 0", color: active ? "var(--color-accent)" : "var(--color-ink)",
                textDecoration: "none", fontSize: 16, fontWeight: 500,
                borderBottom: "1px solid var(--color-border)",
              }}>
                {label}
              </Link>
            )
          })}
          <a href={SITE.phoneHref} style={{ marginTop: 20, color: "var(--color-accent)", textDecoration: "none", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
            <Phone size={16} />{SITE.phone}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) { .nav-desktop { display: none !important; } .nav-mobile { display: flex !important; } }
        @media (min-width: 1024px) { .nav-mobile { display: none !important; } .nav-desktop { display: flex !important; } }
      `}</style>
    </header>
  )
}
