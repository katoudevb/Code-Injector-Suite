import type { Section } from "../types";

export const react: Section = {
  id: "react",
  title: "React",
  icon: "Atom",
  tags: ["js", "ts"],
  subsections: [

    // ── STRUCTURE PROJET ────────────────────────────────────────────────────
    {
      id: "react-structure-codesandbox",
      title: "Structure d'un projet (CodeSandBox)",
      blocks: [
        {
          type: "diagram",
          content: `/MON PROJET
├── /PUBLIC
│    └── index.html        (template page)
└── /SRC
     ├── App.tsx           (fichier principal à modifier)
     ├── index.tsx         (départ pour créer l'application)
     ├── styles.css
     ├── package.json
     └── ts.config.json`,
        },
      ],
    },

    {
      id: "react-structure-locale",
      title: "Structure d'un projet local",
      blocks: [
        {
          type: "diagram",
          content: `/ (racine du projet)
│
├── public/
│    └── index.html          # Fichier HTML principal (point d'entrée)
│                            # Contient la div racine (<div id="root"></div>)
│
├── src/
│    ├── assets/             # Images, logos, fichiers statiques
│    ├── components/         # Composants réutilisables (boutons, cartes, ..)
│    │    ├── Composant1.jsx
│    │    ├── Composant2.jsx
│    │    └── Composant3.jsx
│    ├── pages/              # Pages de l'application (Accueil, Contact, ..)
│    ├── styles/             # Fichiers CSS globaux ou SCSS
│    ├── services/           # Appels API, logique de services
│    ├── hooks/              # Custom hooks React
│    ├── contexts/           # Context API pour le state management global
│    ├── App.jsx             # Composant principal (souvent avec les routes)
│    ├── main.jsx            # Point d'entrée JS : monte l'application dans "root"
│    ├── routes.jsx          # (optionnel) Fichier de gestion des routes
│    └── style.css
│
├── .gitignore
├── package.json             # Dépendances et scripts
└── README.md                # Documentation du projet`,
        },
        {
          type: "note",
          variant: "info",
          text: "Supprimer App.css, App.test.js et logo.svg. .js ou .jsx sont valables — ne pas mélanger les 2 en revanche.",
        },
      ],
    },

    // ── COMPOSANT ───────────────────────────────────────────────────────────
    {
      id: "jsx",
      title: "JSX et composants",
      blocks: [
        {
          type: "p",
          text: "DEF : Fonction JavaScript qui retourne du JSX. Permet d'écrire du HTML dans du JavaScript.",
        },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────┐
│                App.jsx                  │
│  (composant racine / gestion routes)    │
│                                         │
│  ┌───────────┐     ┌───────────┐        │
│  │  Page 1   │     │  Page 2   │        │
│  │           │     │           │        │
│  │ ┌───────┐ │     │ ┌───────┐ │        │
│  │ │ Comp A│ │     │ │ Comp B│ │        │
│  │ └───────┘ │     │ └───────┘ │        │
│  └───────────┘     └───────────┘        │
└─────────────────────────────────────────┘`,
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React from 'react';

/**
 * MonComposant
 * @param {Object} props - Propriétés passées au composant
 * @returns {JSX.Element} - Interface utilisateur du composant
 */
const MonComposant = (props) => {
  return (
    <div className="mon-composant">
      <h2>{props.titre}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default MonComposant;`,
        },
        {
          type: "h",
          text: "Créer un composant fonctionnel",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React from 'react';

const MonComposant = () => {
  return (
    <div>
      <h1>Bonjour depuis mon composant fonctionnel</h1>
    </div>
  );
};

export default MonComposant;`,
        },
        {
          type: "code",
          filename: "App.js",
          language: "jsx",
          code: `import React from 'react';
import MonComposant from './MonComposant';

const App = () => {
  return (
    <div>
      <MonComposant />
    </div>
  );
};

export default App;`,
        },
        {
          type: "code",
          filename: "ExempleComposant.jsx",
          language: "jsx",
          code: `import React from 'react';

/**
 * ExempleComposant
 * @param {string} props.titre   - Titre affiché
 * @param {string} props.contenu - Contenu à afficher
 * @returns {JSX.Element}
 */
const ExempleComposant = ({ titre, contenu }) => {
  return (
    <section className="exemple-composant">
      <h2>{titre}</h2>
      <p>{contenu}</p>
    </section>
  );
};

export default ExempleComposant;`,
        },
      ],
    },

    // ── COMPOSANT CLASSE ────────────────────────────────────────────────────
    {
      id: "react-classe",
      title: "Composant de classe",
      blocks: [
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { Component } from 'react';

class MonComposant extends Component {
  render() {
    return (
      <div>
        {/* Contenu du composant */}
      </div>
    );
  }
}

export default MonComposant;`,
        },
        {
          type: "h",
          text: "Accéder aux props dans un composant de classe",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `// Dans le render
class MonComposant extends React.Component {
  render() {
    const { nom } = this.props; // destructuration
    return <h1>Bonjour {nom}</h1>;
  }
}

// Dans le constructeur
class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    const { nom } = props; // destructuration dans le constructeur
  }
  render() {
    const { nom } = this.props;
    return <h1>Bonjour {nom}</h1>;
  }
}`,
        },
        {
          type: "table",
          headers: ["Emplacement", "Syntaxe de destructuration"],
          rows: [
            ["Dans render()", "const { nom } = this.props"],
            ["Dans d'autres méthodes", "const { nom } = this.props"],
            ["Dans le constructor()", "const { nom } = props (attention au scope)"],
          ],
        },
        {
          type: "h",
          text: "this.state et this.setState()",
        },
        {
          type: "code",
          filename: "Compteur.jsx",
          language: "jsx",
          code: `import React, { Component } from 'react';

class Compteur extends Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état
    this.state = {
      compteur: 0
    };
  }

  // Méthode pour augmenter le compteur
  augmenter = () => {
    this.setState((prevState) => ({
      compteur: prevState.compteur + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Valeur du compteur : {this.state.compteur}</p>
        <button onClick={this.augmenter}>+1</button>
      </div>
    );
  }
}

export default Compteur;`,
        },
        {
          type: "table",
          headers: ["Élément", "Rôle", "Syntaxe"],
          rows: [
            ["this.state", "Stocker les données dynamiques", "—"],
            ["this.setState()", "Modifier l'état et re-render", "this.setState({clé: valeur})"],
          ],
        },
        {
          type: "h",
          text: "this.state — Déclaration et lecture",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clé1: valeur1,
      clé2: valeur2,
    };
  }

  render() {
    return (
      <div>
        {/* Lecture d'une valeur dans le state */}
        <p>{this.state.clé1}</p>
      </div>
    );
  }
}`,
        },
        {
          type: "h",
          text: "this.setState() — Mise à jour de l'état",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `// Mise à jour simple avec un objet
this.setState({
  clé1: nouvelleValeur
});

// Mise à jour basée sur l'état précédent (recommandé)
this.setState((prevState, props) => ({
  clé1: prevState.clé1 + 1
}));`,
        },
        {
          type: "h",
          text: "Déclarer un router avec un composant de classe",
        },
        {
          type: "code",
          filename: "terminal",
          language: "bash",
          code: `npm install react-router-dom`,
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class MonComposant extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/autre" element={<AutrePage />} />
        </Routes>
      </Router>
    );
  }
}

class Accueil extends Component {
  render() { return <div>Accueil</div>; }
}

class AutrePage extends Component {
  render() { return <div>Autre page</div>; }
}

export default MonComposant;`,
        },
      ],
    },

    // ── PROPS ───────────────────────────────────────────────────────────────
    {
      id: "props",
      title: "Props",
      blocks: [
        {
          type: "p",
          text: "DEF : Attributs passés à un composant qui le rendent dynamique et réutilisable.",
        },
        {
          type: "diagram",
          content: `       Parent
         │
         │  props (nom, age, ville...)
         ▼
      Enfant
   (reçoit les props)
         │
         │  affiche ou transmet
         ▼
   Petit-enfant`,
        },
        {
          type: "code",
          filename: "Welcome.jsx",
          language: "jsx",
          code: `function Welcome(props) {
  return <h1>Bonjour {props.name}</h1>;
}

function App() {
  return <Welcome name="Ali" />;
}`,
        },
        {
          type: "code",
          filename: "Bienvenue.jsx",
          language: "jsx",
          code: `const Bienvenue = ({ nom }) => {
  return <h1>Bienvenue, {nom}</h1>;
};

// Props multiples
const CarteProfil = ({ nom, métier, ville }) => {
  return (
    <div>
      <h2>{nom}</h2>
      <p>{métier} basé à {ville}</p>
    </div>
  );
};

<CarteProfil nom="Sophie" métier="Développeuse" ville="Paris" />`,
        },
        {
          type: "code",
          filename: "CarteProfil.jsx",
          language: "jsx",
          code: `import React from 'react';

/**
 * @param {string} nom    - Nom de l'utilisateur
 * @param {string} role   - Rôle professionnel
 * @param {string} avatar - URL de l'image
 */
const CarteProfil = ({ nom, role, avatar }) => {
  return (
    <div className="carte-profil">
      <img src={avatar} alt={\`Avatar de \${nom}\`} />
      <h3>{nom}</h3>
      <p>{role}</p>
    </div>
  );
};

export default CarteProfil;`,
        },
        {
          type: "code",
          filename: "Produit.jsx",
          language: "jsx",
          code: `// Destructuring des props + valeur par défaut
function Produit({ nom, prix, enPromo = false }) {
  return (
    <article>
      <h3>{nom}</h3>
      <p>{prix} €</p>
      {enPromo && <span className="badge">PROMO</span>}
    </article>
  );
}
// <Produit nom="Sac" prix={49.9} enPromo />`,
        },
      ],
    },

    // ── ROUTING ─────────────────────────────────────────────────────────────
    {
      id: "router",
      title: "React Router v6",
      blocks: [
        {
          type: "p",
          text: "DEF : Importer les composants dans le fichier et ajouter les routes de chaque composant.",
        },
        {
          type: "code",
          filename: "App.jsx",
          language: "jsx",
          code: `import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}`,
        },
        {
          type: "note",
          variant: "info",
          text: "Le composant Route prend 2 props : `path` (URL de la page) et `element` (composant à afficher pour cette URL).",
        },
        {
          type: "h",
          text: "Implémenter des routes sans rechargement de page",
        },
        {
          type: "code",
          filename: "App.js",
          language: "jsx",
          code: `import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Accueil extends Component {
  render() { return <h2>Bienvenue sur la page d'accueil</h2>; }
}
class APropos extends Component {
  render() { return <h2>Page À propos</h2>; }
}
class Contact extends Component {
  render() { return <h2>Page Contact</h2>; }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/apropos">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;`,
        },
        {
          type: "note",
          variant: "info",
          text: "Ajouter Link à côté de Routes dans l'import et remplacer les balises <a> par <Link to=\"...\"></Link>.",
        },
        {
          type: "h",
          text: "Encapsuler un router dans un composant",
        },
        {
          type: "code",
          filename: "App.jsx",
          language: "jsx",
          code: `import React, { Component } from 'react';
import MonRouter from './MonRouter';

class App extends Component {
  render() {
    return <MonRouter />; // Mon router est encapsulé
  }
}

export default App;`,
        },
        {
          type: "h",
          text: "BrowserRouter",
        },
        {
          type: "p",
          text: "DEF : Encapsule l'application pour gérer les changements d'URL en mémoire, sans rechargement de page, tout en gardant l'historique du navigateur synchronisé.",
        },
        {
          type: "code",
          filename: "index.js",
          language: "jsx",
          code: `// Emplacement conseillé : index.js ou App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);`,
        },
        {
          type: "code",
          filename: "App.jsx",
          language: "jsx",
          code: `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

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
}`,
        },
      ],
    },

    // ── STATE / USESTATE ────────────────────────────────────────────────────
    {
      id: "usestate",
      title: "useState — Le State",
      blocks: [
        {
          type: "p",
          text: "DEF : Objet interne d'un composant React qui stocke des données dynamiques. Ces données peuvent changer dans le temps et déclencher un nouveau rendu lorsqu'elles sont modifiées.",
        },
        {
          type: "code",
          filename: "Counter.jsx",
          language: "jsx",
          code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Compteur : {count}
    </button>
  );
}`,
        },
        {
          type: "note",
          variant: "info",
          text: "setCount(count + 1) met à jour le state et déclenche automatiquement un re-render.",
        },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│          Cycle de vie du State           │
│                                          │
│  État initial  →  useState(valeur)       │
│        │                                 │
│        ▼                                 │
│  Composant rendu (render)                │
│        │                                 │
│   Événement utilisateur                  │
│        │                                 │
│        ▼                                 │
│  setNomDuState(nouvelleValeur)           │
│        │                                 │
│        ▼                                 │
│  React détecte le changement             │
│        │                                 │
│        ▼                                 │
│  Re-render (interface mise à jour)       │
└──────────────────────────────────────────┘`,
        },
        {
          type: "table",
          headers: ["Concept", "Explication simple"],
          rows: [
            ["State", "Une boîte où on garde des infos qui peuvent changer"],
            ["Valeur initiale", "La première info qu'on met dans la boîte"],
            ["Changer le state", "Mettre à jour l'info dans la boîte"],
            ["Effet du changement", "L'interface se met à jour automatiquement"],
            ["Pourquoi utile ?", "Pour rendre la page interactive et dynamique"],
          ],
        },
        {
          type: "table",
          headers: ["Type / Méthode", "Description"],
          rows: [
            ["useState", "Hook fonctionnel pour gérer un state local simple"],
            ["this.state", "Propriété d'un composant classe pour stocker le state"],
            ["this.setState", "Méthode des composants classe pour mettre à jour le state"],
            ["useReducer", "Hook pour gérer un state complexe avec une logique de mise à jour claire"],
            ["useContext + useState", "Combinaison pour gérer un state global partagé via le Contexte"],
            ["useRef", "Stocke une valeur persistante entre les rendus sans déclencher de re-render"],
            ["useState avec objets", "Permet de stocker et mettre à jour un objet complexe dans le state"],
          ],
        },
        {
          type: "h",
          text: "Structure à respecter",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `const [nomDuState, setNomDuState] = useState(valeurInitiale);`,
        },
        {
          type: "table",
          headers: ["Élément", "Rôle"],
          rows: [
            ["nomDuState", "Variable contenant la valeur actuelle de l'état"],
            ["setNomDuState", "Fonction pour mettre à jour la valeur et déclencher un re-render"],
            ["useState()", "Hook qui initialise l'état avec une valeur donnée"],
          ],
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { useState } from 'react';

const MonComposant = () => {
  const [valeur, setValeur] = useState(valeurInitiale);

  const handleClick = () => {
    setValeur(nouvelleValeur);
  };

  return (
    <div>
      <p>Valeur actuelle : {valeur}</p>
      <button onClick={handleClick}>Changer</button>
    </div>
  );
};

export default MonComposant;`,
        },
        {
          type: "h",
          text: "Types d'exemples universels",
        },
        {
          type: "code",
          filename: "exemples.jsx",
          language: "jsx",
          code: `// Nombre
const [compteur, setCompteur] = useState(0);

// Chaîne de caractères
const [nom, setNom] = useState('');

// Booléen
const [visible, setVisible] = useState(false);

// Objet
const [utilisateur, setUtilisateur] = useState({ nom: '', email: '' });

// Tableau
const [articles, setArticles] = useState([]);`,
        },
        {
          type: "h",
          text: "useState() dans un composant fonctionnel",
        },
        {
          type: "code",
          filename: "NomDuComposant.jsx",
          language: "jsx",
          code: `import React, { useState } from 'react';

function NomDuComposant() {
  const [nomDuState, setNomDuState] = useState(valeurInitiale);

  return (
    <div>
      <p>{nomDuState}</p>
      <button onClick={() => setNomDuState(nouvelleValeur)}>Changer</button>
    </div>
  );
}

export default NomDuComposant;`,
        },
        {
          type: "h",
          text: "State complexe (objet)",
        },
        {
          type: "code",
          filename: "StateComplexe.jsx",
          language: "jsx",
          code: `import React, { useState } from 'react';

function NomDuComposant() {
  const [monObjet, setMonObjet] = useState({
    cle1: valeur1,
    cle2: valeur2,
  });

  // Mise à jour partielle avec spread (toujours préserver les autres clés)
  const modifierUneCle = () => {
    setMonObjet(prevState => ({
      ...prevState,
      cle1: nouvelleValeur1
    }));
  };

  return (
    <div>
      <p>{monObjet.cle1}</p>
      <p>{monObjet.cle2}</p>
      <button onClick={modifierUneCle}>Modifier cle1</button>
    </div>
  );
}

export default NomDuComposant;`,
        },
        {
          type: "h",
          text: "Mise à jour du state — bonnes pratiques",
        },
        {
          type: "code",
          filename: "MiseAJour.jsx",
          language: "jsx",
          code: `import React, { useState } from 'react';

function NomDuComposant() {
  const [compteur, setCompteur] = useState(0);

  // ❌ Mauvaise pratique — ne déclenche pas de re-render
  const mauvaiseMiseAJour = () => {
    // compteur = compteur + 1; ← NE PAS FAIRE
  };

  // ✅ Bonne pratique
  const bonneMiseAJour = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={bonneMiseAJour}>Incrémenter correctement</button>
    </div>
  );
}

