// Shared content & data — single source of truth

export const SITE = {
  name: "Koncept",
  tagline: "On transforme votre IT.",
  address: {
    street: "3, Avenue de l'Europe",
    building: "Parc Technologique du Canal - Bâtiment C",
    city: "31 400 Toulouse",
  },
  linkedin: "https://www.linkedin.com/company/konceptkomet",
  email: "contact@koncept-is.fr",
  phone: "05 61 00 00 00",
  phoneHref: "tel:0561000000",
} as const

export const STATS = [
  { value: "50", label: "collaborateurs" },
  { value: "€3.2M", label: "de chiffre d'affaires" },
  { value: "7", label: "secteurs d'activité" },
  { value: "2014", label: "fondée à Toulouse" },
] as const

export const SECTORS = [
  {
    name: "Aéronautique",
    slug: "aeronautique",
    desc: "Systèmes embarqués, MES, simulateurs de vol, chaîne de production numérique. Nos équipes interviennent chez les leaders du secteur en Occitanie.",
    tags: ["Java", "C++", ".NET", "DevOps"],
  },
  {
    name: "Banque & Finance",
    slug: "banque",
    desc: "Core banking, conformité réglementaire (DSP2, RGPD), portails clients, automatisation des processus métier.",
    tags: ["Java", "Spring Boot", "Angular", "API REST"],
  },
  {
    name: "Télécommunications",
    slug: "telecom",
    desc: "BSS/OSS, facturation, portails abonnés, orchestration réseau. Des solutions robustes pour des volumes critiques.",
    tags: ["Java", "Microservices", "Cloud", "DevOps"],
  },
  {
    name: "Services IT",
    slug: "services-it",
    desc: "Éditeurs logiciels, intégrateurs, hébergeurs. Nous renforçons vos équipes sur des cycles courts ou longs.",
    tags: ["React", "Node.js", "CI/CD", "Docker"],
  },
  {
    name: "Robotique",
    slug: "robotique",
    desc: "Interfaces de pilotage, logiciels de contrôle, jumeaux numériques. Nous connectons le monde physique au digital.",
    tags: ["C++", "Python", "ROS", "IoT"],
  },
  {
    name: "Transport & Mobilité",
    slug: "transport",
    desc: "Billettique, supervision de flottes, systèmes embarqués. Des solutions fiables pour des environnements exigeants.",
    tags: [".NET", "Angular", "SQL", "Azure"],
  },
  {
    name: "Secteur public",
    slug: "secteur-public",
    desc: "Dématérialisation, portails citoyens, systèmes d'information métier. Expérience des contraintes réglementaires et des marchés publics.",
    tags: ["Java", ".NET", "PostgreSQL", "Sécurité"],
  },
] as const

export const EXPERTISES = [
  {
    title: "Développement Web & Mobile",
    slug: "web-mobile",
    short: "Full-stack sur mesure",
    desc: "Applications métier, portails clients, sites transactionnels. Nous couvrons le cycle complet : architecture, développement, recette, livraison.",
    stack: ["Java", "Spring Boot", ".NET", "Angular", "React", "Node.js"],
    icon: "code",
  },
  {
    title: "Architecture applicative",
    slug: "architecture",
    short: "Conception & urbanisation SI",
    desc: "Audit de l'existant, définition des cibles techniques, microservices, API-first. Nous structurons vos systèmes pour qu'ils scalent.",
    stack: ["Microservices", "API REST", "Event-driven", "DDD"],
    icon: "layers",
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud",
    short: "Cloud privé & public",
    desc: "Migration cloud, infrastructure as code, optimisation des coûts, conformité RGPD. Azure, AWS ou on-premise selon vos contraintes.",
    stack: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform"],
    icon: "cloud",
  },
  {
    title: "DevOps & Industrialisation",
    slug: "devops",
    short: "CI/CD & automatisation",
    desc: "Pipelines de déploiement continu, monitoring, qualité du code, sécurité intégrée (DevSecOps). Nous réduisons votre time-to-market.",
    stack: ["Jenkins", "GitLab CI", "SonarQube", "Ansible", "Prometheus"],
    icon: "git",
  },
  {
    title: "Data & Interopérabilité",
    slug: "data",
    short: "Données & intégration",
    desc: "Modélisation, ETL, APIs d'échange, data warehousing. Nous rendons vos données exploitables et vos systèmes interconnectés.",
    stack: ["MySQL", "PostgreSQL", "Kafka", "Elasticsearch", "Power BI"],
    icon: "database",
  },
  {
    title: "Sécurité & Conformité",
    slug: "securite",
    short: "ISO 27001 · RGPD · OWASP",
    desc: "Certifiés ISO 27001:2013 depuis 2020. Sécurité intégrée dès la conception : tests de vulnérabilité, revue de code, conformité réglementaire.",
    stack: ["ISO 27001", "OWASP", "RGPD", "Pentest", "SIEM"],
    icon: "shield",
  },
] as const

