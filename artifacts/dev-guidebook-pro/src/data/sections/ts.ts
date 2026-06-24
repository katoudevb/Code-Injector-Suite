import type { Section } from "../types";

export const ts: Section = {
  id: "typescript",
  title: "TypeScript",
  icon: "FileType2",
  tags: ["ts"],
  subsections: [
    {
      id: "types-base",
      title: "Types primitifs et inférence",
      blocks: [
        { type: "code", filename: "types.ts", language: "typescript", code: `let nom: string = "Alice";   // chaîne
let age: number = 30;        // nombre
let actif: boolean = true;   // booléen
let ville = "Paris";         // inférence : string déduit
let prix: number[] = [10, 20, 30];        // tableau typé
let coord: [number, number] = [48.85, 2.35]; // tuple` },
      ],
    },
    {
      id: "interfaces",
      title: "Interfaces vs types",
      blocks: [
        { type: "code", filename: "modeles.ts", language: "typescript", code: `// Interface : forme d'un objet
interface Produit {
  id: number;
  nom: string;
  prix: number;
  description?: string; // ? = optionnel
}
// Type alias : utile pour les unions
type Statut = "actif" | "inactif" | "archive";
const sac: Produit = { id: 1, nom: "Sac", prix: 49.9 };
const etat: Statut = "actif";` },
        { type: "note", variant: "info", text: "interface pour des objets extensibles, type pour les unions et combinaisons." },
      ],
    },
    {
      id: "fonctions",
      title: "Fonctions typées",
      blocks: [
        { type: "code", filename: "fonctions.ts", language: "typescript", code: `// Paramètres typés + type de retour
function calculerTTC(ht: number, taux: number = 0.2): number {
  return ht * (1 + taux);
}
function saluer(nom: string, titre?: string): string {
  return titre ? titre + " " + nom : nom; // titre optionnel
}` },
      ],
    },
    {
      id: "generiques",
      title: "Génériques",
      blocks: [
        { type: "code", filename: "generiques.ts", language: "typescript", code: `// T est un type variable défini à l'appel
function premier<T>(liste: T[]): T { return liste[0]; }
const n = premier<number>([1, 2, 3]); // number
const s = premier(["a", "b"]);        // string (inféré)
interface Reponse<T> { data: T; status: number; }` },
      ],
    },
    {
      id: "utility",
      title: "Enums et utility types",
      blocks: [
        { type: "code", filename: "utility.ts", language: "typescript", code: `enum Role { Admin = "admin", User = "user" }
interface Produit { id: number; nom: string; prix: number; }
type MajProduit = Partial<Produit>;       // tout optionnel
type Apercu = Pick<Produit, "id" | "nom">; // garde certaines
type SansId = Omit<Produit, "id">;         // retire
type Stock = Record<string, number>;       // objet clé/valeur` },
      ],
    },
    {
      id: "api-react",
      title: "Typage API et React",
      blocks: [
        { type: "code", filename: "useProduits.ts", language: "typescript", code: `interface Produit { id: number; nom: string; prix: number; }
async function getProduits(): Promise<Produit[]> {
  const res = await fetch("/api/produits");
  return res.json() as Promise<Produit[]>;
}
// useState typé : const [p, setP] = useState<Produit[]>([]);
interface CarteProps { produit: Produit; enPromo?: boolean; }` },
      ],
    },
  ],
};
