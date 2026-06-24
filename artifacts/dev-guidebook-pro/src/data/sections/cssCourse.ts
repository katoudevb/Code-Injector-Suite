import type { SubSection } from "../types";

// Généré automatiquement depuis le cours complet HTML/CSS.
export const cssCourse: SubSection[] = [
  {
    "id": "0-introduction-au-html-et-au-css",
    "title": "Introduction au HTML et au CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Le but de ce premier chapitre est de vous convaincre rapidement de l’importance et de la place particulière du HTML et du CSS parmi l’ensemble des langages informatiques. Nous allons également nous intéresser à la question « pourquoi apprendre à coder » et passer en revue les alternatives existantes à l’apprentissage de la programmation en soulignant les points forts et faibles de chacune d’entre elles."
      },
      {
        "type": "h",
        "text": "HTML et CSS : deux langages incontournables"
      },
      {
        "type": "p",
        "text": "Il existe aujourd’hui des dizaines et des dizaines de langages informatiques et de programmation différents : HTML, CSS, JavaScript, PHP, Python, Ruby on Rails, C, C#, C++, Java, etc. pour ne citer qu’eux. Certains de ces langages ont des possibilités et des rôles similaires, ce qui signifie qu’ils vont être (dans une certaine mesure) interchangeables : on va pouvoir utiliser un langage ou l’autre pour effectuer une même opération selon notre sensibilité personnelle ou selon l’environnement dans lequel on se trouve. D’autres langages, en revanche, vont être beaucoup plus exclusifs ou ne pas avoir de concurrent et on va donc obligatoirement devoir passer par eux pour effectuer certaines opérations. Cela va être le cas du HTML et du CSS. En effet, le HTML et le CSS sont deux véritables standards en informatique qui n’ont à l’heure actuelle aucun concurrent comme cela va pouvoir être le cas pour le langage PHP par exemple (pour lequel il existe des alternatives comme Ruby on Rails ou Python entre autres). De plus, les langages HTML et CSS vont se trouver à la base de tout projet web car ils ont un rôle qui les rend incontournables : les navigateurs (Google Chrome, Safari, etc.) sont des programmes qui ont été construits pour pouvoir lire du code HTML au départ et qui ne peuvent aujourd’hui lire que du code HTML, CSS et JavaScript et nous allons donc nous appuyer sur ces langages (et sur le HTML en particulier) pour pouvoir afficher nos pages. En bref : quel que soit votre projet web (blog, site e-commerce, application mobile, etc.), vous devrez forcément utiliser du HTML et du CSS. Pour être un peu plus précis et pour anticiper un peu sur la suite de ce cours, le HTML est un langage de structure : il permet d’indiquer au navigateur que tel contenu est un titre, que tel autre est un simple texte, que cet objet est une image, que celui-ci est une liste, etc. Le navigateur, qui « comprend » le HTML, va se baser sur ces indications pour afficher les contenus. Voici un premier exemple de code HTML : Je n’ai pas l’intention de vous expliquer précisément ce que représente chaque élément dans ce code pour le moment car ceci n’aurait aucun intérêt. Pas d’inquiétude, nous aurons le temps de voir tout cela par la suite. L’idée ici est simplement de commencer à vous familiariser avec la syntaxe du HTML et de voir comment le navigateur va traiter ce code. On va ici se concentrer sur deux lignes : la ligne contenant l’élément HTML h1 qui représente un titre de niveau 1 et celle contenant l’élément p qui représente un paragraphe. Observons comment le navigateur va traiter ces contenus en ouvrant notre fichier dans Google Chrome par exemple : Comme vous pouvez le voir, seul le contenu textuel placé entre <h1> et </h1> et entre <p> et </p> est affiché à l’utilisateur. On voit bien que le navigateur comprend que ces deux contenus ne sont pas équivalents puisqu’il les traite de manière différente en les affichant différemment. Ajoutons maintenant un peu de CSS à la page. Le CSS est un langage de styles : il permet de modifier l’apparence ou le rendu visuel de nos contenus HTML et donc de nos pages web. Ce code CSS indique au navigateur que les titres de niveau 1 devront avoir une taille de 16px (pixels) et être de couleur orange. On indique également que nos paragraphes doivent avoir une taille de 16px et une couleur bleue. Voici le résultat : Une nouvelle fois, n’essayez pas de comprendre ces codes immédiatement : nous allons le faire dans les prochains chapitres. Le but ici n’est que de vous montrer à quoi le « code » en général va pouvoir ressembler. Quelles alternatives à l’apprentissage des langages informatiques ? De nombreuses personnes veulent lancer leur site internet sans forcément apprendre à coder. Est-ce une bonne idée ? Quels sont les risques ? Quelles alternatives existent pour créer un site web sans avoir à le coder ? Quels sont leurs points forts et points faibles ? Il existe selon moi trois alternatives à l’apprentissage de la programmation qu’on va pouvoir considérer lorsqu’on a un projet web mais qu’on ne veut pas forcément devenir développeur :"
      },
      {
        "type": "list",
        "items": [
          "Le recours à un développeur / une agence externe ;",
          "L’utilisation d’un CMS ;",
          "L’utilisation d’un éditeur WYSIWIG."
        ]
      },
      {
        "type": "p",
        "text": "Je vais tenter d’expliquer les points forts et faibles de chacune de ces alternatives et vous montrer en quoi la connaissance ou à minima la compréhension du fonctionnement des langages informatiques reste quasi indispensable quelle que soit l’option choisie."
      },
      {
        "type": "h",
        "text": "Solution n°1 : faire appel à un développeur externe"
      },
      {
        "type": "p",
        "text": "La première solution, qui est certainement la plus évidente pour créer un site internet lorsqu’on ne veut pas le coder soi-même, est de faire appel à un développeur externe ou même à une agence de développement. Cette première alternative présente à la fois des avantages et des inconvénients. Tout d’abord, parlons du prix. Ici, il va être très variable selon le site que vous allez vouloir créer bien sûr mais également selon le prestataire choisi. En effet, si vous faites appel à une agence, le coût sera très souvent beaucoup plus élevé que si vous faites appel à un freelance (d’autant plus si vous passez par une plateforme d’annonces où ils sont en concurrence). Sans rentrer dans le débat sur la qualité, il me semble quand même honnête de dire qu’aujourd’hui une personne seule ne peut pas tout (bien) faire : design, intégration, etc. En plus de cela, deux autres questions d’importance se posent lorsque vous faites appel à un prestataire externe. La première est : comment bien expliquer ce que vous voulez créer comme site si vous ne savez pas comment le code fonctionne ? Un client qui n’a aucune notion technique ne va pas pouvoir définir clairement ce qu’il veut. En effet, comprenez bien que le développement est une langue différente tout comme peut l’être la mécanique. Lorsque vous n’exprimez pas précisément votre besoin avec ses spécificités techniques, vous laissez le soin au développeur de les imaginer, ce qui entraine souvent des incompréhensions entre le client et le prestataire développeur. Imaginez que vous faisiez appel à des ouvriers pour construire une maison mais sans passer par un architecte : vous n’allez pas pouvoir décrire précisément ce que vous voulez. Vous allez décrire votre besoin avec vos mots comme par exemple : « je veux une terrasse, 4 chambres, une cheminée », etc. De votre point de vue vous « avez tout dit ». Cependant, du point de vue des ouvriers, l’essentiel est manquant : quelles matières utiliser ? quel type d’évacuation des eaux installer ? où faire passer les câbles électriques ? quel type de toiture choisir ? Cela va donc naturellement mener à un client mécontent et qui va demander des modifications. Souvent, il va demander ce qui lui semble être de « petites modifications » mais les modifications demandées ne vont pouvoir être effectuées qu’en changeant en profondeur le site. Si vous passez par une grosse agence, il est ici possible qu’il y ait une personne dont le rôle est de transcrire vos besoins en termes techniques. Cependant, ce genre d’agences est bien souvent hors budget pour le commun des mortels. Enfin, reste la question de la maintenabilité du site : une fois le site livré, comment le faire évoluer ? Comment faire si des bugs apparaissent avec le temps et l’évolution des langages informatiques ? Ici, ne comptez pas trop sur votre prestataire de base pour vous servir d’aide en continu (à moins que vous ne le payiez à nouveau à chaque fois !). Attention : je n’essaie pas de vous convaincre de ne pas passer par une agence ici. Ce que je veux vous montrer est que passer par un prestataire ne dispense pas de connaitre certaines bases en informatique : si vous connaissez ces bases et si vous comprenez comment fonctionne un site web vous pourrez vous exprimer beaucoup plus clairement et exprimer votre besoin dans un langage qui sera compréhensible pas les développeurs. Vous aurez ainsi beaucoup plus de chances d’avoir un site conforme à vos attentes et vous économiserez sur la facture finale (car moins d’allers-retours et d’incertitude)."
      },
      {
        "type": "h",
        "text": "Solution n°2 : Utiliser un CMS"
      },
      {
        "type": "p",
        "text": "Un CMS (pour « Content Management System » ou « Système de Gestion de Contenu ») désigne un ensemble d’applications / de logiciels qui vont permettre de mettre en place et de gérer un site internet. Un CMS permet donc de posséder un site internet sans se soucier de comment fonctionne le code. Vous pouvez ici imaginer les différentes commandes d’une voiture : lorsque vous achetez une voiture, vous n’avez pas besoin de savoir comment la voiture fonctionne en soi ou de qui se cache sous le capot ; vous n’avez qu’à utiliser les commandes à votre disposition : pédales, levier de vitesse, volant, etc. Parmi les CMS les plus connus en France on peut notamment nommer WordPress qui permet aujourd’hui de créer plus ou moins n’importe quel type de site ou PrestaShop pour créer un site e-commerce. Les CMS sont généralement conçus sur le même modèle d’architecture modulable : les utilisateurs vont installer le CMS de base et vont ensuite pouvoir ajouter différents modules ou plugins pour personnaliser leur site. Utiliser un CMS semble donc parfait pour quelqu’un qui ne sait pas coder à priori. La réalité est toutefois différente. Ici, vous devez bien comprendre que les CMS sont souvent très complexes et que leurs plus grands avantages (la simplicité d’installation et la modularité) vont être également souvent leurs plus grandes faiblesses. En effet, comme les CMS sont créés de façon à pouvoir être utilisés par tous, la plupart d’entre eux sont d’une complexité rare (du point de vue du code) et vont souvent posséder des tonnes de fonctionnalités qui ne vont pas vous être utiles afin de couvrir le plus de besoins possibles et ainsi satisfaire le plus d’utilisateurs. De plus, une autre contrepartie de cette architecture commune et modulable est qu’il va être très compliqué d’effectuer des modifications sur la structure de votre site à posteriori sans tout casser à moins d’avoir de sérieuses connaissances techniques sur le CMS en question. Enfin, il reste le problème de l’incompatibilité possible entre différents modules que vous pourriez installer après avoir créé votre site. L’usage des CMS reste cependant un bon compromis pour une personne lançant un site sans prétention ou pour quelqu’un qui n’a pas un besoin très spécifique mais, pour maitriser complètement son CMS et pour faire évoluer son site en toute sérénité, il faut finalement être un excellent développeur et un utilisateur expérimenté du CMS en question."
      },
      {
        "type": "h",
        "text": "Solution n°3 : la création avec un éditeur WYSIWIG"
      },
      {
        "type": "p",
        "text": "Les éditeurs WYSIWIG (« What You See Is What You Get » ou en français « Ce que vous voyez est ce que vous obtenez ») sont des éditeurs qui vont créer eux même le code à partir d’un modèle que vous allez créer. Un éditeur WYSIWIG va se présenter de la façon suivante : une palette d’outils sur le côté et une page dans laquelle vous allez pouvoir utiliser ces outils. Vous allez ainsi par exemple pouvoir insérer un rectangle dans votre page puis placer du texte dedans puis changer la taille de ce texte et etc. L’éditeur va ensuite se charger de transformer ce que vous avez créé (« ce que vous voyez ») en code. Le gros souci avec ces éditeurs est qu’ils ne possèdent pas la même logique qu’un humain et qu’ils ne peuvent pas penser un projet ou une page dans sa globalité. Ainsi, le code créé va très souvent être de très mauvaise qualité et cela va impacter le référencement de votre site entre autres. Je ne parlerai pas plus de ces éditeurs qui ne constituent pas une alternative valide à mes yeux par rapport aux autres solutions proposées. En résumé : apprendre à coder, ce n’est pas que pour les développeurs ! Je pense vous avoir démontré l’intérêt de maitriser au moins les bases du développement dans la partie précédente si vous avez un projet lié au web : économie d’argent, plus d’efficacité, création d’un site conforme à vos attentes, etc. En effet, apprendre à coder ou tout au moins connaitre les bases en développement c’est avant tout mettre un pied dans le monde des développeurs pour pouvoir les comprendre et pouvoir vous faire comprendre. De plus, connaitre le rôle des différents langages et comprendre comment fonctionne votre site permet de pouvoir le gérer de manière beaucoup plus efficace. En effet, je suis et reste persuadé qu’on ne peut pas travailler sereinement lorsqu’on ne comprend pas son outil de travail ou la structure dans laquelle on travaille. C’est évident et pourtant la plupart des gens essayent de se persuader et de persuader les autres du contraire. Pourquoi ? Car tout le monde utilise internet aujourd’hui et la majorité des gens ne veulent pas faire l’effort de comprendre comment tout cela fonctionne. Ce n’est pas un problème lorsque vous êtes un simple utilisateur, mais ça le devient lorsque vous devez gérer un site internet ou même lorsque vous travaillez dans un domaine lié au digital. Deviendriez-vous plombier sur un coup de tête ? Non, car vous n’y connaissez rien en plomberie. C’est exactement pareil sur le web. L’immense majorité des échecs liés au web proviennent du fait que des personnes se lancent dans l’aventure sans la moindre connaissance de leur environnement. N’oubliez pas qu’il est essentiel pour qu’un commerce fonctionne -et aujourd’hui plus que jamais- d’avoir une compréhension de son propre business, de son architecture et de son infrastructure. Si vous faîtes l’effort d’acquérir ces connaissances, je vous garantis que vous avez d’ores- et-déjà battu 99% de vos concurrents. Convaincu de l’utilité d’apprendre à coder ? Dans ce cas, passons à la suite ! Car je suis certain que vous êtes impatients de découvrir ce que signifient les initiales « HTML » et « CSS » !"
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mon premier site</title>\n  <style>\n    /* Exemple CSS intégré */\n    h1 { color: orange; font-size: 32px; }\n    p  { color: #333;   font-size: 16px; }\n  </style>\n</head>\n<body>\n  <h1>Titre principal</h1>\n  <p>Paragraphe de texte.</p>\n</body>\n</html>"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "1-d-finition-et-utilisation-du-html-et-du-",
    "title": "Définition et utilisation du HTML et du CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons dans cette leçon poser une première définition du HTML et du CSS et comprendre plus précisément quel va être leur rôle dans la création d’un site Internet. On va ainsi expliquer ce qu’on peut faire et ce qu’on ne peut pas faire avec chacun de ces deux langages."
      },
      {
        "type": "h",
        "text": "Le HTML : langage de balisage"
      },
      {
        "type": "p",
        "text": "Le HTML est un langage qui a été créé en 1991. Les sigles « HTML » sont l’abréviation de « HyperText Markup Language » ou « langage de balisage hypertexte » en français. Le HTML est donc un langage de balisage, c’est-à-dire un langage qui va nous permettre de définir les différents contenus d’une page. Pourquoi est-il si important de définir les différents contenus d’une page ? Pour répondre à cette question, il va avant tout falloir que vous compreniez ce qu’est un site internet et ce qu’il se passe lorsque vous essayez d’accéder à un site internet. Ici, je vais essayer de rester le plus simple possible. Tout d’abord, qu’est-ce qu’un site internet ? Un site internet est un ensemble de fichiers de code et de médias (images, vidéos, etc.) liés entre eux et disponibles à tout moment via le web. Pour que les différentes ressources constituant un site internet soient toujours accessibles, on les héberge généralement sur un serveur d’un hébergeur professionnel comme OVH par exemple. Un serveur est un ordinateur plus ou moins comme les nôtres et qui stocke les différentes ressources d’un ou de plusieurs site internet. Les seules différences entre un serveur et nos ordinateurs est qu’un serveur est généralement beaucoup plus puissant que nos ordinateurs, qu’il est (normalement) toujours connecté à Internet et qu’il va posséder quelques logiciels supplémentaires lui permettant d’exécuter certains codes. Notez ici qu’on appelle ces ordinateurs des « serveurs » car leur seul et unique rôle va être de « servir » (au sens de « fournir ») des pages dès que quelqu’un va le leur demander. Comment accède-t-on à une page d’un site internet ? Pour répondre à cette deuxième question, je vais m’aider d’un exemple. Imaginons que l’on souhaite accéder à la page d’accueil de mon site. Pour cela, on va taper www.pierre-giraud.com dans la barre de notre navigateur. Lorsqu’on demande à accéder à une page d’un site internet, nous sommes ce qu’on appelle des « clients ». Notre navigateur va contacter le serveur sur lequel est hébergée la page à laquelle on souhaite accéder et lui demander de renvoyer les différents éléments de la page : la page sous forme de code HTML et potentiellement les différents médias intégrés dans la page (ce qu’il se passe est en pratique bien évidemment plus complexe mais encore une fois je simplifie volontairement ici). Le navigateur va donc recevoir ces différents éléments et les afficher. Cependant, comment fait-il pour savoir ce qu’il doit afficher ? Il va bien évidemment utiliser le code HTML. En effet, le navigateur comprend bien les différentes balises HTML (le HTML utilise ce qu’on appelle des « balises » pour définir les contenus) et va donc « comprendre » de quoi est constituée notre page et ce qu’il doit afficher. Le rôle du HTML est donc crucial puisqu’il va être notre langage privilégié pour indiquer aux navigateurs ce quoi est constituée chaque page et ce qu’ils doivent afficher. Grâce au HTML, on va par exemple pourvoir indiquer que tel contenu est un texte qui n’est qu’un paragraphe, que tel autre contenu est un texte qui est un titre de niveau 1 dans notre page, que tel autre contenu est une liste, un lien, etc. En plus de cela, le HTML va également nous permettre d’insérer différents médias (images, vidéos, etc.) dans nos pages web en indiquant au navigateur « à cette place-là dans ma page, je veux que s’affiche cette image ». Notez que dans ce cas précis, pour que le navigateur affiche la bonne image, on va lui fournir l’adresse de l’image dans le code HTML."
      },
      {
        "type": "h",
        "text": "Le CSS : langage de styles"
      },
      {
        "type": "p",
        "text": "Le CSS a été créé en 1996, soit 5 ans après le HTML. Les sigles « CSS » sont l’abréviation de « Cascading StyleSheets » ou « feuilles de styles en cascade » en français. Le CSS vient résoudre un problème bien différent du HTML : en effet, le HTML sert à définir les différents éléments d’une page, à leur donner du sens. Le CSS, lui, va servir à mettre en forme les différents contenus définis par le HTML en leur appliquant des styles. Le HTML va donc créer la structure des pages tandis que le CSS va nous permettre de modifier l’apparence des contenus de la page. On va ainsi par exemple pouvoir définir la taille, la couleur ou l’alignement de certains contenus HTML et notamment en l’occurrence de certains textes dans notre page. Pour styliser le contenu lié à un élément HTML en CSS, nous allons pouvoir le cibler en nous basant sur l’élément HTML en question ou en utilisant d’autres procédés que nous verrons plus tard dans ce cours. A retenir : n’utilisez pas le HTML pour mettre en forme vos contenus ! Voilà une chose que je vais vous répéter encore et encore au fil de ces premiers chapitres : vous ne devez jamais utiliser le HTML pour faire le travail du CSS. En effet, si vous affichez la page en HTML créée ci-dessus dans votre navigateur sans y ajouter de CSS, vous pouvez remarquer que le contenu qui a été déclaré comme étant un titre s’affiche en grand et en gras, tandis que la taille du texte de notre paragraphe est plus petite et la police moins grasse. Certains débutants en déduisent donc « pour mettre un texte en grand et en gras, il suffit d’utiliser une balise représentant un titre en HTML ». Sortez-vous cela immédiatement de la tête ! Le HTML est un langage qui a été créé pour structurer des pages et pour donner du sens au contenu. Le principe même du HTML est d’indiquer aux navigateurs que tel contenu est un texte qui doit être considéré comme un titre tandis que tel autre contenu est un texte qui doit être considéré comme un simple paragraphe et etc. Si votre navigateur affiche par défaut les contenus textuels que vous avez déclaré comme des titres en HTML en grand et en gras et à l’inverse les paragraphes en plus petit c’est justement parce que chaque navigateur possède sa propre feuille de styles (c’est-à-dire son propre code CSS) qui sera utilisé si aucun code CSS n’a été précisé de notre côté. Je répète ici car cela me semble très important : chaque navigateur a une feuille de style dans laquelle sont définis des styles pour chaque contenu HTML qui seront appliqués par défaut si aucun autre code CSS n’est fourni. Cela permet d’apporter une mise en forme minimale au contenu dans les cas rares où les styles CSS ne seraient pas définis ou si notre code CSS ne peut pas être chargé. En fournissant nos styles CSS pour les différents contenus de notre page, nous allons donc pouvoir définir l’apparence de ceux-ci puisque les styles que nous allons fournir vont être considérés comme prioritaires par rapport à ceux du navigateur. N’essayez pas forcément de comprendre comment fonctionne le code ci-dessus, ce n’est pas le but ici. La seule chose que vous devez comprendre est qu’on applique ici des styles CSS à notre premier contenu HTML placé entre les balises <h2> et </h2> (qui servent à définir un titre de niveau 2) mais pas au deuxième. Pour notre premier titre de niveau 2, on indique qu’on veut une taille de texte de 16px et une couleur de texte orange et c’est donc ce que va afficher le navigateur. Comme on n’indique aucun style pour le deuxième titre de niveau 2, le navigateur va charger ses styles par défaut. Note : Chaque version de chaque navigateur possède sa propre feuille de style, et c’est la raison pour laquelle une même page peut être rendue différemment d’un navigateur à un autre ou même d’une version d’un navigateur à une autre version de ce même navigateur ! Cependant, aujourd’hui, un véritable effort d’harmonisation a été fait et la plupart des navigateurs utilisent plus ou moins les mêmes styles par défaut. En bref, retenez que vous ne devez jamais utiliser le HTML pour modifier l’apparence d’un contenu car cela est le rôle du CSS. Si vous faussez le tout en déclarant par exemple des titres qui n’en sont pas, vous pervertissez le rôle du HTML et cela va impacter fortement la qualité de votre page web, sa validité et votre référencement global."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!-- HTML : structure (le QUOI) -->\n<h1>Bienvenue</h1>\n<p class=\"intro\">Premier paragraphe de mon site.</p>\n<img src=\"photo.jpg\" alt=\"Photo de profil\">"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* CSS : apparence (le COMMENT ça s'affiche) */\nh1 {\n  color: #2c3e50;\n  font-size: 2rem;\n}\n.intro {\n  color: #666;\n  font-size: 1.1rem;\n  line-height: 1.6;\n}\nimg {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 50%;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "4-choix-et-installation-de-l-diteur-de-tex",
    "title": "Choix et installation de l’éditeur de texte",
    "blocks": [
      {
        "type": "p",
        "text": "Nous en avons désormais fini avec la théorie et les définitions, et les chapitres qui vont suivre vont être l’occasion pour vous de commencer à pratiquer en codant en HTML et en CSS. Mais avant tout, il va nous falloir mettre en place notre environnement de travail, c’est-à- dire réunir les différents éléments qui vont nous permettre de pouvoir coder en HTML et en CSS. Pour coder en HTML et en CSS, cela va être très simple puisque nous n’aurons besoin que d’un éditeur de texte."
      },
      {
        "type": "h",
        "text": "Qu’est-ce qu’un éditeur de texte ?"
      },
      {
        "type": "p",
        "text": "Un éditeur de texte est un programme qui va nous permettre d’écrire des lignes de code et de simplifier l’écriture de ce code en embarquant une panoplie de fonctionnalités utiles comme l’auto-complétion de certaines commandes de code et etc. Un éditeur de texte ne doit pas être confondu avec un outil de traitement de texte comme Word. L’éditeur de texte a véritablement vocation à créer des pages de code dans n’importe quel langage comme le HTML, le CSS, le JavaScript ou même encore le PHP en utilisant du texte brut tandis qu’un outil de traitement de texte comme Word permet de créer du texte « enrichi » c’est-à-dire du texte mis en forme (choix de l’alignement, de la police, du poids de celle-ci, etc.). Aujourd’hui, chaque système d’exploitation reconnu (Windows, Mac, Linux) embarque son ou ses propres éditeurs de texte nativement, ce qui signifie que votre ordinateur dispose déjà certainement d’un éditeur de texte préinstallé vous permettant de créer des pages de code en HTML, CSS, etc."
      },
      {
        "type": "h",
        "text": "Comment bien choisir son éditeur de texte ?"
      },
      {
        "type": "p",
        "text": "Il existe aujourd’hui des milliers d’éditeurs disponibles sur le web. Certains fonctionnent exclusivement sous certains environnements (Windows, Mac Os, etc.) tandis que d’autres vont être cross-plateformes (fonctionner sous plusieurs environnements). Certains éditeurs de texte vont être gratuits tandis que d’autres vont être payants ou disponibles sous forme d’abonnement. Le plus connu des éditeurs de texte est certainement Notepad++, le fameux éditeur fonctionnant avec Windows. Un éditeur va donc nous permettre de pouvoir écrire des pages de code et de les enregistrer au bon format (c’est-à-dire avec la bonne extension). Un bon éditeur de texte est selon moi un éditeur qui va proposer différentes options pour vous aider à coder. Parmi ces options, on peut notamment citer :"
      },
      {
        "type": "list",
        "items": [
          "La mise en couleur des différents éléments d’un langage informatique pour pouvoir"
        ]
      },
      {
        "type": "p",
        "text": "les distinguer (un bon éditeur de texte fera apparaitre les éléments HTML d’une couleur différente des attributs, etc.) ;"
      },
      {
        "type": "list",
        "items": [
          "L’affichage d’indications lorsque l’on fait une faute de syntaxe dans le code avec"
        ]
      },
      {
        "type": "p",
        "text": "une explication du problème en question ;"
      },
      {
        "type": "list",
        "items": [
          "L’auto-complétion des balises (un bon éditeur écrira automatiquement la balise"
        ]
      },
      {
        "type": "p",
        "text": "fermante d’un élément HTML par exemple dès que vous aurez écrit la balise ouvrante) ;"
      },
      {
        "type": "list",
        "items": [
          "Des bibliothèques (notamment jQuery) intégrées ou téléchargeables et installables"
        ]
      },
      {
        "type": "p",
        "text": "en 1 clic ;"
      },
      {
        "type": "list",
        "items": [
          "Une indentation automatique et pertinente."
        ]
      },
      {
        "type": "p",
        "text": "Aux vues de ce que nous allons réaliser durant ce cours, et pour un débutant, la plupart des éditeurs vont se valoir et vont parfaitement convenir. Je vous conseille donc simplement d’en trouver un compatible avec votre système et qui a déjà fait ses preuves. Personnellement, j’utiliserai pour ce cours la version gratuite du logiciel Komodo, c’est-à- dire Komodo Edit qui est multiplateformes (il fonctionne aussi bien sous Windows que Mac ou encore Ubuntu). Vous pouvez télécharger la version gratuite de cet éditeur de texte à l’adresse suivante : https://www.activestate.com/products/komodo-ide/downloads/edit/ (connexion Internet requise) et commencer à coder immédiatement en HTML, CSS, etc. Faites bien attention à télécharger Komodo Edit et non pas Komodo IDE qui est la version payante du logiciel. Une fois l’éditeur de votre choix installé, n’hésitez pas à l’ouvrir pour vous familiariser avec son affichage et découvrir les nombreuses options qu’il propose. Un bon éditeur de texte devrait avoir un fond foncé lorsque vous créez une nouvelle page. Si ce n’est pas le cas, je vous conseille fortement de changer la couleur de fond (vous devrez certainement également changer la couleur de votre code afin d’y voir) pour coder avec un plus grand confort visuel. Voici une liste d’autres éditeurs reconnus si jamais vous voulez davantage de choix :"
      },
      {
        "type": "list",
        "items": [
          "Microsoft Visual Code : Microsoft Visual Code est le dernier éditeur à la mode parmi"
        ]
      },
      {
        "type": "p",
        "text": "les développeurs et ceci pour de bonnes raisons. Gratuit, il dispose de toutes les fonctionnalités qu’un développeur peut attendre et d’une très bonne ergonomie ;"
      },
      {
        "type": "list",
        "items": [
          "Atom : Atom est doté d’une excellente ergonomie qui facilite grandement la prise"
        ]
      },
      {
        "type": "p",
        "text": "en main et l’approche du code pour les nouveaux développeurs. Cet éditeur de texte dispose de toutes les fonctions qu’on attend d’un bon éditeur : bibliothèques intégrées, auto-complétion des balises, etc."
      },
      {
        "type": "list",
        "items": [
          "Notepad++ : Certainement l’éditeur de texte le plus connu de tous les temps,"
        ]
      },
      {
        "type": "p",
        "text": "Notepad++ est également l’un des plus anciens. Il a passé le test du temps et a su s’adapter au fur et à mesure en ajoutant des fonctionnalités régulièrement comme l’auto-complétion des balises, le surlignage des erreurs de syntaxe dans le code etc. Le seul bémol selon moi reste son interface qui est à peaufiner."
      },
      {
        "type": "list",
        "items": [
          "Brackets : Brackets est un éditeur très particulier puisqu’il est tourné uniquement"
        ]
      },
      {
        "type": "p",
        "text": "vers les langages de développement front-end (c’est-à-dire HTML, CSS et JavaScript). Cependant, il dispose d’une excellente ergonomie (UI / UX) et d’un support extensif pour les langages supportés."
      },
      {
        "type": "h",
        "text": "Logiciel éditeur de texte contre éditeur en ligne"
      },
      {
        "type": "p",
        "text": "Si vous vous intéressez à la programmation, vous connaissez peut-être les sites codepen.io ou jsbin.com ? Ces deux sites permettent d’écrire du code HTML, CSS ou JavaScript et de voir le résultat immédiatement. En cela, ils servent le même rôle qu’un éditeur de texte HTML mais sont encore plus pratiques, notamment lorsque vous voulez tester rapidement un bout de code ou pour des démonstrations de cours. Cependant, retenez bien qu’ils sont aussi limités car il y a plusieurs choses que vous ne pourrez pas faire en termes de développement avec ces sites. Parmi celles-ci, on notera que vous ne pourrez par exemple pas exécuter de code PHP ou un quelconque code utilisant un langage dit server-side ni créer plusieurs pages et les lier entre elles (comme c’est le cas lorsque l’on doit créer un site) ou du moins pas gratuitement. Cette solution n’est donc pas satisfaisante si vous souhaitez véritablement vous lancer dans le développement et c’est la raison pour laquelle tous les développeurs utilisent un éditeur de texte. Je vous conseille donc durant ce cours d’utiliser un maximum votre éditeur pour bien vous familiariser avec celui-ci et pour assimiler les différentes syntaxes des langages que l’on va étudier."
      },
      
      {
        "type": "note",
        "variant": "info",
        "title": "💻 Éditeurs recommandés",
        "text": "Visual Studio Code (VS Code) : gratuit, extensions Live Server, Prettier, emmet intégré. Sublime Text : léger et rapide. WebStorm : IDE professionnel payant. Extensions VS Code utiles : Live Server (rechargement auto), Prettier (formatage), Auto Rename Tag, CSS Peek, IntelliSense for CSS."
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "16-s-lecteurs-et-propri-t-s-css",
    "title": "Sélecteurs et propriétés CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Le CSS est un langage qui a été inventé pour styliser les contenus de nos pages en leur appliquant des styles. Dans cette nouvelle partie, nous allons passer en revue les notions de base du CSS en comprenant notamment les grands principes de fonctionnement de ce langage et en apprenant à cibler des contenus de manière précise pour pouvoir leur appliquer des styles."
      },
      {
        "type": "h",
        "text": "Les sélecteurs CSS : définition"
      },
      {
        "type": "p",
        "text": "Pour pouvoir appliquer un style à un contenu, il va déjà falloir le cibler, c’est-à-dire trouver un moyen d’indiquer qu’on souhaite appliquer tel style à un contenu en particulier. Pour cela, nous allons utiliser des sélecteurs. Les sélecteurs sont l’un des éléments fondamentaux du CSS. De manière très schématique et très simplifiée, nous allons utiliser nos sélecteurs en CSS pour cibler des contenus HTML et leur appliquer des styles. Il existe différents types de sélecteurs en CSS : certains sélecteurs vont s’appuyer sur le nom des éléments, comme le sélecteur CSS p par exemple qui va servir à cibler tous les éléments p d’une page. Ce type de sélecteurs est appelé « sélecteur d’éléments » tout simplement car ils vont être identiques aux éléments HTML sélectionnés ou encore « sélecteurs simples ». D’autres sélecteurs, en revanche, vont être plus complexes et nous permettre de sélectionner un élément HTML en particulier ou un jeu d’éléments HTML en fonction de leurs attributs ou même de leur état : on va ainsi pouvoir appliquer des styles à un élément uniquement lorsque la souris de l’utilisateur passe dessus par exemple. Nous allons apprendre à utiliser la majorité des sélecteurs CSS et notamment les plus courants et les plus utiles dans la suite de ce cours."
      },
      {
        "type": "h",
        "text": "Les propriétés CSS : définition"
      },
      {
        "type": "p",
        "text": "Les propriétés vont nous permettre de choisir quel(s) aspect(s) (ou “styles”) d’un élément HTML on souhaite modifier. Par exemple, nous allons pouvoir modifier la couleur d’un texte et lui appliquer la couleur que l’on souhaite grâce à la propriété color (« couleur », en français). Une propriété va être accompagnée d’une ou plusieurs valeurs qui vont définir le comportement de cette propriété. Par exemple, la propriété color peut prendre le nom d’une couleur (en anglais). Si l’on donne la valeur red (rouge) à notre propriété color, les textes au sein des éléments HTML auxquels on applique cette propriété s’afficheront en rouge."
      },
      {
        "type": "h",
        "text": "Les déclarations CSS : premier exemple pratique"
      },
      {
        "type": "p",
        "text": "Prenons immédiatement un premier exemple ensemble en expliquant bien à quoi correspond chaque élément du code afin d’illustrer ce que nous venons de dire et de bien voir comment le CSS fonctionne. Je vous demande pour le moment de ne pas vous soucier des questions pratiques concernant la liaison entre les codes HTML et CSS mais simplement de vous concentrer sur le code CSS présenté. Détaillons le code CSS ci-dessus. Ici, nous utilisons le sélecteur CSS simple p pour cibler tous les paragraphes de nos pages HTML. Ensuite, nous ouvrons une paire d’accolades. Entre ces accolades, nous allons préciser les différents styles que l’on souhaite appliquer à nos éléments p. En l’occurrence, on définit une couleur, bordure et une marge interne personnalisées pour tous nos paragraphes grâce aux propriétés CSS color, border et padding. Le texte de nos paragraphes va donc s’afficher en bleu et nos paragraphes auront des bordures solides oranges de 2px d’épaisseur et des marges internes de 5px. Le couple « propriété : valeur » est appelée « déclaration » en CSS. Chaque déclaration doit se terminer par un point-virgule. On va pouvoir écrire autant de déclarations que l’on souhaite à l’intérieur du couple d’accolades qui suit un sélecteur en CSS et ainsi pouvoir définir le comportement de plusieurs propriétés facilement."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Anatomie d'une règle CSS :\n   sélecteur { propriété: valeur; } */\n\n/* Sélecteur de balise */\np {\n  color: #333;\n  font-size: 16px;\n}\n\n/* Sélecteur de classe */\n.titre-principal {\n  font-size: 32px;\n  text-align: center;\n}\n\n/* Sélecteur d'identifiant */\n#menu {\n  background-color: #2c3e50;\n}\n\n/* Plusieurs propriétés */\nh1 {\n  color: #e74c3c;\n  font-family: Arial, sans-serif;\n  font-size: 2em;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 20px;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "17-o-crire-le-code-css",
    "title": "Où écrire le code CSS ?",
    "blocks": [
      {
        "type": "p",
        "text": "Avant d’étudier les mécanismes du CSS en soi, il convient de comprendre où placer le code CSS afin qu’il s’applique bien à un fichier HTML. En effet, lorsqu’on code, pensez bien que rien n’est jamais « magique » et qu’au contraire tout le code qu’on va pouvoir écrire repose sur des règles et des mécanismes. Comprendre ces règles et ces mécanismes et notamment comment différents langages de programmation vont pouvoir fonctionner ensemble est certainement l’une des choses les plus complexes lorsqu’on est débutant. Pour cela, je pense qu’il ne faut pas essayer de tout comprendre tout de suite : c’est tout à fait normal s’il y a des mécanismes dont vous ne comprenez pas tous les rouages immédiatement. Avec un peu de temps, de la pratique et de nouvelles connaissances sur la programmation les choses pas claires au début devraient devenir de plus en plus évidentes. Dans le cas présent, nous avons notre code HTML d’un côté et nous aimerions lui appliquer des styles en CSS. Cependant, il va falloir d’une manière ou d’une autre « lier » notre code CSS à notre code HTML afin que les éléments de nos pages HTML tiennent bien compte des styles qu’on a voulu leur appliquer en CSS. Pour faire cela, nous allons pouvoir écrire le code CSS à trois endroits différents. Chaque méthode va présenter des avantages et des inconvénients selon une situation donnée et c’est le sujet que nous allons aborder dans cette leçon. Méthode n°1 : écrire le CSS au sein du fichier HTML, dans un élément style La première façon d’écrire du code CSS va être à l’intérieur même de notre page HTML, au sein d’un élément style. En plaçant le CSS de cette façon, le code CSS ne s’appliquera qu’aux éléments de la page HTML dans laquelle il a été écrit. Cette première méthode d’écriture du CSS n’est pas recommandée, pour des raisons de maintenance et d’organisation du code en général. Cependant, elle peut s’avérer utile pour modifier rapidement les styles d’une page HTML ou si vous n’avez pas facilement accès aux fichiers de style de votre site. Nous voyons donc cette première méthode à titre d’exemple, afin que vous sachiez l’identifier si un jour vous voyez du code CSS écrit de cette façon dans un fichier et que vous puissiez l’utiliser si vous n’avez pas d’autre choix. Nous allons devoir ici placer notre élément style au sein de l’élément head de notre fichier HTML. Voici comment on va écrire cela en pratique : Ici, nous créons un fichier HTML tout à fait classique contenant un titre h1 et deux paragraphes. Nous voulons ensuite rajouter des styles à notre page. Pour cela, nous plaçons un élément style dans l’élément head de notre page. Nous allons déclarer nos styles CSS au sein de cet élément. Dans mon code CSS, je commence par cibler l’élément body avec le sélecteur élément du même nom et je définis une couleur de fond (background-color) orange pour cet élément. Comme l’élément body représente toute la partie visible de ma page, le fond de la page entière sera orange. Ensuite, je définis également une couleur bleue pour le texte de mes paragraphes ainsi qu’une taille de police d’écriture de 16px. Voici le résultat obtenu : Méthode n°2 : déclarer le CSS au sein du fichier HTML, dans des attributs style Nous pouvons également écrire notre code CSS au sein d’attributs style qu’on va ajouter à l’intérieur de la balise ouvrante des éléments HTML pour lesquels on souhaite modifier les styles. Nous allons passer en valeurs des attributs style des déclarations CSS pour modifier certains styles précis de l’élément HTML en question. En effet, en utilisant cette méthode, les styles déclarés dans un attribut style ne vont s’appliquer qu’à l’élément dans lequel ils sont écrits, et c’est la raison pour laquelle nous n’allons pas avoir besoin de préciser de sélecteur ici. Attention à ne pas confondre les attributs style qu’on va devoir placer au sein de la balise ouvrante de chaque élément dont on souhaite modifier les styles avec l’élément style qu’on va placer dans l’élément head de nos fichiers HTML. Dans l’exemple ci-dessous, on applique à nouveau une couleur de fond orange à notre élément body ainsi qu’une couleur bleue et une taille de 20px au texte de notre premier paragraphe uniquement : Cette deuxième méthode d’écriture du CSS, bien qu’elle puisse sembler pratique à priori puisqu’elle permet de n’appliquer des styles qu’à un élément en particulier plutôt qu’à tous les éléments d’un même type n’est également pas recommandée et est à éviter tant que possible pour des raisons de maintenabilité et de performance du code. En effet, déclarer nos styles comme cela n’est vraiment pas efficient puisque cela va demander énormément d’écriture et également énormément de temps de réécriture le jour où l’on souhaite modifier des styles. Pas d’inquiétude : nous allons apprendre à cibler précisément un élément ou un groupe d’éléments en particulier pour leur appliquer des styles personnalisés plus tard dans ce cours."
      },
      {
        "type": "h",
        "text": "Méthode n°3 : écrire le CSS dans un fichier séparé"
      },
      {
        "type": "p",
        "text": "Finalement, nous pouvons écrire notre code CSS dans un fichier séparé portant l’extension « .css ». C’est la méthode recommandée, qui sera utilisée autant que possible. Cette méthode comporte de nombreux avantages, notamment une meilleure maintenabilité du code grâce à la séparation des différents langages, ainsi qu’une meilleure lisibilité. Cependant, le plus gros avantage de cette méthode est qu’on va pouvoir appliquer des styles à plusieurs pages HTML en même temps, d’un seul coup. En effet, en utilisant l’une des deux premières méthodes, nous aurions été obligés de réécrire tout notre code CSS pour chaque page HTML (ou même pour chaque élément !) composant notre site puisque les codes CSS étaient déclarés dans une page ou dans un élément spécifique et ne pouvaient donc s’appliquer qu’à la page ou qu’à l’élément dans lesquels ils étaient déclarés. De plus, en cas de modification, il aurait également fallu modifier chacune de nos pages à la main, ce qui n’est pas viable pour un site de taille moyenne qui va être composé de quelques centaines de pages. En déclarant notre code CSS dans un fichier séparé, au contraire, nous allons pouvoir utiliser le code de ce fichier CSS dans autant de fichiers HTML qu’on le souhaite, en indiquant aux différents fichiers HTML qu’ils doivent appliquer les styles contenus dans ce fichier CSS. Ainsi, lorsque nous voudrons modifier par exemple la couleur de tous les paragraphes de nos pages HTML nous n’aurons qu’à modifier la déclaration relative dans le fichier CSS. Voyons immédiatement comment mettre cela en place en pratique. Pour cela, nous allons commencer par créer un nouveau fichier dans notre éditeur qu’on va appeler cours.css. Nous allons enregistrer ce fichier et le placer dans le même dossier que notre page HTML pour plus de simplicité. Nous travaillons donc dorénavant avec deux fichiers : un fichier appelé cours.html et un fichier cours.css. Il va donc maintenant falloir « lier » notre fichier HTML à notre fichier CSS pour indiquer au navigateur qu’il doit appliquer les styles contenus dans le fichier cours.css à notre fichier cours.html. Pour cela, nous allons utiliser un nouvel élément HTML : l’élément link (« lien », en français). On va placer l’élément link au sein de l’élément head de notre fichier HTML. Cet élément se présente sous la forme d’une balise orpheline et va avoir besoin de deux attributs pour fonctionner correctement :"
      },
      {
        "type": "list",
        "items": [
          "Un attribut rel qui va nous servir à préciser le type de ressource que l’on souhaite"
        ]
      },
      {
        "type": "p",
        "text": "lier à notre fichier HTML. Dans notre cas, nous indiquerons la valeur stylesheet pour « feuille de style » ;"
      },
      {
        "type": "list",
        "items": [
          "Un attribut href qui va indiquer l’adresse relative de la ressource que l’on souhaite"
        ]
      },
      {
        "type": "p",
        "text": "lier par rapport à l’emplacement de notre fichier HTML. Ici, comme nous avons enregistré nos deux fichiers dans le même dossier, il suffira d’indiquer le nom de notre fichier CSS en valeur de href. Nos deux fichiers sont maintenant liés et les styles déclarés dans notre fichier CSS vont bien être appliqués aux éléments de notre page HTML."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Où écrire le CSS</title>\n\n  <!-- 1. CSS EXTERNE (méthode recommandée) -->\n  <link rel=\"stylesheet\" href=\"style.css\">\n\n  <!-- 2. CSS INTERNE (dans la balise <style>) -->\n  <style>\n    body { margin: 0; padding: 0; }\n    h2 { color: #3498db; }\n  </style>\n</head>\n<body>\n\n  <!-- 3. CSS INLINE (dans l'attribut style - déconseillé) -->\n  <p style=\"color: red; font-size: 18px; font-weight: bold;\">\n    CSS inline - difficile à maintenir, priorité maximale\n  </p>\n\n  <h2>Titre stylé par le CSS interne</h2>\n  <p>Texte stylé par le fichier CSS externe.</p>\n\n  <!-- Ordre de priorité (cascade) :\n       inline > interne/externe (selon l'ordre d'apparition)\n       !important > tout -->\n\n</body>\n</html>"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "18-commentaires-et-indentation-en-css",
    "title": "Commentaires et indentation en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Les commentaires ne sont pas des éléments spécifiques au langage HTML. En réalité, la grande majorité des langages de programmation permettent aux développeurs de commenter leur code via des syntaxes différentes propres à chaque langage car commenter est reconnu comme une bonne pratique en programmation et se révèle souvent indispensable ou à minima très utile. Dans cette nouvelle leçon, nous allons donc voir comment commenter en CSS et également discuter de l’indentation en CSS."
      },
      {
        "type": "h",
        "text": "Commenter le code CSS"
      },
      {
        "type": "p",
        "text": "Tout comme nous avons vu qu’on pouvait écrire des commentaires en HTML, nous allons également pouvoir commenter notre code CSS. Les commentaires n’influent une nouvelle fois en rien sur le code et ne sont pas visibles par les utilisateurs. Commenter le code CSS n’est pas une option : cela va très vite devenir indispensable car vous allez vous rendre compte que les fichiers CSS s’allongent très vite. Il est donc essentiel de bien organiser et de bien commenter son code CSS afin de ne pas faire d’erreur en appliquant par exemple deux styles différents à un même élément. Le CSS, tout comme le HTML et à la différence d’autres langages de développement ne possède qu’une seule syntaxe qui va nous permettre de créer à la fois des commentaires monoligne et multi-lignes. Cette syntaxe est la suivante : /*Un commentaire CSS*/. Regardez plutôt l’exemple ci- dessous : Dans l’exemple ci-dessus, notez que les étoiles en début de ligne pour mon commentaire multi-lignes ne sont absolument pas nécessaires (à part pour la première ligne, évidemment) : ce n’est que de la décoration afin de bien voir que l’on commente. Vous pouvez également remarquer une utilisation intéressante des commentaires et qui est très commune en CSS : le fait de commenter une déclaration CSS. En effet, vous voudrez parfois supprimer momentanément une déclaration CSS, pour effectuer des tests par exemple. Plutôt que de l’effacer complètement, vous pouvez la commenter. Ainsi, la déclaration CSS ne sera plus prise en compte. Vous n’aurez ensuite plus qu’à enlever le commentaire pour la « réactiver »."
      },
      {
        "type": "h",
        "text": "Indenter en CSS"
      },
      {
        "type": "p",
        "text": "Indenter en CSS est également très important afin de conserver le plus de clarté possible dans son code et de paraître professionnel si un jour vous devez le distribuer. En termes de règles, nous indenterons en général d’une tabulation les différentes déclarations concernant un sélecteur donné. Pour plus de lisibilité, nous retournerons également à la ligne après chaque déclaration. Notez que cela augmentera de façon très minime le temps d’exécution du code et donc le temps d’affichage de la page. Cependant, en phase de développement tout au moins, il est essentiel de conserver un code aéré et propre. Vous pourrez toujours le compresser par la suite ; de nombreux outils existent sur le web pour cela."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* ================================================\n   Commentaire CSS : entre /* et */\n   Peut s'étendre sur plusieurs lignes\n   ================================================ */\n\n/* Navigation principale */\nnav {\n  background-color: #2c3e50;\n  padding: 15px 40px;      /* Marges internes haut/bas | gauche/droite */\n}\n\nnav ul {\n  display: flex;           /* Affichage flexible (côte à côte) */\n  list-style: none;        /* Supprime les puces */\n  gap: 20px;               /* Espace entre les éléments */\n}\n\nnav a {\n  color: white;\n  text-decoration: none;   /* Supprime le soulignement */\n}\n\n/*\n * Bonne pratique : commenter les règles complexes\n * et organiser le CSS en sections logiques\n */\n\n/* ===================\n   Section Hero\n   =================== */\n.hero {\n  min-height: 100vh;       /* Hauteur = 100% de la fenêtre */\n  display: flex;\n  align-items: center;     /* Centrage vertical */\n  justify-content: center; /* Centrage horizontal */\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "19-s-lecteurs-css-simples-et-combinateurs",
    "title": "Sélecteurs CSS simples et combinateurs",
    "blocks": [
      {
        "type": "p",
        "text": "Le CSS va nous permettre de mettre en forme nos contenus HTML en appliquant des styles aux différents éléments. Cependant, pour appliquer un style particulier à un ou plusieurs éléments HTML en CSS, il va avant tout falloir les cibler, c’est-à-dire indiquer avec précision à quels éléments doivent s’appliquer les styles créés en CSS. Le but de cette leçon est d’apprendre à se servir de quelques sélecteurs CSS « simples » et de comprendre leur limitation. Nous allons également en profiter pour définir plus précisément les différents types de sélecteurs CSS et directement voir comment combiner différents sélecteurs simples pour en créer des plus complexes."
      },
      {
        "type": "h",
        "text": "Les sélecteurs CSS éléments ou sélecteurs « simples »"
      },
      {
        "type": "p",
        "text": "Il existe de nombreux types de sélecteurs CSS et autant de moyens de cibler des contenus HTML en CSS. La manière la plus simple de cibler un type d’éléments HTML en CSS est néanmoins d’utiliser des sélecteurs éléments ou sélecteurs « simples ». Ces sélecteurs sont appelés « sélecteurs éléments » tout simplement car ils reprennent le nom des éléments HTML qu’ils sélectionnent. Par exemple, le sélecteur CSS p va cibler tous les éléments p (c’est-à-dire tous les paragraphes) d’une page HTML. De même, le sélecteur CSS h1 va nous permettre d’appliquer des styles à notre titre h1, le sélecteur a va nous permettre de mettre en forme nos liens, etc."
      },
      {
        "type": "h",
        "text": "Comprendre les limitations des sélecteurs CSS simples"
      },
      {
        "type": "p",
        "text": "L’utilisation de sélecteurs simples doit être favorisée tant que possible car ces sélecteurs consomment moins de ressources que des sélecteurs plus complexes et car ils sont plus clairs. Ceci étant dit, nous n’allons bien souvent pas pouvoir nous contenter de n’utiliser que des sélecteurs simples car ceux-ci vont considérablement limiter nos options de ciblage et car ils ne vont pas nous permettre d’exploiter toute la puissance du CSS. En effet, en utilisant uniquement les sélecteurs éléments, nous allons être obligés d’appliquer les mêmes styles à tous les éléments d’un même type ce qui n’est pas très flexible. Comment appliquer des styles à un élément en particulier ou à plusieurs éléments différents choisis ? Pour faire cela, nous allons devoir utiliser des sélecteurs complexes. Introduction aux sélecteurs CSS complexes et combinateurs Toute la puissance du CSS réside dans les options que nous offre ce langage pour cibler précisément un contenu HTML dans une page. En effet, en plus des sélecteurs simples, le CSS met à notre disposition une panoplie de sélecteurs que l’on va pouvoir utiliser pour cibler des contenus de manière très précise :"
      },
      {
        "type": "list",
        "items": [
          "On va pouvoir utiliser des sélecteurs CSS combinateurs qui vont être en fait la"
        ]
      },
      {
        "type": "p",
        "text": "combinaison de plusieurs sélecteurs simples à l’aide de caractères spéciaux à la signification précise ;"
      },
      {
        "type": "list",
        "items": [
          "On va pouvoir cibler des contenus HTML selon le fait qu’ils possèdent un certain"
        ]
      },
      {
        "type": "p",
        "text": "attribut ou même selon la valeur d’un attribut ;"
      },
      {
        "type": "list",
        "items": [
          "On va pouvoir utiliser les pseudo classes qui vont nous permettre d’appliquer des"
        ]
      },
      {
        "type": "p",
        "text": "styles à des éléments en fonction de leur état, c’est-à-dire en fonction des actions d’un utilisateur (contenu cliqué, coché, visité, etc.), de la place de l’élément dans le document, etc. ;"
      },
      {
        "type": "list",
        "items": [
          "On va pouvoir utiliser les pseudo éléments qui vont nous permettre de n’appliquer"
        ]
      },
      {
        "type": "p",
        "text": "des styles qu’à certaines parties des éléments. Nous allons apprendre à faire tout cela au cours de ce cours. Pour le moment, toutefois, nous allons nous contenter de présenter et d’apprendre à manipuler les différents caractères « combinateurs » qui vont nous permettre de combiner des sélecteurs CSS simples afin d’en créer des plus complexes. Sélectionner tous les éléments avec le sélecteur CSS universel ou sélecteur étoile (*) Le sélecteur CSS étoile * ne nous permet pas à proprement parler de combiner différents sélecteurs simples entre eux mais permet de sélectionner tous les éléments HTML d’une page d’un coup ; c’est pourquoi il est également appelé sélecteur CSS universel. Ce sélecteur va donc nous permettre d’appliquer les mêmes styles à tous les éléments d’une page. Cela peut être très utile pour par exemple définir une police par défaut ou effectuer un reset des marges de tous les éléments pour ensuite les positionner plus précisément. Appliquer des styles à plusieurs éléments avec le caractère virgule (,) Pour appliquer un même style à deux types éléments différents sans avoir à recopier le style deux fois en CSS, nous allons simplement pouvoir séparer nos deux sélecteurs par une virgule. Les styles CSS déclarés juste après s’appliqueront ainsi aux deux éléments ou groupes d’éléments sélectionnés. Bien évidemment, rien ne nous empêche d’appliquer un même style à 3, 4, … éléments ou groupes d’éléments. Le tout est de séparer les différents sélecteurs par des virgules."
      },
      {
        "type": "h",
        "text": "Utiliser plusieurs sélecteurs CSS à la suite"
      },
      {
        "type": "p",
        "text": "En mentionnant plusieurs sélecteurs à la suite en CSS, nous allons pouvoir appliquer des styles à certains éléments contenus dans d’autres éléments. Par exemple, utiliser le sélecteur p a en CSS va nous permettre d’appliquer des styles à tous les éléments a contenus dans des éléments p et seulement aux éléments a contenus dans des éléments p"
      },
      {
        "type": "h",
        "text": "Appliquer des styles aux enfants directs d’un autre élément"
      },
      {
        "type": "p",
        "text": "Nous allons également pouvoir cibler uniquement un élément ou un groupe d’éléments enfants directs d’un autre élément en utilisant le signe de supériorité stricte ou le caractère chevron fermant >. Un élément est un enfant direct ou « descendant direct » d’un autre élément s’il est directement contenu dans celui-ci. Par exemple, nous allons pouvoir appliquer des styles à tous les liens (éléments a) qui sont des enfants directs de l’élément body et uniquement à ceux-ci :"
      },
      {
        "type": "h",
        "text": "Sélectionner l’élément suivant directement un autre élément en"
      },
      {
        "type": "p",
        "text": "CSS Le CSS va nous permettre de cibler encore plus précisément un élément en ciblant l’élément suivant directement un autre élément grâce au caractère +. Par exemple, on va pouvoir cibler les éléments a (liens) suivant directement un élément p :"
      },
      {
        "type": "h",
        "text": "Sélectionner tous les éléments suivant un autre élément en CSS"
      },
      {
        "type": "p",
        "text": "Le caractère ~ va nous être plus permissif que le caractère + en nous permettant cette fois-ci de sélectionner tous les éléments déclarés après un autre élément en HTML de même niveau (c’est-à-dire possédant le même parent direct). Par exemple, on va pouvoir cibler tous les éléments a placés après un élément p et qui sont de même niveau : Ici, nos styles CSS ne s’appliquent pas à aux deux liens dans notre paragraphe et dans notre élément de liste car ceux-ci ne sont pas au même niveau que les différents paragraphes de notre page : ils sont inclus dans d’autres éléments et ne possèdent donc pas le même parent qu’un autre paragraphe pouvant les précéder. Résumé des caractères spéciaux permettant de combiner des sélecteurs et signification Vous pourrez trouver ci-dessous un résumé des différents caractères vus dans cette partie et qui vont nous permettre de combiner des sélecteurs CSS simples afin d’en créer des plus complexes :"
      },
      {
        "type": "h",
        "text": "Sélecteur CSS      Signification"
      },
      {
        "type": "h",
        "text": "*                  Sélectionne tous les éléments"
      },
      {
        "type": "p",
        "text": "E, F Sélectionne tous les éléments de type E et de type F"
      },
      {
        "type": "h",
        "text": "EF                 Sélectionne tous les éléments F à l’intérieur des éléments E"
      },
      {
        "type": "h",
        "text": "E>F                Sélectionne les éléments F enfants directs des éléments E"
      },
      {
        "type": "h",
        "text": "E+F                Sélectionne tout élément F placé directement après un élément E"
      },
      {
        "type": "p",
        "text": "E~F Sélectionne tout élément F placé après un élément E dans la page"
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* === Sélecteurs simples === */\n\n/* Sélecteur universel */\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n/* Sélecteur de type (balise) */\np { color: #333; }\nh1, h2, h3 { font-family: Georgia, serif; } /* Groupement */\n\n/* Sélecteur de classe */\n.btn { padding: 10px 20px; border-radius: 4px; }\n.btn-primaire { background: #3498db; color: white; }\n.btn-danger { background: #e74c3c; color: white; }\n\n/* Sélecteur d'ID */\n#menu-principal { position: sticky; top: 0; }\n\n/* === Combinateurs === */\n\n/* Descendant (espace) : tous les enfants (à n'importe quelle profondeur) */\nnav a { text-decoration: none; } /* Tous les <a> dans <nav> */\n\n/* Enfant direct (>) : seulement les enfants directs */\nul > li { margin: 5px 0; } /* Seulement les <li> enfants directs de <ul> */\n\n/* Frère adjacent (+) : l'élément immédiatement suivant */\nh2 + p { font-size: 1.1em; color: #555; } /* Le <p> juste après un <h2> */\n\n/* Frères suivants (~) : tous les frères suivants */\nh2 ~ p { margin-left: 20px; } /* Tous les <p> après un <h2> au même niveau */\n\n/* Exemple complet */\n.carte { background: #fff; padding: 20px; }\n.carte > h3 { color: #2c3e50; margin-bottom: 10px; }\n.carte > h3 + p { font-style: italic; }\n.carte ul > li:first-child { font-weight: bold; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "20-les-attributs-html-class-et-id-et-les-s-",
    "title": "Les attributs HTML class et id et les sélecteurs CSS associés",
    "blocks": [
      {
        "type": "h",
        "text": "CSS associés"
      },
      {
        "type": "p",
        "text": "Cette leçon est consacrée à la découverte et à l’utilisation des attributs HTML class et id. Nous allons pouvoir ajouter ces deux attributs à n’importe quel élément HTML. Ces deux attributs sont particuliers en HTML puisqu’ils n’ont pas été créés pour préciser le fonctionnement d’un élément HTML en particulier (ce qui est normalement le rôle de tout attribut HTML) mais vont être principalement utilisés pour cibler certains éléments HTML et leur appliquer des styles en CSS. Présentation des attributs HTML class et id et cas d’utilisation Les attributs HTML class et id sont des attributs dits globaux car on va pouvoir les ajouter dans la balise ouvrante de n’importe quel élément HTML. Ces deux attributs vont être principalement utilisés dans un but de mise en forme : ils vont nous servir à appliquer des styles CSS aux éléments qui vont les contenir. En effet, à la différence d’un attribut href par exemple, les attributs class et id ne vont pas servir à préciser le fonctionnement d’un élément HTML mais vont simplement être très utiles pour cibler un élément précisément. Nous allons effectivement très facilement pouvoir nous resservir de ces deux attributs en CSS grâce aux sélecteurs associés .class et #id. Premier exemple d’utilisation des attributs HTML class et id et des sélecteurs CSS associés Voyons immédiatement de manière pratique comment vont fonctionner les attributs class et id et comment on va pouvoir les utiliser en CSS pour cibler et appliquer des styles particuliers à des éléments choisis. Pour cela, nous allons créer une page HTML et allons placer des attributs class et id dans différents éléments. Nous allons déjà devoir renseigner une valeur pour chaque attribut class et id. Les valeurs indiquées pour les attributs ne doivent contenir ni caractères spéciaux ni espaces et commencer par une lettre. En pratique, on essaiera d’attribuer des valeurs qui font sens à nos différents attributs. Notez déjà que chaque id doit avoir une valeur propre ou unique dans une page. En revanche, on va pouvoir attribuer la même valeur à plusieurs attributs class différents. Ici, on ajoute un attribut id=\"orange\" dans la balise ouvrante de notre élément h1 et un attribut id=\"gros\" à notre dernier paragraphe. On ajoute également un même attribut class=\"bleu\" à nos deux premiers paragraphes et un attribut class=\"vert\" à un élément de notre liste. Ensuite, on va lier des styles CSS à ces différents id et class en utilisant les sélecteurs CSS associés. Pour cibler un id en particulier en CSS, on utilisera le symbole dièse (#) suivi de la valeur de l’id auquel on souhaite lier des styles. Pour cibler une class en particulier en CSS, on utilisera le symbole point (.) suivi de la valeur de la class à laquelle on souhaite lier des styles."
      },
      {
        "type": "h",
        "text": "Class vs id : Quelles différences et quel attribut utiliser ?"
      },
      {
        "type": "p",
        "text": "Il existe une différence notable entre les deux attributs class et id : chaque id doit avoir une valeur unique dans une même page tandis que plusieurs attributs class peuvent partager la même valeur. Cela fait que l’attribut id est beaucoup plus spécifique que l’attribut class et que ces deux attributs vont avoir des rôles et buts différents notamment pour la mise en forme CSS."
      },
      {
        "type": "h",
        "text": "Utilisation des classes en HTML et en CSS"
      },
      {
        "type": "p",
        "text": "Ainsi, nous utiliserons généralement des attributs class pour définir des styles généraux et communs à plusieurs éléments dans une même page. Comme nous pouvons donner une même class à plusieurs éléments, ils hériteront tous des mêmes styles sauf en cas de conflit (c’est-à-dire dans le cas où le comportement d’une même propriété a déjà été défini en CSS) bien évidemment. Toute la puissance des attributs class et du sélecteur CSS associé va résider dans le fait qu’on va tout à fait pouvoir définir des styles CSS généraux liés à des sélecteurs .class avant même de commencer à écrire notre code HTML. Nous n’aurons ensuite plus qu’à fournir les attributs class à nos éléments HTML lors de la création de la page. L’idée va être la suivante : créer des styles CSS et les attacher à des sélecteurs .class à priori puis attribuer les attributs class relatifs à certains éléments HTML choisis afin que les styles CSS correspondants leur soient appliqués. Cette façon de procéder peut sembler étrange et “à l’envers” pour les personnes non expertes. Cependant, je vous garantis que c’est une très bonne façon de faire qui peut faire gagner énormément de temps pour un gros projet. C’est par ailleurs toute l’idée derrière l’utilisation de la librairie Bootstrap par exemple."
      },
      {
        "type": "h",
        "text": "Utilisation des id en HTML et en CSS"
      },
      {
        "type": "p",
        "text": "En revanche, comme chaque id doit être unique dans une page, nous utiliserons ce sélecteur pour appliquer des styles très précis et pour être sûr de ne cibler qu’un élément HTML en CSS. C’est la raison pour laquelle on se sert des attributs id pour créer des liens de type ancre par exemple. En effet, nous sommes sûrs de lever toute ambiguïté sur la sélection avec un id car encore une fois celui-ci doit être unique. Les sélecteurs CSS .class et #id ne possèdent donc pas le même degré de précision et ainsi n’ont pas le même ordre de priorité dans les styles attribués aux éléments en cas de conflit. Je vous rappelle ici qu’en cas de conflit sur un style en CSS ce sont les styles du sélecteur le plus précis qui seront appliqués. L’ordre de priorité d’application des styles en CSS est le suivant (du plus prioritaire ou moins prioritaire) : 1. Les styles liés à un sélecteur #id ; 2. Les styles liés à un sélecteur .class. 3. Les styles liés à un sélecteur élément ;"
      },
      {
        "type": "h",
        "text": "Plus d’exemples d’utilisation des attributs class et id en"
      },
      {
        "type": "p",
        "text": "HTML et des sélecteurs CSS associés Avant tout, retenez que les valeurs indiquées pour les attributs class et id ne doivent contenir ni caractères spéciaux ni espaces et commencer par une lettre. Idéalement, nous essaierons d’utiliser des noms qui font du sens pour nos attributs class et id. On pourra par exemple utiliser des noms relatifs aux propriétés CSS définis avec les sélecteurs associés. Faites bien attention cependant à ne pas utiliser des noms protégés c’est-à-dire des noms déjà utilisés par le HTML et qui ont déjà une signification spéciale."
      },
      {
        "type": "h",
        "text": "Attribuer un attribut class et un attribut id à un élément HTML"
      },
      {
        "type": "p",
        "text": "On peut tout à fait fournir plusieurs attributs à un élément HTML et notamment un attribut class et un attribut id à un élément. Reprenons l’exemple précédent en ajoutant simplement un attribut class à notre dernier paragraphe pour illustrer cela : Ici, le dernier paragraphe de notre page possède à la fois un attribut class=\"bleu\" et un id=\"gros\". Les styles CSS liés à ces deux attributs donc être appliqués à l’élément. Ici, nos deux attributs class=\"bleu\" et id=\"gros\" nous servent à appliquer des propriétés CSS différentes (color pour notre attribut class et font-size pour notre id). Il n’y a donc pas de risque de conflit. En revanche, il y aurait eu conflit si on avait précisé des comportements différents pour la même propriété avec nos deux sélecteurs."
      },
      {
        "type": "h",
        "text": "Un point sur l’ordre de priorité d’application de styles CSS"
      },
      {
        "type": "p",
        "text": "Imaginons maintenant qu’on passe un attribut class et un attribut id à un même élément et qu’on définisse une même propriété CSS de manière différente pour ces id et class. Ici on passe un attribut class=\"bleu\" et id=\"orange\" à notre titre h1. Or, on définit le comportement de la même propriété (la propriété color) de manière différente dans les sélecteurs .bleu et #orange. Il y a donc conflit sur les styles. Comme vous pouvez le voir, notre titre s’affiche en orange ce qui signifie que ce sont les styles liés à l’id qui vont être pris en compte plutôt que ceux liés à la class. Vous pouvez ici retenir la règle suivante dans l’application des styles CSS : ce seront toujours les styles liés au sélecteur le plus précis qui seront appliqués en cas de conflit. Par « précis », on entend le sélecteur qui permet d’identifier le plus précisément l’élément auxquels vont être appliqués les styles. Ici, comme chaque id doit posséder une valeur unique dans une page, le sélecteur CSS lié à notre id est très précis et beaucoup plus précis que le sélecteur lié à l’attribut class puisqu’il permet d’identifier un élément de manière unique alors qu’un attribut class peut être partagé par plusieurs éléments et ne permet donc pas d’identifier un élément en particulier. Cette notion de précision peut vous sembler un peu floue pour le moment car c’est le genre de notion qu’il est difficile de comprendre sans connaitre l’ensemble du langage. Pas d’inquiétude, tout cela va se préciser au fil des leçons et à chaque nouvelle notion que nous allons aborder."
      },
      {
        "type": "h",
        "text": "Attribuer plusieurs attributs class à un élément HTML"
      },
      {
        "type": "p",
        "text": "L’un des grands intérêts de l’attribut HTML class est qu’un même attribut (et donc les styles CSS liés) va pouvoir être partagé par différents éléments. Cela facilite grandement la gestion des styles de nos fichiers HTML et nous permet de gagner beaucoup de temps. Réciproquement, un même élément HTML va tout à fait pouvoir recevoir différents attributs. Pour cela, il va suffire d’indiquer les différentes valeurs séparées par un espace. Ainsi, une très bonne pratique en CSS et pour la création d’un site va être de na pas surcharger un sélecteur .class avec de nombreux styles CSS mais au contraire d’utiliser de multiples sélecteurs .class qui se contenteront de définir chacun un comportement ou plusieurs propriétés d’un même « type ». Fonctionner comme cela permet d’avoir un code beaucoup plus clair et d’avancer beaucoup plus vite dans la création d’un site. Regardez plutôt l’exemple ci-dessous pour bien comprendre cette utilisation des attributs class : Notez que faire ceci avec des attributs id n’aurait aucun sens puisque les styles des sélecteurs liés n’ont pas vocation à être partagés entre différents éléments (c’est-à-dire à être « réutilisés ») mais sont liés à un élément en particulier et il est donc logique ici de placer tous les styles voulus pour l’élément dans un seul id."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!-- id : identifiant UNIQUE sur la page -->\n<div id=\"contenu-principal\">...</div>\n\n<!-- class : peut être partagée, plusieurs classes sur un même élément -->\n<p class=\"texte-important\">Paragraphe 1</p>\n<p class=\"texte-important\">Paragraphe 2</p>\n<button class=\"btn btn-primaire btn-grand\">Cliquer</button>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Sélecteur de classe : . */\n.texte-important {\n  font-weight: bold;\n  color: #e74c3c;\n}\n\n/* Sélecteur d'id : # (spécificité très haute, utiliser avec parcimonie) */\n#contenu-principal {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* Combinaison de sélecteurs de classe */\n.btn { padding: 8px 16px; border: none; cursor: pointer; border-radius: 4px; }\n.btn-primaire { background: #3498db; color: white; }\n.btn-grand { font-size: 1.2rem; padding: 12px 24px; }\n\n/* Sélecteur d'élément avec classe spécifique */\np.intro { font-size: 1.2em; }       /* seulement les <p class=\"intro\"> */\ndiv.carte { border: 1px solid #ddd; } /* seulement les <div class=\"carte\"> */\n\n/* Plusieurs classes sur le même élément */\n/* <div class=\"boite sombre arrondi\"> → les 3 classes s'appliquent */\n.boite { padding: 20px; }\n.sombre { background: #2c3e50; color: white; }\n.arrondi { border-radius: 12px; }\n\n/* Spécificité : id > classe > balise\n   0-1-0 > 0-0-1 > 0-0-0 */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "21-ordre-d-application-cascade-et-h-ritage-",
    "title": "Ordre d’application (cascade) et héritage des règles en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "règles en CSS Dans cette nouvelle leçon, nous allons étudier et comprendre les mécanismes de cascade et d’héritage en CSS qui sont deux mécanismes fondamentaux de ce langage. Comprendre comment fonctionne ces mécanismes va nous permettre de savoir quelle règle CSS va être appliquée à quel élément et pourquoi et ainsi de véritablement contrôler le résultat graphique de nos pages HTML. Comprendre l’importance d’établir un ordre d’application des règles CSS : le problème des conflits Pour comprendre les mécanismes fondamentaux de cascade et d’héritage en CSS, il faut avant tout comprendre ce qu’est un conflit CSS. Parfois, plusieurs sélecteurs différents vont nous permettre d’appliquer des styles CSS à un même élément. Imaginons par exemple un élément p auquel on attribuerait un attribut class et un attribut id. Nous allons pouvoir appliquer des styles CSS à cet élément de trois façons évidentes différentes :"
      },
      {
        "type": "list",
        "items": [
          "en utilisant un sélecteur élément ;",
          "en le ciblant via son attribut class ;",
          "en le ciblant via son attribut id."
        ]
      },
      {
        "type": "p",
        "text": "Dans l’exemple ci-dessus, par exemple, nous avons une page HTML qui contient un titre de niveau 1 et trois paragraphes. Un de nos paragraphes possède un attribut class=\"bigorange\" tandis qu’un autre possède à la fois un attribut class=\"bigorange\" et un attribut id=\"green\". Enfin, un dernier paragraphe possède à la fois un attribut class=\"bigorange\", un attribut id=\"yellow\" et un attribut style dans lequel nous allons directement préciser un comportement pour la propriété color qui ne s’appliquera donc qu’à cet élément. Du côté du CSS, on cible nos éléments HTML via quatre sélecteurs : un sélecteur éléments p, un sélecteur .bigorange et deux sélecteurs #green et #yellow. Certains de nos paragraphes vont donc être ciblés plusieurs fois avec plusieurs sélecteurs différents et recevoir les styles définis dans ces différents sélecteurs. Ici, on voit que le sélecteur p est le seul sélecteur qui définit le comportement de la propriété text-decoration tandis que le sélecteur .bigorange est le seul qui définit le comportement de la propriété font-size. Il n’y aura donc pas de conflit sur ces deux propriétés puisqu’elles ne sont définies qu’une fois pour les mêmes éléments en CSS. En revanche, on définit un comportement différent pour la propriété color au sein de chaque sélecteur. Dans ce cas-là, il va y avoir un conflit puisque le CSS va devoir déterminer quelle valeur de la propriété appliquer pour chaque élément ciblé avec plusieurs sélecteurs. Pour comprendre comment le CSS va procéder dans ce cas, il faut avant tout bien se persuader que le CSS (comme tout autre langage web) repose sur un ensemble de règles. Les règles définissant l’ordre de préférence d’application des propriétés définies dans différents sélecteurs sont contrôlées par un mécanisme qu’on appelle la cascade. Connaitre ces règles va nous permettre de prédire quel style sera appliqué dans telle ou telle situation."
      },
      {
        "type": "h",
        "text": "Le mécanisme de cascade CSS"
      },
      {
        "type": "p",
        "text": "Il n’est pas toujours simple de prédire quels styles CSS vont s’appliquer à quel élément pour la simple et bonne raison que le CSS peut être défini à des endroits différents (dans un élément style, dans la balise ouvrante d’un élément dans un attribut style ou dans un fichier CSS séparé) et qu’on va également pouvoir appliquer des styles à un élément en particulier en le ciblant via plusieurs sélecteurs CSS différents. Il est donc essentiel de bien comprendre comment le CSS va fonctionner pour déterminer quels styles devront être appliqués à tel élément. L’ordre de préférence et d’application d’un style va dépendre de trois grands facteurs qui vont être :"
      },
      {
        "type": "list",
        "items": [
          "La présence ou non du mot clef !important ;",
          "La précision du sélecteur ;",
          "L’ordre de déclaration dans le code."
        ]
      },
      {
        "type": "p",
        "text": "A noter que ces trois facteurs vont être analysés dans l’ordre donné et que le premier va primer sur le deuxième qui va primer sur le dernier : par exemple, si une règle utilise la syntaxe !important elle sera jugée comme prioritaire peu importe la précision du sélecteur ou sa place dans le code."
      },
      {
        "type": "h",
        "text": "Le mot clef !important"
      },
      {
        "type": "p",
        "text": "La mot clef !important sert à forcer l’application d’une règle CSS. La règle en question sera alors considérée comme prioritaire sur toutes les autres déclarations et le style sera appliqué à l’élément concerné. Nous allons placer ce mot clef à la fin d’une déclaration CSS lorsqu’on souhaite qu’un style s’applique absolument à un élément. Comme vous pouvez le constater dans l’exemple ci-dessus, le fait d’ajouter !important dans la définition du comportement de la propriété color liée à notre sélecteur p fait que c’est cette définition qui s’appliquera par-dessus toutes les autres. Ici, en particulier, vous pouvez voir que tous nos paragraphes sont rouges, même lorsque la propriété color a été définie différemment dans un sélecteur de class ou d’id et même lorsqu’un comportement différent a été précisé dans un attribut style dans la balise ouvrante d’un élément en particulier. Le mot clef !important est donc extrêmement puissant en CSS et peut ainsi sembler très pratique et très utile aux yeux des débutants. Cependant, en pratique, nous essaierons tant que possible de nous en passer tout simplement car ce mot clef est une sorte de « joker » qui court-circuite toute la logique normale du CSS. L’utiliser à outrance et lorsque ce n’est pas strictement nécessaire peut donc amener de nombreux problèmes par la suite comme par exemple des problèmes de styles définis autrement et qui ne s’appliqueraient pas car déjà définis avec !important ailleurs dans le code. De manière générale, on préfèrera toujours aller dans le sens des langages et essayer de respecter et d’utiliser les normes qu’ils ont mis en place."
      },
      {
        "type": "h",
        "text": "Le degré de précision du sélecteur"
      },
      {
        "type": "p",
        "text": "Le deuxième critère déterminant dans l’application d’un style plutôt que d’un autre va être le degré de précision du sélecteur où le style a été défini une première fois par rapport aux autres degrés de précision des autres sélecteurs où le style a été à nouveau défini. Le sélecteur le plus précis imposera ses styles aux sélecteurs moins précis en cas de conflit. Pour rappel, la « précision » désigne ici le fait d’identifier de manière plus ou moins unique un élément. Les sélecteurs peuvent être rangés dans l’ordre suivant (du plus précis au moins précis) :"
      },
      {
        "type": "list",
        "items": [
          "Un style défini dans un attribut HTML style sera toujours le plus précis et"
        ]
      },
      {
        "type": "p",
        "text": "notamment plus précis qu’un style défini avec un sélecteur CSS ;"
      },
      {
        "type": "list",
        "items": [
          "Le sélecteur #id va être le sélecteur le plus précis mais sera moins précis qu’un"
        ]
      },
      {
        "type": "p",
        "text": "style défini dans un attribut HTML style ;"
      },
      {
        "type": "list",
        "items": [
          "Un sélecteur .class ou un autre sélecteur d’attribut* (*les autres sélecteurs"
        ]
      },
      {
        "type": "p",
        "text": "d’attributs sont des sélecteurs complexes que nous étudierons plus tard) ou un sélecteur de pseudo-classe** (**nous verrons ce qu’est une pseudo-classe plus tard dans ce cours) sera moins précis qu’un sélecteur #id ;"
      },
      {
        "type": "list",
        "items": [
          "Un sélecteur d’élément ou de pseudo-élément*** (***nous étudierons les pseudo"
        ]
      },
      {
        "type": "p",
        "text": "éléments plus tard dans ce cours) sera moins précis qu’un sélecteur d’attribut ou de pseudo-classe. Si deux sélecteurs différents sont au même degré de précision, alors c’est le sélecteur le plus « complet » c’est-à-dire celui qui utilisera le plus de combinateurs qui sera jugé le plus précis. Prenons immédiatement un exemple pour illustrer cela : Ici, on voit que deux propriétés sont définies dans plusieurs sélecteurs qui servent à sélectionner le même élément : les propriétés color et font-size. Ce sont donc nos deux propriétés qui vont générer des conflits. On commence par vérifier la présence du mot clef !important : il n’est défini nulle part ici. On passe donc au deuxième critère qui est le degré de précision. On regarde déjà si des attributs style sont présents dans le code. C’est le cas pour notre dernier paragraphe qui possède un attribut style=\"color:purple\". Comme la règle ne peut pas être appliquée plus précisément, on sait que ce paragraphe sera de couleur violette. Ensuite, on s’intéresse à la présence d’attributs id. Notre troisième paragraphe possède un id=\"green\" et le sélecteur correspondant définit la règle color : green. Ce paragraphe sera donc vert. Ensuite, on regarde la présence de sélecteur .class ou de sélecteurs d’autres attributs ou de sélecteurs de pseudo-classes. Notre deuxième élément de liste possède deux attributs class : bigorange et petit et on va définir le comportement de la propriété font-size dans chacun des deux sélecteurs associés. Ici, les deux sélecteurs sont des sélecteurs .class et possèdent donc le même degré de précision à priori. Il va donc falloir regarder si un sélecteur est plus complet que l’autre c’est-à-dire s’il utilise différents combinateurs pour le rendre plus précis ou pas. C’est le cas de notre sélecteur ul .petit qui va finalement nous servir à ne cibler que les éléments possédant un attribut class= \"petit\" contenus dans un élément ul."
      },
      {
        "type": "h",
        "text": "L’ordre d’écriture des règles"
      },
      {
        "type": "p",
        "text": "Le troisième et dernier critère qui va nous permettre de définir quel style doit primer sur tel autre et doit donc être appliqué à un élément va tout simplement être l’ordre d’écriture d’une règle dans le code. Ce critère va être utilisé dans le cas où plusieurs sélecteurs concurrents définissent le comportement d’une même propriété et ont la même importance et la même spécificité. La règle ici est très simple : c’est la dernière déclaration dans le code qui primera sur des déclarations précédentes. Regardez plutôt l’exemple suivant : Ici, chacun de mes deux paragraphes possèdent deux attributs class qui vont à chaque fois définir le comportement d’une même propriété. Les sélecteurs CSS associés ont la même importance et le même degré de spécificité. Il va donc falloir regarder leur ordre d’écriture pour savoir quelles règles vont être appliquées. Ici, le sélecteur .grand apparait après le sélecteur .petit dans le code. C’est donc la taille de texte définie dans .grand qui va être appliquée à notre premier paragraphe. De même, le sélecteur .orange apparait après le sélecteur .bleu dans le code. Le texte de notre deuxième paragraphe sera donc orange et non pas bleu. Notez que c’est exactement la même règle d’ordre d’écriture des styles qui va s’appliquer, à sélecteur égal, pour déterminer si ce sont les styles définis dans un élément style ou si ce sont ceux définis dans un fichier CSS séparés qui vont s’appliquer. Ici, notre titre h1 s’affiche en orange car nous avons précisé l’élément style après l’élément link qui fait appel à notre fichier CSS dans notre fichier HTML. Les styles définis dans l’élément style seront donc lus après ceux définis dans notre fichier CSS liés et seront donc appliqués dans le cas où plusieurs sélecteurs concurrents définissent le comportement d’une même propriété et ont la même importance et la même spécificité. Pour vous en convaincre, échangeons la place des éléments link et style dans notre code HTML et observons le résultat sur notre code HTML : Une convention en HTML va être de toujours préciser notre élément style après notre élément link dans le code pour ne pas s’embrouiller et c’est la raison pour laquelle on retient généralement qu’à sélecteur égal les styles définis dans l’élément style sont prioritaires sur ceux définis dans un fichier CSS séparé. Notez qu’ici notre titre h1 va toujours avoir la taille définie dans le sélecteur .petit puisqu’un sélecteur d’attribut class est toujours plus précis qu’un sélecteur élément et que ce critère de précision passe avant le critère de l’ordre d’écriture des styles dans le code."
      },
      {
        "type": "h",
        "text": "L’héritage en CSS"
      },
      {
        "type": "p",
        "text": "La notion d’héritage est une autre notion fondamentale du CSS. Elle signifie que certains styles CSS appliqués à un élément vont être hérités par les éléments enfants de cet élément, c’est-à-dire par les éléments contenus dans cet élément. Cette notion d’héritage est conditionnée par deux choses :"
      },
      {
        "type": "list",
        "items": [
          "Toutes les propriétés ne vont pas être héritées pour la simple et bonne raison que"
        ]
      },
      {
        "type": "p",
        "text": "cela ne ferait aucun sens pour certaines de l’être ;"
      },
      {
        "type": "list",
        "items": [
          "Les éléments enfants n’hériteront des styles de leur parent que si il n’y a pas de"
        ]
      },
      {
        "type": "p",
        "text": "conflit c’est-à-dire uniquement dans la situation où ces mêmes styles n’ont pas été redéfinis pour ces éléments enfants en CSS. Pour savoir quelles propriétés vont pouvoir être héritées et quelles autres ne vont pas pouvoir l’être il va soit falloir faire preuve de logique (et bien connaitre le langage CSS), soit falloir apprendre par cœur pour chaque propriété si elle peut être héritée ou pas. Les propriétés qui vont pouvoir être héritées sont en effet celles dont l’héritage fait du sens. Par exemple, la propriété font-family qui sert à définir un jeu de polices à utiliser pour du texte va pouvoir être hérité car il semble logique que l’on souhaite avoir la même police pour tous les textes de nos différents éléments par défaut. En revanche, les propriétés liées aux marges par exemple ou plus généralement les propriétés de mise en page et de positionnement des éléments ne vont pas pouvoir être héritées car cela ne ferait aucun sens d’un point de vue design de rajouter une marge d’une taille définie pour chaque élément enfant. Dans l’exemple ci-dessus, je définis un jeu de police avec la propriété font-family dans mon sélecteur html. Comme tous les éléments d’une page HTML sont des enfants de cet élément (ils sont contenus dans l’élément html) et comme la propriété font-family peut être héritée, tous les textes de ma page utiliseront la police d’écriture définie dans cette propriété sauf si une autre police est définie de manière plus précise avec un sélecteur plus précis comme c’est le cas pour mon titre h1 ici. J’attribue ensuite une marge extérieure gauche égale à 50px à mon élément ul représentant ma liste. Ma liste sera donc décalée de 50px par rapport au bord gauche de son élément parent qui est ici l’élément body qui représente la page. Cependant, comme la propriété margin ne peut pas être héritée, les éléments de liste de vont pas hériter de ce même margin-left : 50px par défaut. Ici, vous devez bien comprendre que la marge se calcule par rapport au début de l’élément parent. La liste entière est décalée de 50px par rapport à l’élément body mais les éléments de liste ne sont pas décalés par défaut de 50px par rapport à l’élément ul qui est leur élément parent. Pour bien illustrer cela, j’ai ajouté manuellement un margin-left : 50px au deuxième élément de liste afin de vous prouver que le premier élément de liste n’a pas hérité de la propriété margin appliquée à son élément parent ul. Notez que le CSS nous laisse toutefois la possibilité de « forcer » un héritage pour des propriétés non héritées par défaut ou plus exactement la possibilité de définir des comportements d’héritage pour chaque propriété définie dans chaque sélecteur. Pour faire cela, nous allons pouvoir utiliser quatre valeurs qui vont fonctionner avec toutes les propriétés CSS (elles sont dites universelles) et qui vont nous permettre d’indiquer que telle propriété définie dans tel sélecteur doit avoir le même comportement que celle définie pour l’élément parent ou pas. Ces valeurs sont les suivantes :"
      },
      {
        "type": "h",
        "text": "Valeur    Signification"
      },
      {
        "type": "p",
        "text": "Sert à indiquer que la valeur de propriété appliquée à l’élément sélectionné inherit est la même que celle de l’élément parent Sert à indiquer que la valeur de propriété appliquée à l’élément sélectionné initial est la même que celle définie pour cet élément dans la feuille de style par défaut du navigateur Permet de réinitialiser la propriété à sa valeur naturelle, ce qui signifie que si la propriété est naturellement héritée elle se comporte comme si on avait unset donné la valeur inherit. Dans le cas contraire, son comportement sera le même que si on lui avait donné la valeur initial Permet la propriété à la valeur qu’elle aurait eue si aucun style ne lui avait été appliqué. La valeur de la propriété va donc être fixée à celle de la feuille revert de style de l’utilisateur si elle est définie ou sera récupérée dans la feuille de style par défaut de l’agent utilisateur En pratique, la valeur la plus utilisée parmi ces quatre va être inherit. Notez également que le support pour la valeur revert n’est pas encore acquis pour la plupart des navigateurs. Je n’ai évoqué cette valeur ici que par souci d’exhaustivité mais vous déconseille de l’utiliser pour le moment. Pour cette raison, je ne l’évoquerai plus dans la suite de ce cours. Ici, on définit un h1{font-family: initial;} en CSS. Ainsi, c’est la valeur de font-family définie pour cet élément dans la feuille de style par défaut du navigateur qui va être appliquée. En l’occurrence, dans mon cas, cela va être la valeur Times. Ensuite, on demande explicitement à ce que les éléments de liste li héritent de la valeur donnée à la propriété margin-left à leur parent. Pour notre première liste, on définit margin-left: 50px. Les éléments li vont donc également posséder une marge extérieure gauche de 50px par rapport à la liste en soi qui est leur élément parent. Pour notre deuxième liste, en revanche, on a défini une marge gauche de 10px seulement. Les éléments de liste vont donc utiliser cette même valeur pour leur propriété margin- left et être décalés de 10px par rapport à la liste en soi. Conclusion sur les mécanismes de cascade et d’héritage en CSS Les mécanismes de cascade et d’héritage en CSS vont permettre de définir via un ensemble de règles quels styles vont être appliqués à quel élément en cas de conflit. Ces mécanismes vont en pratique très souvent entrer en jeu. En effet, la plupart des sites sont aujourd’hui complexes et vont utiliser plusieurs feuilles de styles (fichiers CSS) différentes qui vont définir de nombreuses règles à appliquer à chaque élément. Comprendre comment ces mécanismes fonctionnent et connaitre ces règles est essentiel et fondamental puisque cela va nous permettre de toujours obtenir le résultat visuel espéré. Notez que la cascade et l’héritage sont le cœur même du CSS et sont en grande partie sa puissance puisque ces mécanismes vont nous permettre d’un côté de pouvoir « surcharger » des styles en utilisant des sélecteurs plus ou moins précis et de l’autre côté de transmettre des styles d’un élément parent à ces enfants et donc nous éviter de définir tous les styles voulus pour chaque élément."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* === La CASCADE : comment CSS résout les conflits === */\n/* Ordre de priorité (du plus fort au plus faible) :\n   1. !important\n   2. Spécificité (inline > id > classe > balise)\n   3. Ordre d'apparition (la dernière règle l'emporte) */\n\n/* Spécificité exemples */\np { color: blue; }                    /* Spécificité : 0-0-1 */\n.texte { color: red; }               /* Spécificité : 0-1-0 → gagne sur p */\n#unique { color: green; }            /* Spécificité : 1-0-0 → gagne sur .texte */\np.texte { color: purple; }           /* Spécificité : 0-1-1 */\np.texte#unique { color: orange; }    /* Spécificité : 1-1-1 → la plus haute */\n\n/* !important : à éviter, sauf cas exceptionnels */\np { color: blue !important; } /* Gagne même sur inline style */\n\n/* === L'HÉRITAGE === */\n/* Certaines propriétés sont héritées par les enfants */\nbody {\n  font-family: Arial, sans-serif; /* Hérité par tous les éléments */\n  color: #333;                    /* Hérité */\n  font-size: 16px;                /* Hérité */\n}\n\n/* Les propriétés héritées : color, font-*, line-height, text-align, visibility... */\n/* Les propriétés NON héritées : margin, padding, border, background, width... */\n\n/* Forcer l'héritage */\n.enfant { color: inherit; }       /* Hérite du parent */\n.enfant { color: initial; }       /* Valeur initiale du navigateur */\n.enfant { color: unset; }         /* Hérite si héritable, sinon initial */\n\n/* Exemple pratique */\n.carte { font-family: Georgia; color: #222; }\n.carte h2 { /* hérite font-family et color, sauf si on les redéfinit */ }\n.carte p  { /* hérite aussi */ }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "24-notations-compl-tes-longhand-et-raccourc",
    "title": "Notations complètes (longhand) et raccourcies (shorthand) en CSS",
    "blocks": [
      {
        "type": "h",
        "text": "(shorthand) en CSS"
      },
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons définir ce que sont les notations CSS raccourcies ou « short hand » en anglais et voir à quel moment il est intéressant de les utiliser par rapport aux notations complètes ou « long hand ». Définition d’une notation CSS raccourcie ou notation « short hand » Une notation raccourcie ou notation « short hand » ou encore « propriété raccourcie / short hand » correspond à une propriété à laquelle on va pouvoir passer les valeurs d’un ensemble d’autres propriétés et qui va donc nous permettre de définir de valeur de plusieurs propriétés d’un coup. Nous avons déjà été amené à en rencontrer certaines dans ce cours comme par exemple la propriété border qui correspond en fait à la notation raccourcie des propriétés border- width, border-style et border-color et qui nous permet ainsi de définir d’un coup les valeurs pour ces trois propriétés pour un élément. De manière générale, il va souvent être équivalent de préciser le comportement d’un aspect d’un élément HTML en utilisant une notation raccourcie ou en utilisant les propriétés long hand. Cependant, les notations short hand possèdent certains avantages sur les notations long hand mais également certaines limites dans certaines situations que nous allons voir dans la suite de cette leçon. L’ordre de déclaration des valeurs des propriétés short hand Une propriété short-hand est une propriété à laquelle on va pouvoir passer les valeurs de plusieurs autres propriétés. L’ordre de déclaration des valeurs ne va compter que dans le cas où la notation raccourcie va accepter plusieurs valeurs d’un type similaire et donc dans le cas où il peut y avoir ambiguïté sur ce à quoi doit s’appliquer une valeur. Dans ce cas-là, il faudra respecter un ordre précis. J’indiquerai l’ordre de déclaration pour chaque notation raccourcie que nous allons étudier dans ce cours dans la leçon qui lui est relative. Par exemple, la propriété raccourcie padding va permettre de définir le comportement des marges internes d’un élément HTML. Cette propriété est la version short hand des propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "padding-top : définition de la marge interne supérieure ;",
          "padding-right : définition de la marge interne droite ;",
          "padding-bottom : définition de la marge interne inférieure ;",
          "padding-left : définition de la marge interne gauche."
        ]
      },
      {
        "type": "p",
        "text": "Chacune de ces quatre propriétés va accepter le même type de valeur et notamment des valeurs de type « longueur » en px par exemple. Lors de la définition de padding, il faudra donc faire attention à l’ordre des valeurs pour définir la bonne taille pour chacune des marges internes. Que se passe-t-il en cas d’oubli de déclaration de certaines valeurs dans les notations raccourcies ? Avant tout, vous devez bien comprendre que nous ne sommes jamais obligés de définir le comportement de chacune des propriétés long hand dans la propriété short hand associée. En d’autres termes, on va tout à fait pouvoir omettre de déclarer certaines valeurs dans nos propriétés raccourcies. Ici, il va y avoir principalement deux cas à distinguer : le cas où il peut y avoir ambiguïté sur les valeurs et le cas où il n’y en a pas. Dans le cas où il peut y avoir ambiguïté, la définition de la propriété raccourcie va nous indiquer son comportement. Prenons l’exemple de notre propriété padding par exemple. Si on omet une valeur, la propriété ne peut pas savoir à première vue si c’est la valeur de la marge haute, droite, basse ou gauche que l’on ne souhaite pas définir. Pour gérer ce genre de situations, des règles ont donc été définies lors de la création de la version raccourcie. Dans le cas de padding, par exemple, si on ne passe que trois valeurs alors la deuxième va s’appliquer à la fois à la marge droite et à la marge gauche. Dans le cas où il n’y a pas d’ambiguïté, ce sont les valeurs par défaut des propriétés relatives qui vont être utilisées. Cela signifie que les valeurs qui ne sont pas définies avec la propriété raccourcie sont définies avec leur valeur initiale. Faites bien attention donc ici car omettre des valeurs dans une propriété raccourcie va tout de même définir le comportement des propriétés relatives avec leur valeur initiale. En particulier, dans le cas où la propriété en question avait déjà été définie auparavant avec sa notation long hand, la valeur sera surchargée par la propriété raccourcie ce qui signifie que c’est la valeur par défaut transmise par la version raccourcie qui sera utilisée. Faites donc bien attention aux comportements inattendus ! Dans l’exemple ci-dessus, par exemple, on définit des comportements pour chacune des propriétés qui peuvent être définies avec la notation raccourcie font pour nos éléments p. Ensuite, on utilise la notation raccourcie font en ciblant un paragraphe en particulier. Dans font, on ne définit que les valeurs relatives à la taille de la police et à la famille de polices utilisée. Pour toutes les autres valeurs, ce sont les valeurs par défaut qui vont être utilisées. Ainsi, par exemple, le style (font-style) et le poids (font-weight) vont être normal, ce qui est la valeur par défaut de ces deux propriétés et non pas italic et bold comme on l’a défini au- dessus. Les limites des propriétés short hand par rapport aux notations long hand La première limite des propriétés short hand par rapport à leurs équivalentes long hand est qu’on ne va pas pouvoir utiliser les valeurs globales inherit, initial et unset dans la déclaration des valeurs de nos propriétés raccourcies. En effet, si on les utilisait, il serait impossible pour les navigateurs de savoir à quelle propriété correspond quelle valeur dans le cas de l’oubli de certaines valeurs. Une deuxième limite évidente est que l’héritage des propriétés de va pas être possible avec les propriétés raccourcies puisque les valeurs oubliées dans les propriétés raccourcies vont être remplacées par leurs valeurs initiales. Il ne va donc pas être possible de pouvoir faire hériter les valeurs de certaines propriétés en les omettant dans la déclaration short hand puisque le CSS va tout de même automatiquement les définir en utilisant les valeurs initiales des propriétés « non définies ». Quelques notations short hand courantes et les propriétés long hand associées Avant tout, notez que chacune des propriétés long hand ne va pas forcément avoir de propriété short hand associée. Les propriétés short hand ont été créées pour simplifier et raccourcir l’écriture du CSS tout en gardant une cohérence et une bonne lisibilité du code. C’est la raison pour laquelle les propriétés short hand regroupent toujours des ensembles de propriétés qui agissent sur un même aspect d’un élément HTML. Vous pourrez trouver dans le tableau ci-dessous les propriétés short hand les plus courantes et qu’il vous faut connaitre avec l’ensemble des propriétés long hand qu’elles permettent de définir. Nous n’avons pour le moment pas étudié la majorité de ces propriétés. Pas d’inquiétude, nous allons le faire au cours de ce cours."
      },
      {
        "type": "h",
        "text": "Short"
      },
      {
        "type": "p",
        "text": "Équivalent Long Hand Hand font font-style, font-variant, font-weight, font-size, line-height, font-family border border-width, border-style, border-color margin margin-top, margin-right, margin-bottom, margin-left padding padding-top, padding-right, padding-bottom, padding-left background-image, background-position, background-size, background- background repeat, background-origin, background-clip, background- attachment, background-color transition-property, transition-duration, transition-timing- transition function, transition-delay animation-name, animation-duration, animation-timing- animation function, animation-delay, animation-iteration-count, animation- direction, animation-fill-mode, animation-play-state flex flex-shrink, flex-grow, flex-basis"
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* === FONT : notation longue vs raccourcie === */\n/* Longue */\np {\n  font-style: italic;\n  font-variant: small-caps;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 1.6;\n  font-family: Georgia, serif;\n}\n/* Raccourcie : font: style variant weight size/line-height family */\np { font: italic small-caps bold 18px/1.6 Georgia, serif; }\n\n/* === MARGIN : notation longue vs raccourcie === */\n.boite {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n/* 4 valeurs : haut droite bas gauche (sens des aiguilles d'une montre) */\n.boite { margin: 10px 20px 10px 20px; }\n/* 2 valeurs : haut/bas | gauche/droite */\n.boite { margin: 10px 20px; }\n/* 1 valeur : les 4 côtés */\n.boite { margin: 10px; }\n\n/* === BACKGROUND === */\n.hero {\n  background-color: #2c3e50;\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/* Raccourcie */\n.hero { background: #2c3e50 url('hero.jpg') no-repeat center/cover fixed; }\n\n/* === BORDER === */\n.carte { border: 2px solid #ddd; }  /* épaisseur style couleur */\n/* Séparément */\n.carte { border-width: 2px; border-style: solid; border-color: #ddd; }\n/* Un seul côté */\n.carte { border-bottom: 3px solid #3498db; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "25-la-propri-t-css-font-family-et-les-googl",
    "title": "La propriété CSS font-family et les Google Fonts",
    "blocks": [
      {
        "type": "h",
        "text": "Fonts"
      },
      {
        "type": "p",
        "text": "Dans cette nouvelle partie, nous allons nous intéresser aux propriétés CSS permettant de mettre en forme des textes. Les propriétés CSS liées au texte peuvent être séparées en deux grandes catégories :"
      },
      {
        "type": "list",
        "items": [
          "Les propriétés de type font- qui vont définir l’aspect des caractères en soi en qui"
        ]
      },
      {
        "type": "p",
        "text": "agissent directement sur la police d’écriture (choix de la police, de la taille des caractères ou de leur poids entre autres) ;"
      },
      {
        "type": "list",
        "items": [
          "Les propriétés de type text- qui ne vont pas impacter directement l’aspect des"
        ]
      },
      {
        "type": "p",
        "text": "caractères du texte mais nous permettre d’ajouter des effets de style autour de celui-ci (alignement du texte, soulignement ou encore ajout d’ombres autour des textes par exemple). Dans cette leçon, nous allons nous intéresser à une première propriété de type font- qui va nous permettre de définir la police de nos textes : la propriété font-family. La propriété CSS font-family : définition et exemples d’utilisation La propriété CSS font-family va nous permettre de définir la police de nos textes, c’est-à- dire le rendu graphique de chaque caractère. Il existe aujourd’hui un très grand nombre de polices d’écritures disponibles et parmi lesquelles on va pouvoir choisir mais il faut savoir que certaines versions de certains navigateurs que peuvent posséder vos visiteurs ne vont pas supporter certaines polices. Pour cette raison, nous indiquerons toujours plusieurs noms de polices (une « famille de polices ») à utiliser en valeur de la propriété font-family en commençant par celle préférée et en séparant chaque valeur par une virgule. Ainsi, le navigateur va lire les différentes polices renseignées dans font-family dans l’ordre et utiliser la première qu’il supporte. Notez ici que si vous renseignez un nom de police qui contient des espaces, vous devrez le mettre entre guillemets ou apostrophes. Voyons un premier exemple d’utilisation de font-family ensemble. On va définir une même police pour toute la partie visible de notre page HTML en appliquant notre propriété à l’élément body (les éléments dans le body hériteront par défaut de la valeur passée à la propriété font-family pour l’élément body). Dans cet exemple, j’indique trois polices d’écriture différentes en valeur de ma propriété font-family : Source code pro, Verdana et sans-serif. Lors de l’affichage, mon navigateur va lire les valeurs dans leur ordre d’écriture et va appliquer la première valeur de police qu’il supporte / reconnait. Dans cet exemple, j’ai indiqué intentionnellement trois polices particulières : la police Source code pro est ce qu’on appelle une « Google Font » (nous reviendrons dessus plus tard) tandis que Verdana fait partie des « web safe fonts » (en français « famille de polices sûres ») et sans-serif est ce qu’on appelle une « famille générique »."
      },
      {
        "type": "h",
        "text": "Les web safe fonts et les familles génériques"
      },
      {
        "type": "p",
        "text": "Les web safe fonts où « polices d’écriture sûres pour le web » sont un ensemble de polices qui sont lues de manière universelle par toutes les versions de tous les navigateurs dignes de ce nom. En précisant une police qui appartient à cette catégorie en valeur de font-family, on s’assure donc que le navigateur de nos visiteurs sera à minima capable de lire et d’afficher cette police (à priori). Une famille générique représente pas une police en soi mais va servir à définir la forme des caractères à afficher de manière sommaire. Les familles génériques doivent toujours être mentionnées en dernière valeur de la propriété font-family. Elles vont être utilisées en dernier recours si le navigateur n’arrive à lire aucune des polices indiquées dans la propriété font-family. La famille générique serif par exemple est caractérisée l’empattement de ses caractères tandis que ce sera le contraire pour sans-serif. Notez bien que chaque police connue appartient automatiquement à une famille de polices par défaut. Il existe 5 familles génériques disponibles en CSS aujourd’hui :"
      },
      {
        "type": "h",
        "text": "Famille"
      },
      {
        "type": "p",
        "text": "Description générique"
      },
      {
        "type": "h",
        "text": "Serif             Les caractères possèdent un empattement"
      },
      {
        "type": "h",
        "text": "Sans-serif        Les caractères ne possèdent pas d’empattement"
      },
      {
        "type": "h",
        "text": "Les caractères ont tous la même taille et sont espacés"
      },
      {
        "type": "p",
        "text": "Monospace équitablement"
      },
      {
        "type": "h",
        "text": "Les caractères sont souvent fins et ressemblent à une écriture"
      },
      {
        "type": "p",
        "text": "Cursive manuelle soignée"
      },
      {
        "type": "h",
        "text": "Les caractères sont généralement difformes ou très stylisés, au"
      },
      {
        "type": "p",
        "text": "Fantasy contraire de la famille générique monospace En général, on indiquera toujours au moins une police appartenant aux web safe fonts en valeur de notre propriété font-family ainsi qu’une famille générique associée afin d’être certain qu’au moins une valeur puisse être lue par le navigateur de vos visiteurs. Comme je vous l’ai dit précédemment, chaque police connue appartient automatiquement à une famille de polices. Une bonne pratique va donc être de préciser une série de polices appartenant à la même famille générique (par exemple, que des polices sans-serif) puis de préciser en dernière valeur de font-family la famille générique associée afin de garder un maximum de cohérence. Voici une liste des web safe fonts les plus utilisées et de leur famille générique associée :"
      },
      {
        "type": "h",
        "text": "Famille générique                             Police"
      },
      {
        "type": "p",
        "text": "Times New Roman, Serif Georgia Arial, Sans-serif Verdana Courier New, Monospace Lucida Console"
      },
      {
        "type": "h",
        "text": "Cursive                                        Comic sans MS"
      },
      {
        "type": "h",
        "text": "Définition, intégration et utilisation des Google Fonts"
      },
      {
        "type": "p",
        "text": "Google a développé sa propre liste de polices d’écriture appelées les Google Fonts. Ces polices peuvent être utilisées sur n’importe quel site, le tout est de faire un lien en HTML vers la police Google désirée puis de l’utiliser comme valeur de notre propriété font- family en CSS. Un des grands intérêts des Google Fonts est que les polices de Google ne dépendent pas d’un navigateur mais peuvent être lues par (quasiment) tous les navigateurs. En effet, l’idée va être de pré-charger le jeu complet de caractères de la police via Google dans le navigateur d’un utilisateur lorsque celui-ci tente d’accéder à une page de notre site. Ainsi, les risques de non-comptabilité d’une police sont très sérieusement réduits. L’autre grand avantage est que nous allons pouvoir choisir parmi une très longue liste de polices et ainsi totalement personnaliser l’écriture sur votre site. Pour utiliser les Google Fonts, il va tout d’abord nous falloir choisir une police dans la liste proposée sur le site de Google dédié : https://fonts.google.com/. Sur ce site, vous allez pouvoir soit rechercher une police en particulier en utilisant la recherche en haut à droite, soit pouvoir définir des critères de recherche pour trier les polices et n’afficher que certains types de polices. Vous allez ainsi pouvoir filtrer les polices selon leur popularité pour voir quelles sont les polices les plus tendances ou encore pouvoir choisir de n’afficher les polices que d’un type de famille générique ce qui va pouvoir s’avérer très utile. Pour ma part, je vais choisir la police « Open sans », l’une des polices les plus communément utilisées ces dernières années. Nous allons ici soit pouvoir sélectionner directement la police en question avec les options par défaut en cliquant sur le « + », soit pouvoir cliquer sur la police en soi pour avoir davantage d’informations par rapport à cette Google Font. Cela va également nous permettre de voir l’aspect des caractères de notre police selon l’épaisseur de celle-ci. On va également nous dire avec quelle autre police notre police est souvent couplée sur un site. Il est en effet reconnu comme une bonne pratique d’utiliser deux polices différentes pour les titres et les autres contenus textuels et la plupart des sites appliquent cette règle. Ici, par exemple, on s’aperçoit que la police « Open Sans » est souvent utilisée avec une autre police bien connue qui est Roboto. Nous pouvons également à cet endroit choisir le style de notre ou de nos polices (Light, Regular, Bold, etc.). Sélectionnons ici les polices Google « Open sans » et Roboto en version Regular. Pour cela, commencez par sélectionner la police « Open sans » en cliquant sur le « + » en haut à droite de la page puis sélectionnez de la même façon Roboto dans la liste des polices souvent utilisées ensemble. Vous devriez alors avoir un encadré en bas de page avec vos polices sélectionnées. Cliquez sur cet encadré puis sur la flèche à l’intérieur. Vous êtes alors finalement ramené sur la page vous expliquant comment intégrer ces deux polices dans vos pages et vous donnant les codes d’intégration de ces deux polices. Comme vous pouvez le constater, la manipulation est très simple : il suffit d’ajouter dans l’élément head de notre page HTML un élément link et d’indiquer en valeur de href l’URL fournie (ici, par exemple, ce sera href=\"https://fonts.googleapis.com/css?family=Open+Sans|Roboto\") puis de préciser finalement un attribut rel=\"stylesheet\". Ensuite, nous n’avons plus qu’à indiquer le nom de nos polices en valeur de notre propriété font-family dans notre feuillet CSS et le tour est joué ! Regardez plutôt l’exemple suivant dans lequel j’ai intégré mes deux Google Fonts : Note : Si vous utilisez comme moi le navigateur Google Chrome il est possible que les Google Fonts soient disponibles pour vous sans que vous ayez besoin du lien d’intégration. Cependant, il faut ici penser à vos visiteurs : tous ne vont pas utiliser Google Chrome et c’est la raison pour laquelle il est obligatoire d’insérer le lien de pré chargement des polices dans votre code via l’élément link et son attribut href."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Google Fonts</title>\n  <!-- Importer depuis Google Fonts (dans le <head>) -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:ital@0;1&display=swap\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Titre avec Playfair Display</h1>\n  <p>Paragraphe avec Roboto Regular.</p>\n  <p><strong>Paragraphe avec Roboto Bold.</strong></p>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Utiliser les polices Google Fonts */\nbody {\n  font-family: 'Roboto', Arial, sans-serif; /* Roboto puis fallback */\n}\n\nh1, h2, h3 {\n  font-family: 'Playfair Display', Georgia, serif;\n}\n\n/* Familles de polices génériques (fallback) */\n/* serif      : Georgia, Times New Roman... (avec empattements) */\n/* sans-serif : Arial, Helvetica, Roboto... (sans empattements) */\n/* monospace  : Courier, Consolas... (largeur fixe, code) */\n/* cursive    : écriture manuscrite */\n/* fantasy    : décorative */\n\n/* Pile de polices (fallback chain) */\n.corps-texte {\n  font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;\n}\n\n/* Utiliser @font-face pour des polices locales */\n@font-face {\n  font-family: 'MaPolice';\n  src: url('fonts/mapolice.woff2') format('woff2'),\n       url('fonts/mapolice.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; /* Affiche une police de substitution pendant le chargement */\n}\n\n.custom { font-family: 'MaPolice', sans-serif; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "26-autres-propri-t-s-css-li-es-la-police",
    "title": "Autres propriétés CSS liées à la police",
    "blocks": [
      {
        "type": "p",
        "text": "Les propriétés CSS de type font- vont nous permettre de modifier l’apparence des caractères de notre police d’écriture. Dans la leçon précédente, nous avons étudié la propriété font-family qui sert à définir une police d’écriture qui devra être utilisée pour nos textes. Il existe d’autres propriétés CSS de type font- qu’il est bon de connaitre. Dans cette nouvelle leçon, nous allons présenter les propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La propriété font-size qui va nous permettre de modifier la taille de notre police ;",
          "La propriété font-weight qui va nous permettre de modifier le poids de notre police"
        ]
      },
      {
        "type": "list",
        "items": [
          "La propriété font-style qui va nous permettre de modifier l’inclinaison de notre"
        ]
      },
      {
        "type": "p",
        "text": "police. Notez déjà que les propriétés qui modifient le comportement des polices vont être soumises à la police qu’elles modifient : certaines polices ne supportent pas certaines modifications et les propriétés en question seront alors ignorées."
      },
      {
        "type": "h",
        "text": "La propriété font-size"
      },
      {
        "type": "p",
        "text": "La propriété CSS font-size va nous permettre de modifier la taille de notre police d’écriture lors de l’affichage des différents textes. Cette première propriété va pouvoir s’appliquer à toutes les polices puisque toutes les polices supportent un changement de taille aujourd’hui. Cette propriété va accepter deux grands types de valeurs : des valeurs absolues et des valeurs relatives. Chaque type de valeur va posséder des avantages et des inconvénients et on utilisera plutôt une valeur ou une autre selon la situation. Vous pouvez déjà trouver la liste des différentes valeurs acceptées ci-dessous : Une valeur dite « absolue » est une valeur qui ne va pas dépendre d’autres éléments dans la page tandis qu’une valeur « relative » va au contraire être calculée en fonction de la valeur d’autres éléments dans la page. Attention ici : une valeur absolue n’est pas forcément fixe ou statique puisque certaines valeurs absolues vont dépendre des réglages par défaut de l’utilisateur. « Absolu » ici veut simplement dire que la valeur ne va pas être calculée en fonction des autres éléments dans la page."
      },
      {
        "type": "h",
        "text": "Les valeurs de type « mot clef »"
      },
      {
        "type": "p",
        "text": "On va donc déjà pouvoir passer un mot clef à la propriété font-size. Les mots clefs suivants correspondent à des valeurs absolues de police mais qui sont relatives aux réglages faits par l’utilisateur dans son navigateur. Notez ici que la taille utilisée par défaut par les navigateurs (sans réglage spécifique de l’utilisateur donc) est généralement égale à 16px pour un paragraphe mais va être plus grande pour un titre."
      },
      {
        "type": "list",
        "items": [
          "xx-small : la taille de la police sera égale à la moitié de celle définie dans le"
        ]
      },
      {
        "type": "p",
        "text": "navigateur ;"
      },
      {
        "type": "list",
        "items": [
          "x-small : la taille de la police sera égale à 60% de celle définie dans le navigateur ;",
          "small : la taille de la police sera égale à 80% de celle définie dans le navigateur ;",
          "medium : la taille de la police sera égale à celle définie dans le navigateur ;",
          "large : la taille de la police sera 10% plus grande que celle définie dans le"
        ]
      },
      {
        "type": "p",
        "text": "navigateur ;"
      },
      {
        "type": "list",
        "items": [
          "x-large : la taille de la police sera 50% plus grande que celle définie dans le"
        ]
      },
      {
        "type": "p",
        "text": "navigateur ;"
      },
      {
        "type": "list",
        "items": [
          "xx-large : la taille de la police sera deux fois plus grande que celle définie dans le"
        ]
      },
      {
        "type": "p",
        "text": "navigateur. Les mots clefs suivants permettent de définir une taille de police relativement à celle de l’élément parent :"
      },
      {
        "type": "list",
        "items": [
          "smaller : la taille de la police de l’élément sera plus petite que celle de son élément"
        ]
      },
      {
        "type": "p",
        "text": "parent ;"
      },
      {
        "type": "list",
        "items": [
          "larger : la taille de la police de l’élément sera plus grande que celle de son élément"
        ]
      },
      {
        "type": "p",
        "text": "parent. Ici, la taille de la police des paragraphes p1 et p2 dépend de la taille de la police de leur élément parent qui est dans ce cas l’élément body et qui a été réglée à font-size: xx-large. Notez également qu’ici notre titre h1 hérite de la valeur de la propriété de son parent, c’est- à-dire font-size: xx-large et va donc s’afficher en très gros puisque le réglage par défaut des navigateurs pour un titre h1 définit généralement une taille de police deux fois plus grande que pour un paragraphe."
      },
      {
        "type": "h",
        "text": "Les valeurs de type « longueur »"
      },
      {
        "type": "p",
        "text": "On va également pouvoir passer une longueur en valeur de la propriété font-size. Une longueur peut être exprimée en px (pixels). Dans ce cas, la taille de la police sera absolue et statiques c’est-à-dire indépendante de tout réglage de l’utilisateur ou des valeurs par défaut du navigateur. Utiliser des valeurs en px permet donc d’avoir un résultat très prévisible mais empêche les utilisateurs d’adapter la taille du texte selon leurs réglages, ce qui va être très problématique pour les utilisateurs souffrant de déficiences visuelles. Une longueur peut également être exprimée en em ou plus rarement en ex. Les valeurs en em (et en ex) vont être dynamiques et relatives à la valeur de l’élément parent pour la propriété concernée. En déclarant font-size : 1em pour un élément on demande à ce que la valeur de la propriété soit la même que celle définie pour l’élément parent, en déclarant font-size : 1.5em on demande à ce que la valeur de la propriété soit égale à 1,5 fois celle définie pour l’élément parent et etc. Note : Attention ici à bien utiliser des points à la place des virgules (notations anglo- saxonnes) lorsque vous préciser des valeurs non entières en CSS ! Si aucune taille n’a été définie pour l’élément parent alors la taille définie dans le navigateur sera utilisée (généralement 16px par défaut sauf réglage utilisateur spécifique). Les valeurs en em possèdent donc l’avantage de pouvoir s’adapter mais peuvent entrainer des problèmes de composition ou de cohérence / d’homogénéisation. En effet, imaginons qu’un attribue un font-size : 1.5em pour un type d’éléments comme les éléments span par exemple. Si dans ce cas un élément span contient lui-même un élément span, les tailles de police des différents éléments span vont être différentes puisque la police du span contenu dans l’autre span va être égale à 1,5 fois celle du span parent. Ici, la taille de la police du premier span dans notre paragraphe est égale à 1,5 fois celle du paragraphe (qui est son parent) tandis que la taille de la police du span enfant dans le span parent est égale à 1,5 fois celle du span parent. Souvent, ce ne sera pas le comportement souhaité et ce genre de situations est ce qui rend ce type de valeurs (et les valeurs relatives en général) très difficile à manier en pratique. Pour pallier ce problème, nous pouvons plutôt utiliser l’unité rem. Les valeurs fournies en rem vont être relatives à la taille définie pour la propriété de l’élément racine html et non pas à la taille définie pour l’élément parent."
      },
      {
        "type": "h",
        "text": "Les valeurs de type « pourcentage »"
      },
      {
        "type": "p",
        "text": "Nous allons enfin également pouvoir passer un pourcentage en valeur de la propriété font- size. Les valeurs exprimées en pourcentage vont être proportionnelles à la valeur renseignée pour la propriété dans l’élément parent. Les unités en em et les % vont donc être équivalent pour définir la taille de la police d’un élément. Cependant, notez bien que ces unités vont pouvoir être réutilisées avec d’autres propriétés et dans ce cas elles ne vont plus l’être puisque les unités en em vont toujours être exprimées en fonction de la taille de la police. Regardez plutôt l’exemple suivant. La propriété width sert ici à définir la largeur d’un élément et peut accepter des valeurs aussi bien en em qu’en % : Ici, la largeur du div #d1 est égale à la moitié de la largeur de son élément parent (width : 50%) tandis que la largeur du div #d2 est égale à deux fois la taille de la police définie dans l’élément (width : 2em). J’ai ajouté une couleur de fond aux deux div afin qu’on puisse bien voir l’espace pris par chacun d’entre eux."
      },
      {
        "type": "h",
        "text": "Les valeurs universelles"
      },
      {
        "type": "p",
        "text": "On va également bien évidemment pouvoir passer une valeur universelle à la propriété font-size comme inherit ou initial par exemple pour que la propriété hérite du comportement défini dans un élément parent ou pour qu’elle soit réinitialisée à sa valeur d’origine définie dans la feuille de style par défaut du navigateur. Note importante : les valeurs inherit, initial et unset sont des valeurs dites « globales » ou « universelles » car elles vont fonctionner avec toutes les propriétés CSS. Dans la suite de ce cours, je ne préciserai donc pas pour chaque propriété étudiée qu’elle peut utiliser ces valeurs car cela est évident."
      },
      {
        "type": "h",
        "text": "La propriété font-weight"
      },
      {
        "type": "p",
        "text": "La propriété CSS font-weight va nous permettre de définir le poids d’une police, c’est-à- dire son épaisseur. Cette propriété va pouvoir prendre un mot clef ou un chiffre exprimé en centaine(s) en valeur. Nous allons ainsi pouvoir choisir parmi les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef normal : valeur par défaut qui correspond à un poids de police « normal"
        ]
      },
      {
        "type": "p",
        "text": "»;"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef lighter qui va définir une police d’écriture plus fine que pour la"
        ]
      },
      {
        "type": "p",
        "text": "valeur normal ;"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef bold qui va définir une police d’écriture plus épaisse que pour la"
        ]
      },
      {
        "type": "p",
        "text": "valeur normal ;"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef bolder qui va définir une police d’écriture très épaisse ;",
          "Une centaine entre 100 (qui correspond à une police très fine) et 900 (pour une"
        ]
      },
      {
        "type": "p",
        "text": "police très épaisse). En termes d’équivalence avec les mots clefs, vous pouvez retenir que la valeur 400 est équivalente au mot clef normal et que la valeur 700 est équivalente au mot clef bold. Notez bien ici que toutes les valeurs évoquées ci-dessus ne vont pas toujours pouvoir être appliquées : en effet, certaines polices ne supportent tout simplement pas de manière intrinsèque certains poids. Dans le cas où l’on passe une valeur à la propriété font-weight qui ne peut pas être appliquée à une certaine police, alors elle sera tout simplement ignorée. Les deux valeurs généralement bien supportées sont font-weight : normal ou font-weight : 400 et font-weight : bold ou font-weight : 700."
      },
      {
        "type": "h",
        "text": "La propriété font-style"
      },
      {
        "type": "p",
        "text": "La propriété font-style va nous permettre de gérer l’inclinaison de notre police. On va pouvoir lui passer l’une des valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "normal : valeur par défaut, les caractères seront droits ;",
          "italic : la police va s’afficher en italique ;",
          "oblique : la police va être tordue pour être rendue de façon oblique."
        ]
      },
      {
        "type": "p",
        "text": "Les valeurs italic et oblique produisent souvent un résultat très similaire. Sachez cependant qu’elles ne sont pas strictement équivalentes pour autant. En effet, certaines polices ne supportent pas l’état italique (car elles n’ont pas été conçues pour pouvoir être rendues en italique). Dans ces cas-là, si on passe la valeur italic à la propriété font-style alors celle-ci sera simplement ignorée. La valeur oblique, au contraire, va forcer l’inclinaison de n’importe quelles polices et mêmes de celles qui n’ont pas été conçues pour pouvoir être rendues de façon oblique. Dans ce cas-là, cette valeur va « casser » la police afin de la rendre quand même oblique (ce qui peut amener à un rendu visuel non optimal)."
      },
      {
        "type": "h",
        "text": "La notation raccourcie font"
      },
      {
        "type": "p",
        "text": "Les différentes propriétés de type font- peuvent être combinées en une seule qui représente leur notation raccourcie ou « short hand » en anglais et qui va être tout simplement la propriété font. Nous reparlerons de l’utilisation des propriétés short-hand plus tard dans ce cours plus en détail. Pour le moment, retenez simplement qu’une notation raccourcie ou « short-hand » va se définir par opposition à la version complète ou « long hand » des propriétés. Les notations short-hand vont être un condensées de différentes propriétés et vont donc nous permettre d’écrire notre code CSS plus rapidement en déclarant d’un coup les valeurs relatives à plusieurs propriétés. Cependant, ici, il faudra souvent respecter un ordre précis de déclarations des différentes valeurs relatives aux propriétés longhand agrégées dans la version short-hand afin qu’il n’y ait pas d’ambiguïté sur ce à quoi va correspondre chaque valeur déclarée. Nous allons pouvoir passer les valeurs suivantes à la notation short-hand font (dans l’ordre donné ci-après) : 1. La valeur relative à la propriété font-style (facultatif) ; 2. La valeur relative à la propriété font-variant (facultatif) ; 3. La valeur relative à la propriété font-weight (facultatif) ; 4. La valeur relative à la propriété font-size (obligatoire)/line-height (facultatif) ; 5. La valeur relative à la propriété font-family (obligatoire). La propriété font-variant n’est pas beaucoup utilisée et c’est la raison pour laquelle je n’en ai pas parlé pour le moment. Pour faire simple, elle est elle-même une notation raccourcie des sous propriétés font-variant-caps, font-variant-numeric, font-variant-alternates, font- variant-ligatures et font-variant-east-asian qui permettent d’utiliser des glyphes alternatifs pour les différents caractères d’une police. La propriété line-height permet de définir la taille de l’espace entre les lignes (interligne). Nous étudierons cette propriété en détail plus tard dans cette partie. Notez que pour que font fonctionne correctement, il faudra obligatoirement à minima préciser les valeurs liées aux propriétés font-size et font-family. Les autres valeurs sont facultatives et pourront être omises. Voilà comment nous allons pouvoir utiliser cette propriété raccourcie en pratique : Expliquons rapidement le code ci-dessus. Ma première définition de font liée au sélecteur #p1 est complète : j’ai passé les valeurs relatives à toutes les propriétés décrites ci-dessus et celles-ci vont donc être appliquées à l’élément portant l’id=\"p1\". Notez que les valeurs relatives aux propriétés font-size et line-height doivent être séparées par un slash. Dans mon sélecteur #p2, cependant, j’ai omis certaines valeurs qui sont facultatives et n’ai passé que les valeurs relatives aux propriétés font-style, font-size et font-family. Vous devriez avoir une question par rapport à cette deuxième déclaration : comment savoir à quelle propriété correspond une valeur lorsque celle-ci n’est pas unique à la propriété ? Imaginons ici qu’il y ait écrit normal à la place de italic. Comment savoir si cette valeur normal a été déclarée comme valeur pour ma propriété font-style, font- variant ou font-weight ? Le CSS va en fait lire l’ensemble des valeurs fournies à la notation short hand font et, s’il y a ambiguïté, les valeurs fournies vont être liées à la première propriété qui l’accepte. C’est tout l’intérêt d’avoir défini un ordre des valeurs et de le respecter. Ainsi, dans le cas présent, comme font-style accepte la valeur normal, celle-ci lui sera attribuée. Notez qu’ici ce n’est pas impactant puisque dans tous les cas la valeur normal est la valeur par défaut pour les trois propriétés font-style, font-variant ou font-weight mais ça pourra l’être dans d’autres cas où des propriétés partagent des valeurs en commun qui ne sont pas leurs valeurs par défaut. Notez également qu’il est généralement déconseillé d’utiliser à la fois les notations short- hand et longhand pour définir le comportement des mêmes propriétés car cela peut mener à de nombreux problèmes dans le code. Si pour une raison ou une autre vous devez redéfinir vos propriétés de cette manière, retenez bien que pour toute notation longhand déclarée avant la version short-hand associée sera ignorée même dans le cas où la version short-hand ne définit pas de comportement pour la propriété longhand en question de manière explicite."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* font-size : taille de la police */\nh1 { font-size: 2.5rem; }    /* rem : relatif à la taille de la police racine (html) */\np  { font-size: 1rem; }      /* 1rem = 16px par défaut */\n.small { font-size: 0.875rem; } /* 14px */\n.large { font-size: 1.25rem; }  /* 20px */\n/* Autres unités : px, em, %, vw */\n\n/* font-weight : graisse de la police */\n.leger { font-weight: 300; }   /* Light */\n.normal { font-weight: 400; }  /* Normal / Regular */\n.semi { font-weight: 600; }    /* Semi-bold */\n.gras { font-weight: 700; }    /* Bold */\n.extra { font-weight: 900; }   /* Black */\n\n/* font-style : style de la police */\n.normal { font-style: normal; }\n.italique { font-style: italic; }\n.oblique { font-style: oblique; }\n\n/* font-variant : variantes */\n.small-caps { font-variant: small-caps; } /* LETTRES EN PETITES CAPITALES */\n\n/* line-height : hauteur de ligne (interligne) */\nbody { line-height: 1.6; }     /* Sans unité : multiplicateur (recommandé) */\np { line-height: 1.5; }        /* 1.5 × font-size */\n.serree { line-height: 1.2; }\n.espacee { line-height: 2; }\n\n/* Exemple complet : typographie d'un article */\narticle {\n  font-family: 'Merriweather', Georgia, serif;\n  font-size: 1.1rem;\n  font-weight: 400;\n  line-height: 1.8;\n  color: #333;\n}\narticle h2 {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  line-height: 1.3;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "27-les-propri-t-s-css-li-es-au-texte",
    "title": "Les propriétés CSS liées au texte",
    "blocks": [
      {
        "type": "p",
        "text": "Les propriétés liées au texte ne vont pas nous permettre de modifier la forme des caractères de la police mais plutôt d’ajouter des effets autour de notre texte ou de le formater dans la page d’une manière ou d’une autre. Dans cette nouvelle leçon, nous allons présenter et étudier quelques-unes des propriétés CSS de type text- les plus utiles et les plus intéressantes et notamment :"
      },
      {
        "type": "list",
        "items": [
          "La propriété text-align qui va nous permettre de gérer l’alignement du texte ;",
          "La propriété text-transform qui va nous permettre de gérer la casse du texte (le fait"
        ]
      },
      {
        "type": "p",
        "text": "que le texte soit en majuscules ou en minuscules) ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété text-decoration qui va nous permettre d’ajouter des éléments de"
        ]
      },
      {
        "type": "p",
        "text": "décoration autour du texte comme un trait de soulignement par exemple ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété text-indent qui va nous permettre de définir l’indentation d’un texte ;",
          "La propriété text-shadow qui va nous permettre d’ajouter des ombres autour d’un"
        ]
      },
      {
        "type": "p",
        "text": "texte."
      },
      {
        "type": "h",
        "text": "La propriété text-align"
      },
      {
        "type": "p",
        "text": "La propriété text-align va nous permettre de définir l’alignement d’un texte par rapport à son élément conteneur. Nous allons pouvoir choisir parmi les valeurs d’alignement suivantes :"
      },
      {
        "type": "list",
        "items": [
          "left : valeur par défaut. Le texte sera aligné contre le bord gauche de l’élément qui"
        ]
      },
      {
        "type": "p",
        "text": "le contient ;"
      },
      {
        "type": "list",
        "items": [
          "center : Le texte sera centré dans l’élément qui le contient ;",
          "right : Le texte sera aligné contre le bord droite de l’élément qui le contient ;",
          "justify : Le texte sera justifié (les écarts entre les mots vont être calculés de façon"
        ]
      },
      {
        "type": "p",
        "text": "à ce que chaque ligne de texte occupe la même largeur). Notez bien que la propriété text-align va toujours aligner le texte dans / par rapport à l’élément qui le contient. Ainsi, appliquer cette propriété à un élément de type inline comme un span par exemple n’aurait aucun sens puisque ce type d’élément possède la même taille que son contenu."
      },
      {
        "type": "h",
        "text": "La propriété text-transform"
      },
      {
        "type": "p",
        "text": "La propriété text-transform va nous permettre de modifier la casse d’un texte ou de certaines parties d’un texte, c’est-à-dire de gérer le fait qu’un texte ou qu’une partie de texte s’affiche en majuscules ou en minuscules. Cette propriété peut être utile dans le cas de textes générés automatiquement ou dans les cas où nous n’avons pas accès ou ne pouvons pas modifier le texte dans le code HTML directement. Nous allons pouvoir passer l’une des valeurs suivantes à text-transform :"
      },
      {
        "type": "list",
        "items": [
          "none : Valeur par défaut. Pas de transformation du texte. Utile pour annuler une"
        ]
      },
      {
        "type": "p",
        "text": "transformation transmise par héritage par exemple ;"
      },
      {
        "type": "list",
        "items": [
          "lowercase : Transforme tout le texte d’un élément en minuscules ;",
          "uppercase : Transforme tout le texte d’un élément en majuscules ;",
          "capitalize : Transforme la première lettre de chaque mot en majuscule."
        ]
      },
      {
        "type": "h",
        "text": "La propriété text-decoration"
      },
      {
        "type": "p",
        "text": "La propriété text-decoration va nous permettre d’ajouter des décorations à un texte, comme un trait de soulignement ou de surlignement par exemple. On va pouvoir lui passer jusqu’à trois valeurs qui vont correspondre au type de décoration (valeur obligatoire), à la couleur de la décoration (valeur facultative, couleur actuelle utilisée par défaut) et au style de la décoration (solide par défaut). Concernant le type de décoration, nous allons pouvoir choisir parmi les valeurs :"
      },
      {
        "type": "list",
        "items": [
          "underline : ajoute un trait de soulignement au texte ;",
          "overline : ajoute un trait de surlignement au texte ;",
          "line-through : ajoute un trait qui va barrer le texte ;",
          "underline overline : ajoute un trait de soulignement et un trait de surlignement au"
        ]
      },
      {
        "type": "p",
        "text": "texte. Concernant le style de la décoration, nous allons pouvoir choisir parmi les valeurs :"
      },
      {
        "type": "list",
        "items": [
          "solid : valeur par défaut ; le trait de décoration sera solide ;",
          "double : le trait de décoration sera double ;",
          "dotted : le trait de décoration sera en pointillés ;",
          "dashed : le trait de décoration sera en tirets ;",
          "wavy : le trait de décoration sera courbé."
        ]
      },
      {
        "type": "p",
        "text": "Notez également qu’à l’heure actuelle la définition de la propriété text-decoration est en train d’évoluer puisque de nouvelles sous propriétés CSS nous permettant de gérer un aspect de la décoration à la fois ont été dernièrement proposées. Si cette nouvelle définition est acceptée, alors la propriété text-decoration deviendra la notation raccourcie des propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "text-decoration-line qui permet de définir une décoration autour du texte ;",
          "text-decoration-color qui permet de choisir la couleur de la décoration (noire par"
        ]
      },
      {
        "type": "p",
        "text": "défaut) ;"
      },
      {
        "type": "list",
        "items": [
          "text-decoration-style qui permet de choisir le style de la décoration (solide par"
        ]
      },
      {
        "type": "p",
        "text": "défaut). La propriété text-decoration-line va accepter les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "underline : ajoute un trait de soulignement au texte ;",
          "overline : ajoute un trait de surlignement au texte ;",
          "line-through : ajoute un trait qui va barrer le texte ;",
          "underline overline : ajoute un trait de soulignement et un trait de surlignement au"
        ]
      },
      {
        "type": "p",
        "text": "texte. La propriété text-decoration-style va accepter les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "solid : valeur par défaut ; le trait de décoration sera solide ;",
          "double : le trait de décoration sera double ;",
          "dotted : le trait de décoration sera en pointillés ;",
          "dashed : le trait de décoration sera en tirets ;",
          "wavy : le trait de décoration sera courbé."
        ]
      },
      {
        "type": "p",
        "text": "A noter cependant que pour le moment ces propriétés ne sont pas encore standardisées et ne vont donc pas encore forcément supportées par tous les navigateurs. Elles devraient cependant bientôt le devenir et c’est pourquoi je les mentionne dans ce cours."
      },
      {
        "type": "h",
        "text": "La propriété text-indent"
      },
      {
        "type": "p",
        "text": "La propriété text-indent va nous permettre de préciser l’indentation c’est-à-dire le retrait de la première ligne d’un texte par rapport au bord de l’élément parent. Nous allons ici pouvoir passer une valeur en px, em, %, etc. Les valeurs en % vont être exprimées en fonction de la largeur de l’élément parent. Notez que les valeurs négatives sont acceptées."
      },
      {
        "type": "h",
        "text": "La propriété text-shadow"
      },
      {
        "type": "p",
        "text": "La propriété text-shadow va nous permettre d’ajouter des ombres autour de nos textes. Cette propriété est relativement complexe à maitriser puisqu’elle va pouvoir utiliser jusqu’à 4 valeurs pour définir précisément une ombre et surtout puisqu’on va pouvoir appliquer plusieurs ombres différentes à un même texte grâce à elle. Les 4 valeurs de text-shadow vont correspondre : 1. Au déplacement (ou « projection ») horizontal de l’ombre par rapport au texte. En passant une valeur positive, l’ombre est projeté à droite du texte. En passant une valeur négative, l’ombre est projetée à gauche de celui-ci. Cette valeur doit obligatoirement être renseignée ; 2. Au déplacement vertical de l’ombre par rapport au texte. En passant une valeur positive, l’ombre est projeté sous le texte. En passant une valeur négative, l’ombre est projetée au-dessus de celui-ci. Cette valeur doit obligatoirement être renseignée ; 3. Au rayon de flou de l’ombre. Un flou Gaussien est utilisé ici : plus la valeur est grande, plus l’ombre sera étendue et floue. Cette valeur est facultative ; 4. A la couleur de l’ombre. On va ici pouvoir passer toutes les valeurs de couleurs (que nous étudierons plus tard) disponibles. En plus de cela, nous allons pouvoir définir plusieurs ombres différentes pour un même texte. Pour faire cela, il suffit de séparer les différentes déclarations relatives à chaque ombre par une virgule dans la propriété text-shadow. Comme vous pouvez le voir ci-dessus, il faut faire bien attention avec cette propriété à ne pas rendre le texte illisible pour vos visiteurs ! Pour cela, nous allons pouvoir ajouter de la transparence à nos ombres en utilisant par exemple une notation RGBa pour la couleur. Nous reviendrons sur ces notations dans le chapitre de ce cours dédié à la couleur."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* text-align : alignement du texte */\n.gauche   { text-align: left; }\n.centre   { text-align: center; }\n.droite   { text-align: right; }\n.justifie { text-align: justify; }\n\n/* text-decoration : décoration du texte */\na { text-decoration: none; }          /* Supprime le soulignement */\n.souligne { text-decoration: underline; }\n.barre { text-decoration: line-through; }\n.surline { text-decoration: overline; }\n/* Personnaliser la ligne */\na:hover {\n  text-decoration: underline;\n  text-decoration-color: #3498db;\n  text-decoration-style: dotted;     /* solid, double, dotted, dashed, wavy */\n  text-underline-offset: 4px;\n}\n\n/* text-transform : transformation du texte */\n.majuscules { text-transform: uppercase; }\n.minuscules { text-transform: lowercase; }\n.capitalise { text-transform: capitalize; } /* 1ère lettre en majuscule */\n.normal { text-transform: none; }\n\n/* letter-spacing : espacement entre les lettres */\nh1 { letter-spacing: 3px; }           /* Positif : plus d'espace */\n.compact { letter-spacing: -0.5px; }  /* Négatif : moins d'espace */\n\n/* word-spacing : espacement entre les mots */\np { word-spacing: 2px; }\n\n/* text-indent : retrait de la première ligne */\np { text-indent: 2em; }\n\n/* text-shadow : ombre portée du texte */\n/* text-shadow: décalageX décalageY flou couleur */\nh1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }\n.neon { text-shadow: 0 0 10px #3498db, 0 0 20px #3498db; }\n\n/* white-space : gestion des espaces et retours à la ligne */\n.nowrap { white-space: nowrap; }     /* Pas de retour à la ligne */\n.pre { white-space: pre; }           /* Préserve les espaces et retours */\n\n/* overflow et ellipsis : tronquer le texte */\n.tronque {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; /* Ajoute ... en fin de ligne */\n  width: 200px;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "28-gestion-des-interlignes-et-des-espaces",
    "title": "Gestion des interlignes et des espaces",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons étudier trois propriétés CSS qui vont nous permettre de gérer l’espace entre chaque lettre, entre chaque mot ainsi qu’entre chaque ligne de texte. Ces propriétés sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La propriété line-height ;",
          "La propriété letter-spacing ;",
          "La propriété word-spacing."
        ]
      },
      {
        "type": "h",
        "text": "La propriété line-height"
      },
      {
        "type": "p",
        "text": "La propriété line-height va nous permettre de définir la hauteur de chaque ligne d’un texte et donc de fait l’espace entre les lignes. Cette propriété va pouvoir accepter en valeur un nombre simple, une unité de longueur en px, em etc. ou un pourcentage. Les valeurs nombre simple et pourcentage vont nous permettre de définir la hauteur totale de la ligne par rapport à la taille de la police. Par exemple, indique line-height : 2 ou line- height : 200% signifie que chaque ligne de notre élément aura une hauteur totale égale à deux fois la taille de la police, c’est-à-dire que l’interligne (espace entre deux lignes) sera égal à la hauteur de la police. Ici, je donne un line-height égal à la taille de mon texte pour mon paragraphe p3. Chaque ligne va donc avoir exactement la même hauteur que le texte et il n’y aura pas d’espace entre les lignes. Si on regarde attentivement, cependant, on observe qu’il reste tout de même un espace. Cela est dû à la définition même de la taille de la police. En effet, lorsqu’on définit une taille de police, on définit en fait la hauteur maximale que peut avoir un caractère. Cependant, vous pouvez observer que tous les caractères ne font pas la même hauteur. Certains, comme le « e », le « a » ou le « r » occupent moins d’espace que le « l », le « p » ou que des caractères en majuscules par exemple. Notez que la hauteur réelle de chaque caractère va dépendre de la police utilisée. C’est la raison pour laquelle il reste un espace visible entre les lignes lorsque les caractères ne sont pas des caractères occupant la hauteur maximale de police définie. Pour vous convaincre de cela, vous pouvez regarder le paragraphe p4 pour lequel nous avons défini la même taille de police et la même hauteur de ligne que pour p3 mais qui ne contient que des caractères occupant la taille maximale de police définie : il n’y a plus aucun espace visible entre les lignes dans ce cas."
      },
      {
        "type": "h",
        "text": "La propriété letter-spacing"
      },
      {
        "type": "p",
        "text": "La propriété letter-spacing va nous permettre de définir l’espace entre les différents caractères de notre police. Nous allons passer à cette propriété une valeur de type longueur en px ou en em par exemple. Les valeurs passées vont pouvoir être positives ou négatives. La valeur passée à letter-spacing va venir s’ajouter à l’espace par défaut entre les caractères. Une valeur positive va donc augmenter l’espace entre les caractères tandis qu’une valeur négative va le réduire. Attention toutefois : cette police est dépendante de la police utilisée et certaines valeurs passées vont possiblement ne pas être acceptées par la police et ainsi être modifiées automatiquement, notamment dans le cas de valeurs réduisant l’espace entre les caractères. Notez également qu’en passant une valeur négative plus importante que la taille de votre police le texte s’affichera « à l’envers » c’est-à-dire que les lettres suivantes vont se retrouver avant les lettres précédentes."
      },
      {
        "type": "h",
        "text": "La propriété word-spacing"
      },
      {
        "type": "p",
        "text": "La propriété CSS word-spacing va fonctionner de manière similaire à letter-spacing mais va cette fois-ci nous permettre de définir l’espace entre les différents mots d’un texte. Une nouvelle fois, passer une valeur positive à word-spacing va augmenter l’espace défini par défaut par la police entre deux mots tandis que passer une valeur négative va le réduire. De manière analogue à la propriété letter-spacing, il faudra faire très attention avec l’utilisation de valeurs négatives avec word-spacing car le texte peut très vite devenir illisible si plusieurs mots commencent à se chevaucher."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* line-height : hauteur de ligne = espace vertical entre les lignes */\n/* Sans unité (recommandé) : multiplicateur de font-size */\nbody { line-height: 1.6; }   /* 1.6 × 16px = 25.6px entre les lignes */\n\n/* Avec unité */\nh1 { line-height: 1.2; }     /* Titres : plus serré */\np  { line-height: 1.8; }     /* Corps de texte : aéré */\n.code { line-height: 1.5; }\n\n/* letter-spacing : espacement entre les caractères */\nh2 { letter-spacing: 0.05em; }   /* Valeur em : relative à font-size */\n.titre-majuscule {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;         /* Standard pour les titres en maj. */\n}\n.compact { letter-spacing: -0.02em; } /* Légèrement resserré */\n\n/* word-spacing : espacement entre les mots */\n.lecture { word-spacing: 0.1em; }\n\n/* margin / padding : gestion des espaces autour des éléments */\n/* Marges externes (margin) */\nh2 { margin-top: 2rem; margin-bottom: 1rem; }\np  { margin-bottom: 1rem; }\n\n/* Marges internes (padding) */\n.citation {\n  padding: 1.5rem 2rem;\n  border-left: 4px solid #3498db;\n  background: #f8f9fa;\n  font-style: italic;\n  line-height: 1.8;\n}\n\n/* Éviter la marge collante (margin collapse) */\n/* Deux margins verticaux adjacents fusionnent → la plus grande gagne */\nh2 { margin-bottom: 20px; }\np  { margin-top: 10px; }\n/* → L'espace entre h2 et p = 20px (pas 30px) */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "29-gestion-de-la-couleur-et-de-l-opacit-des",
    "title": "Gestion de la couleur et de l’opacité des textes",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons apprendre à modifier la couleur et l’opacité de nos textes grâce à la propriété color que nous avons déjà rencontré précédemment. Cette propriété est à la fois très simple à utiliser et relativement complexe à parfaitement maitriser car nous allons lui passer des valeurs de couleurs très différentes les unes des autres. La propriété color va en effet pouvoir accepter des valeurs comme :"
      },
      {
        "type": "list",
        "items": [
          "Un nom de couleur (en anglais) ;",
          "Une notation hexadécimale ;",
          "Une notation RGB ou RGBa ;",
          "Une notation HSL ou HSLa."
        ]
      },
      {
        "type": "p",
        "text": "Toutes ces notations vont nous permettre, in fine, d’attribuer une couleur particulière à notre texte. Le but de cette leçon est de comprendre comment chaque type de valeur fonctionne et les avantages et inconvénients de chacun."
      },
      {
        "type": "h",
        "text": "Les valeurs de type « nom de couleur »"
      },
      {
        "type": "p",
        "text": "Les 16 premières couleurs normalisées Il y a des années de cela, les langages de programmation ne disposaient pas de toutes les fonctionnalités d’aujourd’hui tout simplement car les infrastructures étaient beaucoup moins puissantes que de nos jours. Ainsi, au départ, seules 16 couleurs ont été normalisées en CSS. C’était déjà un grand pas en avant pour les utilisateurs : ils n’avaient plus qu’à passer le nom (en anglais) de la couleur normalisée en valeur de la propriété CSS color afin de changer la couleur d’un élément. Ces seize couleurs CSS sont les suivantes. Notez que j’ai déjà renseigné l’équivalent de chaque nom de couleur en notation hexadécimale dans le tableau ci-dessous. Nous reparlerons de ces notations plus tard dans cette leçon."
      },
      {
        "type": "h",
        "text": "Nom de la couleur                Hexadécimal           Couleur"
      },
      {
        "type": "h",
        "text": "Aqua                             #00FFFF"
      },
      {
        "type": "h",
        "text": "Black                            #000000"
      },
      {
        "type": "h",
        "text": "Blue                             #0000FF"
      },
      {
        "type": "h",
        "text": "Fuschia                          #FF00FF"
      },
      {
        "type": "h",
        "text": "Gray                             #808080"
      },
      {
        "type": "h",
        "text": "Green                        #008800"
      },
      {
        "type": "h",
        "text": "Lime                         #00FF00"
      },
      {
        "type": "h",
        "text": "Maroon                       #800000"
      },
      {
        "type": "h",
        "text": "Navy                         #000080"
      },
      {
        "type": "h",
        "text": "Olive                        #808000"
      },
      {
        "type": "h",
        "text": "Purple                       #800080"
      },
      {
        "type": "h",
        "text": "Red                          #FF0000"
      },
      {
        "type": "h",
        "text": "Silver                       #C0C0C0"
      },
      {
        "type": "h",
        "text": "Teal                         #008080"
      },
      {
        "type": "h",
        "text": "White                        #FFFFFF"
      },
      {
        "type": "h",
        "text": "Yellow                       #00FFFF"
      },
      {
        "type": "p",
        "text": "Voyons immédiatement en pratique comment utiliser ces noms de couleurs en CSS avec différents exemples utilisant color en CSS : Dans l’exemple ci-dessus, vous pouvez voir que nous attribuons en CSS une couleur orange à notre titre de niveau 1 avec le code h1{color : orange}. Nous définissons également des couleurs rouge (red) et bleu (blue) pour les textes de nos éléments p1 et p2."
      },
      {
        "type": "h",
        "text": "Les autres couleurs nommées"
      },
      {
        "type": "p",
        "text": "Avec l’évolution des performances et des langages, le support pour de nouvelles couleurs a progressivement été ajouté. Ainsi, aujourd’hui, les navigateurs reconnaissent et supportent l’utilisation de plus de 140 noms de couleurs différents. Nous allons donc pouvoir passer chacune de ces valeurs à la propriété color pour définir une nouvelle couleur pour un texte. Voici la liste de ces couleurs CSS (noms en anglais) ainsi que leur code hexadécimal :"
      },
      {
        "type": "h",
        "text": "Nom de la couleur               Hexadécimal            Couleur"
      },
      {
        "type": "h",
        "text": "AliceBlue                       #F0F8FF"
      },
      {
        "type": "h",
        "text": "AntiqueWhite                    #FAEBD7"
      },
      {
        "type": "h",
        "text": "Aqua                            #00FFFF"
      },
      {
        "type": "h",
        "text": "Aquamarine                      #7FFFD4"
      },
      {
        "type": "h",
        "text": "Azure                           #F0FFFF"
      },
      {
        "type": "h",
        "text": "Beige                           #F5F5DC"
      },
      {
        "type": "h",
        "text": "Bisque                          #FFE4C4"
      },
      {
        "type": "h",
        "text": "Black                           #000000"
      },
      {
        "type": "h",
        "text": "BlanchedAlmond                  #FFEBCD"
      },
      {
        "type": "h",
        "text": "Blue             #0000FF"
      },
      {
        "type": "h",
        "text": "BlueViolet       #8A2BE2"
      },
      {
        "type": "h",
        "text": "Brown            #A52A2A"
      },
      {
        "type": "h",
        "text": "BurlyWood        #DEB887"
      },
      {
        "type": "h",
        "text": "CadetBlue        #5F9EA0"
      },
      {
        "type": "h",
        "text": "Chartreuse       #7FFF00"
      },
      {
        "type": "h",
        "text": "Chocolate        #D2691E"
      },
      {
        "type": "h",
        "text": "Coral            #FF7F50"
      },
      {
        "type": "h",
        "text": "CornflowerBlue   #6495ED"
      },
      {
        "type": "h",
        "text": "Cornsilk         #FFF8DC"
      },
      {
        "type": "h",
        "text": "Crimson          #DC143C"
      },
      {
        "type": "h",
        "text": "Cyan             #00FFFF"
      },
      {
        "type": "h",
        "text": "DarkBlue         #00008B"
      },
      {
        "type": "h",
        "text": "DarkCyan         #008B8B"
      },
      {
        "type": "h",
        "text": "DarkGoldenRod    #B8860B"
      },
      {
        "type": "h",
        "text": "DarkGray         #A9A9A9"
      },
      {
        "type": "h",
        "text": "DarkGrey         #A9A9A9"
      },
      {
        "type": "h",
        "text": "DarkGreen        #006400"
      },
      {
        "type": "h",
        "text": "DarkKhaki        #BDB76B"
      },
      {
        "type": "h",
        "text": "DarkMagenta      #8B008B"
      },
      {
        "type": "h",
        "text": "DarkOliveGreen   #556B2F"
      },
      {
        "type": "h",
        "text": "DarkOrange       #FF8C00"
      },
      {
        "type": "h",
        "text": "DarkOrchid       #9932CC"
      },
      {
        "type": "h",
        "text": "DarkRed          #8B0000"
      },
      {
        "type": "h",
        "text": "DarkSalmon       #E9967A"
      },
      {
        "type": "h",
        "text": "DarkSeaGreen    #8FBC8F"
      },
      {
        "type": "h",
        "text": "DarkSlateBlue   #483D8B"
      },
      {
        "type": "h",
        "text": "DarkSlateGray   #2F4F4F"
      },
      {
        "type": "h",
        "text": "DarkSlateGrey   #2F4F4F"
      },
      {
        "type": "h",
        "text": "DarkTurquoise   #00CED1"
      },
      {
        "type": "h",
        "text": "DarkViolet      #9400D3"
      },
      {
        "type": "h",
        "text": "DeepPink        #FF1493"
      },
      {
        "type": "h",
        "text": "DeepSkyBlue     #00BFFF"
      },
      {
        "type": "h",
        "text": "DimGray         #696969"
      },
      {
        "type": "h",
        "text": "DimGrey         #696969"
      },
      {
        "type": "h",
        "text": "DodgerBlue      #1E90FF"
      },
      {
        "type": "h",
        "text": "FireBrick       #B22222"
      },
      {
        "type": "h",
        "text": "FloralWhite     #FFFAF0"
      },
      {
        "type": "h",
        "text": "ForestGreen     #228B22"
      },
      {
        "type": "h",
        "text": "Fuchsia         #FF00FF"
      },
      {
        "type": "h",
        "text": "Gainsboro       #DCDCDC"
      },
      {
        "type": "h",
        "text": "GhostWhite      #F8F8FF"
      },
      {
        "type": "h",
        "text": "Gold            #FFD700"
      },
      {
        "type": "h",
        "text": "GoldenRod       #DAA520"
      },
      {
        "type": "h",
        "text": "Gray            #808080"
      },
      {
        "type": "h",
        "text": "Grey            #808080"
      },
      {
        "type": "h",
        "text": "Green           #008000"
      },
      {
        "type": "h",
        "text": "GreenYellow     #ADFF2F"
      },
      {
        "type": "h",
        "text": "HoneyDew        #F0FFF0"
      },
      {
        "type": "h",
        "text": "HotPink         #FF69B4"
      },
      {
        "type": "h",
        "text": "IndianRed              #CD5C5C"
      },
      {
        "type": "h",
        "text": "Indigo                 #4B0082"
      },
      {
        "type": "h",
        "text": "Ivory                  #FFFFF0"
      },
      {
        "type": "h",
        "text": "Khaki                  #F0E68C"
      },
      {
        "type": "h",
        "text": "Lavender               #E6E6FA"
      },
      {
        "type": "h",
        "text": "LavenderBlush          #FFF0F5"
      },
      {
        "type": "h",
        "text": "LawnGreen              #7CFC00"
      },
      {
        "type": "h",
        "text": "LemonChiffon           #FFFACD"
      },
      {
        "type": "h",
        "text": "LightBlue              #ADD8E6"
      },
      {
        "type": "h",
        "text": "LightCoral             #F08080"
      },
      {
        "type": "h",
        "text": "LightCyan              #E0FFFF"
      },
      {
        "type": "h",
        "text": "LightGoldenRodYellow   #FAFAD2"
      },
      {
        "type": "h",
        "text": "LightGray              #D3D3D3"
      },
      {
        "type": "h",
        "text": "LightGrey              #D3D3D3"
      },
      {
        "type": "h",
        "text": "LightGreen             #90EE90"
      },
      {
        "type": "h",
        "text": "LightPink              #FFB6C1"
      },
      {
        "type": "h",
        "text": "LightSalmon            #FFA07A"
      },
      {
        "type": "h",
        "text": "LightSeaGreen          #20B2AA"
      },
      {
        "type": "h",
        "text": "LightSkyBlue           #87CEFA"
      },
      {
        "type": "h",
        "text": "LightSlateGray         #778899"
      },
      {
        "type": "h",
        "text": "LightSlateGrey         #778899"
      },
      {
        "type": "h",
        "text": "LightSteelBlue         #B0C4DE"
      },
      {
        "type": "h",
        "text": "LightYellow            #FFFFE0"
      },
      {
        "type": "h",
        "text": "Lime                   #00FF00"
      },
      {
        "type": "h",
        "text": "LimeGreen              #32CD32"
      },
      {
        "type": "h",
        "text": "Linen               #FAF0E6"
      },
      {
        "type": "h",
        "text": "Magenta             #FF00FF"
      },
      {
        "type": "h",
        "text": "Maroon              #800000"
      },
      {
        "type": "h",
        "text": "MediumAquaMarine    #66CDAA"
      },
      {
        "type": "h",
        "text": "MediumBlue          #0000CD"
      },
      {
        "type": "h",
        "text": "MediumOrchid        #BA55D3"
      },
      {
        "type": "h",
        "text": "MediumPurple        #9370DB"
      },
      {
        "type": "h",
        "text": "MediumSeaGreen      #3CB371"
      },
      {
        "type": "h",
        "text": "MediumSlateBlue     #7B68EE>"
      },
      {
        "type": "h",
        "text": "MediumSpringGreen   #00FA9A"
      },
      {
        "type": "h",
        "text": "MediumTurquoise     #48D1CC<"
      },
      {
        "type": "h",
        "text": "MediumVioletRed     #C71585"
      },
      {
        "type": "h",
        "text": "MidnightBlue        #191970"
      },
      {
        "type": "h",
        "text": "MintCream           #F5FFFA"
      },
      {
        "type": "h",
        "text": "MistyRose           #FFE4E1"
      },
      {
        "type": "h",
        "text": "Moccasin            #FFE4B5"
      },
      {
        "type": "h",
        "text": "NavajoWhite         #FFDEAD"
      },
      {
        "type": "h",
        "text": "Navy                #000080"
      },
      {
        "type": "h",
        "text": "OldLace             #FDF5E6"
      },
      {
        "type": "h",
        "text": "Olive               #808000"
      },
      {
        "type": "h",
        "text": "OliveDrab           #6B8E23"
      },
      {
        "type": "h",
        "text": "Orange              #FFA500"
      },
      {
        "type": "h",
        "text": "OrangeRed           #FF4500"
      },
      {
        "type": "h",
        "text": "Orchid              #DA70D6"
      },
      {
        "type": "h",
        "text": "PaleGoldenRod       #EEE8AA<"
      },
      {
        "type": "h",
        "text": "PaleGreen       #98FB98"
      },
      {
        "type": "h",
        "text": "PaleTurquoise   #AFEEEE"
      },
      {
        "type": "h",
        "text": "PaleVioletRed   #DB7093"
      },
      {
        "type": "h",
        "text": "PapayaWhip      #FFEFD5"
      },
      {
        "type": "h",
        "text": "PeachPuff       #FFDAB9"
      },
      {
        "type": "h",
        "text": "Peru            #CD853F"
      },
      {
        "type": "h",
        "text": "Pink            #FFC0CB"
      },
      {
        "type": "h",
        "text": "Plum            #DDA0DD"
      },
      {
        "type": "h",
        "text": "PowderBlue      #B0E0E6"
      },
      {
        "type": "h",
        "text": "Purple          #800080"
      },
      {
        "type": "h",
        "text": "RebeccaPurple   #663399"
      },
      {
        "type": "h",
        "text": "Red             #FF0000"
      },
      {
        "type": "h",
        "text": "RosyBrown       #BC8F8F"
      },
      {
        "type": "h",
        "text": "RoyalBlue       #4169E1"
      },
      {
        "type": "h",
        "text": "SaddleBrown     #8B4513"
      },
      {
        "type": "h",
        "text": "Salmon          #FA8072"
      },
      {
        "type": "h",
        "text": "SandyBrown      #F4A460"
      },
      {
        "type": "h",
        "text": "SeaGreen        #2E8B57"
      },
      {
        "type": "h",
        "text": "SeaShell        #FFF5EE"
      },
      {
        "type": "h",
        "text": "Sienna          #A0522D"
      },
      {
        "type": "h",
        "text": "Silver          #C0C0C0"
      },
      {
        "type": "h",
        "text": "SkyBlue         #87CEEB"
      },
      {
        "type": "h",
        "text": "SlateBlue       #6A5ACD"
      },
      {
        "type": "h",
        "text": "SlateGray       #708090"
      },
      {
        "type": "h",
        "text": "SlateGrey       #708090"
      },
      {
        "type": "h",
        "text": "Snow                            #FFFAFA"
      },
      {
        "type": "h",
        "text": "SpringGreen                     #00FF7F"
      },
      {
        "type": "h",
        "text": "SteelBlue                       #4682B4"
      },
      {
        "type": "h",
        "text": "Tan                             #D2B48C"
      },
      {
        "type": "h",
        "text": "Teal                            #008080"
      },
      {
        "type": "h",
        "text": "Thistle                         #D8BFD8"
      },
      {
        "type": "h",
        "text": "Tomato                          #FF6347"
      },
      {
        "type": "h",
        "text": "Turquoise                       #40E0D0"
      },
      {
        "type": "h",
        "text": "Violet                          #EE82EE"
      },
      {
        "type": "h",
        "text": "Wheat                           #F5DEB3"
      },
      {
        "type": "h",
        "text": "White                           #FFFFFF"
      },
      {
        "type": "h",
        "text": "WhiteSmoke                      #F5F5F5"
      },
      {
        "type": "h",
        "text": "Yellow                          #FFFF00"
      },
      {
        "type": "h",
        "text": "YellowGreen                     #9ACD32"
      },
      {
        "type": "p",
        "text": "Fait intéressant ici, vous pouvez noter que :"
      },
      {
        "type": "list",
        "items": [
          "Fuchsia possède le même code couleur que Magenta ;",
          "Aqua possède le même code couleur que Cyan."
        ]
      },
      {
        "type": "p",
        "text": "Utilisons immédiatement ces noms de couleurs CSS avec la propriété color à travers de nouveaux exemples : Avantages et limitations des valeurs de type « nom de couleur » L’utilisation des valeurs de type « nom de couleur » avec la propriété CSS color est très pratique puisqu’il suffit d’indiquer le nom de la couleur souhaitée. Cependant, ce type de valeurs possède une limitation majeure : nous sommes limités en termes de couleurs à ces quelques 140 noms. Or, parfois, nous voudrons utiliser une couleur ou une variation de couleur différente de ces 140 disponibles pour définir une identité visuelle précise. Dans ces cas-là, nous utiliserons alors plutôt l’un des autres types de notation, que ce soit des notations RGB, HEX, ou HSL. En effet, chacun de ces nouveaux types de valeurs va nous permettre de créer et d’utiliser jusqu’à 16 millions de variations de couleurs afin de trouver la couleur exacte voulue en CSS. Ils vont tous reposer sur une logique similaire de mélange des couleurs rouge, vert et bleu."
      },
      {
        "type": "h",
        "text": "Les notations de type RGB"
      },
      {
        "type": "p",
        "text": "Commençons déjà par expliquer comment fonctionnent les valeurs de type RGB et comment les utiliser avec color en CSS. Avant tout, vous devez savoir que les lettres « RGB » sont les abréviations de « Red Green Blue » soit « Rouge Vert Bleu » en français. Effectivement, pour créer une couleur RGB, nous allons devoir préciser trois niveaux d’intensité de Rouge, de Vert, et de Bleu qui vont ensuite être mélangés pour créer la couleur finale. Chaque niveau d’intensité qu’on va renseigner va être compris entre 0 (intensité nulle ou absence de la couleur en question) et 255 (intensité maximale ou couleur pure). En précisant une intensité de rouge de 0, par exemple, on signifie qu’on ne souhaite pas utiliser de rouge dans notre couleur finale. En précisant une intensité de 255 de rouge, en revanche, on indique qu’on souhaite utiliser beaucoup de rouge pour créer notre couleur finale. Vous vous rappelez à l’école quand vous mélangiez différentes couleurs en peinture entre elles pour en créer une nouvelle ? Cela fonctionne également de la même manière ! Pour rappel, je vous donne une image avec les couleurs obtenues lorsqu’on mélange en quantité équivalente nos trois couleurs de base. Cela vous aidera pour comprendre la suite. Illustrons immédiatement avec quelques exemples le fonctionnement des notations RGB en CSS. Regardons ces exemples de plus près, en commençant déjà par nous intéresser à la syntaxe des notations RGB en CSS. Comme vous pouvez le voir, lorsqu’on renseigne une valeur de type RGB en valeur de la propriété CSS color, il faut le déclarer en écrivant RGB(). Ensuite, vous pouvez observer dans chaque cas 3 chiffres séparés par des virgules à l’intérieur des parenthèses. Ces trois chiffres correspondent respectivement aux niveaux d’intensité de Rouge, de Vert et de Bleu qui seront utilisés pour créer notre couleur finale. A ce niveau, vous pouvez noter que plus un niveau d’intensité va de rapprocher de 0, plus cela va correspondre à une couleur foncée. A l’inverse, plus un niveau d’intensité va se rapprocher de 255, plus la couleur va être claire. Pour retenir cela, retenez que color : RGB(0, 0, 0) correspond à du noir tandis que color : RGB(255, 255, 255) correspond à du blanc en CSS. Intéressons-nous maintenant de plus près aux différents cas ci-dessus. On commence avec le code CSS h1{color : RGB(255, 180, 0);}. Vous remarquez que ce code me donne une variation d’orange en résultat. Essayons de déterminer pourquoi. Pour créer ce orange, j’ai précisé une intensité maximale de rouge (255) que j’ai mélangé avec une intensité forte de vert (180) et une intensité nulle de bleu (0). Vous devriez normalement savoir que lorsqu’on mélange du rouge et du vert en quantité égale, on obtient du jaune. Ici, nous avons mélangé le maximum de rouge avec beaucoup de vert (mais en mettant moins de vert que de rouge). Notre couleur finale va donc se trouver entre du jaune et du rouge… C’est-à-dire de l’orange ! Pour nos paragraphes, nous précisons la même intensité de rouge, de vert et de bleu et nos trois intensités sont relativement basses. Je vous ai dit plus haut que RGB(0, 0, 0) donnait du noir tandis que RGB(255, 255, 255) donnait du blanc. Nous allons donc ici obtenir une sorte de gris foncé. Essayez de comprendre par vous-même les couleurs obtenues pour les textes contenus dans nos éléments strong et em, ça vous fera un bon exercice. Bon à savoir : Vous vous rappelez lorsque je vous ai dit que le type de valeurs RGB permettait de créer plus de 16 millions de couleurs en CSS ? Comprenez-vous maintenant d’où vient ce chiffre ? Explication : nous pouvons choisir parmi 256 niveaux d’intensité de rouge, vert et bleu pour créer notre couleur finale. Oui, j’ai bien dit 256 et pas 255 car le 0 compte comme un niveau d’intensité : l’intensité nulle. Ainsi, on va pouvoir créer 256 * 256 * 256 = 16 777 216 couleurs différentes en utilisant les notations RGB avec color en CSS ! Les valeurs hexadécimales vont fonctionner sur le même principe."
      },
      {
        "type": "h",
        "text": "Les valeurs de type hexadécimales"
      },
      {
        "type": "p",
        "text": "Les valeurs de type hexadécimale vont reposer sur le même principe que les valeurs de type RGB : nous allons à nouveau pouvoir préciser trois niveaux d’intensité de rouge, de vert et de bleu pour créer une couleur personnalisée. La seule différence entre ces deux types de notation va être la façon dont on va compter : le mot « hexadécimal » signifie « qui fonctionne en base 16 ». Cela veut dire que le système hexadécimal utilise 16 symboles différents pour compter et représenter les chiffres. Dans la vie de tous les jours, nous utilisons le système décimal : nous comptons en base 10. Cela signifie que nous utilisons 10 symboles pour compter : ce sont le 0, le 1, le 2, 3, 4, 5, 6, 7, 8, et le 9. Le système hexadécimal, comme je vous l’ai dit, va utiliser non pas 10 mais 16 symboles pour compter. Ces symboles vont être : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E et F. Comme vous pouvez le remarquer, nous comptons de la même manière en hexadécimal qu’en décimal jusqu’à 9 puis nous utilisons les lettres A B C D E F qui vont être l’équivalent des unités « 10 », « 11, », « 12 », « 13 », « 14 » et « 15 » en système décimal. Comment représente-t-on le 16 en hexadécimal me direz-vous ? Nous allons utiliser le même principe qu’avec le système décimal, excepté que cette fois-ci nous utilisons des seizaines et non pas des dizaines. Ainsi, pour représenter le « 16 » en hexadécimal, nous utiliserons le symbole « 10 » (comprendre 1 seizaine + 0 unité). Regardez plutôt le tableau ci-dessous pour mieux comprendre :"
      },
      {
        "type": "h",
        "text": "Décimal                                        Équivalent hexadécimal"
      },
      {
        "type": "p",
        "text": "0 (ou 00) 0 (ou 00) 1 (ou 01) 1 (ou 01) 2 (ou 02) 2 (ou 02) 9 (ou 09) 9 (ou 09) 10 A (ou 0A) 11 B (ou 0B)"
      },
      {
        "type": "h",
        "text": "16                                             10"
      },
      {
        "type": "h",
        "text": "17                                             11"
      },
      {
        "type": "h",
        "text": "25                                             19"
      },
      {
        "type": "h",
        "text": "26                                             1A"
      },
      {
        "type": "h",
        "text": "32                                             20"
      },
      {
        "type": "p",
        "text": "Au final, le système hexadécimal n’est qu’une façon différente de compter en utilisant 16 unités de base et non pas 10 comme on en a l’habitude. Cela peut désorienter au premier abord mais c’est en fait très simple. Faites l’effort de comprendre cela pour bien comprendre l’utilisation des valeurs hexadécimales avec les couleurs en CSS ! Nous allons en effet pouvoir utiliser les notations hexadécimales pour créer une couleur avec la propriété CSS color. Les valeurs hexadécimales sont même les plus utilisées en CSS pour créer des couleurs ! Nous allons ici utiliser exactement le même principe qu’avec les valeurs RGB en précisant trois intensités de Rouge, Vert et Bleu pour créer une couleur. Là encore, chacune des trois intensités des couleurs de base va pouvoir être comprise entre 0 et 255 ou plus exactement entre 00 et FF en notation hexadécimale (FF en hexadécimal est équivalent à 255 en décimal). Pour créer une couleur en utilisant les notations hexadécimales en CSS, nous allons donc devoir préciser trois intensités de Rouge, Vert et de Bleu entre 00 et FF à la suite. De plus, nous devrons faire précéder cette notation par un dièse (symbole #). Prenons immédiatement quelques exemples pour illustrer cela : On applique une color : #FF8800 à notre titre h1 en CSS. On utilise ici une intensité maximale de rouge (FF = 255 en décimal), moyenne de vert (88 = 136 en décimal) et minimale (00) de bleu pour créer notre couleur finale. Comme on mélange beaucoup de rouge avec un peu de vert, on obtient naturellement de l’orange. Notez ici quelque chose d’intéressant : lorsqu’on souhaite utiliser deux fois la même unité pour préciser une intensité (par exemple « 88 », « BB » ou « EE », on peut utiliser une notation raccourcie en se contentant de ne préciser l’unité qu’une seule fois. Ici, vous pouvez remarquer qu’il est strictement équivalent d’écrire color : #FF8800 et color : #F80. Notez par ailleurs qu’il est strictement équivalent d’utiliser des majuscules ou des minuscules pour les lettres des valeurs hexadécimales. Les notations de type HSL « HSL » est l’abréviation de « Hue-Saturation-Lightning », c’est-à-dire « teinte-saturation- luminosité » en français. Pour créer une couleur en utilisant les notations HSL, nous allons devoir renseigner trois valeurs :"
      },
      {
        "type": "list",
        "items": [
          "La teinte. On va devoir ici renseigner un nombre entre 0 et 360 qui représente un"
        ]
      },
      {
        "type": "p",
        "text": "angle du cercle chromatique (c’est-à-dire l’arc en ciel représenté dans un cercle). Ici, vous pouvez retenir que la couleur rouge correspond à un angle de 0 (degré) ou de 360 (degrés), tandis que le vert va se situer à 120 degrés et le bleu à 240 degrés. Nous allons pouvoir préciser des valeurs décimales ici pour choisir précisément une couleur ;"
      },
      {
        "type": "list",
        "items": [
          "La saturation. Celle-ci va être représentée sous forme de pourcentage. 100%"
        ]
      },
      {
        "type": "p",
        "text": "correspond à une saturation maximale tandis que 0% correspond à une saturation minimale ;"
      },
      {
        "type": "list",
        "items": [
          "La luminosité. Celle-ci va également être représentée par un pourcentage. 100%"
        ]
      },
      {
        "type": "p",
        "text": "de luminosité correspond à du blanc tandis que 0% correspond à du noir. Vous pouvez vous aider des repères suivants fournis par le W3C pour bien comprendre comment fonctionnent les couleurs HSL. Ici, le pourcentage de saturation est indiqué sur l’axe horizontal tandis que le pourcentage de luminosité est indiqué sur l’axe vertical :"
      },
      {
        "type": "h",
        "text": "L’opacité des éléments et des textes en CSS"
      },
      {
        "type": "p",
        "text": "Jusqu’à présent, nous n’avons pas parlé d’opacité des couleurs en CSS. Nos couleurs étaient donc par défaut complètement opaques. Le CSS nous permet cependant de préciser un niveau d’opacité (ou de transparence, comme vous préférez) pour nos différents textes ou pour nos éléments de différentes façons."
      },
      {
        "type": "h",
        "text": "Gérer l’opacité des éléments avec la propriété opacity"
      },
      {
        "type": "p",
        "text": "Tout d’abord, on va pouvoir rendre un élément HTML plus ou moins transparent grâce à la propriété CSS opacity. Cette propriété va accepter une valeur comprise entre 0 et 1 et qui va déterminer le niveau d’opacité d’un élément : la valeur 0 va rendre l’élément totalement transparent tandis que la valeur 1 (valeur par défaut) le rend totalement opaque. Ici, j’attire cependant votre attention sur un point important : la propriété opacity ne va pas gérer la transparence d’un texte mais bien définir le niveau d’opacité d’un élément en soi. Ainsi, si l’élément possède une couleur de fond ou des bordures, celles-ci vont également être impactées par opacity et vont donc possiblement être semi transparentes. De même, en appliquant cette propriété à un élément conteneur div, nous allons rendre le div en soi et tous les éléments qu’il contient semi-transparents (sauf si une règle contraire est précisée pour chaque élément du div bien évidemment). Ce comportement va parfois être le comportement voulu mais ce n’est pas celui attendu dans le cas où l’on souhaite simplement gérer l’opacité des textes (et uniquement des textes) de nos éléments. Pour faire cela, nous allons plutôt devoir utiliser des variantes des notations RGB et HSL : les notations RGBa et HSLa."
      },
      {
        "type": "h",
        "text": "Gérer l’opacité des textes avec les notations RGBa ou HSLa"
      },
      {
        "type": "p",
        "text": "Les notations RGBa et HSLa vont accepter une valeur de plus qui va correspondre au niveau d’opacité de la couleur (le « a » est l’abréviation de « alpha channel »). Nous allons ici à nouveau devoir préciser un chiffre compris entre 0 et 1 et indiquant le niveau d’opacité de nos textes (0 = texte transparent / 1 = texte opaque). Comme vous pouvez le voir, cette fois-ci seul le niveau d’opacité de nos textes change. Notez que les notations hexadécimales supportent également la notion de transparence. Pour indiquer un niveau d’opacité, nous allons devoir ici préciser un quatrième jeu de caractères compris entre 00 (couleur totalement transparente) et FF (couleur totalement opaque). Cependant, je vous déconseille d’utiliser les notations hexadécimales de cette manière pour le moment car la gestion de la transparence pour ce type de valeur n’est pas encore une recommandation officielle et donc le support par les différents navigateurs n’est pas forcément assuré. Utiliser plutôt les notations RGBa ou HSLa si vous souhaitez définir des couleurs avec un niveau de transparence."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* === Formats de couleur en CSS === */\n\n/* Nom de couleur (limité mais lisible) */\np { color: red; }\np { color: blue; }\np { color: transparent; }\n\n/* Hexadécimal : #RRGGBB ou #RGB (abrégé) */\nh1 { color: #e74c3c; }       /* Rouge */\nh2 { color: #3498db; }       /* Bleu */\n.texte { color: #2c3e50; }   /* Gris foncé */\n.gris { color: #999; }       /* = #999999 (abrégé) */\n\n/* RGB */\np { color: rgb(46, 204, 113); }           /* Vert */\np { color: rgb(52, 73, 94); }             /* Gris foncé */\n\n/* RGBA : RGB + Alpha (opacité, 0=transparent, 1=opaque) */\n.overlay { color: rgba(0, 0, 0, 0.5); }   /* Noir à 50% */\n.fond { background-color: rgba(255, 255, 255, 0.8); } /* Blanc à 80% */\n\n/* HSL (Teinte, Saturation, Luminosité) */\n.primaire { color: hsl(204, 70%, 53%); }  /* Bleu */\n.succes   { color: hsl(145, 63%, 49%); }  /* Vert */\n.danger   { color: hsl(  4, 90%, 58%); }  /* Rouge */\n\n/* HSLA */\n.semi { color: hsla(204, 70%, 53%, 0.7); }\n\n/* Couleur courante et héritage */\n.parent { color: #3498db; }\n.enfant { border-color: currentColor; } /* Prend la couleur du texte courant */\n\n/* Opacité globale de l'élément (affecte tout : texte, fond, bordure, enfants) */\n.degrade-opacite { opacity: 0.7; }   /* 0 = invisible, 1 = opaque */\n\n/* Variables CSS pour les couleurs */\n:root {\n  --couleur-primaire: #3498db;\n  --couleur-texte: #2c3e50;\n  --couleur-fond: #f9f9f9;\n}\nbody { color: var(--couleur-texte); background: var(--couleur-fond); }\na { color: var(--couleur-primaire); }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "30-le-mod-le-des-boites",
    "title": "Le modèle des boites",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons présenter le fameux « modèle des boites » CSS. Comprendre le concept de « boites » va être essentiel construire des designs de pages efficaces puisque cela va nous permettre d’appréhender la façon dont vont être calculées les dimensions de chaque élément."
      },
      {
        "type": "h",
        "text": "Le concept de « boites » et le modèle des boites"
      },
      {
        "type": "p",
        "text": "L’idée centrale du modèle des boites est que tout élément HTML peut être représenté par un empilement de différentes boites rectangulaires :"
      },
      {
        "type": "list",
        "items": [
          "La première boite, centrale, va être composée du contenu de l’élément en soi ;",
          "La deuxième boite va être composée de la première boite ainsi que des marges"
        ]
      },
      {
        "type": "p",
        "text": "internes de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "La troisième boîte va être composée de la deuxième boite et des bordures de"
        ]
      },
      {
        "type": "p",
        "text": "l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "La quatrième boite va être composée de la troisième boite et des marges externes"
        ]
      },
      {
        "type": "p",
        "text": "de l’élément. Voici la représentation d’un élément selon le modèle des boites :"
      },
      {
        "type": "h",
        "text": "Les propriétés CSS liées aux différentes boites"
      },
      {
        "type": "p",
        "text": "Le CSS va déjà nous fournir différentes propriétés qui vont nous permettre de spécifier la taille des différents éléments composants les différentes boites :"
      },
      {
        "type": "list",
        "items": [
          "Les propriétés width et height vont nous permettre de définir la largeur et la"
        ]
      },
      {
        "type": "p",
        "text": "hauteur de la boite « contenu » ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété padding va nous permettre de définir la taille des marges internes ;",
          "La propriété border va nous permettre de définir des bordures pour notre élément"
        ]
      },
      {
        "type": "list",
        "items": [
          "La propriété margin va nous permettre de définir la taille des marges externes."
        ]
      },
      {
        "type": "p",
        "text": "Nous allons dans cette partie commencer avec l’étude de ces différentes propriétés qui sont fondamentales. Nous parlerons également de la propriété box-sizing qui va nous permettre de changer la façon dont la largeur et la hauteur d’un élément vont être calculées et donc de modifier le modèle des boites par défaut."
      },
      {
        "type": "h",
        "text": "Le modèle des boites et le positionnement"
      },
      {
        "type": "p",
        "text": "Comprendre comment est calculée la taille de chaque élément et de quoi chaque élément est composé est essentiel pour créer des mises en page efficaces. Pour choisir le type d’affichage et de positionnement des éléments HTML, le CSS va nous fournir des propriétés très puissantes qui vont nous permettre de modifier le flux normal de la page, c’est-à-dire de modifier l’ordre d’affichage des éléments ou la place réservée par défaut à chacun d’entre eux. Ici, nous allons nous intéresser aux propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La propriété display qui va nous permettre de définir un type d’affichage pour un"
        ]
      },
      {
        "type": "p",
        "text": "élément ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété position qui va nous permettre de positionner nos éléments de"
        ]
      },
      {
        "type": "p",
        "text": "différentes façons dans une page ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété float qui va nous permettre de faire « flotter » des éléments HTML"
        ]
      },
      {
        "type": "p",
        "text": "dans la page."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* LE MODÈLE DE BOITE (Box Model)\n   Chaque élément HTML est une boite rectangulaire composée de :\n   \n   ┌─────────────────────────────────┐\n   │           MARGIN                │  ← Espace extérieur (transparent)\n   │   ┌──────────────────────┐      │\n   │   │       BORDER         │      │  ← Bordure\n   │   │  ┌───────────────┐   │      │\n   │   │  │    PADDING    │   │      │  ← Espace intérieur\n   │   │  │  ┌─────────┐  │   │      │\n   │   │  │  │ CONTENT │  │   │      │  ← Contenu (texte, image...)\n   │   │  │  └─────────┘  │   │      │\n   │   │  └───────────────┘   │      │\n   │   └──────────────────────┘      │\n   └─────────────────────────────────┘\n*/\n\n.boite {\n  /* CONTENU */\n  width: 300px;\n  height: 150px;\n\n  /* PADDING (espace intérieur) */\n  padding: 20px;           /* = padding-top/right/bottom/left: 20px */\n\n  /* BORDER */\n  border: 3px solid #3498db;\n\n  /* MARGIN (espace extérieur) */\n  margin: 30px auto;       /* 30px en haut/bas, auto gauche/droite = centrer */\n\n  background-color: #ecf0f1;\n}\n\n/* Par défaut : width/height = taille du CONTENU seulement\n   Taille totale visible = content + padding + border */\n\n/* Avec border-box : width/height inclut padding ET border */\n.boite {\n  box-sizing: border-box;\n  width: 300px; /* Taille totale = 300px (padding et border inclus) */\n}\n\n/* Appliquer border-box à tous les éléments (bonne pratique universelle) */\n*, *::before, *::after {\n  box-sizing: border-box;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "32-gestion-des-marges-internes-padding-en-c",
    "title": "Gestion des marges internes (« padding ») en CSS",
    "blocks": [
      {
        "type": "h",
        "text": "CSS"
      },
      {
        "type": "p",
        "text": "En CSS, nous allons devoir distinguer deux types de marges : les marges intérieures (“padding”) et les marges extérieures (“margin”). Les marges intérieures se trouvent entre le contenu de l’élément et sa bordure. Ainsi, définir une marge intérieure importante va éloigner la bordure de l’élément de son contenu. Si on définit une couleur de fond pour notre élément, celle-ci s’applique également dans l’espace correspondant aux marges intérieures."
      },
      {
        "type": "h",
        "text": "La propriété CSS padding"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir ajouter des marges internes à un élément grâce à la propriété CSS padding. Notez déjà que la propriété padding est la version raccourcie des propriétés padding-top, padding-left, padding-bottom et padding-right qui vont servir à définir les marges internes de chaque côté d’un élément. Ces propriétés vont pouvoir accepter deux types de valeurs :"
      },
      {
        "type": "list",
        "items": [
          "Des valeurs de type longueur, généralement en px ou en em ;",
          "Des valeurs de type pourcentage. Dans ce cas, le % indiqué est calculé par rapport"
        ]
      },
      {
        "type": "p",
        "text": "à la taille de l’élément parent. Notez qu’il n’est pas possible de passer des valeurs de padding négatives. Ajouter une même marge interne de chaque côté d’un élément Pour définir une même marge interne de chaque côté d’un élément, il suffit de passer la valeur de la marge intérieure que l’on souhaite appliquer à l’élément à la propriété padding en CSS. Par exemple, pour appliquer une marge intérieure de 25px de chaque côté d’un élément, on écrira en CSS padding: 25px. Pour que la marge intérieure soit égale à 10% de la taille de l’élément parent de notre élément, on écrira padding: 10% tout simplement. Pour bien constater l’effet de la propriété padding, je vous conseille d’ajouter une couleur de fond ou une bordure aux éléments pour les exemples suivants. Notez qu’on va tout aussi bien pouvoir utiliser les propriétés padding-top, padding- left, padding-bottom et padding-right et leur passer la même valeur pour arriver au même résultat. C’est juste plus long à écrire ! Définir des marges internes différentes de chaque côté d’un élément Nous allons également pouvoir appliquer des marges intérieures de taille différentes de chaque côté d’un élément. Pour cela, nous avons deux façons de faire : soit en passant plusieurs valeurs à la propriété padding, soit en utilisant les propriétés padding-top, padding-left, padding- bottom et padding-right. On va en effet pouvoir passer entre 1 et 4 valeurs à la propriété raccourcie padding :"
      },
      {
        "type": "list",
        "items": [
          "En passant une valeur à padding, la valeur passée définira le comportement des 4"
        ]
      },
      {
        "type": "p",
        "text": "marges intérieures de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "En passant deux valeurs à padding, la première valeur passée définira le"
        ]
      },
      {
        "type": "p",
        "text": "comportement des marges intérieures supérieure et inférieure de l’élément tandis que la seconde valeur définira le comportement des marges intérieures gauche et droite de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "En passant trois valeurs à padding, la première valeur passée définira le"
        ]
      },
      {
        "type": "p",
        "text": "comportement de la marge interne supérieure, la deuxième définira le comportement des marges intérieures gauche et droite tandis que la troisième définira le comportement de la marge interne basse ;"
      },
      {
        "type": "list",
        "items": [
          "En passant quatre valeurs à padding, la première valeur passée définira le"
        ]
      },
      {
        "type": "p",
        "text": "comportement de la marge interne supérieure, la deuxième définira le comportement de la marge interne droite, la troisième celui de la marge interne basse et la quatrième celui de la marge interne gauche. Si on choisit d’utiliser les propriétés padding-top, padding-left, padding-bottom et padding- right, il suffit de suivre le nom pour comprendre à quelle marge interne est liée chaque propriété (top = haute, left = gauche, bottom = basse, right = droite)."
      },
      {
        "type": "h",
        "text": "L’effet du padding sur les éléments environnants"
      },
      {
        "type": "p",
        "text": "L’ajout de marges internes ou padding va augmenter la taille totale de l’élément. En effet, la valeur donnée au padding va venir s’ajouter à celles des propriétés width et height par défaut. Regardez plutôt le code ci-dessous pour vous en convaincre : Ici, on voit clairement que le padding a un impact sur les dimensions totales des éléments, et ceci qu’ils soient de type block ou inline. Cependant, l’impact sur les éléments environnants ne va pas être le même selon le type d’élément auquel on applique un padding et selon le padding appliqué. Ici, il y a notamment un cas à noter : celui des marges internes haute et basse d’un élément de type inline. Comme vous pouvez le voir ci-dessus, les marges internes haute et basse sont bien appliquées à mon élément span s1 (on le voit grâce à la couleur en fond de mon élément). Cependant, le navigateur ne va pas en tenir compte pour l’affichage et le positionnement des autres éléments. C’est la raison pour laquelle notre élément span chevauche le texte des lignes précédente et suivante du paragraphe. Notez par ailleurs ici les différentes « couches » de texte : la ligne de texte précédent celle du span va se trouver en dessous de lui tandis que la suivante va être au-dessus (on voit que la couleur de fond du span cache le texte précédent mais est sous le texte de la ligne suivante). Encore une fois, notez que le padding est bien appliqué de chaque côté pour chaque type d’éléments, cependant les padding haut et bas n’auront pas d’impact sur le positionnement d’un élément inline ni sur celui des éléments autour de lui."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* PADDING : espace entre le contenu et la bordure */\n\n/* Notation raccourcie */\n.boite { padding: 20px; }              /* 4 côtés = 20px */\n.boite { padding: 10px 20px; }         /* haut/bas=10px | gauche/droite=20px */\n.boite { padding: 10px 20px 15px; }    /* haut=10px | gauche/droite=20px | bas=15px */\n.boite { padding: 10px 20px 15px 5px; }/* haut droite bas gauche */\n\n/* Propriétés individuelles */\n.boite {\n  padding-top: 20px;\n  padding-right: 30px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n\n/* Valeurs en différentes unités */\n.section { padding: 60px 40px; }       /* px (pixels) */\n.article { padding: 2rem 1.5rem; }     /* rem (relatif à html) */\n.responsive { padding: 5%; }           /* % (relatif au parent) */\n\n/* Exemples courants */\n/* Bouton */\n.btn {\n  padding: 12px 24px;\n  background: #3498db;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n/* Carte */\n.carte {\n  padding: 24px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n/* Section hero */\n.hero {\n  padding: 80px 40px;\n  text-align: center;\n}\n\n/* Navigation */\n.nav-item a {\n  padding: 16px 20px;\n  display: block; /* Nécessaire pour que padding fonctionne sur les inline */\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "33-gestion-des-bordures-en-css",
    "title": "Gestion des bordures en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons pouvoir définir des bordures de largeurs, de styles ou de couleurs différents autour de nos éléments HTML en CSS. L’espace pris par la bordure va se trouver entre la marge intérieure et la marge extérieure d’un élément HTML. Nous pouvons définir les bordures d’un élément de différentes manières en CSS : soit en utilisant les trois propriétés border-width, border-style et border-color, soit un utilisant directement la notation raccourcie border. Nous allons également pouvoir créer des bordures arrondies à l’aide de la propriété border-radius que nous étudierons plus tard dans ce cours car elle est relativement complexe à comprendre et à maitriser."
      },
      {
        "type": "h",
        "text": "Les caractéristiques des bordures en CSS"
      },
      {
        "type": "p",
        "text": "Les bordures vont être définies par trois caractéristiques en CSS : une épaisseur (ou largeur), un style et une couleur. Nous allons pouvoir définir ces différentes caractéristiques d’un coup au sein de la propriété raccourcie border ou les définir une à une avec chacune des propriétés de type border-. Plus précisément :"
      },
      {
        "type": "list",
        "items": [
          "La propriété border-width va nous permettre de définir la largeur (ou « l’épaisseur)"
        ]
      },
      {
        "type": "p",
        "text": "d’une bordure ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété border-style va nous permettre de définir le style d’une bordure ;",
          "La propriété border-color va nous permettre de définir la couleur d’une bordure."
        ]
      },
      {
        "type": "h",
        "text": "Définir la largeur ou l’épaisseur d’une bordure"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir utiliser différents types de valeurs pour définir la largeur d’une bordure :"
      },
      {
        "type": "list",
        "items": [
          "Une valeur de type « mot clef » à choisir parmi thin (bordure"
        ]
      },
      {
        "type": "p",
        "text": "fine), medium (bordure moyenne) et thick (bordure épaisse) ;"
      },
      {
        "type": "list",
        "items": [
          "Une valeur de type « longueur » en px ou en em par exemple."
        ]
      },
      {
        "type": "p",
        "text": "Généralement, nous utiliserons des unités en px pour définir la largeur de nos bordures."
      },
      {
        "type": "h",
        "text": "Choisir le style d’une bordure"
      },
      {
        "type": "p",
        "text": "Le « style » d’une bordure correspond à son aspect : une bordure peut prendre la forme d’un simple trait, d’un trait double, ou être constituée de pointillés, avoir un effet 3D, etc. Pour définir le style d’une bordure, nous allons devoir choisir parmi les mots clefs suivants : Valeur Description solid Bordure solide simple (un trait) double Bordure solide double dotted Bordure en pointillés dashed Bordure constituée de tirets groove Bordure incrustée avec effet 3D. L’effet produit est l’inverse de ridge ridge Bordure en relief avec effet 3D. L’effet produit est l’inverse de groove La bordure donne l’effet que la boite représentant l’élément est enfoncée inset dans la page. L’effet produit est l’inverse de outset La bordure donne l’effet que la boite représentant l’élément est en relief par outset rapport au reste de la page. L’effet produit est l’inverse de inset Chaque mot clef va créer un type de bordure différent. Voici à quoi correspond chaque effet visuellement :"
      },
      {
        "type": "h",
        "text": "Définir la couleur d’une bordure"
      },
      {
        "type": "p",
        "text": "Finalement, nous allons devoir définir la couleur d’une bordure. Pour cela, nous allons pouvoir piocher parmi toutes les valeurs de type « couleur » connues et notamment :"
      },
      {
        "type": "list",
        "items": [
          "Les notations de type « nom de couleur » ;",
          "Les notations hexadécimales ;",
          "Les notations RGB() et RGBa() ;",
          "Les notations HSL() et HSLa()."
        ]
      },
      {
        "type": "h",
        "text": "Exemples de création de bordures en CSS"
      },
      {
        "type": "p",
        "text": "La suite de cette leçon va être pour nous l’occasion de s’exercer et de créer toutes sortes de bordures. Je vous rappelle ici que nous aborderons les bordures arrondies dans la prochaine leçon. Commençons déjà avec des exemples simples de bordures créées en CSS en appliquant ce que nous avons vu ci-dessous. Ici, nous allons créer 4 types de bordures différentes : une bordure simple, une bordure double, une avec effet 3D de type « ridge » et une avec un style « outset ». Nous allons pouvoir faire cela en utilisant soit les propriétés border-width, border- style et border-color, soit la notation raccourcie border. Ici, nous nous contentons d’ajouter des bordures différentes autour de nos paragraphes. J’ai également rajouté une couleur de fond aux deux derniers paragraphes afin que l’on puisse bien observer l’effet de 3D des deux dernières bordures. Notez une chose intéressante par rapport à notre bordure double : la taille de la bordure correspond à la taille totale de la bordure, c’est-à-dire dans ce cas du double trait et de l’espace entre ces deux traits. La largeur totale va être répartie régulièrement : en indiquant une bordure double de 15px, chaque élément de la bordure (les deux traits plus l’espace entre les traits) va faire 5px de large (15px / 3)."
      },
      {
        "type": "h",
        "text": "Définir des bordures différentes pour chaque côté d’un élément"
      },
      {
        "type": "p",
        "text": "Le CSS va également nous permettre de définir chacune des quatre bordures de nos éléments indépendamment les unes des autres afin de pouvoir appliquer des effets intéressants. Nous avons deux façons de faire cela selon que nous utilisions la notation raccourcie border pour définir nos bordures ou que nous utilisions chacune des propriétés border-. Dans le cas où nous souhaitons utiliser border, nous allons devoir utiliser 4 sous propriétés CSS qui sont :"
      },
      {
        "type": "list",
        "items": [
          "border-top pour définir l’aspect (taille, style et couleur) de la bordure supérieure de"
        ]
      },
      {
        "type": "p",
        "text": "l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "border-right pour définir l’aspect (taille, style et couleur) de la bordure droite de"
        ]
      },
      {
        "type": "p",
        "text": "l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "border-bottom pour définir l’aspect (taille, style et couleur) de la bordure inférieure"
        ]
      },
      {
        "type": "p",
        "text": "de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "border-left pour définir l’aspect (taille, style et couleur) de la bordure gauche de"
        ]
      },
      {
        "type": "p",
        "text": "l’élément. Bon à savoir : Les propriétés border-top, border-right, border-bottom et border-left sont à nouveau des écritures raccourcies des propriétés CSS border-top-width, border-top- style, border-top-color, etc. Dans le cas où nous utilisons les propriétés border-width, border-style et border- color alors nous pourrons indiquer 4 valeurs à la suite qui définiront le comportement des bordures supérieure, droite, inférieure et gauche dans cet ordre. Notez ici qu’il est tout à fait possible de ne renseigner qu’une valeur pour l’une de ces 3 propriétés si vous voulez que vos 4 bordures aient le même comportement. Vous pouvez également ne mentionner que deux valeurs : dans ce cas, la première valeur définira le comportement des bordures supérieure et inférieure tandis que la seconde définira le comportement des bordures droite et gauche de l’élément. Regardez plutôt les exemples ci-dessous qui résument toutes les situations possibles pour bien comprendre :"
      },
      {
        "type": "h",
        "text": "Créer des bordures semi transparentes"
      },
      {
        "type": "p",
        "text": "Nous allons encore pouvoir ajouter un effet de transparence à nos bordures en utilisant tout simplement une notation RGBa lorsque l’on précisera la paramètre couleur de notre bordure. Notez ici qu’utiliser la propriété CSS opacity ne produirait pas le comportement voulu puisque l’effet de transparence serait appliqué à l’élément entier et non pas seulement à la bordure comme on le souhaite."
      },
      {
        "type": "h",
        "text": "Les bordures dans le modèle des boites"
      },
      {
        "type": "p",
        "text": "Les bordures d’un élément HTML se situent entre les marges internes et externes de l’élément. La taille des bordures va par défaut venir s’ajouter aux dimensions de l’élément définies avec les propriétés width et height ainsi qu’aux marges internes. Notez que nous allons pouvoir définir des bordures de la même façon pour des éléments de type block et inline et que ces bordures auront exactement le même comportement."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* BORDER : bordure autour d'un élément */\n\n/* Notation raccourcie */\n.boite { border: 2px solid #3498db; }    /* épaisseur style couleur */\n.boite { border: 1px dashed #ccc; }\n.boite { border: 3px dotted red; }\n.boite { border: 5px double #2c3e50; }\n.boite { border: 4px groove #9b59b6; }\n.boite { border: 4px ridge #9b59b6; }\n.boite { border: 4px inset #9b59b6; }\n.boite { border: 4px outset #9b59b6; }\n\n/* Propriétés individuelles */\n.boite {\n  border-width: 2px;\n  border-style: solid;\n  border-color: #3498db;\n}\n\n/* Côtés séparément */\n.signature {\n  border-top: 2px solid #eee;      /* Seulement en haut */\n  border-bottom: 3px solid #3498db; /* Différent en bas */\n}\n.sidebar { border-right: 1px solid #ddd; }\n.note    { border-left: 4px solid #f39c12; }\n\n/* Border-radius : arrondir les angles */\n.arrondi { border-radius: 8px; }        /* Tous les angles */\n.cercle  { border-radius: 50%; }        /* Cercle (si width=height) */\n.pillule { border-radius: 50px; }       /* Pilule */\n.custom  { border-radius: 10px 30px 10px 30px; } /* TL TR BR BL */\n\n/* Exemple : card component */\n.card {\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  overflow: hidden;             /* Cache ce qui dépasse les bords arrondis */\n  transition: box-shadow 0.3s;\n}\n.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.12); }\n\n/* Outline : similaire à border mais ne prend pas de place */\nbutton:focus { outline: 2px solid #3498db; outline-offset: 2px; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "34-gestion-des-marges-externes-en-css",
    "title": "Gestion des marges externes en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "En CSS, nous allons devoir distinguer deux types de marges : les marges intérieures (“padding”) et les marges extérieures (“margin”). Les marges intérieures se trouvent entre le contenu de l’élément et sa bordure. Les marges extérieures, au contraire, vont définir la taille de l’espace autour d’un élément. Les marges extérieures se trouvent en dehors des bordures d’un élément et servent généralement à éloigner un élément d’un autre. Lorsqu’on définit une couleur de fond pour un élément, cette couleur de fond ne va pas s’appliquer dans l’espace des marges extérieures car encore une fois celles-ci se trouvent « en dehors » de l’élément."
      },
      {
        "type": "h",
        "text": "La propriété CSS margin"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir ajouter des marges externes à un élément grâce à la propriété CSS margin. Cette propriété est en fait la notation raccourcie des propriétés margin- top, margin-left, margin-bottom et margin-right qui vont servir à définir les marges externes de chaque côté d’un élément. Ces propriétés vont pouvoir accepter différents types de valeurs :"
      },
      {
        "type": "list",
        "items": [
          "Des valeurs de type longueur, généralement en px ou en em ;",
          "Des valeurs de type pourcentage. Dans ce cas, le % indiqué est calculé par rapport"
        ]
      },
      {
        "type": "p",
        "text": "à la taille de l’élément parent ;"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef auto. Ce mot clef va surtout nous servir pour centrer des blocs."
        ]
      },
      {
        "type": "p",
        "text": "Notez qu’à la différence de la propriété padding, nous allons pouvoir passer des valeurs négatives à margin pour créer des marges externes négatives même si en pratique cela est généralement déconseillé pour les problèmes d’ergonomie et de consistance du design que ça peut causer au niveau de la page. Notez également que la plupart des navigateurs définissent des marges par défaut pour de nombreux éléments. Il faudra donc souvent effectuer un reset des marges dans nos feuilles de styles (en définissant des marges nulles pour les différents éléments) pour être certain d’obtenir le résultat attendu. Ajouter une même marge externe de chaque côté d’un élément Pour définir une même marge externe de chaque côté d’un élément, il suffit de passer la valeur de la marge extérieure que l’on souhaite appliquer à l’élément à la propriété margin en CSS. Par exemple, pour appliquer une marge extérieure de 25px de chaque côté d’un élément, on écrira en CSS margin : 25px. Pour que la marge extérieure représente 10% de la taille de l’élément parent de notre élément, on écrira margin : 10% tout simplement. Nous allons bien évidemment également pouvoir définir des marges externes égales pour chaque côté d’un élément en utilisant les propriétés margin-top, margin-left, margin- bottom et margin-right et en leur passant la même valeur à chacune. Ici, vous pouvez noter que les bordures d’un élément définissent la « limite » de cet élément. Les marges externes sont un espace entre les éléments et c’est la raison pour laquelle nous ne pouvons pas appliquer de couleur de fond (entre autres) dans l’espace des marges externes de l’élément. Notez également qu’on ne va pas pouvoir appliquer de marges haute ou basse aux éléments de type inline comme c’était déjà le cas pour les marges internes. En revanche, les marges externes droite et gauche s’appliquent normalement. Définir des marges externes différentes de chaque côté d’un élément Nous allons également pouvoir appliquer des marges extérieures de taille différentes de chaque côté d’un élément. Pour cela, nous avons deux façons de faire : soit en passant plusieurs valeurs à la propriété margin, soit en utilisant les propriétés margin-top, margin-left, margin- bottom et margin-right. On va en effet pouvoir passer entre 1 et 4 valeurs à la propriété raccourcie margin :"
      },
      {
        "type": "list",
        "items": [
          "En passant une valeur à margin, la valeur passée définira le comportement des 4"
        ]
      },
      {
        "type": "p",
        "text": "marges extérieures de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "En passant deux valeurs à margin, la première valeur passée définira le"
        ]
      },
      {
        "type": "p",
        "text": "comportement des marges extérieures supérieure et inférieure de l’élément tandis que la seconde valeur définira le comportement des marges extérieures gauche et droite de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "En passant trois valeurs à margin, la première valeur passée définira le"
        ]
      },
      {
        "type": "p",
        "text": "comportement de la marge externe supérieure, la deuxième définira le comportement des marges extérieures gauche et droite tandis que la troisième définira le comportement de la marge externe basse ;"
      },
      {
        "type": "list",
        "items": [
          "En passant quatre valeurs à margin, la première valeur passée définira le"
        ]
      },
      {
        "type": "p",
        "text": "comportement de la marge externe supérieure, la deuxième définira le comportement de la marge externe droite, la troisième celui de la marge externe basse et la quatrième celui de la marge externe gauche. La fusion ou « collapsing » des marges externes verticales Une des grandes différences entre l’implémentation des marges internes et des marges externes est que les marges externes haute et basse de deux éléments vont pouvoir « fusionner » selon certaines conditions."
      },
      {
        "type": "h",
        "text": "La fusion des marges externes d’éléments consécutifs"
      },
      {
        "type": "p",
        "text": "Si on définit une marge basse à un premier élément de type block et une marge haute à l’élément suivant, alors les hauteurs des deux marges ne vont pas s’additionner mais vont « fusionner ». En effet, seule la marge la plus importante sera appliquée. Par exemple, imaginons qu’on ait défini une margin-bottom : 30px pour notre premier élément et une margin-top : 50px pour l’élément suivant. Les deux éléments ne seront pas séparés de 30 + 50 = 80px mais seulement de la taille de la marge la plus importante parmi les deux, à savoir ici 50px. De même, si deux éléments consécutifs possèdent deux marges négatives, alors seule la marge négative la plus importante sera conservée. Dans le cas où un élément possède une marge basse externe positive et le suivant possède une marge haute externe négative (ou le contraire), alors la marge négative va se soustraire à la marge positive. Par exemple, si le premier élément possède une margin- bottom : 50px et le deuxième élément a une margin-top : -30px, alors la marge appliquée sera de 50 – 30 = 20px. La fusion des marges entre un élément parent et son premier et dernier enfant Cette deuxième situation de fusion des marges est plus complexe que la première. Pour faire très simple, vous pouvez retenir qu’il va y avoir fusion entre un élément parent et son premier enfant s’il n’y a aucune bordure ou remplissage entre sa marge haute et la marge haute de son enfant. De même, il y aura fusion entre la marge basse du parent et la marge basse de son dernier enfant s’il n’y a aucune bordure ou remplissage pour les séparer et si aucune propriété height, min-height ou max-height n’est définie bien évidemment."
      },
      {
        "type": "h",
        "text": "Fusion des marges d’un bloc vide"
      },
      {
        "type": "p",
        "text": "Finalement, si un élément de type block est vide, c’est-à-dire ne possède aucun contenu, bordure, remplissage et qu’on ne lui a pas défini de hauteur fixe alors ses marges hautes et basses vont également fusionner. Notez bien à nouveau que cet effet de collapse ne va pouvoir avoir lieu qu’avec les marges supérieure et inférieure des éléments et ne va pas se manifester pour les marges gauches et droite."
      },
      {
        "type": "h",
        "text": "Utiliser margin pour centrer un élément dans son parent"
      },
      {
        "type": "p",
        "text": "La propriété margin va souvent être utilisée pour centrer horizontalement un élément dans son parent. Pour faire cela, nous allons devoir définir des marges externes auto à gauche et à droite de l’élément qui devra être centré. Attention toutefois : cela ne va fonctionner que sur des éléments de type block car centrer des éléments inline (en ligne) dans leur parent n’aurait aucun sens. De plus, afin de voir l’effet du centrage, il va falloir définir explicitement une largeur pour l’élément qui devra être centré avec la propriété width et lui passer une largeur plus petite que celle de son parent. Notez bien ici que c’est l’élément entier qui est centré dans son conteneur et non pas le contenu de l’élément qui est centré dans l’élément. Pour centrer horizontalement le contenu d’un élément dans l’élément en soi, on utilisera la propriété text-align et sa valeur center. Pour centrer l’élément et son contenu, il suffit donc d’utiliser les propriétés margin et text- align ensemble."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* MARGIN : espace entre les éléments */\n\n/* Notation raccourcie */\n.boite { margin: 20px; }              /* 4 côtés */\n.boite { margin: 20px 40px; }         /* haut/bas | gauche/droite */\n.boite { margin: 10px 20px 30px; }    /* haut | g/d | bas */\n.boite { margin: 10px 20px 30px 5px; }/* haut droite bas gauche */\n\n/* Valeur auto : centrage horizontal */\n.contenu { width: 800px; margin: 0 auto; }\n\n/* Marges négatives (dépasse le parent) */\n.header-img { margin: 0 -20px; } /* Dépasse sur les côtés */\n\n/* FUSION DES MARGES (Margin Collapse) */\n/* Les marges VERTICALES adjacentes fusionnent → la plus grande gagne */\nh2 { margin-bottom: 30px; }\np  { margin-top:    20px; }\n/* → L'espace entre h2 et p = 30px (pas 50px !) */\n\n/* Solutions au margin collapse :\n   - Ajouter padding ou border sur le parent\n   - Utiliser overflow: hidden ou auto sur le parent\n   - Utiliser display: flex sur le parent */\n\n/* Exemples de mise en page courants */\n/* Espacement vertical uniforme entre les sections */\nsection + section { margin-top: 80px; }\n\n/* Paragraphes */\np { margin-bottom: 1em; }\np:last-child { margin-bottom: 0; }\n\n/* Titres */\nh1 { margin-bottom: 0.5em; }\nh2 { margin-top: 1.5em; margin-bottom: 0.5em; }\n\n/* Centrer une image */\nimg.centree { display: block; margin: 20px auto; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "35-la-propri-t-css-box-sizing",
    "title": "La propriété CSS box-sizing",
    "blocks": [
      {
        "type": "p",
        "text": "La propriété box-sizing va nous permettre de définir quelles boites doivent être inclues dans le calcul de la largeur et de la hauteur d’un élément. Cette propriété va être très utile pour éviter qu’un élément ne dépasse de son parent à cause de bordures trop large ou de marges internes trop grandes par exemple. Les interactions entre les différentes propriétés du modèle des boites Commençons déjà par souligner comment fonctionnent les propriétés liées au modèle des boites ensemble. Vous pouvez retenir que lorsqu’aucune largeur n’est explicitement définie pour un bloc, alors l’ajout de marges (externes comme internes) et de bordures va compresser le contenu ou les boites internes afin que l’élément ne dépasse pas de son parent conteneur. En revanche, dès qu’on définit une largeur pour l’élément auquel on applique des marges et / ou des bordures, les différentes tailles des marges et bordures vont venir s’ajouter par défaut à la taille définie et l’élément va ainsi pouvoir potentiellement dépasser de son conteneur."
      },
      {
        "type": "h",
        "text": "Le fonctionnement de la propriété box-sizing"
      },
      {
        "type": "p",
        "text": "La propriété box-sizing va nous permettre d’indiquer que l’on souhaite inclure les marges internes et les bordures dans le calcul de la taille d’un élément. Nous allons pouvoir fournir l’un des mots clefs suivants à cette propriété :"
      },
      {
        "type": "list",
        "items": [
          "content-box : valeur par défaut. Les dimensions définies pour l’élément vont"
        ]
      },
      {
        "type": "p",
        "text": "s’appliquer à sa boite de contenu. Toute marge interne ou bordure ajoutées ensuite vont augmenter la taille de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "border-box : les dimensions définies pour l’élément vont s’appliquer à la boite"
        ]
      },
      {
        "type": "p",
        "text": "contenant le contenu + le padding + les bordures. En ajoutant ou en augmentant la taille des marges internes ou des bordures, la taille de l’élément ne change pas mais son contenu sera compressé."
      },
      {
        "type": "h",
        "text": "Exemple d’utilisation de la propriété box-sizing"
      },
      {
        "type": "p",
        "text": "Dans l’exemple ci-dessous, nos paragraphes sont tous des enfants d’un div class=\"conteneur\". La largeur des éléments p est fixée à 100% de la taille de leur élément parent. Par défaut, la largeur de la boite de contenu des paragraphes sera égale à celle du div parent. Ensuite, nous ajoutons des marges internes et des bordures à nos paragraphes. La taille des marges et de la bordure va par défaut s’ajouter à la taille définie avec width pour nos paragraphes et ceux-ci vont donc dépasser de leur parent. Nous allons donc utiliser la propriété box-sizing et sa valeur border-box pour que la largeur définie inclue les marges internes et bordures dans son calcul et afin que notre paragraphe ne dépasse pas de son élément parent."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* BOX-SIZING : comment calculer la largeur/hauteur d'un élément */\n\n/* content-box (DÉFAUT du navigateur) :\n   width/height = contenu seulement\n   Taille réelle = content + padding + border */\n\n.content-box {\n  box-sizing: content-box; /* valeur par défaut */\n  width: 300px;            /* 300px de CONTENU */\n  padding: 20px;\n  border: 5px solid #333;\n  /* Taille totale réelle = 300 + 20*2 + 5*2 = 350px ! */\n}\n\n/* border-box (RECOMMANDÉ) :\n   width/height INCLUT padding ET border\n   Taille réelle = width/height déclaré */\n\n.border-box {\n  box-sizing: border-box;\n  width: 300px;   /* 300px EN TOUT, padding et border INCLUS */\n  padding: 20px;  /* Contenu = 300 - 20*2 - 5*2 = 250px */\n  border: 5px solid #333;\n  /* Taille totale réelle = 300px exactement */\n}\n\n/* BONNE PRATIQUE : appliquer border-box universellement */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n/* Avantages de border-box :\n   → Les pourcentages sont intuitifs (50% = exactement la moitié)\n   → Pas de calculs complexes avec padding/border\n   → Comportement prévisible et cohérent */\n\n.colonne {\n  box-sizing: border-box;\n  width: 50%;       /* Exactement la moitié du parent */\n  padding: 20px;    /* L'espace intérieur est déjà inclus dans les 50% */\n  float: left;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "36-cr-er-des-bordures-arrondies-en-css",
    "title": "Créer des bordures arrondies en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Le module CSS3 relatif aux bordures a apporté de nouvelles fonctionnalités nous permettant de personnaliser encore davantage nos bordures. Parmi celles-ci, l’une des nouveautés les plus attendues était la possibilité de créer des bordures arrondies. Nous allons donc pouvoir créer des bordures arrondies en CSS (ou plus exactement arrondir les bords d’un élément HTML) en utilisant la propriété border-radius. Notez que l’arrondi créé va s’appliquer aux bords de l’élément en soi (ou à son arrière- plan si vous préférez). Cela signifie que nous n’avons pas forcément besoin de définir une quelconque bordure avec border pour que border-radius s’applique."
      },
      {
        "type": "h",
        "text": "Comment sont définis les arrondis avec border-radius ?"
      },
      {
        "type": "p",
        "text": "La propriété border-radius va prendre deux valeurs représentant la dimension du « rayon » sur l’axe des X (axe horizontal) et la dimension du « rayon » sur l’axe des Y (axe vertical) d’une ellipse qui va servir à définir la forme de l’arrondi. Ces deux valeurs dont être séparées par un slash comme ceci : border-radius: X/Y. La deuxième valeur est facultative et si elle est omise elle sera considérée comme égale à la première par défaut. Note : ici, j’appelle « rayon » sur l’axe de X et des Y les longueurs égales à la moitié de la largeur et à la moitié de la hauteur totale de l’ellipse, c’est à dire la distance du point central de l’ellipse à son bord gauche ou droit dans le plan horizontal et la distance du point central de l’ellipse à son bord supérieur ou inférieur dans le plan vertical. Bien évidemment, parler de rayon pour une ellipse n’a aucun sens d’un point de vue mathématique, ce n’est que pour vous donner une image. Ces deux valeurs vont pouvoir être des valeurs de type longueur (en px par exemple) ou des pourcentages (%). Pour être tout à fait précis, notez déjà que ce sont 4 ellipses qui vont être utilisées pour définir les bordures arrondies d’un élément (une ellipse pour chaque coin). Pour le moment, nous n’allons mentionner qu’une valeur de rayon horizontale et une valeur de rayon vertical avec border-radius ce qui fait que les 4 ellipses vont être de tailles identiques (c’est la raison pour laquelle je parlerai de « l’ellipse » plutôt que « des ellipses »). Nous verrons par la suite comment définir des bordures arrondies différentes pour chaque côté d’un élément. Prenons directement un premier exemple pour illustrer tout ça : Ici, nous voulons appliquer des bordures arrondies à nos différents paragraphes. On commence par placer chaque paragraphe dans un div et par donner une couleur de fond à nos éléments div et p pour bien voir la bordure arrondie par la suite. On attribue également une largeur et une hauteur pour nos différents paragraphes égales à celles de leur parent div pour pouvoir ensuite utiliser la propriété box-sizing et régler d’ores-et-déjà les potentiels problèmes de dépassement des bordures définies avec border. Ensuite, on définit 3 arrondis différents avec border-radius. Le premier arrondi est défini avec border-radius : 100px / 20px. Cela signifie que chacun des bords arrondis de notre paragraphe va être formé à partir d’une ellipse de largeur maximale de 200px (le « rayon » sur l’axe horizontal * 2) et de hauteur maximale de 40px (le « rayon » sur l’axe vertical * 2). Cela devient très net si on trace ces ellipses à l’intérieur de notre paragraphe : Pour notre deuxième arrondi, on ne précise qu’une valeur pour notre propriété border- radius en pixels avec border-radius : 50px. Par défaut, la deuxième valeur va donc être également fixée à 50px. Dans ce cas, les bords de notre paragraphe vont être arrondis selon la forme d’une ellipse de rayon horizontal et vertical de 50px, ce qui n’est rien d’autre qu’un cercle. En effet, lorsque les deux valeurs passées à border-radius sont les mêmes, alors nous sommes dans le cas particulier où notre ellipse est un cercle (à l’exception des valeurs en % dont nous allons parler par la suite). Ici, vous devez donc vous imaginer le contour d’un cercle de diamètre = 100px. Nous utilisons deux fois cet arrondi : une fois dans un paragraphe sans bordures et une fois avec un paragraphe qui possède des bordures. Ici, on précise border-radius : 25% ce qui est équivalent à border-radius : 25%/ 25%. L’arrondi va ainsi être créé à partir d’une ellipse de rayon horizontal égal à 25% de la largeur du paragraphe et de rayon vertical égal à 25% de la hauteur du paragraphe. Finalement, notre dernier arrondi utilise des valeurs en pourcentage. Ici, vous devez bien comprendre que le pourcentage défini va être un pourcentage de dimension associée (largeur ou hauteur) du paragraphe. La propriété border-radius et les valeurs en pourcentage (%) Il faut faire très attention lorsqu’on définit un border-radius avec des valeurs en pourcentage car le ou les pourcentage(s) donné(s) seront exprimés en fonction de la largeur et de la hauteur de la boite représentant l’élément auquel on applique la bordure. Ainsi, écrire border-radius : 25% signifie que le « rayon » sur l’axe horizontal de l’ellipse utilisée pour créer la bordure sera égal à 25% de la largeur de l’élément et que le « rayon » sur l’axe vertical de l’ellipse utilisée pour créer la bordure sera égal à 25% de la hauteur de l’élément. Ainsi, si notre élément a par exemple une largeur de 400px et une hauteur de 100px, il est équivalent d’écrire border-radius : 25% et border-radius : 100px / 25px. Ici, vous pouvez retenir la chose suivante : en ne passant qu’une seule valeur à border- radius (que ce soit des px, em, in, viewport related units, cm…), les bordures créées seront toujours issues d’un cercle EXCEPTE dans le cas où l’on utilise une valeur en %. Bien évidemment, si le boite représentant notre élément est carrée (largeur = hauteur), alors l’arrondi créé sera toujours créé à partir d’un cercle si on ne passe qu’une valeur à border-radius et ceci même si la valeur passée est une valeur en %."
      },
      {
        "type": "h",
        "text": "Définir des bordures arrondies différentes"
      },
      {
        "type": "p",
        "text": "On va tout à fait pouvoir définir un arrondi différent pour chacune des bordures d’un élément. Pour cela, il suffira de passer 2, 3 ou 4 valeurs à la propriété border-radius :"
      },
      {
        "type": "list",
        "items": [
          "En passant une valeur : la valeur va définir les arrondis des 4 bords de l’élément ;",
          "En passant deux valeurs : la première valeur va définir l’arrondi des angles"
        ]
      },
      {
        "type": "p",
        "text": "supérieur gauche et inférieur droit de l’élément tandis que la seconde valeur va définir l’arrondi des angles supérieur droit et inférieur gauche de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "En passant trois valeurs : la première valeur définit l’arrondi de l’angle supérieur"
        ]
      },
      {
        "type": "p",
        "text": "gauche de l’élément, la deuxième valeur définit l’arrondi des angles supérieur droit et inférieur gauche de l’élément tandis que la troisième valeur définit l’arrondi de l’angle inférieur droit de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "En passant quatre valeurs : la première valeur définit l’arrondi de l’angle supérieur"
        ]
      },
      {
        "type": "p",
        "text": "gauche de l’élément, la deuxième valeur définit l’arrondi de l’angle supérieur droit, la troisième valeur définit l’arrondi de l’angle inférieur droit tandis que la quatrième valeur définit l’arrondi de l’angle inférieur gauche. Notez par ailleurs que la propriété border-radius est une notation raccourcie des propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "border-top-left-radius : Définit l’arrondi de l’angle supérieur gauche de l’élément ;",
          "border-top-right-radius : Définit l’arrondi de l’angle supérieur droit de l’élément ;",
          "border-bottom-right-radius : Définit l’arrondi de l’angle inférieur droit de l’élément ;",
          "border-bottom-left-radius : Définit l’arrondi de l’angle inférieur gauche de l’élément."
        ]
      },
      {
        "type": "p",
        "text": "Une nouvelle fois, nous allons pouvoir mentionner deux « rayons » différents pour chacune des bordures arrondies. Dans le cas où on utilise la notation raccourcie border- radius, il va cependant falloir faire bien attention à l’ordre des valeurs lorsqu’on souhaite définir des arrondis différents car celui-ci peut sembler contre intuitif à première vue : nous allons devoir commencer par passer toutes les valeurs de « rayons » horizontaux pour nos arrondis PUIS les valeurs de « rayons » verticaux, en séparant ces deux groupes par un slash. Notez également qu’en utilisant les propriétés complètes border-top-left-radius, border- top-right-radius, etc. plutôt que la notation raccourcie border-radius il ne faudra PAS indiquer de slash pour séparer les valeurs des deux « rayons » de l’ellipse si on souhaite en préciser deux différentes. Pour notre premier arrondi, on définit un border-radius : 50px pour les angles supérieur gauche et inférieur droit de l’élément et un border-radius : 25px pour les angles supérieur droit et inférieur gauche de l’élément. Notre deuxième arrondi est l’équivalent du premier mais écrit en précisant les valeurs des deux rayons pour chacun de nos angles (ici, les valeurs des deux rayons sont identiques pour chaque angle). Notre troisième arrondi correspond à une troisième façon d’arriver au même résultat que notre premier arrondi, en utilisant cette fois-ci les propriétés complètes border-top-left- radius, border-top-right-radius, etc. plutôt que la notation raccourcie. Pour notre quatrième arrondi, les angles supérieur gauche et inférieur droit de l’élément seront formés à partir d’une ellipse de rayon 100px (horizontal) et 50px (vertical). Les angles supérieur droit et inférieur gauche de l’élément emprunteront eux leurs arrondis à une ellipse de rayon horizontal de 30px et de rayon vertical de 70px. Notre cinquième déclaration d’arrondi est un peu plus complexe à appréhender. Ici, il faut bien comprendre qu’on définit 3 rayons horizontaux pour nos bordures arrondis de 40px, 100px et 10px. La première valeur sera utilisée pour définir l’arrondi horizontal de l’angle supérieur gauche de l’élément, la seconde pour les angles supérieur droit et inférieur gauche et la troisième pour l’angle inférieur droit. Ensuite, on ne définit que 2 valeurs de rayons verticaux de 50px et 70px. La première valeur sera utilisée pour les angles supérieur gauche et inférieur droit tandis que la deuxième valeur sera utilisée pour les angles supérieur droit et inférieur gauche. Finalement, le dernier exemple d’arrondi sert à illustrer comment créer des arrondis utilisant deux rayons différents avec nos propriétés complètes border-top-left- radius, border-top-right-radius, etc. Je vous rappelle qu’il ne faut pas préciser de slash en utilisant ces propriétés mais écrire les deux valeurs de rayons à la suite. La gestion des valeurs d’arrondis trop grandes (valeurs aberrantes) La création de bordures arrondies se fait au moyen d’ellipses ou, dans certains cas particuliers, de cercles. La création de bordures arrondies se fait au moyen d’ellipses ou, dans certains cas particuliers, de cercles. Parfois, cependant, il peut arriver que des valeurs aberrantes soient fournies."
      },
      {
        "type": "h",
        "text": "Définition d’une valeur aberrante pour border-radius"
      },
      {
        "type": "p",
        "text": "Les valeurs passées à la propriété border-radius vont être considérées comme aberrantes et les bordures arrondies vont être redimensionnées dès que la règle « deux bordures adjacentes ne doivent pas se chevaucher » ne sera plus respectée c’est-à-dire dans les situations suivantes :"
      },
      {
        "type": "list",
        "items": [
          "Si l’une (ou chacune) des deux sommes des deux « rayons » dans l’axe vertical"
        ]
      },
      {
        "type": "p",
        "text": "des ellipses servant à créer les bordures supérieure gauche et inférieure gauche et supérieure droite et inférieure droite dépasse la valeur de la hauteur de la boite de l’élément ;"
      },
      {
        "type": "list",
        "items": [
          "Si l’une (ou chacune) des deux sommes des deux « rayons » dans l’axe horizontal"
        ]
      },
      {
        "type": "p",
        "text": "des ellipses servant à créer les bordures supérieure gauche et supérieure droite et inférieure gauche et inférieure droite dépasse la valeur de la largeur de la boite de l’élément. Dans ce cas-là, les valeurs passées à border-radius vont être réduites de manière proportionnelle jusqu’à ce que la transition entre les deux bordures arrondies soit fluide (pour être tout à fait exact d’un point de vue mathématique, il faudrait dire « jusqu’à ce qu’on puisse tracer une tangente qui soit parallèle au côté de la boite de l’élément »). Trouver les valeurs corrigées automatiquement par le CSS à partir des valeurs aberrantes Imaginons par exemple qu’on ait un paragraphe avec les dimensions suivantes width : 400px; height : 100px et qu’on tente de lui appliquer les bordures arrondies suivantes : border-radius : 100px 250px 200px 300px / 10px 30px 70px 80px. Cela est équivalent à définir les bordures arrondies suivantes :"
      },
      {
        "type": "list",
        "items": [
          "border-top-left-radius : 100px 10px ;",
          "border-top-right-radius : 250px 30px ;",
          "border-bottom-right-radius : 200px 70px ;",
          "border-bottom-left-radius : 300px 80px."
        ]
      },
      {
        "type": "p",
        "text": "Faisons maintenant les sommes des rayons 2-à-2 de nos bordures dans les axes horizontal et vertical :"
      },
      {
        "type": "list",
        "items": [
          "Axe horizontal (top-left + top-right) : 100 + 250 = 350px ;",
          "Axe horizontal (bottom-right + bottom-left) : 200 + 300 = 500px ;",
          "Axe vertical (top-left + bottom-left) : 10 + 80 = 90px ;",
          "Axe vertical (top-right + bottom-right) : 30 + 70 = 100px."
        ]
      },
      {
        "type": "p",
        "text": "Ici, nous allons avoir un problème pour l’axe horizontal avec les bordures inférieures droite et gauche puisque la valeur totale des deux rayon, 500px, est supérieure à la largeur de l’élément qui est 400px. Ainsi, TOUTES les bordures arrondies de l’élément vont être redimensionnées de façon proportionnelle jusqu’à arriver à la première valeur acceptable pour les valeurs qui posent problème, c’est-à-dire lorsque la somme des rayons (axe horizontal) des deux bordures inférieures droite et gauche fera 400px. Nous n’avons donc qu’à faire un calcul de proportionnalité en utilisant une règle de 3 pour connaitre les valeurs qui vont être attribuées. Pour cela, il faut déjà trouver le coefficient de proportionnalité qui nous permet de passer de 500 à 400. On a donc : 400 * 100 / 500 = 0,8. Il ne nous reste donc plus qu’à multiplier toutes les dimensions données à border- radius par 0,8 pour obtenir les valeurs corrigées automatiquement par le CSS soit : border- radius : 80px 200px 160px 240px / 8px 24px 56px 64px. Regardez plutôt le résultat ci-dessous pour vous en convaincre. J’ai également recréé les bordures dans le dernier exemple telles qu’elles seraient si elles n’avaient pas été ajustées : Vous pouvez également noter ici que :"
      },
      {
        "type": "list",
        "items": [
          "Si nous avons plusieurs valeurs aberrantes, alors nous utiliserons le coefficient de"
        ]
      },
      {
        "type": "p",
        "text": "proportionnalité de la valeur la plus aberrante afin que tous les arrondis soient de tailles acceptables ;"
      },
      {
        "type": "list",
        "items": [
          "Si une valeur est aberrante en soi (c’est-à-dire si une la valeur d’un rayon de"
        ]
      },
      {
        "type": "p",
        "text": "l’ellipse servant à définir bordure arrondie est déjà supérieure à la taille de la boite de l’élément), nous procéderons exactement de la même manière que précédemment pour trouver la valeur qui sera définie automatiquement en CSS ;"
      },
      {
        "type": "list",
        "items": [
          "Ces règles de correction des valeurs s’appliquent pour tous types de valeurs"
        ]
      },
      {
        "type": "p",
        "text": "passées, que ce soit des valeurs en px ou en %."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* BORDER-RADIUS : arrondir les angles d'un élément */\n\n/* Même valeur pour les 4 angles */\n.arrondi-leger { border-radius: 4px; }    /* Légèrement arrondi */\n.arrondi-moyen { border-radius: 12px; }   /* Moyen */\n.arrondi-fort  { border-radius: 24px; }   /* Très arrondi */\n.pillule       { border-radius: 999px; }  /* \"Pilule\" */\n\n/* Cercle (width = height requis) */\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n/* Notation complète : 4 angles TL TR BR BL */\n.custom1 { border-radius: 10px 30px 10px 30px; }\n\n/* Notation avec 2 valeurs par angle (horizontal/vertical) */\n.ellipse { border-radius: 50% / 30%; }      /* Ellipse */\n.amende  { border-radius: 10px 10px 0 0; }  /* Arrondi seulement en haut */\n.carte   { border-radius: 0 0 12px 12px; }  /* Arrondi seulement en bas */\n\n/* Propriétés individuelles */\n.custom2 {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 0;\n}\n\n/* Exemples courants */\n.btn       { border-radius: 6px; }       /* Bouton */\n.badge     { border-radius: 50px; }      /* Badge/tag */\n.card      { border-radius: 16px; }      /* Carte */\n.avatar    { border-radius: 50%; }       /* Photo de profil */\n.input     { border-radius: 8px; }       /* Champ de formulaire */\n.toast     { border-radius: 8px; }       /* Notification */\n.modal     { border-radius: 12px; }      /* Fenêtre modale */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "37-g-rer-l-affichage-des-l-ments-en-css",
    "title": "Gérer l’affichage des éléments en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "La propriété CSS display est une propriété très puissante puisqu’elle va nous permettre de modifier la façon dont un élément va s’afficher dans la page : en ligne, sous forme de bloc, etc. et donc la façon dont il va se comporter avec ses voisins. Nous avons déjà eu l’occasion de parler de l’affichage des éléments dans la leçon expliquant les différences entre les éléments de niveau block et de niveau inline. En CSS3, la propriété display accepte de nombreuses valeurs différentes ce qui va nous permettre de choisir précisément comment chaque élément HTML doit être affiché dans la page. Dans cette nouvelle leçon, nous allons expliquer comment fonctionne la propriété display en détail et constater son impact sur l’affichage des éléments en utilisant ses différentes valeurs. Rappels sur la définition du type d’affichage d’un élément par défaut Le type d’affichage d’un élément va toujours être défini en CSS via la propriété display. Si cette propriété n’est pas explicitement renseignée pour un élément, la valeur par défaut de qui est display: inline sera appliquée à l’élément. Cependant, vous devez bien comprendre que lorsque vous ouvrez une page dans un navigateur, le navigateur va appliquer des styles par défaut à chaque élément HTML afin d’améliorer le rendu et pour servir de solution de secours si des styles n’ont pas été appliqués par les développeurs de la page. Parmi ces styles par défaut appliqués par n’importe quel navigateur (et dépendant de chaque navigateur, attention !) se trouve la définition du type d’affichage ou du display pour chaque élément. Pour savoir quel type de display appliquer par défaut à chaque élément, la plupart des navigateurs sérieux et connus se basent sur les recommandations du W3C (ou du WHATWG, car il est souvent difficile de savoir lequel de ces deux groupes est à l’origine d’une recommandation). Attention cependant : encore une fois, ce ne sont que des recommandations et chaque navigateur est libre de ne pas en tenir compte et de définir une autre valeur de display pour chaque élément, ce qui peut en pratique arriver pour certains éléments particuliers ou dans certaines situations peu courantes. Ceci étant dit, nous allons maintenant apprendre à modifier nous-mêmes le type d’affichage d’un élément en utilisant la propriété display pour ne pas avoir à dépendre de l’implémentation par les différents navigateurs."
      },
      {
        "type": "h",
        "text": "Inner display et outer display"
      },
      {
        "type": "p",
        "text": "Plus haut, j’ai dit que la propriété CSS display affectait la façon dont un élément s’affichait dans une page. Plus précisément, cette propriété affecte la façon dont l’élément va générer les boites le composant. Je vous rappelle qu’en HTML5 et CSS3, tout élément HTML doit être vu comme un empilement de boites :"
      },
      {
        "type": "list",
        "items": [
          "Boite n°1 (la plus interne) : contenu de l’élément ;",
          "Boite n°2 : boite n°1 + marges internes ;",
          "Boite n°3 : boite n°2 + bordures ;",
          "Boite n°4 : boite n°3 + marges externes."
        ]
      },
      {
        "type": "p",
        "text": "La propriété display va ainsi impacter la génération de l’outer display qui correspond au comportement de l’élément globalement (qu’on peut représenter via la boite globale ou boite n°4) dans le flux de la page et donc par rapport aux autres éléments mais également de l’inner display de l’élément qui correspond à la façon dont l’élément va créer ses boites internes (excepté pour les éléments remplacés qui sont en dehors de la portée du CSS). Ainsi, la propriété display va toujours implicitement recevoir deux valeurs : une première pour définir l’outer display et une seconde pour définir l’inner display. Cependant, en pratique, nous ne mentionnerons explicitement qu’une valeur cet laisserons le CSS définir la deuxième valeur par défaut. Retenez toutefois bien que la propriété display définira quand même toujours un outer display et un inner display. Ainsi, lorsqu’on mentionne display : block par exemple, la « vraie » valeur complète de display va être display : block flow. Dans le cas où nous voudrions une deuxième valeur autre que la valeur par défaut, nous n’aurons pas non plus besoin de préciser deux valeurs en pratique puisque le CSS a implémenté des mots clefs composés comme inline-block qui sont là pour répondre à ces cas. Pour information, voici les versions « raccourcies » des valeurs données à display que vous devriez toujours utiliser et les valeurs complètes pour référence. Par d’inquiétude, nous allons indiquer par la suite à quoi correspond chaque valeur."
      },
      {
        "type": "h",
        "text": "Valeur            Valeur"
      },
      {
        "type": "p",
        "text": "Comportement raccourcie complète none — L’élément ne s’affiche pas et ne génère aucune boite L’élément ne génère aucune boite à l’affichage mais ses contents — enfants oui Elément de niveau block (block-level) et boites internes block block flow de type block (block container)"
      },
      {
        "type": "h",
        "text": "Valeur             Valeur"
      },
      {
        "type": "p",
        "text": "Comportement raccourcie complète Elément de niveau block (block-level) et boites internes block flow- flow-root de type block (block container) établissant un nouveau root contexte de formatage Elément de niveau inline (inline-level) et boites internes inline inline flow de type inline inline flow- Elément de niveau inline (inline-level) et boites internes inline-block root de type block (block container) Elément de type run-in (inline avec des règles run-in run-in flow spéciales) block flow Elément block-level avec block container de type block list-item list-item qui crée également une boite contenant un marqueur inline list- inline flow Elément inline-level qui crée également une boite item list-item contenant un marqueur Élément block-level avec boites internes flexibles (flex flex block flex container) Élément inline-level avec boites internes flexibles (flex inline-flex inline flex container) table block table Élément block-level avec boites internes de type table inline-table inline table Élément inline-level avec boites internes de type table Élément block-level avec boites internes de type grille grid block grid (grid) Élément inline-level avec boites internes de type grille inline-grid inline grid (grid)"
      },
      {
        "type": "h",
        "text": "Les valeurs de display-outside de display"
      },
      {
        "type": "p",
        "text": "Nous allons déjà pouvoir commencer par définir l’outer display d’un élément avec display, c’est-à-dire le type d’affichage de l’élément en soi et son comportement visuel par rapport aux autres. Si on exclut les valeurs particulières display : none et display : contents, nous ne pouvons définir l’outer display d’un élément qu’avec trois valeurs différentes :"
      },
      {
        "type": "list",
        "items": [
          "Avec la valeur inline : l’élément va être de niveau inline ;",
          "Avec la valeur block : l’élément va être de niveau block ;",
          "Avec la valeur run-in : l’élément va être de niveau inline avec des règles"
        ]
      },
      {
        "type": "p",
        "text": "particulières. Notez que pour chacune de ces trois valeurs outer display, la valeur de l’inner display associée par défaut est flow."
      },
      {
        "type": "h",
        "text": "Display : inline"
      },
      {
        "type": "p",
        "text": "En précisant un display : inline (qui est la valeur raccourcie de display : inline flow), on définit un élément de niveau inline (inline-level element) ou tout simplement de « type » inline. Un élément de niveau inline a les caractéristiques suivantes :"
      },
      {
        "type": "list",
        "items": [
          "Un élément de type inline ne va occuper que la largeur nécessaire à l’affichage de"
        ]
      },
      {
        "type": "p",
        "text": "son contenu par défaut ;"
      },
      {
        "type": "list",
        "items": [
          "Les éléments de type inline vont venir essayer de se placer en ligne, c’est-à-dire à"
        ]
      },
      {
        "type": "p",
        "text": "côté (sur la même ligne) que l’élément qui les précède dans le code HTML ;"
      },
      {
        "type": "list",
        "items": [
          "Un élément de type inline peut contenir d’autres éléments de type inline mais ne"
        ]
      },
      {
        "type": "p",
        "text": "peut pas contenir d’éléments de type block. Par défaut, les éléments p possèdent un display : block. Ici, nous définissons un display : inline pour deux d’entre eux ; ces deux paragraphes en particulier vont donc se comporter comme des éléments inline."
      },
      {
        "type": "h",
        "text": "Display : block"
      },
      {
        "type": "p",
        "text": "En précisant un display : block (valeur raccourcie de display : block flow), on définit un élément de niveau block (block-level element) ou encore de « type » block. Un élément de niveau block va posséder les caractéristiques suivantes :"
      },
      {
        "type": "list",
        "items": [
          "Un élément de type block va toujours prendre toute la largeur disponible au sein"
        ]
      },
      {
        "type": "p",
        "text": "de son élément parent (ou élément conteneur) ;"
      },
      {
        "type": "list",
        "items": [
          "Un élément de type block va toujours « aller à la ligne » (créer un saut de ligne"
        ]
      },
      {
        "type": "p",
        "text": "avant et après l’élément), c’est-à-dire occuper une nouvelle ligne dans une page et ne jamais se positionner à côté d’un autre élément par défaut ;"
      },
      {
        "type": "list",
        "items": [
          "Un élément de type block peut contenir d’autres éléments de type block ou de"
        ]
      },
      {
        "type": "p",
        "text": "type inline. Les éléments strong et a ont un type d’affichage inline qui leur est attribué par défaut. Ici, nous changeons ce type d’affichage pour un display : block pour notre deuxième élément strong et deuxième lien. Ces deux éléments vont donc se comporter comme des éléments de type block."
      },
      {
        "type": "h",
        "text": "Display : run-in"
      },
      {
        "type": "p",
        "text": "En précisant un display : run-in (valeur raccourcie de display : run-in flow), on définit un élément de type inline avec un comportement spécial : l’élément va essayer de fusionner / s’insérer dans l’élément de type block suivant. Notez que cette valeur ne fait pas encore partie des recommandations officielles du W3C et est toujours en développement. A éviter pour un développement en production donc."
      },
      {
        "type": "h",
        "text": "Les valeurs de display-inside de display"
      },
      {
        "type": "p",
        "text": "Comme je l’ai précisé plus haut, nous ne préciserons généralement qu’une seule valeur à display et laisserons le CSS appliquer la deuxième valeur par défaut. Dans la majorité des cas, ce sera la valeur liée à l’outer display qui sera précisée. Cependant, pour certains éléments particuliers et dans certains contextes nous passerons plutôt une valeur d’inner display à la propriété display (et lui laisserons donc appliquer l’outer display lié par défaut). Ce sont ces valeurs qui vont nous intéresser ici et notamment les valeurs d’affichage table, flex, grid et list-item."
      },
      {
        "type": "h",
        "text": "Inner display: table"
      },
      {
        "type": "p",
        "text": "En précisant un display : table a un élément, l’élément va visuellement se comporter comme un tableau. Nous étudierons la création de tableaux en HTML plus tard dans ce cours. La valeur complète du display par défaut est display : block table. A partir de là, vous pouvez déduire qu’un tableau en HTML a un outer display de type block par défaut. Notez ici que les tableaux vont avoir des structures d’affichage complexes puisqu’ils vont être composés de lignes et de cellules. Pour rendre complètement le comportement visuel d’un tableau, nous allons également pouvoir utiliser les valeurs suivantes pour display sur certains éléments en répliquant la structure d’un tableau « normal » même si nous essayerons d’éviter de faire ça tant que possible pour des raisons évidentes de sémantique."
      },
      {
        "type": "list",
        "items": [
          "display : table-header-group : l’élément se comporte visuellement comme un"
        ]
      },
      {
        "type": "p",
        "text": "élément thead ;"
      },
      {
        "type": "list",
        "items": [
          "display : table-footer-group : l’élément se comporte visuellement comme un"
        ]
      },
      {
        "type": "p",
        "text": "élément tfoot ;"
      },
      {
        "type": "list",
        "items": [
          "display : table-row-group : l’élément se comporte visuellement comme un"
        ]
      },
      {
        "type": "p",
        "text": "élément tbody ;"
      },
      {
        "type": "list",
        "items": [
          "display : table-row : l’élément se comporte visuellement comme un élément tr ;",
          "display : table-cell : l’élément se comporte visuellement comme un élément td ;",
          "display : table-column-group : l’élément se comporte visuellement comme un"
        ]
      },
      {
        "type": "p",
        "text": "élément colgroup ;"
      },
      {
        "type": "list",
        "items": [
          "display : table-column : l’élément se comporte visuellement comme un élément col."
        ]
      },
      {
        "type": "p",
        "text": "Nous pouvons également utiliser display : table-caption pour qu’un élément se comporte comme un élément caption. Cette valeur de display va créer un block avec un comportement relatif à celui du tableau."
      },
      {
        "type": "h",
        "text": "Inner display: flex"
      },
      {
        "type": "p",
        "text": "En attribuant un display : flex a un élément, l’élément va visuellement se comporter comme une boite flexible, ce qui signifie que l’élément va se comporter comme un élément de type block pour l’outer display mais que l’intérieur de l’élément va suivre le modèle des boites flexibles ou flexbox (il va établir un nouveau contexte de formatage de type flex). Nous allons consacrer une leçon au modèle des boites flexibles ou « flexbox » CSS dans ce cours car ce modèle est très intéressant pour créer des pages qui vont s’adapter à tous les écrans ou « responsives ». La valeur complète de display : flex est display : block flex."
      },
      {
        "type": "h",
        "text": "Inner display: grid"
      },
      {
        "type": "p",
        "text": "En attribuant un display : grid a un élément, l’élément va visuellement se comporter comme une grille : l’élément en soi va être de niveau block et va créer en interne un contexte de formatage de type grille ou grid c’est-à-dire disposer son contenu selon le modèle des grilles. La valeur complète du display : grid est display : block grid."
      },
      {
        "type": "h",
        "text": "Un cas particulier d’affichage : le display : list-item"
      },
      {
        "type": "p",
        "text": "Lorsque l’on crée un élément de liste en HTML avec l’élément li, on crée au final deux boites : une boite contenant la puce ou marqueur et une autre contenant le contenu textuel de notre élément de liste. En attribuant un display : list-item a un élément, on va pouvoir recréer ce comportement et faire en sorte que l’élément se comporte comme un élément de liste et génère un marqueur et une boite de type block par défaut. La valeur complète d’un display : list-item est display : block flow list-item. Ici, la valeur complète de display est composée de trois valeurs. C’est tout à fait normal au sens où le mot clef list-item ne sert véritablement qu’à générer un marqueur de liste et ne dicte ni le comportement de l’outer display ni celui de l’inner display. Ici, nous attribuons un display : list-item à tous les paragraphes de nos pages. Ces derniers vont donc se comporter comme des éléments de liste et avoir chacun un marqueur ou puce. On en profite pour définir l’apparence et la position des puces car par défaut la position est outside et comme mes paragraphes sont collés au bord gauche de ma page les puces seraient en dehors de la page. Notez qu’on pourrait également conserver un list-style- position: outside et ajouter une margin-left. Les valeurs de display composées héritées du CSS2 : inline-block, etc. Jusqu’au CSS2, on avait imaginé une syntaxe avec un mot clef unique à fournir en valeur de la propriété display. Dans ce contexte, cependant, comment faire pour ne modifier que l’outer display ou que l’inner display quand on veut obtenir un comportement qui n’est pas le comportement par défaut ? La réponse a été l’introduction de mots clefs composés dont nous héritons aujourd’hui comme par exemple le mot clef inline-block qui est l’équivalent d’un display : inline flow- root. Ces mots clefs composés font toujours partie des recommandations du W3C et vous êtes donc invités à les utiliser même s’ils ne sont finalement que le reflet des limitations passées."
      },
      {
        "type": "h",
        "text": "Display : inline-block"
      },
      {
        "type": "p",
        "text": "En attribuant un display : inline-block a un élément, l’élément en soi va être de niveau inline (l’outer display est inline) tandis que le contenu de l’élément va se comporter comme un block. La valeur display : inline-block est l’équivalent de display : inline flow-root. La valeur display : inline-block va ainsi être intéressante pour placer des éléments en ligne tout en pouvant mettre en forme le contenu de ceux-ci et notamment pour pouvoir attribuer une taille précise à chaque contenu (je vous rappelle que cela n’est possible qu’avec des éléments / boites de type block). Ici, on commence par définir une largeur fixe pour nos différents éléments span avec la propriété width. On n’indique pas de valeur particulière pour le display de notre premier élément span. Celui-ci aura donc un display : inline qui est le type d’affichage par défaut des éléments span. En tant qu’élément inline, il va ignorer la propriété width. On indique un display : block pour notre deuxième span. Il va donc se comporter comme un élément de type block et occuper sa propre ligne mais tenir compte de la largeur passée. On passe finalement un display : inline-block à notre troisième élément span. Celui-ci va donc se comporter comme un élément inline pour son outer display mais ses boites internes vont pouvoir être mises en forme comme un élément block. L’élément va donc rester en ligne mais nous allons pouvoir définir une largeur précise pour celui-ci."
      },
      {
        "type": "h",
        "text": "Display : inline-table"
      },
      {
        "type": "p",
        "text": "En attribuant un display : inline-table à un élément, celui-ci va se comporter comme un tableau mais de niveau inline. La valeur display : inline-table va donc nous permettre de placer un tableau à la suite d’un autre contenu plutôt que sur une ligne qui lui est propre. La valeur display : inline-table est l’équivalent de display : inline table."
      },
      {
        "type": "h",
        "text": "Display : inline-flex"
      },
      {
        "type": "p",
        "text": "En attribuant un display : inline-flex à un élément, celui-ci va se comporter comme un élément de niveau inline et organiser son contenu selon le modèle des boites flexibles. Notez que les flex-items ne sont pas affectés par le type du conteneur : ils vont continuer à se comporter comme des boites de niveau block (tout en possédant certaines propriétés liées aux inline-block). La valeur display : inline-flex est l’équivalent de display : inline flex."
      },
      {
        "type": "h",
        "text": "Display : inline-grid"
      },
      {
        "type": "p",
        "text": "De la même façon, attribuer un display : inline-grid a un élément va le faire se comporter comme un élément de type inline qui va organiser son contenu selon le modèle des grilles. La valeur display : inline-grid est l’équivalent de display : inline grid."
      },
      {
        "type": "h",
        "text": "Display : inline list-item"
      },
      {
        "type": "p",
        "text": "Attribuer un display : inline list-item a un élément de liste va modifier le comportement d’affichage de l’élément qui sera alors affiché comme un élément de niveau inline qui va également créer une boite contenant un marqueur. Les valeurs de non-affichage display : none et display : contents Finalement, nous allons terminer avec deux valeurs particulières de display : display : none et display : contents. Ces valeurs sont particulières car elles vont nous permettre de ne pas afficher certains éléments ou boites."
      },
      {
        "type": "h",
        "text": "Display : none"
      },
      {
        "type": "p",
        "text": "Si un élément possède un display : none, il ne sera tout simplement pas affiché dans la page et les autres éléments se comporteront comme s’il n’existait pas (il ne prendra aucune place dans la page). Il convient de ne pas confondre display : none et visibility : hidden. La propriété visibility va en effet pouvoir faire disparaitre (visuellement) un élément mais l’espace qu’il occupe va être conservé dans la page à la différence de display : none. Notez qu’en appliquant un display : none à un élément, ses éléments enfants ne seront pas non plus affichés. Dans l’exemple ci-dessus, on utilise la propriété visibility et sa valeur hidden pour cacher un de nos éléments p. Vous pouvez cependant remarquer que si le contenu de l’élément ne s’affiche pas, la place qui lui était réservée dans le document est conservée. Cela ne va pas être le cas pour le paragraphe auquel on a appliqué un display : none : non seulement l’élément ne va pas s’afficher mais le document va faire comme si le paragraphe n’existait pas du tout et celui-ci ne va donc pas prendre d’espace dans la page."
      },
      {
        "type": "h",
        "text": "Display : contents"
      },
      {
        "type": "p",
        "text": "La valeur display : contents va également nous permettre de faire disparaitre les boites générées par un élément mais, à la différence de display : none, le contenu textuel de l’élément va être affiché normalement et les enfants de cet élément vont continuer à générer des boites et à apparaitre dans la page de manière normale. Notez que cette valeur ne fait pas encore partie des recommandations du W3C et est toujours en cours de développement et peut donc être sujette à des changements ou à un abandon."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* DISPLAY : contrôle comment un élément est affiché */\n\n/* block : prend toute la largeur, commence sur une nouvelle ligne */\ndiv, p, h1, section { display: block; }\nspan { display: block; } /* Transformer un inline en block */\n\n/* inline : dans le flux du texte, pas de largeur/hauteur */\nspan, a, strong { display: inline; }\ndiv { display: inline; } /* Transformer un block en inline */\n\n/* inline-block : dans le flux MAIS accepte width/height */\n.btn {\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n  padding: 10px 20px;\n  text-align: center;\n}\n\n/* none : supprime l'élément du DOM visuel (et de l'espace) */\n.cache { display: none; }\n\n/* visibility: hidden : cache mais conserve l'espace */\n.invisible { visibility: hidden; }\n\n/* flex : conteneur flex (enfants côte à côte) */\n.nav { display: flex; gap: 20px; }\n\n/* grid : grille CSS */\n.grille { display: grid; grid-template-columns: 1fr 1fr 1fr; }\n\n/* Exemple pratique : afficher/cacher un menu */\n.menu { display: none; }\n.menu.actif { display: block; }\n\n/* Tableau CSS */\n.table { display: table; }\n.row { display: table-row; }\n.cell { display: table-cell; }\n\n/* contents : supprime la boite mais garde les enfants */\n.wrapper { display: contents; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "38-g-rer-le-positionnement-des-l-ments-en-c",
    "title": "Gérer le positionnement des éléments en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "La propriété position est une propriété CSS très puissante qui va nous permettre de définir un type de positionnement pour nos éléments. On va ainsi pouvoir positionner un élément relativement à partir de sa position par défaut ou de façon absolue par rapport à un point donné dans la page en utilisation position conjointement avec les propriétés top, left, bottom et right. Dans cette leçon, nous allons découvrir les différentes valeurs qu’on va pouvoir donner à position et apprendre à les utiliser intelligemment en tentant de comprendre leurs implications."
      },
      {
        "type": "h",
        "text": "Le fonctionnement et les valeurs de la propriété position"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir gérer et modifier le type de positionnement d’une élément HTML grâce à la propriété CSS position. La propriété position ne va pas nous permettre de positionner un élément en soi dans une page mais simplement de définir un type de positionnement grâce aux valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "position : static ;",
          "position : relative ;",
          "position : absolute ;",
          "position : fixed ;",
          "position : sticky."
        ]
      },
      {
        "type": "p",
        "text": "Une fois le type de positionnement défini avec position, nous allons pouvoir effectivement positionner un élément à un endroit précis dans une page grâce aux propriétés top, left, bottom et right. Ces quatre propriétés vont pouvoir prendre des valeurs absolue ou relative et vont servir à indiquer où le coin supérieur gauche de la boite représentant un élément doit être positionné par rapport à un certain point de référence (50px à droite et 30px en dessous de ce point par exemple). Le type de positionnement défini pour l’élément va servir à définir ce point de référence et va donc affecter le fonctionnement de ces propriétés qui vont produire des résultats différents. Les types de positionnement d’un élément HTML dans une page Il existe trois types de positionnement en CSS. Il est très intéressant de les connaitre et de les comprendre afin de mieux comprendre comment fonctionne le CSS et comment les différents éléments vont venir se positionner les uns par rapport aux autres. Connaitre et comprendre les types de positionnement va également nous permettre de comprendre comment fonctionne la propriété CSS position puisque selon la valeur donnée à code>position, un élément HTML va se conformer à un type de positionnement plutôt qu’un autre. 1. Le premier type de positionnement est ce qu’on pourrait appeler le positionnement « normal » ou par défaut des éléments. Ici, les éléments vont respecter le flux normal de la page et s’y intégrer sans le casser. Ainsi, un élément de type block sera formaté comme tel (c’est-à-dire qu’il occupera tout l’espace possible et se placera à la ligne), un élément de type inline n’occupera que l’espace nécessaire et etc. ; 2. Ensuite, on va également pouvoir faire flotter des éléments HTML avec la propriété float. Ce type de positionnement est particulier puisque l’élément flotté va être retiré du flux normal de la page pour être repositionné ailleurs (généralement à gauche ou à droite) et va également permettre à d’autres éléments de type inline de se positionner à côté de notre élément flotté ; 3. Finalement, on va pouvoir positionner un élément de manière absolue dans notre page. Avec le type de positionnement absolu, un élément est complètement retiré du flux normal de la page pour être placé absolument par rapport à son élément parent direct et va ainsi pouvoir potentiellement passer au-dessus d’autres contenus."
      },
      {
        "type": "h",
        "text": "Position : static"
      },
      {
        "type": "p",
        "text": "La valeur static est la valeur par défaut de la propriété position. Ainsi, par défaut, tous les éléments HTML sont positionnés de manière static. Un élément HTML positionné avec position : static sera positionné selon le flux normal de la page. Notez ici que les propriétés top, left, bottom et right n’auront aucun effet sur les éléments positionnés avec position : static."
      },
      {
        "type": "h",
        "text": "Position : relative"
      },
      {
        "type": "p",
        "text": "Attribuer une position : relative à un élément va positionner l’élément dans le flux normal de la page tout comme la valeur static de la propriété position : static. Cependant, à l’inverse d’un élément HTML positionné avec position : static, un élément positionné avec position : relative va ensuite pouvoir être décalé par rapport à sa position initiale grâce aux propriétés top, left, bottom et right. Ces propriétés vont prendre comme origine la position initiale de l’élément. Nous allons ainsi pouvoir positionner un élément relativement à sa position de départ. Notez qu’ici l’espace occupé initialement par l’élément va continuer à lui appartenir : les autres éléments ne seront pas affectés par le décalage de notre élément et ne vont pas se repositionner en fonction de celui-ci. Cela implique également que l’élément décalé va pouvoir être à cheval par-dessus d’autres éléments puisque a position de ces autres éléments ne va pas changer en fonction de l’élément décalé possédant une position : relative."
      },
      {
        "type": "h",
        "text": "Position : absolute"
      },
      {
        "type": "p",
        "text": "Un élément positionné avec position: absolute va être positionné par rapport à son parent le plus proche positionné (avec une valeur de position différente de static). Si aucun parent positionné n’est trouvé, alors l’élément sera positionné par rapport à l’élément racine représentant la page en soi. Le point de référence pour les propriétés top, left, bottom et right va ainsi être le côté de l’élément parent liée à la propriété (côté gauche pour left, supérieur pour top , etc.). De plus, un élément positionné avec position : absolute va être retiré du flux normal de la page. Cela signifie et implique que l’espace initialement attribué à un élément au positionnement absolu (espace attribué selon le flux normal de la page) va être occupé par les éléments suivants. Un élément positionné avec position: absolute va ainsi pouvoir se placer par-dessus d’autres éléments. Ici, nous avons un paragraphe et un div positionnés de manière absolue. Notre paragraphe ne possède pas de parent positionné. Il va donc être positionné par rapport à l’élément racine de la page, c’est-à-dire par rapport à la page en soi. Ici, top : 70px signifie donc que notre paragraphe sera placé à 70px du point le plus haut de la page auquel il aurait pu être placé (en tenant compte des marges appliquées). Notre div possède lui un parent positionné qui est le div jaune « conteneur ». Ce dernier est positionné de manière relative. Notez qu’on lui a déclaré une position : relative mais qu’on n’a pas modifié sa position avec une propriété top, left, etc. Cela n’empêche pas au div conteneur d’être positionné. Notre div vert va donc être positionné par rapport au div jaune. Ici, bottom : 20px et right : 30px signifie que notre div vert sera positionné à 20px du bord inférieur et à 30px du bord droit de son parent. Vous pouvez également observer que les éléments positionnés de manière absolue sont bien retirés du flux normal de la page et les autres éléments vont pouvoir venir se positionner à la place de ces éléments, comme s’ils n’existaient pas. On voit bien cela avec notre deuxième div bleu qui vient se coller au premier et vient donc prendre la place du div vert ainsi qu’avec notre troisième paragraphe qui prend la place initiale du deuxième."
      },
      {
        "type": "h",
        "text": "Position : fixed"
      },
      {
        "type": "p",
        "text": "Le positionnement fixe est très proche du positionnement absolu. Un élément positionné avec position: fixed va également être retiré du flux de la page et l’espace qui lui était attribué selon le flux normal de la page va également pouvoir être utilisé par d’autres éléments. La seule différence entre position: fixed et position: absolute est que l’élément ne va plus être positionné par rapport à son parent le plus proche mais par rapport au viewport, c’est- à-dire par rapport à la fenêtre visible à moins que l’un de ses parents possède une propriété transform, filter ou perspective dont la valeur est différente de none. En dehors de ces cas particuliers, un élément positionné avec position: fixed apparaitra toujours à la même place même dans la fenêtre si on descend ou on monte dans la page : il sera fixe par rapport à la fenêtre. En effet, sa position va être calculée par rapport à la fenêtre visible. A noter ici une exception pour les contenus paginés : dans ce cas-là, l’élément possédant une position: fixed sera répété dans chaque page."
      },
      {
        "type": "h",
        "text": "Position : sticky"
      },
      {
        "type": "p",
        "text": "La dernière valeur de la propriété CSS position est la valeur sticky. Un élément positionné avec position: sticky sera d’abord positionné selon le flux normal de la page puis va pouvoir être décalé de manière similaire à un élément positionné de manière relative. Les éléments suivants ne verront pas leur position changée : ils seront toujours placé « comme si » l’élément positionné avec position: sticky occupait sa place d’origine. La différence ici entre un élément positionné avec position: sticky et position: relative est que la position d’un élément sticky va être calculée par rapport à son parent possédant un mécanisme de défilement (scrolling) le plus proche. Ainsi, un élément positionné avec position: sticky va avoir une position relative au départ puis son positionnement va devenir fixe dès qu’un certain point sera franchi, c’est-à-dire à partir d’un certain niveau de défilement de la page. Les propriétés top, left, bottom et right vont nous permettre de pouvoir préciser à partir de quel moment l’élément positionné avec position: sticky va devoir être fixe. Notez que la valeur sticky est une valeur assez récente de la propriété position et est à ce titre toujours en développement. On évitera donc de l’utiliser pour le moment sur un site « live »."
      },
      {
        "type": "h",
        "text": "Un mot sur l’accessibilité du contenu"
      },
      {
        "type": "p",
        "text": "Lorsqu’on code, il faut toujours s’efforcer de réfléchir en termes d’accessibilité à tous, et notamment pour les personnes souffrant de déficiences comme des déficiences visuelles. En effet, un des principes de base du web est d’être accessible à tous ou du moins c’est l’une des valeurs fondamentales vers laquelle tendre. Ici, il faudra donc faire bien attention à ce que les contenus positionnés ne cachent pas d’autres contenus de façon non désirée lorsqu’un utilisateur par exemple zoome sur la page pour augmenter la taille du texte. Définir l’ordre d’affichage des éléments en cas de chevauchement avec la propriété z-index Les éléments HTML vont pouvoir être positionné dans une page en CSS selon 3 dimensions : selon la largeur (axe horizontal ou axe des X en math), la hauteur (axe vertical ou axe des Y) et également selon une épaisseur ou un ordre d’empilement (axe des Z). En effet, vous avez pu remarquer dans les exemples précédents que lorsque deux éléments se chevauchaient, il y en avait toujours un au-dessus de l’autre : il y a donc une notion d’ordre d’empilement selon cet axe 3D qui est l’axe des Z. Par défaut, lorsque deux boites se chevauchent, l’élément déclaré en dernier apparaitra par-dessus l’élément déclaré avant en HTML. C’est une règle implicite de tout document HTML. La propriété z-index va nous permettre de modifier ce comportement et de choisir quel élément doit apparaitre au-dessus de quel ordre en donnant un index sous forme de nombre à un ou plusieurs éléments. Ainsi, lorsque deux éléments se chevauchent, celui possédant la plus grande valeur pour son z-index apparaitra au-dessus de l’autre. Notez que la propriété CSS z-index ne va fonctionner (et n’a de sens) qu’avec des éléments HTML positionnés, c’est-à-dire qu’avec des éléments possédant une propriété position dont la valeur est différente de static en CSS."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* POSITION : contrôle le positionnement d'un élément */\n\n/* static : valeur par défaut, dans le flux normal */\n.element { position: static; } /* top/left/right/bottom ignorés */\n\n/* relative : déplacé PAR RAPPORT à sa position normale (garde son espace) */\n.relative {\n  position: relative;\n  top: 20px;   /* Déplacé de 20px vers le bas */\n  left: 10px;  /* Déplacé de 10px vers la droite */\n}\n\n/* absolute : sorti du flux, positionné par rapport à l'ancêtre positionné */\n.parent { position: relative; } /* Contexte de positionnement */\n.enfant-absolu {\n  position: absolute;\n  top: 0;\n  right: 0;    /* Dans le coin supérieur droit du .parent */\n}\n\n/* fixed : collé à l'écran, ne défile pas */\n.bouton-retour-haut {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 100;\n}\n\n/* sticky : dans le flux JUSQU'À un seuil, puis fixed */\nnav {\n  position: sticky;\n  top: 0;      /* Colle en haut quand le défilement l'atteint */\n  z-index: 50;\n}\n\n/* z-index : couche de profondeur (fonctionne seulement si position ≠ static) */\n.modal   { z-index: 1000; position: fixed; }\n.overlay { z-index: 999;  position: fixed; }\n.menu    { z-index: 100;  position: sticky; }\n\n/* Centrage absolu classique */\n.centree {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "39-la-propri-t-css-float",
    "title": "La propriété CSS float",
    "blocks": [
      {
        "type": "p",
        "text": "La propriété CSS float permet de sortir un élément du flux normal de la page et de le faire “flotter” contre un bord de son élément parent conteneur ou contre un autre élément flottant. Une utilisation bien connue de la propriété float est de s’en servir pour faire flotter une image à droite ou à gauche d’un texte et ainsi l’entourer avec du texte. La propriété float est donc une autre propriété qui va impacter la disposition dans la page et qu’il convient de manier avec précaution pour ne pas obtenir de comportement indésirable. Le but de cette nouvelle leçon est d’apprendre à la manipuler."
      },
      {
        "type": "h",
        "text": "Définition et fonctionnement de la propriété float"
      },
      {
        "type": "p",
        "text": "La propriété float va retirer un élément du flux normal de la page puis le placer contre un bord de son élément parent (ou élément conteneur) ou contre le bord d’un élément flottant le précédant. Cette propriété va également impacter les éléments environnants puisque le texte et les éléments inline suivants un élément possédant un float différent de none vont essayer de venir se placer à ses côtés. La propriété float était à l’origine principalement utilisée pour incruster des images dans du texte en les faisant flotter. L’utilisation « normale » de float est donc d’appliquer le float (de faire flotter) des éléments inline dans la page et de laisser les textes se positionner autour. En effet, les éléments de type block suivants un élément flottant vont également se placer sur la même ligne que l’élément flottant mais continuer à prendre tout l’espace disponible dans la ligne. La partie des éléments block chevauchant un flottant va être cachée derrière le flottant. On va cependant également tout à fait pouvoir faire flotter un élément block même si généralement nous utiliserons plutôt un display : inline-block pour placer deux éléments de type block côte-à-côte. Notez que si vous voulez faire flotter un élément block sans contenu, alors il faudra lui donner une largeur et une hauteur explicites avec les propriétés width et height car dans le cas contraire les valeurs calculées seront égales à 0. Notez également déjà que la propriété float ne va pas fonctionner avec des éléments positionnés de manière absolue et ne va avoir aucun effet sur des éléments affichés avec display : flex ou display : inline-flex. Nous aurons l’occasion de revenir sur ces sujets plus tard."
      },
      {
        "type": "h",
        "text": "Les valeurs de la propriété float"
      },
      {
        "type": "p",
        "text": "Historiquement, nous avions le choix entre 3 valeurs à passer à la propriété float :"
      },
      {
        "type": "list",
        "items": [
          "float : left : L’élément va venir se positionner à l’extrémité gauche de son élément"
        ]
      },
      {
        "type": "p",
        "text": "conteneur ou va être décalé sur la gauche jusqu’à toucher un autre élément avec float : left ;"
      },
      {
        "type": "list",
        "items": [
          "float : right : L’élément va venir se positionner à l’extrémité droite de son élément"
        ]
      },
      {
        "type": "p",
        "text": "conteneur ou va être décalé sur la droite jusqu’à toucher un autre élément avec float : right ;"
      },
      {
        "type": "list",
        "items": [
          "float : none : Valeur par défaut. L’élément n’est pas un élément flottant."
        ]
      },
      {
        "type": "p",
        "text": "Le CSS3 va apporter un nouveau choix élargi de valeurs que nous allons pouvoir passer à float. Je vous rappelle ici que le CSS3 est toujours en développement et qu’ainsi tout ce qui est en train d’être établi par celui-ci n’est pas forcément encore passé comme recommandation du W3C. En effet, certaines valeurs et propriétés actuellement à l’étude dans le cadre du CSS3 vont potentiellement être modifiées ou abandonnées en cours de route. Parmi les nouvelles valeurs apportées à float, cependant, nous pouvons déjà en citer deux qui possèdent déjà un bon support par les navigateurs :"
      },
      {
        "type": "list",
        "items": [
          "float : inline-start : L’élément va venir se positionner au début de son élément"
        ]
      },
      {
        "type": "p",
        "text": "conteneur (c’est-à-dire à gauche pour des documents dont l’écriture se fait de gauche à droite ou à droite dans le cas contraire) ou va être décalé vers le début de son conteneur jusqu’à toucher un autre élément avec float : inline-start ;"
      },
      {
        "type": "list",
        "items": [
          "float : inline-end : L’élément va venir se positionner à la fin de son élément"
        ]
      },
      {
        "type": "p",
        "text": "conteneur (c’est-à-dire à droite pour des documents dont l’écriture se fait de gauche à droite ou à gauche dans le cas contraire) ou va être décalé vers la fin de son conteneur jusqu’à toucher un autre élément avec float : inline-end."
      },
      {
        "type": "h",
        "text": "Float : none"
      },
      {
        "type": "p",
        "text": "La valeur par défaut de float est none. Cette valeur correspond à l’absence de flottement. Ici, nous avons deux éléments div de largeurs égales à 25% de celle de leur parent et de hauteurs égales à 50px. Les div sont des éléments de type block et vont donc aller à la ligne et occuper une ligne chacun quelle que soit leurs dimensions. Ensuite, nous avons deux éléments p dont un qui contient un élément strong. Les éléments p sont également de type block et vont donc par défaut occuper tout l’espace disponible dans leur parent et occuper une ligne chacun. L’élément strong est lui un élément inline par défaut et va donc ne prendre que la place nécessaire dans son parent et ne pas aller à la ligne. Finalement, nous avons créé un div qui contient deux paragraphes dont un contient lui- même un autre élément strong. Par défaut, aucun de ces éléments ne flotte. Ne rien préciser ou préciser un float : none est ici identique et le comportement de ces éléments est connu. Note : parfois, il sera utile de préciser un float : none pour un élément pour annuler par exemple un comportement d’héritage."
      },
      {
        "type": "h",
        "text": "Float : left et float : right"
      },
      {
        "type": "p",
        "text": "En appliquant un float: left à un élément, l’élément va venir se positionner contre le bord gauche de son élément conteneur ou va être décalé vers la gauche jusqu’à toucher un autre élément flottant. En appliquant un float: right à un élément, l’élément va venir se positionner contre le bord droit de son élément conteneur ou va être décalé vers la droite jusqu’à toucher un autre élément flottant. Ces deux valeurs vont se comporter et pouvoir être appliquées de manière similaire. Il y a des choses intéressantes à noter dans cet exemple. Ici, on va faire flotter nos différentes images d’emoji à droite ou à gauche. La première chose à retenir est qu’un élément flottant va toujours flotter sur sa ligne. Dans le dernier exemple, par exemple, notre premier emoji est le premier élément déclaré dans notre conteneur, il flottera donc en haut tandis que notre deuxième emoji est le dernier élément déclaré et il flottera donc en bas du conteneur. Dans notre dernier div, en particulier, l’emoji « penseur » se retrouve en dehors du div. Cela est dû au fait que float retire l’élément du flux normal de la page : le div ne tiendra plus compte de cet élément et va donc se redimensionner à la taille des éléments qu’il contient, c’est-à-dire dans ce cas les deux paragraphes. L’élément flotté va lui en revanche continuer à flotter sur sa ligne. Si vous regardez de plus près, vous pouvez constater qu’il se passe exactement la même chose avec notre premier emoji mais c’est moins visible car c’est le premier élément déclaré dans notre div et donc il va toujours être inclus dedans grâce aux paragraphes le suivant. Cependant, ne vous y trompez pas : le div ne tient plus compte de l’emoji flotté dans le calcul de sa taille mais seulement des éléments non flottés et va se redimensionner en conséquence. C’est la raison pour laquelle nos deuxième et troisième div sont plus petits en hauteur que le premier. Pour éviter ce genre de rendu visuel, on peut toujours augmenter artificiellement la taille de notre élément conteneur en utilisant height. La deuxième chose à bien comprendre est le fait qu’un élément flottant n’impacte pas les propriétés des éléments environnants à proprement parler : les éléments suivants un élément flottant vont pouvoir se placer à côté de l’élément flottant dans la limite de la hauteur de l’élément flottant. Les éléments sous l’élément flottant vont avoir un comportement « normal » comme on peut le voir avec notre deuxième paragraphe pour nos deuxième et troisième div. Contrôler le comportement des éléments autour d’un flottant avec la propriété clear La propriété CSS clear va nous permettre d’empêcher un élément de se positionner à côté d’un élément flottant. Cette propriété va être extrêmement utile dans de nombreuses situations pour mieux contrôler le design de nos pages. Nous allons pouvoir lui passer l’une des valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "clear : none : Valeur par défaut. Laisse les éléments se positionner à côté"
        ]
      },
      {
        "type": "p",
        "text": "d’éléments flottants ;"
      },
      {
        "type": "list",
        "items": [
          "clear : left : Empêche un élément de se positionner à côté d’éléments possédant"
        ]
      },
      {
        "type": "p",
        "text": "un float : left ;"
      },
      {
        "type": "list",
        "items": [
          "clear : right : Empêche un élément de se positionner à côté d’éléments possédant"
        ]
      },
      {
        "type": "p",
        "text": "un float : right ;"
      },
      {
        "type": "list",
        "items": [
          "clear : both : Empêche un élément de se positionner à côté d’éléments possédant"
        ]
      },
      {
        "type": "p",
        "text": "un float : left ou un float : right ;"
      },
      {
        "type": "list",
        "items": [
          "clear : inline-start : Empêche un élément de se positionner à côté d’éléments"
        ]
      },
      {
        "type": "p",
        "text": "possédant un float : inline-start ;"
      },
      {
        "type": "list",
        "items": [
          "clear : inline-end : Empêche un élément de se positionner à côté d’éléments"
        ]
      },
      {
        "type": "p",
        "text": "possédant un float : inline-end. Notez ici que la propriété clear va avoir un comportement légèrement différent selon qu’on l’applique à des éléments non flottants ou au contraire à des éléments déjà flottants. Dans le cas où l’on applique clear à un élément non flottant, l’élément va être déplacé de telle sorte à ce que sa bordure supérieure se place directement sous le bord de la marge basse extérieure des éléments flottants concernés et il va y avoir fusion des marges (collapse en anglais). Dans le cas où clear est appliquée à un élément flottant, l’élément va être déplacé de telle sorte à ce que l’extrémité de sa marge supérieure se place directement sous le bord de la marge basse des éléments flottants concernés. Les deux marges vont donc être conservées. La position des potentiels éléments flottants suivants va être impactée puisqu’un élément flottant ne peut pas être situé plus haut qu’un autre élément flottant qui le précède."
      },
      {
        "type": "h",
        "text": "Cas pratiques d’utilisation de la propriété clear"
      },
      {
        "type": "p",
        "text": "Généralement, nous allons donc utiliser la propriété clear après avoir appliqué un float à un élément pour empêcher certains éléments de venir flotter à côté de l’élément en question. En effet, bien souvent, lorsque nous créerons le design d’une page, nous n’allons pas vouloir que les éléments se positionnent tant qu’ils le peuvent à côté d’un élément flottant mais pouvoir contrôler quels éléments vont pouvoir se positionner aux côtés d’un élément flottant et quels éléments ne doivent pas le faire."
      },
      {
        "type": "h",
        "text": "Illustration du problème réglé par la propriété clear"
      },
      {
        "type": "p",
        "text": "Pour bien comprendre l’intérêt de la propriété float, je vous propose de regarder l’exemple suivant : Ici, nous faisons flotter chacun des div internes à gauche dans nos div conteneurs. Pour nos deux premiers div, le résultat est celui espéré. En revanche, on observe un décalage qui se crée pour nos trois derniers div. En fait, c’est tout à fait normal : le fait que l’affichage se fasse bien avec nos deux premiers div est simplement un « coup de chance » dû au fait que nous n’avons pas deux éléments flottants qui se touchent puisque les div conteneurs soient plus grands que les div flottés et qu’ils ne contiennent qu’un élément flottant. Ici, il faut savoir que par défaut tous les éléments suivants un flottant vont essayer de se positionner sur la même ligne que l’élément flottant et cela dans la limite de la hauteur de l’élément flottant. Dans nos deux premiers exemples, le deuxième paragraphe va à la ligne tout simplement car il n’a pas la place pour se positionner sur la même ligne que le flottant (la hauteur du flottant est déjà remplie par le premier paragraphe). Pour les div flottants suivants, en revanche, la situation va être différente. Notre troisième div flottant dépasse en effet de son div conteneur et va arriver jusqu’à la ligne sur laquelle se situe le div flottant suivant. Le quatrième div flottant va donc toucher le div flottant précédent. Or, un élément flottant va essayer se positionner soit contre le bord de son élément parent soit contre le bord d’un élément flottant précédent si un tel élément existe. C’est ce qui se passe ici : notre dernier div flotté va rencontrer le div flotté précédent et va donc se coller contre son bord. Enfin, notre quatrième et dernier div flottant est suffisamment haut pour arriver jusqu’aux lignes occupées par les paragraphes du dernier div conteneur. Le texte des paragraphes va donc se positionner contre le flottant du div conteneur précédent. La propriété clear va justement nous permettre d’éviter ce genre de comportements généralement non souhaités. Ici, par exemple, il suffirait d’appliquer un clear : left à chacun de nos div conteneurs pour résoudre une grande partie du problème : La propriété clear empêche ici nos div conteneurs (et donc les éléments qu’ils contiennent) de venir se positionner à côté des éléments flottants précédents. Les div conteneurs vont donc se positionner juste en dessous des flottants si les éléments flottants précédents dépassaient de leur conteneur. Notez qu’on aurait ici pu également tout-à-fait appliquer le clear sur un autre élément comme par exemple sur l’un des paragraphes de nos différents div. Dans ce cas, le paragraphe en question et tous les éléments suivants auraient été libérés du flottement et se seraient positionnés sous le flottant. Bien évidemment, la propriété clear va fonctionner exactement de la même façon avec sa valeur right pour empêcher des éléments de se positionner à côté d’un élément possédant un float : right. La valeur both va elle servir à libérer les éléments d’un flottant gauche ou d’un flottant droit. Regardez plutôt l’exemple ci-dessous que vous devriez être capable de comprendre par vous-même :"
      },
      {
        "type": "h",
        "text": "Découverte et utilisation du « clearfix » CSS"
      },
      {
        "type": "p",
        "text": "Il nous reste un problème à régler : comment faire lorsque le flottant est le dernier élément dans son conteneur pour ne pas que celui-ci dépasse du conteneur ? En effet, bien souvent, on voudra que les éléments flottants restent dans la limite de leur conteneur ou plus exactement que les conteneurs s’adaptent pour inclure les flottants dans leur taille. Pour faire cela, on va utiliser ce qu’on appelle un « clearfix » qui est un hack bien connu en CSS utilisant le pseudo-élément ::after. Attention : il faudra cette fois-ci l’appliquer au conteneur qui contient le flottant qui pose des problèmes de design pour qu’il fonctionne. Ce clearfix est le suivant : Nous étudierons les pseudo-éléments plus tard dans ce cours. Cependant, je vais quand même essayer de vous expliquer brièvement comment fonctionne le clearfix. Le pseudo élément ::after nous permet de créer un pseudo élément qui va être le dernier enfant de l’élément sélectionné. L’idée est ici de l’utiliser avec la propriété content pour ajouter un contenu ou plus exactement une chaine de caractères vide en fin de l’élément. Ensuite, nous allons appliquer le clear à ce pseudo élément. Pour que cela fonctionne, cependant, il va falloir lui définir un display. Le type d’affichage qui se prête le mieux à l’opération est ici display : table"
      },
      {
        "type": "h",
        "text": "La propriété float et la hauteur des conteneurs"
      },
      {
        "type": "p",
        "text": "Comme nous avons pu le voir et l’évoquer plus haut, un élément flottant est retiré du flux normal de la page. Cela implique que l’élément qui contient le flottant ne va pas tenir compte de ce dernier dans le calcul de ses dimensions. Cela peut donc mener à des problèmes de dépassement du flottant de son élément conteneur comme on a pu le voir précédemment. Il y a un cas que nous n’avons cependant pas encore étudié : le cas où le conteneur ne contient que des éléments flottants. Dans ce cas-là, la hauteur du conteneur va être égale à la taille de ses bordures et de son padding et donc nulle si le conteneur ne possède n i bordures ni marges internes. Ce comportement sera rarement souhaité. Pour rétablir la hauteur du conteneur, il suffit une nouvelle fois d’utiliser le clearfix vu dans le chapitre précédent."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* FLOAT : fait \"flotter\" un élément à gauche ou à droite */\n/* Les autres éléments s'enroulent autour de l'élément flotté */\n/* Principalement utilisé pour les images avec texte autour */\n\n/* Image qui flotte à gauche, texte autour */\n.article img {\n  float: left;\n  margin: 0 20px 10px 0; /* Espace autour de l'image */\n  max-width: 300px;\n}\n\n/* Image qui flotte à droite */\n.illustration {\n  float: right;\n  margin: 0 0 10px 20px;\n}\n\n/* Annuler le float (clearfix) */\n/* Méthode 1 : clear sur l'élément suivant */\n.section-suivante { clear: both; } /* left, right, both */\n\n/* Méthode 2 : clearfix (hack classique sur le parent) */\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n\n/* Méthode 3 : overflow: hidden sur le parent (simple) */\n.container { overflow: hidden; }\n\n/* Méthode 4 : flow-root (moderne, recommandée) */\n.container { display: flow-root; }\n\n/* Grille avec float (ancienne méthode, préférer flexbox/grid) */\n.colonne { float: left; width: 33.33%; padding: 10px; }\n.conteneur { display: flow-root; } /* Clearfix moderne */\n\n/* Aujourd'hui : float n'est plus utilisé pour les mises en page\n   Utiliser FLEXBOX ou CSS GRID à la place */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "40-gestion-des-conflits-entre-display-posit",
    "title": "Gestion des conflits entre display, position et float",
    "blocks": [
      {
        "type": "p",
        "text": "float En fonction des valeurs passées, la définition d’une propriété display, float ou position peut créer des conflits ou être incompatible avec chacune des deux autres si elles ont été également définies. En effet, les propriétés display, position et float servent toutes les trois à modifier la disposition des éléments dans la page et vont pour cela modifier le flux normal de la page. Dans ces cas-là le CSS définira de nouvelles valeurs qui ne poseront pas de conflit pour l’une ou l’autre des propriétés. C’est ce qu’on appelle une « valeur calculée » par opposition à la « valeur spécifiée ». Il va être très important de bien connaitre ces situations pour pouvoir prévoir le comportement de chaque propriété et pour pouvoir les définir correctement les unes par rapport aux autres et ainsi obtenir in-fine le design de page souhaité."
      },
      {
        "type": "h",
        "text": "Gestion des conflits et valeurs calculées"
      },
      {
        "type": "p",
        "text": "Résumons ici ce qu’il se passe lorsqu’on utilise les propriétés display, position et float sur un même ensemble d’éléments en fonction des valeurs données. Nous ne parlerons pas ici des valeurs des propriétés toujours en développement et ne faisant pas encore partie des recommandations officielles car leur impact n’est pas encore bien défini et car leur définition pourrait changer ou qu’elles pourraient être tout simplement abandonnées. Voici les règles qui vont s’appliquer dans leur ordre d’application : 1. Si un élément possède un display : none, alors les propriétés float et position ne s’appliqueront évidemment pas ; 2. Si un élément est positionné avec position : absolute ou position : fixed, alors la propriété float ne s’appliquera pas (sa valeur calculée sera none et la valeur calculée du display sera celle du tableau ci-dessous ; 3. Si un élément N’est PAS positionné avec position : absolute ou position : fixed, la propriété floats’appliquera bien avec la valeur spécifiée. La valeur de display sera calculée selon le tableau ci-dessous ; 4. Si un élément N’est PAS positionné avec position : absolute ou position : fixed, qu’on NE lui applique PAS de float et que c’est l’élément racine du document, alors la valeur de displayappliquée sera la valeur calculée précisée dans le tableau ci- dessous ; 5. Pour tout autre élément NON positionné avec position : absolute ou position : fixed et auquel on N’applique PAS de float, la valeur de display appliquée sera la même que celle spécifiée."
      },
      {
        "type": "h",
        "text": "Valeur calculée /"
      },
      {
        "type": "p",
        "text": "Valeur spécifiée appliquée inline-table table inline, table-row-group, table-column, table-column-group, table- header-group, table-footer-group, table-row, table-cell, table- block caption, inline-block identique à la autre valeur spécifiée Illustration des règles de calcul des valeurs en cas de conflit Les exemples suivants illustrent quelques situations conflictuelles entre les propriétés display, position et float. Je vous laisse vous référer aux règles précédemment citées pour comprendre les valeurs appliquées ! Ici, notre premier paragraphe p id=\"p1\" possède un display : none. Les propriétés position (et top, left, etc.) et float vont donc être ignorées. Le paragraphe p id=\"p2\" possède une position : absolute. La valeur calculée de sa propriété float va donc être none et la valeur calculée du display va être block. Notre paragraphe p id=\"p3\" est positionné avec position : relative et non display n’est pas none. La propriété float va donc ici bien s’appliquer avec la propriété right. L’élément va donc flotter à gauche et être décalé de 50px vers la gauche par rapport à sa position d’origine, ce qui va le faire sortir de son conteneur. Comme l’élément flotte, la valeur calculée de son display va être block. Finalement, notre paragraphe p id=\"p4\" est positionné avec position : relative et ne possède pas de float. La valeur spécifiée du display va donc bien être appliquée. Une astuce : en cas de doute sur les valeurs des propriétés appliquées à vos éléments, vous pouvez les inspecter (en faisant clic droit sur la page après avoir activé les outils pour développeur de votre navigateur) et aller voir les valeurs calculées (« computed » en anglais). Attention cependant aux inconsistances possibles entre les différents navigateurs."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* CONFLITS et INTERACTIONS entre display, position et float */\n\n/* float change le display en block */\nspan { float: left; }\n/* → span se comporte comme un block même sans display:block */\n\n/* position: absolute/fixed change aussi le display en block */\nspan { position: absolute; width: 100px; height: 50px; }\n/* → span accepte width et height sans display:block */\n\n/* float et position: absolute/fixed ne s'appliquent PAS ensemble */\n/* → position: absolute/fixed ignore float */\n\n/* Récap des transformations implicites de display */\n/* float: left/right → display: block */\n/* position: absolute → display: block */\n/* position: fixed    → display: block */\n\n/* Tableau de compatibilité */\n/*\n  Propriété      | Effet sur display\n  ───────────────|──────────────────\n  float          | → block\n  position:abs   | → block\n  position:fixed | → block\n  display:block  | float annule inline\n*/\n\n/* Bonnes pratiques */\n/* 1. Utiliser flexbox plutôt que float pour les layouts */\n/* 2. Utiliser position:relative sur le parent quand on utilise absolute */\n/* 3. Toujours tester avec les outils dev du navigateur */\n\n.exemple {\n  display: flex;         /* Méthode moderne */\n  flex-direction: row;\n  gap: 20px;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "48-gestion-de-la-couleur-de-fond-en-css",
    "title": "Gestion de la couleur de fond en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle partie, nous allons nous intéresser à la personnalisation du fond de nos boites éléments en CSS et commençant ici avec l’ajout d’une couleur de fond qui va être possible avec la propriété background-color ou avec la notation background dont nous reparlerons dans la leçon suivante."
      },
      {
        "type": "h",
        "text": "Le champ d’application de background-color"
      },
      {
        "type": "p",
        "text": "Tout élément HTML est avant tout une boite rectangulaire qui peut être composée d’un contenu, de marges internes, d’une bordure et de marges externes. Lorsqu’on ajoute une couleur de fond à un élément, cette couleur va remplir l’espace pris par le contenu et les marges internes. En revanche, la couleur de fond ne s’appliquera pas aux marges externes qui sont considérées comme « en dehors » de l’élément. Notez par ailleurs une chose intéressante ici : lorsqu’on donne une couleur de fond à un élément parent, on « dirait » que les éléments enfants en héritent. En réalité, ce n’est pas tout à fait correct : les éléments ont par défaut un background-color : transparent et c’est la raison pour laquelle la couleur de fond de l’élément parent va également remplir l’espace pris par les éléments enfants sauf si on spécifie une couleur de fond différente pour eux."
      },
      {
        "type": "h",
        "text": "Les valeurs de couleur de background-color"
      },
      {
        "type": "p",
        "text": "La propriété CSS background-color va accepter les mêmes notations de couleurs que la propriété color c’est-à-dire toutes les formes de notations de couleurs en CSS. On va ainsi pouvoir lui passer :"
      },
      {
        "type": "list",
        "items": [
          "Un nom de couleur de anglais ;",
          "Une valeur hexadécimale ;",
          "Une valeur RGB (ou RGBa) ;",
          "Une valeur HSL (ou HSLa)."
        ]
      },
      {
        "type": "h",
        "text": "Exemples d’utilisation de background-color en CSS"
      },
      {
        "type": "p",
        "text": "Attribuer un background-color opaque à un élément Nous allons pouvoir ajouter une couleur de fond opaque à un élément en utilisant soit une notation de couleur de type nom de couleur, soit une notation hexadécimale, soit une notation RGB ou HSL. Ici, j’ai ajouté un padding c’est-à-dire des marges intérieures, une bordure et des marges externes aux différents paragraphes afin de rendre l’exemple plus visuel et que vous voyiez bien à quoi s’applique le background-color en CSS."
      },
      {
        "type": "h",
        "text": "Ajouter un background-color semi transparent à un élément"
      },
      {
        "type": "p",
        "text": "Nous allons également pouvoir ajouter une couleur de fond semi transparente à un élément en utilisant cette fois-ci les notations RGBa. Notez bien ici qu’utiliser la propriété opacity sur nos éléments ne produirait pas le comportement voulu puisque l’intégralité de nos éléments (contenu et bordure compris) serait alors semi transparent or nous voulons que seulement le fond de l’élément soit transparent. Ajouter différentes couleurs de fond à un élément parent et à ses enfants Finalement, notez qu’on va tout à fait pouvoir ajouter différents background-color à différents éléments imbriqués. Dans ce cas-là, la couleur de fond définie pour chaque élément s’appliquera à l’élément en question. Ici, vous pouvez noter que le background-color ne s’applique que sur l’arrière-plan du contenu de notre span ce qui est tout à fait normal puisqu’un élément span est un élément de type inline par défaut et ne prend donc que l’espace nécessaire à son contenu en largeur."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* BACKGROUND-COLOR : couleur de fond */\n\n/* Différents formats de couleur */\nbody { background-color: #f4f4f4; }\n.carte { background-color: white; }\n.hero { background-color: #2c3e50; }\n.alerte { background-color: rgba(231, 76, 60, 0.1); }\n.info { background-color: hsla(204, 70%, 53%, 0.15); }\n\n/* Transparent (par défaut) */\n.transparent { background-color: transparent; }\n\n/* Couleurs prédéfinies CSS */\n.exemple { background-color: tomato; }\n.exemple { background-color: cornflowerblue; }\n.exemple { background-color: lightgreen; }\n\n/* Exemple : thème dark/light */\n:root {\n  --bg-primaire: #ffffff;\n  --bg-secondaire: #f8f9fa;\n  --bg-accent: #3498db;\n}\n\nbody { background-color: var(--bg-primaire); }\n.section-alternee { background-color: var(--bg-secondaire); }\n.hero { background-color: var(--bg-accent); }\n\n/* Combinaison avec d'autres propriétés */\n.carte {\n  background-color: white;\n  border: 1px solid rgba(0,0,0,0.1);\n  box-shadow: 0 4px 16px rgba(0,0,0,0.08);\n  border-radius: 12px;\n  padding: 24px;\n}\n\n/* Mode sombre */\n@media (prefers-color-scheme: dark) {\n  body { background-color: #1a1a2e; color: #eee; }\n  .carte { background-color: #16213e; }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "49-ajouter-des-images-de-fond-en-css",
    "title": "Ajouter des images de fond en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons apprendre à insérer une ou plusieurs images en fond d’un élément plutôt qu’une simple couleur. Nous allons pouvoir faire cela avec la propriété background-image ou avec la notation raccourcie background. Notez que les dégradés sont considérés comme des images en CSS. Nous allons donc devoir utiliser background-image ou background pour définir un dégradé en fond d’un élément. Nous allons apprendre à créer des dégradés dans la leçon suivante. Les couches ou « layers » constituant le fond d’un élément Pour bien comprendre comment vont fonctionner et s’appliquer les propriétés background- image et background-color, vous devez avant tout savoir qu’un élément HTML (ou plus exactement la boite le représentant) peut avoir plusieurs couches depuis le CSS3. Cela veut dire qu’on va pouvoir « empiler » différents fonds les uns au-dessus des autres pour un même élément, à une limitation près qui est qu’on ne peut déclarer qu’une seule valeur pour la propriété background-color pour un élément et donc qu’un élément ne peut avoir qu’une couche de couleur de fond avec cette propriété. En revanche, on va tout à fait pouvoir empiler une ou plusieurs images les unes sur les autres et par-dessus une couleur de fond pour un même élément. Cela va pouvoir s’avérer très utile si une image de fond ne peut pas s’afficher pour une raison ou une autre par exemple. Retenez bien ici l’ordre des couches : la première image déclarée va être la plus proche de l’utilisateur, c’est-à-dire l’image de fond qui sera visible par défaut. Si on spécifie également une couleur de fond, alors cette couche sera placée derrière les couches « images de fond ». Note : J’ai dit plus haut qu’il était impossible d’ajouter plusieurs couches de couleurs de fond à un élément avec background-color. Cependant, rien ne nous empêche d’utiliser les dégradés ou gradient en anglais pour mixer plusieurs couleurs sur la même couche."
      },
      {
        "type": "h",
        "text": "Utilisation de la propriété background-image"
      },
      {
        "type": "p",
        "text": "La propriété background-image va nous permettre d’affecter une ou plusieurs images de fond à un élément. La première image déclarée sera l’image visible par défaut et chacune des autres images possiblement déclarées sera une couche en dessous."
      },
      {
        "type": "h",
        "text": "Ajouter une image de fond avec background-image"
      },
      {
        "type": "p",
        "text": "Voyons comment ajouter une image de fond : Ici, je me suis contenté d’attribuer une image de fond à mon div id=\"ex1\". Pour cela, je le cible en CSS et j’utilise ma propriété background-image en précisant l’adresse relative de mon image (qui est ici dans le même dossier que mes fichiers) au sein d’un paramètre URL. Notez qu’on va également tout à fait pouvoir passer une adresse absolue pour ajouter une image de fond (une adresse de type https://…). Cependant, pour des raisons évidentes, il est déconseillé d’utiliser une image hébergée sur un autre site comme image de fond : si le propriétaire du site supprime son image, votre image de fond n’apparaitra plus !"
      },
      {
        "type": "h",
        "text": "Ajouter plusieurs images de fond avec background-image"
      },
      {
        "type": "p",
        "text": "Pour ajouter plusieurs images de fond avec background-image, nous allons tout simplement séparer les différentes déclarations d’images par une virgule comme ceci : Comme vous pouvez le voir ici, seule la première image déclarée est visible. C’est un comportement tout à fait normal et cela signifie que la première image déclarée a bien été chargée. Cependant, la deuxième image a bien été placée en arrière-plan également, seulement elle est cachée sous la première. Cette deuxième image va être visible dans deux cas : si la première image ne peut pas être affichée ou si la première image ne remplit pas le fond de l’élément (et que la deuxième image est plus grande que la première). Pas d’inquiétude, nous allons apprendre par la suite à modifier la position et la taille d’une image de fond. Une bonne pratique : déclarer une couleur de fond avec une image de fond Par ailleurs, notez qu’il est considéré comme une bonne pratique de toujours déclarer une couleur de fond avec la propriété background-color en plus d’une ou de plusieurs images de fond au cas où celles-ci ne pourraient pas s’afficher. Une nouvelle fois, si une image peut être chargée normalement, alors la propriété background-color n’aura aucun impact puisque la couche « couleur de fond » va se placer sous les couches « images de fond ». La propriété background-color va accepter les mêmes valeurs que la propriété color, c’est à dire toutes les valeurs possibles de type « couleur » : nom de couleur, valeur hexadécimale, valeur RGB, RGBa, etc."
      },
      {
        "type": "h",
        "text": "Ajouter différentes images de fond à différents éléments"
      },
      {
        "type": "p",
        "text": "Bien évidemment, rien ne nous empêche d’attribuer différentes images de fond à différents éléments. Dans le cas où un élément est inclus dans un autre, l’image ou la couleur de fond qui lui a été attribuée restera au premier plan. Ainsi, on va par exemple pouvoir ajouter une image de fond à l’élément représentant le contenu visible de notre page à savoir l’élément body afin d’ajouter une image de fond « à notre page » en plus de l’image de fond passée à notre div. Notez cependant que pour des raisons évidentes de lisibilité et de clarté nous éviterons généralement de multiplier les images de fond et préférerons généralement des couleurs unies notamment pour le fond d’une page. Les propriétés nous permettant de gérer le comportement du fond Nous savons maintenant comment ajouter une ou plusieurs images de fond à nos éléments. Cependant, nous n’avons aucun contrôle sur leur affichage. Pour contrôler le comportement de nos images de fond, nous allons pouvoir utiliser les propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La propriété background-position ;",
          "La propriété background-size ;",
          "La propriété background-repeat ;",
          "La propriété background-origin ;",
          "La propriété background-clip ;",
          "La propriété background-attachment."
        ]
      },
      {
        "type": "p",
        "text": "Chacune des propriétés citées ci-dessous va nous permettre de préciser un comportement spécifique pour nos images de fond comme la taille, le comportement de répétition, etc. Notez que toutes ces propriétés peuvent être déclarées d’un coup dans la notation raccourcie background que nous étudierons à la fin de cette leçon. Gérer la répétition d’une image de fond avec background- repeat La propriété background-repeat va nous permettre de définir si une image d’arrière-plan doit être répétée ou pas et selon quel(s) axe(s) (axe horizontal et / ou vertical). Par défaut, une image de fond va être rognée à la taille de l’élément en largeur et / ou en hauteur si elle plus grande que celui-ci et au contraire être répétée horizontalement et verticalement si elle est plus petite que l’élément jusqu’à remplir la surface de fond définie. Regardez plutôt l’exemple suivant : Ici, mon div fait 320px de large (ou 330px en comptant les bordures) et 320px de haut (ou 330px en comptant les bordures). Mon image « emoji-smile.png » possède quant-à-elle une dimension de 50px*50px et va donc être par défaut répétée jusqu’à remplir le fond du div à la fois en largeur et en hauteur. Notez deux choses intéressantes ici :"
      },
      {
        "type": "list",
        "items": [
          "Par défaut, l’image ne va pas être redimensionnée pour apparaitre un nombre"
        ]
      },
      {
        "type": "p",
        "text": "entier de fois : on voit bien ici que les dernières itérations en largeur et en hauteur sont coupées ;"
      },
      {
        "type": "list",
        "items": [
          "Mon image gère ici la transparence, c’est pour cela que vous pouvez voir la couleur"
        ]
      },
      {
        "type": "p",
        "text": "de fond du div en arrière-plan dans les endroits non remplis par celle-ci ! Nous allons pouvoir annuler ce comportement de répétition horizontale et verticale par défaut et définir nos propres règles de répétitions grâce à la propriété background-repeat. Pour cela, nous allons passer une ou deux valeurs à la propriété background-repeat parmi les valeurs suivantes. Si une seule valeur est passée, alors elle définira le comportement de répétition de l’image à la fois sur son axe horizontal et sur son axe vertical. Si deux valeurs sont passées, la première valeur définira le comportement de répétition horizontal tandis que la seconde déterminera le comportement de répétition vertical de l’image."
      },
      {
        "type": "list",
        "items": [
          "repeat : valeur par défaut. L’image est répétée jusqu’à remplir le fond ;",
          "no-repeat : l’image n’est pas répétée et n’apparait qu’une fois ;",
          "round : l’image est répétée jusqu’à remplir le fond et est étirée si nécessaire de"
        ]
      },
      {
        "type": "p",
        "text": "façon à n’avoir qu’un nombre de répétitions complet de l’image (l’image ne pourra pas être rognée);"
      },
      {
        "type": "list",
        "items": [
          "space : l’image est répétée jusqu’à remplir le fond un nombre complet de fois"
        ]
      },
      {
        "type": "p",
        "text": "comme pour la valeur round. Cependant, ici, l’image n’est pas étirée : la première et la dernière répétition de l’image sont collées au bord de l’élément et l’espace va être distribué équitablement entre chaque répétition de l’image. Attention cependant, les valeurs round et space ainsi que la syntaxe avec deux valeurs font partie des recommandations du CSS3 et ne sont donc à proprement parler pas encore officielles. Il est donc possible que vous n’ayez pas le comportement attendu selon le navigateur et la version utilisée. En plus de ces valeurs, il existe également deux autres valeurs qui servent seules à définir les comportements de répétition à la fois horizontal et vertical de l’image :"
      },
      {
        "type": "list",
        "items": [
          "repeat-x : l’image est répétée horizontalement jusqu’à remplir le fond mais pas"
        ]
      },
      {
        "type": "p",
        "text": "verticalement. L’équivalent avec deux valeurs va être background-repeat : repeat no-repeat ;"
      },
      {
        "type": "list",
        "items": [
          "repeat-y : l’image est répétée verticalement jusqu’à remplir le fond mais pas"
        ]
      },
      {
        "type": "p",
        "text": "horizontalement. L’équivalent avec deux valeurs va être background-repeat : no- repeat repeat. Si plusieurs images de fond ont été déclarées avec background-image pour l’élément, alors on va pouvoir gérer le comportement de répétition de chacune d’entre elles exactement de la même façon : en passant plusieurs valeurs à background- repeat séparées par des virgules. Chaque valeur va s’appliquer à l’image de fond correspondante déclarée avec background-image."
      },
      {
        "type": "h",
        "text": "Gérer la taille des images de fond avec background-size"
      },
      {
        "type": "p",
        "text": "La propriété CSS background-size va nous permettre de gérer la taille des images de fond d’un élément. Cette propriété va pouvoir prendre une ou deux valeurs. Les valeurs vont pouvoir être des mots clefs ou des dimensions absolues ou relatives. En cas de valeur relative, la dimension est exprimée en fonction de la taille du fond (du conteneur) et non pas de la taille originale de l’image. Si on ne fournit qu’une valeur à background-size, alors cette valeur servira à déterminer la largeur de l’image de fond et la hauteur sera calculée automatiquement par rapport à la largeur fournie. En passant deux valeurs à background-size, la première servira à déterminer la largeur de l’image tandis que la seconde imposera la hauteur de celle-ci. Attention dans ce cas aux proportions de l’image dans le rendu final ! On va également pouvoir fournir l’un de ces deux mots clefs à background-size :"
      },
      {
        "type": "list",
        "items": [
          "contain : l’image va être redimensionnée afin qu’elle occupe le maximum de place"
        ]
      },
      {
        "type": "p",
        "text": "dans le conteneur tout en conservant ses proportions de base et sans dépasser du conteneur. L’image va être contenue dans le conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "cover : l’image va être redimensionnée afin de couvrir tout l’espace (en largeur)"
        ]
      },
      {
        "type": "p",
        "text": "dans le conteneur tout en conservant ses proportions de base. L’image va pouvoir déborder du conteneur afin d’occuper toute la surface de fond. Les parties qui dépassent vont être rognées. Dans le cas où plusieurs images de fond ont été attribuées avec background-image, et si l’on souhaite gérer la taille de chacune de ces images, alors il suffira une nouvelle fois d’indiquer les différentes valeurs de taille pour chaque image dans background-size en les séparant par des virgules. Attention : La définition et les valeurs de la propriété background-size ne sont pour le moment que candidates au statut de recommandation et ne sont donc pas encore tout à fait officielles. Cependant, elles disposent déjà d’une très bonne prise en charge par les versions récentes des navigateurs les plus populaires. Gérer le défilement d’une image de fond avec background-attachment La propriété background-attachment va nous permettre de définir si l’image de fond doit être fixe ou défiler dans son conteneur. Cette propriété ne va donc avoir d’impact que dans le cas où nous avons une barre de défilement ou de scrolling dans notre élément. Nous allons pouvoir passer une valeur parmi les suivantes à background-attachment :"
      },
      {
        "type": "list",
        "items": [
          "scroll : valeur par défaut. L’image de fond ne défile pas avec le contenu de"
        ]
      },
      {
        "type": "p",
        "text": "l’élément auquel elle est associée mais défile avec l’élément dans la page ;"
      },
      {
        "type": "list",
        "items": [
          "fixed : l’image de fond restera fixe par rapport à son conteneur quelle que soit la"
        ]
      },
      {
        "type": "p",
        "text": "taille de l’élément auquel elle est associée et même si l’élément en soi possède une barre de défilement ;"
      },
      {
        "type": "list",
        "items": [
          "local : l’image de fond va se déplacer avec le contenu de l’élément auquel elle est"
        ]
      },
      {
        "type": "p",
        "text": "associée et défiler dans la page avec l’élément auquel elle est associée. Regardez plutôt l’exemple suivant pour bien comprendre le fonctionnement de cette propriété (pensez à bien jouer avec chacune des deux barres de défilement) : Comme pour les propriétés précédentes, dans le cas où on a plusieurs images de fond, il suffira de donner autant de valeurs à background-attachment que d’images de fond déclarées et de séparer les différentes valeurs données par des virgules."
      },
      {
        "type": "h",
        "text": "Déterminer la position du fond avec background-origin"
      },
      {
        "type": "p",
        "text": "La propriété background-origin nous permet d’ajuster la zone dans laquelle notre ou nos images de fond vont pouvoir se placer ou plus exactement de déterminer la position de l’origine (donc de son coin supérieur gauche par défaut) de l’image de fond dans son élément. Notez que si on a appliqué un background-attachment : fixed à notre élément, alors la propriété background-origin sera tout simplement ignorée (l’image de fond sera fixe en toutes circonstances). On va pouvoir passer l’une de ces trois valeurs à background-origin :"
      },
      {
        "type": "list",
        "items": [
          "padding-box : valeur par défaut. La position de l’origine de l’image va être"
        ]
      },
      {
        "type": "p",
        "text": "déterminée par rapport à la boite représentant le contenu + marges internes de l’élément. Le point d’origine de l’image est donc à l’extérieur des bordures ;"
      },
      {
        "type": "list",
        "items": [
          "border-box : la position de l’origine de l’image de fond va être déterminée par"
        ]
      },
      {
        "type": "p",
        "text": "rapport à la bordure de l’élément. Le coin supérieur gauche de l’image va donc se situer derrière la bordure supérieure gauche par défaut ;"
      },
      {
        "type": "list",
        "items": [
          "content-box : la position de l’origine de l’image va être déterminée par rapport à la"
        ]
      },
      {
        "type": "p",
        "text": "boite représentant le contenu de l’élément. Elle ne va donc pas recouvrir l’espace supérieur gauche occupé par le padding par défaut. Comme précédemment, si plusieurs images de fond ont été déclarées avec background- image, il suffira de passer une valeur pour chaque image à background-origin en séparant les différentes valeurs par une virgule."
      },
      {
        "type": "h",
        "text": "Positionner une image de fond avec background-position"
      },
      {
        "type": "p",
        "text": "La propriété CSS background-position va nous permettre de définir à partir de quelle position une image de fond doit s’afficher dans la surface de fond de l’élément associé et relativement à la surface de la zone de fond qu’elle peut occuper (qui a été définie avec background-origin). Cette propriété va pouvoir prendre des mots clefs en valeur comme top, right, bottom, left ou center ou des distances relatives ou absolues comme 25% ou 50px ou un mélange des deux comme bottom 50pxqui indique que le bord bas de l’image de fond sera situé à 50px du « bas de l’élément » (selon la zone de fond définie avec background-origin une nouvelle fois). On va pouvoir passer une ou deux valeurs (simples comme bottom ou composées comme bottom 50px) à background-position. En ne passant qu’une valeur :"
      },
      {
        "type": "list",
        "items": [
          "background-position : center va centrer l’image de fond ;",
          "Les autres mots clefs vont coller l’image de fond au bord correspondant au mot clef"
        ]
      },
      {
        "type": "p",
        "text": "et la deuxième position (horizontale ou verticale) sera par défaut déterminée à 50% de la taille de l’élément. Le point de départ de l’affichage de l’image de fond (dans le cas où elle serait plus grande que l’élément associé) sera déterminé par le mot clef ;"
      },
      {
        "type": "list",
        "items": [
          "Une longueur absolue ou relative va déterminer la position de l’image de fond par"
        ]
      },
      {
        "type": "p",
        "text": "rapport au bord gauche de l’élément. La position verticale calculée sera 50% de la hauteur de l’élément. Le point de départ de l’image sera également son bord gauche. En passant deux valeurs à background-position, la première valeur déterminera le point d’origine de l’image sur l’axe horizontal tandis que la seconde valeur déterminera le point d’origine de l’image dans l’axe vertical. Une nouvelle fois, dans le cas où l’image de fond est plus grande que son élément associé, le point de départ d’affichage de l’image sera son bord gauche si on passe une longueur ou sera déterminé par le mot clef passé. Déterminer la surface que peut occuper notre fond avec background-clip La propriété background-clip permet de définir la surface du fond de l’élément dans laquelle l’image de fond va être visible ou pas. Cette propriété va pouvoir prendre les mêmes valeurs que background-origin à savoir :"
      },
      {
        "type": "list",
        "items": [
          "border-box : valeur par défaut. L’image de fond sera visible jusque sous les"
        ]
      },
      {
        "type": "p",
        "text": "bordures de l’élément (on pourra la voir dans le cas d’une bordure en pointillés par exemple) ;"
      },
      {
        "type": "list",
        "items": [
          "padding-box : l’image de fond sera visible jusqu’à la limite de la marge intérieure"
        ]
      },
      {
        "type": "p",
        "text": "(padding) mais la partie sous les bordures de l’élément ne le sera pas ;"
      },
      {
        "type": "list",
        "items": [
          "content-box : l’image de fond ne sera visible que dans l’espace relatif à la boite"
        ]
      },
      {
        "type": "p",
        "text": "entourant le contenu de l’élément. Il convient cependant de ne pas confondre les propriétés background-clip et background- origin : la propriété background-origin sert à déterminer le point d’origine de l’image de fond, c’est-à-dire à partir d’où celle-ci va être placée tandis que background-clip va nous permettre de définir quelle partie du fond va être affichée / visible. Comme vous pouvez le voir ici, le point d’origine de notre image de fond défini par la propriété background-origin se situe à l’extrémité des bordures de l’élément pour les div id=\"ex1\" et div id=\"ex2\". Pour le div id=\"ex2\", cependant, on impose le fait que la partie du fond située entre la boite relative au contenu et la l’extrémité de la bordure ne soit pas affichée avec background-clip : content-box."
      },
      {
        "type": "h",
        "text": "La propriété CSS raccourcie background"
      },
      {
        "type": "p",
        "text": "La propriété CSS background est la notation short hand ou notation raccourcie des propriétés liées au fond. En CSS 2, la propriété background permettait de définir une couleur et / ou une image de fond pour un élément HTML ainsi que le comportement de répétition, le défilement et la position du fond. La propriété background était donc une propriété condensée des propriétés background- color, background-image, background-repeat, background-attachment et background- position. En CSS 3, ses fonctionnalités ont été étendues pour refléter les apports du CSS 3 en termes d’outil de gestion du fond et la propriété background dans sa nouvelle définition permet aujourd’hui également de gérer plusieurs fonds d’un coup ainsi que de définir les comportements relatifs aux propriétés background-size, background-origin et background- clip pour un fond. Attention cependant : même si la plupart des navigateurs supportent parfaitement ces ajouts, je vous rappelle que ce module du CSS 3 n’est pas encore reconnu comme recommandation officielle par le W3C mais est seulement candidat au statut de recommandation et est donc potentiellement sujet à modifications (même si elles sont peu probables). L’ordre de déclaration des valeurs de la propriété background va être le suivant : 1. La valeur relative à la propriété background-image ; 2. Les valeurs relatives aux propriétés background-position / background-size (avec le slash entre les deux valeurs); 3. La valeur relative à la propriété background-repeat ; 4. La valeur relative à la propriété background-attachment ; 5. La valeur relative à la propriété background-origin ; 6. La valeur relative à la propriété background-clip ; 7. La valeur relative à la propriété background-color. Notez que si certaines valeurs sont omises, alors les valeurs par défaut des différentes propriétés seront utilisées. Pour rappel, les valeurs par défaut de background vont être : background : none 0% 0% / auto auto repeat scroll padding-box padding-box transparent. Pour déclarer plusieurs fonds, il suffira une nouvelle fois de séparer les déclarations complètes par une virgule. Attention cependant, pour que la propriété background fonctionne correctement avec des fonds multiples il faudra absolument réserver la valeur relative à la couleur de fond (background-color) pour le dernier fond déclaré."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* BACKGROUND-IMAGE : image de fond */\n\n/* Image simple */\n.hero {\n  background-image: url('hero.jpg');\n  background-repeat: no-repeat;    /* no-repeat, repeat, repeat-x, repeat-y, space, round */\n  background-position: center;     /* top, center, bottom, left, right */\n                                   /* ou: 50% 30%, 100px 200px */\n  background-size: cover;          /* cover, contain, auto, px, % */\n  background-attachment: fixed;    /* fixed (parallaxe) ou scroll (défaut) */\n  height: 100vh;\n}\n\n/* Notation raccourcie */\n.hero {\n  background: url('hero.jpg') no-repeat center/cover;\n}\n\n/* background-size */\n/* cover   : couvre tout, peut rogner l'image */\n/* contain : visible en entier, peut laisser des espaces */\n\n/* Superposition couleur + image */\n.hero-overlay {\n  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),\n                    url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n/* Plusieurs images de fond (superposées) */\n.multi {\n  background-image:\n    url('particule1.png'),  /* devant */\n    url('particule2.png'),  /* derrière */\n    url('fond.jpg');        /* encore plus derrière */\n  background-repeat: no-repeat, no-repeat, no-repeat;\n  background-position: top left, bottom right, center;\n}\n\n/* Image en tuile (motif) */\n.motif {\n  background-image: url('motif.png');\n  background-repeat: repeat;      /* Répéter dans les 2 sens */\n  background-size: 50px 50px;     /* Taille de chaque tuile */\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "50-cr-er-des-d-grad-s-lin-aires-en-css",
    "title": "Créer des dégradés linéaires en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "En CSS, un dégradé est considéré comme une image qui va progressivement passer d’une couleur de base à une couleur d’arrivée. Ainsi, nous allons pouvoir créer et utiliser les dégradés en CSS avec toutes les propriétés qui acceptent des images et notamment créer des dégradés en fond de nos éléments en utilisant la propriété background. Il existe deux types de dégradés en CSS :"
      },
      {
        "type": "list",
        "items": [
          "Les dégradés linéaires ou linear-gradient en anglais dont le principe va être de"
        ]
      },
      {
        "type": "p",
        "text": "passer progressivement d’une couleur à une autre de manière linéaire c’est-à-dire selon un axe donné ;"
      },
      {
        "type": "list",
        "items": [
          "Les dégradés radiaux ou radial-gradient en anglais pour lesquels le passage d’une"
        ]
      },
      {
        "type": "p",
        "text": "couleur à une autre va se faire dans toutes les directions à partir d’un point central. Dans cette leçon, nous allons nous intéresser à la création de dégradés linéaires seulement. Nous verrons comment créer des dégradés radiaux dans la leçon suivante."
      },
      {
        "type": "h",
        "text": "Qu’est-ce qu’un dégradé linéaire ?"
      },
      {
        "type": "p",
        "text": "Un dégradé linéaire est un dégradé qui va se faire selon un axe ou une direction unique. Nous allons pouvoir créer un dégradé linéaire en CSS en utilisant la syntaxe linear- gradient() en valeur d’une propriété acceptant des images comme background par exemple."
      },
      {
        "type": "h",
        "text": "Direction et couleurs du dégradé"
      },
      {
        "type": "p",
        "text": "Pour créer un dégradé linéaire de manière effective, il va falloir préciser un axe ou une direction pour notre dégradé ainsi qu’au moins deux couleurs et éventuellement définir des « color stops » qui vont nous permettre d’indiquer qu’à un certain point le dégradé doit passer par une couleur donnée."
      },
      {
        "type": "h",
        "text": "Définition de la direction d’un dégradé linéaire"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir préciser la direction du dégradé de deux manières différentes : soit en utilisant une notation sous forme d’angle en degrés deg, soit avec les mots clefs to top, to right, to bottom, to left ou les combinaisons to bottom right, to bottom left, etc."
      },
      {
        "type": "list",
        "items": [
          "Un angle de 0deg indique que le dégradé se fera selon l’axe vertical à partir du bas"
        ]
      },
      {
        "type": "p",
        "text": "vers le haut. L’équivalent de 0deg sous forme de mot clef va être to top ;"
      },
      {
        "type": "list",
        "items": [
          "Un angle de 90deg signifie que le dégradé se fera selon l’axe horizontal de la"
        ]
      },
      {
        "type": "p",
        "text": "gauche vers la droite. L’équivalent de 90deg sous forme de mot clef va être to right ;"
      },
      {
        "type": "list",
        "items": [
          "Un angle de 180deg indique que le dégradé se fera selon l’axe vertical à partir du"
        ]
      },
      {
        "type": "p",
        "text": "haut vers le bas. L’équivalent de 180deg sous forme de mot clef va être to bottom ;"
      },
      {
        "type": "list",
        "items": [
          "Un angle de 270deg signifie que le dégradé se fera selon l’axe horizontal de la"
        ]
      },
      {
        "type": "p",
        "text": "droite vers la gauche. L’équivalent de 270deg sous forme de mot clef va être to left. De même, la valeur to top right va être équivalente à 45deg : le dégradé partira d’en bas à gauche de l’élément pour aller en haut à droite et etc. A noter : Utiliser des notations sous forme d’angles en degrés va nous permettre d’ajuster la direction de nos dégradés de manière beaucoup plus précise qu’en utilisant les mots clefs. Notez que si on ne précise pas de direction pour un dégradé linéaire, alors la direction du dégradé sera par défaut verticale du haut vers le bas c’est-à-dire to bottom ou encore 180deg."
      },
      {
        "type": "h",
        "text": "Les “color stops” et l’avancement d’un dégradé"
      },
      {
        "type": "p",
        "text": "Les « color stops » vont être des points que nous allons définir au niveau desquels notre dégradé doit arriver à une couleur en particulier. Les « color stops » seront généralement situés entre le point de départ et le point d’arrivée de notre dégradé mais cela n’est pas obligatoire (on peut tout à fait définir un color stop en dehors de notre dégradé). Pour définir un color stop, nous allons attribuer un pourcentage à une couleur. Ce pourcentage représente un niveau d’avancement du dégradé pour lequel il doit arriver à la couleur correspondante. En effet, un dégradé linéaire se fait selon une direction. Vous pouvez imaginer cette direction sous forme d’une droite. Le point de départ de notre dégradé linéaire ou le 0% va se trouver au point où la droite perpendiculaire à la direction du dégradé touche l’extrémité de la boite représentant l’élément dans lequel on crée notre dégradé et de manière identique pour le point d’arrivée de notre dégradé de l’autre côté de la boite. Regardez plutôt le schéma suivant pour bien comprendre cela :"
      },
      {
        "type": "h",
        "text": "Exemples de création de dégradés linéaires"
      },
      {
        "type": "p",
        "text": "Maintenant que nous avons vu la théorie, il est temps de passer à la pratique et de créer nos premiers dégradés linéaires afin de voir comment cela va fonctionner en pratique. Dans les exemples suivants, je vais créer des dégradés linéaires en images de fond de mes éléments."
      },
      {
        "type": "h",
        "text": "Création de dégradés linéaires simples"
      },
      {
        "type": "p",
        "text": "Commençons avec quelques exemples simples. Essayez de bien retenir la syntaxe des exemples suivants et notamment quand utiliser des virgules ou pas (pour faire simple, nous n’utilisons les virgules que pour séparer les couleurs entre elles et les séparer des autres valeurs à part des color stops qui leur sont associés). Ici, mes cinq dégradés sont strictement identiques. En effet, je crée un dégradé en image de fond avec la propriété background et la notation linear-gradient pour mon premier div id=\"ex1\" en renseignant une couleur de départ, le jaune (yellow), et une couleur d’arrivée, le rouge (red). Dans ce premier exemple, je n’indique ni direction ni color stop. Les valeurs par défaut vont donc être utilisées à savoir to bottom ou 180deg pour la direction et 0% en color stop pour ma couleur de départ et 100% pour ma couleur d’arrivée. Dans les dégradés suivants, je me contente de renseigner des valeurs qui sont ici superflues puisque ces valeurs sont les valeurs par défaut. Notez que dans le cinquième exemple j’inverse à la fois la direction du dégradé et les couleurs de départ et d’arrivée ce qui fait que nous nous retrouvons une nouvelle fois avec le même dégradé !"
      },
      {
        "type": "h",
        "text": "Création de dégradés avec direction et color stops"
      },
      {
        "type": "p",
        "text": "Essayons maintenant de créer des dégradés linéaires avec plus de deux couleurs et en définissant des directions et color stops différents : Dans le premier exemple, on définit un dégradé linéaire à trois couleurs : du jaune vers le rouge puis vers le violet sans préciser de color stop. La couleur jaune sera ainsi par défaut atteinte à 0% du dégradé puis le rouge à 50% et enfin le violet à 100% puisque les color stops sont distribués équitablement par défaut (dans le cas de 4 couleurs, les color stops par défaut seraient 0% 33.33% 66.66% 100%, dans le cas d’un dégradé à 5 couleurs on aurait 0% 25% 50% 75% 100% et etc.). Dans les deuxième et troisième exemples, en revanche, on définit des color stop personnalisées. Dans le deuxième exemple, on demande à ce que la couleur jaune soit atteinte à 40% du dégradé. Comme le jaune est également la couleur de départ, notre dégradé sera jaune entre 0 et 40%. Ensuite, on demande à ce que la couleur rouge soit atteinte à 60%. Il va donc y avoir dégradé du jaune vers le rouge entre 40% et 60% de notre dégradé puis ensuite du rouge vers le violet entre 60% et 100%. Dans le troisième exemple, on utilise un color stop en dehors de notre de la boite. On demande à ce que notre dégradé arrive à la couleur jaune à -40%. Cela signifie que si notre ligne de dégradé dans la boite de l’élément fait 100px de long, on souhaite atteindre le jaune 40px avant notre 0%. Ensuite on demande à arriver au rouge à 20%. La transition du jaune vers le rouge va donc se faire entre -40% et 20% et donc nous n’allons pas voir le jaune en soi puisque tous les color stops inférieurs à 0% ou supérieurs à 100% se situent en dehors de la boite représentant l’élément dans lequel on crée notre dégradé."
      },
      {
        "type": "h",
        "text": "Création de dégradés semi-transparents"
      },
      {
        "type": "p",
        "text": "Nous pouvons tout à fait définir des dégradés semi-transparents en utilisant des notations RGBa ou HSLa pour préciser les couleurs de nos dégradés. Notez par ailleurs qu’on peut très bien définir le début d’un dégradé avec une couleur semi transparente et la fin de celui-ci avec une couleur opaque ou inversement. Dans l’exemple ci-dessus, on crée trois dégradés : un premier dégradé complètement opaque, un deuxième dégradé avec des couleurs semi transparentes en utilisant des notations RGBa et un troisième dégradé semi transparent au début, opaque au milieu puis à nouveau semi transparent à la fin. Définir des dégradés semi-transparents va être véritablement intéressant dans le cas où on souhaite simplement ajouter un effet de couleur par-dessus une image de fond par exemple. En effet, rappelez-vous qu’un dégradé est considéré comme une image en CSS et que la propriété background supporte tout à fait plusieurs images de fond. Ici, il va bien falloir faire attention à l’ordre des déclarations : je vous rappelle que le premier fond déclaré sera toujours au-dessus du deuxième, qui sera lui-même au-dessus du troisième et etc. Ainsi, en déclarant notre dégradé en fond avant notre image, nous allons pouvoir ajouter des couleurs devant notre image de fond."
      },
      {
        "type": "h",
        "text": "Créer plusieurs dégradés en fond d’un élément"
      },
      {
        "type": "p",
        "text": "Nous venons de voir qu’on pouvait tout à fait placer un dégradé et une image en fond d’un même élément. De la même façon, on va pouvoir déclarer plusieurs dégradés en fond d’un élément. Pour affecter plusieurs dégradés linéaires à notre background, il va suffire de séparer les différentes déclarations par une virgule de la même façon qu’on séparait les images de fond. Le premier dégradé déclaré sera au-dessus du deuxième qui sera lui-même au-dessus du troisième et etc., chaque nouvelle déclaration créant une nouvelle couche de fond pour l’élément concerné. Bien évidemment, si les dégradés sont opaques, alors seul le premier déclaré sera visible (il cachera totalement les autres). En revanche, si le ou les dégradés du dessus sont semi transparents, alors on va pouvoir voir également les dégradés des couches plus profondes et les couleurs des différents dégradés vont se mélanger ou « fusionner » entre elles."
      },
      {
        "type": "h",
        "text": "La répétition des dégradés"
      },
      {
        "type": "p",
        "text": "Nous avons vu comment créer des dégradés uniques linéaires avec la fonction linear- gradient(). Le CSS nous offre également la possibilité de créer des dégradés qui vont pouvoir se répéter grâce en utilisant cette fois-ci plutôt la fonction repeating-linear-gradient(). Bien évidemment, pour voir l’effet d’un dégradé répété il faudra régler les color stops de façon à ce que la première itération du dégradé n’occupe pas 100% de l’espace de base. Ici, vous pouvez voir que la transition entre la première et la deuxième itération du dégradé est brutale lors de l’utilisation de repeating-linear-gradient(). Ce comportement est tout à fait normal puisqu’ici le color stop relatif au violet est en fin de dégradé et le color stop du jaune est au tout début. On va donc passer directement du violet au jaune sans transition fluide. Si on souhaite créer une transition plus fluide entre les différentes itérations de notre dégradé, il faudra créer le dégradé de manière à ce qu’il boucle sur lui-même c’est-à-dire qu’il faudra répéter la couleur de début de dégradé en fin de dégradé."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* linear-gradient() : dégradé linéaire */\n\n/* Dégradé horizontal (par défaut : de haut en bas = 180°) */\n.degrade1 {\n  background: linear-gradient(#e74c3c, #c0392b);\n}\n\n/* Direction explicite */\n.degrade2 { background: linear-gradient(to right, #3498db, #9b59b6); }\n.degrade3 { background: linear-gradient(to bottom right, #f39c12, #e74c3c); }\n.degrade4 { background: linear-gradient(45deg, #1abc9c, #3498db); }\n.degrade5 { background: linear-gradient(135deg, #667eea, #764ba2); }\n\n/* Plusieurs couleurs */\n.arc {\n  background: linear-gradient(to right,\n    #e74c3c 0%,\n    #f39c12 25%,\n    #f1c40f 50%,\n    #2ecc71 75%,\n    #3498db 100%\n  );\n}\n\n/* Arrêts de couleur (color stops) précis */\n.bicolore {\n  background: linear-gradient(to right,\n    #e74c3c 50%,  /* Rouge jusqu'à 50% */\n    #3498db 50%   /* Bleu de 50% à 100% - transition nette */\n  );\n}\n\n/* Superposition gradient + image */\n.hero {\n  background:\n    linear-gradient(135deg, rgba(52,152,219,0.8), rgba(155,89,182,0.8)),\n    url('hero.jpg') center/cover;\n  color: white;\n}\n\n/* Pseudo-transparence (transparent = rgba de la couleur courante vers transparent) */\n.fondu {\n  background: linear-gradient(to bottom, white, transparent);\n}\n\n/* Barre de progression */\n.progress {\n  background: linear-gradient(to right, #3498db 70%, #ecf0f1 70%);\n  height: 8px;\n  border-radius: 4px;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "51-cr-er-des-d-grad-s-radiaux-en-css",
    "title": "Créer des dégradés radiaux en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "En CSS, un dégradé est considéré comme une image qui va progressivement passer d’une couleur de base à une couleur d’arrivée. Ainsi, nous allons pouvoir créer et utiliser les dégradés en CSS avec toutes les propriétés qui acceptent des images et notamment créer des dégradés en fond de nos éléments en utilisant la propriété background. Nous allons pouvoir créer deux types de dégradés en CSS : des dégradés linéaires et des dégradés radiaux. Dans cette nouvelle leçon, nous allons apprendre à créer des dégradés radiaux."
      },
      {
        "type": "h",
        "text": "Qu’est-ce qu’un dégradé radial ?"
      },
      {
        "type": "p",
        "text": "Un dégradé radial est un dégradé qui va partir d’un point central et se propager dans toutes les directions à partir de ce point. Pour créer un dégradé radial, nous allons utiliser la notation radial-gradient() en valeur d’une propriété CSS acceptant des images comme background par exemple."
      },
      {
        "type": "h",
        "text": "Comment se construit un dégradé radial en CSS"
      },
      {
        "type": "p",
        "text": "Pour créer un dégradé radial ou radial-gradient, nous allons devoir définir le point central ou point de départ de notre dégradé, les couleurs du dégradé ainsi que la taille de la forme finale de celui-ci. Nous allons également pouvoir fournir des color stops de la même façon qu’avec nos dégradés linéaires."
      },
      {
        "type": "h",
        "text": "Le point d’origine ou point central du dégradé"
      },
      {
        "type": "p",
        "text": "Nous avons deux méthodes pour définir le point d’origine ou point central de notre radial- gradient : nous allons soit pouvoir utiliser des mots clefs, soit des valeurs absolues ou relatives. A noter que si on omet de préciser la position de départ pour notre dégradé radial, alors la position par défaut center sera utilisée. Les mots clefs vont pouvoir être les mêmes qu’avec nos dégradés linéaires, à savoir top, right, bottom, left et center mais devrons être cette fois-ci être précédés du mot at. Pour préciser les coordonnées d’un point, il faut normalement une valeur dans l’axe horizontal et une autre dans l’axe vertical et c’est la raison pour laquelle nous utiliserons souvent des mots clefs composées comme at top left. Si on ne précise que la valeur d’un axe (at top ou at left par exemple), alors la deuxième valeur calculée sera par défaut center. Si on choisit d’utiliser des valeurs absolues ou relatives pour déterminer le point de départ de notre dégradé radial, alors il suffit de se rappeler que ces valeurs vont représenter l’écartement du point central du dégradé par rapport au coin supérieur gauche de son élément. Dans le cas où une seule valeur est passée, elle représentera l’écartement par rapport au bord gauche et par rapport au bord supérieur. Si deux valeurs sont passées, la première représente l’écartement du point central par rapport au bord gauche tandis que la seconde représente l’écartement du point central du dégradé radial par rapport au coin supérieur de l’élément dans lequel on le crée."
      },
      {
        "type": "h",
        "text": "La forme finale du dégradé"
      },
      {
        "type": "p",
        "text": "Pour définir la forme finale d’un dégradé radial, nous allons pouvoir utiliser les mots clefs circle (le dégradé aura une forme de cercle) soit ellipse (le dégradé sera une ellipse). Si aucune valeur n’est précisée, le dégradé sera un cercle dans le cas où une seule dimension a été précisée pour sa taille ou une ellipse dans le cas contraire."
      },
      {
        "type": "h",
        "text": "La taille du dégradé"
      },
      {
        "type": "p",
        "text": "Nous allons également pouvoir indiquer la taille totale de notre dégradé radial soit de manière explicite en utilisant des valeurs soit en utilisant des mots clefs. La « taille du dégradé » correspond à la distance (ou aux distances) entre son point central et l’endroit où l’on va arriver à la dernière couleur déclarée dans le dégradé. Le reste de l’élément si le dégradé en soi possède une taille plus petite que lui sera rempli avec cette dernière couleur. En ne passant qu’une valeur explicite, notre dégradé aura de fait la forme d’un cercle et la valeur passée sera la taille du rayon du dégradé. Si deux valeurs sont passées, la première représentera le « rayon » de l’ellipse dans l’axe horizontal tandis que la seconde représentera le « rayon » de l’ellipse dans l’axe vertical. Bien évidemment, on évitera de déclarer notre dégradé comme circle et de passer deux valeurs différentes en taille puisque cela n’aurait aucun sens. Les mots clefs relatifs à la gestion de la taille d’un dégradé radial à notre disposition sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "closest-side : Le dégradé va stopper dès qu’il va rencontrer le premier bord (le bord"
        ]
      },
      {
        "type": "p",
        "text": "le plus proche) de l’élément auquel il est appliqué si il a une forme de cercle. S’il a une forme d’ellipse, alors il s’arrêtera au moment où il va toucher les deux côtés les plus proches dans les deux axes horizontal et vertical (il les touchera toujours en même temps par définition) ;"
      },
      {
        "type": "list",
        "items": [
          "farthest-side : Le principe est le même que pour closest-side, à la différence que le"
        ]
      },
      {
        "type": "p",
        "text": "dégradé va stopper lorsqu’il touchera le bord le plus lointain de l’élément auquel on l’applique cette fois-ci ;"
      },
      {
        "type": "list",
        "items": [
          "closest-corner : Le dégradé va stopper dès qu’il va rencontrer le premier coin (le"
        ]
      },
      {
        "type": "p",
        "text": "coin le plus proche) de l’élément auquel il est appliqué ;"
      },
      {
        "type": "list",
        "items": [
          "farthest-corner : Même principe que pour closest-corner à la différence que la"
        ]
      },
      {
        "type": "p",
        "text": "dégradé ne stoppera qu’une fois qu’il aura atteint l’angle le plus lointain de l’élément auquel on l’applique. Notez que si on ne précise pas de taille pour notre dégradé radial alors c’est la valeur farthest-corner qui sera utilisée par défaut."
      },
      {
        "type": "h",
        "text": "Couleurs et color stops du dégradé"
      },
      {
        "type": "p",
        "text": "Finalement, par rapport à la position des color stops, notre 0% correspond au point central ou point d’origine du dégradé radial tandis que 100% va correspondre à l’endroit où le dégradé se termine."
      },
      {
        "type": "h",
        "text": "Exemples de création de dégradés radiaux"
      },
      {
        "type": "p",
        "text": "Dans les exemples suivants, je vais créer des dégradés radiaux que je vais placer en fond de mes éléments. Avant tout, je vous rappelle les valeurs par défaut qui seront appliquées au dégradé si elles sont omises :"
      },
      {
        "type": "list",
        "items": [
          "Forme du dégradé : ellipse par défaut sauf si une seule valeur (ou deux valeurs"
        ]
      },
      {
        "type": "p",
        "text": "identiques) ont été précisées en taille du dégradé ;"
      },
      {
        "type": "list",
        "items": [
          "Position du point central : center (centré) dans l’élément par défaut ;",
          "Taille du dégradé : farthest-corner par défaut, ce qui signifie que la fin du dégradé"
        ]
      },
      {
        "type": "p",
        "text": "va venir toucher le coin de l’élément le plus éloigné de son centre."
      },
      {
        "type": "h",
        "text": "Création de dégradés radiaux simples"
      },
      {
        "type": "p",
        "text": "Commençons avec quelques exemples simples de création de dégradés radiaux avec radial-gradient. Prenez le temps une nouvelle fois de faire l’effort de retenir la syntaxe qui ressemble à celle déjà utilisée avec les dégradés linéaires. Dans le premier exemple, on crée un dégradé radial d’arrière-plan avec background : radial-gradient(yellow, green, purple) pour notre premier div. Comme on ne précise que les couleurs du dégradé, notre dégradé sera par défaut une ellipse dont le point central est centré dans l’élément et qui va aller toucher le coin le plus éloigné de l’élément (les quatre coins en l’occurrence vu que notre dégradé est centré). Dans le deuxième exemple, on utilise le mot clef circle pour que notre dégradé ait une forme de cercle. Comme la taille de celui-ci est toujours réglée sur farthest-corner et comme notre élément est plus large que haut, les parties haute et basse du dégradé vont être rognées. Dans notre troisième exemple, on utilise des color stops juste pour vous montrer que ceux- ci vont fonctionner exactement de la même façon qu’avez les dégradés linéaires à la différence qu’ici notre dégradé a une forme d’ellipse. Pour bien calculer les color stops, il va falloir visualiser le « rayon » du dégradé. Dans le cas présent vous pouvez imaginer une ligne partant du centre de l’élément (puisque notre dégradé est centré par défaut) et allant toucher un de ses coins (puisque la taille du dégradé est par défaut farthest-side et qu’il est centré). Dans nos quatrième et cinquième exemples, on définit des points de départ ou point centraux pour nos dégradés personnalisés. Dans le quatrième exemple, on indique simplement top. Le point central du dégradé va donc se trouver contre la bordure supérieure de l’élément et être centré par défaut en largeur. Dans le cinquième exemple, on précise deux coordonnés pour définir un point d’origine totalement personnalisé avec at 20% 80%. Le point central du dégradé sera donc situé à une distance de 20% de la bordure gauche de l’élément et à 80% de la bordure haute. Les pourcentages donnés ici sont exprimés en fonction de la taille de la boite représentant l’élément. Dans le dernier exemple, on indique la valeur closest-side en taille de notre dégradé ce qui va le contraindre dans notre boite puisque dès qu’il va toucher un bord de l’élément il va s’arrêter."
      },
      {
        "type": "h",
        "text": "Création de dégradés radiaux complexes"
      },
      {
        "type": "p",
        "text": "Nous allons également bien évidemment pouvoir créer des dégradés radiaux plus complexes et complets en définissant à la fois leur taille totale, la position de leur point central, la forme de ceux-ci etc. Faites juste attention ici à ne pas écrire de déclarations aberrantes (par exemple tenter d’imposer une forme de cercle à un dégradé radial tout en lui passant deux valeurs de taille différentes). Ici, notre premier dégradé radial a une forme de cercle et un rayon d’une taille égale à la distance entre le point central du dégradé et le bord de l’élément le plus proche de ce point central. Notre deuxième dégradé a un rayon de 100px et on place le point central du dégradé contre le bord supérieur de l’élément. Comme on ne précise pas de position dans l’axe horizontal, le dégradé sera centré horizontalement par défaut. On donne deux dimensions (largeur / hauteur du « rayon ») différentes à notre troisième dégradé qui va donc de fait prendre la forme d’une ellipse. On place également le point central à une distance de la bordure gauche de l’élément égale à 25% de la largeur de la boite de l’élément et à une distance de la bordure haute de l’élément égale à 50% de la hauteur de la boite de l’élément. Dans notre dernier div, on tente de créer un dégradé avec un « rayon » de 100px de large pour 50px de haut tout en lui imposant une forme de cercle. Cela n’est évidemment pas possible et va résulter en une erreur et le dégradé ne sera pas affiché."
      },
      {
        "type": "h",
        "text": "Dégradés radiaux multiples et semi-transparents"
      },
      {
        "type": "p",
        "text": "La propriété background est tout à fait capable de gérer des fonds multiples. Nous allons donc pouvoir placer plusieurs dégradés en fond de nos éléments et les faire fusionner entre eux en utilisant des notations RGBa ou HSLa() qui vont nous permettre de rendre nos dégradés semi transparents. Nous allons également de la même manière pouvoir placer un dégradé radial et une image en fond d’un élément. Je vous rappelle ici que le premier élément de fond déclaré en CSS sera au-dessus du second et etc. Notre premier dégradé est ici totalement opaque. Le dégradé de notre deuxième div utilise les mêmes paramètres que celui du premier à la différence que nous utilisons des notations RGBa() et qu’on lui attribue des couleurs semi transparentes. Ensuite, on place deux dégradés radiaux en fond de notre troisième div. Afin qu’on puisse voir les deux, ici, j’opte pour un premier dégradé d’une taille relativement petite et utilise les notations RGBa() en déclarant une couleur d’arrivée de mon dégradé totalement transparente pour ne pas « polluer » le dégradé du dessous. Je décale suffisamment mon deuxième dégradé dans mon élément afin qu’il ne se trouve pas au même endroit que le premier. C’est la couleur de fin du deuxième dégradé qui va remplir le div. Finalement, on utilise un dégradé radial en semi-transparence avec une image de fond pour notre quatrième div."
      },
      {
        "type": "h",
        "text": "La répétition de dégradés"
      },
      {
        "type": "p",
        "text": "Nous avons vu dans la leçon précédente qu’on pouvait créer des dégradés linéaires qui vont se répéter avec la fonction repeating-linear-gradient(). Nous allons avoir accès à la même fonctionnalité avec les dégradés radiaux en utilisant cette fois-ci plutôt repeating- radial-gradient(). Cette fonction va s’utiliser de manière analogue à sa sœur servant à créer des dégradés linéaires. Nous allons une nouvelle fois pouvoir créer des transitions fluides en faisant boucler un dégradé radial sur lui-même, c’est-à-dire en lui donnant la même couleur de départ et d’arrivée."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* radial-gradient() : dégradé radial (depuis un point central) */\n\n/* Dégradé radial basique (cercle depuis le centre) */\n.radial1 {\n  background: radial-gradient(#3498db, #2c3e50);\n}\n\n/* Avec forme et taille */\n.radial2 {\n  background: radial-gradient(\n    circle at center,   /* forme : circle ou ellipse */\n    #e74c3c 0%,\n    #9b59b6 50%,\n    #2c3e50 100%\n  );\n}\n\n/* Position du centre */\n.spotlight {\n  background: radial-gradient(circle at 30% 50%, #f39c12, #e74c3c, #2c3e50);\n}\n\n/* Ellipse */\n.ovale {\n  background: radial-gradient(ellipse at center, #ecf0f1, #3498db);\n}\n\n/* Taille explicite */\n.fixe {\n  background: radial-gradient(circle 200px at center, #3498db 0%, transparent 100%);\n}\n\n/* Mots-clés de taille */\n/* closest-side | closest-corner | farthest-side | farthest-corner */\n.taille {\n  background: radial-gradient(farthest-corner at 70% 50%, #e74c3c, #3498db);\n}\n\n/* Effet halo / glow */\n.glow {\n  background: radial-gradient(circle at center, rgba(52,152,219,0.8) 0%, transparent 70%);\n}\n\n/* conic-gradient() : dégradé conique (comme une roue) */\n.roue {\n  background: conic-gradient(\n    #e74c3c 0deg, #f39c12 90deg, #f1c40f 180deg, #2ecc71 270deg, #3498db 360deg\n  );\n  border-radius: 50%;\n}\n\n/* Camembert simple avec conic-gradient */\n.camembert {\n  background: conic-gradient(\n    #3498db 0% 30%,    /* 30% bleu */\n    #e74c3c 30% 55%,   /* 25% rouge */\n    #2ecc71 55% 100%   /* 45% vert */\n  );\n  border-radius: 50%;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "52-ajouter-des-ombres-autour-des-l-ments",
    "title": "Ajouter des ombres autour des éléments",
    "blocks": [
      {
        "type": "p",
        "text": "La propriété CSS box-shadow va nous permettre de créer des ombres dites « portées » autour de nos éléments (ou plus exactement des boîtes qui représentent les éléments). Nous allons pouvoir projeter l’ombre dans n’importe quelle direction et même vers l’intérieur. Il convient de ne pas confondre box-shadow et text-shadow même si ces deux propriétés vont s’utiliser de façon similaire : la propriété text-shadow va nous permettre de créer des ombres derrière des textes tandis que box-shadow sert à créer des ombres autour de la boite de l’élément."
      },
      {
        "type": "h",
        "text": "Définition d’une ombre avec box-shadow"
      },
      {
        "type": "p",
        "text": "Pour générer une ombre portée, nous allons pouvoir passer jusqu’à 6 valeurs à la propriété box-shadow. Cependant, seules deux de ces valeurs vont être strictement obligatoires : il s’agit des valeurs définissant le décalage horizontal et du décalage vertical de l’ombre. La liste complète des valeurs que va pouvoir accepter box-shadow est la suivante (valeurs dans leur ordre d’écriture) : 1. L’inset : si on précise le mot clef inset, alors l’ombre sera tournée vers l’intérieur de la boite c’est à dire interne à l’élément. Si on omet la valeur (cas par défaut), alors l’ombre sera externe ; 2. Le décalage horizontal de l’ombre (valeur requise). Cette valeur est une longueur qu’on va donc pouvoir préciser en unités absolues (px par exemple) ou relatives (em par exemple ; attention les pourcentages ne sont pas acceptés). Si la valeur passée est positive, l’ombre sera projetée sur une distance égale à la valeur passée vers la droite en partant de l’extrémité droite de la boite. Dans le cas contraire, l’ombre sera projetée à gauche de la boite en partant de son extrémité gauche ; 3. Le décalage vertical de l’ombre (valeur requise). Cette valeur est également une longueur et va pouvoir prendre les mêmes unités que le décalage horizontal de l’ombre. Si la valeur passée est positive, l’ombre sera projetée sur une distance égale à la valeur passée vers le bas en partant du bas de la boite. Dans le cas contraire, l’ombre sera projetée vers le haut de la boite en partant de son extrémité supérieure ; 4. Le rayon de flou. Cette valeur est encore une longueur et va nous permettre de rendre notre ombre floue en lui appliquant un flou Gaussien. La formule de création d’un flou Gaussien est assez complexe ; retenez simplement qu’une moyenne entre les couleurs des pixels environnants va être établie en mixant ces couleurs ensemble. Plus la valeur du flou va être grande, plus le flou de l’ombre sera diffus et l’ombre étalée. La valeur du flou vient s’ajouter aux décalage horizontal et vertical de l’ombre ; 5. Le rayon d’étendue de l’ombre. Cette valeur est à nouveau une longueur et va servir à agrandir ou à rétrécir la taille de l’ombre. Par défaut, sa valeur est 0 et cela correspond à une ombre de même taille que la boîte. Passer une valeur positive augmentera d’autant la taille de l’ombre tandis que passer une valeur négative la rétrécira d’autant ; 6. La couleur de l’ombre. Nous allons pouvoir définir la couleur de notre ombre. Toutes les valeurs de couleurs sont ici acceptées : nom de couleur, hex, RGB, RGBa… Avant de passer à la création d’ombres avec box-shadow, j’aimerais attirer votre attention sur un point qui me semble essentiel de connaitre pour bien comprendre ensuite le comportement des ombres créées : la propriété box-shadow à elle seule va suffire à créer une ombre qui va par défaut faire la taille de la boite et être centrée derrière la boite. Cette ombre va donc être éclipsée par la boite et être invisible mais elle est bien présente. Les valeurs données à box-shadow ne vont que nous permettre d’agrandir ou de rétrécir cette ombre, de la décaler par rapport à la boite ou de lui appliquer un effet de flou afin d’obtenir une ombre visible autour de notre boite. Savoir cela va être très important notamment pour comprendre le résultat lié à la définition d’un rayon de flou pour une ombre. Exemples d’utilisation de box-shadow et de création d’ombres en CSS Voyons immédiatement comment utiliser la propriété box-shadow en pratique. Dans les exemples suivants, nous allons commencer par ajouter des ombres très simples puis nous créerons des ombres de plus en plus complexes avec box-shadow."
      },
      {
        "type": "h",
        "text": "Création d’ombres simples"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir créer des ombres très basiques autour de nos boites en ne renseignant que deux valeurs à la propriété box-shadow : la distance de projection ou de décalage de l’ombre sur le plan horizontal et sa distance de projection sur l’axe vertical. En donnant une valeur positive au paramètre « décalage horizontal », l’ombre sera projetée à droite de la boite. Dans le cas contraire, elle sera projetée à gauche. En donnant une valeur positive au paramètre « décalage vertical », l’ombre sera projetée en dessous de la boite. Dans le cas contraire, elle sera projetée au-dessus. En passant des valeurs nulles, l’ombre ne sera pas projetée et restera derrière la boite. Attention : l’ombre existe quand même, elle n’est juste pas visible. Notez que si on ne donne pas explicitement une couleur à l’ombre, alors elle sera de la même couleur que le texte de la boite. Regardez plutôt les exemples suivants (les styles appliqués aux différents div ne sont qu’esthétiques, préoccupez-vous seulement des ombres définies avec box-shadow :"
      },
      {
        "type": "h",
        "text": "Ajout de la valeur inset pour créer une ombre interne"
      },
      {
        "type": "p",
        "text": "La propriété box-shadow va également nous permettre de créer des ombres internes à nos boites, c’est-à-dire de projeter l’ombre à l’intérieur de l’élément plutôt qu’à l’extérieur en lui ajoutant la valeur inset en première valeur comme cela : Notez bien ici que la direction des ombres est toujours la même. Cependant, comme on demande à ce que l’ombre soit projetée à l’intérieur de la boite, l’ombre va être visible de l’autre côté de la boite par rapport à une ombre externe définie de la même façon. C’est simplement le « point de départ » de l’ombre qui change."
      },
      {
        "type": "h",
        "text": "Création d’ombres colorées et / ou semi transparentes"
      },
      {
        "type": "p",
        "text": "Par défaut, l’ombre créée par box-shadow va être de même couleur que le texte de la boite à laquelle on applique l’ombre. Nous allons cependant pouvoir choisir la couleur de notre ombre. Pour cela, il suffira de la renseigner en valeur de box-shadow. Cette propriété accepte toutes les notations de couleurs, que ce soit une couleur nommée, une notation RGB, hexadécimale ou même une notation RGBa qui va nous permettre de créer des ombres semi transparentes. Note : La valeur « couleur » de l’ombre sera la dernière valeur à indiquer dans box- shadow en CSS."
      },
      {
        "type": "h",
        "text": "Ajout d’un flou et ombre centrée autour de la boite"
      },
      {
        "type": "p",
        "text": "Nous avons vu que pour centrer une ombre par rapport à la boite, il suffisait d’indiquer des décalages horizontal et vertical de 0px lors de la définition de l’ombre avec box-shadow. Cela fait sens : par défaut, l’ombre d’une boite se trouve derrière la boite et la propriété box-shadow va nous permettre, entre autres, de la décaler. Jusqu’à présent, nos ombres centrées n’étaient pas visibles puisqu’elles faisaient exactement la taille de notre boite. Nous allons cependant pouvoir les faire apparaitre en ajoutant un flou à notre ombre (la « taille » du flou va s’ajouter à la taille de l’ombre ou en modifiant la taille de celle-ci. Essayons déjà d’ajouter un flou à nos ombres en ajoutant une nouvelle valeur à box- shadow et regardons les résultats ensemble. La valeur du flou va se placer après les valeurs liées aux décalages dans la propriété CSS. Pour créer cet effet de flou, une moyenne entre les couleurs des pixels environnants va être établie en mixant ces couleurs ensemble. Plus la valeur du flou va être grande, plus le flou de l’ombre sera diffus et l’ombre étalée. Notez que le flou s’applique tout autour de l’ombre. Ici, vous pouvez observer que notre la partie floue de notre ombre apparait également au- dessus et en dessous de notre avant dernière boite qui possède une ombre centrée verticalement par rapport à la boite. Ce comportement est dû au fait que la valeur du flou vient s’ajouter à la taille de l’ombre. Comme l’ombre fait exactement la taille de la boite par défaut, si celle-ci est centrée et si on ajoute un flou autour de l’ombre, alors la partie floue de l’ombre dépassera de la boite et sera visible. C’est la même chose qui se passe dans notre dernier exemple : vous pouvez remarque que seule la partie floue de l’ombre est visible."
      },
      {
        "type": "h",
        "text": "Une ombre plus grande ou plus petite que notre boite"
      },
      {
        "type": "p",
        "text": "Finalement, nous allons pouvoir modifier la taille de départ de notre ombre pour que celle- ci dépasse par défaut de la boite ou, au contraire, soit plus petite qu’elle. Les valeurs positives agrandiront (ou étaleront) l’ombre et les valeurs négatives rétréciront l’ombre. Nous allons renseigner cette valeur correspondant au rayon d’étalement de l’ombre après la valeur du flou dans box-shadow. Nous pouvons voir nettement dans le premier exemple que la taille de notre ombre a été agrandie puisque celle-ci est centrée et ne possède pas de flou mais dépasse bien de la boite. Parmi ces exemples, j’attire votre attention sur les 4è et dernier, c’est à dire sur les deux ombres qu’on a rétrécit. En effet, ces deux ombres sont censées être décalées vers le bas et vers la droite. Or, on ne voit pas le décalage droit. Pour comprendre pourquoi, il suffit d’analyser le contenu de notre propriété box-shadow dans chacun des cas. Dans le 4è exemple, l’ombre possède un décalage vers la droite de 10px et pas de flou. Or, on demande également à ce que l’ombre soit rétrécie de 10px. Ainsi, l’ombre va bien être décalée de 10px vers la droite mais comme elle fait désormais 10px de moins que la boite, elle ne va pas dépasser. Dans notre dernier exemple, on définit un décalage vers la droite de 5px pour notre ombre. De plus, on lui ajoute un flou de 5px qui vient s’ajouter à la taille de l’ombre. Notre ombre devrait donc à nouveau dépasser de 10px. Cependant, ici aussi, on demande à ce que l’ombre soit rétrécie de 10px. L’ombre va donc bien à nouveau être décalée de 5px et un flou de 5px va bien être appliqué mais tout cela ne sera pas visible car compensé par le rétrécissement de l’ombre."
      },
      {
        "type": "h",
        "text": "Création d’ombres multiples autour d’un élément"
      },
      {
        "type": "p",
        "text": "Nous allons tout à fait pouvoir définir plusieurs ombres autour de nos éléments en utilisant box-shadow. Pour cela, il suffit de séparer nos différentes ombres par des virgules lors de leur déclaration avec box-shadow. Appliquer plusieurs ombres d’un coup à un élément peut nous permettre de créer différents niveaux d’opacité d’ombre et de créer des effets 3D intéressants. Ici, nous réutilisons simplement ce que nous avons vu jusqu’à présent pour créer des ombres. Simplement, nous déclarons plusieurs ombres d’aspects et de tailles différents autour de nos éléments div."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* box-shadow : ombre portée autour d'une boite */\n/* Syntaxe : offset-x offset-y blur-radius spread-radius color */\n\n/* Ombre basique */\n.carte { box-shadow: 4px 4px 8px rgba(0,0,0,0.2); }\n\n/* Ombre avec spread-radius (extension) */\n.focus { box-shadow: 0 0 0 3px rgba(52,152,219,0.5); }\n\n/* Ombre vers le haut */\n.flottant { box-shadow: 0 -4px 8px rgba(0,0,0,0.1); }\n\n/* Ombre interne (inset) */\n.creux { box-shadow: inset 0 2px 6px rgba(0,0,0,0.2); }\n\n/* Ombres multiples (séparées par des virgules) */\n.profond {\n  box-shadow:\n    0 1px 3px rgba(0,0,0,0.12),\n    0 4px 8px rgba(0,0,0,0.1),\n    0 12px 24px rgba(0,0,0,0.08);\n}\n\n/* Effets classiques */\n/* Ombre Material Design */\n.material-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }\n.material-3 { box-shadow: 0 10px 30px rgba(0,0,0,0.19), 0 6px 10px rgba(0,0,0,0.23); }\n.material-5 { box-shadow: 0 19px 60px rgba(0,0,0,0.30), 0 15px 20px rgba(0,0,0,0.22); }\n\n/* Ombre colorée */\n.neomorphe {\n  box-shadow:\n    -6px -6px 12px rgba(255,255,255,0.8),\n    6px 6px 12px rgba(0,0,0,0.1);\n}\n\n/* Bouton avec ombre interactive */\n.btn {\n  box-shadow: 0 4px 15px rgba(52,152,219,0.4);\n  transition: box-shadow 0.3s, transform 0.3s;\n}\n.btn:hover {\n  box-shadow: 0 8px 25px rgba(52,152,219,0.5);\n  transform: translateY(-2px);\n}\n\n/* filter: drop-shadow() : pour les images avec transparence */\n.logo { filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.3)); }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "53-les-s-lecteurs-css-d-attributs",
    "title": "Les sélecteurs CSS d’attributs",
    "blocks": [
      {
        "type": "p",
        "text": "L’une des grandes forces du CSS réside dans le fait qu’on va pouvoir cibler très précisément tel ou tel élément HTML grâce à la grande variété de ces sélecteurs. Cette partie est dédiée à l’étude de trois types de sélecteurs que nous n’avons pas encore étudiés : les sélecteurs d’attributs, les pseudo-classes et les pseudo-éléments. Dans cette leçon, nous allons déjà apprendre à manipuler les sélecteurs d’attributs qui vont nous permettre de sélectionner un élément HTML selon qu’il possède un attribut avec une certaine valeur ou pas."
      },
      {
        "type": "h",
        "text": "Sélectionner un élément selon qu’il possède un attribut"
      },
      {
        "type": "p",
        "text": "Pour commencer, nous allons en CSS pouvoir cibler un élément HTML selon qu’il possède un certain attribut comme un attribut href, src, target, class, etc. Pour faire cela, nous allons utiliser la syntaxe suivante : E[foo] où « E » représente un nom d’élément et « foo » représente un nom d’attribut. Par exemple, on va pouvoir cibler tous les éléments a qui possèdent un attribut target en écrivant a[target] ou encore tous les éléments p qui possèdent un attribut class avec p[class]. Sélectionner un élément selon qu’il possède un attribut avec une valeur précise Nous allons également pouvoir sélectionner de façon plus précise les éléments HTML possédant un attribut auquel on a attribué une valeur en particulier en CSS. Par exemple, nous allons pouvoir sélectionner tous les éléments a possédant un attribut rel avec une valeur exactement égale à nofollow en utilisant la syntaxe a[rel=\"nofollow\"]. Note : l’attribut rel sert à indiquer la relation entre le document de départ et le document lié. Ici, la valeur nofollow permet d’indiquer aux robots des moteurs de recherche qu’il n’est pas nécessaire de suivre le lien. Cet attribut est souvent utilisé à des fins d’optimisation du référencement. Sélectionner un élément selon qu’il possède un attribut contenant une sous valeur distincte (séparée du reste par un espace) Nous allons encore pouvoir sélectionner en CSS un élément HTML possédant un attribut qui contient une certaine sous valeur distincte des autres, c’est-à-dire séparée des autres par une espace. Ici, je parle de « sous valeur » pour désigner une partie de la valeur d’un attribut, c’est-à- dire pour désigner un ou plusieurs caractères inclus dans la valeur passée à l’attribut. Par exemple, on va pouvoir cibler tous les éléments img d’une page dont l’attribut alt contient le texte « soleil » grâce à la syntaxe suivante : img[alt~=\"soleil\"]. Sélectionner un élément selon qu’il possède un attribut commençant par une certaine sous valeur Pour sélectionner un élément E selon qu’il possède un attribut foo commençant par la sous valeur val, nous utiliserons la syntaxe suivante : E[foo^=val]. En utilisant ce sélecteur, on n’impose pas plus de contrainte sur la sous valeur val. Celle- ci peut donc faire partie d’un mot plus grand par exemple. On va également pouvoir utiliser le sélecteur E[foo|=val] dans le cas où l’on souhaite cibler un élément possédant un attribut foo dont la valeur est exactement val ou commence par val suivi d’un tiret -(hyphen) en anglais). Sélectionner un élément selon qu’il possède un attribut se finissant par une certaine sous valeur Nous allons encore pouvoir en CSS cibler des éléments HTML possédant un attribut dont la valeur se termine par une certaine valeur, sans plus de restriction que cela. Nous allons ainsi par exemple pouvoir cibler tous nos éléments a possédant un attribut href dont la valeur se termine par « .com » avec la syntaxe suivante : a[href$=\".com\"]. Sélectionner un élément selon qu’il possède un attribut possédant une valeur parmi d’autres Finalement, on va pouvoir cibler en CSS un élément HTML qui possède un attribut contenant lui-même une certaine sous valeur sans aucune restriction en utilisant la syntaxe E[foo*=\"val\"] (où E représente un élément, foo représente un attribut et val une sous valeur."
      },
      {
        "type": "h",
        "text": "Rendre ses sélecteurs d’attributs insensibles à la casse"
      },
      {
        "type": "p",
        "text": "Par défaut, les sélecteurs d’attributs vont être sensibles à la casse c’est-à-dire faire la différence entre un caractère en majuscule et en minuscule. Ainsi, les valeurs « un », « UN », « Un » et « uN » vont être considérées comme différentes. On va pouvoir changer ce comportement et rendre nos sélecteurs insensibles à la casse en ajoutant la lettre i (I minuscule) à la fin de nos sélecteurs d’attributs. Attention cependant : cette notation est récente est n’est à l’heure actuelle par encore une recommandation et n’est pas supportée par les navigateurs Edge ni d’Internet Explorer."
      },
      {
        "type": "h",
        "text": "Tableau récapitulatif des différents sélecteurs d’attributs"
      },
      {
        "type": "p",
        "text": "Vous pourrez retrouver ci-dessous les différents sélecteurs d’attributs avec leur définition et la version CSS où ils ont été passés en recommandation."
      },
      {
        "type": "h",
        "text": "Recommandation"
      },
      {
        "type": "p",
        "text": "Sélecteur Description CSS"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E possédant un"
      },
      {
        "type": "p",
        "text": "E[foo] CSS2 attribut foo"
      },
      {
        "type": "h",
        "text": "Recommandation"
      },
      {
        "type": "p",
        "text": "Sélecteur Description CSS"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E possédant un"
      },
      {
        "type": "p",
        "text": "E[foo=\"bar\"] attribut foo dont la valeur est exactement CSS2 « bar » Sélectionne tout élément E possédant un attribut foo dont la valeur contient E[foo~=\"bar\"] distinctement « bar » (c’est-à-dire dont la CSS2 valeur contient le mot « bar » séparé du reste par des espaces) Sélectionne tout élément E possédant un attribut foo dont la valeur commence par E[foo|=\"en\"] CSS2 « en » séparé du reste par un tiret (ou hyphen en anglais)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E possédant un"
      },
      {
        "type": "p",
        "text": "E[foo^=\"bar\"] attribut foo dont la valeur commence CSS3 exactement par « bar »"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E possédant un"
      },
      {
        "type": "p",
        "text": "E[foo$=\"bar\"] attribut foo dont la valeur se termine CSS3 exactement par « bar »"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E possédant un"
      },
      {
        "type": "p",
        "text": "E[foo*=\"bar\"] attribut foo dont la valeur contient la CSS3 valeur « bar » L’ajout d’un i à la fin des sélecteurs précédents rend la sélection « case insensitive » c’est-à-dire « insensible à la E[foo{~|^$*}=\"bar\" casse ». La valeur recherchée ne tiendra CSS4 i] pas compte de la casse, c’est-à-dire de l’utilisation de majuscules et de minuscules."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* SÉLECTEURS D'ATTRIBUTS : cibler les éléments par leurs attributs */\n\n/* [attr] : l'attribut existe (quelle que soit sa valeur) */\ninput[required] { border-color: red; }         /* Champs obligatoires */\n[disabled]      { opacity: 0.5; cursor: not-allowed; }\n\n/* [attr=\"valeur\"] : valeur exacte */\ninput[type=\"text\"]     { border: 1px solid #ccc; }\ninput[type=\"email\"]    { border: 1px solid #3498db; }\ninput[type=\"password\"] { border: 1px solid #e74c3c; }\na[target=\"_blank\"]     { padding-right: 15px; } /* Liens ouvrant dans un onglet */\n\n/* [attr~=\"valeur\"] : valeur dans une liste séparée par des espaces */\n[class~=\"btn\"] { cursor: pointer; } /* Elements avec \"btn\" dans leur class */\n\n/* [attr|=\"valeur\"] : valeur = \"valeur\" ou commence par \"valeur-\" */\n[lang|=\"fr\"] { font-family: 'Times New Roman', serif; }\n/* Correspond à lang=\"fr\" et lang=\"fr-FR\" etc. */\n\n/* [attr^=\"valeur\"] : valeur COMMENCE PAR */\na[href^=\"https://\"] { color: green; }  /* Liens HTTPS sécurisés */\na[href^=\"mailto:\"]  { color: orange; } /* Liens email */\na[href^=\"tel:\"]     { color: blue; }   /* Liens téléphone */\na[href^=\"http://\"]  { color: red; }    /* Liens non sécurisés */\n\n/* [attr$=\"valeur\"] : valeur SE TERMINE PAR */\na[href$=\".pdf\"]  { background: url('pdf-icon.png') no-repeat right center; }\na[href$=\".docx\"] { color: #2980b9; }\nimg[src$=\".webp\"] { border: 2px solid green; }\n\n/* [attr*=\"valeur\"] : valeur CONTIENT */\na[href*=\"google\"] { color: #4285f4; }    /* Liens vers Google */\n[class*=\"btn-\"]   { border-radius: 4px; } /* Toutes les variantes de boutons */\n\n/* Insensible à la casse (ajouter i avant ]) */\na[href$=\".PDF\" i] { color: red; } /* Correspond aussi à .pdf */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "54-les-pseudo-classes-css",
    "title": "Les pseudo-classes CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Les pseudo-classes vont nous permettre d’appliquer des styles à des éléments HTML uniquement lorsque ceux-ci sont dans un certain état (cliqués, activés, etc.). Il existe de nombreuses pseudo-classes en CSS. Dans cette leçon, nous n’allons étudier en détail que les plus utilisées car toutes les pseudo-classes s’utilisent de manière similaire (la syntaxe sera toujours la même). Ainsi, il vous suffira de comprendre comment appliquer une pseudo-classe pour savoir toutes les utiliser, à condition bien évidemment de savoir à quoi correspond chaque pseudo-classe. Pour cela, je vais également vous fournir un tableau récapitulatif de toutes les pseudo- classes actuellement disponibles afin que vous puissiez piocher dedans selon vos besoins."
      },
      {
        "type": "h",
        "text": "Définition et syntaxe des pseudo-classes"
      },
      {
        "type": "p",
        "text": "Les pseudo-classes vont nous permettre de cibler des éléments HTML en fonction de leur état, ou plus exactement d’appliquer des règles CSS à des éléments HTML uniquement dans un certain contexte (lorsqu’ils sont dans un certain état). Ainsi, nous allons pouvoir modifier les styles d’un lien HTML selon que le curseur de la souris d’un visiteur soit dessus (état hover) ou qu’il ait été déjà cliqué (état visited). Pour utiliser une pseudo classe en CSS, il faudra commencer avec un sélecteur « classique » (simple ou complexe) qui sera suivi du caractère : puis du nom de la pseudo- classe ou de l’état à appliquer. Par exemple, on va pouvoir changer la couleur de fond des éléments div d’une page en orange lors du survol du curseur de la souris uniquement en écrivant en CSS div:hover{background-color : orange ;}."
      },
      {
        "type": "h",
        "text": "Les pseudo-classes :hover, :visited, :active et :link"
      },
      {
        "type": "p",
        "text": "La pseudo-classe :hover va nous permettre d’appliquer des styles à un élément HTML uniquement lorsque celui-ci est survolé par la souris d’un utilisateur. Cette pseudo-classe peut être utilisée avec la majorité des éléments HTML mais on l’utilisera généralement pour appliquer des styles différents à des liens lorsqu’un utilisateur passe sa souris dessus. La pseudo-classe CSS :visited va nous permettre d’appliquer des styles à un élément déjà visité, c’est-à-dire déjà cliqué. En pratique, cette pseudo-classe va une nouvelle fois surtout être utilisée avec des éléments de lien. Ainsi, on va pouvoir changer l’apparence d’un lien après que celui-ci ait été cliqué, lorsque l’utilisateur revient sur notre page de départ. La pseudo-classe CSS :active va elle nous permettre de modifier les styles d’un élément HTML lors d’un état très particulier qui est le moment où l’on clique sur l’élément. Pour bien visualiser cet état, je vous conseille de rester cliqué sur l’élément en question le temps de voir les changements de style. Une nouvelle fois, en pratique, cette pseudo-classe va généralement être utilisée pour modifier l’apparence des liens au moment du clic. La pseudo-classe :link va elle nous permettre au contraire de cibler tous les liens non visités et de leur appliquer des styles particuliers en CSS. Notez qu’en cas d’application de plusieurs des pseudo-classes ci-dessus à un élément on respectera l’ordre d’écriture suivant en CSS : d’abord les déclarations liées à :link puis :visited puis :hover et enfin :active. Cela va permettre d’avoir le comportement le plus logique en cas de conflit : les styles liés à :active s’appliqueront uniquement lors du clic sur l’élément, ceux liés à :hover s’appliqueront lors du survol sans clic et etc. Les pseudo-classes :first-child, :first-of-type, :last-child et :last-of-type Les pseudo-classes :first-child et :first-of-type vont nous permettre de sélectionner respectivement un élément qui va être le premier enfant de son parent et un élément qui va être le premier élément de ce type de son parent. Par exemple, le sélecteur p:first-child va sélectionner tous les éléments p d’une page qui sont les premiers enfant de leur parent tandis que le sélecteur CSS p:first-of-type va nous permettre de sélectionner tous les éléments p qui sont le premier élément p enfant de leur parent. A l’inverse, les pseudo-classes CSS :last-child et :last-of-type vont nous permettre de sélectionner respectivement un élément qui va être le dernier enfant de son parent et un élément qui va être le dernier élément de ce type de son parent. Ainsi, le sélecteur CSS last-child va sélectionner tous les éléments p d’une page qui sont les derniers enfants de leur parent tandis qu’on va pouvoir sélectionner tous les éléments p qui sont le dernier élément p enfant de leur parent grâce au sélecteur CSS last-of-type. Notez que dans si plusieurs pseudo-classes ciblent un même élément, alors les styles appliqués en cas de conflit à l’élément seront une nouvelle fois ceux de la dernière pseudo- classe déclarée en CSS. Les pseudo-classes :nth-child() et :nth-of-type() Pour pouvoir cibler n’importe quel élément HTML en fonction de sa place dans le document, nous allons également pouvoir utiliser les sélecteurs CSS :nth-child(n) et nth- of-type(n) qui vont nous permettre de sélectionner un élément HTML qui est le énième enfant de son parent ou un élément qui est le énième enfant de ce type de son parent. Par exemple, le sélecteur CSS p:nth-child(2) va nous permettre de sélectionner tous les éléments p qui sont les deuxièmes enfants de leur parent tandis que le sélecteur p:nth-of- type(2) sélectionne tous les paragraphes qui sont les deuxièmes enfants de type p de leur parent. Là encore, si plusieurs pseudo-classes ciblent le même élément (que ce soit :first- child, :nth-child(), :nth-of-type() ou :last-child, etc. alors en cas de conflit les styles de la dernière pseudo-classe déclarée s’appliqueront."
      },
      {
        "type": "h",
        "text": "Liste complète des pseudo-classes et définition"
      },
      {
        "type": "p",
        "text": "Vous pourrez trouver ci-dessous toutes les pseudo-classes avec la description de leur comportement et la version CSS dans laquelle elles sont passées comme recommandation pour référence. Les pseudo-classes dont la version est « 3/4 » sont celles dont la définition initiale a été posée avec le CSS3 mais dont la définition va certainement être modifiée avec la prochaine version du CSS. De plus, notez que certaines pseudo-classes ont été créées pour ne fonctionner qu’avec certains éléments en particulier et notamment avec des éléments de formulaire que nous étudierons plus tard."
      },
      {
        "type": "h",
        "text": "Version"
      },
      {
        "type": "p",
        "text": "Sélecteur Description CSS"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E représentant l’ancre d’un lien"
      },
      {
        "type": "p",
        "text": "E:link CSS1 non visité jusqu’à présent"
      },
      {
        "type": "h",
        "text": "Version"
      },
      {
        "type": "p",
        "text": "Sélecteur Description CSS"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E représentant l’ancre d’un lien"
      },
      {
        "type": "p",
        "text": "E:visited CSS1 déjà visité"
      },
      {
        "type": "h",
        "text": "E:active         Sélectionne un élément E au moment où il est cliqué         CSS1"
      },
      {
        "type": "h",
        "text": "Sélectionne un élément E lorsque le curseur de la souris"
      },
      {
        "type": "p",
        "text": "E:hover CSS2 passe dessus"
      },
      {
        "type": "h",
        "text": "Sélectionne un élément E qui a le focus (dans lequel le"
      },
      {
        "type": "p",
        "text": "E:focus CSS2 curseur de la souris est placé)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E étant le premier enfant de"
      },
      {
        "type": "p",
        "text": "E:first-child CSS2 son parent"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E dont l’attribut langage"
      },
      {
        "type": "p",
        "text": "E:lang(fr) CSS2 possède la valeur « fr »"
      },
      {
        "type": "h",
        "text": "Sélectionne un élément E contenant une ancre qui vient"
      },
      {
        "type": "p",
        "text": "E:target CSS3 d’être cliquée à partir d’un lien ancre"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E avec lequel l’utilisateur peut"
      },
      {
        "type": "p",
        "text": "E:enabled CSS3 interagir et qui est activé"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E avec lequel l’utilisateur peut"
      },
      {
        "type": "p",
        "text": "E:disabled CSS3 interagir et qui est désactivé"
      },
      {
        "type": "h",
        "text": "E:root           Sélectionne un élément E racine du document                 CSS3"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E qui ne possède pas d’enfant"
      },
      {
        "type": "p",
        "text": "E:empty CSS3 (ni de nœud de type texte)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E étant le n-ième enfant de son"
      },
      {
        "type": "p",
        "text": "E:nth-child(n) CSS3 parent"
      },
      {
        "type": "h",
        "text": "E:nth-last-      Sélectionne tout élément E étant le n-ième enfant de son"
      },
      {
        "type": "p",
        "text": "CSS3 child(n) parent en comptant les enfants à partir du dernier"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input coché au sens"
      },
      {
        "type": "p",
        "text": "E:checked CSS3 large (checked ou selected)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E étant le dernier enfant de son"
      },
      {
        "type": "p",
        "text": "E:last-child CSS3 parent"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E qui est le seul enfant de son"
      },
      {
        "type": "p",
        "text": "E:only-child CSS3 parent"
      },
      {
        "type": "h",
        "text": "Version"
      },
      {
        "type": "p",
        "text": "Sélecteur Description CSS"
      },
      {
        "type": "h",
        "text": "E:nth-of-         Sélectionne tout élément E étant le n-ième enfant d’un"
      },
      {
        "type": "p",
        "text": "CSS3 type(n) certain type par rapport à son parent"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E étant le n-ième enfant d’un"
      },
      {
        "type": "p",
        "text": "E:nth-last-of- certain type par rapport à son parent en comptant à partir CSS3 type(n) de la fin"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E premier enfant de son type"
      },
      {
        "type": "p",
        "text": "E:first-of-type CSS3 par rapport à son parent"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E dernier enfant de son type"
      },
      {
        "type": "p",
        "text": "E:last-of-type CSS3 par rapport à son parent"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E seul enfant de son type par"
      },
      {
        "type": "p",
        "text": "E:only-of-type CSS3 rapport à son parent"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input avec lequel"
      },
      {
        "type": "p",
        "text": "E:read-write l’utilisateur peut interagir (comme un champ dans lequel 3-UI/4 il peut écrire par exemple)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input avec lequel"
      },
      {
        "type": "p",
        "text": "E:read-only l’utilisateur ne peut pas interagir (éléments possédant un 3-UI/4 attribut disabled par exemple) E:placeholder- Sélectionne tout élément E qui affiche actuellement la 3-UI/4 shown valeur de son attribut placeholder"
      },
      {
        "type": "h",
        "text": "Sélectionne un élément E dans une liste ou un groupe"
      },
      {
        "type": "p",
        "text": "E:default 3-UI/4 qui est l’élément défini par défaut"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input dont la valeur"
      },
      {
        "type": "p",
        "text": "E:valid est évaluée comme valide (dont la valeur possède une 3-UI/4 forme correspondant à ce qui est attendu)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input dont la valeur"
      },
      {
        "type": "p",
        "text": "E:invalid est évaluée comme invalide (valeur ne correspondant 3-UI/4 pas à ce qui est attendu)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input dont la valeur"
      },
      {
        "type": "p",
        "text": "E:in-range fournie se situe dans une fourchette de valeurs 3-UI/4 prédéfinies"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input dont la valeur"
      },
      {
        "type": "p",
        "text": "E:out-of-range fournie se situe en dehors d’une certaine fourchette de 3-UI/4 valeurs prédéfinies"
      },
      {
        "type": "h",
        "text": "Version"
      },
      {
        "type": "p",
        "text": "Sélecteur Description CSS"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input dont la valeur"
      },
      {
        "type": "p",
        "text": "E:required doit être renseignée (élément possédant un attribut 3-UI/4 required)"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E de type input dont la valeur"
      },
      {
        "type": "p",
        "text": "E:optional 3-UI/4 ne doit pas obligatoirement être renseignée"
      },
      {
        "type": "h",
        "text": "Sélectionne tout élément E qui n’est pas de type E1 et"
      },
      {
        "type": "p",
        "text": "E:not(E1, .c1) 3/4 qui ne possède pas d’attribut class= »c1″ Notez qu’il existe encore d’autres pseudo-classes très particulières comme :first (pour gérer l’impression de la première page d’un document) ou qui ne sont pas encore au statut de recommandation mais qui sont pour le moment en développement comme dir(), scope, drop, indeterminate, etc."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* PSEUDO-CLASSES : état ou position d'un élément */\n\n/* États de lien (LVHA - l'ordre est important !) */\na:link    { color: #3498db; }       /* Non visité */\na:visited { color: #9b59b6; }       /* Visité */\na:hover   { color: #2980b9; text-decoration: underline; } /* Survol */\na:active  { color: #e74c3c; }       /* Cliqué */\n\n/* États d'interaction */\nbutton:hover   { background: #2980b9; transform: translateY(-1px); }\nbutton:active  { transform: translateY(0); }\nbutton:focus   { outline: 2px solid #3498db; outline-offset: 2px; }\nbutton:disabled { opacity: 0.5; cursor: not-allowed; }\n\ninput:focus    { border-color: #3498db; box-shadow: 0 0 0 3px rgba(52,152,219,0.2); }\ninput:invalid  { border-color: #e74c3c; }\ninput:valid    { border-color: #2ecc71; }\ninput:placeholder-shown { border-style: dashed; }\ninput:checked  { accent-color: #3498db; }\n\n/* Position dans les éléments enfants */\nli:first-child      { font-weight: bold; }\nli:last-child       { border-bottom: none; }\nli:nth-child(2)     { color: red; }           /* 2ème enfant */\nli:nth-child(odd)   { background: #f9f9f9; }  /* Impairs (1, 3, 5...) */\nli:nth-child(even)  { background: #fff; }     /* Pairs (2, 4, 6...) */\nli:nth-child(3n+1)  { color: blue; }          /* 1, 4, 7, 10... */\n\n/* Type spécifique */\np:first-of-type { font-size: 1.2em; }         /* 1er <p> du parent */\nh2:last-of-type { margin-bottom: 0; }\n\n/* :not() : négation */\nbutton:not(.btn-danger) { background: #3498db; }\nli:not(:last-child) { border-bottom: 1px solid #eee; }\n\n/* :is() et :where() : groupes de sélecteurs */\n:is(h1, h2, h3) { line-height: 1.3; }\n:where(section, article) > p:first-child { font-size: 1.1em; }\n\n/* :root : l'élément racine (<html>) */\n:root { --couleur: #3498db; }\n\n/* :empty : élément vide */\np:empty { display: none; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "55-les-pseudo-l-ments-css",
    "title": "Les pseudo-éléments CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Les pseudo-éléments CSS vont nous permettre de ne cibler qu’une partie d’un élément HTML pour lui appliquer des styles. Il convient de ne pas les confondre avec les pseudo- classes qui elles servent à cibler un élément selon son état. Les pseudo-éléments ont une syntaxe particulière puisqu’il faudra utiliser un double deux- points :: entre le sélecteur élément et le mot clef désignant la partie de l’élément qui va être ciblé. Il existe aujourd’hui 4 pseudo-éléments qui sont des recommandations du W3C :"
      },
      {
        "type": "list",
        "items": [
          "::first-letter ;",
          "::first-line ;",
          "::before ;",
          "::after."
        ]
      },
      {
        "type": "p",
        "text": "Il existe également un cinquième pseudo-élément ::selection qu’il convient de connaitre car celui-ci devait faire partie des recommandations du CSS3 puis a finalement été abandonné et est de nouveau candidat aujourd’hui. Insérer du contenu avant ou après le contenu d’un élément HTML Les pseudo-éléments ::before et ::after vont nous permettre respectivement de cibler l’emplacement avant et après le contenu d’un élément HTML. Dans l’immense majorité des cas nous allons utiliser ces pseudo-éléments de concert avec la propriété CSS content pour ajouter du texte avant ou après le contenu de l’élément. Le pseudo-élément ::after va également nous permettre de réaliser le clearfix CSS pour qu’un élément parent contienne ses enfants flottants. En effet, en appliquant ::after à un élément contenant des éléments flottants, on va créer un pseudo-élément qui sera le dernier enfant du parent. Il suffit ensuite d’appliquer un clear à ce pseudo élément tout en lui attribuant une boite de contenu avec content et en lui définissant un type d’affichage avec display."
      },
      {
        "type": "h",
        "text": "Sélectionner la première lettre d’un élément en CSS"
      },
      {
        "type": "p",
        "text": "Le pseudo-élément ::first-letter va nous permettre de sélectionner uniquement la première lettre du contenu d’éléments HTML. Nous allons ensuite pouvoir appliquer cette lettre toutes sortes de mise en forme. Par exemple, pour sélectionner la première lettre de tous les paragraphes d’une page, nous utiliserons le sélecteur CSS p::first-letter."
      },
      {
        "type": "h",
        "text": "Sélectionner la première ligne d’un élément en CSS"
      },
      {
        "type": "p",
        "text": "De manière analogue au pseudo-élément ::first-letter, nous allons pouvoir sélectionner uniquement la première ligne d’un élément HTML grâce au pseudo-élément ::first- line pour lui appliquer des styles. Attention, la mise en forme va ici être dépendante de l’écran de chacun de vos visiteurs puisque la « première ligne » correspond ici à la première ligne dans le rendu visuel de la page de vos visiteurs. Ainsi, pour sélectionner la première ligne de tous les paragraphes de notre page nous utiliserons le sélecteur CSS p::first-line. Cibler la partie d’un élément déjà sélectionnée par l’utilisateur Finalement, nous allons pouvoir appliquer des styles particuliers à certaines parties de nos éléments HTML en fonction de ce qui est déjà présélectionné par l’utilisateur grâce au pseudo-élément ::selection. Les styles n’apparaitront que sur la partie de l’élément sélectionnée par un utilisateur. Pour sélectionner et appliquer des mises en forme particulières à la partie sélectionnée de tous les paragraphes d’une page, nous utiliserons donc le sélecteur CSS p::selection. Attention toutefois à la compatibilité et à l’utilisation de ce sélecteur : celui-ci devait être intégré à la sortie du CSS3 mais a finalement été abandonné. Il fera normalement parti des recommandations pour le CSS4. Je vous en parle ici car le fait que ce pseudo-élément devait faire partie des recommandations du CSS3 fait que la plupart des navigateurs le supportent déjà bien."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* PSEUDO-ÉLÉMENTS : parties virtuelles d'un élément (notés avec ::) */\n\n/* ::before et ::after : insérer du contenu avant/après le contenu */\n/* content est OBLIGATOIRE (même vide \"\") */\n\n/* Exemple : guillemets automatiques */\nblockquote::before { content: '« '; color: #3498db; }\nblockquote::after  { content: ' »'; color: #3498db; }\n\n/* Icône avant les liens externes */\na[target=\"_blank\"]::after {\n  content: ' ↗';\n  font-size: 0.8em;\n}\n\n/* Séparateur entre les éléments nav */\nnav li + li::before {\n  content: '|';\n  margin: 0 10px;\n  color: #ccc;\n}\n\n/* Élément décoratif pur */\n.section-titre::after {\n  content: '';          /* Vide mais obligatoire */\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: #3498db;\n  margin-top: 8px;\n}\n\n/* Clearfix moderne */\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n\n/* ::first-line : première ligne d'un paragraphe */\narticle p::first-line {\n  font-weight: bold;\n  color: #2c3e50;\n}\n\n/* ::first-letter : première lettre (lettrines) */\narticle p:first-child::first-letter {\n  font-size: 3em;\n  font-family: Georgia, serif;\n  float: left;\n  line-height: 0.8;\n  margin-right: 8px;\n  color: #3498db;\n}\n\n/* ::selection : texte sélectionné par l'utilisateur */\n::selection {\n  background: #3498db;\n  color: white;\n}\n\n/* ::placeholder : placeholder des champs de formulaire */\ninput::placeholder {\n  color: #aaa;\n  font-style: italic;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "61-cr-er-des-transitions-en-css",
    "title": "Créer des transitions en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Jusqu’à présent, à chaque fois qu’on définissait le comportement d’une propriété CSS pour un élément, la valeur définie s’appliquait directement. Les transitions CSS vont nous permettre de modifier la valeur d’une propriété CSS de manière fluide et selon une durée que l’on va pouvoir définir. On va donc pouvoir définir deux valeurs pour une propriété (une première valeur de départ ou valeur par défaut et une seconde valeur d’arrivée) et faire en sorte que la valeur change progressivement de la valeur de départ à la valeur d’arrivée. On va ainsi par exemple pouvoir changer progressivement la couleur des textes de nos éléments ou modifier la taille d’un élément, etc. Pour créer des transitions en CSS, nous allons pouvoir utiliser les différentes propriétés de type transition-* ou la propriété raccourcie transition. Dans cette nouvelle leçon, nous allons commencer par étudier les propriétés complètes qui sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "transition-property ;",
          "transition-duration ;",
          "transition-timing-function ;",
          "transition-delay."
        ]
      },
      {
        "type": "p",
        "text": "Nous terminerons avec la création d’un transition complète en utilisant la propriété raccourcie transition."
      },
      {
        "type": "h",
        "text": "Le fonctionnement d’une transition"
      },
      {
        "type": "p",
        "text": "Le principe de base d’une transition en CSS est de modifier progressivement la valeur d’une propriété. Pour cela, nous allons devoir indiquer deux valeurs pour la propriété pour laquelle on souhaite créer une transition. Le premier souci ici est qu’on ne va pas pouvoir passer deux valeurs pour une même propriété avec un même sélecteur CSS pour créer une transition, car en faisant cela seule la dernière valeur déclarée serait lue. Nous avons ici deux solutions pour contourner cette contrainte. La première qui va nous permettre d’exploiter tout le potentiel des animations va être d’utiliser un langage dynamique comme le JavaScript qui peut mettre à jour le nom d’un attribut class par exemple en fonction de certains critères. Comme nous n’avons pas étudié le JavaScript, nous allons mettre de côté cette première solution. La deuxième méthode va être d’utiliser les transitions avec les pseudo-classes, c’est-à-dire lors d’un changement d’état d’un élément HTML. Nous allons par exemple pouvoir changer la couleur de fond d’un élément div lorsqu’un utilisateur passe sa souris dessus comme ci-dessous : Couleur du div au début de la transition : Couleur du div en fin de transition : Couleur du div lorsqu’on passe sa souris dessus : Ici, on a utilisé deux propriétés pour créer une transition simple : la propriété transition- property qui sert à définir la ou les propriété(s) dont la valeur doit être modifiée progressivement et la propriété transition-duration qui indique le temps que va mettre la propriété à passer de sa valeur de départ à la valeur d’arrivée. Comme vous pouvez le constater en observant le code CSS, on appliquer ces propriétés de transition à notre div dans son état normal et on définit deux couleurs de fond : orange dans l’état normal et bleu lorsque le div est survolé. Lorsqu’on survole le div, sa couleur de fond va donc changer progressivement de l’orange vers le bleu sur une durée de 5 secondes. Notez que par défaut la transition se fait dans les deux sens : lorsqu’on sort du div, sa couleur de fond retourne progressivement vers l’orange. Notez finalement qu’on ne va pas pouvoir créer des transitions avec toutes les propriétés car le concept de transitions est assez récent en CSS et donc le support n’est pas encore parfait. La plupart des propriétés vont tout de même pouvoir être animées."
      },
      {
        "type": "h",
        "text": "La propriété CSS transition-property"
      },
      {
        "type": "p",
        "text": "La propriété transition-property va nous permettre de définir quelles propriétés vont être les cibles de nos transitions, c’est-à-dire quelles sont les propriétés dont la valeur va devoir changer progressivement. On va pouvoir indiquer en valeur de transition-property soit le nom d’une propriété CSS pour laquelle on veut créer une transition, soit le nom de plusieurs propriétés CSS qui devront alors être séparées par des virgules, soit le mot clef all qui signifie que toutes les propriétés vont pouvoir être sujettes aux transitions (sous réserve qu’on indique ensuite une autre valeur d’arrivée pour créer la transition bien évidemment). Dans cet exemple, on crée trois transitions pour chacun de nos trois div. Ici, on définit de nouvelles valeurs pour les propriétés color ; background-color et border de nos div lors de l’état hover. Les transitions vont donc se faire lorsque l’utilisateur va passer sa souris sur un des div. Chacune des 3 transitions va durer 5 secondes. Pour notre premier div, on applique la transition à la propriété background- color uniquement. Pour notre deuxième div, on applique la transition aux propriétés background- color et border. Pour notre troisième div, on applique une transition à toutes les propriétés qui ont plusieurs valeurs définies pour différents états de l’élément. Notez que je n’ai pas défini de couleur de départ avec color. En effet, il n’est pas toujours strictement indispensable de définir des valeurs de départ pour les propriétés pour lesquelles on définit des transitions puisque la plupart des propriétés ont des valeurs par défaut. Pour color, la transition va donc se faire entre la valeur par défaut (noire) et la valeur d’arrivée spécifiée. Ici, vous devez également bien comprendre qu’une transition ne va se déclencher que lors d’un changement d’état d’un élément. Ainsi, il est tout à fait possible de définir plus de deux valeurs pour une propriété à laquelle on souhaite appliquer une transition puisqu’on va pouvoir définir une valeur pour chaque état de l’élément. Dans le cas où plusieurs changements d’état sont provoqués en même temps, la transition se fera vers la valeur de l’état déclaré en dernier en CSS. Par exemple, on peut définir une transition sur une couleur de fond en précisant une valeur d’arrivée pour l’état hover (survol) et l’état active (cliqué) : Ici, on commence par définir une couleur de fond pour l‘état active pour notre div .d2 puis on déclare une couleur de fond pour l’état hover pour ce même élément. Pour que l’élément soit cliqué (active), il faut que notre souris soit dessus (hover). Dans ce cas, la couleur de fond pour l’état active ne s’appliquera jamais puisque la propriété background- color a été définie en dernier pour l’état hover dans le code."
      },
      {
        "type": "h",
        "text": "La propriété CSS transition-duration"
      },
      {
        "type": "p",
        "text": "La propriété transition-duration va nous permettre de définir le temps que vont mettre les propriétés passées à transition-property pour passer d’une valeur de départ à une valeur d’arrivée. Nous allons pouvoir lui passer un nombre de secondes en valeur. La valeur par défaut de transition-duration est 0s ce qui signifie que le changement de valeur des propriétés concernées par la transition sera immédiat. Ici, on applique une transition sur la couleur de fond de nos éléments HTML div lors du passage de la souris sur l’un deux. Chaque transition a une durée différente définie avec transition-duration ce qui signifie que la couleur de fond mettra plus ou moins de temps à passer de sa couleur de départ à sa couleur d’arrivée selon le div."
      },
      {
        "type": "h",
        "text": "La propriété CSS transition-timing-function"
      },
      {
        "type": "p",
        "text": "La propriété transition-timing-function va nous permettre de choisir la vitesse de la transition au sein de celle-ci. Nous allons ainsi pouvoir créer des transitions totalement linéaires ou, au contraire, créer des transitions qui vont s’accélérer ou ralentir au milieu. Nous allons pouvoir passer les valeurs suivantes à cette propriété :"
      },
      {
        "type": "list",
        "items": [
          "ease : valeur par défaut. Permet de créer une transition relativement lente au début"
        ]
      },
      {
        "type": "p",
        "text": "puis qui s’accélère au milieu et qui se termine lentement ;"
      },
      {
        "type": "list",
        "items": [
          "linear : permet de créer une transition totalement linéaire c’est-à-dire qui va aller à"
        ]
      },
      {
        "type": "p",
        "text": "la même vitesse du début à la fin ;"
      },
      {
        "type": "list",
        "items": [
          "ease-in : permet de créer une transition avec un départ lent puis qui s’accélère"
        ]
      },
      {
        "type": "p",
        "text": "ensuite ;"
      },
      {
        "type": "list",
        "items": [
          "ease-out : permet de créer une transition qui va ralentir à la fin ;",
          "ease-in-out : permet de créer une transition lente au début puis qui s’accélère au"
        ]
      },
      {
        "type": "p",
        "text": "milieu et qui se termine lentement. Ressemble fortement à transition-timing- function : ease mais démarre plus lentement ;"
      },
      {
        "type": "list",
        "items": [
          "cubic-bezier(x1,y1,x2,y2) : sert à créer une transition à la vitesse totalement"
        ]
      },
      {
        "type": "p",
        "text": "personnalisé en renseignant une courbe de Bézier. Notre but n’est ici bien évidemment pas de faire un cours sur les courbes de Bézier. Vous pouvez simplement retenir les équivalents mot-clef/Bézier suivants qui peuvent se révéler utiles :"
      },
      {
        "type": "list",
        "items": [
          "transition-timing-function : ease est équivalent à transition-timing-function : cubic-"
        ]
      },
      {
        "type": "p",
        "text": "bezier(0.25, 0.1, 0.25, 1) ;"
      },
      {
        "type": "list",
        "items": [
          "transition-timing-function : ease-in est équivalent à transition-timing-function :"
        ]
      },
      {
        "type": "p",
        "text": "cubic-bezier(0.42, 0, 1, 1) ;"
      },
      {
        "type": "list",
        "items": [
          "transition-timing-function : ease-out est équivalent à transition-timing-function :"
        ]
      },
      {
        "type": "p",
        "text": "cubic-bezier(0, 0, 0.58, 1) ;"
      },
      {
        "type": "list",
        "items": [
          "transition-timing-function : ease-in-out est équivalent à transition-timing-function :"
        ]
      },
      {
        "type": "p",
        "text": "cubic-bezier(0.42, 0, 0.58, 1)."
      },
      {
        "type": "h",
        "text": "La propriété CSS transition-delay"
      },
      {
        "type": "p",
        "text": "La propriété transition-delay va nous permettre de définir quand la transition doit commencer à partir du moment où la nouvelle valeur est passée aux propriétés concernées par la transition. On va pouvoir lui passer une valeur en secondes. La valeur par défaut est 0s (la transition se lance dès qu’une nouvelle valeur est définie pour une propriété à laquelle on a appliqué la transition)."
      },
      {
        "type": "h",
        "text": "La propriété CSS transition"
      },
      {
        "type": "p",
        "text": "La propriété CSS transition est la notation raccourcie des quatre propriétés étudiées précédemment. On va pouvoir lui passer les différentes valeurs des propriétés précédentes à la suite pour créer une transition complète. La première durée renseignée dans transition définira la durée de la transition. Je vous conseille de suivre l’ordre de déclaration des valeurs suivant pour être sûr que transition fonctionne bien : 1. La valeur relative à transition-property ; 2. La valeur relative à transition-duration ; 3. La valeur relative à transition-timing-function ; 4. La valeur relative à transition-delay. A noter que seules les valeurs relatives aux propriétés transition-property et transition- duration doivent être obligatoirement renseignées pour créer une transition visible. Les valeurs relatives aux propriétés transition-timing-function et transition-delay sont facultatives et si rien n’est renseigné les valeurs par défaut seront utilisées. Notez également que pour créer plusieurs transitions pour plusieurs propriétés différentes avec transition il va suffire de séparer les différentes déclarations par une virgule. Ici, on renseigne toutes les valeurs pour notre première transition dans la propriété transition. Pour notre deuxième transition, en revanche, on omet les deux dernières valeurs. Ce seront donc les valeurs par défaut ease et 0s qui seront utilisées. Finalement, nous créons deux transitions dans notre dernier div. Pour faire cela, on se contente de séparer les différentes déclarations pour chacune de nos transitions par une virgule dans notre propriété transition."
      },
      {
        "type": "h",
        "text": "Transition et reverse transition"
      },
      {
        "type": "p",
        "text": "Par défaut, lorsqu’on crée une transition entre les valeurs d’une ou de plusieurs propriétés, la transition va se faire dans les deux sens : 1. A partir de la valeur de départ vers la valeur d’arrivée lors du changement d’état d’un élément ; 2. A partir de la valeur actuelle vers la valeur de départ lorsque l’élément retourne dans son état initial. Par exemple, si on crée une transition qui doit se déclencher lors du passage de la souris sur un élément, dès que l’on va déplacer notre souris en dehors de l’élément les propriétés concernées par la transition vont reprendre petit à petit leurs valeurs initiales en effectuant une transition inversée vers leurs valeurs initiales plutôt que d’être redéfinie brutalement sur leurs valeurs de départ. Nous allons pouvoir également pouvoir gérer la transition de retour et notamment la durée de cette transition et son délai. Pour faire cela, nous allons devoir préciser en plus de nos valeurs de transition classiques des valeurs de transition dans l’état qui va déclencher la transition (à l’intérieur d’un :hover par exemple pour une transition qui doit démarre lorsque l’utilisateur passe sa souris sur un élément). Attention ici : les valeurs précisées dans cet état seront utilisées pour la transition de départ et ce sont les valeurs précisées au départ qui seront utilisées pour la transition de retour. Regardez l’exemple suivant pour bien comprendre : Ici, on crée une transition sur la couleur de fond et la taille de notre div class=\"d1\" qui doit démarrer lorsqu’un utilisateur passe sa souris sur notre div. Cette première transition ici va durer 10 secondes et avoir un délai de 0s. Dès que l’utilisateur sort sa souris de l’élément, les valeurs de nos propriétés vont revenir à leur état normal en effectuant une transition de retour. La transition de retour va durer 2 secondes et va démarrer après un délai de 5 secondes. La relation entre les valeurs et les transitions peut paraitre contre intuitif à priori, donc faites bien attention à bien retenir cela !"
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* TRANSITIONS CSS : animation entre deux états */\n/* Syntaxe : transition: propriété durée timing-function délai */\n\n/* Transition simple */\n.btn {\n  background-color: #3498db;\n  transition: background-color 0.3s ease;\n}\n.btn:hover { background-color: #2980b9; }\n\n/* Transition de plusieurs propriétés */\n.carte {\n  transform: scale(1);\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.carte:hover {\n  transform: scale(1.03) translateY(-4px);\n  box-shadow: 0 12px 30px rgba(0,0,0,0.15);\n}\n\n/* Transition sur toutes les propriétés (attention : impact performance) */\n.element { transition: all 0.3s ease; }\n\n/* Fonctions de timing */\n.linear  { transition: transform 0.5s linear; }        /* Vitesse constante */\n.ease    { transition: transform 0.5s ease; }          /* Ralenti au début/fin */\n.ease-in { transition: transform 0.5s ease-in; }       /* Accélère */\n.ease-out{ transition: transform 0.5s ease-out; }      /* Décélère */\n.ease-io { transition: transform 0.5s ease-in-out; }   /* Les deux */\n.custom  { transition: transform 0.5s cubic-bezier(0.68,-0.55,0.27,1.55); }\n\n/* Délai de transition */\n.retard  { transition: opacity 0.5s ease 0.3s; } /* 0.3s de délai avant le début */\n\n/* Exemples courants */\n/* Menu de navigation */\nnav a {\n  color: #333;\n  text-decoration: none;\n  transition: color 0.2s, border-bottom-color 0.2s;\n  border-bottom: 2px solid transparent;\n}\nnav a:hover { color: #3498db; border-bottom-color: #3498db; }\n\n/* Image zoom */\n.galerie img {\n  transition: transform 0.4s ease, filter 0.4s ease;\n}\n.galerie img:hover {\n  transform: scale(1.08);\n  filter: brightness(1.1);\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "62-cr-er-des-animations-en-css",
    "title": "Créer des animations en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Les animations vont, comme les transitions, nous nous permettre de modifier la valeur d’une propriété progressivement mais en utilisant cette fois-ci des keyframes. Nous allons pouvoir gérer le comportement des animations en CSS en définissant la durée d’animation, le nombre de répétition et le comportement de répétition. De manière similaire aux animations, toutes les propriétés ne vont pas pouvoir être animées. Cependant, la grande majorité des propriétés courantes vont pouvoir l’être. Pour définir une animation en CSS nous allons pouvoir utiliser les propriétés de type animation-* ou la notation raccourcie animation avec une règle @keyframes qui va contenir les propriétés à animer et leurs valeurs."
      },
      {
        "type": "h",
        "text": "Différence entre animations et transitions en CSS"
      },
      {
        "type": "p",
        "text": "Les transitions et les animations permettent toutes les deux de modifier la valeur de propriétés de manière progressive, au cours du temps. Cependant, la façon dont vont procéder les transitions et les animations pour arriver à cela ne va pas être la même. La grande différence entre les transitions et les animations en CSS est que les animations nous laissent à la fois une plus grande liberté et un plus grand contrôle sur le déclenchement et la progression du changement de valeur des propriétés animées. En effet, dans le cas d’une transition, nous ne pouvons que préciser une valeur de départ et une valeur d’arrivée pour les propriétés pour lesquelles nous souhaitons créer notre transition et n’avons pas véritablement de contrôle précis sur la transition en soi tandis que dans le cas d’une animation nous allons pouvoir indiquer de manière explicite comment la « transition » entre les différentes valeurs doit se passer et pouvoir préciser différentes valeurs intermédiaires. En cela, les animations offrent davantage de contrôle sur le changement de valeurs des propriétés concernées par l’animation puisqu’on va pouvoir contrôler ce changement de valeur dans son ensemble. Elles vont donc notre choix de prédilection lorsqu’on voudra créer des effets plus complexes ou précis. De plus, nous n’allons plus devoir attendre un changement d’état d’un élément pour modifier la valeur d’une de ses propriétés avec les animations. En effet, nous allons pouvoir lancer une animation dès le chargement de la page ou selon un autre évènement."
      },
      {
        "type": "h",
        "text": "La règle CSS @keyframes"
      },
      {
        "type": "p",
        "text": "La règle @keyframes va nous permettre d’indiquer quelles propriétés doivent être animées et comment elles doivent l’être. Nous allons pouvoir dans notre règle @keyframes préciser différentes valeurs auxquelles les propriétés animées doivent parvenir à certains stades de l’animation. La règle @keyframes va donc nous permettre de définir différents stades ou étapes pour notre animation et c’est ce qui va nous permettre d’avoir un contrôle total sur la progression de l’animation. Nous allons toujours devoir donner un nom à une règle @keyframes qu’on va ensuite réutiliser dans notre animation pour lui indiquer les propriétés à animer et comment les animer. Dans notre règle @keyframes, nous allons tout simplement renseigner les propriétés à animer et les différentes valeurs qu’elles doivent atteindre à certains moments de l’animation. Je vous rappelle ici que pour créer une animation fonctionnelle en CSS, nous allons d’une part devoir définir notre règle @keyframes et d’autre part utiliser les propriétés de type animation-* ou la notation raccourcie animation pour définir les caractéristiques propres à notre animation (nom, durée, etc.). Regardez plutôt l’exemple suivant pour bien comprendre : Ici, vous pouvez déjà noter une différence intéressante entre les animations et les transitions : une fois l’animation terminée, les propriétés animées retrouvent immédiatement leur valeur « normale ». Regardons maintenant en détail notre règle @keyframes. Ici, on lui donne le nom couleur et on précise dedans les propriétés qui vont être animées (en l’occurrence la propriété background-color). Plus précisément, on indique ici la valeur de départ pour notre ou nos propriété(s) que l’on souhaite animer à l’intérieur d’un bloc from{} qui signifie « à partir de » et la valeur d’arrivée pour notre ou nos propriété(s) que l’on souhaite animer à l’intérieur d’un bloc to{} qui signifie « vers ». A ce niveau, il y a une chose que vous devez bien comprendre : la valeur que l’on précise dans le bloc from{} est bien la valeur de départ de l’animation, c’est-à-dire la valeur avec laquelle la propriété doit démarrer son animation et non pas sa valeur « normale » c’est- à-dire sa valeur en dehors du temps de l’animation (avant le lancement de l’animation et après sa fin). C’est pour cela que j’ai également précisé une couleur de fond en dehors de ma règle @keyframes afin de préciser la valeur que doit avoir ma propriété lorsqu’elle n’est pas animée. Une fois notre règle @keyframes définie, nous allons devoir la lier ou l’attribuer à une animation. Pour cela, nous allons également devoir déclarer une animation et définir son comportement. C’est ce que j’ai fait ici en déclarant deux propriétés deux propriétés animation-name à laquelle j’ai passé notre règle @keyframes et animation-duration qui me permet de définir la durée de l’animation. Par défaut, l’animation ne va s’exécuter qu’une fois. Dans l’exemple précédent, utiliser une animation n’a aucun intérêt par rapport à une simple transition car cette animation est très simple. Cependant, rappelez-vous qu’un des grands avantages des animations par rapport aux transitions est qu’on va pouvoir dans notre règle @keyframes préciser différentes valeurs que nos propriétés devront atteindre à un moment choisi de l’animation. On va ainsi entre autres très facilement pouvoir créer une boucle sur les valeurs d’une propriété pendant une animation comme dans l’exemple suivant : Ici, en plus de mes mots clefs from et to, j’ai indiqué des pourcentages dans ma règle @keyframes. Ces pourcentages correspondent à l’état d’avancement de l’animation. 50% marque donc le milieu de l’animation, c’est-à-dire au bout de 5 secondes pour une animation qui doit durer 10 secondes ; 25% correspond à 25% du temps total de l’animation, soit 2,5 secondes pour une animation de 10 secondes et etc. Ensuite, on indique la valeur que doit avoir notre propriété animée pour chaque niveau d’avancement de l’animation défini. Le grand avantage des animations encore une fois est que nous allons pouvoir définir autant d’étapes que l’on souhaite pour contrôler plus ou moins le l’avancement de notre animation plus. J’attribue ici la même valeur à ma propriété background-color au début et en fin d’animation pour donner l’impression que la couleur boucle sur elle-même. Nous allons de plus pouvoir préciser plusieurs propriétés à animer d’un coup et leur attribuer différentes valeurs à différents moments de l’animation au sein d’une même règle @keyframes : Maintenant que nous avons vu et compris le rôle de la règle @keyframes dans une animation, il est temps d’étudier les différentes propriétés animation-* qui vont nous permettre de gérer notre animation en soi avant de terminer avec la propriété raccourcie animation."
      },
      {
        "type": "h",
        "text": "La propriété animation-name"
      },
      {
        "type": "p",
        "text": "La propriété animation-name va nous permettre de définir une liste d’animations qui doivent s’exécuter. On va donc lui passer un ou plusieurs noms qui devront correspondre aux noms des règles @keyframes qui définissent les propriétés à animer et les différentes valeurs qu’elle doit avoir pendant l’animation. Si on fournit plusieurs noms à la propriété animation-name, alors il faudra définir à minima la durée de l’animation pour chaque animation avec la propriété animation-duration si on veut des animations fonctionnelles. Dans le cas où l’on fournit moins de valeurs à animation-duration qu’à animation-name, alors les animations supplémentaires vont réutiliser les valeurs de animation-duration dans l’ordre. Par exemple, si on définit 5 animations avec animation-name et qu’on ne donne que 3 valeurs à animation-duration, alors la quatrième animation reprendra la première valeur de animation-duration et la cinquième animation reprendra sa deuxième valeur. Dans l’exemple précédent, on définit 3 règles @keyframes qui définissent chacune des changements de valeurs pour une propriété. Dans le cas présent, on aurait aussi bien pu tout mettre dans une seule règle @keyframes. Cependant, il est généralement considéré comme une bonne pratique d’avoir une règle @keyframes pour une propriété puisque cela va nous permettre de nous resservir indépendamment d’une règle ou d’une autre pour l’appliquer à un élément ou à un autre. Je passe ensuite les trois noms des animations que je souhaite exécuter à ma propriété animation-name. Ici, vous pouvez remarquer que je n’indique que deux valeurs de durée d’animation dans ma propriété animation-duration. La première animation déclarée dans animation-name se servira de la première valeur, la deuxième de la deuxième valeur et la troisième à nouveau de la première valeur. L’animation « couleur » va donc durer 10 secondes, l’animation « essuieglace » va durer 2 secondes et l’animation « taille » va durer 10 secondes. Notez également ici que lorsqu’on définit plusieurs animations comme cela, les animations vont par défaut toutes se lancer en même temps et non pas à la suite les unes des autres."
      },
      {
        "type": "h",
        "text": "La propriété animation-duration"
      },
      {
        "type": "p",
        "text": "La propriété animation-duration nous permet de définir le temps que doit durer une animation. On doit préciser une durée en secondes. Ici, on fournit la même règle @keyframes à chacun de nos trois div et on définit ensuite des paramètres d’animations différents à partir de cette règle en donnant des durées d’animation différentes. Une nouvelle fois, je vous rappelle qu’une règle @keyframes n’est qu’un cadre qui sert qu’à définir différentes valeurs pour une propriété à différents stades d’une animation quelconque. Ensuite, n’importe quelle animation (qui va être construite et déclarée à proprement parler par les différentes propriétés animation-*) va pouvoir se resservir de cette règle @keyframes. C’est la raison pour laquelle je peux ici utiliser ma règle @keyframes dans trois animations pour trois éléments différents."
      },
      {
        "type": "h",
        "text": "La propriété animation-timing-function"
      },
      {
        "type": "p",
        "text": "La propriété animation-timing-function va nous permettre comment doit progresser l’animation entre les différentes valeurs de keyframes : la progression de l’animation peut être linéaire, s’accélérer de plus en plus, etc. Nous allons pouvoir passer les valeurs suivantes à animation-timing-function :"
      },
      {
        "type": "list",
        "items": [
          "ease : valeur par défaut. Entre deux valeurs de keyframes, l’animation va"
        ]
      },
      {
        "type": "p",
        "text": "commencer relativement lentement, puis accélérer au milieu et se terminer lentement ;"
      },
      {
        "type": "list",
        "items": [
          "linear : Entre deux valeurs de keyframes, l’animation aura une vitesse constante"
        ]
      },
      {
        "type": "p",
        "text": "du début à la fin ;"
      },
      {
        "type": "list",
        "items": [
          "ease-in : Entre deux valeurs de keyframes, l’animation va commencer lentement"
        ]
      },
      {
        "type": "p",
        "text": "puis accélérer jusqu’à atteindre la prochaine valeur de keyframe ;"
      },
      {
        "type": "list",
        "items": [
          "ease-out : Entre deux valeurs de keyframes, l’animation va commencer rapidement"
        ]
      },
      {
        "type": "p",
        "text": "et décélérer progressivement jusqu’à atteindre la prochaine valeur de keyframe ;"
      },
      {
        "type": "list",
        "items": [
          "ease-in-out : Entre deux valeurs de keyframes, l’animation commence lentement,"
        ]
      },
      {
        "type": "p",
        "text": "accélère au milieu et finit lentement ;"
      },
      {
        "type": "list",
        "items": [
          "cubic-bezier(x1, y1, x2, y2) : permet de définir une courbe de Bézier spécifique pour"
        ]
      },
      {
        "type": "p",
        "text": "créer une animation à la vitesse totalement contrôlée. Concernant la propriété animation-timing-function, vous devez bien comprendre que les valeurs passées vont dicter le comportement des animations entre chaque valeur de keyframes, c’est-à-dire que le pattern donné par animation-timing-function va être appliqué et répété entre chaque valeur de keyframes et ne va pas définir l’animation au complet. Par exemple, si on définit une règle @keyframes avec une valeur intermédiaire à 50% et que l’animation se fait selon animation-timing-function: ease, l’animation va commencer relativement lentement à partir du from, puis accélérer pour arriver lentement au 50% puis repartir relativement lentement à partir du 50% pour accélérer à nouveau et finir à nouveau lentement au niveau du to."
      },
      {
        "type": "h",
        "text": "La propriété animation-iteration-count"
      },
      {
        "type": "p",
        "text": "La propriété animation-iteration-count va nous permettre de définir combien de fois une animation va être jouée. Par défaut, une animation ne sera jouée qu’une fois. Pour modifier ce comportement par défaut, on va pouvoir passer soit un nombre à animation-iteration-count qui va correspondre au nombre de fois que l’on souhaite jouer l’animation, soit le mot clef infinite qui signifie que l’animation va se répéter à l’infini. Ici, ma première animation (l’animation correspondante à mon div class=\"d1\") ne va être jouée qu’une fois par défaut. Ensuite, on demande à notre deuxième animation de se répéter, c’est-à-dire d’être jouée deux fois avec animation-iteration-count: 2. Finalement, notre troisième animation va se répéter à l’infini grâce à animation-iteration- count: infinite."
      },
      {
        "type": "h",
        "text": "La propriété animation-direction"
      },
      {
        "type": "p",
        "text": "La propriété animation-direction va nous permettre de spécifier le sens dans lequel une animation doit être jouée, c’est-à-dire si elle doit être jouée en partant du début ou de la fin pour une ou plusieurs de ses itérations ou répétitions. Nous allons pouvoir passer les valeurs suivantes à animation-direction :"
      },
      {
        "type": "list",
        "items": [
          "normal : valeur par défaut. L’animation est jouée dans le sens dans lequel elle a"
        ]
      },
      {
        "type": "p",
        "text": "été déclarée (du from vers le to) ;"
      },
      {
        "type": "list",
        "items": [
          "reverse : l’animation est jouée dans le sens inverse pour toutes ses itérations ;",
          "alternate : l’animation va être jouée une première fois dans le sens normal, puis"
        ]
      },
      {
        "type": "p",
        "text": "dans le sens contraire, puis à nouveau dans le sens normal et etc. ;"
      },
      {
        "type": "list",
        "items": [
          "alternate-reverse : l’animation va être jouée une première fois dans le sens inverse,"
        ]
      },
      {
        "type": "p",
        "text": "puis dans le sens normal, puis à nouveau dans le sens inverse et etc.. Notez qu’en inversant le sens d’une animation pour une ou plusieurs de ses itérations, les propriétés liées au timing seront également inversées. Par exemple, une animation possédant une animation-direction : reverse et une animation-timing-function : ease- in sera jouée comme si la valeur était animation-timing-function : ease-out. Notez également que les valeurs animation-direction : alternate et animation-direction : alternate-reverse ne vont évidemment n’avoir un effet que pour les animations qui vont être jouées plus d’une fois. Ici, nous créons une règle @keyframes qui va modifier la valeur de la propriété width de 100% vers 25%. Dans son sens normal, l’animation fait donc passer nos div d’une taille de 100% à 25%. Ensuite, nous demandons à chacune de nos animations de se répéter à l’infini pour bien voir le comportement lié aux valeurs alternate et alternate-reverse. Pour notre première animation, cependant, on indique une propriété animation-direction : reverse qui signifie qu’on souhaite que l’animation joue dans le sens contraire. Le départ de notre animation va donc utiliser la taille width: 25% et la taille du div va grandir jusqu’à 100%. Pour notre deuxième animation, on passe la valeur alternate à la propriété animation- direction. Notre animation va donc jouer une première fois dans le sens normal, puis dans le sens contraire, puis à nouveau dans le sens normal et etc. La dernière animation va avoir le comportement opposé de la deuxième : elle va commencer à jouer dans le sens inverse puis alterner à chaque nouvelle itération (ou répétition) puisqu’on lui a donné une animation-direction : alternate-reverse"
      },
      {
        "type": "h",
        "text": "La propriété animation-play-state"
      },
      {
        "type": "p",
        "text": "La propriété animation-play-state va nous permettre de définir si une animation doit être jouée ou être en pause. On va pouvoir lui passer la valeur running (l’animation s’exécute normalement) ou paused (l’animation est mise en pause). Cette propriété va pouvoir être utile pour mettre une animation en pause à un certain point de l’animation ou selon une certaine action de l’utilisateur. Par exemple, on va pouvoir proposer aux utilisateurs de mettre en pause une animation lorsqu’ils passant le curseur de leur souris sur l’élément pour lequel une animation est jouée ou lorsqu’ils cliquent (en gardant le clic enfoncé) sur l’élément en utilisant les pseudo classes :hover et :active."
      },
      {
        "type": "h",
        "text": "La propriété animation-delay"
      },
      {
        "type": "p",
        "text": "La propriété animation-delay va nous permettre de définir quand une animation doit commencer c’est-à-dire s’il doit y avoir un délai avant le lancement de l’animation. On va devoir passer une valeur en secondes à animation-delay qui va correspondre au délai qu’il doit s’écouler avant le lancement de l’animation."
      },
      {
        "type": "h",
        "text": "La propriété animation-fill-mode"
      },
      {
        "type": "p",
        "text": "Par défaut, une règle @keyframes ou plus généralement une animation ne va pas affecter ni donc définir la valeur de la propriété animée en dehors du temps de l’animation. Nous avons vu cela en début de tutoriel et c’est la raison pour laquelle je définis depuis le début de celui-ci un comportement « normal » ou par défaut pour les propriétés animées en CSS. Cependant, il existe un moyen plus élégant de faire cela en utilisant la propriété animation- fill-mode. Cette propriété va en effet nous permettre conserver le comportement de nos propriétés défini dans l’animation en dehors de l’animation (avant ou après). On va ainsi pouvoir appliquer la valeur de départ de notre animation à notre propriété avant que l’animation ne commence ou la valeur d’arrivée de notre animation à la propriété après que celle-ci soit finie. Pour faire cela, nous allons pouvoir passer l’une des valeurs suivantes à animation-fill- mode :"
      },
      {
        "type": "list",
        "items": [
          "backwards : notre propriété animée utilisera la valeur de départ de l’animation"
        ]
      },
      {
        "type": "p",
        "text": "comme valeur avant que l’animation ne commence ;"
      },
      {
        "type": "list",
        "items": [
          "forwards : notre propriété animée utilisera la valeur de fin de l’animation comme"
        ]
      },
      {
        "type": "p",
        "text": "valeur après que l’animation soit terminée ;"
      },
      {
        "type": "list",
        "items": [
          "both : notre propriété animée utilisera la valeur de départ de l’animation comme"
        ]
      },
      {
        "type": "p",
        "text": "valeur avant que l’animation ne commence et la valeur de fin de l’animation comme valeur après que l’animation soit terminée."
      },
      {
        "type": "h",
        "text": "La propriété animation"
      },
      {
        "type": "p",
        "text": "La propriété animation correspond à la version raccourcie ou notation short-hand des propriétés animation-* vues ci-dessus. Nous allons pouvoir lui passer les différentes valeurs relatives aux propriétés animation- pour créer simplement des animations complètes. Il est généralement considéré comme une bonne pratique de passer les valeurs dans l’ordre suivant pour être certain que l’animation fonctionne correctement : 1. La valeur relative à la propriété animation-name ; 2. La valeur relative à la propriété animation-duration ; 3. La valeur relative à la propriété animation-timing-function ; 4. La valeur relative à la propriété animation-delay ; 5. La valeur relative à la propriété animation-iteration-count ; 6. La valeur relative à la propriété animation-direction ; 7. La valeur relative à la propriété animation-fill-mode ; 8. La valeur relative à la propriété animation-play-state . Bien évidemment, nous n’allons pas être obligé de préciser toutes les valeurs pour chaque animation : si une valeur est omise, la valeur par défaut de la propriété correspondante sera utilisée. Cependant, notez bien que la première valeur de type « secondes » fournie à animation sera toujours considérée comme étant la durée de l’animation tandis que la deuxième sera toujours considérée comme le délai. On va également pouvoir créer plusieurs animations avec la propriété animation. Pour cela, il suffira de séparer les déclarations des différentes animations par une virgule. Ici, dans notre premier exemple, on anime la couleur de fond de notre élément div sur une durée de 5 secondes. L’animation doit progresser de façon linéaire et commencer après un délai de 2 secondes. De plus, on demande à l’animation de se répéter à l’infini et d’alterner le sens dans lequel elle est jouée à chaque fois. Dans notre deuxième exemple, on anime la taille du div sur 5 secondes. L’animation doit à nouveau progresser de façon linéaire et commencer après un délai de 2 secondes. L’animation doit se répéter 5 fois et nous demandons à ce que la propriété utilise la valeur de départ de l’animation avant que celle-ci ne commence et la valeur d’arrivée après la fin de l’animation. Notre troisième exemple fait jouer les deux animations précédentes en même temps. Pour cela, on sépare les différentes déclarations par une virgule dans animation, tout simplement."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* ANIMATIONS CSS : définir avec @keyframes */\n\n/* 1. Définir les étapes de l'animation */\n@keyframes fondu-apparition {\n  from { opacity: 0; transform: translateY(-20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes pulsation {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n\n@keyframes rotation {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n@keyframes slide-in {\n  0%   { transform: translateX(-100%); opacity: 0; }\n  100% { transform: translateX(0);      opacity: 1; }\n}\n\n/* 2. Appliquer l'animation */\n.titre {\n  animation-name: fondu-apparition;\n  animation-duration: 0.8s;\n  animation-timing-function: ease-out;\n  animation-delay: 0.2s;\n  animation-iteration-count: 1;        /* Nombre de répétitions (ou infinite) */\n  animation-direction: normal;         /* normal, reverse, alternate, alternate-reverse */\n  animation-fill-mode: both;          /* none, forwards, backwards, both */\n  animation-play-state: running;       /* running, paused */\n}\n\n/* Raccourci */\n.spinner {\n  animation: rotation 1s linear infinite;\n}\n\n.pulsation {\n  animation: pulsation 2s ease-in-out infinite;\n}\n\n/* Plusieurs animations */\n.complexe {\n  animation:\n    fondu-apparition 0.5s ease-out,\n    pulsation 2s 0.5s ease-in-out infinite;\n}\n\n/* Animation déclenché au survol */\n.btn {\n  animation: none;\n}\n.btn:hover {\n  animation: pulsation 0.5s ease-in-out;\n}\n\n/* Respecter les préférences d'accessibilité */\n@media (prefers-reduced-motion: reduce) {\n  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "63-cr-er-des-transformations-en-css",
    "title": "Créer des transformations en CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Dans les leçons précédentes, nous avons pu étudier les transitions et les animations en CSS qui permettent de modifier la valeur de certaines propriétés progressivement en fonction de certains critères (chargement de la page, passage de souris sur l’élément, etc.) et donc d’ajouter un côté interactif à nos pages web. Le CSS va également nous permettre d’appliquer des transformations à nos éléments : on va pouvoir incliner nos éléments, les déformer, les translater, etc. Dans cette leçon, nous allons expliquer en détail comment fonctionnent les transformations et apprendre à créer des transformations plus ou moins complexes."
      },
      {
        "type": "h",
        "text": "Définir une transformation en CSS"
      },
      {
        "type": "p",
        "text": "La possibilité d’effectuer des transformations en CSS est récente et les possibilités et fonctionnalités des transformations sont donc aujourd’hui relativement limitées. Cependant, on peut s’attendre à ce que de nouvelles fonctionnalités viennent s’ajouter aux transformations dans un futur proche. A terme, les transformations en CSS devraient être définies par 3 critères qui vont pouvoir être renseignés via 3 propriétés CSS différentes :"
      },
      {
        "type": "list",
        "items": [
          "La propriété transform-box va nous permettre de définir une boite de référence qui"
        ]
      },
      {
        "type": "p",
        "text": "va être utilisée pour calculer le point d’origine et pour réaliser la transformation en soi ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété transform-origin va nous permettre de définir un point d’origine à partir"
        ]
      },
      {
        "type": "p",
        "text": "duquel réaliser la transformation ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété transform va nous permettre de définir un effet de transformation."
        ]
      },
      {
        "type": "p",
        "text": "La propriété transform-box ne fait pas encore partie des recommandations du W3C et est toujours en développement. Il est donc déconseillé de l’utiliser pour l’instant puisque sa définition n’est pas encore stable et que le support par les navigateurs n’est pas assuré. Nous ne l’étudierons ainsi pas ici. La propriété transform-origin permet de définir un point d’origine pour une transformation. Par défaut, le point d’origine est le centre de l’élément. Cette propriété va pouvoir prendre une ou deux valeurs. En n’indiquant qu’une valeur, la valeur sera utilisée pour définir les coordonnées dans l’axe horizontal et dans l’axe vertical du point d’origine. En indiquant deux valeurs, la première valeur va permettre de définir la coordonnée horizontale du point d’origine tandis que la seconde valeur va permettre de définir sa coordonnée verticale. Nous allons pouvoir passer les mots clefs top, right, bottom, left et center ainsi que des longueurs ou des pourcentages à cette propriété. Les valeurs de type longueur ou pourcentage vont définir l’éloignement du point d’origine à partir du bord supérieur gauche de la boite de référence. La propriété transform va nous permettre de définir un ou plusieurs effets de transformation à appliquer à un élément : inclinaison, rotation, déformation, etc. Cette propriété va accepter différents mots clefs ou plus exactement différentes fonctions qui vont définir le type de transformation qui va être appliqué à un élément. Nous allons étudier ces valeurs dans la suite de la leçon. Dans le code ci-dessus, nous avons défini 4 transformations pour nos 4 div portant des attributs class. Nous appliquons un premier effet de transformation à nos deux premiers div qui va être une translation, c’est-à-dire un déplacement selon une direction. Ici, on va donc déplacer nos deux div de 100px à partir de leur point d’origine vers la droite. Ensuite, nous appliquons un effet de rotation à nos deux derniers div. La rotation va s’effectuer dans le sens des aiguilles d’une montre. Le point d’origine de la transformation pour le premier div est son coin supérieur gauche tandis que cela va être le centre pour le deuxième. Comme la transformation n’est ici qu’un déplacement horizontal, modifier le point d’origine ne change pas le résultat de la transformation. En revanche, cela va être différent pour une rotation : notre troisième div va pivoter autour d’un point central qui va être son coin supérieur gauche tandis que notre quatrième div va pivoter autour de son point central. Dans ce cas-là, modifier le point d’origine de la transformation change le résultat obtenu. Finalement, vous pouvez noter ici qu’à la différence des transitions et des animations pour lesquelles on précise une durée, les transformations sont permanentes et les éléments vont conserver la transformation."
      },
      {
        "type": "h",
        "text": "Exemples de transformations 2D"
      },
      {
        "type": "p",
        "text": "Nous allons pour le moment nous concentrer sur les effets de transformations en deux dimensions. En effet, vous devez savoir qu’on peut également aujourd’hui créer des transformations en 3D en rajoutant une perspective à nos éléments. Nous discuterons de cette possibilité plus tard. Modifier la taille ou l’échelle d’un élément avec scale() La fonction scale() permet de modifier la taille ou plus exactement l’échelle de l’élément. Nous allons pouvoir lui passer deux nombres qui vont correspondre au pourcentage d’agrandissement en largeur et en hauteur de l’élément. Par exemple, en écrivant transform : scale(2, 0.5), l’élément va doubler en largeur et être diminué de moitié en hauteur. Notez que cette fonction ne va pas affecter que les propriétés width et height de l’élément mais également s’appliquer au font-size et au padding. Finalement, vous devez savoir que la fonction scale() est la notation raccourcie des fonctions scaleX() et scaleY() qui permettent de ne modifier que la largeur et la hauteur respectivement d’un élément. Ici, on ne passe qu’une valeur à notre fonction scale() pour notre première transformation : cette valeur va donc être utilisée pour calculer la mise à l’échelle horizontale et verticale et notre div fera deux fois sa taille d’origine. Pour notre deuxième transformation, on demande à ce que le div devienne deux fois plus large et qu’il soit deux fois moins haut. Finalement, on utilise la fonction scaleX() pour définir notre dernière transformation qui ne va donc impacter que la largeur de l’élément. Notez bien ici qu’appliquer une transformation à des éléments ne va pas modifier la taille de l’espace qui leur était attribué à la base ni donc faire bouger les autres éléments autour. Il faudra donc faire bien attention à anticiper les chevauchements et dépassements possibles entre éléments transformés et leurs voisins. Déformer un élément avec skewX() et skewY() Avant toute chose, il faut savoir que la fonction skew(), si elle existe, n’a été créée que pour des questions de compatibilité et qu’on ne devrait jamais l’utiliser. A la place, il faudra plutôt utiliser les fonctions skewX() et skewY() qui vont nous permettre de déformer un élément selon son axe horizontal ou vertical. Nous allons devoir passer un angle (généralement en deg) à ces deux fonctions qui va représenter l’angle selon lequel l’élément doit être déformé le long de l’axe correspondant. Effectuer une translation avec translate(X,Y) La fonction translate() va nous permettre de créer une translation, c’est-à-dire de déplacer un élément selon un certain vecteur (ou selon une certaine distance et direction, pour faire simple). Là encore, on va pouvoir passer deux valeurs de type longueur à translate() pour spécifier les caractéristiques de la translation dans l’axe horizontal et dans l’axe vertical ou utiliser les versions complètes translateX() et translateY(). Les valeurs passées vont pouvoir être positives ou négatives. Une valeur positive pour l’axe horizontal va déplacer l’élément vers la droite tandis qu’une valeur positive pour l’axe vertical va déplacer l’élément vers le bas et inversement pour des valeurs négatives. Effectuer une rotation avec rotate() La fonction rotate() va nous permettre de faire pivoter un élément ou de lui faire effectuer une rotation selon un certain angle. Nous allons pouvoir lui fournir un angle (généralement en deg) en valeur. La rotation va s’effectuer dans le sens horaire (sens des aiguilles d’une montre). Ainsi, indiquer rotate(90deg) va faire pivoter l’élément d’un quart de tour. Définir une matrice de transformation avec matrix() La fonction matrix() va nous permettre de définir notre propre matrice de transformation. Son utilisation est réservée aux personnes qui possèdent un bon degré de connaissance des transformations ET en mathématiques. Comme son usage est très marginal, je ne pense pas qu’il soit pertinent d’expliquer son fonctionnement en détail dans ce cours."
      },
      {
        "type": "h",
        "text": "Appliquer plusieurs transformations d’un coup"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir définir plusieurs transformations à appliquer à un élément avec transform. Pour cela, il va suffire d’indiquer les différents effets de transformation à la suite. Notez bien ici que les transformations ne vont pas toutes s’effectuer en même temps mais plutôt les unes à la suite des autres selon leur ordre de déclaration. Expliquons le code ci-dessus. Ici, on applique les mêmes transformations à nos deux div mais pas dans le même ordre. Le premier div auquel on applique une transformation va d’abord effectuer une translation de 100px vers la droite puis une rotation de 45 degrés dans le sens horaire. Le deuxième div, au contraire, va lui d’abord effectuer une rotation de 45 degrés puis une translation de 100px. La différence est ici qu’après sa rotation l’axe horizontal du div (qu’il serait plus correct d’appeler l’axe des abscisses ou axe des X) est également incliné de 45 degrés et la translation va se faire selon cet axe. Notre second div va donc être décalé de 100px selon cet axe incliné à 45 degrés."
      },
      {
        "type": "h",
        "text": "Animer des transformations"
      },
      {
        "type": "p",
        "text": "Notez enfin qu’on va tout à fait pouvoir utiliser les transformations au sein d’animations en CSS. Cela va nous permettre d’ajouter un certain dynamisme à nos pages web."
      },
      {
        "type": "h",
        "text": "Les transformations 3D"
      },
      {
        "type": "p",
        "text": "Finalement, vous devez savoir qu’on va également pouvoir créer des transformations en 3D, c’est-à-dire en rajoutant un axe Z qui va créer une perspective. Cet axe va nous permettre de simuler une profondeur et on va pouvoir ainsi faire comme si des éléments se rapprochaient ou s’éloignaient de l’utilisateur. Avec les transformations 3D, nous commençons à toucher à des choses vraiment complexes en CSS et qui ne sont pas forcément pertinentes dans le cadre de ce cours complet car elles sont très peu utilisées et très spécifiques. J’aborde ce sujet par souci d’exhaustivité mais je vais me contenter de vous expliquer rapidement le principe de fonctionnement des transformations 3D et vous donner quelques exemples qui me semblent les plus pertinents car encore une fois je ne pense pas qu’il soit pertinent de s’arrêter trop longtemps sur ces notions et d’essayer à tout prix de comprendre comment elles fonctionnent en détail. Pour qu’une transformation 3D ait l’effet visuel escompté, il va déjà falloir créer un effet de perspective c’est-à-dire créer une impression d’espace 3D. Pour cela, nous allons utiliser la fonction perspective()avec nos effets de transformation. La valeur passée à la fonction perspective() va définir l’intensité de l’effet 3D. On peut considérer qu’elle va représenter la distance entre l’utilisateur et l’élément. Plus la valeur passée à perspective() va être grande, plus l’élément sera éloigné de l’utilisateur au départ et moins l’effet 3D sera visible. Ensuite, nous allons pouvoir définir nos effets de transformation 3D : mises à l’échelle en 3D, translations 3D ou rotations 3D. Nous allons également pouvoir créer nos propres transformations 3D grâce à la fonction matrix3d() mais il faudra pour cela comprendre comment fonctionne le calcul matriciel en mathématiques. Pour chaque effet de transformation cité ci-dessus, nous allons soit pouvoir utiliser les fonctions scale3d(), translate3d() et rotate3d(), soit utiliser les notations longues scaleX(), scaleY(), etc. et en les complétant avec scaleZ(), translateZ() et rotateZ(). Voici deux exemples de translation et de rotation 3D qu’on va effectuer durant une animation :"
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* TRANSFORMATIONS CSS : modifier la forme et position sans affecter le flux */\n\n/* translate : déplacer */\n.decale { transform: translate(20px, 10px); }  /* x, y */\n.droite { transform: translateX(50px); }        /* Seulement X */\n.bas    { transform: translateY(-30px); }       /* Seulement Y */\n\n/* rotate : faire pivoter */\n.tourne     { transform: rotate(45deg); }       /* Sens horaire */\n.antihoraire{ transform: rotate(-30deg); }\n.retourne   { transform: rotate(180deg); }\n\n/* scale : redimensionner */\n.agrandi  { transform: scale(1.5); }            /* 150% dans les 2 axes */\n.reduit   { transform: scale(0.8); }\n.etiree   { transform: scale(2, 0.5); }         /* x=200%, y=50% */\n.large    { transform: scaleX(1.5); }\n\n/* skew : incliner */\n.incline    { transform: skew(10deg, 5deg); }   /* x, y */\n.cisaillee  { transform: skewX(20deg); }\n\n/* Combiner plusieurs transformations (ordre important !) */\n.combinee {\n  transform: translate(50px, 20px) rotate(45deg) scale(1.2);\n}\n\n/* transform-origin : point d'origine de la transformation */\n.pivote {\n  transform-origin: top left;     /* Tourne depuis le coin supérieur gauche */\n  transform: rotate(45deg);\n}\n.coin { transform-origin: 0 0; }\n.centree { transform-origin: center; } /* Défaut */\n\n/* Transformations 3D */\n.perspective { perspective: 1000px; }  /* Sur le parent */\n\n.cube {\n  transform: rotateX(45deg) rotateY(45deg);\n  transform-style: preserve-3d;\n}\n.profondeur { transform: translateZ(100px); }\n\n/* Exemple interactif */\n.card {\n  transition: transform 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-8px) scale(1.02);\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "64-exercice-3-cr-er-un-diaporama-en-html-et",
    "title": "EXERCICE #3 : Créer un diaporama en HTML et CSS",
    "blocks": [
      {
        "type": "p",
        "text": "et CSS L’objectif de ce nouvel exercice est d’essayer de créer un diaporama, c’est-à-dire un enchainement fluide d’images, en HTML et en CSS. L’idée ici va être d’utiliser judicieusement la propriété background-image et les animations et transformations pour modifier l’image de fond d’un élément et ainsi créer un effet de diaporama. Nous n’allons évidemment pas pouvoir coder certaines fonctionnalités que possèdent les diaporamas « complets » créés avec du JavaScript mais allons essayer de réaliser quelque chose qui va s’en rapprocher. Je vous propose ici de créer deux animations différentes pour créer deux diaporamas : une première animation de fondu et une seconde qui va faire défiler nos images comme dans le cas d’un diaporama classique. De plus, pour chaque animation de diaporama, nous allons créer deux versions : une version avec un diaporama de taille fixe et une version avec un diaporama qui va s’adapter en fonction de la taille de la fenêtre."
      },
      {
        "type": "h",
        "text": "Création d’un diaporama avec effet de fondu"
      },
      {
        "type": "p",
        "text": "Pour notre premier diaporama, nous allons vouloir créer un effet de fondu, c’est-à-dire de disparition progressive d’une image et d’apparition progressive d’une autre. Pour cela, je vous propose de travailler en 3 étapes : 1. Création des cadres du diaporama en HTML ; 2. Mise en forme des cadres en CSS ; 3. Création de l’animation en CSS."
      },
      {
        "type": "h",
        "text": "Le code HTML du diaporama"
      },
      {
        "type": "p",
        "text": "A manière la plus simple de créer un diaporama en HTML et en CSS va être de faire défiler des images de fond. Pour pouvoir faire cela, il va nous falloir un élément conteneur ou cadre auquel on va ensuite pouvoir passer des images de fond. Nous allons ainsi nous contenter en HTML d’utiliser des éléments div comme cadres. On va créer un premier div class=\"d1\" qui va représenter notre cadre de diaporama à dimension fixe et un deuxième div class=\"d2\" qu’on va lui-même placer dans un div class=\"conteneur\" et qui va représenter notre cadre de diaporama aux dimensions adaptables."
      },
      {
        "type": "h",
        "text": "Mise en forme des cadres en CSS"
      },
      {
        "type": "p",
        "text": "Pour créer nos diaporamas en CSS nous allons nous servir de la propriété background- image que nous allons ensuite animer grâce à la propriété animation. En pratique, la propriété background-image s’utilise souvent pour apporter un fond à un élément HTML qui possède du contenu et donc une hauteur définie. Ici, nos div qui servent de cadres à notre diaporama ne vont contenir que des images de fond et aucun « vrai » contenu. Par défaut, leur hauteur va donc être nulle puisqu’une image de fond n’est qu’un fond par définition et qu’un fond ne peut pas impacter la taille d’un élément. Nous allons donc devoir préciser explicitement une hauteur pour nos conteneurs. Nous allons pouvoir le faire de deux façons différentes selon qu’on souhaite créer un diaporama avec un cadre possédant des dimensions fixes ou en pourcentage."
      },
      {
        "type": "h",
        "text": "Cadre de diaporama avec dimensions fixes"
      },
      {
        "type": "p",
        "text": "Pour utiliser un cadre de diaporama avec dimensions fixes, nous allons tout simplement préciser une largeur et une hauteur explicites en px pour notre div. Il faudra ensuite recadrer nos images de fond à la même taille que le div ou à minima faire en sorte qu’elles possèdent le même ratio largeur / hauteur que celui-ci afin d’avoir un bon affichage. L’avantage de cette première méthode est qu’on va avoir un comportement stable et prévisible pour les dimensions de notre diaporama. En contrepartie, le diaporama fera toujours la même taille quelle que soit la taille de l’écran de vos visiteurs. Notez qu’on va pouvoir définir plusieurs tailles fixes selon certains paliers de tailles grâce aux media queries que nous étudierons dans la suite de ce cours. Ici, on indique explicitement des dimensions pour notre div qui va contenir notre diaporama par défaut ainsi qu’une couleur de fond. Pour le moment, nous créons simplement le cadre et n’utilisons donc pas d’image. Il est toutefois toujours essentiel de préciser une couleur de fond au cas où les images du diaporama ne pourraient pas pour une raison ou une autre s’afficher. Ensuite, on définit un background-size: contain pour que nos images de fond soient à la fois contraintes dans le conteneur mais occupe le plus d’espace dans celui-ci tout en conservant leur proportions d’origine. On crée également un effet d’ombre sous notre div avec box-shadow pour donner l’impression qu’il est au-dessus de la page."
      },
      {
        "type": "h",
        "text": "Cadre de diaporama avec des dimensions en %"
      },
      {
        "type": "p",
        "text": "Créer un cadre de diaporama qui va se redimensionner en même temps qu’on va changer la taille de la fenêtre va être un peu plus complexe. En effet, je vous rappelle qu’une image de fond n’est pas considérée comme un contenu en soi et donc que la hauteur de notre cadre est nulle par défaut. Ici, quand on agrandit ou rétrécit la fenêtre, il va falloir que la taille de notre cadre s’adapte et que nos images de fond s’affichent entièrement dans tous les cas. Pour faire cela, nous allons utiliser un petit hack CSS. Nous allons définir explicitement une hauteur nulle pour notre div et une largeur égale à 100% et utiliser la propriété padding-top. Le padding-top va ici servir à donner une hauteur au cadre. On va lui passer une valeur en pourcentage qui va correspondre au ratio hauteur / largeur de l’image qu’on souhaite voir s’afficher. Par exemple, si mon image de fond fait 1200px de large par 900px de haut, le ratio hauteur / largeur est de 900/1200 = 3/4 = 75%. On indiquera donc un padding-top: 75% dans ce cas. Cela va faire que notre cadre va se redimensionner en gardant toujours ce ratio de ¾, c’est-à-dire qu’il aura toujours une hauteur égale à 75% de sa largeur. Ici, d’un point de vue purement esthétique, on fait cette fois-ci le choix d’utiliser un box- shadow centré autour du div. L’avantage de cette deuxième méthode est que notre cadre de diaporama va pouvoir se redimensionner en même temps que la fenêtre. L’inconvénient est qu’on ne va pas pouvoir maitriser la hauteur du diaporama qui va pouvoir atteindre une très grande taille sur de grands écrans, ce qui peut être un comportement indésirable. C’est la raison pour laquelle nous avons placé notre div class=\"d2\" dans un autre div class=\"conteneur\"qui va nous servir de conteneur et pour lequel on va préciser une taille maximale avec max-width afin de limiter la taille de notre diaporama à partir d’une certaine taille de fenêtre."
      },
      {
        "type": "h",
        "text": "Création de l’animation de fondu du diaporama"
      },
      {
        "type": "p",
        "text": "Il ne nous reste plus qu’à créer notre animation de fondu pour rendre notre diaporama fonctionnel. Pour ce diaporama, je vais utiliser trois images que vous pouvez télécharger en cliquant ici (la quatrième image dans le dossier va être utilisée pour notre prochain diaporama). L’animation de fondu va être relativement simple à réaliser : nous allons simplement passer nos différentes images à la propriété background-image à différents moments de l’animation. Comme le principe d’une animation est de passer progressivement d’une valeur de départ à une valeur d’arrivée, nos images vont s’enchainer avec un effet de fondu de façon naturelle. Nous allons répéter l’animation à l’infini pour que nos images s’enchainent constamment et allons préciser le comportement du background-image avant et après l’animation au cas où celle-ci ne puisse pas se lancer. Finalement, nous allons vouloir mettre en pause l’animation lorsqu’un utilisateur passe sa souris sur le cadre du diaporama, pour lui laisser le temps d’apprécier l’image. Voilà tout pour notre premier effet de diaporama."
      },
      {
        "type": "h",
        "text": "Création d’un diaporama avec défilement des images"
      },
      {
        "type": "p",
        "text": "Essayons maintenant de créer un diaporama avec un effet de défilement des images en fond. L’idée ici va être de créer une maxi-image qui va contenir toutes les images de notre diaporama. Nous allons ensuite placer cette image en fond et allons animer sa position pour la faire dérouler. Pour animer la position de l’image de fond, nous allons pouvoir soit utiliser la propriété background-position soit la propriété transform avec sa fonction translate(). Cette deuxième méthode est à privilégier car elle est plus performante."
      },
      {
        "type": "h",
        "text": "Code HTML du diaporama avec effet de défilement"
      },
      {
        "type": "p",
        "text": "Nous allons à nouveau essayer de créer deux diaporamas : un avec des dimensions fixes et un qui va s’adapter en fonction de la taille de la fenêtre. Nous allons donc déjà avoir besoin de deux cadres pour nos diaporamas qui vont être représentés par deux div. Ici, nous allons placer chacun de ces cadres dans un autre div conteneur."
      },
      {
        "type": "h",
        "text": "Diaporama de dimensions fixes avec effet de défilement"
      },
      {
        "type": "p",
        "text": "Commençons déjà par essayer de créer un diaporama avec effet de défilement et des dimensions fixes. L’idée derrière l’effet de défilement va être ici de n’utiliser qu’une grande image qui va être en fait composée de plusieurs images et de la faire bouger. On peut donc déjà définir notre image de fond avec background-image. Je vais pour ma part utiliser une image qui a été créée à partir des 3 images du diaporama précédent et que j’ai appelée diapo123.png. Mon image fait ici 2880px de largeur par 720px de hauteur et est composée de 3 images de tailles identiques (960px*720px). On va vouloir que l’effet de défilement soit infini et nous allons créer cet effet avec une transformation de type translation. On va déjà commencer par donner une taille égale à notre grande image + la largeur d’une sous image à notre div afin de pouvoir créer une boucle infini fluide. Dans mon cas, il faut donc que je donne une taille de 2880px + 960px = 3840px à mon div. Nous allons fixer une hauteur du div égale à celle de l’image de fond à savoir 720px. Nous avons donc un cadre de 3840px de largeur. Cependant, nous voulons que la partie visible du diaporama soit égale à la largeur de chacune de nos sous images (on pourrait tout à fait décider d’une largeur différente mais c’est la largeur qui fait le plus de sens selon moi). Pour cela, nous allons passer une largeur maximale à notre div conteneur égale à la largeur de nos sous images et également lui passer un overflow : hidden pour cacher ce qui dépasse du conteneur. Finalement, nous allons créer notre effet de défilement en animant une transformation de type translation. Au début de notre animation, on va vouloir afficher la première sous image dans le cadre puis on va vouloir faire défiler la grande image jusqu’à arriver à nouveau sur une vue montrant la première sous image. A la fin de notre animation, l’image s’est déplacée de sa taille exactement de sa largeur. On utilise ici la fait qu’une image de fond est par défaut répétée pour remplir le fond d’un élément, ce qui fait que notre image de fin d’animation est la même que celle du début (la première sous image est bien répétée du fait que la largeur du cadre soit égale à celle de l’image de fond + la largeur d’une sous-image). Ensuite, il ne nous reste plus qu’à répéter cette boucle à l’infini en définissant un nombre d’animations infini."
      },
      {
        "type": "h",
        "text": "Diaporama avec effet de défilement aux dimensions adaptables"
      },
      {
        "type": "p",
        "text": "Nous allons finalement pouvoir créer un diaporama avec effet de défilement et aux dimensions adaptables sur le même modèle que ce qu’on a pu faire précédemment mais en convertissant les différentes valeurs en pourcentage. La principale difficulté/ astuce ici va être de jouer avec le ratio de notre image et la largeur de notre cadre pour faire en sorte que les sous images s’affichent complètement à chaque fois et que le défilement soit fluide. Pour rappel, notre image de fond fait 2880px*720px ce qui signifie qu’elle est quatre fois plus large que haute. Chacune des sous images qu’elle contient à un ratio largeur/ hauteur de 4 : 3. Ici, on va commencer par passer une largeur width : 400% à notre cadre. Ensuite, on va lui attribuer un padding-top : 75% afin que la hauteur du div soit toujours égale à 75% de la largeur visible du div. La partie visible du div cadre aura donc toujours un ratio de 4 : 3. En utilisant background- size : contain, la première répétions de notre maxi image de fond va donc prendre une largeur égale à 300% de la partie visible du div. Comme notre div cadre possède une largeur de 400%, notre image de fond va donc s’afficher une fois complètement dedans puis un tiers de l’image va se répéter (ce qui va correspondre à notre première sous image se répétant). On va ensuite passer une largeur maximale à notre div conteneur qu’on va définir ici comme égale à une de nos sous images pour éviter que notre diaporama ne dépasse une certaine taille sur les grands écrans. On passe également un overflow : hidden pour cacher la partie du diaporama qui dépasse de l’écran. Il ne nous reste plus qu’à définir notre @keyframes avec notre translation et les propriétés de notre animation en soi. De manière similaire à ce qu’on a pu faire précédemment, on va faire en sorte que la première boucle de l’animation des termine exactement lorsque notre première sous image occupe à nouveau l’espace visible dans le cadre. Ici, on indique un transform : translate(-75%,0) en fin d’animation. En effet, notre cadre fait 400% de largeur avec un ratio visible de 4 : 3. Notre image de fond va occuper 75% de cette largeur et va se répéter pour les derniers 25%. Ainsi, transform : translate(-75%,0) nous ramène exactement à la position de l’image de fond en début d’animation et nous n’avons plus qu’à répéter l’animation à l’infini."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Diaporama CSS</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"diaporama\">\n    <!-- Slides -->\n    <div class=\"slide\" id=\"slide1\">\n      <div class=\"slide-contenu\">\n        <h2>Slide 1</h2>\n        <p>Paysage de montagne</p>\n      </div>\n    </div>\n    <div class=\"slide\" id=\"slide2\">\n      <div class=\"slide-contenu\">\n        <h2>Slide 2</h2>\n        <p>Coucher de soleil</p>\n      </div>\n    </div>\n    <div class=\"slide\" id=\"slide3\">\n      <div class=\"slide-contenu\">\n        <h2>Slide 3</h2>\n        <p>Forêt enchantée</p>\n      </div>\n    </div>\n\n    <!-- Navigation par ancres -->\n    <nav class=\"nav-slides\">\n      <a href=\"#slide1\" class=\"dot\"></a>\n      <a href=\"#slide2\" class=\"dot\"></a>\n      <a href=\"#slide3\" class=\"dot\"></a>\n    </nav>\n\n    <!-- Flèches -->\n    <a href=\"#slide3\" class=\"fleche prev\">&#8249;</a>\n    <a href=\"#slide2\" class=\"fleche next\">&#8250;</a>\n  </div>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "* { margin: 0; padding: 0; box-sizing: border-box; }\n\n.diaporama {\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  margin: 50px auto;\n  overflow: hidden;\n  border-radius: 12px;\n  height: 450px;\n}\n\n/* Slides en ligne côte à côte */\n.slide {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.5s ease, transform 0.5s ease;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* Slide ciblée par l'ancre → visible */\n.slide:target {\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* Par défaut, afficher la 1ère slide */\n.slide:first-of-type { opacity: 1; }\n.slide:target ~ .slide:first-of-type { opacity: 0; }\n\n/* Couleurs de fond */\n#slide1 { background: linear-gradient(135deg, #3498db, #2c3e50); }\n#slide2 { background: linear-gradient(135deg, #f39c12, #e74c3c); }\n#slide3 { background: linear-gradient(135deg, #2ecc71, #1abc9c); }\n\n.slide-contenu { color: white; text-align: center; }\n.slide-contenu h2 { font-size: 3rem; margin-bottom: 10px; }\n.slide-contenu p { font-size: 1.2rem; opacity: 0.9; }\n\n/* Points de navigation */\n.nav-slides {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 10;\n}\n\n.dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n  border: 2px solid white;\n  transition: background 0.3s;\n}\n.dot:hover { background: white; }\n\n/* Flèches */\n.fleche {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255,255,255,0.2);\n  color: white;\n  font-size: 2rem;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  text-decoration: none;\n  z-index: 10;\n}\n.prev { left: 10px; }\n.next { right: 10px; }\n.fleche:hover { background: rgba(255,255,255,0.4); }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "65-introduction-au-mod-le-des-boites-flexib",
    "title": "Introduction au modèle des boites flexibles ou flexbox",
    "blocks": [
      {
        "type": "p",
        "text": "flexbox Dans ce cours, nous avons vu que les éléments HTML pouvaient être affichés de différentes manières et que le type d’affichage conditionnait la disposition par défaut d’un élément :"
      },
      {
        "type": "list",
        "items": [
          "Affichage en bloc avec display : block ;",
          "Affichage en ligne avec display : inline ;",
          "Affichage sous forme de tableau avec display : table ;",
          "Etc."
        ]
      },
      {
        "type": "p",
        "text": "Le but de cette partie est de vous présenter un nouveau mode d’affichage et de disposition très puissant : la disposition selon un modèle de boites flexibles ou flexbox avec display : flex (ou display : inline-flex) et les différentes propriétés CSS liées à ce modèle."
      },
      {
        "type": "h",
        "text": "Définition du modèle des boites flexibles ou flexbox"
      },
      {
        "type": "p",
        "text": "Le flexbox est un modèle de disposition très puissant qui va nous permettre de contrôler facilement et avec précision l’alignement, la direction, l’ordre et la taille de nos éléments (ou plus précisément de nos boites). Avec le modèle des boites flexibles, nous allons pouvoir définir des conteneurs flexibles. Ces conteneurs sont dits « flexibles » car leurs enfants directs vont être des éléments flexibles qui vont pouvoir se réarranger (se redimensionner, se réaligner, etc.) automatiquement dans leur conteneur lorsque celui-ci change de dimension. Le flexbox représente ainsi en quelque sorte une alternative beaucoup plus puissante à la propriété float qui nous permettait de positionner nos boites horizontalement puisqu’on va avoir cette fois-ci un contrôle total sur la disposition des éléments. Voici un premier exemple d’organisation des éléments qu’on peut obtenir avec quelques lignes de code simplement en utilisant le modèle des boites flexibles et ses propriétés : N’essayez pas pour le moment de comprendre le code ci-dessus : nous allons étudier toutes les spécificités du flexbox dans les leçons à venir !"
      },
      {
        "type": "h",
        "text": "Conteneur et éléments flexibles"
      },
      {
        "type": "p",
        "text": "Le modèle des boites flexibles fait la distinction entre deux types de boites auxquelles on va pouvoir appliquer différentes propriétés : des conteneurs flexibles d’un côté et des éléments flexibles ou « flex items » de l’autre. Concrètement, nous allons définir un conteneur flexible en attribuant un display : flex à un élément. Tous les éléments directement contenus dans ce conteneur (c’est-à-dire tous les enfants directs) vont alors automatiquement devenir des éléments flexibles. Nous allons ensuite pouvoir manipuler chaque flex item de manière indépendante grâce à certaines propriétés du modèle des boites flexibles et / ou leur appliquer des propriétés de disposition en tant que groupe en manipulant le conteneur flexible. Notez également qu’on va pouvoir créer autant de niveau d’imbrication de conteneurs et d’éléments flexibles que souhaité : il va en effet suffire d’ajouter un display : flex à un flex item pour qu’il serve également de conteneur flexible pour ses propres enfants. Finalement, notez qu’on va pouvoir choisir de définir un conteneur flexible qui va avoir les mêmes propriétés qu’un élément de niveau block avec display : flex ou un conteneur qui va posséder les mêmes propriétés qu’un élément de niveau inline avec display : inline- flex. Définir un conteneur flexible avec display : flex ou display : inline-flex n’impactera que le comportement du conteneur et pas celui de ses enfants directs qui seront toujours des éléments flexibles. Notez bien ici que les conteneurs flexibles définissent un nouveau contexte de formatage, ce qui signifie que certaines propriétés qu’on va pouvoir utiliser avec des éléments de type block par exemple ne vont pas se comporter de la même façon avec les éléments flexibles ou ne vont simplement pas pouvoir être utilisées. En particulier, on notera que les propriétés float, clear et vertical-align ne vont pas pouvoir s’appliquer à des éléments flexibles et que les marges haute et basse d’un conteneur flexible ne vont pas fusionner avec celles de ses enfants."
      },
      {
        "type": "h",
        "text": "Axe principal et axe secondaire des boites flexibles"
      },
      {
        "type": "p",
        "text": "En plus de la distinction conteneur flexible / éléments flexibles, vous devez absolument comprendre la notion d’axe principal et d’axe secondaire des boites flexibles. En effet, le comportement (et le résultat) de la plupart des propriétés liées au modèle des boites flexibles va être intimement lié à cette notion d’axe. Pour le dire très simplement, deux axes vont intervenir dans le modèle des boites flexibles : l’axe horizontal et l’axe vertical. La propriété flex-direction va nous permettre de définir quel va être l’axe principal pour un conteneur flexible et ses éléments flexibles ainsi que la direction des éléments le long de cet axe. Le deuxième axe sera ainsi appelé axe secondaire. Par défaut, l’axe principal est l’axe horizontal (et la direction va être celle de l’écriture) et l’axe secondaire est l’axe vertical (et la direction va être de haut en bas). Une nouvelle fois, la plupart des propriétés du flexbox vont permettre d’organiser les éléments selon un axe (certaines selon l’axe principal, d’autres selon l’axe secondaire) et selon la direction. Il va donc être essentiel de bien savoir quel est notre axe principal et quel est notre axe secondaire ! Regardez plutôt l’exemple ci-dessous pour vous en convaincre. La seule différence entre les deux conteneurs flexibles est que l’axe principal du premier défini avec flex- direction est l’axe horizontal tandis que l’axe principal du second est l’axe vertical."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* FLEXBOX : modèle de mise en page flexible (1D) */\n\n/* Activer flexbox sur le CONTENEUR */\n.conteneur {\n  display: flex;\n  /* Les enfants directs deviennent des \"flex items\" */\n}\n\n/* Propriétés du CONTENEUR */\n.conteneur {\n  display: flex;\n  flex-direction: row;         /* row | row-reverse | column | column-reverse */\n  flex-wrap: nowrap;           /* nowrap | wrap | wrap-reverse */\n  justify-content: flex-start; /* Axe principal (horizontal par défaut) */\n  align-items: stretch;        /* Axe croisé (vertical par défaut) */\n  align-content: normal;       /* Plusieurs lignes */\n  gap: 20px;                   /* Espace entre les items */\n  row-gap: 20px;               /* Espace vertical */\n  column-gap: 30px;            /* Espace horizontal */\n}\n\n/* Exemple concret : barre de navigation */\nnav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; /* Logo à gauche, liens à droite */\n  align-items: center;\n  padding: 20px;\n  background: #2c3e50;\n}\n\n/* Centrer un élément (le cas d'utilisation le plus courant) */\n.conteneur-centrage {\n  display: flex;\n  justify-content: center;  /* Centrer horizontalement */\n  align-items: center;      /* Centrer verticalement */\n  min-height: 100vh;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "66-g-rer-la-direction-des-l-ments-flexibles",
    "title": "Gérer la direction des éléments flexibles (« flex-items »)",
    "blocks": [
      {
        "type": "p",
        "text": "(« flex-items ») Le flexbox est un modèle qui va nous permettre de contrôler avec précision la disposition de nos éléments. Pour disposer nos éléments flexibles, il va déjà falloir définir un axe de direction des éléments principal et un axe secondaire. Pour définir l’axe principal, nous allons pouvoir utiliser la propriété flex-direction ou la version raccourcie flex-flow en les appliquant au conteneur flexible. L’objectif de cette leçon est de bien comprendre cette notion d’axe et d’apprendre à modifier la direction des éléments flexibles."
      },
      {
        "type": "h",
        "text": "L’axe principal et la propriété flex-direction"
      },
      {
        "type": "p",
        "text": "La propriété flex-direction nous permet de définir l’axe principal des éléments flexibles. Nous allons utiliser cette propriété sur notre conteneur flexible. Nous allons pouvoir choisir parmi les valeurs de direction suivantes :"
      },
      {
        "type": "list",
        "items": [
          "row : Valeur par défaut. L’axe principal est l’axe horizontal et les éléments flexibles"
        ]
      },
      {
        "type": "p",
        "text": "vont se placer en ligne, dans le sens de la lecture (de gauche à droite pour un français) ;"
      },
      {
        "type": "list",
        "items": [
          "row-reverse : L’axe principal est l’axe horizontal et les éléments vont se placer en"
        ]
      },
      {
        "type": "p",
        "text": "ligne. Cette fois-ci, les éléments se placent dans le sens inverse de la lecture ;"
      },
      {
        "type": "list",
        "items": [
          "column : L’axe principal est l’axe vertical et les éléments vont se placer en colonne,"
        ]
      },
      {
        "type": "p",
        "text": "en partant du début du conteneur vers la fin (du haut vers le bas par défaut) ;"
      },
      {
        "type": "list",
        "items": [
          "column-reverse : L’axe principal est l’axe vertical et les éléments vont se placer en"
        ]
      },
      {
        "type": "p",
        "text": "colonne, en partant de la fin du conteneur vers le début (du bas vers le haut par défaut). Prenons immédiatement un premier exemple pour illustrer cela : Nous définissons ici 4 conteneurs flexibles. Les conteneurs flexibles sont à priori identiques et contiennent chacun 3 éléments désormais flexibles par définition. Nous passons ensuite une valeur de flex-direction différente à chaque conteneur flexible pour définir la direction des éléments flexibles et également l’axe principal. Pour nos deux premiers conteneurs, l’axe principal sera l’axe horizontal. Les éléments flexibles vont ainsi se positionner en ligne, les uns à côté des autres. Avec la valeur row, les éléments suivent le sens de la lecture : les éléments se positionnent de gauche à droite avec le premier élément flexible tout à gauche, puis le deuxième à sa droite et etc. Avec la valeur row-reverse, les éléments se positionnent selon le sens inverse à la lecture : le premier élément sera positionné à droite, le deuxième à sa gauche et etc. Pour nos deux derniers conteneurs flexibles, l’axe principal sera l’axe vertical. Les éléments flexibles vont ainsi se positionner en colonne, les uns au-dessous des autres. La valeur column va faire se positionner les éléments à partir du début (haut) du conteneur et vers la fin (bas) de celui-ci. Ainsi, le premier élément flexible sera en haut du conteneur, le deuxième sera en dessous du premier et etc. Avec la valeur column-reverse, les éléments flexibles vont continuer de se positionner en colonne mais à partir de la fin du conteneur et vers le début. Gérer les dépassements des éléments flexibles du conteneur Dans l’exemple précédent, j’ai choisi les dimensions de mes différents éléments de façon à ce que les éléments flexibles ne dépassent pas de leur conteneur. Cependant, vous devez savoir que si les éléments flexibles occupent plus de place selon leur axe principal que leur conteneur, alors ils vont par défaut dépasser de celui-ci. Cela est dû au fait que les éléments flexibles n’ont pas le droit par défaut d’aller à la ligne (si l’axe principal est l’axe horizontal) ou de se placer sur une autre colonne (si l’axe principal est l’axe vertical). Dans l’exemple précédent, j’ai défini une dimension par défaut pour chacun de mes éléments flexibles égale à 35% de la taille du conteneur avec la propriété flex que nous étudierons plus tard. Pour comprendre l’exemple ci-dessus, vous devez savoir que le flex : 0 0 35% va définir la largeur des éléments flexibles si l’axe principal est l’axe horizontal ou la hauteur de ces éléments si l’axe principal est l’axe vertical. J’ai également ici défini une hauteur fixe pour nos deux conteneurs dont l’axe principal est l’axe vertical car sinon les éléments ne pourraient jamais dépasser. En effet, je vous rappelle que par défaut la hauteur d’un élément va dépendre de celle de ses enfants sauf si une hauteur explicite est précisée. Nous avons donc finalement ici des éléments flexibles qui sont plus grands que leur conteneur (selon leur axe principal) et qui vont donc par défaut dépasser de celui-ci. Pour éviter ce comportement souvent non souhaité, nous allons pouvoir utiliser la propriété flex-wrap qui va pouvoir donner la possibilité aux éléments flexibles d’aller à la ligne ou en colonne s’ils dépassent de leur conteneur. Cette propriété va à nouveau s’appliquer au conteneur et accepte les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "nowrap : Valeur par défaut. Les éléments vont rester sur la même ligne ou sur la"
        ]
      },
      {
        "type": "p",
        "text": "même colonne (selon leur axe principal) ;"
      },
      {
        "type": "list",
        "items": [
          "wrap : Les éléments qui dépassent du conteneur vont avoir la possibilité d’aller à"
        ]
      },
      {
        "type": "p",
        "text": "la ligne ou de se positionner sur une nouvelle colonne à partir du début du conteneur et en allant vers la fin de celui-ci (de haut en bas ou de gauche à droite par défaut);"
      },
      {
        "type": "list",
        "items": [
          "wrap-reverse : Les éléments qui dépassent du conteneur vont avoir la possibilité"
        ]
      },
      {
        "type": "p",
        "text": "d’aller à la ligne ou de se positionner sur une nouvelle colonne à partir cette fois-ci de la fin du conteneur et en allant vers le début (de bas en haut ou de droite à gauche par défaut). La direction des éléments de mon premier conteneur est définie avec flex-direction : row et on laisse la possibilité aux éléments d’aller à la ligne en partant du début du conteneur vers la fin avec flex-wrap : wrap. L’élément qui dépasse va donc être placé sous les autres, sur la gauche. La direction des éléments du deuxième conteneur est également définie avec flex- direction : row mais cette fois-ci on laisse la possibilité aux éléments d’aller à la ligne en partant de la fin du conteneur vers le début avec flex-wrap : wrap-reverse. Selon l’axe horizontal, le « début » du conteneur est sa première ligne tandis que la « fin » du conteneur est sa dernière ligne. Les éléments vont donc ici se positionner à partir du bas du conteneur et les éléments qui dépassent vont se positionner au-dessus. La direction des éléments des troisième et quatrième conteneurs est définie avec flex- direction : row-reverse : les éléments vont se positionner en ligne à partir de la droite et vers la gauche. On applique un flex-wrap : wrap à notre troisième conteneur, ce qui fait que les éléments vont pouvoir se positionner sur plusieurs lignes en partant du haut du conteneur et en allant vers le bas. Les éléments qui dépassent vont donc être renvoyés sur la ligne du dessous. On applique un flex-wrap : wrap-reverse à notre troisième conteneur, ce qui fait que les éléments vont pouvoir se positionner sur plusieurs lignes en partant du bas du conteneur. Les éléments qui dépassent vont être renvoyés vers le haut du conteneur, sur une ligne supérieure. Le même principe va s’appliquer pour les éléments des conteneurs flexibles dont la direction est définie avec column ou column-reverse. Ici, la valeur wrap de la propriété flex-wrap va permettre aux éléments qui dépassent de se positionner sur une nouvelle colonne, en partant de la gauche et en allant vers la droite. Les éléments qui dépassent vont donc être renvoyés sur d’autres colonnes à droite des premiers éléments. La valeur wrap-reverse va elle nous permettre de renvoyer les éléments qui dépassent sur une nouvelle colonne à gauche des premiers éléments."
      },
      {
        "type": "h",
        "text": "La notation raccourcie flex-flow"
      },
      {
        "type": "p",
        "text": "Les deux propriétés flex-direction et flex-wrap peuvent être abrégées grâce à la propriété raccourcie flex-flow. Si une valeur est omise, alors la valeur par défaut de la propriété correspondante sera utilisée à savoir row pour flex-direction et nowrap pour flex-wrap. L’ordre d’affichage des éléments flexibles dans le conteneur En plus de définir une direction pour les éléments de notre conteneur flexible, nous allons également pouvoir choisir leur ordre d’affichage élément par élément grâce à la propriété order. Nous allons appliquer order aux éléments flexibles et non au conteneur et allons pouvoir lui passer un nombre. La valeur de order d’un élément va être comparée à celle des autres et l’élément possédant la plus petite valeur sera affiché en premier, celui possédant la deuxième plus petite valeur en deuxième et etc. La valeur par défaut de order est 0 et si plusieurs éléments possèdent la même valeur pour leur propriété order ils seront affichés selon l’ordre d’écriture du code. Ici, nous avons deux conteneurs flexibles identiques possédant chacun 5 éléments. La seule différence entre nos deux conteneurs va être la direction de leur axe principal : l’axe principal de notre premier conteneur est horizontal selon une direction qui suit le sens de l’écriture (gauche à droite pour moi) tandis que l’axe principal de notre deuxième conteneur est horizontal selon une direction contraire au sens de l’écriture. A chaque fois, on attribue un order : 4 au premier élément des conteneurs, un order : 2 au deuxième élément et un order : -1 au quatrième élément. On ne définit pas de valeur pour la propriété order pour nos troisième et cinquième éléments. La valeur par défaut, 0, sera donc utilisée. L’élément qui possède la valeur la plus petite pour sa propriété order est donc le quatrième élément qui sera affiché en premier puis vont suivre dans l’ordre d’écriture dans le code les troisième et cinquième élément puis le deuxième et enfin le premier. Notez bien ici que l’ordre des éléments va dépendre de la direction de l’axe du conteneur flexible : pour notre deuxième conteneur, le début du conteneur se situe à droite et la fin à gauche. Le premier élément va donc s’afficher à droite, le deuxième à sa gauche et ainsi de suite vers la gauche."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* FLEX-DIRECTION : axe principal du flexbox */\n\n/* row (défaut) : de gauche à droite */\n.horizontal { display: flex; flex-direction: row; }\n\n/* row-reverse : de droite à gauche */\n.horizontal-inverse { display: flex; flex-direction: row-reverse; }\n\n/* column : de haut en bas */\n.vertical { display: flex; flex-direction: column; }\n\n/* column-reverse : de bas en haut */\n.vertical-inverse { display: flex; flex-direction: column-reverse; }\n\n/* FLEX-WRAP : retour à la ligne */\n.avec-wrap { display: flex; flex-wrap: wrap; }         /* Retour à la ligne */\n.sans-wrap  { display: flex; flex-wrap: nowrap; }       /* Tout sur une ligne */\n.wrap-inv   { display: flex; flex-wrap: wrap-reverse; } /* Retour inverse */\n\n/* FLEX-FLOW : raccourci flex-direction + flex-wrap */\n.conteneur { flex-flow: row wrap; }\n\n/* Exemple : grille de cartes responsives */\n.grille-cartes {\n  display: flex;\n  flex-wrap: wrap;         /* Retour à la ligne si pas assez d'espace */\n  gap: 20px;\n}\n\n.carte {\n  flex: 1 1 300px;         /* Grandeur minimale 300px, peut s'agrandir */\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n/* Exemple : layout avec colonne principale et sidebar */\n.layout {\n  display: flex;\n  flex-direction: row;     /* Côte à côte */\n  gap: 30px;\n}\n\n@media (max-width: 768px) {\n  .layout {\n    flex-direction: column; /* L'un en-dessous de l'autre sur mobile */\n  }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "67-g-rer-l-alignement-des-l-ments-flexibles",
    "title": "Gérer l’alignement des éléments flexibles",
    "blocks": [
      {
        "type": "p",
        "text": "Dans la leçon précédente, nous avons vu comment définir l’axe principal d’un conteneur flexible et avons appris à gérer la direction des éléments dans ce conteneur. Le modèle des boites flexibles va nous permettre d’aller plus loin et de définir l’alignement des éléments à l’intérieur du conteneur selon l’axe principal ou l’axe secondaire. Dans cette nouvelle leçon, nous allons apprendre à aligner les éléments d’un conteneur flexible par rapport à leur axe principal ou secondaire en nous servant des propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "justify-content ;",
          "align-items ;",
          "align-content ;",
          "align-self."
        ]
      },
      {
        "type": "p",
        "text": "Attention : cette partie n’est pas simple. Il faudra bien comprendre les concepts d’axe principal et d’axe secondaire et bien se représenter mentalement l’espace que prend une ligne ou une colonne et l’espace que prennent les éléments dans chaque ligne ou colonne. J’ai essayé d’illustrer au maximum pour que vous puissiez bien vous représenter tout cela. N’hésitez pas à faire des pauses, à lire la leçon plusieurs fois et à expérimenter ! Gérer l’alignement des éléments selon l’axe principal avec justify-content La propriété justify-content nous permet d’aligner les éléments d’un conteneur flexibles selon l’axe principal. Plus précisément, cette propriété va nous permettre de définir de quelle manière doit être distribué l’espace restant dans le conteneur. On va l’appliquer au conteneur et pouvoir lui passer l’une des valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "flex-start : Valeur par défaut. Les éléments vont être concentrés au début du"
        ]
      },
      {
        "type": "p",
        "text": "conteneur (selon leur axe principal) ;"
      },
      {
        "type": "list",
        "items": [
          "flex-end : Les éléments vont être concentrés à la fin du conteneur (selon leur axe"
        ]
      },
      {
        "type": "p",
        "text": "principal) ;"
      },
      {
        "type": "list",
        "items": [
          "center : Les éléments vont être centrés dans le conteneur (selon leur axe principal)"
        ]
      },
      {
        "type": "list",
        "items": [
          "space-between : Les éléments vont être régulièrement distribués dans le conteneur."
        ]
      },
      {
        "type": "p",
        "text": "Les éléments se trouvant contre un bord du conteneur vont être collés au bord ;"
      },
      {
        "type": "list",
        "items": [
          "space-around : Les éléments vont être régulièrement distribués dans le conteneur."
        ]
      },
      {
        "type": "p",
        "text": "Chaque élément va posséder le même espace et les espaces vont être cumulatifs entre deux éléments, ce qui fait que la taille de l’espace entre le conteneur et un élément contre le bord du conteneur sera deux fois plus petite qu’entre deux éléments ;"
      },
      {
        "type": "list",
        "items": [
          "space-evenly Les éléments vont être régulièrement distribués dans le conteneur."
        ]
      },
      {
        "type": "p",
        "text": "L’espace entre le bord du conteneur et un élément sera le même que celui entre deux éléments. Prenons immédiatement un exemple pour illustrer le fonctionnement de cette propriété : Dans cette première série d’exemples, notre axe principal est l’axe horizontal et nos éléments flexibles n’occupent qu’une seule ligne dans leur conteneur. La direction d’affichage des éléments est celle du sens de la lecture (de gauche à droite). Ici, la valeur flex-start va aligner les éléments au début du conteneur c’est-à-dire dans le cas présent à gauche de celui-ci tandis que flex-end va les aligner sur la droite et que flex- center va nous permettre de centrer horizontalement les éléments dans le conteneur. Comme vous pouvez le voir, l’espace vide est régulièrement distribué dans le conteneur avec les valeurs space-between, space-around et space-evenly. La seule différence entre ces valeurs va être l’espace qui va être attribué entre les bords du conteneur et les éléments collés contre les bords. La propriété justify-content va se comporter exactement de la même façon dans le cas où les éléments occupent plusieurs lignes dans le conteneur : Regardons de plus près les valeurs space-between, space-around et space-evenly : vous pouvez remarquer que l’espace entre le premier élément et le dernier élément de chaque ligne et le bord du conteneur va être le même pour chaque ligne d’éléments. Ce comportement est tout à fait normal et voulu. Enfin, la propriété justify-content va à nouveau avoir le même effet si l’axe principal est l’axe vertical. Cette fois-ci, la valeur flex-start va nous permettre d’aligner les éléments en haut du conteneur tandis que flex-end va nous permettre de les aligner en bas de celui-ci et que center va les centrer verticalement dans le conteneur. De la même manière c’est l’espace vide dans le sens de la hauteur qui sera distribué régulièrement avec les valeurs space-between, space-around et space-evenly. Ici, faites bien attention à ne pas confondre les effets des propriétés justify-content et flex- direction : la propriété justify-content va gérer la distribution de l’espace vide dans le conteneur tandis que flex-direction va permettre d’indiquer un axe et ou une direction pour nos éléments flexibles et va donc justement permettre de définir où est le « début » et la « fin » du conteneur. Ce que vous devez absolument comprendre ici est que dans le cas où la valeur de flex- direction est row, l’axe principal sera horizontal et le début du conteneur sera son bord gauche. En revanche, dans le cas où flex-direction vaut row-reverse, alors le début du conteneur sera son bord droit. La propriété justify-content va ensuite aligner les éléments du début du conteneur. Ainsi, lorsqu’on applique un justify-content : flex-start sur un conteneur dont la direction est flex- direction : row-reverse, l’effet va être de concentrer les éléments sur la droite du conteneur puisque le début du conteneur correspond à son bord droit. Note : Tous ces concepts de direction sont dépendants de la direction de l’écriture de votre document. Si votre document est défini dans une langue dont l’écriture se fait de droite à gauche alors le début d’un conteneur flexible dont la direction a été définie avec flex- direction : row sera son bord droit."
      },
      {
        "type": "h",
        "text": "Gérer l’alignement des éléments selon l’axe secondaire"
      },
      {
        "type": "p",
        "text": "La gestion de l’alignement des éléments flexibles selon l’axe secondaire va pouvoir se faire de différentes façons et avec plusieurs propriétés :"
      },
      {
        "type": "list",
        "items": [
          "La propriété align-items va nous permettre de gérer l’alignement des éléments au"
        ]
      },
      {
        "type": "p",
        "text": "sein d’une ligne (ou d’une colonne selon les axes principal et secondaires choisis) dans l’axe secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété align-content va nous permettre de gérer l’alignement des lignes (ou"
        ]
      },
      {
        "type": "p",
        "text": "des colonnes selon l’axe) les unes par rapport aux autres dans l’axe secondaire et ne va donc avoir un effet que si nous avons plusieurs lignes (ou colonnes) d’éléments flexibles ;"
      },
      {
        "type": "list",
        "items": [
          "La propriété align-self va nous permettre de gérer l’alignement d’un élément flexible"
        ]
      },
      {
        "type": "p",
        "text": "en particulier dans l’axe secondaire. A partir d’ici, nous allons avoir besoin d’avoir des éléments flexibles de différentes tailles pour bien voir l’effet des différentes propriétés. Pour le moment, je vais me contenter de modifier la hauteur des éléments en attribuant à certains éléments un padding haut et bas en sachant que dans les exemples suivants l’axe principal sera l’axe horizontal sauf mention contraire. Gérer l’alignement des éléments dans une ligne ou dans une colonne selon l’axe secondaire avec align-items La propriété align-items va nous permettre de définir l’alignement des éléments flexibles au sein d’une ligne (ou d’une colonne) selon l’axe secondaire. Cette propriété est l’équivalent de la propriété justify-content mais va permettre l’alignement des éléments selon leur axe secondaire et non pas principal cette fois-ci. Nous allons une nouvelle fois devoir définir align-items pour le conteneur flexible et allons pouvoir lui passer les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "stretch : Valeur par défaut. Les éléments vont s’étirer dans leur axe secondaire"
        ]
      },
      {
        "type": "p",
        "text": "jusqu’à remplir tout l’espace disponible ;"
      },
      {
        "type": "list",
        "items": [
          "flex-start : Les éléments vont être placés au début de leur conteneur en fonction"
        ]
      },
      {
        "type": "p",
        "text": "de l’axe secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "flex-end : Les éléments vont être placés à la fin de leur conteneur en fonction de"
        ]
      },
      {
        "type": "p",
        "text": "l’axe secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "center : Les éléments vont être placés au milieu de leur conteneur en fonction de"
        ]
      },
      {
        "type": "p",
        "text": "l’axe secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "baseline : Les éléments vont être alignés dans leur axe secondaire de telle sorte à"
        ]
      },
      {
        "type": "p",
        "text": "ce que leurs lignes de base (ligne imaginaire sur laquelle est écrit le texte) soient alignées. Dans les exemples ci-dessus, l’axe principal de mon conteneur flexible est l’axe horizontal et l’axe secondaire est donc l’axe vertical. La propriété align-items va donc impacter l’alignement des éléments selon l’axe vertical qui est ici l’axe secondaire. Par défaut, un conteneur va posséder la même hauteur que le plus grand de ses éléments. Ici, la hauteur de mes éléments dépend de leur contenu et des propriétés padding et border. Afin que l’effet des propriétés liées à l’alignement que l’on va étudier soit bien visible, je donne une hauteur fixe plus grande que celle de mes éléments à mon conteneur pour créer de l’espace vide. Comme vous pouvez le constater, la valeur stretch va ici étirer les éléments de façon à ce qu’ils occupent tout l’espace disponible dans leur conteneur selon leur axe secondaire qui est ici l’axe vertical. La valeur flex-start va ici aligner les éléments en haut du conteneur ce qui correspond au début du conteneur dans l’axe vertical tandis que la valeur flex-end va avoir l’effet contraire. La valeur center nous permet ici très simplement de centrer verticalement les éléments dans leur conteneur. Finalement, la valeur baseline permet d’aligner les éléments selon leur ligne de base qui est la ligne sur laquelle sont écrits les textes. De manière similaire, si l’axe vertical est défini comme axe principal pour un conteneur flexible, alors la propriété align-items alignera les éléments selon leur axe horizontal. Bien évidemment, nous allons pouvoir utiliser les propriétés justify-content et align- items ensemble pour aligner les éléments à la fois selon leur axe principal et selon leur axe secondaire. Ici, les éléments de notre premier conteneur se placent au début de celui-ci selon l’axe principal qui est l’axe horizontal c’est-à-dire à gauche et à la fin selon l’axe secondaire (axe vertical) c’est-à-dire en bas. Les éléments du deuxième conteneur s’alignent à la fin de celui-ci à la fois selon l’axe principal et selon l’axe secondaire c’est-à-dire à droite et en bas. Les éléments de notre troisième conteneur sont centrés à la fois dans l’axe principal et dans l’axe secondaire, ils vont ainsi être centrés à la fois horizontalement et verticalement dans le conteneur. On va ainsi très simplement pouvoir obtenir un centrage parfait en utilisant le flexbox. Les éléments de notre quatrième conteneur ont un alignement de type space- around (distribution régulière) selon leur axe principal (horizontal) et sont centrés selon leur axe secondaire c’est-à-dire centrés verticalement."
      },
      {
        "type": "h",
        "text": "Les propriétés flex-wrap et align-items"
      },
      {
        "type": "p",
        "text": "Il convient ici de ne pas confondre les effets des propriétés flew-wrap et align-items. La propriété flex-wrap va définir la possibilité pour les éléments qui dépassent du conteneur de se placer sur une nouvelle ligne ou une nouvelle colonne. Lorsqu’on autorise les éléments à se placer sur une nouvelle ligne ou une nouvelle colonne, c’est-à-dire lorsqu’on passe les valeurs wrap ou wrap-reverse à la propriété flex- wrap, alors cette propriété va également définir la direction de l’axe secondaire. Par défaut, la direction liée à la valeur wrap va être de gauche à droite si l’axe secondaire est l’axe horizontal et de haut en bas si l’axe secondaire est l’axe vertical. Au contraire, si la valeur de flex-wrap est wrap-reverse, alors la direction de l’axe secondaire sera de droite à gauche si c’est l’axe horizontal et de bas en haut si l’axe secondaire est l’axe vertical. La propriété align-items va elle définir l’alignement des éléments dans chaque ligne (ou colonne) selon leur axe secondaire. Le résultat lié aux valeurs de align-items va être intimement lié à la direction définie pour l’axe secondaire. Un flex-flow : row wrap-reverse par exemple va définir que l’axe principal est l’axe horizontal et que sa direction pour nous va être de gauche à droite et que la direction de l’axe vertical sera inversée c’est-à-dire partir du bas (début) vers le haut (fin) pour nous. Ainsi, si on applique également un align-items : flex-end au conteneur flexible, les éléments se placeront à la fin de leur ligne dans le conteneur selon l’axe secondaire c’est- à-dire… en haut de leur ligne ! Gérer l’alignement des lignes ou des colonnes les unes par rapport aux autres selon l’axe secondaire avec align-content La propriété align-content ne va pas nous permettre de gérer l’alignement des éléments au sein d’une ligne ou d’une colonne mais plutôt de gérer l’alignement des différentes lignes (ou colonnes) les unes par rapport aux autres. Cette propriété n’aura d’effet que si le conteneur flexible possède plusieurs lignes (si l’axe principal est horizontal) ou plusieurs colonnes (si l’axe principal est vertical). On va à nouveau définir cette propriété au niveau de notre conteneur et allons pouvoir lui passer une des valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "stretch : Valeur par défaut. Les lignes (ou les colonnes) vont essayer de s’étendre"
        ]
      },
      {
        "type": "p",
        "text": "pour prendre tout l’espace disponible dans le conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "flex-start : Les lignes (ou les colonnes) vont être concentrées au début du"
        ]
      },
      {
        "type": "p",
        "text": "conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "flex-end : Les lignes (ou les colonnes) vont être concentrées à la fin du conteneur;",
          "center : Les lignes (ou les colonnes) vont être concentrées au milieu du conteneur;",
          "space-between : Les lignes (ou les colonnes) vont être régulièrement distribuées"
        ]
      },
      {
        "type": "p",
        "text": "dans le conteneur. La première ligne (ou colonne) va être collée contre le début du conteneur et la dernière sera collée contre la fin du conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "space-around : Les lignes (ou les colonnes) vont être régulièrement distribuées"
        ]
      },
      {
        "type": "p",
        "text": "dans le conteneur. L’espace autour de chaque ligne (colonne) va être le même et cumulatif entre deux lignes (colonnes). Il convient de ne pas confondre align-items et align-content. En effet, ces deux propriétés agissent sur des choses différentes. Imaginez un conteneur flexible défini avec flex-flow : row wrap et contenant deux lignes d’éléments. En appliquant un align-items : flex-start, les éléments du conteneur vont être placé au début de celui-ci selon leur axe secondaire c’est-à-dire en haut de celui-ci ou plus exactement les différents éléments vont être placés au début de leur ligne. En effet, chaque ligne (ou chaque colonne) d’un conteneur flexible agit indépendamment des autres et peut être considérée comme un conteneur à part. Les conteneurs flexibles ont été créés comme cela justement pour nous donner un contrôle sur les éléments dans les lignes (colonnes) et sur les lignes (colonnes) en soi. La propriété align-content va-elle donc nous permettre ensuite d’aligner les lignes ou colonnes du conteneur. Regardez l’exemple ci-dessous pour bien comprendre : L’axe secondaire pour chacun de nos conteneurs flexibles est l’axe vertical. On définit un align-items : flex-start pour notre premier conteneur mais pas de align-content. La valeur par défaut stretch sera donc utilisée. Les lignes vont donc prendre chacune le maximum d’espace dans le conteneur c’est-à-dire 50% chacune et les éléments vont se placer au début de chaque ligne grâce à align-items : flex-start. Ici, vous devez bien comprendre que le fait qu’une ligne s’étende au maximum dans le conteneur ne signifie pas que les éléments qu’elle contient vont également s’étendre. Pour notre deuxième conteneur, on demande cette fois-ci aux lignes de se positionner au début du conteneur. Les lignes vont donc se concentrer en haut du conteneur et avoir par défaut une hauteur égale à celle du plus grand des éléments de la ligne. On ne définit cette fois-ci pas de valeur pour align-items. La valeur par défaut, stretch va donc être utilisée et les éléments vont s’étendre un maximum dans la ligne. On définit pour notre troisième conteneur un align-items : flex-start et un align-content : flex-start. Les lignes vont donc se concentrer au début du conteneur et les éléments vont se concentrer au début de la ligne. Finalement, on définit un align-items : flex-end et un align-content : flex-start pour notre quatrième conteneur. Les lignes vont don à nouveau se concentrer en début de conteneur mais les éléments vont cette fois-ci se concentrer à la fin de leur ligne. Gérer l’alignement d’un élément en particulier dans son axe secondaire avec align-self La propriété align-self va finalement nous permettre de gérer l’alignement d’un élément en particulier dans une ligne (ou une colonne) selon l’axe secondaire. Nous allons cette fois-ci non pas appliquer la propriété au conteneur mais bien aux éléments flexibles et allons pouvoir lui passer les mêmes valeurs qu’à align-items à savoir :"
      },
      {
        "type": "list",
        "items": [
          "stretch ;",
          "flex-start ;",
          "flex-end ;",
          "center ;",
          "baseline."
        ]
      },
      {
        "type": "p",
        "text": "Cette propriété va surcharger la valeur de align-items pour les éléments pour lesquels elle a été définie. Cela signifie en d’autres termes que ce sera la valeur de align-self qui sera retenue pour l’alignement par-dessus la valeur de align-items. De manière similaire à align-items, cette propriété n’aura un effet visible que si la ligne (ou la colonne) est plus grande que les éléments qu’elle contient, c’est-à-dire s’il existe des espaces vides. Dans cet exemple, l’axe secondaire de nos conteneurs est à nouveau l’axe vertical. Notre premier conteneur ne possède qu’une ligne. La hauteur de la ligne va ainsi être égale à celle du conteneur. On définit ici un align-items : flex-start ce qui place les éléments en haut du conteneur et on surcharge ce comportement pour un élément en particulier qu’on place en bas avec align-self : flex-end. Notre deuxième conteneur possède deux lignes. Aucune valeur n’est définie pour align- content et c’est donc sa valeur par défaut stretch qui va s’appliquer. On place ensuite les éléments en haut de chaque ligne avec align-items et on surcharge ce comportement pour deux éléments flexibles avec align-self : flex-end ce qui va les envoyer en bas de leur ligne."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* === justify-content : alignement sur l'AXE PRINCIPAL === */\n/* (horizontal si flex-direction: row) */\n\n.flex { display: flex; }\n\n.flex-start  { justify-content: flex-start; }    /* Début (défaut) */\n.flex-end    { justify-content: flex-end; }      /* Fin */\n.centre      { justify-content: center; }         /* Centre */\n.sb          { justify-content: space-between; } /* Espace entre items */\n.sa          { justify-content: space-around; }  /* Espace autour */\n.se          { justify-content: space-evenly; }  /* Espace égal */\n\n/* === align-items : alignement sur l'AXE CROISÉ === */\n/* (vertical si flex-direction: row) */\n\n.stretch     { align-items: stretch; }    /* Étire (défaut) */\n.flex-start2 { align-items: flex-start; } /* En haut */\n.flex-end2   { align-items: flex-end; }   /* En bas */\n.centre2     { align-items: center; }     /* Centre vertical */\n.baseline    { align-items: baseline; }   /* Ligne de base du texte */\n\n/* Centrage parfait (vertical + horizontal) */\n.centrage-parfait {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n/* === align-self : sur UN item spécifique (override align-items) === */\n.item-special { align-self: flex-end; }\n\n/* === align-content : plusieurs lignes (flex-wrap: wrap requis) === */\n.multilignes {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between; /* flex-start | flex-end | center | space-between... */\n}\n\n/* === order : changer l'ordre visuel sans changer le HTML === */\n.item1 { order: 3; } /* Affiché en 3ème */\n.item2 { order: 1; } /* Affiché en 1er */\n.item3 { order: 2; } /* Affiché en 2ème */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "68-g-rer-la-taille-et-la-flexibilit-des-l-m",
    "title": "Gérer la taille et la flexibilité des éléments flexibles",
    "blocks": [
      {
        "type": "p",
        "text": "flexibles Dans les leçons précédentes, nous avons vu comment définir la direction des éléments flexibles, leur ordre et avons appris à les aligner sur leurs axes principal et secondaire. Le modèle des boites flexibles nous offre une dernière série de propriété qui vont nous permettre de gérer la taille des éléments et de définir leur capacité à grossir et à se rétracter en cas de besoin dans le conteneur, c’est-à-dire définir leur capacité à être « flexible ». Nous allons dans cette nouvelle leçon nous intéresser aux propriétés flex-grow, flex- shrink et flex-basis ainsi qu’à la propriété raccourcie flex. Définir une taille de départ pour nos éléments flexibles avec flex-basis La propriété flex-basis va nous permettre de définir une taille de départ pour les différents éléments d’un conteneur flexible avant distribution éventuelle de l’espace vide du conteneur ou au contraire rétrécissement des éléments. Nous allons appliquer cette propriété directement aux éléments flexibles et allons pouvoir lui passer une valeur, que nous exprimerons généralement en pourcentage de la taille du conteneur. Notez ici que la propriété flex-basis ne va définir que la dimension de base d’un élément liée à son axe principal, c’est-à-dire sa largeur si l’axe principal est horizontal et sa hauteur si l’axe principal est vertical. Cette propriété va par ailleurs surcharger la valeur éventuellement donnée à width ou à height selon que l’axe principal soit horizontal ou vertical. Ici, nous définissons trois conteneurs flexibles qui contiennent trois éléments flexibles chacun. L’axe principal du premier et du troisième conteneurs est horizontal et l’axe principal du deuxième conteneur est vertical. J’ai précisé une hauteur explicite pour nos conteneurs afin de bien voir l’effet des propriétés que nous allons étudier. Je définis ensuite un flex-basis : 20% pour chacun des éléments flexibles ainsi qu’un flex- grow : 0 et un flex-shrink : 0 que nous allons étudier ensuite pour interdire à nos éléments de grossir ou rétrécir. Les éléments de notre premier conteneur vont ainsi avoir une largeur de départ égale à 20% de la largeur du conteneur tandis que les éléments de notre deuxième conteneur auront une hauteur également à 20% de la hauteur du conteneur. Dans notre troisième conteneur, nous définissons un flex-basis différent pour un élément en particulier. L’élément en question aura donc ici une largeur de départ égale à 30% de celle de son conteneur. Notez que nous passons également une largeur et une hauteur explicites à chacun des éléments flexibles de notre troisième conteneur. L’axe principal de ce conteneur est l’axe horizontal : la propriété flex-basis va donc nous permettre de définir la largeur de départ des éléments flexibles et la propriété width va être surchargée. La propriété height va en revanche ici bien s’appliquer. Gérer la capacité des éléments flexibles à grossir avec flex-grow La propriété flex-grow va nous permettre de définir la capacité des éléments à s’étirer dans leur conteneur pour remplir l’espace vide. Nous allons à nouveau l’appliquer aux éléments flexibles. On va passer un nombre positif à flex-grow qui va définir la quantité d’espace disponible qu’un élément doit récupérer par rapport aux autres. La valeur par défaut de flew-grow est 0 ce qui signifie que les éléments n’ont pas le droit de grossir dans leur conteneur. Reprenons l’exemple précédent et appliquons cette fois-ci un flex-grow : 1 aux éléments flexibles. Ici, on définit les dimensions de départ de nos éléments ave la propriété flex-basis. Nos éléments auront donc une largeur ou hauteur selon l’axe principal égale à 20% de leur conteneur sauf pour l’élément possédant la classe .ef30 dont la largeur de départ va être égale à 30% du conteneur. Vous devez bien comprendre ici que flex-basis sert à définir les dimensions de base des éléments flexibles avant un éventuel étirement ou rétrécissement. On va également laisser la possibilité à nos éléments flexibles de s’étirer pour occuper l’espace vide dans le conteneur avec flew-grow : 1. L’espace disponible dans le conteneur va donc être équitablement réparti entre les différents éléments de nos deux premiers conteneurs. Pour notre troisième conteneur, on définit trois comportements de flex-grow différents pour nos trois éléments : notre premier élément va avoir le droit de s’étirer, le deuxième n’aura pas le droit, et le troisième aura le droit et va essayer de récupérer une quantité de l’espace restant dans le conteneur 3 fois plus importante que le premier élément. Si vous êtes familiers des mathématiques, vous pouvez considérer que les nombres passés à flex-grow représentent une pondération. Sinon, retenez simplement que les nombres passés à flex-grow vont définir combien d’espace libre un élément peut avaler par rapport aux autres éléments. Gérer la capacité des éléments flexibles à rétrécir avec flex-shrink En plus de pouvoir gérer la capacité des éléments à grossir pour absorber l’espace vide dans un conteneur, nous allons également pouvoir gérer leur capacité à rétrécir pour éviter que des éléments ne dépassent du conteneur avec la propriété flex-shrink. Cette propriété va s’utiliser de manière similaire à la précédente : nous allons à nouveau pouvoir passer un nombre positif à flex-shrink qui va indiquer la capacité des éléments à rétrécir ainsi que l’importance de leur rétrécissement les uns par rapport aux autres. Cependant, à la différence de flex-grow, la valeur par défaut de flex-shrink est 1 ce qui correspond à laisser la capacité aux éléments de rétrécir. Notez par ailleurs qu’un élément ne va pouvoir rétrécir que jusqu’au point où son contenu est prêt à dépasser de l’élément. Cette fois-ci, on définit une taille de base de 40% pour chacun de nos éléments avec flex- basis : 40% et de 60% pour un élément en particulier dans le troisième conteneur. On interdit également aux éléments de se placer sur plusieurs lignes ou sur plusieurs colonnes en passant la valeur nowrap pour la propriété flex-wrap aux différents conteneurs afin que les éléments dépassent bien par défaut de leur conteneur. Finalement, on laisse la possibilité aux éléments de rétrécir afin qu’ils essaient de ne pas dépasser du conteneur avec flex-shrink : 1. Dans notre troisième conteneur, nous définissons des comportements de rétrécissement différents pour chacun de nos éléments flexibles : le premier élément va pouvoir rétrécir selon un flex-shrink : 1, le deuxième ne pourra pas rétrécir et le troisième va également pouvoir rétrécir selon un flex-shrink : 3, ce qui signifie qu’il va essayer de rétrécir 3 fois plus que le premier élément flexible du conteneur."
      },
      {
        "type": "h",
        "text": "La notation raccourcie flex"
      },
      {
        "type": "p",
        "text": "Nous allons pouvoir définir les trois propriétés flex-grow, flex-shrink et flex-basis d’un coup en utilisant la propriété raccourcie flex. Pour que la propriété fonctionne correctement, il faudra lui passer d’abord la valeur liée à flex-grow, puis celle de flex-shrink et finalement celle de flex-basis. Faites bien attention une nouvelle fois avec l’utilisation des propriétés raccourcies : si l’une des valeurs de la propriété raccourcie a été définie avant alors elle sera écrasée par la valeur de la propriété raccourcie."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* === Propriétés des FLEX ITEMS (enfants) === */\n\n/* flex-grow : capacité à s'agrandir (0 = ne s'agrandit pas) */\n.item { flex-grow: 0; }    /* Valeur par défaut */\n.agrandit { flex-grow: 1; } /* S'agrandit pour remplir l'espace disponible */\n.agrandit-2 { flex-grow: 2; } /* S'agrandit 2x plus que flex-grow: 1 */\n\n/* flex-shrink : capacité à se réduire (1 = peut se réduire) */\n.item { flex-shrink: 1; }  /* Valeur par défaut - peut rétrécir */\n.fixe { flex-shrink: 0; }  /* Ne rétrécit pas */\n\n/* flex-basis : taille de base avant distribution de l'espace */\n.item { flex-basis: auto; }    /* Valeur par défaut */\n.item { flex-basis: 200px; }   /* 200px de base */\n.item { flex-basis: 30%; }     /* 30% du parent */\n\n/* flex : raccourci (grow shrink basis) */\n.item { flex: 0 1 auto; }   /* Valeur par défaut */\n.item { flex: 1; }           /* = flex: 1 1 0 (s'agrandit ET rétrécit) */\n.item { flex: auto; }        /* = flex: 1 1 auto */\n.item { flex: none; }        /* = flex: 0 0 auto (ni ne s'agrandit ni ne rétrécit) */\n\n/* Exemples pratiques */\n\n/* Sidebar + Main (sidebar fixe, main prend le reste) */\n.layout { display: flex; gap: 30px; }\n.sidebar { flex: 0 0 250px; }   /* Largeur fixe 250px */\n.main    { flex: 1; }            /* Prend le reste */\n\n/* 3 colonnes égales */\n.col { flex: 1; }               /* Chaque colonne prend 1 part */\n\n/* Colonne avec taille minimale */\n.card { flex: 1 1 300px; }      /* Minimum 300px, peut s'agrandir */\n\n/* Footer collant (pousse le footer en bas) */\nbody { display: flex; flex-direction: column; min-height: 100vh; }\nmain  { flex: 1; }              /* Prend tout l'espace disponible */\nfooter { /* Taille naturelle */ }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "69-cas-d-utilisation-et-limites-du-flexbox",
    "title": "Cas d’utilisation et limites du flexbox",
    "blocks": [
      {
        "type": "p",
        "text": "Le modèle des boites flexibles ou flexbox est un modèle de disposition très puissant qui permet de créer un conteneur et des éléments flexibles, c’est-à-dire des éléments qui vont pouvoir se réorganiser lorsque le conteneur change de dimension mais également les uns par rapport aux autres. Nous allons pouvoir utiliser les propriétés suivantes pour déclarer un conteneur flexible et disposer nos différents éléments :"
      },
      {
        "type": "list",
        "items": [
          "display : flex nous permet de créer un conteneur flexible ;",
          "flex-direction nous permet de choisir l’axe principal et la direction des éléments"
        ]
      },
      {
        "type": "p",
        "text": "flexibles selon cet axe ;"
      },
      {
        "type": "list",
        "items": [
          "flex-wrap nous permet de laisser la possibilité aux éléments flexibles qui dépassent"
        ]
      },
      {
        "type": "p",
        "text": "du conteneur d’aller à la ligne ou sur une nouvelle colonne et de définir la direction des éléments selon l’axe secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "order permet de choisir l’ordre d’affichage des éléments ;",
          "justify-content permet de définir l’alignement des éléments dans leur axe principal"
        ]
      },
      {
        "type": "list",
        "items": [
          "align-items permet de définir l’alignement des éléments dans leur axe secondaire ;",
          "align-self permet de définir l’alignement d’un élément en particulier dans son axe"
        ]
      },
      {
        "type": "p",
        "text": "secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "align-content permet de définir l’alignement des lignes ou des colonnes selon l’axe"
        ]
      },
      {
        "type": "p",
        "text": "secondaire ;"
      },
      {
        "type": "list",
        "items": [
          "flex-grow permet de laisser la possibilité aux éléments flexibles de grossir pour"
        ]
      },
      {
        "type": "p",
        "text": "absorber l’espace vide dans le conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "flex-shrink permet de laisser la possibilité aux éléments flexibles de rétrécir dans"
        ]
      },
      {
        "type": "p",
        "text": "le conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "flex-basis permet de définir une taille de base pour les éléments flexibles."
        ]
      },
      {
        "type": "p",
        "text": "En pratique, nous allons pouvoir recourir au modèle des boites flexibles pour résoudre simplement de nombreuses questions d’affichage et de positionnement qui pouvaient poser problème par le passé."
      },
      {
        "type": "h",
        "text": "Exemples concrets d’utilisation du flexbox"
      },
      {
        "type": "p",
        "text": "Effectuer un centrage parfait Pendant très longtemps, il a été très difficile d’obtenir un centrage parfait en toute circonstance pour un élément ou un ensemble d’éléments et notamment un centrage vertical. Cela devient très facile avec le flexbox puisqu’on va pouvoir centrer les éléments dans leur axe principal et dans leur axe secondaire. Ici, on centre le ou les éléments par rapport à leur axe principal dans leur conteneur avec justify-content : center et on les centre également dans leur axe secondaire avec align-items : center."
      },
      {
        "type": "h",
        "text": "Créer un menu avec le flexbox"
      },
      {
        "type": "p",
        "text": "Dans les parties précédentes, je vous ai proposé de créer un menu horizontal simple puis un menu déroulant. Pour que notre menu principal s’affiche de manière horizontale, nous avons utilisé la propriété float. Ensuite, pour que les éléments du menu s’affichent correctement, nous leur avons attribué une largeur égale à 100% divisée par le nombre d’éléments. Cette méthode n’était pas parfaite, loin de là. En effet, imaginons qu’on modifie le nombre d’éléments dans le menu : il faudra alors modifier la largeur donnée à chaque élément de menu. De même, selon la taille de certains écrans, on aimerait pouvoir distribuer l’espace dans le conteneur d’une façon ou d’une autre. Nous allons pouvoir gérer tout cela facilement avec le flexbox. Ici, on attribue un flex : 1 1 0 à nos éléments de menu. Cela signifie que nos différents éléments de menu vont tous avoir la même taille de base avec flex-basis : 0 et vont pouvoir grandir ou rétrécir pour absorber l’espace vide du menu ou pour faire de la place à de nouveaux éléments."
      },
      {
        "type": "h",
        "text": "Grouper des éléments"
      },
      {
        "type": "p",
        "text": "Le flexbox va également nous permettre simplement de créer des groupes d’éléments et de les aligner d’un côté ou de l’autre du conteneur. Pour cela, nous allons utiliser la propriété margin et sa valeur auto qui va faire que la marge va consommer tout l’espace vide dans le conteneur. Ici, on attribue un margin-left : auto au troisième élément de notre menu. Cela fait que sa marge gauche va consommer tout l’espace vide du conteneur et va donc repousser l’élément et les éléments suivants sur la droite. Cela va être particulièrement utile pour la création de menus."
      },
      {
        "type": "h",
        "text": "Styliser les formulaires"
      },
      {
        "type": "p",
        "text": "Imaginons que l’on souhaite créer un formulaire d’inscription à une newsletter. La seule information qu’on va demander aux utilisateurs va être leur adresse mail. Ici, plutôt que d’afficher notre unique input sur une ligne puis le bouton d’envoi du formulaire en dessous, on aimerait tout avoir sur la même ligne pour des questions d’ergonomie. Cependant, pour que nos éléments de formulaire alignés s’affichent toujours bien, il va falloir qu’ils se redimensionnent les uns par rapport aux autres en fonction de l’espace disponible. On va pouvoir faire cela très simplement avec le flexbox. Ici, on applique flex : 1 1 auto à notre input de type email afin que celui-ci se redimensionne en fonction des éléments autour et pour qu’il occupe toujours tout l’espace vide dans le conteneur."
      },
      {
        "type": "h",
        "text": "Les limites du flexbox"
      },
      {
        "type": "p",
        "text": "Le modèle des boites flexibles est à l’heure actuelle l’un des modèles de disposition les plus puissants que l’on puisse utiliser. Cependant, comme ce modèle est relativement récent, l’implémentation n’est pas encore parfaite et certaines propriétés manquent pour le moment. Cela va être notamment le cas pour la gestion des gouttières, c’est-à-dire de l’espace entre les éléments flexibles. En effet, par défaut, nos différents éléments flexibles vont venir se coller les uns aux autres. Pour créer des gouttières, c’est-à-dire pour créer un espace entre ces éléments, j’ai jusqu’à présent utilisé la propriété margin. Le problème ici est que cela va également créer un espace entre les éléments et le bord du conteneur, ce qui n’est pas toujours le comportement voulu. Pour annuler cet espace, la solution actuellement admise est d’attribuer des marges négatives au conteneur qui vont venir contrebalancer les marges attribuées aux éléments flexibles. Notez qu’on ne sera bientôt plus obligé d’utiliser cette technique puisque deux nouvelles propriétés qui vont nous permettre justement de créer des gouttières sont en train d’être ajoutées au modèle des boites : les propriétés row-gap et column-gap. Ces propriétés ne sont néanmoins pour le moment pas supportées par la plupart des navigateurs."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* FLEXBOX : Cas d'utilisation courants */\n\n/* 1. Centrage parfait */\n.centrage { display: flex; justify-content: center; align-items: center; }\n\n/* 2. Navigation horizontale */\nnav ul { display: flex; list-style: none; gap: 20px; }\n\n/* 3. Cards en ligne avec wrap */\n.cartes { display: flex; flex-wrap: wrap; gap: 20px; }\n.carte { flex: 1 1 280px; }\n\n/* 4. Bouton avec icône */\n.btn-icone { display: flex; align-items: center; gap: 8px; }\n\n/* 5. Layout 2 colonnes */\n.page { display: flex; }\n.sidebar { flex: 0 0 250px; }\n.contenu { flex: 1; }\n\n/* 6. Footer collant en bas */\nbody { display: flex; flex-direction: column; min-height: 100vh; }\nmain { flex: 1; }\n\n/* FLEXBOX EST IDÉAL POUR :\n   - Aligner des éléments sur un axe (1D)\n   - Distribuer l'espace entre les éléments\n   - Centrer un élément dans son parent\n   - Navigation / barres d'outils\n   - Composants UI (boutons, cartes, formulaires)\n\n   LIMITES :\n   - Pour les layouts 2D complexes (lignes ET colonnes) → utiliser CSS GRID\n   - N'est pas fait pour les mises en page de pages entières (préférer Grid)\n   - Les navigateurs très anciens (IE9-) ne le supportent pas\n*/\n\n/* Comparaison Flexbox vs Grid */\n/* Flexbox : 1 dimension (soit lignes, soit colonnes) */\n.flex-exemple { display: flex; gap: 20px; }\n\n/* Grid : 2 dimensions (lignes ET colonnes simultanément) */\n.grid-exemple {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto auto;\n  gap: 20px;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "70-exercice-4-cr-ation-d-un-menu-flex",
    "title": "EXERCICE #4 : Création d’un menu flex",
    "blocks": [
      {
        "type": "p",
        "text": "Dans un exercice précédent, nous avons réussi à créer un menu déroulant et sticky en HTML et en CSS en utilisant notamment les propriétés float et position. Pour rappel, voici le code et le résultat auquel on était parvenu : Le résultat était relativement bon mais pas parfait. Une chose était particulièrement ennuyeuse avec ce menu : le fait qu’on avait dû définir un width : 25% pour chaque élément de menu. Cela rend le menu peu flexible puisque chaque élément va prendre exactement la même place quel que soit son contenu et car il faudra changer la valeur de largeur dès qu’on enlève ou ajoute un élément pour garder un affichage correct. Ici, le flexbox semble tout indiqué pour résoudre nos problèmes puisqu’on va pouvoir laisser les éléments se redimensionner en fonction des autres et grossir ou rétrécir selon l’espace restant dans le conteneur. Reprenons donc notre menu et transformons-le en utilisant le modèle des boites flexibles."
      },
      {
        "type": "h",
        "text": "Création d’un menu horizontal en utilisant le flexbox"
      },
      {
        "type": "p",
        "text": "Nous allons conserver exactement le même code HTML que dans notre menu précédent et n’allons modifier que le CSS. La première chose que nous allons faire ici va être de retirer tout ce qui a rapport aux flottants. Ensuite, nous allons définir un conteneur flexible en ajoutant un display : flex à notre menu principal (représenté par un élément ul). On va alors pouvoir retirer la propriété width pour nos éléments flexibles li et ajouter plutôt un flex : 1 1 auto ce qui va permettre aux éléments d’avoir une taille de base relative à leur contenu et ensuite de pouvoir grandir pour occuper l’espace vide ou rétrécir pour laisser de la place à de nouveaux éléments. Nous allons toujours vouloir afficher nos sous menus en colonne et, ça tombe bien, le flexbox nous permet de gérer la direction de nos éléments flexibles. On va donc déclarer nos conteneurs .sous comme des conteneurs flexibles et leur ajouter un flex-flow : column wrap. On va ensuite à nouveau passer un flex : 1 1 auto à nos éléments flexibles. Et voilà tout ! Notre menu est désormais flexible et les éléments de menu vont occuper une place relative à leur contenu et pouvoir rétrécir ou s’agrandir en fonction de la taille de la fenêtre et des autres éléments du menu. Voici le résultat visuel auquel vous devriez arriver : Note : Si vous voulez que les différents éléments de menu occupent tous le même espace de base, il suffit de changer la valeur de flex-basis de auto à 0."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Menu Flex</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <header>\n    <nav class=\"navbar\">\n      <a href=\"/\" class=\"logo\">\n        <span class=\"logo-icone\">⬡</span>\n        MonSite\n      </a>\n\n      <ul class=\"nav-liens\">\n        <li><a href=\"#\" class=\"actif\">Accueil</a></li>\n        <li><a href=\"#\">Services</a></li>\n        <li><a href=\"#\">Portfolio</a></li>\n        <li><a href=\"#\">Blog</a></li>\n      </ul>\n\n      <div class=\"nav-actions\">\n        <a href=\"#\" class=\"btn-connexion\">Connexion</a>\n        <a href=\"#\" class=\"btn-cta\">Commencer</a>\n      </div>\n    </nav>\n  </header>\n\n  <main class=\"hero\">\n    <h1>Bienvenue sur MonSite</h1>\n  </main>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: 'Segoe UI', sans-serif; }\n\nheader {\n  background: white;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.08);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.navbar {\n  display: flex;              /* Flexbox */\n  justify-content: space-between; /* Logo | Liens | Actions */\n  align-items: center;        /* Centrage vertical */\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 30px;\n  gap: 40px;\n}\n\n/* Logo */\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: #2c3e50;\n}\n.logo-icone { color: #3498db; font-size: 1.5rem; }\n\n/* Liens de navigation */\n.nav-liens {\n  display: flex;          /* Liens côte à côte */\n  list-style: none;\n  gap: 8px;\n  flex: 1;                /* Prend l'espace disponible */\n  justify-content: center;\n}\n\n.nav-liens a {\n  text-decoration: none;\n  color: #555;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  transition: all 0.2s;\n}\n.nav-liens a:hover, .nav-liens a.actif {\n  background: #f0f4ff;\n  color: #3498db;\n}\n\n/* Boutons d'action */\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;        /* Ne rétrécit pas */\n}\n\n.btn-connexion {\n  text-decoration: none;\n  color: #555;\n  padding: 8px 16px;\n}\n.btn-cta {\n  text-decoration: none;\n  background: #3498db;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.btn-cta:hover { background: #2980b9; }\n\n/* Hero */\n.hero {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);\n}\n.hero h1 { font-size: 3rem; color: #2c3e50; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "71-introduction-au-responsive-design",
    "title": "Introduction au responsive design",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette dernière partie, nous nous attaquons à une notion clef du développement d’un site Internet : le responsive design ou « design adaptable ». Nous allons voir ici les principaux défis apportés par la multiplication des appareils pouvant aller sur le web et comment y répondre efficacement. Comprendre les défis apportés par la multiplication des écrans Il y a quelques années encore, on ne pouvait accéder à Internet et au web que grâce à des ordinateur de bureau. Avec la miniaturisation des composants et les capacités de connexion de plus en plus puissante, cependant, de nouveaux appareils connectés ont vu le jour et les sites web peuvent maintenant être consultés à partir de nombreux appareils différents : ordinateurs de bureau, ordinateurs portables, tablettes, smartphones, montres connectées, etc. Cela a multiplié les défis en termes d’ergonomie et de design pour les concepteurs de site : en effet, comment faire en sorte qu’un site Internet s’affiche correctement à la fois sur un écran de bureau et sur un smartphone ? Doit-on créer deux sites différents ? Deux versions d’un même site ? Dans ce cas-là, est-il préférable de retirer des informations pour rendre la version mobile plus légère ou peut-on se « contenter » de réarranger le contenu ?"
      },
      {
        "type": "h",
        "text": "Une définition rapide du responsive design"
      },
      {
        "type": "p",
        "text": "Lorsqu’on parle de « responsive design » ou de « design adaptable » en français, on fait référence à l’idée selon laquelle un site web devrait s’afficher aussi bien sur un écran de PC que sur un écran de smartphone ou sur n’importe quel type d’appareil. Aujourd’hui, nous pouvons utiliser principalement trois méthodes pour répondre aux défis amenés par les différentes tailles d’écran. On peut :"
      },
      {
        "type": "list",
        "items": [
          "Créer une application dédiée pour les mobiles ;",
          "Créer une « copie mobile » de notre site en utilisant l’initiative AMP (« Accelerated"
        ]
      },
      {
        "type": "p",
        "text": "Mobile Pages ») de Google ;"
      },
      {
        "type": "list",
        "items": [
          "Utiliser les Media Queries ou requêtes media."
        ]
      },
      {
        "type": "p",
        "text": "L’idée de base du responsive design est qu’un site web devrait présenter les mêmes informations quel que soit l’appareil qui l’affiche, en les réarrangeant pour conserver la meilleure ergonomie possible. Nous allons pouvoir achever cela en utilisant les Media Queries qui seront donc la notion centrale de cette partie."
      },
      {
        "type": "h",
        "text": "Une première définition des Media Queries"
      },
      {
        "type": "p",
        "text": "Les Media Queries vont nous permettre d’appliquer certaines règles CSS de manière conditionnelle. Par exemple, on va pouvoir définir une largeur pour un élément pour certaines tailles d’écrans et une largeur différente pour le même élément pour d’autres tailles d’écran. Cela va nous permettre d’afficher des pages avec des organisations différentes selon la taille de l’écran d’un visiteur. Attention ici à ne pas confondre les Media Queries et les valeurs de taille relatives et en % ou le flexbox. Les valeurs en % et le flexbox vont pouvoir permettre aux éléments de grandir ou de rétrécir selon la taille d’un écran mais selon la même règle CSS. Avec les Media Queries, nous allons pouvoir appliquer des règles CSS totalement différentes selon les tailles d’écrans. Notez par ailleurs qu’on va tout à fait pouvoir utiliser le flexbox, etc. dans nos Media Queries. Regardez l’exemple ci-dessous pour bien comprendre : Résultat pour une fenêtre de taille supérieure à 780px : Résultat pour une fenêtre de taille inférieure à 780px : Ici, on commence par définir un conteneur flexible qui va contenir trois éléments flexibles. On définit ensuite l’axe principal et la direction de notre conteneur avec flex-flow : row wrap. Notre axe principal va donc être l’axe horizontal par défaut et les éléments flexibles vont s’afficher les uns à côté des autres. Les éléments seront distribués régulièrement le long de leur axe principal avec justify-content: space-around. On définit finalement une dimension de 20% pour nos éléments flexbiles dans leur axe principal et on leur interdit de grossir automatiquement. Ensuite, on va définir une règle media avec @media. Ici, notre règle va s’appliquer à tous les appareils disposant d’un écran (screen) de taille inférieure ou égale à 780px (max- width : 780px). Dans cette règle media, nous allons pouvoir écrire autant de règles CSS que l’on souhaite. Ces règles CSS ne vont être appliqués que lorsqu’un utilisateur affiche la page avec un écran ou dans une fenêtre de taille inférieure à 780px. Ici, on choisit de définir la direction de notre conteneur flexible avec flex-flow: column wrap pour tous les écrans de taille inférieure à 780px. Notez qu’en cas de conflit (c’est-à-dire si une même propriété a déjà été définie en dehors d’une règle media ou dans une autre règle media), c’est la valeur de la propriété définie dans la règle la plus précise ou la plus restrictive qui va s’appliquer. Dans le cas présent, nos éléments flexibles s’afficheront donc en ligne de manière générale et en colonne dès que la fenêtre fera moins de 780px. Ce type de modification de structure ne serait pas possible en utilisant juste le flexbox ou des valeurs en % et ne va pouvoir être réalisé qu’avec les Media Queries."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* RESPONSIVE DESIGN : adaptation aux différentes tailles d'écran */\n\n/* Mobile First (approche recommandée) :\n   Commencer par les styles mobiles, puis ajouter pour les grands écrans */\n\n/* Styles de base (mobile) */\n.conteneur {\n  width: 100%;\n  padding: 0 16px;\n}\n\n.titre { font-size: 1.5rem; }\n.grille { display: flex; flex-direction: column; gap: 20px; }\n\n/* Tablette (≥ 768px) */\n@media (min-width: 768px) {\n  .conteneur { padding: 0 30px; }\n  .titre { font-size: 2rem; }\n  .grille { flex-direction: row; flex-wrap: wrap; }\n}\n\n/* Desktop (≥ 1024px) */\n@media (min-width: 1024px) {\n  .conteneur { max-width: 1200px; margin: 0 auto; padding: 0 40px; }\n  .titre { font-size: 2.5rem; }\n  .grille { flex-wrap: nowrap; }\n}\n\n/* Desktop large (≥ 1440px) */\n@media (min-width: 1440px) {\n  .conteneur { max-width: 1400px; }\n}\n\n/* Desktop First (l'autre approche) :\n   max-width au lieu de min-width */\n@media (max-width: 1023px) { /* Tablette et mobile */ }\n@media (max-width: 767px)  { /* Mobile seulement */ }\n\n/* Points de rupture courants */\n/* xs : < 576px (mobile portrait) */\n/* sm : ≥ 576px (mobile paysage) */\n/* md : ≥ 768px (tablette) */\n/* lg : ≥ 1024px (desktop) */\n/* xl : ≥ 1280px (large desktop) */\n/* 2xl: ≥ 1536px (très large) */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "72-la-balise-meta-viewport",
    "title": "La balise meta viewport",
    "blocks": [
      {
        "type": "p",
        "text": "Avant d’étudier les Media Queries et la création de design responsives en profondeur, il est important de comprendre le rôle de la balise <meta name= \"viewport\">."
      },
      {
        "type": "h",
        "text": "L’élément HTML meta"
      },
      {
        "type": "p",
        "text": "L’élément HTML meta est utilisé pour définir des métadonnées pour un document HTML. Une métadonnée est une donnée qui ne va pas être affiché sur la page mais qui va pouvoir servir aux différents robots pour comprendre et afficher la page. On va pouvoir ajouter différents attributs à l’élément meta qui vont nous servir à spécifier différents types de données. Les attributs les plus courants de l’élément meta vont être les attributs charset, name et content. Nous connaissons déjà l’attribut charset qui sert à indiquer le jeu de caractères ou l’encodage de notre document. Cet attribut va notamment permettre aux navigateurs d’utiliser le bon jeu de caractères et d’afficher correctement les caractères de notre page et notamment les accents et autres caractères spéciaux comme les cédilles et etc. L’attribut name va nous permettre d’indiquer le type de métadonnées que l’on souhaite passer. Cet attribut va aller de pair avec l’attribut content qui va lui nous permettre de passer une métadonnée en soi. L’attribut name va notamment pouvoir prendre les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "author : la valeur passée à content sera considérée comme étant le nom de l’auteur"
        ]
      },
      {
        "type": "p",
        "text": "du document ;"
      },
      {
        "type": "list",
        "items": [
          "description : la valeur passée à content pourra être utilisée par les moteurs de"
        ]
      },
      {
        "type": "p",
        "text": "recherche comme extrait pour décrire le sujet de notre page ;"
      },
      {
        "type": "list",
        "items": [
          "viewport : la valeur passée à content va nous permettre d’indiquer comment le"
        ]
      },
      {
        "type": "p",
        "text": "navigateur doit afficher la page sur différents appareils."
      },
      {
        "type": "h",
        "text": "Le viewport et les problèmes d’affichage sur mobile"
      },
      {
        "type": "p",
        "text": "Le viewport représente de manière schématique la partie visible d’une page web par un utilisateur ou la fenêtre active. La taille de cette fenêtre va bien évidemment varier en fonction de la taille de l’écran de l’utilisateur et de l’appareil utilisé. Le problème qui s’est posé avec les smartphones est que la taille du viewport, c’est-à-dire la taille de la fenêtre d’affichage des pages web va souvent être différente de la taille physique des écrans. En effet, la plupart des smartphones utilisent un viewport plus grand que la taille réelle de leur écran afin d’éviter aux utilisateurs d’avoir à dézoomer dans le cas où ils consulteraient un site non optimisé pour une navigation sur mobile. Ainsi, imaginons par exemple qu’un smartphone utilise un viewport de 980px de large. Le site va donc s’afficher dans cette fenêtre. Seulement, notre smartphone n’a une taille réelle d’écran que de 400px. Bien évidemment, ici, le viewport ne va pas dépasser de l’écran physique mais va être recadré pour s’afficher dans l’écran. Ainsi, notre site va apparaitre comme dézoomé, puisque le niveau de zoom sera de 400 / 980 = 0,41x. Le vrai problème ici est tous les smartphones et les navigateurs mobiles n’utilisent pas les mêmes tailles de viewport ni les mêmes ratios. Ainsi, nos pages vont apparaitre plus ou moins dézoomées selon les appareils utilisés. La balise meta name= \"viewport\" a été créée pour nous permettre de reprendre le contrôle du viewport et notamment de sa taille et de son échelle afin de proposer la meilleure version de notre site pour les différents appareils."
      },
      {
        "type": "h",
        "text": "La balise meta name= »viewport »"
      },
      {
        "type": "p",
        "text": "La balise meta name= \"viewport\" va permettre de donner des instructions relatives à la taille et à l’échelle du viewport aux navigateurs mobiles afin que les différents éléments d’une page s’affichent au mieux. Nous allons pouvoir passer plusieurs propriétés à l’attribut content. Les propriétés width et height vont nous permettre de contrôler la taille du viewport dans lequel notre page doit s’afficher. On peut leur passer un nombre ou le mot clef device- width qui correspond à la taille de l’écran en pixels CSS à l’échelle 100%. Ici, il me semble intéressant de définir ce qu’est « un pixel CSS ». Les pixels CSS correspondent à la surface utilisable de l’écran. Ce sont des pixels virtuels que l’appareil « pense » avoir. L’idée importante ici est qu’un pixel CSS n’est pas toujours égal à un pixel physique. Les pixels physiques correspondent aux pixels réels qui composent un écran. C’est également ce qu’on appelle la définition d’un écran. Les écrans retina et haute définition possèdent généralement 4 fois plus de pixels réels que de pixels CSS. La propriété user-scalable permet à l’utilisateur de zoomer dans la page (avec la valeur yes) ou, au contraire, lui interdit de la faire (avec la valeur no). Cette propriété est souvent utilisée avec les propriétés minimum-scale et maximum- scale auxquelles on va pouvoir passer un nombre entre 0 et 10 et qui va représenter le niveau de dézoom ou de zoom que l’utilisateur est autorisé à faire. Finalement, la propriété initial-scale permet de définir de niveau de zoom initial du viewport, c’est-à-dire son échelle. Nous allons également pouvoir lui passer un nombre entre 0 et 10."
      },
      {
        "type": "h",
        "text": "Définir le meta viewport : quelles valeurs choisir ?"
      },
      {
        "type": "p",
        "text": "Si vous avez suivi jusque-là, vous devriez avoir compris qu’il est essentiel de définir une balise meta name= \"viewport\" ave des propriétés et des valeurs adaptées afin que les différents navigateurs mobiles ne définissent pas eux-mêmes leur propre viewport et leur niveau de zoom de notre page. Généralement, nous définirons une largeur de viewport égale à la largeur de l’appareil dans le viewport ainsi qu’un niveau de zoom initial égal à 1 et interdirons les utilisateurs de zoomer ou de dézoomer. Nous allons donc utiliser la balise suivante : ."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n\n  <!-- LA BALISE META VIEWPORT : INDISPENSABLE pour le responsive -->\n  <!-- Sans elle, les mobiles affichent la version desktop zoomée out -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <!--\n    width=device-width  : largeur du viewport = largeur de l'appareil\n    initial-scale=1.0   : pas de zoom au démarrage (scale = 1)\n    \n    Options supplémentaires (à éviter) :\n    minimum-scale=1.0   : empêche le dézoom\n    maximum-scale=1.0   : empêche le zoom (mauvaise accessibilité !)\n    user-scalable=no    : empêche tout zoom (DÉCONSEILLÉ - accessibilité)\n  -->\n\n  <title>Site responsive</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Site Responsive</h1>\n  <p>Ce site s'adapte à toutes les tailles d'écran.</p>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Sans la balise meta viewport, les media queries ne fonctionnent pas sur mobile */\n\n/* Avec meta viewport correctement configuré */\nbody {\n  font-size: 16px;   /* Base : 1rem = 16px */\n}\n\n/* Test : ouvrir les DevTools → Toggle device toolbar (Ctrl+Shift+M) */\n\n/* La valeur \"device-width\" en JavaScript */\n/* console.log(window.innerWidth); → largeur du viewport en pixels CSS */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "73-les-media-queries",
    "title": "Les media queries",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons découvrir dans le détail ce que sont les requêtes media ou Media Queries, comprendre comment elles fonctionnent et apprendre à les utiliser."
      },
      {
        "type": "h",
        "text": "Définition des Media Queries"
      },
      {
        "type": "p",
        "text": "Les Media Queries correspondent à des styles CSS conditionnels. Les Media Queries se basent sur la règle CSS @media qui va nous permettre de définir différents styles CSS pour différents types d’appareils media et selon différents critères. Nous allons ainsi, grâce aux Media Queries, pouvoir présenter le même contenu HTML de différentes façons en fonction de l’appareil utilisé par nos visiteurs pour accéder à nos pages. On va ainsi par exemple déjà pouvoir changer la disposition des éléments ou la couleur de fond de nos pages en fonction de la taille de l’écran d’un utilisateur. Le fonctionnement des Media Queries (syntaxe) Dans notre règle @media, nous allons pouvoir placer deux types de conditions ou de contraintes : une condition sur le media utilisé pour afficher la page et une condition sur les caractéristiques du media. A l’origine, on pensait que créer une condition sur le type de media serait suffisante et il n’y avait pas de conditions sur les caractéristiques des media. Cependant, au fil du temps nous nous sommes rendu compte qu’il était beaucoup plus simple et plus logique d’ajouter des conditions sur les caractéristiques d’un media plutôt que sur son type. Ainsi, on peut s’attendre à ce que la condition sur le type de media soit complètement dépréciée dans le futur. A l’heure actuelle, nous pouvons choisir parmi les types de media suivants :"
      },
      {
        "type": "list",
        "items": [
          "all : Valeur par défaut. Nos règles vont s’appliquer à tous les appareils ;",
          "screen : Nos règles ne vont s’appliquer qu’aux appareils dotés d’un écran ;",
          "printer : Nos règles ne s’appliqueront que pour les imprimantes ;",
          "speech : Nos règles ne s’appliqueront qu’aux liseurs d’écran qui sont capable de"
        ]
      },
      {
        "type": "p",
        "text": "rendre le contenu d’une page de manière sonore. Nous allons également pouvoir inverser la valeur logique d’un test avec le mot clef not. En plaçant le mot clef not avant le type de media, nos règles s’appliqueront à tous les appareils media sauf celui spécifié. Ensuite, nous allons pouvoir créer des conditions sur les caractéristiques du media. Notez déjà qu’on peut créer autant de conditions sur des caractéristiques différentes que l’on souhaite. Nous allons devoir entourer chaque condition sur une caractéristique media avec un couple de parenthèses et allons pouvoir séparer deux conditions avec les mots clefs and (et) ou or (ou). Dans le cas où on utilise and, les deux conditions devront être vérifiées. Dans le cas où on utilise or, il suffira qu’une condition soit vérifiée. Il existe de nombreuses caractéristiques sur lesquelles on peut effectuer nos tests. Cependant, en pratique, nous utiliserons généralement des conditions de taille pour distinguer entre différents appareils et utiliserons pour cela les propriétés width, min- width et max-width. Sachez toutefois qu’on peut également conditionner l’application de nos styles CSS à la hauteur d’un media, sa résolution, son processus de scan, à la présence d’un appareil de pointage parmi les mécanismes de saisie et sa précision ou encore à la capacité de l’appareil à survoler les éléments."
      },
      {
        "type": "h",
        "text": "Utilisation pratique des Media Queries"
      },
      {
        "type": "p",
        "text": "Depuis quelques années, la majorité des recherches web se font sur mobile. C’est la raison principale qui a amené Google à aujourd’hui indexer la version mobile des sites Internet et non plus leur version bureau. Cela fait qu’il est indispensable d’avoir une version mobile performante aujourd’hui. Pour cette raison, il est considéré comme une bonne pratique aujourd’hui de créer son site en version mobile d’abord puis d’utiliser les Media Queries pour modifier la disposition du code pour les écrans d’ordinateurs ou de tablettes. Fonctionner de cette manière peut vous sembler tout à fait logique si vous n’avez jamais développé auparavant mais je peux vous assurer que c’est une façon de procéder qu’il est difficile de faire admettre comme norme pour des développeurs expérimentés et habitués à créer des sites version bureau puis à les décliner pour mobile. Dorénavant, nous travaillerons comme cela : on construira la version mobile de nos pages d’abord et nous utiliserons les Media Queries pour adapter nos pages pour des grands écrans. Illustrons cela immédiatement avec un exemple : Résultat pour des petits écrans (type mobile / smartphone) : Résultat pour des écrans de taille moyenne (type tablette) : Résultat pour des grands écrans (type ordinateur) : Dans cet exemple, nous travaillons avec trois niveaux de div : un premier élément conteneur global, deux sous-conteneurs et des div qui servent d’éléments dans ces sous conteneurs. En CSS, on commence donc par créer nos styles mobiles. On va ici appliquer un display : flex à notre conteneur et à nos sous conteneurs afin d’en faire des conteneurs flexibles. Nos sous conteneurs vont donc à la fois être des conteneurs flexibles et des éléments flexibles. Comme les écrans de mobile sont les plus petits, on choisit une organisation des éléments verticale en appliquant un flex-flow : column wrap à la fois à notre conteneur flexible principal et à nos sous conteneurs. On applique également des couleurs de fond et des marges externes à tous les div afin de bien pouvoir les différencier visuellement. Ensuite, on définit deux règles @media qui vont s’adresser à différents appareils. Notre première règle @media est la suivante : @media screen and (min-width: 780px) and (max-width: 979px){}. Cette règle va cibler les appareils media dotés d’un écran dont la largeur est comprise entre 780px et 979px. Si un utilisateur utilise un appareil qui remplit ces conditions, alors les styles CSS indiqués dans la règle @media seront appliqués. Ici, notre règle s’adresse aux écrans de taille moyenne de type tablette. On va vouloir pour ces écrans disposer nos sous conteneurs en ligne mais conserver un affichage des éléments dans les sous conteneurs en colonne. On va donc seulement modifier la direction du conteneur principal. Ici, il faut bien comprendre que les styles de notre règle @media vont être traités de manière prioritaire et surcharger les styles définis globalement si les conditions relatives à l’appareil sont remplies. Cependant, les autres propriétés définies globalement et qui ne sont pas reprécisées dans notre règle @media vont continuer à s’appliquer normalement (comme la couleur de fond par exemple ou la direction des sous conteneurs et etc). Finalement, notre deuxième règle @media s’adresse aux grands écrans. On va ici vouloir afficher tous nos éléments en ligne. Nous allons donc attribuer un flex-flow : row wrap à la fois à notre conteneur flexible principal et à nos sous conteneurs flexibles."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* MEDIA QUERIES : appliquer des styles selon les conditions */\n\n/* Syntaxe : @media type and (condition) { ... } */\n\n/* Types de médias */\n/* all    : tous les appareils (défaut) */\n/* screen : écrans */\n/* print  : impression */\n/* speech : lecteurs d'écran */\n\n/* Print styles */\n@media print {\n  nav, .pub, .btn { display: none; }\n  body { font-size: 12pt; color: black; }\n  a { color: black; text-decoration: none; }\n}\n\n/* Conditions de largeur */\n@media (max-width: 767px) { /* Mobile */\n  .nav-liens { display: none; }\n  .hamburger { display: block; }\n}\n\n@media (min-width: 768px) and (max-width: 1023px) { /* Tablette */\n  .grille { grid-template-columns: 1fr 1fr; }\n}\n\n@media (min-width: 1024px) { /* Desktop */\n  .grille { grid-template-columns: 1fr 1fr 1fr; }\n}\n\n/* Orientation */\n@media (orientation: landscape) { /* Paysage */ }\n@media (orientation: portrait)  { /* Portrait */ }\n\n/* Résolution (haute densité - Retina) */\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo { background-image: url('logo@2x.png'); background-size: 100px; }\n}\n\n/* Préférences utilisateur */\n@media (prefers-color-scheme: dark) {\n  body { background: #1a1a2e; color: #eee; }\n}\n@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}\n\n/* Hover disponible (souris) vs non (tactile) */\n@media (hover: hover) {\n  .btn:hover { background: #2980b9; }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "74-images-responsives",
    "title": "Images responsives",
    "blocks": [
      {
        "type": "p",
        "text": "Grâce aux Media Queries, nous avons pu réorganiser nos éléments HTML en créant des règles CSS spécifiques qui se s’appliquaient qu’à certaines tailles d’écran. Cependant, on ne va pas pouvoir « réorganiser » une image en CSS. Nous allons bien évidemment pouvoir placer notre image dans un conteneur en HTML puis utiliser par exemple le flexbox pour rendre l’image « responsive » mais cela ne va pas être une solution optimale et ceci pour deux raisons :"
      },
      {
        "type": "list",
        "items": [
          "En n’utilisant qu’une seule image, nous allons être obligés de choisir la version la"
        ]
      },
      {
        "type": "p",
        "text": "plus grande possible de celle-ci afin qu’elle ne pixellise pas lorsqu’un utilisateur l’affiche sur un grand écran. Or, plus une image est grande et plus elle est lourde : nous allons donc imposer aux mobiles le téléchargement d’une image très lourde sans raison ce qui va ralentir la vitesse d’affichage de nos pages ;"
      },
      {
        "type": "list",
        "items": [
          "En n’utilisant qu’une seule image, il est fort probable que l’image ne rende pas bien"
        ]
      },
      {
        "type": "p",
        "text": "sur mobile car comme celle-ci sera plus petite à cause de la taille de l’écran le sujet dans l’image va apparaitre lointain ou comme dézoomé. Ces deux problématiques font qu’on aimerait pouvoir proposer différentes versions d’une image pour différents types d’appareil. Nous allons voir comment faire dans ce chapitre."
      },
      {
        "type": "h",
        "text": "Pixels physiques, pixels CSS et écrans retina"
      },
      {
        "type": "p",
        "text": "Nous l’avons vu dans le chapitre sur le viewport : un pixel n’est pas toujours égal à un pixel ! Comprendre cela va être très important pour afficher des images qui vont s’afficher correctement sur tous les appareils. Ici, retenez que les écrans retina ont généralement une résolution deux fois plus importante que les écrans standards. Cela signifie que chaque « pixel retina » est l’équivalent de 4 « pixels standards » (2 en largeur, 2 en hauteur). Ainsi, pour qu’une image s’affiche correctement sur un écran retina, il faudra qu’elle soit deux fois plus grande que l’écran sur lequel elle doit s’afficher (1960x 980px par exemple pour un affichage sur un écran retina de 980x 490px). Notez également ici que certains écrans retina possèdent une résolution 3 fois plus importante qu’un écran standard, auquel cas il faudra une image 3 fois plus grande et etc."
      },
      {
        "type": "h",
        "text": "Une première solution : utiliser des images SVG"
      },
      {
        "type": "p",
        "text": "La première solution, qui semble la plus évidente pour gérer les différentes tailles d’écran et les différentes résolutions est d’utiliser des images au format SVG pour Scalable Vector Graphic. Comme le nom l’indique, ces images sont vectorielles, ce qui signifie qu’on va pouvoir les agrandir ou les rapetisser à l’infini sans perte de qualité. Cependant, cela ne résout qu’une partie du problème puisqu’en n’utilisant qu’une seule image pour toutes les versions de notre site, cette image risque d’apparaitre comme trop imposante pour la version bureau ou trop dézoomée pour la version mobile. De plus, souvent, vous serez obligés d’intégrer des photos ou images d’un format différent comme jpeg ou png. Proposer plusieurs versions d’une image en utilisant les attributs HTML srcset et sizes Nous allons pouvoir ajouter un attribut srcset dans notre élément img qui va nous permettre de fournir plusieurs sources d’images (c’est-à-dire concrètement de fournir plusieurs images différentes) au navigateur parmi lesquelles choisir. Ce qui va nous intéresser ici va être de proposer plusieurs versions d’une même image avec des tailles et des cadrages différents. Pour cet exercice, je vais utiliser trois versions d’une même image que j’ai prédécoupé avant :"
      },
      {
        "type": "list",
        "items": [
          "Une version complète « L » de l’image de dimensions 800x 625px que l’on va servir"
        ]
      },
      {
        "type": "p",
        "text": "aux grands écrans ;"
      },
      {
        "type": "list",
        "items": [
          "Une version « M » rognée avec un premier centrage sur le sujet pour les écrans de"
        ]
      },
      {
        "type": "p",
        "text": "taille moyenne ;"
      },
      {
        "type": "list",
        "items": [
          "Une version « S » de dimensions 400x 625px complètement centrée sur le sujet"
        ]
      },
      {
        "type": "p",
        "text": "pour les petits écrans. Voici à quoi ressemblent mes trois photos : L’attribut srcset va être accompagné d’un attribut sizes qui va nous permettre de préciser un ensemble de conditions relatives au terminal utilisé par un utilisateur (généralement des conditions de tailles de fenêtre) et d’indiquer la largeur que doit occuper l’image dans chaque situation. Ici, nous renseignons chacune des versions de notre image dans l’attribut srcset avec leur valeur intrinsèque en unités w qui sont un équivalent pixel. Pour faire très simple, nous indiquons la largeur de chacune de nos images en pixels avec l’unité w. Ensuite nous allons préciser dans l’attribut size un ensemble de conditions et la largeur de l’espace que doit occuper l’image dans l’écran si une condition est vérifiée. Les conditions seront généralement des conditions sur la taille de la fenêtre et vont être le strict équivalent de nos Media Queries CSS. Par exemple la condition (max-width : 576px) va être vérifiée pour toutes les tailles de fenêtre inférieures à 576px et l’image devra alors être affichée dans un espace de 380px de large. Si cette condition est vérifiée, alors le navigateur utilisera l’image dont les dimensions sont le plus proche de l’espace dans lequel elle devra être affichée. Notez que l’ordre d’écriture des conditions dans sizes compte puisque c’est toujours la première condition vérifiée qui va être retenue. Ainsi, nous déclarerons toujours nos conditions de la plus restrictive à la moins restrictive afin que le navigateur récupère la meilleure version à chaque fois. Le navigateur va donc ici commencer par calculer la taille de l’écran de vos visiteurs puis passer en revue les conditions données jusqu’à ce qu’une condition soit vérifiée. Dès que c’est le cas, le navigateur va noter la largeur de la place que doit occuper l’image et va charger l’image dans srcset dont la taille est la plus proche de la largeur précisée dans notre condition. Attention cependant ici : l’attribut srcset ne donne qu’une indication de préférence au navigateur et celui-ci est libre de l’ignorer pour charger la version de l’image qu’il souhaite. Ainsi, il est possible que le navigateur d’un visiteur ne charge pas la version souhaitée dans le cas où, par exemple, le navigateur possèderait déjà une version avec une meilleure résolution de l’image en cache. En effet, la plupart des navigateurs comprennent bien que l’attribut srcset est utilisé à des fins d’optimisation. Or, si le navigateur possède déjà une version de qualité supérieure cachée d’un média, c’est-à-dire une version déjà téléchargée et prête à l’affichage, alors il est normal qu’il l’affiche puisque cela optimisera le rendu (supposément) et les performances. Faites donc bien attention de votre côté si vous testez srcset à le tester en navigation privée ou à supprimer le cache de votre navigateur afin de bien voir l’image changer en fonction de la taille de l’écran."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* IMAGES RESPONSIVES : s'adaptent à la taille de l'écran */\n\n/* Méthode de base : max-width: 100% */\nimg {\n  max-width: 100%;   /* Ne dépasse jamais son conteneur */\n  height: auto;      /* Conserve le ratio */\n  display: block;    /* Évite l'espace sous les images (inline) */\n}\n\n/* Image qui prend toute la largeur du conteneur */\n.image-pleine {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;         /* cover | contain | fill | none | scale-down */\n  object-position: center;   /* top | center | bottom | left | right | x% y% */\n}\n\n/* Galerie responsive */\n.galerie {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n}\n.galerie img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.3s;\n}\n.galerie img:hover { transform: scale(1.05); }\n\n/* Ratio aspect fixe */\n.image-ratio {\n  aspect-ratio: 16 / 9;   /* 16:9 */\n  width: 100%;\n  object-fit: cover;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "75-exercice-5-cr-ation-d-un-menu-d-roulant-",
    "title": "EXERCICE #5 : Création d’un menu déroulant responsive",
    "blocks": [
      {
        "type": "p",
        "text": "responsive Après un menu horizontal simple / sticky, un menu horizontal déroulant et un menu utilisant le flexbox, nous arrivons finalement à notre dernier exercice de création de menu dans lequel nous allons cette fois-ci essayer de créer un menu responsive, c’est-à-dire un menu dont la disposition va s’adapter en fonction de l’écran de chaque visiteur. Nous n’allons pas ici pouvoir créer quelque chose de parfait. En effet, idéalement, nous voudrons utiliser du JavaScript afin de déclencher l’ouverture et la fermeture du menu mobile. Cependant, nous allons pouvoir déjà faire de belles choses en n’utilisant que du HTML et du CSS ! Ici, nous allons à nouveau nous inspirer de la dernière version de notre menu utilisant le flexbox et modifier certains styles en se concentrant cette fois-ci sur la partie mobile qu’on va vouloir définir comme version standard du menu. Pour rappel, le code de notre dernier menu flexible était le suivant :"
      },
      {
        "type": "h",
        "text": "Choix esthétiques pour la version mobile"
      },
      {
        "type": "p",
        "text": "Lorsqu’on se lance dans un projet de développement, il est important de commencer par définir les « spéc » (spécifications techniques) du projet en question avant de commencer à coder. En effet, le fait de savoir précisément ce qu’on souhaite obtenir et de définir les différentes choses qu’on va pouvoir utiliser pour l’obtenir évite de faire des allers-retours dans son code, d’en supprimer des parties, d’en modifier d’autres et etc. et fait au final gagner beaucoup de temps. Pour notre menu mobile, nous avons deux spécifications majeures : nous voulons que les éléments de menu s’affichent en colonne et voulons également que le menu soit replié par défaut pour éviter qu’il ne consomme trop de place sur l’écran."
      },
      {
        "type": "h",
        "text": "Squelette HTML du menu responsive"
      },
      {
        "type": "p",
        "text": "Ici, nous allons récupérer le squelette HTML de notre menu déroulant utilisant le flexbox. Nous allons toutefois ajouter deux choses à ce code HTML : une balise meta name=\"viewport\" que nous avons découvert dans cette partie ainsi qu’un label avec un élément input type=\"checkbox\" associé qui vont nous servir de « hack » pour nous permettre de déplier et de replier le menu. L’idée ici va être de n’afficher le menu que si la case a été cochée et de le cacher à nouveau dès que celle-ci est décochée."
      },
      {
        "type": "h",
        "text": "Styles CSS du menu responsive"
      },
      {
        "type": "p",
        "text": "Nous allons donc ici commencer par définir la version de mobile de notre menu qui sera sa version standard. Nous utiliserons ensuite les Media Queries pour définir une version pour grands écrans. La première chose que l’on va faire ici va être d’appliquer un display : none à notre élément de liste représentant notre menu puisqu’on veut que celui-ci soit caché par défaut. Nous allons vouloir afficher le menu seulement lorsque notre case à cocher a été effectivement cochée. Dans ce cas-là, nous lui appliquerons un display : flex et un flex- flow : column wrap pour que les éléments s’affichent bien en colonne. Nous allons également déjà en profiter pour appliquer une couleur de fond à tout notre menu. Pour faire cela en CSS, nous allons utiliser la pseudo-classe :checked qui va nous permettre d’appliquer des styles seulement lorsqu’un élément a été coché. Ici, on veut afficher notre menu lorsque notre case à cocher a été cochée. On va donc appliquer notre pseudo-classe au sélecteur nav input[type=checkbox] et allons pouvoir utiliser le symbole + pour appliquer les styles à notre menu puisque l’élément ul suit directement notre élément input. Nous avons lié notre input à un label en HTML grâce aux attributs for et id. Cela signifie qu’il suffit à un utilisateur de cliquer sur le label pour cocher et décocher la case. Cela va donc nous permettre de ne pas afficher la case mais d’afficher uniquement le label. On va vouloir que le label occupe toute la largeur disponible à l’écran. Pour cela, on lui appliquer un display : inline-block et on lui passe une largeur égale à 100% de son élément conteneur. Par ailleurs, nous conservons les styles liés à l’élément nav de notre précédent menu qui nous conviennent très bien. Voilà pour la première partie du menu. Ensuite, nous allons supprimer tout ce qui dépend de la pseudo classe :hover. En effet, les mobiles ne disposent pas de curseur puisque les écrans sont tactiles et donc cette pseudo classe ne fait aucun sens pour la navigation sur mobile. De gros changements vont être faits ici par rapport à notre version de menu précédente. Nous allons ici vouloir afficher l’intégralité du contenu de nos sous menus en toute circonstance. On va donc en profiter pour supprimer ce qui était lié aux propriétés position. Pour ne pas que l’affichage de notre menu pousse les autres éléments vers le bas, nous allons plutôt appliquer une position : absolute au div class=\"conteneur-nav\" créé pour cela ainsi qu’une largeur égale à 100%. On va également en profiter pour supprimer les styles liés au pseudo-élément ::after. Voilà tout pour notre version mobile. Il n’y a plus qu’à s’occuper de la version bureau qu’on avait déjà concrètement créée lors du dernier exercice. Nous allons utiliser ici les Media Queries et cibler en particulier les appareils qui ont un écran de taille supérieure à 980px. Pour ces écrans, on va vouloir que notre menu s’affiche de la même manière que lors de l’exercice précédent. Pour minimiser la taille de notre code et économiser un maximum nos ressources, nous n’allons pas faire de copier-coller du menu précédent ici (ce qui dans tous les cas ne fonctionnerait pas bien car nous avons modifié la structure HTML du menu) mais ne préciser que les styles qui doivent changer. Ici, nous allons déjà nous occuper des éléments qui ont été rajoutés pour le menu mobile. Nous allons passer une position : static à notre div class=\"conteneur-nav\" afin qu’il n’interfère pas avec notre menu et un display : none à notre label et à notre input. On ne peut pas donner de display : none à notre div ici car celui-ci contient tout notre menu. Nous allons ensuite rendre à notre menu principal sa disposition en ligne. Ici, il faut également faire bien attention à gérer le cas où un utilisateur s’amuse à jouer avec la taille de la fenêtre et où la case à cocher a été cochée avant que le menu ne se transforme en sa version bureau. On va donc également appliquer un flex-flow : row wrap lorsque c’est le cas pour que notre menu s’affiche bien dans tous les cas. Aucun piège pour le reste du menu principal : on se contente de rétablir les styles utilisés dans l’exercice précédent avec notamment l’utilisation de la propriété position : Le dernier petit « piège » va se trouver dans le sélecteur qui cible nos sous-menus pour les afficher en colonne lorsque l’utilisateur passe sur un élément du menu principal : on utilise le symbole > dans ce sélecteur qui va cibler les enfants directs. Ici, il faut bien se souvenir qu’on a imbriqué un élément div entre notre nav et notre menu principal ul. Il faudra donc le mentionner au milieu de ce sélecteur. Voilà, notre menu est cette fois-ci définitivement terminé et il va être compliqué d’aller plus loin avec le HTML et le CSS. Voici le résultat final : Si cet exercice vous a semblé compliqué, encore une fois, ne vous inquiétez pas : c’est tout à fait normal ! Ce menu utilise plusieurs fonctionnalités parmi les plus avancées du HTML et du CSS et il est normal que vous n’ayez pas encore tout à fait assimilé comment toutes ces fonctionnalités peuvent fonctionner ensemble. Encore une fois, l’assimilation et la compréhension ne pourra se faire complétement qu’en pratiquant régulièrement et en se confrontant aux difficultés et en cherchant toujours à comprendre les différents comportements obtenus."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Menu responsive : hamburger sur mobile, horizontal sur desktop */\n* { margin: 0; padding: 0; box-sizing: border-box; }\n\nnav { background: #2c3e50; position: sticky; top: 0; z-index: 100; }\n\n.nav-conteneur {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 30px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.logo { color: white; font-size: 1.3rem; font-weight: 700; text-decoration: none; }\n\n/* Bouton hamburger (visible seulement sur mobile) */\n.hamburger {\n  display: none;         /* Caché sur desktop */\n  background: none;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n/* Menu horizontal sur desktop */\n.menu {\n  display: flex;\n  list-style: none;\n  gap: 5px;\n}\n.menu a {\n  color: #ecf0f1;\n  text-decoration: none;\n  padding: 10px 16px;\n  border-radius: 6px;\n  display: block;\n  transition: background 0.2s;\n}\n.menu a:hover { background: #34495e; }\n\n/* === RESPONSIVE : Mobile === */\n@media (max-width: 767px) {\n  .hamburger {\n    display: block;    /* Visible sur mobile */\n  }\n  \n  .menu {\n    display: none;     /* Caché par défaut */\n    flex-direction: column;  /* Vertical */\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background: #2c3e50;\n    padding: 10px 0;\n    box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n  }\n  \n  .menu.ouvert { display: flex; } /* Ouvert via JavaScript */\n  \n  .menu a { border-radius: 0; padding: 14px 30px; }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "78-introduction-aux-grilles-css",
    "title": "Introduction aux grilles CSS",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle partie, nous allons étudier un dernier modèle de disposition : le modèle des grilles. Implémenté en 2017, le modèle des grilles est le modèle de disposition le plus récent et également le plus puissant que nous allons pouvoir utiliser en CSS. La plupart des propriétés qu’on va pouvoir utiliser avec ce modèle vont ressembler aux propriétés des boites flexibles car ces deux modèles possèdent des principes de base communs. Première définition du modèle des grilles et différences avec le flexbox Le modèle des grilles est un modèle bidimensionnel, ce qui signifie que c’est un modèle qui va nous permettre de placer nos éléments en fonction de deux axes. A la différence du modèle des boites flexibles, il n’est plus question ici d’axe principal et d’axe secondaire. Avec le modèle des grilles, les deux axes peuvent être manipulés de la même façon et vont être définis de cette manière :"
      },
      {
        "type": "list",
        "items": [
          "Un axe de bloc qu’on pourra également appeler (pour simplifier) axe vertical ou axe"
        ]
      },
      {
        "type": "p",
        "text": "des colonnes ;"
      },
      {
        "type": "list",
        "items": [
          "Un axe en ligne ou axe horizontal ou encore axe des rangées."
        ]
      },
      {
        "type": "p",
        "text": "Le modèle des grilles va donc s’avérer encore plus puissant que le modèle des boites flexibles qui était principalement unidimensionnel. Pour illustrer cela, imaginons la situation suivante : Ici, j’ai défini un conteneur flexible dont l’axe principal est l’axe horizontal et qui possède 6 éléments flexibles. On définit une taille de base de 25% pour les éléments flexibles et on ne leur laisse pas la possibilité de s’agrandir ou dé rétrécir. En revanche, on donne le droit aux éléments d’aller à la ligne si nécessaire. Nos éléments vont donc se placer les uns à côté des autres en partant du début du conteneur puis passer à la ligne. Avec les boites flexibles, il faut bien comprendre que chaque ligne agit comme un conteneur flexible indépendant. Maintenant, imaginons que je souhaite aligner mon sixième élément flexible dans la ligne. Cela va être impossible avec le flexbox puisqu’il n’existe pas de propriété comme justify- self dans ce modèle. Les grilles ne vont pas posséder cette limitation et nous permettre au contraire de définir l’alignement de chaque élément de grille selon l’axe de bloc et l’axe en ligne. Autre limitation du flexbox par rapport aux grilles : le modèle des boites flexibles ne possède pas au jour d’aujourd’hui de propriété nous permettant de définir la taille des gouttières d’un élément. Une gouttière est l’équivalent d’une marge mais uniquement entre deux éléments flexibles ou de grille et non pas entre un élément et son conteneur. Avec le flexbox, on était donc obligé d’utiliser la propriété margin pour espacer les éléments flexibles les uns des autres puis d’utiliser des marges négatives sur le conteneur pour supprimer les marges créées entre le conteneur et les éléments. Non seulement cette solution n’est pas optimale d’un point de vue propreté du code mais en plus le fait de rajouter des marges aux éléments flexibles risque de poser des problèmes dans la disposition des éléments puisque les marges externes vont venir s’ajouter à la taille des éléments. Les grilles possèdent elles un ensemble de propriétés qui vont nous permettre de définir les gouttières des éléments d’une bien meilleure façon. Vous pouvez donc retenir l’idée suivante pour définir s’il est préférable d’utiliser le flexbox ou les grilles : si vous avez besoin de contrôler la disposition des éléments selon les deux axes ou si vous avez besoin d’espacer précisément les différents éléments, alors utilisez les grilles. Sinon, utilisez le flexbox. Notez par ailleurs que nous allons tout à fait pouvoir utiliser ces deux modèles conjointement et créer des dispositions de page complexes, un créant des éléments de grille qui vont contenir des éléments flexibles par exemple."
      },
      {
        "type": "h",
        "text": "Élément grille conteneur et éléments de grille"
      },
      {
        "type": "p",
        "text": "Pour définir une grille, nous allons devoir appliquer un display : grid (la grille sera de type block) ou un display : inline-grid (la grille sera de niveau inline) à un élément. L’élément auquel on applique un display : grid ou display : inline- grid va automatiquement devenir un élément grille conteneur. De manière similaire au modèle des boites flexibles, tous les enfants directs de notre élément grille conteneur (et seulement les enfants directs) vont automatiquement être des éléments de grille. Voici ci-dessous une première grille : Ici, nous définissons un conteneur de grille avec display : grid. Les enfants directs du conteneur vont ainsi automatiquement devenir des éléments de grille. Ensuite, je définis les colonnes de ma grille avec grid-template-columns. N’essayez pas de tout comprendre tout de suite, nous aurons l’occasion d’étudier cette propriété par la suite."
      },
      {
        "type": "h",
        "text": "Le vocabulaire des grilles"
      },
      {
        "type": "p",
        "text": "Les grilles sont des structures relativement complexes et il est donc essentiel de définir précisément les différentes parties d’une grille que nous allons être amenés à manipuler ou qui vont pouvoir nous être utiles. Le premier concept à comprendre est qu’une grille est constituée de lignes ou de « droites » horizontales et verticales. Ces lignes ne sont pas visibles à l’écran et il faut donc se les imaginer. Ces lignes vont être disposées de chaque côté des colonnes et des rangées d’une grille. Note : Pour les grilles, nous parlerons de « rangées » pour définir les « rows » en anglais et non pas de lignes afin de ne pas les confondre avec les lignes que nous venons de définir ci-dessus. Une grille possédant 3 colonnes et 2 rangées va donc posséder 4 lignes verticales et 3 lignes horizontales, une grille possédant 4 colonnes et 4 rangées va posséder 5 lignes verticales et 5 lignes horizontales et etc. Ci-dessous, vous pouvez retrouver une représentation visuelle des lignes d’une grille. Ma grille contient ici 3 colonnes et 2 rangées. Les lignes verticales ont été dessinées en bleu et les lignes horizontales ont été dessinées en rouge. L’espace entre deux lignes adjacentes est ce qu’on appelle une piste. Le terme piste sert donc tout simplement à désigner indifféremment une colonne ou une rangée dans une grille. Ci-dessus, j’ai créé deux grilles composées de 3 colonnes et de 2 rangées. En jaune, j’ai colorié une piste pour chacune des deux grilles. Une piste est composée de cellules. Tout comme pour les tableaux, une cellule correspond visuellement à l’espace délimité par deux lignes de colonnes et deux lignes de rangées adjacentes. Ci-dessus, j’ai colorié 3 cellules de ma grille en jaune, vert et bleu. Finalement, une zone de grille correspond à l’espace délimité par deux lignes de colonnes et deux lignes de rangées qui ne sont pas nécessairement adjacentes. Ci-dessous, j’ai dessiné une zone dans chacune de mes deux grilles (la première couvre 2 cellules et la deuxième couvre 4 cellules)."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* CSS GRID : système de grille bidimensionnel (lignes ET colonnes) */\n\n/* Activer Grid sur le conteneur */\n.grille {\n  display: grid;\n}\n\n/* Définir les colonnes */\n.grille {\n  grid-template-columns: 200px 200px 200px;          /* 3 colonnes de 200px */\n  grid-template-columns: 1fr 1fr 1fr;                /* 3 colonnes égales */\n  grid-template-columns: 200px 1fr;                  /* Sidebar + main */\n  grid-template-columns: repeat(3, 1fr);             /* 3 colonnes égales (repeat) */\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsif auto */\n}\n\n/* Définir les lignes */\n.grille {\n  grid-template-rows: 100px auto 60px;   /* Header + main + footer */\n}\n\n/* L'unité fr (fraction) */\n/* 1fr = 1 part de l'espace disponible */\n.grille { grid-template-columns: 1fr 2fr 1fr; } /* 25% 50% 25% */\n\n/* Espacement entre les cellules */\n.grille { gap: 20px; }             /* Vertical et horizontal */\n.grille { row-gap: 20px; column-gap: 30px; }\n\n/* Exemple minimal */\n.page {\n  display: grid;\n  grid-template-columns: 250px 1fr;   /* Sidebar | Contenu */\n  grid-template-rows: auto 1fr auto;  /* Header | Main | Footer */\n  min-height: 100vh;\n  gap: 0;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "79-cr-er-une-grille-et-d-finir-des-pistes",
    "title": "Créer une grille et définir des pistes",
    "blocks": [
      {
        "type": "p",
        "text": "Dans la leçon précédente, nous avons vu qu’il suffisait d’appliquer un display : grid à un élément pour le transformer en un élément grille conteneur et ainsi définir notre grille. Notre grille ainsi créée ne va par défaut être composée que d’une seule colonne et d’autant de rangées qu’il y a d’éléments de grille. Dans ce cas, on dit que les pistes sont définies de manière implicite (car elles sont créées par la grille elle-même). Nous allons cependant également pouvoir définir les pistes de nos grilles nous-mêmes, c’est-à-dire explicitement. Nous allons apprendre dans cette leçon à définir explicitement le nombre et la taille des pistes de nos grilles ainsi qu’à maitriser le comportement des pistes définies implicitement. Définir explicitement les colonnes et les rangées d’une grille Pour définir explicitement le nombre et les dimensions de colonnes et de rangées de notre grille, nous allons pouvoir utiliser les propriétés grid-template-columns et grid-template- rows. Ces propriétés vont pouvoir accepter n’importe quelle valeur de type dimension ainsi qu’un type de valeurs spécifique aux grilles : le fr qui représente une fraction de l’espace disponible dans le conteneur et qui va donc nous permettre de définir la taille d’une piste en fonction des autres. Le nombre de valeurs passées à grid-template-columns et à grid-template-rows va déterminer le nombre de colonnes et de rangées de notre grille. Ci-dessus, nous avons une grille qui contient 5 éléments. Nous créons trois colonnes dans notre grille avec grid-template-columns : 1fr 2fr 3fr. Dans ce cas, la deuxième colonne occupera deux fois plus d’espace que la première tandis que la troisième occupera trois fois plus d’espace que la première. Notez qu’on va également tout à fait pouvoir définir nos pistes en utilisant un mélange de différents types d’unités. Dans cet exemple, on crée à nouveau une grille à trois colonnes. Cette fois-ci, on demande à ce que notre première colonne occupe un espace de 200px en largeur. L’espace restant dans le conteneur sera ensuite partagé entre les deux autres colonnes : 1/3 de l’espace restant pour la deuxième colonne et les deux autres tiers pour la dernière colonne. Nous allons encore pouvoir passer une fonction repeat() à grid-template-columns et à grid-template-rows pour créer rapidement plusieurs pistes aux caractéristiques similaires. Cette fonction va accepter deux valeurs : le nombre de pistes à créer ainsi que la taille de chaque piste. Ici, on définit à nouveau trois colonnes dans notre grille. Chaque colonne occupera la même place. Notez qu’on va pouvoir utiliser la fonction repeat() pour définir des motifs. Notez également qu’on va pouvoir définir certaines pistes avec repeat() et certaines pistes individuellement. Dans l’exemple ci-dessus, on crée une première colonne qui va occuper une place de 100px en largeur puis on définit un motif de 2 colonnes à répéter 3 fois avec repeat(). A chaque fois, la première colonne aura une taille de 1fr et la seconde une taille de 2fr."
      },
      {
        "type": "h",
        "text": "Règles de création et taille des pistes implicites"
      },
      {
        "type": "p",
        "text": "Dans les exemples ci-dessus, nous n’avons à chaque fois défini que les colonnes de notre grille et avons laissé la grille définir implicitement son nombre de rangées. On dit qu’une piste est définie implicitement dès qu’elle n’a pas été créée avec grid- template-columns ou grid-template-rows. Une grille va ainsi créer implicitement de nouvelles rangées ou de nouvelles colonnes dès qu’elle va devenir trop petite pour contenir un élément. Cela peut arriver dans deux situations différentes : si on a tenté de placer explicitement un élément en dehors de la grille ou si nos éléments possèdent trop de contenu pour que celui-ci rentre dans la grille. Par défaut, les dimensions des pistes créées implicitement auront la valeur auto ce qui signifie que les pistes ajusteront leur taille selon leur contenu. On va pouvoir définir un autre comportement et une taille pour les pistes créées implicitement grâce aux propriétés grid-auto-rows et grid-auto-columns. Dans l’exemple ci-dessus, on crée une grille et on définit explicitement 3 colonnes avec grid-template-columns : 1fr 2fr 3fr. On ne précise pas de propriété grid-template- rows : les rangées vont donc être créées implicitement. Nous allons donc renseigner une propriété grid-rows-auto pour maitriser la hauteur des rangées créées implicitement par la grille. Définir un intervalle de tailles valides pour les pistes d’une grille Les propriétés grid-template-columns, grid-template-rows, grid-auto-columns et grid- auto-rows vont également pouvoir accepter une fonction minmax() en valeur pour une ou plusieurs pistes. La fonction minmax() va s’avérer très intéressante puisqu’elle va nous permettre de définir des bornes, c’est-à-dire un intervalle de dimensions valides pour nos pistes, que celles-ci aient été définies explicitement ou implicitement. Nous allons passer deux valeurs à cette fonction qui vont correspondre à la borne basse et à la borne haute. Les types de valeurs acceptés par minmax() sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "Une longueur en px par exemple ;",
          "Un pourcentage ;",
          "Une unité de fraction fr ;",
          "Le mot clef max-content qui va représenter la taille idéale de la piste c’est-à-dire la"
        ]
      },
      {
        "type": "p",
        "text": "plus petite taille permettant d’afficher tout le contenu sur une ligne ;"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef min-content qui va représenter la plus petite taille que le piste peut avoir"
        ]
      },
      {
        "type": "p",
        "text": "sans que son contenu ne déborde (avec un contenu éventuellement sur plusieurs lignes) ;"
      },
      {
        "type": "list",
        "items": [
          "Le mot clef auto qui va laisser la piste s’adapter en fonction de son contenu et par"
        ]
      },
      {
        "type": "p",
        "text": "rapport à son autre borne. Dans l’exemple précédent, on utilise grid-auto-rows : minmax(80px, auto) pour indiquer que les rangées créées implicitement ne peuvent pas faire moins de 80px de hauteur et doivent s’adapter à leur contenu si celui-ci est plus grand que la taille minimale. On va également utiliser minmax() en valeur de notre propriété gris-template- columns pour indiquer que notre première colonne doit occuper une largeur minimum de 100px et maximum de 1fr. Ici, dans le cas où la borne haute (1fr) s’avère plus petite que la borne basse (100px), alors elle sera ignorée et minmax() ne servira qu’à définir une taille minimale."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* PISTES GRID : lignes et colonnes */\n\n.grille {\n  display: grid;\n\n  /* Colonnes fixes */\n  grid-template-columns: 100px 200px 150px;\n\n  /* Colonnes en % */\n  grid-template-columns: 25% 50% 25%;\n\n  /* Unité fr (fraction de l'espace restant) */\n  grid-template-columns: 1fr 2fr 1fr;  /* = 25%, 50%, 25% si espace = 100% */\n\n  /* Mélanger les unités */\n  grid-template-columns: 250px 1fr;    /* Sidebar fixe + contenu flexible */\n  grid-template-columns: 250px 1fr 1fr; /* Sidebar + 2 colonnes égales */\n\n  /* repeat() : répéter un motif */\n  grid-template-columns: repeat(4, 1fr);         /* 4 colonnes égales */\n  grid-template-columns: repeat(3, 1fr 2fr);     /* 1fr 2fr 1fr 2fr 1fr 2fr */\n\n  /* auto-fill vs auto-fit */\n  /* auto-fill : crée des colonnes vides si pas assez d'items */\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  /* auto-fit : les colonnes vides se réduisent à 0 (items s'élargissent) */\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\n  /* minmax(min, max) : taille entre min et max */\n  grid-template-columns: minmax(200px, 1fr) 2fr;\n\n  /* Lignes */\n  grid-template-rows: 80px auto 60px; /* Header auto Footer */\n  grid-auto-rows: 150px;              /* Lignes implicites */\n}\n\n/* Nommer les lignes de grille (grid lines) */\n.grille-nommee {\n  grid-template-columns: [debut] 250px [separateur] 1fr [fin];\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "80-positionner-des-l-ments-dans-une-grille",
    "title": "Positionner des éléments dans une grille",
    "blocks": [
      {
        "type": "p",
        "text": "Nous savons désormais comment créer des grilles et comment définir précisément les colonnes et les rangées dont elles se composent. Dans cette leçon, nous allons apprendre à positionner les éléments de grille dans une grille. Les fondamentaux du positionnement des éléments de grille Les éléments de grille vont être positionnés à partir des lignes invisibles créées automatiquement par la grille. Pour rappel, ces lignes vont se trouver de chaque côté des différentes pistes d’une grille. Une grille possédant 3 colonnes et 2 rangées va ainsi disposer de 4 lignes verticales et de 3 lignes horizontales. Dans l’illustration ci-dessous, j’ai tracé en rouge les différentes lignes d’une telle grille qui possède ici 5 éléments : Ces lignes vont par défaut être numérotées dans chacun des deux axes. Elles vont donc posséder un ordre sur lequel on va pouvoir se baser pour positionner nos éléments de grille. La numérotation va dépendre du sens de l’écriture du document. Pour un langage qui se lit de gauche à droite, par exemple, la ligne tout à gauche sera la ligne n°1, celle à sa droite sera la ligne n°2 et etc. dans l’axe de bloc. De même, la ligne tout en haut sera la n°1, celle en dessous la n°2 et etc. dans l’axe en ligne. Pour positionner les éléments de grille dans la grille, nous allons pouvoir indiquer 4 lignes : de lignes de départ (horizontal / vertical) à partir desquelles l’élément doit être placé et deux lignes d’arrivée (horizontal / vertical) où l’élément doit finir. Nous allons donc indiquer une surface qu’un élément doit couvrir et, en même temps qu’on définit son positionnement, définir de facto la taille de l’élément. Cette façon de faire est différente de ce qu’on a pu voir jusqu’à présent et va imposer aux éléments de grille de couvrir toujours un nombre entier de cellules. Ce que vous devez bien comprendre ici est que la définition des tailles / dimensions va se faire au moment où on définit les pistes de notre grille. Pour cette raison, il faudra bien définir au départ si on veut créer une grille à 3, 6, 12, etc. colonnes et également bien définir le comportement des rangées. Ensuite, nous n’allons faire que placer des éléments dans la grille. Fonctionner comme cela peut sembler contraignant mais c’est au final une excellente méthode pour organiser ses éléments et créer des designs complexes puisque toutes les contraintes se font sur la grille et cela va nous éviter d’avoir à envisager toutes les situations de comportement non voulu des différents éléments."
      },
      {
        "type": "h",
        "text": "Positionner des éléments de grille en pratique"
      },
      {
        "type": "p",
        "text": "Par défaut, les éléments de grille vont se positionner à la suite les uns des autres selon le sens de l’écriture du document. Chaque élément va occuper une cellule, c’est-à-dire ne va s’étendre que sur une rangée et sur une colonne. Pour positionner manuellement (ou explicitement) les éléments dans la grille, nous allons pouvoir utiliser les propriétés suivantes :"
      },
      {
        "type": "list",
        "items": [
          "grid-column-start : Indique la ligne de départ de l’élément selon l’axe de bloc (ligne"
        ]
      },
      {
        "type": "p",
        "text": "verticale) ;"
      },
      {
        "type": "list",
        "items": [
          "grid-column-end : Indique la ligne de fin de l’élément selon l’axe de bloc (ligne"
        ]
      },
      {
        "type": "p",
        "text": "verticale) ;"
      },
      {
        "type": "list",
        "items": [
          "grid-row-start : Indique la ligne de départ de l’élément selon l’axe en ligne (ligne"
        ]
      },
      {
        "type": "p",
        "text": "horizontale) ;"
      },
      {
        "type": "list",
        "items": [
          "grid-row-end : Indique la ligne de fin de l’élément selon l’axe en ligne (ligne"
        ]
      },
      {
        "type": "p",
        "text": "horizontale) ;"
      },
      {
        "type": "list",
        "items": [
          "grid-area : Indique une zone de grille dans laquelle l’élément doit de placer."
        ]
      },
      {
        "type": "p",
        "text": "Nous allons également pouvoir utiliser les versions raccourcies grid-column, grid-row. Positionner les éléments de grille en utilisant les lignes des grilles"
      },
      {
        "type": "h",
        "text": "Utiliser la numérotation des lignes pour placer les éléments"
      },
      {
        "type": "p",
        "text": "Nous allons déjà pouvoir passer un chiffre aux propriétés grid-column-start, grid-column- end, grid-row-start et grid-row-end. Le chiffre passé va indiquer le numéro de la ligne où l’élément de grille doit commencer (pour les propriétés -start) ou la ligne où il doit s’arrêter (pour les propriétés -end. Commençons avec un exemple simple d’une grille possédant 5 éléments tous positionnés explicitement : Ici, on indique que notre premier élément doit de positionner à partir de la première ligne verticale et couvrir l’espace jusqu’à la troisième ligne verticale. L’élément sera également compris entre la première et la deuxième ligne horizontale. Notre deuxième élément devra se positionner entre la première et la deuxième ligne verticale et entre la deuxième et la troisième ligne horizontale. On demande à l’élément 3 de se positionner entre la troisième et la quatrième ligne verticale et entre la première et la deuxième ligne horizontale. Notre quatrième élément de grille va se placer entre la première et la troisième ligne verticale et entre la troisième et la quatrième ligne horizontale. Finalement, notre cinquième et dernier élément de grille va recouvrir l’espace entre la troisième et la quatrième ligne verticale et entre la deuxième et la quatrième ligne horizontale de la grille. Notez qu’on ne va pas être obligé de préciser les 4 propriétés pour positionner un élément dans une grille. Pour être tout à fait précis, seule une des deux propriétés grid-column- start et grid-row-start est strictement nécessaire. Attention cependant : si certaines propriétés sont omises pour certains éléments mais précisées pour d’autres, alors les éléments dont les propriétés ont été précisées viendront se placer avant les autres dans la grille et cela peut décaler les autres éléments. En omettant l’une des deux propriétés grid-column-start ou grid-row-start, l’élément sera positionné selon sa position par défaut par rapport à l’axe non défini. En omettant les propriétés grid-column-end et / ou grid-row-end, l’élément suivra son comportement par défaut qui est de n’occuper qu’une piste dans l’axe non défini. Pour le moment, contentons-nous simplement d’omettre les propriétés -end lorsque l’élément n’est positionné que sur une piste. Nous verrons les cas de positionnement plus complexes plus tard. Finalement, notez également qu’on va pouvoir placer un élément à partir de la fin de la grille en indiquant des numéros de lignes négatifs. Dans ce cas, -1 correspond à la dernière ligne définie explicitement, -2 à l’avant dernière etc. En pratique, cette notation est très peu utilisée et va répondre à des besoins très spécifiques."
      },
      {
        "type": "h",
        "text": "Nommer les lignes pour positionner les éléments"
      },
      {
        "type": "p",
        "text": "Jusqu’à présent, nous nous sommes contentés d’utiliser le système de numérotation des lignes créé automatiquement par les grilles. Nous allons également pouvoir nommer nos lignes pour pouvoir ensuite les manipuler plus facilement. Pour cela, nous allons devoir indiquer le nom des lignes entre crochets dans la définition des pistes de la grille avec les propriétés grid-template-columns et grid-template-rows que nous avons étudié précédemment. Reprenons notre grille précédente et nommons des lignes : Ici, ma grille possède à nouveau 3 colonnes et 3 rangées, donc 4 lignes verticales et 4 lignes horizontales. Ici, vous devez bien comprendre que l’on va à la fois nommer les lignes et définir nos pistes avec les propriétés grid-template-columns et grid-template- rows. Regardons de plus près la déclaration relative à grid-template-columns : je commence par donner un nom à ma première ligne, puis je définis la taille de ma première colonne, puis je passe le nom de ma deuxième ligne, puis la taille de ma deuxième colonne et etc. jusqu’au nom de ma dernière ligne. Bien sûr, nous ne sommes pas obligés de nommer toutes les lignes. Par exemple, je n’ai donné de nom qu’au deux lignes horizontales les plus à l’intérieur de ma grille dans grid- template-rows. Ensuite, nous allons pouvoir utiliser ces noms plutôt que les numéros pour positionner nos éléments de grille. Utiliser les propriétés raccourcies grid-column et grid-row pour positionner les éléments dans la grille en fonction des lignes La propriété grid-column est la version raccourcie des propriétés grid-column- start et grid-column-end. La propriété grid-row est la version raccourcie des propriétés grid-row-start et grid-row- end. Nous allons donc pouvoir passer deux valeurs à chacune de ces propriétés. Les valeurs devront être séparées par un slash /. Les valeurs vont pouvoir être numérotées ou être des noms de lignes. Dans le cas où une seule valeur est passée, elle sera considérée comme étant la valeur de départ. En reprenant notre grille précédente, on va ainsi pouvoir écrire :"
      },
      {
        "type": "h",
        "text": "Positionner les éléments en utilisant les zones des grilles"
      },
      {
        "type": "p",
        "text": "Utiliser la numérotation des lignes pour définir des zones et placer les éléments La propriété grid-area va nous permettre de définir des zones dans une grille. Pour cela, nous allons déjà pouvoir lui passer 4 numéros en valeur séparés par des slash. La première valeur correspond au numéro de la ligne horizontale où la zone doit commencer, la deuxième valeur correspond au numéro de la ligne verticale où la zone doit commencer, la troisième valeur correspond au numéro de la ligne horizontale où la zone se termine et la quatrième valeur correspond au numéro de la ligne verticale où la zone se termine. L’ordre des valeurs (pour un langage qui s’écrit de gauche à droite) est donc un ordre antihoraire : haut, gauche, bas, droite. La propriété grid-area va s’appliquer aux éléments de grille et ainsi également définir leur taille. Elle peut ainsi remplacer les propriétés grid-column-start, grid-column-end, grid- row-start et grid-row-end. Illustrons cela en reprenant à nouveau notre grille précédente et en utilisant plutôt grid- area pour placer les éléments dans la grille."
      },
      {
        "type": "h",
        "text": "Nommer des zones pour positionner les éléments"
      },
      {
        "type": "p",
        "text": "Nous allons également pouvoir nommer nos zones de grille pour ensuite placer les éléments. Pour cela, il va falloir procéder en deux étapes. Nous allons déjà passer les différents noms de zones à grid-area puis ensuite les utiliser avec la propriété grid-template-areas pour définir les zones en soi dans notre grille. Nous allons passer à grid-template-areas le nom de nos zones en définissant pour chaque cellule la zone à laquelle elle appartient. Nous allons entourer les valeurs pour chaque rangée de la grille avec un couple de guillemets \"\". Pour laisser une cellule hors zone, nous indiquerons un point . en valeur. Notez que les zones crées doivent toujours être rectangulaires. D’autres formes comme une forme en « L » ne sont à l’heure actuelle pas permises. Ici, la zone hg recouvre les deux premières cellules de la première rangée de notre grille tandis que la zone hd recouvre la troisième cellule de cette rangée. La zone mg recouvre la première cellule de la deuxième rangée de notre grille. La zone bg recouvre les deux premières cellules de la troisième rangée de la grille. Finalement, la zone bd recouvre la dernière cellule de la deuxième rangée de la grille ainsi que la dernière cellule de la troisième rangée de la grille. La deuxième cellule de la deuxième rangée de notre grille n’appartient à aucune zone définie explicitement. Lignes nommées et zones implicites, zones nommées et lignes implicites Nous allons pouvoir donner n’importe quel nom à nos lignes et à nos zones. Cependant, certains noms de lignes vont déclencher des mécanismes de création de zones nommées et à l’inverse la création d’une zone nommée va automatiquement définir des noms pour les lignes qui la définissent. Par exemple, si on utilise un même nom avec les suffixes -start et -end pour nommer les lignes de départ et d’arrivée qui peuvent définir une zone, alors la grille va automatiquement créer la zone en question et va lui donner le même nom sans préfixe. Nous allons ensuite pouvoir utiliser ce nom pour placer nos éléments de grille. Ici, la grille va automatiquement créer une zone ext et une zone int à partir de la définition de nos lignes. On se sert de la zone int pour positionner notre élément de grille. A l’inverse, en créant une zone nommée, la grille va automatiquement nommer les lignes qui servent à la définir en leur ajoutant les suffixes -start pour la ligne de départ et - end pour la ligne d’arrivée. Ici, on définit une zone gauche qui recouvre la première cellule des première et deuxième rangées de la grille. Les lignes gauche-start et gauche-end sont alors automatiquement créées par la grille. On s’en sert pour positionner notre deuxième élément de grille. Notez qu’il n’est pas gênant qu’une ligne verticale possède le même nom qu’une ligne horizontale ou même que deux lignes verticales ou deux lignes horizontales (ou plus) possèdent le même nom. Cela est parfaitement autorisé et peut faire gagner du temps de développement si on souhaite créer des pistes similaires. En cas d’ambiguïté sur le nom de la ligne, la grille utilisera toujours la première des lignes qui portent le même nom. Pour lever l’ambiguïté, on peut préciser le numéro de la ligne derrière son nom pour la cibler en particulier. Ici, on crée une grille possédant à nouveau 3 colonnes et 3 rangées. Toutes les lignes verticales vont porter le nom col (observez bien la syntaxe dans repeat() tandis que toutes les lignes horizontales vont porter le nom ran. Pour placer un élément dans la grille à partir ou jusqu’à une ligne qui n’est pas la première, il faut préciser le numéro de ligne après son nom pour lever l’ambiguïté."
      },
      {
        "type": "h",
        "text": "Les propriétés raccourcies grid-template et grid"
      },
      {
        "type": "p",
        "text": "Notez qu’il existe deux autres propriétés raccourcies qui peuvent servir à positionner les éléments dans une grille : les propriétés grid-template et grid. La propriété grid-template est la version raccourcie des propriétés grid-template- rows, grid-template-columns et grid-template-areas. La propriété grid est une version qui condense encore plus de propriété puisque c’est la version raccourcie de grid-template-rows, grid-template-columns, grid-template- areas, grid-auto-rows, grid-auto-columns et grid-auto-areas. Personnellement, je vous déconseille pour des raisons évidentes de lisibilité d d’utiliser ces deux versions raccourcies qui rendre le code très compliqué à comprendre. Contrôler le positionnement automatique des éléments dans la grille Mélange de positionnement explicite et implicite On ne va pas être obligé de positionner explicitement (c’est-à-dire en utilisant une des propriétés vues précédemment) tous les éléments d’une grille. Dans le cas où certains éléments sont positionnés explicitement et d’autres non, la grille va commencer par placer les éléments positionnés explicitement puis placera ensuite les autres éléments en utilisant le positionnement par défaut. Ici, on ne positionne explicitement que nos éléments 1, 4 et 5. Ce seront donc les premiers éléments positionnés dans la grille. Ensuite, la grille va positionner automatiquement les éléments 2 et 3 en utilisant le positionnement par défaut dès qu’il y aura un espace suffisant dans la grille. L’élément n°2 est le premier élément non positionné explicitement et va donc se positionner dans le premier espace disponible. L’élément n°3 est le deuxième élément non positionné et va donc se positionner dans le premier espace disponible suivant l’élément n°2."
      },
      {
        "type": "h",
        "text": "Placer les éléments automatiquement en colonne"
      },
      {
        "type": "p",
        "text": "Le placement automatique des éléments est défini par la propriété grid-auto-flow. La valeur par défaut est row qui signifie que les éléments positionnés automatiquement viendront se placer à côté des autres tant que possible. Nous allons également pouvoir définir un placement automatique en colonne en utilisant la valeur column de cette même propriété."
      },
      {
        "type": "h",
        "text": "Contrôler le chevauchement des éléments dans une grille"
      },
      {
        "type": "p",
        "text": "Notez également que nous allons pouvoir positionner plusieurs éléments de grille dans les mêmes cellules. Par défaut, le dernier élément déclaré se placera au-dessus des autres. Nous allons alors pouvoir modifier ce comportement et choisir quel élément devra apparaitre au-dessus de quel autre en définissant un z-index pour les différents éléments se chevauchant. Ici, nous créons deux grilles identiques. Les éléments 1, 2, 3 et 4 des deux grilles vont se chevaucher. La première grille suit le comportement par défaut des éléments : le deuxième élément déclaré dans le code viendra se positionner au-dessus du premier, le troisième au-dessus du deuxième et etc. Nous ajoutons ensuite des z-index aux éléments de notre deuxième grille afin de modifier l’ordre d’empilement des éléments."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Positionner les items dans la grille */\n.grille {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 150px);\n  gap: 15px;\n}\n\n/* grid-column : position sur les colonnes (ligne de début / ligne de fin) */\n.large { grid-column: 1 / 3; }    /* De la ligne 1 à la ligne 3 (2 colonnes) */\n.large { grid-column: 1 / -1; }   /* De la 1ère à la dernière ligne (toutes) */\n.large { grid-column: span 2; }   /* S'étend sur 2 colonnes (sans position fixe) */\n\n/* grid-row : position sur les lignes */\n.haut { grid-row: 1 / 3; }        /* De la ligne 1 à la ligne 3 (2 lignes) */\n.haut { grid-row: span 2; }       /* S'étend sur 2 lignes */\n\n/* Raccourci : grid-area : row-start / col-start / row-end / col-end */\n.item { grid-area: 1 / 2 / 3 / 4; } /* Ligne 1 à 3, colonne 2 à 4 */\n\n/* Layout classique avec grid-template-areas */\n.page {\n  display: grid;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main main\"\n    \"footer footer footer\";\n  grid-template-columns: 250px 1fr 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  min-height: 100vh;\n}\n\nheader  { grid-area: header; background: #2c3e50; }\n.sidebar{ grid-area: sidebar; background: #34495e; }\nmain    { grid-area: main; background: #f9f9f9; }\nfooter  { grid-area: footer; background: #2c3e50; }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "81-aligner-et-espacer-les-l-ments-de-grille",
    "title": "Aligner et espacer les éléments de grille",
    "blocks": [
      {
        "type": "p",
        "text": "Dans la leçon précédente, nous avons vu comme positionner ou placer des éléments dans une grille. Il nous reste plus que deux choses à voir pour être totalement opérationnel avec nos grilles : comment aligner les éléments et comment les espacer. En effet, par défaut, les éléments de grille vont s’étirer pour remplir tout l’espace dans lequel on les a positionnés quel que soit leur contenu. Nous allons pouvoir modifier ce comportement grâce aux propriétés d’alignement. La plupart des propriétés d’alignement que nous allons voir ici devraient vous rappeler celles déjà vues dans la partie liée au modèle des boites flexibles et c’est tout à fait normal puisque le module CSS relatif à l’alignement (dans la spécification officielle) est commun à ces deux modèles."
      },
      {
        "type": "h",
        "text": "Les axes des grilles"
      },
      {
        "type": "p",
        "text": "Le modèle des boites flexibles était un modèle unidimensionnel : c’est un modèle qui fonctionne avant tout selon un axe principal. Le modèle des grilles est lui un modèle bidimensionnel : il va fonctionner selon deux axes qu’on va pouvoir manipuler de façon égale. On ne parlera donc plus d’axe « principal » et d’axe « secondaire ». A la place, nous parlerons d’axe de bloc et d’axe en ligne. L’axe de bloc est l’axe selon lequel les éléments de type block sont disposés, c’est-à-dire l’axe vertical puisque les éléments de type block se placent par défaut les uns en dessous des autres. L’axe en ligne est l’axe selon lequel les éléments de type inline sont disposés, c’est-à-dire l’axe horizontal puisque les éléments de type inline vont par défaut se placer les uns à côté des autres. Avec les grilles, nous allons pouvoir gérer indifféremment l’alignement des éléments selon l’axe de bloc et l’axe en ligne. Aligner les éléments ou les pistes d’une grille par rapport à l’axe de bloc Commençons avec l’alignement des éléments ou des pistes selon l’axe de bloc. Nous allons pouvoir gérer cet alignement en utilisant les propriétés align-items, align- self et align-content. La propriété align-items permet de contrôler l’alignement des éléments de grille le long de l’axe de bloc. On va devoir appliquer cette propriété à l’élément conteneur de grille et nous allons pouvoir lui passer les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "stretch : Valeur par défaut. Les éléments de grille vont s’étirer pour occuper toute"
        ]
      },
      {
        "type": "p",
        "text": "la hauteur des cellules dans lesquelles ils sont placés ;"
      },
      {
        "type": "list",
        "items": [
          "start : La hauteur des éléments va être déterminée par leur contenu et les éléments"
        ]
      },
      {
        "type": "p",
        "text": "vont s’aligner à partir du départ (en haut) de l’espace dans lequel ils sont définis ;"
      },
      {
        "type": "list",
        "items": [
          "end : La hauteur des éléments va être déterminée par leur contenu et les éléments"
        ]
      },
      {
        "type": "p",
        "text": "vont s’aligner à partir de la fin (en bas) de l’espace dans lequel ils sont définis ;"
      },
      {
        "type": "list",
        "items": [
          "center : La hauteur des éléments va être déterminée par leur contenu et les"
        ]
      },
      {
        "type": "p",
        "text": "éléments vont s’aligner au milieu de l’espace dans lequel ils sont définis ;"
      },
      {
        "type": "list",
        "items": [
          "baseline : Les éléments vont être alignées de telle sorte à ce que leurs lignes de"
        ]
      },
      {
        "type": "p",
        "text": "base soient alignées les unes par rapport aux autres. Ici, on impose à nos rangées de faire 100px de haut. La hauteur intrinsèque de nos éléments de grille, qui ne contiennent qu’un chiffre, est inférieure à la hauteur des rangées. On va donc pouvoir utiliser align-items pour aligner les éléments en hauteur. On définit également des éléments de hauteurs différentes afin de bien voir l’effet des propriétés d’alignement que nous étudions. Notez ici que la valeur stretch n’a pas la capacité d’étirer un élément qui possède une taille explicite. La propriété align-self permet de contrôler l’alignement d’un élément de grille en particulier dans l’axe de bloc. On va devoir cette fois-ci l’appliquer à l’élément qu’on souhaite aligner. Cette propriété va pouvoir prendre les mêmes valeurs que la propriété align-items. Si les pistes d’une grille n’occupent pas toute la hauteur dans la grille, alors on va pouvoir les aligner dans le conteneur selon l’axe de bloc, c’est-à-dire choisir comment distribuer l’espace restant en hauteur. Nous allons pouvoir faire cela en utilisant la propriété align- content. Cette propriété va être appliquée à l’élément conteneur et nous allons pouvoir lui passer les valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "start : La hauteur des pistes va être définie par la hauteur des éléments et les pistes"
        ]
      },
      {
        "type": "p",
        "text": "vont s’empiler au début du conteneur selon l’axe de bloc c’est-à-dire en haut pour un langage dont l’écriture se fait de haut en bas ;"
      },
      {
        "type": "list",
        "items": [
          "end : La hauteur des pistes va être définie par la hauteur des éléments et les pistes"
        ]
      },
      {
        "type": "p",
        "text": "vont s’empiler à la fin du conteneur selon l’axe de bloc c’est-à-dire en bas pour un langage dont l’écriture se fait de haut en bas ;"
      },
      {
        "type": "list",
        "items": [
          "center : La hauteur des pistes va être définie par la hauteur des éléments et les"
        ]
      },
      {
        "type": "p",
        "text": "pistes vont s’empiler au centre du conteneur selon l’axe de bloc ;"
      },
      {
        "type": "list",
        "items": [
          "baseline : Les pistes vont être alignées de telles sortes à ce que les lignes de base"
        ]
      },
      {
        "type": "p",
        "text": "soient alignées selon l’axe de bloc ;"
      },
      {
        "type": "list",
        "items": [
          "stretch : Les pistes vont s’étirer pour prendre toute la hauteur disponible dans le"
        ]
      },
      {
        "type": "p",
        "text": "conteneur (sauf si une hauteur autre que auto a été explicitement définie) ;"
      },
      {
        "type": "list",
        "items": [
          "space-between : L’espace disponible dans le conteneur va être reparti"
        ]
      },
      {
        "type": "p",
        "text": "équitablement entre les différentes pistes selon l’axe de bloc. La première et la dernière pistes vont être collées contre les bords du conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "space-around : L’espace disponible dans le conteneur va être reparti équitablement"
        ]
      },
      {
        "type": "p",
        "text": "entre les différentes pistes selon l’axe de bloc. L’espace entre les bords du conteneur et la première et la dernière piste sera deux fois moins important qu’entre deux pistes ;"
      },
      {
        "type": "list",
        "items": [
          "space-evenly : L’espace disponible dans le conteneur va être reparti équitablement"
        ]
      },
      {
        "type": "p",
        "text": "entre les différentes pistes et entre une piste et un bord du conteneur selon l’axe de bloc. Ici, on définit des conteneurs de 150px de haut et une hauteur auto pour nos rangées qui vont donc adapter leur hauteur à leur contenu. J’utilise la valeur auto ici car c’est la seule valeur que align-content : stretch va pouvoir surcharger et car je sais que la hauteur de mes éléments est inférieure à la hauteur du conteneur et qu’on pourra donc bien voir l’effet de la propriété align-content. J’ai également conservé les propriétés d’alignement des éléments dans les pistes et les éléments de différentes tailles afin que vous puissiez bien voir l’effet de chaque propriété. Je vous conseille ici d’inspecter vos conteneurs avec les outils pour développeur de votre navigateur afin de bien voir la hauteur et l’alignement de nos différentes pistes. Aligner les éléments ou les pistes d’une grille par rapport à l’axe en ligne De façon similaire à l’alignement selon l’axe de bloc, nous allons pouvoir gérer l’alignement ou plus exactement la justification selon l’axe en ligne des éléments et des pistes en utilisant trois propriétés qui sont justify-items, justify-self et justify-content. La propriété justify-items va nous permettre de contrôler l’alignement de tous les éléments dans le conteneur selon l’axe en ligne. Nous allons devoir appliquer cette propriété à notre élément grille conteneur et allons pouvoir lui passer les mêmes valeurs qu’à la propriété align-items à savoir :"
      },
      {
        "type": "list",
        "items": [
          "stretch : Valeur par défaut. Les éléments de grille vont s’étirer pour occuper toute"
        ]
      },
      {
        "type": "p",
        "text": "la largeur des cellules dans lesquelles ils sont placés ;"
      },
      {
        "type": "list",
        "items": [
          "start : Les éléments vont se placer au début du conteneur selon l’axe en ligne (à"
        ]
      },
      {
        "type": "p",
        "text": "gauche pour un langage qui va de gauche à droite) ;"
      },
      {
        "type": "list",
        "items": [
          "end : Les éléments vont se placer à la fin du conteneur selon l’axe en ligne (à droite"
        ]
      },
      {
        "type": "p",
        "text": "pour un langage qui va de gauche à droite) ;"
      },
      {
        "type": "list",
        "items": [
          "center : Les éléments vont être centrés dans le conteneur selon l’axe en ligne ;",
          "baseline : La ligne de base des éléments va être alignée."
        ]
      },
      {
        "type": "p",
        "text": "Cette fois-ci, afin de bien vous montrer l’effet des propriétés d’alignement dans l’axe en ligne, je définis des éléments de grille de largeurs diverses. Notez qu’une nouvelle fois la valeur stretch ne va pas pouvoir surcharger une largeur définie explicitement. La propriété justify-self va elle nous permettre de contrôler l’alignement selon l’axe en ligne d’un élément en particulier. Nous allons appliquer cette propriété à l’élément de grille qu’on souhaite aligner et allons pouvoir lui passer les mêmes valeurs qu’à justify-items. En cas de conflit avec justify-items, la valeur de justify-self va être prioritaire puisque la sélection est plus précise. Finalement, si les pistes d’une grille n’occupent pas tout l’espace en largeur dans le conteneur, alors nous allons pouvoir les aligner c’est-à-dire choisir comment distribuer l’espace restant selon l’axe en ligne. Nous allons pouvoir faire cela en utilisant la propriété justify-content qu’on va devoir appliquer à l’élément grille conteneur. Nous allons pouvoir lui passer les mêmes valeurs qu’à la propriété align-content à savoir :"
      },
      {
        "type": "list",
        "items": [
          "stretch : Les pistes vont s’étendre pour occuper toute la largeur disponible dans le"
        ]
      },
      {
        "type": "p",
        "text": "conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "start : Les pistes vont se grouper en début de conteneur (à gauche pour un langage"
        ]
      },
      {
        "type": "p",
        "text": "dont l’écriture se fait de gauche à droite) ;"
      },
      {
        "type": "list",
        "items": [
          "end : Les pistes vont se grouper en fin de conteneur (à droite pour un langage dont"
        ]
      },
      {
        "type": "p",
        "text": "l’écriture se fait de gauche à droite) ;"
      },
      {
        "type": "list",
        "items": [
          "center : Les pistes vont se grouper au centre du conteneur selon l’axe en ligne ;",
          "baseline : Les pistes vont s’aligner de telle sorte à ce que leurs lignes de bases"
        ]
      },
      {
        "type": "p",
        "text": "soient alignées selon l’axe en ligne ;"
      },
      {
        "type": "list",
        "items": [
          "space-between : L’espace disponible dans le conteneur va être reparti"
        ]
      },
      {
        "type": "p",
        "text": "équitablement entre les différentes pistes selon l’axe en ligne. La première et la dernière pistes vont être collées contre les bords du conteneur ;"
      },
      {
        "type": "list",
        "items": [
          "space-around : L’espace disponible dans le conteneur va être reparti équitablement"
        ]
      },
      {
        "type": "p",
        "text": "entre les différentes pistes selon l’axe en ligne. L’espace entre les bords du conteneur et la première et la dernière piste sera deux fois moins important qu’entre deux pistes ;"
      },
      {
        "type": "list",
        "items": [
          "space-evenly : L’espace disponible dans le conteneur va être reparti équitablement"
        ]
      },
      {
        "type": "p",
        "text": "entre les différentes pistes et entre une piste et un bord du conteneur selon l’axe en ligne. Pour voir l’effet de justify-content, il faut que les pistes de notre grille n’occupent pas toute la largeur du conteneur. Pour cela, on définit ici une grille de 3 colonnes faisant chacune 100px de large ainsi qu’une taille fixe de 600px pour le conteneur. Ensuite, on utilise justify-content pour distribuer l’espace restant dans le conteneur. La valeur start va regrouper nos différentes colonnes au début du conteneur par exemple, c’est-à-dire à gauche pour une écriture de gauche à droite."
      },
      {
        "type": "h",
        "text": "Propriétés d’alignement raccourcies"
      },
      {
        "type": "p",
        "text": "On va également pouvoir préciser l’alignement des éléments ou des pistes sur les deux axes en une seule fois grâce aux propriétés d’alignement raccourcies suivantes :"
      },
      {
        "type": "list",
        "items": [
          "place-items : notation raccourcie de align-items et justify-items ;",
          "place-self : notation raccourcie de align-self et justify-self ;",
          "place-content : notation raccourcie de align-content et justify-content."
        ]
      },
      {
        "type": "p",
        "text": "Ici, on définit une grille de 3 colonnes et 2 rangées avec des tailles auto. Notre conteneur de grille a des dimensions de 600 * 150px. Les éléments vont être placés en haut à droite dans leur cellule grâce à place-items: start end à l’exception des éléments auxquels on applique place-self: center center qui vont eux être centrés. L’espace en hauteur va être réparti équitablement entre les pistes tandis que l’espace en largeur va être absorbé grâce à la valeur stretch. Ci-dessus, j’ai affiché le découpage de ma grille et donc les pistes (délimitées par des tirets noirs) en utilisant les outils pour développeurs de Chrome (clic droit > inspecter l’élément) afin que vous puissiez bien voir où sont alignés les éléments dans les pistes et les pistes dans le conteneur. Définir les tailles des gouttières pour espacer les éléments de grille Finalement, le modèle des grilles nous offre des propriétés pour éloigner les éléments de grille les uns des autres sans que les éléments ne s’éloignent des bords du conteneur de la grille. On appelle cet espace entre les éléments des gouttières. La dimension des gouttières des cellules d’une grille va pouvoir être définie à l’aide des propriétés column-gap et row- gap ou avec la propriété raccourcie gap. Il faudra appliquer ces propriétés au conteneur. Comme vous pouvez le voir, les gouttières sont des espaces qui n’apparaissent qu’entre deux éléments. On peut ainsi espacer les éléments de grille les uns des autres sans les éloigner des bords du conteneur de grille."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* ALIGNEMENT dans CSS Grid */\n\n.grille {\n  display: grid;\n  grid-template-columns: repeat(3, 200px);\n  grid-template-rows: repeat(2, 150px);\n\n  /* === justify-content : alignement des COLONNES dans le conteneur === */\n  /* (quand les colonnes n'occupent pas toute la largeur) */\n  justify-content: start;         /* Aligné à gauche */\n  justify-content: end;           /* Aligné à droite */\n  justify-content: center;        /* Centré */\n  justify-content: space-between; /* Espace entre colonnes */\n  justify-content: space-around;  /* Espace autour */\n  justify-content: space-evenly;  /* Espace égal */\n\n  /* === align-content : alignement des LIGNES dans le conteneur === */\n  align-content: start;\n  align-content: center;\n  align-content: space-between;\n\n  /* === justify-items : alignement des items dans leur cellule (horizontal) === */\n  justify-items: stretch;    /* Par défaut - remplit la cellule */\n  justify-items: start;      /* À gauche de la cellule */\n  justify-items: end;        /* À droite de la cellule */\n  justify-items: center;     /* Centré dans la cellule */\n\n  /* === align-items : alignement des items dans leur cellule (vertical) === */\n  align-items: stretch;      /* Par défaut */\n  align-items: start;        /* En haut */\n  align-items: end;          /* En bas */\n  align-items: center;       /* Centré verticalement */\n\n  /* place-items : raccourci align-items / justify-items */\n  place-items: center;       /* Centré dans les 2 axes */\n}\n\n/* Sur un item spécifique */\n.item-special {\n  justify-self: center;  /* Centré horizontalement dans sa cellule */\n  align-self: end;       /* En bas de sa cellule */\n}\n\n/* Espacement */\n.grille {\n  gap: 20px;\n  row-gap: 30px;\n  column-gap: 15px;\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "82-exercice-7-cr-ation-d-une-page-3-colonne",
    "title": "EXERCICE #7 : Création d’une page à 3 colonnes avec des éléments flexibles",
    "blocks": [
      {
        "type": "p",
        "text": "colonnes avec des éléments flexibles Le but de cet exercice est de créer un design de page complexe en réutilisant le maximum de concepts vus jusqu’ici : éléments structurants, flexbox, responsive design, grilles, etc. afin de voir une dernière fois comment les différentes notions vues jusqu’ici peuvent fonctionner ensemble en pratique. Je vous propose donc de créer à nouveau une page complète qui va suivre deux dispositions différentes selon qu’elle soit affichée sur petits écrans (sur mobile) ou sur un écran de bureau. Comme nous en avons désormais l’habitude, nous allons commencer par créer la version mobile de la page qui sera la version standard puis utiliserons les Media Queries pour créer une disposition différente pour l’affichage sur bureau. La page va contenir les éléments suivants :"
      },
      {
        "type": "list",
        "items": [
          "1 en-tête ou header qui va comprendre un menu ;",
          "4 blocs de type aside ;",
          "1 bloc de contenu de type article qui contiendra lui-même une structure complète ;",
          "1pied de page ou footer."
        ]
      },
      {
        "type": "p",
        "text": "Notre page suivra un design vertical avec une seule colonne pour l’affichage sur mobile et un design sur 3 colonnes pour l’affichage sur bureau."
      },
      {
        "type": "h",
        "text": "Structure HTML de notre page"
      },
      {
        "type": "p",
        "text": "Comme d’habitude, commençons avec la structure HTML de notre page et notamment avec la structure minimale d’une page HTML et sans oublier la meta name=\"viewport\". Ensuite, nous allons ajouter un titre principal dans notre page et récupérer la structure du menu créé précédemment qui va très bien nous convenir. Nous allons placer le menu (mais pas le titre) dans un élément structurant header. Sous le header, nous allons ajouter nos quatre éléments aside et notre élément article et allons placer tout cela dans un élément section. Notre élément article va lui-même contenir un header, un menu de navigation interne, un corps qu’on va à nouveau placer dans un élément article et un footer. Finalement, nous allons ajouter notre élément footer sous notre élément section. Pour cette partie HTML, nous n’allons pas nous attarder sur le contenu comme on a pu le faire dans l’exercice de création d’un CV puisque ce n’est pas ce qui compte ici. Ce qui nous importe ici va être de créer des dispositions différentes. Libre à vous ensuite de placer le contenu que vous voulez dans les différents blocs HTML et de le mettre en forme !"
      },
      {
        "type": "h",
        "text": "Mise en forme CSS de notre page version mobile"
      },
      {
        "type": "p",
        "text": "Notre page en version mobile ne va posséder qu’une seule colonne. Les différents éléments vont donc être disposés selon un seul axe. Dans cette situation, on préfèrera utiliser le modèle des boites flexibles plutôt que les grilles. Commençons déjà par notre traditionnel reset CSS et par ajouter quelques styles globaux. Ensuite, nous allons reprendre le code de notre menu créé précédemment et allons faire quelques ajustements. Tout d’abord, étant donné que notre élément nav est désormais dans un élément header, nous allons plutôt appliquer la position : sticky au header afin que le menu continue à rester collé lorsqu’on défile dans la page. Nous allons également ici modifier les sélecteurs contenant nav en préférant l’écriture body > header > nav pour bien différencier les styles de notre menu de navigation principal et celui interne à notre élément article. Voilà tout pour les ajustements relatifs au menu. Passons maintenant au corps de page qui va utiliser le modèle des boites flexibles. Ici, nous allons déjà commencer par appliquer un display : flex et un flex-flow : column wrap à notre élément section class=\"conteneur\" pour obtenir une orientation en colonne et transformer ses enfants directs en éléments flexibles. Ensuite, nous allons simplement nous contenter d’ajouter une couleur de fond et une hauteur minimale à nos différents éléments aside. On va maintenant mettre en forme notre élément article class=\"g3 sousconteneur\". Nous allons déjà transformer cet élément en conteneur flexible et allons à nouveau choisir l’axe vertical comme axe principal. On choisit d’afficher la navigation interne de l’article en ligne. Pour cela, on applique à nouveau un display : flex à notre élément de liste ul qui fait office de navigation et on choisit cette fois-ci l’axe horizontal comme axe principal. On espace régulièrement les éléments dans l’axe principal avec justify-content: space-around. Finalement, on applique une mise en forme très basique à notre footer principal qui ne va nous servir ici qu’à afficher une notice de copyright. Voilà tout pour la partie mobile. Passons maintenant à la version bureau sur trois colonnes de notre page."
      },
      {
        "type": "h",
        "text": "Mise en forme CSS de notre page version bureau"
      },
      {
        "type": "p",
        "text": "Pour la version bureau de notre page, nous allons vouloir positionner et aligner les éléments sur les deux axes. Nous allons donc préférer l’utilisation des grilles au modèle des boites flexibles pour les blocs de la page. Nous utiliserons cependant également le flexbox à l’intérieur de certains blocs pour créer des éléments de grille flexibles. Commençons déjà par définir une règle @media screen and (min-width: 980px) et par remplacer les sélecteurs de notre menu principal nav comme précédemment par body > header > nav. Ensuite, nous allons cette fois-ci appliquer un display : grid à notre élément section class=\"conteneur\". On va donc ici créer une grille à trois colonnes avec une colonne centrale deux fois plus large que les colonnes gauche et droite. Notre grille va également posséder deux rangées qui devront faire à minima 300px de haut. On va ensuite positionner nos différents éléments dans notre grille. On va ici vouloir que l’élément article occupe toute la colonne centrale et allons positionner les éléments aside de chaque côté. Et voilà tout ! Notre élément article est toujours un conteneur flexible et les propriétés définies pour l’affichage mobile s’appliquent toujours ici et nous conviennent très bien pour l’affichage sur bureau. Pas besoin d’aller plus loin donc. Nous avons donc créé une page totalement responsive et avec une structure d’affichage complexe en utilisant certaines des notions les plus récentes du HTML et du CSS !"
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Layout 3 colonnes</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"page\">\n    <header>\n      <h1>MonSite</h1>\n    </header>\n\n    <aside class=\"sidebar-gauche\">\n      <h2>Navigation</h2>\n      <nav>\n        <ul>\n          <li><a href=\"#\">Accueil</a></li>\n          <li><a href=\"#\">Articles</a></li>\n          <li><a href=\"#\">Galerie</a></li>\n        </ul>\n      </nav>\n    </aside>\n\n    <main>\n      <h2>Contenu principal</h2>\n      <div class=\"articles\">\n        <article class=\"carte\">\n          <h3>Article 1</h3>\n          <p>Description courte de l'article...</p>\n        </article>\n        <article class=\"carte\">\n          <h3>Article 2</h3>\n          <p>Description courte de l'article...</p>\n        </article>\n        <article class=\"carte\">\n          <h3>Article 3</h3>\n          <p>Description courte de l'article...</p>\n        </article>\n        <article class=\"carte double\">\n          <h3>Article mis en avant (2 colonnes)</h3>\n          <p>Cet article s'étend sur 2 colonnes.</p>\n        </article>\n      </div>\n    </main>\n\n    <aside class=\"sidebar-droite\">\n      <h2>À la une</h2>\n      <ul>\n        <li>Actualité 1</li>\n        <li>Actualité 2</li>\n        <li>Actualité 3</li>\n      </ul>\n    </aside>\n\n    <footer>\n      <p>&copy; 2024 MonSite - Tous droits réservés</p>\n    </footer>\n  </div>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: 'Segoe UI', sans-serif; background: #f5f5f5; }\n\n/* Layout principal avec CSS Grid */\n.page {\n  display: grid;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar-g main sidebar-d\"\n    \"footer footer footer\";\n  grid-template-columns: 220px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nheader {\n  grid-area: header;\n  background: #2c3e50;\n  color: white;\n  padding: 20px 30px;\n}\n\n.sidebar-gauche {\n  grid-area: sidebar-g;\n  background: white;\n  padding: 24px 20px;\n  border-right: 1px solid #e0e0e0;\n}\n\nmain {\n  grid-area: main;\n  padding: 24px;\n}\n\n.sidebar-droite {\n  grid-area: sidebar-d;\n  background: white;\n  padding: 24px 20px;\n  border-left: 1px solid #e0e0e0;\n}\n\nfooter {\n  grid-area: footer;\n  background: #2c3e50;\n  color: white;\n  padding: 20px 30px;\n  text-align: center;\n}\n\n/* Grille de cartes dans le main (Flexbox) */\n.articles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.carte {\n  flex: 1 1 200px;\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.07);\n}\n\n.carte.double { flex: 1 1 100%; } /* Prend toute la largeur */\n\n/* Navigation sidebar */\n.sidebar-gauche ul { list-style: none; margin-top: 10px; }\n.sidebar-gauche a { text-decoration: none; color: #3498db; display: block; padding: 6px 0; }\n\n/* Responsive */\n@media (max-width: 768px) {\n  .page {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"sidebar-g\"\n      \"sidebar-d\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "83-volution-du-css-vers-un-langage-de-progr",
    "title": "Évolution du CSS : vers un langage de programmation ?",
    "blocks": [
      {
        "type": "p",
        "text": "programmation ? Ces dernières années, le CSS a évolué de plus en plus vite et dans une direction le rapprochant de plus en plus d’un langage de programmation à part entière à l’inverse d’un simple langage de présentation. L’introduction des concepts de fonctions et de variables ou “propriétés personnalisées” (“custom properties”) comme le CSS les appelle en est la preuve. Certaines des fonctionnalités présentées dans cette dernière partie sont encore en développement ou instables, mais il me semblait tout de même très intéressant de vous présenter le futur du CSS et la direction dans laquelle le langage progresse. Cette dernière partie va être pour moi l’opportunité de vous présenter certaines technologies très récentes ou à venir afin que vous ayez une vue véritable vue d’ensemble sur l’état du CSS aujourd’hui et sur la direction dans laquelle le langage avance. Nous allons donc discuter des sujets suivants :"
      },
      {
        "type": "list",
        "items": [
          "Les propriétés personnalisées ou “variables” CSS ;",
          "Les fonctions CSS ;",
          "L’imbrication des sélecteurs CSS ;",
          "L’héritage étendu des propriétés en CSS"
        ]
      },
      
      {
        "type": "note",
        "variant": "info",
        "title": "🚀 L'évolution du CSS",
        "text": "CSS a beaucoup évolué : CSS1 (1996) → CSS2 (1998) → CSS3 (modules séparés depuis 1999). Aujourd'hui : variables CSS, Grid, Flexbox, container queries, @layer, @scope. Le CSS devient de plus en plus expressif et permet de faire sans JavaScript ce qui nécessitait auparavant du JS (accordéons, carrousels, popups)."
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "84-les-fonctions-css",
    "title": "Les fonctions CSS",
    "blocks": [
      {
        "type": "h",
        "text": "Qu’est-ce qu’une fonction ?"
      },
      {
        "type": "p",
        "text": "Une fonction est un bloc de code cohérent dont le but est d’effectuer une tâche précise et qui renvoie un résultat. Dans la plupart des langages informatiques utilisant les fonctions, on peut distinguer deux grands types de fonctions :"
      },
      {
        "type": "list",
        "items": [
          "Les fonctions prêtes à l’emploi, c’est-à-dire des fonctions dont la tâche et le code"
        ]
      },
      {
        "type": "p",
        "text": "sont déjà définis. Nous n’avons qu’à appeler ces fonctions pour utiliser leurs fonctionnalités ;"
      },
      {
        "type": "list",
        "items": [
          "Les fonctions personnalisées ou conçues par l’utilisateur, c’est-à-dire nous, afin"
        ]
      },
      {
        "type": "p",
        "text": "d’effectuer les tâches qui nous intéressent. Nous avons déjà utilisé des fonctions dans ce cours sans vraiment le savoir, comme les fonctions rgb() ou linear-gradient() par exemple. En CSS, nous allons nous contenter d’utiliser des fonctions prédéfinies par le langage. Nous passerons le résultat de ces fonctions en valeur de nos propriétés. Par exemple, lorsqu’on écrit color : rgb(255,255,255), vous devez bien comprendre que derrière rgb() se cache tout un code complexe qui va s’exécuter afin de calculer et de renvoyer une couleur exploitable par la propriété color. Dans ce cas précis, pour que la fonction rgb() fonctionne correctement, nous allons devoir lui fournir trois données qu’on appelle également des arguments. Ici, ces données sont des chiffres compris entre 0 et 255 et qui servent à indiquer les niveaux d’intensité de rouge, de vert et de bleu qui doivent être mélangées par rgb() afin que la fonction détermine la couleur finale. Vous devez imaginer l’intérieur d’une fonction comme une série cohérente d’instructions qui vont être exécutées dès qu’on va appeler la fonction. Pour appeler ou exécuter une fonction, il suffit de mentionner son nom suivi d’un couple de parenthèses et éventuellement d’une ou plusieurs arguments dans ces parenthèses selon la fonction."
      },
      {
        "type": "h",
        "text": "Quel est l’intérêt d’utiliser des fonctions ?"
      },
      {
        "type": "p",
        "text": "Le grand intérêt des fonctions est d’éviter la réécriture du code et d’avoir à inventer la roue : lorsqu’on utilise un langage, on effectue souvent les mêmes opérations. Certains créateurs de langages s’en sont rendus compte et ont donc commencé à intégrer à leur langage des fonctions dont le but était précisément d’effectuer telle ou telle opération. Plutôt que d’avoir à créer le script pour effectuer telle opération, les utilisateurs n’ont alors plus qu’à utiliser la fonction correspondante pour parvenir au même résultat. Dans certains autres cas, nous allons avoir des besoins plus spécifiques en tant que développeurs mais allons nous rendre compte que nous effectuons plusieurs fois le même type d’opérations pour un projet. Dans ce cas, si aucune fonction prédéfinie répondant à notre besoin n’existe, il va être intéressant de créer nos propres fonctions (si le langage utilisé nous le permet) pour ne pas avoir à réécrire l’ensemble du code lié à la fonction à chaque fois et ainsi gagner du temps et créer un code plus facilement maintenable."
      },
      {
        "type": "h",
        "text": "Liste des fonctions CSS disponibles"
      },
      {
        "type": "p",
        "text": "Durant ce cours, nous avons déjà eu l’opportunité de rencontrer une bonne partie des fonctions CSS. Complétons la liste !"
      },
      {
        "type": "h",
        "text": "Les fonctions liées à la couleur"
      },
      {
        "type": "p",
        "text": "Nous avons déjà rencontré les fonctions rgb(), rgba(), hsl(), hsla() qui permettent de créer des couleurs. En plus de celles-ci, la fonction hwb() peut également être utilisée pour fournir une valeur de couleur. Pour cela, on devra spécifier les composants de teinte, de blancheur et de noirceur de la couleur, ainsi qu’une valeur alpha. Les fonctions liées aux images"
      },
      {
        "type": "list",
        "items": [
          "La fonction CSS image() permet d’inclure une image dans une page. Cette fonction"
        ]
      },
      {
        "type": "p",
        "text": "est similaire à la fonction url() mais fournit des options supplémentaires comme la possibilité de spécifier des images de secours (au cas où le navigateur ne pourrait pas afficher l’image préférée) ou encore de découper une partie d’une image ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction blur() est utilisée pour flouter une image. On l’utilisera généralement"
        ]
      },
      {
        "type": "p",
        "text": "avec la propriété filter ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction CSS brightness() est utilisée avec la propriété filter pour ajuster la"
        ]
      },
      {
        "type": "p",
        "text": "luminosité d’une image ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction CSS saturate() est utilisée avec la propriété filter pour ajuster le niveau"
        ]
      },
      {
        "type": "p",
        "text": "de saturation d’une image ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction CSS hue-rotate() est utilisée avec la propriété filter pour appliquer un"
        ]
      },
      {
        "type": "p",
        "text": "changement ou une “rotation” de teinte à une image. On précisera la rotation en deg. ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction CSS sepia() est utilisée avec la propriété filter pour convertir une image"
        ]
      },
      {
        "type": "p",
        "text": "en sépia ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction grayscale() permet de transformer une image en noir et blanc. On va lui"
        ]
      },
      {
        "type": "p",
        "text": "passer un nombre entre 0 et 1 en valeur qui va représenter la proportion des couleurs qui devront être transformées en noir et blanc ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction invert() est utilisée avec la propriété filter pour inverser les couleurs"
        ]
      },
      {
        "type": "p",
        "text": "d’une image ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction opacity() est utilisée avec la propriété filter pour appliquer une"
        ]
      },
      {
        "type": "p",
        "text": "transparence aux échantillons d’une image. A ne pas confondre avec la propriété opacity ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction contrast() est utilisée avec la propriété filter pour ajuster le contraste"
        ]
      },
      {
        "type": "p",
        "text": "d’une image ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction drop-shadow() est utilisée avec la propriété filter pour ajouter un effet"
        ]
      },
      {
        "type": "p",
        "text": "d’ombre portée à une image."
      },
      {
        "type": "h",
        "text": "Les fonctions liées aux dégradés"
      },
      {
        "type": "p",
        "text": "Nous avons déjà étudié les fonctions de création de dégradés qui sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La fonction linear-gradient() ;",
          "La fonction radial-gradient() ;",
          "La fonction repeating-linear-gradient() ;",
          "La fonction repeating-radial-gradient()."
        ]
      },
      {
        "type": "h",
        "text": "Les fonctions liées aux listes"
      },
      {
        "type": "p",
        "text": "Le CSS nous fournit trois fonctions pour modifier le comportement des listes ou d’autres éléments HTML pour qu’ils ressemblent à des listes."
      },
      {
        "type": "list",
        "items": [
          "La fonction symbols() est utilisée pour définir un style de puce. On peut utiliser son"
        ]
      },
      {
        "type": "p",
        "text": "résultat en valeur de la propriété list-style-type par exemple ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction counter() permet d’afficher le compteur généré par un élément ;",
          "La fonction counters() permet d’afficher des compteurs imbriqués générés par un"
        ]
      },
      {
        "type": "p",
        "text": "élément et ses parents."
      },
      {
        "type": "h",
        "text": "Les fonctions liées aux transformations"
      },
      {
        "type": "p",
        "text": "Nous avons déjà travaillé avec des fonctions CSS permettant de créer des rotations, des mises à l‘échelle etc. Le CSS met à notre disposition les fonctions suivantes pour créer des transformations :"
      },
      {
        "type": "list",
        "items": [
          "Les fonctions permettant de créer des"
        ]
      },
      {
        "type": "p",
        "text": "translations translate(), translateX(), translateY(), translate3d(), translateZ() ;"
      },
      {
        "type": "list",
        "items": [
          "Les fonctions permettant de créer des"
        ]
      },
      {
        "type": "p",
        "text": "rotations rotate(), rotateX(), rotateY(), rotate3d(), rotateZ() ;"
      },
      {
        "type": "list",
        "items": [
          "Les fonctions permettant de créer des mises à"
        ]
      },
      {
        "type": "p",
        "text": "l’échelle scale(), scaleX(), scaleY(), scale3d(), scaleZ() ;"
      },
      {
        "type": "list",
        "items": [
          "Les fonctions permettant de créer des torsions skew(), skewX(), skewY() ;",
          "Les fonctions matrix() et matrix3d() ;",
          "La fonction cubic-bezier() ;",
          "La fonction CSS perspective() définit la profondeur afin de donner une perspective"
        ]
      },
      {
        "type": "p",
        "text": "à l’élément positionné en 3D."
      },
      {
        "type": "h",
        "text": "Les fonctions liées aux figures géométriques"
      },
      {
        "type": "p",
        "text": "Le CSS dispose d’un module de spécification appelé “shape” qui décrit la façon dont on peut créer des formes géométriques en CSS. Les fonctions circle(), ellipse(), polygon() et inset() retournent des valeurs de formes dites “basiques”. On va pouvoir utiliser ces fonctions avec des propriétés comme shape- outside pour contrôler l’aspect extérieur (la forme) du contenu autour de l’élément ou avec clip-path pour découper le contenu de l’élément selon la forme définie par la valeur de la fonction. Attention : ces fonctionnalités sont très récentes et le support par les navigateurs n’est pas encore complet. Autres fonctions CSS"
      },
      {
        "type": "list",
        "items": [
          "La fonction attr() retourne la valeur d’une attribut d’un élément HTML. On utilisera"
        ]
      },
      {
        "type": "p",
        "text": "généralement le résultat de fonction comme valeur pour la propriété content ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction calc() permet d’utiliser le résultat de calculs dans les valeurs de"
        ]
      },
      {
        "type": "p",
        "text": "propriétés CSS. Elle peut être utilisée à la place d’autres types d’unités lors de la définition de la largeur ou de la hauteur d’un élément ou encore pour des angles, des fréquences, etc. ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction url() permet de spécifier la localisation d’un fichier. On peut l’utiliser"
        ]
      },
      {
        "type": "p",
        "text": "pour indiquer l’emplacement d’une image ou d’une police ;"
      },
      {
        "type": "list",
        "items": [
          "La fonction var() permet de passer le contenu d’une propriété personnalisée"
        ]
      },
      {
        "type": "p",
        "text": "(variable) à une propriété CSS. Nous allons reparler de cette fonction dans la prochaine leçon."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* FONCTIONS CSS : calculs et transformations dynamiques */\n\n/* calc() : calcul mathématique */\n.conteneur {\n  width: calc(100% - 40px);          /* 100% moins 40px */\n  height: calc(100vh - 80px);        /* Viewport moins le header */\n  margin: 0 calc(50% - 300px);       /* Centrage dynamique */\n  font-size: calc(16px + 1vw);       /* Taille fluide */\n}\n\n/* min() : prend la valeur la plus petite */\n.element { width: min(500px, 100%); } /* 500px OU 100% (le plus petit) */\n\n/* max() : prend la valeur la plus grande */\n.texte { font-size: max(16px, 2vw); } /* 16px au minimum */\n\n/* clamp(min, valeur, max) : valeur entre min et max */\n.titre { font-size: clamp(1.5rem, 3vw, 3rem); } /* Entre 1.5rem et 3rem */\n.section { padding: clamp(20px, 5%, 80px); }      /* Padding fluide */\n\n/* var() : utiliser des variables CSS */\n:root {\n  --couleur-primaire: #3498db;\n  --espace-base: 16px;\n}\n.btn { background: var(--couleur-primaire); padding: var(--espace-base); }\n.btn { color: var(--couleur-inexistante, white); } /* Valeur de secours */\n\n/* rgb(), hsl(), rgba(), hsla() : couleurs */\n.fond { background: rgb(52, 152, 219); }\n.fond2 { background: hsl(204, 70%, 53%); }\n\n/* url() : chemin vers une ressource */\n.hero { background-image: url('hero.jpg'); }\n\n/* linear-gradient(), radial-gradient() */\n.degrade { background: linear-gradient(to right, #3498db, #9b59b6); }\n\n/* repeat() dans Grid */\n.grille { grid-template-columns: repeat(3, 1fr); }\n\n/* rotate(), scale(), translate() dans transform */\n.tourne { transform: rotate(45deg) scale(1.2) translate(10px, -5px); }"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "85-les-propri-t-s-personnalis-es-ou-variabl",
    "title": "Les propriétés personnalisées ou variables CSS",
    "blocks": [
      {
        "type": "h",
        "text": "CSS"
      },
      {
        "type": "p",
        "text": "Qu’est-ce qu’une propriété personnalisée ou variable CSS ? Une variable en informatique est un conteneur nommé qui va pouvoir stocker différentes valeurs durant le script. Vous pouvez imaginer une variable comme une boite qui ne va pouvoir contenir qu’un objet à la fois mais dont on va pouvoir changer l’objet stocké lorsqu’on le souhaite. Le principe d’utilisation des variables est relativement simple à comprendre : on affecte une valeur à un nom (à notre variable donc) pour ensuite utiliser le nom de la variable plutôt que la valeur partout dans notre code. Lors de l’analyse du code, le nom de la variable sera remplacé par la valeur avant d’afficher la page à l’utilisateur. Le CSS a introduit il y a peu de temps ce concept de variable dans son langage. Les variables CSS sont également appelées “propriétés personnalisées”. Notez que les “variables” CSS ne sont pas exactement des variables au même sens que dans la plupart des langages de programmation car certaines propriétés inhérentes aux variables sont manquantes en CSS et c’est la raison pour laquelle on les appelle plutôt “propriétés personnalisées”. Pourquoi utiliser des propriétés personnalisées ou variables CSS ? Les principaux intérêts liés à l’utilisation des propriétés personnalisées en CSS sont la création d’un code plus clair et plus facilement maintenable. En effet, imaginez que vous travailliez sur un gros projet avec des feuilles de styles de plusieurs centaines ou milliers de lignes. Si le projet possède une charte graphique cohérente, vous aurez à réutiliser les mêmes styles (couleur, taille de police, marges, etc.) à plusieurs endroits dans la feuille de style. Dans le cas d’une feuille de style longue, il est facile de rapidement se perdre et donc l’approche sans utilisation de variable est peu adaptée. De plus, si un jour vous deviez modifier la couleur principale du thème par exemple, vous devrez modifier la valeur liée à cette couleur à travers toute la feuille de style ce qui rend le code difficilement maintenance au final. Les variables résolvent ces deux problèmes : en effet, en utilisant les variables, nous allons affecter une valeur à une variable une bonne fois pour toutes puis ensuite utiliser le nom de notre variable pour gaffer référence à la valeur dans toute notre feuille de style. Ainsi, si on doit un jour changer une valeur, nous n’aurons qu’à mettre à jour la valeur affectée à la variable dans le code et n’aurons pas à modifier le reste du code puisque le nom de la variable n’a pas à changer. Ensuite, on peut donner n’importe quel nom à une variable. Cela permet de s’y retrouver beaucoup plus facilement dans une feuille de style puisqu’on va généralement donner des noms qui font du sens à nos variables comme “main-color” (couleur principale) pour stocker la couleur principale du site par exemple. Apprendre à utiliser les variables ou propriétés personnalisées CSS La mise en place des propriétés personnalisées en CSS va se faire en deux temps : on va commencer par déclarer notre propriété personnalisée puis on va ensuite utiliser la variable créée. On déclare une variable en CSS en utilisant la notation --nom-de-la-variable : valeur. On préfixe donc le nom de la variable choisi par un double tiret. On déclarera généralement nos propriétés personnalisées à l’intérieur de sélecteurs très larges comme :root (qui est équivalent au sélecteur html mais qui possède un niveau de précision plus fort) afin de pouvoir les réutiliser partout. Pour utiliser ensuite notre variable dans le code, il nous suffit de passer une fonction var() avec le nom de notre variable (toujours préfixé avec deux tirets) en argument en valeur des propriétés concernées. Notez que l’héritage se fait de la même manière pour les propriétés personnalisées que pour les propriétés classiques. Ainsi, si un ne définit pas de valeur spécifique pour élément enfant, il héritera de la valeur de la propriété de son parent."
      },
      {
        "type": "h",
        "text": "Contrôle de la validité des valeurs et gestion des erreurs"
      },
      {
        "type": "p",
        "text": "Il est impossible pour un navigateur de valider la valeur d’une propriété personnalisée à priori puisque lorsque la valeur est lue, il ne sait pas encore où elle va être utilisée c’est- à-dire avec quelles propriétés on va l’utiliser. Cela oblige donc le navigateur à considérer toute valeur (ou presque) comme valide et cela permet donc d’utiliser certaines valeurs dans des contextes ou cela ne fait aucun sens (comme passer une valeur en px à une propriété color par exemple). Dans ces cas là, c’est-à-dire lorsque le navigateur détecte une utilisation non valide d’une propriété personnalisée (ou plus exactement lorsqu’il analyse une substitution avec var() invalide), il va plutôt utiliser la valeur initiale ou la valeur héritée de la propriété en question."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* VARIABLES CSS (Custom Properties) : --nom-propriete */\n\n/* Déclaration dans :root (portée globale) */\n:root {\n  /* Couleurs */\n  --couleur-primaire: #3498db;\n  --couleur-secondaire: #2ecc71;\n  --couleur-danger: #e74c3c;\n  --couleur-texte: #2c3e50;\n  --couleur-fond: #f8f9fa;\n\n  /* Typographie */\n  --police-titre: 'Montserrat', sans-serif;\n  --police-corps: 'Open Sans', sans-serif;\n  --taille-base: 16px;\n\n  /* Espacements */\n  --espace-xs: 4px;\n  --espace-sm: 8px;\n  --espace-md: 16px;\n  --espace-lg: 24px;\n  --espace-xl: 40px;\n\n  /* Effets */\n  --ombre: 0 4px 16px rgba(0,0,0,0.1);\n  --rayon: 8px;\n  --transition: 0.3s ease;\n}\n\n/* Utilisation */\n.btn {\n  background: var(--couleur-primaire);\n  color: white;\n  padding: var(--espace-sm) var(--espace-lg);\n  border-radius: var(--rayon);\n  transition: background var(--transition);\n  box-shadow: var(--ombre);\n}\n\n/* Valeur de secours (fallback) si la variable n'existe pas */\n.element { color: var(--couleur-inexistante, #333); }\n\n/* Variables dans des portées locales */\n.carte {\n  --fond-carte: white;\n  --texte-carte: #333;\n  background: var(--fond-carte);\n  color: var(--texte-carte);\n}\n\n/* Modification des variables avec JS */\n/* document.documentElement.style.setProperty('--couleur-primaire', '#e74c3c'); */\n\n/* Thème sombre avec variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --couleur-fond: #1a1a2e;\n    --couleur-texte: #ecf0f1;\n    --ombre: 0 4px 16px rgba(0,0,0,0.4);\n  }\n}"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "86-les-r-gles-css-arobase",
    "title": "Les règles CSS arobase (@)",
    "blocks": [
      {
        "type": "p",
        "text": "Nous avons déjà rencontré la syntaxe @ dans ce cours notamment dans la leçon sur les media queries avec la règle @media. Les règles @ ou “règles at” ou encore “règles arobase” permettent de fournir des instructions au CSS en tant que langage sur la façon dont il doit se comporter et sur la façon dont il doit réaliser certaines opérations. Les règles @ CSS sont toutes construites de la même manière : elles sont composées du signe @ suivi d’un nom (un mot clef ou encore un identifiant) qui indique le type de règle pour lequel on va donner des instructions suivi par la règle en soi. La forme est donc la suivante : @type-de-regle valeur-de-la-regle."
      },
      {
        "type": "h",
        "text": "Liste des règles @ CSS et définitions"
      },
      {
        "type": "p",
        "text": "Les règles globales Le CSS possède à ce jour 3 règles @ globales qui sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La règle @charset permet de définir le jeu de caractères utilisé par la feuille de style"
        ]
      },
      {
        "type": "list",
        "items": [
          "La règle @import permet d’importer une feuille de styles externe dans la feuille"
        ]
      },
      {
        "type": "p",
        "text": "courante ;"
      },
      {
        "type": "list",
        "items": [
          "La règle @namespace permet principalement d’indiquer que le contenu doit être"
        ]
      },
      {
        "type": "p",
        "text": "pris en compte comme s’il était préfixé pour un espace de noms XML."
      },
      {
        "type": "h",
        "text": "Les règles imbriquées"
      },
      {
        "type": "p",
        "text": "En plus de ces trois règles globales, le CSS possède également de nombreuses règles appelées “règles imbriquées” car elles nous permettent d’inclure des déclarations imbriquées supplémentaires. Parmi ces règles imbriquées, nous disposons notamment d’un ensemble de 4 règles qu’on groupe généralement sous l’appellation “règles de groupe conditionnelles” car elles ont un mode de fonctionnement similaire : elles définissent toutes trois une certaine condition qui, selon qu’elle est évaluée à vrai ou à faux, permettre d’appliquer les instructions imbriquées du groupe. Ces trois règles sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La règle @media permet d’appliquer des styles aux éléments seulement si"
        ]
      },
      {
        "type": "p",
        "text": "l’appareil utilisé répond aux conditions fournies dans la règle ;"
      },
      {
        "type": "list",
        "items": [
          "La règle @supports permet d’appliquer des styles si le navigateur respecte une"
        ]
      },
      {
        "type": "p",
        "text": "condition donnée ;"
      },
      {
        "type": "list",
        "items": [
          "La règle @document permet d’appliquer des styles à une page ou à un ensemble"
        ]
      },
      {
        "type": "p",
        "text": "de pages spécifiques, c’est-à-dire à un document s’il respecte une condition donnée ;"
      },
      {
        "type": "list",
        "items": [
          "La règle @viewport permet d’appliquer certains styles si la zone d’affichage"
        ]
      },
      {
        "type": "p",
        "text": "(viewport) respecte une condition donnée. Les autres règles imbriquées sont les suivantes :"
      },
      {
        "type": "list",
        "items": [
          "La règle @keyframes permet de définir les étapes d’une animation ;",
          "La règle @font-face permet de télécharger des polices externes dans une page ;",
          "La règle @page permet d’indiquer une disposition à appliquer pour l’impression de"
        ]
      },
      {
        "type": "p",
        "text": "la page ;"
      },
      {
        "type": "list",
        "items": [
          "La règle @counter-style permet de définir des styles de compteurs personnalisés"
        ]
      },
      {
        "type": "p",
        "text": "pour les listes ;"
      },
      {
        "type": "list",
        "items": [
          "Les règles @font-feature-"
        ]
      },
      {
        "type": "p",
        "text": "values, @swash, @ornaments, @annotation, @stylistic, @styleset et @character- variant permettent de définir des noms d’usages pour la propriété font-variant- alternates qui contrôle l’utilisation de glyphes alternatifs."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* RÈGLES @ (At-rules) : instructions spéciales en CSS */\n\n/* @import : importer une feuille de style */\n@import url('reset.css');\n@import url('variables.css');\n/* Note : à éviter pour les performances, préférer <link> */\n\n/* @font-face : définir une police personnalisée */\n@font-face {\n  font-family: 'MaPolice';\n  src: url('fonts/mapolice.woff2') format('woff2');\n  font-weight: 400 700;  /* Plage de graisses */\n  font-display: swap;    /* Performance */\n}\n\n/* @media : media queries */\n@media (min-width: 768px) {\n  .grille { grid-template-columns: 1fr 1fr; }\n}\n\n/* @keyframes : définir des animations */\n@keyframes rotation {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n/* @supports : CSS conditionnel (si le navigateur supporte une propriété) */\n@supports (display: grid) {\n  .conteneur { display: grid; }\n}\n@supports not (display: grid) {\n  .conteneur { display: flex; }\n}\n\n/* @layer : organiser les règles CSS en couches */\n@layer reset, base, composants, utilitaires;\n\n@layer reset {\n  * { margin: 0; padding: 0; }\n}\n@layer base {\n  body { font-family: sans-serif; }\n}\n@layer composants {\n  .btn { padding: 10px 20px; }\n}\n\n/* @container : styles basés sur la taille du PARENT (container queries) */\n.carte-conteneur { container-type: inline-size; }\n@container (min-width: 500px) {\n  .carte { display: flex; }  /* Mise en page différente si le conteneur est large */\n}\n\n/* @layer, @container : fonctionnalités modernes (CSS 2022+) */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "87-le-futur-du-css-imbrication-et-h-ritage-",
    "title": "Le futur du CSS : imbrication et héritage étendu ?",
    "blocks": [
      {
        "type": "p",
        "text": "étendu ? Pour conclure ce cours, nous allons discuter de l’avenir du CSS, de la direction prise par ce langage et des fonctionnalités les plus attendues par les développeurs et notamment l’imbrication des sélecteurs et l’héritage étendu des styles."
      },
      {
        "type": "h",
        "text": "L’imbrication des sélecteurs CSS"
      },
      {
        "type": "p",
        "text": "La façon dont le CSS est construit et fonctionne aujourd’hui nous pousse à souvent déclarer de multiples fois certains sélecteurs afin de leur appliquer des styles. Dans le cas de page modérément complexe, cela peut amener à de nombreuses duplications et à des feuilles de styles inutilement lourdes et complexes à lire. Cela fait des années que les développeurs militent pour une imbrication des sélecteurs CSS pour résoudre ce genre de problème. Le groupe de travail gérant l’évolution du CSS se penche sur ce problème depuis longtemps et un premier brouillon de travail a vu le jour en 2019 avec deux méthodes qui devraient nous permettre d’imbriquer nos sélecteurs dans le futur :"
      },
      {
        "type": "list",
        "items": [
          "L’imbrication directe avec l’utilisation du sélecteur d’imbrication & ;",
          "L’utilisation de la règle @nest."
        ]
      },
      {
        "type": "p",
        "text": "Ces deux outils sont toujours en phase de développement et ne sont pas encore reconnus comme standards mais il y a peu de chance qu’ils soient abandonnés à ce stade. Il me semble donc très intéressant de vous les présenter."
      },
      {
        "type": "h",
        "text": "Le sélecteur d’imbrication &"
      },
      {
        "type": "p",
        "text": "Lorsqu’on déclare une règle CSS imbriquée, nous avons besoin de faire référence au parent puisque c’est tout l’intérêt de l’imbrication. Le sélecteur d’imbrication & permet de faire référence à ce sélecteur parent. Cette première méthode fonctionne à condition que le sélecteur d’imbrication soit le premier sélecteur simple contenu dans le premier sélecteur complexe du sélecteur parent. Grosso-modo, cela signifie qu’il faudra que nos sélecteurs imbriqués commencent par &. Par exemple, & .foo est autorisé mais .foo & ne l’est pas. Voici la syntaxe qui sera utilisée en CSS avec ce sélecteur :"
      },
      {
        "type": "h",
        "text": "La règle CSS @nest"
      },
      {
        "type": "p",
        "text": "La règle CSS @nest produit exactement le même effet que l’utilisation du sélecteur & mais est moins restrictive dans son utilisation (les situations d’imbrication invalides sont moins nombreuses). En contrepartie, elle est un peu plus “lourde” dans son écriture. La syntaxe devrait être la suivante : Vous pourrez donc utiliser & ou @nest en fonction de la situation et de vos préférences personnelles."
      },
      {
        "type": "h",
        "text": "L’héritage étendu"
      },
      {
        "type": "p",
        "text": "L’héritage étendu des styles est une autre fonctionnalité très attendue par les développeurs. L’idée ici serait qu’un sélecteur puisse hériter de l’ensemble des styles définis pour un autre sélecteur non apparenté. Les préprocesseurs CSS comme Sass et Less proposent cette fonctionnalité depuis longtemps via des règles comme @extend. Pour le moment, cependant, il n’existe rien de tel en CSS. La seule chose possible aujourd’hui en CSS est l’importation de l’ensemble des styles d’une feuille de style dans une autre via la règle @import."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* LE FUTUR DU CSS : nouvelles fonctionnalités */\n\n/* CSS Nesting (imbrication) - Chrome 112+, Firefox 117+ */\n.carte {\n  background: white;\n  padding: 20px;\n\n  & h2 { /* = .carte h2 */\n    font-size: 1.5rem;\n    color: #2c3e50;\n  }\n\n  & p { /* = .carte p */\n    color: #666;\n  }\n\n  &:hover { /* = .carte:hover */\n    box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n  }\n\n  & .btn { /* = .carte .btn */\n    margin-top: 15px;\n  }\n}\n\n/* @scope : limiter les styles à une portée */\n@scope (.article) {\n  p { color: #444; }  /* Seulement les <p> dans .article */\n}\n\n/* has() : pseudo-classe parent */\n/* La première vraie sélection parente en CSS ! */\n.carte:has(img) {     /* .carte qui CONTIENT une image */\n  padding-top: 0;\n}\nform:has(input:invalid) {   /* Formulaire avec un champ invalide */\n  border: 2px solid red;\n}\n\n/* :is() et :where() */\n:is(h1, h2, h3, h4) { line-height: 1.3; }  /* Spécificité du plus spécifique */\n:where(h1, h2, h3)  { margin-bottom: 1em; } /* Spécificité de 0 (toujours) */\n\n/* Interpolation de couleurs */\n.fond {\n  background: color-mix(in srgb, #3498db 70%, white 30%);\n}\n\n/* Fonctionnalités déjà disponibles */\n/* - CSS Grid, Flexbox : largement supportés */\n/* - Variables CSS : largement supportés */\n/* - Container queries : Chrome/Firefox/Safari 2022 */\n/* - Nesting : Chrome 112+, Firefox 117+, Safari 17+ */"
},
      {
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  }
];
