'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, useReducedMotion, AnimatePresence } from "motion/react"
import RevealSection from "@/components/ui/RevealSection"

// ─── Data ───────────────────────────────────────────────────────────────────

const DOMAINS = [
  {
    id: "dev",
    label: "Développement",
    short: "Apps & Logiciel métier",
    color: "#3b82f6",
    headline: "Des applications robustes,\npas des prototypes déguisés.",
    intro: "On intervient sur des systèmes en production avec des contraintes réelles : concurrence, volumétrie, dette technique héritée, réglementations sectorielles. Nos développeurs sont des artisans — pas des exécutants de tickets.",
    problems: [
      "Monolithes legacy difficiles à faire évoluer sans régressions",
      "Temps de livraison trop longs face aux attentes métier",
      "Qualité de code insuffisante — dette technique qui s'accumule",
      "Intégrations tierces fragiles et couplées",
    ],
    expertise: [
      { title: "Clean Architecture & DDD", desc: "Séparation stricte des couches, ubiquitous language aligné sur le métier, code testable par construction." },
      { title: "API-first & contrats d'interface", desc: "OpenAPI dès la conception, versioning maîtrisé, rétrocompatibilité garantie. Les frontends et partenaires consomment des contrats stables." },
      { title: "TDD & qualité embarquée", desc: "Tests unitaires, intégration, contrats Pact. SonarQube branché sur la CI. Zéro régression livrée sans filet." },
      { title: "Modernisation d'existant", desc: "Strangler pattern, migration incrémentale, refactoring sans arrêt de service. On ne repart pas de zéro quand ce n'est pas nécessaire." },
    ],
    stack: [
      { name: "Java 21", note: "LTS · JVM tuning · GC moderne" },
      { name: "Spring Boot 3", note: "Web · Security · Batch · Data" },
      { name: "Angular 17+", note: "Standalone · Signals · SSR" },
      { name: ".NET 8", note: "ASP.NET Core · Minimal API · EF Core" },
      { name: "Node.js", note: "NestJS · Express · Fastify" },
      { name: "TypeScript", note: "Strict mode · monorepos Nx" },
    ],
    missions: [
      { sector: "Banque", desc: "Refonte du moteur de règles métier d'un établissement bancaire (200k transactions/jour). Migration Java 8 → 21, gain de 60% sur les temps de traitement.", tags: ["Java 21", "Spring Batch", "PostgreSQL"] },
      { sector: "Aéronautique", desc: "Portail de suivi de fabrication temps réel pour un sous-traitant Airbus. Architecture event-driven, 50+ utilisateurs simultanés par atelier.", tags: ["Spring Boot", "Angular", "WebSocket"] },
      { sector: "Télécoms", desc: "API de provisioning abonnés pour un opérateur national. 3M appels/jour, SLA 99.95%, intégration BSS/OSS.", tags: [".NET 8", "REST API", "Azure Service Bus"] },
    ],
  },
  {
    id: "archi",
    label: "Architecture",
    short: "Conception & SI",
    color: "#D42020",
    headline: "Des systèmes qui scalent\nsans devenir ingérables.",
    intro: "L'architecture, c'est l'ensemble des décisions qu'on regrettera le plus tôt si elles sont mal prises. On intervient en amont pour définir des cibles techniques tenables, ou en aval pour restructurer ce qui est devenu un frein.",
    problems: [
      "SI monolithique qui bloque les évolutions et paralyse les équipes",
      "Couplage fort entre domaines — une modification casse tout le reste",
      "Scalabilité manuelle, coûteuse, non déterministe",
      "Absence de traçabilité des événements métier critiques",
    ],
    expertise: [
      { title: "Architecture microservices", desc: "Décomposition par domaine fonctionnel (bounded contexts), ownership clair, déploiements indépendants. On ne découpe pas pour découper — on évalue le coût/bénéfice de chaque coupure." },
      { title: "Event-Driven Architecture", desc: "Kafka, RabbitMQ ou Azure Service Bus selon les contraintes. Patterns : Saga, Outbox, Event Sourcing, CQRS. Résilience par conception." },
      { title: "API Gateway & BFF", desc: "Façades adaptées par type de client (web, mobile, partenaire B2B). Rate limiting, auth centralisée, observabilité unifiée dès l'entrée." },
      { title: "Architecture decision records", desc: "On documente les décisions et leurs alternatives. Dans 2 ans, votre équipe saura pourquoi tel choix a été fait — et dans quel contexte il pourrait être remis en question." },
    ],
    stack: [
      { name: "Apache Kafka", note: "Streaming · Exactly-once · Schema Registry" },
      { name: "RabbitMQ", note: "AMQP · Dead-letter · Retry policies" },
      { name: "Kong / APISIX", note: "API Gateway · Plugins · Rate limiting" },
      { name: "PostgreSQL", note: "Partitioning · JSONB · Row-level security" },
      { name: "Elasticsearch", note: "Full-text · Aggregations · Kibana" },
      { name: "Redis", note: "Cache · Pub-Sub · Rate limiting" },
    ],
    missions: [
      { sector: "Services IT", desc: "Décomposition d'un monolithe e-commerce en 8 microservices. Zéro downtime pendant la migration, équipes produit autonomes à l'issue.", tags: ["Kafka", "DDD", "Docker"] },
      { sector: "Robotique", desc: "Architecture event-driven pour la collecte temps réel de données capteurs (10k events/sec). CQRS + Event Sourcing pour la traçabilité réglementaire.", tags: ["Kafka", "CQRS", "TimescaleDB"] },
      { sector: "Secteur public", desc: "Urbanisation SI d'une collectivité : cartographie de 40 applications, définition de la cible, plan de migration sur 3 ans.", tags: ["ADR", "API Gateway", "SOA"] },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    short: "Infra · CI/CD · Ops",
    color: "#16a34a",
    headline: "Du code en production\nen minutes, pas en semaines.",
    intro: "La valeur d'une application n'existe qu'en production. On industrialise les pipelines, on conteneurise, on orchestre, on observe. L'objectif : que votre équipe déploie en confiance, sans rituel manuel ni nuit blanche.",
    problems: [
      "Déploiements manuels, lents, sources d'erreurs et de stress",
      "Environnements inconsistants entre dev, staging et production",
      "Aucune visibilité sur ce qui se passe en production",
      "Infra sous-documentée, connaissance concentrée sur 1-2 personnes",
    ],
    expertise: [
      { title: "CI/CD industrialisée", desc: "Pipeline de build, test, scan sécurité, déploiement automatisé. Trunk-based development, feature flags, rollback en un clic. On mesure le DORA." },
      { title: "Conteneurisation & orchestration", desc: "Docker pour la portabilité, Kubernetes pour l'orchestration. Helm charts versionnés, HPA/VPA, resource quotas. GitOps avec ArgoCD ou Flux." },
      { title: "Infrastructure as Code", desc: "Terraform pour le provisioning cloud, Ansible pour la configuration. Toute l'infra reviewée comme du code, reproductible, détruite/recréée en minutes." },
      { title: "Observabilité (Pilier des 3 signaux)", desc: "Métriques Prometheus + Grafana, logs centralisés (Loki / ELK), traces distribuées (Jaeger / Tempo). Alerting sur les SLO, pas sur les symptômes." },
    ],
    stack: [
      { name: "Docker", note: "Multi-stage builds · compose · Buildkit" },
      { name: "Kubernetes", note: "K8s · Helm · ArgoCD · HPA" },
      { name: "Jenkins / GitLab CI", note: "Pipelines as code · shared libraries" },
      { name: "Terraform", note: "AWS · Azure · GCP · modules réutilisables" },
      { name: "Prometheus / Grafana", note: "SLO · alertmanager · dashboards" },
      { name: "Azure / AWS", note: "AKS · EKS · App Service · Lambda" },
    ],
    missions: [
      { sector: "Aéronautique", desc: "Migration d'une infra bare-metal vers Azure AKS. Pipeline Jenkins → GitLab CI avec déploiement blue/green. Time-to-deploy réduit de 4h à 12min.", tags: ["AKS", "GitLab CI", "Terraform"] },
      { sector: "Télécoms", desc: "Mise en place d'une stack d'observabilité complète sur 15 microservices. MTTD (Mean Time To Detect) réduit de 40 minutes à 3 minutes.", tags: ["Prometheus", "Grafana", "Loki"] },
      { sector: "Banque", desc: "Plateforme GitOps sur Kubernetes avec ArgoCD. 6 équipes feature indépendantes, 20+ déploiements/jour sans friction.", tags: ["Kubernetes", "ArgoCD", "Helm"] },
    ],
  },
] as const

type DomainId = typeof DOMAINS[number]["id"]

// ─── Sub-components ──────────────────────────────────────────────────────────

function DomainPanel({ domain, reduce }: { domain: typeof DOMAINS[number]; reduce: boolean | null }) {
  return (
    <motion.div
      key={domain.id}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Domain header */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 64, alignItems: "start" }} className="domain-header">
        <div>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.08, whiteSpace: "pre-line", marginBottom: 24 }}>
            {domain.headline}
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75 }}>{domain.intro}</p>
        </div>
        <div style={{ background: "var(--color-bg-3)", border: `1px solid ${domain.color}22`, borderRadius: 16, padding: "32px 28px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: domain.color, marginBottom: 20 }}>Problématiques clients typiques</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {domain.problems.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${domain.color}18`, border: `1px solid ${domain.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ color: domain.color, fontSize: 10, fontWeight: 800 }}>!</span>
                </div>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.6 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise grid */}
      <div style={{ marginBottom: 64 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: domain.color, marginBottom: 28 }}>Notre expertise</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="expertise-grid">
          {domain.expertise.map((ex, i) => (
            <motion.div key={ex.title}
              style={{ padding: "28px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", borderLeft: `3px solid ${domain.color}` }}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{ex.title}</h3>
              <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{ex.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ marginBottom: 64 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: domain.color, marginBottom: 24 }}>Technologies maîtrisées</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="stack-grid">
          {domain.stack.map((s, i) => (
            <motion.div key={s.name}
              style={{ padding: "18px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column", gap: 4 }}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700 }}>{s.name}</p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 11, lineHeight: 1.5 }}>{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Missions */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: domain.color, marginBottom: 24 }}>Exemples de missions</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="missions-grid">
          {domain.missions.map((m, i) => (
            <motion.div key={i}
              style={{ padding: "24px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column", gap: 14 }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <span style={{ display: "inline-block", alignSelf: "flex-start", background: `${domain.color}18`, color: domain.color, borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>{m.sector}</span>
              <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7, flex: 1 }}>{m.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {m.tags.map(t => (
                  <span key={t} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 5, padding: "3px 9px", fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Expertises() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<DomainId>("dev")
  const domain = DOMAINS.find(d => d.id === active)!

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", paddingTop: 140, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div style={{ maxWidth: "72ch" }}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 20 }}>Expertises techniques</p>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 28 }}>
              On maîtrise la stack.<br /><span style={{ color: "var(--color-accent)" }}>Du code à la prod.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.7, maxWidth: "58ch" }}>
              Pas de généralistes polyvalents vendus comme experts. Nos équipes ont une spécialité, une profondeur technique, et des missions référençables dans les secteurs où vous opérez.
            </p>
          </motion.div>

          {/* 3 domain pills in hero */}
          <motion.div style={{ display: "flex", gap: 12, marginTop: 48, flexWrap: "wrap" }}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {DOMAINS.map(d => (
              <button key={d.id} onClick={() => setActive(d.id as DomainId)}
                style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "12px 20px",
                  borderRadius: 10, border: `1px solid ${active === d.id ? d.color : "var(--color-border)"}`,
                  background: active === d.id ? `${d.color}12` : "transparent",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, color: active === d.id ? "var(--color-ink)" : "var(--color-ink-2)" }}>{d.label}</span>
                <span style={{ fontSize: 11, color: active === d.id ? d.color : "var(--color-ink-2)", fontWeight: 500 }}>{d.short}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Domain tab selector (sticky) ── */}
      <div style={{ position: "sticky", top: 68, zIndex: 40, background: "rgba(13,13,13,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", gap: 0 }}>
          {DOMAINS.map(d => (
            <button key={d.id} onClick={() => setActive(d.id as DomainId)}
              style={{
                padding: "18px 28px", background: "none", border: "none", cursor: "pointer",
                borderBottom: active === d.id ? `2px solid ${d.color}` : "2px solid transparent",
                color: active === d.id ? "var(--color-ink)" : "var(--color-ink-2)",
                fontSize: 14, fontWeight: active === d.id ? 700 : 500,
                transition: "all 0.2s", fontFamily: "inherit",
                marginBottom: -1,
              }}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Active domain content ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <AnimatePresence mode="wait">
            <DomainPanel key={active} domain={domain} reduce={reduce} />
          </AnimatePresence>
        </div>
      </section>

      {/* ── ISO / Certifications ── */}
      <section style={{ padding: "72px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="cert-grid">
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>Sécurité & Conformité</p>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20 }}>
                  La sécurité n'est pas<br /><span style={{ color: "var(--color-accent)" }}>une feature de dernière minute.</span>
                </h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                  Certifiés ISO 27001:2013 depuis 2020. Modélisation des menaces (STRIDE), tests de pénétration applicatifs, conformité RGPD intégrée à la conception. On ne sécurise pas après-coup — on construit sécurisé.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Threat modeling dès la phase de design",
                    "SAST / DAST intégrés dans la CI/CD",
                    "Review des dépendances (CVE) automatisée",
                    "Secrets management (Vault / Azure Key Vault)",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <CheckCircle size={14} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                      <span style={{ color: "var(--color-ink-2)", fontSize: 14 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "ISO 27001:2013", desc: "Certifié depuis 2020 — Système de management de la sécurité de l'information", dot: "#22c55e" },
                  { label: "OWASP Top 10", desc: "Standards de sécurité applicative intégrés à chaque développement", dot: "#f59e0b" },
                  { label: "RGPD by design", desc: "Privacy by design, minimisation des données, DPA contractualisé", dot: "#3b82f6" },
                  { label: "DevSecOps", desc: "Sécurité intégrée dans le pipeline CI/CD — pas en bout de chaîne", dot: "#D42020" },
                ].map((c, i) => (
                  <motion.div key={c.label}
                    style={{ padding: "20px 22px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", display: "flex", gap: 16, alignItems: "flex-start" }}
                    initial={reduce ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot, flexShrink: 0, marginTop: 5 }} />
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{c.label}</p>
                      <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.55 }}>{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Why Koncept vs. big ESN ── */}
      <section style={{ padding: "72px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 2.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 40 }}>
              Pourquoi Koncept plutôt qu'une grande ESN ?
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="diff-grid">
            {[
              { title: "Pas de bait & switch", desc: "L'expert en avant-vente est le même qui livre. On ne vend pas un profil senior pour placer un junior un mois après la signature." },
              { title: "Interlocuteur technique unique", desc: "Vous avez un point de contact qui comprend votre stack, votre dette technique et vos enjeux métier. Pas un commercial relais." },
              { title: "Engagement sur les résultats", desc: "On travaille en forfait ou en régie avec des jalons clairs. Si le projet dérape, on en parle immédiatement — on ne cache pas les problèmes." },
            ].map((item, i) => (
              <motion.div key={item.title}
                style={{ padding: "32px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 32, height: 3, background: "var(--color-accent)", borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 24px", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }} className="cta-row">
          <div>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Un cadrage technique sans engagement sous 48h.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7 }}>
              Décrivez votre problème. On vous revient avec une analyse honnête et une proposition de collaboration adaptée.
            </p>
          </div>
          <Link href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--color-accent)", color: "#fff", padding: "18px 32px", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", transition: "filter 0.15s, transform 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
          >
            Parler à un expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .diff-grid{grid-template-columns:1fr 1fr !important}
          .stack-grid{grid-template-columns:1fr 1fr !important}
          .missions-grid{grid-template-columns:1fr 1fr !important}
        }
        @media(max-width:767px){
          .domain-header{grid-template-columns:1fr !important;gap:40px !important}
          .expertise-grid{grid-template-columns:1fr !important}
          .stack-grid{grid-template-columns:1fr 1fr !important}
          .missions-grid{grid-template-columns:1fr !important}
          .diff-grid{grid-template-columns:1fr !important}
          .cert-grid{grid-template-columns:1fr !important;gap:40px !important}
          .cta-row{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
