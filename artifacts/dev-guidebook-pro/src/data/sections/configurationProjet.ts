import type { Section } from "../types";
import { laConsoleArticles2Configuration } from "./laConsoleArticles2Configuration";
import { laConsoleArticles5Configuration } from "./laConsoleArticles5Configuration";

export const configurationProjet: Section = {
  id: "configuration-projet",
  title: "Configuration de projet — Guide universel",
  icon: "Settings",
  tags: ["php", "ts"],
  subsections: [
    {
      id: "config-html-css-js",
      title: "HTML/CSS/JS — Arborescence de base",
      blocks: [
        { type: "note", variant: "info", text: "Projet statique — pas de configuration particulière nécessaire." },
        { type: "h", text: "Arborescence d'un fichier de base d'un site web" },
        {
          type: "diagram",
          content: `/mon-projet
│── /assets
│ ├── /css
│ │ ├── style.css # Feuille de styles CSS (mise en forme du contenu)
│ │
│ ├── /js
│ │ ├── script.js # Fichier JavaScript
│ │
│ ├── /images # Dossier contenant les images
│
│── index.html # Page principale (texte et images vue par les internautes)`,
        },
      ],
    },
    {
      id: "config-vue",
      title: "Vue — Initialisation",
      blocks: [
        { type: "note", variant: "info", text: "Projet Vue — initialisation standard via CLI Vue." },
      ],
    },
    {
      id: "config-angular-standalone",
      title: "Angular standalone",
      blocks: [
        { type: "h", text: "Créer un nouveau projet" },
        { type: "code", filename: "terminal", language: "bash", code: `ng new universelle-angular --routing=false --style=css
cd universelle-angular` },
        { type: "h", text: "Créer les composants (v21 — plus de fichiers xx.component.xx)" },
        { type: "code", filename: "terminal", language: "bash", code: `ng generate component hero
ng generate component about
ng generate component services
ng generate component team
ng generate component blog
ng generate component contact` },
        { type: "h", text: "Ouvrir le site en local" },
        { type: "code", filename: "terminal", language: "bash", code: `ng serve
# http://localhost:4200/` },
        { type: "h", text: "Gestion des images" },
        { type: "p", text: "Configuration dans angular.json :" },
        { type: "code", filename: "angular.json", language: "json", code: `"assets": [
  "src/favicon.ico",
  "src/assets"
],` },
        { type: "p", text: "Chemin image :" },
        { type: "code", filename: "chemin", language: "text", code: `src/assets/images/xxx.jpg` },
        { type: "p", text: "Déclarer dans le code TypeScript :" },
        { type: "code", filename: "tsx", language: "typescript", code: `photo: "assets/images/angular.jpeg"` },
        { type: "h", text: "Comparaison : Composants classiques vs Standalone" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────┬──────────────────────────────────┐
│  Composants classiques           │  Standalone Components            │
│  (non-standalone)                │                                   │
├──────────────────────────────────┼──────────────────────────────────┤
│ Module racine AppModule          │ Chaque composant est indépendant  │
│ Tous les composants dans         │ standalone: true dans le décorateur│
│ declarations[]                   │ Imports directs dans le composant │
├──────────────────────────────────┼──────────────────────────────────┤
│ ✅ Clair pour projets anciens    │ ✅ Plus rapide à créer/réutiliser │
│ ✅ Gestion centralisée NgModule  │ ✅ Idéal pour micro-frontends     │
│ ❌ Déclarer chaque composant     │ ✅ Moins de fichiers, plus lisible │
│ ❌ Plus verbeux                  │ ❌ Nouveau paradigme Angular       │
│ ❌ Moins flexible (microfrontend)│ ❌ Gros projets → préfèrent modules│
└──────────────────────────────────┴──────────────────────────────────┘`,
        },
        { type: "h", text: "1 — Composants classiques (non-standalone)" },
        { type: "p", text: "Structure : Il y a un module racine (AppModule) qui déclare tous les composants. Tous les composants doivent être listés dans declarations du module pour qu'Angular les connaisse." },
        { type: "code", filename: "tsx", language: "typescript", code: `@NgModule({
  declarations: [AppComponent, HeroComponent, AboutComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}` },
        { type: "h", text: "2 — Standalone Components" },
        { type: "p", text: "Structure : Chaque composant peut être indépendant, sans être déclaré dans un module. On déclare le composant avec standalone: true. On importe ses dépendances directement dans le composant (imports: [CommonModule, FormsModule])." },
        { type: "code", filename: "tsx", language: "typescript", code: `@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {}` },
        { type: "p", text: "Bootstrapper l'App directement :" },
        { type: "code", filename: "tsx", language: "typescript", code: `bootstrapApplication(App)
  .catch(err => console.error(err));` },
      ],
    },
    {
      id: "config-react",
      title: "React (jsx) — Initialisation",
      blocks: [
        { type: "note", variant: "info", text: "Projet React — initialisation standard via Create React App ou Vite." },
      ],
    },
    {
      id: "config-symfony-nouveau-projet",
      title: "Symfony — Créer un nouveau projet",
      blocks: [
        { type: "h", text: "Créer un nouveau projet" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony new universelle-symfony --webapp
cd universelle-symfony` },
        { type: "h", text: "Lancer le serveur" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony serve
# https://127.0.0.1:8000` },
      ],
    },
    {
      id: "config-symfony-entite",
      title: "Symfony — Entité",
      blocks: [
        { type: "h", text: "Flux de création d'une entité Symfony" },
        {
          type: "diagram",
          content: `┌─────────────────┐
│  Configurer BDD │  (.env → DATABASE_URL)
└────────┬────────┘
         ▼
┌─────────────────┐
│  Démarrer XAMPP │  (MySQL + Apache)
└────────┬────────┘
         ▼
┌─────────────────┐
│  Créer la BDD   │  php bin/console doctrine:database:create
└────────┬────────┘
         ▼
┌─────────────────┐
│  Créer l'entité │  php bin/console make:entity NomEntité
└────────┬────────┘
         ▼
┌─────────────────┐
│  Migration      │  make:migration → doctrine:migrations:migrate
└────────┬────────┘
         ▼
┌─────────────────┐
│  symfony serve  │
└─────────────────┘`,
        },
        { type: "h", text: "1. Configurer l'environnement (DATABASE)" },
        { type: "code", filename: ".env", language: "bash", code: `# Fichier .env
DATABASE_URL="mysql://root:@127.0.0.1:3306/universelle_symfony?serverVersion=10.11.2-MariaDB&charset=utf8mb4"` },
        { type: "p", text: "Ouvrir XAMPP → manage server → START MySQL et Apache." },
        { type: "h", text: "2. Créer la base de données" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console doctrine:database:create` },
        { type: "h", text: "3. Créer une entité (ex : TeamMember)" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:entity TeamMember` },
        { type: "p", text: "Répondre aux questions interactives :" },
        { type: "code", filename: "terminal", language: "text", code: `New property name (press <return> to stop adding fields):
> name

Field type (enter ? to see all types) [string]:
>

Field length [255]:
>

Can this field be null in the database (nullable) (yes/no) [no]:
>` },
        { type: "p", text: "Résultat : updated: src/Entity/TeamMember.php" },
        { type: "h", text: "Champs de l'entité TeamMember (exemple)" },
        { type: "table", headers: ["Nom", "Type"], rows: [
          ["name", "string"],
          ["role", "string"],
          ["image", "string"],
        ]},
        { type: "note", variant: "info", text: "Symfony crée la propriété et les getters/setters automatiquement. La migration créera la table avec les colonnes correspondantes." },
        { type: "h", text: "4. Corriger la version du serveur dans .env si besoin" },
        { type: "code", filename: ".env", language: "bash", code: `# Exemple de correction de version MariaDB
DATABASE_URL="mysql://root:@127.0.0.1:3306/universelle_symfony?serverVersion=10.4.28-MariaDB&charset=utf8mb4"` },
        { type: "note", variant: "info", text: "Voir la version exacte dans phpMyAdmin : Connexion au serveur → Version du serveur" },
        { type: "h", text: "5. Créer les tables dans la BDD MySQL (migrations)" },
        { type: "code", filename: "terminal", language: "bash", code: `# Générer la migration
php bin/console make:migration
# Résultat : created: migrations/Version20260320095440.php

# Appliquer la migration
php bin/console doctrine:migrations:migrate
# Répondre : yes` },
        { type: "note", variant: "warning", text: "Symfony prévient que la migration va modifier la structure de la base. Si la base est vide ou contient des tables de test → répondre yes." },
        { type: "h", text: "6. Ouvrir Symfony" },
        { type: "code", filename: "terminal", language: "bash", code: `symfony serve` },
      ],
    },
    {
      id: "config-symfony-fixtures",
      title: "Symfony — Ajouter des données test (fixtures)",
      blocks: [
        { type: "p", text: "Les fixtures permettent de remplir la base pour voir le site avec des contenus réels." },
        { type: "h", text: "a) Installer le bundle fixtures" },
        { type: "code", filename: "terminal", language: "bash", code: `composer require --dev doctrine/doctrine-fixtures-bundle` },
        { type: "h", text: "b) Créer le fichier de fixtures" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:fixtures AppFixtures
# Symfony crée : src/DataFixtures/AppFixtures.php` },
        { type: "h", text: "c) Ajouter des données dans AppFixtures.php" },
        { type: "code", filename: "src/DataFixtures/AppFixtures.php", language: "php", code: `<?php

namespace App\\DataFixtures;

use App\\Entity\\Service;
use App\\Entity\\TeamMember;
use App\\Entity\\Post;
use Doctrine\\Bundle\\FixturesBundle\\Fixture;
use Doctrine\\Persistence\\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Services
        $service1 = new Service();
        $service1->setTitle('Service 1');
        $service1->setDescription('Description du service 1');
        $manager->persist($service1);

        $service2 = new Service();
        $service2->setTitle('Service 2');
        $service2->setDescription('Description du service 2');
        $manager->persist($service2);

        // Équipe
        $member1 = new TeamMember();
        $member1->setName('Alice');
        $member1->setRole('Fondateur');
        $member1->setImage('images/team/alice.jpg'); // mettre l'image dans public/images/team/
        $manager->persist($member1);

        $member2 = new TeamMember();
        $member2->setName('Bob');
        $member2->setRole('Designer');
        $member2->setImage('images/team/bob.jpg');
        $manager->persist($member2);

        // Blog
        $post1 = new Post();
        $post1->setTitle('Article 1');
        $post1->setExcerpt('Extrait de l\\'article 1');
        $manager->persist($post1);

        $post2 = new Post();
        $post2->setTitle('Article 2');
        $post2->setExcerpt('Extrait de l\\'article 2');
        $manager->persist($post2);

        $manager->flush();
    }
}` },
        { type: "h", text: "d) Charger les fixtures" },
        { type: "note", variant: "warning", text: "Attention : cela supprime les données existantes dans les tables." },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console doctrine:fixtures:load
# Taper yes quand Symfony demande` },
      ],
    },
    {
      id: "config-symfony-formulaire-contact",
      title: "Symfony — Formulaire de contact",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:form ContactType
# The name of Entity or fully qualified model class name that the new form will be bound to (empty for none):
# > (vide)
# created: src/Form/ContactType.php` },
      ],
    },
    {
      id: "config-symfony-easyadmin",
      title: "Symfony — Admin client (EasyAdmin)",
      blocks: [
        { type: "p", text: "Pour que le client puisse modifier ses services, équipe et blog." },
        { type: "h", text: "Architecture EasyAdmin" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│               EasyAdmin Dashboard (/admin)            │
│                                                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐        │
│  │  Équipe   │  │ Services  │  │   Blog    │        │
│  │  CRUD     │  │   CRUD    │  │   CRUD    │        │
│  └───────────┘  └───────────┘  └───────────┘        │
└──────────────────────────────────────────────────────┘
         ↕ Géré par AdminDashboardController`,
        },
        { type: "h", text: "1. Installer EasyAdmin" },
        { type: "code", filename: "terminal", language: "bash", code: `composer require easycorp/easyadmin-bundle
# Symfony installe EasyAdmin 4 ou 5 selon ta version
# Ce bundle fournit un dashboard admin complet avec CRUD pour les entités` },
        { type: "h", text: "2. Créer le dashboard" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:admin:dashboard
# Which class name do you prefer for your Dashboard controller? [DashboardController]:
# > AdminDashboard
# In which directory of your project do you want to generate "AdminDashboardController"? [src/Controller/Admin/]:
# >` },
        { type: "h", text: "3. Créer les CRUD des entités existantes" },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:admin:crud "App\\Entity\\TeamMember"
php bin/console make:admin:crud "App\\Entity\\Service"
php bin/console make:admin:crud "App\\Entity\\Post"
# Which directory do you want to generate the CRUD controller in? [src/Controller/Admin/]:
# >
# Namespace of the generated CRUD controller [App\\Controller\\Admin]:
# >` },
        { type: "note", variant: "success", text: "Accède à /admin pour voir le dashboard ✅ Tu peux ajouter/modifier/supprimer les entrées facilement." },
        { type: "h", text: "4. Configurer EasyAdmin — src/Controller/Admin/DashboardController.php" },
        { type: "code", filename: "src/Controller/Admin/DashboardController.php", language: "php", code: `use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        return parent::index();
    }
}` },
        { type: "h", text: "5. Configurer TeamMemberCrudController.php" },
        { type: "code", filename: "src/Controller/Admin/TeamMemberCrudController.php", language: "php", code: `<?php

namespace App\\Controller\\Admin;

use App\\Entity\\TeamMember;
use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractCrudController;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\IdField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\TextField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\ImageField;

class TeamMemberCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TeamMember::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('name', 'Nom'),
            TextField::new('role', 'Fonction'),
            ImageField::new('image')
                ->setBasePath('images/team')      // chemin public pour afficher l'image
                ->setUploadDir('public/images/team') // dossier pour upload
                ->setUploadedFileNamePattern('[slug]-[uuid].[extension]'),
        ];
    }
}` },
        { type: "h", text: "6. Configurer ServiceCrudController.php" },
        { type: "code", filename: "src/Controller/Admin/ServiceCrudController.php", language: "php", code: `<?php

namespace App\\Controller\\Admin;

use App\\Entity\\Service;
use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractCrudController;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\IdField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\TextEditorField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\TextField;

class ServiceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Service::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title', 'Titre'),
            TextEditorField::new('description', 'Description'),
        ];
    }
}` },
        { type: "h", text: "7. Configurer PostCrudController.php" },
        { type: "code", filename: "src/Controller/Admin/PostCrudController.php", language: "php", code: `<?php

namespace App\\Controller\\Admin;

use App\\Entity\\Post;
use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractCrudController;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\IdField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\TextEditorField;
use EasyCorp\\Bundle\\EasyAdminBundle\\Field\\TextField;

class PostCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Post::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),  // id visible seulement dans la liste
            TextField::new('title', 'Titre'),
            TextEditorField::new('excerpt', 'Extrait'),  // si tu as un champ 'excerpt'
            TextEditorField::new('content', 'Contenu'),  // si tu as un champ 'content'
        ];
    }
}` },
        { type: "h", text: "8. Configurer AdminDashboardController.php (complet)" },
        { type: "code", filename: "src/Controller/Admin/AdminDashboardController.php", language: "php", code: `<?php

namespace App\\Controller\\Admin;

use EasyCorp\\Bundle\\EasyAdminBundle\\Attribute\\AdminDashboard;
use EasyCorp\\Bundle\\EasyAdminBundle\\Config\\Dashboard;
use EasyCorp\\Bundle\\EasyAdminBundle\\Config\\MenuItem;
use EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\AbstractDashboardController;
use Symfony\\Component\\HttpFoundation\\Response;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class AdminDashboardController extends AbstractDashboardController
{
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Universelle Symfony');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::section('Équipe');
        yield MenuItem::linkToRoute('Liste Équipe', 'fas fa-users', 'admin_team_member_index');

        yield MenuItem::section('Services');
        yield MenuItem::linkToRoute('Liste Services', 'fas fa-concierge-bell', 'admin_service_index');

        yield MenuItem::section('Blog');
        yield MenuItem::linkToRoute('Liste Articles', 'fas fa-newspaper', 'admin_post_index');
    }
}` },
        { type: "h", text: "9. Créer le tableau de bord Twig — templates/admin/dashboard.html.twig" },
        { type: "code", filename: "templates/admin/dashboard.html.twig", language: "twig", code: `{% extends '@EasyAdmin/page/content.html.twig' %}

{% block content %}
<h1>Bienvenue dans l'admin Universelle Symfony !</h1>

<ul>
    <li><a href="{{ path('admin_team_member_index') }}">Équipe</a></li>
    <li><a href="{{ path('admin_service_index') }}">Services</a></li>
    <li><a href="{{ path('admin_post_index') }}">Blog</a></li>
</ul>
{% endblock %}` },
      ],
    },
    {
      id: "config-symfony-mailhog",
      title: "Symfony — Email (Mailhog)",
      blocks: [
        { type: "h", text: "Vérifier l'installation de Mailhog" },
        { type: "code", filename: "terminal", language: "bash", code: `ps aux | grep mailhog` },
        { type: "p", text: "Résultat attendu :" },
        { type: "code", filename: "terminal", language: "text", code: `bricotteaux  709  0.0 0.1 ...  /opt/homebrew/opt/mailhog/bin/MailHog
  -api-bind-addr 127.0.0.1:8025
  -smtp-bind-addr 127.0.0.1:1025
  -ui-bind-addr 127.0.0.1:8025` },
        { type: "h", text: "Configurer .env pour les emails" },
        { type: "code", filename: ".env", language: "bash", code: `MAILER_DSN=smtp://localhost:1025` },
        { type: "h", text: "Ouvrir la boite Mailhog" },
        { type: "code", filename: "url", language: "text", code: `http://127.0.0.1:8025` },
        { type: "h", text: "Tester l'envoi d'email — test-mail.php" },
        { type: "code", filename: "test-mail.php", language: "php", code: `<?php

require 'vendor/autoload.php';

use Symfony\\Component\\Mailer\\Transport;
use Symfony\\Component\\Mailer\\Mailer;
use Symfony\\Component\\Mime\\Email;

$transport = Transport::fromDsn('smtp://127.0.0.1:1025');
$mailer = new Mailer($transport);

$email = (new Email())
    ->from('test@example.com')
    ->to('hello@example.com')
    ->subject('Test Mail')
    ->text('Ceci est un test.');

$mailer->send($email);

echo "Mail envoyé.\\n";` },
        { type: "code", filename: "terminal", language: "bash", code: `# Commande de test
php test-mail.php
# Résultat : Mail envoyé.` },
      ],
    },
    {
      id: "config-symfony-style",
      title: "Symfony — Style",
      blocks: [
        { type: "h", text: "Fichier principal" },
        { type: "code", filename: "chemin", language: "text", code: `assets/styles/app.css` },
        { type: "h", text: "Intégrer Bootstrap via CDN (dans base.html.twig)" },
        { type: "code", filename: "base.html.twig", language: "html", code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">` },
        { type: "note", variant: "info", text: "Pour un style plus pro rapidement, tu peux intégrer TailwindCSS ou Bootstrap dans Symfony via Webpack Encore ou directement via CDN." },
      ],
    },
    {
      id: "config-clonage-projet",
      title: "Clonage projet",
      blocks: [
        { type: "p", text: "Si la base est dans le PC sur XAMPP → il n'y a qu'à cloner le projet." },
        { type: "p", text: "Si ce n'est pas le cas → il faut utiliser le fichier d'exportation .sql de la base." },
      ],
    },
    ...laConsoleArticles2Configuration,
    ...laConsoleArticles5Configuration,
  ],
};
