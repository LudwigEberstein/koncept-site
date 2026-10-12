import LegalPage from "@/components/ui/LegalPage"
import { LEGAL, SITE } from "@/lib/content"

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updated={LEGAL.updated}>
      <p>
        Cette politique explique quelles données personnelles {LEGAL.company} collecte sur ce site, pourquoi, combien de temps
        elles sont conservées et comment exercer vos droits, conformément au Règlement général sur la protection des données (RGPD) et à la
        loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        {LEGAL.company}, {SITE.address.street}, {SITE.address.building}, {SITE.address.city}.<br />
        Contact : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Données collectées et finalités</h2>
      <p>Nous ne collectons que les données que vous nous transmettez volontairement via les formulaires du site :</p>
      <ul>
        <li>
          <strong>Formulaire de contact</strong> : prénom, nom, adresse e-mail, téléphone et société (facultatifs), contenu de votre message.
          Finalité : répondre à votre demande. Base légale : votre consentement et nos mesures précontractuelles.
        </li>
        <li>
          <strong>Candidature spontanée</strong> : prénom, nom, adresse e-mail, poste visé et message de présentation.
          Finalité : étudier votre candidature et vous recontacter. Base légale : mesures précontractuelles et votre consentement.
        </li>
      </ul>
      <p>Ces données ne sont jamais utilisées à d&apos;autres fins, ni vendues, ni cédées à des tiers à des fins commerciales.</p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont destinées aux seules personnes habilitées de {LEGAL.company} chargées de traiter votre demande ou votre candidature.
        Elles peuvent être traitées par nos prestataires techniques (hébergement, messagerie) agissant pour notre compte et soumis à des
        obligations de confidentialité.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées 3 ans à compter de notre dernier échange avec vous, puis supprimées ou anonymisées.
        Vous pouvez demander leur suppression plus tôt à tout moment.
      </p>

      <h2>Cookies et traceurs</h2>
      <p>
        Ce site n&apos;utilise <strong>aucun cookie publicitaire, de mesure d&apos;audience ou de suivi</strong>. Il n&apos;affiche donc pas de
        bandeau de consentement.
      </p>
      <p>
        Seul un stockage local de votre navigateur (<em>localStorage</em>) mémorise l&apos;univers choisi sur l&apos;écran d&apos;accueil
        (Solutions ou Carrières) afin de vous y rediriger lors de votre prochaine visite. Cette information reste sur votre appareil, n&apos;est
        pas transmise et peut être effacée à tout moment depuis les réglages de votre navigateur.
      </p>
      <p>
        Le lien vers notre page LinkedIn est un simple lien sortant : aucun contenu LinkedIn n&apos;est intégré à nos pages. Une fois sur
        LinkedIn, ses propres règles s&apos;appliquent (<a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politique de confidentialité de LinkedIn</a>).
      </p>

      <h2>Vos droits</h2>
      <p>Vous disposez des droits suivants sur vos données :</p>
      <ul>
        <li>accès, rectification et effacement ;</li>
        <li>limitation du traitement et opposition ;</li>
        <li>portabilité ;</li>
        <li>retrait de votre consentement à tout moment, sans remettre en cause les traitements antérieurs.</li>
      </ul>
      <p>
        Pour les exercer, écrivez-nous à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Nous pouvons vous demander un justificatif
        d&apos;identité en cas de doute. Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
        introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
      </p>

      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre la perte, l&apos;accès
        non autorisé ou la divulgation (connexion chiffrée HTTPS, accès restreint aux personnes habilitées).
      </p>

      <h2>Évolution de cette politique</h2>
      <p>Nous pouvons mettre à jour cette politique. La date de dernière mise à jour figure en haut de page.</p>
    </LegalPage>
  )
}
