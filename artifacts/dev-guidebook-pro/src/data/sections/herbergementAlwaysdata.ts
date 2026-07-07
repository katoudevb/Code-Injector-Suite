import type { Section } from "../types";

export const hebergementAlwaysdata: Section = {
  id: "hebergement-alwaysdata",
  title: "Hébergement — AlwaysData",
  icon: "Server",
  tags: ["php"],
  subsections: [
    {
      id: "aa-flux-global",
      title: "Flux global de déploiement",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│               FLUX DE DÉPLOIEMENT ALWAYSDATA                 │
│                                                              │
│  1. Configurer le site (AlwaysData dashboard)                │
│         │                                                    │
│         ▼                                                    │
│  2. Préparer le projet en local (composer install)           │
│         │                                                    │
│         ▼                                                    │
│  3. Connecter FileZilla (FTP/SFTP)                           │
│         │                                                    │
│         ▼                                                    │
│  4. Transférer les fichiers → /www/                          │
│         │                                                    │
│         ▼                                                    │
│  5. Configurer variables d'environnement côté serveur        │
│         │                                                    │
│         ▼                                                    │
│  6. Créer/importer la base de données via phpMyAdmin         │
│         │                                                    │
│         ▼                                                    │
│  7. Tester le site en ligne                                  │
└──────────────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "aa-configurer-site",
      title: "1. Configurer le site sur AlwaysData",
      blocks: [
        { type: "list", items: [
          "1. Connecte-toi à ton espace AlwaysData",
          '2. Va dans "Sites" → "Configuration"',
          "3. Choisis le langage du projet (ex : PHP, Python, Node.js…)",
          "4. Sélectionne la version correspondante (ex : PHP 8.x si ton projet l'exige)",
        ]},
      ],
    },
    {
      id: "aa-preparer-transfert-ftp",
      title: "2. Préparer le transfert des fichiers (FTP/SFTP)",
      blocks: [
        { type: "p", text: "Installer un client FTP :" },
        { type: "list", items: ["FileZilla (Windows / Mac / Linux)", "ou Cyberduck"] },
        { type: "p", text: "Récupérer les informations de connexion dans AlwaysData :" },
        { type: "p", text: 'Va dans "Hébergement" → "FTP". Tu y trouveras :' },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Serveur", "ftp.alwaysdata.com ou ftp-votrecompte.alwaysdata.net"],
          ["Utilisateur", "ton identifiant FTP"],
          ["Mot de passe", "celui défini lors de la création du compte FTP"],
        ]},
        { type: "note", variant: "warning", text: "Important : ne partage jamais ton mot de passe FTP." },
      ],
    },
    {
      id: "aa-connexion-filezilla",
      title: "3. Connexion avec FileZilla",
      blocks: [
        { type: "list", items: [
          "1. Ouvre FileZilla",
          "2. Renseigne : Hôte (serveur FTP), Identifiant (utilisateur FTP), Mot de passe (ton mot de passe FTP), Port (21 pour FTP ou 22 pour SFTP selon configuration)",
          '3. Clique sur "Connexion rapide"',
        ]},
      ],
    },
    {
      id: "aa-transferer-projet",
      title: "4. Transférer ton projet",
      blocks: [
        { type: "list", items: [
          "1. À droite (serveur distant), ouvre le dossier www",
          "2. À gauche (ton PC), sélectionne ton projet",
          "3. Glisse-dépose les fichiers dans www",
        ]},
        { type: "h", text: "5. Vérifications importantes" },
        { type: "list", items: [
          "Vérifie si la connexion est en FTP ou SFTP (SFTP recommandé)",
          "Vérifie que les fichiers principaux (ex : index.php) sont bien à la racine de www",
          "Attends la fin du transfert avant de tester le site",
        ]},
      ],
    },
    {
      id: "aa-preparer-projet-local",
      title: "Transférer le projet — Préparer en local (VS Code)",
      blocks: [
        { type: "p", text: "Dans ton terminal VS Code, à la racine du projet :" },
        { type: "code", filename: "terminal", language: "bash", code: `composer install --no-dev --optimize-autoloader --no-scripts` },
        { type: "table", headers: ["Option", "Description"], rows: [
          ["--no-dev", "N'installe pas les dépendances de développement"],
          ["--optimize-autoloader", "Optimise le chargement des classes"],
          ["--no-scripts", "Évite l'exécution automatique de scripts Composer"],
        ]},
        { type: "h", text: "2. Transférer les fichiers vers le serveur (FileZilla)" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│  TON PC (gauche)      SERVEUR (droite)        │
│                                               │
│  /dossier-projet/  →  /www/                   │
│  Ctrl + A (tout sélectionner)                 │
│  Glisser-déposer →                            │
└──────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "À gauche (ton PC) : ouvre ton dossier projet (ex : knowledge)",
          "Fais Ctrl + A pour sélectionner tous les fichiers",
          "À droite (serveur distant) : ouvre le dossier /www/",
          "Glisse-dépose les fichiers de gauche vers la droite",
        ]},
        { type: "h", text: "3. Important lors des modifications" },
        { type: "p", text: "À chaque modification locale :" },
        { type: "list", items: [
          "Tu dois retransférer les fichiers modifiés (gauche → droite)",
          "Sinon le serveur n'aura pas la dernière version",
        ]},
        { type: "h", text: "4. Synchronisation GitHub (recommandé)" },
        { type: "p", text: "Si ton projet est suivi avec Git :" },
        { type: "list", items: ["Pense à push tes modifications sur GitHub", "Cela permet de garder une sauvegarde et de collaborer facilement"] },
        { type: "h", text: "5. Nettoyage du serveur" },
        { type: "p", text: "Une fois le transfert terminé :" },
        { type: "list", items: ["Supprime le fichier .env.local sur le serveur distant (/www/)"] },
        { type: "note", variant: "warning", text: "Important : ce fichier ne doit pas être exposé en production" },
      ],
    },
    {
      id: "aa-configuration-site-alwaysdata",
      title: "Configuration du site sur AlwaysData",
      blocks: [
        { type: "h", text: "1. Créer un site web" },
        { type: "list", items: ["1. Connecte-toi à AlwaysData", '2. Va dans "Sites Web"', '3. Clique sur "Ajouter un site"'] },
        { type: "h", text: "2. Configuration du nom de domaine" },
        { type: "list", items: [
          "Laisse le nom de domaine principal tel quel (ex : bricotteaux.alwaysdata.net)",
          "Tu peux ajouter un suffixe si tu crées plusieurs sites (ex : bricotteaux-api, bricotteaux-app)",
        ]},
        { type: "h", text: "3. Définir le dossier racine" },
        { type: "p", text: "Dans les paramètres du site : /www/public/" },
        { type: "list", items: [
          "C'est ce dossier qui sera visible publiquement",
          "Les autres fichiers (config, env, etc.) doivent rester hors de public",
        ]},
        { type: "h", text: "4. Ajouter les variables d'environnement" },
        { type: "p", text: 'Dans la section "Variables d\'environnement", ajoute celles de ton fichier .env.local.' },
        { type: "code", filename: ".env", language: "bash", code: `DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
APP_SECRET=ta_valeur_app_secret` },
        { type: "h", text: "5. Détails DATABASE_URL" },
        { type: "p", text: "Structure :" },
        { type: "code", filename: "text", language: "text", code: `mysql://USER:PASSWORD@HOST:PORT/DATABASE` },
        { type: "table", headers: ["Paramètre", "Description", "Exemple"], rows: [
          ["USER", "Identifiant MySQL AlwaysData", "429955"],
          ["PASSWORD", "Mot de passe de la base de données", "—"],
          ["HOST", "Serveur MySQL AlwaysData", "mysql-votrecompte.alwaysdata.net"],
          ["PORT", "Port MySQL (généralement)", "3306"],
          ["DATABASE", "Nom de la base", "votrecompte_knowledge_db"],
        ]},
        { type: "h", text: "6. Infos importantes base de données" },
        { type: "list", items: [
          "Base gérée via AlwaysData",
          "Accès possible via phpMyAdmin intégré",
          "Version serveur : MariaDB (ex : 10.11.x)",
        ]},
        { type: "note", variant: "warning", text: "Rappel important : Ne mets jamais .env.local dans /public. Les variables doivent être configurées côté serveur (AlwaysData). Si tu modifies .env.local en local → pense à mettre à jour les variables sur le serveur." },
      ],
    },
    {
      id: "aa-utilisateur-ftp",
      title: "Configuration de l'utilisateur FTP",
      blocks: [
        { type: "p", text: "Dans AlwaysData :" },
        { type: "list", items: ["1. Va dans FTP / SFTP", '2. Clique sur "Ajouter un utilisateur FTP"'] },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Nom", "ex. moncompte"],
          ["Dossier racine", "/www/public/"],
        ]},
        { type: "note", variant: "info", text: "Le dossier /public doit contenir le fichier .htaccess. C'est la racine visible du site web." },
      ],
    },
    {
      id: "aa-bdd-mysql",
      title: "Création de la base de données MySQL",
      blocks: [
        { type: "list", items: [
          "1. Va dans Bases de données → MySQL",
          '2. Clique sur "Ajouter une base de données"',
        ]},
        { type: "p", text: "Exemple : Nom de la base : moncompte_knowledge_db" },
      ],
    },
    {
      id: "aa-phpmyadmin",
      title: "Accès à la base via phpMyAdmin",
      blocks: [
        { type: "list", items: ["1. Va dans Bases de données → MySQL", "2. Clique sur phpMyAdmin"] },
        { type: "p", text: "Connexion :" },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Utilisateur", "Ton identifiant numérique AlwaysData"],
          ["Mot de passe", "Mot de passe du compte MySQL AlwaysData"],
        ]},
      ],
    },
    {
      id: "aa-importer-donnees",
      title: "Importer les données",
      blocks: [
        { type: "p", text: "Dans phpMyAdmin :" },
        { type: "list", items: [
          "1. Connecte-toi",
          "2. Clique sur ta base de données",
          '3. Va dans l\'onglet "Importer"',
          "4. Sélectionne ton fichier .sql (export local)",
          '5. Clique sur "Exécuter"',
        ]},
      ],
    },
    {
      id: "aa-requetes-sql-utiles",
      title: "Requêtes SQL utiles",
      blocks: [
        { type: "h", text: "Réinitialiser l'auto-incrément (optionnel)" },
        { type: "code", filename: "sql", language: "sql", code: `ALTER TABLE nom_de_la_table AUTO_INCREMENT = 3;` },
        { type: "note", variant: "info", text: "À utiliser uniquement si tu as supprimé des données ou que les IDs ne sont plus cohérents." },
        { type: "h", text: "Suppression forcée d'un utilisateur (avec dépendances)" },
        { type: "p", text: "On supprime d'abord les relations, puis l'utilisateur, pour éviter les erreurs de clé étrangère." },
        { type: "p", text: "Étape 1 — Supprimer les achats (table purchase) :" },
        { type: "code", filename: "sql", language: "sql", code: `DELETE FROM purchase
WHERE user_id = 9;` },
        { type: "p", text: "Cela supprime toutes les commandes liées à l'utilisateur." },
        { type: "p", text: "Étape 2 — Supprimer les leçons liées (table user_lesson) :" },
        { type: "code", filename: "sql", language: "sql", code: `DELETE FROM user_lesson
WHERE user_id = 9;` },
        { type: "p", text: "Cela enlève toutes les progressions ou liens utilisateur → leçons." },
        { type: "p", text: "Étape 3 — Supprimer l'utilisateur :" },
        { type: "code", filename: "sql", language: "sql", code: `DELETE FROM user
WHERE id = 9;` },
        { type: "p", text: "Suppression finale du compte utilisateur." },
      ],
    },
    {
      id: "aa-renommer-fichiers",
      title: "Renommer des fichiers du projet",
      blocks: [
        { type: "p", text: "Dans ton projet (local ou sur serveur), renomme les fichiers suivants pour les désactiver en production :" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────────────┐
│               FICHIERS À DÉSACTIVER EN PRODUCTION             │
├──────────────────────────────────────┬────────────────────────┤
│  Fichier original                    │  Renommer en           │
├──────────────────────────────────────┼────────────────────────┤
│  config/packages/debug.yaml          │  debug.yaml.bak        │
│  config/packages/web_profiler.yaml   │  web_profiler.yaml.bak │
│  routes/web_profiler.yaml            │  web_profiler.yaml.bak │
└──────────────────────────────────────┴────────────────────────┘`,
        },
        { type: "note", variant: "info", text: "Ces fichiers servent uniquement au développement, donc on les désactive en production." },
      ],
    },
    {
      id: "aa-ajouter-admin",
      title: "Ajouter un utilisateur admin",
      blocks: [
        { type: "p", text: "Dans phpMyAdmin (AlwaysData), exécute :" },
        { type: "p", text: "Ajouter le rôle ROLE_ADMIN :" },
        { type: "code", filename: "sql", language: "sql", code: `UPDATE app_users
SET roles = JSON_ARRAY_APPEND(roles, '$', 'ROLE_ADMIN')
WHERE email = 'admin@example.com'
AND JSON_CONTAINS(roles, '"ROLE_ADMIN"') = 0;` },
        { type: "p", text: "Activer le compte (is_verified) :" },
        { type: "code", filename: "sql", language: "sql", code: `UPDATE app_users
SET is_verified = 1
WHERE email = 'admin@example.com';` },
        { type: "h", text: "Comptes de connexion (exemple)" },
        { type: "table", headers: ["Rôle", "Email", "Mot de passe"], rows: [
          ["Admin", "admin@exemple.com", "Admin123@"],
          ["Client", "client@exemple.com", "Client123@"],
        ]},
        { type: "note", variant: "warning", text: 'Bonnes pratiques : Ne laisse jamais ces mots de passe en production (change-les après test). Vérifie que les rôles sont au format JSON : ["ROLE_USER", "ROLE_ADMIN"]. Toujours tester la connexion après modification.' },
      ],
    },
    {
      id: "aa-smtp-email",
      title: "Configuration SMTP/Email",
      blocks: [
        { type: "p", text: 'Dans AlwaysData, ajoute dans les "Variables d\'environnement" :' },
        { type: "code", filename: ".env", language: "bash", code: `MAILER_DSN=smtp://user@domain.net:motdepasse@smtp-votrecompte.alwaysdata.net:587?encryption=tls&auth_mode=login
MESSENGER_TRANSPORT_DSN=sync://` },
        { type: "note", variant: "warning", text: "Important : Le mot de passe SMTP doit être défini au premier usage. Vérifie que l'adresse email existe dans ton interface AlwaysData." },
        { type: "h", text: "Tester la connexion SMTP (SSH)" },
        { type: "p", text: 'Connexion SSH dans AlwaysData : Accès distant → SSH → "ouvrir dans le navigateur"' },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Utilisateur", "ton compte"],
          ["Mot de passe", "ton mot de passe SSH"],
        ]},
        { type: "p", text: "Test du serveur SMTP :" },
        { type: "code", filename: "terminal", language: "bash", code: `# Port TLS
telnet smtp.alwaysdata.net 587

# En SSL
telnet smtp.alwaysdata.net 465

# Résultat attendu
# Connected to smtp.alwaysdata.net` },
      ],
    },
    {
      id: "aa-filezilla-recap",
      title: "Connexion FileZilla (récapitulatif)",
      blocks: [
        { type: "h", text: "FTP" },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Hôte", "ftp-votrecompte.alwaysdata.net"],
          ["Utilisateur", "votrecompte"],
          ["Mot de passe", "ton mot de passe FTP"],
          ["Port", "21"],
          ["Dossier racine", "/www/public/"],
        ]},
        { type: "h", text: "SFTP (recommandé)" },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Protocole", "SFTP"],
          ["Port", "22"],
          ["Sécurité", "Via SSH"],
        ]},
      ],
    },
    {
      id: "aa-debug-symfony-prod",
      title: "Activer le mode debug Symfony en production",
      blocks: [
        { type: "note", variant: "warning", text: "À utiliser uniquement temporairement — Expose toutes les erreurs (risque sécurité)" },
        { type: "p", text: "Créer ou modifier le fichier public/index.php :" },
        { type: "code", filename: "public/index.php", language: "php", code: `<?php

use App\\Kernel;
use Symfony\\Component\\ErrorHandler\\Debug;
use Symfony\\Component\\HttpFoundation\\Request;

require dirname(__DIR__).'/vendor/autoload.php';

Debug::enable();

$kernel = new Kernel('dev', true);
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);` },
      ],
    },
    {
      id: "aa-configuration-stripe",
      title: "Configuration Stripe (paiement test)",
      blocks: [
        { type: "p", text: "Ajoute dans les variables d'environnement :" },
        { type: "code", filename: ".env", language: "bash", code: `STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx` },
        { type: "note", variant: "warning", text: "Important : Ces clés viennent de ton compte Stripe (tableau de bord → Développeurs → Clés API). Ne jamais utiliser les clés live en test. En production, remplacer les clés pk_test_ et sk_test_ par les clés pk_live_ et sk_live_." },
      ],
    },
  ],
};
