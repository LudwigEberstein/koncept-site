'use client'

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { SITE, NAV_LINKS, IMAGES } from "@/lib/content"

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 24px 32px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <img src={IMAGES.logo} alt="Koncept" style={{ height: 28, width: "auto", objectFit: "contain", marginBottom: 16 }} />
            <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>
              ESN toulousaine spécialisée en développement Java, .NET et DevOps. Partenaire de votre transformation digitale depuis 2014.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "4px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
              >{label}</Link>
            ))}
          </div>

          {/* Address */}
          <div>
            <p style={{ color: "var(--color-ink)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Adresse</p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>
              {SITE.address.street}<br />
              {SITE.address.building}<br />
              {SITE.address.city}
            </p>
            <a href={`mailto:${SITE.email}`} style={{ color: "var(--color-ink-2)", fontSize: 13, textDecoration: "none", display: "block", marginTop: 8, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
            >{SITE.email}</a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--color-ink-2)", fontSize: 12 }}>
            &copy; {new Date().getFullYear()} Koncept - ESN Toulousaine. Site par{" "}
            <a href="https://devantia.vercel.app" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Devantia</a>.
          </p>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--color-ink-2)", display: "flex", alignItems: "center", gap: 6, fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </footer>
  )
}
