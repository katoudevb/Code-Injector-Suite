import type { Section } from "../types";
import { laConsoleArticlesRest } from "./laConsoleArticlesRest";

export const rest: Section = {
  id: "rest",
  title: "APIs & REST",
  icon: "Network",
  tags: [],
  subsections: [
    {
      id: "principes",
      title: "Principes REST",
      blocks: [
        { type: "p", text: "REST organise une API autour de ressources manipulées par les verbes HTTP. Chaque requête est indépendante (stateless)." },
        { type: "table", headers: ["Verbe", "Action", "Exemple"], rows: [["GET", "Lire", "GET /produits"], ["POST", "Créer", "POST /produits"], ["PUT", "Remplacer", "PUT /produits/1"], ["PATCH", "Modifier", "PATCH /produits/1"], ["DELETE", "Supprimer", "DELETE /produits/1"]] },
      ],
    },
    {
      id: "codes",
      title: "Codes de statut HTTP",
      blocks: [
        { type: "table", headers: ["Code", "Signification"], rows: [["200 OK", "Succès"], ["201 Created", "Ressource créée"], ["204 No Content", "Succès sans contenu"], ["400 Bad Request", "Requête invalide"], ["401 Unauthorized", "Non authentifié"], ["403 Forbidden", "Non autorisé"], ["404 Not Found", "Introuvable"], ["422 Unprocessable", "Validation échouée"], ["500 Server Error", "Erreur serveur"]] },
      ],
    },
    {
      id: "design",
      title: "Design d'URL et réponses",
      blocks: [
        { type: "code", filename: "api.txt", language: "bash", code: `# Noms au pluriel, ressources imbriquées
GET    /users               # liste
GET    /users/42            # un utilisateur
GET    /users/42/orders     # commandes d'un utilisateur
POST   /users/42/orders     # créer une commande` },
        { type: "code", filename: "reponse.json", language: "json", code: `{
  "data": [{ "id": 1, "nom": "Sac" }],
  "meta": { "page": 1, "total": 120, "parPage": 10 },
  "error": null
}` },
      ],
    },
    {
      id: "auth",
      title: "Authentification et CORS",
      blocks: [
        { type: "code", filename: "requete.txt", language: "bash", code: `# Bearer token (JWT) dans le header Authorization
GET /api/profil
Authorization: Bearer eyJhbGc.payload.signature
# Un JWT = 3 parties : header.payload.signature (base64)` },
        { type: "note", variant: "info", text: "CORS : le serveur autorise certaines origines via Access-Control-Allow-Origin. Une requête préflight (OPTIONS) précède les requêtes complexes." },
      ],
    },
    {
      id: "api-definition-flux",
      title: "Qu'est-ce qu'une API ?",
      blocks: [
        { type: "p", text: "Une solution qui permet à des applications de communiquer entre elles." },
        { type: "h", text: "Rôle d'une API" },
        { type: "list", items: [
          "Échanger des données entre applications",
          "Accéder à des services distants",
          "Exécuter des actions sur un serveur",
          "Renvoyer des réponses au client",
        ]},
        { type: "h", text: "Flux de communication" },
        {
          type: "diagram",
          content: `Application cliente
      │
      ▼
     API
      │
      ▼
   Serveur
      │
      ▼
Base de données
      │
      ▼
   Réponse  ──▶  Application cliente`,
        },
      ],
    },
    {
      id: "api-types-categories",
      title: "Les différents types d'API",
      blocks: [
        { type: "h", text: "Les 3 catégories d'API" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│                3 CATÉGORIES D'API                   │
│                                                     │
│  OUVERTE (Open API)                                 │
│  ├─ Accessible publiquement                         │
│  ├─ Utilisable sans restriction (ou avec clé API)   │
│  └─ Exemples : API météo, Google Maps               │
│                                                     │
│  PARTENAIRE (Partner API)                           │
│  ├─ Accessible uniquement via accord / licence      │
│  ├─ Utilisée entre entreprises partenaires          │
│  └─ Accès contrôlé et sécurisé                      │
│                                                     │
│  PRIVÉE (Private API)                               │
│  ├─ Utilisée uniquement en interne                  │
│  ├─ Sert à connecter les services internes          │
│  └─ Non exposée au public                           │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "table", headers: ["Catégorie", "Accès", "Usage", "Exemple"], rows: [
          ["Open API", "Public", "Sans restriction (ou clé API)", "Google Maps, météo"],
          ["Partner API", "Sur accord", "Entre entreprises", "API de paiement"],
          ["Private API", "Interne uniquement", "Services internes", "Microservices"],
        ]},
      ],
    },
    {
      id: "api-technologies",
      title: "Les technologies d'API",
      blocks: [
        { type: "h", text: "1. SOAP (Simple Object Access Protocol)" },
        { type: "list", items: [
          "Ancienne technologie",
          "Basée sur XML",
          "Très structurée et stricte",
          "Utilisée dans les systèmes bancaires / entreprises",
        ]},
        { type: "h", text: "2. REST (Representational State Transfer)" },
        { type: "list", items: [
          "Aujourd'hui le standard le plus utilisé",
          "Simple, rapide, basé sur HTTP",
          "On parle souvent d'API REST ou RESTful API",
          "Utilise généralement JSON",
        ]},
        { type: "code", filename: "verbes-rest.txt", language: "text", code: `GET    → lire des données
POST   → créer
PUT    → modifier (complet)
DELETE → supprimer` },
        { type: "h", text: "3. Web API (JavaScript / navigateur)" },
        { type: "p", text: "Web APIs standards : disponibles directement dans les navigateurs, permettent d'utiliser les fonctionnalités du navigateur. Documentation : https://developer.mozilla.org/en-US/docs/Web/API" },
        { type: "list", items: ["DOM API", "Fetch API", "Geolocation API"] },
        { type: "p", text: "Web APIs expérimentales : pas toujours compatibles avec tous les navigateurs, peu fiables en production, à utiliser avec prudence." },
      ],
    },
    {
      id: "api-express-creation-projet",
      title: "Créer une API REST avec Node.js (Express)",
      blocks: [
        { type: "h", text: "1. Création du projet" },
        { type: "p", text: "Installer Express Generator :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install -g express-generator` },
        { type: "p", text: "Créer un projet API sans vues :" },
        { type: "code", filename: "terminal", language: "bash", code: `express api --no-view
cd api
npm install` },
        { type: "h", text: "2. Structure du projet" },
        {
          type: "diagram",
          content: `api/
├── bin/
│   └── www          ← lance le serveur
├── routes/
│   ├── index.js     ← routes principales
│   └── users.js     ← routes utilisateurs
├── app.js           ← application Express principale
└── package.json`,
        },
        { type: "h", text: "3. Scripts Node.js" },
        { type: "p", text: "Dans package.json :" },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "start": "node ./bin/www"
  }
}` },
        { type: "h", text: "4. Redémarrage automatique (nodemon)" },
        { type: "p", text: "Installer nodemon :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install nodemon` },
        { type: "p", text: "Modifier le script dans package.json :" },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "start": "nodemon ./bin/www"
  }
}` },
      ],
    },
    {
      id: "api-routes-index-users",
      title: "Déclarer des routes — index.js et users.js",
      blocks: [
        { type: "h", text: "1. Rôle de index.js" },
        { type: "p", text: "Dans une application Express, index.js (ou app.js) sert à rediriger les routes vers des fichiers spécialisés." },
        { type: "code", filename: "routes/index.js", language: "javascript", code: `const express = require('express');
