import type { Section } from "../types";

export const glossaire: Section = {
  id: "glossaire",
  title: "Glossaire — Web, BDD, Design, Dev",
  icon: "BookMarked",
  tags: ["ts"],
  subsections: [
    {
      id: "gl-reglementation-donnees",
      title: "Réglementation & Données",
      blocks: [
        { type: "h", text: "RGPD (Règlement Général sur la Protection des Données)" },
        { type: "p", text: "Réglementation européenne qui vise à protéger les données personnelles des citoyens européens et à harmoniser les lois sur la protection des données entre les pays de l'Union européenne." },
        { type: "h", text: "Rôle du DPO (Data Protection Officer)" },
        { type: "p", text: "Personne chargée d'accompagner les organisations dans leur conformité au RGPD. Il veille à la bonne application des règles de protection des données." },
        { type: "h", text: "Big Data" },
        { type: "p", text: "Ensembles de données massives, variées et complexes, générées en continu (souvent via Internet), qui permettent d'analyser et de prédire des événements." },
        { type: "h", text: "Données personnelles" },
        { type: "p", text: "Informations permettant d'identifier une personne physique (nom, prénom, adresse, téléphone…)." },
        { type: "h", text: "Système d'Information (SI)" },
        { type: "p", text: "Ensemble des ressources (humaines, techniques, logicielles) permettant à une entreprise de gérer ses données." },
      ],
    },
    {
      id: "gl-internet-infrastructure",
      title: "Internet & Infrastructure",
      blocks: [
        { type: "h", text: "Internet" },
        { type: "p", text: "Réseau informatique public mondial permettant la communication et l'échange de données entre des millions d'ordinateurs." },
        { type: "h", text: "ICANN" },
        { type: "p", text: "Organisme international chargé d'attribuer les adresses IP et gérer les noms de domaine." },
        { type: "h", text: "Flux RSS" },
        { type: "p", text: "Système permettant de recevoir automatiquement les nouveaux contenus (articles, actualités) d'un site via une application ou un logiciel, sans avoir à visiter le site." },
        { type: "h", text: "Baie de serveurs" },
        { type: "p", text: "Structure permettant d'héberger plusieurs serveurs dans une salle informatique." },
        {
          type: "diagram",
          content: `┌─────────────────────────┐
│      BAIE DE SERVEURS   │
│  ┌───────────────────┐  │
│  │    Serveur 1      │  │
│  ├───────────────────┤  │
│  │    Serveur 2      │  │
│  ├───────────────────┤  │
│  │    Serveur 3      │  │
│  ├───────────────────┤  │
│  │    Serveur N...   │  │
│  └───────────────────┘  │
└─────────────────────────┘`,
        },
      ],
    },
    {
      id: "gl-composants-architecture",
      title: "Composants & Architecture Web",
      blocks: [
        { type: "h", text: "Composant" },
        { type: "p", text: "Élément autonome, réutilisable et indépendant, regroupant :" },
        {
          type: "diagram",
          content: `┌──────────────────────────┐
│        COMPOSANT         │
│  ┌────────────────────┐  │
│  │  Structure (HTML)  │  │
│  ├────────────────────┤  │
│  │  Style     (CSS)   │  │
│  ├────────────────────┤  │
│  │  Comportement (JS) │  │
│  └────────────────────┘  │
└──────────────────────────┘`,
        },
        { type: "h", text: "Composant web" },
        { type: "p", text: "Élément HTML personnalisé, encapsulé et réutilisable, utilisé pour créer des interfaces modulaires." },
        { type: "h", text: "Composant Vue" },
        { type: "p", text: "Élément réutilisable dans Vue.js regroupant HTML, CSS et JavaScript dans un fichier .vue." },
        { type: "h", text: "Fichier SFC (Single File Component)" },
        { type: "p", text: "Fichier utilisé avec Vue.js qui définit un composant dans un seul fichier .vue. Il regroupe :" },
        {
          type: "diagram",
          content: `┌─────────────────────────────┐
│   MonComposant.vue (SFC)    │
│  ┌───────────────────────┐  │
│  │  <template>           │  │
│  │    HTML               │  │
│  │  </template>          │  │
│  ├───────────────────────┤  │
│  │  <style>              │  │
│  │    CSS                │  │
│  │  </style>             │  │
│  ├───────────────────────┤  │
│  │  <script>             │  │
│  │    JavaScript (logique│  │
│  │  </script>            │  │
│  └───────────────────────┘  │
└─────────────────────────────┘`,
        },
        { type: "h", text: "Composant imbriqué" },
        { type: "p", text: "Structure où un composant parent contient un ou plusieurs composants enfants dans son template. Les composants enfants peuvent être réutilisés plusieurs fois." },
        {
          type: "diagram",
          content: `┌──────────────────────────────┐
│       ParentComponent        │
│  ┌────────────┐ ┌──────────┐ │
│  │  Enfant A  │ │ Enfant B │ │
│  └────────────┘ └──────────┘ │
│  ┌────────────┐              │
│  │  Enfant A  │ (réutilisé) │
│  └────────────┘              │
└──────────────────────────────┘`,
        },
        { type: "h", text: "Application web" },
        { type: "p", text: "Application accessible via un navigateur, généralement développée avec des frameworks comme Angular, React ou Vue.js." },
        { type: "h", text: "Application monopage (SPA — Single Page Application)" },
        { type: "p", text: "Application web qui charge une seule page HTML et met à jour le contenu dynamiquement selon les interactions utilisateur." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────┐
│              SPA                   │
│  URL: /accueil  → Composant Home   │
│  URL: /profil   → Composant Profil │
│  URL: /contact  → Composant Contact│
│                                    │
│  (Pas de rechargement de page)     │
└────────────────────────────────────┘`,
        },
        { type: "h", text: "Routage (Routing)" },
        { type: "p", text: "Technique qui permet de gérer les URLs et d'afficher différents composants selon l'adresse. Chaque URL correspond à une vue ou un composant spécifique." },
        { type: "code", filename: "text", language: "text", code: `URL: /home      →  <HomeComponent>
URL: /about     →  <AboutComponent>
URL: /user/:id  →  <UserComponent>` },
        { type: "h", text: "State Management" },
        { type: "p", text: "Processus de gestion des données (state) d'une application, qui évoluent au fil du temps. Permet de garder une application cohérente et synchronisée." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────┐
│           STATE MANAGEMENT          │
│                                     │
│  ┌──────────┐     ┌──────────────┐  │
│  │  State   │────▶│  Composant A │  │
│  │ (données)│     └──────────────┘  │
│  │          │────▶│  Composant B │  │
│  └──────────┘     └──────────────┘  │
│       ▲                             │
│       │ mutation                    │
│  ┌──────────┐                       │
│  │  Action  │                       │
│  └──────────┘                       │
└─────────────────────────────────────┘`,
        },
        { type: "h", text: "Sidenav (Side Navigation)" },
        { type: "p", text: "Barre de navigation située sur le côté (gauche ou droite) d'une page web ou application." },
        {
          type: "diagram",
          content: `┌──────────┬──────────────────────────┐
│          │                          │
│  SIDE    │      CONTENU             │
│  NAV     │      PRINCIPAL           │
│          │                          │
│  - Accueil│                         │
│  - Profil │                         │
│  - Config │                         │
│          │                          │
└──────────┴──────────────────────────┘`,
        },
        { type: "h", text: "JSX" },
        { type: "p", text: "Syntaxe utilisée avec React qui combine JavaScript, HTML et XML dans un même fichier." },
        { type: "h", text: "AJAX" },
        { type: "p", text: "Technique permettant de charger des données en arrière-plan sans recharger toute la page web." },
        {
          type: "diagram",
          content: `┌────────────┐     requête     ┌─────────┐
│  Navigateur│ ─────────────▶  │ Serveur │
│  (page OK) │ ◀─────────────  │         │
└────────────┘   données seules└─────────┘
     (pas de rechargement complet de la page)`,
        },
      ],
    },
    {
      id: "gl-design-ux-ui",
      title: "Design & UX/UI",
      blocks: [
        { type: "h", text: "User Experience (UX)" },
        { type: "p", text: "Ensemble des pratiques visant à améliorer l'expérience globale d'un utilisateur sur un site web ou une application (ergonomie, facilité de navigation, accessibilité, compréhension)." },
        { type: "h", text: "User Interface (UI)" },
        { type: "p", text: "Correspond à l'aspect visuel et esthétique d'un site ou d'une application (couleurs, typographie, boutons, mise en page)." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────┐
│          UX  vs  UI                │
│                                    │
│  UX = Comment ça fonctionne        │
│       (ergonomie, navigation...)   │
│                                    │
│  UI = Comment ça ressemble         │
│       (couleurs, boutons, typo...) │
└────────────────────────────────────┘`,
        },
        { type: "h", text: "Material Design" },
        { type: "p", text: "Système de design créé par Google. Il définit des principes, règles et bonnes pratiques pour concevoir des interfaces graphiques modernes :" },
        { type: "list", items: ["Notion de profondeur (ombres, couches)", "Animations fluides", "Design cohérent et structuré"] },
        { type: "h", text: "Flat Design" },
        { type: "p", text: "Style de design minimaliste, sans effets de profondeur ni animations complexes." },
        { type: "list", items: ["Meilleure lisibilité", "Chargement rapide", "Design clair et épuré"] },
        { type: "p", text: "Utilisé dans : applications mobiles, sites responsive, dashboards." },
        {
          type: "diagram",
          content: `Material Design         Flat Design
┌──────────────┐        ┌──────────────┐
│ ░░░░░░░░░░░░ │        │ ████████████ │
│  [ Bouton ]  │        │  [ Bouton ]  │
│  (ombre)     │        │  (plat)      │
└──────────────┘        └──────────────┘
  Profondeur             Minimalisme`,
        },
        { type: "h", text: "Charte graphique" },
        { type: "p", text: "Document qui définit les règles visuelles d'un projet (couleurs, typographies, images)." },
        { type: "h", text: "Design system" },
        { type: "p", text: "Ensemble de normes, principes et composants réutilisables pour guider la conception et le développement d'un produit." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────┐
│           DESIGN SYSTEM             │
│  ┌───────────┐  ┌────────────────┐  │
│  │  Couleurs │  │  Typographies  │  │
│  └───────────┘  └────────────────┘  │
│  ┌───────────┐  ┌────────────────┐  │
│  │  Boutons  │  │  Composants    │  │
│  └───────────┘  └────────────────┘  │
│  ┌───────────┐  ┌────────────────┐  │
│  │  Icônes   │  │  Règles        │  │
│  └───────────┘  └────────────────┘  │
└─────────────────────────────────────┘`,
        },
        { type: "h", text: "Ergonomie" },
        { type: "p", text: "Discipline scientifique qui étudie les interactions entre l'humain et les outils (site web, application…)." },
        { type: "h", text: "WCAG (Web Content Accessibility Guidelines)" },
        { type: "p", text: "Ensemble de normes définies par le W3C pour rendre les sites web accessibles aux personnes en situation de handicap." },
        { type: "h", text: "Line-height" },
        { type: "p", text: "Propriété CSS qui définit l'espace entre les lignes de texte (environ 150 % de la taille de la police pour une bonne lisibilité)." },
        { type: "code", filename: "css", language: "css", code: `p {
  line-height: 1.5; /* = 150% de la font-size */
}` },
        { type: "h", text: "Em" },
        { type: "p", text: "Unité de mesure en CSS basée sur la taille de police (1em = taille de la police font-size de l'élément parent)." },
        { type: "code", filename: "css", language: "css", code: `/* Si le parent a font-size: 16px */
.enfant {
  font-size: 1.5em; /* = 24px */
  padding: 0.5em;   /* = 8px  */
}` },
        { type: "h", text: "Préfixes vendeurs (Vendor prefixes)" },
        { type: "p", text: "Extensions ajoutées aux propriétés CSS pour tester des fonctionnalités non encore standardisées." },
        { type: "code", filename: "css", language: "css", code: `/* Exemple de vendor prefixes */
.element {
  -webkit-transform: rotate(45deg); /* Chrome/Safari */
  -moz-transform:    rotate(45deg); /* Firefox       */
  -ms-transform:     rotate(45deg); /* IE            */
  transform:         rotate(45deg); /* Standard      */
}` },
      ],
    },
    {
      id: "gl-seo-visibilite",
      title: "SEO & Visibilité",
      blocks: [
        { type: "h", text: "Référencement naturel (SEO)" },
        { type: "p", text: "Ensemble des techniques visant à améliorer la visibilité d'un site web dans les résultats des moteurs de recherche comme Google." },
        { type: "h", text: "SEO (Search Engine Optimization)" },
        { type: "p", text: "Ensemble des modifications et actions réalisées pour améliorer le positionnement d'un site ou d'une page dans les résultats des moteurs de recherche comme Google Search." },
        { type: "note", variant: "warning", text: "Le Référencement naturel est le concept global, le SEO désigne les actions concrètes mises en œuvre." },
        { type: "h", text: "Positionnement d'un site" },
        { type: "p", text: "Correspond à la place occupée par un site web dans les résultats des moteurs de recherche pour une requête donnée." },
        {
          type: "diagram",
          content: `Résultats Google pour "chaussures"
┌─────────────────────────────────┐
│  1. site-a.com  ← Position 1   │
│  2. site-b.com  ← Position 2   │
│  3. site-c.com  ← Position 3   │
│  ...                            │
└─────────────────────────────────┘`,
        },
        { type: "h", text: "Taux de rebond" },
        { type: "p", text: "Pourcentage d'utilisateurs qui quittent un site immédiatement sans effectuer d'action (cliquer, naviguer…)." },
      ],
    },
    {
      id: "gl-developpement-code",
      title: "Développement & Code",
      blocks: [
        { type: "h", text: "User Story" },
        { type: "p", text: "Description simple d'une fonctionnalité du point de vue de l'utilisateur final." },
        { type: "note", variant: "info", text: "Format type : « En tant qu'utilisateur, je veux me connecter pour accéder à mon compte. »" },
        { type: "h", text: "Backlog" },
        { type: "p", text: "Liste de toutes les user stories (fonctionnalités) à réaliser dans un projet, souvent priorisées." },
        {
          type: "diagram",
          content: `BACKLOG
┌──────────────────────────────────────┐
│  [P1] 🔴 User Story 1 (urgent)       │
│  [P2] 🟡 User Story 2 (important)    │
│  [P3] 🟢 User Story 3 (normal)       │
│  [P3] 🟢 User Story 4 (normal)       │
│  ...                                 │
└──────────────────────────────────────┘`,
        },
        { type: "h", text: "POC (Proof of Concept)" },
        { type: "p", text: "Preuve de concept : consiste à tester et comparer plusieurs solutions pour déterminer la meilleure avant de lancer un projet complet." },
        { type: "h", text: "Cahier des charges" },
        { type: "p", text: "Document qui définit en détail les besoins, les exigences et les contraintes d'un projet." },
        { type: "h", text: "Encapsulation des responsabilités" },
        { type: "p", text: "Principe qui consiste à cacher les détails et la complexité d'un morceau de code au reste du projet. Permet de rendre le code plus modulaire, réutilisable et maintenable." },
        { type: "h", text: "Séparation des responsabilités" },
        { type: "p", text: "Principe selon lequel chaque partie du code est responsable d'une seule action (éviter le mélange des rôles et améliorer la clarté du code)." },
        { type: "h", text: "Responsabilité" },
        { type: "p", text: "Tâche ou action attribuée à une partie spécifique du code (fonction, module, composant) pour assurer une bonne organisation." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│       SÉPARATION DES RESPONSABILITÉS     │
│                                          │
│  Composant A → Affichage de la liste     │
│  Composant B → Formulaire de connexion   │
│  Service C   → Appels API                │
│  Store D     → Gestion du state          │
└──────────────────────────────────────────┘`,
        },
        { type: "h", text: "Algorithme" },
        { type: "p", text: "Suite d'instructions logiques qui permettent de transformer des données d'entrée en un résultat." },
        {
          type: "diagram",
          content: `┌─────────────┐     ┌───────────────┐     ┌──────────────┐
│   Données   │────▶│  Algorithme   │────▶│   Résultat   │
│   d'entrée  │     │ (instructions)│     │              │
└─────────────┘     └───────────────┘     └──────────────┘`,
        },
        { type: "h", text: "Pseudo-code" },
        { type: "p", text: "Écriture d'un algorithme en langage naturel structuré, compréhensible par un humain, sans respecter la syntaxe d'un langage de programmation." },
        { type: "code", filename: "pseudo-code", language: "text", code: `DÉBUT
  SI utilisateur connecté ALORS
    Afficher tableau de bord
  SINON
    Rediriger vers /login
  FIN SI
FIN` },
        { type: "h", text: "Complexité" },
        { type: "p", text: "Mesure qui estime le nombre d'opérations qu'un algorithme exécute en fonction de la taille des données." },
        { type: "h", text: "Benchmark" },
        { type: "p", text: "Technique qui consiste à mesurer les performances d'un code ou d'un algorithme (temps d'exécution, mémoire, etc.)." },
        { type: "h", text: "Linter" },
        { type: "p", text: "Outil de développement qui analyse le code pour détecter erreurs, mauvaises pratiques ou non-respect des conventions." },
        { type: "h", text: "Librairie / Bibliothèque" },
        { type: "p", text: "Ensemble de fonctions ou modules réutilisables qui permettent de résoudre des problèmes courants." },
        { type: "h", text: "API (Application Programming Interface)" },
        { type: "p", text: "Interface qui permet à des applications de communiquer et échanger des données selon des règles définies. Permet d'utiliser du code déjà existant pour ajouter des fonctionnalités et échanger des données entre applications." },
        {
          type: "diagram",
          content: `┌──────────────┐        API        ┌──────────────┐
│ Application A│ ────────────────▶ │ Application B│
│              │ ◀──── données ─── │              │
└──────────────┘                   └──────────────┘`,
        },
        { type: "h", text: "Promesse (Promise en JavaScript)" },
        { type: "p", text: "Objet en JavaScript qui représente une valeur future (résultat d'une opération asynchrone). Il peut être :" },
        { type: "list", items: ["En attente (pending)", "Résolu (fulfilled — succès)", "Rejeté (rejected — erreur)"] },
        { type: "code", filename: "js", language: "javascript", code: `fetch('/api/data')
  .then(response => response.json())  // succès
  .catch(error => console.error(error)); // erreur` },
        { type: "h", text: "Machine Learning" },
        { type: "p", text: "Sous-domaine de l'Intelligence artificielle qui permet aux machines de faire des prédictions à partir de données et de s'améliorer automatiquement sans instructions explicites." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│           MACHINE LEARNING           │
│                                      │
│  Données ──▶ Modèle ──▶ Prédictions  │
│      ▲           │                   │
│      └───────────┘                   │
│     (amélioration automatique)       │
└──────────────────────────────────────┘`,
        },
        { type: "h", text: "Intégration Continue (CI)" },
        { type: "p", text: "Pratique de développement où chaque modification du code déclenche automatiquement des tests et une vérification du code. Si une erreur est détectée, un message est renvoyé avec le détail." },
        { type: "h", text: "Déploiement Continu (CD)" },
        { type: "p", text: "Suite logique de la CI, permet de mettre automatiquement en production une fonctionnalité une fois validée." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│               CI / CD PIPELINE                  │
│                                                 │
│  Code ──▶ Tests ──▶ Validation ──▶ Production   │
│   (CI: jusqu'ici)    (CD: déploiement auto)     │
└─────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Thème WordPress" },
        { type: "p", text: "Ensemble de fichiers (PHP, CSS, JavaScript) utilisé pour définir l'apparence d'un site créé avec WordPress, sans modifier ses fonctionnalités principales." },
        { type: "h", text: "Constructeur (Website Builder)" },
        { type: "p", text: "Outil qui permet de créer et mettre en forme un site web sans coder." },
      ],
    },
    {
      id: "gl-bases-donnees",
      title: "Bases de Données",
      blocks: [
        { type: "h", text: "Base de données (BDD)" },
        { type: "p", text: "Système qui permet de stocker des informations de manière structurée et organisée pour pouvoir les retrouver facilement. Ensemble d'informations structurées et liées entre elles, stockées sur un support (disque, serveur…)." },
        { type: "h", text: "SGBD (Système de Gestion de Base de Données)" },
        { type: "p", text: "Logiciel permettant de créer, gérer et manipuler une ou plusieurs bases de données." },
        { type: "h", text: "SGBDR (Système de Gestion de Base de Données Relationnelle)" },
        { type: "p", text: "Logiciel permettant de créer, gérer et interroger des bases de données relationnelles." },
        { type: "h", text: "BDD relationnelle (BDDR)" },
        { type: "p", text: "Base de données organisée sous forme de tables (lignes et colonnes) reliées entre elles par des relations. Permet de croiser facilement les informations." },
        {
          type: "diagram",
          content: `┌──────────────┐          ┌──────────────┐
│   USERS      │          │   ORDERS     │
├──────────────┤          ├──────────────┤
│ id (PK) 🔑  │──────────│ user_id (FK) │
│ nom          │          │ id (PK) 🔑  │
│ email        │          │ produit      │
└──────────────┘          └──────────────┘`,
        },
        { type: "h", text: "Modèle (schéma) de données" },
        { type: "p", text: "Représentation qui décrit l'organisation des données. Indique les types de données et les relations entre elles." },
        { type: "h", text: "Table (ou entité)" },
        { type: "p", text: "Structure d'une base de données qui contient des lignes (enregistrements). Chaque ligne représente un élément spécifique." },
        {
          type: "diagram",
          content: `TABLE: utilisateurs
┌────┬──────────┬───────────────────┬──────┐
│ id │   nom    │       email       │ âge  │
├────┼──────────┼───────────────────┼──────┤
│  1 │ Alice    │ alice@mail.com    │  30  │
│  2 │ Bob      │ bob@mail.com      │  25  │
└────┴──────────┴───────────────────┴──────┘
  ▲       ▲              ▲              ▲
  PK   Attribut       Attribut       Attribut`,
        },
        { type: "h", text: "Attributs (champs)" },
        { type: "p", text: "Colonnes d'une table qui décrivent les caractéristiques d'une entité (nom, âge, email…)." },
        { type: "h", text: "Clé primaire" },
        { type: "p", text: "Attribut qui identifie de manière unique chaque enregistrement dans une table. Souvent appelé id." },
        { type: "code", filename: "sql", language: "sql", code: `CREATE TABLE utilisateurs (
  id    INT PRIMARY KEY AUTO_INCREMENT,
  nom   VARCHAR(100),
  email VARCHAR(150)
);` },
        { type: "h", text: "Clé étrangère" },
        { type: "p", text: "Attribut qui contient une référence vers une autre table. Permet de créer des relations entre les données." },
        { type: "code", filename: "sql", language: "sql", code: `CREATE TABLE commandes (
  id      INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES utilisateurs(id)
);` },
        { type: "h", text: "Cardinalité" },
        { type: "p", text: "Représente le nombre de relations entre les enregistrements de deux tables." },
        {
          type: "diagram",
          content: `┌──────────┐         ┌──────────┐
│  USER    │         │  ORDERS  │
│          │ 1 ──▶ N │          │
│ 1 user   │─────────│ N orders │
└──────────┘         └──────────┘

Types de cardinalités :
  1:1  → Un pour un
  1:N  → Un pour plusieurs
  N:M  → Plusieurs pour plusieurs`,
        },
        { type: "h", text: "Schéma de base de données" },
        { type: "p", text: "Description de la structure d'une base de données (tables, attributs, types de données et clés primaires et étrangères). Sert à organiser et structurer les données." },
        { type: "h", text: "Relation en BDD" },
        { type: "p", text: "Lien logique entre deux tables via une clé (clé primaire ↔︎ clé étrangère). Permet de répartir les données dans plusieurs tables et de les relier." },
        { type: "h", text: "Index" },
        { type: "p", text: "Structure de données permettant de retrouver rapidement un ou plusieurs enregistrements dans une table." },
        { type: "code", filename: "sql", language: "sql", code: `CREATE INDEX idx_email ON utilisateurs(email);` },
        { type: "h", text: "Stockage de données" },
        { type: "p", text: "Action de conserver des informations numériques (texte, images, vidéos…) sous forme de bits et d'octets. Utilisé dans bases de données, fichiers et applications." },
        { type: "h", text: "Fichier" },
        { type: "p", text: "Ensemble d'octets stockés au même endroit, représentant des données (texte, image, programme…)." },
        { type: "h", text: "SQL (Structured Query Language)" },
        { type: "p", text: "Langage informatique permettant de manipuler une base de données relationnelle (lecture, ajout, modification, suppression). Utilisé avec des SGBD comme MySQL." },
        { type: "code", filename: "sql", language: "sql", code: `-- Sélectionner des données
SELECT nom, email FROM utilisateurs WHERE âge > 18;

-- Insérer des données
INSERT INTO utilisateurs (nom, email) VALUES ('Alice', 'alice@mail.com');

-- Modifier des données
UPDATE utilisateurs SET email = 'new@mail.com' WHERE id = 1;

-- Supprimer des données
DELETE FROM utilisateurs WHERE id = 1;` },
        { type: "h", text: "XQuery" },
        { type: "p", text: "Langage permettant de rechercher et extraire des données à partir de documents XML." },
        { type: "h", text: "XML (Extensible Markup Language)" },
        { type: "p", text: "Langage de balisage qui permet de structurer des données et de décrire d'autres langages." },
        { type: "h", text: "JSON (JavaScript Object Notation)" },
        { type: "p", text: "Format standard utilisé pour stocker et échanger des données. Basé sur des paires clé / valeur et des tableaux. Lisible par les humains et facilement exploitable par les machines." },
        { type: "code", filename: "json", language: "json", code: `{
  "utilisateur": {
    "id": 1,
    "nom": "Alice",
    "email": "alice@mail.com",
    "roles": ["admin", "user"]
  }
}` },
        { type: "h", text: "BSON (Binary JSON)" },
        { type: "p", text: "Format binaire dérivé de JSON. Il permet :" },
        { type: "list", items: [
          "Des types de données supplémentaires par rapport au JSON",
          "Le stockage de documents et tableaux imbriqués",
          "Une lecture et écriture plus rapide",
        ]},
        { type: "table", headers: ["Critère", "JSON", "BSON"], rows: [
          ["Format", "Texte", "Binaire"],
          ["Lisibilité", "Humain", "Machine"],
          ["Types de données", "Limités", "Étendus"],
          ["Performance", "Standard", "Plus rapide"],
          ["Usage principal", "Échange API", "MongoDB, BDD"],
        ]},
        { type: "h", text: "Projection" },
        { type: "p", text: "Opération qui consiste à sélectionner uniquement certains champs (colonnes) d'une table." },
        { type: "code", filename: "sql", language: "sql", code: `-- Projection : on ne sélectionne que nom et email
SELECT nom, email FROM utilisateurs;` },
        { type: "h", text: "Restriction (sélection)" },
        { type: "p", text: "Opération qui consiste à filtrer les lignes d'une table selon une condition." },
        { type: "code", filename: "sql", language: "sql", code: `-- Restriction : uniquement les lignes où âge > 18
SELECT * FROM utilisateurs WHERE âge > 18;` },
        { type: "h", text: "Trigger (déclencheur)" },
        { type: "p", text: "Objet d'une base de données qui permet d'exécuter automatiquement des instructions SQL avant ou après un événement (INSERT, UPDATE, DELETE)." },
        { type: "code", filename: "sql", language: "sql", code: `CREATE TRIGGER before_insert_user
BEFORE INSERT ON utilisateurs
FOR EACH ROW
BEGIN
  SET NEW.created_at = NOW();
END;` },
        { type: "h", text: "Jointure (JOIN)" },
        { type: "p", text: "Requête permettant d'interroger plusieurs tables en même temps en utilisant leurs relations." },
        { type: "code", filename: "sql", language: "sql", code: `SELECT utilisateurs.nom, commandes.produit
FROM utilisateurs
JOIN commandes ON utilisateurs.id = commandes.user_id;` },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│               TYPES DE JOIN              │
│                                          │
│  INNER JOIN → Correspondances exactes    │
│  LEFT JOIN  → Tout à gauche + matches    │
│  RIGHT JOIN → Tout à droite + matches    │
│  FULL JOIN  → Tous les enregistrements   │
└──────────────────────────────────────────┘`,
        },
        { type: "h", text: "Transaction" },
        { type: "p", text: "Suite d'opérations sur une base de données exécutées entièrement ou pas du tout. Se termine par :" },
        { type: "list", items: ["COMMIT (validation)", "ROLLBACK (annulation)"] },
        { type: "code", filename: "sql", language: "sql", code: `BEGIN;
  UPDATE comptes SET solde = solde - 100 WHERE id = 1;
  UPDATE comptes SET solde = solde + 100 WHERE id = 2;
COMMIT; -- ou ROLLBACK si erreur` },
        { type: "h", text: "Propriétés ACID des transactions BDD" },
        { type: "table", headers: ["Propriété", "Définition"], rows: [
          ["Atomicité", "La transaction est exécutée entièrement ou pas du tout. En cas d'interruption, tous les changements sont annulés et la BDD revient à son état initial."],
          ["Cohérence", "La transaction respecte toutes les règles d'intégrité de la BDD. Si une règle est violée, la transaction est annulée."],
          ["Isolation", "Les transactions s'exécutent indépendamment les unes des autres. Les opérations n'affectent pas les autres tant qu'elles ne sont pas terminées."],
          ["Durabilité", "Les modifications validées sont permanentes, même en cas de panne. Les données sont sauvegardées de manière fiable."],
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────┐
│         PROPRIÉTÉS ACID             │
│                                     │
│  A ── Atomicité  (tout ou rien)     │
│  C ── Cohérence  (règles OK)        │
│  I ── Isolation  (indépendance)     │
│  D ── Durabilité (permanent)        │
└─────────────────────────────────────┘`,
        },
        { type: "h", text: "Driver / Pilote BDD SQL" },
        { type: "p", text: "Logiciel qui permet d'établir une connexion entre un programme et un SGBD (base de données relationnelle)." },
        { type: "h", text: "MySQLi" },
        { type: "p", text: "Extension (ensemble de fonctions) permettant de :" },
        { type: "list", items: ["Se connecter à une base MySQL", "Exécuter des requêtes SQL", "Récupérer les résultats"] },
        { type: "h", text: "Index (BDD)" },
        { type: "p", text: "Structure de données permettant de retrouver rapidement un ou plusieurs enregistrements dans une table." },
        { type: "h", text: "Migration" },
        { type: "p", text: "Suite d'instructions permettant de créer ou modifier la structure (schéma) d'une base de données." },
        { type: "h", text: "ORM (Object-Relational Mapping)" },
        { type: "p", text: "Technique qui permet de manipuler une base de données avec du code orienté objet sans écrire directement du SQL." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│                ORM                       │
│                                          │
│  Code objet          SQL généré          │
│  ──────────          ────────────        │
│  User.findAll()  →   SELECT * FROM users │
│  user.save()     →   INSERT INTO users   │
│  user.delete()   →   DELETE FROM users   │
└──────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "gl-securite",
      title: "Sécurité",
      blocks: [
        { type: "h", text: "Sécurité des données" },
        { type: "p", text: "Ensemble des méthodes visant à :" },
        { type: "list", items: ["Protéger contre le vol", "Éviter les modifications non autorisées", "Garantir l'intégrité des données"] },
        { type: "h", text: "Ransomware" },
        { type: "p", text: "Logiciel malveillant utilisé par des attaquants pour bloquer l'accès aux données ou systèmes. Les données sont rendues inutilisables jusqu'au paiement d'une rançon." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│          RANSOMWARE                  │
│                                      │
│  1. Infection du système             │
│  2. Chiffrement des données          │
│  3. Affichage demande de rançon      │
│  4. Données inaccessibles            │
│     jusqu'au paiement                │
└──────────────────────────────────────┘`,
        },
        { type: "note", variant: "info", text: "Fin du glossaire — 14 pages / 60+ définitions" },
      ],
    },
    {
      id: "gl-100-notions-carte-mentale",
      title: "Les 100 notions du développeur — Carte mentale",
      blocks: [
        { type: "p", text: "Ce lexique a été conçu pour décrypter les 100 mots-clés incontournables du métier de développeur web et mobile — une trousse de secours linguistique à dégainer dès qu'un terme comme \"middleware\", \"scope\" ou \"pull request\" apparaît sans prévenir." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│               CARTE MENTALE DU DÉVELOPPEUR                      │
│                                                                 │
│         STRUCTURE           LOGIQUE            DONNÉES          │
│         HTML                Algorithm          Array            │
│         DOM                 Condition          Boolean          │
│         Element             Loop               Database         │
│         CSS                 Function           Float            │
│                             Recursion          Integer          │
│                             Statement          JSON             │
│                             Try/Catch          String           │
│                                                Type             │
│                                                                 │
│         CÔTÉ CLIENT         CÔTÉ SERVEUR       OUTILS           │
│         Client-side         Back-end           Git              │
│         Front-end           Node.js            IDE              │
│         JavaScript          Server             CLI              │
│         UI / UX             API                SDK              │
│         Virtual DOM         Middleware         Package manager  │
│         Responsive          Session                             │
│                                                                 │
│         CODE                ORGANISATION       QUALITÉ          │
│         Bug / Debug         Class              Test             │
│         Build / Deploy      Module             Unit test        │
│         Commit              Repository         Continuous int.  │
│         Compiler            Pull request       Refactor         │
│         Import / Export     Workflow           Version control  │
└─────────────────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "gl-100-notions-a-e",
      title: "Les 100 notions (A → E)",
      blocks: [
        { type: "h", text: "A" },
        { type: "p", text: "Algorithm — Une suite d'instructions logiques pour résoudre un problème. Pensez à une recette bien structurée : étapes, conditions, et résultats." },
        { type: "p", text: "API (Application Programming Interface) — Une passerelle entre deux logiciels qui veulent discuter. Elle permet d'échanger des infos sans tout révéler de sa cuisine interne." },
        { type: "p", text: "Array — Un tiroir qui contient plusieurs éléments, accessibles par des index. Pratique pour ranger ses données par ordre." },
        { type: "h", text: "B" },
        { type: "p", text: "Back-end — La partie cachée de l'iceberg : logique, bases de données et traitement des requêtes. L'utilisateur ne la voit jamais, mais elle fait tout fonctionner." },
        { type: "p", text: "Boolean — Un type de donnée ultra-binaire : soit vrai (true), soit faux (false). Idéal pour les décisions simples." },
        { type: "p", text: "Boolean logic — La logique du vrai/faux utilisée dans les conditions et les comparaisons." },
        { type: "p", text: "Bug — Une erreur dans le code. Parfois minuscule, parfois catastrophique. Mais toujours là quand on s'y attend le moins." },
        { type: "p", text: "Build — L'étape où l'on transforme le code source en version prête à déployer. Comme cuire un gâteau après l'avoir préparé." },
        { type: "h", text: "C" },
        { type: "p", text: "Cache — Une mémoire temporaire pour accélérer l'accès aux données. À vider en cas de souci." },
        { type: "p", text: "Class — Un moule à objets. On y définit les propriétés et comportements communs à une famille d'objets." },
        { type: "p", text: "CLI (Command Line Interface) — Une interface en ligne de commande. Minimaliste, mais puissante." },
        { type: "p", text: "Client-side — Tout ce qui s'exécute dans le navigateur de l'utilisateur. Le côté visible, interactif et souvent coloré." },
        { type: "p", text: "Cloud — Des serveurs accessibles à distance. On y stocke des fichiers, des applis ou des bases de données, sans s'occuper du matériel." },
        { type: "p", text: "Code — Le langage du développeur. Des instructions que l'ordi comprend (ou pas). Plus clair il est, plus heureux vous serez." },
        { type: "p", text: "Commit — Une sauvegarde dans Git. On fige l'état du code avec un petit message pour ne pas oublier ce qu'on a fait." },
        { type: "p", text: "Compiler — Transformer le code lisible en instructions que la machine comprend. Sans compilation, pas d'exécution." },
        { type: "p", text: "Condition — Permet de faire des choix dans le code : \"si ceci, alors cela\". La base de toute logique." },
        { type: "p", text: "Constructor — Une fonction qui initialise un objet. Elle prépare tout à l'intérieur pour que l'objet soit prêt à l'emploi." },
        { type: "p", text: "Continuous integration — Un processus d'automatisation des tests et mises à jour du code." },
        { type: "p", text: "CRUD (Create, Read, Update, Delete) — Les quatre actions de base en base de données." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│                 CRUD                         │
│  C → Create  = Créer     (INSERT)            │
│  R → Read    = Lire      (SELECT)            │
│  U → Update  = Modifier  (UPDATE)            │
│  D → Delete  = Supprimer (DELETE)            │
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "CSS (Cascading Style Sheets) — Le maquillage du web. Il habille votre site, gère les couleurs, les polices et les mises en page." },
        { type: "h", text: "D" },
        { type: "p", text: "Database — Un espace organisé pour stocker les données. Comme une bibliothèque numérique bien ordonnée." },
        { type: "p", text: "Data structure — La manière d'organiser et stocker les données (tableaux, objets, listes…)." },
        { type: "p", text: "Debug — L'art de trouver et corriger les erreurs. Avec méthode, logique, et parfois désespoir." },
        { type: "p", text: "Dependency — Une bibliothèque externe que votre projet utilise. À surveiller de près." },
        { type: "p", text: "Deploy — Mettre une appli en ligne, disponible au public. L'étape où le code quitte le nid." },
        { type: "p", text: "DevOps — Un mix entre développeur et administrateur système. Automatisation, déploiement, gestion." },
        { type: "p", text: "DOM (Document Object Model) — La représentation de votre page web dans le navigateur. Une structure d'éléments que JavaScript peut manipuler." },
        { type: "h", text: "E" },
        { type: "p", text: "Element — Un composant de la page web : paragraphe, bouton, image… tout ce qui s'affiche." },
        { type: "p", text: "Encryption — Le chiffrement de données pour en garantir la confidentialité." },
        { type: "p", text: "Environment — Le contexte d'exécution du code : développement, test, ou production." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│            LES ENVIRONNEMENTS               │
│  dev  → développement local                 │
│  test → tests automatisés                   │
│  prod → production (utilisateurs réels)     │
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Event — Une action utilisateur qui déclenche une réaction du code : clic, survol, saisie…" },
        { type: "p", text: "Event listener — Un \"écouteur\" qui attend qu'un événement se produise (clic, touche…)." },
        { type: "p", text: "Exception — Une erreur imprévue, mais gérée. Mieux vaut l'attraper que de laisser tout planter." },
        { type: "p", text: "Export — Envoyer un bout de code vers un autre fichier. On partage pour mieux réutiliser." },
      ],
    },
    {
      id: "gl-100-notions-f-m",
      title: "Les 100 notions (F → M)",
      blocks: [
        { type: "h", text: "F" },
        { type: "p", text: "Float — Un nombre avec une virgule (ou un point). Plus précis qu'un entier." },
        { type: "p", text: "Framework — Une boîte à outils bien organisée pour coder plus vite. Il impose une structure (et c'est souvent mieux ainsi)." },
        { type: "p", text: "Front-end — La vitrine d'un site. Ce que l'utilisateur voit, touche et juge." },
        { type: "p", text: "Function — Un bloc de code qui effectue une tâche précise. On l'appelle quand on en a besoin." },
        { type: "h", text: "G" },
        { type: "p", text: "Git — L'outil indispensable pour gérer les versions de votre code. Il vous sauvera la vie… plusieurs fois." },
        { type: "h", text: "H" },
        { type: "p", text: "Hook — Une fonction spéciale dans certains frameworks comme React. Elle gère les effets ou les états." },
        { type: "p", text: "Hotfix — Une correction d'urgence en production. À éviter, mais souvent salvateur." },
        { type: "p", text: "HTML (HyperText Markup Language) — Le squelette de toute page web. Il structure les titres, les paragraphes, les images." },
        { type: "h", text: "I" },
        { type: "p", text: "IDE (Integrated Development Environment) — Un logiciel tout-en-un pour coder : éditeur, terminal, gestion de projet… un vrai bureau de développeur." },
        { type: "p", text: "Immutable — Qui ne peut pas être modifié. On crée une nouvelle copie au lieu de modifier l'existante." },
        { type: "p", text: "Import — Faire venir du code d'un autre fichier. Pratique pour ne pas tout réécrire à chaque fois." },
        { type: "p", text: "Index — Une position dans un tableau, ou un raccourci dans une base de données. Pour retrouver plus vite." },
        { type: "p", text: "Inheritance — Un mécanisme qui permet à une classe d'hériter d'une autre. Très utile pour réutiliser du code." },
        { type: "p", text: "Input — Les données saisies par l'utilisateur. À vérifier avec soin pour éviter les surprises." },
        { type: "p", text: "Instance — Un objet créé à partir d'une classe. C'est le produit fini du moule." },
        { type: "p", text: "Integer — Un nombre entier. Pas de virgule, pas de décimales, juste du net et précis." },
        { type: "p", text: "Interface — Un contrat que doit respecter une classe. Elle définit ce qu'il faut faire, sans dire comment." },
        { type: "h", text: "J" },
        { type: "p", text: "JavaScript — Le langage du web dynamique. Il donne vie à vos pages et permet les interactions." },
        { type: "p", text: "JSON (JavaScript Object Notation) — Un format d'échange de données, simple et lisible. Très utilisé pour communiquer avec les APIs." },
        { type: "h", text: "L" },
        { type: "p", text: "Library — Un ensemble de fonctions toutes prêtes à l'emploi. On évite de réinventer la roue." },
        { type: "p", text: "Loop — Une structure qui répète des instructions. Très pratique pour traiter des listes ou compter." },
        { type: "h", text: "M" },
        { type: "p", text: "Method — Une fonction associée à un objet. Elle agit sur l'objet qui la possède." },
        { type: "p", text: "Middleware — Un code qui s'exécute entre la requête et la réponse. Il peut filtrer, modifier ou logguer les infos." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│             RÔLE DU MIDDLEWARE               │
│                                              │
│  Requête ──► Middleware ──► Contrôleur       │
│                  │                           │
│         (filtre, auth, log…)                 │
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Module — Un fichier ou un bloc de code exportable et réutilisable ailleurs." },
      ],
    },
    {
      id: "gl-100-notions-n-s",
      title: "Les 100 notions (N → S)",
      blocks: [
        { type: "h", text: "N" },
        { type: "p", text: "Node.js — Un environnement pour exécuter du JavaScript côté serveur. Idéal pour le back-end JS." },
        { type: "h", text: "O" },
        { type: "p", text: "Object — Un conteneur qui regroupe des données (propriétés) et des fonctions (méthodes)." },
        { type: "p", text: "Open-source — Du code librement accessible, modifiable et partageable. L'esprit collaboratif du web." },
        { type: "p", text: "Operator — Un symbole pour effectuer une opération : +, -, ==, &&, etc." },
        { type: "p", text: "Output — Le résultat affiché ou renvoyé par le programme." },
        { type: "h", text: "P" },
        { type: "p", text: "Package manager — Un outil qui installe, met à jour et gère les bibliothèques (npm, yarn…)." },
        { type: "p", text: "Parameter — Une valeur envoyée à une fonction pour qu'elle travaille avec." },
        { type: "p", text: "Parse — Analyser une donnée pour la rendre exploitable par le programme." },
        { type: "p", text: "Path — Le chemin d'accès à un fichier. Peut être relatif ou absolu." },
        { type: "p", text: "Production — Le vrai monde, celui des utilisateurs. Ici, tout doit fonctionner parfaitement !" },
        { type: "p", text: "Promise — Un objet qui représente une opération asynchrone. Il promet un résultat… un jour." },
        { type: "p", text: "Pull request — Une proposition de modification de code sur un dépôt Git. Soumise à validation." },
        { type: "h", text: "Q" },
        { type: "p", text: "Query — Une requête envoyée à une base de données pour obtenir ou modifier des données." },
        { type: "h", text: "R" },
        { type: "p", text: "Recursion — Une fonction qui s'appelle elle-même. Très puissante mais parfois casse-tête." },
        { type: "p", text: "Refactor — Réécrire du code pour le rendre plus propre sans changer ce qu'il fait." },
        { type: "p", text: "Repository — Le dossier Git où le code est versionné. Un coffre-fort numérique." },
        { type: "p", text: "Responsive design — Un design qui s'adapte à toutes les tailles d'écran. Indispensable à l'ère du mobile." },
        { type: "p", text: "Return — Ce qu'une fonction renvoie à la fin de son exécution." },
        { type: "p", text: "Route — Un chemin défini dans l'application pour accéder à une ressource ou une page." },
        { type: "p", text: "Runtime — Le moment où le programme est en train de s'exécuter." },
        { type: "h", text: "S" },
        { type: "p", text: "Scope — La zone où une variable est accessible. En dehors, elle est invisible." },
        { type: "p", text: "Script — Un fichier contenant des instructions exécutables. Le cœur de vos automatismes." },
        { type: "p", text: "SDK (Software Development Kit) — Un ensemble d'outils fournis pour développer avec une technologie ou une plateforme." },
        { type: "p", text: "Server — Un ordinateur qui répond aux requêtes des utilisateurs. Il héberge le site ou l'API." },
        { type: "p", text: "Session — Une période de connexion d'un utilisateur. Elle contient ses données temporaires." },
        { type: "p", text: "Source code — Le code original écrit par le développeur, avant transformation ou exécution." },
        { type: "p", text: "Statement — Une instruction unique dans le code. Une action à réaliser." },
        { type: "p", text: "String — Une chaîne de caractères. C'est du texte, entre guillemets." },
        { type: "p", text: "Syntax — Les règles de grammaire du langage. À respecter scrupuleusement." },
      ],
    },
    {
      id: "gl-100-notions-t-y",
      title: "Les 100 notions (T → Y) et codes d'erreur",
      blocks: [
        { type: "h", text: "T" },
        { type: "p", text: "Test — Une vérification automatique pour s'assurer que le code fonctionne comme prévu." },
        { type: "p", text: "Thread — Un fil d'exécution. Pour faire plusieurs choses en même temps." },
        { type: "p", text: "Timeout — Un délai après lequel on abandonne une opération. Utile pour éviter d'attendre l'infini." },
        { type: "p", text: "Token — Un jeton utilisé pour identifier ou sécuriser un utilisateur." },
        { type: "p", text: "Try / Catch — Une manière d'essayer du code et de gérer les erreurs sans faire tout planter." },
        { type: "p", text: "Type — La nature d'une donnée : nombre, chaîne, booléen, etc." },
        { type: "h", text: "U" },
        { type: "p", text: "UI (User Interface) — L'interface utilisateur. Ce que l'on voit et clique." },
        { type: "p", text: "Unit test — Un test automatisé sur une petite partie du code. Pour dormir l'esprit tranquille." },
        { type: "p", text: "UX (User Experience) — L'expérience utilisateur. Ce que l'on ressent en utilisant une interface." },
        { type: "h", text: "V" },
        { type: "p", text: "Variable — Un conteneur nommé pour stocker une valeur temporairement." },
        { type: "p", text: "Version control — Le suivi des versions d'un projet. Pour collaborer sans tout casser." },
        { type: "p", text: "Virtual DOM — Une version légère du DOM utilisée pour optimiser les mises à jour (ex. avec React)." },
        { type: "h", text: "W" },
        { type: "p", text: "Web app — Une application accessible via un navigateur. Pas besoin de l'installer." },
        { type: "p", text: "While loop — Une boucle qui s'exécute tant qu'une condition est vraie. Attention aux boucles infinies !" },
        { type: "p", text: "Workflow — L'enchaînement des étapes d'un projet. Pour avancer efficacement et sans chaos." },
        { type: "p", text: "Wrapper — Un code qui entoure un autre pour en simplifier l'usage." },
        { type: "h", text: "Y" },
        { type: "p", text: "YAML (YAML Ain't Markup Language) — Un format de fichier très lisible, souvent utilisé pour les configurations." },
        { type: "h", text: "Codes d'erreur" },
        { type: "p", text: "404 Error — Le message qu'on voit quand une page n'existe pas. Un classique du web." },
      ],
    },
    {
      id: "gl-100-notions-tableau-recap",
      title: "Tableau de référence rapide — 100 notions",
      blocks: [
        { type: "table", headers: ["Terme", "Catégorie", "Mémo en une phrase"], rows: [
          ["Algorithm", "Logique", "Suite d'instructions pour résoudre un problème"],
          ["API", "Communication", "Passerelle entre deux logiciels"],
          ["Array", "Données", "Tableau d'éléments indexés"],
          ["Back-end", "Architecture", "Logique serveur invisible"],
          ["Boolean", "Type", "Vrai ou faux uniquement"],
          ["Bug", "Qualité", "Erreur dans le code"],
          ["Build", "Déploiement", "Compilation avant mise en ligne"],
          ["Cache", "Performance", "Mémoire temporaire rapide"],
          ["Class", "POO", "Moule pour créer des objets"],
          ["CLI", "Outils", "Interface en ligne de commande"],
          ["Client-side", "Architecture", "Exécuté dans le navigateur"],
          ["Cloud", "Infrastructure", "Serveurs distants"],
          ["Commit", "Git", "Sauvegarde versionnée du code"],
          ["Compiler", "Exécution", "Transforme le code en machine"],
          ["Condition", "Logique", "Si… alors… sinon"],
          ["Constructor", "POO", "Initialise un objet"],
          ["CRUD", "Base de données", "Créer, Lire, Modifier, Supprimer"],
          ["CSS", "Front-end", "Style et mise en page"],
          ["Database", "Données", "Stockage organisé"],
          ["Debug", "Qualité", "Trouver et corriger les erreurs"],
          ["Deploy", "Déploiement", "Mettre en ligne"],
          ["DevOps", "Métier", "Dev + administration système"],
          ["DOM", "Front-end", "Arbre de la page web"],
          ["Element", "Front-end", "Composant de la page"],
          ["Encryption", "Sécurité", "Chiffrement des données"],
          ["Environment", "Config", "dev / test / prod"],
          ["Event", "Interaction", "Clic, survol, saisie…"],
          ["Event listener", "Interaction", "Écouteur d'événements"],
          ["Exception", "Erreurs", "Erreur gérée proprement"],
          ["Export", "Modules", "Partager du code"],
          ["Float", "Type", "Nombre décimal"],
          ["Framework", "Outils", "Boîte à outils structurée"],
          ["Front-end", "Architecture", "Ce que l'utilisateur voit"],
          ["Function", "Code", "Bloc de code réutilisable"],
          ["Git", "Versionning", "Gestion des versions"],
          ["Hook", "React", "Fonction spéciale de framework"],
          ["Hotfix", "Git", "Correction urgente en prod"],
          ["HTML", "Front-end", "Structure de la page"],
          ["IDE", "Outils", "Éditeur de code tout-en-un"],
          ["Immutable", "Données", "Objet non modifiable"],
          ["Import", "Modules", "Importer du code externe"],
          ["Index", "Données", "Position ou raccourci"],
          ["Inheritance", "POO", "Héritage de classe"],
          ["Input", "Interaction", "Données saisies"],
          ["Instance", "POO", "Objet créé depuis une classe"],
          ["Integer", "Type", "Nombre entier"],
          ["Interface", "POO", "Contrat à respecter"],
          ["JavaScript", "Langage", "Langage du web dynamique"],
          ["JSON", "Format", "Format d'échange de données"],
          ["Library", "Outils", "Fonctions prêtes à l'emploi"],
          ["Loop", "Logique", "Répétition d'instructions"],
          ["Method", "POO", "Fonction d'un objet"],
          ["Middleware", "Architecture", "Code entre requête et réponse"],
          ["Module", "Organisation", "Fichier réutilisable"],
          ["Node.js", "Back-end", "JS côté serveur"],
          ["Object", "POO", "Données + méthodes"],
          ["Open-source", "Communauté", "Code libre et partageable"],
          ["Operator", "Logique", "Symbole d'opération"],
          ["Output", "Code", "Résultat du programme"],
          ["Package manager", "Outils", "Gestion des librairies"],
          ["Parameter", "Fonctions", "Valeur envoyée à une fonction"],
          ["Parse", "Données", "Analyser une donnée"],
          ["Path", "Fichiers", "Chemin d'accès"],
          ["Production", "Déploiement", "Environnement utilisateurs réels"],
          ["Promise", "Async", "Opération asynchrone"],
          ["Pull request", "Git", "Proposition de modification"],
          ["Query", "Base de données", "Requête vers la BDD"],
          ["Recursion", "Logique", "Fonction qui s'appelle elle-même"],
          ["Refactor", "Qualité", "Améliorer sans changer le comportement"],
          ["Repository", "Git", "Dossier versionné"],
          ["Responsive design", "Front-end", "Adaptatif toutes tailles d'écran"],
          ["Return", "Fonctions", "Valeur renvoyée"],
          ["Route", "Architecture", "Chemin vers une page ou ressource"],
          ["Runtime", "Exécution", "Moment d'exécution du programme"],
          ["Scope", "Variables", "Zone d'accessibilité d'une variable"],
          ["Script", "Code", "Fichier d'instructions"],
          ["SDK", "Outils", "Kit de développement"],
          ["Server", "Infrastructure", "Ordinateur qui répond aux requêtes"],
          ["Session", "Sécurité", "Données temporaires d'un utilisateur"],
          ["Source code", "Code", "Code original avant compilation"],
          ["Statement", "Code", "Instruction unique"],
          ["String", "Type", "Chaîne de caractères"],
          ["Syntax", "Code", "Règles de grammaire du langage"],
          ["Test", "Qualité", "Vérification automatique"],
          ["Thread", "Exécution", "Fil d'exécution parallèle"],
          ["Timeout", "Réseau", "Délai d'abandon"],
          ["Token", "Sécurité", "Jeton d'identification"],
          ["Try/Catch", "Erreurs", "Gestion des exceptions"],
          ["Type", "Données", "Nature d'une donnée"],
          ["UI", "Design", "Interface visuelle"],
          ["Unit test", "Qualité", "Test d'une unité de code"],
          ["UX", "Design", "Expérience utilisateur"],
          ["Variable", "Code", "Conteneur de valeur"],
          ["Version control", "Git", "Suivi des versions"],
          ["Virtual DOM", "React", "DOM léger pour perf"],
          ["Web app", "Architecture", "Application dans le navigateur"],
          ["While loop", "Logique", "Boucle conditionnelle"],
          ["Workflow", "Méthodologie", "Enchaînement des étapes"],
          ["Wrapper", "Code", "Code enveloppant"],
          ["YAML", "Format", "Format de configuration lisible"],
          ["404 Error", "HTTP", "Page introuvable"],
        ]},
        { type: "note", variant: "info", text: "\"Choisir le Centre Européen de Formation, c'est s'offrir la possibilité d'étudier à son rythme en parallèle de sa vie professionnelle ou familiale.\" — Yoan Haran, Directeur de l'établissement" },
      ],
    },
  ],
};
