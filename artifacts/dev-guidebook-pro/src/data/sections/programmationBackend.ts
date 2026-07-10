import type { Section } from "../types";

export const programmationBackend: Section = {
  id: "programmation-back-end",
  title: "Programmation Back-End — Fondamentaux",
  icon: "Code2",
  tags: ["python", "js"],
  subsections: [
    {
      id: "pb-langage-variables",
      title: "Langage de programmation et variables",
      blocks: [
        { type: "p", text: "Un langage de programmation est un langage utilisé pour écrire des instructions que l'ordinateur peut exécuter." },
        { type: "p", text: "Une donnée : Information que le programme peut utiliser ou manipuler." },
        { type: "h", text: "Les variables" },
        { type: "p", text: "Une variable est un conteneur qui permet de stocker une donnée, modifier des valeurs et contrôler la logique du programme." },
        { type: "p", text: "Elle possède : un nom, une valeur" },
        { type: "code", filename: "python", language: "python", code: `age = 20` },
        { type: "h", text: "Types de variables" },
        { type: "table", headers: ["Type", "Description", "Exemple"], rows: [
          ["Integer (int)", "Nombre entier", "age = 18"],
          ["Float", "Nombre décimal", "prix = 19.99"],
          ["String", "Texte", 'nom = "Alice"'],
          ["Boolean", "Vrai ou faux", "est_majeur = True"],
        ]},
        { type: "code", filename: "python", language: "python", code: `age = 18          # int
prix = 19.99      # float
nom = "Alice"     # string
est_majeur = True # boolean` },
        { type: "h", text: "Typage en Python" },
        { type: "p", text: "Python utilise un typage dynamique :" },
        { type: "list", items: ["Pas besoin de déclarer le type", "Python le détecte automatiquement"] },
        { type: "code", filename: "python", language: "python", code: `x = 10
x = "texte"` },
        { type: "h", text: "Modifier une variable" },
        { type: "code", filename: "python", language: "python", code: `x = 5
x = 10` },
        { type: "h", text: "Règles de nommage" },
        { type: "list", items: ["Noms clairs", "snake_case recommandé", "Anglais souvent utilisé"] },
        { type: "code", filename: "python", language: "python", code: `user_name = "Alice"
total_price = 50` },
        { type: "list", items: ["Pas d'espace", "Pas de caractères spéciaux", "Sensible à la casse"] },
        { type: "code", filename: "python", language: "python", code: `nombre != Nombre` },
      ],
    },
    {
      id: "pb-chaines-caracteres",
      title: "Chaînes de caractères",
      blocks: [
        { type: "p", text: "Une chaîne de caractères (string) est une suite de : lettres, chiffres, symboles, espaces" },
        { type: "p", text: "Elle peut représenter :" },
        { type: "list", items: ['un mot : "Bonjour"', 'une phrase : "Je suis étudiant"', "un texte complet"] },
        { type: "h", text: "Encodage des caractères" },
        { type: "p", text: "Chaque caractère est représenté par un code numérique en mémoire." },
        { type: "p", text: "Exemple :" },
        { type: "list", items: ["A → 65", "B → 66", "a → 97"] },
        { type: "h", text: "ASCII (American Standard Code for Information Interchange)" },
        { type: "p", text: "Il permet de transformer en valeurs numériques compréhensibles par l'ordinateur :" },
        { type: "list", items: ["des lettres", "des chiffres", "des symboles"] },
      ],
    },
    {
      id: "pb-http-api",
      title: "HTTP & API",
      blocks: [
        { type: "h", text: "Le protocole HTTP" },
        { type: "p", text: "Le HTTP (HyperText Transfer Protocol) est un protocole qui permet la communication entre un client (navigateur, application) et un serveur web." },
        { type: "list", items: ["GET : méthode HTTP", "Host : serveur ciblé"] },
        { type: "code", filename: "http", language: "text", code: `GET / HTTP/1.1
Host: www.google.com` },
        { type: "h", text: "Cycle requête / réponse" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│                                                  │
│   CLIENT                        SERVEUR          │
│                                                  │
│   1. Envoie une requête HTTP ──────────►         │
│                                                  │
│                    2. Le serveur la traite        │
│                                                  │
│   ◄────── 3. Renvoie une réponse HTTP            │
│                                                  │
│   La réponse contient :                          │
│     - un code HTTP                               │
│     - des données                                │
└──────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Codes HTTP" },
        { type: "table", headers: ["Catégorie", "Code", "Signification"], rows: [
          ["Succès", "200", "OK (succès)"],
          ["Erreurs client", "401", "Non authentifié"],
          ["Erreurs client", "403", "Accès interdit"],
          ["Erreurs client", "404", "Ressource introuvable"],
          ["Erreurs serveur", "500", "Erreur serveur"],
          ["Erreurs serveur", "502", "Mauvaise passerelle"],
          ["Erreurs serveur", "503", "Service indisponible"],
          ["Erreurs serveur", "504", "Timeout"],
          ["Redirections", "301/302", "Redirection"],
        ]},
        { type: "h", text: "Types de requêtes HTTP" },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────┐
│  MÉTHODE  │  ACTION              │  MODIFIE ?       │
├────────────────────────────────────────────────────┤
│  GET      │  Récupérer données   │  Non             │
│  POST     │  Envoyer/Créer       │  Oui             │
│  PUT      │  Remplacer complet   │  Oui             │
│  PATCH    │  Modifier partiel    │  Oui             │
│  DELETE   │  Supprimer           │  Oui             │
└────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "GET → Récupérer des données, pas de modification du serveur",
          "POST → Envoyer des données (ex : formulaire, création de contenu)",
          "PUT → Remplacer complètement une ressource",
          "PATCH → Modifier partiellement une ressource",
          "DELETE → Supprimer une ressource",
        ]},
      ],
    },
    {
      id: "pb-fetch-javascript",
      title: "Utiliser fetch() en JavaScript",
      blocks: [
        { type: "h", text: "GET avec gestion d'erreur" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://exemple.com/api/ressource')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`Erreur HTTP :\${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Données reçues :', data);
  })
  .catch(error => {
    console.error('Erreur détectée :', error.message);
  });` },
        { type: "h", text: "Version async / await" },
        { type: "code", filename: "js", language: "javascript", code: `async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Erreur HTTP');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erreur attrapée :', error.message);
  }
}

