import type { Section } from "../types";

export const tools: Section = {
  id: "outils",
  title: "Outils & Bonnes pratiques",
  icon: "Wrench",
  tags: ["js", "ts", "css"],
  subsections: [
    {
      id: "devtools",
      title: "DevTools navigateur",
      blocks: [
        { type: "list", items: ["Elements : inspecter et modifier HTML/CSS en direct.", "Console : logs, erreurs, tester du JS.", "Network : requêtes, temps de réponse, payloads.", "Performance : profiler le rendu (LCP, CLS).", "Application : LocalStorage, cookies, service workers."] },
        { type: "code", filename: "console.js", language: "javascript", code: `console.log("Valeur :", variable); // affichage simple
console.table(produits);           // tableau formaté
console.error("Erreur critique");  // message d'erreur
debugger;                          // point d'arrêt` },
      ],
    },
    {
      id: "config",
      title: "ESLint et Prettier",
      blocks: [
        { type: "code", filename: ".prettierrc", language: "json", code: `{
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}` },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "audit": "npm audit fix"
  }
}` },
      ],
    },
    {
      id: "conventions",
      title: "Conventions de nommage",
      blocks: [
        { type: "table", headers: ["Convention", "Usage", "Exemple"], rows: [["camelCase", "variables, fonctions", "calculerTotal"], ["PascalCase", "classes, composants", "ProduitCard"], ["kebab-case", "fichiers, URLs", "produit-card.tsx"], ["UPPER_CASE", "constantes globales", "MAX_ITEMS"]] },
      ],
    },
    {
      id: "routing-comparatif",
      title: "Routing JS — Comparatif frameworks",
      blocks: [
        {
          type: "diagram",
          content: `┌───────────────┬────────────────────────────────┬──────────────────────────────┐
│ Framework     │ Type de routing                │ Idée clé                     │
├───────────────┼────────────────────────────────┼──────────────────────────────┤
│ Vue.js        │ Vue Router (officiel)          │ Séparation claire des vues   │
├───────────────┼────────────────────────────────┼──────────────────────────────┤
│ React         │ React Router (externe)         │ Très flexible                │
├───────────────┼────────────────────────────────┼──────────────────────────────┤
│ Angular       │ Routing intégré                │ Solution tout-en-un          │
├───────────────┼────────────────────────────────┼──────────────────────────────┤
│ SvelteKit     │ Basé sur les fichiers          │ Zéro configuration           │
├───────────────┼────────────────────────────────┼──────────────────────────────┤
│ Next.js       │ Basé sur fichiers (React)      │ React + backend intégré      │
└───────────────┴────────────────────────────────┴──────────────────────────────┘`,
        },
        { type: "list", items: [
          "Vue.js → Vue Router officiel — Routes déclaratives, dynamiques, imbriquées",
          "React → React Router externe — Très flexible, nécessite configuration",
          "Angular → Router intégré — Guards, Lazy loading natif, tout-en-un",
          "SvelteKit → Routes créées selon l'arborescence — SSR et génération statique intégrées",
          "Next.js → File-based routing, API routes intégrées, optimisé SEO",
        ]},
      ],
    },
    {
      id: "principes",
      title: "DRY, SOLID et README",
      blocks: [
        { type: "code", filename: "dry.js", language: "javascript", code: `// DRY : ne pas se répéter. Extraire la logique commune.
function calculerTTC(ht, taux = 0.2) { return ht * (1 + taux); }
// Réutilisé partout au lieu de répéter ht * 1.2` },
        { type: "list", items: ["DRY : éviter la duplication de code.", "SOLID : principes de conception orientée objet.", "README : installation, usage, contribution, licence.", "CI/CD : automatiser tests et déploiement (GitHub Actions)."] },
      ],
    },
    {
      id: "astuces-page-statique",
      title: "Astuces — Page statique",
      blocks: [
        { type: "p", text: "Une page statique est une page HTML (.html) dont le contenu ne change pas dynamiquement." },
        {
          type: "diagram",
          content: `PAGE STATIQUE vs PAGE DYNAMIQUE
════════════════════════════════════════════════════════
  STATIQUE                       DYNAMIQUE
  ════════                       ═════════
  fichier .html fixe             contenu généré à la volée
  même contenu pour tous         contenu personnalisé
  pas de BDD nécessaire          BDD, serveur, backend
  rapide à charger               plus complexe
  ex : landing page              ex : e-commerce, réseau social`,
        },
      ],
    },
    {
      id: "astuces-css-mise-en-page",
      title: "Astuces — CSS & mise en page",
      blocks: [
        { type: "list", items: ["Hauteur auto : utiliser height: auto pour que le conteneur s'adapte au contenu (recommandé)"] },
        { type: "code", filename: "style.css", language: "css", code: `.conteneur {
  height: auto; /* s'adapte au contenu */
}` },
      ],
    },
    {
      id: "astuces-debug-test",
      title: "Astuces — Debug & Test",
      blocks: [
        { type: "list", items: [
          "Débogage : utiliser des points d'arrêt (breakpoints) pour analyser le code ligne par ligne",
          "Erreur 404 : enlever le # dans l'URL pour tester les routes et afficher les erreurs",
          "Responsive : utiliser le mode responsive de l'inspecteur du navigateur",
          "Logs en production : journaliser les erreurs pour faciliter le debug",
          "Debug avancé : capturer des infos (ID utilisateur…) sans données sensibles",
          "Navigation privée : tester sans extensions pour détecter les bugs",
        ]},
      ],
    },
    {
      id: "astuces-deploiement-hebergement",
      title: "Astuces — Déploiement & hébergement",
      blocks: [
        { type: "list", items: [
          "Hébergement web : utiliser Heroku ou Amazon Web Services",
          "Apps mobiles : publier sur Google Play Store ou App Store",
          "Nom de domaine : s'achète auprès d'un fournisseur (ex : OVH, GoDaddy…)",
          "Backend JS : installer Node.js (version LTS recommandée)",
          "WordPress en local : nécessite un serveur local (ex : XAMPP, WAMP)",
        ]},
        {
          type: "diagram",
          content: `HÉBERGEMENT — OPTIONS
════════════════════════════════════════════════════════
  TYPE               OUTILS
  ════               ══════
  Web (cloud)    →   Heroku, Amazon Web Services (AWS)
  Mobile         →   Google Play Store, App Store
  Local (dev)    →   XAMPP, WAMP
  Nom de domaine →   OVH, GoDaddy
  Backend JS     →   Node.js (version LTS)`,
        },
      ],
    },
    {
      id: "astuces-mobile",
      title: "Astuces — Mobile",
      blocks: [
        { type: "list", items: ["Mobile : utiliser une application mobile quand il faut accéder aux données du téléphone"] },
      ],
    },
    {
      id: "astuces-bonnes-pratiques-code",
      title: "Astuces — Bonnes pratiques de code",
      blocks: [
        { type: "list", items: [
          "Indentation : respecter le même nombre d'espaces (2 ou 4)",
          "Sécurité : ne jamais mettre de données sensibles dans les commentaires",
          "Validation code : utiliser un validateur HTML/CSS après développement",
          "Polices : importer plusieurs formats (woff, ttf…) pour éviter les bugs d'affichage",
        ]},
        { type: "code", filename: "fonts.css", language: "css", code: `/* Exemple — import de polices multi-formats */
@font-face {
  font-family: 'MaPolice';
  src: url('mapolice.woff2') format('woff2'),
       url('mapolice.woff')  format('woff'),
       url('mapolice.ttf')   format('truetype');
}` },
      ],
    },
    {
      id: "astuces-avancees",
      title: "Astuces avancées",
      blocks: [
        { type: "list", items: [
          "Navigation privée : tester sans extensions pour détecter les bugs",
          "Sécurité web : suivre les recommandations de ANSSI",
          "Angular standalone : utiliser standalone: true dans @Component pour éviter les modules",
        ]},
        { type: "code", filename: "exemple.component.ts", language: "jsx", code: `// Angular — composant standalone
@Component({
  standalone: true,
  selector: 'app-exemple',
  template: \`<h1>Bonjour</h1>\`,
})
export class ExempleComponent {}` },
        { type: "list", items: ["Mots-clés JS : ne pas utiliser les mots réservés comme noms de variables (sinon erreur)"] },
        { type: "code", filename: "mots-reserves.js", language: "jsx", code: `// ❌ À éviter — mots réservés JS
let class = "test";    // ERREUR
let return = 5;        // ERREUR
let function = "nom";  // ERREUR

// ✅ Correct
let maClasse = "test";
let valeurRetour = 5;
let nomFonction = "nom";` },
        {
          type: "diagram",
          content: `MOTS RÉSERVÉS JS (exemples — ne pas utiliser comme noms de variables)
════════════════════════════════════════════════════════════════════════
  break      case       catch      class      const
  continue   debugger   default    delete     do
  else       export     extends    finally    for
  function   if         import     in         instanceof
  let        new        return     static     super
  switch     this       throw      try        typeof
  var        void       while      with       yield`,
        },
      ],
    },
    {
      id: "astuces-recap",
      title: "Astuces — Tableau récapitulatif",
      blocks: [
        { type: "table", headers: ["Astuce", "Détail", "Catégorie"], rows: [
          ["height: auto", "Conteneur s'adapte au contenu", "CSS"],
          ["Breakpoints", "Analyser le code ligne par ligne", "Debug"],
          ["Erreur 404", "Enlever le # dans l'URL", "Routing"],
          ["Navigation privée", "Tester sans extensions", "Debug"],
          ["Inspecteur responsive", "Mode responsive navigateur", "Test mobile"],
          ["Heroku / AWS", "Hébergement web cloud", "Déploiement"],
          ["Google Play / App Store", "Publication apps mobiles", "Mobile"],
          ["OVH / GoDaddy", "Achat nom de domaine", "Hébergement"],
          ["Node.js LTS", "Backend JavaScript", "Backend"],
          ["XAMPP / WAMP", "Serveur local WordPress", "Local dev"],
          ["Logs production", "Journaliser les erreurs", "Debug prod"],
          ["Indentation 2 ou 4", "Cohérence du code", "Qualité code"],
          ["Pas de données sensibles en commentaires", "Sécurité", "Sécurité"],
          ["Validateur HTML/CSS", "Vérification après dev", "Qualité code"],
          ["Formats polices woff, ttf", "Éviter bugs d'affichage", "CSS"],
          ["ANSSI", "Recommandations sécurité web", "Sécurité"],
          ["standalone: true Angular", "Evite les modules", "Angular"],
          ["Mots réservés JS", "Ne pas utiliser comme variables", "JavaScript"],
        ]},
      ],
    },
  ],
};
