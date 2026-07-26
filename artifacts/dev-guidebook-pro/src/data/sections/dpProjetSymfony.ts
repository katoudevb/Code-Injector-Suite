import type { Section } from "../types";

export const dpProjetSymfony: Section = {
  id: "dp-projet-symfony",
  title: "Étude de cas — Projet Symfony (DP)",
  icon: "FolderCode",
  tags: ["php"],
  subsections: [
    {
      id: "dp-event-subscriber",
      title: "EventSubscriber — AuditSubscriber",
      blocks: [
        { type: "p", text: "AuditSubscriber est un comportement automatique pour toutes les entités avec audit. Lorsqu'une entité est créée ou mise à jour, les champs createdAt, updatedAt, createdBy et updatedBy sont remplis automatiquement. Cela évite d'avoir à écrire manuellement du code d'audit pour chaque entité. Assure un suivi précis et fiable des modifications sur la plateforme." },
        { type: "h", text: "Schéma du flux d'exécution" },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────────┐
│                     AuditSubscriber                        │
│                                                            │
│  Écoute les événements Doctrine :                          │
│  ┌─────────────────┐    ┌─────────────────┐               │
│  │  Events::       │    │  Events::       │               │
│  │  prePersist     │    │  preUpdate      │               │
│  │  (= INSERT)     │    │  (= UPDATE)     │               │
│  └────────┬────────┘    └────────┬────────┘               │
│           │                      │                         │
│           ▼                      ▼                         │
│  prePersist()              preUpdate()                     │
│  ├─ setCreatedAt($now)     ├─ setUpdatedAt($now)           │
│  ├─ setUpdatedAt($now)     └─ setUpdatedBy($user)          │
│  ├─ setCreatedBy($user)                                    │
│  └─ setUpdatedBy($user)                                    │
└────────────────────────────────────────────────────────────┘

         ▲ Injecté via constructeur
         │
    Security $security ──▶ getUser() ──▶ User connecté`,
        },
        { type: "h", text: "Schéma comparatif prePersist vs preUpdate" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────┬────────────────────────────────┐
│          prePersist             │           preUpdate            │
│       (nouvelle entité)         │       (entité existante)       │
├─────────────────────────────────┼────────────────────────────────┤
│ setCreatedAt($now)   ✅         │ setCreatedAt()        ❌       │
│ setUpdatedAt($now)   ✅         │ setUpdatedAt($now)    ✅       │
│ setCreatedBy($user)  ✅         │ setCreatedBy()        ❌       │
│ setUpdatedBy($user)  ✅         │ setUpdatedBy($user)   ✅       │
└─────────────────────────────────┴────────────────────────────────┘`,
        },
        { type: "h", text: "Code complet" },
        { type: "code", filename: "AuditSubscriber.php", language: "php", code: `class AuditSubscriber implements EventSubscriber
// "implements EventSubscriber" = cette classe écoute des événements Doctrine
// elle se déclenche automatiquement avant chaque insertion ou modification en BDD
{
    public function __construct(private Security $security) {}
    // Security = outil Symfony qui permet de savoir quel utilisateur est connecté
    // injecté automatiquement au chargement de cette classe

    public function getSubscribedEvents(): array
    // méthode imposée par EventSubscriber : déclare quels événements cette classe écoute
    {
        return [
            Events::prePersist, // déclenché juste AVANT qu'une nouvelle entité soit insérée en BDD
            Events::preUpdate,  // déclenché juste AVANT qu'une entité existante soit modifiée en BDD
        ];
    }

    public function prePersist(LifecycleEventArgs $args): void
    // s'exécute automatiquement avant CHAQUE insertion en BDD (nouvelle entité)
    // LifecycleEventArgs = contient toutes les infos sur l'entité en cours d'insertion
    {
        $entity = $args->getObject();        // récupère l'entité qui va être insérée (Course, User, Lesson...)
        $user = $this->security->getUser();  // récupère l'utilisateur actuellement connecté (peut être null)

        if (method_exists($entity, 'setCreatedAt') && method_exists($entity, 'setUpdatedAt')) {
        // vérifie que l'entité a bien ces deux méthodes avant de les appeler
        // (toutes les entités n'ont pas forcément des champs d'audit)
            $now = new \\DateTimeImmutable(); // crée une date/heure correspondant à maintenant
            $entity->setCreatedAt($now);     // enregistre la date de création
            $entity->setUpdatedAt($now);     // enregistre aussi la date de modification (identique à la création)
        }

        if ($user && method_exists($entity, 'setCreatedBy') && method_exists($entity, 'setUpdatedBy')) {
        // vérifie qu'un utilisateur est connecté ET que l'entité a ces deux méthodes
            $entity->setCreatedBy($user); // enregistre qui a créé cette entité
            $entity->setUpdatedBy($user); // enregistre aussi qui l'a modifiée (même personne à la création)
        }
    }

    public function preUpdate(LifecycleEventArgs $args): void
    // s'exécute automatiquement avant CHAQUE modification en BDD (entité existante)
    // LifecycleEventArgs = contient toutes les infos sur l'entité en cours de modification
    {
        $entity = $args->getObject();        // récupère l'entité qui va être modifiée
        $user = $this->security->getUser();  // récupère l'utilisateur actuellement connecté

        if (method_exists($entity, 'setUpdatedAt')) {
        // vérifie que l'entité a bien cette méthode avant de l'appeler
            $entity->setUpdatedAt(new \\DateTimeImmutable());
            // met à jour la date de modification avec l'heure actuelle
            // (pas besoin de toucher à createdAt : la date de création ne change jamais)
        }

        if ($user && method_exists($entity, 'setUpdatedBy')) {
        // vérifie qu'un utilisateur est connecté ET que l'entité a cette méthode
            $entity->setUpdatedBy($user); // enregistre qui a modifié cette entité
        }
    }
}` },
        { type: "h", text: "Tableau récapitulatif" },
        { type: "table", headers: ["Méthode", "Événement Doctrine", "Champs mis à jour"], rows: [
          ["prePersist()", "Avant INSERT", "createdAt, updatedAt, createdBy, updatedBy"],
          ["preUpdate()", "Avant UPDATE", "updatedAt, updatedBy"],
        ]},
        { type: "h", text: "Pourquoi utiliser method_exists() ?" },
        {
          type: "diagram",
          content: `method_exists($entity, 'setCreatedAt')

┌──────────────────────────────────────────────────────────┐
│ Toutes les entités ne sont pas obligées d'avoir          │
│ des champs d'audit.                                      │
│                                                          │
│ En vérifiant l'existence de la méthode avant de          │
│ l'appeler, on s'assure que :                             │
│                                                          │
│  ✅ L'AuditSubscriber fonctionne pour toutes les entités │
│  ✅ Pas d'erreur si l'entité n'a pas de champs d'audit   │
│  ✅ Pas besoin d'une interface ou d'héritage forcé        │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Avantages de cette approche" },
        {
          type: "diagram",
          content: `Sans AuditSubscriber :                Avec AuditSubscriber :
───────────────────────────           ──────────────────────────
Dans chaque Controller/Service,       Un seul subscriber gère tout.
il faut écrire :                      Le code métier reste propre.
  $entity->setCreatedAt(...)          Aucun risque d'oublier un champ.
  $entity->setUpdatedAt(...)          Facilement extensible.
  $entity->setCreatedBy($user)
  $entity->setUpdatedBy($user)
  → Pour CHAQUE entité et CHAQUE
    opération`,
        },
      ],
    },
    {
      id: "dp-data-fixtures",
      title: "DataFixtures — AppFixtures et TestFixtures",
      blocks: [
        { type: "h", text: "Schéma global du fonctionnement des Fixtures" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│                    DoctrineFixturesBundle                   │
│                                                             │
│  AppFixtures (classe vide / template de base)               │
│  TestFixtures (données réalistes pour le dev et les tests)  │
└─────────────────────────────────────────────────────────────┘
              │
              ▼
    load(ObjectManager $manager)
              │
              ├─ new Entité()
              ├─ $entité->setX(...)
              ├─ $manager->persist($entité)  ← mise en file
              │
              └─ $manager->flush()           ← INSERT en BDD`,
        },
        { type: "table", headers: ["Méthode", "Rôle"], rows: [
          ["$manager->persist($entity)", "Prépare l'entité pour insertion (mise en file)"],
          ["$manager->flush()", "Exécute toutes les opérations persistées → INSERT en base"],
        ]},
        { type: "h", text: "AppFixtures" },
        { type: "p", text: "AppFixtures permet de pré-remplir la base de données avec des données de test ou initiales pour le développement. On crée les entités, on les persiste avec $manager->persist() et on envoie le tout en base avec $manager->flush(). C'est un outil pratique pour tester l'application sans avoir à créer manuellement les données à chaque fois." },
        { type: "code", filename: "AppFixtures.php", language: "php", code: `class AppFixtures extends Fixture
// "extends Fixture" = hérite de la classe Fixture de Symfony
// permet de charger des données de test en BDD en une seule commande
{
    /**
     * Loads data into the database.
     *
     * @param ObjectManager $manager Doctrine entity manager
     * // ObjectManager = l'outil de Doctrine qui gère les entités (persist, flush...)
     *
     * @return void
     * // void = cette fonction ne renvoie rien
     */
    public function load(ObjectManager $manager): void
    // c'est LA fonction obligatoire à remplir quand on étend Fixture
    // c'est ici qu'on crée toutes les fausses données de test
    {
        // Exemple commenté de création d'entité :
        // $product = new Product();          → crée un objet vide
        // $manager->persist($product);       → "mémorise" l'objet, prêt à être inséré en BDD

        $manager->flush();
        // envoie TOUTES les entités mémorisées en BDD en une seule fois
        // ⚠️ ici flush() est appelé sans aucun persist() avant : rien ne sera inséré en BDD
        // les fixtures sont vides pour l'instant, c'est un squelette à remplir
    }
}` },
        { type: "note", variant: "info", text: "ObjectManager $manager → gestionnaire d'entités Doctrine, responsable de la persistance des objets." },
        { type: "h", text: "TestFixtures" },
        { type: "p", text: "Ce fixture permet de peupler la base avec des données réalistes pour le développement et les tests. Chaque thème a ses cours, chaque cours a ses leçons avec des prix et des liens. Cela facilite les tests fonctionnels, la démonstration de l'application et le développement sans créer manuellement toutes les entités." },
        { type: "h", text: "Structure des données insérées" },
        {
          type: "diagram",
          content: `TestFixtures
│
├─ Theme: Musique
│   ├─ Course: Cursus d'initiation à la guitare (50€)
│   │   ├─ Lesson n°1 : Découverte de l'instrument (26€)
│   │   └─ Lesson n°2 : Les accords et les gammes (26€)
│   │
│   └─ Course: Cursus d'initiation au piano (50€)
│       ├─ Lesson n°1 : Découverte de l'instrument (26€)
│       └─ Lesson n°2 : Les accords et les gammes (26€)
│
├─ Theme: Informatique
│   └─ Course: Cursus d'initiation au développement web (60€)
│       ├─ Lesson n°1 : Les langages HTML et CSS (32€)
│       └─ Lesson n°2 : Dynamiser votre site avec JavaScript (32€)
│
├─ Theme: Jardinage
│   └─ Course: Cursus d'initiation au jardinage (30€)
│       ├─ Lesson n°1 : Les outils du jardinier (16€)
│       └─ Lesson n°2 : Jardiner avec la lune (16€)
│
└─ Theme: Cuisine
    ├─ Course: Cursus d'initiation à la cuisine (44€)
    │   ├─ Lesson n°1 : Les modes de cuisson (23€)
    │   └─ Lesson n°2 : Les saveurs (23€)
    │
    └─ Course: Cursus d'initiation à l'art du dressage culinaire (48€)
        ├─ Lesson n°1 : Mettre en œuvre le style dans l'assiette (26€)
        └─ Lesson n°2 : Harmoniser un repas à quatre plats (26€)`,
        },
        { type: "code", filename: "TestFixtures.php", language: "php", code: `class TestFixtures extends Fixture
// "extends Fixture" = hérite de la classe Fixture de Symfony
// permet de charger des données de test en BDD en une seule commande
{
    public function load(ObjectManager $manager): void
    // LA fonction obligatoire des fixtures : c'est ici qu'on crée toutes les fausses données
    // ObjectManager = l'outil Doctrine qui gère les entités (persist, flush...)
    {
        // -------------------------
        // Thème : Musique
        // -------------------------
        $music = new Theme();          // crée un nouveau thème vide
        $music->setName('Musique');    // lui donne le nom "Musique"
        $manager->persist($music);     // mémorise ce thème : il sera inséré en BDD au flush()

        // Cours de guitare
        $guitarCourse = new Course();
        $guitarCourse->setTitle('Cursus d\\'initiation à la guitare') // titre du cours
                     ->setPrice(50)                                  // prix du cours : 50€
                     ->setTheme($music);                             // rattache ce cours au thème Musique
        $manager->persist($guitarCourse);                            // mémorise le cours

        $lesson1Guitar = new Lesson();
        $lesson1Guitar->setTitle('Leçon n°1 : Découverte de l\\'instrument') // titre de la leçon
                      ->setPrice(26)                                         // prix de la leçon : 26€
                      ->setCourse($guitarCourse)                             // rattache au cours guitare
                      ->setTheme($music);                                    // rattache au thème Musique
        $manager->persist($lesson1Guitar);                                   // mémorise la leçon

        $lesson2Guitar = new Lesson();
        $lesson2Guitar->setTitle('Leçon n°2 : Les accords et les gammes')   // titre de la leçon
                      ->setPrice(26)                                         // prix de la leçon : 26€
                      ->setCourse($guitarCourse)                             // rattache au cours guitare
                      ->setTheme($music);                                    // rattache au thème Musique
        $manager->persist($lesson2Guitar);                                   // mémorise la leçon

        // Cours de piano
        $pianoCourse = new Course();
        $pianoCourse->setTitle('Cursus d\\'initiation au piano')  // titre du cours
                    ->setPrice(50)                               // prix du cours : 50€
                    ->setTheme($music);                          // rattache au thème Musique
        $manager->persist($pianoCourse);                         // mémorise le cours

        $lesson1Piano = new Lesson();
        $lesson1Piano->setTitle('Leçon n°1 : Découverte de l\\'instrument') // titre de la leçon
                     ->setPrice(26)                                         // prix : 26€
                     ->setCourse($pianoCourse)                              // rattache au cours piano
                     ->setTheme($music);                                    // rattache au thème Musique
        $manager->persist($lesson1Piano);                                   // mémorise la leçon

        $lesson2Piano = new Lesson();
        $lesson2Piano->setTitle('Leçon n°2 : Les accords et les gammes')   // titre de la leçon
                     ->setPrice(26)                                         // prix : 26€
                     ->setCourse($pianoCourse)                              // rattache au cours piano
                     ->setTheme($music);                                    // rattache au thème Musique
        $manager->persist($lesson2Piano);                                   // mémorise la leçon

        // -------------------------
        // Thème : Informatique
        // -------------------------
        $it = new Theme();
        $it->setName('Informatique');  // lui donne le nom "Informatique"
        $manager->persist($it);        // mémorise le thème

        $webDev = new Course();
        $webDev->setTitle('Cursus d\\'initiation au développement web') // titre du cours
               ->setPrice(60)                                          // prix : 60€
               ->setTheme($it);                                        // rattache au thème Informatique
        $manager->persist($webDev);                                    // mémorise le cours

        $lesson1Web = new Lesson();
        $lesson1Web->setTitle('Leçon n°1 : Les langages HTML et CSS') // titre de la leçon
                   ->setPrice(32)                                      // prix : 32€
                   ->setCourse($webDev)                                // rattache au cours dev web
                   ->setTheme($it);                                    // rattache au thème Informatique
        $manager->persist($lesson1Web);                                // mémorise la leçon

        $lesson2Web = new Lesson();
        $lesson2Web->setTitle('Leçon n°2 : Dynamiser votre site avec JavaScript') // titre de la leçon
                   ->setPrice(32)                                                  // prix : 32€
                   ->setCourse($webDev)                                            // rattache au cours dev web
                   ->setTheme($it);                                                // rattache au thème Informatique
        $manager->persist($lesson2Web);                                            // mémorise la leçon

        // -------------------------
        // Thème : Jardinage
        // -------------------------
        $garden = new Theme();
        $garden->setName('Jardinage'); // lui donne le nom "Jardinage"
        $manager->persist($garden);    // mémorise le thème

        $gardenCourse = new Course();
        $gardenCourse->setTitle('Cursus d\\'initiation au jardinage') // titre du cours
                     ->setPrice(30)                                  // prix : 30€
                     ->setTheme($garden);                            // rattache au thème Jardinage
        $manager->persist($gardenCourse);                            // mémorise le cours

        $lesson1Garden = new Lesson();
        $lesson1Garden->setTitle('Leçon n°1 : Les outils du jardinier') // titre de la leçon
                      ->setPrice(16)                                     // prix : 16€
                      ->setCourse($gardenCourse)                         // rattache au cours jardinage
                      ->setTheme($garden);                               // rattache au thème Jardinage
        $manager->persist($lesson1Garden);                               // mémorise la leçon

        $lesson2Garden = new Lesson();
        $lesson2Garden->setTitle('Leçon n°2 : Jardiner avec la lune')   // titre de la leçon
                      ->setPrice(16)                                     // prix : 16€
                      ->setCourse($gardenCourse)                         // rattache au cours jardinage
                      ->setTheme($garden);                               // rattache au thème Jardinage
        $manager->persist($lesson2Garden);                               // mémorise la leçon

        // -------------------------
        // Thème : Cuisine
        // -------------------------
        $cooking = new Theme();
        $cooking->setName('Cuisine'); // lui donne le nom "Cuisine"
        $manager->persist($cooking);  // mémorise le thème

        $cookingCourse1 = new Course();
        $cookingCourse1->setTitle('Cursus d\\'initiation à la cuisine') // titre du cours
                       ->setPrice(44)                                  // prix : 44€
                       ->setTheme($cooking);                           // rattache au thème Cuisine
        $manager->persist($cookingCourse1);                            // mémorise le cours

        $lesson1Cook = new Lesson();
        $lesson1Cook->setTitle('Leçon n°1 : Les modes de cuisson') // titre de la leçon
                    ->setPrice(23)                                  // prix : 23€
                    ->setCourse($cookingCourse1)                    // rattache au cours cuisine
                    ->setTheme($cooking);                           // rattache au thème Cuisine
        $manager->persist($lesson1Cook);                            // mémorise la leçon

        $lesson2Cook = new Lesson();
        $lesson2Cook->setTitle('Leçon n°2 : Les saveurs')          // titre de la leçon
                    ->setPrice(23)                                  // prix : 23€
                    ->setCourse($cookingCourse1)                    // rattache au cours cuisine
                    ->setTheme($cooking);                           // rattache au thème Cuisine
        $manager->persist($lesson2Cook);                            // mémorise la leçon

        $cookingCourse2 = new Course();
        $cookingCourse2->setTitle('Cursus d\\'initiation à l\\'art du dressage culinaire') // titre du cours
                       ->setPrice(48)                                                     // prix : 48€
                       ->setTheme($cooking);                                              // rattache au thème Cuisine
        $manager->persist($cookingCourse2);                                               // mémorise le cours

        $lesson1Dress = new Lesson();
        $lesson1Dress->setTitle('Leçon n°1 : Mettre en œuvre le style dans l\\'assiette') // titre de la leçon
                     ->setPrice(26)                                                        // prix : 26€
                     ->setCourse($cookingCourse2)                                          // rattache au cours dressage
                     ->setTheme($cooking);                                                 // rattache au thème Cuisine
        $manager->persist($lesson1Dress);                                                  // mémorise la leçon

        $lesson2Dress = new Lesson();
        $lesson2Dress->setTitle('Leçon n°2 : Harmoniser un repas à quatre plats')         // titre de la leçon
                     ->setPrice(26)                                                        // prix : 26€
                     ->setCourse($cookingCourse2)                                          // rattache au cours dressage
                     ->setTheme($cooking);                                                 // rattache au thème Cuisine
        $manager->persist($lesson2Dress);                                                  // mémorise la leçon

        // -------------------------
        $manager->flush();
        // envoie TOUTES les entités mémorisées en BDD en une seule fois
        // c'est ici que tout est réellement inséré : thèmes, cours et leçons d'un seul coup
    }
}` },
        { type: "h", text: "Création d'un thème" },
        { type: "code", filename: "creation-theme.php", language: "php", code: `$music = new Theme();
$music->setName('Musique');
$manager->persist($music);` },
        { type: "list", items: [
          "On crée un thème (ici \"Musique\") pour regrouper des cours",
          "persist($music) → prépare l'entité à être sauvegardée en base",
          "Même logique répétée pour les thèmes Informatique, Jardinage, et Cuisine",
        ]},
        { type: "h", text: "Création d'un cours" },
        { type: "code", filename: "creation-cours.php", language: "php", code: `$guitarCourse = new Course();
$guitarCourse->setTitle('Cursus d\\'initiation à la guitare')
             ->setPrice(50)
             ->setTheme($music);
$manager->persist($guitarCourse);` },
        { type: "list", items: [
          "Chaque cours est lié à un thème et a un prix",
          "persist($guitarCourse) → prépare le cours pour insertion",
          "Cette logique est répétée pour tous les cours de chaque thème : guitare, piano, web, jardinage, cuisine",
        ]},
        { type: "h", text: "Création d'une leçon" },
        { type: "code", filename: "creation-lecon.php", language: "php", code: `$lesson1Guitar = new Lesson();
$lesson1Guitar->setTitle('Leçon n°1 : Découverte de l\\'instrument')
              ->setPrice(26)
              ->setCourse($guitarCourse)
              ->setTheme($music);
$manager->persist($lesson1Guitar);` },
        { type: "p", text: "Chaque leçon est liée à un cours, liée à un thème, et associée à un prix. persist() → prépare l'enregistrement. Ce processus est répété pour toutes les leçons de tous les cours, permettant de simuler une base complète de formation." },
        { type: "h", text: "$manager->flush()" },
        {
          type: "diagram",
          content: `flush() → exécute toutes les persistances précédentes
         insérant tous les thèmes, cours et leçons
         dans la base de données en une seule transaction`,
        },
        { type: "h", text: "Tableau récapitulatif des données insérées" },
        { type: "table", headers: ["Thème", "Cours", "Nb leçons", "Prix cours", "Prix leçon"], rows: [
          ["Musique", "Guitare", "2", "50€", "26€"],
          ["Musique", "Piano", "2", "50€", "26€"],
          ["Informatique", "Développement web", "2", "60€", "32€"],
          ["Jardinage", "Jardinage", "2", "30€", "16€"],
          ["Cuisine", "Cuisine", "2", "44€", "23€"],
          ["Cuisine", "Dressage culinaire", "2", "48€", "26€"],
        ]},
        { type: "note", variant: "info", text: "Total : 4 thèmes — 6 cours — 12 leçons" },
      ],
    },
    {
      id: "dp-readme-projet",
      title: "README — Knowledge Learning (plateforme e-learning)",
      blocks: [
        { type: "p", text: "Knowledge Learning est une plateforme d'apprentissage en ligne (cours, leçons, certifications). Projet académique, développé en Symfony." },
        { type: "h", text: "Pré-requis" },
        { type: "table", headers: ["Outil", "Version", "Rôle"], rows: [
          ["PHP", "8.1+", "Langage principal de l'application"],
          ["Composer", "latest", "Installe et gère les bibliothèques PHP"],
          ["MySQL", "8+", "Base de données relationnelle (utilisateurs, cours, leçons…)"],
          ["Symfony CLI", "optionnel", "Lance et gère l'application Symfony facilement"],
          ["Node.js & npm", "optionnel", "Compile les fichiers front-end (CSS/JS) avec Webpack Encore"],
        ]},
        { type: "h", text: "a) Cloner le projet" },
        { type: "code", filename: "clone.sh", language: "bash", code: `git clone https://github.com/katoudevb/knowledge.git
cd knowledge-learning` },
        { type: "h", text: "b) Installer les dépendances PHP" },
        { type: "code", filename: "composer-install.sh", language: "bash", code: `composer install` },
        { type: "h", text: "c) Configurer les variables d'environnement" },
        { type: "code", filename: "env-copy.sh", language: "bash", code: `# Copier le fichier de config
cp .env .env.local` },
        { type: "list", items: [".env → contient les valeurs par défaut", ".env.local → spécifique à ton ordinateur, ne doit pas être commité"] },
        { type: "code", filename: ".env.local", language: "bash", code: `DATABASE_URL="mysql://utilisateur:motdepasse@127.0.0.1:3306/knowledge_learning"
MAILER_DSN=smtp://utilisateur:motdepasse@smtp.exemple.com:port` },
        { type: "h", text: "d) Créer la base de données et les tables" },
        { type: "code", filename: "db-setup.sh", language: "bash", code: `php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate` },
        { type: "h", text: "e) Charger les données initiales (fixtures)" },
        { type: "code", filename: "fixtures-load.sh", language: "bash", code: `php bin/console doctrine:fixtures:load` },
        { type: "h", text: "Lancer l'application" },
        { type: "code", filename: "server-start.sh", language: "bash", code: `symfony server:start` },
        { type: "p", text: "URLs d'accès :" },
        {
          type: "diagram",
          content: `Front-end (utilisateur) : http://127.0.0.1:8000/
Back-office (admin)     : http://127.0.0.1:8000/admin

Flux de démarrage
─────────────────────────────────────────────────────
Terminal          Navigateur
   │                  │
   │  symfony          │
   │  server:start     │
   │──────────────►   │
   │  Serveur actif    │
   │                  │  http://127.0.0.1:8000/
   │                  │◄──── Front-end (ROLE_CLIENT)
   │                  │  http://127.0.0.1:8000/admin
   │                  │◄──── Back-office (ROLE_ADMIN)
─────────────────────────────────────────────────────`,
        },
        { type: "h", text: "Comptes de test" },
        { type: "table", headers: ["Compte", "Email", "Mot de passe"], rows: [
          ["Administrateur", "admin@example.com", "Admin123@"],
          ["Client", "client@example.com", "Client123@"],
        ]},
        { type: "table", headers: ["BDD — Champ", "Valeur"], rows: [
          ["Utilisateur", "knowledge_user"],
          ["Mot de passe", "tzVz6j[IVUlAiEyZ"],
        ]},
        { type: "h", text: "Tests automatisés" },
        { type: "code", filename: "phpunit.sh", language: "bash", code: `php bin/phpunit` },
        { type: "list", items: [
          "Lance les tests unitaires et fonctionnels",
          "Vérifie : inscription, connexion, achats, validation des leçons, repositories",
          "Fichier de configuration : .env.test.local (contient les clés Stripe de test)",
        ]},
        { type: "h", text: "Structure du projet" },
        {
          type: "diagram",
          content: `knowledge-learning/
│
├── src/
│   ├── Entity/         → Entités Doctrine (tables de la base)
│   ├── Repository/     → Accès aux données (requêtes personnalisées)
│   ├── Controller/     → Routes et logique des pages
│   └── Service/        → Logique métier (calculs, règles spécifiques)
│
├── templates/          → Vues Twig pour le front-end
│
└── tests/              → Tests unitaires et fonctionnels`,
        },
        { type: "table", headers: ["Dossier", "Rôle"], rows: [
          ["src/Entity/", "Définitions des entités Doctrine (tables de la base)"],
          ["src/Repository/", "Accès aux données (requêtes personnalisées)"],
          ["src/Controller/", "Routes et logique des pages"],
          ["src/Service/", "Logique métier (calculs, règles spécifiques)"],
          ["templates/", "Vues Twig pour le front-end"],
          ["tests/", "Tests unitaires et fonctionnels"],
        ]},
        { type: "h", text: "Fonctionnalités principales" },
        { type: "p", text: "Gestion des utilisateurs : inscription et activation de compte par email, gestion des rôles (ROLE_ADMIN pour les admins, ROLE_CLIENT pour les utilisateurs)." },
        {
          type: "diagram",
          content: `Rôles de l'application
──────────────────────────────────────────
         Application
              │
    ┌─────────┴──────────┐
    │                    │
ROLE_ADMIN          ROLE_CLIENT
    │                    │
  /admin/*           /front/*
  Gestion            Cours
  utilisateurs       Leçons
  cours              Certifications
  leçons
──────────────────────────────────────────`,
        },
        { type: "p", text: "Achats et contenu : achat de cursus ou de leçons via Stripe (mode test/sandbox), suivi de progression des leçons, génération de certifications." },
        { type: "p", text: "Sécurité : mots de passe hashés (stockage sécurisé), protection CSRF." },
        { type: "p", text: "Interface : front-end minimaliste pour la démonstration." },
        { type: "h", text: "Système d'achat — Stripe (sandbox)" },
        {
          type: "diagram",
          content: `Flux d'achat Stripe (mode test)
─────────────────────────────────────────────────────────────
Utilisateur       Front-end         Stripe          Base
    │                 │               │               │
    │  Clique achat   │               │               │
    │────────────►    │               │               │
    │                 │  Requête POST │               │
    │                 │──────────────►               │
    │                 │  Paiement simulé              │
    │                 │◄──────────────               │
    │                 │  Enregistre Purchase          │
    │                 │──────────────────────────►   │
    │  Redirection    │                               │
    │◄────────────    │                               │
─────────────────────────────────────────────────────────────`,
        },
        { type: "note", variant: "info", text: "Carte de paiement factice : 4242 4242 4242 4242 — permet de simuler un paiement sans utiliser de vraies cartes bancaires." },
        { type: "h", text: "Résumé global — Checklist d'installation" },
        {
          type: "diagram",
          content: `Étapes d'installation
─────────────────────────────────────────
  [1] Vérifie les pré-requis (PHP 8.1+, Composer, MySQL 8+)
   │
  [2] Clone le repo et entre dans le dossier
   │
  [3] composer install
   │
  [4] Copie .env → .env.local
      Configure DATABASE_URL et MAILER_DSN
   │
  [5] php bin/console doctrine:database:create
      php bin/console doctrine:migrations:migrate
   │
  [6] (Optionnel) php bin/console doctrine:fixtures:load
   │
  [7] symfony server:start
   │
  [8] Accède à http://127.0.0.1:8000/
   │
  [9] php bin/phpunit  (pour valider)
─────────────────────────────────────────`,
        },
        { type: "h", text: "Licence et auteur" },
        { type: "p", text: "Projet destiné à des fins académiques, non destiné à un usage commercial." },
        { type: "table", headers: ["Champ", "Valeur"], rows: [
          ["Nom", "Kat"],
          ["Rôle", "Développeuse Web Full Stack"],
          ["Projet", "Conception et développement de la plateforme e-learning « Knowledge Learning »"],
        ]},
      ],
    },
    {
      id: "dp-repository",
      title: "Repository — Accès aux données Doctrine",
      blocks: [
        { type: "h", text: "Architecture générale des Repositories Doctrine" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│                  ServiceEntityRepository                     │
│          (fourni par Doctrine — méthodes CRUD auto)          │
│                                                              │
│  find($id)         findAll()       findBy([criteria])        │
│  findOneBy([...])  count([...])    createQueryBuilder(alias) │
└──────────────┬───────────────────────────────────────────────┘
               │  extends (hérite)
               │
    ┌──────────┴──────────────────────────────────┐
    │                                             │
    ▼                                             ▼
CertificationRepository          UserRepository
CourseRepository                   implements PasswordUpgraderInterface
LessonRepository                   + upgradePassword() ← méthode ACTIVE
PurchaseRepository
ThemeRepository
UserLessonRepository
    │
    └── Chacun peut ajouter des méthodes personnalisées
        via createQueryBuilder() (QueryBuilder Doctrine)`,
        },
        { type: "h", text: "CertificationRepository" },
        { type: "p", text: "Le CertificationRepository permet de centraliser l'accès aux données des certifications. Toutes les opérations standards sont déjà disponibles grâce à ServiceEntityRepository, et on peut facilement ajouter des méthodes personnalisées pour des besoins spécifiques, comme récupérer toutes les certifications d'un utilisateur ou d'un cours." },
        { type: "code", filename: "CertificationRepository.php", language: "php", code: `class CertificationRepository extends ServiceEntityRepository
// "extends ServiceEntityRepository" = hérite de tous les outils de base de Doctrine
// (find, findAll, findBy, findOneBy... sont disponibles automatiquement)
{
    /**
     * CertificationRepository constructor.
     * @param ManagerRegistry $registry Gestionnaire des connexions à la BDD
     */
    public function __construct(ManagerRegistry $registry)
    // ManagerRegistry = outil Doctrine qui gère la connexion à la BDD
    {
        parent::__construct($registry, Certification::class);
        // "parent::__construct" = appelle le constructeur de ServiceEntityRepository
        // Certification::class = dit à Doctrine "ce repository gère uniquement les Certifications"
    }

    // Les méthodes commentées ci-dessous sont des exemples générés automatiquement par Symfony
    // Elles montrent comment écrire des requêtes personnalisées si besoin

    // public function findByExampleField($value): array
    // // renverrait un tableau de Certification filtrées par un champ donné
    // {
    //     return $this->createQueryBuilder('c')  // 'c' = alias pour Certification dans la requête
    //         ->andWhere('c.exampleField = :val') // filtre sur un champ (ex: c.course = :val)
    //         ->setParameter('val', $value)       // remplace :val par la vraie valeur (sécurise contre les injections SQL)
    //         ->orderBy('c.id', 'ASC')            // trie par id croissant
    //         ->setMaxResults(10)                 // limite à 10 résultats maximum
    //         ->getQuery()                        // transforme le builder en vraie requête SQL
    //         ->getResult();                      // exécute la requête et renvoie un tableau de résultats
    // }

    // public function findOneBySomeField($value): ?Certification
    // // renverrait une seule Certification ou null si aucune trouvée
    // {
    //     return $this->createQueryBuilder('c')
    //         ->andWhere('c.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();             // renvoie un seul résultat ou null (jamais un tableau)
    // }
}` },
        { type: "h", text: "CourseRepository" },
        { type: "p", text: "Le CourseRepository permet de centraliser toutes les opérations sur les cours. Les opérations standard sont déjà disponibles grâce à ServiceEntityRepository, et il est simple d'ajouter des méthodes personnalisées pour des besoins spécifiques, comme récupérer tous les cours d'un thème ou d'un utilisateur." },
        { type: "code", filename: "CourseRepository.php", language: "php", code: `class CourseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Course::class);
        // Course::class = dit à Doctrine "ce repository gère uniquement les Cours"
    }

    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('c')  // 'c' = alias pour Course dans la requête
    //         ->andWhere('c.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('c.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    // public function findOneBySomeField($value): ?Course
    // {
    //     return $this->createQueryBuilder('c')
    //         ->andWhere('c.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}` },
        { type: "h", text: "LessonRepository" },
        { type: "p", text: "Le LessonRepository permet de centraliser toutes les opérations sur les leçons, avec la possibilité d'ajouter des méthodes personnalisées, comme récupérer toutes les leçons d'un cours ou filtrer par thème." },
        { type: "code", filename: "LessonRepository.php", language: "php", code: `class LessonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Lesson::class);
        // Lesson::class = dit à Doctrine "ce repository gère uniquement les Leçons"
    }

    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('l')  // 'l' = alias pour Lesson dans la requête
    //         ->andWhere('l.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('l.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    // public function findOneBySomeField($value): ?Lesson
    // {
    //     return $this->createQueryBuilder('l')
    //         ->andWhere('l.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}` },
        { type: "h", text: "PurchaseRepository" },
        { type: "p", text: "Le PurchaseRepository permet de centraliser toutes les opérations sur les achats, avec la possibilité d'ajouter des méthodes personnalisées, comme récupérer tous les achats d'un utilisateur ou filtrer par leçon ou cours." },
        { type: "code", filename: "PurchaseRepository.php", language: "php", code: `class PurchaseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Purchase::class);
        // Purchase::class = dit à Doctrine "ce repository gère uniquement les Achats"
    }

    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('p')  // 'p' = alias pour Purchase dans la requête
    //         ->andWhere('p.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('p.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    // public function findOneBySomeField($value): ?Purchase
    // {
    //     return $this->createQueryBuilder('p')
    //         ->andWhere('p.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}` },
        { type: "h", text: "ThemeRepository" },
        { type: "p", text: "Le ThemeRepository permet de centraliser toutes les opérations sur les thèmes, avec la possibilité d'ajouter des méthodes personnalisées pour filtrer ou récupérer certains thèmes selon des besoins spécifiques." },
        { type: "code", filename: "ThemeRepository.php", language: "php", code: `class ThemeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Theme::class);
        // Theme::class = dit à Doctrine "ce repository gère uniquement les Thèmes"
    }

    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('t')  // 't' = alias pour Theme dans la requête
    //         ->andWhere('t.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('t.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    // public function findOneBySomeField($value): ?Theme
    // {
    //     return $this->createQueryBuilder('t')
    //         ->andWhere('t.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}` },
        { type: "h", text: "UserLessonRepository" },
        { type: "p", text: "Le UserLessonRepository permet de centraliser toutes les opérations sur les leçons des utilisateurs (progression), avec la possibilité d'ajouter des méthodes personnalisées pour filtrer ou récupérer certaines leçons d'utilisateurs selon des besoins spécifiques." },
        { type: "code", filename: "UserLessonRepository.php", language: "php", code: `class UserLessonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserLesson::class);
        // UserLesson::class = dit à Doctrine "ce repository gère uniquement les progressions utilisateur/leçon"
    }

    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('u')  // 'u' = alias pour UserLesson dans la requête
    //         ->andWhere('u.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('u.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    // public function findOneBySomeField($value): ?UserLesson
    // {
    //     return $this->createQueryBuilder('u')
    //         ->andWhere('u.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}` },
        { type: "h", text: "UserRepository — Particularité : ré-hachage automatique des mots de passe" },
        { type: "p", text: "Le UserRepository permet de centraliser toutes les opérations sur les utilisateurs, y compris le ré-hachage automatique des mots de passe pour plus de sécurité." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│                      UserRepository                          │
│                                                              │
│  extends ServiceEntityRepository                             │
│  implements PasswordUpgraderInterface  ◄── SPÉCIFIQUE        │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  upgradePassword($user, $newHashedPassword)         │     │
│  │                                                     │     │
│  │  1. Vérifie instanceof User                         │     │
│  │     → NON : throw UnsupportedUserException          │     │
│  │     → OUI : Suite...                                │     │
│  │                                                     │     │
│  │  2. $user->setPassword($newHashedPassword)          │     │
│  │     → Met à jour le mot de passe                    │     │
│  │                                                     │     │
│  │  3. persist($user) + flush()                        │     │
│  │     → Sauvegarde en base de données                 │     │
│  └─────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
        },
        { type: "code", filename: "UserRepository.php", language: "php", code: `class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
// "implements PasswordUpgraderInterface" = contrat Symfony qui oblige à avoir upgradePassword()
// permet à Symfony de mettre à jour automatiquement les mots de passe hashés si l'algorithme change
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
        // User::class = dit à Doctrine "ce repository gère uniquement les Utilisateurs"
    }

    /**
     * Utilisé pour mettre à jour automatiquement le hash du mot de passe au fil du temps.
     * @param PasswordAuthenticatedUserInterface $user L'utilisateur dont le mot de passe doit être mis à jour
     * @param string $newHashedPassword Le nouveau mot de passe déjà hashé
     * @throws UnsupportedUserException Si l'objet passé n'est pas un User
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    // Symfony l'appelle automatiquement quand il détecte qu'un mot de passe doit être re-hashé
    // (ex: si on passe de bcrypt à argon2, les anciens mots de passe sont mis à jour à la prochaine connexion)
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf(
                'Instances of "%s" are not supported.',
                $user::class
                // $user::class = renvoie le nom complet de la classe de l'objet (ex: "App\\Entity\\Admin")
            ));
            // UnsupportedUserException = erreur spéciale Symfony qui signifie "ce type d'utilisateur n'est pas géré ici"
        }

        $user->setPassword($newHashedPassword); // remplace l'ancien hash par le nouveau

        $this->getEntityManager()->persist($user);
        // persist() = mémorise la modification, prête à être envoyée en BDD

        $this->getEntityManager()->flush();
        // envoie immédiatement la modification en BDD
        // ici on flush() directement dans le repository (cas rare mais justifié pour la sécurité)
    }

    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('u')  // 'u' = alias pour User dans la requête
    //         ->andWhere('u.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('u.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    // public function findOneBySomeField($value): ?User
    // {
    //     return $this->createQueryBuilder('u')
    //         ->andWhere('u.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}` },
        { type: "h", text: "Récapitulatif comparatif" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────────┐
│                    Repositories du projet                           │
├──────────────────────────┬──────────────────┬───────────────────────┤
│  Repository              │  Entité gérée    │  Spécificité          │
├──────────────────────────┼──────────────────┼───────────────────────┤
│  CertificationRepository │  Certification   │  Standard             │
│  CourseRepository        │  Course          │  Standard             │
│  LessonRepository        │  Lesson          │  Standard             │
│  PurchaseRepository      │  Purchase        │  Standard             │
│  ThemeRepository         │  Theme           │  Standard             │
│  UserLessonRepository    │  UserLesson      │  Standard             │
│  UserRepository          │  User            │  + upgradePassword()  │
└──────────────────────────┴──────────────────┴───────────────────────┘`,
        },
        { type: "h", text: "Anatomie d'une méthode QueryBuilder type" },
        {
          type: "diagram",
          content: `$this->createQueryBuilder('alias')
         │
         ├── ->andWhere('alias.champ = :val')   ← filtre WHERE
         ├── ->setParameter('val', $value)       ← valeur sécurisée
         ├── ->orderBy('alias.id', 'ASC')        ← tri (optionnel)
         ├── ->setMaxResults(10)                 ← limite (optionnel)
         ├── ->getQuery()                        ← compile la requête
         │
         └── ->getResult()           ← retourne un tableau d'entités
             ->getOneOrNullResult()  ← retourne une entité ou null`,
        },
      ],
    },
  {
      id: "dp-services",
      title: "Services — Logique métier",
      blocks: [
        { type: "h", text: "Vue d'ensemble des Services" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                    ARCHITECTURE SERVICES                 │
├──────────────────┬──────────────────┬───────────────────┤
│  CourseService   │  FrontService    │  LessonsService   │
│  ThemeService    │  UserService     │                   │
├──────────────────┴──────────────────┴───────────────────┤
│              EntityManagerInterface (Doctrine)           │
├─────────────────────────────────────────────────────────┤
│                      Base de données                     │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Principe commun à tous les services : séparation de la logique métier et des contrôleurs, contrôleurs légers qui délèguent tout aux services, logique réutilisable et testable, toutes les opérations passent par l'EntityManagerInterface." },
        { type: "h", text: "CourseService" },
        { type: "p", text: "Service métier qui centralise toutes les opérations liées aux cours (Course). Il permet de séparer la logique de manipulation des cours de celle des contrôleurs, rendant le code plus propre et maintenable." },
        {
          type: "diagram",
          content: `CourseService
│
├── getAllCourses()    → SELECT * FROM course
├── createCourse()    → persist() + flush()   → INSERT
├── updateCourse()    → flush()               → UPDATE
└── deleteCourse()    → remove()  + flush()   → DELETE`,
        },
        { type: "code", filename: "CourseService.php", language: "php", code: `class CourseService
// classe de service dédiée à la gestion des cours
// centralise toute la logique BDD liée aux cours (créer, lire, modifier, supprimer)
{
    public function __construct(private EntityManagerInterface $em) {}
    // EntityManagerInterface = outil principal de Doctrine pour interagir avec la BDD
    // (persist, flush, remove...) — injecté automatiquement au chargement du service

    /**
     * Renvoie tous les cours depuis la BDD.
     * @return Course[]
     */
    public function getAllCourses(): array
    {
        return $this->em->getRepository(Course::class)->findAll();
        // findAll() = méthode automatique de Doctrine qui renvoie tous les cours de la BDD
    }

    /**
     * Enregistre un nouveau cours en BDD.
     */
    public function createCourse(Course $course): void
    {
        $this->em->persist($course); // mémorise le nouveau cours, prêt à être inséré en BDD
        $this->em->flush();          // envoie l'insertion en BDD
    }

    /**
     * Met à jour un cours existant en BDD.
     */
    public function updateCourse(Course $course): void
    {
        $this->em->flush();
        // pas de persist() ici ! Doctrine "surveille" déjà les entités récupérées en BDD
        // il détecte automatiquement les modifications → un simple flush() suffit pour les sauvegarder
    }

    /**
     * Supprime un cours de la BDD.
     */
    public function deleteCourse(Course $course): void
    {
        $this->em->remove($course); // marque le cours pour suppression
        $this->em->flush();         // exécute la suppression en BDD
    }
}` },
        { type: "h", text: "FrontService" },
        { type: "p", text: "Service métier dédié au front-end qui centralise la logique d'accès aux cours et leçons, la validation des leçons et la gestion des certifications." },
        {
          type: "diagram",
          content: `FrontService
│
├── ACCÈS
│   ├── userHasAccessToCourse()     → vérifie accès cours
│   └── userHasAccessToLesson()     → vérifie accès leçon
│
├── ACHAT SANDBOX
│   └── simulateSandboxPurchase()   → simule achat sans paiement
│
├── VALIDATION / CERTIFICATION
│   ├── validateLesson()                   → valide une leçon + certification auto
│   └── validateCourseForCertification()   → valide cours entier
│
└── RÉCUPÉRATION
    └── getThemeWithCourses()       → récupère thème + cours liés`,
        },
        { type: "code", filename: "FrontService.php", language: "php", code: `class FrontService
{
    public function __construct(private EntityManagerInterface $em) {}

    public function userHasAccessToCourse(User $user, Course $course): bool
    {
        foreach ($user->getPurchasedCourses() as $userCourse) {
            if ($userCourse === $course) return true;
        }

        foreach ($course->getPurchases() as $purchase) {
            if ($purchase->getUser() === $user) return true;
        }

        return false;
    }

    public function userHasAccessToLesson(User $user, Lesson $lesson): bool
    {
        foreach ($lesson->getPurchases() as $purchase) {
            if ($purchase->getUser() === $user) return true;
        }

        foreach ($user->getUserLessons() as $userLesson) {
            if ($userLesson->getLesson() === $lesson) return true;
        }

        return false;
    }

    public function simulateSandboxPurchase(User $user, object $item): Purchase
    {
        $purchase = new Purchase();
        $purchase->sandboxPurchase($user, $item);
        $this->em->persist($purchase);

        if ($item instanceof Course) {
            $user->addPurchasedCourse($item);
            $this->em->persist($user);

        } elseif ($item instanceof Lesson) {
            $userLesson = $this->em->getRepository(UserLesson::class)
                ->findOneBy(['user' => $user, 'lesson' => $item]);

            if (!$userLesson) {
                $userLesson = new UserLesson();
                $userLesson->setUser($user)->setLesson($item);
                $this->em->persist($userLesson);
            }
        }

        $this->em->flush();

        return $purchase;
    }

    public function validateLesson(User $user, Lesson $lesson): void
    {
        $userLesson = $this->em->getRepository(UserLesson::class)
            ->findOneBy(['user' => $user, 'lesson' => $lesson]);

        if (!$userLesson) {
            $userLesson = new UserLesson();
            $userLesson->setUser($user)->setLesson($lesson);
        }

        $userLesson->setValidated(true);
        $this->em->persist($userLesson);
        $this->em->flush();

        $allValidated = true;
        foreach ($lesson->getCourse()->getLessons() as $l) {
            if (!$user->hasValidatedLesson($l)) {
                $allValidated = false;
                break;
            }
        }

        if ($allValidated) {
            $user->addCertificationFromCourse($lesson->getCourse());
            $this->em->flush();
        }
    }

    public function validateCourseForCertification(User $user, Course $course): void
    {
        $allValidated = true;
        foreach ($course->getLessons() as $lesson) {
            if (!$user->hasValidatedLesson($lesson)) {
                $allValidated = false;
                break;
            }
        }

        if ($allValidated) {
            $user->addCertificationFromCourse($course);
            $this->em->flush();
        }
    }

    public function getThemeWithCourses(int $themeId): Theme
    {
        $theme = $this->em->getRepository(Theme::class)->find($themeId);

        if (!$theme) throw new \\Exception('Theme not found.');

        return $theme;
    }
}` },
        { type: "h", text: "LessonsService" },
        { type: "p", text: "Service métier qui centralise toutes les opérations liées aux leçons Lesson. Les contrôleurs restent légers car ils délèguent toute la logique métier à ce service." },
        {
          type: "diagram",
          content: `LessonsService
│
├── getAllLessons()  → findAll()              → SELECT * FROM lesson
├── saveLesson()    → persist() + flush()    → INSERT / UPDATE
└── deleteLesson()  → remove()  + flush()   → DELETE`,
        },
        { type: "code", filename: "LessonsService.php", language: "php", code: `class LessonsService
{
    public function __construct(private EntityManagerInterface $em) {}

    public function getAllLessons(): array
    {
        return $this->em->getRepository(Lesson::class)->findAll();
    }

    public function saveLesson(Lesson $lesson): void
    {
        $this->em->persist($lesson);
        $this->em->flush();
    }

    public function deleteLesson(Lesson $lesson): void
    {
        $this->em->remove($lesson);
        $this->em->flush();
    }
}` },
        { type: "h", text: "ThemeService" },
        { type: "p", text: "Service métier qui centralise toutes les opérations CRUD et de gestion des relations pour les thèmes Theme : récupération, création/mise à jour, suppression et association avec les cours." },
        {
          type: "diagram",
          content: `ThemeService
│
├── getAllThemes()           → findAll()           → tous les thèmes
├── getThemeWithCourses()   → find($id)            → thème + cours liés
├── addCourseToTheme()      → addCourse() + flush  → association thème-cours
├── saveTheme()             → persist() + flush()  → INSERT / UPDATE
└── deleteTheme()           → remove()  + flush()  → DELETE`,
        },
        { type: "code", filename: "ThemeService.php", language: "php", code: `class ThemeService
{
    public function __construct(private EntityManagerInterface $em) {}

    public function getAllThemes(): array
    {
        return $this->em->getRepository(Theme::class)->findAll();
    }

    public function getThemeWithCourses(int $themeId): ?Theme
    {
        return $this->em->getRepository(Theme::class)->find($themeId);
    }

    public function addCourseToTheme(Theme $theme, Course $course): void
    {
        $theme->addCourse($course);

        $this->em->persist($theme);
        $this->em->flush();
    }

    public function saveTheme(Theme $theme): void
    {
        $this->em->persist($theme);
        $this->em->flush();
    }

    public function deleteTheme(Theme $theme): void
    {
        $this->em->remove($theme);
        $this->em->flush();
    }
}` },
        { type: "h", text: "UserService" },
        { type: "p", text: "Service métier qui centralise toutes les opérations CRUD et la gestion du mot de passe pour les utilisateurs. Les contrôleurs restent légers et ne manipulent pas directement la logique de persistance ou de hachage des mots de passe." },
        {
          type: "diagram",
          content: `UserService
│
├── Dépendances injectées
│   ├── EntityManagerInterface $entityManager   → accès BDD
│   └── UserPasswordHasherInterface $passwordHasher → hachage MDP
│
└── Méthodes
    ├── getAllUsers()     → findAll()                   → tous les users
    ├── saveUser()        → [hash MDP?] + persist + flush → INSERT / UPDATE
    ├── deleteUser()      → remove() + flush             → DELETE
    └── registerUser()    → hash + ROLE_CLIENT + saveUser → inscription`,
        },
        { type: "code", filename: "UserService.php", language: "php", code: `class UserService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher
    ) {}

    public function getAllUsers(): array
    {
        return $this->entityManager->getRepository(User::class)->findAll();
    }

    public function saveUser(User $user, ?string $plainPassword = null): void
    {
        if ($plainPassword) {
            $user->setPassword(
                $this->passwordHasher->hashPassword($user, $plainPassword)
            );
        }

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }

    public function deleteUser(User $user): void
    {
        $this->entityManager->remove($user);
        $this->entityManager->flush();
    }

    public function registerUser(User $user, string $plainPassword): void
    {
        $user->setPassword(
            $this->passwordHasher->hashPassword($user, $plainPassword)
        );

        if (!in_array('ROLE_CLIENT', $user->getRoles(), true)) {
            $user->setRoles(array_merge($user->getRoles(), ['ROLE_CLIENT']));
        }

        $this->saveUser($user);
    }
}` },
      ],
    },
  {
      id: "dp-environnements",
      title: "Environnements (.env) — Configuration multi-environnements",
      blocks: [
        { type: "p", text: "Les fichiers .env configurent les variables d'environnement de Symfony." },
        { type: "note", variant: "warning", text: "Ne jamais mettre de secrets de production dans un fichier commité." },
        { type: "h", text: "Ordre de priorité des fichiers .env" },
        {
          type: "diagram",
          content: `Ordre de chargement (le dernier écrase les précédents)
──────────────────────────────────────────────────────
[1] .env                   → valeurs par défaut (committé)
[2] .env.local             → surcharges locales (NON committé)
[3] .env.$APP_ENV          → spécifique à l'environnement (committé)
[4] .env.$APP_ENV.local    → surcharges env locales (NON committé)
[5] Variables système      → priorité absolue (serveur)
──────────────────────────────────────────────────────`,
        },
        { type: "note", variant: "info", text: "Les variables système (exportées directement sur le serveur) prennent toujours le dessus sur les fichiers .env. Les secrets sensibles (DB, API keys, Stripe) ne doivent jamais être commités en clair." },
        { type: "h", text: "Fichier .env — valeurs par défaut" },
        { type: "p", text: "Configure les variables d'environnement par défaut pour Symfony. Chargé automatiquement dans tous les environnements." },
        { type: "code", filename: ".env", language: "bash", code: `# In all environments, the following files are loaded if they exist,
# the latter taking precedence over the former:
#
# * .env                    contains default values for the environment variables needed by the app
# * .env.local              uncommitted file with local overrides
# * .env.$APP_ENV           committed environment-specific defaults
# * .env.$APP_ENV.local     uncommitted environment-specific overrides
#
# Real environment variables win over .env files.
#
# DO NOT DEFINE PRODUCTION SECRETS IN THIS FILE NOR IN ANY OTHER COMMITTED FILES.
# https://symfony.com/doc/current/configuration/secrets.html
#
# Run "composer dump-env prod" to compile .env files for production use (requires symfony/flex >=1.2).
# https://symfony.com/doc/current/best_practices.html#use-environment-variables-for-infrastructure-configuration

###> symfony/framework-bundle###
APP_SECRET=
###< symfony/framework-bundle###

###> doctrine/doctrine-bundle###
# Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
# IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
#
# DATABASE_URL="sqlite:///%kernel.project_dir%/var/data_%kernel.environment%.db"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
# DATABASE_URL="mysql://knowledge_user:tzVz6j[IVUlAiEyZ@127.0.0.1:3306/knowledge_db?serverVersion=10.4.28-MariaDB&charset=utf8mb4"
# DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
###< doctrine/doctrine-bundle###

###> symfony/messenger###
# Choose one of the transports below
# MESSENGER_TRANSPORT_DSN=amqp://guest:guest@localhost:5672/%2f/messages
# MESSENGER_TRANSPORT_DSN=redis://localhost:6379/messages
MESSENGER_TRANSPORT_DSN=doctrine://default?auto_setup=0
###< symfony/messenger###

###> symfony/mailer###
#MAILER_DSN=smtp://127.0.0.1:1025
###< symfony/mailer###

###> stripe/stripe-php###
STRIPE_SECRET_KEY=sk_test_***
###< stripe/stripe-php###` },
        { type: "h", text: "APP_SECRET" },
        { type: "list", items: [
          "Clé secrète utilisée par Symfony pour générer des tokens CSRF, sécuriser les sessions et signer les cookies",
          "Cette valeur doit être différente pour chaque projet, surtout en production",
        ]},
        { type: "note", variant: "warning", text: "Ne jamais partager ou commiter cette clé pour un site en production." },
        { type: "h", text: "DATABASE_URL" },
        { type: "code", filename: "database-url-exemples.bash", language: "bash", code: `# Exemple SQLite (pour développement) :
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data_%kernel.environment%.db"

# Exemple MySQL :
DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
DATABASE_URL="mysql://knowledge_user:tzVz6j[IVUlAiEyZ@127.0.0.1:3306/knowledge_db?serverVersion=10.4.28-MariaDB&charset=utf8mb4"

# Exemple PostgreSQL :
DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"` },
        {
          type: "diagram",
          content: `Anatomie de DATABASE_URL
──────────────────────────────────────────────────────────────────────
mysql:// knowledge_user : tzVz6j[IVUlAiEyZ @ 127.0.0.1 : 3306 / knowledge_db
  │           │                  │               │         │        │
  SGBD     Utilisateur       Mot de passe       Hôte     Port    Base de données
                                          ?serverVersion=10.4.28-MariaDB&charset=utf8mb4
──────────────────────────────────────────────────────────────────────`,
        },
        { type: "table", headers: ["SGBD", "Exemple"], rows: [
          ["SQLite", "sqlite:///%kernel.project_dir%/var/data_dev.db"],
          ["MySQL", "mysql://user:pass@127.0.0.1:3306/db?serverVersion=8.0.32"],
          ["MariaDB", "mysql://user:pass@127.0.0.1:3306/db?serverVersion=10.4.28-MariaDB"],
          ["PostgreSQL", "postgresql://user:pass@127.0.0.1:5432/db?serverVersion=16"],
        ]},
        { type: "h", text: "MESSENGER_TRANSPORT_DSN" },
        { type: "code", filename: "messenger.bash", language: "bash", code: `# Options disponibles :
# MESSENGER_TRANSPORT_DSN=amqp://guest:guest@localhost:5672/%2f/messages   (RabbitMQ)
# MESSENGER_TRANSPORT_DSN=redis://localhost:6379/messages                   (Redis)
MESSENGER_TRANSPORT_DSN=doctrine://default?auto_setup=0` },
        { type: "list", items: [
          "DSN pour le système de queues de Symfony Messenger",
          "doctrine://default → les messages sont stockés dans la base de données",
          "auto_setup=0 → désactive la création automatique des tables (utile en prod)",
        ]},
        {
          type: "diagram",
          content: `Options de transport Messenger
───────────────────────────────────────────────────────
doctrine://default    → Stockage en base de données (simple, dev)
amqp://...            → RabbitMQ (haute performance, prod)
redis://...           → Redis (rapide, prod)
sync://               → Traitement immédiat synchrone (tests)
───────────────────────────────────────────────────────`,
        },
        { type: "h", text: "MAILER_DSN" },
        { type: "code", filename: "mailer.bash", language: "bash", code: `#MAILER_DSN=smtp://127.0.0.1:1025` },
        { type: "list", items: [
          "DSN pour le transport des emails",
          "Exemple pour un serveur SMTP local sur le port 1025 (souvent utilisé avec MailHog pour le dev)",
          "En production : remplacer par le SMTP réel (SendGrid, Gmail, etc.)",
        ]},
        { type: "h", text: "STRIPE_SECRET_KEY" },
        { type: "code", filename: "stripe.bash", language: "bash", code: `STRIPE_SECRET_KEY=sk_test_***` },
        { type: "note", variant: "warning", text: "Ne jamais mettre de clé live dans le dépôt. Pour la production, utiliser le gestionnaire de secrets ou des variables d'environnement du serveur." },
        { type: "h", text: "Fichier .env.local — surcharges locales" },
        { type: "p", text: "Fichier non committé, spécifique à l'ordinateur. Écrase les valeurs de .env." },
        { type: "code", filename: ".env.local", language: "bash", code: `APP_ENV=dev
APP_SECRET=ea274fca7d0b7e57a607fe8cb956c142
DATABASE_URL="mysql://knowledge_user:tzVz6j[IVUlAiEyZ@127.0.0.1:3306/knowledge_db?serverVersion=10.4.28-MariaDB&charset=utf8mb4"
MAILER_DSN=smtp://127.0.0.1:1025
MESSENGER_TRANSPORT_DSN=sync://

# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_51RutEf7L2avSb2JIhSH5ownic5IkLZnIkXSijmppYPyBdoYMD5qTsVKDlxnb8K7k2GueXC92KmrOnMDlqaqsIxhS00U6hIwRAF
STRIPE_PUBLIC_KEY=pk_test_51RutEf7L2avSb2JIDowrgpxILcaeiYzjHJdaUJwmLHA1KHA35On7VlT4IBoqVP8axbxdDf4ti3MqEcIlYCRmnwSa00K2k2vAwK` },
        { type: "table", headers: ["Paramètre", "Valeur"], rows: [
          ["Utilisateur", "knowledge_user"],
          ["Mot de passe", "tzVz6j[IVUlAiEyZ"],
          ["Hôte", "127.0.0.1 (localhost)"],
          ["Port", "3306 (par défaut MySQL)"],
          ["Base", "knowledge_db"],
          ["Version serveur", "10.4.28-MariaDB"],
          ["Encodage", "utf8mb4 (support complet Unicode + emojis)"],
        ]},
        { type: "table", headers: ["Variable", "Utilité", "Notes"], rows: [
          ["APP_ENV", "Mode d'exécution de Symfony", "dev / prod"],
          ["APP_SECRET", "Sécurité (CSRF, cookies)", "Ne jamais partager"],
          ["DATABASE_URL", "Connexion DB", "MySQL/MariaDB"],
          ["MAILER_DSN", "Envoi d'emails", "SMTP local en dev"],
          ["MESSENGER_TRANSPORT_DSN", "Gestion des messages", "sync en dev, asynchrone en prod"],
          ["STRIPE_SECRET_KEY", "Paiement Stripe côté serveur", "clé test"],
          ["STRIPE_PUBLIC_KEY", "Paiement Stripe côté front", "clé test"],
        ]},
        {
          type: "diagram",
          content: `Rôles des clés Stripe
───────────────────────────────────────────────────────────
STRIPE_SECRET_KEY (sk_test_...)
    → Clé PRIVÉE côté serveur (PHP)
    → Crée des sessions de paiement
    → Gère les paiements et clients Stripe
    → NE JAMAIS exposer côté front

STRIPE_PUBLIC_KEY (pk_test_...)
    → Clé PUBLIQUE côté front (Stripe.js)
    → Initie les paiements en toute sécurité
    → Peut être exposée dans le HTML
───────────────────────────────────────────────────────────`,
        },
        { type: "h", text: "Fichier .env.test — environnement de test" },
        { type: "p", text: "Configure Symfony pour l'environnement de test. Tester sans impacter la DB réelle, sans envoyer d'emails réels et sans effectuer de paiements réels." },
        { type: "code", filename: ".env.test", language: "bash", code: `# define your env variables for the test env here
KERNEL_CLASS='App\\Kernel'
APP_SECRET='$ecretf0rt3st'

MAILER_DSN=null://null
MESSENGER_TRANSPORT_DSN=sync://

# -------------------------------
# Base de données pour les tests
# SQLite simple et rapide
APP_ENV=test
APP_DEBUG=1
DATABASE_URL="mysql://knowledge_user:tzVz6j[IVUlAiEyZ@127.0.0.1:3306/knowledge_db?serverVersion=10.4.28-MariaDB&charset=utf8mb4"
STRIPE_PUBLIC_KEY=pk_test_placeholder
STRIPE_SECRET_KEY=sk_test_placeholder` },
        { type: "p", text: "KERNEL_CLASS : classe principale de Symfony qui gère le cycle de vie de l'application (démarrage, services, routes…). Par défaut App\\Kernel. APP_SECRET : clé secrète pour l'environnement de test (CSRF, cookies signés)." },
        { type: "p", text: "MAILER_DSN=null://null : pas d'envoi réel de mails pendant les tests. MESSENGER_TRANSPORT_DSN=sync:// : messages traités immédiatement et de manière synchrone." },
        { type: "p", text: "APP_ENV=test : Symfony sait qu'il est dans un environnement de test → configuration spéciale (cache séparé, logs séparés). APP_DEBUG=1 : mode debug activé pour avoir des messages détaillés en cas d'erreurs lors des tests." },
        { type: "p", text: "Dans les tests, il est courant d'utiliser une base séparée pour tests (recommandé pour ne pas toucher les données dev) ou SQLite in-memory pour des tests rapides." },
        { type: "table", headers: ["Variable", "Utilité", "Notes"], rows: [
          ["KERNEL_CLASS", "Classe principale Symfony", "App\\Kernel par défaut"],
          ["APP_SECRET", "Sécurité (CSRF, cookies)", "Clé spéciale pour tests"],
          ["MAILER_DSN", "SMTP", "Aucun mail envoyé (null://null)"],
          ["MESSENGER_TRANSPORT_DSN", "Messages/queues", "Traitement synchrone pour tests"],
          ["APP_ENV", "Environnement Symfony", "test pour tests unitaires/fonctionnels"],
          ["APP_DEBUG", "Mode debug", "Affiche erreurs détaillées"],
          ["DATABASE_URL", "Connexion DB", "Idem dev mais peut être séparée"],
          ["STRIPE_PUBLIC_KEY / STRIPE_SECRET_KEY", "Paiements Stripe", "Clés factices pour tests"],
        ]},
        { type: "h", text: "Fichier .env.test.local — surcharges locales pour les tests" },
        { type: "p", text: "Fichier non committé. Écrase .env.test avec les vraies clés Stripe de test et les paramètres locaux réels." },
        { type: "code", filename: ".env.test.local", language: "bash", code: `# define your env variables for the test env here
KERNEL_CLASS='App\\Kernel'
APP_SECRET='$ecretf0rt3st'

MAILER_DSN=null://null
MESSENGER_TRANSPORT_DSN=sync://

# -------------------------------
# Base de données pour les tests
# SQLite simple et rapide
APP_ENV=test
APP_DEBUG=1
DATABASE_URL="mysql://knowledge_user:tzVz6j[IVUlAiEyZ@127.0.0.1:3306/knowledge_db?serverVersion=10.4.28-MariaDB&charset=utf8mb4"

# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_51RutEf7L2avSb2JIhSH5ownic5IkLZnIkXSijmppYPyBdoYMD5qTsVKDlxnb8K7k2GueXC92KmrOnMDlqaqsIxhS00U6hIwRAF
STRIPE_PUBLIC_KEY=pk_test_51RutEf7L2avSb2JIDowrgpxILcaeiYzjHJdaUJwmLHA1KHA35On7VlT4IBoqVP8axbxdDf4ti3MqEcIlYCRmnwSa00K2k2vAwK` },
        { type: "note", variant: "info", text: "Même si c'est MySQL ici, certains projets utilisent SQLite en mémoire pour les tests rapides." },
        { type: "p", text: "Clés API Stripe pour l'environnement de test (sk_test / pk_test) — permettent de simuler des paiements sans facturer de vrais clients." },
        { type: "note", variant: "warning", text: "Ne jamais utiliser ces clés pour la production." },
        { type: "p", text: "Ce fichier configure Symfony pour les tests : pas de mails réels, traitement immédiat des messages, base de données test dédiée, mode debug activé, clés Stripe de test pour les paiements simulés. L'objectif : tester l'application de manière sécurisée et isolée, sans impacter l'environnement de production ou envoyer de vrais emails/paiements." },
        { type: "h", text: "Comparatif des environnements" },
        {
          type: "diagram",
          content: `Comparatif des environnements
──────────────────────────────────────────────────────────────────────────
                     dev              test              prod
──────────────────────────────────────────────────────────────────────────
APP_ENV              dev              test              prod
APP_DEBUG            1                1                 0
MAILER_DSN           smtp://local     null://null       smtp://real
MESSENGER            sync://          sync://           amqp:// ou redis://
DATABASE_URL         MySQL (dev)      MySQL (test)      MySQL (prod)
STRIPE_*             clés test        clés fictives     clés live
APP_SECRET           secret local     $ecretf0rt3st     secret fort unique
Logs/Cache           var/log/dev      var/log/test      var/log/prod
──────────────────────────────────────────────────────────────────────────`,
        },
      ],
    },
  {
      id: "dp-security",
      title: "Security — Authentification et vérification email",
      blocks: [
        { type: "h", text: "AppAuthenticator" },
        { type: "p", text: "Ce code définit un authentificateur personnalisé pour gérer la connexion des utilisateurs dans Symfony. L'AppAuthenticator récupère les informations du formulaire et sécurise la connexion avec CSRF, redirige intelligemment selon email non vérifié / rôle de l'utilisateur / page initiale souhaitée. La logique est centralisée ici, ce qui rend le contrôleur de login très léger et la sécurité cohérente." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                  Requête POST /login                    │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│              authenticate(Request $request)             │
│  - Récupère email + password du formulaire              │
│  - Stocke le dernier username en session                │
│  - Retourne un objet Passport contenant :               │
│      • UserBadge($email)                                │
│      • PasswordCredentials($password)                   │
│      • CsrfTokenBadge (protection CSRF)                 │
└───────────────────────┬─────────────────────────────────┘
                        │
              Authentification réussie ?
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│         onAuthenticationSuccess(...)                    │
│                                                         │
│  1. Y a-t-il une targetPath (page demandée) ?           │
│     → OUI  ──► Redirection vers targetPath             │
│     → NON  ──► Suite...                                 │
│                                                         │
│  2. Email vérifié ?                                     │
│     → NON  ──► Flash warning + redirect LOGIN           │
│     → OUI  ──► Suite...                                 │
│                                                         │
│  3. Rôle ROLE_ADMIN ?                                   │
│     → OUI  ──► Redirect admin_dashboard                 │
│     → NON  ──► Redirect app_home                        │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "code", filename: "AppAuthenticator.php", language: "php", code: `class AppAuthenticator extends AbstractLoginFormAuthenticator
// hérite du système d'authentification par formulaire de Symfony
{
    use TargetPathTrait;
    // TargetPathTrait fournit getTargetPath() : retrouve la page voulue avant redirection login

    public const LOGIN_ROUTE = 'app_login';

    public function __construct(private UrlGeneratorInterface $urlGenerator) {}

    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');
        $password = $request->request->get('password', '');

        $request->getSession()->set('_security.last_username', $email);
        // stocke l'email en session pour le ré-afficher si la connexion échoue

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($password),
            [
                new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')),
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        /** @var User $user */
        $user = $token->getUser();

        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        /** @var Session $session */
        $session = $request->getSession();

        if ($user instanceof User && !$user->isVerified()) {
            $session->getFlashBag()->add('warning', 'Please verify your email before logging in.');
            return new RedirectResponse($this->urlGenerator->generate(self::LOGIN_ROUTE));
        }

        if ($user instanceof User && in_array('ROLE_ADMIN', $user->getRoles(), true)) {
            return new RedirectResponse($this->urlGenerator->generate('admin_dashboard'));
        }

        return new RedirectResponse($this->urlGenerator->generate('app_home'));
    }

    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}` },
        { type: "table", headers: ["Instruction", "Rôle"], rows: [
          ["$request->request->get('email', '')", "Récupère l'email saisi dans le formulaire"],
          ["$request->request->get('password', '')", "Récupère le mot de passe"],
          ["$request->getSession()->set('_security.last_username', $email)", "Stocke le dernier email saisi pour l'afficher en cas d'erreur"],
          ["new UserBadge($email)", "Identifie l'utilisateur"],
          ["new PasswordCredentials($password)", "Vérifie le mot de passe"],
          ["new CsrfTokenBadge(...)", "Sécurise le formulaire contre les attaques CSRF"],
        ]},
        { type: "h", text: "EmailVerifier" },
        { type: "p", text: "Cette classe gère l'envoi et la validation des emails de confirmation pour les utilisateurs. Elle centralise toute la logique de vérification des emails : génération de lien sécurisé, envoi de l'email et validation du lien. Elle permet de séparer cette logique du contrôleur, ce qui rend le code plus propre et maintenable." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│              Inscription d'un nouvel utilisateur         │
└────────────────────────┬─────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────┐
│         sendEmailConfirmation(...)                       │
│                                                          │
│  1. generateSignature(routeName, userId, userEmail, id)  │
│     → Génère un lien signé unique + expiration           │
│                                                          │
│  2. $email->context([...])                               │
│     → Injecte dans Twig :                                │
│        • user                                            │
│        • signedUrl                                       │
│        • expiresAtMessageKey                             │
│        • expiresAtMessageData                            │
│                                                          │
│  3. $email->htmlTemplate('confirmation_email.html.twig') │
│     → Définit le template HTML                           │
│                                                          │
│  4. $mailer->send($email)                                │
│     → Envoie l'email                                     │
└────────────────────────┬─────────────────────────────────┘
                         │
              L'utilisateur clique sur le lien
                         │
                         ▼
┌──────────────────────────────────────────────────────────┐
│         handleEmailConfirmation(Request, User)           │
│                                                          │
│  1. validateEmailConfirmationFromRequest(...)            │
│     → Vérifie signature + ID + email                     │
│     → Lien invalide ? ──► Exception levée                │
│                                                          │
│  2. $user->setIsVerified(true)                           │
│     → Marque l'utilisateur comme vérifié                 │
│                                                          │
│  3. persist($user) + flush()                             │
│     → Sauvegarde en base de données                      │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "code", filename: "EmailVerifier.php", language: "php", code: `class EmailVerifier
// centralise l'envoi et la validation des emails de confirmation
{
    public function __construct(
        private VerifyEmailHelperInterface $verifyEmailHelper,
        private MailerInterface $mailer,
        private EntityManagerInterface $entityManager
    ) {}

    public function sendEmailConfirmation(string $verifyEmailRouteName, User $user, TemplatedEmail $email): void
    {
        $signatureComponents = $this->verifyEmailHelper->generateSignature(
            $verifyEmailRouteName,
            (string) $user->getId(),
            (string) $user->getEmail(),
            ['id' => $user->getId()]
        );

        $email->context([
            'user' => $user,
            'signedUrl' => $signatureComponents->getSignedUrl(),
            'expiresAtMessageKey' => $signatureComponents->getExpirationMessageKey(),
            'expiresAtMessageData' => $signatureComponents->getExpirationMessageData(),
        ]);

        $email->htmlTemplate('registration/confirmation_email.html.twig');

        $this->mailer->send($email);
    }

    public function handleEmailConfirmation(Request $request, User $user): void
    {
        $this->verifyEmailHelper->validateEmailConfirmationFromRequest(
            $request,
            (string) $user->getId(),
            (string) $user->getEmail()
        );
        // vérifie que le lien est valide, non expiré, et correspond bien à cet utilisateur

        $user->setIsVerified(true);

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}` },
        { type: "p", text: "sendEmailConfirmation() : génère un lien signé unique pour l'utilisateur (ID + email + paramètre id), injecte les données dans le contexte Twig (user, signedUrl, expiresAtMessageKey, expiresAtMessageData), définit le template HTML utilisé (registration/confirmation_email.html.twig), puis envoie l'email via MailerInterface." },
        { type: "table", headers: ["Clé de contexte Twig", "Contenu"], rows: [
          ["user", "Les informations de l'utilisateur"],
          ["signedUrl", "Le lien de confirmation"],
          ["expiresAtMessageKey", "Clé du message de durée de validité"],
          ["expiresAtMessageData", "Données du message de durée de validité"],
        ]},
        { type: "p", text: "handleEmailConfirmation() : appelée lorsque l'utilisateur clique sur le lien reçu par email. Vérifie que le lien est valide et signé correctement, que l'ID et l'email correspondent à l'utilisateur (sinon exception VerifyEmailExceptionInterface), marque l'utilisateur comme vérifié, puis sauvegarde en base de données." },
        { type: "h", text: "UserChecker" },
        { type: "p", text: "Cette classe permet de vérifier l'état de l'utilisateur avant et après l'authentification. Elle sécurise le processus de connexion en vérifiant que l'utilisateur a bien confirmé son email avant de se connecter. Elle sépare cette logique de sécurité du contrôleur et de l'authenticator, ce qui rend le code plus propre et centralisé." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│            Tentative de connexion utilisateur        │
└───────────────────────┬──────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────┐
│    checkPreAuth(UserInterface $user)                 │
│    (avant l'authentification)                        │
│                                                      │
│  Est-ce une instance de \\App\\Entity\\User ?           │
│     → NON  ──► return (on ne fait rien)              │
│     → OUI  ──► Suite...                              │
│                                                      │
│  $user->isVerified() ?                               │
│     → NON  ──► throw CustomUserMessage               │
│                "Veuillez vérifier votre              │
│                 adresse e-mail avant de              │
│                 vous connecter."                     │
│     → OUI  ──► Authentification continue             │
└───────────────────────┬──────────────────────────────┘
                        │
            Authentification réussie
                        │
                        ▼
┌──────────────────────────────────────────────────────┐
│    checkPostAuth(UserInterface $user, ?Token)        │
│    (après l'authentification)                        │
│                                                      │
│  Actuellement : aucune vérification                  │
│  $token disponible pour usage futur                  │
│  (ex: vérification de rôles, compte suspendu...)     │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "code", filename: "UserChecker.php", language: "php", code: `class UserChecker implements UserCheckerInterface
// oblige à avoir checkPreAuth() et checkPostAuth()
{
    public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof \\App\\Entity\\User) {
            return;
        }

        if (!$user->isVerified()) {
            throw new CustomUserMessageAccountStatusException(
                'Veuillez vérifier votre adresse e-mail avant de vous connecter.'
            );
        }
    }

    public function checkPostAuth(UserInterface $user, ?TokenInterface $token = null): void
    {
        // Aucune vérification post-authentification pour l'instant
        // $token est disponible ici si besoin de vérifications avancées dans le futur
    }
}` },
        { type: "p", text: "checkPreAuth() s'exécute avant l'authentification : vérifie d'abord que l'utilisateur est bien une instance de l'entité User (sinon on ne fait rien), puis vérifie que l'email est confirmé — si ce n'est pas le cas, une exception personnalisée CustomUserMessageAccountStatusException est levée avec un message clair affiché à l'utilisateur, ce qui empêche les utilisateurs non vérifiés de se connecter." },
      ],
    },
  {
      id: "dp-formulaires",
      title: "Formulaires — FormTypes Symfony",
      blocks: [
        { type: "h", text: "Vue d'ensemble — Structure d'un FormType Symfony" },
        {
          type: "diagram",
          content: `class XxxType extends AbstractType
│
├─ buildForm(FormBuilderInterface $builder, array $options): void
│   └─ $builder->add('champ', TypeDuChamp::class, [options])
│       ├─ 'label'       → texte affiché dans le formulaire
│       ├─ 'mapped'      → true = lié à l'entité | false = non lié
│       ├─ 'required'    → true (défaut) | false = optionnel
│       ├─ 'constraints' → règles de validation
│       └─ 'attr'        → attributs HTML (placeholder, autocomplete...)
│
└─ configureOptions(OptionsResolver $resolver): void
    └─ $resolver->setDefaults([
        'data_class'      → entité liée (ex: User::class)
        'csrf_protection' → protection CSRF (true/false)
        'csrf_field_name' → nom du champ token
        'csrf_token_id'   → identifiant unique du formulaire
    ])`,
        },
        { type: "table", headers: ["FormType", "Entité liée", "Champs", "CSRF"], rows: [
          ["RegistrationFormType", "User", "email, agreeTerms, plainPassword", "✅"],
          ["UserType", "User", "email, password, isVerified", "❌ (défaut Symfony)"],
          ["ThemeType", "Theme", "name", "❌ (défaut Symfony)"],
          ["LessonType", "Lesson", "title, price, content, videoUrl, course", "❌ (défaut Symfony)"],
          ["CourseType", "Course", "title, price, theme", "❌ (défaut Symfony)"],
        ]},
        { type: "h", text: "RegistrationFormType" },
        { type: "p", text: "Ce formulaire garantit que l'utilisateur saisit une adresse email valide, accepte les conditions et choisit un mot de passe sécurisé. Symfony applique automatiquement toutes les contraintes définies et affiche les erreurs dans le formulaire si besoin. Les champs mapped: false permettent de gérer le mot de passe et la case à cocher sans les enregistrer directement en base, pour plus de sécurité et de flexibilité." },
        {
          type: "diagram",
          content: `RegistrationFormType
│
├─ email           → TextType (mappé → User::$email)
│
├─ agreeTerms      → CheckboxType
│   ├─ mapped: false    (PAS sauvegardé en base)
│   └─ constraint: IsTrue (doit être coché)
│
└─ plainPassword   → PasswordType
    ├─ mapped: false    (PAS sauvegardé en base → sera hashé avant)
    ├─ autocomplete: new-password
    └─ constraints:
        ├─ NotBlank      → ne peut pas être vide
        ├─ Length(12-4096)→ longueur minimum 12 caractères
        ├─ Regex /[A-Z]/ → au moins 1 majuscule
        ├─ Regex /[a-z]/ → au moins 1 minuscule
        ├─ Regex /\\d/    → au moins 1 chiffre
        └─ Regex /[\\W]/  → au moins 1 caractère spécial`,
        },
        { type: "code", filename: "RegistrationFormType.php", language: "php", code: `class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            // Symfony devine automatiquement le type grâce à la propriété $email de User

            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                // ce champ n'existe pas dans l'entité User, pas sauvegardé automatiquement
                'constraints' => [
                    new IsTrue(message: 'Vous devez accepter les conditions.'),
                ],
            ])

            ->add('plainPassword', PasswordType::class, [
                'mapped' => false,
                // on ne stocke jamais le mot de passe en clair en BDD !
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank(message: 'Veuillez entrer un mot de passe'),

                    new Length(
                        min: 12,
                        minMessage: 'Votre mot de passe doit contenir au moins {{ limit }} caractères',
                        max: 4096
                    ),

                    new Regex(
                        pattern: '/[A-Z]/',
                        message: 'Le mot de passe doit contenir au moins une majuscule'
                    ),

                    new Regex(
                        pattern: '/[a-z]/',
                        message: 'Le mot de passe doit contenir au moins une minuscule'
                    ),

                    new Regex(
                        pattern: '/\\d/',
                        message: 'Le mot de passe doit contenir au moins un chiffre'
                    ),

                    new Regex(
                        pattern: '/[\\W]/',
                        message: 'Le mot de passe doit contenir au moins un caractère spécial'
                    ),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'csrf_protection' => true,
            'csrf_field_name' => '_token',
            'csrf_token_id' => 'registration_form',
        ]);
    }
}` },
        {
          type: "diagram",
          content: `Protection CSRF :
┌──────────────────────────────────────────────────────────┐
│ csrf_protection: true                                    │
│                                                          │
│ Empêche les attaques de type Cross-Site Request Forgery  │
│ lors de la soumission du formulaire.                     │
│                                                          │
│ Symfony ajoute automatiquement un champ caché _token     │
│ dans le formulaire HTML.                                 │
│                                                          │
│ Ce token est vérifié à la soumission pour s'assurer      │
│ que la requête vient bien du bon formulaire.             │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "UserType" },
        { type: "p", text: "Ce formulaire permet de créer ou modifier un utilisateur avec les informations de base. Le champ roles est volontairement omis pour éviter les problèmes liés au format tableau de Symfony (erreur \"Array to string conversion\")." },
        {
          type: "diagram",
          content: `UserType
│
├─ email      → lié à User::$email
│              (mappé automatiquement)
│
├─ roles      → ❌ COMMENTÉ (Array to string conversion)
│              Le champ roles est un tableau dans l'entité,
│              Symfony ne peut pas le gérer directement
│
├─ password   → lié à User::$password
│              (mappé automatiquement)
│
└─ isVerified → lié à User::$isVerified
               (checkbox / booléen)`,
        },
        { type: "code", filename: "UserType.php", language: "php", code: `class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')

            // ->add('roles')
            // VOLONTAIREMENT commenté : les rôles sont stockés en tableau (array) en BDD
            // → provoquerait une erreur "Array to string conversion"

            ->add('password')
            // ⚠️ dans un vrai projet en production, on utiliserait PasswordType::class
            // et on hasherait le mot de passe avant de le sauvegarder

            ->add('isVerified');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}` },
        { type: "h", text: "ThemeType" },
        { type: "p", text: "Le formulaire ThemeType permet de saisir ou modifier le nom d'un thème côté back-office. Il est simple mais essentiel pour créer l'interface d'administration des thèmes de cours." },
        {
          type: "diagram",
          content: `ThemeType
│
└─ name → TextType (par défaut)
          lié à Theme::$name
          (mappé automatiquement via data_class)`,
        },
        { type: "code", filename: "ThemeType.php", language: "php", code: `class ThemeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Theme::class,
        ]);
    }
}` },
        { type: "h", text: "LessonType" },
        { type: "p", text: "Ce formulaire permet de créer ou modifier une leçon (Lesson) dans l'application. Il contient les champs essentiels comme le titre, le prix, le contenu, la vidéo associée et le cours auquel la leçon appartient." },
        {
          type: "diagram",
          content: `LessonType
