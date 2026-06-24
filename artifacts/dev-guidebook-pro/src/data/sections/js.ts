import type { Section } from "../types";
import { jsCourse } from "./jsCourse";

export const js: Section = {
  id: "javascript",
  title: "JavaScript",
  icon: "Braces",
  tags: ["js"],
  subsections: [
    {
      id: "variables",
      title: "Variables (const / let / var)",
      blocks: [
        { type: "code", filename: "variables.js", language: "javascript", code: `// const : valeur non réassignée (à privilégier)
const tva = 0.2;
// let : valeur qui peut changer
let total = 100;
total = total + total * tva; // 120
// var : ancienne syntaxe, à éviter
var ancien = "ne plus utiliser";
console.log(total); // 120` },
        { type: "table", headers: ["Mot-clé", "Réassignable", "Portée"], rows: [["const", "Non", "bloc { }"], ["let", "Oui", "bloc { }"], ["var", "Oui", "fonction (éviter)"]] },
      ],
    },
    {
      id: "types",
      title: "Types de données",
      blocks: [
        { type: "code", filename: "types.js", language: "javascript", code: `const nom = "Alice";    // string
const age = 30;         // number
const estAdmin = true;  // boolean
const adresse = null;   // null (volontairement vide)
let panier;             // undefined
const user = { id: 1 }; // object
console.log(typeof nom); // "string"` },
      ],
    },
    {
      id: "fonctions",
      title: "Fonctions",
      blocks: [
        { type: "code", filename: "fonctions.js", language: "javascript", code: `// Déclaration de fonction
function calculerTotal(prix, quantite) {
  return prix * quantite;
}
// Arrow function + paramètre par défaut
const appliquerRemise = (montant, taux = 0.1) => montant * (1 - taux);
// Paramètre rest : regroupe les arguments dans un tableau
const additionner = (...nombres) => nombres.reduce((s, n) => s + n, 0);
console.log(calculerTotal(20, 3));    // 60
console.log(appliquerRemise(100));    // 90
console.log(additionner(1, 2, 3, 4)); // 10` },
      ],
    },
    {
      id: "conditions",
      title: "Conditions",
      blocks: [
        { type: "code", filename: "conditions.js", language: "javascript", code: `const stock = 0;
if (stock > 0) { console.log("Disponible"); }
else { console.log("Rupture"); }

// Ternaire : condition ? siVrai : siFaux
const etat = stock > 0 ? "Disponible" : "Rupture";

// Nullish coalescing : défaut si null/undefined
const mode = null ?? "Standard"; // "Standard"

// Optional chaining : accès sûr
const user = { profil: null };
console.log(user.profil?.email); // undefined (pas d'erreur)

switch ("admin") {
  case "admin": console.log("Accès total"); break;
  default: console.log("Accès limité");
}` },
      ],
    },
    {
      id: "boucles",
      title: "Boucles",
      blocks: [
        { type: "code", filename: "boucles.js", language: "javascript", code: `const produits = ["Sac", "Montre", "Chaussures"];
for (let i = 0; i < produits.length; i++) console.log(produits[i]);
for (const produit of produits) console.log(produit); // valeurs
const user = { nom: "Alice", age: 30 };
for (const cle in user) console.log(cle, user[cle]);   // clés
produits.forEach((p, i) => console.log(i, p));` },
      ],
    },
    {
      id: "tableaux",
      title: "Tableaux",
      blocks: [
        { type: "code", filename: "tableaux.js", language: "javascript", code: `const prix = [10, 25, 5, 40];
prix.push(15); // ajoute à la fin
prix.pop();    // retire le dernier
const ttc = prix.map((p) => p * 1.2);        // transforme
const chers = prix.filter((p) => p > 20);     // filtre -> [25,40]
const total = prix.reduce((acc, p) => acc + p, 0); // somme
const premier = prix.find((p) => p > 20);     // 25
prix.sort((a, b) => a - b);                   // tri croissant
console.log(prix.includes(40));               // true` },
      ],
    },
    {
      id: "objets",
      title: "Objets",
      blocks: [
        { type: "code", filename: "objets.js", language: "javascript", code: `const produit = { id: 1, nom: "Sac à dos", prix: 49.9 };
console.log(produit.nom);     // accès par point
console.log(produit["prix"]); // accès par crochets
produit.stock = 12;           // ajout
console.log(Object.keys(produit));    // clés
console.log(Object.values(produit));  // valeurs
console.log(Object.entries(produit)); // [clé, valeur]
const enPromo = { ...produit, prix: 39.9 }; // spread` },
      ],
    },
    {
      id: "destructuring",
      title: "Destructuring",
      blocks: [
        { type: "code", filename: "destructuring.js", language: "javascript", code: `const user = { nom: "Alice", ville: "Paris", age: 30 };
const { nom, ville } = user;                 // extraction
const { age: anciennete, pays = "France" } = user; // renommage + défaut
const couleurs = ["rouge", "vert", "bleu"];
const [premiere, , troisieme] = couleurs;    // saute la 2e
console.log(nom, ville, troisieme);` },
      ],
    },
    {
      id: "modules",
      title: "Modules ES6",
      blocks: [
        { type: "code", filename: "panier.js", language: "javascript", code: `// Export nommé
export const tva = 0.2;
export function calculerTTC(ht) { return ht * (1 + tva); }
// Export par défaut (un seul par fichier)
export default class Panier { constructor() { this.articles = []; } }` },
        { type: "code", filename: "app.js", language: "javascript", code: `// Import par défaut + nommés
import Panier, { tva, calculerTTC } from "./panier.js";
const monPanier = new Panier();
console.log(calculerTTC(100)); // 120` },
      ],
    },
    {
      id: "classes",
      title: "Classes",
      blocks: [
        { type: "code", filename: "classes.js", language: "javascript", code: `class Produit {
  #stock = 0; // propriété privée
  constructor(nom, prix) { this.nom = nom; this.prix = prix; }
  afficher() { return this.nom + " : " + this.prix + " €"; }
  get enStock() { return this.#stock > 0; }
  set ajouterStock(n) { this.#stock += n; }
}
class ProduitPromo extends Produit {
  constructor(nom, prix, remise) {
    super(nom, prix); // appelle le constructeur parent
    this.remise = remise;
  }
}` },
      ],
    },
    {
      id: "dom",
      title: "Manipulation du DOM",
      blocks: [
        { type: "code", filename: "dom.js", language: "javascript", code: `const titre = document.querySelector("h1");
const items = document.querySelectorAll(".produit");
const li = document.createElement("li");
li.textContent = "Nouveau produit";
li.classList.add("actif");
document.querySelector("ul").appendChild(li);
titre.innerHTML = "<strong>Boutique</strong>";
titre.setAttribute("data-id", "42");` },
      ],
    },
    {
      id: "evenements",
      title: "Événements",
      blocks: [
        { type: "code", filename: "evenements.js", language: "javascript", code: `const bouton = document.querySelector("#acheter");
bouton.addEventListener("click", (e) => {
  e.preventDefault(); // empêche le comportement par défaut
  console.log("Ajouté au panier");
});
// Délégation : un écouteur pour plusieurs enfants
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.matches(".supprimer")) e.target.closest("li").remove();
});
// Données d'un formulaire
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data.get("email"));
});` },
      ],
    },
    {
      id: "promesses",
      title: "Promesses et async/await",
      blocks: [
        { type: "code", filename: "promesses.js", language: "javascript", code: `fetch("/api/produits")
  .then((r) => r.json())
  .then((produits) => console.log(produits))
  .catch((err) => console.error(err))
  .finally(() => console.log("Terminé"));

// Plusieurs promesses en parallèle
Promise.all([fetch("/api/users"), fetch("/api/commandes")])
  .then(() => console.log("Tout est chargé"));

async function chargerProduits() {
  try {
    const r = await fetch("/api/produits");
    return await r.json();
  } catch (err) { console.error("Erreur :", err); }
}` },
      ],
    },
    {
      id: "fetch",
      title: "Fetch API",
      blocks: [
        { type: "code", filename: "api.js", language: "javascript", code: `// POST : créer une commande
async function creerCommande(commande) {
  const r = await fetch("/api/commandes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commande), // objet -> texte JSON
  });
  return r.json();
}
// PUT : mettre à jour
await fetch("/api/produits/42", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prix: 39.9 }),
});
// DELETE
await fetch("/api/produits/42", { method: "DELETE" });` },
      ],
    },
    {
      id: "storage",
      title: "LocalStorage et JSON",
      blocks: [
        { type: "code", filename: "storage.js", language: "javascript", code: `const panier = [{ id: 1, nom: "Sac" }];
localStorage.setItem("panier", JSON.stringify(panier)); // sauvegarde
const sauvegarde = JSON.parse(localStorage.getItem("panier")) ?? [];
localStorage.removeItem("panier");
sessionStorage.setItem("token", "abc123"); // effacé à la fermeture` },
      ],
    },
    ...jsCourse,
  ],
};
