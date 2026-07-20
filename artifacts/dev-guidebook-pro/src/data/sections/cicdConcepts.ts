import type { Section } from "../types";

// Note : cette section est une synthèse rédigée à partir de concepts généraux
// d'intégration et de déploiement continus (CI/CD) et de GitLab CI — notions
// publiques et non spécifiques à un ouvrage particulier. Elle ne reproduit
// aucun contenu propriétaire.
export const cicdConcepts: Section = {
  id: "cicd-concepts",
  title: "CI/CD — Concepts généraux",
  icon: "GitBranch",
  tags: ["js"],
  subsections: [
    {
      id: "cicd-quest-ce-que",
      title: "Qu'est-ce que le CI/CD ?",
      blocks: [
        { type: "p", text: "CI/CD désigne un ensemble de pratiques d'automatisation qui permettent de livrer du code plus souvent, plus vite et de manière plus fiable, en réduisant les interventions manuelles." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                   CI / CD                                │
├───────────────────────┬───────────────────────────────────┤
│  CI                   │  CD                                │
│  Continuous            │  Continuous Delivery               │
│  Integration           │  ou Continuous Deployment          │
├───────────────────────┼───────────────────────────────────┤
│ Intégrer le code       │ Livrer automatiquement le code    │
│ régulièrement          │ testé vers un environnement        │
│ Lancer les tests        │ (staging, production…)            │
│ automatiquement         │                                    │
│ Détecter les erreurs    │ Delivery : déploiement validé      │
│ tôt                     │ manuellement avant la prod         │
│                        │ Deployment : déploiement 100%       │
│                        │ automatique                        │
└───────────────────────┴───────────────────────────────────┘`,
        },
        { type: "h", text: "Pourquoi automatiser ?" },
        { type: "list", items: [
          "Réduire les erreurs humaines lors des déploiements",
          "Détecter les régressions rapidement grâce aux tests automatisés",
          "Livrer plus fréquemment, avec plus de confiance",
          "Uniformiser le processus de mise en production entre les membres d'une équipe",
          "Gagner du temps sur les tâches répétitives",
        ]},
      ],
    },
    {
      id: "cicd-pipeline-stage-job",
      title: "Pipeline, stages et jobs",
      blocks: [
        { type: "p", text: "Un pipeline CI/CD est une suite d'étapes automatisées déclenchées généralement à chaque modification du code (push, pull request…). Il est composé de stages (étapes), eux-mêmes composés de jobs (tâches)." },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────────┐
│                  STRUCTURE D'UN PIPELINE                   │
│                                                             │
│  PIPELINE                                                   │
│   ├── STAGE : build                                         │
│   │     └── JOB : compiler / installer les dépendances      │
│   ├── STAGE : test                                          │
│   │     ├── JOB : tests unitaires                            │
│   │     └── JOB : tests d'intégration                        │
│   ├── STAGE : deploy                                         │
│   │     └── JOB : déploiement (staging ou production)       │
│                                                               │
│  Les stages s'exécutent dans l'ordre.                        │
│  Les jobs d'un même stage peuvent s'exécuter en parallèle.   │
└───────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Étapes typiques d'un pipeline" },
        { type: "table", headers: ["Étape", "Objectif"], rows: [
          ["Build", "Installer les dépendances, compiler le projet"],
          ["Lint / Analyse statique", "Vérifier le respect des conventions de code"],
          ["Test", "Exécuter les tests automatisés (unitaires, intégration…)"],
          ["Package", "Générer l'artefact à déployer (build de production)"],
          ["Deploy", "Livrer l'application sur un environnement (staging, production…)"],
        ]},
        { type: "note", variant: "info", text: "Un job qui échoue peut bloquer l'exécution des étapes suivantes du pipeline, ce qui évite de déployer du code non validé." },
      ],
    },
    {
      id: "cicd-runners",
      title: "Les runners (agents d'exécution)",
      blocks: [
        { type: "p", text: "Un runner est un agent (machine, conteneur ou service) qui exécute réellement les jobs définis dans un pipeline. Les principales plateformes (GitLab, GitHub, etc.) proposent des runners partagés, hébergés par la plateforme, ou permettent de connecter ses propres runners auto-hébergés." },
        { type: "table", headers: ["Type de runner", "Description"], rows: [
          ["Partagé / hébergé", "Fourni par la plateforme (GitLab.com, GitHub Actions…), aucune installation requise"],
          ["Auto-hébergé (self-hosted)", "Installé sur son propre serveur — utile pour un contrôle accru des ressources ou des accès réseau spécifiques"],
        ]},
        { type: "list", items: [
          "Les runners exécutent les jobs dans un environnement isolé (souvent un conteneur)",
          "Ils peuvent être spécialisés (tags) pour cibler certains jobs (ex : besoin d'un OS ou d'outils spécifiques)",
          "Un même pipeline peut utiliser plusieurs runners en parallèle",
        ]},
      ],
    },
    {
      id: "cicd-fichier-configuration-generique",
      title: "Structure générique d'un fichier de configuration CI/CD",
      blocks: [
        { type: "p", text: "La plupart des plateformes utilisent un fichier de configuration déclaratif (au format YAML) placé à la racine du dépôt, décrivant les stages, jobs et conditions d'exécution du pipeline." },
        { type: "code", filename: "exemple-generique.yml", language: "yaml", code: `# Exemple générique et simplifié (syntaxe YAML)
stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - echo "Installation des dépendances"

test_job:
  stage: test
  script:
    - echo "Exécution des tests"

deploy_job:
  stage: deploy
  script:
    - echo "Déploiement de l'application"
  only:
    - main` },
        { type: "list", items: [
          "stages — définit l'ordre global des grandes étapes",
          "script — liste des commandes shell exécutées par le job",
          "only / rules — conditionne l'exécution d'un job à une branche, un tag ou un événement précis",
        ]},
        { type: "note", variant: "warning", text: "La syntaxe exacte (noms de clés, mots-réservés) varie d'une plateforme à l'autre (GitLab CI, GitHub Actions, CircleCI…) — se référer systématiquement à la documentation officielle de l'outil utilisé." },
      ],
    },
    {
      id: "cicd-deploiement-cles-ssh",
      title: "Principe général du déploiement par clé SSH",
      blocks: [
        { type: "p", text: "Pour déployer automatiquement du code sur un serveur distant, une approche courante consiste à utiliser une authentification par paire de clés SSH (publique/privée) plutôt qu'un mot de passe, afin de sécuriser et d'automatiser la connexion depuis le pipeline." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│         PRINCIPE DU DÉPLOIEMENT PAR CLÉ SSH             │
│                                                         │
│  1. Générer une paire de clés SSH (publique/privée)     │
│           │                                              │
│           ▼                                              │
│  2. Déposer la clé PUBLIQUE sur le serveur cible         │
│     (fichier authorized_keys)                            │
│           │                                              │
│           ▼                                              │
│  3. Stocker la clé PRIVÉE dans les variables/secrets     │
│     sécurisés de la plateforme CI/CD (jamais dans le code)│
│           │                                              │
│           ▼                                              │
│  4. Le pipeline utilise la clé privée pour se connecter  │
│     au serveur et exécuter le déploiement (rsync, git    │
│     pull, scp…)                                          │
└────────────────────────────────────────────────────────┘`,
        },
        { type: "note", variant: "warning", text: "La clé privée ne doit jamais être committée dans le dépôt — elle doit être stockée dans le gestionnaire de secrets/variables protégées de la plateforme CI/CD utilisée." },
      ],
    },
    {
      id: "cicd-environnements-variables",
      title: "Environnements et variables d'environnement",
      blocks: [
        { type: "p", text: "Un projet passe généralement par plusieurs environnements avant d'atteindre les utilisateurs finaux." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│              ENVIRONNEMENTS TYPIQUES                    │
│                                                          │
│  Développement (local) → Staging (recette) → Production │
│                                                          │
│  dev   : environnement de travail quotidien              │
│  staging : réplique de la production pour valider        │
│  prod  : environnement servant les utilisateurs réels    │
└────────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Chaque environnement peut avoir sa propre configuration (base de données, clés API, URLs…)",
          "Les valeurs sensibles (mots de passe, tokens, clés privées) sont stockées comme variables protégées côté plateforme CI/CD, jamais en clair dans le code source",
          "Certains pipelines n'autorisent le déploiement en production que depuis une branche précise (ex : main) et/ou après validation manuelle",
        ]},
      ],
    },
    {
      id: "cicd-glossaire",
      title: "Glossaire CI/CD",
      blocks: [
        { type: "table", headers: ["Terme", "Définition"], rows: [
          ["Pipeline", "Suite d'étapes automatisées déclenchée par un évènement (push, merge…)"],
          ["Stage", "Grande étape d'un pipeline (build, test, deploy…)"],
          ["Job", "Tâche unitaire exécutée au sein d'un stage"],
          ["Runner / Agent", "Machine ou service qui exécute les jobs"],
          ["Artefact", "Fichier généré par un job et réutilisable par les jobs suivants (build compilé, rapport de tests…)"],
          ["Variable protégée / Secret", "Valeur sensible stockée de façon sécurisée côté plateforme, injectée à l'exécution"],
          ["Environnement", "Contexte de déploiement (dev, staging, production…)"],
          ["Rollback", "Retour à une version précédente en cas de problème après déploiement"],
          ["Continuous Delivery", "Le code est automatiquement prêt à être déployé, mais la mise en production reste validée manuellement"],
          ["Continuous Deployment", "Le déploiement en production est entièrement automatique dès que les tests passent"],
        ]},
      ],
    },
  ],
};