│
├─ title      → TextType
│               label: 'Titre de la leçon'
│               lié à Lesson::$title
│
├─ price      → TextType
│               label: 'Prix'
│               lié à Lesson::$price
│
├─ content    → TextareaType
│               label: 'Description / Contenu'
│               required: false
│               rows: 10
│               placeholder: '<h3>Description :</h3><p>...'
│               empty_data: texte HTML par défaut
│
├─ videoUrl   → UrlType
│               label: 'URL de la vidéo'
│               required: false
│               placeholder: 'https://...'
│
└─ course     → EntityType (Course::class)
                label: 'Cours associé'
                choice_label: 'id'
                → select dropdown des cours`,
        },
        { type: "code", filename: "LessonType.php", language: "php", code: `class LessonType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de la leçon',
            ])

            ->add('price', TextType::class, [
                'label' => 'Prix',
            ])

            ->add('content', TextareaType::class, [
                'label' => 'Description / Contenu',
                'required' => false,
                'attr' => [
                    'rows' => 10,
                    'placeholder' => '<h3>Description :</h3><p>Texte de la leçon ici...</p>'
                ],
                'empty_data' => '<h3>Description :</h3><p>Lorem ipsum dolor sit amet...</p>'
            ])

            ->add('videoUrl', UrlType::class, [
                'label' => 'URL de la vidéo',
                'required' => false,
                'attr' => ['placeholder' => 'https://...'],
            ])

            ->add('course', EntityType::class, [
                'class' => Course::class,
                'choice_label' => 'id',
                'label' => 'Cours associé',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Lesson::class,
        ]);
    }
}` },
        {
          type: "diagram",
          content: `EntityType (course)
