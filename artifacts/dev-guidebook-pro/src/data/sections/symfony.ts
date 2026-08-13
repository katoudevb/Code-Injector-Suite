import type { Section } from "../types";
import { laConsoleSymfony } from "./laConsoleSymfony";

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

    // ═══════════════════════════════════════════════════════════════════
    // ── LIVRE-TUTORIEL COMPLET : "EN ROUTE POUR SYMFONY 6.4" ────────────
    // ═══════════════════════════════════════════════════════════════════
    // ── ÉTAPE 0 ──────────────────────────────────────────────────────────
    {
      id: "etape-0-pourquoi-ce-livre",
      title: "Étape 0 — Pourquoi ce livre ?",
      blocks: [
        { type: "note", variant: "info", text: "Auteur : Fabien Potencier — https://fabien.potencier.org/ — @fabpot. ISBN-13 : 978-2-918390-38-1. Éditeur : Symfony SAS, 6 rue des bateliers, 92110 Clichy, France. Licence : CC BY-NC-SA 4.0. Version originale anglaise : v6.4.0 — Date de génération : 31 mai 2024." },
        { type: "p", text: "Traducteurs : Guillaume Sarramegna, Steeve Christen, Joachim Martin, Romain Gautier, Clément Delmas, Boris Baskovec, Guillaume Sylvestre, Jean-Vincent QUILICHINI, Vincent MARY, Gary Houbre, Laurent Prédine." },
        { type: "note", variant: "info", text: "Ce livre est mis à disposition selon les termes de la licence Attribution-NonCommercial-ShareAlike 4.0 International. Vous êtes libre de partager, copier, redistribuer dans tout format, et d'adapter, remixer, transformer, en vous basant sur ce matériel, à condition de : donner le crédit approprié, ne pas utiliser à des fins commerciales, distribuer sous la même licence." },
        { type: "h", text: "Table des matières" },
        {
          type: "diagram",
          content: `Étape 0  : Pourquoi ce livre ?
Étape 1  : Votre environnement de travail
Étape 2  : Présentation du projet
Étape 3  : De zéro à la production
Étape 4  : Adopter une méthodologie
Étape 5  : Diagnostiquer les problèmes
Étape 6  : Créer un contrôleur
Étape 7  : Mettre en place une base de données
Étape 8  : Décrire la structure des données
Étape 9  : Configurer une interface d'administration
Étape 10 : Construire l'interface
Étape 11 : Utiliser des branches
Étape 12 : Écouter les événements
Étape 13 : Gérer le cycle de vie des objets Doctrine
Étape 14 : Accepter des commentaires avec les formulaires
Étape 15 : Sécuriser l'interface d'administration
Étape 16 : Empêcher le spam avec une API
Étape 17 : Tester
Étape 18 : Faire de l'asynchrone
Étape 19 : Prendre des décisions avec un workflow
Étape 20 : Envoyer des emails aux admins
Étape 21 : Mettre en cache pour la performance
Étape 22 : Styliser l'interface avec Webpack
Étape 23 : Redimensionner des images
Étape 24 : Exécuter des crons
Étape 25 : Notifier à tout prix
Étape 26 : Exposer une API avec API Platform
Étape 27 : Créer une SPA (Single Page Application)
Étape 28 : Localiser une application
Étape 29 : Gérer les performances
Étape 30 : Voyager au cœur de Symfony
Étape 31 : Utiliser Redis pour stocker les sessions
Étape 32 : Utiliser RabbitMQ comme gestionnaire de messages
Étape 33 : Quelle est la prochaine étape ?`,
        },
        { type: "p", text: "Symfony est l'un des projets PHP les plus réputés. Il s'agit à la fois d'un framework full-stack robuste, et d'un ensemble populaire de composants réutilisables." },
        { type: "p", text: "Depuis la sortie de symfony 2.0 en 2011, le projet est maintenant arrivé à maturité. Tout ce qui a été fait au cours des dernières années a porté ses fruits : nouveaux composants de bas niveau, intégrations de haut niveau avec d'autres logiciels, outils permettant d'améliorer la productivité. L'expérience de développement s'est considérablement améliorée, sans sacrifier la flexibilité. Il n'a jamais été aussi amusant d'utiliser Symfony pour un projet." },
        { type: "p", text: "Si vous découvrez Symfony, ce livre présente la puissance du framework et comment vous pouvez améliorer votre productivité en développant une application étape par étape." },
        { type: "p", text: "Si vous avez déjà développé avec Symfony, vous devriez le redécouvrir. Le framework a énormément évolué ces dernières années. Il y a aussi de nouveaux composants : Client HTTP, Mailer, Workflow, Messenger. Ces composants changent la donne, et devraient modifier votre façon de penser une application Symfony." },
        { type: "note", variant: "info", title: "Ce que ce livre n'est pas", text: "Ne vous attendez pas à de longs paragraphes, ni à de longues explications sur les concepts fondamentaux. Le livre traite plutôt du voyage — par où commencer, quel code écrire, quand, comment. Le livre ne duplique pas la documentation existante (d'excellente qualité) ; il la cite de manière extensive dans la section \"Aller plus loin\" à la fin de chaque étape." },
        { type: "p", text: "Le livre décrit la création d'une application, de sa conception à sa mise en production, en abordant presque tous les aspects d'un projet Symfony moderne." },
        { type: "p", text: "La maîtrise s'acquiert par la pratique. Codez pendant que vous lisez, testez, déployez, améliorez. Et n'hésitez pas à demander de l'aide sur Slack et Stack Overflow." },
      ],
    },

    // ── ÉTAPE 1 ──────────────────────────────────────────────────────────
    {
      id: "etape-1-environnement-travail",
      title: "Étape 1 — Votre environnement de travail",
      blocks: [
        { type: "note", variant: "warning", text: "Ne sautez pas cette étape. Prenez au minimum connaissance de la partie concernant la commande symfony (Symfony CLI)." },
        { type: "h", text: "1.1 Un ordinateur" },
        { type: "p", text: "Vous avez besoin d'un ordinateur. La bonne nouvelle c'est qu'il peut fonctionner avec macOS, Windows, ou Linux. Symfony et tous les outils sont compatibles avec chacun d'entre eux." },
        { type: "h", text: "1.2 Choix arbitraires" },
        { type: "p", text: "PostgreSQL sera utilisé pour tout : moteur de base de données, files d'attente, cache et stockage de session. Pour la plupart des projets, PostgreSQL est la meilleure solution. À la fin du livre, nous apprendrons comment utiliser RabbitMQ pour les files d'attente (queues) et Redis pour les sessions." },
        { type: "h", text: "1.3 IDE" },
        { type: "p", text: "Je recommande Visual Studio Code (gratuit) ou PhpStorm (payant, mais meilleure intégration avec Symfony via le Symfony Support Plugin). Ce livre a été écrit avec Visual Studio Code." },
        { type: "h", text: "1.4 Terminal" },
        { type: "p", text: "Vous pouvez utiliser le terminal intégré à votre IDE. En alternatives : iTerm2 sous macOS, Hyper sous Windows, Terminal sous Linux." },
        { type: "h", text: "1.5 Git" },
        { type: "p", text: "Assurez-vous de connaître les commandes de base : git clone, git log, git show, git diff, git checkout, etc. Sur Windows, installez Git bash." },
        { type: "h", text: "1.6 PHP" },
        { type: "p", text: "Utilisez PHP 8.3. Vérifiez que les extensions PHP suivantes sont installées :" },
        { type: "list", items: [
          "intl, pdo_pgsql, xsl, amqp, gd, openssl, sodium",
          "Optionnellement : redis, curl, zip",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `# Vérifier les extensions installées
php -m` },
        { type: "p", text: "Nous avons aussi besoin de php-fpm (ou php-cgi en alternative)." },
        { type: "h", text: "1.7 Composer" },
        { type: "p", text: "Installez la dernière version de Composer, le gestionnaire de paquets pour PHP." },
        { type: "note", variant: "info", title: "Astuce", text: "composer req fait la même chose que composer require, composer rem au lieu de composer remove, etc." },
        { type: "h", text: "1.8 NodeJS" },
        { type: "p", text: "Nous utiliserons les outils JavaScript/NodeJS pour gérer nos assets. Vérifiez que NodeJS est installé." },
        { type: "h", text: "1.9 Docker et Docker Compose" },
        { type: "p", text: "Les services seront gérés par Docker et Docker Compose. Installez-les et lancez Docker. Notre utilisation de Docker sera très simple." },
        { type: "h", text: "1.10 Symfony CLI" },
        { type: "p", text: "La commande symfony est indispensable. Elle fournit un serveur web local, l'intégration Docker complète, et le support du cloud Platform.sh." },
        { type: "code", filename: "terminal", language: "bash", code: `# Installer l'autorité de certification TLS pour HTTPS local
symfony server:ca:install

# Vérifier que votre ordinateur répond aux conditions requises
symfony book:check-requirements` },
        { type: "note", variant: "info", title: "Proxy Symfony (optionnel)", text: "Permet d'obtenir un nom de domaine local se terminant par .wip pour votre projet." },
        { type: "p", text: "Pourquoi préfixer les commandes avec symfony ? La commande symfony définit automatiquement certaines variables d'environnement à partir des services Docker. Par exemple : symfony composer au lieu de composer, symfony console au lieu de ./bin/console. Cela assure le même comportement partout et sélectionne automatiquement la meilleure version de PHP." },
      ],
    },

    // ── ÉTAPE 2 ──────────────────────────────────────────────────────────
    {
      id: "etape-2-presentation-projet",
      title: "Étape 2 — Présentation du projet",
      blocks: [
        { type: "h", text: "2.1 Description du projet" },
        { type: "p", text: "Le projet : un livre d'or pour les conférences Symfony. Une liste de conférences sur la page d'accueil, une page pour chacune d'entre elles avec des commentaires (texte + photo optionnelle). Le projet comprend plusieurs applications : une application web traditionnelle, une API et une SPA pour les téléphones mobiles." },
        { type: "h", text: "2.2 La maîtrise s'acquiert par la pratique" },
        { type: "p", text: "Le livre contient tout le code que vous devez écrire ainsi que toutes les commandes à exécuter. Il ne manque aucun code." },
        { type: "h", text: "2.3 À propos du diagramme de l'infrastructure finale" },
        { type: "p", text: "Infrastructure du projet finale avec une faible quantité de code nécessaire :" },
        { type: "list", items: [
          "20 classes PHP sous src/ pour le site",
          "550 lignes logiques de code (LLOC) de PHP",
          "40 lignes de configuration personnalisée (3 fichiers)",
          "20 lignes de configuration de l'infrastructure de développement (Docker)",
          "100 lignes de configuration de l'infrastructure de production (Platform.sh)",
          "5 variables d'environnement explicites",
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              INFRASTRUCTURE FINALE DU PROJET                │
│                                                             │
│  Navigateur ──► Varnish (cache) ──► Symfony App (PHP)       │
│                                        │                    │
│                              ┌─────────┴──────────┐        │
│                              │                    │         │
│                         PostgreSQL          Redis           │
│                         (DB + sessions)    (sessions)       │
│                              │                              │
│                         RabbitMQ                            │
│                         (messages)                          │
│                              │                              │
│                         Workers Messenger                   │
│                         (async processing)                  │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "2.4 Récupérer le code source du projet" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony new --version=6.4-1 --book guestbook` },
        { type: "p", text: "Cette commande fait plus que cloner (hébergé sur GitHub : https://github.com/the-fast-track/book-6.4-1) : elle démarre le serveur web, les conteneurs, migre la base de données, charge les données de test, etc." },
        { type: "h", text: "2.5 Parcourir le code source" },
        { type: "p", text: "Le dépôt contient un tag par étape et sous-étape. Navigation :" },
        { type: "code", filename: "terminal", language: "bash", code: `# Récupérer le code à la fin de l'étape 10
symfony book:checkout 10

# Récupérer n'importe quelle sous-étape
symfony book:checkout 10.2

# Voir le diff entre deux sous-étapes
git diff step-10-1...step-10-2

# Pour la première sous-étape d'une étape
git diff step-9...step-10-1

# Savoir quand un fichier a été créé ou modifié
git log -- src/Controller/ConferenceController.php` },
      ],
    },

    // ── ÉTAPE 3 ──────────────────────────────────────────────────────────
    {
      id: "etape-3-zero-a-production",
      title: "Étape 3 — De zéro à la production",
      blocks: [
        { type: "h", text: "3.1 Initialiser le projet" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony new guestbook --version=6.4 --php=8.3 --webapp --docker --cloud
cd guestbook` },
        { type: "p", text: "Options utilisées :" },
        { type: "list", items: [
          "--webapp : inclut la majeure partie des paquets pour une application web moderne (Messenger, PostgreSQL via Doctrine, etc.)",
          "--docker : active Docker pour les services locaux (PostgreSQL, intercepteur de mails, etc.)",
          "--cloud : génère automatiquement la configuration Platform.sh",
        ]},
        { type: "h", text: "Structure des répertoires" },
        {
          type: "diagram",
          content: `guestbook/
├── bin/          ← Point d'entrée console (./bin/console)
├── config/       ← Fichiers de configuration (1 par paquet)
├── public/       ← Répertoire racine du site web, index.php
├── src/          ← Votre code (namespace App\\)
├── var/          ← Caches, logs, fichiers générés (écriture en prod)
└── vendor/       ← Tous les paquets installés par Composer`,
        },
        { type: "note", variant: "warning", text: "Le répertoire vendor/ est géré par Composer — ne jamais le modifier." },
        { type: "h", text: "3.2 Créer des ressources publiques" },
        { type: "code", filename: "terminal", language: "bash", code: `mkdir public/images/
php -r "copy('http://clipartmag.com/images/website-under-construction-image-6.gif', 'public/images/under-construction.gif');"` },
        { type: "h", text: "3.3 Lancer un serveur web local" },
        { type: "code", filename: "terminal", language: "bash", code: `# Démarrer le serveur web en arrière-plan
symfony server:start -d

# Ouvrir le site dans le navigateur
symfony open:local

# En cas de problème, afficher les logs
symfony server:log` },
        { type: "h", text: "3.4 Se préparer pour la production" },
        { type: "p", text: "La devise : déployer tôt, déployer souvent." },
        { type: "p", text: "Hébergement choisi : Platform.sh (supporte PHP, services comme BDD, files d'attente, etc., et aide à financer Symfony)." },
        { type: "h", text: "3.5 Mise en production" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer un nouveau projet Platform.sh
symfony cloud:project:create --title="Guestbook" --plan=development

# Déployer
symfony cloud:deploy

# Vérifier que tout fonctionne
symfony cloud:url -1` },
        { type: "note", variant: "info", text: "Si vous voulez supprimer le projet sur Platform.sh : symfony cloud:project:delete" },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Les dépôts pour les recettes officielles de Symfony et les recettes communautaires",
          "Le serveur web local de Symfony",
          "La documentation de Platform.sh",
        ]},
      ],
    },

    // ── ÉTAPE 4 ──────────────────────────────────────────────────────────
    {
      id: "etape-4-methodologie",
      title: "Étape 4 — Adopter une méthodologie",
      blocks: [
        { type: "h", text: "4.1 Mettre en place une stratégie Git" },
        { type: "p", text: "À la fin de chaque étape, committez vos modifications :" },
        { type: "code", filename: "terminal", language: "bash", code: `git add .
git commit -m'Add some new feature'` },
        { type: "p", text: "Symfony gère un fichier .gitignore pour vous. Chaque paquet peut y ajouter plus de configuration :" },
        { type: "code", filename: ".gitignore", language: "text", code: `###> symfony/framework-bundle ###
/.env.local
/.env.local.php
/.env.*.local
/config/secrets/prod/prod.decrypt.private.php
/public/bundles/
/var/
/vendor/
###< symfony/framework-bundle ###` },
        { type: "h", text: "4.2 Déploiement continu en production" },
        { type: "p", text: "Déployez fréquemment, idéalement à la fin de chaque étape :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony cloud:deploy` },
      ],
    },

    // ── ÉTAPE 5 ──────────────────────────────────────────────────────────
    {
      id: "etape-5-diagnostiquer",
      title: "Étape 5 — Diagnostiquer les problèmes",
      blocks: [
        { type: "h", text: "5.1 Découvrir les outils de débogage de Symfony" },
        { type: "p", text: "Le Symfony Profiler est disponible via la web debug toolbar (barre en bas de l'écran). En cliquant sur le point d'exclamation, vous obtenez le \"vrai\" message d'exception avec sa stack trace." },
        { type: "p", text: "Logs en temps réel :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony server:log` },
        { type: "h", text: "5.2 Comprendre les environnements Symfony" },
        { type: "p", text: "Symfony intègre 3 environnements par défaut : dev, prod, test. Tous partagent le même code mais ont des configurations différentes." },
        { type: "list", items: [
          "dev : tous les outils de débogage activés",
          "prod : application optimisée pour la performance",
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│           ENVIRONNEMENTS SYMFONY            │
├───────────┬───────────────┬─────────────────┤
│    dev    │     test      │      prod       │
├───────────┼───────────────┼─────────────────┤
│ Profiler  │ Profiler off  │ Optimisé perf   │
│ Debug on  │ Session mock  │ Debug off       │
│ Logs full │ DB de test    │ Logs minimal    │
└───────────┴───────────────┴─────────────────┘`,
        },
        { type: "p", text: "Basculer d'un environnement à l'autre : changer la variable APP_ENV." },
        { type: "h", text: "5.3 Gérer la configuration des environnements" },
        { type: "code", filename: "terminal", language: "bash", code: `# Variable d'environnement "réelle"
export APP_ENV=dev` },
        { type: "p", text: "Fichier .env (commité, valeurs par défaut) :" },
        { type: "code", filename: ".env", language: "text", code: `###> symfony/framework-bundle ###
APP_ENV=dev
APP_SECRET=c2927f273163f7225a358e3a1bbbed8a
###< symfony/framework-bundle ###` },
        { type: "note", variant: "warning", text: "Fichier .env.local (non commité, surcharge locale) — Ne jamais stocker des données secrètes dans ces fichiers." },
        { type: "h", text: "5.4 Configurer votre IDE" },
        { type: "code", filename: "php.ini", language: "ini", code: `# php.ini
xdebug.file_link_format=vscode://file/%f:%l` },
        { type: "p", text: "Les contrôleurs et les fichiers dans la web debug toolbar deviennent alors cliquables." },
        { type: "h", text: "5.5 Déboguer en production" },
        { type: "code", filename: "terminal", language: "bash", code: `# Consulter les logs en production
symfony cloud:logs --tail

# Se connecter en SSH sur le conteneur web
symfony cloud:ssh` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "SymfonyCasts : tutoriel sur les environnements et les fichiers de configuration",
          "SymfonyCasts : tutoriel sur les variables d'environnement",
          "SymfonyCasts : tutoriel sur la Web Debug Toolbar et le Profiler",
          "Gérer plusieurs fichiers .env dans les applications Symfony",
        ]},
      ],
    },

    // ── ÉTAPE 6 ──────────────────────────────────────────────────────────
    {
      id: "etape-6-creer-controleur",
      title: "Étape 6 — Créer un contrôleur",
      blocks: [
        { type: "p", text: "Symfony cherche une route correspondant au chemin de la requête HTTP. Une route est le lien entre un chemin et un contrôleur (callable PHP)." },
        { type: "h", text: "6.1 Se faciliter la vie avec le Maker Bundle" },
        { type: "code", filename: "terminal", language: "bash", code: `# Lister tous les générateurs disponibles
symfony console list make` },
        { type: "h", text: "6.2 Choisir un format de configuration" },
        { type: "list", items: [
          "YAML pour la configuration des paquets (config/)",
          "Attributs PHP pour la configuration liée au code PHP (cohabitent avec le code)",
        ]},
        { type: "h", text: "6.3 Générer un contrôleur" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:controller ConferenceController` },
        { type: "p", text: "Cela crée src/Controller/ConferenceController.php avec une route et un template Twig." },
        { type: "p", text: "Exemple de contrôleur avec une route définie via attribut :" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `<?php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class ConferenceController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        return $this->render('conference/index.html.twig');
    }
}` },
        { type: "h", text: "6.4 Ajouter un easter egg" },
        { type: "p", text: "Exemple de route supplémentaire :" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `#[Route('/hello/{name}', name: 'hello')]
public function hello(string $name): Response
{
    return new Response('Hello '.$name.'!');
}` },
        { type: "h", text: "6.5 Déboguer des variables" },
        { type: "code", filename: "php", language: "php", code: `dump($variable);       // dump dans la web debug toolbar
dd($variable);         // dump and die` },
      ],
    },

    // ── ÉTAPE 7 ──────────────────────────────────────────────────────────
    {
      id: "etape-7-base-de-donnees",
      title: "Étape 7 — Mettre en place une base de données",
      blocks: [
        { type: "h", text: "7.1 Ajouter PostgreSQL à Docker Compose" },
        { type: "p", text: "La commande symfony new --docker a déjà configuré Docker. Le fichier compose.yaml contient la configuration PostgreSQL." },
        { type: "code", filename: "terminal", language: "bash", code: `# Démarrer Docker Compose
docker compose up -d` },
        { type: "h", text: "7.2 Démarrer Docker Compose" },
        { type: "code", filename: "terminal", language: "bash", code: `docker compose up -d` },
        { type: "h", text: "7.3 Accéder à la base de données locale" },
        { type: "code", filename: "terminal", language: "bash", code: `# Accéder à la base de données via psql
symfony run psql

# Ou utiliser pg_dump
symfony run pg_dump` },
        { type: "h", text: "7.4 Sauvegarder et restaurer les données" },
        { type: "code", filename: "terminal", language: "bash", code: `# Sauvegarder
symfony run pg_dump --no-privileges > dump.sql

# Restaurer
symfony run psql < dump.sql` },
        { type: "h", text: "7.5 Ajouter PostgreSQL à Platform.sh" },
        { type: "p", text: "Déjà configuré via la recette du paquet dans .platform/services.yaml." },
        { type: "h", text: "7.6 Accéder à la base de données de Platform.sh" },
        { type: "code", filename: "terminal", language: "bash", code: `# Ouvrir un tunnel vers la base de données Platform.sh
symfony cloud:tunnel:open

# Puis accéder via psql
symfony run psql

# Fermer le tunnel
symfony cloud:tunnel:close` },
        { type: "h", text: "7.7 Exposer des variables d'environnement" },
        { type: "code", filename: "terminal", language: "bash", code: `# Exporter une variable d'environnement Platform.sh localement
symfony var:export` },
        { type: "h", text: "7.8 Décrire votre infrastructure" },
        { type: "p", text: "Le fichier .platform/services.yaml décrit tous les services : base de données, cache, files d'attente, etc." },
      ],
    },

    // ── ÉTAPE 8 ──────────────────────────────────────────────────────────
    {
      id: "etape-8-structure-donnees",
      title: "Étape 8 — Décrire la structure des données",
      blocks: [
        { type: "h", text: "8.1 Configurer Doctrine ORM" },
        { type: "p", text: "Le fichier config/packages/doctrine.yaml est déjà configuré. Doctrine utilise la variable DATABASE_URL." },
        { type: "h", text: "8.2 Comprendre les conventions des variables d'environnement Symfony" },
        { type: "code", filename: "text", language: "text", code: `DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"` },
        { type: "h", text: "8.3 Modifier la valeur par défaut de DATABASE_URL" },
        { type: "code", filename: ".env", language: "text", code: `# .env
DATABASE_URL="postgresql://postgres:password@127.0.0.1:5432/guestbook?serverVersion=16&charset=utf8"` },
        { type: "h", text: "8.4 Créer des classes d'entités" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer une entité Conference
symfony console make:entity Conference` },
        { type: "p", text: "Exemple d'entité générée :" },
        { type: "code", filename: "src/Entity/Conference.php", language: "php", code: `<?php
namespace App\\Entity;

use App\\Repository\\ConferenceRepository;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity(repositoryClass: ConferenceRepository::class)]
class Conference
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private ?string $city = null;

    #[ORM\\Column(length: 4)]
    private ?string $year = null;

    #[ORM\\Column]
    private ?bool $isInternational = null;

    public function __toString(): string
    {
        return $this->city.' '.$this->year;
    }

    // getters et setters...
}` },
        { type: "h", text: "8.5 Lier les entités" },
        { type: "p", text: "Créer une entité Comment liée à Conference :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:entity Comment` },
        { type: "p", text: "Relation ManyToOne dans Comment :" },
        { type: "code", filename: "src/Entity/Comment.php", language: "php", code: `#[ORM\\ManyToOne(inversedBy: 'comments')]
#[ORM\\JoinColumn(nullable: false)]
private ?Conference $conference = null;` },
        { type: "p", text: "Relation OneToMany dans Conference :" },
        { type: "code", filename: "src/Entity/Conference.php", language: "php", code: `#[ORM\\OneToMany(targetEntity: Comment::class, mappedBy: 'conference', orphanRemoval: true)]
private Collection $comments;` },
        { type: "h", text: "8.6 Ajouter d'autres propriétés" },
        { type: "code", filename: "src/Entity/Comment.php", language: "php", code: `// Dans Comment
#[ORM\\Column(length: 255)]
private ?string $author = null;

#[ORM\\Column(type: Types::TEXT)]
private ?string $text = null;

#[ORM\\Column(length: 255)]
private ?string $email = null;

#[ORM\\Column]
private ?\\DateTimeImmutable $createdAt = null;

#[ORM\\Column(length: 255, nullable: true)]
private ?string $photoFilename = null;

#[ORM\\Column(length: 255, options: ['default' => 'submitted'])]
private string $state = 'submitted';` },
        { type: "h", text: "8.7 Migrer la base de données" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer une migration
symfony console make:migration

# Exécuter la migration
symfony console doctrine:migrations:migrate` },
        { type: "h", text: "8.8 Mettre à jour la base de données locale" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console doctrine:migrations:migrate` },
        { type: "h", text: "8.9 Mettre à jour la base de données de production" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony cloud:deploy` },
        { type: "p", text: "Les migrations sont exécutées automatiquement lors du déploiement." },
      ],
    },

    // ── ÉTAPE 9 ──────────────────────────────────────────────────────────
    {
      id: "etape-9-interface-admin",
      title: "Étape 9 — Configurer une interface d'administration",
      blocks: [
        { type: "h", text: "9.1 Installer des dépendances supplémentaires" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req "easycorp/easyadmin-bundle:^4"` },
        { type: "h", text: "9.2 Configurer EasyAdmin" },
        { type: "p", text: "Créer le dashboard avec le Maker Bundle :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:admin:dashboard` },
        { type: "p", text: "Cela crée src/Controller/Admin/DashboardController.php :" },
        { type: "code", filename: "src/Controller/Admin/DashboardController.php", language: "php", code: `<?php
namespace App\\Controller\\Admin;

use EasyCorp\\Bundle\\EasyAdminBundle\\Config\\Dashboard;
use EasyCorp\\Bundle\\EasyAdminBundle\\Config\\MenuItem;
use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractDashboardController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()->setTitle('Conference Guestbook');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Conferences', 'fa fa-map-marker', Conference::class);
        yield MenuItem::linkToCrud('Comments', 'fa fa-comments', Comment::class);
    }
}` },
        { type: "p", text: "Créer les contrôleurs CRUD :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:admin:crud` },
        { type: "h", text: "9.3 Personnaliser EasyAdmin" },
        { type: "p", text: "Exemple de personnalisation du CRUD pour les conférences :" },
        { type: "code", filename: "src/Controller/Admin/ConferenceCrudController.php", language: "php", code: `<?php
namespace App\\Controller\\Admin;

use App\\Entity\\Conference;
use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractCrudController;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\IdField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\TextField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\BooleanField;

class ConferenceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Conference::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('city');
        yield TextField::new('year');
        yield BooleanField::new('isInternational');
        yield TextField::new('slug');
    }
}` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: ["EasyAdmin Bundle : https://symfony.com/bundles/EasyAdminBundle/current/index.html"] },
      ],
    },

    // ── ÉTAPE 10 ─────────────────────────────────────────────────────────
    {
      id: "etape-10-construire-interface",
      title: "Étape 10 — Construire l'interface",
      blocks: [
        { type: "h", text: "10.1 Utiliser Twig pour les templates" },
        { type: "p", text: "Twig est le moteur de templates de Symfony. Syntaxe de base :" },
        { type: "code", filename: "twig", language: "twig", code: `{# Commentaire #}
{{ variable }}           {# Afficher une variable #}
{% if condition %}       {# Structure de contrôle #}
{% for item in list %}   {# Boucle #}
{{ variable|filtre }}    {# Filtre #}
{{ fonction() }}         {# Fonction #}` },
        { type: "p", text: "Structure d'un template de base (templates/base.html.twig) :" },
        { type: "code", filename: "templates/base.html.twig", language: "twig", code: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Conference Guestbook{% endblock %}</title>
    {% block stylesheets %}{% endblock %}
    {% block javascripts %}{% endblock %}
</head>
<body>
    {% block body %}{% endblock %}
</body>
</html>` },
        { type: "p", text: "Template qui étend le layout :" },
        { type: "code", filename: "templates/conference/index.html.twig", language: "twig", code: `{# templates/conference/index.html.twig #}
{% extends 'base.html.twig' %}

{% block title %}Conference Guestbook{% endblock %}

{% block body %}
<h2>Give your feedback!</h2>
{% for conference in conferences %}
    <h4>{{ conference }}</h4>
{% endfor %}
{% endblock %}` },
        { type: "h", text: "10.2 Utiliser Twig dans un contrôleur" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `#[Route('/', name: 'homepage')]
public function index(ConferenceRepository $conferenceRepository): Response
{
    return $this->render('conference/index.html.twig', [
        'conferences' => $conferenceRepository->findAll(),
    ]);
}` },
        { type: "p", text: "Symfony injecte automatiquement l'instance de ConferenceRepository en se basant sur le type déclaré." },
        { type: "h", text: "10.3 Créer la page d'une conférence" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// src/Controller/ConferenceController.php (extrait)
#[Route('/conference/{slug}', name: 'conference')]
public function show(Request $request, Conference $conference, CommentRepository $commentRepository): Response
{
    $offset = max(0, $request->query->getInt('offset', 0));
    $paginator = $commentRepository->getCommentPaginator($conference, $offset);

    return $this->render('conference/show.html.twig', [
        'conference' => $conference,
        'comments' => $paginator,
        'previous' => $offset - CommentRepository::COMMENTS_PER_PAGE,
        'next' => min(count($paginator), $offset + CommentRepository::COMMENTS_PER_PAGE),
    ]);
}` },
        { type: "p", text: "Template templates/conference/show.html.twig :" },
        { type: "code", filename: "templates/conference/show.html.twig", language: "twig", code: `{% extends 'base.html.twig' %}
{% block title %}Conference Guestbook - {{ conference }}{% endblock %}
{% block body %}
<h2>{{ conference }} Conference</h2>
{% if comments|length > 0 %}
    <div>There are {{ comments|length }} comments.</div>
    {% for comment in comments %}
        {% if comment.photofilename %}
            <img src="{{ asset('uploads/photos/' ~ comment.photofilename) }}" style="max-width: 200px" />
        {% endif %}
        <h4>{{ comment.author }}</h4>
        <small>{{ comment.createdAt|format_datetime('medium', 'short') }}</small>
        <p>{{ comment.text }}</p>
    {% endfor %}
{% else %}
    <div>No comments have been posted yet for this conference.</div>
{% endif %}
{% endblock %}` },
        { type: "p", text: "Le filtre format_datetime nécessite l'installation du paquet :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req "twig/intl-extra:^3"` },
        { type: "h", text: "10.4 Lier des pages entre elles" },
        { type: "p", text: "Utiliser path() avec le nom de la route (ne jamais coder un chemin en dur) :" },
        { type: "code", filename: "twig", language: "twig", code: `<a href="{{ path('conference', { slug: conference.slug }) }}">View</a>` },
        { type: "h", text: "10.5 Paginer les commentaires" },
        { type: "p", text: "Méthode dans CommentRepository :" },
        { type: "code", filename: "src/Repository/CommentRepository.php", language: "php", code: `// src/Repository/CommentRepository.php
public const COMMENTS_PER_PAGE = 2;

public function getCommentPaginator(Conference $conference, int $offset): Paginator
{
    $query = $this->createQueryBuilder('c')
        ->andWhere('c.conference = :conference')
        ->setParameter('conference', $conference)
        ->orderBy('c.createdAt', 'DESC')
        ->setMaxResults(self::COMMENTS_PER_PAGE)
        ->setFirstResult($offset)
        ->getQuery()
    ;

    return new Paginator($query);
}` },
        { type: "p", text: "Template avec pagination :" },
        { type: "code", filename: "twig", language: "twig", code: `{% if previous >= 0 %}
    <a href="{{ path('conference', { slug: conference.slug, offset: previous }) }}">Previous</a>
{% endif %}
{% if next < comments|length %}
    <a href="{{ path('conference', { slug: conference.slug, offset: next }) }}">Next</a>
{% endif %}` },
        { type: "h", text: "10.6 Optimiser le contrôleur" },
        { type: "p", text: "Utiliser $this->render() (raccourci d'AbstractController) au lieu d'injecter Environment Twig dans chaque méthode :" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// Avant (avec injection de Twig)
public function index(Environment $twig, ConferenceRepository $conferenceRepository): Response
{
    return new Response($twig->render('conference/index.html.twig', [...]));
}

// Après (avec AbstractController)
public function index(ConferenceRepository $conferenceRepository): Response
{
    return $this->render('conference/index.html.twig', [...]);
}` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Documentation Twig",
          "Créer et utiliser des templates dans les applications Symfony",
          "Tutoriel SymfonyCasts sur Twig",
          "Le contrôleur de base AbstractController",
        ]},
      ],
    },

    // ── ÉTAPE 11 ─────────────────────────────────────────────────────────
    {
      id: "etape-11-branches",
      title: "Étape 11 — Utiliser des branches",
      blocks: [
        { type: "h", text: "Schéma du workflow Git avec Platform.sh" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│            WORKFLOW GIT + PLATFORM.SH                   │
│                                                         │
│  master (prod) ←─── merge ───┐                          │
│      │                       │                          │
│      │ branch                │                          │
│      ▼                       │                          │
│  sessions-in-db ──── test ──►┘                          │
│      │                                                  │
│  Platform.sh crée un env isolé                          │
│  avec données clonées de master                         │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "11.1 Adopter un workflow Git" },
        { type: "p", text: "Créer une branche par nouvelle fonctionnalité ou correction de bogue." },
        { type: "h", text: "11.2 Créer des branches" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout -b sessions-in-db` },
        { type: "h", text: "11.3 Stocker les sessions dans la base de données" },
        { type: "code", filename: "config/packages/framework.yaml", language: "yaml", code: `# config/packages/framework.yaml
framework:
session:
handler_id:'%env(resolve:DATABASE_URL)%'` },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:migration
symfony console doctrine:migrations:migrate
git add .
git commit -m'Configure database sessions'` },
        { type: "h", text: "11.4 Déployer une branche" },
        { type: "code", filename: "terminal", language: "bash", code: `# Crée un environnement Platform.sh basé sur la branche Git courante
symfony cloud:deploy` },
        { type: "p", text: "Cet environnement :" },
        { type: "list", items: [
          "Hérite du code de la branche Git courante",
          "Copie les données de l'environnement master",
          "Crée un nouveau cluster dédié",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `# Ouvrir la branche dans un navigateur
symfony cloud:url -1` },
        { type: "h", text: "11.5 Déboguer les déploiements en production avant de déployer" },
        { type: "code", filename: "terminal", language: "bash", code: `# Passer l'environnement en mode dev
symfony cloud:env:debug

# Revenir aux réglages de production
symfony cloud:env:debug --off` },
        { type: "note", variant: "warning", text: "N'activez jamais l'environnement dev sur master : cela rendrait votre application lente et ouvrirait des failles de sécurité." },
        { type: "h", text: "11.6 Tester les déploiements en production avant de déployer" },
        { type: "p", text: "Utiliser Blackfire pour les tests de performance (voir étape 29)." },
        { type: "h", text: "11.7 Merger en production" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout master
git merge sessions-in-db
symfony cloud:deploy` },
        { type: "h", text: "11.8 Faire le ménage" },
        { type: "code", filename: "terminal", language: "bash", code: `git branch -d sessions-in-db
symfony cloud:env:delete -e sessions-in-db` },
      ],
    },

    // ── ÉTAPE 12 ─────────────────────────────────────────────────────────
    {
      id: "etape-12-evenements",
      title: "Étape 12 — Écouter les événements",
      blocks: [
        { type: "h", text: "12.1 Ajouter un en-tête au site web" },
        { type: "p", text: "Pour afficher les conférences dans le header sur toutes les pages, nous utilisons une variable globale Twig via un subscriber." },
        { type: "h", text: "12.2 Découvrir les événements Symfony" },
        { type: "p", text: "Symfony intègre un composant Event Dispatcher. Événements importants :" },
        { type: "list", items: [
          "RequestEvent : quand une requête a été créée",
          "ControllerEvent : juste avant l'appel d'un contrôleur",
          "ResponseEvent : quand une réponse est prête à être envoyée",
          "ExceptionEvent : quand une exception a été levée",
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────┐
│         CYCLE DE VIE D'UNE REQUÊTE HTTP         │
│                                                 │
│  Request ──► RequestEvent                       │
│                │                                │
│                ▼                                │
│         ControllerResolver                      │
│                │                                │
│                ▼                                │
│         ControllerEvent                         │
│                │                                │
│                ▼                                │
│         Controller::action()                    │
│                │                                │
│                ▼                                │
│         ResponseEvent                           │
│                │                                │
│                ▼                                │
│         Response envoyée au client              │
└─────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "12.3 Implémenter un subscriber" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:subscriber TwigEventSubscriber
# Choisir l'événement : Symfony\\Component\\HttpKernel\\Event\\ControllerEvent` },
        { type: "code", filename: "src/EventSubscriber/TwigEventSubscriber.php", language: "php", code: `// src/EventSubscriber/TwigEventSubscriber.php
namespace App\\EventSubscriber;

use App\\Repository\\ConferenceRepository;
use Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;
use Symfony\\Component\\HttpKernel\\Event\\ControllerEvent;
use Twig\\Environment;

class TwigEventSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private Environment $twig,
        private ConferenceRepository $conferenceRepository,
    ) {}

    public function onControllerEvent(ControllerEvent $event): void
    {
        $this->twig->addGlobal('conferences', $this->conferenceRepository->findAll());
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ControllerEvent::class => 'onControllerEvent',
        ];
    }
}` },
        { type: "h", text: "12.4 Trier les conférences par année et par ville" },
        { type: "code", filename: "src/Repository/ConferenceRepository.php", language: "php", code: `// src/Repository/ConferenceRepository.php
public function findAll(): array
{
    return $this->findBy([], ['year' => 'ASC', 'city' => 'ASC']);
}` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Le flux Request-Response dans les applications Symfony",
          "Les événements HTTP intégrés à Symfony",
          "Les événements de la console intégrés à Symfony",
        ]},
      ],
    },

    // ── ÉTAPE 13 ─────────────────────────────────────────────────────────
    {
      id: "etape-13-cycle-vie-doctrine",
      title: "Étape 13 — Gérer le cycle de vie des objets Doctrine",
      blocks: [
        { type: "h", text: "13.1 Définir des lifecycle callbacks" },
        { type: "p", text: "Définir createdAt automatiquement lors de la création d'un commentaire :" },
        { type: "code", filename: "src/Entity/Comment.php", language: "php", code: `// src/Entity/Comment.php
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity(repositoryClass: CommentRepository::class)]
#[ORM\\HasLifecycleCallbacks]
class Comment
{
    // ...

    #[ORM\\PrePersist]
    public function setCreatedAtValue(): void
    {
        $this->createdAt = new \\DateTimeImmutable();
    }
}` },
        { type: "h", text: "13.2 Ajouter des slugs aux conférences" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:entity Conference
# Ajouter une propriété: slug (string, 255, non-nullable)

symfony console make:migration` },
        { type: "p", text: "Si erreur lors de la migration (colonne NOT NULL sur des données existantes), ajuster la migration :" },
        { type: "code", filename: "migrations/Version00000000000000.php", language: "php", code: `// migrations/Version00000000000000.php
public function up(Schema $schema): void
{
    // Ajouter la colonne nullable
    $this->addSql('ALTER TABLE conference ADD slug VARCHAR(255)');
    // Définir les valeurs
    $this->addSql("UPDATE conference SET slug=CONCAT(LOWER(city), '-', year)");
    // Rendre non-nullable
    $this->addSql('ALTER TABLE conference ALTER COLUMN slug SET NOT NULL');
}` },
        { type: "p", text: "Contrainte d'unicité :" },
        { type: "code", filename: "src/Entity/Conference.php", language: "php", code: `#[ORM\\Entity(repositoryClass: ConferenceRepository::class)]
#[UniqueEntity('slug')]
class Conference
{
    #[ORM\\Column(length: 255, unique: true)]
    private ?string $slug = null;
}` },
        { type: "h", text: "13.3 Générer des slugs" },
        { type: "code", filename: "src/Entity/Conference.php", language: "php", code: `// src/Entity/Conference.php
use Symfony\\Component\\String\\Slugger\\SluggerInterface;

public function computeSlug(SluggerInterface $slugger): void
{
    if (!$this->slug || '-' === $this->slug) {
        $this->slug = (string) $slugger->slug((string) $this)->lower();
    }
}` },
        { type: "note", variant: "info", text: "La valeur spéciale - permet d'indiquer que le slug doit être généré automatiquement." },
        { type: "h", text: "13.4 Définir un lifecycle callback complexe" },
        { type: "p", text: "Créer un entity listener Doctrine (car il dépend d'un service) :" },
        { type: "code", filename: "src/EntityListener/ConferenceEntityListener.php", language: "php", code: `// src/EntityListener/ConferenceEntityListener.php
namespace App\\EntityListener;

use App\\Entity\\Conference;
use Doctrine\\Bundle\\DoctrineBundle\\Attribute\\AsEntityListener;
use Doctrine\\ORM\\Events;
use Doctrine\\Persistence\\Event\\LifecycleEventArgs;
use Symfony\\Component\\String\\Slugger\\SluggerInterface;

#[AsEntityListener(event: Events::prePersist, entity: Conference::class)]
#[AsEntityListener(event: Events::preUpdate, entity: Conference::class)]
class ConferenceEntityListener
{
    public function __construct(
        private SluggerInterface $slugger,
    ) {}

    public function prePersist(Conference $conference, LifecycleEventArgs $event): void
    {
        $conference->computeSlug($this->slugger);
    }

    public function preUpdate(Conference $conference, LifecycleEventArgs $event): void
    {
        $conference->computeSlug($this->slugger);
    }
}` },
        { type: "note", variant: "warning", text: "Ne confondez pas les listeners d'événements Doctrine et ceux de Symfony." },
        { type: "h", text: "13.5 Configurer un service dans le conteneur" },
        { type: "p", text: "Le conteneur d'injection de dépendance est responsable de la gestion des services. Symfony injecte automatiquement les services en fonction du type déclaré." },
        { type: "code", filename: "terminal", language: "bash", code: `# Afficher tous les services disponibles
symfony console debug:container
symfony console debug:autowiring` },
        { type: "h", text: "13.6 Utiliser des slugs dans l'application" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// Changer la route
#[Route('/conference/{slug}', name: 'conference')]` },
        { type: "code", filename: "twig", language: "twig", code: `{# Dans les templates #}
<a href="{{ path('conference', { slug: conference.slug }) }}">{{ conference }}</a>` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Le système d'événements Doctrine",
          "La documentation du composant String",
          "Le conteneur de services",
          "La cheat sheet des services de Symfony",
        ]},
      ],
    },

    // ── ÉTAPE 14 ─────────────────────────────────────────────────────────
    {
      id: "etape-14-formulaires-commentaires",
      title: "Étape 14 — Accepter des commentaires avec les formulaires",
      blocks: [
        { type: "h", text: "14.1 Générer un form type" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:form CommentType Comment` },
        { type: "code", filename: "src/Form/CommentType.php", language: "php", code: `// src/Form/CommentType.php
namespace App\\Form;

use App\\Entity\\Comment;
use Symfony\\Component\\Form\\AbstractType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\EmailType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\FileType;
use Symfony\\Component\\Form\\Extension\\Core\\Type\\SubmitType;
use Symfony\\Component\\Form\\FormBuilderInterface;
use Symfony\\Component\\OptionsResolver\\OptionsResolver;
use Symfony\\Component\\Validator\\Constraints\\Image;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('author', null, [
                'label' => 'Your name',
            ])
            ->add('text')
            ->add('email', EmailType::class)
            ->add('photo', FileType::class, [
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new Image(['maxSize' => '1024k'])
                ],
            ])
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}` },
        { type: "h", text: "14.2 Afficher un formulaire" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// Dans le contrôleur
$comment = new Comment();
$form = $this->createForm(CommentType::class, $comment);

return $this->render('conference/show.html.twig', [
    'comment_form' => $form,
    // ...
]);` },
        { type: "code", filename: "twig", language: "twig", code: `{# Dans le template #}
<h2>Add your own feedback</h2>
{{ form(comment_form) }}` },
        { type: "h", text: "14.3 Personnaliser un form type" },
        { type: "p", text: "Les champs non mapped ne sont pas associés à une propriété de l'entité — ils sont gérés manuellement (ex : upload de fichier)." },
        { type: "h", text: "14.4 Valider des modèles" },
        { type: "p", text: "Contraintes de validation sur l'entité Comment :" },
        { type: "code", filename: "src/Entity/Comment.php", language: "php", code: `// src/Entity/Comment.php
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Column(length: 255)]
#[Assert\\NotBlank]
private ?string $author = null;

#[ORM\\Column(type: Types::TEXT)]
#[Assert\\NotBlank]
private ?string $text = null;

#[ORM\\Column(length: 255)]
#[Assert\\NotBlank]
#[Assert\\Email]
private ?string $email = null;` },
        { type: "p", text: "Le formulaire ajoute aussi une protection CSRF (champ _token caché)." },
        { type: "h", text: "14.5 Gérer un formulaire" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// src/Controller/ConferenceController.php
public function __construct(
    private EntityManagerInterface $entityManager,
) {}

#[Route('/conference/{slug}', name: 'conference')]
public function show(
    Request $request,
    Conference $conference,
    CommentRepository $commentRepository,
    #[Autowire('%photo_dir%')] string $photoDir,
): Response {
    $comment = new Comment();
    $form = $this->createForm(CommentType::class, $comment);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $comment->setConference($conference);

        if ($photo = $form['photo']->getData()) {
            $filename = bin2hex(random_bytes(6)).'.'.$photo->guessExtension();
            $photo->move($photoDir, $filename);
            $comment->setPhotoFilename($filename);
        }

        $this->entityManager->persist($comment);
        $this->entityManager->flush();

        return $this->redirectToRoute('conference', ['slug' => $conference->getSlug()]);
    }

    // ...
}` },
        { type: "h", text: "14.6 Uploader des fichiers" },
        { type: "code", filename: "config/services.yaml", language: "yaml", code: `# config/services.yaml
parameters:
photo_dir:"%kernel.project_dir%/public/uploads/photos"` },
        { type: "h", text: "14.7 Déboguer des formulaires" },
        { type: "p", text: "Utiliser l'onglet \"Form\" du Symfony Profiler. Pour voir le profil d'une requête POST redirigée, survolez le lien \"302\" dans la barre de debug." },
        { type: "h", text: "14.8 Afficher les photos dans l'interface d'administration" },
        { type: "code", filename: "src/Controller/Admin/CommentCrudController.php", language: "php", code: `// src/Controller/Admin/CommentCrudController.php
yield ImageField::new('photoFilename')
    ->setBasePath('/uploads/photos')
    ->setLabel('Photo')
    ->onlyOnIndex()
;` },
        { type: "h", text: "14.9 Exclure les photos uploadées de Git" },
        { type: "code", filename: ".gitignore", language: "text", code: `# .gitignore
/public/uploads` },
        { type: "h", text: "14.10 Stocker les fichiers uploadés sur les serveurs de production" },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
mounts:
"/var":{source: local,source_path: var}
"/public/uploads":{source: local,source_path: uploads}` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Tutoriel SymfonyCasts sur les formulaires",
          "Comment personnaliser le rendu des formulaires Symfony en HTML",
          "Validation des formulaires Symfony",
          "La référence des form types Symfony",
          "La documentation de FlysystemBundle (AWS S3, Azure, GCS)",
          "Les contraintes de validation de Symfony",
          "La cheat sheet des formulaires Symfony",
        ]},
      ],
    },

    // ── ÉTAPE 15 ─────────────────────────────────────────────────────────
    {
      id: "etape-15-securiser-admin",
      title: "Étape 15 — Sécuriser l'interface d'administration",
      blocks: [
        { type: "h", text: "15.1 Définir une entité User" },
        { type: "code", filename: "terminal", language: "bash", code: `# Utiliser make:user (pas make:entity)
symfony console make:user Admin
# - Utiliser Doctrine pour stocker : yes
# - Nom d'affichage unique : username
# - Mot de passe : yes` },
        { type: "p", text: "Cela met à jour config/packages/security.yaml automatiquement." },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:migration
symfony console doctrine:migrations:migrate -n` },
        { type: "h", text: "15.2 Générer un mot de passe pour l'admin" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console security:hash-password` },
        { type: "h", text: "15.3 Créer un administrateur" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony run psql -c "INSERT INTO admin (id, username, roles, password)\\
VALUES (nextval('admin_id_seq'), 'admin', '[\\"ROLE_ADMIN\\"]',\\
'\\$argon2id\\$v=19\\$m=65536,t=4,p=1\\$BQG+jovPcunctc30xG5PxQ\\$TiGbx451NKdo+g9vLtfkMy4KjASKSOcnNxjij4g')"` },
        { type: "note", variant: "info", text: "Notez l'échappement du caractère $ dans le mot de passe." },
        { type: "h", text: "15.4 Configurer le système d'authentification" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:security:form-login
# Nom du contrôleur : SecurityController
# URL /logout : yes` },
        { type: "p", text: "Cela met à jour config/packages/security.yaml :" },
        { type: "code", filename: "config/packages/security.yaml", language: "yaml", code: `security:
firewalls:
main:
provider: app_user_provider
form_login:
login_path: app_login
check_path: app_login
enable_csrf:true
logout:
path: app_logout` },
        { type: "h", text: "15.5 Ajouter les règles de contrôle d'accès" },
        { type: "code", filename: "config/packages/security.yaml", language: "yaml", code: `# config/packages/security.yaml
access_control:
-{path: ^/admin,roles: ROLE_ADMIN}` },
        { type: "h", text: "15.6 S'authentifier avec le formulaire de connexion" },
        { type: "p", text: "Se connecter avec admin et le mot de passe choisi. EasyAdmin s'intègre automatiquement au système d'authentification." },
        { type: "p", text: "Pour créer un système d'inscription complet : symfony console make:registration-form" },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "La documentation de la sécurité de Symfony",
          "Tutoriel SymfonyCasts sur la sécurité",
          "Comment créer un formulaire de connexion dans les applications Symfony",
          "La cheat sheet de la sécurité dans Symfony",
        ]},
      ],
    },

    // ── ÉTAPE 16 ─────────────────────────────────────────────────────────
    {
      id: "etape-16-spam-api",
      title: "Étape 16 — Empêcher le spam avec une API",
      blocks: [
        { type: "h", text: "16.1 S'inscrire sur Akismet" },
        { type: "p", text: "Créer un compte gratuit sur akismet.com et récupérer la clé de l'API Akismet." },
        { type: "h", text: "16.2 Ajouter une dépendance au composant Symfony HTTPClient" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req symfony/http-client` },
        { type: "h", text: "16.3 Concevoir une classe de vérification de spam" },
        { type: "code", filename: "src/SpamChecker.php", language: "php", code: `// src/SpamChecker.php
namespace App;

use App\\Entity\\Comment;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;
use Symfony\\Contracts\\HttpClient\\HttpClientInterface;

class SpamChecker
{
    private string $endpoint;

    public function __construct(
        private HttpClientInterface $client,
        #[Autowire('%env(AKISMET_KEY)%')] string $akismetKey,
    ) {
        $this->endpoint = sprintf('https://%s.rest.akismet.com/1.1/comment-check', $akismetKey);
    }

    /**
     *@return int Spam score: 0: not spam, 1: maybe spam, 2: blatant spam
     *@throws\\RuntimeException if the call did not work
     */
    public function getSpamScore(Comment $comment, array $context): int
    {
        $response = $this->client->request('POST', $this->endpoint, [
            'body' => array_merge($context, [
                'blog' => 'https://guestbook.example.com',
                'comment_type' => 'comment',
                'comment_author' => $comment->getAuthor(),
                'comment_author_email' => $comment->getEmail(),
                'comment_content' => $comment->getText(),
                'comment_date_gmt' => $comment->getCreatedAt()->format('c'),
                'blog_lang' => 'en',
                'blog_charset' => 'UTF-8',
                'is_test' => true,
            ]),
        ]);

        $headers = $response->getHeaders();
        if ('discard' === ($headers['x-akismet-pro-tip'][0] ?? '')) {
            return 2;
        }
        $content = $response->getContent();
        if (isset($headers['x-akismet-debug-help'][0])) {
            throw new \\RuntimeException(sprintf('Unable to check for spam: %s (%s).', $content, $headers['x-akismet-debug-help'][0]));
        }
        return 'true' === $content ? 1 : 0;
    }
}` },
        { type: "p", text: "Valeurs retournées : 0 = pas spam, 1 = peut-être spam, 2 = spam flagrant." },
        { type: "note", variant: "info", text: "Utilisez l'adresse akismet-guaranteed-spam@example.com pour forcer un résultat spam lors des tests." },
        { type: "h", text: "16.4 Utiliser des variables d'environnement" },
        { type: "code", filename: ".env.local", language: "text", code: `# .env.local
AKISMET_KEY=abcdef` },
        { type: "h", text: "16.5 Stocker des chaînes secrètes" },
        { type: "code", filename: "terminal", language: "bash", code: `# Générer les clés de chiffrement
symfony console secrets:generate-keys

# Stocker un secret
symfony console secrets:set AKISMET_KEY
# Pour la production
symfony console secrets:set AKISMET_KEY --env=prod` },
        { type: "h", text: "16.6 Identifier le spam dans les commentaires" },
        { type: "p", text: "Appeler SpamChecker::getSpamScore() dans le contrôleur ou le gestionnaire de messages." },
        { type: "h", text: "16.7 Gérer les chaînes secrètes en production" },
        { type: "code", filename: "terminal", language: "bash", code: `# Définir un secret sur Platform.sh
symfony cloud:variable:create --sensitive=1 --level=project -y --name=env:AKISMET_KEY --value=abcdef` },
      ],
    },

    // ── ÉTAPE 17 ─────────────────────────────────────────────────────────
    {
      id: "etape-17-tester",
      title: "Étape 17 — Tester",
      blocks: [
        { type: "h", text: "17.1 Écrire des tests unitaires" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer un test
symfony console make:test TestCase SpamCheckerTest` },
        { type: "code", filename: "tests/SpamCheckerTest.php", language: "php", code: `// tests/SpamCheckerTest.php
namespace App\\Tests;

use App\\Entity\\Comment;
use App\\SpamChecker;
use PHPUnit\\Framework\\TestCase;
use Symfony\\Component\\HttpClient\\MockHttpClient;
use Symfony\\Component\\HttpClient\\Response\\MockResponse;

class SpamCheckerTest extends TestCase
{
    /**
     *@dataProvider provideComments
     */
    public function testSpamScoreCalculation(int $expectedScore, string $responseBody, array $responseHeaders, string $exceptionMessage = ''): void
    {
        $comment = new Comment();
        $comment->setCreatedAt(new \\DateTimeImmutable());

        $client = new MockHttpClient([new MockResponse($responseBody, ['response_headers' => $responseHeaders])]);
        $checker = new SpamChecker($client, 'abcde');

        if ($exceptionMessage) {
            $this->expectException(\\RuntimeException::class);
            $this->expectExceptionMessage($exceptionMessage);
        }

        $score = $checker->getSpamScore($comment, []);
        $this->assertSame($expectedScore, $score);
    }

    public static function provideComments(): iterable
    {
        yield 'blatant_spam' => [2, '', ['x-akismet-pro-tip: discard']];
        yield 'spam' => [1, 'true', []];
        yield 'ham' => [0, 'false', []];
    }
}` },
        { type: "h", text: "17.2 Écrire des tests fonctionnels pour les contrôleurs" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console make:test WebTestCase ConferenceControllerTest` },
        { type: "code", filename: "tests/Controller/ConferenceControllerTest.php", language: "php", code: `// tests/Controller/ConferenceControllerTest.php
namespace App\\Tests\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Test\\WebTestCase;

class ConferenceControllerTest extends WebTestCase
{
    public function testIndex(): void
    {
        $client = static::createClient();
        $client->request('GET', '/en/');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h2', 'Give your feedback');
    }

    public function testConferencePage(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/en/');
        $this->assertCount(2, $crawler->filter('h4'));

        $client->clickLink('View');
        $this->assertPageTitleContains('Amsterdam');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h2', 'Amsterdam 2019');
        $this->assertSelectorExists('div:contains("There is one comment")');
    }
}` },
        { type: "h", text: "17.3 Configurer l'environnement de test" },
        { type: "code", filename: ".env.test", language: "text", code: `# .env.test
APP_ENV=test
DATABASE_URL=postgresql://postgres:password@127.0.0.1:5432/guestbook_test?serverVersion=16` },
        { type: "h", text: "17.4 Utiliser une base de données de test" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer la base de données de test
symfony console doctrine:database:create --env=test
symfony console doctrine:schema:create --env=test` },
        { type: "h", text: "17.5 Définir des fixtures (données de test)" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req --dev orm-fixtures` },
        { type: "code", filename: "src/DataFixtures/AppFixtures.php", language: "php", code: `// src/DataFixtures/AppFixtures.php
namespace App\\DataFixtures;

use App\\Entity\\Comment;
use App\\Entity\\Conference;
use Doctrine\\Bundle\\FixturesBundle\\Fixture;
use Doctrine\\Persistence\\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $amsterdam = new Conference();
        $amsterdam->setCity('Amsterdam');
        $amsterdam->setYear('2019');
        $amsterdam->setIsInternational(true);
        $amsterdam->setSlug('amsterdam-2019');
        $manager->persist($amsterdam);

        $comment1 = new Comment();
        $comment1->setConference($amsterdam);
        $comment1->setAuthor('Fabien');
        $comment1->setText('This was a great conference.');
        $comment1->setEmail('fabien@example.com');
        $comment1->setState('published');
        $manager->persist($comment1);

        $manager->flush();
    }
}` },
        { type: "h", text: "17.6 Charger des données de test" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console doctrine:fixtures:load --env=test` },
        { type: "h", text: "17.7 Parcourir un site web avec des tests fonctionnels" },
        { type: "code", filename: "php", language: "php", code: `$client->request('GET', '/en/');
$client->clickLink('View');
$client->clickLink('Previous');` },
        { type: "h", text: "17.8 Soumettre un formulaire dans un test fonctionnel" },
        { type: "code", filename: "php", language: "php", code: `public function testCommentSubmission(): void
{
    $client = static::createClient();
    $client->request('GET', '/en/conference/amsterdam-2019');
    $client->submitForm('Submit', [
        'comment[author]' => 'Fabien',
        'comment[text]' => 'Some feedback from an automated functional test',
        'comment[email]' => 'me@example.com',
        'comment[photo]' => '',
    ]);
    $this->assertResponseRedirects();
    $client->followRedirect();
    $this->assertSelectorExists('div:contains("Thank you for the feedback")');
}` },
        { type: "h", text: "17.9 Recharger les données de test" },
        { type: "code", filename: "php", language: "php", code: `use Doctrine\\Common\\DataFixtures\\Purger\\ORMPurger;

// Dans le setUp() du test
$purger = new ORMPurger($this->getContainer()->get('doctrine.orm.entity_manager'));
$purger->purge();
// Puis recharger les fixtures` },
        { type: "h", text: "17.10 Automatiser votre workflow avec un Makefile" },
        { type: "code", filename: "Makefile", language: "makefile", code: `# Makefile
SHELL=bash

.DEFAULT_GOAL = help
.PHONY        : help test reset-test

## —— Tests ———————————————————————————————————————————————————
test:## Run tests
symfony php bin/phpunit

reset-test:## Reset test database
symfony console doctrine:fixtures:load --env=test -n

help:## Outputs this help screen
@grep -E'(^[a-zA-Z0-9_-]+:.*?##.*$$)'$(MAKEFILE_LIST) |\\
      awk'BEGIN {FS = ":.*?## "}; {printf "\\033[32m%-20s\\033[0m %s\\n",$$1,$$2}'` },
        { type: "h", text: "17.11 Réinitialiser la base de données après chaque test" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req --dev dama/doctrine-test-bundle` },
        { type: "p", text: "Activer dans phpunit.xml.dist :" },
        { type: "code", filename: "phpunit.xml.dist", language: "xml", code: `<extensions>
    <extension class="DAMA\\DoctrineTestBundle\\PHPUnit\\PHPUnitExtension" />
</extensions>` },
        { type: "h", text: "17.12 Utiliser un vrai navigateur pour les tests fonctionnels" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req --dev panther` },
        { type: "h", text: "17.13 Choisir le bon type de test" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              TYPES DE TESTS                                 │
├──────────────────┬──────────────────────────────────────────┤
│  Unitaires       │  Fonctionnels                            │
├──────────────────┼──────────────────────────────────────────┤
│  TestCase        │  WebTestCase                             │
│  Rapides         │  Plus lents                              │
│  Isolation       │  Testent l'application entière           │
│  Une classe      │  Contrôleurs, routes, BDD                │
└──────────────────┴──────────────────────────────────────────┘`,
        },
        { type: "h", text: "17.14 Exécuter des tests fonctionnels de boîte noire avec Blackfire" },
        { type: "p", text: "Utiliser Blackfire Player (voir étape 29)." },
      ],
    },

    // ── ÉTAPE 18 ─────────────────────────────────────────────────────────
    {
      id: "etape-18-asynchrone",
      title: "Étape 18 — Faire de l'asynchrone",
      blocks: [
        { type: "h", text: "18.1 Marquer les commentaires" },
        { type: "p", text: "Ajouter un état state à l'entité Comment :" },
        { type: "code", filename: "src/Entity/Comment.php", language: "php", code: `// src/Entity/Comment.php
#[ORM\\Column(length: 255, options: ['default' => 'submitted'])]
private string $state = 'submitted';` },
        { type: "p", text: "Créer un message à dispatcher :" },
        { type: "code", filename: "src/Message/CommentMessage.php", language: "php", code: `// src/Message/CommentMessage.php
namespace App\\Message;

class CommentMessage
{
    public function __construct(
        private int $id,
        private string $reviewUrl,
        private array $context = [],
    ) {}

    public function getId(): int { return $this->id; }
    public function getReviewUrl(): string { return $this->reviewUrl; }
    public function getContext(): array { return $this->context; }
}` },
        { type: "p", text: "Dans le contrôleur, dispatcher le message au lieu de valider directement :" },
        { type: "code", filename: "php", language: "php", code: `use Symfony\\Component\\Messenger\\MessageBusInterface;

$this->bus->dispatch(new CommentMessage($comment->getId(), $reviewUrl, $context));` },
        { type: "h", text: "18.2 Comprendre Messenger" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              COMPOSANT MESSENGER                            │
│                                                             │
│  Bus ──► Message ──► Transport ──► Queue                    │
│                                       │                     │
│                                    Worker                   │
│                                       │                     │
│                                    Handler                  │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "18.3 Coder un gestionnaire de messages" },
        { type: "code", filename: "src/MessageHandler/CommentMessageHandler.php", language: "php", code: `// src/MessageHandler/CommentMessageHandler.php
namespace App\\MessageHandler;

use App\\Message\\CommentMessage;
use App\\Repository\\CommentRepository;
use App\\SpamChecker;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Component\\Messenger\\Attribute\\AsMessageHandler;

#[AsMessageHandler]
class CommentMessageHandler
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SpamChecker $spamChecker,
        private CommentRepository $commentRepository,
    ) {}

    public function __invoke(CommentMessage $message): void
    {
        $comment = $this->commentRepository->find($message->getId());
        if (!$comment) {
            return;
        }

        if (2 === $this->spamChecker->getSpamScore($comment, $message->getContext())) {
            $comment->setState('spam');
        } else {
            $comment->setState('published');
        }
        $this->entityManager->flush();
    }
}` },
        { type: "h", text: "18.4 Faire vraiment de l'asynchrone" },
        { type: "p", text: "Configuration du transport dans config/packages/messenger.yaml :" },
        { type: "code", filename: "config/packages/messenger.yaml", language: "yaml", code: `framework:
messenger:
transports:
async:
dsn:'%env(MESSENGER_TRANSPORT_DSN)%'
options:
use_notify:true
check_delayed_interval:60000
retry_strategy:
max_retries:3
multiplier:2

routing:
App\\Message\\CommentMessage: async` },
        { type: "h", text: "18.5 Consommer des messages" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console messenger:consume async -vv` },
        { type: "h", text: "18.6 Lancer des workers en arrière-plan" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony run -d symfony console messenger:consume async` },
        { type: "h", text: "18.7 Renvoyer des messages ayant échoué" },
        { type: "code", filename: "terminal", language: "bash", code: `# Voir les messages en échec
symfony console messenger:failed:show

# Réessayer un message en échec
symfony console messenger:failed:retry` },
        { type: "h", text: "18.8 Exécuter des workers sur Platform.sh" },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
workers:
messenger:
commands:
start: symfony console messenger:consume async --time-limit=3540` },
      ],
    },

    // ── ÉTAPE 19 ─────────────────────────────────────────────────────────
    {
      id: "etape-19-workflow",
      title: "Étape 19 — Prendre des décisions avec un workflow",
      blocks: [
        { type: "h", text: "19.1 Décrire des workflows" },
        { type: "code", filename: "config/packages/workflow.yaml", language: "yaml", code: `# config/packages/workflow.yaml
framework:
workflows:
comment:
type: state_machine
audit_trail:
enabled:"%kernel.debug%"
marking_store:
type:'method'
property:'state'
supports:
- App\\Entity\\Comment
initial_marking: submitted
places:
- submitted
- ham
- potential_spam
- spam
- rejected
- ready
- published
transitions:
accept:
from: submitted
to: ham
might_be_spam:
from: submitted
to: potential_spam
reject_spam:
from: submitted
to: spam
publish:
from: potential_spam
to: ready
reject:
from: potential_spam
to: rejected
publish_ham:
from: ham
to: ready
reject_ham:
from: ham
to: rejected
optimize:
from: ready
to: published` },
        { type: "p", text: "Visualiser le workflow :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console workflow:dump comment | dot -Tpng -o workflow.png` },
        { type: "p", text: "Schéma du workflow :" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                    WORKFLOW DES COMMENTAIRES                    │
│                                                                 │
│         submitted                                               │
│        /    |    \\                                              │
│   accept might_be  reject_spam                                  │
│      /    spam \\         \\                                      │
│    ham  potential_spam   spam                                   │
│     |  \\     /   \\                                              │
│  pub_ham  pub  reject                                           │
│       \\    |                                                    │
│        ready  rejected                                          │
│           |                                                     │
│        optimize                                                 │
│           |                                                     │
│        published                                                │
└─────────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "19.2 Utiliser un workflow" },
        { type: "code", filename: "src/MessageHandler/CommentMessageHandler.php", language: "php", code: `// src/MessageHandler/CommentMessageHandler.php
use Symfony\\Component\\Workflow\\WorkflowInterface;

#[AsMessageHandler]
class CommentMessageHandler
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SpamChecker $spamChecker,
        private CommentRepository $commentRepository,
        private MessageBusInterface $bus,
        private WorkflowInterface $commentStateMachine,
        private ?LoggerInterface $logger = null,
    ) {}

    public function __invoke(CommentMessage $message): void
    {
        $comment = $this->commentRepository->find($message->getId());
        if (!$comment) {
            return;
        }

        if ($this->commentStateMachine->can($comment, 'accept')) {
            $score = $this->spamChecker->getSpamScore($comment, $message->getContext());
            $transition = match ($score) {
                2 => 'reject_spam',
                1 => 'might_be_spam',
                default => 'accept',
            };
            $this->commentStateMachine->apply($comment, $transition);
            $this->entityManager->flush();
            $this->bus->dispatch($message);
        } elseif ($this->commentStateMachine->can($comment, 'publish') ||
                  $this->commentStateMachine->can($comment, 'publish_ham')) {
            $this->commentStateMachine->apply(
                $comment,
                $this->commentStateMachine->can($comment, 'publish') ? 'publish' : 'publish_ham'
            );
            $this->entityManager->flush();
        } elseif ($this->logger) {
            $this->logger->debug('Dropping comment message', [
                'comment' => $comment->getId(),
                'state' => $comment->getState(),
            ]);
        }
    }
}` },
        { type: "h", text: "19.3 Trouver des services depuis le conteneur d'injection de dépendances" },
        { type: "p", text: "Convention de nommage : $commentStateMachine fait référence au workflow comment de type state_machine." },
        { type: "code", filename: "terminal", language: "bash", code: `# Trouver tous les services contenant "workflow"
symfony console debug:container workflow

# Ou avec debug:autowiring
symfony console debug:autowiring workflow` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Workflows et State Machines et quand les choisir",
          "La documentation du composant Symfony Workflow",
        ]},
      ],
    },

    // ── ÉTAPE 20 ─────────────────────────────────────────────────────────
    {
      id: "etape-20-emails-admins",
      title: "Étape 20 — Envoyer des emails aux admins",
      blocks: [
        { type: "h", text: "20.1 Définir un email pour l'admin" },
        { type: "code", filename: "config/services.yaml", language: "yaml", code: `# config/services.yaml
parameters:
photo_dir:"%kernel.project_dir%/public/uploads/photos"
default_admin_email: admin@example.com
admin_email:"%env(string:default:default_admin_email:ADMIN_EMAIL)%"
default_base_url:'http://127.0.0.1'
router.request_context.base_url:'%env(default:default_base_url:SYMFONY_DEFAULT_ROUTE_URL)%'` },
        { type: "p", text: "Le processeur default utilise la valeur du paramètre default_admin_email si la variable ADMIN_EMAIL n'existe pas." },
        { type: "h", text: "20.2 Envoyer une notification par email" },
        { type: "code", filename: "php", language: "php", code: `// Dans le gestionnaire de messages
use Symfony\\Bridge\\Twig\\Mime\\NotificationEmail;
use Symfony\\Component\\Mailer\\MailerInterface;

$this->mailer->send((new NotificationEmail())
    ->subject('New comment posted')
    ->htmlTemplate('emails/comment_notification.html.twig')
    ->from($this->adminEmail)
    ->to($this->adminEmail)
    ->context(['comment' => $comment])
);` },
        { type: "p", text: "Définir l'expéditeur global :" },
        { type: "code", filename: "config/packages/mailer.yaml", language: "yaml", code: `# config/packages/mailer.yaml
framework:
mailer:
dsn:'%env(MAILER_DSN)%'
envelope:
sender:"%admin_email%"` },
        { type: "h", text: "20.3 Hériter du template d'email de notification" },
        { type: "code", filename: "templates/emails/comment_notification.html.twig", language: "twig", code: `{# templates/emails/comment_notification.html.twig #}
{% extends '@email/default/notification/body.html.twig' %}
{% block content %}
Author: {{ comment.author }}<br />
Email: {{ comment.email }}<br />
State: {{ comment.state }}<br />
<p>{{ comment.text }}</p>
{% endblock %}
{% block action %}
<spacer size="16"></spacer>
<button href="{{ url('review_comment', { id: comment.id }) }}">Accept</button>
<button href="{{ url('review_comment', { id: comment.id, reject: true }) }}">Reject</button>
{% endblock %}` },
        { type: "p", text: "Installer les extensions Twig nécessaires :" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req "twig/cssinliner-extra:^3" "twig/inky-extra:^3"` },
        { type: "h", text: "20.4 Générer des URLs absolues dans une commande" },
        { type: "p", text: "Utiliser url() (absolue) au lieu de path() (relative) dans les emails." },
        { type: "h", text: "20.5 Lier une route à un contrôleur" },
        { type: "code", filename: "src/Controller/AdminController.php", language: "php", code: `// src/Controller/AdminController.php
namespace App\\Controller;

use App\\Entity\\Comment;
use App\\Message\\CommentMessage;
use Symfony\\Component\\Routing\\Attribute\\Route;
use Symfony\\Component\\Routing\\Generator\\UrlGeneratorInterface;

#[Route('/admin')]
class AdminController extends AbstractController
{
    public function __construct(
        private Environment $twig,
        private EntityManagerInterface $entityManager,
        private MessageBusInterface $bus,
    ) {}

    #[Route('/comment/review/{id}', name: 'review_comment')]
    public function reviewComment(Request $request, Comment $comment, WorkflowInterface $commentStateMachine): Response
    {
        $accepted = !$request->query->get('reject');

        if ($commentStateMachine->can($comment, 'publish')) {
            $transition = $accepted ? 'publish' : 'reject';
        } elseif ($commentStateMachine->can($comment, 'publish_ham')) {
            $transition = $accepted ? 'publish_ham' : 'reject_ham';
        } else {
            return new Response('Comment already reviewed or not in the right state.');
        }

        $commentStateMachine->apply($comment, $transition);
        $this->entityManager->flush();

        if ($accepted) {
            $reviewUrl = $this->generateUrl('review_comment', ['id' => $comment->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
            $this->bus->dispatch(new CommentMessage($comment->getId(), $reviewUrl));
        }

        return new Response($this->twig->render('admin/review.html.twig', [
            'transition' => $transition,
            'comment' => $comment,
        ]));
    }
}` },
        { type: "p", text: "Template de confirmation :" },
        { type: "code", filename: "templates/admin/review.html.twig", language: "twig", code: `{# templates/admin/review.html.twig #}
{% extends 'base.html.twig' %}
{% block body %}
<h2>Comment reviewed, thank you!</h2>
<p>Applied transition: <strong>{{ transition }}</strong></p>
<p>New state: <strong>{{ comment.state }}</strong></p>
{% endblock %}` },
        { type: "h", text: "20.6 Utiliser un mail catcher" },
        { type: "p", text: "Déjà configuré dans compose.override.yaml via Mailpit." },
        { type: "h", text: "20.7 Accéder au webmail" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony open:local:webmail` },
        { type: "h", text: "20.8 Gérer des scripts de longue durée" },
        { type: "p", text: "Les entity managers Doctrine sont automatiquement nettoyés après le traitement d'un message." },
        { type: "h", text: "20.9 Envoyer des emails en mode asynchrone" },
        { type: "code", filename: "config/packages/messenger.yaml", language: "yaml", code: `# config/packages/messenger.yaml
framework:
messenger:
routing:
Symfony\\Component\\Mailer\\Messenger\\SendEmailMessage: async` },
        { type: "h", text: "20.10 Tester les emails" },
        { type: "code", filename: "php", language: "php", code: `public function testMailerAssertions(): void
{
    $client = static::createClient();
    $client->request('GET', '/');
    $this->assertEmailCount(1);
    $event = $this->getMailerEvent(0);
    $this->assertEmailIsQueued($event);
    $email = $this->getMailerMessage(0);
    $this->assertEmailHeaderSame($email, 'To', 'fabien@example.com');
    $this->assertEmailTextBodyContains($email, 'Bar');
    $this->assertEmailAttachmentCount($email, 1);
}` },
        { type: "h", text: "20.11 Envoyer des emails sur Platform.sh" },
        { type: "code", filename: "terminal", language: "bash", code: `# Activer SMTP explicitement sur les branches non-master
symfony cloud:env:info enable_smtp on` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Tutoriel SymfonyCasts sur Mailer",
          "La documentation sur le langage de templating Inky",
          "Les processeurs de variables d'environnement",
          "La documentation du Mailer de Symfony",
          "La documentation de Platform.sh sur les emails",
        ]},
      ],
    },

    // ── ÉTAPE 21 ─────────────────────────────────────────────────────────
    {
      id: "etape-21-cache-performance",
      title: "Étape 21 — Mettre en cache pour la performance",
      blocks: [
        { type: "h", text: "21.1 Ajouter des en-têtes de cache HTTP" },
        { type: "code", filename: "php", language: "php", code: `// Mettre en cache la page d'accueil pendant 1 heure
return $this->render('conference/index.html.twig', [...])->setSharedMaxAge(3600);` },
        { type: "p", text: "setSharedMaxAge() : cache pour les reverse proxies." },
        { type: "p", text: "setMaxAge() : cache du navigateur. (temps en secondes)" },
        { type: "h", text: "21.2 Activer le noyau de cache HTTP de Symfony" },
        { type: "code", filename: "config/packages/framework.yaml", language: "yaml", code: `# config/packages/framework.yaml
when@dev:
framework:
http_cache:true` },
        { type: "p", text: "Test du cache :" },
        { type: "code", filename: "terminal", language: "bash", code: `curl -s -I -X GET https://127.0.0.1:8000/
# x-symfony-cache: GET /: miss, store

# Requêtes suivantes :
# x-symfony-cache: GET /: fresh` },
        { type: "h", text: "21.3 Éviter des requêtes SQL avec les ESIs" },
        { type: "code", filename: "php", language: "php", code: `// Contrôleur de fragment ESI
#[Route('/conference_header', name: 'conference_header')]
public function conferenceHeader(ConferenceRepository $conferenceRepository): Response
{
    return $this->render('conference/header.html.twig', [
        'conferences' => $conferenceRepository->findAll(),
    ])->setSharedMaxAge(3600);
}` },
        { type: "code", filename: "yaml", language: "yaml", code: `# Activer ESI
framework:
esi:true` },
        { type: "code", filename: "twig", language: "twig", code: `{# Utiliser render_esi au lieu de render #}
{{ render_esi(path('conference_header')) }}` },
        { type: "code", filename: "terminal", language: "bash", code: `# Vérifier le cache ESI
# x-symfony-cache: GET /: fresh; GET /conference_header: fresh` },
        { type: "p", text: "Supprimer le TwigEventSubscriber (plus nécessaire) :" },
        { type: "code", filename: "terminal", language: "bash", code: `rm src/EventSubscriber/TwigEventSubscriber.php` },
        { type: "h", text: "21.4 Purger le cache HTTP pour les tests" },
        { type: "code", filename: "terminal", language: "bash", code: `# Supprimer manuellement le cache
rm -rf var/cache/dev/http_cache/` },
        { type: "p", text: "Ou via un contrôleur HTTP PURGE :" },
        { type: "code", filename: "php", language: "php", code: `#[Route('/http-cache/{uri<.*>}', methods: ['PURGE'])]
public function purgeHttpCache(KernelInterface $kernel, Request $request, string $uri, StoreInterface $store): Response
{
    if ('prod' === $kernel->getEnvironment()) {
        return new Response('KO', 400);
    }
    $store->purge($request->getSchemeAndHttpHost().'/'.$uri);
    return new Response('Done');
}` },
        { type: "code", filename: "terminal", language: "bash", code: `# Purger via cURL
curl -s -I -X PURGE -u admin:admin \`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\`admin/http-cache/
curl -s -I -X PURGE -u admin:admin \`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\`admin/http-cache/conference_header` },
        { type: "p", text: "Autorisation HTTP Basic pour le PURGE :" },
        { type: "code", filename: "config/packages/security.yaml", language: "yaml", code: `# config/packages/security.yaml
main:
http_basic:{realm: Admin Area}
entry_point: form_login` },
        { type: "h", text: "21.5 Regrouper les routes similaires avec un préfixe" },
        { type: "code", filename: "php", language: "php", code: `// Configurer le préfixe sur la classe
#[Route('/admin')]
class AdminController extends AbstractController
{
    #[Route('/comment/review/{id}', name: 'review_comment')]  // => /admin/comment/review/{id}
    #[Route('/http-cache/{uri<.*>}', methods: ['PURGE'])]      // => /admin/http-cache/{uri}
}` },
        { type: "h", text: "21.6 Mettre en cache les opérations coûteuses en CPU/mémoire" },
        { type: "code", filename: "src/Command/StepInfoCommand.php", language: "php", code: `// src/Command/StepInfoCommand.php
use Symfony\\Contracts\\Cache\\CacheInterface;

#[AsCommand('app:step:info')]
class StepInfoCommand extends Command
{
    public function __construct(private CacheInterface $cache)
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $step = $this->cache->get('app.current_step', function ($item) {
            $process = new Process(['git', 'tag', '-l', '--points-at', 'HEAD']);
            $process->mustRun();
            $item->expiresAfter(30);
            return $process->getOutput();
        });
        $output->writeln($step);
        return Command::SUCCESS;
    }
}` },
        { type: "h", text: "21.7 Analyser et comparer les performances" },
        { type: "note", variant: "info", text: "Mesurez toujours l'impact de l'ajout d'un cache avec un outil de profilage comme Blackfire." },
        { type: "h", text: "21.8 Configurer un cache de reverse proxy en production" },
        { type: "code", filename: ".platform/services.yaml", language: "yaml", code: `# .platform/services.yaml
varnish:
type: varnish:6.0
relationships:
application:'app:http'
configuration:
vcl: !include
type: string
path: config.vcl` },
        { type: "code", filename: ".platform/routes.yaml", language: "yaml", code: `# .platform/routes.yaml
"https://{all}/":{type: upstream,upstream:"varnish:http",cache:{enabled:false}}` },
        { type: "h", text: "21.9 Activer le support ESI sur Varnish" },
        { type: "code", filename: ".platform/config.vcl", language: "text", code: `# .platform/config.vcl
sub vcl_recv {
    set req.backend_hint = application.backend();
    set req.http.Surrogate-Capability = "abc=ESI/1.0";
}
sub vcl_backend_response {
    if (beresp.http.Surrogate-Control ~ "ESI/1.0") {
        unset beresp.http.Surrogate-Control;
        set beresp.do_esi = true;
    }
}` },
        { type: "h", text: "21.10 Purger le cache de Varnish" },
        { type: "code", filename: ".platform/config.vcl", language: "text", code: `# .platform/config.vcl
sub vcl_recv {
    if (req.method == "PURGE") {
        if (req.http.x-purge-token != "PURGE_NOW") {
            return(synth(405));
        }
        return (purge);
    }
}` },
        { type: "code", filename: "terminal", language: "bash", code: `curl -X PURGE -H 'x-purge-token: PURGE_NOW' \`symfony cloud:env:url --pipe --primary\`
curl -X PURGE -H 'x-purge-token: PURGE_NOW' \`symfony cloud:env:url --pipe --primary\`conference_header` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Cloudflare",
          "Documentation du cache HTTP de Varnish",
          "Spécifications ESI",
          "Modèle de validation de cache HTTP",
          "Cache HTTP dans Platform.sh",
        ]},
      ],
    },

    // ── ÉTAPE 22 ─────────────────────────────────────────────────────────
    {
      id: "etape-22-webpack",
      title: "Étape 22 — Styliser l'interface avec Webpack",
      blocks: [
        { type: "h", text: "Installer Webpack Encore" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer rem asset-mapper
symfony composer req encore` },
        { type: "h", text: "22.1 Utiliser Sass" },
        { type: "code", filename: "terminal", language: "bash", code: `mv assets/styles/app.css assets/styles/app.scss
npm install node-sass sass-loader@13 --save-dev` },
        { type: "code", filename: "webpack.config.js", language: "javascript", code: `// webpack.config.js (extrait)
.enableSassLoader()` },
        { type: "code", filename: "assets/app.js", language: "javascript", code: `// assets/app.js
import './styles/app.scss';` },
        { type: "h", text: "22.2 Tirer parti de Bootstrap" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install bootstrap @popperjs/core bs-custom-file-input --save-dev` },
        { type: "code", filename: "assets/styles/app.scss", language: "scss", code: `// assets/styles/app.scss
@import '~bootstrap/scss/bootstrap';` },
        { type: "code", filename: "assets/app.js", language: "javascript", code: `// assets/app.js
import 'bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';
bsCustomFileInput.init();` },
        { type: "p", text: "Activer le thème Bootstrap pour les formulaires :" },
        { type: "code", filename: "config/packages/twig.yaml", language: "yaml", code: `# config/packages/twig.yaml
twig:
form_themes:['bootstrap_5_layout.html.twig']` },
        { type: "h", text: "22.3 Styliser le HTML" },
        { type: "code", filename: "terminal", language: "bash", code: `# Télécharger et extraire l'archive de styles
php -r "copy('https://symfony.com/uploads/assets/guestbook-6.4.zip', 'guestbook-6.4.zip');"
unzip -o guestbook-6.4.zip
rm guestbook-6.4.zip` },
        { type: "h", text: "22.4 Générer les assets" },
        { type: "code", filename: "terminal", language: "bash", code: `# Compiler les assets (développement)
symfony run npm run dev

# Surveiller les changements en arrière-plan
symfony run -d npm run watch` },
        { type: "p", text: "En production, Platform.sh détecte automatiquement Encore et compile les ressources pendant la phase de build." },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Documentation Webpack",
          "Documentation Symfony Webpack Encore",
          "Tutoriel SymfonyCasts sur Webpack Encore",
        ]},
      ],
    },

    // ── ÉTAPE 23 ─────────────────────────────────────────────────────────
    {
      id: "etape-23-redimensionner-images",
      title: "Étape 23 — Redimensionner des images",
      blocks: [
        { type: "h", text: "Mise à jour du workflow" },
        { type: "p", text: "Ajouter l'état ready et la transition optimize dans config/packages/workflow.yaml :" },
        { type: "code", filename: "config/packages/workflow.yaml", language: "yaml", code: `places:
- submitted
- ham
- potential_spam
- spam
- rejected
- ready       # ← nouveau
- published
transitions:
    # ...
publish:
from: potential_spam
to: ready     # ← modifié (était 'published')
publish_ham:
from: ham
to: ready     # ← modifié (était 'published')
optimize:
from: ready
to: published` },
        { type: "h", text: "23.1 Optimiser les images avec Imagine" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req "imagine/imagine:^1.2"` },
        { type: "code", filename: "src/ImageOptimizer.php", language: "php", code: `// src/ImageOptimizer.php
namespace App;

use Imagine\\Gd\\Imagine;
use Imagine\\Image\\Box;

class ImageOptimizer
{
    private const MAX_WIDTH = 200;
    private const MAX_HEIGHT = 150;
    private Imagine $imagine;

    public function __construct()
    {
        $this->imagine = new Imagine();
    }

    public function resize(string $filename): void
    {
        [$iwidth, $iheight] = getimagesize($filename);
        $ratio = $iwidth / $iheight;
        $width = self::MAX_WIDTH;
        $height = self::MAX_HEIGHT;

        if ($iwidth > $iheight) {
            $height = $width / $ratio;
        } else {
            $width = $height * $ratio;
        }

        $photo = $this->imagine->open($filename);
        $photo->resize(new Box($width, $height))->save($filename);
    }
}` },
        { type: "h", text: "23.2 Ajouter une nouvelle étape au workflow" },
        { type: "p", text: "Dans le gestionnaire de messages, ajouter le traitement de la transition optimize :" },
        { type: "code", filename: "php", language: "php", code: `} elseif ($this->commentStateMachine->can($comment, 'optimize')) {
    if ($comment->getPhotoFilename()) {
        $this->imageOptimizer->resize($this->photoDir.'/'.$comment->getPhotoFilename());
    }
    $this->commentStateMachine->apply($comment, 'optimize');
    $this->entityManager->flush();
    $notification = new CommentReviewNotification($comment, $message->getReviewUrl());
    $this->notifier->send($notification, ...$this->notifier->getAdminRecipients());
}` },
        { type: "h", text: "23.3 Enregistrer des données uploadées en production" },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
mounts:
"/var":{source: local,source_path: var}
"/public/uploads":{source: local,source_path: uploads}` },
      ],
    },

    // ── ÉTAPE 24 ─────────────────────────────────────────────────────────
    {
      id: "etape-24-crons",
      title: "Étape 24 — Exécuter des crons",
      blocks: [
        { type: "h", text: "24.1 Nettoyer les commentaires" },
        { type: "p", text: "Méthodes dans CommentRepository :" },
        { type: "code", filename: "src/Repository/CommentRepository.php", language: "php", code: `private const DAYS_BEFORE_REJECTED_REMOVAL = 7;

public function countOldRejected(): int
{
    return $this->getOldRejectedQueryBuilder()->select('COUNT(c.id)')->getQuery()->getSingleScalarResult();
}

public function deleteOldRejected(): int
{
    return $this->getOldRejectedQueryBuilder()->delete()->getQuery()->execute();
}

private function getOldRejectedQueryBuilder(): QueryBuilder
{
    return $this->createQueryBuilder('c')
        ->andWhere('c.state = :state_rejected or c.state = :state_spam')
        ->andWhere('c.createdAt < :date')
        ->setParameter('state_rejected', 'rejected')
        ->setParameter('state_spam', 'spam')
        ->setParameter('date', new \\DateTimeImmutable(self::DAYS_BEFORE_REJECTED_REMOVAL.' days'))
    ;
}` },
        { type: "h", text: "24.2 Utiliser des constantes de classe, des paramètres de conteneur et des variables d'environnement" },
        { type: "p", text: "Règles de base :" },
        { type: "list", items: [
          "Données sensibles (mots de passe, jetons API) → stockage de chaîne secrète ou Vault",
          "Valeurs dynamiques (modifiables sans redéploiement) → variable d'environnement",
          "Valeurs différentes selon l'environnement → paramètre de conteneur",
          "Tout le reste → constante de classe",
        ]},
        { type: "h", text: "24.3 Créer une commande de console" },
        { type: "code", filename: "src/Command/CommentCleanupCommand.php", language: "php", code: `// src/Command/CommentCleanupCommand.php
namespace App\\Command;

use App\\Repository\\CommentRepository;
use Symfony\\Component\\Console\\Attribute\\AsCommand;
use Symfony\\Component\\Console\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Input\\InputOption;
use Symfony\\Component\\Console\\Output\\OutputInterface;
use Symfony\\Component\\Console\\Style\\SymfonyStyle;

#[AsCommand('app:comment:cleanup', 'Deletes rejected and spam comments from the database')]
class CommentCleanupCommand extends Command
{
    public function __construct(
        private CommentRepository $commentRepository,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addOption('dry-run', null, InputOption::VALUE_NONE, 'Dry run');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        if ($input->getOption('dry-run')) {
            $io->note('Dry mode enabled');
            $count = $this->commentRepository->countOldRejected();
        } else {
            $count = $this->commentRepository->deleteOldRejected();
        }

        $io->success(sprintf('Deleted "%d" old rejected/spam comments.', $count));
        return Command::SUCCESS;
    }
}` },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console app:comment:cleanup
symfony console app:comment:cleanup --dry-run` },
        { type: "h", text: "24.4 Configurer un cron sur Platform.sh" },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
crons:
comment_cleanup:
spec:'50 23 * * *'
        cmd:|
            if [ "$PLATFORM_ENVIRONMENT_TYPE" = "production" ]; then
                croncape symfony console app:comment:cleanup
            fi` },
        { type: "code", filename: "terminal", language: "bash", code: `# Configurer MAILTO pour les notifications d'erreur
symfony cloud:variable:create --sensitive=1 --level=project -y --name=env:MAILTO --value=ops@example.com` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Syntaxe cron/crontab",
          "Dépôt de croncape",
          "Commandes de la console Symfony",
          "La cheat sheet de la console Symfony",
        ]},
      ],
    },

    // ── ÉTAPE 25 ─────────────────────────────────────────────────────────
    {
      id: "etape-25-notifier",
      title: "Étape 25 — Notifier à tout prix",
      blocks: [
        { type: "h", text: "25.1 Envoyer des notifications d'application web dans le navigateur" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// src/Controller/ConferenceController.php
use Symfony\\Component\\Notifier\\Notification\\Notification;
use Symfony\\Component\\Notifier\\NotifierInterface;

public function show(
    Request $request,
    Conference $conference,
    CommentRepository $commentRepository,
    NotifierInterface $notifier,
    #[Autowire('%photo_dir%')] string $photoDir,
): Response {
    // ...
    if ($form->isSubmitted() && $form->isValid()) {
        // ...
        $notifier->send(new Notification('Thank you for the feedback; your comment will be posted after moderation.', ['browser']));
        return $this->redirectToRoute('conference', ['slug' => $conference->getSlug()]);
    }

    if ($form->isSubmitted()) {
        $notifier->send(new Notification('Can you check your submission? There are some problems with it.', ['browser']));
    }
    // ...
}` },
        { type: "code", filename: "templates/conference/show.html.twig", language: "twig", code: `{# templates/conference/show.html.twig #}
{% for message in app.flashes('notification') %}
    <div class="alert alert-info alert-dismissible fade show">
        {{ message }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{% endfor %}` },
        { type: "h", text: "25.2 Notifier les admins par email" },
        { type: "p", text: "Créer la classe de notification :" },
        { type: "code", filename: "src/Notification/CommentReviewNotification.php", language: "php", code: `// src/Notification/CommentReviewNotification.php
namespace App\\Notification;

use App\\Entity\\Comment;
use Symfony\\Component\\Notifier\\Message\\EmailMessage;
use Symfony\\Component\\Notifier\\Notification\\EmailNotificationInterface;
use Symfony\\Component\\Notifier\\Notification\\Notification;
use Symfony\\Component\\Notifier\\Recipient\\EmailRecipientInterface;
use Symfony\\Component\\Notifier\\Recipient\\RecipientInterface;

class CommentReviewNotification extends Notification implements EmailNotificationInterface
{
    public function __construct(
        private Comment $comment,
        private string $reviewUrl,
    ) {
        parent::__construct('New comment posted');
    }

    public function asEmailMessage(EmailRecipientInterface $recipient, string $transport = null): ?EmailMessage
    {
        $message = EmailMessage::fromNotification($this, $recipient, $transport);
        $message->getMessage()
            ->htmlTemplate('emails/comment_notification.html.twig')
            ->context(['comment' => $this->comment])
        ;
        return $message;
    }

    public function getChannels(RecipientInterface $recipient): array
    {
        if (preg_match('{\\b(great|awesome)\\b}i', $this->comment->getText())) {
            return ['email', 'chat/slack'];
        }
        $this->importance(Notification::IMPORTANCE_LOW);
        return ['email'];
    }
}` },
        { type: "code", filename: "config/packages/notifier.yaml", language: "yaml", code: `# config/packages/notifier.yaml
framework:
notifier:
channel_policy:
urgent:['email']
high:['email']
medium:['email']
low:['email']
admin_recipients:
-{email:"%env(string:default:default_admin_email:ADMIN_EMAIL)%"}` },
        { type: "h", text: "25.3 Discuter avec les admins (Slack)" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req slack-notifier` },
        { type: "code", filename: "terminal", language: "bash", code: `# Stocker le DSN Slack comme secret
symfony console secrets:set SLACK_DSN
symfony console secrets:set SLACK_DSN --env=prod` },
        { type: "p", text: "Format DSN : slack://ACCESS_TOKEN@default?channel=CHANNEL" },
        { type: "p", text: "Personnalisation du message Slack :" },
        { type: "code", filename: "php", language: "php", code: `use Symfony\\Component\\Notifier\\Bridge\\Slack\\Block\\SlackActionsBlock;
use Symfony\\Component\\Notifier\\Bridge\\Slack\\Block\\SlackDividerBlock;
use Symfony\\Component\\Notifier\\Bridge\\Slack\\Block\\SlackSectionBlock;
use Symfony\\Component\\Notifier\\Bridge\\Slack\\SlackOptions;
use Symfony\\Component\\Notifier\\Message\\ChatMessage;
use Symfony\\Component\\Notifier\\Notification\\ChatNotificationInterface;

class CommentReviewNotification extends Notification implements EmailNotificationInterface, ChatNotificationInterface
{
    public function asChatMessage(RecipientInterface $recipient, string $transport = null): ?ChatMessage
    {
        if ('slack' !== $transport) {
            return null;
        }

        $message = ChatMessage::fromNotification($this, $recipient, $transport);
        $message->subject($this->getSubject());
        $message->options((new SlackOptions())
            ->iconEmoji('tada')
            ->username('Guestbook')
            ->block((new SlackSectionBlock())->text($this->getSubject()))
            ->block(new SlackDividerBlock())
            ->block((new SlackSectionBlock())
                ->text(sprintf('%s (%s) says: %s', $this->comment->getAuthor(), $this->comment->getEmail(), $this->comment->getText()))
            )
            ->block((new SlackActionsBlock())
                ->button('Accept', $this->reviewUrl, 'primary')
                ->button('Reject', $this->reviewUrl.'?reject=1', 'danger')
            )
        );

        return $message;
    }
}` },
        { type: "h", text: "25.4 Utiliser le mode asynchrone" },
        { type: "code", filename: "config/packages/messenger.yaml", language: "yaml", code: `# config/packages/messenger.yaml
framework:
messenger:
routing:
Symfony\\Component\\Mailer\\Messenger\\SendEmailMessage: async
Symfony\\Component\\Notifier\\Message\\ChatMessage: async
Symfony\\Component\\Notifier\\Message\\SmsMessage: async
App\\Message\\CommentMessage: async` },
        { type: "h", text: "25.5 Notifier les internautes par email" },
        { type: "p", text: "Implémenter la notification de publication d'un commentaire (à coder)." },
      ],
    },

    // ── ÉTAPE 26 ─────────────────────────────────────────────────────────
    {
      id: "etape-26-api-platform",
      title: "Étape 26 — Exposer une API avec API Platform",
      blocks: [
        { type: "h", text: "26.1 Installer API Platform" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req api` },
        { type: "h", text: "26.2 Exposer une API pour les conférences" },
        { type: "code", filename: "src/Entity/Conference.php", language: "php", code: `// src/Entity/Conference.php
use ApiPlatform\\Metadata\\ApiResource;
use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\GetCollection;
use Symfony\\Component\\Serializer\\Attribute\\Groups;

#[ORM\\Entity(repositoryClass: ConferenceRepository::class)]
#[UniqueEntity('slug')]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'conference:item']),
        new GetCollection(normalizationContext: ['groups' => 'conference:list']),
    ],
    order: ['year' => 'DESC', 'city' => 'ASC'],
    paginationEnabled: false,
)]
class Conference
{
    #[Groups(['conference:list', 'conference:item'])]
    private ?int $id = null;

    #[Groups(['conference:list', 'conference:item'])]
    private ?string $city = null;

    #[Groups(['conference:list', 'conference:item'])]
    private ?string $year = null;

    #[Groups(['conference:list', 'conference:item'])]
    private ?bool $isInternational = null;

    #[Groups(['conference:list', 'conference:item'])]
    private ?string $slug = null;
    // ...
}` },
        { type: "h", text: "26.3 Exposer une API pour les commentaires" },
        { type: "code", filename: "src/Entity/Comment.php", language: "php", code: `// src/Entity/Comment.php
use ApiPlatform\\Doctrine\\Orm\\Filter\\SearchFilter;
use ApiPlatform\\Metadata\\ApiFilter;
use ApiPlatform\\Metadata\\ApiResource;

#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'comment:item']),
        new GetCollection(normalizationContext: ['groups' => 'comment:list']),
    ],
    order: ['createdAt' => 'DESC'],
    paginationEnabled: false,
)]
#[ApiFilter(SearchFilter::class, properties: ['conference' => 'exact'])]
class Comment { /* ... */ }` },
        { type: "h", text: "26.4 Filtrer les commentaires exposés par l'API" },
        { type: "code", filename: "src/Api/FilterPublishedCommentQueryExtension.php", language: "php", code: `// src/Api/FilterPublishedCommentQueryExtension.php
