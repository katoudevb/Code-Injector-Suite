import type { Section } from "../types";

export const deploiementWeb: Section = {
  id: "deploiement-web",
  title: "Déploiement Web",
  icon: "UploadCloud",
  tags: ["ts"],
  subsections: [
    {
      id: "dw-quest-ce-que-deploiement",
      title: "Qu'est-ce que le déploiement web ?",
      blocks: [
        { type: "p", text: "Correspond à la mise en ligne d'un site web ou d'une application (web ou mobile)." },
        { type: "p", text: "C'est le moment où :" },
        { type: "list", items: ["une nouvelle version est disponible pour les utilisateurs", "une mise à jour est publiée"] },
        { type: "h", text: "Objectifs" },
        { type: "list", items: ["Mettre une application en production", "Fournir des mises à jour", "Assurer un service fonctionnel et stable"] },
        { type: "h", text: "Processus de déploiement" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│          PROCESSUS DE DÉPLOIEMENT            │
│                                              │
│  Batterie de tests                           │
│       │                                      │
│       ▼                                      │
│  Validation complète                         │
│       │                                      │
│       ▼                                      │
│  1. Planification                            │
│  2. Ressources adaptées                      │
│  3. Surveillance du processus                │
│  4. Évaluation continue                      │
└──────────────────────────────────────────────┘`,
        },
        { type: "note", variant: "warning", text: "Toujours précédé par une batterie de tests et une validation complète." },
      ],
    },
    {
      id: "dw-filezilla",
      title: "FileZilla",
      blocks: [
        { type: "p", text: "FileZilla est un logiciel client FTP (et SFTP/FTPS) qui permet de transférer des fichiers entre un ordinateur et un serveur web." },
        { type: "h", text: "Exporter des fichiers via FTP" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  INTERFACE FILEZILLA                 │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │   GAUCHE (Local)    │  │   DROITE (Serveur)  │   │
│  │                     │  │                     │   │
│  │  Ton ordinateur     │  │  public_html/       │   │
│  │  ├─ index.html      │  │  ou www/            │   │
│  │  ├─ style.css       │  │                     │   │
│  │  └─ app.js          │  │  ← fichiers en ligne│   │
│  └─────────────────────┘  └─────────────────────┘   │
│                                                      │
│  Glisser-déposer  ──────────────────────────▶        │
│  ou Clic droit → "Envoyer"                           │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Étapes :" },
        { type: "list", items: [
          "1. Ouvrir FileZilla",
          "2. Dans le cadre de gauche → aller dans le dossier local (ton ordinateur) qui contient ton site WordPress",
          "3. Dans le cadre de droite → aller dans le dossier du serveur (hébergement) → généralement public_html/ ou www/",
          "4. Sélectionner tous les fichiers de l'installation WordPress (côté gauche)",
          '5. Clic droit → "Envoyer" → les fichiers sont transférés vers le serveur',
        ]},
        { type: "h", text: "Installation et utilisation" },
        { type: "p", text: "1. Installation (client FileZilla)" },
        { type: "list", items: [
          "Télécharger FileZilla Client depuis le site officiel",
          "Refuser les logiciels additionnels (ex : antivirus proposés)",
          'Choisir "installation utilisateur"',
        ]},
        { type: "p", text: "2. Connexion à un serveur (ex : AlwaysData)" },
        { type: "list", items: [
          "Ouvrir FileZilla",
          "Aller dans Gestionnaire de sites",
          "Créer un nouveau site",
          "Renseigner : Nom d'hôte (serveur FTP), Port : 21, Identifiant utilisateur, Mot de passe",
          "Se connecter",
          "Accepter le certificat si demandé (première connexion)",
        ]},
        { type: "p", text: "3. Transfert de fichiers" },
        { type: "list", items: [
          "À gauche : fichiers de ton ordinateur (local)",
          "À droite : fichiers du serveur (en ligne)",
          "Glisser-déposer pour transférer",
          "Remplacer ou écraser les fichiers si même nom",
        ]},
        { type: "p", text: "4. Utilisation principale" },
        { type: "list", items: ["Mise en ligne d'un site web", "Mise à jour de fichiers", "Sauvegarde manuelle", "Maintenance de sites"] },
        { type: "p", text: "5. Caractéristiques" },
        { type: "list", items: [
          "Affichage des transferts en temps réel",
          "Compatible Windows, macOS, Linux",
          "Gestion des connexions sécurisées (FTPS / SFTP)",
          "Interface avec gestionnaire de sites",
          "Glisser-déposer simple",
        ]},
        { type: "p", text: "6. Versions" },
        { type: "table", headers: ["Version", "Rôle"], rows: [
          ["Client FileZilla", "Utilisé pour transférer des fichiers"],
          ["FileZilla Server", "Installé sur serveur pour recevoir les connexions FTP"],
        ]},
        { type: "p", text: "7. Inconvénients / sécurité" },
        { type: "list", items: [
          "Attention aux sites de téléchargement non officiels",
          "Risque de logiciels indésirables (malwares)",
          "Toujours télécharger depuis le site officiel",
          "Vérifier installation et lancer un antivirus si doute",
        ]},
      ],
    },
    {
      id: "dw-procedure-deploiement",
      title: "Établir une procédure de déploiement",
      blocks: [
        { type: "p", text: "Une procédure de déploiement est un ensemble d'étapes automatisées permettant :" },
        { type: "list", items: ["d'installer une application", "de la mettre à jour", "de garantir un fonctionnement fiable"] },
        { type: "p", text: "Bien conçue, elle permet de déployer rapidement, sans erreur et sans intervention manuelle." },
        { type: "h", text: "Objectifs" },
        { type: "list", items: ["Gagner du temps", "Améliorer la fiabilité", "Automatiser les mises à jour", "Standardiser les installations"] },
        { type: "h", text: "Fonctionnement" },
        { type: "p", text: "Une bonne procédure :" },
        { type: "list", items: [
          "exécute une suite de commandes",
          "suit un ordre précis",
          "s'appuie sur un environnement contrôlé",
          "inclut des tests automatiques",
        ]},
        { type: "h", text: "Étapes" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│           ÉTAPES DE DÉPLOIEMENT                  │
│                                                  │
│  1. PRÉPARATION                                  │
│     ├─ Configurer l'environnement                │
│     │   (serveur, variables…)                    │
│     └─ Installer les dépendances                 │
│             │                                    │
│             ▼                                    │
│  2. BUILD (construction)                         │
│     └─ Compiler / préparer l'application         │
│             │                                    │
│             ▼                                    │
│  3. TESTS                                        │
│     ├─ Vérifier que tout fonctionne              │
│     └─ Éviter les bugs en production             │
│             │                                    │
│             ▼                                    │
│  4. DÉPLOIEMENT                                  │
│     └─ Mise en ligne de l'application            │
│             │                                    │
│             ▼                                    │
│  5. VÉRIFICATION                                 │
│     └─ S'assurer que tout fonctionne             │
│        après mise en prod                        │
└──────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Mise à jour de la procédure" },
        { type: "p", text: "Une procédure de déploiement doit évoluer régulièrement dans ces cas :" },
        { type: "list", items: [
          "Ajout d'une variable d'environnement",
          "Mise à jour de l'environnement (OS, serveur, version logicielle)",
          "Bug détecté lors du déploiement",
          "Problème de sécurité",
          "Nouvelle fonctionnalité impactant le système",
        ]},
        { type: "h", text: "Bonnes pratiques" },
        { type: "list", items: ["Automatiser au maximum", "Documenter chaque étape", "Tester avant production", "Versionner la procédure (Git)"] },
      ],
    },
    {
      id: "dw-besoins-mise-en-production",
      title: "Les besoins d'une mise en production",
      blocks: [
        { type: "p", text: "La mise en production consiste à :" },
        { type: "list", items: ["rendre une application ou un site web accessible au public", "publier une nouvelle version fonctionnelle"] },
        { type: "p", text: "C'est l'étape finale après développement et tests." },
        { type: "h", text: "Objectifs" },
        { type: "list", items: ["Mettre le produit à disposition des utilisateurs", "Remplacer une version existante", "Assurer un service stable et accessible"] },
        { type: "h", text: "Mise en production d'un site web" },
        { type: "p", text: "Méthode simple (manuelle) :" },
        { type: "list", items: ["Envoi des fichiers via FTP", "Remplacement de l'ancienne version", "Écrasement des fichiers existants"] },
        { type: "h", text: "Mise en production d'une application mobile" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│         DÉPLOIEMENT APPLICATION MOBILE       │
│                                              │
│  1. Créer des comptes développeur            │
│     ├─ Google Play                           │
│     └─ App Store                             │
│                                              │
│  2. Générer des clés / accès (API)           │
│                                              │
│  3. Compiler l'application sans erreur       │
│                                              │
│  4. Envoyer l'application sur les stores     │
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Contraintes :" },
        { type: "list", items: [
          "Respect des règles Google (Google Play) et Apple (App Store)",
          "Validation obligatoire avant publication",
          "Le processus est plus long et plus strict",
        ]},
        { type: "h", text: "Mise en production en entreprise / réseau" },
        { type: "p", text: "Vérifications nécessaires :" },
        { type: "list", items: ["Accès aux serveurs", "Permissions utilisateurs", "Connexion aux services internes", "Configuration réseau"] },
        { type: "p", text: "Procédure — doit être :" },
        { type: "list", items: ["Documentée", "Précise", "Respectée à la lettre"] },
        { type: "h", text: "Besoins essentiels avant mise en prod" },
        { type: "table", headers: ["Besoin", "Statut requis"], rows: [
          ["Application testée", "✅"],
          ["Environnement prêt", "✅"],
          ["Accès configurés", "✅"],
          ["Procédure définie", "✅"],
          ["Sauvegarde existante", "✅"],
        ]},
      ],
    },
    {
      id: "dw-organisation-avant-deploiement",
      title: "Organisation de l'application avant déploiement",
      blocks: [
        { type: "h", text: "1. Mise en place de la base de données" },
        { type: "p", text: "Sans elle :" },
        { type: "list", items: ["l'application peut être bloquée", "le déploiement peut échouer", "les fonctionnalités ne fonctionnent pas"] },
        { type: "p", text: "Versionner les scripts SQL :" },
        {
          type: "diagram",
          content: `Au lieu d'un seul fichier, on crée plusieurs versions :

  script_v001.sql  →  initialisation de la base
  script_v002.sql  →  évolutions
  script_v003.sql  →  nouvelles modifications`,
        },
        { type: "h", text: "2. Données de configuration (.env)" },
        { type: "p", text: "Le fichier .env contient les informations sensibles de l'application." },
        { type: "code", filename: ".env", language: "bash", code: `BD_HOSTNAME=phpmyadmin.fr
BD_USERNAME=root
BD_PASSWORD=motdepasse` },
        { type: "p", text: "Bonne pratique :" },
        { type: "list", items: [
          "Pas d'identifiants en clair dans le code",
          "Variables d'environnement",
          "Stockage sécurisé",
          "Séparation code / configuration",
        ]},
        { type: "p", text: "Règles de nommage :" },
        { type: "list", items: ["Écrire en MAJUSCULES", "Séparer avec _", "Utiliser l'anglais"] },
        { type: "h", text: "3. Découpage de l'application" },
        { type: "p", text: "Avantages :" },
        { type: "list", items: ["Plus de lisibilité", "Plus de réutilisation", "Plus de maintenance", "Déploiements plus simples"] },
        { type: "h", text: "3 types de découpage" },
        { type: "p", text: "1. Découpage fonctionnel — on regroupe par fonctionnalités métier" },
        {
          type: "diagram",
          content: `Exemple : Application de rencontres
┌────────────────────────────────────┐
│  module / création-compte          │
│  module / connexion                │
│  module / profils-utilisateurs     │
│  module / messages-chat            │
└────────────────────────────────────┘`,
        },
        { type: "p", text: "Avantages : logique métier claire, facile à faire évoluer, indépendant des autres modules." },
        { type: "p", text: "2. Découpage par design (front-end) — on organise selon l'affichage UI" },
        {
          type: "diagram",
          content: `Exemple de structure de dossiers :
┌────────────────────────────────────┐
│  login/                            │
│  signup/                           │
│  homePage/                         │
│  (popups d'erreurs)                │
└────────────────────────────────────┘`,
        },
        { type: "p", text: "Avantages : structure claire côté interface, séparation des pages." },
        { type: "p", text: "3. Découpage par composants (frameworks front-end : Angular, React, Vue.js)" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│         DÉCOUPAGE PAR COMPOSANTS             │
│                                              │
│  PAGES                    COMPOSANTS         │
│  (logique principale)     (blocs réutilisables│
│                                              │
│  ┌──────────────┐         ┌───────────────┐  │
│  │  PageAccueil │ ──────▶ │  NavBar       │  │
│  └──────────────┘         ├───────────────┤  │
│  ┌──────────────┐         │  Card         │  │
│  │  PageProfil  │ ──────▶ ├───────────────┤  │
│  └──────────────┘         │  Button       │  │
│                           └───────────────┘  │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Deux types de composants" },
        { type: "table", headers: ["Type", "Rôle", "Caractéristiques"], rows: [
          ["Smart components (intelligents)", "Logique métier", "Gèrent les données, orchestrent les composants"],
          ["Dumb components (stupides)", "Affichage uniquement", "Pas de logique complexe, reçoivent données en entrée"],
        ]},
      ],
    },
    {
      id: "dw-planification-deploiement",
      title: "Planification de déploiement",
      blocks: [
        { type: "h", text: "1. Définir le projet" },
        { type: "list", items: ["Le besoin métier", "Les contraintes techniques", "Les risques"] },
        { type: "h", text: "2. Établir un plan de déploiement" },
        { type: "p", text: "Un bon plan repose sur 5 points essentiels :" },
        { type: "p", text: "Point 1 — Liste des critères" },
        { type: "p", text: "Un niveau de criticité est attribué à chaque problème selon la probabilité d'apparition et l'impact sur le système." },
        { type: "table", headers: ["Niveau", "Description"], rows: [
          ["Faible", "Impact mineur, peu probable"],
          ["Moyen", "Impact modéré"],
          ["Important", "Fort impact ou probable"],
          ["Critique", "Bloquant / urgent"],
        ]},
        { type: "p", text: "Questions importantes à se poser :" },
        { type: "list", items: [
          "L'application doit-elle être disponible 24h/24 ?",
          "Quel niveau de trafic (débit) est attendu ?",
          "Quelle fréquence de sauvegarde est nécessaire ?",
          "Les données clients sont-elles sensibles ?",
        ]},
        { type: "p", text: "Point 2 — Planification des périodes de déploiement" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│       BONNE PRATIQUE : QUAND DÉPLOYER ?      │
│                                              │
│  ❌ Ne pas déployer en pleine journée        │
│  ❌ Ne pas déployer sans préparation         │
│                                              │
│  ✅ Déployer la nuit                         │
│  ✅ Déployer en période de faible activité   │
│  ✅ Prévoir une équipe en astreinte          │
│  ✅ Prévoir un rollback (retour en arrière)  │
└──────────────────────────────────────────────┘`,
        },
        { type: "note", variant: "info", text: "Le rollback permet de revenir à l'ancienne version en cas de bug." },
        { type: "p", text: "Point 3 — Prévoir les environnements" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                LES 3 ENVIRONNEMENTS                  │
│                                                      │
│  DÉVELOPPEMENT                                       │
│  ├─ Utilisé par les développeurs                     │
│  ├─ Tests rapides                                    │
│  └─ Modifications fréquentes                         │
│             │                                        │
│             ▼                                        │
│  TEST / STAGING                                      │
│  ├─ Copie proche de la production                    │
│  ├─ Validation finale                                │
│  └─ Test avec données réalistes                      │
│             │                                        │
│             ▼                                        │
│  PRODUCTION                                          │
│  ├─ Application accessible aux clients               │
│  ├─ Environnement réel                               │
│  └─ Très stable                                      │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Point 4 — Affectation des équipes" },
        { type: "p", text: "Selon la taille du projet :" },
        { type: "list", items: ["Équipes DevOps dédiées", "Astreinte (support 24/7 si critique)", "Équipes de supervision"] },
        { type: "p", text: "Point 5 — Amélioration continue" },
        { type: "p", text: "Le déploiement n'est jamais \"terminé\"." },
        { type: "p", text: "Principe : améliorer en continu, corriger les bugs, optimiser les performances." },
        { type: "p", text: "Mise à jour régulière :" },
        { type: "list", items: ["Frameworks (React, Angular…)", "Backend (Node.js, PHP…)", "Sécurité"] },
        { type: "note", variant: "info", text: "Certaines mises à jour ajoutent des fonctionnalités et/ou corrigent des failles de sécurité — elles sont donc essentielles." },
      ],
    },
    {
      id: "dw-procedure-bdd",
      title: "Procédure de déploiement — Base de données",
      blocks: [
        { type: "h", text: "Préparer la base de données" },
        { type: "p", text: "Lors d'un déploiement, il est souvent nécessaire de créer de nouvelles tables, mettre à jour la structure, ajouter des données. Cela se fait via des scripts SQL versionnés." },
        { type: "code", filename: "sql", language: "sql", code: `CREATE TABLE IF NOT EXISTS contacts (
  email  VARCHAR(255),
  prenom VARCHAR(255),
  nom    VARCHAR(255)
);` },
        { type: "p", text: "Bonne pratique SQL :" },
        { type: "list", items: ["Utiliser IF NOT EXISTS", "Versionner les scripts SQL", "Éviter les modifications directes en production"] },
        { type: "h", text: "Déploiement du script SQL" },
        { type: "p", text: "Méthode 1 : manuelle" },
        { type: "list", items: ["Se connecter à un outil comme phpMyAdmin", "Importer le fichier .sql", "Exécuter le script"] },
        { type: "p", text: "Simple mais moins automatisé." },
        { type: "p", text: "Méthode 2 : via terminal (automatique)" },
        { type: "code", filename: "terminal", language: "bash", code: `mysql -u username -p password -h hostname -P port database_name < file.sql` },
        { type: "p", text: "À adapter :" },
        { type: "table", headers: ["Paramètre", "Description"], rows: [
          ["username", "Utilisateur MySQL"],
          ["password", "Mot de passe"],
          ["hostname", "Serveur"],
          ["database_name", "Base cible"],
          ["file.sql", "Script à exécuter"],
        ]},
        { type: "note", variant: "warning", text: "Bonnes pratiques SQL : Toujours tester en environnement de dev, Éviter les suppressions en production, Utiliser des migrations versionnées." },
        { type: "h", text: "Pré-requis système (installation MySQL)" },
        { type: "code", filename: "terminal", language: "bash", code: `# macOS
brew install mysql

# Linux / Ubuntu
sudo apt install mysql-server

# Windows
# Installer MySQL manuellement
# Vérifier que le service est actif` },
        { type: "h", text: "Bonnes pratiques de déploiement" },
        { type: "p", text: "Toujours :" },
        { type: "list", items: ["Tester en environnement de développement", "Valider en staging avant production", "Utiliser des scripts versionnés"] },
        { type: "p", text: "Ne jamais :" },
        { type: "list", items: ["Modifier directement la production sans test", "Envoyer des fichiers sans vérification"] },
      ],
    },
    {
      id: "dw-envoyer-fichiers-serveur",
      title: "Envoyer les fichiers sur le serveur",
      blocks: [
        { type: "p", text: "Le déploiement consiste aussi à transférer : code source, fichiers front-end, assets (images, build…)." },
        { type: "h", text: "Méthode 1 : FTP (manuel)" },
        { type: "list", items: [
          "1. Se connecter au serveur",
          "2. Entrer identifiants FTP",
          "3. Glisser-déposer les fichiers",
          "4. Envoyer vers le dossier cible",
        ]},
        { type: "p", text: "Informations : simple à utiliser, risque d'erreur humaine, pas automatisé." },
        { type: "h", text: "Méthode 2 : FTP via terminal" },
        { type: "code", filename: "terminal", language: "text", code: `ftp hostname

cd uploads

put c:\\mywebsite\\index.html` },
        { type: "list", items: [
          "1. Connexion au serveur FTP",
          "2. Navigation dans le dossier distant",
          "3. Transfert des fichiers",
        ]},
        { type: "p", text: "Informations :" },
        { type: "list", items: ["Toujours vérifier le chemin des fichiers", "Ne jamais écraser sans contrôle", "Tester avant en staging"] },
      ],
    },
    {
      id: "dw-transfert-hebergeur",
      title: "Transfert d'un site web chez un hébergeur",
      blocks: [
        { type: "p", text: "Déplacer un site depuis un environnement local ou de test vers un serveur d'hébergement pour le rendre accessible en ligne." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│         ÉTAPES DE TRANSFERT CHEZ L'HÉBERGEUR         │
│                                                      │
│  1. ACCÈS AU SERVEUR                                 │
│     ├─ Connexion via SSH ou cPanel                   │
│     └─ Client FTP si nécessaire                      │
│                                                      │
│  2. TRANSFERT DES FICHIERS                           │
│     ├─ HTML, CSS, JS, médias…                        │
│     └─ Via gestionnaire de fichiers ou FTP           │
│                                                      │
│  3. VÉRIFICATION TECHNIQUE                           │
│     ├─ Permissions des fichiers et dossiers          │
│     └─ Mise à jour des chemins (URL, locaux…)        │
│                                                      │
│  4. TESTS AVANT MISE EN LIGNE                        │
│     └─ Vérifier que tout fonctionne                  │
│                                                      │
│  5. SAUVEGARDE                                       │
│     └─ Sauvegarder site + BDD avant transfert        │
│                                                      │
│  6. SÉCURITÉ ET CONFIGURATION                        │
│     ├─ Certificat SSL (HTTPS)                        │
│     ├─ Tâches automatiques (cron)                    │
│     └─ Services tiers (API…)                         │
│                                                      │
│  [Site dynamique avec BDD]                           │
│     ├─ Créer BDD chez l'hébergeur                    │
│     ├─ Importer la BDD                               │
│     ├─ Configurer les accès                          │
│     └─ Modifier le fichier de configuration          │
│                                                      │
│  7. MISE EN LIGNE FINALE                             │
│     └─ Basculer le DNS vers le nouvel hébergement    │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "dw-client-ftp",
      title: "Client FTP",
      blocks: [
        { type: "p", text: "Un client FTP est un logiciel permettant de transférer, publier et gérer les fichiers d'un site web entre un ordinateur local et un serveur distant (hébergeur)." },
        { type: "h", text: "Fonctionnalités principales" },
        { type: "list", items: [
          "Publier un site web en ligne",
          "Télécharger et modifier des fichiers",
          "Sauvegarde manuelle des fichiers",
          "Facilite la migration (local → serveur)",
        ]},
        { type: "h", text: "Sécurité et protocoles" },
        { type: "list", items: [
          "Support des protocoles sécurisés (SFTP, FTPS)",
          "Gestion des permissions des fichiers",
          "Confirmation avant modification des fichiers",
        ]},
        { type: "h", text: "Fonctionnalités avancées" },
        { type: "list", items: [
          "Synchronisation des fichiers (local ↔︎ serveur)",
          "Reprise de transfert interrompu (resume)",
          "Multiplateforme",
          "Interface graphique intuitive",
        ]},
      ],
    },
    {
      id: "dw-protocole-ftp",
      title: "Protocole FTP",
      blocks: [
        { type: "p", text: "Le FTP (File Transfer Protocol) est un protocole permettant de transférer des fichiers entre un client (ordinateur) et un serveur (hébergement web)." },
        { type: "h", text: "Fonctionnement" },
        { type: "p", text: "Le client FTP se connecte à un serveur FTP. Accès via : logiciel (FileZilla…), ligne de commande, ou interface web." },
        { type: "h", text: "Ports utilisés" },
        { type: "table", headers: ["Port", "Protocole", "Usage"], rows: [
          ["21", "FTP classique", "Connexion FTP"],
          ["20", "FTP (mode actif)", "Transfert de données"],
          ["22", "SFTP (via SSH)", "Transfert sécurisé"],
        ]},
        { type: "p", text: "Ports configurables selon le serveur." },
        { type: "h", text: "Sécurité des protocoles" },
        { type: "table", headers: ["Protocole", "Sécurité", "Recommandation"], rows: [
          ["FTP", "Non sécurisé (données en clair)", "À éviter"],
          ["FTPS", "FTP sécurisé avec SSL/TLS", "Acceptable"],
          ["SFTP", "Sécurisé via SSH", "✅ Recommandé"],
        ]},
        { type: "h", text: "Compatibilité" },
        { type: "list", items: [
          "Compatible IPv4 et IPv6",
          "Configuration possible du pare-feu / routeur",
          "Certains hébergeurs limitent ou désactivent FTP pour la sécurité",
        ]},
        { type: "h", text: "Modes de transfert" },
        { type: "list", items: ["Mode actif", "Mode passif (souvent utilisé pour éviter les blocages réseau)"] },
      ],
    },
    {
      id: "dw-creation-acces-ftp",
      title: "Création d'un accès FTP",
      blocks: [
        { type: "p", text: "Créer un accès FTP permet de donner à un utilisateur la possibilité de se connecter à un serveur pour gérer les fichiers d'un site web." },
        { type: "h", text: "Configuration d'un compte FTP" },
        { type: "list", items: [
          "Possibilité de restreindre l'accès à un répertoire spécifique",
          "Création de plusieurs comptes FTP avec différents droits",
          "Gestion des permissions d'accès",
          "Restriction d'accès par adresse IP (sécurité)",
        ]},
        { type: "h", text: "Gestion et sécurité" },
        { type: "list", items: [
          "Définir un quota (limite d'espace disque)",
          "Changer régulièrement le mot de passe",
          "Utiliser des protocoles sécurisés (SFTP / FTPS)",
          "Surveiller les connexions via les logs",
        ]},
        { type: "h", text: "Informations de connexion FTP" },
        { type: "table", headers: ["Champ", "Description"], rows: [
          ["Nom d'hôte", "Nom de domaine ou adresse IP"],
          ["Nom d'utilisateur", "Identifiant FTP"],
          ["Mot de passe", "Fourni ou créé"],
          ["Port", "21 (FTP/FTPS) ou 22 (SFTP)"],
        ]},
      ],
    },
    {
      id: "dw-problemes-serveur-web",
      title: "Problèmes courants d'un serveur web",
      blocks: [
        { type: "p", text: "Erreurs ou dysfonctionnements qui empêchent un site de fonctionner correctement (accès, performance, sécurité…)." },
        { type: "table", headers: ["#", "Catégorie", "Problèmes"], rows: [
          ["1", "Transfert de fichiers", "Transfert trop long, échec de transfert"],
          ["2", "Connexion serveur", "Impossible de se connecter, mauvaise configuration (port, pare-feu, proxy…)"],
          ["3", "Permissions", "Mauvais droits sur fichiers/dossiers, accès refusé"],
          ["4", "Certificats SSL/TLS", "Certificat expiré ou invalide, mauvaise configuration HTTPS"],
          ["5", "Surcharge serveur", "Attaques DDoS, tentatives de brute force, trop de connexions simultanées"],
          ["6", "Base de données", "Problème de connexion, base indisponible, mauvaise configuration"],
          ["7", "Dépendances / bibliothèques", "Versions incompatibles, problèmes après mise à jour"],
          ["8", "Stockage", "Espace disque insuffisant, problèmes de permissions sur fichiers temporaires"],
        ]},
      ],
    },
    {
      id: "dw-hebergeurs-gratuits",
      title: "Hébergeurs gratuits",
      blocks: [
        { type: "p", text: "Les hébergeurs gratuits permettent de mettre un site web en ligne sans coût, souvent avec des limitations." },
        { type: "h", text: "Types d'hébergement proposés" },
        { type: "list", items: ["Sites web (front-end)", "Applications / API (back-end)", "Bases de données"] },
        { type: "h", text: "Avantages / Inconvénients" },
        { type: "table", headers: ["Avantages", "Inconvénients"], rows: [
          ["Gratuit", "Ressources limitées (CPU, RAM, stockage)"],
          ["Facile à utiliser et tester", "Performances réduites"],
          ["Déploiement rapide", "Moins de contrôle"],
          ["—", "Mise en veille automatique (Render, Railway)"],
          ["—", "Limites de trafic / requêtes"],
          ["—", "Sous-domaine imposé (ex : monsite.onrender.com)"],
        ]},
        { type: "h", text: "Sécurité et usage" },
        { type: "list", items: ["Pas recommandé pour données sensibles", "Utilisé pour : apprentissage, tests, petits projets"] },
      ],
    },
    {
      id: "dw-modes-hebergement",
      title: "Modes d'hébergement",
      blocks: [
        { type: "p", text: "Les différentes façons de mettre un site web en ligne et de le rendre accessible sur Internet." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│              MODES D'HÉBERGEMENT                     │
│                                                      │
│  LOCAL          Propre ordinateur, accès local seul  │
│  ────────────────────────────────────────────────    │
│  MUTUALISÉ      Plusieurs sites / même serveur       │
│                 Économique, performances partagées   │
│  ────────────────────────────────────────────────    │
│  DÉDIÉ          Serveur entier pour un seul site     │
│                 Très performant, coût élevé          │
│  ────────────────────────────────────────────────    │
│  VPS            Compromis mutualisé / dédié          │
│                 Serveur virtuel indépendant           │
│                 Bon équilibre perf / coût             │
│  ────────────────────────────────────────────────    │
│  CLOUD          Plusieurs serveurs                   │
│                 Ressources flexibles                 │
│                 Paiement à l'utilisation             │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "dw-choisir-hebergeur",
      title: "Choisir son hébergeur",
      blocks: [
        { type: "p", text: "Sélectionner un service pour mettre un site web en ligne, en fonction de ses besoins techniques, financiers et organisationnels." },
        { type: "table", headers: ["Critère", "Points à vérifier"], rows: [
          ["Performances et ressources", "Capacité de stockage, performances serveur, évolutivité"],
          ["Budget", "Prix, rapport qualité/prix, budget disponible"],
          ["Compétences techniques", "Niveau admin serveur, interface (cPanel…)"],
          ["Type de site", "Vitrine, e-commerce, statique ou dynamique"],
          ["Compatibilité technique", "PHP, BDD, CMS, frameworks"],
          ["Réglementation", "RGPD, localisation serveurs (France/Europe)"],
          ["Sécurité", "Certificat SSL, anti-DDoS, sauvegardes auto"],
          ["Qualité du service", "Support client, réputation, stabilité"],
          ["Fonctionnalités", "Emails, backup, DNS, interface de gestion"],
          ["Conditions contractuelles", "Engagement mensuel/annuel, CGU, évolution possible"],
        ]},
      ],
    },
    {
      id: "dw-choisir-nom-domaine",
      title: "Choisir un nom de domaine",
      blocks: [
        { type: "p", text: "Le nom de domaine est l'adresse d'un site web (ex : monsite.com). Il permet aux utilisateurs d'accéder facilement à un site sur Internet." },
        { type: "h", text: "1. Simplicité et mémorisation" },
        { type: "list", items: ["Nom simple et facile à retenir", "Court pour une meilleure utilisation sur mobile", "Facile à écrire et à partager"] },
        { type: "h", text: "2. Pertinence" },
        { type: "list", items: ["Doit être lié à l'activité du site", "Refléter l'identité du projet ou de l'entreprise"] },
        { type: "h", text: "3. Éviter les erreurs" },
        { type: "list", items: ["Éviter les marques existantes ou noms déposés", "Éviter les noms trop compliqués ou ambigus"] },
        { type: "h", text: "4. Extension du domaine" },
        { type: "table", headers: ["Extension", "Usage"], rows: [
          [".fr", "Ciblage national (France)"],
          [".com", "Usage international"],
          [".org", "Organisations"],
          [".net", "Réseaux / tech"],
        ]},
      ],
    },
    {
      id: "dw-reserver-nom-domaine",
      title: "Réserver un nom de domaine",
      blocks: [
        { type: "p", text: "Réserver un nom de domaine consiste à acheter et enregistrer une adresse web afin de l'utiliser pour un site internet." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│         RÉSERVATION NOM DE DOMAINE                   │
│                                                      │
│  1. Vérification disponibilité                       │
│     └─ Vérifier si déjà pris / choisir alternative   │
│                                                      │
│  2. Enregistrement via registrar                     │
│     └─ OVH, Namecheap, etc.                          │
│                                                      │
│  3. Durée de réservation                             │
│     └─ 1 an, plusieurs années… + renouvellement      │
│                                                      │
│  4. Gestion des DNS                                  │
│     └─ Relier le domaine à l'hébergeur               │
│                                                      │
│  5. Protection des données                           │
│     └─ Activer WHOIS privé                           │
│                                                      │
│  6. Points d'attention                               │
│     ├─ Vérifier frais cachés                         │
│     ├─ Attention renouvellement automatique          │
│     └─ Domaine parfois lié à hébergeur               │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "dw-deploiement-continu",
      title: "Déploiement continu (CD)",
      blocks: [
        { type: "p", text: "Le déploiement continu est une stratégie où chaque modification validée (tests OK) est automatiquement mise en production." },
        { type: "h", text: "Fonctionnement" },
        {
          type: "diagram",
          content: `Code modifié
     │
     ▼
Tests automatiques (CI)
     │
     ├─ Échec → notification d'erreur
     │
     └─ Succès → Déploiement automatique en production`,
        },
        { type: "h", text: "Avantages" },
        { type: "list", items: ["Pas d'attente entre test et mise en ligne", "Livraison rapide et fréquente", "Processus fiable et automatisé"] },
      ],
    },
    {
      id: "dw-integration-continue",
      title: "Intégration continue (CI)",
      blocks: [
        { type: "p", text: "L'intégration continue consiste à vérifier automatiquement que chaque modification de code :" },
        { type: "list", items: ["fonctionne correctement", "ne casse pas l'application existante (pas de régression)"] },
        { type: "h", text: "Fonctionnement" },
        { type: "p", text: "À chaque modification :" },
        { type: "list", items: ["1. Le code est testé automatiquement", "2. Les erreurs sont détectées immédiatement"] },
        { type: "h", text: "Avantages" },
        { type: "list", items: ["Tests rapides et automatiques", "Détection immédiate des bugs", "Code plus stable", "Version toujours prête pour démo ou livraison"] },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  CI / CD PIPELINE                    │
│                                                      │
│  Commit (code modifié)                               │
│       │                                              │
│       ▼                                              │
│  CI — Tests automatiques                             │
│       ├─ ❌ Erreur → Notification développeur        │
│       └─ ✅ OK                                       │
│                │                                     │
│                ▼                                     │
│  CD — Déploiement automatique en production          │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "dw-sentry",
      title: "Monitoring / Suivi erreurs — Sentry",
      blocks: [
        { type: "p", text: "Outil permettant de surveiller, détecter et analyser les erreurs dans une application (web ou mobile)." },
        { type: "h", text: "1. Installation et configuration" },
        { type: "p", text: "Installation :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install --save @sentry/browser` },
        { type: "p", text: "Initialisation :" },
        { type: "code", filename: "jsx", language: "javascript", code: `import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "https://<public_key>@o<org_id>.ingest.sentry.io/<project_id>",
    tracesSampleRate: 1.0
});` },
        { type: "note", variant: "info", text: "Le DSN est une clé propre à ton projet." },
        { type: "h", text: "2. Capture automatique d'erreurs" },
        { type: "p", text: "Les erreurs non gérées sont envoyées automatiquement." },
        { type: "code", filename: "jsx", language: "javascript", code: `function boom() {
    throw new Error("Crash inattendu !");
}
boom(); // → envoyé automatiquement à Sentry` },
        { type: "h", text: "3. Capture manuelle" },
        { type: "table", headers: ["Méthode", "Usage"], rows: [
          ["Sentry.captureException(error)", "Erreur critique"],
          ['Sentry.captureMessage("message")', "Message personnalisé"],
        ]},
        { type: "code", filename: "jsx", language: "javascript", code: `try {
    doSomethingRisky();
} catch (e) {
    Sentry.captureException(e);
}` },
        { type: "h", text: "4. Ajouter du contexte" },
        { type: "p", text: "Permet de mieux comprendre les erreurs." },
        { type: "code", filename: "jsx", language: "javascript", code: `Sentry.setUser({
    id: "123",
    username: "kat_dev"
});

Sentry.setContext("shopping_cart", {
    itemCount: 3,
    totalPrice: "59.90€"
});` },
        { type: "h", text: "5. Utilisation avec React" },
        { type: "p", text: "Installation :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install @sentry/react` },
        { type: "p", text: "Importation et initialisation :" },
        { type: "code", filename: "jsx", language: "javascript", code: `import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://<dsn>",
    integrations: [new Sentry.BrowserTracing()],
});

function App() {
    return (
        <button onClick={() => { throw new Error("Boom!"); }}>
            Provoquer une erreur
        </button>
    );
}` },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│              FLUX SENTRY                         │
│                                                  │
│  Application (front / React)                     │
│       │                                          │
│       │  Erreur non gérée / captureException()   │
│       ▼                                          │
│  SDK Sentry (@sentry/browser ou @sentry/react)   │
│       │                                          │
│       ▼                                          │
│  Dashboard Sentry (sentry.io)                    │
│  ├─ Stack trace complet                          │
│  ├─ Contexte utilisateur                         │
│  ├─ Environnement (dev/prod)                     │
│  └─ Alertes et notifications                     │
└──────────────────────────────────────────────────┘`,
        },
      ],
    },
  ],
};
