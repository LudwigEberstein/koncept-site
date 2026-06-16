'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

export default function HomeBifurcation() {
  const reduce = useReducedMotion()
  return (
    <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 14 }}>Par où commencer ?</p>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Deux façons de travailler avec nous.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="bifurc-grid">
          {/* CLIENT */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderRadius: 20, border: "1px solid rgba(59,130,246,0.25)", background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(13,13,13,0) 60%)", padding: "48px 40px", display: "flex", flexDirection: "column" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, fontSize: 20 }}>🎯</div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 12 }}>Vous êtes client</p>
            <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.15 }}>
              Un projet IT à concrétiser ?
            </h3>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7, marginBottom: 32, flex: 1 }}>
              Développement applicatif, architecture, cloud, DevOps. Nos équipes s'intègrent à vos projets avec méthode et engagement.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/expertises" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderRadius: 10, background: "#3b82f6", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 700, transition: "filter 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.12)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Découvrir nos expertises <ArrowRight size={15} />
              </Link>
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderRadius: 10, background: "rgba(59,130,246,0.1)", color: "#60a5fa", textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.18)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)" }}
              >
                Demander un devis <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* CANDIDAT */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderRadius: 20, border: "1px solid var(--color-career-border)", background: "linear-gradient(135deg, var(--color-career-bg) 0%, rgba(13,13,13,0) 60%)", padding: "48px 40px", display: "flex", flexDirection: "column" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--color-career-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, fontSize: 20 }}>🚀</div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Vous êtes développeur</p>
            <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.15 }}>
              Envie de devenir Koncepteur ?
            </h3>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7, marginBottom: 32, flex: 1 }}>
              Des missions ambitieuses, un suivi de carrière sérieux, une équipe soudée. Si vous êtes passionné, on a quelque chose à construire ensemble.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/carrieres/offres" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderRadius: 10, background: "var(--color-career-dark)", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 700, transition: "filter 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.12)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Voir les offres d'emploi <ArrowRight size={15} />
              </Link>
              <Link href="/carrieres" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderRadius: 10, background: "var(--color-career-bg)", color: "var(--color-career)", textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg-hover)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
              >
                Découvrir la vie chez Koncept <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:767px){.bifurc-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