namespace App\\Api;

use ApiPlatform\\Doctrine\\Orm\\Extension\\QueryCollectionExtensionInterface;
use ApiPlatform\\Doctrine\\Orm\\Extension\\QueryItemExtensionInterface;
use App\\Entity\\Comment;
use Doctrine\\ORM\\QueryBuilder;

class FilterPublishedCommentQueryExtension implements QueryCollectionExtensionInterface, QueryItemExtensionInterface
{
    public function applyToCollection(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, Operation $operation = null, array $context = []): void
    {
        if (Comment::class === $resourceClass) {
            $queryBuilder->andWhere(sprintf("%s.state = 'published'", $queryBuilder->getRootAliases()[0]));
        }
    }

    public function applyToItem(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, array $identifiers, Operation $operation = null, array $context = []): void
    {
        if (Comment::class === $resourceClass) {
            $queryBuilder->andWhere(sprintf("%s.state = 'published'", $queryBuilder->getRootAliases()[0]));
        }
    }
}` },
        { type: "h", text: "26.5 Configurer le CORS" },
        { type: "code", filename: ".env", language: "text", code: `# .env
CORS_ALLOW_ORIGIN='^https?://(localhost|127\\.0\\.0\\.1)(:[0-9]+)?$'` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Tutoriel SymfonyCasts sur API Platform",
          "Pour GraphQL : composer require webonyx/graphql-php puis /api/graphql",
        ]},
      ],
    },

    // ── ÉTAPE 27 ─────────────────────────────────────────────────────────
    {
      id: "etape-27-spa",
      title: "Étape 27 — Créer une SPA (Single Page Application)",
      blocks: [
        { type: "h", text: "27.1 Créer l'application" },
        { type: "code", filename: "terminal", language: "bash", code: `mkdir -p spa/src spa/public spa/assets/styles
