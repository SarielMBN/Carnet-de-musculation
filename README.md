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
- Personnalisation : affichage clair, sombre ou coloré, 6 couleurs, taille du texte, animations, coach
- kg / lb, export et import des données (JSON), fonctionne hors connexion

Les données restent sur l'appareil. Aucune publicité, aucun traceur.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt public sur github.com (par exemple `carnet-muscu`).
2. Envoie tout le contenu de ce dossier à la racine du dépôt (`Add file` → `Upload files`).
3. Va dans `Settings` → `Pages`, choisis `Deploy from a branch`, branche `main`, dossier `/ (root)`, puis `Save`.
4. Après une à deux minutes, le site est en ligne à l'adresse `https://<ton-pseudo>.github.io/carnet-muscu/`.

## Installer sur iPhone

1. Ouvre l'adresse dans **Safari**.
2. Bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.

## Mettre à jour

Envoie les fichiers modifiés dans le dépôt (ils remplacent les anciens), puis change le numéro
de version dans `sw.js` (`carnet-muscu-v13` → `carnet-muscu-v14`) pour que les téléphones reçoivent
la nouvelle version. Les données des utilisateurs ne sont pas touchées.

**Important** : ne renomme jamais le dépôt et ne change pas l'adresse du site. Les données sont rangées
par le téléphone sous l'adresse exacte du site : une nouvelle adresse = un carnet vide.

## Notifications

Le fichier `index.html` contient une ligne `const PUSH = { server: "", vapidKey: "" };`.
Elle sera remplie une fois le serveur d'envoi (Cloudflare) installé.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (HTML, CSS, JavaScript) |
| `coach*.webp` | Les 18 expressions de chacun des 9 coachs |
| `logo.webp` | Le logo Hustle |
| `manifest.webmanifest` | Nom, icône et couleurs de l'appli installée |
| `sw.js` | Service worker : hors connexion et notifications |
| `icons/` | Icônes de l'écran d'accueil |
| `exos/` | Images d'exemple des exercices, regroupées en 8 planches (`a0.webp` à `a7.webp`) et photos de couverture HD des programmes (`c0.webp` à `c5.webp`) |
| `fonts/` | Polices Inter, Poppins et Barlow Condensed, hébergées avec l'appli |
| `vendor/leaflet/` | Librairie d'affichage de la carte |

## Crédits

- Photos des exercices : [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), domaine public (Unlicense)
- Carte : © contributeurs [OpenStreetMap](https://www.openstreetmap.org/copyright) (ODbL), affichage avec [Leaflet](https://leafletjs.com) (BSD-2)
- Polices : Inter, Poppins et Barlow Condensed (SIL Open Font License)
