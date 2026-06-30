import type { Section } from "../types";

export const tools: Section = {
  id: "outils",
  title: "Outils & Bonnes pratiques",
  icon: "Wrench",
  tags: ["js", "ts"],
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
  ],
};
