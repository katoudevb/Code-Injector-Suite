import type { Section } from "../types";

export const node: Section = {
  id: "node",
  title: "Node.js / Express",
  icon: "Server",
  tags: ["js"],
  subsections: [
    {
      id: "concepts",
      title: "Node.js et npm",
      blocks: [
        { type: "p", text: "Node.js exécute du JavaScript côté serveur. Son event loop non-bloquant gère de nombreuses requêtes simultanées." },
        { type: "code", filename: "terminal", language: "bash", code: `npm init -y            # crée un package.json
npm install express    # ajoute une dépendance
npm install -D nodemon # dépendance de développement
npm run dev            # lance un script du package.json` },
      ],
    },
    {
      id: "modules",
      title: "CommonJS vs ESM",
      blocks: [
        { type: "code", filename: "modules.js", language: "javascript", code: `// CommonJS (require)
const express = require("express");
module.exports = { calculerTotal };
// ESM (import) — "type": "module" dans package.json
import express from "express";
export function calculerTotal() {}` },
      ],
    },
    {
      id: "express",
      title: "Serveur Express",
      blocks: [
        { type: "code", filename: "server.js", language: "javascript", code: `const express = require("express");
const app = express();
app.use(express.json()); // middleware : parse le JSON du body
app.get("/api/produits", (req, res) => res.json([{ id: 1, nom: "Sac" }]));
app.post("/api/produits", (req, res) => res.status(201).json(req.body));
app.get("/api/produits/:id", (req, res) =>
  res.json({ id: req.params.id, page: req.query.page })
);
app.listen(3000, () => console.log("Serveur sur le port 3000"));` },
      ],
    },
    {
      id: "express-schema-fonctionnement",
      title: "Express.js — Schéma de fonctionnement",
      blocks: [
        { type: "p", text: "Express est un framework web minimal et flexible pour Node.js. Il fournit : un système de gestion des requêtes HTTP, des middlewares puissants, une architecture simple pour créer des APIs et sites web." },
        {
          type: "diagram",
          content: `Client (navigateur)
       │
       │ Requête HTTP (GET /products)
       ▼
+──────────────────────────────────────────+
|           Express.js App                 |
|                                          |
|  app.get('/products', (req, res) => {    |
|      // Traitement                       |
|      res.json(data)                      |
|  })                                      |
+──────────────────────────────────────────+
       │
       │ Réponse HTTP (JSON / HTML / Fichier)
       ▼
Client (navigateur)`,
        },
      ],
    },
    {
      id: "express-installation",
      title: "Express.js — Installation",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `# Création du projet
mkdir server
cd server
npm init -y

# Installer Express
npm install express` },
        { type: "h", text: "Création d'un serveur Express simple" },
        { type: "code", filename: "server.js", language: "javascript", code: `// server.js
const express = require("express");
const app = express();

const port = 8000;

app.listen(port, () => {
    console.log("Serveur lancé sur http://localhost:" + port);
});` },
        { type: "h", text: "Syntaxe importante" },
        { type: "code", filename: "server.js", language: "javascript", code: `app.listen(port, host, backlog, callback)` },
        { type: "table", headers: ["Paramètre", "Description"], rows: [
          ["port", "Port d'écoute (ex: 3000, 8000)"],
          ["host", "Adresse IP (optionnel)"],
          ["backlog", "Taille de file d'attente (optionnel)"],
          ["callback", "Fonction exécutée au démarrage"],
        ]},
        { type: "h", text: "Démarrer le serveur" },
        { type: "code", filename: "terminal", language: "bash", code: `node server.js

# Ou via npm :
npm start

# http://localhost:8000` },
      ],
    },
    {
      id: "express-routes",
      title: "Express.js — Routes et réponses",
      blocks: [
        { type: "code", filename: "server.js", language: "javascript", code: `// Exemple GET simple
app.get("/", (req, res) => {
    res.send("Hello world!");
});` },
        { type: "table", headers: ["Variable", "Description"], rows: [
          ["req", "Requête utilisateur"],
          ["res", "Réponse serveur"],
        ]},
        { type: "h", text: "Réponses possibles" },
        { type: "code", filename: "server.js", language: "javascript", code: `// Texte
res.send("Hello");

// JSON
res.json({ message: "Hello" });

// Fichier
res.sendFile(__dirname + "/index.html");` },
      ],
    },
    {
      id: "express-middleware-avance",
      title: "Express.js — Middleware, fichiers statiques et erreurs",
      blocks: [
        { type: "h", text: "Middleware" },
        { type: "p", text: "Un middleware est une fonction qui : lit la requête, modifie req/res si besoin, appelle next() pour continuer." },
        { type: "code", filename: "server.js", language: "javascript", code: `// Exemple de middleware
app.use((req, res, next) => {
    console.log("Requête reçue");
    next();
});

// Ajout de middleware pour parser le JSON
app.use(express.json());` },
        { type: "h", text: "Fichiers statiques" },
        { type: "p", text: "Permet de servir : CSS, images, JS frontend." },
        { type: "code", filename: "server.js", language: "javascript", code: `app.use(express.static("public"));
// Tout le dossier public/ devient accessible` },
        { type: "h", text: "Gestion des erreurs" },
        { type: "code", filename: "server.js", language: "javascript", code: `app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Erreur serveur");
});` },
      ],
    },
    {
      id: "express-nodemon-generator",
      title: "Express.js — Nodemon et Express Generator",
      blocks: [
        { type: "h", text: "Nodemon (auto-reload)" },
        { type: "p", text: "Nodemon permet de redémarrer automatiquement le serveur." },
        { type: "code", filename: "terminal", language: "bash", code: `# Installation
npm install --save-dev nodemon

# Lancer
nodemon server.js` },
        { type: "h", text: "Express Generator" },
        { type: "p", text: "express-generator permet de générer une structure complète." },
        { type: "code", filename: "terminal", language: "bash", code: `# Installation
npm install -g express-generator

# Création projet
express mon_app
cd mon_app
npm install

# Lancement
npm start` },
        { type: "h", text: "Liens utiles Express.js" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Documentation officielle", "https://expressjs.com/"],
          ["Guide routing", "https://expressjs.com/en/guide/routing.html"],
        ]},
      ],
    },
    {
      id: "middleware",
      title: "Middleware et erreurs",
      blocks: [
        { type: "code", filename: "middleware.js", language: "javascript", code: `// Middleware perso (avant les routes)
function logger(req, res, next) {
  console.log(req.method, req.url);
  next(); // passe au suivant
}
app.use(logger);
// Middleware d'erreur : 4 paramètres (err en premier)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ erreur: "Erreur serveur" });
});` },
      ],
    },
    {
      id: "mvc",
      title: "Architecture MVC et fs",
      blocks: [
        { type: "code", filename: "controllers/produitController.js", language: "javascript", code: `const fs = require("fs/promises"); // version asynchrone
exports.lister = async (req, res) => {
  const data = await fs.readFile("produits.json", "utf-8");
  res.json(JSON.parse(data));
};
exports.creer = async (req, res) => {
  await fs.writeFile("produit.json", JSON.stringify(req.body));
  res.status(201).json(req.body);
};` },
      ],
    },
  ],
};
