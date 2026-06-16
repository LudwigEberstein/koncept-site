'use client'

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

interface PageHeroProps {
  label?: string
  title: string
  titleAccent?: string
  subtitle?: string
  img?: string
  imgAlt?: string
}

export default function PageHero({ label, title, titleAccent, subtitle, img, imgAlt }: PageHeroProps) {
  const reduce = useReducedMotion()

  return (
    <section style={{ padding: "80px 0 72px", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: 0, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,32,32,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: img ? "1fr 1fr" : "1fr", gap: 48, alignItems: "center" }} className="page-hero-grid">
        <div>
          {label && (
            <motion.p
              style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >{label}</motion.p>
          )}
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0 }}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
            {titleAccent && (
              <><br /><span style={{ color: "var(--color-accent)" }}>{titleAccent}</span></>
            )}
          </motion.h1>
          {subtitle && (
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, maxWidth: "52ch", marginTop: 20 }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >{subtitle}</motion.p>
          )}
        </div>
        {img && (
          <motion.div
            style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", position: "relative" }}
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="page-hero-img"
          >
            <Image src={img} alt={imgAlt ?? ""} fill sizes="(max-width: 767px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(212,32,32,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          </motion.div>
        )}
      </div>

      <style>{`
        @media (max-width: 767px) { .page-hero-grid { grid-template-columns: 1fr !important; } .page-hero-img { display: none; } }
      `}</style>
    </section>
  )
}
