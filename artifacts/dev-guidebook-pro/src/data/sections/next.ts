import type { Section } from "../types";

export const next: Section = {
  id: "nextjs",
  title: "Next.js",
  icon: "Triangle",
  tags: ["ts", "js"],
  subsections: [
    {
      id: "nextjs-intro",
      title: "Next.js — Présentation",
      blocks: [
        { type: "p", text: "Next.js est un framework full-stack basé sur React permettant de créer des applications web modernes (front + back) avec rendu optimisé." },
      ],
    },
    {
      id: "nextjs-creation-projet",
      title: "Création d'un projet Next.js",
      blocks: [
        { type: "h", text: "1. Commande d'installation" },
        { type: "code", filename: "terminal", language: "bash", code: `npx create-next-app@latest` },
        { type: "p", text: "Options proposées à la création :" },
        { type: "list", items: ["Nom du projet : my-app", "TypeScript, ESLint, Tailwind, App Router, etc."] },
        { type: "h", text: "2. Lancer le projet" },
        { type: "code", filename: "terminal", language: "bash", code: `npm run dev` },
        { type: "p", text: "Accessible sur : http://localhost:3000" },
      ],
    },
    {
      id: "nextjs-structure-projet",
      title: "Structure d'un projet Next.js (App Router)",
      blocks: [
        {
          type: "diagram",
          content: `my-app/
├── app/                    # Système de routing (App Router)
│   ├── layout.tsx          # Layout global (structure commune)
│   ├── page.tsx            # Page d'accueil "/"
│   │
│   ├── about/
│   │   └── page.tsx        # Route "/about"
│   │
│   └── contact/
│       └── page.tsx        # Route "/contact"
│
├── public/                 # Fichiers statiques (images, favicon…)
│   └── logo.png
│
├── components/             # Composants réutilisables
│   └── Header.tsx
│
├── lib/                    # Fonctions utilitaires / API
│   └── fetchData.ts
│
├── styles/                 # CSS global / modules
│   └── globals.css
│
├── middleware.ts           # Middleware (auth, redirections…)
├── next.config.js          # Configuration Next.js
├── package.json            # Dépendances et scripts
└── tsconfig.json           # Configuration TypeScript`,
        },
        { type: "h", text: "Schéma du routing automatique" },
        {
          type: "diagram",
          content: `app/
├── page.tsx          →  /
├── about/page.tsx    →  /about
├── contact/page.tsx  →  /contact
└── blog/
    ├── page.tsx      →  /blog
    └── [id]/
        └── page.tsx  →  /blog/:id   (route dynamique)`,
        },
      ],
    },
    {
      id: "nextjs-avantages-inconvenients",
      title: "Avantages / Inconvénients",
      blocks: [
        { type: "table", headers: ["Avantages", "Inconvénients"], rows: [
          ["Installation simple et rapide", "Moins de gestion d'état intégrée (Redux, Zustand nécessaires)"],
          ["Développement accéléré", "Courbe d'apprentissage du App Router"],
          ["Très bon pour le SEO (rendu serveur)", "Certaines extensions/configurations nécessaires"],
          ["Images optimisées automatiquement", "Structure parfois complexe au début"],
          ["Routing automatique (App Router)", "—"],
          ["Support SSR / SSG / ISR", "—"],
          ["Applications multi-pages faciles", "—"],
          ["Pré-rendu HTML (meilleures performances)", "—"],
        ]},
      ],
    },
    {
      id: "routers",
      title: "App Router vs Pages Router",
      blocks: [
        { type: "p", text: "Le App Router (dossier app/) est le standard moderne : Server Components, layouts imbriqués, streaming. Le Pages Router (pages/) reste pour les anciens projets." },
        { type: "table", headers: ["Fichier", "Rôle"], rows: [["app/page.tsx", "Page d'une route"], ["app/layout.tsx", "Mise en page partagée"], ["app/loading.tsx", "Écran de chargement"], ["app/error.tsx", "Gestion d'erreur"], ["app/not-found.tsx", "Page 404"]] },
      ],
    },
    {
      id: "components",
      title: "Server vs Client Components",
      blocks: [
        { type: "code", filename: "app/produits/page.tsx", language: "tsx", code: `// Server Component par défaut : async, accès BDD
export default async function ProduitsPage() {
  const res = await fetch("https://api.boutique.fr/produits");
  const produits = await res.json();
  return <ul>{produits.map((p: any) => <li key={p.id}>{p.nom}</li>)}</ul>;
}` },
        { type: "code", filename: "app/Compteur.tsx", language: "tsx", code: `"use client"; // Obligatoire pour useState / événements
import { useState } from "react";
export default function Compteur() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}` },
      ],
    },
    {
      id: "data",
      title: "Récupération de données",
      blocks: [
        { type: "code", filename: "app/produit/[id]/page.tsx", language: "tsx", code: `// Cache + revalidation toutes les 60s (ISR)
async function getProduit(id: string) {
  const res = await fetch(\`https://api.boutique.fr/produits/\${id}\`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
export default async function Page({ params }: { params: { id: string } }) {
  const produit = await getProduit(params.id);
  return <h1>{produit.nom}</h1>;
}` },
      ],
    },
    {
      id: "route-handlers",
      title: "Route Handlers (API)",
      blocks: [
        { type: "code", filename: "app/api/produits/route.ts", language: "typescript", code: `import { NextResponse } from "next/server";
// GET /api/produits
export async function GET() {
  return NextResponse.json([{ id: 1, nom: "Sac" }]);
}
// POST /api/produits
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ cree: body }, { status: 201 });
}` },
      ],
    },
    {
      id: "image-env",
      title: "Image, métadonnées et env",
      blocks: [
        { type: "code", filename: "app/page.tsx", language: "tsx", code: `import Image from "next/image";
export const metadata = {
  title: "Ma Boutique",
  description: "Vente de vêtements en ligne",
};
export default function Page() {
  return <Image src="/hero.jpg" alt="Bannière" width={1200} height={400} priority />;
}` },
        { type: "note", variant: "warning", text: "Préfixez par NEXT_PUBLIC_ les variables d'environnement accessibles côté navigateur (.env.local)." },
      ],
    },
  ],
};
