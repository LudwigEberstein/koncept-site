export type Shape = "circle" | "triangle" | "square"

/** Pictos « Squid Game » (rond, triangle, carré) en trait, à la couleur du côté (--side2). */
export default function SquidShape({ shape, size = 38 }: { shape: Shape; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false"
      style={{ display: "block", color: "var(--side2)", filter: "drop-shadow(0 0 8px rgba(var(--side-rgb), .55))" }}>
      <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round">
        {shape === "circle" && <circle cx="20" cy="20" r="14.5" />}
        {shape === "square" && <rect x="6" y="6" width="28" height="28" rx="1.5" />}
        {shape === "triangle" && <path d="M20 5.5 L35 33 H5 Z" />}
      </g>
    </svg>
  )
}
