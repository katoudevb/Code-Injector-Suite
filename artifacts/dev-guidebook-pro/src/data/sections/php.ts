import type { Section } from "../types";

export const php: Section = {
  id: "php",
  title: "PHP — Langage",
  icon: "FileCode2",
  tags: ["php"],
  subsections: [
    // ── PARTIE 1 : ENVIRONNEMENT ─────────────────────────────────────────
    {
      id: "php-environnement-dev",
      title: "Environnement de développement",
      blocks: [
        { type: "h", text: "Rôles d'un serveur de développement" },
        { type: "list", items: [
          "Un serveur web → il exécute tes fichiers PHP",
          "Une base de données (BDD) → elle stocke les informations (utilisateurs, produits, etc.)",
        ]},
        { type: "h", text: "Types de serveurs" },
        { type: "p", text: "Solution 1 : serveur en ligne (rare en dev) — serveur distant (internet), exemple : hébergeur web." },
        { type: "p", text: "Solution 2 : serveur local (le plus utilisé) — tu installes tout sur ton ordinateur." },
        { type: "h", text: "Les stacks locales" },
        { type: "table", headers: ["Stack", "OS", "Contenu"], rows: [
          ["LAMP", "Linux", "Linux + Apache + MySQL + PHP"],
          ["MAMP", "MacOS", "MacOS + Apache + MySQL + PHP"],
          ["WAMP", "Windows", "Windows + Apache + MySQL + PHP"],
          ["XAMPP", "Tous systèmes", "Apache + MySQL + PHP + phpMyAdmin"],
        ]},
        { type: "note", variant: "info", text: "XAMPP est le plus utilisé en cours. Téléchargement : https://www.apachefriends.org/download.html" },
        { type: "h", text: "Lancer le serveur (XAMPP)" },
        { type: "p", text: "Après installation de XAMPP :" },
        { type: "list", items: ["1. Lancer Apache", "2. Lancer MySQL", "3. Ouvrir le navigateur", "4. Accès au serveur local → http://localhost"] },
        {
          type: "diagram",
          content: `Schéma XAMPP — état des services :

┌─────────────────────────────────────┐
│           XAMPP Control Panel        │
├──────────────────┬──────────────────┤
│ MySQL Database   │ Running  ●       │
│ ProFTPD          │ Stopped  ○       │
│ Apache Web Server│ Running  ●       │
└──────────────────┴──────────────────┘
          [Start] [Stop] [Restart]`,
        },
        { type: "h", text: "PhpMyAdmin" },
        { type: "p", text: "Interface graphique pour gérer la base de données. URL d'accès : http://localhost/phpmyadmin" },
        { type: "list", items: ["Créer des bases de données", "Gérer les tables", "Manipuler les données"] },
        { type: "h", text: "Dossier du serveur (htdocs)" },
        { type: "p", text: "Dans XAMPP, le dossier htdocs est l'endroit où tu mets tes projets web." },
        { type: "diagram", content: `htdocs/
└── mon_site/
    └── index.php` },
        { type: "h", text: "Fichier index.php" },
        { type: "p", text: "C'est le point d'entrée du site. http://localhost redirige souvent vers : http://localhost/dashboard" },
        { type: "h", text: "Comment ça fonctionne" },
        {
          type: "diagram",
          content: `Flux d'exécution PHP :

  [Tu écris du PHP dans htdocs]
           │
           ▼
  [Apache lit le fichier]
           │
           ▼
  [PHP est exécuté côté serveur]
           │
           ▼
  [Le navigateur affiche le résultat HTML]`,
        },
      ],
    },
    {
      id: "php-ecrire-script",
      title: "Écrire un script en PHP",
      blocks: [
        { type: "list", items: [
          "Il faut lancer un serveur qui interprètera les fichiers PHP",
          "Il faut un serveur de base de données pour stocker et utiliser des informations",
        ]},
        { type: "h", text: "Serveur local" },
        { type: "p", text: "DEF : Suite logicielle qui a un serveur d'application, un serveur de base de données et le langage PHP. Il y a WAMP, MAMP et XAMPP." },
        { type: "list", items: [
          "1. Installer XAMPP : https://www.apachefriends.org/download.html",
          "2. Lancer le serveur Apache et MySQL",
          "3. Vérifier le fonctionnement en tapant http://localhost sur le navigateur — localhost est le nom de domaine de ton serveur local",
        ]},
        { type: "h", text: "Serveur interne PHP et serveur MySQL" },
        { type: "p", text: "DEF : Serveur web interne de PHP permettant de passer du serveur d'application local et de déclarer un projet PHP n'importe où sur le système." },
        { type: "p", text: "Pré-requis : Installer une version PHP sur le serveur." },
        { type: "code", filename: "terminal", language: "bash", code: `# 1. Démarrer le serveur
php -S localhost:8000

# 2. Accéder au projet
http://localhost/home.php` },
        { type: "note", variant: "info", text: "Beaucoup de développeurs utilisant des frameworks comme Symfony ou Laravel utilisent régulièrement ce serveur interne. Le serveur s'utilise avec la commande php -S localhost:8000" },
        { type: "h", text: "Racine du serveur" },
        { type: "list", items: [
          "Se trouve dans /htdocs de l'application XAMPP",
          "Dans /htdocs on place les répertoires projet (les sites)",
          "index.php redirige l'URL localhost vers le tableau de bord",
          "Les fichiers index.php sont automatiquement interprétés par le serveur et servent de point d'entrée",
        ]},
      ],
    },
    {
      id: "php-creer-projet",
      title: "Créer un projet",
      blocks: [
        { type: "list", items: [
          "1. Créer un répertoire (dossier) projet1",
          "2. Accéder au répertoire via l'URL http://localhost/projet1",
        ]},
        { type: "note", variant: "warning", text: "S'il manque le fichier index.php dans un répertoire, le serveur montre à l'utilisateur l'arborescence du site. À éviter totalement !" },
        { type: "list", items: ["3. Dans le répertoire projet1, créer la page d'accueil home.php"] },
        { type: "note", variant: "warning", text: "Un utilisateur peut accéder au fichier home.php directement via http://localhost/projet1/home.php. À éviter totalement !" },
        { type: "h", text: "Point d'entrée du site — Serveur local" },
        { type: "list", items: [
          "1. Créer un fichier index.php dans le répertoire projet1",
          "2. Dans index.php réécrire l'URL d'accès à mon site vers le fichier home.php",
        ]},
        { type: "note", variant: "info", text: "La condition vérifie grâce à la fonction empty() s'il existe un protocole HTTPS pour le serveur et si le mode HTTPS est activé. Si tel est le cas, commencer l'URL avec https:// sinon écrire http://. Concaténer ensuite le nom de domaine trouvé à l'index HTTP_HOST du tableau $_SERVER. Utiliser ensuite la fonction header() qui permet de renvoyer l'utilisateur vers une autre URL." },
        { type: "code", filename: "index.php", language: "php", code: `<?php
if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
    $uri = 'https://';
} else {
    $uri = 'http://';
}
$uri .= $_SERVER['HTTP_HOST'];
header('Location: '.$uri.'/projet1/home.php');
exit;
?>` },
        { type: "h", text: "Point d'entrée du site — Serveur interne PHP" },
        { type: "list", items: [
          "1. Créer un fichier index.php dans le répertoire projet1",
          "2. Dans index.php réécrire l'URL d'accès à mon site vers le fichier home.php",
        ]},
      ],
    },
    {
      id: "php-combiner-html",
      title: "Combiner HTML et PHP",
      blocks: [
        { type: "note", variant: "info", text: "Le fichier doit être en .php et utiliser les balises php de syntaxe pour être délimité. Tout ce qui s'utilise de base en PHP est utilisable dans du PHP à l'intérieur du HTML." },
        { type: "code", filename: "index.php", language: "php", code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil projet1</title>
</head>
<body>
    <main>
        <h1>Mon premier projet PHP</h1>
        <?php echo("<h1>Mon super titre</h1>"); ?>
        <ul>
            <?php for ($i = 1; $i <= 5; $i++) { ?>
                <li> Menu numéro <?php echo $i; ?> </li>
            <?php } ?>
        </ul>
    </main>
</body>
</html>` },
      ],
    },
    {
      id: "php-routeur",
      title: "Mettre en place un routeur",
      blocks: [
        { type: "p", text: "Pour un système de routing, il faut faire en sorte que n'importe quelle URL arrive sur un seul fichier." },
        { type: "h", text: "Reconfigurer le serveur web du projet" },
        { type: "list", items: [
          "Créer un fichier de configuration à la racine du projet nommé .htaccess (lu par Apache)",
          "Apache est le serveur web qui va lire les fichiers et les exécuter à l'aide de PHP",
        ]},
        { type: "code", filename: ".htaccess", language: "apache", code: `RewriteEngine on

RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [QSA,L]` },
        { type: "note", variant: "info", text: "(.*) indique que n'importe quel type d'URL redirige sur index.php" },
        { type: "h", text: "Développer le routeur" },
        { type: "p", text: "DEF : Permet d'afficher les bonnes vues (views) selon l'URL." },
        { type: "list", items: [
          "1. On récupère l'URL via la super globale $_SERVER",
          "2. On crée le routeur avec le if…else",
        ]},
        { type: "note", variant: "info", text: "Il faut récupérer le préfixe des dossiers via la variable $prefixUrl pour voir les vues s'afficher." },
        { type: "code", filename: "index.php", language: "php", code: `<?php
$prefixUrl = '/C12/F06/';
$url = $_SERVER['REQUEST_URI'];

if ($url == $prefixUrl.'') {
    require('./views/home.php');
} else if ($url == $prefixUrl.'contact') {
    require('./views/contact.php');
} else if ($url == $prefixUrl.'about') {
    require('./views/about.php');
} else {
    require('./views/404.php');
}` },
        {
          type: "diagram",
          content: `Flux du routeur :

  Utilisateur tape une URL
          │
          ▼
  [index.php] ← point d'entrée unique
          │
          ▼
  [Routeur lit $url]
          │
    ┌─────┴──────┐
    │ /home      │ /contact   │ /about   │ 404
    ▼            ▼            ▼          ▼
[home.php] [contact.php] [about.php] [404.php]`,
        },
      ],
    },
    {
      id: "php-parametres-get-post",
      title: "Passer des paramètres (GET / POST)",
      blocks: [
        { type: "h", text: "Envoyer des paramètres dans l'URL avec la méthode GET" },
        { type: "p", text: "Les URLs transmettent des informations vers le serveur à travers PHP." },
        {
          type: "diagram",
          content: `Anatomie d'une URL avec paramètres GET :

http://localhost/projet1/login.php ? name=John & password=123
│___________________________________│ │_________│   │___________│
         URL de la page             │  1er param     2ème param
                                    │
                              Borne de définition
                              des paramètres GET`,
        },
        { type: "code", filename: "php", language: "php", code: `# Envoyer plusieurs paramètres via URL
page.php?param1=valeur1&param2=valeur2&param3=valeur3` },
        { type: "h", text: "Récupérer les paramètres dans le fichier cible" },
        { type: "p", text: "Dans le fichier login.php, récupérer les paramètres grâce à $_GET." },
        { type: "code", filename: "login.php", language: "php", code: `<?php
if (isset($_GET["name"]) && !empty($_GET["name"])){
    $name = $_GET["name"];
}
if (isset($_GET["password"]) && !empty($_GET["password"])){
    $password = $_GET["password"];
}
echo("Bonjour$name , nous avons bien reçu votre mot de passe qui est$password ");

/*
  ICI À LA PLACE D'AFFICHER LES VALEURS, VOUS POURRIEZ UTILISER $name ET $password
  AFIN D'EXPRIMER UNE REQUÊTE SQL POUR TROUVER UNE CORRESPONDANCE EN BASE DE DONNÉES
  ET CONNECTER L'UTILISATEUR.
*/` },
        { type: "list", items: [
          "La valeur à l'index name du tableau sera John et la valeur à l'index password sera 123",
          "La fonction isset() assure qu'une variable est définie et non NULL",
        ]},
        { type: "note", variant: "warning", text: "JAMAIS passer un nom d'utilisateur et un mot de passe par l'URL !!" },
        { type: "h", text: "Envoyer les données d'un formulaire avec la méthode GET" },
        { type: "p", text: "DEF : Permet à l'utilisateur d'envoyer ses informations facilement en petites quantités — non sécurisé." },
        { type: "list", items: [
          "1. Utiliser la balise <form> avec 2 propriétés : action (chemin vers lequel le formulaire envoie ses données) et method (méthode utilisée, ici get)",
          "2. Ajouter 2 champs de saisie <input> de type text et password",
          "3. Déclarer un bouton submit pour envoyer les données",
        ]},
        { type: "code", filename: "form.html", language: "html", code: `<form action="login.php" method="get">
    <fieldset>
        <legend>Saisissez votre nom et votre mot de passe</legend>
        <br><label for="name">Nom</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="password">Mot de passe</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Soumettre">
    </fieldset>
</form>` },
        { type: "h", text: "Envoyer les données d'un formulaire de manière sécurisée avec la méthode POST" },
        { type: "p", text: "DEF : Permet à l'utilisateur d'envoyer ses informations facilement en grande quantité de façon cachée et sécurisée." },
        { type: "note", variant: "info", text: "Certains mots-clés sont interdits ou déconseillés pour les propriétés id et name des balises <input>. C'est le cas du mot password. Il est fortement conseillé de ne pas l'utiliser car c'est le type de la balise input." },
        { type: "note", variant: "info", text: "Pour s'assurer que l'utilisateur a bien saisi des valeurs, ajouter la propriété required dans les balises <input> obligatoires." },
        { type: "code", filename: "form.html", language: "html", code: `<form action="login.php" method="post">
    <fieldset>
        <legend>Saisissez votre nom et votre mot de passe</legend>
        <br><label for="name">Nom</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="keypass">Mot de passe</label><br>
        <input type="password" id="keypass" name="keypass" required><br><br>
        <input type="submit" value="Soumettre">
    </fieldset>
</form>` },
        { type: "p", text: "Tester la récupération des données : accéder au projet et envoyer de nouvelles infos dans le formulaire — cela n'affiche plus les infos dans l'URL." },
        { type: "h", text: "Sécuriser la réception des données" },
        { type: "p", text: "DEF : Évite les injections de code SQL / hacking des données. Les formulaires sont des interfaces utilisées par les hackers pour tromper le traitement back-end en tentant d'envoyer des données susceptibles de nuire au bon fonctionnement du site." },
        { type: "p", text: "Utiliser la fonction htmlspecialchars() qui permet d'échapper à tout contenu HTML saisi ou généré par les données transmises par le formulaire. Il faut utiliser cette fonction sur tous les textes envoyés par l'utilisateur susceptibles d'être affichés sur une page web." },
        { type: "code", filename: "login.php", language: "php", code: `<?php
if (isset($_POST["name"]) && !empty($_POST["name"])){
    $name = htmlspecialchars($_POST["name"]);
}
if (isset($_POST["keypass"]) && !empty($_POST["keypass"])){
    $keypass = htmlspecialchars($_POST["keypass"]);
}
echo("Bonjour$name , nous avons bien reçu votre mot de passe qui est$keypass ");` },
        { type: "note", variant: "success", text: "CONCLUSION : Transmission d'une page à l'autre des infos saisies par l'utilisateur de façon sécurisée." },
      ],
    },
    {
      id: "php-envoyer-fichiers",
      title: "Envoyer des fichiers",
      blocks: [
        { type: "p", text: "Limiter le poids des fichiers pour ne pas impatienter l'utilisateur." },
        { type: "h", text: "Le client au serveur" },
        { type: "list", items: ["1. Ajouter l'attribut enctype=\"multipart/form-data\" à la balise <form>"] },
        { type: "note", variant: "info", text: "enctype informe le navigateur de l'utilisateur qu'il s'apprête à envoyer des fichiers." },
        { type: "list", items: ["2. Utiliser la balise <input type=\"file\" /> pour envoyer un fichier ainsi que l'attribut name pour que PHP reconnaisse le champ ensuite"] },
        { type: "code", filename: "form.html", language: "html", code: `<form action="userfile.php" method="POST" enctype="multipart/form-data">
    <label for="image" class="form-label">Votre image</label>
    <input type="file" class="form-control" id="image" name="image"/>
    <button type="submit">Envoyer</button>
</form>` },
        { type: "note", variant: "info", text: "Si on veut envoyer un fichier vers le serveur, le formulaire doit avoir l'attribut enctype avec la valeur \"multipart/form-data\"." },
        { type: "h", text: "Traiter l'envoi du fichier" },
        { type: "p", text: "DEF : Permet de vérifier la nature du fichier reçu de l'utilisateur." },
        { type: "list", items: ["1. Créer le fichier userfile.php comme fichier cible du formulaire"] },
        { type: "note", variant: "info", text: "Chaque fichier envoyé crée une variable globale $_FILES['nom_du_champ']" },
        { type: "list", items: [
          "$_FILES est un tableau qui regroupe les informations du fichier :",
          "Son nom : $_FILES['image']['name']",
          "Son type : $_FILES['image']['type']",
          "Sa taille : $_FILES['image']['size']",
          "Son nom temporaire sur le serveur : $_FILES['image']['tmp_name']",
          "Les erreurs éventuelles lors de l'envoi : $_FILES['image']['error']",
        ]},
        { type: "list", items: ["2. Vérifier les fichiers envoyés pour acceptation ou non"] },
        { type: "code", filename: "userfile.php", language: "php", code: `<?php
// Teste si le fichier a bien été envoyé et s'il n'y a pas d'erreur
if (isset($_FILES['image']) && $_FILES['image']['error'] == 0)
{
    // Teste si le fichier n'est pas trop gros
    if ($_FILES['screenshot']['size'] <= 2000000)
    {
        // Teste si l'extension est autorisée
        $fileInfo = pathinfo($_FILES['image']['name']);
        $extension = $fileInfo['extension'];
        $allowedExtensions = ['jpg', 'jpeg', 'gif', 'png'];
        if (in_array($extension, $allowedExtensions))
        {
            // Validation et stockage du fichier
            move_uploaded_file($_FILES['image']['tmp_name'], 'upload/' . basename($_FILES['image']['name']));
            echo "Votre envoi s'est déroulé avec succès !";
        }
    }
}
?>` },
        { type: "list", items: ["3. Créer un répertoire upload en racine du projet et tester l'envoi d'une image au format .png"] },
        { type: "note", variant: "info", text: "Le serveur doit posséder les droits en écriture sur ce répertoire. Définir les permissions à 733 pour ce répertoire." },
        { type: "list", items: ["4. Utiliser la méthode pour vérifier le type MIME d'un fichier : https://stackoverflow.com/a/59986578"] },
        { type: "note", variant: "info", text: "Renommer le fichier par un nom aléatoire pour augmenter la sécurité." },
        { type: "h", text: "Tester l'envoi du fichier" },
        { type: "list", items: [
          "1. Choisir une image au format .png de moins de 2 Mo et cliquer sur « Envoyer »",
          "2. Dans le répertoire upload vérifier que l'image s'y trouve",
        ]},
        {
          type: "diagram",
          content: `Structure du projet après envoi :

PROJET1/
├── upload/
│   └── image_test.png
├── home.php
├── index.php
├── login.php
└── userfile.php`,
        },
      ],
    },
    {
      id: "php-visualiser-erreurs",
      title: "Visualiser les erreurs",
      blocks: [
        { type: "p", text: "Selon le serveur lancé et la configuration initiale, les erreurs de code peuvent ou non s'afficher sur la page." },
        { type: "list", items: ["1. Faire un test avec un fichier index.php avec le code :"] },
        { type: "code", filename: "index.php", language: "php", code: `<?php
phpinfo()` },
        { type: "list", items: ["L'erreur sur le navigateur doit s'afficher ; en cas inverse, la configuration d'erreur n'est pas encore configurée"] },
        { type: "h", text: "Configurer PHP pour avoir les erreurs" },
        { type: "list", items: ["1. Ouvrir le fichier php.ini via :"] },
        { type: "code", filename: "php", language: "php", code: `<?php
phpinfo();` },
        { type: "list", items: [
          "Sur la page navigateur, la ligne Configuration File (php.ini) Path indique où est situé le fichier php.ini à ouvrir",
          "2. Aller le chercher dans les dossiers et l'ouvrir avec VSCode",
          "3. Modifier les lignes suivantes : error_reporting → valeur E_ALL (reporter toutes les erreurs), display_errors → valeur On (afficher les erreurs), log_errors → valeur On (enregistrer les erreurs dans un fichier de log)",
          "4. Enregistrer les paramètres, éteindre le serveur et le rallumer",
          "5. Relancer le serveur (XAMPP) qui doit normalement faire apparaître l'erreur",
        ]},
        { type: "note", variant: "info", text: "La fonction de debug var_dump() n'affiche rien car le débogage peut être désactivé par ces paramètres également." },
      ],
    },

    // ── PARTIE 2 : SYNTAXE PHP ───────────────────────────────────────────
    {
      id: "php-syntaxe-base",
      title: "Syntaxe de base",
      blocks: [
        { type: "code", filename: "script.php", language: "php", code: `<?php
//Code ;
?>` },
        { type: "note", variant: "info", text: "La balise fermante ?> n'est pas obligatoire dans un fichier .php si y'a QUE du code PHP dedans. Ces balises PHP servent à délimiter dans le HTML où se situe le code PHP." },
        { type: "note", variant: "info", text: "On peut également insérer uniquement du texte brut qui sera aussi interprété." },
      ],
    },
    {
      id: "php-variables",
      title: "Variables",
      blocks: [
        { type: "p", text: "DEF : Définit par un nom et contient une valeur réutilisable tout au long du script." },
        { type: "code", filename: "php", language: "php", code: `<?php
//Déclarer une variable
$nom_variable = valeur;

// Je déclare une chaine de caractères
$chaine = "Une chaine de caractère";

// Je déclare un nombre entier
$nombre = 123;

// Je déclare un nombre décimal
$decimal = 12.3;

// Je déclare un booléen
$vrai = true;
$faux = false;

// Je déclare un tableau
$tableau = ["pomme", "orange", "banane"];
?>` },
      ],
    },
    {
      id: "php-constantes",
      title: "Constante",
      blocks: [
        { type: "p", text: "DEF : Élément dont la valeur ne peut pas être modifiée. On associe la valeur au moment de la déclaration." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Méthode 1 : define()
define(NOM_CONSTANTE, valeurConstante);
$total = 2 + NOM_CONSTANTE;

// Méthode 2 : const
const NOM_CONSTANTE = 3;
$total = 2 + NOM_CONSTANTE;
?>` },
      ],
    },
    {
      id: "php-types-valeurs",
      title: "Types de valeurs",
      blocks: [
        { type: "table", headers: ["Type de valeur", "Définition"], rows: [
          ["Chaîne de caractères", "Contient du texte"],
          ["Nombre", "Un entier ou un nombre décimal"],
          ["Booléen", "true ou false"],
          ["Tableau", "Un ensemble de valeurs"],
          ["Null", "Aucune valeur associée"],
        ]},
        { type: "code", filename: "php", language: "php", code: `<?php
// Déclarer la valeur null
$variable;
// OU
$variable = null;
?>` },
      ],
    },
    {
      id: "php-superglobales",
      title: "Superglobales",
      blocks: [
        { type: "p", text: "DEF : Internes au PHP, ce sont des valeurs accessibles partout dans le script." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Structure de déclaration
$_SUPERGLOBALES
// (sauf $GLOBALS)

// Voir ce qu'elle contient
var_dump($_SUPERGLOBALES);
?>` },
        {
          type: "diagram",
          content: `Hiérarchie des superglobales PHP :

$GLOBALS
├── $_SERVER
├── $_GET
├── $_POST
├── $_FILES
├── $_COOKIE
├── $_SESSION
├── $_REQUEST
└── $_ENV`,
        },
        { type: "h", text: "$GLOBALS" },
        { type: "p", text: "Contient des infos de différentes superglobales ainsi que des variables qu'on peut lui ajouter et utiliser ensuite n'importe où dans les scripts." },
        { type: "code", filename: "php", language: "php", code: `<?php
$globalvar = 8;
global $globalvar;
var_dump($GLOBALS);

// Résultat :
// array(4) {
//   ["_GET"]=> array(0) { }
//   ["_POST"]=> array(0) { }
//   ["_COOKIE"]=> array(7) { }
//   ["_FILES"]=> array(0) { }
//   ["globalvar"]=> int(8)
// }
?>` },
        { type: "h", text: "$_SERVER" },
        { type: "p", text: "Contient les infos liées au serveur où le site est en ligne ainsi que les infos relatives au script." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Récupérer la REQUEST_METHOD
$_SERVER['REQUEST_METHOD']

// Exemples de clés disponibles :
// ["REMOTE_ADDR"]    => "::1"
// ["REMOTE_PORT"]    => "52862"
// ["SERVER_SOFTWARE"]=> "PHP 8.1.7 Development Server"
// ["SERVER_PROTOCOL"]=> "HTTP/1.1"
// ["SERVER_NAME"]    => "localhost"
// ["SERVER_PORT"]    => "8000"
// ["REQUEST_URI"]    => "/"
// ["REQUEST_METHOD"] => "GET"
// ["SCRIPT_NAME"]    => "/index.php"
?>` },
        { type: "h", text: "$_GET et $_POST" },
        { type: "p", text: "Rattachées aux formulaires." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Avec GET : les infos sont obtenues dans l'URL
// Ici phrase et number sont les paramètres séparés par &
// HelloWorld et 1 les valeurs
var_dump($_GET);
// URL : localhost:8000/?phrase=HelloWorld&number=1
// array(2) {
//   ["phrase"]=> string(10) "HelloWorld"
//   ["number"]=> string(1) "1"
// }

// Avec POST : les infos sont envoyées dans la requête
var_dump($_POST);
?>` },
        { type: "code", filename: "form.html", language: "html", code: `<!-- Formulaire POST -->
<form method="POST">
    <input type="text" name="nom" placeholder="Votre nom">
</form>` },
        { type: "h", text: "$_FILES" },
        { type: "p", text: "Utilisé quand un input type=\"file\" est dans le formulaire. Les données du fichier transféré sont contenues dans ce tableau." },
        { type: "code", filename: "form.html", language: "html", code: `<form method="POST" enctype="multipart/form-data">
    <input type="file" name="image">
    <input type="submit" value="Envoyer">
</form>` },
        { type: "code", filename: "php", language: "php", code: `<?php
var_dump($_FILES);
// array(1) {
//   ["image"] => array(6) {
//     ["name"]     => string(9) "tick2.png"
//     ["full_path"]=> string(9) "tick2.png"
//     ["type"]     => string(9) "image/png"
//     ["tmp_name"] => string(66) "/private/var/folders/.../tmp_name"
//     ["error"]    => int(0)
//     ["size"]     => int(1230)
//   }
// }
?>` },
        { type: "h", text: "$_COOKIE" },
        { type: "p", text: "Récupère les informations/paramètres stockés sur le navigateur de l'utilisateur pour le reconnaître à son retour." },
        { type: "h", text: "$_SESSION" },
        { type: "p", text: "Stockage de données tant que l'utilisateur a un onglet ouvert sur le site et qui garde les données quelques heures après qu'il a quitté le site (le maintenir connecté, etc.)" },
        { type: "h", text: "$_REQUEST" },
        { type: "p", text: "Rassemble les données de $_GET, $_POST et $_COOKIE." },
        { type: "h", text: "$_ENV" },
        { type: "p", text: "Contient les informations liées à l'environnement dans lequel on exécute le script. Sur un serveur, on peut retrouver des informations transmises par le Shell exécutant PHP." },
        { type: "note", variant: "info", text: "Documentation : https://www.php.net/manual/fr/language.variables.superglobals.php" },
      ],
    },
    {
      id: "php-conditions",
      title: "Conditions",
      blocks: [
        { type: "p", text: "DEF : Exécute telle ou telle action en fonction d'un résultat. On parle de condition lorsqu'on doit employer les termes si, sinon et selon. Chaque condition mène à des actions qui peuvent avoir leurs propres conditions." },
        { type: "p", text: "Il y a les conditions simples et multiples (ET ou OU). Il y a aussi le NON correspondant à l'inverse (faux est vrai et vrai est faux)." },
        { type: "h", text: "Tables de vérité" },
        {
          type: "diagram",
          content: `Opérateur OU :
┌──────┬───────┬────────┐
│  OU  │ FAUX  │  VRAI  │
├──────┼───────┼────────┤
│ FAUX │ FAUX  │  VRAI  │
│ VRAI │ VRAI  │  VRAI  │
└──────┴───────┴────────┘

Opérateur ET :
┌──────┬───────┬────────┐
│  ET  │ FAUX  │  VRAI  │
├──────┼───────┼────────┤
│ FAUX │ FAUX  │  FAUX  │
│ VRAI │ FAUX  │  VRAI  │
└──────┴───────┴────────┘

Opérateur NON :
┌───────┬────────┐
│  NON  │ RÉSULT │
├───────┼────────┤
│ FAUX  │  VRAI  │
│ VRAI  │  FAUX  │
└───────┴────────┘`,
        },
        { type: "h", text: "if" },
        { type: "code", filename: "php", language: "php", code: `<?php
$condition = true;

if ($condition == true) {
    // J'exécute le code présent entre les accolades
}
?>` },
        { type: "h", text: "if...else" },
        { type: "code", filename: "php", language: "php", code: `<?php
$condition = false;

if ($condition == true) {
    // Le code présent ici est exécuté si la condition est vraie
} else {
    // Le code présent ici est exécuté si la condition est fausse
}
?>` },
        { type: "h", text: "if...elseif...else" },
        { type: "code", filename: "php", language: "php", code: `<?php
$condition = 5;

if ($condition === 5) {
    // On affiche sur la page la valeur de la condition est égale à 5
    echo "$condition est égal à 5";
} elseif ($condition < 5) {
    // On affiche sur la page la valeur de la condition est inférieure à 5
    echo "$condition est inférieur à 5";
} elseif ($condition > 5) {
    // On affiche sur la page la valeur de la condition est supérieure à 5
    echo "$condition est supérieur à 5";
} else {
    // la valeur de la condition n'est pas un nombre
    echo "$condition n'est pas un nombre";
}
?>` },
        { type: "h", text: "switch" },
        { type: "code", filename: "php", language: "php", code: `<?php
$condition = 5;

switch ($condition) {
    case 5:
        echo "$condition = 5";
        break;
    case $condition > 5:
        echo "$condition > 5";
        break;
    case $condition < 5:
        echo "$condition < 5";
        break;
    default:
        echo "$condition n'est pas un nombre.";
        break;
}
?>` },
        { type: "note", variant: "warning", text: "Chaque case doit se terminer par un break. Si vous l'oubliez, le script exécutera toutes les lignes jusqu'au prochain break qu'il trouvera." },
        { type: "note", variant: "info", text: "default n'est pas obligatoire, c'est l'équivalent du else dans une condition classique." },
        { type: "h", text: "Types de comparaison" },
        { type: "table", headers: ["Opérateur", "Description"], rows: [
          ["<", "Inférieur à"],
          ["<=", "Inférieur ou égal à"],
          ["==", "Égal à"],
          ["===", "Strictement égal à (valeur ET type)"],
          ["!=", "Différent de"],
          ["!==", "Strictement différent de (valeur et type)"],
          [">", "Supérieur à"],
          [">=", "Supérieur ou égal à"],
        ]},
      ],
    },
    {
      id: "php-boucles",
      title: "Boucles",
      blocks: [
        { type: "p", text: "DEF : Pour répéter une opération un certain nombre de fois avec les mots \"pour chaque\", \"tant que\"." },
        { type: "h", text: "while" },
        { type: "code", filename: "php", language: "php", code: `<?php
$a = 0;

while ($a <= 10) {
    // On affiche la valeur de $a sur la page
    echo $a;
    // On incrémente $a (c'est-à-dire qu'on augmente sa valeur de 1)
    $a++; // équivalent à $a = $a + 1

    if ($a == 5){
        break;
    }
}
?>` },
        { type: "h", text: "do...while" },
        { type: "code", filename: "php", language: "php", code: `<?php
$a = 0;
do {
    // Le code à exécuter qui sera exécuté au moins une fois
    $a++;
} while ($a <= 10);
?>` },
        { type: "h", text: "for" },
        { type: "p", text: "Prend 3 paramètres dans la parenthèse de condition d'exécution : la valeur de départ de l'index (généralement 0 ou 1), la valeur max de l'index pour arrêter la boucle, le pas d'évolution de l'index (généralement 1)." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Pour l'index ayant comme valeur de départ 0,
// Tant que l'index est inférieur à 5,
// On incrémente sa valeur d'un point à chaque tour de boucle
// et on exécute le code suivant
for ($index=0; $index < 5; $index++) {
    echo "La valeur de l'index est égale à$index";
}
?>` },
        { type: "h", text: "foreach" },
        { type: "p", text: "Souvent utilisé avec les tableaux pour travailler sur toutes les données. Permet d'accéder à la clé et valeur d'un tableau associatif pour les manipuler." },
        { type: "code", filename: "php", language: "php", code: `<?php
$array = [
    'nom' => "Doe",
    'prenom' => "John"
];

// Accès clé => valeur
foreach ($array as $key => $value) {
    echo "Le$key de la personne est$value";
    echo "<br>";
}
// Résultat affiché sur la page
// Le nom de la persone est Doe
// Le prenom de la personne est John

// Concaténation dans foreach
$phrase = "La personne s'appelle ";
foreach ($array as $value) {
    $phrase .= "$value "; // .= correspond à de la concaténation
    // Équivalent à $phrase = $phrase . "$value ";
}
// Résultat affiché sur la page
// La personne s'appelle Doe John
?>` },
      ],
    },
    {
      id: "php-fonctions",
      title: "Fonctions",
      blocks: [
        { type: "p", text: "DEF : Permet de manipuler les informations obtenues pour améliorer l'affichage, les trier, les filtrer… sans répéter du code." },
        { type: "h", text: "Appeler une fonction" },
        { type: "code", filename: "php", language: "php", code: `<?php
// Appeler une fonction
NomFonction(parametre);

// Afficher du texte à l'écran HTML ou non
echo("Texte a afficher");

// Calcule le nombre de caractères dans une chaine
$count = strlen("Hello world");
// RESULTAT : $count = 11
?>` },
        { type: "note", variant: "info", text: "Les paramètres d'une fonction sont les informations qu'on doit leur donner. Elles peuvent être seule ou plusieurs, dans ce cas séparées par une virgule." },
        { type: "h", text: "Créer une fonction" },
        { type: "code", filename: "php", language: "php", code: `<?php
// Fonction classique
function nomFonction() {
    echo("Hello");
}
nomFonction();

// Fonction avec paramètres
function nomFonction($name) {
    echo("Hello" . $name);
}
nomFonction("Kat");

// Fonction avec vérification de type
function writeIsInt($param) {
    if (is_int($param)) {
        echo "C'est un nombre";
    } else {
        echo "Ce n'est pas un nombre";
    }
}
writeIsInt(5);       // Résultat: C'est un nombre
writeIsInt("Hello"); // Résultat: Ce n'est pas un nombre

// Fonction avec return
function ajouter5($nombre) {
    if (is_int($nombre)) {
        return $nombre + 5;
    }
    return "Erreur: La fonction attend un nombre";
}
$nombre1 = ajouter5(5);       // Résultat: 10
$nombre2 = ajouter5("Hello"); // Résultat: Erreur: La fonction attend un nombre
?>` },
        { type: "h", text: "Typer des fonctions" },
        { type: "p", text: "DEF : Indiquer quel type de valeur est attendu en entrée ou sortie de fonction." },
        { type: "code", filename: "php", language: "php", code: `<?php
function somme(int $nb1, int $nb2): int {
    return $nb1 + $nb2;
}

// Structure générale avec typage
function nomDeLaFonction(type1 $param1, type2 $param2): typeRetour {
    // Corps de la fonction
    return $valeur;
}
?>` },
        { type: "note", variant: "info", text: "Pour voir les informations des fonctions, il faut des extensions dans l'IDE (PHP Intelephense et PHP IntelliSense)." },
      ],
    },
    {
      id: "php-tableaux",
      title: "Tableaux",
      blocks: [
        { type: "code", filename: "php", language: "php", code: `<?php
// Déclaration avec []
$tableau = [];

// Déclaration avec fonction native array()
$tableau = array();
?>` },
        { type: "h", text: "Tableau classique" },
        { type: "p", text: "DEF : Contient plusieurs valeurs avec une clé correspondant à la position de la valeur." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Rappel: La première valeur est à la position 0
$tableau = ["pomme", "banane", "orange"];

// Je récupère et stocke la valeur orange dans une variable
$orange = $tableau[2];

// Tableau classique avec personnes
$personne1 = ["John", "Doe"];
$prenom1 = $personne1[0]; // "John"
?>` },
        { type: "h", text: "Tableau associatif" },
        { type: "p", text: "DEF : Contient une chaîne de caractères en guise de clé pour chaque valeur." },
        { type: "note", variant: "info", text: "La clé est toujours entre \"\" suivie de =>, chaque paire clé/valeur séparée par ," },
        { type: "code", filename: "php", language: "php", code: `<?php
// Tableau associatif
$personne2 = ['prenom' => "John", 'nom' => "Doe"];
$prenom2 = $personne2['prenom']; // "John"
?>` },
      ],
    },
    {
      id: "php-html-css-fichiers",
      title: "Manipuler le HTML et le CSS dans des fichiers PHP",
      blocks: [
        { type: "list", items: [
          "Déclarer le HTML et du CSS dans les fichiers d'extension .php, mais aussi exprimer des expressions PHP directement dans la structure HTML",
          "C'est PHP qui décide du code HTML qui sera généré et envoyé au client à chaque fois",
        ]},
        { type: "code", filename: "index.php", language: "php", code: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Exemple</title>
</head>
<body>
    <main>
        <div>
            <?php
            $isconnected = true; // Imaginez que cette valeur vient d'un paramètre de l'URL
            $name = "Robert"; // Imaginez que cette valeur vient d'un paramètre de l'URL
            if ($isconnected){
                echo("Bonjour".$name);
            }
            else{
                echo("Bonjour");
            }
            ?>
        </div>
    </main>
</body>
</html>` },
      ],
    },
    {
      id: "php-debogage-commentaires",
      title: "Débogage et commentaires",
      blocks: [
        { type: "h", text: "Syntaxe var_dump()" },
        { type: "code", filename: "php", language: "php", code: `<?php
var_dump($variable);

// Exemple
$nom = "Kat";
var_dump($nom);
?>` },
        { type: "h", text: "Commentaires" },
        { type: "code", filename: "php", language: "php", code: `<?php
// Une ligne

/*Plusieurs
lignes*/

/*
---------------------
Bloc en-tête
---------------------
*/

// Idéalement en Anglais !
?>` },
      ],
    },

    // ── PARTIE 3 : PROGRAMMATION ORIENTÉE OBJET (POO) ────────────────────
    {
      id: "php-poo-structurer-objets",
      title: "Structurer des objets",
      blocks: [
        { type: "p", text: "DEF : Un objet est un stockage d'informations dans une variable qui contient des propriétés (informations dédiées) et des méthodes (actions)." },
        { type: "p", text: "Chaque chose est considérée comme un objet en développement (utilisateur, panier, etc.)" },
        {
          type: "diagram",
          content: `Exemple d'objet :

Voiture ──────────────────► Objet
├── nbr chevaux ──────────► Propriété
├── couleur ──────────────► Propriété
├── rouler() ─────────────► Méthode (action)
├── freiner() ────────────► Méthode (action)
└── activer les clignotants() ► Méthode (action)`,
        },
      ],
    },
    {
      id: "php-poo-creer-objet",
      title: "Créer un objet — La classe",
      blocks: [
        { type: "p", text: "Il faut utiliser des classes pour créer un objet." },
        { type: "p", text: "DEF (classe) : Modèle sur lequel le langage s'appuie pour créer un objet, un peu comme un moule ou plan permettant de fabriquer l'objet où l'on ajoute à l'intérieur les infos nécessaires." },
        { type: "list", items: ["1. Créer une classe dans un fichier ayant le même nom (ex: chien.php)"] },
        { type: "code", filename: "chien.php", language: "php", code: `<?php
class NomClasse {
    // Déclaration d'attributs et méthodes (type de fonction)
}
?>` },
        { type: "list", items: ["2. Devant chaque propriété ou méthode, utiliser le terme public ou private qui définit la visibilité"] },
        { type: "code", filename: "chien.php", language: "php", code: `<?php
class Chien {
    public $age = 5;
    private $nom = "Pepper";

    public function aboie() {
        echo "Ouaf Ouaf";
    }
}
?>` },
        { type: "list", items: ["3. Pour utiliser la classe, on stocke l'appel dans une variable"] },
        { type: "code", filename: "php", language: "php", code: `<?php
// Instanciation d'un nouvel objet Chien
$chien = new Chien();

// Affichage de l'objet
var_dump($chien);
// object(Chien)#1 (2) { ["nom":"Chien":private]=> string(6) "Pepper" ["age"]=> int(5) }
?>` },
        { type: "h", text: "La visibilité" },
        { type: "p", text: "DEF : Importante lors du travail à plusieurs pour indiquer l'action sur les classes, et aussi obligatoire pour éviter des erreurs d'affichages causées par le serveur." },
        { type: "table", headers: ["Visibilité", "Utilisation"], rows: [
          ["Public", "La propriété ou méthode est utilisable partout dans le code à partir de l'objet créé"],
          ["Private", "La propriété ou méthode n'est utilisable que dans la classe où elle est définie"],
          ["Protected", "La propriété ou méthode n'est utilisable que dans la classe où elle est définie et dans les classes enfants"],
        ]},
        { type: "note", variant: "info", text: "Les méthodes sont considérées comme public par défaut." },
      ],
    },
    {
      id: "php-poo-utiliser-objet",
      title: "Utiliser un objet",
      blocks: [
        { type: "h", text: "Accéder à une propriété publique de l'objet" },
        { type: "p", text: "DEF : Propriétés ayant la visibilité public depuis mes objets." },
        { type: "list", items: ["Utiliser -> qui indique que je veux l'accès à un élément défini dans la classe à partir d'un objet créé depuis cette classe"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Utilisateur {
    public $prenom;
}

// Instanciation de l'objet
$user = new Utilisateur();

// Affectation d'une valeur à la propriété publique
$user->prenom = "Kat";

// Accès à la propriété pour l'afficher
echo $user->prenom; // Affiche : Kat
?>` },
        { type: "note", variant: "info", text: "On n'utilise pas $ devant le nom de la propriété lorsqu'on utilise l'opérateur ->" },
        { type: "note", variant: "warning", text: "Laisser des propriétés de classes accessibles directement depuis l'extérieur de la classe ainsi que de mettre à jour leur valeur de cette façon, sont considérés comme une mauvaise pratique." },
        { type: "note", variant: "info", text: "Protéger les propriétés de classe avec au MINIMUM la visibilité protected et pour chaque propriété, déclarer une méthode pour que l'objet puisse y accéder (accesseur) et une autre méthode pour qu'il puisse modifier la valeur de cette propriété (mutateur)." },
        { type: "note", variant: "success", text: "Bonne pratique : Sécuriser les propriétés d'un objet en déclarant toutes les propriétés en private et créer des accesseurs et mutateurs pour chacune d'entre elles." },
        { type: "h", text: "Accéder à une méthode de l'objet à l'extérieur de la classe" },
        { type: "list", items: ["Utiliser -> pour accéder à la méthode de l'objet"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Chien {
    public function aboyer() {
        return "Wouf !";
    }
}

// Création d'un objet (instanciation)
$chien = new Chien();

// Appel d'une méthode depuis l'extérieur de la classe
echo $chien->aboyer();

class Utilisateur {
    public function direBonjour() {
        echo "Bonjour !";
    }
}

// Instanciation (création) de l'objet
$user = new Utilisateur();

// Appel de la méthode depuis l'extérieur de la classe
$user->direBonjour(); // Affiche : Bonjour !
?>` },
        { type: "h", text: "Accéder à une méthode de l'objet à l'intérieur de la classe" },
        { type: "list", items: ["Utiliser $this-> pour accéder à la méthode de l'objet depuis l'intérieur"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Robot {
    public $nom;

    // Méthode qui affiche le nom du robot
    public function parler() {
        echo "Bonjour, je suis " . $this->nom . ".";
    }

    // Méthode qui utilise une autre méthode via $this
    public function sePresenter() {
        echo "Présentation : ";
        $this->parler(); // $this désigne l'objet courant
    }
}

// Création (instancier) les deux objets Robot
$robot1 = new Robot();
$robot1->nom = "R2-D2";

$robot2 = new Robot();
$robot2->nom = "C-3PO";

// Appel de la méthode sePresenter() sur chaque objet
$robot1->sePresenter(); // Affiche : Présentation : Bonjour, je suis R2-D2.
echo "\\n";
$robot2->sePresenter(); // Affiche : Présentation : Bonjour, je suis C-3PO.
?>` },
        { type: "h", text: "Accéder à une propriété protégée avec un accesseur (Getter)" },
        { type: "p", text: "DEF : Permet d'accéder à la valeur d'une propriété qui est visible en protected ou private via une méthode getter." },
        { type: "list", items: ["Modifier la visibilité de la propriété (ici age) en protected ou private et déclarer la méthode qui commencera par le suffixe get + NomPropriété"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Chien {
    protected $age = 5;
    private $nom = "Pepper";

    public function aboie() {
        echo "Ouaf Ouaf";
    }

    public function getAge() {
        return $this->age;
    }
}
?>` },
        { type: "p", text: "La méthode renvoie la valeur au programme. Pour appeler la méthode :" },
        { type: "code", filename: "php", language: "php", code: `<?php
echo $chien->getAge();
?>` },
        { type: "h", text: "Modifier la valeur d'une propriété protégée avec un mutateur (Setter)" },
        { type: "p", text: "DEF : Permet de modifier la valeur d'une propriété déclarée en protected ou private via la méthode Setter." },
        { type: "list", items: ["Modifier la valeur de la propriété (ici age) avec la méthode qui commencera par le suffixe set + NomPropriété"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Chien {
    protected $age = 5;
    private $nom = "Pepper";

    public function aboie() {
        echo "Ouaf Ouaf";
    }

    public function getAge() {
        return $this->age;
    }

    public function setAge($age) {
        $this->age = $age;
        return $this;
    }
}
?>` },
        { type: "p", text: "La méthode setAge() affecte à la propriété de l'objet la valeur passée en paramètre et la retourne au programme :" },
        { type: "code", filename: "php", language: "php", code: `<?php
echo $chien->setAge(6);
?>` },
        { type: "note", variant: "info", text: "Déclarer les Getters et Setters avec les extensions de l'IDE : permet l'automatisation pour la déclaration des Getters et des Setters. Il faut installer l'extension Setters&Getters." },
        { type: "note", variant: "info", text: "Pour accéder aux constantes ou aux propriétés et méthodes déclarées en static d'une classe : https://www.php.net/manual/fr/language.oop5.paamayimnekudotayim.php" },
      ],
    },
    {
      id: "php-poo-heritage",
      title: "Héritage",
      blocks: [
        { type: "p", text: "DEF : Permet de créer une classe (parent) contenant des propriétés et méthodes utilisables par d'autres classes (enfants), donc éviter la duplication du code. Le concept d'héritage est lié directement à la POO." },
        { type: "code", filename: "php", language: "php", code: `<?php
// Classe Parent
class ParentClass {
    // Propriétés
    // Méthodes
}

// Classe enfant héritée
class EnfantClass extends ParentClass {
    // Nouvelles propriétés ou méthodes
    // Redéfinition (surcharge) si nécessaire
}

// Dans index.php
require "ParentClass.php";
?>` },
        {
          type: "diagram",
          content: `Schéma d'héritage :

        ┌──────────────────┐
        │    Mammifere     │  ← Classe PARENT
        │  $nom, $age      │
        │  setNom(), setAge│
        └────────┬─────────┘
                 │ extends
        ┌────────┴─────────┐
        │                  │
   ┌────▼────┐        ┌────▼────┐
   │  Chien  │        │  Chat   │  ← Classes ENFANTS
   │ aboie() │        │ miaule()│
   └─────────┘        └─────────┘`,
        },
        { type: "h", text: "Création de la classe parent" },
        { type: "list", items: [
          "1. Créer la classe parent (Mammifere) qui récupère les propriétés communes aux 2 classes enfant",
          "2. Ajouter des méthodes (setAge et setNom) pour associer des valeurs aux propriétés",
        ]},
        { type: "code", filename: "php", language: "php", code: `<?php
class Mammifere {
    protected $nom;
    public $age;

    public function setNom(string $nom) {
        $this->nom = $nom;
    }

    public function setAge(int $age) {
        $this->age = $age;
    }
}
?>` },
        { type: "list", items: ["3. Indiquer aux classes enfant qu'un parent leur est attribué via extends ClassParent"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Chat extends Mammifere {
    public function miaule() {
        echo $this->nom . " crie: Miaou!";
    }
}
?>` },
        { type: "list", items: [
          "4. Retirer les setters, getters et propriétés de l'objet chien",
          "5. Dans le fichier index.php à la racine du projet, charger les classes, instancier Chien et Chat, associer des valeurs aux propriétés",
        ]},
        { type: "code", filename: "index.php", language: "php", code: `<?php
require "Mammifere.php";
require "Chat.php";
require "Chien.php";

// On crée un chien et un chat
$chat = new Chat();
$chien = new Chien();

// On attribue des informations au chat
$chat->setNom("Croquette");
$chat->setAge(3);

// On compare le chien et le chat
var_dump($chat);
var_dump($chien);
?>` },
        { type: "h", text: "La visibilité protected" },
        { type: "p", text: "DEF : Permet à une propriété ou méthode d'être accessible uniquement dans la classe parent et dans ses classes enfants, donc protéger les infos de l'extérieur en gardant l'héritage." },
        { type: "list", items: ["Utiliser $this->... pour permettre à une classe enfant d'accéder à une propriété protégée déclarée dans la classe parent"] },
        { type: "code", filename: "php", language: "php", code: `<?php
class Animal { // Classe Parent
    // Propriété protégée
    protected $nom = "Inconnu";

    // Méthode protégée
    protected function afficherNom() {
        echo "Nom : " . $this->nom;
    }
}

class Chat extends Animal { // Classe enfant
    // Méthode publique accessible depuis l'extérieur
    public function presenter() {
        // J'accède à la propriété protégée de la classe parent
        $this->nom = "Minette";
        // J'utilise la méthode protégée de la classe parent
        $this->afficherNom();
    }
}

$chat = new Chat();
$chat->presenter(); // OK → Affiche : Nom : Minette

// Ces deux lignes généreraient une erreur :
// echo $chat->nom;        // Erreur : propriété protégée
// $chat->afficherNom();   // Erreur : méthode protégée
?>` },
      ],
    },
    {
      id: "php-poo-structurer-heritage",
      title: "Structurer un projet avec l'héritage",
      blocks: [
        { type: "h", text: "Classer les classes" },
        { type: "list", items: [
          "Chaque classe a son fichier",
          "L'ensemble des classes liées sont dans un dossier dédié",
        ]},
        { type: "diagram", content: `Exemple structure dossier Animaux :

Animaux/
├── Chat.php
├── Chien.php
└── Mammifere.php
index.php` },
        { type: "note", variant: "info", text: "Penser à modifier les require pour qu'ils correspondent." },
        { type: "h", text: "Regrouper une méthode commune dans la classe parent" },
        { type: "p", text: "DEF : Évite la duplication et impose une structure claire, en plaçant cette méthode dans la classe parent." },
        { type: "list", items: ["Utiliser la méthode abstract, qui ne contient pas de code dans le parent"] },
        { type: "code", filename: "php", language: "php", code: `<?php
abstract class Mammifere {
    // Méthode abstraite : impose aux enfants d'implémenter leur propre cri()
    abstract public function cri();
}

class Chat extends Mammifere {
    public function cri() {
        echo "Miaou";
    }
}

class Chien extends Mammifere {
    public function cri() {
        echo "Aboie";
    }
}
// (Ici les 2 méthodes correspondent au même comportement : le cri de l'animal)
?>` },
        { type: "note", variant: "warning", text: "Une classe abstraite ne peut pas être instanciée. Elle est donc utile que dans l'héritage pour forcer l'implémentation de méthodes spécifiques que chaque enfant devra définir." },
      ],
    },
    {
      id: "php-api-reflexivite",
      title: "L'API de réflexivité",
      blocks: [
        { type: "p", text: "DEF : Permet l'introspection de classes, interfaces, fonctions et méthodes et offre la possibilité de récupérer les commentaires de documentation. Permet de récupérer les informations d'une classe." },
        { type: "list", items: [
          "Présente dans divers langages",
          "Utilisée pour automatiser certaines fonctionnalités telles qu'appeler une même méthode de différentes classes",
        ]},
        { type: "note", variant: "info", text: "Documentation : https://www.php.net/manual/en/book.reflection.php" },
        { type: "h", text: "La classe ReflectionClass" },
        { type: "p", text: "DEF : Permet de récupérer les infos d'une classe, d'étudier les méthodes ou la documentation de la classe." },
        { type: "code", filename: "php", language: "php", code: `<?php
// On charge le modèle
require "Model/postModel.php";

// On utilise ReflectionClass pour récupérer les informations du modèle
$reflection = new ReflectionClass('PostModel');
var_dump($reflection);

// On récupère les méthodes du Model grâce à la réflexion
$methods = $reflection->getMethods(ReflectionMethod::IS_PUBLIC);

foreach ($methods as $method) {
    echo $method->name;
}

// On récupère la documentation de la classe
$doc = $reflection->getDocComment();
echo $doc;
?>` },
        { type: "h", text: "La classe ReflectionObject" },
        { type: "p", text: "DEF : Hérite de ReflectionClass, permet de récupérer les informations d'un objet avec l'instanciation obligatoire de la classe pour obtenir l'objet." },
        { type: "code", filename: "php", language: "php", code: `<?php
// On charge le modèle
require "Model/postModel.php";

// On utilise ReflectionObject pour récupérer les informations d'un objet instancié
$reflection = new ReflectionObject($model);
var_dump($reflection);

// On récupère les méthodes du Model grâce à la réflexion
$methods = $reflection->getMethods(ReflectionMethod::IS_PUBLIC);

foreach ($methods as $method) {
    echo $method->name . '<br />';
}

// On récupère la documentation de la classe
$doc = $reflection->getDocComment();
echo $doc;
?>` },
        { type: "h", text: "La classe ReflectionProperty" },
        { type: "p", text: "DEF : Choisie lors d'utilisation de méthodes getProperties() et getProperty() sur une réflexion de classe. Elle peut aussi être appelée afin d'obtenir des informations sur les propriétés des classes (connaître visibilité, récupérer des commentaires…)." },
        { type: "code", filename: "php", language: "php", code: `<?php
// On charge le modèle
require "Model/postModel.php";

// On récupère un tableau d'objets ReflectionProperty
$properties = $reflection->getProperties();

foreach ($properties as $property) {
    echo "La valeur de la propriété " .
        $property->name .
        " est: " .
        $property->getValue() .
        ".";
}
?>` },
        { type: "h", text: "La classe ReflectionMethod" },
        { type: "p", text: "DEF : Permet de récupérer les méthodes d'une classe grâce à la méthode getMethods() qui retourne un tableau d'objets." },
      ],
    },
    {
      id: "php-design-patterns",
      title: "Design Patterns",
      blocks: [
        { type: "p", text: "DEF : Description ou modèle pour résoudre un problème que les développeurs rencontrent lors du développement." },
        { type: "h", text: "Le design pattern en POO" },
        { type: "p", text: "DEF : Ce sont les meilleures pratiques pour les applications orientées objets." },
        { type: "list", items: [
          "Ils sont à adapter au code : un design pattern peut être implémenté de multiples façons",
          "Il existe plus d'une vingtaine de design patterns classés en trois catégories",
        ]},
        {
          type: "diagram",
          content: `Les 3 catégories de Design Patterns :

┌───────────────────────────────────────────────────────────┐
│                     DESIGN PATTERNS                       │
├─────────────────┬─────────────────┬───────────────────────┤
│  CRÉATION       │  STRUCTURE      │  COMPORTEMENT         │
│                 │                 │                       │
│ • Factory       │ • Adaptateur    │ • Itérateur           │
│ • Singleton     │ • Décorateur    │ • Observer            │
│ • Builder       │ • Façade        │ • Strategy            │
│ • Prototype     │ • Composite     │ • Command             │
└─────────────────┴─────────────────┴───────────────────────┘`,
        },
        { type: "h", text: "Catégorie modèles de création" },
        { type: "p", text: "DEF : Permet de créer des objets tout en cachant la logique de création plutôt que d'instancier des objets directement à l'aide de l'opérateur new." },
        { type: "h", text: "Design pattern Factory" },
        { type: "p", text: "DEF : Remplace les appels à la construction d'objets via new par l'appel d'une méthode spécifique d'une classe." },
        { type: "list", items: [
          "La classe chargée de cette responsabilité s'appelle Factory (usine) et les objets créés Products (produits)",
          "Ce design passe par l'utilisation des interfaces — considérer une interface comme un contrat que l'on passe avec les classes",
        ]},
        { type: "code", filename: "php", language: "php", code: `<?php
interface Animal {
    public function adopt();
}

class Dog implements Animal {
    public function adopt() {
        // Code ici
    }
}

class Cat implements Animal {
    public function adopt() {
        // Code ici
    }
}

interface AnimalFactory {
    public function generateAnimal();
}

abstract class AbstractAnimalFactory implements AnimalFactory {
    abstract public function generateAnimal();

    final public function adoptAtHome() {
        return $this->generateAnimal()->adopt();
    }
}

class DogAnimalFactory {
    public function generateAnimal() {
        return new Dog();
    }
}
?>` },
        { type: "note", variant: "info", text: "Le système d'adoption est complètement indépendant de chaque animal avec l'ajout infini d'animaux. Pour cela, créer deux nouvelles classes : l'animal et son handler, dont il faudra seulement implémenter la méthode generateAnimal()." },
        { type: "h", text: "Catégorie modèles de structure" },
        { type: "p", text: "DEF : Concernent la composition des classes et des objets. Le concept d'héritage est utilisé pour composer des interfaces et définir des façons de composer des objets pour obtenir de nouvelles fonctionnalités." },
        { type: "h", text: "Design pattern Adaptateur" },
        { type: "p", text: "DEF : Permet d'utiliser des classes externes ou héritées même si elles ne sont pas vraiment compatibles avec votre code." },
        { type: "code", filename: "php", language: "php", code: `<?php
namespace RefactoringGuru\\Adapter\\RealWorld;

// L'interface cible représente l'interface que la class cible
interface Notification {
    public function send(string $title, string $message);
}

// Voici un exemple de classe existante qui suit l'interface ciblée
class EmailNotification implements Notification {
    private $adminEmail;

    public function __construct(string $adminEmail) {
        $this->adminEmail = $adminEmail;
    }

    public function send(string $title, string $message): void {
        mail($this->adminEmail, $title, $message);
        echo "Sent email with title '$title' to '{$this->adminEmail}' that says '$message'.";
    }
}

// La classe adaptée est incompatible avec l'interface cible
class SlackApi {
    private $login;
    private $apiKey;

    public function __construct(string $login, string $apiKey) {
        $this->login = $login;
        $this->apiKey = $apiKey;
    }

    public function logIn(): void {
        echo "Logged in to a slack account '{$this->login}'.\\n";
    }

    public function sendMessage(string $chatId, string $message): void {
        echo "Posted following message into the '$chatId' chat: '$message'.\\n";
    }
}

// L'adaptateur est la classe qui lie l'interface cible et la class adaptée
class SlackNotification implements Notification {
    private $slack;
    private $chatId;

    public function __construct(SlackApi $slack, string $chatId) {
        $this->slack = $slack;
        $this->chatId = $chatId;
    }

    public function send(string $title, string $message): void {
        $slackMessage = "#" . $title . "# " . strip_tags($message);
        $this->slack->logIn();
        $this->slack->sendMessage($this->chatId, $slackMessage);
    }
}

// Le code client peut fonctionner avec n'importe quelle classe qui suit l'interface cible
function clientCode(Notification $notification) {
    echo $notification->send("Website is down!",
        "<strong style='color:red;font-size: 50px;'>Alert!</strong> " .
        "Our website is not responding. Call admins and bring it up!");
}

echo "Client code is designed correctly and works with email notifications:\\n";
$notification = new EmailNotification("developers@example.com");
clientCode($notification);
echo "\\n\\n";

echo "The same client code can work with other classes via adapter:\\n";
$slackApi = new SlackApi("example.com", "XXXXXXXX");
$notification = new SlackNotification($slackApi, "Example.com Developers");
clientCode($notification);
?>` },
        { type: "h", text: "Catégorie modèles de comportement" },
        { type: "p", text: "DEF : Concernent la communication entre les objets." },
        { type: "h", text: "Design pattern Itérateur" },
        { type: "p", text: "DEF : Simplifie le défilement des éléments et de passer de l'un à l'autre dans un sens ou dans l'autre (lire l'alphabet à l'endroit ou à l'envers par exemple)." },
        { type: "code", filename: "php", language: "php", code: `<?php
namespace RefactoringGuru\\Iterator\\Conceptual;

class AlphabeticalOrderIterator implements \\Iterator {
    private $collection;
    private $position = 0;
    private $reverse = false;

    public function __construct($collection, $reverse = false) {
        $this->collection = $collection;
        $this->reverse = $reverse;
    }

    public function rewind() {
        $this->position = $this->reverse ?
            count($this->collection->getItems()) - 1 : 0;
    }

    public function current() {
        return $this->collection->getItems()[$this->position];
    }

    public function key() {
        return $this->position;
    }

    public function next() {
        $this->position = $this->position + ($this->reverse ? -1 : 1);
    }

    public function valid() {
        return isset($this->collection->getItems()[$this->position]);
    }
}

class WordsCollection implements \\IteratorAggregate {
    private $items = [];

    public function getItems() {
        return $this->items;
    }

    public function addItem($item) {
        $this->items[] = $item;
    }

    public function getIterator(): Iterator {
        return new AlphabeticalOrderIterator($this);
    }

    public function getReverseIterator(): Iterator {
        return new AlphabeticalOrderIterator($this, true);
    }
}

$collection = new WordsCollection();
$collection->addItem("First");
$collection->addItem("Second");
$collection->addItem("Third");

echo "Straight traversal:\\n";
foreach ($collection->getIterator() as $item) {
    echo $item . "\\n";
}

echo "\\n";
echo "Reverse traversal:\\n";
foreach ($collection->getReverseIterator() as $item) {
    echo $item . "\\n";
}
?>` },
        { type: "note", variant: "info", text: "Référence complète : https://refactoring.guru/design-patterns/catalog — Lire le livre « La tête dans les design pattern » d'Eric Freeman" },
      ],
    },
    {
      id: "php-mvc",
      title: "Organiser le code avec le modèle MVC",
      blocks: [
        { type: "p", text: "DEF : Consiste à diviser le code en 3 parties." },
        {
          type: "diagram",
          content: `Architecture MVC :

  Utilisateur (navigateur)
       │  Requête HTTP
       ▼
  ┌──────────┐
  │  Routeur │ ← Lit l'URL, charge le bon contrôleur
  └────┬─────┘
       │
       ▼
  ┌────────────┐
  │ Contrôleur │ ← Logique métier, fait le lien Vue ↔ Modèle
  └──┬──────┬──┘
     │      │
     ▼      ▼
 ┌──────┐ ┌──────┐
 │  Vue │ │Modèle│ ← Requêtes SQL / BDD
 └──────┘ └──────┘
     │
     ▼
  Réponse HTML au navigateur`,
        },
        { type: "p", text: "Les vues contiennent les templates des pages. Les modèles contiennent les fonctions qui communiquent avec la base de données. Le contrôleur relie les vues et les modèles par le traitement des données transitant." },
        { type: "p", text: "Il y a aussi 2 autres types d'éléments à prendre en compte dans une MVC POO : le routeur et l'autoloader." },
        { type: "h", text: "Isoler le modèle et la vue" },
        { type: "p", text: "DEF : C'est diviser le côté appel à la BDD qui est réservé au modèle et le côté affichage réservé à la vue. Utiliser pour respecter les standards mais aussi sécuriser le fichier." },
        { type: "h", text: "Isoler la vue" },
        { type: "p", text: "On change la boucle while en une boucle foreach pour plus de facilité." },
        { type: "list", items: ["1. Dans le fichier index.php ajouter la vue"] },
        { type: "code", filename: "index.php", language: "php", code: `<?php
// On teste la connexion à la base de données
try {
    $bdd = new PDO('mysql:host=localhost:8889;dbname=blog;charset=utf8', 'root', 'root');
} catch (Exception $e){
    die('Erreur : '.$e->getMessage());
}

// On récupère les articles
$req = $bdd->query('SELECT * FROM posts');
$posts = $query->fetchAll();

require "templates/home.php";
?>` },
        { type: "list", items: ["2. Dans le templates/home.php ajouter le code HTML"] },
        { type: "code", filename: "templates/home.php", language: "php", code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>Superblog</title>
    <link href="style.css" rel="stylesheet" />
</head>
<body>
    <h1>Mon superblog</h1>
    <p>Retrouvez tous nos articles</p>

    <?php foreach ($posts as $post): ?>
        <div class="news">
            <h3><?php echo $post['title']; ?></h3>
            <p><?php echo $post['contenu']; ?></p>
        </div>
    <?php endforeach; ?>
</body>
</html>` },
        { type: "note", variant: "info", text: "Un fichier template peut être en .php ou .phtml mais pas en .html." },
        { type: "h", text: "Isoler le modèle" },
        { type: "p", text: "DEF : C'est la partie du code qui est dédiée pour interagir avec une base de données." },
        { type: "list", items: ["1. Dans le dossier model/postModel.php"] },
        { type: "code", filename: "model/postModel.php", language: "php", code: `<?php
function getPosts() {
    // On teste la connexion à la base de données
    try {
        $bdd = new PDO(
            'mysql:host=localhost:8889;dbname=blog;charset=utf8',
            'root',
            'root'
        );
    } catch (\\Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }

    // On récupère les articles
    $query = $bdd->query('SELECT * FROM posts');
    return $query->fetchAll();
}
?>` },
        { type: "list", items: ["2. Dans le fichier index.php"] },
        { type: "code", filename: "index.php", language: "php", code: `<?php
// On charge le modèle
require "Model/postModel.php";
// On appelle la fonction getPosts et on stocke les résultats dans une variable $posts
$posts = getPosts();
// On charge le template de la page d'accueil
require "templates/home.php";
?>` },
        { type: "h", text: "Réorganiser postModel" },
        { type: "p", text: "DEF : Pour que d'autres modèles qui ont besoin de la connexion à la BDD puissent avoir l'accès." },
        { type: "list", items: ["1. Dans un fichier Core/database.php pour la connexion à la base de données"] },
        { type: "code", filename: "Core/database.php", language: "php", code: `<?php
function connection() {
    try {
        $bdd = new PDO(
            'mysql:host=localhost:8889;dbname=blog;charset=utf8',
            'root',
            'root'
        );
        return $bdd;
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
}
?>` },
        { type: "list", items: ["2. Dans un fichier Core/defaultModel.php pour la fonction générique de récupération des informations"] },
        { type: "code", filename: "Core/defaultModel.php", language: "php", code: `<?php
require "Database.php";

function findAll($stmt) {
    // On charge la connexion à la base de données
    $bdd = connection();
    // On exécute notre requête sql récupérée en paramètre
    $query = $bdd->query($stmt);

    $result = $query->fetchAll();

    if ($result) {
        // On retourne le résultat
        return $result;
    } else {
        die("Une erreur s'est produite lors de la récupération des données");
    }
}
?>` },
        { type: "list", items: ["3. Dans le fichier model/postModel.php, la refactorisation est enfin complète !"] },
        { type: "code", filename: "model/postModel.php", language: "php", code: `<?php
require "../Core/defaultModel.php";

function getPosts() {
    // On passe la requête SQL à la fonction
    // et on retourne le résultat
    return findAll('SELECT * FROM posts');
}
?>` },
        { type: "h", text: "L'architecture MVC — Le contrôleur" },
        { type: "p", text: "DEF : Fichier qui contient toute la logique métier. Il fait le lien entre les vues et les modèles, pour traiter les informations à passer, pour charger les pages, etc." },
        { type: "list", items: [
          "Contient souvent une méthode par page (méthode home, login, logout, etc.)",
          "Un contrôleur aura toujours le terme Controller dans le nom de fichier",
        ]},
        { type: "code", filename: "UserController.php", language: "php", code: `<?php
class UserController {
    public function login() {
        // Code de connexion ici
    }

    public function signup() {
        // Code d'inscription ici:
        // On reçoit les données du formulaire de la vue
        // On sécurise ces données
        // On les envoie vers le modèle
    }
}
?>` },
        { type: "h", text: "Le routeur" },
        { type: "p", text: "DEF : Permet de charger la bonne page en fonction de l'URL." },
        { type: "list", items: [
          "L'utilisateur arrive sur la page index.php et reste toujours sur cette page (mais il ne le sait pas)",
          "Cette page charge le routeur qui va regarder l'URL et, en fonction, charger le contrôleur adéquat",
        ]},
        { type: "code", filename: "php", language: "php", code: `<?php
require_once('App/Controller/UserController.php');
require_once('App/Controller/HomeController.php');

if (isset($_GET['action']) && $_GET['action'] !== '') {
    if ($_GET['action'] === 'login') {
        $controller = new UserController();
        $controller->login();
    } else {
        echo "Erreur 404 : la page que vous recherchez n'existe pas.";
    }
} else {
    $controller = new HomeController();
    $controller->home();
}
?>` },
        { type: "h", text: "L'autoloader" },
        { type: "p", text: "DEF : Permet de charger les classes à ma place. Cela évite de devoir faire des require à chaque fois que vous avez besoin d'un fichier." },
        { type: "list", items: ["Utiliser la fonction spl_autoload_register() qui chargera automatiquement la méthode autoload dès que le script lira une instanciation de classe"] },
        { type: "code", filename: "Autoloader.php", language: "php", code: `<?php
/**
 * Class d'autoloader chargeant toutes les class des services
 */
class Autoloader {
    /**
     * require la class appelée
     */
    public static function autoload($class) {
        $class = str_replace('\\\\', '/', $class);
        require ROOT . '/' . $class . '.php';
    }

    /**
     * Récupère et passe le chemin de la class à appeler
     */
    public static function register() {
        spl_autoload_register(array(__CLASS__, 'autoload'));
    }
}
?>` },
        { type: "note", variant: "info", text: "On peut utiliser l'autoloading de composer, c'est très pratique et encore plus utilisé. Documentation : https://www.codementor.io/@jadjoubran/php-tutorial-getting-started-with-composer-8sbn6fb6t" },
        { type: "h", text: "L'organisation des dossiers" },
        { type: "p", text: "DEF : Créer des sous-dossiers par section métier (un métier correspond à un élément principal du site)." },
        {
          type: "diagram",
          content: `Structure MVC recommandée :

DECOUVERTE/
├── App/
│   ├── Controller/
│   │   ├── HomeController.php
│   │   └── UserController.php
│   └── Model/
│       └── postModel.php
├── Core/
│   ├── Database.php
│   └── DefaultModel.php
├── public/
│   └── index.php
├── Routeur/
│   └── Routeur.php
└── templates/
    └── home.php`,
        },
        { type: "list", items: [
          "Dans le projet se trouve /App contenant les fichiers sur lesquels on travaille — les contrôleurs et les modèles",
          "Le cœur de l'architecture est dans /Core",
          "Le point d'entrée dans /public",
          "Les pages de l'application dans /templates",
        ]},
        { type: "note", variant: "info", text: "Exemple de section métier : Toutes les pages liées à l'utilisateur seront rattachées au métier user → on peut donc avoir un dossier user dans /templates." },
      ],
    },
    {
      id: "php-namespaces",
      title: "Les namespaces",
      blocks: [
        { type: "p", text: "DEF : Permettent d'avoir des classes au nom identique si ces classes sont dans des espaces différents (un peu comme des dossiers)." },
        { type: "list", items: ["Reprendre les noms des dossiers à parcourir pour atteindre la classe, chaque nom étant séparé par un backslash \\"] },
        { type: "p", text: "Si on veut atteindre UserController, on indiquera son namespace App\\Controller" },
        { type: "note", variant: "warning", text: "Le namespace doit toujours être la première ligne de code PHP dans le fichier, sinon une erreur vous sera retournée." },
        { type: "code", filename: "UserController.php", language: "php", code: `<?php
namespace App\\Controller;

class UserController {
    public function login() {
        // Code de connexion ici
    }

    public function signup() {
        // Code d'inscription ici:
        // On reçoit les données du formulaire de la vue
        // On sécurise ces données
        // On les envoie vers le modèle
    }
}
?>` },
        {
          type: "diagram",
          content: `Utilité des namespaces :

Sans namespace :
┌──────────┐   ┌──────────┐
│  Users   │ + │  Users   │  →  ✗ CONFLIT !
│  class   │   │  class   │
└──────────┘   └──────────┘

Avec namespace :
┌──────────┐   ┌──────────────────────┐
│  Users   │ + │  Users               │  →  ✓ OK
│  class   │   │  class (namespace B) │
└──────────┘   └──────────────────────┘
$exempleA = new \\A\\Exemple;
$exempleB = new \\B\\Exemple;`,
        },
        { type: "list", items: [
          "Dès qu'un nouveau namespace est déclaré, les classes suivantes dans le fichier seront dans ce dernier",
          "Pour faire référence à une classe en particulier, préfixe son nom par son espace de noms",
          "Quand on déclare un namespace, souvent on suit l'arborescence des répertoires de l'application (exemple, la classe MonObjet dont le fichier se trouve dans le sous /DB du /Model, utilise le namespace Model\\DB)",
        ]},
        { type: "note", variant: "info", text: "Normes PSR : https://www.php-fig.org/psr/" },
        { type: "h", text: "Isoler le point d'entrée de l'application et ses ressources" },
        { type: "list", items: [
          "Fichier nommé index.php, doit être isolé de la racine du projet",
          "/public contient le fichier index.php. Ainsi toutes les requêtes demandant l'accès à mon application passent par lui (soit directement dans la configuration du serveur d'hébergement ou via le fichier .htaccess à la racine)",
          "Dans /public, placer un nouveau fichier .htaccess pour y définir les droits d'accès",
        ]},
        { type: "h", text: "Un fichier pour une classe" },
        { type: "p", text: "DEF : Permet facilement de modifier ou déboguer le code qui m'intéresse." },
        { type: "note", variant: "success", text: "1 règle : UN fichier pour UNE classe." },
        { type: "p", text: "Nommer correctement les classes : choisir la convention de nommage. Les fichiers de classes commencent par une majuscule et prennent le nom de la classe qu'ils décrivent." },
        { type: "h", text: "L'autoloading" },
        { type: "p", text: "DEF : Permet à l'application de charger la bonne classe lorsqu'une instance de celle-ci est appelée." },
        { type: "list", items: [
          "Se trouve dans /vendor si j'initialise mon projet avec composer",
          "Documentation : https://getcomposer.org/doc/01-basic-usage.md#autoloading",
        ]},
      ],
    },
    {
      id: "php-traits",
      title: "Injecter du code dans une classe — Les traits",
      blocks: [
        { type: "h", text: "Le problème du diamant" },
        { type: "p", text: "Survient quand 2 classes B et C héritent d'une classe A, et qu'une classe D hérite de B et de C." },
        { type: "note", variant: "warning", text: "Mais en PHP une classe ne peut hériter que d'une seule classe mère." },
        {
          type: "diagram",
          content: `Problème du diamant :

        ┌───┐
        │ A │
        └─┬─┘
       ┌──┴──┐
     ┌─┴─┐ ┌─┴─┐
     │ B │ │ C │
     └─┬─┘ └─┬─┘
       └──┬──┘
        ┌─┴─┐
        │ D │  ← Impossible en PHP !
        └───┘`,
        },
        { type: "h", text: "L'usage des traits" },
        { type: "p", text: "DEF : Permet de réutiliser des méthodes dans des classes indépendantes. Cela étend l'héritage traditionnel. J'injecte du code dans une classe grâce à ce trait." },
        { type: "list", items: [
          "Se déclare comme une classe mais avec le mot clé trait",
          "Possède un nom, des propriétés, des méthodes",
          "Peut modifier la visibilité d'une méthode ou d'une propriété, créer des alias de méthodes et de propriétés et être composé de plusieurs autres traits",
          "Une classe peut être composée de nombreux traits",
          "Peut être utilisé par 2 classes sans rapport l'une avec l'autre",
          "Ne peut pas être instancié",
        ]},
        {
          type: "diagram",
          content: `Schéma Trait :

┌───────────────┐         ┌──────────────────────┐
│ Classe parente│         │ Classe B             │
│               │         │ ┌──────────────────┐ │
│ Classe A      │         │ │    Trait B        │ │
│ ┌───────────┐ │ ·····►  │ └──────────────────┘ │
│ │  Trait A  │ │         │                      │
│ ├───────────┤ │         │     ENFANT B         │
│ │  Trait B  │ ·····►    └──────────────────────┘
│ └───────────┘ │
└───────────────┘`,
        },
        { type: "h", text: "Le trait en pratique" },
        { type: "list", items: [
          "Un nouveau fichier pour chaque trait",
          "Inclus dans les classes qui le nécessitent",
        ]},
        { type: "code", filename: "Inventory.php", language: "php", code: `<?php
trait Inventory {
    protected $number;

    public function increment() {
        $this->number++;
        echo $this->number. '<br>';
        return $this;
    }
}
?>` },
        { type: "p", text: "Une fois déclaré, préciser via use que je veux l'utiliser dans une classe. Les classes utilisent toutes les deux la méthode increment() du trait." },
        { type: "code", filename: "Product.php", language: "php", code: `<?php
class Product {
    use Inventory;
    protected $name;

    public function __construct($n, $nb) {
        $this->name = $n;
        $this->number = $nb;
    }

    public function getNom() {
        echo $this->name;
    }
    // Vos autres méthodes...
}
?>` },
        { type: "p", text: "Un objet Product aura donc accès à la méthode increment() de cette manière." },
      ],
    },
    {
      id: "php-interfaces",
      title: "Utiliser des interfaces",
      blocks: [
        { type: "h", text: "Pourquoi utiliser des interfaces ?" },
        { type: "list", items: [
          "Pas d'écriture du code réel dans les méthodes",
          "Permet de spécifier des comportements communs à des classes possédant des rôles différents",
          "Elles sont proches des classes abstraites",
          "Elle peut contenir que les signatures des méthodes, éventuellement des constantes mais pas de propriétés",
          "Une classe implémente plusieurs interfaces alors qu'elle ne peut hériter de plusieurs classes abstraites",
        ]},
        { type: "h", text: "Interfaces ou classes abstraites ?" },
        {
          type: "diagram",
          content: `Comparatif Interface vs Classe Abstraite :

┌─────────────────────┬───────────────────┬─────────────────────┐
│                     │    INTERFACE      │  CLASSE ABSTRAITE   │
├─────────────────────┼───────────────────┼─────────────────────┤
│ Signatures méthodes │       ✓           │        ✓            │
│ Code dans méthodes  │       ✗           │        ✓            │
│ Propriétés          │       ✗           │        ✓            │
│ Constantes          │       ✓           │        ✓            │
│ Héritage multiple   │       ✓           │        ✗            │
├─────────────────────┼───────────────────┼─────────────────────┤
│ Quand l'utiliser ?  │ Méthodes communes │ Méthodes communes + │
│                     │ impl. différentes │ code partagé        │
└─────────────────────┴───────────────────┴─────────────────────┘`,
        },
        { type: "list", items: [
          "Quand plusieurs classes possèdent des similarités, opter pour une classe mère abstraite dans laquelle on implémente les méthodes communes",
          "Pour des classes qui implémentent les mêmes méthodes de manière différente, opter pour une interface et définir les signatures des méthodes communes. Chaque classe fille peut ensuite implémenter les méthodes à sa manière",
        ]},
        { type: "h", text: "L'interface en pratique" },
        { type: "p", text: "La déclarer avec le mot clé interface." },
        { type: "note", variant: "info", text: "La signature d'une méthode, c'est son nom, sa visibilité, ses arguments avec des types et un type de retour. Ne pas coder les accolades." },
        { type: "code", filename: "User.php", language: "php", code: `<?php
interface User {
    public const SUBSCRIPTION = 11;
    public function getName();
    public function setSubscriptionPrice();
    public function getSubscriptionPrice();
}
?>` },
        { type: "p", text: "Pour utiliser une interface, mes classes peuvent l'implémenter avec le mot clé implements et avoir obligatoirement surchargé les méthodes de l'interface." },
        { type: "code", filename: "Subscription.php", language: "php", code: `<?php
class Subscription implements User {
    protected $user_name;
    protected $user_region;
    protected $subsc_price;
    protected $user_pass;

    public function __construct($n, $p, $r) {
        $this->user_name = $n;
        $this->user_pass = $p;
        $this->user_region = $r;
    }

    public function getName() {
        echo $this->user_name;
    }

    public function getSubscriptionPrice() {
        echo $this->subsc_price;
    }

    public function setSubscriptionPrice() {
        if ($this->user_region === 'Sud') {
            return $this->subsc_price = User::SUBSCRIPTION / 2;
        } else {
            return $this->subsc_price = User::SUBSCRIPTION;
        }
    }
}
?>` },
        { type: "h", text: "La ségrégation des interfaces" },
        { type: "p", text: "DEF : Une interface par ensemble de méthodes inséparables. Le code doit avoir qu'un très faible couplage avec de vraies classes." },
        { type: "list", items: [
          "Faire en sorte que lorsqu'on utilise une interface, toutes les classes qui l'implémentent doivent surcharger et utiliser toutes les méthodes réclamées. Sinon, séparer les interfaces en entités plus petites et plus spécialisées",
          "Les interfaces peuvent servir comme type d'argument dans les méthodes",
        ]},
      ],
    },
    {
      id: "php-composer",
      title: "Composer",
      blocks: [
        { type: "p", text: "DEF : C'est un gestionnaire de dépendances. Symfony, en tant que framework, est composé d'une multitude de dépendances qui fonctionnent entre elles mais peuvent aussi fonctionner séparément." },
        { type: "list", items: [
          "Avant d'installer Symfony, faut installer Composer",
          "Un projet est créé grâce à Composer : composer create-project symfony/website-skeleton …",
          "Pour gérer une multitude de dépendances à mettre en place, c'est le rôle de Composer",
        ]},
        { type: "h", text: "Utiliser Composer" },
        { type: "code", filename: "terminal", language: "bash", code: `# Dans le terminal
composer

# Installer un projet
composer install

# Mettre à jour les dépendances
composer update

# Ajouter une dépendance
composer require` },
        { type: "h", text: "Les fichiers composer d'un projet" },
        { type: "list", items: [
          "composer.json et composer.lock sont importants pour le bon fonctionnement du projet. Permettent à Composer de savoir quelles sont les dépendances nécessaires et quelle version est utilisée",
          "On peut y trouver la version de PHP utilisée, la version de Symfony et les standards de PHP respectés",
          "Le dossier vendor contient tous les fichiers des dépendances",
          "Pour faire fonctionner le projet : composer install",
        ]},
        { type: "h", text: "Ajouter une dépendance" },
        { type: "list", items: [
          "Une grande bibliothèque est disponible en ligne sur le site packagist.org",
          "Exemple : intégrer une librairie de fausses données nommée fakerphp",
        ]},
        { type: "code", filename: "terminal", language: "bash", code: `composer require fakerphp/faker --dev` },
      ],
    },
    {
      id: "php-criteres-avantages-inconvenients",
      title: "Critères PHP — Avantages et inconvénients",
      blocks: [
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "Mise en ligne facile",
          "Framework solide et robuste",
          "Communauté importante",
          "Utilisé dans nombreux CMS",
          "Configuration basique rapide",
          "Documenté",
        ]},
        { type: "h", text: "Inconvénients" },
        { type: "list", items: [
          "Syntaxe parfois incohérente",
          "Sécurité",
          "Performance limitée pour applications complexes",
          "Orienté web seulement",
          "Conception non moderne",
          "Maîtrise difficile",
          "Délaissé dans les nouveaux projets",
        ]},
      ],
    },
    {
      id: "php-dynamiser-donnees",
      title: "Dynamiser les données des pages web",
      blocks: [
        {
          type: "diagram",
          content: `Site STATIQUE vs DYNAMIQUE :

STATIQUE :
  Navigateur → [Serveur Apache] → HTML fixe → Navigateur

DYNAMIQUE :
  Navigateur ──── Requête Http + paramètres ────► [PHP + Serveur]
                                                         │
                                                         ▼
                                                   [Base de données MySQL]
                                                   Selection / Ajout
                                                   Mise à jour / Suppression
                                                         │
  Navigateur ◄─── Réponse HTML, CSS, JS ────────────────┘`,
        },
        { type: "list", items: [
          "Un site statique a tout le contenu déclaré dans un fichier HTML",
          "Un site dynamique, l'utilisateur peut envoyer des informations dans sa requête et permettre à PHP d'adapter le contenu de la page",
          "Possible car PHP permet de communiquer avec une BDD en utilisant un système de gestion de base de données MySQL et le langage SQL",
          "Grâce aux requêtes SQL, PHP extrait des données spécifiques et alimente les pages du site",
          "MySQL enregistre des données de manière organisée et les rend disponibles quand le programme PHP a besoin (informations de profil d'un utilisateur, une liste de produits en vente, des messages postés sur un forum, etc.)",
        ]},
      ],
    },
    {
      id: "php-architecture-technique-site",
      title: "Créer et maintenir l'architecture technique d'un site",
      blocks: [
        { type: "p", text: "L'architecture d'un site web est composée de deux points essentiels : la hiérarchie de l'information, qui permet une meilleure compréhension de l'organisation du site par les moteurs de recherche (créer un diagramme d'architecture), et l'organisation du code, qui contribue à garder la meilleure structure possible pour réduire les bugs et améliorer la fluidité." },
        { type: "h", text: "Priorisation de l'information" },
        { type: "p", text: "Ce premier point concerne l'organisation des pages du site. Un site mal organisé aura un maillage interne faible — les robots des moteurs de recherche qui indexent le site baisseront son classement dans les résultats de recherche." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│        EXEMPLE D'ARCHITECTURE DE SITE — BLOG            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                        [Home]                           │
│                           │                             │
│              ┌────────────┼────────────┐               │
│              │            │            │               │
│         [Privacy      [Posts]      [Categories]        │
│          Policy]         │                │             │
│                    ┌─────┴─────┐    ┌────┴────┐        │
│                    │           │    │         │         │
│                  [Post]  [Most       [Category] [Contact]
│                          Recent]                        │
└─────────────────────────────────────────────────────────┘

Règle : Respecter cette architecture → les robots comprendront
et augmenteront votre score SEO.`,
        },
        { type: "note", variant: "info", text: "L'élément principal est la page d'accueil. Ensuite on a deux parties, Posts et Categories, et des pages finales : Privacy Policy, Post, Most Recent, Category et Contact us." },
        { type: "h", text: "Organisation du code" },
        { type: "p", text: "Le code doit être propre et bien documenté. Les architectures d'organisation du code incluent : l'architecture MVC, le clean code, et bien d'autres. Elles ont toutes un point commun : trier le code dans différents fichiers et dossiers." },
        { type: "h", text: "Refactorisation" },
        { type: "p", text: "Cette étape consiste à découper son code en fonctions." },
        { type: "list", items: [
          "Éviter la répétition → dès qu'il y a une répétition, une fonction est créée",
          "Cette fonction est stockée dans un fichier dédié (ex : functions.php)",
          "S'il y en a plusieurs, elles sont regroupées dans un fichier dédié selon le thème (ex : postFunctions.php)",
        ]},
        { type: "h", text: "L'organisation" },
        { type: "p", text: "Cela implique de créer des dossiers contenant :" },
        { type: "list", items: [
          "Les templates (le code HTML)",
          "Les fichiers dédiés aux articles",
          "Les fichiers pour les catégories",
          "Les liens vers la base de données",
          "etc.",
        ]},
        { type: "note", variant: "success", text: "Apprendre les différentes architectures de code, y compris MVC et le clean code. Bien maîtrisés rapidement, ces points seront un réel plus lors des entretiens d'embauche." },
      ],
    },
    {
      id: "php-ajouter-commentaires",
      title: "Ajouter des commentaires et typer son code PHP",
      blocks: [
        { type: "h", text: "Pourquoi commenter ?" },
        { type: "p", text: "Il faut garder un code clair et commenté car :" },
        { type: "list", items: [
          "On peut avoir à travailler à plusieurs sur un projet — il doit être clair pour tout le monde ce que l'on fait",
          "C'est particulièrement important quand on travaille sur des interfaces ou des classes destinées à être héritées",
          "Si on revient sur un projet plus tard, on peut se souvenir de ce qu'on a fait précédemment",
        ]},
        { type: "h", text: "Comment commenter" },
        { type: "p", text: "Il existe deux types de commentaires en PHP : les commentaires en ligne et les commentaires en bloc." },
        { type: "h", text: "Commentaires en ligne" },
        { type: "p", text: "Les commentaires en ligne sont des commentaires à insérer entre deux lignes de code. Ils n'ont aucun effet sur le code et servent à indiquer ce que fait la ligne suivante. Ils commencent toujours par 2 slashs //." },
        { type: "code", filename: "comment-ligne.php", language: "php", code: `// Un commentaire en ligne` },
        { type: "h", text: "Commentaires en bloc" },
        { type: "p", text: "Pour ces commentaires, il est recommandé d'installer l'extension VsCode \"PHP Docblocker\", qui permet de générer ces commentaires avec des raccourcis." },
        { type: "p", text: "Ces commentaires servent à donner des informations sur les propriétés, méthodes et classes (ainsi que les variables et fonctions). Ils sont représentés par /** */ et chaque ligne commence par une étoile." },
        { type: "code", filename: "classe-comment.php", language: "php", code: `/**
 * Controller comprenant toutes les pages liées aux utilisateurs
 *
 *@author John Doe<john@doe.fr>
 *@copyright2022Découverte
 *@categoryUser
 */
class UserController {` },
        { type: "p", text: "Pour une fonction :" },
        { type: "code", filename: "function-comment.php", language: "php", code: `/**
 * Fonction prenant un tableau en paramètre et le retournant
 *
 *@paramarray $param
 *@return array
 */
public function withParam($param)
{
    return $param;
}` },
        { type: "note", variant: "info", text: "En faisant un \"ctrl + click\" sur la fonction, on est amené à la fonction en question." },
        { type: "h", text: "Le typage" },
        { type: "p", text: "Le typage est une autre forme de commentaire. Il consiste à indiquer le type de valeur d'une propriété, le type d'un paramètre de fonction ou le type de retour d'une fonction. Le typage est apparu en PHP avec la version 8." },
        { type: "code", filename: "typage-propriete.php", language: "php", code: `/**
 * Propriété de UserController
 *
 *@varstring
 */
public string $property;

/**
 * Fonction prenant un tableau en paramètre et le retournant
 *
 *@paramarray $param
 *@return array
 */
public function withParam($param)
{
    return $param;
}` },
        { type: "p", text: "Avec paramètre nullable (PHP 8) :" },
        { type: "code", filename: "typage-nullable.php", language: "php", code: `/**
 *@paramarray|null $param
 *@return array
 */
public function withParam(?array $param = null): array
{
    if (!$param) {
        $param = array();
    }
    return $param;
}` },
        { type: "p", text: "Le ? signifie \"ou null\" — donc ici array ou null." },
        { type: "p", text: "Depuis PHP 8.1 — types de retour multiples :" },
        { type: "code", filename: "typage-union.php", language: "php", code: `/**
 *@paramarray|null $param
 *@return array|string|Exception
 */
public function withParam(?array $param = null): array|string|Exception
{
    if (!$param) {
        $param = "Aucun tableau n'est récupéré";
    }
    return $param;
}` },
        { type: "note", variant: "success", title: "Petit bonus", text: "Typer sa méthode et utiliser le raccourci docblocker pour créer son commentaire en bloc. Tout le commentaire sera généré automatiquement et il ne reste plus qu'à ajouter la description." },
      ],
    },
  ],
};