# The Rescue Squad — Stage 3 (source officielle)

Ce dossier est la **source unique** du site (`.git` ici). Toute modification de `diagnostic.html`, `challenge.html` ou `skool.html` doit se faire **ici en premier**.

## Déploiement

Deux plateformes existent pour ce projet, toutes deux à jour (vérifié le 2026-09-10) :

- **GitHub Pages** — <https://kenmmstudio.github.io/rsq-59fc14f9/> — se redéploie automatiquement à chaque push sur `main` (GitHub Actions).
- **Vercel** — <https://rsq-59fc14f9.vercel.app/> (alias historique) et <https://email-list-rescue-kit-training.vercel.app/> — projet reconnecté au dépôt GitHub `KenMMStudio/rsq-59fc14f9`, un nouveau déploiement Production se crée bien automatiquement à chaque push sur `main`.
  - **Quirk confirmé le 2026-09-10 (toujours présent, malgré la reconnexion GitHub)** : ce nouveau déploiement automatique ne met **pas** à jour l'alias `rsq-59fc14f9.vercel.app` lui-même — il faut le repointer manuellement après chaque push avec `vercel alias set <dernier-deploiement>.vercel.app rsq-59fc14f9.vercel.app` (voir `vercel ls` pour trouver l'URL du dernier déploiement). Sans ça, `rsq-59fc14f9.vercel.app` continue de servir une ancienne version en cache.

GitHub Pages n'a pas ce problème (pas d'alias à gérer) — en cas de doute sur la fraîcheur du contenu, se fier à GitHub Pages ou vérifier l'alias Vercel avant de tester.

## Copies dans Stage 4

`STAGE 4 - LANDING PAGES /Mon Projet - Email List Rescue Kit/` contient une **copie synchronisée manuellement** de `diagnostic.html`, `challenge.html`, `skool.html` (+ `en/diagnostic.html`) — gardée là pour respecter la structure pédagogique du cours (chaque stage a son propre dossier d'exercice).

Ce n'est **pas** une deuxième source indépendante : après toute modification ici, recopier vers Stage 4 pour éviter que les deux versions divergent.

## Statut

- Le diagnostic FR et EN est un vrai quiz à 6 questions (Build/Warm/Revive/Convert), résultat affiché immédiatement à l'écran.
- Les formulaires (`diagnostic.html`, `challenge.html`, `skool.html`) utilisent `form-config.js` : `mode: 'demo'` par défaut (aucune transmission externe). Passer `mode` à `'live'` dans ce fichier pour tester avec les vrais endpoints Formspree.
- Les CTA d'achat (`fe.html`, `pro.html`, `vault.html`, + versions `en/`) pointent vers `demo-checkout.html` — aucun vrai paiement, projet fictif d'entraînement.
- Le quiz (Build/Warm/Revive/Convert) est maintenant identique sur les 3 pages de diagnostic (`diagnostic.html`, `en/diagnostic.html`, `skool.html`) — corrigé le 2026-09-10, `skool.html` disait encore "diagnosis by email" alors que les deux autres pages affichaient déjà le résultat à l'écran.
- `challenge.html` reformulé le 2026-09-10 : ne promet plus une séquence automatisée de 7 emails quotidiens (aucune automatisation n'existe) — reformulé en un seul email contenant le plan d'action des 7 jours.
- **Stage 4 : en cours, pas terminé.** Reste à faire avant de le déclarer fini : réaction réelle du groupe Skool, ajustements suite à cette réaction, homework du cours documenté.
