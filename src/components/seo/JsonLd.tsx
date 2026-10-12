interface JsonLdProps {
  data: Record<string, unknown>
}

/** Données structurées schema.org, invisibles pour le visiteur, lues par les moteurs de recherche. */
export default function JsonLd({ data }: JsonLdProps) {
  // « < » échappé pour qu'aucune valeur ne puisse refermer la balise <script>
  const json = JSON.stringify(data).replace(/</g, "\u003c")
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
