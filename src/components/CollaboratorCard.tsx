'use client'

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, ChevronDown } from "lucide-react"
import type { Collaborator } from "@/lib/content"

// ─── Section accordion ───────────────────────────────────────────────────────

type SectionProps = {
  label: string
  accent: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function Section({ label, accent, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const sectionId = useId()

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

/** Pastille posée en bas à gauche du visuel. */
function Badge({ children, accent, border }: { children: React.ReactNode; accent: string; border: string }) {
  return (
    <div style={{
      position: "absolute",
      bottom: 12,
      left: 12,
      background: "rgba(13,13,13,0.82)",
      backdropFilter: "blur(8px)",
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: "5px 11px",
      display: "flex",
      alignItems: "center",
      gap: 6,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }} aria-hidden="true" />
      <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-ink)", whiteSpace: "nowrap" }}>{children}</span>
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
  const accentBorder = variant === "career" ? "var(--color-career-border)" : "rgba(var(--color-accent-rgb), 0.25)"

  return (
    <article
      style={{
        borderRadius: 18,
        border: `1px solid ${accentBorder}`,
        background: "var(--color-bg-2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* ── Visuel : photo (même cadre 4:3 pour toutes les cartes), ou prénom tant qu'il n'y a pas de photo ── */}
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--color-bg-3)" }}>
        {data.img ? (
          data.imgFit ? (
            <>
              {/* Dézoom : la photo n'occupe qu'une part de la largeur, les bords sont prolongés par la même photo floutée */}
              <Image src={data.img} alt="" aria-hidden="true" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: data.imgPos ?? "50% 20%", filter: "blur(18px)", transform: "scale(1.15)" }} />
              <div style={{ position: "absolute", top: 0, bottom: 0, left: `${(1 - data.imgFit) * 50}%`, width: `${data.imgFit * 100}%`, WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
                <Image src={data.img} alt={`Portrait de ${data.name}, ${data.role}`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: data.imgPos ?? "50% 20%" }} />
              </div>
            </>
          ) : (
            <Image
              src={data.img}
              alt={`Portrait de ${data.name}, ${data.role}`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: data.imgPos ?? "50% 20%" }}
            />
          )
        ) : (
          <div className="collab-monogram" aria-hidden="true"><span>{data.name}</span></div>
        )}
        <Badge accent={accent} border={accentBorder}>{data.badge}</Badge>
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

        <Section label="Outils & compétences" accent={accent}>
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
            &laquo;&nbsp;{data.favProject}&nbsp;&raquo;
          </p>
        </Section>

        <Section label={data.elle ? "Ce qu'elle aime chez Koncept" : "Ce qu'il aime chez Koncept"} accent={accent}>
          <div style={{
            borderLeft: `2px solid ${accent}`,
            paddingLeft: 12,
            marginTop: 2,
          }}>
            <p style={{ fontSize: 13, color: "var(--color-ink)", lineHeight: 1.75 }}>{data.lovesKoncept}</p>
          </div>
        </Section>

        <Section label="Conseils aux candidats" accent={accent}>
          <div style={{
            background: accentBg,
            border: `1px solid ${accentBorder}`,
            borderRadius: 10,
            padding: "12px 14px",
          }}>
            <p style={{ fontSize: 12, color: "var(--color-ink-2)", lineHeight: 1.7 }}>&laquo;&nbsp;{data.advice}&nbsp;&raquo;</p>
          </div>
        </Section>

      </div>

    </article>
  )
}

// ─── Carte « Toi » : la place libre de la grille, adressée au visiteur ─────────

export function YouCard() {
  return (
    <article className="you-card">
      <div className="you-visual" aria-hidden="true">
        <span className="you-player">Player 2</span>
        <span className="you-avatar">?</span>
        <span className="you-start">Appuie sur Start</span>
        <Badge accent="var(--color-career)" border="var(--color-career-border)">Place disponible</Badge>
      </div>

      <div style={{ padding: "20px 22px 0" }}>
        <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 4 }}>
          Toi ?
        </p>
        <p style={{ fontSize: 13, color: "var(--color-career)", fontWeight: 600 }}>Ton futur poste chez Koncept</p>
      </div>

      <div style={{ padding: "8px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <dl className="you-list">
          <div><dt>Parcours</dt><dd>Le tien. La suite, on l&apos;écrit ensemble dès l&apos;entretien.</dd></div>
          <div><dt>Outils & compétences</dt><dd>Ceux que tu maîtrises, et ceux que tu as envie d&apos;apprendre.</dd></div>
          <div><dt>Projet préféré</dt><dd>Pas encore écrit. C&apos;est peut-être le prochain.</dd></div>
        </dl>
        <div style={{ marginTop: "auto", paddingTop: 18, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
          <Link href="/carrieres/offres" className="you-cta">Voir les offres <ArrowRight size={14} aria-hidden="true" /></Link>
          <Link href="/carrieres/candidature" className="you-link">Candidature spontanée</Link>
        </div>
      </div>

      <style>{`
        .you-card { height: 100%; display: flex; flex-direction: column; border-radius: 18px; overflow: hidden; border: 1.5px dashed var(--color-career-border-hover); background: var(--color-bg-2); transition: border-color .2s; }
        .you-card:hover { border-color: var(--color-career); }
        .you-visual { position: relative; aspect-ratio: 4/3; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
          background: radial-gradient(rgba(255,255,255,.08) 1.2px, transparent 1.5px) 0 0/16px 16px, radial-gradient(100% 80% at 50% 45%, rgba(212,32,32,.22), transparent 70%), var(--color-bg); }
        .you-player { font: 700 11px/1 ui-monospace, Consolas, monospace; letter-spacing: .3em; text-transform: uppercase; color: var(--color-ink-2); }
        .you-avatar { width: 84px; height: 84px; border-radius: 50%; display: grid; place-items: center; border: 2px dashed var(--color-career); color: var(--color-career);
          font: 800 40px/1 var(--font-display, Outfit, sans-serif); transition: transform .3s; }
        .you-card:hover .you-avatar { transform: scale(1.06) rotate(-4deg); }
        .you-start { font: 700 12px/1 ui-monospace, Consolas, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--color-career); animation: you-blink 1.2s steps(1) infinite; }
        @keyframes you-blink { 50% { opacity: 0 } }
        .you-list { margin: 0; }
        .you-list > div { border-top: 1px solid var(--color-border); padding: 12px 0; }
        .you-list dt { font-size: 11px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: var(--color-career); margin-bottom: 6px; }
        .you-list dd { margin: 0; font-size: 13px; line-height: 1.65; color: var(--color-ink-2); }
        .you-cta { display: inline-flex; align-items: center; gap: 7px; padding: 11px 18px; border-radius: 10px; background: var(--color-career-dark); color: #fff; font-size: 13px; font-weight: 700; text-decoration: none; transition: filter .15s; }
        .you-cta:hover { filter: brightness(1.12); }
        .you-link { display: inline-block; padding: 6px 0; color: var(--color-career); font-size: 13px; font-weight: 700; text-decoration: none; }
        .you-link:hover { text-decoration: underline; }
        @media (prefers-reduced-motion: reduce) { .you-start { animation: none; } .you-avatar { transition: none; } }
      `}</style>
    </article>
  )
}
