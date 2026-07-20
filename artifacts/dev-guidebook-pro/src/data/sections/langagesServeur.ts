import type { Section } from "../types";

export const langagesServeur: Section = {
  id: "langages-serveur",
  title: "Langages serveur & Architecture",
  icon: "Server",
  tags: ["php", "js", "python"],
  subsections: [
    {
      id: "ls-architecture-serveur-web",
      title: "Architecture d'un serveur Web",
      blocks: [
        { type: "p", text: "L'architecture serveur fait référence à la structure et à l'organisation des composants qui constituent un serveur Web. Ces composants travaillent ensemble pour traiter les requêtes des utilisateurs et fournir les réponses appropriées." },
        { type: "p", text: "L'architecture serveur comprend le matériel, le système d'exploitation, les logiciels serveur (HTTP, application) et les bases de données. Une architecture serveur bien conçue assure la fiabilité, la scalabilité et la performance de l'application Web." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                  SERVEUR WEB COMPLET                     │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────┐  │
│  │  SERVEUR HTTP  │  │  SERVEUR APP   │  │    BDD    │  │
│  │                │  │                │  │           │  │
│  │ Apache / Nginx │  │ Node.js / PHP  │  │ MySQL     │  │
│  │ IIS            │  │ Python / Ruby  │  │ PostgreSQL│  │
│  │                │  │ Java           │  │ MongoDB   │  │
│  │ Gère requêtes  │  │ Logique métier │  │ CRUD      │  │
│  │ Redirections   │  │ Sessions       │  │ Transactions│ │
│  │ Erreurs HTTP   │  │ Interactions   │  │ Indexation│  │
│  └────────────────┘  └────────────────┘  └───────────┘  │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Serveur HTTP" },
        { type: "list", items: [
          "Rôle : gérer les requêtes HTTP provenant des clients (navigateurs Web) et fournir des réponses appropriées",
          "Exemples : Apache, Nginx, IIS",
          "Fonctionnalités : gestion des requêtes, redirections, gestion des erreurs",
        ]},
        { type: "h", text: "Serveur d'application" },
        { type: "list", items: [
          "Rôle : exécuter les scripts nécessaires pour générer des pages web dynamiques",
          "Exemples : Node.js (JavaScript), PHP, Python avec Django ou Flask, Ruby avec Rails, Java avec Spring Boot",
          "Fonctionnalités : logique métier, gestion des sessions, interactions avec la base de données",
        ]},
        { type: "h", text: "Base de données" },
        { type: "list", items: [
          "Rôle : stocker, servir et gérer les données nécessaires à l'application",
          "SQL : bases de données relationnelles (MySQL, PostgreSQL, Oracle…)",
          "NoSQL : bases de données non relationnelles (MongoDB, Redis, Cassandra…)",
          "Fonctionnalités : CRUD (Create, Read, Update, Delete), transactions, indexation",
        ]},
        { type: "h", text: "Scalabilité" },
        { type: "p", text: "La scalabilité d'un serveur désigne sa capacité à gérer une augmentation de la charge de travail ou du volume de données sans compromettre ses performances." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│              TYPES DE SCALABILITÉ             │
├───────────────────────┬──────────────────────┤
│  HORIZONTALE          │  VERTICALE           │
├───────────────────────┼──────────────────────┤
│  Ajouter plus de      │  Ajouter des         │
│  serveurs pour        │  ressources (CPU,    │
│  partager la charge   │  mémoire) à un       │
│                       │  serveur existant    │
│  [S1] [S2] [S3]       │  [S1 → CPU++]        │
└───────────────────────┴──────────────────────┘`,
        },
      ],
    },
    {
      id: "ls-securite-serveurs",
      title: "Sécurité des serveurs",
      blocks: [
        { type: "p", text: "La sécurité des serveurs est cruciale pour protéger les données et les services contre les attaques, les intrusions et les pertes de données." },
        { type: "list", items: [
          "Contrôle d'accès — limiter l'accès aux serveurs aux utilisateurs autorisés, utiliser MFA et clés SSH",
          "Mises à jour et correctifs — maintenir le système d'exploitation et les applications à jour",
          "Pare-feu et filtres — configurer des pare-feux et utiliser des ACL (Access Control Lists)",
          "Chiffrement — utiliser SSL/TLS pour les données en transit, chiffrement de disque et de BDD",
          "Surveillance et journalisation — systèmes de surveillance et journaux d'audit",
          "Segmentation du réseau — diviser le réseau en segments, utiliser des zones DMZ",
          "Protection contre les malwares — logiciels antivirus et anti-malware, scans réguliers",
          "Configuration sécurisée — suivre les meilleures pratiques, désactiver les services inutiles",
          "Sauvegardes régulières — effectuer des sauvegardes et tester les procédures de restauration",
          "Tests de sécurité — tests de pénétration et audits de sécurité",
          "Formation des utilisateurs — former les administrateurs à reconnaître les menaces",
          "Politiques de sécurité — établir des politiques de sécurité claires",
        ]},
        { type: "note", variant: "info", text: "Ces mesures combinées forment une approche de défense en profondeur, réduisant les risques et protégeant les serveurs contre une variété de menaces." },
      ],
    },
    {
      id: "ls-fonctionnement-http-https",
      title: "Fonctionnement d'un serveur Web — Protocoles HTTP et HTTPS",
      blocks: [
        { type: "p", text: "Le protocole HTTP (Hypertext Transfer Protocol) et sa version sécurisée HTTPS sont les fondations du World Wide Web." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│               FLUX HTTP / HTTPS                          │
│                                                          │
│  [CLIENT / Navigateur]                                   │
│         │                                                │
│         │  1. Requête HTTP                               │
│         │  (méthode + URL + en-têtes + corps)            │
│         ▼                                                │
│  [SERVEUR WEB]                                           │
│         │                                                │
│         │  2. Réponse HTTP                               │
│         │  (code statut + en-têtes + corps)              │
│         ▼                                                │
│  [CLIENT reçoit HTML / JSON / images…]                   │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Principales méthodes HTTP" },
        { type: "table", headers: ["Méthode", "Description"], rows: [
          ["GET", "Récupérer des données du serveur (ne modifie pas)"],
          ["POST", "Envoyer des données pour créer une nouvelle ressource"],
          ["PUT", "Modifier entièrement une ressource existante"],
          ["PATCH", "Modifier partiellement une ressource existante"],
          ["DELETE", "Supprimer une ressource du serveur"],
          ["HEAD", "Identique à GET mais sans le corps de réponse"],
          ["OPTIONS", "Demander les méthodes HTTP prises en charge"],
        ]},
        { type: "h", text: "Codes de statut HTTP" },
        { type: "table", headers: ["Classe", "Signification", "Exemples"], rows: [
          ["1xx", "Informational — Requête reçue", "100 Continue"],
          ["2xx", "Success — Requête acceptée", "200 OK"],
          ["3xx", "Redirection", "301 Moved Permanently, 302 Found"],
          ["4xx", "Client Error", "400 Bad Request, 404 Not Found"],
          ["5xx", "Server Error", "500 Internal Server Error"],
        ]},
        { type: "h", text: "HTTPS" },
        { type: "p", text: "HTTPS utilise SSL (Secure Sockets Layer) ou TLS (Transport Layer Security) pour chiffrer les communications." },
        { type: "p", text: "Fonctionnement de base : établissement de la connexion sécurisée (handshake SSL/TLS avec échange de clés cryptographiques), puis communication sécurisée (données chiffrées, empêchant les tiers de les lire ou altérer)." },
        { type: "h", text: "Avantages de HTTPS" },
        { type: "list", items: [
          "Confidentialité — données chiffrées, illisibles par des tiers",
          "Intégrité — données non modifiables pendant le transfert sans détection",
          "Authentification — certificats SSL/TLS délivrés par des autorités de certification (CA)",
        ]},
      ],
    },
    {
      id: "ls-architecture-logicielle-modeles",
      title: "Architecture logicielle — Modèles courants",
      blocks: [
        { type: "p", text: "L'architecture logicielle définit la structure globale d'une application, y compris ses composants et leurs interactions." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│                COMPARAISON DES ARCHITECTURES                 │
├──────────────────┬───────────────────────────────────────────┤
│  MONOLITHIQUE    │  Application unique contenant tout        │
│                  │  ✅ Simplicité, développement rapide       │
│                  │  ❌ Difficile à maintenir et faire évoluer │
├──────────────────┼───────────────────────────────────────────┤
│  MICROSERVICES   │  Services indépendants déployés séparément│
│                  │  ✅ Flexible, scalable, maintenance facile │
│                  │  ❌ Complexe à gérer, besoin d'orchestration│
├──────────────────┼───────────────────────────────────────────┤
│  SERVERLESS      │  Fonctions dans le cloud                  │
│                  │  ✅ Gestion simplifiée, coûts initiaux bas │
│                  │  ❌ Complexité de gestion, debug difficile │
└──────────────────┴───────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "ls-introduction-langages-serveur",
      title: "Introduction aux langages serveur",
      blocks: [
        { type: "p", text: "Les langages serveur gèrent les requêtes des clients, manipulent les bases de données, et génèrent des réponses dynamiques. Contrairement aux langages front-end (HTML, CSS, JS) exécutés dans le navigateur, les langages serveur sont exécutés sur le serveur et renvoient des réponses prétraitées." },
        { type: "h", text: "Critères de choix" },
        { type: "list", items: [
          "Performances — capacité à gérer de nombreuses requêtes simultanément",
          "Scalabilité — facilité de croissance en nombre d'utilisateurs et de données",
          "Communauté et support — disponibilité de ressources et documentation",
        ]},
      ],
    },
    {
      id: "ls-php",
      title: "PHP — Langage populaire",
      blocks: [
        { type: "p", text: "Historique : créé en 1994 par Rasmus Lerdorf. Conçu pour les pages web dynamiques. Très utilisé dans les CMS (WordPress, Drupal, Joomla)." },
        { type: "p", text: "Outils et environnements : XAMPP, WAMP, MAMP. Frameworks : Laravel, Symfony." },
        { type: "code", filename: "boucle.php", language: "php", code: `// Affiche les nombres de 1 à 10
for ($i = 1; $i <= 10; $i++) {
    echo $i . "\\n";
}` },
      ],
    },
    {
      id: "ls-nodejs",
      title: "Node.js — JavaScript côté serveur",
      blocks: [
        { type: "p", text: "Historique : créé par Ryan Dahl en 2009. Basé sur le moteur V8 de Google. Modèle d'entrée/sortie non-bloquant et événementiel." },
        { type: "p", text: "Gestionnaire de paquets : npm (Node Package Manager). Framework populaire : Express.js." },
        { type: "code", filename: "boucle.js", language: "jsx", code: `// Affiche les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}` },
        { type: "h", text: "JavaScript Client vs Serveur" },
        { type: "table", headers: ["Aspect", "Client-side (navigateur)", "Server-side (Node.js)"], rows: [
          ["Environnement", "Navigateur web", "Serveur (Node.js)"],
          ["Fonctionnalités", "DOM, formulaires, animations, AJAX", "Requêtes HTTP, BDD, sessions, logique métier"],
          ["Sécurité", "Exposé aux utilisateurs", "Protégé sur le serveur"],
          ["Limitations", "Dépend du navigateur/appareil", "Dépend des ressources serveur"],
          ["Outils", "jQuery, React, Angular, Vue.js", "Express.js, MongoDB, PostgreSQL"],
        ]},
        { type: "h", text: "Utilisation complémentaire" },
        { type: "list", items: [
          "Architecture full-stack : MERN (MongoDB, Express, React, Node) ou MEAN (MongoDB, Express, Angular, Node)",
          "Communication via requêtes HTTP ou WebSockets pour le temps réel",
        ]},
      ],
    },
    {
      id: "ls-python-web",
      title: "Python pour le développement Web",
      blocks: [
        { type: "p", text: "Apprécié pour sa syntaxe claire et concise, ses nombreuses bibliothèques." },
        { type: "code", filename: "boucle.py", language: "python", code: `# Affiche les nombres de 1 à 10
for i in range(1, 11):
    print(i)` },
        { type: "p", text: "Framework Django : créé en 2005. Framework de haut niveau, développement rapide, design propre." },
        { type: "p", text: "Framework Flask : micro-framework léger, simple et flexible. Plus de liberté au développeur." },
      ],
    },
    {
      id: "ls-ruby-rails",
      title: "Ruby et Ruby on Rails",
      blocks: [
        { type: "p", text: "Ruby : langage dynamique orienté objet, créé par Yukihiro Matsumoto en 1995. Syntaxe élégante." },
        { type: "p", text: "Framework Ruby on Rails : philosophie \"Convention over Configuration\" et principe DRY (Don't Repeat Yourself)." },
        { type: "code", filename: "boucle.rb", language: "ruby", code: `# Affiche les nombres de 1 à 10
(1..10).each do |i|
    puts i
end` },
      ],
    },
    {
      id: "ls-java",
      title: "Java pour le développement Web",
      blocks: [
        { type: "p", text: "Java : développé par Sun Microsystems (Oracle) en 1995. Portabilité \"Write Once, Run Anywhere\", robustesse, sécurité. Très utilisé en entreprise." },
        { type: "code", filename: "Main.java", language: "java", code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}` },
        { type: "p", text: "Framework Spring : infrastructure complète pour le développement Java. Spring Boot simplifie la création avec des configurations par défaut." },
      ],
    },
    {
      id: "ls-comparaison-langages",
      title: "Comparaison des langages serveur",
      blocks: [
        { type: "table", headers: ["Langage", "Performance", "Scalabilité", "Facilité d'apprentissage", "Communauté et support"], rows: [
          ["PHP", "Bonne", "Moyenne", "Facile", "Très bonne"],
          ["Node.js", "Excellente", "Excellente", "Moyenne", "Très bonne"],
          ["Python", "Bonne", "Bonne", "Très facile", "Excellente"],
          ["Ruby", "Bonne", "Moyenne", "Moyenne", "Bonne"],
          ["Java", "Excellente", "Excellente", "Moyenne", "Excellente"],
        ]},
        { type: "h", text: "Cas d'utilisation typiques" },
        { type: "table", headers: ["Langage", "Cas d'utilisation"], rows: [
          ["PHP", "Petits à moyens projets web, CMS, blogs"],
          ["Node.js", "Applications temps réel, APIs, requêtes I/O intensives"],
          ["Python", "Analyse de données, applications scientifiques, plateformes éducatives"],
          ["Ruby", "Startups, développement rapide"],
          ["Java", "Grandes entreprises, applications bancaires, haute sécurité"],
        ]},
      ],
    },
    {
      id: "ls-design-patterns",
      title: "Design Patterns",
      blocks: [
        { type: "p", text: "Un design pattern (patron de conception) est une solution réutilisable à un problème récurrent dans un contexte donné de conception logicielle." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: [
          "Réutilisabilité — solutions réutilisables pour des problèmes courants",
          "Abstraction — abstraction à un niveau supérieur pour comprendre des concepts complexes",
          "Normalisation — langage commun pour les développeurs",
        ]},
        { type: "h", text: "Catégories principales" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│                  CATÉGORIES DE DESIGN PATTERNS              │
├──────────────────┬──────────────────────────────────────────┤
│  CRÉATIONNELS    │  Création d'objets, réduction de         │
│                  │  complexité, flexibilité                 │
│                  │  Ex: Singleton, Factory Method,          │
│                  │  Abstract Factory, Builder, Prototype    │
├──────────────────┼──────────────────────────────────────────┤
│  STRUCTURELS     │  Composition de classes/objets           │
│                  │  Ex: Adapter, Composite, Decorator,      │
│                  │  Facade, Proxy                           │
├──────────────────┼──────────────────────────────────────────┤
│  COMPORTEMENTAUX │  Interactions entre objets               │
│                  │  Ex: Observer, Strategy, Command,        │
│                  │  Iterator, State                         │
└──────────────────┴──────────────────────────────────────────┘`,
        },
        { type: "h", text: "Avantages des design patterns" },
        { type: "list", items: [
          "Efficacité — réduisent le temps de résolution de problèmes",
          "Compréhension — améliorent la lisibilité du code",
          "Maintenance — facilitent la maintenance et l'évolution",
          "Flexibilité — permettent d'adapter facilement le code aux changements",
        ]},
        { type: "note", variant: "info", title: "Ressource", text: "https://refactoring.guru/fr/design-patterns" },
      ],
    },
  ],
};
