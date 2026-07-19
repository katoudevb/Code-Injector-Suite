import type { Section } from "../types";

export const developpementWeb: Section = {
  id: "developpement-web",
  title: "Développement web — Architecture & Environnement",
  icon: "Layers",
  tags: ["js", "ts"],
  subsections: [
    {
      id: "dw-gestion-donnees-json",
      title: "Gestion des données JSON",
      blocks: [
        { type: "p", text: "Format de données léger pour stocker et échanger des informations." },
        { type: "h", text: "1. Fichiers de données locales (données isolées)" },
        {
          type: "diagram",
          content: `src/
└── components/
    └── UserList/
        ├── data.json
        └── UserList.js`,
        },
        { type: "h", text: "2. Fichiers de données globales (données partagées)" },
        {
          type: "diagram",
          content: `src/
├── data/
│   └── data.json
└── components/
    └── UserList/
        └── UserList.jsx`,
        },
      ],
    },
    {
      id: "dw-application-spa",
      title: "Application SPA",
      blocks: [
        { type: "p", text: "Application web qui fonctionne sur une seule page HTML et met à jour le contenu dynamiquement avec JavaScript, sans recharger la page." },
        { type: "h", text: "Schéma de fonctionnement" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                    APPLICATION SPA                   │
│                                                      │
│  Utilisateur                                         │
│      │                                               │
│      ▼                                               │
│  [ Navigateur ] ──── 1 seul chargement HTML ────►   │
│      │                                               │
│      ▼                                               │
│  [ JavaScript ]                                      │
│      ├── fetch / AJAX ──► Communication serveur      │
│      ├── History API  ──► Changer URL sans reload    │
│      └── DOM          ──► MAJ du contenu             │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: ["Requêtes HTTP en JS (fetch, AJAX)", "MAJ du DOM", "Navigation dynamique"] },
        { type: "h", text: "Technologies utilisées" },
        { type: "table", headers: ["Technologie", "Rôle"], rows: [
          ["JavaScript", "Logiques et interactions"],
          ["fetch / AJAX", "Communication avec le serveur"],
          ["History API", "Changer URL sans rechargement"],
          ["DOM", "MAJ du contenu"],
        ]},
        { type: "h", text: "Avantages / Inconvénients" },
        { type: "table", headers: ["Avantages", "Inconvénients"], rows: [
          ["Navigation rapide", "Plus complexe à développer"],
          ["Meilleure UX", "Gestion SEO plus difficile"],
          ["Moins de rechargements", "Dépend fortement de JS"],
        ]},
        { type: "h", text: "Mise en place" },
        { type: "list", items: ["Développer à la main", "Avec framework (React, Vue, Angular)"] },
      ],
    },
    {
      id: "dw-architecture-logicielle-backend",
      title: "Architecture logicielle (back-end)",
      blocks: [
        { type: "p", text: "Manière d'organisation d'une application, en définissant ses composants, leurs rôles et la façon dont il communique entre eux." },
        { type: "h", text: "Principe" },
        { type: "list", items: [
          "Séparations des préoccupations",
          "Chaque module = 1 responsabilité",
          "Couplage faible / Cohésion forte",
          "Code maintenable et testable",
        ]},
        { type: "h", text: "Architecture 3 tiers (back-end)" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────┐
│          ARCHITECTURE 3 TIERS             │
├───────────────────────────────────────────┤
│  1. PRÉSENTATION                          │
│     ├── Routes                            │
│     ├── Controllers                       │
│     └── Views (si utilisées)             │
├───────────────────────────────────────────┤
│  2. LOGIQUE MÉTIER                        │
│     ├── Services                          │
│     └── Middlewares                       │
├───────────────────────────────────────────┤
│  3. DONNÉES                               │
│     ├── Models (structures)               │
│     └── Data access (base de données)    │
└───────────────────────────────────────────┘`,
        },
        { type: "h", text: "Architecture Pub/Sub (back-end)" },
        { type: "p", text: "Les composants communiquent via des événements, sans dépendre directement les uns des autres." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│            ARCHITECTURE PUB / SUB           │
│                                             │
│  [ Émetteur / EventEmitter ]                │
│          │                                  │
│          │  déclenche un événement          │
│          ▼                                  │
│  ┌───────────────────────────────────┐      │
│  │         CANAL D'ÉVÉNEMENTS        │      │
│  └───────────────────────────────────┘      │
│          │                                  │
│    ┌─────┴──────┐                           │
│    ▼            ▼                           │
│ [Listener 1] [Listener 2]  réagissent       │
└─────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Principe :" },
        { type: "list", items: [
          "Découpler fonctionnalités et modules",
          "Séparer responsabilités dès la conception",
          "Améliorer scalabilité de l'application",
          "Architecture plus flexible et évolutive",
        ]},
      ],
    },
    {
      id: "dw-structure-projet-node-express",
      title: "Structure d'un projet Node.js Express",
      blocks: [
        { type: "p", text: "Organisation des fichiers et dossiers qui permet de séparer les responsabilités du code et rendre l'application plus maintenable et évolutive." },
        {
          type: "diagram",
          content: `/project-root
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── repositories/   (ou "repos")
│   ├── middlewares/
│   └── app.js
│
├── node_modules/
├── package.json
└── package-lock.json`,
        },
      ],
    },
    {
      id: "dw-couche-de-service",
      title: "Couche de service",
      blocks: [
        { type: "p", text: "Contient la logique métier de l'application, indépendante de la couche HTTP." },
        { type: "h", text: "Principe" },
        { type: "list", items: [
          "Séparation entre logique métier et couche HTTP",
          "Le service ne dépend pas d'Express",
          "Le service ne manipule pas req / res",
          "Contient la logique métier uniquement",
        ]},
        { type: "h", text: "Utilisation" },
        { type: "list", items: [
          "Centralise la logique métier",
          "Évite de dupliquer le code dans les controllers",
          "Facilite la réutilisation des fonctions",
          "Rend le code plus testable et maintenable",
        ]},
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│               FLUX COUCHE DE SERVICE         │
│                                              │
│  [ Route ] → [ Controller ] → [ Service ]   │
│                                    │         │
│                               Logique métier │
│                                    │         │
│                              [ Model / DB ]  │
└──────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "dw-config-env-macos",
      title: "Configuration environnement de développement (macOS)",
      blocks: [
        { type: "h", text: "1. Sécurité macOS (installation bloquée)" },
        { type: "p", text: "Lors de l'installation d'outils externes, macOS peut bloquer certaines applications." },
        { type: "p", text: "Déblocage :" },
        { type: "list", items: [
          "Réglages système → Confidentialité et sécurité",
          "Descendre dans la section Sécurité",
          "Cliquer sur \"Ouvrir quand même\"",
        ]},
        { type: "h", text: "2. Installation du gestionnaire de paquets : Homebrew" },
        { type: "p", text: "Homebrew est un outil essentiel sur macOS. Il permet d'installer facilement des logiciels via le terminal. Installation : commande officielle à copier depuis https://brew.sh" },
        { type: "h", text: "3. Outils essentiels installés avec Homebrew" },
        { type: "code", filename: "install-git.sh", language: "bash", code: `brew install git` },
        { type: "code", filename: "install-php.sh", language: "bash", code: `brew install php` },
        { type: "code", filename: "install-composer.sh", language: "bash", code: `brew install composer` },
        { type: "code", filename: "install-symfony.sh", language: "bash", code: `brew install symfony-cli/tap/symfony-cli` },
        { type: "code", filename: "install-node.sh", language: "bash", code: `brew install node` },
        { type: "code", filename: "install-python.sh", language: "bash", code: `brew install python` },
        { type: "code", filename: "install-mysql.sh", language: "bash", code: `brew install mysql` },
        { type: "p", text: "Gestion du service MySQL :" },
        { type: "code", filename: "mysql-service.sh", language: "bash", code: `brew services start mysql
brew services stop mysql` },
        { type: "h", text: "4. Commandes de terminal utiles" },
        { type: "p", text: "Créer un dossier :" },
        { type: "code", filename: "mkdir.sh", language: "bash", code: `mkdir -p ~/Documents/Projects` },
        { type: "p", text: "Aller dans un dossier :" },
        { type: "code", filename: "cd.sh", language: "bash", code: `cd ~/Documents/Projects` },
        { type: "h", text: "5. Trouver une adresse IP avec ping" },
        { type: "p", text: "IPv4 :" },
        { type: "code", filename: "ping-ipv4.sh", language: "bash", code: `ping domaine.com` },
        { type: "p", text: "IPv6 :" },
        { type: "code", filename: "ping-ipv6.sh", language: "bash", code: `# macOS
ping6 domaine.com

# Windows
ping -6 domaine.com` },
      ],
    },
    {
      id: "dw-methode-developpement-cycle",
      title: "Méthode de développement (cycle de projet)",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│           CYCLE DE DÉVELOPPEMENT                     │
│                                                      │
│  1 ──► Formaliser le besoin client                   │
│  2 ──► Analyse du problème                           │
│  3 ──► Formaliser une solution                       │
│  4 ──► Pseudo-code                                   │
│  5 ──► Validation logique                            │
│  6 ──► Transcription en code                         │
│  7 ──► Tests                                         │
│  8 ──► Intégration                                   │
│  9 ──► Itérations et améliorations                   │
│  10 ──► Documentation                               │
│  11 ──► Relecture                                    │
│  12 ──► Livraison                                    │
│  13 ──► Maintenance                                  │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Formaliser le besoin client" },
        { type: "list", items: [
          "Analyser les besoins en détail",
          "Poser des questions au client",
          "Collecter des informations du terrain",
          "Étudier le contexte du projet",
          "Faire une synthèse des recherches",
        ]},
        { type: "h", text: "2. Analyse du problème" },
        { type: "list", items: [
          "Décomposer le problème en sous-problèmes (modules / fonctions)",
          "Identifier les fonctionnalités principales",
          "Définir les contraintes techniques",
        ]},
        { type: "h", text: "3. Formaliser une solution" },
        { type: "list", items: [
          "Étudier les solutions existantes",
          "Choisir les outils et technologies (HTML, CSS, JS, etc.)",
          "Adapter la solution au contexte du projet",
          "Tenir compte : de la complexité, des fonctionnalités, des utilisateurs",
        ]},
        { type: "h", text: "4. Pseudo-code" },
        { type: "list", items: ["SI / ALORS / SINON", "TANT QUE", "POUR"] },
        { type: "h", text: "5. Validation logique" },
        { type: "list", items: ["Relire le pseudo-code", "Vérifier la cohérence", "Corriger les erreurs logiques"] },
        { type: "h", text: "6. Transcription en code" },
        { type: "list", items: ["Traduire le pseudo-code en langage réel (JavaScript, Python, etc.)"] },
        { type: "h", text: "7. Tests" },
        { type: "p", text: "Types :" },
        { type: "list", items: ["Tests unitaires (chaque fonction)", "Tests globaux (application complète)"] },
        { type: "h", text: "8. Intégration" },
        { type: "list", items: ["Assemblage des modules", "Vérification du bon fonctionnement global"] },
        { type: "h", text: "9. Itérations et améliorations" },
        { type: "list", items: ["Corriger les erreurs", "Améliorer le code", "Ajuster le pseudo-code si nécessaire"] },
        { type: "h", text: "10. Documentation" },
        { type: "list", items: ["Commentaires dans le code", "README", "Explication du projet"] },
        { type: "h", text: "11. Relecture" },
        { type: "list", items: ["Par un collègue ou l'équipe", "Vérification qualité + compréhension"] },
        { type: "h", text: "12. Livraison (livrable)" },
        { type: "p", text: "Contenu possible :" },
        { type: "list", items: [
          "Contexte du projet",
          "Résumé des besoins",
          "Technologies utilisées",
          "Maquettes / schémas",
          "Résultats des tests",
          "Liste des fichiers",
          "Documentation",
        ]},
        { type: "h", text: "13. Maintenance" },
        { type: "list", items: ["Corrections après livraison", "Améliorations futures", "Suivi des bugs"] },
      ],
    },
    {
      id: "dw-licences-open-source",
      title: "Types de licences Open Source",
      blocks: [
        { type: "h", text: "1. Copyleft" },
        { type: "list", items: ["Autorise : utiliser, modifier, redistribuer", "Obligation : conserver la même licence d'origine"] },
        { type: "h", text: "2. Licences permissives" },
        { type: "list", items: [
          "Très peu de contraintes",
          "Utilisation libre (même commerciale)",
          "Peut être réutilisée dans des logiciels propriétaires",
        ]},
        { type: "h", text: "Choix d'une licence" },
        { type: "p", text: "Critères :" },
        { type: "list", items: [
          "Sécurité du code",
          "Besoin de contrôle ou non",
          "Souhait de partage obligatoire ou non",
          "Utilisation commerciale possible",
          "Niveau de liberté voulu",
        ]},
        { type: "h", text: "Open Source — Avantages / Inconvénients" },
        { type: "table", headers: ["Avantages", "Inconvénients"], rows: [
          ["💰 Coût faible ou gratuit", "⚙️ Complexité parfois élevée"],
          ["🔧 Grande flexibilité", "🔐 Risques de sécurité si mal maintenu"],
          ["👀 Transparence du code", "📞 Support technique limité"],
          ["📈 Pérennité (communauté active)", "🎨 Ergonomie parfois variable"],
          ["", "📦 Multiples versions possibles"],
          ["", "⚠️ Pas toujours de garantie officielle"],
        ]},
        { type: "h", text: "Systèmes d'exploitation Open Source" },
        { type: "p", text: "Évolution historique :" },
        {
          type: "diagram",
          content: `Multics ──► UNIX ──► BSD ──► Minix ──► Linux`,
        },
        { type: "p", text: "Linux est aujourd'hui le système open source le plus utilisé." },
      ],
    },
    {
      id: "dw-architecture-logicielle-generale",
      title: "Architecture logicielle (monolithique, modulaire, MVC…)",
      blocks: [
        { type: "p", text: "L'architecture logicielle décrit comment un système est conçu, comment il est organisé, comment ses composants communiquent, et comment il est déployé. Elle définit la structure globale d'une application." },
        { type: "h", text: "Architecture monolithique" },
        { type: "p", text: "Un système construit en un seul bloc contenant toutes les fonctionnalités." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│         ARCHITECTURE MONOLITHIQUE    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  UI + Logique + Données      │    │
│  │  (tout dans un seul bloc)    │    │
│  └──────────────────────────────┘    │
│                                      │
│  ❌ Difficile à maintenir            │
│  ❌ Difficile à faire évoluer        │
│  ❌ Toute modification = impact total│
│  ❌ Si une partie tombe → tout tombe │
└──────────────────────────────────────┘`,
        },
        { type: "h", text: "Architecture modulaire" },
        { type: "p", text: "Application découpée en modules indépendants." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│         ARCHITECTURE MODULAIRE           │
│                                          │
│  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ Module A │  │ Module B │  │Module C│ │
│  └──────────┘  └──────────┘  └────────┘ │
│       │              │            │      │
│       └──────────────┴────────────┘      │
│                  Interface               │
│                                          │
│  ✅ Code plus lisible                    │
│  ✅ Debug plus simple                    │
│  ✅ Réutilisation facile                 │
│  ✅ Ajout de fonctionnalités simplifié   │
│  ✅ Meilleure testabilité                │
│  ✅ Isolation des composants             │
└──────────────────────────────────────────┘`,
        },
        { type: "p", text: "Caractéristiques :" },
        { type: "list", items: ["Code séparé en petites parties", "Modules réutilisables", "Fonctionnement indépendant ou combiné"] },
        { type: "h", text: "Architecture MVC (Model View Controller)" },
        { type: "p", text: "Sépare une application en 3 parties :" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────┐
│              ARCHITECTURE MVC                 │
│                                               │
│   Utilisateur                                 │
│       │                                       │
│       ▼                                       │
│  ┌──────────┐     ┌──────────────┐            │
│  │   VIEW   │◄────│  CONTROLLER  │            │
│  │          │     │              │            │
│  │Interface │     │ Fait le lien │            │
│  │utilisateur    │ Gère logique │            │
│  └──────────┘     └──────┬───────┘            │
│                          │                    │
│                          ▼                    │
│                   ┌────────────┐              │
│                   │   MODEL    │              │
│                   │            │              │
│                   │Gère données│              │
│                   │Accès BDD   │              │
│                   └────────────┘              │
└───────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Framework" },
        { type: "p", text: "Un framework est une structure prête à l'emploi pour développer une application." },
        { type: "p", text: "Avantages :" },
        { type: "list", items: [
          "Rapide à utiliser",
          "Standardise le code",
          "Documentation et communauté",
          "Sécurisé et fiable",
          "Bonne performance",
        ]},
        { type: "p", text: "Versions (Semantic Versioning) :" },
        { type: "table", headers: ["Type", "Format", "Description"], rows: [
          ["MAJOR", "6.X.X", "Gros changements (incompatibilités)"],
          ["MINOR", "X.0.X", "Nouvelles fonctionnalités"],
          ["PATCH", "X.X.2", "Corrections de bugs"],
          ["LTS", "—", "Version stable longue durée"],
          ["STANDARD", "—", "Dernière nouveauté / petit projet"],
        ]},
        { type: "h", text: "Architecture imbriquée / modulaire" },
        { type: "list", items: [
          "Modules organisés en sous-modules",
          "Favorise la séparation des responsabilités",
          "Améliore la maintenance et la réutilisation",
        ]},
        { type: "h", text: "Architecture client / serveur" },
        { type: "p", text: "Communication entre un client et un serveur via requêtes/réponses." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│          ARCHITECTURE CLIENT / SERVEUR          │
│                                                 │
│  ┌───────────────┐       ┌───────────────┐      │
│  │    CLIENT     │──────►│    SERVEUR    │      │
│  │               │  HTTP │               │      │
│  │ Navigateur ou │  req  │ Traite les    │      │
│  │ application   │◄──────│ requêtes      │      │
│  │               │  res  │ Retourne      │      │
│  └───────────────┘       │ une réponse   │      │
│                          └───────────────┘      │
└─────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Avantages :" },
        { type: "list", items: ["Sécurité centralisée", "Technologies matures", "Client léger", "Gestion centralisée des données"] },
        { type: "p", text: "Inconvénients :" },
        { type: "list", items: ["Panne serveur = système inutilisable", "Coût élevé de maintenance", "Surcharge possible du serveur"] },
        { type: "h", text: "Architectures principales" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  2 TIERS                             │
│  Client + Serveur sur même système                   │
│  Tout est centralisé côté serveur                    │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                  3 TIERS                             │
│  1. Front-end       (interface utilisateur)          │
│  2. Serveur appli   (logique)                        │
│  3. Base de données (stockage)                       │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                  N-TIERS                             │
│  Extension du modèle 3 tiers                         │
│  Plusieurs serveurs spécialisés                      │
│  Utilisé pour grandes applications                   │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Autres architectures" },
        { type: "list", items: ["Event-driven (orientée événements)", "SOA (services)", "Microservices / modulaire avancé"] },
      ],
    },
    {
      id: "dw-environnement-developpement-wamp",
      title: "Environnement de développement (WAMP)",
      blocks: [
        { type: "h", text: "La pile WAMP" },
        { type: "p", text: "WAMP est un environnement de développement web local composé de :" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│              PILE WAMP               │
├──────────────────────────────────────┤
│  🖥  Apache  ──► Serveur web         │
│  🗄  MySQL   ──► Base de données     │
│  🐘  PHP     ──► Langage serveur     │
└──────────────────────────────────────┘`,
        },
        { type: "p", text: "Intérêt de WAMP :" },
        { type: "list", items: [
          "Installation simple d'un environnement complet",
          "Permet de développer un site web en local",
          "Accès à phpMyAdmin (interface graphique pour MySQL)",
          "Test rapide sans serveur en ligne",
          "Tout est installé automatiquement dans un seul package",
        ]},
        { type: "p", text: "phpMyAdmin :" },
        { type: "list", items: [
          "Interface web pour gérer MySQL",
          "Accessible via un navigateur",
          "Permet de créer, modifier et gérer les bases de données",
        ]},
      ],
    },
    {
      id: "dw-types-serveurs",
      title: "Types de serveurs",
      blocks: [
        { type: "table", headers: ["Type", "Description", "Exemples"], rows: [
          ["Serveur Web", "Fournit des pages web (HTTP/HTTPS)", "Apache, Nginx"],
          ["Serveur d'applications", "Exécute la logique métier", "—"],
          ["Serveur de base de données", "Stocke et gère les données", "MySQL, PostgreSQL"],
          ["Serveur de fichiers", "Stocke et partage des fichiers réseau", "—"],
          ["Serveur de messagerie", "Gère envoi/réception emails", "—"],
          ["Serveur DNS", "Traduit noms de domaine en IP", "—"],
          ["Serveur Proxy", "Intermédiaire (filtrage, sécurité, cache)", "—"],
          ["Serveur Cache", "Stockage temporaire, accélère l'accès", "—"],
          ["FTP / SFTP", "Transfert de fichiers (SFTP = sécurisé)", "—"],
          ["Serveur d'impression", "Gère les impressions réseau", "—"],
          ["Serveur Cloud / virtuel", "Ressources hébergées à distance", "—"],
        ]},
      ],
    },
    {
      id: "dw-types-cloud",
      title: "Types de Cloud",
      blocks: [
        { type: "p", text: "Le cloud computing permet d'accéder à des services informatiques via Internet, comme des applications, du stockage ou des serveurs." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────┐
│              TYPES DE CLOUD                        │
│                                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │   PUBLIC    │  │   PRIVÉ     │  │  HYBRIDE   │ │
│  ├─────────────┤  ├─────────────┤  ├────────────┤ │
│  │ Accessible  │  │ Dédié à une │  │ Public +   │ │
│  │ via Internet│  │ seule org.  │  │ Privé      │ │
│  │             │  │             │  │            │ │
│  │ Plusieurs   │  │ Accès limité│  │ Données    │ │
│  │ utilisateurs│  │ et sécurisé │  │ réparties  │ │
│  │             │  │             │  │ selon      │ │
│  │ Flexible et │  │ Usage       │  │ sensibilité│ │
│  │ économique  │  │ entreprise  │  │            │ │
│  └─────────────┘  └─────────────┘  └────────────┘ │
└────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "dw-site-vitrine",
      title: "Site Vitrine",
      blocks: [
        { type: "h", text: "Créer un site vitrine" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│           ÉTAPES DE CRÉATION — SITE VITRINE          │
│                                                      │
│  1. Préparation du projet                            │
│     ├── Objectif clair du site                       │
│     ├── Nom de domaine cohérent                       │
│     ├── Hébergement adapté                           │
│     └── Choix du CMS performant                      │
│                                                      │
│  2. Structure et design                              │
│     ├── Arborescence logique des pages               │
│     ├── Maquette (wireframe / design)                │
│     └── Charte graphique et typographie              │
│                                                      │
│  3. Développement                                    │
│     ├── Installation locale                          │
│     ├── Intégration des contenus (textes, images…)  │
│     └── Mise en place des fonctionnalités            │
│                                                      │
│  4. Optimisation                                     │
│     ├── Optimisation SEO                             │
│     ├── Responsive design (mobile-first)             │
│     └── Performance du site                          │
│                                                      │
│  5. Mise en ligne                                    │
│     ├── Mise en ligne sécurisée                      │
│     └── Configuration du serveur / domaine           │
│                                                      │
│  6. Maintenance                                      │
│     ├── Suivi post-production                        │
│     ├── Sauvegardes régulières                       │
│     └── Mises à jour                                 │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Structure minimale d'un site vitrine" },
        { type: "p", text: "La structure minimale d'un site vitrine correspond aux pages essentielles nécessaires pour présenter une activité et être conforme (légal + UX)." },
        { type: "p", text: "Pages indispensables :" },
        { type: "table", headers: ["Page", "Description"], rows: [
          ["Accueil", "Présentation globale du site / entreprise"],
          ["Contact", "Formulaire + coordonnées"],
          ["À propos", "Présentation de l'entreprise / personne"],
          ["Mentions légales", "Obligations juridiques"],
          ["Politique de confidentialité", "Gestion des données personnelles (RGPD)"],
        ]},
        { type: "p", text: "Pages supplémentaires (recommandées / selon besoin) :" },
        { type: "table", headers: ["Page", "Description"], rows: [
          ["À propos (détaillée)", "Équipe, histoire, valeurs"],
          ["Services", "Description des prestations / offres"],
          ["CGV / CGU", "Conditions générales (obligatoires selon activité, surtout e-commerce)"],
          ["Erreur 404", "Page personnalisée en cas de lien cassé"],
          ["Membres / espace client", "Accès réservé (optionnel selon projet)"],
          ["Archives / filtres", "Organisation des contenus (blog, catégories, tri…)"],
        ]},
        { type: "h", text: "Conception d'un site web" },
        { type: "p", text: "La conception d'un site web consiste à réfléchir et organiser la création d'un site, en prenant en compte les aspects techniques, visuels et fonctionnels." },
        { type: "p", text: "1. Développement :" },
        { type: "list", items: ["Création côté front-end (interface utilisateur)", "Création côté back-end (serveur, base de données)"] },
        { type: "p", text: "2. Formats et supports :" },
        { type: "list", items: ["Site web", "Application mobile", "Web app"] },
        { type: "p", text: "3. Compatibilité :" },
        { type: "list", items: ["Responsive design (adaptation mobile / tablette / desktop)", "Compatibilité navigateurs"] },
      ],
    },
    {
      id: "dw-serveur-apache-htaccess",
      title: "Serveur Apache — Configuration .htaccess",
      blocks: [
        { type: "h", text: "Configuration .htaccess pour redirection HTTP → HTTPS" },
        { type: "p", text: "1. Ajouter au début du fichier .htaccess :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `# Activer le module rewrite
RewriteEngine On

# Vérifier si HTTPS est désactivé
RewriteCond %{HTTPS} off

# Rediriger vers HTTPS
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]` },
        { type: "p", text: "Conditions importantes :" },
        { type: "list", items: [
          "Un certificat SSL valide doit être installé (ex : via Let's Encrypt)",
          "Le module mod_rewrite doit être activé sur Apache (a2enmod rewrite puis restart Apache)",
          "Le fichier .htaccess doit être autorisé (AllowOverride All dans Apache)",
        ]},
        { type: "p", text: "Vérification rapide :" },
        { type: "list", items: [
          "Taper http://tonsite.com → doit rediriger vers https://tonsite.com",
          "Vérifier dans le navigateur : cadenas affiché",
        ]},
        { type: "h", text: "Désactiver l'exploration des dossiers (Apache)" },
        { type: "p", text: "Par défaut, si aucun fichier index (comme index.php ou index.html) n'est présent dans un dossier, le serveur Apache peut afficher la liste des fichiers. C'est une faille de sécurité (on expose la structure du site)." },
        { type: "p", text: "1. Ajouter dans le fichier .htaccess à la racine :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `# Désactiver l'affichage du contenu des répertoires
Options -Indexes` },
        { type: "table", headers: ["Directive", "Effet"], rows: [
          ["Options -Indexes", "Désactive l'exploration des dossiers (recommandé)"],
          ["Options All -Indexes", "Active toutes les options puis retire Indexes (inutile et risqué)"],
        ]},
        { type: "note", variant: "info", text: "En pratique, utiliser uniquement Options -Indexes." },
        { type: "p", text: "Bonne pratique supplémentaire — ajouter un index.html dans chaque dossier sensible :" },
        { type: "code", filename: "index.html", language: "html", code: `<!DOCTYPE html>
<html>
<head>
  <title>Accès interdit</title>
</head>
<body>
  <h1>403 - Accès interdit</h1>
</body>
</html>` },
        { type: "h", text: "Empêcher le hotlinking" },
        { type: "p", text: "Le hotlinking consiste à afficher tes images sur d'autres sites en utilisant directement leur URL (sans les héberger). Ta bande passante est consommée gratuitement par d'autres." },
        { type: "p", text: "1. Avec .htaccess :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `# Activer le module de réécriture
RewriteEngine On

# Autoriser les requêtes sans referer (accès direct)
RewriteCond %{HTTP_REFERER} !^$

# Autoriser ton propre domaine
RewriteCond %{HTTP_REFERER} !^https?://(www\\.)?exemple\\.com [NC]

# Bloquer les autres domaines pour les images
RewriteRule \\.(jpg|jpeg|png|gif|webp)$ - [F,NC,L]` },
        { type: "p", text: "2. Variante — afficher une image à la place :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `RewriteRule \\.(jpg|jpeg|png|gif|webp)$ /images/no-hotlink.jpg [R,NC,L]` },
        { type: "p", text: "Points importants :" },
        { type: "list", items: [
          "Vérifier que le module Apache mod_rewrite est activé",
          "Le referer peut être absent ou falsifié → protection utile mais pas parfaite",
          "Penser à autoriser : ton domaine principal, éventuellement ton CDN ou sous-domaines",
        ]},
        { type: "p", text: "Autoriser plusieurs domaines :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `RewriteCond %{HTTP_REFERER} !^https?://(www\\.)?(exemple\\.com|cdn\\.exemple\\.com) [NC]` },
        { type: "code", filename: ".htaccess", language: "apache", code: `RewriteCond %{HTTP_REFERER} !^https?://(www\\.)?(exemple\\.com|cdn\\.exemple\\.com) [NC]` },
        { type: "h", text: "Contrôle d'accès avec .htaccess" },
        { type: "p", text: "1. Autoriser tout le monde :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require all granted` },
        { type: "p", text: "2. Bloquer une adresse IP :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require not ip 93.23.147.236` },
        { type: "p", text: "3. Bloquer plusieurs IP :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require not ip 93.23.147.236
Require not ip 192.168.1.10` },
        { type: "p", text: "4. Interdire l'accès à tout le monde :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require all denied` },
        { type: "p", text: "5. Autoriser uniquement UNE IP :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require ip 123.45.67.89` },
        { type: "p", text: "6. Autoriser plusieurs IP :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require ip 123.45.67.89
Require ip 98.76.54.32` },
        { type: "p", text: "7. Bloquer l'accès à un fichier précis :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `<Files "nom_du_fichier.extension">
    Require all denied
</Files>` },
        { type: "p", text: "8. Bloquer un dossier entier :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `<Directory "/chemin/vers/dossier">
    Require all denied
</Directory>` },
        { type: "note", variant: "warning", text: "Parfois <Directory> ne fonctionne pas dans .htaccess selon la configuration du serveur." },
        { type: "p", text: "Alternative :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `RewriteEngine On
RewriteRule ^dossier/ - [F,L]` },
        { type: "p", text: "9. Bloquer un pays :" },
        { type: "note", variant: "warning", text: "En réalité, ça ne marche pas vraiment pour bloquer un pays. Il faut soit une base GeoIP, soit un service externe (Cloudflare, firewall…)." },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require not ip .fr` },
        { type: "p", text: "10. Interdire tout sauf UNE IP :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require all denied
Require ip 123.45.67.89` },
        { type: "p", text: "Ancienne version (Apache 2.2 — à éviter) — pour les vieux serveurs :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Order Deny,Allow
Deny from all
Allow from 123.45.67.89` },
        { type: "h", text: "Fonctionnalités fichier .htaccess" },
        { type: "p", text: "Le fichier .htaccess est un fichier de configuration utilisé par le serveur web Apache HTTP Server." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│              FICHIER .htaccess                         │
│                                                        │
│  Caractéristiques :                                    │
│  • Caché (fichier commençant par un point)             │
│  • Placé généralement à la racine du site              │
│  • Gère la sécurité et le comportement du serveur      │
│                                                        │
│  Portée et multiplicité :                              │
│  • Peut exister à la racine ET dans chaque sous-dossier│
│  • Agit LOCALEMENT sur son répertoire et sous-dossiers │
└────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "1. Réécriture d'URL — URLs dynamiques → URLs propres (SEO) :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `RewriteEngine On
RewriteRule ^produit/(.*)$ produit.php?id=$1` },
        { type: "p", text: "2. Redirections :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Redirect 301 /ancienne-page.html /nouvelle-page.html` },
        { type: "p", text: "3. Protection de contenu :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Options -Indexes` },
        { type: "p", text: "4. Restriction / bannissement d'IP :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require not ip 93.23.147.236` },
        { type: "p", text: "5. Contrôle d'accès :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `Require all denied
# OU
Require ip 123.45.67.89` },
        { type: "p", text: "6. Pages d'erreur personnalisées :" },
        { type: "code", filename: ".htaccess", language: "apache", code: `ErrorDocument 404 /404.html
ErrorDocument 403 /403.html` },
        { type: "h", text: "Risques et précautions" },
        { type: "note", variant: "warning", text: "Une mauvaise configuration peut bloquer tout le site ou générer une erreur 500 Internal Server Error." },
        { type: "list", items: [
          "Toujours sauvegarder avant modification",
          "Tester après chaque changement",
          "Éviter les directives obsolètes",
        ]},
      ],
    },
  ],
};
