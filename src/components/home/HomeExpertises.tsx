'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { EXPERTISES } from "@/lib/content"

const ICONS: Record<string, string> = {
  code: "⌨️", layers: "🏗️", cloud: "☁️", git: "⚙️", database: "🗄️", shield: "🔒",
}

export default function HomeExpertises() {
  const reduce = useReducedMotion()
  return (
    <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Nos expertises</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Ce qu'on maîtrise.
            </h2>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link href="/expertises" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
            >
              Voir toutes les expertises <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="expertises-grid">
          {EXPERTISES.map((exp, i) => (
            <motion.div key={exp.slug}
              style={{ padding: "28px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column", gap: 14, cursor: "default", transition: "border-color 0.2s" }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,32,32,0.3)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
            >
              <div style={{ fontSize: 22 }}>{ICONS[exp.icon]}</div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 6 }}>{exp.short}</p>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{exp.title}</h3>
              </div>
              <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65, flex: 1 }}>{exp.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {exp.stack.slice(0, 4).map(s => (
                  <span key={s} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 5, padding: "3px 9px", fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)" }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:1023px){.expertises-grid{grid-template-columns:repeat(2,1fr) !important}}@media(max-width:639px){.expertises-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
