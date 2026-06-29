import type { Section } from "../types";

export const bootstrap: Section = {
  id: "bootstrap",
  title: "Bootstrap",
  icon: "Layout",
  tags: ["css", "html"],
  subsections: [

    // ── INTRODUCTION ────────────────────────────────────────────────────────
    {
      id: "bootstrap-intro",
      title: "Introduction",
      blocks: [
        { type: "p", text: "Framework CSS permettant de créer rapidement des interfaces web responsive grâce à un système de grille et des classes prêtes à l'emploi." },
        { type: "h", text: "Structure de classe Bootstrap" },
        {
          type: "diagram",
          content: `{propriété}-{breakpoint}-{valeur}`,
        },
        { type: "h", text: "Intégration via CDN" },
        { type: "code", filename: "index.html", language: "html", code: `<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- contenu -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>` },
        { type: "h", text: "Intégration via NPM" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install bootstrap` },
        { type: "code", filename: "index.html", language: "html", code: `<head>
  <link rel="stylesheet" href="bootstrap.min.css">
</head>
<body>
  <script src="bootstrap.bundle.min.js"></script>
</body>` },
      ],
    },

    // ── BREAKPOINTS ─────────────────────────────────────────────────────────
    {
      id: "bootstrap-breakpoints",
      title: "Breakpoints",
      blocks: [
        {
          type: "table",
          headers: ["Breakpoint", "Classe", "Largeur", "Usage"],
          rows: [
            ["Extra small", ".col-", "<576px", "Mobile (par défaut)"],
            ["Small", ".col-sm-", "≥576px", "Smartphones paysage"],
            ["Medium", ".col-md-", "≥768px", "Tablettes"],
            ["Large", ".col-lg-", "≥992px", "Desktop"],
            ["Extra large", ".col-xl-", "≥1200px", "Grands écrans"],
            ["XXL", ".col-xxl-", "≥1400px", "Très grands écrans"],
          ],
        },
      ],
    },

    // ── GRILLE ──────────────────────────────────────────────────────────────
    {
      id: "bootstrap-grille",
      title: "Système de grille",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────┐
│ .container                          │
│  ┌───────────────────────────────┐  │
│  │ .row                          │  │
│  │  ┌──────────┐  ┌──────────┐   │  │
│  │  │ .col-12  │  │ .col-12  │   │  │
│  │  │ .col-md-6│  │ .col-md-6│   │  │
│  │  │ Colonne 1│  │ Colonne 2│   │  │
│  │  └──────────┘  └──────────┘   │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘`,
        },
        { type: "code", filename: "index.html", language: "html", code: `<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">Colonne 1</div>
    <div class="col-12 col-md-6">Colonne 2</div>
  </div>
</div>` },
        { type: "note", variant: "info", text: "Syntaxe : col-{breakpoint}-{nombre sur 12}" },
      ],
    },

    // ── CLASSES PRINCIPALES ─────────────────────────────────────────────────
    {
      id: "bootstrap-classes",
      title: "Classes principales",
      blocks: [
        {
          type: "table",
          headers: ["Catégorie", "Classes", "Description"],
          rows: [
            ["Grille", "container, container-fluid, row, col, col-sm-6, col-lg-4", "Structure responsive en colonnes et lignes"],
            ["Espacement", "m-0 à m-5, mt-3, mx-auto, p-2, px-lg-4", "Marges et padding (responsive inclus)"],
            ["Alignement", "text-start, text-center, text-end, align-items-center, justify-content-between", "Alignement texte et flexbox"],
            ["Couleurs", "text-primary, text-danger, bg-success, bg-light, text-muted", "Couleurs texte et fond"],
            ["Typographie", "fw-bold, fst-italic, text-lowercase, text-uppercase, text-nowrap", "Style du texte"],
            ["Composants", "btn, btn-primary, card, modal, dropdown, navbar, alert, badge", "Éléments UI prêts à l'emploi"],
            ["Bordures", "border, border-0, border-top, border-primary, rounded, rounded-circle", "Gestion des bordures"],
            ["Affichage", "d-none, d-block, d-flex, d-inline, d-inline-block", "Contrôle du display"],
            ["Positionnement", "position-static, position-relative, position-absolute, top-0, start-50", "Position CSS"],
            ["Flexbox", "flex-row, flex-column, flex-wrap, justify-content-center, align-items-start, order-1", "Organisation flexible"],
            ["Formulaires", "form-control, form-select, form-check, form-range, input-group", "Champs et contrôles de formulaire"],
            ["Utilitaires", "clearfix, overflow-auto, shadow, text-truncate, pe-none", "Aides rapides CSS"],
            ["Accessibilité", "visually-hidden, sr-only, stretched-link", "Accessibilité UI"],
          ],
        },
      ],
    },

    // ── RESPONSIVE ──────────────────────────────────────────────────────────
    {
      id: "bootstrap-responsive",
      title: "Responsive",
      blocks: [
        {
          type: "table",
          headers: ["Catégorie", "Classes", "Description"],
          rows: [
            ["Grille", "container, container-fluid, row, col, col-md-6, col-lg-4", "Organisation du layout en grille"],
            ["Affichage", "d-none, d-sm-block, d-md-flex", "Contrôle de l'affichage par breakpoint"],
            ["Visibilité", "visible, invisible", "Gestion de la visibilité"],
            ["Flexbox", "flex-row, flex-md-column, justify-content-lg-center, align-items-xl-start", "Gestion du layout flexible"],
            ["Margin", "m-0, m-sm-3, mt-md-4, mx-lg-auto", "Marges responsives"],
            ["Padding", "p-1, p-sm-2, pt-md-3, px-xl-4", "Padding responsive"],
            ["Tableau", "table, table-responsive, table-responsive-sm", "Tables scrollables sur petits écrans"],
            ["Image", "img-fluid, img-thumbnail", "Images responsive et stylisées"],
          ],
        },
        { type: "h", text: "Ratio (vidéo / iframe responsive)" },
        { type: "p", text: "Permet de rendre une iframe ou une vidéo responsive en gardant ses proportions." },
        { type: "code", filename: "index.html", language: "html", code: `<!-- ratio-16x9 → vidéo classique (YouTube) -->
<div class="ratio ratio-16x9">
  <iframe src="..."></iframe>
</div>

<!-- ratio-4x3 → format plus carré -->
<!-- ratio-1x1 → format carré -->` },
      ],
    },

    // ── ABRÉVIATIONS ────────────────────────────────────────────────────────
    {
      id: "bootstrap-abreviations",
      title: "Table des abréviations Bootstrap",
      blocks: [
        {
          type: "table",
          headers: ["Abréviation", "Signification", "Exemple", "Description"],
          rows: [
            ["bg", "background", "bg-primary", "Couleur de fond"],
            ["btn", "button", "btn btn-success", "Bouton stylisé"],
            ["col", "column", "col-md-6", "Colonne responsive"],
            ["d", "display", "d-flex, d-none", "Propriété display"],
            ["fs", "font-size", "fs-4", "Taille de police"],
            ["fw", "font-weight", "fw-bold", "Épaisseur du texte"],
            ["h", "height", "h-100", "Hauteur"],
            ["m", "margin", "m-3, mt-2", "Marges"],
            ["p", "padding", "p-2, px-3", "Espacement intérieur"],
            ["me", "margin-end", "me-3", "Marge à droite (LTR)"],
            ["ms", "margin-start", "ms-2", "Marge à gauche (LTR)"],
            ["pe", "padding-end", "pe-3", "Padding à droite"],
            ["ps", "padding-start", "ps-2", "Padding à gauche"],
            ["rounded", "border radius", "rounded, rounded-circle", "Coins arrondis"],
            ["text", "text utilities", "text-center, text-muted", "Style du texte"],
            ["w", "width", "w-50, w-100", "Largeur"],
            ["vh", "viewport height", "vh-100", "Hauteur écran"],
            ["vw", "viewport width", "vw-100", "Largeur écran"],
            ["gap", "spacing", "gap-3", "Espace entre éléments"],
            ["justify-content", "flex alignment", "justify-content-center", "Alignement horizontal"],
            ["align-items", "alignement vertical", "align-items-center", "Alignement vertical des éléments"],
          ],
        },
      ],
    },

    // ── COMPOSANTS ──────────────────────────────────────────────────────────
    {
      id: "bootstrap-composants",
      title: "Composants Bootstrap",
      blocks: [
        {
          type: "table",
          headers: ["Composant", "Classe principale", "Rôle général"],
          rows: [
            ["Navbar", ".navbar", "Barre de navigation responsive"],
            ["Card", ".card", "Bloc stylisé (header / body / footer)"],
            ["Alert", ".alert", "Message d'alerte (info, succès, erreur)"],
            ["Modal", ".modal", "Fenêtre popup"],
            ["Dropdown", ".dropdown", "Menu déroulant"],
            ["Carousel", ".carousel", "Slider d'images"],
            ["Accordion", ".accordion", "Contenu repliable (FAQ)"],
            ["Breadcrumb", ".breadcrumb", "Fil d'Ariane"],
            ["Pagination", ".pagination", "Navigation par pages"],
            ["List group", ".list-group", "Liste stylisée"],
            ["Tabs / Pills", ".nav-tabs, .nav-pills", "Navigation par onglets"],
            ["Toast", ".toast", "Notification légère"],
            ["Progress", ".progress", "Barre de progression"],
            ["Spinner", ".spinner-border", "Chargement (loader)"],
            ["Offcanvas", ".offcanvas", "Menu latéral coulissant"],
            ["Popover / Tooltip", ".popover, .tooltip", "Aide contextuelle flottante"],
            ["Form", ".form-control, .form-group", "Champs et structure de formulaire"],
          ],
        },
      ],
    },

    // ── POSITIONNEMENTS ET EFFETS ───────────────────────────────────────────
    {
      id: "bootstrap-effets",
      title: "Positionnements et effets",
      blocks: [
        {
          type: "table",
          headers: ["Classe", "Effet"],
          rows: [
            [".position-relative", "Position relative"],
            [".position-absolute", "Position absolute"],
            [".top-0", "Positionné en haut"],
            [".start-0", "Positionné à gauche"],
            [".translate-middle", "Centre l'élément via transform"],
          ],
        },
        { type: "h", text: "Z-index" },
        {
          type: "table",
          headers: ["Classe", "Valeur"],
          rows: [
            [".z-0", "z-index: 0"],
            [".z-1", "z-index: 1"],
            [".z-3", "z-index: 3"],
          ],
        },
        { type: "h", text: "Overflow / Visibilité" },
        {
          type: "table",
          headers: ["Classe", "Effet"],
          rows: [
            [".overflow-auto", "Ajoute un scroll automatique"],
            [".overflow-hidden", "Cache le débordement"],
            [".visually-hidden", "Cache visuellement (reste accessible pour lecteurs d'écran)"],
          ],
        },
        { type: "h", text: "Shadows" },
        {
          type: "table",
          headers: ["Classe", "Résultat"],
          rows: [
            [".shadow-sm", "Petite ombre"],
            [".shadow", "Ombre normale"],
            [".shadow-lg", "Grande ombre"],
            [".shadow-none", "Supprime l'ombre"],
          ],
        },
      ],
    },
  ],
};
