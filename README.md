# Carnet de Muscu

Application web de suivi de musculation, installable sur iPhone comme une appli.

- 15 séances prédéfinies, modifiables et duplicables
- Séance en cours : chrono, saisie poids / reps, minuteur de repos automatique avec son
- Historique, calendrier, série de jours, graphiques et records par exercice
- Poids de corps et mensurations
- Calculateurs : 1RM et disques sur la barre
- kg / lb, export et import des données (JSON)
- Fonctionne hors connexion

Les données restent sur l'appareil (stockage du navigateur). Aucune donnée n'est envoyée sur internet.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt public sur github.com (par exemple `carnet-muscu`).
2. Envoie tous les fichiers de ce dossier à la racine du dépôt (`Add file` → `Upload files`).
3. Va dans `Settings` → `Pages`, choisis `Deploy from a branch`, branche `main`, dossier `/ (root)`, puis `Save`.
4. Après une à deux minutes, le site est en ligne à l'adresse `https://<ton-pseudo>.github.io/carnet-muscu/`.

## Installer sur iPhone

1. Ouvre l'adresse dans **Safari**.
2. Bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.

L'appli s'ouvre alors en plein écran, avec sa propre icône, même sans connexion.

## Mettre à jour

Remplace `index.html` dans le dépôt, puis change le numéro de version dans `sw.js`
(`carnet-muscu-v1` → `carnet-muscu-v2`) pour que les téléphones reçoivent la nouvelle version.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (HTML, CSS, JavaScript) |
| `manifest.webmanifest` | Nom, icône et couleurs de l'appli installée |
| `sw.js` | Service worker : fonctionnement hors connexion |
| `icons/` | Icônes de l'écran d'accueil |
