import type { Section } from "../types";

export const maquettage: Section = {
  id: "maquettage",
  title: "Maquettage — Figma & UI/UX",
  icon: "PenTool",
  tags: ["ts"],
  subsections: [
    {
      id: "maq-01-outils",
      title: "1. Outils de maquettage et prototypage",
      blocks: [
        { type: "h", text: "Tableaux / post-it / carnet de croquis" },
        { type: "p", text: "Idéal pour les idées rapides et le brainstorming :" },
        { type: "list", items: ["Carnet de croquis (papier)", "Post-it (idéation, tri d'idées)", "Tableaux physiques (mur, tableau blanc)"] },
        { type: "h", text: "Applications web (collaboration en ligne)" },
        { type: "p", text: "Outils très utilisés pour le travail en équipe :" },
        { type: "list", items: [
          "Figma → design UI/UX collaboratif en temps réel",
          "Miro → tableau blanc digital (brainstorming, UX, mindmaps)",
          "Balsamiq → wireframes rapides et low-fidelity",
        ]},
        { type: "h", text: "Applications desktop (logiciels installés)" },
        { type: "p", text: "Plus orientés design professionnel :" },
        { type: "list", items: ["Adobe XD → prototypage UI/UX interactif (Adobe)"] },
        { type: "h", text: "Applications macOS" },
        { type: "list", items: ["Sketch → design d'interface très populaire sur Mac"] },
        { type: "h", text: "Tableaux en ligne simples" },
        { type: "p", text: "Pour dessiner rapidement des schémas :" },
        { type: "list", items: ["Excalidraw → dessins style \"main levée\", wireframes simples"] },
        { type: "h", text: "Comparatif des outils" },
        { type: "table", headers: ["Outil", "Type", "Usage principal", "Plateforme"], rows: [
          ["Figma", "Web", "Design UI/UX collaboratif temps réel", "Navigateur"],
          ["Miro", "Web", "Brainstorming, mindmaps, UX", "Navigateur"],
          ["Balsamiq", "Web", "Wireframes low-fidelity rapides", "Navigateur"],
          ["Adobe XD", "Desktop", "Prototypage UI/UX interactif", "Windows/Mac"],
          ["Sketch", "macOS", "Design d'interface professionnel", "Mac uniquement"],
          ["Excalidraw", "Web", "Dessins main levée, schémas simples", "Navigateur"],
        ]},
      ],
    },
    {
      id: "maq-02-structure-site",
      title: "2. Structure de base d'un site web",
      blocks: [
        { type: "h", text: "Pages principales (structure globale)" },
        { type: "list", items: ["Page d'accueil", "À propos", "Mentions légales", "Contact / formulaire", "FAQ", "Blog / actualités", "Offres / promotions"] },
        { type: "h", text: "Pages de contenu (produits / organisation)" },
        { type: "list", items: ["Page produits", "Catégorie", "Sous-catégorie (si nécessaire)", "Page produit (fiche détaillée)"] },
        { type: "h", text: "Pages fonctionnelles (e-commerce)" },
        { type: "list", items: [
          "Panier",
          "Paiement / commande",
          "Mon compte",
          "Authentification (connexion / inscription)",
          "Mot de passe oublié / réinitialisation",
          "Paramètres du compte",
          "Mes commandes",
        ]},
        { type: "h", text: "Pages techniques / système" },
        { type: "list", items: ["Page 404 (erreur)", "Page maintenance"] },
      ],
    },
    {
      id: "maq-03-parcours-utilisateur",
      title: "3. Parcours utilisateur",
      blocks: [
        { type: "h", text: "Flux utilisateur" },
        { type: "p", text: "Utilisateur :" },
        { type: "list", items: ["Connexion / inscription", "Mot de passe oublié", "Gestion du compte"] },
        { type: "p", text: "Achat :" },
        { type: "list", items: ["Produit → Panier → Paiement → Commande"] },
        {
          type: "diagram",
          content: `PARCOURS ACHAT
==============

[Produit] ──→ [Panier] ──→ [Paiement] ──→ [Commande confirmée]

PARCOURS COMPTE
===============

[Accueil] ──→ [Connexion / Inscription]
                      │
                      ├──→ [Compte]
                      │       ├── Paramètres
                      │       └── Mes commandes
                      │
                      └──→ [Mot de passe oublié]
                                    │
                                    └──→ [Réinitialisation]`,
        },
        { type: "h", text: "Vue simplifiée — Arborescence complète" },
        {
          type: "diagram",
          content: `Accueil
├── À propos
├── Produit
│   ├── Catégorie
│   ├── Sous-catégorie
│   └── Produit (fiche détaillée)
├── Panier
├── Paiement
├── Compte
│   ├── Connexion / Inscription
│   ├── Mot de passe oublié
│   ├── Paramètres
│   └── Commandes
├── Blog
├── FAQ
├── Contact
├── Offres
├── Mentions légales
├── 404
└── Maintenance`,
        },
      ],
    },
    {
      id: "maq-04-structure-page",
      title: "4. Structure de contenu d'une page web",
      blocks: [
        { type: "note", variant: "info", text: "Utiliser du faux texte s'il manque l'original." },
        { type: "h", text: "Header (haut de page)" },
        { type: "p", text: "Éléments principaux :" },
        { type: "list", items: ["Logo", "Menu principal", "Sous-menus (dropdown si besoin)", "Recherche"] },
        { type: "p", text: "Icônes utilisateur :" },
        { type: "list", items: ["Compte utilisateur", "Panier", "Notifications", "Dark mode (mode sombre)", "Sélecteur langue / pays"] },
        {
          type: "diagram",
          content: `HEADER
══════════════════════════════════════════════
[ LOGO ]   [ Menu 1 | Menu 2 | Menu 3 ]   [🔍][👤][🛒]
══════════════════════════════════════════════`,
        },
        { type: "h", text: "Hero section (bannière principale)" },
        { type: "list", items: [
          "Image de fond (visuel fort)",
          "Nom produit / gamme",
          "Phrase d'accroche (H1 – très grande taille)",
          "Description rapide",
          "Prix",
          'CTA principal (ex : "Acheter", "Découvrir")',
        ]},
        {
          type: "diagram",
          content: `HERO SECTION
╔══════════════════════════════════════════════╗
║                                              ║
║  [IMAGE DE FOND PLEINE LARGEUR]              ║
║                                              ║
║  Nom produit / gamme                         ║
║  ┌────────────────────────────────┐          ║
║  │  H1 — Phrase d'accroche forte  │          ║
║  └────────────────────────────────┘          ║
║  Description rapide             Prix         ║
║                                              ║
║       [ CTA — Acheter / Découvrir ]          ║
║                                              ║
╚══════════════════════════════════════════════╝`,
        },
        { type: "h", text: "Contenus secondaires" },
        { type: "p", text: "Blocs visuels :" },
        { type: "list", items: ["Titre ou nom de catégorie", "Description courte + avis clients (si disponible)", "Bouton / lien CTA"] },
        { type: "p", text: "Ces blocs doivent être hiérarchisés :" },
        { type: "list", items: ["CTA sur les éléments importants", "Mise en avant des produits stratégiques"] },
        { type: "p", text: "Organisation des contenus :" },
        { type: "list", items: [
          "Blocs modulaires (cards / sections)",
          "Mise en avant produits / catégories",
          "Avis clients intégrés sous les blocs",
          "CTA répétitifs mais cohérents",
        ]},
        {
          type: "diagram",
          content: `CONTENUS SECONDAIRES — Grille de cards
┌──────────┐  ┌──────────┐  ┌──────────┐
│  [IMAGE] │  │  [IMAGE] │  │  [IMAGE] │
│  Titre   │  │  Titre   │  │  Titre   │
│  Desc.   │  │  Desc.   │  │  Desc.   │
│ ⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐  │
│  [CTA]   │  │  [CTA]   │  │  [CTA]   │
└──────────┘  └──────────┘  └──────────┘`,
        },
        { type: "h", text: "Footer (bas de page)" },
        {
          type: "diagram",
          content: `FOOTER
══════════════════════════════════════════════════════
│ Col. 1        │ Col. 2          │ Col. 3  │ Col. 4 │
│ Plan du site  │ Infos générales │ Contact │ [RS]   │
│               │ CGU / RGPD      │ FAQ     │ [RS]   │
│               │ Mentions légales│         │ [RS]   │
├───────────────────────────────────────────────────-┤
│         Newsletter (inscription email)             │
├────────────────────────────────────────────────────┤
│  Barre finale : © Copyright — Entreprise — 2025   │
══════════════════════════════════════════════════════`,
        },
        { type: "list", items: [
          "Colonne 1 : Plan du site",
          "Colonne 2 : Informations générales, CGU / RGPD, Mentions légales",
          "Colonne 3 : Contact, FAQ",
          "Colonne 4 : Réseaux sociaux (icônes)",
          "Bloc additionnel : Newsletter (inscription email)",
          "Barre finale : Copyright, Nom de l'entreprise, Année",
        ]},
      ],
    },
    {
      id: "maq-05-workflow-design",
      title: "5. Workflow de design UI/UX (maquette → développement)",
      blocks: [
        {
          type: "diagram",
          content: `WORKFLOW UI/UX
══════════════════════════════════════════════════════
  1. INSPIRATION     →  2. WIREFRAMES   →  3. MAQUETTES
  & BENCHMARK           (basse fidélité)    (haute fidélité)
       ↓                      ↓                  ↓
  Analyse sites          Zoning              Couleurs
  Benchmark              Organisation        Typographie
  Inspirations           Hiérarchie          Composants UI
  Analyse UX             Schémas N/B         Responsive
                         Focus : fonction    Hiérarchie visuelle
       ↓                      ↓                  ↓
  4. TESTS           ←  5. CODAGE
  UTILISATEURS           DE LA MAQUETTE
       ↓                      ↓
  Tests réels           HTML / CSS / JS
  A/B testing           Frameworks
  Ajustements UX        Responsive`,
        },
        { type: "h", text: "1. Inspiration & benchmark" },
        { type: "p", text: "Comprendre ce qui existe déjà et définir une direction visuelle." },
        { type: "list", items: [
          "Analyse de sites / apps existants",
          "Benchmark concurrentiel",
          "Recherche d'inspirations (UI patterns, tendances)",
          "Analyse structure + UX + design",
        ]},
        { type: "h", text: "2. Wireframes (basse fidélité)" },
        { type: "p", text: "Structurer les écrans sans design." },
        { type: "list", items: ["Zoning (répartition des blocs)", "Organisation des pages", "Hiérarchie des contenus", "Schémas simples (noir/blanc)"] },
        { type: "note", variant: "info", text: "Focus : fonction, pas esthétique" },
        { type: "h", text: "3. Maquettes haute-fidélité (UI design)" },
        { type: "p", text: "Créer le design final visuel." },
        { type: "list", items: [
          "Couleurs, typographie, branding",
          "Composants UI (boutons, cards, menus)",
          "Responsive design (mobile / desktop)",
          "Hiérarchie visuelle avancée",
        ]},
        { type: "h", text: "4. Tests utilisateurs" },
        { type: "p", text: "Valider et améliorer le design." },
        { type: "list", items: ["Tests utilisateurs réels", "Observation des comportements", "A/B testing", "Ajustements UX/UI"] },
        { type: "h", text: "5. Codage de la maquette" },
        { type: "p", text: "Transformer la maquette en site ou application." },
        { type: "list", items: [
          "Intégration HTML / CSS / JS",
          "Frameworks (React, Vue…)",
          "Responsive implementation",
          "Design system utilisé en code",
        ]},
      ],
    },
    {
      id: "maq-06-cahier-charges-workflow",
      title: "6. Cahier des charges & workflow de maquettage UI/UX",
      blocks: [
        { type: "h", text: "1. Analyse & compréhension des besoins clients" },
        { type: "p", text: "Comprendre le projet et les utilisateurs." },
        { type: "list", items: [
          "Analyse des attentes client",
          "Définition des objectifs du produit",
          "Étude des utilisateurs (personas)",
          "Analyse du contexte et des besoins",
          "Contraintes techniques / business",
        ]},
        { type: "h", text: "2. Liste des contenus + structures des pages (Zoning)" },
        { type: "p", text: "Organiser le site avant le design." },
        { type: "list", items: ["Sitemap (arborescence des pages)", "Zoning (répartition des blocs)", "Structure de chaque page", "Parcours utilisateur"] },
        { type: "h", text: "3. Wireframes basse fidélité" },
        { type: "p", text: "Construire la structure fonctionnelle sans design." },
        { type: "list", items: [
          "Organisation des éléments",
          "Position des blocs",
          "Logique UX (navigation, parcours)",
          "Maquettes simples (noir et blanc)",
        ]},
        { type: "h", text: "4. Définition de l'esthétique visuelle" },
        { type: "p", text: "Créer l'identité visuelle du produit." },
        { type: "list", items: ["Couleurs (palette)", "Typographies", "Style des composants UI", "Moodboard / direction artistique", "Design system initial"] },
        { type: "h", text: "5. Prototype final (haute fidélité)" },
        { type: "p", text: "Créer la version finale proche du produit réel." },
        { type: "list", items: [
          "UI complète (couleurs, typographie, composants)",
          "Responsive (mobile / desktop)",
          "Prototype interactif",
          "Expérience utilisateur finale",
        ]},
        { type: "h", text: "6. Design System" },
        { type: "p", text: "Standardiser tout le design du produit." },
        { type: "list", items: [
          "Composants réutilisables (boutons, cards…)",
          "Tokens (couleurs, espacements, typo)",
          "Règles d'utilisation UI",
          "Documentation du design system",
        ]},
        {
          type: "diagram",
          content: `WORKFLOW CAHIER DES CHARGES
════════════════════════════════════════════════════════════
1. Analyse besoins
      ↓
2. Zoning + Sitemap
      ↓
3. Wireframes basse fidélité
      ↓
4. Esthétique visuelle (moodboard, palette, typo)
      ↓
5. Prototype haute fidélité
      ↓
6. Design System
════════════════════════════════════════════════════════════`,
        },
      ],
    },
    {
      id: "maq-07-gestion-projet",
      title: "7. Gestion de projet maquettage (UI/UX)",
      blocks: [
        { type: "h", text: "1. Suivi & communication projet" },
        { type: "p", text: "Petit projet (1–2 personnes) :" },
        { type: "list", items: ["1 à 2 rendez-vous (visio ou présentiel)", "Points réguliers rapides", "Validation simple des étapes clés"] },
        { type: "p", text: "Projet moyen / grand :" },
        { type: "list", items: [
          "Plusieurs réunions planifiées",
          "Suivi structuré (hebdomadaire / sprint)",
          "Centralisation des échanges (outil type Notion, Figma, Slack…)",
          "Validation écrite des décisions",
        ]},
        { type: "h", text: "2. Cahier des charges (CDC)" },
        { type: "p", text: "Rédaction du CDC :" },
        { type: "list", items: [
          "Analyse du besoin client",
          "Objectifs du produit",
          "Fonctionnalités attendues",
          "Parcours utilisateur",
          "Contraintes techniques",
        ]},
        { type: "p", text: "Validation :" },
        { type: "list", items: ["Signature du CDC avant production", "Accord client obligatoire pour démarrer"] },
        { type: "h", text: "3. Gestion des risques & blocages" },
        { type: "p", text: "Points bloquants :" },
        { type: "list", items: ["Problèmes techniques", "Désaccord client", "Retards de validation"] },
        { type: "p", text: "Solutions alternatives :" },
        { type: "list", items: ["Itérations rapides", "Prototypage alternatif", "Arbitrage client / designer"] },
        { type: "h", text: "4. Post-livraison (évolution du projet)" },
        { type: "p", text: "Recueil des retours :" },
        { type: "list", items: ["Feedback utilisateurs", "Analyse des comportements", "Retours client"] },
        { type: "p", text: "Amélioration continue :" },
        { type: "list", items: ["Intégration des évolutions", "Mise à jour des maquettes", "Optimisation UX/UI"] },
        { type: "h", text: "5. Documentation du projet" },
        { type: "p", text: "Types de documents :" },
        { type: "list", items: [
          "Cahier des charges (CDC)",
          "Spécifications techniques",
          "Guide utilisateur (si nécessaire)",
          "Design system",
          "Documentation pour développeurs",
        ]},
      ],
    },
    {
      id: "maq-08-cdc-ecommerce",
      title: "8. Cahier des charges — Site e-commerce",
      blocks: [
        { type: "h", text: "1. Contexte général" },
        { type: "p", text: "Client :" },
        { type: "list", items: ["Nom : Client X", "Secteur : (à préciser)"] },
        { type: "p", text: "Cible :" },
        { type: "list", items: ["Profil : Client Y", "Comportements d'achat", "Besoins utilisateurs", "Habitudes digitales"] },
        { type: "h", text: "2. Contexte & objectifs" },
        { type: "p", text: "Objectifs du site :" },
        { type: "list", items: [
          "Vente en ligne de produits / services",
          "Paiement sécurisé",
          "Augmenter le taux de conversion",
          "Expérience utilisateur fluide (UX)",
          "Référencement naturel (SEO)",
        ]},
        { type: "h", text: "3. Contenus & fonctionnalités" },
        { type: "p", text: "Fonctionnalités principales :" },
        { type: "list", items: [
          "Catégories et sous-catégories produits",
          "Barre de recherche",
          "Panier",
          "Paiement en ligne",
          "Compte utilisateur",
          "Avis clients",
          "Suivi des commandes",
        ]},
        { type: "h", text: "4. Pages principales" },
        { type: "p", text: "Pages essentielles :" },
        { type: "list", items: [
          "Accueil",
          "Pages produits",
          "Catégories / sous-catégories",
          "Panier",
          "Paiement / commande",
          "Compte utilisateur",
          "Contact",
          "À propos",
          "FAQ",
        ]},
        { type: "h", text: "5. Design & ergonomie" },
        { type: "p", text: "Principes de design :" },
        { type: "list", items: [
          "Design responsive (mobile / tablette / desktop)",
          "Interface moderne et cohérente",
          "Navigation intuitive",
          "Parcours d'achat simplifié",
          "Accessibilité (lisibilité, contrastes)",
        ]},
        { type: "h", text: "6. Contraintes techniques" },
        { type: "p", text: "Exigences techniques :" },
        { type: "list", items: [
          "Sécurisation des paiements (SSL / HTTPS)",
          "Performance (temps de chargement optimisé)",
          "SEO optimisé (balises, structure)",
          "Compatibilité multi-navigateurs",
          "Tracking analytics (Google Analytics ou équivalent)",
        ]},
        { type: "h", text: "7. Livrables attendus" },
        { type: "p", text: "Documents fournis :" },
        { type: "list", items: [
          "Cahier des charges validé",
          "Wireframes",
          "Maquettes UI (haute fidélité)",
          "Prototype interactif",
          "Guide design system (si applicable)",
          "Planning détaillé du projet",
          "Version finale du site",
        ]},
      ],
    },
    {
      id: "maq-09-structure-app",
      title: "9. Structure & mise en page des applications (UI / maquette)",
      blocks: [
        { type: "h", text: "1. Organisation générale des contenus" },
        { type: "p", text: "Zones en colonnes :" },
        { type: "list", items: [
          "Utilisation de grilles (ex : 12 colonnes)",
          "Répartition en blocs (ex : 2 blocs de 6 colonnes)",
          "Organisation modulaire du contenu",
        ]},
        { type: "p", text: "Conteneur principal :" },
        { type: "list", items: [
          "Occupe ~90% de la largeur écran",
          "Limité en largeur max (ex : 1200px)",
          "Centré avec marges latérales",
        ]},
        {
          type: "diagram",
          content: `CONTENEUR PRINCIPAL
══════════════════════════════════════════════════════════
│      │←────── ~90% largeur (~1200px max) ──────→│      │
│marge │                                          │marge │
│      │  [BLOC 1]   [BLOC 2]   [BLOC 3]          │      │
│      │                                          │      │
══════════════════════════════════════════════════════════`,
        },
        { type: "h", text: "2. Placement et hiérarchie des éléments" },
        { type: "p", text: "Placement des éléments :" },
        { type: "list", items: [
          "Basé sur l'importance (priorité UX)",
          "Respect du sens de lecture (Z ou F pattern)",
          "CTA toujours visibles et stratégiques",
        ]},
        { type: "p", text: "Hiérarchie visuelle :" },
        { type: "list", items: ["Taille (titres > sous-titres > texte)", "Couleur (éléments importants mis en avant)", "Poids visuel des blocs"] },
        {
          type: "diagram",
          content: `PATTERNS DE LECTURE
════════════════════════════════

Z PATTERN (landing pages)      F PATTERN (contenu texte)
══════════════════             ══════════════════
→ → → → → → → ↘              → → → → → → →
              ↙ ↘             ↓
← ← ← ← ← ← ↙  ↘            → → → → →
                  ↘            ↓
→ → → → → → → →   → → →`,
        },
        { type: "h", text: "3. Espacements et structure interne" },
        { type: "p", text: "Marges & paddings :" },
        { type: "list", items: ["Espacements réguliers", "Éviter la surcharge visuelle", "Donner de l'air au contenu"] },
        { type: "p", text: "Zones blanches (whitespace) :" },
        { type: "list", items: ["Améliore la lisibilité", "Guide le regard de l'utilisateur", "Rend l'interface plus premium"] },
        { type: "h", text: "4. Responsive design (adaptation écran)" },
        { type: "p", text: "Principes :" },
        { type: "list", items: ["Mobile first (priorité mobile)", "Adaptation tablette / desktop", "Contenus flexibles (blocs qui se réorganisent)"] },
        { type: "p", text: "Comportement des éléments :" },
        { type: "list", items: ["Empilement vertical sur mobile", "Colonnes sur desktop", "Réorganisation automatique"] },
        {
          type: "diagram",
          content: `RESPONSIVE — Desktop vs Mobile
════════════════════════════════════════════════

DESKTOP                        MOBILE
┌──────────────────────┐       ┌──────────┐
│ [Col1] [Col2] [Col3] │  →→   │ [Col1]   │
│                      │       │ [Col2]   │
│ [Bloc A] [Bloc B]    │       │ [Col3]   │
│                      │       │ [Bloc A] │
└──────────────────────┘       │ [Bloc B] │
                               └──────────┘`,
        },
        { type: "h", text: "5. Cohérence globale des pages" },
        { type: "p", text: "Principes clés :" },
        { type: "list", items: [
          "Structure similaire sur toutes les pages",
          "Réutilisation des composants UI",
          "Cohérence des styles (typo, couleurs, boutons)",
        ]},
        { type: "p", text: "Navigation cohérente :" },
        { type: "list", items: ["Menu toujours au même endroit", "Expérience utilisateur stable", "Réduction de la charge cognitive"] },
      ],
    },
    {
      id: "maq-10-zones-interface",
      title: "10. Structure de base des zones d'une interface",
      blocks: [
        {
          type: "diagram",
          content: `STRUCTURE GLOBALE D'UNE INTERFACE
════════════════════════════════════════════════════
┌─────────────────────────────────────────────────┐
│  NAVIGATION FIXE (barre sticky en haut)         │
├─────────────────────────────────────────────────┤
│                   HEADER                        │
│  [Logo]     [Nav principale]     [Icônes user]  │
├─────────────────────────────────────────────────┤
│                                                 │
│                    BODY                    ←──── VIEWPORT
│   ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│   │  Card   │  │  Card   │  │  Card   │         │
│   └─────────┘  └─────────┘  └─────────┘         │
│                                                 │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│   │  Card   │  │  Card   │  │  Card   │         │
│   └─────────┘  └─────────┘  └─────────┘         │
│                                                 │
├─────────────────────────────────────────────────┤
│                   FOOTER                        │
└─────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. En-tête (Header)" },
        { type: "list", items: ["Logo", "Recherche", "Compte utilisateur", "Panier (si e-commerce)", "Notifications", "Dark mode (optionnel)"] },
        { type: "p", text: "Particularité : Peut inclure une sidebar de navigation large (≥ 80px) si design type application" },
        { type: "h", text: "2. Navigation (menu)" },
        { type: "list", items: [
          "Menu horizontal (site web classique)",
          "Menu déroulant (sous-catégories)",
          "Menu hamburger (mobile)",
          "Sidebar (applications / dashboards)",
        ]},
        { type: "h", text: "3. Conteneur principal (Main content)" },
        { type: "list", items: [
          "Zone centrale du contenu",
          "Occupe la majorité de l'écran",
          "Organisé en blocs (cards, sections, colonnes)",
          "Responsive (s'adapte mobile / desktop)",
        ]},
        { type: "h", text: "4. Pied de page (Footer)" },
        { type: "list", items: ["Liens utiles (FAQ, contact, mentions légales)", "Newsletter", "Réseaux sociaux", "© Copyright"] },
      ],
    },
    {
      id: "maq-11-grille",
      title: "11. Structure de grille & système de mise en page",
      blocks: [
        { type: "h", text: "1. Système de base : grille 8pts" },
        { type: "p", text: "Basé sur une unité de 8px — Tous les espacements sont des multiples de 8 :" },
        { type: "list", items: ["8px", "16px", "24px", "32px", "etc."] },
        {
          type: "diagram",
          content: `GRILLE 8PT
══════════════════════════════
│ 8px │ 16px │ 24px │ 32px │...
│  ▪  │  ▪ ▪ │ ▪▪▪  │ ▪▪▪▪ │`,
        },
        { type: "h", text: "2. Grille en 6 colonnes (guide de composition)" },
        { type: "list", items: [
          "Sert de guide pour placer les composants",
          "Aide à structurer les blocs UI",
          "Facilite l'alignement et la hiérarchie",
        ]},
        { type: "p", text: "Utilisation :" },
        { type: "list", items: ["1 colonne → petit élément", "2–3 colonnes → contenu moyen", "6 colonnes → section complète"] },
        {
          type: "diagram",
          content: `GRILLE 6 COLONNES
════════════════════════════════════════════════════════════════════
│  Col1  │  Col2  │  Col3  │  Col4  │  Col5  │  Col6  │
│        │        │        │        │        │        │
│←─ 1 ──→│←───── 2-3 cols ──────→ │←─────── 6 cols ──────────────→ │
│ petit  │    contenu moyen       │       section complète         │`,
        },
        { type: "h", text: "3. Conteneur principal (layout global)" },
        { type: "list", items: ["Largeur max : ex. 1200px", "Centré dans la page", "Marges latérales obligatoires", "Adaptatif (responsive)"] },
        { type: "h", text: "4. Grille visible ou masquée" },
        { type: "p", text: "La grille peut être :" },
        { type: "list", items: ["visible (wireframe / design)", "masquée (version finale)"] },
        { type: "h", text: "5. Espaces latéraux & respiration" },
        { type: "p", text: "Marges & paddings :" },
        { type: "list", items: ["Marges latérales importantes", "Espaces blancs (whitespace)", "Éviter la surcharge visuelle"] },
        { type: "p", text: "Utilisation :" },
        { type: "list", items: ["Lecture plus fluide", 'Interface plus "premium"', "Meilleure hiérarchie visuelle"] },
        {
          type: "diagram",
          content: `TAILLES D'ÉCRAN & MARGES
════════════════════════════════════════════════════════
   1280px                      1440px
┌───────────────────┐    ┌──────────────────────┐
│ 120px │ 1040px    │    │ 120px│   1200px      │
│◄─────►│◄────────► │    │◄────►│◄─────────────►│
└───────────────────┘    └──────────────────────┘

              1920px
┌────────────────────────────────────────────────────┐
│   360px   │              1200px                    │
│◄─────────►│◄──────────────────────────────────────►│
└────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "maq-12-univers-visuel",
      title: "12. Création de l'univers visuel d'une maquette UI",
      blocks: [
        { type: "h", text: "1. Veille graphique & inspiration" },
        { type: "list", items: [
          "Recherche de références visuelles",
          "Analyse de tendances UI/UX",
          "Identification de styles cohérents",
          "Sélection d'exemples pertinents",
        ]},
        { type: "h", text: "2. Choix de la palette de couleurs" },
        { type: "list", items: ["Couleur principale", "Couleurs secondaires", "Couleurs neutres", "Couleurs d'alerte (erreur, succès…)"] },
        { type: "h", text: "3. Choix de la typographie" },
        { type: "list", items: ["Titre (H1, H2…)", "Texte courant", "Texte bouton / CTA"] },
        { type: "h", text: "4. Planche d'ambiance (moodboard)" },
        { type: "list", items: ["Images d'inspiration", "Couleurs", "Typographies", "Styles UI"] },
        { type: "h", text: "5. Style d'iconographie" },
        { type: "list", items: ["Line icons (traits fins)", "Flat icons", "Icons pleins", "Style cohérent partout"] },
        { type: "h", text: "6. Style des composants clés" },
        { type: "list", items: ["Boutons", "Cards", "Inputs / formulaires", "Blocs produits"] },
        { type: "h", text: "7. Micro-interactions & effets" },
        { type: "list", items: ["Hover (boutons, cards)", "Loading animations", "Feedback utilisateur", "Transitions fluides, etc."] },
        { type: "h", text: "8. Mini design system" },
        { type: "list", items: [
          "Composants UI réutilisables",
          "Couleurs & typographies",
          "Espacements (8pt system)",
          "Règles d'utilisation",
        ]},
      ],
    },
    {
      id: "maq-13-typographie",
      title: "13. Structure design typographique (UI)",
      blocks: [
        { type: "h", text: "1. Hiérarchie des textes" },
        { type: "list", items: [
          "H1 → titre principal (très grand, impact fort)",
          "H2 / H3 → sous-titres",
          "Paragraphes → texte courant",
          "Listes → structuration rapide de l'information",
        ]},
        { type: "h", text: "2. Styles typographiques homogènes" },
        { type: "list", items: ["Un style par type d'élément", "Réutilisation des styles", "Respect des tailles définies"] },
        { type: "h", text: "3. Espacement des textes" },
        { type: "list", items: ["Espaces entre paragraphes", "Interlignage (line-height)", "Respiration visuelle entre blocs"] },
        { type: "h", text: "4. Faux texte (placeholder)" },
        { type: "list", items: ["Remplacer le contenu absent", "Tester la mise en page", "Valider la hiérarchie visuelle"] },
        { type: "h", text: "5. Contrastes typographiques & couleurs" },
        { type: "list", items: ["Couleurs (texte vs fond)", "Taille de police", "Graisse (bold / regular / light)", "Contraste suffisant (accessibilité)"] },
        { type: "h", text: "6. Organisation visuelle du texte" },
        { type: "list", items: ["Alignement (gauche le plus courant)", "Blocs de texte clairs", "Séparation des idées", "Mise en avant des titres"] },
        { type: "h", text: "7. Échelle typographique (tailles)" },
        { type: "table", headers: ["Élément", "Taille", "Poids"], rows: [
          ["H1 (titre principal)", "28–36 px", "bold"],
          ["Sous-titres", "20–24 px", "medium"],
          ["Texte normal", "14–16 px", "regular"],
          ["Liste / contenu secondaire", "14–16 px", "regular"],
          ["Texte léger / secondaire", "12–14 px", "light"],
        ]},
        {
          type: "diagram",
          content: `HIÉRARCHIE TYPOGRAPHIQUE
════════════════════════════════
H1 — Titre principal        ████████████████████  28–36px bold
H2 — Sous-titre             ████████████████      20–24px medium
H3 — Sous-sous-titre        ████████████          18–20px medium
Paragraphe                  ██████████            14–16px regular
Liste / secondaire          ██████████            14–16px regular
Légende / discret           ████████              12–14px light`,
        },
      ],
    },
    {
      id: "maq-14-palette-couleurs",
      title: "14. Palette de couleurs (UI / maquette)",
      blocks: [
        { type: "h", text: "1. Couleurs chaudes" },
        { type: "list", items: ["🔴 Rouge", "🟠 Orange", "🟡 Jaune", "🟣 Violet (peut être chaud selon teinte)"] },
        { type: "p", text: "Effet : Dynamique, Émotion / énergie, Attire l'attention (CTA, promotions)" },
        { type: "h", text: "2. Couleurs froides" },
        { type: "list", items: ["🔵 Bleu", "🟦 Indigo", "🟢 Vert"] },
        { type: "p", text: "Effet : Calme / confiance, Professionnel, Nature / stabilité" },
        { type: "h", text: "3. Couleurs complémentaires (contraste)" },
        { type: "p", text: "Associer une couleur chaude + une couleur froide" },
        { type: "list", items: ["🔵 Bleu ↔︎ 🟠 Orange", "🔴 Rouge ↔︎ 🟢 Vert", "🟡 Jaune ↔︎ 🟣 Violet"] },
        { type: "p", text: "Effet : Créer du contraste, Attirer l'attention, Hiérarchiser les éléments" },
        {
          type: "diagram",
          content: `ROUE DES COULEURS COMPLÉMENTAIRES
════════════════════════════════

      CHAUD          FROID
   ┌─────────┐   ┌─────────┐
   │  Rouge  │↔↔↔│  Vert   │
   │ Orange  │↔↔↔│  Bleu   │
   │  Jaune  │↔↔↔│ Violet  │
   └─────────┘   └─────────┘`,
        },
      ],
    },
    {
      id: "maq-15-harmonie",
      title: "15. Harmonie des couleurs (UI / maquette)",
      blocks: [
        { type: "h", text: "1. Création de planches d'ambiance (moodboards)" },
        { type: "p", text: "Explorer différentes directions visuelles." },
        { type: "list", items: [
          "Créer 1 à 2 moodboards",
          "Mélanger couleurs, images, textures",
          "Tester plusieurs styles (minimal, vibrant, corporate…)",
        ]},
        { type: "h", text: "2. Déterminer le style visuel" },
        { type: "p", text: "Choisir une direction claire." },
        { type: "list", items: [
          "Minimaliste (peu de couleurs, neutres)",
          "Dark mode (fonds sombres, contrastes forts)",
          "Corporate (bleu, gris, sobre)",
          "Créatif (couleurs vives, contrastées)",
        ]},
        { type: "h", text: "3. Choisir les couleurs principales" },
        { type: "list", items: [
          "Couleur principale (branding)",
          "Couleurs secondaires",
          "Couleurs neutres (blanc, gris, noir)",
          "Couleurs d'état (succès, erreur, warning)",
        ]},
        { type: "h", text: "4. Créer une palette (outils web)" },
        { type: "list", items: [
          "Coolors → génération rapide de palettes",
          "Adobe Color → harmonie & roue chromatique",
          "Paletton → palettes basées sur la théorie des couleurs",
        ]},
        { type: "p", text: "Objectif : Tester différentes combinaisons, Vérifier l'équilibre des couleurs, Assurer lisibilité et contraste" },
        { type: "h", text: "5. Vérifier l'harmonie & le contraste" },
        { type: "list", items: [
          "Lisibilité du texte (contraste suffisant)",
          "Mise en avant des éléments importants",
          "Équilibre global (pas trop de couleurs)",
        ]},
      ],
    },
    {
      id: "maq-16-gamme-couleurs",
      title: "16. Gamme de couleurs",
      blocks: [
        { type: "h", text: "Par émotions" },
        { type: "table", headers: ["Émotion / Objectif", "Couleurs principales", "Signification", "Utilisation UI"], rows: [
          ["❤️ Énergie / Urgence", "Rouge, Orange, Jaune", "Dynamisme, action, alerte", "CTA, promotions, alertes"],
          ["🧘 Calme / Confiance", "Bleu, Vert", "Sérénité, sécurité, fiabilité", "Banque, santé, apps pro"],
          ["👑 Luxe / Créativité", "Violet, Noir, Or", "Élégance, mystère, premium", "Marques haut de gamme"],
          ["🌿 Nature / Bien-être", "Vert, Marron, Beige", "Naturel, écologique, apaisant", "Bio, environnement, bien-être"],
          ["🧊 Neutralité / Modernité", "Blanc, Gris, Noir", "Simplicité, clarté, minimalisme", "Interfaces modernes, pro"],
        ]},
        { type: "h", text: "Par audience" },
        { type: "table", headers: ["Audience cible", "Couleurs recommandées", "Perception / effet", "Utilisation typique"], rows: [
          ["👶 Enfants", "Couleurs vives (rouge, jaune, bleu, vert)", "Fun, énergie, jeu", "Jeux, apps éducatives"],
          ["🧑 Jeunes (ados / étudiants)", "Couleurs flashy, contrastées (violet, bleu, dégradés)", "Dynamisme, modernité, créativité", "Réseaux sociaux, apps mobiles"],
          ["Adultes / professionnels", "Bleu, gris, blanc", "Sérieux, confiance, clarté", "SaaS, corporate, banques"],
          ["👑 Haut de gamme / luxe", "Noir, blanc, or, violet foncé", "Élégance, exclusivité", "Marques premium"],
          ["🌿 Écologique / bien-être", "Vert, beige, marron", "Nature, calme, authenticité", "Bio, santé, environnement"],
          ["👵 Seniors", "Couleurs douces (bleu clair, vert doux)", "Lisibilité, confort visuel", "Santé, services publics"],
        ]},
      ],
    },
    {
      id: "maq-17-organisation-typo",
      title: "17. Organisation du contenu typographique (UI)",
      blocks: [
        { type: "h", text: "1. Limiter les polices" },
        { type: "list", items: ["1 à 2 familles maximum", "Éviter les polices fantaisie (peu lisibles en UI)"] },
        { type: "h", text: "2. Choisir le bon usage" },
        { type: "list", items: ["Serif → style éditorial, élégant", "Sans-serif → moderne, lisible (le plus utilisé en UI)"] },
        { type: "h", text: "3. Jouer avec les variantes" },
        { type: "list", items: ["Bold → titres importants", "Medium → sous-titres", "Regular → texte principal", "Italique → citation / mise en avant"] },
        { type: "h", text: "Tableau : Type de police par élément UI" },
        { type: "table", headers: ["Élément UI", "Type de police recommandé", "Objectif / usage"], rows: [
          ["🏷 Titre (H1, H2…)", "Serif ou Sans-serif", "Attirer l'attention, structurer"],
          ["📝 Paragraphes", "Sans-serif", "Lisibilité optimale"],
          ["📋 Listes / puces", "Sans-serif", "Lecture rapide et claire"],
          ["💬 Citation / bloc texte", "Serif ou Sans-serif italique", "Mise en avant, différenciation"],
          ["🔘 CTA (boutons)", "Sans-serif", "Impact, lisibilité immédiate"],
          ["🧾 Notes / légendes", "Sans-serif", "Discret mais lisible"],
          ["🧭 Menu / navigation", "Sans-serif", "Clarté et accessibilité"],
        ]},
      ],
    },
    {
      id: "maq-18-creer-palette",
      title: "18. Créer une palette de couleurs (UI)",
      blocks: [
        { type: "h", text: "1. Définir l'objectif" },
        { type: "p", text: "Avant de choisir des couleurs, se poser :" },
        { type: "list", items: ["Quelle est la cible ?", "Quelle émotion transmettre ? (confiance, énergie, luxe…)", "Quel type de produit ? (app, e-commerce, SaaS…)"] },
        { type: "h", text: "2. Choisir une couleur principale" },
        { type: "list", items: ["Couleur dominante de l'interface", "Représente la marque"] },
        { type: "h", text: "3. Ajouter des couleurs secondaires" },
        { type: "list", items: ["Compléter la couleur principale", "Créer du contraste", "1 à 2 couleurs max"] },
        { type: "h", text: "4. Ajouter des couleurs neutres" },
        { type: "list", items: ["Blanc", "Gris", "Noir"] },
        { type: "p", text: "Utilisation : Fonds, Texte, Équilibre visuel" },
        { type: "h", text: "5. Ajouter des couleurs d'état" },
        { type: "list", items: ["🟢 Succès", "🔴 Erreur", "🟡 Warning", "🔵 Information"] },
        { type: "h", text: "6. Vérifier contraste & accessibilité" },
        { type: "list", items: ["Lisibilité texte / fond", "Accessibilité (contraste suffisant)", "Lisibilité mobile"] },
        { type: "h", text: "7. Utiliser des outils" },
        { type: "list", items: ["Coolors", "Adobe Color", "Paletton"] },
        { type: "p", text: "Pour générer et tester des palettes." },
        {
          type: "diagram",
          content: `STRUCTURE D'UNE PALETTE UI
═══════════════════════════════════════════════
  PRIMARY     SECONDARY    NEUTRAL     ÉTAT
  ━━━━━━━━    ━━━━━━━━     ━━━━━━━━   ━━━━━━━━
  ████████    ████████     ████████   ████████ succès
  ████████    ████████     ████████   ████████ erreur
             (1-2 max)     ████████   ████████ warning
                           (blanc,    ████████ info
                            gris,
                            noir)`,
        },
      ],
    },
    {
      id: "maq-19-images",
      title: "19. Organisation des images (UI / maquette)",
      blocks: [
        { type: "h", text: "1. Cohérence visuelle" },
        { type: "list", items: ["Même style d'images (photos, illustrations…)", "Cohérence des couleurs / filtres", "Même type de cadrage (zoom, angle…)"] },
        { type: "h", text: "2. Style graphique" },
        { type: "list", items: ["Photos réalistes", "Illustrations (flat, 3D…)", "Mix maîtrisé (attention à la cohérence)"] },
        { type: "h", text: "3. Structure des formes" },
        { type: "list", items: ["Formes cohérentes (arrondies ou anguleuses)", "Même type de conteneur (cards, blocs)", "Alignement avec le design system"] },
        { type: "h", text: "4. Contraste & effets" },
        { type: "list", items: ["Overlay (assombrir image pour texte)", "Ombres (depth / relief)", "Motifs (patterns légers)"] },
        { type: "h", text: "5. Qualité & technique" },
        { type: "list", items: ["Images de bonne qualité (HD)", "Compression (WebP recommandé)", "Adaptation responsive", "Éviter les images lourdes"] },
        { type: "h", text: "6. Légalité des images" },
        { type: "list", items: ["Images libres de droits", "Vérifier licences (commercial / attribution)", "Éviter contenu protégé"] },
      ],
    },
    {
      id: "maq-20-moodboard",
      title: "20. Planche d'ambiance (UI / maquette)",
      blocks: [
        { type: "h", text: "1. Contenu de la planche" },
        { type: "list", items: [
          "Extraits visuels (interfaces, écrans…)",
          "Portions de pages (formulaires, sections…)",
          "Composants UI (boutons, cards…)",
          "Palette de couleurs",
          "Typographies",
          "Pictogrammes / icônes",
          "Textes / formes graphiques",
        ]},
        { type: "h", text: "2. Thématisation (style visuel)" },
        { type: "p", text: "Créer plusieurs planches si styles différents :" },
        { type: "list", items: ["Minimaliste", "Illustratif", "Corporate", "Dark mode"] },
        { type: "p", text: "Comparer pour choisir le meilleur univers." },
        { type: "h", text: "3. Cohérence graphique" },
        { type: "list", items: ["Même langage visuel", "Typographies cohérentes", "Styles uniformes (icônes, composants)", "Palette harmonisée"] },
        { type: "note", variant: "info", text: 'Tous les éléments doivent "aller ensemble"' },
        { type: "h", text: "4. Présence humaine (optionnel mais puissant)" },
        { type: "list", items: ["Créer de l'émotion", "Humaniser l'interface", "Faciliter l'identification utilisateur"] },
        { type: "h", text: "5. Fonction de la planche" },
        { type: "list", items: [
          "Valider une direction artistique",
          "Clarifier l'univers visuel",
          "Faciliter les échanges avec le client",
          "Servir de base pour le design UI",
        ]},
        { type: "h", text: "6. Format recommandé" },
        { type: "list", items: ["Format A3 (print)", "Ou grille digitale (Figma, Miro…)"] },
      ],
    },
    {
      id: "maq-21-veille-graphique",
      title: "21. Veille graphique (UI / maquette)",
      blocks: [
        { type: "h", text: "1. S'inspirer sans copier" },
        { type: "list", items: ["S'inspirer des meilleurs designs", "Ne jamais copier directement", "Transformer les idées en solutions propres"] },
        { type: "h", text: "2. Explorer les plateformes visuelles" },
        { type: "list", items: [
          "Dribbble → micro-interfaces / UI shots",
          "Behance → projets complets UX/UI",
          "Pinterest → moodboards visuels",
          "Awwwards → sites web innovants",
        ]},
        { type: "h", text: "3. Identifier les tendances du moment" },
        { type: "list", items: ["Glassmorphism (effet flou)", "Dark mode", "Dégradés modernes", "Minimalisme", "3D / illustrations"] },
        { type: "h", text: "4. Analyser la concurrence directe" },
        { type: "list", items: ["Étudier les concurrents directs", "Comprendre leurs choix UX/UI", "Identifier forces et faiblesses"] },
        { type: "h", text: "5. Construire une bibliothèque personnelle" },
        { type: "list", items: ["Screenshots d'interfaces", "Palettes de couleurs", "Typographies", "Composants UI"] },
        { type: "h", text: "6. Analyser les points forts des visuels" },
        { type: "list", items: ["Hiérarchie visuelle", "Mise en page (grid, spacing)", "Couleurs et contraste", "Lisibilité et UX"] },
        { type: "h", text: "7. Veille ciblée (ex : santé, finance…)" },
        { type: "p", text: "Adapter la veille au domaine du projet :" },
        { type: "list", items: ["Santé → clair, rassurant", "Finance → sérieux, sécurisé", "E-commerce → attractif, conversion"] },
        { type: "h", text: "8. Se tenir à jour en continu" },
        { type: "list", items: [
          "Refaire la veille régulièrement",
          "Suivre les nouvelles tendances UI",
          "Observer les nouveaux produits digitaux",
          "Mettre à jour sa bibliothèque",
        ]},
      ],
    },
    {
      id: "maq-22-calques",
      title: "22. Types de calques (maquette UI / design)",
      blocks: [
        { type: "h", text: "Types de calques principaux" },
        { type: "p", text: "Formes :" },
        { type: "list", items: ["Blocs graphiques (rectangles, cercles, formes)", "Utilisés pour structurer l'interface"] },
        { type: "p", text: "Texte :" },
        { type: "list", items: ["Zone de typographie modifiable", "Titres, paragraphes, labels"] },
        { type: "p", text: "Image :" },
        { type: "list", items: ["Import d'images (PNG, JPG…)", "Illustrations, photos, visuels"] },
        { type: "p", text: "Masque :" },
        { type: "list", items: ["Cache une partie d'un calque", "Permet des découpes visuelles propres"] },
        { type: "h", text: "Catégories de calques" },
        { type: "p", text: "Groupés :" },
        { type: "list", items: ["Plusieurs éléments regroupés", "Forme un seul ensemble logique"] },
        { type: "p", text: "Fusionnés :" },
        { type: "list", items: ["Combine plusieurs calques en un seul", "Exemple : texte + image fusionnés"] },
        { type: "p", text: "Verrouillés :" },
        { type: "list", items: ["Empêche la modification", "Protège les éléments importants"] },
        { type: "p", text: "Masqués :" },
        { type: "list", items: ["Invisible temporairement", "Utile pour tests et variations"] },
        { type: "h", text: "Principe de superposition" },
        { type: "p", text: "Les calques sont empilés du fond vers l'avant." },
        {
          type: "diagram",
          content: `ORDRE DE SUPERPOSITION DES CALQUES
════════════════════════════════════════
  [CTA / éléments importants]      ← avant-plan
  [Éléments interactifs]
  [Contenu principal]
  [Arrière-plan]                   ← fond
════════════════════════════════════════`,
        },
        { type: "h", text: "Utilisation et inspection" },
        { type: "p", text: "Objectif : Identifier les éléments visuels, Comprendre la structure UI, Tester les interactions" },
        { type: "p", text: "Outils : Inspecteur navigateur (HTML/CSS), Logiciels design (Figma, etc.)" },
      ],
    },
    {
      id: "maq-23-boutons",
      title: "23. Tailles et espacements des boutons (UI)",
      blocks: [
        { type: "h", text: "1. Hauteur des boutons" },
        { type: "list", items: ["Bouton standard : 40 à 48 px de hauteur", "Bouton important (CTA) : jusqu'à 56 px"] },
        { type: "h", text: "2. Largeur / bloc du bouton" },
        { type: "list", items: [
          "Bouton en bloc : 80% à 120% du contenu (selon design)",
          "Peut être centré ou pleine largeur (mobile surtout)",
        ]},
        { type: "h", text: "3. Marges autour du bouton" },
        { type: "list", items: ["16 à 24 px entre texte et bouton", "Espaces suffisants autour du bouton", "Éviter les éléments collés"] },
        { type: "h", text: "4. Tester les calques" },
        { type: "list", items: ["Activer / désactiver des calques", "Tester différentes versions", "Ajuster le design en continu"] },
        {
          type: "diagram",
          content: `TAILLES DE BOUTONS
════════════════════════════════════════
  Standard (40-48px)
  ┌─────────────────────────────────┐ ←─ 48px
  │         Bouton standard         │
  └─────────────────────────────────┘
       ↑16-24px padding horizontal↑

  CTA important (56px)
  ┌─────────────────────────────────┐ ←─ 56px
  │           ACHETER               │
  └─────────────────────────────────┘

  Mobile — pleine largeur
  ┌──────────────────────────────────────┐
  │             VALIDER                  │
  └──────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "maq-24-outil-veille",
      title: "24. Outil de veille (design / UI / tech)",
      blocks: [
        { type: "h", text: "1. Veille passive" },
        { type: "p", text: "Recevoir l'information sans chercher activement. Rester informé facilement et gagner du temps." },
        { type: "list", items: ["Newsletters design / UX / tech", "Blogs spécialisés", "Flux RSS"] },
        { type: "h", text: "2. Veille active" },
        { type: "p", text: "Aller chercher l'information manuellement. Approfondir les connaissances et comprendre les bonnes pratiques." },
        { type: "list", items: ["Documentation officielle", "Livres design / UX", "Sites spécialisés"] },
        { type: "h", text: "3. Centralisation & organisation" },
        { type: "p", text: "Centraliser les ressources, éviter la perte d'informations et structurer la veille." },
        { type: "list", items: ["Notion → base de données de veille", "GitHub → projets / stars / ressources", "Bookmark manager (favoris organisés)"] },
        { type: "h", text: "4. Communauté" },
        { type: "p", text: "Échanger avec d'autres designers, découvrir des tendances réelles et obtenir des feedbacks." },
        { type: "list", items: ["Discord (communautés design / dev)", "Forums spécialisés", "Reddit / Slack communities"] },
        { type: "h", text: "5. Rythme de veille" },
        { type: "list", items: ["30 min à 1h par session", "Régularité (quotidienne ou hebdo)", "Priorisation selon les projets"] },
        { type: "h", text: "6. Informations en temps réel" },
        { type: "p", text: "Être à jour immédiatement et suivre les tendances émergentes." },
        { type: "list", items: ["Discord", "Notifications design / tech", "Flux communautaires actifs"] },
      ],
    },
    {
      id: "maq-25-maquette-ecommerce",
      title: "25. Maquette page d'accueil e-commerce",
      blocks: [
        { type: "h", text: "Mobile" },
        {
          type: "diagram",
          content: `MAQUETTE MOBILE — PAGE D'ACCUEIL E-COMMERCE
┌──────────────────────────┐
│   LOGO              ≡    │  ← Header (menu hamburger)
├──────────────────────────┤
│                          │
│                          │
│   MISE EN AVANT PRODUIT  │  ← Hero section
│                          │
│                          │
├──────────────────────────┤
│                          │
│       NOUVEAUTÉS         │  ← Section nouveautés
│                          │
├──────────────────────────┤
│                          │
│       PROMOTIONS         │  ← Section promotions
│                          │
├──────────────────────────┤
│ CATÉGORIE  │  CATÉGORIE  │  ← Grille catégories (2 cols)
│            │             │
├──────────────────────────┤
│          FOOTER          │
└──────────────────────────┘`,
        },
        { type: "h", text: "Desktop" },
        {
          type: "diagram",
          content: `MAQUETTE DESKTOP — PAGE D'ACCUEIL E-COMMERCE
┌──────────────────────────────────────────────────────────┐
│  LOGO          NAVIGATION               LOGIN / PANIER   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                  MISE EN AVANT PRODUIT                   │
│                                                          │
├────────────────────────────┬─────────────────────────────┤
│        NOUVEAUTÉS          │         PROMOTIONS          │
│                            │                             │
├───────────────┬────────────┴──────────┬──────────────────┤
│   CATÉGORIE   │       CATÉGORIE       │    CATÉGORIE     │
│               │                       │                  │
├──────────────────────────────────────────────────────────┤
│                         FOOTER                           │
└──────────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "maq-26-reorganiser",
      title: "26. Réorganiser le contenu (Desktop → Mobile)",
      blocks: [
        { type: "h", text: "1. Principe général" },
        { type: "p", text: "Adapter l'interface à tous les écrans sans perdre le sens." },
        { type: "list", items: ["Le contenu reste identique, mais la mise en page change"] },
        { type: "h", text: "2. Sidenav (navigation latérale)" },
        { type: "p", text: "Desktop :" },
        { type: "list", items: ["Sidenav jusqu'à 360 px max", "Visible en permanence (si écran ≥ 840 px)"] },
        { type: "p", text: "Mobile :" },
        { type: "list", items: ["Transformé en menu hamburger", "Masqué par défaut pour gagner de l'espace"] },
        { type: "h", text: "3. Réagencement du contenu" },
        { type: "list", items: ["Desktop → multi-colonnes", "Mobile → une seule colonne"] },
        {
          type: "diagram",
          content: `RÉAGENCEMENT DESKTOP → MOBILE
════════════════════════════════════════════════════════════

DESKTOP (multi-colonnes)          MOBILE (1 colonne)
┌──────────────────────────────┐  ┌──────────────┐
│ ┌──────┐ ┌──────┐ ┌──────┐   │  │ ┌──────────┐ │
│ │ Col1 │ │ Col2 │ │ Col3 │   │  │ │  Col1    │ │
│ └──────┘ └──────┘ └──────┘   │  │ └──────────┘ │
│ ┌──────┐ ┌──────┐ ┌──────┐   │  │ ┌──────────┐ │
│ │ Col1 │ │ Col2 │ │ Col3 │   │→→│ │  Col2    │ │
│ └──────┘ └──────┘ └──────┘   │  │ └──────────┘ │
│ ┌──────────────────────────┐ │  │ ┌──────────┐ │
│ │          Col1            │ │  │ │  Col3    │ │
│ └──────────────────────────┘ │  │ └──────────┘ │
└──────────────────────────────┘  └──────────────┘`,
        },
        { type: "h", text: "4. Hiérarchie et sens de lecture" },
        { type: "list", items: ["Même sens de lecture sur tous les supports", "Priorité au contenu important en haut"] },
        { type: "p", text: "Mobile :" },
        { type: "list", items: ["Lecture verticale (scroll)", "Contenu prioritaire en premier"] },
        { type: "h", text: "5. Adaptation des éléments" },
        { type: "list", items: ["Taille des éléments", "Position (horizontal → vertical)", "Apparence (simplification mobile)"] },
        { type: "h", text: "6. Logique du maquettage responsive" },
        { type: "list", items: [
          "1. Maquette desktop",
          "2. Adaptation tablette / mobile",
          "3. Réorganisation des blocs",
          "4. Optimisation UX mobile-first",
        ]},
      ],
    },
    {
      id: "maq-27-adapter-navigation",
      title: "27. Adapter la navigation Desktop → Mobile",
      blocks: [
        { type: "h", text: "1. Principe général" },
        { type: "p", text: "Transformer la navigation pour qu'elle reste simple, accessible et rapide sur mobile." },
        { type: "h", text: "2. Navigation mobile en bas (bottom bar)" },
        { type: "list", items: [
          "Placée en bas de l'écran",
          "3 à 5 éléments max",
          "Bien espacés pour le confort tactile",
          "Accessible avec le pouce",
          "Accès rapide aux actions principales",
        ]},
        {
          type: "diagram",
          content: `BOTTOM NAVIGATION MOBILE
═══════════════════════════════════════
┌──────────────────────────────────────┐
│                                      │
│            [CONTENU PAGE]            │
│                                      │
│                                      │
├──────────────────────────────────────┤  ← 56px
│  ♥ Favoris   🔍 Recherche   ℹ Info  │
└──────────────────────────────────────┘`,
        },
        { type: "h", text: "3. Icônes + labels" },
        { type: "list", items: [
          "Icônes 24×24 px",
          "Style cohérent",
          "Avec ou sans texte (labels)",
          "Toujours lisible",
          "Éviter les icônes ambiguës",
        ]},
        { type: "h", text: "4. Couleurs de navigation" },
        { type: "list", items: ["2 couleurs max", "Actif", "Inactif"] },
        { type: "h", text: "5. Menu hamburger (navigation secondaire)" },
        { type: "list", items: [
          "En haut de l'écran",
          "Accès au menu complet",
          "Pages secondaires (settings, FAQ…)",
          "Complète la bottom navigation",
          "Pas pour les actions principales",
        ]},
        {
          type: "diagram",
          content: `MENU HAMBURGER — DESKTOP vs MOBILE
══════════════════════════════════════════════════════

DESKTOP (navigation horizontale)
┌──────────────────────────────────────────────────┐
│ PREMIER ÉLÉMENT │ SECOND ÉLÉMENT │ TROISIÈME ÉLÉMENT│
├──────────────────────────────────────────────────┤
│                    CONTENU                       │
└──────────────────────────────────────────────────┘

MOBILE (icône hamburger → menu déroulant vertical)
┌────────────┐      ┌────────────┐
│     ≡      │  →   │ PREMIER    │
├────────────┤      │ SECOND     │
│            │      │ TROISIÈME  │
│  CONTENU   │      ├────────────┤
│            │      │  CONTENU   │
└────────────┘      └────────────┘`,
        },
      ],
    },
    {
      id: "maq-28-types-maquettes",
      title: "28. Types de maquettes",
      blocks: [
        {
          type: "diagram",
          content: `LES 3 NIVEAUX DE MAQUETTES
══════════════════════════════════════════════════════════════════

   ZONING              WIREFRAME            PROTOTYPE
  ══════════          ══════════           ══════════
  ┌────────┐          ┌────────┐           ┌────────┐
  │ HEADER │          │[Logo] 🔍│           │[Logo✓] │
  ├────────┤          ├────────┤           ├────────┤
  │        │          │ ██████ │           │ IMAGE  │
  │ BODY   │          │ ▓▓▓▓▓▓ │           │ RÉELLE │
  │        │          │[BTN]   │           │[CTA ●] │
  ├────────┤          ├────────┤           ├────────┤
  │ FOOTER │          │███ ███ │           │ ■ ■ ■  │
  └────────┘          └────────┘           └────────┘

  Blocs simples       Éléments UI          Design final
  Noir/blanc/gris     niveaux de gris      Couleurs, typo,
  Aucun détail        Faux texte           icônes réelles
  Structure seule     Hiérarchie           Interactions`,
        },
      ],
    },
    {
      id: "maq-29-tailles-ecran",
      title: "29. Tailles d'écran pour la maquette (responsive)",
      blocks: [
        { type: "table", headers: ["Type d'écran", "Largeur", "Usage", "Priorité"], rows: [
          ["Mobile portrait", "320 à 480 px", "Smartphones en vertical", "Simplicité, contenu empilé"],
          ["Mobile paysage", "480 à 720 px", "Smartphone en horizontal", "Plus d'espace horizontal"],
          ["Tablette portrait", "720 à 1024 px", "Tablettes verticales", "Interface intermédiaire"],
          ["Tablette paysage", "1024 à 1280 px", "Tablettes horizontales", "Proche d'un petit ordi"],
          ["Écran ordinateur moyen", "1280 à 1600 px", "Laptop / desktop standard", "Layout complet (grilles, sidebar)"],
          ["Grand écran", "+1600 px", "Grands écrans larges", "Espaces aérés, contenu centré"],
        ]},
        {
          type: "diagram",
          content: `BREAKPOINTS RESPONSIVE
══════════════════════════════════════════════════════════════════

   320px      480px       768px      1024px    1280px    1440px+
     │           │           │           │          │         │
     ▼           ▼           ▼           ▼          ▼         ▼
  [Mobile]  [Mobile      [Tablet    [Tablet    [Desktop  [Grand
  Portrait]  Paysage]    Portrait]  Paysage]   Standard]  Écran]

  4 cols     4-6 cols    8 cols     8-12 cols  12 cols   12 cols+`,
        },
      ],
    },
    {
      id: "maq-30-methode-responsive",
      title: "30. Méthode Responsive (UI/UX)",
      blocks: [
        { type: "h", text: "Grille & structure" },
        { type: "list", items: [
          "Utiliser un layout grid",
          "Respecter un système de colonnes : 4 (mobile), 8 (tablet), 12 (desktop)",
        ]},
        { type: "h", text: "Contenu" },
        { type: "list", items: ["Adapter le contenu à chaque écran", "Prioriser l'information (mobile first)"] },
        { type: "h", text: "Hiérarchie visuelle" },
        { type: "list", items: ["Espacements cohérents", "Typographie claire", "Contrastes lisibles"] },
        { type: "h", text: "Accessibilité" },
        { type: "list", items: ["Respect des normes (ex : WCAG)", "Contraste suffisant", "Taille de texte lisible"] },
        { type: "h", text: "Breakpoints (tailles d'écran)" },
        { type: "table", headers: ["Device", "Largeur"], rows: [
          ["Desktop", "1440 px"],
          ["Tablet", "768 px"],
          ["Mobile", "375 px"],
        ]},
        { type: "h", text: "Typographie & couleurs" },
        { type: "p", text: "Couleurs :" },
        { type: "list", items: ["3 à 5 couleurs principales", "Primary", "Secondary", "Background", "Accent"] },
        { type: "p", text: "Typographie :" },
        { type: "list", items: ["2 à 3 polices maximum", "Taille minimum : 16px pour le body text"] },
        { type: "h", text: "Prototype & tests" },
        { type: "list", items: ["Créer un prototype interactif", "Tester : navigation, ergonomie, compréhension"] },
        { type: "h", text: "Documentation" },
        { type: "list", items: ["Créer un guide de design (Design System)", "Inclure : composants, règles d'usage, styles, comportements"] },
      ],
    },
    {
      id: "maq-31-niveaux-detail",
      title: "31. Niveaux de détail d'une maquette",
      blocks: [
        { type: "h", text: "Zoning (structure simple)" },
        { type: "p", text: "Définir l'organisation globale d'une interface sans détails." },
        { type: "p", text: "Caractéristiques :" },
        { type: "list", items: [
          "Formes : blocs simples (rectangles)",
          'Texte : labels basiques ("Header", "Footer", "Content")',
          "Couleurs : noir / blanc / gris",
          "Détails graphiques : aucun",
        ]},
        {
          type: "diagram",
          content: `ZONING — EXEMPLE
══════════════════════════════════
┌──────────────────────────────┐
│          HEADER              │
├──────────────────────────────┤
│                              │
│           HERO               │
│                              │
├─────────────┬────────────────┤
│   CONTENT   │   SIDEBAR      │
│             │                │
│             │                │
├──────────────────────────────┤
│          FOOTER              │
└──────────────────────────────┘`,
        },
        { type: "h", text: "Wireframe (maquette fonctionnelle)" },
        { type: "p", text: "Définir la structure détaillée + contenu + hiérarchie." },
        { type: "p", text: "Caractéristiques :" },
        { type: "list", items: [
          "Couleurs : niveaux de gris uniquement",
          "Éléments : boutons, images (placeholders), icônes",
          "Texte : faux texte (lignes / blocs) ou contenu simplifié",
        ]},
        { type: "p", text: "Hiérarchie visuelle :" },
        { type: "list", items: ["Titres plus foncés", "CTA visibles", "Différences de tailles et graisses"] },
        { type: "p", text: "Layout :" },
        { type: "list", items: ["Position", "Tailles", "Alignements"] },
        { type: "note", variant: "info", text: "Proche du rendu final (sans design)" },
        { type: "p", text: "Annotations : Notes explicatives : interactions, comportements attendus" },
        { type: "p", text: "Typographie : Hiérarchie (H1, H2, body…), Sans choix graphique final" },
        { type: "p", text: "Espacements : Marges, Espaces entre éléments" },
        { type: "p", text: "Responsive : Adaptation sur plusieurs écrans" },
        {
          type: "diagram",
          content: `WIREFRAME — EXEMPLE
══════════════════════════════════
┌──────────────────────────────────┐
│ [Logo]  ─────────  [🔍][👤][🛒]   │
├──────────────────────────────────┤
│  ████████████████████████████    │  ← H1 (titre fort)
│  ██████████████████████          │  ← description
│  ░░░░░░░░░     [  CTA  ]         │  ← prix + bouton
├──────────────────────────────────┤
│ ┌────────┐ ┌────────┐ ┌────────┐ │
│ │  ░░░░  │ │  ░░░░  │ │  ░░░░  │ │  ← placeholders images
│ │ ██████ │ │ ██████ │ │ ██████ │ │  ← titres cards
│ │ ██████ │ │ ██████ │ │ ██████ │ │  ← description
│ │ [CTA]  │ │ [CTA]  │ │ [CTA]  │ │  ← boutons CTA
│ └────────┘ └────────┘ └────────┘ │
├──────────────────────────────────┤
│ ──── │ ──── │ ──── │ ──────      │  ← footer liens
└──────────────────────────────────┘`,
        },
        { type: "h", text: "Prototype (maquette finale interactive)" },
        { type: "p", text: "Simuler une expérience utilisateur réelle." },
        { type: "p", text: "Caractéristiques :" },
        { type: "list", items: [
          "Design final : couleurs définitives, typographies finales, icônes réelles",
          "Structure : basée sur le wireframe validé",
        ]},
        { type: "p", text: "Navigation : Boutons, Liens, Menus déroulants" },
        { type: "p", text: "Animations : Transitions, Changements d'état, Micro-interactions" },
        { type: "p", text: "Tests : Desktop, Tablet, Mobile" },
        {
          type: "diagram",
          content: `COMPARATIF DES 3 NIVEAUX
══════════════════════════════════════════════════════════════════
                ZONING         WIREFRAME        PROTOTYPE
Couleurs        N/B/Gris       Niveaux de gris  Couleurs finales
Texte           Labels seuls   Faux texte       Vrai contenu
Détails         Aucun          Éléments UI      Design complet
Interaction     Non            Non              Oui (cliquable)
Objectif        Organiser      Structurer       Valider l'UX`,
        },
      ],
    },
  ],
};
