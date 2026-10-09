import type { CSSProperties, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  /** Largeur maximale du contenu en px. */
  maxWidth?: number
  className?: string
  style?: CSSProperties
}

/** Conteneur centré standard des sections (largeur max + gouttières horizontales). */
export default function Container({ children, maxWidth = 1320, className, style }: ContainerProps) {
  return (
    <div className={className} style={{ maxWidth, margin: "0 auto", padding: "0 24px", ...style }}>
      {children}
    </div>
  )
}
