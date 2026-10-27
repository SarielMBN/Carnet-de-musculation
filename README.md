# Hustle

Application web de suivi de musculation, installable sur iPhone comme une appli.

## Fonctionnalités

- 15 séances prédéfinies, modifiables et duplicables, planning de la semaine
- Séance en cours : chrono, saisie poids / reps, charge conseillée, minuteur de repos avec son, minuteur guidé (HIIT, gainage), mode salle
- Bouton « Exemple » : animation départ ↔ arrivée pour 60 exercices, et lien vers des vidéos
- Coach : personnage animé en bas à droite (18 expressions), conseils selon l'écran, dialogues à choix multiples sur l'entraînement, la nutrition, la récupération, la motivation et la sécurité
- Progrès : courbes, records, calendrier, historique, objectifs, badges, bilan du mois
- Image récapitulative à partager (séance, bilan du mois)
- Corps : poids, mensurations, photos avant / après (restent sur le téléphone)
- Calculateurs : 1RM, disques sur la barre, calories et protéines
- Hydratation, astuce du jour
- Carte des salles à proximité (Basic-Fit, On Air, Fitness Park)
- Écran d'accueil verrouillé par Face ID (optionnel, avec code de secours)
- Notifications de motivation (nécessite le serveur d'envoi, voir plus bas)
- Personnalisation : 6 couleurs, taille du texte, animations, coach
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
de version dans `sw.js` (`carnet-muscu-v9` → `carnet-muscu-v10`) pour que les téléphones reçoivent
la nouvelle version. Les données des utilisateurs ne sont pas touchées.

## Notifications

Le fichier `index.html` contient une ligne `const PUSH = { server: "", vapidKey: "" };`.
Elle sera remplie une fois le serveur d'envoi (Cloudflare) installé.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (HTML, CSS, JavaScript) |
| `coach.webp` | Les 18 expressions du coach homme, sur une seule image |
| `coach-f.webp` | Les 18 expressions de la coach femme |
| `manifest.webmanifest` | Nom, icône et couleurs de l'appli installée |
| `sw.js` | Service worker : hors connexion et notifications |
| `icons/` | Icônes de l'écran d'accueil |
| `exos/` | Images d'exemple des exercices (une image WebP par exercice) |
| `fonts/` | Polices Inter et Poppins, hébergées avec l'appli |
| `vendor/leaflet/` | Librairie d'affichage de la carte |

## Crédits

- Photos des exercices : [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), domaine public (Unlicense)
- Carte : © contributeurs [OpenStreetMap](https://www.openstreetmap.org/copyright) (ODbL), affichage avec [Leaflet](https://leafletjs.com) (BSD-2)
- Polices : Inter et Poppins (SIL Open Font License)
