'use client'

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

export type Collaborator = {
  name: string
  role: string
  seniority: string
  img: string
  parcours: string
  stack: string[]
  favProject: string
  lovesKoncept: string
  advice: string
}

// ─── Section accordion ───────────────────────────────────────────────────────

type SectionProps = {
  label: string
  accent: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function Section({ label, accent, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const sectionId = `section-${label.replace(/\W+/g, '-').toLowerCase()}-${Math.random().toString(36).slice(2, 6)}`

  return (
    <div style={{ borderTop: "1px solid var(--color-border)" }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={sectionId}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "13px 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.09em", textTransform: "uppercase", color: accent }}>
          {label}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: accent, flexShrink: 0, display: "flex" }}
          aria-hidden="true"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={sectionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingBottom: 14 }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── CollaboratorCard ─────────────────────────────────────────────────────────

type Props = {
  data: Collaborator
  accentColor?: string
  variant?: "career" | "client"
}

export function CollaboratorCard({ data, accentColor, variant = "career" }: Props) {
  const accent = accentColor ?? (variant === "career" ? "var(--color-career)" : "var(--color-accent)")
  const accentBg = variant === "career" ? "var(--color-career-bg)" : "var(--color-accent-2)"
  const accentBorder = variant === "career" ? "var(--color-career-border)" : "rgba(212,32,32,0.25)"

  return (
    <article
      style={{
        borderRadius: 18,
        border: `1px solid ${accentBorder}`,
        background: "var(--color-bg-2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Photo ── */}
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--color-bg-3)" }}>
        <Image
          src={data.img}
          alt={`Portrait de ${data.name}, ${data.role}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        {/* Seniority badge */}
        <div style={{
          position: "absolute",
          bottom: 12,
          left: 12,
          background: "rgba(13,13,13,0.82)",
          backdropFilter: "blur(8px)",
          border: `1px solid ${accentBorder}`,
          borderRadius: 8,
          padding: "5px 11px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }} aria-hidden="true" />
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-ink)", whiteSpace: "nowrap" }}>
            {data.seniority}
          </span>
        </div>
      </div>

      {/* ── Identity ── */}
      <div style={{ padding: "20px 22px 0" }}>
        <p style={{
          fontFamily: "var(--font-display, Outfit, sans-serif)",
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: 4,
        }}>
          {data.name}
        </p>
        <p style={{ fontSize: 13, color: accent, fontWeight: 600 }}>{data.role}</p>
      </div>

      {/* ── Accordion sections ── */}
      <div style={{ padding: "6px 22px 18px", flex: 1, display: "flex", flexDirection: "column" }}>

        <Section label="Parcours" accent={accent} defaultOpen>
          <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.7 }}>{data.parcours}</p>
        </Section>

        <Section label="Stack technique" accent={accent}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 2 }}>
            {data.stack.map(s => (
              <span
                key={s}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: accent,
                  background: accentBg,
                  border: `1px solid ${accentBorder}`,
                  borderRadius: 6,
                  padding: "3px 9px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section label="Projet préféré" accent={accent}>
          <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.7, fontStyle: "italic" }}>
            &ldquo;{data.favProject}&rdquo;
          </p>
        </Section>

        <Section label="Ce qu'il/elle aime chez Koncept" accent={accent}>
          <div style={{
            borderLeft: `2px solid ${accent}`,
            paddingLeft: 12,
            marginTop: 2,
          }}>
            <p style={{ fontSize: 13, color: "var(--color-ink)", lineHeight: 1.75 }}>{data.lovesKoncept}</p>
          </div>
        </Section>

        <Section label="Conseil aux candidats" accent={accent}>
          <div style={{
            background: accentBg,
            border: `1px solid ${accentBorder}`,
            borderRadius: 10,
            padding: "12px 14px",
          }}>
            <p style={{ fontSize: 12, color: "var(--color-ink-2)", lineHeight: 1.7 }}>{data.advice}</p>
          </div>
        </Section>

      </div>
    </article>
  )
}
