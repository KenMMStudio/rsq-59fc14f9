// Config partagée pour tous les formulaires du site (diagnostic, challenge, skool).
// mode 'demo' : rien n'est transmis à un service externe — la soumission est simulée localement.
// mode 'live' : envoi réel vers Formspree, avec l'endpoint correspondant à la page.
// Projet fictif d'entraînement (Claude Code Club) — par défaut on reste en 'demo'.
// Pour tester en conditions réelles : passer mode à 'live'.
window.RSQ_FORM_CONFIG = {
  mode: 'demo',
  endpoints: {
    diagnostic: 'https://formspree.io/f/xnpqlyqa',
    challenge: 'https://formspree.io/f/mppzkedy',
    skool: 'https://formspree.io/f/xnpqlyqa'
  }
};
