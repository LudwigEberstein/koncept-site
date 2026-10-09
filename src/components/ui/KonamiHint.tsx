const KEYS = ["↑", "↑", "↓", "↓", "←", "→", "←", "→", "B", "A"]

/**
 * Indice visible du code Konami : une rangée de touches de clavier.
 * Réservé au web : masqué sur écrans tactiles / mobiles (le code se tape au clavier).
 */
export default function KonamiHint() {
  return (
    <p className="konami-hint" aria-label="Indice : essaie le code Konami au clavier (haut, haut, bas, bas, gauche, droite, gauche, droite, B, A)">
      <span className="konami-hint-keys" aria-hidden="true">
        {KEYS.map((k, i) => <kbd key={i} style={{ animationDelay: `${i * 0.12}s` }}>{k}</kbd>)}
      </span>
    </p>
  )
}