┌────────────────────────────────────────┐
│ SELECT dropdown généré automatiquement │
│                                        │
│ Options : [ID 1] [ID 2] [ID 3] ...     │
│                                        │
│ Doctrine charge tous les Course        │
│ disponibles en base                    │
└────────────────────────────────────────┘`,
        },
        { type: "h", text: "CourseType" },
        { type: "p", text: "Cette classe permet de construire le formulaire pour créer ou modifier un cours (Course), en définissant le titre, le prix et le thème associé. Symfony gère automatiquement le mappage avec l'entité Course, simplifiant la logique côté contrôleur." },
        {
          type: "diagram",
          content: `CourseType
│
├─ title  → TextType (par défaut)
│           lié à Course::$title
│
├─ price  → TextType/NumberType (par défaut)
│           lié à Course::$price
│
└─ theme  → EntityType (Theme::class)
            choice_label: 'id'
            → select dropdown des thèmes
            lié à Course::$theme`,
        },
        { type: "code", filename: "CourseType.php", language: "php", code: `class CourseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')

            ->add('price')

            ->add('theme', EntityType::class, [
                'class' => Theme::class,
                'choice_label' => 'id',
                // ⚠️ comme pour LessonType, afficher 'name' serait plus lisible pour un admin
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Course::class,
        ]);
    }
}` },
        { type: "h", text: "Récapitulatif — mapped: true vs mapped: false" },
        {
          type: "diagram",
          content: `┌──────────────────────────┬───────────────────────────────────┐
│     mapped: true         │         mapped: false             │
│     (comportement        │                                   │
│      par défaut)         │                                   │
├──────────────────────────┼───────────────────────────────────┤
│ Champ lié à l'entité     │ Champ NON lié à l'entité          │
│ Valeur sauvegardée en    │ Valeur PAS sauvegardée en base     │
│ base automatiquement     │ automatiquement                   │
│                          │                                   │
│ Ex: email, title, price  │ Ex: plainPassword (sera hashé),   │
│                          │     agreeTerms (case à cocher)    │
└──────────────────────────┴───────────────────────────────────┘`,
        },
        { type: "h", text: "Récapitulatif — types de champs utilisés" },
        { type: "table", headers: ["Type Symfony", "Rendu HTML", "Usage"], rows: [
          ["TextType", "<input type=\"text\">", "Texte court (titre, prix)"],
          ["PasswordType", "<input type=\"password\">", "Mot de passe masqué"],
          ["CheckboxType", "<input type=\"checkbox\">", "Case à cocher (CGU)"],
          ["TextareaType", "<textarea>", "Texte long (contenu leçon)"],
          ["UrlType", "<input type=\"url\">", "URL (vidéo)"],
          ["EntityType", "<select>", "Dropdown lié à une entité Doctrine"],
        ]},
      ],
    },
  {
      id: "dp-app-css",
      title: "app.css — Thème visuel (override Bootstrap)",
      blocks: [
        { type: "p", text: "Bootstrap est utilisé via un lien CDN. Les propriétés Bootstrap sont surchargées (override) pour appliquer les couleurs personnelles du projet et créer un thème cohérent." },
        { type: "h", text: "Contexte et approche" },
        { type: "list", items: [
          "Bootstrap chargé via CDN → pas de compilation, pas de npm nécessaire",
          "Les classes Bootstrap (.btn, .container…) sont redéfinies dans app.css pour utiliser la palette de couleurs personnelle",
          "Cela évite de modifier Bootstrap directement et permet de garder les avantages du framework (grille, composants) avec un thème sur mesure",
        ]},
        { type: "h", text: "Breakpoints responsives" },
        {
          type: "diagram",
          content: `Système de breakpoints

──────────────────────────────────────────────────────
0px ──────── 576px ──── 768px ──── 992px ──── 1200px+
│            │          │          │           │
Petits       Grands     Mobiles    Tablettes   Desktop
smartphones  smartphones ≤768px   ≤992px      ≥1200px
──────────────────────────────────────────────────────

Mobile first : affichage mobile jusqu'à 768px
À partir de 769px → affichage tablette
──────────────────────────────────────────────────────`,
        },
        { type: "h", text: "Style global — body" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Style global ----- */
body {
    font-family: 'Comic Neue', sans-serif;
    background-color: #f1f8fc;
    color: #384050;
    margin: 0;
    padding: 0;
}` },
        { type: "table", headers: ["Propriété", "Valeur", "Rôle"], rows: [
          ["font-family", "'Comic Neue', sans-serif", "Police principale, fallback sans-serif"],
          ["background-color", "#f1f8fc", "Fond bleu très clair"],
          ["color", "#384050", "Texte gris foncé"],
          ["margin: 0", "0", "Supprime la marge par défaut du navigateur"],
          ["padding: 0", "0", "Supprime le padding par défaut"],
        ]},
        { type: "h", text: "Conteneur principal — .container" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Conteneur principal ----- */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}` },
        { type: "list", items: [
          "Limite la largeur du contenu à 1200px",
          "margin: 0 auto → centre le contenu horizontalement sur l'écran",
          "padding: 1rem → espace interne pour ne pas coller aux bords",
        ]},
        {
          type: "diagram",
          content: `Comportement du conteneur

