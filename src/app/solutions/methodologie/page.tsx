'use client'

import { useEffect, useRef, useState } from "react"
import { Package, Users } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
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
  { title: "Assistance technique", icon: Users, desc: "Nos consultants intègrent vos équipes pour apporter les compétences techniques ou fonctionnelles dont vous avez besoin, sur la durée adaptée à votre projet." },
  { title: "Projets au forfait", icon: Package, desc: "Nous prenons en charge la réalisation de projets ou de périmètres définis ensemble, avec des objectifs, des livrables et des modalités de suivi convenus en amont." },
] as const

const pad = (n: number) => String(n).padStart(2, "0")

export default function Methodologie() {
  const fadeUp = useFadeUp()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLElement | null)[]>([])

  // L'étape qui croise le milieu de l'écran devient l'étape active
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    stepRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroSection side="pro" next="bg" paddingTop={140} paddingBottom={72}>
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

      <section style={{ padding: "72px 0 40px", background: "var(--color-bg)" }}>
        <Container>
          <div className="mth-layout">
            <div className="mth-counter" aria-hidden="true">
              <div className="mth-num-wrap">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span key={active} className="mth-num"
                    initial={reduce ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -28 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {pad(active + 1)}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="mth-of">sur {pad(STEPS.length)}</div>
              <div className="mth-bars">
                {STEPS.map((s, i) => <span key={s.title} className={i <= active ? "on" : ""} />)}
              </div>
            </div>

            <ol className="mth-steps">
              {STEPS.map((step, i) => (
                <li key={step.title} ref={el => { stepRefs.current[i] = el }} data-index={i}
                  className={`mth-step${i === active ? " is-active" : ""}`}
                >
                  <span className="mth-step-tag">Étape {pad(i + 1)}</span>
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section style={{ padding: "56px 0 88px", background: "var(--color-bg)" }}>
        <Container>
          <motion.div {...fadeUp()} style={{ marginBottom: 32 }}>
            <Eyebrow>Modes d&apos;intervention</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}>Comment nous intervenons.</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 16 }}>
            {MODES.map((m, i) => (
              <motion.div key={m.title} className="glass-card" {...fadeUp(i * 0.08)}
                style={{ padding: "30px 28px", borderRadius: 16, border: "1px solid var(--color-border)", borderTop: "2px solid var(--color-accent)", display: "flex", flexDirection: "column", gap: 12 }}
              >
                <m.icon size={24} aria-hidden="true" style={{ color: "var(--color-accent-text)" }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700 }}>{m.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand side="pro" prev="bg" title="Échangeons sur votre besoin."
        text="Un premier échange suffit pour voir si nous pouvons vous aider."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
        secondary={{ label: "Voir nos expertises", href: "/solutions/expertises" }}
      />

      <style>{`
        .mth-layout { display: grid; grid-template-columns: 240px 1fr; gap: 56px; align-items: start; }
        .mth-counter { position: sticky; top: 130px; padding-right: 28px; border-right: 1px solid var(--color-border); }
        .mth-num-wrap { position: relative; height: 150px; overflow: hidden; }
        .mth-num { display: block; font-family: var(--font-display, Outfit, sans-serif); font-size: 150px; font-weight: 800; line-height: 1; letter-spacing: -0.05em; color: var(--color-bg); -webkit-text-stroke: 4px var(--color-accent); paint-order: stroke fill; }
        .mth-of { margin-top: 12px; font-size: 13px; font-weight: 600; color: var(--color-ink-2); }
        .mth-bars { display: flex; gap: 5px; margin-top: 14px; }
        .mth-bars span { flex: 1; height: 3px; border-radius: 2px; background: var(--color-border-2); transition: background .35s; }
        .mth-bars span.on { background: var(--color-accent); }
        .mth-steps { list-style: none; margin: 0; padding: 0; }
        .mth-step { padding: 22px 28px; margin-bottom: 10px; border-radius: 16px; border: 1px solid transparent; opacity: .38; transition: opacity .4s, border-color .4s, background .4s; }
        .mth-step.is-active { opacity: 1; border-color: var(--color-accent); background: rgba(var(--color-accent-rgb), .06); }
        .mth-step-tag { font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--color-accent-text); margin-bottom: 8px; }
        .mth-step h2 { font-family: var(--font-display, Outfit, sans-serif); font-size: clamp(24px, 2.6vw, 34px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.12; margin: 0 0 8px; }
        .mth-step p { color: var(--color-ink-2); font-size: 15px; line-height: 1.65; max-width: 52ch; margin: 0; }
        @media (max-width: 767px) {
          .mth-layout { grid-template-columns: 1fr; gap: 0; }
          .mth-counter { top: 68px; z-index: 5; display: flex; align-items: center; gap: 14px; padding: 10px 0; border-right: 0; border-bottom: 1px solid var(--color-border); background: var(--color-bg); }
          .mth-num-wrap { height: 52px; width: 76px; flex: none; }
          .mth-num { font-size: 52px; -webkit-text-stroke-width: 3px; }
          .mth-of { margin: 0; }
          .mth-bars { margin: 0 0 0 auto; width: 90px; }
          .mth-step { padding: 18px 16px; opacity: .5; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mth-step, .mth-bars span { transition: none; }
        }
      `}</style>
    </>
  )
}