cp assets/styles/*.scss spa/assets/styles/
cd spa

# .gitignore
cat > .gitignore << 'EOF'
/node_modules/
/public/
/npm-debug.log
/app/
EOF

npm init -y
npm install @symfony/webpack-encore @babel/core @babel/preset-env babel-preset-preact preact html-webpack-plugin bootstrap` },
        { type: "code", filename: "spa/webpack.config.js", language: "javascript", code: `// spa/webpack.config.js
const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

Encore
    .setOutputPath('public/')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .addEntry('app', './src/app.js')
    .enablePreactPreset()
    .enableSassLoader()
    .enableSingleRuntimeChunk()
    .addPlugin(new HtmlWebpackPlugin({ template: 'src/index.ejs', alwaysWriteToDisk: true }))
    .addPlugin(new webpack.DefinePlugin({
        'ENV_API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
    }))
;
module.exports = Encore.getWebpackConfig();` },
        { type: "h", text: "27.2 Créer le template principal de la SPA" },
        { type: "code", filename: "spa/src/index.ejs", language: "html", code: `<!-- spa/src/index.ejs -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"/>
    <title>Conference Guestbook application</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>` },
        { type: "h", text: "27.3 Exécuter la SPA dans le navigateur web" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony server:start -d --passthru=index.html
./node_modules/.bin/encore dev
symfony open:local` },
        { type: "h", text: "27.4 Ajouter un routeur pour gérer les états" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install preact-router` },
        { type: "code", filename: "spa/src/app.js", language: "javascript", code: `// spa/src/app.js
import '../assets/styles/app.scss';
import {h, render} from 'preact';
import {Router, Link} from 'preact-router';
import {useState, useEffect} from 'preact/hooks';
import {findConferences} from './api/api';
import Home from './pages/home';
import Conference from './pages/conference';

function App() {
    const [conferences, setConferences] = useState(null);
    useEffect(() => {
        findConferences().then((conferences) => setConferences(conferences));
    }, []);

    if (conferences === null) {
        return <div className="text-center pt-5">Loading...</div>;
    }

    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand mr-4 pr-2" href="/">&#128217; Guestbook</Link>
                    </div>
                </nav>
                <nav className="bg-light border-bottom text-center">
                    {conferences.map((conference) => (
                        <Link className="nav-conference" href={'/conference/'+conference.slug}>
                            {conference.city} {conference.year}
                        </Link>
                    ))}
                </nav>
            </header>
            <Router>
                <Home path="/" conferences={conferences} />
                <Conference path="/conference/:slug" conferences={conferences} />
            </Router>
        </div>
    );
}
render(<App />, document.getElementById('app'));` },
        { type: "h", text: "27.6 Récupérer les données depuis l'API" },
        { type: "code", filename: "spa/src/api/api.js", language: "javascript", code: `// spa/src/api/api.js
function fetchCollection(path) {
    return fetch(ENV_API_ENDPOINT + path).then(resp => resp.json()).then(json => json['hydra:member']);
}

export function findConferences() {
    return fetchCollection('api/conferences');
}

export function findComments(conference) {
    return fetchCollection('api/comments?conference='+conference.id);
}` },
        { type: "code", filename: "spa/src/pages/home.js", language: "javascript", code: `// spa/src/pages/home.js
import {h} from 'preact';
import {Link} from 'preact-router';

export default function Home({conferences}) {
    if (!conferences) {
        return <div className="p-3 text-center">No conferences yet</div>;
    }
    return (
        <div className="p-3">
            {conferences.map((conference) => (
                <div className="card border shadow-sm lift mb-3">
                    <div className="card-body">
                        <div className="card-title">
                            <h4 className="font-weight-light">{conference.city} {conference.year}</h4>
                        </div>
                        <Link className="btn btn-sm btn-primary stretched-link" href={'/conference/'+conference.slug}>View</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}` },
        { type: "code", filename: "spa/src/pages/conference.js", language: "javascript", code: `// spa/src/pages/conference.js
import {h} from 'preact';
import {findComments} from '../api/api';
import {useState, useEffect} from 'preact/hooks';

function Comment({comments}) {
    if (comments !== null && comments.length === 0) {
        return <div className="text-center pt-4">No comments yet</div>;
    }
    if (!comments) {
        return <div className="text-center pt-4">Loading...</div>;
    }
    return (
        <div className="pt-4">
            {comments.map(comment => (
                <div className="shadow border rounded-3 p-3 mb-4">
                    <h5 className="font-weight-light mt-3 mb-0">{comment.author}</h5>
                    <div className="comment-text">{comment.text}</div>
                </div>
            ))}
        </div>
    );
}

export default function Conference({conferences, slug}) {
    const conference = conferences.find(conference => conference.slug === slug);
    const [comments, setComments] = useState(null);
    useEffect(() => {
        findComments(conference).then(comments => setComments(comments));
    }, [slug]);

    return (
        <div className="p-3">
            <h4>{conference.city} {conference.year}</h4>
            <Comment comments={comments} />
        </div>
    );
}` },
        { type: "code", filename: "terminal", language: "bash", code: `# Lancer avec le bon endpoint API
API_ENDPOINT=\`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL --dir=..\` ./node_modules/.bin/encore dev` },
        { type: "h", text: "27.7 Déployer la SPA en production" },
        { type: "code", filename: "spa/.platform.app.yaml", language: "yaml", code: `# spa/.platform.app.yaml
name: spa
type: nodejs:18
web:
commands:
start: sleep
locations:
"/":
root:"public"
index:["index.html"]
scripts:false
expires: 10m
hooks:
    build:|
        set -x -e
        curl -fs https://get.symfony.com/cloud/configurator | bash
        NODE_VERSION=18 node-build` },
        { type: "code", filename: ".platform/routes.yaml", language: "yaml", code: `# .platform/routes.yaml
"https://spa.{all}/":{type: upstream,upstream:"spa:http"}
"http://spa.{all}/":{type: redirect,to:"https://spa.{all}/"}` },
        { type: "h", text: "27.8 Configurer CORS pour la SPA" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony cloud:variable:create --sensitive=1 --level=project -y --name=env:CORS_ALLOW_ORIGIN \\
    --value="^\`symfony cloud:env:url --pipe --primary | sed 's#/$##' | sed 's#https://#https://spa.#'\`$"

symfony cloud:variable:create --sensitive=1 --level=project -y --name=env:API_ENDPOINT \\
    --value=\`symfony cloud:env:url --pipe --primary\`` },
        { type: "h", text: "27.9 Utiliser Cordova pour construire une application mobile" },
        { type: "code", filename: "terminal", language: "bash", code: `cd spa
npm install cordova
./node_modules/.bin/cordova create app
cd app
~/.npm/bin/cordova platform add android
cd ..

# Compiler et lancer sur Android
API_ENDPOINT=\`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL --dir=..\` ./node_modules/.bin/encore production
rm -rf app/www && mkdir -p app/www && cp -R public/ app/www
./node_modules/.bin/cordova run android` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: ["Le site officiel de Preact", "Le site officiel de Cordova"] },
      ],
    },

    // ── ÉTAPE 28 ─────────────────────────────────────────────────────────
    {
      id: "etape-28-localisation",
      title: "Étape 28 — Localiser une application",
      blocks: [
        { type: "h", text: "28.1 Internationaliser des URLs" },
        { type: "code", filename: "src/Controller/ConferenceController.php", language: "php", code: `// src/Controller/ConferenceController.php
#[Route('/')]
public function indexNoLocale(): Response
{
    return $this->redirectToRoute('homepage', ['_locale' => 'en']);
}

#[Route('/{_locale<%app.supported_locales%>}/', name: 'homepage')]
public function index(ConferenceRepository $conferenceRepository): Response
{ /* ... */ }