getPosts();` },
        { type: "h", text: "Envoyer des données (POST)" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Nouveau post',
    body: 'Ceci est un post envoyé.',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log('Réponse API :', data));` },
        { type: "h", text: "Modifier des données (PUT)" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Titre modifié',
    body: 'Contenu mis à jour',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log(data));` },
        { type: "h", text: "Modification partielle (PATCH)" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Titre modifié uniquement'
  })
})
.then(res => {
  if (!res.ok) {
    throw new Error(\`Erreur HTTP :\${res.status}\`);
  }
  return res.json();
})
.then(data => {
  console.log('Données mises à jour :', data);
})
.catch(error => {
  console.error('Erreur détectée :', error.message);
});` },
        { type: "h", text: "Supprimer des données (DELETE)" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(res => {
  if (res.ok) {
    console.log('Suppression réussie');
  }
});` },
        { type: "h", text: "Bonne pratique — Fonction réutilisable" },
        { type: "code", filename: "js", language: "javascript", code: `async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erreur HTTP');
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}` },
        { type: "note", variant: "info", text: "Rappels clés : la page \"Getting Started\" indique comment intégrer l'API au projet. HTTP = communication client/serveur. GET / POST / PUT / PATCH / DELETE = actions principales. fetch() = outil JavaScript pour appeler une API. Toujours vérifier response.ok. Toujours gérer les erreurs (try/catch ou .catch())." },
      ],
    },
    {
      id: "pb-web-services-rest",
      title: "Web Services et REST",
      blocks: [
        { type: "p", text: "REST (Representational State Transfer) est un standard d'architecture pour les API web. Il définit comment deux systèmes communiquent via HTTP." },
        { type: "h", text: "Principe REST" },
        { type: "p", text: "Les API REST utilisent les méthodes HTTP :" },
        { type: "code", filename: "text", language: "text", code: `GET    → récupérer des données
