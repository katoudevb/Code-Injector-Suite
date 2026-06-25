import type { SubSection } from "../types";

export const cssFrontend: SubSection[] = [
  {
    id: "css-fe-structure-du-css",
    title: "Structure du CSS",
    blocks: [
      { type: "code", filename: "exemple.css", language: "css", code: `selecteur {
  propriété : valeur;
}` },
    ],
  },
  {
    id: "css-fe-s-lecteurs",
    title: "S\u00e9lecteurs",
    blocks: [
      { type: "diagram", content: `/*─── Schéma des types de sélecteurs ───*/

balise            → Cible une balise HTML (ex: p, h1, div)
.class            → Cible une classe CSS
#id               → Cible un identifiant unique
baliseA baliseB   → Descendant (baliseB à l'intérieur de baliseA)
baliseA > baliseB → Enfant direct uniquement
baliseA + baliseB → Adjacent (juste après baliseA)
baliseA ~ baliseB → Frères généraux (tous après baliseA)
*                 → Universel (tous les éléments)
[attribut]        → Balise avec attribut
[attribut=val]    → Balise avec attribut + valeur précise
:hover            → Pseudo-classe : survol souris
:active           → Pseudo-classe : clic en cours
:focus            → Pseudo-classe : élément sélectionné
:visited          → Pseudo-classe : lien déjà visité
::first-line      → Pseudo-élément : première ligne` },
      { type: "code", filename: "exemple.css", language: "css", code: `/*Avec tag (balise)*/
balise { proprieter : valeur; }

/*Avec classe*/
.class { proprieter : valeur; }

/*Avec id*/
#id { proprieter : valeur; }

/*Avec plusieurs balises (descendant)*/
baliseA balise B { proprieter: valeur; }

/*Avec plusieurs balises (enfant direct)*/
balise A > balise B { proprieter : valeur; }

/*Avec plusieurs balises (adjacent)*/
baliseA + balise B { proprieter : valeur; }

/*Avec plusieurs balises (frère généraux)*/
baliseA ~ baliseB { proprieter : valeur; }

/*Avec une balise + classe*/
baliseA .class { proprieter: valeur; }

/*Avec balise + id*/
baliseA #id { proprieter : valeur; }

/*Universel (tous les éléments)*/
* { proprieter : valeur; }

/*Balise avec attribut*/
baliseA [attribut] { proprieter : valeur; }

/*Balise avec attribut + valeur*/
baliseA [attribut= valeur] { proprieter : valeur; }

/*Pseudo-classe (au survol) souris sur l'élément*/
a:hover { proprieter: valeur; }

/*Pseudo-classe (au clic) clic en cours*/
a:active { proprieter : valeur; }

/*Pseudo-classe élément sélectionné "change"*/
a:focus { proprieter : valeur; }

/*Pseudo-classe lien déjà visité*/
a:visited { proprieter : valeur; }

/*Pseudo-élément première ligne texte en gras*/
a::first-line { font-weight : bold; }` },
    ],
  },
  {
    id: "css-fe-ordre-de-priorit",
    title: "Ordre de priorit\u00e9",
    blocks: [
      { type: "diagram", content: `/*─── Schéma de spécificité CSS (du + faible au + fort) ───*/

Poids 0    →  *              (universel)
Poids 001  →  balise         (ex: p, h1)
Poids 002  →  balise balise  (ex: section h1)
Poids 010  →  .class
Poids 011  →  balise.class   (ex: h1.titre)
Poids 012  →  balise balise.class
Poids 100  →  #id
Poids 101  →  balise#id
Poids 110  →  .class #id
Poids 1000 →  style="" ou !important  ← PRIORITÉ ABSOLUE` },
      { type: "table", headers: ["S\u00e9lecteur", "Nb d\u2019identifiants", "Nb de classes", "Nb d\u2019\u00e9l\u00e9ments", "Poids total"], rows: [["`*`", "0", "0", "0", "0"], ["`a {}`", "0", "0", "1", "001"], ["`section h1 {}`", "0", "0", "2", "002"], ["`.class {}`", "0", "1", "0", "010"], ["`h1.class {}`", "0", "1", "1", "011"], ["`Section h1.p {}`", "0", "1", "2", "012"], ["`#id {}`", "1", "0", "0", "100"], ["`h1#id {}`", "1", "0", "1", "101"], ["`.class #id {}`", "1", "1", "0", "110"], ["`style=\"\"` ou `!important`", "1", "0", "0", "1000"], ["`p { color:red !important; }`", "1", "0", "1", "1001"]] },
    ],
  },
  {
    id: "css-fe-r-initialise-style-d-un-navigateur",
    title: "R\u00e9initialise style d\u2019un navigateur",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Supprime tous les styles par défaut "Reset.css" -->
<link rel="stylesheet" href="reset.css">

<!-- Harmonise les styles par défaut "Normalize.css" -->
<link rel="stylesheet" href="normalize.css">

<!-- Base CSS légère + classes d'assistance (marges, flex,..) "KNACSS" -->
<link rel="stylesheet" href="knacss.css">` },
    ],
  },
  {
    id: "css-fe-format-fichiers-de-police",
    title: "Format fichiers de police",
    blocks: [
      { type: "diagram", content: `/*─── Comparatif formats de police ───*/

WOFF2   →  Meilleure compatibilité + compression maximale  ✅ Recommandé
WOFF    →  Très bonne compatibilité + bonne compression
TTF/OTF →  Bonne compatibilité + aucune optimisation` },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Meilleure compatibilité + compression max "WOFF2" -->
<link href="fonts/myfont.woff2" rel="stylesheet">

<!-- Très bonne compatibilité + bonne compression "WOFF" -->
<link href="fonts/myfont.woff" rel="stylesheet">

<!-- Bonne compatibilité + aucune optimisation "TTF / OTF" -->
<link href="fonts/myfont.otf" rel="stylesheet">` },
    ],
  },
  {
    id: "css-fe-commentaires",
    title: "Commentaires",
    blocks: [
      { type: "code", filename: "exemple.css", language: "css", code: `/* Sur une ligne */

/*
 * Sur plusieurs
 * lignes
 */

/*=== Sépare les zones en blocs ===*/` },
    ],
  },
  {
    id: "css-fe-h-ritage",
    title: "H\u00e9ritage",
    blocks: [
      { type: "diagram", content: `/*─── Schéma héritage CSS ───*/

                <html>
                  │
                <body>           ← hérite de html
               /      \\
          <header>    <main>     ← héritent de body
             │           │
           <nav>      <section>  ← héritent de header/main

✅ Propriétés héritées par défaut :
   → Textes / Typographie (color, font-size, font-family...)
   → Listes (partiellement)
   → Tableaux (limités)

❌ Propriétés NON héritées par défaut :
   → Boîtes (padding, margin, border)
   → Positionnement (position, top, left...)
   → Visuel (background, opacity...)
   → Dimensions (width, height)` },
    ],
  },
  {
    id: "css-fe-import-de-police",
    title: "Import de police",
    blocks: [
      { type: "h", text: "Local" },
      { type: "list", items: ["T\u00e9l\u00e9charger la police sur le web", "Placer les fichiers dans le dossier assets/fonts/", "D\u00e9clarer la police en t\u00eate du fichier .css", "Utiliser la police"] },
      { type: "code", filename: "exemple.css", language: "css", code: `@font-face {
  font-family: "MaPolice";
  src: url("/assets/fonts/mapolice.woff2") format("woff2"),
       url("/assets/fonts/mapolice.woff") format("woff");
}

body {
  font-family: "MaPolice", sans-serif;
}` },
      { type: "h", text: "Google Fonts" },
      { type: "list", items: ["Choisir la police et son style sur le site", "Copier le lien import @import", "D\u00e9clarer en t\u00eate du fichier .css", "Utiliser la police"] },
      { type: "code", filename: "exemple.css", language: "css", code: `@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  font-family: "Roboto", sans-serif;
}` },
    ],
  },
  {
    id: "css-fe-structure-nommage-des-classes-bem-class",
    title: "Structure nommage des classes BEM (class=\u201c\u201c)",
    blocks: [
      { type: "diagram", content: `/*─── Schéma BEM ───*/

.bloc                    → Composant principal
.bloc__element           → Sous-partie du bloc
.bloc--modifier          → Variation du composant
.bloc__element--modifier → Variation d'un élément

Exemple :
.carte                   → Le composant carte
.carte__titre            → Le titre de la carte
.carte--highlight        → Variante carte surlignée
.carte__titre--small     → Variante petit titre` },
    ],
  },
  {
    id: "css-fe-structure-nommage-des-classes-oocss-class",
    title: "Structure nommage des classes OOCSS (class=\u201c\u201c)",
    blocks: [
      { type: "p", text: "Permet de s\u00e9parer la structure et l\u2019apparence" },
      { type: "code", filename: "exemple.css", language: "css", code: `/* 1. Structure (espace, position, organisation) */
.box {
  margin: px;
}

/* 2. Apparence (couleur, style visuel, thème) */
.box--blue {
  background-color: blue;
}` },
    ],
  },
  {
    id: "css-fe-propri-t-s",
    title: "Propri\u00e9t\u00e9s",
    blocks: [
      { type: "code", filename: "exemple.css", language: "css", code: `/* ── Curseur souris ── */
cursor: default;      /* Normal */
cursor: pointer;      /* Pointer (main) */
cursor: text;         /* Texte */
cursor: not-allowed;  /* Interdit */
cursor: wait;         /* Sablier */
cursor: crosshair;    /* Croix */
cursor: none;         /* Invisible */

/* ── Transparence élément (0 total, 1 opaque) ── */
opacity: 0.5;

/* ── Couleurs ── */
color: red;                    /* Couleur nom */
color: #FF0010;                /* Couleur hexadécimal */
color: rgb(0, 255, 0);         /* RGB (0 rouge, 255 vert, 0 bleu) */
color: rgba(0, 255, 0, 0.5);   /* RGBA (rouge, vert, bleu, opacité) */
background-color: yellow;      /* Change couleur fond de l'élément */
border-color: green;           /* Change couleur bordure */
outline-color: blue;           /* Change couleur du contour */

/* ── Ombres ── */
box-shadow: décalageX décalageY flou couleur;
text-shadow: 2px 2px 3px green;

/* ── Alignement texte ── */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: start;    /* Début logique selon la langue (G=LTR / D=RTL) */
text-align: end;      /* Fin logique selon la langue */

/* ── Espacement texte ── */
line-height: px;
letter-spacing: px;
word-spacing: px;
text-indent: px;

/* ── Décoration texte ── */
text-decoration: underline;

/* ── Police ── */
font-family: police1, serif;
font-size: px;
font-style: italic;
font-weight: bold;
text-transform: uppercase;

/* ── Arrière-plan ── */
background-image: url("image.jpg");
background-repeat: valeur;
background-size: valeur;
background-position: valeur;
background-attachment: valeur;

/* ── Bordures ── */
border-style: valeur;
border-width: valeur;
border-radius: %;
border: px;
border-color: valeur;

/* ── Modèle de boîte ── */
padding: px;
margin: px;
width: px;
height: px;
overflow: valeur;

/* ── Dimensions ── */
width: px;
min-width: px;
max-width: px;
height: px;
min-height: px;
max-height: px;

/* ── Affichage et position ── */
display: valeur;
position: valeur;

/* ── Transition ── */
.box {
  width: px;
  height: px;
  background-color: blue;
  transition: background-color 0.5s;
}
.box:hover {
  background-color: red;
}

/* ── Animation ── */
@keyframes couleurChange {
  0%   { background-color: blue; }
  50%  { background-color: green; }
  100% { background-color: red; }
}
.element {
  width: px;
  height: px;
  animation: couleurChange 3s infinite;
}

/* ── Réinitialiser toutes les propriétés ── */
button {
  all: unset;
}` },
    ],
  },
  {
    id: "css-fe-unit-s",
    title: "Unit\u00e9s",
    blocks: [
      { type: "diagram", content: `/*─── Schéma des unités CSS ───*/

FIXES (taille fixe)               RELATIVES (taille flexible)
───────────────────               ──────────────────────────
px  → pixel (écran)               %   → % largeur du parent
cm  → centimètre                  em  → taille police du parent
mm  → millimètre                  rem → police de base <html>
in  → inch / pouce                vw  → 1% largeur fenêtre
                                  vh  → 1% hauteur fenêtre` },
    ],
  },
  {
    id: "css-fe-mod-le-de-bo-te",
    title: "Mod\u00e8le de bo\u00eete",
    blocks: [
      { type: "note", variant: "info", text: "Explique l\u2019occupation de l\u2019espace de chaque \u00e9l\u00e9ment HTML et l\u2019addition des marges, bordure et remplissage." },
      { type: "diagram", content: `/*─── Schéma modèle de boîte CSS ───*/

┌─────────────────────────────────────┐
│               MARGE                 │  ← margin (espace externe)
│   ┌─────────────────────────────┐   │
│   │  ┄┄┄┄┄ BORDURE ┄┄┄┄┄┄┄┄┄    │   │  ← border
│   │  ┌───────────────────────┐  │   │
│   │  │     REMPLISSAGE       │  │   │  ← padding (espace interne)
│   │  │  ┌─────────────────┐  │  │   │
│   │  │  │                 │  │  │   │
│   │  │  │    CONTENU      │  │  │   │  ← width / height
│   │  │  │                 │  │  │   │
│   │  │  └─────────────────┘  │  │   │
│   │  └───────────────────────┘  │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘` },
    ],
  },
  {
    id: "css-fe-valeurs-de-propri-t-s",
    title: "Valeurs de propri\u00e9t\u00e9s",
    blocks: [
      { type: "code", filename: "exemple.css", language: "css", code: `/* ── Alignement ── */
left          /* À gauche aligné */
center        /* Centré */
right         /* À droite aligné */
justify       /* Bords gauche + droite alignés */
start         /* Début logique selon la langue (LTR=fr,an / RTL=arabe,hébreu) */
end           /* Fin logique selon la langue */

/* ── Épaisseur texte ── */
normal        /* Normal */
bold          /* Gras */
lighter       /* Plus fin que le parent */
bolder        /* Plus gras que le parent */
/* 100 à 900 : (100=ultra fin / 900=très gras) */

/* ── Casse ── */
uppercase     /* TOUT EN MAJUSCULES */
lowercase     /* tout en minuscules */
capitalize    /* Première Lettre De Chaque Mot */

/* ── Décoration texte ── */
none          /* Par défaut ou caché */
underline     /* Souligné */
overline      /* Ligne au-dessus */
line-through  /* Barré */

/* ── Position fond ── */
top           /* En haut conteneur */
bottom        /* En bas conteneur */
scroll        /* Défile avec le contenu */
fixed         /* Reste fixe à l'écran / positionné au viewport */
local         /* Bouge avec le contenu du conteneur */

/* ── Styles de bordure ── */
dotted        /* En points */
dashed        /* En tirets */
solid         /* Pleine */
double        /* Double trait */
groove        /* Relief gravé (3D) */
ridge         /* En saillie */
inset         /* Enfoncée (effet creux) */
outset        /* Ressortie (effet relief) */
thin / medium / thick

/* ── Overflow ── */
visible       /* Contenu dépasse et reste visible (par défaut) */
hidden        /* Contenu qui dépasse est coupé */

/* ── Display ── */
block         /* Prend toute la largeur disponible */
inline        /* Prend seulement la taille du contenu */
inline-block  /* Taille du contenu + accepte width, height, margin */

/* ── Position ── */
static        /* Position normale */
relative      /* Se déplace par rapport à la position initiale */
absolute      /* Positionné par rapport au parent */
sticky        /* Mélange de "relative" + "fixed" (colle au scroll) */

/* ── Héritage ── */
inherit       /* Force la propriété à hériter la valeur du parent */
initial       /* Remet une propriété à sa valeur par défaut */
unset         /* Hérite si normalement héritable, sinon valeur initiale */
revert        /* Remet à la valeur définie par le navigateur */` },
    ],
  },
  {
    id: "css-fe-flexbox",
    title: "Flexbox",
    blocks: [
      { type: "note", variant: "info", text: "Permet de distribuer et aligner des \u00e9l\u00e9ments flexibles dans un conteneur (<div>, <section>, <article>\u2026), m\u00eame si leur taille change." },
      { type: "diagram", content: `/*─── Schéma Flexbox ───*/

  flex-direction: row (par défaut)
  ◄────── axe principal (horizontal) ──────►

  ┌────────────────────────────────────────┐
  │  justify-content → axe horizontal      │  ▲
  │                                        │  │ align-items
  │  ┌──────┐  ┌──────┐  ┌──────┐          │  │ (axe vertical)
  │  │  1   │  │  2   │  │  3   │          │  ▼
  │  └──────┘  └──────┘  └──────┘          │
  └────────────────────────────────────────┘

  flex-direction: column
  ┌──────────┐   ▲ justify-content (axe vertical)
  │    1     │
  ├──────────┤
  │    2     │  ◄─► align-items (axe horizontal)
  ├──────────┤
  │    3     │
  └──────────┘` },
      { type: "code", filename: "exemple.css", language: "css", code: `.container { display: flex; }

/* justify-content (axe horizontal) */
.container { display: flex; justify-content: flex-start; }
.container { display: flex; justify-content: center; }
.container { display: flex; justify-content: flex-end; }
.container { display: flex; justify-content: space-between; }
.container { display: flex; justify-content: space-around; }
.container { display: flex; justify-content: space-evenly; }

/* align-items (axe vertical) */
.container { display: flex; align-items: flex-start; }
.container { display: flex; align-items: center; }
.container { display: flex; align-items: flex-end; }
.container { display: flex; align-items: stretch; }

/* flex-direction */
.container { display: flex; flex-direction: row; }
.container { display: flex; flex-direction: row-reverse; }
.container { display: flex; flex-direction: column; }
.container { display: flex; flex-direction: column-reverse; }

/* flex-wrap */
.container { display: flex; flex-wrap: nowrap; }
.container { display: flex; flex-flow: row wrap; }

/* Ordre */
.first  { order: -1; }
.third  { order: 2; }
.fifth  { order: 3; }

/* Taille */
.item { flex-grow: 1; }
.item { flex-shrink: 1; }
.item { flex-basis: 200px; }` },
    ],
  },
  {
    id: "css-fe-grid",
    title: "Grid",
    blocks: [
      { type: "note", variant: "info", text: "Permet de distribuer et aligner des \u00e9l\u00e9ments dans un conteneur (<div>, <main>, <footer>\u2026), de fa\u00e7on plus puissante que Flexbox." },
      { type: "diagram", content: `/*─── Schéma Grid CSS ───*/

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;

  col 1       col 2       col 3
  ┌───────────┬───────────┬───────────┐
  │  item 1   │  item 2   │  item 3   │  ← ligne 1
  ├───────────┼───────────┼───────────┤
  │  item 4   │  item 5   │  item 6   │  ← ligne 2
  └───────────┴───────────┴───────────┘
       ↕ row-gap        ↔ column-gap

  grid-template-areas :
  ┌─────────────────────────────────┐
  │             header              │
  ├───────────────────┬─────────────┤
  │       main        │    aside    │
  ├───────────────────┴─────────────┤
  │             footer              │
  └─────────────────────────────────┘` },
      { type: "code", filename: "exemple.css", language: "css", code: `.container { display: grid; }
.container { display: inline-grid; }

.container { display: grid; grid-template-columns: px px fr; }
.container { display: grid; grid-template-rows: px px px; }

.container {
  display: grid;
  grid-template-areas: "header nav";
}
.header { grid-area: header; }
.nav    { grid-area: nav; }

.container { display: grid; column-gap: px; }
.container { display: grid; row-gap: px; }
.container { display: grid; gap: px; }

.container { display: grid; grid-auto-columns: px; }
.container { display: grid; grid-auto-rows: px; }
.container { display: grid; grid-auto-flow: valeur; }

.container { display: grid; justify-items: valeur; }
.container { display: grid; align-items: valeur; }
.container { display: grid; justify-content: valeur; }
.container { display: grid; align-content: valeur; height: px; }

.item { grid-column-start: 2; }
.item { grid-column-end: 3; }
.item { grid-row-start: 2; }
.item { grid-row-end: 3; }
.item { grid-column: 2; }
.item { grid-row: 2; }
.item { grid-area: 1/1/3/3; }

.item { justify-self: valeur; }
.container { display: grid; align-content: valeur; height: 300px; }
.container { display: grid; justify-content: valeur; width: 500px; }` },
    ],
  },
  {
    id: "css-fe-responsive-design",
    title: "Responsive design",
    blocks: [
      { type: "h", text: "M\u00e9diaqueries" },
      { type: "diagram", content: `/*─── Schéma breakpoints mobile-first ───*/

  < 320px     321-480px   480-720px   720-767px   768-900px
  ┌─────────┬───────────┬───────────┬───────────┬──────────►
  Très petit  Smartphone  Smartphone  Petite tab  Tablette
  écran       1ère gen    paysage     portrait    portrait

  900-1024px  1024-1200px  > 1200px
  ──────────┬────────────┬──────────►
  Tablette    Ordinateur   Écran large
  paysage     standard     desktop` },
      { type: "p", text: "Types de media : all / screen / print" },
      { type: "p", text: "Types d\u2019op\u00e9rateurs : and / , / not" },
      { type: "p", text: "Conditions : width / min-width / max-width / height / aspect-ratio / orientation / r\u00e9solution" },
      { type: "code", filename: "exemple.css", language: "css", code: `@media type-media opérateur (condition) {
  /* Style CSS */
}` },
      { type: "h", text: "Breakpoints" },
      { type: "table", headers: ["Taille", "Appareil"], rows: [["`< 320px`", "Tr\u00e8s petit \u00e9cran / basse r\u00e9solution"], ["`321px - 480px`", "Smartphone 1\u00e8re g\u00e9n\u00e9ration"], ["`480px - 720px`", "Smartphone mode paysage"], ["`720px - 767px`", "Petite tablette portrait"], ["`768px - 900px`", "Tablette portrait"], ["`900px - 1024px`", "Tablette paysage"], ["`1024px - 1200px`", "Ordinateur bureau standard"], ["`> 1200px`", "\u00c9crans larges / desktop large"]] },
    ],
  },
  {
    id: "css-fe-pr-processeur-sass-scss",
    title: "Pr\u00e9-processeur (SASS / SCSS)",
    blocks: [
      { type: "note", variant: "info", text: "Am\u00e9liore le CSS avec variables, logique et compilation automatique." },
      { type: "diagram", content: `/*─── Schéma flux SASS → CSS ───*/

  style.scss + _nav.scss + _variables.scss
       │
  Compilation sass style.scss style.css
       │
  style.css  ← fichier final lu par le navigateur` },
      { type: "h", text: "Caract\u00e9ristiques :" },
      { type: "list", items: ["Imbrication \u2192 Hi\u00e9rarchie code", "Variables \u2192 Valeurs r\u00e9utilisables", "Logiques \u2192 Conditions, boucles", "Code compil\u00e9 en CSS", "Sourcemaps \u2192 Lien source et CSS compil\u00e9", "Compatible frameworks (Vue, React\u2026) via plugins/loaders", "Compilation automatique (mode watch)", "Import \u2192 S\u00e9pare le code en plusieurs fichiers"] },
      { type: "h", text: "M\u00e9thodes SASS :" },
      { type: "list", items: ["@extend \u2192 Partage le style entre s\u00e9lecteurs", "@mixin \u2192 Cr\u00e9e des styles r\u00e9utilisables (dupliqu\u00e9s en CSS)", "@each \u2192 Boucle (r\u00e9p\u00e8te le code automatiquement)", "Op\u00e9rations \u2192 Calculs CSS (ex: width: 100%/2)", "Fonctions \u2192 Manipule les couleurs\u2026 (ex: darken())"] },
      { type: "code", filename: "terminal", language: "bash", code: `npm install -g sass` },
      { type: "code", filename: "terminal", language: "bash", code: `sass style.scss style.css` },
      { type: "code", filename: "exemple.html", language: "html", code: `<link rel="stylesheet" href="style.css">` },
      { type: "h", text: "Variables" },
      { type: "code", filename: "exemple.scss", language: "scss", code: `$nom-variable : valeur;

button {
  color: $color-primary;
}` },
      { type: "h", text: "Imbrication" },
      { type: "code", filename: "exemple.scss", language: "scss", code: `nav {
  propriété: valeur;
  ul { propriété: valeur; }
  a  { propriété: valeur; }
}` },
      { type: "h", text: "Importer une feuille de style" },
      { type: "code", filename: "exemple.scss", language: "scss", code: `@use "nav";` },
      { type: "h", text: "Mixins" },
      { type: "code", filename: "exemple.scss", language: "scss", code: `@mixin nom-mixin {
  propriété: valeur;
  autre-propriété: autre-valeur;
}

.selecteur {
  @include nom-mixin;
}` },
      { type: "h", text: "H\u00e9ritage" },
      { type: "code", filename: "exemple.scss", language: "scss", code: `.class1 { propriete: valeur; }

.class2 { @extend .class1; }` },
      { type: "h", text: "Boucle" },
      { type: "code", filename: "exemple.scss", language: "scss", code: `@each $color in (red, blue, green) {
  .selecteur-#{$color} {
    color: $color;
  }
}` },
    ],
  },
  {
    id: "css-fe-guide-architecture-feuilles-de-style-gros-projet",
    title: "Guide architecture \u2014 Feuilles de style gros projet",
    blocks: [
      { type: "diagram", content: `/*─── Schéma architecture CSS ───*/

  style.scss (fichier principal)
  │
  ├── _base.scss         → Reset, typographie, couleurs
  ├── _commons.scss      → Header, Footer, Sidebar, Nav
  ├── _components.scss   → Boutons, Formulaires, Cartes, Modales
  ├── _theme.scss        → Couleurs globales, ombres, identité
  ├── _utilities.scss    → Marges, padding, flexbox, grid
  ├── _overrides.scss    → Surcharge de framework
  ├── _animations.scss   → Transitions, Keyframes, hover
  └── _mediaqueries.scss → Mobile, Tablette, Desktop` },
      { type: "list", items: ["Feuille de base \u2192 Reset/Normalize CSS, typographie, couleurs, styles g\u00e9n\u00e9raux", "Feuille des parties communes \u2192 Header, Footer, Sidebar, Navigation principale", "Feuille des composants \u2192 Boutons, Formulaire, Cartes, Modales, Alertes", "Feuille de th\u00e8me \u2192 Couleurs globales, typographie, ombres, identit\u00e9 visuelle", "Feuilles des utilitaires \u2192 Marges et padding, Flexbox/Grid, Alignements, Display", "Feuille des overrides \u2192 \u00c9vite de modifier directement le framework", "Feuille des animations \u2192 Transitions, Keyframes, Effets hover", "Feuille des media queries \u2192 Mobile, Tablette, Desktop"] },
    ],
  },
  {
    id: "css-fe-guide-architecture-de-style-m-thode-smacss",
    title: "Guide architecture de style m\u00e9thode SMACSS",
    blocks: [
      { type: "diagram", content: `/*─── Schéma SMACSS ───*/

  1. Base     → p { } h1 { } a { }     (styles HTML globaux)
  2. Layout   → .header { } .footer { } (sections communes)
  3. Module   → .btn { } .card { }      (composants réutilisables)
  4. State    → .is-active { }          (états interactifs)
  5. Thème    → .theme-dark { }         (apparence globale)
  6. Vendor   → styles librairies externes` },
      { type: "list", items: ["Base \u2192 Style aux \u00e9l\u00e9ments HTML globaux (p, h1, a, ul\u2026)", "Mise en page \u2192 Sections communes \u00e0 toutes pages (header, footer\u2026)", "Module \u2192 Composants UI (boutons, cartes, formulaires\u2026)", "State \u2192 Modifie l\u2019apparence selon interaction ou \u00e9tat (actif, cach\u00e9\u2026)", "Th\u00e8me \u2192 Style li\u00e9 \u00e0 l\u2019apparence globale (dark mode, couleurs\u2026)", "Vendor \u2192 Style venant de biblioth\u00e8ques externes (framework / outil)"] },
    ],
  },
  {
    id: "css-fe-guide-de-conception-css-m-thode-oocss",
    title: "Guide de conception CSS m\u00e9thode OOCSS",
    blocks: [
      { type: "list", items: ["Composants / biblioth\u00e8que d\u2019objets \u2192 Composants UI r\u00e9utilisables comme objets ind\u00e9pendants", "Utilisation des grilles \u2192 Organisation composants par syst\u00e8me de grille CSS", "Flexibilit\u00e9 des composants \u2192 Styles ind\u00e9pendants et combinables", "Classes multiples \u2192 Utilise plusieurs classes sur un m\u00eame \u00e9l\u00e9ment", "S\u00e9paration structure \u2192 Distingue la structure (positionnement) et skin (couleurs, style visuel\u2026)", "Ind\u00e9pendance des styles \u2192 Ne pas d\u00e9pendre de la structure HTML", "Classes autonomes \u2192 Favorise classes ind\u00e9pendantes de la hi\u00e9rarchie HTML", "R\u00e9duction de la duplication \u2192 Limite la r\u00e9p\u00e9tition de styles CSS", "R\u00e9utilisation maximale \u2192 Styles con\u00e7us pour \u00eatre r\u00e9utilis\u00e9s dans plusieurs pages"] },
    ],
  },
  {
    id: "css-fe-guide-de-style-css",
    title: "Guide de style CSS",
    blocks: [
      { type: "list", items: ["Base et compatibilit\u00e9 \u2192 normalize.css ou reset.css, polices via @font-face", "Organisation globale CSS \u2192 Du global au sp\u00e9cifique, organisation par composants", "Structure et architecture \u2192 D\u00e9coup\u00e9 en fichiers, styles standardis\u00e9s, classes utilitaires", "Conventions de nommage \u2192 kebab-case, minuscules, pas d\u2019underscore ni camelCase, BEM", "Syntaxe et formatage \u2192 ; obligatoire, espace autour des :, indentation 2 espaces, ~80 caract\u00e8res", "Organisation des propri\u00e9t\u00e9s \u2192 Regroupement logique (couleurs, effets\u2026)", "S\u00e9lecteurs CSS \u2192 Max 3 niveaux, \u00e9viter s\u00e9lecteurs lourds, priorit\u00e9 \u00e9l\u00e9ments \u2192 classes \u2192 IDs", "Responsive design \u2192 Mobile en 1er, breakpoints centralis\u00e9s", "Couleurs et variables \u2192 CSS variables recommand\u00e9", "Performance \u2192 \u00c9viter la r\u00e9p\u00e9tition, minification, concat\u00e9nation", "Position et layout \u2192 position avec parcimonie, pr\u00e9f\u00e9rer min-height", "Unit\u00e9s \u2192 Pr\u00e9f\u00e9rer rem, em, % \u2014 \u00e9viter px (sauf cas fixes)", "Accessibilit\u00e9 \u2192 Contrastes suffisants, focus visibles, \u00e9tats interactifs clairs", "Compatibilit\u00e9s navigateurs \u2192 V\u00e9rifier sur diff\u00e9rents appareils", "Documentation \u2192 Commenter les parties complexes, TODO / FIXME", "Travail en \u00e9quipe \u2192 Style guide CSS, conventions partag\u00e9es", "M\u00e9thodes avanc\u00e9es \u2192 Centraliser couleurs, espacements, standardiser media queries", "Animations \u2192 Transitions simples, \u00e9viter animations lourdes ou inutiles"] },
    ],
  },
];