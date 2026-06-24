import type { Section } from "../types";
import { cssCourse } from "./cssCourse";

export const css: Section = {
  id: "css",
  title: "CSS",
  icon: "Palette",
  tags: ["css"],
  subsections: [
    {
      id: "selecteurs",
      title: "Sélecteurs et spécificité",
      blocks: [
        { type: "code", filename: "selecteurs.css", language: "css", code: `/* Sélecteur de type : toutes les balises <p> */
p { color: #333; }
/* Sélecteur de classe : class="prix" */
.prix { font-weight: bold; }
/* Sélecteur d'id : id="panier" (unique) */
#panier { position: relative; }
/* Descendant : un <a> dans un .menu */
.menu a { text-decoration: none; }
/* Enfant direct : <li> enfant immédiat de .liste */
.liste > li { margin: 4px; }` },
        { type: "table", headers: ["Sélecteur", "Poids"], rows: [["Style inline", "1000"], ["#id", "100"], [".classe, :hover, [attr]", "10"], ["balise, ::before", "1"], ["!important", "écrase tout"]] },
        { type: "note", variant: "warning", text: "Évitez !important : il rend le CSS difficile à maintenir. Augmentez plutôt la spécificité proprement." },
      ],
    },
    {
      id: "box-model",
      title: "Box model et reset",
      blocks: [
        { type: "code", filename: "reset.css", language: "css", code: `/* Reset universel appliqué à tous les éléments */
* {
  margin: 0;              /* Supprime les marges par défaut */
  padding: 0;             /* Supprime les espacements internes */
  box-sizing: border-box; /* La largeur inclut padding + bordure */
}

.carte {
  width: 300px;   /* Largeur totale (padding compris) */
  padding: 16px;  /* Espace intérieur */
  border: 1px solid #ddd;
  margin: 8px;    /* Espace extérieur */
}` },
      ],
    },
    {
      id: "variables",
      title: "Variables CSS",
      blocks: [
        { type: "code", filename: "theme.css", language: "css", code: `:root {
  /* Variables globales (custom properties) */
  --couleur-principale: #5b9dff;
  --couleur-texte: #1a1a1a;
  --espacement: 16px;
}

/* Thème sombre via une classe sur body */
body.sombre { --couleur-texte: #e4e6ee; }

.bouton {
  background: var(--couleur-principale); /* Utilisation */
  color: white;
  padding: var(--espacement);
}` },
      ],
    },
    {
      id: "typographie",
      title: "Typographie et unités",
      blocks: [
        { type: "code", filename: "typographie.css", language: "css", code: `body {
  font-family: "Inter", sans-serif; /* Police + secours */
  font-size: 16px;       /* Base : 1rem = 16px */
  line-height: 1.6;      /* Lisibilité */
}
h1 {
  /* clamp(min, idéal, max) : taille fluide */
  font-size: clamp(1.8rem, 5vw, 3rem);
}
.note { font-size: 0.875rem; /* 14px */ }` },
        { type: "table", headers: ["Unité", "Référence"], rows: [["px", "pixels fixes"], ["rem", "racine (html)"], ["em", "parent"], ["vw / vh", "1% écran"], ["clamp()", "valeur fluide bornée"]] },
      ],
    },
    {
      id: "flexbox",
      title: "Flexbox",
      blocks: [
        { type: "code", filename: "flexbox.css", language: "css", code: `.conteneur {
  display: flex;                  /* Active flexbox */
  flex-direction: row;            /* row (ligne) ou column */
  justify-content: space-between; /* Alignement horizontal */
  align-items: center;            /* Alignement vertical */
  gap: 16px;                      /* Espace entre enfants */
  flex-wrap: wrap;                /* Passe à la ligne si besoin */
}
.enfant { flex: 1; } /* Part égale */

/* Recette : centrage parfait */
.centre {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}` },
      ],
    },
    {
      id: "grid",
      title: "CSS Grid",
      blocks: [
        { type: "code", filename: "grid.css", language: "css", code: `.grille-produits {
  display: grid;
  /* Autant de colonnes que possible, min 200px */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
.layout {
  display: grid;
  grid-template-areas:
    "entete entete"
    "menu   contenu"
    "pied   pied";
  grid-template-columns: 200px 1fr;
}
.layout header { grid-area: entete; }
.layout nav    { grid-area: menu; }
.layout main   { grid-area: contenu; }
.layout footer { grid-area: pied; }` },
      ],
    },
    {
      id: "positionnement",
      title: "Positionnement",
      blocks: [
        { type: "table", headers: ["Valeur", "Usage"], rows: [["static", "défaut, flux normal"], ["relative", "décalé vs sa position"], ["absolute", "vs ancêtre relatif"], ["fixed", "fixe vs écran"], ["sticky", "collant au scroll"]] },
        { type: "code", filename: "position.css", language: "css", code: `.entete {
  position: sticky; /* Reste collée en haut au défilement */
  top: 0;
  z-index: 10;
}
.carte { position: relative; } /* Référence pour .badge */
.badge {
  position: absolute; /* Dans le parent relatif */
  top: -8px;
  right: -8px;
}` },
      ],
    },
    {
      id: "responsive",
      title: "Responsive mobile-first",
      blocks: [
        { type: "code", filename: "responsive.css", language: "css", code: `/* Mobile-first : d'abord pour petit écran */
.menu { flex-direction: column; }

/* Tablette à partir de 768px */
@media (min-width: 768px) {
  .menu { flex-direction: row; }
}
/* Desktop à partir de 1024px */
@media (min-width: 1024px) {
  .conteneur { max-width: 960px; margin: 0 auto; }
}` },
      ],
    },
    {
      id: "animations",
      title: "Transitions et animations",
      blocks: [
        { type: "code", filename: "animations.css", language: "css", code: `.bouton {
  background: #5b9dff;
  transition: transform 0.2s ease, background 0.2s ease;
}
.bouton:hover {
  transform: translateY(-2px); /* Soulèvement au survol */
  background: #4a8cee;
}
@keyframes apparition {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.carte { animation: apparition 0.4s ease forwards; }` },
      ],
    },
    {
      id: "pseudo",
      title: "Pseudo-classes et pseudo-éléments",
      blocks: [
        { type: "code", filename: "pseudo.css", language: "css", code: `a:hover { color: #5b9dff; }                  /* Au survol */
input:focus { outline: 2px solid #5b9dff; } /* Au focus */
tr:nth-child(even) { background: #f5f5f5; }  /* Une ligne sur deux */
li:not(:first-child) { border-top: 1px solid #ddd; }
.titre::before { content: "→ "; color: #5b9dff; }
input::placeholder { color: #999; }` },
      ],
    },
    ...cssCourse,
  ],
};
