import type { Section } from "../types";

export const next: Section = {
  id: "nextjs",
  title: "Next.js",
  icon: "Triangle",
  tags: ["ts", "js"],
  subsections: [
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
