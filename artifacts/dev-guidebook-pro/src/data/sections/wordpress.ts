import type { Section } from "../types";
import { laConsoleWordpress } from "./laConsoleWordpress";

export const wordpress: Section = {
  id: "wordpress",
  title: "WordPress",
  icon: "Feather",
  tags: ["php"],
  subsections: [
    // ── INSTALLATION ─────────────────────────────────────────────────────
    {
      id: "wp-installation-localwp",
      title: "Installation en local (avec LocalWP)",
      blocks: [
        { type: "list", items: ["Télécharger et installer LocalWP"] },
      ],
    },
    {
      id: "wp-installation-wamp",
      title: "Installation avec WampServer (Windows)",
      blocks: [
        { type: "h", text: "1. Préparation" },
        { type: "list", items: [
          "Télécharger WordPress",
          "Décompresser le fichier",
          "Renommer le dossier (ex : monprojet)",
          "Copier dans : C:\\wamp\\www ou C:\\wamp64\\www",
          "Lancer WAMP → Icône verte dans la barre des tâches",
        ]},
        { type: "h", text: "2. Accès au projet" },
        { type: "list", items: [
          "Aller sur : http://localhost/",
          'Cliquer sur "Vos projets"',
          "Sélectionner mon projet",
          '"Vos outils" → phpMyAdmin (gestion base de données)',
        ]},
        { type: "h", text: "3. Créer la base de données" },
        { type: "list", items: [
          "Aller sur : http://localhost/phpmyadmin",
          "Identifiants : utilisateur root, mot de passe (vide)",
          "Créer / Nom base de données",
        ]},
        { type: "h", text: "Installation WordPress" },
        { type: "list", items: [
          "1. Choisir la langue",
          '2. Cliquer sur "C\'est parti !"',
          "3. Remplir : Nom de la base, Utilisateur : root, Mot de passe : (vide), Hôte : localhost, Préfixe : wp_ (ou autre)",
          '4. Cliquer sur "Envoyer" puis lancer l\'installation',
        ]},
        { type: "p", text: "Configuration :" },
        { type: "list", items: ["Nom du site", "Identifiant admin", "Mot de passe sécurisé", "Email admin", "Option SEO (indexation)"] },
        { type: "p", text: "Connexion :" },
        { type: "list", items: ["Site : http://localhost/monprojet", "Admin : http://localhost/monprojet/wp-admin"] },
      ],
    },
    {
      id: "wp-installation-mamp",
      title: "Installation avec MAMP (Mac)",
      blocks: [
        { type: "h", text: "Préparation" },
        { type: "list", items: [
          "1. Télécharger WordPress",
          "2. Ouvrir : Applications → MAMP",
          "3. Aller dans le dossier : htdocs",
          "4. Supprimer le fichier par défaut",
          "5. Décompresser WordPress dans htdocs",
        ]},
        { type: "h", text: "Lancer le serveur" },
        { type: "list", items: ["Cliquer sur Start", "Aller sur : http://localhost:8888/", "Cliquer sur ton dossier projet"] },
        { type: "h", text: "Créer la base de données" },
        { type: "list", items: [
          "Aller sur : http://localhost:8888/phpmyadmin",
          "Onglet : Base de données",
          "Créer une base",
        ]},
        { type: "h", text: "Installation" },
        { type: "list", items: [
          "1. Lancer le setup",
          "2. Remplir : Nom BDD, Utilisateur root, Mot de passe root, Hôte localhost, Préfixe wp_",
          "3. Cliquer sur Envoyer → Installer",
        ]},
        { type: "p", text: "Configuration :" },
        { type: "list", items: ["Nom du site", "Identifiant admin", "Mot de passe sécurisé", "Email admin", "Option indexation SEO"] },
        { type: "p", text: "Connexion :" },
        { type: "list", items: ["Site : http://localhost:8888/monprojet", "Admin : http://localhost:8888/monprojet/wp-admin"] },
      ],
    },

    // ── PLUGINS ───────────────────────────────────────────────────────────
    {
      id: "wp-choisir-plugin",
      title: "Choisir un plugin",
      blocks: [
        { type: "h", text: "1. Type de besoin" },
        { type: "list", items: [
          "Formulaire (contact, inscription…)",
          "Réservation",
          "SEO",
          "Sécurité",
          "Galerie / médias",
          "E-commerce",
        ]},
        { type: "h", text: "2. Modèle économique" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Gratuit", "Aucun coût"],
          ["Freemium", "Gratuit + options payantes"],
          ["Payant (premium)", "Licence complète"],
        ]},
        { type: "h", text: "3. Qualité du plugin" },
        { type: "list", items: [
          "Note globale (avis utilisateurs)",
          "Dernière mise à jour (important)",
          "Nombre d'installations actives",
          "Compatibilité avec la version WordPress",
          "Documentation et support",
          "Performance (léger ou lourd)",
        ]},
      ],
    },
    {
      id: "wp-types-plugins",
      title: "Types de plugins",
      blocks: [
        { type: "table", headers: ["#", "Type", "Description"], rows: [
          ["1", "Sécurité", "Malwares, brute force, firewall, scan"],
          ["2", "SEO", "Mots-clés, positionnement Google"],
          ["3", "Performance / Cache", "Accélération, mise en cache, CSS/JS/images"],
          ["4", "Sauvegarde & migration", "Backup, restauration, migration serveur"],
          ["5", "Formulaires", "Contact, devis, inscription, collecte données"],
          ["6", "E-commerce", "Boutique, produits, paiement en ligne"],
          ["7", "Traduction / Multilingue", "Plusieurs langues (ex : Polylang)"],
          ["8", "Constructeurs", "Page builders (ex : Elementor), champs personnalisés"],
          ["9", "Navigation / UX", "Menus, breadcrumbs, expérience utilisateur"],
          ["10", "Statistiques / Analytics", "Trafic, comportement, visites"],
          ["11", "Notifications / Alertes", "Emails auto, alertes back-office"],
          ["12", "Gestion utilisateurs", "Rôles, profils, accès"],
          ["13", "Restriction contenu", "Contenu privé, accès payant, limitation par rôle"],
          ["14", "LMS", "Formation en ligne, cours, quiz, certification"],
          ["15", "Facturation / Devis", "Génération factures, devis automatiques"],
          ["16", "Conversion / A-B Testing", "Optimisation ventes, tests de pages"],
          ["17", "Marketplace / Produits digitaux", "Vente fichiers, produits téléchargeables"],
          ["18", "RGPD / conformité", "Cookies, consentement, lois sur les données"],
          ["19", "IA & automatisation", "Génération contenu, automatisation tâches"],
          ["20", "Agenda / événements", "Réservations, calendrier d'événements"],
          ["21", "Mobile", "PWA, optimisation mobile"],
          ["22", "API / intégrations", "API REST, connexion services externes"],
          ["23", "Outils de calcul", "Calculatrices, devis dynamiques"],
          ["24", "Import / Export", "Importation données, export massif"],
          ["25", "Recherche avancée", "Filtres, recherche personnalisée"],
        ]},
      ],
    },
    {
      id: "wp-yoast-seo",
      title: "Yoast SEO",
      blocks: [
        { type: "h", text: "Réglages généraux" },
        { type: "p", text: "Menu : Yoast SEO > Réglages généraux" },
        { type: "p", text: "Permet de :" },
        { type: "list", items: ["Configurer les bases du SEO", "Accéder aux différentes options du plugin"] },
        { type: "h", text: "Fonctionnalités" },
        { type: "p", text: "Menu : Yoast SEO > Réglages généraux > Fonctionnalités" },
        { type: "p", text: "Activer / désactiver :" },
        { type: "list", items: ["Analyse SEO", "Lisibilité", "Suggestions internes", "Plan de site XML"] },
        { type: "h", text: "Intégrations" },
        { type: "p", text: "Menu : Yoast SEO > Réglages généraux > Intégrations" },
        { type: "p", text: "Permet de connecter Yoast avec : Google, Réseaux sociaux, Autres outils SEO" },
        { type: "h", text: "Outils pour webmasters" },
        { type: "p", text: "Menu : Yoast SEO > Réglages généraux > Outils pour webmasters" },
        { type: "p", text: "Sert à vérifier ton site avec : Google Search Console, Bing, autres moteurs" },
        { type: "h", text: "Réglages SEO (optimisation)" },
        { type: "p", text: "Menu : Yoast SEO > Réglages SEO" },
        { type: "p", text: "Permet de configurer :" },
        { type: "list", items: [
          "Titres des pages",
          "Méta descriptions",
          "Séparateur de titres",
          "Page d'accueil",
          "Indexation (visible ou non sur Google)",
        ]},
        { type: "h", text: "Knowledge Graph & Schema.org" },
        { type: "p", text: "Définir :" },
        { type: "list", items: ["Type de site : entreprise ou personne", "Nom du site", "Logo"] },
        { type: "p", text: "Sert à afficher des infos enrichies sur Google (ex : encadré à droite des résultats)" },
        { type: "h", text: "Optimiser un article avec Yoast" },
        { type: "p", text: "Dans chaque article :" },
        { type: "list", items: [
          "Ajouter : Mot-clé principal",
          "Vérifier : Score SEO (rouge / orange / vert) et Lisibilité",
          "Remplir : Titre SEO et Méta description",
        ]},
      ],
    },
    {
      id: "wp-duplicator",
      title: "Duplicator — Migrer un site WordPress",
      blocks: [
        {
          type: "diagram",
          content: `FLUX MIGRATION DUPLICATOR

1. Installer Duplicator
         │
2. Créer un package (sauvegarde)
   → installer.php + archive .zip
         │
3. Créer BDD chez l'hébergeur
         │
4. Envoyer fichiers via FileZilla → public_html/
   ⚠️ NE PAS dézipper
         │
5. Lancer : https://ton-site.com/installer.php
         │
6. Configurer (BDD, host, user, password)
         │
7. Nettoyage final (supprimer installer.php + .zip)
         │
8. Connexion au site → Admin Login`,
        },
        { type: "h", text: "1. Installer Duplicator" },
        { type: "list", items: [
          "Aller dans Extensions → Ajouter",
          "Rechercher Duplicator",
          "Cliquer sur Installer puis Activer",
        ]},
        { type: "h", text: "2. Créer un package (sauvegarde du site)" },
        { type: "list", items: [
          "Aller dans Duplicator → Packages",
          'Cliquer sur "Créer un package"',
          "Donner un nom au package",
          'Cliquer sur "Suivant" (scan automatique)',
          "Vérifier les résultats du scan",
          'Cliquer sur "Créer"',
          '"Installeur" > "Archive"',
        ]},
        { type: "p", text: "Tu obtiens 2 fichiers :" },
        { type: "list", items: ["installer.php", "une archive .zip (backup du site)"] },
        { type: "h", text: "3. Créer la base de données chez l'hébergeur" },
        { type: "list", items: [
          "1. Ouvrir l'assistant MySQL",
          "2. Créer une base de données",
          "3. Créer un utilisateur + mot de passe",
          "4. Donner tous les privilèges",
          "5. Valider",
        ]},
        { type: "h", text: "4. Envoyer les fichiers sur le serveur" },
        { type: "p", text: "Avec FileZilla :" },
        { type: "list", items: [
          "1. Se connecter au serveur (port 21)",
          "2. Aller dans public_html/",
          "3. Envoyer : installer.php et fichier .zip du site",
        ]},
        { type: "note", variant: "warning", text: "Important : NE PAS dézipper" },
        { type: "h", text: "5. Lancer l'installation" },
        { type: "p", text: "Dans ton navigateur : https://ton-site.com/installer.php" },
        { type: "h", text: "6. Configuration Duplicator" },
        { type: "p", text: "Dans l'assistant :" },
        { type: "list", items: [
          "Action : Full install / Empty database",
          "Host : localhost",
          "Database : nom de la BDD",
          "User : utilisateur BDD",
          "Password : mot de passe",
          "Cliquer sur Next",
        ]},
        { type: "h", text: "7. Nettoyage final" },
        { type: "p", text: "Après installation, supprimer :" },
        { type: "list", items: ["installer.php", "fichier .zip"] },
        { type: "h", text: "8. Connexion au site" },
        { type: "list", items: ["Cliquer sur Admin Login", "Se connecter au WordPress"] },
      ],
    },
    {
      id: "wp-woocommerce",
      title: "WooCommerce (e-commerce)",
      blocks: [
        { type: "h", text: "Réglages" },
        { type: "p", text: "WooCommerce > Settings — Configurer : produits, paiement, livraison" },
        { type: "h", text: "Ajouter produit" },
        { type: "p", text: "Produits > Ajouter → Remplir infos → Publier" },
        { type: "h", text: "Réglages produits" },
        { type: "h", text: "1. Produits numériques / téléchargeables" },
        { type: "list", items: [
          "Définir un produit comme téléchargeable",
          "Paramètres possibles : méthode de téléchargement, nom du fichier, limite de téléchargement, date d'expiration",
          "Permet la vente de produits sans expédition",
        ]},
        { type: "h", text: "2. Réglages d'inventaire (stock)" },
        { type: "list", items: [
          "Gestion automatique des stocks",
          "Fonctionnalités : suivi du stock, notifications rupture, activation/désactivation, masquage produits indisponibles",
        ]},
        { type: "h", text: "3. Page boutique (shop)" },
        { type: "list", items: [
          "Définir la page principale des produits (archive boutique)",
          "Paramètres : affichage, organisation (grille/liste), comportement du panier, tri par défaut",
        ]},
        { type: "h", text: "4. Mesures et expédition" },
        { type: "list", items: [
          "Définir : poids des produits, dimensions (L x l x H)",
          "Utilisé pour : calcul des frais de livraison, logistique transport",
        ]},
        { type: "h", text: "5. Avis produits" },
        { type: "list", items: [
          "Activation / désactivation des avis clients",
          "Gestion des évaluations (étoiles)",
          "Paramètres : avis vérifiés, affichage public des commentaires",
        ]},
        { type: "h", text: "Réglages généraux" },
        { type: "h", text: "1. Adresse du magasin" },
        { type: "list", items: ["Adresse physique de l'entreprise", "Utilisée pour : taxes, expédition, localisation du vendeur"] },
        { type: "h", text: "2. Options générales" },
        { type: "list", items: [
          "Pays de vente",
          "Pays de livraison",
          "Activation des taxes",
          "Types de livraison (domicile, point relais…)",
          "Codes promo / coupons",
          "Localisation du client",
        ]},
        { type: "h", text: "3. Options de devises" },
        { type: "list", items: [
          "Devise affichée (EUR, USD, etc.)",
          "Position de la devise : avant ou après le prix",
          "Séparateurs : milliers, décimales",
          "Format d'affichage des prix",
        ]},
        { type: "h", text: "Critères WooCommerce" },
        { type: "p", text: "WooCommerce est une extension WordPress permettant de créer un site e-commerce. Elle transforme un site WordPress en boutique en ligne." },
        { type: "p", text: "Avantages :" },
        { type: "list", items: [
          "Gratuit (extension de base)",
          "Flexible et personnalisable",
          "Bon niveau de performance SEO",
          "Grande communauté active",
          "Propriété complète des données (hébergement indépendant)",
          "Polyvalent (adapté à différents types de boutiques)",
          "Compatible avec de nombreux thèmes WordPress",
          "Intégration facile des solutions de paiement",
        ]},
        { type: "p", text: "Inconvénients :" },
        { type: "list", items: [
          "Coût des extensions payantes",
          "Complexité technique pour les débutants",
          "Maintenance régulière nécessaire",
          "Performances variables selon l'optimisation du site",
        ]},
        { type: "h", text: "Modules de paiement (banque en ligne)" },
        { type: "p", text: "Les modules de paiement permettent de connecter une boutique WooCommerce à des solutions bancaires ou de paiement en ligne afin de gérer les transactions de manière sécurisée." },
        { type: "p", text: "Types de solutions de paiement :" },
        { type: "list", items: [
          "Solutions bancaires propriétaires (contrat avec une banque ou un prestataire)",
          "Plugins de paiement compatibles avec WooCommerce",
          "Modules tiers payants (passerelles entre WooCommerce et plateformes bancaires)",
        ]},
        { type: "p", text: "Sécurité et conformité :" },
        { type: "list", items: [
          "Certificat SSL obligatoire (sécurisation des données)",
          "Conformité PCI-DSS (norme de sécurité des paiements)",
          "Vérification de la stabilité des modules",
          "Maintenance et support des extensions utilisées",
        ]},
      ],
    },
    {
      id: "wp-wpforms",
      title: "WPForms (Formulaire de contact)",
      blocks: [
        { type: "h", text: "Créer un formulaire" },
        { type: "list", items: [
          '"Add New Form"',
          "Choisir un modèle",
          "Modifier les champs",
          '"Preview"',
          "Save / Embed",
        ]},
        { type: "h", text: "Ajouter dans une page" },
        { type: "list", items: [
          "Pages > Ajouter",
          'Bouton "+"',
          "Widget WPForms",
          "Sélectionner le formulaire",
          '"Enregistrer"',
        ]},
      ],
    },
    {
      id: "wp-elementor",
      title: "Elementor (constructeur pages)",
      blocks: [
        {
          type: "diagram",
          content: `FLUX ELEMENTOR
┌──────────────────────────────────────────────┐
│ 1. Créer page  → 2. Ouvrir Elementor         │
│ 3. + section   → 4. Choisir structure        │
│ 5. Ajouter widgets → 6. Modifier contenu     │
│ 7. Prévisualiser   → 8. Publier              │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Créer la page" },
        { type: "list", items: ["Menu : Pages → Ajouter", "Entrer un titre", "Cliquer sur Publier (ou brouillon)"] },
        { type: "h", text: "2. Ouvrir Elementor" },
        { type: "list", items: ['Cliquer sur "Edit with Elementor"'] },
        { type: "h", text: "3. Construire la page" },
        { type: "list", items: [
          'Cliquer sur "+" pour ajouter une section',
          "Choisir une structure (1 colonne, 2 colonnes…)",
          "Ajouter des widgets : texte, image, bouton",
        ]},
        { type: "h", text: "4. Modifier le contenu" },
        { type: "list", items: ["Cliquer sur un élément", "Modifier : texte, style, couleurs, marges"] },
        { type: "h", text: "5. Prévisualiser" },
        { type: "list", items: ['Cliquer sur "View page" ou aperçu'] },
        { type: "h", text: "6. Publier" },
        { type: "list", items: ["Cliquer sur Publier / Mettre à jour"] },
      ],
    },
    {
      id: "wp-installer-theme",
      title: "Installer un thème WordPress",
      blocks: [
        { type: "h", text: "Installation manuelle (thème premium ou externe)" },
        { type: "p", text: "Utilisé quand tu télécharges un thème depuis un site externe" },
        { type: "p", text: "Étapes :" },
        { type: "list", items: [
          "1. Aller dans : Apparence > Thèmes > Ajouter",
          '2. Cliquer sur "Téléverser un thème"',
          '3. Cliquer sur "Choisir un fichier" → sélectionner l\'archive .zip du thème',
          "4. Cliquer sur Installer puis : Aperçu en direct (voir avant) ou Activer (utiliser le thème)",
        ]},
        { type: "note", variant: "warning", text: "Important : Certains thèmes demandent d'installer des plugins recommandés" },
        { type: "h", text: "Installation via FTP (thème lourd)" },
        { type: "p", text: "Utilisé si : le fichier est trop gros ou erreur upload WordPress" },
        { type: "p", text: "Étapes :" },
        { type: "list", items: [
          "1. Télécharger et extraire le thème (.zip)",
          "2. Utiliser un client FTP (ex : FileZilla)",
          "3. Se connecter à mon serveur",
          "4. Aller dans le dossier : /public_html/wp-content/themes/",
          "5. Copier le dossier du thème dedans",
          "6. Aller dans WordPress : Apparence > Thèmes → cliquer sur Activer",
        ]},
      ],
    },

    // ── DÉPLOIEMENT ET CONFIGURATION ─────────────────────────────────────
    {
      id: "wp-modifier-bdd-connexion",
      title: "Modifier la base de données WordPress (connexion en ligne)",
      blocks: [
        { type: "p", text: "Quand tu mets ton site en ligne, tu dois remplacer les infos de la BDD locale par celles de l'hébergeur dans le fichier wp-config.php." },
        { type: "p", text: "Fichier à modifier : wp-config.php (à la racine de WordPress)" },
        { type: "p", text: "Configuration de la base de données — lignes à modifier :" },
        { type: "code", filename: "wp-config.php", language: "php", code: `/** Nom de la base de données */
define('DB_NAME', 'nom_de_la_bdd');

/** Nom d'utilisateur */
define('DB_USER', 'utilisateur_bdd');

/** Mot de passe */
define('DB_PASSWORD', 'mot_de_passe');

/** Adresse du serveur */
define('DB_HOST', 'localhost');` },
        { type: "p", text: "En local (WAMP) :" },
        { type: "code", filename: "wp-config.php", language: "php", code: `define('DB_NAME', 'local');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', 'localhost');` },
        { type: "p", text: "En ligne (hébergeur) :" },
        { type: "code", filename: "wp-config.php", language: "php", code: `define('DB_NAME', 'nom_bdd_hebergeur');
define('DB_USER', 'user_hebergeur');
define('DB_PASSWORD', 'mdp_hebergeur');
define('DB_HOST', 'adresse_serveur');` },
        { type: "note", variant: "info", text: "Où trouver ces infos ? Dans le mail de ton hébergeur, ou dans le panel d'administration (cPanel / OVH / etc.), parfois dans un fichier de configuration fourni à la racine du site." },
        { type: "p", text: "Le fichier wp-config.php sert aussi à : gérer le debug, définir la langue, configurer la sécurité, activer le mode maintenance." },
      ],
    },
    {
      id: "wp-modifier-sql-avant-import",
      title: "Modifier le fichier SQL avant import (migration)",
      blocks: [
        { type: "p", text: "Avant d'importer ta base de données sur un serveur en ligne, tu dois souvent remplacer les URLs locales dans le fichier .sql." },
        { type: "p", text: "Rechercher les anciennes URLs : dans ton fichier SQL, fais une recherche de http://localhost:10084 ou http://localhost" },
        { type: "p", text: "Modifier la table wp_options : Avant (URLs locales) :" },
        { type: "code", filename: "sql", language: "sql", code: `INSERT INTO wp_options (option_id, option_name, option_value, autoload) VALUES
(1, 'siteurl', 'http://localhost:10084', 'yes'),
(2, 'home', 'http://localhost:10084', 'yes');` },
        { type: "p", text: "Après (remplacer par nom de domaine réel) :" },
        { type: "code", filename: "sql", language: "sql", code: `INSERT INTO wp_options (option_id, option_name, option_value, autoload) VALUES
(1, 'siteurl', 'https://monsite.com', 'yes'),
(2, 'home', 'https://monsite.com', 'yes');` },
      ],
    },
    {
      id: "wp-importer-bdd-hebergeur",
      title: "Importer une base de données chez l'hébergeur (phpMyAdmin)",
      blocks: [
        { type: "list", items: [
          "1. Ouvrir phpMyAdmin",
          "2. Dans le menu de gauche → Sélectionner la base de données cible",
          '3. Cliquer sur l\'onglet "Importer"',
          '4. Cliquer sur "Choisir un fichier" → Sélectionner ton fichier .sql',
          "5. Laisser les paramètres par défaut → Ne rien modifier",
          '6. Cliquer sur "Exécuter" / "Go"',
        ]},
        { type: "p", text: "Important après import :" },
        { type: "list", items: ["Tester la connexion du site", "Vérifier le fichier wp-config.php", "Vérifier les URLs (très important)"] },
      ],
    },
    {
      id: "wp-probleme-classique-urls",
      title: "Problème classique WordPress (URLs absolues)",
      blocks: [
        { type: "p", text: "WordPress enregistre des URLs absolues : images, liens internes, médias, menus" },
        { type: "note", variant: "warning", text: "Résultat : après import, le site peut encore pointer vers localhost" },
        { type: "h", text: "Correction des URLs" },
        { type: "p", text: "Installer un outil : Dans WordPress → Extensions → Installer Better Search Replace → Activer" },
        { type: "p", text: "Lancer le remplacement : Outils → Better Search Replace" },
        { type: "list", items: [
          "Search for : http://localhost",
          "Replace with : https://ton-site.com",
          "Sélectionner toutes les tables",
          'Cocher "dry run" (test) d\'abord',
          "Lancer",
        ]},
      ],
    },
    {
      id: "wp-creer-site-localwp",
      title: "Créer un site (LocalWP)",
      blocks: [
        {
          type: "diagram",
          content: `FLUX LOCALWP
"+" → "Create a new site" → "Continue"
Nom du projet
Configuration → "Preferred"
Créer identifiants WordPress
"Add site"`,
        },
        { type: "p", text: "Lancer :" },
        { type: "list", items: ['"Overview" → "Start site" → "WP Admin" → connexion'] },
      ],
    },

    // ── RÉGLAGES GÉNÉRAUX ─────────────────────────────────────────────────
    {
      id: "wp-reglages-generaux-menu",
      title: "Réglages généraux",
      blocks: [
        { type: "p", text: "Menu : Réglages → Général" },
        { type: "list", items: [
          "Langue du site",
          "Titre du site",
          "Slogan",
          "Email",
          "Format date (Y-m-d)",
          "Format heure (H:i)",
        ]},
      ],
    },
    {
      id: "wp-parametres-ecriture",
      title: "Paramètres d'écriture",
      blocks: [
        { type: "h", text: "Catégories d'articles" },
        { type: "list", items: [
          "Menu : Articles > Catégories",
          "Saisir le nom de la catégorie",
          'Cliquer sur "Ajouter une catégorie"',
        ]},
        { type: "h", text: "Catégorie par défaut" },
        { type: "list", items: [
          "Menu : Réglages > Écriture",
          "Choisir Catégorie par défaut des articles",
          'Cliquer sur "Enregistrer les modifications"',
        ]},
      ],
    },
    {
      id: "wp-articles",
      title: "Articles",
      blocks: [
        { type: "h", text: "Ajouter un article" },
        { type: "list", items: [
          "Menu : Articles > Ajouter",
          "Remplir : Titre, Contenu",
          "Choisir une catégorie (à droite)",
          "Cliquer sur : Publier ou Brouillon",
        ]},
        { type: "h", text: "Ajouter une image à un article" },
        { type: "list", items: [
          'Cliquer sur "Définir l\'image mise en avant"',
          'Upload → "Téléverser un fichier" ou choisir dans la Médiathèque',
          'Cliquer sur "Définir l\'image"',
        ]},
        { type: "note", variant: "info", text: 'Réutilisation : Bouton "+" → Média → Image → Médiathèque' },
      ],
    },
    {
      id: "wp-themes",
      title: "Thèmes",
      blocks: [
        { type: "list", items: [
          "Menu : Apparence > Thèmes",
          "Cliquer sur Ajouter",
          "Rechercher un thème",
          "Installer → Activer",
        ]},
        { type: "h", text: "Personnalisation" },
        { type: "list", items: ["Menu : Apparence > Personnaliser", "Modifier : couleurs, logo, mise en page"] },
      ],
    },
    {
      id: "wp-menus",
      title: "Menus",
      blocks: [
        { type: "h", text: "Créer un menu" },
        { type: "list", items: ["Apparence > Thème", "Donner un nom", "Cliquer sur Créer le menu"] },
        { type: "h", text: "Ajouter des éléments" },
        { type: "list", items: [
          "Apparence > Menus",
          "Pages / Articles / Liens personnalisés",
          "Cliquer sur Ajouter au menu",
        ]},
        { type: "h", text: "Emplacement" },
        { type: "list", items: [
          "Apparence > Menus",
          "Onglet Gérer les emplacements",
          "Choisir (header, footer…)",
          "Enregistrer",
        ]},
      ],
    },
    {
      id: "wp-extensions-plugins-menu",
      title: "Extensions (Plugins)",
      blocks: [
        { type: "list", items: [
          "Menu : Extensions > Ajouter",
          "Rechercher une extension",
          "Installer → Activer",
        ]},
      ],
    },
    {
      id: "wp-pages",
      title: "Pages",
      blocks: [
        { type: "list", items: [
          "Pages → Ajouter",
          "Ajouter un titre",
          "Ajouter du contenu avec des blocs : texte, image, bouton",
          "Publier la page",
        ]},
      ],
    },
    {
      id: "wp-seo-visibilite",
      title: "SEO & visibilité",
      blocks: [
        { type: "h", text: "Autoriser référencement" },
        { type: "list", items: ["Réglages > Lecture", 'Décocher : "Demander aux moteurs de recherche…"'] },
        { type: "h", text: "URL propre" },
        { type: "list", items: [
          'Réglages > Permaliens > "Structure des permaliens"',
          "Choisir : Nom de l'article (recommandé)",
        ]},
        { type: "h", text: "Mises à jour" },
        { type: "list", items: ["Extensions → Mettre à jour", "Apparence > Thèmes → Mettre à jour"] },
      ],
    },
    {
      id: "wp-types-contenu",
      title: "Types de contenu",
      blocks: [
        {
          type: "diagram",
          content: `TYPES DE CONTENU WP
┌─────────────────────┬────────────────────────┐
│ DYNAMIQUE           │ STATIQUE               │
├─────────────────────┼────────────────────────┤
│ Catégorie + Article │ Page > Titre > Contenu │
│ Lié à une catégorie │ Gérer statut publi.    │
│ Gérer le statut     │                        │
└─────────────────────┴────────────────────────┘`,
        },
      ],
    },
    {
      id: "wp-roles-utilisateurs",
      title: "Rôles utilisateurs WordPress",
      blocks: [
        {
          type: "diagram",
          content: `RÔLES UTILISATEURS WORDPRESS
┌──────────────┬────────────────────────────────────────┐
│ ABONNÉ       │ Profil uniquement, lecture seule       │
│ CONTRIBUTEUR │ Rédige brouillons, ne publie pas       │
│ AUTEUR       │ Crée/publie/supprime SES articles      │
│ ÉDITEUR      │ Gère TOUS articles/pages               │
│ ADMIN        │ Accès complet + utilisateurs + réglages│
└──────────────┴────────────────────────────────────────┘`,
        },
        { type: "h", text: "Abonné" },
        { type: "list", items: ["Gère son profil", "Peut seulement lire le contenu", "Aucun droit de création ou modification"] },
        { type: "h", text: "Contributeur" },
        { type: "list", items: ["Rédige et modifie ses brouillons", "Ne peut pas publier", "Ne peut pas téléverser de médias"] },
        { type: "h", text: "Auteur" },
        { type: "list", items: ["Crée, modifie, publie et supprime ses propres articles", "Peut téléverser des médias"] },
        { type: "h", text: "Éditeur" },
        { type: "list", items: [
          "Gère tous les articles et pages",
          "Peut modifier, publier ou supprimer le contenu de tous les utilisateurs",
          "Accès complet au contenu",
        ]},
        { type: "h", text: "Administrateur" },
        { type: "list", items: [
          "Accès complet au site",
          "Gère : utilisateurs, extensions, thèmes, réglages",
          "Rôle le plus puissant",
        ]},
      ],
    },
    {
      id: "wp-visibilite-etats-articles",
      title: "Visibilité et états des articles",
      blocks: [
        { type: "h", text: "Visibilité d'un article" },
        { type: "table", headers: ["Visibilité", "Description"], rows: [
          ["Public", "Accessible à tout le monde, sans restriction"],
          ["Privé", "Visible uniquement par utilisateurs connectés avec droits (éditeur/admin)"],
          ["Protégé par MDP", "L'article est verrouillé, accès avec un mot de passe défini"],
        ]},
        { type: "h", text: "États des articles" },
        { type: "table", headers: ["État", "Description"], rows: [
          ["Publié", "Article en ligne, visible par tous"],
          ["En attente de relecture", "Soumis à validation, utilisé en équipe éditoriale"],
          ["Brouillon", "En cours de rédaction, non visible"],
          ["Brouillon auto", "Sauvegarde automatique pendant la rédaction"],
          ["Programmé", "Publication prévue à une date/heure précise"],
          ["Privé (état)", "Publié mais visible seulement par utilisateurs autorisés"],
          ["Corbeille", "Supprimé, restaurable pendant ~30 jours"],
          ["Révision", "Ancienne version, permet de revenir en arrière"],
        ]},
      ],
    },
    {
      id: "wp-types-publications",
      title: "Types de publications WordPress",
      blocks: [
        { type: "h", text: "Article (Post)" },
        { type: "list", items: [
          "Contenu dynamique",
          "Organisé par : date, catégories, étiquettes (tags)",
          "Utilisé pour : blog, actualités, publications régulières",
        ]},
        { type: "h", text: "Page" },
        { type: "list", items: [
          "Contenu statique",
          "Pas lié à une date",
          "Peut avoir une hiérarchie (pages enfants)",
          "Utilisé pour : Accueil, Contact, À propos",
        ]},
        { type: "h", text: "Média" },
        { type: "list", items: [
          "Images, vidéos, fichiers",
          "Associés aux articles ou pages",
          "Stockés dans la médiathèque avec une URL",
        ]},
        { type: "h", text: "Révisions (historique)" },
        { type: "list", items: [
          "Sauvegardes automatiques internes",
          "Non visibles par les visiteurs",
          "Permettent de restaurer une version précédente",
        ]},
        { type: "h", text: "Menu" },
        { type: "list", items: [
          "Structure de navigation du site",
          "Non modifiable comme un article",
          "Sert à organiser les liens (pages, catégories…)",
        ]},
        { type: "h", text: "Customizer (personnalisation)" },
        { type: "list", items: [
          "Permet de modifier le thème en direct",
          "Prévisualisation avant publication",
          "Permet de tester les changements sans impact immédiat",
        ]},
      ],
    },
    {
      id: "wp-reglages-detail",
      title: "Réglages (détail)",
      blocks: [
        { type: "p", text: "Dans WordPress, les réglages généraux permettent de configurer les informations principales du site." },
        { type: "h", text: "Réglages généraux" },
        { type: "table", headers: ["Paramètre", "Description"], rows: [
          ["Titre du site", "Nom du site"],
          ["Slogan", "Courte description du site"],
          ["Adresse WordPress (URL)", "Emplacement des fichiers WP"],
          ["Adresse du site (URL)", "Adresse visible par les visiteurs"],
          ["Email administrateur", "Email principal du site"],
          ["Inscription", "Autoriser ou non les nouveaux utilisateurs"],
          ["Rôle par défaut", "Rôle attribué aux nouveaux inscrits"],
          ["Langue du site", "Langue de l'interface"],
          ["Fuseau horaire", "Heure locale du site"],
          ["Format date et heure", "Affichage des dates"],
          ["Début de semaine", "Jour de début du calendrier"],
        ]},
        { type: "h", text: "Réglages de lecture" },
        { type: "p", text: "Page d'accueil :" },
        { type: "list", items: ["Derniers articles", "OU page statique"] },
        { type: "p", text: "Nombre d'articles affichés : contrôle la pagination du blog" },
        { type: "p", text: "Flux de syndication (RSS) :" },
        { type: "list", items: ["Nombre d'articles affichés dans le flux", "Contenu du flux : article complet ou extrait uniquement"] },
        { type: "p", text: "Visibilité pour les moteurs de recherche : activer/désactiver l'indexation (robots)" },
        { type: "h", text: "Réglages des commentaires" },
        { type: "list", items: [
          "Autoriser les commentaires sur les nouveaux articles",
          "Fermer les commentaires après X jours",
          "Modération manuelle des commentaires",
          "Liste noire de mots-clés",
          "Notifications par email",
          "Avatar des utilisateurs",
          "Activer pingbacks / trackbacks",
        ]},
        { type: "h", text: "Réglages médias" },
        { type: "list", items: [
          "Taille des images : miniature, moyenne, grande",
          "Recadrage des miniatures",
          "Organisation des fichiers par date",
        ]},
        { type: "h", text: "Réglages des permaliens" },
        { type: "table", headers: ["Structure URL", "Exemple", "Recommandé"], rows: [
          ["Simple", "?p=123", "❌ Non"],
          ["Date + titre", "/2026/04/nom-article", "-"],
          ["Mois + titre", "/2026/04/nom-article", "-"],
          ["Numérique", "/archives/123", "-"],
          ["Nom de l'article", "/nom-article", "✅ Oui"],
          ["Structure personnalisée", "/blog/%postname%/", "Avancé"],
        ]},
      ],
    },
    {
      id: "wp-tableau-de-bord",
      title: "Tableau de bord",
      blocks: [
        { type: "p", text: "Dans WordPress, le tableau de bord est organisé en plusieurs onglets pour gérer tout le site." },
        {
          type: "diagram",
          content: `TABLEAU DE BORD WP
┌──────────────────────────────────────────────────────┐
│ Articles │ Médias │ Pages │ Commentaires             │
├──────────────────────────────────────────────────────┤
│ Apparence │ Extensions │ Utilisateurs │ Outils       │
├──────────────────────────────────────────────────────┤
│                    Réglages                          │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Articles" },
        { type: "list", items: [
          "Créer / modifier / supprimer des articles",
          "Associer une catégorie et des étiquettes (tags)",
          "Organisation par thèmes ou sujets",
        ]},
        { type: "h", text: "Catégories" },
        { type: "list", items: [
          "Créer des catégories pour les articles",
          "Permet de structurer le contenu (Sport, News, Blog…)",
          "Chaque catégorie a un slug (URL propre)",
        ]},
        { type: "h", text: "Médias" },
        { type: "list", items: ["Accès à la médiathèque", "Ajouter : images, vidéos, documents", "Utilisé dans articles et pages"] },
        { type: "h", text: "Pages" },
        { type: "list", items: ["Liste des pages du site", "Ajouter : Contact, À propos", "Contenu statique (non daté)"] },
        { type: "h", text: "Commentaires" },
        { type: "list", items: [
          "Gestion des commentaires des visiteurs",
          "Actions possibles : approuver, supprimer, marquer comme spam",
        ]},
        { type: "h", text: "Apparence" },
        { type: "list", items: [
          "Gestion du design du site",
          "Sous-parties : Thèmes, Personnaliser, Menus, Widgets",
        ]},
        { type: "h", text: "Extensions (Plugins)" },
        { type: "list", items: [
          "Installer des fonctionnalités supplémentaires (SEO, formulaire, sécurité)",
          "Possibilité de modifier / activer / désactiver",
        ]},
        { type: "h", text: "Comptes (Utilisateurs)" },
        { type: "list", items: [
          "Liste des utilisateurs",
          "Ajouter un nouvel utilisateur",
          "Modifier les rôles : abonné, auteur, éditeur, administrateur",
        ]},
        { type: "h", text: "Outils" },
        { type: "list", items: [
          "Importer / exporter du contenu",
          "Maintenance du site",
          "Migration",
          "Suppression de données utilisateur",
        ]},
        { type: "h", text: "Réglages" },
        { type: "list", items: ["Configuration globale du site : titre, URL, langue, permaliens, lecture, commentaires"] },
      ],
    },
    {
      id: "wp-choisir-theme",
      title: "Choisir un thème",
      blocks: [
        { type: "h", text: "1. Type de thème" },
        { type: "list", items: ["Gratuit", "Payant (premium)"] },
        { type: "h", text: "2. Qualité du thème" },
        { type: "list", items: [
          "Note globale",
          "Commentaires utilisateurs",
          "Qualité du code (propre et optimisé)",
          "Support technique",
          "Mises à jour régulières",
          "Temps de chargement (performance)",
          "Fonctionnalités (éviter les thèmes trop lourds)",
        ]},
        { type: "h", text: "3. Bonnes pratiques" },
        { type: "list", items: [
          "Éviter les plugins inutiles (performance)",
          "Vérifier la compatibilité avant installation",
          "Préférer des extensions régulièrement mises à jour",
          "Choisir un thème léger + ajouter des plugins utiles",
        ]},
      ],
    },
    {
      id: "wp-reglages-customizer",
      title: "Réglages du Customizer",
      blocks: [
        { type: "p", text: "Le Customizer permet de modifier l'apparence du site en temps réel." },
        {
          type: "diagram",
          content: `SECTIONS DU CUSTOMIZER
├── 1. Identité du site   → Logo, titre, slogan, favicon
├── 2. Menu               → Navigation, ordre, emplacement
├── 3. Widgets            → Sidebar, footer, blocs
├── 4. Page d'accueil     → Derniers articles ou page statique
├── 5. Options globales   → Couleurs, typographie, boutons
├── 6. Image arrière-plan → Fond du site
├── 7. CSS additionnel    → Code CSS personnalisé
├── 8. Header             → En-tête : logo + menu
└── 9. Footer             → Bas de page : copyright, liens`,
        },
        { type: "h", text: "1. Identité du site" },
        { type: "list", items: ["Logo du site", "Titre du site", "Slogan", "Favicon (icône du site dans l'onglet du navigateur)"] },
        { type: "h", text: "2. Menu" },
        { type: "list", items: [
          "Créer et organiser la navigation",
          "Ajouter des pages, liens, catégories",
          "Modifier l'ordre des éléments",
          "Choisir l'emplacement du menu (header, footer…)",
        ]},
        { type: "h", text: "3. Widgets" },
        { type: "list", items: [
          "Gérer les zones de contenu",
          "Sidebar (barre latérale)",
          "Footer (pied de page)",
          "Ajouter des blocs : texte, images, liens, etc.",
        ]},
        { type: "h", text: "4. Page d'accueil" },
        { type: "list", items: [
          "Choisir le type d'affichage : derniers articles ou page statique personnalisée",
          "Définir la structure de la homepage",
        ]},
        { type: "h", text: "5. Options globales" },
        { type: "list", items: ["Couleurs du site", "Typographie (polices)", "Style des boutons", "Espacements / design général"] },
        { type: "h", text: "6. Image d'arrière-plan" },
        { type: "list", items: ["Définir une image de fond", "Paramètres selon le thème : position, répétition, taille"] },
        { type: "h", text: "7. CSS additionnel" },
        { type: "code", filename: "css", language: "css", code: `/* Exemple : ajouter du CSS personnalisé */
.mon-element {
  color: #333;
  font-size: 16px;
}` },
        { type: "list", items: ["Ajouter du CSS personnalisé", "Modifier le style sans toucher au thème"] },
        { type: "h", text: "8. Header (en-tête)" },
        { type: "list", items: ["Construction visuelle de l'en-tête", "Logo + menu + éléments du haut du site", "Dépend du thème utilisé"] },
        { type: "h", text: "9. Footer (pied de page)" },
        { type: "list", items: ["Construction du bas de page", "Copyright, liens, widgets", "Personnalisation selon le thème"] },
      ],
    },
    {
      id: "wp-sauvegarde-complete",
      title: "Comment faire une sauvegarde complète de WordPress",
      blocks: [
        {
          type: "diagram",
          content: `MÉTHODES DE SAUVEGARDE
├── 1. FTP (manuel)      → Télécharger /wp-content/ + fichiers racine
├── 2. phpMyAdmin        → Exporter la BDD au format .sql
└── 3. Plugin (recommandé) → UpdraftPlus / BackWPup / Duplicator`,
        },
        { type: "h", text: "1. Sauvegarde des fichiers du site" },
        { type: "p", text: "Utilise un client FTP (FileZilla, Cyberduck) ou un gestionnaire de fichiers via le panneau d'hébergement (cPanel, Plesk)." },
        { type: "p", text: "Télécharge l'intégralité du dossier WordPress, en particulier :" },
        { type: "list", items: [
          "Le dossier /wp-content/ (contient thèmes, plugins, médias)",
          "Les fichiers racine (wp-config.php, .htaccess, etc.)",
        ]},
        { type: "h", text: "2. Sauvegarde de la base de données" },
        { type: "list", items: [
          "Connecte-toi à phpMyAdmin via ton hébergeur.",
          "Sélectionne la base de données utilisée par WordPress (vérifiable dans wp-config.php).",
          "Clique sur l'onglet Exporter.",
          "Choisis le format SQL (standard).",
          "Lance l'export pour télécharger un fichier .sql contenant toutes les données (articles, pages, réglages).",
        ]},
        { type: "h", text: "3. Utiliser un plugin de sauvegarde (option recommandée)" },
        { type: "p", text: "Plugins comme UpdraftPlus, BackWPup, ou Duplicator automatisent la sauvegarde complète." },
        { type: "p", text: "Ils permettent de programmer des sauvegardes régulières et de stocker les fichiers sur des services externes (Dropbox, Google Drive, etc.)." },
        { type: "p", text: "Exemples rapides :" },
        { type: "list", items: [
          "Installer et activer UpdraftPlus.",
          "Aller dans ses réglages, choisir une destination de sauvegarde.",
          "Lancer une sauvegarde manuelle avant mise à jour.",
        ]},
      ],
    },
    ...laConsoleWordpress,
  ],
};
