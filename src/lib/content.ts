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
  "Banque",
  "Aéronautique",
  "Télécommunications",
  "Services IT",
  "Robotique",
  "Transport",
  "Secteur public",
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

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  { label: "Éthique", href: "/ethique" },
  { label: "Formation", href: "/formation" },
  { label: "Notre Offre", href: "/notre-offre" },
  { label: "Nous rejoindre", href: "/nous-rejoindre" },
  { label: "Recrutement", href: "/recrutement" },
  { label: "Contact", href: "/contact" },
] as const

export const IMAGES = {
  logo: "https://koncept-is.fr/wp-content/uploads/2025/07/logo-koncept-web.png",
  hero: "https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-solutions-IT-aeronautique.png",
  team: "https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-equipe.png",
} as const
