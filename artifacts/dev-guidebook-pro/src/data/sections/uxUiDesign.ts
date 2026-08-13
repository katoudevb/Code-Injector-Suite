import type { Section } from "../types";
import { laConsoleArticlesAccessibilite } from "./laConsoleArticlesAccessibilite";

export const uxUiDesign: Section = {
  id: "ux-ui-design",
  title: "UX/UI Design",
  icon: "Palette",
  tags: ["ts"],
  subsections: [
    // ── 1. COMPRENDRE L'UX DESIGN ────────────────────────────────────────
    {
      id: "ux-01-comprendre-ux",
      title: "1. Comprendre l'UX Design",
      blocks: [
        { type: "h", text: "Définition de l'UX" },
        { type: "p", text: "L'UX — User Experience est un ensemble de méthodes ayant pour objectif d'améliorer l'expérience de l'utilisateur en garantissant l'ergonomie et l'utilisabilité d'un système interactif, qu'il s'agisse d'un site web, d'une application, d'un logiciel, d'un produit physique ou de n'importe quel service en ligne." },
        { type: "h", text: "Définition de l'utilisabilité (norme ISO 9241-11, 1998)" },
        { type: "note", variant: "info", text: "Degré selon lequel un produit peut être utilisé par des utilisateurs identifiés pour atteindre des buts définis avec efficacité, efficience et satisfaction, dans un contexte d'utilisation spécifié." },
        { type: "p", text: "L'UX va plus loin que l'aspect purement pragmatique de l'interaction, en incluant les aspects subjectifs et émotionnels de l'utilisateur grâce à des méthodes qui englobent plusieurs domaines : sociologie, marketing, design, ergonomie et programmation." },
        { type: "h", text: "Positionnement de l'UX" },
        {
          type: "diagram",
          content: `         Besoins
       utilisateur
           △
           │
           │
           │
Besoins ───┼─── Contraintes
entreprise │  technologiques
           │
           ▽
          UX
    (carrefour des 3)`,
        },
        { type: "h", text: "Chiffres clés" },
        { type: "list", items: [
          "88 % des utilisateurs sont moins enclins à revenir sur un site si leur expérience a été mauvaise",
          "70 % des business en ligne échouent à cause d'une mauvaise expérience client (Source : Gomez Report)",
        ]},
        { type: "h", text: "Programme de formation" },
        { type: "list", items: [
          "Prendre en compte le facteur humain",
          "Appréhender les principes de conception et d'organisation des données",
          "Réaliser un prototype et appliquer une démarche de design thinking",
          "Apprendre à gérer un projet et à utiliser les outils et logiciels dédiés",
          "Aborder les aspects de l'ergonomie et les critères d'accessibilité",
        ]},
        { type: "note", variant: "info", text: "L'UX Designer doit connaître le HTML et CSS ainsi qu'une culture web solide et une grande maîtrise des outils digitaux." },
        { type: "h", text: "Le modèle d'Hassenzahl" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│           MODÈLE D'HASSENZAHL                   │
├──────────────────────┬──────────────────────────┤
│  Attributs PRAGMA-   │  Attributs HÉDONIQUES    │
│  TIQUES              │  (Plaisance)              │
│  (Fonctionnalité)    │                           │
├──────────────────────┼──────────────────────────┤
│  • Utilisabilité     │  • Design / Esthétique   │
│  • Réponse aux       │  • Ergonomie              │
│    besoins           │  • Qualité de l'expérience│
│  • Facilité          │                           │
│    d'utilisation     │                           │
└──────────────────────┴──────────────────────────┘

Fonctionnalité élevée + Plaisance faible  = moins agréable
Fonctionnalité faible  + Plaisance élevée = moins utile
OBJECTIF : équilibre optimal entre les deux`,
        },
        { type: "h", text: "Le modèle de Mahlke (CUE — Common User Experience)" },
        { type: "p", text: "Ce modèle est similaire à celui d'Hassenzahl mais intègre l'aspect émotionnel." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│              MODÈLE CUE (MAHLKE)                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Composants de l'interaction Homme/Machine :        │
│                                                     │
│  1. Propriétés du système                           │
│     └── fonctionnalités, contenu, interface         │
│                                                     │
│  2. Caractéristiques des utilisateurs               │
│     └── motivations, attentes, valeurs, profil      │
│                                                     │
│  3. Contexte d'utilisation                          │
│     └── contexte physique/social, contraintes       │
│                                                     │
├─────────────────────────────────────────────────────┤
│  + Qualités instrumentales (attributs pragmatiques) │
│  + Qualités non-instrumentales (hédoniques)         │
│  + Émotions ressenties par l'utilisateur            │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "À retenir : l'expérience utilisateur" },
        { type: "list", items: [
          "L'UX vise à garantir l'utilisabilité d'un système interactif en incluant les ressentis de l'utilisateur",
          "Elle se situe au carrefour des besoins de l'entreprise, des utilisateurs et des contraintes technologiques",
          "L'interaction Homme-Machine se compose de 3 facteurs : propriétés du système, caractéristiques des utilisateurs, contexte d'utilisation",
        ]},
      ],
    },
    // ── 2. LE FACTEUR HUMAIN ─────────────────────────────────────────────
    {
      id: "ux-02-facteur-humain",
      title: "2. Le Facteur Humain",
      blocks: [
        { type: "h", text: "Le modèle du processeur humain" },
        { type: "p", text: "Décrit par Stuart Card, Thomas P. Moran et Allen Newell dans The Psychology of Human Computer Interaction (1983). Modélise les capacités de traitement de l'information de l'homme." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│         MODÈLE DU PROCESSEUR HUMAIN                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [ENTRÉE - Stimuli extérieurs]                      │
│              │                                      │
│              ▼                                      │
│  ┌─────────────────────┐                            │
│  │  SYSTÈME SENSORIEL  │ ← Vision, Audition…        │
│  │    (Perceptif)      │   Traitement dans aires    │
│  └─────────┬───────────┘   spécialisées du cerveau  │
│            │                                        │
│            ▼                                        │
│  ┌─────────────────────┐                            │
│  │  SYSTÈME COGNITIF   │ ← Mémoire, Attention,      │
│  │                     │   Raisonnement,            │
│  └─────────┬───────────┘   Compréhension            │
│            │                                        │
│            ▼                                        │
│  ┌─────────────────────┐                            │
│  │  SYSTÈME MOTEUR     │ ← Mouvement, Action        │
│  └─────────────────────┘                            │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Types d'interaction homme/machine" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["La recherche", "Trouver une information précise dans un système"],
          ["La navigation", "Explorer des données ou environnements virtuels via des menus, cartes, liens hypertextes"],
          ["La manipulation", "Modifier directement les données/objets virtuels (souris, clavier, doigts)"],
          ["La communication", "Utiliser la voix, le texte ou les gestes pour interagir avec un système ou d'autres utilisateurs"],
          ["La visualisation", "Représentations graphiques pour faciliter la compréhension de données complexes"],
        ]},
        { type: "h", text: "À retenir : l'interaction homme/machine" },
        { type: "list", items: [
          "L'information est traitée par le système sensoriel → système cognitif → système moteur (mouvement)",
          "L'interaction homme/machine comprend la recherche, la navigation, la manipulation, la communication et la visualisation",
        ]},
      ],
    },
    // ── 3. PSYCHOLOGIE APPLIQUÉE ─────────────────────────────────────────
    {
      id: "ux-03-psychologie",
      title: "3. Psychologie Appliquée au Design",
      blocks: [
        { type: "h", text: "Les lois psychologiques" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│           LOIS PSYCHOLOGIQUES DU DESIGN                 │
├──────────────┬──────────────────────────────────────────┤
│ Loi de HICK  │ + complexe la tâche = - appréciée        │
│              │ → Limiter le nombre d'options présentées  │
├──────────────┼──────────────────────────────────────────┤
│ Loi de       │ Mémoire court terme = 7 +/- 2 éléments   │
│ MILLER       │ → Structurer l'info pour la mémorisation  │
├──────────────┼──────────────────────────────────────────┤
│ Loi de FITTS │ + petit/éloigné l'objectif = + long       │
│              │   pour l'atteindre                        │
│              │ → Optimiser tailles et positions          │
├──────────────┼──────────────────────────────────────────┤
│ Loi de ZIPF  │ Perception logarithmique des stimuli      │
│              │ → Augmenter significativement les         │
│              │   différences pour qu'elles soient        │
│              │   perçues                                 │
└──────────────┴──────────────────────────────────────────┘`,
        },
        { type: "h", text: "Théorie de la Gestalt" },
        { type: "p", text: "Théorie née en Allemagne au XXe siècle : toute perception est d'emblée structurée et le tout est perçu avant les parties." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                   LOIS DE LA GESTALT                    │
├──────────────────┬──────────────────────────────────────┤
│ LOI DE           │ Les éléments proches tendent à être  │
│ PROXIMITÉ        │ perçus comme un groupe               │
│                  │ ●● ●●  →  [groupe1] [groupe2]        │
├──────────────────┼──────────────────────────────────────┤
│ LOI DE           │ Les éléments similaires (forme,      │
│ SIMILITUDE       │ couleur, texture, taille) sont perçus│
│                  │ comme un groupe ou ayant même fonction│
├──────────────────┼──────────────────────────────────────┤
│ LOI DE           │ L'esprit perçoit un objet comme      │
│ CONTINUITÉ       │ continu même s'il est interrompu     │
│                  │ ──●──●──  →  perçu comme 1 ligne     │
├──────────────────┼──────────────────────────────────────┤
│ LOI DE           │ L'esprit complète les formes         │
│ CLÔTURE          │ incomplètes pour les percevoir       │
│                  │ comme des formes fermées             │
│                  │ ( )  →  ○                            │
└──────────────────┴──────────────────────────────────────┘`,
        },
        { type: "h", text: "À retenir : la psychologie du design" },
        { type: "list", items: [
          "La psychologie aide à définir comment on perçoit les formes et l'information",
          "Lois applicables au design : Hick, Miller, Fitts, Zipf",
          "La théorie de la Gestalt traite de la perception des formes et de l'organisation de l'information visuelle",
        ]},
      ],
    },
    // ── 4. PRINCIPES GÉNÉRAUX DE CONCEPTION ──────────────────────────────
    {
      id: "ux-04-principes-conception",
      title: "4. Principes Généraux de Conception",
      blocks: [
        { type: "h", text: "Conception centrée utilisateur — Norman & Draper (1986)" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│       PRINCIPES DE CONCEPTION NORMAN & DRAPER           │
├───────────────────┬─────────────────────────────────────┤
│ VISIBILITÉ        │ Éléments clairement identifiables   │
│                   │ et faciles à trouver                │
├───────────────────┼─────────────────────────────────────┤
│ RÉTROACTION       │ L'utilisateur est informé à chaque  │
│                   │ étape (messages, notifications…)    │
├───────────────────┼─────────────────────────────────────┤
│ AFFORDANCE        │ Objets facilement reconnaissables,  │
│                   │ fonction clairement indiquée        │
├───────────────────┼─────────────────────────────────────┤
│ CONTRAINTE        │ L'utilisateur est guidé pour éviter │
│                   │ les erreurs                         │
├───────────────────┼─────────────────────────────────────┤
│ SIMPLICITÉ        │ Conception simple et intuitive,     │
│                   │ choix limités                       │
├───────────────────┼─────────────────────────────────────┤
│ UNIFORMITÉ        │ Éléments organisés logiquement,     │
│                   │ conventions attendues respectées    │
└───────────────────┴─────────────────────────────────────┘`,
        },
        { type: "h", text: "Norme ISO 9241-210 — Conception centrée sur l'opérateur humain" },
        { type: "p", text: "La norme ISO 9241 « Ergonomie de l'interaction homme-système » (partie 210) formalise ces principes." },
        { type: "h", text: "4 — Fondements" },
        { type: "p", text: "Les systèmes conçus sur la base de méthodes centrées sur l'opérateur humain améliorent la qualité globale en :" },
        { type: "list", items: [
          "1. Augmentant la productivité des utilisateurs et l'efficience opérationnelle",
          "2. Étant plus faciles à comprendre et à utiliser, réduisant les frais de formation",
          "3. Augmentant l'utilisabilité (efficacité, efficience et satisfaction)",
          "4. Accroissant l'accessibilité (population aux besoins larges)",
          "5. Renforçant l'expérience des utilisateurs",
          "6. Réduisant l'inconfort et le stress",
          "7. Contribuant à l'amélioration de l'image de marque",
          "8. Contribuant à l'atteinte d'objectifs de durabilité",
        ]},
        { type: "h", text: "5 — Principes de la conception centrée sur l'opérateur humain" },
        { type: "list", items: [
          "1. La conception est fondée sur une compréhension explicite des utilisateurs, des tâches et des environnements",
          "2. Les utilisateurs sont impliqués tout au long du processus de conception et de développement",
          "3. La conception est dirigée et affinée par l'évaluation centrée sur l'utilisateur",
          "4. Le processus est itératif",
          "5. La conception couvre l'expérience de l'utilisateur dans son intégralité",
          "6. L'équipe de conception inclut des compétences et des perspectives pluridisciplinaires",
        ]},
        { type: "h", text: "À retenir : les principes de conception" },
        { type: "list", items: [
          "Norman & Draper (1986) : visibilité, rétroaction, affordance, contrainte, simplicité, uniformité",
          "ISO 9241 complète ces principes avec une approche couvrant l'ensemble du cycle de vie du système",
          "Méthodes recommandées : observation de l'utilisateur, analyse de tâches, évaluation de prototypes",
        ]},
      ],
    },
    // ── 5. ARCHITECTURE DE L'INFORMATION ─────────────────────────────────
    {
      id: "ux-05-architecture-information",
      title: "5. Architecture de l'Information",
      blocks: [
        { type: "h", text: "Organiser les contenus et les fonctionnalités" },
        { type: "p", text: "L'architecture de l'information joue un rôle-clé dans la conception de l'UX en aidant à structurer le contenu de manière à ce qu'il soit facilement accessible et compréhensible." },
        { type: "p", text: "Questions clés avant de concevoir l'architecture :" },
        { type: "list", items: [
          "Quel sera le point d'entrée des utilisateurs sur le site ou l'application ?",
          "Quel sera le point de sortie ?",
          "Comment les utilisateurs exploreront-ils les informations ?",
          "Quelles seront les informations dont les utilisateurs auront besoin en priorité ?",
          "Comment les informations présentées vont-elles aider les utilisateurs dans leur tâche ?",
        ]},
        { type: "h", text: "Créer une arborescence" },
        { type: "p", text: "La structuration illogique du contenu et la mauvaise navigation sont deux des problèmes les plus courants sur le web. La plupart des internautes quittent un site problématique en moins de 15 secondes." },
        { type: "p", text: "Plan de site (sitemap) : diagramme hiérarchique montrant l'architecture de l'information d'un site web." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│      EXEMPLE D'ARBORESCENCE — SITE E-COMMERCE           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   [Page d'accueil]                      │
│                         │                               │
│          ┌──────────────┼──────────────┐                │
│          │              │              │                │
│    [Catégorie 1]  [Catégorie 2]  [Catégorie 3]          │
│          │                                              │
│       ┌──┴──┐                                           │
│       │     │                                           │
│  [Produit] [Produit]                                    │
│                                                         │
│  + [Contact]  [Actualités]  [Mentions légales]          │
└─────────────────────────────────────────────────────────┘

Règle : Accès à toute page en maximum 3 clics`,
        },
        { type: "p", text: "L'arborescence permet d'optimiser la navigation en :" },
        { type: "list", items: [
          "Évitant la duplication du contenu : vérifier qu'une page existante ne peut pas accueillir le nouveau contenu avant d'en créer une nouvelle",
          "Montrant comment l'utilisateur accède à une information : limiter l'accès à 3 clics maximum",
        ]},
        { type: "h", text: "À retenir : l'architecture de l'information" },
        { type: "list", items: [
          "L'architecture de l'information vise à organiser les contenus et fonctionnalités logiquement pour qu'ils soient accessibles facilement",
          "Il est nécessaire de savoir comment les visiteurs entrent, sortent et ce qu'ils cherchent en priorité",
          "On représente la structure globale grâce à une arborescence qui montre comment l'utilisateur accède à l'information",
        ]},
      ],
    },
    // ── 6. LEAN PROTOTYPING ──────────────────────────────────────────────
    {
      id: "ux-06-lean-prototyping",
      title: "6. Lean Prototyping",
      blocks: [
        { type: "h", text: "Explorer des idées" },
        { type: "p", text: "La méthode Lean Startup (début des années 2000) est basée sur la conviction que les entrepreneurs doivent enquêter, expérimenter, tester et itérer." },
        { type: "p", text: "Le lean prototyping est une méthode de conception d'interface basée sur un travail d'exploration et d'évaluations successives jusqu'à la création d'un produit fonctionnel." },
        { type: "note", variant: "info", text: "Il est plus facile et économique de modifier une maquette que de corriger le code d'un système existant." },
        { type: "h", text: "Réaliser des esquisses" },
        { type: "list", items: [
          "Utiliser des formes simples et des mots-clés",
          "Représenter les images avec des croix et les zones de texte avec des barres horizontales",
          "Utiliser des couleurs différentes pour représenter le contenu et les interactions",
          "Agrémenter les croquis de commentaires",
        ]},
        {
          type: "diagram",
          content: `┌────────────────────────────────┐
│        MENU NAV                │ ← barre de navigation
├────────────────────────────────┤
│  ╔══════════════════╗          │
│  ║                  ║          │
│  ║   IMAGE  ╳╳╳    ║          │ ← image (croix)
│  ║                  ║          │
│  ╚══════════════════╝          │
│  ══════════════════════        │ ← titre (barre épaisse)
│  ──────────────────────        │ ← texte (barres fines)
│  ──────────────────────        │
│  ──────────────────────        │
│  [ BOUTON CTA ]                │
└────────────────────────────────┘`,
        },
        { type: "h", text: "Concevoir par étapes" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│    PHASES DE CONCEPTION — DU CROQUIS AU PROTOTYPE       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ① CONCEPTION UX                                        │
│     └── Arborescence + définition des fonctionnalités  │
│     └── [Feedbacks et validation]                       │
│     └── Zoning simple des pages principales            │
│     └── [Feedbacks et validation]                       │
│                                                         │
│  ② CONCEPTION UI                                        │
│     └── Wireframes des pages principales               │
│     └── [Feedbacks et validation]                       │
│     └── Wireframes de l'ensemble des pages             │
│     └── [Feedbacks et validation]                       │
│     └── Application identité visuelle + prototypes     │
│     └── [Feedbacks et validation]                       │
└─────────────────────────────────────────────────────────┘

Les wireframes et prototypes peuvent être interactifs
(ex : Figma, Adobe XD) avec liens entre pages.`,
        },
        { type: "h", text: "À retenir : le lean prototyping" },
        { type: "list", items: [
          "Méthode basée sur exploration et évaluations successives",
          "On réalise des croquis et maquettes pour recueillir du feedback à chaque étape",
          "Objectif : éviter les erreurs lors du développement final",
        ]},
      ],
    },
    // ── 7. DÉMARRER UN PROJET UX ─────────────────────────────────────────
    {
      id: "ux-07-demarrer-projet",
      title: "7. Démarrer un Projet UX",
      blocks: [
        { type: "h", text: "Les 5 niveaux de l'UX design" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│    LES 5 NIVEAUX DE L'UX DESIGN                             │
│         (du plus abstrait au plus concret)                  │
├────┬───────────────┬─────────────────────────────────────── ┤
│ 1  │ STRATÉGIE     │ Le « Pourquoi »                        │
│    │               │ Objectifs entreprise + besoins users   │
│    │               │ → Recherche utilisateur, entretiens    │
├────┼───────────────┼─────────────────────────────────────── ┤
│ 2  │ PÉRIMÈTRE     │ Le « Quoi »                            │
│    │               │ Quel produit répond à ma stratégie ?   │
│    │               │ → Architecture information, Sitemap    │
├────┼───────────────┼─────────────────────────────────────── ┤
│ 3  │ STRUCTURE     │ Le « Comment »                         │
│    │               │ Comment structurer + interactions ?    │
│    │               │ → Benchmark, tri de cartes, parcours   │
├────┼───────────────┼─────────────────────────────────────── ┤
│ 4  │ SQUELETTE     │ Interface agréable et ergonomique      │
│    │               │ → Maquettage basse et moyenne fidélité │
├────┼───────────────┼─────────────────────────────────────── ┤
│ 5  │ SURFACE       │ À quoi va ressembler le produit ?      │
│    │               │ → Prototypage                          │
└────┴───────────────┴─────────────────────────────────────── ┘`,
        },
        { type: "h", text: "Entretiens avec les parties prenantes" },
        { type: "p", text: "Il est nécessaire de recueillir les points de vue des différentes parties prenantes (responsables, chef de projet, marketing, communication…)." },
        { type: "p", text: "Questions à poser :" },
        { type: "list", items: [
          "En quoi consiste le produit ou service et à quoi sert-il ?",
          "À quels besoins utilisateurs le produit répond-il ?",
          "Qui sont les utilisateurs cibles ? Y a-t-il différents groupes et une audience prioritaire ?",
          "Quels sont les points-clés sur lesquels travailler ?",
          "Quels sont les défis à relever et les contraintes ?",
          "Que souhaitez-vous savoir de vos utilisateurs et à quoi l'étude va-t-elle servir ?",
        ]},
        { type: "h", text: "À retenir : le projet UX" },
        { type: "list", items: [
          "L'UX peut être découpé en 5 niveaux : stratégie, périmètre, structure, squelette, surface",
          "On entame un projet UX en définissant la stratégie et en s'entretenant avec les parties prenantes",
        ]},
      ],
    },
    // ── 8. DÉMARCHE UX ────────────────────────────────────────────────────
    {
      id: "ux-08-demarche-ux",
      title: "8. Démarche UX",
      blocks: [
        { type: "h", text: "Mener une recherche utilisateur" },
        { type: "table", headers: ["Méthode", "Description"], rows: [
          ["Entretiens utilisateur", "Interviews individuelles pour recueillir opinions, préférences, habitudes d'utilisation"],
          ["Questionnaires", "Google Forms, diffusés par e-mail ou réseaux sociaux. Questions prédéfinies ou ouvertes"],
          ["Recherche documentaire", "Livres, articles de recherche, pratiques UX existantes"],
          ["Veille artistique et technologique", "Étude des tendances design/tech (Behance, Pinterest)"],
        ]},
        { type: "h", text: "Entretiens utilisateur — bonnes pratiques" },
        { type: "list", items: [
          "Préparer un questionnaire / guide de discussion",
          "Poser des questions ouvertes permettant de s'exprimer librement",
          "Éviter les questions trop personnelles",
          "Analyser les données : qualitative (thèmes, tendances) ou quantitative (statistiques)",
        ]},
        { type: "h", text: "Veille — usages" },
        { type: "list", items: [
          "Côté UX : évaluer les concurrents, dresser un benchmark",
          "Côté UI : inspiration, création de planches d'ambiance",
        ]},
        { type: "h", text: "Créer des personas" },
        { type: "p", text: "Les personas sont des représentations fictives des utilisateurs cibles." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│                  FICHE PERSONA                      │
├─────────────────────────────────────────────────────┤
│  Photo   │  Nom fictif : Marie, 32 ans              │
│  [╳╳╳]  │  Profession : Responsable marketing      │
│          │  Localisation : Paris                    │
├──────────┴─────────────────────────────────────────┤
│  Biographie courte                                  │
│  ─────────────────────────────────────────────────  │
├─────────────────────────────────────────────────────┤
│  Motivations  │  Comportements  │  Préférences      │
│  clés         │  clés           │  & frustrations   │
└─────────────────────────────────────────────────────┘

On crée en général 1 à 3 personas pour illustrer
différents types d'utilisateurs.
Template : xtensio.com/user-persona/`,
        },
        { type: "h", text: "À retenir : la démarche UX" },
        { type: "list", items: [
          "Recherche via questionnaires, entretiens, recherche documentaire et veille",
          "Les résultats sont synthétisés visuellement grâce à des personas représentant les utilisateurs finaux",
        ]},
      ],
    },
    {
      id: "ux-09-design-thinking",
      title: "9. Design Thinking",
      blocks: [
        { type: "h", text: "Introduire de l'empathie dans le design" },
        { type: "p", text: "Le Design Thinking est un modèle de conception axé sur la compréhension des besoins des utilisateurs, le prototypage rapide et la génération d'idées créatives." },
        { type: "list", items: [
          "Approche née dans les années 1960 avec David Kelley et l'IDEO",
          "Utilisée dans de nombreux domaines : technologie, éducation, santé…",
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│         TRIANGLE DU DESIGN THINKING                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│              DÉSIRABILITÉ                           │
│          (Besoin humain, sens pour les gens)        │
│                    △                                │
│                   / \\                               │
│                  /   \\                              │
│                 /     \\                             │
│                /  UX   \\                            │
│               / DESIGN  \\                           │
│              /───────────\\                          │
│   FAISABILITÉ ─────────── VIABILITÉ                │
│   (techniquement          (modèle éco              │
│    possible)               durable)                │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Principes d'approche" },
        { type: "table", headers: ["Principe", "Description"], rows: [
          ["L'empathie", "Comprendre les besoins, motivations et préoccupations des utilisateurs"],
          ["L'expérimentation", "Essayer de nouvelles approches et apprendre des problèmes existants"],
          ["La collaboration", "Travailler en équipe pluridisciplinaire"],
          ["L'itération", "Améliorer constamment les solutions en fonction des retours"],
        ]},
        { type: "h", text: "Phases de conception" },
        { type: "note", variant: "info", text: '"Le Design Thinking ne se limite pas à un processus. C\'est une investigation qui se développe sans cesse." — Sandy Speicher, PDG d\'IDEO' },
        { type: "list", items: [
          "1. Formuler une question : Réfléchir aux clients et à leurs besoins réels",
          "2. Recueillir l'inspiration : Observer et découvrir ce dont les gens ont réellement besoin",
          "3. Générer des idées : Aller au-delà de l'évidence pour trouver de nouvelles solutions",
          "4. Concrétiser les idées : Construire des prototypes rapides",
          "5. Tester pour apprendre : Tester, recueillir des commentaires, itérer",
          "6. Partager : Élaborer et partager la solution avec l'équipe et les utilisateurs",
        ]},
        { type: "h", text: "À retenir : le design thinking" },
        { type: "list", items: [
          "Synthétise désirabilité humaine + faisabilité technologique + viabilité économique",
          "Principes : empathie, expérimentation, collaboration, itération",
          "Phases : questionner, s'inspirer, générer, concrétiser, tester, partager",
        ]},
      ],
    },
    {
      id: "ux-10-modele-iteratif-stanford",
      title: "10. Modèle Itératif Stanford",
      blocks: [
        { type: "h", text: "Les 5 (+1) étapes du Design Thinking" },
        { type: "p", text: "Modèle proposé par le Hasso Plattner Institute of Design de Stanford." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│      MODÈLE DESIGN THINKING — 5 (+1) ÉTAPES             │
└─────────────────────────────────────────────────────────┘
┌─────────┐     ┌────────────┐     ┌──────────┐
│EMPATHIE │────►│ DÉFINITION │────►│ IDÉATION │
└─────────┘     └────────────┘     └────┬─────┘
     ▲                                  │
     │                                  ▼
┌────┴─────┐     ┌────────┐     ┌──────────┐
│IMPLÉMEN- │◄────│  TEST  │◄────│PROTOTYPE │
│TATION    │     └────────┘     └──────────┘
│(étape 6) │
└──────────┘

Note : les phases ne sont pas forcément linéaires.
Elles peuvent se dérouler en parallèle ou être
revisitées selon les apprentissages.`,
        },
        { type: "h", text: "Détail de chaque étape" },
        { type: "h", text: "1. Empathie" },
        { type: "p", text: "Comprendre le problème de l'utilisateur." },
        { type: "p", text: "Méthode : Carte d'empathie — définit ce que voit, entend et ressent votre utilisateur face au problème à résoudre." },
        { type: "h", text: "2. Définition" },
        { type: "p", text: "Formuler un énoncé du problème." },
        { type: "p", text: "Méthode : Parcours utilisateur — schéma visualisant ce que fait et ressent l'utilisateur avant, pendant et après l'utilisation de la solution, en mettant en avant obstacles et points de satisfaction." },
        { type: "h", text: "3. Idéation" },
        { type: "p", text: "Générer des solutions créatives." },
        { type: "list", items: [
          "Worst possible idea : rechercher délibérément les pires solutions pour stimuler la pensée libre",
          "Esquisses : dessiner les idées, les discuter en équipe, générer un maximum de propositions",
        ]},
        { type: "h", text: "4. Prototype" },
        { type: "p", text: "Construire une représentation tangible de la solution." },
        { type: "list", items: [
          "Maquettes basse-fidélité : croquis papier ou logiciels simples, zonings, arborescences",
          "Wireframes et prototypes : maquettes retravaillées par l'UI designer avec ergonomie, navigation et identité visuelle",
        ]},
        { type: "h", text: "5. Test" },
        { type: "p", text: "Valider la solution auprès du public cible." },
        { type: "list", items: [
          "Test d'utilisabilité : observer directement l'utilisateur en train d'utiliser l'application pour détecter les problèmes concrets",
          "Test A/B : proposer deux versions d'un produit pour vérifier laquelle fonctionne le mieux (ex : deux versions de page d'accueil dirigées aléatoirement vers les visiteurs, puis comparaison des résultats)",
        ]},
        { type: "h", text: "6. Implémentation (étape optionnelle)" },
        { type: "p", text: "Augmenter et améliorer la solution suite aux tests." },
        { type: "h", text: "À retenir : le modèle itératif" },
        { type: "list", items: [
          "Les 5 étapes Stanford : Empathie, Définition, Idéation, Prototype, Test",
          "Les phases ne s'appliquent pas forcément de façon linéaire — le processus est itératif",
          "Une 6e étape possible : l'implémentation (amélioration suite aux tests)",
          "À l'issue des tests, retour à la première phase pour corriger les points précis",
        ]},
      ],
    },
    {
      id: "ux-11-ux-mapping",
      title: "11. UX Mapping",
      blocks: [
        { type: "h", text: "La carte d'empathie" },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│                  CARTE D'EMPATHIE                      │
├──────────────────────────┬─────────────────────────────┤
│    CE QU'IL PENSE        │     CE QU'IL ENTEND         │
│    ET RESSENT            │                             │
│  (buts, craintes, désirs)│  (qu'a-t-on dit sur des    │
│                          │   solutions similaires ?)   │
├──────────────────────────┼─────────────────────────────┤
│    CE QU'IL VOIT         │   CE QU'IL DIT ET FAIT      │
│                          │                             │
│ (solutions similaires    │ (comportements observables) │
│  déjà vues ?)            │                             │
├──────────────────────────┼─────────────────────────────┤
│    SES PROBLÈMES         │     SES ASPIRATIONS         │
│  (obstacles fréquents)   │  (avantages attendus,       │
│                          │   objectifs idéaux)         │
└──────────────────────────┴─────────────────────────────┘`,
        },
        { type: "p", text: "En pratique :" },
        { type: "list", items: [
          "Utiliser les recherches et personas pour identifier les points de vue et besoins",
          "Créer une carte par persona",
          "Se mettre à la place des utilisateurs en mettant l'accent sur leurs ressentis et le contexte global",
        ]},
        { type: "h", text: "Le parcours utilisateur" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│                   PARCOURS UTILISATEUR                       │
├──────────┬──────────────┬─────────────────┬──────────────────┤
│  TÂCHES  │ INSCRIPTION  │    COMMANDE     │      ACHAT       │
├──────────┼──────────────┼─────────────────┼──────────────────┤
│ ACTIONS  │ Remplir      │ Choisir produit │ Confirmer paiement│
│          │ formulaire   │ Ajouter panier  │ Recevoir confirm  │
├──────────┼──────────────┼─────────────────┼──────────────────┤
│ TOUCH-   │ Page         │ Page produit    │ Page panier      │
│ POINTS   │ inscription  │ Panier          │ Confirmation     │
├──────────┼──────────────┼─────────────────┼──────────────────┤
│RESSENTIS │ ● Facile     │ ● Confusion     │ ● Satisfaction   │
│          │              │   navigation    │                  │
├──────────┼──────────────┼─────────────────┼──────────────────┤
│ RESPON-  │ Dev front    │ UX Designer     │ Dev back         │
│ SABLE    │              │                 │                  │
├──────────┼──────────────┼─────────────────┼──────────────────┤
│ OPPORTU- │ Simplifier   │ Améliorer la    │ —                │
│ NITÉS    │ le formulaire│ navigation      │                  │
└──────────┴──────────────┴─────────────────┴──────────────────┘

Post-it VERTS = pensées positives
Post-it ROUGES = pensées négatives`,
        },
        { type: "p", text: "En pratique :" },
        { type: "list", items: [
          "Utiliser les recherches et personas pour identifier comportements et habitudes",
          "Créer une carte par persona",
          "Créer des colonnes pour les tâches (Inscription, commande, achat…)",
          "Pour chaque tâche, identifier les actions à accomplir",
          "Pour chaque action, définir les touchpoints (points de contact)",
          "Identifier les ressentis pour chaque action",
          "Définir la/les personne(s) chargée(s) de chaque tâche et les opportunités d'amélioration",
        ]},
        { type: "h", text: "À retenir : l'UX mapping" },
        { type: "list", items: [
          "Carte d'empathie : comprendre l'état d'esprit de l'utilisateur (pense, ressent, entend, voit, obstacles, envies)",
          "Parcours utilisateur : représentation visuelle du voyage via les touchpoints (points de contact), pour dégager points douloureux et moments de plaisir avant/pendant/après l'interaction",
        ]},
      ],
    },
    {
      id: "ux-12-gestion-projet-digital",
      title: "12. Gestion de Projet Digital",
      blocks: [
        { type: "h", text: "Mener des ateliers en présentiel" },
        { type: "p", text: "Étapes d'un atelier UX :" },
        { type: "list", items: [
          "1. Définissez vos objectifs : Enjeux et problèmes à résoudre",
          "2. Préparez les matériaux : Maquettes, supports de présentation, post-it, tableau blanc",
          "3. Définissez le déroulement : Durée, ordre des activités (présentations, exercices, discussions)",
          "4. Facilitez l'atelier : Encourager les échanges, permettre à chacun de s'exprimer",
          "5. Recueillez les résultats : Analyser et partager idées et feedbacks avec tous les participants",
        ]},
        { type: "h", text: "Logiciels dédiés" },
        { type: "table", headers: ["Logiciel", "Type", "Description"], rows: [
          ["Miro", "Freemium / Web", "Tableau blanc en ligne collaboratif — réunions, ateliers UX, brainstorming, zoning. 300+ templates. Intégrations : Zoom, Dropbox, Teams, Figma, Notion"],
          ["Balsamiq", "Abonnement / Web", "Maquettes basse-fidélité. Bibliothèque d'éléments (boutons, checkboxes, menus). Rendu volontairement esquissé (focus fonctionnel)"],
          ["Figma / FigJam", "Freemium / Web", "Figma : design systems, dessin vectoriel, maquettes simples à complexes, partage en ligne. FigJam : ateliers UX (diagrammes, mindmaps, tableaux). FigJam = UX / Figma = UI"],
          ["Adobe XD", "Abonnement / Desktop", "Outil UX et UI d'Adobe. Prototypage, mise en page, création vectorielle. Intégration Creative Cloud (Photoshop, Illustrator)"],
          ["Axure / Invision", "Variable", "Grande variété de fonctionnalités — choix selon préférences de l'équipe"],
        ]},
        { type: "h", text: "Créer un portfolio" },
        { type: "list", items: [
          "Décider du type d'entreprise ciblée et effectuer des recherches sur leurs besoins",
          "Sélectionner le contenu qui vous représente et qui résonnera avec eux",
          "Préférer la qualité à la quantité : 3 à 5 travaux suffisent",
          "Intégrer au moins une étude de cas documentant le processus et les prises de décision",
          "Structure type d'un portfolio : Travaux / À propos / Contact",
          "Faire une ébauche de l'organisation des contenus et de l'ordre d'affichage",
          "Intégrer les réseaux sociaux dans le menu et/ou le pied de page",
        ]},
        { type: "h", text: "Plateformes portfolio" },
        { type: "table", headers: ["Plateforme", "Description"], rows: [
          ["Dribbble", "Shots et études de cas. Aspect réseau social (commentaires, likes, follow)"],
          ["Behance", "Plateforme Adobe, la plus populaire chez les designers. Publication, partage, veille et inspiration"],
          ["Adobe Portfolio", "Site vitrine intégré à Creative Cloud. URL personnalisée (prénom+nom.myportfolio.com). Compatible Behance"],
          ["Site personnel", "Domaine propre (ex : nomprenom.fr). Nécessite : hébergeur, nom de domaine, FTP, CMS (ex : WordPress) + thème"],
        ]},
        { type: "h", text: "Templates utiles" },
        { type: "table", headers: ["Source", "URL", "Contenu"], rows: [
          ["Miro", "miro.com/app/dashboard/", "Templates mapping, ateliers, diagrammes"],
          ["Figma Community", "figma.com/community", "FigJam (ateliers UX) + Figma (UI design)"],
          ["XDGuru", "xdguru.com/free-xd-uikits/", "Librairie non officielle Adobe XD"],
          ["Uplabs", "uplabs.com", "Templates gratuits et premium pour Adobe XD et Figma"],
          ["UI8", "ui8.net", "Ressources gratuites pour Adobe XD, Figma, Invision, Sketch"],
          ["Canvanizer", "canvanizer.com", "Templates ateliers UX (tableaux, diagrammes)"],
          ["Service Design Toolkit", "servicedesigntoolkit.org", "Outils ateliers UX de recherche et conception"],
        ]},
        { type: "h", text: "À retenir : le projet digital" },
        { type: "list", items: [
          "Ateliers UX : définir objectifs, encourager les idées, synthétiser les résultats",
          "Logiciels collaboratifs : Miro, FigJam (UX) — Balsamiq (croquis/maquettes basse-fidélité) — Adobe XD, Figma (maquettes simples à avancées)",
          "Portfolio : sélection cohérente de 3 à 5 travaux, au moins une étude de cas",
          "Plateformes portfolio : Dribbble, Behance, Adobe Portfolio, site personnel",
        ]},
      ],
    },
    {
      id: "ux-13-adobe-xd",
      title: "13. Adobe XD",
      blocks: [
        { type: "h", text: "Présentation" },
        { type: "p", text: "Adobe XD (sorti en 2017) est un logiciel de design d'interface utilisateur pour créer des maquettes et prototypes interactifs sur mobile et desktop." },
        { type: "list", items: [
          "Disponible sur Windows et MacOS",
          "Accessible gratuitement aux étudiants et enseignants",
          "Intégrations Creative Cloud (Photoshop, Illustrator)",
          "Téléchargement : https://creative.adobe.com/fr/products/download/xd",
        ]},
        { type: "h", text: "Formats de maquette disponibles" },
        { type: "list", items: ["Mobile et tablette", "Desktop : grand, moyen et petit écran", "Publications réseaux sociaux"] },
        { type: "h", text: "Interface Adobe XD" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│           INTERFACE ADOBE XD                                │
├───┬─────────────────────────────────────────┬───────────────┤
│ ① │ NOM DU PROJET  [Design][Prototype][Partage]  [⑧ zoom]  │
├───┴─────────────────────────────────────────┴───────────────┤
│ ⑤ Barre d'outils (R, E, Y, L, P, T, A, zoom)              │
├─────────────────────────────────────────────────────────────┤
│ ⑥ Actifs  │                          │  ⑦ PANNEAU          │
│  Calques  │                          │  PROPRIÉTÉS         │
│  Plugins  │    CANVAS (infini)       │                     │
│           │  ┌─────────────────────┐ │  Alignement        │
│           │  │   ① PLAN DE TRAVAIL │ │  Grille rép        │
│           │  │  (un écran = 1 page)│ │  Fusion            │
│           │  └─────────────────────┘ │  Composant         │
│           │                          │  L / H             │
│           │                          │  X / Y             │
│           │                          │  Rotation          │
│           │                ⑧ zoom   │  Défilement        │
└───────────┴──────────────────────────┴─────────────────────┘
           ⑨ [Inviter][📱][🖥][►]`,
        },
        { type: "h", text: "Légende des zones" },
        { type: "list", items: [
          "1. Plan de travail : représente un écran. Double-cliquer sur le nom pour renommer",
          "2. Revenir à l'écran d'accueil",
          "3. Modes : Design (créer et mettre en forme) / Prototype (relier les plans et animer) / Partager",
          "4. Partager : valider, tester, recueillir des commentaires, partager avec développeurs",
          "5. Nom du projet / Barre d'outils : formes vectorielles (Rectangle, Ovale, Triangle, Ligne), Plume, Texte, Plan de travail, Zoom",
          "6. Actifs / Calques / Plugins : Actifs du document (couleurs, styles, composants), Calques et plans de travail, Plug-ins",
          "7. Panneau de propriétés : Alignement, Grille de répétition, Fusion de formes, Composants, L/H/X/Y/Rotation, Redimensionnement réactif",
          "8. Niveau de zoom affiché",
          "9. Fonctions : Inviter collaborateurs / Prévisualiser sur mobile / Prévisualiser sur navigateur",
        ]},
        { type: "h", text: "Plans de travail" },
        { type: "p", text: "Les plans de travail sont des zones délimitées dans le canvas (infini) représentant les écrans de votre application ou les pages de votre site." },
        { type: "list", items: [
          "Créer un plan de travail : cliquer sur l'icône plan de travail ou appuyer sur A",
          "Taille personnalisée : maintenir le clic et étirer dans le canvas",
          "Taille prédéfinie recommandée : choisir dans la liste de tailles d'écran (colonne de droite)",
          "Revenir au curseur standard : appuyer sur V",
        ]},
        { type: "p", text: "Gérer les plans de travail :" },
        { type: "list", items: [
          "Sélectionner : cliquer dessus ou sur son nom",
          "Renommer : double-cliquer sur le nom (ou via le panneau calques)",
          "Dupliquer : sélectionner + Cmd+D (Mac) / Ctrl+D (Win) ou Alt+clic glisser",
        ]},
        { type: "h", text: "Grille de mise en page" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│         ANATOMIE D'UNE GRILLE DE MISE EN PAGE               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ MARGE │col│gut│col│gut│col│gut│col│gut│col│gut│col│ MARGE  │
│ ◄────►│ 1 │   │ 2 │   │ 3 │   │ 4 │   │ 5 │   │ 6 │◄───►  │
│       │   │   │   │   │   │   │   │   │   │   │   │        │
│ ──── = Colonnes (blocs verticaux pour aligner)              │
│  ──  = Gouttières (espaces entre colonnes)                  │
│ MARGE = Espace entre contenu et bords de l'écran            │
└─────────────────────────────────────────────────────────────┘

DESKTOP : 12 colonnes → jusqu'à 6 zones de contenu par ligne
MOBILE  : 2 à 4 colonnes → jusqu'à 2 zones de contenu par ligne`,
        },
        { type: "p", text: "Créer une grille :" },
        { type: "list", items: [
          "Sélectionner le plan de travail",
          "Cocher la checkbox dans la partie « grille » du panneau de propriétés",
          "Choisir mode « disposition » (12 colonnes par défaut, le plus utilisé) ou « carré »",
          "Gouttières recommandées : 24px (multiples de 4 ou 8 conseillés pour cohérence)",
          "Grille centrée par défaut",
        ]},
        { type: "h", text: "Outils de dessin" },
        { type: "table", headers: ["Outil", "Raccourci", "Usage"], rows: [
          ["Rectangle", "R", "Maintenir Shift = carré. Poignées bleues aux coins = arrondis"],
          ["Ellipse", "E", "Maintenir Shift = cercle"],
          ["Polygone", "Y", "Maintenir Shift = triangle isocèle. Poignées coins = arrondis. Poignées arêtes = étoile"],
          ["Ligne", "L", "Maintenir Shift = ligne droite à ±45°"],
          ["Plume", "P", "Cliquer pour définir des points. Fermer la forme en revenant au point de départ"],
          ["Curseur sélection", "V", "Revenir au curseur standard à tout moment"],
        ]},
        { type: "h", text: "Outil Plume — détails" },
        { type: "list", items: [
          "Cliquer pour chaque nouveau point",
          "Forme ouverte : appuyer sur V pendant la création",
          "Sélectionner un point + maintenir clic = déplacer",
          "Double-cliquer un point = poignées d'arrondis (plus on éloigne la poignée, plus l'angle est arrondi)",
        ]},
        { type: "h", text: "Outil Rectangle — arrondis" },
        { type: "list", items: [
          "Tirer une poignée bleue vers l'intérieur pour créer des arrondis",
          "La taille s'affiche dans « Apparence » du panneau de propriétés",
          "Sélectionner la 2e icône = ajuster chaque coin indépendamment (sens horaire depuis coin sup. gauche)",
        ]},
        { type: "h", text: "Outil Polygone — propriétés dans « Apparence »" },
        { type: "list", items: ["Nombre de sommets", "Intensité des arrondis", "Intensité outil étoile (100% = arêtes droites)"] },
        { type: "h", text: "Modifier et utiliser les formes" },
        { type: "p", text: "Redimensionnement et rotation :" },
        { type: "list", items: [
          "Tirer une poignée = redimensionner. Maintenir Shift = conserver les proportions",
          "Aux abords d'une poignée = icône rotation apparaît. Tirer pour tourner. Maintenir Shift = ±45°",
        ]},
        { type: "p", text: "Sélection multiple :" },
        { type: "list", items: [
          "Maintenir Shift + cliquer sur chaque objet dans le plan de travail",
          "Tirer le curseur pour créer un cadre de sélection",
        ]},
        { type: "h", text: "Combinaison de formes" },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│           OPTIONS DE FUSION DE FORMES                  │
├──────────────────┬─────────────────────────────────────┤
│   [A] + [B]      │  Union         → A ∪ B              │
│                  │  Soustraction  → A - B               │
│                  │  Intersection  → A ∩ B               │
│                  │  Exclusion     → (A ∪ B) - (A ∩ B)  │
└──────────────────┴─────────────────────────────────────┘`,
        },
        { type: "p", text: "Groupement :" },
        { type: "list", items: [
          "Grouper : sélectionner + Cmd+G (Mac) / Ctrl+G (Win)",
          "Dissocier : sélectionner + Cmd+Shift+G (Mac) / Ctrl+Shift+G (Win)",
        ]},
        { type: "p", text: "Masquage :" },
        { type: "list", items: [
          "Importer une image dans l'espace de travail (glisser-déposer)",
          "Créer une forme vectorielle par-dessus",
          "Sélectionner les deux calques",
          "Cmd+Shift+M (Mac) / Ctrl+Shift+M (Win) ou Objet → Masquer avec une forme",
        ]},
        { type: "h", text: "Propriétés d'apparence" },
        { type: "p", text: "Opacité : 0% (transparent) à 100% (opaque). Liste déroulante avec options de transparence." },
        { type: "p", text: "Fond :" },
        { type: "list", items: [
          "1. Choisir le type : couleur unie ou dégradé",
          "2. Sélectionner la couleur via la palette + curseur alpha (opacité)",
          "3. Modèles de couleur disponibles : Hex (code en 6 signes, le plus utilisé par les développeurs), RVB (niveaux de Rouge, Vert, Bleu), HSB/TSV (Teinte, Saturation, Valeur — % blanc, 0 = noir)",
          "4. Enregistrer la couleur dans la librairie du document",
        ]},
        { type: "p", text: "Bordure : couleur, épaisseur, continuité (pointillés ou tirets), position (intérieur / extérieur / centré), arrondis des extrémités et angles des traits." },
        { type: "h", text: "Créer une maquette interactive — Créer un bouton" },
        { type: "list", items: [
          "1. Créer un rectangle de 260×40px",
          "2. Arrondir à 20px (moitié de la hauteur = angles entièrement ronds)",
          "3. Outil texte → écrire « Découvrir le produit » — centrer le texte",
          "4. Placer le texte sur le bouton centré grâce au magnétisme",
          "5. Texte en blanc, fond en gris/couleur neutre",
          "6. Enregistrer la couleur (+)",
          "7. Grouper les deux éléments → renommer « bouton »",
          "8. Créer un composant : Cmd+K (Mac) / Ctrl+K (Win) ou clic droit → Créer un composant",
        ]},
        { type: "note", variant: "info", text: "Composant = contours verts + icône losange dans les calques" },
        { type: "p", text: "Ajouter des états au composant :" },
        { type: "list", items: [
          "Au survol : le composant change d'apparence au survol de la souris",
          "Bascule : le composant change d'apparence après clic",
        ]},
        { type: "p", text: "Les composants sont réutilisables (panneau Actifs → Bibliothèque). Toute modification du composant principal est automatiquement répercutée sur toutes ses instances." },
        { type: "h", text: "Créer une card produit" },
        {
          type: "diagram",
          content: `┌────────────────────────────────┐
│  CARD PRODUIT (4 colonnes)     │  h: 560px — arrondi: 16px
│  ┌──────────────────────────┐  │
│  │                          │  │  Rectangle gris foncé h:240px
│  │    IMAGE PRODUIT (╳╳╳)  │  │
│  │                          │  │
│  └──────────────────────────┘  │
│       Nom du produit           │  OpenSans Semibold 32px — centré
│  ──────────────────────────    │
│  Lorem ipsum dolor sit amet    │  OpenSans Regular 16px — centré
│  consectetur adipiscing elit.  │
│                                │
│          19,99 €               │  OpenSans Semibold 24px — centré
│                                │
│   [ Découvrir le produit ]     │  ← Composant bouton
└────────────────────────────────┘`,
        },
        { type: "p", text: "Étapes de création :" },
        { type: "list", items: [
          "1. Plan de travail Desktop 1920×1080 — nommer « Page d'Accueil »",
          "2. Grille en 12 colonnes avec gouttières de 24px",
          "3. Agrandir le plan de travail en hauteur selon besoin (trait bleu = hauteur fenêtre visible)",
          "4. Rectangle gris clair, arrondis 16px, largeur 4 colonnes, hauteur 560px",
          "5. Rectangle gris foncé par-dessus, hauteur 240px",
          "6. Zone de texte — « Nom du produit » — OpenSans Semibold 32px centré",
          "7. Zone de texte lorem ipsum — 16px Regular centré",
          "8. Zone de texte prix — OpenSans Semibold 24px",
          "9. Amener le composant bouton (depuis fenêtre Actifs)",
          "10. Centrer tous les éléments avec le magnétisme — espacements multiples de 4 et 8",
          "11. Grouper tous les éléments — renommer les calques",
          "12. Créer un composant « card-produit »",
        ]},
        { type: "p", text: "Grille de répétition :" },
        { type: "list", items: [
          "1. Sélectionner la card → cocher « Grille de répétition » dans le panneau de propriétés",
          "2. Tirer la poignée droite jusqu'à l'extrémité de la grille",
          "3. Ajuster la marge entre les cards (20px par défaut → adapter à la grille)",
        ]},
        { type: "h", text: "Structure de la page complète" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│                  MENU                            │  h: 80px — fond blanc
│  Logo  Catégorie1  Catégorie2  Catégorie3  [🔐][🛒]
├──────────────────────────────────────────────────┤
│                  HEADER                          │  h: 400px — fond gris foncé
│          Nouveautés et promotions                │
├──────────────────────────────────────────────────┤
│  Nom de la Catégorie 1                           │  OpenSans Semibold 40px
│  [card]   [card]   [card]  ←── Grille répétition │
├──────────────────────────────────────────────────┤
│  Nom de la Catégorie 2                           │
│  [card]   [card]   [card]                        │
├──────────────────────────────────────────────────┤
│  Nom de la Catégorie 3                           │
│  [card]   [card]   [card]                        │
├──────────────────────────────────────────────────┤
│                  FOOTER                          │  Rectangle fond gris foncé
│  Plan de site | Mentions légales | © | Réseaux   │
└──────────────────────────────────────────────────┘
Distance entre éléments → maintenir Alt et survoler un autre élément
Espacement entre catégories : 80px`,
        },
        { type: "h", text: "Créer une maquette interactive (liens entre pages)" },
        { type: "list", items: [
          "1. Appuyer sur A → créer un nouveau plan de travail Desktop à côté → nommer « Détails Produit »",
          "2. Aller dans l'onglet Prototype",
          "3. Sélectionner un bouton (Cmd/Ctrl + clic pour sélectionner dans un groupe)",
          "4. Cliquer sur le + du bouton → maintenir le clic → amener le lien vers la page « Détails produit » (contour bleu) → relâcher",
          "5. Répéter pour tous les boutons",
          "6. Cliquer sur Play en haut à droite pour tester les interactions",
        ]},
        { type: "h", text: "À retenir : Adobe XD" },
        { type: "list", items: [
          "Logiciel de design UI pour maquettes et prototypes interactifs (mobile + desktop)",
          "Fonctionne avec calques et plans de travail",
          "Créer un composant : Cmd+K (Mac) / Ctrl+K (Win) — éléments réutilisables, modifications en temps réel sur toutes les instances",
          "Aligner les éléments avec le magnétisme et les indications d'espacement",
          "Grille de répétition : si un élément doit se répéter dans un bloc de contenu",
          "Multiples de 4 et 8 pour les tailles et espacements",
        ]},
      ],
    },
    {
      id: "ux-14-ergonomie-interfaces",
      title: "14. Ergonomie des Interfaces",
      blocks: [
        { type: "h", text: "Définition de l'ergonomie" },
        { type: "p", text: "Ergonomie : du grec ἔργον/érgon (« travail ») et νόμος/nόmos (« loi »). Apparaît au XIXe siècle." },
        { type: "note", variant: "info", text: "Définition IEA (Association Internationale d'Ergonomie) : Discipline scientifique qui vise la compréhension fondamentale des interactions entre les humains et les autres composantes d'un système, et la profession qui applique principes théoriques, données et méthodes en vue d'optimiser le bien-être des personnes et la performance globale des systèmes." },
        { type: "h", text: "Branches de l'ergonomie" },
        { type: "table", headers: ["Branche", "Objet d'étude"], rows: [
          ["Ergonomie physique", "Effets des facteurs physiques (lumière, bruit, température)"],
          ["Ergonomie sociale", "Effets des relations sociales (travail en équipe, leadership)"],
          ["Ergonomie cognitive", "Effets des tâches mentales (charge de travail, fatigue)"],
        ]},
        { type: "note", variant: "info", text: "La conception d'interfaces utilisateur se base essentiellement sur l'ergonomie cognitive." },
        { type: "h", text: "Types d'ergonomie (compléments)" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│              TYPES D'ERGONOMIE               │
│                                              │
│  PHYSIQUE                                    │
│  ├─ Adaptation du système au corps humain    │
│  └─ Confort d'utilisation (posture,          │
│       taille des boutons…)                   │
│                                              │
│  COGNITIVE                                   │
│  ├─ Facilite compréhension et décision       │
│  └─ Réduit la charge mentale                 │
│       (interface claire…)                    │
│                                              │
│  ORGANISATIONNELLE (entreprise)              │
│  ├─ Optimise les processus et collaboration  │
│  └─ Améliore le travail en équipes           │
│       (outils, gestion de projet…)           │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Interfaces responsive" },
        { type: "p", text: "Une interface responsive s'adapte automatiquement à la taille de l'écran (ordinateur, tablette, mobile) sans zoom ni défilement horizontal." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│            MOBILE-FIRST vs DESKTOP-FIRST                 │
├─────────────────────────────┬────────────────────────────┤
│        MOBILE-FIRST         │       DESKTOP-FIRST        │
├─────────────────────────────┼────────────────────────────┤
│  Concevoir d'abord pour     │  Concevoir d'abord pour    │
│  les appareils mobiles      │  les grands écrans         │
│  puis adapter aux autres    │  puis adapter au mobile    │
├─────────────────────────────┴────────────────────────────┤
│  Aucune approche n'est "bonne" ou "mauvaise" en soi.     │
│  Dépend du public cible, du contexte et des objectifs.   │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Réagencer la navigation" },
        {
          type: "diagram",
          content: `DESKTOP                              MOBILE
┌──────────────────────────┐        ┌───────────────────┐
│ Logo  Page1  Page2  Page3│  →     │ Logo           ☰  │
└──────────────────────────┘        └───────────────────┘

                           Clic sur ☰ (menu burger) :
                           ┌─────────────────────┐
                           │ > Page 1            │
                           │ > Page 2            │
                           │ > Page 3            │
                           └─────────────────────┘`,
        },
        { type: "h", text: "Réagencer les contenus" },
        {
          type: "diagram",
          content: `DESKTOP (horizontal)              MOBILE (vertical)
┌──────┬──────┬──────┐           ┌──────────────┐
│ bloc │ bloc │ bloc │    →      │    bloc 1    │
│  1   │  2   │  3   │           ├──────────────┤
└──────┴──────┴──────┘           │    bloc 2    │
                                  ├──────────────┤
                                  │    bloc 3    │
                                  └──────────────┘
⚠ Conserver la hiérarchie et le sens de lecture`,
        },
        { type: "h", text: "À retenir : l'ergonomie des interfaces" },
        { type: "list", items: [
          "L'ergonomie vise à créer des produits adaptés aux caractéristiques physiques, mentales et sociales des individus",
          "L'UX se base sur l'ergonomie cognitive",
          "Une interface responsive adapte le design à tous types d'écrans en réagençant les contenus",
          "Conserver la hiérarchie et la logique d'organisation d'un type d'écran à l'autre",
          "Mobile-first = concevoir d'abord pour mobile",
        ]},
      ],
    },
    {
      id: "ux-15-accessibilite-web",
      title: "15. Accessibilité Web (WCAG)",
      blocks: [
        { type: "h", text: "Définition" },
        { type: "p", text: "L'accessibilité vise à garantir que le plus grand nombre de personnes possible, y compris les personnes en situation de handicap, puisse efficacement interagir avec les produits et services numériques." },
        { type: "h", text: "Niveaux de conformité WCAG" },
        { type: "table", headers: ["Niveau", "Accès", "Description"], rows: [
          ["A", "Limité", "Minimal — exigences de base"],
          ["AA", "Moyen", "Recommandé — standard courant"],
          ["AAA", "Élevé", "Optimisé — accessibilité maximale"],
        ]},
        { type: "h", text: "Types d'accessibilité" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│       TYPES D'ACCESSIBILITÉ          │
│                                      │
│  🖥  Technologie  (outils, lecteurs) │
│  💪  Physique     (motricité)        │
│  🧠  Cognitive    (compréhension)    │
│  👂  Auditive     (sons, vidéos)     │
│  🏗  Structurelle (organisation)     │
└──────────────────────────────────────┘`,
        },
        { type: "h", text: "4 principes POUR (WCAG)" },
        { type: "table", headers: ["Principe", "Définition"], rows: [
          ["Perceptible", "Tout utilisateur peut voir ou entendre le contenu"],
          ["Utilisable", "Tout utilisateur peut naviguer et interagir"],
          ["Compréhensible", "Contenu clair et prévisible"],
          ["Robuste", "Compatible avec tous les outils (navigateurs, lecteurs d'écran…)"],
        ]},
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│           WCAG — 4 PRINCIPES             │
│                                          │
│  P ── Perceptible  (voir / entendre)     │
│  U ── Utilisable   (naviguer)            │
│  C ── Compréhensible (clair)             │
│  R ── Robuste      (compatible)          │
└──────────────────────────────────────────┘`,
        },
        { type: "h", text: "Importance de l'accessibilité" },
        { type: "list", items: [
          "Loi française n°2005-102 pour l'égalité des droits et des chances : rend accessibles tous les services en ligne de l'État, des collectivités territoriales et des établissements publics",
          "Ne pas prendre en compte l'accessibilité = perdre jusqu'à 15 % de la clientèle",
          "L'accessibilité numérique améliore le référencement en ligne (SEO)",
        ]},
        { type: "h", text: "Utilisateurs concernés" },
        { type: "list", items: [
          "Personnes aveugles ou malvoyantes (lecteurs d'écran)",
          "Personnes ayant des limitations motrices (claviers et souris alternatives)",
        ]},
        { type: "note", variant: "info", text: "Définition d'un lecteur d'écran : Logiciel d'assistance destiné aux personnes aveugles ou malvoyantes qui retranscrit par synthèse vocale et/ou sur un afficheur braille ce qui est affiché sur l'écran d'un ordinateur, tant en termes de contenu que de structure." },
        { type: "h", text: "Critères d'accessibilité d'un site" },
        { type: "table", headers: ["Critère", "Description"], rows: [
          ["Textes alternatifs (Alt)", "Chaque image doit avoir un attribut Alt décrivant son contenu (lecteurs d'écran + référencement)"],
          ["Fil d'Ariane", "Indique où se situe le visiteur dans l'arborescence. Ex : Accueil → Catégorie → Article. Chaque élément doit être cliquable"],
          ["Navigation intuitive", "Structure claire, liens de navigation vers arborescence logique"],
          ["Couleurs et contraste", "Couleurs suffisamment contrastées. Outil : webcolor.aliasdmc.fr/contraste-couleur-text-fond-wcag"],
          ["Textes et tailles de police", "Polices lisibles, taille minimale 14px pour les paragraphes, possibilité de zoomer"],
          ["Vidéos sous-titrées", "Sous-titres disponibles pour les utilisateurs sourds ou malentendants"],
          ["Formulaires accessibles", "Champs correctement étiquetés, navigation facile entre les champs"],
          ["Boutons et liens cliquables", "Suffisamment grands et espacés pour les utilisateurs avec limitations motrices"],
        ]},
        { type: "h", text: "Pour aller plus loin : le RGAA" },
        { type: "p", text: "Le RGAA (Référentiel général d'amélioration de l'accessibilité) comporte 106 critères de contrôle." },
        { type: "note", variant: "info", text: "Lien : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" },
      ],
    },
    {
      id: "ux-16-design-system-charte",
      title: "16. Design System & Charte Graphique",
      blocks: [
        { type: "h", text: "Design System" },
        { type: "p", text: "Outil technique et guide de conception qui garantit la cohérence visuelle et fonctionnelle d'un produit." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│                 DESIGN SYSTEM                    │
│                                                  │
│  ┌─────────────────────┐ ┌──────────────────┐    │
│  │ Fondations visuelles│ │  Design Tokens   │    │
│  │ couleurs, typo,     │ │  variables CSS   │    │
│  │ espaces...          │ │  couleurs, tailles│   │
│  └─────────────────────┘ └──────────────────┘    │
│  ┌─────────────────────┐ ┌──────────────────┐    │
│  │  Composants UI      │ │ États composants │    │
│  │  boutons, formulaires│ │ hover, active,  │    │
│  │  cartes...          │ │ focus, disabled  │    │
│  └─────────────────────┘ └──────────────────┘    │
│  ┌─────────────────────┐ ┌──────────────────┐    │
│  │  Patterns           │ │ Grilles & Layout │    │
│  │  interactions       │ │ structure,       │    │
│  │  uniformes          │ │ responsive       │    │
│  └─────────────────────┘ └──────────────────┘    │
│  ┌─────────────────────┐ ┌──────────────────┐    │
│  │  Guidelines UX      │ │  Documentation   │    │
│  │  accessibilité WCAG │ │  technique       │    │
│  └─────────────────────┘ └──────────────────┘    │
└──────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Adobe Spectrum" },
        { type: "p", text: "Système de design créé par Adobe, pour concevoir des interfaces UX/UI et réaliser des prototypes." },
        { type: "p", text: "Éléments :" },
        { type: "list", items: [
          "Composants UI — boutons, formulaires…",
          "Palette de couleurs — principales et secondaires",
          "Guidelines typographiques — choix et utilisation des polices",
          "Principes d'accessibilité — respect des normes WCAG",
          "Règles d'interaction — comportements des éléments (clic…)",
          "Cohérence visuelle et fonctionnelle entre les produits",
        ]},
        { type: "h", text: "Créer une charte graphique" },
        { type: "p", text: "Ensemble des règles visuelles qui définissent l'identité d'un projet (site, app, marque)." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│       PROCESSUS CHARTE GRAPHIQUE             │
│                                              │
│  1. Analyse du design                        │
│     └─ Extraction couleurs (color picker)    │
│                                              │
│  2. Choix des couleurs                       │
│     ├─ 2 couleurs principales (fort contraste│
│     ├─ 2 couleurs secondaires                │
│     └─ Définition codes hexadécimaux         │
│                                              │
│  3. Typographie                              │
│     ├─ Identification polices (logo…)        │
│     ├─ Recherche via Google Fonts            │
│     └─ Combinaisons (Fontjoy…)               │
│                                              │
│  4. Accessibilité                            │
│     ├─ Vérification contrastes (AA/AAA)      │
│     └─ Lisibilité des textes                 │
│                                              │
│  5. Tests                                    │
│     ├─ Test lisibilité                       │
│     └─ Vérification rendu typographique      │
│                                              │
│  6. Structure charte                         │
│     ├─ Organisation couleurs, typo, règles   │
│     └─ Uniformité visuelle globale           │
│                                              │
│  7. Contrôle qualité                         │
│     ├─ Vérification orthographe              │
│     └─ Cohérence design globale              │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Typographie — Site vitrine" },
        { type: "p", text: "Hiérarchie typographique :" },
        { type: "code", filename: "css", language: "css", code: `/* Exemple hiérarchie typographique */
h1 { font-size: 2.5rem; font-weight: 700; }
h2 { font-size: 1.75rem; font-weight: 600; }
h3 { font-size: 1.25rem; font-weight: 500; }
p  { font-size: 1rem;    line-height: 1.6; }` },
        { type: "p", text: "Intégration technique :" },
        { type: "code", filename: "css", language: "css", code: `body {
  font-family: 'Roboto', Arial, sans-serif;
}` },
        { type: "h", text: "Variables CSS — Palette" },
        { type: "code", filename: "css", language: "css", code: `:root {
  --couleur-principale:  #2C3E50;
  --couleur-secondaire:  #E74C3C;
  --couleur-accent:      #3498DB;
  --couleur-texte:       #333333;
}` },
        { type: "h", text: "Gestion du logo" },
        { type: "code", filename: "html", language: "html", code: `<img src="logo.svg"
     alt="Nom de l'entreprise — logo"
     width="200"
     height="60">` },
        { type: "list", items: [
          "Fourni par le client ou texte typographique si absent",
          "Format SVG recommandé",
          "Responsive / plusieurs formats (clair / sombre)",
          "Bonne position + marges",
          "Attribut alt pour accessibilité",
        ]},
      ],
    },
    {
      id: "ux-17-ergonomie-pages-web",
      title: "17. Ergonomie des Pages Web",
      blocks: [
        { type: "h", text: "Actions intrusives en publicité" },
        { type: "p", text: "Éléments publicitaires qui perturbent l'expérience utilisateur sur un site ou application :" },
        { type: "list", items: [
          "Pop-up / fenêtres publicitaires — fenêtre s'ouvre automatiquement",
          "Newsletters forcées — inscriptions / sollicitations insistantes",
          "Vidéos en lecture automatique",
          "Sons / animations non désirés — effets agressifs",
        ]},
        { type: "h", text: "CTA (Call To Action)" },
        { type: "p", text: "Élément (bouton, lien, formulaire…) qui incite l'utilisateur à faire une action précise sur une interface." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────┐
│            EXEMPLES DE CTA              │
│                                         │
│  [ Formulaire de contact ou devis ]     │
│  [ Appeler / prendre rendez-vous ]      │
│  [ Réserver une prestation ]            │
│  [ S'inscrire à une newsletter ]        │
│  [ Rechercher un produit ]              │
│  [ Télécharger / envoyer un document ]  │
└─────────────────────────────────────────┘`,
        },
        { type: "h", text: "Ergonomie des pages web" },
        { type: "p", text: "1. Clarté et simplicité" },
        { type: "list", items: ["Page d'accueil claire et attractive", "Structure compréhensible", "1 sujet par page", "Ton adapté (tu/vous)"] },
        { type: "p", text: "2. Lisibilité et hiérarchie" },
        { type: "list", items: ["Titres et sous-titres visibles", "Listes et puces", "Typographie lisible", "Mise en avant des éléments clés (CTA, liens…)"] },
        { type: "p", text: "3. Design visuel" },
        { type: "list", items: ["Équilibre texte / images", "Espaces et marges suffisants", "Éviter surcharge d'informations", "Iconographie cohérente", "Images non génériques"] },
        { type: "p", text: "4. Confort utilisateur" },
        { type: "list", items: ["Contrastes adaptés", "Mode sombre possible", "Animations subtiles", "Navigation claire", "Indicateurs de position sur le site"] },
        { type: "p", text: "5. Optimisation" },
        { type: "list", items: ["SEO", "Performance de la page", "Structuration du contenu", "Robuste (compatible tous outils et supports)"] },
        { type: "h", text: "Ergonomie site web conventionnelle" },
        { type: "p", text: "Respect des standards habituels d'organisation pour faciliter la navigation et la compréhension." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│  [LOGO]                  [Panier] [Compte]  │
│  ← haut gauche           ← haut droite      │
├─────────────────────────────────────────────┤
│  Accueil | À propos | Services | Contact    │
│  ← navigation bien nommée                   │
├─────────────────────────────────────────────┤
│                                             │
│           CONTENU PRINCIPAL                 │
│      Structure logique et cohérente         │
│      Parcours utilisateur simple            │
│                                             │
├─────────────────────────────────────────────┤
│                [ FOOTER ]                   │
└─────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Navigation claire :" },
        { type: "list", items: ["Onglets de navigation bien nommés (Accueil, Contact…)", "Structure logique et cohérente", "Parcours utilisateurs simple"] },
        { type: "p", text: "Indications visuelles :" },
        { type: "list", items: ["Éléments cliquables visibles (boutons, liens…)", "Effets hover au survol", "Repères visuels clairs"] },
        { type: "h", text: "Site optimisé UX" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│           SITE OPTIMISÉ UX — RÉSUMÉ          │
│                                              │
│  Clarté  ──▶  Utilisateur comprend vite      │
│  Design  ──▶  Palette 2-5 couleurs, cohérence│
│  Nav     ──▶  CTA visibles, parcours simple  │
│  Perfo   ──▶  Rapide, mobile, accessible     │
│  Impact  ──▶  ↑ clics, ↑ conversions         │
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "1. Clarté et contenu" },
        { type: "list", items: ["Informations accessibles et compréhensibles", "Contenu aéré et bien espacé", "Typographie lisible", "Hiérarchie des informations"] },
        { type: "p", text: "2. Design visuel" },
        { type: "list", items: ["Palette de couleurs maîtrisée (2 à 5 couleurs)", "Équilibre texte / images", "Contenu non surchargé", "Cohérence visuelle globale"] },
        { type: "p", text: "3. Navigation et interaction" },
        { type: "list", items: ["Claire et cohérente", "Parcours utilisateur simple", "Liens d'action visibles et distincts", "CTA bien identifiés", "Structure logique du site"] },
        { type: "p", text: "4. Performance et accessibilité" },
        { type: "list", items: ["Site rapide à charger", "Compatible mobile (responsive design)", "Accessibilité (contrastes, lisibilité)", "Navigation fluide sur tous supports"] },
        { type: "p", text: "5. Impact global" },
        { type: "list", items: ["Amélioration expérience utilisateur", "Augmentation des actions (clics, achats, contacts…)", "Meilleure image de marque"] },
        { type: "h", text: "Types d'erreurs d'interface utilisateur" },
        { type: "p", text: "1. Message en ligne — Affiché près ou sous le champ concerné." },
        {
          type: "diagram",
          content: `┌─────────────────────────────┐
│ Email                       │
│ [john@...         ]         │
│ ⚠ Format email invalide    │ ← message en ligne
└─────────────────────────────┘`,
        },
        { type: "p", text: "2. Toast / Notification — Message temporaire (5–10 secondes), affiché en coin d'écran, non bloquant." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│  Page principale                     │
│                                      │
│          ┌───────────────┐           │
│          │ ✓ Sauvegardé  │           │ ← Toast
│          └───────────────┘           │
└──────────────────────────────────────┘`,
        },
        { type: "p", text: "3. Modal / Pop-up — Fenêtre bloquante, demande une action : confirmation de suppression (valider / annuler)." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────┐
│  [ Fond grisé — page bloquée ]       │
│      ┌──────────────────┐            │
│      │  Confirmer la    │            │
│      │  suppression ?   │            │
│      │                  │            │
│      │  [Annuler] [OK]  │            │
│      └──────────────────┘            │
└──────────────────────────────────────┘`,
        },
        { type: "p", text: "4. Barre d'erreur globale — Barre persistante en haut ou bas de page, message d'erreur général (service indisponible…)." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│ ⚠ Service temporairement indisponible   │ ← barre globale
├──────────────────────────────────────────┤
│  Contenu de la page...                   │
└──────────────────────────────────────────┘`,
        },
        { type: "p", text: "5. Tooltip d'erreur — Message au survol ou focus, aide contextuelle (forme de bulle)." },
        {
          type: "diagram",
          content: `[Champ] ──▶ ╭──────────────────╮
            │ ⚠ Ce champ est  │
            │ obligatoire     │
            ╰──────────────────╯`,
        },
      ],
    },
    {
      id: "ux-18-formats-images",
      title: "18. Formats d'Images Web",
      blocks: [
        { type: "p", text: "Le poids des images impacte la vitesse du site." },
        { type: "h", text: "Tableau des formats" },
        { type: "table", headers: ["Format", "Usage principal", "Compression", "Remarques"], rows: [
          ["JPG / JPEG", "Photos", "Avec perte", "Standard photos"],
          ["PNG", "Logos, transparence", "Sans perte", "Fond transparent"],
          ["GIF", "Animations simples", "—", "Limité 256 couleurs"],
          ["SVG", "Logos, icônes vectoriels", "—", "Infini, léger"],
          ["WebP", "Web général", "Avec perte", "Format moderne optimisé"],
          ["AVIF", "Web haute qualité", "Forte", "Qualité élevée, très léger"],
          ["ICO", "Favicons", "—", "Petites icônes de navigateur"],
          ["HEIC/HEIF", "Apple", "—", "Format natif iPhone/iPad"],
        ]},
        { type: "h", text: "Bonnes pratiques techniques" },
        { type: "list", items: [
          "Compression avant intégration : TinyPNG, Squoosh",
          "Redimensionner avant intégration : GIMP, Photoshop",
          "Utiliser 72–96 dpi + mode RVB pour le web",
          "Éviter les images trop lourdes",
          "Maintenir une uniformité visuelle",
          "Éviter le surchargement mobile",
        ]},
        { type: "p", text: "Images adaptées à la taille d'écran :" },
        { type: "code", filename: "html", language: "html", code: `<picture>
  <source srcset="image-mobile.webp" media="(max-width: 768px)">
  <source srcset="image-desktop.webp">
  <img src="image.jpg" alt="Description de l'image">
</picture>` },
        { type: "h", text: "Utilisation des images en design web" },
        { type: "list", items: [
          "Ajouter des images cohérentes avec le design des pages web",
          "Utiliser des images libres de droits si aucun visuel fourni",
          "Respecter les droits d'auteur et licences",
          "Images en haute résolution",
          "Maintenir une uniformité visuelle sur tout le site",
          "Utilisation non autorisée d'image peut être sanctionnée",
          "Vérifier les licences avant utilisation",
        ]},
      ],
    },
    {
      id: "ux-19-specificites-multilingues",
      title: "19. Spécificités Multilingues",
      blocks: [
        { type: "p", text: "Adapter une application ou site web à plusieurs langues selon les utilisateurs ciblés." },
        { type: "h", text: "1. Choix des langues" },
        { type: "list", items: ["Selon la cible utilisateur", "Selon la nature de l'application", "Choisir celles vraiment utiles"] },
        { type: "h", text: "2. Qualité de traduction" },
        { type: "list", items: ["Éviter les traductions littérales", "Adapter le sens et le contexte", "Vérifier la cohérence des textes"] },
        { type: "h", text: "3. Types de traduction" },
        { type: "table", headers: ["Type", "Avantages", "Limites", "Usage"], rows: [
          ["Professionnelle", "Qualité, sens garanti", "Coûteux", "Textes longs/critiques"],
          ["Outils en ligne (DeepL, Google Translate)", "Rapide, pratique", "Moins fiable globalement", "Petits textes"],
          ["API de traduction", "Automatisation, intégration", "Coût parfois élevé", "Contenu évolutif régulier"],
        ]},
        { type: "h", text: "4. Typographies et polices" },
        { type: "p", text: "Choix des polices :" },
        { type: "list", items: ["Utiliser des polices Unicode (support multi-langues)", "Vérifier si la police supporte tous les caractères nécessaires"] },
        { type: "p", text: "Sens de lecture :" },
        { type: "code", filename: "text", language: "text", code: `LTR (Left to Right) : FR, EN, ES…
RTL (Right to Left) : AR, HE, FA…` },
        { type: "p", text: "Longueur des textes :" },
        { type: "list", items: [
          "Traductions plus courtes ou longues possibles",
          "Interface à adapter pour éviter les débordements",
          "Prévoir des espaces flexibles",
        ]},
        { type: "h", text: "5. Limites" },
        { type: "list", items: ["Perte de sens possible", "Erreurs d'interprétation", "Qualité variable selon l'outil"] },
        { type: "h", text: "6. UX multilingue" },
        { type: "list", items: [
          "Proposer un menu de sélection de langue",
          "Permettre changement manuel",
          "Ne pas imposer uniquement la détection automatique",
        ]},
        { type: "h", text: "7. Détection de langue" },
        { type: "list", items: ["Langue du navigateur / appareil", "Variable d'environnement", "Localisation utilisateur"] },
        { type: "note", variant: "warning", text: "Attention : L'utilisateur peut être à l'étranger. La langue détectée peut être erronée. La localisation peut être désactivée." },
        { type: "h", text: "8. Formatage des données locales" },
        { type: "table", headers: ["Donnée", "FR", "EN (US)"], rows: [
          ["Date", "01/12/2024", "12/01/2024"],
          ["Devise", "19,99 €", "$19.99"],
          ["Séparateur décimal", "19,99", "19.99"],
        ]},
        { type: "h", text: "9. Gestion du contenu multilingue" },
        { type: "p", text: "Méthodes de stockage :" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────┐
│           MÉTHODES DE STOCKAGE                │
│                                               │
│  FICHIERS                                     │
│  ├─ JSON, YAML, XML                           │
│  └─ Structurés dans des répertoires           │
│                                               │
│  BASE DE DONNÉES                              │
│  ├─ Tables de traduction                      │
│  ├─ Contenu centralisé                        │
│  └─ Récupération dynamique                    │
│                                               │
│  LOGIQUE APPLICATIVE                          │
│  ├─ Correspondance URL ↔ langue               │
│  └─ Récupération du bon fichier selon langue  │
└───────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Structure JSON de traduction :" },
        { type: "code", filename: "json", language: "json", code: `{
  "fr": {
    "home_title": "Bienvenue sur notre site",
    "home_subtitle": "Découvrez nos services"
  },
  "en": {
    "home_title": "Welcome to our website",
    "home_subtitle": "Discover our services"
  }
}` },
        { type: "p", text: "Outil JS : i18next — gestion automatique de l'internationalisation, simplifie la structure multilingue." },
        { type: "h", text: "10. SEO multilingue" },
        { type: "code", filename: "html", language: "html", code: `<!-- URL différente par langue -->
/fr/accueil
/en/home
/es/inicio

<!-- Balise hreflang -->
<link rel="alternate" hreflang="fr" href="https://site.com/fr/"/>
<link rel="alternate" hreflang="en" href="https://site.com/en/"/>` },
        { type: "list", items: ["Éviter le contenu dupliqué entre langues"] },
        { type: "h", text: "11. Performance multilingue" },
        { type: "list", items: ["Charger que la langue nécessaire", "Lazy load des fichiers de traduction", "Ne pas tout charger d'un coup"] },
      ],
    },
    {
      id: "ux-20-formulaire-erreurs",
      title: "20. Formulaire avec Gestion des Erreurs",
      blocks: [
        { type: "p", text: "Permet de valider les champs et afficher des messages clairs à l'utilisateur (améliore l'expérience utilisateur et évite les erreurs de saisie)." },
        { type: "h", text: "Validation des champs" },
        { type: "list", items: ["Champs obligatoires (non vide)", "Format valide (email, mot de passe…)", "Validation côté front + backend"] },
        { type: "h", text: "Affichage des erreurs" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────┐
│  Email *                                │
│  ┌─────────────────────────────────┐    │
│  │ john@               ← bordure   │    │
│  └──────────────────────── rouge ──┘    │
│  ⚠ Veuillez saisir un email valide      │
└─────────────────────────────────────────┘`,
        },
        { type: "list", items: ["Messages en rouge", "Bordures rouges sur les champs", "Icône ou indication visuelle"] },
        { type: "h", text: "Labels et placeholders" },
        { type: "code", filename: "html", language: "html", code: `<!-- ✅ Bon -->
<label for="email">Email *</label>
<input type="email" id="email" placeholder="exemple@mail.com">

<!-- ❌ Mauvais -->
<input type="email" placeholder="Email *">` },
        { type: "list", items: ["Préférer labels externes (au-dessus du champ)", "Éviter d'utiliser les placeholders comme label"] },
        { type: "h", text: "Accessibilité" },
        { type: "code", filename: "html", language: "html", code: `<!-- aria-live : annonce les erreurs dynamiquement -->
<span aria-live="polite" id="email-error">
  Email invalide
</span>

<!-- aria-describedby : lie le message au champ -->
<input type="email"
       aria-describedby="email-error"
       aria-invalid="true">` },
        { type: "h", text: "UX du formulaire" },
        { type: "list", items: [
          "Focus automatique sur le champ erroné",
          'Désactiver le bouton "submit" si invalide',
          "Feedback visuel (animations, icônes)",
          "Supprimer l'erreur quand le champ est corrigé",
          "Reset des styles et messages",
        ]},
        { type: "h", text: "Validation serveur" },
        { type: "list", items: [
          "Gérer les erreurs API (email déjà utilisée…)",
          "Messages d'erreur clairs et personnalisés",
          "Adaptés au type d'erreur",
        ]},
      ],
    },
    {
      id: "ux-21-seo",
      title: "21. SEO",
      blocks: [
        { type: "p", text: "Ensemble de techniques utilisées pour améliorer la visibilité d'un site web dans les résultats des moteurs de recherche." },
        { type: "h", text: "Les 4 piliers du SEO" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│                 4 PILIERS DU SEO                 │
│                                                  │
│  1. Mots-clés                                    │
│     └─ Comprendre ce que cherchent les users     │
│                                                  │
│  2. Optimisation rédactionnelle                  │
│     └─ Contenus pertinents et structurés         │
│                                                  │
│  3. Optimisation technique                       │
│     └─ Vitesse, structure, indexation            │
│                                                  │
│  4. Netlinking                                   │
│     └─ Liens externes pour renforcer l'autorité  │
└──────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Compléments importants" },
        { type: "list", items: [
          "Positionnement instable dû à l'évolution constante des algorithmes",
          "Données structurées aident Google à mieux comprendre le contenu",
          "SEO fonctionne en duo avec UX",
          "SEO local est essentiel pour entreprises géolocalisées",
          "Accessibilité améliore UX et le référencement",
          "Sécurité du site (HTTPS) est un facteur de confiance",
          "Contenu dupliqué pénalise",
          "SEO international / multilingue optimise les visibilités dans divers pays",
        ]},
        { type: "h", text: "Mesures SEO à faire" },
        { type: "list", items: [
          "Contenu de qualité (textes pertinents, mots-clés…)",
          "Optimiser images (réduire poids, formats adaptés…)",
          "Structure des permaliens « URL » (claires et optimisées)",
          "Mise en cache et performance (améliore temps de chargement)",
          "Choix du thème (rapide, léger, SEO-friendly)",
          "Optimisation mobile (site responsive)",
          "Optimisation balises techniques (<title>, <meta> …)",
          "Sécurité et HTTPS (certificat SSL et MAJ régulière)",
          "Suivi performances / indexations (Google Search Console & Analytics)",
          "Fichiers robots.txt et sitemap.xml (contrôle crawl et indexation)",
          "Backlinks — acquisition de liens externes de qualité",
          "Maillage interne — structure des liens internes logique et optimisée",
        ]},
        { type: "h", text: "Fonctionnement moteur de recherche" },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────┐
│       FONCTIONNEMENT MOTEUR DE RECHERCHE           │
│                                                    │
│  1. EXPLORATION                                    │
│     Robots (crawlers) parcourent le web            │
│     et découvrent le contenu des sites             │
│              │                                     │
│              ▼                                     │
│  2. INDEXATION                                     │
│     Infos analysées et stockées                    │
│     dans une BDD appelée "index"                   │
│              │                                     │
│              ▼                                     │
│  3. RECHERCHE                                      │
│     Analyse la requête utilisateur                 │
│     Comprend l'intention de recherche              │
│     Sélectionne les pages les plus pertinentes     │
│              │                                     │
│              ▼                                     │
│  4. RÉSULTAT                                       │
│     Pages classées par pertinence selon            │
│     +200 critères algorithmiques                   │
│     (SEO technique, contenu…)                      │
└────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Types de SEO" },
        { type: "table", headers: ["Type", "Description", "Risque"], rows: [
          ["White Hat", "Référencement éthique, conforme aux règles Google. Améliore le classement de manière durable et propre. Respecte les guidelines officielles.", "Aucun"],
          ["Black Hat", "Techniques frauduleuses ou manipulatrices pour tromper les moteurs. Gains rapides mais risqués. Non conforme aux règles Google.", "Pénalités Google, voire suppression de l'index"],
        ]},
        { type: "h", text: "Étapes de l'indexation" },
        { type: "p", text: "L'indexation est le processus par lequel les robots des moteurs de recherche (crawlers) explorent, analysent et enregistrent les pages web dans l'index du moteur de recherche." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│          ÉTAPES DE L'INDEXATION                  │
│                                                  │
│  1. DÉCOUVERTE DU SITE                           │
│     Via : liens externes / sitemap.xml / URL     │
│              │                                   │
│              ▼                                   │
│  2. EXPLORATION (Crawling)                       │
│     Robots parcourent les pages                  │
│     et analysent leur contenu                    │
│              │                                   │
│              ▼                                   │
│  3. INDEXATION                                   │
│     Pages stockées dans l'index                  │
│     (base de données géante)                     │
│              │                                   │
│              ▼                                   │
│  ⏱ Temps : quelques heures à plusieurs semaines  │
│  (selon qualité du site et fréquence de pub.)    │
└──────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Pénalité manuelle Google" },
        { type: "p", text: "Sanction appliquée par Google lorsqu'un site ne respecte pas les consignes de qualité (souvent à cause de pratiques SEO abusives ou Black Hat)." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│         PROCESSUS PÉNALITÉ MANUELLE              │
│                                                  │
│  1. DÉTECTION D'UNE INFRACTION                   │
│     ├─ Backlinks artificiels                     │
│     ├─ Contenu de mauvaise qualité               │
│     └─ Sur-optimisation SEO                      │
│              │                                   │
│              ▼                                   │
│  2. APPLICATION DE LA SANCTION                   │
│     ├─ Déclassé dans les résultats               │
│     └─ Retiré de l'index                         │
│              │                                   │
│              ▼                                   │
│  3. NOTIFICATION                                 │
│     Message dans Google Search Console           │
│              │                                   │
│              ▼                                   │
│  4. CORRECTION                                   │
│     ├─ Supprimer les liens toxiques              │
│     ├─ Améliorer le contenu                      │
│     └─ Respecter les guidelines Google           │
│              │                                   │
│              ▼                                   │
│  5. DEMANDE DE RÉEXAMEN                          │
│     Envoi d'une demande à Google                 │
│              │                                   │
│              ▼                                   │
│  6. LEVÉE DE LA PÉNALITÉ                         │
│     Si conforme → sanction levée, site rétabli   │
└──────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Facteurs bloquants SEO" },
        { type: "p", text: "Problèmes techniques ou structurels qui empêchent un site d'être correctement exploré, indexé ou bien positionné." },
        { type: "p", text: "1. Problèmes d'exploration et d'indexation" },
        { type: "list", items: [
          "Balise <meta robots> mal configurée",
          "Fichier robots.txt mal paramétré",
          "Technologies obsolètes ou non crawlables",
          "Pages en JavaScript mal rendues",
        ]},
        { type: "p", text: "2. Erreurs techniques" },
        { type: "list", items: ["Erreurs HTTP (403, 404, 500)", "Version de développement accessible en ligne", "Serveur instable ou mal configuré"] },
        { type: "p", text: "3. Problèmes de structure SEO" },
        { type: "list", items: [
          "Absence de maillage interne",
          "Contenu dupliqué",
          "Canonicalisation mal configurée",
          "Balises <title> et <h1> absentes ou mal utilisées",
        ]},
        { type: "p", text: "4. Performance et UX" },
        { type: "list", items: ["Temps de chargement trop long", "Mauvaises performances globales"] },
        { type: "p", text: "5. Sécurité et accès" },
        { type: "list", items: ["Formulaires ou contenus vulnérables", "Restrictions d'accès mal gérées"] },
        { type: "h", text: "Facteurs ralentissant le SEO" },
        { type: "p", text: "Éléments qui n'empêchent pas totalement l'indexation, mais qui dégradent les performances SEO et le positionnement." },
        { type: "p", text: "1. Performance et vitesse" },
        { type: "list", items: ["Temps de chargement trop long", "Pages trop lourdes (images, scripts, médias)", "Utilisation excessive d'éléments comme <iframe>"] },
        { type: "p", text: "2. Structure du site" },
        { type: "list", items: ["Pages trop profondes dans l'arborescence", "Mauvaise structure des liens internes", "URLs dynamiques ou trop longues"] },
        { type: "p", text: "3. Contenu et optimisation" },
        { type: "list", items: [
          "Pages très graphiques et pauvres en texte",
          "Contenu dupliqué",
          "Mauvaise utilisation des balises <meta>",
          "Absence ou mauvaise utilisation des balises sémantiques",
        ]},
        { type: "p", text: "4. Mobile et compatibilité" },
        { type: "list", items: ["Absence de version mobile optimisée (non responsive)", "Problèmes liés au JavaScript (rendu incomplet ou lent)"] },
        { type: "p", text: "5. Indexation et fichiers techniques" },
        { type: "list", items: ["Absence de sitemap.xml", "Fichier robots.txt mal configuré"] },
        { type: "h", text: "Contenu dupliqué pénalisant SEO" },
        { type: "p", text: "Contenu identique ou très similaire présent sur plusieurs URLs." },
        { type: "code", filename: "text", language: "text", code: `Exemple de contenu dupliqué :

  https://monsite.com/article
  http://monsite.com/article       ← HTTP vs HTTPS
  https://www.monsite.com/article  ← avec www
  https://monsite.com/article/     ← trailing slash

→ 4 URLs pour le même contenu = duplication !
Solution : redirection 301 vers URL canonique` },
        { type: "p", text: "Causes :" },
        { type: "list", items: [
          "1. Problèmes techniques d'accès (HTTP/HTTPS, www/sans-www)",
          "2. Versions multiples du site (desktop vs mobile mal gérées)",
          "3. Sites multilingues sans balises hreflang",
          "4. Structure interne (contenu dans plusieurs catégories)",
          "5. Sous-domaines dupliquant le contenu principal",
          "6. Copie directe / plagiat",
        ]},
        { type: "h", text: "Optimisation des URL (SEO)" },
        { type: "p", text: "Créer des adresses de pages claires, lisibles et adaptées au référencement naturel." },
        { type: "p", text: "Structure et lisibilité :" },
        { type: "list", items: [
          "Utilisation de tirets pour séparer les mots",
          "URLs lisibles, logiques et compréhensibles",
          "Cohérence avec le contenu de la page",
          "Inclure des mots-clés pertinents",
          "Utilisation cohérente des minuscules",
          "Éviter les répétitions inutiles",
          "Limiter la longueur (idéalement < 100 caractères)",
        ]},
        { type: "code", filename: "text", language: "text", code: `✅ Bonne URL :
https://monsite.com/fr/creer-site-web-responsive

❌ Mauvaise URL :
https://monsite.com/page?id=42&cat=3&lang=fr&v=2` },
        { type: "p", text: "Technique et configuration :" },
        { type: "list", items: [
          "Transformer les URLs dynamiques en URLs statiques (ex : via .htaccess)",
          "Utilisation du HTTPS",
          "Gestion correcte des trailing slashes (/)",
          "Éviter les redirections multiples",
        ]},
        { type: "p", text: "Erreurs à éviter :" },
        { type: "list", items: [
          "Texte ou liens cachés (visibility: hidden, display: none)",
          "Redirections trompeuses ou « cachées »",
          "URLs incohérentes ou illisibles",
        ]},
        { type: "h", text: "Référencement des médias (SEO)" },
        { type: "p", text: "Images :" },
        { type: "code", filename: "html", language: "html", code: `<!-- Exemple image optimisée SEO -->
<img
  src="creation-site-web-paris.webp"
  alt="Agence création site web à Paris — vue de bureau"
  width="800"
  height="450"
  loading="lazy"
>` },
        { type: "list", items: [
          "Positionner les images près d'un texte pertinent",
          "Utiliser des noms de fichiers descriptifs",
          "Ajouter des attributs ALT (texte alternatif pertinent)",
          "Optimiser le poids et les dimensions",
          "Utiliser des formats modernes (WebP, AVIF…)",
          "Mettre en place le lazy loading (chargement différé)",
          "Utiliser des sitemaps dédiés aux images",
          "Respecter les droits d'utilisation (copyright)",
        ]},
        { type: "p", text: "Vidéos :" },
        { type: "list", items: [
          "Ajouter des métadonnées (titre, description…)",
          "Proposer des transcriptions et sous-titres",
          "Optimiser l'hébergement et le temps de chargement",
          "Utiliser des miniatures (thumbnails) attractives et optimisées",
        ]},
        { type: "p", text: "Audio :" },
        { type: "list", items: ["Utiliser des balises spécifiques si nécessaire", "Ajouter des métadonnées (titre, description…)"] },
        { type: "p", text: "Documents (PDF, etc.) :" },
        { type: "list", items: ["Optimiser les titres et métadonnées", "Rendre les documents indexables par Google", "Structurer correctement le contenu"] },
        { type: "p", text: "GIF / Animations :" },
        { type: "list", items: ["Optimiser le poids et le format", "Ajouter un texte alternatif si possible"] },
        { type: "p", text: "Infographies :" },
        { type: "list", items: ["Ajouter une description textuelle", "Utiliser la balise ALT pour le référencement"] },
      ],
    },
    {
      id: "ux-22-criteres-evaluation",
      title: "22. Critères d'Évaluation Ergonomique",
      blocks: [
        { type: "h", text: "Critères de Bastien-Scapin (1993)" },
        { type: "p", text: "Christian Bastien et Dominique Scapin — Grille de critères ergonomiques en 8 thématiques." },
        { type: "table", headers: ["#", "Critère", "Description"], rows: [
          ["1", "Guidage", "Ensemble des moyens pour conseiller, orienter, informer et conduire l'utilisateur (messages, alarmes, labels…)"],
          ["2", "Charge de travail", "Éléments réduisant la charge perceptive ou mnésique des utilisateurs, augmentant l'efficacité du dialogue"],
          ["3", "Contrôle explicite", "Prise en compte des actions explicites des utilisateurs et contrôle qu'ils ont sur le traitement de leurs actions"],
          ["4", "Adaptabilité", "Capacité du système à réagir selon le contexte et selon les besoins et préférences des utilisateurs"],
          ["5", "Gestion des erreurs", "Moyens d'éviter/réduire les erreurs et de les corriger (saisies incorrectes, formats inadéquats, syntaxe incorrecte…)"],
          ["6", "Homogénéité/Cohérence", "Les choix de conception (codes, dénominations, formats, procédures) sont conservés pour contextes identiques et différents pour contextes différents"],
          ["7", "Signifiance des codes et dénominations", "Adéquation entre l'objet/information affichée et son référent — relation sémantique forte"],
          ["8", "Compatibilité", "Accord entre caractéristiques des utilisateurs (mémoire, perceptions, habitudes, compétences, âge, attentes) et l'organisation de l'interface"],
        ]},
        { type: "note", variant: "info", text: "Document complet : hal.inria.fr/inria-00070012/document" },
        { type: "h", text: "Critères de Nielsen (10 heuristiques)" },
        { type: "p", text: "Jakob Nielsen — méthode d'évaluation heuristique en 10 critères." },
        { type: "table", headers: ["#", "Critère (EN)", "Critère (FR)", "Description"], rows: [
          ["1", "Visibility of system status", "Visibilité de l'état du système", "Fournir des retours à l'utilisateur sur l'état de ses actions (messages, changements visuels)"],
          ["2", "Match between system and the real world", "Correspondance avec le monde réel", "Utiliser des codes reconnus dans le monde réel (mots, icônes, couleurs — ex : rouge = erreur)"],
          ["3", "User control and freedom", "Contrôle et liberté de l'utilisateur", "Permettre d'annuler une action ou revenir en arrière, donner différentes options pour une tâche"],
          ["4", "Consistency and standards", "Cohérence et normes", "Rester cohérent avec les standards et habitudes du web, conventions communes"],
          ["5", "Error prevention", "Prévention des erreurs", "Empêcher ou alerter sur les erreurs potentielles (vérification données, instructions claires)"],
          ["6", "Recognition rather than recall", "Reconnaissance visuelle plutôt que mémoire", "Réduire les exigences de mémorisation (termes et icônes reconnus, indices visuels)"],
          ["7", "Flexibility and efficiency of use", "Flexibilité et efficacité d'usage", "Séparer les éléments en différentes parties (onglets, menus déroulants) pour navigation efficace"],
          ["8", "Aesthetic and minimalist design", "Esthétique et minimalisme", "Interface visuellement agréable sans surcharger en options ou fonctionnalités"],
          ["9", "Help users recognize, diagnose, and recover from errors", "Aide à la tâche", "Contrastes adaptés, taille de police modifiable, messages d'erreur clairs et explicites"],
          ["10", "Help and documentation", "Aide et documentation", "Documentation complète et accessible pour aider à comprendre l'interface et résoudre les problèmes"],
        ]},
        { type: "h", text: "À retenir : les critères d'évaluation" },
        { type: "list", items: [
          "Les grilles de critères ergonomiques évaluent la cohérence d'une interface",
          "Bastien-Scapin : 8 thématiques (guidage, charge de travail, contrôle explicite, adaptabilité, gestion des erreurs, homogénéité, signifiance, compatibilité)",
          "Nielsen : 10 critères (visibilité, correspondance monde réel, contrôle, cohérence, prévention erreurs, reconnaissance, flexibilité, minimalisme, aide à la tâche, documentation)",
        ]},
      ],
    },
    {
      id: "ux-23-audit-ux",
      title: "23. Audit UX",
      blocks: [
        { type: "h", text: "Intérêt d'un audit UX" },
        { type: "p", text: "L'audit UX évalue l'expérience utilisateur d'un produit pour déterminer ses forces et faiblesses en termes d'ergonomie, d'efficacité et de conversion." },
        { type: "p", text: "Objectifs de l'audit :" },
        { type: "list", items: [
          "Mieux comprendre les utilisateurs et leurs intentions",
          "Repérer les problèmes d'utilisabilité",
          "Proposer des solutions d'amélioration",
          "Optimiser la navigation et la rendre plus fluide",
          "Déterminer les opportunités d'innovation et de différenciation",
        ]},
        { type: "h", text: "Étapes de l'audit" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│              ÉTAPES D'UN AUDIT UX                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. PRÉPARATION                                         │
│     └── Définir objectifs, utilisateurs cibles,        │
│         méthodes et outils                             │
│              │                                          │
│              ▼                                          │
│  2. COLLECTE DE DONNÉES                                 │
│     └── Entretiens, tests, Google Analytics…            │
│         Points forts et points faibles de l'interface  │
│              │                                          │
│              ▼                                          │
│  3. ANALYSE DES DONNÉES                                 │
│     └── Actions à mettre en place, ébauches,           │
│         grilles d'évaluation ergonomiques              │
│         (Bastien-Scapin, Nielsen)                      │
│              │                                          │
│              ▼                                          │
│  4. PRÉSENTATION DES RÉSULTATS                          │
│     └── Recommandations d'amélioration,                │
│         feuilles de route pour le développement futur  │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Outils d'évaluation" },
        { type: "p", text: "Questionnaires en ligne (Google Forms, Typeform, SurveyMonkey) — questions types pour évaluer un site web :" },
        { type: "list", items: [
          "Qu'espériez-vous trouver sur le site ?",
          "Avez-vous trouvé ce que vous cherchiez et qu'est-ce qui vous y a aidé ?",
          "Pouvez-vous décrire votre parcours ? Difficultés ou moments de confusion ?",
          "Qu'est-ce qui vous a plu le plus ? Le moins ?",
          "Si vous deviez recommander ce site à un ami, qu'est-ce que vous lui diriez ?",
          "Auriez-vous des suggestions d'amélioration ?",
        ]},
        { type: "p", text: "Heatmaps (Crazy Egg, Hotjar) : visualiser les zones les plus fréquemment parcourues en analysant mouvements de souris et clics." },
        { type: "p", text: "Enregistrements de sessions (Hotjar, FullStory, UserTesting) : visualiser les parcours et actions des utilisateurs en enregistrant leur activité sur l'interface." },
        { type: "h", text: "Google Analytics — métriques clés" },
        { type: "table", headers: ["Métrique", "Description", "Interprétation"], rows: [
          ["Nombre de visites", "Combien de personnes ont visité le site", "—"],
          ["Taux de rebond", "% visiteurs ayant quitté après une seule page", "Taux élevé = contenu non pertinent ou non trouvé"],
          ["Temps de visite", "Temps moyen passé sur le site", "Élevé = contenu de qualité"],
          ["Taux de conversion", "% visiteurs ayant accompli une action cible", "Élevé = site performant"],
          ["Pages les plus visitées", "Pages les plus populaires", "Indique les contenus les plus intéressants"],
          ["Origine géographique", "Provenance des visiteurs", "Aide à cibler le contenu et le marketing"],
        ]},
        { type: "h", text: "À retenir : l'audit UX" },
        { type: "list", items: [
          "Audit UX = repérer les problèmes d'une interface et proposer des améliorations",
          "Étapes : préparation → collecte de données → analyse → présentation des résultats et recommandations",
          "Outils : questionnaires en ligne, heatmaps, enregistrements de sessions, Google Analytics",
        ]},
      ],
    },
    {
      id: "ux-24-perimetre-ux-designer",
      title: "24. Périmètre de l'UX Designer",
      blocks: [
        { type: "h", text: "Livrables avant la conception" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│          LIVRABLES UX — AVANT LA CONCEPTION             │
├────────────────────┬────────────────────────────────────┤
│ 1. Étude de marché │ Recherches marché, contexte,       │
│                    │ utilisateurs cibles. Notes          │
│                    │ structurées (Google Slides…)        │
├────────────────────┼────────────────────────────────────┤
│ 2. Benchmark       │ Étudier les concurrents,           │
│                    │ lister fonctionnalités, analyser    │
│                    │ points positifs et négatifs         │
├────────────────────┼────────────────────────────────────┤
│ 3. Personas        │ 1 à 3 fiches personas : traits     │
│                    │ sociologiques + comportementaux     │
├────────────────────┼────────────────────────────────────┤
│ 4. Cartes          │ Aperçu de ce que l'utilisateur     │
│    d'empathie      │ voit, entend et ressent             │
├────────────────────┼────────────────────────────────────┤
│ 5. Parcours        │ Comprendre l'interaction :         │
│    utilisateur     │ avant / pendant / après             │
├────────────────────┼────────────────────────────────────┤
│ 6. Dressage des    │ Benchmark + besoins users →        │
│    fonctionnalités │ tri de cartes, inventaire contenu   │
├────────────────────┼────────────────────────────────────┤
│ 7. Sitemap /       │ Arborescence globale avant         │
│    Arborescence    │ de créer les maquettes              │
├────────────────────┼────────────────────────────────────┤
│ 8. Maquettes et    │ Croquis, blocs, zones de texte,    │
│    croquis         │ images, CTA, annotations            │
└────────────────────┴────────────────────────────────────┘`,
        },
        { type: "h", text: "Méthodes d'évaluation après la conception" },
        { type: "table", headers: ["Méthode d'évaluation", "Description"], rows: [
          ["Commentaires et documents texte", "Lister les points à améliorer basés sur critères ergonomiques. Commentaires directement sur les prototypes"],
          ["UX Mapping", "Cartes d'empathie et parcours utilisateur en observant les interactions avec le prototype"],
          ["Tests A/B", "Deux versions d'une page en affichage aléatoire → comparer les résultats"],
          ["Documents de synthèse", "Google Analytics, Hotjar — heatmaps, enregistrements de sessions → résultats structurés pour l'équipe"],
        ]},
        { type: "h", text: "À retenir : l'intervention de l'UX designer" },
        { type: "p", text: "Avant la conception :" },
        { type: "code", filename: "text", language: "text", code: `Étude de marché → Benchmark → Personas → Carte d'empathie
→ Parcours utilisateur → Fonctionnalités → Arborescence
→ Croquis et maquettes` },
        { type: "p", text: "Après la conception (évaluation) :" },
        { type: "code", filename: "text", language: "text", code: `Commentaires et résumés → Mapping → Tests A/B
→ Documents de synthèse` },
      ],
    },
    ...laConsoleArticlesAccessibilite,
  ],
};
