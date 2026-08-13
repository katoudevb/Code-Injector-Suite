import type { Section } from "../types";
import { vueFormationWeb } from "./vueFormationWeb";
import { laConsoleVue } from "./laConsoleVue";

export const vue: Section = {
  id: "vuejs",
  title: "Vue.js",
  icon: "Component",
  tags: ["js", "ts"],
  subsections: [

    // ── STRUCTURE COMPOSANT SFC ─────────────────────────────────────────────
    {
      id: "composant",
      title: "Structure d'un composant Vue (SFC)",
      blocks: [
        { type: "p", text: "Framework JavaScript progressif pour construire des interfaces utilisateur (UI) et des applications web dynamiques. Vue met à jour le navigateur automatiquement sans reload complet (HMR)." },
        {
          type: "diagram",
          content: `NomComposant/
├── NomComposant.vue
├── NomComposant.test.js
└── NomComposant.scss`,
        },
        { type: "h", text: "Structure interne du composant" },
        { type: "code", filename: "NomComposant.vue", language: "html", code: `<template>
  <!-- HTML rendu -->
</template>

<script>
  // logique JS (data, methods, props)
</script>

<style scoped>
  /* CSS local au composant */
</style>` },
        { type: "h", text: "Version moderne Vue 3 (script setup)" },
        { type: "code", filename: "NomComposant.vue", language: "html", code: `<template>
  <!-- HTML rendu -->
</template>

<script setup>
  // logique simplifiée Vue 3
</script>

<style scoped>
  /* CSS local au composant */
</style>` },
        { type: "code", filename: "Compteur.vue", language: "html", code: `<script setup>
import { ref } from "vue";
const count = ref(0); // ref = valeur réactive
</script>

<template>
  <button @click="count++">Articles : {{ count }}</button>
</template>

<style scoped>
button { padding: 8px; } /* scoped = limité à ce composant */
</style>` },
      ],
    },

    // ── STRUCTURE PROJET ────────────────────────────────────────────────────
    {
      id: "vue-structure-projet",
      title: "Structure d'un projet Vue 3 (Vite)",
      blocks: [
        { type: "note", variant: "info", text: "Le nommage des fichiers se fait soit en .ts ou .jsx mais pas de mélanges." },
        {
          type: "diagram",
          content: `VueJs/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── router/
│   ├── store/
│   ├── services/
│   ├── composables/
│   ├── utils/
│   ├── App.vue
│   └── main.js / main.ts
├── .env
├── index.html
├── vite.config.js
├── package.json
└── tsconfig.json`,
        },
        { type: "h", text: "Création du projet" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer
npm create vue@latest
cd projet

# Lancer
npm install
npm run dev` },
        { type: "h", text: "Concept important" },
        { type: "list", items: [
          "Vue = composants",
          "Chaque .vue = mini application",
          "Logique séparée du HTML",
          "CSS scoped = isolation",
        ]},
      ],
    },

    // ── TYPES DE COMPOSANTS ─────────────────────────────────────────────────
    {
      id: "vue-types-composants",
      title: "Types de composants Vue",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│ TYPES DE COMPOSANTS VUE                     │
├──────────────┬──────────────────────────────┤
│ .view        │ Représente une PAGE           │
│ (ou Views)   │ Lié à une route               │
│              │ Ex: HomeView.vue              │
├──────────────┼──────────────────────────────┤
│ .vue         │ Composant RÉUTILISABLE        │
│              │ (bouton, carte, header…)      │
│              │ Ex: Button.vue, Card.vue      │
└──────────────┴──────────────────────────────┘`,
        },
      ],
    },

    // ── IMAGES ──────────────────────────────────────────────────────────────
    {
      id: "vue-images",
      title: "Images en Vue",
      blocks: [
        { type: "h", text: "Statique" },
        { type: "code", filename: "template.vue", language: "html", code: `<img src="@/assets/img/monImage.png" alt="Texte alternatif"/>` },
        { type: "h", text: "Dynamique" },
        { type: "code", filename: "MonComposant.vue", language: "html", code: `<script setup>
import monImage from "@/assets/img/monImage.jpg"
</script>

<template>
  <img :src="monImage" alt="Texte alternatif"/>
</template>` },
        { type: "h", text: "Configuration @alias (vite.config.js)" },
        { type: "code", filename: "vite.config.js", language: "javascript", code: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // permet d'utiliser @/ pour src/
    }
  },

  assetsInclude: [
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.webp'
  ],

  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\\.(png|jpe?g|gif|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },

  server: {
    open: true,  // ouvre le navigateur automatiquement
    port: 3000
  }
})` },
      ],
    },

    // ── DIRECTIVES ──────────────────────────────────────────────────────────
    {
      id: "directives",
      title: "Les directives Vue",
      blocks: [
        { type: "h", text: "Conditionnels" },
        { type: "list", items: [
          "v-if : affiche un élément si la condition est vraie",
          "v-else : sinon",
          "v-show : masque/affiche via CSS (plus rapide mais toujours rendu dans le DOM)",
        ]},
        { type: "code", filename: "template.vue", language: "html", code: `<div v-if="connecté">Bienvenue !</div>
<div v-else>Veuillez vous connecter.</div>` },
        { type: "h", text: "Boucles" },
        { type: "list", items: ["v-for : permet d'itérer sur une liste"] },
        { type: "code", filename: "template.vue", language: "html", code: `<ul>
  <li v-for="(fruit, index) in fruits" :key="index">
    {{ fruit }}
  </li>
</ul>` },
      ],
    },

    // ── COMPOSITION API ─────────────────────────────────────────────────────
    {
      id: "composition",
      title: "Composition API",
      blocks: [
        { type: "code", filename: "Produits.vue", language: "html", code: `<script setup>
import { ref, computed, onMounted } from "vue";
const produits = ref([]);
const total = computed(() => produits.value.length);
onMounted(async () => {
  produits.value = await fetch("/api/produits").then((r) => r.json());
});
</script>

<template>
  <p>{{ total }} produits</p>
  <ul>
    <li v-for="p in produits" :key="p.id">{{ p.nom }}</li>
  </ul>
</template>` },
      ],
    },

    // ── PROPS & EMIT ────────────────────────────────────────────────────────
    {
      id: "vue-composants-props",
      title: "Composants, Props et Emit",
      blocks: [
        { type: "p", text: "Un composant = bloc réutilisable contenant : logique (JavaScript), template (HTML), style (CSS)." },
        { type: "h", text: "Props (parent → enfant)" },
        { type: "p", text: "Permettent de transmettre des données du parent vers l'enfant." },
        { type: "code", filename: "app.js", language: "javascript", code: `app.component('salutation', {
  props: ['nom'],
  template: \`<p>Salut, {{ nom }} !</p>\`
})` },
        { type: "code", filename: "template.html", language: "html", code: `<salutation nom="Kat"></salutation>` },
        { type: "code", filename: "Produit.vue", language: "html", code: `<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({ nom: String, prix: Number });
const emit = defineEmits(["ajouter"]);
</script>

<template>
  <div>
    <h3>{{ props.nom }} — {{ props.prix }} €</h3>
    <button @click="emit('ajouter', props.nom)">Ajouter au panier</button>
  </div>
</template>` },
        { type: "h", text: "Emit (enfant → parent)" },
        { type: "p", text: "Permet d'envoyer un événement vers le parent (interaction)." },
      ],
    },

    // ── ROUTER & PINIA ──────────────────────────────────────────────────────
    {
      id: "router-pinia",
      title: "Vue Router et Pinia",
      blocks: [
        { type: "h", text: "Vue Router (navigation)" },
        { type: "code", filename: "router/index.js", language: "javascript", code: `const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router` },
        { type: "h", text: "Style global Vue" },
        { type: "code", filename: "styles.css", language: "css", code: `#app {
  /* style global de l'application */
}` },
        { type: "h", text: "Pinia (store)" },
        { type: "code", filename: "store/panier.js", language: "javascript", code: `import { defineStore } from "pinia";
export const usePanier = defineStore("panier", {
  state: () => ({ articles: [] }),
  actions: {
    ajouter(produit) { this.articles.push(produit); },
  },
  getters: {
    total: (state) => state.articles.length,
  },
});` },
      ],
    },
    {
    id: "vue-organisation-projet-portfolio",
    title: "Organisation d'un projet Vue — Exemple portfolio",
    blocks: [
      { type: "h", text: "Fichiers d'un projet Vue" },
      { type: "table", headers: ["Fichier/Dossier", "Rôle"], rows: [
        ["src", "Les sources de votre projet"],
        ["public", "Tout le contenu qui sera directement copié tel quel à la racine du serveur web"],
        ["package.json", "Les informations de package NPM du projet (version, dépendances, scripts etc.)"],
        ["vite.config.js", "Le fichier de configuration pour Vite sur ce projet"],
      ]},
      { type: "p", text: "D'autres fichiers de configuration pour les outils de build peuvent également se trouver ici." },
      { type: "h", text: "Dans le dossier src" },
      { type: "table", headers: ["Dossier/Fichier", "Rôle"], rows: [
        ["assets", "Ressources statiques (images, fichiers) utilisées au sein de vos composants Vue"],
        ["components", "Vos composants Vue (répartis par dossier par \"module\" de votre application)"],
        ["App.vue", "Votre composant Vue racine, qui contient toute l'application"],
        ["main.js", "Le point d'entrée du code JavaScript de toute l'application"],
        ["views", "Dossier pour les différentes pages de mon portfolio"],
      ]},
      { type: "p", text: "Par la suite, vous pourrez être amenés à créer d'autres dossiers dans src selon vos besoins. Par exemple un dossier services qui contient des briques de logique métier avec des fonctions utilisées dans plusieurs composants. Un dossier utils pour stocker diverses fonctions utilitaires en JavaScript plutôt que de les répéter à plusieurs endroits." },
      {
        type: "diagram",
        content: `mon-projet-vue/
├── src/
│   ├── assets/       (images, ressources statiques)
│   ├── components/   (composants réutilisables)
│   ├── views/        (pages de l'application)
│   ├── services/     (logique métier partagée)
│   ├── utils/        (fonctions utilitaires)
│   ├── App.vue       (composant racine)
│   └── main.js       (point d'entrée)
├── public/           (copié tel quel à la racine)
├── package.json
└── vite.config.js`,
      },
      { type: "h", text: "Fichiers monocomposants *.vue" },
      { type: "list", items: [
        "Une application Vue.js est divisée en plusieurs composants",
        "Un composant correspond à un fichier .vue",
        "Un fichier .vue est composé de 3 éléments optionnels",
      ]},
      { type: "table", headers: ["Balise", "Rôle"], rows: [
        ["<template>", "Contient le code HTML du composant"],
        ["<script> (optionnelle)", "Contient le code JS du composant"],
        ["<style> (optionnelle)", "Contient le style CSS du composant"],
      ]},
      { type: "h", text: "Exemple de composants d'un portfolio" },
      { type: "table", headers: ["Composant", "Rôle"], rows: [
        ["Header.vue", "Pour le titre et la navigation"],
        ["About.vue", "Section qui parle de moi"],
        ["Projects.vue", "Sections pour présenter mes projets"],
        ["Contact.vue", "Un formulaire de contact"],
      ]},
      { type: "h", text: "Référencer une image dans un composant" },
      { type: "p", text: "La bonne manière avec Vue de décrire le chemin vers une image qui se trouve dans le dossier src/assets/img :" },
      { type: "code", filename: "Composant.vue", language: "html", code: `<img src="@/assets/img/nom-de-mon-fichier.png" alt="…"> <!-- ou .jpg ou peu importe le format -->` },
      { type: "note", variant: "info", text: "Cette particularité est un alias dont on retrouve la déclaration dans le fichier vite.config.js généré via un projet Vue." },
      { type: "h", text: "Méthode de travail recommandée" },
      { type: "p", text: "La méthode doit toujours être la même pour toute appli web : commencer par réfléchir à l'interface, l'apparence, puis en déduire la structure HTML (avec toujours le souci de la sémantique des balises) qui sera retranscrite par le biais des composants de Vue. Une fois la structure et les composants créés, passer au dynamisme de l'application en implémentant la logique de chaque fonctionnalité, une après l'autre." },
      { type: "h", text: "Ressources complémentaires citées" },
      { type: "list", items: [
        "pierre-giraud.com — cours JavaScript",
        "Apple Support — guide Mac (raccourcis, utilitaires)",
        "freeCodeCamp — JavaScript Algorithms and Data Structures",
        "laconsole.dev — Cases : camelCase, PascalCase, snake_case, kebab-case",
        "Stack Overflow — différence entre npm run serve et npm run dev en Vue.js",
        "vite.dev — guide env-and-mode",
        "eslint-plugin-vue — règle multi-word-component-names",
        "EmailJS — tutoriel de création d'un formulaire de contact",
      ]},
    ],
  },
    ...vueFormationWeb,
    ...laConsoleVue,
  ],
};