export default NomDuComposant;`,
        },
        {
          type: "h",
          text: "Mise à jour depuis un événement utilisateur",
        },
        {
          type: "code",
          filename: "ChampControle.jsx",
          language: "jsx",
          code: `import React, { useState } from 'react';

function NomDuComposant() {
  const [valeurChamp, setValeurChamp] = useState("");

  const gererChangement = (e) => {
    setValeurChamp(e.target.value); // mise à jour du state
  };

  return (
    <div>
      {/* Champ contrôlé : la valeur dépend du state */}
      <input
        type="text"
        value={valeurChamp}
        onChange={gererChangement}
        placeholder="Tape ton texte ici"
      />
      <p>Tu as tapé : {valeurChamp}</p>
    </div>
  );
}

export default NomDuComposant;`,
        },
        {
          type: "h",
          text: "Partage du state entre composants",
        },
        {
          type: "code",
          filename: "StatePartage.jsx",
          language: "jsx",
          code: `import React, { useState } from 'react';

// Composant parent — détient le state partagé
function Parent() {
  const [donneePartagee, setDonneePartagee] = useState("");

  return (
    <div>
      <h2>Composant Parent</h2>
      <EnfantA valeur={donneePartagee} onChange={setDonneePartagee} />
      <EnfantB valeur={donneePartagee} />
    </div>
  );
}

