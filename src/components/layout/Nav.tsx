'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"
import { SITE, NAV_CLIENT, NAV_CAREER, IMAGES } from "@/lib/content"

type DropdownId = "solutions" | "carrieres" | null

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<DropdownId>(null)
  const [mobileOpen, setMobileOpen] = useState<DropdownId>(null)
  const pathname = usePathname()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setActive(null) }, [pathname])

  const isCareerPage = pathname.startsWith("/carrieres")
  const ctaHref = isCareerPage ? "/carrieres/offres" : "/contact"
  const ctaLabel = isCareerPage ? "Voir les offres" : "Parlons de votre projet"

  function openDropdown(id: DropdownId) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActive(id)
  }
  function closeDropdown() {
    timeoutRef.current = setTimeout(() => setActive(null), 120)
  }

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(13,13,13,0.95)" : "rgba(13,13,13,0.8)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--color-border)",
      transition: "background 0.3s",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", gap: 8 }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, marginRight: 16 }}>
          <Image src={IMAGES.logo} alt={`${SITE.name} — accueil`} width={120} height={30} style={{ height: 30, width: "auto", objectFit: "contain" }} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }} aria-label="Navigation principale">

          {/* Solutions dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => openDropdown("solutions")}
            onMouseLeave={closeDropdown}
          >
            <button
              aria-expanded={active === "solutions"}
              aria-haspopup="true"
              style={{
                display: "flex", alignItems: "center", gap: 5, padding: "8px 12px",
                borderRadius: 7, background: active === "solutions" ? "rgba(59,130,246,0.1)" : "transparent",
                border: "none", cursor: "pointer", color: active === "solutions" ? "#60a5fa" : "var(--color-ink-2)",
                fontSize: 13, fontWeight: 600, transition: "all 0.15s",
              }}>
              Solutions <ChevronDown size={13} aria-hidden="true" style={{ transition: "transform 0.2s", transform: active === "solutions" ? "rotate(180deg)" : "none" }} />
            </button>

            {active === "solutions" && (
              <div role="menu" onMouseEnter={() => openDropdown("solutions")} onMouseLeave={closeDropdown}
                style={{
                  position: "absolute", top: "calc(100% + 8px)", left: 0,
                  background: "#141414", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14, padding: 20, minWidth: 280, boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                  zIndex: 100,
                }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 12 }}>Nos solutions</p>
                {NAV_CLIENT.map(({ label, href }) => (
                  <Link key={href} href={href} role="menuitem" style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderRadius: 8, color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
                  >
                    {label}
                  </Link>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 12, paddingTop: 12 }}>
                  <Link href="/contact" role="menuitem" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-accent)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                    Demander un devis <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Carrières dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => openDropdown("carrieres")}
            onMouseLeave={closeDropdown}
          >
            <button
              aria-expanded={active === "carrieres"}
              aria-haspopup="true"
              style={{
                display: "flex", alignItems: "center", gap: 5, padding: "8px 12px",
                borderRadius: 7, background: active === "carrieres" ? "rgba(34,197,94,0.1)" : "transparent",
                border: "none", cursor: "pointer", color: active === "carrieres" ? "var(--color-career)" : "var(--color-ink-2)",
                fontSize: 13, fontWeight: 600, transition: "all 0.15s",
              }}>
              Carrières <ChevronDown size={13} aria-hidden="true" style={{ transition: "transform 0.2s", transform: active === "carrieres" ? "rotate(180deg)" : "none" }} />
            </button>

            {active === "carrieres" && (
              <div role="menu" onMouseEnter={() => openDropdown("carrieres")} onMouseLeave={closeDropdown}
                style={{
                  position: "absolute", top: "calc(100% + 8px)", left: 0,
                  background: "#141414", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14, padding: 20, minWidth: 280, boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                  zIndex: 100,
                }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Rejoindre Koncept</p>
                {NAV_CAREER.map(({ label, href }) => (
                  <Link key={href} href={href} role="menuitem" style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderRadius: 8, color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
                  >
                    {label}
                  </Link>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 12, paddingTop: 12 }}>
                  <Link href="/carrieres/offres" role="menuitem" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-career)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                    Voir les offres d&apos;emploi <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/a-propos" style={{ padding: "8px 12px", borderRadius: 7, color: pathname === "/a-propos" ? "var(--color-ink)" : "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, background: pathname === "/a-propos" ? "rgba(240,237,232,0.07)" : "transparent", transition: "all 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = pathname === "/a-propos" ? "var(--color-ink)" : "var(--color-ink-2)" }}
          >
            À propos
          </Link>

          {/* CTA — pushed right */}
          <div style={{ marginLeft: "auto" }}>
            <Link href={ctaHref} style={{
              background: isCareerPage ? "var(--color-career-dark)" : "var(--color-accent)",
              color: "#fff", padding: "9px 18px",
              borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 6,
              transition: "filter 0.15s, transform 0.1s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.12)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = "scale(0.97)" }}
              onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
            >
              {ctaLabel} <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button className="nav-mobile" onClick={() => setMenuOpen(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-ink)", padding: 8, display: "none", marginLeft: "auto" }}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav aria-label="Menu mobile" style={{ background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)", padding: "16px 24px 28px", display: "flex", flexDirection: "column" }}>
          {/* Solutions section */}
          <button
            onClick={() => setMobileOpen(mobileOpen === "solutions" ? null : "solutions")}
            aria-expanded={mobileOpen === "solutions"}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", background: "none", border: "none", cursor: "pointer", color: "#60a5fa", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid var(--color-border)" }}
          >
            Solutions <ChevronDown size={14} aria-hidden="true" style={{ transform: mobileOpen === "solutions" ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>
          {mobileOpen === "solutions" && NAV_CLIENT.map(({ label, href }) => (
            <Link key={href} href={href} style={{ padding: "12px 16px", color: "var(--color-ink-2)", textDecoration: "none", fontSize: 15, fontWeight: 500, borderBottom: "1px solid var(--color-border)" }}>
              {label}
            </Link>
          ))}

          {/* Carrières section */}
          <button
            onClick={() => setMobileOpen(mobileOpen === "carrieres" ? null : "carrieres")}
            aria-expanded={mobileOpen === "carrieres"}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", background: "none", border: "none", cursor: "pointer", color: "var(--color-career)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid var(--color-border)" }}
          >
            Carrières <ChevronDown size={14} aria-hidden="true" style={{ transform: mobileOpen === "carrieres" ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>
          {mobileOpen === "carrieres" && NAV_CAREER.map(({ label, href }) => (
            <Link key={href} href={href} style={{ padding: "12px 16px", color: "var(--color-ink-2)", textDecoration: "none", fontSize: 15, fontWeight: 500, borderBottom: "1px solid var(--color-border)" }}>
              {label}
            </Link>
          ))}

          <Link href="/a-propos" style={{ padding: "14px 0", color: "var(--color-ink)", textDecoration: "none", fontSize: 15, fontWeight: 500, borderBottom: "1px solid var(--color-border)" }}>
            À propos
          </Link>

          <Link href="/contact" style={{ marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
            Parlons de votre projet <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link href="/carrieres/offres" style={{ marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, background: "var(--color-career-bg)", color: "var(--color-career)", padding: "12px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
            Voir les offres d&apos;emploi <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </nav>
      )}

      <style>{`
        @media (max-width: 1023px) { .nav-desktop { display: none !important; } .nav-mobile { display: flex !important; } }
        @media (min-width: 1024px) { .nav-mobile { display: none !important; } .nav-desktop { display: flex !important; } }
      `}</style>
    </header>
  )
}
