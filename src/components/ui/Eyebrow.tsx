import type { ReactNode } from "react"

interface EyebrowProps {
  children: ReactNode
  /** `accent` = rouge Koncept (Solutions, À propos) ; `career` = couleur de l'univers Carrières. */
  tone?: "accent" | "career"
  /** Marge basse en px. */
  mb?: number
}

/** Sur-titre de section : petit libellé capitalisé au-dessus d'un titre. */
export default function Eyebrow({ children, tone = "accent", mb = 12 }: EyebrowProps) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: tone === "accent" ? "var(--color-accent-text)" : "var(--color-career)", marginBottom: mb }}>
      {children}
    </p>
  )
}
