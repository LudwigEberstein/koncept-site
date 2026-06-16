'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const STEPS = [
  {
    num: "01",
    phase: "Découverte",
    tagline: "Comprendre avant de s'engager.",
    color: "#6366f1",
    duration: "1–2 semaines",
    objectifs: [
      "Identifier les besoins métier réels, pas seulement fonctionnels",
      "Cartographier l'existant et les contraintes SI",
      "Évaluer les risques techniques et organisationnels",
      "Aligner toutes les parties prenantes sur la vision cible",
    ],
    livrables: [
      "Rapport de découverte",
      "Cartographie SI existant",
      "Backlog initial priorisé",
      "Matrice des risques",
    ],
    pratiques: [
      "Interviews structurées des sponsors et utilisateurs clés",
      "Ateliers de cadrage avec DSI et équipes métier",
      "Analyse des logs et métriques système existants",
      "Benchmark des solutions du marché",
    ],
    client: [
      "Disponibilité des référents métier (2–3h/semaine)",
      "Accès aux documentations et systèmes existants",
      "Validation du rapport sous 5 jours ouvrés",
    ],
  },
  {
    num: "02",
    phase: "Cadrage",
    tagline: "Poser les fondations avant de construire.",
    color: "#3b82f6",
    duration: "1–3 semaines",
    objectifs: [
      "Définir le périmètre fonctionnel et technique avec précision",
      "Arrêter les choix technologiques et architecturaux",
      "Établir le plan de projet, les jalons et le budget",
      "Sécuriser le go/no-go avant tout investissement majeur",
    ],
    livrables: [
      "Cahier des charges fonctionnel",
      "Architecture technique cible",
      "Plan de projet (jalons + sprints)",
      "Budget détaillé + facteurs de risque",
    ],
    pratiques: [
      "Architecture Decision Records (ADR) pour chaque choix tech",
      "Chiffrage par points de complexité (story points)",
      "Revue sécurité préliminaire (OWASP, RGPD)",
      "Validation formelle des hypothèses techniques",
    ],
    client: [
      "Arbitrage sur les choix de périmètre fonctionnel",
      "Validation de l'architecture cible",
      "Approbation du plan de projet et du budget",
    ],
  },
  {
    num: "03",
    phase: "Conception",
    tagline: "Design pensé pour l'ingénierie.",
    color: "#8b5cf6",
    duration: "2–4 semaines",
    objectifs: [
      "Concevoir l'architecture logicielle détaillée",
      "Prototyper les parcours et cas d'usage critiques",
      "Définir les interfaces API et les contrats de données",
      "Anticiper les problèmes d'intégration et de scalabilité",
    ],
    livrables: [
      "Spécifications techniques détaillées",
      "Maquettes UX validées",
      "Contrats d'API (OpenAPI / Swagger)",
      "Plan de tests et stratégie QA",
    ],
    pratiques: [
      "Architecture hexagonale / Clean Architecture",
      "Domain-Driven Design sur les domaines complexes",
      "Design System partagé front/back",
      "Revue obligatoire par un architecte senior Koncept",
    ],
    client: [
      "Validation des maquettes avec les utilisateurs finaux",
      "Revue des contrats API avec l'équipe technique interne",
      "Approbation du plan de tests avant développement",
    ],
  },
  {
    num: "04",
    phase: "Développement",
    tagline: "Du code propre, pas du code vite.",
    color: "#D42020",
    duration: "Sprints de 2 semaines",
    objectifs: [
      "Implémenter les fonctionnalités dans l'ordre de valeur métier",
      "Maintenir une qualité de code irréprochable à chaque sprint",
      "Intégrer en continu pour détecter les régressions tôt",
      "Livrer une démo fonctionnelle à chaque fin de sprint",
    ],
    livrables: [
      "Incréments fonctionnels démontrables",
      "Code source versionné et documenté",
      "Rapport de couverture de tests",
      "Changelog et release notes par sprint",
    ],
    pratiques: [
      "TDD sur les domaines critiques",
      "Code review obligatoire — minimum 2 relecteurs",
      "SonarQube : 0 critical/blocker toléré en merge",
      "Pair programming sur les sujets à risque",
    ],
    client: [
      "Participation aux démonstrations sprint (1h tous les 2 sem.)",
      "Feedback priorisé sous 48h après chaque démo",
      "Disponibilité du PO pour les arbitrages fonctionnels",
    ],
  },
  {
    num: "05",
    phase: "Tests",
    tagline: "La qualité n'est pas négociable.",
    color: "#f59e0b",
    duration: "En continu + phase dédiée 2–3 semaines",
    objectifs: [
      "Valider la conformité aux spécifications fonctionnelles",
      "Garantir la robustesse sous charge et en conditions adverses",
      "Identifier les vulnérabilités de sécurité avant production",
      "Certifier la recette client avant mise en production",
    ],
    livrables: [
      "Rapport de tests complet (unitaire, intégration, E2E)",
      "Rapport de tests de charge (JMeter / k6)",
      "Audit sécurité SAST/DAST",
      "Procès-verbal de recette signé",
    ],
    pratiques: [
      "Tests pyramide : 70% unitaire / 20% intégration / 10% E2E",
      "Régression automatisée sur chaque pull request",
      "SAST SonarQube + DAST OWASP ZAP",
      "Tests de charge simulant 2× le pic de trafic attendu",
    ],
    client: [
      "Participation aux tests d'acceptation utilisateur (UAT)",
      "Validation des scénarios de recette avec les équipes métier",
      "Signature du PV de recette avant déploiement production",
    ],
  },
  {
    num: "06",
    phase: "Mise en production",
    tagline: "Un déploiement sans surprise.",
    color: "#16a34a",
    duration: "1–2 semaines",
    objectifs: [
      "Déployer en production de manière contrôlée et réversible",
      "Mettre en place l'observabilité complète et les alertes",
      "Minimiser le temps d'indisponibilité",
      "Valider le bon fonctionnement en conditions réelles",
    ],
    livrables: [
      "Application déployée en production",
      "Pipeline CI/CD documenté",
      "Dashboards de monitoring (Grafana / Datadog)",
      "Runbook opérationnel + procédure de rollback",
    ],
    pratiques: [
      "Blue/green deployment ou canary release",
      "Feature flags pour activation progressive",
      "Smoke tests automatisés post-déploiement",
      "Astreinte technique les 72h suivant la mise en production",
    ],
    client: [
      "Validation du plan de déploiement et des créneaux",
      "Communication interne aux utilisateurs finaux",
      "Disponibilité IT pour les 48h post-déploiement",
    ],
  },
  {
    num: "07",
    phase: "Accompagnement",
    tagline: "On ne vous lâche pas après la livraison.",
    color: "#06b6d4",
    duration: "Continu",
    objectifs: [
      "Assurer la stabilité et les performances en production",
      "Monter en compétences les équipes client",
      "Faire évoluer le produit en fonction du retour terrain",
      "Anticiper les incidents avant qu'ils impactent les utilisateurs",
    ],
    livrables: [
      "SLA défini et suivi (disponibilité, temps de réponse)",
      "Sessions de formation documentées",
      "Rapports mensuels de performance",
      "Roadmap d'évolution priorisée",
    ],
    pratiques: [
      "Support N1/N2/N3 structuré avec escalade définie",
      "Post-mortems systématiques sur les incidents",
      "Revues de performance trimestrielles",
      "Veille technologique proactive sur la stack",
    ],
    client: [
      "Identification d'un référent technique côté client",
      "Remontée structurée des incidents et évolutions",
      "Participation aux revues de performance trimestrielles",
    ],
  },
]

