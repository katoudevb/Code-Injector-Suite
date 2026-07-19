import type { Section } from "../types";

export const conceptsIA: Section = {
  id: "concepts-ia",
  title: "Concepts fondamentaux de l'IA",
  icon: "BrainCircuit",
  tags: ["python"],
  subsections: [
    {
      id: "ia-decouvrir",
      title: "1. Découvrez l'Intelligence Artificielle",
      blocks: [
        { type: "p", text: "L'Intelligence Artificielle est un domaine technique difficile à comprendre, qui nécessite un minimum de connaissances mathématiques et une capacité d'abstraction élevée. Certains pensent qu'il suffit de comprendre les effets de l'IA et ses applications, sans nécessairement comprendre comment le \"moteur\" tourne." },
        { type: "p", text: "Avant d'aborder les détails de l'IA, il est nécessaire de repositionner chacune des briques qui la constituent les unes par rapport aux autres, et de bien situer les algorithmes par rapport à ces briques et au contexte dans lequel ils sont utilisables." },
        { type: "list", items: [
          "Son objectif est de permettre à des ordinateurs de simuler la pensée ou les actions des êtres humains",
          "À terme, cette technologie pourrait impacter presque chaque moment de notre vie",
        ]},
        { type: "h", text: "Importance de l'IA" },
        { type: "p", text: "L'IA est un processus d'imitation de l'intelligence humaine qui repose sur la création et l'application d'algorithmes." },
        { type: "h", text: "Applications et évolutions possibles" },
        { type: "p", text: "L'IA booste les ventes en fluidifiant le parcours client ; les chatbots améliorent l'expérience d'achat." },
        { type: "note", variant: "info", title: "Je retiens — Champs d'applications de l'IA", text: "Performance et productivité des entreprises, amélioration des soins de santé, sécurité des transports, accès à l'information et à l'éducation, nouveaux modes de commerce, maintenance industrielle, économies d'énergie, etc." },
        { type: "h", text: "Question d'ordre éthique ou légal" },
        { type: "list", items: [
          "L'éthique : capacité de faire la différence entre ce qu'on peut faire et ce qui est moral de faire",
          "Les applications et algorithmes dotés d'IA peuvent servir d'intrusion dans la vie d'un individu",
          "Certains États exploitent les données du Big Data pour contrôler leur population à l'aide de capteurs de mouvement des smartphones",
          "Il faut fixer des limites sur le traitement et la collecte des données",
        ]},
      ],
    },
    {
      id: "ia-au-depart",
      title: "2. Au départ est l'IA",
      blocks: [
        { type: "p", text: "Au sommet de la pyramide se trouve l'IA, la \"maison mère\". On peut la définir comme un ensemble de techniques qui permettent à des machines d'accomplir des tâches et de résoudre des problèmes normalement réservés aux êtres humains." },
        { type: "p", text: "Toutes les technologies évoquées quand on parle d'IA — Machine Learning, Deep Learning et autres — sont directement rattachées à l'IA, comme une branche à un tronc d'arbre. Elles ont un point commun : trouver un élément, un objet, une valeur numérique, à partir d'une phase d'apprentissage." },
        { type: "p", text: "Ce qui se fait par le biais d'une méthode, le cœur de l'algorithme, choisie en fonction du type de reconnaissance à effectuer. Ce sont ces méthodes qui sont les plus difficiles à positionner, car très mathématiques." },
        { type: "note", variant: "info", title: "Je retiens — Contenu de la spécialisation IA", text: "Concepts et principes ; comparaison entre cerveau et ordinateur ; réseaux neuronaux artificiels, extraction des caractéristiques d'images et Deep Learning ; limites actuelles et avancées." },
        { type: "h", text: "Carte complète des algorithmes de l'IA" },
        {
          type: "diagram",
          content: `                    ARTIFICIAL INTELLIGENCE
                           |
            ┌──────────────┴──────────────┐
     Machine Learning               Deep Learning
            |                            |
  ┌─────────┼──────────┐         CNN (Convolutional Neural Networks)
Supervisé  Non        Renforcement  RNN (Recurrent Neural Networks)
           Supervisé               LSTM (Long-Short Term Memory)
  |          |                     RDM (Random Decision Forest)
  |          |                     XGBoost (eXtreme Gradient Boosting)
  |          |                     Capsules de Hinton
  |          |
  ├─Classification        ├─Clustering
  │  · Naive Bayes        │  · K-Means Clustering
  │  · Arbre de décision  │  · Mean-Shift Clustering
  │  · Logistic Regress.  │  · GMM (Gaussian Mixture Modules)
  │  · K-Nearest Neighbors│  · DBSCAN
  │  · SVM                │  · HAC
  │  · Random Forest      │  · K-médoïdes / K-médians
  │                       │
  ├─Régression            ├─Association
  │  · Least squares      │  · A priori
  │  · Naive Bayes        │  · ECLAT
  │  · Arbre de décision  │  · FP-Growth
  │  · K-nearest Neighbors│  · ASSOC
  │  · LVQ                │  · OPUS Search
  │  · LARS Lasso         │
  │  · Random Forest      ├─Réduction dimensionnelle
  │  · Elastic Net        │  · Arbre de décision
  │  · Ada Boost          │  · Random Forest
  │  · XG Boost           │  · Backward Feature Elimination
  │                       │  · Forward Feature Selection
  │                       │  · Factor Analysis
  │                       │  · PCA
  │
  └─Renforcement
     · Monte-Carlo        · SARSA           · A3C
     · Q-Learning         · SARSA-Lambda    · NAF
     · SARSA              · DQN             · TRPO
     · Q-Learning Lambda  · DDPG            · Direct Policy Search
                                            · PPO / TD3 / SAC`,
        },
      ],
    },
    {
      id: "ia-machine-learning",
      title: "3. Le Machine Learning",
      blocks: [
        { type: "p", text: "Le Machine Learning est une technique d'analyse des données qui consiste à apprendre à un algorithme à tirer profit de l'expérience des… humains." },
        { type: "p", text: "\"Fils aîné\" de l'IA, il fonctionne par apprentissage, soit sur des jeux de données connues et labellisées (apprentissage supervisé, avec une phase de découverte et une phase de production), soit sur des données non labellisées (apprentissage non supervisé)." },
        { type: "p", text: "En mode supervisé, on guide l'algorithme en lui donnant des exemples de données labellisées — on lui dit ce que c'est — l'apprentissage consistant à adapter sa reconnaissance, rechercher les \"features\" qui caractérisent la donnée et affiner le poids des liens interneurones. Si on lui dit qu'il doit reconnaître un \"Z\", il ne faut pas qu'il persiste à le confondre avec un \"V\"." },
        { type: "p", text: "En mode non supervisé, l'apprentissage se fait avec des jeux de données non labellisées : on ne lui dit pas ce qu'il doit trouver. Il recherchera les éléments qui lui sembleront caractéristiques des données soumises, les \"features\", qu'il définira librement." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│              MACHINE LEARNING                       │
│                                                     │
│  Données         Algorithme        Résultat         │
│  labellisées ──► SUPERVISÉ    ──► Classification   │
│                               ──► Régression       │
│                                                     │
│  Données         Algorithme        Résultat         │
│  brutes      ──► NON SUPERVISÉ ──► Clustering      │
│                               ──► Association      │
│                               ──► Réduction dim.   │
│                                                     │
│  Environnement   Agent              Récompense      │
│  inconnu     ──► RENFORCEMENT  ──► Optimisation    │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Mode supervisé" },
        { type: "p", text: "En termes d'usages, le mode supervisé est divisé en deux grandes familles d'algorithmes : classification et régression." },
        { type: "p", text: "Le mode classification revient à associer une donnée à une ou plusieurs classes d'objets (ex : une fleur est une graminée persistante de telle nature) — il ne calcule pas une valeur, mais décide d'une classe d'appartenance." },
        { type: "p", text: "Le mode régression a pour finalité de calculer une valeur numérique à partir d'informations fournies (ex : le prix d'une maison, la probabilité de crue d'une rivière)." },
        { type: "table", headers: ["Mode", "Objectif", "Exemple"], rows: [
          ["Classification", "Décider d'une classe d'appartenance", "Une fleur est-elle une rose ou une tulipe ?"],
          ["Régression", "Calculer une valeur numérique", "Prix d'une maison, probabilité de crue"],
        ]},
        { type: "h", text: "Mode non supervisé" },
        { type: "p", text: "Les algorithmes du mode non supervisé s'appliquent à trois catégories distinctes de problèmes : Clustering, Association, Réduction dimensionnelle." },
        { type: "p", text: "Clustering : consiste à demander à l'algorithme de trouver des points de données identiques ou similaires, dans des jeux importants, qu'il va relier. Il s'agit de trouver des groupements d'éléments dont la distance mathématique est minimale, et la distance entre les groupes, maximale. C'est ce que fait l'algorithme K-Means, le plus connu." },
        {
          type: "diagram",
          content: `Clustering (K-Means) :

Points de données      Groupes identifiés
  · · · ·               [Groupe A]  [Groupe B]
  · · · ·         ──►    · · · ·      · · ·
  · · · ·                · · · ·      · · ·
                          distance    distance
                          interne     entre
                          minimale    groupes maximale`,
        },
        { type: "p", text: "Association : a pour finalité de trouver des liens entre les éléments de très grandes bases de données. Ces associations permettent d'anticiper d'autres évènements (ex : de fortes ventes de pommes de terre et d'oignons chez les mêmes acheteurs suggèrent qu'ils cuisinent souvent des hamburgers). Algorithmes associés : méthode \"a priori\", ECLAT, etc." },
        { type: "p", text: "Réduction dimensionnelle : recherche dans les jeux de données les éléments qui ont peu ou pas d'influence (\"faible variance\"). Les algorithmes associés peuvent les enlever ou réduire leur influence — comme dans une image compressée où certaines couleurs peu perçues par l'œil humain ne sont pas codées." },
        { type: "h", text: "Machine Learning par renforcement" },
        { type: "p", text: "Il s'agit d'algorithmes qui permettent d'optimiser les conséquences résultant d'une action (récompense ou punition) sur l'environnement. Ils mettent en scène des agents placés dans cet environnement, sur lequel ils effectuent des actions ayant des conséquences sur leur propre état et celui de l'environnement. Les agents apprennent la séquence d'actions optimale pour obtenir la plus grande récompense." },
        { type: "p", text: "La différence par rapport à l'apprentissage non supervisé : on optimise un processus constitué d'actions, sans chercher de similitudes entre objets ni de distances." },
        {
          type: "diagram",
          content: `Cycle du Renforcement :

  ┌─────────────────────────────────────┐
  │                                     │
  ▼                                     │
Agent ──► Action ──► Environnement      │
  ▲              ──► État S(t+1)  ──────┘
  │              ──► Récompense R
  │
  └── Apprend la politique optimale π`,
        },
        { type: "h", text: "Le Deep Learning" },
        { type: "p", text: "Le Deep Learning fait un peu la même chose que le Machine Learning, mais n'emploie pas les mêmes techniques et se sert de réseaux neuronaux dotés d'un grand nombre de couches intermédiaires cachées (une seule pour le Machine Learning)." },
        { type: "p", text: "Les calculs sont beaucoup plus longs et ne pourraient s'envisager sans processeurs additionnels graphiques (GPU type NVIDIA), accélérateurs matériels ou FGPA." },
        { type: "p", text: "Dans de nombreux cas, les algorithmes de Machine Learning donneront des résultats \"acceptables\", voire mauvais, alors que le Deep Learning, sur les mêmes données, fournira des résultats beaucoup plus satisfaisants — au prix de ressources machines plus lourdes et d'un peu de patience." },
        { type: "p", text: "Les réseaux de capsules de Geoffrey Hinton sont placés dans le Deep Learning, car il s'agit d'un autre formalisme des réseaux neuronaux convolutifs, la grande spécialité de \"l'apprentissage profond\"." },
        {
          type: "diagram",
          content: `Comparatif ML vs Deep Learning :

┌─────────────────┬──────────────────┬──────────────────────┐
│ Critère         │ Machine Learning │ Deep Learning        │
├─────────────────┼──────────────────┼──────────────────────┤
│ Couches cachées │ 1                │ Nombreuses (profondes)│
│ Données         │ Modéré           │ Très grand volume    │
│ Ressources      │ Standard         │ GPU/FGPA requis      │
│ Précision       │ Acceptable       │ Élevée               │
│ Temps calcul    │ Rapide           │ Long                 │
│ Transparence    │ Plus lisible     │ Boîte noire          │
└─────────────────┴──────────────────┴──────────────────────┘`,
        },
        { type: "note", variant: "success", title: "Je retiens — Le concept d'IA", text: "L'IA fonctionne sur la base d'algorithmes et d'apprentissage (le learning). Au sommet de la pyramide : un ensemble de techniques permettant à des machines d'accomplir des tâches normalement réservées aux humains. Machine Learning et Deep Learning sont les deux composantes principales. Le ML se divise en 3 sous-familles : supervisé, non supervisé, par renforcement. Le Deep Learning, plus complexe et gourmand en ressources, donne des résultats plus satisfaisants." },
      ],
    },
    {
      id: "ia-cerveau-vs-ordinateur",
      title: "4. Cerveau contre ordinateur : l'impossible comparaison",
      blocks: [
        { type: "p", text: "Le cerveau a toujours exercé une grande fascination sur les concepteurs d'ordinateurs, qui se sont dit qu'ils avaient devant eux un modèle qu'ils pourraient copier — comme les \"avionneurs\" qui cherchent à reproduire les mouvements d'un oiseau. Mais la réalité est encore très loin de leurs extrapolations." },
        { type: "p", text: "Pour comparer un cerveau avec un ordinateur, il faut le faire selon cinq axes distincts : la capacité mémoire, l'architecture de communication, la vitesse de traitement, la capacité de stockage, le comportement cognitif." },
        {
          type: "diagram",
          content: `5 axes de comparaison Cerveau vs Ordinateur :

┌──────────────────────┬────────────────────┬──────────────────────┐
│ Axe                  │ Cerveau            │ Ordinateur           │
├──────────────────────┼────────────────────┼──────────────────────┤
│ Capacité mémoire     │ ~10^14 à 10^18 neurones│ ~100 TB (10^14 bytes)│
│ Architecture         │ 1 neurone ↔ 1000  │ Cellule ↔ quelques   │
│ communication        │ autres neurones    │ unités               │
│ Vitesse de traitement│ 18 à 640 T TEPS   │ 2,3 × 10^13 TEPS    │
│ Capacité stockage    │ Limitée, oubli     │ Quasi infinie ✓      │
│ Comportement cognitif│ Réflexion, libre   │ Exécution linéaire   │
│                      │ arbitre, conscience│ d'instructions       │
└──────────────────────┴────────────────────┴──────────────────────┘
Résultat : Cerveau supérieur sur 4/5 axes. L'ordinateur gagne seulement en stockage.`,
        },
        { type: "h", text: "La capacité mémoire" },
        { type: "p", text: "Il est envisageable de doter un ordinateur d'une mémoire vive de 100 TB, soit 10^14 bytes — un chiffre proche de la capacité mémoire des gros mainframes actuels. Le cerveau est très comparable en capacité, avec 100 trillions (10^14) neurones ; certains évaluent même ce nombre à 10^18." },
        { type: "p", text: "Le Dr Hannah Critchlow, neuroscientifique de l'Université de Cambridge, a estimé lors du \"Hay Festival\" de 2016 qu'il était envisageable de transférer le contenu d'un cerveau et son intelligence cognitive dans la mémoire d'un ordinateur. D'autres scientifiques, plus pragmatiques, considèrent que ce transfert n'est rien de mieux qu'une dystopie — car avoir beaucoup de mémoire ne suffit pas, encore faut-il savoir l'utiliser." },
        { type: "h", text: "L'architecture de communication" },
        { type: "p", text: "Dans un ordinateur, chaque cellule mémoire communique avec un nombre limité d'autres cellules (quelques unités), en raison du câblage électronique nécessaire. Dans le cerveau, chaque neurone est connecté à 1000 autres neurones en moyenne, via des signaux électriques transformés en messages chimiques par les synapses." },
        { type: "p", text: "Un neurone est multifonctionnel (interprétation, transmission, traitement, stockage), contrairement à une cellule mémoire. Le cerveau est une machine parallèle idéale, capable de transmettre des milliards d'informations simultanément. La maladie d'Alzheimer pourrait par exemple s'expliquer par des dépôts de graisses sur les synapses, empêchant la communication." },
        {
          type: "diagram",
          content: `Architecture neuronale vs informatique :

Ordinateur :                Cerveau :
[Cellule A] ──► [Cellule B] [Neurone A] ──► [Neurone B]
                             ──► [Neurone C]
Connexions limitées          ──► [Neurone D]
(quelques unités)            ──► [... ×1000]
                            Connexions massives parallèles
                            Synapses excitatrices/inhibitrices
                            Auto-réorganisation contextuelle`,
        },
        { type: "h", text: "La vitesse de traitement" },
        { type: "p", text: "Comment comparer la vitesse d'exécution de deux machines qui ne fonctionnent pas de la même manière ? On quantifie un ordinateur en Mips ou Flops, mais ce n'est pas possible pour le cerveau (pas d'instruction machine type MOV ou LR)." },
        { type: "p", text: "Deux chercheurs des Universités de Californie et Carnegie Mellon ont utilisé le benchmark TEPS (Traversed Edges Per Second), qui mesure le temps nécessaire pour propager des commandes." },
        { type: "code", filename: "teps-formule.txt", language: "text", code: `TEPS = nombre d'actions nerveuses effectuées par seconde par le cerveau

Expressions équivalentes :

TEPS = (nombre total de synapses) × (nombre moyen d'actions nerveuses par synapse)

TEPS = (nombre de synapses) × (nombre moyen d'actions nerveuses par neurone)` },
        { type: "list", items: [
          "Cerveau simulé : entre 0,18 et 6,4 × 10^14 TEPS (18 à 640 trillions TEPS)",
          "Meilleur ordinateur : 2,3 × 10^13 TEPS",
          "Conclusion : à 640 trillions TEPS, le cerveau est environ 30 fois plus rapide que le plus rapide des ordinateurs",
        ]},
        { type: "p", text: "Comparaison des coûts : coût horaire du cerveau estimé entre 4 700 et 170 000 $/heure le Giga TEPS (formule : 0,18–6,4 × 10^14 / 10^9 × 0,26 $/heure) contre 2 000 à 40 000 $/heure le Giga TEPS pour une machine équivalente — le cerveau est donc plus coûteux." },
        { type: "h", text: "La capacité de stockage" },
        { type: "p", text: "C'est le gros avantage de l'ordinateur : il peut stocker un volume gigantesque, presque infini, de données restituables à la demande. Le cerveau stocke aussi des données de manière précise, mais avec l'inconvénient qu'il n'est plus capable, au bout d'un certain temps, de les retrouver et de les restituer." },
        { type: "p", text: "Tout se passe comme si la mémoire du cerveau était organisée en deux niveaux (mémoire principale et cache), mais cette mémoire s'abîme et se détériore pour des raisons encore mal comprises. Watson d'IBM est admiré surtout pour sa capacité de stockage et de recherche, qu'aucun être humain ne pourra jamais approcher." },
        { type: "h", text: "L'algorithmique associée" },
        { type: "p", text: "Dans ce domaine, le cerveau est tranquille pour quelques milliers d'années. Cela fait au moins 70 ans que l'on tente de simuler le comportement humain (cybernétique puis IA) sans progrès décisifs. Le fait qu'un ordinateur ait battu un champion au jeu de Go en 2016 ne signifie pas que la machine ait dépassé le cerveau — la machine itère des commandes \"triviales\" regroupées en programmes, alors que le cerveau raisonne." },
        { type: "h", text: "Conclusion — Cerveau vs Machine" },
        { type: "p", text: "Le véritable avantage du cerveau est sa capacité à réfléchir, s'adapter, comprendre et agir — pas seulement lire des milliards de données. En cela, il reste imbattable, au moins dans un futur prévisible. On ne sait toujours pas pourquoi notre cerveau distingue sans aide la couleur rouge du bleu — on constate les effets sans comprendre comment on les obtient." },
        { type: "note", variant: "success", title: "Je retiens — Homme VS Machine", text: "Comparaison sur : capacité mémoire, architecture de communication, vitesse de traitement, capacité de stockage, comportement cognitif. Le cerveau sort vainqueur sur tous les critères, sauf la capacité de stockage. Pour égaler le cerveau, les scientifiques devront comprendre, au-delà du \"comment\", le \"pourquoi\" il marche ainsi." },
      ],
    },
    {
      id: "ia-commandes-cerveau-bci",
      title: "5. Les commandes cerveau (interfaces cerveau-machine)",
      blocks: [
        { type: "h", text: "La cartographie du cerveau" },
        { type: "p", text: "Depuis plus de quinze ans, les scientifiques s'intéressent à la pensée susceptible d'être contrôlée pour piloter des outils et équipements sans intervention physique — technologie ciblant en particulier les paraplégiques." },
        { type: "p", text: "Le cerveau est séparé en deux hémisphères, symétriques dans la géométrie mais pas dans les fonctionnalités. C'est un réseau de neurones — cellules intelligentes comparables aux nœuds d'un cluster — reliés par des synapses, sortes de super fibres optiques." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│                    CARTOGRAPHIE DU CERVEAU                  │
├──────────────────────┬──────────────────────────────────────┤
│ ATTENTION            │ Capacité d'éveil pour se concentrer  │
│                      │ · sur un élément en particulier      │
│                      │ · sur plusieurs choses en même temps │
│                      │ · pendant une longue période         │
├──────────────────────┼──────────────────────────────────────┤
│ MOTRICITÉ            │ Contrôle des mouvements du corps     │
├──────────────────────┼──────────────────────────────────────┤
│ PERCEPTION           │ De la forme, couleur, distance       │
│                      │ des objets                           │
├──────────────────────┼──────────────────────────────────────┤
│ ORIENTATION          │ Perception des relations entre       │
│                      │ les objets dans l'espace             │
├──────────────────────┼──────────────────────────────────────┤
│ LANGAGE ORAL         │ Production et compréhension          │
├──────────────────────┼──────────────────────────────────────┤
│ LANGAGE ÉCRIT        │ Lecture et écriture                  │
├──────────────────────┼──────────────────────────────────────┤
│ FONCTIONS            │ Organisation, planification,         │
│ EXÉCUTIVES           │ abstraction, jugement, auto-contrôle,│
│                      │ flexibilité                          │
├──────────────────────┼──────────────────────────────────────┤
│ MÉMOIRE              │ Court terme : infos limitées /       │
│                      │   quelques secondes                  │
│                      │ Long terme : faits, connaissances,   │
│                      │   expériences vécues                 │
└──────────────────────┴──────────────────────────────────────┘`,
        },
        { type: "h", text: "Isoler les commandes électriques" },
        { type: "p", text: "L'idée du pilotage externe par le cerveau est assez naturelle : puisqu'on fait avancer le pied droit par la pensée, on pourrait imaginer remplacer ce pied par une prothèse mécanique, à condition d'isoler les commandes cervicales électriques et de les interpréter via un capteur." },
        { type: "p", text: "La difficulté : il faut d'abord comprendre ce qu'est la pensée elle-même (pas seulement ses conséquences électriques) — on se situe presque au degré zéro de la connaissance sur ce point. Ensuite, il faut isoler les impulsions utiles du fatras de signaux émis par le cerveau, comme chercher une aiguille dans une botte de foin." },
        { type: "h", text: "L'interface cerveau-ordinateur" },
        { type: "p", text: "L'interface cerveau-ordinateur porte le nom de BCI (Brain-Computer Interface). L'activité cérébrale est mesurée par EEG (Electro-Encéphalographie)." },
        { type: "p", text: "Il existe déjà de nombreux produits (souvent à l'état de prototypes) permettant de simuler des mouvements pour déplacer un curseur, contrôler un éditeur de texte, ou piloter des jeux vidéo ou interfaces de réalité virtuelle." },
        { type: "p", text: "Le vrai problème est celui de l'apprentissage : il faut être très concentré, vider son esprit du bruit externe et fixer par la pensée l'artefact permettant la commande souhaitée. Les casques modernes (ex : Emotiv Systems) relayent certaines commandes de base et ont beaucoup progressé (plus besoin de gel sur le crâne), mais restent très limités." },
        {
          type: "diagram",
          content: `Flux BCI (Brain-Computer Interface) :

Cerveau
  │
  │ Impulsions électriques (EEG)
  ▼
Capteur / Casque (Emotiv Systems...)
  │
  │ Signal numérique filtré
  ▼
Algorithme d'interprétation
  │
  │ Commande identifiée
  ▼
Équipement cible (prothèse, curseur, jeu...)`,
        },
        { type: "note", variant: "success", title: "Je retiens — Les commandes cerveau", text: "La science connaît désormais bien la cartographie et le fonctionnement du cerveau (neurones, synapses, impulsions électriques). Si l'on connaît le lien entre commande et mouvement, on ignore tout de la façon dont la pensée fait naître cette commande. L'interface cerveau-ordinateur = BCI (Brain-Computer Interface). Par le biais de casques comme ceux d'Emotiv Systems, on parvient à relayer certaines commandes de base." },
      ],
    },
    {
      id: "ia-reseaux-neuronaux-artificiels",
      title: "6. Le fonctionnement des réseaux neuronaux artificiels",
      blocks: [
        { type: "p", text: "Depuis le premier réseau neuronal conçu en 1958 par Frank Rosenblatt, la technologie s'est affinée et, les ressources matérielles aidant, on s'est attaqué à la simulation comportementale au cœur de l'IA. Le neurone artificiel est une (très) pâle copie d'un neurone humain." },
        { type: "h", text: "C'est quoi, un réseau neuronal ?" },
        { type: "p", text: "Les réseaux neuronaux sont des plates-formes matérielles dans lesquelles sont implémentés des algorithmes qui simulent le comportement d'un cerveau humain par un système de couches de processeurs (neurones), reliées par des connexions réseaux (synapses et dendrites)." },
        { type: "p", text: "Un neurone biologique reçoit des signaux (stimuli) transmis par d'autres neurones. Il fait la somme des stimuli, et si le résultat dépasse le seuil d'activation (excitabilité), il envoie un signal (potentiel d'action) le long de son axone. Ce signal peut renforcer ou diminuer l'activité des neurones qui le reçoivent, selon que les synapses sont excitatrices ou inhibitrices." },
        { type: "h", text: "Le neurone formel / artificiel" },
        { type: "p", text: "Un neurone formel se caractérise par trois éléments de base :" },
        { type: "list", items: [
          "Les synapses → modélisées par des poids (pondération appliquée à une liaison entre deux neurones)",
          "Le corps cellulaire → modélisé par une fonction de transfert (fonction d'activation)",
          "L'axone → l'élément de sortie, qui communique avec les autres neurones",
        ]},
        {
          type: "diagram",
          content: `Neurone biologique vs Neurone artificiel :

Biologique :                    Artificiel :
Dendrites ──► Soma ──► Axone    Entrées (x1,x2,...xn)
(stimuli)    (somme)   (sortie)     │
                                    │ × poids (w1,w2,...wn)
                                    ▼
                               Σ (somme pondérée)
                                    │
                                    │ + biais
                                    ▼
                               Fonction d'activation
                                    │
                                    ▼
                               Sortie (y)`,
        },
        { type: "p", text: "Les neurones sont regroupés en couches : une couche d'entrée des données, une couche de sortie, et entre les deux des couches cachées. Chaque neurone de la couche i+1 reçoit une valeur du neurone j de la couche i, pondérée par une certaine valeur." },
        { type: "h", text: "Les fonctions de transfert ou d'activation" },
        { type: "p", text: "Un réseau neuronal se caractérise par une succession d'activations entre neurones de couches adjacentes, dont la valeur dépend de la pondération et d'une fonction d'activation (seuil, linéaire, sigmoïde, tangente hyperbolique…). Ces fonctions ont des propriétés mathématiques précises (monotonie, étendue, continuité, simplicité de dérivabilité) qui impactent la lourdeur de l'algorithme." },
        { type: "p", text: "Le biais (\"bias\") est une constante ajoutée à la somme des valeurs envoyées à la fonction d'activation, pour normaliser et adapter la sortie — perçu comme un neurone supplémentaire dont la valeur est toujours égale à 1." },
        { type: "h", text: "La normalisation des données" },
        { type: "p", text: "Les neurones de la couche d'entrée exposent une valeur dépendant de la nature du problème simulé. Il faut donc résoudre deux difficultés : la normalisation des données dans une échelle commune, et la transformation des données non numériques." },
        { type: "table", headers: ["Méthode", "Description", "Formule"], rows: [
          ["Normalisation min-max", "Adapte linéairement les données entre 0 et 1", "Z = (X - min(X)) / (max(X) - min(X))"],
          ["Normalisation par rapport à la moyenne", "Centre par rapport à la moyenne", "Z = (X - moy(X)) / (max(X) - min(X))"],
          ["Normalisation Z", "Met à l'échelle selon moyenne et écart-type", "Z = (X - moy(X)) / std(X)"],
        ]},
        { type: "h", text: "Le compartimentage des données" },
        { type: "p", text: "Le \"compartimentage\" établit une correspondance entre valeurs numériques et non numériques. On peut discrétiser les données (jeune = 1, mûr = 2, vieux = 3)." },
        { type: "list", items: [
          "Compartimentage à largeur identique — divise la plage de valeurs en N groupes de même taille",
          "Compartimentage à hauteur identique — divise la plage en N groupes contenant le même nombre d'instances",
        ]},
        { type: "note", variant: "warning", text: "L'un des gros problèmes des réseaux neuronaux est qu'ils sont relativement difficiles à comprendre, vu le nombre de critères susceptibles de jouer un rôle." },
        { type: "h", text: "Les familles de réseaux neuronaux" },
        { type: "p", text: "Propagation avant — Feed-Forward (FF) : le mode le plus simple. L'information n'est diffusée que dans un seul sens, sans cycles ni boucles." },
        {
          type: "diagram",
          content: `Feed-Forward :
[Entrée] ──► [Couche cachée 1] ──► [Couche cachée 2] ──► [Sortie]
              sens unique, pas de boucle`,
        },
        { type: "p", text: "Multi-Layer Perceptron (MLP) : couche d'entrée, couche de sortie, et une ou plusieurs couches cachées. Avec n couches, le MLP comporte n-1 matrices de poids — un \"approximateur universel de fonctions\"." },
        { type: "p", text: "Deep Feed Forward (DFF) : famille des FF avec plusieurs couches cachées, traitant surtout la rétropropagation des erreurs (plusieurs itérations). À l'origine du \"deep learning\" dans les années 90." },
        { type: "p", text: "LSTM (Long/Short Term Memory) : neurones à mémoire, traitant des données avec un certain décalage (textes, vidéos). Très utilisé en reconnaissance de la parole et de l'écriture." },
        { type: "p", text: "RNN (Recurrent Neural Network) : famille FF où chaque neurone des couches cachées reçoit ses propres sorties après un délai fixe. Utile quand le contexte joue un rôle important (ex : analyse de texte). Modèles : Hopfield (une seule couche, toutes unités interconnectées), réseaux récurrents à couches (ex : modèle SRN / Elman)." },
        { type: "h", text: "L'exemple des réseaux convolutifs" },
        { type: "p", text: "Le mode convolutif CNN (\"Convolutional Neural Network\"), de type feed-forward, est l'une des formes neuronales les plus connues — un empilement de perceptrons multicouches traitant chacun une partie de l'information globale (images, vidéos, langage naturel)." },
        { type: "p", text: "Deux types de neurones : les neurones de traitement (analysent une portion réduite de l'image via une fonction de convolution) et les neurones de \"pooling\" (mise en commun des résultats). L'image est subdivisée en sous-images traitées par convolution, avec trois paramètres clés : le kernel (dimension de la matrice de filtrage), le slide (décalage entre sous-ensembles), le padding (valeurs nulles ajoutées autour de l'image)." },
        { type: "p", text: "L'apprentissage se fait sur trois critères : les matrices de filtres, le biais (valeur ajoutée après convolution), le poids entre couples de neurones." },
        {
          type: "diagram",
          content: `Pipeline CNN (Convolutional Neural Network) :

Image ──► Découpage en tuiles
           │
           ▼
       Filtrage (Convolution)
       [kernel × slide]
           │
           ▼
       Activation ReLU
       (suppression valeurs négatives)
           │
           ▼
       Pooling
       (réduction taille image)
       · Max pooling : valeur la plus élevée
       · Mean pooling : valeur moyenne
       · Sum pooling : somme des pixels
           │
           ▼
       Répétition N couches...
           │
           ▼
       Flattening (mise à plat → vecteur)
           │
           ▼
       Réseau multicouches (classification)
           │
           ▼
       Sortie : probabilités par classe`,
        },
        { type: "h", text: "La fonction de convolution" },
        { type: "p", text: "La fonction de convolution s'applique aux sous-échantillons d'images — une opération mathématique produisant une matrice de sortie généralement réduite." },
        { type: "list", items: [
          "Convolution classique — chaque élément du kernel est multiplié par son équivalent dans le sous-échantillon, la valeur reportée étant la somme des calculs",
          "Convolution \"dilatée\" — identique, mais on ne prend qu'un pixel sur X (le dilation rate)",
          "Convolution transposée",
          "Separable convolution",
        ]},
        { type: "p", text: "La convolution est associée à une fonction d'activation ReLU pour augmenter les écarts entre deux caractéristiques d'images (suppression des valeurs négatives) — les opérations de convolution sont linéaires mais les images ne le sont pas. Le \"flattening\" (mise à plat) met bout à bout les images pour en faire un vecteur." },
        { type: "p", text: "La meilleure méthode reste de prendre le problème à l'envers : partir de l'application à traiter et en déduire l'architecture neuronale la plus appropriée." },
        { type: "h", text: "Conclusion — Réseaux neuronaux" },
        { type: "p", text: "En même temps que les applications d'IA, ML et deep learning se diversifient et gagnent en maturité, les réseaux neuronaux vont prendre de l'\"épaisseur\" grâce aux processeurs dédiés IA et aux ressources réseaux en développement constant — sans pour autant atteindre le nirvana, imprudemment annoncé, d'une similitude avec le modèle humain." },
        { type: "note", variant: "success", title: "Je retiens — Les réseaux neuronaux artificiels", text: "Les réseaux neuronaux sont des plates-formes matérielles dans lesquelles sont implémentés des algorithmes qui simulent le comportement d'un cerveau humain. Un réseau neuronal se caractérise par une succession d'activations entre neurones de couches adjacentes. Il existe de nombreuses manières d'établir une correspondance entre valeurs numériques et non numériques : le \"compartimentage\". Le mode convolutif CNN est sans doute l'une des formes neuronales les plus connues." },
      ],
    },
    {
      id: "ia-learning-machine",
      title: "7. Learning machine, l'auto-apprentissage pour le décisionnel",
      blocks: [
        { type: "p", text: "Le domaine du décisionnel a connu trois grandes étapes : les entrepôts de données (interroger explicitement via un langage de requête), le datamining (laisser l'entrepôt sortir des corrélations non évidentes), et les learning machines (des machines qui apprennent seules, sans programmation, après une phase d'apprentissage sur les données à analyser)." },
        { type: "p", text: "Le principe du \"learning machine\" est la découverte et l'apprentissage d'un algorithme portant sur des données destinées à prédire une valeur. Il ne s'agit en aucune manière d'une simple extrapolation : si une moto de 100 cm³ coûte 1000€ et une de 2000 cm³ coûte 2000€, en déduire qu'une de 1500 cm³ coûtera 1500€ est stupide car on connaît déjà le lien mathématique — l'apprentissage, c'est très différent." },
        { type: "p", text: "L'apprentissage consiste à amasser un volume d'informations sur un objet (prix, vétusté, poids, taille, densité…) dont on cherche à déterminer la valeur sans pouvoir définir a priori une relation mathématique de cause à effet. Une \"learning machine\" est un dispositif capable d'apprendre une relation entre ces informations et le critère à quantifier — elle détecte et apprend un algorithme lui permettant d'effectuer des prévisions impossibles à appréhender par un humain." },
        {
          type: "diagram",
          content: `Apprentissage vs Extrapolation :

Extrapolation :
Prix(cm³) ──► formule linéaire connue ──► résultat prévisible
(pas d'apprentissage, juste du calcul)

Apprentissage (Learning Machine) :
[Prix + vétusté + poids + taille + densité + ...]
             │
             ▼ phase d'apprentissage
         Algorithme appris
             │
             ▼
     Prédiction de valeur impossible à obtenir manuellement`,
        },
        { type: "h", text: "Les familles de prédiction \"learning machine\"" },
        { type: "p", text: "Les régressions : prédisent une valeur numérique continue à partir de plusieurs critères numériques (ex : le prix d'une voiture selon cylindrée, marque, couleur, vitesse max — transformés en valeurs numériques lors du \"featuring\"). La prédiction se fonde sur un algorithme, peut-être une combinaison de régressions linéaires." },
        { type: "p", text: "Les classifications : identifient les classes d'appartenance de nouveaux objets à partir d'exemples antérieurs — l'exemple le plus connu étant celui des iris, dont on détermine l'espèce à partir de la longueur/largeur des pétales et sépales." },
        { type: "p", text: "Le clustering : regroupe les données par similarité, sans indications préalables. Souvent placé dans les classifications, la différence étant que les groupes ne sont pas identifiés en amont mais résultent de l'analyse des données." },
        { type: "table", headers: ["Famille", "Objectif", "Données de sortie", "Exemple"], rows: [
          ["Régression", "Prédire une valeur continue", "Nombre", "Prix d'une voiture"],
          ["Classification", "Identifier une classe", "Catégorie", "Espèce d'une fleur"],
          ["Clustering", "Regrouper par similarité", "Groupes", "Segmentation clients"],
        ]},
        { type: "h", text: "Les usages" },
        { type: "p", text: "Deux grandes familles d'usage : le datamining avancé (analyse prédictive sur des volumes dépassant les capacités humaines) et le développement d'applications spécifiques (moteurs de recommandations, systèmes experts, analyse comportementale d'infrastructures industrielles)." },
        { type: "note", variant: "success", title: "Je retiens — Learning machine", text: "On distingue l'apprentissage de la simple extrapolation ou déduction. L'apprentissage fait intervenir des algorithmes, pas un simple calcul logique. Une \"learning machine\" apprend une relation entre les informations fournies et le critère à quantifier. Elle fonde ses prédictions sur les régressions, classifications ou le clustering. Utilisée dans le datamining avancé et le développement d'applications spécifiques." },
      ],
    },
    {
      id: "ia-extraction-caracteristiques-images",
      title: "8. IA : l'extraction des caractéristiques d'images",
      blocks: [
        { type: "p", text: "De nombreuses applications d'IA ont besoin d'extraire les éléments caractéristiques d'une image : reconnaissance de scène, navigation, recherche et indexation d'images, suivi d'objets, vision artificielle, pilotage de robot, navigation autonome, authentification, etc." },
        { type: "p", text: "Ces applications sont fondées sur des modèles mathématiques difficiles à comprendre (opérateur gaussien, Laplacien, développement de Taylor…). L'objectif ici est de comprendre ce que recouvrent les outils, en particulier SIFT, le plus important d'entre eux." },
        { type: "p", text: "C'est là qu'on réalise que les réseaux neuronaux ne méritent pas vraiment le qualificatif d'\"intelligents\" : ce sont des montages hétéroclites qui tentent de simuler ce que notre cerveau fait sans effort — de la simulation, pas de l'intelligence." },
        { type: "h", text: "De quoi parle-t-on ?" },
        { type: "p", text: "Le processus de reconnaissance est structuré en trois phases : la détection des points significatifs, leur description, et la recherche des corrélations entre images sur la base de ces éléments." },
        { type: "p", text: "On cherche à détecter deux natures de \"features\" : les points d'intérêt (du fait de leur position et caractéristiques) et les \"edges\"/arêtes (lignes caractérisées par leur orientation). Un point d'intérêt est par exemple un point qui change brusquement de direction (les \"corners\") — un peu comme les points singuliers d'une empreinte digitale. Ces points ne doivent pas dépendre de facteurs externes (brillance) et doivent garder le même emplacement spatial d'une image à l'autre." },
        { type: "p", text: "On distingue aussi les caractéristiques selon qu'elles sont locales (un point d'intérêt), globales (l'ensemble de l'image) ou semi-globales (une portion)." },
        { type: "table", headers: ["Algorithme", "Nom complet", "Spécialité"], rows: [
          ["SIFT", "Scale Invariant Feature Transform", "Description + détection, générique"],
          ["SURF", "Speeded Up Robust Feature", "Approximation rapide SIFT, temps réel"],
          ["BRIEF", "Binary Robust Independent Elementary Features", "Plus rapide, pré-lissage gaussien"],
          ["FAST", "Features from Accelerated Segment Test", "Coins, vidéo temps réel"],
          ["ORB", "Oriented FAST and Rotated BRIEF", "Alternative libre SIFT/SURF"],
          ["FLANN", "Fast Library for Approximate Nearest Neighbors", "Comparaison (matching)"],
          ["HARRIS", "—", "Détection de coins, 1988"],
          ["Brute-Force Matcher", "—", "Comparaison (matching)"],
        ]},
        { type: "h", text: "Détecteurs et descripteurs" },
        { type: "p", text: "Deux concepts à ne pas confondre : un détecteur de point d'intérêt est un algorithme qui recherche des points selon un critère donné (souvent l'optimum d'une fonction) ; un descripteur est le mode de représentation de ce point-clé, sous forme d'un vecteur de valeurs. Regroupés, le point d'intérêt et son descripteur constituent une caractéristique \"locale\"." },
        { type: "h", text: "L'exemple de SIFT" },
        { type: "p", text: "SIFT est l'algorithme le plus utilisé aujourd'hui pour la détection et le calcul des descripteurs. Il possède un gros avantage : il est indépendant des transformations géométriques (homothéties, rotations) mais moins performant avec des transformations affines (transposition d'une image d'un espace affine à un autre, souvent rotation + mise à l'échelle + translation)." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────┐
│  1. Construction de l'espace des échelles│
│     → Pyramide gaussienne (octaves)      │
│     → L(x,y,σ) = f(facteur d'échelle σ)│
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  2. Floutage (Blurring)                  │
│     → Opération gaussienne par octave   │
│     → L(x,y,σ) = G(x,y,σ) * I(x,y)    │
│     → Plus σ est élevé, plus c'est flou │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  3. Construction pyramide DoG            │
│     (Differences of Gaussian)            │
│     → D(x,y,σ) = L(x,y,kσ) – L(x,y,σ)│
│     → Localisation des points d'intérêt │
│     → Élimination des points à faible   │
│       apport (développement de Taylor)  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  4. Détermination de l'orientation       │
│     des points clés                      │
│     → 36 directions pour 360°           │
│     → 1 mesure tous les 10°             │
│     → Conservation de la plus forte     │
│       variation gaussienne              │
│     → Description : I(x, y, σ, θ)      │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  5. Calcul des descripteurs              │
│     → Bloc 16×16 fenêtres autour du     │
│       point, découpé en sous-blocs 4×4  │
│     → 8 directions par sous-bloc        │
│     → Vecteur final : 4×4×8 = 128 val  │
└─────────────────────────────────────────┘`,
        },
        { type: "p", text: "Phase 1 — Construction de l'espace d'échelle : SIFT construit un espace d'échelles avec différents niveaux (\"octaves\"), chacun mettant en valeur certains détails. L'espace est une fonction L(x,y,σ) où x,y sont les coordonnées et σ le facteur d'échelle. La représentation aboutit à une pyramide de Gauss." },
        { type: "code", filename: "sift-phase2-floutage.txt", language: "text", code: `L(x,y,σ) = G(x,y,σ) * I(x,y)

G est le « Gaussien de floutage » :
G(x,y,σ) = (1/2πσ²) × e^(–(x²+y²)/2σ²)` },
        { type: "p", text: "Plus le facteur d'échelle σ est élevé, plus le floutage est fort. On obtient une pyramide dont tous les pixels ont été modifiés par la convolution." },
        { type: "p", text: "Phase 3 — Pyramide des DoG : les images de \"différences gaussiennes\" sont obtenues par la différence entre deux images consécutives d'une même octave." },
        { type: "code", filename: "sift-phase3-dog.txt", language: "text", code: `D(x,y,σ) = L(x,y,kσ) – L(x,y,σ)` },
        { type: "p", text: "Pour déterminer les points intéressants, on compare chaque pixel à ses 8 voisins immédiats et aux 9 voisins des octaves supérieure et inférieure. Un point est \"d'intérêt\" s'il est un extrema local (inférieur ou supérieur à ses 8+9+9 = 26 voisins). L'algorithme affine ensuite les données via un développement de Taylor et un paramétrage de seuils." },
        { type: "p", text: "Phase 4 — Détermination des orientations : on attribue une orientation à chaque point en déterminant les directions où la variation d'intensité est la plus forte. Autour de chaque élément (taille fixée à 1,5× le facteur d'échelle σ selon Lowe), on mesure le gradient dans 36 directions (360° à raison d'une mesure tous les 10°), en conservant les valeurs les plus élevées (au-dessus de 80% par exemple). Description finale d'un point : I(x, y, σ, θ)." },
        { type: "p", text: "Phase 5 — Calcul des descripteurs : chaque point est enrobé dans un bloc de 16×16 fenêtres, découpé en sous-blocs 4×4, avec 8 directions par sous-bloc — soit un vecteur final de 128 valeurs (4×4×8). Ce processus rend le descripteur indépendant de la rotation de l'image. Comme SIFT fournit des descripteurs normalement insensibles à la luminosité, on peut fixer un seuil (ex : 0,3) au-delà duquel les valeurs sont écrêtées." },
        { type: "h", text: "Les autres algorithmes" },
        { type: "p", text: "HARRIS : détecteur de coins (\"corners\"), introduit par Chris Harris et Mike Stephens en 1988, fondé sur l'algorithme de Moravec — considère un voisinage centré sur un pixel, le décale dans plusieurs directions, puis calcule les gradients gaussiens." },
        { type: "p", text: "SURF (Speeded-Up Robust Features) : approximation plus rapide de SIFT, adaptée au temps réel (suivi/reconnaissance d'objets), présentée en 2006 par des chercheurs de l'ETH Zurich et de l'université catholique de Louvain — fondée sur les ondelettes et les images intégrales." },
        { type: "p", text: "BRIEF (Binary Robust Independent Elementary Features) : détecteur plus rapide que SIFT et SURF, avec pré-lissage via un noyau gaussien." },
        { type: "p", text: "FAST (Features from Accelerated Segment Test) : détecteur de coins dû à Edward Rosten et Tom Drummonds (2006), très rapide, adapté au traitement vidéo temps réel." },
        { type: "p", text: "ORB (Oriented FAST and Rotated BRIEF) : développé chez OpenCV en 2011, alternative efficace à SIFT et SURF, non protégée par des brevets (contrairement à SIFT et SURF)." },
        { type: "h", text: "L'avenir" },
        { type: "p", text: "Les technologies d'analyse d'images et de détection de caractéristiques constituent déjà une véritable industrie (robotique, vision automatique, recherche d'objets) — l'un des domaines les plus dynamiques de ce qu'il ne faudrait plus appeler Intelligence Artificielle, mais plutôt simulation de l'intelligence." },
        { type: "note", variant: "success", title: "Je retiens — L'extraction d'images", text: "Le processus de reconnaissance est structuré en 3 phases : détection des points significatifs, description, recherche des corrélations. Le point d'intérêt et son descripteur constituent une caractéristique locale. SIFT est l'algorithme le plus utilisé pour la détection et le calcul des descripteurs, divisé en 5 phases : espace d'échelles, floutage, DoG, orientation, descripteurs. Les technologies d'analyse d'images constituent déjà une véritable industrie." },
      ],
    },
    {
      id: "ia-apprentissage-renforcement",
      title: "9. Machine Learning, l'apprentissage par renforcement",
      blocks: [
        { type: "p", text: "L'apprentissage par renforcement (\"reinforcement learning\") est à placer au même niveau que l'apprentissage supervisé ou non supervisé, dont il constitue une alternative. Il résulte de travaux remontant aux années 1990 et concerne l'IA, mais aussi les neurosciences et l'automatisme." },
        { type: "p", text: "Il est fondé sur le concept d'\"agent\" placé dans un environnement, sur lequel il effectue des actions ayant des conséquences sur son propre état et celui de l'environnement. L'agent apprend la séquence d'actions optimale pour obtenir la meilleure récompense (récompenses mais aussi punitions, regroupées sous le terme de \"renforcement\"). Exemple concret : chercher la meilleure séquence de choix pour sortir d'un labyrinthe, le nombre minimum de choix constituant la récompense." },
        { type: "list", items: [
          "Il intervient en environnement partiellement ou totalement inconnu",
          "Il agit par expérience, grâce aux essais et erreurs",
          "Il interagit avec l'environnement, celui-ci lui retournant des informations induites par ses actions",
        ]},
        { type: "h", text: "Les fondements" },
        { type: "p", text: "L'apprentissage par renforcement est le fruit d'une longue maturation, débutée fin des années 50 avec la communication de Richard Bellman sur les chaînes de Markov (MDP) et la programmation dynamique." },
        { type: "p", text: "Une chaîne décisionnelle de Markov est le premier formalisme d'apprentissage par renforcement : un environnement dans un certain nombre d'états Si, sur lesquels s'appliquent des actions A(si), entraînant une récompense R(si) selon un modèle de transition P(si, si+1). La programmation dynamique (aussi de Bellman) décompose un problème en sous-problèmes dont on stocke les solutions pour les réutiliser." },
        { type: "p", text: "Les véritables débuts : Richard Sutton sur le TD-Learning (Temporal Difference) en 1988, et Chris Watkins sur le Q-Learning en 1989 — le Q-Learning ne nécessite aucun modèle initial de l'environnement, Q désignant la fonction qui \"mesure la qualité d'une action exécutée à partir d'un état donné du système\"." },
        {
          type: "diagram",
          content: `Positionnement du renforcement dans le Machine Learning :

              MACHINE LEARNING
              /       |       \\
Apprentissage   Apprentissage  Apprentissage
non supervisé   supervisé      par renforcement
  |               |              |
Clustering    Classification   Optimisation
Réduction     Régression       d'actions
dimensionnelle                 (récompenses/punitions)

→ Le renforcement se rapproche conceptuellement de l'apprentissage
  non supervisé mais optimise un processus d'actions`,
        },
        { type: "h", text: "Une approche très logique" },
        { type: "p", text: "Cette forme d'apprentissage colle à merveille avec ce que pratique la nature depuis des millions d'années : fonctionner à coups de tentatives, plus ou moins conscientes, se traduisant par des réussites et des échecs. La difficulté : une action A sur un état S peut donner une faible récompense contrairement à une action A' plus intéressante — mais c'est sur l'ensemble du processus qu'il faut juger la succession des actions, pas chacune individuellement." },
        { type: "p", text: "En définitive, l'apprentissage par renforcement est l'algorithme qui permet d'optimiser l'ensemble des conséquences (récompenses ou punitions) résultant d'une série d'actions portant sur un environnement. Différence avec le non supervisé : celui-ci cherche des similitudes entre objets, pas à optimiser un processus d'actions. Les deux approches peuvent se combiner en \"deep reinforcement learning\", où des agents appliquent récompenses/sanctions sur fond de réseaux neuronaux." },
        { type: "h", text: "Les algorithmes les plus utilisés" },
        { type: "p", text: "Q-Learning (Watkins) : mécanisme \"off-policy\" — l'algorithme apprend la méthode optimale (valeurs Q) indépendamment des actions d'agents, il fonctionne \"en aveugle\"." },
        { type: "p", text: "SARSA (State-Action-Reward-State-Action) : algorithme \"on-policy\" qui tient compte de l'action à venir, la \"greedy action\" (politique avide)." },
        { type: "table", headers: ["Type", "Principe", "Exemple"], rows: [
          ["Off-policy", "Apprend la valeur Q indépendamment des actions courantes", "Q-Learning"],
          ["On-policy", "Tient compte de l'action à venir", "SARSA"],
        ]},
        { type: "p", text: "DQN (Deep Q-Networks) : applique une technique neuronale pour calculer la valeur Q, mais n'agit que sur des valeurs discrètes dans un espace à faible dimension." },
        { type: "p", text: "DDPG (Deep Deterministic Policy Gradient) : modèle \"off-policy\" adapté aux valeurs continues et espaces à dimensions plus élevées." },
        {
          type: "diagram",
          content: `Schéma général du renforcement :

         Agent (algorithme AR)
        /          \\
  QP(S,A)       Stratégie (policy)
  Q-value        - la stratégie employée pour
  Valeur         déterminer la prochaine action
  attendue       (off ou on-policy)
  fin de cycle   sur l'état courant
       \\          /
        Environnement
        (objet sur lequel l'agent agit)
            |
         État S
         Sanction R(t+1)`,
        },
        { type: "h", text: "Les API utilisables" },
        { type: "p", text: "TensorFlow Agents : extension du framework TensorFlow, étend l'interface OpenAI Gym et incorpore BatchPPO (version optimisée de l'algorithme Proximal Policy Organization)." },
        { type: "p", text: "Ray RRLib : développé à UC Berkeley, principal \"utilisateur\" Spark d'Apache, fonctionne sur TensorFlow et sur l'API PyTorch en Python." },
        { type: "p", text: "Roboschool : développé par OpenAI, intégré dans OpenAI Gym, compatible TensorFlow et Theano — usage principal : apprentissage des robots par renforcement." },
        { type: "p", text: "ML-Agents (Machine Learning Agents) : développé par Unity Technology, pour l'apprentissage des jeux, véhicules autonomes et robots." },
        { type: "p", text: "Coach : API Python exploitant un \"cœur\" OpenAI Gym, supporte aussi Roboschool, gym-extensions, PyBullet et ViZDoom. Tous ces frameworks sont en phase de maturation, avec un engouement fort des universités et centres de recherche — Python y joue un grand rôle." },
        { type: "note", variant: "success", title: "Je retiens — L'apprentissage par renforcement", text: "3 caractéristiques : environnement inconnu, agit par expérience (essais/erreurs), interagit avec l'environnement. Fonctionne à coups de tentatives, l'expérience et la réussite n'étant que le choix a posteriori de la succession d'actions. C'est l'algorithme qui permet d'optimiser l'ensemble des conséquences résultant d'une série d'actions." },
      ],
    },
    {
      id: "ia-deep-learning",
      title: "10. \"Deep Learning\", fille aînée de l'IA ?",
      blocks: [
        { type: "p", text: "Le \"deep learning\" (apprentissage en profondeur) est un ensemble de méthodes qui bénéficient des progrès des réseaux neuronaux pour reconnaître des objets, images, images dans les images, sons, phrases dans une communication téléphonique, etc." },
        { type: "p", text: "S'il en est tant question aujourd'hui, ce n'est pas uniquement parce que les algorithmes ont progressé, mais parce que les réseaux neuronaux ont fortement évolué et sont devenus plus puissants — ce mariage explique les applications chez IBM Watson, Facebook, Google, Microsoft, etc." },
        { type: "h", text: "Le principe de l'apprentissage" },
        { type: "p", text: "Un réseau neuronal simule l'organisation d'un cerveau vivant, constitué de couches successives de \"neurones\"-processeurs reliés entre eux. Un processeur étant infiniment moins performant qu'un neurone, il lui faut une phase d'apprentissage." },
        { type: "p", text: "Selon Yann LeCun, l'un des inventeurs du \"deep learning\", l'apprentissage a évolué. Au départ, on faisait de l'apprentissage supervisé hors réseaux neuronaux, avec deux blocs : un extracteur de caractéristiques (transformer l'image en vecteur de caractéristiques) et un classificateur linéaire (calculer une somme pondérée des caractéristiques)." },
        { type: "p", text: "Le vecteur de caractéristiques est envoyé au classificateur, qui multiplie chaque caractéristique par un poids positif ou négatif avant d'en faire la somme. Si la somme dépasse une certaine valeur, l'objet est classé. Exemple : reconnaître une voiture → présence de roues = poids fort, présence de vitres = poids plus faible (une maison peut aussi avoir des vitres). Chaque catégorie d'objets nécessitait son propre classificateur, à fabriquer à chaque apprentissage — de lourdes interventions humaines." },
        { type: "h", text: "Le rôle des réseaux neuronaux" },
        { type: "p", text: "Un réseau neuronal en \"deep learning\" est un ensemble de couches de processeurs communiquant entre elles pour effectuer une reconnaissance par étapes — globale d'abord, de plus en plus précise ensuite. C'est un empilement de systèmes de classification linéaires avec les mêmes mécanismes de pondération, posé sur une architecture de réseaux neuronaux." },
        { type: "p", text: "La technique d'apprentissage utilisée est celle du \"gradient\" : mesure de l'erreur en sortie en fonction de la modification de chaque paramètre — pratiquée depuis près de 40 ans sous le nom de méthode de rétropropagation. La reconnaissance se fait par paliers successifs : d'abord les contours globaux, puis des éléments plus fins, jusqu'à désigner un objet sans ambiguïté." },
        {
          type: "diagram",
          content: `Deep Learning — Architecture d'apprentissage :

Image entrée
     │
     ▼
[Couche 1 : contours globaux, formes basiques]
     │
     ▼
[Couche 2 : combinaisons de formes, textures]
     │
     ▼
[Couche 3 : parties d'objets]
     │
     ▼
[Couche N : objet complet reconnu]
     │
     ▼
Vecteur de caractéristiques
     │
     ▼ rétropropagation du gradient
Classification finale
(ex: Girafe 95%, Chameau 3%, ...)`,
        },
        { type: "h", text: "Les types de réseaux neuronaux" },
        { type: "p", text: "Il existe différentes formes de réseaux neuronaux pour le \"deep learning\", dont les réseaux convolutifs, où chaque élément d'un module n'est connecté qu'à un petit nombre d'éléments voisins dans la couche précédente. Il n'est plus nécessaire de fabriquer un extracteur de caractéristiques à la main — l'apprentissage fait ce travail." },
        { type: "p", text: "La première couche détecte des éléments globaux (contours d'objets), les couches suivantes déclinent ces objets de manière de plus en plus fine, jusqu'à un vecteur de caractéristiques précis. Après formation à la reconnaissance des caractères, le réseau les retrouve facilement même noyés dans une image." },
        { type: "h", text: "Pourquoi aujourd'hui ?" },
        { type: "p", text: "L'explosion du \"deep learning\" n'est pas tant liée à l'amélioration des algorithmes qu'aux progrès des processeurs, en particulier des GPU (Graphic Processing Unit), qui ont remplacé les processeurs à usage général — ce qui explique que NVidia soit devenu un spécialiste de la reconnaissance d'images. La miniaturisation des ressources de traitement rend envisageable ce qui était inimaginable dans les années 80." },
        { type: "h", text: "Des applications qui explosent" },
        { type: "table", headers: ["Entreprise/Outil", "Application", "Détails"], rows: [
          ["Meta – DeepFace", "Reconnaissance faciale", "97,25% de réussite, 4M photos, 120M paramètres"],
          ["Microsoft Translator", "Traduction vidéo temps réel", "6 langues vidéo, 50 langues écrit (Skype)"],
          ["NVidia Drive PX", "Voitures autonomes", "12 caméras, Tesla/Honda/Audi"],
          ["NVidia", "Contrôle qualité industriel", "3-7 jours d'apprentissage vs 1-2 mois avant"],
          ["Cortana / Siri", "Traitement du langage naturel", "Microsoft / Apple"],
          ["Affectiva / Indico", "Détection des émotions", "Vidéos et images fixes"],
          ["Gridspace", "Reconnaissance de la parole", "Identification du locuteur en conference call"],
          ["Ditto Labs", "Identification de logos", "Photos postées sur réseaux sociaux"],
          ["Deep Instinct", "Détection d'attaques APT", "Cybersécurité"],
          ["Clarifai", "Classification images/vidéos", "Dans le Cloud"],
          ["Idibon", "Analyse de textes", "NLP"],
          ["Enlitic", "Analyse médicale", "Radios, images MRI"],
        ]},
        { type: "note", variant: "success", title: "Je retiens — Le Deep Learning", text: "L'apprentissage d'un algorithme de \"deep learning\" a subi plusieurs évolutions. Système entraînable constitué d'un ensemble de couches, chaque couche affectée à une étape du traitement de reconnaissance. Il n'est plus nécessaire de fabriquer un extracteur de caractéristiques à la main. L'explosion du deep learning est liée aux progrès des GPU, pas aux algorithmes eux-mêmes. Aujourd'hui tous les grands acteurs de l'informatique s'y sont lancés." },
      ],
    },
    {
      id: "ia-sentiments-emotions",
      title: "11. Un algorithme peut-il éprouver des sentiments ?",
      blocks: [
        { type: "p", text: "L'IA suscite des débats passionnés : un algorithme pourra-t-il suffisamment évoluer pour être capable d'éprouver des sentiments et émotions, comme un humain, sans avoir été programmé pour cela, et donc de sa propre initiative ?" },
        { type: "h", text: "À très long terme" },
        { type: "p", text: "Il y a des similitudes entre un algorithme posé sur un réseau neuronal et un cerveau humain — l'un essaie d'imiter l'autre. Les processus de transmission ne sont pas les mêmes, mais on peut imaginer que dans 100 ou 1000 ans, une entité artificielle pourrait se comporter comme un être humain. Certains pensent que l'évolution naturelle de l'IA sera sa capacité à ressentir des émotions — mais personne n'est d'accord sur l'échéance." },
        { type: "h", text: "Distinguer les sentiments des émotions" },
        { type: "p", text: "L'approche la plus courante : les émotions sont un état physique, les sentiments des attitudes mentales. L'émotion est un état affectif passager intense (cris, pleurs, rires). Le sentiment est la prise de conscience de cette émotion — un état affectif durable, orienté vers une personne, une situation, un environnement. L'émotion peut s'exprimer sans raison particulière, le sentiment est orienté." },
        { type: "list", items: [
          "La haine est un sentiment attisé par la colère (émotion)",
          "L'admiration est un sentiment nourri par la joie (émotion)",
          "L'amour est un sentiment engendré par diverses émotions, parfois contradictoires (attachement, tendresse, désir…)",
        ]},
        { type: "p", text: "Un être humain est \"sentient\" : capable de ressentir des émotions et de percevoir son environnement de manière subjective. La sentience et la conscience sont intimement liées." },
        { type: "h", text: "Les limites de l'IA" },
        { type: "p", text: "Le fond du problème : un algorithme peut-il ressentir une émotion et donc un sentiment ? La réponse est non. On peut programmer ou modéliser un comportement qui simule ce ressenti, mais cela reste artificiel et limité à ce qu'a prévu le concepteur. C'est la spontanéité et la subjectivité qui font la différence — il est aujourd'hui impossible de laisser à l'IA l'initiative de décider qu'un objet est beau ou non." },
        { type: "p", text: "On ne peut que simuler des émotions et sentiments, en les fondant sur des données concrètes (lieu géographique, antécédents, éducation, expérience…). La société Affectiva, spécialisée en IA autonome, a enregistré par caméra les réactions de millions d'usagers soumis à diverses publicités (expression faciale, paroles, gestuelle) — les réactions se sont révélées extrêmement diverses et impossibles à anticiper." },
        { type: "p", text: "L'IA et ses algorithmes sont incapables de ressentir un sentiment ou une émotion autrement qu'en quantifiant ses conséquences — le blocage étant son manque d'indépendance et l'obligation de passer par un programme écrit par un humain. Le jour où l'IA sera dotée de libre arbitre et de conscience, les choses changeront en profondeur — mais ce n'est pas envisageable à horizon prévisible." },
        { type: "h", text: "La théorie des émotions de Plutchik" },
        { type: "p", text: "Robert Plutchik, psychologue américain (disparu en 2006), est célèbre pour ses recherches sur les émotions. Il considérait qu'il existe une hiérarchie des émotions, avec des émotions de base qui, combinées, génèrent d'autres émotions — il en a déduit dès 1980 la \"roue des émotions\", avec 8 émotions de base." },
        {
          type: "diagram",
          content: `Roue des émotions de Plutchik :

         JOIE
          │
CONFIANCE─┼─ANTICIPATION
          │
PEUR ─────┼───── COLÈRE
          │
SURPRISE──┼─DÉGOÛT
          │
       TRISTESSE

8 émotions primaires qui, combinées, génèrent des émotions dérivées.
Exemple : Joie + Confiance = Amour
          Peur + Surprise = Effroi
          Colère + Dégoût = Mépris`,
        },
        { type: "p", text: "Selon Plutchik, les émotions sont des \"mécanismes biologiques qui ont évolué avec le temps de manière à faciliter l'insertion et l'adaptation des animaux dans leur environnement\". Transposé à l'IA, on ne perçoit pas aujourd'hui comment un algorithme pourrait évoluer pour mieux s'adapter à son environnement de cette manière." },
        { type: "note", variant: "success", title: "Je retiens — Les limites de l'algorithme", text: "Il y a des similitudes entre un algorithme sur un réseau neuronal et un cerveau humain. L'approche la plus courante : émotions = état physique, sentiments = attitudes mentales. C'est la spontanéité et la subjectivité qui font la différence. L'IA et ses algorithmes sont incapables de ressentir un sentiment ou une émotion autrement qu'en quantifiant ses conséquences. On ne perçoit pas aujourd'hui comment un algorithme pourrait évoluer pour mieux s'adapter à son environnement." },
      ],
    },
    {
      id: "ia-chatgpt",
      title: "12. ChatGPT, ne pas (trop) s'enthousiasmer",
      blocks: [
        { type: "p", text: "À en croire la presse et certains observateurs éblouis, ChatGPT d'OpenAI serait la grande nouveauté du siècle. Sans nier l'intérêt de l'outil, qui ne pourra que s'améliorer, il convient de modérer cet enthousiasme." },
        { type: "p", text: "ChatGPT est un outil conversationnel développé par OpenAI, capable de répondre à des questions en langage naturel. OpenAI est une structure à but non lucratif créée en 2015 par Elon Musk (qui a depuis pris ses distances), Sam Altman et d'autres spécialistes de l'IA. ChatGPT est une application de GPT, un générateur de texte capable de produire des documents complets à partir d'une simple demande en langage naturel." },
        { type: "p", text: "ChatGPT se situe un cran au-dessus des moteurs de recherche classiques : c'est lui qui prend l'initiative de fabriquer les réponses. Avec Google, on propose des mots-clés et il envoie des liens ; avec ChatGPT, c'est l'outil qui construit la réponse sans nous demander notre avis. D'actifs, nous devenons passifs — c'est là que se situe le plus grand danger." },
        {
          type: "diagram",
          content: `Évolution des outils de recherche :

Entrepôts de données  ──► Requêtes SQL explicites
        │
        ▼
    Datamining       ──► Corrélations non évidentes
        │
        ▼
Moteurs de recherche ──► Mots clés → liens Internet
(Google, Bing)            L'humain analyse et conclut
        │
        ▼
    ChatGPT          ──► Question → Réponse construite
(Learning Machine)        L'IA analyse et conclut à notre place`,
        },
        { type: "p", text: "Pour atteindre une telle pertinence, ChatGPT a été longuement entraîné sur des conversations initiées par des personnes physiques et sur de nombreux documents issus d'Internet (même s'il n'est pas \"connecté\" au réseau). Le processus ingère des informations via un mécanisme d'apprentissage profond (réseau neuronal à grand nombre de couches), apprenant à détecter les mots-clés des questions pour faire ressortir des réponses cohérentes." },
        { type: "p", text: "Deux aspects originaux : le complément de l'apprentissage profond par renforcement (chaque étape est évaluée en termes de \"récompenses\") et la construction syntaxique des réponses (phrases parfaitement construites, contribuant à une conversation crédible). ChatGPT a rencontré un succès phénoménal : 1 million de téléchargements en 5 jours (contre 10 mois pour Facebook pour atteindre le même score)." },
        { type: "h", text: "Garbage in, garbage out" },
        { type: "p", text: "Plusieurs aspects incitent à la prudence :" },
        { type: "list", items: [
          "Non connecté à Internet — son apprentissage se fait sur des conversations et documents non obtenus automatiquement ; pour aller plus loin, il faudrait le connecter à un ou plusieurs moteurs de recherche",
          "Problème de confiance — ce n'est pas parce que les phrases sont \"bien tournées\" que le contenu a du sens ; si la base de connaissances est truffée d'incohérences, elle ne restituera que des incohérences (\"garbage in, garbage out\")",
          "Usage à double tranchant — peut être utilisé à bon escient, mais aussi à des fins de propagande par des organisations ou États",
          "Résistance des GAFA — les principaux moteurs de recherche (Google en tête) ne sont pas pressés de servir de faire-valoir à ChatGPT et ont leurs propres produits équivalents en préparation",
        ]},
        { type: "note", variant: "success", title: "Je retiens — ChatGPT", text: "ChatGPT est un outil conversationnel développé par OpenAI, capable de répondre à des questions en langage naturel. Longuement entraîné sur de nombreux documents et conversations sur des domaines variés. Forces : complément de l'apprentissage profond par renforcement + construction syntaxique des réponses. Nouvelle étape dans la vie des moteurs de recherche, utilisable à bon escient mais aussi avec de lourdes arrière-pensées." },
      ],
    },
    {
      id: "ia-auto-programmation",
      title: "13. Un algorithme peut-il programmer seul ?",
      blocks: [
        { type: "p", text: "Fait notable : la population qui semble la moins inquiète de l'arrivée d'une armée d'algorithmes censée la remplacer, ce sont les programmeurs eux-mêmes. Car si un algorithme peut coder quelque chose sans intelligence dans le processus, cela n'a rien à voir avec la programmation à proprement parler." },
        { type: "p", text: "Selon Wikipédia, un programme est un ensemble d'opérations destinées à être exécutées par un ordinateur, comportant des étapes de définition, de conception, d'écriture, de tests, d'installation et de maintenance." },
        { type: "p", text: "Pour produire un programme, il faut d'abord savoir \"penser\". Et pour penser, il faut être doté de raison, et donc \"être\", comme l'a rappelé le philosophe français René Descartes en 1637 dans son Discours de la méthode : \"Cogito, ergo sum\" (\"Je pense, donc je suis\")." },
        { type: "p", text: "Les machines ne font qu'appliquer une succession linéaire d'instructions imaginée par un être intelligent. La machine et son algorithme sont confrontés à deux questions existentielles : savoir si une succession d'évènements est programmable, et traduire ce constat en un programme structuré — le tout sans aide. Ce n'est pas gagné." },
        { type: "h", text: "L'ambiguïté" },
        { type: "p", text: "L'ambiguïté vient de ce que l'on confond, volontairement ou non, plusieurs concepts : conception, modélisation, compilation, transpilage, interprétation. Un algorithme, déjà capable de traduire une source en exécutable, saura bientôt convertir un modèle UML, BPMN ou un autre langage formel en code exécutable — mais il ne saura pas prendre à son compte la phase de conception de la programmation, celle qui nécessite des neurones interconnectés." },
        {
          type: "diagram",
          content: `Ce qu'un algorithme sait faire vs ce qu'il ne sait pas faire :

SAIT FAIRE :
  Modèle UML/BPMN ──► Algorithme ──► Code exécutable
  Source A         ──► Transpileur ──► Source B
  (dans un périmètre bien défini)

NE SAIT PAS FAIRE :
  Situation inconnue ──► ??? ──► Programme cohérent
  (sans préparation préalable)

PROBLÈME INSOLUBLE :
  Concepteur A produit un graphe
  Concepteur B produit un graphe
  ──► Aucun algorithme ne peut fusionner ces 2 graphes`,
        },
        { type: "p", text: "La grande différence entre un algorithme et un cerveau, c'est le cognitif : l'extraordinaire capacité de notre cerveau à raisonner, grâce aux milliers de synapses reliant les neurones, et à l'alchimie d'exécution qui nous permet d'aborder simultanément différents aspects d'un même problème. Si deux concepteurs produisent chacun un graphe portant sur des aspects différents d'un même programme, aucun algorithme au monde ne sera capable de les fusionner et d'en sortir une version combinée." },
        { type: "note", variant: "success", title: "Je retiens — L'auto-programmation", text: "Pour concevoir un programme, il faut savoir penser. Penser, c'est être doué de raison. La raison implique la notion de cognition. Le cerveau sait, à la différence de l'algorithme, analyser une situation à laquelle il n'est pas préparé et, surtout, mettre en relation les différents aspects de cette situation." },
      ],
    },
    {
      id: "ia-dominer-le-monde-dataisme",
      title: "14. Les algorithmes vont-ils dominer le monde ?",
      blocks: [
        { type: "p", text: "Elon Musk a averti à plusieurs reprises qu'il fallait rester très prudent avec l'Intelligence Artificielle, allant jusqu'à la qualifier de plus grande menace existentielle pour l'humanité, et a appelé à une surveillance réglementée au niveau national et international." },
        { type: "p", text: "Stephen Hawking a de son côté averti qu'une Intelligence Artificielle complète pourrait signifier la fin de l'espèce humaine : une fois développée, elle pourrait se reconstruire à un rythme croissant, tandis que les humains, limités par leur lente évolution biologique, ne pourraient suivre et seraient dépassés." },
        { type: "p", text: "Deux écoles s'opposent : ceux qui voient les machines et leurs algorithmes nous dépasser et nous ramener au rôle d'observateur passif, et ceux qui pensent au contraire que les humains vont se \"transhumaniser\", modifier leur comportement génétique et créer un genre nouveau." },
        { type: "h", text: "L'IA est-elle intelligente ?" },
        { type: "p", text: "On associe généralement l'intelligence au \"libre arbitre\" : la capacité de décider d'une conduite indépendamment de toute contrainte ou apprentissage. Une machine ne peut décider d'une conduite qu'en fonction d'un traitement de données, l'aboutissement d'un cheminement algorithmique précis — rien à voir avec le libre arbitre." },
        { type: "p", text: "Un être humain a conscience de ce qu'il fait ; pour lui, la décision est distincte de la conscience qu'il en a. L'algorithme d'IA n'a pas cette perception. Le problème : personne ne sait exactement ce qu'est la conscience ni où elle se situe. Certains, comme Yuval Noah Harari, parlent même de \"programmes\" que l'on pourrait anticiper en surveillant les stimuli du cerveau." },
        { type: "h", text: "Les algorithmes ont-ils besoin d'être intelligents pour nous remplacer ?" },
        { type: "p", text: "Pas forcément. Certains scientifiques estiment que l'IA n'a pas besoin de nous être supérieure au sens de l'intelligence pour nous remplacer — car nous ne sommes pas un modèle d'efficacité et il n'y a aucune raison de vouloir nous imiter. C'est en s'améliorant sur son point fort (le traitement des données) que l'algorithme saura d'abord nous accompagner, puis nous supplanter." },
        { type: "p", text: "C'est ce que pensent les tenants de la \"singularité technologique\", qui prévoient l'arrivée d'une super intelligence artificielle capable de s'auto-améliorer jusqu'à dépasser l'intelligence humaine — thèse développée par Raymond Kurzweil dans \"The Singularity Is Near\" (2005). Le philosophe Max More (\"Transhumanism: Toward a Futurist Philosophy\", 1990) pense que l'être humain va s'affranchir de ses limites biologiques pour devenir \"super-intelligent\". D'autres estiment que la vraie différence entre l'IA et l'humain réside dans notre capacité à éprouver des émotions et sentiments — l'intelligence émotionnelle." },
        { type: "h", text: "La religion du \"dataïsme\"" },
        { type: "p", text: "Le livre de Yuval Noah Harari, \"Homo Deus\", apporte un éclairage intéressant. Pour l'historien, l'Homo Sapiens perd le contrôle de sa destinée : les progrès de la bio-ingénierie, des interfaces cerveau-ordinateur et des algorithmes rendent probable la disparition de l'Homo Sapiens d'ici un ou deux siècles, remplacé par une sorte de mutant numérique." },
        { type: "p", text: "Harari constate l'émergence d'une nouvelle philosophie née en Californie : le dataïsme, une foi universelle dans le pouvoir des algorithmes, avec ses propres \"grands prêtres\" évangélistes technologiques. Les algorithmes, sans imiter le libre arbitre ou la conscience humaine, domineraient la race humaine grâce à leur capacité à traiter des volumes gigantesques de données." },
        { type: "list", items: [
          "Les algorithmes deviennent pertinents grâce aux réseaux neuronaux via le deep learning",
          "Ils analysent via le text mining des volumes énormes de textes",
          "Ils savent prédire les évènements avec une précision redoutable",
          "Watson d'IBM s'avère être un \"médecin\" mille fois plus pertinent selon certaines études",
          "Alphabet (Google) a créé Calico en 2013, pour mieux comprendre les moteurs de l'évolution biologique et augmenter l'espérance de vie",
        ]},
        { type: "p", text: "La grande question : saurons-nous conserver le contrôle de ces algorithmes, ou deviendront-ils indépendants faute de comprendre comment ils fonctionnent ? Pour Yuval Noah Harari, il n'y a pas de doute : nous allons disparaître." },
        { type: "note", variant: "success", title: "Je retiens — Le dataïsme", text: "On associe l'intelligence au \"libre arbitre\". Une machine, même dotée des algorithmes les plus sophistiqués, n'aura pas cette liberté. Un être humain a conscience de ce qu'il fait ; l'algorithme d'IA n'a pas cette perception. L'IA n'a pas besoin de nous être supérieure pour nous remplacer. Le dataïsme est une foi universelle dans le pouvoir des algorithmes." },
      ],
    },
    {
      id: "ia-deepfake",
      title: "15. Ce n'est qu'un début… Le Deep Fake",
      blocks: [
        { type: "p", text: "On s'est longtemps dit que la vidéo était le meilleur moyen de s'assurer de l'identité d'un interlocuteur. Le \"deep fake\" (hypertruquage), dont l'objet est de fabriquer des images et de leur faire dire n'importe quoi, risque de bouleverser cette certitude." },
        { type: "p", text: "Le terme \"deep fake\" vient de la concaténation de \"deep learning\" (apprentissage profond) et \"fakes\" (faux). C'est l'art de faire croire que la personne qui s'exprime dans une vidéo est bien réelle et prononce effectivement les phrases entendues." },
        { type: "p", text: "Cette supercherie a d'abord sévi dans le monde pornographique, mais aussi en politique, où le deep fake a permis de faire dire des propos déformés à des personnalités publiques, dont d'anciens présidents américains. Alan Turing, qui avait inventé le fameux test qui porte son nom, n'a pas pu imaginer le \"test II de Turing\" qui aurait permis de distinguer une vidéo originale d'une version falsifiée. À horizon dix ans, les falsifications en temps réel seront possibles." },
        { type: "h", text: "Plusieurs formes d'usages" },
        { type: "p", text: "Au-delà des domaines d'usage (politique, espionnage industriel, sécurité, loisirs), on distingue :" },
        { type: "list", items: [
          "Différé (mode actuel) — falsification d'une vidéo (un mot ou une phrase), fabrication de fausses vidéos complètes avec substitution des visages",
          "Temps réel (futur proche) — croire être en conversation avec une personne connue, alors qu'il s'agit d'un algorithme",
        ]},
        {
          type: "diagram",
          content: `Construction d'un deep fake :

Phase 1 — Bibliothèque de clips de la cible :
  Des milliers d'images dans toutes les situations
       │
       ▼
Phase 2 — Bibliothèque de phonèmes :
  Clips élémentaires par phonème dans différents états
  (colère, indifférence, inquiétude...)
  Pour chaque phonème : nez, yeux, lèvres, menton...
       │
       ▼
Phase 3 — Assemblage par algorithme :
  Construction séquences artificielles
  à partir de l'alphabet vidéo de base
       │
       ▼
Phase 4 — Validation par GAN :
  Réseau convolutif (constructeur/générateur)
  + Réseau déconvolutif (discriminateur/évaluateur)
  Itérations jusqu'à résultat parfait
       │
       ▼
  Séquence indistinguable de la réalité`,
        },
        { type: "h", text: "La crédibilité des \"deep fakes\"" },
        { type: "p", text: "Le vrai problème est de crédibiliser les séquences obtenues — l'IA y parvient via des mécanismes d'apprentissage automatique combinant un réseau neuronal convolutif et un réseau déconvolutif. Cette technique s'appelle le GAN (\"Generative Adversarial Network\", réseau antagoniste génératif) : une technique de Machine Learning reposant sur la mise en compétition de deux réseaux neuronaux — le générateur (réseau convolutif, construit la vidéo par séquences) et le discriminateur (réseau déconvolutif, évalue ce qu'il reçoit)." },
        {
          type: "diagram",
          content: `Architecture GAN :

Bibliothèque de base
(clips, phonèmes, ...)
        │
        ▼
  [GÉNÉRATEUR]     ◄──── amélioration
  Réseau convolutif     ────────────────┐
        │                              │
        │ Séquence produite            │
        ▼                              │
  [DISCRIMINATEUR]  ──► Évaluation ───►┘
  Réseau déconvolutif   (réel/faux ?)
                        (qualité ?)

Itérations multiples jusqu'à obtenir
une séquence indistinguable du réel`,
        },
        { type: "p", text: "Ces opérations automatiques peuvent prendre beaucoup de temps, ce qui constitue la limite actuelle pour les séquences temps réel. Exemple documenté : une chaîne YouTube spécialisée a modifié la bande-annonce d'un film de la saga Star Wars en remplaçant numériquement un acteur par une version rajeunie d'un acteur historique de la franchise, avec un résultat stupéfiant." },
        { type: "h", text: "Les applications connues" },
        { type: "p", text: "Plusieurs deep fakes ont fait le tour du monde et sont largement documentés dans la presse : une fausse vidéo de Mark Zuckerberg se vantant de contrôler ses utilisateurs, une vidéo de Nancy Pelosi (présidente de la Chambre des représentants américaine) donnant l'impression d'un état d'ébriété avancé, un deep fake du président argentin Mauricio Macri avec le visage remplacé par celui d'Adolf Hitler, un deep fake d'Angela Merkel avec le visage de Donald Trump. Plusieurs actrices, dont Daisy Ridley, Gal Gadot, Emma Watson et Scarlett Johansson, ont aussi été victimes de deep fakes à caractère pornographique non consenti, largement condamnés." },
        { type: "note", variant: "warning", text: "Il n'y a aucune limite technique aux \"deep fakes\" : rien n'empêche des personnes malintentionnées de faire dire n'importe quoi à n'importe qui, y compris à des personnalités historiques disparues." },
        { type: "h", text: "Les \"deep fakes\" en temps réel" },
        { type: "p", text: "Pour les deep fakes en temps réel, on constituera des bibliothèques volumineuses d'objets spécifiques à une cible donnée, alimentant des processus de construction de séquences vidéo contrôlées en temps réel par une nouvelle génération de discriminateurs. La réponse à une question sera élaborée en temps réel, à partir de séquences textuelles construites selon la question, servies par des vidéos très réalistes et restituées par des procédés de NLP (traitement du langage naturel). Il sera difficile de s'apercevoir de la supercherie." },
        { type: "p", text: "Deux types de vidéos temps réel se dessinent : celles pour lesquelles on pardonnera quelques anomalies (domaine des services), et celles pour lesquelles tout devra être parfait (le monde de l'arnaque)." },
        { type: "note", variant: "success", title: "Je retiens — Deep Fake", text: "Le deep fake est l'art de faire croire que la personne qui s'exprime dans une vidéo est bien celle qui prononce les phrases entendues. Deep fake = deep learning + fakes. Technique centrale : le GAN (Generative Adversarial Network) = générateur vs discriminateur. Le deep fake évolue très rapidement. L'usage le plus dangereux à l'avenir : les falsifications en temps réel." },
      ],
    },
    {
      id: "ia-tableau-recapitulatif-general",
      title: "Tableau récapitulatif général",
      blocks: [
        { type: "table", headers: ["Concept", "Définition courte"], rows: [
          ["IA", "Ensemble de techniques permettant à des machines d'accomplir des tâches réservées aux humains"],
          ["Machine Learning", "Technique d'apprentissage par algorithme sur des données (supervisé/non supervisé/renforcement)"],
          ["Deep Learning", "ML avec réseaux neuronaux profonds à nombreuses couches cachées"],
          ["CNN", "Convolutional Neural Network — traitement d'images par convolution"],
          ["RNN", "Recurrent Neural Network — mémoire contextuelle (texte, voix)"],
          ["LSTM", "Long/Short Term Memory — mémoire à décalage temporel"],
          ["SIFT", "Scale Invariant Feature Transform — extraction de points clés d'images"],
          ["GAN", "Generative Adversarial Network — générateur vs discriminateur"],
          ["BCI", "Brain-Computer Interface — interface cerveau-ordinateur"],
          ["TEPS", "Traversed Edges Per Second — mesure de vitesse de communication"],
          ["Q-Learning", "Apprentissage par renforcement off-policy (Watkins, 1989)"],
          ["SARSA", "Apprentissage par renforcement on-policy"],
          ["Deep Fake", "Fabrication de vidéos/images falsifiées via deep learning"],
          ["Dataïsme", "Foi universelle dans le pouvoir des algorithmes (Yuval Noah Harari)"],
          ["ReLU", "Rectified Linear Unit — fonction d'activation CNN"],
          ["GPT", "Generative Pre-trained Transformer — générateur de texte (OpenAI)"],
        ]},
      ],
    },
  ],
};
