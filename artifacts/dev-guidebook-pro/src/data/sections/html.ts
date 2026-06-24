import type { Section } from "../types";
import { htmlCourse } from "./htmlCourse";

export const html: Section = {
  id: "html",
  title: "HTML",
  icon: "FileCode",
  tags: ["html"],
  subsections: [
    {
      id: "squelette",
      title: "Squelette d'une page",
      blocks: [
        { type: "p", text: "Toute page web commence par un document HTML structuré. Voici le squelette complet d'une page, avec chaque balise expliquée." },
        { type: "code", filename: "index.html", language: "html", code: `<!DOCTYPE html> <!-- Indique au navigateur qu'on utilise du HTML5 -->
<html lang="fr"> <!-- Élément racine ; lang aide lecteurs d'écran et SEO -->
  <head> <!-- En-tête : métadonnées invisibles -->
    <meta charset="UTF-8" /> <!-- Encodage des caractères (é à ç) -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Boutique en ligne de vêtements" />
    <title>Ma Boutique</title> <!-- Titre affiché dans l'onglet -->
    <link rel="stylesheet" href="styles.css" /> <!-- Feuille de style -->
  </head>
  <body> <!-- Corps : tout ce qui est visible -->
    <h1>Bienvenue sur Ma Boutique</h1>
    <p>Découvrez nos nouveautés.</p>
    <script src="app.js"></script> <!-- Script chargé en fin de body -->
  </body>
</html>` },
        { type: "note", variant: "info", title: "Bon à savoir", text: "On place le <script> juste avant </body> pour que le HTML soit chargé avant l'exécution du JavaScript." },
      ],
    },
    {
      id: "semantique",
      title: "Balises sémantiques",
      blocks: [
        { type: "p", text: "Les balises sémantiques décrivent le rôle du contenu. Elles améliorent l'accessibilité et le référencement." },
        { type: "code", filename: "page-produit.html", language: "html", code: `<header> <!-- En-tête du site : logo + navigation -->
  <nav> <!-- Navigation principale -->
    <a href="/">Accueil</a>
    <a href="/boutique">Boutique</a>
  </nav>
</header>

<main> <!-- Contenu principal unique de la page -->
  <article> <!-- Contenu autonome (fiche produit) -->
    <h2>T-shirt en coton bio</h2>
    <figure> <!-- Regroupe une image et sa légende -->
      <img src="tshirt.jpg" alt="T-shirt blanc col rond" />
      <figcaption>Disponible en 4 tailles</figcaption>
    </figure>
    <section> <!-- Section thématique -->
      <h3>Description</h3>
      <p>Un t-shirt confortable fabriqué en France.</p>
    </section>
  </article>
  <aside> <!-- Contenu secondaire -->
    <h3>Vous aimerez aussi</h3>
  </aside>
</main>

<footer> <!-- Pied de page -->
  <p>&copy; 2026 Ma Boutique</p>
</footer>` },
        { type: "table", headers: ["Balise", "Rôle"], rows: [["<header>", "En-tête (logo, nav)"], ["<nav>", "Liens de navigation"], ["<main>", "Contenu principal (un seul)"], ["<article>", "Contenu autonome"], ["<section>", "Regroupement thématique"], ["<aside>", "Contenu secondaire"], ["<footer>", "Pied de page"]] },
      ],
    },
    {
      id: "formulaires",
      title: "Formulaires",
      blocks: [
        { type: "p", text: "Un formulaire d'inscription complet avec différents types d'input et la validation HTML5 native." },
        { type: "code", filename: "inscription.html", language: "html", code: `<form action="/inscription" method="post">
  <label for="nom">Nom complet</label> <!-- 'for' relie le label au champ -->
  <input type="text" id="nom" name="nom" required autocomplete="name" />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required
         placeholder="vous@exemple.fr" /> <!-- type email = format vérifié -->

  <label for="mdp">Mot de passe</label>
  <input type="password" id="mdp" name="motdepasse"
         pattern=".{8,}" title="8 caractères minimum" required />

  <label for="age">Âge</label>
  <input type="number" id="age" name="age" min="18" max="120" />

  <label><input type="checkbox" name="cgu" required /> J'accepte les CGU</label>

  <button type="submit">Créer mon compte</button>
</form>` },
        { type: "note", variant: "warning", title: "Sécurité", text: "La validation HTML5 améliore l'expérience mais n'est jamais suffisante : validez TOUJOURS les données côté serveur." },
      ],
    },
    {
      id: "medias",
      title: "Images et médias",
      blocks: [
        { type: "code", filename: "medias.html", language: "html", code: `<!-- Image responsive qui s'adapte à la largeur de l'écran -->
<img src="produit-800.jpg"
     srcset="produit-400.jpg 400w, produit-800.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Sac à dos noir imperméable"
     loading="lazy" /> <!-- Chargement différé -->

<!-- Vidéo avec contrôles -->
<video controls width="640" poster="apercu.jpg">
  <source src="demo.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la vidéo.
</video>

<audio controls src="podcast.mp3">Audio non supporté.</audio>

<!-- SVG inline (icône) -->
<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
</svg>` },
      ],
    },
    {
      id: "accessibilite",
      title: "Accessibilité",
      blocks: [
        { type: "code", filename: "accessibilite.html", language: "html", code: `<!-- aria-label : nom accessible quand il n'y a pas de texte -->
<button aria-label="Fermer la fenêtre">✕</button>

<!-- aria-hidden : cache un élément décoratif aux lecteurs d'écran -->
<span aria-hidden="true">🛒</span> Panier

<!-- role : précise la fonction -->
<div role="alert">Votre commande a été validée.</div>

<!-- Respecter l'ordre des titres : h1 puis h2 puis h3 -->
<h1>Ma Boutique</h1>
<h2>Catégories</h2>
<h3>Vêtements</h3>` },
        { type: "note", variant: "info", text: "Assurez-vous que le focus clavier soit visible : ne supprimez jamais outline sans alternative." },
      ],
    },
    {
      id: "reference-elements",
      title: "Référence des éléments",
      blocks: [
        { type: "p", text: "Référence des principaux éléments HTML5, classés par catégorie selon la spécification W3C. Choisis toujours l'élément le plus porteur de sens : le rôle premier du HTML est sémantique." },
        { type: "h", text: "Document & métadonnées" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<html>", "Racine du document HTML."],
          ["<head>", "Conteneur des métadonnées (non affichées)."],
          ["<title>", "Titre du document affiché dans l'onglet."],
          ["<base>", "URL et cible par défaut des liens du document."],
          ["<link>", "Lien vers une ressource externe (CSS, favicon...)."],
          ["<meta>", "Métadonnées : charset, viewport, description..."],
          ["<style>", "Styles CSS internes au document."],
        ] },
        { type: "h", text: "Structure & sections" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<body>", "Contenu visible du document."],
          ["<header>", "En-tête d'introduction (logo, nav)."],
          ["<nav>", "Bloc de liens de navigation."],
          ["<main>", "Contenu principal unique de la page."],
          ["<article>", "Contenu autonome et complet."],
          ["<section>", "Regroupement thématique de contenu."],
          ["<aside>", "Contenu secondaire relatif au contenu principal."],
          ["<footer>", "Pied de page d'une section ou du document."],
          ["<h1> … <h6>", "Titres de niveaux d'importance décroissante."],
        ] },
        { type: "h", text: "Groupement de contenu" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<div>", "Conteneur générique sans sémantique (mise en page)."],
          ["<p>", "Paragraphe de texte."],
          ["<ul> / <ol> / <li>", "Listes non ordonnée / ordonnée et leurs éléments."],
          ["<dl> / <dt> / <dd>", "Liste de définitions : terme + description."],
          ["<figure> / <figcaption>", "Contenu illustré autonome + sa légende."],
          ["<blockquote>", "Citation de bloc provenant d'une autre source."],
          ["<pre>", "Texte préformaté (espaces et sauts de ligne conservés)."],
          ["<hr>", "Rupture thématique entre deux passages."],
          ["<address>", "Coordonnées d'une personne ou organisation."],
        ] },
        { type: "h", text: "Sémantique au fil du texte" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<a>", "Hyperlien (attribut href)."],
          ["<strong>", "Forte importance (lu avec emphase)."],
          ["<em>", "Accent qui modifie le sens de la phrase."],
          ["<mark>", "Surlignage / passage pertinent."],
          ["<abbr>", "Abréviation ou acronyme (attribut title)."],
          ["<cite>", "Référence à une œuvre."],
          ["<q>", "Courte citation en ligne."],
          ["<code>", "Fragment de code informatique."],
          ["<time>", "Date ou heure exploitable par la machine (datetime)."],
          ["<span>", "Conteneur en ligne générique sans sémantique."],
          ["<b> / <i> / <u> / <s> / <small>", "Mises en forme typographiques (sans importance ajoutée)."],
          ["<sub> / <sup>", "Indice et exposant."],
          ["<br> / <wbr>", "Saut de ligne / point de césure possible."],
        ] },
        { type: "h", text: "Médias & contenu intégré" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<img>", "Image (attributs src + alt obligatoires)."],
          ["<picture> / <source>", "Images responsives selon le contexte."],
          ["<audio> / <video>", "Intégration d'une piste audio / vidéo."],
          ["<track>", "Sous-titres ou pistes texte d'un média."],
          ["<iframe>", "Page imbriquée dans la page courante."],
          ["<svg>", "Graphique vectoriel intégré."],
          ["<canvas>", "Zone de dessin bitmap pilotée en JavaScript."],
          ["<map> / <area>", "Carte-image et ses zones cliquables."],
        ] },
        { type: "h", text: "Tableaux" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<table>", "Tableau de données."],
          ["<caption>", "Titre du tableau."],
          ["<thead> / <tbody> / <tfoot>", "Regroupement en-tête / corps / pied."],
          ["<tr>", "Ligne du tableau."],
          ["<th> / <td>", "Cellule d'en-tête / de données."],
          ["<colgroup> / <col>", "Groupes et colonnes pour le style."],
        ] },
        { type: "h", text: "Formulaires" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<form>", "Formulaire (attributs action, method)."],
          ["<label>", "Légende reliée à un champ (attribut for)."],
          ["<input>", "Champ de saisie typé (attribut type)."],
          ["<textarea>", "Champ de texte multiligne."],
          ["<select> / <option> / <optgroup>", "Liste déroulante, options et groupes."],
          ["<button>", "Bouton d'action (submit, reset, button)."],
          ["<fieldset> / <legend>", "Regroupement de champs + son titre."],
          ["<datalist>", "Suggestions d'auto-complétion pour un input."],
          ["<output>", "Résultat d'un calcul affiché à l'utilisateur."],
          ["<progress> / <meter>", "Barre de progression / mesure dans une plage."],
        ] },
        { type: "h", text: "Éléments interactifs & scripts" },
        { type: "table", headers: ["Élément", "Rôle"], rows: [
          ["<details> / <summary>", "Bloc dépliable et son résumé cliquable."],
          ["<dialog>", "Boîte de dialogue native (modale)."],
          ["<ins> / <del>", "Contenu inséré / supprimé d'un document."],
          ["<script>", "Script ou données embarquées."],
          ["<noscript>", "Contenu affiché si JavaScript est désactivé."],
          ["<template>", "Fragment HTML inerte cloné via JavaScript."],
        ] },
        { type: "note", variant: "success", title: "💡 Enrichi depuis tes notes", text: "Référence basée sur ta liste Pierre Giraud (HTML 5.3), mise à jour vers le HTML Living Standard actuel. Ajouts : <picture>, <template>, <output>, <fieldset>/<legend>, <datalist>, <thead>/<tbody>/<tfoot>, <time> et <sub>/<sup>, absents de la note d'origine. Les éléments obsolètes ou rares (<param>, <object>, <rb>/<rtc>) ont été écartés au profit des bonnes pratiques modernes." },
      ],
    },
    ...htmlCourse,
  ],
};
