import type { ReactNode } from "react"

interface EyebrowProps {
  children: ReactNode
  /** `accent` = rouge Koncept (Solutions, À propos) ; `career` = couleur de l'univers Carrières. */
  tone?: "accent" | "career"
  /** Marge basse en px. */
  mb?: number
  /** `sm` = petit libellé dans une carte (11 px) ; par défaut, sur-titre de section (18 px). */
  size?: "md" | "sm"
}

/** Sur-titre de section : libellé capitalisé au-dessus d'un titre. */
export default function Eyebrow({ children, tone = "accent", mb = 12, size = "md" }: EyebrowProps) {
  return (
    <p style={{ fontSize: size === "sm" ? 11 : 18, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: tone === "accent" ? "var(--color-accent-text)" : "var(--color-career)", marginBottom: mb }}>
      {children}
    </p>
  )
}
