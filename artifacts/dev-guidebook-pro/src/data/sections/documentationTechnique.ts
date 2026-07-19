import type { Section } from "../types";

export const documentationTechnique: Section = {
  id: "documentation-technique",
  title: "Documentation technique",
  icon: "FileText",
  tags: ["js"],
  subsections: [
    {
      id: "doc-jsdoc",
      title: "JSDoc",
      blocks: [
        { type: "p", text: "Outil permettant d'écrire des commentaires structurés en JavaScript afin de générer automatiquement une documentation HTML." },
        { type: "h", text: "Commentaire sans paramètres" },
        { type: "code", filename: "start.js", language: "jsx", code: `/**
 * Lance l'application
 */
function start() {}` },
        { type: "h", text: "Commentaire avec paramètres" },
        { type: "code", filename: "show.js", language: "jsx", code: `/**
 * Affiche un message
 *@param{string} message
 */
function show(message) {}` },
        { type: "h", text: "Commentaire avec plusieurs paramètres et une valeur retournée" },
        { type: "code", filename: "add.js", language: "jsx", code: `/**
 * Additionne deux nombres
 *
 *@param{number} a - Le premier nombre
 *@param{number} b - Le deuxième nombre
 *@returns {number} - La somme de a et b
 */
function add(a, b) {}` },
      ],
    },
    {
      id: "doc-diaporama-projet",
      title: "Diaporama projet",
      blocks: [
        { type: "p", text: "Structure d'un diaporama de présentation de projet technique." },
        {
          type: "diagram",
          content: `[ 1. TITRE ]──────────────────────────────────────────
  • Nom du projet
  • Ton nom
  • Date
  • Formation / Contexte

[ 2. INTRODUCTION DU PROJET ]─────────────────────────
  • Contexte : pourquoi ce projet ?
  • Objectif général
  • Public / utilisateurs ciblés
  • Technologies principales utilisées (Angular, React, Symfony…)

[ 3. CDC / BESOINS ]──────────────────────────────────
  • Fonctionnalités attendues
  • Contraintes techniques et fonctionnelles
  • Spécifications particulières (SEO, RGPD, sécurité…)

[ 4. ARCHITECTURE PROJET ]────────────────────────────
  • Structure des dossiers / IDE / framework
  • Modules, composants, services (avec schéma si possible)
  • Diagrammes ou flux (relation BDD, API…)

[ 5. TECHNOLOGIES UTILISÉES ]─────────────────────────
  • Langages : HTML5, CSS3, JavaScript, PHP…
  • Frameworks / bibliothèques : Angular, React, Symfony, RxJS…
  • Base de données : MySQL, PostgreSQL, MongoDB…
  • Outils / Services : Git, GitHub, Docker, Mailtrap…
  • API externes ou internes utilisées

[ 6. FONCTIONNALITÉS DÉVELOPPÉES ]────────────────────
  • Liste clé : CRUD, routing, formulaires, authentification…
  • Captures d'écran ou courte démo
  • SEO implémenté : balises, structure, optimisation contenu
  • RGPD : collecte et consentement utilisateur, cookies, données sécurisées

[ 7. DÉFIS TECHNIQUES ]───────────────────────────────
  • Problèmes rencontrés (bugs, performance, sécurité…)
  • Solutions apportées
  • Limitations éventuelles

[ 8. SÉCURITÉ & PROTECTION ]──────────────────────────
  • Authentification / autorisations
  • Stockage sécurisé des données utilisateurs
  • Protection contre attaques (XSS, CSRF…)
  • Sauvegardes et restauration

[ 9. ACCESSIBILITÉ ET MOBILE ]────────────────────────
  • Responsive design / mobile first
  • Accessibilité (contrast, navigation clavier, lecteurs d'écran…)

[ 10. PERFORMANCE ET OPTIMISATION ]───────────────────
  • Temps de chargement
  • Lazy loading, compression images / scripts
  • Tests de performance (unitaires, fonctionnels…)

[ 11. RÉSULTATS OBTENUS ]─────────────────────────────
  • Capture de l'application
  • Fonctionnalités fonctionnelles
  • État du projet : terminé, MVP, en cours

[ 12. AMÉLIORATIONS FUTURES / PERSPECTIVES ]──────────
  • Fonctionnalités à ajouter
  • Optimisations techniques envisagées
  • SEO, RGPD et accessibilité à renforcer

[ 13. CONCLUSION ]────────────────────────────────────
  • Bilan personnel
  • Compétences acquises
  • Remerciement / Questions`,
        },
      ],
    },
    {
      id: "doc-readme",
      title: "README.md",
      blocks: [
        { type: "p", text: "Fichier de documentation principale d'un projet. Il contient des informations essentielles pour comprendre, installer, utiliser et maintenir le projet." },
        { type: "h", text: "Structure type d'un README" },
        { type: "code", filename: "README.md", language: "markdown", code: `# 🧠 Nom du projet

## 📖 Description
-À quoi sert le projet
-Problème résolu
-Contexte d'utilisation
-Public cible (utilisateurs)
- --

## ⚙️ Fonctionnalités principales
-Liste des fonctionnalités
-API REST intégrée
-Gestion des données
-Interface dynamique
-Authentification (si nécessaire)
- --

## 🛠 Technologies utilisée
-HTML, CSS, JavaScript
-React / Angular / Vue
-MongoDB
-Git, GitHub, npm
- --

## 📦 Prérequis
-Node.js installé
-npm ou yarn installé
-Git installé
-Base de données configurée
- --

## 🚀 Installation et utilisation
git clone https://github.com/nom-utilisateur/nom-projet.git
cd nom-projet
npm install
npm run dev

## Amélioration prévu (facultatif)
-Liste (ajouter dark mode,..)

## Auteur
-Kat- Développeuse web full stack
-Github : [@katoudevb] (https://github.com/katoudevb)
-Email : katoudevb@gmail.com` },
      ],
    },
    {
      id: "doc-guide-utilisateur-cms",
      title: "Guide utilisateur CMS",
      blocks: [
        { type: "p", text: "Le guide utilisateur est un document qui aide les clients ou utilisateurs à prendre en main un site ou une application, afin de les rendre autonomes dans son utilisation." },
        {
          type: "diagram",
          content: `[ GUIDE UTILISATEUR CMS — STRUCTURE ]

  1. Accès et navigation
     ├── Connexion à l'interface d'administration
     └── Navigation dans le back-office

  2. Gestion du contenu
     ├── Création et gestion de contenus (pages, articles…)
     └── Organisation et gestion des contenus

  3. Interactions et médias
     ├── Gestion des commentaires
     └── Utilisation de la bibliothèque de médias (images, vidéos…)

  4. Gestion des utilisateurs
     ├── Gestion des comptes utilisateurs
     └── Attribution des rôles et permissions

  5. Personnalisation
     ├── Modification du menu
     └── Personnalisation du thème`,
        },
      ],
    },
    {
      id: "doc-documenter-son-code",
      title: "Documenter son code",
      blocks: [
        { type: "p", text: "Documenter son code consiste à ajouter des explications pour faciliter la compréhension, la maintenance et la collaboration entre développeurs." },
        { type: "h", text: "Générateurs de documentation" },
        { type: "table", headers: ["Langage", "Outil"], rows: [
          ["Java", "Javadoc"],
          ["PHP", "phpDocumentor (phpDoc)"],
          ["JavaScript", "JSDoc"],
        ]},
        { type: "h", text: "Objectifs de la documentation" },
        { type: "list", items: [
          "Comprendre rapidement le code",
          "Faciliter la maintenance",
          "Aider les autres développeurs",
          "Générer une documentation automatique",
        ]},
        { type: "h", text: "Contenu typique" },
        { type: "list", items: [
          "Description des fonctions",
          "Paramètres (input)",
          "Valeurs de retour (output)",
          "Exemples d'utilisation",
        ]},
      ],
    },
    {
      id: "doc-redaction-contenu-utilisateur",
      title: "Rédaction d'un contenu utilisateur",
      blocks: [
        { type: "p", text: "La rédaction d'un contenu utilisateur consiste à créer des textes clairs, structurés et compréhensibles pour faciliter la lecture et l'utilisation d'un site ou d'un document." },
        { type: "h", text: "Bonnes pratiques de rédaction" },
        { type: "list", items: [
          "Utiliser des phrases courtes et claires",
          "Structurer le contenu (titres, sections, logique)",
          "Illustrer avec des visuels (captures d'écran, images)",
        ]},
        { type: "h", text: "Adaptation au public" },
        { type: "list", items: [
          "Adapter le niveau de langage à l'utilisateur",
          "Éviter le jargon technique inutile",
          "Simplifier les explications si nécessaire",
        ]},
        { type: "h", text: "Rédaction web (UX writing)" },
        { type: "list", items: [
          "Hiérarchiser l'information (titres H1, H2, H3…)",
          "Faciliter la lecture rapide (contenu scannable)",
          "Utiliser des titres courts et compréhensibles",
          "Structurer les informations de manière logique",
        ]},
        { type: "h", text: "Optimisation SEO (si contenu web)" },
        { type: "list", items: [
          "Utiliser des mots-clés pertinents et naturels",
          "Rédiger des méta-descriptions",
          "Structurer le contenu pour les moteurs de recherche",
        ]},
        { type: "h", text: "Relecture et validation" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│              PROCESSUS DE RELECTURE                 │
├──────────────────────┬──────────────────────────────┤
│  Relecture technique │  Relecture éditoriale        │
│  (collègue dev)      │                              │
├──────────────────────┼──────────────────────────────┤
│  • Vérifie la        │  • Correction orthographe    │
│    logique           │  • Correction grammaire      │
│  • Vérifie la        │  • Correction style          │
│    cohérence         │                              │
│  • Vérifie le        │                              │
│    contenu tech      │                              │
└──────────────────────┴──────────────────────────────┘`,
        },
        { type: "h", text: "Format de livraison" },
        { type: "list", items: [
          "Rédigé sur Word ou outil équivalent",
          "Exporté en PDF pour diffusion finale",
        ]},
      ],
    },
  ],
};
