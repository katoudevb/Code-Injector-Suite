import type { Section } from "../types";

export const cms: Section = {
  id: "cms",
  title: "CMS — Généralités",
  icon: "LayoutTemplate",
  tags: ["php"],
  subsections: [
    {
      id: "cms-choisir",
      title: "Choisir un CMS",
      blocks: [
        { type: "h", text: "Critères de choix" },
        { type: "list", items: [
          "Le budget (Attention aux extensions payantes)",
          "Facilité d'utilisation",
          "Le type de site web",
          "Sa communauté",
        ]},
        { type: "h", text: "Avantages" },
        { type: "list", items: ["Faibles coûts", "Prise en main facile", "Travail collaboratif", "Outils polyvalents"] },
        { type: "h", text: "Inconvénients" },
        { type: "list", items: [
          "Cible de hackers",
          "MAJ plug-in parfois longue",
          "MAJ du site régulière",
          "Service professionnel pour modifier un template ou fonctionnalités plus avancées",
        ]},
      ],
    },
    {
      id: "cms-maintenance",
      title: "Maintenance d'un site CMS",
      blocks: [
        { type: "p", text: "La maintenance d'un site web consiste à assurer son bon fonctionnement dans le temps en appliquant des mises à jour, des sauvegardes et des vérifications techniques." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│           MAINTENANCE SITE CMS                  │
├────┬────────────────────────────────────────────┤
│ 1  │ Vérification des mises à jour              │
│ 2  │ Compatibilité technique                    │
│ 3  │ Sauvegarde complète                        │
│ 4  │ Gestion du thème (child theme)             │
└────┴────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Vérification des mises à jour" },
        { type: "list", items: [
          "Mise à jour du CMS (WordPress…)",
          "Mise à jour des plugins et thèmes",
          "Types de mises à jour : sécurité, fonctionnalités, corrections",
        ]},
        { type: "h", text: "2. Compatibilité technique" },
        { type: "list", items: [
          "Vérifier la compatibilité avec le serveur (PHP, base de données…)",
          "Tester le bon fonctionnement après mise à jour",
        ]},
        { type: "h", text: "3. Sauvegarde" },
        { type: "list", items: [
          "Effectuer une sauvegarde complète avant toute modification",
          "Inclure fichiers + base de données",
        ]},
        { type: "h", text: "4. Gestion du thème" },
        { type: "list", items: [
          "Créer un thème enfant (child theme)",
          "Permet de modifier le site sans toucher au thème original",
          "Évite la perte des modifications lors des mises à jour",
        ]},
      ],
    },
    {
      id: "cms-contenu-article",
      title: "Contenu d'un article CMS",
      blocks: [
        { type: "p", text: "Un article est une page de contenu (souvent dans un blog ou site vitrine) structurée pour informer les utilisateurs et optimiser le référencement." },
        { type: "table", headers: ["Champ", "Description"], rows: [
          ["Titre de l'article", "Doit être clair, accrocheur et optimisé SEO"],
          ["Contenu principal", "Texte, images, vidéos…"],
          ["Meta description (SEO)", "Résumé affiché dans les résultats Google"],
          ["Mots-clés / Tags", "Facilitent l'organisation et le SEO"],
          ["Catégorie", "Permet de structurer les articles"],
          ["Auteur", "Indique qui a rédigé l'article"],
          ["Statut de publication", "Brouillon, publié, planifié…"],
          ["Date de publication", "Importante pour le SEO et l'actualité"],
        ]},
      ],
    },
    {
      id: "cms-types-maj",
      title: "Types de mises à jour CMS",
      blocks: [
        { type: "p", text: "Les mises à jour d'un CMS permettent d'améliorer le site, corriger des bugs et renforcer la sécurité." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│            TYPES DE MISES À JOUR CMS             │
├──────────────────────┬───────────────────────────┤
│  MINEURES            │  MAJEURES                 │
├──────────────────────┼───────────────────────────┤
│ • Correction bugs    │ • Nouvelles fonctionnalités│
│ • Failles sécurité   │ • Modifications importantes│
│ • Petites amélior.   │ • Évolutions significatives│
│                      │                           │
│ Ex: X.2.3 → X.2.4    │ Ex: X.1.x → X.2.x         │
└──────────────────────┴───────────────────────────┘`,
        },
      ],
    },
    {
      id: "cms-tenir-a-jour",
      title: "Tenir à jour son CMS",
      blocks: [
        { type: "p", text: "Mettre à jour son CMS permet de corriger les bugs, améliorer les fonctionnalités et éviter les failles de sécurité." },
        { type: "h", text: "1. Mise à jour du CMS" },
        { type: "list", items: ["Installer les dernières versions", "Corriger bugs et failles de sécurité", "Bénéficier des améliorations"] },
        { type: "h", text: "2. Mise à jour des plugins" },
        { type: "list", items: ["Mettre à jour régulièrement", "Faire une sauvegarde avant"] },
        { type: "h", text: "3. Mise à jour des thèmes" },
        { type: "list", items: ["Garder les thèmes à jour", "Sauvegarde recommandée avant modification"] },
        { type: "h", text: "4. Nettoyage" },
        { type: "list", items: [
          "Supprimer les plugins inutiles",
          "Supprimer les thèmes non utilisés",
          "Réduire les risques de sécurité et améliorer les performances",
        ]},
      ],
    },
    {
      id: "cms-maintenance-detail",
      title: "Maintenance CMS (détail)",
      blocks: [
        { type: "p", text: "La maintenance d'un CMS consiste à assurer le bon fonctionnement du site dans le temps (sécurité, performance, contenu)." },
        { type: "h", text: "1. Compatibilité technique" },
        { type: "list", items: [
          "Vérifier la compatibilité entre le CMS et le serveur",
          "Mettre à jour PHP / MySQL (via l'hébergeur ou outils CMS)",
        ]},
        { type: "h", text: "2. Gestion des commentaires" },
        { type: "list", items: ["Vérifier les commentaires", "Répondre aux utilisateurs", "Supprimer les spams"] },
        { type: "h", text: "3. Vérification des liens" },
        { type: "list", items: ["Détecter les liens cassés (broken links)", "Correction manuelle ou via extensions"] },
        { type: "h", text: "4. Sauvegardes" },
        { type: "list", items: [
          "Effectuer des sauvegardes régulières",
          "Automatisation possible via plugins (ex : Duplicator…)",
          "Sauvegarde manuelle possible",
        ]},
      ],
    },
    {
      id: "cms-guide-interface-admin",
      title: "Guide d'interface administrateur CMS",
      blocks: [
        { type: "p", text: "La formation à l'administration d'un CMS permet d'apprendre à gérer un site web via son interface d'administration (back-office)." },
        { type: "h", text: "1. Prise en main de l'interface" },
        { type: "list", items: [
          "Création d'un utilisateur administrateur",
          "Page sommaire / interface d'administration",
          "Connexion et identification",
          "Tableau de bord (Dashboard) et ses onglets",
        ]},
        { type: "h", text: "2. Gestion du contenu" },
        { type: "list", items: ["Création et modification de pages", "Gestion des articles", "Modération des commentaires"] },
        { type: "h", text: "3. Apparence du site" },
        { type: "list", items: ["Gestion des thèmes", "Organisation des menus", "Widgets et personnalisation (customizer)"] },
        { type: "h", text: "4. Médias" },
        { type: "list", items: ["Gestion de la bibliothèque média", "Ajout d'images, vidéos, fichiers", "Édition basique des médias"] },
        { type: "h", text: "5. Extensions (plugins)" },
        { type: "list", items: ["Installation et activation", "Mise à jour et gestion", "Utilisation des plugins"] },
        { type: "h", text: "6. Gestion des utilisateurs" },
        { type: "list", items: ["Création de comptes", "Gestion des rôles et permissions", "Administration des utilisateurs"] },
        { type: "h", text: "7. Réglages du site" },
        { type: "list", items: ["Réglages généraux", "Lecture et permaliens", "Paramètres de discussion, médias, etc."] },
        { type: "h", text: "8. Sécurité et sauvegarde" },
        { type: "list", items: ["Mises à jour régulières", "Sauvegardes du site", "Plugins de sécurité"] },
        { type: "h", text: "9. SEO et performance" },
        { type: "list", items: ["Optimisation du contenu", "Plugins SEO", "Amélioration de la vitesse et compatibilité mobile"] },
        { type: "h", text: "10. Annexes" },
        { type: "list", items: ["Ressources complémentaires", "Conseils et bonnes pratiques"] },
      ],
    },
  ],
};