const router = express.Router();

// Import du fichier users.js
const usersRouter = require('./routes/users');

// Route principale vers users
router.use('/users', usersRouter);

module.exports = router;` },
        { type: "h", text: "2. Créer le dossier routes" },
        { type: "diagram", content: `api/
├── routes/
│   └── users.js
├── app.js
├── bin/
└── package.json` },
        { type: "h", text: "3. Créer le fichier users.js" },
        { type: "p", text: "Ce fichier contient toutes les routes liées aux utilisateurs." },
        { type: "code", filename: "routes/users.js", language: "javascript", code: `const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
    res.send('Liste des utilisateurs');
});

// POST /users
router.post('/', (req, res) => {
    res.send('Utilisateur créé');
});

// GET /users/:id
router.get('/:id', (req, res) => {
    res.send('Utilisateur avec id : ' + req.params.id);
});

module.exports = router;` },
      ],
    },
    {
      id: "api-restful-complete",
      title: "Créer une API RESTful complète",
      blocks: [
        { type: "h", text: "1. Principe d'une API REST" },
        { type: "p", text: "Une API REST permet de : récupérer, ajouter, modifier et supprimer des données. Elle utilise les verbes HTTP." },
        { type: "h", text: "2. Les verbes HTTP (CRUD)" },
        { type: "table", headers: ["Action", "Verbe HTTP", "Rôle"], rows: [
          ["Create", "POST", "Ajouter une donnée"],
          ["Read", "GET", "Lire / récupérer des données"],
          ["Update", "PUT", "Remplace complètement une donnée"],
          ["Update", "PATCH", "Modifie partiellement une donnée"],
          ["Delete", "DELETE", "Supprimer une donnée"],
        ]},
        { type: "h", text: "3. Exemple d'API REST (Express) — toutes les routes" },
        { type: "code", filename: "routes/users.js", language: "javascript", code: `const express = require('express');