const COMMITMENTS = [
  { label: "Interlocuteur unique", desc: "Un chef de projet Koncept, du kickoff à la recette. Pas de rotation pendant le projet." },
  { label: "Transparence totale", desc: "Accès temps réel à l'avancement, aux métriques qualité et aux difficultés — sans filtre." },
  { label: "Engagement sur les résultats", desc: "On s'engage sur des livrables et des délais, pas seulement sur des jours/hommes." },
  { label: "Zéro dette technique cachée", desc: "Toute dette technique est documentée, chiffrée et validée avec vous avant d'être acceptée." },
  { label: "Sécurité by design", desc: "Certification ISO 27001:2013. La sécurité est intégrée dès la conception, pas ajoutée en fin de projet." },
]

const STATS = [
  { value: "7", label: "étapes formalisées" },
  { value: "98%", label: "projets livrés dans les délais" },
  { value: "2×", label: "charge testée avant production" },
  { value: "72h", label: "d'astreinte post-déploiement" },
]

export default function Methodologie() {
  const reduce = useReducedMotion()

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p
            style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            Notre méthodologie
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 28 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Sept étapes.<br /><span style={{ color: "var(--color-accent)" }}>Zéro approximation.</span>
          </motion.h1>
          <motion.p
            style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.7, maxWidth: "58ch", marginBottom: 48 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Chaque projet complexe suit un cadre éprouvé : objectifs clairs, livrables contractualisés,
            implication client définie. Vous savez exactement où vous en êtes à chaque instant.
          </motion.p>

          {/* Phase pills nav */}
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
          >
            {STEPS.map(s => (
              <a key={s.num} href={`#step-${s.num}`}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 9999, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", fontSize: 12, fontWeight: 600, textDecoration: "none", color: "var(--color-ink-2)", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.color; (e.currentTarget as HTMLElement).style.color = s.color }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
              >
                <span style={{ color: s.color, fontWeight: 800 }}>{s.num}</span>
                {s.phase}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "var(--color-bg-2)", borderBottom: "1px solid var(--color-border)", padding: "28px 0" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="stats-bar">
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: "0 24px", borderLeft: i > 0 ? "1px solid var(--color-border)" : "none", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 36, fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.04em" }}>{s.value}</p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 12, fontWeight: 500, marginTop: 2 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 steps */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                id={`step-${step.num}`}
                style={{ display: "grid", gridTemplateColumns: "88px 1fr", gap: 0, position: "relative" }}
                className="step-row"
                initial={reduce ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Timeline spine */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 40 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: step.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 800, color: "#fff" }}>{step.num}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: 2, flexGrow: 1, background: `linear-gradient(to bottom, ${step.color}40, ${STEPS[i + 1].color}40)`, marginTop: 8, minHeight: 40 }} />
                  )}
                </div>

                {/* Card */}
                <div style={{ padding: "32px 0 48px 32px" }}>
                  {/* Card header */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                    <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-ink)" }}>
                      {step.phase}
                    </h2>
                    <span style={{ fontSize: 12, fontWeight: 700, color: step.color, fontStyle: "italic" }}>{step.tagline}</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)", background: "var(--color-bg-3)", border: "1px solid var(--color-border)", padding: "3px 10px", borderRadius: 6 }}>
                      {step.duration}
                    </span>
                  </div>

                  {/* 4-quadrant grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="quad-grid">
                    {/* Objectifs */}
                    <div style={{ padding: "24px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                      <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: step.color, marginBottom: 14 }}>Objectifs</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                        {step.objectifs.map(o => (
                          <li key={o} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: step.color, flexShrink: 0, marginTop: 6 }} />
                            <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Livrables */}
                    <div style={{ padding: "24px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                      <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: step.color, marginBottom: 14 }}>Livrables</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                        {step.livrables.map(l => (
                          <li key={l} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${step.color}`, flexShrink: 0, marginTop: 2 }} />
                            <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonnes pratiques */}
                    <div style={{ padding: "24px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                      <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: step.color, marginBottom: 14 }}>Bonnes pratiques</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                        {step.pratiques.map(p => (
                          <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ fontSize: 12, color: step.color, flexShrink: 0, fontWeight: 800, marginTop: 1 }}>→</span>
                            <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Implication client */}
                    <div style={{ padding: "24px 24px", borderRadius: 14, border: `1px solid ${step.color}30`, background: `${step.color}06` }}>
                      <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: step.color, marginBottom: 14 }}>Implication client</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                        {step.client.map(c => (
                          <li key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ fontSize: 12, color: step.color, flexShrink: 0, fontWeight: 800, marginTop: 1 }}>✓</span>
                            <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="engage-grid">
            <div style={{ position: "sticky", top: 100 }}>
              <motion.p
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}
                initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              >
                Nos engagements
              </motion.p>
              <motion.h2
                style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 20 }}
                initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Ce sur quoi on<br /><span style={{ color: "var(--color-accent)" }}>s'engage.</span>
              </motion.h2>
              <motion.p
                style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: "40ch" }}
                initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              >
                Chez Koncept, l'engagement n'est pas une formule de politesse.
                C'est une ligne de conduite qui s'applique du kickoff à la mise en production.
              </motion.p>
              <motion.div
                initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
              >
                <Link href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--color-accent)", color: "#fff", padding: "15px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                >
                  Parlons de votre projet <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {COMMITMENTS.map((c, i) => (
                <motion.div key={c.label}
                  style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", alignItems: "flex-start" }}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(212,32,32,0.12)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, fontWeight: 800 }}>
                    {i + 1}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 5 }}>{c.label}</p>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section style={{ padding: "72px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
              Prêt à cadrer votre prochain projet ?
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "52ch" }}>
              Un premier échange de 30 minutes suffit à qualifier le périmètre, les enjeux et la faisabilité.
              Sans engagement.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--color-accent)", color: "#fff", padding: "15px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", transition: "filter 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
            >
              Démarrer la découverte <ArrowRight size={15} />
            </Link>
            <Link href="/expertises"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "var(--color-ink)", padding: "15px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none", border: "1px solid var(--color-border)", whiteSpace: "nowrap", transition: "border-color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-ink)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
            >
              Voir nos expertises
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .engage-grid{grid-template-columns:1fr !important;gap:48px !important}
        }
        @media(max-width:767px){
          .step-row{grid-template-columns:56px 1fr !important}
          .quad-grid{grid-template-columns:1fr !important}
          .stats-bar{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:479px){
          .stats-bar{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
