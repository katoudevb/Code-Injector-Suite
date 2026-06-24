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
