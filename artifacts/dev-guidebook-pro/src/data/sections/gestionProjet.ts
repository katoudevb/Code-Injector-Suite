import type { Section } from "../types";

export const gestionProjet: Section = {
  id: "gestion-projet",
  title: "Gestion de projet",
  icon: "ClipboardList",
  tags: ["js", "ts"],
  subsections: [
    {
      id: "gp-user-stories",
      title: "Méthode Agile — User stories",
      blocks: [
        { type: "p", text: "Définition : décrit ce que l'utilisateur veut et pourquoi, guide le développement et les tests. Utile en début de projet ou pour l'ajout de nouvelles fonctionnalités." },
        { type: "h", text: "Formule" },
        {
          type: "diagram",
          content: `En tant que  [type utilisateur]
Je veux       [fonctionnalité]
Afin de       [bénéfice]`,
        },
        { type: "h", text: "Liste des types de user stories" },
        { type: "table", headers: ["Catégorie", "Exemples"], rows: [
          ["Création / Ajout", "Ajouter un article, créer un compte"],
          ["Lecture / Consultation", "Voir le profil, lire un article"],
          ["Modification / MAJ", "Éditer son profil, mettre à jour une commande"],
          ["Suppression", "Supprimer un compte, effacer un commentaire"],
          ["Validation / Confirmation", "Confirmer une commande, valider un formulaire"],
          ["Recherche / Filtrage", "Chercher un produit, filtrer par catégorie"],
          ["Tri", "Trier par prix, par date"],
          ["Connexion / Authentification", "Se connecter, s'inscrire"],
          ["Permission / Rôles", "Accès admin, droits éditeur"],
          ["Notifications / Feedback", "Recevoir un email, voir une alerte"],
          ["Accessibilité / Mobile", "Navigation tactile, responsive"],
          ["Erreurs / Gestions d'exceptions", "Message d'erreur 404, formulaire invalide"],
          ["Panier / Paiement", "Ajouter au panier, payer en ligne"],
          ["Gestions des utilisateurs", "Gérer les comptes, bannir un utilisateur"],
          ["Tableau de bord / Statistiques", "Voir les ventes, analyser le trafic"],
          ["Partages ou export de données", "Exporter en CSV, partager un lien"],
          ["Intégrations API", "Connecter une API tierce"],
        ]},
      ],
    },
    {
      id: "gp-workflow-redactionnel",
      title: "Workflow rédactionnel",
      blocks: [
        { type: "p", text: "Le workflow rédactionnel est un processus organisé qui définit les étapes de création, de relecture et de publication d'un contenu (article, page web, etc.)." },
        {
          type: "diagram",
          content: `┌─────────────┐    ┌────────────────────┐    ┌────────────────┐
│  1. RÉDACTION│───▶│  2. RELECTURE      │───▶│ 3. PUBLICATION │
│   (auteur)  │    │  (correcteur /     │    │   (éditeur)    │
│             │    │  chef de contenu)  │    │                │
├─────────────┤    ├────────────────────┤    ├────────────────┤
│ • premier   │    │ • orthographe      │    │ • publie après │
│   jet       │    │ • grammaire        │    │   validation   │
│ • sans      │    │ • structure        │    │ • vérifie mise │
│   relecture │    │ • cohérence        │    │   en forme     │
│             │    │ • qualité contenu  │    │ • met en ligne │
└─────────────┘    └────────────────────┘    └────────────────┘`,
        },
        { type: "h", text: "1. Rédaction (auteur)" },
        { type: "list", items: [
          "L'auteur rédige l'article en premier jet",
          "Le contenu est créé sans relecture immédiate",
        ]},
        { type: "h", text: "2. Relecture (correcteur / chef de contenu)" },
        { type: "list", items: [
          "Vérifie l'orthographe et la grammaire",
          "Corrige la structure et la cohérence",
          "Valide la qualité du contenu",
        ]},
        { type: "h", text: "3. Publication (éditeur)" },
        { type: "list", items: [
          "Publie l'article après validation",
          "Vérifie la mise en forme finale",
          "Met en ligne le contenu",
        ]},
      ],
    },
    {
      id: "gp-versioning-collaboration",
      title: "Versioning & Collaboration",
      blocks: [
        { type: "p", text: "Le versioning et la collaboration consistent à gérer les évolutions d'un projet de développement de manière structurée, en suivant les modifications du code, en travaillant en équipe et en garantissant la qualité du logiciel." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│            CYCLE DE VERSIONING & COLLABORATION       │
│                                                      │
│  1.IDENTIFICATION  2.DÉVELOPPEMENT  3.TESTS          │
│       │                 │               │            │
│       ▼                 ▼               ▼            │
│  4.REVUE CODE     5.DOCUMENTATION  → MERGE/COMMIT    │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Identification du changement" },
        { type: "list", items: [
          "Localiser précisément la partie du code à modifier",
          "Comprendre l'impact sur le reste du projet",
          "Préserver la structure globale du code",
        ]},
        { type: "h", text: "2. Développement" },
        { type: "list", items: [
          "Implémenter la modification ou la nouvelle fonctionnalité",
          "Respecter les principes de clarté, modularité et performance",
          "Vérifier la pertinence de la modification",
        ]},
        { type: "h", text: "3. Tests" },
        { type: "list", items: [
          "Tester la fonctionnalité modifiée",
          "Vérifier l'absence d'effets secondaires",
          "Mettre à jour ou créer des tests (unitaires, intégration, end-to-end)",
          "Garantir la non-régression",
        ]},
        { type: "h", text: "4. Revue de code" },
        { type: "list", items: [
          "Soumettre le code à une relecture par les pairs",
          "Vérifier la qualité, la cohérence et les bonnes pratiques",
        ]},
        { type: "h", text: "5. Documentation" },
        { type: "list", items: [
          "Documenter les changements réalisés",
          "Mettre à jour la documentation technique et fonctionnelle",
          "Ajouter des commentaires et un changelog clair",
        ]},
      ],
    },
    {
      id: "gp-bonnes-pratiques",
      title: "Bonnes pratiques de gestion de projet",
      blocks: [
        { type: "h", text: "Refactorisation" },
        { type: "list", items: [
          "Améliorer la structure du code sans changer son fonctionnement",
          "Améliorer lisibilité, performance et maintenabilité",
        ]},
        { type: "h", text: "Ajout de fonctionnalités" },
        { type: "list", items: [
          "Intégrer de nouvelles fonctionnalités selon les besoins utilisateurs",
          "Faire évoluer le projet progressivement",
        ]},
        { type: "h", text: "Gestion des versions (Git)" },
        { type: "list", items: [
          "Utiliser un système de contrôle de version (ex : Git)",
          "Suivre toutes les modifications",
          "Permettre de revenir en arrière si nécessaire",
        ]},
        { type: "h", text: "Gestion des dépendances" },
        { type: "list", items: [
          "Mettre à jour régulièrement les bibliothèques et outils",
          "Éviter les failles de sécurité",
          "Profiter des améliorations des dépendances",
        ]},
      ],
    },
    {
      id: "gp-recherche-technique",
      title: "Méthodes de recherche technique web",
      blocks: [
        { type: "p", text: "Permet de trouver des solutions pour coder ou configurer une fonctionnalité." },
        { type: "h", text: "Étapes" },
        { type: "list", items: [
          "Recherche en Anglais pour plus de résultat",
          "Être précis, utiliser termes technique (API…)",
          "Inclure le contexte (Symfony…)",
          "Logique et méthodique (1 solution à la fois, lire divers sources…)",
          "Utiliser les bons outils (StackOverflow)",
          "Pas de mot inutile",
          `Utiliser les guillemets " " pour les expressions exactes`,
          "Version de l'outil (Angular 21…)",
          "Limiter la recherche à un site spécialisé si disponible",
        ]},
      ],
    },
    {
      id: "gp-post-correction-bug",
      title: "Post-correction d'un bug",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                 CYCLE POST-CORRECTION BUG                │
├────┬────────────────────────────────────────────────────┤
│ 1  │ COMPRENDRE LA CAUSE → vraie origine du bug         │
│ 2  │ RENFORCER LE CODE → zones fragiles, conditions     │
│ 3  │ AJOUTER DES TESTS → unitaires, intégration         │
│ 4  │ DOCUMENTER → commentaire, changelog                │
│ 5  │ VÉRIFIER L'IMPACT → fonctionnalités liées          │
│ 6  │ TESTER EN LOCAL/DEV → relancer, vérifier           │
│ 7  │ COMMIT GIT → message clair et propre               │
│ 8  │ DÉPLOIEMENT → CI/CD, staging puis production       │
└────┴────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Comprendre la cause" },
        { type: "list", items: [
          "Ne pas corriger juste le symptôme",
          "Trouver la vraie origine du bug (mauvaise donnée, …)",
        ]},
        { type: "h", text: "2. Renforcer le code" },
        { type: "list", items: [
          "Améliorer les zones fragiles",
          "Ajouter des conditions",
          "Simplifier le code complexe",
        ]},
        { type: "h", text: "3. Ajouter des tests (si possible)" },
        { type: "list", items: [
          "Test unitaire ou intégration",
          "Vérifier que les bugs ne reviennent pas",
        ]},
        { type: "h", text: "4. Documenter la modification" },
        { type: "list", items: [
          "Ajouter un commentaire si nécessaire",
          "Expliquer les changements",
          "Mettre à jour le changelog",
        ]},
        { type: "h", text: "5. Vérifier l'impact" },
        { type: "list", items: [
          "Tester les fonctionnalités liées",
          "S'assurer que la correction ne crée pas d'autres bugs",
        ]},
        { type: "h", text: "6. Tester en environnement local / dev" },
        { type: "list", items: ["Relancer l'application", "Vérifier que tout fonctionne"] },
        { type: "h", text: "7. Commit Git" },
        { type: "list", items: ["Message clair et propre"] },
        { type: "h", text: "8. Déploiement" },
        { type: "list", items: ["Suivre la procédure (CI/CD)", "Tester en staging puis production"] },
      ],
    },
    {
      id: "gp-technique-debugging",
      title: "Technique de debugging",
      blocks: [
        { type: "h", text: "1. Utiliser try...catch" },
        { type: "list", items: ["Capturer les erreurs", "Éviter que l'application plante", "Afficher l'erreur"] },
        { type: "h", text: "2. Utiliser un debugger" },
        { type: "list", items: [
          "Mettre un point d'arrêt (debugger)",
          "Arrêter l'exécution du code",
          "Analyser étape par étape",
        ]},
        { type: "h", text: "3. Ajouter des console.log" },
        { type: "list", items: ["Afficher les valeurs des variables", "Suivre l'exécution du code"] },
        { type: "h", text: "4. Reproduire le bug" },
        { type: "list", items: ["Identifier les conditions exactes", "Reproduire le problème plusieurs fois"] },
        { type: "h", text: "5. Réduire le scope" },
        { type: "list", items: ["Isoler le code problématique", "Commenter / désactiver des parties"] },
        { type: "h", text: "6. Consulter les logs d'erreurs" },
        { type: "list", items: [
          "Analyser les messages d'erreurs",
          "Utiliser des outils (Sentry, Rollbar, …)",
        ]},
        { type: "h", text: "7. Utiliser des outils de profilage" },
        { type: "list", items: [
          "Analyser performance (temps, mémoire…)",
          "Détecter des anomalies invisibles",
        ]},
        { type: "h", text: "8. Vérifier les modifications récentes" },
        { type: "list", items: ["Regarder l'historique Git", "Identifier ce qui a changé avant le bug"] },
      ],
    },
    {
      id: "gp-gestion-si",
      title: "Gestion d'un Système d'Information (SI)",
      blocks: [
        { type: "p", text: "La gestion d'un Système d'Information (SI) consiste à organiser, sécuriser et exploiter les données d'une entreprise afin d'optimiser son fonctionnement." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│           GESTION DU SI — 5 ÉTAPES              │
├────┬────────────────────────────────────────────┤
│ 1  │ SENSIBILISATION → RGPD, DPO, formation     │
│ 2  │ SMART DATA → données utiles, non redond.   │
│ 3  │ MISE À JOUR → fiabilité, cohérence         │
│ 4  │ OUTILS DIGITAUX → CRM, automatisation      │
│ 5  │ AUDIT → contrôles réguliers, qualité       │
└────┴────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Sensibilisation des acteurs" },
        { type: "list", items: [
          "Former tous les employés à la gestion et protection des données",
          "Respecter le RGPD (article 32)",
          "Travailler sous la supervision du DPO (Data Protection Officer)",
          "Comprendre l'impact de la manipulation des données",
        ]},
        { type: "h", text: "2. Stratégie de Smart Data" },
        { type: "list", items: [
          "Identifier les données utiles",
          "Éviter les données inutiles ou redondantes",
          "Exploiter les données de manière intelligente",
        ]},
        { type: "h", text: "3. Mise à jour des données" },
        { type: "list", items: [
          "Maintenir les données à jour en permanence",
          "Garantir leur fiabilité et leur cohérence",
        ]},
        { type: "h", text: "4. Outils digitaux adaptés" },
        { type: "list", items: [
          "Utilisation de logiciels comme les CRM",
          "Collecte, tri, filtrage et stockage des données",
          "Automatisation des traitements",
        ]},
        { type: "h", text: "5. Audit des données" },
        { type: "list", items: [
          "Réaliser un audit avant le projet",
          "Effectuer des contrôles réguliers",
          "Évaluer la qualité et la sécurité des données",
        ]},
      ],
    },
  ],
};
