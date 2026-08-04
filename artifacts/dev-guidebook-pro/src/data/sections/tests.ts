import type { Section } from "../types";

export const tests: Section = {
  id: "tests",
  title: "Tests",
  icon: "FlaskConical",
  tags: ["js", "python", "ts"],
  subsections: [
    {
      id: "tests-organisation-poo",
      title: "Organisation des tests en POO",
      blocks: [
        { type: "p", text: "Les tests sont regroupés dans des classes pour réutiliser du code, organiser proprement les tests et partager des attributs et méthodes." },
        { type: "note", variant: "info", title: "Règles courantes", text: "Une classe de test commence par Test (ex : TestUser). Une méthode de test commence par test_. Si ton application contient plusieurs classes → créer plusieurs classes de test séparées." },
      ],
    },
    {
      id: "tests-contexte-setup-teardown",
      title: "Gestion du contexte des tests",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│           CYCLE DE VIE D'UN TEST                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│   setup()       ──►  TEST  ──►  teardown()          │
│   (avant)              │        (après)             │
│                        │                            │
│   Prépare l'env.       │        Nettoie             │
│   Crée données         │        Supprime données    │
│   Init objets          │        temporaires         │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "setup()" },
        { type: "list", items: [
          "Exécutée avant chaque test",
          "Permet de préparer l'environnement",
          "Exemple : créer des données, initialiser des objets",
        ]},
        { type: "h", text: "teardown()" },
        { type: "list", items: [
          "Exécutée après chaque test",
          "Permet de nettoyer",
          "Exemple : supprimer des données temporaires",
        ]},
        { type: "h", text: "Autres variantes" },
        { type: "table", headers: ["Fonction", "Niveau"], rows: [
          ["setup_module() / teardown_module()", "Module"],
          ["setup_class() / teardown_class()", "Classe"],
          ["setup() / teardown()", "Méthode (chaque test)"],
        ]},
      ],
    },
    {
      id: "tests-code-robuste",
      title: "Rendre son code robuste",
      blocks: [
        { type: "p", text: "Les tests servent à : vérifier que le code fonctionne correctement, éviter les bugs, prévenir les régressions et sécuriser les mises à jour." },
      ],
    },
    {
      id: "tests-types-vue-ensemble",
      title: "Types de tests — Vue d'ensemble",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                    PYRAMIDE DES TESTS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         /\\                                      │
│                        /  \\  Tests fonctionnels (E2E)           │
│                       / UI \\  → Simuler utilisateur réel        │
│                      /──────\\                                   │
│                     /        \\  Tests d'intégration             │
│                    / Intégrat. \\ → Plusieurs modules ensemble   │
│                   /────────────\\                                │
│                  /              \\  Tests unitaires              │
│                 /    Unitaires   \\ → Une seule fonction         │
│                /──────────────────\\                             │
│                                                                 │
│   Plus on monte : + lent, + complexe, + coûteux                │
│   Plus on descend : + rapide, + isolé, + ciblé                  │
└─────────────────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "tests-unitaires",
      title: "Tests unitaires",
      blocks: [
        { type: "p", text: "Les tests unitaires vérifient une petite partie du code (fonction, composant)." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: ["Testent une seule fonction", "Très rapides", "Isolés", "Faciles à automatiser"] },
        { type: "h", text: "Objectif" },
        { type: "list", items: ["Vérifier le comportement attendu", "Détecter les erreurs tôt", "Sécuriser les modifications"] },
      ],
    },
    {
      id: "tests-integration",
      title: "Tests d'intégration",
      blocks: [
        { type: "p", text: "Les tests d'intégration vérifient que plusieurs parties du système fonctionnent ensemble." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: [
          "Testent plusieurs modules ensemble",
          "Incluent parfois des API ou bases de données",
          "Plus complexes que les tests unitaires",
        ]},
        { type: "h", text: "Objectif" },
        { type: "list", items: ["Vérifier la communication entre composants", "Détecter les erreurs d'interconnexion"] },
      ],
    },
    {
      id: "tests-fonctionnels",
      title: "Tests fonctionnels",
      blocks: [
        { type: "p", text: "Les tests fonctionnels vérifient un parcours utilisateur complet." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: [
          "Simulation d'un utilisateur réel",
          "Test de bout en bout (end-to-end)",
          "Se fait via interface (web ou mobile)",
        ]},
        { type: "h", text: "Objectif" },
        { type: "list", items: ["Valider que l'application fonctionne pour l'utilisateur final"] },
      ],
    },
    {
      id: "tests-mise-en-place",
      title: "Mettre en place des tests",
      blocks: [
        { type: "p", text: "Les tests sont des fichiers de code supplémentaires qui permettent de vérifier automatiquement le bon fonctionnement d'une application. Ils sont exécutés par des outils spécialisés (tests unitaires, tests d'intégration, tests fonctionnels)." },
        { type: "h", text: "Outils de tests" },
        { type: "table", headers: ["Outil", "Usage principal"], rows: [
          ["Jest", "Tests unitaires et tests d'intégration (JavaScript)"],
          ["Playwright", "Tests fonctionnels end-to-end, simulation navigateur"],
          ["Vitest", "Tests unitaires JavaScript moderne (avec Vite)"],
          ["Mocha", "Tests Node.js (unitaires + intégration)"],
          ["Pytest", "Tests Python (unitaires + intégration)"],
        ]},
        { type: "code", filename: "example.test.jsx", language: "jsx", code: `describe('Test Suites', () => {
  it('should return 10', () => {
    expect(moyenne([5, 10, 15])).toEqual(10)
  })
})` },
        { type: "p", text: "Playwright : tests fonctionnels (end-to-end), simulation d'un utilisateur réel dans un navigateur." },
        { type: "note", variant: "info", title: "Intérêt des tests", text: "Si la fonction change ou casse → le test échoue automatiquement → on détecte une régression." },
        { type: "h", text: "Exécution des tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `npm run test` },
        { type: "code", filename: "package.json", language: "json", code: `"scripts": {
  "test": "jest"
}` },
        { type: "h", text: "Intégration dans le déploiement CI/CD" },
        { type: "p", text: "Dans un pipeline (ex : GitLab CI), les tests sont exécutés automatiquement avant le déploiement." },
        { type: "code", filename: "ci.sh", language: "bash", code: `npm run test` },
        { type: "note", variant: "warning", title: "Important — avant de lancer les tests", text: "npm install jest" },
      ],
    },
    {
      id: "tests-types-logiciels",
      title: "Types de tests logiciels",
      blocks: [
        { type: "h", text: "Tests manuels" },
        { type: "p", text: "Test d'acceptation (Acceptance test) : vérifie que le système respecte les exigences métier." },
        { type: "list", items: [
          "Simule le comportement réel des utilisateurs",
          "Sert à valider si le produit est acceptable pour le client",
        ]},
        { type: "p", text: "Test de résilience (Resilience test) : vérifie que l'application continue de fonctionner même en cas de panne." },
        { type: "list", items: [
          "Simule des erreurs, pannes ou perturbations d'environnement",
          "Proche des tests de robustesse",
          "Exemple : chaos testing (type Netflix Chaos Monkey)",
        ]},
        { type: "h", text: "Tests automatisés" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Tests unitaires", "Tests de bas niveau. Vérifient fonctions, méthodes, classes. Rapides et très ciblés"],
          ["Tests d'intégration", "Vérifient l'interaction entre plusieurs modules. Détectent les problèmes de communication entre composants"],
          ["Tests fonctionnels", "Vérifient les résultats d'un processus. Ne s'intéressent pas aux états internes. Se concentrent sur le comportement attendu"],
          ["Tests End-to-End (E2E)", "Simulent un utilisateur réel. Testent tout le système de bout en bout. Vérifient les parcours complets (login, achat…)"],
        ]},
        { type: "h", text: "Tests de performance" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Test de charge (Load test)", "Simule un nombre d'utilisateurs défini. Vérifie le comportement sous charge normale ou prévue"],
          ["Test de stress (Stress test)", "Pousse le système au maximum. Détermine les limites de l'application"],
          ["Test de montée en charge (Scalability test)", "Augmente progressivement la charge. Identifie la limite de scalabilité"],
          ["Test de performance (Performance test)", "Mesure vitesse et fiabilité. Analyse temps de réponse et consommation de ressources"],
          ["Test de dégradation des transactions", "Analyse quelles transactions dégradent le système. Identifie les points faibles sous charge"],
          ["Test de fiabilité (Reliability test)", "Vérifie le comportement sur longue durée. Simule une utilisation intensive prolongée"],
          ["Test aux limites (Boundary test)", "Teste au-delà des capacités normales. Vérifie le comportement en surcharge extrême"],
        ]},
        { type: "h", text: "Tests de validation rapide" },
        { type: "p", text: "Test de fumée (Smoke test) : vérifie les fonctions principales après un build. Permet de savoir si un système est suffisamment stable pour continuer les tests." },
      ],
    },
    {
      id: "tests-qualite-code",
      title: "Tests et qualité du code",
      blocks: [
        { type: "h", text: "Types de tests (récapitulatif élargi)" },
        { type: "table", headers: ["Type", "Objectif principal"], rows: [
          ["Tests unitaires", "Vérifier une fonction ou un composant isolé. Rapides et automatisés"],
          ["Tests d'intégration", "Vérifier l'interaction entre plusieurs composants"],
          ["Tests End-to-End (E2E)", "Simuler un parcours utilisateur complet"],
          ["Tests de régression", "Vérifier qu'une modification n'a pas cassé l'existant"],
          ["Tests de performance", "Mesurer temps de réponse, stabilité sous charge, consommation ressources"],
          ["Tests de sécurité", "Détecter les vulnérabilités (HTTPS, injections, accès non autorisés)"],
          ["Tests d'acceptation", "Valider que le logiciel répond aux besoins métier"],
          ["Tests d'accessibilité", "Vérifier la conformité aux normes WCAG, ARIA (clavier, contraste, lecteurs d'écran)"],
        ]},
        { type: "h", text: "Phases de test" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                  PHASES DE TEST                         │
├──────────────────┬──────────────────────────────────────┤
│ CAS NORMAUX      │ Données valides                      │
│                  │ Comportement attendu                  │
├──────────────────┼──────────────────────────────────────┤
│ CAS INATTENDUS   │ Données invalides                    │
│                  │ Actions imprévues                     │
├──────────────────┼──────────────────────────────────────┤
│ CAS LIMITES      │ Valeurs min/max                      │
│                  │ null / vides / extrêmes               │
└──────────────────┴──────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "tests-criticite-bugs",
      title: "Niveaux de criticité des bugs et types d'impact",
      blocks: [
        { type: "h", text: "Niveaux de criticité" },
        { type: "table", headers: ["Niveau", "Description"], rows: [
          ["Faible", "Le programme continue de fonctionner"],
          ["Élevé", "Certaines fonctionnalités sont impactées"],
          ["Critique", "Le programme est bloqué"],
        ]},
        { type: "h", text: "Types d'impact" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Fonctionnel", "Impact sur les fonctionnalités"],
          ["Logique métier", "Erreur dans les règles métier"],
          ["Technique", "Problème de code ou dépendances"],
          ["Infrastructure", "Serveur, base de données, hébergement"],
          ["Sécurité", "Vulnérabilités exploitables"],
        ]},
      ],
    },
    {
      id: "tests-bugs-frequents",
      title: "Types de bugs fréquents",
      blocks: [
        { type: "h", text: "Web / Infrastructure" },
        { type: "list", items: [
          "Mauvaises URLs (absolues vs relatives)",
          "Fichiers manquants ou mal placés",
          "Problèmes de permissions",
          "Incompatibilité serveur (PHP, BDD…)",
          "Problèmes de configuration (.env, .htaccess)",
          "Cache navigateur / CDN",
          "Limites d'hébergement (taille fichiers, etc.)",
        ]},
        { type: "h", text: "Code" },
        { type: "list", items: ["Dépendances manquantes", "Config incorrecte", "Erreurs de compilation ou runtime"] },
        { type: "h", text: "Front-end" },
        { type: "p", text: "HTML/CSS : balises non fermées, CSS obsolète." },
        { type: "p", text: "UI : mauvais alignement, problème responsive." },
        { type: "p", text: "JavaScript / TypeScript : méthodes inexistantes, erreurs de scope, erreurs de type, DOM mal manipulé." },
        { type: "p", text: "API : endpoints inexistants, erreurs de requêtes, format de réponse incorrect (CORS, JSON…)." },
        { type: "p", text: "Performance : images non optimisées, trop de requêtes, boucles infinies." },
        { type: "p", text: "Accessibilité : manque d'ARIA, mauvais contraste, navigation clavier absente." },
      ],
    },
    {
      id: "tests-structure-erreur",
      title: "Structure d'un message d'erreur",
      blocks: [
        { type: "p", text: "Un bon message d'erreur contient : nom de l'erreur, message détaillé, fichier + ligne + colonne, stack trace (pile d'appels)." },
        {
          type: "diagram",
          content: `Type d'erreur (nom): Message d'erreur (détails)
at nomFonction (fichier: ligne : colonne)
at pile appel`,
        },
      ],
    },
    {
      id: "tests-importance",
      title: "Importance des tests",
      blocks: [
        { type: "list", items: [
          "Améliorent la qualité du logiciel",
          "Évitent les régressions",
          "Facilitent la maintenance",
          "Augmentent la confiance des développeurs",
          "Accélèrent le développement à long terme",
        ]},
        { type: "note", variant: "success", title: "Objectif global — les tests servent à garantir", text: "Fiabilité, stabilité, performance, sécurité, maintenabilité." },
      ],
    },
    {
      id: "tests-mocks",
      title: "Tests / Mocks en programmation web",
      blocks: [
        { type: "p", text: "Un mock est un objet simulé qui permet de remplacer un vrai appel (souvent HTTP) pendant les tests." },
        { type: "p", text: "Un mock permet :" },
        { type: "list", items: [
          "D'imposer le comportement d'une fonction ou d'un objet",
          "De simuler des variables, objets ou réponses API",
          "De fournir une réponse prédéfinie",
        ]},
        { type: "code", filename: "mock-response.json", language: "json", code: `{
  "id": 1,
  "title": "Mock post",
  "body": "Ceci est une réponse simulée"
}` },
        { type: "h", text: "Avantages des mocks" },
        { type: "p", text: "1. Gain de performance : pas d'appel réel au serveur, pas de latence réseau, tests beaucoup plus rapides." },
        { type: "p", text: "2. Stabilité : pas dépendant d'une API externe, pas de panne serveur, résultats toujours identiques." },
        { type: "p", text: "3. Contrôle total : on décide exactement de la réponse, on teste des cas précis (erreur, succès, timeout)." },
        { type: "h", text: "Comparaison Appel réel vs Mock" },
        { type: "table", headers: ["Appel réel HTTP", "Mock"], rows: [
          ["Lent", "Rapide"],
          ["Dépend du serveur", "Indépendant"],
          ["Variable", "Prévisible"],
          ["Peut échouer", "Stable"],
        ]},
      ],
    },
    {
      id: "tests-framework-vitest",
      title: "Framework — Vitest",
      blocks: [
        { type: "p", text: "Vitest est un framework de test JavaScript moderne (très rapide) utilisé principalement avec Vite. Il permet de tester du code (fonctions, composants, API) pour vérifier son bon fonctionnement." },
        { type: "h", text: "Installation & configuration" },
        { type: "p", text: "1. Création d'un projet Vite" },
        { type: "code", filename: "setup.sh", language: "bash", code: `npm create vite@latest mon-projet
cd mon-projet
npm install` },
        { type: "p", text: "2. Installer Vitest" },
        { type: "code", filename: "install-vitest.sh", language: "bash", code: `npm install -D vitest` },
        { type: "p", text: "3. Ajouter le script de test dans package.json" },
        { type: "code", filename: "package.json", language: "json", code: `"scripts": {
  "test": "vitest"
}` },
        { type: "p", text: "4. Lancer les tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `npm run test` },
        { type: "h", text: "Structure d'un test" },
        { type: "code", filename: "math.test.jsx", language: "jsx", code: `import { describe, it, expect } from 'vitest'

describe('Math utils', () => {
  it('should add two numbers', () => {
    expect(1 + 2).toBe(3)
  })
})` },
        { type: "h", text: "Tester une fonction — Exemple complet" },
        { type: "code", filename: "utils.js", language: "jsx", code: `// utils.js
export function add(a, b) {
  return a + b
}` },
        { type: "code", filename: "utils.test.js", language: "jsx", code: `// utils.test.js
import { describe, it, expect } from 'vitest'
import { add } from './utils'

describe('add()', () => {
  it('ajoute deux nombres', () => {
    expect(add(2, 3)).toBe(5)
  })
})` },
        { type: "h", text: "Assertions (méthodes importantes)" },
        { type: "table", headers: ["Méthode", "Utilité"], rows: [
          ["toBe(value)", "Comparaison stricte (===)"],
          ["toEqual(obj)", "Comparaison d'objets"],
          ["toContain(item)", "Vérifie un élément dans un tableau"],
          ["toBeTruthy()", "Vrai"],
          ["toBeFalsy()", "Faux"],
          ["toThrow()", "Vérifie une erreur"],
        ]},
        { type: "h", text: "Test asynchrone" },
        { type: "code", filename: "fetchUser.js", language: "jsx", code: `// fetchUser.js
export async function fetchUser() {
  return await Promise.resolve({ name: 'Kat' })
}

// fetchUser.test.js
import { fetchUser } from './fetchUser'

it('retourne un utilisateur', async () => {
  const user = await fetchUser()
  expect(user.name).toBe('Kat')
})` },
        { type: "h", text: "Mocking (simuler des dépendances)" },
        { type: "p", text: "Manuel :" },
        { type: "code", filename: "greet.jsx", language: "jsx", code: `export function greet(api) {
  return \`Bonjour \${api.getName()}\`
}

import { it, expect } from 'vitest'
import { greet } from './greet'

it("greet utilise le nom de l'API", () => {
  const fakeApi = { getName: () => 'Kat' }
  expect(greet(fakeApi)).toBe('Bonjour Kat')
})` },
        { type: "p", text: "Avec vi.fn() :" },
        { type: "code", filename: "mockfn.jsx", language: "jsx", code: `import { vi, it, expect } from 'vitest'

it('fonction mockée', () => {
  const mockFn = vi.fn(() => 42)
  expect(mockFn()).toBe(42)
  expect(mockFn).toHaveBeenCalled()
})` },
        { type: "h", text: "Tester les erreurs" },
        { type: "code", filename: "div.jsx", language: "jsx", code: `function div(a, b) {
  if (b === 0) throw new Error('Division par zéro')
  return a / b
}

import { it, expect } from 'vitest'

it('doit jeter une erreur', () => {
  expect(() => div(10, 0)).toThrow('Division par zéro')
})` },
        { type: "h", text: "Coverage (couverture de tests)" },
        { type: "code", filename: "coverage.sh", language: "bash", code: `npx vitest run --coverage` },
        { type: "p", text: "Configuration optionnelle :" },
        { type: "code", filename: "vitest.config.js", language: "jsx", code: `export default {
  test: {
    coverage: {
      reporter: ['text', 'html']
    }
  }
}` },
      ],
    },
    {
      id: "tests-framework-mocha",
      title: "Framework — Mocha (Node.js)",
      blocks: [
        { type: "h", text: "Fonctionnalités principales" },
        { type: "list", items: [
          "Exécution des tests avec Node.js",
          "Exécution possible dans un navigateur",
          "Support des promesses (async/await)",
          "Génération de rapports de tests",
          "Facilité d'écriture des cas de test",
          "Détection des tests lents",
        ]},
        { type: "h", text: "Installation de Mocha" },
        { type: "code", filename: "install.sh", language: "bash", code: `# Installation globale
npm install -g mocha

# Installation locale (recommandé)
npm install mocha --save-dev` },
        { type: "p", text: "Ajouté dans les dépendances de développement du projet." },
        { type: "h", text: "Structure d'un projet de test Mocha" },
        { type: "code", filename: "init.sh", language: "bash", code: `mkdir mocha_test
cd mocha_test
npm init -y` },
        { type: "p", text: "Structure recommandée :" },
        {
          type: "diagram",
          content: `mocha_test/
├── test/
│   └── demoTest.js
├── services/
│   └── format.js
├── package.json`,
        },
        { type: "p", text: "Mocha recherche automatiquement les fichiers dans le dossier test/." },
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "package.json", language: "json", code: `"scripts": {
  "test": "mocha"
}` },
        { type: "code", filename: "run.sh", language: "bash", code: `npm test` },
        { type: "h", text: "Écriture d'un premier test" },
        { type: "p", text: "Mocha utilise une syntaxe simple basée sur describe() → groupe de tests et it() → cas de test." },
        { type: "code", filename: "demoTest.js", language: "jsx", code: `// demoTest.js
const assert = require("assert");

describe("Mon premier test", function () {
  it("doit retourner 2 quand on additionne 1 + 1", function () {
    assert.strictEqual(1 + 1, 2);
  });
});` },
        { type: "h", text: "Assertion avec Node.js" },
        { type: "code", filename: "assert.jsx", language: "jsx", code: `assert.strictEqual(valeur, resultatAttendu, "Message en cas d'erreur");` },
        { type: "h", text: "Échec d'un test" },
        { type: "p", text: "Si on change la valeur attendue :" },
        { type: "code", filename: "fail.jsx", language: "jsx", code: `assert.strictEqual(1 + 1, 3);` },
        { type: "p", text: "Le test échoue automatiquement et Mocha affiche : l'erreur, le test concerné, le message d'échec." },
        { type: "h", text: "Exemple de module à tester" },
        { type: "code", filename: "services/format.js", language: "jsx", code: `// services/format.js
function format(str) {
  return str.replace(/ /g, "_");
}
module.exports = format;` },
        { type: "code", filename: "demoTest.js", language: "jsx", code: `// demoTest.js
const assert = require("assert");
const format = require("../services/format");

describe("Format module", function () {
  it("remplace les espaces par des underscores", function () {
    assert.strictEqual(format("hello world"), "hello_world");
  });
});` },
        { type: "h", text: "Bonnes pratiques Mocha" },
        { type: "list", items: [
          "Nommer clairement les tests",
          "Tester une seule fonctionnalité par it()",
          "Utiliser des assertions précises",
          "Séparer code métier et tests",
          "Écrire les tests en anglais (souvent recommandé)",
        ]},
        { type: "h", text: "Ressources utiles" },
        { type: "list", items: [
          "Node.js assert : https://nodejs.org/api/assert.html",
          "Chai (alternative d'assertions) : https://www.chaijs.com/api/assert/",
          "Mocha documentation : https://mochajs.org/",
        ]},
      ],
    },
    {
      id: "tests-pytest",
      title: "Pytest",
      blocks: [
        { type: "h", text: "Installation" },
        { type: "code", filename: "install.sh", language: "bash", code: `pip install pytest

# Vérifier version
pytest --version` },
        { type: "p", text: "Exemple simple :" },
        { type: "code", filename: "test_sqrt.py", language: "python", code: `import math

def test_sqrt():
    num = 25
    assert math.sqrt(num) == 5` },
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `pytest` },
        { type: "h", text: "Plusieurs tests" },
        { type: "code", filename: "test_sqrt2.py", language: "python", code: `import math

def test_sqrt_ok():
    assert math.sqrt(25) == 5

def test_sqrt_ko():
    assert math.sqrt(25) == 6` },
        { type: "h", text: "Tester un échec volontaire" },
        { type: "p", text: "Sert à vérifier que le test détecte bien les erreurs." },
        { type: "code", filename: "test_sqrt_ko.py", language: "python", code: `def test_sqrt_ko():
    assert math.sqrt(25) != 6` },
      ],
    },
    {
      id: "tests-python-approches",
      title: "Python — Tests (doctest, unittest, setup/teardown)",
      blocks: [
        { type: "p", text: "Les tests servent à vérifier que ton code fonctionne correctement. On distingue trois approches : doctest (tests dans les docstrings), unittest (classes de test), pytest (outil moderne le plus utilisé)." },
        { type: "h", text: "1. Doctest (tests dans les docstrings)" },
        { type: "list", items: [">>> simule une commande Python", "Le résultat attendu est écrit juste en dessous"] },
        { type: "code", filename: "add.py", language: "python", code: `def add(a, b):
    """
    >>> add(2, 2)
    4
    """
    return a + b` },
        { type: "p", text: "Lancer les tests :" },
        { type: "code", filename: "run-doctest.sh", language: "bash", code: `python -m doctest nomTest.py -v` },
        { type: "h", text: "2. Unittest (tests avec classes)" },
        { type: "p", text: "assert vérifie une condition, si faux → le test échoue." },
        { type: "code", filename: "test_class.py", language: "python", code: `class TestClass:
    def test_ok(self):
        assert 2 == 2` },
        { type: "h", text: "3. Setup et teardown (Python)" },
        { type: "list", items: ["setup_method → avant chaque test", "teardown_method → après chaque test"] },
        { type: "code", filename: "test_setup_teardown.py", language: "python", code: `class TestClass:

    def setup_method(self, method):
        print("Setup method")

    def teardown_method(self, method):
        print("Teardown method")

    def test_ok(self):
        assert 2 == 2` },
        { type: "p", text: "Lancer les tests :" },
        { type: "code", filename: "run.sh", language: "bash", code: `python nom_test.py -s` },
      ],
    },
    {
      id: "tests-tdd",
      title: "Test-Driven Development (TDD)",
      blocks: [
        { type: "p", text: "La méthodologie TDD (Test-Driven Development) est une façon spécifique de créer un programme, dans laquelle les tests sont écrits avant la méthode testée." },
        { type: "p", text: "Au-delà du code en lui-même, c'est un processus de réflexion qui va faire travailler le développeur sur la logique du programme : pourquoi devrait-il faire cela, quel devrait être son comportement quand tel ou tel cas se présente ?" },
        { type: "p", text: "Le résultat est que chaque scénario doit être envisagé. Ensuite, une fois plusieurs cas de test créés, la méthode réellement testée peut être écrite." },
        { type: "h", text: "Red – Green – Refactor !" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│              CYCLE TDD : RED → GREEN → REFACTOR         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌──────────┐      ┌──────────┐      ┌──────────────┐ │
│   │  🔴 RED  │ ───► │ 🟢 GREEN │ ───► │  REFACTOR    │ │
│   └──────────┘      └──────────┘      └──────┬───────┘ │
│       │                                       │         │
│   Écrire le         Écrire la            Améliorer      │
│   test (il         fonctionnalité         le code       │
│   échoue)          (le test passe)        (no régress.) │
│       ▲                                       │         │
│       └───────────────────────────────────────┘         │
│                    Boucle continue                      │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Red : écrire le test. Quand le test existe mais que la fonctionnalité n'existe pas encore, le test échoue bien sûr.",
          "Green : écrire la fonctionnalité souhaitée. L'objectif est de faire passer le test.",
          "Refactor : maintenant que tout fonctionne, améliorer le code. L'accent peut être mis sur les répétitions, le respect des standards du langage…",
        ]},
        { type: "note", variant: "info", text: "Et le cycle boucle à nouveau vers la phase red ! L'un des objectifs de ce cycle est de traiter une petite étape à la fois." },
        { type: "h", text: "Pourquoi le TDD est-il nécessaire ?" },
        { type: "p", text: "Ce processus est une façon de penser. Généralement, quand un projet démarre, les premières étapes sont l'analyse des besoins utilisateurs. Dans un processus agile, des Cas d'Usage sont dessinés avec des critères d'acceptation — \"Que se passe-t-il quand tout va bien ? Que se passe-t-il quand une erreur est commise ?\". Ces critères sont une base parfaite pour le TDD." },
        { type: "h", text: "Comment créer des tests avant ce qu'ils testent ?" },
        { type: "p", text: "Exemple — fonction de division d'une calculatrice :" },
        { type: "code", filename: "test_calculator.py", language: "python", code: `import math
import pytest
import Calculator

class TestClass:

    def test_division_ok(self):
        cal = Calculator
        assert cal.divide(4, 2) == 2

    def test_division_should_throw_exception(self):
        cal = Calculator
        with pytest.raises(ZeroDivisionError):
            assert cal.divide(4, 0) == 5` },
        { type: "p", text: "Les deux tests échouent (phase RED — la fonction divide n'existe pas encore)." },
        { type: "p", text: "Maintenant la phase green — écrire la fonctionnalité :" },
        { type: "code", filename: "calculator.py", language: "python", code: `def divide(a, b):
    return a / b` },
        { type: "p", text: "Résultat : les deux tests passent ✅" },
        { type: "p", text: "Quant au refactor : il devrait s'agir, par exemple, de placer la fonction divide dans une classe." },
        { type: "h", text: "Test de non-régression" },
        { type: "p", text: "Chaque fois qu'un nouveau cycle TDD est effectué, chaque test créé doit être relancé. C'est ce qu'on appelle un test de non-régression." },
        { type: "p", text: "Comme le développement se fait une petite étape à la fois, il est utile de lancer les tests pour s'assurer que le nouveau développement n'a pas cassé les précédents. Chaque test réalisé lors d'un cycle précédent doit passer. Si ce n'est pas le cas, le bug doit être trouvé et le code corrigé." },
        { type: "list", items: [
          "Le TDD est une façon de découper le développement en petites briques",
          "Le cycle red-green-refactor apporte de la qualité au code",
        ]},
      ],
    },
  {
      id: "vitest-vue-intro",
      title: "Vitest + Vue Test Utils — Introduction et premier test",
      blocks: [
        { type: "p", text: "Vitest est un framework de test unitaire nativement intégré à Vite, conçu pour être rapide et compatible avec l'écosystème Vue. Il partage la même configuration que Vite (résolution de modules, plugins, alias) et propose une API très proche de Jest." },
        { type: "h", text: "Installation" },
        { type: "code", filename: "install-vitest.sh", language: "bash", code: `npm install -D vitest
# ou
yarn add -D vitest` },
        { type: "p", text: "Pour tester des composants Vue, on ajoute également @vue/test-utils :" },
        { type: "code", filename: "install-vue-test-utils.sh", language: "bash", code: `npm install -D @vue/test-utils
# ou
yarn add -D @vue/test-utils` },
        { type: "h", text: "Configuration dans package.json" },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "test": "vitest"
  }
}` },
        { type: "h", text: "Premier test" },
        { type: "p", text: "Un test Vitest se compose d'une fonction test() (ou it()) qui prend un nom descriptif et une fonction de test, à l'intérieur de laquelle on utilise expect() pour formuler des assertions." },
        { type: "code", filename: "example.test.js", language: "javascript", code: `import { test, expect } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})` },
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `npm run test` },
        { type: "p", text: "Par défaut, Vitest se lance en mode watch : il surveille les fichiers et relance automatiquement les tests concernés à chaque modification." },
        { type: "h", text: "Interface graphique Vitest UI" },
        { type: "code", filename: "install-ui.sh", language: "bash", code: `npm install -D @vitest/ui` },
        { type: "code", filename: "run-ui.sh", language: "bash", code: `npx vitest --ui` },
        { type: "p", text: "Vitest UI ouvre un tableau de bord dans le navigateur listant tous les tests, leur statut (succès/échec) et le détail des assertions — pratique pour visualiser rapidement l'état d'une suite de tests." },
        { type: "h", text: "Les matchers principaux" },
        { type: "table", headers: ["Matcher", "Utilité"], rows: [
          ["toBe(valeur)", "Comparaison stricte (===)"],
          ["toEqual(objet)", "Comparaison profonde d'objets/tableaux"],
          ["toBeTruthy() / toBeFalsy()", "Vérifie qu'une valeur est vraie/fausse"],
          ["toContain(élément)", "Vérifie qu'un tableau ou une chaîne contient un élément"],
          ["toHaveProperty(clé)", "Vérifie qu'un objet possède une propriété"],
          ["toThrow()", "Vérifie qu'une fonction lève une exception"],
        ]},
      ],
    },
    {
      id: "vitest-vue-test-utils-mount",
      title: "Vue Test Utils — Monter et tester un composant",
      blocks: [
        { type: "p", text: "@vue/test-utils fournit la fonction mount() pour instancier un composant Vue dans un environnement de test, en simulant son rendu et en donnant accès à une API pour interagir avec lui (classes, texte, événements)." },
        { type: "h", text: "Composant testé — NotificationToast.vue" },
        { type: "p", text: "Un composant de notification qui affiche un message, se masque quand le message est vide (classe notification--slide) et émet un événement clear-notification au clic sur le bouton de fermeture." },
        { type: "h", text: "Test 1 — masquer la notification quand le message est vide" },
        { type: "code", filename: "NotificationToast.test.js", language: "javascript", code: `import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import NotificationToast from '../NotificationToast.vue'

