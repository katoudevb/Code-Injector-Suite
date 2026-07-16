import type { Section } from "../types";

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
  ],
};