──────────────────────────────────────────────────────
|←──────────────── écran ────────────────────→|
|    |←────── max 1200px (centré) ──────→|    |
|    |           .container              |    |
|    |   padding 1rem de chaque côté     |    |
──────────────────────────────────────────────────────`,
        },
        { type: "h", text: "Logo header — .navbar-brand et .logo-image" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Logo header ----- */
.navbar-brand {
    margin-left: 0;
    padding-left: 10px;
}

.logo-image {
    height: 50px;
}` },
        { type: "p", text: ".navbar-brand (classe Bootstrap surchargée) : margin-left: 0 supprime la marge gauche automatique de Bootstrap pour coller le logo au bord gauche de la navbar. padding-left: 10px ajoute un petit espace intérieur." },
        { type: "p", text: ".logo-image : height: 50px fixe la hauteur du logo sur desktop et tablette. La largeur s'ajuste automatiquement en proportion. Sur petits smartphones (≤ 576px), cette règle est surchargée par la media query : max-width: 120px; height: auto; pour réduire le logo sans le déformer." },
        {
          type: "diagram",
          content: `Comportement du logo selon la taille d'écran

──────────────────────────────────────────────────────
Desktop / Tablette (> 576px) :
  [ LOGO ]  height: 50px, width: auto (proportionnel)

Petits smartphones (≤ 576px) :
  [LOGO]  max-width: 120px, height: auto (proportionnel)
          → logo réduit, jamais déformé
──────────────────────────────────────────────────────`,
        },
        { type: "note", variant: "info", title: "Pourquoi height: auto sur mobile ?", text: "Sur desktop on fixe la hauteur car la navbar a une hauteur stable. Sur mobile, on bascule sur max-width + height: auto pour que le logo s'adapte à la largeur disponible sans dépasser 120px et sans être écrasé verticalement." },
        { type: "h", text: "Boutons personnalisés — .btn (override Bootstrap)" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Boutons personnalisés (override Bootstrap) ----- */
.btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.3s ease;
}` },
        { type: "list", items: [
          "Style uniforme pour tous les boutons : gras, coins arrondis, curseur pointer",
          "transition: background-color 0.3s ease → animation douce au survol (0.3 seconde)",
          "color: #fff → texte blanc sur tous les boutons",
        ]},
        { type: "h", text: "Couleurs des boutons" },
        { type: "code", filename: "app.css", language: "css", code: `.btn-primary        { background-color: #0074c7; }
.btn-primary:hover  { background-color: #00497c; }

.btn-success        { background-color: #82b864; }
.btn-success:hover  { background-color: #5a8c3e; }

.btn-danger         { background-color: #cd2c2e; }
.btn-danger:hover   { background-color: #a02022; }` },
        {
          type: "diagram",
          content: `Palette des boutons

──────────────────────────────────────────────────────────
.btn-primary   Normal : #0074c7 (bleu)
               Hover  : #00497c (bleu foncé)
               Usage  : actions principales

.btn-success   Normal : #82b864 (vert)
               Hover  : #5a8c3e (vert foncé)
               Usage  : confirmer, valider

.btn-danger    Normal : #cd2c2e (rouge)
               Hover  : #a02022 (rouge foncé)
               Usage  : supprimer, avertir
──────────────────────────────────────────────────────────`,
        },
        { type: "table", headers: ["Classe", "Couleur normale", "Couleur hover", "Usage"], rows: [
          [".btn-primary", "#0074c7 bleu", "#00497c bleu foncé", "Actions principales"],
          [".btn-success", "#82b864 vert", "#5a8c3e vert foncé", "Confirmer, valider"],
          [".btn-danger", "#cd2c2e rouge", "#a02022 rouge foncé", "Supprimer, avertir"],
        ]},
        { type: "h", text: "Titres — h1, h2, h3" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Titres ----- */
h1, h2, h3 {
    color: #00497c;
    margin-bottom: 1rem;
}` },
        { type: "h", text: "Liens — a" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Liens ----- */
a {
    text-decoration: none;
    color: #0074c7;
}

a:hover {
    color: #00497c;
}` },
        { type: "h", text: "Tableaux personnalisés — .table-custom" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Tableaux ----- */
.table-custom {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
}

.table-custom th,
.table-custom td {
    padding: 0.5rem;
    border: 1px solid #384050;
}` },
        { type: "h", text: "Tableaux scrollables sur petits écrans — .table-responsive" },
        { type: "code", filename: "app.css", language: "css", code: `/* Rendre les tableaux scrollables sur petits écrans */
.table-responsive {
    overflow-x: auto;
}` },
        {
          type: "diagram",
          content: `Comportement responsive du tableau

──────────────────────────────────────────────
Desktop :
  | Col1 | Col2 | Col3 | Col4 |

Mobile (sans .table-responsive) :
  |Col1|Col2|Col3|Col4|  ← casse la mise en page

Mobile (avec .table-responsive) :
  | Col1 | Col2 |  →  ← scroll horizontal
──────────────────────────────────────────────`,
        },
        { type: "h", text: "Footer" },
        { type: "code", filename: "app.css", language: "css", code: `/* ----- Footer ----- */
footer {
    background-color: #212529;
    color: #f8f9fa;
}

.footer-text {
    font-size: 0.85rem;
}

.footer-link {
    text-decoration: underline;
    color: #f8f9fa;
}

.footer-link:hover {
    color: #dcdcdc;
}` },
        { type: "h", text: "Media Queries — Responsive Design" },
        {
          type: "diagram",
          content: `Vue d'ensemble des breakpoints

──────────────────────────────────────────────────────────
Breakpoint     Max-width   Ce qui change
──────────────────────────────────────────────────────────
Tablettes       992px      font-size réduit, h1 plus petit
Mobiles         768px      padding réduit, h1 centré, boutons plein largeur
Petits phones   576px      font-size encore réduit, logo réduit
──────────────────────────────────────────────────────────`,
        },
        { type: "code", filename: "app.css", language: "css", code: `/* Écrans ≤ 992px (tablettes) */
@media (max-width: 992px) {
    body {
        font-size: 0.95rem;
    }
    h1 {
        font-size: 1.8rem;
    }
}` },
        { type: "code", filename: "app.css", language: "css", code: `/* Écrans ≤ 768px (mobiles) */
@media (max-width: 768px) {
    .container {
        padding: 0.5rem;
    }
    h1 {
        font-size: 1.5rem;
        text-align: center;
    }
    .btn {
        width: 100%;
        margin-bottom: 0.5rem;
        text-align: center;
    }
}` },
        { type: "code", filename: "app.css", language: "css", code: `/* Écrans ≤ 576px (petits smartphones) */
@media (max-width: 576px) {
    body {
        font-size: 0.9rem;
    }
    .logo-image {
        max-width: 120px;
        height: auto;
    }
}` },
        { type: "h", text: "Palette de couleurs complète" },
        {
          type: "diagram",
          content: `Palette de couleurs du projet

──────────────────────────────────────────────────────────
#f1f8fc  →  Fond body              (bleu très clair)
#384050  →  Texte principal        (gris foncé)
#0074c7  →  Bleu principal         (liens, btn-primary, titres)
#00497c  →  Bleu foncé             (hover, h1/h2/h3)
#82b864  →  Vert                   (btn-success)
#5a8c3e  →  Vert foncé             (btn-success hover)
#cd2c2e  →  Rouge                  (btn-danger)
#a02022  →  Rouge foncé            (btn-danger hover)
#212529  →  Fond footer            (presque noir)
#f8f9fa  →  Texte footer / liens   (blanc cassé)
#dcdcdc  →  Footer link hover      (gris très clair)
──────────────────────────────────────────────────────────`,
        },
        { type: "table", headers: ["Couleur", "Hex", "Usage"], rows: [
          ["Fond body", "#f1f8fc", "Arrière-plan général"],
          ["Texte", "#384050", "Texte principal"],
          ["Bleu", "#0074c7", "Liens, btn-primary normal"],
          ["Bleu foncé", "#00497c", "Hover liens/boutons, h1/h2/h3"],
          ["Vert", "#82b864", "btn-success normal"],
          ["Vert foncé", "#5a8c3e", "btn-success hover"],
          ["Rouge", "#cd2c2e", "btn-danger normal"],
          ["Rouge foncé", "#a02022", "btn-danger hover"],
          ["Très foncé", "#212529", "Fond footer"],
          ["Blanc cassé", "#f8f9fa", "Texte footer et liens footer"],
          ["Gris clair", "#dcdcdc", "Footer link hover"],
        ]},
        { type: "h", text: "Résumé global" },
        { type: "table", headers: ["Section", "Ce qu'elle fait"], rows: [
          ["body", "Police, fond, couleur texte, reset margin/padding"],
          [".container", "Largeur max 1200px, centré, padding interne"],
          [".navbar-brand", "Aligne le logo à gauche dans la navbar Bootstrap"],
          [".logo-image", "Hauteur 50px desktop, réduit à max 120px sur mobile"],
          [".btn + variantes", "Boutons uniformes avec 3 couleurs sémantiques + hover"],
          ["h1, h2, h3", "Couleur bleue cohérente sur tous les titres"],
          ["a", "Liens sans soulignement, bleu → bleu foncé au hover"],
          [".table-custom", "Tableaux avec bordures fusionnées et padding"],
          [".table-responsive", "Scroll horizontal sur mobile"],
          ["footer", "Fond sombre, texte clair, liens soulignés"],
          ["@media", "3 breakpoints : 992px, 768px, 576px"],
        ]},
      ],
    },
  {
      id: "dp-tests",
      title: "Tests — PHPUnit & WebTestCase",
      blocks: [
        { type: "p", text: "Tests fonctionnels et unitaires de la plateforme e-learning. Framework : PHPUnit. Approche : WebTestCase (Symfony)." },
        { type: "h", text: "Vue d'ensemble des classes de tests" },
        {
          type: "diagram",
          content: `Architecture des tests
──────────────────────────────────────────────────────────
tests/
│
├── Controller/   (Tests fonctionnels – simulent un navigateur)
│   ├── FrontControllerTest          → Accès leçons + certifications
│   ├── PurchaseControllerTest       → Achat cours et leçons
│   ├── RegistrationControllerTest   → Inscription utilisateur
│   ├── UserControllerSecurityTest   → Sécurité des routes admin
│   └── LessonAndCertificationTest   → Parcours complet validation
│
└── Unit/         (Tests unitaires – sans base de données)
    └── UserUnitTest                 → Entité User (méthodes, relations)
──────────────────────────────────────────────────────────`,
        },
        { type: "table", headers: ["Classe", "Type", "Ce qu'elle teste"], rows: [
          ["FrontControllerTest", "Fonctionnel", "Accès aux leçons, affichage certifications"],
          ["PurchaseControllerTest", "Fonctionnel", "Processus d'achat cours et leçons"],
          ["RegistrationControllerTest", "Fonctionnel", "Inscription d'un nouvel utilisateur"],
          ["UserControllerSecurityTest", "Fonctionnel", "Sécurité routes admin (403 vs 200)"],
          ["LessonAndCertificationTest", "Fonctionnel", "Achat + validation + UserLesson"],
          ["UserUnitTest", "Unitaire", "Entité User : création, passwords, achats, certifs"],
        ]},
        { type: "h", text: "FrontControllerTest" },
        { type: "p", text: "Teste automatiquement le front-office : accès aux leçons et affichage des certifications pour un utilisateur connecté. Simule des achats et validations pour vérifier la logique métier côté front sans passer par l'interface réelle. Utilise WebTestCase de Symfony, qui simule un navigateur pour interagir avec l'application." },
        { type: "code", filename: "FrontControllerTest.php", language: "php", code: `class FrontControllerTest extends WebTestCase
{
    use TestHelpers;

    protected function setUp(): void
    {
        $this->initTest();
    }

    public function testAccessLesson(): void
    {
        $user = $this->createUser();
        $this->client->loginUser($user);

        $lesson = $this->createLessonWithTheme('Test Lesson', 50, 'Theme Test', 'Test Course');

        $this->purchaseCourse($user, $lesson->getCourse(), $lesson->getCourse()->getPrice());

        $url = $this->client->getContainer()->get('router')->generate(
            'front_lesson_show',
            ['id' => $lesson->getId()]
        );

        $crawler = $this->client->request('GET', $url);
        while ($this->client->getResponse()->isRedirection()) {
            $crawler = $this->client->followRedirect();
        }

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', $lesson->getTitle());
    }

    public function testCertificationsPage(): void
    {
        $user = $this->createUser();
        $this->client->loginUser($user);

        $lesson = $this->createLessonWithTheme('Test Lesson', 50, 'Theme Test', 'Test Course');
        $course = $lesson->getCourse();

        $this->purchaseCourse($user, $course, $course->getPrice());
        $this->validateCourse($user, $course);

        $this->em->refresh($user);

        $crawler = $this->client->request('GET', '/front/certifications');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('.certification-list');
    }
}` },
        {
          type: "diagram",
          content: `Flux testAccessLesson()
──────────────────────────────────────────────────────────────
[1] createUser()              → Crée un utilisateur fictif
[2] loginUser($user)          → Simule une session authentifiée
[3] createLessonWithTheme()   → Crée leçon + thème + cours associé
[4] purchaseCourse()          → Achat simulé → accès aux leçons
[5] router->generate()        → Génère l'URL de la leçon
[6] client->request('GET')    → Envoie requête GET
[7] followRedirect()          → Suit les éventuelles redirections
[8] assertResponseIsSuccessful() → Vérifie HTTP 200 OK
[9] assertSelectorTextContains('h1', ...) → Vérifie le titre dans <h1>
──────────────────────────────────────────────────────────────`,
        },
        { type: "h", text: "PurchaseControllerTest" },
        { type: "p", text: "Teste automatiquement le processus d'achat pour les cours et les leçons. Simule un utilisateur connecté, effectue des achats et vérifie à la fois la redirection côté front et l'enregistrement dans la base de données." },
        {
          type: "diagram",
          content: `Flux testPurchaseCourse()
──────────────────────────────────────────────────────────────
[1] createUser()                     → Utilisateur de test
[2] loginUser($user)                 → Session authentifiée
[3] getRepository(Course)->findOneBy → Récupère un cours existant
[4] purchaseCourse($user, $course, 100) → Achat simulé (montant 100)
[5] POST /front/course/{id}/purchase → Envoie requête d'achat
[6] assertResponseRedirects(...)     → Vérifie redirection vers cours
[7] findOneBy(['user', 'course'])    → Cherche l'achat en base
[8] assertNotNull($purchase)         → Confirme l'enregistrement
──────────────────────────────────────────────────────────────`,
        },
        { type: "code", filename: "PurchaseControllerTest.php", language: "php", code: `class PurchaseControllerTest extends WebTestCase
{
    use TestHelpers;

    protected function setUp(): void
    {
        $this->initTest();
    }

    public function testPurchaseCourse(): void
    {
        $user = $this->createUser();
        $this->client->loginUser($user);

        $course = $this->em->getRepository(Course::class)->findOneBy([]);

        $this->purchaseCourse($user, $course, 100);

        $this->client->request('POST', '/front/course/'.$course->getId().'/purchase');

        $this->assertResponseRedirects('/front/course/'.$course->getId());

        $purchase = $this->em->getRepository(Purchase::class)
            ->findOneBy([
                'user' => $user,
                'course' => $course
            ]);

        $this->assertNotNull($purchase, "Le cours a bien été acheté");
    }

    public function testPurchaseLesson(): void
    {
        $user = $this->createUser();
        $this->client->loginUser($user);

        $lesson = $this->em->getRepository(Lesson::class)->findOneBy([]);

        $this->purchaseLesson($user, $lesson, 50);

        $this->client->request('POST', '/front/lesson/'.$lesson->getId().'/purchase');

        $this->assertResponseRedirects('/front/lesson/'.$lesson->getId());

        $purchase = $this->em->getRepository(Purchase::class)
            ->findOneBy([
                'user' => $user,
                'lesson' => $lesson
            ]);

        $this->assertNotNull($purchase, "La leçon a bien été achetée");
    }
}` },
        { type: "h", text: "RegistrationControllerTest" },
        { type: "p", text: "Teste automatiquement l'inscription d'un nouvel utilisateur. S'assure que le formulaire est accessible, que la soumission fonctionne, que l'utilisateur est bien créé en base et que son email n'est pas encore vérifié." },
        { type: "code", filename: "RegistrationControllerTest.php", language: "php", code: `class RegistrationControllerTest extends WebTestCase
{
    use TestHelpers;

    protected UserRepository $userRepository;

    protected function setUp(): void
    {
        $this->initTest();

        $this->userRepository = static::getContainer()->get(UserRepository::class);

        // Nettoyage de la BDD dans le bon ordre (les dépendances d'abord)
        $this->em->createQuery('DELETE FROM App\\Entity\\UserLesson ul')->execute();
        $this->em->createQuery('DELETE FROM App\\Entity\\Purchase p')->execute();
        $this->em->createQuery('DELETE FROM App\\Entity\\User u')->execute();

        $this->em->flush();
    }

    private function generateUniqueEmail(): string
    {
        return 'user_' . uniqid('', true) . '@example.com';
    }

    public function testRegister(): void
    {
        $email = $this->generateUniqueEmail();

        $this->client->request('GET', '/register');

        self::assertResponseIsSuccessful();

        $this->client->submitForm("S'inscrire", [
            'registration_form[email]' => $email,
            'registration_form[plainPassword]' => 'Password1!',
            'registration_form[agreeTerms]' => true,
        ]);

        self::assertTrue($this->client->getResponse()->isRedirect());

        $this->client->followRedirect();

        self::assertResponseIsSuccessful();

        $user = $this->userRepository->findOneBy(['email' => $email]);

        self::assertNotNull($user, "L'utilisateur doit être créé en base");

        self::assertFalse($user->isVerified(), "L'utilisateur ne doit pas être vérifié par défaut");
    }
}` },
        {
          type: "diagram",
          content: `Flux testRegister()
──────────────────────────────────────────────────────────────────
[1] generateUniqueEmail()         → Email unique pour ce test
[2] GET /register                 → Accède au formulaire d'inscription
[3] assertResponseIsSuccessful()  → Vérifie que la page s'affiche (200)
[4] submitForm("S'inscrire", ...) → Remplit et soumet le formulaire
[5] isRedirect()                  → Vérifie la redirection après soumission
[6] followRedirect()              → Suit la redirection
[7] assertResponseIsSuccessful()  → Page cible s'affiche correctement
[8] findOneBy(['email' => $email]) → Cherche l'utilisateur en base
[9] assertNotNull($user)          → L'utilisateur a bien été créé
[10] assertFalse(isVerified())    → isVerified = false par défaut
──────────────────────────────────────────────────────────────────`,
        },
        { type: "h", text: "UserControllerSecurityTest" },
        { type: "p", text: "Teste la sécurité des routes administratives : les admins peuvent accéder à /admin/user, les utilisateurs normaux sont bloqués avec un code 403." },
        { type: "code", filename: "UserControllerSecurityTest.php", language: "php", code: `class UserControllerSecurityTest extends WebTestCase
{
    public function testAdminAccess(): void
    {
        $client = static::createClient();

        $em = static::getContainer()->get('doctrine')->getManager();

        // --- Création et persistance d'un admin ---
        $admin = new User();
        $admin->setEmail('admin@example.com')
              ->setPassword(password_hash('password', PASSWORD_BCRYPT))
              ->setRoles(['ROLE_ADMIN']);
        $em->persist($admin);
        $em->flush();

        $client->loginUser($admin);

        $client->request('GET', '/admin/user');

        $this->assertResponseIsSuccessful();

        // --- Création et persistance d'un utilisateur normal ---
        $user = new User();
        $user->setEmail('user@example.com')
             ->setPassword(password_hash('password', PASSWORD_BCRYPT))
             ->setRoles(['ROLE_CLIENT']);
        $em->persist($user);
        $em->flush();

        $client->loginUser($user);

        $client->request('GET', '/admin/user');

        $this->assertResponseStatusCodeSame(403);
    }
}` },
        {
          type: "diagram",
          content: `Matrice de sécurité des routes
─────────────────────────────────────────────────────
Route           ROLE_ADMIN    ROLE_CLIENT
─────────────────────────────────────────────────────
/admin/user        200 OK        403 Forbidden
/front/*           ✓             ✓
─────────────────────────────────────────────────────`,
        },
        { type: "h", text: "LessonAndCertificationTest" },
        { type: "p", text: "Teste le parcours complet de l'utilisateur : achat d'une leçon, validation d'une leçon, et création de l'entité UserLesson pour le suivi pédagogique. Garantit que la logique métier pour les achats et la validation des leçons fonctionne correctement et que l'utilisateur peut obtenir sa certification lorsque toutes les conditions sont remplies." },
        {
          type: "diagram",
          content: `Flux testPurchaseLesson()
──────────────────────────────────────────────────────────────────────
[1] createUser() + loginUser()        → Utilisateur connecté
[2] createLessonWithTheme(...)        → Leçon + thème + cours créés
[3] purchaseLesson($user, $lesson, 50) → Achat simulé (sandbox)
[4] POST /front/lesson/{id}/purchase  → Route d'achat réelle (POST)
[5] assertResponseRedirects(...)      → Redirection vers page leçon
[6] em->refresh($lesson)              → Recharge la leçon depuis la base
[7] foreach getPurchases()            → Vérifie que l'achat est lié
[8] assertTrue($hasPurchase)          → Achat bien enregistré
──────────────────────────────────────────────────────────────────────`,
        },
        { type: "code", filename: "LessonAndCertificationTest.php", language: "php", code: `class LessonAndCertificationTest extends WebTestCase
{
    use TestHelpers;

    protected function setUp(): void
    {
        $this->initTest();
    }

    public function testPurchaseLesson(): void
    {
        $user = $this->createUser();
        $this->client->loginUser($user);

        $lesson = $this->createLessonWithTheme(
            'Test Lesson',
            50,
            'Theme Test',
            'Test Course'
        );

        $this->purchaseLesson($user, $lesson, 50);

        $this->client->request('POST', '/front/lesson/'.$lesson->getId().'/purchase');

        $this->assertResponseRedirects('/front/lesson/'.$lesson->getId());

        $this->em->refresh($lesson);

        $hasPurchase = false;
        foreach ($lesson->getPurchases() as $p) {
            if ($p->getUser() === $user) {
                $hasPurchase = true;
                break;
            }
        }

        $this->assertTrue($hasPurchase, 'The lesson purchase must be recorded');
    }

    public function testValidateLessonAndCertification(): void
    {
        $user = $this->createUser();
        $this->client->loginUser($user);

        $lesson = $this->createLessonWithTheme(
            'Test Lesson',
            50,
            'Theme Test',
            'Test Course'
        );

        $this->client->request('POST', '/validate-lesson/'.$lesson->getId());

        $this->assertResponseRedirects('/front/lesson/'.$lesson->getId());

        $userLesson = $this->em->getRepository(\\App\\Entity\\UserLesson::class)
            ->findOneBy(['user' => $user, 'lesson' => $lesson]);

        $this->assertNotNull($userLesson, 'A UserLesson should be created');

        $this->assertTrue($userLesson->isValidated(), 'The lesson must be validated');
    }
}` },
        { type: "p", text: "testValidateLessonAndCertification() permet de suivre la progression de l'utilisateur et de générer une certification lorsque toutes les leçons d'un cours sont validées." },
        { type: "h", text: "TestHelpers (trait)" },
        { type: "p", text: "Ce trait TestHelpers centralise toutes les opérations courantes de préparation des tests : création d'utilisateurs, leçons, cours, achats et certifications. Il rend les tests plus rapides à écrire, réutilisables et garantit que la base est toujours dans un état cohérent avant chaque test." },
        {
          type: "diagram",
          content: `Structure du trait TestHelpers
──────────────────────────────────────────────────────────
trait TestHelpers
│
├── Propriétés
│   ├── $client : KernelBrowser   → Simule un navigateur
│   └── $em : EntityManagerInterface → Interagit avec la BDD
│
├── Initialisation
│   └── initTest()        → Crée $client et $em
│
├── Nettoyage
│   └── purgeEntities()   → Vide Certification, UserLesson, Purchase, User
│
├── Création d'entités
│   ├── createUser()               → Crée un utilisateur
│   ├── createTheme()              → Crée un thème
│   ├── createCourse()             → Crée un cours lié à un thème
│   ├── createLesson()             → Crée une leçon liée à un cours+thème
│   └── createLessonWithTheme()    → Crée leçon + cours + thème en une fois
│
├── Achats
│   ├── purchaseLesson()   → Achat d'une leçon
│   └── purchaseCourse()   → Achat d'un cours
│
├── Suivi pédagogique
│   └── createUserLesson() → Crée entité UserLesson (suivi validation)
│
└── Certification
    └── validateCourse()   → Valide toutes les leçons + crée Certification
──────────────────────────────────────────────────────────`,
        },
        { type: "code", filename: "TestHelpers.php", language: "php", code: `trait TestHelpers
{
    protected KernelBrowser $client;

    protected EntityManagerInterface $em;

    protected function initTest(): void
    {
        $this->client = static::createClient();

        $this->em = static::getContainer()->get('doctrine')->getManager();
    }

    protected function purgeEntities(): void
    {
        $this->em->createQuery('DELETE FROM App\\Entity\\Certification')->execute();
        $this->em->createQuery('DELETE FROM App\\Entity\\UserLesson')->execute();
        $this->em->createQuery('DELETE FROM App\\Entity\\Purchase')->execute();
        $this->em->createQuery('DELETE FROM App\\Entity\\User')->execute();

        $this->em->flush();
    }

    protected function createUser(?string $email = null, bool $verified = true): User
    {
        $this->purgeEntities();

        $email = $email ?? 'user_' . uniqid('', true) . '@example.com';

        $user = new User();
        $user->setEmail($email)
             ->setPassword(password_hash('password', PASSWORD_BCRYPT))
             ->setRoles(['ROLE_USER'])
             ->setIsVerified($verified);
        $this->em->persist($user);
        $this->em->flush();
        return $user;
    }

    protected function purchaseLesson(User $user, Lesson $lesson, ?int $amount = null): Purchase
    {
        $existing = $this->em->getRepository(Purchase::class)
            ->findOneBy(['user' => $user, 'lesson' => $lesson]);

        if ($existing) return $existing;

        $purchase = new Purchase();
        $purchase->setUser($user)
                 ->setLesson($lesson)
                 ->setAmount($amount ?? $lesson->getPrice())
                 ->setCreatedAt(new \\DateTimeImmutable());
        $this->em->persist($purchase);
        $this->em->flush();
        return $purchase;
    }

    protected function purchaseCourse(User $user, Course $course, ?int $amount = null): Purchase
    {
        $purchase = new Purchase();
        $purchase->setUser($user)
                 ->setCourse($course)
                 ->setAmount($amount ?? $course->getPrice())
                 ->setCreatedAt(new \\DateTimeImmutable());
        $this->em->persist($purchase);
        $this->em->flush();
        return $purchase;
    }

    protected function createUserLesson(User $user, Lesson $lesson, bool $validated = false): UserLesson
    {
        $userLesson = new UserLesson();
        $userLesson->setUser($user)
                   ->setLesson($lesson)
                   ->setValidated($validated);
        $this->em->persist($userLesson);
        $this->em->flush();
        return $userLesson;
    }

    protected function createLessonWithTheme(
        string $lessonTitle = 'Test Lesson',
        float $price = 50,
        string $themeName = 'Test Theme',
        string $courseTitle = 'Test Course'
    ): Lesson
    {
        $theme = new Theme();
        $theme->setName($themeName);
        $this->em->persist($theme);

        $course = new Course();
        $course->setTitle($courseTitle)
               ->setPrice($price)
               ->setTheme($theme);
        $this->em->persist($course);

        $lesson = new Lesson();
        $lesson->setTitle($lessonTitle)
               ->setPrice($price)
               ->setCourse($course)
               ->setTheme($theme);
        $this->em->persist($lesson);
        $this->em->flush();
        return $lesson;
    }

    protected function createTheme(string $name = 'Test Theme'): Theme
    {
        $theme = new Theme();
        $theme->setName($name);
        $this->em->persist($theme);
        $this->em->flush();
        return $theme;
    }

    protected function createCourse(string $title, float $price, Theme $theme): Course
    {
        $course = new Course();
        $course->setTitle($title)
               ->setPrice($price)
               ->setTheme($theme);
        $this->em->persist($course);
        $this->em->flush();
        return $course;
    }

    protected function createLesson(string $title, float $price, Course $course, Theme $theme): Lesson
    {
        $lesson = new Lesson();
        $lesson->setTitle($title)
               ->setPrice($price)
               ->setCourse($course)
               ->setTheme($theme);
        $this->em->persist($lesson);
        $this->em->flush();
        return $lesson;
    }

    protected function validateCourse(User $user, Course $course): void
    {
        foreach ($course->getLessons() as $lesson) {
            $userLesson = $this->em->getRepository(UserLesson::class)
                ->findOneBy(['user' => $user, 'lesson' => $lesson]);

            if (!$userLesson) {
                $userLesson = $this->createUserLesson($user, $lesson, true);
            } else {
                $userLesson->setValidated(true);
            }
            $this->em->persist($userLesson);
        }

        $certification = new \\App\\Entity\\Certification();
        $certification->setUser($user)
                      ->setCourse($course)
                      ->setObtainedAt(new \\DateTimeImmutable());
        $this->em->persist($certification);
        $this->em->flush();
    }
}` },
        { type: "table", headers: ["Méthode", "Signature", "Rôle"], rows: [
          ["initTest()", "void", "Initialise $client et $em — à appeler dans setUp()"],
          ["purgeEntities()", "void", "Vide Certification, UserLesson, Purchase, User — base propre"],
          ["createUser()", "(?string $email, bool $verified): User", "Crée et persiste un utilisateur"],
          ["purchaseLesson()", "(User, Lesson, ?int): Purchase", "Crée un achat pour une leçon (évite les doublons)"],
          ["purchaseCourse()", "(User, Course, ?int): Purchase", "Crée un achat pour un cours"],
          ["createUserLesson()", "(User, Lesson, bool): UserLesson", "Crée une entité UserLesson de suivi"],
          ["createLessonWithTheme()", "(string, float, string, string): Lesson", "Crée leçon + cours + thème en une seule opération"],
          ["createTheme()", "(string): Theme", "Crée et persiste un thème"],
          ["createCourse()", "(string, float, Theme): Course", "Crée et persiste un cours lié à un thème"],
          ["createLesson()", "(string, float, Course, Theme): Lesson", "Crée et persiste une leçon liée à un cours+thème"],
          ["validateCourse()", "(User, Course): void", "Valide toutes les leçons + crée la Certification"],
        ]},
        { type: "h", text: "UserUnitTest" },
        { type: "p", text: "Classe de tests unitaires qui vérifie le comportement de l'entité User. Utilise PHPUnit (TestCase) sans dépendre d'une base de données ou d'un framework complet. Teste toutes les méthodes importantes de l'entité User : création, mot de passe, achats et certifications." },
        { type: "code", filename: "UserUnitTest.php", language: "php", code: `class UserUnitTest extends TestCase
{
    public function testUserCreation(): void
    {
        $user = new User();
        $user->setEmail('test@example.com')
             ->setPassword('password123');

        $this->assertEquals('test@example.com', $user->getEmail());

        $this->assertEquals(['ROLE_CLIENT'], $user->getRoles());

        $this->assertEquals('password123', $user->getPassword());

        $this->assertFalse($user->isVerified());
    }

    public function testPasswordVerification(): void
    {
        $user = new User();

        $hashed = password_hash('secret', PASSWORD_BCRYPT);

        $user->setPassword($hashed);

        $this->assertTrue(password_verify('secret', $user->getPassword()));

        $this->assertFalse(password_verify('wrong', $user->getPassword()));
    }

    public function testAddRemovePurchase(): void
    {
        $user = new User();
        $purchase = new Purchase();

        $user->addPurchase($purchase);

        $this->assertCount(1, $user->getPurchases());

        $this->assertSame($user, $purchase->getUser());

        $user->removePurchase($purchase);

        $this->assertCount(0, $user->getPurchases());

        $this->assertNull($purchase->getUser());
    }

    public function testAddCertificationFromCourse(): void
    {
        $user = new User();
        $course = new Course();

        $user->addCertificationFromCourse($course);

        $this->assertCount(1, $user->getCertifications());

        $user->addCertificationFromCourse($course);

        $this->assertCount(1, $user->getCertifications());
    }
}` },
        { type: "table", headers: ["Méthode", "Ce qu'elle vérifie"], rows: [
          ["testUserCreation()", "Email, rôles par défaut (ROLE_CLIENT), password, isVerified = false"],
          ["testPasswordVerification()", "Hachage BCRYPT, vérification mot de passe correct/incorrect"],
          ["testAddRemovePurchase()", "Ajout/suppression d'un achat, relation bidirectionnelle User↔Purchase"],
          ["testAddCertificationFromCourse()", "Ajout certification, pas de duplication pour le même cours"],
        ]},
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "run-tests.sh", language: "bash", code: `# Tous les tests
php bin/phpunit

# Un fichier de test spécifique
php bin/phpunit tests/Controller/FrontControllerTest.php

# Une méthode spécifique
php bin/phpunit --filter testAccessLesson

# Avec affichage détaillé
php bin/phpunit --verbose` },
        { type: "note", variant: "info", text: "Le fichier .env.test.local doit contenir les clés Stripe de test et les paramètres isolés de l'environnement de test." },
      ],
    },
  {
      id: "dp-questions-oral",
      title: "Questions/Réponses — Préparation à la soutenance",
      blocks: [
        { type: "p", text: "Fiches de révision au format questions/réponses, préparées pour l'oral du Dossier Professionnel. Couvre le versioning, Symfony, le front-end, le back-end, la POO, l'explication du code, et le flux de données front/back." },
        { type: "h", text: "Versioning GitHub — Comment j'ai versionné mon projet ?" },
        { type: "p", text: "J'ai utilisé Git pour versionner mon projet. J'ai créé une branche de travail à partir de main, puis j'ai développé mes modifications. Ensuite, j'ai ajouté les fichiers, fait un commit avec un message clair, et enfin j'ai push sur GitHub." },
        { type: "code", filename: "workflow-git.txt", language: "text", code: `[Local]
   |
   |-- git checkout -b ma-branche
   |-- (développement)
   |-- git add .
   |-- git commit -m "message clair"
   |-- git push origin ma-branche
   |
[GitHub / Remote]` },
        { type: "h", text: "Symfony — UML vs Merise" },
        { type: "p", text: "Au niveau de Symfony, on est en UML avec des relations comme ManyToOne. Mais pour la modélisation, on reste en Merise. Ensuite on fait le lien entre les deux dans les entités." },
        { type: "code", filename: "merise-uml.txt", language: "text", code: `Merise (modélisation)         UML / Symfony (code)
     MCD                  -->  Entités avec annotations
  Entités + Relations     -->  ManyToOne, OneToMany...
  Cardinalités (0,n / 1,n) --> Relations Doctrine` },
        { type: "h", text: "Front-end — Formats d'images" },
        { type: "table", headers: ["Format", "Description"], rows: [
          ["WebP", "Format le plus léger qui garde une bonne qualité d'image"],
          ["SVG", "Format vectoriel léger, utilisé pour les logos et icônes"],
          ["JPEG / JPG", "Format classique pour les photos"],
        ]},
        { type: "h", text: "Quelle optimisation pour le référencement naturel ?" },
        { type: "list", items: [
          "La balise title, affiche le titre du site sur la page Google",
          "La sémantique des balises (toutes les balises doivent être bien choisies selon leur fonction)",
          "Les balises aria, améliore l'accessibilité des sites web (navigation clavier, lecteurs d'écran…)",
          "La balise img, qui contient l'attribut alt pour le texte alternatif qui décrit l'image",
        ]},
        { type: "table", headers: ["Attribut ARIA", "Utilité"], rows: [
          ["aria-label", "Nom accessible"],
          ["aria-labelledby", "Lie un label existant"],
          ["aria-describedby", "Ajoute une description"],
          ["aria-hidden", "Cache aux lecteurs d'écran"],
          ["aria-expanded", "État ouvert/fermé"],
          ["aria-live", "Annonce les mises à jour dynamiques"],
          ["role", "Définit le rôle d'un élément"],
        ]},
        { type: "h", text: "Grandes catégories de critères surveillés par les moteurs de recherche" },
        { type: "list", items: [
          "Performance (temps de chargement, poids des images…)",
          "L'accessibilité (texte, contraste couleurs…)",
          "Structure et sémantique HTML",
          "Expérience utilisateur (utilisation mobile…)",
        ]},
        { type: "h", text: "Différence HTML / CSS / JavaScript" },
        { type: "code", filename: "html-css-js.txt", language: "text", code: `HTML  = Squelette / Structure
CSS   = Habillage / Design
JS    = Comportement / Dynamisme` },
        { type: "h", text: "Le DOM et sa manipulation avec JavaScript" },
        { type: "p", text: "Le DOM, c'est la représentation en arbre d'une page web. Chaque élément HTML devient un nœud. Avec JavaScript, on peut accéder à ces éléments, les modifier, en ajouter ou en supprimer pour rendre la page dynamique." },
        { type: "code", filename: "dom-arbre.txt", language: "text", code: `                document
                   |
               <html>
              /        \\
          <head>       <body>
            |          /    \\
         <title>    <div>  <footer>
                      |
                    <p>` },
        { type: "h", text: "Flexbox en CSS" },
        { type: "code", filename: "flexbox.css", language: "css", code: `.conteneur {
  display: flex;
  justify-content: space-between; /* axe principal */
  align-items: center;            /* axe secondaire */
  flex-direction: row;            /* direction */
}` },
        { type: "code", filename: "flexbox-schema.txt", language: "text", code: `Conteneur flex (flex-direction: row)
+------------------------------------------+
|  [item1]   [item2]   [item3]   [item4]  |
|  <-- axe principal (horizontal) -->      |
+------------------------------------------+
        axe secondaire (vertical) ↕` },
        { type: "h", text: "Responsive design vs design adaptatif" },
        { type: "table", headers: ["", "Responsive", "Adaptatif"], rows: [
          ["Principe", "Une seule mise en page qui s'ajuste", "Plusieurs mises en page fixes"],
          ["Mécanisme", "Unités flexibles + media queries", "Tailles d'écran définies"],
          ["Flexibilité", "Fluide, continu", "Par paliers"],
        ]},
        { type: "h", text: "Le modèle de boîte en CSS (Box Model)" },
        { type: "code", filename: "box-model.txt", language: "text", code: `+-------------------------------+
|          MARGIN               |
|  +-------------------------+  |
|  |        BORDER           |  |
|  |  +-------------------+  |  |
|  |  |     PADDING       |  |  |
|  |  |  +-------------+  |  |  |
|  |  |  |   CONTENT   |  |  |  |
|  |  |  +-------------+  |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+` },
        { type: "list", items: [
          "Padding → espace intérieur (entre contenu et bordure)",
          "Border → encadre l'élément",
          "Margin → espace extérieur (entre bordure et autres éléments)",
        ]},
        { type: "h", text: "Classes vs identifiants en CSS" },
        { type: "table", headers: ["", "Classe", "Identifiant"], rows: [
          ["Syntaxe", ".ma-classe", "#mon-id"],
          ["Réutilisable", "Oui, plusieurs éléments", "Non, un seul élément"],
          ["Usage", "Styliser plusieurs éléments", "Cibler un élément précis"],
        ]},
        { type: "h", text: "Le modèle mobile-first" },
        { type: "p", text: "On pense d'abord mobile, puis on adapte pour tablette et ordinateur. La majorité du trafic web se fait sur mobile aujourd'hui." },
        { type: "code", filename: "mobile-first.txt", language: "text", code: `Mobile first :
[Mobile 320px] --> [Tablette 768px] --> [Desktop 1024px+]
    Base CSS     +  media query      +   media query` },
        { type: "h", text: "Éléments clés d'un cahier des charges fonctionnel" },
        { type: "p", text: "Il sert à décrire : les besoins, les fonctionnalités, les contraintes, les objectifs, le budget du projet. Ça sert à s'assurer que tout le monde est d'accord sur ce qui doit être réalisé avant de commencer le développement." },
        { type: "h", text: "Back-end — Merise" },
        { type: "p", text: "Merise est une méthode de modélisation des bases de données. Elle permet de structurer les données, les relations et les processus de manière claire." },
        { type: "code", filename: "merise-etapes.txt", language: "text", code: `Étapes Merise :
1. MCD (Modèle Conceptuel de Données)
        Entités + Relations + Cardinalités
              |
              v
2. MLD (Modèle Logique de Données)
        Tables + Clés étrangères
              |
              v
3. MPD (Modèle Physique de Données)
        Base de données réelle (SQL)` },
        { type: "p", text: "Comment je l'utilise ? 1. Le MCD : structurer les données et définir les relations entre les entités (avec des verbes) ainsi que les cardinalités pour représenter les interactions possibles. 2. Le MLD : transformer le MCD en structure de base de données en faisant apparaître les clés étrangères — leur emplacement dépend des cardinalités. Quand la relation est en N-N, une table d'association est créée pour relier les deux tables en regroupant leurs clés primaires. 3. Le MPD : transformation du MLD en instructions SQL concrètes dans le SGBD." },
        { type: "p", text: "Les cardinalités précisent combien de fois une entité peut être liée à une autre, avec un minimum et un maximum, comme 0,n ou 1,n. Exemple : un User possède au minimum aucune certification \"0\" et au maximum plusieurs \"n\"." },
        { type: "h", text: "Architecture MVC utilisée" },
        { type: "table", headers: ["MVC", "Symfony"], rows: [
          ["Controllers", "Les Controllers"],
          ["Model", "Les Entités"],
          ["View", "Les Templates"],
        ]},
        { type: "code", filename: "mvc-symfony.txt", language: "text", code: `Architecture MVC Symfony :
+------------------+
|    Utilisateur   |
+--------+---------+
         | (requête HTTP)
         v
+--------+---------+
|   CONTRÔLEUR     |  <-- appelé en PREMIER et TROISIÈME si données)
|  src/Controller/ |
+--------+---------+
    |         |
    v         v
+-------+  +-------+
| MODEL |  |  VUE  | <-- appelé en DEUXIÈME (selon données ou pas)
|Entité |  |Twig   |
|src/   |  |temp-  |
|Entity/|  |lates/ |
+---+---+  +-------+
    |           ^
    v           |
+---+-----------+---+
|   Base de données  |
+--------------------+` },
        { type: "p", text: "Quel élément de l'architecture MVC est appelé au clic d'un site ? En MVC, le contrôleur est toujours appelé en premier. Il reçoit la requête de l'utilisateur via la route et décide quelle vue afficher. Ensuite, si nécessaire, il fait appel au modèle pour récupérer des données en base. Puis il revient sur le contrôleur. Enfin, il renvoie la vue (le template) à l'utilisateur." },
        { type: "h", text: "Protection contre les injections SQL" },
        { type: "p", text: "Dans mon projet, je suis protégé des injections SQL grâce à Doctrine ORM (Objects Relational Mapper). C'est un ORM qui génère les requêtes SQL de manière sécurisée à partir du code. Il utilise des requêtes préparées, ce qui empêche l'injection de code malveillant. Sans ORM ni ODM (ex : une appli en PHP), ce sont les requêtes préparées qui permettent de nettoyer la requête." },
        { type: "h", text: "Annotations ORM" },
        { type: "p", text: "Une annotation permet d'ajouter des informations sur un champ ou une classe pour définir comment il sera utilisé en base de données. Ces infos sont utilisées par Doctrine ORM." },
        { type: "code", filename: "annotations-orm.php", language: "php", code: `#[ORM\\Id]
// Ici on précise à doctrine que c'est la clé primaire de la table (l'id de la table)

#[ORM\\GeneratedValue]
// Ici on génère une valeur en autoincrément (id 1 de départ et à la suite 2,3,..)

#[ORM\\Column]
private ?int $id = null;

#[ORM\\OneToMany]
// Ici on définit via Doctrine les relations entre les tables par clés étrangère` },
        { type: "h", text: "Typages PHP" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["int", "Entiers"],
          ["bool", "Booléen (0 ou 1)"],
          ["string", "Texte"],
          ["array", "Tableaux"],
          ["float", "Décimales (chiffres à virgules)"],
        ]},
        { type: "h", text: "UniqueConstraint sur l'entité User" },
        { type: "p", text: "Ce code précise que sur l'entité User, il y a la clé primaire (l'ID) mais la vraie façon d'identifier l'User c'est son email car c'est une classe d'authentification." },
        { type: "code", filename: "unique-constraint.php", language: "php", code: `#[ORM\\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]` },
        { type: "h", text: "Failles de sécurité ciblées par les jurys" },
        { type: "table", headers: ["Faille", "Description", "Protection"], rows: [
          ["Injection SQL", "Attaque la base par l'entrée du front (formulaire de contact, de connexion…)", "Doctrine ORM / requêtes préparées"],
          ["CSRF", "Hackeur intercepte les requêtes HTTP/HTTPS. Force l'utilisateur à exécuter une action à son insu", "Token généré à la session utilisateur"],
          ["XSS", "Injecte du JS malveillant dans une page", "Échappement de caractères (chevrons → équivalent HTML)"],
          ["Brute Force", "Teste un grand nombre de mots de passe", "CAPTCHA (distingue humain/robot)"],
          ["Hashage", "Protection du mot de passe", "Données sécurisées en base"],
        ]},
        { type: "h", text: "Le RGPD" },
        { type: "p", text: "Ensemble de règles qui encadre la protection des données des utilisateurs. Les règles sont créées par l'Europe. Chaque pays a une autorité qui gère le RGPD ; en France, c'est la CNIL (niveau informatif, surveillance et pénale/amende). Il doit être respecté à partir du moment où on collecte des données (prénom, email…) et en cas de formulaire de contact, tout ce qui permet d'identifier une personne." },
        { type: "p", text: "On doit expliquer : pourquoi on collecte les données, dans quel but, où elles sont stockées (ex : Always Data → serveurs en France), par qui elles sont utilisées." },
        { type: "h", text: "Déploiement d'une application" },
        { type: "code", filename: "etapes-deploiement.txt", language: "text", code: `Étapes de déploiement :
1. Choisir un hébergeur en ligne
         |
2. Transférer les fichiers avec FileZilla FTP
   (fichiers locaux → serveur d'hébergement)
         |
3. Transférer la BDD via phpMyAdmin
   (importer le fichier .sql exporté de la BDD locale)
         |
4. Paramétrer les variables d'environnement
   (sur Always Data ou via SSH)` },
        { type: "table", headers: ["Hébergeur", "Type"], rows: [
          ["Always Data", "Hébergement classique (FTP + phpMyAdmin)"],
          ["Render", "Hébergement cloud"],
          ["Railways", "Hébergement cloud"],
          ["GitHub Pages", "Hébergement statique"],
        ]},
        { type: "p", text: "Avantage GitHub Pages / Render / Railways : les fichiers sont sur un repo GitHub, ils se synchronisent avec le repository GitHub → synchronisation instantanée, pas besoin de transférer manuellement les fichiers modifiés." },
        { type: "h", text: "Architecture d'un projet Symfony" },
        { type: "code", filename: "arborescence-symfony.txt", language: "text", code: `mon-projet-symfony/
├── src/
│   ├── Controller/      → Routes + logique des requêtes
│   ├── Entity/          → Modèles de données / structure BDD
│   ├── Repository/      → Récupération des données depuis la BDD
│   └── Form/            → Formulaires de création/édition d'entités
├── templates/           → Ce qui est affiché côté interface (Twig)
└── config/              → Règles globales, services, dépendances` },
        { type: "table", headers: ["Dossier", "Chemin", "Rôle"], rows: [
          ["Controllers", "src/Controller/", "Routes + logique des requêtes"],
          ["Entities", "src/Entity/", "Modèles de données / BDD"],
          ["Repositories", "src/Repository/", "Récupération des données"],
          ["Formulaires", "src/Form/", "Formulaires création/édition"],
          ["Templates", "templates/", "Interface utilisateur"],
          ["Config", "config/", "Règles globales + services"],
        ]},
        { type: "h", text: "POO — Modificateurs de visibilité" },
        { type: "table", headers: ["Modificateur", "Accessibilité"], rows: [
          ["private", "Accessible seulement à la classe dans laquelle il se trouve"],
          ["public", "Accessible par n'importe quels fichiers"],
          ["protected", "Accessible par la classe où il se trouve ET par les héritiers de cette classe"],
        ]},
        { type: "h", text: "Que signifie -> en PHP ?" },
        { type: "p", text: "En PHP, -> sert à accéder à un attribut ou à une méthode d'un objet." },
        { type: "code", filename: "fleche-acces.php", language: "php", code: `$user->name;       // accès à un attribut
$user->getEmail(); // appel d'une méthode` },
        { type: "p", text: "Ça signifie : \"j'accède à quelque chose à l'intérieur de l'objet\"." },
        { type: "h", text: "Que signifie abstract ?" },
        { type: "p", text: "Indique qu'une classe ou méthode ne peut pas être instanciée, et doit être redéfinie dans une classe enfant. Tout ce qui est class … Abstract en POO ce sont des \"squelettes\" qui prévoient des valeurs par défaut." },
        { type: "p", text: "Exemple : Abstract est un véhicule qui reprend toutes les caractéristiques que les véhicules ont en commun. Chaque véhicule hérite de cette classe et rajoute ses propres propriétés selon ses besoins." },
        { type: "code", filename: "abstract-schema.txt", language: "text", code: `[Classe Abstract : Véhicule]
  - marque
  - vitesse_max
  - nb_roues
         |
    _____|_____
    |          |
[Voiture]   [Moto]
  + nb_portes  + type_guidon` },
        { type: "h", text: "Que signifie new ?" },
        { type: "p", text: "new permet de créer une instance d'une classe." },
        { type: "code", filename: "new-instance.php", language: "php", code: `$user = new User();        // On crée un nouvel objet User

$vehicule = new Voiture();
$vehicule->demarrer();     // -> pour appeler une méthode de l'objet` },
        { type: "h", text: "C'est quoi la POO ?" },
        { type: "p", text: "C'est une façon d'organiser le code autour d'objets. Un objet contient des données (attributs) et des actions (méthodes). Le code est plus organisé, plus réutilisable et plus facile à maintenir." },
        { type: "h", text: "Les 4 piliers de la POO" },
        { type: "p", text: "1. Encapsulation — on protège les données d'un objet. Regrouper les données et les méthodes dans une classe et contrôler leur accès." },
        { type: "code", filename: "encapsulation.php", language: "php", code: `class User {
    private $email;

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getEmail() {
        return $this->email;
    }
}` },
        { type: "p", text: "On protège les données via private. Un utilisateur ne peut pas modifier directement son âge sans passer par une méthode qui vérifie." },
        { type: "p", text: "2. Abstraction — masquer la complexité interne et exposer uniquement ce qui est nécessaire. Exemple : un utilisateur clique sur \"Commander\". Il n'a pas besoin de savoir comment fonctionne le paiement interne." },
        { type: "p", text: "3. Héritage — une classe peut récupérer les propriétés d'une autre. Permet à une classe d'hériter des propriétés et méthodes d'une autre." },
        { type: "code", filename: "heritage.php", language: "php", code: `class Admin extends User {
    public function deleteUser() {
        // logique
    }
}` },
        { type: "p", text: "Admin hérite de User. Un Admin est un Utilisateur, donc il hérite de ses infos." },
        { type: "code", filename: "heritage-schema.txt", language: "text", code: `[User]
  - email
  - password
  - getEmail()
      |
      | extends
      v
[Admin]
  - (hérite de User)
  + deleteUser()` },
        { type: "p", text: "4. Polymorphisme — plusieurs objets peuvent avoir la même méthode mais avec un comportement différent." },
        { type: "code", filename: "polymorphisme.php", language: "php", code: `class PaiementCarte {
    public function payer() {
        echo "Paiement par carte";
    }
}

class PaiementPaypal {
    public function payer() {
        echo "Paiement par PayPal";
    }
}` },
        { type: "p", text: "Même méthode payer(), comportement différent — payer() peut fonctionner différemment pour carte bancaire ou PayPal." },
        { type: "h", text: "Classe, objet, instance, attribut, méthode" },
        { type: "table", headers: ["Terme", "Définition"], rows: [
          ["Classe", "Modèle"],
          ["Objet", "Élément créé à partir du modèle"],
          ["Instance", "Objet (synonyme)"],
          ["Attribut", "Variable dans une classe"],
          ["Méthode", "Fonction dans une classe"],
        ]},
        { type: "h", text: "Héritage vs Composition" },
        { type: "table", headers: ["", "Héritage", "Composition"], rows: [
          ["Relation", "\"est un\"", "\"a un\""],
          ["Exemple", "Un Admin est un User", "Une Commande a un Produit"],
          ["Flexibilité", "Moins flexible", "Plus flexible ✅"],
        ]},
        { type: "p", text: "En général, on préfère la composition car c'est plus flexible." },
        { type: "h", text: "Classe abstraite vs Interface" },
        { type: "table", headers: ["", "Classe abstraite", "Interface"], rows: [
          ["Définition", "Base commune avec un peu de logique", "Contrat : impose des méthodes"],
          ["Logique", "Peut contenir du code", "Pas de code, juste des signatures"],
        ]},
        { type: "h", text: "Qu'est-ce qu'un constructeur ?" },
        { type: "p", text: "Un constructeur est une méthode spéciale exécutée automatiquement quand on crée un objet. Il sert à initialiser les attributs et préparer l'objet à être utilisé." },
        { type: "code", filename: "constructeur.php", language: "php", code: `public function __construct($name) {
    $this->name = $name;
}` },
        { type: "h", text: "Pourquoi la POO améliore la maintenabilité ?" },
        { type: "list", items: [
          "Le code est organisé en classes responsables chacune d'un rôle précis",
          "Si je dois modifier une fonctionnalité, je sais dans quelle classe aller",
          "Les modifications impactent moins le reste du code",
          "Le code est plus lisible et réutilisable",
          "On met souvent les attributs en private pour protéger les données",
        ]},
        { type: "h", text: "JavaScript est-il vraiment orienté objet ?" },
        { type: "p", text: "Oui… mais avec un fonctionnement particulier. JavaScript est basé sur les prototypes, pas sur les classes classiques comme PHP ou Java. On peut utiliser le mot-clé class, depuis ES6." },
        { type: "h", text: "Que signifie $this ?" },
        { type: "p", text: "$this représente l'objet actuel. On l'utilise pour accéder aux attributs ou méthodes de la même classe." },
        { type: "code", filename: "this-php.php", language: "php", code: `$this->name = $name;
// Ça veut dire : "je modifie l'attribut de CET objet"` },
        { type: "h", text: "Différence entre :: et ->" },
        { type: "table", headers: ["Opérateur", "Usage"], rows: [
          ["->", "Pour un objet (instance)"],
          ["::", "Pour un élément statique (lié à la classe)"],
        ]},
        { type: "code", filename: "operateurs-php.php", language: "php", code: `User::countUsers(); // méthode statique
$user->getEmail();  // méthode d'instance` },
        { type: "h", text: "Que signifie static ?" },
        { type: "p", text: "Un élément static appartient à la classe, pas à un objet. On peut l'utiliser sans créer d'instance." },
        { type: "code", filename: "static-php.php", language: "php", code: `public static $count = 0;` },
        { type: "h", text: "Getter et Setter" },
        { type: "p", text: "Getter → permet de lire une valeur privée. Setter → permet de modifier une valeur privée. Ça sert à respecter l'encapsulation." },
        { type: "h", text: "extends et implements" },
        { type: "code", filename: "extends-implements.php", language: "php", code: `// extends : héritage
class Admin extends User
// Admin hérite de User

// implements : interface
class Paiement implements PaiementInterface
// La classe doit obligatoirement définir les méthodes de l'interface` },
        { type: "h", text: "Variable vs Propriété" },
        { type: "table", headers: ["", "Variable", "Propriété"], rows: [
          ["Définition", "Existe seule dans une fonction ou un script", "Variable qui appartient à une classe"],
        ]},
        { type: "code", filename: "variable-propriete.php", language: "php", code: `$name = "Jean";         // variable
$this->name = "Jean";   // propriété` },
        { type: "h", text: "Que signifie final ?" },
        { type: "p", text: "Empêche qu'une classe soit héritée, ou qu'une méthode soit redéfinie." },
        { type: "code", filename: "final-php.php", language: "php", code: `final class User {}
// On ne peut pas faire extends User` },
        { type: "h", text: "Redéfinition (override)" },
        { type: "p", text: "Si une méthode enfant a le même nom qu'une méthode parent, elle écrase la méthode du parent. C'est ce qu'on appelle la redéfinition (override)." },
        { type: "h", text: "Peut-on avoir plusieurs constructeurs en PHP ?" },
        { type: "p", text: "Non. Mais on peut utiliser des paramètres optionnels, ou créer des méthodes statiques alternatives." },
        { type: "h", text: "Dépendance entre classes" },
        { type: "p", text: "Quand une classe utilise une autre classe." },
        { type: "code", filename: "dependance.php", language: "php", code: `class Order {
    private $payment;
}
// Order dépend de Payment` },
        { type: "p", text: "Trop de dépendances = code difficile à maintenir." },
        { type: "h", text: "L'injection de dépendance" },
        { type: "p", text: "Au lieu de créer une classe à l'intérieur d'une autre, on la passe en paramètre." },
        { type: "code", filename: "injection-dependance.php", language: "php", code: `// ❌ Mauvais :
$this->payment = new Payment();

// ✅ Mieux :
public function __construct(Payment $payment) {
    $this->payment = $payment;
}` },
        { type: "p", text: "Plus flexible, plus testable." },
        { type: "h", text: "include vs require en PHP" },
        { type: "table", headers: ["", "include", "require"], rows: [
          ["En cas d'erreur", "Warning, le script continue", "Erreur fatale, le script s'arrête"],
        ]},
        { type: "h", text: "Qu'est-ce qu'un namespace ?" },
        { type: "p", text: "Permet d'éviter les conflits de noms entre classes." },
        { type: "code", filename: "namespace.php", language: "php", code: `namespace App\\Models;
// Utile dans les gros projets` },
        { type: "h", text: "Objet immuable" },
        { type: "p", text: "Un objet qu'on ne peut pas modifier après sa création. Exemple : DateTimeImmutable en PHP. Avantages : moins d'erreurs, plus prévisible." },
        { type: "h", text: "Code Explications — À quoi sert .htaccess dans mon code" },
        { type: "list", items: [
          "Réécriture d'URLs pour les rendre plus lisibles ou pour gérer des redirections (ex : /produit?id=42 → /produit/mon-article)",
          "Redirections automatiquement d'une page vers une autre, par exemple après une refonte de site ou pour forcer le HTTPS",
          "Contrôle d'accès : bloquer ou autoriser l'accès selon l'adresse IP, le navigateur, ou d'autres critères",
          "Protection par mot de passe : restreindre l'accès à un répertoire avec une authentification HTTP (combiné avec un fichier .htpasswd)",
          "Pages d'erreur personnalisées : définir des pages spécifiques pour les erreurs HTTP (404, 403, 500…)",
          "En-têtes HTTP : ajouter ou modifier des en-têtes de réponse (cache, sécurité, CORS…)",
          "Compression et cache : activer la compression gzip ou définir des règles de mise en cache des ressources",
        ]},
        { type: "h", text: "La syntaxe Twig {% %} et {{ }}" },
        { type: "p", text: "{% … %} : syntaxe de Twig qui permet de créer des fichiers HTML dynamiques en ajoutant de la logique (conditions, boucles, héritage de templates) côté serveur, sans afficher directement des données. C'est un moteur de templates qui génère des pages HTML — balise spéciale Twig." },
        { type: "p", text: "{{ }} : ce qu'on nomme \"widgets\" dans Symfony — sert à afficher des données directement." },
        { type: "code", filename: "twig-syntaxe.twig", language: "text", code: `{% if user is defined %}      {# logique / condition #}
    {{ user.name }}           {# affichage de données #}
{% endif %}` },
        { type: "h", text: "À quoi ça sert les lignes use …/../…; ?" },
        { type: "p", text: "C'est une importation des classes ou des namespaces pour les utiliser dans le fichier sans écrire le chemin complet à chaque fois." },
        { type: "code", filename: "use-imports.php", language: "php", code: `use App\\Entity\\User;
use Symfony\\Component\\HttpFoundation\\Response;
// → on peut utiliser User et Response directement
//   sans écrire App\\Entity\\User à chaque fois` },
        { type: "h", text: "Que fait ce code dans les Services ?" },
        { type: "code", filename: "explication-services.php", language: "php", code: `// Récupère tous les thèmes de la base de données
return $this->em->getRepository(Theme::class)->findAll();

// Récupère un thème selon l'ID
return $this->em->getRepository(Theme::class)->find($themeId);

// Ajoute un cours à un thème, prépare la requête SQL (persist), envoie en BDD (flush)
$theme->addCourse($course);
$this->em->persist($theme);
$this->em->flush();` },
        { type: "h", text: "Que signifie class AppAuthenticator extends AbstractLoginFormAuthenticator ?" },
        { type: "p", text: "C'est l'AppAuthenticator qui hérite de l'AbstractLoginFormAuthenticator. L'AbstractLoginFormAuthenticator c'est une classe précodée de Symfony, une forme de squelette par défaut de code." },
        { type: "code", filename: "authenticator-heritage.php", language: "php", code: `class AppAuthenticator extends AbstractLoginFormAuthenticator` },
        { type: "h", text: "Passport — authentification Symfony" },
        { type: "code", filename: "passport-explication.php", language: "php", code: `return new Passport(
    new UserBadge($email),
    new PasswordCredentials($password),
    [
        new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')),
    ]
);` },
        { type: "h", text: "Redirection utilisateur" },
        { type: "code", filename: "redirection-explication.php", language: "php", code: `// On redirige l'utilisateur sur la page d'accueil
return new RedirectResponse($this->urlGenerator->generate('app_home'));` },
        { type: "h", text: "Convention de nommage des formulaires Symfony" },
        { type: "p", text: "Pourquoi rajouter le mot Type dans le dossier Form (ex : LessonType, UserType) ? Type car c'est la convention de nommage spécifique pour caractériser les formulaires dans Symfony." },
        { type: "h", text: "buildForm — Ajout des champs" },
        { type: "code", filename: "buildform-explication.php", language: "php", code: `public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('title', TextType::class, [
            'label' => 'Titre de la leçon',
        ])
        ->add('price', TextType::class, [
            'label' => 'Prix',
        ])
        ->add('content', TextareaType::class, [
            'label'      => 'Description / Contenu',
            'required'   => false,
            'attr'       => [
                'rows'        => 10,
                'placeholder' => '<h3>Description:</h3><p>Texte de la leçon ici...</p>'
            ],
            'empty_data' => '<h3>Description :</h3><p>Lorem ipsum dolor sit amet...</p>'
        ])
        ->add('videoUrl', UrlType::class, [
            'label'    => 'URL de la vidéo',
            'required' => false,
            'attr'     => ['placeholder' => 'https://...'],
        ])
        ->add('course', EntityType::class, [
            'class'        => Course::class,
            'choice_label' => 'id',
            'label'        => 'Cours associé',
        ]);
}` },
        { type: "p", text: "Que veut dire la flèche -> en POO ici ? $builder est un objet instancié qui fait partie de la classe LessonType et qui vient de la classe FormBuilderInterface qui est par défaut de Symfony." },
        { type: "h", text: "Le dossier DataFixtures" },
        { type: "p", text: "C'est pour y insérer des données fictives dans la base de données. Ici elles sont dans le fichier TestFixtures." },
        { type: "h", text: "Processus de données entre front et back — Le parcours d'une donnée" },
        { type: "p", text: "En Symfony (et dans beaucoup d'autres frameworks), on parle souvent du \"flux de données\" — chemin que suit une donnée depuis la base de données jusqu'à l'affichage dans le navigateur." },
        { type: "code", filename: "parcours-donnee.txt", language: "text", code: `1. Fichier Twig (affichage)
         ^
         |
2. Contrôleur (logique)
         ^
         |
3. Entité (sauf si la logique est dans le contrôleur directement)
         ^
         |
4. Base de données` },
        { type: "h", text: "Certifications — Exemple complet de flux de données" },
        { type: "p", text: "Template Twig : les données de la variable certifications viennent de la base de données via {% for certification in certifications %}." },
        { type: "code", filename: "certifications.html.twig", language: "text", code: `{% if certifications|length > 0 %}
    <div class="certification-list row g-3">
        {% for certification in certifications %}
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">` },
        { type: "code", filename: "FrontController-certifications.php", language: "php", code: `#[Route('/front/certifications', name: 'front_certifications')]
public function listCertifications(): Response
{
    $user = $this->getCurrentUser();
    $certifications = $user->getFrontCertifications();

    return $this->render('front/certifications.html.twig', [
        'user'           => $user,
        'certifications' => $certifications,
    ]);
}` },
        { type: "p", text: "La variable $certifications = $user->getFrontCertifications() → la méthode getFrontCertifications (getter d'une entité \"User\") va aller chercher en BDD les certifications." },
        { type: "code", filename: "User-getCertifications.php", language: "php", code: `// -------------------------
// CERTIFICATIONS
// -------------------------

/**@return Collection<int, Certification> Get all certifications */
public function getCertifications(): Collection {
    return $this->certifications;
}

public function addCertification(Certification $certification): static
{
    if (!$this->certifications->contains($certification)) {
        $this->certifications->add($certification);
        $certification->setUser($this);
    }
    return $this;
}` },
        { type: "h", text: "Course — Cas spécifique avec le point (.)" },
        { type: "code", filename: "courses.html.twig", language: "text", code: `<div class="row g-3">
    {% for lesson in course.lessons %}
        {% if lesson.id in purchasedLessonIds or isCoursePurchased %}
            <div class="col-12 col-md-6 col-lg-4">
                <!-- contenu de la leçon -->
            </div>
        {% endif %}
    {% endfor %}
</div>` },
        { type: "code", filename: "FrontController-showCourse.php", language: "php", code: `#[Route('/front/course/{id}', name: 'front_course_show')]
public function showCourse(Course $course, Request $request, PurchaseRepository $purchaseRepository): Response
{
    // préparation des variables

    return $this->render('front/courses.html.twig', [
        'course'                    => $course,
        'theme'                     => $theme,
        'purchasedLessonIdsByCourse' => $purchasedLessonIdsByCourse,
        'purchasedCourses'           => $purchasedCourses,
        'isCoursePurchased'          => $isCoursePurchased,
        'allLessonsPurchased'        => $allLessonsPurchased,
        'lessonsData'                => $lessonsData,
        'stripePublicKey'            => $_ENV['STRIPE_PUBLIC_KEY'],
    ]);
}` },
        { type: "p", text: "showCourse() prépare toutes les données pour Twig. La variable Twig course correspond exactement à l'argument $course injecté dans la fonction." },
        { type: "note", variant: "info", title: "Astuce", text: "Dans Symfony, si tu mets Course $course comme paramètre et que ta route contient {id}, Symfony récupère automatiquement l'entité Course avec cet id grâce au ParamConverter." },
        { type: "p", text: "Cas spécifique : le course.lessons n'est pas créé manuellement — c'est un tableau lié directement à l'entité Course, injecté automatiquement via Doctrine et la relation OneToMany de Course → Lesson." },
        { type: "h", text: "Schéma visuel complet Twig → Contrôleur → Entité" },
        { type: "code", filename: "flux-complet.txt", language: "text", code: `[ Twig : front/courses.html.twig ]
  {% for lesson in course.lessons %}
        lesson.title
        lesson.price
  {% endfor %}
         |
         v
[ Contrôleur : FrontController::showCourse() ]
  $course : Course injectée via ParamConverter
  $theme
  $purchasedLessonIdsByCourse
  $purchasedCourses
  $isCoursePurchased
  $lessonsData
  return render(..., ['course' => $course])
         |
         v
[ Entité : App\\Entity\\Course ]
  - $lessons : OneToMany vers Lesson
  - $theme   : ManyToOne vers Theme
  - $price, $title, etc.
         |
         v
[ Base de données : tables course + lesson ]` },
        { type: "h", text: "Astuces pour reconnaître le cheminement (6 règles)" },
        { type: "list", items: [
          "Si Twig fait {% for x in course.lessons %} → regarde si $course est passé directement",
          "Si $course est un paramètre du contrôleur et entité Doctrine, tu n'as pas besoin de construire le tableau manuellement",
          "Sinon, si c'est une variable calculée ou un tableau custom, alors c'est le contrôleur qui crée les objets",
          "Repère la variable dans Twig : {% for x in variable %} → variable est clé dans render()",
          "Cherche dans le contrôleur : méthode avec render() qui envoie cette variable",
          "Regarde comment la variable est construite : findAll(), repository, getter d'entité…",
        ]},
        { type: "h", text: "Les 3 piliers du flux Symfony" },
        { type: "table", headers: ["Couche", "Rôle"], rows: [
          ["Twig (front-end)", "Reçoit les données du contrôleur et les transforme en HTML visible par l'utilisateur"],
          ["Contrôleur (back-end)", "Fichier PHP qui récupère les données et les envoie à Twig. Fait le lien entre la requête et la BDD"],
          ["Entité (modèle/BDD)", "Classe PHP qui représente une table de la BDD. Doctrine transforme les lignes SQL en objets PHP"],
        ]},
        { type: "code", filename: "3-piliers.txt", language: "text", code: `Twig       = AFFICHER les données (front-end)
Contrôleur = GÉRER la logique et envoyer les données (back-end)
Entité     = STRUCTURE et stockage des données (base de données)` },
        { type: "h", text: "Règle générale Twig" },
        { type: "p", text: "Si la variable Twig vient d'une entité Doctrine → Twig peut accéder aux getters ou relations (theme.courses, lesson.title). Si la variable Twig est calculée/combinée dans le contrôleur → on crée un tableau manuel et Twig accède aux clés (lessonData.entity, lessonData.purchased)." },
        { type: "note", variant: "info", title: "Astuce", text: "Dès que tu vois un key.value dans Twig, demande-toi si value est un getter de l'entité (Doctrine/relation) ou une clé de tableau construit à la main (le contrôleur manipule la donnée)." },
        { type: "h", text: "Cas 1 — Relation d'entité (automatique via Doctrine)" },
        { type: "code", filename: "cas1-relation-entite.txt", language: "text", code: `[ Twig : front/theme_courses.html.twig ]
  {% for course in theme.courses %}
        course.title
  {% endfor %}
         |
         v
[ Contrôleur : FrontController::themeCourses() ]
  $theme = $this->themeService->getThemeWithCourses($themeId);
  return $this->render(..., ['theme' => $theme]);
         |
         v
[ Entité : App\\Entity\\Theme ]
  - $courses : OneToMany vers Course
         |
         v
[ Entité : App\\Entity\\Course ]
  - $title : string
  - $lessons : OneToMany vers Lesson
         |
         v
[ Base de données : tables theme et course ]` },
        { type: "h", text: "Cas 2 — Variable manuelle (construite dans le contrôleur)" },
        { type: "code", filename: "cas2-variable-manuelle.txt", language: "text", code: `[ Twig : front/courses.html.twig ]
  {% for lessonData in lessonsData %}
        lessonData.entity.title
        lessonData.purchased
  {% endfor %}
         |
         v
[ Contrôleur : FrontController::showCourse() ]
  $lessonsData[] = [
      'entity'    => $lesson,
      'purchased' => true/false
  ];
  return $this->render(..., ['lessonsData' => $lessonsData]);
         |
         v
[ Variable PHP ]
  - entity    : objet Lesson
  - purchased : bool
         |
         v
[ Entité : App\\Entity\\Lesson ]
  - $title : string
  - $price : float
  ...` },
        { type: "h", text: "Astuces pratiques dans l'IDE" },
        { type: "p", text: "Faire clic droit sur les méthodes pour aller directement sur le fichier qui appelle la méthode — permet de savoir où se trouve le cheminement entre l'entité et le contrôleur." },
        { type: "code", filename: "ide-navigation.txt", language: "text", code: `Clic droit sur une méthode
  → "Atteindre la définition"  [F12]
  → "Atteindre les références" [Shift+F12]
  → "Aperçu"` },
        { type: "note", variant: "info", text: "Cette astuce permet de naviguer directement entre AbstractController → FrontController → méthode getCurrentUser() par exemple, et comprendre le flux complet." },
        { type: "h", text: "Étapes de maquette" },
        { type: "list", items: [
          "Le zoning",
          "Le wireframe",
          "Le maquettage (couleur, typographie, texte, logo…)",
          "Le prototypage",
        ]},
        { type: "h", text: "Bootstrap du projet" },
        { type: "list", items: [
          "Les media queries et les couleurs sont utilisées pour s'adapter selon les écrans, créées par une surcouche (override) personnelle",
          "Bootstrap exploite les composants tout prêts de la librairie du framework",
        ]},
        { type: "h", text: "Contraintes de sécurité (création de compte)" },
        { type: "list", items: [
          "Les règles imposent un minimum de 12 caractères dans le mot de passe, avec caractères spéciaux",
          "Fichier RegistrationFormType",
          "La double authentification va de pair avec ce système de sécurisation — ça évite d'avoir des mots de passe beaucoup trop longs et complexes",
        ]},
      ],
    },
  {
      id: "dp-entites",
      title: "Entités Doctrine — Modèle de données",
      blocks: [
        { type: "h", text: "Schéma global des entités" },
        {
          type: "diagram",
          content: `┌─────────┐        ┌──────────────┐        ┌────────┐
│  Theme  │──1:N──▶│    Course    │──1:N──▶│ Lesson │
└─────────┘        └──────────────┘        └────────┘
                         │  │                   │  │
                      1:N│  │1:N             1:N│  │1:N
                         ▼  ▼                   ▼  ▼
                   ┌─────────┐ ┌───────┐ ┌────────┐ ┌────────────┐
                   │Purchase │ │Certif.│ │Purchase│ │UserLesson  │
                   └─────────┘ └───────┘ └────────┘ └────────────┘
                        ▲           ▲          ▲           ▲
                        │           │          │           │
                   ┌────────────────────────────────────────────┐
                   │                   User                     │
                   └────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Champs d'audit communs à toutes les entités" },
        {
          type: "diagram",
          content: `Chaque entité possède les champs d'audit suivants :

┌────────────────┬────────────────────────────────────────────┐
│ Champ          │ Description                                │
├────────────────┼────────────────────────────────────────────┤
│ createdAt      │ Date de création (DateTimeImmutable)       │
│ updatedAt      │ Date de dernière mise à jour               │
│ createdBy      │ Utilisateur qui a créé l'enregistrement    │
│ updatedBy      │ Utilisateur qui a modifié l'enregistrement │
└────────────────┴────────────────────────────────────────────┘`,
        },
        { type: "table", headers: ["Attribut ORM", "Signification"], rows: [
          ["#[ORM\\Entity]", "Classe = table en base de données"],
          ["#[ORM\\Id]", "Clé primaire"],
          ["#[ORM\\GeneratedValue]", "Auto-incrément"],
          ["#[ORM\\Column]", "Colonne en base"],
          ["#[ORM\\ManyToOne]", "Relation N:1"],
          ["#[ORM\\OneToMany]", "Relation 1:N"],
          ["#[ORM\\ManyToMany]", "Relation N:N"],
          ["nullable: false", "Champ obligatoire"],
          ["nullable: true", "Champ optionnel"],
          ["onDelete: 'CASCADE'", "Suppression en cascade"],
          ["orphanRemoval: true", "Supprime les orphelins automatiquement"],
        ]},
        { type: "h", text: "Certification" },
        { type: "p", text: "L'entité Certification permet de lier un utilisateur à un cours qu'il a terminé. Elle stocke la date d'obtention, ainsi que des informations d'audit pour savoir qui a créé ou mis à jour la certification et quand. C'est une entité clé pour gérer le suivi des formations et générer éventuellement des certificats pour l'utilisateur." },
        {
          type: "diagram",
          content: `┌────────┐   ManyToOne   ┌───────────────┐   ManyToOne   ┌────────┐
│  User  │◀──────────────│ Certification │──────────────▶│ Course │
└────────┘               └───────────────┘               └────────┘
                               │
                         obtainedAt
                         createdAt
                         updatedAt
                         createdBy ──▶ User
                         updatedBy ──▶ User`,
        },
        { type: "code", filename: "Certification.php", language: "php", code: `#[ORM\\Entity(repositoryClass: CertificationRepository::class)]
// dit à Doctrine : "cette classe est une entité BDD"
class Certification
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\ManyToOne(inversedBy: 'certifications')]
    // plusieurs certifications peuvent appartenir à un seul utilisateur
    #[ORM\\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    // onDelete: 'CASCADE' = si l'utilisateur est supprimé, ses certifications sont supprimées automatiquement
    private ?User $user = null;

    #[ORM\\ManyToOne(inversedBy: 'certifications')]
    #[ORM\\JoinColumn(nullable: false)]
    private ?Course $course = null;

    #[ORM\\Column]
    private ?\\DateTimeImmutable $obtainedAt = null;
    // DateTimeImmutable = une date qui ne peut pas être modifiée après sa création (plus sûr que DateTime)

    // -----------------------------
    // Champs d'audit (traçabilité)
    // -----------------------------
    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    private ?User $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?User $updatedBy = null;

    // -----------------------------
    // Getters / Setters
    // -----------------------------
    public function getId(): ?int { return $this->id; }
    public function getUser(): ?User { return $this->user; }
    public function setUser(?User $user): static { $this->user = $user; return $this; }
    public function getCourse(): ?Course { return $this->course; }
    public function setCourse(?Course $course): static { $this->course = $course; return $this; }
    public function getObtainedAt(): ?\\DateTimeImmutable { return $this->obtainedAt; }
    public function setObtainedAt(\\DateTimeImmutable $obtainedAt): static { $this->obtainedAt = $obtainedAt; return $this; }

    // -----------------------------
    // Audit Getters / Setters
    // -----------------------------
    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?User { return $this->createdBy; }
    public function setCreatedBy(?User $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?User { return $this->updatedBy; }
    public function setUpdatedBy(?User $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }
}` },
        { type: "note", variant: "info", text: "static permet de chaîner les méthodes (ex : $cert->setUser($u)->setCourse($c)). Même logique appliquée pour toutes les autres propriétés des entités qui suivent (course, obtainedAt, createdAt, updatedAt, createdBy, updatedBy)." },
        { type: "h", text: "Course" },
        { type: "p", text: "L'entité Course représente un cours dans la plateforme. Chaque cours a un titre, un prix, une description, et appartient à un thème. Il contient plusieurs leçons, peut être acheté plusieurs fois par différents utilisateurs, et peut générer des certifications. Les champs d'audit permettent de suivre la création et la modification des cours." },
        {
          type: "diagram",
          content: `┌────────┐
│ Theme  │
└────────┘
    │ ManyToOne (nullable: false)
    ▼
┌──────────────────────────────────────────────────────┐
│                       Course                         │
│  id | title | price | description                   │
│  theme_id | created_at | updated_at                  │
│  created_by | updated_by                             │
└──────────────────────────────────────────────────────┘
    │               │                   │
  1:N             1:N                 1:N
    ▼               ▼                   ▼
┌────────┐   ┌──────────┐   ┌───────────────┐
│ Lesson │   │ Purchase │   │ Certification │
└────────┘   └──────────┘   └───────────────┘`,
        },
        { type: "code", filename: "Course.php", language: "php", code: `#[ORM\\Entity(repositoryClass: CourseRepository::class)]
class Course
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private ?string $title = null;

    #[ORM\\Column]
    private ?float $price = null;

    #[ORM\\Column(type: "text", nullable: true)]
    private ?string $description = null;

    #[ORM\\ManyToOne(inversedBy: 'courses')]
    // plusieurs cours peuvent appartenir à un seul thème
    #[ORM\\JoinColumn(nullable: false)]
    private ?Theme $theme = null;

    #[ORM\\OneToMany(targetEntity: Lesson::class, mappedBy: 'course')]
    private Collection $lessons;

    #[ORM\\OneToMany(targetEntity: Purchase::class, mappedBy: 'course')]
    private Collection $purchases;

    #[ORM\\OneToMany(targetEntity: Certification::class, mappedBy: 'course')]
    private Collection $certifications;

    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    private ?User $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?User $updatedBy = null;

    public function __construct()
    // obligatoire pour initialiser les Collections (sinon PHP planterait en essayant d'y ajouter des éléments)
    {
        $this->lessons = new ArrayCollection();
        $this->purchases = new ArrayCollection();
        $this->certifications = new ArrayCollection();
    }

    public function getId(): ?int { return $this->id; }
    public function getTitle(): ?string { return $this->title; }
    public function setTitle(string $title): static { $this->title = $title; return $this; }
    public function getPrice(): ?float { return $this->price; }
    public function setPrice(float $price): static { $this->price = $price; return $this; }
    public function getDescription(): ?string { return $this->description; }
    public function setDescription(?string $description): static { $this->description = $description; return $this; }
    public function getTheme(): ?Theme { return $this->theme; }
    public function setTheme(?Theme $theme): static { $this->theme = $theme; return $this; }

    public function getLessons(): Collection { return $this->lessons; }
    public function addLesson(Lesson $lesson): static
    {
        if (!$this->lessons->contains($lesson)) {
            $this->lessons->add($lesson);
            $lesson->setCourse($this); // synchronise les deux côtés de la relation
        }
        return $this;
    }
    public function removeLesson(Lesson $lesson): static
    {
        if ($this->lessons->removeElement($lesson)) {
            if ($lesson->getCourse() === $this) $lesson->setCourse(null);
        }
        return $this;
    }

    public function getPurchases(): Collection { return $this->purchases; }
    public function addPurchase(Purchase $purchase): static
    {
        if (!$this->purchases->contains($purchase)) {
            $this->purchases->add($purchase);
            $purchase->setCourse($this);
        }
        return $this;
    }
    public function removePurchase(Purchase $purchase): static
    {
        if ($this->purchases->removeElement($purchase)) {
            if ($purchase->getCourse() === $this) $purchase->setCourse(null);
        }
        return $this;
    }

    public function getCertifications(): Collection { return $this->certifications; }
    public function addCertification(Certification $certification): static
    {
        if (!$this->certifications->contains($certification)) {
            $this->certifications->add($certification);
            $certification->setCourse($this);
        }
        return $this;
    }
    public function removeCertification(Certification $certification): static
    {
        if ($this->certifications->removeElement($certification)) {
            if ($certification->getCourse() === $this) $certification->setCourse(null);
        }
        return $this;
    }

    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?User { return $this->createdBy; }
    public function setCreatedBy(?User $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?User { return $this->updatedBy; }
    public function setUpdatedBy(?User $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }
}` },
        { type: "table", headers: ["Propriété", "Type", "Description"], rows: [
          ["$id", "?int", "Identifiant unique auto-incrémenté"],
          ["$title", "?string", "Titre du cours (max 255 car.)"],
          ["$price", "?float", "Prix du cours"],
          ["$description", "?string", "Texte descriptif (optionnel)"],
        ]},
        { type: "p", text: "$theme : chaque cours appartient à un thème, nullable: false → obligatoire, inversedBy: 'courses' → la propriété courses dans Theme référence tous les cours associés." },
        { type: "list", items: [
          "$lessons → un cours contient plusieurs leçons (mappedBy: 'course')",
          "$purchases → stocke tous les achats réalisés pour ce cours",
          "$certifications → stocke toutes les certifications obtenues pour ce cours",
        ]},
        { type: "code", filename: "chaining-exemple.php", language: "php", code: `$course->setTitle('Guitare')->setPrice(50);` },
        { type: "h", text: "Lesson" },
        { type: "p", text: "L'entité Lesson représente une leçon dans un cours de formation. Elle contient les informations principales comme le titre, le prix, le contenu et la vidéo associée. Chaque leçon est liée à un cours (Course) et à un thème (Theme), et peut aussi être associée à des achats (Purchase) ou au suivi d'un utilisateur (UserLesson). Elle possède également des champs d'audit pour savoir qui a créé ou modifié la leçon et quand." },
        {
          type: "diagram",
          content: `┌────────┐    ┌────────┐
│ Course │    │ Theme  │
└────────┘    └────────┘
    │ ManyToOne    │ ManyToOne
    └──────┬───────┘
           ▼
┌──────────────────────────────────────────────────────────┐
│                         Lesson                           │
│  id | title | price | content | videoUrl                │
│  course_id | theme_id                                    │
│  created_at | updated_at | created_by | updated_by       │
└──────────────────────────────────────────────────────────┘
        │                        │
      1:N                      1:N (orphanRemoval)
        ▼                        ▼
  ┌──────────┐           ┌─────────────┐
  │ Purchase │           │ UserLesson  │
  └──────────┘           └─────────────┘`,
        },
        { type: "code", filename: "Lesson.php", language: "php", code: `#[ORM\\Entity(repositoryClass: LessonRepository::class)]
class Lesson
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private ?string $title = null;

    #[ORM\\Column]
    private ?float $price = null;

    #[ORM\\Column(type: "text", nullable: true)]
    private ?string $content = null;

    #[ORM\\Column(length: 255, nullable: true)]
    private ?string $videoUrl = null;

    #[ORM\\ManyToOne(inversedBy: 'lessons')]
    #[ORM\\JoinColumn(nullable: false)]
    private ?Course $course = null;

    #[ORM\\ManyToOne]
    #[ORM\\JoinColumn(nullable: false)]
    private ?Theme $theme = null;

    #[ORM\\OneToMany(targetEntity: Purchase::class, mappedBy: 'lesson')]
    private Collection $purchases;

    #[ORM\\OneToMany(targetEntity: UserLesson::class, mappedBy: 'lesson', orphanRemoval: true)]
    private Collection $userLessons;

    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    private ?User $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?User $updatedBy = null;

    public function __construct()
    {
        $this->purchases = new ArrayCollection();
        $this->userLessons = new ArrayCollection();
    }

    public function getId(): ?int { return $this->id; }
    public function getTitle(): ?string { return $this->title; }
    public function setTitle(string $title): static { $this->title = $title; return $this; }
    public function getPrice(): ?float { return $this->price; }
    public function setPrice(float $price): static { $this->price = $price; return $this; }
    public function getContent(): ?string { return $this->content; }
    public function setContent(?string $content): static { $this->content = $content; return $this; }
    public function getVideoUrl(): ?string { return $this->videoUrl; }
    public function setVideoUrl(?string $videoUrl): static { $this->videoUrl = $videoUrl; return $this; }
    public function getCourse(): ?Course { return $this->course; }
    public function setCourse(?Course $course): static { $this->course = $course; return $this; }
    public function getTheme(): ?Theme { return $this->theme; }
    public function setTheme(?Theme $theme): static { $this->theme = $theme; return $this; }

    public function getPurchases(): Collection { return $this->purchases; }
    public function getUserLessons(): Collection { return $this->userLessons; }

    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?User { return $this->createdBy; }
    public function setCreatedBy(?User $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?User { return $this->updatedBy; }
    public function setUpdatedBy(?User $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }
}` },
        { type: "table", headers: ["Propriété", "Type", "Nullable", "Description"], rows: [
          ["$id", "?int", "non", "Identifiant unique auto-incrémenté"],
          ["$title", "?string", "non", "Titre de la leçon (max 255 car.)"],
          ["$price", "?float", "non", "Prix de la leçon"],
          ["$content", "?string", "oui", "Contenu / description de la leçon"],
          ["$videoUrl", "?string", "oui", "URL de la vidéo associée"],
        ]},
        { type: "list", items: [
          "$course → chaque leçon appartient à un cours, nullable: false, inversedBy: 'lessons'",
          "$theme → chaque leçon appartient à un thème, nullable: false",
          "$purchases → une leçon peut avoir plusieurs achats",
          "$userLessons → une leçon peut avoir plusieurs relations utilisateur (suivi), orphanRemoval: true supprime automatiquement les orphelins",
        ]},
        { type: "h", text: "Purchase" },
        { type: "p", text: "L'entité Purchase permet de lier un utilisateur à un cours ou une leçon qu'il a acheté. Elle stocke le montant de l'achat, ainsi que des informations d'audit pour savoir qui a créé ou modifié l'achat et quand. C'est une entité clé pour gérer la facturation et le suivi des transactions sur la plateforme." },
        {
          type: "diagram",
          content: `┌────────┐
│  User  │ ──── (nullable: false, obligatoire)
└────────┘
    │ ManyToOne
    ▼
┌──────────────────────────────────────────────┐
│                   Purchase                   │
│  id | amount                                 │
│  user_id | course_id | lesson_id             │
│  created_at | updated_at                     │
│  created_by | updated_by                     │
└──────────────────────────────────────────────┘
    │ ManyToOne           │ ManyToOne
    ▼                     ▼
┌────────┐           ┌────────┐
│ Course │           │ Lesson │
└────────┘           └────────┘

Règle : course OU lesson (pas les deux à la fois)`,
        },
        { type: "code", filename: "Purchase.php", language: "php", code: `#[ORM\\Entity(repositoryClass: PurchaseRepository::class)]
class Purchase
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\ManyToOne(inversedBy: 'purchases')]
    #[ORM\\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\\ManyToOne(inversedBy: 'purchases')]
    // pas de JoinColumn ici = nullable: true par défaut (un achat peut ne pas concerner un cours)
    private ?Course $course = null;

    #[ORM\\ManyToOne(inversedBy: 'purchases')]
    private ?Lesson $lesson = null;

    #[ORM\\Column]
    private ?float $amount = null;

    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    private ?User $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?User $updatedBy = null;

    public function getId(): ?int { return $this->id; }
    public function getUser(): ?User { return $this->user; }
    public function setUser(?User $user): static { $this->user = $user; return $this; }
    public function getCourse(): ?Course { return $this->course; }
    public function setCourse(?Course $course): static { $this->course = $course; return $this; }
    public function getLesson(): ?Lesson { return $this->lesson; }
    public function setLesson(?Lesson $lesson): static { $this->lesson = $lesson; return $this; }
    public function getAmount(): ?float { return $this->amount; }
    public function setAmount(float $amount): static { $this->amount = $amount; return $this; }

    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?User { return $this->createdBy; }
    public function setCreatedBy(?User $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?User { return $this->updatedBy; }
    public function setUpdatedBy(?User $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }

    // -----------------------------
    // Méthodes spécifiques
    // -----------------------------
    /**
     * Simule un achat pour les tests (pas de vrai paiement)
     */
    public function sandboxPurchase(User $user, $courseOrLesson, ?float $amount = null): void
    {
        $this->user = $user;

        if ($courseOrLesson instanceof Course) {
            $this->course = $courseOrLesson;
            $this->lesson = null;
            $this->amount = $amount ?? $courseOrLesson->getPrice();
            // "??" = opérateur "null coalescing" : utilise $amount s'il est fourni, sinon prend le prix du cours
        } elseif ($courseOrLesson instanceof Lesson) {
            $this->lesson = $courseOrLesson;
            $this->course = null;
            $this->amount = $amount ?? $courseOrLesson->getPrice();
        } else {
            throw new \\InvalidArgumentException('Item must be Course or Lesson.');
        }

        $this->createdAt = new \\DateTimeImmutable();
    }
}` },
        {
          type: "diagram",
          content: `Flux de la méthode sandboxPurchase :

sandboxPurchase($user, $courseOrLesson, $amount)
        │
        ├─ Assigne $user
        │
        ├─ instanceof Course ?
        │       ├── OUI → course = $courseOrLesson, lesson = null
        │       │         amount = $amount ?? course->getPrice()
        │       └── NON ──▶
        │
        ├─ instanceof Lesson ?
        │       ├── OUI → lesson = $courseOrLesson, course = null
        │       │         amount = $amount ?? lesson->getPrice()
        │       └── NON → throw InvalidArgumentException
        │
        └─ createdAt = new DateTimeImmutable()`,
        },
        { type: "h", text: "Theme" },
        { type: "p", text: "L'entité Theme représente un thème ou une catégorie de cours sur la plateforme. Elle contient le nom du thème et référence tous les cours associés (Course). Elle possède également des champs d'audit, et une propriété runtime pour gérer les cours accessibles dynamiquement. C'est une entité clé pour organiser les cours par thématique et structurer la navigation pédagogique." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────┐
│                 Theme                  │
│  id | name                             │
│  created_at | updated_at               │
│  created_by | updated_by               │
│  [accessibleCourses] ← runtime only    │
└────────────────────────────────────────┘
    │ OneToMany (mappedBy: 'theme')
    ▼
┌────────┐
│ Course │ (N cours pour 1 thème)
└────────┘`,
        },
        { type: "code", filename: "Theme.php", language: "php", code: `#[ORM\\Entity(repositoryClass: ThemeRepository::class)]
class Theme
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private ?string $name = null;

    #[ORM\\OneToMany(targetEntity: Course::class, mappedBy: 'theme')]
    private Collection $courses;

    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    private ?User $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?User $updatedBy = null;

    // -----------------------------
    // Propriété temporaire (non sauvegardée en BDD)
    // -----------------------------
    private array $accessibleCourses = [];
    // tableau PHP classique (pas de #[ORM\\Column] = jamais enregistré en BDD !)
    // sert uniquement à stocker temporairement les cours accessibles pour un utilisateur donné

    public function __construct()
    {
        $this->courses = new ArrayCollection();
    }

    public function getId(): ?int { return $this->id; }
    public function getName(): ?string { return $this->name; }
    public function setName(string $name): static { $this->name = $name; return $this; }

    public function getCourses(): Collection { return $this->courses; }
    public function addCourse(Course $course): static
    {
        if (!$this->courses->contains($course)) {
            $this->courses->add($course);
            $course->setTheme($this);
        }
        return $this;
    }
    public function removeCourse(Course $course): static
    {
        if ($this->courses->removeElement($course)) {
            if ($course->getTheme() === $this) {
                $course->setTheme(null);
            }
        }
        return $this;
    }

    // -----------------------------
    // Cours accessibles (temporaire, jamais en BDD)
    // -----------------------------
    public function getAccessibleCourses(): array { return $this->accessibleCourses; }
    public function setAccessibleCourses(array $courses): static { $this->accessibleCourses = $courses; return $this; }

    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?User { return $this->createdBy; }
    public function setCreatedBy(?User $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?User { return $this->updatedBy; }
    public function setUpdatedBy(?User $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }
}` },
        { type: "note", variant: "warning", title: "$accessibleCourses (runtime only)", text: "PAS stocké en base de données. Utilisé uniquement en runtime (mémoire). Permet de gérer les cours accessibles dynamiquement pour un thème." },
        { type: "h", text: "User" },
        { type: "p", text: "L'entité User représente un utilisateur de la plateforme. Elle contient les informations principales comme email, mot de passe, rôles et vérification de compte, et référence toutes ses achats, certifications, leçons suivies et cours achetés. Elle possède aussi des champs d'audit. C'est une entité centrale pour la gestion des utilisateurs, des achats et du suivi pédagogique." },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────────┐
│                           User                             │
│  id | email | password | roles | isVerified                │
│  created_at | updated_at | created_by | updated_by         │
└────────────────────────────────────────────────────────────┘
    │           │               │               │
  1:N         1:N             1:N           ManyToMany
    ▼           ▼               ▼               ▼
┌────────┐ ┌───────┐ ┌────────────┐ ┌─────────────────┐
│Purchase│ │Certif.│ │UserLesson  │ │ purchasedCourses │
└────────┘ └───────┘ └────────────┘ │  (user_courses)  │
                                    └─────────────────┘

Interfaces implémentées :
User ─── implements ──▶ UserInterface
     ─── implements ──▶ PasswordAuthenticatedUserInterface`,
        },
        { type: "code", filename: "User.php", language: "php", code: `#[ORM\\Entity(repositoryClass: UserRepository::class)]
#[ORM\\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
// crée une contrainte d'unicité en BDD : deux utilisateurs ne peuvent pas avoir le même email
#[UniqueEntity(fields: ['email'], message: 'An account with this email already exists')]
// même vérification mais au niveau du formulaire Symfony
class User implements UserInterface, PasswordAuthenticatedUserInterface
// UserInterface = oblige à avoir getUserIdentifier(), getRoles(), eraseCredentials()
// PasswordAuthenticatedUserInterface = oblige à avoir getPassword()
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 180)]
    private ?string $email = null;

    #[ORM\\Column]
    private array $roles = ['ROLE_CLIENT'];
    // ROLE_CLIENT est le rôle par défaut attribué à tout nouvel utilisateur

    #[ORM\\Column]
    private ?string $password = null; // mot de passe hashé (jamais en clair en BDD !)

    #[ORM\\Column]
    private ?bool $isVerified = false;

    /** @var Collection<int, Purchase> Purchases of the user */
    #[ORM\\OneToMany(targetEntity: Purchase::class, mappedBy: 'user')]
    private Collection $purchases;

    /** @var Collection<int, Certification> Certifications obtained by the user */
    #[ORM\\OneToMany(targetEntity: Certification::class, mappedBy: 'user', cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $certifications;

    /** @var Collection<int, UserLesson> Lessons linked to the user */
    #[ORM\\OneToMany(targetEntity: UserLesson::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $userLessons;

    /** @var Collection<int, Course> Courses purchased by the user */
    #[ORM\\ManyToMany(targetEntity: Course::class)]
    #[ORM\\JoinTable(name: "user_courses")]
    // crée une table intermédiaire "user_courses" en BDD pour gérer cette relation many-to-many
    private Collection $purchasedCourses;

    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: self::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    // "self::class" = fait référence à la classe User elle-même (un User créé par un autre User)
    private ?self $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: self::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?self $updatedBy = null;

    public function __construct()
    {
        $this->purchases = new ArrayCollection();
        $this->certifications = new ArrayCollection();
        $this->userLessons = new ArrayCollection();
        $this->purchasedCourses = new ArrayCollection();
    }

    // -------------------------
    // CHAMPS DE BASE
    // -------------------------
    public function getId(): ?int { return $this->id; }
    public function getEmail(): ?string { return $this->email; }
    public function setEmail(string $email): static { $this->email = $email; return $this; }

    public function getUserIdentifier(): string { return (string) $this->email; }
    // méthode imposée par UserInterface : renvoie l'identifiant unique de connexion (ici l'email)

    public function getRoles(): array
    { return array_unique(array_merge($this->roles, ['ROLE_CLIENT'])); }
    // garantit que tout utilisateur a au moins ROLE_CLIENT, sans doublons

    public function setRoles(array $roles): static { $this->roles = $roles; return $this; }
    public function getPassword(): ?string { return $this->password; }
    public function setPassword(string $password): static { $this->password = $password; return $this; }

    #[\\Deprecated] public function eraseCredentials(): void {}
    // méthode imposée par UserInterface, corps vide : rien de sensible à effacer ici

    public function isVerified(): ?bool { return $this->isVerified; }
    public function setIsVerified(bool $isVerified): static { $this->isVerified = $isVerified; return $this; }

    // -------------------------
    // ACHATS
    // -------------------------
    public function getPurchases(): Collection { return $this->purchases; }
    public function addPurchase(Purchase $purchase): static
    {
        if (!$this->purchases->contains($purchase)) {
            $this->purchases->add($purchase);
            $purchase->setUser($this);
        }
        return $this;
    }
    public function removePurchase(Purchase $purchase): static
    {
        if ($this->purchases->removeElement($purchase) && $purchase->getUser() === $this) {
            $purchase->setUser(null);
        }
        return $this;
    }

    // -------------------------
    // CERTIFICATIONS
    // -------------------------
    public function getCertifications(): Collection { return $this->certifications; }
    public function addCertification(Certification $certification): static
    {
        if (!$this->certifications->contains($certification)) {
            $this->certifications->add($certification);
            $certification->setUser($this);
        }
        return $this;
    }
    public function removeCertification(Certification $certification): static
    {
        if ($this->certifications->removeElement($certification) && $certification->getUser() === $this) {
            $certification->setUser(null);
        }
        return $this;
    }

    public function getFrontCertifications(): Collection { return $this->getCertifications(); }
    // raccourci utilisé côté frontend — pourrait servir à filtrer les certifications à l'avenir

    // -------------------------
    // PROGRESSIONS SUR LES LEÇONS
    // -------------------------
    public function getUserLessons(): Collection { return $this->userLessons; }
    public function addUserLesson(UserLesson $lesson): static
    {
        if (!$this->userLessons->contains($lesson)) {
            $this->userLessons->add($lesson);
            $lesson->setUser($this);
        }
        return $this;
    }
    public function removeUserLesson(UserLesson $lesson): static
    {
        if ($this->userLessons->removeElement($lesson) && $lesson->getUser() === $this) {
            $lesson->setUser(null);
        }
        return $this;
    }

    // -------------------------
    // COURS ACHETÉS
    // -------------------------
    public function getPurchasedCourses(): Collection { return $this->purchasedCourses; }
    public function addPurchasedCourse(Course $course): self
    {
        if (!$this->purchasedCourses->contains($course)) {
            $this->purchasedCourses->add($course);
            // pas de setCourse() ici car c'est une relation ManyToMany sans propriétaire côté Course
        }
        return $this;
    }
    public function removePurchasedCourse(Course $course): self
    {
        $this->purchasedCourses->removeElement($course);
        return $this;
    }

    // -------------------------
    // MÉTHODES UTILITAIRES
    // -------------------------
    /**
     * Vérifie si l'utilisateur a validé une leçon.
     */
    public function hasValidatedLesson(Lesson $lesson): bool
    {
        foreach ($this->userLessons as $userLesson) {
            if ($userLesson->getLesson() === $lesson && $userLesson->isValidated()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Ajoute une certification pour un cours si elle n'existe pas déjà.
     */
    public function addCertificationFromCourse(Course $course): static
    {
        foreach ($this->certifications as $cert) {
            if ($cert->getCourse() === $course) return $this; // pas de doublon
        }
        $certification = new Certification();
        $certification->setUser($this)
                      ->setCourse($course)
                      ->setObtainedAt(new \\DateTimeImmutable());
        $this->certifications->add($certification);
        return $this;
    }

    // -------------------------
    // AUDIT GETTERS / SETTERS
    // -------------------------
    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?self { return $this->createdBy; }
    public function setCreatedBy(?self $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?self { return $this->updatedBy; }
    public function setUpdatedBy(?self $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }
}` },
        { type: "table", headers: ["Collection", "Type relation", "Description"], rows: [
          ["$purchases", "OneToMany", "Plusieurs achats pour un utilisateur"],
          ["$certifications", "OneToMany + cascade + orphanRemoval", "Plusieurs certifications"],
          ["$userLessons", "OneToMany + orphanRemoval", "Suivi des leçons"],
          ["$purchasedCourses", "ManyToMany (table : user_courses)", "Cours achetés"],
        ]},
        { type: "note", variant: "info", title: "Particularité User", text: "createdBy / updatedBy sont de type ?self (référence vers un autre User), pas vers User::class externe comme pour les autres entités." },
        {
          type: "diagram",
          content: `hasValidatedLesson(Lesson $lesson): bool

Parcourt $this->userLessons
    └─ Pour chaque UserLesson :
        ├─ lesson === $lesson ET isValidated() === true ?
        │       └─ OUI → return true
        └─ NON → continuer
return false`,
        },
        {
          type: "diagram",
          content: `addCertificationFromCourse(Course $course): static

1. Parcourt $this->certifications
   └─ Certification pour ce cours existe déjà ?
         └─ OUI → return $this (pas de doublon)

2. Crée une nouvelle Certification :
   ├─ setUser($this)
   ├─ setCourse($course)
   └─ setObtainedAt(new DateTimeImmutable())

3. Ajoute à $this->certifications
4. return $this`,
        },
        { type: "h", text: "UserLesson" },
        { type: "p", text: "L'entité UserLesson permet de suivre l'avancement d'un utilisateur sur une leçon. Elle stocke si la leçon est validée (validated), la date de validation (validatedAt) et les informations d'audit sur la création et la modification du suivi. C'est une entité essentielle pour gérer le suivi pédagogique et vérifier la progression des utilisateurs sur la plateforme." },
        {
          type: "diagram",
          content: `┌────────┐         ┌───────────────────────────────────────┐         ┌────────┐
│  User  │──M:1────│              UserLesson               │────M:1──│ Lesson │
└────────┘         │  id                                   │         └────────┘
                   │  user_id (nullable: false)            │
                   │  lesson_id (nullable: false)          │
                   │  validated: bool (default: false)     │
                   │  validatedAt: ?DateTimeImmutable       │
                   │  created_at | updated_at              │
                   │  created_by | updated_by              │
                   └───────────────────────────────────────┘`,
        },
        { type: "code", filename: "UserLesson.php", language: "php", code: `#[ORM\\Entity(repositoryClass: UserLessonRepository::class)]
// cette classe représente le lien entre un utilisateur et une leçon
class UserLesson
{
    /** @var int|null Primary key of the UserLesson */
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    /** @var User|null Associated user */
    #[ORM\\ManyToOne(inversedBy: 'userLessons')]
    #[ORM\\JoinColumn(nullable: false)]
    private ?User $user = null;

    /** @var Lesson|null Associated lesson */
    #[ORM\\ManyToOne(inversedBy: 'userLessons')]
    #[ORM\\JoinColumn(nullable: false)]
    private ?Lesson $lesson = null;

    /** @var bool|null Whether the lesson has been validated */
    #[ORM\\Column]
    private ?bool $validated = false;

    /** @var \\DateTimeImmutable|null Date of validation */
    #[ORM\\Column(nullable: true)]
    private ?\\DateTimeImmutable $validatedAt = null;

    #[ORM\\Column(name: "created_at", nullable: true)]
    private ?\\DateTimeImmutable $createdAt = null;

    #[ORM\\Column(name: "updated_at", nullable: true)]
    private ?\\DateTimeImmutable $updatedAt = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "created_by", referencedColumnName: "id", nullable: true)]
    private ?User $createdBy = null;

    #[ORM\\ManyToOne(targetEntity: User::class)]
    #[ORM\\JoinColumn(name: "updated_by", referencedColumnName: "id", nullable: true)]
    private ?User $updatedBy = null;

    public function getId(): ?int { return $this->id; }
    public function getUser(): ?User { return $this->user; }
    public function setUser(?User $user): static { $this->user = $user; return $this; }
    public function getLesson(): ?Lesson { return $this->lesson; }
    public function setLesson(?Lesson $lesson): static { $this->lesson = $lesson; return $this; }

    public function isValidated(): ?bool { return $this->validated; }
    // "is" au lieu de "get" = convention PHP pour les booléens (vrai/faux)
    public function setValidated(bool $validated): static { $this->validated = $validated; return $this; }
    // "bool" (sans ?) = obligatoirement true ou false, jamais null

    public function getValidatedAt(): ?\\DateTimeImmutable { return $this->validatedAt; }
    public function setValidatedAt(?\\DateTimeImmutable $validatedAt): static { $this->validatedAt = $validatedAt; return $this; }

    public function getCreatedAt(): ?\\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): ?\\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }
    public function getCreatedBy(): ?User { return $this->createdBy; }
    public function setCreatedBy(?User $createdBy): static { $this->createdBy = $createdBy; return $this; }
    public function getUpdatedBy(): ?User { return $this->updatedBy; }
    public function setUpdatedBy(?User $updatedBy): static { $this->updatedBy = $updatedBy; return $this; }
}` },
        { type: "table", headers: ["Propriété", "Type", "Description"], rows: [
          ["$validated", "?bool", "Indique si l'utilisateur a validé la leçon (true/false), défaut : false"],
          ["$validatedAt", "?DateTimeImmutable", "Date à laquelle la leçon a été validée"],
        ]},
        { type: "code", filename: "chaining-userlesson.php", language: "php", code: `$userLesson->setValidated(true)->setValidatedAt(new \\DateTimeImmutable());` },
      ],
    },
  {
      id: "dp-controllers-intro",
      title: "Contrôleurs — Architecture MVC générale",
      blocks: [
        { type: "p", text: "Tout le contrôleur est basé sur des contrôles et des appels éventuels aux entités et du retour de rendu à l'utilisateur. Ce qu'on appelle donc une architecture MVC. On part d'une requête puis on va chercher le contrôleur correspondant, puis il fait ses traitements, les modèles vont répondre aux contrôleurs s'il y'en a, et ensuite le contrôleur rend la vue correspondante." },
        { type: "note", variant: "info", text: "$this = une variable. getAllThemes() = une méthode." },
        { type: "h", text: "Logique de lecture" },
        {
          type: "diagram",
          content: `Contrôleur                    ThemeService.php
