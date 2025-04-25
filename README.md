# Mario Party Jamboree 🎉

Bienvenue dans **Mario Party Jamboree**, une application interactive et ludique permettant de tirer des cartes aléatoires avec des animations et des sons !

## Fonctionnalités principales 🚀
- Tirage aléatoire de cartes depuis une base de données.
- Animations fluides à l'aide de `Animated` de React Native.
- Sons interactifs pour améliorer l'expérience utilisateur.
- Chargement de polices personnalisées avec `expo-font`.

---

## Prérequis 📋

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- [Node.js](https://nodejs.org/) (version 16 ou plus recommandée)
- [Expo CLI](https://expo.dev/) (globalement via `npm install -g expo-cli`)
- Git pour cloner le projet.

---

## Installation 💻

1. **Cloner le dépôt**
   git clone https://github.com/Mounirou19/projetMario.git
   cd projetMario/

2. **Installer les dépendances**
    npm install

3. **Configurer Expo**
    - Lancer la commande : npx expo start -c
    - Installez l'application Expo Go sur votre appareil mobile (iOS ou Android).
    - Connectez votre appareil au même réseau que votre ordinateur.

4. **Démarrer le projet**
    - Depuis votre pc, vous rendre sur le lien suivant : http://localhost:8081/

    - Depuis votre mobile, scannez le QR code affiché dans le terminal avec Expo Go pour lancer l'application sur votre téléphone.

---

## Structure du projet 📂

.
├── assets/              # Polices personnalisées et fichiers multimédia
│   ├── fonts/           # Polices (e.g., ShinGo.ttf)
│   ├── sounds/          # Sons (e.g., card-sound.mp3) (À mettre si vous en avez envie)
├── src/                 # Code source principal
│   ├── components/      # Composants réutilisables (e.g., CardDisplay, RandomizerButton)
│   ├── data/            # Données statiques (e.g., cartes JSON)
├── App.js               # Point d'entrée principal de l'application
├── package.json         # Fichier de gestion des dépendances
├── README.md            # Documentation du projet

---

## Dépendances principales 🛠️

- React Native : Framework pour créer des applications mobiles.

- Expo : Outils pour simplifier le développement avec React Native.

- expo-font : Gestionnaire de polices personnalisées.

- expo-av : Pour la gestion des sons.

- Animated : Gestion des animations.

---

## Problèmes connus 🐛

* Si l'application ne se charge pas correctement, vérifiez les versions des dépendances avec : npx expo install --check

* Assurez-vous que votre appareil et votre ordinateur sont sur le même réseau pour utiliser Expo Go.

---

## Fonctionnalités principales 🚀

Voici les fonctionnalités que propose **Mario Party Jamboree** :

### 🎴 Tirage aléatoire de cartes
- Permet de sélectionner une carte au hasard parmi une liste de parcours de jeu.
- Chaque carte affiche un design unique, une description et une icône représentative.

### 🎨 Animations fluides
- Les cartes s'affichent avec une animation de fondu élégante.
- Une transition fluide améliore l'expérience utilisateur à chaque interaction.

### 🖋️ Police personnalisée
- L'application utilise une police unique (**ShinGo**) pour donner une touche visuelle unique.

### 📱 Compatible avec tous les appareils
- Fonctionne sur les appareils Android, iOS et les navigateurs web grâce à Expo.
- Interface intuitive adaptée à une utilisation mobile.

### 🛠️ Architecture modulaire
- Composants réutilisables comme `CardDisplay` et `RandomizerButton` pour un code propre et évolutif.

### 🌟 Design attrayant
- Palette de couleurs vives et conviviales pour refléter l'esprit festif de Mario Party.
- Mise en page optimisée pour toutes les tailles d'écran.