test('notification slides up when message is empty', () => {
  const message = ''
  const wrapper = mount(NotificationToast, {
    props: { message },
  })
  expect(wrapper.classes('notification--slide')).toBe(false)
})` },
        { type: "p", text: "wrapper.classes(nomClasse) retourne un booléen indiquant si l'élément racine du composant possède cette classe CSS." },
        { type: "h", text: "Test 2 — émettre un événement au clic sur le bouton de fermeture" },
        { type: "p", text: "Ce test est asynchrone car trigger() déclenche un événement qui renvoie une promesse — il faut attendre sa résolution avant de vérifier les changements qu'il provoque." },
        { type: "code", filename: "NotificationToast.test.js", language: "javascript", code: `test('emits event when close button is clicked', async () => {
  const wrapper = mount(NotificationToast, {
    data() {
      return {
        clicked: false
      }
    }
  })
  const closeButton = wrapper.find('button')
  await closeButton.trigger('click')
  expect(wrapper.emitted()).toHaveProperty('clear-notification')
})` },
        { type: "table", headers: ["Méthode", "Rôle"], rows: [
          ["wrapper.find(sélecteur)", "Similaire à querySelector — accepte classe, id ou attribut, renvoie un élément"],
          ["élément.trigger(événement)", "Déclenche un événement (click, focus, blur, keydown…), renvoie une promesse"],
          ["wrapper.emitted()", "Renvoie un objet listant tous les événements émis par le composant"],
        ]},
        { type: "h", text: "Test 3 — afficher le bon message" },
        { type: "code", filename: "NotificationToast.test.js", language: "javascript", code: `test('renders correct message to viewer', () => {
  const message = 'Something happened, try again'
  const wrapper = mount(NotificationToast, {
    props: { message },
  })
  expect(wrapper.find('p').text()).toBe(message)
})` },
        { type: "p", text: "wrapper.find('p').text() extrait le contenu textuel de l'élément, de façon similaire à innerText en JavaScript natif. On préfère parfois cibler une classe ou un attribut plutôt que la balise elle-même si plusieurs éléments du même type existent dans le composant." },
      ],
    },
    {
      id: "vitest-mocking-api-axios",
      title: "Vitest — Simuler (mock) des appels API avec Axios",
      blocks: [
        { type: "p", text: "Le mocking est une technique utilisée en test logiciel pour simuler le comportement d'objets ou de systèmes externes dont dépend le code testé, afin d'isoler ce code des variables hors de son contrôle (connexions réseau, services externes)." },
        { type: "note", variant: "info", text: "Les mocks permettent de tester le code de manière plus approfondie et plus fiable, sans dépendre de la disponibilité ou du comportement réel des services externes." },
        { type: "h", text: "Composant testé — PostCard.vue (appel API avec Axios)" },
        { type: "code", filename: "install-axios.sh", language: "bash", code: `npm install axios
