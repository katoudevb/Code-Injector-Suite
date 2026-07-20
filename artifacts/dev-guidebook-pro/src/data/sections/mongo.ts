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
    {
      id: "mongo-nosql-introduction-limites",
      title: "Les bases de données NoSQL — Introduction et limites du relationnel",
      blocks: [
        { type: "p", text: "Les bases de données NoSQL constituent une avancée majeure face aux bases relationnelles traditionnelles. Elles sont essentielles pour les applications Web et mobiles modernes, capables de gérer des volumes de données énormes avec une grande flexibilité." },
        { type: "note", variant: "info", text: "NoSQL = \"Not Only SQL\" — popularisé en 2009, concepts remontant aux années 1960." },
        { type: "h", text: "Limites du modèle relationnel" },
        { type: "list", items: [
          "Les clés étrangères imposent que toutes les données soient sur le même serveur → limite la scalabilité horizontale",
          "Le format des données dans les tables ne reflète pas toujours le format dans le programme",
          "Les jointures multiples nuisent aux performances",
        ]},
        { type: "h", text: "Avantages du NoSQL" },
        { type: "list", items: [
          "Données facilement réparties → scalabilité horizontale",
          "Structure clé-valeur simple à mettre en place",
          "Stockage dans un format correspondant au langage de programmation (JSON, listes…)",
          "Toutes les informations regroupées par unité logique (sans jointures)",
          "Schéma flexible",
        ]},
        { type: "h", text: "Inconvénients du NoSQL" },
        { type: "list", items: [
          "Pas de mécanisme de cohérence des données (pas de clés étrangères)",
          "Non adapté pour des transactions sécurisées (banque…)",
          "Favorise la redondance des données",
          "Recherches multicritères difficiles",
          "Manque de standardisation",
        ]},
        { type: "h", text: "Bilan NoSQL vs SQL" },
        { type: "table", headers: ["Critère", "NoSQL", "SQL"], rows: [
          ["Performances", "Meilleures", "Moins bonnes"],
          ["Cohérence des données", "Non garantie", "Garantie (ACID)"],
          ["Transactions", "Non géré", "Géré"],
          ["Scalabilité horizontale", "Facile et moins coûteux", "Plus difficile"],
          ["Volume de données", "Optimisé pour le Big Data", "Standard"],
        ]},
      ],
    },
    {
      id: "mongo-acid-vs-base-cap",
      title: "ACID vs BASE et le théorème de CAP",
      blocks: [
        { type: "h", text: "Rappels sur ACID (SQL)" },
        { type: "table", headers: ["Propriété", "Principe", "Exemple"], rows: [
          ["Atomicité", "\"Tout ou rien\"", "Transfert bancaire : débiter ET créditer, ou rien"],
          ["Cohérence", "BDD passe d'un état valide à un autre", "La somme de tous les comptes reste positive"],
          ["Isolation", "Transactions concurrentes isolées", "Pas de \"lectures sales\" ou \"lectures non répétables\""],
          ["Durabilité", "Effets permanents même après une panne", "Commande confirmée = toujours enregistrée"],
        ]},
        { type: "h", text: "Propriétés BASE (NoSQL)" },
        { type: "p", text: "BASE = Basically Available, Soft state, Eventual consistency" },
        { type: "table", headers: ["Propriété", "Principe", "Exemple"], rows: [
          ["Basically Available", "Système répond toujours, même en cas de panne partielle", "Réseau social montre la liste d'amis même si un serveur est en panne"],
          ["Soft State", "L'état peut changer au fil du temps sans nouvelle entrée", "Nœuds d'une BDD distribuée peuvent avoir des états différents"],
          ["Eventual Consistency", "Les mises à jour seront propagées à tous les nœuds à terme", "Message envoyé n'apparaît pas instantanément pour tous"],
        ]},
        { type: "note", variant: "info", text: "ACID → environnements où la cohérence est critique (banques). BASE → environnements où disponibilité et scalabilité priment (réseaux sociaux)." },
        { type: "h", text: "Théorème de CAP" },
        { type: "p", text: "Un système distribué ne peut garantir que 2 des 3 propriétés suivantes simultanément :" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│               THÉORÈME DE CAP                        │
│                                                      │
│              [C] Cohérence                           │
│              /           \\                           │
│             /             \\                          │
│   [A] Disponibilité ── [P] Tolérance partition       │
│                                                      │
│  CP : HBase, Google Bigtable                         │
│  AP : Cassandra, DynamoDB                            │
│  CA : Théorique (irréaliste en distribué)            │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "table", headers: ["Combinaison", "Sacrifice", "Exemples"], rows: [
          ["CP", "Disponibilité", "HBase, Google Bigtable, MongoDB"],
          ["AP", "Cohérence", "Cassandra, DynamoDB, Couchbase"],
          ["CA", "Tolérance partition", "Irréaliste en distribué"],
        ]},
      ],
    },
    {
      id: "mongo-4-familles-nosql",
      title: "Les 4 familles de bases de données NoSQL",
      blocks: [
        { type: "h", text: "1. Bases de données clé-valeur" },
        { type: "p", text: "Données stockées en paires clé → valeur. Structure similaire à une table de hachage/dictionnaire." },
        { type: "p", text: "Avantages : simplicité, performance (pas de jointures), scalabilité horizontale, flexibilité. Limites : pas de requêtes complexes, transactions ACID non garanties. Exemples : Redis (caching), Amazon DynamoDB, Riak." },
        { type: "h", text: "2. Bases de données orientées colonnes" },
        { type: "p", text: "Données stockées par colonnes (pas par lignes). Toutes les valeurs d'une colonne ensemble." },
        { type: "p", text: "Avantages : accès rapide (seulement colonnes pertinentes), compression efficace, optimisées pour l'analytique. Limites : écritures complexes coûteuses, ACID non garanti. Exemples : Apache Cassandra, HBase, Google Bigtable." },
        { type: "h", text: "3. Bases de données orientées document" },
        { type: "p", text: "Données en documents semi-structurés (JSON, BSON, XML, YAML)." },
        { type: "code", filename: "document.json", language: "json", code: `{
  "id": 1,
  "nom": "Dupont",
  "commandes": [
    { "produit": "livre", "prix": 15.99 },
    { "produit": "stylo", "prix": 2.50 }
  ]
}` },
        { type: "p", text: "Avantages : flexibilité du schéma, performance sur données semi-structurées, facilité de développement, scalabilité horizontale. Limites : transactions ACID limitées, redondance des données. Exemples : MongoDB, CouchDB, Amazon DocumentDB." },
        { type: "h", text: "4. Bases de données orientées graphe" },
        { type: "p", text: "Données organisées en nœuds et arêtes (liens)." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│           STRUCTURE D'UN GRAPHE                  │
│                                                  │
│  [Alice] ──── "ami de" ────► [Bob]               │
│     │                           │                │
│  "achète"                    "achète"            │
│     │                           │                │
│     ▼                           ▼                │
│  [Produit A]              [Produit B]            │
│                                                  │
│  Nœuds = entités (personnes, produits…)          │
│  Arêtes = relations (ami de, achète…)            │
└──────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Avantages : représentation naturelle des relations, requêtes performantes sur données connectées, flexibilité. Limites : complexité de modélisation, scalabilité horizontale complexe. Exemples : Neo4j, Amazon Neptune, ArangoDB." },
        { type: "note", variant: "info", title: "Cas d'utilisation", text: "Réseaux sociaux, moteurs de recommandation, détection de fraude, gestion des réseaux IT." },
      ],
    },
    {
      id: "mongo-fondamentaux-organisation",
      title: "Les fondamentaux de MongoDB — Organisation des données",
      blocks: [
        { type: "p", text: "MongoDB est un SGBD orienté documents NoSQL. Données stockées en BSON (Binary JSON)." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│          ORGANISATION MONGODB                        │
│                                                      │
│  BASE DE DONNÉES (database)                          │
│  └── COLLECTION (≈ table, mais sans schéma fixe)     │
│       └── DOCUMENT (≈ ligne, objet JSON/BSON)        │
│            └── CHAMP (≈ colonne)                     │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Base de données — ensemble organisé de données (comme un dossier de collections)",
          "Collection — ensemble de documents, sans schéma fixe. Documents d'une même collection peuvent avoir des structures différentes",
          "Document — objet individuel unique, stocké en BSON",
          "Champ — élément de données unique dans un document (nom, téléphone…)",
        ]},
        { type: "h", text: "Installer MongoDB" },
        { type: "table", headers: ["Option", "Description"], rows: [
          ["Docker", "Outil de gestion de logiciels, installe en quelques minutes. Site : https://www.docker.com/"],
          ["Cloud (sans installation)", "DBaaS — MongoDB Atlas offre une offre gratuite (M0). OVH également disponible"],
          ["Installation locale", "Linux (apt), macOS (brew), Windows (.msi)"],
        ]},
        { type: "p", text: "Éditions : Enterprise (commerciale) ou Community (open source)." },
        { type: "h", text: "Clients MongoDB" },
        { type: "table", headers: ["Client", "Description"], rows: [
          ["mongosh", "Ligne de commande officielle"],
          ["MongoDB Compass", "Interface graphique, gratuite, multi-plateforme"],
          ["Studio 3T", "Interface graphique commerciale avec fonctionnalités gratuites limitées"],
          ["VS Code Extension", "Extension MongoDB for VS Code"],
          ["Adminer", "Client web, fonctionnalités limitées à l'inspection"],
        ]},
      ],
    },
    {
      id: "mongo-crud-mongosh",
      title: "Opérations CRUD avec mongosh",
      blocks: [
        { type: "h", text: "Création d'une base et d'une collection" },
        { type: "code", filename: "creation.js", language: "jsx", code: `// Afficher les bases existantes
show databases

// Créer/sélectionner une base de données
use exempleBDD

// Créer une collection
db.createCollection('maCollection')

// Afficher les collections
show collections` },
        { type: "note", variant: "info", text: "À l'installation, MongoDB crée 3 bases internes (admin, config, local) — ne pas les manipuler. Une BDD vide n'est pas visible avec show databases mais reste accessible via db." },
        { type: "h", text: "Insertion de documents" },
        { type: "code", filename: "insertOne.js", language: "jsx", code: `db.customers.insertOne({
  nom: "Dupont",
  prenom: "Alain",
  age: 30,
  email: "alain@example.com"
})
// Retourne : { acknowledged: true, insertedId: ObjectId("...") }` },
        { type: "code", filename: "insertMany.js", language: "jsx", code: `db.customers.insertMany([
  { nom: "Martin", prenom: "Sophie", age: 25 },
  { nom: "Bernard", prenom: "Paul", age: 40 },
  { nom: "Lemaire", prenom: "Marie", age: 35 }
])
// Retourne : { acknowledged: true, insertedIds: [...] }` },
        { type: "h", text: "Recherche de documents" },
        { type: "code", filename: "find.js", language: "jsx", code: `db.customers.find()
// Paginé par 20 résultats. Utiliser "it" pour passer à la page suivante

db.customers.find({ ville: "Paris" })

// findOne() : retourne seulement le premier document correspondant
db.customers.findOne({ nom: "Dupont" })` },
        { type: "h", text: "Mise à jour de documents" },
        { type: "code", filename: "updateOne.js", language: "jsx", code: `db.customers.updateOne(
  { nom: "Dupont" },          // critères de sélection
  { $set: { age: 31 } }       // nouvelles valeurs
)
// Retourne : matchedCount, modifiedCount` },
        { type: "code", filename: "updateMany.js", language: "jsx", code: `db.customers.updateMany(
  { ville: "Paris" },
  { $set: { actif: true } }
)
// ⚠️ Sans critères : tous les documents sont mis à jour` },
        { type: "code", filename: "replaceOne.js", language: "jsx", code: `// Remplace le document entier (les champs non inclus disparaissent)
db.customers.replaceOne(
  { nom: "Dupont" },
  { nom: "Dupont", prenom: "Alain", age: 32 }
)` },
        { type: "h", text: "Suppression de documents" },
        { type: "code", filename: "deleteOne.js", language: "jsx", code: `db.customers.deleteOne({ nom: "Dupont" })` },
        { type: "code", filename: "deleteMany.js", language: "jsx", code: `db.customers.deleteMany({ ville: "Paris" })
// ⚠️ Sans critères : tous les documents sont supprimés` },
      ],
    },
    {
      id: "mongo-operateurs",
      title: "Les opérateurs MongoDB",
      blocks: [
        { type: "p", text: "Les opérateurs sont reconnaissables par le caractère $." },
        { type: "h", text: "Opérateurs de comparaison" },
        { type: "table", headers: ["Opérateur", "Signification"], rows: [
          ["$eq", "Égal à"], ["$gt", "Supérieur à"], ["$gte", "Supérieur ou égal"],
          ["$lt", "Inférieur à"], ["$lte", "Inférieur ou égal"], ["$ne", "Différent de"],
        ]},
        { type: "p", text: "Exemple — trouver les clients de moins de 35 ans :" },
        { type: "code", filename: "comparaison.js", language: "jsx", code: `db.customers.find({ age: { $lt: 35 } })` },
        { type: "h", text: "Opérateurs logiques" },
        { type: "table", headers: ["Opérateur", "Signification"], rows: [
          ["$and", "ET logique"], ["$or", "OU logique"], ["$not", "Négation"], ["$nor", "NI logique (XOR)"],
        ]},
        { type: "p", text: "Exemple — clients dont l'âge est entre 32 et 42 ans :" },
        { type: "code", filename: "logique.js", language: "jsx", code: `db.customers.find({
  $and: [
    { age: { $gte: 32 } },
    { age: { $lte: 42 } }
  ]
})` },
        { type: "h", text: "Opérateurs de mise à jour" },
        { type: "table", headers: ["Opérateur", "Action"], rows: [
          ["$set", "Ajouter ou modifier un champ"],
          ["$unset", "Supprimer un champ"],
          ["$inc", "Incrémenter une valeur"],
          ["$push", "Ajouter une valeur à un tableau"],
          ["$pull", "Supprimer une valeur d'un tableau"],
        ]},
        { type: "code", filename: "maj-multiple.js", language: "jsx", code: `db.customers.updateOne(
  { nom: "Dupont" },
  {
    $set: { prenom: "Jean", pays: "France" },
    $unset: { email: "" },
    $inc: { age: 1 },
    $pull: { hobbies: "codding" }
  }
)` },
        { type: "h", text: "Types de données MongoDB" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["String", "Chaîne de caractères UTF-8"],
          ["Integer", "Entier 32 ou 64 bits"],
          ["Boolean", "Vrai ou faux"],
          ["Double", "Nombre à virgule flottante"],
          ["Array", "Liste ou tableau de valeurs"],
          ["Object", "Document BSON imbriqué"],
          ["ObjectId", "Identifiant unique (clé primaire)"],
          ["Date", "Date au format UTC"],
          ["Null", "Valeur nulle ou inexistante"],
        ]},
      ],
    },
    {
      id: "mongo-agregation-avancee",
      title: "Le framework d'agrégation de MongoDB",
      blocks: [
        { type: "p", text: "Ensemble d'outils pour le traitement et l'analyse avancée des données : filtrage, groupement, calculs. Le pipeline d'agrégation est comparable à une chaîne de montage : chaque étape effectue une transformation sur les documents." },
        { type: "table", headers: ["Opérateur", "Rôle"], rows: [
          ["$match", "Filtre les documents selon des critères"],
          ["$group", "Regroupe par champs spécifiés (sommes, moyennes…)"],
          ["$sort", "Trie les documents"],
          ["$limit", "Limite le nombre de documents"],
          ["$project", "Sélectionne/exclut des champs"],
        ]},
        { type: "p", text: "Exemple — total dépensé par client :" },
        { type: "code", filename: "aggregate.js", language: "jsx", code: `db.commandes.aggregate([
  {
    $group: {
      _id: "$client_id",
      total: { $sum: "$montant" }
    }
  },
  {
    $sort: { total: -1 }  // tri décroissant
  }
])` },
      ],
    },
    {
      id: "mongo-modelisation-donnees",
      title: "Modélisation de données avec MongoDB",
      blocks: [
        { type: "h", text: "L'incorporation (embedding)" },
        { type: "p", text: "Stocker toutes les données liées dans un seul document." },
        { type: "code", filename: "embedding.js", language: "jsx", code: `// Article avec commentaires incorporés
{
  _id: ObjectId("..."),
  titre: "Mon article",
  contenu: "...",
  commentaires: [
    { auteur: "Alice", texte: "Super article !" },
    { auteur: "Bob", texte: "Très intéressant" }
  ]
}` },
        { type: "p", text: "Avantages : récupération en une seule requête, mises à jour directes. Quand utiliser : données lues ensemble, mises à jour simultanées, taille du document dans les limites." },
        { type: "h", text: "Les références" },
        { type: "p", text: "Utiliser des identifiants pour relier des documents distincts." },
        { type: "code", filename: "references.js", language: "jsx", code: `// Collection "articles"
{ _id: ObjectId("art1"), titre: "Mon article", contenu: "..." }

// Collection "commentaires"
{ _id: ObjectId("com1"), article_id: ObjectId("art1"), texte: "Super !" }
{ _id: ObjectId("com2"), article_id: ObjectId("art1"), texte: "Intéressant" }` },
        { type: "p", text: "Avantages : flexibilité (modification sans affecter autres documents), scalabilité pour données volumineuses. Quand utiliser : données mises à jour fréquemment, relations complexes, chargement séparé ou paginé." },
        { type: "h", text: "Comment choisir ?" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│           INCORPORATION vs RÉFÉRENCES                 │
├──────────────────────┬───────────────────────────────┤
│  INCORPORATION       │  RÉFÉRENCES                   │
├──────────────────────┼───────────────────────────────┤
│  Données lues        │  Données mises à jour         │
│  ensemble            │  fréquemment                  │
│                      │                               │
│  MAJ simultanées     │  Relations complexes          │
│                      │                               │
│  Taille doc OK       │  Données volumineuses         │
│                      │                               │
│  Ex: profil + adresse│  Ex: commandes + produits     │
└──────────────────────┴───────────────────────────────┘`,
        },
      ],
    },
    {
      id: "mongo-indexation-optimisation",
      title: "Indexation et optimisation dans MongoDB",
      blocks: [
        { type: "p", text: "Un index est une structure de données stockant une petite partie du jeu de données pour un parcours rapide (comme l'index d'un livre). Sans index, MongoDB effectue un collection scan (parcourt toute la collection) → coûteux pour les grandes collections." },
        { type: "h", text: "Types d'index" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Index sur un seul champ", "Accélère les requêtes filtrant sur ce champ"],
          ["Index composé", "Créé sur plusieurs champs, utile pour filtres multiples"],
          ["Index géospatial", "Pour données géographiques (coordonnées longitude/latitude)"],
          ["Index textuel", "Recherche de chaînes de caractères dans des propriétés"],
        ]},
        { type: "code", filename: "index.js", language: "jsx", code: `// Créer un index simple (ordre croissant = 1, décroissant = -1)
db.customers.createIndex({ email: 1 })

// Créer un index composé
db.customers.createIndex({ lastName: 1, firstName: 1 })

// Lister tous les index d'une collection
db.customers.getIndexes()

// Supprimer un index
db.customers.dropIndex("email_1")
// ⚠️ Ne jamais supprimer l'index _id_` },
        { type: "h", text: "Conseils pour choisir les bons index" },
        { type: "list", items: [
          "Analyser les requêtes les plus courantes et coûteuses",
          "Utiliser explain() pour analyser l'exécution des requêtes",
          "Équilibrer lecture et écriture (plus d'index → écritures plus coûteuses)",
        ]},
        { type: "code", filename: "explain.js", language: "jsx", code: `db.customers.find({ age: { $lt: 35 } }).explain()` },
      ],
    },
    {
      id: "mongo-securite",
      title: "Sécurité dans MongoDB",
      blocks: [
        { type: "h", text: "Authentification" },
        { type: "table", headers: ["Mécanisme", "Description"], rows: [
          ["SCRAM", "Mécanisme par défaut. Processus défi-réponse"],
          ["X.509", "Basé sur des certificats, intégration PKI"],
          ["LDAP", "Authentification via serveur LDAP externe (entreprise)"],
        ]},
        { type: "code", filename: "create-user.js", language: "jsx", code: `// Dans la base admin
db.createUser({
  user: "admin",
  pwd: "motdepasse",
  roles: [{ role: "readWrite", db: "maBDD" }]
})` },
        { type: "p", text: "Autorisation — rôles prédéfinis : read, readWrite, dbAdmin, userAdmin, + rôles personnalisés." },
        { type: "h", text: "Chiffrement" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Au repos", "Chiffre les fichiers de données au niveau du stockage (MongoDB Enterprise)"],
          ["En transit", "TLS/SSL pour sécuriser les communications client-serveur et entre nœuds"],
        ]},
        { type: "h", text: "Bonnes pratiques" },
        { type: "list", items: [
          "Mises à jour régulières de MongoDB",
          "Configuration du pare-feu (limiter l'accès)",
          "Sauvegardes régulières",
          "Révision périodique des paramètres de chiffrement",
          "Sécurisation des certificats et clés (HSM)",
          "Formation et sensibilisation des équipes",
        ]},
      ],
    },
  ],
};