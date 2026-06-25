import type { SubSection } from "../types";

export const jsFrontend: SubSection[] = [
  {
    id: "js-fe-variable",
    title: "Variable",
    blocks: [
      { type: "p", text: "Conteneur (boite) qui sert \u00e0 stocker une valeur" },
      { type: "diagram", content: `[ Variable ]
├── let   → modifiable
└── const → définitive (constante)` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Modifiable avec "let"
let nomVariable = "valeur";
nomVariable = "autre valeur";

// Definitive avec "const"
const nomVariable = "valeur";` },
    ],
  },
  {
    id: "js-fe-types-de-donn-es",
    title: "Types de donn\u00e9es",
    blocks: [
      { type: "p", text: "Information repr\u00e9sent\u00e9e par une valeur dans un programme" },
      { type: "diagram", content: `Types de données
├── Primitifs
│   ├── number (entier)       → let a = 3;
│   ├── number (décimal)      → let b = 3.14;
│   ├── string                → let a = "Texte";
│   ├── boolean true          → let a = true;
│   ├── boolean false         → let a = false;
│   ├── null (vide volontaire)→ let a = null;
│   └── undefined (sans val)  → let a;
└── Complexes
    ├── tableau vide          → let a = [];
    ├── tableau de nombres    → let a = [1, 2, 3];
    ├── tableau mixte         → let b = [true, "texte", 27];
    └── objet                 → let b = { clé: "valeur", nom: "Alex" };` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Primitive nombre entier
let a = 3;

// Primitive nombre décimale
let b = 3.14;

// Primitive chaîne de caractère avec "" ou ''
let a = "Texte";

// Primitive booléen "vrai"
let a = true;

// Primitive booléen "faux"
let a = false;

// Primitive volontairement vide
let a = null;

// Primitive sans valeur
let a;

// Complexe tableau vide
let a = [];

// Complexe tableau à nombre
let a = [1, 2, 3];

// Complexe tableau à différentes valeurs "mixte"
let b = [true, "texte", 27];

// Complexe objet
let b = {
  clé: "valeur",
  nom: "Alex",
};` },
    ],
  },
  {
    id: "js-fe-types-de-port-e-d-une-variable-scope",
    title: "Types de port\u00e9e d\u2019une variable (scope)",
    blocks: [
      { type: "p", text: "D\u00e9termine o\u00f9 une variable est accessible dans le code" },
      { type: "diagram", content: `Portée (Scope)
├── Globale → partout dans le fichier
├── Locale  → uniquement dans la fonction
└── Bloc    → uniquement dans le bloc { }` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Globale (partout dans le fichier)
let a = 6;
// OU
const b = "Bonjour";

// Locale (uniquement dans la fonction)
function nomFonction() {
  let a = "Bonjour";
  const b = 3;
}

// Bloc (uniquement dans le bloc)
{
  let a = 10;
  console.log(a);
}
// OU
{
  const b = "Bonjour";
  console.log(b);
}` },
    ],
  },
  {
    id: "js-fe-fonctions",
    title: "Fonctions",
    blocks: [
      { type: "p", text: "Bloc de code r\u00e9utilisable qui peut prendre des param\u00e8tres et retourner une valeur" },
      { type: "diagram", content: `Types de fonctions
├── Déclarée (classique)
├── Fléchée (arrow)
├── Fléchée retournant un objet
├── Anonyme
└── Imbriquée
    ├── Fonction dans une fonction
    └── Fonction retournant une fonction` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Déclarée (classique)
function nomFonction(param1) {
  // Code
  return param1;
}

// Fléchée
const nomFonction = (param1) => {
  return param1;
};

// Fléchée qui retourne un objet
let nomFonction = (param1, param2) => {
  param1 = "valeur";
  param2 = "valeur";
};

// Anonyme
const nomFonction = function (nom) {
  return "valeur" + nom;
};` },
      { type: "h", text: "Imbrications" },
      { type: "p", text: "Fonction d\u00e9finie \u00e0 l\u2019int\u00e9rieur d\u2019une autre fonction" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Fonction imbriquée
function principale() {
  function sousFonction() {
    // Code à exécuter
    console.log("Je suis dans la sous-fonction");
  }
  sousFonction(); // appel de la fonction interne
}
principale(); // appel de la fonction principale

// Fonction qui retourne une fonction
function nomFonction(param1) {
  return function (param2) {
    return param2 + param1;
  };
}` },
    ],
  },
  {
    id: "js-fe-commentaires",
    title: "Commentaires",
    blocks: [
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Sur une ligne

/* Sur plusieurs
   lignes */

// === Sépare zones de blocs ===` },
    ],
  },
  {
    id: "js-fe-condition",
    title: "Condition",
    blocks: [
      { type: "p", text: "Permet d\u2019ex\u00e9cuter du code uniquement si une condition est vraie" },
      { type: "diagram", content: `Conditions
├── if             → si vrai
├── if / else      → si vrai, sinon
├── if / else if / else → multiple conditions
└── switch         → tester parmi plusieurs cas` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Si la condition est vraie
if (condition) {
  // Code exécuté si vrai
}

// Si la condition est vraie, sinon
if (condition) {
  // Code exécuté si vrai
} else {
  // Autre code exécuté
}

// Si condition 1 vraie, sinon si condition 2 vraie, sinon
if (condition1) {
  // Code exécuté si vrai
} else if (condition2) {
  // Code exécuté si vrai
} else {
  // Autre code exécuté
}

// Tester une valeur parmi plusieurs cas (remplace plusieurs "if...else if")
switch (valeur) {
  case "cas1":
    // Code 1
    break;
  case "cas2":
    // Code 2
    break;
  default:
    // Code par défaut
}` },
    ],
  },
  {
    id: "js-fe-boucles",
    title: "Boucles",
    blocks: [
      { type: "p", text: "Permet de r\u00e9p\u00e9ter du code plusieurs fois tant qu\u2019une condition est vraie" },
      { type: "diagram", content: `Boucles
├── for      → répétition avec compteur
├── while    → tant que condition vraie
├── do...while → exécuté au moins une fois
├── for...of → parcourir les valeurs d'un tableau
└── for...in → parcourir les clés d'un objet` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Répétition du code jusqu'à une condition fausse
for (initialisation; condition; incrémentation) {
  // Code à répéter
}

// Répétition du code tant que la condition est vraie
while (condition) {
  // Code à répéter
}

// Code exécuté au moins une fois puis condition testée
do {
  // Code exécuté
} while (condition);

// Parcourir les valeurs d'un tableau "for...of"
const variable = ["valeur1", "valeur2", "valeur3"];
for (const element of variable) {
  // Code exécuté pour chaque valeur
  console.log(element);
}

// Parcourir les clés d'un objet "for...in"
const objet = {
  cle1: "valeur1",
  cle2: "valeur2",
  cle3: "valeur3",
};
for (const cle in objet) {
  // Code exécuté pour chaque clé
  console.log(cle);           // affiche la clé
  console.log(objet[cle]);    // affiche la valeur associée
}` },
    ],
  },
  {
    id: "js-fe-tableaux",
    title: "Tableaux",
    blocks: [
      { type: "p", text: "Structure de donn\u00e9es qui permet de stocker plusieurs valeurs dans une seule variable. C\u2019est en simple une liste de valeurs." },
      { type: "diagram", content: `Tableau
index :  [0]        [1]        [2]
valeur : "valeur1"  "valeur2"  "valeur3"
          ↑
          index commence à 0` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Accéder à un élément d'un tableau avec son index entre []
const variable = ["valeur1", "valeur2"];
const variable1 = variable[1]; // 2e élément (index commence à 0)

// Modifier un élément de tableau en utilisant son index
const variable = ["valeur1", "valeur2"];
variable[1] = "new valeur2";

// Ajouter un élément à un tableau à un index précis
const variable = ["valeur1", "valeur2"];
variable[2] = "valeur3"; // ajouter à l'index 2

// Parcourir un tableau en utilisant un index
const variable = ["valeur1", "valeur2", "valeur3"];
for (let i = 0; i < variable.length; i++) {
  // Code à exécuter à chaque itération
  console.log(variable[i]);
}

// Parcourir un tableau directement avec les valeurs "for...of"
const variable = ["valeur1", "valeur2"];
for (const valeur of variable) {
  // Code
  console.log(valeur);
}

// Définir un tableau multidimensionnel (tableau qui contient d'autres tableaux)
let variable = [
  [1, 2],
  [3, 4],
];

// Définir un tableau multidimensionnel d'objets
let variable = [
  [{ cle: "valeur1" }, { cle: "valeur2" }],
  [{ cle: "valeur3" }, { cle: "valeur4" }],
  [
    { nom: "Hugo", age: 26 },
    { nom: "Katiana", age: 28 },
  ],
];

// Exécuter des instructions pour chaque élément d'un tableau
const variable = ["valeur1", "valeur2"];
variable.forEach((element) => {
  // Instruction
  console.log(element);
});

// Transformer chaque élément d'un tableau pour créer un nouveau tableau
const variable = ["valeur1", "valeur2"];
const variable1 = variable.map((element) => "new " + element);

// Garder que les éléments qui respectent une condition
const variable = ["valeur1", "valeur2"];
const variable1 = variable.filter((element) => element === "valeur1");` },
    ],
  },
  {
    id: "js-fe-objets",
    title: "Objets",
    blocks: [
      { type: "p", text: "Sert \u00e0 stocker des donn\u00e9es avec des cl\u00e9s (propri\u00e9t\u00e9s)" },
      { type: "diagram", content: `Objet
{
  clé1: "valeur1",  ← propriété
  clé2: "valeur2",  ← propriété
  méthode() { ... } ← méthode (fonction dans objet)
}` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Accès aux propriétés d'un objet
const variable = { clé: "valeur" };
console.log(variable.clé);

// Accès dynamique aux propriétés d'un objet
const variable = { clé: "valeur" };
console.log(variable["clé"]);

// Ajouter une nouvelle propriété à l'objet
const variable = { clé: "valeur" };
variable.clé1 = "new valeur";

// Ajout dynamique d'une nouvelle propriété à l'objet
const variable = { clé: "valeur" };
variable["clé1"] = "new valeur";

// Modifier une propriété existante d'un objet (.)
const variable = { clé: "valeur" };
variable.clé = "new valeur";

// Modifier une propriété existante d'un objet ([ ])
const variable = { clé: "valeur" };
variable["clé"] = "new valeur";

// Ajouter une méthode objet dans une fonction
const variable = {
  clé(paramètre) {
    return paramètre;
  },
};

// Récupérer les données d'un objet
const variable = {
  clé1: "valeur1",
  clé2: "valeur2",
};

// Créer des objets avec une fonction constructeur
// (fabriquer plusieurs objets similaires)
function MaFonction(param1, param2) {
  this.propriete1 = param1;
  this.propriete2 = param2;
}
const variable = new MaFonction("valeur param1", "valeur param2");

// Créer des objets avec prototype (méthodes communes à plusieurs objets)
function MaFonction(param, param2) {
  this.propriete1 = param;
  this.propriete2 = param2;
}
MaFonction.prototype.nomMethode = function () {
  return this.propriete1;
};
const variable = new MaFonction("valeur param1", "valeur param2");
console.log(variable.nomMethode());

// Créer un objet avec une class
class NomClasse {
  constructor(param, param2) {
    this.propriete1 = param;
    this.propriete2 = param2;
  }
  nomMethode() {
    return this.propriete1;
  }
}
const variable = new NomClasse("valeur param1", "valeur param2");
console.log(variable.nomMethode());` },
    ],
  },
  {
    id: "js-fe-op-rateurs",
    title: "Op\u00e9rateurs",
    blocks: [
      { type: "p", text: "Symbole qui permet de faire une op\u00e9ration sur des valeurs" },
      { type: "h", text: "Arithm\u00e9tique" },
      { type: "table", headers: ["Op\u00e9rateur", "Description"], rows: [["`+`", "Addition"], ["`-`", "Soustraction"], ["`*`", "Multiplication"], ["`/`", "Division"], ["`%`", "Modulo (reste)"], ["`**`", "Exponentiation"], ["`++`", "Incr\u00e9ment\u00e9 (ajoute 1)"], ["`--`", "D\u00e9cr\u00e9ment (enl\u00e8ve 1)"]] },
      { type: "h", text: "Affectation" },
      { type: "table", headers: ["Op\u00e9rateur", "Description"], rows: [["`+=`", "Addition + affectation"], ["`-=`", "Soustraction + affectation"], ["`*=`", "Multiplication + affectation"], ["`/=`", "Division + affectation"], ["`%=`", "Modulo + affectation"], ["`**=`", "Exponentiation + affectation"]] },
      { type: "h", text: "Comparaison" },
      { type: "table", headers: ["Op\u00e9rateur", "Description"], rows: [["`==`", "\u00c9gal \u00e0 (true)"], ["`===`", "Strictement \u00e9gal (false)"], ["`!=`", "Diff\u00e9rent de (false)"], ["`!==`", "Strictement diff\u00e9rent (true)"], ["`<`", "Inf\u00e9rieur \u00e0 (true)"], ["`>`", "Sup\u00e9rieur \u00e0 (false)"], ["`<=`", "Inf\u00e9rieur ou \u00e9gal (true)"], ["`>=`", "Sup\u00e9rieur ou \u00e9gal (false)"]] },
      { type: "h", text: "Logique" },
      { type: "table", headers: ["Op\u00e9rateur", "Description"], rows: [["`&&`", "ET (vrai si les deux conditions le sont)"], ["`\\", "\\", "`", "OU (vrai si une condition l\u2019est)"], ["`!`", "NON (inverse valeur bool\u00e9en)"], ["`??`", "Coalescence nulle (retourne 1\u00e8re valeur non null)"], ["`?:`", "Ternaire (version courte \u201cif\u2026else\u201d)"]] },
      { type: "h", text: "Cha\u00eene de caract\u00e8res (m\u00e9thodes + op\u00e9rateurs)" },
      { type: "table", headers: ["M\u00e9thode / Op\u00e9rateur", "Description"], rows: [["`+`", "Concat\u00e9nation"], ["`*=`", "Concat\u00e9nation + affectation"], ["`.concat()`", "M\u00e9thode concat\u00e9nation"], ["`.toUpperCase()`", "Majuscule"], ["`.toLowerCase()`", "Minuscule"], ["`.trim()`", "Supprime espaces"], ["`.includes()`", "Contient"], ["`.startsWith()`", "Commence par"], ["`.endsWith()`", "Finit par"], ["`.slice()`", "Extraire une partie"], ["`.substring()`", "Sous-cha\u00eene"], ["`.split()`", "Transforme en tableau"], ["`.replace()`", "Remplace"], ["`.repeat()`", "R\u00e9p\u00e8te"]] },
      { type: "h", text: "Sp\u00e9ciaux" },
      { type: "table", headers: ["Op\u00e9rateur", "Description"], rows: [["`typeof`", "Type de donn\u00e9e"], ["`void`", "Sans valeur de retour"], ["`delete`", "Suppression propri\u00e9t\u00e9"]] },
      { type: "h", text: "Priorit\u00e9 des op\u00e9rateurs" },
      { type: "table", headers: ["Niveau", "Op\u00e9rateurs", "Description", "Associativit\u00e9"], rows: [["1", "`new`, `.`, `[]`, `()`", "Cr\u00e9ation objet, acc\u00e8s propri\u00e9t\u00e9, appel fonction", "gauche \u2192 droite"], ["2", "`++`, `--`", "Incr\u00e9ment / d\u00e9cr\u00e9ment (postfixe & pr\u00e9fixe)", "droite \u2192 gauche (pr\u00e9fixe) / gauche \u2192 droite (postfixe)"], ["3", "`+`, `-`, `!`, `typeof`, `void`, `delete`", "Unaires", "droite \u2192 gauche"], ["4", "`**`", "Exponentiation", "droite \u2192 gauche"], ["5", "`*`, `/`, `%`", "Multiplication / division / modulo", "gauche \u2192 droite"], ["6", "`+`, `-`", "Addition / soustraction", "gauche \u2192 droite"], ["7", "`<<`, `>>`, `>>>`", "D\u00e9calages binaires", "gauche \u2192 droite"], ["8", "`<`, `>`, `<=`, `>=`, `in`, `instanceof`", "Comparaisons", "gauche \u2192 droite"], ["9", "`==`, `!=`, `===`, `!==`", "\u00c9galit\u00e9", "gauche \u2192 droite"], ["10", "`&&`, `\\", "\\", "`, `??`, `?.`", "Logique / coalescence", "\u2014"], ["11", "`=`, `+=`, `-=`, `*=`, `/=`, `%=`", "Affectation", "droite \u2192 gauche"], ["12", "`,`", "S\u00e9parateur", "gauche \u2192 droite"]] },
    ],
  },
  {
    id: "js-fe-d-bogage",
    title: "D\u00e9bogage",
    blocks: [
      { type: "h", text: "Console" },
      { type: "p", text: "Sert \u00e0 afficher des valeurs pour tester et comprendre le code dans la console" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Afficher une variable
let variable = "valeur";
console.log(variable);

// Afficher un message et une valeur
let variable = 28;
console.log("Age :", variable);

// Afficher un objet
const variable = { nom: "Kat", age: 25 };
console.log(variable);

// Afficher plusieurs valeurs
let nom = "Kat";
let age = 28;
console.log("Nom :", nom, "Age :", age);

// Afficher un tableau
const variable = ["valeur1", "valeur2", "valeur3"];
console.log(variable);

// Afficher un objet en format tableau
const variable = {
  nom: "Kat",
  age: 28,
};
console.table(variable);

// Affiche un message d'étape (suivre le code)
console.log("Début");
let variable = "Kat";
console.log("Nom :", variable);
let variable1 = 28;
console.log("Age :", variable1);
console.log("Fin");

// Afficher une erreur
let variable = "Erreur détectée";
console.error(variable);

// Afficher un avertissement
let variable = "Attention";
console.warn(variable);` },
      { type: "h", text: "debugger" },
      { type: "p", text: "Processus d\u2019analyse du code ligne par ligne pour trouver et corriger les erreurs. Le mot se place avant l\u2019\u00e9tape \u00e0 analyser." },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Interrompre l'exécution du code
let variable1 = "valeur1";
let variable2 = "valeur2";

debugger;

let variable3 = variable1 + variable2;
console.log(variable3);` },
      { type: "h", text: "Utilisation du debugger" },
      { type: "diagram", content: `Étapes d'utilisation
1. Ouvrir la page dans le navigateur
   ├── Chrome
   └── Firefox
2. Ouvrir les outils de développement
   ├── Chrome  → F12 ou clic droit → Inspecter
   └── Firefox → F12 ou clic droit → Inspecter
3. Aller dans l'onglet Debug
   ├── Chrome  → Sources
   └── Firefox → Debugger
4. Ajouter debugger dans le code
5. Recharger la page
   └── F5 ou actualiser
       → Le navigateur s'arrête automatiquement au debugger` },
      { type: "h", text: "Techniques de d\u00e9bogage" },
      { type: "list", items: ["Affichage dans la console : console.log, console.error, \u2026", "Breakpoints classique et conditionnel (Chrome DevTools, debugger, \u2026)", "Profilage : analyser le temps d\u2019ex\u00e9cution (DevTools)", "Asynchrone : suit les op\u00e9rations en temps r\u00e9el (DevTools)", "Test/Analyse : d\u00e9tecter les erreurs avant ex\u00e9cution \u2014 Linters, tester des fonctions isol\u00e9es \u2014 Test unitaire, Test/Mocha", "Outils externes : pour les vrais utilisateurs \u2014 Sentry, \u2026"] },
      { type: "h", text: "M\u00e9thode de r\u00e9solution d\u2019un bug" },
      { type: "diagram", content: `Méthode
1. Observer le bug (symptôme)
2. Isoler le problème (comparer à d'autres projets valides)
3. Formuler une hypothèse
4. Tester (DevTools / .logs / ...)
5. Corriger le code
6. Valider le correctif
7. Nettoyer le code
8. Chercher aide (ChatGPT, StackOverflow)` },
    ],
  },
  {
    id: "js-fe-dom",
    title: "DOM",
    blocks: [
      { type: "p", text: "Repr\u00e9sentation d\u2019une page web que JavaScript peut modifier" },
      { type: "h", text: "Modifier le contenu" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Modifier du texte
const element = document.querySelector(".valeur");
element.textContent = "nouvelle valeur";

// Modifier un attribut HTML
const element = document.querySelector("a");
element.setAttribute("href", "https://site.com");

// Lire un attribut HTML
const element = document.querySelector("a");
const lien = element.getAttribute("href");
console.log(lien);` },
      { type: "h", text: "S\u00e9lectionner des \u00e9l\u00e9ments" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Sélectionner un élément grâce à son id
const element = document.getElementById("id");

// Sélectionner un élément grâce à sa classe
const element = document.getElementsByClassName("classe");

// Sélectionner un élément d'une balise HTML
const element = document.getElementsByTagName("p");

// Sélectionner tous les éléments d'un sélecteur CSS
const elements = document.querySelectorAll(".selecteur");

// Sélectionner un élément par son sélecteur
const element = document.querySelector("#monId");` },
      { type: "h", text: "Manipuler les classes CSS" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Ajouter une classe CSS à un élément HTML
const element = document.querySelector("p");
element.classList.add("classe");

// Supprimer une classe CSS d'un élément HTML
const element = document.querySelector("p");
element.classList.remove("ancienne-classe");

// Ajouter / Supprimer une classe CSS selon sa présence
const element = document.querySelector("p");
element.classList.toggle("active");

// Remplacer une classe CSS par une autre
const element = document.querySelector("p");
element.classList.replace("ancienne-classe", "nouvelle-classe");

// Modifier directement le CSS d'un élément HTML
const element = document.querySelector("p");
element.style.proprieteCSS = "red";` },
      { type: "h", text: "Cr\u00e9er, ins\u00e9rer, supprimer des \u00e9l\u00e9ments" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Créer dynamiquement un élément HTML
const element = document.createElement("p");
element.textContent = "Nouveau contenu";

// Insérer dynamiquement un élément HTML dans un autre élément (fin parent)
const parent = document.getElementById("element");
const nouvelElement = document.createElement("p");
nouvelElement.textContent = "Nouveau contenu";
parent.append(nouvelElement);

// Insérer dynamiquement un élément HTML dans un autre élément (début parent)
const parent = document.getElementById("A");
const nouvelElement = document.createElement("p");
nouvelElement.textContent = "Nouveau contenu";
parent.prepend(nouvelElement);

// Insérer dynamiquement un élément HTML (avant un élément)
const element = document.querySelector(".cible");
const nouvelElement = document.createElement("div");
nouvelElement.textContent = "Nouveau contenu";
element.before(nouvelElement);

// Insérer dynamiquement un élément HTML (après un élément)
const element = document.querySelector("p");
const nouvelElement = document.createElement("div");
nouvelElement.textContent = "nouveau contenu";
element.after(nouvelElement);

// Supprimer un élément
const element = document.querySelector("p");
element.remove();

// Remplacer un élément HTML par un autre
const element = document.querySelector(".element");
const nouvelElement = document.createElement("p");
nouvelElement.textContent = "Nouveau contenu";
element.replaceWith(nouvelElement);` },
      { type: "h", text: "\u00c9v\u00e9nements" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Exécuter du code quand un événement se produit (écouter)
const element = document.querySelector(".element");
element.addEventListener("click", function () {
  // Code exécuté au clic
  console.log("Élément cliqué !");
});

// Supprimer un événement ajouté
const element = document.querySelector(".element");
function maFonction() {
  console.log("événement déclenché");
}
element.addEventListener("click", maFonction);
// suppression
element.removeEventListener("click", maFonction);

// Créer un événement
const element = document.querySelector(".element");
const event = new Event("monEvenement");
element.dispatchEvent(event);

// Simuler un événement
const element = document.querySelector(".element");
const event = new Event("click");
element.dispatchEvent(event);

// Annuler le comportement par défaut du navigateur
const element = document.querySelector(".element");
element.addEventListener("click", (e) => {
  e.preventDefault();
});` },
      { type: "h", text: "Navigation dans le DOM (noeuds)" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Accéder au noeud parent d'un élément
const element = document.querySelector(".element");
const parent = element.parentNode;
console.log(parent);

// Récupérer tous les éléments enfants d'un élément HTML
const element = document.querySelector(".element");
const enfants = element.children;
console.log(enfants);

// Retourne le premier noeud enfant (élément ou texte)
const element = document.querySelector(".element");
const premierNoeud = element.firstChild;
console.log(premierNoeud);

// Accéder à l'élément HTML suivant au même niveau
const element = document.querySelector(".element");
const suivant = element.nextElementSibling;
console.log(suivant);

// Accéder à l'élément HTML précédent
const element = document.querySelector(".element");
const precedent = element.previousElementSibling;
console.log(precedent);

// Récupérer l'élément parent d'un élément HTML
const element = document.getElementById("parent");
element.parentElement.style.color = "red";

// Récupérer tout le contenu des noeuds enfants d'un élément
const element = document.getElementById("element");
element.textContent = "new contenu";

// Récupérer le premier élément enfant HTML d'un élément
const element = document.getElementById("element");
element.firstElementChild.style.color = "blue";

// Récupérer le dernier élément enfant HTML d'un élément
const element = document.getElementById("element");
element.lastElementChild.style.color = "green";

// Récupérer le dernier noeud enfant
const element = document.getElementById("element");
element.lastChild.textContent = "valeur";

// Récupérer le prochain noeud frère
const element = document.getElementById("element");
const suivant = element.nextSibling;

// Récupérer le noeud frère précédent
const element = document.getElementById("element");
const precedent = element.previousSibling;

// Accéder à tous les formulaires
let formulaires = document.forms;
console.log(formulaires);

// Récupérer toutes les images de la page
let images = document.images;
console.log(images);

// Récupérer tous les liens de la page avec "href"
let liens = document.links;
console.log(liens);` },
      { type: "h", text: "Hi\u00e9rarchie DOM" },
      { type: "p", text: "Structure en arbre o\u00f9 chaque \u00e9l\u00e9ment HTML a des relations parent, enfant, fr\u00e8re." },
      { type: "diagram", content: `DOCUMENT → (racine / parent principal de tout)
└── <html> → (enfant de document)
    ├── <head> → (enfant de html / frère de body)
    └── <body> → (enfant de html / frère de head)
        └── <main> → (enfant de body / petit-enfant de html)
            └── <div> → (enfant de main)
                └── <p> → (enfant de div)
                    └── <span> → (enfant de p / descendant profond)` },
    ],
  },
  {
    id: "js-fe-types-d-v-nements",
    title: "Types d\u2019\u00e9v\u00e9nements",
    blocks: [
      { type: "h", text: "1. \u00c9v\u00e9nements souris" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`click`", "clic sur un \u00e9l\u00e9ment"], ["`dblclick`", "double-clic"], ["`mousedown`", "bouton de souris enfonc\u00e9"], ["`mouseup`", "bouton rel\u00e2ch\u00e9"], ["`mousemove`", "d\u00e9placement de la souris"], ["`mouseenter`", "la souris entre dans un \u00e9l\u00e9ment (sans les enfants)"], ["`mouseleave`", "la souris sort d\u2019un \u00e9l\u00e9ment"], ["`mouseover`", "survole un \u00e9l\u00e9ment (inclut les enfants)"], ["`mouseout`", "sort d\u2019un \u00e9l\u00e9ment (inclut les enfants)"], ["`contextmenu`", "clic droit"]] },
      { type: "h", text: "2. \u00c9v\u00e9nements clavier" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`keydown`", "touche enfonc\u00e9e"], ["`keyup`", "touche rel\u00e2ch\u00e9e"]] },
      { type: "h", text: "3. \u00c9v\u00e9nements formulaire" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`submit`", "envoi du formulaire"], ["`change`", "valeur modifi\u00e9e (validation apr\u00e8s changement)"], ["`input`", "modification en temps r\u00e9el"], ["`focus`", "champ actif"], ["`blur`", "champ quitt\u00e9"], ["`focusin`", "focus avec propagation"], ["`focusout`", "blur avec propagation"]] },
      { type: "h", text: "4. Fen\u00eatre / Document" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`load`", "page compl\u00e8tement charg\u00e9e"], ["`DOMContentLoaded`", "DOM pr\u00eat (HTML charg\u00e9, sans attendre images)"], ["`resize`", "redimensionnement de la fen\u00eatre"], ["`scroll`", "d\u00e9filement de la page"], ["`beforeunload`", "quitter la page"]] },
      { type: "h", text: "5. \u00c9v\u00e9nements tactiles (Touch)" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`touchstart`", "d\u00e9but du contact"], ["`touchmove`", "d\u00e9placement du doigt"], ["`touchend`", "fin du contact"], ["`touchcancel`", "interruption du toucher"]] },
      { type: "h", text: "6. Drag & Drop" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`dragstart`", "d\u00e9but du glisser"], ["`drag`", "en cours de glisser"], ["`dragenter`", "entr\u00e9e dans une zone"], ["`dragover`", "survol d\u2019une zone"], ["`dragleave`", "sortie de zone"], ["`drop`", "d\u00e9p\u00f4t de l\u2019\u00e9l\u00e9ment"], ["`dragend`", "fin du glisser"]] },
      { type: "h", text: "7. Presse-papier (Clipboard)" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`copy`", "copier"], ["`cut`", "couper"], ["`paste`", "coller"]] },
      { type: "h", text: "8. M\u00e9dias (audio / vid\u00e9o)" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`play`", "lecture"], ["`pause`", "pause"], ["`ended`", "fin de la lecture"], ["`timeupdate`", "temps de lecture qui change"], ["`volumechange`", "volume modifi\u00e9"]] },
      { type: "h", text: "9. \u00c9v\u00e9nements CSS Animation" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`animationstart`", "d\u00e9but de l\u2019animation"], ["`animationend`", "fin de l\u2019animation"], ["`animationiteration`", "r\u00e9p\u00e9tition (boucle)"]] },
      { type: "h", text: "10. \u00c9v\u00e9nements CSS Transition" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`transitionstart`", "d\u00e9but de la transition"], ["`transitionend`", "fin de la transition"], ["`transitioncancel`", "transition interrompue"]] },
      { type: "h", text: "11. \u00c9v\u00e9nements personnalis\u00e9s" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`CustomEvent`", "\u00e9v\u00e9nement cr\u00e9\u00e9 par le d\u00e9veloppeur"]] },
      { type: "h", text: "12. Pointer Events (souris + tactile + stylet)" },
      { type: "table", headers: ["\u00c9v\u00e9nement", "Description"], rows: [["`pointerdown`", "pression (clic / doigt / stylet)"], ["`pointerup`", "rel\u00e2chement"], ["`pointermove`", "d\u00e9placement"], ["`pointerenter`", "entr\u00e9e dans un \u00e9l\u00e9ment"], ["`pointerleave`", "sortie d\u2019un \u00e9l\u00e9ment"], ["`pointercancel`", "interruption de l\u2019action"]] },
    ],
  },
  {
    id: "js-fe-erreurs",
    title: "Erreurs",
    blocks: [
      { type: "h", text: "Capture" },
      { type: "p", text: "Permet de r\u00e9cup\u00e9rer une erreur pour la traiter sans bloquer le programme" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Attraper l'erreur
try {
  // Code à risque
} catch (e) {
  // Code exécuté en cas d'erreur
  console.log(e);
}

// Décrire l'erreur (nom, message, lieu)
try {
  let x = y + 1; // erreur volontaire (y n'existe pas)
} catch (e) {
  console.log(e.name);    // type d'erreur
  console.log(e.message); // message de l'erreur
  console.log(e.stack);   // détail complet (trace)
}` },
      { type: "h", text: "Environnement de gestion" },
      { type: "diagram", content: `Environnements
├── Développement
│   ├── Affichage complet des erreurs
│   ├── Console ouverte (DevTools)
│   └── Outils de debug : console.log(), debugger, breakpoints
│
├── Test / Staging
│   ├── Les erreurs sont capturées
│   ├── Logs centralisés (système de suivi)
│   ├── Alertes limitées (pas trop d'infos visibles à l'utilisateur)
│   └── Comportement proche de la production
│
└── Production
    ├── Aucune erreur visible pour l'utilisateur
    ├── Les erreurs sont envoyées à un service externe (ex: Sentry)
    └── Anonymisation des données sensibles` },
      { type: "h", text: "Types de gestion" },
      { type: "diagram", content: `Types de gestion
├── Contextuelle métier
│   ├── Retry (réessayer une requête)
│   ├── Fallback (solution alternative)
│   └── Messages utilisateur clairs
│
├── Erreurs non capturées
│   └── Éviter les crash inattendus
│
└── Environnement multi-utilisateur
    └── Ajouter du contexte aux erreurs (user ID, session, actions précédentes)` },
      { type: "h", text: "R\u00e9solution des erreurs" },
      { type: "diagram", content: `1.  Lire attentivement le message d'erreur
2.  Repérer l'emplacement de l'erreur
3.  Analyser le contexte (variables, fonctions, ...)
4.  Rechercher une solution (message erreur + documentation)
5.  Tester et valider la correction
6.  Documenter la solution (cause → résolution)
7.  Comprendre le contexte global
8.  Tester avec un cas simplifié (mini script)
9.  Utiliser "try...catch" pour éviter le crash
10. Consulter la documentation (MDN)
11. MAJ environnement et dépendances` },
    ],
  },
  {
    id: "js-fe-guide-de-style",
    title: "Guide de style",
    blocks: [
      { type: "h", text: "Syntaxe" },
      { type: "list", items: ["1 instruction par ligne", "Instruction finit par ;", "Op\u00e9rateurs espac\u00e9s : a + b", "+/- 80 caract\u00e8res par ligne", "Espaces autour des blocs { }"] },
      { type: "h", text: "Nommage" },
      { type: "table", headers: ["Convention", "Usage"], rows: [["`camelCase`", "variables et fonctions"], ["`PascalCase`", "classes et composants React"], ["`snake-case`", "JSON / API externes"], ["Noms explicites", "toujours pr\u00e9f\u00e9rer des noms clairs"]] },
      { type: "h", text: "Variables" },
      { type: "list", items: ["const par d\u00e9faut", "let si changement n\u00e9cessaire"] },
      { type: "h", text: "Indentation / blocs" },
      { type: "list", items: ["2 espaces", "Toujours utiliser { } pour les blocs"] },
      { type: "h", text: "Cha\u00eene de caract\u00e8res" },
      { type: "list", items: ["Utiliser \" ou ''", "Utiliser les backticks pour les interpolations : `Bonjour ${name}`"] },
      { type: "h", text: "Fonctions" },
      { type: "list", items: ["Fl\u00e9ch\u00e9es pour les callbacks", "Nomm\u00e9es pour la visibilit\u00e9", "3 \u00e0 5 param\u00e8tres maximum"] },
      { type: "h", text: "Commentaires" },
      { type: "list", items: ["Pour la logique complexe", "JSDoc pour les fonctions publiques"] },
      { type: "h", text: "Modules / fichiers" },
      { type: "list", items: ["1 fichier = 1 responsabilit\u00e9", "ES Modules (import / export)", "Nomm\u00e9 en camelCase ou kebab-case"] },
      { type: "h", text: "Bonnes pratiques" },
      { type: "list", items: ["Utiliser === au lieu de ==", "Utiliser ?. et ??", "\u00c9viter les effets de bord", "Isoler les effets externes (API, \u2026)"] },
      { type: "h", text: "Outils" },
      { type: "list", items: ["ESLint", "Prettier", "Git hooks"] },
      { type: "h", text: "Organisation du code" },
      { type: "diagram", content: `Organisation d'un fichier
├── Regrouper par responsabilité
│   ├── API
│   └── Gestion formulaire, ...
│
├── Éléments liés proches
│   ├── Fonctions liées ensemble
│   └── Constantes et modules utilisées ensemble
│
├── Séparer le code rarement utilisé
│   ├── En bas du fichier ou dans un autre fichier
│   └── Isoler les fonctionnalités secondaires
│
└── Découper les gros blocs (+ 50 lignes)
    └── En sous-fonctions ou modules plus petits et cohérents` },
      { type: "h", text: "Ordre logique dans un fichier" },
      { type: "diagram", content: `1. Variables
2. Fonctions
3. Exécution principale` },
      { type: "h", text: "Organisation en dossiers" },
      { type: "diagram", content: `/components
/utils
/auth` },
      { type: "h", text: "Ordre des imports" },
      { type: "diagram", content: `1. Librairies externes
2. Modules internes
3. Styles / Ressources` },
      { type: "h", text: "Architecture globale" },
      { type: "list", items: ["MVC", "Composants", "Services", "Repository"] },
      { type: "h", text: "Visibilit\u00e9 du code" },
      { type: "list", items: ["Fonctions publiques en premier", "Fonctions internes ensuite"] },
    ],
  },
  {
    id: "js-fe-moteur-v8",
    title: "Moteur V8",
    blocks: [
      { type: "p", text: "Moteur Open Source \u00e9crit en C++, il ex\u00e9cute le code JavaScript en utilisant la compilation JIT." },
      { type: "h", text: "Caract\u00e9ristiques" },
      { type: "list", items: ["Tr\u00e8s grande vitesse d\u2019ex\u00e9cution", "Pas de bytecode interm\u00e9diaire", "Ex\u00e9cute JS direct", "Optimis\u00e9 par compilation JIT"] },
      { type: "h", text: "Utilisation" },
      { type: "list", items: ["C\u00f4t\u00e9 navigateur (Chrome)", "C\u00f4t\u00e9 serveur (Node.js)"] },
      { type: "h", text: "S\u00e9curit\u00e9 (sandbox)" },
      { type: "list", items: ["Environnement isol\u00e9", "Prot\u00e8ge le syst\u00e8me", "Emp\u00eache les acc\u00e8s directs \u00e0 la machine", "Ex\u00e9cution s\u00e9par\u00e9e du code JS"] },
      { type: "h", text: "Architecture avec Node.js" },
      { type: "diagram", content: `Architecture Node.js
├── V8 moteur JS   → Exécute le JS
├── JS API         → Modules internes de Node.js
├── C++            → Fonctions de bas niveau pour faire fonctionner JS API
├── C libraries    → Fonctionnalités système avancées
└── Libuv          → Gestion des tâches asynchrones (event loop)` },
    ],
  },
  {
    id: "js-fe-asynchrone",
    title: "Asynchrone",
    blocks: [
      { type: "p", text: "La programmation asynchrone permet \u00e0 un programme de continuer son ex\u00e9cution sans attendre la fin d\u2019une t\u00e2che (comme une r\u00e9ponse r\u00e9seau, une lecture de fichier, etc.)." },
      { type: "h", text: "M\u00e9canisme" },
      { type: "diagram", content: `Flux asynchrone
1. Une tâche est lancée
2. Le programme ne bloque pas
3. Il continue à exécuter d'autres instructions
4. La tâche termine plus tard
5. Un callback / Promise / await récupère le résultat` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Exécuter du code plus tard avec les "callbacks" (ancien)
function telecharger(url, callback) {
  setTimeout(() => {
    console.log("Téléchargement de l'image terminé :", url);
    callback(url);
  }, 1000);
}

function recuperer(image, callback) {
  console.log("Image récupérée :", image);
  callback(image);
}

function stocker(image, callback) {
  console.log("Image stockée :", image);
  callback(image);
}

function mettreAJour() {
  console.log("Photo mise à jour");
}

let url = "https://www.javascript-tutorial.net/pic.jpg";

telecharger(url, function (img) {
  recuperer(img, function (img2) {
    stocker(img2, function () {
      mettreAJour();
    });
  });
});` },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Exécuter du code plus tard avec les "Promises" (.then)
function telecharger(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Téléchargement image :", url);
      resolve(url);
    }, 1000);
  });
}

function recuperer(image) {
  console.log("Téléchargement terminé :", image);
  return image;
}

function stocker(image) {
  console.log("Image stockée :", image);
  return image;
}

function mettreAJour() {
  console.log("Photo mise à jour");
}

let url = "https://www.javascript-tutorial.net/pic.jpg";

telecharger(url)
  .then((url) => recuperer(url))
  .then((img) => stocker(img))
  .then(() => mettreAJour())
  .catch((error) => {
    console.error(error);
  });` },
      { type: "h", text: "Avantages / Inconv\u00e9nients" },
      { type: "table", headers: ["Avantages", "Inconv\u00e9nients"], rows: [["Meilleure performance", "Plus complexe \u00e0 comprendre"], ["Ne bloque pas le programme", "Gestion de l\u2019ordre d\u2019ex\u00e9cution parfois difficile"], ["Tr\u00e8s utile pour : API, BDD, fichiers lourds", "Risque de \u201ccode spaghetti\u201d sans bonne structure"]] },
      { type: "h", text: "Utilisation de l\u2019asynchrone" },
      { type: "diagram", content: `Cas d'usage asynchrone
├── API et communication serveur
│   ├── Appel API (REST / GraphQL)
│   ├── Requêtes base de données
│   └── Authentification / Connexion
│
├── Fichiers et données
│   ├── Upload / Download fichiers
│   ├── Accès fichiers (File API / drag & drop)
│   ├── Streams (Flux de données)
│   └── Traitement progressif de fichiers
│
├── Interface utilisateur
│   ├── Lazy loading (images / composants)
│   ├── Événements utilisateur async
│   ├── Animations différées
│   └── Timers / delays
│
├── Temps réel
│   ├── Web Sockets / SSE
│   └── Communication instantanée serveur
│
└── Traitement avancé
    ├── Web Workers (traitement parallèles)
    ├── Abort Controller (annuler requête)
    └── Service Workers (cache / offline / PWA)` },
      { type: "h", text: "Gestion avanc\u00e9e du flux" },
      { type: "list", items: ["Promises", "async / await", "Observables (RxJS)", "microtasks / event loop", "\u00c9viter les callback hell"] },
      { type: "h", text: "Guide asynchrone" },
      { type: "h", text: "Solutions principales :" },
      { type: "list", items: ["Utiliser les Promises", "Utiliser async / await", "Utiliser des fonctions fl\u00e9ch\u00e9es"] },
      { type: "h", text: "Organisation du code :" },
      { type: "list", items: ["Modulariser le code", "Isoler les responsabilit\u00e9s (1 fonction = 1 t\u00e2che)", "Limiter la profondeur d\u2019imbrication"] },
      { type: "h", text: "Gestion des erreurs :" },
      { type: "list", items: ["Centraliser avec try...catch", "G\u00e9rer proprement"] },
      { type: "h", text: "Concepts avanc\u00e9s :" },
      { type: "list", items: ["\u00c9viter le callback hell", "Utiliser des librairies de flux si besoin", "Utiliser RxJS (Observables)", "Documenter le flux asynchrone"] },
    ],
  },
  {
    id: "js-fe-callbacks-hell",
    title: "Callbacks Hell",
    blocks: [
      { type: "p", text: "Structure de code tr\u00e8s imbriqu\u00e9e due \u00e0 l\u2019utilisation excessive de fonctions de rappel." },
      { type: "h", text: "Principes du probl\u00e8me" },
      { type: "diagram", content: `Callback Hell (pyramide de la mort)
telecharger(url, function() {
  recuperer(img, function() {
    stocker(img2, function() {
      mettreAJour(function() {
        // encore plus profond...
      });
    });
  });
});` },
      { type: "list", items: ["Code difficile \u00e0 maintenir et \u00e0 lire", "Gestion des erreurs complexe", "Structure en \u201cpyramide\u201d", "Bloque l\u2019\u00e9volution", "R\u00e9p\u00e8te le code"] },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Exécuter un callback "synchrone" immédiat
function action(callback) {
  console.log("Traitement en cours...");
  const resultat = "données";
  callback(resultat);
}

function afficher(donnees) {
  console.log("Résultat :", donnees);
}

action(afficher);` },
    ],
  },
  {
    id: "js-fe-synchrone",
    title: "Synchrone",
    blocks: [
      { type: "p", text: "La programmation synchrone est un mod\u00e8le d\u2019ex\u00e9cution dans lequel le programme ex\u00e9cute les instructions les unes apr\u00e8s les autres, en attendant que chaque instruction soit termin\u00e9e avant de passer \u00e0 la suivante." },
      { type: "h", text: "M\u00e9canisme" },
      { type: "diagram", content: `Flux synchrone
Instruction 1 → termine
Instruction 2 → termine
Instruction 3 → termine
(chaque étape attend la précédente)` },
      { type: "list", items: ["L\u2019ex\u00e9cution est s\u00e9quentielle", "Il n\u2019y a pas de parall\u00e9lisme", "Une op\u00e9ration bloquante peut arr\u00eater tout le programme"] },
      { type: "code", filename: "exemple.js", language: "javascript", code: `console.log("Début");

function calcul() {
  for (let i = 0; i < 3; i++) {
    console.log("Calcul :", i);
  }
}

calcul();

console.log("Fin");` },
      { type: "h", text: "Exemple simple de blocage" },
      { type: "diagram", content: `1. Lire un fichier
2. Attendre la fin de la lecture ← bloqué ici
3. Afficher le contenu
4. Continuer` },
      { type: "p", text: "Si l\u2019\u00e9tape 1 prend du temps, le programme est bloqu\u00e9 jusqu\u2019\u00e0 sa fin." },
      { type: "h", text: "Avantages / Inconv\u00e9nients" },
      { type: "table", headers: ["Avantages", "Inconv\u00e9nients"], rows: [["Simple \u00e0 comprendre", "Peut \u00eatre lent si une t\u00e2che prend du temps (r\u00e9seau, disque)"], ["Facile \u00e0 programmer et d\u00e9boguer", "Bloque l\u2019ex\u00e9cution globale"]] },
    ],
  },
  {
    id: "js-fe-api-fetch",
    title: "API / fetch",
    blocks: [
      { type: "p", text: "Permet \u00e0 un site web de communiquer avec un autre service (base de donn\u00e9es, services externes, serveur)" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `// Appel API en "GET" avec "fetch" + promesses
fetch("URL")
  .then((response) => response.json())
  .then((data) => {
    // Traitement des données
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Appel API en "GET" avec "async / await"
async function maFonction() {
  try {
    const response = await fetch("URL");
    if (!response.ok) {
      throw new Error("Erreur API");
    }
    const data = await response.json();
    // Traitement
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}` },
    ],
  },
  {
    id: "js-fe-programmation-v-nementielle",
    title: "Programmation \u00e9v\u00e8nementielle",
    blocks: [
      { type: "p", text: "La programmation \u00e9v\u00e9nementielle est une m\u00e9thode de programmation o\u00f9 le programme r\u00e9agit \u00e0 des \u00e9v\u00e9nements." },
      { type: "h", text: "Flux de la programmation \u00e9v\u00e9nementielle" },
      { type: "diagram", content: `Flux événementiel
Événement se produit
      ↓
Détecté par un "listener"
      ↓
Exécution du handler (fonction de réponse)
      ↓
Programme continue` },
      { type: "h", text: "\u00c9tapes" },
      { type: "p", text: "1. D\u00e9tection des \u00e9v\u00e9nements \u2014 Le programme \u00e9coute ce qui se passe" },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Identifier un bouton -->
<body>
  <button id="submitBtn">Confirmer</button>

  <script>
    window.onload = function () {
      console.log("Page loaded");
      let submitBtn = document.querySelector("#submitBtn");
      console.log(submitBtn);
    };
  </script>
</body>` },
      { type: "p", text: "2. Gestion des \u00e9v\u00e9nements \u2014 Il ex\u00e9cute une action en r\u00e9ponse" },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Détecter un clic -->
<body>
  <button id="submitBtn">Confirmer</button>

  <script>
    window.onload = function () {
      console.log("Page loaded");
      let submitBtn = document.querySelector("#submitBtn");
      submitBtn.addEventListener("click", () => {
        console.log("Button clicked");
      });
    };
  </script>
</body>` },
      { type: "h", text: "Utilisation" },
      { type: "list", items: ["Interactions utilisateur (site web, appli)", "Interfaces graphiques (GUI)", "Jeux vid\u00e9o", "Applications modernes web/mobile"] },
      { type: "h", text: "Exemples concrets" },
      { type: "diagram", content: `Tu cliques  → le programme réagit
Tu tapes    → le programme réagit
Tu attends  → un timer déclenche une action` },
      { type: "h", text: "Rappel : Synchrone vs Asynchrone vs \u00c9v\u00e9nementiel" },
      { type: "diagram", content: `Synchrone
  → Instruction 1, attend, Instruction 2, attend, ...

Asynchrone
  → Instruction 1 (lancée), continue, résultat arrive plus tard

Événementiel
  → En attente passive, un événement se produit, réaction immédiate` },
    ],
  },
  {
    id: "js-fe-acc-s-api-js",
    title: "Acc\u00e8s API (JS)",
    blocks: [
      { type: "h", text: "Syntaxe g\u00e9n\u00e9rale de fetch" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `fetch('https://api.exemple.com/ressource')
  .then(response => {
    if (!response.ok) throw new Error('Erreur réseau');
    return response.json(); // ou .text(), .blob(), etc.
  })
  .then(data => {
    console.log('Réponse API :', data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête :', error);
  });` },
      { type: "h", text: "Version avec async/await (plus moderne)" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `async function chargerData() {
  try {
    const response = await fetch('https://api.exemple.com/ressource');
    if (!response.ok) throw new Error('Erreur HTTP : ' + response.status);
    const data = await response.json();
    console.log('Réponse API :', data);
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }
}` },
      { type: "h", text: "Envoyer des donn\u00e9es (POST, PUT\u2026)" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `fetch('https://api.exemple.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'kat@example.com',
    password: '123456'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));` },
      { type: "h", text: "Points \u00e0 retenir" },
      { type: "table", headers: ["\u00c9l\u00e9ment", "D\u00e9tail"], rows: [["`fetch()`", "Renvoie une **Promise**"], ["`response.ok`", "V\u00e9rifie que le code HTTP est entre 200\u2013299"], ["`response.json()`", "Convertit la r\u00e9ponse JSON en objet JS"], ["`Content-Type`", "Doit correspondre au type de donn\u00e9es envoy\u00e9es"], ["`async/await`", "Rend le code plus clair et lisible"]] },
    ],
  },
  {
    id: "js-fe-compl-ment-acc-s-api-en-javascript-niveau-pro",
    title: "Compl\u00e9ment \u2014 Acc\u00e8s API en JavaScript (niveau pro)",
    blocks: [
      { type: "h", text: "1. M\u00e9thodes HTTP support\u00e9es" },
      { type: "p", text: "Outre GET et POST, fetch() permet :" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `fetch('/api/ressource', {
  method: 'PUT', // ou 'DELETE', 'PATCH'
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});` },
      { type: "h", text: "2. Gestion des en-t\u00eates d\u2019authentification (Bearer token)" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `fetch('https://api.secure.com/data', {
  headers: {
    'Authorization': 'Bearer VOTRE_TOKEN',
    'Content-Type': 'application/json'
  }
});` },
      { type: "h", text: "3. Timeout manuel (car fetch() n\u2019a pas de timeout natif)" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);

fetch('https://api.exemple.com', { signal: controller.signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.error('Requête expirée');
    } else {
      console.error(err);
    }
  });` },
      { type: "h", text: "4. Gestion du CORS" },
      { type: "p", text: "Si tu appelles une API d\u2019un autre domaine, le serveur doit autoriser le domaine frontend via des headers CORS." },
      { type: "p", text: "Exemple c\u00f4t\u00e9 serveur :" },
      { type: "diagram", content: `Access-Control-Allow-Origin: https://tonsite.com` },
      { type: "h", text: "5. Gestion fine des statuts d\u2019erreur" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `if (!response.ok) {
  switch (response.status) {
    case 401:
      throw new Error('Non autorisé');
    case 404:
      throw new Error('Ressource non trouvée');
    case 500:
      throw new Error('Erreur serveur');
    default:
      throw new Error('Erreur inconnue');
  }
}` },
      { type: "h", text: "6. Utiliser des APIs REST et GraphQL" },
      { type: "p", text: "fetch() est compatible avec GraphQL :" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `fetch('/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: \`{ utilisateur(id: "1") { nom email } }\`
  })
})` },
      { type: "h", text: "7. Alternative \u00e0 fetch : Axios" },
      { type: "p", text: "Avantages : gestion automatique des JSON, timeout int\u00e9gr\u00e9, syntaxe plus concise." },
      { type: "code", filename: "exemple.js", language: "javascript", code: `import axios from 'axios';

axios.get('/api/data')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));` },
      { type: "h", text: "Version avec Promises (then / catch) \u2014 standard" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) throw new Error('Erreur HTTP ' + response.status);
    return response.json();
  })
  .then(data => {
    console.log('Données reçues :', data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête :', error);
  });` },
      { type: "note", variant: "info", text: "Avantage : compatible tous navigateurs" },
      { type: "p", text: "Inconv\u00e9nient : cha\u00eenes de .then() moins lisibles que async/await" },
      { type: "h", text: "Version avec callback (non natif)" },
      { type: "p", text: "fetch() ne prend pas de callback directement (ce n\u2019est pas comme XMLHttpRequest), mais on peut l\u2019encapsuler dans une fonction personnalis\u00e9e :" },
      { type: "code", filename: "exemple.js", language: "javascript", code: `function getData(url, callback) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Erreur HTTP ' + res.status);
      return res.json();
    })
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
}

// Utilisation
getData('https://jsonplaceholder.typicode.com/posts/1', (err, data) => {
  if (err) {
    console.error('Erreur :', err);
  } else {
    console.log('Données :', data);
  }
});` },
      { type: "note", variant: "info", text: "Utilis\u00e9 si tu veux compatibilit\u00e9 avec des libs ou anciens syst\u00e8mes callback-style" },
      { type: "p", text: ">" },
    ],
  },
];