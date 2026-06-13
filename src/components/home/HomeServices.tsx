'use client'

import Link from "next/link"
import { Code2, Server, ShieldCheck } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import RevealSection from "@/components/ui/RevealSection"

const SERVICES = [
  {
    id: "dev",
    title: "Développement sur mesure",
    desc: "Applications Java, .NET et Angular conçues autour de vos besoins métier, livrées avec méthode et rigueur.",
    img: "https://picsum.photos/seed/koncept-toulouse-dev-software-code/900/700",
    Icon: Code2,
    wide: true,
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    desc: "Spring Boot, Jenkins et CI/CD pour accélérer vos cycles de livraison et fiabiliser vos déploiements.",
    img: "https://picsum.photos/seed/koncept-devops-infra-jenkins/700/600",
    Icon: Server,
    wide: false,
  },
  {
    id: "conseil",
    title: "Conseil & Architecture IT",
    desc: "Cadrage, conception et pilotage technique de vos projets numériques les plus exigeants.",
    img: "https://picsum.photos/seed/koncept-conseil-architecture-it/700/600",
    Icon: ShieldCheck,
    wide: false,
  },
]

export default function HomeServices() {
  const reduce = useReducedMotion()
  return (
    <section id="services" style={{ padding: "100px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
        <RevealSection>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Ce qu'on fait,<br /><span style={{ color: "var(--color-accent)" }}>vraiment bien.</span>
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "50ch", lineHeight: 1.6, marginBottom: 52 }}>
            Trois domaines d'expertise, une seule promesse : des équipes qui s'impliquent autant que vous dans vos projets.
          </p>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto", gap: 16 }} className="services-bento">
          {SERVICES.map((svc, i) => {
            const Icon = svc.Icon
            return (
              <motion.div key={svc.id}
                style={{ gridColumn: svc.wide ? "span 2" : "span 1", borderRadius: 16, overflow: "hidden", position: "relative", minHeight: svc.wide ? 420 : 340, background: "var(--color-bg-3)", border: "1px solid var(--color-border)", cursor: "default" }}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.015 }}
              >
                <img src={svc.img} alt={svc.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.97) 40%, rgba(13,13,13,0.4) 100%)" }} />
                <div style={{ position: "relative", zIndex: 1, padding: 32, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 10, background: "rgba(212,32,32,0.18)", border: "1px solid rgba(212,32,32,0.3)", marginBottom: 20 }}>
                    <Icon size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: svc.wide ? 28 : 22, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.02em" }}>{svc.title}</h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.6, maxWidth: "44ch" }}>{svc.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/notre-offre" style={{ color: "var(--color-ink-2)", fontSize: 14, fontWeight: 500, textDecoration: "none", borderBottom: "1px solid var(--color-border-2)", paddingBottom: 2, transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--color-ink)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-2)" }}
          >
            Voir notre offre complète
          </Link>
        </div>
      </div>
      <style>{`@media(max-width:767px){.services-bento{grid-template-columns:1fr !important}.services-bento>div{grid-column:span 1 !important;min-height:280px !important}}`}</style>
    </section>
  )
}
