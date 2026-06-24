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
  ],
};
