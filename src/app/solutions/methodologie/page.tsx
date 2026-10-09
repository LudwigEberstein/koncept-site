'use client'

import { motion } from "motion/react"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

const STEPS = [
  { title: "Comprendre votre besoin", desc: "Échanger sur votre contexte, vos objectifs et vos contraintes pour identifier la réponse adaptée." },
  { title: "Proposer la bonne approche", desc: "Mobiliser les compétences nécessaires, en assistance technique ou dans le cadre d'un projet confié." },
  { title: "Démarrer dans de bonnes conditions", desc: "Organiser le lancement de la mission ou du projet, en clarifiant les rôles et les attentes de chacun." },
  { title: "Assurer un suivi régulier", desc: "Nous restons en contact avec vos équipes et nos consultants tout au long de la mission. Ce suivi régulier nous permet d'identifier rapidement les besoins et de maintenir une relation de proximité." },
  { title: "Évoluer avec vos besoins", desc: "Ajuster notre accompagnement en fonction des évolutions du contexte, des priorités et des projets." },
] as const

const MODES = [
  { title: "Assistance technique", desc: "Nos consultants intègrent vos équipes pour apporter les compétences techniques ou fonctionnelles dont vous avez besoin, sur la durée adaptée à votre projet." },
  { title: "Projets au forfait", desc: "Nous prenons en charge la réalisation de projets ou de périmètres définis ensemble, avec des objectifs, des livrables et des modalités de suivi convenus en amont." },
] as const

export default function Methodologie() {
  const fadeUp = useFadeUp()

  return (
    <>
      <HeroSection side="pro" next="bg2" paddingTop={140} paddingBottom={72}>
        <Container>
          <motion.div style={{ maxWidth: "64ch" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow mb={20}>Méthodologie</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
              Une relation simple,<br /><span style={{ color: "var(--color-accent)" }}>un suivi de près.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch" }}>
              Une approche pragmatique, des échanges directs et un accompagnement adapté à vos projets.
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <Container maxWidth={900}>
          {STEPS.map((step, i) => (
            <motion.div key={step.title} {...fadeUp()} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 800, color: "#fff" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < STEPS.length - 1 && <div style={{ width: 2, flexGrow: 1, background: "linear-gradient(to bottom, rgba(212,32,32,0.5), rgba(212,32,32,0.1))", marginTop: 8, minHeight: 28 }} />}
              </div>
              <div style={{ paddingBottom: i < STEPS.length - 1 ? 36 : 0, paddingTop: 6 }}>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 6 }}>{step.title}</h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65, maxWidth: "58ch" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      <section style={{ padding: "72px 0 88px", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()} style={{ marginBottom: 32 }}>
            <Eyebrow>Modes d&apos;intervention</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}>Comment nous intervenons.</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 16 }}>
            {MODES.map((m, i) => (
              <motion.div key={m.title} className="glass-card" {...fadeUp(i * 0.08)}
                style={{ padding: "30px 28px", borderRadius: 16, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 12 }}
              >
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700 }}>{m.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand side="pro" prev="bg2" title="Échangeons sur votre besoin."
        text="Un premier échange suffit pour voir si nous pouvons vous aider."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
        secondary={{ label: "Voir nos expertises", href: "/solutions/expertises" }}
      />
    </>
  )
}
