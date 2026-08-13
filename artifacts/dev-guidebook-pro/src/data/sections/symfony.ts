import type { Section, SubSection } from "../types";

// ── Contenu fusionné depuis laConsoleSymfony.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleSymfony: SubSection[] = [
  {
    id: "laconsole-symfony",
    title: "Symfony",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"Symfony.pdf - 190 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"p","text":"Formations"},
      {"type":"code","filename":"page-1-exemple-1","language":"php","code":"Cheatsheet : Symfony"},
      {"type":"p","text":"Ressources"},
      {"type":"code","filename":"page-1-exemple-2","language":"php","code":"CheatSheet Symfony : Guide complet, résumé, aide-mémoire, tutoriel et conseils"},
      {"type":"code","filename":"page-1-exemple-3","language":"php","code":"clés pour apprendre et maîtriser Symfony efﬁcacement et rapidement."},
      {"type":"p","text":"Blog"},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Newsletter"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"code","filename":"page-1-exemple-4","language":"php","code":"CHEATSHEETS / SYMFONY"},
      {"type":"h","text":"! Recherche..."},
      {"type":"p","text":"Création d'un projet"},
      {"type":"code","filename":"page-1-exemple-5","language":"php","code":"# Projet avec structure de base (API, Console, Services...)\nsymfony new nom_projet"},
      {"type":"code","filename":"page-1-exemple-6","language":"php","code":"# Projet avec paquets élémentaires pour une app/site web\nsymfony new nom_projet --webapp"},
      {"type":"p","text":"# Projet CRUD de démo pour prise en main du framework"},
      {"type":"code","filename":"page-1-exemple-7","language":"php","code":"symfony new nom_projet --demo"},
      {"type":"p","text":"--version  pour installer une version spéciﬁque (ex: --version=5.4 )"},
      {"type":"code","filename":"page-1-exemple-8","language":"php","code":"symfony check:requirements  => check si système OK pour dev en Symfony"},
      {"type":"image","src":"images/laconsole/symfony-p001.jpg","alt":"Page originale de Symfony.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"p","text":"Démarrer/arrêter le serveur"},
      {"type":"code","filename":"page-2-exemple-1","language":"php","code":"# Démarrage du serveur (ou symfony serve)"},
      {"type":"code","filename":"page-2-exemple-2","language":"php","code":"symfony server:start"},
      {"type":"p","text":"# Arrêt du serveur"},
      {"type":"code","filename":"page-2-exemple-3","language":"php","code":"symfony server:stop"},
      {"type":"p","text":"-d  pour démarrer le serveur en tâche de fond"},
      {"type":"p","text":"Base de données"},
      {"type":"code","filename":"page-2-exemple-4","language":"php","code":"# Créer la BDD (ou symfony console d:d:c)"},
      {"type":"code","filename":"page-2-exemple-5","language":"php","code":"symfony console doctrine:database:create"},
      {"type":"code","filename":"page-2-exemple-6","language":"php","code":"# Supprimer la BDD (ou symfony console d:d:d)\nsymfony console doctrine:database:drop"},
      {"type":"p","text":"Selon adresse spéciﬁée dans DATABASE_URL  du"},
      {"type":"p","text":".env"},
      {"type":"p","text":"Migrations"},
      {"type":"p","text":"Mise à jour de la structure de BDD selon modèle objet de l’app."},
      {"type":"p","text":"# Créer une migration"},
      {"type":"code","filename":"page-2-exemple-7","language":"php","code":"symfony console make:migration"},
      {"type":"code","filename":"page-2-exemple-8","language":"php","code":"# Exécuter les migrations non exécutées\nsymfony console doctrine:migrations:migrate"},
      {"type":"p","text":"# Afficher l'état des migrations"},
      {"type":"code","filename":"page-2-exemple-9","language":"php","code":"symfony console doctrine:migrations:status"},
      {"type":"p","text":"# Exécuter une migration spécifique"},
      {"type":"image","src":"images/laconsole/symfony-p002.jpg","alt":"Page originale de Symfony.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"code","filename":"page-3-exemple-1","language":"php","code":"symfony console doctrine:migrations:execute --up <version_migrat"},
      {"type":"code","filename":"page-3-exemple-2","language":"php","code":"# Annuler une migration spécifique\nsymfony console doctrine:migrations:execute --down <version_migr"},
      {"type":"p","text":"Créer un contrôleur"},
      {"type":"p","text":"Créer une entité"},
      {"type":"code","filename":"page-3-exemple-3","language":"php","code":"symfony console make:controller"},
      {"type":"code","filename":"page-3-exemple-4","language":"php","code":"symfony console make:entity"},
      {"type":"code","filename":"page-3-exemple-5","language":"php","code":"Créer un formulaire (Form Type)"},
      {"type":"code","filename":"page-3-exemple-6","language":"php","code":"symfony console make:form"},
      {"type":"p","text":"Déclarer une route"},
      {"type":"p","text":"// Route statique"},
      {"type":"p","text":"#[Route('/blog', name: 'app_blog_index')]"},
      {"type":"code","filename":"page-3-exemple-7","language":"php","code":"public function index() { ... }"},
      {"type":"code","filename":"page-3-exemple-8","language":"php","code":"// Route dynamique\n#[Route('/blog/{slug}', name: 'app_blog_show')]\npublic function show(string $slug) {"},
      {"type":"code","filename":"page-3-exemple-9","language":"php","code":"// $slug => valeur du paramètre de route\n}"},
      {"type":"p","text":"Préﬁxe de route"},
      {"type":"code","filename":"page-3-exemple-10","language":"php","code":"#[Route('/admin')]\nclass AdminController {"},
      {"type":"code","filename":"page-3-exemple-11","language":"php","code":"// path => /admin/user\n#[Route('/user', name: '...')]"},
      {"type":"image","src":"images/laconsole/symfony-p003.jpg","alt":"Page originale de Symfony.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"code","filename":"page-4-exemple-1","language":"php","code":"}"},
      {"type":"p","text":"Options de routes"},
      {"type":"code","filename":"page-4-exemple-2","language":"php","code":"// Check validité d'un paramètre de route (via regex)\n#[Route(... requirements: ['nom_param' => '[a-z0-9-]+'])]"},
      {"type":"code","filename":"page-4-exemple-3","language":"php","code":"// Valeur par défaut pour un paramètre de route\n#[Route(... defaults: ['nom_param' => 'valeur'])]"},
      {"type":"p","text":"// Route restreinte à certaines méthodes HTTP\n#[Route(... methods: ['GET', 'POST'])]"},
      {"type":"p","text":"Analyser la requête"},
      {"type":"code","filename":"page-4-exemple-4","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Request;"},
      {"type":"p","text":"// ..."},
      {"type":"code","filename":"page-4-exemple-5","language":"php","code":"public function maMethode(Request $request): Response {"},
      {"type":"code","filename":"page-4-exemple-6","language":"php","code":"// Equivalent pour $_GET['param1']\n$request->query->get('param1');"},
      {"type":"code","filename":"page-4-exemple-7","language":"php","code":"// Equivalent pour $_POST['param2']\n$request->request->get('param2');"},
      {"type":"code","filename":"page-4-exemple-8","language":"php","code":"// Connaître la méthode HTTP de la requête\n$request->isMethod('MA_METHODE'); // GET, POST..."},
      {"type":"code","filename":"page-4-exemple-9","language":"php","code":"}"},
      {"type":"p","text":"Retourner un template"},
      {"type":"image","src":"images/laconsole/symfony-p004.jpg","alt":"Page originale de Symfony.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"// Sans données"},
      {"type":"code","filename":"page-5-exemple-1","language":"php","code":"return $this->render('chemin/vers/template.html.twig');"},
      {"type":"code","filename":"page-5-exemple-2","language":"php","code":"// Avec données\nreturn $this->render("},
      {"type":"p","text":"'chemin/vers/template.html.twig', ["},
      {"type":"code","filename":"page-5-exemple-3","language":"php","code":"'donnee_pour_template' => $maDonnee\n]"},
      {"type":"code","filename":"page-5-exemple-4","language":"php","code":");"},
      {"type":"p","text":"render()  pointe automatiquement vers"},
      {"type":"p","text":"templates"},
      {"type":"p","text":"Redirection"},
      {"type":"p","text":"// Vers route statique"},
      {"type":"code","filename":"page-5-exemple-5","language":"php","code":"return $this->redirectToRoute('nom_route');"},
      {"type":"p","text":"// Vers route dynamique"},
      {"type":"code","filename":"page-5-exemple-6","language":"php","code":"return $this->redirectToRoute("},
      {"type":"p","text":"'nom_route', ["},
      {"type":"code","filename":"page-5-exemple-7","language":"php","code":"'param1' => 'valeur1',"},
      {"type":"code","filename":"page-5-exemple-8","language":"php","code":"'param2' => 'valeur2'\n]\n);"},
      {"type":"p","text":"Variables TWIG"},
      {"type":"code","filename":"page-5-exemple-9","language":"php","code":"{{ ma_variable }}\n{{ mon_tableau[0] }}, {{ mon_tableau['cle'] }} ou {{ mon_tableau\n{{ mon_objet.propriete }}"},
      {"type":"code","filename":"page-5-exemple-10","language":"php","code":"{% set a = ... %}  => déclarer une variable locale au template"},
      {"type":"p","text":"Dans"},
      {"type":"code","filename":"page-5-exemple-11","language":"php","code":"config/packages/twig.yaml  => variables globales custom"},
      {"type":"p","text":"Variable globale app  disponible ( app.user , app.session …)"},
      {"type":"image","src":"images/laconsole/symfony-p005.jpg","alt":"Page originale de Symfony.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"p","text":"Filtres TWIG"},
      {"type":"p","text":"Fonctions permettant de manipuler et de formater des données."},
      {"type":"code","filename":"page-6-exemple-1","language":"php","code":"{# Sans paramètre #}"},
      {"type":"code","filename":"page-6-exemple-2","language":"php","code":"{{ ma_variable|length }}"},
      {"type":"code","filename":"page-6-exemple-3","language":"php","code":"{# Avec paramètre #}"},
      {"type":"code","filename":"page-6-exemple-4","language":"php","code":"{{ ma_variable|date('d/m/Y') }}\n{{ ma_variable|replace({'06': '+33'}) }}"},
      {"type":"code","filename":"page-6-exemple-5","language":"php","code":"{# Filtres combinés #}"},
      {"type":"code","filename":"page-6-exemple-6","language":"php","code":"{{ ma_variable|upper|slice(0, 1) }}"},
      {"type":"p","text":"Des ﬁltres combinés s’exécutent dans l’ordre"},
      {"type":"p","text":"Héritage TWIG"},
      {"type":"p","text":"Réutilisation et extension de modèles de manière hiérarchique."},
      {"type":"code","filename":"page-6-exemple-7","language":"php","code":"{# base.html.twig (parent) #}"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-6-exemple-8","language":"php","code":"<html>"},
      {"type":"code","filename":"page-6-exemple-9","language":"php","code":"<head>"},
      {"type":"code","filename":"page-6-exemple-10","language":"php","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-6-exemple-11","language":"php","code":"<title>"},
      {"type":"code","filename":"page-6-exemple-12","language":"php","code":"{% block title %}Welcome!{% endblock %}\n</title>"},
      {"type":"code","filename":"page-6-exemple-13","language":"php","code":"</head>\n<body>"},
      {"type":"code","filename":"page-6-exemple-14","language":"php","code":"{% block body %}{% endblock %}"},
      {"type":"code","filename":"page-6-exemple-15","language":"php","code":"</body>"},
      {"type":"code","filename":"page-6-exemple-16","language":"php","code":"</html>"},
      {"type":"code","filename":"page-6-exemple-17","language":"php","code":"{# ma_page.html.twig (enfant) #}\n{% extends 'base.html.twig' %}"},
      {"type":"image","src":"images/laconsole/symfony-p006.jpg","alt":"Page originale de Symfony.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"code","filename":"page-7-exemple-1","language":"php","code":"{% block body %}"},
      {"type":"code","filename":"page-7-exemple-2","language":"php","code":"<h1>Ma page</h1>\n{% endblock %}"},
      {"type":"p","text":"Parent déﬁnit des blocs / l’enfant y insère du contenu"},
      {"type":"code","filename":"page-7-exemple-3","language":"php","code":"Héritage => extends  dans le template l’enfant"},
      {"type":"p","text":"parent()  injecte dans l’enfant le contenu du bloc parent"},
      {"type":"p","text":"Inclusion TWIG"},
      {"type":"p","text":"Inclusion d’un template dans un autre."},
      {"type":"code","filename":"page-7-exemple-4","language":"php","code":"{{ include '_header.html.twig' }}"},
      {"type":"code","filename":"page-7-exemple-5","language":"php","code":"{# Avec transmission de variables #}"},
      {"type":"code","filename":"page-7-exemple-6","language":"php","code":"{{ include '_header.html.twig' with { 'foo': 'bar' } }}"},
      {"type":"p","text":"Préﬁxer templates à inclure d’un _  (ex: _header.html.twig )"},
      {"type":"p","text":"include()  pointe automatiquement vers"},
      {"type":"p","text":"templates"},
      {"type":"p","text":"Liens entre pages"},
      {"type":"code","filename":"page-7-exemple-7","language":"php","code":"<a href=\"{{ path('nom_route') }}\">"},
      {"type":"code","filename":"page-7-exemple-8","language":"php","code":"Lien vers page statique\n</a>"},
      {"type":"code","filename":"page-7-exemple-9","language":"php","code":"<a href=\"{{ path('nom_route', { param1: 'valeur' }) }}\">"},
      {"type":"code","filename":"page-7-exemple-10","language":"php","code":"Lien vers page dynamique\n</a>"},
      {"type":"p","text":"Boucles TWIG"},
      {"type":"p","text":"Boucler sur des données."},
      {"type":"image","src":"images/laconsole/symfony-p007.jpg","alt":"Page originale de Symfony.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"code","filename":"page-8-exemple-1","language":"php","code":"{% for item in items %}"},
      {"type":"code","filename":"page-8-exemple-2","language":"php","code":"...\n{# Ici, variable \"loop\" exploitable #}\n{% else %}"},
      {"type":"code","filename":"page-8-exemple-3","language":"php","code":"{# Si le tableau \"items\" est vide... #}\n{% endfor %}"},
      {"type":"p","text":"loop.index  : indice de l’itération courante"},
      {"type":"p","text":"loop.length  : nombre d’itérations totales"},
      {"type":"p","text":"loop.first  : s’il s’agit de la 1ère itération"},
      {"type":"p","text":"loop.last  : s’il s’agit de la dernière itération"},
      {"type":"p","text":"Conditions TWIG"},
      {"type":"p","text":"Conditionner l’afﬁchage de balises."},
      {"type":"code","filename":"page-8-exemple-4","language":"php","code":"{% if ma_variable == 1 %}"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-8-exemple-5","language":"php","code":"{% elseif ma_variable == 2 %}"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-8-exemple-6","language":"php","code":"{% else %}"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-8-exemple-7","language":"php","code":"{% endif %}"},
      {"type":"p","text":"Lier des ressources statiques (CSS, JS, médias...)"},
      {"type":"code","filename":"page-8-exemple-8","language":"php","code":"{# Logo situé dans \"public/img/logo.png\" #}\n<img src=\"{{ asset('img/logo.png') }}\" alt=\"...\">"},
      {"type":"code","filename":"page-8-exemple-9","language":"php","code":"{# Fichier CSS situé dans \"public/css/app.css\" #}"},
      {"type":"code","filename":"page-8-exemple-10","language":"php","code":"<link href=\"{{ asset('css/app.css') }}\" rel=\"stylesheet\">"},
      {"type":"code","filename":"page-8-exemple-11","language":"php","code":"{# Fichier JS situé dans \"public/js/app.js\" #}\n<script src=\"{{ asset('js/app.js') }}\"></script>"},
      {"type":"image","src":"images/laconsole/symfony-p008.jpg","alt":"Page originale de Symfony.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"asset()  pointe automatiquement vers"},
      {"type":"p","text":"public"},
      {"type":"p","text":"Aﬃcher un formulaire"},
      {"type":"code","filename":"page-9-exemple-1","language":"php","code":"{# Affichage brut #}\nform(monForm)"},
      {"type":"code","filename":"page-9-exemple-2","language":"php","code":"{# Affichage sur-mesure (contrôle sur le balisage) #}"},
      {"type":"code","filename":"page-9-exemple-3","language":"php","code":"{{ form_start(monForm) }}"},
      {"type":"code","filename":"page-9-exemple-4","language":"php","code":"{# Champ personnalisé #}"},
      {"type":"code","filename":"page-9-exemple-5","language":"php","code":"<div class=\"form-item\">"},
      {"type":"code","filename":"page-9-exemple-6","language":"php","code":"{{ form_label(monForm.field1) }}"},
      {"type":"code","filename":"page-9-exemple-7","language":"php","code":"{{ form_widget(monForm.field1) }}"},
      {"type":"code","filename":"page-9-exemple-8","language":"php","code":"<span class=\"form-help\">"},
      {"type":"code","filename":"page-9-exemple-9","language":"php","code":"{{ form_help(monForm.field1) }}\n</span>"},
      {"type":"code","filename":"page-9-exemple-10","language":"php","code":"<div class=\"form-error\">"},
      {"type":"code","filename":"page-9-exemple-11","language":"php","code":"{{ form_errors(monForm.field1) }}"},
      {"type":"code","filename":"page-9-exemple-12","language":"php","code":"</div>"},
      {"type":"code","filename":"page-9-exemple-13","language":"php","code":"</div>"},
      {"type":"code","filename":"page-9-exemple-14","language":"php","code":"{# Champ non personnalisé #}"},
      {"type":"code","filename":"page-9-exemple-15","language":"php","code":"{{ form_row(monForm.field2) }}"},
      {"type":"code","filename":"page-9-exemple-16","language":"php","code":"{{ form_end(monForm) }}"},
      {"type":"p","text":"Dans"},
      {"type":"code","filename":"page-9-exemple-17","language":"php","code":"config/packages/twig.yaml  => customisation avec un thème"},
      {"type":"code","filename":"page-9-exemple-18","language":"php","code":"form_end(monForm, {'render_rest': false})  => n’afﬁche pas les champs omis"},
      {"type":"p","text":"Connexion à la BDD (.env)"},
      {"type":"code","filename":"page-9-exemple-19","language":"php","code":"{# MySQL #}"},
      {"type":"p","text":"DATABASE_URL=\"mysql://username:password@127.0.0.1:3306/db_name?s"},
      {"type":"image","src":"images/laconsole/symfony-p009.jpg","alt":"Page originale de Symfony.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"code","filename":"page-10-exemple-1","language":"php","code":"{# MariaDB #}"},
      {"type":"p","text":"DATABASE_URL=\"mysql://username:password@127.0.0.1:3307/db_name?s"},
      {"type":"code","filename":"page-10-exemple-2","language":"php","code":"{# PostgreSQL #}"},
      {"type":"p","text":"DATABASE_URL=\"postgresql://username:password@127.0.0.1:5432/db_n"},
      {"type":"p","text":"username  : nom d’utilisateur SGBD"},
      {"type":"p","text":"password  : mot de passe SGBD"},
      {"type":"code","filename":"page-10-exemple-3","language":"php","code":"127.0.0.1:3306  : adresse BDD ( 3306  => MySQL / 3307  => MariaDB / 5432  =>"},
      {"type":"p","text":"PostgreSQL)"},
      {"type":"p","text":"db_name  : nom de la BDD"},
      {"type":"p","text":"serverVersion  : taper SHOW GLOBAL VARIABLES LIKE '%version%'  dans SGBD"},
      {"type":"p","text":"Récupération (READ)"},
      {"type":"p","text":"#[Route("},
      {"type":"p","text":"'/entite',"},
      {"type":"p","text":"name: 'app_entite_list',\nmethods: ['GET']"},
      {"type":"p","text":")]"},
      {"type":"code","filename":"page-10-exemple-4","language":"php","code":"public function list("},
      {"type":"code","filename":"page-10-exemple-5","language":"php","code":"Request $request,\nEntityManagerInterface $em\n): Response {"},
      {"type":"code","filename":"page-10-exemple-6","language":"php","code":"$repository = $em->getRepository(Entite::class);\n$objets = $repository->findAll();\nreturn $this->render('...', ["},
      {"type":"code","filename":"page-10-exemple-7","language":"php","code":"'objets' => $objets\n]);\n}"},
      {"type":"p","text":"#[Route("},
      {"type":"code","filename":"page-10-exemple-8","language":"php","code":"'/entite/{id}',\nname: 'app_entite_show',\nmethods: ['GET']\n)]\npublic function show("},
      {"type":"image","src":"images/laconsole/symfony-p010.jpg","alt":"Page originale de Symfony.pdf - page 10"},
      {"type":"h","text":"Page 11"},
      {"type":"code","filename":"page-11-exemple-1","language":"php","code":"public function show("},
      {"type":"code","filename":"page-11-exemple-2","language":"php","code":"Request $request,"},
      {"type":"code","filename":"page-11-exemple-3","language":"php","code":"EntityManagerInterface $em,\nint $id"},
      {"type":"code","filename":"page-11-exemple-4","language":"php","code":"): Response {"},
      {"type":"code","filename":"page-11-exemple-5","language":"php","code":"$repository = $em->getRepository(Entite::class);\n$objet = $repository->find($id);"},
      {"type":"code","filename":"page-11-exemple-6","language":"php","code":"return $this->render('...', ["},
      {"type":"code","filename":"page-11-exemple-7","language":"php","code":"'objet' => $objet"},
      {"type":"code","filename":"page-11-exemple-8","language":"php","code":"]);\n}"},
      {"type":"p","text":"Ne pas oublier de use  les classes"},
      {"type":"code","filename":"page-11-exemple-9","language":"php","code":"Enregistrement (CREATE)"},
      {"type":"p","text":"#[Route("},
      {"type":"p","text":"'/entite/ajouter',"},
      {"type":"p","text":"name: 'app_entite_add',"},
      {"type":"p","text":"methods: ['GET', 'POST']"},
      {"type":"p","text":")]"},
      {"type":"code","filename":"page-11-exemple-10","language":"php","code":"public function create("},
      {"type":"code","filename":"page-11-exemple-11","language":"php","code":"Request $request,"},
      {"type":"code","filename":"page-11-exemple-12","language":"php","code":"EntityManagerInterface $em\n): Response {"},
      {"type":"code","filename":"page-11-exemple-13","language":"php","code":"$objet = new Entite();"},
      {"type":"code","filename":"page-11-exemple-14","language":"php","code":"$form = $this->createForm(Entite::class, $objet);"},
      {"type":"code","filename":"page-11-exemple-15","language":"php","code":"$form->handleRequest($request);"},
      {"type":"code","filename":"page-11-exemple-16","language":"php","code":"if ($form->isSubmitted() && $form->isValid()) {"},
      {"type":"code","filename":"page-11-exemple-17","language":"php","code":"$em->persist($objet);\n$em->flush();"},
      {"type":"code","filename":"page-11-exemple-18","language":"php","code":"return $this->redirectToRoute('...');\n}"},
      {"type":"code","filename":"page-11-exemple-19","language":"php","code":"return $this->render('...', ["},
      {"type":"code","filename":"page-11-exemple-20","language":"php","code":"'form' => $form"},
      {"type":"image","src":"images/laconsole/symfony-p011.jpg","alt":"Page originale de Symfony.pdf - page 11"},
      {"type":"h","text":"Page 12"},
      {"type":"code","filename":"page-12-exemple-1","language":"php","code":"}"},
      {"type":"p","text":"Ne pas oublier de use  les classes"},
      {"type":"code","filename":"page-12-exemple-2","language":"php","code":"Modiﬁcation (UPDATE)"},
      {"type":"p","text":"#[Route("},
      {"type":"code","filename":"page-12-exemple-3","language":"php","code":"'/entite/{id}/modifier',\nname: 'app_entite_edit',\nmethods: ['GET', 'POST']\n)]"},
      {"type":"code","filename":"page-12-exemple-4","language":"php","code":"public function update("},
      {"type":"code","filename":"page-12-exemple-5","language":"php","code":"Request $request,"},
      {"type":"code","filename":"page-12-exemple-6","language":"php","code":"EntityManagerInterface $em,\nint $id"},
      {"type":"code","filename":"page-12-exemple-7","language":"php","code":"): Response {"},
      {"type":"code","filename":"page-12-exemple-8","language":"php","code":"$repository = $em->getRepository(Entite::class);"},
      {"type":"code","filename":"page-12-exemple-9","language":"php","code":"$objet = $repository->find($id);"},
      {"type":"code","filename":"page-12-exemple-10","language":"php","code":"$form = $this->createForm(Entite::class, $objet);"},
      {"type":"code","filename":"page-12-exemple-11","language":"php","code":"$form->handleRequest($request);"},
      {"type":"code","filename":"page-12-exemple-12","language":"php","code":"if ($form->isSubmitted() && $form->isValid()) {"},
      {"type":"code","filename":"page-12-exemple-13","language":"php","code":"$em->flush();\nreturn $this->redirectToRoute('...');"},
      {"type":"code","filename":"page-12-exemple-14","language":"php","code":"}"},
      {"type":"code","filename":"page-12-exemple-15","language":"php","code":"return $this->render('...', ["},
      {"type":"code","filename":"page-12-exemple-16","language":"php","code":"'form' => $form\n]);"},
      {"type":"code","filename":"page-12-exemple-17","language":"php","code":"}"},
      {"type":"p","text":"Ne pas oublier de use  les classes"},
      {"type":"code","filename":"page-12-exemple-18","language":"php","code":"Suppression (DELETE)"},
      {"type":"image","src":"images/laconsole/symfony-p012.jpg","alt":"Page originale de Symfony.pdf - page 12"},
      {"type":"h","text":"Page 13"},
      {"type":"p","text":"#[Route("},
      {"type":"code","filename":"page-13-exemple-1","language":"php","code":"'/entite/{id}/supprimer',"},
      {"type":"p","text":"name: 'app_entite_delete',"},
      {"type":"code","filename":"page-13-exemple-2","language":"php","code":"methods: ['POST']\n)]\npublic function delete("},
      {"type":"code","filename":"page-13-exemple-3","language":"php","code":"Request $request,\nEntityManagerInterface $em,"},
      {"type":"code","filename":"page-13-exemple-4","language":"php","code":"int $id\n): Response {"},
      {"type":"code","filename":"page-13-exemple-5","language":"php","code":"$repository = $em->getRepository(Entite::class);\n$objet = $repository->find($id);"},
      {"type":"code","filename":"page-13-exemple-6","language":"php","code":"$em->remove($objet);\n$em->flush();\nreturn $this->redirectToRoute('...');"},
      {"type":"code","filename":"page-13-exemple-7","language":"php","code":"}"},
      {"type":"p","text":"Ne pas oublier de use  les classes"},
      {"type":"image","src":"images/laconsole/symfony-p013.jpg","alt":"Page originale de Symfony.pdf - page 13"},
      {"type":"h","text":"Page 14"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200"},
      {"type":"p","text":"laConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"Blog"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"image","src":"images/laconsole/symfony-p014.jpg","alt":"Page originale de Symfony.pdf - page 14"},
      {"type":"h","text":"Page 15"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-15-exemple-1","language":"php","code":"Symfony 6 › Architecture d'un"},
      {"type":"h","text":""},
      {"type":"h","text":"Projet"},
      {"type":"code","filename":"page-15-exemple-2","language":"php","code":"Pour bien appréhender l'architecture d'un projet Symfony, il est important de"},
      {"type":"p","text":"comprendre le rôle de chacun de ses dossiers et ﬁchiers principaux."},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-15-exemple-3","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 2. ARCHITECTURE D'UN PROJET"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Dossiers principaux"},
      {"type":"h","text":"bin"},
      {"type":"p","text":"Le dossier"},
      {"type":"h","text":"bin  contient des exécutables pour"},
      {"type":"h","text":"effectuer des opérations."},
      {"type":"p","text":"C’est notamment d’ici que viennent les commandes de la"},
      {"type":"code","filename":"page-15-exemple-4","language":"php","code":"console Symfony que l’on utilisera au cours du projet."},
      {"type":"p","text":"Nous n’irons jamais toucher à quoi que ce soit dans ce"},
      {"type":"image","src":"images/laconsole/symfony-p015.jpg","alt":"Page originale de Symfony.pdf - page 15"},
      {"type":"h","text":"Page 16"},
      {"type":"p","text":"dossier, vous pouvez l’oublier dans votre routine de"},
      {"type":"p","text":"développeur."},
      {"type":"h","text":"config"},
      {"type":"h","text":"Contient toute la conﬁguration de votre site (framework"},
      {"type":"code","filename":"page-16-exemple-1","language":"php","code":"Symfony + bundles)."},
      {"type":"h","text":"migrations"},
      {"type":"p","text":"Contient les différentes versions des schémas de notre"},
      {"type":"h","text":"application."},
      {"type":"p","text":"On y retrouve les scripts SQL permettant de générer une"},
      {"type":"p","text":"structure de données en correspondance avec nos entités"},
      {"type":"p","text":"(les objets stockés en base de données)."},
      {"type":"h","text":"public"},
      {"type":"h","text":"C’est la racine de notre serveur web."},
      {"type":"h","text":"Il contient le contrôleur frontal"},
      {"type":"p","text":"index.php . Il s’agit du"},
      {"type":"h","text":"point d’entrée de votre site. C’est le ﬁchier par lequel"},
      {"type":"p","text":"passent toutes vos pages."},
      {"type":"p","text":"Pour faire le parallèle avec vos expériences de développeur"},
      {"type":"p","text":"PHP, il s’agissait aussi du fameux"},
      {"type":"p","text":"index.php ."},
      {"type":"p","text":"Vous savez ? Lorsqu’on découvre qu’au lieu de dupliquer"},
      {"type":"p","text":"son code dans des pages différentes on l’inclut dans des"},
      {"type":"p","text":"ﬁchiers spéciﬁques que l’on appelle depuis un unique"},
      {"type":"p","text":"ﬁchier, le fameux index. On appelle cela : des pseudo-"},
      {"type":"image","src":"images/laconsole/symfony-p016.jpg","alt":"Page originale de Symfony.pdf - page 16"},
      {"type":"h","text":"Page 17"},
      {"type":"h","text":"frames."},
      {"type":"p","text":"Comme ceci, on appelait nos différentes pages toujours"},
      {"type":"p","text":"depuis"},
      {"type":"p","text":"index.php , mais en y faisant passer la page"},
      {"type":"p","text":"souhaitée en variable GET :"},
      {"type":"p","text":"http://localhost/index.php?"},
      {"type":"p","text":"page=contact"},
      {"type":"p","text":"Ce dossier contient également tous les ﬁchiers destinés à"},
      {"type":"p","text":"nos visiteurs : images, ﬁchiers CSS et JavaScript, etc."},
      {"type":"p","text":"C’est le seul répertoire qui devrait être accessible à nos"},
      {"type":"p","text":"visiteurs, d’où son nom : « public ». Les autres répertoires"},
      {"type":"p","text":"ne sont pas censés être accessibles (ce sont vos ﬁchiers de"},
      {"type":"p","text":"code source, ils sont personnels)."},
      {"type":"p","text":"Quand vous accédez à votre site avec l’url"},
      {"type":"p","text":"http://localhost:8000"},
      {"type":"code","filename":"page-17-exemple-1","language":"php","code":", Symfony va en fait se placer dans le"},
      {"type":"p","text":"dossier"},
      {"type":"p","text":"public  aﬁn de charger le ﬁchier"},
      {"type":"p","text":"index.php ."},
      {"type":"h","text":"src"},
      {"type":"h","text":"Contient le code source / le code métier propre à notre"},
      {"type":"p","text":"application. C’est dans ce dossier que nous allons passer le"},
      {"type":"p","text":"plus de temps."},
      {"type":"p","text":"Initialement il contient le ﬁchier"},
      {"type":"p","text":"Kernel.php  qui est le"},
      {"type":"p","text":"noyau à l’origine du fonctionnement du framework."},
      {"type":"h","text":"templates"},
      {"type":"h","text":"Contient les interfaces et éléments d’interfaces"},
      {"type":"p","text":"graphiques de notre site web."},
      {"type":"image","src":"images/laconsole/symfony-p017.jpg","alt":"Page originale de Symfony.pdf - page 17"},
      {"type":"h","text":"Page 18"},
      {"type":"p","text":"Le layout global de notre site web"},
      {"type":"h","text":"Les pages"},
      {"type":"p","text":"Les templates parts (entête, pied de page, sidebar…)"},
      {"type":"h","text":"tests"},
      {"type":"code","filename":"page-18-exemple-1","language":"php","code":"Tous les tests dans Symfony sont situés sous le répertoire"},
      {"type":"p","text":"test/  du projet."},
      {"type":"code","filename":"page-18-exemple-2","language":"php","code":"Dans Symfony et plus globalement en développement, on"},
      {"type":"h","text":"distingue 2 types de tests automatisés :"},
      {"type":"p","text":"Les tests unitaires : ils vériﬁent que chaque méthode"},
      {"type":"p","text":"et chaque fonction fonctionne correctement. Chaque"},
      {"type":"p","text":"test doit être aussi indépendant que possible des"},
      {"type":"p","text":"autres. Ils sont situés dans le sous-répertoire"},
      {"type":"p","text":"unit ."},
      {"type":"p","text":"Les tests fonctionnels : ils vériﬁent que l’application se"},
      {"type":"p","text":"comporte correctement dans son ensemble. Ils sont"},
      {"type":"p","text":"situés dans le sous-répertoire"},
      {"type":"p","text":"functional ."},
      {"type":"h","text":"translations"},
      {"type":"h","text":"Contient les ﬁchiers de traduction dans le cas de sites"},
      {"type":"p","text":"multilingues."},
      {"type":"code","filename":"page-18-exemple-3","language":"php","code":"var"},
      {"type":"h","text":"Contient les ﬁchiers de cache, les logs, et d’autres ﬁchiers"},
      {"type":"code","filename":"page-18-exemple-4","language":"php","code":"nécessaires au bon fonctionnement de Symfony."},
      {"type":"image","src":"images/laconsole/symfony-p018.jpg","alt":"Page originale de Symfony.pdf - page 18"},
      {"type":"h","text":"Page 19"},
      {"type":"p","text":"Ce dossier doit bien être accessible en écriture"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"pour que PHP puisse écrire dedans."},
      {"type":"h","text":"vendor"},
      {"type":"h","text":"Contient les bibliothèques externes et leurs dépendances"},
      {"type":"p","text":"que nous utilisons dans notre application (installées avec"},
      {"type":"code","filename":"page-19-exemple-1","language":"php","code":"Composer)."},
      {"type":"p","text":"C’est un ensemble de ﬁchiers de code, une sorte de boîte"},
      {"type":"p","text":"noire qui remplit une ou plusieurs fonctionnalités bien"},
      {"type":"p","text":"précises que nous allons pouvoir utiliser dans notre code."},
      {"type":"p","text":"Par exemple, la bibliothèque CKeditor permet de"},
      {"type":"p","text":"transformer un champ de saisie en éditeur\n. On"},
      {"type":"p","text":"WYSIWYG"},
      {"type":"h","text":"ne sait pas comment elle fonctionne (principe de la boîte"},
      {"type":"h","text":"noire), mais on sait comment s’en servir."},
      {"type":"code","filename":"page-19-exemple-2","language":"php","code":"Le framework Symfony lui même est une"},
      {"type":"p","text":"%"},
      {"type":"p","text":"bibliothèque."},
      {"type":"p","text":"Les dossiers qui nous intéressent principalement sont"},
      {"type":"p","text":"src ,"},
      {"type":"p","text":"templates  et"},
      {"type":"p","text":"config ."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-19-exemple-3","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"image","src":"images/laconsole/symfony-p019.jpg","alt":"Page originale de Symfony.pdf - page 19"},
      {"type":"h","text":"Page 20"},
      {"type":"h","text":"Fichiers à la racine"},
      {"type":"code","filename":"page-20-exemple-1","language":"php","code":"composer.json"},
      {"type":"p","text":"Le ﬁchier"},
      {"type":"code","filename":"page-20-exemple-2","language":"php","code":"composer.json  contient plusieurs"},
      {"type":"p","text":"informations sur le projet, dont la liste des librairies"},
      {"type":"h","text":"utilisées."},
      {"type":"code","filename":"page-20-exemple-3","language":"php","code":"Composer est ensuite capable de télécharger"},
      {"type":"h","text":"automatiquement ces librairies (et les dépendances"},
      {"type":"p","text":"associées) puis de générer un autoloader pour les utiliser"},
      {"type":"p","text":"simplement dans vos projets de site avec PHP."},
      {"type":"code","filename":"page-20-exemple-4","language":"php","code":"composer.json  est le ﬁchier de registre de"},
      {"type":"p","text":"%"},
      {"type":"p","text":"votre projet. C’est en quelques sortes son ADN."},
      {"type":"p","text":"“Pourquoi y a-t-il beaucoup plus de packages dans"},
      {"type":"code","filename":"page-20-exemple-5","language":"php","code":"vendor/symfony  que de packages requis dans"},
      {"type":"code","filename":"page-20-exemple-6","language":"php","code":"composer.json  ?”"},
      {"type":"code","filename":"page-20-exemple-7","language":"php","code":"Car Composer va aussi télécharger les dépendances de"},
      {"type":"p","text":"chacune de vos librairies. Vous vous retrouvez donc avec"},
      {"type":"p","text":"vos librairies, ainsi que les librairies de vos librairies…"},
      {"type":"code","filename":"page-20-exemple-8","language":"php","code":"composer.lock"},
      {"type":"code","filename":"page-20-exemple-9","language":"php","code":"composer.lock  indique les packages installés, en"},
      {"type":"p","text":"précisant le hash précis de la version. C’est une sorte de"},
      {"type":"image","src":"images/laconsole/symfony-p020.jpg","alt":"Page originale de Symfony.pdf - page 20"},
      {"type":"h","text":"Page 21"},
      {"type":"p","text":"snapshot de la version actuelle de votre projet."},
      {"type":"h","text":".env"},
      {"type":"code","filename":"page-21-exemple-1","language":"php","code":"Symfony, comme de nombreux autres frameworks possède"},
      {"type":"h","text":"de base 3 environnements de travail :"},
      {"type":"p","text":"1. Un environnement de développement (pour nous)"},
      {"type":"p","text":"2. Un environnement de test (pour nous)"},
      {"type":"p","text":"3. Un environnement de production (pour nos visiteurs)"},
      {"type":"p","text":"Les développeurs, testeurs et visiteurs n’attendent pas la"},
      {"type":"p","text":"même expérience sur un site web :"},
      {"type":"code","filename":"page-21-exemple-2","language":"php","code":"Barre de débogage Symfony uniquement en"},
      {"type":"p","text":"développement"},
      {"type":"p","text":"Adresse de la base de données variable selon"},
      {"type":"p","text":"l’environnement"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"Le ﬁchier"},
      {"type":"h","text":".env  contient les informations relatives à"},
      {"type":"h","text":"chaque environnement."},
      {"type":"p","text":"Pour spéciﬁer les informations de connexion à une"},
      {"type":"p","text":"base de données, vous pouvez les placer après"},
      {"type":"p","text":"DATABASE_URL"},
      {"type":"p","text":"Pour spéciﬁer les informations de connexion à un"},
      {"type":"p","text":"système de mail, vous pouvez les placer après"},
      {"type":"p","text":"MAILER_DSN"},
      {"type":"p","text":"Pour modiﬁer l’environnement de travail, après"},
      {"type":"p","text":"APP_ENV"},
      {"type":"image","src":"images/laconsole/symfony-p021.jpg","alt":"Page originale de Symfony.pdf - page 21"},
      {"type":"h","text":"Page 22"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"Il est même possible de créer votre propre"},
      {"type":"p","text":"%"},
      {"type":"p","text":"environnement de travail sur mesure (besoin"},
      {"type":"p","text":"\nSOMMAIRE"},
      {"type":"p","text":"avancé !)."},
      {"type":"p","text":"Dossiers principaux"},
      {"type":"p","text":"Vous remarquerez également la présence de"},
      {"type":"p","text":"bin"},
      {"type":"p","text":"%"},
      {"type":"p","text":"ﬁchiers YAML dédiés à la conﬁguration d’un"},
      {"type":"p","text":"conﬁg"},
      {"type":"h","text":"environnement Docker, si souhaité."},
      {"type":"p","text":"migrations"},
      {"type":"p","text":"public"},
      {"type":"p","text":"src"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"templates"},
      {"type":"p","text":"tests"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"translations"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"code","filename":"page-22-exemple-1","language":"php","code":"var"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"p","text":"vendor"},
      {"type":"code","filename":"page-22-exemple-2","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Fichiers à la racine"},
      {"type":"code","filename":"page-22-exemple-3","language":"php","code":"composer.json"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-22-exemple-4","language":"php","code":"composer.lock"},
      {"type":"p","text":".env"},
      {"type":"p","text":"Design Pattern MVC"},
      {"type":"h","text":"Design Pattern MVC"},
      {"type":"code","filename":"page-22-exemple-5","language":"php","code":"Symfony est un framework basé sur l’architecture MVC"},
      {"type":"p","text":"(Modèle Vue Contrôleur)."},
      {"type":"p","text":"Cette architecture est dite conceptuelle, elle détermine la"},
      {"type":"p","text":"mécanique avec laquelle les différents ﬁchiers de code"},
      {"type":"p","text":"s’exécutent."},
      {"type":"p","text":"L’architecture MVC est un patron de conception (ou «"},
      {"type":"p","text":"Design Pattern ») qui déﬁnit 3 grandes couches dans le"},
      {"type":"image","src":"images/laconsole/symfony-p022.jpg","alt":"Page originale de Symfony.pdf - page 22"},
      {"type":"h","text":"Page 23"},
      {"type":"p","text":"développement."},
      {"type":"p","text":"Vous retrouverez plus d’informations sur ce chapitre dédié"},
      {"type":"p","text":"à\n."},
      {"type":"p","text":"l’architecture MVC en PHP"},
      {"type":"h","text":"Schéma bilan"},
      {"type":"p","text":"1. Un visiteur demande la page"},
      {"type":"code","filename":"page-23-exemple-1","language":"php","code":"/formations/symfony/architecture-projet"},
      {"type":"p","text":"2. Cette requête est interceptée par le contrôleur frontal,"},
      {"type":"code","filename":"page-23-exemple-2","language":"php","code":"qui va charger le noyau de Symfony."},
      {"type":"p","text":"3. Le noyau va interroger notre routeur aﬁn de savoir"},
      {"type":"p","text":"quel contrôleur exécuter pour l’URL en question. Le"},
      {"type":"p","text":"routeur est un ﬁchier qui fait correspondre une URL"},
      {"type":"p","text":"avec un contrôleur, nous allons l’étudier sans plus"},
      {"type":"p","text":"attendre dans le chapitre suivant. Il retourne le"},
      {"type":"h","text":"contrôleur Formation ."},
      {"type":"p","text":"4. Le contrôleur demande au modèle Formation  toutes"},
      {"type":"p","text":"les informations du cours en question (récupérées en"},
      {"type":"h","text":"BD) puis les donne à la vue des détails d’un cours aﬁn"},
      {"type":"p","text":"de construire la page HTML à renvoyer au visiteur."},
      {"type":"p","text":"Rose  : le routeur nous permettra de conﬁgurer nos"},
      {"type":"p","text":"routes."},
      {"type":"p","text":"Violet  : les contrôleurs, modèles et vues seront"},
      {"type":"image","src":"images/laconsole/symfony-p023.jpg","alt":"Page originale de Symfony.pdf - page 23"},
      {"type":"h","text":"Page 24"},
      {"type":"p","text":"codés par nos soins."},
      {"type":"p","text":"Noir  : on ne s’occupe pas d’eux, ils font très bien le"},
      {"type":"p","text":"job sans nous."},
      {"type":"p","text":"Précédent :\n1.\nInstallation\n〈"},
      {"type":"p","text":"Suivant :\n3. Les\nBases\ndu\nRoutage"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"*"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques"},
      {"type":"p","text":"sont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier\npuis je décide de transmettre\ncette passion en école de dev et"},
      {"type":"p","text":"sur laConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},
      {"type":"p","text":"légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"développement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/symfony-p024.jpg","alt":"Page originale de Symfony.pdf - page 24"},
      {"type":"h","text":"Page 25"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-25-exemple-1","language":"php","code":"Symfony 6 › Créer des\nFormulaires (FormType)"},
      {"type":"h","text":""},
      {"type":"p","text":"La création et le traitement des formulaires est une tâche lourde et répétitive"},
      {"type":"code","filename":"page-25-exemple-2","language":"php","code":"qui va être grandement simpliﬁée par le composant Form de Symfony."},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-25-exemple-3","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/"},
      {"type":"p","text":"8. CRÉER DES FORMULAIRES (FORMTYPE)"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Form Types"},
      {"type":"h","text":"2 types de formulaires"},
      {"type":"p","text":"Avant toute chose, il est important de souligner que dans"},
      {"type":"code","filename":"page-25-exemple-4","language":"php","code":"une application Symfony, on distingue 2 types de"},
      {"type":"h","text":"formulaires :"},
      {"type":"p","text":"Formulaires simples"},
      {"type":"image","src":"images/laconsole/symfony-p025.jpg","alt":"Page originale de Symfony.pdf - page 25"},
      {"type":"h","text":"Page 26"},
      {"type":"p","text":"Formulaires d'entités"},
      {"type":"p","text":"Qu’il soit simple ou rattaché à une entité, un formulaire"},
      {"type":"p","text":"peut se construire :"},
      {"type":"p","text":"1. Directement depuis les contrôleurs"},
      {"type":"code","filename":"page-26-exemple-1","language":"php","code":"2. Depuis des classes dédiées, nommées « Form Type »"},
      {"type":"code","filename":"page-26-exemple-2","language":"php","code":"Symfony recommande de mettre le moins de"},
      {"type":"h","text":"logique possible dans les contrôleurs. C’est"},
      {"type":"p","text":"pourquoi il est préférable de déplacer les"},
      {"type":"p","text":"$"},
      {"type":"h","text":"formulaires vers des classes dédiées au lieu de les"},
      {"type":"p","text":"déﬁnir dans les actions du contrôleur. Aussi, les"},
      {"type":"p","text":"formulaires déﬁnis dans les classes peuvent être"},
      {"type":"p","text":"réutilisés dans plusieurs actions et services."},
      {"type":"p","text":"Je ne détaillerai donc la création d’un formulaire qu’avec la"},
      {"type":"p","text":"seconde option : les Form Types."},
      {"type":"code","filename":"page-26-exemple-3","language":"php","code":"Créer un Form Type"},
      {"type":"p","text":"Nous pourrions créer un formulaire manuellement mais"},
      {"type":"p","text":"cela serait dommage de se priver de notre bundle préféré…"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-26-exemple-4","language":"php","code":"symfony console make:form"},
      {"type":"p","text":"Après avoir tapé cette ligne, l’invite de commande vous"},
      {"type":"p","text":"demande :"},
      {"type":"code","filename":"page-26-exemple-5","language":"php","code":"1. Le nom de votre classe. Il doit se terminer par Type ."},
      {"type":"image","src":"images/laconsole/symfony-p026.jpg","alt":"Page originale de Symfony.pdf - page 26"},
      {"type":"h","text":"Page 27"},
      {"type":"p","text":"Exemple : ArticleType , ProductType , etc."},
      {"type":"p","text":"2. Vous avez ensuite la possibilité de rattacher ce"},
      {"type":"p","text":"formulaire à une entité. Si vous tapez sur ENTRER"},
      {"type":"p","text":"sans saisir d’entité de référence, alors ce formulaire ne"},
      {"type":"h","text":"contiendra qu’un champ de démonstration"},
      {"type":"p","text":"field_name  à supprimer pour y spéciﬁer les vôtres."},
      {"type":"p","text":"ContactType.php\ncopier"},
      {"type":"code","filename":"page-27-exemple-1","language":"php","code":"<?php"},
      {"type":"code","filename":"page-27-exemple-2","language":"php","code":"namespace App\\Form;"},
      {"type":"code","filename":"page-27-exemple-3","language":"php","code":"use Symfony\\Component\\Form\\AbstractType;"},
      {"type":"code","filename":"page-27-exemple-4","language":"php","code":"use Symfony\\Component\\Form\\FormBuilderIn"},
      {"type":"code","filename":"page-27-exemple-5","language":"php","code":"use Symfony\\Component\\OptionsResolver\\Op"},
      {"type":"code","filename":"page-27-exemple-6","language":"php","code":"class ContactType extends AbstractType {"},
      {"type":"code","filename":"page-27-exemple-7","language":"php","code":"public function buildForm(FormBuilde"},
      {"type":"code","filename":"page-27-exemple-8","language":"php","code":"$builder"},
      {"type":"p","text":"->add('field_name')"},
      {"type":"code","filename":"page-27-exemple-9","language":"php","code":";"},
      {"type":"code","filename":"page-27-exemple-10","language":"php","code":"}"},
      {"type":"code","filename":"page-27-exemple-11","language":"php","code":"public function configureOptions(Opt"},
      {"type":"code","filename":"page-27-exemple-12","language":"php","code":"$resolver->setDefaults(["},
      {"type":"p","text":"// Configure your form optio"},
      {"type":"code","filename":"page-27-exemple-13","language":"php","code":"]);"},
      {"type":"code","filename":"page-27-exemple-14","language":"php","code":"}"},
      {"type":"code","filename":"page-27-exemple-15","language":"php","code":"}"},
      {"type":"image","src":"images/laconsole/symfony-p027.jpg","alt":"Page originale de Symfony.pdf - page 27"},
      {"type":"h","text":"Page 28"},
      {"type":"p","text":"Les composants AbstractType , FormBuilderInterface"},
      {"type":"p","text":"et OptionsResolver  importés dans cette classe sont"},
      {"type":"h","text":"utilisés aﬁn de construire nos formulaires."},
      {"type":"p","text":"La méthode qui nous intéresse est buildForm() , c’est à"},
      {"type":"p","text":"l’intérieur que nous ajouterons des champs à notre"},
      {"type":"p","text":"formulaire."},
      {"type":"h","text":"Ajouter et supprimer des champs"},
      {"type":"p","text":"La méthode add()  permet d’ajouter des champs de"},
      {"type":"p","text":"formulaire. Le premier argument transmis à cette méthode"},
      {"type":"h","text":"indique le nom que l’on va donner à notre champ. Il a"},
      {"type":"p","text":"sensiblement le même rôle que l’attribut name  d’un"},
      {"type":"p","text":"formulaire HTML."},
      {"type":"p","text":"Je peux ainsi supprimer le champ de démonstration"},
      {"type":"p","text":"existant (en supprimant la méthode add()  associée) et"},
      {"type":"p","text":"ajouter les champs souhaités. Par exemple, pour un"},
      {"type":"p","text":"formulaire de contact :"},
      {"type":"p","text":"email  : email de la personne qui soumet le formulaire"},
      {"type":"p","text":"message  : contenu du message"},
      {"type":"image","src":"images/laconsole/symfony-p028.jpg","alt":"Page originale de Symfony.pdf - page 28"},
      {"type":"h","text":"Page 29"},
      {"type":"p","text":"ContactType.php\ncopier"},
      {"type":"code","filename":"page-29-exemple-1","language":"php","code":"public function buildForm(FormBuilde"},
      {"type":"code","filename":"page-29-exemple-2","language":"php","code":"$builder"},
      {"type":"p","text":"->add('email')"},
      {"type":"p","text":"->add('message')"},
      {"type":"code","filename":"page-29-exemple-3","language":"php","code":";"},
      {"type":"code","filename":"page-29-exemple-4","language":"php","code":"}"},
      {"type":"h","text":"Customiser les champs"},
      {"type":"code","filename":"page-29-exemple-5","language":"php","code":"Les champs ajoutés dans un Form Type sont par défaut"},
      {"type":"code","filename":"page-29-exemple-6","language":"php","code":"des balises <input type=\"text\"> . Si vous souhaitez"},
      {"type":"code","filename":"page-29-exemple-7","language":"php","code":"modiﬁer le type d’un champ, vous pourrez le préciser via"},
      {"type":"p","text":"un second argument à la méthode add() ."},
      {"type":"code","filename":"page-29-exemple-8","language":"php","code":"Symfony fournit, à travers des classes dédiées,"},
      {"type":"p","text":"une grande"},
      {"type":"p","text":"liste de types de champs"},
      {"type":"p","text":"qui peuvent être utilisés dans"},
      {"type":"p","text":"votre application. Ils devront alors être importés avec des"},
      {"type":"p","text":"use ."},
      {"type":"p","text":"ContactType.php\ncopier"},
      {"type":"code","filename":"page-29-exemple-9","language":"php","code":"use Symfony\\Component\\Form\\Extension\\Cor"},
      {"type":"code","filename":"page-29-exemple-10","language":"php","code":"use Symfony\\Component\\Form\\Extension\\Cor"},
      {"type":"code","filename":"page-29-exemple-11","language":"php","code":"use Symfony\\Component\\Form\\Extension\\Cor"},
      {"type":"image","src":"images/laconsole/symfony-p029.jpg","alt":"Page originale de Symfony.pdf - page 29"},
      {"type":"h","text":"Page 30"},
      {"type":"p","text":"ContactType.php\ncopier"},
      {"type":"code","filename":"page-30-exemple-1","language":"php","code":"public function buildForm(FormBuilderInt"},
      {"type":"code","filename":"page-30-exemple-2","language":"php","code":"$builder"},
      {"type":"code","filename":"page-30-exemple-3","language":"php","code":"->add('email', EmailType::class)"},
      {"type":"p","text":"->add('message', TextareaType::c"},
      {"type":"code","filename":"page-30-exemple-4","language":"php","code":"->add('save', SubmitType::class)"},
      {"type":"code","filename":"page-30-exemple-5","language":"php","code":";"},
      {"type":"code","filename":"page-30-exemple-6","language":"php","code":"}"},
      {"type":"p","text":"Vous voyez que dans cet exemple nous avons ajouté un"},
      {"type":"p","text":"champ nommé save  qui est en fait le bouton de"},
      {"type":"p","text":"soumission de notre formulaire."},
      {"type":"p","text":"Il sera aussi également possible d’ajouter ce"},
      {"type":"p","text":"$"},
      {"type":"p","text":"bouton de soumission du côté de notre template"},
      {"type":"p","text":"HTML."},
      {"type":"p","text":"La méthode add()  possède un troisième argument"},
      {"type":"p","text":"permettant de spéciﬁer un tableau d’options pour notre"},
      {"type":"p","text":"champ. Il existe de\n dans"},
      {"type":"p","text":"nombreuses options de champs"},
      {"type":"code","filename":"page-30-exemple-7","language":"php","code":"Symfony. Il est par exemple possible de modiﬁer le label"},
      {"type":"p","text":"(par défaut déﬁni selon le nom du champ) ou de déﬁnir un"},
      {"type":"p","text":"message d’aide s’afﬁchant sous le champ."},
      {"type":"image","src":"images/laconsole/symfony-p030.jpg","alt":"Page originale de Symfony.pdf - page 30"},
      {"type":"h","text":"Page 31"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-31-exemple-1","language":"php","code":"public function buildForm(FormBuilde"},
      {"type":"code","filename":"page-31-exemple-2","language":"php","code":"$builder"},
      {"type":"code","filename":"page-31-exemple-3","language":"php","code":"->add('email', EmailType::class,"},
      {"type":"p","text":"->add('message', TextareaType::c"},
      {"type":"code","filename":"page-31-exemple-4","language":"php","code":"->add('save', SubmitType::class,"},
      {"type":"code","filename":"page-31-exemple-5","language":"php","code":";"},
      {"type":"code","filename":"page-31-exemple-6","language":"php","code":"}"},
      {"type":"p","text":"Si vous rattachez le formulaire à une entité, alors ses"},
      {"type":"h","text":"champs seront automatiquement mappés aux propriétés"},
      {"type":"p","text":"de l’entité en question. Mais il est toujours possible de les"},
      {"type":"p","text":"spéciﬁer manuellement en second argument de la"},
      {"type":"p","text":"méthode add() ."},
      {"type":"p","text":"Aussi, avec data_class  il est spéciﬁé que le formulaire"},
      {"type":"h","text":"devra mapper les données saisies au sein d’une entité."},
      {"type":"p","text":"ArticleType.php\ncopier"},
      {"type":"code","filename":"page-31-exemple-7","language":"php","code":"$resolver->setDefaults(["},
      {"type":"code","filename":"page-31-exemple-8","language":"php","code":"'data_class' => Article::class,"},
      {"type":"code","filename":"page-31-exemple-9","language":"php","code":"]);"},
      {"type":"p","text":"Voici un exemple de formulaire nommé ArticleType ,"},
      {"type":"p","text":"basé sur une entité Article , déﬁnie par un titre, une"},
      {"type":"h","text":"description, un contenu et une date de publication :"},
      {"type":"image","src":"images/laconsole/symfony-p031.jpg","alt":"Page originale de Symfony.pdf - page 31"},
      {"type":"h","text":"Page 32"},
      {"type":"p","text":"ArticleType.php\ncopier"},
      {"type":"code","filename":"page-32-exemple-1","language":"php","code":"namespace App\\Form;"},
      {"type":"code","filename":"page-32-exemple-2","language":"php","code":"use App\\Entity\\Article;"},
      {"type":"code","filename":"page-32-exemple-3","language":"php","code":"use Symfony\\Component\\Form\\AbstractType;"},
      {"type":"code","filename":"page-32-exemple-4","language":"php","code":"use Symfony\\Component\\Form\\FormBuilderIn"},
      {"type":"code","filename":"page-32-exemple-5","language":"php","code":"use Symfony\\Component\\OptionsResolver\\Op"},
      {"type":"code","filename":"page-32-exemple-6","language":"php","code":"use Symfony\\Component\\Form\\Extension\\Cor"},
      {"type":"code","filename":"page-32-exemple-7","language":"php","code":"class ArticleType extends AbstractType {"},
      {"type":"code","filename":"page-32-exemple-8","language":"php","code":"public function buildForm(FormBuilde"},
      {"type":"code","filename":"page-32-exemple-9","language":"php","code":"$builder"},
      {"type":"p","text":"->add('title')"},
      {"type":"p","text":"->add('content')"},
      {"type":"p","text":"->add('description')"},
      {"type":"p","text":"->add('save', SubmitType::cl"},
      {"type":"code","filename":"page-32-exemple-10","language":"php","code":";"},
      {"type":"code","filename":"page-32-exemple-11","language":"php","code":"}"},
      {"type":"code","filename":"page-32-exemple-12","language":"php","code":"public function configureOptions(Opt"},
      {"type":"code","filename":"page-32-exemple-13","language":"php","code":"$resolver->setDefaults(["},
      {"type":"code","filename":"page-32-exemple-14","language":"php","code":"'data_class' => Article::cla"},
      {"type":"code","filename":"page-32-exemple-15","language":"php","code":"]);"},
      {"type":"code","filename":"page-32-exemple-16","language":"php","code":"}"},
      {"type":"code","filename":"page-32-exemple-17","language":"php","code":"}"},
      {"type":"image","src":"images/laconsole/symfony-p032.jpg","alt":"Page originale de Symfony.pdf - page 32"},
      {"type":"h","text":"Page 33"},
      {"type":"p","text":"Lorsque nous stockons par exemple la date de"},
      {"type":"p","text":"publication d’un contenu, nous ne souhaitons pas"},
      {"type":"p","text":"que l’utilisateur la saisisse, mais bien qu’elle soit"},
      {"type":"p","text":"automatiquement enregistrée. Vous remarquez"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"que j’ai supprimé en conséquence le champ"},
      {"type":"p","text":"publishedAt , qui ne doit en aucun cas être saisi"},
      {"type":"p","text":"manuellement par l’utilisateur, mais bien déﬁni à"},
      {"type":"p","text":"l’enregistrement au niveau de la méthode de"},
      {"type":"p","text":"contrôleur."},
      {"type":"p","text":"Je ne rentrerai pas davantage dans les détails de la"},
      {"type":"p","text":"conﬁguration des Form Types, mais vous trouverez ici"},
      {"type":"p","text":"toutes les informations pour les enrichir"},
      {"type":"p","text":"."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-33-exemple-1","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Etape 1 : Construire le"},
      {"type":"h","text":"formulaire"},
      {"type":"h","text":"Création du formulaire"},
      {"type":"p","text":"Nos champs étant déﬁnis dans une classe à part, il est"},
      {"type":"image","src":"images/laconsole/symfony-p033.jpg","alt":"Page originale de Symfony.pdf - page 33"},
      {"type":"h","text":"Page 34"},
      {"type":"h","text":"temps de construire notre formulaire depuis notre"},
      {"type":"p","text":"contrôleur. Pour cela, on utilisera la méthode"},
      {"type":"p","text":"createForm() ."},
      {"type":"code","filename":"page-34-exemple-1","language":"php","code":"Pour construire une formulaire basé sur un Form Type, il"},
      {"type":"p","text":"faut avant toute chose importer le formulaire en question"},
      {"type":"p","text":"dans notre contrôleur."},
      {"type":"p","text":"BlogController.php\ncopier"},
      {"type":"code","filename":"page-34-exemple-2","language":"php","code":"use App\\Form\\ArticleType;"},
      {"type":"p","text":"Ensuite, nous allons utiliser la méthode createForm() ,"},
      {"type":"p","text":"héritée d’ AbstractController  pour construire le"},
      {"type":"p","text":"formulaire. On renseignera dans un premier argument la"},
      {"type":"code","filename":"page-34-exemple-3","language":"php","code":"classe du Form Type à utiliser pour la construction."},
      {"type":"p","text":"BlogController.php\ncopier"},
      {"type":"code","filename":"page-34-exemple-4","language":"php","code":"$form = $this->createForm(ArticleType::c"},
      {"type":"p","text":"Si le formulaire est lié à une entité, il faudra également y"},
      {"type":"p","text":"renseigner un second argument aﬁn de spéciﬁer un objet à"},
      {"type":"p","text":"hydrater. Hydrater un objet signiﬁe « remplir ses propriétés"},
      {"type":"p","text":"avec les données saisies par un utilisateur » (généralement"},
      {"type":"p","text":"via un formulaire)."},
      {"type":"p","text":"Cet objet va se synchroniser avec les champs du"},
      {"type":"p","text":"formulaire."},
      {"type":"p","text":"Formulaire d'enregistrement"},
      {"type":"p","text":"Si on souhaite enregistrer une ressource en BDD, alors"},
      {"type":"image","src":"images/laconsole/symfony-p034.jpg","alt":"Page originale de Symfony.pdf - page 34"},
      {"type":"h","text":"Page 35"},
      {"type":"p","text":"on instanciera un objet vide à partir d’une entité."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-35-exemple-1","language":"php","code":"$article = new Article(); // Il faut p"},
      {"type":"code","filename":"page-35-exemple-2","language":"php","code":"$form = $this->createForm(ArticleType:"},
      {"type":"p","text":"Formulaire d'édition"},
      {"type":"p","text":"Si on souhaite éditer une ressource en BDD, alors on"},
      {"type":"p","text":"récupèrera un objet existant via le repository. Cela aura"},
      {"type":"p","text":"pour effet de préremplir les champs."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-35-exemple-3","language":"php","code":"$article = $articleRepository->find($i"},
      {"type":"code","filename":"page-35-exemple-4","language":"php","code":"$form = $this->createForm(ArticleType:"},
      {"type":"h","text":"Transmission du formulaire aux templates"},
      {"type":"p","text":"Pour transmettre un formulaire à un template, on"},
      {"type":"p","text":"procédera classiquement en ajoutant un second argument"},
      {"type":"p","text":"à la méthode render() ."},
      {"type":"p","text":"Cette méthode convertit notre objet de formulaire en un"},
      {"type":"h","text":"objet qui aura une représentation visuelle de notre"},
      {"type":"p","text":"formulaire."},
      {"type":"image","src":"images/laconsole/symfony-p035.jpg","alt":"Page originale de Symfony.pdf - page 35"},
      {"type":"h","text":"Page 36"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name:"},
      {"type":"code","filename":"page-36-exemple-1","language":"php","code":"public function addArticle() {"},
      {"type":"code","filename":"page-36-exemple-2","language":"php","code":"$article = new Article();"},
      {"type":"code","filename":"page-36-exemple-3","language":"php","code":"$form = $this->createForm(ArticleTyp"},
      {"type":"code","filename":"page-36-exemple-4","language":"php","code":"return $this->render('blog/add_artic"},
      {"type":"code","filename":"page-36-exemple-5","language":"php","code":"'form' => $form"},
      {"type":"code","filename":"page-36-exemple-6","language":"php","code":"]);"},
      {"type":"code","filename":"page-36-exemple-7","language":"php","code":"}"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-36-exemple-8","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Etape 2 : A!cher un"},
      {"type":"h","text":"formulaire"},
      {"type":"h","text":"Fonction form()"},
      {"type":"p","text":"Dès lors que le formulaire a été transmis à la vue, on"},
      {"type":"p","text":"pourra l’afﬁcher avec la fonction Twig form() . Cette"},
      {"type":"image","src":"images/laconsole/symfony-p036.jpg","alt":"Page originale de Symfony.pdf - page 36"},
      {"type":"h","text":"Page 37"},
      {"type":"p","text":"fonction prendra pour argument la variable Twig contenant"},
      {"type":"p","text":"le formulaire."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-37-exemple-1","language":"php","code":"{{ form(form) }}"},
      {"type":"p","text":"C’est si simple que vous vous demandez peut-être"},
      {"type":"p","text":"comment nous allons pouvoir spéciﬁer vers quelle page"},
      {"type":"p","text":"pointe le formulaire une fois soumis (l’attribut HTML"},
      {"type":"p","text":"action ) ainsi que la méthode avec laquelle nous"},
      {"type":"p","text":"souhaitons envoyer les données (l’attribut HTML method )"},
      {"type":"p","text":"?"},
      {"type":"h","text":"Notez que par défaut l’URL cible est la même que la page"},
      {"type":"h","text":"qui afﬁche le formulaire, et la méthode du formulaire est"},
      {"type":"p","text":"en POST. Cela nous convient la plupart du temps."},
      {"type":"p","text":"Il est cependant tout à fait possible de les modiﬁer,"},
      {"type":"p","text":"notamment\n pour le formulaire"},
      {"type":"p","text":"en spéciﬁant des options"},
      {"type":"p","text":"(attributs action , method …), à travers un troisième"},
      {"type":"p","text":"argument de la méthode createForm() ."},
      {"type":"h","text":"Customisation"},
      {"type":"p","text":"Le formulaire généré précédemment est :"},
      {"type":"h","text":"1. Assez vilain"},
      {"type":"h","text":"2. Pas personnalisable"},
      {"type":"p","text":"Vous vous doutez bien que TWIG a pensé à tout, alors"},
      {"type":"p","text":"place à la customisation !"},
      {"type":"image","src":"images/laconsole/symfony-p037.jpg","alt":"Page originale de Symfony.pdf - page 37"},
      {"type":"h","text":"Page 38"},
      {"type":"h","text":"Thème CSS"},
      {"type":"p","text":"Un thème de formulaire est un gabarit qui contient le code"},
      {"type":"p","text":"responsable de l’afﬁchage de vos formulaires. C’est lui qui"},
      {"type":"h","text":"va déﬁnir la mise en forme des différents types de champs"},
      {"type":"p","text":"(textes, checkbox, boutons radio…)."},
      {"type":"p","text":"Par défaut, c’est le ﬁchier"},
      {"type":"p","text":"form_div_layout.html.twig  situé dans le"},
      {"type":"p","text":"dossier"},
      {"type":"code","filename":"page-38-exemple-1","language":"php","code":"vendor/symfony/twig-"},
      {"type":"p","text":"$"},
      {"type":"p","text":"bridge/Resources/views/Form  qui joue ce rôle."},
      {"type":"p","text":"Mais vous avez peut-être remarqué qu’il n’est pas"},
      {"type":"p","text":"tout seul : Bootstrap, Foundation et d’autres"},
      {"type":"p","text":"frameworks CSS sont aussi de la partie."},
      {"type":"p","text":"Pour activer un de ces thèmes, il faut se rendre dans le"},
      {"type":"p","text":"ﬁchier"},
      {"type":"p","text":"config/packages/twig.yaml , et ajouter le"},
      {"type":"p","text":"code suivant :"},
      {"type":"p","text":"conﬁg/packages/twig.yaml\ncopier"},
      {"type":"p","text":"twig:"},
      {"type":"p","text":"# ..."},
      {"type":"p","text":"form_themes:"},
      {"type":"p","text":"- 'bootstrap_5_layout.html.twig'"},
      {"type":"p","text":"Assurez vous d’avoir lié les sources du framework"},
      {"type":"p","text":"$"},
      {"type":"p","text":"que vous utilisez dans votre balise head ."},
      {"type":"h","text":"Fonctions Twig"},
      {"type":"image","src":"images/laconsole/symfony-p038.jpg","alt":"Page originale de Symfony.pdf - page 38"},
      {"type":"h","text":"Page 39"},
      {"type":"p","text":"Tout à l’heure nous avions vu qu’il était possible d’afﬁcher"},
      {"type":"p","text":"notre formulaire avec la seule fonction TWIG form() . En"},
      {"type":"p","text":"réalité, il en existe de nombreuses autres qui permettent"},
      {"type":"p","text":"de customiser nos champs."},
      {"type":"h","text":"Ouverture et fermeture"},
      {"type":"p","text":"La première chose à faire lorsque vous customisez votre"},
      {"type":"p","text":"formulaire est d’appeler les fonctions form_start()  et"},
      {"type":"p","text":"form_end()  qui vont respectivement ouvrir et fermer le"},
      {"type":"p","text":"formulaire."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-39-exemple-1","language":"php","code":"{{ form_start(form) }}"},
      {"type":"code","filename":"page-39-exemple-2","language":"php","code":"{# Customisation du formulaire ... #"},
      {"type":"code","filename":"page-39-exemple-3","language":"php","code":"{{ form_end(form) }}"},
      {"type":"h","text":"Label"},
      {"type":"p","text":"Par défaut, le champ est accompagné d’un label"},
      {"type":"h","text":"correspondant au nom du champ spéciﬁé lors de la"},
      {"type":"p","text":"création du formulaire, mais en version humanisée. «"},
      {"type":"p","text":"phoneNumber » deviendrait « Phone Number ». Vous"},
      {"type":"p","text":"pouvez l’afﬁcher grâce à la fonction form_label()  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-39-exemple-4","language":"php","code":"{{ form_label(form.phoneNumber) }}"},
      {"type":"p","text":"En revanche, si vous souhaitez le modiﬁer, vous pouvez"},
      {"type":"p","text":"également le faire en ajoutant un argument à cette"},
      {"type":"p","text":"fonction :"},
      {"type":"image","src":"images/laconsole/symfony-p039.jpg","alt":"Page originale de Symfony.pdf - page 39"},
      {"type":"h","text":"Page 40"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-40-exemple-1","language":"php","code":"{{ form_label(form.phoneNumber, 'Numéro"},
      {"type":"p","text":"Notez que vous auriez également pu modiﬁer ce"},
      {"type":"p","text":"$"},
      {"type":"p","text":"label lors de la création de votre champ avec la"},
      {"type":"code","filename":"page-40-exemple-2","language":"php","code":"méthode add()  du Form Type."},
      {"type":"h","text":"Widget"},
      {"type":"p","text":"Pour afﬁcher le champ (input, bouton, liste déroulante,"},
      {"type":"p","text":"etc.), on fait appel à la fonction form_widget()  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-40-exemple-3","language":"php","code":"{{ form_widget(form.phoneNumber) }}"},
      {"type":"p","text":"Il est possible d’ajouter des attributs HTML via un second"},
      {"type":"p","text":"argument à cette fonction :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-40-exemple-4","language":"php","code":"{{ form_widget(form.phoneNumber, { 'attr"},
      {"type":"p","text":"On l’utilise très souvent pour y ajouter des classes, comme"},
      {"type":"p","text":"dans cet exemple."},
      {"type":"h","text":"Help"},
      {"type":"code","filename":"page-40-exemple-5","language":"php","code":"Si vous avez déﬁni dans votre Form Type, un message"},
      {"type":"p","text":"d’aide comme ceci :"},
      {"type":"image","src":"images/laconsole/symfony-p040.jpg","alt":"Page originale de Symfony.pdf - page 40"},
      {"type":"h","text":"Page 41"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-41-exemple-1","language":"php","code":"$builder->add('zipCode', null, ["},
      {"type":"code","filename":"page-41-exemple-2","language":"php","code":"'help' => 'Votre code postal de nais"},
      {"type":"code","filename":"page-41-exemple-3","language":"php","code":"]);"},
      {"type":"p","text":"Alors, vous pourrez y accéder depuis votre formulaire avec"},
      {"type":"p","text":"la fonction form_help()  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-41-exemple-4","language":"php","code":"{{ form_help(form.phoneNumber) }}"},
      {"type":"h","text":"Errors"},
      {"type":"h","text":"Il est possible d’afﬁcher les erreurs rencontrées lors de la"},
      {"type":"p","text":"soumission d’un formulaire avec la fonction"},
      {"type":"p","text":"form_errors() ."},
      {"type":"p","text":"Ces erreurs peuvent toutes être afﬁchées à un endroit que"},
      {"type":"p","text":"vous allez déﬁnir de manière globale pour le formulaire, en"},
      {"type":"p","text":"précisant en argument le formulaire tout entier :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-41-exemple-5","language":"php","code":"{{ form_errors(form) }}"},
      {"type":"p","text":"Ou bien vous pouvez décider de les rattacher à un champ"},
      {"type":"p","text":"précis :"},
      {"type":"image","src":"images/laconsole/symfony-p041.jpg","alt":"Page originale de Symfony.pdf - page 41"},
      {"type":"h","text":"Page 42"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-42-exemple-1","language":"php","code":"{{ form_errors(form.phoneNumber) }}"},
      {"type":"h","text":"Row"},
      {"type":"p","text":"Les 4 fonctions Twig form_label , form_widget ,"},
      {"type":"p","text":"form_help  et form_errors  nous offrent une"},
      {"type":"p","text":"personnalisation poussée de l’afﬁchage de nos formulaires."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-42-exemple-2","language":"php","code":"<i class=\"fas fa-phone\"></i>"},
      {"type":"code","filename":"page-42-exemple-3","language":"php","code":"{{ form_label(form.phoneNumber) }}"},
      {"type":"code","filename":"page-42-exemple-4","language":"php","code":"{{ form_widget(form.phoneNumber) }}"},
      {"type":"code","filename":"page-42-exemple-5","language":"php","code":"<span class=\"form-help\">"},
      {"type":"code","filename":"page-42-exemple-6","language":"php","code":"{{ form_help(form.phoneNumber) }}"},
      {"type":"code","filename":"page-42-exemple-7","language":"php","code":"</span>"},
      {"type":"code","filename":"page-42-exemple-8","language":"php","code":"<div class=\"form-error\">"},
      {"type":"code","filename":"page-42-exemple-9","language":"php","code":"{{ form_errors(form.phoneNumber) }}"},
      {"type":"code","filename":"page-42-exemple-10","language":"php","code":"</div>"},
      {"type":"p","text":"Ici, cela nous permet par exemple de bénéﬁcier de"},
      {"type":"p","text":"wrappers pour notre message d’aide et nos messages"},
      {"type":"p","text":"d’erreur potentiels, ainsi que d’ajouter une icône"},
      {"type":"p","text":"FontAwesome juste avant le label."},
      {"type":"p","text":"En revanche, si nous ne souhaitons pas avoir une telle"},
      {"type":"p","text":"personnalisation pour d’autres groupes de champs, alors le"},
      {"type":"p","text":"fait d’appeler autant de fonctions Twig peut s’avérer lourd."},
      {"type":"p","text":"Heureusement, la fonction form_row()  est là pour nous."},
      {"type":"image","src":"images/laconsole/symfony-p042.jpg","alt":"Page originale de Symfony.pdf - page 42"},
      {"type":"h","text":"Page 43"},
      {"type":"p","text":"Cette fonction est un condensé des fonctions form_label ,"},
      {"type":"p","text":"form_widget , form_help  et form_errors ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-43-exemple-1","language":"php","code":"{{ form_row(form.phoneNumber) }}"},
      {"type":"p","text":"Si vous souhaitez ne changer qu’un label, cela sera aussi"},
      {"type":"p","text":"possible en ajoutant un argument à cette fonction, sur le"},
      {"type":"p","text":"même modèle que form_label()  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-43-exemple-2","language":"php","code":"{{ form_row(form.phoneNumber, {'label':"},
      {"type":"h","text":"Rest"},
      {"type":"h","text":"Attention, si vous n’afﬁchez pas vous-même tous les"},
      {"type":"p","text":"champs de votre formulaire, la fonction form_end()  s’en"},
      {"type":"p","text":"chargera pour vous. Pour cela elle fera elle-même appel à"},
      {"type":"p","text":"la fonction form_rest()  :"},
      {"type":"image","src":"images/laconsole/symfony-p043.jpg","alt":"Page originale de Symfony.pdf - page 43"},
      {"type":"h","text":"Page 44"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-44-exemple-1","language":"php","code":"{{ form_rest(form) }}"},
      {"type":"p","text":"Cette fonction est utile pour faire apparaître des champs"},
      {"type":"h","text":"que vous auriez oublié d’afﬁcher ou encore pour écrire"},
      {"type":"h","text":"dans la page vos champs cachés. En revanche, si vous ne"},
      {"type":"p","text":"souhaitez pas les afﬁcher pour une raison valable, vous"},
      {"type":"p","text":"pouvez alors le préciser de cette manière :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-44-exemple-2","language":"php","code":"{{ form_end(form, {'render_rest': false}"},
      {"type":"p","text":"Si besoin, vous trouverez ce dont je vous ai parlé dans"},
      {"type":"p","text":"cette section, de manière plus approfondie, dans la"},
      {"type":"p","text":"documentation ofﬁcielle"},
      {"type":"p","text":"."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-44-exemple-3","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Etape 3 : Traitement du"},
      {"type":"h","text":"formulaire"},
      {"type":"image","src":"images/laconsole/symfony-p044.jpg","alt":"Page originale de Symfony.pdf - page 44"},
      {"type":"h","text":"Page 45"},
      {"type":"p","text":"On sait maintenant créer nos formulaires dans des ﬁchiers"},
      {"type":"p","text":"spéciﬁques, les construire dans nos contrôleurs, puis les"},
      {"type":"p","text":"afﬁcher dans nos templates… mais il nous manque le plus"},
      {"type":"h","text":"important : le traitement des données soumises."},
      {"type":"p","text":"Faut-il envoyer un mail ? Enregistrer une entité ? Nous"},
      {"type":"p","text":"allons voir comment le déﬁnir."},
      {"type":"h","text":"Soumission du formulaire"},
      {"type":"code","filename":"page-45-exemple-1","language":"php","code":"Symfony recommande d’écrire le code qui va"},
      {"type":"p","text":"permettre de manipuler le formulaire dans la"},
      {"type":"p","text":"$"},
      {"type":"p","text":"même méthode de contrôleur que celle qui le"},
      {"type":"p","text":"construit et l’afﬁche."},
      {"type":"code","filename":"page-45-exemple-2","language":"php","code":"Par défaut, un formulaire Symfony envoie les données à la"},
      {"type":"p","text":"même URL que celle qui l’afﬁche. La méthode de"},
      {"type":"p","text":"contrôleur responsable de la construction du formulaire"},
      {"type":"p","text":"sera ainsi la même que celle en charge de son traitement."},
      {"type":"p","text":"Il va donc falloir différencier dans notre méthode le fait"},
      {"type":"h","text":"qu’on souhaite afﬁcher notre formulaire ou le traiter."},
      {"type":"p","text":"En PHP natif, on avait tendance à dire :"},
      {"type":"p","text":"Si la route est appelée en GET , alors je construis et"},
      {"type":"p","text":"afﬁche le formulaire."},
      {"type":"p","text":"Sinon, si la route est appelée en POST , alors je traite"},
      {"type":"p","text":"les données."},
      {"type":"code","filename":"page-45-exemple-3","language":"php","code":"Côté Symfony, on fera sensiblement la même chose, mais"},
      {"type":"p","text":"en passant par un intermédiaire : la méthode"},
      {"type":"image","src":"images/laconsole/symfony-p045.jpg","alt":"Page originale de Symfony.pdf - page 45"},
      {"type":"h","text":"Page 46"},
      {"type":"p","text":"handleRequest() ."},
      {"type":"p","text":"La méthode handleRequest()  va être appelée dans notre"},
      {"type":"h","text":"formulaire aﬁn de lire les données de la variable"},
      {"type":"code","filename":"page-46-exemple-1","language":"php","code":"superglobale PHP concernée (c’est-à-dire $_POST  ou"},
      {"type":"code","filename":"page-46-exemple-2","language":"php","code":"$_GET , en fonction de la méthode HTTP conﬁgurée sur le"},
      {"type":"p","text":"formulaire)."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-46-exemple-3","language":"php","code":"$form->handleRequest($request);"},
      {"type":"p","text":"Comme vous pouvez le constater, cette méthode a"},
      {"type":"code","filename":"page-46-exemple-4","language":"php","code":"pour argument $request . Cela signiﬁe que notre"},
      {"type":"p","text":"méthode de contrôleur"},
      {"type":"p","text":"récupère le contenu de la"},
      {"type":"p","text":"$"},
      {"type":"p","text":"requête HTTP"},
      {"type":"p","text":". Il faudra alors penser à importer"},
      {"type":"p","text":"cette classe avec use , ainsi qu’à ajouter"},
      {"type":"p","text":"l’autowiring au niveau de la méthode de"},
      {"type":"p","text":"contrôleur."},
      {"type":"p","text":"Une fois les données de notre formulaire lues, nous allons"},
      {"type":"p","text":"exécuter la méthode isSubmitted()  sur notre formulaire."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-46-exemple-5","language":"php","code":"$form->handleRequest($request);"},
      {"type":"code","filename":"page-46-exemple-6","language":"php","code":"if ($form->isSubmitted()) {"},
      {"type":"p","text":"// Traitement du formulaire..."},
      {"type":"code","filename":"page-46-exemple-7","language":"php","code":"}"},
      {"type":"p","text":"Cette méthode retourne un booléen :"},
      {"type":"code","filename":"page-46-exemple-8","language":"php","code":"false  : le formulaire n’a pas été soumis ; on l’afﬁche."},
      {"type":"image","src":"images/laconsole/symfony-p046.jpg","alt":"Page originale de Symfony.pdf - page 46"},
      {"type":"h","text":"Page 47"},
      {"type":"code","filename":"page-47-exemple-1","language":"php","code":"true  : le formulaire a été soumis ; on le traite."},
      {"type":"h","text":"Validation des données"},
      {"type":"p","text":"Les formulaires permettent aux utilisateurs de saisir de"},
      {"type":"p","text":"nombreuses informations qui seront la plupart du temps"},
      {"type":"h","text":"enregistrées en base de données, mais peuvent aussi être"},
      {"type":"p","text":"exploités « à la volée ». C’est par exemple le cas d’un"},
      {"type":"p","text":"moteur de recherche, d’un envoi de mail, etc."},
      {"type":"p","text":"Lorsqu’on est face à un formulaire d’ajout d’article, on"},
      {"type":"p","text":"s’attend généralement à recevoir des chaînes de caractères"},
      {"type":"p","text":"aux formats suivants :"},
      {"type":"p","text":"title  : non vide / entre 50 et 65 caractères aﬁn"},
      {"type":"p","text":"d’être SEO-friendly."},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"description  : non vide / entre 150 et 165 caractères"},
      {"type":"p","text":"aﬁn d’être SEO-friendly."},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Et pour s’en assurer, il faut mettre en place des contraintes"},
      {"type":"h","text":"de validation."},
      {"type":"p","text":"Form Types"},
      {"type":"p","text":"2 types de formulaires"},
      {"type":"code","filename":"page-47-exemple-2","language":"php","code":"Créer un Form Type"},
      {"type":"h","text":"Côté client"},
      {"type":"p","text":"Ajouter et supprimer des"},
      {"type":"p","text":"champs"},
      {"type":"code","filename":"page-47-exemple-3","language":"php","code":"HTML nous permet via les attributs type , maxlength ,"},
      {"type":"p","text":"Customiser les champs"},
      {"type":"p","text":"pattern  et bien d’autres, de spéciﬁer des contraintes du"},
      {"type":"p","text":"Etape 1 : Construire le formulaire"},
      {"type":"p","text":"côté front de notre site. Ce premier check de validation est"},
      {"type":"p","text":"Création du formulaire"},
      {"type":"h","text":"utile car il va pouvoir prévenir l’utilisateur d’un format"},
      {"type":"p","text":"Transmission du formulaire"},
      {"type":"p","text":"non-respecté, avant la soumission du formulaire."},
      {"type":"p","text":"aux templates"},
      {"type":"p","text":"Etape 2 : Afﬁcher un formulaire"},
      {"type":"p","text":"Une donnée non valide peut être gênante pour 2 raisons :"},
      {"type":"p","text":"Fonction form()"},
      {"type":"p","text":"Customisation"},
      {"type":"h","text":"1. Elle ne sera pas, ou peu exploitable en raison de son"},
      {"type":"p","text":"Thème CSS"},
      {"type":"image","src":"images/laconsole/symfony-p047.jpg","alt":"Page originale de Symfony.pdf - page 47"},
      {"type":"h","text":"Page 48"},
      {"type":"p","text":"Thème CSS"},
      {"type":"p","text":"format."},
      {"type":"p","text":"Fonctions Twig"},
      {"type":"p","text":"Etape 3 : Traitement du\nformulaire"},
      {"type":"h","text":"2. Elle peut être dangereuse."},
      {"type":"p","text":"Soumission du formulaire"},
      {"type":"p","text":"La validation dans le navigateur va nous éviter"},
      {"type":"p","text":"Validation des données"},
      {"type":"p","text":"une immense majorité de données non-"},
      {"type":"p","text":"Côté client"},
      {"type":"h","text":"conformes, cependant, elle n’est pas sufﬁsante"},
      {"type":"p","text":"Côté serveur"},
      {"type":"h","text":"contre des utilisateurs malveillants, car n’importe"},
      {"type":"p","text":"Traitement des données"},
      {"type":"p","text":"qui peut modiﬁer le code HTML, CSS et JS de la"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"page, avant d’envoyer le formulaire. Il est donc"},
      {"type":"p","text":"essentiel de faire ce que l’on appelle plus"},
      {"type":"h","text":"communément une double validation côté"},
      {"type":"p","text":"serveur pour bloquer les saisies non-valides et"},
      {"type":"p","text":"potentiellement dangereuses."},
      {"type":"h","text":"Côté serveur"},
      {"type":"p","text":"La validation d’un formulaire côté back est une tâche"},
      {"type":"p","text":"fastidieuse qui demande de faire de nombreux tests sur la"},
      {"type":"p","text":"nature des données récupérées."},
      {"type":"p","text":"En PHP natif on faisait appel à de nombreuses fonctions au"},
      {"type":"p","text":"sein de conditions interminables :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-48-exemple-1","language":"php","code":"if (!empty($title)"},
      {"type":"code","filename":"page-48-exemple-2","language":"php","code":"&& strlen($title) >= 50"},
      {"type":"code","filename":"page-48-exemple-3","language":"php","code":"&& strlen($title) <= 65"},
      {"type":"code","filename":"page-48-exemple-4","language":"php","code":"&& !empty($content) ... ) {"},
      {"type":"p","text":"// On traite les données"},
      {"type":"code","filename":"page-48-exemple-5","language":"php","code":"}"},
      {"type":"p","text":"Heureusement, tout ça c’est de l’histoire ancienne, car"},
      {"type":"image","src":"images/laconsole/symfony-p048.jpg","alt":"Page originale de Symfony.pdf - page 48"},
      {"type":"h","text":"Page 49"},
      {"type":"code","filename":"page-49-exemple-1","language":"php","code":"Symfony intègre un composant nommé Validator"},
      {"type":"p","text":"venant simpliﬁer ce processus."},
      {"type":"h","text":"La validation consiste à associer des contraintes de"},
      {"type":"h","text":"validation à des propriétés (le plus souvent) ou des"},
      {"type":"p","text":"méthodes publiques de nos entités, via des attributs PHP."},
      {"type":"h","text":"D’abord, importons le composant Validator  au sein de"},
      {"type":"p","text":"notre entité :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-49-exemple-2","language":"php","code":"use Symfony\\Component\\Validator\\Constrai"},
      {"type":"h","text":"Ensuite, déﬁnissons des contraintes de validation sur les"},
      {"type":"p","text":"propriétés des entités avec l’attribut PHP Assert  :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Assert\\Length("},
      {"type":"p","text":"min: 50,"},
      {"type":"p","text":"max: 65,"},
      {"type":"p","text":"minMessage: 'Ce titre est trop court"},
      {"type":"p","text":"maxMessage: 'Ce titre est trop long."},
      {"type":"p","text":")]"},
      {"type":"p","text":"#[Assert\\NotBlank(message: 'Le titre ne"},
      {"type":"code","filename":"page-49-exemple-3","language":"php","code":"private string $title;"},
      {"type":"p","text":"Ici nous n’avons utilisé que Length  et NotBlank , mais il"},
      {"type":"p","text":"existe en réalité\n."},
      {"type":"p","text":"bien d’autres contraintes de validation"},
      {"type":"image","src":"images/laconsole/symfony-p049.jpg","alt":"Page originale de Symfony.pdf - page 49"},
      {"type":"h","text":"Page 50"},
      {"type":"p","text":"Toutes les contraintes de validation possèdent une"},
      {"type":"p","text":"option message  qui permet de redéﬁnir le"},
      {"type":"p","text":"$"},
      {"type":"p","text":"message d’erreur qui sera retourné par la fonction"},
      {"type":"p","text":"Twig form_errors(form.attribut) ."},
      {"type":"p","text":"Vous trouverez dans la\n,"},
      {"type":"p","text":"documentation ofﬁcielle"},
      {"type":"p","text":"davantage d’informations pour pousser plus loin ce"},
      {"type":"p","text":"composant très riche."},
      {"type":"p","text":"Enin, il ne nous reste plus qu’à indiquer qu’à la soumission"},
      {"type":"p","text":"du formulaire, on souhaite également vériﬁer la validité"},
      {"type":"p","text":"des champs avec la méthode isValid()  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-50-exemple-1","language":"php","code":"$form->handleRequest($request);"},
      {"type":"code","filename":"page-50-exemple-2","language":"php","code":"if ($form->isSubmitted() && $form->isVal"},
      {"type":"p","text":"// Traitement du formulaire..."},
      {"type":"code","filename":"page-50-exemple-3","language":"php","code":"}"},
      {"type":"h","text":"Traitement des données"},
      {"type":"p","text":"Et bien vous savez déjà faire tout ça me semble-t-il, non ?"},
      {"type":"p","text":"Nous allons pouvoir exploiter les compétences acquises au"},
      {"type":"p","text":"chapitre précédent ( entityManager  et repositories )"},
      {"type":"h","text":"pour enregistrer, modiﬁer, supprimer ou encore récupérer"},
      {"type":"p","text":"des données en fonction des champs saisis dans un"},
      {"type":"p","text":"formulaire."},
      {"type":"p","text":"Voici un exemple nous permettant d’ajouter un nouvel"},
      {"type":"p","text":"article en base de données :"},
      {"type":"image","src":"images/laconsole/symfony-p050.jpg","alt":"Page originale de Symfony.pdf - page 50"},
      {"type":"h","text":"Page 51"},
      {"type":"p","text":"ArticleController.php\ncopier"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name:"},
      {"type":"code","filename":"page-51-exemple-1","language":"php","code":"public function addArticle(Request $requ"},
      {"type":"code","filename":"page-51-exemple-2","language":"php","code":"$article = new Article();"},
      {"type":"code","filename":"page-51-exemple-3","language":"php","code":"$form = $this->createForm(ArticleTyp"},
      {"type":"code","filename":"page-51-exemple-4","language":"php","code":"$form->handleRequest($request);"},
      {"type":"code","filename":"page-51-exemple-5","language":"php","code":"if ($form->isSubmitted() && $form->i"},
      {"type":"code","filename":"page-51-exemple-6","language":"php","code":"$em->persist($article);"},
      {"type":"code","filename":"page-51-exemple-7","language":"php","code":"$em->flush();"},
      {"type":"code","filename":"page-51-exemple-8","language":"php","code":"return $this->redirectToRoute('l"},
      {"type":"code","filename":"page-51-exemple-9","language":"php","code":"}"},
      {"type":"code","filename":"page-51-exemple-10","language":"php","code":"return $this->render('article/add.ht"},
      {"type":"code","filename":"page-51-exemple-11","language":"php","code":"'form' => $form"},
      {"type":"code","filename":"page-51-exemple-12","language":"php","code":"]);"},
      {"type":"code","filename":"page-51-exemple-13","language":"php","code":"}"},
      {"type":"p","text":"Etant donné qu’ ArticleType  est basé sur l’entité"},
      {"type":"p","text":"Article , nous avons déﬁni que le formulaire hydratera"},
      {"type":"code","filename":"page-51-exemple-14","language":"php","code":"automatiquement l’objet $article ."},
      {"type":"code","filename":"page-51-exemple-15","language":"php","code":"En revanche, si mon Form Type n’est pas basé sur une"},
      {"type":"h","text":"entité, alors je pourrai récupérer les données du formulaire"},
      {"type":"p","text":"grâce à la méthode getData() ."},
      {"type":"image","src":"images/laconsole/symfony-p051.jpg","alt":"Page originale de Symfony.pdf - page 51"},
      {"type":"h","text":"Page 52"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-52-exemple-1","language":"php","code":"$form = $this->createForm(ContactType::c"},
      {"type":"code","filename":"page-52-exemple-2","language":"php","code":"$form->handleRequest($request);"},
      {"type":"code","filename":"page-52-exemple-3","language":"php","code":"if ($form->isSubmitted() && $form->isVal"},
      {"type":"code","filename":"page-52-exemple-4","language":"php","code":"$data = $form->getData();"},
      {"type":"code","filename":"page-52-exemple-5","language":"php","code":"// Exploitation de $data..."},
      {"type":"code","filename":"page-52-exemple-6","language":"php","code":"}"},
      {"type":"p","text":"Gestion des relations"},
      {"type":"code","filename":"page-52-exemple-7","language":"php","code":"Si un champ de formulaire est de type « relation », il est"},
      {"type":"p","text":"important d’ajouter la méthode public __toString()"},
      {"type":"h","text":"suivante dans l’entité possédant le champ en question."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-52-exemple-8","language":"php","code":"public function __toString() { return"},
      {"type":"p","text":"Cette méthode permet d’indiquer ici que si un objet «"},
      {"type":"p","text":"category » tout entier doit être amené à être afﬁché, une"},
      {"type":"h","text":"propriété spéciﬁque permettra de l’identiﬁer (ici, la"},
      {"type":"code","filename":"page-52-exemple-9","language":"php","code":"propriété $name )."},
      {"type":"p","text":"Pour customiser l’afﬁchage d’un champ"},
      {"type":"p","text":"relationnel (checkbox au lieu d’un sélecteur"},
      {"type":"p","text":"multiple par exemple), je vous recommande de"},
      {"type":"p","text":"$"},
      {"type":"p","text":"consulter la documentation dédiée au champ"},
      {"type":"p","text":"EntityType"},
      {"type":"p","text":"."},
      {"type":"image","src":"images/laconsole/symfony-p052.jpg","alt":"Page originale de Symfony.pdf - page 52"},
      {"type":"h","text":"Page 53"},
      {"type":"p","text":"Précédent :\n7.\nManipuler\nses\nEntités\n(CRUD)"},
      {"type":"p","text":"〈"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"*"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des\nLEGO. Plus tard, je découvre le"},
      {"type":"p","text":"@"},
      {"type":"p","text":"dev, des LEGO où les briques\nsont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier\npuis je décide de transmettre\ncette passion en école de dev et"},
      {"type":"p","text":"sur laConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},
      {"type":"p","text":"légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"développement web."},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"image","src":"images/laconsole/symfony-p053.jpg","alt":"Page originale de Symfony.pdf - page 53"},
      {"type":"h","text":"Page 54"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-54-exemple-1","language":"php","code":"Symfony 6 › Créer ses Entités"},
      {"type":"h","text":""},
      {"type":"h","text":"avec Doctrine"},
      {"type":"p","text":"Doctrine est une librairie PHP conçue pour manipuler ses bases de données et"},
      {"type":"code","filename":"page-54-exemple-2","language":"php","code":"mapper des objets. Elle représente le coeur des modèles dans Symfony."},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-54-exemple-3","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 6. CRÉER SES ENTITÉS AVEC DOCTRINE"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Doctrine : c’est quoi ?"},
      {"type":"p","text":"Doctrine est une librairie PHP conçue pour faciliter la"},
      {"type":"h","text":"manipulation de ses bases de données et le mapping de"},
      {"type":"p","text":"ses objets. Il est qualiﬁé d’ORM et de DBAL."},
      {"type":"code","filename":"page-54-exemple-4","language":"php","code":"On utilise ce type de librairie dans la plupart des"},
      {"type":"p","text":"frameworks PHP. Doctrine est utilisée par défaut par le"},
      {"type":"code","filename":"page-54-exemple-5","language":"php","code":"framework Symfony."},
      {"type":"h","text":"Modèles, sans Doctrine"},
      {"type":"image","src":"images/laconsole/symfony-p054.jpg","alt":"Page originale de Symfony.pdf - page 54"},
      {"type":"h","text":"Page 55"},
      {"type":"p","text":"Quand on récupère des informations stockées en base de"},
      {"type":"p","text":"données en PHP natif, on fait généralement appel à PDO"},
      {"type":"code","filename":"page-55-exemple-1","language":"php","code":"(PHP Data Object), une extension déﬁnissant l’interface"},
      {"type":"h","text":"orientée objet pour accéder à une base de données avec"},
      {"type":"p","text":"PHP."},
      {"type":"h","text":"La classe PDO constitue une couche d’abstraction qui"},
      {"type":"h","text":"intervient entre l’application PHP et un Système de"},
      {"type":"h","text":"Gestion de Base de Données (SGDB) tel que MySQL,"},
      {"type":"p","text":"PostgreSQL ou MariaDB par exemple."},
      {"type":"p","text":"La couche d’abstraction permet de séparer le traitement de"},
      {"type":"h","text":"la base de données en elle-même."},
      {"type":"p","text":"Pour exemple, on récupérait des données comme ceci :"},
      {"type":"p","text":"// On se connecte à la base de données My"},
      {"type":"code","filename":"page-55-exemple-2","language":"php","code":"$db = new PDO('mysql:host=localhost;dbnam"},
      {"type":"p","text":"// Ecriture de la requête SQL qui récupèr"},
      {"type":"code","filename":"page-55-exemple-3","language":"php","code":"$query = 'SELECT * FROM articles';"},
      {"type":"p","text":"// Exécution de la requête SQL"},
      {"type":"code","filename":"page-55-exemple-4","language":"php","code":"$stmt = $db->query($query);"},
      {"type":"p","text":"// Récupération des résultats"},
      {"type":"code","filename":"page-55-exemple-5","language":"php","code":"$articles = $stmt->fetchAll();"},
      {"type":"p","text":"Bien que très pratique, l’extension PDO présente 3"},
      {"type":"h","text":"inconvénients :"},
      {"type":"h","text":"Il faut avoir des compétences en langage SQL"},
      {"type":"h","text":"Il faut écrire soi-même ses requêtes"},
      {"type":"p","text":"PDO retourne par défaut des données structurées sous"},
      {"type":"code","filename":"page-55-exemple-6","language":"php","code":"forme de tableaux… et Symfony est un framework"},
      {"type":"p","text":"orienté objet !"},
      {"type":"image","src":"images/laconsole/symfony-p055.jpg","alt":"Page originale de Symfony.pdf - page 55"},
      {"type":"h","text":"Page 56"},
      {"type":"p","text":"Avec Doctrine, vous allez pouvoir interagir avec"},
      {"type":"p","text":"votre base de données sans requêtes SQL et"},
      {"type":"p","text":"$"},
      {"type":"p","text":"récupérer des données qui seront immédiatement"},
      {"type":"p","text":"mappées en tant qu’objets."},
      {"type":"h","text":"Modèles, avec Doctrine"},
      {"type":"h","text":"Doctrine DBAL"},
      {"type":"p","text":"La partie DBAL (Database Abstraction Layer) est la couche"},
      {"type":"h","text":"assurant la manipulation des bases de données. Il s’agit de"},
      {"type":"p","text":"la couche de plus bas niveau de Doctrine qui permet de"},
      {"type":"h","text":"communiquer avec les bases de données relationnelles."},
      {"type":"p","text":"Elle est comparable à l’extension PHP PDO, et pourrait être"},
      {"type":"p","text":"déﬁnie comme étant une version plus avancée de cette"},
      {"type":"p","text":"extension."},
      {"type":"p","text":"PDO est d’ailleurs utilisée en interne par la couche"},
      {"type":"p","text":"$"},
      {"type":"p","text":"DBAL."},
      {"type":"p","text":"Elle offre par exemple des fonctions qui listent les tables,"},
      {"type":"p","text":"les champs, le détails des structures, etc."},
      {"type":"p","text":"On peut alors facilement appeler une fonction qui va"},
      {"type":"p","text":"récupérer les 3 derniers articles d’un blog sans écrire la"},
      {"type":"p","text":"moindre ligne de SQL."},
      {"type":"p","text":"Retenez que cette surcouche est une API (Application"},
      {"type":"code","filename":"page-56-exemple-1","language":"php","code":"Programming Interface) qui vous permet de faciliter la"},
      {"type":"p","text":"manipulation de vos bases de données en bénéﬁciant d’un"},
      {"type":"p","text":"ensemble de classes, méthodes, fonctions, etc."},
      {"type":"image","src":"images/laconsole/symfony-p056.jpg","alt":"Page originale de Symfony.pdf - page 56"},
      {"type":"h","text":"Page 57"},
      {"type":"h","text":"Doctrine ORM"},
      {"type":"p","text":"La partie ORM (Object Relational Mapping) est la couche"},
      {"type":"p","text":"assurant le mapping des objets. Le mapping consiste à faire"},
      {"type":"h","text":"le lien entre nos objets et les données stockées en base."},
      {"type":"p","text":"Admettons que DBAL retourne les 3 derniers articles en"},
      {"type":"p","text":"provenance de la table « articles » et que ces derniers"},
      {"type":"p","text":"possèdent 3 champs: id , title  et content ."},
      {"type":"code","filename":"page-57-exemple-1","language":"php","code":"Côté Symfony : il sera donc logique de manipuler un objet"},
      {"type":"p","text":"issu de la classe Article , avec des propriétés"},
      {"type":"code","filename":"page-57-exemple-2","language":"php","code":"correspondantes. On appelle ce type de classe une entité."},
      {"type":"p","text":"Et bien l’ORM permettra très facilement de faire"},
      {"type":"p","text":"correspondre chaque propriété de votre objet au champ"},
      {"type":"p","text":"correspondant dans votre table physique."},
      {"type":"h","text":"Ainsi, ORM fait correspondre une table à une entité."},
      {"type":"p","text":"Ce mapping est généralement géré par des"},
      {"type":"p","text":"$"},
      {"type":"p","text":"annotations ou plus récemment par des attributs"},
      {"type":"p","text":"PHP."},
      {"type":"h","text":"Schéma récapitulatif"},
      {"type":"p","text":"Doctrine joue donc le rôle d’intermédiaire entre votre"},
      {"type":"code","filename":"page-57-exemple-3","language":"php","code":"application Symfony et la base de données. Il possède :"},
      {"type":"h","text":"Une couche DBAL qui facilite la communication avec la"},
      {"type":"h","text":"base de données."},
      {"type":"h","text":"Une couche ORM qui va mapper les données"},
      {"type":"image","src":"images/laconsole/symfony-p057.jpg","alt":"Page originale de Symfony.pdf - page 57"},
      {"type":"h","text":"Page 58"},
      {"type":"h","text":"récupérées avec vos objets dans l’application : les"},
      {"type":"h","text":"entités."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-58-exemple-1","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Base de données"},
      {"type":"h","text":"Conﬁguration"},
      {"type":"p","text":"Pour que Doctrine soit en mesure d’interagir avec notre base"},
      {"type":"p","text":"de données, il faut lui indiquer où cette dernière se trouve."},
      {"type":"p","text":"Cette information sur la connexion à la base de données"},
      {"type":"image","src":"images/laconsole/symfony-p058.jpg","alt":"Page originale de Symfony.pdf - page 58"},
      {"type":"h","text":"Page 59"},
      {"type":"p","text":"doit être placée dans une variable d’environnement appelée"},
      {"type":"p","text":"DATABASE_URL  située dans le ﬁchier"},
      {"type":"p","text":".env , à la racine"},
      {"type":"p","text":"de votre projet :"},
      {"type":"p","text":".env\ncopier"},
      {"type":"p","text":"DATABASE_URL=\"mysql://app:!ChangeMe!@127."},
      {"type":"p","text":"app  (le 1er) : le nom d’utilisateur pour accéder à votre"},
      {"type":"p","text":"base de données. En local, avec WAMP ou MAMP, c’est"},
      {"type":"p","text":"par défaut « root »."},
      {"type":"p","text":"!ChangeMe!  : le mot de passe pour accéder à votre"},
      {"type":"p","text":"base de données. En local, avec WAMP, il n’y en a pas"},
      {"type":"p","text":"par défaut (vous supprimez !ChangeMe!  et ne mettez"},
      {"type":"p","text":"rien à la place). Avec MAMP, c’est par défaut « root »."},
      {"type":"p","text":"127.0.0.1:3306  : l’adresse de votre base de données."},
      {"type":"p","text":"En local, c’est par défaut « 127.0.0.1:3306  » ou «"},
      {"type":"p","text":"localhost:3306  ». 3306  est le port d’écoute de"},
      {"type":"p","text":"MySQL. Si vous utilisez le serveur MariaDB, il est"},
      {"type":"p","text":"possible que cela ne fonctionne pas, renseignez alors le"},
      {"type":"p","text":"port 3307 . Si ça ne fonctionne toujours pas, spéciﬁez la"},
      {"type":"p","text":"version de votre serveur à la toute ﬁn de cette ligne de"},
      {"type":"p","text":"code avec ?serverVersion=*** . Vous pouvez"},
      {"type":"p","text":"facilement connaître votre numéro de version en tapant"},
      {"type":"p","text":"la requête SQL SHOW GLOBAL VARIABLES LIKE"},
      {"type":"code","filename":"page-59-exemple-1","language":"php","code":"'%version%'  dans votre interface phpMyAdmin."},
      {"type":"h","text":"app  (le 2nd) : c’est le nom de votre base de données."},
      {"type":"p","text":"Nous venons de déﬁnir un lien vers une base de"},
      {"type":"p","text":"$"},
      {"type":"p","text":"données, qui n’existe toujours pas… il est temps de"},
      {"type":"p","text":"la créer !"},
      {"type":"image","src":"images/laconsole/symfony-p059.jpg","alt":"Page originale de Symfony.pdf - page 59"},
      {"type":"h","text":"Page 60"},
      {"type":"h","text":"Création"},
      {"type":"p","text":"Il est possible de créer sa base de données via un script ou à"},
      {"type":"code","filename":"page-60-exemple-1","language":"php","code":"la main depuis phpMyAdmin… mais Symfony nous propose"},
      {"type":"p","text":"une ligne de commande tout prête, il serait dommage de"},
      {"type":"p","text":"s’en priver."},
      {"type":"p","text":"Pour créer la base de données correspondante aux"},
      {"type":"p","text":"informations spéciﬁées dans le ﬁchier"},
      {"type":"p","text":".env , taper :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-60-exemple-2","language":"php","code":"symfony console doctrine:database:create"},
      {"type":"p","text":"Si vous voyez apparaître le message d’erreur"},
      {"type":"p","text":"suivant : An exception occurred in the"},
      {"type":"p","text":"driver: SQLSTATE[HY000] [2002] Aucune"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"connexion n'a pu être établie car"},
      {"type":"p","text":"l'ordinateur cible l'a expressément"},
      {"type":"p","text":"refusée. , c’est que vous n’avez pas démarré votre"},
      {"type":"p","text":"serveur local."},
      {"type":"h","text":"Suppression"},
      {"type":"p","text":"Si vous souhaitez supprimer votre base de données pour"},
      {"type":"p","text":"une quelconque raison, taper la commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-60-exemple-3","language":"php","code":"symfony console doctrine:database:drop"},
      {"type":"image","src":"images/laconsole/symfony-p060.jpg","alt":"Page originale de Symfony.pdf - page 60"},
      {"type":"h","text":"Page 61"},
      {"type":"p","text":"Il est aussi possible d’effectuer des modiﬁcations de"},
      {"type":"p","text":"la structure de sa base de données en générant des"},
      {"type":"p","text":"$"},
      {"type":"p","text":"« migrations ». Nous aborderons ce point à la ﬁn de"},
      {"type":"p","text":"ce chapitre."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-61-exemple-1","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Entités"},
      {"type":"h","text":"Qu’est-ce qu’une entité ?"},
      {"type":"h","text":"Une entité est une classe PHP qui est mappée avec une"},
      {"type":"p","text":"table de notre base de données."},
      {"type":"p","text":"Elles sont au centre des modèles. C’est à travers elles que"},
      {"type":"h","text":"vous allez manipuler tous les éléments propres à votre"},
      {"type":"p","text":"application (utilisateurs, produits, articles, messages, etc.)."},
      {"type":"p","text":"Si je dois créer un blog, je vais gérer mes articles via"},
      {"type":"p","text":"l’entité Article"},
      {"type":"p","text":"Si je crée un site e-commerce, je vais gérer mes"},
      {"type":"p","text":"produits via l’entité Product"},
      {"type":"image","src":"images/laconsole/symfony-p061.jpg","alt":"Page originale de Symfony.pdf - page 61"},
      {"type":"h","text":"Page 62"},
      {"type":"p","text":"Si je crée un forum je vais gérer mes messages via"},
      {"type":"p","text":"l’entité Post"},
      {"type":"p","text":"…"},
      {"type":"h","text":"Créer une entité"},
      {"type":"code","filename":"page-62-exemple-1","language":"php","code":"Les entités d’un projet Symfony sont rassemblées dans le"},
      {"type":"p","text":"dossier"},
      {"type":"p","text":"src/Entity ."},
      {"type":"p","text":"Si nous possédons un blog, nous créerons d’abord une"},
      {"type":"p","text":"entité"},
      {"type":"p","text":"Article.php , contenant par exemple les"},
      {"type":"p","text":"propriétés suivantes :"},
      {"type":"p","text":"id  : integer"},
      {"type":"p","text":"title  : string(255)"},
      {"type":"p","text":"content  : text"},
      {"type":"p","text":"createdAt  : datetime"},
      {"type":"p","text":"Créer ses entités à la main est laborieux, et comme pour"},
      {"type":"p","text":"toute tâche laborieuse, il existe une solution : le"},
      {"type":"h","text":"MakerBundle !"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-62-exemple-2","language":"php","code":"symfony console make:entity"},
      {"type":"p","text":"Cette ligne de commande va vous demander plusieurs"},
      {"type":"p","text":"informations :"},
      {"type":"p","text":"1. Un nom pour l’entité à générer (avec une majuscule au"},
      {"type":"p","text":"début). Deux ﬁchiers seront créés :"},
      {"type":"p","text":"src/Entity/Nom.php  et"},
      {"type":"image","src":"images/laconsole/symfony-p062.jpg","alt":"Page originale de Symfony.pdf - page 62"},
      {"type":"h","text":"Page 63"},
      {"type":"p","text":"src/RepositoryNomRepository.php"},
      {"type":"p","text":"2. Ajout d’une propriété à votre entité. Vous pouvez alors"},
      {"type":"code","filename":"page-63-exemple-1","language":"php","code":"taper à nouveau sur ENTER  pour sortir de l’interface ou"},
      {"type":"h","text":"saisir le nom de votre première propriété (en"},
      {"type":"p","text":"lowercase, camelCase ou snake_case)."},
      {"type":"code","filename":"page-63-exemple-2","language":"php","code":"3. Ajout d’un type pour votre propriété (par défaut string)."},
      {"type":"p","text":"Vous pouvez consulter la liste de tous les types"},
      {"type":"p","text":"disponibles en tapant ? . Selon votre choix, la suite est"},
      {"type":"p","text":"variable (s’il s’agit d’une chaîne de caractères on vous"},
      {"type":"p","text":"demandera la taille maximale : length …). Ensuite, on"},
      {"type":"p","text":"vous demandera systématiquement si la propriété en"},
      {"type":"p","text":"question est facultative ou non ( nullable ). length ,"},
      {"type":"p","text":"nullable … ça ressemble à nos arguments de l’attribut"},
      {"type":"p","text":"Column()  ça non ?! En fait, le MakerBundle va non"},
      {"type":"p","text":"seulement vous créer les propriétés de la classe, mais"},
      {"type":"p","text":"aussi les annotations / attributs PHP associés, à partir"},
      {"type":"p","text":"des renseignements que vous lui donnez."},
      {"type":"p","text":"En ligne de commande, inutile de s’occuper de"},
      {"type":"p","text":"l’identiﬁant (id), qui sera automatiquement ajouté"},
      {"type":"p","text":"$"},
      {"type":"p","text":"en tant que clé primaire. Inutile de s’occuper aussi"},
      {"type":"p","text":"des getters et setters qui seront automatiquement"},
      {"type":"p","text":"générés."},
      {"type":"image","src":"images/laconsole/symfony-p063.jpg","alt":"Page originale de Symfony.pdf - page 63"},
      {"type":"h","text":"Page 64"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-64-exemple-1","language":"php","code":"<?php"},
      {"type":"code","filename":"page-64-exemple-2","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-64-exemple-3","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"code","filename":"page-64-exemple-4","language":"php","code":"use Doctrine\\DBAL\\Types\\Types;"},
      {"type":"code","filename":"page-64-exemple-5","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass:ArticleRepos"},
      {"type":"code","filename":"page-64-exemple-6","language":"php","code":"class Article {"},
      {"type":"p","text":"#[ORM\\Id]"},
      {"type":"p","text":"#[ORM\\GeneratedValue]"},
      {"type":"p","text":"#[ORM\\Column]"},
      {"type":"code","filename":"page-64-exemple-7","language":"php","code":"private ?int $id = null;"},
      {"type":"p","text":"#[ORM\\Column(length:255)]"},
      {"type":"code","filename":"page-64-exemple-8","language":"php","code":"private ?string $title = null;"},
      {"type":"code","filename":"page-64-exemple-9","language":"php","code":"#[ORM\\Column(type:Types::TEXT)]"},
      {"type":"code","filename":"page-64-exemple-10","language":"php","code":"private ?string $content = null;"},
      {"type":"p","text":"#[ORM\\Column]"},
      {"type":"code","filename":"page-64-exemple-11","language":"php","code":"private ?\\DateTimeImmutable $createdA"},
      {"type":"p","text":"// Les getters et setters ..."},
      {"type":"code","filename":"page-64-exemple-12","language":"php","code":"}"},
      {"type":"code","filename":"page-64-exemple-13","language":"php","code":"Namespace et import"},
      {"type":"p","text":"namespace  : on déﬁnit un namespace pour situer les"},
      {"type":"image","src":"images/laconsole/symfony-p064.jpg","alt":"Page originale de Symfony.pdf - page 64"},
      {"type":"h","text":"Page 65"},
      {"type":"p","text":"entités de notre application."},
      {"type":"p","text":"use  : on importe la classe ArticleRepository"},
      {"type":"p","text":"(automatiquement créée - détailée par la suite), la"},
      {"type":"p","text":"classe Doctrine Types  dédiée au typage des"},
      {"type":"p","text":"propriétés, ainsi que la classe Doctrine Mapping ,"},
      {"type":"p","text":"utilisée pour mapper nos classes avec la base de"},
      {"type":"p","text":"données."},
      {"type":"p","text":"Les attributs PHP"},
      {"type":"h","text":"ORM\\Entity  : spéciﬁe que la classe est une entité. Entre"},
      {"type":"h","text":"parenthèses, il est possible de préciser des arguments"},
      {"type":"h","text":"nommés aux attributs. L’attribut Entity  en possède la"},
      {"type":"p","text":"plupart du temps un : repositoryClass , nous"},
      {"type":"p","text":"permettant d’associer ce ﬁchier à un Repository - nous"},
      {"type":"p","text":"aborderons ce concept au chapitre suivant."},
      {"type":"p","text":"ORM\\Id  : identiﬁe quel propriété PHP joue le rôle de"},
      {"type":"p","text":"clé primaire de la table."},
      {"type":"p","text":"ORM\\GeneratedValue  : permet de déﬁnir la valeur"},
      {"type":"p","text":"automatique « AUTO_INCREMENT » pour les"},
      {"type":"p","text":"identiﬁants."},
      {"type":"h","text":"ORM\\Column  : permet de mapper une propriété PHP"},
      {"type":"p","text":"à une colonne de la base de données. Si une"},
      {"type":"p","text":"propriété n’est pas marquée avec cet attribut, elle"},
      {"type":"p","text":"sera ignorée. Par défaut le nom de la colonne en"},
      {"type":"p","text":"base de données correspond au nom de la propriété,"},
      {"type":"p","text":"mais il est possible d’en spéciﬁer un différent avec"},
      {"type":"p","text":"l’argument name . L’attribut Column  a de nombreux"},
      {"type":"p","text":"autres paramètres, mais nous en utilisons la plupart"},
      {"type":"p","text":"du temps 4 :"},
      {"type":"p","text":"1.\nunique  : précise que la valeur de cette colonne doit"},
      {"type":"image","src":"images/laconsole/symfony-p065.jpg","alt":"Page originale de Symfony.pdf - page 65"},
      {"type":"h","text":"Page 66"},
      {"type":"p","text":"être unique (par exemple un e-mail ou un pseudo"},
      {"type":"p","text":"utilisateur)."},
      {"type":"p","text":"2.\nnullable  : permet de déﬁnir une propriété comme"},
      {"type":"p","text":"étant facultative ( #[ORM\\Column(nullable:"},
      {"type":"p","text":"true)] ). Toutes les propriétés sont par défaut"},
      {"type":"p","text":"obligatoires."},
      {"type":"p","text":"3.\nlength  : permet de déﬁnir la longueur maximale"},
      {"type":"p","text":"d’une chaîne de caractère."},
      {"type":"code","filename":"page-66-exemple-1","language":"php","code":"4.\ntype  : permet de déﬁnir le type de la propriété si ce"},
      {"type":"h","text":"dernier ne peut pas être déduit du typage PHP"},
      {"type":"code","filename":"page-66-exemple-2","language":"php","code":"traditionnel ( ?string $content  par exemple)."},
      {"type":"code","filename":"page-66-exemple-3","language":"php","code":"Doctrine fait automatiquement le lien entre le type"},
      {"type":"code","filename":"page-66-exemple-4","language":"php","code":"PHP et le type en base de données (MySQL par"},
      {"type":"p","text":"exemple)."},
      {"type":"p","text":"Getters et setters"},
      {"type":"p","text":"Les « getters » et « setters » sont les méthodes qui vont"},
      {"type":"p","text":"nous permettre respectivement de déﬁnir et d’accéder à"},
      {"type":"p","text":"nos propriétés."},
      {"type":"h","text":"Modiﬁer une entité"},
      {"type":"p","text":"Votre entité doit évoluer ? Vous souhaitez lui ajouter une"},
      {"type":"p","text":"propriété ? Deux choix s’offrent alors à vous :"},
      {"type":"p","text":"1. Aller modiﬁer le code à la main. C’est utile lorsqu’on"},
      {"type":"p","text":"souhaite faire des changements spéciﬁques dans son"},
      {"type":"p","text":"entité (suppression de propriétés, modiﬁcation des"},
      {"type":"p","text":"attributs PHP…)."},
      {"type":"p","text":"2. Utiliser le MakerBundle. C’est utile pour l’ajout"},
      {"type":"p","text":"classique de nouvelles propriétés. Cela nous amène à"},
      {"type":"image","src":"images/laconsole/symfony-p066.jpg","alt":"Page originale de Symfony.pdf - page 66"},
      {"type":"h","text":"Page 67"},
      {"type":"h","text":"taper une nouvelle fois la ligne de commande"},
      {"type":"p","text":"make:entity , en spéciﬁant en argument le nom de"},
      {"type":"p","text":"l’entité existante."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-67-exemple-1","language":"php","code":"symfony console make:entity NomEntite"},
      {"type":"h","text":"Supprimer une entité"},
      {"type":"p","text":"Pour supprimer une entité, on supprime :"},
      {"type":"p","text":"1. Le ﬁchier de l’entité en question :"},
      {"type":"p","text":"src/Entity/Nom.php"},
      {"type":"p","text":"2. Son repository associé :"},
      {"type":"p","text":"src/Repository/NomRepository.php"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-67-exemple-2","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Relations entre entités"},
      {"type":"image","src":"images/laconsole/symfony-p067.jpg","alt":"Page originale de Symfony.pdf - page 67"},
      {"type":"h","text":"Page 68"},
      {"type":"h","text":"Généralités"},
      {"type":"h","text":"Direction"},
      {"type":"p","text":"Nous avons précédemment créé une entité isolée : elle n’a"},
      {"type":"p","text":"pas de lien avec d’autres entités de notre base de données."},
      {"type":"p","text":"Mais en réalité, nous avons souvent besoin de mettre en"},
      {"type":"p","text":"place une structure plus complexe. On va alors créer des"},
      {"type":"p","text":"relations entre nos entités aﬁn qu’elles puissent interagir"},
      {"type":"p","text":"entre elles."},
      {"type":"p","text":"Voici quelques exemples de relations entre entités dans le"},
      {"type":"p","text":"cas d’un site internet :"},
      {"type":"p","text":"Sur Instagram / Facebook, une publication est postée"},
      {"type":"h","text":"par un utilisateur. Post.php  et User.php"},
      {"type":"p","text":"Sur Netﬂix, un ﬁlm / une série est rattaché(e) à une"},
      {"type":"p","text":"catégorie. Movie.php  / Serie.php  et Category.php"},
      {"type":"p","text":"Sur Blablacar, un trajet est réservé par un utilisateur."},
      {"type":"p","text":"Road.php  et User.php"},
      {"type":"p","text":"Sur Amazon, un utilisateur peut enregistrer une ou"},
      {"type":"p","text":"plusieurs adresses de livraison. User.php  et"},
      {"type":"p","text":"Adress.php"},
      {"type":"p","text":"Sur laConsole, une leçon est rattachée à une formation."},
      {"type":"p","text":"Lesson.php  et Course.php"},
      {"type":"p","text":"…"},
      {"type":"p","text":"Ces relations vont représenter dans notre application ce qui"},
      {"type":"image","src":"images/laconsole/symfony-p068.jpg","alt":"Page originale de Symfony.pdf - page 68"},
      {"type":"h","text":"Page 69"},
      {"type":"p","text":"est caractérisé dans nos tables par des clés étrangères et"},
      {"type":"h","text":"des tables d’associations."},
      {"type":"h","text":"Créer une relation"},
      {"type":"p","text":"Pour créer une relation il faut créer une propriété"},
      {"type":"p","text":"relationnelle lors de la création / mise à jour d’une entité"},
      {"type":"p","text":"avec la commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-69-exemple-1","language":"php","code":"symfony console make:entity"},
      {"type":"code","filename":"page-69-exemple-2","language":"php","code":"Au moment de choisir le type de la propriété, saisissez"},
      {"type":"p","text":"simplement relation ."},
      {"type":"p","text":"Vous n’avez plus qu’à répondre aux quelques questions de"},
      {"type":"p","text":"l’invite de commande et puis toutes vos relations seront"},
      {"type":"p","text":"générées par magie !"},
      {"type":"p","text":"On nomme généralement les propriétés"},
      {"type":"p","text":"relationnelles du même nom que l’entité liée : sans"},
      {"type":"p","text":"$"},
      {"type":"h","text":"la PascalCase  et au singulier ou au pluriel en"},
      {"type":"p","text":"fonction du nombre de liens possibles."},
      {"type":"h","text":"Multiplicité"},
      {"type":"h","text":"On distingue 4 grands types de relations possibles, variant"},
      {"type":"p","text":"selon le nombre de liens entre entités : on parle de"},
      {"type":"h","text":"multiplicité."},
      {"type":"p","text":"One-To-One ( 1-1 ) : deux entités A et B sont liées de"},
      {"type":"image","src":"images/laconsole/symfony-p069.jpg","alt":"Page originale de Symfony.pdf - page 69"},
      {"type":"h","text":"Page 70"},
      {"type":"p","text":"manière unique."},
      {"type":"p","text":"Many-To-One ( n-1 ) : plusieurs entités A peuvent être"},
      {"type":"p","text":"liées à une unique entité B."},
      {"type":"p","text":"One-To-Many ( 1-n ) : une entité A peut être liée à"},
      {"type":"p","text":"plusieurs entités B."},
      {"type":"p","text":"Many-To-Many ( n-n ) : plusieurs entités A peuvent être"},
      {"type":"p","text":"liées à plusieurs entités B."},
      {"type":"p","text":"Outre le nombre de liens existant entre 2 entités, une notion"},
      {"type":"p","text":"de direction de la relation entre en jeu. On distingue deux"},
      {"type":"p","text":"types de directions :"},
      {"type":"p","text":"Unidirectionnelle"},
      {"type":"p","text":"Cela signiﬁe que l’entité A a accès à une entité B et non"},
      {"type":"h","text":"l’inverse. A est l’entité propriétaire de la relation, c’est"},
      {"type":"p","text":"celle qui « possède » l’autre."},
      {"type":"p","text":"Bidirectionnelle"},
      {"type":"p","text":"Cela signiﬁe qu’une entité A a accès à une entité B et"},
      {"type":"p","text":"inversement. Dans le cas d’une relation bidirectionnelle,"},
      {"type":"h","text":"on déﬁnit en plus de l’entité propriétaire une entité"},
      {"type":"p","text":"inverse, c’est celle qui « est possédée » par l’autre."},
      {"type":"h","text":"Dans le cas des relations 1-1 : l’entité correspondant"},
      {"type":"p","text":"à la table qui contient la clé étrangère est"},
      {"type":"p","text":"propriétaire."},
      {"type":"h","text":"Dans le cas des relations 1-n et n-1 : l’entité du côté"},
      {"type":"p","text":"n est toujours propriétaire et l’entité du côté 1 est"},
      {"type":"p","text":"toujours inverse."},
      {"type":"h","text":"Dans le cas des relations n-n : on peut choisir le côté"},
      {"type":"p","text":"propriétaire et inverse comme on le souhaite."},
      {"type":"image","src":"images/laconsole/symfony-p070.jpg","alt":"Page originale de Symfony.pdf - page 70"},
      {"type":"h","text":"Page 71"},
      {"type":"p","text":"En base de données, une relation One-To-One, Many-To-"},
      {"type":"p","text":"One et One-To-Many est assurée par la présence d’une clé"},
      {"type":"p","text":"étrangère. Au sein d’une entité, elle le sera par une"},
      {"type":"h","text":"propriété relationnelle."},
      {"type":"p","text":"En base de données, une relation Many-To-Many est"},
      {"type":"p","text":"assurée par la présence d’une table de relation. Au sein"},
      {"type":"p","text":"d’une entité, elle le sera par une propriété relationnelle."},
      {"type":"p","text":"Une entité A peut également être liée à elle-même."},
      {"type":"h","text":"On parle alors d’association réﬂexive. Le meilleur"},
      {"type":"p","text":"$"},
      {"type":"p","text":"exemple est celui des réseaux sociaux, dans"},
      {"type":"p","text":"lesquels un User  peut être ami ou encore suivre"},
      {"type":"p","text":"d’autres User ."},
      {"type":"p","text":"Bien que la multiplicité ainsi que la direction d’une relation"},
      {"type":"p","text":"soient automatiquement déﬁnies dans le code des entités"},
      {"type":"p","text":"en fonction des réponses apportées à la commande"},
      {"type":"p","text":"make:entity , je vous détaille ci-dessous les modiﬁcations"},
      {"type":"code","filename":"page-71-exemple-1","language":"php","code":"structurelles apportées à vos entités en fonction du type de"},
      {"type":"p","text":"la relation."},
      {"type":"h","text":"Relation 1-1"},
      {"type":"h","text":"La relation One-To-One consiste à associer un objet avec"},
      {"type":"h","text":"un autre de manière unique."},
      {"type":"p","text":"Prenons l’exemple d’un article de blog auquel on souhaite"},
      {"type":"p","text":"rattacher une image de couverture. Un article va pouvoir"},
      {"type":"p","text":"être lié à une image de couverture."},
      {"type":"p","text":"Relation unidirectionnelle"},
      {"type":"p","text":"Ici, on aura plutôt tendance à récupérer l’image à partir"},
      {"type":"image","src":"images/laconsole/symfony-p071.jpg","alt":"Page originale de Symfony.pdf - page 71"},
      {"type":"h","text":"Page 72"},
      {"type":"p","text":"d’un article que l’inverse, notre relation est bien"},
      {"type":"p","text":"unidirectionnelle et l’entité propriétaire est Article ."},
      {"type":"p","text":"Notez qu’une relation unidirectionnelle permet"},
      {"type":"p","text":"au passage de rendre indépendante l’entité"},
      {"type":"p","text":"Image  : elle pourra donc être utilisée par"},
      {"type":"p","text":"d’autres entités que Article , comme par"},
      {"type":"p","text":"$"},
      {"type":"p","text":"exemple User , pour stocker des avatars"},
      {"type":"p","text":"d’utilisateurs. Et c’est là que le fait de stocker les"},
      {"type":"p","text":"images dans une table à part devient vraiment"},
      {"type":"p","text":"pertinent."},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"image","src":"images/laconsole/symfony-p072.jpg","alt":"Page originale de Symfony.pdf - page 72"},
      {"type":"h","text":"Page 73"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-73-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-73-exemple-2","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"code","filename":"page-73-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: ArticleRe"},
      {"type":"code","filename":"page-73-exemple-4","language":"php","code":"class Article {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\OneToOne(targetEntity: Image:"},
      {"type":"code","filename":"page-73-exemple-5","language":"php","code":"private ?Image $image = null;"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-73-exemple-6","language":"php","code":"public function getImage(): ?Image"},
      {"type":"code","filename":"page-73-exemple-7","language":"php","code":"public function setImage(Image $ima"},
      {"type":"code","filename":"page-73-exemple-8","language":"php","code":"}"},
      {"type":"code","filename":"page-73-exemple-9","language":"php","code":"1.\n$image  est la propriété relationnelle faisant le lien"},
      {"type":"p","text":"avec l’autre entité (équivalent de clé étrangère)."},
      {"type":"p","text":"2.\nORM\\OneToOne  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité 1-1  de la relation. L’argument"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est Image ."},
      {"type":"p","text":"3. Getter et setter de la propriété."},
      {"type":"p","text":"Avec notre modèle unidirectionnel, lorsque nous avons"},
      {"type":"p","text":"un article, nous pouvons trouver l’image qui lui est"},
      {"type":"code","filename":"page-73-exemple-10","language":"php","code":"associée avec $article->getImage() ."},
      {"type":"image","src":"images/laconsole/symfony-p073.jpg","alt":"Page originale de Symfony.pdf - page 73"},
      {"type":"h","text":"Page 74"},
      {"type":"p","text":"Par contre, lorsque nous avons une image, nous"},
      {"type":"p","text":"ne sommes pas en mesure de récupérer l’article"},
      {"type":"p","text":"associé. Il n’est donc pas possible de faire"},
      {"type":"p","text":"⚠"},
      {"type":"code","filename":"page-74-exemple-1","language":"php","code":"$image->getArticle() . Pour cela on aurait"},
      {"type":"p","text":"besoin de déﬁnir notre relation comme"},
      {"type":"p","text":"bidirectionnelle."},
      {"type":"p","text":"Relation bidirectionnelle"},
      {"type":"p","text":"Admettons que nous souhaitons également pouvoir"},
      {"type":"p","text":"accéder à nos articles depuis nos images côté back-ofﬁce"},
      {"type":"p","text":"(peut être utile pour les administrateurs). Chacune des 2"},
      {"type":"p","text":"entités doit alors pouvoir faire référence à l’autre."},
      {"type":"p","text":"Le côté propriétaire d’une association One-To-One"},
      {"type":"h","text":"bidirectionnelle est l’entité avec la table contenant la clé"},
      {"type":"p","text":"étrangère. Ce côté peut être déﬁni comme vous le"},
      {"type":"p","text":"souhaitez, peu importe."},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"image","src":"images/laconsole/symfony-p074.jpg","alt":"Page originale de Symfony.pdf - page 74"},
      {"type":"h","text":"Page 75"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-75-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-75-exemple-2","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"code","filename":"page-75-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: ArticleRe"},
      {"type":"code","filename":"page-75-exemple-4","language":"php","code":"class Article {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\OneToOne(targetEntity: Image:"},
      {"type":"code","filename":"page-75-exemple-5","language":"php","code":"private ?Image $image = null;"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-75-exemple-6","language":"php","code":"public function getImage(): ?Image"},
      {"type":"code","filename":"page-75-exemple-7","language":"php","code":"public function setImage(Image $ima"},
      {"type":"code","filename":"page-75-exemple-8","language":"php","code":"}"},
      {"type":"code","filename":"page-75-exemple-9","language":"php","code":"1.\n$image  est la propriété relationnelle faisant le lien"},
      {"type":"p","text":"avec l’autre entité (équivalent de clé étrangère)."},
      {"type":"p","text":"2.\nORM\\OneToOne  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité 1-1  de la relation. L’argument"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est Image ."},
      {"type":"p","text":"L’argument inversedBy  référence la propriété"},
      {"type":"code","filename":"page-75-exemple-10","language":"php","code":"$article  qui porte la relation côté entité inverse."},
      {"type":"p","text":"3. Getter et setter de la propriété."},
      {"type":"h","text":"Entité inverse"},
      {"type":"image","src":"images/laconsole/symfony-p075.jpg","alt":"Page originale de Symfony.pdf - page 75"},
      {"type":"h","text":"Page 76"},
      {"type":"p","text":"Image.php\ncopier"},
      {"type":"code","filename":"page-76-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-76-exemple-2","language":"php","code":"use App\\Repository\\ImageRepository;"},
      {"type":"code","filename":"page-76-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: ImageRepo"},
      {"type":"code","filename":"page-76-exemple-4","language":"php","code":"class Image {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\OneToOne(targetEntity: Articl"},
      {"type":"code","filename":"page-76-exemple-5","language":"php","code":"private ?Article $article = null;"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-76-exemple-6","language":"php","code":"public function getArticle(): ?Arti"},
      {"type":"code","filename":"page-76-exemple-7","language":"php","code":"public function setArticle(Article"},
      {"type":"code","filename":"page-76-exemple-8","language":"php","code":"}"},
      {"type":"code","filename":"page-76-exemple-9","language":"php","code":"1.\n$article  est la propriété relationnelle faisant le"},
      {"type":"h","text":"lien avec l’entité propriétaire."},
      {"type":"p","text":"2.\nORM\\OneToOne  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité 1-1  de la relation. L’argument"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Article . L’argument mappedBy  référence la"},
      {"type":"code","filename":"page-76-exemple-10","language":"php","code":"propriété $image  qui porte la relation côté entité"},
      {"type":"h","text":"propriétaire."},
      {"type":"p","text":"3. Getter et setter de la propriété."},
      {"type":"image","src":"images/laconsole/symfony-p076.jpg","alt":"Page originale de Symfony.pdf - page 76"},
      {"type":"h","text":"Page 77"},
      {"type":"p","text":"La plupart du temps, une relation One-To-One est"},
      {"type":"p","text":"$"},
      {"type":"h","text":"unidirectionnelle."},
      {"type":"h","text":"Relations 1-n et n-1"},
      {"type":"p","text":"La relation One-To-Many consiste à associer un objet"},
      {"type":"h","text":"avec plusieurs autres."},
      {"type":"p","text":"La relation Many-To-One consiste à associer plusieurs"},
      {"type":"h","text":"objets avec un autre."},
      {"type":"p","text":"Prenons l’exemple d’un article de blog auquel on souhaite"},
      {"type":"p","text":"rattacher une catégorie. Plusieurs articles vont pouvoir être"},
      {"type":"p","text":"liés à une unique catégorie. Ici, nous avons intérêt à pouvoir"},
      {"type":"p","text":"manipuler nos catégories dans une table indépendante pour"},
      {"type":"p","text":"plusieurs raisons :"},
      {"type":"p","text":"Renommer une catégorie : cela se fera une unique fois"},
      {"type":"p","text":"dans la table categories  et non dans chaque colonne"},
      {"type":"p","text":"de la table articles ."},
      {"type":"p","text":"Afﬁcher les catégories sur une page : cela permettra de"},
      {"type":"p","text":"les récupérer simplement en requêtant la table"},
      {"type":"p","text":"categories ."},
      {"type":"p","text":"Hiérarchie : mettre en place un système de hiérarchie"},
      {"type":"p","text":"entre vos catégories (par exemple : musique > rock,"},
      {"type":"p","text":"pop, folk…) n’est possible qu’avec une table dédiée."},
      {"type":"p","text":"…"},
      {"type":"p","text":"Relation unidirectionnelle (n-1)"},
      {"type":"p","text":"Côté Article , la relation est Many-To-One car «"},
      {"type":"p","text":"plusieurs articles peuvent être liés à une seule catégorie"},
      {"type":"image","src":"images/laconsole/symfony-p077.jpg","alt":"Page originale de Symfony.pdf - page 77"},
      {"type":"h","text":"Page 78"},
      {"type":"p","text":"»."},
      {"type":"p","text":"Si la relation est unidirectionnelle, à partir des articles, je"},
      {"type":"p","text":"pourrai récupérer leur catégorie, mais pas l’inverse."},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-78-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-78-exemple-2","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"code","filename":"page-78-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: ArticleRe"},
      {"type":"code","filename":"page-78-exemple-4","language":"php","code":"class Article {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\ManyToOne(targetEntity: Categ"},
      {"type":"code","filename":"page-78-exemple-5","language":"php","code":"private ?Category $category = null;"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-78-exemple-6","language":"php","code":"public function getCategory(): ?Cat"},
      {"type":"code","filename":"page-78-exemple-7","language":"php","code":"public function setCategory(Categor"},
      {"type":"code","filename":"page-78-exemple-8","language":"php","code":"}"},
      {"type":"code","filename":"page-78-exemple-9","language":"php","code":"1.\n$category  est la propriété relationnelle faisant le"},
      {"type":"p","text":"lien avec l’autre entité (équivalent de clé étrangère)."},
      {"type":"p","text":"2.\nORM\\ManyToOne  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité n-1  de la relation. L’argument"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"image","src":"images/laconsole/symfony-p078.jpg","alt":"Page originale de Symfony.pdf - page 78"},
      {"type":"h","text":"Page 79"},
      {"type":"p","text":"Category ."},
      {"type":"p","text":"3. Getter et setter de la propriété."},
      {"type":"p","text":"Avec notre modèle unidirectionnel, lorsque nous avons"},
      {"type":"p","text":"un article, nous pouvons trouver la catégorie qui lui est"},
      {"type":"code","filename":"page-79-exemple-1","language":"php","code":"associée avec $article->getCategory() ."},
      {"type":"p","text":"Par contre, lorsque nous avons une catégorie,"},
      {"type":"p","text":"nous ne sommes pas en mesure de récupérer"},
      {"type":"p","text":"l’article associé. Il n’est donc pas possible de"},
      {"type":"p","text":"⚠"},
      {"type":"code","filename":"page-79-exemple-2","language":"php","code":"faire $category->getArticle() . Pour cela on"},
      {"type":"p","text":"aurait besoin de déﬁnir notre relation comme"},
      {"type":"p","text":"bidirectionnelle."},
      {"type":"p","text":"Relation unidirectionnelle (1-n)"},
      {"type":"p","text":"Côté Category , la relation est One-To-Many car « une"},
      {"type":"p","text":"catégorie peut être associée à plusieurs articles »."},
      {"type":"p","text":"Si la relation est unidirectionnelle, à partir d’une"},
      {"type":"p","text":"catégorie, je pourrai récupérer ses articles, mais pas"},
      {"type":"p","text":"l’inverse."},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"image","src":"images/laconsole/symfony-p079.jpg","alt":"Page originale de Symfony.pdf - page 79"},
      {"type":"h","text":"Page 80"},
      {"type":"p","text":"Category.php\ncopier"},
      {"type":"code","filename":"page-80-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-80-exemple-2","language":"php","code":"use App\\Repository\\CategoyRepository;"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\ArrayCo"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\Collect"},
      {"type":"code","filename":"page-80-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: CategoryR"},
      {"type":"code","filename":"page-80-exemple-4","language":"php","code":"class Category {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\OneToMany(targetEntity: Artic"},
      {"type":"code","filename":"page-80-exemple-5","language":"php","code":"private Collection $articles;"},
      {"type":"code","filename":"page-80-exemple-6","language":"php","code":"public function __construct() {"},
      {"type":"code","filename":"page-80-exemple-7","language":"php","code":"$this->articles = new ArrayColl"},
      {"type":"code","filename":"page-80-exemple-8","language":"php","code":"}"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-80-exemple-9","language":"php","code":"public function getArticles(): Coll"},
      {"type":"code","filename":"page-80-exemple-10","language":"php","code":"public function addArticle(Article"},
      {"type":"code","filename":"page-80-exemple-11","language":"php","code":"public function removeArticle(Artic"},
      {"type":"code","filename":"page-80-exemple-12","language":"php","code":"}"},
      {"type":"code","filename":"page-80-exemple-13","language":"php","code":"1.\n$articles  est la propriété relationnelle faisant le"},
      {"type":"p","text":"lien avec l’autre entité (équivalent de clé étrangère)."},
      {"type":"p","text":"2.\nORM\\OneToMany  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité 1-n  de la relation. L’argument"},
      {"type":"image","src":"images/laconsole/symfony-p080.jpg","alt":"Page originale de Symfony.pdf - page 80"},
      {"type":"h","text":"Page 81"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Article ."},
      {"type":"p","text":"3. Le getter et les méthodes d’ajout addArticle()  et"},
      {"type":"p","text":"de suppression removeArticle()  remplacent le"},
      {"type":"code","filename":"page-81-exemple-1","language":"php","code":"setter car $articles  est voué à contenir un tableau"},
      {"type":"p","text":"d’objets, appelé Collection."},
      {"type":"code","filename":"page-81-exemple-2","language":"php","code":"4. Import des classes de Collection de Doctrine avec"},
      {"type":"p","text":"nos use ."},
      {"type":"h","text":"5. Ajout d’un constructeur pour initialiser notre"},
      {"type":"code","filename":"page-81-exemple-3","language":"php","code":"propriété $articles  comme une collection vide."},
      {"type":"p","text":"Avec notre modèle unidirectionnel, lorsque nous avons"},
      {"type":"p","text":"une catégorie, nous pouvons trouver les articles qui lui"},
      {"type":"code","filename":"page-81-exemple-4","language":"php","code":"sont associés avec $category->getArticles() ."},
      {"type":"p","text":"Par contre, lorsque nous avons un article, nous"},
      {"type":"p","text":"ne sommes pas en mesure de récupérer la"},
      {"type":"p","text":"catégorie associée. Il n’est donc pas possible de"},
      {"type":"p","text":"⚠"},
      {"type":"code","filename":"page-81-exemple-5","language":"php","code":"faire $article->getCategory() . Pour cela on"},
      {"type":"p","text":"aurait besoin de déﬁnir notre relation comme"},
      {"type":"p","text":"bidirectionnelle."},
      {"type":"p","text":"Relation bidirectionnelle (n-1 et 1-n)"},
      {"type":"p","text":"Généralement, sur un blog, nous avons besoin de pouvoir"},
      {"type":"p","text":"accéder depuis un article à sa catégorie mais également"},
      {"type":"p","text":"l’inverse pour lister sur une page les articles publiés dans"},
      {"type":"p","text":"une catégorie. Chacune des 2 entités doit alors pouvoir"},
      {"type":"p","text":"faire référence à l’autre."},
      {"type":"p","text":"Si une relation Many-To-One ou One-To-Many est"},
      {"type":"p","text":"bidirectionnelle alors on aura :"},
      {"type":"p","text":"une relation Many-To-One d’un côté,"},
      {"type":"image","src":"images/laconsole/symfony-p081.jpg","alt":"Page originale de Symfony.pdf - page 81"},
      {"type":"h","text":"Page 82"},
      {"type":"p","text":"une relation One-To-Many de l’autre."},
      {"type":"p","text":"Le côté propriétaire d’une association Many-To-One ou"},
      {"type":"p","text":"One-To-Many bidirectionnelle est l’entité du côté « many"},
      {"type":"p","text":"», celui contenant la clé étrangère."},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-82-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-82-exemple-2","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"code","filename":"page-82-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: ArticleRe"},
      {"type":"code","filename":"page-82-exemple-4","language":"php","code":"class Article {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\ManyToOne(targetEntity: Categ"},
      {"type":"code","filename":"page-82-exemple-5","language":"php","code":"private ?Category $category = null;"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-82-exemple-6","language":"php","code":"public function getCategory(): ?Cat"},
      {"type":"code","filename":"page-82-exemple-7","language":"php","code":"public function setCategory(Categor"},
      {"type":"code","filename":"page-82-exemple-8","language":"php","code":"}"},
      {"type":"code","filename":"page-82-exemple-9","language":"php","code":"1.\n$category  est la propriété relationnelle faisant le"},
      {"type":"p","text":"lien avec l’autre entité (équivalent de clé étrangère)."},
      {"type":"p","text":"2.\nORM\\ManyToOne  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité n-1  de la relation. L’argument"},
      {"type":"image","src":"images/laconsole/symfony-p082.jpg","alt":"Page originale de Symfony.pdf - page 82"},
      {"type":"h","text":"Page 83"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Category . L’argument inversedBy  référence la"},
      {"type":"code","filename":"page-83-exemple-1","language":"php","code":"propriété $articles  qui porte la relation côté"},
      {"type":"h","text":"entité inverse."},
      {"type":"p","text":"3. Getter et setter de la propriété."},
      {"type":"h","text":"Entité inverse"},
      {"type":"image","src":"images/laconsole/symfony-p083.jpg","alt":"Page originale de Symfony.pdf - page 83"},
      {"type":"h","text":"Page 84"},
      {"type":"p","text":"Category.php\ncopier"},
      {"type":"code","filename":"page-84-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-84-exemple-2","language":"php","code":"use App\\Repository\\CategoyRepository;"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\ArrayCo"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\Collect"},
      {"type":"code","filename":"page-84-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: CategoryR"},
      {"type":"code","filename":"page-84-exemple-4","language":"php","code":"class Category {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\OneToMany(targetEntity: Artic"},
      {"type":"code","filename":"page-84-exemple-5","language":"php","code":"private Collection $articles;"},
      {"type":"code","filename":"page-84-exemple-6","language":"php","code":"public function __construct() {"},
      {"type":"code","filename":"page-84-exemple-7","language":"php","code":"$this->articles = new ArrayColl"},
      {"type":"code","filename":"page-84-exemple-8","language":"php","code":"}"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-84-exemple-9","language":"php","code":"public function getArticles(): Coll"},
      {"type":"code","filename":"page-84-exemple-10","language":"php","code":"public function addArticle(Article"},
      {"type":"code","filename":"page-84-exemple-11","language":"php","code":"public function removeArticle(Artic"},
      {"type":"code","filename":"page-84-exemple-12","language":"php","code":"}"},
      {"type":"code","filename":"page-84-exemple-13","language":"php","code":"1.\n$articles  est la propriété relationnelle faisant le"},
      {"type":"h","text":"lien avec l’entité propriétaire."},
      {"type":"p","text":"2.\nORM\\OneToMany  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité 1-n  de la relation. L’argument"},
      {"type":"image","src":"images/laconsole/symfony-p084.jpg","alt":"Page originale de Symfony.pdf - page 84"},
      {"type":"h","text":"Page 85"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Article . L’argument mappedBy  référence la"},
      {"type":"code","filename":"page-85-exemple-1","language":"php","code":"propriété $category  qui porte la relation côté"},
      {"type":"h","text":"entité propriétaire."},
      {"type":"p","text":"3. Le getter et les méthodes d’ajout addArticle()  et"},
      {"type":"p","text":"de suppression removeArticle()  remplacent le"},
      {"type":"code","filename":"page-85-exemple-2","language":"php","code":"setter car $articles  est voué à contenir un tableau"},
      {"type":"p","text":"d’objets, appelé Collection."},
      {"type":"code","filename":"page-85-exemple-3","language":"php","code":"4. Import des classes de Collection de Doctrine avec"},
      {"type":"p","text":"nos use ."},
      {"type":"h","text":"5. Ajout d’un constructeur pour initialiser notre"},
      {"type":"code","filename":"page-85-exemple-4","language":"php","code":"propriété $articles  comme une collection vide."},
      {"type":"p","text":"La plupart du temps, une relation Many-To-One"},
      {"type":"p","text":"$"},
      {"type":"p","text":"ou One-To-Many est bidirectionnelle."},
      {"type":"h","text":"Relation n-n"},
      {"type":"h","text":"La relation Many-To-Many consiste à associer plusieurs"},
      {"type":"h","text":"objets avec plusieurs autres."},
      {"type":"p","text":"Conservons notre exemple de catégories d’articles de blog,"},
      {"type":"p","text":"mais imaginons maintenant qu’un article peut avoir plus"},
      {"type":"p","text":"d’une catégorie. Plusieurs articles vont pouvoir être liés à"},
      {"type":"p","text":"plusieurs catégories."},
      {"type":"p","text":"Relation unidirectionnelle"},
      {"type":"p","text":"Considérons que nous aurons plutôt tendance à"},
      {"type":"p","text":"récupérer les catégories à partir d’un article que l’inverse,"},
      {"type":"p","text":"notre relation est bien unidirectionnelle et l’entité"},
      {"type":"p","text":"propriétaire est Article ."},
      {"type":"image","src":"images/laconsole/symfony-p085.jpg","alt":"Page originale de Symfony.pdf - page 85"},
      {"type":"h","text":"Page 86"},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-86-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-86-exemple-2","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\ArrayCo"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\Collect"},
      {"type":"code","filename":"page-86-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: ArticleRe"},
      {"type":"code","filename":"page-86-exemple-4","language":"php","code":"class Article {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\ManyToMany(targetEntity: Cate"},
      {"type":"code","filename":"page-86-exemple-5","language":"php","code":"private Collection $categories;"},
      {"type":"code","filename":"page-86-exemple-6","language":"php","code":"public function __construct() {"},
      {"type":"code","filename":"page-86-exemple-7","language":"php","code":"$this->categories = new ArrayCo"},
      {"type":"code","filename":"page-86-exemple-8","language":"php","code":"}"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-86-exemple-9","language":"php","code":"public function getCategories(): Co"},
      {"type":"code","filename":"page-86-exemple-10","language":"php","code":"public function addCategory(Categor"},
      {"type":"code","filename":"page-86-exemple-11","language":"php","code":"public function removeCategory(Cate"},
      {"type":"code","filename":"page-86-exemple-12","language":"php","code":"}"},
      {"type":"code","filename":"page-86-exemple-13","language":"php","code":"1.\n$categories  est la propriété relationnelle faisant"},
      {"type":"h","text":"le lien avec l’autre entité."},
      {"type":"image","src":"images/laconsole/symfony-p086.jpg","alt":"Page originale de Symfony.pdf - page 86"},
      {"type":"h","text":"Page 87"},
      {"type":"p","text":"2.\nORM\\ManyToMany  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité n-n  de la relation. L’argument"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Category ."},
      {"type":"p","text":"3. Le getter et les méthodes d’ajout addCategory()"},
      {"type":"p","text":"et de suppression removeCategory()  remplacent"},
      {"type":"code","filename":"page-87-exemple-1","language":"php","code":"le setter car $categories  est voué à contenir un"},
      {"type":"p","text":"tableau d’objets, appelé Collection."},
      {"type":"code","filename":"page-87-exemple-2","language":"php","code":"4. Import des classes de Collection de Doctrine avec"},
      {"type":"p","text":"nos use ."},
      {"type":"h","text":"5. Ajout d’un constructeur pour initialiser notre"},
      {"type":"code","filename":"page-87-exemple-3","language":"php","code":"propriété $categories  comme une collection vide."},
      {"type":"p","text":"Avec notre modèle unidirectionnel, lorsque nous avons"},
      {"type":"p","text":"un article, nous pouvons trouver les catégories qui lui"},
      {"type":"code","filename":"page-87-exemple-4","language":"php","code":"sont associées avec $article->getCategories() ."},
      {"type":"p","text":"Par contre, lorsque nous avons une catégorie,"},
      {"type":"p","text":"nous ne sommes pas en mesure de récupérer"},
      {"type":"p","text":"les articles associés. Il n’est donc pas possible"},
      {"type":"p","text":"⚠"},
      {"type":"code","filename":"page-87-exemple-5","language":"php","code":"de faire $category->getArticles() . Pour"},
      {"type":"p","text":"cela on aurait besoin de déﬁnir notre relation"},
      {"type":"p","text":"comme bidirectionnelle."},
      {"type":"p","text":"Relation bidirectionnelle"},
      {"type":"p","text":"Admettons que nous souhaitons également pouvoir"},
      {"type":"p","text":"accéder à nos articles depuis nos catégories. Chacune"},
      {"type":"p","text":"des 2 entités doit pouvoir faire référence à l’autre."},
      {"type":"p","text":"Le côté propriétaire d’une association Many-To-Many"},
      {"type":"h","text":"bidirectionnelle est celui que nous souhaitons."},
      {"type":"h","text":"Entité propriétaire"},
      {"type":"image","src":"images/laconsole/symfony-p087.jpg","alt":"Page originale de Symfony.pdf - page 87"},
      {"type":"h","text":"Page 88"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-88-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-88-exemple-2","language":"php","code":"use App\\Repository\\ArticleRepository;"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\ArrayCo"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\Collect"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"code","filename":"page-88-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORMEntity(repositoryClass: ArticleRep"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"code","filename":"page-88-exemple-4","language":"php","code":"class Article {"},
      {"type":"p","text":"Doctrine : c’est quoi ?"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"Modèles, sans Doctrine"},
      {"type":"p","text":"Modèles, avec Doctrine"},
      {"type":"p","text":"Doctrine DBAL"},
      {"type":"p","text":"#[ORM\\ManyToMany(targetEntity: Cate"},
      {"type":"code","filename":"page-88-exemple-5","language":"php","code":"private Collection $categories;"},
      {"type":"p","text":"Doctrine ORM"},
      {"type":"p","text":"Schéma récapitulatif"},
      {"type":"p","text":"Base de données"},
      {"type":"code","filename":"page-88-exemple-6","language":"php","code":"public function __construct() {"},
      {"type":"code","filename":"page-88-exemple-7","language":"php","code":"$this->categories = new ArrayCo"},
      {"type":"p","text":"Conﬁguration"},
      {"type":"code","filename":"page-88-exemple-8","language":"php","code":"}"},
      {"type":"p","text":"Création"},
      {"type":"p","text":"Suppression"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"p","text":"Entités"},
      {"type":"p","text":"Qu’est-ce qu’une entité ?"},
      {"type":"p","text":"Créer une entité"},
      {"type":"code","filename":"page-88-exemple-9","language":"php","code":"public function getCategories(): Co"},
      {"type":"code","filename":"page-88-exemple-10","language":"php","code":"public function addCategory(Categor"},
      {"type":"p","text":"Modiﬁer une entité"},
      {"type":"code","filename":"page-88-exemple-11","language":"php","code":"public function removeCategory(Cate"},
      {"type":"p","text":"Supprimer une entité"},
      {"type":"p","text":"Relations entre entités"},
      {"type":"code","filename":"page-88-exemple-12","language":"php","code":"}"},
      {"type":"p","text":"Généralités"},
      {"type":"p","text":"Direction"},
      {"type":"p","text":"Créer une relation"},
      {"type":"code","filename":"page-88-exemple-13","language":"php","code":"1.\n$categories  est la propriété relationnelle faisant"},
      {"type":"p","text":"Multiplicité"},
      {"type":"h","text":"le lien avec l’autre entité."},
      {"type":"p","text":"Relation 1-1"},
      {"type":"p","text":"2.\nORM\\ManyToMany  est un attribut, spéciﬁant la"},
      {"type":"p","text":"Relations 1-n et n-1"},
      {"type":"p","text":"multiplicité n-n  de la relation. L’argument"},
      {"type":"p","text":"Relation n-n"},
      {"type":"image","src":"images/laconsole/symfony-p088.jpg","alt":"Page originale de Symfony.pdf - page 88"},
      {"type":"h","text":"Page 89"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Category . L’argument inversedBy  référence la"},
      {"type":"code","filename":"page-89-exemple-1","language":"php","code":"propriété $articles  qui porte la relation côté"},
      {"type":"h","text":"entité inverse."},
      {"type":"p","text":"3. Le getter et les méthodes d’ajout addCategory()"},
      {"type":"p","text":"et de suppression removeCategory()  remplacent"},
      {"type":"code","filename":"page-89-exemple-2","language":"php","code":"le setter car $categories  est voué à contenir un"},
      {"type":"p","text":"tableau d’objets, appelé Collection."},
      {"type":"code","filename":"page-89-exemple-3","language":"php","code":"4. Import des classes de Collection de Doctrine avec"},
      {"type":"p","text":"nos use ."},
      {"type":"h","text":"5. Ajout d’un constructeur pour initialiser notre"},
      {"type":"code","filename":"page-89-exemple-4","language":"php","code":"propriété $categories  comme une collection vide."},
      {"type":"p","text":"Seule l’entité propriétaire (celle avec le"},
      {"type":"h","text":"inversedBy ) est responsable de la persistance"},
      {"type":"p","text":"de la relation dans la table de jointure. Il est"},
      {"type":"p","text":"donc important, dans cet exemple, que ce soit"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"l’entité Article  qui soit propriétaire, aﬁn que"},
      {"type":"p","text":"les catégories associées (entité Category )"},
      {"type":"p","text":"soient créées dans la table de jointure lors de"},
      {"type":"p","text":"l’enregistrement d’un article."},
      {"type":"h","text":"Entité inverse"},
      {"type":"image","src":"images/laconsole/symfony-p089.jpg","alt":"Page originale de Symfony.pdf - page 89"},
      {"type":"h","text":"Page 90"},
      {"type":"p","text":"Category.php\ncopier"},
      {"type":"code","filename":"page-90-exemple-1","language":"php","code":"namespace App\\Entity;"},
      {"type":"code","filename":"page-90-exemple-2","language":"php","code":"use App\\Repository\\CategoryRepository;"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\ArrayCo"},
      {"type":"p","text":"use Doctrine\\Common\\Collections\\Collect"},
      {"type":"code","filename":"page-90-exemple-3","language":"php","code":"use Doctrine\\ORM\\Mapping as ORM;"},
      {"type":"p","text":"#[ORM\\Entity(repositoryClass: CategoryR"},
      {"type":"code","filename":"page-90-exemple-4","language":"php","code":"class Category {"},
      {"type":"p","text":"// Propriétés ..."},
      {"type":"p","text":"#[ORM\\ManyToMany(targetEntity: Arti"},
      {"type":"code","filename":"page-90-exemple-5","language":"php","code":"private Collection $articles;"},
      {"type":"code","filename":"page-90-exemple-6","language":"php","code":"public function __construct() {"},
      {"type":"code","filename":"page-90-exemple-7","language":"php","code":"$this->articles = new ArrayColl"},
      {"type":"code","filename":"page-90-exemple-8","language":"php","code":"}"},
      {"type":"p","text":"// Getters et setters ..."},
      {"type":"code","filename":"page-90-exemple-9","language":"php","code":"public function getArticles(): Coll"},
      {"type":"code","filename":"page-90-exemple-10","language":"php","code":"public function addArticle(Article"},
      {"type":"code","filename":"page-90-exemple-11","language":"php","code":"public function removeArticle(Artic"},
      {"type":"code","filename":"page-90-exemple-12","language":"php","code":"}"},
      {"type":"code","filename":"page-90-exemple-13","language":"php","code":"1.\n$articles  est la propriété relationnelle faisant le"},
      {"type":"h","text":"lien avec l’entité propriétaire."},
      {"type":"p","text":"2.\nORM\\ManyToMany  est un attribut, spéciﬁant la"},
      {"type":"p","text":"multiplicité n-n  de la relation. L’argument"},
      {"type":"image","src":"images/laconsole/symfony-p090.jpg","alt":"Page originale de Symfony.pdf - page 90"},
      {"type":"h","text":"Page 91"},
      {"type":"p","text":"targetEntity  précise que l’entité liée est"},
      {"type":"p","text":"Article . L’argument mappedBy  référence la"},
      {"type":"code","filename":"page-91-exemple-1","language":"php","code":"propriété $categories  qui porte la relation côté"},
      {"type":"h","text":"entité propriétaire."},
      {"type":"p","text":"3. Le getter et les méthodes d’ajout addArticle()  et"},
      {"type":"p","text":"de suppression removeArticle()  remplacent le"},
      {"type":"code","filename":"page-91-exemple-2","language":"php","code":"setter car $articles  est voué à contenir un tableau"},
      {"type":"p","text":"d’objets, appelé Collection."},
      {"type":"code","filename":"page-91-exemple-3","language":"php","code":"4. Import des classes de Collection de Doctrine avec"},
      {"type":"p","text":"nos use ."},
      {"type":"h","text":"5. Ajout d’un constructeur pour initialiser notre"},
      {"type":"code","filename":"page-91-exemple-4","language":"php","code":"propriété $articles  comme une collection vide."},
      {"type":"p","text":"La plupart du temps, une relation Many-To-Many"},
      {"type":"p","text":"$"},
      {"type":"h","text":"est bidirectionnelle."},
      {"type":"h","text":"Aller plus loin"},
      {"type":"h","text":"Opérations en cascade"},
      {"type":"p","text":"Nous serons souvent amenés à enregistrer ou encore à"},
      {"type":"p","text":"supprimer des données en base de données."},
      {"type":"p","text":"L’argument cascade  spéciﬁe que les actions devront"},
      {"type":"p","text":"s’effectuer en cascade. Autrement dit, les opérations de"},
      {"type":"p","text":"persistance (enregistrement en base de données) et de"},
      {"type":"p","text":"suppression sur une entité A seront répercutées sur l’entité"},
      {"type":"p","text":"B."},
      {"type":"image","src":"images/laconsole/symfony-p091.jpg","alt":"Page originale de Symfony.pdf - page 91"},
      {"type":"h","text":"Page 92"},
      {"type":"p","text":"Article.php\ncopier"},
      {"type":"code","filename":"page-92-exemple-1","language":"php","code":"#[ORM\\OneToOne(targetEntity: Image::class"},
      {"type":"code","filename":"page-92-exemple-2","language":"php","code":"private Image $image;"},
      {"type":"p","text":"J’indique ici que si un article est enregistré ( persist ) ou"},
      {"type":"h","text":"supprimé ( remove ), il faudra automatiquement enregistrer"},
      {"type":"h","text":"ou supprimer l’image associée."},
      {"type":"h","text":"Valeur Description"},
      {"type":"p","text":"persist\nSi l’entité A est sauvegardée, faire de même"},
      {"type":"p","text":"avec l’entité B associée."},
      {"type":"p","text":"remove\nSi l’entité A est supprimée, faire de même avec"},
      {"type":"p","text":"l’entité B associée."},
      {"type":"p","text":"On place l’argument nommé cascade  du côté de l’entité"},
      {"type":"p","text":"qui doit subir l’opération en cascade."},
      {"type":"p","text":"Sur Instagram, si je supprime un utilisateur, je supprime"},
      {"type":"p","text":"ses publications."},
      {"type":"p","text":"Sur Amazon, si je supprime un produit, je supprime les"},
      {"type":"p","text":"évaluations associées."},
      {"type":"p","text":"Sur StackOverﬂow, si je supprime une question, je"},
      {"type":"p","text":"supprime les réponses associées."},
      {"type":"p","text":"…"},
      {"type":"h","text":"Relation facultative / obligatoire"},
      {"type":"image","src":"images/laconsole/symfony-p092.jpg","alt":"Page originale de Symfony.pdf - page 92"},
      {"type":"h","text":"Page 93"},
      {"type":"p","text":"Si par défaut, une propriété est déﬁni comme obligatoire"},
      {"type":"p","text":"( ORM\\JoinColumn(nullable: false)  implicite), ce n’est"},
      {"type":"p","text":"pas le cas d’une relation qui sera par défaut facultative."},
      {"type":"p","text":"C’est-à-dire qu’elle possède de manière implicite l’attribut"},
      {"type":"p","text":"PHP ORM\\JoinColumn(nullable: true) ."},
      {"type":"p","text":"Néanmoins, il est possible de la rendre obligatoire en"},
      {"type":"p","text":"déﬁnissant cet attribut à false ."},
      {"type":"h","text":"Statut Description"},
      {"type":"p","text":"nullable:"},
      {"type":"p","text":"Une entité A peut être liée à une entité B."},
      {"type":"p","text":"true"},
      {"type":"p","text":"Facultatif car il s’agit du comportement par"},
      {"type":"p","text":"défaut."},
      {"type":"p","text":"nullable:"},
      {"type":"h","text":"Une entité A est obligatoirement liée à une"},
      {"type":"p","text":"entité B."},
      {"type":"p","text":"false"},
      {"type":"p","text":"Imaginons qu’un article peut recevoir plusieurs"},
      {"type":"p","text":"commentaires. Un article n’a pas obligatoirement reçu de"},
      {"type":"p","text":"commentaires. Dans l’entité Comment , je ne précise rien car"},
      {"type":"p","text":"par défaut ORM\\JoinColumn(nullable: true)  sera sous-"},
      {"type":"p","text":"entendu :"},
      {"type":"p","text":"Comment.php\ncopier"},
      {"type":"p","text":"#[ORM\\ManyToOne(targetEntity: Article::cl"},
      {"type":"code","filename":"page-93-exemple-1","language":"php","code":"private ?Article $article = null;"},
      {"type":"p","text":"En revanche, si la relation est obligatoire, par exemple sur"},
      {"type":"p","text":"une application bancaire, un compte bancaire sera"},
      {"type":"p","text":"obligatoirement possédé par un client, on précisera dans"},
      {"type":"p","text":"l’entité Account , que la relation avec un User  est"},
      {"type":"image","src":"images/laconsole/symfony-p093.jpg","alt":"Page originale de Symfony.pdf - page 93"},
      {"type":"h","text":"Page 94"},
      {"type":"p","text":"obligatoire."},
      {"type":"p","text":"Account.php\ncopier"},
      {"type":"code","filename":"page-94-exemple-1","language":"php","code":"#[ORM\\ManyToOne(targetEntity: User::class"},
      {"type":"p","text":"#[ORM\\JoinColumn(nullable: false)]"},
      {"type":"code","filename":"page-94-exemple-2","language":"php","code":"private ?User $owner = null;"},
      {"type":"p","text":"Depuis PHP 8 , nous pouvons nous passer de"},
      {"type":"p","text":"l’attribut JoinColumn(nullable: false)  et"},
      {"type":"p","text":"laisser le typage PHP natif gérer ce rôle. Ainsi,"},
      {"type":"p","text":"$"},
      {"type":"p","text":"l’absence du caractère ?  devant la classe indique"},
      {"type":"p","text":"que la relation n’est pas facultative. Exemple :"},
      {"type":"code","filename":"page-94-exemple-3","language":"php","code":"private User $owner;"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-94-exemple-4","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Migrations"},
      {"type":"p","text":"Les migrations sont les ﬁchiers responsables de la mise à"},
      {"type":"p","text":"jour de la structure de votre base de données. On parle de"},
      {"type":"p","text":"schéma, de structure de base de données."},
      {"type":"image","src":"images/laconsole/symfony-p094.jpg","alt":"Page originale de Symfony.pdf - page 94"},
      {"type":"h","text":"Page 95"},
      {"type":"p","text":"Elles permettent de versionner les modiﬁcations effectuées"},
      {"type":"p","text":"sur la base de données aﬁn d’en faciliter et d’en sécuriser le"},
      {"type":"h","text":"déploiement."},
      {"type":"p","text":"Concrètement, une migration est une classe PHP qui va"},
      {"type":"p","text":"contenir le code SQL chargé de mettre à jour notre schéma"},
      {"type":"p","text":"de données."},
      {"type":"h","text":"C’est la librairie DoctrineMigrationsBundle qui est"},
      {"type":"p","text":"$"},
      {"type":"p","text":"chargée de gérer les migrations."},
      {"type":"h","text":"Générer une migration"},
      {"type":"p","text":"Lorsque nous avons créé nos premières entités dans notre"},
      {"type":"p","text":"application, nous allons pouvoir générer une première"},
      {"type":"p","text":"migration qui aura pour but de créer les tables et relations"},
      {"type":"p","text":"correspondantes en base de données."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-95-exemple-1","language":"php","code":"symfony console make:migration"},
      {"type":"p","text":"Cette ligne de commande générera un ﬁchier"},
      {"type":"p","text":"migrations/Version[numero_de_version].php ."},
      {"type":"p","text":"Vous constaterez que des ﬁchiers de migration sont des"},
      {"type":"h","text":"classes qui possèdent 3 méthodes principales :"},
      {"type":"p","text":"getDescription()  : permet de décrire les"},
      {"type":"p","text":"modiﬁcations apportées à travers notre migration (c’est"},
      {"type":"code","filename":"page-95-exemple-2","language":"php","code":"un peu comme le message d’un git commit ). Par"},
      {"type":"p","text":"défaut, cette méthode retourne une chaîne de"},
      {"type":"p","text":"caractères vide, mais si vous le souhaitez vous pouvez"},
      {"type":"image","src":"images/laconsole/symfony-p095.jpg","alt":"Page originale de Symfony.pdf - page 95"},
      {"type":"h","text":"Page 96"},
      {"type":"p","text":"rédiger une description vous-même."},
      {"type":"p","text":"up()  : cette fonction contient les instructions SQL qui"},
      {"type":"p","text":"vont mettre à jour la structure de la base de données."},
      {"type":"p","text":"down()  : cette fonction contient les instructions SQL"},
      {"type":"h","text":"qui vont annuler les potentielles modiﬁcations"},
      {"type":"p","text":"apportées par la méthode up() ."},
      {"type":"p","text":"Il arrive de retrouver votre migration dans"},
      {"type":"p","text":"src/Migrations  en fonction des paramètres par"},
      {"type":"p","text":"$"},
      {"type":"p","text":"défaut de votre version de"},
      {"type":"p","text":"DoctrineMigrationsBundle."},
      {"type":"h","text":"Appliquer une migration"},
      {"type":"p","text":"Une fois la migration générée, il faut l’appliquer pour voir"},
      {"type":"p","text":"des changements du côté de notre base de données."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-96-exemple-1","language":"php","code":"symfony console doctrine:migrations:migra"},
      {"type":"p","text":"La structure de votre base de données est dorénavant"},
      {"type":"p","text":"identique à celle de vos entités."},
      {"type":"p","text":"Cette ligne de commande vous mettra en garde"},
      {"type":"p","text":"comme quoi vous vous apprêtez potentiellement à"},
      {"type":"p","text":"modiﬁer la structure de votre base de données, et"},
      {"type":"p","text":"$"},
      {"type":"p","text":"que par conséquent, vous pourriez perdre des"},
      {"type":"p","text":"données (si vous supprimez par exemple une"},
      {"type":"p","text":"colonne de votre table qui contenait des données)."},
      {"type":"p","text":"doctrine:migrations:migrate  exécute en réalité la"},
      {"type":"image","src":"images/laconsole/symfony-p096.jpg","alt":"Page originale de Symfony.pdf - page 96"},
      {"type":"h","text":"Page 97"},
      {"type":"p","text":"dernière migration générée mais il est possible d’exécuter /"},
      {"type":"p","text":"annuler une migration spéciﬁque avec la commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-97-exemple-1","language":"php","code":"symfony console doctrine:migrations:execu"},
      {"type":"h","text":"Numéro de version : ici"},
      {"type":"p","text":"DoctrineMigrations\\Version20200619074820  (ne"},
      {"type":"p","text":"pas oublier DoctrineMigrations\\  au début)."},
      {"type":"h","text":"Méthode à exécuter : --up  indique qu’on exécute la"},
      {"type":"p","text":"migration et --down  indique qu’on l’annule."},
      {"type":"code","filename":"page-97-exemple-2","language":"php","code":"Les commandes symfony console make:migration  et"},
      {"type":"code","filename":"page-97-exemple-3","language":"php","code":"symfony console doctrine:migrations:migrate"},
      {"type":"p","text":"constituent une routine que vous devrez systématiquement"},
      {"type":"p","text":"effectuer après avoir mis à jour vos entités."},
      {"type":"p","text":"Précédent :\n5. Gérer\nses\nTemplates\navec Twig"},
      {"type":"p","text":"Suivant :\n7.\nManipuler\nses\nEntités\n(CRUD)"},
      {"type":"p","text":"〈"},
      {"type":"p","text":"〉"},
      {"type":"image","src":"images/laconsole/symfony-p097.jpg","alt":"Page originale de Symfony.pdf - page 97"},
      {"type":"h","text":"Page 98"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"+"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques sont"},
      {"type":"p","text":"remplacées par des lignes de\ncode. J'en fais mon métier puis je"},
      {"type":"p","text":""},
      {"type":"p","text":"décide de transmettre cette\npassion en école de dev et sur"},
      {"type":"p","text":"laConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au\ndéveloppement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/symfony-p098.jpg","alt":"Page originale de Symfony.pdf - page 98"},
      {"type":"h","text":"Page 99"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-99-exemple-1","language":"php","code":"Symfony 6 › Gérer ses Templates\navec Twig"},
      {"type":"h","text":""},
      {"type":"p","text":"Twig est un moteur de template. Son rôle est de dynamiser les templates d'une"},
      {"type":"p","text":"application en exploitant les mécaniques de la programmation."},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-99-exemple-2","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 5. GÉRER SES TEMPLATES AVEC TWIG"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Twig : un moteur de"},
      {"type":"h","text":"template"},
      {"type":"h","text":"Qu’est-ce qu’un moteur de templates ?"},
      {"type":"p","text":"PHP peut être considéré comme un moteur de template car"},
      {"type":"p","text":"il permet de dynamiser les templates d’un site web en"},
      {"type":"p","text":"mélangeant du code PHP et du code HTML. Néanmoins,"},
      {"type":"image","src":"images/laconsole/symfony-p099.jpg","alt":"Page originale de Symfony.pdf - page 99"},
      {"type":"h","text":"Page 100"},
      {"type":"p","text":"cela reste très verbeux et parfois peu adapté à nos besoins."},
      {"type":"p","text":"Un moteur de template propose ainsi un langage dédié à la"},
      {"type":"p","text":"création de nos interfaces, laissant PHP exclusivement en"},
      {"type":"p","text":"charge de la logique applicative."},
      {"type":"p","text":"Ce langage est, tout comme PHP, interprété côté serveur"},
      {"type":"p","text":"(exécution des boucles, conditions, fonctions, lecture des"},
      {"type":"h","text":"variables…) aﬁn de retourner un ﬁchier HTML statique au"},
      {"type":"h","text":"client."},
      {"type":"p","text":"Twig est un moteur de templates pour le langage PHP. Il a,"},
      {"type":"code","filename":"page-100-exemple-1","language":"php","code":"à l’origine, été développé pour le framework Symfony."},
      {"type":"h","text":"Exemple de PHP traditionnel"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-100-exemple-2","language":"php","code":"<?php if count($articles) > 0) { ?>"},
      {"type":"code","filename":"page-100-exemple-3","language":"php","code":"<?php foreach ($articles as $article)"},
      {"type":"code","filename":"page-100-exemple-4","language":"php","code":"<article class=\"product\">"},
      {"type":"code","filename":"page-100-exemple-5","language":"php","code":"<h2 class=\"product-title\"><?="},
      {"type":"code","filename":"page-100-exemple-6","language":"php","code":"<p class=\"product-description"},
      {"type":"code","filename":"page-100-exemple-7","language":"php","code":"<span class=\"product-date\">Pu"},
      {"type":"code","filename":"page-100-exemple-8","language":"php","code":"</article>"},
      {"type":"code","filename":"page-100-exemple-9","language":"php","code":"<?php } ?>"},
      {"type":"code","filename":"page-100-exemple-10","language":"php","code":"<?php } else { ?>"},
      {"type":"code","filename":"page-100-exemple-11","language":"php","code":"<p>Aucun produit...</p>"},
      {"type":"code","filename":"page-100-exemple-12","language":"php","code":"<?php } ?>"},
      {"type":"h","text":"Équivalent Twig"},
      {"type":"image","src":"images/laconsole/symfony-p100.jpg","alt":"Page originale de Symfony.pdf - page 100"},
      {"type":"h","text":"Page 101"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-101-exemple-1","language":"php","code":"{% for article in articles %}"},
      {"type":"code","filename":"page-101-exemple-2","language":"php","code":"<article class=\"product\">"},
      {"type":"code","filename":"page-101-exemple-3","language":"php","code":"<h2 class=\"product-title\">{{ prod"},
      {"type":"code","filename":"page-101-exemple-4","language":"php","code":"<p class=\"product-description\">{{"},
      {"type":"code","filename":"page-101-exemple-5","language":"php","code":"<span class=\"product-date\">Publié"},
      {"type":"code","filename":"page-101-exemple-6","language":"php","code":"</article>"},
      {"type":"code","filename":"page-101-exemple-7","language":"php","code":"{% else %}"},
      {"type":"code","filename":"page-101-exemple-8","language":"php","code":"<p>Aucun produit...</p>"},
      {"type":"code","filename":"page-101-exemple-9","language":"php","code":"{% endfor %}"},
      {"type":"p","text":"Un peu mieux n’est-ce pas ?!"},
      {"type":"h","text":"Pourquoi utiliser un moteur de template ?"},
      {"type":"p","text":"Un moteur de template vient avec son lot d’avantages et un"},
      {"type":"p","text":"inconvénient évident."},
      {"type":"p","text":"Avantages"},
      {"type":"p","text":"Des templates plus clairs et concis : Twig est moins"},
      {"type":"p","text":"verbeux que PHP et sa syntaxe est pensée pour être"},
      {"type":"p","text":"intuitive."},
      {"type":"p","text":"La sécurité : Twig échappe par défaut les variables à"},
      {"type":"p","text":"l’afﬁchage ( htmlspecialchars()  automatiques)."},
      {"type":"p","text":"Support de nombreuses fonctionnalités utiles :"},
      {"type":"p","text":"héritage, inclusions…"},
      {"type":"p","text":"Une architecture qualitative : en utilisant un moteur de"},
      {"type":"p","text":"template comme Twig, il est impossible d’écrire du"},
      {"type":"image","src":"images/laconsole/symfony-p101.jpg","alt":"Page originale de Symfony.pdf - page 101"},
      {"type":"h","text":"Page 102"},
      {"type":"p","text":"PHP dans nos templates, cela nous force ainsi à"},
      {"type":"h","text":"séparer la logique applicative de l’afﬁchage."},
      {"type":"p","text":"Inconvénient"},
      {"type":"p","text":"L’apprentissage d’une nouvelle technologie."},
      {"type":"p","text":"En bref, Twig, c’est facile, beau, puissant et sécurisé !"},
      {"type":"h","text":"Syntaxe (délimiteurs)"},
      {"type":"p","text":"Ce moteur de template permet de dynamiser des pages"},
      {"type":"p","text":"web via tout un tas de fonctionnalités. Ces dernières sont"},
      {"type":"p","text":"exploitables au sein de délimiteurs. On distingue 3 types"},
      {"type":"h","text":"de délimiteurs :"},
      {"type":"p","text":"Commentaires : comme tout langage, Twig propose"},
      {"type":"h","text":"une syntaxe pour écrire des commentaires au sein du"},
      {"type":"code","filename":"page-102-exemple-1","language":"php","code":"code avec les délimiteurs {# Mon commentaire … #} ."},
      {"type":"p","text":"Contrairement aux commentaires HTML, ceux-ci"},
      {"type":"p","text":"n’apparaîtront pas dans la page générée."},
      {"type":"p","text":"Expressions (variables, fonctions et ﬁltres) : l’afﬁchage"},
      {"type":"p","text":"des variables, du résultat de fonctions ou encore de"},
      {"type":"code","filename":"page-102-exemple-2","language":"php","code":"ﬁltres se fera au sein des délimiteurs {{ expression"},
      {"type":"code","filename":"page-102-exemple-3","language":"php","code":"}} ."},
      {"type":"p","text":"Tags : les tags regroupent l’ensemble des mécanismes"},
      {"type":"p","text":"dynamiques de Twig. Il s’agit d’exécuter des structures"},
      {"type":"p","text":"de contrôle (conditions), structures itératives (boucles),"},
      {"type":"p","text":"mécaniques d’héritage et d’inclusions de template, etc."},
      {"type":"code","filename":"page-102-exemple-4","language":"php","code":"On les écrira au sein des délimiteurs {% tag %} ."},
      {"type":"image","src":"images/laconsole/symfony-p102.jpg","alt":"Page originale de Symfony.pdf - page 102"},
      {"type":"h","text":"Page 103"},
      {"type":"p","text":"Les délimiteurs sont représentés dans Twig,"},
      {"type":"p","text":"comme dans de nombreux autres moteurs de"},
      {"type":"p","text":"templates, par des accolades. Ce sont elles qui"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"vont vous permettre de dire dans votre ﬁchier Twig"},
      {"type":"p","text":": « Attention, ici, c’est du Twig ! », tout comme les"},
      {"type":"code","filename":"page-103-exemple-1","language":"php","code":"balises PHP <?php ... ?> ."},
      {"type":"h","text":"Extension .html.twig"},
      {"type":"p","text":"Tous les ﬁchiers Twig porteront l’extension .html.twig ."},
      {"type":"h","text":"Mise en page"},
      {"type":"p","text":"Pour comprendre la mise en page avec Twig, il est"},
      {"type":"p","text":"important de comprendre les notions de"},
      {"type":"p","text":"layout, pages et"},
      {"type":"p","text":"partials"},
      {"type":"p","text":"."},
      {"type":"h","text":"Héritage"},
      {"type":"h","text":"En Programmation Orientée Objet (POO), l’héritage"},
      {"type":"h","text":"consiste à hériter des propriétés et méthodes d’un élément."},
      {"type":"p","text":"Avec Twig, l’héritage consiste à hériter de la mise en page"},
      {"type":"p","text":"d’un parent."},
      {"type":"h","text":"L’héritage consiste à structurer ses templates de manière à"},
      {"type":"h","text":"les emboîter entre eux."},
      {"type":"p","text":"Cette mécanique est une implémentation des pseudo-"},
      {"type":"p","text":"frames en PHP, consistant à router notre application vers le"},
      {"type":"p","text":"ﬁchier"},
      {"type":"p","text":"index.php  en faisant varier un paramètre"},
      {"type":"image","src":"images/laconsole/symfony-p103.jpg","alt":"Page originale de Symfony.pdf - page 103"},
      {"type":"h","text":"Page 104"},
      {"type":"code","filename":"page-104-exemple-1","language":"php","code":"$_GET['page'] , de sorte à ce que notre layout charge"},
      {"type":"h","text":"dynamiquement la page adaptée à la requête envoyée par"},
      {"type":"p","text":"le client."},
      {"type":"h","text":"L’héritage permet ainsi d’éviter la répétition du code de la"},
      {"type":"p","text":"mise en page globale commune à plusieurs pages. Mettre"},
      {"type":"p","text":"en place l’héritage consiste à :"},
      {"type":"p","text":"1. Créer un template parent qui va contenir le design"},
      {"type":"p","text":"global du site (= le layout, contenant les éléments"},
      {"type":"p","text":"communs à plusieurs pages)."},
      {"type":"p","text":"2. Création des templates enfants, qui vont hériter du"},
      {"type":"h","text":"parent, en y ajoutant un contenu spéciﬁque et unique"},
      {"type":"p","text":"(= les pages)."},
      {"type":"h","text":"Parent"},
      {"type":"p","text":"Le parent est le template contenant les balises de premier"},
      {"type":"h","text":"niveau ( html , head  et body ) et la mise en page globale"},
      {"type":"p","text":"d’un site web."},
      {"type":"code","filename":"page-104-exemple-2","language":"php","code":"Par défaut, lorsque vous initialisez un projet Symfony, vous"},
      {"type":"p","text":"possédez déjà le ﬁchier qui va jouer le rôle de template"},
      {"type":"p","text":"parent, il s’agit du ﬁchier"},
      {"type":"p","text":"base.html.twig , situé à la"},
      {"type":"p","text":"racine du dossier"},
      {"type":"p","text":"templates. On l’appelle le « layout » de"},
      {"type":"p","text":"notre site."},
      {"type":"image","src":"images/laconsole/symfony-p104.jpg","alt":"Page originale de Symfony.pdf - page 104"},
      {"type":"h","text":"Page 105"},
      {"type":"p","text":"base.html.twig\ncopier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-105-exemple-1","language":"php","code":"<html>"},
      {"type":"code","filename":"page-105-exemple-2","language":"php","code":"<head>"},
      {"type":"code","filename":"page-105-exemple-3","language":"php","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-105-exemple-4","language":"php","code":"<title>{% block title %}Welcome!{"},
      {"type":"code","filename":"page-105-exemple-5","language":"php","code":"</head>"},
      {"type":"code","filename":"page-105-exemple-6","language":"php","code":"<body>"},
      {"type":"code","filename":"page-105-exemple-7","language":"php","code":"{% block body %}{% endblock %}"},
      {"type":"code","filename":"page-105-exemple-8","language":"php","code":"</body>"},
      {"type":"code","filename":"page-105-exemple-9","language":"php","code":"</html>"},
      {"type":"p","text":"Vous constaterez que j’ai volontairement omis"},
      {"type":"p","text":"d’écrire dans cet extrait les blocs stylesheets  et"},
      {"type":"p","text":"&"},
      {"type":"p","text":"javascripts , car je ne souhaite à ce stade pas"},
      {"type":"p","text":"encore développer leur usage."},
      {"type":"code","filename":"page-105-exemple-10","language":"php","code":"Notre attention va se porter sur les 2 blocs Twig {% block"},
      {"type":"code","filename":"page-105-exemple-11","language":"php","code":"title %}  et {% block body %}"},
      {"type":"p","text":"Ici, le rôle de ces balises est de déﬁnir dans le layout des"},
      {"type":"code","filename":"page-105-exemple-12","language":"php","code":"zones identiﬁées avec la syntaxe {% block nom_du_bloc"},
      {"type":"code","filename":"page-105-exemple-13","language":"php","code":"%} ... {% endblock %} . Ces zones sont vouées à"},
      {"type":"p","text":"accueillir du contenu, déﬁni au niveau du template enfant."},
      {"type":"p","text":"Ici, le block body  va inclure le contenu propre à chaque"},
      {"type":"p","text":"page."},
      {"type":"p","text":"Comme vous pouvez le constater, ces zones peuvent :"},
      {"type":"p","text":"Être totalement vierges (la plupart du temps, comme"},
      {"type":"p","text":"c’est le cas du block body )"},
      {"type":"h","text":"Déjà contenir des informations (parfois, comme c’est le"},
      {"type":"image","src":"images/laconsole/symfony-p105.jpg","alt":"Page originale de Symfony.pdf - page 105"},
      {"type":"h","text":"Page 106"},
      {"type":"p","text":"cas du block title ). Il y a 2 cas de ﬁgure pour"},
      {"type":"p","text":"lesquels on pourra mettre du contenu à l’intérieur des"},
      {"type":"p","text":"blocs déﬁnis par le parent :"},
      {"type":"p","text":"1. Si le template enfant ne va pas remplir cette zone,"},
      {"type":"p","text":"nous aurons alors une valeur par défaut."},
      {"type":"p","text":"2. Si le template enfant souhaite récupérer la valeur"},
      {"type":"h","text":"du parent et y ajouter des informations"},
      {"type":"p","text":"spéciﬁques (on dit qu’il va le surcharger), alors on"},
      {"type":"p","text":"utilisera la fonction Twig parent()  dans le"},
      {"type":"p","text":"template enfant pour récupérer les informations du"},
      {"type":"p","text":"parent."},
      {"type":"p","text":"Déﬁnir un title"},
      {"type":"p","text":"Généralement sur un site web, le titre de notre page a la"},
      {"type":"p","text":"forme « Titre de la page - Nom du site »."},
      {"type":"p","text":"C’est une bonne habitude à prendre qui est bénéﬁque en"},
      {"type":"h","text":"termes de référencement, mais aussi pour l’expérience"},
      {"type":"h","text":"des utilisateurs des moteurs de recherche, qui vont"},
      {"type":"p","text":"pouvoir voir à quels sites correspondent les résultats de"},
      {"type":"p","text":"recherche."},
      {"type":"p","text":"Cela pourrait se faire en ajoutant le nom du site à la ﬁn"},
      {"type":"code","filename":"page-106-exemple-1","language":"php","code":"de chaque {% block title %}{% endblock %}  des"},
      {"type":"p","text":"pages… mais cela serait maladroit !"},
      {"type":"code","filename":"page-106-exemple-2","language":"php","code":"{% block title %}Accueil - Nom site{% e"},
      {"type":"code","filename":"page-106-exemple-3","language":"php","code":"{% block title %}Formations - Nom site{"},
      {"type":"p","text":"Pour éviter cela et respecter le principe du DRY, on"},
      {"type":"image","src":"images/laconsole/symfony-p106.jpg","alt":"Page originale de Symfony.pdf - page 106"},
      {"type":"h","text":"Page 107"},
      {"type":"p","text":"isolera plutôt le nom du site dans le layout et les"},
      {"type":"p","text":"templates enfants ne viendront spéciﬁer que le titre de la"},
      {"type":"p","text":"page :"},
      {"type":"p","text":"base.html.twig\ncopier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-107-exemple-1","language":"php","code":"<html>"},
      {"type":"code","filename":"page-107-exemple-2","language":"php","code":"<head>"},
      {"type":"code","filename":"page-107-exemple-3","language":"php","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-107-exemple-4","language":"php","code":"<title>{% block title %}{% endb"},
      {"type":"code","filename":"page-107-exemple-5","language":"php","code":"</head>"},
      {"type":"code","filename":"page-107-exemple-6","language":"php","code":"<body>"},
      {"type":"code","filename":"page-107-exemple-7","language":"php","code":"{% block body %}{% endblock %}"},
      {"type":"code","filename":"page-107-exemple-8","language":"php","code":"</body>"},
      {"type":"code","filename":"page-107-exemple-9","language":"php","code":"</html>"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-107-exemple-10","language":"php","code":"{% extends 'base.html.twig' %}"},
      {"type":"code","filename":"page-107-exemple-11","language":"php","code":"{% block title %}Titre de la page{% end"},
      {"type":"code","filename":"page-107-exemple-12","language":"php","code":"Symfony génère cette structure pour exemple, mais"},
      {"type":"p","text":"&"},
      {"type":"p","text":"nous sommes bien entendu totalement libres de la"},
      {"type":"p","text":"modiﬁer à notre guise."},
      {"type":"h","text":"Enfants"},
      {"type":"h","text":"Les enfants sont les templates que vous allez inclure dans"},
      {"type":"h","text":"votre parent pour venir y injecter du contenu."},
      {"type":"image","src":"images/laconsole/symfony-p107.jpg","alt":"Page originale de Symfony.pdf - page 107"},
      {"type":"h","text":"Page 108"},
      {"type":"h","text":"Les templates retournés par une méthode de contrôleur"},
      {"type":"p","text":"avec la fonction render()  sont des templates enfants. Ils"},
      {"type":"h","text":"vont venir remplir des blocs spéciﬁques d’une mise en page"},
      {"type":"code","filename":"page-108-exemple-1","language":"php","code":"type déﬁnie dans le template parent, pour afﬁcher une page"},
      {"type":"p","text":"complète."},
      {"type":"p","text":"On les retrouve dans des sous-dossiers situés dans"},
      {"type":"p","text":"templates/nom-sous-dossier . Le nom de ce sous-"},
      {"type":"p","text":"dossier correspond généralement au contrôleur qui va"},
      {"type":"p","text":"appeler les templates qu’il contiendra."},
      {"type":"code","filename":"page-108-exemple-2","language":"php","code":"La ligne de commande symfony console"},
      {"type":"p","text":"make:controller  nous avait créé un premier template"},
      {"type":"p","text":"enfant nommé"},
      {"type":"p","text":"index.html.twig  par défaut."},
      {"type":"image","src":"images/laconsole/symfony-p108.jpg","alt":"Page originale de Symfony.pdf - page 108"},
      {"type":"h","text":"Page 109"},
      {"type":"p","text":"index.html.twig\ncopier"},
      {"type":"code","filename":"page-109-exemple-1","language":"php","code":"{% extends 'base.html.twig' %}"},
      {"type":"code","filename":"page-109-exemple-2","language":"php","code":"{% block title %}Hello AppController!{% e"},
      {"type":"code","filename":"page-109-exemple-3","language":"php","code":"{% block body %}"},
      {"type":"code","filename":"page-109-exemple-4","language":"php","code":"<style>"},
      {"type":"code","filename":"page-109-exemple-5","language":"php","code":".example-wrapper { margin: 1em au"},
      {"type":"code","filename":"page-109-exemple-6","language":"php","code":"</style>"},
      {"type":"code","filename":"page-109-exemple-7","language":"php","code":"<div class=\"example-wrapper\">"},
      {"type":"code","filename":"page-109-exemple-8","language":"php","code":"<h1>Hello {{ controller_name }}!"},
      {"type":"p","text":"This friendly message is coming f"},
      {"type":"code","filename":"page-109-exemple-9","language":"php","code":"<ul>"},
      {"type":"code","filename":"page-109-exemple-10","language":"php","code":"<li>Your controller at <code>"},
      {"type":"code","filename":"page-109-exemple-11","language":"php","code":"<li>Your template at <code><a"},
      {"type":"code","filename":"page-109-exemple-12","language":"php","code":"</ul>"},
      {"type":"code","filename":"page-109-exemple-13","language":"php","code":"</div>"},
      {"type":"code","filename":"page-109-exemple-14","language":"php","code":"{% endblock %}"},
      {"type":"p","text":"Pour qu’un template hérite d’un parent, il va falloir lui"},
      {"type":"code","filename":"page-109-exemple-15","language":"php","code":"indiquer avec le tag {% extends %} . Vous pouvez voir"},
      {"type":"p","text":"cette balise tout en haut du ﬁchier. Ici, on rattache un enfant"},
      {"type":"p","text":"à son parent."},
      {"type":"p","text":"Il est tout à fait possible qu’un bloc du parent ne"},
      {"type":"p","text":"soit pas rappelé dans un template enfant. Cela"},
      {"type":"p","text":"&"},
      {"type":"p","text":"signiﬁerait que rien ne sera injecté à ces"},
      {"type":"p","text":"emplacements du layout."},
      {"type":"p","text":"Utilisation de la fonction parent()"},
      {"type":"image","src":"images/laconsole/symfony-p109.jpg","alt":"Page originale de Symfony.pdf - page 109"},
      {"type":"h","text":"Page 110"},
      {"type":"p","text":"La fonction Twig parent()  utilisée au sein d’un"},
      {"type":"h","text":"template enfant permet de récupérer le contenu du bloc"},
      {"type":"h","text":"parent portant le même nom."},
      {"type":"p","text":"parent.html.twig\ncopier"},
      {"type":"code","filename":"page-110-exemple-1","language":"php","code":"{% block sidebar %}"},
      {"type":"code","filename":"page-110-exemple-2","language":"php","code":"<p>Contenu du parent</p>"},
      {"type":"code","filename":"page-110-exemple-3","language":"php","code":"{% endblock %}"},
      {"type":"p","text":"enfant.html.twig\ncopier"},
      {"type":"code","filename":"page-110-exemple-4","language":"php","code":"{% block sidebar %}"},
      {"type":"code","filename":"page-110-exemple-5","language":"php","code":"{{ parent() }} {# Récupère \"<p>Cont"},
      {"type":"code","filename":"page-110-exemple-6","language":"php","code":"<p>Contenu de l'enfant</p>"},
      {"type":"code","filename":"page-110-exemple-7","language":"php","code":"{% endblock %}"},
      {"type":"h","text":"Héritage multiple"},
      {"type":"p","text":"“L’héritage multiple : quand bébé devient grand”"},
      {"type":"p","text":"Dans la vraie vie, un enfant peut devenir parent à son tour…"},
      {"type":"p","text":"et bien avec Twig, c’est pareil !"},
      {"type":"p","text":"L’héritage multiple consiste à mettre en place une relation"},
      {"type":"h","text":"d’héritage de plus de 2 niveaux. Concrètement, cela"},
      {"type":"h","text":"consiste à déﬁnir qu’un enfant sera aussi parent d’un autre"},
      {"type":"h","text":"template."},
      {"type":"p","text":"À moins d’avoir une mise en page très segmentée,"},
      {"type":"p","text":"&"},
      {"type":"p","text":"on fait rarement appel à plus qu’un triple héritage."},
      {"type":"image","src":"images/laconsole/symfony-p110.jpg","alt":"Page originale de Symfony.pdf - page 110"},
      {"type":"h","text":"Page 111"},
      {"type":"p","text":"Imaginons que vous souhaitez afﬁcher des publicités sur"},
      {"type":"p","text":"certaines pages de votre site. Il peut être intéressant de"},
      {"type":"p","text":"créer un template qui va contenir les publicités et un autre"},
      {"type":"p","text":"qui ne les contiendra pas."},
      {"type":"p","text":"Le grand-parent"},
      {"type":"p","text":"base.html.twig\ncopier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-111-exemple-1","language":"php","code":"<html>"},
      {"type":"code","filename":"page-111-exemple-2","language":"php","code":"<head>"},
      {"type":"code","filename":"page-111-exemple-3","language":"php","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-111-exemple-4","language":"php","code":"<title>{% block title %}{% endb"},
      {"type":"code","filename":"page-111-exemple-5","language":"php","code":"</head>"},
      {"type":"code","filename":"page-111-exemple-6","language":"php","code":"<body>"},
      {"type":"code","filename":"page-111-exemple-7","language":"php","code":"{# Ici, mon header #}"},
      {"type":"code","filename":"page-111-exemple-8","language":"php","code":"{% block body %}{% endblock %}"},
      {"type":"code","filename":"page-111-exemple-9","language":"php","code":"{# Ici, mon footer #}"},
      {"type":"code","filename":"page-111-exemple-10","language":"php","code":"</body>"},
      {"type":"code","filename":"page-111-exemple-11","language":"php","code":"</html>"},
      {"type":"p","text":"L'enfant (template sans pub)"},
      {"type":"p","text":"layout_no_ads.html.twig\ncopier"},
      {"type":"code","filename":"page-111-exemple-12","language":"php","code":"{% extends 'base.html.twig' %}"},
      {"type":"code","filename":"page-111-exemple-13","language":"php","code":"{% block body %}"},
      {"type":"code","filename":"page-111-exemple-14","language":"php","code":"{% block content %}{% endblock %}"},
      {"type":"code","filename":"page-111-exemple-15","language":"php","code":"{% endblock %}"},
      {"type":"p","text":"L'enfant (template avec pub)"},
      {"type":"image","src":"images/laconsole/symfony-p111.jpg","alt":"Page originale de Symfony.pdf - page 111"},
      {"type":"h","text":"Page 112"},
      {"type":"p","text":"layout_ads.html.twig\ncopier"},
      {"type":"code","filename":"page-112-exemple-1","language":"php","code":"{% extends 'base.html.twig' %}"},
      {"type":"code","filename":"page-112-exemple-2","language":"php","code":"{% block body %}"},
      {"type":"code","filename":"page-112-exemple-3","language":"php","code":"<aside class=\"ad\">"},
      {"type":"code","filename":"page-112-exemple-4","language":"php","code":"{# Ici, je place une publicité"},
      {"type":"code","filename":"page-112-exemple-5","language":"php","code":"</aside>"},
      {"type":"code","filename":"page-112-exemple-6","language":"php","code":"{% block content %}{% endblock %}"},
      {"type":"code","filename":"page-112-exemple-7","language":"php","code":"<aside class=\"ad\">"},
      {"type":"code","filename":"page-112-exemple-8","language":"php","code":"{# Ici, j'en place une après #}"},
      {"type":"code","filename":"page-112-exemple-9","language":"php","code":"</aside>"},
      {"type":"code","filename":"page-112-exemple-10","language":"php","code":"{% endblock %}"},
      {"type":"p","text":"Le petit-enfant (page sans pub)"},
      {"type":"p","text":"page1.html.twig\ncopier"},
      {"type":"code","filename":"page-112-exemple-11","language":"php","code":"{% extends 'app/layout_no_ads.html.twig"},
      {"type":"code","filename":"page-112-exemple-12","language":"php","code":"{% block title %}Page 1{% endblock %}"},
      {"type":"code","filename":"page-112-exemple-13","language":"php","code":"{% block content %}"},
      {"type":"code","filename":"page-112-exemple-14","language":"php","code":"<h1>Page 1</h1>"},
      {"type":"code","filename":"page-112-exemple-15","language":"php","code":"<p>...</p>"},
      {"type":"code","filename":"page-112-exemple-16","language":"php","code":"{% endblock %}"},
      {"type":"p","text":"Le petit-enfant (page avec pub)"},
      {"type":"image","src":"images/laconsole/symfony-p112.jpg","alt":"Page originale de Symfony.pdf - page 112"},
      {"type":"h","text":"Page 113"},
      {"type":"p","text":"page2.html.twig\ncopier"},
      {"type":"code","filename":"page-113-exemple-1","language":"php","code":"{% extends 'app/layout_ads.html.twig' %"},
      {"type":"code","filename":"page-113-exemple-2","language":"php","code":"{% block title %}Page 2{% endblock %}"},
      {"type":"code","filename":"page-113-exemple-3","language":"php","code":"{% block content %}"},
      {"type":"code","filename":"page-113-exemple-4","language":"php","code":"<h1>Page 2</h1>"},
      {"type":"code","filename":"page-113-exemple-5","language":"php","code":"<p>...</p>"},
      {"type":"code","filename":"page-113-exemple-6","language":"php","code":"{% endblock %}"},
      {"type":"h","text":"En résumé"},
      {"type":"p","text":"Un template parent contient des blocs qui vont"},
      {"type":"h","text":"découper la page en zones."},
      {"type":"p","text":"Les templates enfants rappellent ces blocs par leur"},
      {"type":"h","text":"nom aﬁn d’y injecter du contenu."},
      {"type":"h","text":"Inclusion"},
      {"type":"p","text":"Sur un site web, on trouve généralement des éléments"},
      {"type":"p","text":"communs d’une page à l’autre (header, footer, barre"},
      {"type":"p","text":"latérale…). On les appelle « template parts » ou « partials »."},
      {"type":"p","text":"Pour insérer ces templates au sein de notre layout ou de"},
      {"type":"h","text":"nos pages, on exploite la mécanique d’inclusion de Twig."},
      {"type":"p","text":"Cela consiste concrètement à factoriser une portion de"},
      {"type":"p","text":"code dans un ﬁchier spéciﬁque et à l’inclure avec la fonction"},
      {"type":"p","text":"Twig include() ."},
      {"type":"p","text":"Vous remarquez au passage sa similarité avec la"},
      {"type":"p","text":"&"},
      {"type":"p","text":"fonction PHP native include() ."},
      {"type":"image","src":"images/laconsole/symfony-p113.jpg","alt":"Page originale de Symfony.pdf - page 113"},
      {"type":"h","text":"Page 114"},
      {"type":"p","text":"Il y a 2 cas de ﬁgures pour lesquels il est judicieux d’inclure"},
      {"type":"h","text":"un template : bien organiser ses templates et éviter de"},
      {"type":"h","text":"dupliquer son code."},
      {"type":"h","text":"Organiser ses templates"},
      {"type":"h","text":"Si vous ne voulez pas qu’une portion de code vienne trop"},
      {"type":"p","text":"complexiﬁer la structure de votre page, c’est une manière"},
      {"type":"p","text":"de l’isoler proprement (header, footer, sidebar…)."},
      {"type":"p","text":"Au lieu de coder l’en-tête et le pied de page directement"},
      {"type":"p","text":"dans le layout"},
      {"type":"p","text":"base.html.twig , il serait plus judicieux"},
      {"type":"p","text":"de les créer dans des ﬁchiers distincts"},
      {"type":"p","text":"_header.html.twig  et"},
      {"type":"p","text":"_footer.html.twig , puis de"},
      {"type":"p","text":"les inclure dans le layout."},
      {"type":"p","text":"Par convention, on préﬁxe généralement nos «"},
      {"type":"p","text":"&"},
      {"type":"p","text":"templates parts » par un _ , de manière à les"},
      {"type":"p","text":"repérer facilement dans nos ﬁchiers."},
      {"type":"p","text":"_header.html.twig\ncopier"},
      {"type":"code","filename":"page-114-exemple-1","language":"php","code":"<header>...</header>"},
      {"type":"p","text":"_footer.html.twig\ncopier"},
      {"type":"code","filename":"page-114-exemple-2","language":"php","code":"<footer>...</footer>"},
      {"type":"image","src":"images/laconsole/symfony-p114.jpg","alt":"Page originale de Symfony.pdf - page 114"},
      {"type":"h","text":"Page 115"},
      {"type":"p","text":"base.html.twig\ncopier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-115-exemple-1","language":"php","code":"<html>"},
      {"type":"code","filename":"page-115-exemple-2","language":"php","code":"<head>"},
      {"type":"code","filename":"page-115-exemple-3","language":"php","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-115-exemple-4","language":"php","code":"<title>{% block title %}{% endblo"},
      {"type":"code","filename":"page-115-exemple-5","language":"php","code":"</head>"},
      {"type":"code","filename":"page-115-exemple-6","language":"php","code":"<body>"},
      {"type":"code","filename":"page-115-exemple-7","language":"php","code":"{{ include('_header.html.twig') }"},
      {"type":"code","filename":"page-115-exemple-8","language":"php","code":"{% block body %}{% endblock %}"},
      {"type":"code","filename":"page-115-exemple-9","language":"php","code":"{{ include('_footer.html.twig') }"},
      {"type":"code","filename":"page-115-exemple-10","language":"php","code":"</body>"},
      {"type":"code","filename":"page-115-exemple-11","language":"php","code":"</html>"},
      {"type":"h","text":"Éviter la duplication de code"},
      {"type":"h","text":"Si un template est appelé plusieurs fois / sur plusieurs"},
      {"type":"p","text":"pages, il est alors judicieux de le factoriser. #DRY"},
      {"type":"p","text":"Ce scénario se produit par exemple :"},
      {"type":"h","text":"Pour une bannière d’inscription à une newsletter que"},
      {"type":"p","text":"l’on retrouverait sur plusieurs pages d’un site web"},
      {"type":"h","text":"Pour les formulaires d’ajout et d’édition des articles"},
      {"type":"p","text":"d’un blog (ces formulaires sont structurellement"},
      {"type":"p","text":"identiques, à la seule différence qu’à l’édition ils seront"},
      {"type":"p","text":"préremplis)."},
      {"type":"p","text":"…"},
      {"type":"image","src":"images/laconsole/symfony-p115.jpg","alt":"Page originale de Symfony.pdf - page 115"},
      {"type":"h","text":"Page 116"},
      {"type":"p","text":"_newsletter.html.twig\ncopier"},
      {"type":"code","filename":"page-116-exemple-1","language":"php","code":"<form>...</form>"},
      {"type":"p","text":"page1.html.twig\ncopier"},
      {"type":"code","filename":"page-116-exemple-2","language":"php","code":"{% extends 'base.html.twig' %}"},
      {"type":"code","filename":"page-116-exemple-3","language":"php","code":"{% block title %}Page 1{% endblock %}"},
      {"type":"code","filename":"page-116-exemple-4","language":"php","code":"{% block body %}"},
      {"type":"code","filename":"page-116-exemple-5","language":"php","code":"<section>...</section>"},
      {"type":"code","filename":"page-116-exemple-6","language":"php","code":"<section>"},
      {"type":"code","filename":"page-116-exemple-7","language":"php","code":"{{ include('app/_newsletter.html"},
      {"type":"code","filename":"page-116-exemple-8","language":"php","code":"</section>"},
      {"type":"code","filename":"page-116-exemple-9","language":"php","code":"<section>...</section>"},
      {"type":"code","filename":"page-116-exemple-10","language":"php","code":"{% endblock %}"},
      {"type":"p","text":"page2.html.twig\ncopier"},
      {"type":"code","filename":"page-116-exemple-11","language":"php","code":"{% extends 'base.html.twig' %}"},
      {"type":"code","filename":"page-116-exemple-12","language":"php","code":"{% block title %}Page 2{% endblock %}"},
      {"type":"code","filename":"page-116-exemple-13","language":"php","code":"{% block body %}"},
      {"type":"code","filename":"page-116-exemple-14","language":"php","code":"<section>...</section>"},
      {"type":"code","filename":"page-116-exemple-15","language":"php","code":"<section>"},
      {"type":"code","filename":"page-116-exemple-16","language":"php","code":"{{ include('app/_newsletter.html"},
      {"type":"code","filename":"page-116-exemple-17","language":"php","code":"</section>"},
      {"type":"code","filename":"page-116-exemple-18","language":"php","code":"<section>...</section>"},
      {"type":"code","filename":"page-116-exemple-19","language":"php","code":"{% endblock %}"},
      {"type":"image","src":"images/laconsole/symfony-p116.jpg","alt":"Page originale de Symfony.pdf - page 116"},
      {"type":"h","text":"Page 117"},
      {"type":"p","text":"Si, en toute logique, la portion de code incluse va bénéﬁcier"},
      {"type":"p","text":"de l’ensemble des variables de notre page, notez qu’il est"},
      {"type":"h","text":"également possible de faire passer des variables"},
      {"type":"h","text":"additionnelles à un ﬁchier que l’on va inclure. Cela se fait"},
      {"type":"p","text":"avec le mot-clé with , de la manière suivante :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-117-exemple-1","language":"php","code":"{{ include '_partial.html.twig' with { 'm"},
      {"type":"p","text":"Inclure une méthode de contrôleur"},
      {"type":"p","text":"Si la fonction include()  est généralement utilisée pour"},
      {"type":"p","text":"inclure des templates, notez qu’il est aussi possible"},
      {"type":"h","text":"d’inclure des méthodes de contrôleur toutes entières"},
      {"type":"p","text":"avec la fonction Twig render() ."},
      {"type":"p","text":"Parfois, nous allons inclure des templates mais ne"},
      {"type":"p","text":"posséderons pas forcément toutes les variables qu’ils"},
      {"type":"p","text":"utilisent."},
      {"type":"p","text":"Par exemple, imaginons que sur toutes les pages d’un"},
      {"type":"p","text":"blog nous souhaitons afﬁcher dans une sidebar les 5"},
      {"type":"p","text":"derniers articles publiés."},
      {"type":"p","text":"Cette sidebar sera en toute logique créée dans un «"},
      {"type":"p","text":"partial »"},
      {"type":"p","text":"_last_articles.html.twig ."},
      {"type":"p","text":"_last_articles.html.twig\ncopier"},
      {"type":"code","filename":"page-117-exemple-2","language":"php","code":"{% for article in lastArticles %}"},
      {"type":"code","filename":"page-117-exemple-3","language":"php","code":"<h2><a href=\"#\">{{ article.title }}"},
      {"type":"code","filename":"page-117-exemple-4","language":"php","code":"{% endfor %}"},
      {"type":"image","src":"images/laconsole/symfony-p117.jpg","alt":"Page originale de Symfony.pdf - page 117"},
      {"type":"h","text":"Page 118"},
      {"type":"p","text":"Cet extrait est une boucle Twig permettant"},
      {"type":"p","text":"&"},
      {"type":"p","text":"d’afﬁcher les titres des derniers articles. Nous"},
      {"type":"p","text":"les détaillerons plus bas."},
      {"type":"h","text":"Méthode 1 ("},
      {"type":"p","text":"mauvaise)"},
      {"type":"h","text":"1. J’inclus le template"},
      {"type":"p","text":"_last_articles.html.twig  dans toutes mes"},
      {"type":"p","text":"pages"},
      {"type":"h","text":"2. Je suis contraint de récupérer les 5 derniers articles"},
      {"type":"h","text":"publiés dans chacune de mes méthodes de"},
      {"type":"p","text":"contrôleur aﬁn de les transmettre aux pages."},
      {"type":"h","text":"Méthode 2 ("},
      {"type":"p","text":"bonne)"},
      {"type":"h","text":"J’inclus une méthode de contrôleur lastArticles(5)"},
      {"type":"p","text":"chargée de récupérer les 5 derniers articles du blog et de"},
      {"type":"p","text":"les afﬁcher dans le template"},
      {"type":"p","text":"_last_articles.html.twig ."},
      {"type":"p","text":"Notre méthode de contrôleur ressemblera à cela :"},
      {"type":"p","text":"BlogController.php\ncopier"},
      {"type":"code","filename":"page-118-exemple-1","language":"php","code":"public function lastArticles(int $nb):"},
      {"type":"p","text":"// Plus tard, on récupérera en base"},
      {"type":"code","filename":"page-118-exemple-2","language":"php","code":"return $this->render('blog/_last_ar"},
      {"type":"code","filename":"page-118-exemple-3","language":"php","code":"'lastArticles' => $lastArticles"},
      {"type":"code","filename":"page-118-exemple-4","language":"php","code":"));"},
      {"type":"code","filename":"page-118-exemple-5","language":"php","code":"}"},
      {"type":"p","text":"Pour inclure cette méthode de contrôleur dans un"},
      {"type":"p","text":"template, il sufﬁt de remplacer la fonction include()"},
      {"type":"p","text":"par render(controller())  :"},
      {"type":"image","src":"images/laconsole/symfony-p118.jpg","alt":"Page originale de Symfony.pdf - page 118"},
      {"type":"h","text":"Page 119"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-119-exemple-1","language":"php","code":"{{ render(controller(\"App\\\\Controller\\\\"},
      {"type":"p","text":"Le paramètre de render(controller())  est une"},
      {"type":"p","text":"chaîne de caractères de la forme :"},
      {"type":"p","text":"namespace\\\\contrôleur::méthode , en remplaçant"},
      {"type":"p","text":"bien le simple antislash du namespace de votre"},
      {"type":"p","text":"contrôleur, par un double antislash."},
      {"type":"code","filename":"page-119-exemple-2","language":"php","code":"J’attire votre attention sur le fait que Symfony"},
      {"type":"p","text":"nous met en garde quant à l’utilisation des"},
      {"type":"p","text":"inclusions de contrôleurs, car elles sont assez"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"gourmandes en termes de performances."},
      {"type":"p","text":"Utilisez-les donc uniquement quand c’est"},
      {"type":"p","text":"vraiment utile."},
      {"type":"h","text":"Héritage VS inclusion"},
      {"type":"p","text":"Au début, il peut arriver d’hésiter lorsqu’il s’agit de choisir"},
      {"type":"p","text":"entre héritage et inclusion. Voici donc quelques tips pour"},
      {"type":"p","text":"vous aider dans ce choix :"},
      {"type":"h","text":"Héritage Inclusion"},
      {"type":"p","text":"Si le template n’est inclus que"},
      {"type":"p","text":"Si le template doit être"},
      {"type":"p","text":"dans un seul template (parent)."},
      {"type":"p","text":"inclus dans plusieurs"},
      {"type":"p","text":"templates."},
      {"type":"p","text":"Si le template inclus dépend de"},
      {"type":"p","text":"Si le template ne"},
      {"type":"p","text":"l’autre (parent)."},
      {"type":"p","text":"dépend d’aucun autre."},
      {"type":"p","text":"Si le template inclus doit"},
      {"type":"image","src":"images/laconsole/symfony-p119.jpg","alt":"Page originale de Symfony.pdf - page 119"},
      {"type":"h","text":"Page 120"},
      {"type":"p","text":"modiﬁer plusieurs zones de"},
      {"type":"p","text":"l’autre template (parent)."},
      {"type":"h","text":"Liens entre pages"},
      {"type":"p","text":"Les liens Twig vont nous permettre de naviguer sur notre"},
      {"type":"p","text":"site en appelant les routes créées dans notre système de"},
      {"type":"p","text":"routage."},
      {"type":"p","text":"Ceci fonctionnera de manière dynamique et nous permettra"},
      {"type":"p","text":"d’éviter d’écrire nous-mêmes les URL « en dur » dans"},
      {"type":"p","text":"l’attribut href ."},
      {"type":"p","text":"On appelle une route via la fonction Twig path()  en y"},
      {"type":"p","text":"précisant son nom (voilà pourquoi il était important de"},
      {"type":"p","text":"donner un nom à nos routes"},
      {"type":"h","text":") et ses paramètres, si elle"},
      {"type":"p","text":"en a."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-120-exemple-1","language":"php","code":"<a href=\"{{ path('app_home') }}\">Accueil<"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-120-exemple-2","language":"php","code":"<a href=\"{{ path('article_list', { slug:"},
      {"type":"p","text":"La fonction path()  génère des URL relatives. Si"},
      {"type":"h","text":"vous devez générer des URL absolues (par"},
      {"type":"p","text":"&"},
      {"type":"p","text":"exemple lors du rendu de templates d’e-mails ou"},
      {"type":"h","text":"de ﬂux RSS), utilisez la fonction url() , qui"},
      {"type":"p","text":"fonctionne de la même manière."},
      {"type":"image","src":"images/laconsole/symfony-p120.jpg","alt":"Page originale de Symfony.pdf - page 120"},
      {"type":"h","text":"Page 121"},
      {"type":"h","text":"Algorithmie"},
      {"type":"p","text":"Dans Twig, il est possible de faire appel aux structures"},
      {"type":"p","text":"algorithmiques classiques (variables, boucles, conditions…)"},
      {"type":"h","text":"aﬁn de pousser plus loin la dynamique de nos pages."},
      {"type":"h","text":"Variables"},
      {"type":"p","text":"Pour dynamiser nos pages web, on va généralement faire"},
      {"type":"p","text":"appel à des variables."},
      {"type":"p","text":"Pour afﬁcher une variable, on écrit son nom entre les"},
      {"type":"code","filename":"page-121-exemple-1","language":"php","code":"délimiteurs {{  … }} ."},
      {"type":"code","filename":"page-121-exemple-2","language":"php","code":"Notre bon vieux <?php echo $ma_variable; ?>  ou <?="},
      {"type":"code","filename":"page-121-exemple-3","language":"php","code":"$ma_variable; ?>  sera donc remplacé par {{"},
      {"type":"code","filename":"page-121-exemple-4","language":"php","code":"ma_variable }} ."},
      {"type":"p","text":"Quand je parle de variable ici, je fais allusion à nos"},
      {"type":"p","text":"structures de stockage qui vont nous permettre de stocker"},
      {"type":"p","text":"des informations de manière globale : cela signiﬁe des"},
      {"type":"h","text":"variables simples, mais aussi des tableaux ou encore des"},
      {"type":"h","text":"objets."},
      {"type":"h","text":"La syntaxe varie très légèrement en fonction :"},
      {"type":"code","filename":"page-121-exemple-5","language":"php","code":"Variable\n{{ ma_variable }}"},
      {"type":"code","filename":"page-121-exemple-6","language":"php","code":"Tableau\n{{ mon_tableau[0] }} , {{"},
      {"type":"code","filename":"page-121-exemple-7","language":"php","code":"mon_tableau['cle'] }}  ou {{"},
      {"type":"code","filename":"page-121-exemple-8","language":"php","code":"mon_tableau.cle }}"},
      {"type":"image","src":"images/laconsole/symfony-p121.jpg","alt":"Page originale de Symfony.pdf - page 121"},
      {"type":"h","text":"Page 122"},
      {"type":"code","filename":"page-122-exemple-1","language":"php","code":"Objet\n{{ mon_objet.propriete }}"},
      {"type":"p","text":"Mais ces variables ne proviennent pas toujours du même"},
      {"type":"p","text":"endroit, on peut :"},
      {"type":"p","text":"Les faire passer depuis nos contrôleurs"},
      {"type":"p","text":"Pour récupérer une variable provenant du contrôleur, on"},
      {"type":"p","text":"l’appelle par le même nom que celui qu’on lui a donné au"},
      {"type":"p","text":"moment de la transmettre au template dans notre"},
      {"type":"p","text":"fonction render()  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-122-exemple-2","language":"php","code":"#[Route('/blog/{slug}', name: 'article_"},
      {"type":"code","filename":"page-122-exemple-3","language":"php","code":"public function showArticle(string $slu"},
      {"type":"p","text":"// Ici, on récupèrera dans la varia"},
      {"type":"code","filename":"page-122-exemple-4","language":"php","code":"return $this->render('blog/show.htm"},
      {"type":"code","filename":"page-122-exemple-5","language":"php","code":"}"},
      {"type":"p","text":"'article'  : nom de la variable transmise à TWIG"},
      {"type":"code","filename":"page-122-exemple-6","language":"php","code":"$article  : variable PHP contenant l’information"},
      {"type":"p","text":"La variable TWIG 'article'  prend pour valeur le"},
      {"type":"code","filename":"page-122-exemple-7","language":"php","code":"contenu de la variable PHP $article ."},
      {"type":"p","text":"Maintenant côté TWIG on peut exploiter notre objet"},
      {"type":"p","text":"article  de la manière suivante :"},
      {"type":"image","src":"images/laconsole/symfony-p122.jpg","alt":"Page originale de Symfony.pdf - page 122"},
      {"type":"h","text":"Page 123"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-123-exemple-1","language":"php","code":"{{ article.title }}"},
      {"type":"p","text":"Les déclarer dans nos templates"},
      {"type":"p","text":"Il est aussi possible de déclarer des variables dans nos"},
      {"type":"p","text":"templates TWIG. Pour cela on utilise le mot-clé set ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-123-exemple-2","language":"php","code":"{% set a = 'Salut' %}"},
      {"type":"code","filename":"page-123-exemple-3","language":"php","code":"Aller la chercher dans notre application Symfony\n(variables globales)"},
      {"type":"p","text":"Parfois, nous allons avoir besoin d’informations"},
      {"type":"p","text":"particulières sur la requête HTTP, une session,"},
      {"type":"p","text":"l’utilisateur authentiﬁé, l’environnement courant…"},
      {"type":"code","filename":"page-123-exemple-4","language":"php","code":"Tout un tas d’informations utiles que Symfony nous offre"},
      {"type":"p","text":"dans une variable globale Twig appelée app ."},
      {"type":"h","text":"Variable Description"},
      {"type":"code","filename":"page-123-exemple-5","language":"php","code":"{{ app.request"},
      {"type":"p","text":"Les informations de la requête"},
      {"type":"p","text":"HTTP"},
      {"type":"code","filename":"page-123-exemple-6","language":"php","code":"}}"},
      {"type":"code","filename":"page-123-exemple-7","language":"php","code":"{{ app.session"},
      {"type":"p","text":"Le système des sessions"},
      {"type":"code","filename":"page-123-exemple-8","language":"php","code":"}}"},
      {"type":"code","filename":"page-123-exemple-9","language":"php","code":"{{"},
      {"type":"p","text":"L’environnement courant : dev ,"},
      {"type":"p","text":"app.environment"},
      {"type":"p","text":"prod  (ou d’autres que vous auriez"},
      {"type":"p","text":"déﬁnis)"},
      {"type":"code","filename":"page-123-exemple-10","language":"php","code":"}}"},
      {"type":"image","src":"images/laconsole/symfony-p123.jpg","alt":"Page originale de Symfony.pdf - page 123"},
      {"type":"h","text":"Page 124"},
      {"type":"code","filename":"page-124-exemple-1","language":"php","code":"{{ app.debug"},
      {"type":"p","text":"Un booléen renvoyant si le mode"},
      {"type":"p","text":"debug est actif ou non"},
      {"type":"code","filename":"page-124-exemple-2","language":"php","code":"}}"},
      {"type":"code","filename":"page-124-exemple-3","language":"php","code":"{{ app.user }}\nSi un utilisateur est authentiﬁé, on"},
      {"type":"p","text":"peut accéder à ses informations"},
      {"type":"p","text":"comme ceci"},
      {"type":"code","filename":"page-124-exemple-4","language":"php","code":"{{ app.flashes"},
      {"type":"p","text":"Pour afﬁcher des messages ﬂashs"},
      {"type":"p","text":"stockés en session"},
      {"type":"code","filename":"page-124-exemple-5","language":"php","code":"}}"},
      {"type":"p","text":"Il est également possible de déclarer nos propres"},
      {"type":"p","text":"variables globales Twig pour y stocker des informations"},
      {"type":"p","text":"personnelles, comme un code de tracking de Google"},
      {"type":"p","text":"Analytics, une clé API, des informations de contact ou"},
      {"type":"p","text":"encore les crédits du site, etc."},
      {"type":"p","text":"Cela se passe dans la section globals  du ﬁchier"},
      {"type":"p","text":"config/packages/twig.yaml  :"},
      {"type":"p","text":"conﬁg/packages/twig.yaml\ncopier"},
      {"type":"p","text":"twig:"},
      {"type":"p","text":"globals:"},
      {"type":"p","text":"ga_tracking_code: \"UA-874279433"},
      {"type":"p","text":"developer: \"Fabien Potencier\""},
      {"type":"p","text":"contact: \"\n\"\n[email protected]"},
      {"type":"p","text":"Ensuite, il ne reste plus qu’à l’appeler côté template"},
      {"type":"p","text":".html.twig ."},
      {"type":"image","src":"images/laconsole/symfony-p124.jpg","alt":"Page originale de Symfony.pdf - page 124"},
      {"type":"h","text":"Page 125"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-125-exemple-1","language":"php","code":"{{ ga_tracking_code }}"},
      {"type":"h","text":"Concaténation"},
      {"type":"p","text":"Pour concaténer en Twig, on sépare la variable de la chaîne"},
      {"type":"p","text":"de caractères avec une ~  (tilde)."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-125-exemple-2","language":"php","code":"{{ var_1 ~ \" concaténé avec \" ~ var_2 }}"},
      {"type":"h","text":"Fonctions"},
      {"type":"p","text":"Twig possède\n dont certaines ont"},
      {"type":"p","text":"de nombreuses fonctions"},
      {"type":"p","text":"même été\n."},
      {"type":"code","filename":"page-125-exemple-3","language":"php","code":"ajoutées pour le framework Symfony"},
      {"type":"p","text":"Nous en avons jusqu’à présent utilisées certaines comme"},
      {"type":"p","text":"include() , path() , parent()  ou encore render() ."},
      {"type":"h","text":"Filtres"},
      {"type":"p","text":"Un ﬁltre est une fonction qui permet de manipuler et de"},
      {"type":"p","text":"formater des données dans des templates Twig."},
      {"type":"p","text":"Ces données peuvent être des chaînes de caractère déﬁnies"},
      {"type":"p","text":"« en dur », des variables TWIG ou d’autres fonctions (avec"},
      {"type":"p","text":"valeur de retour). Ces ﬁltres se notent après le caractère | ."},
      {"type":"h","text":"Filtres sans paramètre"},
      {"type":"image","src":"images/laconsole/symfony-p125.jpg","alt":"Page originale de Symfony.pdf - page 125"},
      {"type":"h","text":"Page 126"},
      {"type":"p","text":"Les ﬁltres sans paramètres permettent de réaliser des"},
      {"type":"h","text":"traitements basiques."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-126-exemple-1","language":"php","code":"{{ ma_variable|upper }}"},
      {"type":"code","filename":"page-126-exemple-2","language":"php","code":"{{ ma_variable|lower }}"},
      {"type":"code","filename":"page-126-exemple-3","language":"php","code":"{{ ma_variable|length }}"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"upper  : mise en majuscule d’une chaîne de caractère"},
      {"type":"p","text":"lower  : mise en minuscule d’une chaîne de caractère"},
      {"type":"p","text":"length  : retourne la longueur"},
      {"type":"p","text":"\nSOMMAIRE"},
      {"type":"p","text":"Twig : un moteur de template"},
      {"type":"p","text":"Qu’est-ce qu’un moteur de\ntemplates ?"},
      {"type":"h","text":"Filtres avec paramètre"},
      {"type":"p","text":"Pourquoi utiliser un moteur\nde template ?"},
      {"type":"p","text":"Certains ﬁltres peuvent êtres utilisés avec des arguments,"},
      {"type":"p","text":"ce qui les rend plus complets."},
      {"type":"p","text":"Syntaxe (délimiteurs)"},
      {"type":"p","text":"Extension .html.twig"},
      {"type":"p","text":"Mise en page"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"Héritage"},
      {"type":"code","filename":"page-126-exemple-4","language":"php","code":"{{ article.createdAt|date('d/m/Y') }}"},
      {"type":"p","text":"Parent"},
      {"type":"code","filename":"page-126-exemple-5","language":"php","code":"{{ title|replace({'o': '0'}) }}"},
      {"type":"p","text":"Enfants"},
      {"type":"p","text":"Héritage multiple"},
      {"type":"p","text":"Inclusion"},
      {"type":"h","text":"Le ﬁltre |date  permet de formater une date"},
      {"type":"p","text":"Organiser ses templates"},
      {"type":"code","filename":"page-126-exemple-6","language":"php","code":"(nécessairement un objet de type Datetime ). Le"},
      {"type":"p","text":"Éviter la duplication de"},
      {"type":"p","text":"format de la date est donc un paramètre que l’on va"},
      {"type":"p","text":"code"},
      {"type":"p","text":"renseigner lors de l’appel de ce ﬁltre. Ici, la date est"},
      {"type":"p","text":"Héritage VS inclusion"},
      {"type":"p","text":"formatée au format français : dd/mm/YYYY ."},
      {"type":"p","text":"Liens entre pages"},
      {"type":"h","text":"Le ﬁltre |replace  permet de remplacer des chaînes"},
      {"type":"p","text":"Algorithmie"},
      {"type":"p","text":"de caractères spéciﬁques par d’autres. Ici, tous les o"},
      {"type":"p","text":"Variables"},
      {"type":"p","text":"contenus dans la variabe title  seront remplacés par"},
      {"type":"p","text":"Fonctions"},
      {"type":"image","src":"images/laconsole/symfony-p126.jpg","alt":"Page originale de Symfony.pdf - page 126"},
      {"type":"h","text":"Page 127"},
      {"type":"p","text":"des 0 ."},
      {"type":"p","text":"Filtres"},
      {"type":"p","text":"Filtres sans paramètre"},
      {"type":"p","text":"Filtres avec paramètre"},
      {"type":"h","text":"Filtres combinés"},
      {"type":"p","text":"Il est possible d’appliquer plusieurs ﬁltres en les plaçant"},
      {"type":"p","text":"les uns à la suite des autres. Ils s’exécuteront dans l’ordre"},
      {"type":"p","text":"d’écriture."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-127-exemple-1","language":"php","code":"{{ \"Framework Symfony\"|replace({'o': '0',"},
      {"type":"code","filename":"page-127-exemple-2","language":"php","code":"La chaîne de caractère « Framework Symfony » deviendra :"},
      {"type":"p","text":"1. D’abord « Fr @ m 3 w 0 rk Symf 0 ny »"},
      {"type":"code","filename":"page-127-exemple-3","language":"php","code":"2. Puis « f r@m3w0rk s ymf0ny »"},
      {"type":"p","text":"Point sécurité"},
      {"type":"p","text":"Fini le temps où on craignait les\n en PHP et où"},
      {"type":"p","text":"failles XSS"},
      {"type":"p","text":"on était obligé de faire appel à la fonction"},
      {"type":"p","text":"htmlspecialchars()  à l’afﬁchage de variables pour"},
      {"type":"h","text":"nous protéger d’éventuels scripts nocifs. Twig applique"},
      {"type":"p","text":"automatiquement à vos variables un ﬁltre par défaut qui"},
      {"type":"h","text":"va échapper les caractères spéciaux."},
      {"type":"code","filename":"page-127-exemple-4","language":"php","code":"Si une variable contient la valeur « <b>je suis en"},
      {"type":"code","filename":"page-127-exemple-5","language":"php","code":"gras</b>  », par défaut, Twig génèrera le texte «"},
      {"type":"code","filename":"page-127-exemple-6","language":"php","code":"&lt;b&gt;je suis en gras&lt;/b&gt;  », qui"},
      {"type":"h","text":"afﬁchera les caractères sans les interpréter."},
      {"type":"p","text":"Mais il peut arriver que cet échappement nous embête"},
      {"type":"p","text":"dans certains cas."},
      {"type":"image","src":"images/laconsole/symfony-p127.jpg","alt":"Page originale de Symfony.pdf - page 127"},
      {"type":"h","text":"Page 128"},
      {"type":"code","filename":"page-128-exemple-1","language":"php","code":"Imaginons que nous ayons un éditeur visuel de type"},
      {"type":"p","text":"WYSIWYG"},
      {"type":"p","text":"lors de la rédaction du contenu d’articles de"},
      {"type":"p","text":"blog. On va donc mettre en forme notre article via"},
      {"type":"p","text":"l’éditeur, et lors de son enregistrement en base de"},
      {"type":"p","text":"données, des balises HTML contenant la mise en forme"},
      {"type":"p","text":"de notre article seront stockées."},
      {"type":"p","text":"Si on afﬁche le champ qui contient le contenu, nos"},
      {"type":"p","text":"balises HTML seront échappées par Twig, et s’afﬁcheront"},
      {"type":"p","text":"donc à l’écran comme du texte… ce qui n’est pas ce qu’on"},
      {"type":"p","text":"espérait !"},
      {"type":"p","text":"Pour éviter ce scénario, Twig va mettre à notre"},
      {"type":"p","text":"disposition le ﬁltre |raw  qui va désactiver localement"},
      {"type":"h","text":"l’échappement des caractères spéciaux (« raw » se"},
      {"type":"p","text":"traduit littérallement par « brut »), et interpréter le code"},
      {"type":"p","text":"qu’elle contient :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-128-exemple-2","language":"php","code":"{{ article.content|raw }}"},
      {"type":"p","text":"Nous n’avons utilisé ici que quelques ﬁltres à des ﬁns"},
      {"type":"p","text":"pédagogiques. La\n est"},
      {"type":"p","text":"liste complète des ﬁltres Twig"},
      {"type":"p","text":"accessible sur la documentation ofﬁcielle."},
      {"type":"h","text":"Conditions"},
      {"type":"p","text":"Le rôle d’une condition, aussi appelée « structure de"},
      {"type":"h","text":"contrôle », est d’afﬁcher du contenu, sous certaines"},
      {"type":"h","text":"conditions."},
      {"type":"p","text":"La structure de contrôle utilise les mots-clés if , elseif ,"},
      {"type":"image","src":"images/laconsole/symfony-p128.jpg","alt":"Page originale de Symfony.pdf - page 128"},
      {"type":"h","text":"Page 129"},
      {"type":"p","text":"else ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-129-exemple-1","language":"php","code":"{% if user['role'] == \"Admin\" %}"},
      {"type":"code","filename":"page-129-exemple-2","language":"php","code":"<p>Bienvenue admin !</p>"},
      {"type":"code","filename":"page-129-exemple-3","language":"php","code":"{% else %}"},
      {"type":"code","filename":"page-129-exemple-4","language":"php","code":"<p>Oups, cet endroit n'est pas pour t"},
      {"type":"code","filename":"page-129-exemple-5","language":"php","code":"{% endif %}"},
      {"type":"code","filename":"page-129-exemple-6","language":"php","code":"On déclare donc un bloc conditionnel avec {% if"},
      {"type":"code","filename":"page-129-exemple-7","language":"php","code":"condition %}"},
      {"type":"code","filename":"page-129-exemple-8","language":"php","code":"On ferme un bloc conditionnel avec {% endif %}"},
      {"type":"p","text":"Entre les deux il est tout à fait possible d’ajouter des"},
      {"type":"code","filename":"page-129-exemple-9","language":"php","code":"{% elseif %}  et {% else %}"},
      {"type":"h","text":"Boucles"},
      {"type":"p","text":"Le rôle d’une boucle, aussi appelée « structure itérative »,"},
      {"type":"h","text":"est la répétition automatisée d’une portion de code. La"},
      {"type":"p","text":"structure itérative utilise le mot-clé « for »."},
      {"type":"p","text":"La boucle for  offre de nombreuses variations la rendant"},
      {"type":"p","text":"très utile dans de nombreux cas. Vous retrouverez en"},
      {"type":"p","text":"détails l’ensemble de ces applications sur la"},
      {"type":"p","text":"documentation"},
      {"type":"p","text":"ofﬁcielle"},
      {"type":"p","text":"."},
      {"type":"p","text":"Dans notre cas nous nous attarderons uniquement sur sa"},
      {"type":"p","text":"déclinaison foreach  (notée for ... in ... ), aﬁn de"},
      {"type":"p","text":"parcourir des tableaux d’objets, car c’est sous cette forme"},
      {"type":"p","text":"que nous exploitons généralement nos données dans une"},
      {"type":"p","text":"application moderne."},
      {"type":"image","src":"images/laconsole/symfony-p129.jpg","alt":"Page originale de Symfony.pdf - page 129"},
      {"type":"h","text":"Page 130"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-130-exemple-1","language":"php","code":"{% for article in articles %}"},
      {"type":"code","filename":"page-130-exemple-2","language":"php","code":"<h2><a href=\"{{ path('article_show',"},
      {"type":"code","filename":"page-130-exemple-3","language":"php","code":"{% endfor %}"},
      {"type":"code","filename":"page-130-exemple-4","language":"php","code":"On déclare un bloc itératif avec {% for ... %}"},
      {"type":"code","filename":"page-130-exemple-5","language":"php","code":"On ferme un bloc itératif avec {% endfor %} ."},
      {"type":"code","filename":"page-130-exemple-6","language":"php","code":"Twig a pensé à tout en nous permettant de faire appel à {%"},
      {"type":"code","filename":"page-130-exemple-7","language":"php","code":"else %}  qui va s’exécuter si le tableau articles  est vide."},
      {"type":"p","text":"Et inclure un else  dans un for , c’est plutôt fort (ou"},
      {"type":"p","text":"for …)."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-130-exemple-8","language":"php","code":"{#"},
      {"type":"code","filename":"page-130-exemple-9","language":"php","code":"Bien ! #}"},
      {"type":"code","filename":"page-130-exemple-10","language":"php","code":"{% for article in articles %}"},
      {"type":"code","filename":"page-130-exemple-11","language":"php","code":"<h2><a href=\"{{ path('article_show',"},
      {"type":"code","filename":"page-130-exemple-12","language":"php","code":"{% else %}"},
      {"type":"code","filename":"page-130-exemple-13","language":"php","code":"<p>Désolé, il n'y a pas encore d'arti"},
      {"type":"code","filename":"page-130-exemple-14","language":"php","code":"{% endfor %}"},
      {"type":"code","filename":"page-130-exemple-15","language":"php","code":"{#"},
      {"type":"code","filename":"page-130-exemple-16","language":"php","code":"Maladroit #}"},
      {"type":"code","filename":"page-130-exemple-17","language":"php","code":"{% if articles|length > 0 %}"},
      {"type":"code","filename":"page-130-exemple-18","language":"php","code":"{% for article in articles %}"},
      {"type":"code","filename":"page-130-exemple-19","language":"php","code":"<h2><a href=\"{{ path('article_sho"},
      {"type":"code","filename":"page-130-exemple-20","language":"php","code":"{% endfor %}"},
      {"type":"code","filename":"page-130-exemple-21","language":"php","code":"{% else %}"},
      {"type":"code","filename":"page-130-exemple-22","language":"php","code":"<p>Désolé, il n'y a pas encore d'arti"},
      {"type":"code","filename":"page-130-exemple-23","language":"php","code":"{% endif %}"},
      {"type":"p","text":"Et comme Twig n’a pas pour habitude de faire dans la demi-"},
      {"type":"image","src":"images/laconsole/symfony-p130.jpg","alt":"Page originale de Symfony.pdf - page 130"},
      {"type":"h","text":"Page 131"},
      {"type":"p","text":"mesure, il met également à notre disposition une variable"},
      {"type":"p","text":"loop  au sein de la boucle, qui contient les propriétés"},
      {"type":"p","text":"suivantess :"},
      {"type":"h","text":"Propriété Description"},
      {"type":"code","filename":"page-131-exemple-1","language":"php","code":"{{ loop.index"},
      {"type":"p","text":"Numéro de l’itération courante"},
      {"type":"p","text":"(commence à 1 )"},
      {"type":"code","filename":"page-131-exemple-2","language":"php","code":"}}"},
      {"type":"code","filename":"page-131-exemple-3","language":"php","code":"{{"},
      {"type":"p","text":"Numéro de l’itération courante"},
      {"type":"p","text":"(commence à 0 )"},
      {"type":"p","text":"loop.index0"},
      {"type":"code","filename":"page-131-exemple-4","language":"php","code":"}}"},
      {"type":"code","filename":"page-131-exemple-5","language":"php","code":"{{"},
      {"type":"p","text":"Nombre d’itérations restantes avant la"},
      {"type":"p","text":"ﬁn de la boucle (ﬁnit par 1 )"},
      {"type":"p","text":"loop.revindex"},
      {"type":"code","filename":"page-131-exemple-6","language":"php","code":"}}"},
      {"type":"p","text":"Nombre d’itérations restantes avant la"},
      {"type":"code","filename":"page-131-exemple-7","language":"php","code":"{{"},
      {"type":"p","text":"loop.revindex0"},
      {"type":"p","text":"ﬁn de la boucle (ﬁnit par 0 )"},
      {"type":"code","filename":"page-131-exemple-8","language":"php","code":"}}"},
      {"type":"code","filename":"page-131-exemple-9","language":"php","code":"{{ loop.first"},
      {"type":"p","text":"Booléen renvoyant true  s’il s’agit de"},
      {"type":"code","filename":"page-131-exemple-10","language":"php","code":"}}"},
      {"type":"p","text":"la première itération"},
      {"type":"p","text":"Booléen renvoyant true  s’il s’agit de"},
      {"type":"code","filename":"page-131-exemple-11","language":"php","code":"{{ loop.last"},
      {"type":"code","filename":"page-131-exemple-12","language":"php","code":"}}"},
      {"type":"p","text":"la dernière itération"},
      {"type":"p","text":"Nombre total d’itérations de la boucle"},
      {"type":"code","filename":"page-131-exemple-13","language":"php","code":"{{"},
      {"type":"p","text":"loop.length"},
      {"type":"code","filename":"page-131-exemple-14","language":"php","code":"}}"},
      {"type":"h","text":"Lier du CSS, JS ou une"},
      {"type":"h","text":"image"},
      {"type":"image","src":"images/laconsole/symfony-p131.jpg","alt":"Page originale de Symfony.pdf - page 131"},
      {"type":"h","text":"Page 132"},
      {"type":"code","filename":"page-132-exemple-1","language":"php","code":"Symfony met à disposition la fonction Twig asset()  qui"},
      {"type":"h","text":"permet de générer des URL vers des ressources internes,"},
      {"type":"p","text":"placées dans notre répertoire"},
      {"type":"p","text":"public ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-132-exemple-2","language":"php","code":"{# Un logo situé dans \"public/img/logo.pn"},
      {"type":"code","filename":"page-132-exemple-3","language":"php","code":"<img src=\"{{ asset('img/logo.png') }}\" al"},
      {"type":"code","filename":"page-132-exemple-4","language":"php","code":"{# Un fichier CSS situé dans \"public/css/"},
      {"type":"code","filename":"page-132-exemple-5","language":"php","code":"<link href=\"{{ asset('css/app.css') }}\" r"},
      {"type":"code","filename":"page-132-exemple-6","language":"php","code":"{# Un fichier JS situé dans \"public/js/ap"},
      {"type":"code","filename":"page-132-exemple-7","language":"php","code":"<script src=\"{{ asset('js/app.js') }}\"></"},
      {"type":"code","filename":"page-132-exemple-8","language":"php","code":"Une fois les bases de Symfony acquises, pour une"},
      {"type":"p","text":"gestion des assets plus moderne et puissante, on"},
      {"type":"p","text":"privilégiera le système d’\n natif à"},
      {"type":"p","text":"AssetMapper"},
      {"type":"p","text":"&"},
      {"type":"code","filename":"page-132-exemple-9","language":"php","code":"Symfony ou encore d’"},
      {"type":"p","text":"utiliser le bundle Webpack"},
      {"type":"p","text":"Encore"},
      {"type":"p","text":", implémentant le célèbre outil de build JS"},
      {"type":"p","text":"Webpack"},
      {"type":"p","text":"."},
      {"type":"p","text":"Précédent :\n4. Maîtriser\nles\nContrôleurs"},
      {"type":"p","text":"Suivant :\n6. Créer\nses\nEntités\navec\nDoctrine"},
      {"type":"p","text":"〈"},
      {"type":"p","text":"〉"},
      {"type":"image","src":"images/laconsole/symfony-p132.jpg","alt":"Page originale de Symfony.pdf - page 132"},
      {"type":"h","text":"Page 133"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"+"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques"},
      {"type":"p","text":"sont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier puis"},
      {"type":"p","text":"je décide de transmettre cette\npassion en école de dev et sur\nlaConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions\nlégales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au\ndéveloppement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/symfony-p133.jpg","alt":"Page originale de Symfony.pdf - page 133"},
      {"type":"h","text":"Page 134"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-134-exemple-1","language":"php","code":"Symfony 6 › Installation"},
      {"type":"h","text":""},
      {"type":"code","filename":"page-134-exemple-2","language":"php","code":"Comme tout framework, Symfony nécessite l'installation préalable d'un"},
      {"type":"p","text":"environnement de développement adapté."},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-134-exemple-3","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 1. INSTALLATION"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Environnement de"},
      {"type":"h","text":"développement"},
      {"type":"h","text":"1. Langage PHP"},
      {"type":"p","text":"Plutôt que d’installer PHP et ses extensions de manière"},
      {"type":"p","text":"isolée, il est recommandé d’installer sur son ordinateur une"},
      {"type":"p","text":"suite logicielle « tout en un » telle que WAMP ou MAMP."},
      {"type":"p","text":"Cela permet de bénéﬁcier d’un package d’outils comme par"},
      {"type":"p","text":"exemple le système de gestion de bases de données"},
      {"type":"code","filename":"page-134-exemple-4","language":"php","code":"MySQL et l’interface graphique phpMyAdmin."},
      {"type":"image","src":"images/laconsole/symfony-p134.jpg","alt":"Page originale de Symfony.pdf - page 134"},
      {"type":"h","text":"Page 135"},
      {"type":"p","text":"L’installation de cette suite logicielle est détaillée dans la"},
      {"type":"p","text":"formation dédiée au langage PHP"},
      {"type":"p","text":"."},
      {"type":"code","filename":"page-135-exemple-1","language":"php","code":"Symfony 6.4  (actuelle version « LTS ») requiert"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"une version de PHP supérieure à 8.1 ."},
      {"type":"code","filename":"page-135-exemple-2","language":"php","code":"2. Gestionnaire de\ndépendances (Composer)"},
      {"type":"h","text":"C’est quoi ?"},
      {"type":"code","filename":"page-135-exemple-3","language":"php","code":"Composer est un outil dédié à la gestion des dépendances"},
      {"type":"p","text":"PHP d’un projet. Les dépendances sont toutes les"},
      {"type":"p","text":"bibliothèques dont votre projet dépend pour fonctionner."},
      {"type":"p","text":"Pour rappel, une bibliothèque développée pour le"},
      {"type":"code","filename":"page-135-exemple-4","language":"php","code":"framework Symfony est appelée « Bundle »"},
      {"type":"code","filename":"page-135-exemple-5","language":"php","code":"Symfony est constitué de nombreuses bibliothèques qui"},
      {"type":"p","text":"ont elles-mêmes leurs propres dépendances (on dit qu’il «"},
      {"type":"code","filename":"page-135-exemple-6","language":"php","code":"dépend » d’elles). Composer est donc indispensable pour"},
      {"type":"p","text":"pouvoir installer ce framework car c’est lui qui va s’assurer"},
      {"type":"p","text":"que chaque bibliothèque aura tout ce qu’il faut pour"},
      {"type":"p","text":"fonctionner."},
      {"type":"code","filename":"page-135-exemple-7","language":"php","code":"Sans Composer ou plus globalement sans gestionnaire de"},
      {"type":"p","text":"dépendances, il serait extrêmement compliqué de gérer"},
      {"type":"h","text":"manuellement :"},
      {"type":"p","text":"1. La mise à jour des bibliothèques externes."},
      {"type":"p","text":"2. Leurs dépendances avec d’autres bibliothèques."},
      {"type":"image","src":"images/laconsole/symfony-p135.jpg","alt":"Page originale de Symfony.pdf - page 135"},
      {"type":"h","text":"Page 136"},
      {"type":"p","text":"3. L’autoload des classes utilisées par ces librairies."},
      {"type":"code","filename":"page-136-exemple-1","language":"php","code":"Derrière la magie de Composer… il y a\n !"},
      {"type":"p","text":"Packagist"},
      {"type":"p","text":"Packagist est une sorte de gros annuaire référençant"},
      {"type":"p","text":"toutes les informations propres à chaque bibliothèque. On"},
      {"type":"p","text":"y retrouve notamment :"},
      {"type":"h","text":"Le mainteneur principal"},
      {"type":"p","text":"Le site web de la bibliothèque"},
      {"type":"h","text":"Le nombre de téléchargements"},
      {"type":"p","text":"…"},
      {"type":"p","text":"Ce qui nous importe le plus, ce sont les sources ainsi que"},
      {"type":"code","filename":"page-136-exemple-2","language":"php","code":"les dépendances. Composer va récupérer les informations"},
      {"type":"p","text":"nécessaires sur ce site pour pouvoir télécharger les"},
      {"type":"h","text":"bibliothèques et leurs dépendances."},
      {"type":"code","filename":"page-136-exemple-3","language":"php","code":"Composer sera extrêmement utilisé tout au long de notre"},
      {"type":"p","text":"développement via des lignes de commande, aﬁn"},
      {"type":"h","text":"d’installer et mettre à jour nos bundles."},
      {"type":"p","text":"%\nLien de téléchargement de"},
      {"type":"code","filename":"page-136-exemple-4","language":"php","code":"Composer"},
      {"type":"code","filename":"page-136-exemple-5","language":"php","code":"Vériﬁer que Composer a bien été installé"},
      {"type":"code","filename":"page-136-exemple-6","language":"php","code":"Vériﬁons que Composer a bien été installé avec la ligne"},
      {"type":"p","text":"de commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-136-exemple-7","language":"php","code":"composer --version"},
      {"type":"image","src":"images/laconsole/symfony-p136.jpg","alt":"Page originale de Symfony.pdf - page 136"},
      {"type":"h","text":"Page 137"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-137-exemple-1","language":"php","code":"php composer.phar --version"},
      {"type":"code","filename":"page-137-exemple-2","language":"php","code":"Pour mettre à jour composer, on tape composer"},
      {"type":"p","text":"'"},
      {"type":"code","filename":"page-137-exemple-3","language":"php","code":"self-update ."},
      {"type":"h","text":"Installer des bundles"},
      {"type":"h","text":"L’installation d’une dépendance spéciﬁque se fait via la"},
      {"type":"p","text":"ligne de commande suivante (sans les *  évidemment) :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-137-exemple-4","language":"php","code":"composer require <nom_du_bundle>"},
      {"type":"h","text":"L’installation de l’ensemble des dépendances nécessaires"},
      {"type":"p","text":"à un projet se fait via la ligne de commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-137-exemple-5","language":"php","code":"composer install"},
      {"type":"h","text":"Mettre à jour des bundles"},
      {"type":"h","text":"La mise à jour des dépendances se fait via la ligne de"},
      {"type":"p","text":"commande suivante :"},
      {"type":"image","src":"images/laconsole/symfony-p137.jpg","alt":"Page originale de Symfony.pdf - page 137"},
      {"type":"h","text":"Page 138"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-138-exemple-1","language":"php","code":"composer update"},
      {"type":"code","filename":"page-138-exemple-2","language":"php","code":"Mais comment Composer va-t-il pouvoir récupérer les"},
      {"type":"h","text":"sources des bibliothèques ?"},
      {"type":"p","text":"La plupart du temps c’est par l’intermédiaire du"},
      {"type":"p","text":"gestionnaire de version\n qu’il récupère et télécharge les"},
      {"type":"code","filename":"page-138-exemple-3","language":"php","code":"Git"},
      {"type":"p","text":"archives des sources concernées."},
      {"type":"code","filename":"page-138-exemple-4","language":"php","code":"3. Gestionnaire de version (Git)"},
      {"type":"p","text":"Lorsqu’on travaille à plusieurs sur un même projet, et donc"},
      {"type":"p","text":"sur le même code source, il est important de pouvoir le"},
      {"type":"h","text":"modiﬁer simultanément, en sécurité et aussi de manière"},
      {"type":"p","text":"explicite. Un logiciel de versioning c’est tout ça à la fois !"},
      {"type":"p","text":"Vous pouvez :"},
      {"type":"p","text":"Coder en parallèle avec un autre développeur et vos"},
      {"type":"p","text":"modiﬁcations seront fusionnées."},
      {"type":"h","text":"Revenir sur des versions précédentes de votre"},
      {"type":"p","text":"application (les fameux backups !)"},
      {"type":"p","text":"Documenter vos modiﬁcations (qui a fait quoi)."},
      {"type":"p","text":"Même sur les projets de développement en"},
      {"type":"code","filename":"page-138-exemple-5","language":"php","code":"solitaire, Git est très utile pour la gestion des"},
      {"type":"p","text":"'"},
      {"type":"p","text":"backups et la conservation d’un historique des"},
      {"type":"p","text":"modiﬁcations."},
      {"type":"code","filename":"page-138-exemple-6","language":"php","code":"Ici, Git va donc nous permettre de récupérer le code source"},
      {"type":"image","src":"images/laconsole/symfony-p138.jpg","alt":"Page originale de Symfony.pdf - page 138"},
      {"type":"h","text":"Page 139"},
      {"type":"p","text":"des bibliothèques avec lesquelles on travaille : nos"},
      {"type":"h","text":"fameuses dépendances."},
      {"type":"p","text":"%\nLien de téléchargement de"},
      {"type":"code","filename":"page-139-exemple-1","language":"php","code":"Git"},
      {"type":"code","filename":"page-139-exemple-2","language":"php","code":"Vériﬁons que Git a bien été installé avec la ligne de"},
      {"type":"p","text":"commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-139-exemple-3","language":"php","code":"git --version"},
      {"type":"code","filename":"page-139-exemple-4","language":"php","code":"Conﬁguration de Git"},
      {"type":"code","filename":"page-139-exemple-5","language":"php","code":"Commençons par conﬁgurer notre Git en déﬁnissant un"},
      {"type":"h","text":"pseudo et d’une adresse email."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-139-exemple-6","language":"php","code":"git config --global user.name \"votre_p"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-139-exemple-7","language":"php","code":"git config --global user.email \"votre_"},
      {"type":"p","text":"Pour vériﬁer s’ils ne sont pas déjà déﬁnis, taper"},
      {"type":"p","text":"'"},
      {"type":"code","filename":"page-139-exemple-8","language":"php","code":"git config --list ."},
      {"type":"code","filename":"page-139-exemple-9","language":"php","code":"4. Symfony CLI"},
      {"type":"code","filename":"page-139-exemple-10","language":"php","code":"Comme la majorité des frameworks, Symfony possède sa"},
      {"type":"image","src":"images/laconsole/symfony-p139.jpg","alt":"Page originale de Symfony.pdf - page 139"},
      {"type":"h","text":"Page 140"},
      {"type":"code","filename":"page-140-exemple-1","language":"php","code":"propre CLI (Command-Line Interface)."},
      {"type":"p","text":"La CLI confère aux développeurs un ensemble d’outils"},
      {"type":"p","text":"utiles au développement et à l’exécution de l’application en"},
      {"type":"p","text":"local, comme par exemple :"},
      {"type":"code","filename":"page-140-exemple-2","language":"php","code":"La création d’un projet Symfony"},
      {"type":"p","text":"La gestion et la sécurité du projet"},
      {"type":"p","text":"D’exploiter un serveur local rapide"},
      {"type":"p","text":"…"},
      {"type":"p","text":"Ces fonctionnalités sont contenues à l’intérieur d’un client"},
      {"type":"code","filename":"page-140-exemple-3","language":"php","code":"téléchargeable, nommé « binaire » Symfony."},
      {"type":"p","text":"Si vous aviez jusqu’à maintenant exploité le"},
      {"type":"p","text":"serveur Apache de WAMP ou MAMP en y plaçant"},
      {"type":"p","text":"votre projet PHP dans les répertoires racines"},
      {"type":"p","text":"respectifs"},
      {"type":"p","text":"/www  ou"},
      {"type":"p","text":"/htdocs , nous allons"},
      {"type":"p","text":"'"},
      {"type":"p","text":"désormais pouvoir lancer un serveur local via"},
      {"type":"code","filename":"page-140-exemple-4","language":"php","code":"Symfony CLI à la place de notre bon vieux serveur"},
      {"type":"p","text":"Apache traditionnel."},
      {"type":"p","text":"%\nLien de téléchargement de\n."},
      {"type":"code","filename":"page-140-exemple-5","language":"php","code":"Symfony CLI"},
      {"type":"p","text":"Il est possible d’installer la CLI via :"},
      {"type":"h","text":"Un installateur de paquets comme par exemple"},
      {"type":"p","text":"Homebrew (macOS) ou Scoop (Windows)"},
      {"type":"h","text":"Le téléchargement du binaire depuis GitHub."},
      {"type":"h","text":"Récapitulatif"},
      {"type":"image","src":"images/laconsole/symfony-p140.jpg","alt":"Page originale de Symfony.pdf - page 140"},
      {"type":"h","text":"Page 141"},
      {"type":"code","filename":"page-141-exemple-1","language":"php","code":"Pour pouvoir développer avec le framework Symfony, vous"},
      {"type":"p","text":"devez avoir installé au moins :"},
      {"type":"p","text":"Le langage PHP"},
      {"type":"code","filename":"page-141-exemple-2","language":"php","code":"Le gestionnaire de dépendances Composer"},
      {"type":"code","filename":"page-141-exemple-3","language":"php","code":"Le gestionnaire de versions Git"},
      {"type":"code","filename":"page-141-exemple-4","language":"php","code":"La Symfony CLI"},
      {"type":"p","text":"La ligne de commande suivante permet de savoir"},
      {"type":"h","text":"rapidement si votre environnement est bien opérationnel :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-141-exemple-5","language":"php","code":"symfony check:requirements"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-141-exemple-6","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Mise en place d’un"},
      {"type":"code","filename":"page-141-exemple-7","language":"php","code":"projet Symfony"},
      {"type":"image","src":"images/laconsole/symfony-p141.jpg","alt":"Page originale de Symfony.pdf - page 141"},
      {"type":"h","text":"Page 142"},
      {"type":"h","text":"Création du projet"},
      {"type":"code","filename":"page-142-exemple-1","language":"php","code":"La création d’un nouveau projet Symfony se fait via la ligne"},
      {"type":"p","text":"de commande suivante :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-142-exemple-2","language":"php","code":"symfony new <nom_projet>"},
      {"type":"code","filename":"page-142-exemple-3","language":"php","code":"Cette commande va installer un projet Symfony avec une"},
      {"type":"p","text":"conﬁguration minimale (utile pour les APIs, application de"},
      {"type":"p","text":"Console et\n)."},
      {"type":"p","text":"Services"},
      {"type":"p","text":"Néanmoins, la plupart du temps, nous préférons installer"},
      {"type":"code","filename":"page-142-exemple-4","language":"php","code":"notre projet Symfony avec tous les paquets utiles à la"},
      {"type":"p","text":"création d’une application web standard. Il faudra alors"},
      {"type":"p","text":"ajouter à cette ligne de commande le ﬂag --webapp"},
      {"type":"code","filename":"page-142-exemple-5","language":"php","code":"(anciennement --full  sur Symfony <= 5.* )."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-142-exemple-6","language":"php","code":"symfony new <nom_projet> --webapp"},
      {"type":"p","text":"Notez qu’il existe également le ﬂag --demo ,"},
      {"type":"p","text":"téléchargeant un projet de démonstration complet. Ce ﬂag"},
      {"type":"p","text":"n’est bien entendu pas à utiliser lors de l’installation d’un"},
      {"type":"p","text":"nouveau projet sur lequel vous souhaitez travailler, mais il"},
      {"type":"h","text":"s’avère très utile pour apprendre la structure et le"},
      {"type":"code","filename":"page-142-exemple-7","language":"php","code":"fonctionnement de Symfony."},
      {"type":"image","src":"images/laconsole/symfony-p142.jpg","alt":"Page originale de Symfony.pdf - page 142"},
      {"type":"h","text":"Page 143"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-143-exemple-1","language":"php","code":"symfony new <nom_projet> --demo"},
      {"type":"p","text":"Il est possible d’installer une version spéciﬁque de"},
      {"type":"p","text":"'"},
      {"type":"code","filename":"page-143-exemple-2","language":"php","code":"Symfony avec le ﬂag --version=5.4  ( 5.4 ) étant"},
      {"type":"p","text":"un exemple de version souhaitée."},
      {"type":"h","text":"Lancement du serveur"},
      {"type":"code","filename":"page-143-exemple-3","language":"php","code":"On distingue 2 manières de démarrer un serveur Symfony :"},
      {"type":"h","text":"Démarrage en tâche principale"},
      {"type":"p","text":"Démarrer le serveur en tâche principale empêche"},
      {"type":"h","text":"d’exécuter d’autres lignes de commande pendant que le"},
      {"type":"p","text":"serveur tourne."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-143-exemple-4","language":"php","code":"symfony server:start"},
      {"type":"code","filename":"page-143-exemple-5","language":"php","code":"La commande symfony server:start  peut être"},
      {"type":"p","text":"'"},
      {"type":"code","filename":"page-143-exemple-6","language":"php","code":"abrégée par symfony serve ."},
      {"type":"h","text":"Démarrage en tâche de fond"},
      {"type":"p","text":"Démarrer le serveur en tâche de fond permet d’exécuter"},
      {"type":"h","text":"d’autres lignes de commande pendant que le serveur"},
      {"type":"p","text":"tourne. On précisera cela avec le ﬂag -d ."},
      {"type":"image","src":"images/laconsole/symfony-p143.jpg","alt":"Page originale de Symfony.pdf - page 143"},
      {"type":"h","text":"Page 144"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"code","filename":"page-144-exemple-1","language":"php","code":"symfony server:start -d"},
      {"type":"p","text":"Cette méthode sera à privilégier car nous verrons par la"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"suite que nous aurons régulièrement recours à l’invite de"},
      {"type":"p","text":"Environnement de"},
      {"type":"p","text":"commande pour effectuer d’autres opérations sur notre"},
      {"type":"p","text":"développement"},
      {"type":"p","text":"projet."},
      {"type":"p","text":"1. Langage PHP"},
      {"type":"p","text":"2. Gestionnaire de"},
      {"type":"code","filename":"page-144-exemple-2","language":"php","code":"dépendances (Composer)"},
      {"type":"h","text":"Accès au site"},
      {"type":"p","text":"C’est quoi ?"},
      {"type":"p","text":"Installer des bundles"},
      {"type":"p","text":"Le serveur est systématiquement démarré sur le localhost"},
      {"type":"p","text":"Mettre à jour des bundles"},
      {"type":"p","text":"(127.0.0.1) au port 8000 . Si plusieurs serveurs sont lancés"},
      {"type":"p","text":"3. Gestionnaire de version"},
      {"type":"p","text":"simultanément, alors les projets seront accessibles sur les"},
      {"type":"code","filename":"page-144-exemple-3","language":"php","code":"(Git)"},
      {"type":"p","text":"ports successifs : 8001 , 8002 …"},
      {"type":"code","filename":"page-144-exemple-4","language":"php","code":"4. Symfony CLI"},
      {"type":"p","text":"Récapitulatif"},
      {"type":"p","text":"127.0.0.1:8000"},
      {"type":"p","text":"Mise en place d’un projet"},
      {"type":"code","filename":"page-144-exemple-5","language":"php","code":"Symfony"},
      {"type":"p","text":"localhost:8000"},
      {"type":"p","text":"Création du projet"},
      {"type":"p","text":"Le projet étant encore vierge et aucune page d’accueil"},
      {"type":"p","text":"Lancement du serveur"},
      {"type":"p","text":"n’étant déﬁnie, la page suivante sera afﬁchée par défaut."},
      {"type":"p","text":"Démarrage en tâche"},
      {"type":"p","text":"principale"},
      {"type":"p","text":"Démarrage en tâche de fond"},
      {"type":"p","text":"Accès au site"},
      {"type":"p","text":"Arrêt du serveur"},
      {"type":"image","src":"images/laconsole/symfony-p144.jpg","alt":"Page originale de Symfony.pdf - page 144"},
      {"type":"h","text":"Page 145"},
      {"type":"p","text":"On distingue également une barre en bas de page. Il s’agit"},
      {"type":"code","filename":"page-145-exemple-1","language":"php","code":"de la barre de débogage de Symfony (plus communément"},
      {"type":"p","text":"appelée « Profiler  »). Cette barre contient de"},
      {"type":"p","text":"nombreuses informations extrêmement utiles lors de votre"},
      {"type":"p","text":"développement."},
      {"type":"h","text":"Arrêt du serveur"},
      {"type":"code","filename":"page-145-exemple-2","language":"php","code":"Lorsqu’on termine sa session de travail avec Symfony, le"},
      {"type":"p","text":"serveur est automatiquement stoppé. Cette opération n’est"},
      {"type":"p","text":"donc pas nécessaire. Notez qu’il peut néanmoins parfois"},
      {"type":"p","text":"être utile de réaliser cette opération manuellement avec la"},
      {"type":"p","text":"commande :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-145-exemple-3","language":"php","code":"symfony server:stop"},
      {"type":"image","src":"images/laconsole/symfony-p145.jpg","alt":"Page originale de Symfony.pdf - page 145"},
      {"type":"h","text":"Page 146"},
      {"type":"p","text":"Suivant :\n2.\nArchitecture\nd'un Projet"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"+"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques"},
      {"type":"p","text":"sont remplacées par des lignes\nde code. J'en fais mon métier\npuis je décide de transmettre"},
      {"type":"p","text":""},
      {"type":"p","text":"cette passion en école de dev et\nsur laConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions\nlégales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au\ndéveloppement web."},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"image","src":"images/laconsole/symfony-p146.jpg","alt":"Page originale de Symfony.pdf - page 146"},
      {"type":"h","text":"Page 147"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-147-exemple-1","language":"php","code":"Symfony 6 › Les Bases du Routage"},
      {"type":"h","text":""},
      {"type":"code","filename":"page-147-exemple-2","language":"php","code":"Dans Symfony, toute requête HTTP passe par le routeur qui va déﬁnir qui est en"},
      {"type":"p","text":"charge du traitement de la requête."},
      {"type":"p","text":"MAJ en nov. 2024\n■■■Intermédiaire\n13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-147-exemple-3","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 3. LES BASES DU ROUTAGE"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Qu’est-ce qu’une route ?"},
      {"type":"p","text":"Le routage est un mécanisme par lequel les requêtes HTTP"},
      {"type":"p","text":"sont acheminées vers le code qui les gère."},
      {"type":"p","text":"Concrètement une route déﬁnie que lorsqu’un utilisateur"},
      {"type":"code","filename":"page-147-exemple-4","language":"php","code":"demande une certaine URL ; on déclenche une méthode de"},
      {"type":"p","text":"contrôleur"},
      {"type":"code","filename":"page-147-exemple-5","language":"php","code":"Pour parler Programmation Orientée Objet, dans Symfony un"},
      {"type":"p","text":"contrôleur est une classe, et chaque route va appeler une de"},
      {"type":"p","text":"ses méthodes."},
      {"type":"p","text":"Le routeur est le garant du bon routage de l’application. Pour"},
      {"type":"p","text":"cela, il se base sur un ﬁchier de routes associant à chaque URL"},
      {"type":"p","text":"qui existe pour l’application, les contrôleurs et leurs méthodes"},
      {"type":"image","src":"images/laconsole/symfony-p147.jpg","alt":"Page originale de Symfony.pdf - page 147"},
      {"type":"h","text":"Page 148"},
      {"type":"p","text":"associées."},
      {"type":"code","filename":"page-148-exemple-1","language":"php","code":"Dans Symfony, on crée généralement un contrôleur"},
      {"type":"p","text":"pour chaque grande partie de notre site (gestion des"},
      {"type":"p","text":"$"},
      {"type":"p","text":"utilisateurs, gestion des articles, gestion des produits,"},
      {"type":"p","text":"espace d’administration, etc.). Par exemple, on créera"},
      {"type":"p","text":"généralement un contrôleur par CRUD d’une ressource."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-148-exemple-2","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Où écrire ses routes ?"},
      {"type":"p","text":"Il est aujourd’hui possible d’écrire ses routes à de nombreux"},
      {"type":"image","src":"images/laconsole/symfony-p148.jpg","alt":"Page originale de Symfony.pdf - page 148"},
      {"type":"h","text":"Page 149"},
      {"type":"p","text":"endroits de notre application :"},
      {"type":"p","text":"Dans des ﬁchiers dédiées (YAML, XML, PHP)"},
      {"type":"p","text":"Dans nos contrôleurs"},
      {"type":"p","text":"Nous détaillerons dans cette formation l’écriture des routes"},
      {"type":"p","text":"dans nos contrôleurs, car il s’agit aujourd’hui de la méthode la"},
      {"type":"p","text":"plus couramment utilisée."},
      {"type":"p","text":"Une route s’écrit à travers une sorte de commentaire interprété"},
      {"type":"p","text":"appelé « annotations » (PHP < 8 ) ou « attributs » (PHP ≥ 8 )"},
      {"type":"p","text":"située juste au-dessus de la méthode de contrôleur qu’elle doit"},
      {"type":"p","text":"déclencher."},
      {"type":"code","filename":"page-149-exemple-1","language":"php","code":"PHP < 8  : si Symfony a été installé sans le ﬂag --"},
      {"type":"p","text":"webapp  ou --full , alors il faudra installer le paquet"},
      {"type":"p","text":"$"},
      {"type":"code","filename":"page-149-exemple-2","language":"php","code":"annotations  avec la ligne de commande : composer"},
      {"type":"p","text":"require annotations ."},
      {"type":"h","text":"Annotation"},
      {"type":"p","text":"Les annotations permettent de déﬁnir des métadonnées dans"},
      {"type":"p","text":"votre code dans un bloc déﬁni avec la syntaxe suivante /** *"},
      {"type":"p","text":"@... */ ."},
      {"type":"code","filename":"page-149-exemple-3","language":"php","code":"L’annotation @Route  permet de déclarer une route."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"/**"},
      {"type":"code","filename":"page-149-exemple-4","language":"php","code":"* @Route('/route-de-demo', name='demo')"},
      {"type":"p","text":"*/"},
      {"type":"p","text":"/route-de-demo  : chemin de la route"},
      {"type":"image","src":"images/laconsole/symfony-p149.jpg","alt":"Page originale de Symfony.pdf - page 149"},
      {"type":"h","text":"Page 150"},
      {"type":"p","text":"demo  : nom de la route"},
      {"type":"p","text":"C’est grâce au ﬁchier"},
      {"type":"p","text":"config/routes/annotations.yaml  que le routeur"},
      {"type":"p","text":"$"},
      {"type":"p","text":"sera au courant que des routes sont potentiellement"},
      {"type":"p","text":"renseignées via des annotations dans nos contrôleurs."},
      {"type":"h","text":"Attribut PHP"},
      {"type":"p","text":"Les attributs PHP permettent de déﬁnir des métadonnées dans"},
      {"type":"p","text":"votre code dans un bloc déﬁni avec la syntaxe suivante #"},
      {"type":"p","text":"[...] . Ces métadonnées sont ensuite lues par l’"},
      {"type":"p","text":"API Reﬂection"},
      {"type":"p","text":"de PHP."},
      {"type":"p","text":"L’attribut Route  permet de déclarer une route."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/route-de-demo', name: 'demo')]"},
      {"type":"p","text":"/route-de-demo  : chemin de la route"},
      {"type":"p","text":"demo  : nom de la route"},
      {"type":"p","text":"En raison de sa modernité, c’est cette approche que nous"},
      {"type":"p","text":"utiliserons au cours de cette formation."},
      {"type":"p","text":"Commençons donc par créer un contrôleur dans notre projet"},
      {"type":"p","text":"avec la ligne de commande suivante :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-150-exemple-1","language":"php","code":"symfony console make:controller"},
      {"type":"image","src":"images/laconsole/symfony-p150.jpg","alt":"Page originale de Symfony.pdf - page 150"},
      {"type":"h","text":"Page 151"},
      {"type":"p","text":"Cette ligne de commande est proposée par le"},
      {"type":"p","text":"MakerBundle (installé par défaut à l’initialisation du"},
      {"type":"p","text":"$"},
      {"type":"code","filename":"page-151-exemple-1","language":"php","code":"projet Symfony avec le ﬂag --webapp ). Nous"},
      {"type":"p","text":"détaillerons le code généré au chapitre suivant,"},
      {"type":"p","text":"concentrons-nous pour l’instant sur les routes."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-151-exemple-2","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Routes statiques"},
      {"type":"p","text":"On entend ici par « route statique » une route dont le chemin ne"},
      {"type":"p","text":"change jamais, par opposition aux « routes dynamiques »."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/', name: 'home')]"},
      {"type":"code","filename":"page-151-exemple-3","language":"php","code":"public function home(): Response { ... }"},
      {"type":"p","text":"#[Route('/blog', name: 'article_list')]"},
      {"type":"code","filename":"page-151-exemple-4","language":"php","code":"public function listArticles(): Response {"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name: 'ad"},
      {"type":"code","filename":"page-151-exemple-5","language":"php","code":"public function addArticle(): Response { .."},
      {"type":"image","src":"images/laconsole/symfony-p151.jpg","alt":"Page originale de Symfony.pdf - page 151"},
      {"type":"h","text":"Page 152"},
      {"type":"p","text":"Dans l’exemple précédent :"},
      {"type":"p","text":"Si j’accède à monsite.com , je matcherai avec la route"},
      {"type":"p","text":"home  et déclencherai la méthode home() ."},
      {"type":"p","text":"Si j’accède à monsite.com/blog , je matcherai avec la"},
      {"type":"p","text":"route article_list  et déclencherai la méthode"},
      {"type":"p","text":"listArticles() ."},
      {"type":"p","text":"Si j’accède à monsite.com/admin/articles/ajouter , je"},
      {"type":"p","text":"matcherai avec la route article_add  et déclencherai la"},
      {"type":"p","text":"méthode addArticle() ."},
      {"type":"p","text":"Les routes statiques de par leur forme ﬁxe présentent"},
      {"type":"p","text":"des limites lorsque l’on souhaite afﬁcher sur un même"},
      {"type":"p","text":"$"},
      {"type":"p","text":"modèle de page des données variables. Nous aurons"},
      {"type":"p","text":"donc besoin de routes dynamiques."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-152-exemple-1","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Routes dynamiques"},
      {"type":"p","text":"On entend ici par « route dynamique » une route dont le chemin"},
      {"type":"p","text":"varie en fonction des valeurs affectées à ses paramètres. Ces"},
      {"type":"p","text":"routes sont essentielles pour créer des pages au contenu"},
      {"type":"p","text":"dynamique, comme par exemple :"},
      {"type":"image","src":"images/laconsole/symfony-p152.jpg","alt":"Page originale de Symfony.pdf - page 152"},
      {"type":"h","text":"Page 153"},
      {"type":"p","text":"Une page de produit"},
      {"type":"p","text":"Une page d’article de blog"},
      {"type":"p","text":"Un feed d’un utilisateur sur un réseau social"},
      {"type":"p","text":"Une page de proﬁl utilisateur"},
      {"type":"p","text":"…"},
      {"type":"h","text":"Paramètres de routes"},
      {"type":"h","text":"Syntaxe"},
      {"type":"p","text":"L’information qui va permettre de dynamiser ce contenu passe"},
      {"type":"p","text":"par l’URL : on ajoute en fait un paramètre dont le nom sera noté"},
      {"type":"p","text":"entre accolades."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Exemple avec un paramètre \"id\""},
      {"type":"code","filename":"page-153-exemple-1","language":"php","code":"#[Route('/blog/{id}', name: 'article_show')]"},
      {"type":"code","filename":"page-153-exemple-2","language":"php","code":"public function showArticle(int $id): Respon"},
      {"type":"code","filename":"page-153-exemple-3","language":"php","code":"// Ici, je peux utiliser $id..."},
      {"type":"code","filename":"page-153-exemple-4","language":"php","code":"}"},
      {"type":"p","text":"// Exemple avec un paramètre \"slug\""},
      {"type":"code","filename":"page-153-exemple-5","language":"php","code":"#[Route('/blog/{slug}', name: 'article_show"},
      {"type":"code","filename":"page-153-exemple-6","language":"php","code":"public function showArticle(string $slug): R"},
      {"type":"code","filename":"page-153-exemple-7","language":"php","code":"// Ici, je peux utiliser $slug..."},
      {"type":"code","filename":"page-153-exemple-8","language":"php","code":"}"},
      {"type":"p","text":"Généralement, ce paramètre est un id  ou slug  (pour des"},
      {"type":"image","src":"images/laconsole/symfony-p153.jpg","alt":"Page originale de Symfony.pdf - page 153"},
      {"type":"h","text":"Page 154"},
      {"type":"p","text":"URLs « SEO-friendly »)."},
      {"type":"p","text":"Un slug correspond généralement au nom d’une"},
      {"type":"p","text":"$"},
      {"type":"p","text":"ressource, en minuscule, avec les espaces remplacés"},
      {"type":"p","text":"par des tirets et sans autres caractères spéciaux."},
      {"type":"h","text":"Paramètres optionnels"},
      {"type":"p","text":"Parfois, il est possible de ne pas préciser de valeur pour un"},
      {"type":"p","text":"paramètre lorsqu’on appelle une route. Dans ces cas-là, il est"},
      {"type":"p","text":"possible de lui déﬁnir une valeur par défaut."},
      {"type":"p","text":"Paramètre optionnel déﬁni via l'argument nommé"},
      {"type":"p","text":"defaults"},
      {"type":"p","text":"Paramètre optionnel déﬁni au sein d'une méthode"},
      {"type":"h","text":"Contraintes"},
      {"type":"p","text":"On s’attend à ce que dans l’URL :"},
      {"type":"code","filename":"page-154-exemple-1","language":"php","code":"monsite.com/blog/{slug}  ; slug soit une chaîne de"},
      {"type":"p","text":"caractère"},
      {"type":"code","filename":"page-154-exemple-2","language":"php","code":"monsite.com/blog/{id}  ; id soit un nombre"},
      {"type":"p","text":"C’est du bon sens… Mais le bon sens est humain et notre code"},
      {"type":"p","text":"ne l’est pas, il ne fait que ce qu’on lui dit de faire."},
      {"type":"p","text":"Il ne bronchera donc pas si je souhaite accéder à l’URL"},
      {"type":"p","text":"monsite.com/blog/784  ou monsite.com/blog/je-suis-"},
      {"type":"p","text":"un-article ."},
      {"type":"code","filename":"page-154-exemple-3","language":"php","code":"Le typage du paramètre de route permettrait de déﬁnir un type"},
      {"type":"p","text":"scalaire attendu pour un paramètre (généralement int  ou"},
      {"type":"image","src":"images/laconsole/symfony-p154.jpg","alt":"Page originale de Symfony.pdf - page 154"},
      {"type":"h","text":"Page 155"},
      {"type":"p","text":"string )."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-155-exemple-1","language":"php","code":"#[Route('/blog/{id}', name: 'article_show')]"},
      {"type":"code","filename":"page-155-exemple-2","language":"php","code":"public function showArticle(int $id): Respon"},
      {"type":"code","filename":"page-155-exemple-3","language":"php","code":"Si j’envoie une string dans le paramètre {id} , Symfony"},
      {"type":"p","text":"génèrera une erreur serveur 500 . C’est mieux, mais pas encore"},
      {"type":"p","text":"idéal… nous préfèrerions plutôt afﬁcher une jolie page 404 ."},
      {"type":"p","text":"Pour contrôler la validité d’un paramètre de route, on exploite"},
      {"type":"p","text":"alors les expressions régulières PHP :"},
      {"type":"p","text":"\\d+  indique un nombre de n’importe quelle longueur"},
      {"type":"p","text":"\\w  (= [a-zA-Z0-9_] ) indique un caractère"},
      {"type":"p","text":"alphanumérique ou un tiret de soulignement"},
      {"type":"p","text":"|  indique qu’un caractère doit matcher avec au moins une"},
      {"type":"p","text":"valeur dans une liste (très utilisé pour les traductions)"},
      {"type":"p","text":"…"},
      {"type":"p","text":"toutes les expressions régulières ici"},
      {"type":"p","text":"Cette contrainte peut être spéciﬁée via :"},
      {"type":"p","text":"Contrainte déﬁnie via l'argument nommé"},
      {"type":"p","text":"requirements"},
      {"type":"p","text":"L’argument nommé requirements  permet de déﬁnir un"},
      {"type":"p","text":"format attendu pour un paramètre."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-155-exemple-4","language":"php","code":"#[Route('/blog/{id}', name: 'article_show"},
      {"type":"code","filename":"page-155-exemple-5","language":"php","code":"public function showArticle(int $id): Resp"},
      {"type":"image","src":"images/laconsole/symfony-p155.jpg","alt":"Page originale de Symfony.pdf - page 155"},
      {"type":"h","text":"Page 156"},
      {"type":"p","text":"Contrainte déﬁnie au sein du paramètre de route"},
      {"type":"code","filename":"page-156-exemple-1","language":"php","code":"Avec la syntaxe {parametre<expression_reguliere>}"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-156-exemple-2","language":"php","code":"#[Route('/blog/{id<\\d+>}', name: 'article_"},
      {"type":"code","filename":"page-156-exemple-3","language":"php","code":"public function showArticle(int $id): Resp"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-156-exemple-4","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Méthodes HTTP"},
      {"type":"p","text":"Une requête HTTP peut être envoyée du client vers le serveur"},
      {"type":"p","text":"selon diverses méthodes HTTP (aussi appelées verbes HTTP)."},
      {"type":"p","text":"GET  pour récupérer des données du serveur"},
      {"type":"p","text":"(généralement pour l’afﬁchage d’une page web)"},
      {"type":"p","text":"POST  pour écrire des données sur le serveur (création d’un"},
      {"type":"p","text":"élément après avoir soumis un formulaire)."},
      {"type":"p","text":"PATCH  / PUT  pour modiﬁer des données sur le serveur"},
      {"type":"p","text":"(édition d’un élément après avoir soumis un formulaire)."},
      {"type":"code","filename":"page-156-exemple-5","language":"php","code":"DELETE  pour supprimer des données sur le serveur"},
      {"type":"image","src":"images/laconsole/symfony-p156.jpg","alt":"Page originale de Symfony.pdf - page 156"},
      {"type":"h","text":"Page 157"},
      {"type":"p","text":"(suppression d’un élément)."},
      {"type":"code","filename":"page-157-exemple-1","language":"php","code":"PUT , PATCH  et DELETE  ne sont pas prises en charge"},
      {"type":"p","text":"par les formulaires HTML dans de nombreux"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"navigateurs modernes. On les utilisera essentiellement"},
      {"type":"p","text":"dans le cadre du développement et de l’exploitation"},
      {"type":"code","filename":"page-157-exemple-2","language":"php","code":"d’API (Application Programming Interface)."},
      {"type":"p","text":"Nous effectuerons donc la récupération via la méthode GET  et"},
      {"type":"p","text":"l’ajout, la modiﬁcation ou encore la suppression via la méthode"},
      {"type":"p","text":"POST ."},
      {"type":"p","text":"Par défaut, une route est appelable avec n’importe quelle"},
      {"type":"code","filename":"page-157-exemple-3","language":"php","code":"méthode HTTP. Il est néanmoins possible de dire à Symfony : «"},
      {"type":"code","filename":"page-157-exemple-4","language":"php","code":"cette route ne répondra qu’à un appel à une requête de type"},
      {"type":"p","text":"POST  » avec l’argument methods ."},
      {"type":"p","text":"Dans un CRUD  :"},
      {"type":"p","text":"Une route qui liste des articles de blog verra ses requêtes"},
      {"type":"p","text":"d’accès en GET  (récupération des articles depuis le"},
      {"type":"p","text":"serveur)."},
      {"type":"p","text":"Une route qui afﬁche les détails d’un article de blog verra"},
      {"type":"p","text":"ses requêtes d’accès en GET  (récupération de l’article"},
      {"type":"p","text":"depuis le serveur)."},
      {"type":"p","text":"Une route qui afﬁche et traite un formulaire d’ajout"},
      {"type":"p","text":"d’article verra ses requêtes d’accès en GET  et POST"},
      {"type":"p","text":"(récupération et afﬁchage du formulaire + soumission du"},
      {"type":"p","text":"formulaire)."},
      {"type":"p","text":"Une route qui afﬁche et traite un formulaire d’édition"},
      {"type":"p","text":"d’article verra ses requêtes d’accès en GET  et POST"},
      {"type":"p","text":"(récupération et afﬁchage du formulaire + soumission du"},
      {"type":"p","text":"formulaire)."},
      {"type":"p","text":"Une déclenchée pour supprimer un article verra ses"},
      {"type":"image","src":"images/laconsole/symfony-p157.jpg","alt":"Page originale de Symfony.pdf - page 157"},
      {"type":"h","text":"Page 158"},
      {"type":"p","text":"requêtes d’accès en POST  (suppression des données sur le"},
      {"type":"p","text":"serveur)."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/blog', name: 'article_list', metho"},
      {"type":"code","filename":"page-158-exemple-1","language":"php","code":"public function listArticles(): Response {"},
      {"type":"code","filename":"page-158-exemple-2","language":"php","code":"#[Route('/blog/{slug}', name: 'article_show"},
      {"type":"code","filename":"page-158-exemple-3","language":"php","code":"public function showArticle(string $slug): R"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name: 'ad"},
      {"type":"code","filename":"page-158-exemple-4","language":"php","code":"public function addArticle(): Response { .."},
      {"type":"code","filename":"page-158-exemple-5","language":"php","code":"#[Route('/admin/articles/{id}/modifier', nam"},
      {"type":"code","filename":"page-158-exemple-6","language":"php","code":"public function editArticle(int $id): Respon"},
      {"type":"code","filename":"page-158-exemple-7","language":"php","code":"#[Route('/admin/articles/{id}/supprimer', na"},
      {"type":"code","filename":"page-158-exemple-8","language":"php","code":"public function deleteArticle(int $id): Resp"},
      {"type":"p","text":"Si l’argument methods  n’est pas renseigné en"},
      {"type":"p","text":"$"},
      {"type":"p","text":"argument, une route répondra à tous types d’appel"},
      {"type":"p","text":"GET , POST , etc."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-158-exemple-9","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"image","src":"images/laconsole/symfony-p158.jpg","alt":"Page originale de Symfony.pdf - page 158"},
      {"type":"h","text":"Page 159"},
      {"type":"h","text":"Préﬁxe de routes"},
      {"type":"p","text":"Par convention, on crée un contrôleur par grande partie de notre"},
      {"type":"p","text":"site."},
      {"type":"p","text":"Je pourrais donc très bien choisir de rassembler :"},
      {"type":"p","text":"Toute la gestion de mes articles dans un unique contrôleur"},
      {"type":"p","text":"ArticleController"},
      {"type":"p","text":"La partie administration de mon blog (création,"},
      {"type":"p","text":"modiﬁcation et suppression d’articles) dans un contrôleur"},
      {"type":"p","text":"dédié AdminController  et la partie publique de mon site"},
      {"type":"p","text":"(consultation des articles) dans un contrôleur dédié"},
      {"type":"p","text":"PublicController ."},
      {"type":"p","text":"Si je choisis de préﬁxer toutes les URL de mes routes"},
      {"type":"p","text":"d’administration par /admin , je vais donc devoir le faire dans"},
      {"type":"p","text":"toutes mes routes individuellement…"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name: 'ad"},
      {"type":"code","filename":"page-159-exemple-1","language":"php","code":"public function addArticle(): Response { .."},
      {"type":"code","filename":"page-159-exemple-2","language":"php","code":"#[Route('/admin/articles/{id}/modifier', nam"},
      {"type":"code","filename":"page-159-exemple-3","language":"php","code":"public function editArticle(int $id): Respon"},
      {"type":"code","filename":"page-159-exemple-4","language":"php","code":"#[Route('/admin/articles/{id}/supprimer', na"},
      {"type":"p","text":"public function deleteArticle(int $id): Resp\nFormations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Cela s’avère laborieux et comme toute tâche répetitive,"},
      {"type":"p","text":"$"},
      {"type":"p","text":"un développeur doit s’efforcer de la factoriser."},
      {"type":"p","text":"Qu’est-ce qu’une route ?"},
      {"type":"p","text":"Où écrire ses routes ?"},
      {"type":"p","text":"A\nt ti"},
      {"type":"image","src":"images/laconsole/symfony-p159.jpg","alt":"Page originale de Symfony.pdf - page 159"},
      {"type":"h","text":"Page 160"},
      {"type":"p","text":"Annotation"},
      {"type":"p","text":"Il est alors possible de déclarer ce préﬁxe de route à l’ensemble"},
      {"type":"p","text":"Attribut PHP"},
      {"type":"p","text":"des méthodes d’un contrôleur en ajoutant un attribut PHP"},
      {"type":"p","text":"Routes statiques"},
      {"type":"p","text":"Route  à la classe entière."},
      {"type":"p","text":"Routes dynamiques"},
      {"type":"p","text":"Paramètres de routes"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"Syntaxe"},
      {"type":"p","text":"Paramètres optionnels"},
      {"type":"p","text":"#[Route('/admin/articles')]"},
      {"type":"p","text":"Contraintes"},
      {"type":"code","filename":"page-160-exemple-1","language":"php","code":"class AdminController {"},
      {"type":"p","text":"Méthodes HTTP"},
      {"type":"p","text":"// /admin automatiquement ajouté au débu"},
      {"type":"p","text":"Préﬁxe de routes"},
      {"type":"code","filename":"page-160-exemple-2","language":"php","code":"}"},
      {"type":"p","text":"Ordre des routes"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-160-exemple-3","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Ordre des routes"},
      {"type":"p","text":"Imaginons avoir deux routes (une statique et une dynamique)"},
      {"type":"p","text":"avec la même architecture :"},
      {"type":"p","text":"/produits/nouveau"},
      {"type":"code","filename":"page-160-exemple-4","language":"php","code":"/produits/{slug}"},
      {"type":"p","text":"On doit alors toujours, dans notre ﬁchier de routage, déclarer en"},
      {"type":"p","text":"dernier la route dynamique. Dans le cas inverse, la route"},
      {"type":"image","src":"images/laconsole/symfony-p160.jpg","alt":"Page originale de Symfony.pdf - page 160"},
      {"type":"h","text":"Page 161"},
      {"type":"p","text":"dynamique bypasserait toujours la route statique, en supposant"},
      {"type":"p","text":"que nouveau  soit un paramètre de route pour le slug."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-161-exemple-1","language":"php","code":"#[Route('/produits/{slug}', name: 'product_s"},
      {"type":"code","filename":"page-161-exemple-2","language":"php","code":"public function showProduct(string $slug): R"},
      {"type":"p","text":"#[Route('/produits/nouveau', name: 'product_"},
      {"type":"code","filename":"page-161-exemple-3","language":"php","code":"public function addProduct(): Response { .."},
      {"type":"p","text":"Si je souhaite accéder à l’URL"},
      {"type":"p","text":"monsite.com/produits/nouveau  pour accéder au formulaire"},
      {"type":"p","text":"d’ajout de produit, cela matchera avec la première route car"},
      {"type":"code","filename":"page-161-exemple-4","language":"php","code":"Symfony va penser que « nouveau » est le slug d’un produit…"},
      {"type":"p","text":"On pourrait aussi empêcher qu’une URL matche avec 2"},
      {"type":"p","text":"$"},
      {"type":"p","text":"routes en déﬁnissant un argument requirements ."},
      {"type":"p","text":"Notez toutefois que le scénario idéal consiste à éviter le"},
      {"type":"p","text":"scénario de routes à l’architecture identique."},
      {"type":"p","text":"Précédent :\n2.\nArchitecture\nd'un Projet"},
      {"type":"p","text":"Suivant :\n4. Maîtriser\nles\nContrôleurs"},
      {"type":"p","text":"〈"},
      {"type":"p","text":"〉"},
      {"type":"image","src":"images/laconsole/symfony-p161.jpg","alt":"Page originale de Symfony.pdf - page 161"},
      {"type":"h","text":"Page 162"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"+"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à"},
      {"type":"p","text":"@"},
      {"type":"p","text":"remodeler le monde avec des LEGO.\nPlus tard, je découvre le dev, des LEGO"},
      {"type":"p","text":"où les briques sont remplacées par des\nlignes de code. J'en fais mon métier"},
      {"type":"p","text":""},
      {"type":"p","text":"puis je décide de transmettre cette\npassion en école de dev et sur\nlaConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au\ndéveloppement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de\nconﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/symfony-p162.jpg","alt":"Page originale de Symfony.pdf - page 162"},
      {"type":"h","text":"Page 163"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-163-exemple-1","language":"php","code":"Symfony 6 › Maîtriser les Contrôleurs"},
      {"type":"h","text":""},
      {"type":"code","filename":"page-163-exemple-2","language":"php","code":"En réceptionnant une requête HTTP, les contrôleurs de Symfony sont chargés de coordonner la réponse"},
      {"type":"p","text":"HTTP adaptée."},
      {"type":"p","text":"MAJ en nov. 2024\n■■■Intermédiaire\n13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-163-exemple-3","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 4. MAÎTRISER LES CONTRÔLEURS"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Rôle d’un contrôleur"},
      {"type":"code","filename":"page-163-exemple-4","language":"php","code":"Symfony est basé sur le protocole HTTP, développé pour le World Wide Web."},
      {"type":"p","text":"L’acronyme HTTP signiﬁe HyperText Transfer Protocol."},
      {"type":"p","text":"Ce protocole déﬁnit la communication entre un client (navigateur) et un serveur."},
      {"type":"p","text":"1. L’ordinateur de l’internaute utilise le navigateur pour envoyer une requête HTTP à"},
      {"type":"p","text":"un serveur web."},
      {"type":"p","text":"2. Le serveur génère puis retourne une réponse HTTP au client."},
      {"type":"code","filename":"page-163-exemple-5","language":"php","code":"Dans Symfony, c’est le contrôleur, situé sur le serveur, qui oeuvre à la création de cette"},
      {"type":"p","text":"réponse."},
      {"type":"p","text":"Le contrôleur est le chef d’orchestre qui implémente la logique métier de notre"},
      {"type":"p","text":"application via les modèles et vues (cela va encore plus loin avec la notion de services)."},
      {"type":"image","src":"images/laconsole/symfony-p163.jpg","alt":"Page originale de Symfony.pdf - page 163"},
      {"type":"h","text":"Page 164"},
      {"type":"p","text":"Son rôle est simple : il reçoit une requête de la part du routeur, puis coordonne la"},
      {"type":"p","text":"construction d’une réponse HTTP adaptée."},
      {"type":"p","text":"Si par réponse on pense la plupart du temps à une page .html , ce n’est pas"},
      {"type":"p","text":"systématique. Cela peut aussi être un ﬁchier .json  (API), un ﬁchier .xml , un"},
      {"type":"p","text":"téléchargement de ﬁchier, une redirection, une page 404 , etc."},
      {"type":"p","text":"Le contrôleur ne travaille pas à construire cette réponse, il coordonne sa"},
      {"type":"p","text":"$"},
      {"type":"p","text":"construction."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-164-exemple-1","language":"php","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Squelette d’un contrôleur"},
      {"type":"code","filename":"page-164-exemple-2","language":"php","code":"Voici la structure élémentaire d’un contrôleur dans Symfony :"},
      {"type":"image","src":"images/laconsole/symfony-p164.jpg","alt":"Page originale de Symfony.pdf - page 164"},
      {"type":"h","text":"Page 165"},
      {"type":"p","text":"DemoController.php\ncopier"},
      {"type":"code","filename":"page-165-exemple-1","language":"php","code":"namespace App\\Controller;"},
      {"type":"code","filename":"page-165-exemple-2","language":"php","code":"use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractControl"},
      {"type":"code","filename":"page-165-exemple-3","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Response;"},
      {"type":"code","filename":"page-165-exemple-4","language":"php","code":"use Symfony\\Component\\Routing\\Annotation\\Route;"},
      {"type":"code","filename":"page-165-exemple-5","language":"php","code":"class DemoController extends AbstractController {"},
      {"type":"p","text":"#[Route('/demo', name: 'app_demo')]"},
      {"type":"code","filename":"page-165-exemple-6","language":"php","code":"public function index(): Response {"},
      {"type":"code","filename":"page-165-exemple-7","language":"php","code":"return $this->render('demo/index.html.twig', ["},
      {"type":"code","filename":"page-165-exemple-8","language":"php","code":"'controller_name' => 'DemoController',"},
      {"type":"code","filename":"page-165-exemple-9","language":"php","code":"]);"},
      {"type":"code","filename":"page-165-exemple-10","language":"php","code":"}"},
      {"type":"code","filename":"page-165-exemple-11","language":"php","code":"}"},
      {"type":"h","text":"Namespace"},
      {"type":"code","filename":"page-165-exemple-12","language":"php","code":"namespace App\\Controller;"},
      {"type":"p","text":"Un framework contient beaucoup de bibliothèques !"},
      {"type":"p","text":"Une bibliothèque est une sorte de boîte noire : on ne sait pas ce qu’elle contient, mais"},
      {"type":"p","text":"on sait ce qu’elle fait. Il est alors possible d’avoir plusieurs ﬁchiers, plusieurs classes"},
      {"type":"p","text":"qui ont le même nom."},
      {"type":"p","text":"Il n’est pas impossible que vous nommiez votre classe de contrôleur de la même"},
      {"type":"p","text":"manière qu’une classe qui existe déjà dans une de vos bibliothèques. Par exemple"},
      {"type":"p","text":"UserController , MainController , AdminController …"},
      {"type":"code","filename":"page-165-exemple-13","language":"php","code":"Le rôle du namespace est de dire à Symfony : « cette classe appartient à cette famille, à"},
      {"type":"p","text":"ce répertoire, à cet espace de nom ». Un namespace permet donc d’identiﬁer un ﬁchier"},
      {"type":"p","text":"(ici notre contrôleur) de manière précise. Il est déclaré avec le mot-clé namespace ."},
      {"type":"code","filename":"page-165-exemple-14","language":"php","code":"Import de classe"},
      {"type":"image","src":"images/laconsole/symfony-p165.jpg","alt":"Page originale de Symfony.pdf - page 165"},
      {"type":"h","text":"Page 166"},
      {"type":"code","filename":"page-166-exemple-1","language":"php","code":"use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractControl"},
      {"type":"code","filename":"page-166-exemple-2","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Response;"},
      {"type":"code","filename":"page-166-exemple-3","language":"php","code":"use Symfony\\Component\\Routing\\Annotation\\Route;"},
      {"type":"p","text":"Pour exploiter des ressources qui se trouvent dans des ﬁchiers de code distincts, il faut"},
      {"type":"p","text":"les mettre en relation. C’est le principe de l’inclusion de ﬁchiers (cf: require  et"},
      {"type":"p","text":"include )."},
      {"type":"p","text":"C’est le rôle de ce use , qui va spéciﬁer que l’on exploite une classe provenant d’un"},
      {"type":"p","text":"espace de nom particulier."},
      {"type":"p","text":"Vous voyez que notre contrôleur basique importe les classes AbstractController ,"},
      {"type":"code","filename":"page-166-exemple-4","language":"php","code":"Response  et Route , qui proviennent de la bibliothèque du Framework Symfony."},
      {"type":"p","text":"AbstractController  est une classe dont hérite notre contrôleur."},
      {"type":"p","text":"Response  est une classe facilitant la création d’une réponse HTTP ."},
      {"type":"p","text":"Route  nous permet de déclarer notre système de routage dans notre contrôleur"},
      {"type":"p","text":"via des annotations / attributs PHP."},
      {"type":"h","text":"Classe du contrôleur"},
      {"type":"code","filename":"page-166-exemple-5","language":"php","code":"class DemoController extends AbstractController { ... }"},
      {"type":"code","filename":"page-166-exemple-6","language":"php","code":"La classe du contrôleurs est déclarée avec le mot-clé class ."},
      {"type":"p","text":"Elle étend, hérite ( extends ) de AbstractController , ce qui lui confère tout un tas"},
      {"type":"p","text":"de propriétés et méthodes extrêmement utiles. Cette classe paraît vide mais est en"},
      {"type":"p","text":"réalité déjà très riche."},
      {"type":"p","text":"Au sein de nos contrôleurs, on fera appel à cette classe parente dans de nombreuses"},
      {"type":"code","filename":"page-166-exemple-7","language":"php","code":"situations avec $this ."},
      {"type":"h","text":"Attributs PHP"},
      {"type":"p","text":"#[Route('/demo', name: 'app_demo')]"},
      {"type":"p","text":"Les attributs PHP sont des commentaires interprétés (ou métadonnées), qui nous"},
      {"type":"p","text":"permettent de spéciﬁer le comportement d’un élément (ici classe ou méthode). Nous"},
      {"type":"image","src":"images/laconsole/symfony-p166.jpg","alt":"Page originale de Symfony.pdf - page 166"},
      {"type":"h","text":"Page 167"},
      {"type":"p","text":"les avons utilisés pour créer notre système de routage, mais leurs pouvoirs ne s’arrêtent"},
      {"type":"p","text":"pas là !"},
      {"type":"h","text":"Méthodes"},
      {"type":"code","filename":"page-167-exemple-1","language":"php","code":"public function index(): Response {"},
      {"type":"code","filename":"page-167-exemple-2","language":"php","code":"return $this->render('demo/index.html.twig', ["},
      {"type":"code","filename":"page-167-exemple-3","language":"php","code":"'controller_name' => 'DemoController',"},
      {"type":"code","filename":"page-167-exemple-4","language":"php","code":"]);"},
      {"type":"code","filename":"page-167-exemple-5","language":"php","code":"}"},
      {"type":"p","text":"Une méthode est une fonction qui appartient à une classe."},
      {"type":"p","text":"Dans un contrôleur, elles sont la plupart du temps rattachées à une route qui va"},
      {"type":"p","text":"permettre de les déclencher, de les appeler. Ce sont les méthodes qui vont déﬁnir la"},
      {"type":"p","text":"logique d’une fonctionnalité, et ce sont aussi elles qui vont retourner une réponse"},
      {"type":"p","text":"HTTP."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-167-exemple-6","language":"php","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Construire ses contrôleurs"},
      {"type":"p","text":"Un contrôleur :"},
      {"type":"p","text":"1. Reçoit une requête HTTP"},
      {"type":"p","text":"2. Effectue éventuellement des opérations intermédiaires"},
      {"type":"p","text":"3. Renvoie une réponse HTTP"},
      {"type":"h","text":"Requêtes"},
      {"type":"image","src":"images/laconsole/symfony-p167.jpg","alt":"Page originale de Symfony.pdf - page 167"},
      {"type":"h","text":"Page 168"},
      {"type":"h","text":"Requêtes simples"},
      {"type":"p","text":"Nos requêtes HTTP contiennent des informations à destination de notre contrôleur."},
      {"type":"p","text":"Par « requêtes simples », on entend des requêtes qui ne récupèrent pas de paramètres,"},
      {"type":"p","text":"ou qui récupèrent des paramètres de routes."},
      {"type":"p","text":"Sans paramètres de route"},
      {"type":"p","text":"C’est le cas des URLs statiques."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/mentions-legales', name: 'cgu')]"},
      {"type":"code","filename":"page-168-exemple-1","language":"php","code":"public function cgu(): Response {"},
      {"type":"p","text":"// On se contente de renvoyer une page HTML statique"},
      {"type":"code","filename":"page-168-exemple-2","language":"php","code":"}"},
      {"type":"p","text":"monsite.fr/mentions-legales  : cette page sera identique pour tous mes visiteurs,"},
      {"type":"p","text":"elle n’a pas de paramètres de route."},
      {"type":"code","filename":"page-168-exemple-3","language":"php","code":"Une requête de ce type ne nécessite pas à notre contrôleur de récupérer dans notre"},
      {"type":"p","text":"requête des informations particulières."},
      {"type":"p","text":"Avec paramètres de route"},
      {"type":"p","text":"C’est le cas des URLs dynamiques."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-168-exemple-4","language":"php","code":"#[Route('/blog/{slug}', name: 'article_show')]"},
      {"type":"code","filename":"page-168-exemple-5","language":"php","code":"public function showArticle(string $slug): Response { ... }"},
      {"type":"code","filename":"page-168-exemple-6","language":"php","code":"L’argument {slug}  de la requête est récupéré par la route, qui le transmettra à la"},
      {"type":"code","filename":"page-168-exemple-7","language":"php","code":"méthode de contrôleur via son paramètre $slug ."},
      {"type":"p","text":"Mais si nous souhaitons désormais récupérer des paramètres d’un formulaire soumis en"},
      {"type":"p","text":"POST , ou encore des paramètres d’URL qui ne font pas partie de la route comme les"},
      {"type":"code","filename":"page-168-exemple-8","language":"php","code":"fameux GET  ( monsite.com/blog/tous?tag=symfony ), nous aurons besoin de l’objet"},
      {"type":"p","text":"Request ."},
      {"type":"h","text":"Requêtes complexes avec l’objet Request"},
      {"type":"image","src":"images/laconsole/symfony-p168.jpg","alt":"Page originale de Symfony.pdf - page 168"},
      {"type":"h","text":"Page 169"},
      {"type":"p","text":"Charger l’objet Request"},
      {"type":"p","text":"Importation de la classe Request"},
      {"type":"p","text":"On explicite avec use dans quel namespace se trouve la classe Request ."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Importation de la classe Request"},
      {"type":"code","filename":"page-169-exemple-1","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Request;"},
      {"type":"code","filename":"page-169-exemple-2","language":"php","code":"Instanciation de la classe Request  en typant la variable $request"},
      {"type":"p","text":"DemoController.php\ncopier"},
      {"type":"code","filename":"page-169-exemple-3","language":"php","code":"namespace App\\Controller;"},
      {"type":"code","filename":"page-169-exemple-4","language":"php","code":"use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractContr"},
      {"type":"code","filename":"page-169-exemple-5","language":"php","code":"use Symfony\\Component\\Routing\\Annotation\\Route;"},
      {"type":"code","filename":"page-169-exemple-6","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Request;"},
      {"type":"code","filename":"page-169-exemple-7","language":"php","code":"class DemoController extends AbstractController {"},
      {"type":"p","text":"#[Route('/', name: 'home')]"},
      {"type":"code","filename":"page-169-exemple-8","language":"php","code":"public function home(Request $request): Response {"},
      {"type":"code","filename":"page-169-exemple-9","language":"php","code":"// Je peux utiliser ici l'objet $request"},
      {"type":"code","filename":"page-169-exemple-10","language":"php","code":"}"},
      {"type":"code","filename":"page-169-exemple-11","language":"php","code":"}"},
      {"type":"code","filename":"page-169-exemple-12","language":"php","code":"Systématiquement, le Kernel de Symfony vériﬁe si l’un des paramètres est typé"},
      {"type":"p","text":"avec la classe Request . Si c’est le cas, il va transmettre à ce paramètre toutes les"},
      {"type":"p","text":"informations contenues dans la requête : c’est le principe de l’autowiring."},
      {"type":"p","text":"Récupérer des paramètres GET"},
      {"type":"p","text":"Paramètre de route ≠ paramètre GET . Un paramètre de route est déﬁni lors de"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"la création de notre route (généralement via des annotations ou attributs"},
      {"type":"p","text":"PHP)."},
      {"type":"p","text":"Un moteur de recherche pourrait par exemple exploiter des paramètres GET  pour"},
      {"type":"p","text":"rechercher des contenus par tag : monsite.com/blog?tag=dev"},
      {"type":"image","src":"images/laconsole/symfony-p169.jpg","alt":"Page originale de Symfony.pdf - page 169"},
      {"type":"h","text":"Page 170"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/blog', name: 'article_list')]"},
      {"type":"code","filename":"page-170-exemple-1","language":"php","code":"public function listArticles(Request $request): Response {"},
      {"type":"p","text":"// On récupère les paramètres GET"},
      {"type":"code","filename":"page-170-exemple-2","language":"php","code":"$tag = $request->query->get('tag');"},
      {"type":"p","text":"// On va ensuite pouvoir aller chercher en base de donnée"},
      {"type":"code","filename":"page-170-exemple-3","language":"php","code":"}"},
      {"type":"code","filename":"page-170-exemple-4","language":"php","code":"$request->query->get('tag')  est l’alternative Symfony de $_GET['tag'] , en PHP"},
      {"type":"p","text":"traditionnel."},
      {"type":"p","text":"Récupérer des paramètres POST"},
      {"type":"p","text":"Sur un site dynamique, nous avons souvent besoin d’insérer du contenu en base de"},
      {"type":"p","text":"données. Et qui dit enregistrement, dit formulaire… Nous allons donc difﬁcilement"},
      {"type":"p","text":"pouvoir nous passer de la méthode POST  pour récupérer les informations soumises."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name: 'admin_article_add')"},
      {"type":"code","filename":"page-170-exemple-5","language":"php","code":"public function addArticle(Request $request): Response {"},
      {"type":"p","text":"// On récupère les paramètres POST"},
      {"type":"code","filename":"page-170-exemple-6","language":"php","code":"$title = $request->request->get('title');"},
      {"type":"code","filename":"page-170-exemple-7","language":"php","code":"$content = $request->request->get('content');"},
      {"type":"p","text":"// On va ensuite pouvoir enregistrer notre article en bas"},
      {"type":"code","filename":"page-170-exemple-8","language":"php","code":"}"},
      {"type":"code","filename":"page-170-exemple-9","language":"php","code":"$request->request->get('title')  et $request->request->get('content')"},
      {"type":"code","filename":"page-170-exemple-10","language":"php","code":"sont les alternatives Symfony de $_POST['title']  et $_POST['content'] , en PHP"},
      {"type":"p","text":"traditionnel."},
      {"type":"p","text":"Les autres paramètres (cookies, server…)"},
      {"type":"code","filename":"page-170-exemple-11","language":"php","code":"Il est aussi possible d’accéder aux cookies via $request->cookies , aux variables de"},
      {"type":"code","filename":"page-170-exemple-12","language":"php","code":"serveurs via $request->server , etc."},
      {"type":"p","text":"Connaître la méthode HTTP"},
      {"type":"p","text":"Request  ne permet pas uniquement de récupérer les paramètres qui transitent via nos"},
      {"type":"p","text":"requêtes HTTP. On l’utilise également pour obtenir d’autres types d’informations"},
      {"type":"p","text":"comme la méthode HTTP ( POST  ou GET ) de la requête en cours."},
      {"type":"image","src":"images/laconsole/symfony-p170.jpg","alt":"Page originale de Symfony.pdf - page 170"},
      {"type":"h","text":"Page 171"},
      {"type":"p","text":"Certaines routes vont ainsi pouvoir effectuer des traitements différents en fonction de la"},
      {"type":"p","text":"méthode HTTP qui les appelle."},
      {"type":"p","text":"C’est le cas de la route qui permet d’ajouter un article :"},
      {"type":"p","text":"Si on y accède avec une requête GET , c’est que l’on souhaite récupérer son"},
      {"type":"p","text":"contenu et donc afﬁcher le formulaire de création d’article."},
      {"type":"p","text":"Si on y accède avec une requête POST , c’est que l’on souhaite envoyer du contenu"},
      {"type":"p","text":"au serveur et donc enregistrer le nouvel article."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name: 'admin_article_add')"},
      {"type":"code","filename":"page-171-exemple-1","language":"php","code":"public function addArticle(Request $request): Response {"},
      {"type":"code","filename":"page-171-exemple-2","language":"php","code":"if ($request->isMethod('POST')) {"},
      {"type":"p","text":"// Le formulaire est soumis en POST, on enregistre l"},
      {"type":"code","filename":"page-171-exemple-3","language":"php","code":"} else {"},
      {"type":"p","text":"// On affiche la page avec le formulaire de création"},
      {"type":"code","filename":"page-171-exemple-4","language":"php","code":"}"},
      {"type":"code","filename":"page-171-exemple-5","language":"php","code":"}"},
      {"type":"code","filename":"page-171-exemple-6","language":"php","code":"$request->isMethod()  est une méthode de l’objet Request  qui renvoie un booléen :"},
      {"type":"p","text":"true  : lorsque la méthode renseignée en paramètre correspond à la méthode"},
      {"type":"p","text":"HTTP de la requête."},
      {"type":"p","text":"false  : lorsque la méthode renseignée en paramètre ne correspond pas."},
      {"type":"code","filename":"page-171-exemple-7","language":"php","code":"$\nIl existe en réalité de nombreuses autres méthodes utiles à l’objet $request ."},
      {"type":"h","text":"Opérations intermédiaires"},
      {"type":"p","text":"Le rôle d’un contrôleur est certes de récupérer une requête aﬁn de retourner une"},
      {"type":"p","text":"réponse, mais rien n’interdit d’effectuer des traitements intermédiaires, bien au"},
      {"type":"p","text":"contraire !"},
      {"type":"p","text":"Nous aurons souvent besoin d’effectuer des opérations supplémentaires dans nos"},
      {"type":"p","text":"contrôleurs, sinon nos réponses HTTP seront peut intéressantes. Il serait par exemple"},
      {"type":"p","text":"utile de :"},
      {"type":"p","text":"Récupérer des articles en base de données"},
      {"type":"p","text":"Envoyer un mail"},
      {"type":"image","src":"images/laconsole/symfony-p171.jpg","alt":"Page originale de Symfony.pdf - page 171"},
      {"type":"h","text":"Page 172"},
      {"type":"p","text":"Enregistrer un article"},
      {"type":"p","text":"Déﬁnir des variables de session"},
      {"type":"p","text":"Poser un cookie"},
      {"type":"p","text":"…"},
      {"type":"p","text":"Nous détaillerons ces opérations au chapitre suivant, mais retenez que nous les"},
      {"type":"p","text":"mettrons en place dans nos méthodes, après avoir reçu une requête, et avant de"},
      {"type":"p","text":"retourner une réponse."},
      {"type":"p","text":"Ces opérations intermédiaires représentent le cœur de l’apprentissage de"},
      {"type":"p","text":"$"},
      {"type":"code","filename":"page-172-exemple-1","language":"php","code":"Symfony."},
      {"type":"h","text":"Réponses"},
      {"type":"p","text":"Le rôle d’un contrôleur est de retourner une réponse. Il s’agit généralement une page"},
      {"type":"p","text":"web, mais parfois aussi un ﬁchier JSON (API), XML, un téléchargement de ﬁchier, une"},
      {"type":"p","text":"redirection, une page 404, etc."},
      {"type":"code","filename":"page-172-exemple-2","language":"php","code":"Dans Symfony, retourner une réponse signiﬁe tout simplement instancier la classe"},
      {"type":"p","text":"Response ."},
      {"type":"code","filename":"page-172-exemple-3","language":"php","code":"Ici, on crée un objet $response  (son nom par convention, comme pour $request ), on"},
      {"type":"p","text":"déﬁnit son contenu, puis on le retourne."},
      {"type":"p","text":"Charger l’objet Response"},
      {"type":"p","text":"Importation de la classe Response"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Importation de la classe Response"},
      {"type":"code","filename":"page-172-exemple-4","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Response;"},
      {"type":"p","text":"On remarque au passage qu’elle a le même namespace que la classe"},
      {"type":"code","filename":"page-172-exemple-5","language":"php","code":"Request, à savoir Symfony\\Component\\HttpFoundation ."},
      {"type":"p","text":"Bon, il y a"},
      {"type":"p","text":"beaucoup de magie derrière tout ça mais en réalité c’est extrêmement"},
      {"type":"p","text":"$"},
      {"type":"p","text":"concret. Vous pouvez jeter un œil à nos classes, elles existent bien dans les"},
      {"type":"code","filename":"page-172-exemple-6","language":"php","code":"ﬁchiers de conﬁguration de Symfony. Rendez-vous dans"},
      {"type":"code","filename":"page-172-exemple-7","language":"php","code":"vendor/symfony/http-foundation  et vous allez voir ces fameuses"},
      {"type":"p","text":"classes dans des ﬁchiers"},
      {"type":"p","text":"Request.php  et"},
      {"type":"p","text":"Response.php ."},
      {"type":"p","text":"Instanciation de la classe Response"},
      {"type":"image","src":"images/laconsole/symfony-p172.jpg","alt":"Page originale de Symfony.pdf - page 172"},
      {"type":"h","text":"Page 173"},
      {"type":"p","text":"DemoController.php\ncopier"},
      {"type":"code","filename":"page-173-exemple-1","language":"php","code":"namespace App\\Controller;"},
      {"type":"code","filename":"page-173-exemple-2","language":"php","code":"use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractContr"},
      {"type":"code","filename":"page-173-exemple-3","language":"php","code":"use Symfony\\Component\\Routing\\Annotation\\Route;"},
      {"type":"code","filename":"page-173-exemple-4","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Request;"},
      {"type":"code","filename":"page-173-exemple-5","language":"php","code":"use Symfony\\Component\\HttpFoundation\\Response;"},
      {"type":"code","filename":"page-173-exemple-6","language":"php","code":"class DemoController extends AbstractController {"},
      {"type":"p","text":"#[Route('/', name: 'home')]"},
      {"type":"code","filename":"page-173-exemple-7","language":"php","code":"public function home(): Response {"},
      {"type":"p","text":"// On instancie notre classe Response"},
      {"type":"code","filename":"page-173-exemple-8","language":"php","code":"$response = new Response();"},
      {"type":"p","text":"// On lui ajoute un contenu"},
      {"type":"code","filename":"page-173-exemple-9","language":"php","code":"$response->setContent('<html><body><h1>Accueil</h1>"},
      {"type":"p","text":"// On lui ajoute un code de statut (200 = OK, 404 ="},
      {"type":"code","filename":"page-173-exemple-10","language":"php","code":"$response->setStatusCode(Response::HTTP_OK);"},
      {"type":"p","text":"// On lui ajoute une entête"},
      {"type":"code","filename":"page-173-exemple-11","language":"php","code":"$response->headers->set('Content-Type','text/html')"},
      {"type":"p","text":"// On retourne la réponse"},
      {"type":"code","filename":"page-173-exemple-12","language":"php","code":"return $response;"},
      {"type":"code","filename":"page-173-exemple-13","language":"php","code":"}"},
      {"type":"code","filename":"page-173-exemple-14","language":"php","code":"}"},
      {"type":"p","text":"Ça, c’était pour la beauté du geste. Dans les faits… ce code est extrêmement lourd à"},
      {"type":"p","text":"écrire. Notre contrôleur héritant de AbstractController , il va pouvoir faire appel"},
      {"type":"p","text":"aux méthodes de cette super-classe."},
      {"type":"p","text":"Détaillons les méthodes correspondantes aux réponse HTTP les plus fréquentes lors"},
      {"type":"p","text":"du développement d’un site web : le retour de pages et les redirections."},
      {"type":"h","text":"Retourner une vue"},
      {"type":"p","text":"Non, nous n’allons pas utiliser la méthode setContent()  pour retourner tout le code"},
      {"type":"p","text":"HTML de la page."},
      {"type":"code","filename":"page-173-exemple-15","language":"php","code":"La méthode héritée $this->render()  s’occupe toute seule de créer la réponse, lui"},
      {"type":"p","text":"passer le contenu du template, et la retourner. Quand on retourne une vue on a"},
      {"type":"p","text":"également la possibilité de lui faire passer des variables en paramètre."},
      {"type":"image","src":"images/laconsole/symfony-p173.jpg","alt":"Page originale de Symfony.pdf - page 173"},
      {"type":"h","text":"Page 174"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/', name: 'home')]"},
      {"type":"code","filename":"page-174-exemple-1","language":"php","code":"public function home(): Response {"},
      {"type":"p","text":"// On retourne un template sans paramètre"},
      {"type":"code","filename":"page-174-exemple-2","language":"php","code":"return $this->render('blog/home.html.twig');"},
      {"type":"code","filename":"page-174-exemple-3","language":"php","code":"}"},
      {"type":"code","filename":"page-174-exemple-4","language":"php","code":"#[Route('/blog/{slug}', name: 'article_show')]"},
      {"type":"code","filename":"page-174-exemple-5","language":"php","code":"public function showArticle(string $slug): Response {"},
      {"type":"p","text":"// À partir du slug passé en paramètre, je vais pouvoir a"},
      {"type":"p","text":"// ..."},
      {"type":"code","filename":"page-174-exemple-6","language":"php","code":"return $this->render('blog/article.html.twig', ['article"},
      {"type":"code","filename":"page-174-exemple-7","language":"php","code":"}"},
      {"type":"code","filename":"page-174-exemple-8","language":"php","code":"$this  est une pseudo-variable qui fait référence à l’objet en question."},
      {"type":"p","text":"La méthode render()  prend en paramètre :"},
      {"type":"p","text":"Le chemin vers le template (elle se place par défaut dans le dossier"},
      {"type":"p","text":"templates )"},
      {"type":"p","text":"Des variables à lui transmettre (s’il y en a)."},
      {"type":"p","text":"Finalement, l’objet Response  est utilisé en coulisses."},
      {"type":"p","text":".html.twig … Quelle est cette extension transgénique ?!"},
      {"type":"code","filename":"page-174-exemple-9","language":"php","code":"Twig est le moteur de templates pour le langage PHP, utilisé par défaut dans Symfony."},
      {"type":"p","text":"Il va nous permettre de dynamiser nos pages HTML statiques en bénéﬁciant de"},
      {"type":"p","text":"nombreuses fonctionnalités, que nous aurions normalement dû écrire en PHP (afﬁchage"},
      {"type":"p","text":"de variables, conditions, boucles, inclusions, etc.)."},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"h","text":"Faire une redirection"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Il peut aussi être très intéressant pour un contrôleur d’appeler une autre route lorsqu’il"},
      {"type":"p","text":"Rôle d’un contrôleur"},
      {"type":"p","text":"a ﬁni son traitement, au lieu de renvoyer une page web. Cela est par exemple utile"},
      {"type":"p","text":"Squelette d’un contrôleur"},
      {"type":"p","text":"après :"},
      {"type":"p","text":"Namespace"},
      {"type":"code","filename":"page-174-exemple-10","language":"php","code":"Import de classe"},
      {"type":"p","text":"L’ajout, la modiﬁcation ou la suppression de ressources"},
      {"type":"p","text":"Classe du contrôleur"},
      {"type":"p","text":"L’envoi de mails"},
      {"type":"p","text":"Attributs PHP"},
      {"type":"p","text":"La connexion (selon le rôle d’un utilisateur, il pourrait être redirigé vers des pages"},
      {"type":"p","text":"Méthodes"},
      {"type":"p","text":"variables)"},
      {"type":"p","text":"Construire ses contrôleurs"},
      {"type":"image","src":"images/laconsole/symfony-p174.jpg","alt":"Page originale de Symfony.pdf - page 174"},
      {"type":"h","text":"Page 175"},
      {"type":"p","text":"Requêtes"},
      {"type":"p","text":"La déconnexion"},
      {"type":"p","text":"Requêtes simples"},
      {"type":"p","text":"…"},
      {"type":"p","text":"Requêtes complexes avec\nl’objet Request"},
      {"type":"p","text":"On fait alors appel à la méthode redirectToRoute() ."},
      {"type":"p","text":"Opérations intermédiaires"},
      {"type":"p","text":"Réponses"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"Retourner une vue"},
      {"type":"p","text":"Faire une redirection"},
      {"type":"code","filename":"page-175-exemple-1","language":"php","code":"#[Route('admin/articles/{id}/supprimer', name: 'admin_article"},
      {"type":"p","text":"Autres types de retours"},
      {"type":"code","filename":"page-175-exemple-2","language":"php","code":"public function deleteArticle(int $id): Response {"},
      {"type":"code","filename":"page-175-exemple-3","language":"php","code":"// Ici, on imagine qu'on supprime l'article qui a l'id $i"},
      {"type":"code","filename":"page-175-exemple-4","language":"php","code":"return $this->redirectToRoute('article_list');"},
      {"type":"code","filename":"page-175-exemple-5","language":"php","code":"}"},
      {"type":"p","text":"La méthode redirectToRoute()  prend en paramètre :"},
      {"type":"p","text":"Le nom de la route"},
      {"type":"code","filename":"page-175-exemple-6","language":"php","code":"Des variables à lui transmettre (s’il y en a). $this-"},
      {"type":"code","filename":"page-175-exemple-7","language":"php","code":">redirectToRoute('nom_route', ['id' => 1])  appellerait une route avec un"},
      {"type":"code","filename":"page-175-exemple-8","language":"php","code":"paramètre de route {id}  en le remplaçant par 1."},
      {"type":"h","text":"Autres types de retours"},
      {"type":"p","text":"Il est également possible de retourner du JSON, du XML, etc."},
      {"type":"p","text":"Nous n’entrerons pas en détail là-dessus mais sachez que c’est évidemment possible."},
      {"type":"p","text":"Vous trouverez votre bonheur sur ce chapitre de la\n."},
      {"type":"code","filename":"page-175-exemple-9","language":"php","code":"doc Symfony"},
      {"type":"p","text":"Précédent :\n3. Les Bases du\nRoutage\n〈"},
      {"type":"p","text":"Suivant :\n5. Gérer ses\nTemplates avec Twig"},
      {"type":"p","text":"〉"},
      {"type":"p","text":"Thibaud d'Arros"},
      {"type":"p","text":"+"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"@"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des LEGO."},
      {"type":"p","text":"Plus tard, je découvre le dev, des LEGO où les briques sont\nremplacées par des lignes de code. J'en fais mon métier puis je décide"},
      {"type":"p","text":""},
      {"type":"p","text":"de transmettre cette passion en école de dev et sur laConsole."},
      {"type":"image","src":"images/laconsole/symfony-p175.jpg","alt":"Page originale de Symfony.pdf - page 175"},
      {"type":"h","text":"Page 176"},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement\nweb.\nM'abonner à la newsletter"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de\nconﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/symfony-p176.jpg","alt":"Page originale de Symfony.pdf - page 176"},
      {"type":"h","text":"Page 177"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-177-exemple-1","language":"php","code":"Symfony 6 › Manipuler ses"},
      {"type":"h","text":""},
      {"type":"h","text":"Entités (CRUD)"},
      {"type":"p","text":"Le gestionnaire d'entité (entity manager) et les repositories permettent"},
      {"type":"p","text":"d'interagir (écriture / lecture) avec les données d'une application."},
      {"type":"h","text":"MAJ en nov. 2024 ■■■Intermédiaire 13 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"code","filename":"page-177-exemple-2","language":"php","code":"FORMATIONS\n/\nINITIATION AU FRAMEWORK PHP SYMFONY 6\n/ 7. MANIPULER SES ENTITÉS (CRUD)"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Entity Manager"},
      {"type":"p","text":"L’Entity Manager ou « gestionnaire d’entité » est l’objet le"},
      {"type":"p","text":"plus important de Doctrine. Il synchronise les données"},
      {"type":"h","text":"stockées en base avec nos objets PHP. On l’exploite depuis"},
      {"type":"h","text":"les méthodes de nos contrôleurs."},
      {"type":"p","text":"C’est grâce à lui que nous allons pouvoir effectuer les"},
      {"type":"h","text":"opérations élémentaires d’un CRUD :"},
      {"type":"h","text":"Lecture"},
      {"type":"h","text":"Création"},
      {"type":"image","src":"images/laconsole/symfony-p177.jpg","alt":"Page originale de Symfony.pdf - page 177"},
      {"type":"h","text":"Page 178"},
      {"type":"h","text":"Modiﬁcation"},
      {"type":"h","text":"Suppression"},
      {"type":"p","text":"On peut appeler le gestionnaire d’entités en important la"},
      {"type":"p","text":"classe EntityManagerInterface  dans le contrôleur."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-178-exemple-1","language":"php","code":"use Doctrine\\ORM\\EntityManagerInterface;"},
      {"type":"code","filename":"page-178-exemple-2","language":"php","code":"Ensuite, typer un paramètre (souvent nommé $em  pour «"},
      {"type":"p","text":"Entity Manager ») d’une méthode de contrôleur avec la"},
      {"type":"p","text":"classe EntityManagerInterface  permet d’y injecter notre"},
      {"type":"p","text":"gestionnaire d’entité à l’intérieur."},
      {"type":"p","text":"On appelle ceci « autowiring »."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/', name: 'home')]"},
      {"type":"code","filename":"page-178-exemple-3","language":"php","code":"public function home(EntityManagerInterfa"},
      {"type":"code","filename":"page-178-exemple-4","language":"php","code":"// Je peux utiliser ici l'objet $em"},
      {"type":"code","filename":"page-178-exemple-5","language":"php","code":"}"},
      {"type":"code","filename":"page-178-exemple-6","language":"php","code":"En POO, une interface est une classe entièrement"},
      {"type":"p","text":"abstraite. Son rôle est de décrire un comportement"},
      {"type":"p","text":"$"},
      {"type":"p","text":"de notre objet. Concrètement, il s’agit d’un"},
      {"type":"p","text":"ensemble de méthodes accessibles publiquement."},
      {"type":"image","src":"images/laconsole/symfony-p178.jpg","alt":"Page originale de Symfony.pdf - page 178"},
      {"type":"h","text":"Page 179"},
      {"type":"code","filename":"page-179-exemple-1","language":"php","code":"Syntaxiquement proche du « type hint »,"},
      {"type":"h","text":"l’autowiring permet de faire appel à un service avec"},
      {"type":"p","text":"un minimum de conﬁguration en injectant une"},
      {"type":"p","text":"$"},
      {"type":"code","filename":"page-179-exemple-2","language":"php","code":"classe en paramètre d’une méthode. Le type du"},
      {"type":"p","text":"paramètre injecté correspond au nom de la classe"},
      {"type":"p","text":"que l’on souhaite utiliser."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-179-exemple-3","language":"php","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Implémenter un CRUD"},
      {"type":"h","text":"Récupération (READ)"},
      {"type":"h","text":"Repositories"},
      {"type":"p","text":"Souvenez vous, lorsque nous avions tapé la commande"},
      {"type":"code","filename":"page-179-exemple-4","language":"php","code":"symfony console make:entity  pour la première fois,"},
      {"type":"p","text":"cela avait généré deux ﬁchiers :"},
      {"type":"p","text":"L’entité"},
      {"type":"p","text":"Le repository associé"},
      {"type":"image","src":"images/laconsole/symfony-p179.jpg","alt":"Page originale de Symfony.pdf - page 179"},
      {"type":"h","text":"Page 180"},
      {"type":"p","text":"Ces repositories sont des classes Doctrine que l’on va"},
      {"type":"p","text":"utiliser pour lire nos données (sous forme d’objets et de"},
      {"type":"p","text":"collections). On les utilisera systématiquement pour aller"},
      {"type":"p","text":"chercher des informations en base de données."},
      {"type":"p","text":"Le repository associé à une entité Article  ressemblerait"},
      {"type":"p","text":"ainsi à cela :"},
      {"type":"p","text":"ArticleRepository.php"},
      {"type":"code","filename":"page-180-exemple-1","language":"php","code":"namespace App\\Repository;"},
      {"type":"code","filename":"page-180-exemple-2","language":"php","code":"use App\\Entity\\Article;"},
      {"type":"p","text":"use Doctrine\\Bundle\\DoctrineBundle\\Reposi"},
      {"type":"code","filename":"page-180-exemple-3","language":"php","code":"use Doctrine\\Persistence\\ManagerRegistry;"},
      {"type":"p","text":"/**"},
      {"type":"code","filename":"page-180-exemple-4","language":"php","code":"* @extends ServiceEntityRepository<Artic"},
      {"type":"p","text":"*"},
      {"type":"code","filename":"page-180-exemple-5","language":"php","code":"* @method Article|null find($id, $lockMo"},
      {"type":"code","filename":"page-180-exemple-6","language":"php","code":"* @method Article|null findOneBy(array $"},
      {"type":"code","filename":"page-180-exemple-7","language":"php","code":"* @method Article[]    findAll()"},
      {"type":"code","filename":"page-180-exemple-8","language":"php","code":"* @method Article[]    findBy(array $cri"},
      {"type":"p","text":"*/"},
      {"type":"code","filename":"page-180-exemple-9","language":"php","code":"class ArticleRepository extends ServiceEn"},
      {"type":"code","filename":"page-180-exemple-10","language":"php","code":"public function __construct(ManagerRe"},
      {"type":"code","filename":"page-180-exemple-11","language":"php","code":"parent::__construct($registry, Ar"},
      {"type":"code","filename":"page-180-exemple-12","language":"php","code":"}"},
      {"type":"p","text":"// Des exemples de methodes sur-mesur"},
      {"type":"code","filename":"page-180-exemple-13","language":"php","code":"}"},
      {"type":"image","src":"images/laconsole/symfony-p180.jpg","alt":"Page originale de Symfony.pdf - page 180"},
      {"type":"h","text":"Page 181"},
      {"type":"p","text":"C’est à travers un ensemble de méthodes prédéﬁnies que"},
      {"type":"p","text":"les repositories permettent de récupérer des données en"},
      {"type":"p","text":"base. Il sera également possible d’y intégrer ses propres"},
      {"type":"h","text":"méthodes personnalisées."},
      {"type":"p","text":"Dans nos méthodes de contrôleur, on peut appeler nos"},
      {"type":"p","text":"repositories via le gestionnaire d’entité, accessible via notre"},
      {"type":"code","filename":"page-181-exemple-1","language":"php","code":"objet $em ."},
      {"type":"p","text":"Sur ce dernier, on peut appeler la méthode"},
      {"type":"p","text":"getRepository()  en lui transmettant en argument l’entité"},
      {"type":"code","filename":"page-181-exemple-2","language":"php","code":"Article::class  pour laquelle nous aimerions obtenir le"},
      {"type":"p","text":"repository."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"#[Route('/', name: 'app_index')]"},
      {"type":"code","filename":"page-181-exemple-3","language":"php","code":"public function home(EntityManagerInterfa"},
      {"type":"code","filename":"page-181-exemple-4","language":"php","code":"$repository = $em->getRepository(Arti"},
      {"type":"code","filename":"page-181-exemple-5","language":"php","code":"}"},
      {"type":"code","filename":"page-181-exemple-6","language":"php","code":"⚠\nNe pas oublier le use App\\Entity\\Article; ."},
      {"type":"p","text":"Doctrine sait qu’il doit instancier le repository"},
      {"type":"p","text":"ArticleRepository , car cela est spéciﬁé dans l’entité"},
      {"type":"p","text":"avec l’attribut PHP #[ORM\\Entity(repositoryClass:"},
      {"type":"code","filename":"page-181-exemple-7","language":"php","code":"ArticleRepository::class)] ."},
      {"type":"code","filename":"page-181-exemple-8","language":"php","code":"Le sufﬁxe ::class  retourne le nom complet d’une"},
      {"type":"p","text":"$"},
      {"type":"p","text":"classe (incluant son namespace)."},
      {"type":"code","filename":"page-181-exemple-9","language":"php","code":"Avec la classe {entite}Repository"},
      {"type":"image","src":"images/laconsole/symfony-p181.jpg","alt":"Page originale de Symfony.pdf - page 181"},
      {"type":"h","text":"Page 182"},
      {"type":"h","text":"4 méthodes d’accès"},
      {"type":"p","text":"Par défaut, nos repositories posséderont tous 4 méthodes"},
      {"type":"p","text":"d’accès à nos données, nous permettant de couvrir la"},
      {"type":"p","text":"plupart de nos besoins."},
      {"type":"p","text":"Chacune de ces méthodes va permettre de requêter les"},
      {"type":"h","text":"données propres à une entité."},
      {"type":"p","text":"findAll()"},
      {"type":"p","text":"La méthode findAll()  permet de récupérer toutes les"},
      {"type":"p","text":"données en base de données. Le résultat sera livré sous"},
      {"type":"h","text":"forme de collection."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Récupération de tous les articles"},
      {"type":"code","filename":"page-182-exemple-1","language":"php","code":"$articles = $repository->findAll();"},
      {"type":"p","text":"findBy()"},
      {"type":"p","text":"La méthode findBy()  permet de récupérer tous les"},
      {"type":"h","text":"résultats, correspondant à un ou plusieurs critère(s). Le"},
      {"type":"p","text":"résultat sera livré sous forme de collection."},
      {"type":"image","src":"images/laconsole/symfony-p182.jpg","alt":"Page originale de Symfony.pdf - page 182"},
      {"type":"h","text":"Page 183"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Récupération de tous les articles publ"},
      {"type":"code","filename":"page-183-exemple-1","language":"php","code":"$articles = $repository->findBy("},
      {"type":"code","filename":"page-183-exemple-2","language":"php","code":"['published' => true],"},
      {"type":"code","filename":"page-183-exemple-3","language":"php","code":"['createdAt' => 'DESC'],"},
      {"type":"p","text":"10,"},
      {"type":"p","text":"20"},
      {"type":"code","filename":"page-183-exemple-4","language":"php","code":");"},
      {"type":"p","text":"Paramètres :"},
      {"type":"code","filename":"page-183-exemple-5","language":"php","code":"$criteria  (obligatoire) : un tableau associatif de"},
      {"type":"h","text":"critère(s) pour ﬁltrer les résultats."},
      {"type":"code","filename":"page-183-exemple-6","language":"php","code":"$orderBy  (optionnel) : un tableau associatif de"},
      {"type":"h","text":"critère(s) pour ordonner les résultats."},
      {"type":"code","filename":"page-183-exemple-7","language":"php","code":"$limit  (optionnel) : un nombre maximal de résultats"},
      {"type":"p","text":"à récupérer."},
      {"type":"code","filename":"page-183-exemple-8","language":"php","code":"$offset  (optionnel) : un nombre spéciﬁant un"},
      {"type":"p","text":"décalage pour le curseur de sélection de résultats. Très"},
      {"type":"p","text":"utile pour la pagination."},
      {"type":"p","text":"Quand vous appelez la méthode findAll() , cette"},
      {"type":"p","text":"dernière fait en réalité appel à la méthode"},
      {"type":"p","text":"$"},
      {"type":"p","text":"findBy([])  sans y spéciﬁer le moindre critère de"},
      {"type":"p","text":"sélection."},
      {"type":"p","text":"findOneBy()"},
      {"type":"p","text":"La méthode findOneBy()  permet de récupérer un résultat,"},
      {"type":"h","text":"correspondant à un ou plusieurs critère(s). Le résultat sera"},
      {"type":"p","text":"livré sous forme d’objet."},
      {"type":"image","src":"images/laconsole/symfony-p183.jpg","alt":"Page originale de Symfony.pdf - page 183"},
      {"type":"h","text":"Page 184"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Récupération de l'article ayant le slu"},
      {"type":"code","filename":"page-184-exemple-1","language":"php","code":"$article = $repository->findOneBy(['slug'"},
      {"type":"p","text":"Paramètres :"},
      {"type":"code","filename":"page-184-exemple-2","language":"php","code":"$criteria  (obligatoire) : un tableau associatif de"},
      {"type":"h","text":"critère(s) pour ﬁltrer les résultats."},
      {"type":"code","filename":"page-184-exemple-3","language":"php","code":"$orderBy  (optionnel) : un tableau associatif de critères"},
      {"type":"h","text":"pour ordonner les résultats."},
      {"type":"p","text":"Si plusieurs entités correspondent aux critères de"},
      {"type":"p","text":"$"},
      {"type":"p","text":"recherche, alors c’est la première dans l’ordre que"},
      {"type":"code","filename":"page-184-exemple-4","language":"php","code":"vous avez déﬁni par $orderBy  qui sera retournée."},
      {"type":"p","text":"find()"},
      {"type":"p","text":"La méthode find()  permet de récupérer un résultat,"},
      {"type":"code","filename":"page-184-exemple-5","language":"php","code":"correspondant à l’identiﬁant $id  passé en paramètre. Le"},
      {"type":"p","text":"résultat sera livré sous forme d’objet."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Récupération de l'article ayant l'iden"},
      {"type":"code","filename":"page-184-exemple-6","language":"php","code":"$article = $repository->find(64);"},
      {"type":"p","text":"La méthode find()  possède en réalité 2 autres"},
      {"type":"code","filename":"page-184-exemple-7","language":"php","code":"paramètres optionnels $lockMode  et"},
      {"type":"code","filename":"page-184-exemple-8","language":"php","code":"$lockVersion . Je ne détaille pas leur"},
      {"type":"p","text":"$"},
      {"type":"p","text":"fonctionnement car ils ne sont utiles quand dans un"},
      {"type":"p","text":"scénario avancé d’utilisation de ressources"},
      {"type":"p","text":"partagées en temps réel."},
      {"type":"image","src":"images/laconsole/symfony-p184.jpg","alt":"Page originale de Symfony.pdf - page 184"},
      {"type":"h","text":"Page 185"},
      {"type":"p","text":"Je vous invite à regarder du côté de la"},
      {"type":"p","text":"conversion"},
      {"type":"p","text":"de paramètre"},
      {"type":"p","text":", qui vous permettra la plupart du"},
      {"type":"p","text":"$"},
      {"type":"p","text":"temps de vous passer des méthodes find()  et"},
      {"type":"p","text":"findOneBy()  et de gratter encore une ligne de"},
      {"type":"p","text":"code..!"},
      {"type":"p","text":"La récupération d’objets depuis la base de données est"},
      {"type":"code","filename":"page-185-exemple-1","language":"php","code":"omniprésente dans le développement d’un site Symfony."},
      {"type":"p","text":"Voici un exemple de méthode de contrôleur chargée de"},
      {"type":"p","text":"récupérer les informations d’un article de blog, aﬁn de les"},
      {"type":"p","text":"afﬁcher sur une page :"},
      {"type":"p","text":"BlogController.php\ncopier"},
      {"type":"code","filename":"page-185-exemple-2","language":"php","code":"#[Route('/blog/{slug}', name: 'article_sh"},
      {"type":"code","filename":"page-185-exemple-3","language":"php","code":"public function showArticle(ArticleReposi"},
      {"type":"code","filename":"page-185-exemple-4","language":"php","code":"return $this->render("},
      {"type":"p","text":"'article/show.html.twig', ["},
      {"type":"code","filename":"page-185-exemple-5","language":"php","code":"'article' => $articleReposito"},
      {"type":"p","text":"]"},
      {"type":"code","filename":"page-185-exemple-6","language":"php","code":");"},
      {"type":"code","filename":"page-185-exemple-7","language":"php","code":"}"},
      {"type":"h","text":"Requêtes personnalisées"},
      {"type":"p","text":"Si les 4 méthodes détaillées ci-dessus permettent de faire"},
      {"type":"p","text":"un grand nombre de requêtes, elles ne sufﬁront pas"},
      {"type":"p","text":"toujours lorsque vous souhaiterez faire des requêtes"},
      {"type":"h","text":"complexes."},
      {"type":"p","text":"Pour cela, vous aurez toujours la possibilité"},
      {"type":"p","text":"d’écrire vos"},
      {"type":"p","text":"requêtes personnalisées dans votre repository"},
      {"type":"p","text":"."},
      {"type":"image","src":"images/laconsole/symfony-p185.jpg","alt":"Page originale de Symfony.pdf - page 185"},
      {"type":"h","text":"Page 186"},
      {"type":"code","filename":"page-186-exemple-1","language":"php","code":"Enregistrement (CREATE)"},
      {"type":"p","text":"Pour enregistrer un nouvel objet, il faut avant tout instancier"},
      {"type":"p","text":"une entité, déﬁnir ses valeurs pour ses attributs, puis utiliser"},
      {"type":"p","text":"les méthodes persist()  et flush() ."},
      {"type":"p","text":"AdminController.php\ncopier"},
      {"type":"p","text":"#[Route('/admin/articles/ajouter', name:"},
      {"type":"code","filename":"page-186-exemple-2","language":"php","code":"public function addArticle(EntityManagerI"},
      {"type":"code","filename":"page-186-exemple-3","language":"php","code":"$article = new Article();"},
      {"type":"code","filename":"page-186-exemple-4","language":"php","code":"$article->setTitle(\"Apprendre le HTML"},
      {"type":"code","filename":"page-186-exemple-5","language":"php","code":"$article->setContent(\"Contenu du cour"},
      {"type":"code","filename":"page-186-exemple-6","language":"php","code":"$em->persist($article);"},
      {"type":"code","filename":"page-186-exemple-7","language":"php","code":"$em->flush();"},
      {"type":"p","text":"// ..."},
      {"type":"code","filename":"page-186-exemple-8","language":"php","code":"}"},
      {"type":"h","text":"1. Récupération de l’Entity Manager avec"},
      {"type":"code","filename":"page-186-exemple-9","language":"php","code":"EntityManagerInterface $em ."},
      {"type":"p","text":"2. Instanciation de l’objet à enregistrer (ici vide) avec"},
      {"type":"code","filename":"page-186-exemple-10","language":"php","code":"$article = new Article() . Cet objet est mappé sur"},
      {"type":"p","text":"l’entité Article . Ensuite, déﬁnition manuelle de ses"},
      {"type":"p","text":"attributs, mais vous verrez par la suite qu’il sera plus"},
      {"type":"p","text":"fréquent de récupérer un objet déjà tout prêt, via la"},
      {"type":"p","text":"saisie d’un formulaire par l’utilisateur."},
      {"type":"code","filename":"page-186-exemple-11","language":"php","code":"3. Persistance de l’objet avec $em->persist($article) ."},
      {"type":"p","text":"On signale ainsi à Doctrine de se préparer à enregistrer"},
      {"type":"p","text":"cet objet en base de données. Concrètement, rien n’a"},
      {"type":"h","text":"encore été modiﬁé en base de données."},
      {"type":"h","text":"4. Application des modiﬁcations en base de données"},
      {"type":"code","filename":"page-186-exemple-12","language":"php","code":"avec $em->flush() . On demande à Doctrine de"},
      {"type":"image","src":"images/laconsole/symfony-p186.jpg","alt":"Page originale de Symfony.pdf - page 186"},
      {"type":"h","text":"Page 187"},
      {"type":"p","text":"mettre à jour la base à partir des objets signalés. Tant"},
      {"type":"p","text":"qu’elle n’est pas appelée, rien n’est modiﬁé en base. Ici,"},
      {"type":"p","text":"comme elle est précédée de la méthode persist() ,"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"elle va exécuter les instructions d’insertion en base de"},
      {"type":"p","text":"données qui ont été demandées."},
      {"type":"p","text":"\nSOMMAIRE"},
      {"type":"p","text":"Si on souhaitait sauvegarder plusieurs entités à la"},
      {"type":"p","text":"Entity Manager"},
      {"type":"p","text":"fois, on ferait appel à persist()  sur nos"},
      {"type":"p","text":"$"},
      {"type":"p","text":"Implémenter un CRUD"},
      {"type":"p","text":"différentes entités et on ne ferait qu’un flush()  à"},
      {"type":"p","text":"Récupération (READ)"},
      {"type":"p","text":"la ﬁn."},
      {"type":"p","text":"Repositories"},
      {"type":"p","text":"4 méthodes d’accès"},
      {"type":"p","text":"Requêtes personnalisées"},
      {"type":"code","filename":"page-187-exemple-1","language":"php","code":"Modiﬁcation (UPDATE)"},
      {"type":"code","filename":"page-187-exemple-2","language":"php","code":"Enregistrement (CREATE)"},
      {"type":"code","filename":"page-187-exemple-3","language":"php","code":"Modiﬁcation (UPDATE)"},
      {"type":"p","text":"Le processus de modiﬁcation d’un objet est très proche de"},
      {"type":"code","filename":"page-187-exemple-4","language":"php","code":"Suppression (DELETE)"},
      {"type":"p","text":"celui de l’enregistrement, à la seule différence que nous"},
      {"type":"p","text":"n’allons pas instancier un nouvel objet mais en récupérer un"},
      {"type":"h","text":"existant."},
      {"type":"p","text":"Nous n’aurons ainsi pas besoin de persister avec"},
      {"type":"p","text":"persist()  l’objet avant l’enregistrement car il existe déjà"},
      {"type":"p","text":"dans notre base de données."},
      {"type":"p","text":"AdminController.php\ncopier"},
      {"type":"code","filename":"page-187-exemple-5","language":"php","code":"#[Route('/admin/articles/{id}/modifier',"},
      {"type":"code","filename":"page-187-exemple-6","language":"php","code":"public function editArticle(int $id, Enti"},
      {"type":"code","filename":"page-187-exemple-7","language":"php","code":"$repository = $em->getRepository(Arti"},
      {"type":"code","filename":"page-187-exemple-8","language":"php","code":"$article = $repository->find($id);"},
      {"type":"code","filename":"page-187-exemple-9","language":"php","code":"$article->setTitle(\"Apprendre le HTML"},
      {"type":"code","filename":"page-187-exemple-10","language":"php","code":"$em->flush();"},
      {"type":"code","filename":"page-187-exemple-11","language":"php","code":"}"},
      {"type":"h","text":"1. Récupération de l’Entity Manager avec"},
      {"type":"image","src":"images/laconsole/symfony-p187.jpg","alt":"Page originale de Symfony.pdf - page 187"},
      {"type":"h","text":"Page 188"},
      {"type":"code","filename":"page-188-exemple-1","language":"php","code":"EntityManagerInterface $em ."},
      {"type":"code","filename":"page-188-exemple-2","language":"php","code":"2. Récupération de l’objet $article"},
      {"type":"h","text":"3. Modiﬁcation de la propriété title avec setTitle()"},
      {"type":"h","text":"4. Application des modiﬁcations en base de données"},
      {"type":"code","filename":"page-188-exemple-3","language":"php","code":"avec $em->flush() ."},
      {"type":"code","filename":"page-188-exemple-4","language":"php","code":"Suppression (DELETE)"},
      {"type":"p","text":"Le processus de suppression d’un objet est très proche de"},
      {"type":"p","text":"celui de l’enregistrement, à la seule différence que nous"},
      {"type":"p","text":"n’allons pas créer un nouvel objet mais en récupérer un"},
      {"type":"h","text":"existant."},
      {"type":"p","text":"Nous aurons ensuite besoin de prévenir Doctrine de la"},
      {"type":"p","text":"suppression avec remove()  avant notre ﬂush."},
      {"type":"p","text":"AdminController.php\ncopier"},
      {"type":"code","filename":"page-188-exemple-5","language":"php","code":"#[Route('/admin/articles/{id}/supprimer',"},
      {"type":"code","filename":"page-188-exemple-6","language":"php","code":"public function deleteArticle(int $id, En"},
      {"type":"code","filename":"page-188-exemple-7","language":"php","code":"$repository = $em->getRepository(Arti"},
      {"type":"code","filename":"page-188-exemple-8","language":"php","code":"$article = $repository->find($id);"},
      {"type":"code","filename":"page-188-exemple-9","language":"php","code":"$em->remove($article);"},
      {"type":"code","filename":"page-188-exemple-10","language":"php","code":"$em->flush();"},
      {"type":"code","filename":"page-188-exemple-11","language":"php","code":"}"},
      {"type":"h","text":"1. Récupération de l’Entity Manager avec"},
      {"type":"code","filename":"page-188-exemple-12","language":"php","code":"EntityManagerInterface $em ."},
      {"type":"code","filename":"page-188-exemple-13","language":"php","code":"2. Récupération de l’objet $article"},
      {"type":"code","filename":"page-188-exemple-14","language":"php","code":"3. Préparation à la suppression de l’objet avec $em-"},
      {"type":"p","text":">remove() . On signale ainsi à Doctrine de se préparer"},
      {"type":"image","src":"images/laconsole/symfony-p188.jpg","alt":"Page originale de Symfony.pdf - page 188"},
      {"type":"h","text":"Page 189"},
      {"type":"p","text":"à supprimer cet objet de la base de données."},
      {"type":"h","text":"Concrètement, rien n’a encore été modiﬁé en base de"},
      {"type":"h","text":"données."},
      {"type":"h","text":"4. Application des modiﬁcations en base de données"},
      {"type":"code","filename":"page-189-exemple-1","language":"php","code":"avec $em->flush() ."},
      {"type":"p","text":"Vous savez désormais créer, modiﬁer ou encore supprimer"},
      {"type":"p","text":"des données en base de données. Néanmoins, on ne se"},
      {"type":"p","text":"contentera évidemment pas de saisir des valeurs « en dur »"},
      {"type":"p","text":"via nos setters comme dans les exemples précédents. On"},
      {"type":"p","text":"passera par des formulaires. On en parle au chapitre"},
      {"type":"p","text":"suivant."},
      {"type":"p","text":"Précédent"},
      {"type":"p","text":"Suivant :\n8. Créer\ndes\nFormulaires\n(FormType)"},
      {"type":"p","text":":\n6. Créer\nses\nEntités\navec\nDoctrine"},
      {"type":"p","text":"〉"},
      {"type":"p","text":"〈"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"+"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à"},
      {"type":"p","text":"remodeler le monde avec des\nLEGO. Plus tard, je découvre le"},
      {"type":"p","text":"@"},
      {"type":"p","text":"dev, des LEGO où les briques sont"},
      {"type":"p","text":"remplacées par des lignes de\ncode. J'en fais mon métier puis je"},
      {"type":"p","text":""},
      {"type":"p","text":"décide de transmettre cette"},
      {"type":"p","text":"passion en école de dev et sur\nlaConsole."},
      {"type":"image","src":"images/laconsole/symfony-p189.jpg","alt":"Page originale de Symfony.pdf - page 189"},
      {"type":"h","text":"Page 190"},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},
      {"type":"p","text":"légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"développement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/symfony-p190.jpg","alt":"Page originale de Symfony.pdf - page 190"},
    ],
  },
];

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