----------                    ----------------
$this->themeService     = →     class ThemeService
->getAllThemes()        = →     public function getAllThemes()`,
        },
        { type: "h", text: "Schéma — Architecture MVC" },
        {
          type: "diagram",
          content: `Utilisateur
    |
    v
[Requête HTTP]
    |
    v
[Contrôleur] <----> [Modèle / Entité]
    |
    v
[Vue Twig]
    |
    v
Utilisateur (réponse HTML)`,
        },
      ],
    },
    {
      id: "dp-controller-security",
      title: "SecurityController — Connexion & déconnexion",
      blocks: [
        { type: "p", text: "Affiche la page de connexion de l'application. Il récupère la dernière erreur d'authentification et le dernier identifiant saisi, puis Twig l'affiche dans le formulaire de connexion. La vérification du mot de passe et l'authentification se fait avec le système de sécurité de Symfony configuré dans security.yaml et par l'Authenticator." },
        { type: "h", text: "Méthode login" },
        { type: "code", filename: "SecurityController.php", language: "php", code: `#[Route(path: '/login', name: 'app_login')]
public function login(AuthenticationUtils $authenticationUtils): Response
// AuthenticationUtils = outil Symfony qui gère les erreurs de connexion
{
    // Retrieve any login error if exists
    $error = $authenticationUtils->getLastAuthenticationError();
    // récupère la dernière erreur (mauvais mot de passe, compte inconnu…)

    // Retrieve the last entered username
    $lastUsername = $authenticationUtils->getLastUsername();
    // récupère ce que l'utilisateur a écrit dans le champ "email/pseudo"

    return $this->render('security/login.html.twig', [
        'last_username' => $lastUsername, // ré-affiche l'identifiant déjà tapé
        'error' => $error                 // affiche le message d'erreur si la connexion a raté
    ]);
}` },
        { type: "h", text: "Méthode logout" },
        { type: "p", text: "Point d'entrée pour la déconnexion. La logique de déconnexion est entièrement gérée par le système de sécurité de Symfony, c'est pourquoi la méthode est vide. La redirection après la déconnexion est généralement configurée dans le fichier security.yaml avec l'option logout." },
        { type: "code", filename: "SecurityController.php", language: "php", code: `#[Route(path: '/logout', name: 'app_logout')]