export const TECH = [
  { name: "Java", src: "https://koncept-is.fr/wp-content/uploads/2025/07/java.png" },
  { name: "Spring Boot", src: "https://koncept-is.fr/wp-content/uploads/2025/07/spring-boot.png" },
  { name: "Microsoft .NET", src: "https://koncept-is.fr/wp-content/uploads/2025/07/ms-dotnet.png" },
  { name: "Angular", src: "https://koncept-is.fr/wp-content/uploads/2025/07/angular.png" },
  { name: "Jenkins", src: "https://koncept-is.fr/wp-content/uploads/2025/07/jenkins.png" },
  { name: "MySQL", src: "https://koncept-is.fr/wp-content/uploads/2025/07/mysql.png" },
] as const

export const TEAM = [
  { name: "Gérard", role: "Président", img: "https://picsum.photos/seed/gerard-koncept-president/300/300" },
  { name: "Guillaume", role: "Directeur", img: "https://picsum.photos/seed/guillaume-koncept-director/300/300" },
  { name: "Valentine", role: "Directrice RH", img: "https://picsum.photos/seed/valentine-koncept-rh/300/300" },
  { name: "Aurélie", role: "Responsable Commercial", img: "https://picsum.photos/seed/aurelie-koncept-commercial/300/300" },
] as const

export const VALUES = [
  { title: "Proximité", desc: "Un interlocuteur unique, disponible, qui connaît votre activité et s'implique comme s'il faisait partie de votre équipe." },
  { title: "Confiance", desc: "Des engagements tenus, des délais respectés. On ne vous vend pas ce qu'on ne peut pas livrer." },
  { title: "Échange", desc: "Partage de connaissances, transparence sur les difficultés, communication franche à chaque étape du projet." },
  { title: "Partage", desc: "Une culture de l'entraide en interne comme avec nos clients. Ce qui est appris ici bénéficie à tout le monde." },
] as const

export const CAREER_TRAITS = [
  { label: "Anticonformiste", desc: "On s'affranchit des codes qui n'ont pas de sens. Ce qui compte, c'est la qualité du travail et l'épanouissement des équipes." },
  { label: "Engagé", desc: "Chaque Koncepteur s'implique sur ses missions comme s'il en était l'entrepreneur. Votre réussite est notre fierté." },
  { label: "Respectueux", desc: "Bienveillance et écoute attentive sont des valeurs non-négociables chez nous, vers l'interne comme vers les clients." },
  { label: "Tolérant", desc: "Un environnement ouvert, sans jugement, où la diversité des profils et des parcours est une richesse." },
] as const

export const CAREER_EVENTS = [
  { title: "Déjeuners mensuels", freq: "Mensuel", desc: "Accueil des nouveaux, point RH, retrouvailles entre collègues de différentes missions." },
  { title: "Soirées trimestrielles", freq: "Trimestriel", desc: "Des moments de décompression et de cohésion pour l'ensemble des équipes." },
  { title: "Weekend annuel", freq: "Annuel", desc: "Un séminaire de cohésion mémorable pour renforcer les liens et les ambitions communes." },
] as const

export const JOBS = [
  {
    title: "Développeur JS FullStack",
    location: "Toulouse",
    type: "CDI",
    sector: "Aéronautique / Télécoms",
    desc: "Vous intégrerez une équipe projet chez l'un de nos clients grands comptes. Vous serez responsable du développement frontend et backend en JavaScript/TypeScript, dans un contexte Agile exigeant.",
    stack: ["JavaScript", "TypeScript", "Node.js", "Angular", "React", "REST API"],
    profile: [
      "Bac+3 à Bac+5 en informatique",
      "2+ ans d'expérience en développement fullstack JS",
      "Maîtrise de Node.js + un framework frontend (Angular ou React)",
      "Curiosité, rigueur, esprit d'équipe",
    ],
  },
] as const

// Navigation — two distinct tracks
export const NAV_CLIENT = [
  { label: "Expertises", href: "/expertises" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Méthodologie", href: "/methodologie" },
] as const

export const NAV_CAREER = [
  { label: "Pourquoi nous rejoindre", href: "/carrieres" },
  { label: "Vie chez Koncept", href: "/carrieres/vie" },
  { label: "Formation", href: "/carrieres/formation" },
  { label: "Offres d'emploi", href: "/carrieres/offres" },
] as const

export const IMAGES = {
  logo: "https://koncept-is.fr/wp-content/uploads/2025/07/logo-koncept-web.png",
  hero: "https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-solutions-IT-aeronautique.png",
  team: "https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-equipe.png",
} as const
