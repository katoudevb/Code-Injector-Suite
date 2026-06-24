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
  ],
};