public function logout(): void
{
    // ... fonction volontairement vide !
}` },
        { type: "list", items: [
          "Comportement lors de l'appel à /logout, Symfony va :",
          "1. Détruire la session de l'utilisateur",
          "2. Supprimer son authentification",
          "3. Le rediriger vers la page définie dans la configuration de sécurité",
        ]},
      ],
    },
    {
      id: "dp-controller-stripe",
      title: "StripeController — Paiements",
      blocks: [
        { type: "h", text: "checkoutCourse — Paiement d'un cours" },
        { type: "p", text: "Créer une session de paiement Stripe pour acheter un cours. Il vérifie que l'utilisateur est connecté et que le cours possède un prix valide, puis il crée une session Stripe et renvoie l'identifiant de cette session afin de rediriger l'utilisateur vers la page de paiement sécurisée." },
        { type: "code", filename: "StripeController.php", language: "php", code: `#[Route('/stripe/checkout/course/{id}', name: 'stripe_checkout_course', methods: ['POST'])]
// methods: ['POST'] = uniquement via un envoi de formulaire/bouton
public function checkoutCourse(Course $course): JsonResponse
// Symfony récupère automatiquement le cours en BDD grâce à l'{id} dans l'URL
{
    $user = $this->getUser();
    if (!$user instanceof User) {
        return $this->json(['error' => 'Utilisateur non connecté'], 403);
    }

    if (!$course->getPrice() || $course->getPrice() <= 0) {
        return $this->json(['error' => "Ce cours n'a pas de prix défini.."], 400);
    }

    try {
        Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']);
        // connecte l'app à Stripe avec la clé secrète (stockée dans .env, jamais dans le code !)

        $amount = (int) round($course->getPrice() * 100);
        // Stripe travaille en centimes : 19.99€ devient 1999

        $session = Session::create([
            'payment_method_types' => ['card'],
            'mode' => 'payment',
            'customer_email' => $user->getEmail(),

            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'unit_amount' => $amount,
                    'product_data' => ['name' => $course->getTitle()],
                ],
                'quantity' => 1,
            ]],

            'success_url' => $this->generateUrl(
                'stripe_success_course',
                ['id' => $course->getId()],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
            'cancel_url' => $this->generateUrl(
                'front_course_show',
                ['id' => $course->getId()],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
        ]);

        return $this->json(['id' => $session->id]);

    } catch (\\Exception $e) {
        return $this->json(['error' => 'Stripe error: ' . $e->getMessage()], 500);
    }
}` },
        { type: "h", text: "checkoutLesson — Paiement d'une leçon" },
        { type: "p", text: "Créer une session de paiement Stripe pour acheter une leçon. Même logique que checkoutCourse, adaptée à une leçon." },
        { type: "code", filename: "StripeController.php", language: "php", code: `#[Route('/stripe/checkout/lesson/{id}', name: 'stripe_checkout_lesson', methods: ['POST'])]
public function checkoutLesson(Lesson $lesson): JsonResponse
{
    $user = $this->getUser();
    if (!$user instanceof User) {
        return $this->json(['error' => 'Utilisateur non connecté'], 403);
    }

    if (!$lesson->getPrice() || $lesson->getPrice() <= 0) {
        return $this->json(['error' => "Ce cours n'a pas de prix défini."], 400);
    }

    try {
        Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']);

        $amount = (int) round($lesson->getPrice() * 100);

        $session = Session::create([
            'payment_method_types' => ['card'],
            'mode' => 'payment',
            'customer_email' => $user->getEmail(),

            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'unit_amount' => $amount,
                    'product_data' => ['name' => $lesson->getTitle()],
                ],
                'quantity' => 1,
            ]],

            'success_url' => $this->generateUrl(
                'stripe_success_lesson',
                ['id' => $lesson->getId()],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
            'cancel_url' => $this->generateUrl(
                'front_lesson_show',
                ['id' => $lesson->getId()],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
        ]);

        return $this->json(['id' => $session->id]);

    } catch (\\Exception $e) {
        return $this->json(['error' => 'Stripe error: ' . $e->getMessage()], 500);
    }
}` },
        { type: "h", text: "successCourse — Confirmation d'achat d'un cours" },
        { type: "p", text: "Appelé après un paiement réussi sur Stripe. Il vérifie que l'utilisateur est connecté, enregistre l'achat du cours via un service, affiche un message de confirmation, puis redirige l'utilisateur vers la page du cours qu'il vient d'acheter." },
        { type: "code", filename: "StripeController.php", language: "php", code: `#[Route('/stripe/success/course/{id}', name: 'stripe_success_course')]
// pas de methods: ['POST'] ici = accessible aussi bien en GET
public function successCourse(Course $course): Response
{
    $user = $this->getUser();
    if (!$user instanceof User) {
        return $this->redirectToRoute('app_login');
    }

    $this->frontService->simulateSandboxPurchase($user, $course);
    // simule un achat en mode "sandbox" (= environnement de test, pas de vrai argent)

    $this->addFlash('success', "Achat du cours confirmé !");

    return $this->redirectToRoute('front_course_show', ['id' => $course->getId()]);
}` },
        { type: "h", text: "successLesson — Confirmation d'achat d'une leçon" },
        { type: "code", filename: "StripeController.php", language: "php", code: `#[Route('/stripe/success/lesson/{id}', name: 'stripe_success_lesson')]
public function successLesson(Lesson $lesson): Response
{
    $user = $this->getUser();
    if (!$user instanceof User) {
        return $this->redirectToRoute('app_login');
    }

    $this->frontService->simulateSandboxPurchase($user, $lesson);

    $this->addFlash('success', "Achat de la leçon confirmé !");

    return $this->redirectToRoute('front_lesson_show', ['id' => $lesson->getId()]);
}` },
      ],
    },
    {
      id: "dp-controller-registration",
      title: "RegistrationController — Inscription",
      blocks: [
        { type: "p", text: "Gère l'inscription des utilisateurs. Il crée le formulaire, vérifie que les données sont valides, utilise un service pour enregistrer l'utilisateur et hacher son mot de passe, puis envoie un email de confirmation. Enfin, il redirige vers la page de login et affiche des messages d'information pour guider l'utilisateur." },
        { type: "code", filename: "RegistrationController.php", language: "php", code: `public function __construct(private EmailVerifier $emailVerifier) {}
// injecte EmailVerifier : l'outil qui va envoyer les emails de confirmation

#[Route('/register', name: 'app_register')]
public function register(Request $request, UserService $userService): Response
{
    $user = new User();
    $form = $this->createForm(RegistrationFormType::class, $user);

    $form->handleRequest($request);
    // analyse ce que l'utilisateur a envoyé et remplit automatiquement $user

    if ($form->isSubmitted() && $form->isValid()) {

        /** @var string $plainPassword */
        $plainPassword = $form->get('plainPassword')->getData();

        $userService->registerUser($user, $plainPassword);
        // délègue au service : hashage du mot de passe + enregistrement en BDD

        try {
            $this->emailVerifier->sendEmailConfirmation(
                'app_verify_email',
                $user,
                (new TemplatedEmail())
                    ->from(new Address(
                        'bricotteaux@alwaysdata.net',
                        'Knowledge Learning'
                    ))
                    ->to($user->getEmail())
                    ->subject('Merci de confirmer votre adresse e-mail')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );
        } catch (\\Exception $e) {
            dump($e->getMessage()); // outil de debug temporaire, à retirer en production !
            $this->addFlash('error', 'Erreur lors de l\\'envoi de l\\'email : '.$e->getMessage());
        }

        $this->addFlash('success', 'Votre compte a été créé. Veuillez confirmer votre adresse e-mail.');

        return $this->redirectToRoute('app_login');
    }

    return $this->render('registration/register.html.twig', [
        'registrationForm' => $form,
    ]);
}` },
        { type: "h", text: "verifyUserEmail" },
        { type: "p", text: "Gère la vérification des emails. Il récupère l'utilisateur à partir de l'id dans l'URL, vérifie le token envoyé par email via le service EmailVerifier, affiche un message d'erreur si nécessaire, ou un message de succès si la vérification réussit, puis redirige l'utilisateur vers la page de login." },
        { type: "code", filename: "RegistrationController.php", language: "php", code: `#[Route('/verify/email', name: 'app_verify_email')]
public function verifyUserEmail(
    Request $request,
    TranslatorInterface $translator,
    UserRepository $userRepository
): Response {

    $id = $request->query->get('id');
    // récupère le paramètre "id" dans l'URL (ex: /verify/email?id=42)

    if (!$id) {
        return $this->redirectToRoute('app_register');
    }

    $user = $userRepository->find($id);
    if (!$user) {
        return $this->redirectToRoute('app_register');
    }

    try {
        $this->emailVerifier->handleEmailConfirmation($request, $user);

    } catch (VerifyEmailExceptionInterface $exception) {
        $this->addFlash(
            'verify_email_error',
            $translator->trans($exception->getReason(), [], 'VerifyEmailBundle')
        );
        return $this->redirectToRoute('app_register');
    }

    $this->addFlash('success', 'Votre adresse email a bien été vérifiée !');

    return $this->redirectToRoute('app_login');
}` },
        { type: "h", text: "testEmail — Route de test développement" },
        { type: "p", text: "Permet d'envoyer un email de confirmation factice pour tester le template et la configuration du mailer en développement. Il utilise un utilisateur fictif et un lien de confirmation factice, puis envoie l'email via le service Mailer de Symfony." },
        { type: "code", filename: "RegistrationController.php", language: "php", code: `#[Route('/dev/test-confirmation-email', name: 'dev_test_confirmation_email')]
// route uniquement utilisée en développement — à retirer ou protéger avant la mise en production !
public function testEmail(MailerInterface $mailer)
{
    $fakeUser = new class {
        public string $email = 'katiana.bricotteaux@outlook.com';
    };
    // "new class { ... }" = une classe anonyme, créée rapidement juste pour tester

    $email = (new TemplatedEmail())
        ->from(new Address(
            'bricotteaux@alwaysdata.net',
            'Knowledge Learning'
        ))
        ->to($fakeUser->email)
        ->subject('Test email confirmation')
        ->htmlTemplate('registration/confirmation_email.html.twig')

        ->context([
            'user' => $fakeUser,
            'signedUrl' => 'http://localhost:8000/verify/email?id=123&token=fake',
        ]);

    $mailer->send($email);

    return new Response('Email de test envoyé ! Vérifie MailHog.');
    // MailHog = outil de développement qui intercepte les emails sans les envoyer vraiment
}` },
        { type: "note", variant: "warning", text: "Cette route de test n'a pas de type de retour :Response déclaré (oubli du développeur) et devrait être supprimée ou protégée avant la mise en production." },
      ],
    },
    {
      id: "dp-controller-privacy-home",
      title: "PrivacyController & HomeController — Pages statiques",
      blocks: [
        { type: "h", text: "PrivacyController" },
        { type: "p", text: "Affiche la page statique de la politique de confidentialité. C'est une bonne pratique d'avoir des pages statiques via un contrôleur dédié, car cela permet de facilement ajouter des données dynamiques ou un suivi analytique dans le futur." },
        { type: "code", filename: "PrivacyController.php", language: "php", code: `#[Route('/privacy-policy', name: 'privacy_policy')]
public function index(): Response
{
    return $this->render('privacy/index.html.twig');
    // pas de données à récupérer en BDD, pas de formulaire : c'est une page statique
}` },
        { type: "h", text: "HomeController" },
        { type: "p", text: "Affiche la page d'accueil de l'application. Il utilise la méthode render de Symfony pour retourner le template Twig correspondant, et la route racine permet de référencer cette page dans l'application. Même si ce contrôleur est simple, il permet de centraliser la logique de la page d'accueil, et il est facile d'y ajouter des informations dynamiques comme des statistiques, des cours récents ou des messages d'accueil." },
        { type: "code", filename: "HomeController.php", language: "php", code: `#[Route('/', name: 'app_home')]
public function index(): Response
{
    return $this->render('home/index.html.twig');
}` },
      ],
    },
    {
      id: "dp-controller-front-base",
      title: "FrontController — Base et achats sandbox",
      blocks: [
        { type: "p", text: "Initialise les services et repositories nécessaires via l'injection de dépendances, et fournit une méthode privée pour récupérer l'utilisateur connecté. La méthode vérifie que l'utilisateur est bien connecté et empêche l'accès si ce n'est pas le cas, ce qui sécurise le contrôleur." },
        { type: "h", text: "Constructeur et méthode getCurrentUser" },
        { type: "code", filename: "FrontController.php", language: "php", code: `public function __construct(
    private LessonRepository $lessonRepository,
    private CourseRepository $courseRepository,
    private FrontService $frontService,
    private ThemeService $themeService
) {}
// tous ces outils sont injectés automatiquement par Symfony (injection de dépendances)

/**
 * Returns the currently authenticated user
 *
 * @throws \\Symfony\\Component\\Security\\Core\\Exception\\AccessDeniedException if the user is not logged in
 * @return User
 */
private function getCurrentUser(): User
{
    $user = $this->getUser();
    if (!$user instanceof User) {
        throw $this->createAccessDeniedException("L'utilisateur doit être connecté.");
        // AccessDeniedException = erreur spéciale Symfony qui renvoie automatiquement un code 403
    }
    return $user;
}` },
        { type: "h", text: "purchaseLesson — Achat sandbox d'une leçon" },
        { type: "p", text: "Permet à un utilisateur connecté d'acheter une leçon. Il utilise la méthode getCurrentUser() pour sécuriser l'accès, simule l'achat via le service FrontService, affiche un message de confirmation, puis redirige vers la page de la leçon." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/lesson/{id}/purchase', name: 'front_lesson_purchase')]
public function purchaseLesson(Lesson $lesson): Response
{
    $user = $this->getCurrentUser();
    // si non connecté, bloque tout automatiquement avec une erreur 403

    $this->frontService->simulateSandboxPurchase($user, $lesson);

    $this->addFlash('success', "Leçon '{$lesson->getTitle()}' achetée !");

    return $this->redirectToRoute('front_lesson_show', ['id' => $lesson->getId()]);
}` },
        { type: "h", text: "purchaseCourse — Achat sandbox d'un cours" },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/course/{id}/purchase', name: 'front_course_purchase')]
