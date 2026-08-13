import type { Section } from "../types";
import { laConsoleSecurity } from "./laConsoleSecurity";
import { laConsoleArticlesSecurity } from "./laConsoleArticlesSecurity";
import { laConsoleArticles2Security } from "./laConsoleArticles2Security";
import { laConsoleArticles4Security } from "./laConsoleArticles4Security";
import { laConsoleArticles5Security } from "./laConsoleArticles5Security";
import { laConsoleArticles6Security } from "./laConsoleArticles6Security";

export const security: Section = {
  id: "securite",
  title: "Sécurité web",
  icon: "Lock",
  tags: [],
  subsections: [
    {
      id: "xss",
      title: "XSS",
      blocks: [
        { type: "p", text: "Une faille XSS permet d'injecter du JavaScript malveillant. Prévention : échapper les sorties, CSP, ne jamais injecter de HTML non filtré." },
        { type: "code", filename: "xss.js", language: "javascript", code: `// DANGEREUX : HTML brut fourni par l'utilisateur
element.innerHTML = commentaireUtilisateur; // a eviter
// SUR : insère uniquement du texte
element.textContent = commentaireUtilisateur;
// En-tête CSP : Content-Security-Policy: default-src 'self'` },
      ],
    },
    {
      id: "sqli",
      title: "Injection SQL",
      blocks: [
        { type: "code", filename: "sqli.php", language: "php", code: `<?php
// DANGEREUX : concaténation directe
$sql = "SELECT * FROM users WHERE email = '$email'";
// SUR : requête préparée (PDO)
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]); // les valeurs sont échappées` },
      ],
    },
    {
      id: "mdp",
      title: "Hachage des mots de passe",
      blocks: [
        { type: "code", filename: "mdp.js", language: "javascript", code: `const bcrypt = require("bcrypt");
// Hacher (jamais en clair, jamais MD5/SHA1)
const hash = await bcrypt.hash(motDePasse, 12); // 12 = cost factor
// Vérifier à la connexion
const valide = await bcrypt.compare(motDePasse, hash);` },
        { type: "note", variant: "warning", text: "N'utilisez jamais MD5 ou SHA1 pour les mots de passe : trop rapides à casser. Préférez bcrypt ou argon2." },
      ],
    },
    {
      id: "csrf-headers",
      title: "CSRF et en-têtes de sécurité",
      blocks: [
        { type: "code", filename: "headers.txt", language: "bash", code: `Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY           # empêche le clickjacking
X-Content-Type-Options: nosniff # empêche le MIME sniffing
Referrer-Policy: strict-origin
Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Strict` },
        { type: "list", items: ["Ne jamais committer le fichier .env (secrets).", "Valider et nettoyer toutes les entrées côté serveur.", "Utiliser HTTPS partout (Let's Encrypt, HSTS).", "Consulter régulièrement l'OWASP Top 10."] },
      ],
    },
    {
      id: "owasp-top-10",
      title: "OWASP — Top 10 des risques de sécurité",
      blocks: [
        { type: "p", text: "OWASP (Open Web Application Security Project) est une organisation à but non lucratif dont l'objectif est de travailler sur les problèmes de sécurité et de fournir des ressources gratuites (documentation, outils) pour aider à sécuriser les applications." },
        { type: "table", headers: ["#", "Risque"], rows: [
          ["A01", "Broken Access Control"],
          ["A02", "Cryptographic Failures"],
          ["A03", "Injection"],
          ["A04", "Insecure Design"],
          ["A05", "Security Misconfiguration"],
          ["A06", "Vulnerable and Outdated Components"],
          ["A07", "Identification and Authentication Failures"],
          ["A08", "Software and Data Integrity Failures"],
          ["A09", "Security Logging and Monitoring Failures"],
          ["A10", "Server-Side Request Forgery"],
        ]},
        { type: "h", text: "Injection SQL" },
        { type: "p", text: "L'injection SQL consiste à utiliser une requête SQL dynamique construite à partir d'un formulaire d'une page web (connexion utilisateur, recherche d'informations…) et à y ajouter une sous-requête pour obtenir, modifier ou même supprimer des données de la base." },
        { type: "h", text: "Échecs d'identification et d'authentification" },
        { type: "p", text: "Un sujet vaste, allant de :" },
        { type: "list", items: [
          "l'utilisation d'un mot de passe faible",
          "des informations sensibles non chiffrées transmises dans l'URL",
          "la non-invalidation de session…",
        ]},
        { type: "note", variant: "info", title: "Projet de recherche", text: "Sur les 10 risques de sécurité, rechercher les 8 autres pour mieux comprendre leurs impacts. L'OWASP n'est qu'un groupe d'experts parmi d'autres — chercher d'autres sources et croiser les informations. Comparer la liste de 2021 avec la précédente." },
        { type: "h", text: "Le facteur humain" },
        { type: "p", text: "L'un des maillons les plus faibles d'une stratégie de sécurité est l'utilisateur." },
        { type: "list", items: [
          "Un seul faux pas peut avoir des conséquences très profondes (ex : mot de passe compromis → des attaquants entrent dans le système)",
          "Autre exemple : utilisation d'un périphérique externe sur un environnement sécurisé (brancher une clé USB sur un ordinateur relié à un système)",
        ]},
        { type: "note", variant: "warning", title: "Fatalité de la programmation", text: "Tout système de sécurité créé peut être déconstruit, avec suffisamment de temps. La sécurité est un sujet en constante évolution." },
      ],
    },
    {
      id: "owasp-testing-guide",
      title: "OWASP Testing Guide (WSTG)",
      blocks: [
        { type: "p", text: "L'Open Web Application Security Project (OWASP) est une organisation mondiale fondée en 2004. Elle évalue les dix principaux risques de sécurité pour les applications web. Les attaques web exploitent des failles de sécurité (vulnérabilités) dans les applications web. L'OWASP Top Ten est un document classant les attaques web les plus courantes et les contre-mesures associées." },
        { type: "h", text: "Qu'est-ce que l'OWASP Testing Guide ?" },
        { type: "p", text: "Le OWASP Web Security Testing Guide Project (WSTG) est un guide pour tester la sécurité des applications web. Créé grâce aux efforts collaboratifs de professionnels de la cybersécurité et de bénévoles, le WSTG fournit un cadre de bonnes pratiques et de techniques de test." },
        { type: "p", text: "Chapitre 2 — Techniques : couvre les principes du test et explique les différentes techniques de test. Ce chapitre aborde aussi l'intégration des tests de sécurité dans les flux de développement et de test, ainsi que l'analyse des données de test de sécurité." },
        { type: "h", text: "Chapitre 3 — Le cadre (phases de test)" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│              OWASP TESTING FRAMEWORK — PHASES           │
├─────────────────────────────────────────────────────────┤
│  Phase 1 : Before Development Begins                    │
│  Phase 2 : During Definition and Design                 │
│  Phase 3 : During Development                          │
│  Phase 4 : During Deployment                           │
│  Phase 5 : Maintenance and Operations                  │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Chapitre 4 — Web Application Security Testing" },
        { type: "p", text: "Pour chaque type de test ci-dessous, le guide décrit le contexte et les objectifs du test et propose une méthode pour le réaliser :" },
        { type: "list", items: [
          "Configuration and Deployment Management Testing",
          "Identity Management Testing",
          "Authentication Testing",
          "Authorization Testing",
          "Session Management Testing",
          "Input Validation Testing",
          "Testing for Error Handling",
          "Testing for weak Cryptography",
          "Business Logic Testing",
          "Client Side Testing",
        ]},
        { type: "h", text: "Chapitre 5 — Le rapport" },
        { type: "p", text: "Un rapport doit être facile à comprendre et mettre en évidence tous les risques. Il doit contenir trois sections principales :" },
        { type: "list", items: [
          "Executive Summary — résume les conclusions générales, dans un langage adapté aux non-techniciens",
          "Test Parameters — objectif du test, périmètre, timing, cibles, limitations rencontrées",
          "Findings — informations techniques détaillées sur les vulnérabilités trouvées et actions nécessaires pour les résoudre",
        ]},
        { type: "h", text: "Utiliser l'API OWASP" },
        { type: "p", text: "OWASP propose une API appelée OWASP Enterprise Security API (ESAPI), utilisable pour sécuriser ses applications web. Pour un projet Node.js, il existe un dépôt d'API spécifique." },
        { type: "note", variant: "info", text: "L'OWASP Testing Guide fournit un cadre et des techniques de test, et explique la chronologie des activités de test à réaliser à chaque phase." },
      ],
    },
    {
      id: "sec-cookies-sessions",
      title: "Cookies et gestion de session",
      blocks: [
        { type: "p", text: "Un cookie est un petit fichier stocké dans le navigateur de l'utilisateur et associé à un site web. Il est automatiquement renvoyé lors des requêtes vers le même domaine." },
        { type: "h", text: "Utilisation" },
        { type: "list", items: ["Mémoriser un identifiant client (Session)", "Mémoriser des préférences ou du contenu", "Suivi utilisateurs (analytics)"] },
        { type: "h", text: "Sécurité des cookies" },
        { type: "table", headers: ["Attribut", "Rôle"], rows: [
          ["Secure", "Cookie envoyé uniquement via HTTPS"],
          ["HttpOnly", "Inaccessible via JS (protège contre XSS)"],
          ["SameSite", "Contrôle l'envoi du cookie entre sites"],
        ]},
        { type: "h", text: "SameSite — valeurs possibles" },
        { type: "table", headers: ["Valeur", "Comportement"], rows: [
          ["Strict", "Cookie jamais envoyé depuis un autre site"],
          ["Lax", "Cookie envoyé dans certains cas (navigation par lien…)"],
          ["None", "Cookie envoyé dans tous les contextes (doit être Secure)"],
        ]},
        { type: "note", variant: "info", title: "CSRF", text: "SameSite limite les attaques CSRF en empêchant l'envoi automatique des cookies lors de requêtes inter-sites." },
        { type: "h", text: "Express-session (Node / Express)" },
        { type: "p", text: "Module côté serveur qui permet de gérer les sessions utilisateur." },
        {
          type: "diagram",
          content: `CLIENT                          SERVEUR
  |                                |
  |--- requête avec cookie ID ---->|
  |                                |--- recherche données session en mémoire
  |<-- réponse (données user) -----|`,
        },
        { type: "list", items: [
          "Un identifiant de session est stocké dans un cookie côté client",
          "Les données de session sont stockées côté serveur",
          "Le serveur associe l'ID du cookie aux données utilisateur",
        ]},
        { type: "code", filename: "express-session.jsx", language: "jsx", code: `var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));` },
        { type: "h", text: "sessionStorage" },
        { type: "p", text: "Objet du navigateur (window.sessionStorage) permettant de stocker des données pour la durée de la session de navigation en cours." },
        { type: "list", items: [
          "Valide uniquement pour l'onglet ouvert",
          "Partagé uniquement entre pages du même domaine",
          "Les données sont supprimées automatiquement à la fermeture de l'onglet",
        ]},
        { type: "h", text: "Déclarer un cookie avec JS" },
        { type: "p", text: "Créer / modifier un cookie :" },
        { type: "code", filename: "set-cookie.jsx", language: "jsx", code: `let date = new Date(Date.now() + 86400000); // 1 jour
date = date.toUTCString();
document.cookie = "user=Jim; path=/; domain=jim.com; SameSite=Strict; Secure; expires=" + date;` },
        { type: "p", text: "Supprimer un cookie :" },
        { type: "code", filename: "delete-cookie.jsx", language: "jsx", code: `document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";` },
        { type: "h", text: "Cookies de session avec Express" },
        { type: "p", text: "Voir les cookies : dans le navigateur → DevTools → Application → Cookies. Montre les cookies stockés sur la machine utilisateur." },
        { type: "code", filename: "cookie-session.jsx", language: "jsx", code: `var cookieSession = require('cookie-session'); // Créer session utilisateur
var express = require('express');              // Stocké dans un cookie
var app = express();                           // Géré par Express (serveur)

app.use(cookieSession({
  name: 'session',
  keys: ['secretKey'],
  maxAge: 24 * 60 * 60 * 1000 // Durée de vie du cookie 24h
}));` },
      ],
    },
    {
      id: "sec-guide-securisation-codage",
      title: "Guide de sécurisation et codage sécurisé",
      blocks: [
        { type: "p", text: "La sécurisation d'une application consiste à protéger les accès, les données et les identités des utilisateurs afin d'éviter toute intrusion ou utilisation malveillante." },
        { type: "h", text: "Sécurité liée à l'authentification" },
        { type: "list", items: [
          "Obligation d'un mot de passe complexe",
          "Les mots de passe doivent être chiffrés et non stockés en clair",
          "Mise en place d'une authentification forte (2FA) — validation via application ou code externe",
          "Utilisation de systèmes d'authentification tiers (OAuth) — Ex : Google, Facebook",
        ]},
        { type: "h", text: "Gestion des autorisations" },
        { type: "list", items: ["Attribution de droits précis selon les besoins", "Principe du moindre privilège (accès limité au strict nécessaire)", "Gestion des rôles et permissions"] },
        { type: "h", text: "Sécurisation de la configuration" },
        { type: "list", items: [
          "Ne jamais stocker d'identifiants en dur dans le code",
          "Utiliser des fichiers de configuration externes",
          "Séparer la configuration du code source",
          "Gestion via outils de versioning (Git, GitHub, Bitbucket…)",
        ]},
        { type: "h", text: "Codage sécurisé (Secure Coding)" },
        { type: "p", text: "Le codage sécurisé consiste à développer une application en prenant en compte les risques de sécurité dès la conception, afin d'éviter les failles et les comportements inattendus." },
        {
          type: "diagram",
          content: `Conception → Développement → Tests → Déploiement
    ↑              ↑            ↑          ↑
 Sécurité       Sécurité    Sécurité   Sécurité
 intégrée       du code     des cas    du serveur`,
        },
        { type: "list", items: [
          "Gestion des interactions utilisateur — ne jamais faire confiance aux données saisies",
          "Validation des données — vérifier et filtrer tous les champs, bloquer les données incorrectes",
          "Gestion des erreurs — prévoir les cas d'erreurs, éviter les crashs",
          "Maintenance et mises à jour — mettre à jour régulièrement les bibliothèques, corriger les failles connues",
        ]},
        { type: "h", text: "Codage défensif (Defensive Programming)" },
        { type: "p", text: "Le codage défensif consiste à écrire du code en anticipant les erreurs, les mauvaises utilisations et les comportements imprévus afin de garantir la fiabilité et la sécurité de l'application." },
        { type: "list", items: [
          "Revue de code — vérifier le code écrit par soi-même et par les autres, relire plusieurs semaines après",
          "Tests du code — automatiques ou manuels, cas normaux et cas d'erreur",
          "Esprit critique du développeur — considérer que son propre code peut contenir des erreurs",
          "Éviter la sur-optimisation — garder un code simple, lisible et maintenable",
        ]},
        { type: "h", text: "Optimisation de la sécurité" },
        { type: "list", items: [
          "Gestion des entrées utilisateur — ne jamais faire confiance, toujours valider et filtrer",
          "Mise à jour des dépendances — corriger les failles connues, éviter les versions obsolètes",
        ]},
        { type: "h", text: "Outils et bonnes pratiques de sécurité" },
        { type: "list", items: [
          "Outils de scan (Snyk Code) — analyse automatique des failles, rapports détaillés",
          "Veille technologique permanente — surveillance des nouvelles failles et menaces",
          "Responsabilités et obligations — respect des obligations légales, sécurisation des données utilisateurs",
          "Conséquences d'une faille — perte/vol de données, atteinte réputation, responsabilité juridique",
        ]},
      ],
    },
    {
      id: "sec-sgbd-sauvegarde-integrite",
      title: "Sécurisation SGBD, sauvegardes et intégrité des données",
      blocks: [
        { type: "p", text: "La sécurisation d'un SGBD consiste à protéger les bases de données contre les accès non autorisés, les erreurs de configuration et les risques de perte ou de vol de données." },
        {
          type: "diagram",
          content: `SGBD — Couches de sécurité
┌─────────────────────────────────┐
│  Super Admin (droits complets)  │
├─────────────────────────────────┤
│  Admins (rôles limités)         │
├─────────────────────────────────┤
│  Utilisateurs (droits précis)   │
├─────────────────────────────────┤
│  Données (accès restreint)      │
└─────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Configuration du SGBD — vérifier les paramètres après les mises à jour",
          "Gestion des utilisateurs — droits spécifiques, suppression des comptes inutilisés",
          "Gestion des permissions — principe du moindre privilège",
          "Rôle administrateur — super administrateur utilisé uniquement si nécessaire",
          "Maintenance — nettoyer régulièrement les comptes, surveiller les accès",
        ]},
        { type: "h", text: "Plan de sauvegarde des données" },
        { type: "p", text: "Un plan de sauvegarde consiste à organiser la copie et la conservation des données afin de garantir leur sécurité et leur restauration en cas de problème." },
        { type: "list", items: [
          "Généralement 2 à 3 copies de la base de données, stockées sur différents supports",
          "Sauvegarde quotidienne ou fréquente des données importantes",
          "Sauvegarde complète (hebdomadaire ou adaptée selon les besoins)",
        ]},
        { type: "note", variant: "success", title: "Objectif", text: "Garantir la sécurité et la disponibilité des données, permettre une restauration rapide, assurer l'intégrité des données." },
        { type: "h", text: "Sécurisation des transactions et des données" },
        { type: "p", text: "Une transaction est un ensemble d'opérations exécutées sur une base de données de manière cohérente et sécurisée, garantissant l'intégrité des données." },
        {
          type: "diagram",
          content: `TRANSACTION
┌──────────────────────────────────────────────┐
│ Opération 1 → Opération 2 → Opération 3      │
│                                              │
│  ✅ Tout OK  → COMMIT (enregistré)           │
│  ❌ Erreur   → ROLLBACK (tout annulé)        │
└──────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Une transaction regroupe plusieurs opérations liées",
          "Elle est exécutée entièrement ou annulée en cas d'erreur",
          "Types de restauration : partielle, complète, vérification régulière de l'intégrité",
        ]},
        { type: "h", text: "L'intégrité des données" },
        { type: "p", text: "L'intégrité des données est le fait de conserver les données exactes, complètes et non modifiées de manière non autorisée, qu'elle soit volontaire ou accidentelle." },
        { type: "list", items: [
          "Cryptographie et hachage — clé unique et secrète, toute modification rend la vérification invalide",
          "Base de données sécurisée — procédures de contrôle, validation des entrées",
          "Choix des types de données — éviter les pertes de précision",
        ]},
        { type: "h", text: "Les enjeux de la sécurisation des données" },
        { type: "list", items: [
          "Intégration des données — bonne organisation, éviter erreurs/incohérences",
          "Protection des données — contre accès non autorisés, garantir confidentialité",
        ]},
      ],
    },
    {
      id: "sec-aspects-application-rgpd",
      title: "Aspects de la sécurité d'une application et RGPD",
      blocks: [
        {
          type: "diagram",
          content: `SÉCURITÉ APPLICATION
├── 1. Authentification       → Vérifier l'identité
├── 2. Droits d'accès         → Limiter les permissions
├── 3. Intégrité des données  → Empêcher les modifications
├── 4. Confidentialité        → Chiffrer les échanges
├── 5. Non-répudiation        → Tracer les actions (logs)
└── 6. Sécurité réseau        → Chiffrer les communications`,
        },
        { type: "list", items: [
          "Authentification — vérification de l'identité, garantir que chaque utilisateur est bien identifié",
          "Gestion des droits d'accès — limiter l'accès aux fonctionnalités nécessaires",
          "Intégrité des données — garantir que les données ne sont pas modifiées sans autorisation",
          "Confidentialité — chiffrement lors des échanges sur les réseaux",
          "Non-répudiation — garder une trace des actions effectuées",
          "Sécurité des échanges réseau — chiffrement, protection contre l'interception",
        ]},
        { type: "h", text: "Sécuriser mes données" },
        { type: "p", text: "Principaux risques : authentification faible (mots de passe faciles ou volés), mauvaise gestion des droits d'accès, mauvaise configuration du programme ou du système." },
        { type: "h", text: "Respect du RGPD" },
        { type: "p", text: "Le RGPD (en vigueur depuis le 25 mai 2018) est un règlement européen qui encadre la collecte et le traitement des données personnelles. Il s'applique à toute organisation publique ou privée, en Europe ou hors UE si elle traite des données de citoyens européens, que les données soient traitées directement ou via un sous-traitant." },
        { type: "p", text: "Un traitement de données personnelles peut être : collecte, traitement, transfert, conservation, modification, consultation. Le traitement n'est pas forcément informatique (il peut être manuel)." },
        { type: "p", text: "Le RGPD concerne uniquement les personnes physiques (pas les entreprises). Une donnée personnelle est toute information permettant d'identifier une personne : nom/prénom, adresse, numéro de sécurité sociale, adresse IP, photo/image, données croisées permettant l'identification." },
        { type: "table", headers: ["Droit", "Description"], rows: [
          ["Portabilité", "Récupérer ses données pour les transférer à un autre service"],
          ["Notification en cas de fuite", "L'organisme doit informer rapidement les personnes concernées"],
          ["Réparation", "Porter plainte ou demander une compensation en cas d'abus"],
        ]},
        { type: "p", text: "Le DPO (Data Protection Officer) = Délégué à la protection des données. Ses missions : contrôler le respect du RGPD, conseiller l'organisation, servir d'intermédiaire avec la CNIL, répondre aux autorités de contrôle." },
        { type: "note", variant: "info", title: "Autorité de contrôle", text: "En France, l'organisme responsable est la CNIL. Elle contrôle les entreprises, sanctionne en cas de non-respect, protège les droits des citoyens." },
      ],
    },
    {
      id: "sec-securiser-site-app-code",
      title: "Sécuriser un site web / une application et son code",
      blocks: [
        { type: "h", text: "1. Utilisation de TLS / HTTPS" },
        { type: "p", text: "Le protocole TLS (HTTPS) est obligatoire pour : l'authentification des sites, les formulaires (mots de passe, données personnelles), la transmission de données sensibles. Les échanges passent généralement par le port 443 (HTTPS)." },
        { type: "h", text: "2. Désactivation SSL / SSH" },
        { type: "p", text: "Il ne faut jamais désactiver : SSL/TLS (sécurise les échanges web), SSH (sécurise l'accès serveur). Les désactiver rend le serveur vulnérable aux attaques." },
        { type: "h", text: "3. Flux réseau" },
        { type: "p", text: "Les communications entre client et serveur passent par des requêtes HTTP/HTTPS. Sur HTTPS, les données sont chiffrées." },
        { type: "h", text: "Sécurité d'une application" },
        { type: "list", items: [
          "Authentification — vérifier l'identité, gestion des comptes et sessions",
          "Gestion des droits d'accès — principe du moindre privilège",
          "Intégrité des données — garantir que les données ne sont pas modifiées illégalement",
          "Confidentialité — chiffrement des données (en transit et parfois au repos)",
          "Non-répudiation — historique des actions utilisateurs, logs sécurisés",
          "Analyse des échanges réseau — détection d'interceptions (man-in-the-middle)",
        ]},
        { type: "h", text: "Sécurisation du code" },
        { type: "list", items: [
          "Validation des entrées utilisateur — éviter injections, données incohérentes",
          "Encodage / échappement — encoder < et > évite les attaques XSS",
          "Vérification des données — âge > 0, nom non vide, format correct",
          "Mise à jour des dépendances — garder les bibliothèques à jour",
          "Outils de sécurité — scanners de vulnérabilités (Snyk), analyse automatique",
        ]},
        { type: "h", text: "Limiter les failles de sécurité" },
        { type: "list", items: [
          "Gestionnaire de mots de passe — générer des mots de passe forts et uniques",
          "Utilisation de HTTPS dès le développement",
          "Limiter les flux réseau et accès IP — restreindre les accès, autoriser uniquement les IP nécessaires",
          "Contrôle des données utilisateurs — vérifier toutes les données saisies",
          "Validation et filtrage — nettoyer les entrées, éviter injections SQL/XSS",
        ]},
        { type: "note", variant: "info", title: "Veille et conformité", text: "CNIL (protection des données personnelles) et ANSSI (cybersécurité en France) permettent de rester informé des nouvelles menaces et obligations." },
        { type: "h", text: "Intégrité des données" },
        { type: "p", text: "L'intégrité des données signifie que les données doivent être exactement conservées et transmises sans modification. Une donnée doit rester identique entre son envoi et sa réception." },
        {
          type: "diagram",
          content: `Envoi      →   Stockage   →   Réception
[Donnée A]     [Donnée A]     [Donnée A]  ✅ Intègre
[Donnée A]     [Donnée A]     [Donnée B]  ❌ Altérée`,
        },
        { type: "h", text: "Code sécurisé — Résumé" },
        { type: "list", items: [
          "Être strict (non permissif) — vérifier toutes les entrées, refuser les formats incorrects, ne jamais faire confiance aux données reçues",
          "Mettre à jour régulièrement — garder les bibliothèques à jour",
          "Code défensif — écrire comme si toutes les entrées peuvent être malveillantes ou incorrectes",
        ]},
      ],
    },
    {
      id: "sec-acces-donnees-utilisateur-poste",
      title: "Sécuriser ses accès et ses données (poste et navigation)",
      blocks: [
        { type: "h", text: "Antivirus" },
        { type: "list", items: ["Utiliser un antivirus à jour", "Protéger contre virus, malwares et attaques"] },
        { type: "h", text: "Vérification des sites" },
        { type: "list", items: ["Vérifier l'URL avant de saisir des données", "Utiliser uniquement des sites en HTTPS"] },
        { type: "h", text: "Gestion des mots de passe" },
        { type: "list", items: ["Utiliser un gestionnaire de mots de passe", "Créer des mots de passe forts et uniques", "Ne jamais réutiliser le même mot de passe"] },
        { type: "h", text: "Double authentification (2FA)" },
        { type: "list", items: ["Ajouter une couche de sécurité supplémentaire", "Code SMS, application ou clé de sécurité"] },
        { type: "h", text: "Sécurité réseau et navigation" },
        { type: "list", items: [
          "Wi-Fi publics — éviter les réseaux non sécurisés, risque d'interception",
          "Mise à jour système — OS et navigateur à jour",
          "Mots de passe dans le navigateur — désactiver l'enregistrement automatique",
          "Déconnexion des services sensibles — surtout sur appareils partagés",
          "Extensions navigateur — vérifier permissions, supprimer les inutiles ou suspectes",
        ]},
        { type: "h", text: "Vigilance utilisateur" },
        { type: "list", items: [
          "Phishing — se méfier des messages suspects, ne pas cliquer sur liens inconnus",
          "Données personnelles — limiter les infos partagées, utiliser des alias email",
          "Surveillance des comptes — activer les alertes de connexion",
        ]},
        { type: "h", text: "Protection et conformité" },
        { type: "list", items: ["Vérifier les politiques CNIL", "S'assurer du respect du RGPD"] },
        { type: "h", text: "Nettoyage et confidentialité" },
        { type: "list", items: ["Effacer régulièrement les cookies", "Supprimer les données de navigation sensibles"] },
      ],
    },
    {
      id: "sec-securiser-mon-site-defense-profondeur",
      title: "Sécuriser mon site web — Défense en profondeur",
      blocks: [
        { type: "h", text: "Chiffrement des échanges" },
        { type: "list", items: ["HTTPS obligatoire — chiffrer les communications, empêcher l'interception"] },
        { type: "h", text: "Gestion des ports et accès" },
        {
          type: "diagram",
          content: `Ports importants :
Port 80  → HTTP  (non sécurisé) ❌
Port 443 → HTTPS (sécurisé)     ✅`,
        },
        { type: "list", items: [
          "Garder uniquement les ports nécessaires",
          "Limiter l'accès aux ressources sensibles — principe du moindre privilège",
        ]},
        { type: "h", text: "Sécurité des entrées et du code" },
        { type: "list", items: [
          "Validation des données utilisateur — filtrer et valider toutes les entrées",
          "Protection contre attaques courantes — XSS, SQL injection, CSRF",
          "Désactiver fonctions inutiles — réduire la surface d'attaque",
          "Maintenance et mises à jour — corriger les failles connues",
          "Sauvegardes régulières — stockage sécurisé, test de restauration",
          "Surveillance et logs — détecter les comportements suspects",
          "Protection des données — sécuriser les BDD, chiffrer les données sensibles",
          "Gestion des sessions — expiration automatique, protection contre le vol de session",
          "Gestion des erreurs — messages génériques côté utilisateur",
        ]},
        { type: "h", text: "Défense en profondeur" },
        {
          type: "diagram",
          content: `Couches de sécurité :
┌──────────────┐
│   Réseau     │  ← Pare-feu, filtrage IP
├──────────────┤
│   Serveur    │  ← SSH sécurisé, mises à jour
├──────────────┤
│  Application │  ← Validation entrées, auth
├──────────────┤
│   Données    │  ← Chiffrement, backup
└──────────────┘`,
        },
        { type: "h", text: "En-têtes de sécurité HTTP" },
        { type: "list", items: ["Content Security Policy (CSP)", "X-Frame-Options", "HSTS", "Renforcent la sécurité du navigateur"] },
        { type: "h", text: "Tests de sécurité et permissions" },
        { type: "list", items: ["Audits réguliers, tests de pénétration, analyse du code", "Permissions serveur — gérer droits fichiers/dossiers"] },
      ],
    },
    {
      id: "sec-maj-logiciels-data-breach",
      title: "Mise à jour des logiciels et réaction en cas de vol de données",
      blocks: [
        { type: "list", items: [
          "Principe général — mettre à jour régulièrement, corriger les failles, améliorer stabilité",
          "Nettoyage et optimisation — supprimer éléments inutilisés, réduire la surface d'attaque",
          "Réactivité face aux failles — appliquer rapidement les correctifs",
          "Gestion des technologies — migrer vers des versions supportées",
          "Sauvegardes avant mise à jour — permettre un retour en arrière",
          "Environnements de test — staging avant production",
          "Gestion des permissions — moindre privilège",
          "Surveillance et alertes — monitoring, alertes en cas de problème",
          "Documentation et suivi — historique des changements",
          "Sensibilisation des utilisateurs — éviter les erreurs humaines (phishing)",
        ]},
        { type: "h", text: "Réaction en cas de vol de données (data breach)" },
        {
          type: "diagram",
          content: `PROCESSUS DE RÉPONSE À INCIDENT
 1. Déclaration CNIL (< 72h)
 2. Notification des victimes
 3. Support aux victimes
 4. Isolation technique
 5. Analyse de l'incident
 6. Communication transparente
 7. Mesures correctives
 8. Amélioration des procédures
 9. Documentation complète
10. Coordination autorités
11. Gestion réputation
12. Assurance cybersécurité
13. Suivi post-incident
14. Formation continue`,
        },
        { type: "list", items: [
          "Déclaration obligatoire à la CNIL — délai maximum 72 heures après détection",
          "Information des personnes concernées — notifier les utilisateurs impactés",
          "Support aux victimes — hotline, portail, assistance",
          "Réaction technique immédiate — isolation de la source, blocage de l'attaque",
          "Analyse de l'incident — identifier l'origine, comprendre l'ampleur",
          "Communication transparente — informer les partenaires, éviter la désinformation",
          "Mesures correctives — corriger les failles exploitées",
          "Amélioration des procédures — revoir les politiques de sécurité",
          "Documentation de l'incident — date, heure, type de données touchées, rapport complet",
          "Coordination avec les autorités — coopérer, respecter les obligations légales",
          "Gestion de la réputation — plan de communication de crise",
          "Assurance cybersécurité — couverture des risques financiers",
          "Suivi post-incident — surveillance renforcée, prévention des récidives",
          "Formation continue — sensibilisation des équipes",
        ]},
      ],
    },
    {
      id: "sec-bonnes-pratiques-dev-mdp",
      title: "Bonnes pratiques de sécurité développeur et protection des mots de passe",
      blocks: [
        { type: "list", items: [
          "Gestion des accès — contrôler strictement les droits, moindre privilège",
          "Sécurisation des serveurs — hardening, ne pas exposer les environnements de test en production",
          "Protection des données — chiffrer les données sensibles",
          "Tests et contrôle qualité — tests réguliers, audits, code review obligatoire",
          "Gestion des incidents (PRA/DRP) — Plan de Reprise d'Activité / Disaster Recovery Plan",
          "Surveillance et alertes — monitoring continu, détection d'anomalies",
          "Sécurité des API et services tiers — vérifier les API utilisées, contrôler les dépendances",
          "Sécurité réseau et physique — sécuriser les réseaux internes, contrôler les accès physiques",
          "Conformité réglementaire — respect du RGPD",
          "Sensibilisation des utilisateurs — formation à la cybersécurité",
        ]},
        { type: "h", text: "Protection des mots de passe" },
        { type: "list", items: [
          "Éviter les mots de passe personnels (prénom, date, etc.), ne pas utiliser de mots du dictionnaire",
          "Complexité : minimum 16 caractères, majuscules + minuscules + chiffres + caractères spéciaux",
        ]},
        { type: "code", filename: "exemple-mdp.txt", language: "text", code: `T8!kQz#9LmP2@xY7` },
        { type: "list", items: [
          "Résistance aux attaques — protection contre brute force, un mot de passe unique par compte",
          "Gestion sécurisée — gestionnaire de mots de passe, stockage chiffré",
          "Authentification forte — activation de la double authentification (2FA)",
          "Politique de renouvellement — changement régulier, surveiller les connexions suspectes",
          "Surveillance — alertes de connexion, détection des tentatives inhabituelles",
        ]},
      ],
    },
    {
      id: "sec-serveur-dedie-hebergeur",
      title: "Sécurisation d'un serveur dédié et de son hébergeur web",
      blocks: [
        { type: "list", items: [
          "Hébergement et contrôle — privilégier un serveur dédié, plus de contrôle sur la sécurité",
          "Mise à jour du système — appliquer les patchs de sécurité",
          "Configuration du serveur web — maîtriser Apache HTTP Server, fichiers .conf et .htaccess",
          "Réduction de la surface d'attaque — supprimer les services inutiles (FTP, messagerie), désactiver les ports inutiles",
          "Pare-feu et filtrage — autoriser uniquement les ports nécessaires (ex: 443)",
          "Surveillance et détection — IDS/IPS, bloquer automatiquement les attaques répétées",
          "Sauvegardes — stockage sécurisé, idéalement externe",
          "Certificats SSL/TLS — utiliser HTTPS, renouveler avant expiration",
          "Logs et alertes — surveiller, détecter rapidement les anomalies",
          "Sécurisation SSH — désactiver la connexion root, changer le port par défaut, authentification par clé",
          "Sécurité réseau — segmenter le réseau, utiliser un VPN pour l'administration distante",
        ]},
        { type: "h", text: "Sécuriser mon hébergeur web" },
        { type: "list", items: [
          "Responsabilité du développeur — responsable de la sécurité du site et de l'hébergement",
          "Risques principaux — intrusion, vol de données, utilisation comme relais d'attaque, perte de disponibilité",
          "Détection et réactivité — bloquer l'accès, corriger la faille immédiatement",
          "Configuration sécurisée du serveur — désactiver les options inutiles, limiter accès",
          "Tests et audits de sécurité — pentests réguliers",
          "Sauvegardes et plan de reprise (PRA)",
          "Gestion des utilisateurs — rôles (admin, user), supprimer les comptes inutiles",
          "Conformité sécurité et RGPD — suivi des recommandations de la CNIL",
          "Monitoring et alerting — surveillance continue, analyse des logs",
        ]},
      ],
    },
    {
      id: "sec-attaques-web-pirates",
      title: "Principales attaques web, types de pirates et conséquences",
      blocks: [
        { type: "p", text: "Une grande partie du trafic web passe par les API → leur sécurisation est critique." },
        { type: "table", headers: ["Attaque", "Description", "Protection"], rows: [
          ["DoS / DDoS", "Surcharge le serveur pour le rendre indisponible", "Rate limiting, WAF, CDN (Cloudflare)"],
          ["Brute force", "Test automatique de combinaisons de mots de passe", "Limiter tentatives, CAPTCHA, 2FA"],
          ["XSS", "Injection de JS malveillant dans une page", "Valider entrées, échapper < >, headers sécurité"],
          ["SQL Injection", "Injection SQL pour lire/modifier/supprimer des données", "Requêtes préparées, validation entrées"],
          ["Injection de code", "Injection forçant l'exécution de code", "Filtrer entrées, limiter permissions"],
          ["MITM", "Interception client/serveur", "TLS/HTTPS, certificats valides"],
          ["IDOR", "Accès direct à une ressource sans vérification", "Vérifier permissions côté serveur"],
          ["CSRF", "Requête forgée depuis un autre site", "SameSite cookie, token CSRF"],
        ]},
        { type: "h", text: "Attaques DoS (Denial of Service)" },
        { type: "p", text: "Types d'attaques : saturation de bande passante, flood de requêtes (HTTP, API), SYN flood, ICMP flood, attaques applicatives, attaques pair-à-pair. Protection : rate limiting, pare-feu / WAF, CDN (ex : Cloudflare)." },
        { type: "p", text: "Attaque par brute force : test automatique de toutes les combinaisons de mots de passe. Protection : limiter les tentatives, CAPTCHA, 2FA, mots de passe forts." },
        { type: "p", text: "XSS (Cross-Site Scripting) : injection de code JavaScript malveillant dans un site web, exécuté dans le navigateur de la victime. Peut voler : cookies de session, authentification, informations personnelles." },
        { type: "p", text: "Injection SQL : injection de code SQL pour lire, modifier et supprimer des données, ou contourner l'authentification. Protection : requêtes préparées (prepared statements), validation des entrées. Principe : never trust user input." },
        { type: "p", text: "Failles d'authentification : mauvaise gestion des connexions (sessions, mots de passe). Protection : 2FA, gestion sécurisée des sessions." },
        { type: "p", text: "Man-in-the-Middle (MITM) : un attaquant intercepte la communication entre client et serveur. Protection : chiffrement TLS (HTTPS), certificats valides." },
        { type: "p", text: "IDOR (Insecure Direct Object Reference) : accès direct à une ressource sans vérification des droits (ex: changer un ID dans une URL). Protection : vérifier les permissions côté serveur." },
        { type: "h", text: "Types de pirates informatiques" },
        { type: "table", headers: ["Type", "Motivation", "Activités"], rows: [
          ["Cybercriminel", "Gain financier", "Vol de données, ransomware, revente d'accès"],
          ["Script kiddie", "Amusement", "Utilise des outils existants, attaques superficielles"],
          ["Hacktiviste", "Politique/idéologique", "Defacement, publication de données, pression"],
          ["White Hat", "Améliorer la sécurité", "Détecter failles, alerter entreprises (légal)"],
          ["Grey Hat", "Entre légal et illégal", "Découvre failles sans autorisation, peut divulguer"],
        ]},
        { type: "h", text: "Conséquences des cyberattaques" },
        { type: "list", items: [
          "Impact sur le site web — défiguration (defacement), perte de disponibilité, dysfonctionnement",
          "Atteinte aux données — vol de données sensibles, altération, suppression",
          "Accès non autorisé — prise de contrôle de comptes, escalade de privilèges",
          "Infection et compromission — installation de malwares, prise de contrôle du serveur",
          "Atteinte à la confidentialité — interception des échanges, fuite d'informations",
          "Exploitation des ressources — botnet, minage, saturation",
          "Impact financier — coûts de réparation, perte de CA, sanctions (RGPD)",
          "Impact sur l'image — réputation dégradée, perte de confiance",
        ]},
      ],
    },
    {
      id: "sec-helmet-pentest-scan",
      title: "Sécurisation Node.js (Helmet), Pentest et scan de vulnérabilités",
      blocks: [
        { type: "h", text: "Sécurisation des applications Node.js avec Helmet" },
        { type: "p", text: "Helmet ajoute des headers HTTP de sécurité." },
        { type: "code", filename: "install-helmet.sh", language: "bash", code: `npm install helmet` },
        { type: "code", filename: "use-helmet.jsx", language: "jsx", code: `const helmet = require('helmet');
app.use(helmet());` },
        { type: "h", text: "Tests d'intrusion (Pentest)" },
        { type: "p", text: "Un test d'intrusion (pentest) est un processus encadré par la loi permettant de : simuler une attaque réelle, identifier les failles de sécurité, proposer des corrections." },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Boîte noire", "Aucune info sur la cible"],
          ["Boîte blanche", "Accès complet au code/infra"],
          ["Boîte grise", "Accès partiel"],
        ]},
        { type: "p", text: "Périmètre : serveur, application, réseau, IP publiques. Aspect légal : autorisation écrite obligatoire, sans accord = illégal." },
        {
          type: "diagram",
          content: `1. Reconnaissance       → Identifier les cibles (IP, domaine)
2. Scan des ports       → Nmap : détecter ports ouverts et services
3. Scan vulnérabilités  → Nessus : analyser les failles
4. Analyse résultats    → Identifier vulnérabilités exploitables
5. Rapport              → Documenter failles, criticité, recommandations
6. Actions correctives  → Corriger et renforcer`,
        },
        { type: "p", text: "Outil en ligne : Pentest-Tools.com. Fonctionnalités : scan de vulnérabilités basique, analyse d'un site web, rapport avec niveaux de risque." },
        { type: "table", headers: ["Outil", "Usage"], rows: [
          ["Nmap", "Scan réseau"],
          ["Wireshark", "Analyse trafic"],
          ["Metasploit", "Exploitation vulnérabilités"],
          ["Burp Suite", "Tests web"],
          ["Kali Linux", "Environnement pentest"],
        ]},
        { type: "h", text: "Environnement de test (machines virtuelles)" },
        { type: "p", text: "On peut créer une nouvelle machine virtuelle de A à Z à l'aide du logiciel gratuit Oracle VM VirtualBox, pour tester des attaques en sécurité, simuler un réseau, installer des outils comme Kali Linux." },
        { type: "h", text: "Scan des ports ouverts" },
        { type: "p", text: "Un port ouvert est un point d'entrée sur une machine permettant : la communication réseau, l'accès à un service (web, SSH, base de données…)." },
        { type: "code", filename: "nmap-scan.sh", language: "bash", code: `# Scanner une machine
nmap 192.168.1.10

# Scanner un port spécifique sur tout un réseau
nmap -p 3000 192.168.1.0/24` },
        { type: "note", variant: "warning", text: "Un port ouvert = potentielle faille. Il faut fermer les ports inutiles, sécuriser les services exposés, utiliser un pare-feu." },
        { type: "h", text: "Scanner les vulnérabilités (Nessus)" },
        { type: "p", text: "Le scan de vulnérabilités permet de détecter les failles de sécurité d'un système, analyser les services exposés, proposer des corrections. Nessus Essentials (gratuite) est très utilisé en cybersécurité pour les audits." },
        { type: "code", filename: "start-nessus.sh", language: "bash", code: `# Sous Linux (ex : Kali)
/bin/systemctl start nessusd.service` },
        { type: "table", headers: ["OS", "URL"], rows: [
          ["Linux", "https://kali:8834/"],
          ["Windows", "https://localhost:8834/"],
        ]},
        { type: "p", text: "Création d'un scan : sélectionner Basic Network Scan, cible localhost/IP/réseau, credentials optionnels mais recommandés pour une analyse plus approfondie." },
        { type: "p", text: "Résultats : rapport détaillé contenant liste des vulnérabilités, niveau de criticité, description des failles, recommandations de correction." },
        { type: "note", variant: "warning", title: "Important", text: "Scanner uniquement des systèmes autorisés. Respect du cadre légal obligatoire." },
      ],
    },
    {
      id: "sec-cryptographie-signature-chiffrement",
      title: "Cryptographie : signature numérique, chiffrement et scellement (MAC)",
      blocks: [
        { type: "h", text: "Signature numérique" },
        { type: "p", text: "La signature numérique est un mécanisme permettant de : authentifier l'auteur d'un message, garantir l'intégrité des données, assurer la non-répudiation. Elle correspond à des données ajoutées à un message électronique." },
        {
          type: "diagram",
          content: `SIGNATURE (côté expéditeur Alice)
Message → [Hachage] → Empreinte → [Chiffrement clé privée] → Signature

VÉRIFICATION (côté destinataire Bob)
Message reçu → [Hachage] → Empreinte 1
Signature    → [Déchiffrement clé publique] → Empreinte 2
Si Empreinte 1 == Empreinte 2 → Message authentique et non modifié ✅`,
        },
        { type: "list", items: [
          "L'expéditeur applique une fonction de hachage au message, chiffre l'empreinte avec sa clé privée, envoie message + signature",
          "Le destinataire déchiffre la signature avec la clé publique, compare avec le hash du message reçu",
        ]},
        { type: "note", variant: "info", text: "En France, la signature numérique a la même valeur légale qu'une signature manuscrite (si conforme aux normes)." },
        { type: "h", text: "Le mécanisme de chiffrement" },
        { type: "p", text: "Le chiffrement est un mécanisme de sécurité qui permet de protéger les données, garantir la confidentialité des échanges, assurer une authentification mutuelle. Il repose sur des protocoles d'échange de clés." },
        {
          type: "diagram",
          content: `COMPARATIF DES TYPES DE CHIFFREMENT
┌──────────────────┬──────────────────┬──────────────────┐
│   Symétrique     │  Asymétrique     │    Hybride       │
├──────────────────┼──────────────────┼──────────────────┤
│ 1 seule clé      │ 2 clés :         │ Combine les 2 :  │
│ (chiffre ET      │ publique +       │ asym. → échange  │
│  déchiffre)      │ privée           │ sym. → données   │
├──────────────────┼──────────────────┼──────────────────┤
│ ✅ Rapide         │ ✅ Sécurisé      │ ✅ Utilisé dans  │
│ ✅ Simple         │ ✅ Pas de        │    HTTPS         │
│ ❌ Partage clé    │    partage clé   │                 │
└──────────────────┴──────────────────┴──────────────────┘`,
        },
        { type: "list", items: [
          "Chiffrement symétrique — une seule clé, avantages : rapide, simple. Inconvénient : problème de transmission sécurisée de la clé",
          "Chiffrement asymétrique — 2 clés (publique + privée), pas besoin de partager une clé secrète, plus sécurisé (ex : HTTPS/RSA)",
          "Chiffrement hybride — combine asymétrique (échange de clé) + symétrique (échange de données), utilisé dans la plupart des communications sécurisées modernes",
        ]},
        { type: "p", text: "Échange de clés : des protocoles comme Diffie-Hellman key exchange permettent d'échanger une clé secrète sans la transmettre directement. Utilisation concrète : HTTPS, protection des fichiers, sécurisation des communications réseau." },
        { type: "h", text: "Mettre en place un scellement (MAC)" },
        { type: "p", text: "Le scellement permet de garantir l'intégrité des données et vérifier l'authenticité de l'origine d'un message. Il consiste à calculer une empreinte (MAC) à partir du message et d'une clé secrète." },
        { type: "p", text: "Le MAC (Message Authentication Code) est une empreinte unique (sceau), générée à partir d'un message + une clé privée. Sert à vérifier que le message n'a pas été modifié et qu'il vient bien de l'expéditeur." },
        {
          type: "diagram",
          content: `ÉMETTEUR
Message + Clé secrète → [Fonction de hachage] → MAC
Envoie : Message + MAC

DESTINATAIRE
Message reçu + Clé secrète → [Recalcul MAC] → MAC'
Si MAC == MAC' → Message intègre et authentique ✅`,
        },
        { type: "p", text: "Principe technique : utilisation d'une fonction de hachage (ex : SHA) combinée à une clé secrète. Exemple courant : HMAC." },
        { type: "h", text: "Cryptographie — mécanismes de sécurité du web" },
        { type: "table", headers: ["Type", "Clés", "Avantages", "Inconvénients"], rows: [
          ["Symétrique", "1 seule clé", "Rapide, simple", "Problème partage clé"],
          ["Asymétrique", "Publique + privée", "Sécurisé, pas de partage", "Complexe, lent"],
          ["Hybride", "Combine les 2", "Utilisé dans HTTPS", "—"],
        ]},
        { type: "p", text: "Autres mécanismes : scellement (hachage/MAC) — génère une empreinte, vérifie l'intégrité. Signature numérique — authentifie l'auteur, garantit l'intégrité, assure la non-répudiation. Certificat électronique — associe une clé publique à une identité, délivré par une autorité de certification." },
        { type: "table", headers: ["Outil", "Usage"], rows: [
          ["bcrypt", "Hash sécurisé des mots de passe"],
          ["Passport.js", "Gestion de l'authentification (Node.js)"],
        ]},
      ],
    },
    {
      id: "sec-protocoles-reseau-tls-https",
      title: "Protocoles réseau de sécurisation et causes des failles",
      blocks: [
        { type: "p", text: "Les protocoles de sécurisation permettent de protéger les données échangées, garantir la confidentialité, assurer l'authenticité des communications. Exemple principal : HTTPS (via TLS)." },
        {
          type: "diagram",
          content: `CLIENT (navigateur)     SERVEUR
       |                    |
       |-- Hello TLS ------>|
       |<- Certificat ------|
       |-- Vérification --->|
       |<- Clé de session --|
       |=== Données chiffrées (HTTPS) ===|`,
        },
        { type: "list", items: [
          "TLS (Transport Layer Security) chiffre les échanges",
          "HTTPS = HTTP sécurisé avec TLS, protège les données (mots de passe, CB…), empêche l'interception (MITM)",
        ]},
        { type: "p", text: "Let's Encrypt : autorité de certification gratuite, fournit des certificats SSL/TLS, permet de passer un site en HTTPS." },
        { type: "p", text: "Mise en place d'un certificat HTTPS : via le serveur (Shell) avec Certbot + configuration Apache/Nginx, ou via l'hébergeur (activation automatique, souvent en un clic)." },
        { type: "list", items: [
          "Pourquoi utiliser HTTPS ? Protection des données utilisateurs, amélioration du référencement (SEO), confiance des utilisateurs",
          "Bonnes pratiques : utiliser TLS récent, renouveler automatiquement les certificats, suivre les recommandations de l'ANSSI",
        ]},
        { type: "h", text: "Protocoles réseau de sécurisation — Détails" },
        { type: "p", text: "IPsec : ensemble de protocoles permettant de sécuriser les communications IP, défini par l'IETF. Rôle : chiffrement, authentification, intégrité. Utilisation : création de VPN, connexion sécurisée entre deux systèmes via Internet." },
        { type: "table", headers: ["Version", "Bits", "Infos"], rows: [
          ["IPv4", "32 bits", "Utilisé depuis 1983 (ARPANET), adresses limitées"],
          ["IPv6", "128 bits", "Beaucoup plus d'adresses, améliore la communication réseau"],
        ]},
        { type: "p", text: "TLS / SSL : protocole de chiffrement des communications, successeur de SSL, utilise un certificat numérique. HTTPS : version sécurisée de HTTP, utilise TLS. SSH : protocole de connexion à distance sécurisée (authentification forte, chiffrement, transfert de fichiers sécurisé), remplace Telnet et FTP non sécurisé. SET : protocole pour sécuriser les paiements par carte bancaire (chiffrement, hachage)." },
        { type: "h", text: "Causes des failles de sécurité" },
        { type: "list", items: [
          "Facteur humain (cause la plus fréquente) — mots de passe faibles, fichiers infectés, négligence des mises à jour, phishing",
          "Programmation — erreurs dans le code, tests insuffisants, mises à jour mal appliquées",
          "Réseau — attaques DoS/DDoS, mauvaise configuration réseau, failles dans les protocoles",
          "Applications web / Serveur — serveur mal configuré, CMS mal sécurisés",
          "Authentification & sessions — mauvaise gestion des sessions, absence de MFA",
          "Sécurité des données — absence ou mauvais chiffrement, transferts non sécurisés",
          "Sécurité côté client — absence de CSP, pas de protection contre le clickjacking",
        ]},
      ],
    },
    {
      id: "sec-bonnes-pratiques-tests-securite-detail",
      title: "Bonnes pratiques des tests de sécurité (détail)",
      blocks: [
        { type: "p", text: "Les tests de sécurité regroupent l'ensemble des actions permettant de détecter les failles, vérifier la robustesse d'un système, améliorer la sécurité globale." },
        { type: "list", items: [
          "Définir le périmètre de test — points d'entrée et de sortie, systèmes à tester, limites",
          "Tests d'intrusion (Pentest) — simulation d'attaques réelles",
          "Analyse des vulnérabilités — scan des failles, classement des risques",
          "Configuration et contrôle — validation des configurations, contrôle des accès",
          "Revue de code — analyse du code source, détection des erreurs de sécurité",
          "Résistance aux attaques — tests de charge (DDoS), tests de résilience",
          "Surveillance continue — monitoring, détection d'activités suspectes",
          "Gestion des correctifs — patch management, suivi des versions",
          "Tests spécifiques — sécurité des applications mobiles, sécurité des API",
          "Gestion des secrets — protection des clés et mots de passe, sécurisation des tokens",
          "Ingénierie sociale — simulation d'attaques humaines (phishing)",
          "Environnements — sécurisation dev et production",
          "Conformité — respect des normes et réglementations, audits de sécurité",
          "Gestion des incidents — simulation de réponse à incident",
        ]},
      ],
    },
    {
      id: "sec-middleware-auth-jwt",
      title: "Middleware d'authentification et JWT",
      blocks: [
        { type: "p", text: "Un middleware de protection est une fonction exécutée avant une route API pour vérifier si l'utilisateur est autorisé. Il contrôle généralement un token (JWT)." },
        {
          type: "diagram",
          content: `Requête client
      |
      ▼
[Middleware checkJWT]
      |
   Token ?
  /        \\
Non         Oui → Token valide ?
 |                /           \\
401            Non            Oui
token_       401             next()
required   token_         → Route API
           not_valid       → Réponse`,
        },
        { type: "h", text: "1. Création du middleware" },
        { type: "p", text: "Créer un dossier middlewares/, ajouter un fichier private.js :" },
        { type: "code", filename: "middlewares/private.js", language: "jsx", code: `const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

exports.checkJWT = async (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  // Vérifier présence du token
  if (!token) {
    return res.status(401).json("token_required");
  }

  // Enlever "Bearer "
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  // Vérification du token
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json("token_not_valid");
    }

    // Stocker les données utilisateur dans la requête
    req.decoded = decoded;

    // (Optionnel) régénérer un token
    const expiresIn = 24 * 60 * 60;
    const newToken = jwt.sign(
      { user: decoded.user },
      SECRET_KEY,
      { expiresIn: expiresIn }
    );

    res.setHeader("Authorization", "Bearer " + newToken);
    next();
  });
};` },
        { type: "h", text: "2. Utilisation dans les routes" },
        { type: "p", text: "Importer le middleware dans routes/users.js et appliquer checkJWT() sur les routes à protéger :" },
        { type: "code", filename: "routes/users.js", language: "jsx", code: `const express = require("express");
const router = express.Router();
const service = require("../services/users");
const private = require("../middlewares/private");

// Route protégée : récupérer un utilisateur par ID
router.get("/:id", private.checkJWT, service.getById);

// Ajouter un utilisateur (pas protégée)
router.post("/add", service.add);

// Route protégée : mise à jour
router.patch("/update", private.checkJWT, service.update);

// Route protégée : suppression
router.delete("/delete", private.checkJWT, service.delete);

// Authentification
router.post("/authenticate", service.authenticate);

module.exports = router;` },
        { type: "h", text: "Tests d'accès à une route privée" },
        { type: "p", text: "1. Sans token : requête GET localhost:3000/user/:id → résultat attendu : message \"token required\" (la route est bien protégée)." },
        { type: "p", text: "2. Connexion utilisateur : utiliser un outil comme Postman, se connecter avec email + password, récupérer le token JWT." },
        { type: "p", text: "3. Avec token : ajouter le token dans les Headers, envoyer une requête GET." },
        { type: "code", filename: "response-example.json", language: "json", code: `{
  "_id": "636a29afe82e170fba7dbe1d",
  "name": "doe",
  "firstname": "John",
  "email": "john@xxx.com",
  "password": "$2b$10$107gRziv3ohzd0mAku8WC.Xv.FSXXhCvXWLN2I3LCW30ufgf8cwem",
  "createdAt": "2022-11-08T10:04:31.719Z",
  "updatedAt": "2022-11-08T10:04:31.719Z"
}` },
        { type: "h", text: "JWT (JSON Web Token) — Sécurisation d'API" },
        { type: "p", text: "JSON Web Token est un standard permettant de sécuriser les échanges entre client et serveur, authentifier un utilisateur via un token signé. Outil de référence : https://jwt.io/" },
        {
          type: "diagram",
          content: `1. Client envoie    → email + mot de passe
2. Serveur vérifie  → identifiants
3. Si OK            → génère un JWT (token signé)
4. Client stocke    → token (cookie, localStorage, session)
5. Client envoie    → token dans chaque requête (header Authorization)
6. Serveur vérifie  → token → accès autorisé ou refusé`,
        },
        { type: "h", text: "Structure d'un token JWT" },
        {
          type: "diagram",
          content: `eyJhbGci...   ←  Header (base64)
.
eyJzdWIi...   ←  Payload (base64)
.
4pcPyMD0...   ←  Signature (HMAC)`,
        },
        { type: "code", filename: "header.json", language: "json", code: `{
  "alg": "HS256",
  "typ": "JWT"
}` },
        { type: "code", filename: "payload.json", language: "json", code: `{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}` },
        { type: "code", filename: "signature.jsx", language: "jsx", code: `HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)` },
        { type: "p", text: "Stockage côté client : le token peut être stocké dans un cookie, localStorage, ou une variable de session." },
        { type: "code", filename: "install-jwt.sh", language: "bash", code: `npm install jsonwebtoken --save` },
        { type: "p", text: "Configuration dans .env :" },
        { type: "code", filename: ".env", language: "bash", code: `SECRET_KEY=GTGh6rdP54GT76` },
        { type: "h", text: "Implémentation (backend Node.js)" },
        { type: "code", filename: "services/user.js", language: "jsx", code: `// services/user.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne(
      { email: email },
      '-__v -createdAt -updatedAt'
    );

    if (!user) {
      return res.status(404).json('user_not_found');
    }

    bcrypt.compare(password, user.password, function (err, response) {
      if (err) {
        return res.status(500).json(err);
      }

      if (!response) {
        return res.status(403).json('wrong_credentials');
      }

      delete user._doc.password;

      const expireIn = 24 * 60 * 60;
      const token = jwt.sign(
        { user: user },
        SECRET_KEY,
        { expiresIn: expireIn }
      );

      res.header('Authorization', 'Bearer ' + token);
      return res.status(200).json('authenticate_succeed');
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};` },
        { type: "h", text: "Authentification utilisateur — Étapes" },
        { type: "list", items: [
          "Récupérer email + mot de passe (body request)",
          "Chercher l'utilisateur en base (email)",
          "Vérifier le mot de passe avec bcrypt",
          "Si OK : générer un JWT, envoyer dans le header",
        ]},
        { type: "p", text: "Vérification mot de passe avec bcrypt : compare le mot de passe en clair avec le hash stocké en base. Réponse serveur si succès : status 200 OK + token envoyé dans Authorization header." },
        { type: "h", text: "Ajout de route" },
        { type: "code", filename: "routes/users.js", language: "jsx", code: `const express = require('express');
const router = express.Router();
const service = require('../services/users');

// Routes CRUD
router.get('/:id', service.getById);
router.post('/add', service.add);
router.patch('/:id', service.update);
router.delete('/:id', service.delete);

// Route authentification JWT
router.post('/authenticate', service.authenticate);

module.exports = router;` },
        { type: "h", text: "Test de connexion utilisateur (JWT API)" },
        { type: "code", filename: "start.sh", language: "bash", code: `npm start` },
        { type: "p", text: "Tester la connexion (Postman) : méthode POST, URL http://localhost:3000/users/authenticate, body x-www-form-urlencoded avec email + password." },
        { type: "note", variant: "success", text: "Résultat attendu : si les identifiants sont corrects → la réponse contient un token JWT dans les headers : Authorization: Bearer <token>" },
      ],
    },
    {
      id: "sec-certificat-electronique",
      title: "Certificat électronique",
      blocks: [
        { type: "p", text: "Un certificat électronique est un document numérique qui permet de prouver l'identité d'une entité (site web, personne, serveur) et de sécuriser les échanges (HTTPS, chiffrement). Il est utilisé en cryptographie et sur Internet." },
        {
          type: "diagram",
          content: `CERTIFICAT ÉLECTRONIQUE
┌──────────────────────────────────────┐
│  Clé publique (paire asymétrique)    │
├──────────────────────────────────────┤
│  Informations d'identification :     │
│  - Nom                               │
│  - Adresse email                     │
│  - Domaine (URL)                     │
│  - Adresse IP                        │
├──────────────────────────────────────┤
│  Autorité de certification (CA) :    │
│  - DigiCert / Entrust / CertPlus     │
├──────────────────────────────────────┤
│  Signature numérique (authenticité)  │
└──────────────────────────────────────┘`,
        },
        { type: "p", text: "Rôle de l'autorité de certification (CA) : vérifie l'identité du propriétaire, délivre le certificat, signe le certificat numériquement, gère son cycle de vie." },
        {
          type: "diagram",
          content: `1. Généré → 2. Validé par CA → 3. Utilisé → 4. Renouvelé ou révoqué`,
        },
        { type: "list", items: ["HTTPS (sites web sécurisés)", "Authentification", "Signature numérique", "Échanges sécurisés"] },
      ],
    },
    ...laConsoleSecurity,
    ...laConsoleArticlesSecurity,
    ...laConsoleArticles2Security,
    ...laConsoleArticles4Security,
    ...laConsoleArticles5Security,
    ...laConsoleArticles6Security,
  ],
};
