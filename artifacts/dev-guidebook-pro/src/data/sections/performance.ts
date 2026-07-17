import type { Section } from "../types";

export const performance: Section = {
  id: "performance",
  title: "Performance & Optimisation",
  icon: "Gauge",
  tags: ["js", "css"],
  subsections: [
    {
      id: "perf-optimiser-site-web",
      title: "Optimiser la performance d'un site web",
      blocks: [
        { type: "p", text: "Améliorer la vitesse, la fluidité et l'efficacité d'un site en réduisant son poids et son exécution." },
        {
          type: "diagram",
          content: `AXES D'OPTIMISATION
├── 1. Code          → Supprimer le superflu, optimiser la logique
├── 2. CSS           → Minifier, purger, organiser
├── 3. JavaScript    → Minifier, bundler, defer/async
├── 4. Images        → Compression, lazy loading, taille adaptée
├── 5. Fichiers statiques → Minifier, compresser, fusionner
├── 6. Réseau & cache    → Cache navigateur, réduire requêtes HTTP
├── 7. Optimisations avancées → Preload, PWA, debounce, API
├── 8. Analyse UX/SEO    → DevTools, balises, sitemap
└── 9. Sécurité      → HTTPS, éviter redirections inutiles`,
        },
      ],
    },
    {
      id: "perf-code",
      title: "1. Code",
      blocks: [
        { type: "list", items: [
          "Supprimer code mort",
          "Éviter balises / attributs inutiles",
          "Réduire DOM (espaces, lignes vides…)",
          "Utiliser balises sémantiques (<main>, <section>, …)",
          "Optimiser boucles / conditions",
          "Utiliser fonctions pures",
          "Supprimer ressources inutilisées",
        ]},
      ],
    },
    {
      id: "perf-css",
      title: "2. CSS",
      blocks: [
        { type: "list", items: [
          "Éviter sélecteurs coûteux (:)",
          "Organiser les styles (généraux → spécifiques)",
          "Supprimer CSS inutilisé (Purge CSS, DevTools Coverage)",
          "Minifier le CSS (cssnano, …)",
        ]},
      ],
    },
    {
      id: "perf-javascript",
      title: "3. JavaScript",
      blocks: [
        { type: "list", items: [
          "Minifier le JS (Terser, …)",
          "Imports dynamiques (import())",
          "Regrouper les fichiers (bundler Vite, Webpack, …)",
          "Charger les scripts avec defer ou async",
          "Script en bas de page (</body>)",
        ]},
        { type: "h", text: "defer vs async" },
        {
          type: "diagram",
          content: `Sans attribut :
HTML ──[STOP]── JS télécharge + exécute ──[REPRISE]── HTML

defer :
HTML ──────────────────────────── [fin HTML] ── JS exécute
      JS télécharge en parallèle ↗

async :
HTML ──────[STOP dès que JS prêt]── JS exécute ──[REPRISE]──
      JS télécharge en parallèle ↗`,
        },
        { type: "table", headers: ["Attribut", "Téléchargement", "Exécution", "Bloque HTML"], rows: [
          ["(aucun)", "Synchrone", "Immédiate", "Oui"],
          ["defer", "Parallèle", "Après HTML", "Non"],
          ["async", "Parallèle", "Dès que prêt", "Brièvement"],
        ]},
      ],
    },
    {
      id: "perf-images",
      title: "4. Images",
      blocks: [
        { type: "list", items: [
          "Compression (réduire le poids)",
          "Lazy loading (chargement uniquement si visible)",
          "Chargement uniquement si visible",
          "Adapter la taille des images au conteneur",
        ]},
        { type: "code", filename: "lazy-loading.html", language: "html", code: `<!-- Lazy loading natif -->
<img src="photo.webp" alt="description" loading="lazy" width="800" height="600">` },
      ],
    },
    {
      id: "perf-fichiers-statiques",
      title: "5. Fichiers statiques",
      blocks: [
        { type: "list", items: [
          "Minifier HTML / CSS / JS",
          "Compression (gzip, brotli)",
          "Fusion des fichiers (réduire le nombre de requêtes)",
        ]},
      ],
    },
    {
      id: "perf-reseau-cache",
      title: "6. Réseau et cache",
      blocks: [
        { type: "list", items: [
          "Cache navigateur activer via .htaccess (Cache-Control, CDN)",
          "Réduire les requêtes HTTP",
          "Éviter de recharger inutilement",
          "Améliore le temps de chargement",
          "Durée de conservation des données temporaires (7 jours recommandé)",
        ]},
        { type: "h", text: "Exemple .htaccess — Cache-Control" },
        { type: "code", filename: ".htaccess", language: "apache", code: `<IfModule mod_expires.c>
  ExpiresActiveOn
  ExpiresByType image/webp "access plus 7 days"
  ExpiresByType text/css "access plus 7 days"
  ExpiresByType application/javascript "access plus 7 days"
</IfModule>` },
      ],
    },
    {
      id: "perf-optimisations-avancees",
      title: "7. Optimisations avancées (API, Interactions)",
      blocks: [
        { type: "list", items: [
          "Preload | prefetch des ressources critiques",
          "Service Worker / PWA (cache intelligent + offline)",
          "Pagination optimisée",
          "debounce / throttle des événements",
          "Réduire les appels API",
        ]},
        { type: "h", text: "debounce vs throttle" },
        {
          type: "diagram",
          content: `debounce — attend la fin des frappes avant d'exécuter :
Frappe : A B C D E ....(silence).... → exécution une seule fois

throttle — exécute à intervalles réguliers même si ça continue :
Frappe : A B C D E F G H I J ...
Exécut:  ↑         ↑         ↑    (toutes les X ms)`,
        },
        { type: "h", text: "Preload / Prefetch" },
        { type: "code", filename: "preload-prefetch.html", language: "html", code: `<!-- Preload : ressource critique pour la page actuelle -->
<link rel="preload" href="style.css" as="style">
<link rel="preload" href="font.woff2" as="font" crossorigin>

<!-- Prefetch : ressource probable pour la page suivante -->
<link rel="prefetch" href="next-page.js">` },
      ],
    },
    {
      id: "perf-analyse-ux-seo",
      title: "8. Analyse et amélioration UX / SEO",
      blocks: [
        { type: "list", items: [
          "Analyse via DevTools (onglet Performance, Lighthouse, Coverage)",
          "Balises alt, title, meta",
          "Amélioration UX globale",
          "sitemap.xml et fichier robots.txt bien configurés",
        ]},
      ],
    },
    {
      id: "perf-securite",
      title: "9. Sécurité",
      blocks: [
        { type: "list", items: ["Utilisation de HTTPS", "Éviter les redirections inutiles"] },
      ],
    },
    {
      id: "perf-bugs-navigateurs",
      title: "Types de bugs navigateurs web",
      blocks: [
        { type: "p", text: "Problèmes d'affichage ou fonctionnement d'un site liés à la compatibilité entre navigateurs, systèmes ou technologies web." },
        {
          type: "diagram",
          content: `SOURCES DE BUGS NAVIGATEURS
├── 1. Navigateur           → Différences entre navigateurs, versions obsolètes
├── 2. Système exploitation → Rendu graphique différent, compatibilité OS
├── 3. CSS                  → Box model, responsive, interprétation du style
├── 4. JavaScript           → Incompatibilités, fonctions non supportées
├── 5. Sécurité / permissions → Pop-ups, caméra, micro, restrictions
├── 6. Comportements dynamiques → Formulaires, interactions inattendues
├── 7. Moteur de rendu      → WebKit, Blink, Gecko…
├── 8. Versions et standards → HTML/CSS non supportés, non-respect W3C
├── 9. Responsive / appareils → Mobile vs desktop, résolution, touch vs souris
└── 10. APIs web            → APIs non supportées, fetch, storages…`,
        },
        { type: "h", text: "1. Navigateur" },
        { type: "list", items: ["Différences entre eux", "Versions obsolètes / MAJ"] },
        { type: "h", text: "2. Système d'exploitation" },
        { type: "list", items: ["Divers rendu graphique", "Compatibilité limitée selon OS"] },
        { type: "h", text: "3. CSS" },
        { type: "list", items: ["Problème box model", "Responsive mal géré", "Différence d'interprétation du style"] },
        { type: "h", text: "4. JavaScript" },
        { type: "list", items: ["Incompatibilités JS", "Fonctions non supportées selon navigateur"] },
        { type: "h", text: "5. Sécurité / permissions" },
        { type: "list", items: ["Pop-ups bloqués", "Accès caméra / micro refusé", "Restrictions navigateur"] },
        { type: "h", text: "6. Comportements dynamiques" },
        { type: "list", items: ["Formulaires automatiques", "Interactions mal interprétés", "Réactions inattendues du site"] },
        { type: "h", text: "7. Moteur de rendu" },
        { type: "list", items: ["Moteurs divers (WebKit, Blink, Gecko…)"] },
        { type: "h", text: "8. Versions et standards web" },
        { type: "list", items: ["HTML / CSS non supportés selon versions", "Non-respect des standards (W3C)"] },
        { type: "h", text: "9. Responsive / appareils" },
        { type: "list", items: ["Différence mobile / desktop", "Résolution écran", "Touch vs souris"] },
        { type: "h", text: "10. APIs web" },
        { type: "list", items: ["APIs non supportées selon navigateurs", "Différences JS modernes (fetch, storages, …)"] },
      ],
    },
    {
      id: "perf-tests-charge-autocannon",
      title: "Tests de performance d'une API REST (autocannon)",
      blocks: [
        { type: "p", text: "Les tests de charge permettent de mesurer les performances d'une API REST en simulant plusieurs utilisateurs en même temps. Ils servent à analyser la capacité de l'API à supporter du trafic." },
        { type: "h", text: "Objectifs" },
        { type: "list", items: [
          "Mesurer le nombre de requêtes par seconde",
          "Évaluer le temps de réponse",
          "Tester la stabilité sous forte charge",
          "Détecter les erreurs ou ralentissements",
        ]},
        { type: "h", text: "1. Outils de test de charge" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["Locust", "Test de charge Python"],
          ["Gatling", "Test de charge Scala"],
          ["Artillery", "Test de charge Node.js"],
          ["Autocannon", "Outil Node.js simple et rapide ✅"],
        ]},
        { type: "h", text: "2. Installation d'Autocannon" },
        { type: "code", filename: "install.sh", language: "bash", code: `npm install -g autocannon` },
        { type: "h", text: "3. Syntaxe de base" },
        { type: "code", filename: "syntax.sh", language: "bash", code: `autocannon [options] URL` },
        { type: "h", text: "4. Exemple de test (API POST)" },
        { type: "p", text: "Test d'une route d'authentification :" },
        { type: "code", filename: "test-auth.sh", language: "bash", code: `autocannon -c 100 -m POST \\
-H "Content-Type: application/json" \\
-b '{"email":"john@xxx.com","password":"1236666"}' \\
http://localhost:3000/users/authenticate` },
        { type: "h", text: "5. Explication des options" },
        { type: "table", headers: ["Option", "Description", "Défaut"], rows: [
          ["-c / --connections NUM", "Nombre de connexions concurrentes", "10"],
          ["-d / --duration SEC", "Temps d'exécution en secondes", "18"],
          ["-m / --method METHOD", "Méthode HTTP à utiliser", "GET"],
          ["-b / --body BODY", "Corps de la requête", "—"],
          ["-i / --input FILE", "Chemin d'un fichier contenant le corps de la requête", "—"],
        ]},
        { type: "h", text: "6. Interprétation du rapport" },
        { type: "list", items: [
          "Plus le nombre de requêtes/seconde est élevé, plus l'API est performante",
          "Il faut surveiller les erreurs et les temps de réponse",
          "Permet d'identifier les limites du serveur ou de l'application",
        ]},
      ],
    },
    {
      id: "perf-freins-node",
      title: "Identification des freins — Optimisation d'une application Node.js",
      blocks: [
        { type: "p", text: "Identifier les parties du code qui ralentissent l'application (goulots d'étranglement). On utilise des outils de profiling CPU pour analyser les performances." },
        { type: "h", text: "Outils utilisés" },
        { type: "table", headers: ["Outil", "Rôle"], rows: [
          ["Chrome DevTools", "Profiling CPU visuel"],
          ["Node.js (--inspect)", "Active le debugger distant"],
          ["V8 JavaScript engine", "Moteur JS interne à Node"],
          ["Clinic.js (flamegraph)", "Visualisation flamegraph"],
        ]},
        { type: "h", text: "1. Utilisation de Chrome DevTools (profiling CPU)" },
        { type: "p", text: "Lancement de l'application :" },
        { type: "code", filename: "start.sh", language: "bash", code: `node --inspect` },
        { type: "p", text: "Accès au debugger : aller sur chrome://inspect, cliquer sur Inspect pour ouvrir les outils de profiling." },
        { type: "p", text: "Analyse CPU \"Profiler\" : 1. Start : démarrer le profiling. 2. Lancer une charge (ex : autocannon). 3. Stop : arrêter l'enregistrement. 4. Analyser le rapport CPU." },
        { type: "h", text: "Types de vues disponibles" },
        {
          type: "diagram",
          content: `HEAVY (Bottom Up)                   TREE (Top Down)
────────────────────                ────────────────────
Fonctions les + coûteuses           Arbre des appels
Analyse de la call stack            Point d'entrée de l'exécution
Self time  → temps dans la fct      Permet de suivre le flux
Total time → avec fonctions filles
Function   → nom de la fonction`,
        },
        { type: "p", text: "Heavy (Bottom Up) : montre les fonctions qui consomment le plus de CPU, analyse de la call stack. Self time : temps passé dans la fonction seule. Total time : temps total avec les fonctions appelées. Function : nom de la fonction." },
        { type: "p", text: "Tree (Top Down) : montre l'arbre des appels de fonctions, permet de voir le point d'entrée de l'exécution." },
        { type: "p", text: "Flamegraph : représentation visuelle de l'utilisation CPU. Plus la barre est large, plus la fonction consomme de ressources." },
        {
          type: "diagram",
          content: `FLAMEGRAPH — lecture visuelle
──────────────────────────────────────────────
  [     functionA (très large = coûteuse)     ]
    [ functionB ]  [ functionC ]
       [ fn D ]
──────────────────────────────────────────────
← Lecture de bas en haut (appels → enfants)`,
        },
        { type: "h", text: "2. Clinic.js (Flamegraph)" },
        { type: "code", filename: "install.sh", language: "bash", code: `npm install -g clinic` },
        { type: "p", text: "Lancement du profiling :" },
        { type: "code", filename: "flame.sh", language: "bash", code: `clinic flame --node ./bin/www` },
        { type: "h", text: "Options importantes" },
        { type: "list", items: [
          "on-port : Lance automatiquement la commande quand le serveur écoute sur un port",
          "autocannon : Permet de lancer Autocannon pendant le profiling. Les options sont passées entre crochets [ ]",
        ]},
        { type: "p", text: "Lancer la commande complète :" },
        { type: "code", filename: "flame-full.sh", language: "bash", code: `clinic flame --autocannon [-c 100 -m POST -H "Content-Type: application/json" -b '{"email":"john@box.com","password":"1236666"}' http://localhost:3000/users/authenticate]` },
        { type: "p", text: "Résultat : génère une interface graphique, montre les fonctions les plus coûteuses en CPU, permet d'identifier les lenteurs." },
        { type: "h", text: "3. Faire un test de charge" },
        { type: "code", filename: "test-charge.sh", language: "bash", code: `# 1. Installer Autocannon
npm install -g autocannon

# 2. Lancer le serveur Node.js
node server.js

# 3. Ouvrir un nouveau terminal et exécuter
autocannon http://localhost:8080` },
        { type: "h", text: "4. Détection des freins (profiling CPU)" },
        { type: "code", filename: "detection.sh", language: "bash", code: `# Installer Clinic.js
npm install -g clinic

# Vérifier l'installation
clinic flame --help

# Générer un profil CPU
clinic flame --on-port 'autocannon localhost:8080' --node fichier.js` },
        { type: "p", text: "Analyse des résultats : lecture de bas en haut, montre l'enchaînement des fonctions appelées." },
        { type: "h", text: "5. Optimisation" },
        { type: "p", text: "Après analyse des freins :" },
        { type: "list", items: [
          "Optimiser les fonctions lentes",
          "Réduire les calculs inutiles",
          "Améliorer le code backend",
          "Utiliser des fonctions asynchrones",
        ]},
        { type: "note", variant: "info", title: "Outil utile", text: "Flamegraph viewer : https://www.npmjs.com/package/flamebearer" },
      ],
    },
    {
      id: "perf-recap-outils",
      title: "Récap — Outils de performance",
      blocks: [
        { type: "table", headers: ["Catégorie", "Outil", "Usage"], rows: [
          ["CSS", "cssnano", "Minification CSS"],
          ["CSS", "Purge CSS", "Suppression CSS inutilisé"],
          ["JS", "Terser", "Minification JS"],
          ["JS", "Vite / Webpack", "Bundler / regroupement"],
          ["Tests charge", "autocannon", "Test requêtes API"],
          ["Tests charge", "Locust, Gatling, Artillery", "Alternatives"],
          ["Profiling", "Chrome DevTools", "Analyse CPU visuelle"],
          ["Profiling", "clinic flame", "Flamegraph Node.js"],
          ["Analyse", "Lighthouse", "Score performance global"],
          ["Analyse", "DevTools Coverage", "CSS/JS inutilisé"],
        ]},
      ],
    },
  ],
};
