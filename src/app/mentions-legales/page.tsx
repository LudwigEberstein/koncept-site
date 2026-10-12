import Link from "next/link"
import LegalPage from "@/components/ui/LegalPage"
import { LEGAL, SITE } from "@/lib/content"

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated={LEGAL.updated}>
      <h2>Éditeur du site</h2>
      <p>
        <strong>{LEGAL.company}</strong>, {LEGAL.legalForm} au capital de {LEGAL.capital}<br />
        {SITE.address.street}, {SITE.address.building}<br />
        {SITE.address.city}, France<br />
        {LEGAL.rcs}<br />
        SIRET : {LEGAL.siret}<br />
        N° de TVA intracommunautaire : {LEGAL.vat}<br />
        E-mail : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Directeur de la publication</h2>
      <p>{LEGAL.publicationDirector}.</p>

      <h2>Hébergement</h2>
      <p>
        <strong>{LEGAL.host.name}</strong><br />
        {LEGAL.host.address}<br />
        <a href={LEGAL.host.url} target="_blank" rel="noopener noreferrer">{LEGAL.host.url.replace("https://", "")}</a>
      </p>

      <h2>Conception et réalisation</h2>
      <p>
        Site conçu et développé par <a href="https://devantia.vercel.app" target="_blank" rel="noopener noreferrer">Devantia</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, photographies, illustrations, logos, éléments graphiques, structure) est la propriété
        de {LEGAL.company} ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, représentation, modification ou
        exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite, hors usage strictement privé et consultation individuelle.
      </p>
      <p>Les marques et logos de tiers cités sur le site restent la propriété de leurs titulaires respectifs.</p>

      <h2>Responsabilité</h2>
      <p>
        {LEGAL.company} s&apos;efforce de fournir des informations exactes et à jour, sans pouvoir garantir l&apos;absence d&apos;erreur ou
        d&apos;omission. Le site peut contenir des liens vers des sites tiers (par exemple LinkedIn) dont {LEGAL.company} ne maîtrise pas le contenu
        et décline la responsabilité.
      </p>

      <h2>Données personnelles et cookies</h2>
      <p>
        Le traitement de vos données personnelles est décrit dans notre{" "}
        <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
      </p>

      <h2>Droit applicable</h2>
      <p>Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français sont compétents.</p>
    </LegalPage>
  )
}