// Enfant A — modifie la donnée
function EnfantA({ valeur, onChange }) {
  return (
    <div>
      <h3>Enfant A (éditeur)</h3>
      <input
        type="text"
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

// Enfant B — affiche la donnée
function EnfantB({ valeur }) {
  return (
    <div>
      <h3>Enfant B (lecteur)</h3>
      <p>Valeur partagée : {valeur}</p>
    </div>
  );
}

export default Parent;`,
        },
      ],
    },

    // ── USEEFFECT ───────────────────────────────────────────────────────────
    {
      id: "useeffect",
      title: "useEffect",
      blocks: [
        {
          type: "p",
          text: "DEF : Permet d'exécuter du code après le rendu (fetch, abonnement, timer…).",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `useEffect(() => {
  // Code exécuté après le rendu
}, [dépendances]);`,
        },
        {
          type: "code",
          filename: "Produits.jsx",
          language: "jsx",
          code: `import { useState, useEffect } from "react";

function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("/api/produits").then((r) => r.json()).then(setProduits);
    return () => console.log("Composant démonté"); // cleanup
  }, []); // [] = au montage uniquement

  return <ul>{produits.map((p) => <li key={p.id}>{p.nom}</li>)}</ul>;
}`,
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { useState, useEffect } from 'react';

function MonComposant() {
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    // Code exécuté après chaque rendu ou changement de dépendances
    console.log(\`Le compteur est à : \${compteur}\`);

    // Fonction de nettoyage (avant prochain effet ou au démontage)
    return () => {
      console.log('Nettoyage avant le prochain effet ou démontage');
    };
  }, [compteur]); // Effet déclenché si compteur change

  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Incrémenter</button>
    </div>
  );
}

export default MonComposant;`,
        },
      ],
    },

    // ── USECONTEXT ──────────────────────────────────────────────────────────
    {
      id: "usecontext",
      title: "useContext",
      blocks: [
        {
          type: "p",
          text: "DEF : Permet d'accéder à un contexte React sans passer par une chaîne de props.",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `import { useContext } from 'react';
import { MonContexte } from './MonContexte';

const valeur = useContext(MonContexte);`,
        },
        {
          type: "code",
          filename: "useContext.jsx",
          language: "jsx",
          code: `import React, { createContext, useContext } from 'react';

// 1. Création du contexte avec une valeur par défaut
const MonContexte = createContext('valeur par défaut');

function ComposantEnfant() {
  // 3. Consommation du contexte via useContext
  const valeur = useContext(MonContexte);
  return <p>Valeur du contexte : {valeur}</p>;
}

function ComposantParent() {
  // 2. Fourniture du contexte à ses enfants
  return (
    <MonContexte.Provider value="Valeur fournie">
      <ComposantEnfant />
    </MonContexte.Provider>
  );
}

export default ComposantParent;`,
        },
      ],
    },

    // ── USEREDUCER ──────────────────────────────────────────────────────────
    {
      id: "usereducer",
      title: "useReducer",
      blocks: [
        {
          type: "p",
          text: "DEF : Alternative à useState pour gérer un état plus complexe, notamment avec logique de mise à jour multiple.",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

<button onClick={() => dispatch({ type: 'increment' })}>+</button>`,
        },
        {
          type: "code",
          filename: "Compteur.jsx",
          language: "jsx",
          code: `import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Action non reconnue');
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Compteur;`,
        },
      ],
    },

    // ── USEREF ──────────────────────────────────────────────────────────────
    {
      id: "useref",
      title: "useRef",
      blocks: [
        {
          type: "p",
          text: "DEF : Créer une référence persistante (DOM ou valeur qui ne change pas au render).",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `import { useRef, useEffect } from 'react';

const ref = useRef(null);

// Exemple pour accéder à un élément DOM
useEffect(() => {
  ref.current.focus();
}, []);

return <input ref={ref} />;`,
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { useRef } from 'react';

function MonComposant() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Tape ici..." />
      <button onClick={focusInput}>Focus sur l'input</button>
    </div>
  );
}

export default MonComposant;`,
        },
      ],
    },

    // ── USEMEMO ─────────────────────────────────────────────────────────────
    {
      id: "usememo",
      title: "useMemo",
      blocks: [
        {
          type: "p",
          text: "DEF : Optimisation des performances — mémorise une valeur calculée.",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `import { useMemo } from 'react';

const resultat = useMemo(() => {
  return calculLourd(param);
}, [param]);`,
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { useState, useMemo } from 'react';

function MonComposant() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Ne se recalcule que si count change
  const calculMemo = useMemo(() => {
    console.log('Calcul lourd...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Calcul mémorisé: {calculMemo}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Saisir..."
      />
    </div>
  );
}

export default MonComposant;`,
        },
      ],
    },

    // ── USECALLBACK ─────────────────────────────────────────────────────────
    {
      id: "usecallback",
      title: "useCallback",
      blocks: [
        {
          type: "p",
          text: "DEF : Optimisation des performances — mémorise une fonction.",
        },
        {
          type: "code",
          filename: "syntaxe.jsx",
          language: "jsx",
          code: `import { useCallback } from 'react';

const handleClick = useCallback(() => {
  console.log('clic');
}, [/* dépendances */]);`,
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import React, { useState, useCallback } from 'react';

function MonComposant() {
  const [count, setCount] = useState(0);

  // Recréée uniquement si les dépendances changent
  const incrementer = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementer}>Incrémenter</button>
    </div>
  );
}

export default MonComposant;`,
        },
      ],
    },

    // ── USEIMPERATIVEHANDLE ─────────────────────────────────────────────────
    {
      id: "useimperativehandle",
      title: "useImperativeHandle",
      blocks: [
        {
          type: "p",
          text: "DEF : Exposer des méthodes personnalisées d'un composant à son parent via ref.",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import { useImperativeHandle, forwardRef, useRef } from 'react';

const MonComposant = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});`,
        },
      ],
    },

    // ── USELAYOUTEFFECT ─────────────────────────────────────────────────────
    {
      id: "uselayouteffect",
      title: "useLayoutEffect",
      blocks: [
        {
          type: "p",
          text: "DEF : Identique à useEffect mais s'exécute après le rendu DOM et avant l'affichage à l'écran.",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import { useLayoutEffect } from 'react';

useLayoutEffect(() => {
  // Synchronisation DOM avant peinture à l'écran
}, []);`,
        },
      ],
    },

    // ── USEID ───────────────────────────────────────────────────────────────
    {
      id: "useid",
      title: "useId",
      blocks: [
        {
          type: "p",
          text: "DEF : Générer des identifiants uniques côté client/serveur (accessibilité, formulaires).",
        },
        {
          type: "code",
          filename: "Formulaire.jsx",
          language: "jsx",
          code: `import { useId } from 'react';

function Formulaire() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Nom</label>
      <input id={id} />
    </>
  );
}`,
        },
      ],
    },

    // ── USETRANSITION ───────────────────────────────────────────────────────
    {
      id: "usetransition",
      title: "useTransition",
      blocks: [
        {
          type: "p",
          text: "DEF : Différer certaines mises à jour pour une expérience utilisateur plus fluide.",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import { useTransition } from 'react';

const [isPending, startTransition] = useTransition();

startTransition(() => {
  // Opération non urgente, comme un gros rendu
});`,
        },
      ],
    },

    // ── USEDEFERREDVALUE ────────────────────────────────────────────────────
    {
      id: "usedeferredvalue",
      title: "useDeferredValue",
      blocks: [
        {
          type: "p",
          text: "DEF : Différer une valeur pour optimiser les performances (ex : recherche live).",
        },
        {
          type: "code",
          filename: "MonComposant.jsx",
          language: "jsx",
          code: `import { useDeferredValue } from 'react';

const deferredSearch = useDeferredValue(searchTerm);
// deferredSearch sera mis à jour avec un léger délai
// utile pour éviter de bloquer l'interface lors de la saisie`,
        },
      ],
    },

    // ── TABLEAU DES HOOKS ───────────────────────────────────────────────────
    {
      id: "hooks-tableau",
      title: "Tableau récapitulatif des hooks",
      blocks: [
        {
          type: "table",
          headers: ["Hook", "Rôle principal"],
          rows: [
            ["useState", "Gérer un état interne"],
            ["useEffect", "Réagir à des changements (effets)"],
            ["useContext", "Accéder à une donnée globale partagée"],
            ["useRef", "Référencer une valeur sans re-render"],
            ["useReducer", "Gérer un état complexe avec des actions"],
            ["useMemo", "Mémoriser une valeur calculée"],
            ["useCallback", "Mémoriser une fonction"],
            ["useLayoutEffect", "Comme useEffect, mais synchrone (avant affichage)"],
            ["useImperativeHandle", "Contrôle personnalisé d'un composant exposé"],
            ["useId", "Générer des identifiants uniques (accessibilité, formulaires)"],
            ["useTransition", "Différer certaines mises à jour"],
            ["useDeferredValue", "Différer une valeur (ex : recherche live)"],
          ],
        },
      ],
    },

    // ── HOOKS PERSONNALISÉS ─────────────────────────────────────────────────
    {
      id: "hooks-perso",
      title: "Hooks personnalisés",
      blocks: [
        {
          type: "code",
          filename: "useLocalStorage.js",
          language: "javascript",
          code: `import { useState } from "react";

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
}`,
        },
      ],
    },

    // ── USEMEMO + USECALLBACK ───────────────────────────────────────────────
    {
      id: "memo-callback",
      title: "useMemo et useCallback — combiné",
      blocks: [
        {
          type: "code",
          filename: "optim.jsx",
          language: "jsx",
          code: `import { useMemo, useCallback } from "react";

function Liste({ produits, filtre }) {
  // useMemo : mémorise un calcul coûteux
  const filtres = useMemo(
    () => produits.filter((p) => p.nom.includes(filtre)),
    [produits, filtre]
  );
  // useCallback : mémorise une fonction
  const ajouter = useCallback((id) => console.log(id), []);
  return filtres.map((p) => <div key={p.id} onClick={() => ajouter(p.id)} />);
}`,
        },
      ],
    },

    // ── ÉTAT GLOBAL ZUSTAND ─────────────────────────────────────────────────
    {
      id: "zustand",
      title: "État global avec Zustand",
      blocks: [
        {
          type: "code",
          filename: "store.js",
          language: "javascript",
          code: `import { create } from "zustand";

const usePanier = create((set) => ({
  articles: [],
  ajouter: (produit) =>
    set((state) => ({ articles: [...state.articles, produit] })),
  vider: () => set({ articles: [] }),
}));

// Utilisation dans un composant :
// const articles = usePanier((s) => s.articles);
// const ajouter = usePanier((s) => s.ajouter);`,
        },
      ],
    },

    // ── CONVENTIONS JSX ─────────────────────────────────────────────────────
    {
      id: "react-conventions-jsx",
      title: "Conventions de nommage JSX",
      blocks: [
        {
          type: "h",
          text: "1. Syntaxe JSX",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Une seule racine par return (fragment ou balise englobante)", "return (<><Header /><Main /></>);"],
            ["Fermeture obligatoire des balises", '<img src="..." alt="..." />'],
            ["Attributs avec guillemets doubles", '<div className="box">'],
            ["class devient className", '<div className="card" />'],
            ["for devient htmlFor", '<label htmlFor="email">Email</label>'],
            ["Props booléennes sans valeur explicite", "<input disabled />"],
          ],
        },
        {
          type: "h",
          text: "2. Mise en forme",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Une prop par ligne si trop longue", '<Input type="text" placeholder="Nom complet" />'],
            ["Pas de ; après un bloc JSX", "return (<div>...</div>)"],
            ["Indentation : 2 espaces", "<div><h1>Bonjour</h1></div>"],
            ["Pas d'espaces autour des accolades JSX", "✅ {user.name} ❌ { user.name }"],
            ["Retour à la ligne pour expressions longues", "{items.map(item => (<Item key={item.id} />))}"],
          ],
        },
        {
          type: "h",
          text: "3. Expressions intégrées",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Utiliser JSX uniquement pour contenu visuel", "❌ console.log() dans JSX"],
            ["Expressions courtes dans accolades {}", "✅ {isActive && <span>Actif</span>}"],
            ["Pas de logique métier complexe dans JSX", "❌ {data.length > 0 ? data.map(...) : '...'}"],
            ["Préférer fonctions d'affichage externes", "function renderButton() { return <Button /> }"],
          ],
        },
        {
          type: "h",
          text: "4. Conditions JSX",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Préférer && pour affichage conditionnel simple", "{isAdmin && <AdminPanel />}"],
            ["Utiliser ternaires lisibles pour alternatives", "{isLoading ? <Loader /> : <Content />}"],
            ["Ne pas utiliser else dans JSX", "❌ else dans return JSX"],
          ],
        },
        {
          type: "h",
          text: "5. Listes & clés",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Toujours ajouter une key unique lors d'un map()", "{items.map(item => <Card key={item.id} {...item} />)}"],
            ["Ne jamais utiliser l'index comme clé (sauf cas fixe/stable)", "❌ key={index}"],
          ],
        },
        {
          type: "h",
          text: "6. Accessibilité (a11y)",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Tous les <img> doivent avoir alt", '<img src="logo.png" alt="Logo de l\'app" />'],
            ["Boutons doivent contenir du texte ou un aria-label", '<button aria-label="Fermer">X</button>'],
            ["Pas de div cliquable sans rôle ou tabIndex", "❌ <div onClick={...}> → ✅ <button> ou role=\"button\""],
            ["Utiliser aria-* selon contexte", '<nav aria-label="Menu principal">'],
            ["Utiliser tabIndex pour rendre éléments accessibles", '<div tabIndex="0" role="button">Click</div>'],
          ],
        },
        {
          type: "h",
          text: "7. Style & cohérence",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["JSX dans même fichier que composant", 'return <div className="wrapper">{children}</div>'],
            ["Pas de styles inline sauf exception", "❌ <div style={{ color: 'red' }}>"],
            ["JSX + logique séparés si trop longs", "const content = isVisible ? <Text /> : null;"],
          ],
        },
        {
          type: "h",
          text: "8. Événements & logique",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Préférer handlers nommés (handleX)", "function handleSubmit(e) { e.preventDefault(); }"],
            ["Pas de logique métier dans JSX", "❌ <button onClick={longAlgo()}>"],
            ["Utiliser callbacks courts dans JSX", "<button onClick={handleClick}>"],
          ],
        },
        {
          type: "h",
          text: "9. Commentaires JSX",
        },
        {
          type: "table",
          headers: ["Règle", "Exemple conforme"],
          rows: [
            ["Utiliser commentaires JS dans accolades {/* ... */}", "{/* Ceci est un commentaire en JSX */}"],
            ["Ne jamais utiliser // ou /* */ hors accolades", "❌ <div> // commentaire </div>"],
            ["Commenter sections importantes ou blocs complexes", "{/* Section utilisateurs */}"],
            ["Ajouter TODO / FIXME dans commentaires", "{/* TODO: Ajouter pagination */}"],
            ["Commentaires clairs, concis et à jour", "{/* Met à jour liste après fetch */}"],
            ["Ne pas commenter des lignes entières sans raison claire", "❌ {/* <OldComponent /> */} sans contexte"],
          ],
        },
      ],
    },

    // ── GUIDE DE STYLE JSX ─────────────────────────────────────────────────
    {
      id: "react-guide-jsx",
      title: "Guide de style JSX",
      blocks: [
        {
          type: "diagram",
          content: `JSX = extension de JavaScript pour React

Règles :
├── Un seul élément parent retourné
├── Expressions JS dans { }
├── Composants avec majuscule
├── className au lieu de class
├── htmlFor au lieu de for
├── props en camelCase
├── booléens props={true}
├── commentaires {/* ... */}
├── éviter fonctions lourdes dans JSX
└── sécurité contre XSS`,
        },
      ],
    },

    // ── COMMANDES ESSENTIELLES ─────────────────────────────────────────────
    {
      id: "react-commandes",
      title: "Commandes essentielles",
      blocks: [
        { type: "h", text: "Création de projet" },
        { type: "code", filename: "terminal", language: "bash", code: `# CRA (Create React App)
npx create-react-app nom-du-projet

# CRA + TypeScript
npx create-react-app nom-du-projet --template typescript

# Vite (recommandé aujourd'hui)
npm create vite@latest nom-du-projet --template react

# Vite + TypeScript
npm create vite@latest nom-du-projet --template react-ts` },
        { type: "h", text: "Dépendances" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install nom-du-package` },
        { type: "h", text: "Lancer le projet" },
        { type: "code", filename: "terminal", language: "bash", code: `# Aller dans le projet
cd nomProjet

# CRA
npm start

# Vite
npm run dev` },
      ],
    },

    // ── STRUCTURE D'UN COMPOSANT ────────────────────────────────────────────
    {
      id: "react-structure-composant-fichiers",
      title: "Structure d'un composant React (fichiers)",
      blocks: [
        {
          type: "diagram",
          content: `NomComposant/
├── NomComposant.jsx      # Fichier principal du composant
├── NomComposant.css      # Style du composant
└── NomComposant.test.jsx # Test unitaire du composant`,
        },
      ],
    },

    // ── TYPES DE COMPOSANTS ────────────────────────────────────────────────
    {
      id: "react-types-composants",
      title: "Types de composants",
      blocks: [
        { type: "h", text: "Fonctionnel (recommandé)" },
        { type: "code", filename: "MonComposant.jsx", language: "jsx", code: `function MyComponent(props) {
  return <h1>{props.name}</h1>
}` },
        { type: "h", text: "Classe (ancien style)" },
        { type: "code", filename: "MonComposant.jsx", language: "jsx", code: `class MyComponent extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>
  }
}` },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│ COMPOSANT REACT                                     │
├────────────────┬────────────────────────────────────┤
│ Imbrication    │ parent → enfants                   │
├────────────────┼────────────────────────────────────┤
│ Responsabilité │ 1 composant = 1 partie de l'UI     │
│ unique         │ (bouton, formulaire, liste, header) │
├────────────────┼────────────────────────────────────┤
│ Réutilisabilité│ Utilisable plusieurs fois          │
│                │ → code propre, moins de duplication│
├────────────────┼────────────────────────────────────┤
│ Encapsulation  │ son propre state + logique + style │
│                │ Isolé du reste de l'application    │
├────────────────┼────────────────────────────────────┤
│ État (state)   │ Local state : propre au composant  │
│                │ Global state : partagé entre compos│
└────────────────┴────────────────────────────────────┘`,
        },
      ],
    },

    // ── TYPES DE ROUTER ────────────────────────────────────────────────────
    {
      id: "react-types-router",
      title: "Types de Router",
      blocks: [
        { type: "h", text: "Déclaration avec pages séparées" },
        { type: "code", filename: "App.jsx", language: "jsx", code: `import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}` },
        { type: "h", text: "Navigation" },
        { type: "code", filename: "Menu.jsx", language: "jsx", code: `import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}` },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│ Types de Router                                     │
├─────────────────┬───────────────────────────────────┤
│ BrowserRouter   │ URL propre ( /home ) — recommandé │
│ HashRouter      │ URL avec # — ancien support       │
│ MemoryRouter    │ Navigation en mémoire (tests)     │
│ StaticRouter    │ Rendu serveur                     │
│ NativeRouter    │ React Native (mobile)             │
└─────────────────┴───────────────────────────────────┘`,
        },
      ],
    },

    // ── COMMUNICATION PARENT → ENFANT ──────────────────────────────────────
    {
      id: "react-communication",
      title: "Communication parent → enfant",
      blocks: [
        {
          type: "diagram",
          content: `Parent ──[props]──► Enfant
Enfant ──[callback]──► Parent`,
        },
        { type: "code", filename: "App.jsx", language: "jsx", code: `function Parent() {
  const handleMessage = (msg) => {
    console.log(msg);
  };

  return <Child sendMessage={handleMessage} />;
}

function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello parent")}>
      Envoyer
    </button>
  );
}` },
      ],
    },

    // ── CYCLE DE VIE (CLASS COMPONENTS) ───────────────────────────────────
    {
      id: "react-cycle-vie",
      title: "Cycle de vie (class components)",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│ CYCLE DE VIE D'UN COMPOSANT                         │
├───────────────┬─────────────────────────────────────┤
│  1. MONTAGE   │ constructor()      → init state     │
│               │ render()           → affiche JSX    │
│               │ componentDidMount()→ après affichage│
├───────────────┼─────────────────────────────────────┤
│  2. MISE À    │ render()           → re-affiche UI  │
│     JOUR      │ componentDidUpdate()→ après update  │
├───────────────┼─────────────────────────────────────┤
│  3. DÉMONTAGE │ componentWillUnmount() → avant suppr│
└───────────────┴─────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Montage" },
        { type: "code", filename: "MonComposant.jsx", language: "jsx", code: `componentDidMount() {
  console.log("Composant affiché");
}` },
        { type: "h", text: "2. Mise à jour" },
        { type: "code", filename: "MonComposant.jsx", language: "jsx", code: `componentDidUpdate(prevProps, prevState) {
  console.log("Composant mis à jour");
}` },
        { type: "h", text: "3. Démontage" },
        { type: "code", filename: "MonComposant.jsx", language: "jsx", code: `componentWillUnmount() {
  console.log("Composant supprimé");
}` },
      ],
    },

    // ── HOOKS ─────────────────────────────────────────────────────────────
    {
      id: "react-hooks-intro",
      title: "Introduction aux Hooks",
      blocks: [
        { type: "p", text: "Les Hooks sont des fonctions spéciales de React qui permettent aux composants fonctionnels d'utiliser des fonctionnalités internes de React (state, cycle de vie, etc.) sans utiliser de classes." },
        {
          type: "list",
          items: [
            "Utilisés uniquement dans les composants fonctionnels",
            "Permettent de gérer l'état et les effets",
            "Rendent le code plus lisible, modulaire et concis",
            "Toujours appeler les Hooks au niveau supérieur du composant",
            "Ne pas les appeler dans des conditions ou boucles",
            "Ne les utiliser que dans des composants React ou des hooks personnalisés",
          ],
        },
        { type: "h", text: "Hooks principaux" },
        { type: "list", items: [
          "useState → gérer un état local",
          "useEffect → gérer les effets (API, timers, etc.)",
          "useRef → accéder à un élément du DOM ou garder une valeur persistante",
        ]},
        { type: "code", filename: "Counter.jsx", language: "jsx", code: `import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Le compteur a changé :", count);

    return () => {
      console.log("Nettoyage avant la prochaine mise à jour");
    };
  }, [count]);

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;` },
      ],
    },
  ],
};
