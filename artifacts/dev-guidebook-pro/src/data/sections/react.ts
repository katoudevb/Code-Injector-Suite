import type { Section } from "../types";

export const react: Section = {
  id: "react",
  title: "React",
  icon: "Atom",
  tags: ["js", "ts"],
  subsections: [
    {
      id: "jsx",
      title: "JSX et composants",
      blocks: [
        { type: "code", filename: "Carte.jsx", language: "jsx", code: `// Composant fonctionnel qui retourne du JSX
function Carte() {
  const titre = "Sac à dos";
  return (
    // className au lieu de class, htmlFor au lieu de for
    <div className="carte" style={{ padding: 16 }}>
      <h2>{titre}</h2> {/* Accolades = JS dans le JSX */}
      <label htmlFor="qte">Quantité</label>
      <input id="qte" />
    </div>
  );
}
export default Carte;` },
      ],
    },
    {
      id: "props",
      title: "Props",
      blocks: [
        { type: "code", filename: "Produit.jsx", language: "jsx", code: `// Destructuring des props + valeur par défaut
function Produit({ nom, prix, enPromo = false }) {
  return (
    <article>
      <h3>{nom}</h3>
      <p>{prix} €</p>
      {enPromo && <span className="badge">PROMO</span>}
    </article>
  );
}
// <Produit nom="Sac" prix={49.9} enPromo />` },
      ],
    },
    {
      id: "usestate",
      title: "useState",
      blocks: [
        { type: "code", filename: "Compteur.jsx", language: "jsx", code: `import { useState } from "react";
function Compteur() {
  // [valeur, fonctionDeMaj] = useState(valeurInitiale)
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Articles : {count}</button>;
}` },
      ],
    },
    {
      id: "useeffect",
      title: "useEffect",
      blocks: [
        { type: "code", filename: "Produits.jsx", language: "jsx", code: `import { useState, useEffect } from "react";
function Produits() {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    fetch("/api/produits").then((r) => r.json()).then(setProduits);
    return () => console.log("Composant démonté"); // cleanup
  }, []); // [] = au montage uniquement
  return <ul>{produits.map((p) => <li key={p.id}>{p.nom}</li>)}</ul>;
}` },
      ],
    },
    {
      id: "useref-context",
      title: "useRef et useContext",
      blocks: [
        { type: "code", filename: "hooks.jsx", language: "jsx", code: `import { useRef, useContext, createContext } from "react";
function Recherche() {
  const inputRef = useRef(null); // accès direct au DOM
  return <input ref={inputRef} onClick={() => inputRef.current.focus()} />;
}
const ThemeContext = createContext("clair");
function Bouton() {
  const theme = useContext(ThemeContext); // partage sans props
  return <button className={theme}>OK</button>;
}` },
      ],
    },
    {
      id: "memo-callback",
      title: "useMemo et useCallback",
      blocks: [
        { type: "code", filename: "optim.jsx", language: "jsx", code: `import { useMemo, useCallback } from "react";
function Liste({ produits, filtre }) {
  // useMemo : mémorise un calcul coûteux
  const filtres = useMemo(
    () => produits.filter((p) => p.nom.includes(filtre)),
    [produits, filtre]
  );
  // useCallback : mémorise une fonction
  const ajouter = useCallback((id) => console.log(id), []);
  return filtres.map((p) => <div key={p.id} onClick={() => ajouter(p.id)} />);
}` },
      ],
    },
    {
      id: "hooks-perso",
      title: "Hooks personnalisés",
      blocks: [
        { type: "code", filename: "useLocalStorage.js", language: "javascript", code: `import { useState } from "react";
// Synchronise un state avec le localStorage
function useLocalStorage(cle, valeurInitiale) {
  const [valeur, setValeur] = useState(() => {
    const stockee = localStorage.getItem(cle);
    return stockee ? JSON.parse(stockee) : valeurInitiale;
  });
  const sauvegarder = (nouvelle) => {
    setValeur(nouvelle);
    localStorage.setItem(cle, JSON.stringify(nouvelle));
  };
  return [valeur, sauvegarder];
}` },
      ],
    },
    {
      id: "router",
      title: "React Router v6",
      blocks: [
        { type: "code", filename: "App.jsx", language: "jsx", code: `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <nav><Link to="/">Accueil</Link></nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produit/:id" element={<Produit />} />
      </Routes>
    </BrowserRouter>
  );
}
function Produit() {
  const { id } = useParams(); // récupère :id
  return <h1>Produit {id}</h1>;
}` },
      ],
    },
    {
      id: "zustand",
      title: "État global avec Zustand",
      blocks: [
        { type: "code", filename: "store.js", language: "javascript", code: `import { create } from "zustand";
const usePanier = create((set) => ({
  articles: [],
  ajouter: (produit) =>
    set((state) => ({ articles: [...state.articles, produit] })),
  vider: () => set({ articles: [] }),
}));
// const articles = usePanier((s) => s.articles);
// const ajouter = usePanier((s) => s.ajouter);` },
      ],
    },
  ],
};
