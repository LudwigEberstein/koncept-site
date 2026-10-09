'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { IMAGES } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

export default function HomeAbout() {
  const fadeUp = useFadeUp()
  return (
    <section id="appropos" style={{ padding: "88px 0", background: "var(--color-bg-2)" }}>
      <Container className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <motion.div {...fadeUp()} className="about-img" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
          <Image src={IMAGES.team} alt="L'équipe Koncept à Toulouse" fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.div {...fadeUp(0.08)}>
          <Eyebrow>Qui sommes-nous</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Une vraie équipe,<br /><span style={{ color: "var(--color-accent)" }}>à Toulouse.</span>
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 28, maxWidth: "48ch" }}>
            Koncept est une ESN toulousaine fondée en 2014. Nous accompagnons des entreprises avec des consultants que nous connaissons et que nous suivons.
          </p>
          <Link href="/a-propos" style={{ color: "var(--color-ink)", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            En savoir plus sur nous <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
      <style>{`@media(max-width:767px){.about-grid{grid-template-columns:1fr !important;gap:40px !important}.about-img{order:-1}}`}</style>
    </section>
  )
}
