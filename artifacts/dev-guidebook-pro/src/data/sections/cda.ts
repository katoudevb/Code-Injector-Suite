import type { Section } from "../types";

export const cda: Section = {
  id: "cda",
  title: "CDA — Concepteur-Développeur d'Applications",
  icon: "Layers3",
  tags: ["php", "ts"],
  subsections: [
    {
      id: "cda-metier",
      title: "Le métier de CDA",
      blocks: [
        { type: "h", text: "Rôle et réalité du métier" },
        { type: "list", items: [
          "Le code représente 20% du travail",
          "Déterminer la mise en place de fonctionnalités en déterminant différentes spécifications techniques ou fonctionnelles",
          "La phase de conception est la plus importante du développement d'un projet",
          "80% des projets informatiques abandonnés en cours de route sont la cause d'une conception menée sans méthode et efficacité",
        ]},
        { type: "note", variant: "info", text: "Le CDA est chargé de designer et réaliser une application, une page web ou une BDD à partir d'un CDC ou d'un scénario utilisateur." },
        { type: "h", text: "Axes de la conception" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│             4 AXES DE CONCEPTION             │
│                                              │
│  1. Persistance des données                  │
│  2. Composants métiers                       │
│  3. Architecture de l'application            │
│  4. Conception des applications mobiles      │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Champs d'action du CDA" },
        { type: "list", items: ["Choix techniques", "Environnement de développement", "Conception", "Réalisation"] },
        { type: "h", text: "Principales missions" },
        { type: "list", items: [
          "Conception et développement des composants interface utilisateur",
          "La persistance des données",
          "Une application multi-couche répartie",
          "Intègre les recommandations de sécurité",
          "Mobile géographiquement et s'adapte aux nouveaux environnements de travail",
        ]},
        { type: "h", text: "Soft skills du CDA" },
        { type: "list", items: ["Rigueur et méthode", "Communication", "Orientation client", "Esprit d'initiative"] },
        { type: "h", text: "Compétences techniques du CDA" },
        { type: "list", items: [
          "Méthodes et techniques de programmation",
          "Outils de développement",
          "Langages de programmation",
          "Système d'exploitation minimum",
          "Méthode de spécification et de conception",
          "Outil de maquettage",
        ]},
      ],
    },
    {
      id: "cda-maquetter-application",
      title: "Maquetter une application",
      blocks: [
        { type: "h", text: "Définition du maquettage" },
        { type: "p", text: "Le maquettage est une méthode de conception d'interface. Il représente généralement la 3e étape de la conception d'une application." },
        { type: "p", text: "Objectif : proposer des interfaces conformes aux attentes et besoins des utilisateurs et du client." },
        { type: "p", text: "C'est aussi un moyen de partager les différentes visions du projet au sein des équipes. Il permet de mettre en œuvre des tests utilisateurs et d'intégrer leurs feedbacks avant de démarrer la conception." },
        { type: "h", text: "Zoning vs Maquettage" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│           ZONING  →  WIREFRAME  →  MAQUETTE          │
│                                                      │
│  ZONING                                              │
│  ├─ Schématise les pages en blocs                    │
│  ├─ Détermine les zones principales de contenu       │
│  └─ Définit les grandes fonctionnalités              │
│             │                                        │
│             ▼                                        │
│  WIREFRAME                                           │
│  ├─ Représentation structurelle de l'interface       │
│  └─ Étape finale du zoning                           │
│             │                                        │
│             ▼                                        │
│  MAQUETTE (Mock-up)                                  │
│  ├─ Précision : fonctionnalités, interactions,       │
│  │   contenus                                        │
│  └─ Proche du rendu final                            │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "note", variant: "warning", text: "Ne pas confondre : le zoning est une étape du maquettage, pas son équivalent." },
        { type: "h", text: "Maquetter un site web" },
        { type: "p", text: "Une maquette permet de valider ou corriger des choix fonctionnels ou techniques avant de débuter le développement." },
        { type: "p", text: "Responsive Design : on réalise 3 maquettes : Ordinateur, Tablette, Mobile" },
        { type: "h", text: "Outils de maquettage — Site web" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["Figma", "Référence professionnelle"],
          ["Adobe XD", "Prototypage interactif"],
          ["Wireframes Balsamiq", "Wireframing rapide"],
          ["Wireframe.CC", "Simple et en ligne"],
          ["Mockplus", "Maquettage rapide"],
          ["Pencil Project", "Open source"],
          ["NinjaMock", "Mobile-first"],
          ["FluidUI", "Mobile"],
          ["Mockflow", "Collaboratif"],
          ["Cacoo", "Diagrammes + maquettes"],
          ["Pidoco", "Prototypage"],
        ]},
        { type: "h", text: "Après le maquettage" },
        { type: "p", text: "Lorsque les maquettes sont terminées → phase d'intégration :" },
        { type: "list", items: ["Compétences requises : HTML, CSS, PHP, JavaScript", "Intégrer une maquette = la reproduire avec du code dans un fichier"] },
        { type: "h", text: "Maquetter une application mobile — Mobile First" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│              MOBILE FIRST vs RESPONSIVE              │
│                                                      │
│  RESPONSIVE DESIGN                                   │
│  └─ Site PC adapté aux mobiles                       │
│     (approche de moins en moins utilisée)            │
│                                                      │
│  MOBILE FIRST                ← APPROCHE ACTUELLE     │
│  └─ Priorité sur smartphone  │                       │
│     puis extension desktop   │                       │
│     → Interactions utilisateur totalement            │
│       différentes vs ordinateur                      │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Les 5 étapes avant la création d'une maquette mobile :" },
        { type: "list", items: [
          "1. Élaborer un cahier des charges pour l'application mobile",
          "2. Définir les menus et organiser l'application écran par écran",
          "3. Délimiter les zones d'interaction et les liens entre éléments",
          "4. Prioriser l'expérience utilisateur sur tout le reste",
          "5. Choisir les couleurs en fonction du domaine de l'application",
        ]},
        { type: "h", text: "Outils de maquettage — Application mobile" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["Figma", "Polyvalent web + mobile"],
          ["Adobe XD", "Simulation interactions (boutons, liens)"],
          ["Sketch", "Mac uniquement"],
          ["Moqups", "En ligne"],
          ["Framer", "Prototypage avancé"],
          ["Gliffy", "Diagrammes"],
          ["Balsamiq", "Wireframes rapides"],
          ["Proto.io", "Prototypage mobile"],
          ["Axure RP", "Avancé"],
          ["Hotgloo", "Collaboratif"],
        ]},
      ],
    },
    {
      id: "cda-construire-maquette-ui",
      title: "Construire la maquette — Interface utilisateur",
      blocks: [
        { type: "h", text: "Définition de l'interface utilisateur" },
        { type: "p", text: "L'interface utilisateur est le point de rencontre entre un utilisateur et une application. Elle restitue des résultats de traitements à partir de données locales ou distantes et permet d'afficher ergonomiquement des formulaires, des résultats, et d'imprimer des états." },
        { type: "h", text: "Les phases de conception des interfaces" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│         PHASES DE CONCEPTION D'INTERFACE             │
│                                                      │
│  1. PRÉCONCEPTION                                    │
│     └─ Phase d'idéation primaire                     │
│                                                      │
│  2. CONCEPTION STRUCTURELLE                          │
│     └─ Phase d'idéation secondaire (zoning)          │
│                                                      │
│  3. PARCOURS UTILISATEUR                             │
│     └─ Réalisation des wireframes                    │
│                                                      │
│  4. DESIGN GRAPHIQUE                                 │
│     └─ Réalisation des maquettes (mock-up)           │
│                                                      │
│  5. DÉVELOPPEMENT INFORMATIQUE                       │
│     └─ Intégration des interfaces dans le projet     │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Le prototypage regroupe les 4 premières phases." },
        { type: "h", text: "UI / UX Design" },
        { type: "table", headers: ["Terme", "Signification", "Rôle"], rows: [
          ["UI (User Interface)", "Interface utilisateur", "Le designer UI est graphiste et ergonome"],
          ["UX (User Experience)", "Expérience utilisateur", "Conçoit des parcours satisfaisants, mesure l'expérience vécue"],
        ]},
        { type: "h", text: "Les tendances de design d'interface" },
        { type: "p", text: "1. Skeuomorphisme — Reproduit graphiquement l'apparence des éléments d'interface dans le monde physique. Tendance Apple jusqu'en 2013 (iOS 7 marque la transition vers le Flat Design avec Tim Cook)." },
        { type: "p", text: "2. Flat Design" },
        { type: "list", items: [
          'Inspiré du principe "less is more"',
          "Disparition des effets glossy et textures hyper détaillées",
          "Interfaces épurées, éléments utiles uniquement",
          "Pas d'effet 3D, pas de relief, pas de profondeur",
          "Joue sur couleurs, typographies, formes",
          "Adopté par Microsoft",
        ]},
        { type: "p", text: "3. Material Design" },
        { type: "list", items: [
          "Lancé par Google le 25 juin 2014 pour Android Lollipop",
          "S'appuie sur les trois dimensions (ombres portées, animations, mouvement)",
          "Expérience utilisateur plus intuitive",
          "Ensemble de normes précises et codifiées",
        ]},
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│      SKEUOMORPHISME  vs  FLAT  vs  MATERIAL              │
│                                                          │
│  Skeuomorphisme    Réaliste, texturé, 3D (Apple ~2013)   │
│  Flat Design       Minimaliste, épuré, 2D (Microsoft)    │
│  Material Design   Profondeur + ombres + anim (Google)   │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Solutions d'intégration" },
        { type: "list", items: [
          "HTML → structure de la maquette",
          "CSS → stylisation",
          "JavaScript → dynamisme et interactions",
          "Frameworks → Symfony, Laravel avec préprocesseurs CSS et moteurs de template",
        ]},
        { type: "h", text: "Les préprocesseurs CSS" },
        { type: "table", headers: ["Préprocesseur", "Description"], rows: [
          ["SASS/SCSS", "Langage différent du CSS, imbrication de règles, fonctions réutilisables"],
          ["PostCSS", "Utilise des plugins, utilisable en surcouche, nécessite Node.js"],
          ["LESS", "Fonctionnalités similaires à SASS, aujourd'hui surclassé"],
        ]},
        { type: "h", text: "Les frameworks front-end" },
        { type: "table", headers: ["Framework", "Particularités"], rows: [
          ["React", "DOM virtuel, performances exceptionnelles, open source"],
          ["Angular", "TypeScript, liaison de données bidirectionnelle, synchronisation temps réel modèle/vue"],
          ["Vue.js", "Plus léger, DOM virtuel, composants, liaison bidirectionnelle"],
        ]},
      ],
    },
    {
      id: "cda-composants-interface-dynamiques",
      title: "Composants d'interface dynamiques",
      blocks: [
        { type: "p", text: "Un composant d'interface dynamique est un morceau de code front-end, souvent autonome et réutilisable, qui affiche les données fournies par le composant d'accès aux données." },
        { type: "p", text: "Il est dit dynamique car les valeurs des données fournies peuvent différer selon les requêtes." },
        { type: "h", text: "Intégration d'un composant dynamique" },
        { type: "p", text: "Pour intégrer des vues dynamiques, deux approches :" },
        { type: "list", items: ["Interpolation des variables dans la vue", "Data binding des frameworks front-end"] },
        { type: "h", text: "Expressions PHP dans HTML" },
        { type: "code", filename: "php", language: "php", code: `<?php foreach($menu as $item): ?>
    <li><?= $item['nom'] ?></li>
<?php endforeach; ?>` },
        { type: "note", variant: "warning", text: "Coder de cette manière est déconseillé car le code devient très vite illisible. Utiliser un moteur de template est préférable." },
      ],
    },
    {
      id: "cda-moteurs-template-php",
      title: "Moteurs de template PHP",
      blocks: [
        { type: "h", text: "Twig (Symfony)" },
        { type: "p", text: "Moteur de template utilisé dans Symfony (et projets from scratch). Syntaxe concise avec {% %} et {{ variable }}." },
        { type: "p", text: "Boucle for :" },
        { type: "code", filename: "twig", language: "twig", code: `{% for user in users %}
    <li>{{ user.name }}</li>
{% endfor %}` },
        { type: "p", text: "Héritage de template :" },
        { type: "code", filename: "twig", language: "twig", code: `{# page.html.twig #}
{% extends 'layout.html' %}

{% block content %}
    Contenu dynamique de la page
{% endblock %}` },
        { type: "p", text: "Conditions :" },
        { type: "code", filename: "twig", language: "twig", code: `{% if user.isAdmin %}
    <p>Accès admin</p>
{% else %}
    <p>Accès utilisateur</p>
{% endif %}` },
        { type: "note", variant: "success", text: "Avantages Twig : héritage multiple, blocs, mise en forme automatique, composants réutilisables, projet maintenable." },
        { type: "h", text: "Blade (Laravel)" },
        { type: "p", text: "Moteur de template Laravel. Syntaxe de type @tag (similaire à Twig en fonctionnalités)." },
        { type: "code", filename: "blade", language: "php", code: `@foreach($users as $user)
    <li>{{ $user->name }}</li>
@endforeach

@if($user->isAdmin)
    <p>Accès admin</p>
@endif

@extends('layouts.app')
@section('content')
    Contenu dynamique
@endsection` },
      ],
    },
    {
      id: "cda-moteurs-template-js",
      title: "Moteurs de template JavaScript",
      blocks: [
        { type: "h", text: "EJS (pour projets Node.js)" },
        { type: "p", text: "Langage de modélisation simple pour générer du HTML avec du JavaScript natif. Pas de réinvention de l'itération." },
        { type: "code", filename: "ejs", language: "html", code: `<ul>
  <% users.forEach(function(user){ %>
    <li><%= user.name %></li>
  <% }); %>
</ul>` },
        { type: "h", text: "Mustache" },
        { type: "p", text: "Syntaxe de modèle sans logique (logic-less). Utilisable pour HTML, fichiers de config, code source. Pas de if, else ou boucles for — uniquement des balises." },
        { type: "code", filename: "mustache", language: "html", code: `{{#users}}
  <li>{{name}}</li>
{{/users}}` },
      ],
    },
    {
      id: "cda-frameworks-data-binding",
      title: "Frameworks front-end et Data Binding",
      blocks: [
        { type: "h", text: "Les frameworks front-end" },
        { type: "p", text: "Orientés composant : ils offrent la possibilité d'exprimer des morceaux de vues contenant à la fois structure, style et données. Les plus connus : Angular, React.js, Vue.js, Ionic (mobile)." },
        { type: "p", text: "Exemple de composant React :" },
        { type: "code", filename: "jsx", language: "javascript", code: `class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.listName}</h1>
            </div>
        );
    }
}` },
        { type: "h", text: "Le Data Binding" },
        { type: "p", text: "Le data binding (liaison de données) consiste à lier un contrôle web à des données. Le contrôle sait où trouver sa valeur et l'affiche automatiquement." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  DATA BINDING                        │
│                                                      │
│  Interface web (HTML)    ←──────→   Back-end (BDD)   │
│                                                      │
│  Si source de données change → contrôle mis à jour   │
│  Si modifications interface → notification auto      │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Avantages :" },
        { type: "list", items: ["Facilite l'automatisable", "Limite le risque d'erreurs", "Mise à jour automatique si la source change"] },
      ],
    },
    {
      id: "cda-methode-merise",
      title: "Concevoir une BDD maintenable — Méthode Merise",
      blocks: [
        { type: "h", text: "Les 3 étapes de création d'une BDD" },
        { type: "list", items: [
          "1. Analyser le besoin et le modéliser",
          "2. Créer concrètement la base de données",
          "3. Tester, adapter, mettre en production et sauvegarder",
        ]},
        { type: "h", text: "Qu'est-ce que Merise ?" },
        { type: "p", text: "Merise est une méthode de conception dont l'objectif est de parvenir à concevoir un système d'information. Elle décrit les étapes de conception et doit aboutir à un système d'information fonctionnel représentant la réalité physique." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                MÉTHODE MERISE                        │
│                                                      │
│  1. Expression des besoins + analyse                 │
│             │                                        │
│             ▼                                        │
│  2. MCD — Modèle Conceptuel de Données               │
│             │                                        │
│             ▼                                        │
│  3. MLD — Modèle Logique de Données                  │
│             │                                        │
│             ▼                                        │
│  4. MPD — Modèle Physique de Données                 │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Expression des besoins et analyse" },
        { type: "p", text: "Établir une bibliothèque de données dont le champ sémantique sera le sujet traité." },
        { type: "note", variant: "info", text: "Exemple (aéroport) : Piste, quai, avion, passagers, horaires, départ, arrivée, escale, terminus, hangar, tarmac, embarquement, Boeing 747, A320…" },
        { type: "p", text: "Ensuite, s'informer auprès des utilisateurs finaux pour comprendre leur vision et leurs besoins. Cette étape aboutit au MCD." },
        { type: "h", text: "2. MCD — Modèle Conceptuel de Données" },
        { type: "p", text: "Représentation des données permettant de décrire le système d'information en exprimant la réalité par des entités et des classes d'entités." },
        { type: "list", items: [
          "Entité : item matériel ou immatériel jouant un rôle dans le système",
          "Classe d'entités : ensemble d'entités de même type",
        ]},
        { type: "p", text: "Représentation :" },
        {
          type: "diagram",
          content: `┌─────────────────┐
│     PLANE       │  ← libellé (unique)
├─────────────────┤
│ #id_plane (PK)  │  ← clé primaire
│  color          │  ← propriétés
│  year           │
│  model          │
└─────────────────┘`,
        },
        { type: "p", text: "Relation entre deux entités :" },
        {
          type: "diagram",
          content: `┌───────────┐  (0,N)  effectue  (1,1)  ┌───────────┐
│   PLANE   │ ─────────────────────── │  FLIGHT   │
└───────────┘  est effectué par        └───────────┘`,
        },
        { type: "note", variant: "info", text: "Les cardinalités sont exprimées dans les deux sens (forme directe et passive du verbe)." },
        { type: "h", text: "3. MLD — Modèle Logique de Données" },
        { type: "p", text: "Passage du MCD vers le MLD en exprimant plus précisément les relations. La cardinalité la plus élevée l'emporte de chaque côté." },
        { type: "table", headers: ["Cardinalités", "Type de relation", "Résultat"], rows: [
          ["1 et 1", "one to one (1-1)", "Fusion ou clé étrangère"],
          ["1 et N", "one to many (1-N)", "Clé étrangère dans la table N"],
          ["N et M", "many to many (N-M)", "Nouvelle table de liaison"],
        ]},
        { type: "p", text: "Relation many to many :" },
        {
          type: "diagram",
          content: `┌───────────┐     ┌──────────────────┐     ┌───────────┐
│   PLANE   │─────│  PLANE_FLIGHT    │─────│  FLIGHT   │
│ #id_plane │     │ #id_plane (FK)   │     │ #id_flight│
│  ...      │     │ #id_flight (FK)  │     │  ...      │
└───────────┘     └──────────────────┘     └───────────┘`,
        },
        { type: "h", text: "4. MPD — Modèle Physique de Données" },
        { type: "p", text: "Doit refléter strictement ce qui sera en base : dénomination, type de la donnée, longueur, NULL autorisé ou non, auto-incrémentation (AI)…" },
        { type: "p", text: "À partir du MPD → écriture des requêtes SQL ou utilisation d'un SGBD (MySQL Workbench, phpMyAdmin)." },
        { type: "h", text: "Conception avec diagramme UML de classe" },
        { type: "p", text: "Alternative à Merise. UML est un langage de conception d'application dans son entier (Merise se concentre sur la BDD). Si vous avez conçu votre application en UML, utilisez les diagrammes de classe pour obtenir le reflet fidèle en base de données." },
        { type: "note", variant: "info", text: "Distinction : Merise = méthode BDD | UML = langage de conception applicatif complet" },
        { type: "h", text: "Sécuriser et maintenir la BDD" },
        { type: "p", text: "Déclarer des champs de sécurisation dans vos classes d'entités :" },
        { type: "table", headers: ["Champ", "Type", "Rôle"], rows: [
          ["created_at", "Date", "Quand la ligne a été créée"],
          ["updated_at", "Date", "Quand la ligne a été modifiée"],
          ["created_by", "String/Int", "Par qui la ligne a été créée"],
          ["updated_by", "String/Int", "Par qui la ligne a été modifiée"],
        ]},
        { type: "note", variant: "success", text: "Il est fortement conseillé de sécuriser toutes vos tables avec ces 4 champs." },
      ],
    },
    {
      id: "cda-mettre-en-place-bdd",
      title: "Mettre en place une base de données",
      blocks: [
        { type: "h", text: "Créer la BDD" },
        { type: "p", text: "Via le terminal SQL :" },
        { type: "code", filename: "sql", language: "sql", code: `-- Créer la base
CREATE DATABASE ma_base;

-- Créer une table
CREATE TABLE IF NOT EXISTS contacts (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    email  VARCHAR(255) NOT NULL,
    prenom VARCHAR(255),
    nom    VARCHAR(255)
);` },
        { type: "p", text: "Via Symfony (ORM Doctrine) :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console doctrine:database:create
symfony console make:entity` },
        { type: "p", text: "Via Laravel :" },
        { type: "code", filename: "terminal", language: "bash", code: `php artisan make:migration create_users_table
php artisan migrate` },
        { type: "h", text: "Alimenter la base en données de test (Seeders)" },
        { type: "p", text: "Laravel — créer un seeder :" },
        { type: "code", filename: "terminal", language: "bash", code: `php artisan make:seeder UserSeeder` },
        { type: "code", filename: "database/seeders/UserSeeder.php", language: "php", code: `// database/seeders/UserSeeder.php
public function run()
{
    User::factory(10)->create();
}` },
        { type: "h", text: "Mettre en production" },
        { type: "list", items: [
          "1. Exporter la base au format .sql",
          "2. Importer sur le serveur de production via le SGBD",
          "3. Ou utiliser les commandes framework de migration",
        ]},
        { type: "h", text: "Créer les utilisateurs et droits" },
        { type: "p", text: "Il est impératif de créer des comptes utilisateur avec des privilèges d'administration et des mots de passe forts. Ne jamais laisser le compte root par défaut." },
        { type: "h", text: "Sauvegarder la BDD automatiquement (cron)" },
        {
          type: "diagram",
          content: `Créer : /backups/backup.php
Configurer une tâche cron sur le serveur pour exécuter ce fichier
à intervalles réguliers`,
        },
        { type: "code", filename: "backup.php", language: "php", code: `// backup.php — exemple de cron PHP
$filename = 'backup_' . date('Y-m-d_H-i-s') . '.sql';
exec("mysqldump -u$user -p$pass $db > /backups/$filename");` },
        { type: "note", variant: "warning", text: "Vérifier que le serveur accepte la commande exec. Certains hébergeurs la désactivent." },
        { type: "h", text: "BDD NoSQL (MongoDB)" },
        { type: "p", text: "Pour les bases non relationnelles, documentation fournie pour coder les composants d'accès et déclarer des collections. Sécurité et sauvegarde via le SGBD dédié." },
      ],
    },
    {
      id: "cda-composants-acces-donnees",
      title: "Composants d'accès aux données (BDD)",
      blocks: [
        { type: "p", text: "Un composant d'accès aux données est un morceau de code back-end, autonome et réutilisable, qui interroge la base de données pour construire une réponse adaptée à l'utilisateur." },
        { type: "h", text: "Connexion à MySQL en PHP" },
        { type: "p", text: "PHP dispose de deux drivers :" },
        { type: "list", items: ["mysqli (procédural)", "PDO (orienté objet) ← préféré pour sécurité et performance"] },
        { type: "code", filename: "php", language: "php", code: `// Connexion PDO
try {
    $pdo = new PDO(
        'mysql:host=localhost;dbname=ma_base;charset=utf8',
        'username',
        'password'
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}` },
        { type: "h", text: "Connexion à MySQL en Python" },
        { type: "code", filename: "python", language: "python", code: `import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="username",
    password="password",
    database="ma_base"
)` },
        { type: "h", text: "Requête préparée en PHP (protection injection SQL)" },
        { type: "code", filename: "php", language: "php", code: `// Insertion sécurisée avec prepare()
$stmt = $pdo->prepare(
    "INSERT INTO registry (nom, email) VALUES (:nom, :email)"
);
$stmt->execute([
    ':nom'   => $nom,
    ':email' => $email
]);` },
        { type: "h", text: "Requête en Python" },
        { type: "code", filename: "python", language: "python", code: `cursor = conn.cursor()
cursor.execute(
    "INSERT INTO registry (nom, email) VALUES (%s,%s)",
    (nom, email)
)
conn.commit()` },
        { type: "h", text: "Prérequis pour développer des composants" },
        { type: "list", items: [
          "Langage de requête structurée SQL",
          "Modèles de conception relatifs aux accès aux données",
          "Gestion de l'intégrité des données et du concept de transaction",
          "Principe de connexion via un middleware",
        ]},
        { type: "h", text: "Sécuriser les composants d'accès" },
        { type: "list", items: [
          "Composant accessible uniquement via des méthodes de l'application",
          "Sécurisé par le rôle utilisateur (client / administrateur)",
          "Test unitaire pour chaque composant",
          "Code source documenté ou autodocumenté",
        ]},
        { type: "h", text: "Parade contre l'injection SQL" },
        {
          type: "diagram",
          content: `Ne jamais faire confiance aux utilisateurs !
→ Utiliser prepare() en PHP
→ Utiliser cursor() en Python
→ Valider le format des données AVANT envoi au composant`,
        },
        { type: "h", text: "OWASP" },
        { type: "p", text: "L'Open Web Application Security Project est une fondation à but non lucratif qui œuvre à l'amélioration de la sécurité des logiciels. Source de référence pour les développeurs." },
        { type: "h", text: "Principales failles web connues" },
        { type: "list", items: [
          "Injections (SQL, Drupal…)",
          "Cross-site scripting (XSS)",
          "Désérialisation non sécurisée",
          "Entités XML externes (XXE)",
          "Défaillance de contrôle d'accès",
          "Exposition de données sensibles",
          "Défaillance d'authentification",
          "Mauvaises configurations de sécurité",
          "Usage de composants à vulnérabilités connues",
          "Journalisation insuffisante",
        ]},
        { type: "h", text: "Virtualisation vs Conteneurisation (scalabilité)" },
        { type: "table", headers: ["Méthode", "Description"], rows: [
          ["Virtualisation", "Distribue plusieurs OS sur un seul serveur. Dupliquer les composants pour répondre à plus de requêtes."],
          ["Conteneurisation", "Plus flexible. Conteneurs créés/supprimés à volonté, indépendants du serveur. Scalabilité dynamique."],
        ]},
      ],
    },
    {
      id: "cda-architecture-mvc",
      title: "Architecture MVC",
      blocks: [
        { type: "p", text: "L'architecture MVC (Model Vue Controller) est un template d'architecture logicielle destiné aux interfaces graphiques, très populaire pour les applications web." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                ARCHITECTURE MVC                      │
│                                                      │
│  MODEL           Composants d'accès à la donnée      │
│  (données)       → Requêtes SQL, logique de données  │
│                                                      │
│  VIEW            Vues / templates                    │
│  (présentation)  → HTML, Twig, Blade, React…         │
│                                                      │
│  CONTROLLER      Logique des actions utilisateur     │
│  (logique)       → Orchestre Model et View           │
│                                                      │
│  Utilisateur → Controller → Model → BDD              │
│                    └──────── View → Utilisateur       │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Bonnes pratiques MVC" },
        { type: "list", items: [
          "Isoler les composants d'accès dans un répertoire Model/",
          "Une seule connexion BDD établie au démarrage, utilisée tout au long de la session",
          "Créer des classes avec des méthodes exécutant des requêtes SQL",
        ]},
      ],
    },
    {
      id: "cda-composants-metier",
      title: "Composants métier",
      blocks: [
        { type: "h", text: "Définition d'une règle métier" },
        { type: "p", text: "Une règle métier est une condition qui doit être satisfaite lorsqu'une activité métier est exécutée. Elle peut :" },
        { type: "list", items: ["Appliquer une stratégie métier", "Prendre une décision", "Déduire de nouvelles données des données existantes"] },
        { type: "p", text: "Structure d'une règle :" },
        { type: "list", items: [
          "Condition : situation qui doit exister pour qu'une action soit exécutée",
          "Action : événement généré si la condition est remplie",
        ]},
        { type: "h", text: "Définition d'une classe métier" },
        { type: "p", text: "Une classe métier correspond au modèle d'un objet métier. Elle est associée à un besoin de persistance de données, à la différence des classes dites techniques qui n'ont aucun besoin de persistance." },
        { type: "h", text: "Formats d'expression des règles" },
        { type: "p", text: "1. Groupes de règles" },
        { type: "p", text: "Composant le plus élevé d'une règle métier. Définit l'interface et l'opération. Peut contenir :" },
        { type: "list", items: [
          "Règles If-then : if = condition, then = action",
          "Règles d'action : l'action est toujours exécutée",
        ]},
        { type: "p", text: "2. Tables de décision" },
        { type: "p", text: "L'action est déterminée par plusieurs conditions. La logique est présentée sous forme de table (lignes = conditions, colonnes = variables, intersection = action)." },
        {
          type: "diagram",
          content: `Exemple : tarif selon statut client ET quantité achetée

         │ 1-5 articles │ 6-10 articles │ 11+ articles
─────────┼──────────────┼───────────────┼──────────────
Standard │   prix plein │     -5%       │    -10%
Premium  │    -10%      │    -15%       │    -20%
Gold     │    -15%      │    -25%       │    -30%`,
        },
        { type: "h", text: "Architecture métier" },
        { type: "p", text: "Appliquer une architecture métier consiste à regrouper dans des packages/dossiers des classes d'objets correspondant aux entités." },
        { type: "list", items: [
          "Factorisation : placer le code d'un traitement dans une méthode, la réutiliser partout",
          "Différenciation : regrouper toutes les méthodes métiers dans un package",
          "Abstraction : lors de maintenance, aborder le projet par les classes métiers",
        ]},
        { type: "h", text: "Déclarer des classes métiers (MVC)" },
        { type: "p", text: "Dans une architecture MVC, les classes implémentant la logique métier sont appelées modèles et séparées dans un répertoire dédié." },
        {
          type: "diagram",
          content: `project/
└── models/
    ├── User.php       ← classe métier
    ├── Product.php    ← classe métier
    └── Order.php      ← classe métier`,
        },
      ],
    },
    {
      id: "cda-securiser-composants-metier",
      title: "Sécuriser les composants métier",
      blocks: [
        { type: "h", text: "Le modèle principal (classe abstraite)" },
        { type: "code", filename: "php", language: "php", code: `// Classe abstraite parente pour tous les modèles
abstract class Model {
    protected $db;

    public function __construct() {
        $this->db = Database::getInstance(); // connexion unique
    }
}

// Chaque modèle hérite
class UserModel extends Model {
    public function findById($id) {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
}` },
        { type: "h", text: "Coder en style défensif" },
        {
          type: "diagram",
          content: `Supposez TOUJOURS que vous allez recevoir quelque chose d'inattendu.
Règle fondamentale : "Ne jamais faire confiance aux entrées utilisateurs."`,
        },
        { type: "p", text: "Stratégie : ne pas chercher les données invalides, mais rechercher les données valides et exclure le reste." },
        { type: "h", text: "Visibilité des propriétés et méthodes" },
        { type: "table", headers: ["Visibilité", "Accès"], rows: [
          ["public", "Partout"],
          ["protected", "Classe + enfants (idéal pour méthodes internes)"],
          ["private", "Classe uniquement"],
        ]},
        { type: "h", text: "Authentification et session" },
        { type: "list", items: [
          "Identifier les privilèges nécessaires à un composant",
          "N'exposer les composants qu'au sein d'une session où l'utilisateur est authentifié et possède les privilèges nécessaires (rôle)",
        ]},
        { type: "h", text: "Gérer les cas d'erreur" },
        { type: "list", items: [
          "1. Détecter les erreurs",
          "2. Indiquer comment les erreurs sont émises et interceptées",
          "3. Prévoir un processus de restauration",
        ]},
        { type: "h", text: "Tester les composants métier" },
        { type: "p", text: "Frameworks de test :" },
        { type: "table", headers: ["Langage", "Frameworks"], rows: [
          ["PHP", "PHPUnit, StoryPlayer, SeleniumHQ, Codeception"],
          ["Python", "Robot, Pytest, Unittest, DocTest"],
          ["Node.js / JS", "Mocha, Jasmine, AVA"],
        ]},
        { type: "p", text: "Méthodologie de test :" },
        { type: "list", items: [
          "1. Chaque module reçoit une entrée",
          "2. Il effectue un traitement et génère une sortie",
          "3. On vérifie la sortie par rapport au modèle attendu",
          "4. La sortie est validée par rapport à la fonctionnalité attendue",
        ]},
      ],
    },
    {
      id: "cda-solid",
      title: "Conception objet — Principes SOLID",
      blocks: [
        { type: "h", text: "Principe de la conception objet" },
        { type: "p", text: "Les objets sont comme les membres d'une équipe qui interagissent entre eux. C'est l'interaction entre les objets qui permet d'imaginer et réaliser les fonctionnalités d'une application." },
        { type: "h", text: "Objectifs de la conception" },
        { type: "list", items: [
          "Robustesse : pas de régression due aux changements",
          "Extensibilité : faciliter l'ajout de fonctionnalités",
          "Réutilisabilité : rendre possible la réutilisation de parties du code",
        ]},
        { type: "h", text: "Les 5 principes SOLID" },
        {
          type: "diagram",
          content: `S — Single responsibility principle   (Responsabilité unique)
O — Open/close principle              (Ouverture/fermeture)
L — Liskov substitution principle     (Substitution de Liskov)
I — Interface segregation principle   (Ségrégation des interfaces)
D — Dependency inversion principle    (Inversion des dépendances)`,
        },
        { type: "p", text: "S — Principe de responsabilité unique" },
        { type: "p", text: "Une classe équivaut à une seule responsabilité. Il ne doit y avoir qu'une seule raison de modifier une classe." },
        { type: "p", text: "Questions à se poser :" },
        { type: "list", items: [
          "Le nom donné à la classe est-il facile à déterminer ?",
          "Ajouter une fonctionnalité donne-t-il de nouvelles responsabilités à la classe ?",
        ]},
        { type: "p", text: "O — Principe d'ouverture-fermeture" },
        { type: "p", text: "Tout package, classe ou méthode doit être :" },
        { type: "list", items: [
          "Ouvert aux extensions (ajout de fonctionnalités non prévues)",
          "Fermé aux modifications (les changements n'altèrent pas le code existant)",
        ]},
        { type: "p", text: "L'extensibilité se traduit uniquement par de l'ajout de code (jamais de modification). Utiliser l'abstraction et le polymorphisme." },
        { type: "p", text: "L — Principe de substitution de Liskov" },
        { type: "p", text: "Un sous-type doit être substituable à son type de base dans toute l'application, sans causer de comportement non désiré." },
        { type: "p", text: "L'abstraction avec les interfaces permet de découpler les classes." },
        { type: "p", text: "I — Principe de ségrégation des interfaces" },
        { type: "p", text: "Le client ne doit voir que les services dont il a besoin. La dépendance d'une classe pour une autre doit être limitée à une petite interface." },
        { type: "p", text: "Utiliser le pattern adaptateur : isole la classe concrète et délègue les appels à un service." },
        { type: "p", text: "D — Principe d'inversion des dépendances" },
        { type: "list", items: [
          "Les modules de haut niveau doivent être indépendants des modules de bas niveau",
          "Ces modules dépendent tous d'abstractions",
        ]},
        {
          type: "diagram",
          content: `AVANT (mauvais) :                   APRÈS (correct) :
Haut niveau                         Haut niveau
  └─ dépend de → Bas niveau           └─ dépend de → Abstraction
                                                          ▲
                                                      Bas niveau`,
        },
        { type: "h", text: "Organiser l'application en modules" },
        { type: "list", items: [
          "Principe de réutilisabilité : seuls des packages livrés sont susceptibles d'être réutilisés",
          "Principe des dépendances acycliques : les dépendances entre packages doivent former un graphe acyclique",
          "Principe de stabilité des abstractions : les packages les plus stables doivent être les plus abstraits",
        ]},
      ],
    },
    {
      id: "cda-architecture-multicouche",
      title: "Architecture multicouche répartie",
      blocks: [
        { type: "h", text: "L'architecture multicouche" },
        { type: "p", text: "Découpage des différentes parties d'une application en se focalisant sur le rôle de chaque partie. Chaque couche regroupe les objets et méthodes partageant les mêmes rôles fonctionnels." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│              ARCHITECTURE MULTICOUCHE                │
│                                                      │
│  COUCHE PRÉSENTATION (IHM)                           │
│  ├─ Composants de liaison de données (data binding)  │
│  ├─ Représentations d'objets de données              │
│  └─ NE communique PAS directement avec la couche BDD │
│             │                                        │
│             ▼                                        │
│  COUCHE MÉTIER (BLL — Business Logic Layer)          │
│  ├─ Logique métier (règles, validation données)      │
│  ├─ Composants d'accès aux données                   │
│  ├─ Classes d'entités SQL                            │
│  ├─ Modèles de requêtes                              │
│  └─ Services d'authentification et d'autorisation    │
│             │                                        │
│             ▼                                        │
│  COUCHE DE DONNÉES (DAL — Data Access Layer)         │
│  ├─ Serveur de BDD (MySQL, MongoDB…)                 │
│  └─ Stocke les données de l'application              │
│                                                      │
│  ↔ Couches communiquent via des DTO                  │
│    (objets de transfert de données)                  │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Architecture à n niveaux (multi-tiers)" },
        { type: "list", items: [
          "Couche présentation — interactions utilisateur",
          "Couche intermédiaire (métier) — logique business",
          "Couche données — stockage",
        ]},
        { type: "p", text: "Les couches ne peuvent communiquer qu'avec la couche immédiatement voisine." },
        { type: "h", text: "Exemple J2EE (Java pour l'entreprise)" },
        { type: "list", items: [
          "Couche client",
          "Couche web (conteneur web : servlets + vues JSP)",
          "Couche métier dans un conteneur EJB (indépendant du serveur hôte)",
        ]},
      ],
    },
    {
      id: "cda-interface-besoins-clients",
      title: "Développer une interface conforme aux besoins clients",
      blocks: [
        { type: "h", text: "Expression des besoins client" },
        { type: "p", text: "L'expression de besoins évolue en 4 grandes étapes :" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│          EXPRESSION DES BESOINS CLIENT               │
│                                                      │
│  1. DÉFINITION DU BESOIN                             │
│     Rendez-vous réguliers entre équipes + client     │
│             │                                        │
│             ▼                                        │
│  2. ÉTUDE DU PROJET                                  │
│     Analyse de tous les documents fournis            │
│             │                                        │
│             ▼                                        │
│  3. LISTING DES SPÉCIFICATIONS                       │
│     Ensemble des comportements de toutes             │
│     les fonctionnalités (claires et concises)        │
│             │                                        │
│             ▼                                        │
│  4. VALIDATION (recettage)                           │
│     Le client détermine si le produit                │
│     correspond à ses attentes                        │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Spécifications fonctionnelles" },
        { type: "p", text: "Présentent ce que va faire le produit (≠ spécifications techniques = comment)." },
        { type: "p", text: "Elles concernent le fonctionnement de l'interface côté utilisateur et tous les cas d'application." },
        { type: "p", text: "Deux types :" },
        { type: "table", headers: ["Type", "Rédigé par", "Description"], rows: [
          ["SFG (Spécifications Fonctionnelles Générales)", "Le client", "Décrivent le besoin métier"],
          ["SFD (Spécifications Fonctionnelles Détaillées)", "Équipe dev", "Précisent le comportement des fonctionnalités"],
        ]},
        { type: "p", text: "Spécifications fonctionnelles classiques (cycle en V) : complètement détaillées dès le début." },
        { type: "p", text: "Spécifications fonctionnelles agiles (Scrum) : se rapprochent des user stories, rédigées tout au long du projet." },
        { type: "h", text: "Format d'une spécification agile" },
        {
          type: "diagram",
          content: `CONTEXTE :
  En tant que [utilisateur/rôle], je souhaite [besoin],
  afin de [bénéfice attendu].

USE CASES :
  Scénario A : profil utilisateur A
    - Action de navigation 1
    - Action 2
    - Action n

  Scénario B : profil utilisateur B
    - Action 1
    - Action n

CRITÈRES D'ACCEPTATION :
  Règles métier/fonctionnelles permettant de valider
  que la user story développée répond au besoin.`,
        },
        { type: "h", text: "Spécifications techniques" },
        { type: "p", text: "Elles détaillent comment l'application va exprimer une fonctionnalité. Le client doit déterminer :" },
        { type: "table", headers: ["Élément", "Description"], rows: [
          ["Sizing", "Nombre d'utilisateurs prévus + volumes de données"],
          ["Risques évolutifs", "Cadre juridique + évolutions prévisibles"],
          ["Limites qualitatives", "Prérequis technologiques minimum"],
          ["Normes applicables", "Cadre de conformité du projet"],
          ["Étapes de production", "Grandes étapes et jalons de validation"],
          ["Durée fonctionnelle", "Projet pérenne ou non (impact sur maintenance)"],
        ]},
      ],
    },
    {
      id: "cda-web-services-api",
      title: "Services distants — Web Services et API",
      blocks: [
        { type: "h", text: "Utiliser des services distants" },
        { type: "p", text: "Avantages :" },
        { type: "list", items: [
          "Pas besoin de développer la fonctionnalité du service soi-même",
          "Accès à des données que l'on ne possède pas",
          "Accélère le développement",
          "Répond à des problématiques complexes",
        ]},
        { type: "h", text: "Comment fonctionne un Web Service ?" },
        { type: "p", text: "Un web service est une application qui permet d'échanger des données avec d'autres applications web, même construites dans des langages différents." },
        { type: "p", text: "Flux :" },
        {
          type: "diagram",
          content: `Client  ──(requête XML/JSON/HTTP)──▶  Serveur distant (SOAP/REST/HTTP)
                                              │
                                              ▼
Client  ◀──(réponse même format)──  Données structurées`,
        },
        { type: "p", text: "3 couches :" },
        { type: "list", items: [
          "Invocation : structure des messages (XML-RPC, SOAP)",
          "Découverte : localisation des données (UDDI)",
          "Description : paramètres des fonctions et types (WSDL en XML)",
        ]},
        { type: "p", text: "Avantages des web services :" },
        { type: "list", items: [
          "Le client reçoit des infos sans stocker les données localement",
          "Un serveur peut être interrogé par de nombreux clients simultanément",
          "Les informations échangées peuvent être cryptées",
          "Fonctionne sur n'importe quelle plateforme et langage",
        ]},
        { type: "h", text: "Comment fonctionne une API ?" },
        { type: "p", text: "Une API (Application Programming Interface) est une interface codée pour que des applications qui ne sont pas censées fonctionner ensemble puissent interagir." },
        { type: "p", text: "L'API expose les données et définit les protocoles d'interaction." },
        { type: "p", text: "Deux types d'API :" },
        { type: "table", headers: ["Type", "Protocole", "Caractéristiques"], rows: [
          ["SOAP", "XML", "Protocole strict, messages XML"],
          ["REST", "HTTP", "Style d'architecture, format JSON, le + utilisé"],
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│              FONCTIONNEMENT D'UNE API                │
│                                                      │
│  Client (site, app, logiciel)                        │
│       │                                              │
│       │  Requête de données                          │
│       ▼                                              │
│  Serveur API                                         │
│  ├─ Extrait et collecte les données                  │
│  └─ Standardise le format pour le client            │
│       │                                              │
│       ▼                                              │
│  Réponse structurée (JSON/XML) vers le client        │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Intégrer une API (exemple Google Translate / Node.js)" },
        { type: "p", text: "Procédure :" },
        { type: "list", items: [
          "1. Déclarer le projet sur la console Google",
          "2. Activer la facturation",
          "3. Activer l'API",
          "4. Authentifier l'application (clé privée)",
        ]},
        { type: "p", text: "Ressources d'APIs publiques :" },
        { type: "list", items: ["https://github.com/public-apis/public-apis", "https://developers.google.com/apis-explorer"] },
      ],
    },
    {
      id: "cda-securiser-couches-logicielles",
      title: "Sécuriser les couches logicielles",
      blocks: [
        { type: "h", text: "Communication entre les couches" },
        {
          type: "diagram",
          content: `Couche N+1 (cliente)    ◀──── interface bien définie ────▶    Couche N (serveur)`,
        },
        { type: "p", text: "Chaque couche est indépendante et responsable de son fonctionnement interne. Modifier une couche ne doit pas influer sur les autres." },
        { type: "h", text: "Couche de présentation — Sécuriser les formulaires" },
        { type: "p", text: "Contre les utilisateurs maladroits (HTML) :" },
        { type: "code", filename: "html", language: "html", code: `<!-- Attributs HTML de contrainte -->
<input type="email"  name="email"    required>
<input type="number" name="age"      min="18" max="99">
<input type="tel"    name="telephone" pattern="[0-9]{10}">
<input type="password" name="mdp"   minlength="8">` },
        { type: "p", text: "Contre les utilisateurs malveillants (côté serveur) :" },
        {
          type: "diagram",
          content: `⚠️ Toute vérification côté client peut être contournée :
   - Désactivation du JavaScript
   - Suppression des attributs HTML avant envoi

→ Toujours valider les données CÔTÉ SERVEUR
→ Neutraliser les données potentiellement dangereuses`,
        },
        { type: "p", text: "Sanitization (assainissement) : L'assainissement inspecte une valeur non fiable et la transforme en valeur pouvant être insérée en sécurité dans le DOM. Dépend du contexte (CSS ≠ URL en termes de risques)." },
        { type: "h", text: "Couche de présentation — Affichage de données" },
        { type: "list", items: [
          "Déclarer des routes pour accéder aux vues",
          "Sécuriser l'accès aux routes avec des rôles",
          "Utiliser un moteur de template ou des composants pour les vues dynamiques",
        ]},
        { type: "h", text: "Couche de traitement" },
        { type: "p", text: "Requêtes préparées :" },
        {
          type: "diagram",
          content: `Exécution en 2 étapes :
1. PRÉPARATION : template de requête envoyé au serveur BDD
   → Vérification de syntaxe + initialisation des ressources
2. EXÉCUTION : données envoyées séparément
   → Élimine les risques d'injection SQL / XSS`,
        },
        { type: "p", text: "Sécuriser la désérialisation :" },
        { type: "list", items: [
          "Ne pas accepter d'objets sérialisés de sources non fiables",
          "Appliquer contrôle d'intégrité et contraintes de type strictes",
        ]},
        { type: "h", text: "Couche d'accès à la donnée" },
        { type: "list", items: [
          "Classer les données selon leur niveau de sensibilité",
          "Appliquer le cryptage systématiquement",
          "Utiliser des algorithmes standards et un système de gestion des clés approprié",
          "Désactiver le cache des réponses contenant des données sensibles",
          "Arrêter de stocker des données inutiles",
        ]},
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│          SÉCURISATION PAR COUCHE — RÉSUMÉ            │
│                                                      │
│  PRÉSENTATION  → Sécuriser formulaires               │
│                  Sanitizer les données interpolées   │
│                                                      │
│  TRAITEMENT    → Requêtes préparées                  │
│                  Sécuriser désérialisation           │
│                                                      │
│  DONNÉES       → Classer / contrôler                 │
│                  Crypter                             │
│                  Désactiver cache données sensibles  │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "cda-applications-mobiles-performantes",
      title: "Concevoir des applications mobiles performantes",
      blocks: [
        { type: "h", text: "Outils de développement" },
        { type: "p", text: "Android :" },
        { type: "list", items: [
          "Google DevTools (navigateur) : simuler appareils, débugger, mesurer performances",
          "Remote debug Android : brancher l'appareil en USB, accéder via chrome://inspect/#devices",
          "Android Studio : EDI natif Android, émulateur d'appareils",
        ]},
        { type: "p", text: "iOS :" },
        { type: "list", items: [
          "Safari DevTools : simuler appareils, mesurer performances",
          "XCode : packager le code, connecter appareil iOS, simulateur iOS",
        ]},
        { type: "h", text: "Frameworks mobiles" },
        { type: "table", headers: ["Framework", "Technologie", "Particularités"], rows: [
          ["Mobile Angular UI", "AngularJS", "Multiplateforme, compatibilité navigateurs, nombreux composants UI"],
          ["Ionic", "HTML/CSS/JS + AngularJS", "Open source (2013), composants UI (formulaires, menus)"],
          ["React Native", "React + JavaScript", "Facebook, multiplateforme, code unique iOS + Android"],
          ["Adobe PhoneGap", "Web + natif", "Racheté par Adobe, applications multiplateformes"],
        ]},
        { type: "h", text: "Optimiser les performances" },
        { type: "p", text: "1. Mode asynchrone" },
        { type: "list", items: [
          "Utiliser le mode asynchrone pour les méthodes accédant à des ressources ou APIs",
          "Évite de bloquer la boucle d'événements (Node.js)",
          "Laisse la main à l'utilisateur pendant les traitements",
        ]},
        { type: "p", text: "2. Ressources graphiques — 3 étapes" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│        OPTIMISATION DES IMAGES               │
│                                              │
│  1. COMPRESSION                              │
│     Réduire la taille sans perte résolution  │
│                                              │
│  2. REDIMENSIONNEMENT                        │
│     Adapter aux dimensions de l'écran        │
│                                              │
│  3. MISE EN CACHE                            │
│     Téléchargement vers mémoire appareil     │
│     → Plus de chargement réseau à chaque fois│
└──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "3. Compression CSS/JavaScript — Compresser les fichiers de style et JavaScript (minification)." },
        { type: "p", text: "4. Design et device" },
        { type: "list", items: ["Définir un plan d'action selon la qualité du réseau", "Penser au changement d'orientation du mobile"] },
        { type: "p", text: "5. Référencement" },
        { type: "list", items: [
          "Référencer sur le web et dans les stores (Google Play, App Store)",
          "Utiliser les outils d'analyse statistique et remontées d'anomalies",
        ]},
      ],
    },
    {
      id: "cda-ergonomie-application",
      title: "Ergonomie de l'application",
      blocks: [
        { type: "h", text: "Répondre aux besoins des utilisateurs" },
        { type: "p", text: "L'application doit :" },
        { type: "list", items: [
          "1. Apporter une réponse satisfaisante aussi rapidement que facilement (efficacité)",
          "2. Être intuitive — pas besoin de connaissances techniques approfondies",
        ]},
        { type: "h", text: "Éléments de navigation essentiels" },
        { type: "list", items: ["Menus", "Barre de recherche", "Redirection"] },
        { type: "h", text: "L'étude UML pour l'ergonomie" },
        { type: "p", text: "Utiliser le langage UML (Unified Modeling Language) pour concevoir et mettre en œuvre les applications." },
        { type: "p", text: "Diagrammes UML pertinents pour l'ergonomie :" },
        { type: "table", headers: ["Diagramme", "Utilité"], rows: [
          ["Cas d'utilisation", "Modélise comment les utilisateurs interagissent avec le système"],
          ["Séquence", "Montre l'ordre d'interaction des objets — scénarios d'exécution"],
          ["Activités", "Représente les étapes d'un cas d'utilisation (processus métiers)"],
        ]},
        { type: "h", text: "Prérequis ergonomiques" },
        { type: "p", text: "Rendre l'application désirable : Esthétique, identité visuelle cohérente (couleurs, logo, typographie, images). Objectif : susciter l'émotion de l'utilisateur." },
        { type: "p", text: "Rendre l'application accessible à tous : Navigation adaptée à toutes situations : association des couleurs, zoom, taille modifiable du texte, lecture audio." },
        { type: "p", text: "ARIA (Accessible Rich Internet Applications) : ensemble de rôles et attributs pour rendre le contenu JavaScript accessible aux personnes en situation de handicap." },
        { type: "p", text: "Assurer la portabilité :" },
        { type: "list", items: [
          "S'adapter à tous supports (smartphones, tablettes, ordinateurs)",
          "Application native (iOS et Android séparés) ou hybride (Ionic, Quasar)",
          "Pour site web : responsive design",
        ]},
        { type: "p", text: "Assurer la crédibilité : Contenu professionnel, crédible, offrant confort à l'utilisateur. Simplicité et cohérence." },
        { type: "p", text: "Travailler le référencement : Les moteurs de recherche valorisent les outils optimisés pour le confort de l'usager." },
      ],
    },
    {
      id: "cda-design-interfaces-mobiles",
      title: "Design d'interfaces mobiles",
      blocks: [
        { type: "h", text: "Approche Mobile First" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│         RESPONSIVE DESIGN  →  MOBILE FIRST           │
│                                                      │
│  Responsive Design (ancien)                          │
│  └─ Site PC adapté aux mobiles                       │
│                                                      │
│  Mobile First (actuel)                               │
│  ├─ Prévoir la version mobile EN PREMIER             │
│  ├─ Commencer par la version mobile (maquette + code)│
│  └─ Puis étendre au desktop                          │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "note", variant: "info", text: "L'utilisateur est mobile : partout dans internet, en mouvement, dans des zones à faible réseau, interagissant avec le réel via son mobile." },
        { type: "h", text: "Les gestes disponibles sur mobile" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                 GESTURE HANDLERS MOBILE                 │
│                                                         │
│  TAP           Contact unique rapide                    │
│                ≡ clic souris — sélectionner, activer    │
│                                                         │
│  DOUBLE TAP    Deux contacts rapides successifs         │
│                → Ouvrir un élément, zoomer              │
│                                                         │
│  PRESS         Contact prolongé                         │
│                → Informations contextuelles, menu       │
│                                                         │
│  FLICK         Balayage rapide                          │
│                → Défilement accéléré (V ou H)           │
│                                                         │
│  DRAG          Maintien + glissement                    │
│                → Défilement lent et précis, drag&drop   │
│                                                         │
│  PRESS+DRAG    Contact prolongé + déplacement           │
│                → Défilement en sous-zone                │
│                                                         │
│  SPREAD        Pouce + index s'éloignent               │
│                → Zoom avant (pinch-to-zoom)             │
│                                                         │
│  PINCH         Pouce + index se rapprochent             │
│                → Zoom arrière (inverse du spread)       │
│                                                         │
│  SPLAY         Tous les doigts s'écartent               │
│                → "Lâcher" un élément (peu utilisé)      │
│                                                         │
│  SQUEEZE       Tous les doigts se rapprochent           │
│                → "Attraper" un élément                  │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Créer une maquette fonctionnelle" },
        { type: "note", variant: "success", text: 'Règle d\'or : "La maquette fonctionnelle avant le prototype design."' },
        { type: "list", items: [
          "Commencer par papier/crayon ou outil rapide",
          "Se concentrer sur les aspects fonctionnels, pas la forme",
          "Maquettes souvent statiques à ce stade",
          "Itérer rapidement et facilement des idées",
        ]},
        { type: "h", text: "Réaliser le prototypage design" },
        { type: "p", text: "Étapes de réussite d'un prototype :" },
        { type: "list", items: ["1. Organiser le contenu", "2. Organiser les pages de façon logique", "3. Concevoir des interfaces orientées expérience utilisateur"] },
        { type: "p", text: "Principes :" },
        { type: "list", items: [
          "L'utilisateur doit s'y retrouver rapidement",
          "Ses choix de navigation doivent mener aux résultats de façon fluide",
          "Appliquer un design cohérent tout au long du parcours",
        ]},
        { type: "p", text: "Outils de prototypage design : Adobe XD, Figma, Invision, Marvel, Proto.io, Framer" },
        { type: "h", text: "Je retiens : le design mobile" },
        { type: "list", items: [
          "Prendre en compte que l'utilisateur peut se trouver n'importe où",
          "Concevoir pour les gestes des doigts et non la souris",
          "Créer des maquettes fonctionnelles avant le prototype design",
          "Le prototype design est une maquette dynamique à présenter au client pour tests",
        ]},
      ],
    },
  ],
};
