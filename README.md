# The Rescue Squad — Stage 3 (source officielle)

Ce dossier est la **source unique** du site (`.git` ici). Toute modification de `diagnostic.html`, `challenge.html` ou `skool.html` doit se faire **ici en premier**.

## Déploiement

Deux plateformes existent pour ce projet, dans un état différent (vérifié le 2026-09-10) :

- **GitHub Pages** — <https://kenmmstudio.github.io/rsq-59fc14f9/> — **à jour**, se redéploie automatiquement à chaque push sur `main` (GitHub Actions). C'est la version de référence pour tester le site.
- **Vercel** — <https://rsq-59fc14f9.vercel.app/> — compte créé et projet lié (dossier `.vercel/`, gitignored), mais **ce déploiement n'est pas connecté aux pushes Git** : il sert encore une version très ancienne du site (hero en `min-height:100vh`/`align-items:flex-end`, sans `cookie-consent.js`), antérieure à toutes les corrections faites dans ce projet. Pousser sur `main` ne le met pas à jour. À reconnecter (intégration Git dans le dashboard Vercel) ou redéployer manuellement (`vercel --prod`) si on veut s'en servir — sinon le garder comme deuxième plateforme à corriger plus tard, mais ne pas s'y fier pour vérifier une correction en attendant.

## Copies dans Stage 4

`STAGE 4 - LANDING PAGES /Mon Projet - Email List Rescue Kit/` contient une **copie synchronisée manuellement** de `diagnostic.html`, `challenge.html`, `skool.html` (+ `en/diagnostic.html`) — gardée là pour respecter la structure pédagogique du cours (chaque stage a son propre dossier d'exercice).

Ce n'est **pas** une deuxième source indépendante : après toute modification ici, recopier vers Stage 4 pour éviter que les deux versions divergent.

## Statut

- Le diagnostic FR et EN est un vrai quiz à 6 questions (Build/Warm/Revive/Convert), résultat affiché immédiatement à l'écran.
- Les formulaires (`diagnostic.html`, `challenge.html`, `skool.html`) utilisent `form-config.js` : `mode: 'demo'` par défaut (aucune transmission externe). Passer `mode` à `'live'` dans ce fichier pour tester avec les vrais endpoints Formspree.
- Les CTA d'achat (`fe.html`, `pro.html`, `vault.html`, + versions `en/`) pointent vers `demo-checkout.html` — aucun vrai paiement, projet fictif d'entraînement.
- **Stage 4 : en cours, pas terminé.** Reste à faire avant de le déclarer fini : réaction réelle du groupe Skool, ajustements suite à cette réaction, homework du cours documenté.
