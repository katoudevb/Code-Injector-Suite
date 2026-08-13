import type { Section } from "../types";
import { laConsolePython } from "./laConsolePython";

export const python: Section = {
  id: "python",
  title: "Python — Langage",
  icon: "FileCode",
  tags: ["python"],
  subsections: [
    {
      id: "py-tests-cycle-v",
      title: "Qualité et tests — Typologies (cycle en V)",
      blocks: [
        { type: "p", text: "Dans une démarche de développement logiciel, plusieurs types de tests existent." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                      CYCLE EN V — TESTS                         │
│                                                                 │
│  CONCEPTION          ◄────────────►     TESTS                   │
│                                                                 │
│  Spécifications ─────────────────────► Tests de recette         │
│                                                                 │
│  Architecture ───────────────────────► Tests de validation      │
│                                                                 │
│  Conception détaillée ───────────────► Tests d'intégration      │
│                                                                 │
│  Code ───────────────────────────────► Tests unitaires          │
└─────────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Tests unitaires" },
        { type: "list", items: [
          "Vérifient le bon fonctionnement de chaque unité de code : fonction, méthode, classe",
          "Généralement automatisés",
          "Objectif : tester une brique isolée du programme",
        ]},
        { type: "h", text: "Tests d'intégration" },
        { type: "list", items: [
          "Vérifient l'interaction entre plusieurs modules",
          "Généralement automatisés",
          "Objectif : s'assurer que les composants fonctionnent ensemble",
        ]},
        { type: "h", text: "Tests de validation" },
        { type: "list", items: [
          "Testent l'ensemble de l'application",
          "Réalisés dans un environnement proche de la production",
          "Souvent effectués par un humain",
          "Objectif : valider que le logiciel répond au besoin",
        ]},
        { type: "h", text: "Tests de recette" },
        { type: "list", items: [
          "Dernière étape de test",
          "Souvent côté client ou utilisateur final",
          "Réalisés dans un environnement réel ou simulé",
          "Objectif : accepter ou refuser le produit",
        ]},
        { type: "h", text: "Points communs des tests automatisés" },
        { type: "list", items: [
          "Ils font partie d'une suite de tests exécutables à tout moment",
          "Le résultat d'un test ne doit pas influencer les autres tests",
          "Ils ne doivent pas dépendre de données persistantes, ou utiliser un jeu de données de test contrôlé",
          "Ils doivent être reproductibles → ex : deux exécutions = même résultat",
        ]},
      ],
    },
    {
      id: "py-pytest",
      title: "La bibliothèque pytest",
      blocks: [
        { type: "p", text: "pytest est une librairie Python utilisée pour : écrire des tests simplement, les exécuter automatiquement, générer des rapports détaillés." },
        { type: "h", text: "Organisation des fichiers" },
        { type: "list", items: ["Les fichiers de test doivent commencer par test_", "exemple : test_code.py"] },
        { type: "h", text: "Écriture des tests avec pytest" },
        { type: "list", items: [
          "Un test est une fonction Python",
          "Elle commence souvent par test_",
          "Elle utilise le mot-clé assert",
        ]},
        { type: "code", filename: "test_code.py", language: "python", code: `def test_addition():
    assert 2 + 2 == 4` },
        { type: "h", text: "Résultat des tests" },
        { type: "list", items: [
          "Les erreurs sont affichées de manière détaillée : ligne exacte du problème, comparaison entre résultat attendu et obtenu",
          "Le terminal utilise souvent des couleurs : ✅ vert (test réussi), ❌ rouge (test échoué)",
        ]},
      ],
    },
    {
      id: "py-librairies-externes",
      title: "Librairies externes en Python",
      blocks: [
        { type: "p", text: "Une librairie externe est un ensemble de code déjà écrit, réutilisable. Elle sert à : créer des applications plus rapidement, éviter de tout réécrire soi-même, accéder à des fonctionnalités avancées." },
        { type: "h", text: "Caractéristiques principales" },
        { type: "list", items: [
          "Souvent en open source",
          "Maintenues par des communautés ou entreprises",
          "Faciles à installer et importer",
          "Permettent de gagner du temps en développement",
        ]},
        { type: "h", text: "Librairies importantes" },
        { type: "table", headers: ["Domaine", "Librairies"], rows: [
          ["IA / Machine Learning", "TensorFlow, PyTorch, Keras, scikit-learn"],
          ["Manipulation de données", "Pandas"],
          ["Calcul scientifique", "NumPy, SciPy, Theano (legacy)"],
          ["Requêtes HTTP", "requests"],
          ["Tests", "pytest, unittest"],
        ]},
        { type: "h", text: "Les tableaux (ndarray) — NumPy pour le calcul scientifique" },
        { type: "code", filename: "python", language: "python", code: `import numpy as np

tab = np.array([1, 2, 3, 4])
print(tab * 2)

a = np.arange(6)
print(a)
print(a)  # Résultat [0 1 2 3 4 5]` },
        { type: "h", text: "Installation et utilisation" },
        { type: "code", filename: "terminal", language: "bash", code: `# Installation
pip install nom-librairies

# Installer requests
pip install requests

# Importation
import numpy as np

# Lister les librairies installées
help("modules")` },
        { type: "h", text: "Utiliser une librairie externe" },
        { type: "p", text: "Une librairie externe est un ensemble de fonctions déjà prêtes à l'emploi." },
        { type: "code", filename: "python", language: "python", code: `import numpy as np` },
      ],
    },
    {
      id: "py-pep8",
      title: "Normes PEP (PEP 8)",
      blocks: [
        { type: "p", text: "Les normes PEP sont des conventions qui définissent comment écrire du code Python propre et lisible." },
        { type: "note", variant: "info", text: "Ressource officielle : https://peps.python.org/pep-0008/" },
        { type: "h", text: "Espaces (indentation et syntaxe)" },
        { type: "code", filename: "python", language: "python", code: `✅  x = 5 + 3          ← espaces autour des opérateurs
❌  x=5+3

✅  print(x)           ← pas d'espace après parenthèse
❌  print( x )

✅  if condition:       ← pas d'espace inutile après if, for, while
    ...` },
        { type: "list", items: [
          "Indentation obligatoire : 4 espaces",
          "Espaces inutiles après une parenthèse ouvrante",
          "Espaces inutiles entre un mot et un opérateur",
          "Espaces inutiles après if, for, while",
        ]},
        { type: "h", text: "Longueur des lignes" },
        { type: "list", items: [
          "Une ligne ne doit pas dépasser 79 caractères",
          "Si c'est trop long : on coupe la ligne, ou on utilise des parenthèses",
        ]},
        { type: "h", text: "Organisation du code" },
        { type: "list", items: ["2 lignes vides entre fonctions ou classes", "1 ligne vide entre méthodes dans une classe"] },
        { type: "h", text: "Convention de nommage" },
        { type: "table", headers: ["Élément", "Convention"], rows: [
          ["Variables", "snake_case"],
          ["Fonctions", "snake_case"],
          ["Classes", "CamelCase"],
          ["Constantes", "UPPER_SNAKE_CASE"],
          ["Noms", "anglais recommandés"],
        ]},
      ],
    },
    {
      id: "py-structurer-code",
      title: "Structurer le code",
      blocks: [
        { type: "p", text: "Permet de rendre un programme plus propre, lisible et maintenable." },
        { type: "h", text: "Pourquoi structurer ?" },
        { type: "list", items: [
          "1. Identification des bugs — Les erreurs sont plus faciles à repérer, le code est mieux organisé → débogage plus rapide",
          "2. Code lisible et maintenable — Plus clair pour les autres développeurs, facilite les modifications et la collaboration",
          "3. Meilleures performances — Un code bien organisé peut être plus optimisé, les modules inutiles peuvent être séparés ou supprimés",
          "4. Documentation plus simple — Un code structuré est plus facile à documenter, moins de confusion lors de la compréhension du projet",
        ]},
        { type: "h", text: "1. Utiliser des paquets (packages)" },
        { type: "p", text: "Les paquets permettent de découper un projet en plusieurs parties : un module pour les utilisateurs, un module pour la base de données, un module pour les calculs." },
        { type: "h", text: "2. Diviser le code en modules" },
        { type: "p", text: "Un module est un fichier Python contenant du code réutilisable. Python permet d'importer facilement ces modules : import mon_module" },
        { type: "h", text: "3. Organisation typique d'un projet" },
        { type: "diagram", content: `mon_projet/
│
├── main.py
├── modules/
│   ├── calcul.py
│   ├── utilisateurs.py
│   └── base_de_donnees.py` },
      ],
    },
    {
      id: "py-variables",
      title: "Variable",
      blocks: [
        { type: "h", text: "Modifier une variable" },
        { type: "p", text: "En Python, une variable peut changer de valeur à tout moment :" },
        { type: "code", filename: "python", language: "python", code: `text = 'Hello World!'
print(text)

text = 'Changement!'
print(text)` },
        { type: "h", text: "Types de variables en Python" },
        { type: "p", text: "Python est un langage non typé strictement (on dit \"dynamiquement typé\") : tu n'as pas besoin de déclarer le type." },
        { type: "p", text: "1. Integer (int) — Nombres entiers (sans virgule) :" },
        { type: "code", filename: "python", language: "python", code: `age = 18` },
        { type: "p", text: "2. Float — Nombres décimaux :" },
        { type: "code", filename: "python", language: "python", code: `prix = 19.99` },
        { type: "p", text: "3. String (str) — Chaîne de caractères :" },
        { type: "code", filename: "python", language: "python", code: `nom = "Alice"` },
        { type: "p", text: "4. Booléen (bool) — Valeurs logiques :" },
        { type: "code", filename: "python", language: "python", code: `est_majeur = True` },
        { type: "p", text: "Deux valeurs possibles : True (vrai), False (faux)" },
      ],
    },
    {
      id: "py-listes",
      title: "Les listes",
      blocks: [
        { type: "p", text: "Une liste permet de regrouper plusieurs valeurs dans une seule variable." },
        { type: "code", filename: "python", language: "python", code: `jours_de_la_semaine = ["Lundi", "Mardi", "Mercredi"]` },
        { type: "list", items: ["Les crochets [] définissent une liste", "Les éléments sont séparés par des virgules"] },
        { type: "h", text: "Accéder à un élément" },
        { type: "p", text: "Chaque élément a une position (indice)." },
        { type: "code", filename: "python", language: "python", code: `print(jours_de_la_semaine[2])` },
        { type: "diagram", content: `┌─────────┬─────────┬───────────┐
│ indice 0│ indice 1│  indice 2 │
│ "Lundi" │ "Mardi" │"Mercredi" │
└─────────┴─────────┴───────────┘
  ↑ premier élément = indice 0` },
        { type: "list", items: ["0 → Lundi", "1 → Mardi", "2 → Mercredi"] },
        { type: "h", text: "Ajouter un élément" },
        { type: "p", text: "On utilise .append() — l'élément est ajouté à la fin de la liste :" },
        { type: "code", filename: "python", language: "python", code: `variable = ["valeur1", "valeur2"]
variable.append("valeur3")
print(variable)` },
        { type: "h", text: "Supprimer un élément" },
        { type: "p", text: "On utilise .remove() — supprime la première occurrence de la valeur :" },
        { type: "code", filename: "python", language: "python", code: `variable = ["valeur1", "valeur2", "valeur3"]
variable.remove("valeur2")
print(variable)` },
        { type: "h", text: "Fusionner deux listes" },
        { type: "p", text: "Méthode .extend() :" },
        { type: "code", filename: "python", language: "python", code: `variableA = ["valeur1"]
variableB = ["valeur2", "valeur3"]
variableA.extend(variableB)
print(variableA)` },
        { type: "p", text: "Méthode += :" },
        { type: "code", filename: "python", language: "python", code: `variableA = ["valeur1"]
variableB = ["valeur2", "valeur3"]
variableA += variableB
print(variableA)` },
        { type: "p", text: "Créer une nouvelle liste (ne modifie pas les listes d'origine) :" },
        { type: "code", filename: "python", language: "python", code: `variableA = ["valeur1"]
variableB = ["valeur2", "valeur3"]
variableC = variableA + variableB
print(variableC)` },
      ],
    },
    {
      id: "py-tuples",
      title: "Les tuples",
      blocks: [
        { type: "p", text: "Un tuple permet aussi de regrouper plusieurs valeurs, comme une liste mais il est non modifiable." },
        { type: "code", filename: "python", language: "python", code: `jours_de_la_semaine = ("Lundi", "Mardi", "Mercredi")` },
        { type: "list", items: ["Les parenthèses () définissent un tuple", "Les éléments sont séparés par des virgules"] },
        { type: "h", text: "Accéder à un élément" },
        { type: "p", text: "Comme pour les listes, on utilise un indice :" },
        { type: "code", filename: "python", language: "python", code: `print(jours_de_la_semaine[1])` },
        { type: "h", text: "Comparaison liste vs tuple" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│           LISTE vs TUPLE                    │
├──────────────────┬──────────────────────────┤
│  LISTE           │  TUPLE                   │
├──────────────────┼──────────────────────────┤
│  [ ]             │  ( )                     │
│  Modifiable      │  Non modifiable          │
│  .append()       │  Accès par indice seul   │
│  .remove()       │                          │
│  Usage général   │  Données fixes/constantes│
└──────────────────┴──────────────────────────┘`,
        },
      ],
    },
    {
      id: "py-conditions",
      title: "Les instructions conditionnelles",
      blocks: [
        { type: "h", text: "if" },
        { type: "p", text: "Elles permettent d'exécuter du code selon une condition (vrai ou faux)." },
        { type: "code", filename: "python", language: "python", code: `if 1 < 2:
    print("true")` },
        { type: "h", text: "else (sinon)" },
        { type: "p", text: "Le else s'exécute si la condition du if est fausse." },
        { type: "code", filename: "python", language: "python", code: `mot = "Mot"

if len(mot) > 5:
    print("Mot long")
else:
    print("Mot court")` },
        { type: "h", text: "elif (sinon si)" },
        { type: "p", text: "Permet de tester plusieurs conditions. Python teste les conditions dans l'ordre, dès qu'une condition est vraie → il s'arrête." },
        { type: "code", filename: "python", language: "python", code: `nom = "Python"

if nom == "Python":
    print("Python!")
elif nom == "Java":
    print("Java!")
else:
    print("NoCode...")` },
        { type: "h", text: "match (équivalent du switch)" },
        { type: "p", text: "Introduit en Python 3.10, plus lisible dans certains cas. _ = cas par défaut (comme else). Plus propre quand il y a beaucoup de cas." },
        { type: "code", filename: "python", language: "python", code: `nom = "Python"

match nom:
    case "Python":
        print("Python!!!")
    case "Java":
        print("Java!!!")
    case _:
        print("Non trouvé...")` },
        { type: "h", text: "Les opérateurs de comparaison" },
        { type: "p", text: "Ils servent à créer les conditions :" },
        { type: "table", headers: ["Opérateur", "Signification"], rows: [
          ["==", "égal"],
          ["!=", "différent"],
          ["<", "plus petit que"],
          [">", "plus grand que"],
          ["<=", "plus petit ou égal"],
          [">=", "plus grand ou égal"],
        ]},
      ],
    },
    {
      id: "py-boucles",
      title: "Les boucles",
      blocks: [
        { type: "p", text: "Une boucle permet de répéter plusieurs fois du code sans le réécrire." },
        { type: "h", text: "for (avec range)" },
        { type: "p", text: "Utilisée quand on connaît le nombre de répétitions." },
        { type: "code", filename: "python", language: "python", code: `for i in range(3):
    print("bonjour!")` },
        { type: "h", text: "for each (parcours de liste)" },
        { type: "p", text: "Permet de parcourir chaque élément d'une liste." },
        { type: "code", filename: "python", language: "python", code: `jours_de_la_semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

for jour in jours_de_la_semaine:
    print(jour)` },
        { type: "h", text: "while" },
        { type: "p", text: "Elle répète tant qu'une condition est vraie." },
        { type: "code", filename: "python", language: "python", code: `nbRepetition = 0

while nbRepetition < 5:
    print(nbRepetition)
    nbRepetition += 1` },
        { type: "note", variant: "warning", text: "Attention à la boucle infinie : toujours s'assurer que la condition deviendra fausse." },
        { type: "h", text: "Schéma comparatif des boucles" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│                  LES BOUCLES PYTHON                 │
├──────────────────┬──────────────────────────────────┤
│  for + range     │  for each           │  while      │
├──────────────────┼─────────────────────┼────────────┤
│  Nombre de       │  Parcours d'une     │  Condition │
│  répétitions     │  liste/séquence     │  vraie     │
│  connu           │                     │            │
│                  │                     │  ⚠️ infinie │
│  for i in        │  for x in liste:    │  si oubli  │
│  range(n):       │      ...            │  du +=     │
└──────────────────┴─────────────────────┴────────────┘`,
        },
      ],
    },
    {
      id: "py-commentaires-docstrings",
      title: "Commentaires et Docstrings",
      blocks: [
        { type: "h", text: "Commentaires" },
        { type: "code", filename: "python", language: "python", code: `# Ceci est un commentaire d'une seule ligne

"""Ceci est
un block de commentaire """` },
        { type: "h", text: "Les Docstrings" },
        { type: "p", text: "Les docstrings sont des commentaires spéciaux utilisés pour décrire une fonction, une classe ou un module." },
        { type: "list", items: [
          'Elles servent de "carte d\'identité" du code',
          "Elles sont utilisées pour la documentation automatique",
          "Elles apparaissent dans des outils comme PyCharm ou help()",
        ]},
        { type: "h", text: "Exemple de fonction documentée" },
        { type: "code", filename: "python", language: "python", code: `def add(a, b):
    """
    Additionne deux nombres.

    Args:
        a : le premier nombre
        b : le deuxième nombre

    Returns:
        La somme de a et b
    """
    return a + b

# Lire la docstring
help(add)` },
      ],
    },
    {
      id: "py-logging",
      title: "Le logging",
      blocks: [
        { type: "p", text: "Le logging permet d'enregistrer les événements importants d'un programme : erreurs, avertissements, informations. Chaque message est enregistré avec une date et une heure." },
        { type: "h", text: "1. Importer le logging" },
        { type: "code", filename: "python", language: "python", code: `import logging` },
        { type: "h", text: "Les niveaux de logs" },
        { type: "code", filename: "python", language: "python", code: `logging.warning("Un message d'avertissement")
logging.error("Un message d'erreur")
logging.critical("Un message critique")` },
        { type: "h", text: "Niveaux disponibles (du moins au plus critique)" },
        {
          type: "diagram",
          content: `┌────────────┬──────────────────────────────────────┐
│  NIVEAU    │  USAGE                               │
├────────────┼──────────────────────────────────────┤
│  DEBUG     │  Informations de débogage détaillées │
│  INFO      │  Confirmation de bon fonctionnement  │
│  WARNING   │  Quelque chose d'inattendu            │
│  ERROR     │  Erreur empêchant une fonction       │
│  CRITICAL  │  Erreur critique du programme        │
└────────────┴──────────────────────────────────────┘`,
        },
        { type: "h", text: "Enregistrer les logs dans un fichier" },
        { type: "p", text: "On peut sauvegarder les logs dans un fichier .log :" },
        { type: "code", filename: "python", language: "python", code: `import logging

logging.basicConfig(
    filename="newfile.log",
    format="%(asctime)s -%(levelname)s -%(message)s",
    datefmt="%d-%b-%y %H:%M:%S"
)` },
        { type: "p", text: "Cela ajoute : la date, le niveau du message, le message." },
        { type: "h", text: "Utiliser un logger" },
        { type: "code", filename: "python", language: "python", code: `logger = logging.getLogger()
logger.setLevel(logging.INFO)` },
        { type: "p", text: "INFO = niveau minimum enregistré" },
        { type: "h", text: "Exemple complet" },
        { type: "p", text: "Le résultat est affiché normalement, et un fichier newfile.log contient l'historique des opérations." },
        { type: "code", filename: "python", language: "python", code: `import logging

logging.basicConfig(
    filename="newfile.log",
    format="%(asctime)s -%(levelname)s -%(message)s",
    datefmt="%d-%b-%y %H:%M:%S"
)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def addInt(a, b):
    logger.info("opération " + str(a) + " + " + str(b))
    return a + b

print(addInt(4, 5))` },
        { type: "p", text: "Sortie dans newfile.log :" },
        { type: "code", filename: "newfile.log", language: "text", code: `28-Nov-2222:01:53 - INFO - opération 4+ 5
28-Nov-2222:01:59 - INFO - opération 55+ 5
28-Nov-2222:02:02 - INFO - opération 55+ 40
28-Nov-2222:02:07 - INFO - opération 525+ 406` },
      ],
    },
    {
      id: "py-environnement-virtuel",
      title: "Créer un environnement virtuel",
      blocks: [
        { type: "p", text: "Un environnement virtuel permet de : créer un espace isolé pour un projet, installer des packages sans impacter les autres projets, éviter les conflits de versions." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│                  ENVIRONNEMENTS VIRTUELS            │
│                                                     │
│  Système global Python                              │
│  ┌────────────────────────────────────────────┐     │
│  │  projet_A/  (venv)                         │     │
│  │  ├── numpy==1.21                           │     │
│  │  └── requests==2.26                        │     │
│  └────────────────────────────────────────────┘     │
│  ┌────────────────────────────────────────────┐     │
│  │  projet_B/  (venv)                         │     │
│  │  ├── numpy==1.24  ← version différente !   │     │
│  │  └── flask==2.3                            │     │
│  └────────────────────────────────────────────┘     │
│  → Pas de conflit entre projets                     │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Pré-requis" },
        { type: "list", items: ["Python installé", "pip installé (gestionnaire de paquets)"] },
        { type: "h", text: "2. Installer / mettre à jour pip" },
        { type: "code", filename: "terminal", language: "bash", code: `pip python -m ensurepip --upgrade` },
        { type: "note", variant: "info", text: "Plus d'infos : https://pip.pypa.io/en/latest/installation/" },
        { type: "h", text: "3. Créer l'environnement virtuel" },
        { type: "p", text: "Cela crée un dossier contenant un environnement isolé." },
        { type: "code", filename: "terminal", language: "bash", code: `python -m venv project_name` },
        { type: "h", text: "4. Activer l'environnement virtuel" },
        { type: "code", filename: "terminal", language: "bash", code: `# Sous Windows
project_name\\Scripts\\activate.bat

# Sous Unix
source project_name/bin/activate

(project_name)    # ← indique que l'env est actif` },
        { type: "h", text: "5. Installer des packages dans l'environnement" },
        { type: "p", text: "Le package est installé uniquement dans cet environnement." },
        { type: "code", filename: "terminal", language: "bash", code: `pip install numpy` },
        { type: "h", text: "6. Désactiver l'environnement" },
        { type: "code", filename: "terminal", language: "bash", code: `deactivate` },
      ],
    },
    {
      id: "py-classes",
      title: "Les classes",
      blocks: [
        { type: "p", text: "Une classe est un modèle qui permet de créer des objets." },
        { type: "h", text: "1. Définir une classe" },
        { type: "list", items: ["self représente l'objet lui-même", "Une classe regroupe attributs + méthodes"] },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    titre = ""
    nbPage = 0

    def description(self):
        return "Livre " + self.titre + " a " + str(self.nbPage) + " pages."` },
        { type: "h", text: "Créer des objets" },
        { type: "code", filename: "python", language: "python", code: `livre = Livre()
livre.nbPage = 5
livre.titre = "Dune"
print(livre.description())

# Autre objet
livre2 = Livre()
print(livre2.description())` },
      ],
    },
    {
      id: "py-constructeurs",
      title: "Les constructeurs (__init__)",
      blocks: [
        { type: "p", text: "Le constructeur permet d'initialiser un objet automatiquement." },
        { type: "h", text: "1. Constructeur simple" },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def __init__(self):
        pass` },
        { type: "h", text: "2. Constructeur avec paramètres" },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def __init__(self, titre, nbPage):
        self.titre = titre
        self.nbPage = nbPage` },
        { type: "h", text: "3. Paramètre par défaut" },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def __init__(self, titre, nbPage=0):
        self.titre = titre
        self.nbPage = nbPage` },
      ],
    },
    {
      id: "py-encapsulation",
      title: "Encapsulation (attributs privés)",
      blocks: [
        { type: "p", text: "On protège les données avec __ : __solde est privé (non accessible directement)." },
        { type: "code", filename: "python", language: "python", code: `class Compte:
    __solde = 0` },
        { type: "h", text: "Getter (lire une valeur)" },
        { type: "code", filename: "python", language: "python", code: `class Compte:
    __solde = 0

    def getSolde(self):
        return self.__solde` },
        { type: "h", text: "Setter (modifier une valeur)" },
        { type: "code", filename: "python", language: "python", code: `class Compte:
    __solde = 0

    def setSolde(self, solde):
        self.__solde = solde` },
        { type: "h", text: "Schéma encapsulation" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────┐
│              CLASSE Compte                    │
│                                               │
│   Attribut privé :  __solde = 0               │
│   (inaccessible de l'extérieur)               │
│                                               │
│   ┌─────────────────────────────────────┐     │
│   │  getter → getSolde()  → lit __solde │     │
│   │  setter → setSolde()  → modifie     │     │
│   └─────────────────────────────────────┘     │
│                     ▲                         │
│              Code extérieur                   │
│         (ne touche pas __solde direct)        │
└───────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "py-heritage",
      title: "L'héritage",
      blocks: [
        { type: "p", text: "L'héritage permet à une classe (fille) de récupérer : les attributs, les méthodes d'une autre classe (mère). Ça évite de répéter du code." },
        { type: "h", text: "Simple" },
        { type: "p", text: "Classe mère :" },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def __init__(self, titre, nbPage=0):
        self.titre = titre
        self.nbPage = nbPage

    def description(self):
        return "Mon livre " + self.titre + " a " + str(self.nbPage) + " pages"` },
        { type: "p", text: "Classe fille :" },
        { type: "code", filename: "python", language: "python", code: `class LivrePapier(Livre):
    def lire(self):
        print("Ouvrir le livre")` },
        { type: "p", text: "Utilisation : la classe fille hérite de Livre, elle peut utiliser description() sans la redéfinir." },
        { type: "code", filename: "python", language: "python", code: `l = LivrePapier("Dune")
print(l.description())
l.lire()` },
        { type: "h", text: "Redéfinir une méthode (override)" },
        { type: "p", text: "On peut modifier une méthode héritée." },
        { type: "p", text: "Classe mère :" },
        { type: "code", filename: "python", language: "python", code: `class Livre:
    def __init__(self, titre):
        self.titre = titre

    def description(self):
        return f"Livre :{self.titre}"` },
        { type: "p", text: "Classe fille avec modification — super() = appelle la classe mère, permet de réutiliser le constructeur parent :" },
        { type: "code", filename: "python", language: "python", code: `class LivrePapier(Livre):
    def __init__(self, titre, poids):
        super().__init__(titre)  # appel du constructeur parent
        self.poids = poids

    def description(self):
        return f"Livre papier :{self.titre}, poids :{self.poids}g"` },
        { type: "h", text: "En cascade" },
        { type: "p", text: "Une classe peut hériter d'une autre classe déjà héritée." },
        { type: "code", filename: "python", language: "python", code: `class A:
    def afficher(self):
        print("Classe A")

class B(A):
    def afficher(self):
        print("Classe B")

class C(B):
    def afficher(self):
        print("Classe C")

# C hérite de B
# B hérite de A
# C a accès à A indirectement` },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────┐
│         HÉRITAGE EN CASCADE            │
│                                        │
│   object  (base Python implicite)      │
│      │                                 │
│      ▼                                 │
│   Classe A                             │
│      │                                 │
│      ▼                                 │
│   Classe B (hérite de A)               │
│      │                                 │
│      ▼                                 │
│   Classe C (hérite de B, et de A)      │
└────────────────────────────────────────┘`,
        },
        { type: "h", text: "Multiple" },
        { type: "p", text: "Une classe peut hériter de plusieurs classes." },
        { type: "code", filename: "python", language: "python", code: `class A:
    def methode_A(self):
        print("Méthode de A")

class B:
    def methode_B(self):
        print("Méthode de B")

class C(A, B):
    def methode_C(self):
        print("Méthode de C")

# C peut utiliser les 3 méthodes` },
      ],
    },
    {
      id: "py-imports",
      title: "Les imports",
      blocks: [
        { type: "p", text: "L'import permet d'utiliser du code déjà existant : modules, paquets, fonctions ou classes. Cela évite de réécrire du code." },
        { type: "h", text: "Import d'un module précis" },
        { type: "code", filename: "python", language: "python", code: `from NomDuPaquet import NomDuModule` },
        { type: "h", text: "Import de tout un paquet (déconseillé)" },
        { type: "code", filename: "python", language: "python", code: `from NomDuPaquet import *` },
      ],
    },
    {
      id: "py-requetes-http",
      title: "Requêtes HTTP en Python",
      blocks: [
        { type: "h", text: "1. Librairie utilisée" },
        { type: "code", filename: "python", language: "python", code: `import requests` },
        { type: "h", text: "Exemple requête simple" },
        { type: "p", text: "requests.get() envoie une requête HTTP GET, response contient la réponse du serveur." },
        { type: "code", filename: "python", language: "python", code: `import requests

url = "https://www.google.com/"
response = requests.get(url)
print(response)` },
        { type: "h", text: "Exemple avec API (GET + JSON)" },
        { type: "p", text: ".json() transforme la réponse en dictionnaire Python." },
        { type: "code", filename: "python", language: "python", code: `import requests

url = "https://jsonplaceholder.typicode.com/todos/1"
response = requests.get(url)
print(response.json())` },
        { type: "h", text: "Mock" },
        { type: "p", text: "Le mock permet de simuler une requête HTTP sans Internet. Utile pour les tests unitaires." },
        { type: "p", text: "Fonction à tester :" },
        { type: "code", filename: "python", language: "python", code: `import requests

def find_todos_by_id(id):
    url = f"https://jsonplaceholder.typicode.com/todos/{id}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()['title']
    else:
        return None` },
        { type: "p", text: "Test avec mock :" },
        { type: "code", filename: "python", language: "python", code: `import unittest
from unittest.mock import MagicMock, patch

class TestTodos(unittest.TestCase):

    @patch('requests.get')
    def test_find_todos_by_id_success(self, mock_get):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem"
        }
        mock_get.return_value = mock_response

        self.assertEqual(find_todos_by_id(1), "delectus aut autem")` },
        { type: "h", text: "Schéma mock" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  FONCTIONNEMENT DU MOCK              │
│                                                      │
│  SANS MOCK                   AVEC MOCK               │
│                                                      │
│  test()                      test()                  │
│    │                           │                     │
│    ▼                           ▼                     │
│  requests.get() ──────►  mock_get() (simulé)         │
│    │                           │                     │
│    ▼                           ▼                     │
│  Internet ❌                  Fausse réponse ✅       │
│  (lent, peut échouer)         (contrôlée, rapide)    │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "py-operateurs",
      title: "Les opérateurs",
      blocks: [
        { type: "p", text: "Les opérateurs permettent de faire des calculs ou des comparaisons." },
        { type: "h", text: "Arithmétiques" },
        { type: "table", headers: ["Opérateur", "Signification", "Exemple"], rows: [
          ["+", "addition", "5 + 3 = 8"],
          ["-", "soustraction", "5 - 3 = 2"],
          ["*", "multiplication", "5 * 3 = 15"],
          ["/", "division", "5 / 2 = 2.5"],
          ["//", "division entière", "5 // 2 = 2"],
          ["%", "modulo (reste)", "5 % 2 = 1"],
          ["**", "puissance", "2 ** 3 = 8"],
        ]},
      ],
    },
    {
      id: "py-webscraping",
      title: "Webscraping avec Python (requests, BeautifulSoup)",
      blocks: [
        { type: "p", text: "Le webscraping est un processus automatisé consistant à récupérer des données d'un site web à partir de son adresse HTTP uniquement. Il est possible d'obtenir des pages HTML complètes, mais aussi de gérer des requêtes personnalisées comme récupérer et analyser des données partielles, tant que ces données ne sont pas soumises à des authentifications spéciales." },
        { type: "h", text: "L'outil requests" },
        { type: "code", filename: "scrape.py", language: "python", code: `import requests

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
page = requests.get(url)
print(page.content)` },
        { type: "p", text: "Ce code utilise la librairie requests. L'URL de la page Wikipédia est définie et la requête est effectuée. Le print sert à confirmer que les données ont bien été reçues." },
        { type: "note", variant: "warning", title: "Note légale", text: "Le webscraping est totalement légal. Il peut se faire sur des données publiquement disponibles sur Internet. Mais les données personnelles, ou protégées par des réglementations internationales, ne doivent pas être manipulées sans précaution juridique." },
        { type: "h", text: "Analyse des données (parsing)" },
        { type: "p", text: "Pour parser le HTML (découper, trier, chercher), la librairie Beautiful Soup est utile." },
        { type: "code", filename: "install.sh", language: "bash", code: `pip install beautifulsoup4` },
        { type: "code", filename: "scrape-soup.py", language: "python", code: `import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')
print(soup)` },
        { type: "code", filename: "find-p-tags.py", language: "python", code: `paras = soup.find_all("p")
print(paras)` },
        { type: "code", filename: "find-title.py", language: "python", code: `title = soup.title
print("Python" in title.string)` },
        { type: "code", filename: "count-occurrences.py", language: "python", code: `import requests
from bs4 import BeautifulSoup
import re

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

i = 0
matches = soup.find_all(string=re.compile("Python"))
print(len(matches))` },
        { type: "note", variant: "info", text: "La librairie re permet de formater une chaîne spéciale servant de base à la recherche. Le webscraping est une méthode efficace pour obtenir différents types de données, qui peuvent ensuite être recherchées, triées et analysées via diverses librairies comme re." },
      ],
    },
    {
      id: "py-multithreading",
      title: "Multithreading en Python",
      blocks: [
        { type: "p", text: "Un logiciel exécute généralement les instructions les unes après les autres. Mais parfois, le temps nécessaire pour exécuter une instruction est long, et l'instruction suivante peut être exécutée sans dépendre du résultat de la première." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│            SÉQUENTIEL vs MULTITHREADING                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SÉQUENTIEL :                                           │
│  ─────────────────────────────────────────────────────  │
│  [  Appel A (2s)  ] → [  Appel B (3s)  ]               │
│  Durée totale = 5s                                      │
│                                                         │
│  MULTITHREADING :                                       │
│  ─────────────────────────────────────────────────────  │
│  [  Appel A (2s)  ]                                     │
│  [  Appel B (3s)              ]                         │
│  Durée totale = max(A, B) = 3s                          │
│                                                         │
│  → Gain de temps si les tâches sont indépendantes      │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Le multithreading permet de créer et contrôler des flux d'exécution (threads) qui peuvent prendre et exécuter des processus, s'ils ne dépendent pas les uns des autres. Un thread peut être : lancé, mis en pause, mis en attente d'un événement, détruit après un événement…" },
        { type: "list", items: [
          "La programmation multithread peut entraîner un comportement étrange si elle est utilisée sans contrôle approprié",
          "Le multithreading permet une réduction du temps d'exécution",
        ]},
        { type: "h", text: "Classe Thread" },
        { type: "code", filename: "mon_thread.py", language: "python", code: `import threading
import time

class MonThread(threading.Thread):
    def __init__(self, number, end, time_sleep):
        threading.Thread.__init__(self)
        self.end = end
        self.time_sleep = time_sleep
        self.number = number

    def run(self):
        for i in range(0, self.end):
            print("thread number : ", self.number, ", value of i :", i)
            time.sleep(self.time_sleep)

m = MonThread(1, 6, 0.10)
m.start()
m2 = MonThread(2, 6, 0.20)
m2.start()` },
        { type: "p", text: "Une classe MonThread est créée, qui étend la classe Thread et redéfinit la méthode run. La seule différence entre les objets est leur numéro, et le time.sleep qui impose une pause avant de reprendre l'exécution." },
        { type: "code", filename: "resultat-console.txt", language: "bash", code: `thread number :  thread number :  2 , value of i : 0
 1 , value of i : 0
thread number :  1 , value of i : 1
thread number :  2 , value of i : 1
thread number :  1 , value of i : 2
thread number :  1 , value of i : 3
thread number :  2 , value of i : 2
thread number :  1 , value of i : 4
thread number :  1 , value of i : 5
thread number :  2 , value of i : 3
thread number :  2 , value of i : 4
thread number :  2 , value of i : 5

Process finished with exit code 0` },
        { type: "note", variant: "info", text: "La première ligne montre que les deux threads s'entremêlent. Après le premier et le second tour de boucle, le thread numéro 1 exécute deux fois sa boucle avant que le thread numéro 2 n'exécute la sienne une fois." },
      ],
    },
    ...laConsolePython,
  ],
};