public function purchaseCourse(Course $course): Response
{
    $user = $this->getCurrentUser();

    $this->frontService->simulateSandboxPurchase($user, $course);

    $this->addFlash('success', "Cours '{$course->getTitle()}' acheté !");

    return $this->redirectToRoute('front_course_show', ['id' => $course->getId()]);
}` },
        { type: "h", text: "stripeCheckoutLesson — Session Stripe pour une leçon" },
        { type: "p", text: "Crée une session Stripe pour le paiement d'une leçon. Il configure les détails de la leçon, les URLs de succès et d'annulation, et retourne soit un JSON pour Ajax, soit redirige l'utilisateur vers Stripe pour effectuer le paiement." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/lesson/{id}/checkout', name: 'stripe_checkout_lesson', methods: ['POST'])]
public function stripeCheckoutLesson(Lesson $lesson, Request $request): Response
{
    $stripe = new StripeClient($_ENV['STRIPE_SECRET_KEY']);
    // ici on utilise StripeClient directement, au lieu de Stripe::setApiKey()

    $session = $stripe->checkout->sessions->create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'eur',
                'product_data' => ['name' => $lesson->getTitle()],
                'unit_amount' => $lesson->getPrice() * 100,
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',

        'success_url' => $this->generateUrl(
            'front_lesson_show',
            ['id' => $lesson->getId(), 'paid' => 1],
            true
        ),
        'cancel_url' => $this->generateUrl(
            'front_lesson_show',
            ['id' => $lesson->getId()],
            true
        ),
    ]);

    if ($request->isXmlHttpRequest()) {
        return new JsonResponse(['id' => $session->id]);
    }

    return new RedirectResponse($session->url);
}` },
        { type: "h", text: "stripeCheckoutCourse — Session Stripe pour un cours" },
        { type: "p", text: "Crée une session Stripe pour le paiement d'un cours. Il récupère l'utilisateur connecté, configure les détails du cours, définit les URLs de succès et d'annulation, puis retourne soit un JSON pour Ajax, soit redirige l'utilisateur vers Stripe pour finaliser le paiement." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/course/{id}/checkout', name: 'stripe_checkout_course', methods: ['POST'])]
public function stripeCheckoutCourse(Course $course, Request $request): Response
{
    $stripe = new StripeClient($_ENV['STRIPE_SECRET_KEY']);

    $user = $this->getCurrentUser();
    // ⚠️ $user est récupéré ici mais jamais utilisé ensuite dans la fonction !
    // probablement un oubli du développeur (voulait sûrement passer l'email à Stripe comme dans StripeController)

    $session = $stripe->checkout->sessions->create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'eur',
                'product_data' => ['name' => $course->getTitle()],
                'unit_amount' => $course->getPrice() * 100,
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',

        'success_url' => $this->generateUrl(
            'front_course_show',
            ['id' => $course->getId(), 'paid' => 1],
            true
        ),
        'cancel_url' => $this->generateUrl(
            'front_course_show',
            ['id' => $course->getId()],
            true
        ),
    ]);

    if ($request->isXmlHttpRequest()) {
        return new JsonResponse(['id' => $session->id]);
    }

    return new RedirectResponse($session->url);
}` },
      ],
    },
  {
      id: "dp-controller-front-suite",
      title: "FrontController — Affichage, dashboard et certifications",
      blocks: [
        { type: "h", text: "showLesson — Affichage d'une leçon" },
        { type: "p", text: "Affiche une leçon à un utilisateur connecté. Il vérifie d'abord que l'utilisateur a le droit d'accéder à la leçon, sinon il est redirigé avec un message d'erreur. Si l'accès est autorisé, il retourne le template Twig avec toutes les informations nécessaires pour le front et pour intégrer Stripe si besoin." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/lesson/{id}', name: 'front_lesson_show')]
public function showLesson(
    Lesson $lesson,
    PurchaseRepository $purchaseRepository
    // ⚠️ injecté ici mais jamais utilisé dans la fonction (probablement un oubli)
): Response {

    $user = $this->getCurrentUser();

    $hasAccess = $this->frontService->userHasAccessToLesson($user, $lesson)
                 ||
    $this->frontService->userHasAccessToCourse($user, $lesson->getCourse());
    // "||" = "ou" : il suffit que l'une des deux conditions soit vraie pour avoir accès

    if (!$hasAccess) {
        $this->addFlash('error', 'Accès refusé');
        return $this->redirectToRoute('front_course_show', [
            'id' => $lesson->getCourse()->getId()
        ]);
    }

    return $this->render('front/lessons.html.twig', [
        'lesson' => $lesson,
        'hasAccess' => $hasAccess,
        'hasValidated' => $user->hasValidatedLesson($lesson),
        'stripePublicKey' => $_ENV['STRIPE_PUBLIC_KEY'],
    ]);
}` },
        { type: "h", text: "showCourse — Affichage d'un cours" },
        { type: "p", text: "Affiche un cours et toutes ses leçons pour un utilisateur connecté. Il gère l'accès aux leçons, détermine si le cours ou certaines leçons ont été achetés, et prépare toutes les données pour le front, y compris la clé Stripe pour les paiements. Il redirige aussi automatiquement si le paiement vient d'être effectué." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/course/{id}', name: 'front_course_show')]
public function showCourse(
    Course $course,
    Request $request,
    PurchaseRepository $purchaseRepository
): Response {

    $user = $this->getCurrentUser();

    if ($request->query->get('paid') == 1) {
    // ce paramètre est ajouté par Stripe dans le success_url après un paiement réussi

        $this->frontService->simulateSandboxPurchase($user, $course);

        return $this->redirectToRoute('front_course_show', ['id' => $course->getId()]);
        // redirige vers la même page SANS le ?paid=1 (évite de réenregistrer l'achat si on recharge)
    }

    $isCoursePurchased = $purchaseRepository->findOneBy([
        'user' => $user,
        'course' => $course
    ]) !== null;

    $purchasedLessonIds = [];
    foreach ($course->getLessons() as $lesson) {
        if ($isCoursePurchased
            || $this->frontService->userHasAccessToLesson($user, $lesson)) {
            $purchasedLessonIds[] = $lesson->getId();
        }
    }

    $purchasedLessonIdsByCourse = [$course->getId() => $purchasedLessonIds];

    $purchasedCourses = $isCoursePurchased ? [$course->getId()] : [];
    // "condition ? valeur_si_vrai : valeur_si_faux" = ternaire

    $allLessonsPurchased = count($purchasedLessonIds) === count($course->getLessons());

    $theme = $course->getTheme();

    $lessonsData = [];
    foreach ($course->getLessons() as $lesson) {
        $lessonsData[] = [
            'entity' => $lesson,
            'purchased' => in_array($lesson->getId(), $purchasedLessonIds),
        ];
    }

    return $this->render('front/courses.html.twig', [
        'course' => $course,
        'theme' => $theme,
        'purchasedLessonIdsByCourse' => $purchasedLessonIdsByCourse,
        'purchasedCourses' => $purchasedCourses,
        'isCoursePurchased' => $isCoursePurchased,
        'allLessonsPurchased' => $allLessonsPurchased,
        'lessonsData' => $lessonsData,
        'stripePublicKey' => $_ENV['STRIPE_PUBLIC_KEY'],
    ]);
}` },
        { type: "h", text: "validateLesson — Validation d'une leçon" },
        { type: "p", text: "Permet à un utilisateur connecté de valider une leçon. La logique métier est gérée par le service FrontService, un message de succès est affiché, et l'utilisateur est redirigé vers la leçon pour visualiser la validation." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/validate-lesson/{id}', name: 'front_lesson_validate', methods: ['POST'])]
public function validateLesson(Lesson $lesson): Response
{
    $user = $this->getCurrentUser();

    $this->frontService->validateLesson($user, $lesson);
    // comme cocher une case "vu" sur une plateforme de cours en ligne

    $this->addFlash('success', "Leçon '{$lesson->getTitle()}' validée !");

    return $this->redirectToRoute('front_lesson_show', ['id' => $lesson->getId()]);
}` },
        { type: "h", text: "dashboard — Tableau de bord utilisateur" },
        { type: "p", text: "Génère le tableau de bord utilisateur, organisé par thèmes. Il affiche uniquement les cours et leçons auxquels l'utilisateur a accès, grâce à FrontService et aux achats en base. Les données sont ensuite envoyées au template Twig pour un affichage clair et structuré." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/dashboard', name: 'front_dashboard')]
public function dashboard(PurchaseRepository $purchaseRepository): Response
// ⚠️ injecté ici mais jamais utilisé dans la fonction (probablement un oubli)
{
    $user = $this->getCurrentUser();

    $themes = $this->themeService->getAllThemes();

    $dashboardData = [];

    foreach ($themes as $theme) {
        $themeData = [
            'name' => $theme->getName(),
            'accessibleCourses' => [],
        ];

        foreach ($theme->getCourses() as $course) {
            $isCoursePurchased = $this->frontService->userHasAccessToCourse($user, $course);

            $accessibleLessons = [];
            foreach ($course->getLessons() as $lesson) {
                if ($isCoursePurchased
                    || $this->frontService->userHasAccessToLesson($user, $lesson)) {

                    $accessibleLessons[] = [
                        'entity' => $lesson,
                        'hasAccess' => true,
                    ];
                }
            }

            if ($isCoursePurchased || count($accessibleLessons) > 0) {
                $themeData['accessibleCourses'][] = [
                    'entity' => $course,
                    'hasAccess' => $isCoursePurchased,
                    'lessons' => $accessibleLessons,
                ];
            }
        }

        if (count($themeData['accessibleCourses']) > 0) {
            $dashboardData[] = $themeData;
        }
    }

    return $this->render('front/dashboard.html.twig', [
        'user' => $user,
        'themes' => $dashboardData,
    ]);
}` },
        { type: "h", text: "Schéma — Structure du dashboardData" },
        {
          type: "diagram",
          content: `$dashboardData
  └── [thème 1]
        ├── name : "Développement Web"
        └── accessibleCourses
              └── [cours A]
                    ├── entity : Course
                    ├── hasAccess : true/false
                    └── lessons
                          └── [leçon 1]
                                ├── entity : Lesson
                                └── hasAccess : true`,
        },
        { type: "h", text: "themes — Liste des thèmes" },
        { type: "p", text: "Récupère tous les thèmes via le service ThemeService et les affiche sur la page des thèmes. Il illustre la bonne pratique de déléguer la logique métier à un service et de garder le contrôleur simple, centré sur le rendu et la préparation des données pour le front." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/themes', name: 'front_themes')]
public function themes(): Response
{
    $themes = $this->themeService->getAllThemes();

    return $this->render('front/themes.html.twig', [
        'themes' => $themes,
    ]);
}` },
        { type: "h", text: "themeCourses — Cours d'un thème" },
        { type: "p", text: "Affiche tous les cours d'un thème pour un utilisateur connecté. Il détermine quels cours et leçons l'utilisateur a déjà achetés ou peut accéder, puis prépare les données pour le front. La clé Stripe est fournie pour permettre les paiements directement depuis la page." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/theme/{themeId}/courses', name: 'front_theme_courses')]
public function themeCourses(
    int $themeId,
    PurchaseRepository $purchaseRepository
): Response {

    $user = $this->getCurrentUser();

    $theme = $this->themeService->getThemeWithCourses($themeId);

    $purchasedCourses = [];
    $purchasedLessonIdsByCourse = [];

    foreach ($theme->getCourses() as $course) {

        $isCoursePurchased = $purchaseRepository->findOneBy([
            'user' => $user,
            'course' => $course
        ]) !== null;

        if ($isCoursePurchased) {
            $purchasedCourses[] = $course->getId();

            $purchasedLessonIdsByCourse[$course->getId()] = array_map(
                fn($lesson) => $lesson->getId(),
                $course->getLessons()->toArray()
            );
            // toutes les leçons du cours sont considérées comme accessibles d'un coup

        } else {
            $lessonIds = [];
            foreach ($course->getLessons() as $lesson) {
                if ($this->frontService->userHasAccessToLesson($user, $lesson)) {
                    $lessonIds[] = $lesson->getId();
                }
            }
            $purchasedLessonIdsByCourse[$course->getId()] = $lessonIds;
        }
    }

    return $this->render('front/theme_courses.html.twig', [
        'theme' => $theme,
        'purchasedCourses' => $purchasedCourses,
        'purchasedLessonIdsByCourse' => $purchasedLessonIdsByCourse,
        'stripePublicKey' => $_ENV['STRIPE_PUBLIC_KEY'],
    ]);
}` },
        { type: "h", text: "stripeSuccess — Retour après paiement Stripe" },
        { type: "p", text: "Gère le retour après un paiement Stripe réussi, que ce soit pour une leçon ou un cours. Il simule l'achat pour l'utilisateur connecté via FrontService et redirige vers la page correspondante. Si aucun produit valide n'est fourni, il retourne une erreur 404." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/stripe/success', name: 'stripe_success')]
// cette route est partagée pour les leçons ET les cours (contrairement aux versions précédentes)
public function stripeSuccess(Request $request): Response
{
    $user = $this->getCurrentUser();

    if ($lessonId = $request->query->get('lesson')) {
    // astuce : l'assignation ET la vérification se font en même temps

        $lesson = $this->lessonRepository->find($lessonId);

        if ($lesson) {
            $this->frontService->simulateSandboxPurchase($user, $lesson);

            return $this->redirectToRoute('front_lesson_show', ['id' => $lesson->getId()]);
        }
    }

    if ($courseId = $request->query->get('course')) {

        $course = $this->courseRepository->find($courseId);

        if ($course) {
            $this->frontService->simulateSandboxPurchase($user, $course);

            return $this->redirectToRoute('front_course_show', ['id' => $course->getId()]);
        }
    }

    throw $this->createNotFoundException();
    // si ni "lesson" ni "course" n'est trouvé (ou introuvable en BDD) → erreur 404
}` },
        { type: "h", text: "Schéma — Flux du stripeSuccess" },
        {
          type: "diagram",
          content: `GET /stripe/success?lesson=X  ou  ?course=Y
            |
            v
    getCurrentUser()
            |
            v
   Paramètre "lesson" présent ?
    OUI → find($lessonId) → simulateSandboxPurchase → redirect front_lesson_show
    NON → Paramètre "course" présent ?
            OUI → find($courseId) → simulateSandboxPurchase → redirect front_course_show
            NON → throw 404`,
        },
        { type: "h", text: "listCertifications — Certifications de l'utilisateur" },
        { type: "p", text: "Permet à un utilisateur connecté de consulter toutes ses certifications. Il utilise la méthode de l'entité User pour récupérer les données et les envoie au template Twig pour affichage." },
        { type: "code", filename: "FrontController.php", language: "php", code: `#[Route('/front/certifications', name: 'front_certifications')]
public function listCertifications(): Response
{
    $user = $this->getCurrentUser();

    $certifications = $user->getFrontCertifications();
    // pas besoin d'aller chercher en BDD via un Repository : l'utilisateur porte déjà ses certifications

    return $this->render('front/certifications.html.twig', [
        'user' => $user,
        'certifications' => $certifications,
    ]);
}` },
      ],
    },
    {
      id: "dp-controller-back-course",
      title: "Back-office — CourseController & DashboardController",
      blocks: [
        { type: "h", text: "CourseController" },
        { type: "p", text: "Permet de lister tous les cours disponibles dans l'application. La logique métier est déléguée à CourseService, et le contrôleur se concentre sur la récupération des données et le rendu du template. C'est un exemple de séparation claire des responsabilités : services pour la logique, contrôleur pour orchestrer et Twig pour l'affichage." },
        { type: "code", filename: "CourseController.php", language: "php", code: `final class CourseController extends AbstractController
// "final" = cette classe ne peut pas être étendue
{
    public function __construct(private CourseService $courseService) {}
}` },
        { type: "table", headers: ["Route", "Nom", "Méthodes HTTP", "Rôle"], rows: [
          ["''", "index", "GET", "Lister tous les cours"],
          ["'/new'", "new", "GET, POST", "Créer un nouveau cours"],
          ["'/{id}'", "show", "GET", "Afficher un cours"],
          ["'/{id}/edit'", "edit", "GET, POST", "Modifier un cours"],
          ["'/{id}'", "delete", "POST", "Supprimer un cours"],
        ]},
        { type: "code", filename: "CourseController.php", language: "php", code: `#[Route('', name: 'index', methods: ['GET'])]
// pas de chemin défini : hérite du préfixe défini sur la classe du contrôleur
public function index(): Response
{
    $courses = $this->courseService->getAllCourses();

    return $this->render('back/course/index.html.twig', compact('courses'));
    // compact('courses') = raccourci PHP équivalent à ['courses' => $courses]
}` },
        { type: "p", text: "new — Permet de créer un nouveau cours côté back-office. Il utilise un formulaire Symfony pour gérer la saisie et la validation des données, et délègue la logique métier à CourseService." },
        { type: "code", filename: "CourseController.php", language: "php", code: `#[Route('/new', name: 'new', methods: ['GET', 'POST'])]
public function new(Request $request): Response
{
    $course = new Course();
    $form = $this->createForm(CourseType::class, $course);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $this->courseService->createCourse($course);

        return $this->redirectToRoute('admin_course_index', [], Response::HTTP_SEE_OTHER);
        // Response::HTTP_SEE_OTHER = code HTTP 303, évite le "voulez-vous renvoyer le formulaire ?"
    }

    return $this->render('back/course/new.html.twig', [
        'course' => $course,
        'form' => $form,
    ]);
}` },
        { type: "code", filename: "CourseController.php", language: "php", code: `#[Route('/{id}', name: 'show', methods: ['GET'])]
public function show(Course $course): Response
{
    return $this->render('back/course/show.html.twig', [
        'course' => $course,
    ]);
}` },
        { type: "note", variant: "info", text: "Grâce au ParamConverter de Symfony, le paramètre {id} est automatiquement converti en objet Course depuis la base de données." },
        { type: "p", text: "edit — modifier un cours. Contrairement à new(), le formulaire est déjà pré-rempli avec les données actuelles du cours." },
        { type: "code", filename: "CourseController.php", language: "php", code: `#[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
public function edit(Request $request, Course $course): Response
{
    $form = $this->createForm(CourseType::class, $course);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $this->courseService->updateCourse($course);

        return $this->redirectToRoute('admin_course_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/course/edit.html.twig', [
        'course' => $course,
        'form' => $form,
    ]);
}` },
        { type: "p", text: "delete — Permet de supprimer un cours côté back-office en toute sécurité. La vérification du CSRF token protège contre les attaques, et la logique métier de suppression est déléguée à CourseService." },
        { type: "code", filename: "CourseController.php", language: "php", code: `#[Route('/{id}', name: 'delete', methods: ['POST'])]
public function delete(Request $request, Course $course): Response
{
    if ($this->isCsrfTokenValid('delete'.$course->getId(), $request->request->get('_token'))) {
    // 'delete'.$course->getId() = clé unique pour ce cours précis (ex: "delete42")
    // si le token est invalide ou absent, on ne supprime rien (protection silencieuse)

        $this->courseService->deleteCourse($course);
    }

    return $this->redirectToRoute('admin_course_index', [], Response::HTTP_SEE_OTHER);
}` },
        { type: "h", text: "DashboardController" },
        { type: "p", text: "Ce contrôleur affiche simplement la page d'accueil du back-office. Il ne contient pas de logique métier particulière, mais prépare les données nécessaires au rendu du template Twig. C'est un bon exemple de contrôleur minimaliste pour les pages statiques ou de navigation." },
        { type: "code", filename: "DashboardController.php", language: "php", code: `#[Route('/', name: 'dashboard')]
public function index(): Response
{
    return $this->render('back/dashboard/index.html.twig', [
        'title' => 'Dashboard',
    ]);
}` },
      ],
    },
    {
      id: "dp-controller-back-lesson-theme",
      title: "Back-office — LessonController & ThemeController",
      blocks: [
        { type: "h", text: "LessonController" },
        { type: "p", text: "Permet de lister toutes les leçons côté back-office. La logique métier est déléguée à LessonsService, et le contrôleur se concentre sur le rendu du template Twig." },
        { type: "code", filename: "LessonController.php", language: "php", code: `final class LessonController extends AbstractController
{
    // La classe ne peut pas être étendue → architecture stable
}` },
        { type: "table", headers: ["Route", "Nom", "Méthodes HTTP", "Rôle"], rows: [
          ["''", "index", "GET", "Lister toutes les leçons"],
          ["'/new'", "new", "GET, POST", "Créer une nouvelle leçon"],
          ["'/{id}'", "show", "GET", "Afficher une leçon"],
          ["'/{id}/edit'", "edit", "GET, POST", "Modifier une leçon"],
          ["'/{id}'", "delete", "POST", "Supprimer une leçon"],
        ]},
        { type: "code", filename: "LessonController.php", language: "php", code: `#[Route('', name: 'index', methods: ['GET'])]
public function index(LessonsService $lessonService): Response
// injecté directement dans la fonction (et non dans le __construct)
{
    return $this->render('back/lesson/index.html.twig', [
        'lessons' => $lessonService->getAllLessons(),
    ]);
}` },
        { type: "code", filename: "LessonController.php", language: "php", code: `#[Route('/new', name: 'new', methods: ['GET', 'POST'])]
public function new(Request $request, LessonsService $lessonService): Response
{
    $lesson = new Lesson();
    $form = $this->createForm(LessonType::class, $lesson);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $lessonService->saveLesson($lesson);

        return $this->redirectToRoute('admin_lesson_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/lesson/new.html.twig', [
        'lesson' => $lesson,
        'form' => $form,
    ]);
}` },
        { type: "code", filename: "LessonController.php", language: "php", code: `#[Route('/{id}', name: 'show', methods: ['GET'])]
public function show(Lesson $lesson): Response
{
    return $this->render('back/lesson/show.html.twig', [
        'lesson' => $lesson,
    ]);
}` },
        { type: "code", filename: "LessonController.php", language: "php", code: `#[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
public function edit(Request $request, Lesson $lesson, LessonsService $lessonService): Response
{
    $form = $this->createForm(LessonType::class, $lesson);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $lessonService->saveLesson($lesson);

        return $this->redirectToRoute('admin_lesson_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/lesson/edit.html.twig', [
        'lesson' => $lesson,
        'form' => $form,
    ]);
}` },
        { type: "code", filename: "LessonController.php", language: "php", code: `#[Route('/{id}', name: 'delete', methods: ['POST'])]
public function delete(Request $request, Lesson $lesson, LessonsService $lessonService): Response
{
    if ($this->isCsrfTokenValid('delete'.$lesson->getId(), $request->request->get('_token'))) {

        $lessonService->deleteLesson($lesson);
    }

    return $this->redirectToRoute('admin_lesson_index', [], Response::HTTP_SEE_OTHER);
}` },
        { type: "h", text: "ThemeController" },
        { type: "p", text: "Ces annotations permettent de préfixer les routes du contrôleur pour l'admin et de sécuriser l'accès en limitant les actions aux utilisateurs avec le rôle ROLE_ADMIN. Cela montre l'usage des bonnes pratiques Symfony pour organiser et sécuriser un back-office." },
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('/admin/theme', name: 'admin_theme_')]
// définit le préfixe de toutes les routes de ce contrôleur (ex: /admin/theme/new)
// "admin_theme_" = préfixe des noms de routes (ex: admin_theme_index)

#[IsGranted('ROLE_ADMIN')]
// protège TOUT ce contrôleur : seuls les utilisateurs ADMIN peuvent y accéder
// plus besoin de vérifier les droits dans chaque fonction individuellement !` },
        { type: "table", headers: ["Route", "Nom", "Méthodes HTTP", "Rôle"], rows: [
          ["''", "index", "GET", "Lister tous les thèmes"],
          ["'/new'", "new", "GET, POST", "Créer un nouveau thème"],
          ["'/{id}'", "show", "GET", "Afficher un thème"],
          ["'/{id}/edit'", "edit", "GET, POST", "Modifier un thème"],
          ["'/{id}'", "delete", "POST", "Supprimer un thème"],
          ["'/{id}/courses'", "courses", "GET", "Afficher les cours d'un thème"],
        ]},
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('', name: 'index', methods: ['GET'])]
public function index(ThemeService $themeService): Response
{
    return $this->render('back/theme/index.html.twig', [
        'themes' => $themeService->getAllThemes(),
    ]);
}` },
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('/new', name: 'new', methods: ['GET', 'POST'])]
public function new(Request $request, ThemeService $themeService): Response
{
    $theme = new Theme();
    $form = $this->createForm(ThemeType::class, $theme);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $themeService->saveTheme($theme);

        return $this->redirectToRoute('admin_theme_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/theme/new.html.twig', [
        'theme' => $theme,
        'form' => $form,
    ]);
}` },
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('/{id}', name: 'show', methods: ['GET'])]
public function show(Theme $theme): Response
{
    return $this->render('back/theme/show.html.twig', [
        'theme' => $theme,
    ]);
}` },
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
public function edit(Request $request, Theme $theme, ThemeService $themeService): Response
{
    $form = $this->createForm(ThemeType::class, $theme);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $themeService->saveTheme($theme);

        return $this->redirectToRoute('admin_theme_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/theme/edit.html.twig', [
        'theme' => $theme,
        'form' => $form,
    ]);
}` },
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('/{id}', name: 'delete', methods: ['POST'])]
public function delete(Request $request, Theme $theme, ThemeService $themeService): Response
{
    if ($this->isCsrfTokenValid('delete'.$theme->getId(), $request->request->get('_token'))) {

        $themeService->deleteTheme($theme);
    }

    return $this->redirectToRoute('admin_theme_index', [], Response::HTTP_SEE_OTHER);
}` },
        { type: "p", text: "courses — Ce contrôleur permet d'afficher tous les cours d'un thème spécifique côté back-office. Le contrôleur reste léger car la récupération des données est simplifiée par le ParamConverter et les relations d'entités." },
        { type: "code", filename: "ThemeController.php", language: "php", code: `#[Route('/{id}/courses', name: 'courses', methods: ['GET'])]
public function courses(Theme $theme): Response
{
    $courses = $theme->getCourses();
    // pas besoin d'aller chercher en BDD via un Repository : le thème porte déjà ses cours

    return $this->render('back/theme/courses.html.twig', [
        'theme' => $theme,
        'courses' => $courses,
    ]);
}` },
      ],
    },
    {
      id: "dp-controller-back-user",
      title: "Back-office — UserController",
      blocks: [
        { type: "p", text: "Ce contrôleur permet d'afficher la liste de tous les utilisateurs côté back-office. La logique métier est déléguée au UserService, et le contrôleur se concentre sur le rendu des données dans Twig." },
        { type: "table", headers: ["Route", "Nom", "Méthodes HTTP", "Rôle"], rows: [
          ["''", "index", "GET", "Lister tous les utilisateurs"],
          ["'/new'", "new", "GET, POST", "Créer un nouvel utilisateur"],
          ["'/{id}'", "show", "GET", "Afficher un utilisateur"],
          ["'/{id}/edit'", "edit", "GET, POST", "Modifier un utilisateur"],
          ["'/{id}'", "delete", "POST", "Supprimer un utilisateur"],
        ]},
        { type: "code", filename: "UserController.php", language: "php", code: `#[Route('', name: 'index', methods: ['GET'])]
public function index(UserService $userService): Response
{
    return $this->render('back/user/index.html.twig', [
        'users' => $userService->getAllUsers(),
    ]);
}` },
        { type: "code", filename: "UserController.php", language: "php", code: `#[Route('/new', name: 'new', methods: ['GET', 'POST'])]
public function new(Request $request, UserService $userService): Response
{
    $user = new User();
    $form = $this->createForm(UserType::class, $user);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $userService->saveUser($user);

        return $this->redirectToRoute('admin_user_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/user/new.html.twig', [
        'user' => $user,
        'form' => $form,
    ]);
}` },
        { type: "code", filename: "UserController.php", language: "php", code: `#[Route('/{id}', name: 'show', methods: ['GET'])]
public function show(User $user): Response
{
    return $this->render('back/user/show.html.twig', [
        'user' => $user,
    ]);
}` },
        { type: "code", filename: "UserController.php", language: "php", code: `#[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
public function edit(Request $request, User $user, UserService $userService): Response
{
    $form = $this->createForm(UserType::class, $user);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $userService->saveUser($user);

        return $this->redirectToRoute('admin_user_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->render('back/user/edit.html.twig', [
        'user' => $user,
        'form' => $form,
    ]);
}` },
        { type: "p", text: "delete — Ce contrôleur permet de supprimer un utilisateur côté back-office en toute sécurité grâce au token CSRF. La logique métier est déléguée à UserService, et le contrôleur se concentre sur la validation et la redirection." },
        { type: "code", filename: "UserController.php", language: "php", code: `#[Route('/{id}', name: 'delete', methods: ['POST'])]
public function delete(Request $request, User $user, UserService $userService): Response
{
    if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

        $userService->deleteUser($user);
    }

    return $this->redirectToRoute('admin_user_index', [], Response::HTTP_SEE_OTHER);
}` },
        { type: "h", text: "Récapitulatif global — Codes HTTP utilisés dans le projet" },
        { type: "table", headers: ["Code", "Nom", "Usage dans ce projet"], rows: [
          ["200", "OK", "Réponses normales (render Twig)"],
          ["303", "SEE_OTHER", "Redirection après création/édition/suppression"],
          ["400", "Bad Request", "Prix invalide ou données manquantes"],
          ["403", "Forbidden", "Utilisateur non connecté ou accès refusé"],
          ["404", "Not Found", "Produit Stripe introuvable"],
          ["500", "Internal Server Error", "Erreur Stripe"],
        ]},
      ],
    },
  {
      id: "dp-templates-architecture",
      title: "Templates Twig — Architecture générale",
      blocks: [
        { type: "p", text: "Vue d'ensemble de l'organisation des templates Twig du projet : un layout de base pour le front (public) et un layout de base pour le back-office (admin), dont héritent toutes les pages spécifiques." },
        {
          type: "diagram",
          content: `base.html.twig (Front)              base.html.twig (Back)
┌──────────────────────┐            ┌──────────────────────┐
│ <head>               │            │ <head>               │
│ Navbar responsive    │            │ Navbar admin         │
│ Flash messages       │            │ (simplifiée)         │
│ {% block body %}     │            │ {% block body %}     │
│ Footer RGPD          │            │ Footer Backoffice    │
│ Bootstrap JS         │            │ Bootstrap JS         │
└──────────┬───────────┘            └──────────┬───────────┘
           │ extends                            │ extends
    ┌──────┴──────────┐              ┌──────────┴──────────┐
    │                 │              │                     │
