import { SECTORS } from "@/lib/content"

// Doubled for seamless loop
const ITEMS = [...SECTORS, ...SECTORS]

export default function HomeSectorMarquee() {
  return (
    <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "26px 0", overflow: "hidden", background: "var(--color-bg-2)" }}>
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap", gap: 0 }}>
        {ITEMS.map((sector, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28, paddingRight: 56, fontSize: 13, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-ink-2)" }}>
            <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
            {sector.name}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .marquee-track { animation: marquee 22s linear infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>
    </div>
  )
}
