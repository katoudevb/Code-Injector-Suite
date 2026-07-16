import type { Section } from "../types";

export const devops: Section = {
  id: "devops",
  title: "DevOps",
  icon: "Workflow",
  tags: ["js", "ts"],
  subsections: [
    {
      id: "devops-metier",
      title: "Le métier de DevOps",
      blocks: [
        { type: "p", text: "Le DevOps est une approche qui relie les développeurs (Dev) et les administrateurs systèmes (Ops). Elle améliore la collaboration et automatise la livraison logicielle." },
        { type: "h", text: "Rôle" },
        { type: "p", text: "Le DevOps agit comme un pont entre développement et infrastructure :" },
        { type: "list", items: [
          "développe les outils d'automatisation",
          "améliore les processus de livraison",
          "gère les environnements de production",
          "surveille les systèmes",
        ]},
        {
          type: "diagram",
          content: `         ┌─────────────┐
         │     DEV     │  ← code, fonctionnalités
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │   DEVOPS    │  ← pont, automatisation
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │     OPS     │  ← infra, production
         └─────────────┘`,
        },
        { type: "h", text: "Objectif" },
        { type: "list", items: [
          "accélérer la livraison des applications",
          "réduire les erreurs humaines",
          "automatiser les déploiements",
          "améliorer la stabilité des systèmes",
        ]},
      ],
    },
    {
      id: "devops-cloud-native-competences",
      title: "Cloud-native, Agile et compétences DevOps",
      blocks: [
        { type: "h", text: "Cloud-native" },
        { type: "p", text: "Le cloud-native consiste à développer des applications conçues pour fonctionner dans le cloud. Basé sur des infrastructures publiques, privées ou hybrides." },
        { type: "note", variant: "info", title: "Avantages", text: "Scalabilité (adaptation automatique), déploiement rapide, meilleure flexibilité." },
        { type: "h", text: "DevOps + Agile" },
        { type: "p", text: "DevOps fonctionne très bien avec les méthodes Agile et CI/CD (intégration et déploiement continus)." },
        { type: "h", text: "Compétences DevOps" },
        { type: "list", items: [
          "automatisation (scripts, pipelines)",
          "gestion des serveurs",
          "cloud computing",
          "CI/CD",
          "monitoring",
        ]},
        { type: "h", text: "No-code (important à comprendre)" },
        { type: "p", text: "Le no-code permet de créer des applications sans écrire de code, via une interface visuelle (drag & drop)." },
        { type: "list", items: [
          "les outils no-code sont construits avec du code",
          "le no-code ne remplace pas le développement",
        ]},
      ],
    },
    {
      id: "devops-4-piliers",
      title: "Les 4 piliers du DevOps",
      blocks: [
        { type: "p", text: "Le DevOps repose sur 4 piliers principaux : culture, automatisation, mesure et partage." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│           4 PILIERS DU DEVOPS            │
├──────────────┬──────────────┬────────────┤
│   CULTURE    │AUTOMATISATION│  MESURE    │ PARTAGE
│  collab.     │  outils,     │ monitoring │ knowledge
│  équipes     │  scripts     │ KPIs       │ sharing
└──────────────┴──────────────┴────────────┘`,
        },
        { type: "h", text: "La culture DevOps" },
        { type: "p", text: "La culture DevOps repose sur une collaboration étroite entre les développeurs et les équipes opérations (Ops)." },
        { type: "list", items: [
          "responsabilité partagée",
          "travail en équipe multidisciplinaire",
          "gestion complète du cycle de vie d'un produit",
        ]},
        { type: "p", text: "Chaque équipe participe au développement, au déploiement et à la maintenance." },
        { type: "h", text: "L'automatisation" },
        { type: "p", text: "L'automatisation consiste à utiliser des outils pour réduire les tâches manuelles, accélérer les déploiements et limiter les erreurs humaines. Objectif : améliorer la vitesse, augmenter la fiabilité, faciliter les mises à jour." },
        { type: "h", text: "La mesure (Monitoring)" },
        { type: "p", text: "La mesure consiste à collecter des données pour analyser les performances, détecter les problèmes et améliorer les processus." },
        { type: "table", headers: ["Indicateur", "Description"], rows: [
          ["Lead time", "Temps entre modification et production"],
          ["Failure rate", "Taux d'échec des déploiements"],
          ["Deployment frequency", "Fréquence de déploiement"],
          ["MTTR", "Temps moyen de récupération après incident"],
        ]},
        { type: "note", variant: "info", title: "Objectif", text: "Améliorer en continu le système et le pipeline." },
        { type: "h", text: "Le partage (collaboration)" },
        { type: "p", text: "Le partage concerne la communication entre équipes, la transmission de connaissances et les bonnes pratiques." },
        { type: "list", items: [
          "éviter les silos (équipes isolées)",
          "améliorer la collaboration",
          "accélérer la résolution de problèmes",
        ]},
      ],
    },
    {
      id: "devops-planifier-deploiement",
      title: "Planifier son déploiement",
      blocks: [
        { type: "p", text: "La planification du déploiement consiste à définir comment une application sera mise en production, dans quel état futur on veut arriver, et quelles étapes sont nécessaires pour y parvenir." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│           PLANIFICATION DÉPLOIEMENT             │
├────────────┬──────────────┬─────────────────────┤
│ 1.OBJECTIFS│ 2.ÉTAT LIEUX │ 3.VISION FUTURE      │
│ ROI        │ outils       │ amélioration         │
│ KPIs       │ processus    │ automatisation max   │
│ perfs      │ compétences  │ déploiement rapide   │
│            │ limites tech │ réduction erreurs    │
└────────────┴──────────────┴─────────────────────┘
                        │
           ┌────────────▼────────────┐
           │   4. ROADMAP DEVOPS     │
           │  état actuel → cible    │
           └─────────────────────────┘`,
        },
        { type: "h", text: "1. Les objectifs" },
        { type: "list", items: ["retour sur investissement (ROI)", "performance attendue", "indicateurs de réussite (KPIs)"] },
        { type: "h", text: "2. État des lieux (situation actuelle)" },
        { type: "p", text: "On identifie :" },
        { type: "list", items: [
          "les outils utilisés",
          "les processus actuels",
          "les compétences de l'équipe",
          "la culture DevOps",
          "les limites techniques",
        ]},
        { type: "h", text: "3. Vision future" },
        { type: "p", text: "On définit l'état cible du système. Contenu :" },
        { type: "list", items: [
          "amélioration des processus",
          "automatisation maximale",
          "déploiement plus rapide",
          "réduction des erreurs",
        ]},
        { type: "p", text: "On priorise les actions importantes." },
        { type: "h", text: "4. Feuille de route (roadmap DevOps)" },
        { type: "p", text: "Plan d'action qui permet de passer de l'état actuel à l'état futur." },
        { type: "list", items: [
          "créer un environnement de déploiement automatisé",
          "automatiser les tests avant production",
          "créer un script de déploiement",
          "séparer tests unitaires et tests fonctionnels",
          "mettre en place un pipeline CI/CD complet, etc.",
        ]},
        { type: "note", variant: "success", title: "Objectif", text: "Transformer le déploiement en processus automatisé, reproductible et sécurisé." },
        { type: "h", text: "Vision globale DevOps" },
        { type: "p", text: "On arrive à un pipeline complet :" },
        {
          type: "diagram",
          content: ` ┌──────────┐    ┌───────┐    ┌──────┐    ┌──────┐    ┌────────────┐
 │DÉVELOPP. │───▶│ TESTS │───▶│  CI  │───▶│  CD  │───▶│ PRODUCTION │
 └──────────┘    └───────┘    └──────┘    └──────┘    └────────────┘
   code          unit.        intégra-    déploie-     app live
   commit        intégr.      tion cont.  ment cont.`,
        },
        { type: "h", text: "Cas d'usage" },
        { type: "p", text: "Site web : mise à jour automatique du serveur, déploiement après validation." },
        { type: "p", text: "Application mobile : publication sur les stores (Google / Apple), gestion des versions." },
        { type: "h", text: "Release note" },
        { type: "p", text: "Document qui accompagne une nouvelle version." },
        { type: "list", items: ["nouveautés", "corrections de bugs", "améliorations", "versions précédentes"] },
        { type: "note", variant: "info", title: "Objectif", text: "Informer les utilisateurs, documenter les changements, assurer la traçabilité des versions." },
      ],
    },
    {
      id: "devops-conteneurs",
      title: "Assurer la maintenabilité du code : les conteneurs",
      blocks: [
        { type: "p", text: "Un conteneur est un paquet léger qui contient une application, ses dépendances et sa configuration. Il permet d'exécuter une application dans un environnement isolé et portable." },
        { type: "h", text: "Objectif" },
        { type: "list", items: [
          "exécuter une application partout",
          "garantir le même comportement sur tous les systèmes",
          "éviter les problèmes de compatibilité",
        ]},
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "portabilité (Windows / Linux / Mac)",
          "rapidité de déploiement",
          "isolation des applications",
          "environnement reproductible",
        ]},
        { type: "h", text: "Conteneurs vs machines virtuelles" },
        {
          type: "diagram",
          content: `┌──────────────────────────┬──────────────────────────┐
│    MACHINE VIRTUELLE     │    CONTENEUR DOCKER       │
├──────────────────────────┼──────────────────────────┤
│ OS complet inclus        │ Partage l'OS hôte         │
│ Lourde                   │ Léger                     │
│ Lente à démarrer         │ Rapide                    │
│ Isolation complète       │ Isolé au niveau app seul. │
│ ~GigaOctets              │ ~MégaOctets               │
└──────────────────────────┴──────────────────────────┘`,
        },
      ],
    },
    {
      id: "devops-evolutions-technologiques",
      title: "Identifier les évolutions technologiques",
      blocks: [
        { type: "p", text: "En DevOps, il est essentiel de suivre deux grands axes : le Cloud et la sécurité." },
        { type: "h", text: "Le Cloud" },
        { type: "p", text: "Le cloud computing permet d'utiliser des services informatiques via Internet sans gérer l'infrastructure physique. Les ressources sont hébergées chez des fournisseurs." },
        { type: "table", headers: ["Service", "Description"], rows: [
          ["Cloud computing", "Accès à des ressources informatiques à distance"],
          ["Machine Learning", "Systèmes qui apprennent à partir des données"],
          ["Intelligence Artificielle", "Systèmes capables de reproduire des comportements humains (raisonnement, décision, création)"],
        ]},
        { type: "h", text: "La sécurité" },
        { type: "p", text: "La sécurité en DevOps vise à protéger les données, sécuriser les applications et garantir la conformité (RGPD)." },
        { type: "h", text: "Nouvelles méthodologies DevOps" },
        { type: "p", text: "DevSecOps : sécurité intégrée dès le début du développement, sécurité automatique dans la chaîne CI/CD." },
        { type: "p", text: "BizDevOps : lien entre business, développement et opérations. Aligner technique et stratégie." },
        {
          type: "diagram",
          content: `          ┌──────────────────────────┐
          │        BizDevOps         │
          │  Business + Dev + Ops    │
          └──────────┬───────────────┘
           ┌─────────┼─────────┐
      ┌────▼───┐ ┌───▼───┐ ┌───▼──┐
      │Business│ │  Dev  │ │  Ops │
      └────────┘ └───────┘ └──────┘
          valeur    code    infra`,
        },
        { type: "h", text: "Évolution globale DevOps" },
        { type: "list", items: [
          "automatisation accrue",
          "cloud dominant",
          "sécurité intégrée dès le début",
          "collaboration renforcée",
        ]},
      ],
    },
    {
      id: "devops-veille",
      title: "Mettre en place une récurrence de veille",
      blocks: [
        { type: "p", text: "La récurrence de veille consiste à organiser la fréquence à laquelle on collecte et traite l'information. Cela permet de rester à jour sans surcharge d'information." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│             FRÉQUENCE DE VEILLE             │
├──────────────┬──────────────┬───────────────┤
│  QUOTIDIENNE │  HEBDOMADAIRE│   MENSUELLE   │
│ Réseaux soc. │ Newsletters  │ Mini projets  │
│ Hashtags     │ Blogs spéc.  │ POC           │
│ Comptes spéc.│ Résumés      │ Nouveaux outils│
└──────────────┴──────────────┴───────────────┘`,
        },
        { type: "h", text: "Veille quotidienne" },
        { type: "p", text: "Suivre les tendances en temps réel et détecter rapidement les nouveautés." },
        { type: "list", items: [
          "réseaux sociaux (Twitter/X, LinkedIn…)",
          "hashtags techniques",
          "comptes spécialisés DevOps / cloud",
        ]},
        { type: "h", text: "Veille hebdomadaire" },
        { type: "list", items: ["newsletters techniques", "blogs spécialisés", "résumés d'actualités DevOps"] },
        { type: "p", text: "Organisation : utilisation d'une boîte mail structurée (filtres automatiques, dossiers par sujet, tri des newsletters). Permet de ne pas être submergé." },
        { type: "h", text: "Veille mensuelle" },
        { type: "p", text: "Pour réaliser un mini projet, tester une nouvelle technologie ou créer un POC (Proof of Concept)." },
        { type: "list", items: ["tests d'outils", "nouveaux frameworks", "technologies émergentes"] },
      ],
    },
    {
      id: "devops-documentation",
      title: "Réunir les informations utiles (documentation)",
      blocks: [
        { type: "p", text: "Centraliser les informations pour mieux organiser la veille, faciliter la collaboration, éviter la perte d'informations et améliorer la productivité." },
        { type: "h", text: "Google Workspace" },
        { type: "list", items: [
          "Google Docs → rédaction de documents",
          "Google Sheets → tableaux / données",
          "Google Slides → présentations",
        ]},
        { type: "p", text: "Outils simples pour collaborer en temps réel." },
        { type: "h", text: "Outils collaboratifs en entreprise" },
        { type: "p", text: "Atlassian est très utilisé en méthode Agile. Outils principaux : Confluence (documentation collaborative) et Jira (gestion des tâches et projets). Permet de relier docs + tâches." },
        { type: "h", text: "Wiki collaboratif" },
        { type: "p", text: "Site où plusieurs personnes peuvent écrire des pages, modifier du contenu, créer des liens entre pages." },
        { type: "list", items: ["historique des modifications", "traçabilité des auteurs"] },
        { type: "h", text: "Outils modernes de prise de notes" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["Notion", "No-code : pages, bases de données, documentation complète"],
          ["Obsidian", "Prise de notes connectées (liens entre idées)"],
          ["Coda", "Documents + bases de données interactives"],
        ]},
        { type: "h", text: "Organisation des informations" },
        { type: "p", text: "Créer une arborescence claire :" },
        {
          type: "diagram",
          content: `Veille/
├── React/
│   ├── Authentification
│   ├── Routing
│   └── Design system
└── API / backend`,
        },
      ],
    },
    {
      id: "devops-securite-problematiques",
      title: "Veiller aux problématiques de sécurité",
      blocks: [
        { type: "p", text: "La sécurité en DevOps consiste à détecter les attaques, réagir rapidement, limiter les dégâts, protéger les données et systèmes." },
        { type: "h", text: "Questions essentielles à se poser" },
        { type: "p", text: "Détection : comment détecter une attaque ? Quels outils de monitoring utiliser ? Comment être alerté rapidement ?" },
        { type: "p", text: "Réaction : que faire en cas d'intrusion ? Peut-on couper l'accès au système ? Peut-on redémarrer ou isoler le serveur ? Souvent via interface d'hébergeur ou scripts automatisés." },
        { type: "p", text: "Récupération : comment restaurer les données ? Y a-t-il une sauvegarde récente ? Peut-on revenir à une version stable ?" },
        { type: "h", text: "Sauvegarde et restauration" },
        { type: "p", text: "Mettre en place une politique de backup :" },
        { type: "list", items: ["sauvegardes quotidiennes", "stockage externe", "versions sur plusieurs jours"] },
      ],
    },
    {
      id: "devops-principes-securite",
      title: "Principes de sécurité",
      blocks: [
        { type: "h", text: "Séparation des responsabilités" },
        {
          type: "diagram",
          content: `┌──────────────┬──────────────────┬──────────────────┐
│ DÉVELOPPEURS │  OPS (opérations)│    SÉCURITÉ      │
├──────────────┼──────────────────┼──────────────────┤
│ Écrivent     │ Gèrent           │ Protègent        │
│ le code      │ l'infrastructure │ systèmes/données │
└──────────────┴──────────────────┴──────────────────┘`,
        },
        { type: "p", text: "Éviter les erreurs de gestion et réduire les risques." },
        { type: "h", text: "Gestion des secrets" },
        { type: "p", text: "Les secrets sont : mots de passe, clés API, tokens, certificats SSH." },
        { type: "note", variant: "warning", title: "Bonne pratique", text: "Jamais stocker dans le code. Utiliser un coffre-fort sécurisé (gestionnaire de secrets, environnement sécurisé). Rotation des secrets : changer régulièrement les accès pour réduire les risques." },
        { type: "h", text: "Principe du moindre privilège" },
        { type: "p", text: "Chaque utilisateur ou machine ne doit avoir que les droits strictement nécessaires." },
        { type: "list", items: [
          "un développeur ne doit pas avoir accès à toute la base de production",
          "un service ne doit accéder qu'à ses ressources",
        ]},
        { type: "h", text: "Idée clé DevSecOps" },
        { type: "p", text: "La sécurité doit être intégrée dès le début du développement et dans toute la chaîne CI/CD." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────┐
│              DevSecOps                     │
│                                            │
│  Dev ──▶ Sec ──▶ Ops                       │
│   │       │       │                        │
│ code  sécurité  infra                      │
│        intégrée                            │
│        dès le début                        │
└────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "devops-cybersecurite-risques",
      title: "Gérer la cybersécurité et les risques",
      blocks: [
        { type: "p", text: "La cybersécurité vise à protéger les systèmes, réduire les risques, détecter les vulnérabilités, sécuriser les données et services." },
        { type: "h", text: "Gestion des risques" },
        { type: "p", text: "La gestion des risques consiste à identifier ce qui doit être protégé (les actifs), analyser les menaces possibles et réduire les risques." },
        { type: "list", items: [
          "identifier les actifs (données, serveurs, services)",
          "analyser les menaces",
          "évaluer les impacts",
          "définir les protections nécessaires",
        ]},
        { type: "h", text: "PSSI (Politique de Sécurité)" },
        { type: "p", text: "La PSSI (Politique de Sécurité des Systèmes d'Information) définit les règles de sécurité d'une organisation." },
        { type: "list", items: [
          "règles de protection des données",
          "gestion des accès",
          "organisation de la sécurité",
          "procédures en cas d'incident",
        ]},
        { type: "p", text: "Étapes de construction : identifier les parties prenantes, analyser le niveau de maturité cyber, inventorier les actifs, analyser les risques." },
        { type: "note", variant: "info", title: "Ressource", text: "https://www.veryfrog.com/blog/pssi-exemple-de-plan/" },
        { type: "h", text: "Inventaire des actifs" },
        { type: "p", text: "Faire un inventaire consiste à recenser tout ce qui doit être protégé. Exemples d'actifs : serveurs, bases de données, applications, API, données utilisateurs. Outils : outils de cartographie et gestion d'infrastructure." },
        { type: "h", text: "Gestion des vulnérabilités" },
        { type: "p", text: "Les vulnérabilités sont des failles dans un système." },
        { type: "list", items: ["détecter les failles", "les corriger rapidement", "éviter les attaques"] },
        { type: "p", text: "Outils : vulnerability management software — pour scanner les systèmes, identifier les failles, suivre les correctifs." },
        { type: "h", text: "Mesure de la sécurité" },
        { type: "p", text: "Améliorer en continu la sécurité du système." },
        { type: "table", headers: ["KPI", "Description"], rows: [
          ["Nombre de vulnérabilités", "Failles détectées"],
          ["Délai de correction des failles", "Rapidité de remédiation"],
          ["Niveau de sécurité des serveurs", "Score global"],
          ["Temps d'application des patchs", "Vélocité des correctifs"],
        ]},
      ],
    },
    {
      id: "devops-bonnes-pratiques-integration",
      title: "Intégrer les bonnes pratiques DevOps",
      blocks: [
        { type: "p", text: "Pour améliorer la collaboration entre Dev et Ops, accélérer les livraisons, garantir la qualité du produit et fiabiliser les mises en production." },
        { type: "h", text: "1. Mise en place de la CI/CD" },
        { type: "p", text: "La CI/CD permet d'automatiser : l'intégration du code, les tests, le déploiement en production." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│                  CI / CD                    │
├──────────────────────┬──────────────────────┤
│  CI                  │  CD                  │
│  Continuous          │  Continuous Delivery │
│  Integration         │  / Deployment        │
├──────────────────────┼──────────────────────┤
│ • intégrer le code   │ • auto mise en prod  │
│   régulièrement      │ • livrer + souvent   │
│ • tests automatiques │   et + rapidement    │
│ • détecter erreurs   │                      │
└──────────────────────┴──────────────────────┘`,
        },
        { type: "note", variant: "success", title: "Objectif", text: "Réduire les erreurs, accélérer les mises à jour, améliorer la fiabilité des livraisons." },
        { type: "h", text: "2. Automatisation des tests" },
        { type: "p", text: "L'automatisation des tests consiste à vérifier automatiquement le bon fonctionnement du code pendant le développement." },
        { type: "list", items: ["tests unitaires", "tests d'intégration", "tests fonctionnels"] },
        { type: "note", variant: "success", title: "Objectif", text: "Détecter les bugs rapidement, éviter les régressions, garantir un produit stable et fiable." },
        { type: "h", text: "3. Collaboration entre les équipes Dev et Ops" },
        { type: "p", text: "Le DevOps repose sur une forte collaboration entre les développeurs (Dev) et les équipes d'exploitation (Ops)." },
        { type: "note", variant: "success", title: "Objectif", text: "Casser les silos entre équipes, améliorer la qualité du produit, accélérer la résolution des problèmes." },
        { type: "h", text: "4. Utilisation des méthodes agiles" },
        { type: "p", text: "Les méthodes agiles permettent de développer le logiciel de manière progressive et itérative." },
        { type: "p", text: "Principe : livraisons courtes et régulières, améliorations progressives, adaptation rapide aux changements." },
        { type: "note", variant: "success", title: "Objectif", text: "Livrer plus rapidement, s'adapter aux besoins, éviter une approche trop rigide (type cascade)." },
      ],
    },
    {
      id: "devops-recap",
      title: "DevOps (récapitulatif)",
      blocks: [
        { type: "p", text: "Le DevOps est une approche qui vise à rapprocher le développement (Dev) et les opérations (Ops / exploitation)." },
        { type: "note", variant: "info", title: "Objectif", text: "Livrer des logiciels plus vite, plus souvent, et avec moins d'erreurs." },
        { type: "p", text: "Il repose sur :" },
        { type: "list", items: [
          "l'automatisation (tests, déploiement)",
          "la collaboration entre équipes",
          "les méthodes agiles",
          "la réduction des temps de mise en production",
        ]},
      ],
    },
    {
      id: "devops-bonnes-pratiques-secu-deploiement",
      title: "Bonnes pratiques — Sécurité et maintenabilité du déploiement",
      blocks: [
        { type: "h", text: "1. Sécuriser son déploiement" },
        { type: "p", text: "Le déploiement doit toujours prendre en compte la sécurité." },
        { type: "note", variant: "warning", title: "Ne pas mettre dans le code", text: "identifiants, mots de passe, clés API, URLs sensibles." },
        { type: "p", text: "Utiliser des variables d'environnement :" },
        { type: "list", items: [
          "stockées côté serveur",
          "injectées au moment de l'exécution",
          "non visibles dans le code source",
          "permettent de séparer le code et les données sensibles",
        ]},
        { type: "p", text: "Avantages : sécurité renforcée, code non exposé, moins de risques de piratage." },
        { type: "h", text: "2. Maintenabilité de l'application" },
        { type: "list", items: [
          "séparer le code en fichiers / modules",
          "utiliser des noms de fichiers explicites",
          "éviter les blocs trop longs",
          "respecter une structure claire",
        ]},
        { type: "h", text: "3. Gestion des ressources (performance & coût)" },
        { type: "p", text: "Hardware (matériel) : CPU, RAM, stockage, serveurs cloud." },
        { type: "list", items: [
          "Performance : un script trop lourd peut ralentir ou bloquer d'autres services.",
          "Coût : dans le cloud (AWS, Azure…), les ressources sont payantes (plus tu consommes, plus ça coûte cher).",
          "Saturation : disque plein, base de données saturée, copie de données incomplète.",
        ]},
        { type: "h", text: "4. Déploiement automatisé (CI/CD)" },
        { type: "p", text: "Versionner son code — utiliser Git :" },
        { type: "list", items: ["GitHub", "GitLab", "Bitbucket"] },
        { type: "h", text: "5. Les pipelines (CI/CD)" },
        { type: "p", text: "Un pipeline est une suite d'étapes automatiques exécutées lors d'un déploiement." },
        { type: "p", text: "Structure : Stages → grandes étapes (build, test, deploy). Jobs → tâches dans chaque stage. Les jobs peuvent s'exécuter en parallèle ou en séquence." },
        { type: "code", filename: ".gitlab-ci.yml", language: "yaml", code: `# .gitlab-ci.yml

stages:
- build

build-angular:
stage: build
image: node:16.9.0
script:
- npm install
- ng build` },
        { type: "h", text: "6. Déploiement de l'application Angular" },
        { type: "p", text: "Permet de servir l'application et tester en local ou en serveur. Après le build :" },
        { type: "code", filename: "deploy.sh", language: "bash", code: `lite-server --baseDir="dist/project-name"` },
      ],
    },
    {
      id: "devops-bizdevops-devsecops",
      title: "BizDevOps et DevSecOps",
      blocks: [
        { type: "h", text: "BizDevOps" },
        { type: "p", text: "Le BizDevOps va encore plus loin en ajoutant un troisième acteur : Business (Biz), Développement (Dev), Opérations (Ops)." },
        { type: "note", variant: "info", title: "Objectif", text: "Aligner les objectifs métier, techniques et opérationnels dans un seul flux de travail. Les équipes business participent aux décisions produit. Tout le monde travaille vers un objectif commun (valeur client, revenus, performance)." },
        { type: "h", text: "DevSecOps" },
        { type: "p", text: "Le DevSecOps ajoute la sécurité dès le début du cycle : Dev (développement), Sec (sécurité), Ops (exploitation)." },
        { type: "note", variant: "info", title: "Objectif", text: "Intégrer la sécurité partout, dès la conception (et pas à la fin)." },
        { type: "h", text: "Principes clés" },
        { type: "list", items: [
          "sécurité intégrée dans le code dès le départ",
          "tests de sécurité automatisés",
          "responsabilité partagée entre toutes les équipes",
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│                DevSecOps                   │
│                                             │
│  PLAN ─▶ CODE ─▶ BUILD ─▶ TEST ─▶ DEPLOY   │
│    │       │       │        │        │      │
│  🔒SEC   🔒SEC   🔒SEC    🔒SEC    🔒SEC   │
│                                             │
│  Sécurité à CHAQUE étape du pipeline        │
└─────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "devops-veille-technologique-methodes",
      title: "Mettre en place une veille technologique",
      blocks: [
        { type: "p", text: "La veille technologique consiste à surveiller les nouveautés techniques, suivre les évolutions des outils (DevOps, CI/CD…) et améliorer en continu ses pratiques et pipelines." },
        { type: "h", text: "Pourquoi faire une veille ?" },
        { type: "list", items: [
          "Améliorer les pipelines CI/CD",
          "Gagner du temps",
          "Utiliser les meilleurs outils",
          "Éviter d'être obsolète",
          "Garantir la qualité des livrables",
        ]},
        { type: "h", text: "Deux méthodes de veille" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│              MÉTHODES DE VEILLE                 │
├──────────────────────┬──────────────────────────┤
│   PUSH (passif)      │   PULL (actif)            │
│  L'info vient à toi  │  Tu vas chercher l'info   │
│  (moins efficace)    │  toi-même                 │
├──────────────────────┼──────────────────────────┤
│  • Newsletters       │  • Recherches ciblées     │
│  • Alertes Google    │  • Lecture d'articles     │
│  • Notifications     │  • Blogs techniques       │
└──────────────────────┴──────────────────────────┘`,
        },
        { type: "h", text: "1. Push (passif)" },
        { type: "p", text: "L'information vient à toi (moins efficace)" },
        { type: "list", items: ["Newsletters", "Alertes Google", "Notifications"] },
        { type: "h", text: "2. Pull (actif)" },
        { type: "p", text: "Tu vas chercher l'information toi-même" },
        { type: "list", items: ["Recherches ciblées", "Lecture d'articles", "Blogs techniques"] },
        { type: "h", text: "Outils de veille" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["Feedly", "Agrégateur de flux RSS pour suivre plusieurs sources"],
          ["Hacker News", "Actualités tech, startups, open source"],
          ["Pocket", "Sauvegarder articles / vidéos pour plus tard"],
          ["Humans Coders News", "Articles tech classés par tags"],
        ]},
        { type: "h", text: "Autres sources utiles" },
        { type: "list", items: ["Blogs techniques", "Vidéos YouTube", "Newsletters", "Réseaux sociaux", "Google Alerts"] },
        { type: "h", text: "Qualité des sources" },
        { type: "p", text: "Toujours vérifier :" },
        { type: "list", items: ["Crédibilité", "Source officielle", "Expertise de l'auteur"] },
        { type: "h", text: "Types de contenus à suivre" },
        { type: "list", items: [
          "Articles techniques",
          "Blogs DevOps",
          "Vidéos tutoriels",
          "Actualités cloud / CI/CD",
          "Discussions communautaires",
        ]},
        { type: "note", variant: "info", title: "Ressource", text: "gdevops.gitlab.io — Comment organiser sa veille technologique : https://gdevops.gitlab.io/tuto_devops/news/2020/04/15/comment_organiser_sa_veille_technologique.html" },
      ],
    },
    {
      id: "devops-veille-filtrage-sources",
      title: "Filtrer ses sources de veille",
      blocks: [
        { type: "p", text: "Le filtrage des sources permet d'éviter les informations inutiles, de gagner du temps et d'améliorer la qualité de la veille." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│           CRITÈRES DE FILTRAGE                   │
├─────────┬────────────────────────────────────────┤
│ 1. Date │ Article récent = plus fiable            │
│         │ Article ancien = peut être obsolète     │
├─────────┼────────────────────────────────────────┤
│ 2. Per- │ Correspond à mon sujet ?                │
│ tinence │ Utile pour mon projet ou ma veille ?    │
├─────────┼────────────────────────────────────────┤
│ 3. Fia- │ Auteur connu ?                          │
│ bilité  │ Site officiel ?                         │
│         │ Expertise technique ?                   │
├─────────┼────────────────────────────────────────┤
│ 4. News-│ Bon outil MAIS à utiliser avec          │
│ letters │ modération — risque de surcharge        │
└─────────┴────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. La date (fraîcheur de l'information)" },
        { type: "p", text: "Vérifier si la source est récente" },
        { type: "list", items: ["Article récent = plus fiable", "Article ancien = peut être obsolète"] },
        { type: "h", text: "2. La pertinence" },
        { type: "p", text: "Une bonne source doit répondre à ton besoin" },
        { type: "list", items: ["Est-ce que ça correspond à mon sujet ?", "Est-ce utile pour mon projet ou ma veille ?"] },
        { type: "h", text: "3. La fiabilité" },
        { type: "p", text: "Vérifier la crédibilité de la source" },
        { type: "list", items: ["Auteur connu ?", "Site officiel ?", "Expertise technique ?"] },
        { type: "h", text: "4. Les newsletters" },
        { type: "p", text: "Bon outil mais à utiliser avec modération :" },
        { type: "list", items: [
          "Ne pas s'abonner à tout",
          "Éviter la surcharge d'information",
          "Risque de ne jamais tout lire",
        ]},
      ],
    },
  ],
};
