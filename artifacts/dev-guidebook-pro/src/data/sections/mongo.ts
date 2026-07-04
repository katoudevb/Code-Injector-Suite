import type { Section } from "../types";

export const mongo: Section = {
  id: "mongodb",
  title: "NoSQL / MongoDB",
  icon: "Leaf",
  tags: ["js"],
  subsections: [
    {
      id: "concepts",
      title: "Concepts",
      blocks: [
        { type: "p", text: "MongoDB stocke des documents JSON (BSON) dans des collections. Le schéma est flexible : chaque document peut différer." },
        { type: "table", headers: ["SQL", "MongoDB"], rows: [["Table", "Collection"], ["Ligne", "Document"], ["Colonne", "Champ"], ["JOIN", "$lookup / imbriqué"]] },
      ],
    },
    {
      id: "crud",
      title: "Opérations CRUD",
      blocks: [
        { type: "code", filename: "crud.js", language: "javascript", code: `db.products.insertOne({ nom: "Sac", prix: 49.9, stock: 12 });
db.products.insertMany([{ nom: "Montre" }, { nom: "Chaussures" }]);
db.products.find({ prix: { $gt: 20 } });          // $gt = supérieur
db.products.find({ categorie: { $in: ["mode"] } }); // $in = dans
db.products.findOne({ nom: /sac/i });             // regex
db.products.updateOne({ _id: id }, { $set: { prix: 39.9 } });
db.products.updateMany({}, { $inc: { stock: 10 } }); // incrémente
db.products.deleteOne({ stock: 0 });` },
      ],
    },
    {
      id: "agregation",
      title: "Projections et agrégation",
      blocks: [
        { type: "code", filename: "aggregation.js", language: "javascript", code: `// Projection : 1 = inclure, 0 = exclure
db.products.find({}, { nom: 1, prix: 1, _id: 0 }).sort({ prix: -1 }).limit(5);

// Pipeline : CA par catégorie
db.orders.aggregate([
  { $match: { statut: "payee" } },
  { $group: { _id: "$categorie", ca: { $sum: "$total" } } },
  { $sort: { ca: -1 } },
]);` },
      ],
    },
    {
      id: "mongoose",
      title: "Mongoose ODM",
      blocks: [
        { type: "code", filename: "models/Produit.js", language: "javascript", code: `const mongoose = require("mongoose");
const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, min: 0 },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: "Categorie" },
});
produitSchema.pre("save", function (next) { next(); }); // middleware
const Produit = mongoose.model("Produit", produitSchema);
// await Produit.find().populate("categorie");` },
      ],
    },
    {
      id: "mongodb-atlas-connexion",
      title: "Base de données MongoDB Atlas",
      blocks: [
        { type: "h", text: "1. Création du compte" },
        { type: "p", text: "https://account.mongodb.com/account/login" },
        { type: "h", text: "2. Création du cluster" },
        { type: "list", items: ["Choisir un cluster Shared (gratuit)"] },
        { type: "h", text: "3. Connexion" },
        { type: "list", items: ["Cliquer sur Connect", "Puis Connect your application"] },
        { type: "h", text: "4. Chaîne de connexion" },
        { type: "list", items: [
          "Remplacer <password> par le mot de passe admin",
          "Ajouter ton IP dans Network Access",
        ]},
        { type: "code", filename: "text", language: "text", code: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/myDatabase` },
      ],
    },
    {
      id: "mongodb-modele-user-mongoose",
      title: "Définir le modèle de données (MongoDB + Mongoose)",
      blocks: [
        { type: "h", text: "1. Créer le dossier models" },
        { type: "diagram", content: `api/
└── models/
    └── user.js     ← modèle MongoDB (schéma)` },
        { type: "p", text: "Exemple models/user.js :" },
        { type: "code", filename: "models/user.js", language: "javascript", code: `const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:     { type: String, required: true, unique: true },
    password:  { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);` },
        { type: "h", text: "2. Chiffrer les mots de passe (bcrypt)" },
        { type: "p", text: "Installation :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install bcrypt --save` },
        { type: "p", text: "Exemple d'utilisation :" },
        { type: "code", filename: "js", language: "javascript", code: `const bcrypt = require('bcrypt');

// Hash du mot de passe
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Vérification du mot de passe
const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};` },
        { type: "h", text: "3. Le service (logique métier)" },
        { type: "p", text: "Créer le dossier services/ puis le fichier services/users.js. Ce fichier contient la logique CRUD." },
        { type: "h", text: "4. Service Users — CRUD complet" },
        { type: "p", text: "Ajouter un utilisateur :" },
        { type: "code", filename: "services/users.js", language: "javascript", code: `const User   = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (data) => {
    const hash = await bcrypt.hash(data.password, 10);
    const user = new User({
        email:    data.email,
        password: hash
    });
    return await user.save();
};` },
        { type: "p", text: "Récupérer un utilisateur par ID :" },
        { type: "code", filename: "services/users.js", language: "javascript", code: `exports.getUserById = async (id) => {
    return await User.findById(id);
};` },
        { type: "p", text: "Modifier un utilisateur :" },
        { type: "code", filename: "services/users.js", language: "javascript", code: `exports.updateUser = async (id, data) => {
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    return await User.findByIdAndUpdate(id, data, { new: true });
};` },
        { type: "p", text: "Supprimer un utilisateur :" },
        { type: "code", filename: "services/users.js", language: "javascript", code: `exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};` },
        { type: "h", text: "5. Démarrer l'API" },
        { type: "code", filename: "terminal", language: "bash", code: `# Production
npm run start

# Mode développement
npm run dev` },
        { type: "h", text: "6. Tester l'API avec Postman" },
        { type: "p", text: "Installer Postman : https://www.postman.com/downloads/" },
        { type: "p", text: "Ajouter un utilisateur :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : POST
URL     : http://localhost:3000/users/add
Body    : x-www-form-urlencoded
Champs  : email, password` },
        { type: "p", text: "Vérifier dans MongoDB : aller sur MongoDB Atlas, copier l'ID de l'utilisateur." },
        { type: "p", text: "Récupérer un utilisateur :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : GET
URL     : http://localhost:3000/users/:id` },
        { type: "p", text: "Modifier un utilisateur :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : PATCH
URL     : http://localhost:3000/users/:id` },
        { type: "p", text: "Supprimer un utilisateur :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : DELETE
URL     : http://localhost:3000/users/:id` },
      ],
    },
  ],
};