POST   → créer des données
PUT    → remplacer une ressource
PATCH  → modifier une ressource
DELETE → supprimer une ressource` },
        { type: "h", text: "Règles REST" },
        { type: "list", items: [
          "Chaque requête est indépendante",
          "Les échanges utilisent HTTP",
          "Les réponses sont souvent en JSON",
          "Structure simple et standardisée",
        ]},
        { type: "note", variant: "info", text: "Référence : https://developer.mozilla.org/en-US/docs/Glossary/REST" },
      ],
    },
    {
      id: "pb-types-langages",
      title: "Types de langages",
      blocks: [
        { type: "h", text: "Schéma global" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                   TYPES DE LANGAGES                     │
├──────────────────────┬──────────────────────────────────┤
│   CÔTÉ CLIENT        │   CÔTÉ SERVEUR                   │
│   (navigateur)       │   (serveur)                      │
│                      │                                  │
│   HTML → structure   │   PHP                            │
│   CSS  → style       │   Node.js                        │
│   JS   → interactions│   C++                            │
├──────────────────────┴──────────────────────────────────┤
│                TYPES D'EXÉCUTION                        │
├─────────────────┬──────────────────┬────────────────────┤
│   COMPILÉS      │   INTERPRÉTÉS    │   HYBRIDES         │
│   (→ code       │   (ligne par     │   (mix)            │
│    machine)     │    ligne)        │                    │
│                 │                  │                    │
│   C, C++        │   PHP, Ruby      │   JavaScript, Java │
│   Très rapide   │   Flexible       │                    │
└─────────────────┴──────────────────┴────────────────────┘`,
        },
        { type: "h", text: "1. Langage côté client (Client-side)" },
        { type: "p", text: "Exécuté dans le navigateur de l'utilisateur. Permet d'afficher le site et rendre la page interactive." },
        { type: "list", items: [
          "HTML → structure d'une page web",
          "CSS → style (couleurs, mise en page)",
          "JavaScript → interactions (boutons, animations)",
        ]},
        { type: "h", text: "2. Langage côté serveur (Server-side)" },
        { type: "p", text: "Exécuté sur le serveur (pas visible par l'utilisateur). Gère les bases de données, traite les requêtes et sécurise les données." },
        { type: "list", items: ["PHP", "Node.js", "C++ (parfois utilisé côté serveur)"] },
        { type: "h", text: "Types d'exécution" },
        { type: "p", text: "1. Langages compilés" },
        { type: "p", text: "Le code est transformé en code machine avant exécution. Très rapide et performant." },
        { type: "list", items: ["C", "C++"] },
        { type: "p", text: "2. Langages interprétés" },
        { type: "p", text: "Le code est exécuté ligne par ligne. Facile à tester et plus flexible." },
        { type: "list", items: ["PHP", "Ruby"] },
        { type: "p", text: "3. Langages hybrides" },
        { type: "p", text: "Mélange compilation + interprétation." },
        { type: "list", items: ["JavaScript", "Java"] },
        { type: "h", text: "Langages pour applications mobiles" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│           MOBILE                                 │
├──────────────────┬───────────────────────────────┤
│    ANDROID       │    iOS                        │
│    Java          │    Swift                      │
│    Kotlin        │    Objective-C                │
├──────────────────┴───────────────────────────────┤
│    CROSS-PLATFORM (multi-support)                │
│    JavaScript / TypeScript / Dart (Flutter)      │
└──────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "pb-encapsulation",
      title: "Encapsulation",
      blocks: [
        { type: "p", text: "L'encapsulation consiste à regrouper des instructions dans des fonctions ou classes afin de mieux organiser le code." },
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "Code plus lisible → Un nom de fonction ou de classe remplace un bloc complexe d'instructions",
          "Isolation de l'implémentation → On peut modifier une partie du code sans impacter le reste grâce à une interface bien définie",
          "Réutilisation du code → Une fonction peut être utilisée dans plusieurs contextes sans duplication",
          "Maintenance facilitée → Les bugs sont localisés plus facilement et corrigés sans effet secondaire global",
          "Protection des données → L'accès direct aux données est limité, ce qui améliore la sécurité et l'intégrité du système",
          "Tests unitaires simplifiés → Chaque composant peut être testé indépendamment",
        ]},
        { type: "h", text: "Séparation des responsabilités" },
        { type: "table", headers: ["Objectif", "Description"], rows: [
          ["Maintenir le code", "Facilite la lecture, compréhension et modification sur le long terme"],
          ["Prévenir les erreurs", "Réduit les bugs en isolant les fonctionnalités"],
          ["Favoriser la réutilisation", "Création de modules indépendants réutilisables"],
          ["Améliorer la testabilité", "Permet des tests unitaires ciblés et efficaces"],
          ["Faciliter la collaboration", "Chaque développeur travaille sur une partie isolée"],
          ["Favoriser la modularité", "Architecture évolutive, flexible et bien structurée"],
        ]},
      ],
    },
    {
      id: "pb-algorithmes",
      title: "Algorithmes — Conditions et boucles",
      blocks: [
        { type: "h", text: "Les conditions" },
        { type: "p", text: "Une condition permet d'exécuter un bloc de code uniquement si une condition est vraie." },
        { type: "list", items: ["Vrai (TRUE)", "Faux (FALSE)"] },
        { type: "code", filename: "pseudo-code", language: "text", code: `SI âge ≥ 18 ALORS autoriser accès` },
        {
          type: "diagram",
          content: `┌────────────────────────────────┐
│        CONDITION               │
│                                │
│   condition vraie ?            │
│        /         \\             │
│      OUI          NON          │
│       ↓            ↓           │
│  Bloc A exécuté  Bloc B / rien │
└────────────────────────────────┘`,
        },
        { type: "h", text: "Les structures itératives (boucles)" },
        { type: "p", text: "Une boucle permet de répéter plusieurs fois une action." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                     LES BOUCLES                          │
├─────────────────┬──────────────────┬─────────────────────┤
│  WHILE          │  DO WHILE        │  UNTIL              │
│  (Tant que)     │  (Faire… TQ)     │  (Jusqu'à)          │
├─────────────────┼──────────────────┼─────────────────────┤
│  Test au DÉBUT  │  Test à la FIN   │  Test à la FIN      │
│  Peut ne pas    │  Exécute au      │  Répète jusqu'à ce  │
│  s'exécuter     │  moins une fois  │  que condition      │
│                 │                  │  devienne vraie     │
└─────────────────┴──────────────────┴─────────────────────┘`,
        },
        { type: "p", text: "Tant que (WHILE) : répète tant qu'une condition est vraie, test au début" },
        { type: "p", text: "Faire… Tant que (DO WHILE) : exécute au moins une fois, test à la fin" },
        { type: "p", text: "Jusqu'à (UNTIL) : répète jusqu'à ce que la condition devienne vraie, test à la fin" },
      ],
    },
    {
      id: "pb-tableaux-algo",
      title: "Les tableaux (algorithmie)",
      blocks: [
        { type: "p", text: "Un tableau est un ensemble de valeurs du même type." },
        { type: "p", text: "Caractéristiques :" },
        { type: "list", items: ["Même type de données (entier, réel…)", "Identifié par un nom", "Accès par indices"] },
        { type: "p", text: "Taille : Nombre d'éléments = borne supérieure - borne inférieure + 1" },
        { type: "code", filename: "pseudo-code", language: "text", code: `Car MOIS(1, 12)
→ tableau de 12 éléments (mois de l'année)` },
        {
          type: "diagram",
          content: `┌────┬────┬────┬────┬────┬────┬────┬────┬────┬─────┬─────┬─────┐
│ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │ 7  │ 8  │ 9  │ 10  │ 11  │ 12  │
└────┴────┴────┴────┴────┴────┴────┴────┴────┴─────┴─────┴─────┘
 Jan  Fév  Mar  Avr  Mai  Juin Juil Août Sep  Oct   Nov   Déc`,
        },
      ],
    },
    {
      id: "pb-procedures-fonctions",
      title: "Procédures et fonctions",
      blocks: [
        { type: "p", text: "Permettent de découper un problème en sous-problèmes." },
        { type: "list", items: ["Réutilisables", "Paramétrées", "Plus faciles à maintenir"] },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────┐
│         PROCÉDURE vs FONCTION           │
├───────────────────┬─────────────────────┤
│    PROCÉDURE      │    FONCTION         │
├───────────────────┼─────────────────────┤
│ Exécute une action│ Exécute une action  │
│ Ne retourne PAS   │ Retourne une VALEUR │
│ forcément un      │                     │
│ résultat          │                     │
└───────────────────┴─────────────────────┘`,
        },
      ],
    },
    {
      id: "pb-variables-types-algo",
      title: "Variables et types (en algorithmie)",
      blocks: [
        { type: "p", text: "Une variable stocke une valeur utilisée dans un algorithme." },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Entier", "nombres sans virgule"],
          ["Réel", "nombres décimaux"],
          ["Booléen", "vrai / faux"],
          ["Caractère", "lettre ou symbole"],
        ]},
        { type: "p", text: "Opérations — Les variables sont manipulées avec des opérateurs :" },
        { type: "list", items: ["+, -, *, /", "comparaisons (>, <, =)", "logique (ET, OU, NON)"] },
        { type: "h", text: "Logique d'un algorithme" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────┐
│           ALGORITHME                    │
│                                         │
│   ENTRÉES → TRAITEMENTS → RÉSULTAT      │
│                                         │
│   Décomposition d'un problème :         │
│   ├── sous-problèmes                    │
│   ├── variables intermédiaires          │
│   └── étapes successives               │
└─────────────────────────────────────────┘`,
        },
        { type: "h", text: "Pseudo-code (base)" },
        { type: "list", items: [
          "1. Toujours commencer par Début et finir par Fin",
          "2. Lire une valeur → Lire()",
          "3. Afficher → Ecrire()",
          "4. Affectation → ←",
          "5. Commentaires → //",
        ]},
        { type: "code", filename: "pseudo-code", language: "text", code: `Début
  Lire âge
  SI âge ≥ 18 ALORS
    Ecrire "majeur"
  SINON
    Ecrire "mineur"
Fin` },
      ],
    },
    {
      id: "pb-normes-nommage",
      title: "Normes de nommage globale",
      blocks: [
        { type: "h", text: "Tableau de référence complet" },
        { type: "table", headers: ["Contexte", "Convention"], rows: [
          ["Variables", "camelCase"],
          ["Fonctions / Méthodes", "camelCase"],
          ["Attributs / champs", "camelCase"],
          ["Events / listeners JS", "camelCase"],
          ["Middleware / interceptors", "camelCase"],
          ["Constantes", "UPPER_SNAKE_CASE"],
          ["Classes", "PascalCase"],
          ["Interfaces", "PascalCase"],
          ["Namespace", "PascalCase"],
          ["Fichiers", "kebab-case ou snake_case"],
          ["Modules Python", "snake_case"],
          ["Modules JavaScript", "kebab-case"],
          ["Enum (type)", "PascalCase"],
          ["Enum (valeurs)", "UPPER_SNAKE_CASE"],
          ["Table BDD", "snake_case"],
          ["Colonne BDD", "snake_case"],
          ["Clé BDD", "snake_case"],
          ["API / URL REST", "kebab-case"],
          ["Types TypeScript", "PascalCase"],
          ["Génériques TypeScript", "UpperCamelCase"],
          ["Dossiers", "kebab-case ou snake_case"],
        ]},
        { type: "h", text: "React" },
        { type: "table", headers: ["Élément", "Convention"], rows: [
          ["Composants", "PascalCase"],
          ["Hooks", "camelCase avec use"],
          ["Exemples", "useState, useEffect"],
        ]},
        { type: "h", text: "JSON / objets dynamiques" },
        { type: "list", items: ["camelCase ou snake_case (selon projet)"] },
        { type: "h", text: "HTML / CSS" },
        { type: "table", headers: ["Élément", "Convention"], rows: [
          ["ID", "kebab-case"],
          ["Classes CSS", "kebab-case"],
          ["Tailwind", "kebab-case"],
        ]},
        { type: "p", text: "Balises HTML personnalisées :" },
        { type: "code", filename: "html", language: "html", code: `<user-profile-card>` },
        { type: "p", text: "Fichiers de configuration :" },
        { type: "list", items: [".env", "app.config.json"] },
      ],
    },
    {
      id: "pb-bonnes-pratiques",
      title: "Bonnes pratiques",
      blocks: [
        { type: "h", text: "Lisibilité du code" },
        { type: "list", items: [
          "Utiliser des noms de variables clairs",
          "Éviter les abréviations incompréhensibles",
          "Ajouter des commentaires utiles (pas inutiles)",
        ]},
        { type: "h", text: "Organisation du code" },
        { type: "list", items: [
          "Structurer en blocs logiques",
          "Indentation cohérente (2 ou 4 espaces)",
          "Espaces entre les blocs logiques",
        ]},
        { type: "h", text: "Qualité du code" },
        { type: "list", items: [
          "Limiter les lignes à 80–100 caractères",
          "Découper les fonctions longues (+10–15 lignes)",
          "Nommer les fonctions de manière explicite",
        ]},
        { type: "h", text: "Maintenabilité" },
        { type: "list", items: [
          "Respecter les conventions du projet",
          "Réutiliser le code (fonctions)",
          "Éviter le code dupliqué",
        ]},
      ],
    },

    // ── POO ───────────────────────────────────────────────────────────────
    {
      id: "pb-poo-schema-general",
      title: "POO — Programmation Orientée Objet",
      blocks: [
        { type: "p", text: "La programmation orientée objet (POO) consiste à organiser le code sous forme de blocs appelés objets, un peu comme des pièces de puzzle qui s'assemblent pour former un programme." },
        { type: "h", text: "Schéma général POO" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│                 CLASSE                      │
│            (modèle / moule)                 │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │  Attributs (données)                │   │
│   │  - titre                            │   │
│   │  - nbPage                           │   │
│   └─────────────────────────────────────┘   │
│   ┌─────────────────────────────────────┐   │
│   │  Méthodes (comportements)           │   │
│   │  - description()                    │   │
│   └─────────────────────────────────────┘   │
└─────────────────────┬───────────────────────┘
                      │  instanciation
           ┌──────────┴──────────┐
           ▼                     ▼
      [Objet 1]             [Objet 2]
    LivreUn                LivreDeux
    titre="HP"             titre="Dune"`,
        },
      ],
    },
    {
      id: "pb-poo-classes",
      title: "Les classes",
      blocks: [
        { type: "p", text: "Une classe est un modèle qui permet de représenter un objet du monde réel. Elle regroupe à la fois des données (attributs) et des comportements (méthodes)." },
        { type: "list", items: [
          "Une classe se définit avec le mot-clé class",
          "Son nom commence toujours par une majuscule",
          "Elle contient : des attributs (définis en premier), des méthodes (définies ensuite)",
          "Le mot-clé self représente l'objet courant",
        ]},
      ],
    },
    {
      id: "pb-poo-objets",
      title: "Les objets",
      blocks: [
        { type: "p", text: "Un objet est une instance d'une classe, c'est-à-dire une version concrète d'un modèle. Chaque objet est unique. Les objets représentent des éléments du monde réel (exemples : une voiture, un livre)." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: ["Il possède des attributs (ses caractéristiques)", "Il possède des méthodes (ses comportements)"] },
        { type: "h", text: "Manipulation (CRUD)" },
        { type: "p", text: "Les objets permettent de manipuler des données à travers les opérations suivantes :" },
        { type: "list", items: ["Création", "Lecture", "Mise à jour", "Suppression"] },
        { type: "p", text: "Relation avec les classes : Les objets sont créés à partir de classes, qui servent de modèles." },
        { type: "code", filename: "python", language: "python", code: `class Livre:                          # Class
    def __init__(self):               # Constructeur
        self.titre = ""
        self.nbPage = 0               # Les attributs

    def description(self):            # La Méthode
        return "Livre " + self.titre + " a " + str(self.nbPage) + " pages."

LivreUn = Livre()                     # L'objet
LivreUn.titre = "Harry Potter"
LivreUn.nbPage = 400

print(LivreUn.description())          # Résultat` },
      ],
    },
    {
      id: "pb-poo-structurer-code",
      title: "Structurer le code (POO)",
      blocks: [
        { type: "p", text: "Un code en POO ne doit pas être regroupé dans un seul bloc ou un seul fichier sans organisation." },
        { type: "h", text: "Bonne organisation du code" },
        { type: "list", items: [
          "réparti dans plusieurs fichiers ou modules",
          "organisé par classes et responsabilités",
          "lisible et facile à comprendre",
          "facilement modifiable ou extensible",
        ]},
        { type: "h", text: "Objectifs de la structuration" },
        { type: "list", items: [
          "identifiable (chaque partie a un rôle clair)",
          "maintenable (facile à corriger ou modifier)",
          "extensible (facile à améliorer)",
          "réutilisable",
        ]},
        { type: "h", text: "Principe fondamental" },
        { type: "list", items: [
          "une classe = un rôle précis",
          "un fichier = une responsabilité logique",
          "chaque partie du code est indépendante",
        ]},
        { type: "h", text: "Avantages de la POO" },
        { type: "list", items: [
          "une meilleure organisation du code",
          "une meilleure lisibilité",
          "une meilleure séparation des responsabilités",
          "une exécution plus claire du programme",
        ]},
        { type: "h", text: "Importance du découpage" },
        { type: "list", items: [
          "il facilite la compréhension",
          "il réduit les erreurs",
          "il améliore la maintenance",
          "il rend le projet évolutif",
        ]},
      ],
    },
    {
      id: "pb-poo-modules-packages",
      title: "Organiser avec modules et packages",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                     PACKAGE                              │
│   (dossier contenant plusieurs modules)                  │
│                                                          │
│   ┌────────────────────────────────────────────────┐     │
│   │  __init__.py  (config du package)              │     │
│   └────────────────────────────────────────────────┘     │
│   ┌────────────────┐   ┌────────────────┐                │
│   │  module_a.py   │   │  module_b.py   │                │
│   │  - classes     │   │  - classes     │                │
│   │  - fonctions   │   │  - fonctions   │                │
│   │  - variables   │   │  - variables   │                │
│   └────────────────┘   └────────────────┘                │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Les modules (fichier.py) contiennent :" },
        { type: "list", items: ["des classes", "des fonctions (méthodes)", "des variables"] },
        { type: "p", text: "Les packages :" },
        { type: "list", items: [
          "Contiennent plusieurs fichiers .py (modules)",
          "Contiennent un fichier __init__.py, peut contenir du code d'initialisation et peut configurer le package",
        ]},
        { type: "p", text: "Les imports :" },
        { type: "list", items: [
          "Permettent de communiquer entre les modules",
          "On importe des classes ou fonctions d'un module",
          "Cela permet de réutiliser du code",
          "Évite de tout écrire dans un seul fichier",
        ]},
        { type: "p", text: "Responsabilité : Chaque élément du code (methode) doit avoir un rôle unique." },
      ],
    },
    {
      id: "pb-poo-mecanismes-creation",
      title: "Les mécanismes de création d'objets",
      blocks: [
        { type: "p", text: "Les mécanismes de création d'objets permettent de créer une instance d'une classe (un objet). Ils définissent comment un objet est créé, comment il est initialisé et comment il est utilisé." },
        { type: "p", text: "Ils reposent principalement sur les constructeurs, les méthodes, l'encapsulation et l'héritage." },
      ],
    },
    {
      id: "pb-poo-constructeurs",
      title: "Les constructeurs (__init__)",
      blocks: [
        { type: "p", text: "Un constructeur est une méthode spéciale utilisée pour créer et initialiser un objet." },
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: [
          "appelé automatiquement lors de la création d'un objet",
          "initialise les attributs de l'objet",
          "peut prendre des paramètres ou être vide",
          "une seule définition par classe",
          "utilise self pour représenter l'objet en cours de construction",
        ]},
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def __init__(self, titre, pages):
        self.titre = titre
        self.pages = pages

mon_livre = Livre("Dune", 52)` },
        { type: "h", text: "Cas possibles" },
        { type: "list", items: [
          "constructeur sans paramètres (vide)",
          "constructeur avec paramètres",
          "impossible d'avoir plusieurs constructeurs en Python",
        ]},
      ],
    },
    {
      id: "pb-poo-methodes",
      title: "Les méthodes",
      blocks: [
        { type: "p", text: "Une méthode est une fonction définie dans une classe." },
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: [
          "définie avec def",
          "fait partie d'une classe",
          "toujours indentée (4 espaces)",
          "possède une signature (paramètres)",
          "utilise self pour accéder à l'objet",
          "peut être appelée un nombre illimité de fois",
          "Python ne permet pas deux méthodes avec le même nom",
        ]},
        { type: "h", text: "Signature d'une méthode" },
        { type: "p", text: "La signature définit :" },
        { type: "list", items: ["le nombre de paramètres", "le type de paramètres"] },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def afficher(self):
        print(self.titre)` },
      ],
    },
    {
      id: "pb-poo-encapsulation-detail",
      title: "Encapsulation (en POO)",
      blocks: [
        { type: "p", text: "L'encapsulation protège les données internes d'un objet." },
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: [
          "bloque l'accès direct à certaines propriétés",
          "améliore la sécurité des données",
          "contrôle la modification des attributs",
        ]},
        { type: "p", text: "En Python : __variable → rend l'attribut privé" },
        { type: "code", filename: "python", language: "python", code: `class Compte:
    def __init__(self):
        self.__solde = 0` },
        { type: "h", text: "Accès aux données" },
        { type: "p", text: "Pour accéder/modifier une variable privée :" },
        { type: "list", items: ["getter → lire la valeur", "setter → modifier la valeur"] },
        { type: "code", filename: "python", language: "python", code: `class Compte:
    def __init__(self):
        self.__solde = 0

    def get_solde(self):
        return self.__solde

    def set_solde(self, valeur):
        self.__solde = valeur` },
      ],
    },
    {
      id: "pb-poo-heritage",
      title: "Héritage",
      blocks: [
        { type: "p", text: "L'héritage permet de créer une classe fille à partir d'une classe mère." },
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: [
          "la classe fille hérite des attributs et méthodes de la classe mère",
          "permet la réutilisation du code",
          "réduit la duplication",
          "permet de modifier le comportement des méthodes",
        ]},
        { type: "h", text: "Terminologie" },
        { type: "list", items: ["classe mère = parent / superclasse", "classe fille = enfant / sous-classe"] },
        { type: "code", filename: "python", language: "python", code: `class Animal:
    def parler(self):
        print("Je parle")

class Chien(Animal):
    def parler(self):
        print("Wouf")` },
        { type: "p", text: "Redéfinition (override) : Une classe fille peut modifier une méthode existante et remplacer le comportement de la classe mère." },
      ],
    },
    {
      id: "pb-poo-heritage-cascade",
      title: "Héritage en cascade",
      blocks: [
        { type: "p", text: "L'héritage en cascade est un mécanisme où une classe hérite d'une autre classe, qui elle-même hérite d'une autre classe. Cela crée une chaîne d'héritage entre plusieurs classes." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│          HÉRITAGE EN CASCADE                 │
│                                              │
│   object  (super-super-classe Python)        │
│      │                                       │
│      ▼                                       │
│   classA  (hérite implicitement de object)   │
│      │                                       │
│      ▼                                       │
│   classB  (hérite de A)                      │
│      │                                       │
│      ▼                                       │
│   classC  (hérite de B)                      │
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "En Python :" },
        { type: "list", items: [
          "Toutes les classes héritent directement ou indirectement de la classe object",
          "object est appelée la super-super-classe",
          "Object = classe de base de toutes les classes Python",
          "Permet de garantir un comportement commun à tous les objets",
          "Incluse automatiquement, même si elle n'est pas écrite",
        ]},
        { type: "code", filename: "python", language: "python", code: `class A:       # A hérite implicitement de object
    pass

class B(A):    # B hérite de A
    pass

class C(B):    # C hérite de B
    pass` },
        { type: "p", text: "Mot-clé pass : Indique une classe vide ou aucune méthode/attribut pour le moment." },
      ],
    },
    {
      id: "pb-poo-heritage-multiple",
      title: "Héritage multiple",
      blocks: [
        { type: "p", text: "L'héritage multiple est un mécanisme où une classe peut hériter de plusieurs classes mères." },
        { type: "p", text: "Une classe mère peut avoir plusieurs classes filles et une classe fille peut hériter de plusieurs classes mères." },
        { type: "h", text: "Principe" },
        { type: "list", items: [
          "une classe peut recevoir les attributs et méthodes de plusieurs classes",
          "cela permet de combiner plusieurs comportements dans une seule classe",
        ]},
        { type: "code", filename: "python", language: "python", code: `class A:
    def afficher(self):
        print("A")

class B:
    def afficher(self):
        print("B")

class C(A, B):
    pass` },
        { type: "h", text: "Fonctionnement en Python" },
        { type: "list", items: ["Python autorise l'héritage multiple", "l'ordre des classes mères est important"] },
        { type: "code", filename: "python", language: "python", code: `class C(A, B):
    pass` },
        { type: "h", text: "Résolution des conflits (MRO)" },
        { type: "p", text: "Si deux classes mères ont une méthode avec le même nom, Python utilise la règle de priorité (MRO – Method Resolution Order) : La classe déclarée en premier est prioritaire." },
        { type: "code", filename: "python", language: "python", code: `class A:
    def dire(self):
        print("Classe A")

class B:
    def dire(self):
        print("Classe B")

class C(A, B):    # C hérite de A et B
    pass

c = C()
c.dire()

# Résultat :
# Classe A  → Priorité à A car écrit en 1er` },
        { type: "h", text: "Problèmes possibles" },
        { type: "list", items: [
          "ambiguïté (quelle méthode utiliser ?)",
          "code difficile à comprendre",
          "conflits entre méthodes identiques",
          "comportement parfois inattendu",
        ]},
      ],
    },

    // ── CÔTÉ BACK-END ────────────────────────────────────────────────────
    {
      id: "pb-cote-backend",
      title: "Côté back-end",
      blocks: [
        { type: "p", text: "Le back-end décrit le comportement d'un site web côté serveur :" },
        { type: "list", items: [
          "traitement des données",
          "gestion des requêtes HTTP",
          "accès aux bases de données",
          "logique métier",
        ]},
        { type: "h", text: "Technologies back-end" },
        { type: "p", text: "PHP — Langage script côté serveur. Génère des pages web dynamiques. Très utilisé avec les CMS (ex : WordPress)." },
        { type: "p", text: "Node.js — Environnement d'exécution JavaScript côté serveur. Permet de : gérer les requêtes HTTP, créer des API, développer des applications temps réel (chat, streaming…)." },
        { type: "p", text: "Python — Langage polyvalent. Utilisé pour : API web, bases de données, automatisation. Frameworks : Django, Flask." },
        { type: "p", text: "Java — Langage orienté objet. Très utilisé en entreprise. Permet de construire : applications web robustes, services distribués. Frameworks : Spring." },
        { type: "p", text: "C# — Langage orienté objet (Microsoft). Utilisé avec ASP.NET. Bon pour les applications web professionnelles." },
        { type: "p", text: "Ruby — Langage orienté objet. Framework principal : Ruby on Rails. Développement rapide d'applications web." },
        { type: "p", text: "Go (Golang) — Langage compilé, performant. Gère très bien la concurrence (goroutines). Utilisé pour les services backend rapides et scalables." },
        { type: "p", text: "Rust — Langage compilé, très sécurisé. Très performant (niveau système). Utilisé pour les systèmes critiques et backend haute performance." },
        { type: "p", text: "Elixir — Langage fonctionnel. Basé sur la machine virtuelle Erlang. Très bon pour les systèmes temps réel. Framework : Phoenix." },
        { type: "p", text: "Scala — Langage hybride (objet + fonctionnel). Utilisé avec Apache Spark et backend distribué. Frameworks : Play, Akka." },
        { type: "p", text: "Perl — Langage script. Traitement de texte et fichiers. Moins utilisé aujourd'hui mais encore présent en legacy." },
        { type: "h", text: "Comparatif des technologies back-end" },
        { type: "table", headers: ["Langage", "Type", "Frameworks", "Points forts"], rows: [
          ["PHP", "Interprété", "Laravel, Symfony", "CMS, web dynamique"],
          ["Node.js", "Hybride (JS)", "Express, Nest.js", "Temps réel, API"],
          ["Python", "Interprété", "Django, Flask", "Polyvalent, IA"],
          ["Java", "Hybride", "Spring", "Entreprise, robuste"],
          ["C#", "Hybride", "ASP.NET", "Microsoft, pro"],
          ["Ruby", "Interprété", "Ruby on Rails", "Développement rapide"],
          ["Go", "Compilé", "—", "Performance, concurrence"],
          ["Rust", "Compilé", "Actix", "Sécurité, système"],
          ["Elixir", "Fonctionnel", "Phoenix", "Temps réel, Erlang"],
          ["Scala", "Hybride", "Play, Akka", "Big data, distribué"],
          ["Perl", "Interprété", "—", "Texte, legacy"],
        ]},
      ],
    },
  ],
};
