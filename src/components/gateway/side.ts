export type Side = "pro" | "fun"

/** Page d'arrivée de chaque côté. */
export const DEST: Record<Side, string> = {
  pro: "/solutions",
  fun: "/carrieres/pourquoi-nous-rejoindre",
}

export const STORAGE_KEY = "koncept-side"

/**
 * Redirection des visiteurs de retour, exécutée par le navigateur AVANT l'affichage :
 * le HTML de « / » reste complet et visible côté serveur (robots, SEO, sans JS),
 * et un visiteur qui a déjà choisi n'a pas de flash de l'écran de choix.
 * `/?choisir` (logo du header) désactive la redirection.
 */
export const RETURNING_VISITOR_REDIRECT = `(function(){try{var d=${JSON.stringify(DEST)}[localStorage.getItem(${JSON.stringify(STORAGE_KEY)})];if(d&&location.search.indexOf("choisir")<0)location.replace(d)}catch(e){}})()`
