import type { Section } from "../types";

export const outilsDev: Section = {
  id: "outils-dev",
  title: "Outils de développement",
  icon: "Hammer",
  tags: ["ts"],
  subsections: [
    {
      id: "outils-looping-retroconception",
      title: "Looping — Rétroconception (MCD / MLD / UML)",
      blocks: [
        { type: "p", text: "La rétroconception consiste à analyser une base de données existante (souvent un fichier SQL) afin de reconstruire sa structure : MCD (Modèle Conceptuel de Données), MLD (Modèle Logique de Données), parfois UML (diagramme de classes)." },
        { type: "h", text: "1. Export de la base" },
        { type: "list", items: ["Exporter la base en fichier .sql", "via phpMyAdmin ou outil équivalent"] },
        { type: "h", text: "2. Préparation du fichier" },
        { type: "list", items: [
          "Convertir en .txt si nécessaire",
          "Nettoyer le fichier : garder les CREATE TABLE, garder les clés primaires et étrangères, supprimer le superflu",
        ]},
        { type: "h", text: "3. Rétroconception" },
        { type: "list", items: [
          "Importer le fichier dans Looping",
          "Le logiciel reconstruit automatiquement : les tables, les relations, les cardinalités",
        ]},
      ],
    },
    {
      id: "outils-looping-mcd",
      title: "Looping — MCD (Modèle Conceptuel de Données)",
      blocks: [
        { type: "p", text: "Niveau conceptuel (haut niveau) : Entités (ex : Client, Produit), Associations (ex : Acheter), Cardinalités (1, N, 0..1)" },
        {
          type: "diagram",
          content: `        ┌──────────┐          ┌──────────┐
        │  CLIENT  │──────────│  Acheter │──────────┐
        │    id    │  1,N     │          │  0,N     │
        │   nom    │          └──────────┘          │
        └──────────┘                                │
                                            ┌───────────┐
                                            │  PRODUIT  │
                                            │    id     │
                                            │   titre   │
                                            └───────────┘`,
        },
      ],
    },
    {
      id: "outils-looping-mld",
      title: "Looping — MLD (Modèle Logique de Données)",
      blocks: [
        { type: "p", text: "Traduction du MCD vers une structure relationnelle : Tables, Clés primaires (PK), Clés étrangères (FK)" },
        { type: "p", text: "Exemple de schéma MLD :" },
        {
          type: "diagram",
          content: `┌─────────────────────┐         ┌─────────────────────┐
│     certification   │         │        course        │
│  id (PK)            │         │  id (PK)             │
│  updated_by         │         │  created_by          │
│  obtained_at        │◄────────│  updated_by          │
│  created_at         │  1,n    │  title               │
│  updated_at         │         │  price               │
└─────────────────────┘         │  description         │
         │                      │  created_at          │
         │ 1,n                  │  updated_at          │
┌────────▼────────────┐         └──────────┬───────────┘
│       user          │                    │ 1,1
│  id (PK)            │                    │
│  created_by         │         ┌──────────▼──────────┐
│  updated_by         │         │        theme         │
│  email              │         │  id (PK)             │
│  roles              │         │  created_by          │
│  password           │         │  updated_by          │
│  is_verified        │         │  name                │
│  created_at         │         │  created_at          │
│  updated_at         │         │  updated_at          │
└─────────────────────┘         └──────────┬───────────┘
                                           │ 1,n
                                ┌──────────▼──────────┐
                                │        lesson        │
                                │  id (PK)             │
                                │  created_by          │
                                │  updated_by          │
                                │  title               │
                                │  price               │
                                │  content             │
                                │  video_url           │
                                │  created_at          │
                                │  updated_at          │
                                └──────────┬───────────┘
                                           │
                                ┌──────────▼──────────┐
                                │       purchase       │
                                │  id (PK)             │
                                │  created_by          │
                                │  updated_by          │
                                │  amount              │
                                │  created_at          │
                                │  updated_at          │
                                └─────────────────────┘`,
        },
        { type: "p", text: "Exemple de notation MLD :" },
        { type: "list", items: ["CLIENT(id_client, nom)", "COMMANDE(id_commande, id_client)"] },
      ],
    },
    {
      id: "outils-looping-uml",
      title: "Looping — UML (Diagramme de classes)",
      blocks: [
        { type: "p", text: "Vision orientée objet : Classes, Attributs, Relations (association, héritage). Exemple : Client, Commande, Produit. Très utilisé en POO (Java, PHP, Python)." },
        {
          type: "diagram",
          content: `┌──────────────────┐           ┌──────────────────┐
│    + course      │           │  + certification  │
│ + id             │           │ + id              │
│ + created_by     │◄──────────│ + updated_by      │
│ + updated_by     │  1..*     │ + obtained_at     │
│ + title          │           │ + created_at      │
│ + price          │           │ + updated_at      │
│ + description    │           └──────────────────┘
│ + created_at     │
│ + updated_at     │           ┌──────────────────┐
└────────┬─────────┘           │    + user_       │
         │                     │ + id             │
         │ 1                   │ + created_by     │
┌────────▼─────────┐           │ + updated_by     │
│    + theme       │           │ + email          │
│ + id             │           │ + roles          │
│ + created_by     │           │ + password       │
│ + updated_by     │           │ + is_verified    │
│ + name           │           │ + created_at     │
│ + created_at     │           │ + updated_at     │
│ + updated_at     │           └──────────────────┘
└────────┬─────────┘
         │ 1..*
┌────────▼─────────┐           ┌──────────────────┐
│    + lesson      │           │   + purchase     │
│ + id             │──────────►│ + id             │
│ + created_by     │   *    1  │ + created_by     │
│ + updated_by     │           │ + updated_by     │
│ + title          │           │ + amount         │
│ + price          │           │ + created_at     │
│ + content        │           │ + updated_at     │
│ + video_url      │           └──────────────────┘
│ + created_at     │
│ + updated_at     │
└──────────────────┘`,
        },
      ],
    },
    {
      id: "outils-ide",
      title: "IDE — Locaux et en ligne",
      blocks: [
        { type: "h", text: "IDE Locaux" },
        { type: "table", headers: ["IDE", "Usage principal"], rows: [
          ["WebStorm", "JavaScript / TypeScript"],
          ["PhpStorm", "PHP"],
          ["IntelliJ", "Java / multi-langage"],
          ["PyCharm", "Python"],
          ["Visual Studio Code", "Multi-langage (généraliste)"],
        ]},
        { type: "h", text: "IDE en ligne" },
        { type: "table", headers: ["IDE en ligne", "Usage"], rows: [
          ["JSFiddle", "Tester du HTML / CSS / JavaScript — Idéal pour petits tests rapides"],
          ["CodePen", "Plateforme de prototypage front-end — Très utilisé pour HTML / CSS / animation"],
          ["StackBlitz", "IDE en ligne complet — Permet de créer de vrais projets web (Angular, React, etc.)"],
          ["CodeSandbox", "IDE en ligne complet avec export GitHub"],
        ]},
        { type: "h", text: "Visual Studio Code — Raccourcis" },
        { type: "table", headers: ["Raccourci", "Action"], rows: [
          ["⌘O", "Ouvre un nouveau dossier projet"],
          ["📁 +", "Créer un nouveau dossier dans le projet"],
          ["⌘N", "Créer un nouveau fichier"],
          ["⌘S", "Sauvegarde un fichier modifié"],
        ]},
        { type: "h", text: "PyCharm (IDE Python)" },
        { type: "p", text: "Environnement de développement (IDE) utilisé pour programmer en Python. Il permet de créer des projets, écrire du code et exécuter des scripts." },
        { type: "p", text: "1. Création d'un projet :" },
        { type: "list", items: ['Cliquer sur "New Project"', "Créer un script de bienvenue (optionnel)", 'Valider avec "Create"'] },
        { type: "p", text: "2. Création d'un fichier Python :" },
        { type: "list", items: [
          "Clic droit sur le dossier du projet",
          'Sélectionner "New → Python File"',
          "Nommer le fichier",
          "Écrire les instructions Python",
        ]},
        { type: "p", text: "3. Installation (MacOS) :" },
        { type: "list", items: [
          "Télécharger PyCharm",
          "Ouvrir le fichier",
          "Glisser l'application dans le dossier Applications",
          "Lancer PyCharm",
          "Configurer l'IDE si besoin",
        ]},
        { type: "h", text: "Codesandbox" },
        { type: "p", text: "Codesandbox est un éditeur de code en ligne permettant de créer et tester des projets web directement dans le navigateur. Il peut être relié à GitHub pour gérer le versioning et le stockage du code." },
        { type: "p", text: "1. Depuis Codesandbox :" },
        { type: "list", items: [
          "Ouvrir le projet sur Codesandbox",
          'Cliquer sur "Export to GitHub"',
          'Choisir "Create repository"',
          "Donner un nom au repository",
          "Choisir la visibilité (public / privé)",
          "Créer le repository",
          "Supprimer le fichier README.md si nécessaire",
          "Recréer ou modifier le README.md",
        ]},
        { type: "p", text: "2. Sur GitHub :" },
        { type: "list", items: [
          "Compléter le fichier README.md",
          "Ajouter la description du projet",
          "Structurer les informations du projet",
        ]},
      ],
    },
    {
      id: "outils-monitoring-sentry",
      title: "Monitoring — Sentry (workflow)",
      blocks: [
        { type: "p", text: "Sentry est un outil qui permet de détecter, analyser et suivre les erreurs dans une application web ou mobile." },
        {
          type: "diagram",
          content: `[ Application web/mobile ]
         |
      Erreur détectée
         |
      [ Sentry ]
         |
   ┌─────┴─────┐
   │  Issues   │
   │  Analyse  │
   │  Suivi    │
   └───────────┘`,
        },
        { type: "h", text: "1. Accès au projet" },
        { type: "list", items: ["Connexion à Sentry", "Sélection du projet"] },
        { type: "h", text: "2. Gestion des erreurs (issues)" },
        { type: "list", items: ["Aller dans Issues (problèmes)", "Utiliser les filtres avancés", "Rechercher une erreur précise", "Ouvrir une issue"] },
        { type: "h", text: "3. Analyse" },
        { type: "list", items: ["Voir les détails de l'erreur", "Comprendre le contexte", "Suivre les logs et commentaires"] },
        { type: "h", text: "4. Suivi" },
        { type: "list", items: ["Ajouter des commentaires", "Marquer comme résolu", "Suivre l'évolution du bug"] },
      ],
    },
    {
      id: "outils-wamp",
      title: "Serveurs locaux — WAMP",
      blocks: [
        { type: "p", text: "WAMP est un outil qui permet de créer un serveur web local sur Windows pour développer et tester des sites web." },
        { type: "h", text: "Installation / dépannage WAMP" },
        { type: "p", text: "Problème courant : WAMP ne démarre pas ou plante à l'installation" },
        { type: "p", text: "Solution :" },
        { type: "list", items: [
          "1. Désinstaller WAMP",
          "2. Installer les dépendances Microsoft Visual C++ : https://aka.ms/vs/16/release/VC_redist.x64.exe et https://aka.ms/vs/16/release/VC_redist.x86.exe",
        ]},
      ],
    },
    {
      id: "outils-homebrew",
      title: "Gestionnaire de paquets — Homebrew",
      blocks: [
        { type: "p", text: "Homebrew est un gestionnaire de paquets pour macOS qui permet d'installer facilement des outils de développement via le terminal." },
        { type: "h", text: "1. Prérequis" },
        { type: "list", items: ["Installer Xcode (ou Command Line Tools)"] },
        { type: "h", text: "2. Installation via terminal" },
        { type: "code", filename: "terminal", language: "bash", code: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` },
        { type: "h", text: "3. Configuration du PATH — Ajouter Homebrew au système" },
        { type: "code", filename: "terminal", language: "bash", code: `echo >> /Users/bricotteaux/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/bricotteaux/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"` },
        { type: "h", text: "4. Vérification" },
        { type: "code", filename: "terminal", language: "bash", code: `brew -v` },
        { type: "h", text: "5. Installation de Git (Mac avec Homebrew)" },
        { type: "code", filename: "terminal", language: "bash", code: `brew install git

# Vérification
git --version` },
        { type: "h", text: "Mettre à jour Homebrew" },
        { type: "code", filename: "terminal", language: "bash", code: `brew update` },
        { type: "h", text: "Installer NVM" },
        { type: "code", filename: "terminal", language: "bash", code: `brew install nvm` },
      ],
    },
    {
      id: "outils-shell",
      title: "Shell",
      blocks: [
        { type: "h", text: "Connaître son shell" },
        { type: "code", filename: "terminal", language: "bash", code: `echo $SHELL` },
        { type: "h", text: "Interprétation" },
        { type: "table", headers: ["Résultat", "Shell"], rows: [
          ["/bin/zsh", "Shell Zsh (par défaut sur macOS récent)"],
          ["/bin/bash", "Shell Bash"],
        ]},
      ],
    },
    {
      id: "outils-local-wordpress",
      title: "Environnements locaux — Local (WordPress)",
      blocks: [
        { type: "p", text: "Local est un outil de développement WordPress qui permet de créer et tester un site WordPress en local sur son ordinateur." },
        { type: "h", text: "1. Installation" },
        { type: "list", items: ["Télécharger Local selon ton OS", '"Installer just for me" (utilisateur local)', "Lancer l'application"] },
        { type: "h", text: "2. Fonctionnalités principales" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────┐
│              LOCAL APP                │
├──────────────┬────────────────────────┤
│ WP Admin     │ Connexion interface WP │
├──────────────┼────────────────────────┤
│ Site folder  │ Accès aux fichiers     │
├──────────────┼────────────────────────┤
│ Site shell   │ Terminal intégré       │
├──────────────┼────────────────────────┤
│ Overview     │ Paramètres généraux    │
├──────────────┼────────────────────────┤
│ Base de      │ Accès via Adminer/Neo  │
│ données      │ Gestion de la BDD      │
├──────────────┼────────────────────────┤
│ Tools        │ Live links / Mailpit   │
└──────────────┴────────────────────────┘`,
        },
        { type: "list", items: [
          "Live links → exposer le site en ligne temporairement",
          "Mailpit → tester les emails envoyés par le site",
        ]},
      ],
    },
    {
      id: "outils-devtools-detail",
      title: "DevTools (navigateur) — Vue d'ensemble complète",
      blocks: [
        { type: "p", text: "Les DevTools sont des outils intégrés au navigateur permettant de déboguer, analyser et optimiser un site web en temps réel." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│                      DEVTOOLS                          │
├──────────────┬─────────────────────────────────────────┤
│ 1. Elements  │ Inspecter HTML/CSS, modifier en direct  │
├──────────────┼─────────────────────────────────────────┤
│ 2. Console   │ Erreurs JS, exécuter du code JS         │
├──────────────┼─────────────────────────────────────────┤
│ 3. Sources   │ Fichiers du site, breakpoints debug     │
├──────────────┼─────────────────────────────────────────┤
│ 4. Network   │ Requêtes API, fichiers chargés          │
├──────────────┼─────────────────────────────────────────┤
│ 5. Perf.     │ Temps de chargement, performances       │
├──────────────┼─────────────────────────────────────────┤
│ 6. Memory    │ Fuites mémoire                          │
├──────────────┼─────────────────────────────────────────┤
│ 7. Appli.    │ Cookies, LocalStorage, Cache/PWA        │
├──────────────┼─────────────────────────────────────────┤
│ 8. Security  │ HTTPS, Certificats, Contenu mixte       │
├──────────────┼─────────────────────────────────────────┤
│ 9. Lighthouse│ SEO, Performance, Accessibilité         │
├──────────────┼─────────────────────────────────────────┤
│ 10. Responsive│ Tester différents écrans               │
├──────────────┼─────────────────────────────────────────┤
│ 11. Coverage │ Code CSS/JS inutilisé                   │
├──────────────┼─────────────────────────────────────────┤
│ 12. Rendering│ GPU, Layout, Paint                      │
├──────────────┼─────────────────────────────────────────┤
│ 13. Issues   │ Problèmes de sécurité, Compatibilité    │
├──────────────┼─────────────────────────────────────────┤
│ 14. Web Vital│ LCP, FID, CLS                           │
└──────────────┴─────────────────────────────────────────┘`,
        },
        { type: "h", text: "Web Vitals (UX)" },
        { type: "list", items: ["LCP (Largest Contentful Paint)", "FID (First Input Delay)", "CLS (Cumulative Layout Shift)"] },
      ],
    },
    {
      id: "outils-formateur-code",
      title: "Formateur de code",
      blocks: [
        { type: "note", variant: "info", text: "Formate le code en HTML, CSS, JS… pour tout support de traitement de texte." },
        { type: "list", items: ["https://highlighted.codes/", "https://formatcode.app/"] },
      ],
    },
    {
      id: "outils-wine",
      title: "Wine — exécuter des applications Windows sur Mac/Linux",
      blocks: [
        { type: "p", text: "Wine permet d'exécuter des applications Windows sur Linux ou macOS." },
        { type: "h", text: "Installation via Homebrew" },
        { type: "code", filename: "install-wine.sh", language: "bash", code: `brew install --cask wine-stable` },
        { type: "h", text: "Configuration" },
        { type: "list", items: [
          "Ouvrir Finder → Applications, cliquer sur Wine",
          "Environnement applis → Créer une bouteille (\"+\") → renseigner \"Nom application\", \"Version Windows 10\" → Create (apparaît à gauche)",
        ]},
        { type: "h", text: "Ajouter / ouvrir une application" },
        { type: "list", items: [
          "Télécharger l'application (.exe) voulue, puis la déplacer dans le dossier \"Documents\" du Mac",
          "Dans Wine : \"Exécuter\", \"Documents\" → choisir le dossier ou l'application à ouvrir → \"Ouvrir\"",
        ]},
      ],
    },
  ],
};
