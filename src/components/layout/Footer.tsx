'use client'

import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { SITE, NAV_CLIENT, NAV_CAREER, IMAGES } from "@/lib/content"
import { YearClient } from "./YearClient"

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 24px 32px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <Image src={IMAGES.logo} alt="Koncept IS" width={120} height={28} style={{ height: 28, width: "auto", objectFit: "contain", marginBottom: 16 }} />
            <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
              ESN toulousaine spécialisée en développement Java, .NET et DevOps. Partenaire de votre transformation digitale depuis 2014.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>
              {SITE.address.street}<br />
              {SITE.address.building}<br />
              {SITE.address.city}
            </p>
            <a href={`mailto:${SITE.email}`} style={{ color: "var(--color-ink-2)", fontSize: 13, textDecoration: "none", display: "block", marginTop: 8, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
            >{SITE.email}</a>
          </div>

          {/* Solutions */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 16 }}>Solutions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_CLIENT.map(({ label, href }) => (
                <Link key={href} href={href} style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "5px 0", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
                >{label}</Link>
              ))}
              <Link href="/a-propos" style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "5px 0", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
              >À propos</Link>
              <Link href="/contact" style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "5px 0", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
              >Contact</Link>
            </div>
          </div>

          {/* Carrières */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 16 }}>Carrières</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_CAREER.map(({ label, href }) => (
                <Link key={href} href={href} style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "5px 0", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
                >{label}</Link>
              ))}
              <Link href="/carrieres/candidature" style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "5px 0", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
              >Candidature spontanée</Link>
            </div>
          </div>

          {/* CTA block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "13px 18px", borderRadius: 9, background: "var(--color-accent)", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", textAlign: "center", transition: "filter 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.1)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
            >
              Parlons de votre projet
            </Link>
            <Link href="/carrieres/offres" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 18px", borderRadius: 9, background: "var(--color-career-bg)", color: "var(--color-career)", fontSize: 13, fontWeight: 700, textDecoration: "none", textAlign: "center", border: "1px solid var(--color-career-border)", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--color-career-bg-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--color-career-bg)")}
            >
              Voir les offres d&apos;emploi
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--color-ink-2)", fontSize: 12 }}>
            &copy; <YearClient /> Koncept IS — ESN Toulousaine. Site par{" "}
            <a href="https://devantia.vercel.app" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Devantia</a>.
          </p>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"
            aria-label="Koncept IS sur LinkedIn"
            style={{ color: "var(--color-ink-2)", display: "flex", alignItems: "center", gap: 6, fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
          >
            <Linkedin size={14} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 639px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