Security   Front   Registration   Back/User           Back/Theme
login      themes  register       show/new            show/new
           lessons confirm_email  index/edit          index/edit
           dashboard privacy      _form               _form
           courses  home          _delete             _delete
           certifs`,
        },
      ],
    },
    {
      id: "dp-template-base-front",
      title: "Front-end : base.html.twig",
      blocks: [
        { type: "p", text: "Ce template est la structure de base de toutes les pages de l'application Knowledge. Il centralise tout le HTML commun : <head>, header (barre de navigation), footer, inclusion des CSS et JS, et les blocs Twig (title, stylesheets, body, javascripts). Toutes les autres pages héritent de ce template avec {% extends 'base.html.twig' %} pour éviter la duplication et assurer une cohérence de style." },
        { type: "code", filename: "base.html.twig", language: "text", code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{% block title %}Knowledge{% endblock %}</title>
    {# titre par défaut, chaque page enfant peut le remplacer #}

    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">
    {# asset() génère le chemin correct vers un fichier du dossier public/ #}

    {# --- Bootstrap CSS via CDN --- #}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    {# --- Google Fonts --- #}
    <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet">

    {# --- CSS personnalisé du projet --- #}
    <link rel="stylesheet" href="{{ asset('build/styles/app.css') }}">

    {% block stylesheets %}{% endblock %}
    {# bloc vide que les pages enfants peuvent remplir pour leur propre CSS #}
</head>

<body class="d-flex flex-column min-vh-100">
{# flex-column + min-vh-100 = header/main/footer empilés, footer toujours en bas #}

    {# --- Header --- #}
    <header class="bg-light shadow-sm">
        <nav class="navbar navbar-expand-lg navbar-light container-fluid">
        {# navbar-expand-lg = menu horizontal desktop, hamburger sur mobile #}

            <a class="navbar-brand d-flex align-items-center"
               href="{% if is_granted('ROLE_ADMIN') %}{{ path('admin_dashboard') }}{% else %}{{ path('app_home') }}{% endif %}">
               {# is_granted() vérifie le rôle : logo redirige vers dashboard admin ou accueil #}
                <img src="{{ asset('images/knowledge.png') }}" alt="Logo" class="logo-image">
                <span class="ms-2 fw-bold text-primary"></span>
            </a>

            {# --- Bouton hamburger (mobile) --- #}
            <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {# --- Menu déroulant --- #}
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="nav-link"
                           href="{% if is_granted('ROLE_ADMIN') %}{{ path('admin_dashboard') }}{% else %}{{ path('app_home') }}{% endif %}">
                            Accueil
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ path('front_themes') }}">Themes</a>
                    </li>

                    {% if app.user %}
                    {# app.user = utilisateur connecté (null si non connecté) #}

                        {% if is_granted('ROLE_ADMIN') %}
                            <li class="nav-item">
                                <a class="nav-link" href="{{ path('admin_dashboard') }}">Dashboard Admin</a>
                            </li>
                        {% else %}
                            <li class="nav-item">
                                <a class="nav-link" href="{{ path('front_certifications') }}">Mes Certifications</a>
                            </li>
                        {% endif %}

                        <li class="nav-item">
                            <a class="nav-link" href="{{ path('app_logout') }}">Déconnexion</a>
                        </li>

                    {% else %}
                        <li class="nav-item">
                            <a class="nav-link" href="{{ path('app_login') }}">Connexion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ path('app_register') }}">Inscription</a>
                        </li>
                    {% endif %}

                </ul>
            </div>
        </nav>
    </header>

    {# --- Contenu principal --- #}
    <main class="container my-4 flex-grow-1">
    {# flex-grow-1 = prend tout l'espace dispo, empêche le footer de remonter #}

        {# --- Messages flash --- #}
        {% for label, messages in app.flashes %}
        {# app.flashes = messages flash stockés en session (success, error, warning...) #}
            {% for message in messages %}
                <div class="alert alert-{{ label }} alert-dismissible fade show" role="alert">
                    {{ message }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            {% endfor %}
        {% endfor %}

        {% block body %}{% endblock %}
        {# bloc principal : chaque page enfant remplace ce bloc avec son propre contenu #}
    </main>

    {# --- Footer avec mentions RGPD --- #}
    <footer class="bg-dark text-light py-4 mt-auto">
        <div class="container text-center">
            <small>&copy; {{ "now"|date("Y") }} Knowledge - Développé par Katiana BRICOTTEAUX</small>

            <hr class="border-light">

            <p class="mb-1 footer-text">
                Nous collectons et traitons vos données (email, achats, progression des cours)
                pour vous fournir nos services et délivrer vos certificats.
            </p>
            <p class="mb-1 footer-text">
                Vos données sont conservées tant que votre compte est actif
                et conformément aux obligations légales.
            </p>
            <p class="mb-1 footer-text">
                Conformément au RGPD, vous pouvez
                <a href="{{ path('privacy_policy') }}" class="footer-link">
                    consulter notre politique de confidentialité
                </a>
                et exercer vos droits d'accès, de modification ou de suppression.
            </p>
        </div>
    </footer>

    {# --- Bootstrap JS + Stimulus/Turbo --- #}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    {% block javascripts %}
        {{ importmap('app') }}
        {# charge le JS du projet (Stimulus, Turbo) via AssetMapper #}
    {% endblock %}

</body>
</html>` },
      ],
    },
    {
      id: "dp-template-login",
      title: "Security : login.html.twig",
      blocks: [
        { type: "p", text: "Ce template permet d'afficher la page de connexion. Il hérite de base.html.twig et affiche les messages flash, les erreurs d'authentification et le formulaire avec email, mot de passe et token CSRF." },
        { type: "code", filename: "login.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Connexion{% endblock %}

{% block body %}

<div class="container d-flex justify-content-center align-items-center" style="min-height:70vh;">

    <div class="col-md-6 col-lg-4">

        {# Messages flash (en plus de ceux du layout de base) #}
        {% for label, messages in app.flashes %}
            {% for message in messages %}
                <div class="alert alert-{{ label }} alert-dismissible fade show" role="alert">
                    {{ message }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            {% endfor %}
        {% endfor %}

        <div class="card shadow-sm rounded-3">
            <div class="card-body p-4">

                <h1 class="h4 text-center mb-4">Veuillez vous connecter</h1>

                {# Affichage de l'erreur de connexion #}
                {% if error %}
                    <div class="alert alert-danger">
                        {{ error.messageKey|trans(error.messageData, 'security') }}
                        {# |trans() traduit le message via le fichier security.fr.yaml #}
                    </div>
                {% endif %}

                <form method="post" action="{{ path('app_login') }}">

                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="email"
                               value="{{ last_username }}"
                               name="email"
                               id="inputEmail"
                               class="form-control"
                               autocomplete="email"
                               required
                               autofocus>
                    </div>

                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Mot de passe</label>
                        <input type="password"
                               name="password"
                               id="inputPassword"
                               class="form-control"
                               autocomplete="current-password"
                               required>
                    </div>

                    {# Token CSRF caché (protection contre les attaques) #}
                    <input type="hidden"
                           name="_csrf_token"
                           value="{{ csrf_token('authenticate') }}">

                    <button class="btn btn-primary w-100" type="submit">
                        Connexion
                    </button>

                </form>
            </div>
        </div>
    </div>
</div>

{% endblock %}` },
      ],
    },
    {
      id: "dp-template-confirmation-email",
      title: "Registration : confirmation_email.html.twig",
      blocks: [
        { type: "p", text: "Ce template est utilisé pour envoyer un email HTML lors de l'inscription afin de confirmer l'adresse e-mail. Il combine un style inline simple pour être compatible avec la majorité des clients email." },
        { type: "code", filename: "confirmation_email.html.twig", language: "text", code: `<div style="font-family: 'Arial', sans-serif; color: #384050; line-height: 1.6; padding: 20px; max-width: 600px; margin: auto; background-color: #f1f8fc; border: 1px solid #ddd; border-radius: 8px;">
{# styles en ligne obligatoires : les clients mail ignorent souvent les CSS externes #}

    <h1 style="color: #00497c; text-align: center;">Bonjour {{ user.email }} !</h1>
    {# "user" = variable passée dans le context() de l'EmailVerifier #}

    <p>Merci de confirmer votre adresse e-mail en cliquant sur le bouton ci-dessous :</p>

    <p style="text-align: center; margin: 30px 0;">
        <a href="{{ signedUrl|raw }}"
        {# signedUrl = lien de confirmation signé généré par VerifyEmailHelper #}
        {# |raw = ne pas échapper le HTML dans l'URL (sinon &, = deviennent &amp; etc.) #}
           style="display: inline-block; padding: 10px 20px; font-weight: bold; color: #fff; background-color: #6c757d; text-decoration: none; border-radius: 5px;">
            Confirmer mon e-mail
        </a>
    </p>

    <p>Ce lien expirera dans 24 heures.</p>
    {# après 24h, le lien est invalide et une VerifyEmailExceptionInterface sera lancée #}

    <p>Cordialement,<br>
        <strong>Knowledge Learning</strong>
    </p>

</div>` },
      ],
    },
  {
      id: "dp-template-register-privacy-home",
      title: "Registration : register.html.twig, Privacy & Home",
      blocks: [
        { type: "p", text: "Ce template affiche le formulaire d'inscription. Il utilise Twig + Symfony Forms (form_start, form_label, form_widget, form_errors, form_end) pour générer le HTML, gérer la validation, afficher les erreurs et sécuriser les soumissions." },
        { type: "code", filename: "register.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Inscription{% endblock %}

{% block body %}

<div class="container d-flex justify-content-center align-items-center" style="min-height:70vh;">
    <div class="col-md-6 col-lg-4">

        {% for label, messages in app.flashes %}
            {% for message in messages %}
                <div class="alert alert-{{ label }} alert-dismissible fade show" role="alert">
                    {{ message }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            {% endfor %}
        {% endfor %}

        <div class="card shadow-sm rounded-3">
            <div class="card-body p-4">

                <h1 class="h4 text-center mb-4">Inscription</h1>

                {{ form_start(registrationForm) }}

                <div class="mb-3">
                    {{ form_label(registrationForm.email, null, {'label_attr': {'class':'form-label'}}) }}
                    {{ form_widget(registrationForm.email, {'attr': {'class': 'form-control'}}) }}
                    {{ form_errors(registrationForm.email) }}
                </div>

                <div class="mb-3">
                    {{ form_label(registrationForm.plainPassword, 'Mot de passe', {'label_attr': {'class':'form-label'}}) }}
                    {{ form_widget(registrationForm.plainPassword, {'attr': {'class': 'form-control'}}) }}
                    {{ form_errors(registrationForm.plainPassword) }}
                </div>

                <div class="mb-3 form-check">
                    {{ form_widget(registrationForm.agreeTerms, {'attr': {'class':'form-check-input'}}) }}
                    {{ form_label(registrationForm.agreeTerms, "J'accepte les conditions générales", {'label_attr': {'class':'form-check-label'}}) }}
                    {{ form_errors(registrationForm.agreeTerms) }}
                </div>

                <button type="submit" class="btn btn-primary w-100">S'inscrire</button>

                {{ form_end(registrationForm) }}

            </div>
        </div>
    </div>
</div>

{% endblock %}` },
        { type: "table", headers: ["Fonction Twig", "Rôle"], rows: [
          ["form_start()", "Génère la balise <form> ouvrante avec method et action"],
          ["form_label()", "Génère le <label> — 2e argument permet de personnaliser le texte"],
          ["form_widget()", "Génère l'<input>/champ lui-même avec ses attributs"],
          ["form_errors()", "Affiche les messages d'erreur de validation sous le champ"],
          ["form_end()", "Génère la </form> fermante + champs cachés restants (dont le token CSRF)"],
        ]},
        { type: "h", text: "Privacy : index.html.twig" },
        { type: "p", text: "Affiche la politique de confidentialité (RGPD). Le code et la logique sont similaires à register.html.twig — page statique de contenu légal héritant de base.html.twig." },
        { type: "h", text: "Home : index.html.twig" },
        { type: "p", text: "Sert de point d'entrée pour l'utilisateur connecté et donne un accès direct au tableau de bord." },
        { type: "code", filename: "home/index.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Accueil{% endblock %}

{% block body %}

<div class="container py-5">
    <div class="row justify-content-center align-items-center min-vh-70">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
            <div class="card shadow-sm rounded-3 text-center p-4">

                <h1 class="h3 text-primary mb-3">Bienvenue sur le frontoffice !</h1>

                <p class="text-muted mb-4">
                    Explorez les cours, suivez votre progression et obtenez vos certificats
                    sur la plateforme Knowledge.
                </p>

                <a href="{{ path('front_dashboard') }}" class="btn btn-primary btn-lg w-100 w-md-auto">
                    Commencer
                </a>

            </div>
        </div>
    </div>
</div>

{% endblock %}` },
      ],
    },
    {
      id: "dp-template-theme-courses",
      title: "Front : theme_courses.html.twig — Achat Stripe côté template",
      blocks: [
        { type: "p", text: "Affiche tous les cours associés à un thème donné. Il gère la présentation des cours et de leurs leçons, ainsi que l'achat via Stripe, en différenciant ce qui a déjà été acheté (leçon individuelle ou cours complet)." },
        {
          type: "diagram",
          content: `Logique d'affichage par leçon :

Pour chaque leçon du cours :
  lesson.id in purchasedLessonIds  OU  coursePurchased ?
        │                                    │
       OUI ──────────────────────────────────┘
        │
        ▼
  Bouton VERT "Consulter la leçon" → lien direct

        │
       NON
        │
        ▼
  Titre + Formulaire Stripe "Acheter la leçon - prix €"

Après la boucle leçons :
  not coursePurchased ET not anyLessonPurchased ?
        │
       OUI → Bouton GRIS "Acheter le cours complet"
       NON → rien (déjà acheté en partie ou en totalité)`,
        },
        { type: "code", filename: "front/theme_courses.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Cours pour le thème : {{ theme.name }}{% endblock %}

{% block body %}

<div class="container my-5">

    <h1 class="text-primary text-center mb-4">📚 Cours pour le thème : {{ theme.name }}</h1>

    {% set purchasedLessonIdsByCourse = purchasedLessonIdsByCourse|default({}) %}
    {% set purchasedCourses = purchasedCourses|default([]) %}

    {% if theme.courses|length > 0 %}

        <div class="row g-3">
            {% for course in theme.courses %}

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm mb-3">

                        <img src="{{ asset('images/courses.png') }}"
                             class="card-img-top p-2"
                             alt="{{ course.title }}"
                             style="max-height: 160px; width: 100%; object-fit: contain;">

                        <div class="card-body d-flex flex-column justify-content-between">

                            <h5 class="card-title">{{ course.title }}</h5>

                            <p class="card-text">
                                <strong>Prix du cours :</strong> {{ course.price }} €
                            </p>

                            {% set purchasedLessonIds = purchasedLessonIdsByCourse[course.id]|default([]) %}
                            {% set coursePurchased = course.id in purchasedCourses %}
                            {% set anyLessonPurchased = purchasedLessonIds|length > 0 %}
                            {% set allLessonsPurchased = course.lessons|length > 0 and course.lessons|length == purchasedLessonIds|length %}

                            {% for lesson in course.lessons %}
                                <div class="mb-2">

                                    {% if lesson.id in purchasedLessonIds or coursePurchased %}
                                        <a href="{{ path('front_lesson_show', {'id': lesson.id}) }}"
                                           class="btn btn-success w-100 mb-1">
                                            Consulter la leçon {{ lesson.title }}
                                        </a>

                                    {% else %}
                                        <strong>{{ lesson.title }}</strong>

                                        <form class="stripe-form mt-1"
                                              action="{{ path('stripe_checkout_lesson', {'id': lesson.id}) }}"
                                              method="POST"
                                              data-turbo="false">
                                            <button type="button" class="btn btn-primary w-100">
                                                Acheter la leçon - {{ lesson.price }} €
                                            </button>
                                        </form>

                                    {% endif %}
                                </div>

                            {% endfor %}

                            {% if not coursePurchased and not anyLessonPurchased %}
                                <form class="stripe-form mt-2"
                                      action="{{ path('stripe_checkout_course', {'id': course.id}) }}"
                                      method="POST"
                                      data-turbo="false">
                                    <button type="button" class="btn btn-secondary w-100">
                                        Acheter le cours complet - {{ course.price }} €
                                    </button>
                                </form>
                            {% endif %}

                        </div>
                    </div>
                </div>

            {% endfor %}
        </div>

    {% else %}
        <div class="alert alert-info text-center">
            Aucun cours disponible pour ce thème pour le moment.
        </div>
    {% endif %}

    <div class="mt-4 text-center">
        <a href="{{ path('front_themes') }}" class="btn btn-secondary">← Retour aux thèmes</a>
    </div>

</div>

{# --- Intégration Stripe --- #}
<script src="https://js.stripe.com/v3/"></script>

<script>
function initStripeButtons() {
    const stripe = Stripe("{{ stripePublicKey|default('') }}");
    // clé PUBLIQUE uniquement ici — jamais la clé secrète en JavaScript !

    document.querySelectorAll('.stripe-form').forEach(form => {
        const button = form.querySelector('button[type="button"]');
        if (!button) return;

        button.replaceWith(button.cloneNode(true));
        // astuce pour supprimer tous les anciens écouteurs d'événements (évite les doublons)

        const newButton = form.querySelector('button[type="button"]');

        newButton.addEventListener('click', async (e) => {
            e.preventDefault();

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    headers: { 'X-Requested-With': 'XMLHttpRequest' }
                });

                const data = await res.json();

                if (data.id) {
                    await stripe.redirectToCheckout({ sessionId: data.id });
                } else if (data.error) {
                    alert(data.error);
                } else {
                    alert("Erreur inconnue lors de la création de la session Stripe.");
                }

            } catch (err) {
                console.error(err);
                alert("Erreur lors de la communication avec le serveur.");
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initStripeButtons, 50);
});

document.addEventListener('turbo:load', () => {
    setTimeout(initStripeButtons, 50);
    // réinitialise les boutons Stripe après chaque navigation Turbo
});
</script>

{% endblock %}` },
        { type: "note", variant: "info", title: "data-turbo=\"false\"", text: "Désactive Turbo (Symfony UX) sur les formulaires Stripe. Nécessaire car Turbo intercepterait la redirection Stripe autrement." },
      ],
    },
    {
      id: "dp-template-lessons",
      title: "Front : lessons.html.twig — Affichage d'une leçon",
      blocks: [
        { type: "p", text: "Affiche le contenu complet d'une leçon. Il gère l'affichage conditionnel du contenu texte, de la vidéo (avec conversion automatique des URLs YouTube en URLs d'intégration), la validation et les restrictions d'accès." },
        { type: "code", filename: "front/lessons.html.twig", language: "html", code: `{% extends 'base.html.twig' %}

{% block title %}
    Leçon : {{ lesson.title }}
{% endblock %}

{% block body %}

<div class="container my-5">

    <div class="card shadow-sm rounded-3 mb-4 p-4">

        <h1 class="h4 text-primary mb-3">📘 Leçon : {{ lesson.title }}</h1>

        {% if hasAccess %}

            {% if lesson.content %}
                <section class="mt-3">
                    <div>{{ lesson.content|raw }}</div>
                    {# |raw affiche le HTML riche saisi par un admin, sans échappement #}
                </section>
            {% else %}
                <p class="text-muted mt-3">Aucun contenu disponible pour cette leçon.</p>
            {% endif %}

            {% if lesson.videoUrl %}
                <section class="mt-4">
                    <h3>Vidéo :</h3>

                    {% set cleanUrl = lesson.videoUrl|split('&')[0] %}
                    {# découpe l'URL au niveau du "&" et garde la 1re partie (retire params inutiles) #}

                    {% set embedUrl = cleanUrl
                        | replace({'https://www.youtube.com/watch?v=': 'https://www.youtube.com/embed/'})
                        | replace({'https://youtu.be/': 'https://www.youtube.com/embed/'})
                    %}
                    {# convertit les URLs YouTube standards/raccourcies en URLs d'intégration #}

                    <div class="ratio ratio-16x9 mt-2">
                        <iframe src="{{ embedUrl }}" frameborder="0" allowfullscreen></iframe>
                    </div>

                </section>
            {% endif %}

            {% if hasValidated %}
                <p class="text-success fw-bold mt-3">✅ Cette leçon est validée</p>
            {% else %}
                <form action="{{ path('front_lesson_validate', {'id': lesson.id}) }}" method="POST" class="mt-3">
                    <button type="submit" class="btn btn-success w-100">Valider la leçon</button>
                </form>
            {% endif %}

        {% else %}
            <div class="alert alert-warning text-center mt-4">
                🔒 Vous devez acheter cette leçon ou le cours pour accéder au contenu.
            </div>
        {% endif %}

        <a href="{{ path('front_dashboard') }}" class="btn btn-secondary mt-4 w-100">← Retour au tableau de bord</a>

    </div>
</div>

{% endblock %}` },
        { type: "table", headers: ["Variable", "Origine", "Rôle"], rows: [
          ["hasAccess", "FrontController::showLesson()", "true si achat leçon ou cours complet"],
          ["hasValidated", "$user->hasValidatedLesson($lesson)", "true si la leçon est déjà validée"],
          ["lesson.videoUrl", "Entité Lesson", "URL brute YouTube (watch?v= ou youtu.be/)"],
        ]},
      ],
    },
    {
      id: "dp-template-home-front",
      title: "Front : home.html.twig — Liste des thèmes",
      blocks: [
        { type: "p", text: "Affiche la page d'accueil du front-office avec la liste des thèmes disponibles, sous forme de grille de cartes Bootstrap." },
        { type: "code", filename: "front/home.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Accueil{% endblock %}

{% block body %}

<div class="container my-5">

    <h1 class="text-primary text-center mb-4">🎓 Bienvenue sur la plateforme de formation</h1>

    <p class="text-center mb-4">Choisissez un thème pour explorer les cours disponibles :</p>

    {% if themes is not empty %}

        <div class="row g-3">
            {% for theme in themes %}

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body d-flex flex-column justify-content-between">

                            <h5 class="card-title">{{ theme.name }}</h5>

                            <p class="card-text">
                                {{ theme.description ?: 'Aucune description disponible.' }}
                                {# "?:" = ternaire court Twig — Theme n'a pas de champ description en base, #}
                                {# ce texte par défaut s'affichera donc systématiquement #}
                            </p>

                            <a href="{{ path('front_theme_courses', {'themeId': theme.id}) }}"
                               class="btn btn-primary mt-3 w-100">
                                Voir les cours
                            </a>

                        </div>
                    </div>
                </div>

            {% endfor %}
        </div>

    {% else %}
        <div class="alert alert-info text-center">
            Aucun thème disponible pour le moment.
        </div>
    {% endif %}

</div>

{% endblock %}`,
        },
      ],
    },
  {
      id: "dp-template-dashboard-front",
      title: "Front : dashboard.html.twig — Tableau de bord",
      blocks: [
        { type: "p", text: "Affiche le tableau de bord personnalisé d'un utilisateur, avec ses cours et leçons achetés ou accessibles, organisés par thème." },
        { type: "code", filename: "front/dashboard.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Tableau de bord{% endblock %}

{% block body %}

<div class="container my-5">

    <h1 class="text-primary text-center mb-4">📖 Tableau de bord {{ user.email }}</h1>

    {% set hasAnyPurchased = false %}

    {% for theme in themes %}

        {% set purchasedCourses = [] %}
        {% set purchasedLessons = [] %}

        {% for courseWrapper in theme.accessibleCourses %}

            {% set lessonsBought = courseWrapper.lessons|filter(lw => lw.hasAccess) %}
            {# |filter(lw => lw.hasAccess) = ne garde que les leçons où hasAccess est true #}

            {% if courseWrapper.hasAccess %}
                {% set purchasedCourses = purchasedCourses|merge([{
                    'entity': courseWrapper.entity,
                    'lessons': lessonsBought
                }]) %}

            {% elseif lessonsBought|length > 0 %}
                {% set purchasedCourses = purchasedCourses|merge([{
                    'entity': courseWrapper.entity,
                    'lessons': lessonsBought
                }]) %}
            {% endif %}

        {% endfor %}

        {% if purchasedCourses|length > 0 %}

            {% set hasAnyPurchased = true %}

            <h2 class="mt-4">{{ theme.name }}</h2>

            <div class="row g-3">
                {% for courseItem in purchasedCourses %}

                    {% set course = courseItem.entity %}
                    {% set lessonsBought = courseItem.lessons %}

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm">

                            <img src="{{ asset('images/courses.png') }}"
                                 class="card-img-top p-2"
                                 alt="{{ course.title }}"
                                 style="max-height: 140px; width: 100%; object-fit: contain;">

                            <div class="card-body d-flex flex-column justify-content-between">

                                <h5 class="card-title">{{ course.title }}</h5>

                                <p class="card-text"><strong>Prix :</strong> {{ course.price }} €</p>

                                <a href="{{ path('front_course_show', {'id': course.id}) }}"
                                   class="btn btn-success w-100 mt-3">
                                    Consulter le cours
                                </a>

                                {% if lessonsBought|length > 0 and lessonsBought|length < course.lessons|length %}
                                {# n'affiche la liste que si certaines (mais pas toutes) les leçons sont achetées #}

                                    <ul class="list-group mt-2">
                                        {% for lessonWrapper in lessonsBought %}
                                            <li class="list-group-item">{{ lessonWrapper.entity.title }}</li>
                                        {% endfor %}
                                    </ul>

                                {% endif %}

                            </div>
                        </div>
                    </div>

                {% endfor %}
            </div>

        {% endif %}

    {% endfor %}

    {% if not hasAnyPurchased %}
        <div class="alert alert-info text-center mt-2">
            Vous n'avez encore acheté aucun cours ni leçon.
        </div>
    {% endif %}

    <div class="mt-4 text-center">
        <a href="{{ path('front_themes') }}" class="btn btn-secondary">← Retour aux thèmes</a>
        <a href="{{ path('front_certifications') }}" class="btn btn-success ms-2">🏆 Mes Certifications</a>
    </div>

</div>

{% endblock %}` },
      ],
    },
    {
      id: "dp-template-courses-certifications",
      title: "Front : courses.html.twig & certifications.html.twig",
      blocks: [
        { type: "p", text: "courses.html.twig affiche toutes les leçons d'un cours spécifique, en ne montrant que celles auxquelles l'utilisateur a accès (achat individuel ou cours complet)." },
        { type: "code", filename: "front/courses.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}
    Cours : {{ course.title }}
{% endblock %}

{% block body %}

<div class="container my-5">

    <h1 class="text-primary text-center mb-4">📚 Cours : {{ course.title }}</h1>

    {% set purchasedLessonIds = purchasedLessonIdsByCourse[course.id]|default([]) %}
    {% set isCoursePurchased = course.id in purchasedCourses|default([]) %}

    <div class="row g-3">
        {% for lesson in course.lessons %}

            {% if lesson.id in purchasedLessonIds or isCoursePurchased %}

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body d-flex flex-column justify-content-between">

                            <h5 class="card-title">{{ lesson.title }}</h5>

                            <a href="{{ path('front_lesson_show', {'id': lesson.id}) }}"
                               class="btn btn-success w-100 mt-3">
                                Consulter la leçon
                            </a>

                        </div>
                    </div>
                </div>

            {% endif %}
            {# si aucune condition n'est remplie, la leçon est simplement ignorée #}

        {% endfor %}
    </div>

    <div class="text-center mt-4">
        <a href="{{ path('front_dashboard') }}" class="btn btn-secondary">← Retour au tableau de bord</a>
    </div>

</div>

{% endblock %}` },
        { type: "p", text: "certifications.html.twig permet à l'utilisateur de visualiser toutes ses certifications obtenues, sous forme de cartes avec visuel, titre du cours et date d'obtention." },
        { type: "code", filename: "front/certifications.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Mes Certifications{% endblock %}

{% block body %}

<div class="container my-5">

    <h1 class="text-center text-primary mb-4">🏆 Mes Certifications</h1>

    {% if certifications|length > 0 %}

        <div class="certification-list row g-3">
        {# "certification-list" = classe CSS utilisée dans les tests (assertSelectorExists) #}

            {% for certification in certifications %}

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">

                        <img src="{{ asset('images/certifications.jpg') }}"
                             class="card-img-top p-2"
                             alt="{{ certification.course.title }}"
                             style="max-height: 140px; width: 100%; object-fit: contain;">

                        <div class="card-body d-flex flex-column justify-content-between">

                            <h5 class="card-title">{{ certification.course.title }} ✅</h5>

                            <p class="card-text">
                                Obtenue le 📍 : {{ certification.obtainedAt|date('d/m/Y') }}
                            </p>

                        </div>
                    </div>
                </div>

            {% endfor %}

        </div>

    {% else %}
        <div class="alert alert-info text-center">
            Vous n'avez aucune certification pour le moment.
        </div>
    {% endif %}

    <div class="mt-4 text-center">
        <a href="{{ path('front_dashboard') }}" class="btn btn-secondary">← Retour au tableau de bord</a>
    </div>

</div>

{% endblock %}` },
      ],
    },
    {
      id: "dp-template-back-base",
      title: "Back-office : base.html.twig",
      blocks: [
        { type: "p", text: "Ce template constitue la base HTML du backoffice. Il fournit le layout principal, le header (navbar simplifiée pour l'admin), le footer, et les liens vers les styles et scripts nécessaires. Contrairement au front, il utilise container-fluid (pleine largeur) plus adapté aux tableaux de données, et n'importe pas Stimulus/Turbo." },
        { type: "code", filename: "back/base.html.twig", language: "text", code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{% block title %}Backoffice{% endblock %}</title>

    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('build/styles/app.css') }}">
    {# pas de Google Fonts ici contrairement au frontend — le back-office est plus sobre #}

    {% block stylesheets %}{% endblock %}

</head>

<body class="d-flex flex-column min-vh-100">

    {# --- Navbar simplifiée pour l'admin --- #}
    <header class="bg-light shadow-sm">
        <nav class="navbar navbar-expand-lg navbar-light container-fluid">

            <a class="navbar-brand" href="{{ path('admin_dashboard') }}">
            {# toujours vers le dashboard admin : ce template est UNIQUEMENT pour l'admin #}
                <img src="{{ asset('images/knowledge.png') }}" alt="Logo" style="height: 50px;">
            </a>

            <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav align-items-center">

                    {% if app.user %}
                        <li class="nav-item me-3">
                            <a class="btn btn-primary btn-sm text-white" href="{{ path('admin_dashboard') }}">
                                ⬅ Retour à l'accueil
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ path('app_logout') }}">Déconnexion</a>
                        </li>
                    {% else %}
                        <li class="nav-item">
                            <a class="nav-link" href="{{ path('app_login') }}">Connexion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ path('app_register') }}">Inscription</a>
                        </li>
                    {% endif %}

                </ul>
            </div>
        </nav>
    </header>

    <main class="container-fluid my-4 flex-grow-1">
    {# container-fluid = pleine largeur, plus adapté aux tableaux de données du back-office #}
        {% block body %}{% endblock %}
    </main>

    <footer class="bg-dark text-light py-3 mt-auto">
    {# footer plus compact que le frontend : pas de mentions RGPD ici #}
        <div class="container text-center">
            <small>&copy; {{ "now"|date("Y") }} Knowledge - Backoffice</small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    {% block javascripts %}{% endblock %}
    {# ⚠️ pas d'importmap() ici : Stimulus/Turbo ne sont pas utilisés en back-office #}

</body>
</html>` },
      ],
    },
    {
      id: "dp-template-back-user",
      title: "Back-office : Back/User (show, new)",
      blocks: [
        { type: "p", text: "show.html.twig affiche les informations détaillées d'un utilisateur avec possibilité de revenir à la liste, modifier ou supprimer." },
        { type: "code", filename: "back/user/show.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Utilisateur{% endblock %}

{% block page_title %}Détails de l'utilisateur{% endblock %}
{# ⚠️ ce bloc "page_title" n'est pas défini dans le back/base.html.twig vu précédemment #}
{# il ne s'affichera donc pas, sauf si une version plus complète du template parent le définit #}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 mb-4">

    <h2 class="h5 mb-3">Informations utilisateur</h2>

    <table class="table table-striped table-bordered">
        <tbody>

            <tr>
                <th>Id</th>
                <td>{{ user.id }}</td>
            </tr>

            <tr>
                <th>Email</th>
                <td>{{ user.email }}</td>
            </tr>

            <tr>
                <th>Roles</th>
                <td>{{ user.roles ? user.roles|json_encode : '' }}</td>
                {# |json_encode convertit le tableau PHP roles en chaîne JSON lisible #}
            </tr>

            <tr>
                <th>Password</th>
                <td>{{ user.password }}</td>
                {# affiche le mot de passe HASHÉ (jamais en clair) #}
            </tr>

            <tr>
                <th>Vérifié</th>
                <td>{{ user.isVerified ? 'Oui' : 'Non' }}</td>
            </tr>

        </tbody>
    </table>

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_user_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        <a href="{{ path('admin_user_edit', {'id': user.id}) }}" class="btn btn-primary">Modifier</a>
        {{ include('back/user/_delete_form.html.twig') }}
        {# include() insère le formulaire de suppression partiel — le préfixe "_" indique un template partiel #}
    </div>
</div>

{% endblock %}` },
        { type: "p", text: "new.html.twig — Crée un nouvel utilisateur en réutilisant le formulaire partagé _form.html.twig (identique pour la création et la modification)." },
        { type: "code", filename: "back/user/new.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Nouvel utilisateur{% endblock %}

{% block page_title %}Créer un nouvel utilisateur{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de création</h2>

    {{ include('back/user/_form.html.twig') }}
    {# formulaire partagé entre la création ET la modification #}

    <div class="mt-3">
        <a href="{{ path('admin_user_index') }}" class="btn btn-secondary">← Retour à la liste</a>
    </div>

</div>

{% endblock %}` },
      ],
    },
  {
      id: "dp-template-back-user-crud",
      title: "Back-office : User index/edit/_form/_delete_form",
      blocks: [
        { type: "p", text: "index.html.twig liste tous les utilisateurs dans un tableau Bootstrap, avec boutons Voir/Modifier pour chaque ligne." },
        { type: "code", filename: "back/user/index.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Utilisateurs{% endblock %}

{% block page_title %}Liste des utilisateurs{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Utilisateurs</h2>

    <table class="table table-striped table-bordered table-hover">

        <thead class="table-light">
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Password</th>
                <th>Vérifié</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>

            {% for user in users %}

                <tr>
                    <td>{{ user.id }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.roles ? user.roles|join(', ') : '' }}</td>
                    {# |join(', ') affiche "ROLE_ADMIN, ROLE_CLIENT" — plus lisible que le json_encode de show.html.twig #}
                    <td>{{ user.password ? 'hashed' : 'none' }}</td>
                    {# affiche seulement "hashed"/"none" — plus sécurisé que show.html.twig qui affichait le hash entier #}
                    <td>{{ user.isVerified ? 'Oui' : 'Non' }}</td>

                    <td class="d-flex gap-2">
                        <a href="{{ path('admin_user_show', {'id': user.id}) }}" class="btn btn-sm btn-primary">Voir</a>
                        <a href="{{ path('admin_user_edit', {'id': user.id}) }}" class="btn btn-sm btn-secondary">Modifier</a>
                    </td>
                </tr>

            {% else %}
            {# bloc spécial Twig : s'exécute si la boucle "for" ne trouve aucun élément #}

                <tr>
                    <td colspan="6" class="text-center">Aucun utilisateur trouvé</td>
                </tr>

            {% endfor %}

        </tbody>
    </table>

    <div class="mt-3">
        <a href="{{ path('admin_user_new') }}" class="btn btn-success">Créer un utilisateur</a>
    </div>

</div>

{% endblock %}` },
        { type: "p", text: "edit.html.twig réutilise _form.html.twig avec un paramètre button_label personnalisé, et ajoute le formulaire de suppression." },
        { type: "code", filename: "back/user/edit.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Modifier utilisateur{% endblock %}

{% block page_title %}Modifier un utilisateur{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de modification</h2>

    {{ include('back/user/_form.html.twig', {'button_label': 'Mettre à jour'}) }}
    {# même _form.html.twig que new.html.twig, mais avec un texte de bouton différent #}

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_user_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        {{ include('back/user/_delete_form.html.twig') }}
    </div>

</div>

{% endblock %}` },
        { type: "p", text: "_form.html.twig (partial partagé création/édition) laisse Symfony générer automatiquement tous les champs avec form_widget(form), plus rapide à écrire mais moins de contrôle sur le style individuel." },
        { type: "code", filename: "back/user/_form.html.twig", language: "text", code: `{{ form_start(form) }}

    {{ form_widget(form) }}
    {# génère automatiquement TOUS les champs en une seule ligne #}
    {# contrairement aux pages register/login qui affichaient chaque champ séparément #}

    <button class="btn btn-primary w-100 mt-3">
        {{ button_label|default('Enregistrer') }}
        {# variable optionnelle passée via include() — 'Enregistrer' par défaut si non fournie #}
    </button>

{{ form_end(form) }}` },
        { type: "p", text: "_delete_form.html.twig (partial de suppression réutilisé partout) demande confirmation JS avant de soumettre, et inclut le token CSRF requis par isCsrfTokenValid() côté contrôleur." },
        { type: "code", filename: "back/user/_delete_form.html.twig", language: "text", code: `<form method="post"
      action="{{ path('admin_user_delete', {'id': user.id}) }}"
      onsubmit="return confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');">
      {# confirm() affiche une boîte de dialogue native ; "Annuler" bloque la soumission #}

    <input type="hidden"
           name="_token"
           value="{{ csrf_token('delete' ~ user.id) }}">
           {# 'delete' ~ user.id = concatène "delete" + id (ex: "delete42") #}
           {# doit correspondre EXACTEMENT à isCsrfTokenValid('delete'.$user->getId(), ...) côté contrôleur #}

    <button class="btn btn-danger btn-sm">Supprimer</button>

</form>` },
      ],
    },
    {
      id: "dp-template-back-theme-crud",
      title: "Back-office : Theme (show, new, index)",
      blocks: [
        { type: "p", text: "Le pattern CRUD est identique à celui des User — seule l'entité et ses champs changent. Theme n'a qu'un seul champ métier : name." },
        { type: "code", filename: "back/theme/show.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Détails du thème{% endblock %}

{% block page_title %}Détails du thème{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Informations du thème</h2>

    <table class="table table-striped table-bordered">
        <tbody>

            <tr>
                <th>Id</th>
                <td>{{ theme.id }}</td>
            </tr>

            <tr>
                <th>Nom</th>
                <td>{{ theme.name }}</td>
            </tr>

        </tbody>
    </table>

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_theme_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        <a href="{{ path('admin_theme_edit', {'id': theme.id}) }}" class="btn btn-primary">Modifier</a>
        {{ include('back/theme/_delete_form.html.twig') }}
    </div>
</div>

{% endblock %}` },
        { type: "code", filename: "back/theme/new.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Nouveau thème{% endblock %}

{% block page_title %}Créer un nouveau thème{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de création</h2>

    {{ include('back/theme/_form.html.twig', {'button_label': 'Enregistrer'}) }}

    <div class="mt-3">
        <a href="{{ path('admin_theme_index') }}" class="btn btn-secondary">← Retour à la liste</a>
    </div>

</div>

{% endblock %}` },
        { type: "code", filename: "back/theme/index.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Thèmes{% endblock %}

{% block page_title %}Liste des thèmes{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Thèmes</h2>

    <table class="table table-striped table-bordered table-hover">

        <thead class="table-light">
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>

            {% for theme in themes %}

                <tr>
                    <td>{{ theme.id }}</td>
                    <td>{{ theme.name }}</td>

                    <td class="d-flex gap-2">
                        <a href="{{ path('admin_theme_show', {'id': theme.id}) }}" class="btn btn-sm btn-primary">Voir</a>
                        <a href="{{ path('admin_theme_edit', {'id': theme.id}) }}" class="btn btn-sm btn-secondary">Modifier</a>
                    </td>
                </tr>

                    <td class="d-flex gap-2">
                        <a href="{{ path('admin_theme_show', {'id': theme.id}) }}" class="btn btn-sm btn-primary">Voir</a>
                        <a href="{{ path('admin_theme_edit', {'id': theme.id}) }}" class="btn btn-sm btn-secondary">Modifier</a>
                    </td>
                </tr>

            {% else %}
                <tr>
                    <td colspan="3" class="text-center">Aucun thème trouvé</td>
                </tr>
            {% endfor %}

        </tbody>
    </table>

    <div class="mt-3">
        <a href="{{ path('admin_theme_new') }}" class="btn btn-success">Créer un thème</a>
    </div>

</div>

{% endblock %}` },
      ],
    },
    {
      id: "dp-template-back-theme-edit-lesson-crud",
      title: "Back-office : Theme edit/_form/_delete_form & Lesson CRUD complet",
      blocks: [
        { type: "code", filename: "back/theme/edit.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Modifier thème{% endblock %}

{% block page_title %}Modifier un thème{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de modification</h2>

    {{ include('back/theme/_form.html.twig', {'button_label': 'Mettre à jour'}) }}

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_theme_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        {{ include('back/theme/_delete_form.html.twig') }}
    </div>

</div>

{% endblock %}` },
        { type: "code", filename: "back/theme/_form.html.twig", language: "text", code: `{{ form_start(form) }}

    {{ form_widget(form) }}
    {# ici uniquement le champ "name" (seul champ défini dans ThemeType) #}

    <button class="btn btn-primary w-100 mt-3">
        {{ button_label|default('Enregistrer') }}
    </button>

{{ form_end(form) }}` },
        { type: "code", filename: "back/theme/_delete_form.html.twig", language: "text", code: `<form method="post"
      action="{{ path('admin_theme_delete', {'id': theme.id}) }}"
      onsubmit="return confirm('Êtes-vous sûr de vouloir supprimer ce thème ?');">

    <input type="hidden"
           name="_token"
           value="{{ csrf_token('delete' ~ theme.id) }}">

    <button class="btn btn-danger btn-sm">Supprimer</button>

</form>` },
        { type: "h", text: "Back/Lesson — show.html.twig" },
        { type: "p", text: "Affiche le détail d'une leçon, avec gestion de la vidéo : deux cas possibles — fichier .mp4 affiché via <video>, ou lien YouTube transformé en iframe embed." },
        { type: "code", filename: "back/lesson/show.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Leçon{% endblock %}

{% block page_title %}Détails de la leçon{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Informations sur la leçon</h2>

    <table class="table table-striped table-bordered table-hover">
        <tbody>

            <tr>
                <th>Id</th>
                <td>{{ lesson.id }}</td>
            </tr>

            <tr>
                <th>Titre</th>
                <td>{{ lesson.title }}</td>
            </tr>

            <tr>
                <th>Prix</th>
                <td>{{ lesson.price }} €</td>
            </tr>

            <tr>
                <th>Description</th>
                <td>

                    {% if lesson.content %}
                        {{ lesson.content|raw }}
                    {% else %}
                        <p class="text-muted">Aucun contenu disponible.</p>
                    {% endif %}

                    {% if lesson.videoUrl %}

                        <h3 class="mt-3">Vidéo :</h3>

                        {% if lesson.videoUrl ends with '.mp4' %}

                            <video width="400" controls class="mt-2">
                                <source src="{{ lesson.videoUrl }}" type="video/mp4">
                                Votre navigateur ne supporte pas la lecture de vidéo.
                            </video>

                        {% else %}
                        {# sinon on suppose une URL YouTube #}

                            {% set youtube_id = lesson.videoUrl | replace({'https://www.youtube.com/watch?v=': ''}) %}
                            {# ⚠️ moins robuste que la solution de front/lessons.html.twig #}
                            {# ne gère pas les URLs youtu.be ni les paramètres supplémentaires (?t=30...) #}

                            <iframe width="400" height="225"
                                    class="mt-2"
                                    src="https://www.youtube.com/embed/{{ youtube_id }}"
                                    frameborder="0"
                                    allowfullscreen>
                            </iframe>

                        {% endif %}

                    {% endif %}

                </td>
            </tr>

        </tbody>
    </table>

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_lesson_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        <a href="{{ path('admin_lesson_edit', {'id': lesson.id}) }}" class="btn btn-primary">Modifier</a>
        {{ include('back/lesson/_delete_form.html.twig') }}
    </div>
</div>

{% endblock %}` },
        { type: "code", filename: "back/lesson/new.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Créer une leçon{% endblock %}

{% block page_title %}Nouvelle leçon{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de création de leçon</h2>

    {{ include('back/lesson/_form.html.twig', {'button_label': 'Créer'}) }}

    <div class="mt-3">
        <a href="{{ path('admin_lesson_index') }}" class="btn btn-secondary">← Retour à la liste</a>
    </div>

</div>

{% endblock %}` },
        { type: "code", filename: "back/lesson/index.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Liste des leçons{% endblock %}

{% block page_title %}Gestion des leçons{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Liste des leçons</h2>

    <table class="table table-striped table-bordered table-hover">

        <thead class="table-light">
            <tr>
                <th>Id</th>
                <th>Titre</th>
                <th>Prix</th>
                <th>Contenu</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>

            {% for lesson in lessons %}

                <tr>
                    <td>{{ lesson.id }}</td>
                    <td>{{ lesson.title }}</td>
                    <td>{{ lesson.price }} €</td>

                    <td>
                        {% if lesson.content %}

                            {{ lesson.content|striptags|length > 50
                                ? lesson.content|striptags|slice(0, 50) ~ '...'
                                : lesson.content|striptags }}
                            {# |striptags supprime les balises HTML avant l'aperçu tronqué à 50 caractères #}

                        {% elseif lesson.videoUrl %}

                            <a href="{{ path('admin_lesson_show', {'id': lesson.id}) }}">Voir la vidéo</a>

                        {% else %}

                            <p class="text-muted">Aucun contenu disponible.</p>

                        {% endif %}
                    </td>

                    <td class="d-flex gap-2">
                        <a href="{{ path('admin_lesson_show', {'id': lesson.id}) }}" class="btn btn-primary btn-sm">Voir</a>
                        <a href="{{ path('admin_lesson_edit', {'id': lesson.id}) }}" class="btn btn-secondary btn-sm">Modifier</a>
                    </td>
                </tr>

            {% else %}
                <tr>
                    <td colspan="5" class="text-center">Aucune leçon trouvée</td>
                </tr>
            {% endfor %}

        </tbody>
    </table>

    <a href="{{ path('admin_lesson_new') }}" class="btn btn-success mt-3">Créer une nouvelle leçon</a>

</div>

{% endblock %}` },
        {
          type: "diagram",
          content: `Logique d'affichage du contenu (liste des leçons) :

lesson.content ?
├── OUI ──► Aperçu 50 caractères (striptags|slice(0,50) ~ '...')
│
lesson.videoUrl ?
├── OUI ──► Lien "Voir la vidéo"
│
Sinon ──► "Aucun contenu disponible."`,
        },
        { type: "code", filename: "back/lesson/edit.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Modifier une leçon{% endblock %}

{% block page_title %}Modifier la leçon{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de modification de leçon</h2>

    {{ include('back/lesson/_form.html.twig', {'button_label': 'Mettre à jour'}) }}

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_lesson_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        {{ include('back/lesson/_delete_form.html.twig') }}
    </div>

</div>

{% endblock %}` },
        { type: "code", filename: "back/lesson/_form.html.twig", language: "text", code: `{{ form_start(form) }}

    {{ form_widget(form) }}
    {# titre, prix, contenu, videoUrl, et la liste déroulante du cours associé #}

    <div class="mt-3 d-flex gap-2">

        <button type="submit" class="btn btn-primary">
            {{ button_label|default('Enregistrer') }}
        </button>

        <a href="{{ path(app.request.get('_route')|replace({'_new':'_index','_edit':'_index'})) }}"
        {# astuce : génère l'URL "Annuler" dynamiquement selon la route actuelle #}
        {# "admin_lesson_new" ou "admin_lesson_edit" → "admin_lesson_index" #}
           class="btn btn-secondary">Annuler</a>

    </div>

{{ form_end(form) }}` },
        { type: "code", filename: "back/lesson/_delete_form.html.twig", language: "text", code: `<form method="post"
      action="{{ path('admin_lesson_delete', {'id': lesson.id}) }}"
      onsubmit="return confirm('Voulez-vous vraiment supprimer cette leçon ?');">

    <input type="hidden"
           name="_token"
           value="{{ csrf_token('delete' ~ lesson.id) }}">

    <button type="submit" class="btn btn-danger btn-sm">Supprimer</button>

</form>` },
      ],
    },
    {
      id: "dp-template-back-dashboard-course-crud",
      title: "Back-office : Dashboard & Course CRUD complet",
      blocks: [
        { type: "p", text: "back/dashboard/index.html.twig — page d'accueil du back-office, avec une liste de liens de navigation vers chaque section de gestion." },
        { type: "code", filename: "back/dashboard/index.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Tableau de bord{% endblock %}

{% block page_title %}Tableau de bord{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">🖥 Bienvenue dans l'espace administrateur</h2>

    <p class="alert alert-info">
        Vous pouvez gérer les utilisateurs, cursus, leçons et thèmes depuis ce tableau de bord.
    </p>

    <div class="list-group">
    {# list-group-item-action = chaque élément est cliquable avec effet hover #}

        <a href="{{ path('admin_user_index') }}" class="list-group-item list-group-item-action">
            👥 Gestion des utilisateurs
        </a>

        <a href="{{ path('admin_course_index') }}" class="list-group-item list-group-item-action">
            📚 Gestion des cursus
        </a>

        <a href="{{ path('admin_lesson_index') }}" class="list-group-item list-group-item-action">
            📖 Gestion des leçons
        </a>

        <a href="{{ path('admin_theme_index') }}" class="list-group-item list-group-item-action">
            🎨 Gestion des thèmes
        </a>

    </div>
</div>

{% endblock %}` },
        { type: "h", text: "Back/Course — show.html.twig" },
        { type: "p", text: "Affiche le détail d'un cours avec toutes ses leçons sous forme de grille de cartes, y compris un aperçu du contenu et de la vidéo intégrée pour chaque leçon." },
        { type: "code", filename: "back/course/show.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Détails du cours{% endblock %}

{% block page_title %}Détails du cours{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Informations sur le cours</h2>

    <table class="table table-striped table-bordered">
        <tbody>
            <tr>
                <th>Id</th>
                <td>{{ course.id }}</td>
            </tr>
            <tr>
                <th>Titre</th>
                <td>{{ course.title }}</td>
            </tr>
            <tr>
                <th>Prix</th>
                <td>{{ course.price }} €</td>
            </tr>
        </tbody>
    </table>

    <h3 class="mt-4">Leçons disponibles :</h3>

    <div class="row g-3 mb-4">

        {% for lesson in course.lessons %}

            <div class="col-12 col-md-6 col-lg-4">

                <div class="card h-100 shadow-sm">

                    <div class="card-body d-flex flex-column justify-content-between">

                        <h5 class="card-title">{{ lesson.title }}</h5>

                        {% if lesson.content %}
                            <p class="card-text">
                                {{ lesson.content|length > 100
                                    ? lesson.content|slice(0, 100) ~ '...'
                                    : lesson.content }}
                                {# ⚠️ contrairement à la liste des leçons, pas de |striptags ici #}
                                {# si le contenu contient du HTML, il sera affiché tel quel #}
                            </p>
                        {% endif %}

                        {% if lesson.videoUrl %}

                            <h6 class="mt-3">Vidéo :</h6>

                            {% set cleanUrl = lesson.videoUrl|split('&')[0] %}

                            {% set embedUrl = cleanUrl
                                | replace({'https://www.youtube.com/watch?v=': 'https://www.youtube.com/embed/'})
                                | replace({'https://youtu.be/': 'https://www.youtube.com/embed/'})
                            %}

                            <div class="ratio ratio-16x9">
                                <iframe src="{{ embedUrl }}" frameborder="0" allowfullscreen></iframe>
                            </div>

                        {% endif %}

                        <a href="{{ path('front_lesson_show', {'id': lesson.id}) }}"
                        {# ⚠️ lien vers la page FRONTEND de la leçon (et non le back-office) #}
                        {# permet à l'admin de voir la leçon telle qu'elle apparaît aux utilisateurs #}
                           class="btn btn-success w-100 mt-3">
                            Consulter la leçon
                        </a>

                    </div>
                </div>
            </div>

        {% endfor %}

    </div>

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_course_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        <a href="{{ path('admin_course_edit', {'id': course.id}) }}" class="btn btn-primary">Modifier</a>
        {{ include('back/course/_delete_form.html.twig') }}
    </div>
</div>

{% endblock %}` },
        { type: "code", filename: "back/course/new.html.twig", language: "text", code: `{% extends 'base.html.twig' %}

{% block title %}Créer un nouveau cours{% endblock %}

{% block page_title %}Créer un nouveau cours{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de création de cours</h2>

    {{ include('back/course/_form.html.twig', {'button_label': 'Créer le cours'}) }}

    <div class="mt-3">
        <a href="{{ path('admin_course_index') }}" class="btn btn-secondary">← Retour à la liste</a>
    </div>

</div>

{% endblock %}` },
        { type: "p", text: "index.html.twig — Contrairement aux autres listes du back-office, le bouton \"Ajouter\" est placé en haut à droite, et le formulaire de suppression est intégré directement dans le tableau plutôt que d'utiliser un partial dédié." },
        { type: "code", filename: "back/course/index.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Gestion des Cours{% endblock %}

{% block page_title %}Liste des Cours{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <div class="d-flex justify-content-between align-items-center mb-3">

        <h2 class="h5 mb-0">Cours disponibles</h2>

        <a href="{{ path('admin_course_new') }}" class="btn btn-primary">➕ Ajouter un cours</a>

    </div>

    <table class="table table-striped table-bordered">
    {# ⚠️ pas de table-hover ici contrairement aux autres listes du back-office #}

        <thead class="table-light">
            <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>

            {% for course in courses %}

                <tr>
                    <td>{{ course.id }}</td>
                    <td>{{ course.title }}</td>

                    <td class="d-flex gap-2">

                        <a href="{{ path('admin_course_show', {id: course.id}) }}" class="btn btn-sm btn-info">Voir</a>
                        <a href="{{ path('admin_course_edit', {id: course.id}) }}" class="btn btn-sm btn-warning">Modifier</a>

                        <form method="post"
                              action="{{ path('admin_course_delete', {id: course.id}) }}"
                              onsubmit="return confirm('Voulez-vous vraiment supprimer ce cours ?');">
                            {# ⚠️ formulaire de suppression intégré directement ici #}
                            {# contrairement aux autres entités qui utilisaient un partial _delete_form.html.twig #}

                            <input type="hidden"
                                   name="_token"
                                   value="{{ csrf_token('delete' ~ course.id) }}">

                            <button class="btn btn-sm btn-danger">Supprimer</button>
                        </form>

                    </td>
                </tr>

            {% else %}
                <tr>
                    <td colspan="3" class="text-center">Aucun cours trouvé.</td>
                </tr>
            {% endfor %}

        </tbody>
    </table>

</div>

{% endblock %}` },
        { type: "code", filename: "back/course/edit.html.twig", language: "text", code: `{% extends 'back/base.html.twig' %}

{% block title %}Modifier un cours{% endblock %}

{% block page_title %}Modifier le cours{% endblock %}

{% block body %}

<div class="card shadow-sm rounded-3 p-4 my-4">

    <h2 class="h5 mb-3">Formulaire de modification du cours</h2>

    {{ include('back/course/_form.html.twig', {'button_label': 'Mettre à jour'}) }}

    <div class="mt-3 d-flex gap-2">
        <a href="{{ path('admin_course_index') }}" class="btn btn-secondary">← Retour à la liste</a>
        {{ include('back/course/_delete_form.html.twig') }}
    </div>

</div>

{% endblock %}` },
        { type: "code", filename: "back/course/_form.html.twig", language: "text", code: `{{ form_start(form) }}

    <div class="mb-3">
        {{ form_widget(form) }}
        {# titre, prix, et la liste déroulante du thème associé #}
    </div>

    <button class="btn btn-primary">{{ button_label|default('Enregistrer') }}</button>
    {# ⚠️ pas de type="submit" explicite, pas de w-100/mt-3 : style légèrement différent des autres partials #}

{{ form_end(form) }}` },
        { type: "code", filename: "back/course/_delete_form.html.twig", language: "text", code: `<form method="post"
      action="{{ path('admin_course_delete', {'id': course.id}) }}"
      onsubmit="return confirm('Voulez-vous vraiment supprimer ce cours ?');"
      class="d-inline">
      {# d-inline permet de placer le formulaire côte à côte avec les autres boutons sans saut de ligne #}

    <input type="hidden"
           name="_token"
           value="{{ csrf_token('delete' ~ course.id) }}">

    <button class="btn btn-danger btn-sm">Supprimer</button>

</form>` },
        { type: "h", text: "Récapitulatif — Cohérence et petites incohérences de style" },
        { type: "table", headers: ["Entité", "Suppression dans index", "Bouton Ajouter", "table-hover"], rows: [
          ["User", "Non (juste Voir/Modifier)", "En bas de page", "Oui"],
          ["Theme", "Non (juste Voir/Modifier)", "En bas de page", "Oui"],
          ["Lesson", "Non (juste Voir/Modifier)", "En bas de page", "Oui"],
          ["Course", "Oui, formulaire intégré", "En haut à droite", "Non"],
        ]},
        { type: "note", variant: "info", text: "Ces petites incohérences de style entre CourseController et les autres contrôleurs back-office (bouton Ajouter en haut vs en bas, suppression intégrée vs partial séparé) sont typiques d'un projet réel développé progressivement — un bon point de discussion pour la soutenance : identifier ces écarts montre une capacité d'analyse critique de son propre code." },
      ],
    },
  ],
};
