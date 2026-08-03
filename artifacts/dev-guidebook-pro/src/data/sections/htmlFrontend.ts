import type { SubSection } from "../types";

export const htmlFrontend: SubSection[] = [
  {
    id: "html-fe-base-de-page-html-s-mantique",
    title: "Base de page HTML s\u00e9mantique",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Base page HTML sémantique</title>
</head>
<body>

<header>
  <h1>Mon site</h1>
  <nav aria-label="Navigation principale">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Section 1</h2>
    <p>Contenu de la section 1...</p>
  </section>

  <article>
    <h2>Article 1</h2>
    <p>Texte de l'article...</p>
  </article>

  <aside>
    <p>Informations complémentaires ou encadrés</p>
  </aside>
</main>

<footer>
  <p>© 2026 Mon site - Mentions légales</p>
</footer>

</body>
</html>` },
    ],
  },
  {
    id: "html-fe-types-de-balises",
    title: "Types de balises",
    blocks: [
      { type: "table", headers: ["Type", "Exemple", "Description"], rows: [["Associer", "`<a>... <b>...</b></a>`", "Balises imbriqu\u00e9es"], ["Orpheline", "`<c ... />`", "Balise sans fermeture"], ["Paire", "`<d>...</d>`", "Balise ouvrante + fermante"]] },
    ],
  },
  {
    id: "html-fe-base-universelle-d-une-page-web",
    title: "Base universelle d\u2019une page web",
    blocks: [
      { type: "h", text: "\u00c9l\u00e9ments communs \u00e0 toutes les pages :" },
      { type: "list", items: ["Header (en-t\u00eate) : logo, menu de navigation", "Footer (pied de page) : contacts, liens utiles, mentions l\u00e9gales", "Styles et polices globales (CSS)"] },
      { type: "h", text: "\u00c9l\u00e9ments sp\u00e9cifiques \u00e0 chaque page :" },
      { type: "list", items: ["Titre de la page", "Contenu principal (texte, images, m\u00e9dias)", "Image ou visuel principal (facultatif)"] },
    ],
  },
  {
    id: "html-fe-les-balises",
    title: "Les balises",
    blocks: [
      { type: "h", text: "Date" },
      { type: "code", filename: "exemple.html", language: "html", code: `<time datetime="2025-07-23">23 juillet 2025</time>` },
      { type: "h", text: "Citations" },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Longue citation -->
<blockquote>
  "Le code est comme l'humour. Quand il faut l'expliquer, c'est qu'il est mauvais."
</blockquote>

<!-- Citation courte inline -->
<p>Comme le dit Linus Torvalds : <q>Talk is cheap. Show me the code.</q></p>

<!-- Citation avec auteur -->
<blockquote>
  "Talk is cheap. Show me the code."
  <cite>Linus Torvalds</cite>
</blockquote>` },
      { type: "h", text: "Saut de ligne" },
      { type: "code", filename: "exemple.html", language: "html", code: `Texte<br>
à la ligne<br>` },
      { type: "h", text: "Mise en forme du texte" },
      { type: "code", filename: "exemple.html", language: "html", code: `<mark>texte surligné</mark>
<u>texte souligné</u>
<strong>Texte en gras (important)</strong>
<small>Texte en petit</small>
<em>Texte accentué en italique</em>
<i>Texte italique</i>
<b>Texte gras</b>
<del>Texte barré</del>
<ins>Texte ajouté</ins>
<p>Paragraphe</p>` },
      { type: "h", text: "Titres" },
      { type: "code", filename: "exemple.html", language: "html", code: `<h1>Titre principal — 1 seul par page</h1>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>
<h4>Sous-section plus petite</h4>
<h5>Niveau encore plus petit</h5>
<h6>Niveau le plus petit</h6>` },
      { type: "h", text: "Texte brut (pre) & conteneur" },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Texte brut avec indentation conservée -->
<pre>
Texte 1
  Texte indentée
</pre>

<!-- Conteneur générique pour CSS -->
<span class="texte">Mot stylisé</span>

<!-- Bloc conteneur -->
<div class="conteneur">
  <!-- Code -->
</div>` },
      { type: "h", text: "Abbr\u00e9viation & adresse" },
      { type: "code", filename: "exemple.html", language: "html", code: `<abbr title="information">info</abbr>

<address>
  <!-- contenu adresse -->
</address>` },
    ],
  },
  {
    id: "html-fe-liens-html",
    title: "Liens HTML",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Mail -->
<a href="mailto:nom@example.com">Envoyer un email</a>

<!-- Téléphone -->
<a href="tel:+33606060606">Appeler</a>

<!-- WhatsApp -->
<a href="https://wa.me/33606060606" target="_blank">Discuter</a>

<!-- Google Maps -->
<a href="https://www.google.com/maps?q=Entreprise+Adresse" target="_blank">
  Voir sur Google Maps
</a>

<!-- Lien externe (sécurisé) -->
<a href="https://www.exemple.com" target="_blank" rel="noopener noreferrer">
  Visiter le site
</a>

<!-- Lien interne -->
<a href="/contact">Page Contact</a>

<!-- SPA Vue Router -->
<router-link to="/contact">Contact</router-link>

<!-- SPA React Router -->
<Link to="/contact">Contact</Link>

<!-- Ancrage vers une section -->
<a href="#section-id">Aller à la section</a>
<section id="section-id">
  <!-- Contenu ciblé -->
</section>

<!-- Téléchargement -->
<a href="/fichiers/CV_Kat.pdf" download="CV_Kat.pdf">
  Télécharger mon CV
</a>` },
    ],
  },
  {
    id: "html-fe-image-vid-o",
    title: "Image & Vid\u00e9o",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Image -->
<img src="photo.jpg" alt="Description de l'image">

<!-- Vidéo YouTube (iframe) -->
<iframe
  src="https://www.youtube.com/embed/ID-VIDEO"
  title="Vidéo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<!-- Afficher une page externe -->
<iframe
  class="contenu-externe"
  src="https://www.exemple.com"
  title="Contenu externe">
</iframe>

<!-- Afficher une page interne -->
<iframe
  src="pages/moncontenu.html"
  title="Page interne">
</iframe>` },
    ],
  },
  {
    id: "html-fe-lier-des-fichiers",
    title: "Lier des fichiers",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- CSS dans le <head> -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- JS à la fin du <body> -->
<body>
  ...
  <script src="script.js"></script>
</body>` },
    ],
  },
  {
    id: "html-fe-m-tadonn-es",
    title: "M\u00e9tadonn\u00e9es",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- SEO - Description -->
<head>
  <meta name="description" content="Description de la page">
</head>

<!-- Responsive mobile/tablette -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">` },
    ],
  },
  {
    id: "html-fe-formulaires",
    title: "Formulaires",
    blocks: [
      { type: "h", text: "Menu d\u00e9roulant \u2014 choix multiple" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <label for="choix">Sélectionnez une ou plusieurs options :</label>
  <select name="choix[]" id="choix" multiple size="4">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Menu d\u00e9roulant \u2014 choix unique" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="# ou URL serveur" method="post">
  <label for="choix">Sélectionnez une option :</label>
  <select name="choix" id="choix">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Choix unique \u2014 radio" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="# ou URL serveur" method="post">
  <fieldset>
    <legend>Choisissez votre genre :</legend>
    <label>
      <input type="radio" name="genre" value="femme"> Femme
    </label>
    <label>
      <input type="radio" name="genre" value="homme"> Homme
    </label>
  </fieldset>
  <br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Choix multiple \u2014 checkbox" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <fieldset>
    <legend>Souscrivez à :</legend>
    <label>
      <input type="checkbox" name="abonnement[]" value="news"> Newsletter
    </label>
    <label>
      <input type="checkbox" name="abonnement[]" value="promo"> Promotions
    </label>
  </fieldset>
  <br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Champ multiligne (textarea)" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <label for="description">Description :</label>
  <textarea id="description" name="description" rows="4" cols="50"></textarea>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Champ avec indicatif (placeholder)" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <label for="message">Votre message :</label>
  <textarea id="message" name="message" placeholder="Écrire un message..." rows="4" cols="50"></textarea>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Formulaire de contact complet" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="URL du serveur ou #" method="post">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required>
  <br><br>

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>
  <br><br>

  <label for="message">Message :</label>
  <textarea id="message" name="message" placeholder="Écrire votre message..." rows="5" cols="50" required></textarea>
  <br><br>

  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Bouton" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="/envoyer" method="post">
  <button type="submit">Envoyer</button>
</form>` },
    ],
  },
  {
    id: "html-fe-listes",
    title: "Listes",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Non ordonnée (points) -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordonnée (numérotée) -->
<ol>
  <li>Analyser le besoin</li>
  <li>Coder la fonctionnalité</li>
  <li>Tester le résultat</li>
</ol>

<!-- Définition -->
<dl>
  <dt>HTML</dt>
  <dd>Langage de structure du web.</dd>
  <dt>CSS</dt>
  <dd>Langage de mise en forme.</dd>
</dl>` },
    ],
  },
  {
    id: "html-fe-tableau-s-mantique",
    title: "Tableau s\u00e9mantique",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<table>
  <caption>Statistiques des ventes par trimestre</caption>

  <thead>
    <tr>
      <th>Colonne 1</th>
      <th>Colonne 2</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Donnée A1</td>
      <td>Donnée A2</td>
    </tr>
    <tr>
      <td>Donnée B1</td>
      <td>Donnée B2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>42</td>
    </tr>
  </tfoot>
</table>` },
    ],
  },
  {
    id: "html-fe-entit-s-html",
    title: "Entit\u00e9s HTML",
    blocks: [
      { type: "table", headers: ["Symbole", "Code HTML"], rows: [["<", "`&lt;`"], [">", "`&gt;`"], ["&", "`&amp;`"], ["\u201d", "`&quot;`"], ["\u2019", "`&apos;`"], ["(espace ins\u00e9cable)", "`&nbsp;`"], ["\u20ac", "`&euro;`"], ["$", "`&#36;`"], ["\u00a3", "`&pound;`"], ["\u00a5", "`&yen;`"], ["\u00a2", "`&cent;`"], ["\u2212", "`&minus;`"], ["\u00d7", "`&times;`"], ["\u00f7", "`&divide;`"], ["\u2260", "`&ne;`"], ["\u2264", "`&le;`"], ["\u2265", "`&ge;`"], ["\u00b1", "`&plusmn;`"], ["\u2190", "`&larr;`"], ["\u2192", "`&rarr;`"], ["\u2191", "`&uarr;`"], ["\u2193", "`&darr;`"], ["\u2194\ufe0e", "`&harr;`"], ["\u21d2", "`&rArr;`"], ["\u21d0", "`&lArr;`"], ["\u21d4", "`&hArr;`"], ["\u00a9", "`&copy;`"], ["\u00ae", "`&reg;`"], ["\u2122", "`&trade;`"]] },
    ],
  },
  {
    id: "html-fe-commentaires",
    title: "Commentaires",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Commentaire simple -->

<!--==== Section de commentaire "En-tête" ==== -->` },
    ],
  },
  {
    id: "html-fe-guide-de-style",
    title: "Guide de style",
    blocks: [
      { type: "h", text: "Structure du document" },
      { type: "list", items: ["Toujours inclure <!DOCTYPE html>", "D\u00e9clarer l\u2019encodage : <meta charset=\"UTF-8\">", "Indentation coh\u00e9rente (2 espaces recommand\u00e9s)", "Arborescence logique : <header> \u2192 <nav> \u2192 <main> \u2192 <section> \u2192 <footer>"] },
      { type: "h", text: "Nommage et attributs" },
      { type: "list", items: ["Attributs en minuscules, valeurs entre guillemets doubles \" \"", "Classes en kebab-case : main-header", "Ordre des attributs : type \u2192 id \u2192 class \u2192 autres", "IDs uniques dans le document"] },
      { type: "h", text: "S\u00e9mantique HTML5" },
      { type: "list", items: ["Utiliser les balises appropri\u00e9es : <header>, <main>, <section>, <article>, <footer>", "\u00c9viter les <div> ou <span> inutiles", "Titres hi\u00e9rarchiques : <h1> \u2192 <h2> \u2192 <h3>"] },
      { type: "h", text: "Accessibilit\u00e9 (a11y)" },
      { type: "list", items: ["Toujours ajouter alt aux images : <img src=\"logo.png\" alt=\"Logo\">", "Lier label \u00e0 input via for : <label for=\"email\">Email</label>", "Utiliser ARIA si n\u00e9cessaire : <button aria-expanded=\"false\">Menu</button>", "Sp\u00e9cifier la langue : <html lang=\"fr\">"] },
      { type: "h", text: "Lisibilit\u00e9 et organisation" },
      { type: "list", items: ["Retour \u00e0 la ligne apr\u00e8s chaque balise importante", "Commentaires pour s\u00e9parer les sections : <!-- Section : Header -->", "Ne pas mettre de style inline dans les balises"] },
      { type: "h", text: "Performances" },
      { type: "list", items: ["Placer <script> \u00e0 la fin du <body> (sauf modules)", "Minifier HTML pour la production", "Charger les polices via <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"] },
      { type: "h", text: "Formulaires" },
      { type: "list", items: ["Grouper les champs avec <form> et <fieldset> si n\u00e9cessaire", "Boutons avec type=\"submit\" explicite : <button type=\"submit\">Envoyer</button>"] },
      { type: "h", text: "SEO" },
      { type: "list", items: ["Meta description pr\u00e9sente et descriptive : <meta name=\"description\" content=\"Page de contact\">", "Balise <title> unique et explicite", "Liens internes coh\u00e9rents avec la structure du site"] },
      { type: "h", text: "Bonnes pratiques g\u00e9n\u00e9rales" },
      { type: "list", items: ["Pas de texte brut dans <body> sans balise", "Grouper liens similaires dans <ul><li>", "Maintenir une arborescence et un code lisibles et coh\u00e9rents"] },
    ],
  },
  {
    id: "html-cheatsheet-balises",
    title: "CheatSheet — Les principales balises HTML",
    blocks: [
      { type: "h", text: "Les balises de premier niveau" },
      { type: "p", text: "Les balises de premier niveau sont les principales balises qui structurent une page HTML et sont indispensables pour réaliser le code minimal d'une page." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<!DOCTYPE>", "Indique au navigateur qu'il s'agit d'une page HTML."],
        ["<body>", "Corps de page"],
        ["<head>", "En-tête de page"],
        ["<html>", "Balise principale de toute page Web."],
      ]},
      { type: "h", text: "Le code minimal d'une page" },
      { type: "p", text: "Le code minimal d'une page est le code qui permet de structurer votre document HTML. Voici le code minimal que vous devrez saisir pour initier votre projet Web :" },
      { type: "code", filename: "index.html", language: "html", code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>` },
      { type: "note", variant: "info", title: "Astuce", text: "Sous VSCode, vous pouvez saisir le raccourci « ! » pour l'afficher automatiquement." },
      { type: "h", text: "Balises d'en-tête" },
      { type: "p", text: "Les balises d'en-tête sont des balises situées dans le haut de votre page Web. Ces dernières sont toutes comprises entre <head> et </head>." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<link>", "Liaison avec une feuille de style. Balise orpheline"],
        ["<meta>", "Métadonnées d'une page Web. Balise orpheline"],
        ["<script>", "Code JavaScript"],
        ["<style>", "Code CSS"],
        ["<title>", "Titre de la page"],
      ]},
      { type: "h", text: "Balises de structuration de texte" },
      { type: "p", text: "Les balises de structuration de texte permettent de mettre en forme votre texte." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<a>", "Lien hypertexte"],
        ["<abbr>", "Abréviation"],
        ["<blockquote>", "Citation (longue)"],
        ["<br/>", "Retour à la ligne. Balise orpheline"],
        ["<cite>", "Citation du titre d'une œuvre ou d'un évènement"],
        ["<em>", "Mise en valeur normale"],
        ["<figcaption>", "Description de la figure"],
        ["<figure>", "Figure (image, code, etc.)"],
        ["<h1>", "Titre de niveau 1"],
        ["<h2>", "Titre de niveau 2"],
        ["<h3>", "Titre de niveau 3"],
        ["<h4>", "Titre de niveau 4"],
        ["<h5>", "Titre de niveau 5"],
        ["<h6>", "Titre de niveau 6"],
        ["<img />", "Image. Balise orpheline"],
        ["<mark>", "Mise en valeur visuelle"],
        ["<p>", "Paragraphe"],
        ["<q>", "Citation (courte)"],
        ["<strong>", "Mise en valeur forte"],
        ["<sub>", "Indice"],
        ["<sup>", "Exposant"],
      ]},
      { type: "h", text: "Balises de listes" },
      { type: "p", text: "Les balises de liste permettent de créer toutes sortes de listes (à puces, numérotées, etc.)." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<dd>", "Définition du terme"],
        ["<dl>", "Liste de définitions"],
        ["<dt>", "Terme à définir"],
        ["<li>", "Élément de la liste à puces"],
        ["<ol>", "Liste numérotée"],
        ["<ul>", "Liste à puces, non numérotée"],
      ]},
      { type: "h", text: "Balises de tableau" },
      { type: "p", text: "Les balises de tableau permettent de créer et de mettre en forme un tableau." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<caption>", "Donner un titre au tableau"],
        ["<table>", "Délimite un tableau"],
        ["<tbody>", "Balise non obligatoire permettant d'insérer le pied du tableau"],
        ["<td>", "Cellule du tableau"],
        ["<tfoot>", "Balise non obligatoire permettant d'insérer le corps du tableau"],
        ["<th>", "Cellule d'en-tête du tableau"],
        ["<thead>", "Balise non obligatoire permettant d'insérer l'en-tête du tableau"],
        ["<tr>", "Ligne de tableau"],
      ]},
      { type: "h", text: "Balises de sectionnement" },
      { type: "p", text: "Les balises de sectionnement permettent de construire le squelette d'un site Web." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<article>", "Contenu autonome"],
        ["<aside>", "Informations complémentaires, à part"],
        ["<footer>", "Pied de page"],
        ["<header>", "En-tête"],
        ["<nav>", "Liens principaux de navigation"],
        ["<section>", "Section de page"],
      ]},
      { type: "h", text: "Balises de formulaire" },
      { type: "p", text: "Les balises de formulaire permettent de créer et de mettre en forme un formulaire." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<fieldset>", "Groupe de champs"],
        ["<form>", "Formulaire"],
        ["<input />", "Champ de formulaire (texte, mot de passe, case à cocher, bouton, etc.)"],
        ["<label>", "Libellé d'un champ"],
        ["<legend>", "Titre d'un groupe de champs"],
        ["<optgroup>", "Groupe d'éléments d'une liste déroulante"],
        ["<option>", "Élément d'une liste déroulante"],
        ["<select>", "Liste déroulante"],
        ["<textarea>", "Zone de saisie multiligne"],
      ]},
      { type: "h", text: "Balises d'intégration de contenus" },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<iframe>", "Intégrer une autre page HTML interne ou externe de manière imbriquée"],
        ["<audio>", "Ajouter des pistes audio"],
        ["<video>", "Ajouter des vidéos"],
        ["<object>", "Intégrer une ressource externe traitée de façon différente"],
        ["<embed>", "Intégrer une application externe ou du contenu interactif"],
        ["<source>", "Indiquer la source des balises"],
      ]},
      { type: "h", text: "Balises génériques" },
      { type: "p", text: "Les balises génériques (ou balises universelles) sont des balises qui n'ont pas de sens sémantique. On les utilise généralement pour construire le design." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<span>", "Balise générique de type inline"],
        ["<div>", "Balise générique de type block"],
      ]},
    ],
  },
];
