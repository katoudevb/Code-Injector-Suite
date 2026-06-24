import type { Section } from "../types";

export const vue: Section = {
  id: "vuejs",
  title: "Vue.js",
  icon: "Component",
  tags: ["js", "ts"],
  subsections: [
    {
      id: "composant",
      title: "Structure d'un composant",
      blocks: [
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
    {
      id: "composition",
      title: "Composition API",
      blocks: [
        { type: "code", filename: "Panier.vue", language: "html", code: `<script setup>
import { ref, reactive, computed, watch } from "vue";
const articles = reactive([]); // objet réactif
const tva = ref(0.2);
// computed : valeur calculée mise en cache
const total = computed(() =>
  articles.reduce((s, a) => s + a.prix, 0) * (1 + tva.value)
);
watch(tva, (n) => console.log("TVA :", n)); // réagit au changement
</script>` },
      ],
    },
    {
      id: "directives",
      title: "Directives",
      blocks: [
        { type: "code", filename: "Liste.vue", language: "html", code: `<template>
  <p v-if="produits.length === 0">Aucun produit</p>
  <ul>
    <!-- v-for : boucle, :key obligatoire -->
    <li v-for="p in produits" :key="p.id">{{ p.nom }} - {{ p.prix }} €</li>
  </ul>
  <!-- v-model : liaison bidirectionnelle -->
  <input v-model="recherche" placeholder="Rechercher" />
  <span :class="{ promo: p.enPromo }">PROMO</span>
</template>` },
      ],
    },
    {
      id: "router-pinia",
      title: "Vue Router et Pinia",
      blocks: [
        { type: "code", filename: "router.js", language: "javascript", code: `import { createRouter, createWebHistory } from "vue-router";
import Accueil from "./Accueil.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Accueil },
    { path: "/produit/:id", component: () => import("./Produit.vue") },
  ],
});
// Navigation guard : avant chaque route
router.beforeEach((to) => {
  if (to.meta.auth && !estConnecte()) return "/login";
});` },
        { type: "code", filename: "stores/panier.js", language: "javascript", code: `import { defineStore } from "pinia";
export const usePanier = defineStore("panier", {
  state: () => ({ articles: [] }),
  getters: { total: (s) => s.articles.reduce((t, a) => t + a.prix, 0) },
  actions: { ajouter(produit) { this.articles.push(produit); } },
});` },
      ],
    },
  ],
};
