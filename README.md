# Hustle

Application web de suivi de musculation, installable sur iPhone comme une appli.

## Fonctionnalités

- 36 séances prédéfinies (muscu, cardio, plyométrie, détente verticale en 3 niveaux, basket, foot, abdos, mobilité), modifiables et duplicables, planning de la semaine
- Séance en cours : barre de progression, mode focus (un exercice à la fois), chrono, saisie poids / reps, charge conseillée, minuteur de repos avec son, minuteur guidé (HIIT, gainage), mode salle
- Bouton « Exemple » : animation départ ↔ arrivée pour plus de 90 exercices, et lien vers des vidéos
- 9 coachs au choix (Alex, Rose, Thomas, Erika, Jade, Marc, Nina, Maya, Victor) : personnage animé en bas à droite (18 expressions), conseils selon l'écran, dialogues à choix multiples sur l'entraînement, la nutrition, la récupération, la motivation et la sécurité
- Progrès : courbes, records, calendrier, historique, objectifs, 30 badges avec progression, bilan du mois
- Planning : une séance par jour de la semaine, plannings tout prêts (full body, haut / bas, PPL, basket, foot…)
- Tableau de bord : hydratation, poids et évolution en %
- Image récapitulative à partager (séance, bilan du mois)
- Corps : poids, mensurations, photos avant / après (restent sur le téléphone)
- Calculateurs : 1RM, disques sur la barre, calories et protéines
- Hydratation, astuce du jour
- Carte des salles à proximité (Basic-Fit, On Air, Fitness Park)
- Écran d'accueil verrouillé par Face ID (optionnel, avec code de secours)
- Notifications de motivation (nécessite le serveur d'envoi, voir plus bas)
- Photo de profil (appareil photo ou galerie, reste sur le téléphone)
- Personnalisation : affichage clair, sombre ou coloré, 6 couleurs (noir par défaut), taille du texte, animations, coach
- kg / lb, export et import des données (JSON), fonctionne hors connexion

Les données restent sur l'appareil. Aucune publicité, aucun traceur.

## Mettre en ligne avec GitHub Pages

Tous les fichiers sont **à la racine**, sans dossier : on peut les envoyer depuis un ordinateur ou depuis l'iPhone.

1. Crée un dépôt public sur github.com (par exemple `carnet-muscu`).
2. `Add file` → `Upload files`, sélectionne **tous les fichiers** de ce dossier, puis `Commit changes`.
3. Va dans `Settings` → `Pages`, choisis `Deploy from a branch`, branche `main`, dossier `/ (root)`, puis `Save`.
4. Après une à deux minutes, le site est en ligne à l'adresse `https://<ton-pseudo>.github.io/carnet-muscu/`.

## Installer sur iPhone

1. Ouvre l'adresse dans **Safari**.
2. Bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.

## Mettre à jour

Envoie les fichiers modifiés dans le dépôt (ils remplacent les anciens), puis change le numéro
de version dans `sw.js` (`carnet-muscu-v15` → `carnet-muscu-v16`) pour que les téléphones reçoivent
la nouvelle version. Les données des utilisateurs ne sont pas touchées.

**Important** : ne renomme jamais le dépôt et ne change pas l'adresse du site. Les données sont rangées
par le téléphone sous l'adresse exacte du site : une nouvelle adresse = un carnet vide.

## Notifications

Le fichier `index.html` contient une ligne `const PUSH = { server: "", vapidKey: "" };`.
Elle sera remplie une fois le serveur d'envoi (Cloudflare) installé.

## Fichiers (tous à la racine)

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (HTML, CSS, JavaScript) |
| `coach*.webp` | Les 18 expressions de chacun des 9 coachs |
| `logo.webp` | Le logo Hustle |
| `a0.webp` à `a7.webp` | Images d'exemple des exercices (planches regroupées) |
| `c0.webp` à `c5.webp` | Photos de couverture HD des programmes |
| `apple-touch-icon.png`, `icon-*.png`, `favicon-64.png` | Icônes de l'appli (écran d'accueil, onglet) |
| `manifest.webmanifest` | Nom, icône et couleurs de l'appli installée |
| `sw.js` | Service worker : tout fonctionne sans internet après la première ouverture, notifications |
| `fonts.css`, `*.woff2` | Polices Inter, Poppins et Barlow Condensed |
| `leaflet.js`, `leaflet.css` | Librairie d'affichage de la carte des salles |
| `LICENSE-*.txt` | Licences des polices et de la carte |

Dans l'appli, Plus → Réglages → **Vérifier les images** indique si un fichier manque sur le site.

## Crédits

- Photos des exercices : [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), domaine public (Unlicense)
- Carte : © contributeurs [OpenStreetMap](https://www.openstreetmap.org/copyright) (ODbL), affichage avec [Leaflet](https://leafletjs.com) (BSD-2)
- Polices : Inter, Poppins et Barlow Condensed (SIL Open Font License)
