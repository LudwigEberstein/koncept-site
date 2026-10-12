import type { ReactNode } from "react"
import Container from "./Container"
import Eyebrow from "./Eyebrow"

interface LegalPageProps {
  title: string
  updated: string
  children: ReactNode
}

/** Gabarit sobre des pages légales : titre, date de mise à jour, colonne de lecture. */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section style={{ background: "var(--color-bg)", padding: "140px 0 96px" }}>
      <Container maxWidth={820}>
        <Eyebrow>Informations légales</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 12 }}>
          {title}
        </h1>
        <p style={{ color: "var(--color-ink-2)", fontSize: 13, marginBottom: 48 }}>Dernière mise à jour : {updated}</p>
        <div className="legal-body">{children}</div>
      </Container>
      <style>{`
        .legal-body h2 { font-family: var(--font-display); font-size: 21px; font-weight: 700; margin: 44px 0 14px; }
        .legal-body p, .legal-body li { color: var(--color-ink-2); font-size: 15px; line-height: 1.75; }
        .legal-body p { margin: 0 0 14px; }
        .legal-body ul { margin: 0 0 14px; padding-left: 20px; }
        .legal-body li { margin-bottom: 6px; }
        .legal-body strong { color: var(--color-ink); font-weight: 600; }
        .legal-body a { color: var(--color-accent-text); text-decoration: underline; text-underline-offset: 3px; }
      `}</style>
    </section>
  )
}