#[Route('/{_locale<%app.supported_locales%>}/conference_header', name: 'conference_header')]
public function conferenceHeader(/* ... */): Response
{ /* ... */ }

#[Route('/{_locale<%app.supported_locales%>}/conference/{slug}', name: 'conference')]
public function show(/* ... */): Response
{ /* ... */ }` },
        { type: "code", filename: "config/services.yaml", language: "yaml", code: `# config/services.yaml
parameters:
app.supported_locales:'en|fr'` },
        { type: "h", text: "28.2 Ajouter un sélecteur de locale" },
        { type: "code", filename: "templates/base.html.twig", language: "twig", code: `{# templates/base.html.twig #}
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
        {{ app.request.locale|locale_name(app.request.locale)|u.title }}
    </a>
    <ul class="dropdown-menu dropdown-menu-right">
        <li><a class="dropdown-item" href="{{ path('homepage', {_locale: 'en'}) }}">English</a></li>
        <li><a class="dropdown-item" href="{{ path('homepage', {_locale: 'fr'}) }}">Français</a></li>
    </ul>
</li>` },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req twig/string-extra` },
        { type: "h", text: "28.3 Traduire l'interface" },
        { type: "code", filename: "twig", language: "twig", code: `{# Utiliser le filtre trans #}
{{ 'Conference Guestbook'|trans }}
{{ 'Give your feedback!'|trans }}
{{ 'View'|trans }}` },
        { type: "p", text: "Configuration dans config/packages/translation.yaml :" },
        { type: "code", filename: "config/packages/translation.yaml", language: "yaml", code: `framework:
default_locale: en
translator:
default_path:'%kernel.project_dir%/translations'
fallbacks:
- en` },
        { type: "h", text: "28.4 Fournir des traductions" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console translation:extract fr --force --domain=messages` },
        { type: "p", text: "Éditer translations/messages+intl-icu.fr.xlf :" },
        { type: "code", filename: "translations/messages+intl-icu.fr.xlf", language: "xml", code: `<trans-unit id="eOy4.6V" resname="Conference Guestbook">
    <source>Conference Guestbook</source>
    <target>Livre d'Or pour Conferences</target>
</trans-unit>
<trans-unit id="LNAVleg" resname="Give your feedback!">
    <source>Give your feedback!</source>
    <target>Donnez votre avis !</target>
</trans-unit>
<trans-unit id="3Mg5pAF" resname="View">
    <source>View</source>
    <target>Sélectionner</target>
</trans-unit>` },
        { type: "h", text: "28.5 Traduire des formulaires" },
        { type: "p", text: "Les labels des formulaires sont automatiquement traduits via le système de traduction. Onglet \"Translation\" de la web debug toolbar pour voir les messages à traduire." },
        { type: "h", text: "28.6 Localiser des dates" },
        { type: "code", filename: "twig", language: "twig", code: `{# Le filtre format_datetime tient compte de la locale automatiquement #}
{{ comment.createdAt|format_datetime('medium', 'short') }}` },
        { type: "p", text: "Fonctionne aussi pour les heures (format_time), les devises (format_currency) et les nombres (format_number)." },
        { type: "h", text: "28.7 Traduire des pluriels" },
        { type: "code", filename: "templates/conference/show.html.twig", language: "twig", code: `{# templates/conference/show.html.twig #}
<div>{{ 'nb_of_comments'|trans({count: comments|length}) }}</div>` },
        { type: "code", filename: "translations/messages+intl-icu.fr.xlf", language: "xml", code: `<!-- translations/messages+intl-icu.fr.xlf -->
<trans-unit id="Dg2dPd6" resname="nb_of_comments">
    <source>nb_of_comments</source>
    <target>{count, plural, =0 {Aucun commentaire.} =1 {1 commentaire.} other {# commentaires.}}</target>
</trans-unit>` },
        { type: "code", filename: "translations/messages+intl-icu.en.xlf", language: "xml", code: `<!-- translations/messages+intl-icu.en.xlf -->
<trans-unit id="maMQz7W" resname="nb_of_comments">
    <source>nb_of_comments</source>
    <target>{count, plural, =0 {There are no comments.} one {There is one comment.} other {There are # comments.}}</target>
</trans-unit>` },
        { type: "h", text: "28.8 Mettre à jour les tests fonctionnels" },
        { type: "code", filename: "php", language: "php", code: `// Utiliser /en/ au lieu de /
$client->request('GET', '/en/');
$client->request('GET', '/en/conference/amsterdam-2019');
$this->assertSelectorExists('div:contains("There is one comment")');` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Traduire des messages à l'aide du formateur ICU",
          "Utiliser les filtres de traduction Twig",
        ]},
      ],
    },

    // ── ÉTAPE 29 ─────────────────────────────────────────────────────────
    {
      id: "etape-29-performances",
      title: "Étape 29 — Gérer les performances",
      blocks: [
        { type: "note", variant: "info", text: "« Nous devrions éviter les économies de bout de chandelles dans 97% des cas : l'optimisation prématurée est la racine de tous les maux. Pour autant, nous ne devrions pas ignorer ces occasions dans ces 3% cruciaux. » — Donald Knuth" },
        { type: "h", text: "29.1 Découvrir Blackfire" },
        { type: "p", text: "Blackfire se compose de :" },
        { type: "list", items: [
          "Client : outil Blackfire CLI ou extension de navigateur (Chrome/Firefox)",
          "Agent : prépare et agrège les données avant envoi à blackfire.io",
          "Sonde PHP : analyse le code PHP",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `# Installer Blackfire
curl https://installer.blackfire.io/installer.sh | bash
sudo blackfire php:install` },
        { type: "code", filename: "php.ini", language: "ini", code: `# php.ini
[blackfire]
extension=blackfire.so` },
        { type: "code", filename: "terminal", language: "bash", code: `# Configurer les identifiants
blackfire client:config --client-id=xxx --client-token=xxx

# Redémarrer le serveur web
symfony server:stop
symfony server:start -d` },
        { type: "h", text: "29.2 Configurer l'agent Blackfire sur Docker" },
        { type: "code", filename: "compose.override.yaml", language: "yaml", code: `# compose.override.yaml
blackfire:
image: blackfire/blackfire:2
environment:
BLACKFIRE_LOG_LEVEL:4
ports:[8307]` },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console secrets:set BLACKFIRE_SERVER_ID
symfony console secrets:set BLACKFIRE_SERVER_TOKEN
docker compose stop && docker compose up -d` },
        { type: "h", text: "29.3 Réparer une installation Blackfire en panne" },
        { type: "code", filename: "php.ini", language: "ini", code: `# php.ini
[blackfire]
extension=blackfire.so
blackfire.log_level=4` },
        { type: "code", filename: "terminal", language: "bash", code: `symfony server:stop && symfony server:start -d
symfony server:log` },
        { type: "h", text: "29.4 Configurer Blackfire en production" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony console secrets:set BLACKFIRE_SERVER_ID --env=prod
symfony console secrets:set BLACKFIRE_SERVER_TOKEN --env=prod` },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
runtime:
extensions:
- blackfire
- apcu
        # ...` },
        { type: "h", text: "29.5 Configurer Varnish pour Blackfire" },
        { type: "code", filename: ".platform/config.vcl", language: "text", code: `# .platform/config.vcl
acl profile {
    "192.168.0.1";     # Votre IP locale
    "46.51.168.2";     # Serveurs Blackfire
    "54.75.240.245";
}

sub vcl_recv {
    # ...
    if (req.esi_level > 0) {
        unset req.http.X-Blackfire-Query;
    }
    if (req.http.X-Blackfire-Query && client.ip ~ profile) {
        return (pass);
    }
}` },
        { type: "h", text: "29.6 Profiler les pages web" },
        { type: "code", filename: "terminal", language: "bash", code: `# Profiler via CLI
blackfire curl \`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\`en/
blackfire curl \`symfony cloud:env:url --pipe --primary\`en/

# Basculer en environnement prod pour profiler
APP_ENV=prod    # dans .env.local
symfony server:prod       # ou
symfony server:prod --off  # pour revenir à dev` },
        { type: "h", text: "29.7 Profiler les ressources de l'API" },
        { type: "code", filename: "terminal", language: "bash", code: `blackfire curl \`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\`api` },
        { type: "h", text: "29.8 Comparer les performances" },
        { type: "p", text: "Blackfire fournit une fonction de comparaison des profils." },
        { type: "h", text: "29.9 Écrire les tests fonctionnels de boîte noire" },
        { type: "code", filename: ".blackfire.yaml", language: "yaml", code: `# .blackfire.yaml
scenarios:|
    #!blackfire-player
    group login
        visit url('/login')
        submit button("Sign in")
            param username "admin"
            param password "admin"
        expect status_code() == 302

    scenario
        name "Submit a comment on the Amsterdam conference page"
        include login
        visit url('/fr/conference/amsterdam-2019')
        expect status_code() == 200
        submit button("Submit")
            param comment[author] 'Fabien'
            param comment[email] 'me@example.com'
            param comment[text] 'Such a good conference!'
        expect status_code() == 302
        follow
        expect status_code() == 200
        expect not(body() matches "/Such a good conference/")
        wait 5000
        # ...
        visit url('/fr/')
        wait 5000
        visit url('/fr/conference/amsterdam-2019')
        expect body() matches "/Such a good conference/"` },
        { type: "code", filename: "terminal", language: "bash", code: `# Installer et exécuter Blackfire Player
curl -OLsS https://get.blackfire.io/blackfire-player.phar
chmod +x blackfire-player.phar

# En développement
./blackfire-player.phar run --endpoint=\`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\` .blackfire.yaml --variable "webmail_url=\`symfony var:export MAILER_WEB_URL 2>/dev/null\`" --variable="env=dev" -vv

# En production
./blackfire-player.phar run --endpoint=\`symfony cloud:env:url --pipe --primary\` .blackfire.yaml --variable "webmail_url=NONE" --variable="env=prod" -vv` },
        { type: "h", text: "29.10 Automatiser les contrôles de performance" },
        { type: "p", text: "Platform.sh peut exécuter les scénarios à chaque déploiement ou création de branche." },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "Le livre Blackfire : PHP Code Performance Explained",
          "Tutoriel SymfonyCasts sur Blackfire",
        ]},
      ],
    },

    // ── ÉTAPE 30 ─────────────────────────────────────────────────────────
    {
      id: "etape-30-coeur-symfony",
      title: "Étape 30 — Voyager au cœur de Symfony",
      blocks: [
        { type: "h", text: "30.1 Comprendre le fonctionnement interne de Symfony avec Blackfire" },
        { type: "code", filename: "terminal", language: "bash", code: `# Profiler en production
symfony remote:open
blackfire curl \`symfony cloud:env:url --pipe --primary\`en/

# Profiler en local
blackfire curl \`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\`en/` },
        { type: "p", text: "Ce que la timeline Blackfire révèle :" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│         FLUX D'EXÉCUTION SYMFONY (via Blackfire)            │
│                                                             │
│  public/index.php                                           │
│      │                                                      │
│  Kernel::handle()                                           │
│      │                                                      │
│  HttpKernel → envoi d'événements                           │
│      │                                                      │
│  RequestEvent                                               │
│      │                                                      │
│  ControllerResolver::getController()                        │
│      │                                                      │
│  ControllerResolver::getArguments()                         │
│      │ (param converter)                                     │
│      │                                                      │
│  ConferenceController::index()                              │
│      │                                                      │
│  ConferenceRepository::findAll()  ←── PDO::__construct()   │
│      │                                                      │
│  Twig\\Environment::render()                                 │
│      │                                                      │
│  ResponseEvent + FinishRequestEvent                         │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Différences dev vs prod :" },
        { type: "list", items: [
          "En dev : TerminateEvent prend un grand pourcentage du temps (stockage des données pour le profileur)",
          "En dev : SubRequestHandler::handle() visible pour l'ESI",
          "En prod : HttpCache\\Store::restoreResponse() si la page est dans le cache",
        ]},
        { type: "h", text: "30.2 Utiliser l'addon de débogage Blackfire" },
        { type: "code", filename: "terminal", language: "bash", code: `# Conserver tous les appels (pas de filtrage)
blackfire --debug curl \`symfony var:export SYMFONY_PROJECT_DEFAULT_ROUTE_URL\`en/
blackfire --debug curl \`symfony cloud:env:url --pipe --primary\`en/` },
        { type: "code", filename: "terminal", language: "bash", code: `# Optimisation des variables d'environnement (Platform.sh)
symfony run composer dump-env prod` },
        { type: "h", text: "30.3 Utiliser un point d'arrêt avec Xdebug" },
        { type: "code", filename: "terminal", language: "bash", code: `# Vérifier l'installation
symfony php -v
# Devrait afficher: with Xdebug v3.x.x` },
        { type: "code", filename: "php.ini", language: "ini", code: `# php.ini
[xdebug]
xdebug.mode=debug
xdebug.start_with_request=yes` },
        { type: "p", text: "Configuration VSCode (.vscode/launch.json) :" },
        { type: "code", filename: ".vscode/launch.json", language: "json", code: `{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for XDebug",
            "type": "php",
            "request": "launch",
            "port": 9003
        },
        {
            "name": "Launch currently open script",
            "type": "php",
            "request": "launch",
            "program": "\${file}",
            "cwd": "\${fileDirname}",
            "port": 9003
        }
    ]
}` },
        { type: "p", text: "Installer l'extension PHP Debug :" },
        { type: "code", filename: "text", language: "text", code: `ext install felixfbecker.php-debug` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: [
          "La documentation du débogueur pas à pas Xdebug",
          "Déboguer avec Visual Studio Code",
        ]},
      ],
    },

    // ── ÉTAPE 31 ─────────────────────────────────────────────────────────
    {
      id: "etape-31-redis-sessions",
      title: "Étape 31 — Utiliser Redis pour stocker les sessions",
      blocks: [
        { type: "code", filename: "compose.yaml", language: "yaml", code: `# compose.yaml (extrait)
redis:
image: redis:5-alpine
ports:[6379]` },
        { type: "code", filename: ".platform/services.yaml", language: "yaml", code: `# .platform/services.yaml
rediscache:
type: redis:5.0` },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
runtime:
extensions:
- redis
        # ...
relationships:
database:"database:postgresql"
redis:"rediscache:redis"` },
        { type: "code", filename: "config/packages/framework.yaml", language: "yaml", code: `# config/packages/framework.yaml
framework:
session:
handler_id:'%env(REDIS_URL)%'` },
        { type: "code", filename: "terminal", language: "bash", code: `# Redémarrer Docker
docker compose stop && docker compose up -d

# Déployer
symfony cloud:deploy` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: ["Documentation de Redis"] },
      ],
    },

    // ── ÉTAPE 32 ─────────────────────────────────────────────────────────
    {
      id: "etape-32-rabbitmq",
      title: "Étape 32 — Utiliser RabbitMQ comme gestionnaire de messages",
      blocks: [
        { type: "h", text: "32.1 Basculer de PostgreSQL à RabbitMQ" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony composer req amqp-messenger` },
        { type: "code", filename: "config/packages/messenger.yaml", language: "yaml", code: `# config/packages/messenger.yaml
framework:
messenger:
transports:
async:
dsn:'%env(RABBITMQ_URL)%'` },
        { type: "h", text: "32.2 Ajouter RabbitMQ aux services Docker" },
        { type: "code", filename: "compose.yaml", language: "yaml", code: `# compose.yaml
rabbitmq:
image: rabbitmq:3-management
ports:[5672,15672]` },
        { type: "h", text: "32.3 Redémarrer les services Docker" },
        { type: "code", filename: "terminal", language: "bash", code: `docker compose stop && docker compose up -d` },
        { type: "h", text: "32.4 Explorer l'interface web de gestion de RabbitMQ" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony open:local:rabbitmq
# Identifiants : guest / guest` },
        { type: "h", text: "32.5 Déployer RabbitMQ" },
        { type: "code", filename: ".platform/services.yaml", language: "yaml", code: `# .platform/services.yaml
queue:
type: rabbitmq:3.7
disk:1024
size: S` },
        { type: "code", filename: ".platform.app.yaml", language: "yaml", code: `# .platform.app.yaml
runtime:
extensions:
- amqp
        # ...
relationships:
database:"database:postgresql"
redis:"rediscache:redis"
rabbitmq:"queue:rabbitmq"` },
        { type: "code", filename: "terminal", language: "bash", code: `# Accéder à l'interface web en production via tunnel
symfony cloud:tunnel:open
symfony open:remote:rabbitmq
symfony cloud:tunnel:close` },
        { type: "h", text: "Aller plus loin" },
        { type: "list", items: ["Documentation de RabbitMQ"] },
      ],
    },

    // ── ÉTAPE 33 ─────────────────────────────────────────────────────────
    {
      id: "etape-33-prochaine-etape",
      title: "Étape 33 — Quelle est la prochaine étape ?",
      blocks: [
        { type: "note", variant: "success", text: "« I hope you enjoyed the ride. I have tried to give you enough information to help you get started faster with your Symfony projects. We have barely scratched the surface of the Symfony world. Now, dive into the rest of the Symfony documentation to learn more about each feature we have discovered together. Bon développement avec Symfony ! »" },
        { type: "note", variant: "info", text: "« The more I live, the more I learn. The more I learn, the more I realize, the less I know. » — Michel Legrand" },
      ],
    },

    // ── INDEX DES COMMANDES ESSENTIELLES ────────────────────────────────
    {
      id: "index-commandes-essentielles",
      title: "Index des commandes essentielles",
      blocks: [
        { type: "h", text: "Commandes Symfony CLI" },
        { type: "table", headers: ["Commande", "Description"], rows: [
          ["symfony new project --webapp", "Créer un nouveau projet Symfony"],
          ["symfony server:start -d", "Démarrer le serveur web"],
          ["symfony server:stop", "Arrêter le serveur web"],
          ["symfony server:log", "Afficher les logs"],
          ["symfony open:local", "Ouvrir le site dans le navigateur"],
          ["symfony open:local:webmail", "Ouvrir le webmail"],
          ["symfony console list make", "Lister les générateurs du Maker Bundle"],
          ["symfony run psql", "Accéder à PostgreSQL"],
          ["symfony cloud:deploy", "Déployer sur Platform.sh"],
          ["symfony cloud:url -1", "Ouvrir l'URL du projet"],
          ["symfony cloud:logs --tail", "Voir les logs de production"],
          ["symfony cloud:ssh", "Se connecter en SSH"],
        ]},
        { type: "h", text: "Commandes console Symfony" },
        { type: "table", headers: ["Commande", "Description"], rows: [
          ["symfony console make:controller", "Générer un contrôleur"],
          ["symfony console make:entity", "Générer une entité"],
          ["symfony console make:form", "Générer un form type"],
          ["symfony console make:user", "Générer une entité User"],
          ["symfony console make:migration", "Créer une migration"],
          ["symfony console doctrine:migrations:migrate", "Exécuter les migrations"],
          ["symfony console doctrine:fixtures:load", "Charger les fixtures"],
          ["symfony console make:admin:dashboard", "Créer le dashboard EasyAdmin"],
          ["symfony console make:admin:crud", "Créer un CRUD EasyAdmin"],
          ["symfony console make:subscriber", "Créer un event subscriber"],
          ["symfony console make:security:form-login", "Créer l'authentification"],
          ["symfony console make:test", "Créer un test"],
          ["symfony console debug:router", "Lister les routes"],
          ["symfony console debug:container", "Inspecter le conteneur"],
          ["symfony console debug:autowiring", "Voir les services autowirables"],
          ["symfony console workflow:dump", "Visualiser un workflow"],
          ["symfony console messenger:consume", "Consommer les messages"],
          ["symfony console translation:extract", "Extraire les traductions"],
          ["symfony console security:hash-password", "Hasher un mot de passe"],
          ["symfony console secrets:set", "Définir un secret"],
        ]},
        { type: "h", text: "Références des composants Symfony" },
        { type: "table", headers: ["Composant", "Usage"], rows: [
          ["symfony/http-foundation", "Request, Response, Session"],
          ["symfony/routing", "Routage des URLs"],
          ["symfony/form", "Formulaires"],
          ["symfony/validator", "Validation"],
          ["symfony/security-bundle", "Authentification & autorisation"],
          ["symfony/mailer", "Envoi d'emails"],
          ["symfony/messenger", "Messages asynchrones"],
          ["symfony/workflow", "Workflows et machines d'état"],
          ["symfony/notifier", "Notifications multicanal"],
          ["symfony/http-client", "Client HTTP"],
          ["symfony/string", "Manipulation de chaînes"],
          ["symfony/cache", "Mise en cache"],
          ["symfony/process", "Exécution de processus"],
          ["doctrine/orm", "ORM Doctrine"],
          ["easycorp/easyadmin-bundle", "Interface d'administration"],
          ["api-platform/core", "API Platform"],
        ]},
      ],
    },
    {
      id: "symfony7-presentation-versions",
      title: "Symfony 7 — Présentation et calendrier des versions",
      blocks: [
        { type: "p", text: "Symfony est un framework PHP open-source développé par Sensiolabs, lancé en 2005 par Fabien Potencier. Modèle MVC, moteur de templates, architecture modulaire grâce aux bundles et composants réutilisables." },
        { type: "h", text: "Calendrier des versions Symfony" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│            CALENDRIER DES VERSIONS SYMFONY               │
├──────────────────────────┬───────────────────────────────┤
│  Correctifs sécurité      │  Chaque mois                 │
│  Versions mineures        │  Tous les 6 mois (mai/nov)   │
│  Versions majeures        │  Tous les 2 ans (nov impairs)│
│  Support standard         │  6 mois                      │
│  LTS (version x.4)        │  3 ans + 1 an sécurité       │
└──────────────────────────┴───────────────────────────────┘`,
        },
        { type: "note", variant: "info", text: "Version Symfony 7.1." },
        { type: "h", text: "Prérequis" },
        { type: "list", items: [
          "PHP ≥ 8.2 pour Symfony 7.1",
          "Extensions PHP : CType, Iconv, PCRE, Session, SimpleXML, Tokenizer",
          "Composer : https://getcomposer.org/",
          "Git (recommandé)",
          "Symfony CLI (recommandé) : https://symfony.com/download",
        ]},
        { type: "p", text: "Vérifier la configuration :" },
        { type: "code", filename: "check.sh", language: "bash", code: `symfony check:requirements
symfony check:requirements -v  # mode verbose` },
        { type: "p", text: "Vérifier la sécurité des dépendances :" },
        { type: "code", filename: "security-check.sh", language: "bash", code: `symfony security:check` },
      ],
    },
    {
      id: "symfony7-creation-projet-structure",
      title: "Symfony 7 — Création de projet et structure",
      blocks: [
        { type: "h", text: "Version légère (API / microservices)" },
        { type: "code", filename: "install-api.sh", language: "bash", code: `# Avec Composer
composer create-project symfony/skeleton:"7.1.*" nom_dossier_projet

# Avec Symfony CLI
symfony new nom_dossier_projet --version="7.1.*"` },
        { type: "h", text: "Version complète (application Web)" },
        { type: "code", filename: "install-webapp.sh", language: "bash", code: `# Avec Composer
composer create-project symfony/skeleton:"7.1.*" nom_dossier_projet
cd nom_dossier_projet
composer require webapp

# Avec Symfony CLI
symfony new nom_dossier_projet --version="7.1.*" --webapp` },
        { type: "note", variant: "info", title: "Paramètre version", text: "lts, stable (défaut), next, previous, dev" },
        { type: "h", text: "Structure d'un projet Symfony 7" },
        { type: "table", headers: ["Dossier/Fichier", "Description", "API", "WebApp"], rows: [
          ["/.git", "Dossier de travail de GIT", "✓", "✓"],
          ["/bin", "Exécutables (console, phpunit)", "✓", "✓"],
          ["/config", "Fichiers de configuration du framework", "✓", "✓"],
          ["/migrations", "Historique des étapes de construction de la BDD", "—", "✓"],
          ["/public", "Seul dossier accessible par le visiteur (CSS, JS, images)", "✓", "✓"],
          ["/src", "Dossier principal de l'application", "✓", "✓"],
          ["/src/Controller", "Contrôleurs de l'application", "✓", "✓"],
          ["/src/Entity", "Description des entités", "—", "✓"],
          ["/src/Repository", "Classes pour manipuler les données en BDD", "—", "✓"],
          ["/templates", "Vues de l'application (Twig)", "—", "✓"],
          ["/tests", "Tests unitaires et d'intégration", "—", "✓"],
          ["/translations", "Fichiers de traduction", "—", "✓"],
          ["/var", "Fichiers temporaires, cache", "✓", "✓"],
          ["/vendor", "Dépendances Symfony et Composer", "✓", "✓"],
          [".env", "Variables d'environnement (ne pas versionner)", "✓", "✓"],
          [".gitignore", "Fichiers exclus du versioning", "✓", "✓"],
          ["composer.json", "Liste des dépendances de premier niveau", "✓", "✓"],
          ["composer.lock", "Dépendances réellement installées et versions exactes", "✓", "✓"],
        ]},
        { type: "h", text: "Lancement du serveur" },
        { type: "code", filename: "server.sh", language: "bash", code: `symfony server:start           # Lance le serveur
symfony server:start -d        # Lance en tâche de fond
symfony server:log             # Affiche les logs (tâche de fond)
symfony serve                  # Alias de server:start
symfony server:stop            # Arrête le serveur
symfony server:list            # Liste des serveurs en cours
symfony server:status          # État du serveur` },
        { type: "note", variant: "info", text: "Vérifier depuis le dossier racine du projet. Accessible à https://localhost:8000" },
        { type: "h", text: "Premier contrôleur" },
        { type: "code", filename: "src/Controller/HomeController.php", language: "php", code: `<?php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class HomeController extends AbstractController
{
    #[Route('/')]
    public function index(): Response
    {
        return new Response('<h1>Bienvenue</h1>');
    }
}` },
        { type: "h", text: "Les routes (attributs PHP 8)" },
        { type: "code", filename: "route-syntaxe.php", language: "php", code: `#[Route('/products', name: 'products_list')]
public function index(): Response { }` },
        { type: "code", filename: "route-parametres.php", language: "php", code: `// Methods — restreindre aux méthodes HTTP
#[Route('/products', name: 'products_list', methods: ['GET'])]

// Schemes — HTTP, HTTPS ou les deux
#[Route('/products', name: 'products_list', schemes: ['https'])]

// Route dynamique avec paramètre
#[Route('/products/{id}', name: 'product_show')]
public function show(int $id): Response { }

// Route dynamique avec valeur par défaut et format
#[Route('/products/{id}', name: 'product_show', defaults: ['id' => 1], requirements: ['id' => '\\d+'])]` },
        { type: "h", text: "Outils de débogage des routes" },
        { type: "code", filename: "debug-router.sh", language: "bash", code: `# Lister toutes les routes
symfony console debug:router

# Détails d'une route spécifique
symfony console debug:router products_list

# Vérifier qu'une URL est associée à une route
symfony console router:match /products` },
        { type: "h", text: "Le MakerBundle" },
        { type: "p", text: "Composant indispensable pour générer le code de base des éléments fréquents." },
        { type: "code", filename: "maker-bundle.sh", language: "bash", code: `# Installation (environnement de développement uniquement)
composer require symfony/maker-bundle --dev

# Lister toutes les commandes du MakerBundle
symfony console list make` },
        { type: "code", filename: "make-controller.sh", language: "bash", code: `symfony console make:controller NomDuController` },
        { type: "p", text: "Crée deux fichiers : src/Controller/NomDuController.php et templates/nom_du_controller/index.html.twig." },
      ],
    },
    {
      id: "symfony7-twig-syntaxe",
      title: "Symfony 7 — TWIG, syntaxe de base",
      blocks: [
        { type: "p", text: "Twig est le moteur de templates open-source de Symfony (SensioLabs)." },
        { type: "code", filename: "install-twig.sh", language: "bash", code: `composer require twig/twig
# ou (si non inclus)
composer require symfony/twig-bundle` },
        { type: "table", headers: ["Syntaxe", "Rôle"], rows: [
          ["{{ variable }}", "Afficher le contenu d'une variable ou expression"],
          ["{% action %}", "Exécuter une action (boucle, condition…)"],
          ["{# commentaire #}", "Commentaire (non affiché)"],
        ]},
        { type: "h", text: "Les variables" },
        { type: "code", filename: "variables.twig", language: "text", code: `{# Affichage simple #}
{{ titre }}
{{ user.nom }}
{{ tableau.element }}` },
        { type: "h", text: "Les filtres" },
        { type: "code", filename: "filtres.twig", language: "text", code: `{# Modifier une variable (ne modifie pas côté PHP) #}
{{ nom | upper }}
{{ texte | trim | capitalize }}` },
        { type: "h", text: "Les fonctions" },
        { type: "code", filename: "fonctions.twig", language: "text", code: `{{ date('Y-m-d') }}
{{ dump(variable) }}
{{ max(valeurs) }}
{{ min(valeurs) }}` },
        { type: "h", text: "Les conditions" },
        { type: "code", filename: "conditions.twig", language: "text", code: `{% if age >= 18 %}
  <p>Majeur</p>
{% elseif age >= 13 %}
  <p>Adolescent</p>
{% else %}
  <p>Enfant</p>
{% endif %}` },
        { type: "p", text: "Opérateurs disponibles : + - / * %, and or not, == != <= >= <>, | (filtre), ~ (concaténation), ? : (ternaire). Tests : constant, defined, divisible by, empty, null, even/odd, iterable, same as." },
        { type: "h", text: "Les boucles" },
        { type: "code", filename: "boucles.twig", language: "text", code: `{% for item in items %}
  <li>{{ item.nom }}</li>
{% endfor %}` },
        { type: "h", text: "Héritage TWIG" },
        { type: "code", filename: "templates/base.html.twig", language: "text", code: `{# templates/base.html.twig — template de base #}
<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}Mon Site{% endblock %}</title>
  {% block stylesheets %}{% endblock %}
</head>
<body>
  {% block body %}{% endblock %}
  {% block javascripts %}{% endblock %}
</body>
</html>` },
        { type: "code", filename: "templates/home/index.html.twig", language: "text", code: `{# templates/home/index.html.twig — template enfant #}
{% extends "base.html.twig" %}

{% block title %}Accueil{% endblock %}

{% block body %}
  <h1>Bienvenue sur mon site</h1>
{% endblock %}` },
        { type: "h", text: "Inclusion" },
        { type: "code", filename: "inclusion.twig", language: "text", code: `{# Inclure un fichier (header, footer, formulaire…) #}
{% include "partials/header.html.twig" %}` },
      ],
    },
    {
      id: "symfony7-doctrine-entites-migrations",
      title: "Symfony 7 — Doctrine, entités et migrations",
      blocks: [
        { type: "p", text: "ORM (Object Relational Mapping) : fait le pont entre le monde relationnel (SQL) et le monde objet (PHP/Symfony)." },
        { type: "code", filename: "install-orm.sh", language: "bash", code: `composer require symfony/orm-pack` },
        { type: "p", text: "Configuration de la connexion, dans le fichier .env :" },
        { type: "code", filename: ".env", language: "bash", code: `# MySQL / MariaDB
DATABASE_URL="mysql://user:password@127.0.0.1:3306/ma_base?serverVersion=8.0"` },
        { type: "code", filename: "create-db.sh", language: "bash", code: `symfony console doctrine:database:create` },
        { type: "h", text: "Entités" },
        { type: "p", text: "Une entité est un objet PHP décrivant une table de la BDD." },
        { type: "table", headers: ["SQL", "Entité PHP"], rows: [
          ["Nom de la table", "Nom de la classe"],
          ["Nom de la colonne", "Nom de la propriété"],
          ["Type de la colonne", "Type de la propriété"],
          ["Clé primaire", "Propriété id"],
          ["Ligne", "Objet de la classe"],
        ]},
        { type: "code", filename: "make-entity.sh", language: "bash", code: `symfony console make:entity NomEntite` },
        { type: "h", text: "Relations entre entités" },
        { type: "p", text: "Doctrine connaît 4 types de relations :" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["OneToOne", "Un enregistrement A ↔ Un enregistrement B"],
          ["ManyToOne", "Plusieurs A ↔ Un B"],
          ["OneToMany", "Un A ↔ Plusieurs B"],
          ["ManyToMany", "Plusieurs A ↔ Plusieurs B"],
        ]},
        { type: "h", text: "Migrations" },
        { type: "p", text: "Fichier de migration = classe permettant d'exécuter le SQL correspondant à l'évolution du modèle." },
        { type: "code", filename: "migrations.sh", language: "bash", code: `# Créer un fichier de migration
symfony console make:migration

# Exécuter les migrations
symfony console doctrine:migrations:migrate

# Options disponibles
symfony console doctrine:migrations:migrate -h` },
        { type: "p", text: "Méthodes d'un fichier de migration : getDescription() (documenter la migration), up() (exécuter les requêtes SQL), down() (annuler les actions de up())." },
        { type: "h", text: "EntityManager" },
        { type: "code", filename: "entity-manager.php", language: "php", code: `// Persister (demander à Doctrine de gérer l'entité)
$entityManager->persist($cours);

// Flush (appliquer les changements en BDD)
$entityManager->flush();` },
        { type: "h", text: "Repositories" },
        { type: "code", filename: "repository.php", language: "php", code: `// Méthodes disponibles pour chaque repository
$repo->find($id);                  // Trouver par id
$repo->findAll();                  // Tous les enregistrements
$repo->findBy(['champ' => val]);   // Selon critères
$repo->findOneBy(['champ' => val]);// Un enregistrement selon critères` },
        { type: "note", variant: "info", title: "QueryBuilder", text: "Pour requêtes personnalisées en DQL (Doctrine Query Language)." },
        { type: "h", text: "Les fixtures" },
        { type: "p", text: "Les fixtures sont des données statiques pour initialiser la BDD pendant le développement." },
        { type: "code", filename: "fixtures.sh", language: "bash", code: `composer require orm/doctrine-fixtures-bundle --dev
symfony console make:fixture CoursFixtures
symfony console doctrine:fixtures:load` },
        { type: "p", text: "Méthodes de gestion des dépendances : addReference() (ajoute une référence, exception si elle existe), setReference() (ajoute/écrase une référence), getReference() (charge l'objet référencé), getDependencies() (définit l'ordre d'exécution)." },
      ],
    },
    {
      id: "symfony7-formulaires-securite",
      title: "Symfony 7 — Formulaires et sécurité",
      blocks: [
        { type: "h", text: "Créer un formulaire" },
        { type: "code", filename: "make-form.sh", language: "bash", code: `symfony console make:form DevoirType Devoir` },
        { type: "p", text: "Crée une classe avec deux méthodes : buildForm() (définit les champs du formulaire) et configureOptions() (lie le formulaire à une entité)." },
        { type: "code", filename: "champ-options.php", language: "php", code: `$builder->add('nom', TextType::class, [
    'required' => true,
    'label' => 'Votre nom',
    'attr' => ['class' => 'form-control', 'placeholder' => 'Entrez votre nom']
]);` },
        { type: "code", filename: "controller-form.php", language: "php", code: `// createFormBuilder
$form = $this->createFormBuilder()
    ->add('nom', TextType::class)
    ->add('email', EmailType::class)
    ->getForm();

// createForm
$devoir = new Devoir();
$form = $this->createForm(DevoirType::class, $devoir);

// Rendre la vue
return $this->render('devoir/new.html.twig', [
    'form' => $form->createView(),
]);` },
        { type: "code", filename: "form-twig.twig", language: "text", code: `{# Affichage en une seule fonction #}
{{ form(form) }}

{# Affichage champ par champ #}
{{ form_start(form) }}
  {{ form_row(form.nom) }}
  {{ form_row(form.email) }}
  <button type="submit">Envoyer</button>
{{ form_end(form) }}` },
        { type: "h", text: "Traitement du formulaire" },
        { type: "code", filename: "traitement-form.php", language: "php", code: `public function new(Request $request): Response
{
    $devoir = new Devoir();
    $form = $this->createForm(DevoirType::class, $devoir);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->persist($devoir);
        $entityManager->flush();
        return $this->redirectToRoute('devoir_list');
    }

    return $this->render('devoir/new.html.twig', [
        'form' => $form->createView(),
    ]);
}` },
        { type: "p", text: "Méthodes clés : handleRequest($request) (traite la requête), isSubmitted() (vérifie si le formulaire a été soumis), isValid() (vérifie si les données sont valides)." },
        { type: "h", text: "Validation" },
        { type: "code", filename: "validation-form.php", language: "php", code: `use Symfony\\Component\\Validator\\Constraints as Assert;

$builder->add('email', EmailType::class, [
    'constraints' => [
        new Assert\\NotBlank(),
        new Assert\\Email()
    ]
]);` },
        { type: "code", filename: "validation-entite.php", language: "php", code: `use Symfony\\Component\\Validator\\Constraints as Assert;

class Cours
{
    #[Assert\\NotBlank]
    #[Assert\\Length(min: 3, max: 100)]
    private string $nom;
}` },
        { type: "h", text: "Sécurité et gestion des utilisateurs" },
        { type: "code", filename: "install-security.sh", language: "bash", code: `composer require symfony/security-bundle` },
        { type: "code", filename: "make-user.sh", language: "bash", code: `symfony console make:user` },
        { type: "p", text: "Attributs créés automatiquement : id, email (identifiant), tableau des roles. Méthodes ajoutées : getUserIdentifier() (retourne l'attribut identifiant), eraseCredentials() (efface les données sensibles temporaires)." },
        { type: "code", filename: "hash-password.sh", language: "bash", code: `symfony console security:hash-password` },
        { type: "code", filename: "config/packages/security.yaml", language: "yaml", code: `# config/packages/security.yaml
security:
password_hashers:
App\\Entity\\User: auto   # algorithme le plus performant

providers:
app_user_provider:
entity:
class: App\\Entity\\User
property: email

firewalls:
main:
            # Configuration de l'authentification

access_control:
-{path: ^/admin,roles: ROLE_ADMIN}
-{path: ^/profile,roles: ROLE_USER}` },
        { type: "p", text: "Clés de configuration : password_hashers (interface de hashage utilisée), providers (entité et propriété identifiant pour la connexion), firewalls (gère toutes les URLs et l'authentification), access_control (restrictions de routes selon les rôles)." },
        { type: "code", filename: "make-auth.sh", language: "bash", code: `symfony console make:auth` },
        { type: "p", text: "Crée/modifie : LoginAuthenticator (redirection après authentification réussie), SecurityController (routes /login et /logout), templates/security/login.html.twig (vue du formulaire de connexion)." },
      ],
    },
    ...laConsoleSymfony,
  ],
};
