import type { ReactNode } from "react"
import { SHOW_VALIDATION_MARKERS } from "@/lib/content"

interface ToValidateProps {
  children: ReactNode
  /** `pill` : petite pastille inline ; `note` : encadré sous une section. */
  variant?: "pill" | "note"
}

/** Marque un contenu non confirmé par le métier. Masqué partout via SHOW_VALIDATION_MARKERS. */
export default function ToValidate({ children, variant = "note" }: ToValidateProps) {
  if (!SHOW_VALIDATION_MARKERS) return null
  const base = { color: "#f5b942", border: "1px dashed rgba(245,185,66,0.55)", background: "rgba(245,185,66,0.07)" } as const
  if (variant === "pill") {
    return (
      <span style={{ ...base, display: "inline-block", borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {children}
      </span>
    )
  }
  return (
    <p style={{ ...base, borderRadius: 10, padding: "12px 16px", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
      <strong style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 11, marginRight: 8 }}>À valider</strong>
      {children}
    </p>
  )
}