const router  = express.Router();

// GET — récupérer un utilisateur
router.get('/users/:id', (req, res) => {
    res.json({ id: req.params.id });
});

// POST — créer un utilisateur
router.post('/users', (req, res) => {
    res.json({ message: "Utilisateur créé" });
});

// PUT — modifier complètement
router.put('/users/:id', (req, res) => {
    res.json({ message: "Utilisateur modifié complètement" });
});

// PATCH — modifier partiellement
router.patch('/users/:id', (req, res) => {
    res.json({ message: "Utilisateur modifié partiellement" });
});

// DELETE — supprimer
router.delete('/users/:id', (req, res) => {
    res.json({ message: "Utilisateur supprimé" });
});

module.exports = router;` },
        { type: "h", text: "4. Tester une API avec Postman" },
        { type: "p", text: "Créer un utilisateur :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : POST
URL     : http://localhost:3000/users
Body (JSON) :
{
  "email": "test@mail.com",
  "password": "123456"
}` },
        { type: "p", text: "Récupérer :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : GET
URL     : http://localhost:3000/users/USER_ID` },
        { type: "p", text: "Modifier :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : PATCH
URL     : http://localhost:3000/users/USER_ID` },
        { type: "p", text: "Supprimer :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : DELETE
URL     : http://localhost:3000/users/USER_ID` },
        { type: "h", text: "5. FETCH (côté frontend)" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('http://localhost:3000/users/123')
    .then(res  => res.json())
    .then(data => console.log(data));` },
        { type: "h", text: "6. MongoDB Compass" },
        { type: "p", text: "Outil pour visualiser la base de données : https://www.mongodb.com/products/tools/compass" },
        { type: "list", items: ["Voir les collections", "Vérifier les users", "Inspecter les données en direct"] },
        { type: "p", text: "Exemple de requête test (JSONPlaceholder) :" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

// Résultat :
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }` },
      ],
    },
    {
      id: "api-upload-multer",
      title: "Gérer les fichiers entrants (Upload avec Multer)",
      blocks: [
        { type: "p", text: "Permettre à l'API de : recevoir des fichiers (images, docs…), les stocker sur le serveur, enregistrer les infos dans MongoDB." },
        { type: "h", text: "1. Installation de Multer" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install multer` },
        { type: "h", text: "2. Dossier de stockage" },
        { type: "p", text: "Créer un dossier à la racine : uploads/. Il contiendra tous les fichiers envoyés." },
        { type: "h", text: "3. Middleware Multer" },
        { type: "p", text: "Créer : middlewares/files-storage.js" },
        { type: "code", filename: "middlewares/files-storage.js", language: "javascript", code: `const multer = require('multer');

const MIME_TYPES = {
    'image/jpg':  'jpg',
    'image/jpeg': 'jpg',
    'image/png':  'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        const name      = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('file');` },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│           FLUX UPLOAD MULTER                 │
│                                              │
│  Client (formulaire)                         │
│       │                                      │
│       ▼  POST multipart/form-data            │
│  Middleware Multer                           │
│       │                                      │
│       ├─ Destination → uploads/              │
│       └─ Filename    → nom_timestamp.ext     │
│       │                                      │
│       ▼                                      │
│  Route (req.file disponible)                 │
│       │                                      │
│       ▼                                      │
│  Service → sauvegarde dans MongoDB           │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "4. Modèle File (MongoDB)" },
        { type: "p", text: "Créer : models/file.js" },
        { type: "code", filename: "models/file.js", language: "javascript", code: `const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    userId:    { type: String, required: true },
    fileName:  { type: String, required: true },
    filePath:  { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', FileSchema);` },
        { type: "h", text: "5. Routes fichiers" },
        { type: "p", text: "Créer : routes/files.js" },
        { type: "code", filename: "routes/files.js", language: "javascript", code: `const express     = require('express');
const router      = express.Router();
const multer      = require('../middlewares/files-storage');
const fileService = require('../services/files');

// Upload fichier (APRÈS authentification)
router.post('/', multer, async (req, res) => {
    const fileData = {
        userId:   req.body.userId,
        fileName: req.file.filename,
        filePath: req.file.path
    };
    const result = await fileService.createOneFile(fileData);
    res.json(result);
});

module.exports = router;` },
        { type: "h", text: "6. Service Files — CRUD complet" },
        { type: "p", text: "Créer : services/files.js — Sauvegarder fichier :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `const File = require('../models/file');

exports.createOneFile = async (data) => {
    const file = new File(data);
    return await file.save();
};` },
        { type: "p", text: "Récupérer fichier :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `exports.getFile = async (id) => {
    return await File.findOne({ _id: id });
};` },
        { type: "p", text: "Modifier fichier :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `exports.updateFile = async (id, data) => {
    return await File.updateOne({ _id: id }, data);
};` },
        { type: "p", text: "Supprimer fichier (physique + BDD) :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `const fs   = require('fs');
const File = require('../models/file');

exports.deleteFile = async (id) => {
    const file = await File.findOne({ _id: id });

    if (!file) {
        throw new Error("Fichier introuvable");
    }

    // 1. Supprimer fichier physique du disque
    fs.unlinkSync(file.filePath);

    // 2. Supprimer l'entrée en base de données
    return await File.deleteOne({ _id: id });
};` },
        { type: "h", text: "7. Ajouter uploads dans Express" },
        { type: "p", text: "Dans app.js :" },
        { type: "code", filename: "app.js", language: "javascript", code: `app.use('/uploads', express.static('uploads'));` },
        { type: "p", text: "Permet d'accéder aux fichiers via URL." },
        { type: "h", text: "8. Test avec Postman" },
        { type: "code", filename: "postman", language: "text", code: `Upload fichier
Méthode : POST
URL     : http://localhost:3000/files
Body    : form-data
  key   : file
  type  : File (sélectionner un fichier)` },
        { type: "h", text: "9. Frontend avec EJS (test simple)" },
        { type: "p", text: "Installer EJS :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install ejs` },
        { type: "p", text: "Configurer Express :" },
        { type: "code", filename: "app.js", language: "javascript", code: `app.set('view engine', 'ejs');
app.set('views', './views');` },
        { type: "p", text: "Créer : views/index.ejs — Exemple formulaire upload :" },
        { type: "code", filename: "views/index.ejs", language: "html", code: `<form action="/files" method="POST" enctype="multipart/form-data">
    <input type="text" name="userId">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>` },
        { type: "h", text: "10. Accès aux images" },
        { type: "p", text: "Une image uploadée devient accessible via :" },
        { type: "code", filename: "url", language: "text", code: `http://localhost:3000/uploads/nom_image.png` },
        { type: "h", text: "11. CRUD fichiers — Récapitulatif" },
        { type: "table", headers: ["Opération", "Route", "Méthode Mongoose", "Fichier physique"], rows: [
          ["CREATE", "POST /files", "file.save()", "Créé par Multer dans uploads/"],
          ["GET", "GET /files/:id", "findOne()", "—"],
          ["UPDATE", "PATCH /files/:id", "updateOne()", "—"],
          ["DELETE", "DELETE /files/:id", "deleteOne()", "fs.unlinkSync()"],
        ]},
        { type: "p", text: "Exemple de route DELETE complète :" },
        { type: "code", filename: "routes/files.js", language: "javascript", code: `const express     = require('express');
const router      = express.Router();
const fileService = require('../services/files');

router.delete('/:id', async (req, res) => {
    try {
        const result = await fileService.deleteFile(req.params.id);
        res.json({ message: "Fichier supprimé", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;` },
        { type: "note", variant: "warning", text: "Quand on appelle DELETE /:id, on doit : 1. supprimer l'entrée dans MongoDB ET 2. supprimer le fichier dans le dossier uploads/" },
        { type: "h", text: "Gestion des fichiers utilisateurs" },
        { type: "p", text: "Gérer les fichiers (upload, stockage, suppression) des utilisateurs dans une API REST." },
        { type: "list", items: [
          "Utilisation de Multer pour l'upload",
          "Stockage des fichiers dans un dossier uploads/",
          "Enregistrement des métadonnées dans MongoDB",
          "Suppression possible via API (DELETE)",
        ]},
      ],
    },
    {
      id: "api-crud-recap",
      title: "CRUD — Récapitulatif",
      blocks: [
        { type: "h", text: "CRUD dans les API REST" },
        { type: "p", text: "CRUD = opérations de base pour manipuler des données. Chaque route d'une API REST correspond à une action CRUD." },
        { type: "table", headers: ["Action", "HTTP", "Rôle"], rows: [
          ["Create", "POST", "Créer une donnée"],
          ["Read", "GET", "Lire une donnée"],
          ["Update", "PUT / PATCH", "Modifier une donnée"],
          ["Delete", "DELETE", "Supprimer une donnée"],
        ]},
        { type: "h", text: "CRUD dans les bases de données" },
        { type: "p", text: "CRUD existe aussi côté base de données :" },
        { type: "table", headers: ["CRUD", "SQL", "MongoDB"], rows: [
          ["Create", "INSERT", "save()"],
          ["Read", "SELECT", "find()"],
          ["Update", "UPDATE", "updateOne()"],
          ["Delete", "DELETE", "deleteOne()"],
        ]},
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  FLUX CRUD COMPLET                   │
│                                                      │
│  Frontend (fetch / Postman)                          │
│       │                                              │
│       ▼  HTTP Request (GET/POST/PUT/DELETE)          │
│  Route Express (routes/*.js)                         │
│       │                                              │
│       ▼                                              │
│  Service (services/*.js) ← logique métier            │
│       │                                              │
│       ▼                                              │
│  Modèle Mongoose (models/*.js)                       │
│       │                                              │
│       ▼                                              │
│  MongoDB Atlas (base de données)                     │
│       │                                              │
│       ▼  Résultat JSON                               │
│  Réponse au client (res.json())                      │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "api-types-reference",
      title: "Types d'API — Référence complète",
      blocks: [
        { type: "table", headers: ["Type", "Description", "Exemples"], rows: [
          ["API REST", "Architecture ressources, HTTP/HTTPS, JSON", "APIs modernes"],
          ["API SOAP", "Basée sur XML, contrat strict (WSDL)", "Banques, assurances"],
          ["API GraphQL", "Langage de requête, données à la demande, une seule route", "Facebook, GitHub"],
          ["API WebSocket", "Communication bidirectionnelle, temps réel", "Chat, jeux, notifs"],
          ["API RPC", "Appel de fonctions distantes", "gRPC, XML-RPC"],
          ["API Streaming", "Transmission continue de données", "Vidéo, musique, live data"],
          ["API Open Data", "Données publiques accessibles librement", "Météo, transports, stats"],
          ["API Internes", "Utilisées uniquement dans une organisation", "Microservices internes"],
          ["API de fichiers", "Upload, download, suppression", "Multer, S3"],
          ["API Cloud / SaaS", "Connexion à des services cloud externes", "AWS, Google Cloud, Azure"],
          ["API Hardware", "Communication avec du matériel", "Imprimantes, capteurs, IoT"],
          ["API navigateur (Web API)", "Fonctionnalités du navigateur", "fetch(), localStorage, géoloc"],
          ["API propriétaire", "Spécifique à une plateforme, souvent avec SDK", "Stripe, Twilio"],
        ]},
        { type: "h", text: "Comparatif REST vs SOAP vs GraphQL" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────┐
│         REST      vs     SOAP     vs   GraphQL        │
│                                                       │
│  Format    JSON          XML           JSON           │
│  Standard  HTTP          WSDL          Schéma custom  │
│  Routes    Plusieurs     Unique        Unique (/graphql│
│  Usage     Web moderne   Entreprise    Apps complexes  │
│  Flexib.   Moyen         Faible        Élevé           │
└───────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "api-architecture-recap",
      title: "Architecture complète — Récapitulatif structure projet",
      blocks: [
        {
          type: "diagram",
          content: `api/
├── bin/
│   └── www                      ← Point d'entrée serveur
│
├── models/
│   ├── user.js                  ← Schéma Mongoose User
│   └── file.js                  ← Schéma Mongoose File
│
├── routes/
│   ├── index.js                 ← Routeur principal
│   ├── users.js                 ← Routes CRUD utilisateurs
│   └── files.js                 ← Routes CRUD fichiers
│
├── services/
│   ├── users.js                 ← Logique métier users
│   └── files.js                 ← Logique métier fichiers
│
├── middlewares/
│   └── files-storage.js         ← Configuration Multer
│
├── uploads/                     ← Dossier fichiers uploadés
│
├── views/
│   └── index.ejs                ← Vue EJS (test frontend)
│
├── app.js                       ← Application Express principale
└── package.json`,
        },
      ],
    },
    ...laConsoleArticlesRest,
  ],
};
