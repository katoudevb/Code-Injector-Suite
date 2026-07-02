import type { Section } from "../types";

export const symfony: Section = {
  id: "symfony",
  title: "Symfony",
  icon: "Layers",
  tags: ["php"],
  subsections: [
    // ── PRÉSENTATION ─────────────────────────────────────────────────────────
    {
      id: "symfony-presentation",
      title: "Symfony — Présentation",
      blocks: [
        { type: "p", text: "Il est basé sur une architecture MVC. Il est organisé pour pouvoir facilement intégrer des librairies et fonctionne en bundle ou dépendances (un bundle va être dédié aux formulaires par exemple, ou un autre à la BDD)." },
        { type: "h", text: "Pré-requis d'utilisation" },
        { type: "list", items: [
          "GIT — l'outil de versioning pour ses mises à jour et pour versionner vos projets",
          "Composer — gestionnaire de dépendances",
          "Symfony-CLI — l'interface de commande du framework",
          "PHP8 (8.1 ou +)",
        ]},
      ],
    },

    // ── CONFIGURATION ENVIRONNEMENT ──────────────────────────────────────────
    {
      id: "symfony-config-env",
      title: "Configuration de l'environnement",
      blocks: [
        { type: "h", text: "Windows" },
        { type: "list", items: [
          "Installez Composer pour charger tous les packages",
          "Installez Git pour sauvegarder le projet (Symfony possède son propre système de dépôt distant)",
          "Installez le CLI de Symfony",
        ]},
        { type: "h", text: "Mac" },
        { type: "list", items: [
          "Installez Brew, gestionnaire de dépendances de Mac",
          "Installez Composer, gestionnaire de dépendances de PHP",
          "Installez Git, l'outil de versioning",
          "Installez symfony-cli",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `brew install symfony-cli/tap/symfony-cli` },
      ],
    },

    // ── STRUCTURE PROJET ─────────────────────────────────────────────────────
    {
      id: "symfony-structure-projet",
      title: "Structure d'un projet",
      blocks: [
        {
          type: "diagram",
          content: `PROJET
├── bin/                    # Scripts exécutables
│   └── console             # Interface en ligne de commande Symfony
├── config/                 # Configuration globale de l'application
│   ├── packages/           # Config des bundles et services tiers
│   ├── routes/             # Définition des routes
│   └── services.yaml       # Déclaration des services applicatifs
├── public/                 # Racine web (accessibles publiquement)
│   ├── index.php           # Point d'entrée HTTP
│   └── assets/             # Ressources front compilées
│       ├── css/            # Feuilles de style
│       ├── js/             # Scripts JavaScript
│       └── images/         # Images publiques
├── src/                    # Code source de l'application
│   ├── Controller/         # Contrôleurs MVC
│   ├── Entity/             # Entités Doctrine (modèles)
│   ├── Repository/         # Requêtes personnalisées sur les entités
│   ├── Security/           # Authentification et autorisations
│   ├── Service/            # Logique métier réutilisable
│   └── Kernel.php          # Noyau de l'application Symfony
├── templates/              # Vues Twig
├── translations/           # Fichiers de traduction (i18n)
├── var/                    # Données temporaires générées par Symfony
│   ├── cache/              # Cache applicatif
│   ├── logs/               # Logs système et applicatifs
│   └── sessions/           # Sessions utilisateur
├── vendor/                 # Dépendances installées via Composer
├── tests/                  # Tests unitaires et fonctionnels
├── composer.json           # Dépendances et scripts Composer
├── .env                    # Variables d'environnement par défaut
├── .env.local              # Variables d'environnement locales
└── symfony.lock            # Verrouillage des versions des dépendances`,
        },
      ],
    },

    // ── CRÉER UN PROJET ──────────────────────────────────────────────────────
    {
      id: "symfony-creer-projet",
      title: "Créer un projet Symfony",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `# Vérifier la version de symfony CLI
symfony -V

# Vérifier la version de Symfony
php bin/console --version

# Créer un projet complet (webapp)
symfony new --webapp nom-Projet

# Créer un projet minimal
symfony new nom_du_projet

# Lancer le projet
cd nom_du_projet
symfony server:start
# Ouvrir http://127.0.0.1:8000` },
      ],
    },

    // ── LE CONTRÔLEUR ────────────────────────────────────────────────────────
    {
      id: "controleur",
      title: "Le Contrôleur",
      blocks: [
        { type: "p", text: "DEF : Permet de faire le lien entre la base de données et la vue. Il contient toute la logique métier de gestion des données." },
        { type: "list", items: ["Situé dans le dossier /src/Controller"] },
        { type: "code", filename: "controller.php", language: "php", code: `public function accueil()
{
    return new Response('Bienvenue !');
}` },
        { type: "h", text: "Règles de création" },
        { type: "list", items: [
          "Son nom de fichier est l'objet qu'il va gérer suivi de Controller (ex. ObjetController.php)",
          "Il possède un namespace indiquant qu'il est dans /src/Controller et contient le nom de la classe identique au nom du fichier",
          "Il doit s'étendre via AbstractController",
        ]},
        { type: "h", text: "Check-list — quand l'utiliser" },
        { type: "list", items: [
          "L'action correspond-elle à une URL / route spécifique (/, /login, /products, /cart, /admin) ?",
          "Reçoit-elle des paramètres depuis la route ou la query string (id, filter, page) ?",
          "Appelle-t-elle des services ou repositories pour exécuter la logique métier ?",
          "Contient-elle uniquement de l'orchestration et pas de calcul complexe ou logique métier ?",
          "Retourne-t-elle une réponse HTTP appropriée (Response, JsonResponse, RedirectResponse) ?",
          "Rend-elle la vue Twig avec les bonnes données ($this->render()) ?",
          "Crée-t-elle et gère-t-elle des formulaires ($this->createForm(), handleRequest()) ?",
          "Vérifie-t-elle les rôles ou autorisations nécessaires ($this->denyAccessUnlessGranted('ROLE_ADMIN')) ?",
          "Redirige-t-elle correctement les utilisateurs non autorisés ?",
          "Toute logique métier complexe est-elle déplacée dans des services ?",
        ]},
        { type: "code", filename: "src/Controller/ProduitController.php", language: "php", code: `<?php
namespace App\\Controller;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\JsonResponse;
use Symfony\\Component\\Routing\\Attribute\\Route;

class ProduitController extends AbstractController
{
    #[Route('/produits', name: 'produits_liste', methods: ['GET'])]
    public function liste(): JsonResponse
    {
        return $this->json([['id' => 1, 'nom' => 'Sac']]);
    }

    #[Route('/produit/{id}', name: 'produit_voir')]
    public function voir(int $id): JsonResponse
    {
        return $this->json(['id' => $id]);
    }
}` },
      ],
    },

    // ── ABSTRACTCONTROLLER ───────────────────────────────────────────────────
    {
      id: "abstract-controller",
      title: "L'AbstractController",
      blocks: [
        { type: "p", text: "DEF : Contrôleur par défaut de Symfony qui contient un tas de méthodes utiles pour afficher un template, créer un formulaire, etc." },
        { type: "note", variant: "info", text: "Il est à importer depuis FrameworkBundle. N'oubliez pas d'ajouter le use !" },
        { type: "code", filename: "src/Controller/PostController.php", language: "php", code: `<?php

namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;

class PostController extends AbstractController {

}` },
        { type: "h", text: "Méthode" },
        { type: "p", text: "DEF : Une méthode de contrôleur doit toujours retourner un objet Response venant du Composant HttpFoundation." },
        { type: "h", text: "Modifier l'affichage de la page d'accueil" },
        { type: "p", text: "Option 1 — Utiliser l'attribut Route :" },
        { type: "list", items: [
          "Utiliser l'attribut Route",
          "Ajouter le paramètre path pour indiquer à quelle URL cette méthode est appelée, puis un autre paramètre qui est le nom de la route qui servira sur mes templates",
        ]},
        { type: "code", filename: "src/Controller/PostController.php", language: "php", code: `<?php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;

class PostController extends AbstractController {

    #[Route("/", name:"home")]
    public function home() :Response
    {
        return new Response("<h1>Hello World!</h1>");
    }
}` },
        { type: "p", text: "Option 2 — Retourner un template avec render d'AbstractController :" },
        { type: "code", filename: "src/Controller/PostController.php", language: "php", code: `<?php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;

class PostController extends AbstractController {

    #[Route(path: "/", name: "home")]
    public function home() :Response
    {
        return $this->render('home.html.twig');
    }
}` },
      ],
    },

    // ── CRÉER UN CONTRÔLEUR ──────────────────────────────────────────────────
    {
      id: "creer-controleur",
      title: "Créer un contrôleur",
      blocks: [
        { type: "h", text: "En ligne de commande" },
        { type: "p", text: "DEF : Crée un contrôleur et une vue (template html personnalisée) ainsi que la liaison entre les 2." },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:controller` },
        { type: "list", items: [
          "Indiquer le nom du contrôleur (ex. UserController)",
          "Deux fichiers sont créés : src/Controller/UserController.php et templates/user/index.html.twig",
        ]},
        { type: "h", text: "Manuellement" },
        { type: "p", text: "DEF : Aucun fichier créé automatiquement, plus long et répétitif." },
        { type: "list", items: [
          "Aller dans /src/Controller",
          "Créer un fichier et indiquer le nom (ex. PostController.php)",
          "Ajouter un namespace (App\\Controller;)",
        ]},
        { type: "note", variant: "info", text: "App\\ car on est dans le dossier src/ donc le cœur de l'application." },
        { type: "list", items: [
          "Créer la classe en question (ici PostController)",
          "Faire hériter la classe (PostController) par celle de Symfony qui est AbstractController via extends",
        ]},
        { type: "code", filename: "src/Controller/PostController.php", language: "php", code: `<?php

namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;

class PostController extends AbstractController {

}` },
      ],
    },

    // ── ANALYSER LA REQUÊTE ──────────────────────────────────────────────────
    {
      id: "analyser-requete",
      title: "Analyser la requête",
      blocks: [
        { type: "code", filename: "controller.php", language: "php", code: `use Symfony\\Component\\HttpFoundation\\Request;

// ...

public function maMethode(Request $request): Response {
    // Equivalent pour $_GET['param1']
    $request->query->get('param1');

    // Equivalent pour $_POST['param2']
    $request->request->get('param2');

    // Connaître la méthode HTTP de la requête
    $request->isMethod('MA_METHODE'); // GET, POST...
}` },
      ],
    },

    // ── TWIG ─────────────────────────────────────────────────────────────────
    {
      id: "twig",
      title: "Twig",
      blocks: [
        { type: "p", text: "DEF : Moteur de template créé par Symfony. On parle de moteur de template puisqu'il permet d'ajouter du dynamisme par les vues." },
        { type: "note", variant: "info", text: "Un projet créé avec --webapp a déjà Twig intégré, sinon il faudra utiliser la commande composer require twig." },
        { type: "h", text: "Check-list — quand l'utiliser" },
        { type: "list", items: [
          "La page contient-elle du HTML ou des vues dynamiques ?",
          "Les boucles et conditions Twig sont-elles utilisées pour afficher les listes de produits, menus dynamiques ou messages ?",
          "Les templates sont-ils séparés en blocs et inclusions pour réutilisation (header, footer, menu) ?",
        ]},
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: [
          "Dans /templates il y a à l'intérieur un fichier base.html.twig, qui est le template chargé pour chaque page (c'est la base du fichier HTML)",
          "Tout fichier Twig aura l'extension .html.twig",
        ]},
        { type: "h", text: "Utilisation" },
        { type: "list", items: [
          "Le contrôleur prépare des données (ex : un tableau, un objet)",
          "Le contrôleur appelle Twig pour afficher un fichier .twig",
          "Twig insère les données dans le HTML grâce à des variables",
        ]},
        { type: "h", text: "Depuis un fichier .html.twig" },
        { type: "code", filename: "templates/hello.html.twig", language: "twig", code: `{# templates/hello.html.twig #}
<h1>Bonjour {{ name }}</h1>` },
        { type: "h", text: "Depuis un contrôleur" },
        { type: "code", filename: "src/Controller/Controleur1.php", language: "php", code: `// src/controller/Controleur1
#[Route('/salutation', name: 'salutation')]
public function salutation(): Response
{
    $nom = 'Kat';
    return $this->render('salutation.html.twig', ['nom' => $nom]);
}` },
        { type: "code", filename: "templates/salutation.html.twig", language: "twig", code: `{# templates/salutation.html.twig #}
<h1>Bonjour {{ nom }} !</h1>` },
        { type: "code", filename: "resultat.html", language: "html", code: `<!-- RESULTAT navigateur -->
<h1>Bonjour Kat !</h1>` },
      ],
    },

    // ── SYNTAXE TWIG ─────────────────────────────────────────────────────────
    {
      id: "syntaxe-twig",
      title: "La syntaxe de Twig",
      blocks: [
        { type: "p", text: "3 syntaxes à connaître en particulier :" },
        { type: "h", text: "Les commentaires" },
        { type: "p", text: "Sont seulement de type bloc, n'existent pas en ligne." },
        { type: "code", filename: "comment.twig", language: "twig", code: `{# Je suis un commentaire de bloc #}` },
        { type: "h", text: "L'affichage" },
        { type: "p", text: "Affiche des valeurs de variables ou chaîne de caractères." },
        { type: "code", filename: "affichage.twig", language: "twig", code: `{{ variable ou chaînes de caractères }}` },
        { type: "h", text: "L'appel de fonction" },
        { type: "p", text: "Pour créer une variable, faire une boucle, mettre une condition, etc." },
        { type: "code", filename: "fonction.twig", language: "twig", code: `{% fonction %}` },
        { type: "h", text: "Les boucles" },
        { type: "code", filename: "boucle.twig", language: "twig", code: `{% for item in items %}
    ...
    {# Ici, variable "loop" exploitable #}
{% else %}
    {# Si le tableau "items" est vide... #}
{% endfor %}` },
        { type: "table", headers: ["Variable", "Description"], rows: [
          ["loop.index", "Indice de l'itération courante"],
          ["loop.length", "Nombre d'itérations totales"],
          ["loop.first", "S'il s'agit de la 1ère itération"],
          ["loop.last", "S'il s'agit de la dernière itération"],
        ]},
        { type: "h", text: "Les conditions" },
        { type: "code", filename: "condition.twig", language: "twig", code: `{% if ma_variable == 1 %}
...
{% elseif ma_variable == 2 %}
...
{% else %}
...
{% endif %}` },
      ],
    },

    // ── CRÉER UN TEMPLATE TWIG ───────────────────────────────────────────────
    {
      id: "creer-template-twig",
      title: "Créer un template Twig",
      blocks: [
        { type: "list", items: [
          "Créez le fichier test.html.twig",
          "Indiquer que le template étend le fichier de base (facultatif)",
        ]},
        { type: "code", filename: "test.html.twig", language: "twig", code: `{% extends 'base.html.twig' %}` },
        { type: "p", text: "Il y a des blocs par défaut, mais on peut en ajouter autant que souhaité. Pour ajouter des éléments au body de la page il suffit d'appeler le bloc body, il écrasera celui dans le fichier de base :" },
        { type: "code", filename: "test.html.twig", language: "twig", code: `{% extends 'base.html.twig' %}

{% block body %}
    <h1>Bienvenue sur mon super blog</h1>
    <h2>Vous retrouverez plein de super articles sur le dev!</h2>
{% endblock %}` },
        { type: "note", variant: "info", text: "Documentation Twig : https://twig.symfony.com/doc/" },
      ],
    },

    // ── VARIABLES TWIG ───────────────────────────────────────────────────────
    {
      id: "variables-twig",
      title: "Variables TWIG",
      blocks: [
        { type: "code", filename: "variables.twig", language: "twig", code: `{{ ma_variable }}
{{ mon_tableau[0] }}, {{ mon_tableau['cle'] }} ou {{ mon_tableau.cle }}
{{ mon_objet.propriete }}` },
      ],
    },

    // ── FILTRES TWIG ─────────────────────────────────────────────────────────
    {
      id: "filtres-twig",
      title: "Filtres TWIG",
      blocks: [
        { type: "p", text: "DEF : Fonctions permettant de manipuler et de formater des données." },
        { type: "code", filename: "filtres.twig", language: "twig", code: `{# Sans paramètre #}
{{ ma_variable|length }}

{# Avec paramètre #}
{{ ma_variable|date('d/m/Y') }}
{{ ma_variable|replace({'06': '+33'}) }}

{# Filtres combinés #}
{{ ma_variable|upper|slice(0, 1) }}` },
      ],
    },

    // ── HÉRITAGE TWIG ────────────────────────────────────────────────────────
    {
      id: "heritage-twig",
      title: "Héritage TWIG",
      blocks: [
        { type: "p", text: "DEF : Réutilisation et extension de modèles de manière hiérarchique." },
        { type: "code", filename: "base.html.twig", language: "twig", code: `{# base.html.twig (parent) #}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>
            {% block title %}Welcome!{% endblock %}
        </title>
    </head>
    <body>
        {% block body %}{% endblock %}
    </body>
</html>` },
        { type: "code", filename: "ma_page.html.twig", language: "twig", code: `{# ma_page.html.twig (enfant) #}
{% extends 'base.html.twig' %}

{% block title %}Hello{% endblock %}

{% block body %}
    <h1>Ma page</h1>
{% endblock %}` },
      ],
    },

    // ── INCLUSION TWIG ───────────────────────────────────────────────────────
    {
      id: "inclusion-twig",
      title: "Inclusion TWIG",
      blocks: [
        { type: "p", text: "DEF : Inclusion d'un template dans un autre." },
        { type: "code", filename: "inclusion.twig", language: "twig", code: `{{ include '_header.html.twig' }}

{# Avec transmission de variables #}
{{ include '_header.html.twig' with { 'foo': 'bar' } }}` },
      ],
    },

    // ── RETOURNER UN TEMPLATE ────────────────────────────────────────────────
    {
      id: "retourner-template",
      title: "Retourner un template",
      blocks: [
        { type: "code", filename: "controller.php", language: "php", code: `// Sans données
return $this->render('chemin/vers/template.html.twig');

// Avec données
return $this->render(
    'chemin/vers/template.html.twig', [
        'donnee_pour_template' => $maDonnee
    ]
);` },
      ],
    },

    // ── REDIRECTION ──────────────────────────────────────────────────────────
    {
      id: "redirection",
      title: "Redirection",
      blocks: [
        { type: "code", filename: "controller.php", language: "php", code: `// Vers route statique
return $this->redirectToRoute('nom_route');

// Vers route dynamique
return $this->redirectToRoute(
    'nom_route', [
        'param1' => 'valeur1',
        'param2' => 'valeur2'
    ]
);` },
      ],
    },

    // ── LIENS ENTRE PAGES ────────────────────────────────────────────────────
    {
      id: "liens-pages",
      title: "Liens entre pages",
      blocks: [
        { type: "code", filename: "liens.twig", language: "twig", code: `<a href="{{ path('nom_route') }}">
    Lien vers page statique
</a>

<a href="{{ path('nom_route', { param1: 'valeur' }) }}">
    Lien vers page dynamique
</a>` },
      ],
    },

    // ── RESSOURCES STATIQUES ─────────────────────────────────────────────────
    {
      id: "ressources-statiques",
      title: "Lier des ressources statiques (CSS, JS, médias…)",
      blocks: [
        { type: "code", filename: "assets.twig", language: "twig", code: `{# Logo situé dans "public/img/logo.png" #}
<img src="{{ asset('img/logo.png') }}" alt="...">

{# Fichier CSS situé dans "public/css/app.css" #}
<link href="{{ asset('css/app.css') }}" rel="stylesheet">

{# Fichier JS situé dans "public/js/app.js" #}
<script src="{{ asset('js/app.js') }}"></script>` },
      ],
    },

    // ── COMPOSER ─────────────────────────────────────────────────────────────
    {
      id: "bundle-composer",
      title: "Le Bundle Composer",
      blocks: [
        { type: "p", text: "DEF : Système d'événements auquel de nombreuses dépendances se connectent. Utiliser les événements permet d'automatiser des comportements au chargement d'un contrôleur." },
      ],
    },
    {
      id: "presenter-composer",
      title: "Présenter Composer",
      blocks: [
        { type: "p", text: "DEF : Composer est un gestionnaire de dépendances, il permet de s'assurer que toutes les librairies soient bien installées. Composer permet d'installer d'autres dépendances et de les mettre à jour." },
        { type: "list", items: [
          "/vendor contient toutes les dépendances de PHP installées. Il peut les mettre à jour, les supprimer, créer un nouveau projet à partir d'un repository GitHub utilisant PHP.",
          "composer.json peut se modifier ; il décrit toutes les dépendances actuelles du projet.",
        ]},
        { type: "h", text: "Utiliser Composer" },
        { type: "p", text: "https://packagist.org/ — répertoire de Composer (paquets à installer disponibles)" },
        { type: "list", items: [
          "Rechercher le paquet et voir la documentation qui indique comment l'installer",
          "Ouvrir le terminal du projet (VSCode) et entrer la commande",
          "Accepter les recettes (Y)",
          "Accepter les recettes proposées (automatisation qui aide Composer à modifier d'autres fichiers dans la code base)",
        ]},
        { type: "h", text: "Installer des dépendances du projet grâce à Composer" },
        { type: "code", filename: "terminal", language: "bash", code: `composer install` },
        { type: "p", text: "Quand on exécute cette commande dans un dossier de projet (Symfony, Laravel, etc.), Composer :" },
        { type: "list", items: [
          "Lit composer.json",
          "Lit composer.lock (s'il existe)",
          "Installe toutes les dépendances dans le dossier vendor/",
        ]},
        { type: "note", variant: "info", text: "C'est la commande principale quand tu récupères un projet existant (sur GitHub, GitLab, etc.)." },
      ],
    },

    // ── ÉVÉNEMENTS ───────────────────────────────────────────────────────────
    {
      id: "gerer-evenements",
      title: "Gérer des événements",
      blocks: [
        { type: "p", text: "DEF : Ce sont les points d'entrée des actions à réaliser." },
        { type: "p", text: "Contient que : Des minuscules, Des chiffres, points, underscore. Nom préfixé avec une espace de nom puis d'un point. Terminé par le verbe par un nom indiquant l'action (ex. category.menu.created)." },
        { type: "h", text: "Schéma du système d'événements" },
        {
          type: "diagram",
          content: `+--------+         +--------+         +------------+
| Source | ──────► | Event  | ──────► | Listener 1 |
+--------+         +--------+    │    +------------+
                                 │
                                 ├──► +------------+
                                 │    | Listener 2 |
                                 │    +------------+
                                 │
                                 └──► +------------+
                                      | Listener 3 |
                                      +------------+`,
        },
        { type: "h", text: "Check-list — quand les utiliser" },
        { type: "list", items: [
          "Faut-il déclencher une action automatique à un moment précis du cycle Symfony ?",
          "Cette action doit-elle rester découplée du contrôleur (ex. envoi d'email après inscription) ?",
          "Les EventListeners ou Subscribers sont-ils réutilisables et testables ?",
        ]},
      ],
    },

    // ── EVENTDISPATCHER ──────────────────────────────────────────────────────
    {
      id: "event-dispatcher",
      title: "L'EventDispatcher",
      blocks: [
        { type: "p", text: "DEF : Le dispatcher est l'objet central du système. Un seul dispatcher est créé qui maintient un registre des Listeners. Lorsqu'un événement est distribué, le dispatcher notifie tous les Listeners enregistrés avec cet événement." },
        { type: "code", filename: "controller.php", language: "php", code: `public function listener(ControllerListener $listener)
{
    $dispatcher = new EventDispatcher;
    $dispatcher->addListener('kernel.controller', [$listener, 'onKernelController']);
}` },
        { type: "list", items: [
          "Se connecter au Listener grâce à la méthode addListener de l'EventDispatcher",
          "Cette méthode prend en premier paramètre l'événement appelé et en second un tableau comprenant le listener et la méthode appelée",
          "Il faut l'installer via la documentation Symfony puis l'utiliser via addListener",
        ]},
      ],
    },

    // ── EVENTSUBSCRIBER ──────────────────────────────────────────────────────
    {
      id: "event-subscriber",
      title: "L'EventSubscriber",
      blocks: [
        { type: "p", text: "DEF : Permet de souscrire à ces événements pour passer des actions. Dans ce cas, on utilise un Subscriber." },
        { type: "list", items: ["Le générer via la commande :"] },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:subscriber` },
        { type: "p", text: "Cette commande va demander à quel événement souscrire et va créer un nouveau fichier dans le dossier src/EventSubscriber." },
        { type: "list", items: [
          "Le fichier src/EventSubscriber contient deux méthodes : onKernelController — qui contient le code que l'on souhaite exécuter, getSubscribedEvents — associe la première méthode à l'événement",
          "Charger le Repository et l'environnement Twig dans le constructeur pour permettre de récupérer toutes les catégories, puis le passer à l'environnement pour les associer à une variable globale que je peux récupérer partout.",
        ]},
        { type: "code", filename: "src/EventSubscriber/MenuSubscriber.php", language: "php", code: `<?php

namespace App\\EventSubscriber;

use Twig\\Environment;
use App\\Repository\\CategoryRepository;
use Symfony\\Component\\HttpKernel\\KernelEvents;
use Symfony\\Component\\HttpKernel\\Event\\ControllerEvent;
use Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;

class MenuSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private CategoryRepository $repository,
        private Environment $twig
    ) {}

    public function onKernelController(ControllerEvent $event): void
    {
        $this->twig->addGlobal('categories', $this->repository->findAll());
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController',
        ];
    }
}` },
        { type: "note", variant: "info", text: "Les événements de l'ORM : https://symfony.com/doc/current/doctrine/events.html#doctrine-events" },
      ],
    },

    // ── CRÉER UNE ENTITÉ ─────────────────────────────────────────────────────
    {
      id: "creer-entite",
      title: "Manipulez des données — Créer une entité",
      blocks: [
        { type: "p", text: "DEF : Représente les tables dans la base de données au niveau de l'application Symfony." },
        { type: "h", text: "Étape 1 — Configurer la BDD dans .env.local" },
        { type: "p", text: "Contient les infos sensibles qui sont sécurisées, au lieu de .env :" },
        { type: "code", filename: ".env / .env.local", language: "bash", code: `# Commenter l'url DATABASE du fichier .env
DATABASE_URL="mysql://root:!Mot de passe!@127.0.0.1:3306/nom_db?serverVersion=8.0.32&charset=utf8mb4"

# Configurer le fichier .env.local
DATABASE_URL="mysql://root:@127.0.0.1:3306/nom_db?serverVersion=8.0"` },
        { type: "note", variant: "info", text: "root: = c'est l'utilisateur. !Mot de passe! = le mot de passe utilisateur (facultatif \"vide\" si y'en a pas). 127.0.0.1:3306 = Adresse de la machine et son port \"3306\". nom_db = mettre le nom de la base de données." },
        { type: "h", text: "Étape 2 — Utiliser la commande" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:entity` },
        { type: "note", variant: "info", text: "Le MakerBundle est utilisé. Il va vous poser une série de questions afin de vous assister." },
        { type: "h", text: "Étape 3 — Répondre aux questions" },
        { type: "list", items: [
          "Nom de l'entité",
          "Nom du champ",
          "Type de valeur attendu",
          "Taille du champ",
          "Champ nullable",
          "Ajouter un nouveau champ ou \"Entrée\" pour quitter la création",
        ]},
        { type: "note", variant: "info", text: "En cas de doute sur la réponse, mettre un ? pour afficher les possibilités." },
        { type: "h", text: "Types de champs disponibles" },
        { type: "table", headers: ["Catégorie", "Types"], rows: [
          ["Principaux", "string, text, boolean, integer (ou smallint, bigint), float"],
          ["Relations", "relation, ManyToOne, OneToMany, ManyToMany, OneToOne"],
          ["Array/Object", "array (ou simple_array), json, object, binary, blob"],
          ["Date/Time", "datetime (ou datetime_immutable), datetimetz, date, time, dateinterval"],
          ["Autres", "ascii_string, decimal, guid"],
        ]},
      ],
    },

    // ── MIGRER LES DONNÉES ───────────────────────────────────────────────────
    {
      id: "migrer-donnees",
      title: "Migrer les données (ajouter)",
      blocks: [
        { type: "h", text: "Créer la base de données" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer la BDD dans PHPMyAdmin
symfony console doctrine:database:create

# Créer la base tests
php bin/console doctrine:database:create --env=test` },
        { type: "h", text: "Créer les requêtes SQL (migrations)" },
        { type: "p", text: "DEF : Elles sont créées dans un fichier qui permet de migrer une entité vers la BDD grâce aux requêtes SQL générées. Ce fichier s'appelle migration." },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:migration` },
        { type: "note", variant: "info", text: "On utilise le MakerBundle. Dans le dossier migrations/, un nouveau fichier commençant par Version va être créé." },
        { type: "p", text: "Répondre YES pour confirmer la modification de la BDD." },
        { type: "note", variant: "warning", text: "Symfony crée d'autres tables non demandées pour pouvoir fonctionner." },
        { type: "h", text: "Exécuter les requêtes" },
        { type: "p", text: "DEF : Envoyer le fichier de migration vers la BDD." },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console doctrine:migrations:migrate

# Base tests
php bin/console doctrine:migrations:migrate --env=test` },
        { type: "note", variant: "warning", text: "Les changements sont appliqués que sur la base dev, pas sur la base de tests. Pour les appliquer sur la base de tests, procéder aux étapes nécessaires." },
        { type: "note", variant: "info", text: "Documentation : https://symfony.com/doc/current/doctrine.html" },
      ],
    },

    // ── UTILISER LES ENTITÉS ─────────────────────────────────────────────────
    {
      id: "utiliser-entites",
      title: "Utiliser les entités",
      blocks: [
        { type: "p", text: "Composée de 2 éléments importants : Les propriétés, qui sont en private pour limiter l'accès. Les méthodes, qui sont les getters et setters des propriétés." },
        { type: "h", text: "Sur mon contrôleur" },
        { type: "list", items: [
          "Instancier l'entité",
          "Utiliser les setters pour ajouter des informations et les getters pour les récupérer",
        ]},
        { type: "code", filename: "controller.php", language: "php", code: `#[Route("/", name:"home")]
public function home() :Response
{
    // On instancie l'entité Category
    $category = new Category();
    // On utilise les setters pour ajouter des données
    $category->setName("Développement");

    // On récupère la valeur de name grâce au getter
    dump($category->getName());
    return $this->render('home.html.twig');
}` },
      ],
    },

    // ── RÉCUPÉRER LES DONNÉES VIA L'ORM ─────────────────────────────────────
    {
      id: "recuperer-donnees-orm",
      title: "Récupérer les données via l'ORM",
      blocks: [
        { type: "p", text: "DEF : Permet de récupérer les données et les afficher mais aussi en enregistrer en base de données. L'ORM (Object-Relational Mapping) est un ensemble de classes permettant de manipuler les tables d'une base de données comme s'il s'agissait d'objets." },
        { type: "list", items: [
          "Utiliser le fichier Repository pour récupérer les informations présentes en BDD pour ma table",
          "Dans le contrôleur, injecter le repository pour récupérer toutes les catégories",
        ]},
        { type: "note", variant: "info", text: "Ce fichier contient des méthodes de récupération de données. 4 sont générées automatiquement et permettent de quasiment tout faire, mais vous pouvez également ajouter vos propres fonctions pour générer vos propres requêtes." },
        { type: "list", items: [
          "Pour utiliser le Repository il faut avoir recours au ManagerRegistry de Doctrine\\Persistance",
          "Employer ensuite la méthode getRepository() pour le récupérer",
          "Utiliser la méthode findAll() qui permet de récupérer tous les éléments",
        ]},
        { type: "note", variant: "info", text: "Pour récupérer un seul élément en fonction d'un id attribué en base de données, utiliser la méthode find(). Les méthodes findBy() et findOneBy() permettent de récupérer un tableau d'objets ou un objet en fonction d'un tableau de critères passés." },
        { type: "list", items: [
          "Dans le template, afficher le code (ici un tableau d'objets \"category\" que l'on va parcourir avec une boucle, on affiche ensuite chaque information pour générer un tableau de catégories)",
          "Pour vérifier que ça fonctionne, créer une nouvelle catégorie manuellement dans la BDD sur PHPMyAdmin puis recharger le code",
        ]},
      ],
    },

    // ── ENREGISTRER DES DONNÉES VIA L'ORM ───────────────────────────────────
    {
      id: "enregistrer-donnees-orm",
      title: "Enregistrer des données via l'ORM",
      blocks: [
        { type: "p", text: "On se sert de l'ObjectManager, celui-ci possède toutes les méthodes permettant de sauvegarder ou de supprimer un élément en base de données." },
        { type: "list", items: [
          "Obtenir ce manager soit en passant par le Repository qui possède la méthode save() ou par le ManagerRegistry",
          "Sur ce ManagerRegistry, charger la méthode getManager() qui permet de récupérer l'ObjectManager",
          "Utiliser la méthode persist() qui permet de mettre en file d'attente une requête préparée d'enregistrements en base de données",
        ]},
        { type: "note", variant: "info", text: "Symfony fonctionne avec une file d'attente autorisant ainsi de pouvoir préparer plusieurs requêtes avant de se connecter à la BDD et de tout exécuter. On gagne ainsi un sacré temps de chargement !" },
        { type: "list", items: [
          "Une fois tous les éléments prêts, utiliser la méthode flush() qui exécute toutes les requêtes",
          "Je peux employer une boucle pour créer plusieurs catégories en même temps",
          "Pour supprimer une catégorie, utiliser le même manager mais cette fois avec la méthode remove()",
        ]},
        { type: "code", filename: "controller.php", language: "php", code: `// Charge l'ObjectManager
$om = $manager->getManager();
// On lance une boucle pour créer 10 catégories
for ($i=1; $i < 11; $i++) {
    // On instancie l'entité Category pour générer nos catégories
    $category = new Category();
    // On donne un nom à la catégorie
    $category->setName("Catégorie n°$i");
    // On ajoute la catégorie en file d'attente pour être enregistrée en BDD
    $om->persist($category);
}
// On exécute toutes les requêtes en attente puis on vide la file
$om->flush();` },
      ],
    },

    // ── ORM — DOCTRINE ORM ───────────────────────────────────────────────────
    {
      id: "doctrine-orm-intro",
      title: "ORM — La doctrine ORM",
      blocks: [
        { type: "p", text: "DEF : C'est une couche applicative supérieure qui permet de communiquer entre le code et la BDD sans avoir à faire des requêtes SQL. Des méthodes déjà pré-écrites existent." },
        { type: "p", text: "Doctrine est l'intermédiaire entre les objets (entité) à manipuler et la BDD qui a donc la table." },
        {
          type: "diagram",
          content: `+------------------+             +-----------------+
| A Product Object |             | Table: product  |
| id: 12           |             |  id   | name     |
| name: Blue       | <─Doctrine─>|  12   | Blue     |
| price: $600.00   |             |  13   | Helmet   |
| description: ... |             |  14   | Jersey   |
+------------------+             +-----------------+`,
        },
        { type: "list", items: [
          "Symfony crée donc mes tables quand je crée mes entités ainsi que le code et Doctrine (ORM) gère toutes les méthodes (requêtes SQL)",
          "C'est le fichier situé dans /Repository qui lie Doctrine à la nouvelle entité créée (liaison entre l'entité et la manipulation côté BDD)",
        ]},
        { type: "h", text: "Récupérer des données avec Doctrine" },
        { type: "p", text: "Se fait en utilisant d'abord l'objet Repository puis la méthode getRepository()." },
        { type: "list", items: [
          "La méthode add sert à ajouter une catégorie en BDD",
          "La méthode remove sert à supprimer l'entité de la BDD",
          "La classe hérite également de toutes les méthodes de EntityRepository",
        ]},
      ],
    },

    // ── DOCTRINE ORM (existant enrichi) ──────────────────────────────────────
    {
      id: "doctrine",
      title: "Doctrine ORM — Entités",
      blocks: [
        { type: "code", filename: "src/Entity/Produit.php", language: "php", code: `<?php
namespace App\\Entity;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
class Produit
{
    #[ORM\\Id, ORM\\GeneratedValue, ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private string $nom;

    public function getNom(): string { return $this->nom; }
    public function setNom(string $nom): self { $this->nom = $nom; return $this; }
}` },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:entity                  # créer une entité
php bin/console make:migration               # générer le SQL
php bin/console doctrine:migrations:migrate  # appliquer` },
      ],
    },
    {
      id: "relations",
      title: "Relations Doctrine",
      blocks: [
        { type: "code", filename: "src/Entity/Commande.php", language: "php", code: `<?php
// Une commande appartient à un utilisateur (ManyToOne)
#[ORM\\ManyToOne(inversedBy: 'commandes')]
private ?User $user = null;
// Une commande a plusieurs lignes (OneToMany)
#[ORM\\OneToMany(mappedBy: 'commande', targetEntity: LigneCommande::class)]
private Collection $lignes;` },
      ],
    },

    // ── CRUD AVEC DOCTRINE ───────────────────────────────────────────────────
    {
      id: "crud-doctrine",
      title: "CRUD avec Doctrine",
      blocks: [
        { type: "h", text: "Opérations de base" },
        { type: "code", filename: "crud-base.php", language: "php", code: `//Create
$utilisateur = new Utilisateur();
$utilisateur->setNom('Kat');
$utilisateur->setEmail('kat@example.com');
$entityManager->persist($utilisateur);
$entityManager->flush();

//Read
$repository = $entityManager->getRepository(Utilisateur::class);
$utilisateur = $repository->find($id);
$utilisateurs = $repository->findAll();

//Update
$utilisateur = $repository->find($id);
$utilisateur->setNom('Kat Modifiée');
$entityManager->flush();

//Delete
$entityManager->remove($utilisateur);
$entityManager->flush();` },
        { type: "h", text: "1. Dans le contrôleur (exemple complet)" },
        { type: "code", filename: "src/Controller/UtilisateurController.php", language: "php", code: `// src/Controller/UtilisateurController.php
namespace App\\Controller;

use App\\Entity\\Utilisateur;
use App\\Repository\\UtilisateurRepository;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;

class UtilisateurController extends AbstractController
{
    // CREATE
    #[Route('/utilisateur/create', name: 'utilisateur_create')]
    public function create(EntityManagerInterface $entityManager): Response
    {
        $utilisateur = new Utilisateur();
        $utilisateur->setNom('Kat');
        $utilisateur->setEmail('kat@example.com');
        $entityManager->persist($utilisateur); // prépare l'objet
        $entityManager->flush(); // exécute INSERT
        return new Response('Utilisateur créé avec ID : '.$utilisateur->getId());
    }

    // READ - Liste
    #[Route('/utilisateur', name: 'utilisateur_liste')]
    public function liste(UtilisateurRepository $repository): Response
    {
        $utilisateurs = $repository->findAll(); // SELECT * FROM utilisateur
        return $this->render('utilisateur/liste.html.twig', [
            'utilisateurs' => $utilisateurs,
        ]);
    }

    // READ - Détail
    #[Route('/utilisateur/{id}', name: 'utilisateur_detail')]
    public function detail(UtilisateurRepository $repository, int $id): Response
    {
        $utilisateur = $repository->find($id); // SELECT WHERE id = ...
        if (!$utilisateur) {
            throw $this->createNotFoundException("Utilisateur$id introuvable");
        }
        return $this->render('utilisateur/detail.html.twig', [
            'utilisateur' => $utilisateur,
        ]);
    }

    // UPDATE
    #[Route('/utilisateur/update/{id}', name: 'utilisateur_update')]
    public function update(EntityManagerInterface $entityManager, UtilisateurRepository $repository, int $id): Response
    {
        $utilisateur = $repository->find($id);
        if (!$utilisateur) {
            throw $this->createNotFoundException("Utilisateur$id introuvable");
        }
        $utilisateur->setNom('Kat Modifiée'); // Modification d'un champ
        $entityManager->flush(); // Doctrine exécute UPDATE
        return new Response("Utilisateur$id mis à jour");
    }

    // DELETE
    #[Route('/utilisateur/delete/{id}', name: 'utilisateur_delete')]
    public function delete(EntityManagerInterface $entityManager, UtilisateurRepository $repository, int $id): Response
    {
        $utilisateur = $repository->find($id);
        if (!$utilisateur) {
            throw $this->createNotFoundException("Utilisateur$id introuvable");
        }
        $entityManager->remove($utilisateur); // Marque l'objet pour suppression
        $entityManager->flush(); // Doctrine exécute DELETE
        return new Response("Utilisateur$id supprimé");
    }
}` },
        { type: "h", text: "2. Dans la vue" },
        { type: "code", filename: "templates/utilisateur/liste.html.twig", language: "twig", code: `{# templates/utilisateur/liste.html.twig #}
<h1>Liste des utilisateurs</h1>
<ul>
    {% for u in utilisateurs %}
        <li>
            <a href="{{ path('utilisateur_detail', {id: u.id}) }}">
                {{ u.nom }} - {{ u.email }}
            </a>
        </li>
    {% else %}
        <li>Aucun utilisateur trouvé.</li>
    {% endfor %}
</ul>` },
        { type: "code", filename: "templates/utilisateur/detail.html.twig", language: "twig", code: `{# templates/utilisateur/detail.html.twig #}
<h1>Détail Utilisateur</h1>
<p><strong>ID :</strong> {{ utilisateur.id }}</p>
<p><strong>Nom :</strong> {{ utilisateur.nom }}</p>
<p><strong>Email :</strong> {{ utilisateur.email }}</p>` },
        { type: "note", variant: "info", text: "Routes résultantes : /utilisateur/create → crée un utilisateur en base. /utilisateur → liste tous les utilisateurs. /utilisateur/{id} → affiche le détail d'un utilisateur. /utilisateur/update/{id} → modifie un utilisateur. /utilisateur/delete/{id} → supprime un utilisateur." },
      ],
    },

    // ── PRENDRE EN MAIN UN ORM ───────────────────────────────────────────────
    {
      id: "prendre-en-main-orm",
      title: "Prendre en main un ORM",
      blocks: [
        { type: "p", text: "Symfony a créé un ORM appelé Doctrine ORM." },
        { type: "list", items: [
          "ORM : Object Relational Mapping — programme informatique permettant de manipuler des objets plutôt que des données relationnelles",
          "Il met à disposition des classes objet permettant de manipuler les bases de données relationnelles",
          "On manipule des objets et l'ORM transforme le tout en requêtes compréhensibles par la base de données",
          "Permet de générer une base de données en PHP à travers le framework Symfony simplement et surtout de manière programmatique",
          "Les tables SQL deviennent des classes en PHP, les champs deviennent des variables, et sont « décorées » pour définir leurs types",
        ]},
        { type: "h", text: "Comparaison SQL vs Symfony" },
        { type: "table", headers: ["SQL", "Symfony"], rows: [
          ["CREATE TABLE users(name VARCHAR(50), lastname VARCHAR(30), mail VARCHAR(60), password VARCHAR(60), PRIMARY KEY(mail));", "class Article avec propriétés annotées #[ORM\\Column(type=\"string\")] pour name, lastname, mail, password"],
        ]},
        { type: "note", variant: "info", text: "Documentation Doctrine ORM : https://symfony.com/doc/6.2/the-fast-track/fr/8-doctrine.html" },
      ],
    },

    // ── LE FORMULAIRE ────────────────────────────────────────────────────────
    {
      id: "le-formulaire",
      title: "Le formulaire",
      blocks: [
        { type: "h", text: "Créer un formulaire" },
        { type: "p", text: "DEF : Grâce au composant form intégré au framework en les sécurisant et permettant de récupérer les informations sécurisées." },
        { type: "h", text: "Check-list — quand l'utiliser" },
        { type: "list", items: [
          "Le formulaire est-il utilisé pour collecter ou modifier des données d'une entité ?",
          "Les contraintes de validation côté serveur sont-elles définies (constraints) ?",
          "La gestion de la soumission et des erreurs est-elle correctement implémentée (handleRequest(), isSubmitted(), isValid()) ?",
          "Le formulaire transmet-il les données nettoyées à un service ou entité pour traitement ?",
        ]},
        { type: "h", text: "Comment ?" },
        { type: "p", text: "Installer le composant si le projet n'est pas chargé avec -webapp :" },
        { type: "code", filename: "terminal", language: "bash", code: `composer require symfony/form` },
        { type: "h", text: "Dans le contrôleur" },
        { type: "p", text: "Utiliser la méthode de l'AbstractController createFormBuilder(). Cette méthode retourne une FormBuilderInterface sur laquelle vous allez appliquer la méthode add pour chaque champ à créer." },
        { type: "p", text: "La méthode add prend trois paramètres : Le nom de la propriété pour laquelle on va générer l'input, Le type d'input qui sera indiqué par une classe FormFieldType, Un tableau de paramètres permettant d'indiquer le label, les classes à ajouter à l'input, etc." },
        { type: "p", text: "Une fois les méthodes add ajoutées, utiliser la méthode getForm() pour générer le formulaire." },
        { type: "code", filename: "controller.php", language: "php", code: `// On crée un objet vide que l'on veut enregistrer
$category = new Category();
// On génère le formulaire auquel on rattache la catégorie
$form = $this->createFormBuilder($category)
    // On ajoute un input dédié au champ name
    ->add('name', TextType::class, [
        'label' => 'Nom de la catégorie',
        'attr' => [
            'class' => 'form-floating',
            'placeholder' => "Nom de la catégorie"
        ]
    ])
    // On ajoute le bouton de soumission
    ->add('submit', SubmitType::class, [
        'label' => 'Ajouter',
        'attr' => [
            'class' => "btn btn-primary"
        ]
    ])
    // On génère le formulaire une fois fini
    ->getForm();` },
        { type: "h", text: "Dans un fichier dédié" },
        { type: "p", text: "Utiliser la commande :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:form` },
        { type: "list", items: [
          "Ajouter le nom du formulaire qui se finit par Type",
          "Ajouter le nom de l'entité qui sera liée au formulaire",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:form NomType

# Nom de la classe
The name of the form class (e.g. ProductType):
ProduitType

Which class should this form be tied to?
App\\Entity\\Produit` },
        { type: "note", variant: "info", text: "La composition est la même que sur le contrôleur, une FormBuilderInterface sur laquelle on associe les méthodes add. La différence est qu'en utilisant cette méthode, nous pourrons réutiliser le formulaire pour d'autres parties de notre code." },
        { type: "code", filename: "src/Form/CategoryType.php", language: "php", code: `<?php

namespace App\\Form;

use App\\Entity\\Category;
use Symfony\\Component\\Form\\AbstractType;
use Symfony\\Component\\Form\\FormBuilderInterface;
use Symfony\\Component\\OptionsResolver\\OptionsResolver;

class CategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de la catégorie',
                'attr' => [
                    'class' => 'form-floating',
                    'placeholder' => "Nom de la catégorie"
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Ajouter',
                'attr' => [
                    'class' => "btn btn-primary"
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
}` },
        { type: "h", text: "Utiliser un formulaire externe dans un contrôleur" },
        { type: "list", items: [
          "Utiliser la commande : symfony console make:controller",
          "Choisir le nom qui se finit toujours par Controller (cela crée 2 fichiers)",
          "Appeler la méthode createForm() de l'AbstractController",
          "Appeler la méthode handleRequest du formulaire pour associer la classe Request du composant HttpFoundation",
          "Placer le use en haut du fichier PHP",
        ]},
        { type: "code", filename: "controller.php", language: "php", code: `use Symfony\\Component\\HttpFoundation\\Request;` },
        { type: "list", items: [
          "Utiliser 2 vérifications avec les méthodes isSubmitted() et isValid() qui permettent de s'assurer que le formulaire a bien été soumis et que les données reçues sont valides",
          "Enregistrer les données grâce à l'ObjectManager",
        ]},
        { type: "code", filename: "controller.php", language: "php", code: `#[Route("/category/save", name:"add_category", methods:["GET", "POST"])]
public function save(Request $request, ManagerRegistry $manager): Response
{
    // On crée un objet vide que l'on veut enregistrer
    $category = new Category();
    // On génère le formulaire auquel on rattache la catégorie
    $form = $this->createForm(CategoryType::class, $category);

    // On rattache le composant HttpFoundation\\Request au formulaire
    // une fois le formulaire soumis
    $form->handleRequest($request);
    // On vérifie que le formulaire a été soumis et que les données sont valides
    if ($form->isSubmitted() && $form->isValid()) {
        $om = $manager->getManager();
        $om->persist($category);
        $om->flush();

        return $this->redirectToRoute("home");
    }

    // Lorsqu'on passe un formulaire au template, on doit utiliser la méthode renderForm
    return $this->renderForm("category/save.html.twig", [
        'categoryForm' => $form
    ]);
}` },
      ],
    },

    // ── AFFICHER UN FORMULAIRE ───────────────────────────────────────────────
    {
      id: "afficher-formulaire",
      title: "Afficher un formulaire",
      blocks: [
        { type: "p", text: "Utiliser la fonction form de Twig (la plus simple à utiliser)" },
        { type: "code", filename: "templates/category/save.html.twig", language: "twig", code: `{% extends 'base.html.twig' %}

{% block body %}
    {{ form(categoryForm) }}
{% endblock %}` },
        { type: "p", text: "Pour aller plus loin dans le placement et le style de vos éléments, utiliser une autre façon d'affichage :" },
        { type: "code", filename: "form-custom.html.twig", language: "twig", code: `{# On affiche un formulaire avec un nom générique #}
{{ form_start(form) }}

<div class="d-flex justify-content-evenly col-6">
    {# form_row permet de placer la div contenant l'input, le label et autres informations d'un champ #}
    {{ form_row(form.name, {
        'row_attr': {'class': 'col-7 form-floating mb-3'},
        'attr': {'placeholder': "Nom de la catégorie"}
    }) }}
    {{ form_row(form.submit, {
        'row_attr': {'class': 'col-3 mb-3'},
        'label': submitLabel|default('Ajouter')
    }) }}
</div>

<div class="text-danger">
    {# Gère l'affichage des erreurs #}
    {{ form_errors(form.name) }}
</div>

<small>{{ form_help(form.name, {'help_attr': {'class':'text-info'}}) }}</small>
{{ form_end(form) }}` },
        { type: "note", variant: "info", text: "Dans config/packages/twig.yaml ⇒ customisation avec un thème. _end(monForm, {'render_rest': false}) ⇒ n'affiche pas les champs omis." },
        { type: "h", text: "Documentation formulaires" },
        { type: "table", headers: ["Lien", "Description"], rows: [
          ["https://symfony.com/doc/current/forms.html", "Aller plus loin dans la réalisation d'un formulaire"],
          ["https://symfony.com/doc/current/form/form_customization.html", "Améliorer l'affichage d'un formulaire"],
          ["https://symfony.com/doc/current/reference/constraints.html", "Ajouter des contraintes pour perfectionner le formulaire"],
        ]},
        { type: "h", text: "Affichage sur-mesure complet" },
        { type: "code", filename: "form-sur-mesure.html.twig", language: "twig", code: `{# Affichage brut #}
form(monForm)

{# Affichage sur-mesure (contrôle sur le balisage) #}
{{ form_start(monForm) }}

{# Champ personnalisé #}
<div class="form-item">
    {{ form_label(monForm.field1) }}
    {{ form_widget(monForm.field1) }}
    <span class="form-help">
        {{ form_help(monForm.field1) }}
    </span>
    <div class="form-error">
        {{ form_errors(monForm.field1) }}
    </div>
</div>

{# Champ non personnalisé #}
{{ form_row(monForm.field2) }}

{{ form_end(monForm) }}` },
      ],
    },

    // ── GÉRER LES UTILISATEURS ───────────────────────────────────────────────
    {
      id: "gerer-utilisateurs",
      title: "Gérer mes utilisateurs",
      blocks: [
        { type: "h", text: "Les utilisateurs — par PHP" },
        { type: "list", items: [
          "Lors de l'inscription, par le chiffrement du mot de passe",
          "Lors du login, par la vérification de ce mot de passe puis l'utilisateur est stocké en session pour pouvoir accéder aux pages nécessitant cette connexion",
        ]},
        { type: "h", text: "Les utilisateurs — par Symfony" },
        { type: "p", text: "DEF : Le framework construit et gère ça pour moi." },
        { type: "p", text: "L'inscription, connexion et déconnexion passent par 3 lignes de commandes. Et la configuration de ces systèmes sera gérée dans le fichier config/packages/security.yaml." },
        { type: "h", text: "Créer l'entité User" },
        { type: "p", text: "Utiliser la commande sans appeler le MakerBundle pour créer l'entité User :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:user` },
        { type: "list", items: [
          "Indiquer le nom de l'entité choisi (généralement User)",
          "Le souhait d'enregistrer les utilisateurs en BDD",
          "Que chaque utilisateur a un email unique",
          "Et qu'il faut hacher le mot de passe",
        ]},
        { type: "p", text: "Ainsi l'entité et son Repository sont créés." },
        { type: "list", items: ["Faire une migration :"] },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:migration` },
        { type: "list", items: ["Exécuter la migration :"] },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console doctrine:migrations:migrate` },
        { type: "list", items: ["Confirmer le souhait de faire les changements sur la BDD"] },
        { type: "p", text: "L'entité User générée implémente deux interfaces obligatoires : UserInterface — qui va forcer l'entité à avoir les méthodes getRoles() pour gérer les rôles de l'utilisateur, eraseCredentials(), getUserIdentifier(). PasswordAuthenticatedUserInterface — qui va forcer l'entité à avoir la méthode getPassword()." },
        { type: "code", filename: "src/Entity/User.php", language: "php", code: `<?php

namespace App\\Entity;

use App\\Repository\\UserRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Security\\Core\\User\\PasswordAuthenticatedUserInterface;
use Symfony\\Component\\Security\\Core\\User\\UserInterface;

#[ORM\\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\\Column]
    private array $roles = [];

    #[ORM\\Column]
    private ?string $password = null;
}` },
      ],
    },

    // ── L'INSCRIPTION ────────────────────────────────────────────────────────
    {
      id: "inscription",
      title: "L'inscription",
      blocks: [
        { type: "p", text: "Utiliser la commande :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:registration` },
        { type: "list", items: [
          "Indiquer qu'un utilisateur est unique",
          "Ajouter un système de confirmation de compte par email (yes/no) [no]",
          "Gérer la redirection de l'utilisateur après son inscription",
          "Se diriger sur la page /register pour voir si l'inscription fonctionne",
        ]},
        { type: "p", text: "L'inscription étant faite, passer à la connexion." },
        { type: "list", items: [
          "(Exécuter la migration)",
          "Installer le verify-email-bundle (si je choisis la confirmation par e-mail) :",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `composer require symfonycasts/verify-email-bundle` },
      ],
    },

    // ── LA CONNEXION ─────────────────────────────────────────────────────────
    {
      id: "connexion",
      title: "La connexion",
      blocks: [
        { type: "p", text: "Utiliser la commande pour générer toute l'authentification :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:auth` },
        { type: "list", items: [
          "Intégrer un formulaire de login → choisir [1] (Login form authenticator)",
          "Générer un Authenticator",
          "Générer un Controller",
          "Générer une route logout",
          "Aller dans l'Authenticator pour indiquer la redirection après la connexion. Vérifier tous ces fichiers.",
          "Le SecurityController contient la méthode login qui charge un AuthenticationUtils pour gérer les erreurs et s'assurer qu'un utilisateur connecté n'essaie pas de se reconnecter.",
        ]},
        { type: "p", text: "En fond, le login va également charger le UserAuthenticator." },
        { type: "note", variant: "info", text: "Pour le voir, regarder le fichier config/packages/security.yaml. Il contient les informations concernant le hachage du password, le firewall utilisé et le path de logout." },
      ],
    },

    // ── LES RÔLES ─────────────────────────────────────────────────────────────
    {
      id: "les-roles",
      title: "Les rôles",
      blocks: [
        { type: "p", text: "Créez un compte et connectez-le. Par défaut, cet utilisateur aura le rôle ROLE_USER. Vous pouvez lui attribuer d'autres rôles qui seront enregistrés en BDD. Vous pourrez ensuite vous servir de ces rôles pour limiter les accès aux pages." },
        { type: "h", text: "Limiter l'accès sur le fichier de config" },
        { type: "p", text: "Sur le fichier config/security.yaml, aller sur la ligne access_control et ajouter ROLE_ADMIN (ça limite l'accès de toutes les pages admin aux utilisateurs ayant ce rôle) :" },
        { type: "code", filename: "config/security.yaml", language: "yaml", code: `access_control:
  - { path: ^/admin, roles: ROLE_ADMIN }
    # - { path: ^/profile, roles: ROLE_USER }` },
        { type: "h", text: "Limiter l'affichage sur les templates" },
        { type: "p", text: "Sur un fichier de template, vous pouvez décider d'afficher certaines parties en fonction de l'identité de l'utilisateur connecté et de son rôle." },
        { type: "code", filename: "nav.html.twig", language: "twig", code: `<nav>
    <ul>
        {% if app.user %}
            <li>
                <a href="{{ path('app_logout') }}">Déconnexion</a>
            </li>
            {% if is_granted('ROLE_ADMIN') %}
                <li><a href="{{ path('app_admin') }}">Tableau de bord</a></li>
            {% endif %}
        {% else %}
            <li>
                <a href="{{ path('app_register') }}">Inscription</a>
            </li>
            <li>
                <a href="{{ path('app_login') }}">Connexion</a>
            </li>
        {% endif %}
    </ul>
</nav>` },
        { type: "list", items: [
          "app.user vérifie si y'a un user dans la session. Si tel est le cas, j'affiche le lien de déconnexion.",
          "is_granted pour vérifier que l'utilisateur connecté a le rôle entre parenthèses. Si tel est le cas, le lien Tableau de bord s'affichera.",
        ]},
        { type: "h", text: "Limiter l'accès sur les contrôleurs" },
        { type: "p", text: "La méthode is_granted vous permettant de limiter l'accès à toutes les méthodes du contrôleur ou à une méthode en particulier." },
        { type: "code", filename: "src/Controller/PostController.php", language: "php", code: `// Empêche l'accès aux routes de ce controller si l'utilisateur n'est pas connecté
#[IsGranted('ROLE_USER')]
class PostController extends AbstractController {

    #[Route(path: "/", name: "home")]
    // Empêche l'accès à cette route si l'utilisateur n'est pas un admin
    #[IsGranted('ROLE_ADMIN')]
    public function home(ManagerRegistry $manager) :Response
    {
        // Permet de rediriger l'utilisateur s'il n'est pas admin
        if(!$this->isGranted('ROLE_ADMIN')){
            return $this->redirectToRoute('app_login');
        }

        // Renvoie une erreur si l'utilisateur essaie d'accéder à la page sans être admin
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        $categories = $manager->getRepository(Category::class)->findAll();

        return $this->render('home.html.twig', [
            'categories' => $categories
        ]);
    }
}` },
        { type: "note", variant: "info", text: "La méthode denyAccessUnlessGranted() permet de retourner une erreur si l'utilisateur n'a pas le rôle adapté." },
      ],
    },

    // ── DÉBOGUER ──────────────────────────────────────────────────────────────
    {
      id: "deboguer",
      title: "Déboguer l'application",
      blocks: [
        { type: "h", text: "En PHP" },
        { type: "p", text: "Utiliser la fonction var_dump() qui permet d'afficher sur la page les informations d'un tableau, d'un objet, d'une variable…" },
        { type: "h", text: "En Symfony" },
        { type: "p", text: "Utiliser la fonction dump() ou dd() pour dump() && die(), mais aucune information ne s'affiche sur la page." },
        { type: "h", text: "Avec Profiler" },
        { type: "p", text: "DEF : Aide lors du développement à consulter différentes parties et voir la performance de l'application pour l'améliorer, voir les templates qui sont chargés, les e-mails envoyés, les requêtes SQL exécutées, etc." },
        { type: "p", text: "Barre sitée en bas de la page indiquant les diverses informations du dump() (concernant la page)." },
        { type: "h", text: "Identifier mes erreurs" },
        { type: "list", items: ["Cliquer sur les parties rouges du Profiler pour détecter les erreurs contenant de nombreuses informations"] },
        { type: "note", variant: "warning", text: "Le Profiler ne doit pas être installé en production ! Pour l'installer, bien ajouter --dev à la commande !" },
      ],
    },

    // ── API PLATFORM ──────────────────────────────────────────────────────────
    {
      id: "api-platform",
      title: "Utiliser l'API Platform",
      blocks: [
        { type: "p", text: "DEF : Permet de séparer le front et le back de l'application et de consommer une API." },
        { type: "p", text: "Il faut créer un autre projet Symfony où l'on utilise API Platform pour ne pas la créer entièrement." },
        { type: "code", filename: "terminal", language: "bash", code: `symfony new api-decouverte       # Crée un nouveau projet sans les composants webapp
composer require api             # Installe Api Platform
composer require symfony/maker-bundle --dev  # Installe Maker
composer require doctrine/orm    # Installe l'Orm Doctrine
composer require migrations      # Installe les migrations` },
        { type: "list", items: [
          "Créer un nouveau projet de micro-service",
          "Installer API Platform",
          "Installer deux-trois dépendances dont vous aurez besoin",
          "Ajouter quelques entités (ex. Catégorie et Post)",
          "Migrer le tout vers la BDD",
          "Lancer le serveur : http://127.0.0.1:8000/api",
        ]},
        { type: "note", variant: "info", text: "La dépendance va s'occuper de générer la documentation pour nous en utilisant Swagger." },
      ],
    },

    // ── AJOUTER DES POINTS D'ENTRÉE ──────────────────────────────────────────
    {
      id: "points-entree-api",
      title: "Ajouter des points d'entrée",
      blocks: [
        { type: "p", text: "DEF : Permettra de faire mes appels API et récupérer les informations." },
        { type: "list", items: [
          "Aller sur l'entité Category pour l'activer",
          "Ajouter l'attribut ApiResource et importer la classe (use)",
        ]},
        { type: "code", filename: "src/Entity/Category.php", language: "php", code: `<?php

namespace App\\Entity;

use ApiPlatform\\Metadata\\Get;
use Doctrine\\ORM\\Mapping as ORM;
use ApiPlatform\\Metadata\\ApiResource;
use App\\Repository\\CategoryRepository;
use ApiPlatform\\Metadata\\GetCollection;
use Doctrine\\Common\\Collections\\Collection;
use Doctrine\\Common\\Collections\\ArrayCollection;

#[ORM\\Entity(repositoryClass: CategoryRepository::class)]
#[ApiResource()]
class Category
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 65)]
    private ?string $name = null;

    #[ORM\\OneToMany(mappedBy: 'category', targetEntity: Post::class)]
    private Collection $posts;
}` },
        { type: "p", text: "Actualiser le navigateur et vous verrez sur la documentation un onglet Category contenant 6 routes :" },
        { type: "table", headers: ["Méthode", "Route", "Description"], rows: [
          ["GET", "/api/categories", "Récupérer toutes les catégories"],
          ["POST", "/api/categories", "Enregistrer plusieurs catégories en BDD"],
          ["GET", "/api/categories/{id}", "Récupérer une catégorie en fonction de son id"],
          ["PUT", "/api/categories/{id}", "Remplacer une catégorie entièrement"],
          ["DELETE", "/api/categories/{id}", "Supprimer une catégorie"],
          ["PATCH", "/api/categories/{id}", "Modifier des informations d'une catégorie"],
        ]},
        { type: "note", variant: "info", text: "Chacune de ces routes est testable sur la page ou avec l'application Postman. Je peux créer certains fichiers, comme des Serializer, mais il faudra les appeler dans mes attributs." },
      ],
    },

    // ── CONFIGURER L'API PLATFORM ────────────────────────────────────────────
    {
      id: "configurer-api-platform",
      title: "Configurer l'API Platform",
      blocks: [
        { type: "h", text: "Utiliser les paramètres par défaut" },
        { type: "list", items: [
          "Ajouter un fichier api_platform.yaml dans le dossier config/packages",
          "Paramètres par défaut :",
        ]},
        { type: "code", filename: "config/packages/api_platform.yaml", language: "yaml", code: `api_platform:
  title: 'SuperBlog'                  # Nom de l'api
  description: 'Une api pour toutes les personnes souhaitant intégrer un blog dédié au développement web'
  version: '0.0.1'
  collection:
    order: 'ASC'                    # Ordre d'affichage par défaut des éléments d'un tableau
    pagination:
      page_parameter_name: 'page' # Nom du paramètre de pagination
  defaults:
    pagination_items_per_page: 10   # Nombre d'items par page pour la pagination` },
        { type: "note", variant: "info", text: "Configuration générale : https://api-platform.com/docs/core/configuration/" },
        { type: "h", text: "Configurer des routes" },
        { type: "list", items: [
          "Aller sur l'entité Category",
          "Limiter les routes aux méthodes GET en paramétrant les opérations :",
        ]},
        { type: "code", filename: "src/Entity/Category.php", language: "php", code: `#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: "/categories/all", description:"Retourne toutes les catégories", name:"catégories"),
        new Get(uriTemplate:"/category/{id}")
    ]
)]
class Category` },
        { type: "h", text: "2 types d'opérations" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Opérations de collection", "Gèrent des tableaux de données à récupérer ou sauvegarder"],
          ["Opérations d'item", "Réalisables sur un seul élément"],
        ]},
        { type: "h", text: "Collection operations" },
        { type: "table", headers: ["Method", "Mandatory", "Description"], rows: [
          ["GET", "yes", "Retrieve the (paginated) list of elements"],
          ["POST", "no", "Create a new element"],
        ]},
        { type: "h", text: "Item operations" },
        { type: "table", headers: ["Method", "Mandatory", "Description"], rows: [
          ["GET", "yes", "Retrieve an element"],
          ["PUT", "no", "Replace an element"],
          ["PATCH", "no", "Apply a partial modification to an element"],
          ["DELETE", "no", "Delete an element"],
        ]},
        { type: "note", variant: "info", text: "Je peux aller plus loin dans la configuration de chacune en définissant un nouveau path par exemple. Ensuite pour aller plus loin encore, regarder les contextes de normalisation et de dénormalisation, la sécurité, les serializer et deserializer et d'autres points tout aussi importants." },
      ],
    },

    // ── COMMANDES SYMFONY ─────────────────────────────────────────────────────
    {
      id: "commandes-symfony",
      title: "Commandes Symfony",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `# 1. Créer/modifier l'entité Doctrine
php bin/console make:entity NomEntité

# 2. Générer SQL à appliquer (migration + appliquer en BDD)
php bin/console make:migration
php bin/console doctrine:migrations:migrate

# 3. Créer le contrôleur
php bin/console make:controller NomController

# 4. Créer le formulaire
php bin/console make:form NomFormulaire

# 5. Créer un service métier
php bin/console make:service ServService

# 6. Configurer sécurité
php bin/console make:user
php bin/console make:auth

# 7. Lancer l'app
symfony server:start

# Affiche les routes
php bin/console debug:router

# Vide le cache
php bin/console cache:clear

# Génère un CRUD complet
php bin/console make:crud

# Installer une librairie
composer require nom_du_package

# Arrêter le serveur
symfony server:stop

# Projet avec structure de base (API, Console, Services...)
symfony new nom_projet

# Projet avec paquets élémentaires pour une app/site web
symfony new nom_projet --webapp

# Projet CRUD de démo pour prise en main du framework
symfony new nom_projet --demo

# Créer la BDD (ou symfony console d:d:c)
symfony console doctrine:database:create

# Supprimer la BDD (ou symfony console d:d:d)
symfony console doctrine:database:drop

# Créer une migration
symfony console make:migration

# Exécuter les migrations non exécutées
symfony console doctrine:migrations:migrate

# Afficher l'état des migrations
symfony console doctrine:migrations:status

# Exécuter une migration spécifique
symfony console doctrine:migrations:execute --up <version_migration>

# Annuler une migration spécifique
symfony console doctrine:migrations:execute --down <version_migration>` },
      ],
    },

    // ── ROUTAGE ───────────────────────────────────────────────────────────────
    {
      id: "routage",
      title: "Routage",
      blocks: [
        { type: "p", text: "DEF : Permet d'associer une URL à une action de contrôleur." },
        { type: "h", text: "Check-list — quand l'utiliser" },
        { type: "list", items: [
          "Chaque URL doit-elle être unique et déclarée pour être accessible par un contrôleur ?",
          "Les routes acceptent-elles des paramètres dynamiques (id, filter) et sont-elles typées correctement ?",
          "Les routes sont-elles sécurisées via contrôle des rôles si nécessaire ?",
        ]},
        { type: "h", text: "Déclarer une route avec un contrôleur" },
        { type: "code", filename: "controller.php", language: "php", code: `use Symfony\\Component\\Routing\\Annotation\\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index() {...}
}

// Route statique
#[Route('/blog', name: 'app_blog_index')]
public function index() { ... }

// Route dynamique
#[Route('/blog/{slug}', name: 'app_blog_show')]
public function show(string $slug) {
    // $slug => valeur du paramètre de route
}` },
        { type: "h", text: "Déclarer une route avec yaml" },
        { type: "code", filename: "config/routes.yaml", language: "yaml", code: `# config/routes.yaml
home:
  path: /
  controller: App\\Controller\\DefaultController::index` },
        { type: "h", text: "Préfixe de route" },
        { type: "code", filename: "controller.php", language: "php", code: `#[Route('/admin')]
class AdminController {
    // path => /admin/user
    #[Route('/user', name: '...')]
}` },
        { type: "h", text: "Options de routes" },
        { type: "code", filename: "options-routes.php", language: "php", code: `// Check validité d'un paramètre de route (via regex)
#[Route(... requirements: ['nom_param' => '[a-z0-9-]+'])]

// Valeur par défaut pour un paramètre de route
#[Route(... defaults: ['nom_param' => 'valeur'])]

// Route restreinte à certaines méthodes HTTP
#[Route(... methods: ['GET', 'POST'])]` },
        { type: "h", text: "Afficher les routes" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console debug:router

# Exemple de résultat :
# Name              Method    Path          Controller
# produits_index    GET       /produits     App\\Controller\\ProduitController::index
# produits_ajouter  GET       /ajouter      App\\Controller\\ProduitController::ajouter` },
      ],
    },

    // ── CRUD OPÉRATIONS COMPLÈTES ─────────────────────────────────────────────
    {
      id: "crud-operations-completes",
      title: "CRUD — Opérations complètes",
      blocks: [
        { type: "h", text: "Récupération (READ)" },
        { type: "code", filename: "controller.php", language: "php", code: `#[Route('/entite', name: 'app_entite_list', methods: ['GET'])]
public function list(Request $request, EntityManagerInterface $em): Response {
    $repository = $em->getRepository(Entite::class);
    $objets = $repository->findAll();
    return $this->render('...', [
        'objets' => $objets
    ]);
}

#[Route('/entite/{id}', name: 'app_entite_show', methods: ['GET'])]
public function show(Request $request, EntityManagerInterface $em, int $id): Response {
    $repository = $em->getRepository(Entite::class);
    $objet = $repository->find($id);
    return $this->render('...', [
        'objet' => $objet
    ]);
}` },
        { type: "note", variant: "info", text: "Pas oublier de use les classes" },
        { type: "h", text: "Enregistrement (CREATE)" },
        { type: "code", filename: "controller.php", language: "php", code: `#[Route('/entite/ajouter', name: 'app_entite_add', methods: ['GET', 'POST'])]
public function create(Request $request, EntityManagerInterface $em): Response {
    $objet = new Entite();
    $form = $this->createForm(Entite::class, $objet);
    $form->handleRequest($request);
    if ($form->isSubmitted() && $form->isValid()) {
        $em->persist($objet);
        $em->flush();
        return $this->redirectToRoute('...');
    }
    return $this->render('...', [
        'form' => $form
    ]);
}` },
        { type: "h", text: "Modification (UPDATE)" },
        { type: "code", filename: "controller.php", language: "php", code: `#[Route('/entite/{id}/modifier', name: 'app_entite_edit', methods: ['GET', 'POST'])]
public function update(Request $request, EntityManagerInterface $em, int $id): Response {
    $repository = $em->getRepository(Entite::class);
    $objet = $repository->find($id);
    $form = $this->createForm(Entite::class, $objet);
    $form->handleRequest($request);
    if ($form->isSubmitted() && $form->isValid()) {
        $em->flush();
        return $this->redirectToRoute('...');
    }
    return $this->render('...', [
        'form' => $form
    ]);
}` },
        { type: "note", variant: "info", text: "Pas oublier de use les classes" },
        { type: "h", text: "Suppression (DELETE)" },
        { type: "code", filename: "controller.php", language: "php", code: `#[Route('/entite/{id}/supprimer', name: 'app_entite_delete', methods: ['POST'])]
public function delete(Request $request, EntityManagerInterface $em, int $id): Response {
    $repository = $em->getRepository(Entite::class);
    $objet = $repository->find($id);
    $em->remove($objet);
    $em->flush();
    return $this->redirectToRoute('...');
}` },
      ],
    },

    // ── SERVICES ─────────────────────────────────────────────────────────────
    {
      id: "services-symfony",
      title: "Services",
      blocks: [
        { type: "p", text: "DEF : Classe PHP autonome contenant de la logique métier réutilisable, injectée automatiquement via le conteneur de services Symfony (Dependency Injection)." },
        { type: "h", text: "Check-list — quand créer un service" },
        { type: "list", items: [
          "La logique est-elle réutilisable dans plusieurs contrôleurs ou commandes ?",
          "S'agit-il de logique métier complexe qui n'a pas sa place dans un contrôleur ?",
          "Le service dépend-il d'autres services injectés via le constructeur (repository, mailer, logger…) ?",
        ]},
        { type: "h", text: "Créer un service" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:service NomDuService` },
        { type: "code", filename: "src/Service/MonService.php", language: "php", code: `<?php

namespace App\\Service;

class MonService
{
    public function faireQuelqueChose(): string
    {
        return "Résultat du service";
    }
}` },
        { type: "h", text: "Injecter un service dans un contrôleur" },
        { type: "code", filename: "controller.php", language: "php", code: `<?php

namespace App\\Controller;

use App\\Service\\MonService;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;

class MonController extends AbstractController
{
    public function __construct(private MonService $monService) {}

    public function index()
    {
        $resultat = $this->monService->faireQuelqueChose();
        return new Response($resultat);
    }
}` },
        { type: "note", variant: "info", text: "Symfony injecte automatiquement le service via l'autowiring (injection de dépendances). Aucune configuration manuelle n'est nécessaire dans services.yaml pour les cas simples." },
      ],
    },

    // ── VALIDATION DES DONNÉES ────────────────────────────────────────────────
    {
      id: "validation-donnees",
      title: "Validation des données (Assert)",
      blocks: [
        { type: "p", text: "DEF : Contraintes ajoutées directement sur les propriétés d'une entité pour garantir l'intégrité des données saisies." },
        { type: "code", filename: "src/Entity/Utilisateur.php", language: "php", code: `<?php

namespace App\\Entity;

use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Entity]
class Utilisateur
{
    #[ORM\\Column(length: 255)]
    #[Assert\\NotBlank(message: "Le nom est obligatoire")]
    #[Assert\\Length(min: 2, max: 255)]
    private string $nom;

    #[ORM\\Column(length: 255, unique: true)]
    #[Assert\\NotBlank]
    #[Assert\\Email(message: "L'email {{ value }} n'est pas valide")]
    private string $email;

    #[ORM\\Column]
    #[Assert\\Length(min: 8, minMessage: "Le mot de passe doit contenir au moins {{ limit }} caractères")]
    private string $password;
}` },
        { type: "table", headers: ["Contrainte", "Usage"], rows: [
          ["#[Assert\\NotBlank]", "Champ obligatoire"],
          ["#[Assert\\Email]", "Format email valide"],
          ["#[Assert\\Length(min, max)]", "Longueur de chaîne"],
          ["#[Assert\\Range(min, max)]", "Plage numérique"],
          ["#[Assert\\Choice(choices: [...])]", "Valeur dans une liste"],
          ["#[Assert\\Positive]", "Nombre positif"],
          ["#[Assert\\Regex(pattern: '/.../')]", "Format personnalisé"],
        ]},
        { type: "h", text: "Vérifier la validité dans le contrôleur" },
        { type: "code", filename: "controller.php", language: "php", code: `use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;

public function create(ValidatorInterface $validator): Response
{
    $utilisateur = new Utilisateur();
    $utilisateur->setEmail('email-invalide');

    $erreurs = $validator->validate($utilisateur);

    if (count($erreurs) > 0) {
        return new Response((string) $erreurs, 400);
    }
    // Traitement si valide...
}` },
      ],
    },

    // ── REPOSITORY PERSONNALISÉ ───────────────────────────────────────────────
    {
      id: "repository-personnalise",
      title: "Repository personnalisé",
      blocks: [
        { type: "p", text: "DEF : Classe permettant d'écrire des requêtes personnalisées en plus des méthodes fournies par défaut (find, findAll, findBy, findOneBy)." },
        { type: "code", filename: "src/Repository/ProduitRepository.php", language: "php", code: `<?php

namespace App\\Repository;

use App\\Entity\\Produit;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

class ProduitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Produit::class);
    }

    // Requête personnalisée avec QueryBuilder
    public function findProduitsChers(float $prixMin): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.prix >= :prixMin')
            ->setParameter('prixMin', $prixMin)
            ->orderBy('p.prix', 'DESC')
            ->getQuery()
            ->getResult();
    }

    // Requête avec DQL
    public function findParCategorie(string $categorie): array
    {
        return $this->createQueryBuilder('p')
            ->join('p.categorie', 'c')
            ->andWhere('c.nom = :categorie')
            ->setParameter('categorie', $categorie)
            ->getQuery()
            ->getResult();
    }
}` },
        { type: "h", text: "Utilisation dans un contrôleur" },
        { type: "code", filename: "controller.php", language: "php", code: `#[Route('/produits/chers', name: 'produits_chers')]
public function produitsChers(ProduitRepository $repository): Response
{
    $produits = $repository->findProduitsChers(100.0);
    return $this->render('produit/liste.html.twig', [
        'produits' => $produits
    ]);
}` },
      ],
    },

    // ── GESTION DES ERREURS ──────────────────────────────────────────────────
    {
      id: "gestion-erreurs-symfony",
      title: "Gestion des erreurs",
      blocks: [
        { type: "h", text: "Page 404 personnalisée" },
        { type: "code", filename: "controller.php", language: "php", code: `public function show(ProduitRepository $repository, int $id): Response
{
    $produit = $repository->find($id);

    if (!$produit) {
        throw $this->createNotFoundException('Produit non trouvé');
    }

    return $this->render('produit/show.html.twig', [
        'produit' => $produit
    ]);
}` },
        { type: "h", text: "Templates d'erreur personnalisés" },
        { type: "p", text: "Symfony recherche automatiquement les templates dans templates/bundles/TwigBundle/Exception/." },
        {
          type: "diagram",
          content: `templates/
└── bundles/
    └── TwigBundle/
        └── Exception/
            ├── error404.html.twig
            ├── error403.html.twig
            └── error500.html.twig`,
        },
        { type: "code", filename: "templates/bundles/TwigBundle/Exception/error404.html.twig", language: "twig", code: `{% extends 'base.html.twig' %}

{% block body %}
    <h1>Page introuvable</h1>
    <p>Désolé, cette page n'existe pas.</p>
    <a href="{{ path('home') }}">Retour à l'accueil</a>
{% endblock %}` },
        { type: "h", text: "Gestion des exceptions custom" },
        { type: "code", filename: "controller.php", language: "php", code: `use Symfony\\Component\\HttpKernel\\Exception\\AccessDeniedHttpException;

public function admin(): Response
{
    if (!$this->isGranted('ROLE_ADMIN')) {
        throw new AccessDeniedHttpException('Accès réservé aux administrateurs');
    }
    // ...
}` },
      ],
    },

    // ── FORM SÉCURITÉ (existant enrichi) ──────────────────────────────────────
    {
      id: "form-securite",
      title: "Formulaires & sécurité — récapitulatif",
      blocks: [
        { type: "code", filename: "src/Form/UtilisateurType.php", language: "php", code: `class UtilisateurType extends AbstractType {
  public function buildForm(FormBuilderInterface $b, array $o): void {
    $b->add('nom')->add('email');
  }
}` },
        { type: "code", filename: "controller.php", language: "php", code: `#[IsGranted('ROLE_USER')]
public function profil(): Response { ... }` },
        { type: "note", variant: "info", text: "Contraintes sur les entités (#[Assert\\NotBlank], #[Assert\\Email]) et IS_GRANTED pour les autorisations." },
      ],
    },

    // ── MAKE:CRUD ─────────────────────────────────────────────────────────────
    {
      id: "make-crud",
      title: "Générer un CRUD complet (make:crud)",
      blocks: [
        { type: "p", text: "DEF : Commande qui génère automatiquement un contrôleur, des templates et un formulaire complets pour gérer les opérations CRUD d'une entité." },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:crud` },
        { type: "p", text: "Elle demande le nom de l'entité concernée, puis génère :" },
        { type: "code", filename: "src/Controller/EntityNameController.php", language: "php", code: `namespace App\\Controller;

use App\\Entity\\EntityName;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route` },
        { type: "code", filename: "templates/entity_name/index.html.twig", language: "twig", code: `{# index.html.twig (liste avec liens vers actions CRUD) #}
<h1>Liste des entités</h1>
<a href="{{ path('entityname_new') }}">Créer une entité</a>

<ul>
    {% for entity in entities %}
        <li>
            {{ entity.field1 }} - {{ entity.field2 }}
            <a href="{{ path('entityname_show', {id: entity.id}) }}">Voir</a>
        </li>
    {% endfor %}
</ul>` },
        { type: "code", filename: "templates/entity_name/new.html.twig", language: "twig", code: `{# new.html.twig et edit.html.twig (formulaires HTML) #}
<h1>{{ entity.id ? 'Modifier' : 'Créer' }} une entité</h1>

<form method="post" action="">
    <label for="field1">Field1</label>
    <input type="text" id="field1" name="field1" value="{{ entity.field1 ?? '' }}" required>

    <label for="field2">Field2</label>
    <input type="text" id="field2" name="field2" value="{{ entity.field2 ?? '' }}">

    <button type="submit">Enregistrer</button>
</form>` },
        { type: "code", filename: "templates/entity_name/show.html.twig", language: "twig", code: `{# show.html.twig (détails) #}
<h1>Détail de l'entité</h1>
<p>Field1 : {{ entity.field1 }}</p>
<p>Field2 : {{ entity.field2 }}</p>
<a href="{{ path('entityname_index') }}">Retour</a>
<a href="{{ path('entityname_edit', {id: entity.id}) }}">Modifier</a>` },
        { type: "h", text: "Version avec formulaire Symfony (FormType)" },
        { type: "code", filename: "src/Form/EntityNameType.php", language: "php", code: `namespace App\\Form;

use App\\Entity\\EntityName;
use Symfony\\Component\\Form\\AbstractType;
use Symfony\\Component\\Form\\FormBuilderInterface;
use Symfony\\Component\\OptionsResolver\\OptionsResolver;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\TextType;

class EntityNameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('field1', TextType::class)
            ->add('field2', TextType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => EntityName::class]);
    }
}` },
        { type: "code", filename: "src/Controller/EntityNameController.php", language: "php", code: `namespace App\\Controller;

use App\\Entity\\EntityName;
use App\\Form\\EntityNameType;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;

class EntityNameController extends AbstractController
{
    #[Route('/entity-name/new', name: 'entityname_new')]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $entity = new EntityName();
        $form = $this->createForm(EntityNameType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($entity);
            $em->flush();
            return $this->redirectToRoute('entityname_index');
        }

        return $this->render('entity_name/new.html.twig', ['form' => $form]);
    }
}` },
        { type: "code", filename: "templates/entity_name/new.html.twig", language: "twig", code: `{# new.html.twig et edit.html.twig #}
<h1>{{ entity is defined and entity.id ? 'Modifier' : 'Créer' }} une entité</h1>

{{ form_start(form) }}
    {{ form_widget(form) }}
    <button>{{ entity is defined and entity.id ? 'Modifier' : 'Créer' }}</button>
{{ form_end(form) }}

<a href="{{ path('entityname_index') }}">Retour à la liste</a>` },
        { type: "code", filename: "templates/entity_name/index.html.twig", language: "twig", code: `{# index.html.twig #}
<h1>Liste des entités</h1>
<a href="{{ path('entityname_new') }}">Créer une entité</a>

<ul>
    {% for entity in entities %}
        <li>
            {{ entity.field1 }} - {{ entity.field2 }}
            <a href="{{ path('entityname_show', {id: entity.id}) }}">Voir</a>
        </li>
    {% endfor %}
</ul>` },
      ],
    },

    // ── SERVICE VIA COMMANDE (make:service) ──────────────────────────────────
    {
      id: "make-service-commande",
      title: "Créer un service via la commande make:service",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:service NomService` },
      ],
    },

    // ── MAKE:USER DÉTAILLÉ ────────────────────────────────────────────────────
    {
      id: "make-user-detail",
      title: "make:user — réponses attendues",
      blocks: [
        { type: "code", filename: "terminal-interaction", language: "text", code: `What class name? User
Store users in the database? yes
Username field? email` },
      ],
    },

    // ── TESTS FONCTIONNELS ────────────────────────────────────────────────────
    {
      id: "tests-fonctionnels-symfony",
      title: "Tests fonctionnels (PHPUnit)",
      blocks: [
        { type: "h", text: "Installation et commandes" },
        { type: "code", filename: "terminal", language: "bash", code: `# Installer phpunit via Symfony Flex
composer require --dev symfony/test-pack

# Commande de test
php bin/phpunit

# Commande de tests précise (passe ou échoue)
APP_ENV=test php bin/phpunit -v

# Commande test d'un fichier précis
php bin/phpunit tests/Controller/UserControllerTest.php` },
        { type: "h", text: "Exemple de test fonctionnel" },
        { type: "code", filename: "tests/Controller/DefaultControllerTest.php", language: "php", code: `public function testHomepageIsSuccessful(): void
{
    $client = static::createClient();
    $client->request('GET', '/');
    $this->assertResponseIsSuccessful();
}` },
        { type: "h", text: "Configuration base de test (phpunit.xml.dist)" },
        { type: "code", filename: "phpunit.xml.dist", language: "xml", code: `<!-- phpunit.xml.dist -->

<!-- Avant : -->
<server name="DATABASE_URL" value="mysql://root:@127.0.0.1:3306/stubborn_db?serverVersion=10.4.28-MariaDB&charset=utf8mb4" />

<!-- Après : -->
<server name="DATABASE_URL" value="mysql://root:@127.0.0.1:3306/stubborn_db?serverVersion=10.4.28-MariaDB&amp;charset=utf8mb4" />` },
        { type: "note", variant: "warning", text: "Le caractère & doit être échappé en &amp; dans les fichiers XML." },
      ],
    },

    // ── SECURITY.YAML — FIREWALL ──────────────────────────────────────────────
    {
      id: "security-yaml-firewall",
      title: "Configuration security.yaml — firewall",
      blocks: [
        { type: "code", filename: "config/packages/security.yaml", language: "yaml", code: `firewalls:
  main:
    form_login: true
    logout: true
access_control:
  - { path: ^/admin, roles: ROLE_ADMIN }` },
      ],
    },

    // ── COMMANDE CONSOLE PERSONNALISÉE ────────────────────────────────────────
    {
      id: "commande-console-personnalisee",
      title: "Créer une commande console personnalisée",
      blocks: [
        { type: "p", text: "DEF : Symfony permet de créer ses propres commandes exécutables via php bin/console." },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:command` },
        { type: "code", filename: "src/Command/SayHelloCommand.php", language: "php", code: `#[AsCommand(name: 'app:say-hello')]
class SayHelloCommand extends Command
{
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Hello!');
        return Command::SUCCESS;
    }
}` },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console app:say-hello` },
      ],
    },

    // ── EXEMPLE ARTICLE — TEMPLATE STANDALONE ─────────────────────────────────
    {
      id: "exemple-article-liste",
      title: "Exemple — Template liste d'articles",
      blocks: [
        { type: "code", filename: "templates/article/liste.html.twig", language: "twig", code: `{# templates/article/liste.html.twig #}
<h1>Liste des articles</h1>
<ul>
    {% for article in articles %}
        <li>
            <strong>{{ article.title }}</strong><br>
            {{ article.content }}
        </li>
    {% else %}
        <li>Aucun article trouvé.</li>
    {% endfor %}
</ul>` },
      ],
    },

    // ── ERREURS COMMUNES ET DÉPANNAGE ─────────────────────────────────────────
    {
      id: "erreurs-communes-symfony",
      title: "Erreurs communes et dépannage",
      blocks: [
        { type: "h", text: "Classe redéclarée (Fatal error)" },
        { type: "code", filename: "erreur.txt", language: "text", code: `Fatal error: Cannot redeclare class App\\Tests\\Controller\\CartController
(previously declared in .../src/Controller/CartController.php:10)` },
        { type: "note", variant: "warning", text: "Cette erreur survient généralement quand un fichier de test se trouve dans le mauvais dossier ou porte le même nom qu'une classe existante." },
        { type: "h", text: "Nettoyer le cache et régénérer l'autoload" },
        { type: "code", filename: "terminal", language: "bash", code: `# Supprime le cache Symfony
rm -rf var/cache/*

# Vérifie l'autoload Composer
composer dump-autoload

# Commandes database (environnement de test)
php bin/console doctrine:database:drop --env=test --force
php bin/console doctrine:database:create --env=test
php bin/console doctrine:schema:update --force --env=test
php bin/phpunit` },
      ],
    },

    // ── DOCBLOCKS PHP ─────────────────────────────────────────────────────────
    {
      id: "docblocks-php",
      title: "Documenter son code avec les DocBlocks",
      blocks: [
        { type: "p", text: "DEF : Commentaires structurés au-dessus des fonctions/méthodes pour documenter leur usage, paramètres et valeur de retour." },
        { type: "code", filename: "exemple.php", language: "php", code: `/**
 * Retourne un message de bienvenue.
 *
 * @param string $nom Le nom de l'utilisateur
 * @return string Le message final
 */
function direBonjour(string $nom): string {
    return "Bonjour " . $nom;
}` },
      ],
    },

    // ── EXEMPLE ENTITÉ ARTICLE (SIMPLE) ───────────────────────────────────────
    {
      id: "exemple-entite-article-simple",
      title: "Exemple — Entité Article (simple)",
      blocks: [
        { type: "code", filename: "src/Entity/Article.php", language: "php", code: `//src/Entité/Article
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
class Article
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column(type:"integer")]
    private int $id;

    #[ORM\\Column(type:"string", length:255)]
    private string $titre;

    #[ORM\\Column(type:"text")]
    private string $contenu;

    // Getters et setters
    public function getId(): int
    {
        return $this->id;
    }

    public function getTitre(): string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;
        return $this;
    }

    public function getContenu(): string
    {
        return $this->contenu;
    }

    public function setContenu(string $contenu): self
    {
        $this->contenu = $contenu;
        return $this;
    }
}` },
      ],
    },

    // ── EXEMPLE VALIDATION COMPLET (PRODUCT) ──────────────────────────────────
    {
      id: "exemple-validation-product",
      title: "Exemple — Validation complète avec erreur affichée",
      blocks: [
        { type: "code", filename: "src/Entity/Product.php", language: "php", code: `// Entité Product.php
namespace App\\Entity;

use Symfony\\Component\\Validator\\Constraints as Assert;

class Product
{
    #[Assert\\NotBlank(message: "Le nom est obligatoire.")]
    private string $name;

    #[Assert\\Length(
        min: 3,
        max: 255,
        minMessage: "La description doit contenir au moins {{ limit }} caractères.",
        maxMessage: "La description ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $description;
}

// Dans le contrôleur ProductController.php
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;
use App\\Entity\\Product;

class ProductController
{
    public function create(ValidatorInterface $validator): Response
    {
        $product = new Product();
        $product->setName(""); // erreur volontaire
        $product->setDescription("ok");

        // Validation
        $errors = $validator->validate($product);
        if (count($errors) > 0) {
            return new Response((string) $errors); // affichage des erreurs
        }
        return new Response("Produit valide");
    }
}
// Symfony retourne : Le nom est obligatoire.` },
      ],
    },

    // ── EXEMPLE COMPLET ARTICLE — ENTITÉ + REPOSITORY + CONTRÔLEUR ────────────
    {
      id: "exemple-complet-article",
      title: "Exemple complet — Article (Entité, Repository, Contrôleur)",
      blocks: [
        { type: "code", filename: "src/Entity/Article.php", language: "php", code: `// src/Entity/Article.php
namespace App\\Entity;

use App\\Repository\\ArticleRepository;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private string $title;

    #[ORM\\Column(type: 'text')]
    private string $content;

    // --- Getters et Setters ---
    public function getId(): ?int { return $this->id; }
    public function getTitle(): string { return $this->title; }
    public function setTitle(string $title): self { $this->title = $title; return $this; }
    public function getContent(): string { return $this->content; }
    public function setContent(string $content): self { $this->content = $content; return $this; }
}` },
        { type: "code", filename: "src/Repository/ArticleRepository.php", language: "php", code: `// src/Repository/ArticleRepository.php
namespace App\\Repository;

use App\\Entity\\Article;
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

class ArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    // Exemple : récupérer les 5 derniers articles
    public function findLastFive(): array
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.id', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();
    }
}` },
        { type: "code", filename: "src/Controller/ArticleController.php", language: "php", code: `// src/Controller/ArticleController.php
namespace App\\Controller;

use App\\Repository\\ArticleRepository;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;

class ArticleController extends AbstractController
{
    #[Route('/articles', name: 'article_liste')]
    public function listeArticles(ArticleRepository $repo): Response
    {
        $articles = $repo->findAll();
        return $this->render('article/liste.html.twig', [
            'articles' => $articles,
        ]);
    }
}` },
      ],
    },

    {
      id: "stripe-configuration",
      title: "Stripe — Configuration dans le projet",
      blocks: [
        { type: "h", text: "Schéma global — flux Stripe" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                    FLUX STRIPE (back-end)                       │
│                                                                 │
│  Dashboard Stripe                                               │
│  ┌───────────────────┐                                          │
│  │ Developers →      │                                          │
│  │ API keys          │──► pk_test_...  (Publishable key)        │
│  │                   │──► sk_test_...  (Secret key)             │
│  └───────────────────┘                                          │
│           │                                                     │
│           ▼                                                     │
│  .env.local (dev)  /  Variables d'env hébergeur (prod)          │
│           │                                                     │
│           ▼                                                     │
│  Service back-end (ex: StripeService)                           │
│  └── new StripeClient($secretKey)                               │
│       └── paymentIntents->create([...])                         │
│                                                                 │
│  ◄──────── Réponse Stripe (PaymentIntent, client_secret...)     │
└─────────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Mode test" },
        { type: "p", text: "Dans le dashboard Stripe : va dans Developers → API keys. Tu récupères : Publishable key (pk_test_...) et Secret key (sk_test_...)." },
        { type: "list", items: [
          "Active le mode Test mode",
          "Utilise les cartes de test Stripe (ex : 4242 4242 4242 4242)",
        ]},
        { type: "h", text: "2. Fichier .env.local (Symfony)" },
        { type: "code", filename: ".env.local", language: "bash", code: `STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx` },
        { type: "h", text: "3. Sur l'hébergeur (ex : AlwaysData)" },
        { type: "p", text: "Va dans ton panel → Section Environment variables." },
        { type: "code", filename: "env-production", language: "bash", code: `STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx` },
        { type: "h", text: "4. Utilisation dans un service Symfony" },
        { type: "code", filename: "src/Service/StripeService.php", language: "php", code: `<?php
use Stripe\\StripeClient;

class StripeService
{
    private StripeClient $stripe;

    public function __construct(string $secretKey)
    {
        $this->stripe = new StripeClient($secretKey);
    }

    public function createPaymentIntent(int $amount)
    {
        return $this->stripe->paymentIntents->create([
            'amount'   => $amount,
            'currency' => 'eur',
        ]);
    }
}` },
        { type: "code", filename: "config/services.yaml", language: "yaml", code: `# Dans services.yaml
parameters:
  stripe_secret_key: '%env(STRIPE_SECRET_KEY)%'

services:
  App\\Service\\StripeService:
    arguments:
      $secretKey: '%stripe_secret_key%'` },
        { type: "h", text: "5. Cartes de tests" },
        { type: "table", headers: ["Scénario", "Numéro de carte"], rows: [
          ["Paiement réussi", "4242 4242 4242 4242"],
          ["Refusé", "4000 0000 0000 0002"],
          ["3D Secure", "4000 0025 0000 3155"],
        ]},
        { type: "note", variant: "info", text: "Date / CVC : n'importe quoi (ex : 12/34, 123)." },
        { type: "h", text: "Documentation Stripe" },
        { type: "p", text: "Dans le dashboard Stripe : onglet Developers puis Documentation. Très utile pour :" },
        { type: "list", items: [
          "PaymentIntent → création et gestion d'une intention de paiement",
          "Checkout Session → page de paiement hébergée par Stripe",
          "Webhooks → écouter les événements Stripe côté serveur",
        ]},
      ],
    },
  ],
};
