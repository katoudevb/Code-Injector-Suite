import type { Section } from "../types";
import { laConsoleNode } from "./laConsoleNode";

export const node: Section = {
  id: "node",
  title: "Node.js / Express",
  icon: "Server",
  tags: ["js"],
  subsections: [
    {
      id: "concepts",
      title: "Node.js et npm",
      blocks: [
        { type: "p", text: "Node.js exécute du JavaScript côté serveur. Son event loop non-bloquant gère de nombreuses requêtes simultanées." },
        { type: "code", filename: "terminal", language: "bash", code: `npm init -y            # crée un package.json
npm install express    # ajoute une dépendance
npm install -D nodemon # dépendance de développement
npm run dev            # lance un script du package.json` },
      ],
    },
    {
      id: "node-intro-fonctionnement",
      title: "Node.js — Qu'est-ce que c'est ?",
      blocks: [
        { type: "note", variant: "info", text: "Node.js est un environnement d'exécution JavaScript multiplateforme qui permet de créer des applications côté serveur (sites web, API). Ce n'est ni un langage ni un framework, mais un moteur qui exécute du JavaScript sur un serveur." },
        { type: "h", text: "Comment Node.js fonctionne" },
        { type: "p", text: "Node.js combine plusieurs éléments :" },
        { type: "list", items: [
          "Le moteur JavaScript V8 (utilisé par Google Chrome)",
          "Une boucle d'événements (event loop) pour gérer les tâches asynchrones",
          "Des API d'entrée/sortie (I/O) pour gérer fichiers, réseau, etc.",
        ]},
        { type: "p", text: "Résultat : Node.js peut gérer beaucoup de requêtes en même temps sans bloquer le serveur." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│                   NODE.JS                   │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │ Moteur V8│  │Event Loop│  │  API I/O  │ │
│  │(Google)  │  │(async)   │  │(fs,réseau)│ │
│  └──────────┘  └──────────┘  └───────────┘ │
│                                             │
│       JavaScript exécuté côté SERVEUR       │
└─────────────────────────────────────────────┘
         ▲                     ▼
   Requêtes HTTP          Réponses HTTP
      clients                clients`,
        },
        { type: "h", text: "Ce qu'on peut faire avec Node.js" },
        { type: "list", items: [
          "1. Créer un serveur HTTP : déclarer un serveur web, écouter des requêtes, envoyer des réponses",
          "2. Gérer les routes : définir des URL (/accueil, /login, /produits), chaque URL déclenche une action différente",
          "3. Récupérer des données utilisateur : paramètres dans l'URL, données envoyées par un formulaire",
          "4. Envoyer du contenu au client : texte, JSON (API), fichiers HTML",
          "5. Accéder au système de fichiers : lire, écrire, envoyer des fichiers au navigateur",
        ]},
        { type: "h", text: "Genèse de JavaScript et Node.js" },
        { type: "list", items: [
          "JavaScript est un langage créé pour fonctionner dans les navigateurs web",
          "À l'origine, il était uniquement utilisé côté client (dans le navigateur)",
          "Avec le temps, on a voulu utiliser JavaScript côté serveur, ce qui a conduit à la création de Node.js",
          "Node.js permet donc d'exécuter JavaScript en dehors du navigateur, sur un serveur",
        ]},
        {
          type: "diagram",
          content: `Avant Node.js
─────────────
  Navigateur
  ┌─────────────────┐
  │   JavaScript    │  ← uniquement côté client
  │   (front-end)   │
  └─────────────────┘

Avec Node.js
────────────
  Navigateur               Serveur
  ┌──────────┐          ┌──────────────────┐
  │JavaScript│  ─HTTP→  │     Node.js      │
  │(front)   │  ←HTTP─  │  JavaScript V8   │
  └──────────┘          │   (back-end)     │
                        └──────────────────┘`,
        },
        { type: "h", text: "Les versions de Node.js" },
        { type: "p", text: "Version LTS (Long Term Support) : recommandée pour la production, très stable, largement testée, contient peu de bugs, reçoit des mises à jour de sécurité régulières. C'est la version à utiliser pour les vrais projets." },
        { type: "p", text: "Version Current : dernière version disponible, contient les nouvelles fonctionnalités, peut être instable, moins testée que LTS. Utilisée pour tester les nouveautés et faire du développement expérimental." },
        { type: "note", variant: "warning", text: "La version Current n'est pas recommandée en production !" },
        { type: "table", headers: ["Critère", "LTS", "Current"], rows: [
          ["Stabilité", "Très stable", "Instable possible"],
          ["Usage", "Production", "Expérimental"],
          ["Bugs", "Peu", "Possibles"],
          ["Mises à jour sécurité", "Régulières", "Variable"],
          ["Nouvelles fonctionnalités", "Limitées", "Oui"],
        ]},
      ],
    },
    {
      id: "node-npm-detail",
      title: "NPM (Node Package Manager)",
      blocks: [
        { type: "p", text: "npm est le plus grand registre de logiciels JavaScript au monde. Il est principalement utilisé pour partager, installer et gérer des paquets (packages) utilisés dans les projets Node.js." },
        { type: "note", variant: "info", text: "npm est installé automatiquement avec Node.js." },
        { type: "h", text: "Les 3 composants principaux de NPM" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│                      NPM                        │
│                                                 │
│  ┌────────────┐  ┌──────────┐  ┌─────────────┐ │
│  │  Site web  │  │   CLI    │  │  Registre   │ │
│  │ npmjs.com  │  │ Terminal │  │ (base de    │ │
│  │            │  │ commands │  │  données)   │ │
│  └────────────┘  └──────────┘  └─────────────┘ │
└─────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "1. Le site web (https://www.npmjs.com/) permet de : rechercher des packages, consulter leur documentation, voir leur popularité et versions, gérer son compte utilisateur." },
        { type: "p", text: "2. La CLI (Command Line Interface) est l'outil en ligne de commande. Elle permet d'installer un package, supprimer un package, initialiser un projet." },
        { type: "code", filename: "terminal", language: "bash", code: `npm install express` },
        { type: "p", text: "3. Le registre NPM est une énorme base de données en ligne contenant des millions de packages JavaScript, leurs versions, leurs métadonnées. Par défaut, accessible ici : https://registry.npmjs.org/" },
        { type: "h", text: "Comment fonctionne NPM ?" },
        { type: "p", text: "NPM utilise un système de registre pour identifier les packages par leur nom, récupérer une version précise, installer les dépendances dans un projet. Tout cela est souvent décrit dans un fichier important : package.json, qui contient le nom du projet, les dépendances, les scripts, et la version du projet." },
        { type: "h", text: "Utilisation de NPM (workflow simple)" },
        {
          type: "diagram",
          content: `1. Rechercher       2. Installer       3. Utiliser
─────────────       ────────────       ───────────
npmjs.com     →     npm install    →   require()
- popularité         nom-package        dans le code
- version
- date MAJ`,
        },
        { type: "code", filename: "terminal", language: "bash", code: `npm install nom-du-package
# Exemple :
npm install express` },
        { type: "code", filename: "app.js", language: "javascript", code: `const express = require("express");` },
        { type: "note", variant: "info", text: "Registres privés : certaines entreprises peuvent utiliser leur propre registre NPM privé ou héberger des packages internes." },
      ],
    },
    {
      id: "modules",
      title: "CommonJS vs ESM",
      blocks: [
        { type: "code", filename: "modules.js", language: "javascript", code: `// CommonJS (require)
const express = require("express");
module.exports = { calculerTotal };
// ESM (import) — "type": "module" dans package.json
import express from "express";
export function calculerTotal() {}` },
      ],
    },
    {
      id: "node-modules-types",
      title: "Les modules dans Node.js",
      blocks: [
        { type: "p", text: "Dans Node.js, un module est un ensemble de fonctionnalités réutilisables. Un module permet de séparer le code en plusieurs fichiers pour mieux organiser une application." },
        { type: "h", text: "Le dossier node_modules" },
        { type: "p", text: "Le dossier node_modules contient tous les modules installés via npm et les dépendances de ton projet. Il est créé automatiquement quand tu installes des packages." },
        { type: "h", text: "Qu'est-ce qu'un module ?" },
        { type: "p", text: "Un module peut être : une fonctionnalité native de Node.js (ex: fs, http), un package installé via npm, ou un module que tu crées toi-même. On dit qu'un module expose une API (des fonctions utilisables par d'autres fichiers)." },
        {
          type: "diagram",
          content: `              MODULES NODE.JS
                    │
    ┌───────────────┼──────────────────┐
    ▼               ▼                  ▼
Modules natifs  Packages NPM     Modules custom
┌──────────┐   ┌──────────┐    ┌──────────────┐
│ fs       │   │ express  │    │ math.js      │
│ http     │   │ mongoose │    │ monModule.js │
│ events   │   │ cors     │    │ ...          │
│ timer    │   │ ...      │    └──────────────┘
└──────────┘   └──────────┘`,
        },
        { type: "h", text: "Créer ses propres modules" },
        { type: "code", filename: "math.js", language: "javascript", code: `// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;` },
        { type: "code", filename: "app.js", language: "javascript", code: `// app.js
const add = require("./math");
console.log(add(2, 3));` },
        {
          type: "diagram",
          content: `       app.js                  math.js
┌──────────────┐          ┌──────────────────┐
│              │  ──────▶ │ function add()   │
│ require(     │          │                  │
│ "./math"     │          │ module.exports   │
│ )            │ ◀─────── │ = add            │
│ add(2, 3)    │          └──────────────────┘
└──────────────┘
    résultat: 5`,
        },
        { type: "h", text: "L'approche modulaire dans Node.js" },
        { type: "p", text: "Node.js repose sur une approche modulaire : une application est découpée en plusieurs fichiers (modules) qui communiquent entre eux." },
        { type: "list", items: ["Code plus organisé", "Réutilisation des fonctionnalités", "Maintenance plus facile", "Meilleure lisibilité"] },
      ],
    },
    {
      id: "node-fs-bases",
      title: "Manipulation de fichiers avec le module fs",
      blocks: [
        { type: "p", text: "Le module fs (File System) permet de travailler avec les fichiers : lire, écrire, supprimer un fichier." },
        { type: "h", text: "Importer le module fs" },
        { type: "code", filename: "js", language: "javascript", code: `// Version CommonJS (la plus utilisée en Node.js)
const fs = require("fs");

// Version ES Modules
import * as fs from "fs";
// OU
import { readFileSync } from "fs";` },
        { type: "h", text: "1. Créer ou ajouter un fichier : appendFile()" },
        { type: "p", text: "La méthode appendFile() permet de créer un fichier s'il n'existe pas, et d'ajouter du contenu à la fin d'un fichier." },
        { type: "code", filename: "js", language: "javascript", code: `const fs = require("fs");

fs.appendFile("test.txt", "Bonjour Node.js !\\n", (err) => {
  if (err) throw err;
  console.log("Fichier créé ou modifié !");
});` },
        { type: "p", text: "Résultat : si test.txt n'existe pas → il est créé. Sinon → le texte est ajouté à la suite." },
        { type: "h", text: "2. Lire un fichier : readFile()" },
        { type: "code", filename: "js", language: "javascript", code: `const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});` },
        { type: "p", text: "Explication : \"utf8\" = format de lecture (texte lisible), data = contenu du fichier, err = erreur éventuelle." },
        { type: "note", variant: "info", text: "Principe important : ces méthodes sont asynchrones. Node.js ne bloque pas l'exécution du programme pendant la lecture ou l'écriture." },
      ],
    },
    {
      id: "node-debogage-console",
      title: "Débogage dans Node.js (console / logs)",
      blocks: [
        { type: "p", text: "Node.js fournit un module global appelé console (déjà disponible sans import). Il permet d'afficher des informations dans le terminal." },
        { type: "p", text: "La fonction console.log() est utilisée pour afficher des messages, vérifier le comportement du code, déboguer une application." },
        { type: "code", filename: "js", language: "javascript", code: `console.log("Application démarrée");` },
        { type: "h", text: "Sorties standard" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│          FLUX STANDARD NODE.JS           │
│                                          │
│ stdout → console.log()  (messages)       │
│ stderr → console.error() (erreurs)       │
│ stdin  → entrée utilisateur              │
└──────────────────────────────────────────┘`,
        },
        { type: "p", text: "stderr est utilisé pour afficher les erreurs, il est écrit immédiatement (non bufferisé) et ne bloque pas forcément le programme." },
        { type: "code", filename: "js", language: "javascript", code: `console.error("Une erreur est survenue");` },
        { type: "h", text: "Récapitulatif des principaux modules de l'API Node.js" },
        { type: "p", text: "Exemples : console, file (fs), events, timer." },
        { type: "code", filename: "js", language: "javascript", code: `// Module console
console.log("Hello");
console.error("Erreur");

// Module file (fs)
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});` },
      ],
    },
    {
      id: "node-util-fs-avance",
      title: "Modules util et fs (usages avancés)",
      blocks: [
        { type: "h", text: "Module utilitaire : util" },
        { type: "p", text: "Le module util fournit des fonctions utilitaires pour aider au développement : formater des messages, transformer des fonctions en promesses, outils de debug avancés." },
        { type: "code", filename: "js", language: "javascript", code: `const util = require("util");

// Exemple (promisification)
const fs = require("fs");
const readFile = util.promisify(fs.readFile);` },
        { type: "h", text: "Module système de fichiers : fs (usages avancés)" },
        { type: "p", text: "Le module fs est utilisé pour lire, écrire, supprimer des fichiers, et créer des logs." },
        { type: "code", filename: "js", language: "javascript", code: `// Exemple : création de logs
const fs = require("fs");

fs.appendFile("log.txt", "Nouvelle requête reçue\\n", (err) => {
  if (err) throw err;
});` },
        { type: "p", text: "Dans les outils CLI, fs peut organiser des fichiers, créer des dossiers, archiver des données. Exemples d'usages : scripts de tri, outils de backup, automatisation système." },
      ],
    },
    {
      id: "node-events-timer",
      title: "Les modules events & timer",
      blocks: [
        { type: "h", text: "Le module events" },
        { type: "p", text: "Le module events permet de gérer des événements dans ton application. Tu peux émettre un événement (emit) et d'autres parties du code peuvent écouter cet événement (on)." },
        {
          type: "diagram",
          content: `Émetteur                     Écouteur
──────────                   ────────
emitter.emit('message')  →   emitter.on('message', fn)
                                    │
                                    ▼
                         console.log('Message reçu !')`,
        },
        { type: "code", filename: "js", language: "javascript", code: `const EventEmitter = require('events');
const emitter = new EventEmitter();

// écouter un événement
emitter.on('message', () => {
  console.log('Message reçu !');
});

// émettre un événement
emitter.emit('message');` },
        { type: "p", text: "Très utile pour : architecture événementielle, communication entre fichiers/modules. Node.js fonctionne avec une architecture événementielle : quand un événement se produit → une fonction est exécutée." },
        { type: "h", text: "Le module timer" },
        { type: "p", text: "Le module timer contient des fonctions pour exécuter du code après un certain délai." },
        { type: "code", filename: "js", language: "javascript", code: `// setTimeout — Exécute une fois après un délai
setTimeout(() => {
  console.log('Exécuté après 2 secondes');
}, 2000);

// setInterval — Exécute en boucle
setInterval(() => {
  console.log('Toutes les 1 seconde');
}, 1000);

// Annuler
const id = setTimeout(() => {}, 2000);
clearTimeout(id);
clearInterval(id);` },
        { type: "note", variant: "info", text: "Source : W3Schools Node.js Events" },
      ],
    },
    {
      id: "node-child-process",
      title: "Processus fils (child processes)",
      blocks: [
        { type: "p", text: "Un processus fils permet d'exécuter des commandes du système d'exploitation depuis Node.js. Module utilisé : child_process." },
        {
          type: "diagram",
          content: `child_process
      │
      ├── spawn() → asynchrone (events) → gros flux de données
      │                                   (stdin/stdout/stderr streams)
      │
      └── exec()  → callback             → commandes simples
                                           (résultat direct)`,
        },
        { type: "h", text: "spawn() — asynchrone, non bloquant" },
        { type: "p", text: "Lance un processus sans bloquer la boucle d'événements. Utilise des streams (stdin, stdout, stderr). Idéal pour : tâches longues, traitement en flux (stream)." },
        { type: "code", filename: "js", language: "javascript", code: `const { spawn } = require('child_process');

const child = spawn('ls');

child.stdout.on('data', (data) => {
  console.log(\`Résultat :\${data}\`);
});` },
        { type: "h", text: "exec() — avec callback" },
        { type: "p", text: "Exécute une commande et retourne le résultat dans un callback. Idéal pour : commandes simples, récupérer directement le résultat." },
        { type: "code", filename: "js", language: "javascript", code: `const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  console.log(stdout);
});` },
        { type: "table", headers: ["Méthode", "Type", "Usage"], rows: [
          ["spawn", "asynchrone (events)", "gros flux de données"],
          ["exec", "callback", "commandes simples"],
        ]},
      ],
    },
    {
      id: "node-https-sockets",
      title: "Serveur HTTPS et Sockets TCP/UDP",
      blocks: [
        { type: "h", text: "Créer un serveur HTTPS" },
        { type: "p", text: "Le module https permet de créer un serveur sécurisé avec TLS/SSL." },
        { type: "code", filename: "js", language: "javascript", code: `const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  res.write('Hello HTTPS');
  res.end();
}).listen(443);` },
        { type: "h", text: "Socket TCP (module net)" },
        { type: "code", filename: "js", language: "javascript", code: `// Client TCP
const net = require('net');

const client = net.connect({ port: 3000 }, () => {
  console.log('Connecté au serveur');
});

// Serveur TCP
const server = net.createServer((socket) => {
  socket.write('Hello client');
});

server.listen(3000);` },
        { type: "h", text: "Socket UDP (module dgram)" },
        { type: "code", filename: "js", language: "javascript", code: `const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.send('Hello UDP', 41234, 'localhost');` },
        { type: "h", text: "Différence TCP vs UDP" },
        {
          type: "diagram",
          content: `TCP                            UDP
────────────────────           ────────────────────
✅ Fiable                      ⚡ Rapide
🔗 Connecté                   🔓 Sans connexion
🐢 Plus lent                   🪶 Plus léger
✅ Ordre garanti               ❌ Ordre non garanti
Exemple : HTTP, HTTPS          Exemple : streaming, jeux`,
        },
        { type: "table", headers: ["TCP", "UDP"], rows: [["Fiable", "Rapide"], ["Connecté", "Sans connexion"], ["Plus lent", "Plus léger"]] },
      ],
    },
    {
      id: "node-event-loop-detail",
      title: "La boucle d'événements (Event Loop) en détail",
      blocks: [
        { type: "p", text: "L'asynchronisme en JavaScript signifie que le programme peut continuer à exécuter du code pendant qu'il attend la fin d'une opération longue, comme une requête réseau (API), la lecture d'un fichier, ou un timer (setTimeout). L'utilisateur peut donc continuer à utiliser l'application sans blocage." },
        { type: "p", text: "La boucle d'événements est un mécanisme qui vérifie si la pile d'appels (call stack) est vide, prend les fonctions en attente dans la file de messages (callback queue), et les exécute." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                     EVENT LOOP                       │
│                                                      │
│  1. CALL STACK (pile d'appels)                       │
│     ┌─────────────────────┐                          │
│     │ fn en cours         │  ← LIFO (dernière entrée │
│     │ fn précédente       │    exécutée first)       │
│     └─────────────────────┘                          │
│                │                                     │
│                ▼                                     │
│  2. Tâche async ? → envoyée à API Web / Node         │
│     (requête, fs, timer...)  exécutée hors thread    │
│                │                                     │
│                ▼                                     │
│  3. Terminé ? → callback dans CALLBACK QUEUE         │
│     ┌─────────────────────────────────┐              │
│     │ callback1 | callback2 | ...     │              │
│     └─────────────────────────────────┘              │
│                │                                     │
│                ▼                                     │
│  4. Call Stack vide ? → prend le prochain callback   │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Détail des étapes" },
        { type: "list", items: [
          "1. Call Stack (pile d'appels) : contient les fonctions en cours d'exécution, fonctionne en LIFO (Last In, First Out), la dernière fonction ajoutée est exécutée en premier",
          "2. Opération asynchrone : JS envoie la tâche (ex: requête API) à une API Web / Node, elle s'exécute en dehors du thread principal",
          "3. Quand c'est terminé : la fonction callback est placée dans la file d'attente",
          "4. Event Loop : si la pile est vide → elle prend la prochaine fonction dans la file",
        ]},
      ],
    },
    {
      id: "node-callbacks-promises-async",
      title: "Callbacks, Promesses et async/await",
      blocks: [
        { type: "h", text: "Callbacks" },
        { type: "p", text: "Fonction passée en argument à une autre fonction, exécutée plus tard :" },
        { type: "code", filename: "js", language: "javascript", code: `setTimeout(() => {
  console.log("Exécuté après 2 secondes");
}, 2000);` },
        { type: "note", variant: "warning", text: "Problème : le callback hell (code difficile à lire quand imbriqué)" },
        { type: "h", text: "Les Promesses (Promises)" },
        { type: "p", text: "Une promesse est un objet qui représente une valeur disponible maintenant, plus tard… ou jamais." },
        {
          type: "diagram",
          content: `Promise
  │
  ├── pending   → en attente (état initial)
  │
  ├── fulfilled → réussie  (resolve)
  │
  └── rejected  → échouée  (reject)`,
        },
        { type: "code", filename: "js", language: "javascript", code: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));` },
        { type: "h", text: "async / await" },
        { type: "p", text: "C'est une syntaxe moderne pour travailler avec les promesses. Rend le code plus lisible (comme du synchrone)." },
        { type: "code", filename: "js", language: "javascript", code: `async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}` },
        { type: "p", text: "Dans Node.js, on utilise : Promises (.then()/.catch()), async/await, et des modules comme fs (version promesse : fs.promises)." },
        { type: "list", items: ["Code non bloquant", "Meilleure performance", "Gestion d'erreurs propre"] },
      ],
    },
    {
      id: "node-env-variables",
      title: "Variables d'environnement en Node.js",
      blocks: [
        { type: "p", text: "Les variables d'environnement servent à gérer la configuration selon l'environnement : développement, production, test. Exemples : URL de base de données, port du serveur, clés API." },
        { type: "h", text: "Utiliser env-cmd" },
        { type: "p", text: "Avec Node.js, tu peux utiliser env-cmd (alternative à dotenv)." },
        { type: "code", filename: "terminal", language: "bash", code: `npm install env-cmd --save-dev` },
        { type: "h", text: "Structure du projet" },
        {
          type: "diagram",
          content: `/env
├── .env
├── .env.dev
└── .env.prod`,
        },
        { type: "code", filename: ".env", language: "text", code: `PORT=3000
URL_MONGO=mongodb://localhost:27017/mydb` },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "start": "env-cmd -f ./env/.env nodemon ./bin/www",
    "dev":   "env-cmd -f ./env/.env.dev nodemon ./bin/www",
    "prod":  "env-cmd -f ./env/.env.prod nodemon ./bin/www"
  }
}` },
        { type: "code", filename: "terminal", language: "bash", code: `npm run dev
npm run prod` },
      ],
    },
    {
      id: "node-mongodb-connexion-cors",
      title: "Connexion à MongoDB et CORS",
      blocks: [
        { type: "h", text: "Installer les modules" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install mongoose cors` },
        { type: "list", items: ["mongoose → gérer MongoDB", "cors → autoriser les requêtes externes"] },
        { type: "h", text: "Organisation" },
        { type: "code", filename: "structure", language: "text", code: `/db/mongo.js` },
        { type: "code", filename: "db/mongo.js", language: "javascript", code: `const mongoose = require("mongoose");

mongoose.connect(process.env.URL_MONGO)
  .then(() => console.log("Connexion MongoDB réussie"))
  .catch(err => console.error("Erreur MongoDB :", err));` },
        { type: "note", variant: "warning", text: "URL_MONGO doit être dans ton .env" },
        { type: "h", text: "Configuration dans app.js" },
        { type: "code", filename: "app.js", language: "javascript", code: `const cors = require("cors");
require("./db/mongo");

app.use(cors());` },
        { type: "h", text: "CORS (Cross-Origin)" },
        { type: "p", text: "Permet aux autres domaines d'appeler ton API :" },
        { type: "code", filename: "js", language: "javascript", code: `app.use(cors({
  origin: "*"
}));` },
        { type: "note", variant: "warning", text: "* = autorise toutes les origines (à éviter en prod si possible)" },
      ],
    },
    {
      id: "node-routes-erreurs-404",
      title: "Routes et gestion des erreurs 404",
      blocks: [
        { type: "h", text: "Route principale" },
        { type: "code", filename: "js", language: "javascript", code: `app.use("/api", require("./routes"));` },
        { type: "h", text: "Gestion 404" },
        { type: "code", filename: "js", language: "javascript", code: `app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});` },
        { type: "h", text: "Autres packages utiles" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install cookie-parser morgan` },
        { type: "list", items: ["cookie-parser → gérer les cookies", "morgan → logger les requêtes HTTP"] },
      ],
    },
    {
      id: "node-api-http-natif",
      title: "Créer une API simple avec le module http natif",
      blocks: [
        { type: "p", text: "La programmation asynchrone permet une communication non bloquante avec un serveur API. Avec Node.js, le serveur peut gérer plusieurs requêtes en même temps sans bloquer l'exécution. C'est basé sur un modèle événementiel (event-driven)." },
        { type: "code", filename: "js", language: "javascript", code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  switch(req.url) {
    case '/breeds':
      res.writeHead(200);
      res.end(JSON.stringify(["Siamese", "Persian", "Maine Coon"]));
      break;
    case '/facts':
      res.writeHead(200);
      res.end(JSON.stringify([
        "Les chats dorment beaucoup",
        "Les chats ronronnent"
      ]));
      break;
    case '/fact':
      res.writeHead(200);
      res.end(JSON.stringify({
        fact: "Les chats peuvent faire 100 sons différents."
      }));
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({
        error: "Ressource non trouvée"
      }));
  }
});

server.listen(3000, () => {
  console.log('Serveur API lancé sur le port 3000');
});` },
        { type: "h", text: "Schéma des routes de l'API" },
        {
          type: "diagram",
          content: `Client HTTP
      │
      ▼
Node.js Serveur (port 3000)
      │
      ├── /breeds  → 200 → ["Siamese", "Persian", "Maine Coon"]
      │
      ├── /facts   → 200 → ["Les chats dorment...", "...ronronnent"]
      │
      ├── /fact    → 200 → { fact: "Les chats peuvent faire 100 sons" }
      │
      └── (autre)  → 404 → { error: "Ressource non trouvée" }`,
        },
        { type: "p", text: "Ce qu'il faut comprendre : /breeds, /facts, /fact sont des routes. Chaque route renvoie une réponse différente. Le serveur peut répondre à plusieurs utilisateurs sans se bloquer." },
      ],
    },
    {
      id: "node-tester-fichier-terminal",
      title: "Tester un fichier JavaScript avec Node.js",
      blocks: [
        { type: "list", items: [
          "1. Préparer le fichier JS : créer ou déposer ton fichier nom_dufichier.js dans un dossier accessible",
          "2. Ouvrir le terminal : accéder au terminal (cmd, PowerShell, bash, etc.) sur ton PC",
          "3. Se positionner dans le dossier : utiliser la commande cd chemin/du/dossier",
          "4. Exécuter le fichier avec Node.js",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `node nom_dufichier.js` },
        { type: "p", text: "puis appuyer sur Entrée. OU glisser/déposer le fichier." },
        { type: "p", text: "5. Observer la sortie : les résultats de ton script s'affichent dans le terminal. En cas d'erreur, Node te fournit un message utile pour le débogage." },
      ],
    },
    {
      id: "node-api-express-exemple",
      title: "Créer une API avec Node.js et Express",
      blocks: [
        { type: "p", text: "On utilise en général Express.js pour exposer facilement une API REST." },
        { type: "code", filename: "js", language: "javascript", code: `const express = require('express');
const app = express();
const PORT = 3000;

// Exemple de données
const breeds = ['Siamois', 'Persan', 'Maine Coon'];
const facts = [
  "Les chats dorment 70% de leur vie",
  "Le ronronnement peut avoir des vertus curatives",
  "Un chat peut faire jusqu'à 100 sons différents"
];

// Routes API
app.get('/breeds', (req, res) => {
  res.json(breeds);
});

app.get('/facts', (req, res) => {
  res.json(facts);
});

app.get('/fact', (req, res) => {
  const random = facts[Math.floor(Math.random() * facts.length)];
  res.json({ fact: random });
});

app.listen(PORT, () => {
  console.log(\`Serveur API en ligne sur http://localhost:\${PORT}\`);
});` },
        { type: "h", text: "Côté client : consommer cette API" },
        { type: "p", text: "Avec fetch ou axios :" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('http://localhost:3000/breeds')
  .then(res => res.json())
  .then(data => console.log('Races de chats :', data));` },
      ],
    },
    {
      id: "node-avantages-inconvenients",
      title: "Avantages et inconvénients de Node.js",
      blocks: [
        { type: "p", text: "Node.js est très utilisé côté serveur, mais comme toute techno, il a ses forces et ses limites." },
        { type: "h", text: "Avantages de Node.js" },
        { type: "list", items: [
          "Très rapide et léger — Basé sur le moteur V8 (Google Chrome), exécution rapide du JavaScript",
          "Non bloquant (asynchrone) — Gère plusieurs requêtes en même temps. Idéal pour : API, applications web",
          "Multitâche (concurrent) — Grâce à l'event loop, peut traiter plusieurs utilisateurs simultanément",
          "Facile pour créer un serveur — Peu de code pour lancer une API. Parfait pour les débutants en backend",
          "Applications en temps réel — Très bon pour : chat, streaming, jeux en ligne",
          "Écosystème NPM énorme — Des milliers de packages disponibles, gain de temps énorme",
        ]},
        { type: "h", text: "Inconvénients de Node.js" },
        { type: "list", items: [
          "Sécurité — Dépend beaucoup des packages externes. Certaines failles possibles si mal géré",
          "Écosystème parfois instable — Beaucoup de librairies pas toujours maintenues. Qualité variable",
          "Pas adapté aux calculs lourds — CPU intensif (ex: traitement d'image, IA). Bloque le thread principal",
          "Gestion asynchrone parfois complexe — Callbacks / Promises / async-await. Peut devenir difficile à maintenir",
          "Pas de typage fort natif — JavaScript est dynamique, risque d'erreurs. Solution souvent utilisée : TypeScript",
        ]},
        { type: "table", headers: ["Critère", "✅ Avantage", "❌ Inconvénient"], rows: [
          ["Performance", "Très rapide (V8)", "Calculs CPU lourds"],
          ["Concurrence", "Non bloquant, event loop", "Async parfois complexe"],
          ["Facilité", "Peu de code pour serveur", "Typage non natif"],
          ["Temps réel", "Chat, streaming, jeux", "—"],
          ["Écosystème", "NPM énorme", "Librairies parfois instables"],
          ["Sécurité", "—", "Dépend des packages externes"],
        ]},
      ],
    },
    {
      id: "node-bonus-typeof-guillemets",
      title: "Bonus JS — typeof et guillemets",
      blocks: [
        { type: "h", text: "Vérifier le type d'une variable (typeof)" },
        { type: "code", filename: "js", language: "javascript", code: `let nombre = 42;
console.log(typeof nombre); // "number"

let texte = "Bonjour";
console.log(typeof texte); // "string"

let bool = true;
console.log(typeof bool); // "boolean"

let obj = { nom: "Kat" };
console.log(typeof obj); // "object"

let und;
console.log(typeof und); // "undefined"

let fn = function() {};
console.log(typeof fn); // "function"

let nul = null;
console.log(typeof nul); // "object" ⚠️ cas particulier` },
        { type: "note", variant: "warning", text: "null retourne \"object\" → c'est une erreur historique de JavaScript" },
        { type: "table", headers: ["Valeur", "typeof retourne"], rows: [
          ["42", '"number"'],
          ['"Bonjour"', '"string"'],
          ["true", '"boolean"'],
          ['{ nom: "Kat" }', '"object"'],
          ["undefined", '"undefined"'],
          ["function() {}", '"function"'],
          ["null", '"object" ⚠️'],
        ]},
        { type: "h", text: "Gérer les guillemets dans une chaîne" },
        { type: "code", filename: "js", language: "javascript", code: "// Avec échappement\n'Je m\\'appelle'\n\"Je m'appelle\\\"Pierre\\\"\"\n\n// Ou plus simple (recommandé)\n\"Je m'appelle\"\n'Je m\\'appelle \"Pierre\"'" },
        { type: "h", text: "Interaction utilisateur (prompt)" },
        { type: "note", variant: "warning", text: "Dans le navigateur uniquement (pas dans Node.js)" },
        { type: "code", filename: "js", language: "javascript", code: `const nom = prompt("Quel est votre nom ?");

if (nom !== null && nom.trim() !== "") {
  console.log("Bonjour, " + nom + " !");
} else {
  console.log("Aucun nom saisi.");
}` },
      ],
    },
    {
      id: "express",
      title: "Serveur Express",
      blocks: [
        { type: "code", filename: "server.js", language: "javascript", code: `const express = require("express");
const app = express();
app.use(express.json()); // middleware : parse le JSON du body
app.get("/api/produits", (req, res) => res.json([{ id: 1, nom: "Sac" }]));
app.post("/api/produits", (req, res) => res.status(201).json(req.body));
app.get("/api/produits/:id", (req, res) =>
  res.json({ id: req.params.id, page: req.query.page })
);
app.listen(3000, () => console.log("Serveur sur le port 3000"));` },
      ],
    },
    {
      id: "express-schema-fonctionnement",
      title: "Express.js — Schéma de fonctionnement",
      blocks: [
        { type: "p", text: "Express est un framework web minimal et flexible pour Node.js. Il fournit : un système de gestion des requêtes HTTP, des middlewares puissants, une architecture simple pour créer des APIs et sites web." },
        {
          type: "diagram",
          content: `Client (navigateur)
       │
       │ Requête HTTP (GET /products)
       ▼
+──────────────────────────────────────────+
|           Express.js App                 |
|                                          |
|  app.get('/products', (req, res) => {    |
|      // Traitement                       |
|      res.json(data)                      |
|  })                                      |
+──────────────────────────────────────────+
       │
       │ Réponse HTTP (JSON / HTML / Fichier)
       ▼
Client (navigateur)`,
        },
      ],
    },
    {
      id: "express-installation",
      title: "Express.js — Installation",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `# Création du projet
mkdir server
cd server
npm init -y

# Installer Express
npm install express` },
        { type: "h", text: "Création d'un serveur Express simple" },
        { type: "code", filename: "server.js", language: "javascript", code: `// server.js
const express = require("express");
const app = express();

const port = 8000;

app.listen(port, () => {
    console.log("Serveur lancé sur http://localhost:" + port);
});` },
        { type: "h", text: "Syntaxe importante" },
        { type: "code", filename: "server.js", language: "javascript", code: `app.listen(port, host, backlog, callback)` },
        { type: "table", headers: ["Paramètre", "Description"], rows: [
          ["port", "Port d'écoute (ex: 3000, 8000)"],
          ["host", "Adresse IP (optionnel)"],
          ["backlog", "Taille de file d'attente (optionnel)"],
          ["callback", "Fonction exécutée au démarrage"],
        ]},
        { type: "h", text: "Démarrer le serveur" },
        { type: "code", filename: "terminal", language: "bash", code: `node server.js

# Ou via npm :
npm start

# http://localhost:8000` },
      ],
    },
    {
      id: "express-routes",
      title: "Express.js — Routes et réponses",
      blocks: [
        { type: "code", filename: "server.js", language: "javascript", code: `// Exemple GET simple
app.get("/", (req, res) => {
    res.send("Hello world!");
});` },
        { type: "table", headers: ["Variable", "Description"], rows: [
          ["req", "Requête utilisateur"],
          ["res", "Réponse serveur"],
        ]},
        { type: "h", text: "Réponses possibles" },
        { type: "code", filename: "server.js", language: "javascript", code: `// Texte
res.send("Hello");

// JSON
res.json({ message: "Hello" });

// Fichier
res.sendFile(__dirname + "/index.html");` },
      ],
    },
    {
      id: "express-middleware-avance",
      title: "Express.js — Middleware, fichiers statiques et erreurs",
      blocks: [
        { type: "h", text: "Middleware" },
        { type: "p", text: "Un middleware est une fonction qui : lit la requête, modifie req/res si besoin, appelle next() pour continuer." },
        { type: "code", filename: "server.js", language: "javascript", code: `// Exemple de middleware
app.use((req, res, next) => {
    console.log("Requête reçue");
    next();
});

// Ajout de middleware pour parser le JSON
app.use(express.json());` },
        { type: "h", text: "Fichiers statiques" },
        { type: "p", text: "Permet de servir : CSS, images, JS frontend." },
        { type: "code", filename: "server.js", language: "javascript", code: `app.use(express.static("public"));
// Tout le dossier public/ devient accessible` },
        { type: "h", text: "Gestion des erreurs" },
        { type: "code", filename: "server.js", language: "javascript", code: `app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Erreur serveur");
});` },
      ],
    },
    {
      id: "express-nodemon-generator",
      title: "Express.js — Nodemon et Express Generator",
      blocks: [
        { type: "h", text: "Nodemon (auto-reload)" },
        { type: "p", text: "Nodemon permet de redémarrer automatiquement le serveur." },
        { type: "code", filename: "terminal", language: "bash", code: `# Installation
npm install --save-dev nodemon

# Lancer
nodemon server.js` },
        { type: "h", text: "Express Generator" },
        { type: "p", text: "express-generator permet de générer une structure complète." },
        { type: "code", filename: "terminal", language: "bash", code: `# Installation
npm install -g express-generator

# Création projet
express mon_app
cd mon_app
npm install

# Lancement
npm start` },
        { type: "h", text: "Liens utiles Express.js" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Documentation officielle", "https://expressjs.com/"],
          ["Guide routing", "https://expressjs.com/en/guide/routing.html"],
        ]},
      ],
    },
    {
      id: "middleware",
      title: "Middleware et erreurs",
      blocks: [
        { type: "code", filename: "middleware.js", language: "javascript", code: `// Middleware perso (avant les routes)
function logger(req, res, next) {
  console.log(req.method, req.url);
  next(); // passe au suivant
}
app.use(logger);
// Middleware d'erreur : 4 paramètres (err en premier)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ erreur: "Erreur serveur" });
});` },
      ],
    },
    {
      id: "mvc",
      title: "Architecture MVC et fs",
      blocks: [
        { type: "code", filename: "controllers/produitController.js", language: "javascript", code: `const fs = require("fs/promises"); // version asynchrone
exports.lister = async (req, res) => {
  const data = await fs.readFile("produits.json", "utf-8");
  res.json(JSON.parse(data));
};
exports.creer = async (req, res) => {
  await fs.writeFile("produit.json", JSON.stringify(req.body));
  res.status(201).json(req.body);
};` },
      ],
    },
    {
      id: "node-recherche-solution-technique-en",
      title: "Search for a technical solution (rechercher une solution technique)",
      blocks: [
        { type: "h", text: "Identifier le problème" },
        { type: "p", text: "Avant de se lancer dans la recherche proprement dite, il est important d'identifier le problème rencontré. Cela permet de poser les bonnes questions avec le bon vocabulaire technique." },
        { type: "note", variant: "info", title: "Poser la bonne question", text: "On se rend souvent compte que les problèmes rencontrés ont déjà été rencontrés par d'autres. Pour se donner les meilleures chances de trouver une réponse pertinente, poser sa question en anglais, en utilisant le vocabulaire utilisé par ces communautés." },
        { type: "h", text: "La communauté" },
        { type: "p", text: "L'anglais est le langage de l'informatique, et il faut maîtriser au moins le vocabulaire technique et les bases de la langue pour s'immerger dans la communauté des développeurs." },
        { type: "h", text: "Rechercher sur Google" },
        { type: "p", text: "Commencer par une recherche Google. Si la question est bien formulée, on trouvera sa réponse sur un forum ou une vidéo. Souvent, mais pas toujours, la réponse viendra de la plus grande communauté : Stack Overflow." },
        { type: "h", text: "Stack Overflow" },
        { type: "p", text: "Stack Overflow est la communauté la plus grande et la plus active. Il ne s'agit pas seulement de poser des questions — il s'agit aussi de participer en partageant son expérience et en répondant aux questions quand on en est capable." },
        { type: "h", text: "Comment utiliser Stack Overflow" },
        { type: "list", items: [
          "En haut, le titre de la question",
          "Filtrer selon le nombre de réponses",
          "La meilleure réponse est parfois validée par la communauté (signe vert à côté de la réponse)",
        ]},
        { type: "h", text: "La communauté Node.js" },
        { type: "p", text: "Pour des problèmes spécifiques aux projets basés sur Node.js, on peut accéder à la communauté Node (nodejs.org). On y trouve des liens vers la documentation officielle ainsi que la NodeSchool. Le tag DEV Community Node.js est un endroit pour partager des projets, des articles et des tutoriels Node.js." },
        { type: "h", text: "MDN Web Docs" },
        { type: "p", text: "Pour tout ce qui concerne JavaScript, MDN (developer.mozilla.org) est une communauté de développeurs très active. Sa documentation sur JavaScript est un très bon support." },
        { type: "note", variant: "success", text: "Il est important de maintenir une veille technologique constante, car les langages et les technologies évoluent en permanence. Wakelet peut être utilisé pour organiser sa veille technologique. Il faut identifier le problème et le vocabulaire technique associé. Si l'on se pose la question, quelqu'un d'autre se l'est déjà posée — s'appuyer sur la communauté, et poser ses questions en anglais." },
      ],
    },
    {
      id: "node-http-https",
      title: "HTTP-HTTPS request/response management",
      blocks: [
        { type: "h", text: "Les messages HTTP" },
        { type: "p", text: "Les messages HTTP sont la façon dont les données sont échangées entre un serveur et un client. Il existe deux types de messages : les requêtes (Requests), envoyées par le client pour déclencher une action sur le serveur, et les réponses (Responses), la réponse du serveur." },
        { type: "p", text: "Les messages HTTP sont composés de :" },
        { type: "list", items: [
          "Une start-line (ligne unique) décrivant la requête ou son statut (succès ou échec)",
          "Un ensemble optionnel d'en-têtes HTTP précisant la requête ou décrivant le corps",
          "Une ligne vide indiquant que toutes les méta-informations ont été envoyées",
          "Un corps (body, optionnel) contenant les données associées à la requête ou à la réponse",
        ]},
        { type: "h", text: "La requête HTTP (HTTP request)" },
        { type: "p", text: "Les requêtes HTTP sont des messages envoyés par le client pour déclencher une action sur le serveur." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                  STRUCTURE D'UNE REQUÊTE HTTP           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  START-LINE :                                           │
│  [HTTP Method] [Request Target] [HTTP Version]         │
│  ex : GET /api/users HTTP/1.1                          │
│                                                         │
│  HEADERS :                                              │
│  Content-Type: application/json                        │
│  Authorization: Bearer token                           │
│  ...                                                    │
│                                                         │
│  [BLANK LINE]                                           │
│                                                         │
│  BODY (optional) :                                      │
│  { "name": "Alice" }  ← Pour POST/PUT                  │
│  (GET, HEAD, DELETE n'ont généralement pas de body)    │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "La start-line contient trois éléments : une méthode HTTP (GET, PUT, POST, HEAD, OPTIONS…) décrivant l'action à réaliser, la cible de la requête (request target, généralement une URL), et la version HTTP (qui définit la structure du reste du message)." },
        { type: "table", headers: ["Méthode", "Usage"], rows: [
          ["GET", "Récupérer une ressource"],
          ["POST", "Envoyer des données au serveur"],
          ["PUT", "Mettre à jour une ressource"],
          ["DELETE", "Supprimer une ressource"],
          ["HEAD", "Comme GET mais sans body dans la réponse"],
          ["OPTIONS", "Décrire les options de communication"],
        ]},
        { type: "note", variant: "info", title: "Body", text: "Toutes les requêtes n'en ont pas une. Les requêtes qui récupèrent des ressources (GET, HEAD, DELETE, OPTIONS) n'en ont généralement pas besoin. Les requêtes POST contiennent souvent des données de formulaire HTML." },
        { type: "h", text: "La réponse HTTP (HTTP response)" },
        { type: "p", text: "La status-line contient : la version du protocole, un code de statut indiquant le succès ou l'échec, et un texte de statut pour aider un humain à comprendre le message HTTP." },
        { type: "p", text: "Header : même structure que n'importe quel autre en-tête. Body : la dernière partie d'une réponse (optionnelle)." },
        { type: "h", text: "Le module HTTP" },
        { type: "p", text: "Pour gérer les requêtes et les réponses, Node.js possède un module appelé http, qui permet à Node.js de transférer des données via le protocole HTTP (Hyper Text Transfer Protocol)." },
        { type: "code", filename: "http-server.js", language: "javascript", code: `var http = require('http')

// Create a server object:
const server = http.createServer(function (req, res) {
    // Declare the end of the response
    res.end('The server response')
})

server.listen(3000) // the server object listens on port 3000` },
        { type: "p", text: "Les deux paramètres passés à la fonction sont req pour la requête et res pour la réponse. Pour démarrer le serveur : node filename.js." },
        { type: "h", text: "Ajouter un en-tête HTTP et écrire la réponse" },
        { type: "code", filename: "http-server-header.js", language: "javascript", code: `var http = require('http');

const server = http.createServer(function (req, res) {
    // Define the header with the expected response content
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Write a response to the client
    res.write('<html>any html structures</html>')
    // Declare the end of the response
    res.end()
})

server.listen(3000) // the server object listens on port 3000` },
        { type: "p", text: "On peut écrire du HTML directement dans res.write()." },
        { type: "h", text: "Le module HTTPS" },
        { type: "p", text: "HTTPS est le protocole HTTP au-dessus de TLS/SSL. Dans Node.js, il est implémenté comme un module séparé, utilisé sensiblement de la même manière que http." },
        { type: "code", filename: "https-server.js", language: "javascript", code: `var https = require('https');

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world');
}).listen(8000);` },
        { type: "note", variant: "success", text: "Avec Node.js, on peut utiliser les modules HTTP et HTTPS pour créer un serveur. La fonction createServer() prend la requête et la réponse en paramètres, permettant de les manipuler." },
      ],
    },
    {
      id: "node-documentation-api",
      title: "Produire une documentation technique (API)",
      blocks: [
        { type: "h", text: "Qu'est-ce qu'une documentation d'API ?" },
        { type: "p", text: "C'est un document présentant : les fonctions de l'API, comment l'intégrer dans son programme, et les cas d'usage de l'API, avec des exemples." },
        { type: "p", text: "La documentation d'une API est un contenu technique. Elle doit rester lisible et facile à comprendre. La tâche de documenter l'API est souvent confiée à un technical writer (rédacteur technique)." },
        { type: "h", text: "Quel est le contenu d'une documentation d'API ?" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│           STRUCTURE D'UNE DOCUMENTATION API             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. OVERVIEW                                            │
│     └── Summary of the API — what problem it solves    │
│     └── Advantages over similar APIs                   │
│                                                         │
│  2. TUTORIALS (core of the documentation)              │
│     └── Different content formats                      │
│     └── Links for reference                            │
│     └── Steps to integrate and consume the API         │
│                                                         │
│  3. EXAMPLES                                            │
│     └── Describe some examples of use                  │
│                                                         │
│  4. GLOSSARY (optional)                                 │
│     └── For readers who may not have full command      │
│         of technical vocabulary                         │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Prérequis pour rédiger" },
        { type: "list", items: [
          "Connaître son API — une bonne compréhension de l'architecture et des fonctionnalités de l'API est nécessaire",
          "Choix du contenu — en plus du texte, on peut utiliser de courtes vidéos ou images pour illustrer l'intégration de l'API",
          "Être technique mais clair : utiliser des termes techniques mais éviter les constructions grammaticales complexes, expliquer les acronymes la première fois qu'ils apparaissent, écrire aussi simplement que possible — la documentation est plus facile à comprendre si elle est détaillée",
          "Chercher les erreurs — il y a toujours quelque chose à changer, mettre à jour ou même supprimer",
        ]},
        { type: "h", text: "Les meilleurs outils pour la produire" },
        { type: "list", items: ["Postman", "DrapperDox", "SwaggerHub"] },
        { type: "h", text: "Produire une documentation avec Postman" },
        { type: "p", text: "Postman permet de sauvegarder les requêtes faites à l'API dans des collections. À partir de ces collections, on peut générer une nouvelle documentation." },
        { type: "h", text: "Étapes" },
        { type: "list", items: [
          "Appuyer sur \"New\" → sélectionner \"API Documentation\"",
          "Sélectionner la collection de requêtes que l'on veut documenter",
          "Un template est fourni au format Markdown",
        ]},
        { type: "p", text: "Structure du template Postman :" },
        { type: "code", filename: "postman-template.md", language: "markdown", code: `# Introduction
What does your API do?

# Overview
Things that the developers should know about

# Authentication
What is the preferred way of using the API?

# Error Codes
What errors and status codes can a user expect?

# Rate limit
Is there a limit to the number of requests a user can send?` },
        { type: "list", items: [
          "Postman propose une version bêta d'un éditeur de texte si l'on n'est pas familier avec Markdown",
          "La dernière étape permet de partager la documentation avec son équipe ou le monde entier, et d'ajouter des exemples de réponses de l'API",
        ]},
        { type: "h", text: "Partager sa collection" },
        { type: "list", items: [
          "Partager un lien par e-mail",
          "Partager via un bouton intégré sur son site web",
          "Partager via un lien JSON",
        ]},
        { type: "note", variant: "success", text: "La documentation d'une API présente les fonctions de l'API, comment l'intégrer dans son programme et les cas d'usage de l'API, avec des exemples. Cette documentation se compose d'un aperçu avec des tutoriels et quelques exemples de réponses de l'API ainsi qu'un glossaire. Postman permet, à partir de collections de requêtes, de fournir une bonne documentation." },
      ],
    },
    ...laConsoleNode,
  ],
};
