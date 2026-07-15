import type { Section } from "../types";

export const algorithmesIA: Section = {
  id: "algorithmes-ia",
  title: "Algorithmes & IA",
  icon: "Binary",
  tags: ["js", "python"],
  subsections: [
    {
      id: "algo-01-logique-programmation",
      title: "1. Logique de programmation / Algorithmes",
      blocks: [
        { type: "p", text: "La logique de programmation consiste à :" },
        { type: "list", items: [
          "organiser clairement les étapes d'un problème",
          "écrire un algorithme",
          "exécuter les actions sans erreur",
          "faciliter le développement et la réutilisation du code",
        ]},
        {
          type: "diagram",
          content: `FLUX GÉNÉRAL D'UN ALGORITHME
════════════════════════════════════════
  [ENTRÉES]  →  [TRAITEMENT]  →  [SORTIES]
  (données)     (algorithme)     (résultats)`,
        },
        { type: "h", text: "Étapes pour résoudre un problème" },
        {
          type: "diagram",
          content: `ÉTAPES DE RÉSOLUTION
════════════════════════════════════════════════════════
1. Analyser        →  Comprendre ce qu'on doit faire
                      Identifier entrées / sorties
       ↓
2. Décomposer      →  Découper en petites actions
                      Identifier les sous-problèmes
       ↓
3. Écrire          →  Organiser les étapes principales
   l'algorithme       Utiliser un pseudo-code clair
       ↓
4. Implémentation  →  Transformer l'algorithme en code
                      Choisir la structure adaptée
       ↓
5. Tester &        →  Vérifier les erreurs
   optimiser          Améliorer la performance
                      Optimiser mémoire et temps`,
        },
        { type: "h", text: "1. Analyser le problème" },
        { type: "list", items: ["comprendre ce qu'on doit faire", "identifier les entrées et sorties"] },
        { type: "h", text: "2. Décomposer le problème" },
        { type: "list", items: ["découper en petites actions", "identifier les sous-problèmes"] },
        { type: "h", text: "3. Écrire l'algorithme" },
        { type: "list", items: ["organiser les étapes principales", "utiliser un pseudo-code clair"] },
        { type: "h", text: "4. Implémentation" },
        { type: "list", items: ["transformer l'algorithme en code", "choisir la structure adaptée"] },
        { type: "h", text: "5. Tester et optimiser" },
        { type: "list", items: ["vérifier les erreurs", "améliorer la performance", "optimiser mémoire et temps"] },
      ],
    },
    {
      id: "algo-02-dynamic-programming",
      title: "2. Développement dynamique (Dynamic Programming)",
      blocks: [
        { type: "p", text: "Technique qui consiste à décomposer un problème récursif en sous-problèmes et à mémoriser les résultats." },
        {
          type: "diagram",
          content: `DYNAMIC PROGRAMMING — DEUX APPROCHES
════════════════════════════════════════════════════════

TOP-DOWN (récursif + mémorisation)        BOTTOM-UP (itératif + tabulation)
══════════════════════════                ═══════════════════════════════════
  Problème principal                        Résoudre les cas simples d'abord
         ↓                                         ↓
  Décomposer en sous-problèmes             Construire vers le problème final
         ↓                                         ↓
  Résoudre chaque sous-problème            Stocker les résultats (table)
         ↓                                         ↓
  Mémoriser le résultat (memo)             Lire la réponse finale
         ↓
  Réutiliser si déjà calculé`,
        },
        { type: "h", text: "Étapes du développement dynamique" },
        { type: "list", items: [
          "1. Identifier la sous-structure optimale : le problème peut être découpé en sous-problèmes",
          "2. Définir les cas de base : conditions initiales, cas simples",
          "3. Choisir la direction du traitement : Top-down (récursif + mémorisation) ou Bottom-up (itératif + tabulation)",
          "4. Concevoir la mémorisation : stocker les résultats déjà calculés",
          "5. Implémenter l'algorithme : écrire le code",
          "6. Analyser la complexité : temps d'exécution, mémoire utilisée",
          "7. Optimiser : réduire l'espace mémoire, améliorer la vitesse",
        ]},
      ],
    },
    {
      id: "algo-03-principes-algorithmie",
      title: "3. Les principes de l'algorithmie",
      blocks: [
        { type: "p", text: "Un algorithme est une suite d'instructions qui permet de résoudre un problème ou d'effectuer une tâche." },
        { type: "p", text: "Il prend :" },
        { type: "list", items: ["des entrées (données)", "effectue des traitements", "produit des sorties (résultats)"] },
        {
          type: "diagram",
          content: `SCHÉMA ENTRÉE / TRAITEMENT / SORTIE
════════════════════════════════════════════════════════
  ┌─────────┐     ┌──────────────────┐     ┌──────────┐
  │ ENTRÉES │ ──→ │   ALGORITHME     │ ──→ │ SORTIES  │
  │(données)│     │  (traitements)   │     │(résultats│
  └─────────┘     └──────────────────┘     └──────────┘`,
        },
        { type: "h", text: "Exemples d'algorithmes" },
        { type: "list", items: [
          "Recommandation musicale (à partir des écoutes précédentes, des goûts)",
          "Recherche sur Internet",
          "Exemple du quotidien (se lever, s'habiller, manger)",
          "Intelligence Artificielle (IA)",
        ]},
      ],
    },
    {
      id: "algo-04-machine-learning",
      title: "4. Machine Learning (apprentissage automatique)",
      blocks: [
        { type: "p", text: "Le Machine Learning est une branche de l'IA où les algorithmes apprennent à partir des données." },
        {
          type: "diagram",
          content: `MACHINE LEARNING vs ALGORITHME CLASSIQUE
════════════════════════════════════════════════════════

ALGORITHME CLASSIQUE           MACHINE LEARNING
═══════════════════            ════════════════
  Règles définies               Apprend des données
  fixes par humain                     ↓
        ↓                       Détecte un schéma
  Sortie prévisible              S'adapte automatiquement
                                 Ajuste les alertes/résultats`,
        },
        { type: "h", text: "Exemple concret" },
        { type: "p", text: "Un système de messagerie observe que le lundi matin il y a plus de mails car tout le monde ouvre sa boîte en même temps." },
        { type: "p", text: "L'algorithme ne suit pas des règles fixes, il apprend à partir de l'expérience :" },
        { type: "list", items: ["détecte un schéma", "s'adapte automatiquement", "ajuste les alertes"] },
      ],
    },
    {
      id: "algo-05-typologie",
      title: "5. La typologie des algorithmes",
      blocks: [
        { type: "p", text: "Un algorithme est une suite de règles permettant d'obtenir un résultat en sortie à partir de données en entrée." },
        { type: "code", filename: "text", language: "text", code: `Entrée → traitement → sortie` },
        { type: "h", text: "1. Logique algorithmique" },
        { type: "p", text: "Réfléchir et structurer les étapes nécessaires pour résoudre un problème." },
        { type: "h", text: "2. Représentation des algorithmes" },
        { type: "p", text: "Les algorithmes sont souvent représentés sous forme de :" },
        { type: "list", items: ["📋 instructions écrites", "🔀 diagrammes (logigrammes)", "🔢 suites d'étapes"] },
        {
          type: "diagram",
          content: `EXEMPLE DE LOGIGRAMME (diagramme de flux)
════════════════════════════════════════════
        ┌──────────┐
        │  DÉBUT   │
        └────┬─────┘
             ↓
        ┌──────────┐
        │ Lire age │
        └────┬─────┘
             ↓
        ┌────────────────┐
        │  age >= 18 ?   │
        └───┬───────┬────┘
           OUI      NON
            ↓        ↓
      ┌─────────┐  ┌─────────┐
      │ "Majeur"│  │"Mineur" │
      └────┬────┘  └────┬────┘
           └──────┬──────┘
                  ↓
             ┌────────┐
             │  FIN   │
             └────────┘`,
        },
        { type: "h", text: "3. Mise en place d'un algorithme" },
        { type: "p", text: "Créer un algorithme de tri correspond à reproduire une logique que l'humain ferait naturellement (comparer deux éléments, les échanger si nécessaire, répéter jusqu'à tout trier…)" },
        { type: "h", text: "4. Algorithmes complexes" },
        { type: "list", items: ["traitent des problèmes plus difficiles", "utilisent des logiques avancées", "nécessitent plus de ressources (mémoire, calcul)"] },
      ],
    },
    {
      id: "algo-06-interet",
      title: "6. L'intérêt d'un algorithme",
      blocks: [
        { type: "p", text: "Sert à résoudre un problème de manière rapide et efficace, même avec une grande quantité de données." },
        { type: "h", text: "Utilisation" },
        { type: "p", text: "Plus la logique de programmation est optimisée, plus :" },
        { type: "list", items: ["le traitement est rapide", "les résultats sont précis", "les ressources sont mieux utilisées"] },
      ],
    },
    {
      id: "algo-07-mettre-en-place",
      title: "7. Mettre en place un algorithme",
      blocks: [
        { type: "p", text: "Mettre en place un algorithme nécessite une réflexion logique de programmation." },
        { type: "p", text: "La programmation structurée est une base essentielle pour résoudre des problèmes en développement." },
      ],
    },
    {
      id: "algo-08-programmation-structuree",
      title: "8. Les étapes de la programmation structurée",
      blocks: [
        {
          type: "diagram",
          content: `LES 3 STRUCTURES DE BASE
════════════════════════════════════════════════════════════════
  1. SÉQUENCE          2. ALTERNATIVE         3. RÉPÉTITION
  ════════════         ════════════════        ════════════════
  Instruction 1        SI condition            TANT QUE cond
       ↓               ALORS                        instruction
  Instruction 2           action_A                  répéter
       ↓               SINON                  FIN TANT QUE
  Instruction 3           action_B
                       FIN SI                 POUR i de 0 à n
  (ordre du code)                                 instruction
                       Bifurcation             FIN POUR`,
        },
        { type: "h", text: "1. La séquence" },
        { type: "p", text: "Correspond à l'exécution des instructions les unes après les autres, dans l'ordre du code." },
        { type: "p", text: "Caractéristiques :" },
        { type: "list", items: [
          "chaque instruction est exécutée dans l'ordre",
          "le programme s'arrête en cas d'erreur",
          "les variables et fonctions doivent être définies avant utilisation",
        ]},
        { type: "h", text: "2. L'alternative (conditions)" },
        { type: "p", text: "Permet de choisir entre plusieurs chemins d'exécution selon une condition. C'est ce qui donne une forme « intelligente » au programme." },
        { type: "p", text: "Structure en Python :" },
        { type: "code", filename: "python", language: "python", code: `if condition:
    # action si vrai
elif autre_condition:
    # action si autre
else:
    # action par défaut` },
        { type: "h", text: "3. La répétition (boucles)" },
        { type: "p", text: "Correspond aux boucles — exécuter un bloc plusieurs fois." },
        { type: "p", text: "Une boucle infinie peut :" },
        { type: "list", items: ["bloquer un programme", "consommer énormément de ressources", "provoquer des erreurs en production"] },
      ],
    },
    {
      id: "algo-09-pseudo-code",
      title: "9. Établir un algorithme en pseudo-code",
      blocks: [
        { type: "p", text: "Le pseudo-code permet de décrire un algorithme de manière :" },
        { type: "list", items: ["claire", "concise", "indépendante du langage de programmation"] },
        { type: "p", text: "Il sert à se concentrer sur la logique, sans écrire du vrai code." },
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "gain de temps lors du développement",
          "meilleure compréhension de la logique",
          "facile à transformer en code Python, Java, etc.",
          "peut être écrit dans un simple fichier .txt",
        ]},
      ],
    },
    {
      id: "algo-10-declaration-variables",
      title: "10. Déclaration de variables — exemples",
      blocks: [
        { type: "p", text: "En pseudo-code, on utilise souvent ← (équivalent de = en Python)." },
        { type: "code", filename: "pseudo-code", language: "text", code: `DÉCLARATION DE VARIABLES (pseudo-code)
notes ← tableau(10, 15, 4, 20)
somme ← 0
moyenne ← 0` },
        { type: "h", text: "Ajout d'une condition" },
        { type: "code", filename: "pseudo-code", language: "text", code: `SI longueur(notes) > 0 ALORS
    ...
SINON
    afficher "Erreur, le nombre de notes doit être supérieur à 0"
FIN SI` },
        { type: "h", text: "Ajout d'une boucle" },
        { type: "code", filename: "pseudo-code", language: "text", code: `POUR chaque note dans notes FAIRE
    somme ← somme + note
FIN POUR` },
        { type: "h", text: "Calcul de la moyenne" },
        { type: "code", filename: "pseudo-code", language: "text", code: `moyenne ← somme / longueur(notes)` },
        { type: "h", text: "Affichage du résultat" },
        { type: "code", filename: "pseudo-code", language: "text", code: `SI moyenne >= 10 ALORS
    afficher "Admis"
SINON
    afficher "Non admis"
FIN SI` },
        { type: "h", text: "Exemple complet (logique globale)" },
        { type: "code", filename: "pseudo-code", language: "text", code: `notes ← tableau(10, 15, 4, 20)
somme ← 0

SI longueur(notes) > 0 ALORS
    POUR chaque note dans notes FAIRE
        somme ← somme + note
    FIN POUR

    moyenne ← somme / longueur(notes)

    SI moyenne >= 10 ALORS
        afficher "Réussi"
    SINON
        afficher "Échec"
    FIN SI
SINON
    afficher "Erreur : aucune note"
FIN SI` },
      ],
    },
    {
      id: "algo-11-traduction-js",
      title: "11. Traduction pseudo-code en JS",
      blocks: [
        { type: "h", text: "1. Pseudo-code" },
        { type: "code", filename: "pseudo-code", language: "text", code: `notes ← tableau(10, 15, 4, 20)
somme ← 0

SI longueur(notes) > 0 ALORS
    POUR chaque note dans notes FAIRE
        somme ← somme + note
    FIN POUR

    moyenne ← somme / longueur(notes)

    SI moyenne >= 10 ALORS
        afficher "Réussi"
    SINON
        afficher "Échec"
    FIN SI
SINON
    afficher "Erreur : aucune note"
FIN SI` },
        { type: "h", text: "2. JavaScript" },
        { type: "code", filename: "js", language: "javascript", code: `let notes = [10, 15, 4, 20];
let somme = 0;

if (notes.length > 0) {
    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }

    let moyenne = somme / notes.length;

    if (moyenne >= 10) {
        console.log("Réussi");
    } else {
        console.log("Échec");
    }
} else {
    console.log("Erreur : aucune note");
}` },
      ],
    },
    {
      id: "algo-12-correspondance",
      title: "12. Correspondance pseudo-code / JavaScript",
      blocks: [
        { type: "table", headers: ["Pseudo-code", "JavaScript"], rows: [
          ["←", "="],
          ["tableau()", "[ ]"],
          ["SI", "if"],
          ["SINON", "else"],
          ["POUR", "for"],
          ["longueur()", ".length"],
          ["afficher", "console.log()"],
        ]},
      ],
    },
    {
      id: "algo-13-identifier-nombres",
      title: "13. Identifier les nombres en programmation",
      blocks: [
        { type: "p", text: "En informatique, les nombres peuvent appartenir à plusieurs sous-ensembles, selon leur nature et leur utilisation." },
        {
          type: "diagram",
          content: `HIÉRARCHIE DES ENSEMBLES NUMÉRIQUES
════════════════════════════════════════════════════════
  ┌──────────────────────────────────────────────┐
  │  RÉELS                                       │
  │  ┌──────────────────────────────────────┐    │
  │  │  IRRATIONNELS  (√2, π, φ, e…)       │    │
  │  │  ┌──────────────────────────────┐    │    │
  │  │  │  RATIONNELS  (-7/9, 0, 1…)  │    │    │
  │  │  │  ┌──────────────────────┐   │    │    │
  │  │  │  │  ENTIERS  (…-2,-1,0) │   │    │    │
  │  │  │  └──────────────────────┘   │    │    │
  │  │  └──────────────────────────────┘    │    │
  │  └──────────────────────────────────────┘    │
  └──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Les entiers" },
        { type: "p", text: "Ce sont les nombres sans virgule :" },
        { type: "list", items: ["positifs : 0, 1, 2, 3...", "négatifs : 1, -2, -3..."] },
        { type: "p", text: "On les appelle integers dans la plupart des langages." },
        { type: "h", text: "2. Les nombres décimaux" },
        { type: "p", text: "Ce sont les nombres avec une partie fractionnaire :" },
        { type: "list", items: ["3.14, 0.5, 2.0"] },
        { type: "p", text: "En programmation : float ou double." },
        { type: "h", text: "3. Les autres représentations numériques" },
        { type: "p", text: "Selon les langages, on peut aussi manipuler :" },
        { type: "list", items: ["hexadécimal (base 16) : 0xFF, 0x1A", "binaire (base 2) : 0b1010", "parfois octal (base 8)"] },
        { type: "p", text: "Ce sont juste des façons différentes d'écrire des nombres." },
        { type: "h", text: "4. Cas particuliers" },
        { type: "list", items: [
          "valeurs très grandes ou très petites (scientific notation : 1e-9)",
          "valeurs spéciales comme : NaN (Not a Number), Infinity / -Infinity",
        ]},
        { type: "h", text: "5. Les dates en programmation (Unix time)" },
        { type: "p", text: "En informatique, une date peut être représentée par un nombre unique :" },
        { type: "p", text: "Le nombre de millisecondes ou secondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC" },
        { type: "p", text: "Exemple :" },
        { type: "list", items: ["0 → 01/01/1970", "1700000000 → une date actuelle"] },
        {
          type: "diagram",
          content: `UNIX TIMESTAMP
════════════════════════════════════════════════════════
  01/01/1970 00:00:00 UTC
        │
        └──── 0 secondes
               │
               └──── 1700000000 secondes ──→ date moderne`,
        },
      ],
    },
    {
      id: "algo-14-booleens",
      title: "14. Les booléens",
      blocks: [
        { type: "p", text: "Les booléens sont un type de données en programmation qui ne peuvent prendre que deux valeurs possibles :" },
        { type: "list", items: ["Vrai", "Faux"] },
        { type: "p", text: "En logique et en informatique, ils servent à représenter une décision ou un état." },
        {
          type: "diagram",
          content: `BOOLÉENS — LIEN AVEC LE BINAIRE
════════════════════════════════════
  VRAI  =  1  =  true  =  True
  FAUX  =  0  =  false =  False`,
        },
        { type: "h", text: "1. Rôle" },
        { type: "list", items: ["créer des conditions", "contrôler des algorithmes", "exécuter des actions différentes selon un test"] },
        { type: "h", text: "2. Représentation en programmation" },
        { type: "p", text: "Selon les langages, les booléens peuvent s'écrire de différentes façons :" },
        { type: "table", headers: ["Représentation", "Langage"], rows: [
          ["true / false", "JavaScript, Python, etc."],
          ["True / False", "Python (majuscule)"],
          ["1 / 0", "Niveau machine ou langages bas niveau"],
        ]},
        { type: "h", text: "3. Lien avec le binaire" },
        { type: "p", text: "Les booléens correspondent directement au système binaire :" },
        { type: "list", items: ["Vrai = 1", "Faux = 0"] },
        { type: "p", text: "C'est pour ça qu'ils sont fondamentaux en informatique : les ordinateurs fonctionnent en binaire." },
      ],
    },
    {
      id: "algo-15-types-donnees",
      title: "15. Interagir avec les types de données",
      blocks: [
        { type: "h", text: "Les chaînes de caractères" },
        { type: "p", text: "Type de donnée qui sert à représenter du texte." },
        { type: "p", text: "Elle est toujours écrite entre :" },
        { type: "list", items: ["guillemets doubles : \"Bonjour\"", "ou guillemets simples : 'Bonjour'"] },
        { type: "p", text: "Une chaîne peut donc contenir :" },
        { type: "list", items: ["des lettres", "des chiffres", "des symboles"] },
        { type: "h", text: "Addition de nombres" },
        { type: "code", filename: "js", language: "javascript", code: `2 + 3 = 5` },
        { type: "h", text: "Addition de chaînes (concaténation)" },
        { type: "code", filename: "js", language: "javascript", code: `"Bonjour" + " tout le monde"  →  "Bonjour tout le monde"` },
        { type: "h", text: "Types différents" },
        { type: "p", text: "On ne peut pas additionner directement :" },
        { type: "list", items: ["un nombre + une chaîne"] },
        { type: "p", text: "Il faut transformer les types :" },
        { type: "list", items: ['"3" → nombre 3', 'ou 2 → "2"'] },
        {
          type: "diagram",
          content: `CONVERSION DE TYPES
════════════════════════════════════════════════════
  STRING → NUMBER          NUMBER → STRING
  ════════════════          ════════════════
  "3"  → Number("3")  → 3   2  → String(2)  → "2"
  "3"  → parseInt("3") → 3  2  → 2..toString() → "2"
  "3"  → +"3"          → 3  2  → \`\${2}\`      → "2"`,
        },
      ],
    },
    {
      id: "algo-16-trier-informations",
      title: "16. Trier des informations (généralités)",
      blocks: [
        { type: "p", text: "Les algorithmes de tri servent à organiser un ensemble de données dans un ordre déterminé :" },
        { type: "list", items: ["croissant (du plus petit au plus grand)", "décroissant (du plus grand au plus petit)", "alphabétique (A → Z)"] },
        { type: "h", text: "Principe général du tri" },
        { type: "p", text: "Pour trier des données, on :" },
        { type: "list", items: ["1. compare deux éléments", "2. échange leur position si nécessaire", "3. répète le processus jusqu'à ce que tout soit trié"] },
        { type: "p", text: "On compare souvent :" },
        { type: "list", items: ["élément de gauche", "élément de droite"] },
        {
          type: "diagram",
          content: `PRINCIPE DU TRI — COMPARAISON ÉLÉMENTS
════════════════════════════════════════════════════════
  Tableau : [5, 2, 8, 1]

  Passe 1 :
  [5, 2, 8, 1]  → comparer 5 et 2  → échanger → [2, 5, 8, 1]
  [2, 5, 8, 1]  → comparer 5 et 8  → ok        → [2, 5, 8, 1]
  [2, 5, 8, 1]  → comparer 8 et 1  → échanger → [2, 5, 1, 8]

  Passe 2 :
  [2, 5, 1, 8]  → comparer 2 et 5  → ok        → [2, 5, 1, 8]
  [2, 5, 1, 8]  → comparer 5 et 1  → échanger → [2, 1, 5, 8]

  ... jusqu'à [1, 2, 5, 8] ✓`,
        },
      ],
    },
    {
      id: "algo-17-tri-bulles",
      title: "17. Le tri à bulles (bubble sort)",
      blocks: [
        { type: "p", text: "Le tri à bulles consiste à comparer des éléments adjacents et à les échanger si besoin, jusqu'à obtenir un tableau trié." },
        { type: "h", text: "Pseudo-code" },
        { type: "code", filename: "pseudo-code", language: "text", code: `notes ← [10, 8, 2]

pour i de 0 à longueur(notes) - 1
    pour j de 0 à longueur(notes) - i - 1
        si notes[j] > notes[j + 1]
            échanger notes[j] et notes[j + 1]
        fin si
    fin pour
fin pour

afficher notes` },
        { type: "h", text: "Explication" },
        { type: "list", items: [
          "i = nombre de passages",
          "j = comparaison des voisins",
          "on échange si gauche > droite",
          "à chaque passage, le plus grand « remonte » à la fin",
        ]},
        {
          type: "diagram",
          content: `TRI À BULLES — VISUALISATION
════════════════════════════════════════════════════════
  Tableau initial : [10, 8, 2]

  Passage i=0 :
    j=0 : [10, 8, 2]  → 10 > 8  → échange → [8, 10, 2]
    j=1 : [8, 10, 2]  → 10 > 2  → échange → [8, 2, 10]
                                             ↑ "10 est à sa place"

  Passage i=1 :
    j=0 : [8, 2, 10]  → 8 > 2   → échange → [2, 8, 10]
                                             ↑ "8 est à sa place"

  Résultat : [2, 8, 10] ✓`,
        },
      ],
    },
    {
      id: "algo-18-tri-javascript",
      title: "18. Tri en JavaScript",
      blocks: [
        { type: "h", text: "Tri simple avec sort()" },
        { type: "p", text: "Par défaut, sort() trie comme du texte, pas comme des nombres." },
        { type: "code", filename: "js", language: "javascript", code: `let notes = [10, 8, 2];
notes.sort();` },
        { type: "h", text: "Pour trier correctement des nombres" },
        { type: "code", filename: "js", language: "javascript", code: `notes.sort((a, b) => a - b); // croissant
notes.sort((a, b) => b - a); // décroissant` },
        { type: "h", text: "Tri alphabétique" },
        { type: "code", filename: "js", language: "javascript", code: `let mots = ["banane", "pomme", "abricot"];
mots.sort();` },
      ],
    },
    {
      id: "algo-19-notion-algorithme",
      title: "19. La notion d'algorithme",
      blocks: [
        { type: "p", text: "Un algorithme est une suite d'instructions bien définies qui permet de résoudre un problème." },
        { type: "p", text: "Il :" },
        { type: "list", items: ["prend des entrées (des données)", "effectue des traitements", "produit une sortie (résultat)"] },
        { type: "h", text: "Définition formelle" },
        { type: "p", text: "Un algorithme est une procédure de calcul bien définie qui :" },
        { type: "list", items: ["prend en entrée un ensemble de valeurs", "renvoie en sortie un autre ensemble de valeurs"] },
        { type: "h", text: "Conditions de validité d'un algorithme" },
        { type: "p", text: "Un algorithme est correct si :" },
        { type: "list", items: ["il se termine toujours (finie en un nombre d'étapes)", "il produit un résultat correct pour chaque cas possible"] },
      ],
    },
    {
      id: "algo-20-bases-algorithmique",
      title: "20. Les bases de l'algorithmique",
      blocks: [
        { type: "p", text: "Un algorithme repose sur plusieurs éléments fondamentaux :" },
        {
          type: "diagram",
          content: `STRUCTURE D'UN ALGORITHME
════════════════════════════════════════════════════════
  ALGORITHME nom_algo

  DÉBUT

    Variables :
      age ← 18
      nom ← "Alice"

    Conditions :
      si âge >= 18 alors
          afficher "majeur"
      sinon
          afficher "mineur"

    Boucles :
      tant que i < 10
          afficher i
          i ← i + 1

    Fonctions :
      fonction addition(a, b)
          retourner a + b
      fin fonction

  FIN`,
        },
        { type: "h", text: "1. Les variables" },
        { type: "p", text: "Elles permettent de stocker des données." },
        { type: "code", filename: "pseudo-code", language: "text", code: `age ← 18` },
        { type: "h", text: "2. Les conditions" },
        { type: "p", text: "Elles permettent de faire des choix." },
        { type: "code", filename: "pseudo-code", language: "text", code: `si âge >= 18 alors
    afficher "majeur"
sinon
    afficher "mineur"` },
        { type: "h", text: "3. Les boucles" },
        { type: "p", text: "Elles permettent de répéter des instructions." },
        { type: "code", filename: "pseudo-code", language: "text", code: `tant que i < 10
    afficher i
    i ← i + 1` },
        { type: "h", text: "4. Les fonctions" },
        { type: "p", text: "Une fonction est un bloc de code qui :" },
        { type: "list", items: ["reçoit des entrées", "effectue un traitement", "retourne un résultat"] },
      ],
    },
    {
      id: "algo-21-ecrire-algorithme",
      title: "21. Écrire un algorithme",
      blocks: [
        { type: "p", text: "Un algorithme est construit à partir de plusieurs éléments essentiels : variables, conditions, boucles, fonctions." },
        { type: "h", text: "Ce qui définit un algorithme — 3 éléments essentiels" },
        { type: "p", text: "Un nom :" },
        { type: "p", text: "Chaque algorithme a un nom qui représente l'opération qu'il réalise." },
        { type: "code", filename: "pseudo-code", language: "text", code: `- tri
- recherche
- calcul_moyenne` },
        { type: "p", text: "Un début et une fin :" },
        { type: "p", text: "Un algorithme est toujours encadré par des mots-clés :" },
        { type: "code", filename: "pseudo-code", language: "text", code: `DÉBUT
    ...instructions...
FIN` },
        { type: "p", text: "Des variables :" },
        { type: "p", text: "Les variables servent à stocker des valeurs qui peuvent changer." },
        { type: "code", filename: "pseudo-code", language: "text", code: `x ← 5
nom ← "Alice"` },
        { type: "h", text: "1. Les variables et leurs valeurs" },
        { type: "p", text: "Une variable est une zone de mémoire définie par un nom, qui contient une valeur réutilisable tout au long du programme." },
        { type: "p", text: "Une variable peut changer de valeur pendant l'exécution." },
        { type: "code", filename: "pseudo-code", language: "text", code: `age ← 18
nom ← "Ali"` },
        { type: "h", text: "2. Les conditions" },
        { type: "p", text: "Une condition permet d'exécuter une action selon un résultat." },
        { type: "p", text: "Elle utilise les mots-clés :" },
        { type: "list", items: ["SI", "SINON", "SELON"] },
        { type: "code", filename: "pseudo-code", language: "text", code: `si age >= 18 alors
    afficher "majeur"
sinon
    afficher "mineur"` },
        { type: "p", text: "Exemple PHP équivalent :" },
        { type: "code", filename: "php", language: "php", code: `<?php
$age = 18;

if ($age >= 18) {
    echo "Majeur";
} else {
    echo "Mineur";
}
?>` },
        { type: "h", text: "3. Les boucles" },
        { type: "p", text: "Une boucle permet de répéter une instruction plusieurs fois." },
        { type: "list", items: ["POUR → nombre de répétitions connu", "TANT QUE → répétition tant qu'une condition est vraie"] },
        { type: "code", filename: "pseudo-code", language: "text", code: `tant que i < 5
    afficher i
    i ← i + 1` },
        { type: "h", text: "4. Les fonctions" },
        { type: "p", text: "Une fonction est un bloc de code réutilisable qui peut être utilisé plusieurs fois dans un programme." },
        { type: "p", text: "Elle permet :" },
        { type: "list", items: ["d'éviter les répétitions", "de structurer le code", "de réutiliser des instructions"] },
        { type: "code", filename: "pseudo-code", language: "text", code: `fonction addition(a, b)
    retourner a + b
fin fonction` },
      ],
    },
    {
      id: "algo-22-arbre-operateurs",
      title: "22. Arbre des possibilités & opérateurs logiques",
      blocks: [
        { type: "h", text: "Arbre des possibilités" },
        { type: "p", text: "Une condition crée des branches de décisions :" },
        {
          type: "diagram",
          content: `ARBRE DE DÉCISION
════════════════════════════════════════════════════════
                    [Condition 1]
                   /             \\
            [VRAI (V1)]        [FAUX (F1)]
            /        \\          /        \\
       [V2]          [F2]    [V3]       [F3]
      / | | \\        / \\    / | \\       / \\
    ...branches successives de résultats...`,
        },
        { type: "list", items: ["chaque test → une branche différente", "chaque branche → une action différente"] },
        { type: "p", text: "Il peut y avoir :" },
        { type: "list", items: ["conditions simples (une seule vérification)", "conditions complexes (avec ET, OU, NON)"] },
        { type: "h", text: "Les opérateurs logiques" },
        { type: "list", items: ["ET → toutes les conditions doivent être vraies", "OU → une seule condition suffit", "NON → inverse une condition"] },
        { type: "code", filename: "pseudo-code", language: "text", code: `si (age > 10 ET age < 20) alors
    afficher "ado"` },
        { type: "h", text: "Tables de vérité" },
        { type: "p", text: "Opérateur OU :" },
        { type: "table", headers: ["OU", "FAUX", "VRAI"], rows: [
          ["FAUX", "FAUX", "VRAI"],
          ["VRAI", "VRAI", "VRAI"],
        ]},
        { type: "p", text: "Opérateur ET :" },
        { type: "table", headers: ["ET", "FAUX", "VRAI"], rows: [
          ["FAUX", "FAUX", "FAUX"],
          ["VRAI", "FAUX", "VRAI"],
        ]},
        { type: "p", text: "Opérateur NON :" },
        { type: "table", headers: ["NON", "Résultat"], rows: [
          ["FAUX", "VRAI"],
          ["VRAI", "FAUX"],
        ]},
        { type: "h", text: "Comparaisons" },
        { type: "p", text: "Les conditions utilisent des comparateurs :" },
        { type: "table", headers: ["Opérateur", "Signification"], rows: [
          ["<", "inférieur à"],
          ["<=", "inférieur ou égal"],
          [">", "supérieur à"],
          [">=", "supérieur ou égal"],
          ["==", "égal à"],
          ["!=", "différent de"],
          ["===", "égalité stricte (valeur + type)"],
          ["!==", "différence stricte"],
        ]},
        { type: "note", variant: "info", text: "Dans certains langages : === → égalité stricte (valeur + type), !== → différence stricte" },
      ],
    },
    {
      id: "algo-23-algorithmes-javascript",
      title: "23. Algorithmes et JavaScript",
      blocks: [
        { type: "h", text: "1. Demander une valeur en JavaScript" },
        { type: "p", text: "Avec prompt()" },
        { type: "code", filename: "js", language: "javascript", code: `let age = prompt("Quel est ton âge ?");` },
        { type: "p", text: "Cette fonction :" },
        { type: "list", items: ["affiche une fenêtre", "attend une réponse de l'utilisateur", "stocke la valeur dans une variable"] },
        { type: "note", variant: "info", text: "La valeur récupérée est toujours du texte (string)." },
        { type: "h", text: "2. Afficher une valeur en JavaScript" },
        { type: "p", text: "Utiliser alert()" },
        { type: "code", filename: "js", language: "javascript", code: `alert("Bonjour !");` },
        { type: "p", text: "Cette fonction :" },
        { type: "list", items: ["affiche une boîte de dialogue", "montre un message simple"] },
        { type: "p", text: "Exemple combiné :" },
        { type: "code", filename: "js", language: "javascript", code: `let nom = prompt("Quel est ton nom ?");
alert("Bonjour " + nom);` },
        {
          type: "diagram",
          content: `FLUX prompt() / alert()
════════════════════════════════════════════════════════
  Code          →   prompt()    →   Utilisateur
                ←   string      ←   tape "Alice"
  nom = "Alice"
       ↓
  alert("Bonjour " + nom)
       ↓
  ┌──────────────────────┐
  │   Bonjour Alice      │
  │       [OK]           │
  └──────────────────────┘`,
        },
      ],
    },
    {
      id: "algo-24-outils-entrainement",
      title: "24. Outils pour s'entraîner",
      blocks: [
        { type: "table", headers: ["Outil", "URL", "Description"], rows: [
          ["Scratch", "https://scratch.mit.edu/", "Langage visuel, idéal pour apprendre les bases de l'algorithmique"],
          ["Kwyk", "https://www.kwyk.fr/algorithme/", "Exercices d'algorithmes, correction automatique, adapté pour s'entraîner"],
        ]},
        { type: "h", text: "Scratch" },
        { type: "list", items: ["langage visuel", "idéal pour apprendre les bases de l'algorithmique"] },
        { type: "h", text: "Kwyk" },
        { type: "list", items: ["exercices d'algorithmes", "correction automatique", "adapté pour s'entraîner"] },
      ],
    },
    {
      id: "algo-recap-structure",
      title: "Récapitulatif — Structure complète d'un algorithme",
      blocks: [
        { type: "code", filename: "pseudo-code", language: "text", code: `ALGORITHME calcul_moyenne
DÉBUT
  // 1. Déclaration des variables
  notes ← tableau(10, 15, 4, 20)
  somme ← 0
  moyenne ← 0

  // 2. Condition de garde
  SI longueur(notes) > 0 ALORS

    // 3. Boucle d'accumulation
    POUR chaque note dans notes FAIRE
        somme ← somme + note
    FIN POUR

    // 4. Calcul
    moyenne ← somme / longueur(notes)

    // 5. Affichage conditionnel
    SI moyenne >= 10 ALORS
        afficher "Réussi ✓"
    SINON
        afficher "Échec ✗"
    FIN SI

  SINON
    afficher "Erreur : aucune note"
  FIN SI
FIN` },
      ],
    },
    {
      id: "algo-recap-comparatif",
      title: "Récapitulatif — Comparatif des concepts clés",
      blocks: [
        { type: "table", headers: ["Concept", "Pseudo-code", "JavaScript", "Python"], rows: [
          ["Affectation", "x ← 5", "let x = 5;", "x = 5"],
          ["Condition", "SI ... ALORS", "if (...) {", "if ...:"],
          ["Sinon", "SINON", "} else {", "else:"],
          ["Boucle for", "POUR i de 0 à n", "for (let i=0; i<n; i++)", "for i in range(n):"],
          ["Boucle while", "TANT QUE cond", "while (cond) {", "while cond:"],
          ["Afficher", 'afficher "texte"', 'console.log("texte")', 'print("texte")'],
          ["Tableau", "tableau(1,2,3)", "[1, 2, 3]", "[1, 2, 3]"],
          ["Longueur", "longueur(tab)", "tab.length", "len(tab)"],
          ["Fonction", "fonction nom(a,b)", "function nom(a,b) {", "def nom(a,b):"],
          ["Retour", "retourner val", "return val;", "return val"],
        ]},
      ],
    },
  ],
};
