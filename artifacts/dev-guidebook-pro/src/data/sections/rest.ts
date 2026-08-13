import type { Section, SubSection } from "../types";

// ── Contenu fusionné depuis laConsoleArticlesRest.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleArticlesRest: SubSection[] = [
  {
    id: "laconsole-codes-http",
    title: "Principaux codes de réponse HTTP",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"10+ Principaux Codes de Réponse HTTP - laConsole.pdf - 9 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"10+ Principaux Codes de Réponse HTTP"},
      {"type":"h","text":"Zoom sur les codes de réponse HTTP, de célèbres"},
      {"type":"h","text":"combinaisons de 3 chiffres fournissant des informations sur le"},
      {"type":"h","text":"traitement d'une requête par le serveur."},
      {"type":"h","text":"mars 2024 5 min"},
      {"type":"p","text":"⏾"},
      {"type":"h","text":"# api # debug # programmation"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"Lorsqu’on développe un site web, il est important de"},
      {"type":"p","text":"comprendre les différents codes de réponse HTTP que les"},
      {"type":"p","text":"serveurs utilisent pour communiquer avec les clients. Ces"},
      {"type":"p","text":"codes de réponse fournissent des informations sur le"},
      {"type":"p","text":"traitement d’une requête par le serveur et aident à"},
      {"type":"p","text":"diagnostiquer et à résoudre les problèmes qui peuvent"},
      {"type":"p","text":"survenir. Dans cet article, nous allons examiner de plus"},
      {"type":"p","text":"près les codes de réponse HTTP et leur signiﬁcation."},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p001.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"h","text":"Qu’est-ce qu’un statut"},
      {"type":"h","text":"de réponse HTTP ?"},
      {"type":"h","text":"Déﬁnition"},
      {"type":"p","text":"Un statut de réponse HTTP est un message envoyé par un"},
      {"type":"h","text":"serveur web en réponse à une requête HTTP d’un client."},
      {"type":"p","text":"Ce message indique si une requête a été traitée avec"},
      {"type":"p","text":"succès ou non, et fournissent des informations sur les"},
      {"type":"p","text":"erreurs qui peuvent survenir."},
      {"type":"p","text":"Un statut HTTP est déﬁni par un message bien spéciﬁque,"},
      {"type":"p","text":"comme par exemple :"},
      {"type":"p","text":"OK"},
      {"type":"p","text":"Not Found"},
      {"type":"p","text":"Forbidden"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"Les statuts HTTP sont importants car ils permettent en"},
      {"type":"p","text":"quelques sortes au client d’obtenir du feedback suite au"},
      {"type":"p","text":"traitement par le serveur."},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p002.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Ces statuts de réponse sont associés à un code de statut."},
      {"type":"h","text":"Code de statut"},
      {"type":"p","text":"Les codes de réponse HTTP sont des codes à trois chiffres"},
      {"type":"p","text":"indiquant le statut d’une requête HTTP, en complément du"},
      {"type":"p","text":"message ( Not Found , Forbidden …)."},
      {"type":"p","text":"Les codes de réponse HTTP sont classés en cinq familles,"},
      {"type":"code","filename":"page-3-exemple-1","language":"typescript","code":"allant de 1xx  à 5xx , chacune représentant un type de"},
      {"type":"p","text":"réponse spéciﬁque :"},
      {"type":"p","text":"Informations ( 1xx )"},
      {"type":"p","text":"Succès ( 2xx )"},
      {"type":"p","text":"Redirections ( 3xx )"},
      {"type":"p","text":"Erreurs client ( 4xx )"},
      {"type":"p","text":"Erreurs serveur ( 5xx )"},
      {"type":"p","text":"Le premier chiffre indique la famille de codes et les deux"},
      {"type":"h","text":"derniers fournissent des informations plus détaillées sur le"},
      {"type":"p","text":"statut de la réponse."},
      {"type":"p","text":"Par exemple, le code 404  appartient à la famille des"},
      {"type":"p","text":"erreurs clients ( 4xx ), et indique plus précisément que la"},
      {"type":"p","text":"ressource demandée n’est pas trouvée ( x04 )."},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p003.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-4-exemple-1","language":"javascript","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Typologie des codes"},
      {"type":"h","text":"HTTP"},
      {"type":"p","text":"Il existe de nombreux codes de réponse HTTP (environ"},
      {"type":"p","text":"60), nous listerons pour chaque typologie ceux que l’on"},
      {"type":"p","text":"utilise couramment dans le développement d’applications"},
      {"type":"p","text":"web (sites, API…)."},
      {"type":"h","text":"1. Informations (1xx)"},
      {"type":"p","text":"Les codes de réponse HTTP 1xx  indiquent que la requête"},
      {"type":"h","text":"a été reçue et que le processus est en cours."},
      {"type":"p","text":"Ces codes sont rarement vus par les utilisateurs ﬁnaux, car"},
      {"type":"p","text":"ils sont utilisés pour les communications intermédiaires"},
      {"type":"p","text":"entre le client et le serveur."},
      {"type":"p","text":"Je ne détaillerai pas la signiﬁcation des codes de réponse"},
      {"type":"p","text":"HTTP 1xx ( 100 , 101 , 102  et 103 )."},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p004.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"h","text":"2. Succès (2xx)"},
      {"type":"p","text":"Les codes de réponse HTTP 2xx  indiquent que la requête"},
      {"type":"h","text":"a été traitée avec succès."},
      {"type":"p","text":"Les codes de réponse de succès les plus courants sont"},
      {"type":"p","text":"200  et 201 ."},
      {"type":"h","text":"Code Message Signiﬁcation"},
      {"type":"p","text":"200\nOK\nRequête traitée avec succès. Contenu"},
      {"type":"p","text":"demandé renvoyé au client."},
      {"type":"p","text":"201\nCreated\nRequête traitée avec succès et"},
      {"type":"p","text":"création d’une ressource (très utile"},
      {"type":"p","text":"pour les opérations d’insertion d’un"},
      {"type":"p","text":"CRUD d’\n)."},
      {"type":"p","text":"API"},
      {"type":"h","text":"3. Redirections (3xx)"},
      {"type":"p","text":"Les codes de réponse HTTP 3xx  indiquent que la requête"},
      {"type":"h","text":"a été redirigée vers une autre URL."},
      {"type":"p","text":"Ces codes sont utilisés pour indiquer que le contenu"},
      {"type":"p","text":"demandé a été déplacé ou que la requête doit être répétée"},
      {"type":"p","text":"à une autre adresse."},
      {"type":"p","text":"Les codes de réponse de succès les plus courants sont"},
      {"type":"p","text":"301  et 302 ."},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p005.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"h","text":"Code Message Signiﬁcation"},
      {"type":"p","text":"301\nMoved"},
      {"type":"p","text":"Ressource déplacée de façon"},
      {"type":"p","text":"permanente."},
      {"type":"p","text":"Permanently"},
      {"type":"p","text":"302\nFound\nRessource déplacée de façon"},
      {"type":"p","text":"temporaire."},
      {"type":"h","text":"4. Erreurs client (4xx)"},
      {"type":"p","text":"Les codes de réponse HTTP 4xx  indiquent que la requête"},
      {"type":"h","text":"contient une erreur et ne peut pas être traitée."},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Ces erreurs sont généralement causées par des problèmes"},
      {"type":"p","text":"avec la requête envoyée par le client, tels qu’une adresse"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"mal orthographiée ou une demande de contenu qui"},
      {"type":"p","text":"n’existe pas."},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Les codes de réponse de succès les plus courants sont"},
      {"type":"p","text":"Qu’est-ce qu’un statut de\nréponse HTTP ?"},
      {"type":"p","text":"400 , 401 , 402 , 403 , 404  et 405 ."},
      {"type":"p","text":"Déﬁnition"},
      {"type":"p","text":"Code de statut"},
      {"type":"h","text":"Code Message Signiﬁcation"},
      {"type":"p","text":"Typologie des codes HTTP"},
      {"type":"p","text":"1. Informations (1xx)"},
      {"type":"p","text":"400\nBad Request\nRequête incorrecte (faute de"},
      {"type":"p","text":"frappe, informations"},
      {"type":"p","text":"2. Succès (2xx)"},
      {"type":"p","text":"manquantes…)."},
      {"type":"p","text":"3. Redirections (3xx)"},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p006.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"4. Erreurs client (4xx)"},
      {"type":"p","text":"401\nUnauthorized\nAuthentiﬁcation nécessaire"},
      {"type":"p","text":"5. Erreurs serveur (5xx)"},
      {"type":"p","text":"pour accéder à la ressource."},
      {"type":"p","text":"Paiement requis pour accéder à"},
      {"type":"p","text":"402\nPayment"},
      {"type":"p","text":"Required"},
      {"type":"p","text":"la ressource."},
      {"type":"p","text":"403\nForbidden\nAuthentiﬁcation acceptée mais"},
      {"type":"p","text":"l’utilisateur n’a pas les droits"},
      {"type":"p","text":"d’accès à la ressource."},
      {"type":"p","text":"404\nNot Found\nRessource non trouvée."},
      {"type":"p","text":"405\nMethod Not"},
      {"type":"p","text":"Méthode de requête HTTP"},
      {"type":"p","text":"Allowed"},
      {"type":"p","text":"( GET , POST , PUT , PATCH ,"},
      {"type":"code","filename":"page-7-exemple-1","language":"javascript","code":"DELETE …) non autorisée."},
      {"type":"h","text":"5. Erreurs serveur (5xx)"},
      {"type":"p","text":"Les codes de réponse HTTP 5xx  indiquent que le serveur"},
      {"type":"h","text":"a rencontré une erreur et ne peut pas traiter la requête."},
      {"type":"p","text":"Ces erreurs sont généralement causées par des problèmes,"},
      {"type":"p","text":"tels qu’une erreur dans le code, une surcharge ou une"},
      {"type":"p","text":"panne matérielle."},
      {"type":"p","text":"Les codes de réponse de succès les plus courants sont"},
      {"type":"p","text":"500 , 502 , 503  et 504 ."},
      {"type":"h","text":"Code Message Signiﬁcation"},
      {"type":"p","text":"Erreur interne du serveur."},
      {"type":"p","text":"500\nInternal"},
      {"type":"p","text":"Server"},
      {"type":"p","text":"Error"},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p007.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"502\nBad"},
      {"type":"p","text":"Serveur (passerelle ou proxy) a"},
      {"type":"p","text":"reçu une réponse invalide depuis"},
      {"type":"p","text":"Gateway"},
      {"type":"p","text":"le serveur distant."},
      {"type":"p","text":"503\nService"},
      {"type":"p","text":"Serveur temporairement"},
      {"type":"p","text":"indisponible ou en maintenance."},
      {"type":"p","text":"Unavailable"},
      {"type":"p","text":"504\nGateway"},
      {"type":"p","text":"Serveur (passerelle ou proxy) n’a"},
      {"type":"p","text":"Time-out"},
      {"type":"p","text":"reçu de réponse à temps de la"},
      {"type":"p","text":"part du serveur distant."},
      {"type":"p","text":"Comprendre les codes de réponse HTTP est crucial pour"},
      {"type":"p","text":"les développeurs web. Cela permet entre autres d’obtenir"},
      {"type":"p","text":"des informations sur le statut d’une requête, de"},
      {"type":"p","text":"diagnostiquer et résoudre les problèmes plus rapidement"},
      {"type":"p","text":"(amélioration de la DX) et d’assurer le bon fonctionnement"},
      {"type":"p","text":"du site web."},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"%"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à"},
      {"type":"p","text":"remodeler le monde avec des\nLEGO. Plus tard, je découvre le\ndev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes\nde code. J'en fais mon métier"},
      {"type":"p","text":""},
      {"type":"p","text":"puis je décide de transmettre\ncette passion en école de dev et"},
      {"type":"p","text":"sur laConsole."},
      {"type":"h","text":"Lire aussi"},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p008.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"TypeScript,"},
      {"type":"p","text":"Différences"},
      {"type":"p","text":"Différences"},
      {"type":"p","text":"Quand et"},
      {"type":"p","text":"entre SSR,"},
      {"type":"p","text":"entre"},
      {"type":"p","text":"Pourquoi"},
      {"type":"p","text":"CSR et"},
      {"type":"p","text":"Librairie et"},
      {"type":"p","text":"l'Utiliser ?"},
      {"type":"p","text":"SSG"},
      {"type":"p","text":"Framework"},
      {"type":"p","text":"programmation"},
      {"type":"p","text":"programmation"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"js"},
      {"type":"p","text":"performance"},
      {"type":"p","text":"programmation"},
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
      {"type":"p","text":"Politique de\nconﬁdentialité"},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"image","src":"images/laconsole-articles/10-principaux-codes-de-reponse-http-laconsole-p009.jpg","alt":"Page originale de 10+ Principaux Codes de Réponse HTTP - laConsole.pdf - page 9"},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleArticles5Rest.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles5Rest: SubSection[] = [{"id":"laconsole-qu-est-ce-qu-une-api","title":"Qu'est-ce qu'une API ?","blocks":[{"type":"note","variant":"info","title":"Source","text":"Qu'est-ce qu'une API ? - laConsole.pdf - 18 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"h","text":"Qu'est-ce qu'une API ?"},{"type":"p","text":"Qu'est-ce qu'une API ? Quels avantages à les utiliser ? API"},{"type":"p","text":"REST VS API GraphQL ? On fait le point ensemble."},{"type":"p","text":"#"},{"type":"p","text":"⏾"},{"type":"p","text":"sept. 2023 8 min api"},{"type":"p","text":"Inscription à la"},{"type":"p","text":"NEWSLETTER"},{"type":"h","text":"Qu’est-ce qu’une API ?"},{"type":"h","text":"Définition"},{"type":"code","filename":"page-1-exemple-1","language":"javascript","code":"A P I"},{"type":"p","text":"Une API ( pplication rogramming nterface) est un"},{"type":"p","text":"ensemble de règles et de protocoles qui permettent à"},{"type":"p","text":"deux systèmes distincts de communiquer et d’échanger"},{"type":"p","text":"des données ou des fonctionnalités entre eux."},{"type":"p","text":"Ces données sont bien souvent stockées dans des bases"},{"type":"code","filename":"page-1-exemple-2","language":"javascript","code":"JSON"},{"type":"p","text":"de données et transmises au format ."},{"type":"p","text":"L’API joue le rôle d’interface de contrôle, garante de"},{"type":"p","text":"traitements spécifiques à exécuter sur les données d’une"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 1 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p001.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"application , comme par exemple :"},{"type":"p","text":"Récupérer les articles du blog"},{"type":"p","text":"Récupérer les informations d’un utilisateur"},{"type":"p","text":"Publier un commentaire"},{"type":"p","text":"Modifier une fiche produit"},{"type":"p","text":"Etc."},{"type":"p","text":"Les API vont généralement implémenter les"},{"type":"p","text":"#"},{"type":"p","text":"opérations de lecture et d’écriture sur des données"},{"type":"code","filename":"page-2-exemple-3","language":"javascript","code":"CRUD"},{"type":"p","text":"(les fameux )."},{"type":"p","text":"Utiliser une API confère une couche d’abstraction ne"},{"type":"p","text":"nécessitant aucune connaissance de son fonctionnement"},{"type":"p","text":"interne."},{"type":"h","text":"Architecture distribuée VS"},{"type":"h","text":"architecture monolithique"},{"type":"h","text":"Architecture distribuée"},{"type":"p","text":"Les API sont aujourd’hui incontournables dans le monde"},{"type":"p","text":"du web car elles contribuent à l’expansion du"},{"type":"p","text":"développement d’applications basées sur des"},{"type":"p","text":"architectures distribuées , où les composantes sont"},{"type":"p","text":"divisées en modules distincts et déployés séparément."},{"type":"p","text":"Les API constituent ainsi des microservices qui peuvent"},{"type":"p","text":"être consommés indépendamment et en parallèle par"},{"type":"p","text":"différents types de clients (sites/applications web,"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 2 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p002.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"mobiles, IoT), quels que soient les langages et"},{"type":"p","text":"technologies utilisés."},{"type":"h","text":"Architecture monolithique"},{"type":"p","text":"On oppose à l’architecture distribuée, l’architecture"},{"type":"p","text":"monolithique , construite comme une seule unité où les"},{"type":"p","text":"composants sont regroupés et interconnectés au sein d’un"},{"type":"p","text":"même code source et d’un même processus d’exécution."},{"type":"p","text":"Elles s’avèrent de véritables atouts pour partager des"},{"type":"p","text":"données entre plusieurs appareils ."},{"type":"p","text":"Comprendre par l'exemple"},{"type":"p","text":"Amazoon est un marchand ecommerce spécialisé dans"},{"type":"p","text":"la vente de matériel informatique proposant :"},{"type":"p","text":"1. Un site web ecommerce"},{"type":"p","text":"2. Une application mobile dédiée pour une expérience"},{"type":"p","text":"plus fluide"},{"type":"p","text":"3. Une application pour montre connectée notifiant"},{"type":"p","text":"des nouveaux deals chaque matin à 9h"},{"type":"p","text":"Si Amazoon avait été développée selon une architecture"},{"type":"p","text":"monolothique (et donc sans API), chaque application"},{"type":"p","text":"aurait sa propre base de données. Cette conception de"},{"type":"p","text":"très mauvaise qualité nous conduirait inévitablement à"},{"type":"p","text":"des données isolées et non synchronisées. Je vous laisse"},{"type":"p","text":"imaginer les répercussions en termes de maintenance…"},{"type":"p","text":"Imaginez maintenant qu’Amazoon souhaite proposer"},{"type":"p","text":"aux développeurs d’intégrer sur d’autres sites certains"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 3 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p003.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 3"},{"type":"h","text":"Page 4"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"des produits de son catalogue (à des fins d’affiliation"},{"type":"p","text":"web marketing par exemple). Cela est tout simplement"},{"type":"p","text":"impossible si les données ne sont accessibles qu’au sein"},{"type":"p","text":"des applications propriétaires d’Amazoon."},{"type":"p","text":"Face à ces problématiques, la réponse est simple : API !"},{"type":"p","text":"L’élaboration d’une API permettrait aux 3 applications"},{"type":"p","text":"Amazoon (web, mobile et montre connectée) d’interagir"},{"type":"p","text":"avec la même base de données , mais aussi d’ouvrir"},{"type":"p","text":"certaines données à d’autres utilisateurs ."},{"type":"p","text":"Par mesure de sécurité, il est bien entendu"},{"type":"p","text":"possible et important de contrôler l’accès que"},{"type":"p","text":"possède chaque application (interne ou externe)"},{"type":"p","text":"sur l’API en question : accès à certaines données"},{"type":"p","text":"#"},{"type":"p","text":"uniquement, accès en lecture/écriture… L’accès à"},{"type":"p","text":"l’API peut être conditionné par des rôles définis à"},{"type":"p","text":"ses usagers ou par la possession d’une clé API ou"},{"type":"p","text":"« API Key », obtenue suite à la"},{"type":"p","text":"souscription/l’enregistrement au service."},{"type":"h","text":"API publiques VS API privées"},{"type":"p","text":"Selon leur degré d’accessibilité, les API peuvent être"},{"type":"p","text":"classées en deux catégories principales : les API publiques"},{"type":"p","text":"et les API privées ."},{"type":"h","text":"API publiques (tierces)"},{"type":"p","text":"Les API publiques sont accessibles à tout développeur ou"},{"type":"p","text":"utilisateur qui souhaite interagir avec elles. Elles sont"},{"type":"p","text":"souvent fournies par des entreprises ou des organisations"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 4 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p004.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 4"},{"type":"h","text":"Page 5"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"pour permettre à des tiers d’accéder à leurs fonctionnalités"},{"type":"p","text":"ou à leurs données."},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"Ces API publiques sont désignées par le terme « d’API"},{"type":"p","text":"Tierces ». Certaines sont gratuites, d’autres payantes."},{"type":"p","text":"Les API publiques sont conçues pour être utilisées par des"},{"type":"p","text":"applications tierces qui ne font pas partie du même"},{"type":"p","text":"système ou de la même organisation que l’API elle-même."},{"type":"p","text":"Elles permettent à des développeurs externes de créer des"},{"type":"p","text":"applications qui tirent parti des fonctionnalités ou des"},{"type":"p","text":"données fournies par l’API."},{"type":"p","text":"On pense bien évidemment aux API météo (à défaut de"},{"type":"p","text":"posséder un satellite chez soi, nous sommes bien contents"},{"type":"p","text":"qu’elles existent !) ou encore aux API permettant d’accéder"},{"type":"p","text":"à des statistiques de réseaux/médias sociaux ( YouTube ,"},{"type":"p","text":"Discord , Twitch …)."},{"type":"p","text":"Il existe une immense quantité d’autres types d’API"},{"type":"p","text":"ouvertes au public, intégrables au sein de n’importe quel"},{"type":"p","text":"projet :"},{"type":"p","text":"Données géographique"},{"type":"p","text":"Données démographiques"},{"type":"p","text":"Trafic aérien"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 5 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p005.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 5"},{"type":"h","text":"Page 6"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"Annuaire de films"},{"type":"p","text":"Paiement en ligne"},{"type":"p","text":"Etc."},{"type":"p","text":"Les API publiques proposent la plupart du temps"},{"type":"p","text":"de consulter des données car des opérations"},{"type":"p","text":"#"},{"type":"p","text":"d’écriture implique de modifier l’état de la base de"},{"type":"p","text":"données (ici non propriétaire)."},{"type":"p","text":"Les API publiques sont généralement accompagnées"},{"type":"p","text":"d’une documentation détaillée et accessible au public"},{"type":"p","text":"décrivant comment l’utiliser."},{"type":"p","text":"Les API publiques nécessitent souvent une"},{"type":"p","text":"authentification par clé API permettant de contrôler"},{"type":"p","text":"l’usage qui en est fait."},{"type":"h","text":"API privées"},{"type":"p","text":"Les API privées sont destinées à être utilisées à l’intérieur"},{"type":"p","text":"d’une organisation ou d’un système spécifique (site,"},{"type":"p","text":"application…). Elles ne sont pas accessibles au public et"},{"type":"p","text":"sont généralement utilisées pour permettre la"},{"type":"p","text":"communication entre les différents composants d’une"},{"type":"p","text":"application."},{"type":"p","text":"Les API privées sont conçues pour répondre aux besoins"},{"type":"p","text":"spécifiques de l’organisation ou de l’application qui les"},{"type":"p","text":"utilise. Cela se traduit généralement pas l’implémentation"},{"type":"code","filename":"page-6-exemple-4","language":"javascript","code":"CRUD"},{"type":"p","text":"des mécaniques de relatives aux données de"},{"type":"p","text":"l’application."},{"type":"p","text":"Les API privées sont soumises à un contrôle d’accès strict"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 6 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p006.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 6"},{"type":"h","text":"Page 7"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"et nécessitent souvent une authentification pour y accéder."},{"type":"p","text":"Elles peuvent être accessibles uniquement à certaines"},{"type":"p","text":"applications ou à certains utilisateurs autorisés au sein de"},{"type":"p","text":"l’organisation."},{"type":"p","text":"Contrairement aux API publiques, la documentation des"},{"type":"p","text":"API privées peut être limitée ou accessible uniquement aux"},{"type":"p","text":"membres de l’organisation. Cela est souvent dû à des"},{"type":"p","text":"considérations de sécurité ou de confidentialité liées aux"},{"type":"p","text":"fonctionnalités ou aux données exposées par l’API."},{"type":"p","text":"Travailler avec une API privée permet de centraliser le"},{"type":"p","text":"développement de fonctionnalités existantes en les"},{"type":"p","text":"partageant à tout un écosystème d’applications (web,"},{"type":"p","text":"mobile, IoT…)."},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Deux grands types d’API"},{"type":"p","text":"Les API peuvent être classées en différents types en"},{"type":"p","text":"fonction de leur utilisation , de leurs fonctionnalités et de"},{"type":"p","text":"leur architecture . Les 2 grands types d’API les plus"},{"type":"code","filename":"page-7-exemple-5","language":"javascript","code":"REST GraphQL"},{"type":"p","text":"courants sont les API et ."},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 7 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p007.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 7"},{"type":"h","text":"Page 8"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"h","text":"1. REST"},{"type":"code","filename":"page-8-exemple-6","language":"javascript","code":"REST RE S T"},{"type":"p","text":"Une API ( presentational tate ransfer) repose"},{"type":"p","text":"sur une architecture logicielle qui utilise les méthodes"},{"type":"code","filename":"page-8-exemple-7","language":"javascript","code":"GET POST PUT PATCH DELETE"},{"type":"p","text":"HTTP standards ( , , , , …)"},{"type":"p","text":"pour permettre aux clients de récupérer, manipuler et"},{"type":"p","text":"interagir avec des ressources via des URLs , aussi appelées"},{"type":"p","text":"« endpoints »."},{"type":"code","filename":"page-8-exemple-8","language":"javascript","code":"REST"},{"type":"p","text":"En ce qui concerne l’échange de données , les API"},{"type":"code","filename":"page-8-exemple-9","language":"javascript","code":"JSON"},{"type":"p","text":"utilisent des formats légers comme et sont"},{"type":"p","text":"aujourd’hui largement utilisées pour le transfert de"},{"type":"p","text":"ressources sur internet."},{"type":"p","text":"Voici un exemple de requête sur un endpoint de l’API :"},{"type":"code","filename":"page-8-exemple-10","language":"javascript","code":"GET https://monapi.com/api/characters"},{"type":"code","filename":"page-8-exemple-11","language":"javascript","code":"GET https://monapi.com/api/characters"},{"type":"p","text":"Le endpoint"},{"type":"p","text":"pourrait par exemple retourner les données suivantes au"},{"type":"code","filename":"page-8-exemple-12","language":"javascript","code":"JSON"},{"type":"p","text":"format :"},{"type":"code","filename":"page-8-exemple-13","language":"javascript","code":"["},{"type":"code","filename":"page-8-exemple-14","language":"javascript","code":"{"},{"type":"code","filename":"page-8-exemple-15","language":"javascript","code":"\"pseudo\": \"Azog\","},{"type":"code","filename":"page-8-exemple-16","language":"javascript","code":"\"health\": 100,"},{"type":"code","filename":"page-8-exemple-17","language":"javascript","code":"\"skills\": ["},{"type":"code","filename":"page-8-exemple-18","language":"javascript","code":"{"},{"type":"code","filename":"page-8-exemple-19","language":"javascript","code":"\"name\": \"Fireball\","},{"type":"code","filename":"page-8-exemple-20","language":"javascript","code":"\"power\": 5"},{"type":"code","filename":"page-8-exemple-21","language":"javascript","code":"},"},{"type":"code","filename":"page-8-exemple-22","language":"javascript","code":"{"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 8 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p008.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 8"},{"type":"h","text":"Page 9"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"code","filename":"page-9-exemple-23","language":"javascript","code":"\"name\": \"Blizzard\","},{"type":"code","filename":"page-9-exemple-24","language":"javascript","code":"\"power\": 10"},{"type":"code","filename":"page-9-exemple-25","language":"javascript","code":"}"},{"type":"code","filename":"page-9-exemple-26","language":"javascript","code":"]"},{"type":"code","filename":"page-9-exemple-27","language":"javascript","code":"},"},{"type":"code","filename":"page-9-exemple-28","language":"javascript","code":"{"},{"type":"code","filename":"page-9-exemple-29","language":"javascript","code":"\"pseudo\": \"Yinddi\","},{"type":"code","filename":"page-9-exemple-30","language":"javascript","code":"\"health\": 150,"},{"type":"code","filename":"page-9-exemple-31","language":"javascript","code":"\"skills\": ["},{"type":"code","filename":"page-9-exemple-32","language":"javascript","code":"{"},{"type":"code","filename":"page-9-exemple-33","language":"javascript","code":"\"name\": \"Fireball\","},{"type":"code","filename":"page-9-exemple-34","language":"javascript","code":"\"power\": 5"},{"type":"code","filename":"page-9-exemple-35","language":"javascript","code":"}"},{"type":"code","filename":"page-9-exemple-36","language":"javascript","code":"]"},{"type":"code","filename":"page-9-exemple-37","language":"javascript","code":"},"},{"type":"code","filename":"page-9-exemple-38","language":"javascript","code":"{"},{"type":"code","filename":"page-9-exemple-39","language":"javascript","code":"\"pseudo\": \"Athios\","},{"type":"code","filename":"page-9-exemple-40","language":"javascript","code":"\"health\": 90,"},{"type":"code","filename":"page-9-exemple-41","language":"javascript","code":"\"skills\": ["},{"type":"code","filename":"page-9-exemple-42","language":"javascript","code":"{"},{"type":"code","filename":"page-9-exemple-43","language":"javascript","code":"\"name\": \"Thunderbolt\","},{"type":"code","filename":"page-9-exemple-44","language":"javascript","code":"\"power\": 20"},{"type":"code","filename":"page-9-exemple-45","language":"javascript","code":"}"},{"type":"code","filename":"page-9-exemple-46","language":"javascript","code":"]"},{"type":"code","filename":"page-9-exemple-47","language":"javascript","code":"}"},{"type":"code","filename":"page-9-exemple-48","language":"javascript","code":"]"},{"type":"p","text":"On pourrait envoyer d’autres requêtes vers des endpoints"},{"type":"p","text":"différents et avec des méthodes HTTP différentes comme"},{"type":"p","text":"par exemple :"},{"type":"code","filename":"page-9-exemple-49","language":"javascript","code":"POST https://monapi.com/api/characters"},{"type":"code","filename":"page-9-exemple-50","language":"javascript","code":"GET https://monapi.com/api/character/2"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 9 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p009.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 9"},{"type":"h","text":"Page 10"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"code","filename":"page-10-exemple-51","language":"javascript","code":"PUT https://monapi.com/api/character/2"},{"type":"code","filename":"page-10-exemple-52","language":"javascript","code":"PATCH https://monapi.com/api/character/2"},{"type":"code","filename":"page-10-exemple-53","language":"javascript","code":"DELETE https://monapi.com/api/character/2"},{"type":"p","text":"Etc."},{"type":"p","text":"Découvrez comment créer une API avec le"},{"type":"p","text":"#"},{"type":"p","text":"framework JavaScript Express ."},{"type":"h","text":"2. GraphQL"},{"type":"code","filename":"page-10-exemple-54","language":"javascript","code":"GraphQL"},{"type":"p","text":"est une spécification d’API qui permet aux"},{"type":"p","text":"clients de demander exactement les données dont ils ont"},{"type":"p","text":"besoin , évitant ainsi le sur chargement d’informations non"},{"type":"p","text":"utilisées."},{"type":"code","filename":"page-10-exemple-55","language":"javascript","code":"REST"},{"type":"p","text":"Contrairement aux API , où les données sont"},{"type":"code","filename":"page-10-exemple-56","language":"javascript","code":"GraphQL"},{"type":"p","text":"structurées par le serveur, les clients interrogent"},{"type":"p","text":"un unique endpoint et lui spécifient le format des données"},{"type":"p","text":"qu’ils souhaitent recevoir en retour."},{"type":"code","filename":"page-10-exemple-57","language":"javascript","code":"GraphQL"},{"type":"p","text":"Voici un exemple de requête sur l’unique"},{"type":"code","filename":"page-10-exemple-58","language":"javascript","code":"https://monapi.com"},{"type":"p","text":"endpoint :"},{"type":"code","filename":"page-10-exemple-59","language":"javascript","code":"POST https://monapi.com"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 10 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p010.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 10"},{"type":"h","text":"Page 11"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"code","filename":"page-11-exemple-60","language":"javascript","code":"query {"},{"type":"code","filename":"page-11-exemple-61","language":"javascript","code":"characters {"},{"type":"code","filename":"page-11-exemple-62","language":"javascript","code":"pseudo"},{"type":"code","filename":"page-11-exemple-63","language":"javascript","code":"health"},{"type":"code","filename":"page-11-exemple-64","language":"javascript","code":"}"},{"type":"code","filename":"page-11-exemple-65","language":"javascript","code":"}"},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"code","filename":"page-11-exemple-66","language":"javascript","code":"characters"},{"type":"p","text":"On récupère ici la liste des , sans leurs"},{"type":"code","filename":"page-11-exemple-67","language":"javascript","code":"skills"},{"type":"p","text":"."},{"type":"code","filename":"page-11-exemple-68","language":"javascript","code":"POST https://monapi.com"},{"type":"p","text":"Le endpoint avec la requête"},{"type":"code","filename":"page-11-exemple-69","language":"javascript","code":"GraphQL"},{"type":"p","text":"ci-dessus, retournerait par exemple les données"},{"type":"code","filename":"page-11-exemple-70","language":"javascript","code":"JSON"},{"type":"p","text":"suivantes au format :"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 11 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p011.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 11"},{"type":"h","text":"Page 12"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"code","filename":"page-12-exemple-71","language":"javascript","code":"{"},{"type":"code","filename":"page-12-exemple-72","language":"javascript","code":"\"data\": {"},{"type":"code","filename":"page-12-exemple-73","language":"javascript","code":"\"characters\": ["},{"type":"code","filename":"page-12-exemple-74","language":"javascript","code":"{"},{"type":"code","filename":"page-12-exemple-75","language":"javascript","code":"\"pseudo\": \"Azog\","},{"type":"code","filename":"page-12-exemple-76","language":"javascript","code":"\"health\": 100,"},{"type":"code","filename":"page-12-exemple-77","language":"javascript","code":"},"},{"type":"code","filename":"page-12-exemple-78","language":"javascript","code":"{"},{"type":"code","filename":"page-12-exemple-79","language":"javascript","code":"\"pseudo\": \"Yinddi\","},{"type":"code","filename":"page-12-exemple-80","language":"javascript","code":"\"health\": 150,"},{"type":"code","filename":"page-12-exemple-81","language":"javascript","code":"},"},{"type":"code","filename":"page-12-exemple-82","language":"javascript","code":"{"},{"type":"code","filename":"page-12-exemple-83","language":"javascript","code":"\"pseudo\": \"Athios\","},{"type":"code","filename":"page-12-exemple-84","language":"javascript","code":"\"health\": 90,"},{"type":"code","filename":"page-12-exemple-85","language":"javascript","code":"}"},{"type":"code","filename":"page-12-exemple-86","language":"javascript","code":"]"},{"type":"code","filename":"page-12-exemple-87","language":"javascript","code":"}"},{"type":"code","filename":"page-12-exemple-88","language":"javascript","code":"}"},{"type":"code","filename":"page-12-exemple-89","language":"javascript","code":"GraphQL"},{"type":"p","text":"Voici un autre exemple de requête sur l’unique"},{"type":"code","filename":"page-12-exemple-90","language":"javascript","code":"https://monapi.com"},{"type":"p","text":"endpoint :"},{"type":"code","filename":"page-12-exemple-91","language":"javascript","code":"POST https://monapi.com"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 12 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p012.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 12"},{"type":"h","text":"Page 13"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"code","filename":"page-13-exemple-92","language":"javascript","code":"query {"},{"type":"code","filename":"page-13-exemple-93","language":"javascript","code":"characters(last: 2) {"},{"type":"code","filename":"page-13-exemple-94","language":"javascript","code":"pseudo"},{"type":"code","filename":"page-13-exemple-95","language":"javascript","code":"health"},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"p","text":"FREE"},{"type":"code","filename":"page-13-exemple-96","language":"javascript","code":"skills {"},{"type":"code","filename":"page-13-exemple-97","language":"javascript","code":"name"},{"type":"code","filename":"page-13-exemple-98","language":"javascript","code":"power"},{"type":"p","text":""},{"type":"p","text":"SOMMAIRE"},{"type":"code","filename":"page-13-exemple-99","language":"javascript","code":"}"},{"type":"code","filename":"page-13-exemple-100","language":"javascript","code":"}"},{"type":"p","text":"Qu’est-ce qu’une API ?"},{"type":"code","filename":"page-13-exemple-101","language":"javascript","code":"}"},{"type":"p","text":"Définition"},{"type":"p","text":"Architecture distribuée VS"},{"type":"p","text":"architecture monolithique"},{"type":"code","filename":"page-13-exemple-102","language":"javascript","code":"characters"},{"type":"p","text":"On récupère ici la liste des 2 derniers , avec"},{"type":"p","text":"Architecture distribuée"},{"type":"code","filename":"page-13-exemple-103","language":"javascript","code":"skills"},{"type":"p","text":"leurs ."},{"type":"p","text":"Architecture monolithique"},{"type":"p","text":"API publiques VS API privées"},{"type":"code","filename":"page-13-exemple-104","language":"javascript","code":"POST https://monapi.com"},{"type":"p","text":"Le endpoint avec la requête"},{"type":"p","text":"API publiques (tierces)"},{"type":"code","filename":"page-13-exemple-105","language":"javascript","code":"GraphQL"},{"type":"p","text":"ci-dessus, retournerait par exemple les données"},{"type":"p","text":"API privées"},{"type":"code","filename":"page-13-exemple-106","language":"javascript","code":"JSON"},{"type":"p","text":"suivantes au format :"},{"type":"p","text":"Deux grands types d’API"},{"type":"p","text":"1. REST"},{"type":"p","text":"2. GraphQL"},{"type":"p","text":"Avantages des API"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 13 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p013.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 13"},{"type":"h","text":"Page 14"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"code","filename":"page-14-exemple-107","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-108","language":"javascript","code":"\"data\": {"},{"type":"code","filename":"page-14-exemple-109","language":"javascript","code":"\"characters\": ["},{"type":"code","filename":"page-14-exemple-110","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-111","language":"javascript","code":"\"pseudo\": \"Azog\","},{"type":"code","filename":"page-14-exemple-112","language":"javascript","code":"\"health\": 100,"},{"type":"code","filename":"page-14-exemple-113","language":"javascript","code":"\"skills\": ["},{"type":"code","filename":"page-14-exemple-114","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-115","language":"javascript","code":"\"name\": \"Fireball\""},{"type":"code","filename":"page-14-exemple-116","language":"javascript","code":"\"power\": 5"},{"type":"code","filename":"page-14-exemple-117","language":"javascript","code":"},"},{"type":"code","filename":"page-14-exemple-118","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-119","language":"javascript","code":"\"name\": \"Blizzard\""},{"type":"code","filename":"page-14-exemple-120","language":"javascript","code":"\"power\": 10"},{"type":"code","filename":"page-14-exemple-121","language":"javascript","code":"}"},{"type":"code","filename":"page-14-exemple-122","language":"javascript","code":"]"},{"type":"code","filename":"page-14-exemple-123","language":"javascript","code":"},"},{"type":"code","filename":"page-14-exemple-124","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-125","language":"javascript","code":"\"pseudo\": \"Yinddi\","},{"type":"code","filename":"page-14-exemple-126","language":"javascript","code":"\"health\": 150,"},{"type":"code","filename":"page-14-exemple-127","language":"javascript","code":"\"skills\": ["},{"type":"code","filename":"page-14-exemple-128","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-129","language":"javascript","code":"\"name\": \"Fireball\""},{"type":"code","filename":"page-14-exemple-130","language":"javascript","code":"\"power\": 5"},{"type":"code","filename":"page-14-exemple-131","language":"javascript","code":"}"},{"type":"code","filename":"page-14-exemple-132","language":"javascript","code":"]"},{"type":"code","filename":"page-14-exemple-133","language":"javascript","code":"}"},{"type":"code","filename":"page-14-exemple-134","language":"javascript","code":"]"},{"type":"code","filename":"page-14-exemple-135","language":"javascript","code":"}"},{"type":"code","filename":"page-14-exemple-136","language":"javascript","code":"}"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 14 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p014.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 14"},{"type":"h","text":"Page 15"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"Dans GraphQL, la structure de la réponse est"},{"type":"p","text":"généralement enveloppée dans un objet nommé"},{"type":"p","text":"#"},{"type":"code","filename":"page-15-exemple-137","language":"javascript","code":"data"},{"type":"p","text":". Cela permet de distinguer les données"},{"type":"p","text":"réelles de la réponse des éventuelles erreurs ou"},{"type":"p","text":"métadonnées ."},{"type":"p","text":"Toutes les requêtes qui sont envoyées vers"},{"type":"p","text":"#"},{"type":"code","filename":"page-15-exemple-138","language":"javascript","code":"GraphQL"},{"type":"p","text":"l’unique endpoint de l’API doivent être"},{"type":"code","filename":"page-15-exemple-139","language":"javascript","code":"POST"},{"type":"p","text":"envoyées via la méthode HTTP ."},{"type":"code","filename":"page-15-exemple-140","language":"javascript","code":"REST GraphQL"},{"type":"p","text":"Bien que majoritaires, et ne sont pas les"},{"type":"p","text":"seules approches existantes pour créer des API. Plus"},{"type":"code","filename":"page-15-exemple-141","language":"javascript","code":"SOAP"},{"type":"p","text":"anciennement, le protocole ( S imple O bject A ccess"},{"type":"code","filename":"page-15-exemple-142","language":"javascript","code":"XML"},{"type":"p","text":"P rotocol) basé sur le langage , a connu son âge d’or."},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Avantages des API"},{"type":"p","text":"Développer une API présente de nombreux avantages. En"},{"type":"p","text":"voici les principaux :"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 15 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p015.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 15"},{"type":"h","text":"Page 16"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"Avantages Description"},{"type":"p","text":"Interopérabilité Permet à des systèmes hétérogènes"},{"type":"p","text":"(différentes langues, plates-formes,"},{"type":"p","text":"technologies, etc.) de communiquer"},{"type":"p","text":"entre eux, ce qui facilite l’interaction"},{"type":"p","text":"entre des composants logiciels divers."},{"type":"p","text":"Séparation des Favorise la séparation claire des"},{"type":"p","text":"préoccupations responsabilités entre différentes parties"},{"type":"p","text":"d’une application, ce qui améliore la"},{"type":"p","text":"modularité et la maintenance du code."},{"type":"p","text":"Intégration Elles facilitent l’intégration"},{"type":"p","text":"facilitée d’applications tierces, ce qui permet de"},{"type":"p","text":"combiner différentes sources de"},{"type":"p","text":"données et de fonctionnalités."},{"type":"p","text":"Évolutivité Permet d’ajouter de nouvelles"},{"type":"p","text":"fonctionnalités ou de mettre à jour les"},{"type":"p","text":"existantes sans perturber le reste du"},{"type":"p","text":"système."},{"type":"p","text":"Accès à des Offre la possibilité d’accéder à des"},{"type":"p","text":"données données ou des services distants, ce qui"},{"type":"p","text":"distantes élargit les possibilités de l’application."},{"type":"p","text":"Sécurité Permet de contrôler l’accès à l’API via"},{"type":"p","text":"des mécanismes de sécurité pour"},{"type":"p","text":"protéger les données et les ressources."},{"type":"p","text":"Normes, Architecture respectant de grands"},{"type":"p","text":"conventions & principes et de bonnes pratiques de"},{"type":"p","text":"documentation développement. De plus, les API sont"},{"type":"p","text":"généralement accompagnées d’une"},{"type":"p","text":"documentation détaillée, facilitant leur"},{"type":"p","text":"utilisation et leur intégration."},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 16 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p016.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 16"},{"type":"h","text":"Page 17"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"Thibaud d'Arros"},{"type":"p","text":"Fondateur Développeur"},{"type":"p","text":"● ●"},{"type":"p","text":"Formateur"},{"type":"p","text":"●"},{"type":"p","text":"&"},{"type":"p","text":"L"},{"type":"p","text":"Enfant, je passais des heures à"},{"type":"p","text":"'"},{"type":"p","text":"A"},{"type":"p","text":"U"},{"type":"p","text":"remodeler le monde avec des"},{"type":"p","text":"@"},{"type":"p","text":"T"},{"type":"p","text":"LEGO. Plus tard, je découvre le"},{"type":"p","text":"E"},{"type":"p","text":"U"},{"type":"p","text":"dev, des LEGO où les briques"},{"type":"p","text":"R"},{"type":"p","text":"sont remplacées par des lignes"},{"type":"p","text":""},{"type":"p","text":"de code. J'en fais mon métier"},{"type":"p","text":"puis je décide de transmettre"},{"type":"p","text":"cette passion en école de dev et"},{"type":"p","text":"sur laConsole."},{"type":"h","text":"Lire aussi"},{"type":"p","text":"10+ 10+"},{"type":"p","text":"Utiliser"},{"type":"p","text":"Principaux Principaux"},{"type":"p","text":"Notion"},{"type":"p","text":"Codes de Codes de"},{"type":"p","text":"comme"},{"type":"p","text":"Réponse Réponse"},{"type":"p","text":"Headless"},{"type":"p","text":"HTTP HTTP"},{"type":"p","text":"CMS"},{"type":"p","text":"(API)"},{"type":"p","text":"api debug api debug"},{"type":"p","text":"programmation cms api programmation"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 17 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p017.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 17"},{"type":"h","text":"Page 18"},{"type":"p","text":"Qu'est-ce qu'une API ? - laConsole 02/03/2025 09 : 51"},{"type":"p","text":"E-LEARNING COMMUNAUTÉ LÉGAL"},{"type":"p","text":"Formations Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},{"type":"p","text":"légales"},{"type":"p","text":"Cheatsheets A propos"},{"type":"p","text":"développement web."},{"type":"p","text":"Politique de"},{"type":"p","text":"Blog Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Faire ma veille"},{"type":"p","text":"status : 200 laConsole © 2025"},{"type":"p","text":"https://laconsole.dev/blog/comprendre-api Page 18 sur 18"},{"type":"image","src":"images/laconsole-articles-5/qu-est-ce-qu-une-api-laconsole-p018.jpg","alt":"Page originale de Qu'est-ce qu'une API ? - laConsole.pdf - page 18"}]}];

// ── Contenu fusionné depuis laConsoleArticles6Rest.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles6Rest: SubSection[] = [{"id":"laconsole-top-ressources-pour-dev-apis","title":"Top Ressources pour Dev : APIs","blocks":[{"type":"note","variant":"info","title":"Source","text":"Top Ressources pour Dev : APIs - laConsole.pdf - 3 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"Top Ressources pour Dev : APIs - laConsole 02/03/2025 11 : 16"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"p","text":"FREE"},{"type":"h","text":"APIs"},{"type":"p","text":"Découvrez une sélection d'API essentielles pour les"},{"type":"p","text":"développeurs, offrant des ressources variées et des"},{"type":"p","text":"données utiles pour vos projets web."},{"type":"h","text":"cloudconvert CountryLayer Doodle"},{"type":"h","text":"Ipsum"},{"type":"p","text":"API de conversion API de données"},{"type":"p","text":"de fichiers en des pays"},{"type":"p","text":"API d'images"},{"type":"p","text":"divers formats (démographie &"},{"type":"p","text":"aléatoires"},{"type":"p","text":"géographie)"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Découvrir"},{"type":"h","text":"DummyJSON Giphy ILoveAPI"},{"type":"p","text":"API REST fake API permettant API de traitement"},{"type":"p","text":"pour tester et d'intégrer des d'images, PDF et"},{"type":"p","text":"prototyper GIFs signatures"},{"type":"p","text":"Découvrir Découvrir Découvrir"},{"type":"h","text":"JSONPlaceholder Lorem Open API"},{"type":"h","text":"Picsum France"},{"type":"p","text":"API REST fake pour"},{"type":"p","text":"tester et prototyper"},{"type":"p","text":"https://laconsole.dev/ressources/api Page 1 sur 3"},{"type":"image","src":"images/laconsole-articles-6/top-ressources-pour-dev-apis-laconsole-p001.jpg","alt":"Page originale de Top Ressources pour Dev : APIs - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"Top Ressources pour Dev : APIs - laConsole 02/03/2025 11 : 16"},{"type":"p","text":"API d'images Ensemble d'APIs"},{"type":"p","text":"Découvrir"},{"type":"p","text":"aléatoires de données"},{"type":"p","text":"publiques"},{"type":"p","text":"Découvrir"},{"type":"p","text":"françaises"},{"type":"p","text":"Découvrir"},{"type":"h","text":"Open Food Open Sky OpenWeather"},{"type":"h","text":"Fact Map"},{"type":"p","text":"API de données"},{"type":"p","text":"de l'espace aérien"},{"type":"p","text":"API de référence API météo de"},{"type":"p","text":"Découvrir"},{"type":"p","text":"concernant référence"},{"type":"p","text":"l'alimentation"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Découvrir"},{"type":"h","text":"RandomAPI RandomUser TheMovieDB"},{"type":"p","text":"API générant des API générant des API de référence"},{"type":"p","text":"données sur utilisateurs fictifs répértoriant les"},{"type":"p","text":"mesure aléatoires films et séries"},{"type":"p","text":"Découvrir Découvrir Découvrir"},{"type":"h","text":"Trefle"},{"type":"p","text":"API de référence"},{"type":"p","text":"de données du"},{"type":"p","text":"monde végétal"},{"type":"p","text":"Découvrir"},{"type":"h","text":"Les meilleures APIs de données : une vraie"},{"type":"h","text":"mine d'or"},{"type":"p","text":"https://laconsole.dev/ressources/api Page 2 sur 3"},{"type":"image","src":"images/laconsole-articles-6/top-ressources-pour-dev-apis-laconsole-p002.jpg","alt":"Page originale de Top Ressources pour Dev : APIs - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"Top Ressources pour Dev : APIs - laConsole 02/03/2025 11 : 16"},{"type":"p","text":"Les APIs de données sont indispensables pour ajouter des fonctionnalités"},{"type":"p","text":"enrichissantes à vos applications. Que vous ayez besoin de données météo,"},{"type":"p","text":"démographiques, financières, ou culturelles, elles vous permettent d'accéder"},{"type":"p","text":"facilement à des informations précises et à jour."},{"type":"p","text":"Explorez des ressources gratuites et premium pour obtenir des données en temps"},{"type":"p","text":"réel. Découvrez des APIs REST et GraphQL robustes, parfaitement intégrables"},{"type":"p","text":"dans vos projets frontend et backend, quel que soit le framework que vous utilisez."},{"type":"p","text":"Attention : utiliser des APIs, c'est aussi relever des défis de performance et de"},{"type":"p","text":"sécurité ! Gestion des tokens, optimisation de la pagination, mise en cache des"},{"type":"p","text":"réponses... autant de bonnes pratiques indispensables qu'il est important d'avoir"},{"type":"p","text":"en tête."},{"type":"p","text":"Que vous soyez en phase de prototypage ou déjà en production, cette page vous"},{"type":"p","text":"propose de nombreuses APIs de données à exploiter au sein de vos projets."},{"type":"p","text":"E- COMMUNAUTÉ LÉGAL"},{"type":"p","text":"LEARNING"},{"type":"p","text":"Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning"},{"type":"p","text":"Formations légales"},{"type":"p","text":"A propos"},{"type":"p","text":"dédiée au développement web."},{"type":"p","text":"Cheatsheets Politique de"},{"type":"p","text":"Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Blog"},{"type":"p","text":"Faire ma"},{"type":"p","text":"status laConsole ©"},{"type":"p","text":"veille"},{"type":"p","text":"200"},{"type":"p","text":": 2025"},{"type":"p","text":"https://laconsole.dev/ressources/api Page 3 sur 3"},{"type":"image","src":"images/laconsole-articles-6/top-ressources-pour-dev-apis-laconsole-p003.jpg","alt":"Page originale de Top Ressources pour Dev : APIs - laConsole.pdf - page 3"}]}];

// ── Contenu fusionné depuis laConsoleArticles7Rest.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles7Rest: SubSection[] = [{"id":"laconsole-utiliser-notion-comme-headless-cms-api","title":"Utiliser Notion comme Headless CMS (API)","blocks":[{"type":"note","variant":"info","title":"Source","text":"Utiliser Notion comme Headless CMS (API) - laConsole.pdf - 17 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"h","text":"Utiliser Notion comme"},{"type":"h","text":"Headless CMS (API)"},{"type":"p","text":"Notion est une application de prise de note qui s'est"},{"type":"p","text":"rapidement diversifiée à d'autres cas d'utilisation. Avec son"},{"type":"p","text":"API, utilisez également Notion comme CMS."},{"type":"p","text":"# #"},{"type":"p","text":"⏾"},{"type":"p","text":"nov. 2022 7 min cms api"},{"type":"p","text":"Inscription à la"},{"type":"p","text":"NEWSLETTER"},{"type":"h","text":"Qu’est-ce que"},{"type":"h","text":"l’application Notion ?"},{"type":"p","text":"L’application Notion a été fondée en 2016 à San Francisco"},{"type":"p","text":"par Ivan Zhao et Simon Last ."},{"type":"p","text":"Il s’agit initialement d’une application de prise de notes qui"},{"type":"p","text":"s’est très rapidement diversifiée. Elle propose aujourd’hui"},{"type":"p","text":"de nombreuses fonctionnalités utiles comme la création de"},{"type":"p","text":":"},{"type":"p","text":"Tableur"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 1 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p001.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"Base de données"},{"type":"p","text":"Tableau Kanban"},{"type":"p","text":"Agenda"},{"type":"p","text":"Diagramme de Gantt"},{"type":"p","text":"Espace de stockage"},{"type":"p","text":"Wikis"},{"type":"p","text":"Etc."},{"type":"p","text":"En intégrant toutes ces fonctions, Notion excelle dans la"},{"type":"p","text":"création d’espaces de travail personnalisés ."},{"type":"p","text":"L’application Notion s’imposera par la suite rapidement sur"},{"type":"p","text":"le segment des logiciels de gestion de projet, en"},{"type":"p","text":"permettant entre autres, le travail collaboratif en temps"},{"type":"p","text":"réel ."},{"type":"p","text":"Notion devient ainsi une application « couteau"},{"type":"p","text":"suisse » proposant un service tout-en-un venant"},{"type":"p","text":"#"},{"type":"p","text":"concurrencer des géants comme les produits des"},{"type":"p","text":"suites Microsoft et Google ou encore des"},{"type":"p","text":"applications plus spécifiques comme Trello ."},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 2 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p002.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"h","text":"Comprendre Notion"},{"type":"h","text":"Les pages"},{"type":"p","text":"Aujourd’hui, Notion permet de gérer des contenus au sein"},{"type":"p","text":"de pages . Une page est définie par :"},{"type":"p","text":"1. Un titre"},{"type":"p","text":"2. Une image de couverture (facultative)"},{"type":"p","text":"3. Une icône (facultative)"},{"type":"p","text":"4. Un contenu se construit en utilisant des « blocs ». Ces"},{"type":"p","text":"blocs permettent d’insérer des titres, des paragraphes,"},{"type":"p","text":"des listes, des médias, des tableaux, des widgets"},{"type":"p","text":"(Google Maps, lecteur YouTube…) et bien d’autres"},{"type":"p","text":"ressources."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 3 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p003.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 3"},{"type":"h","text":"Page 4"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"h","text":"Les bases de données"},{"type":"p","text":"Ce qui rend Notion vraiment modulable, c’est en grande"},{"type":"p","text":"partie sa capacité à classifier ces pages au sein de bases"},{"type":"p","text":"de données . Les pages stockées au sein de bases de"},{"type":"p","text":"données vont ainsi pouvoir partager des caractéristiques"},{"type":"p","text":"communes appelées propriétés ."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 4 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p004.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 4"},{"type":"h","text":"Page 5"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"Avec ces propriétés, il devient ainsi possible de gérer"},{"type":"p","text":"n’importe quel contenu que pourrait utiliser un site web :"},{"type":"p","text":"articles de blog, produits e-commerce, etc."},{"type":"p","text":"Ces bases de données peuvent être affichées"},{"type":"p","text":"$"},{"type":"p","text":"différemment (calendrier, liste, galerie…). On"},{"type":"p","text":"appelle cela des vues ."},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Utiliser Notion comme"},{"type":"h","text":"CMS"},{"type":"h","text":"Qu’est-ce qu’un CMS ?"},{"type":"p","text":"Un CMS ( C ontent M anagement S ystem) est un logiciel en"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 5 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p005.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 5"},{"type":"h","text":"Page 6"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"ligne permettant de créer et administrer les contenus"},{"type":"p","text":"d’une application (site web, application mobile, chatbot…),"},{"type":"p","text":"sans nécessiter de connaissances en développement. Ce"},{"type":"p","text":"type d’outil est souvent désigné par l’expression d’outil «"},{"type":"p","text":"No Code ou Low Code »."},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"Voir la différence entre No Code et Low Code ."},{"type":"p","text":"Les CMS pour créer des sites web les plus connus"},{"type":"p","text":"$"},{"type":"p","text":"sont aujourd’hui WordPress , Wix ou encore"},{"type":"p","text":"SquareSpace ."},{"type":"h","text":"Notion en tant que CMS"},{"type":"p","text":"Mais Notion compte bien s’imposer dans le secteur des"},{"type":"p","text":"CMS en orientant peu à peu son développement en ce"},{"type":"p","text":"sens."},{"type":"p","text":"Cela se traduit évidemment par le fait de pouvoir l’utiliser"},{"type":"p","text":"directement depuis un navigateur (sans passer par une"},{"type":"p","text":"application desktop ou smartphone) mais surtout par sa"},{"type":"p","text":"fonctionnalité de partage . En haut de chaque page créée"},{"type":"code","filename":"page-6-exemple-1","language":"javascript","code":"Partager"},{"type":"p","text":"avec Notion on peut remarquer l’option . Cela"},{"type":"p","text":"permet :"},{"type":"p","text":"D’inviter des personnes sur son espace de travail"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 6 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p006.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 6"},{"type":"h","text":"Page 7"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"Notion (= workspace)."},{"type":"p","text":"De partager des pages sur le web . Pour cela, on"},{"type":"p","text":"remarque que les pages Notion sont hébergées via le"},{"type":"code","filename":"page-7-exemple-2","language":"javascript","code":".notion.site"},{"type":"p","text":"sous-domaine . Cette fonctionnalité de"},{"type":"p","text":"partage constitue les prémices de Notion en tant que"},{"type":"p","text":"CMS."},{"type":"p","text":"Avec la croissance et la démocratisation de Notion, de"},{"type":"p","text":"nombreuses technologies ont vu le jour autour de"},{"type":"p","text":"l’écosystème Notion. C’est entre autres le cas de super.so ,"},{"type":"p","text":"potion.so ou encore simple.ink qui proposent de créer des"},{"type":"p","text":"sites web performants à partir de pages Notion. Ces"},{"type":"p","text":"applications permettent par exemple :"},{"type":"p","text":"D’optimiser le SEO (chemins d’URL, title et méta"},{"type":"p","text":"description spécifiques pour une page)"},{"type":"p","text":"De customiser les pages avec des thèmes"},{"type":"p","text":"(préconstruits ou customisés)"},{"type":"p","text":"D’obtenir de bonnes performances avec la génération"},{"type":"p","text":"de pages statiques"},{"type":"p","text":"Si de manière générale les CMS facilitent grandement la"},{"type":"p","text":"gestion d’un site web, ils présentent 2 contraintes"},{"type":"p","text":"potentielles :"},{"type":"p","text":"1. Le fait de dépendre aussi du CMS pour la mise en"},{"type":"p","text":"page du site"},{"type":"p","text":"2. Sa distribution pour différents canaux (si un même"},{"type":"p","text":"contenu doit pouvoir être distribué à diverses"},{"type":"p","text":"plateformes)"},{"type":"h","text":"Notion en tant que Headless"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 7 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p007.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 7"},{"type":"h","text":"Page 8"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"h","text":"CMS"},{"type":"p","text":"Le « head » de « Headless CMS » fait référence au front"},{"type":"p","text":"office . Un système de gestion de contenu headless est"},{"type":"p","text":"alors constitué :"},{"type":"p","text":"D’un système pour stocker et gérer le contenu (type"},{"type":"p","text":"CRUD)"},{"type":"p","text":"D’une API pour interagir avec le contenu"},{"type":"p","text":"Cette approche permet aux développeurs de fournir un"},{"type":"p","text":"contenu en tant que service ( CaaS) ."},{"type":"p","text":"En séparant la couche de gestion du contenu de la couche"},{"type":"p","text":"de diffusion de ces mêmes contenus , un headless CMS"},{"type":"p","text":"vient ainsi résoudre les 2 problématiques évoquées dans le"},{"type":"p","text":"chapitre précédent : le templating des pages peut être"},{"type":"p","text":"géré par une technologie indépendante ( Next , Nuxt …) et"},{"type":"p","text":"les contenus peuvent être exploités depuis de nombreux"},{"type":"p","text":"canaux (applications mobile, sites web…)."},{"type":"p","text":"Les headless CMS pour les plus connus sont"},{"type":"p","text":"aujourd’hui Strapi , Contentful , Storyblok et"},{"type":"p","text":"$"},{"type":"p","text":"Directus , mais avec la publication de son API ,"},{"type":"p","text":"Notion a son mot à dire."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 8 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p008.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 8"},{"type":"h","text":"Page 9"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Utiliser l’API de Notion"},{"type":"p","text":"Pour les démonstrations à venir, j’utiliserai"},{"type":"p","text":"$"},{"type":"p","text":"Postman , une application s’étant imposée comme"},{"type":"p","text":"une référence pour tester des APIs."},{"type":"h","text":"#1 Créer une intégration"},{"type":"p","text":"Une intégration permet d’interagir par programmation"},{"type":"p","text":"avec des données stockées via Notion. Une intégration est"},{"type":"p","text":"essentielle afin de :"},{"type":"p","text":"Connecter Notion à une application tierce"},{"type":"p","text":"Automatiser des workflows dans Notion"},{"type":"p","text":"Exploiter l’API de Notion"},{"type":"p","text":"Pour créer une intégration Notion, rendez-vous sur"},{"type":"p","text":"https://www.notion.so/my-integrations , puis cliquer sur le"},{"type":"code","filename":"page-9-exemple-3","language":"javascript","code":"+ Nouvelle intégration"},{"type":"p","text":"bouton ."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 9 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p009.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 9"},{"type":"h","text":"Page 10"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"1. Donner un nom à l’intégration"},{"type":"p","text":"2. Uploader un logo (facultatif)"},{"type":"p","text":"3. Sélectionner un espace de travail Notion sur lequel"},{"type":"p","text":"installer l’intégration"},{"type":"p","text":"4. Pour les capacités , laisser les valeurs par défaut"},{"type":"code","filename":"page-10-exemple-4","language":"javascript","code":"Envoyer"},{"type":"p","text":"5. Cliquer sur pour enregistrer l’intégration"},{"type":"p","text":"Sur la page suivante, vous verrez apparaître votre « jeton"},{"type":"p","text":"d’intégration » (aussi appelé « clé API »). Ce jeton est"},{"type":"p","text":"confidentiel et sera indispensable lors de vos appels API."},{"type":"p","text":"Par défaut, une intégration Notion est interne."},{"type":"p","text":"Cela signifie qu’elle n’est disponible que pour vos"},{"type":"p","text":"$"},{"type":"p","text":"propres espaces de travail Notion. Ce paramétrage"},{"type":"p","text":"nous convient parfaitement."},{"type":"h","text":"#2 Créer une base de données"},{"type":"p","text":"1. Se placer dans un workspace Notion"},{"type":"code","filename":"page-10-exemple-5","language":"javascript","code":"Ajouter une page"},{"type":"p","text":"2. Cliquer sur dans la sidebar"},{"type":"p","text":"3. Saisir un titre pour votre base de données. Par"},{"type":"p","text":"exemple : « Articles »"},{"type":"code","filename":"page-10-exemple-6","language":"javascript","code":"Table Base de"},{"type":"p","text":"4. Cliquer sur dans la rubrique"},{"type":"code","filename":"page-10-exemple-7","language":"javascript","code":"données"},{"type":"p","text":"(vous pourriez très bien cliquer sur"},{"type":"code","filename":"page-10-exemple-8","language":"javascript","code":"Gallery"},{"type":"p","text":", cela n’est que cosmétique)"},{"type":"code","filename":"page-10-exemple-9","language":"javascript","code":"Nouvelle base de données"},{"type":"p","text":"5. Cliquer sur dans la"},{"type":"p","text":"sidebar secondaire qui s’ouvre sur la droite"},{"type":"code","filename":"page-10-exemple-10","language":"javascript","code":"Titre"},{"type":"p","text":"6. Créer par exemple les propriétés suivantes : ,"},{"type":"code","filename":"page-10-exemple-11","language":"javascript","code":"Slug Description Tags Statut Date de"},{"type":"p","text":", , , et"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 10 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p010.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 10"},{"type":"h","text":"Page 11"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"code","filename":"page-11-exemple-12","language":"javascript","code":"création"},{"type":"p","text":"7. Ajouter des enregistrements fictifs dans votre base de"},{"type":"p","text":"données"},{"type":"h","text":"#3 Partager la base de"},{"type":"h","text":"données avec l’intégration"},{"type":"p","text":"Nous possédons désormais une intégration Notion ainsi"},{"type":"p","text":"qu’une base de données : faisons leur faire connaissance !"},{"type":"p","text":"Afin de pouvoir utiliser l’API Notion pour communiquer"},{"type":"p","text":"avec des pages ou des bases de données, ces dernières"},{"type":"p","text":"doivent être partagées à notre intégration ."},{"type":"p","text":"Pour cela, rendez-vous sur votre base de données"},{"type":"code","filename":"page-11-exemple-13","language":"javascript","code":"…"},{"type":"p","text":"préalablement créée et cliquer sur tout à droite de"},{"type":"p","text":"l’entête."},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 11 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p011.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 11"},{"type":"h","text":"Page 12"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"code","filename":"page-12-exemple-14","language":"javascript","code":"+ Connecter à"},{"type":"p","text":"Survoler et cliquer sur votre intégration"},{"type":"p","text":"qui devrait apparaître dans la liste. Votre intégration a"},{"type":"p","text":"désormais accès à votre base de données !"},{"type":"h","text":"#4 Utiliser l’API"},{"type":"p","text":"Toutes les requêtes que nous enverrons à ‘API de Notion"},{"type":"p","text":"devront contenir les 2 en-têtes HTTP suivantes :"},{"type":"code","filename":"page-12-exemple-15","language":"javascript","code":"Authorization"},{"type":"p","text":": votre clé API"},{"type":"code","filename":"page-12-exemple-16","language":"javascript","code":"Notion-Version"},{"type":"p","text":": la version de l’API Notion . Ce"},{"type":"p","text":"versionnage de l’API permet d’éviter les « breaking"},{"type":"p","text":"changes ». Au moment de la publication de cet article,"},{"type":"code","filename":"page-12-exemple-17","language":"javascript","code":"2022-06-28"},{"type":"p","text":"cette version est définie à . Ce numéro"},{"type":"code","filename":"page-12-exemple-18","language":"javascript","code":"yyyy-"},{"type":"p","text":"indique la date de la dernière release au format"},{"type":"code","filename":"page-12-exemple-19","language":"javascript","code":"mm-dd"},{"type":"p","text":"."},{"type":"p","text":"Ouvrons désormais Postman afin de faire nos premiers"},{"type":"p","text":"tests API."},{"type":"p","text":"Créer une collection"},{"type":"code","filename":"page-12-exemple-20","language":"javascript","code":"Collection"},{"type":"p","text":"1. Créer une pour contenir nos appels"},{"type":"p","text":"API."},{"type":"code","filename":"page-12-exemple-21","language":"javascript","code":"No Auth"},{"type":"p","text":"2. Modifier le type d’authentification de à"},{"type":"code","filename":"page-12-exemple-22","language":"javascript","code":"Bearer Token"},{"type":"code","filename":"page-12-exemple-23","language":"javascript","code":"Token"},{"type":"p","text":"3. Copier et coller votre clé API dans le champ ."},{"type":"code","filename":"page-12-exemple-24","language":"javascript","code":"secret_"},{"type":"p","text":"Elle doit commencer par"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 12 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p012.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 12"},{"type":"h","text":"Page 13"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"p","text":"FREE"},{"type":"p","text":""},{"type":"p","text":"SOMMAIRE"},{"type":"p","text":"Créer une requête"},{"type":"p","text":"Qu’est-ce que l’application"},{"type":"p","text":"Notion ?"},{"type":"p","text":"1. Nommer la requête. Par exemple : « Récupération"},{"type":"p","text":"Comprendre Notion"},{"type":"p","text":"des articles »"},{"type":"p","text":"Les pages"},{"type":"p","text":"Les bases de données"},{"type":"code","filename":"page-13-exemple-25","language":"javascript","code":"POST"},{"type":"p","text":"2. Définir sa méthode HTTP à"},{"type":"p","text":"Utiliser Notion comme CMS"},{"type":"p","text":"3. Renseigner l’URL :"},{"type":"p","text":"Qu’est-ce qu’un CMS ?"},{"type":"code","filename":"page-13-exemple-26","language":"javascript","code":"https://api.notion.com/v1/databases/{db_i"},{"type":"p","text":"Notion en tant que CMS"},{"type":"code","filename":"page-13-exemple-27","language":"javascript","code":"d}/query {db_id}"},{"type":"p","text":"en remplaçant par l’identifiant"},{"type":"p","text":"Notion en tant que Headless"},{"type":"p","text":"de votre base de données"},{"type":"p","text":"CMS"},{"type":"p","text":"Utiliser l’API de Notion"},{"type":"code","filename":"page-13-exemple-28","language":"javascript","code":"Headers"},{"type":"p","text":"4. Dans l’onglet de la requête, ajouter"},{"type":"p","text":"#1 Créer une intégration"},{"type":"code","filename":"page-13-exemple-29","language":"javascript","code":"Notion-Version 2022-"},{"type":"p","text":"l’entrée avec pour valeur"},{"type":"p","text":"#2 Créer une base de données"},{"type":"code","filename":"page-13-exemple-30","language":"javascript","code":"06-28"},{"type":"p","text":"#3 Partager la base de"},{"type":"code","filename":"page-13-exemple-31","language":"javascript","code":"Send"},{"type":"p","text":"5. Cliquer sur"},{"type":"p","text":"données avec l’intégration"},{"type":"p","text":"#4 Utiliser l’API"},{"type":"p","text":"Pour récupérer l’identifiant de base de données,"},{"type":"p","text":"rendez-vous sur la page en question et cliquer"},{"type":"code","filename":"page-13-exemple-32","language":"javascript","code":"Partager"},{"type":"p","text":"sur (en haut à droite de l’interface"},{"type":"p","text":"$"},{"type":"code","filename":"page-13-exemple-33","language":"javascript","code":"Copier le lien"},{"type":"p","text":"Notion) puis cliquer sur . Vous"},{"type":"p","text":"obtiendrez un lien à la forme :"},{"type":"code","filename":"page-13-exemple-34","language":"javascript","code":"https://www.notion.so/{db_id}?v=…"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 13 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p013.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 13"},{"type":"h","text":"Page 14"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"Vous devriez voir apparaître les enregistrements de"},{"type":"code","filename":"page-14-exemple-35","language":"javascript","code":"JSON"},{"type":"p","text":"votre base de données au format :"},{"type":"code","filename":"page-14-exemple-36","language":"javascript","code":"{"},{"type":"code","filename":"page-14-exemple-37","language":"javascript","code":"\"object\": \"list\","},{"type":"code","filename":"page-14-exemple-38","language":"javascript","code":"\"results\": ["},{"type":"code","filename":"page-14-exemple-39","language":"javascript","code":"// les pages stockées dans la BDD"},{"type":"code","filename":"page-14-exemple-40","language":"javascript","code":"],"},{"type":"code","filename":"page-14-exemple-41","language":"javascript","code":"\"next_cursor\": null,"},{"type":"code","filename":"page-14-exemple-42","language":"javascript","code":"\"has_more\": false,"},{"type":"code","filename":"page-14-exemple-43","language":"javascript","code":"\"type\": \"page\","},{"type":"code","filename":"page-14-exemple-44","language":"javascript","code":"\"page\": {}"},{"type":"code","filename":"page-14-exemple-45","language":"javascript","code":"}"},{"type":"p","text":"Filtrer les résultats"},{"type":"p","text":"Il est tout à fait possible de filtrer les résultats retournés"},{"type":"code","filename":"page-14-exemple-46","language":"javascript","code":"Body"},{"type":"p","text":"par l’API. Dans l’onglet de la requête, cliquer sur"},{"type":"code","filename":"page-14-exemple-47","language":"javascript","code":"raw JSON"},{"type":"p","text":"l’option , sélectionner (sur le sélecteur à"},{"type":"p","text":"droite) et coller l’extrait suivant de manière à ne"},{"type":"p","text":"récupérer que les articles publiés ."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 14 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p014.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 14"},{"type":"h","text":"Page 15"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"code","filename":"page-15-exemple-48","language":"javascript","code":"{"},{"type":"code","filename":"page-15-exemple-49","language":"javascript","code":"\"filter\": {"},{"type":"code","filename":"page-15-exemple-50","language":"javascript","code":"\"property\": \"Statut\","},{"type":"code","filename":"page-15-exemple-51","language":"javascript","code":"\"status\": {"},{"type":"code","filename":"page-15-exemple-52","language":"javascript","code":"\"equals\": \"Publié\""},{"type":"code","filename":"page-15-exemple-53","language":"javascript","code":"}"},{"type":"code","filename":"page-15-exemple-54","language":"javascript","code":"}"},{"type":"code","filename":"page-15-exemple-55","language":"javascript","code":"}"},{"type":"p","text":"Pour effectuer n’importe quel autre type d’appel"},{"type":"p","text":"(récupération du contenu d’une page, ajout d’un"},{"type":"p","text":"enregistrement en base de données…), je vous laisse le"},{"type":"p","text":"soin de consulter la référence de l’API Notion ."},{"type":"p","text":"Si nous avons ici testé l’API de Notion via"},{"type":"p","text":"Postman, cette API est bien entendu intégrable et"},{"type":"p","text":"$"},{"type":"p","text":"exploitable rapidement au sein de vos projets"},{"type":"p","text":"grâce à ses nombreux SDK : JavaScript, PHP,"},{"type":"p","text":"Python, etc."},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 15 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p015.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 15"},{"type":"h","text":"Page 16"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"Thibaud d'Arros"},{"type":"p","text":"Fondateur Développeur"},{"type":"p","text":"● ●"},{"type":"p","text":"Formateur"},{"type":"p","text":"●"},{"type":"p","text":"'"},{"type":"p","text":"L"},{"type":"p","text":"Enfant, je passais des heures à"},{"type":"p","text":"'"},{"type":"p","text":"A"},{"type":"p","text":"U"},{"type":"p","text":"remodeler le monde avec des"},{"type":"p","text":"@"},{"type":"p","text":"T"},{"type":"p","text":"LEGO. Plus tard, je découvre le"},{"type":"p","text":"E"},{"type":"p","text":"U"},{"type":"p","text":"dev, des LEGO où les briques"},{"type":"p","text":"R"},{"type":"p","text":"sont remplacées par des lignes"},{"type":"p","text":""},{"type":"p","text":"de code. J'en fais mon métier"},{"type":"p","text":"puis je décide de transmettre"},{"type":"p","text":"cette passion en école de dev et"},{"type":"p","text":"sur laConsole."},{"type":"h","text":"Lire aussi"},{"type":"p","text":"10+"},{"type":"p","text":"Différences"},{"type":"p","text":"Principaux"},{"type":"p","text":"Qu'est-"},{"type":"p","text":"entre No"},{"type":"p","text":"Codes de"},{"type":"p","text":"ce"},{"type":"p","text":"Code et"},{"type":"p","text":"Réponse"},{"type":"p","text":"qu'une"},{"type":"p","text":"Low Code"},{"type":"p","text":"HTTP"},{"type":"p","text":"API ?"},{"type":"p","text":"cms api debug"},{"type":"p","text":"api culture web programmation"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 16 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p016.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 16"},{"type":"h","text":"Page 17"},{"type":"p","text":"Utiliser Notion comme Headless CMS (API) - laConsole 02/03/2025 09 : 40"},{"type":"p","text":"E-LEARNING COMMUNAUTÉ LÉGAL"},{"type":"p","text":"Formations Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},{"type":"p","text":"légales"},{"type":"p","text":"Cheatsheets A propos"},{"type":"p","text":"développement web."},{"type":"p","text":"Politique de"},{"type":"p","text":"Blog Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Faire ma veille"},{"type":"p","text":"status : 200 laConsole © 2025"},{"type":"p","text":"https://laconsole.dev/blog/utiliser-api-notion-cms Page 17 sur 17"},{"type":"image","src":"images/laconsole-articles-7/utiliser-notion-comme-headless-cms-api-laconsole-p017.jpg","alt":"Page originale de Utiliser Notion comme Headless CMS (API) - laConsole.pdf - page 17"}]}];

export const rest: Section = {
  id: "rest",
  title: "APIs & REST",
  icon: "Network",
  tags: [],
  subsections: [
    {
      id: "principes",
      title: "Principes REST",
      blocks: [
        { type: "p", text: "REST organise une API autour de ressources manipulées par les verbes HTTP. Chaque requête est indépendante (stateless)." },
        { type: "table", headers: ["Verbe", "Action", "Exemple"], rows: [["GET", "Lire", "GET /produits"], ["POST", "Créer", "POST /produits"], ["PUT", "Remplacer", "PUT /produits/1"], ["PATCH", "Modifier", "PATCH /produits/1"], ["DELETE", "Supprimer", "DELETE /produits/1"]] },
      ],
    },
    {
      id: "codes",
      title: "Codes de statut HTTP",
      blocks: [
        { type: "table", headers: ["Code", "Signification"], rows: [["200 OK", "Succès"], ["201 Created", "Ressource créée"], ["204 No Content", "Succès sans contenu"], ["400 Bad Request", "Requête invalide"], ["401 Unauthorized", "Non authentifié"], ["403 Forbidden", "Non autorisé"], ["404 Not Found", "Introuvable"], ["422 Unprocessable", "Validation échouée"], ["500 Server Error", "Erreur serveur"]] },
      ],
    },
    {
      id: "design",
      title: "Design d'URL et réponses",
      blocks: [
        { type: "code", filename: "api.txt", language: "bash", code: `# Noms au pluriel, ressources imbriquées
GET    /users               # liste
GET    /users/42            # un utilisateur
GET    /users/42/orders     # commandes d'un utilisateur
POST   /users/42/orders     # créer une commande` },
        { type: "code", filename: "reponse.json", language: "json", code: `{
  "data": [{ "id": 1, "nom": "Sac" }],
  "meta": { "page": 1, "total": 120, "parPage": 10 },
  "error": null
}` },
      ],
    },
    {
      id: "auth",
      title: "Authentification et CORS",
      blocks: [
        { type: "code", filename: "requete.txt", language: "bash", code: `# Bearer token (JWT) dans le header Authorization
GET /api/profil
Authorization: Bearer eyJhbGc.payload.signature
# Un JWT = 3 parties : header.payload.signature (base64)` },
        { type: "note", variant: "info", text: "CORS : le serveur autorise certaines origines via Access-Control-Allow-Origin. Une requête préflight (OPTIONS) précède les requêtes complexes." },
      ],
    },
    {
      id: "api-definition-flux",
      title: "Qu'est-ce qu'une API ?",
      blocks: [
        { type: "p", text: "Une solution qui permet à des applications de communiquer entre elles." },
        { type: "h", text: "Rôle d'une API" },
        { type: "list", items: [
          "Échanger des données entre applications",
          "Accéder à des services distants",
          "Exécuter des actions sur un serveur",
          "Renvoyer des réponses au client",
        ]},
        { type: "h", text: "Flux de communication" },
        {
          type: "diagram",
          content: `Application cliente
      │
      ▼
     API
      │
      ▼
   Serveur
      │
      ▼
Base de données
      │
      ▼
   Réponse  ──▶  Application cliente`,
        },
      ],
    },
    {
      id: "api-types-categories",
      title: "Les différents types d'API",
      blocks: [
        { type: "h", text: "Les 3 catégories d'API" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│                3 CATÉGORIES D'API                   │
│                                                     │
│  OUVERTE (Open API)                                 │
│  ├─ Accessible publiquement                         │
│  ├─ Utilisable sans restriction (ou avec clé API)   │
│  └─ Exemples : API météo, Google Maps               │
│                                                     │
│  PARTENAIRE (Partner API)                           │
│  ├─ Accessible uniquement via accord / licence      │
│  ├─ Utilisée entre entreprises partenaires          │
│  └─ Accès contrôlé et sécurisé                      │
│                                                     │
│  PRIVÉE (Private API)                               │
│  ├─ Utilisée uniquement en interne                  │
│  ├─ Sert à connecter les services internes          │
│  └─ Non exposée au public                           │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "table", headers: ["Catégorie", "Accès", "Usage", "Exemple"], rows: [
          ["Open API", "Public", "Sans restriction (ou clé API)", "Google Maps, météo"],
          ["Partner API", "Sur accord", "Entre entreprises", "API de paiement"],
          ["Private API", "Interne uniquement", "Services internes", "Microservices"],
        ]},
      ],
    },
    {
      id: "api-technologies",
      title: "Les technologies d'API",
      blocks: [
        { type: "h", text: "1. SOAP (Simple Object Access Protocol)" },
        { type: "list", items: [
          "Ancienne technologie",
          "Basée sur XML",
          "Très structurée et stricte",
          "Utilisée dans les systèmes bancaires / entreprises",
        ]},
        { type: "h", text: "2. REST (Representational State Transfer)" },
        { type: "list", items: [
          "Aujourd'hui le standard le plus utilisé",
          "Simple, rapide, basé sur HTTP",
          "On parle souvent d'API REST ou RESTful API",
          "Utilise généralement JSON",
        ]},
        { type: "code", filename: "verbes-rest.txt", language: "text", code: `GET    → lire des données
POST   → créer
PUT    → modifier (complet)
DELETE → supprimer` },
        { type: "h", text: "3. Web API (JavaScript / navigateur)" },
        { type: "p", text: "Web APIs standards : disponibles directement dans les navigateurs, permettent d'utiliser les fonctionnalités du navigateur. Documentation : https://developer.mozilla.org/en-US/docs/Web/API" },
        { type: "list", items: ["DOM API", "Fetch API", "Geolocation API"] },
        { type: "p", text: "Web APIs expérimentales : pas toujours compatibles avec tous les navigateurs, peu fiables en production, à utiliser avec prudence." },
      ],
    },
    {
      id: "api-express-creation-projet",
      title: "Créer une API REST avec Node.js (Express)",
      blocks: [
        { type: "h", text: "1. Création du projet" },
        { type: "p", text: "Installer Express Generator :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install -g express-generator` },
        { type: "p", text: "Créer un projet API sans vues :" },
        { type: "code", filename: "terminal", language: "bash", code: `express api --no-view
cd api
npm install` },
        { type: "h", text: "2. Structure du projet" },
        {
          type: "diagram",
          content: `api/
├── bin/
│   └── www          ← lance le serveur
├── routes/
│   ├── index.js     ← routes principales
│   └── users.js     ← routes utilisateurs
├── app.js           ← application Express principale
└── package.json`,
        },
        { type: "h", text: "3. Scripts Node.js" },
        { type: "p", text: "Dans package.json :" },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "start": "node ./bin/www"
  }
}` },
        { type: "h", text: "4. Redémarrage automatique (nodemon)" },
        { type: "p", text: "Installer nodemon :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install nodemon` },
        { type: "p", text: "Modifier le script dans package.json :" },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "start": "nodemon ./bin/www"
  }
}` },
      ],
    },
    {
      id: "api-routes-index-users",
      title: "Déclarer des routes — index.js et users.js",
      blocks: [
        { type: "h", text: "1. Rôle de index.js" },
        { type: "p", text: "Dans une application Express, index.js (ou app.js) sert à rediriger les routes vers des fichiers spécialisés." },
        { type: "code", filename: "routes/index.js", language: "javascript", code: `const express = require('express');
const router = express.Router();

// Import du fichier users.js
const usersRouter = require('./routes/users');

// Route principale vers users
router.use('/users', usersRouter);

module.exports = router;` },
        { type: "h", text: "2. Créer le dossier routes" },
        { type: "diagram", content: `api/
├── routes/
│   └── users.js
├── app.js
├── bin/
└── package.json` },
        { type: "h", text: "3. Créer le fichier users.js" },
        { type: "p", text: "Ce fichier contient toutes les routes liées aux utilisateurs." },
        { type: "code", filename: "routes/users.js", language: "javascript", code: `const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
    res.send('Liste des utilisateurs');
});

// POST /users
router.post('/', (req, res) => {
    res.send('Utilisateur créé');
});

// GET /users/:id
router.get('/:id', (req, res) => {
    res.send('Utilisateur avec id : ' + req.params.id);
});

module.exports = router;` },
      ],
    },
    {
      id: "api-restful-complete",
      title: "Créer une API RESTful complète",
      blocks: [
        { type: "h", text: "1. Principe d'une API REST" },
        { type: "p", text: "Une API REST permet de : récupérer, ajouter, modifier et supprimer des données. Elle utilise les verbes HTTP." },
        { type: "h", text: "2. Les verbes HTTP (CRUD)" },
        { type: "table", headers: ["Action", "Verbe HTTP", "Rôle"], rows: [
          ["Create", "POST", "Ajouter une donnée"],
          ["Read", "GET", "Lire / récupérer des données"],
          ["Update", "PUT", "Remplace complètement une donnée"],
          ["Update", "PATCH", "Modifie partiellement une donnée"],
          ["Delete", "DELETE", "Supprimer une donnée"],
        ]},
        { type: "h", text: "3. Exemple d'API REST (Express) — toutes les routes" },
        { type: "code", filename: "routes/users.js", language: "javascript", code: `const express = require('express');
const router  = express.Router();

// GET — récupérer un utilisateur
router.get('/users/:id', (req, res) => {
    res.json({ id: req.params.id });
});

// POST — créer un utilisateur
router.post('/users', (req, res) => {
    res.json({ message: "Utilisateur créé" });
});

// PUT — modifier complètement
router.put('/users/:id', (req, res) => {
    res.json({ message: "Utilisateur modifié complètement" });
});

// PATCH — modifier partiellement
router.patch('/users/:id', (req, res) => {
    res.json({ message: "Utilisateur modifié partiellement" });
});

// DELETE — supprimer
router.delete('/users/:id', (req, res) => {
    res.json({ message: "Utilisateur supprimé" });
});

module.exports = router;` },
        { type: "h", text: "4. Tester une API avec Postman" },
        { type: "p", text: "Créer un utilisateur :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : POST
URL     : http://localhost:3000/users
Body (JSON) :
{
  "email": "test@mail.com",
  "password": "123456"
}` },
        { type: "p", text: "Récupérer :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : GET
URL     : http://localhost:3000/users/USER_ID` },
        { type: "p", text: "Modifier :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : PATCH
URL     : http://localhost:3000/users/USER_ID` },
        { type: "p", text: "Supprimer :" },
        { type: "code", filename: "postman", language: "text", code: `Méthode : DELETE
URL     : http://localhost:3000/users/USER_ID` },
        { type: "h", text: "5. FETCH (côté frontend)" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('http://localhost:3000/users/123')
    .then(res  => res.json())
    .then(data => console.log(data));` },
        { type: "h", text: "6. MongoDB Compass" },
        { type: "p", text: "Outil pour visualiser la base de données : https://www.mongodb.com/products/tools/compass" },
        { type: "list", items: ["Voir les collections", "Vérifier les users", "Inspecter les données en direct"] },
        { type: "p", text: "Exemple de requête test (JSONPlaceholder) :" },
        { type: "code", filename: "js", language: "javascript", code: `fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

// Résultat :
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }` },
      ],
    },
    {
      id: "api-upload-multer",
      title: "Gérer les fichiers entrants (Upload avec Multer)",
      blocks: [
        { type: "p", text: "Permettre à l'API de : recevoir des fichiers (images, docs…), les stocker sur le serveur, enregistrer les infos dans MongoDB." },
        { type: "h", text: "1. Installation de Multer" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install multer` },
        { type: "h", text: "2. Dossier de stockage" },
        { type: "p", text: "Créer un dossier à la racine : uploads/. Il contiendra tous les fichiers envoyés." },
        { type: "h", text: "3. Middleware Multer" },
        { type: "p", text: "Créer : middlewares/files-storage.js" },
        { type: "code", filename: "middlewares/files-storage.js", language: "javascript", code: `const multer = require('multer');

const MIME_TYPES = {
    'image/jpg':  'jpg',
    'image/jpeg': 'jpg',
    'image/png':  'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        const name      = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('file');` },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│           FLUX UPLOAD MULTER                 │
│                                              │
│  Client (formulaire)                         │
│       │                                      │
│       ▼  POST multipart/form-data            │
│  Middleware Multer                           │
│       │                                      │
│       ├─ Destination → uploads/              │
│       └─ Filename    → nom_timestamp.ext     │
│       │                                      │
│       ▼                                      │
│  Route (req.file disponible)                 │
│       │                                      │
│       ▼                                      │
│  Service → sauvegarde dans MongoDB           │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "4. Modèle File (MongoDB)" },
        { type: "p", text: "Créer : models/file.js" },
        { type: "code", filename: "models/file.js", language: "javascript", code: `const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    userId:    { type: String, required: true },
    fileName:  { type: String, required: true },
    filePath:  { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', FileSchema);` },
        { type: "h", text: "5. Routes fichiers" },
        { type: "p", text: "Créer : routes/files.js" },
        { type: "code", filename: "routes/files.js", language: "javascript", code: `const express     = require('express');
const router      = express.Router();
const multer      = require('../middlewares/files-storage');
const fileService = require('../services/files');

// Upload fichier (APRÈS authentification)
router.post('/', multer, async (req, res) => {
    const fileData = {
        userId:   req.body.userId,
        fileName: req.file.filename,
        filePath: req.file.path
    };
    const result = await fileService.createOneFile(fileData);
    res.json(result);
});

module.exports = router;` },
        { type: "h", text: "6. Service Files — CRUD complet" },
        { type: "p", text: "Créer : services/files.js — Sauvegarder fichier :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `const File = require('../models/file');

exports.createOneFile = async (data) => {
    const file = new File(data);
    return await file.save();
};` },
        { type: "p", text: "Récupérer fichier :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `exports.getFile = async (id) => {
    return await File.findOne({ _id: id });
};` },
        { type: "p", text: "Modifier fichier :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `exports.updateFile = async (id, data) => {
    return await File.updateOne({ _id: id }, data);
};` },
        { type: "p", text: "Supprimer fichier (physique + BDD) :" },
        { type: "code", filename: "services/files.js", language: "javascript", code: `const fs   = require('fs');
const File = require('../models/file');

exports.deleteFile = async (id) => {
    const file = await File.findOne({ _id: id });

    if (!file) {
        throw new Error("Fichier introuvable");
    }

    // 1. Supprimer fichier physique du disque
    fs.unlinkSync(file.filePath);

    // 2. Supprimer l'entrée en base de données
    return await File.deleteOne({ _id: id });
};` },
        { type: "h", text: "7. Ajouter uploads dans Express" },
        { type: "p", text: "Dans app.js :" },
        { type: "code", filename: "app.js", language: "javascript", code: `app.use('/uploads', express.static('uploads'));` },
        { type: "p", text: "Permet d'accéder aux fichiers via URL." },
        { type: "h", text: "8. Test avec Postman" },
        { type: "code", filename: "postman", language: "text", code: `Upload fichier
Méthode : POST
URL     : http://localhost:3000/files
Body    : form-data
  key   : file
  type  : File (sélectionner un fichier)` },
        { type: "h", text: "9. Frontend avec EJS (test simple)" },
        { type: "p", text: "Installer EJS :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install ejs` },
        { type: "p", text: "Configurer Express :" },
        { type: "code", filename: "app.js", language: "javascript", code: `app.set('view engine', 'ejs');
app.set('views', './views');` },
        { type: "p", text: "Créer : views/index.ejs — Exemple formulaire upload :" },
        { type: "code", filename: "views/index.ejs", language: "html", code: `<form action="/files" method="POST" enctype="multipart/form-data">
    <input type="text" name="userId">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>` },
        { type: "h", text: "10. Accès aux images" },
        { type: "p", text: "Une image uploadée devient accessible via :" },
        { type: "code", filename: "url", language: "text", code: `http://localhost:3000/uploads/nom_image.png` },
        { type: "h", text: "11. CRUD fichiers — Récapitulatif" },
        { type: "table", headers: ["Opération", "Route", "Méthode Mongoose", "Fichier physique"], rows: [
          ["CREATE", "POST /files", "file.save()", "Créé par Multer dans uploads/"],
          ["GET", "GET /files/:id", "findOne()", "—"],
          ["UPDATE", "PATCH /files/:id", "updateOne()", "—"],
          ["DELETE", "DELETE /files/:id", "deleteOne()", "fs.unlinkSync()"],
        ]},
        { type: "p", text: "Exemple de route DELETE complète :" },
        { type: "code", filename: "routes/files.js", language: "javascript", code: `const express     = require('express');
const router      = express.Router();
const fileService = require('../services/files');

router.delete('/:id', async (req, res) => {
    try {
        const result = await fileService.deleteFile(req.params.id);
        res.json({ message: "Fichier supprimé", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;` },
        { type: "note", variant: "warning", text: "Quand on appelle DELETE /:id, on doit : 1. supprimer l'entrée dans MongoDB ET 2. supprimer le fichier dans le dossier uploads/" },
        { type: "h", text: "Gestion des fichiers utilisateurs" },
        { type: "p", text: "Gérer les fichiers (upload, stockage, suppression) des utilisateurs dans une API REST." },
        { type: "list", items: [
          "Utilisation de Multer pour l'upload",
          "Stockage des fichiers dans un dossier uploads/",
          "Enregistrement des métadonnées dans MongoDB",
          "Suppression possible via API (DELETE)",
        ]},
      ],
    },
    {
      id: "api-crud-recap",
      title: "CRUD — Récapitulatif",
      blocks: [
        { type: "h", text: "CRUD dans les API REST" },
        { type: "p", text: "CRUD = opérations de base pour manipuler des données. Chaque route d'une API REST correspond à une action CRUD." },
        { type: "table", headers: ["Action", "HTTP", "Rôle"], rows: [
          ["Create", "POST", "Créer une donnée"],
          ["Read", "GET", "Lire une donnée"],
          ["Update", "PUT / PATCH", "Modifier une donnée"],
          ["Delete", "DELETE", "Supprimer une donnée"],
        ]},
        { type: "h", text: "CRUD dans les bases de données" },
        { type: "p", text: "CRUD existe aussi côté base de données :" },
        { type: "table", headers: ["CRUD", "SQL", "MongoDB"], rows: [
          ["Create", "INSERT", "save()"],
          ["Read", "SELECT", "find()"],
          ["Update", "UPDATE", "updateOne()"],
          ["Delete", "DELETE", "deleteOne()"],
        ]},
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                  FLUX CRUD COMPLET                   │
│                                                      │
│  Frontend (fetch / Postman)                          │
│       │                                              │
│       ▼  HTTP Request (GET/POST/PUT/DELETE)          │
│  Route Express (routes/*.js)                         │
│       │                                              │
│       ▼                                              │
│  Service (services/*.js) ← logique métier            │
│       │                                              │
│       ▼                                              │
│  Modèle Mongoose (models/*.js)                       │
│       │                                              │
│       ▼                                              │
│  MongoDB Atlas (base de données)                     │
│       │                                              │
│       ▼  Résultat JSON                               │
│  Réponse au client (res.json())                      │
└──────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "api-types-reference",
      title: "Types d'API — Référence complète",
      blocks: [
        { type: "table", headers: ["Type", "Description", "Exemples"], rows: [
          ["API REST", "Architecture ressources, HTTP/HTTPS, JSON", "APIs modernes"],
          ["API SOAP", "Basée sur XML, contrat strict (WSDL)", "Banques, assurances"],
          ["API GraphQL", "Langage de requête, données à la demande, une seule route", "Facebook, GitHub"],
          ["API WebSocket", "Communication bidirectionnelle, temps réel", "Chat, jeux, notifs"],
          ["API RPC", "Appel de fonctions distantes", "gRPC, XML-RPC"],
          ["API Streaming", "Transmission continue de données", "Vidéo, musique, live data"],
          ["API Open Data", "Données publiques accessibles librement", "Météo, transports, stats"],
          ["API Internes", "Utilisées uniquement dans une organisation", "Microservices internes"],
          ["API de fichiers", "Upload, download, suppression", "Multer, S3"],
          ["API Cloud / SaaS", "Connexion à des services cloud externes", "AWS, Google Cloud, Azure"],
          ["API Hardware", "Communication avec du matériel", "Imprimantes, capteurs, IoT"],
          ["API navigateur (Web API)", "Fonctionnalités du navigateur", "fetch(), localStorage, géoloc"],
          ["API propriétaire", "Spécifique à une plateforme, souvent avec SDK", "Stripe, Twilio"],
        ]},
        { type: "h", text: "Comparatif REST vs SOAP vs GraphQL" },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────┐
│         REST      vs     SOAP     vs   GraphQL        │
│                                                       │
│  Format    JSON          XML           JSON           │
│  Standard  HTTP          WSDL          Schéma custom  │
│  Routes    Plusieurs     Unique        Unique (/graphql│
│  Usage     Web moderne   Entreprise    Apps complexes  │
│  Flexib.   Moyen         Faible        Élevé           │
└───────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "api-architecture-recap",
      title: "Architecture complète — Récapitulatif structure projet",
      blocks: [
        {
          type: "diagram",
          content: `api/
├── bin/
│   └── www                      ← Point d'entrée serveur
│
├── models/
│   ├── user.js                  ← Schéma Mongoose User
│   └── file.js                  ← Schéma Mongoose File
│
├── routes/
│   ├── index.js                 ← Routeur principal
│   ├── users.js                 ← Routes CRUD utilisateurs
│   └── files.js                 ← Routes CRUD fichiers
│
├── services/
│   ├── users.js                 ← Logique métier users
│   └── files.js                 ← Logique métier fichiers
│
├── middlewares/
│   └── files-storage.js         ← Configuration Multer
│
├── uploads/                     ← Dossier fichiers uploadés
│
├── views/
│   └── index.ejs                ← Vue EJS (test frontend)
│
├── app.js                       ← Application Express principale
└── package.json`,
        },
      ],
    },
    ...laConsoleArticlesRest,
    ...laConsoleArticles5Rest,
    ...laConsoleArticles6Rest,
    ...laConsoleArticles7Rest,
  ],
};
