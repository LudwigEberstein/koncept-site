import { LEGAL, SITE } from "./content"

const ORGANIZATION_ID = `${SITE.url}/#organization`

/** Fiche entreprise (schema.org/Organization) : nom, adresse, date de création, réseaux. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    legalName: LEGAL.company,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo-koncept-web.png`,
    image: `${SITE.url}/brand/koncept-equipe.png`,
    description: "ESN toulousaine à taille humaine : développement logiciel, accompagnement technique et fonctionnel, pilotage de projets IT.",
    foundingDate: "2014",
    email: SITE.email,
    vatID: LEGAL.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 avenue de l'Europe",
      postalCode: "31400",
      addressLocality: "Toulouse",
      addressCountry: "FR",
    },
    sameAs: [SITE.linkedin],
  }
}

interface JobPostingInput {
  title: string
  description: string
  datePosted: string
  /** Rémunération annuelle brute en euros. */
  salaryMin: number
  salaryMax: number
}

/** Offre d'emploi (schema.org/JobPosting), éligible à Google for Jobs. */
export function jobPostingJsonLd({ title, description, datePosted, salaryMin, salaryMax }: JobPostingInput) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted,
    employmentType: "FULL_TIME",
    directApply: false,
    hiringOrganization: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE.name,
      sameAs: SITE.url,
      logo: `${SITE.url}/brand/logo-koncept-web.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 avenue de l'Europe",
        postalCode: "31400",
        addressLocality: "Toulouse",
        addressCountry: "FR",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: { "@type": "QuantitativeValue", minValue: salaryMin, maxValue: salaryMax, unitText: "YEAR" },
    },
  }
}