#or
yarn add axios` },
        { type: "code", filename: "src/components/PostCard.vue", language: "html", code: `<template>
  <div>
    <div v-if="post">
      <h1 data-testid="post-title">{{ post.title }}</h1>
      <p data-testid="post-body">{{ post.body }}</p>
    </div>
    <p v-if="loading" data-testid="loader">Loading...</p>
    <p v-if="error" data-testid="error-message">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const post = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPost = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    post.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>` },
        { type: "p", text: "Le composant importe Vue et Axios, crée trois variables d'état (post, loading, error), définit une fonction fetchPost() qui récupère un article via l'API JSONPlaceholder et met à jour l'état en conséquence, puis appelle cette fonction au montage du composant. Le template affiche titre et corps de l'article en tenant compte des états loading et error." },
        { type: "h", text: "Ce qu'on va tester" },
        { type: "list", items: [
          "L'application effectue une requête API avec succès et affiche les bonnes données",
          "L'application gère correctement les erreurs et affiche un message d'erreur si la requête échoue",
        ]},
        { type: "note", variant: "info", text: "On peut tester ces deux cas sans jamais effectuer de véritable appel réseau vers le serveur JSONPlaceholder — c'est tout l'intérêt du mocking." },
        { type: "h", text: "Réponse simulée et suite de tests" },
        { type: "code", filename: "src/components/tests/PostCard.test.js", language: "javascript", code: `import axios from "axios";
import { mount } from "@vue/test-utils";
import PostCard from "../PostCard.vue";

const mockPost = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto",
};

describe("Post Component", () => {
  // tests à suivre...
});` },
        { type: "p", text: "Pour intercepter la requête GET faite par Axios et lui faire renvoyer une valeur simulée (plutôt que d'appeler le vrai serveur), on utilise la fonction spyOn de Vitest, accessible via l'assistant vi importé depuis vitest (import { vi } from 'vitest')." },
      ],
    },
  ],
};
