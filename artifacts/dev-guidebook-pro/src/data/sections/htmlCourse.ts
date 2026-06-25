import type { SubSection } from "../types";

// Généré automatiquement depuis le cours complet HTML/CSS.
export const htmlCourse: SubSection[] = [
  {
    "id": "2-histoire-et-volution-de-l-informatique-e",
    "title": "Histoire et évolution de l’informatique et du web",
    "blocks": [
      {
        "type": "p",
        "text": "L’objectif de cette leçon est de souligner la rapide évolution du domaine informatique et des langages web. Cela permet notamment de comprendre pourquoi en informatique il ne faut jamais rien prendre pour acquis et continuer à se documenter et à suivre l’évolution du domaine. Nous allons également répondre aux questions suivantes : qui crée les langages web et décide de leur évolution ? Comment cette évolution est-elle intégrée dans le web ? L’informatique, un domaine en constante et rapide évolution L’informatique est un domaine qui évolue vite et dont les normes ne sont pas encore tout à fait fixées, à la différence de matières comme les mathématiques par exemple. En effet, il y a 20 ans de cela, le web était bien différent d’aujourd’hui et il sera certainement à nouveau très différent dans quelques années. En effet, l’évolution des technologies et des composants physiques toujours plus performants soutiennent cette perpétuelle évolution. Pour rappel, jusqu’au début des années 2000, les données étaient stockées sur des disquettes dont la capacité de stockage n’excédait pas les 1440 Ko c’est-à-dire le poids d’une image de qualité moyenne aujourd’hui et nous avions des modems de connexion avec une capacité de transmission des données de 64 Ko/s. Avec le succès et la démocratisation des ordinateurs et d’internet un peu partout, cependant, les technologies n’ont cessé d’évoluer de plus en plus vite et les composants physiques sont devenus de plus en plus performants entre les années 2000 et 2010. Or, avec plus de puissance dans nos ordinateurs et des connexions beaucoup plus rapides, de nouvelles opportunités se sont ouvertes dans le monde de l’informatique et du web en particulier. Les langages informatiques, qui sont au centre du web, ont donc bien évidemment évolué en même temps que le champ des possibilités s’est ouvert, en s’enrichissant et en multipliant leurs fonctionnalités. L’augmentation de la vitesse de connexion a entre autres permis de créer des sites web beaucoup plus complexes et d’intégrer de plus en plus de médias, comme de l’audio et de la vidéo ou des images de plus en plus lourdes, ce qui était inconcevable avant car ces médias auraient mis des jours à charger. L’augmentation des performances des différents composants physiques a permis de réaliser des calculs toujours plus complexes côté serveur et de multiplier également les capacités de stockage de ceux-ci."
      },
      {
        "type": "h",
        "text": "Langages de programmation : création et évolution"
      },
      {
        "type": "p",
        "text": "Pour bien comprendre comment sont créés et comment évoluent les différents langages de programmation, il faut avant tout savoir qu’il existe deux types de langages :"
      },
      {
        "type": "list",
        "items": [
          "Les langages dits « Open Source » : ce sont des langages qu’on va pouvoir utiliser"
        ]
      },
      {
        "type": "p",
        "text": "sans licence et n’importe qui va (généralement) pouvoir participer à leur développement ;"
      },
      {
        "type": "list",
        "items": [
          "Les langages créés et gérés par des entreprises privées comme le langage Java"
        ]
      },
      {
        "type": "p",
        "text": "qui appartenait à l’origine à la société Sun qui a ensuite été rachetée par la société Oracle. Concernant les langages Open Source, comme je viens de le dire, n’importe qui peut en théorie contribuer à leur évolution en testant ou en fournissant des notes sur les sites officiels des groupes qui gèrent les différents langages. En effet, bien qu’Open Source, des groupes de travail différents se sont constitués autour des différents langages. Deux groupes vont particulièrement nous intéresser dans le cadre du HTML et du CSS : le W3C ou « World Wide Web Consortium » et le WHATWG ou « Web Hypertext Application Technology Working Group ». Pour vous donner un peu de contexte sans entrer dans la polémique, le W3C était à l’origine le groupe de référence chargé de définir et de veiller au développement des langages HTML et CSS. Cependant, en 1998, le W3C décide d’abandonner l’évolution du HTML pour se concentrer sur un autre langage qui devait lui succéder : le XHTML. Certaines personnes, mécontentes de l’inertie du W3C et du temps que prenait le développement de nouveaux standards et qui voyaient du potentiel dans le HTML ont alors décidé de continuer son évolution en formant un groupe nommé le WHATWG. Face à l’échec du XHTML, en 2006, le W3C revient sur ses pas et exprime son intérêt pour travailler avec le WHATWG sur le HTML. Ce travail en commun a fonctionné jusqu’en 2011, date à laquelle l’écart entre les objectifs et les méthodes des deux groupes est devenu trop grand. En effet, le WHATWG milite pour un « Living Standard » pour le HTML, c’est-à-dire des améliorations constantes et immédiatement intégrées tandis que le W3C préfère mettre à jour le HTML dès que beaucoup d’avancées ont été faites et après s’être assuré que chaque nouveau composant fonctionne parfaitement. Ce qu’il faut bien comprendre ici est que le W3C est un groupe composé de plus de 300 grandes entreprises qui font du lobbysme et donc que ce groupe subit de grandes pressions. A l’inverse, le WHATWG est le résultat de l’effort commun de trois « entreprises du web » : Opera, Mozilla et Apple, ce qui le rend beaucoup plus flexible. Aujourd’hui, on se retrouve donc dans une situation conflictuelle où le WHATWG avance beaucoup plus vite que le W3C et accuse le W3C de voler les différents standards créés par le WHATWG pour les porter à leur crédit. Dans ce cours, je me baserai sur les recommandations du W3C puisque ce sont celles communément admises et puisqu’elles reprennent (c’est un fait) la majorité du travail du WHATWG, avec un peu de retard certes mais ce « retard » laisse le temps aux navigateurs d’intégrer les changements ce qui est finalement plutôt une bonne chose. Le W3C définit trois états d’avancement pour ses différents documents qui vont chacun traiter d’un aspect d’un langage :"
      },
      {
        "type": "list",
        "items": [
          "Le statut de recommandation, ce qui veut dire que le document sert de standard et"
        ]
      },
      {
        "type": "p",
        "text": "que le support pour les éléments ou pratiques qu’il définit doit être intégré par les navigateurs ;"
      },
      {
        "type": "list",
        "items": [
          "Le statut de candidat à la recommandation, ce qui signifie que les points abordés"
        ]
      },
      {
        "type": "p",
        "text": "dans le document sont à priori fixés et attendent une dernière validation ;"
      },
      {
        "type": "list",
        "items": [
          "Le statut « travail en cours », ce qui signifie que le document possède encore des"
        ]
      },
      {
        "type": "p",
        "text": "zones d’ombre à mettre au clair, etc. Notez qu’il est bien évidemment également très important pour un développeur de se tenir au courant des nouveautés pour d’une part exploiter toutes les possibilités des langages et d’autre part savoir lorsque certains codes ou pratiques sont dépréciés, c’est-à-dire lorsque le support d’un certain élément de langage est abandonné pour pouvoir mettre à jour les parties du code d’un site les utilisant et éviter les bugs sur le site en question. Concernant le langage CSS, c’est beaucoup plus simple puisque dans ce cas le W3C est le seul groupe qui s’occupe de son évolution et cela n’est contesté par personne. Pour résumer, voici les groupes de travail faisant autorité sur les langages Open Source les plus populaires :"
      },
      {
        "type": "list",
        "items": [
          "HTML : W3C / WHATWG ;",
          "CSS : W3C ;",
          "JavaScript : ECMA ;",
          "PHP : PHP Group ;",
          "Python : Python Software Foundation."
        ]
      },
      {
        "type": "h",
        "text": "Les versions actuelles du HTML et CSS"
      },
      {
        "type": "p",
        "text": "Jusqu’à récemment, les évolutions des langages HTML et CSS étaient « brutales » pour l’utilisateur final puisque le travail d’amélioration était effectué sur l’ensemble du langage avant d’être donné comme recommandation au public. Ainsi, on est passé du HTML version 1 en 1991 au HTML version 2 en 1994 au HTML3 et etc. jusqu’au HTML5 en novembre 2014. Concernant le CSS, nous sommes passés de la version 1 en 1996 au CSS2 en 1998 puis finalement au CSS2.1 en 2011. La durée entre le CSS2 et le CSS2.1 s’explique par les nombreux allers-retours qui ont été faits entre les statuts de « candidat à la recommandation » et de « travail en cours » suite aux rejets consécutifs du W3C de valider la nouvelle version du langage comme recommandation. Cela a permis de montrer les limites de ce système de travail sur l’ensemble du langage : il était même devenu quasiment impossible de procéder comme cela suite à la multiplication des fonctionnalités de chaque langage et le travail était mal organisé. Sous la pression du WHATWG et pour pouvoir les concurrencer, le W3C a donc commencé à organiser le travail sur chaque langage par « modules ». Chaque module va concerner un aspect précis d’un langage et son développement va pouvoir avancer plus ou moins indépendamment des autres modules. Par exemple, pour le CSS, nous avons un module de travail sur la couleur, un autre sur la police d’écriture, un autre sur la mise en page, etc. Cela nous a ainsi permit de commencer à travailler sur l’évolution de chaque fonctionnalité d’un langage de manière indépendante. Dès qu’un module est suffisamment avancé, on l’envoie comme candidat au statut de recommandation et il peut alors être validé comme nouveau standard (ou pas). Dans ce cours, j’utiliserai toujours les derniers modules reconnus comme « recommandation » par le W3C. Certains possèdent l’étiquette « HTML5 », d’autres « HTML Living Standard » ou « CSS3 » ou « CSS4 ». Parfois, j’aborderai également certaines fonctionnalités qui ne sont que candidates à la recommandation mais qui vont très probablement obtenir le statut de recommandation dans un futur proche. Je vous l’indiquerai dans ce cas."
      },
      
      {
        "type": "note",
        "variant": "info",
        "title": "📅 Repères historiques",
        "text": "Le HTML a été créé en 1991 par Tim Berners-Lee. HTML5 est le standard actuel, géré par le W3C et le WHATWG. Les navigateurs modernes (Chrome, Firefox, Safari, Edge) supportent HTML5 / CSS3."
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
    "id": "3-local-pr-production-et-production",
    "title": "Local, préproduction et production",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette leçon, nous allons distinguer le travail en local du travail en préproduction et en production et comprendre les enjeux, impacts et intérêts de chacune de ces différentes méthodes de travail. Que signifie travailler en « local » ? Travailler en « production » ? Lorsqu’on travaille sur un projet en informatique il existe deux façons de travailler : nous allons pouvoir travailler soit en local, soit en production. Travailler en local signifie travailler sur et avec des fichiers enregistrés sur notre propre ordinateur. Comme toutes les ressources sont situées sur notre ordinateur, nous seuls allons pouvoir voir les résultats des différents codes que l’on crée. Travailler en production, au contraire, signifie travailler sur des fichiers qui sont stockées sur un serveur web, c’est-à-dire modifier des ressources auxquels les utilisateurs peuvent accéder via internet."
      },
      {
        "type": "h",
        "text": "Quand travailler en local ou en production ?"
      },
      {
        "type": "p",
        "text": "Imaginons que nous devions intervenir sur un site internet déjà existant et visité par des utilisateurs tous les jours. En intervenant directement sur les fichiers sur le serveur, c’est-à-dire en production, nos modifications vont être immédiatement visibles par les utilisateurs. Cela peut avoir deux impacts évidents : tout d’abord, selon les modifications effectuées, certains utilisateurs peuvent voir leur expérience sur le site altérée : imaginez un site internet qui est modifié en même temps que vous le visitez ! De plus, si jamais nous faisons une erreur sur notre code, c’est tout le site internet qui risque d’être vulnérable ou même inaccessible. Pour ces raisons, un bon développeur préfèrera toujours tant que possible effectuer les modifications ou développer les nouvelles fonctionnalités en local, afin de limiter l’impact sur le site live. Du local à la préprod, de la préprod à la prod, de la prod au local Comment travailler en local sur un site internet déjà « en ligne », c’est-à-dire accessible par des visiteurs partout dans le monde ? C’est finalement très simple : nous allons effectuer une copie du site, c’est-à-dire une copie de tous les fichiers et média constituant le site sur nos ordinateurs puis travailler sur cette copie. Une fois les modifications effectuées et testées en local, nous allons les déployer sur serveur à un moment de fréquentation minimum ou allons placer le site en maintenance durant le temps de l’implémentation des modifications selon le degré d’importance de celles-ci. Cette façon de travailler est la plus sûre et la meilleure dans le cas de site personnels ou de petits sites. Cependant, dans le cas de sites déjà importants et sur lesquels de nombreuses personnes travaillent, il va être très compliqué de travailler comme cela puisque le site risque de changer entre le moment de la copie et le moment où nos modifications sont terminées car d’autres développeurs auront eux-mêmes implémenté de nouvelles fonctionnalités. Dans ce cas-là, l’entreprise aura tout intérêt à mettre en place ce qu’on appelle une pré- production ou « préprod ». L’idée ici va être de copier l’ensemble du site sur un autre serveur test qui ne sera accessible que pour certaines personnes (pour toutes les personnes de l’entreprise par exemple). Cette solution, plus compliquée à mettre en place lorsqu’on est seul, permet de travailler sereinement à plusieurs sur plusieurs nouvelles fonctionnalités en parallèle et permet également de tester « en conditions réelles » l’impact des différentes modifications sur le site de base et sur les autres. Pour ce cours, je pars du principe que vous n’avez pas encore de site et que vous travaillez seul. Nous travaillerons donc en local c’est-à-dire chacun avec des fichiers stockés sur nos propres ordinateurs."
      },
      
      {
        "type": "note",
        "variant": "info",
        "title": "🌐 Les 3 environnements",
        "text": "Local : votre ordinateur (développement). Préproduction : serveur de test (recette). Production : le serveur live accessible par les utilisateurs. Les fichiers locaux s'ouvrent avec file:// ou un serveur local (VS Code Live Server, WAMP, etc.)."
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
    "id": "5-l-ments-balises-et-attributs-html",
    "title": "Éléments, balises et attributs HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Le HTML est un langage de balisage, c’est-à-dire un langage qui va servir à définir chaque contenu dans une page. Mais comment fait-on en pratique pour indiquer que tel contenu est un titre, tel autre est un lien, etc. ? C’est ce que nous allons voir dans cette leçon."
      },
      {
        "type": "h",
        "text": "Les éléments HTML"
      },
      {
        "type": "p",
        "text": "Le langage HTML tout entier repose sur l’utilisation d’éléments. Si vous comprenez bien ce qu’est un élément, vous comprenez le HTML. Les éléments HTML vont nous permettre de créer la structure d’une page HTML, de définir chaque contenu de notre page et également de passer certaines informations utiles au navigateur pour afficher la page (comme le type d’encodage utilisé par exemple pour que celui-ci affiche bien nos accents français). Dans une page, nous allons utiliser les éléments en HTML pour marquer du contenu, c’est- à-dire pour lui donner du sens aux yeux des navigateurs et des moteurs de recherche. Selon l’élément utilisé, un navigateur va reconnaître le contenu comme étant de telle ou telle nature. Ainsi, on va utiliser des éléments pour définir un paragraphe ou un titre par exemple, ou encore pour insérer une image ou une vidéo dans un document. L’élément p, par exemple, sert à définir un paragraphe, tandis que l’élément a va nous permettre de créer un lien, etc. Aujourd’hui, il existe plus de 120 éléments HTML différents aux rôles très variés et qui font la richesse de ce langage. Nous allons étudier et nous servir d’une grande partie d’entre eux dans ce cours."
      },
      {
        "type": "h",
        "text": "Les balises HTML"
      },
      {
        "type": "p",
        "text": "Un élément HTML peut être soit constitué d’une paire de balises (ouvrante et fermante) et d’un contenu, soit d’une balise unique qu’on dit alors « orpheline ». L’élément p (qui sert à définir un paragraphe) est par exemple constitué d’une balise ouvrante, d’une balise fermante et d’un contenu textuel entre les balises. L’idée ici est que le texte contenu entre les deux balises va être le texte considéré par le navigateur comme étant un paragraphe. Voici comment on va écrire cela : Comme vous pouvez le constater, la balise ouvrante de l’élément est constituée d’un chevron ouvrant <, du nom de l’élément en question et d’un chevron fermant >. Notez bien ici la différence entre la balise ouvrante et la balise fermante de notre élément p : la balise fermante contient un slash avant le nom de l’élément. Vous pouvez déjà retenir cette syntaxe qui sera toujours la même en HTML. Certains éléments en HTML ne vont être constitués que d’une balise qu’on appelle alors orpheline. Cela va être le cas pour certains éléments qui ne possèdent pas de contenu textuel comme l’élément br par exemple qui sert simplement à créer un retour à la ligne en HTML et qui va s’écrire comme ceci : Notez ici qu’il est possible que vous rencontriez un jour une syntaxe un peu différente pour les balises orphelines utilisant un slash après le nom de l’élément comme ceci : <br/>. Cette syntaxe est une syntaxe qui était acceptée il y a quelques années mais qui est aujourd’hui dépréciée en HTML. Elle provient en fait d’un autre langage qui est le XML. Il est déconseillé de l’utiliser aujourd’hui en HTML puisqu’elle risque de ne plus être reconnue par les navigateurs dans le futur. Par ailleurs, notez que certains développeurs ont tendance, par abus de langage, à confondre les termes « élément » et « balise » en utilisant le mot « balise » pour désigner un élément. Vous verrez peut-être cela écrit dans d’autres cours. C’est toutefois un abus de langage et je pense qu’il est préférable pour une bonne compréhension d’appeler chaque objet d’un langage par son vrai nom. Je vous conseille donc de retenir plutôt ce que j’ai expliqué plus haut."
      },
      {
        "type": "h",
        "text": "Les attributs HTML"
      },
      {
        "type": "p",
        "text": "Finalement, les éléments vont également pouvoir contenir des attributs qu’on va alors placer au sein de la balise ouvrante de ceux-ci. Pour certains éléments, les attributs vont être facultatifs tandis que pour d’autres ils vont être obligatoires pour garantir le bon fonctionnement du code HTML. Les attributs vont en effet venir compléter les éléments en les définissant plus précisément ou en apportant des informations supplémentaires sur le comportement d’un élément. Un attribut contient toujours une valeur, qu’on peut cependant parfois omettre dans le cas des attributs ne possédant qu’une seule valeur (car la valeur est alors considérée comme évidente). Prenons ici l’exemple de l’élément a qui est l’abréviation de « anchor » ou « ancre » en français. Cet élément va principalement nous servir à créer des liens vers d’autres pages. Pour le faire fonctionner correctement, nous allons devoir lui ajouter un attribut href pour « hypertexte reference » ou « référence hypertexte » en français. En effet, c’est l’attribut href qui va nous permettre de préciser la cible du lien, c’est-à-dire la page de destination du lien en lui passant l’adresse de la page en question en valeur. Un autre exemple : l’élément img, servant à insérer une image dans une page HTML, va lui nécessiter deux attributs qui sont les attributs src et alt. L’attribut src (pour « source ») va prendre comme valeur l’adresse de l’image tandis que l’attribut alt (pour « alternative ») va nous permettre de renseigner une description textuelle de l’image qui sera affichée dans les cas où l’image ne serait pas disponible pour une raison ou une autre : image introuvable, impossible à charger, etc. L’attribut alt va également se révéler indispensable pour rendre notre site accessible aux non-voyants ou aux mal voyants et pour leur fournir une bonne expérience de navigation puisqu’ils sont généralement équipés de lecteur spéciaux qui vont pouvoir lire la valeur de l’attribut alt et donc leur permettre de se faire une représentation du contenu de l’image. Notez au passage que l’élément img n’est constitué que d’une seule balise orpheline, tout comme l’élément br vu précédemment. On place dans ce cas les attributs au sein de la balise orpheline."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!-- Anatomie d'un élément HTML -->\n\n<!-- Balise ouvrante + contenu + balise fermante -->\n<p>Ceci est un paragraphe.</p>\n\n<!-- Balise auto-fermante (élément vide) -->\n<br>\n<img src=\"image.jpg\" alt=\"Description\">\n<input type=\"text\" placeholder=\"Saisissez...\">\n\n<!-- Attributs : nom=\"valeur\" dans la balise ouvrante -->\n<a href=\"https://exemple.fr\" target=\"_blank\" rel=\"noopener\">Lien</a>\n<!-- href    = destination du lien\n     target  = ouvre dans un nouvel onglet\n     rel     = relation avec la cible (sécurité)  -->\n\n<!-- Les attributs booléens (présence = true) -->\n<input type=\"checkbox\" checked>\n<button disabled>Bouton désactivé</button>\n<input type=\"text\" required>\n\n<!-- L'attribut id : identifiant UNIQUE sur la page -->\n<div id=\"contenu-principal\">...</div>\n\n<!-- L'attribut class : peut être partagé entre plusieurs éléments -->\n<p class=\"texte-important mise-en-avant\">Texte important</p>"
},
            { "type": "image", "src": "images/htmlcss/img-015.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-016.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-017.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-018.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "6-structure-minimale-d-une-page-html-valid",
    "title": "Structure minimale d’une page HTML valide",
    "blocks": [
      {
        "type": "p",
        "text": "Le W3C, en définissant des standards de développement, a véritablement simplifié la tâche aux développeurs. En effet aujourd’hui, tous les navigateurs sérieux suivent les standards proposés par le W3C, ce qui n’était pas forcément le cas dans le passé. Cela nous permet donc d’être plus ou moins certain qu’un même code va produire le même résultat quel que soit le navigateur utilisé par les visiteurs qui consultent la page. Cependant, cela n’est possible que parce que les développeurs eux-mêmes suivent certains schémas de construction de leur page qui sont anticipables et attendus par les navigateurs. Le schéma de base d’une page HTML va donc toujours être le même. C’est ce que nous appellerons la « structure minimale d’une page HTML valide ». Cette nouvelle leçon va être consacrée à la création d’une première page HTML dite « valide », c’est-à-dire qui respecte les standards, et va nous permettre de comprendre le rôle de chaque élément de cette structure minimale."
      },
      {
        "type": "h",
        "text": "La structure minimale d’une page HTML"
      },
      {
        "type": "p",
        "text": "Pour qu’une page HTML soit déclarée valide, elle doit obligatoirement comporter certains éléments et suivre un schéma précis. Vos pages HTML devraient toujours être valides pour les raisons évoquées ci-dessus. En effet, une page non valide ne sera pas comprise par le navigateur qui va alors potentiellement mal l’afficher voire dans certains cas ne pas l’afficher du tout. De plus, une page non valide sera également mal analysée par les moteurs de recherche et ces mêmes moteurs de recherche risquent donc de ne pas la valoriser, c’est-à-dire de ne pas la proposer aux utilisateurs recherchant une information que votre page contient. En d’autres termes, posséder des pages non valides risque d’impacter négativement le référencement de ces pages et de votre site en général dans les moteurs de recherche. Voici ci-dessous le code minimum pour créer une page HTML valide. Nous allons dans la suite de ce chapitre expliquer le rôle de chaque élément et attribut."
      },
      {
        "type": "h",
        "text": "Le DOCTYPE"
      },
      {
        "type": "p",
        "text": "Tout d’abord, nous devrons toujours démarrer une page HTML en précisant le doctype de notre document. Comme son nom l’indique, le doctype sert à indiquer le type du document. Faites bien attention à l’écriture du doctype : vous pouvez remarquer que la balise représentant le doctype commence par un point d’exclamation. Ceci est un cas unique. Dans la balise de l’élément doctype, on va préciser le langage utilisé, à savoir le HTML dans notre cas. Il est possible que vous trouviez encore sur certains sites une déclaration du doctype possédant une syntaxe différente et plus complexe comme celle-ci : <!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">. Cette écriture correspond à une ancienne syntaxe qui était utilisée jusqu’à la version 4 du HTML."
      },
      {
        "type": "h",
        "text": "L’élément HTML"
      },
      {
        "type": "p",
        "text": "Après avoir renseigné le type du document, nous devons utiliser un élément html. Cet élément est composé d’une paire de balises ouvrante <html> et fermante </html>. L’élément html va représenter notre page en soi. On va insérer tout le contenu de notre page (et donc les autres éléments) à l’intérieur de celui-ci."
      },
      {
        "type": "h",
        "text": "Les éléments head et body"
      },
      {
        "type": "p",
        "text": "A l’intérieur de l’élément html, nous devons à nouveau indiquer obligatoirement deux éléments qui sont les éléments head et body et qui vont avoir des rôles très différents. L’élément head est un élément d’en-tête. Il va contenir des éléments qui vont servir à fournir des informations sur la page au navigateur, comme le titre de la page ou encore le type d’encodage utilisé pour que celui-ci puisse afficher les caractères de texte correctement. L’élément body va lui contenir tous les éléments définissant les contenus « visibles » de la page, c’est-à-dire les contenus à destination de l’utilisateur et notamment les différents textes présents dans la page, les images, etc."
      },
      {
        "type": "h",
        "text": "Les éléments title et meta"
      },
      {
        "type": "p",
        "text": "Au sein de l’élément head, nous allons devoir à minima indiquer deux éléments qui vont permettre de donner des informations essentielles sur la page au navigateur : les éléments title et meta. L’élément title va nous permettre d’indiquer le titre de la page en soi, qui ne doit pas être confondu avec les différents textes définis comme des titres dans la page. Ce titre de page est le texte visible sur le haut des onglets de votre navigateur par exemple : L’élément meta sert lui à transmettre des meta informations sur la page au navigateur. Cet élément possède de nombreux attributs différents. Le type d’informations transmis va dépendre de l’attribut que l’on va préciser. Ici, ce qui nous intéresse va être de préciser le type d’encodage utilisé dans nos pages. Cela va permettre aux navigateurs d’afficher correctement nos différents textes avec les accents, les cédilles, etc. Pour faire cela, nous allons utiliser l’attribut charset pour « characters set » c’est-à-dire « ensemble de caractères » de l’élément meta et lui fournir la valeur utf-8. La valeur utf-8 est de loin la valeur la plus utilisée sur le web et est la valeur de référence pour tous les alphabets latins. Cela va permettre à chacun de nos caractères de s’afficher correctement dans le navigateur. Note : Lorsque vous travaillez en local vous devrez, avec certains éditeurs, renseigner également l’encodage de la page dans l’éditeur afin que le contenu de celle-ci s’affiche bien et notamment si vous utilisez un outil de prévisualisation de page fourni par votre éditeur. Voilà tout pour la structure minimale d’une page HTML valide, qui représente toujours la première étape de création d’une vraie page web. Pour le moment, notre page ne possède pas de contenu visible. Nous allons en ajouter progressivement au cours des prochaines leçons."
      },
      {
        "type": "h",
        "text": "Un mot sur l’imbrication des balises et des éléments"
      },
      {
        "type": "p",
        "text": "Un autre concept qu’il vous faut comprendre absolument pour coder en HTML est la façon dont les éléments HTML s’imbriquent les uns dans les autres. Vous l’avez probablement remarqué : ci-dessus, nous avons placé des éléments HTML entre les balises ouvrantes et fermantes d’autres éléments (par exemple, les éléments title et meta ont été placés à l’intérieur de l’élément head). On appelle cela l’imbrication. L’imbrication est l’une des fonctionnalités du HTML qui fait toute sa force (nous découvrirons réellement pourquoi plus tard, avec l’étude du CSS). Cependant, comme toujours, on ne peut pas imbriquer des éléments HTML n’importe comment et il faut suivre des règles précises. Ainsi, nous n’avons absolument pas le droit de « croiser » les balises des éléments ou, pour le dire plus clairement : le premier élément déclaré doit toujours être le dernier refermé, tandis que le dernier ouvert doit toujours être le premier fermé. Par exemple, vous voyez que notre premier élément déclaré est l’élément html, qui contient les éléments head et body. L’élément html devra donc être le dernier élément refermé. Faites bien attention à distinguer les éléments contenus dans d’autres et ceux qui sont au même niveau hiérarchique. Par exemple, ici, title et meta sont deux éléments « enfants » de l’élément head (car ils sont contenus à l’intérieur de celui-ci), mais sont deux « frères » : aucun des deux ne contient l’autre. Le schéma ci-dessous présente toutes les situations valides d’imbrication d’éléments : Pour savoir quand un élément doit être placé dans un autre, il faut penser en termes de « dépendance » : les informations transmises par l’élément dépendent-elle d’un autre ou sont-elles totalement indépendantes ? Ce concept peut être complexe à se représenter lorsqu’on début à peine, mais ne vous inquiétez pas en pratiquant un peu tout cela va très vite devenir évident."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <!-- Métadonnées (invisibles dans la page) -->\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Description de la page pour les moteurs de recherche\">\n    <title>Titre de la page (affiché dans l'onglet)</title>\n    <!-- Lien vers une feuille de styles externe -->\n    <link rel=\"stylesheet\" href=\"style.css\">\n    <!-- Icône du site (favicon) -->\n    <link rel=\"icon\" type=\"image/png\" href=\"favicon.png\">\n  </head>\n  <body>\n    <!-- Contenu visible de la page -->\n    <h1>Bienvenue sur ma page</h1>\n    <p>Ceci est mon premier paragraphe HTML.</p>\n\n    <!-- Script JavaScript (avant la fermeture de body, ou avec defer dans head) -->\n    <script src=\"script.js\"></script>\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-019.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-020.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-021.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "7-enregistrement-et-affichage-d-une-page-h",
    "title": "Enregistrement et affichage d’une page HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Nous avons défini la structure minimale d’une page HTML valide lors de la leçon précédente et l’importance de produire un code valide. Il est maintenant temps de voir comment enregistrer notre fichier pour pouvoir afficher le résultat de notre page dans un navigateur."
      },
      {
        "type": "h",
        "text": "L’enregistrement de notre fichier"
      },
      {
        "type": "p",
        "text": "Maintenant que nous avons établi les bases, nous allons pouvoir commencer à coder ensemble. Pour cela, commencez par ouvrir votre éditeur de texte puis créez un nouveau fichier vide. Par défaut, votre fichier devrait être un fichier au format .txt, c’est-à-dire un simple fichier texte. La plupart des éditeurs de texte proposent aujourd’hui des fonctionnalités nous aidant à coder plus rapidement et à créer un meilleur code. Parmi ces fonctionnalités, on peut notamment citer l’auto-complétion des balises HTML qui correspond à l’écriture automatique de la balise fermante d’un élément dès la déclaration de la balise ouvrante (pour un élément constitué d’une paire de balises) ou encore la vérification automatique de la validité du code écrit. Pour que ces fonctionnalités s’activent, il va cependant falloir que notre éditeur de texte sache quel langage de code est utilisé dans notre page. Pour le lui indiquer, nous avons deux façons de procéder : on peut soit déjà enregistrer notre fichier avec la bonne extension c’est-à-dire ici .html, soit préciser le langage utilisé dans l’un des onglets de l’éditeur (si vous cherchez bien, vous devriez voir quelque part une liste de langages informatiques proposés). Ici, nous allons utiliser la méthode la plus simple qui va être d’enregistrer notre fichier. Pour cela, allez dans l’onglet « fichier » puis « enregistrer sous » ou utilisez le raccourci CMD+SHIFT+S (pour Mac) ou CTRL+SHIFT+S (pour Windows). Pour la suite de ce cours, je vous propose de créer un dossier qu’on va appeler « cours » sur votre bureau. Nous allons enregistrer nos différents fichiers dans ce dossier. Il y a quelques règles à respecter lorsqu’on enregistre un fichier de code : le nom du fichier ne doit pas contenir d’espace ni de caractères spéciaux (pas de caractères accentués ou de ponctuation ni de sigles) et doit commencer par une lettre. Ici, on peut enregistrer notre fichier sous le nom cours.html par exemple pour faire très simple. Dès que votre fichier est enregistré au bon format, nous allons retourner dans notre éditeur et écrire la structure minimale d’une page HTML. Notre éditeur sait maintenant qu’on écrit en HTML et va donc certainement utiliser une palette de couleurs, l’auto-complétion, etc. pour nous aider à coder. Ensuite, nous allons ajouter un grand titre dans notre page et un paragraphe en utilisant respectivement les éléments h1 et p. Dès que votre page est prête, nous allons l’enregistrer à nouveau pour ensuite l’afficher dans notre navigateur."
      },
      {
        "type": "h",
        "text": "Afficher le résultat d’un code HTML dans le navigateur"
      },
      {
        "type": "p",
        "text": "Pour afficher notre fichier dans le navigateur, nous allons aller le chercher dans notre dossier puis effectuer un clic droit dessus et choisir « ouvrir avec… » + le navigateur de votre choix. Voici le résultat que vous devriez avoir : Une petite astuce ici : si jamais c’est votre éditeur qui est le programme choisi par défaut pour ouvrir votre fichier de code HTML et non pas votre navigateur, je vous invite à définir le navigateur comme programme par défaut. Ainsi, vous n’aurez plus qu’à double cliquer sur le fichier en question pour qu’il s’ouvre automatiquement dans le navigateur."
      },
      
      {
        "type": "note",
        "variant": "info",
        "title": "💾 Enregistrement et affichage",
        "text": "Enregistrez votre fichier avec l'extension .html (ex: index.html). Ouvrez-le dans votre navigateur via Fichier > Ouvrir, ou glissez-déposez le fichier. Pour le développement, utilisez l'extension Live Server de VS Code pour un rechargement automatique. Le fichier index.html est le fichier d'accueil par défaut des serveurs web."
},
            { "type": "image", "src": "images/htmlcss/img-022.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-023.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "8-l-indentation-et-les-commentaires-en-htm",
    "title": "L’indentation et les commentaires en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Avant d’aller plus loin dans notre apprentissage du HTML et du CSS, il me semble intéressant de déjà vous parler de certaines pratiques de développeurs qui sont appelées des « bonnes pratiques » afin que vous puissiez rapidement les assimiler et qu’elles deviennent rapidement des automatismes. Les bonnes pratiques sont là pour nous aider à coder plus proprement et plus lisiblement, donc pour nous faciliter la vie, pas le contraire ! Nous allons dans cette partie parler d’indentation et de commentaires HTML."
      },
      {
        "type": "h",
        "text": "Retours à la ligne et indentation"
      },
      {
        "type": "p",
        "text": "Indenter correspond à créer des retraits en début de ligne dans votre éditeur de façon cohérente et logique. Vous l’avez certainement remarqué dans les codes précédents : j’accentue plus au moins le retrait à gauche de chacune de mes lignes de code. Indenter va nous permettre d’avoir un code plus propre et plus lisible, donc plus compréhensible. Indenter permet également de plus facilement détecter les erreurs potentielles dans un code. Le but de l’indentation est de nous permettre de discerner plus facilement les différents éléments ou parties de code. Regardez plutôt les deux exemples suivants. Sans indentation : Avec indentation : J’espère que vous serez d’accord pour dire que le second code est plus clair que le premier. Concernant l’indentation, il n’y a pas de règle absolue, notamment par rapport à la taille du retrait de chaque ligne et différents éditeurs peuvent d’ailleurs posséder différentes règles par défaut sur ce sujet. Pour ma part, je me contente de retourner à la ligne et d’effectuer une nouvelle tabulation à chaque fois que j’ouvre un nouvel élément dans un autre, ce qui correspond sur mon éditeur à un retrait de 4 espaces. Par exemple, ci-dessus, vous pouvez voir que j’ai utilisé une tabulation avant d’écrire la balise ouvrante de mon élément head qui est contenu dans mon élément html. J’ai ensuite effectué une nouvelle tabulation à l’intérieur de l’élément head pour écrire mon élément title. En revanche, je n’ai pas créé de nouvelle tabulation pour l’élément meta étant donné que cet élément n’est pas contenu dans title (ce n’est pas un élément enfant de l’élément title) mais est au même niveau hiérarchique que lui (on parle d’élément frère). Vous pouvez observer la même chose avec les éléments head et body par rapport à l’élément html : j’ai décalé head et body avec le même écart par rapport à html car ces deux éléments sont frères (aucun des deux ne contient / n’est contenu dans l’autre). Au final, indenter permet de créer une hiérarchie dans le code et l’un des buts principaux de l’indentation en HTML va être de comprendre très rapidement quels éléments sont imbriqués dans quels autres dans notre page pour avoir une meilleure vue d’ensemble de notre code et faciliter sa compréhension. Note : Les retours à la ligne et l’indentation créés dans l’éditeur n’affectent pas le résultat final dans le navigateur. Nous aurons l’occasion de reparler de cela un peu plus tard dans ce cours."
      },
      {
        "type": "h",
        "text": "Définition et utilité des commentaires en HTML"
      },
      {
        "type": "p",
        "text": "Les commentaires vont être des lignes de texte que l’on va écrire au milieu de notre code, afin de donner des indications sur ce que fait le code en question. Les commentaires ne seront pas affichés par le navigateur lorsque celui-ci va afficher la page : ils ne vont servir qu’aux développeurs créant ou lisant le code. Les commentaires vont pouvoir être très utiles dans trois situations : 1. Dans le cas d’un gros / long projet, afin de bien se rappeler soi-même pourquoi nous avons écrit tel ou tel code, ou encore pour se repérer dans le code ; 2. Si l’on souhaite distribuer son code, ou si l’on travaille à plusieurs, cela fait beaucoup plus professionnel et permet aux autres développeurs de comprendre beaucoup plus rapidement et facilement le code distribué ; 3. Pour « neutraliser » une certaine partie d’un code sans toutefois le supprimer. Il suffit en effet de placer toute la partie du code en question en commentaire afin que celui-ci soit ignoré par le navigateur."
      },
      {
        "type": "h",
        "text": "Syntaxe et écriture des commentaires en HTML"
      },
      {
        "type": "p",
        "text": "Les commentaires peuvent être monoligne (c’est-à-dire écrits sur une seule ligne dans l’éditeur) ou multi-lignes (écrits sur plusieurs lignes dans l’éditeur). A la différence de nombreux autres langages informatiques utilisant également des commentaires, la syntaxe utilisée pour créer un commentaire monoligne va être la même que celle pour créer un commentaire multi-lignes en HTML. Voici comment s’écrit un commentaire en HTML : Les commentaires en HTML vont prendre la forme d’une balise orpheline très particulière, avec un chevron ouvrant suivi d’un point d’exclamation suivi de deux tirets au début, du commentaire en soi puis à nouveau de deux tirets et d’un chevron fermant (sans point d’exclamation cette fois, attention !). Même si vous ne voyez pas forcément l’intérêt de commenter dès maintenant, je vous garantis que c’est souvent ce qui sépare un bon développeur d’un développeur moyen. Faites donc l’effort d’intégrer cette bonne pratique dès à présent, cela vous sera bénéfique dans le futur. Mise en garde : ne placez pas d’informations sensibles en commentaire ! Vous vous rappelez lorsque je vous ai dit que vos commentaires n’étaient pas affichés aux yeux de vos visiteurs ? C’est vrai, mais faîtes bien attention, car cela ne veut pas dire qu’il est impossible pour un visiteur de voir ce que vous avez écrit en commentaire. En effet, tous vos visiteurs peuvent voir à tout moment, s’ils le souhaitent, non seulement le contenu de vos commentaires mais aussi l’intégralité de votre code HTML. Pour cela, il suffit simplement d’activer les outils pour développeurs dont dispose chaque navigateur puis de faire un clic droit sur la page et « d’inspecter l’élément ». Cela est valable pour n’importe quel site. Regardez par exemple avec le site Wikipédia. Une fois les outils pour développeurs activés, il suffit d’un clic droit… …et le contenu HTML de la page est affiché dans une console ! Faîtes donc bien attention à ne jamais écrire d’informations sensibles au sein de vos commentaires, comme des codes ou mots de passe par exemple."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Indentation et commentaires</title>\n  </head>\n  <body>\n    <!-- Ceci est un commentaire HTML : invisible dans le navigateur -->\n    <!-- Les commentaires sont utiles pour documenter le code -->\n\n    <!--\n      Commentaire sur\n      plusieurs lignes\n    -->\n\n    <!-- L'indentation (décalage) améliore la lisibilité -->\n    <!-- Convention : 2 espaces ou 1 tabulation par niveau -->\n    <div>             <!-- Niveau 1 -->\n      <p>             <!-- Niveau 2 -->\n        <strong>      <!-- Niveau 3 -->\n          Texte\n        </strong>\n      </p>\n    </div>\n\n    <!-- Les commentaires ne sont PAS affichés dans la page web -->\n    <!-- Mais ils SONT visibles dans le code source (Ctrl+U) -->\n    <!-- Ne jamais mettre d'informations sensibles en commentaire ! -->\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-024.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-025.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-026.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-027.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-028.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "9-titres-et-paragraphes-en-html",
    "title": "Titres et paragraphes en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette leçon et dans les suivantes nous allons étudier quelques-uns des éléments HTML les plus utiles et les plus utilisés. Cela va également nous permettre de bien nous familiariser avec la syntaxe du HTML grâce à des exemples d’application. Dans cette leçon, nous allons en particulier nous concentrer sur la définition de titres et de paragraphes en HTML."
      },
      {
        "type": "h",
        "text": "Pourquoi différencier titres et paragraphes en HTML ?"
      },
      {
        "type": "p",
        "text": "Une nouvelle fois, rappelez-vous que le HTML est un langage de balisage. Le seul et unique rôle du HTML est de nous permettre de créer un document structuré en différenciant d’un point de vue sémantique les différents éléments d’une page. Utiliser les bons éléments HTML pour définir précisément les différents contenus de nos pages va permettre aux navigateurs (et aux moteurs de recherche) de comprendre de quoi et comment est composée notre page et donc de l’afficher et de la référencer au mieux. Or, les titres font partie des éléments auxquels les moteurs de recherche, entre autres, vont apporter une grande importance pour comprendre le sujet de notre page. En effet, Google par exemple va se servir des contenus définis comme titres pour comprendre de quoi notre page traite en y accordant plus d’importance qu’aux contenus définis comme des paragraphes."
      },
      {
        "type": "h",
        "text": "Définition de titres en HTML"
      },
      {
        "type": "p",
        "text": "Il existe six niveaux hiérarchiques de titres (“heading” en anglais) définis par les éléments h1, h2, h3, h4, h5 et h6 qui vont nous permettre d’organiser le contenu dans nos pages. Bon à savoir : « h » signifie « heading », soit l’équivalent du mot « titre » en français. Les éléments en HTML portent souvent l’initiale de ce qu’ils représentent, en anglais. L’élément h1 représente un titre principal dans notre page ou dans une section de page et, à ce titre, nous n’allons pouvoir utiliser qu’un seul élément h1 par page (ou par section de page, nous reviendrons sur ce concept plus tard). Ici, je tiens d’ores-et-déjà à attirer votre attention sur un point : si vous déclarez plusieurs titres h1 dans votre page, ceux-ci s’afficheront bien : il n’y aura aucun blocage au niveau de l’éditeur ou du navigateur. Cependant, rappelez-vous une nouvelle fois que le HTML est un langage de sémantique et que sa bonne utilisation repose donc sur des règles et un ensemble de bonnes pratiques. Dans le cas présent, utiliser plusieurs h1 serait aberrant car le h1 est censé représenter le titre principal de la page. En revanche, nous allons pouvoir utiliser autant de titres de niveau h2, h3 etc. que l’on souhaite dans notre page. Théoriquement, si nos pages sont bien construites, nous ne devrions que rarement dépasser le niveau de titre h3. Comme vous pouvez le voir, le navigateur comprend bien qu’il s’agit de titres d’importances diverses et les traite donc différemment par défaut, en leur attribuant une mise en forme différente (très grand et très gras pour un titre de niveau h1, puis de plus en plus petit jusqu’à h6). Encore une fois, n’utilisez pas un élément de type h* pour écrire un texte en grand et en gras ! Utilisez le pour définir un titre dans votre page. Nous nous chargerons de la mise en forme du contenu plus tard, grâce au CSS. Note : Il convient de ne pas confondre les éléments h* et l’élément title : l’élément title sert à donner un titre A notre page tandis que les éléments h* servent à définir des titres DANS notre page, c’est-à-dire à hiérarchiser et à organiser le contenu de notre page."
      },
      {
        "type": "h",
        "text": "Définition de paragraphes en HTML"
      },
      {
        "type": "p",
        "text": "Pour créer des paragraphes en HTML, nous allons utiliser l’élément p. On peut créer autant de paragraphes que l’on souhaite dans une page. A chaque nouveau paragraphe, il faut utiliser un nouvel élément p. Pour chaque nouveau paragraphe, un retour à la ligne va être créé automatiquement et affiché par votre navigateur (exactement comme c’était le cas avec les titres)."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Titres et paragraphes</title></head>\n  <body>\n\n    <!-- 6 niveaux de titres (heading) : h1 à h6 -->\n    <h1>Titre de niveau 1 (le plus important)</h1>\n    <h2>Titre de niveau 2</h2>\n    <h3>Titre de niveau 3</h3>\n    <h4>Titre de niveau 4</h4>\n    <h5>Titre de niveau 5</h5>\n    <h6>Titre de niveau 6 (le moins important)</h6>\n\n    <!-- Règle SEO : un seul <h1> par page ! -->\n    <!-- Utiliser les titres de manière hiérarchique -->\n\n    <!-- Paragraphes -->\n    <p>Ceci est un premier paragraphe. Le navigateur gère automatiquement\n    l'espacement entre les paragraphes.</p>\n\n    <p>Ceci est un deuxième paragraphe. Même si le code source est\n    sur plusieurs lignes, le navigateur n'en tient pas compte.</p>\n\n    <!-- Saut de ligne (à utiliser avec parcimonie) -->\n    <p>Première ligne.<br>Deuxième ligne après un saut de ligne.</p>\n\n    <!-- Ligne horizontale (séparateur) -->\n    <hr>\n\n    <p>Contenu après le séparateur.</p>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-029.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-030.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-031.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-032.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "10-espaces-et-retours-la-ligne-en-html",
    "title": "Espaces et retours à la ligne en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons voir comment déclarer des espaces et des retours à la ligne dans notre code HTML qui vont être conservés dans le rendu de la page fait par le navigateur. Les espaces et les retours à la ligne dans le code ne sont pas rendus Les plus curieux d’entre vous auront, je suppose, déjà fait le test : vous pouvez ajouter autant d’espaces que vous le voulez au sein d’un paragraphe ou d’un titre ou effectuer des retours à la ligne dans votre code, ceux-ci ne seront jamais affichés visuellement dans votre navigateur. En effet, pour effectuer des retours à la ligne ou marquer des espaces en HTML, nous allons à nouveau devoir utiliser des éléments. Pensez bien à nouveau que le navigateur va simplement interpréter votre code pour afficher un résultat et pour cela il va se baser sur les éléments HTML fournis."
      },
      {
        "type": "h",
        "text": "Les retours à la ligne en HTML"
      },
      {
        "type": "p",
        "text": "Pour effectuer un retour à la ligne en HTML nous allons devoir utiliser l’élément br qui est représenté par une unique balise orpheline. Le nom de l’élément br est l’abréviation de « break », l’équivalent de « casser » en anglais (dans le sens de « casser une ligne »). On peut utiliser autant d’éléments br que l’on souhaite au sein d’un titre ou d’un paragraphe par exemple."
      },
      {
        "type": "h",
        "text": "Les changements de thématique en HTML"
      },
      {
        "type": "p",
        "text": "Parfois, au sein d’un article par exemple, vous aborderez des thématiques différentes que vous voudrez séparer. Dans ce cas-là, il peut être intéressant d’utiliser l’élément hr plutôt que br. L’élément hr a justement été créé pour définir un retour à la ligne avec changement de thématique. Tout comme br, cet élément est représenté par une balise orpheline."
      },
      {
        "type": "h",
        "text": "La gestion des espaces en HTML"
      },
      {
        "type": "p",
        "text": "Il n’existe pas à proprement parler d’élément permettant de définir les espaces en HTML. Cependant, des solutions existent pour ajouter des espaces au sein de nos textes qui vont être conservés dans le rendu visuel. On va ainsi pouvoir :"
      },
      {
        "type": "list",
        "items": [
          "Utiliser l’élément HTML de pré formatage pre ;",
          "Utiliser des entités HTML ;",
          "Utiliser les marges CSS (dont nous parlerons dans le chapitre qui leur est"
        ]
      },
      {
        "type": "p",
        "text": "consacré)."
      },
      {
        "type": "h",
        "text": "L’élément HTML pre"
      },
      {
        "type": "p",
        "text": "L’élément pre sert à pré formater un texte. Cela signifie que tout le contenu qui se trouve à l’intérieur de cet élément va conserver la mise en forme que nous allons lui donner lors du rendu fait par le navigateur. Attention ici : le contenu va s’afficher exactement de la même façon que dans votre éditeur par rapport à la page complète de code. C’est la raison pour laquelle j’ai enlevé l’indentation ici. Pour des raisons de sémantique, on essaiera tant que possible de se passer de cet élément HTML qui ne possède pas de sens en soi mais qui sert justement à conserver des mises en forme… Ce qui est plutôt le rôle du CSS normalement. On préfèrera tant que possible utiliser le CSS pour ce genre d’opérations de mise en forme."
      },
      {
        "type": "h",
        "text": "Les entités HTML"
      },
      {
        "type": "p",
        "text": "Une entité HTML est une suite de caractère qui est utilisée pour afficher un caractère réservé ou un caractère invisible (comme un espace) en HTML. Qu’est-ce qu’un caractère réservé ? C’est un caractère qui possède déjà une signification particulière en HTML. Par exemple, imaginions que l’on souhaite afficher le caractère < dans un texte. On ne va pas pouvoir mentionner ce caractère tel quel dans notre éditeur car le navigateur va interpréter cela comme l’ouverture d’une balise d’un élément. Il va donc falloir indiquer au navigateur qu’on souhaite afficher le caractère < en tant que tel et non pas ouvrir une balise. Pour cela, il va falloir échapper le sens de ce caractère, et c’est ce à quoi vont nous servir les entités HTML. Nous aurons l’occasion de reparler de ces entités HTML plus tard dans cette partie. Pour le moment, concentrons-nous sur celles qui nous intéressent à savoir celles qui vont nous permettre d’ajouter des espaces."
      },
      {
        "type": "list",
        "items": [
          "L’entité HTML &nbsp; (« non breaking space ») va nous permettre d’ajouter une"
        ]
      },
      {
        "type": "p",
        "text": "espace simple dit espace « insécable » ;"
      },
      {
        "type": "list",
        "items": [
          "L’entité HTML &ensp; (« en space ») va nous permettre de créer une espace"
        ]
      },
      {
        "type": "p",
        "text": "double ;"
      },
      {
        "type": "list",
        "items": [
          "L’entité HTML &emsp; (« em space ») va nous permettre de créer une espace"
        ]
      },
      {
        "type": "p",
        "text": "quadruple ;"
      },
      {
        "type": "list",
        "items": [
          "L’entité HTML &thinsp; (« thin space ») va nous permettre de créer un espace très"
        ]
      },
      {
        "type": "p",
        "text": "fin (demi-espace). Comme vous pouvez le voir, les espaces sont bien créés. Ici, je n’ai utilisé qu’une entité entre chaque caractère mais rien ne vous empêche d’en utiliser plusieurs d’affilée. Notez cependant que l’utilisation des entités HTML à cette fin devrait toujours être une solution de dépannage et qu’on préférera généralement laisser toutes les questions de mise en page au CSS tant que possible."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Espaces en HTML</title></head>\n  <body>\n\n    <!-- Le HTML compresse les espaces multiples en UN seul espace -->\n    <p>Un     seul    espace    entre    les    mots.</p>\n    <!-- Affiche : \"Un seul espace entre les mots.\" -->\n\n    <!-- Les retours à la ligne dans le code sont ignorés -->\n    <p>Cette phrase est écrite\n       sur plusieurs lignes\n       dans le code source.</p>\n    <!-- Affiche tout sur une seule ligne -->\n\n    <!-- Entités HTML pour les caractères spéciaux -->\n    <p>&nbsp;</p>              <!-- Espace insécable -->\n    <p>5&nbsp;&gt;&nbsp;3</p>  <!-- 5 > 3 (> = &gt;) -->\n    <p>&lt;balise&gt;</p>      <!-- <balise> -->\n    <p>&amp;</p>               <!-- & -->\n    <p>&copy; 2024</p>         <!-- © 2024 -->\n    <p>&euro;25</p>            <!-- €25 -->\n\n    <!-- Pour préserver les espaces et retours à la ligne : <pre> -->\n    <pre>\n      Ce texte conserve\n        son   formatage\n      exact.\n    </pre>\n\n    <!-- Forcer un saut de ligne -->\n    <p>Ligne 1<br>Ligne 2<br>Ligne 3</p>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-033.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-034.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-035.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-036.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-037.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-038.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-039.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-040.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-041.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-042.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "11-d-finir-le-niveau-d-importance-des-conte",
    "title": "Définir le niveau d’importance des contenus textuels en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "textuels en HTML Dans cette leçon, nous allons voir comment indiquer aux navigateurs et surtout aux moteurs de recherche quelles parties de texte sont plus importantes que d’autres et doivent être considérées en priorité."
      },
      {
        "type": "h",
        "text": "La problématique des niveaux d’importance des textes"
      },
      {
        "type": "p",
        "text": "Pour comprendre la problématique des niveaux d’importance des textes, il faut avant tout que vous ayez des notions en optimisation du référencement (SEO) ou du moins que vous compreniez les enjeux liés au SEO. Lorsqu’on crée un site, en général, on veut que ce site soit visité. Pour qu’il soit visité, l’un des meilleurs moyens est que les pages de notre site ressortent parmi les premiers résultats lorsqu’un utilisateur fait une recherche sur un moteur de recherche (comme Google) sur un sujet abordé dans nos pages. Les techniques d’optimisation que l’on va pouvoir mettre en place pour faire en sorte que nos pages soient les mieux classées possibles dans Google (et dans les autres moteurs de recherche) par rapport à certains mots clefs sont regroupées sous le terme « SEO ». Le contenu d’une page est aujourd’hui le critère SEO le plus important pour Google puisque le but de Google est de fournir la réponse la plus pertinente pour chaque requête de ses utilisateurs. En ce sens, il va donc falloir porter une attention toute particulière à la manière dont on va rédiger chaque page si on veut que celles-ci soient optimisées. Ainsi, il va avant tout falloir cibler un mot clef principal pour chaque page et écrire à chaque fois du contenu pertinent par rapport à ce mot clef. En écrivant nos textes, souvent, certaines parties de contenu vont être plus importantes que d’autres et on va donc vouloir que les moteurs de recherche les remarquent en priorité et les traitent avec plus d’importance que le reste de nos textes. On va pouvoir faire cela grâce à différents éléments HTML qui vont nous servir à indiquer des niveaux d’importance relatifs pour certaines parties de notre contenu. Indiquer qu’un texte est très important avec l’élément strong L’élément HTML strong va être utilisé pour signifier qu’un contenu est très important et doit être considéré comme tel par les moteurs de recherche (et les navigateurs). En résultat, le navigateur affichera par défaut le contenu à l’intérieur de l’élément strong en gras. Encore une fois, n’utilisez pas strong pour mettre un texte en gras ! Utilisez strong pour marquer un texte qui vous semble très important. Nous utiliserons le CSS pour gérer le poids d’un texte."
      },
      {
        "type": "h",
        "text": "Mettre un texte en emphase avec l’élément em"
      },
      {
        "type": "p",
        "text": "L’élément HTML em (pour emphasis ; « emphase » ou « accentuation » en français) va être utilisé pour mettre des termes en emphase. On va pouvoir utiliser cet élément pour souligner un contraste par exemple ou une définition. Concrètement, les moteurs de recherche vont accorder une importance moins grande aux textes dans les éléments em qu’à ceux dans strong mais une importance plus grande à ces textes qu’à des simples paragraphes. Le résultat visuel par défaut de l’emphase est la mise en italique du texte contenu dans l’élément."
      },
      {
        "type": "h",
        "text": "Mettre un contenu pertinent en relief avec l’élément mark"
      },
      {
        "type": "p",
        "text": "L’élément mark va être utilisé pour mettre en relief certains textes qui vont être pertinents dans un certain contexte. Le texte mis en relief n’est pas forcément important en soi par rapport au sujet de l’article mais va être pertinent pour un certain utilisateur dans un certain contexte. Il est difficile d’illustrer l’intérêt de cet élément pour le moment car celui-ci va souvent être utilisé de manière dynamique et avec des langages dynamiques donc comme du JavaScript. Imaginons par exemple que votre site possède un champ de recherche. Lorsque l’utilisateur recherche un terme dans une page, ce terme en particulier va donc être important pour lui et on va donc vouloir le mettre en relief par rapport aux autres. L’élément de marquage à utiliser dans cette situation-là est l’élément mark dont le rôle est encore une fois d’indiquer la pertinence d’un certain texte en fonction d’un contexte. De manière pratique, toutefois, l’élément mark est relativement peu utilisé."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Mise en valeur du texte</title></head>\n  <body>\n\n    <!-- strong : importance forte (gras + sémantique) -->\n    <p>Attention : <strong>ne jamais partager votre mot de passe !</strong></p>\n\n    <!-- em : emphase/accent (italique + sémantique) -->\n    <p>Je <em>veux vraiment</em> apprendre le HTML.</p>\n\n    <!-- Différence entre balises sémantiques et visuelles -->\n    <p><strong>Gras avec sens (important)</strong></p>\n    <p><b>Gras sans sens particulier (stylistique)</b></p>\n    <p><em>Italique avec sens (emphase)</em></p>\n    <p><i>Italique sans sens (stylistique, termes techniques)</i></p>\n\n    <!-- Autres balises de mise en valeur -->\n    <p><mark>Texte surligné (mis en évidence)</mark></p>\n    <p><small>Texte plus petit (mentions légales, copyright)</small></p>\n    <p><del>Texte barré (supprimé)</del></p>\n    <p><ins>Texte souligné (inséré)</ins></p>\n    <p>H<sub>2</sub>O (indice)</p>\n    <p>E = mc<sup>2</sup> (exposant)</p>\n    <p><abbr title=\"HyperText Markup Language\">HTML</abbr></p>\n    <p><cite>Le Petit Prince</cite> d'Antoine de Saint-Exupéry</p>\n    <p><code>console.log('Bonjour')</code> (code inline)</p>\n    <p><kbd>Ctrl</kbd> + <kbd>C</kbd> pour copier</p>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-043.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-044.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-045.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-046.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-047.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-048.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "12-cr-er-des-listes-en-html",
    "title": "Créer des listes en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons voir à quoi servent les listes, découvrir les différents types de listes en HTML et apprendre à en créer."
      },
      {
        "type": "h",
        "text": "Qu’est-ce qu’une liste HTML ? A quoi servent les listes ?"
      },
      {
        "type": "p",
        "text": "Le HTML est un langage de sémantique : son rôle est de donner du sens aux différents contenus d’une page afin que ceux-ci soient correctement reconnus et afficher et que les navigateurs et les moteurs de recherche « comprennent » nos pages. Les listes HTML répondent tout à fait à cet objectif puisqu’elles permettent d’ordonner du contenu. Ce contenu peut être hiérarchisé ou non. Une liste en HTML est composée de différents éléments de listes. Visuellement une liste va ressembler à ceci :"
      },
      {
        "type": "list",
        "items": [
          "Premier élément de ma liste,",
          "Deuxième élément de ma liste,",
          "Troisième élément de ma liste."
        ]
      },
      {
        "type": "p",
        "text": "Les listes vont ainsi nous permettre de lister plusieurs éléments en les groupant sous un dénominateur commun qu’est la liste en soi. Les navigateurs et les moteurs de recherche vont donc comprendre qu’il y a une relation entre les différents éléments de liste. Les listes vont donc déjà être très utiles pour apporter de la clarté et de l’ordre à nos documents. En plus de cela, nous allons également utiliser des listes HTML pour créer des menus de navigation (nous verrons comment plus tard dans ce cours). Il existe deux grands types de listes en HTML : les listes ordonnées et les listes non- ordonnées. Il existe également un troisième type de liste un peu particulier et moins utilisé : les listes de définitions."
      },
      {
        "type": "h",
        "text": "Les listes non ordonnées"
      },
      {
        "type": "p",
        "text": "Les listes non-ordonnées vont être utiles pour lister des éléments sans hiérarchie ni ordre logique. Par exemple, si je souhaite lister les mots « pomme », « vélo » et « guitare », sans plus de contexte, j’utiliserai une liste non-ordonnée. En effet, on ne peut pas dégager de notion d’ordre, de hiérarchie ou de subordination entre ces trois termes (du moins pas sans un contexte précis). Pour créer une liste non-ordonnée, nous allons avoir besoin d’un élément ul (pour « unordered list », ou « liste non-ordonnée » en français) qui va représenter la liste en soi ainsi que d’un élément li (« list item » ou « élément de liste ») pour chaque nouvel élément de liste. Comme vous pouvez le remarquer, on va placer les éléments li à l’intérieur de l’élément de liste ul (à partir de ce moment, bien indenter son code commence à être important pour ne pas se perdre). C’est tout à fait logique puisque les éléments de liste « appartiennent » à une liste en particulier. Visuellement, des puces (les points noirs) apparaissent automatiquement devant chaque élément d’une liste non-ordonnée par défaut. Nous allons pouvoir changer ce comportement et personnaliser l’apparence de nos listes en CSS grâce notamment à la propriété list-style-type que nous étudierions plus tard dans ce cours."
      },
      {
        "type": "h",
        "text": "Les listes ordonnées"
      },
      {
        "type": "p",
        "text": "Au contraire des listes non-ordonnées, nous allons utiliser les listes ordonnées lorsqu’il y aura une notion d’ordre ou de progression logique ou encore de hiérarchie entre les éléments de notre liste. Par exemple, si l’on souhaite lister les étapes naturelles de la vie, ou lorsque l’on crée un sommaire, on utilisera généralement des listes ordonnées. Pour créer une liste ordonnée, nous allons cette fois-ci utiliser l’élément ol (pour « ordered list » ou « liste ordonnée ») pour définir la liste en soi et à nouveau des éléments li pour chaque élément de la liste. Comme vous le voyez, ce sont cette fois-ci des numéros qui sont affichés devant chaque élément de la liste par défaut. Encore une fois, nous allons pouvoir changer ce comportement et afficher différents styles de puces avec la propriété CSS list-style-type."
      },
      {
        "type": "h",
        "text": "Les attributs HTML des listes ordonnées"
      },
      {
        "type": "p",
        "text": "En plus des propriétés CSS, on va pouvoir utiliser certains attributs HTML avec nos listes ordonnées pour modifier leur présentation. Ici, vous devez absolument comprendre que ces attributs ne devraient pas exister à priori puisque le HTML ne devrait pas se soucier de la présentation mais devrait laisser l’apparence au CSS. Cependant, les langages sont en constante évolution ce qui signifie que leur rôle n’est pas encore tout à fait fixé et que certains langages ne sont pas capables de faire certaines choses aujourd’hui. Ce sont les raisons principales pour l’existence de ces attributs que je vais vous présenter par souci d’exhaustivité. Retenez simplement que vous devriez toujours privilégier l’utilisation du langage CSS pour la mise en forme des contenus HTML tant que vous le pouvez. Commençons avec l’attribut type qui va nous permettre de changer l’apparence des puces d’une liste ordonnée. Cet attribut existait autrefois également pour les listes non ordonnées mais a été déprécié pour celles-ci. Il est possible qu’il soit également déprécié dans le futur pour les listes ordonnées puisque le HTML ne devrait pas se charger de la mise en forme. Pour cette raison, je vous déconseille de l’utiliser et vous conseille de préférer l’utilisation du CSS. Cependant, je vous présente tout de même les valeurs qu’on va pouvoir lui fournir par souci d’exhaustivité :"
      },
      {
        "type": "list",
        "items": [
          "« 1 » : valeur par défaut. Des chiffres apparaitront devant chaque élément de la"
        ]
      },
      {
        "type": "p",
        "text": "liste ;"
      },
      {
        "type": "list",
        "items": [
          "« I » : Des chiffres romains majuscules apparaitront devant chaque élément de la"
        ]
      },
      {
        "type": "p",
        "text": "liste ;"
      },
      {
        "type": "list",
        "items": [
          "« i » : Des chiffres romains minuscules apparaitront devant chaque élément de la"
        ]
      },
      {
        "type": "p",
        "text": "liste ;"
      },
      {
        "type": "list",
        "items": [
          "« A » : Des lettres majuscules apparaitront devant chaque élément de la liste ;",
          "« a » : Des lettres minuscules apparaitront devant chaque élément de la liste."
        ]
      },
      {
        "type": "p",
        "text": "Voici également un exemple d’utilisation de cet attribut : Notez que par défaut le premier élément d’une liste ordonnée va avoir comme puce le chiffre « 1 » ou la première lettre de l’alphabet « a ». On va pouvoir changer ce comportement et faire démarrer notre liste ordonnée à partir d’un point choisi grâce aux attributs HTML start ou value. L’attribut start va nous permettre de choisir un point de départ pour notre liste ordonnée. On va donc le placer dans la balise ouvrante de l’élément représentant la liste ol. L’attribut value va lui en revanche nous permettre de choisir la valeur de chaque puce d’éléments de liste. On va pouvoir ajouter un attribut value pour chaque élément li. Dans le cas où certains éléments li ne possèderaient pas d’attribut value, la valeur de leur puce va s’incrémenter normalement par rapport à la valeur de la puce de l’élément précédent (c’est-à-dire ajouter 1 par rapport à la puce précédente). Notez que dans le cas où un attribut start est précisé pour la liste et un attribut value est précisé pour le premier élément de liste, l’attribut value, plus précis, va avoir la priorité et imposer sa valeur. Voici quelques exemples d’utilisation de ces attributs : Finalement, nous allons pouvoir inverser le compte des puces des éléments de liste ordonnées grâce à l’attribut reversed. Le premier élément de la liste aura alors la puce avec la valeur la plus élevée, puis on enlèvera un par nouvel élément jusqu’à arriver à « 1 » ou « a » pour le dernier élément de liste par défaut. L’attribut reversed ne possède qu’une valeur qui est reversed (identique au nom de l’attribut, comme pour tous les attributs qui ne possèdent qu’une valeur en HTML). Comme reversed ne possède qu’une valeur, la valeur est dite évidente et peut être omise."
      },
      {
        "type": "h",
        "text": "Les listes de définitions"
      },
      {
        "type": "p",
        "text": "Les listes de définitions, encore appelées « listes de descriptions » vont nous permettre de lister des termes et d’ajouter des définitions ou descriptions pour chacun de ces termes. Pour créer une liste de définitions, nous allons cette fois-ci utiliser l’élément dl signifiant « description list » ou « liste de description / définition » en français pour définir la liste en soi, puis des éléments dt (description term) pour chaque élément à décrire et enfin l’élément dd pour la définition / description en soi. Pensez bien lorsque vous créez une liste de définitions à toujours placer le terme à définir avant sa définition, c’est-à-dire l’élément dt avant l’élément dd. Cela est normalement assez intuitif."
      },
      {
        "type": "h",
        "text": "L’imbrication de listes"
      },
      {
        "type": "p",
        "text": "Finalement, sachez qu’il est tout-à-fait possible d’imbriquer une liste dans une autre en suivant quelques règles simples. Pour imbriquer une liste dans une autre, il suffit de définir une nouvelle liste à l’intérieur de l’un des éléments d’une autre liste, juste avant la balise fermante de cet élément. Comme vous pouvez le voir, il devient ici très important de bien indenter son code afin de ne pas se perdre au milieu de nos listes ! Notez que l’on peut imbriquer autant de listes que l’on souhaite les unes dans les autres. Cependant, pour des raisons évidentes de lisibilité, il est conseillé de ne pas créer plus de niveaux de listes que ce qui est strictement nécessaire pour servir vos besoins."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Les listes HTML</title></head>\n  <body>\n\n    <!-- Liste non ordonnée (ul = unordered list) -->\n    <h2>Courses</h2>\n    <ul>\n      <li>Pommes</li>\n      <li>Bananes</li>\n      <li>Pain</li>\n      <li>Lait</li>\n    </ul>\n\n    <!-- Liste ordonnée (ol = ordered list) -->\n    <h2>Étapes de la recette</h2>\n    <ol>\n      <li>Préchauffer le four à 180°C</li>\n      <li>Mélanger les ingrédients</li>\n      <li>Verser dans un moule</li>\n      <li>Cuire 30 minutes</li>\n    </ol>\n\n    <!-- Attributs de ol -->\n    <ol start=\"3\" reversed type=\"A\">\n      <!-- start : numéro de départ -->\n      <!-- reversed : ordre décroissant -->\n      <!-- type : \"1\" (défaut), \"a\", \"A\", \"i\", \"I\" -->\n      <li>Troisième élément (affiché C car type=\"A\")</li>\n      <li>Quatrième élément</li>\n    </ol>\n\n    <!-- Listes imbriquées -->\n    <ul>\n      <li>Fruits\n        <ul>\n          <li>Pommes</li>\n          <li>Poires</li>\n        </ul>\n      </li>\n      <li>Légumes\n        <ul>\n          <li>Carottes</li>\n          <li>Courgettes</li>\n        </ul>\n      </li>\n    </ul>\n\n    <!-- Liste de définitions (dl) -->\n    <dl>\n      <dt>HTML</dt>\n      <dd>HyperText Markup Language - langage de structure des pages web</dd>\n      <dt>CSS</dt>\n      <dd>Cascading Style Sheets - langage de mise en forme</dd>\n    </dl>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-049.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-050.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-051.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-052.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-053.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-054.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-055.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-056.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-057.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-058.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-059.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-060.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-061.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-062.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "13-cr-er-des-liens-en-html",
    "title": "Créer des liens en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Les liens hypertextes sont l’une des fondations du HTML qui est, rappelons-le, un langage de marquage hypertexte justement. Dans cette nouvelle leçon, nous allons découvrir et expliquer à quoi correspond un lien en HTML et allons apprendre à créer différents « types » de liens en HTML, que ce soit des liens ramenant à un autre endroit d’une même page (liens ancres), des liens menant vers d’autres pages d’un même site (liens internes) ou des liens envoyant l’utilisateur vers un autre site (liens externes)."
      },
      {
        "type": "h",
        "text": "Définition d’un lien HTML"
      },
      {
        "type": "p",
        "text": "Les liens en HTML vont nous servir à créer des ponts entre différentes pages d’un même site ou de sites différents. Le principe d’un lien est le suivant : en cliquant sur une ancre (qui est la partie visible par l’utilisateur d’un lien et qui peut être un texte comme une image), nos utilisateurs vont être redirigés vers une page cible. Il existe deux types principaux de liens hypertextes en HTML :"
      },
      {
        "type": "list",
        "items": [
          "Les liens internes qui vont servir à naviguer d’une page à l’autre dans un même"
        ]
      },
      {
        "type": "p",
        "text": "site ;"
      },
      {
        "type": "list",
        "items": [
          "Les liens externes qui vont envoyer les utilisateurs vers une page d’un autre site."
        ]
      },
      {
        "type": "p",
        "text": "Ces deux types de liens vont être l’objet d’enjeux et d’implications différents en termes d’optimisation du référencement (SEO) et vont pouvoir être créés de façons différentes en HTML. Nous allons également pouvoir utiliser les liens en HTML pour naviguer au sein d’une même page et renvoyer à un endroit précis de celle-ci. Cela est utile pour fournir des accès ou des repères rapides à nos utilisateurs dans le cas d’un page très longue. Nous appelons ce type de liens faits au sein d’une même page des liens « ancres » tout simplement (même si ce terme peut porter à confusion car le terme « ancre » est aussi utilisé pour définir la partie visible et cliquable d’un lien). Dans chacun de ces cas, nous allons devoir utiliser l’élément HTML a accompagné de son attribut href pour créer un lien en HTML. Notez que les liens sont également un aspect fondamental d’une stratégie d’optimisation de référencement (SEO), que ce soit dans le cas de liens internes (pour effectuer ce qu’on appelle un maillage interne et donner plus de valeur à certaines de nos pages aux yeux de Google) ou de liens externes qui sont un des critères principaux de classement pour Google. Il est donc très important de bien les comprendre et les maitriser !"
      },
      {
        "type": "h",
        "text": "Création de liens : l’élément a et son attribut href"
      },
      {
        "type": "p",
        "text": "Quel que soit le type de liens que l’on souhaite créer en HTML (liens internes, des liens externes, ou des liens vers un autre endroit d’une même page), nous utiliserons toujours l’élément a qui est l’abréviation de « anchor » ou « ancre » en français accompagné de son attribut href pour « hypertext reference » ou « référence hypertexte » en français. L’élément HTML a est composé d’une paire de balises (balises ouvrante et fermante) et d’un contenu entre les balises que l’on va appeler “ancre”. Ce contenu peut être un texte, une image, etc. et sera la partie visible et cliquable du lien pour les utilisateurs. L’attribut href va nous servir à indiquer la cible du lien, c’est-à-dire l’endroit où l’utilisateur doit être envoyé après avoir cliqué sur le lien. Nous allons indiquer cette cible en valeur de l’attribut href. D’un point de vue du code, la seule chose qui va changer pour créer un lien ancre plutôt qu’interne ou interne plutôt qu’externe va être la façon dont on va construire la valeur qu’on va passer à l’attribut href."
      },
      {
        "type": "h",
        "text": "Créer des liens externes en HTML"
      },
      {
        "type": "p",
        "text": "Un lien externe est un lien qui part d’une page d’un site et ramène les utilisateurs vers une autre page d’un autre site. Pour créer un lien vers une page d’un autre site en HTML (ou lien externe), il va falloir indiquer l’adresse complète de la page (c’est-à-dire son URL) en valeur de l’attribut href de notre lien. Imaginons par exemple que nous voulions créer un lien vers la page d’accueil de Wikipédia. L’URL de cette page est la suivante : https://www.wikipedia.org/. Comme vous le voyez, on utilise bien un élément a pour créer un lien externe en HTML. On place notre attribut href au sein de la balise ouvrante de cet élément. Ici, on précise en valeur l’adresse (URL) de la page d’accueil de Wikipédia. Entre les deux balises, nous plaçons la partie visible et cliquable (l’ancre) de notre lien. Ici, cela correspond au texte « la home de Wikipédia ». Les utilisateurs vont pouvoir cliquer sur ce texte pour être renvoyés vers la page d’accueil de Wikipedia. Note : Ici, nous avons choisi de placer un texte comme ancre de notre lien, mais rien ne nous empêche de placer une image à la place afin de créer une image cliquable. Vous pouvez remarquer que le navigateur applique automatiquement des styles à la partie cliquable de nos liens :"
      },
      {
        "type": "list",
        "items": [
          "le texte (notre ancre) est de couleur différente (bleu avant de cliquer puis volet une"
        ]
      },
      {
        "type": "p",
        "text": "fois le lien visité) ;"
      },
      {
        "type": "list",
        "items": [
          "le texte est souligné ;",
          "le curseur de notre souris change de forme lorsqu’on passe sur le lien."
        ]
      },
      {
        "type": "p",
        "text": "Nous allons bien évidemment pouvoir changer ces comportements en appliquant nos propres styles CSS à nos éléments a. Nous verrons comment faire cela plus tard dans ce cours. Bon à savoir : Lorsque l’attribut href prend une URL complète en valeur, on parle de valeur absolue (car celle-ci est fixe et ne dépend de rien). Les liens externes utilisent toujours des valeurs absolues. On parle de valeur absolue en opposition aux valeurs dites relatives, qui sont dans ce contexte des valeurs qui vont indiquer l’emplacement de la page cible relativement à la page source du lien."
      },
      {
        "type": "h",
        "text": "Créer des liens internes en HTML"
      },
      {
        "type": "p",
        "text": "Le deuxième grand type de liens que l’on va pouvoir créer en HTML correspond aux liens internes, c’est-à-dire à des liens renvoyant vers d’autres pages d’un même site."
      },
      {
        "type": "h",
        "text": "Explication du fonctionnement des liens internes"
      },
      {
        "type": "p",
        "text": "Nous allons avoir plusieurs solutions pour créer des liens internes. Tout d’abord, nous allons tout simplement pouvoir faire exactement comme pour les liens externes et indiquer l’adresse complète (adresse absolue) de la page cible du lien en valeur de l’attribut href Cependant, si cette première manière de faire semble tout à fait fonctionner et être la plus simple à priori, ce n’est pas du tout la plus optimisée d’un point de vue de l’utilisation des ressources et elle peut même s’avérer problématique selon comment votre site est construit (notamment si vos URL sont construites dynamiquement). Pour ces raisons, nous préciserons généralement plutôt une valeur de type relatif en valeur de l’attribut href de nos liens internes en HTML. On dit que la valeur est relative car on va devoir indiquer l’adresse de la page de destination relativement à l’adresse de la page de départ (c’est-à-dire celle à partir de laquelle on fait notre lien). Comment savoir quelle valeur relative utiliser ? Pour bien comprendre comment fonctionnent les valeurs relatives, vous devez avant tout savoir ce qu’est un site web. Un site web n’est qu’un ensemble de fichiers et de ressources (pages de code de différents types et fichiers médias comme des images, etc.) liés entre eux. Toutes ces ressources vont être hébergées (stockées) sur un ordinateur très puissant et constamment connecté à Internet qu’on appelle serveur, dans un dossier principal qu’on va appeler la racine d’un site. Pour pouvoir stocker nos différentes ressources sur un serveur et faire en sorte que notre site soit tout le temps accessible via Internet, nous passons généralement par un hébergeur qui va nous louer un serveur ou une partie d’un de ses serveurs. Dans ce dossier racine, il va très souvent y avoir d’autres dossiers (des sous-dossiers donc), des fichiers, des images, etc. Par exemple, voici une première image de la racine de l’ancienne version de mon site (à laquelle j’accède depuis l’interface d’administration de mon hébergeur) : Vous pouvez voir différents fichiers et ressources et des dossiers. En cliquant sur le dossier « html-css » par exemple, on va trouver de nouveaux fichiers et dossiers : Puis en explorant le contenu du dossier « cours-complet » : Pour lier ces différents fichiers et ressources entre eux (et donc offrir entre autres à nos utilisateurs la possibilité de naviguer de l’un à l’autre), nous allons utiliser des valeurs relatives, c’est-à-dire que nous allons préciser l’emplacement de la ressource que l’on souhaite utiliser (ou vers laquelle on souhaite renvoyer) relativement à l’emplacement de la page / ressource qui souhaite l’utiliser (la page de départ). C’est comme cela que nous allons procéder dans le cas précis de la création de liens internes : nous allons préciser en valeur de l’attribut href l’emplacement de la page cible (page de destination) par rapport à l’emplacement sur le serveur de la page source. Trois cas vont alors se présenter à nous : 1. Le cas où les deux pages (source et destination) se trouvent dans un même dossier ; 2. Le cas où la page de destination se trouve dans un sous dossier par rapport à la page source ; 3. Le cas où la page de destination se trouve dans un dossier parent par rapport à la page source. Pour chacun de ces cas, nous allons construire la valeur de notre attribut href de manière différente :"
      },
      {
        "type": "list",
        "items": [
          "Si les deux pages se situent dans le même dossier, alors on pourra se contenter"
        ]
      },
      {
        "type": "p",
        "text": "de préciser le nom de la page cible/de destination (avec son extension) en valeur de l’attribut href ;"
      },
      {
        "type": "list",
        "items": [
          "Si la page cible se situe dans un sous dossier par rapport à la page à partir de"
        ]
      },
      {
        "type": "p",
        "text": "laquelle on fait un lien, alors on précisera le nom du sous dossier suivi d’un slash suivi du nom de la page cible en valeur de l’attribut href ;"
      },
      {
        "type": "list",
        "items": [
          "Si la page cible se situe dans un dossier parent par rapport à la page de départ,"
        ]
      },
      {
        "type": "p",
        "text": "alors il faudra indiquer deux points suivis d’un slash suivi du nom de la page de destination en valeur de l’attribut href."
      },
      {
        "type": "h",
        "text": "Exemples pratiques de création de liens internes"
      },
      {
        "type": "p",
        "text": "Pour illustrer cela, je vous propose de créer un premier dossier sur le bureau de votre ordinateur. Nous imaginerons que ce dossier correspond à la racine d’un site Internet et nous pouvons par exemple l’appeler racine. Dans ce dossier, vous allez créer une première page HTML que vous pourrez appeler home.html et un second dossier qu’on peut appeler cours par exemple. Dans ce sous dossier cours, je vous propose de créer deux pages presentation.html et livres.html par exemple ainsi qu’un troisième dossier qu’on pourra appeler code. Dans ce dernier dossier code, nous créerons finalement une dernière page qu’on appellera liens.html. L’idée ici va être de faire des liens entre ces différentes pages. Encore une fois, vous pouvez imaginer que tout ce qui se trouve au sein de votre dossier racine est l’équivalent de la structure d’un site web. A partir de notre page home.html, on veut créer trois liens :"
      },
      {
        "type": "list",
        "items": [
          "Un vers la page presentation.html située dans le sous dossier cours ;",
          "Un vers la page livres.html située dans le sous dossier cours ;",
          "Un vers la page liens.html située dans le sous-sous dossier code ;"
        ]
      },
      {
        "type": "p",
        "text": "Voici comment on va s’y prendre : Ici, on voit bien que pour créer un lien vers une page située dans un sous dossier, il faut indiquer le nom du sous dossier suivi d’un slash suivi du nom de la page en valeur de l’attribut href. Vous pouvez également remarquer que si la page cible du lien se situe dans un sous-sous dossier, alors il faudra préciser le nom du sous dossier suivi d’un slash suivi du nom du sous dossier puis à nouveau d’un slash et finalement le nom de la page de destination en valeur de l’attribut href. Bon à savoir : Il faudra indiquer le nom de tous les sous dossiers traversés pour atteindre la page de destination à partir de la page de départ en valeur de l’attribut href. On va également créer trois liens à partir de notre page presentation.html :"
      },
      {
        "type": "list",
        "items": [
          "Un vers la page home.html située dans le dossier parent racine ;",
          "Un vers la page livres.html située dans le même dossier cours ;",
          "Un vers la page liens.html située dans le sous dossier code."
        ]
      },
      {
        "type": "p",
        "text": "Ici, pas de surprise :"
      },
      {
        "type": "list",
        "items": [
          "On utilise la notation « ../home.html » pour créer un lien vers la page « home.html »"
        ]
      },
      {
        "type": "p",
        "text": "située dans un dossier parent ;"
      },
      {
        "type": "list",
        "items": [
          "La page « livres.html » est située dans le même dossier que la page"
        ]
      },
      {
        "type": "p",
        "text": "« presentation.html », on se contente donc de préciser son nom en valeur de l’attribut href ;"
      },
      {
        "type": "list",
        "items": [
          "La page « liens.html » est située dans le sous dossier « code », on utilise donc la"
        ]
      },
      {
        "type": "p",
        "text": "notation « code/liens.html ». Finalement, on va à nouveau vouloir créer trois liens à partir de la page liens.html vers :"
      },
      {
        "type": "list",
        "items": [
          "La page home.html située dans le dossier parent racine ;",
          "La page presentation.html située dans le dossier parent cours ;",
          "La page livres.html située dans le dossier parent cours."
        ]
      },
      {
        "type": "p",
        "text": "On va donc utiliser ici la notation ../ pour signifier que les pages de destination se trouvent dans des dossiers parents par rapport à notre page de départ. Notez qu’on précise deux fois ../ pour créer un lien vers notre page « home.html » tout simplement car cette page est située dans un dossier deux niveaux au-dessus de la page « liens.html ». Bon à savoir : On indiquera autant de fois ../ en valeur de l’attribut href qu’il faudra traverser de dossiers pour atteindre la page de destination à partir de la page de départ. A noter : Il est possible que vous deviez un jour faire un lien vers une page qui se situe dans un autre dossier qui n’est pas un ascendant (parent) ou un descendant (enfant) direct de la page de départ. Dans ce cas-là, vous devrez utiliser un mélange de ../ et de noms de dossiers en valeur de l’attribut href. Pour illustrer cela, on peut créer un nouveau dossier seo dans le dossier cours et placer une page qu’on va appeler referencement.html dedans. L’idée va ici de faire un lien de la page liens.html vers referencement.html et inversement. Voici comment on va s’y prendre : Ici, on indique qu’il faut commencer par remonter dans le dossier parent cours puis ensuite aller dans le dossier seo pour accéder à la page referencement.html à partir de la page liens.html. N’hésitez pas à deviner le code pour aller dans l’autre sens, ça vous fera un bon exercice ! Ouvrir un lien dans un nouvel onglet grâce à l’attribut target Jusqu’à présent, lorsque nous cliquions sur les liens créés en HTML, nous étions immédiatement redirigés vers la nouvelle page et notre page cible s’ouvrait dans le même emplacement (le même cadre ou « frame ») que le lien de départ. Souvent, si vous avez un site, vous voudrez généralement que le lien s’ouvre dans un nouvel onglet afin que le visiteur ne perde pas la page de votre site. On va pouvoir faire cela avec l’attribut target. L’attribut target va nous permettre de choisir où doit s’ouvrir notre page de destination. En pratique, nous utiliserons très souvent la valeur _blank qui spécifie que la nouvelle page doit s’ouvrir dans un nouvel onglet. Voici un exemple pratique avec un lien externe menant vers la page d’accueil de Wikipédia et s’ouvrant dans un nouvel onglet : Pour information, voici les différentes valeurs que peut prendre l’attribut HTML target afin de modifier le comportement de nos liens HTML :"
      },
      {
        "type": "h",
        "text": "Valeur de"
      },
      {
        "type": "p",
        "text": "Comportement target Valeur par défaut : la page cible s’ouvre dans le même _self emplacement (cadre ou « frame ») que là où l’utilisateur a cliqué La page cible s’ouvre dans un nouvel onglet ou dans une nouvelle _blank fenêtre La page cible s’ouvre dans la cadre (frame) de niveau _parent immédiatement supérieur par rapport à l’emplacement du lien _top La page cible s’ouvre dans la fenêtre hôte (par-dessus le frameset) Nom du cadre Ouverture de la page cible dans le cadre portant le nom cité (en (frame) valeur de l’attribut name) Créer des liens vers une autre partie d’une même page en HTML Dans certains cas, lorsque vous construisez une page très longue, il va pouvoir être intéressant de proposer un sommaire avec des liens cliquables qui vont transporter l’utilisateur directement à un endroit précis de la page. Nous allons également pouvoir créer ce type de liens (parfois appelé liens « ancre ») avec notre élément HTML a ainsi qu’avec un attribut id qui va nous servir à identifier l’endroit de la page où l’utilisateur doit être renvoyé. L’attribut id sert, comme son nom l’indique, à identifier un élément HTML en particulier dans une page pour ensuite pouvoir le cibler précisément (pour pouvoir lui appliquer des styles CSS entre autres). Nous étudierons le fonctionnement de l’attribut id en détail plus tard dans ce cours. Pour le moment, retenez simplement que chaque id dans une page doit posséder une valeur unique puisqu’encore une fois un id sert à identifier précisément un élément en particulier. Pour créer un lien de type « ancre », nous allons devoir procéder en deux étapes : tout d’abord, nous allons attribuer un attribut id aux différents éléments de notre page au niveau desquels on souhaite renvoyer nos visiteurs. Ensuite, nous allons créer nos liens de renvoi en soi. Pour cela, nous allons passer à nos différents attributs href les valeurs correspondantes aux noms de mes id précédés d’un dièse (symbole #). Voyons immédiatement comment créer ce type de lien en pratique. Pour bien illustrer leur fonctionnement, il va falloir que le contenu de notre page soit plus grand que la hauteur de la fenêtre pour faire apparaitre une barre de défilement (scrolling). Nous avons différents moyens de faire cela : créer une page avec beaucoup de texte, réduire la largeur d’affichage du texte en CSS pour qu’il prenne plus de place en hauteur, etc. Dans l’exemple ci-dessus, j’ai créé une liste de type sommaire au début de ma page car celle-ci est très longue et j’ai accolé un id à chacun de mes titres h2. Chaque élément de mon sommaire va correspondre à une partie vers laquelle je souhaite envoyer mes visiteurs. Je vais donc placer un élément de lien HTML a dans chacun des éléments de liste. Ici, je vous invite à regarder attentivement les valeurs données à mes différents attributs href : vous remarquez que les différentes valeurs correspondent aux noms de mes id précédés d’un dièse (symbole #), symbole qui sert justement à cibler un id en CSS. Lorsqu’on clique sur un élément du sommaire, nous sommes renvoyés directement à la partie de la page correspondante."
      },
      {
        "type": "h",
        "text": "Utiliser une image en ancre de lien HTML"
      },
      {
        "type": "p",
        "text": "Nous n’avons pas encore étudié les images et je ne veux pas vous donner trop d’informations d’un coup afin que vous puissiez vous concentrer sur le sujet actuellement traité. Cependant, sachez qu’il va être tout à fait possible d’utiliser une image à la place d’un texte comme ancre ou contenu cliquable pour un lien. Nous verrons comment faire cela dans le chapitre réservé à l’insertion d’images en HTML."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Les liens HTML</title></head>\n  <body>\n\n    <!-- Lien externe (vers un autre site) -->\n    <a href=\"https://www.google.fr\">Aller sur Google</a>\n\n    <!-- Ouvrir dans un nouvel onglet -->\n    <a href=\"https://www.google.fr\" target=\"_blank\" rel=\"noopener noreferrer\">\n      Google (nouvel onglet)\n    </a>\n\n    <!-- Lien relatif (vers une page de notre propre site) -->\n    <a href=\"contact.html\">Page de contact</a>\n    <a href=\"pages/apropos.html\">À propos</a>\n    <a href=\"../index.html\">Retour à l'accueil</a>\n\n    <!-- Lien vers une ancre (section sur la même page) -->\n    <a href=\"#section1\">Aller à la section 1</a>\n    <a href=\"#section2\">Aller à la section 2</a>\n\n    <!-- Cibles des ancres -->\n    <h2 id=\"section1\">Section 1</h2>\n    <p>Contenu de la section 1...</p>\n\n    <h2 id=\"section2\">Section 2</h2>\n    <p>Contenu de la section 2...</p>\n\n    <!-- Lien vers une ancre d'une autre page -->\n    <a href=\"autre-page.html#section3\">Section 3 de l'autre page</a>\n\n    <!-- Image cliquable (lien avec image à l'intérieur) -->\n    <a href=\"https://exemple.fr\">\n      <img src=\"logo.png\" alt=\"Logo exemple\">\n    </a>\n\n    <!-- Liens de navigation typiques -->\n    <nav>\n      <a href=\"index.html\">Accueil</a>\n      <a href=\"services.html\">Services</a>\n      <a href=\"portfolio.html\">Portfolio</a>\n      <a href=\"contact.html\">Contact</a>\n    </nav>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-063.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-064.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-065.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-066.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-067.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-068.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-069.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-070.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-071.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-072.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-073.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-074.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "14-envoi-de-mails-et-t-l-chargement-de-fich",
    "title": "Envoi de mails et téléchargement de fichiers",
    "blocks": [
      {
        "type": "p",
        "text": "L’élément a en HTML ne va pas uniquement être très utile pour créer des liens entre différentes pages ou de ramener à différents endroits d’une même page mais va également nous permettre de lier des ressources à nos pages. Dans ce nouveau chapitre, nous allons étudier deux autres utilisations courantes de cet élément :"
      },
      {
        "type": "list",
        "items": [
          "Utiliser l’élément a pour permettre aux utilisateurs de nous envoyer un mail ;",
          "Utiliser l’élément a pour permettre aux utilisateurs de télécharger un fichier."
        ]
      },
      {
        "type": "h",
        "text": "Utiliser l’élément a pour permettre l’envoi d’un mail"
      },
      {
        "type": "p",
        "text": "On peut utiliser l’élément a pour transmettre notre adresse mail à nos utilisateurs et leur permettre de nous envoyer simplement un mail. Pour permettre l’envoi d’un mail en HTML, on va placer indiquer en valeur de l’attribut href de notre élément a la valeur mailto : suivie de notre adresse email. Lorsqu’un visiteur va cliquer sur notre lien, sa messagerie par défaut va automatiquement s’ouvrir. Par exemple, si vous avez un Mac, ce sera certainement l’application « Mail » qui va s’ouvrir. De plus, le champ destinataire sera automatiquement rempli avec notre adresse email. Note : si vous travaillez sous Windows, il est possible que rien ne se passe si vous n’avez configuré aucune messagerie par défaut. Dès qu’un visiteur clique sur le texte de notre lien, sa messagerie par défaut s’ouvre s’il en a configuré une : Utiliser l’élément a pour permettre le téléchargement d’un fichier Vous pouvez encore utiliser l’élément a pour permettre à vos visiteurs de télécharger certains types de fichiers, comme des fichiers PDF ou Word par exemple. Pour la plupart des fichiers, il va simplement suffire d’indiquer leur adresse (relative ou leur URL complète) en valeur de l’attribut href. Lorsqu’un utilisateur va cliquer sur le lien, le fichier lié va s’ouvrir dans le navigateur et l’utilisateur n’aura alors plus qu’à faire un clic droit sur le fichier ou utiliser les options de son navigateur pour l’enregistrer. Cette première solution fonctionne mais demande à ce que l’utilisateur fasse lui-même la démarche de télécharger le fichier. On va également pouvoir « forcer » le téléchargement d’un fichier en ajoutant un attribut download dans l’élément a tout en indiquant l’adresse du fichier en question en valeur de l’attribut href. L’attribut download peut prendre en valeur (facultative) le nom sous lequel on souhaite que les utilisateurs téléchargent le fichier. Dès que l’utilisateur va cliquer sur le lien, l’attribut download va faire que le le téléchargement du fichier lié va se lancer automatiquement. Attention cependant, cet attribut n’a pendant très longtemps pas été supporté par certains navigateurs majeurs dont Safari. Certaines anciennes versions de Safari encore présentes aujourd’hui peuvent donc ne pas le reconnaitre. Note : Vous n’allez pas pouvoir faire télécharger n’importe quel type de fichiers à vos visiteurs. En effet, les navigateurs récents vont bloquer le téléchargement de certains fichiers dont les extensions auront été jugées comme « potentiellement dangereuses ». De plus, certaines autres extensions de fichier vont être directement interprétées par le navigateur de vos visiteurs. Cela va être le cas si vous essayez de faire télécharger la source d’un fichier .html à vos visiteurs par exemple : le navigateur va ouvrir le fichier et interpréter son code comme pour n’importe quelle autre page et n’afficher donc que le résultat visuel lié au code HTML du fichier. Ici, une astuce simple consiste à compresser les fichiers que vous voulez faire télécharger en .zip par exemple."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Mails et téléchargements</title></head>\n  <body>\n\n    <!-- Lien mailto : ouvre le client mail de l'utilisateur -->\n    <a href=\"mailto:contact@exemple.fr\">Nous écrire</a>\n\n    <!-- Avec sujet et corps pré-remplis -->\n    <a href=\"mailto:contact@exemple.fr?subject=Demande d'info&body=Bonjour,\">\n      Demander une info\n    </a>\n\n    <!-- Plusieurs destinataires (séparés par des virgules) -->\n    <a href=\"mailto:a@ex.fr,b@ex.fr?cc=c@ex.fr&bcc=d@ex.fr\">\n      Envoyer à plusieurs\n    </a>\n\n    <!-- Lien téléphone (pratique sur mobile) -->\n    <a href=\"tel:+33612345678\">+33 6 12 34 56 78</a>\n\n    <!-- Téléchargement d'un fichier avec l'attribut download -->\n    <a href=\"documents/guide.pdf\" download>\n      Télécharger le guide PDF\n    </a>\n\n    <!-- download avec nom de fichier personnalisé -->\n    <a href=\"documents/guide-v2.pdf\" download=\"guide-utilisateur.pdf\">\n      Télécharger le guide\n    </a>\n\n    <!-- Liens vers différents types de fichiers -->\n    <a href=\"data/export.csv\" download>Exporter en CSV</a>\n    <a href=\"media/presentation.pptx\" download>Télécharger la présentation</a>\n    <a href=\"images/photo.jpg\" download=\"ma-photo.jpg\">Télécharger la photo</a>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-075.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-076.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-077.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "15-compatibilit-support-et-validation-du-co",
    "title": "Compatibilité, support et validation du code",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons terminer cette première partie relative aux notions de base en HTML avec un mot sur la problématique complexe de la compatibilité du code entre les différents navigateurs ainsi que sur l’importance d’avoir toujours un code valide et optimisé. La comptabilité intra-navigateur, inter-navigateurs et relatives aux différents appareils du code Le problème de compatibilité et de consistance du code n’est pas nouveau : il y a quelques années seulement de cela, le web était beaucoup plus décousu qu’aujourd’hui et les règles n’étaient pas encore fixées. Jusqu’au début des années 2000, Microsoft n’avait pas de concurrent sérieux et utilisait de sa puissance économique afin que son navigateur Internet Explorer (aujourd’hui appelé Edge) soit installé par défaut sur toutes les machines. Cela permettait à Microsoft de s’offrir des libertés et notamment celle de développer de nouveaux standards de code ou d’implémenter des codes d’une façon différentes des autres. Ensuite, dans les années 2000, de nouveaux acteurs sérieux ont fait apparition et ont commencé à se livrer une guerre économique. A cette époque, il était courant que différents navigateurs implémentent de manière totalement différente certains codes et utilisent leurs propres normes. Ainsi, certains éléments ou attributs HTML par exemple n’étaient pas supportés par certains navigateurs et on devait donc créer des codes différents afin que chaque navigateur affiche le résultat voulu. Depuis quelques années cependant, et grâce à l’impulsion du W3C qui n’a cessé de pousser des standards de développement, on assiste à une homogénéisation et une uniformisation de la prise en charge des codes sur la plupart des navigateurs sérieux. Cela est une excellente nouvelle pour nous, développeurs. Cependant, tout n’est pas encore parfait comme on a pu le voir avec la prise en charge de l’attribut download par exemple dans les leçons précédentes. Aujourd’hui, cependant, il nous faut faire face à de nouveaux défis tout aussi importants qui sont des défis liés aux différents appareils utilisés par nos visiteurs et à l’ergonomie. En effet, les langages informatiques ont évolué au cours de ces dernières années pour proposer toujours davantage de fonctionnalités pour répondre notamment aux technologies émergentes et aux nouveaux besoins des utilisateurs. L’apparition de l’internet mobile et sur tablette a notamment considérablement complexifié les questions liées à l’ergonomie des sites web puisqu’il était hors de question d’afficher autant d’information ou d’avoir des pages aussi lourdes sur mobile que sur un ordinateur de bureau classique par exemple. Il faudra donc toujours garder ces questions en tête lorsque nous développerons nos propres projets et bien réfléchir en amont pour produire le résultat le plus conforme à nos attentes possibles."
      },
      {
        "type": "h",
        "text": "Les entités HTML"
      },
      {
        "type": "p",
        "text": "Le HTML possède des caractères réservés. Par exemple, vous ne pouvez pas écrire les signes « < » et « > » tels quels dans vos pages web, tout simplement car le navigateur pensera que vous venez d’ouvrir une balise d’élément. Pour remédier à ce problème, nous allons devoir « échapper » ces caractères réservés en utilisant ce qu’on appelle des entités HTML. Les entités vont être des suites de caractères représentant un caractère réservé en HTML. Voici quelques-unes des entités les plus courantes et leur signification :"
      },
      {
        "type": "h",
        "text": "Nom de l’entité                           Résultat visuel"
      },
      {
        "type": "p",
        "text": "&lt; < (chevron ouvrant) &gt; > (chevron fermant) &amp; & (esperluette) &nbsp; (espace insécable) Nous connaissons déjà certaines de ces entités comme l’entité &nbsp (pour « non- breaking space ») qui sert à créer une espace insécable en HTML. Voyons immédiatement un exemple d’utilisation de ces entités :"
      },
      {
        "type": "h",
        "text": "Tester la validité de son code"
      },
      {
        "type": "p",
        "text": "Vous devez toujours vous efforcer d’écrire un code valide. Cela évitera des bugs potentiels et votre site sera au final mieux référencé sur les moteurs de recherche. Pour vérifier la validité d’un code HTML ou CSS, le w3c (World Wide Web Consortium), c’est-à-dire l’organisme qui gère l’évolution des langages lus par les navigateurs comme le HTML et le CSS entre autres, a mis à disposition des validateurs de code qui sont gratuits. Vous pouvez trouver les validateurs HTML et CSS aux adresses suivantes :"
      },
      {
        "type": "list",
        "items": [
          "HTML : https://validator.w3.org/",
          "CSS : https://jigsaw.w3.org/css-validator/"
        ]
      },
      
      {
        "type": "note",
        "variant": "info",
        "title": "🔧 Compatibilité et validation",
        "text": "Outils utiles : Can I Use (caniuse.com) pour vérifier le support navigateur des fonctionnalités. W3C Validator (validator.w3.org) pour valider votre HTML. MDN Web Docs (developer.mozilla.org) pour la documentation. Les préfixes vendeurs (-webkit-, -moz-, -ms-) assurent la compatibilité avec les anciens navigateurs."
},
            { "type": "image", "src": "images/htmlcss/img-078.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-079.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-080.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "22-les-l-ments-html-div-et-span",
    "title": "Les éléments HTML div et span",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette nouvelle leçon, nous allons nous intéresser à deux éléments HTML très spéciaux qui sont les éléments div et span. Ces éléments sont très particuliers puisqu’ils ne servent pas à préciser la nature d’un contenu mais vont simplement nous servir de conteneurs génériques en HTML. Nous allons ici comprendre l’intérêt de ces deux éléments et en particulier leur intérêt pour l’application de styles CSS et les cas d’utilisation de ces éléments."
      },
      {
        "type": "h",
        "text": "Le HTML et la valeur sémantique des éléments"
      },
      {
        "type": "p",
        "text": "Il est toujours bon de commencer par rappeler le rôle du HTML : le HTML a pour but de structurer du contenu et de lui donner du sens. Les éléments HTML vont nous servir à marquer les différents contenus et donc à indiquer aux navigateurs et moteurs de recherche de quoi est composé une page. On va ainsi pouvoir dire grâce au HTML que tel contenu doit être considéré et traité comme un paragraphe, que tel autre contenu est un titre, que tel texte est plus important qu’un autre, que ceci est une liste, que cet objet est une image, etc. A ce titre, les éléments HTML div et span sont très spéciaux puisque ce sont deux éléments HTML qui ne possèdent aucune valeur sémantique, c’est-à-dire qu’ils ne servent pas à préciser la nature d’un contenu. Ces deux éléments sont en effet des conteneurs génériques qui ont été créés pour nous permettre d’ordonner nos pages plus simplement ensuite en CSS."
      },
      {
        "type": "h",
        "text": "Quels usages pour les éléments div et span ?"
      },
      {
        "type": "p",
        "text": "Le fait que les éléments div et span ne possèdent aucune valeur sémantique peut faire penser qu’ils vont à l’encontre même du rôle du HTML. C’est tout à fait vrai en soi, et c’est la raison pour laquelle on essaiera idéalement de n’utiliser ces éléments qu’en dernier recours et si nous n’avons aucun autre choix crédible. Les éléments HTML div et span ont été créés principalement pour simplifier la mise en page de nos pages HTML en CSS c’est-à-dire pour simplifier l’application de certains styles CSS."
      },
      {
        "type": "h",
        "text": "Exemple d’utilisation de l’élément div"
      },
      {
        "type": "p",
        "text": "Nous allons utiliser l’élément div comme conteneur pour différents éléments afin de pouvoir ensuite facilement appliquer les mêmes styles CSS à tous les éléments contenus dans notre div par héritage ou pour les mettre en forme en appliquant un style spécifique au div. Ici, le terme de « conteneur » est l’équivalent du terme « parent » : nous allons simplement placer nos différents éléments à l’intérieur de nos balises <div> et </div> puis appliquer les styles CSS directement au div. On peut ici penser qu’on peut arriver au même résultat en utilisant plusieurs attributs class possédant la même valeur pour les différents éléments. Ce n’est pas tout à fait vrai. Tout d’abord, ce n’est pas normalement exactement le rôle de base des attributs class : les sélecteurs .class sont censés être liés à un style CSS particulier et chaque élément doit pouvoir utiliser la class adaptée pour appliquer ce style. Ici, nous utilisons plutôt le sélecteur .class de manière exclusive en définissant de nombreux styles pour un groupe d’éléments en particulier. La logique de code est donc inversée. En dehors de cette considération sur le rôle des class, il est beaucoup plus simple et rapide dans le cas présent d’utiliser un div que de renseigner un attribut class à chaque fois. De plus, dans certaines situations, nous allons vouloir pour des raisons de mise en page appliquer des styles spécifiquement au conteneur et nos pas à chaque élément contenu comme par exemple des marges externes."
      },
      {
        "type": "h",
        "text": "Exemple d’utilisation de l’élément span"
      },
      {
        "type": "p",
        "text": "L’élément span va lui servir de conteneur à un autre niveau : il va servir de conteneur interne à un élément plutôt que de conteneur pour plusieurs éléments. On va par exemple pouvoir placer une certaine partie du texte d’un titre ou d’un paragraphe dans un élément span pour ensuite pouvoir lui appliquer un style CSS particulier, chose qu’il nous était impossible de faire jusqu’à présent."
      },
      {
        "type": "h",
        "text": "Les éléments div et span et les attributs class et id"
      },
      {
        "type": "p",
        "text": "Les attributs class et id sont des attributs universels ce qui signifie qu’on va pouvoir les utiliser avec n’importe quel élément HTML, et notamment avec les éléments div et span. En pratique, il va être très courant de préciser des attributs class et id pour nos éléments div et span pour pouvoir appliquer des styles à un div (ou span) ou à un groupe d’éléments div ou span) définis. Avec ce qu’on a appris dans la dernière leçon, vous devriez être capable de comprendre les styles appliqués ici en vous concentrant. Je vous laisse donc essayer, ça vous fera un bon exercice ! Quelles différences entre les éléments div et span et quand utiliser l’un plutôt que l’autre ? La grande différence entre les éléments div et span va concerner ce qu’ils vont pouvoir contenir : un élément div va pouvoir conteneur plusieurs éléments et va donc nous servir de conteneurs d’éléments tandis que l’élément span va nous servir de conteneur pour une partie du contenu d’un élément et va donc être utilisé à l’intérieur d’un élément. Cette différence est due au fait que les éléments div et span sont de niveau ou au « type » différents : l’élément div est un élément de niveau block tandis que l’élément span est un élément de niveau inline. Nous découvrirons plus tard dans ce cours ce que ces différents « niveaux » ou « types » d’éléments signifient et les différences entre eux."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\"><title>div et span</title>\n    <style>\n      .boite { background: #eee; padding: 10px; margin: 10px; }\n      .rouge { color: red; }\n      .gras { font-weight: bold; }\n    </style>\n  </head>\n  <body>\n\n    <!-- div : conteneur block (prend toute la largeur disponible) -->\n    <!-- Sans signification sémantique particulière -->\n    <div class=\"boite\">\n      <div class=\"boite\">\n        <p>Un paragraphe à l'intérieur d'un div imbriqué.</p>\n      </div>\n      <div class=\"boite\">\n        <p>Un autre div au même niveau.</p>\n      </div>\n    </div>\n\n    <!-- span : conteneur inline (dans le flux du texte) -->\n    <!-- Sans signification sémantique particulière -->\n    <p>\n      Ce texte contient un mot\n      <span class=\"rouge gras\">important</span>\n      au milieu de la phrase.\n    </p>\n\n    <!-- Cas d'utilisation typiques -->\n    <!-- div : créer des sections de mise en page -->\n    <div id=\"header\">En-tête</div>\n    <div id=\"main\">Contenu principal</div>\n    <div id=\"footer\">Pied de page</div>\n\n    <!-- span : cibler du texte inline pour le styliser -->\n    <p>Prix : <span style=\"color:green;font-weight:bold;\">€25.00</span></p>\n    <p>Statut : <span class=\"badge-succes\">Actif</span></p>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-147.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-148.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-149.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-150.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-151.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-152.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-153.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-154.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-155.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "23-les-niveaux-ou-types-d-l-ments-block-et-",
    "title": "Les niveaux ou types d’éléments block et inline",
    "blocks": [
      {
        "type": "p",
        "text": "Nous avons pour le moment défini et étudié les grands mécanismes de fonctionnement du CSS tout en présentant certaines propriétés CSS impactant l’aspect visuel des éléments. Pour aller plus loin dans notre étude du CSS, nous allons devoir maintenant comprendre comment est définie la place prise par chaque élément dans une page."
      },
      {
        "type": "h",
        "text": "Les niveaux ou « types » d’éléments HTML"
      },
      {
        "type": "p",
        "text": "De manière schématique, on peut considérer qu’Il existe deux grands types d’affichage principaux pour les éléments HTML : un élément HTML va pouvoir être soit de niveau (ou de type) block, soit de niveau (ou de type) inline. Ces types d’affichage vont définir la façon dont les éléments vont se comporter dans une page par rapport aux autres et la place qu’ils vont prendre dans la page. Connaître le type d’affichage d’un élément HTML va donc être essentiel pour créer et mettre en forme nos pages web car les éléments de type block et ceux de type inline vont se comporter de façon radicalement différente dans une page et certaines propriétés CSS vont avoir des comportements différents selon le type d’affichage d’un élément. Comprendre comment est défini le type d’affichage d’un élément HTML Le type d’affichage d’un élément va toujours être défini en CSS par la propriété display. Si cette propriété n’est pas explicitement renseignée pour un élément, c’est la valeur par défaut de display qui va être appliquée à l’élément c’est-à-dire display: inline. Ainsi, par défaut, on peut dire que tout élément HTML va posséder un type d’affichage inline (nous allons voir par la suite ce que signifie ce type d’affichage). Cependant, rappelez-vous que chaque navigateur possède une feuille de styles (c’est-à- dire un fichier CSS) qui sera appliquée par défaut pour les différents éléments dont nous ne précisons pas le comportement dans nos propres feuilles de style. La plupart des navigateurs possèdent aujourd’hui des feuilles de style similaires notamment pour la définition des styles basiques et c’est une très bonne chose pour nous développeur puisque cela va nous éviter d’avoir à définir le comportement de chaque propriété pour chaque élément de notre page. Parmi ces styles par défaut appliqués par n’importe quel navigateur se trouve la définition du type d’affichage ou du display pour chaque élément. Aujourd’hui, la plupart des navigateurs suivent les recommandations du W3C (l’organisme en charge de l’évolution et des standards des langages Web). Ce W3C spécifie pour chaque élément HTML quelle devrait être la valeur de son display. Attention cependant : encore une fois, ce ne sont que des recommandations et chaque navigateur est libre de ne pas en tenir compte et de définir une autre valeur de display pour chaque élément ! C’est la raison pour laquelle il reste important de définir nous-mêmes la plupart des styles CSS impactant et qui pourraient être définis différemment par défaut par différents navigateurs. Le W3C va donc indiquer quel devrait être le type d’affichage d’un élément par défaut et l’immense majorité des navigateurs va appliquer ces recommandations ce qui fait que l’un des display suivants à la plupart des éléments HTML en fonction de l’élément :"
      },
      {
        "type": "list",
        "items": [
          "display : block : affichage sous forme d’un bloc ;",
          "display : inline : affichage en ligne ;",
          "display : none : l’élément n’est pas affiché."
        ]
      },
      {
        "type": "p",
        "text": "Notez que le W3C préconise d’autres types d’affichage pour certains éléments HTML particuliers. Les deux autres valeurs de display généralement respectées et appliquées par les navigateurs sont :"
      },
      {
        "type": "list",
        "items": [
          "display : list-item va être appliquée par défaut pour les éléments de liste li."
        ]
      },
      {
        "type": "p",
        "text": "L’affichage se fait sous forme de bloc mais une boite avec un marqueur est également générée ;"
      },
      {
        "type": "list",
        "items": [
          "display : table va être appliquée par défaut pour les éléments de tableau table."
        ]
      },
      {
        "type": "p",
        "text": "L’affichage se fait sous forme de bloc. Certains navigateurs dans certains cas très particuliers peuvent également utiliser la valeur inline-blockpour afficher certains éléments. Ici, vous devez bien comprendre que ces valeurs ne sont que les valeurs préconisées par le W3C. Rien ne nous empêche de définir un type d’affichage différent de celui préconisé pour un élément en utilisant la propriété display avec la valeur souhaitée. Cela va pouvoir être utile pour aider à la mise en page de certains éléments. Bon à savoir : Jusqu’à récemment (jusqu’au HTML 4.1), le W3C utilisait la simple distinction « bloc-level elements » vs « inline-level elements » (éléments de type block vs éléments de type inline) pour catégoriser les éléments HTML. Cependant, l’évolution des langages HTML et CSS et de leur complexité a amené le W3C à repenser la façon dont les éléments devaient être catégorisés. Aujourd’hui, les éléments sont classés selon des catégories ou des modèles de contenus (« content categories » ou « content models »)."
      },
      {
        "type": "h",
        "text": "Rapide introduction au modèle des boites"
      },
      {
        "type": "p",
        "text": "Le modèle des boites (que nous étudierons plus tard dans ce cours) nous dit que tout élément HTML peut être représenté sous forme d’une boite rectangulaire. C’est une représentation qu’il vous faut connaitre et qu’il vous faudra comprendre. Cette boite rectangulaire représentant l’élément contient d’autres boites (une qui contient le contenu, une autre qui contient en plus les marges intérieures, etc.) et ces différentes boites vont se comporter de manière différente selon le type d’affichage qui va lui être attribué, c’est-à-dire selon la valeur donnée à la propriété display pour cet élément. Cependant, retenez bien ici que quelle que soit la valeur donnée à la propriété display, l’élément va toujours pouvoir être représenté sous forme d’une boite. Cela peut vous sembler flou pour le moment, mais intégrer cela va beaucoup vous aider pour bien comprendre comment créer des mises en page efficaces en CSS."
      },
      {
        "type": "h",
        "text": "Les éléments de type inline"
      },
      {
        "type": "p",
        "text": "Par simplicité, on appellera « élément de type inline » (ou « inline level element » en anglais) un élément auquel a été appliqué un display: inline. Les éléments de type inline vont posséder les caractéristiques suivantes qui vont les différencier des éléments de type block :"
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
        "text": "devrait pas contenir d’éléments de type block. De plus, notez qu’on ne va pas par défaut pouvoir appliquer de propriété width ou height à un élément de type inline puisque la caractéristique principale de ce type d’éléments est de n’occuper que la place nécessaire à l’affichage de leur contenu. Les éléments HTML dont le type d’affichage recommandé par le W3C est le type inline les plus courants sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "Les éléments de distinction d’importance du contenu em et strong ;",
          "L’élément span ;",
          "L’élément de liens a ;",
          "L’élément button ;",
          "Les éléments de formulaire input, label, textarea et de liste de choix select ;",
          "L’élément d’insertion d’images img (cas intéressant et souvent source de"
        ]
      },
      {
        "type": "p",
        "text": "confusions car on va pouvoir passer une largeur et une hauteur à l’image à afficher en soi qui va « remplacer » l’élément img lors de l’affichage, mais il n’empêche que l’élément img est bien inline en soi);"
      },
      {
        "type": "list",
        "items": [
          "Les éléments code, script, etc."
        ]
      },
      {
        "type": "p",
        "text": "Dans l’exemple ci-dessus, j’ai rajouté une couleur de fond aux éléments inline afin que vous puissiez bien voir l’espace qu’ils prennent dans la page."
      },
      {
        "type": "h",
        "text": "Les éléments de type block"
      },
      {
        "type": "p",
        "text": "Par simplicité, on appellera « élément de type block » (ou « block level element » en anglais) un élément auquel on va appliquer un display: block. Les éléments de type block vont posséder les caractéristiques de disposition suivantes :"
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
        "text": "type inline. Les éléments HTML dont le type d’affichage recommandé par le W3C est le type block les plus communs sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "L’élément body, cas particulier mais qui est concrètement considéré comme un"
        ]
      },
      {
        "type": "p",
        "text": "élément block ;"
      },
      {
        "type": "list",
        "items": [
          "L’élément de division du contenu div ;",
          "Les paragraphes p et titres h1, h2, h3, h4, h5, h6 ;",
          "Les éléments structurants article, aside, header, footer, nav et section ;",
          "Les listes ul, ol, dl et éléments de listes de définition dt et dd ;",
          "L’élément de définition de tableaux table ;",
          "L’élément de définition de formulaires form et l’élément fieldset ;",
          "Les éléments figure et figcaption ;",
          "Les éléments canvas, video, etc."
        ]
      },
      {
        "type": "p",
        "text": "Bon à savoir : Les éléments HTML comme video et img décrits ci-dessus comme étant respectivement de types block et inline sont des éléments HTML très particuliers : ils sont dans la catégorie des éléments « void » (j’utilise ici le mot anglais car utiliser « vide » porterait à confusion) et ce sont également ce qu’on appelle des éléments HTML remplacés. Un élément void est un élément qui ne peut pas posséder de contenu qui lui soit propre et un élément remplacé est un élément qui fait appel à du contenu extérieur (qui va être « remplacé » par un contenu extérieur) possédant déjà des dimensions propres. Notez que la plupart des éléments remplacés sont également des éléments void."
      },
      {
        "type": "h",
        "text": "Les autres valeurs de la propriété display"
      },
      {
        "type": "p",
        "text": "Nous allons passer de nombreuses autres valeurs à la propriété display en plus des valeurs inline, block et none comme par exemple inline-block, table, list-item, flex, etc. Nous aurons l’occasion de reparler des différentes valeurs de la propriété display dans la leçon qui lui est dédiée plus tard dans ce cours. Pour le moment, retenez simplement ici que toutes ces « sous » valeurs d’affichage vont toujours reposer sur un affichage pour l’élément en soi block ou inline auquel vont pouvoir s’ajouter différentes règles, contraintes ou variations. Je vous demande donc pour l’instant de considérer que tous les éléments sont soit de type block, soit de type inline et de bien retenir les différences entre ces deux types d’affichage."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\"><title>Block vs Inline</title>\n    <style>\n      .block { background: #3498db; color: white; padding: 5px; margin: 5px 0; }\n      .inline { background: #e74c3c; color: white; padding: 3px; }\n    </style>\n  </head>\n  <body>\n\n    <!-- Éléments BLOCK -->\n    <!-- Occupent toute la largeur disponible -->\n    <!-- Commencent toujours sur une nouvelle ligne -->\n    <!-- Peuvent contenir des éléments block et inline -->\n    <div class=\"block\">div (block)</div>\n    <p class=\"block\">p (block)</p>\n    <h1 class=\"block\">h1 (block)</h1>\n    <!-- Autres block : h1-h6, ul, ol, li, table, form, header, footer... -->\n\n    <!-- Éléments INLINE -->\n    <!-- Occupent seulement l'espace nécessaire -->\n    <!-- Ne démarrent pas sur une nouvelle ligne -->\n    <!-- En général, contiennent uniquement du texte ou d'autres éléments inline -->\n    <p>\n      Texte normal avec\n      <span class=\"inline\">span (inline)</span>,\n      <a class=\"inline\" href=\"#\">a (inline)</a>,\n      <strong class=\"inline\">strong (inline)</strong> et\n      <em class=\"inline\">em (inline)</em>.\n    </p>\n    <!-- Autres inline : img, input, button, label, code, br... -->\n\n    <!-- ATTENTION : ne pas mettre d'élément block dans un inline -->\n    <!-- INCORRECT : <span><div>...</div></span> -->\n    <!-- CORRECT : <div><span>...</span></div> -->\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-156.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-157.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-159.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-160.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-161.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-162.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "31-largeur-width-et-hauteur-height-de-la-bo",
    "title": "Largeur (width) et hauteur (height) de la boite de contenu des éléments HTML",
    "blocks": [
      {
        "type": "p",
        "text": "de contenu des éléments HTML Tout contenu d’un élément HTML va prendre un certain espace dans une page, c’est-à- dire posséder une largeur et une hauteur. Cet espace pris, c’est-à-dire la largeur et la hauteur de ce contenu vont être représentées respectivement par les propriétés CSS width (largeur) et height (hauteur). Dans cette leçon, nous allons étudier ces deux propriétés et apprendre à les manipuler. L’impact du type d’affichage d’un élément sur ses dimensions Pour comprendre comment fonctionnent les propriétés width et height et comment les manipuler il est avant tout nécessaire d’avoir une vue claire sur les types d’affichage principaux des éléments : l’affichage block (sous forme de bloc) et inline (en ligne). En effet, je vous rappelle que les éléments HTML peuvent être affichées de deux grandes façons différentes : soit sous forme de bloc, soit en ligne. Les dimensions par défaut du contenu des éléments HTML vont avant tout être déterminées par le type d’affichage des éléments : en effet, les éléments de type block occuperont par défaut toute la largeur disponible dans leur élément parent tandis que les éléments de type inline n’occuperont que la largeur nécessaire à leur contenu. Vous pouvez ainsi déjà retenir ici que nous n’allons pas pouvoir modifier la taille de l’espace pris par le contenu des éléments de type inline avec les propriétés width et height : les valeurs qu’on va pouvoir définir vont tout simplement être ignorées. En effet, le principe de base d’un élément de type inline est que l’espace pris par sa boite « contenu » soit toujours égal à l’espace strictement nécessaire à l’affichage de ce contenu. Regardez l’exemple ci-dessous pour vous en convaincre. Je vous rappelle ici qu’un élément p possède un type d’affichage block tandis qu’un élément span possède un type d’affichage inline. Comme vous pouvez le constater, les valeurs passées à width et à height sont ignorées pour mon span s1. Notez bien ici que modifier la taille de la boite du contenu d’un élément de type block ne change pas les propriétés fondamentales de celui-ci. J’entends par là qu’un élément de type block commencera toujours sur une nouvelle ligne et ne viendra jamais se positionner à côté d’un autre élément de type block quelle que soit sa taille. Les types de valeur des propriétés width et height et les problèmes de dépassement Les propriétés width et height vont pouvoir accepter plusieurs types de valeurs :"
      },
      {
        "type": "list",
        "items": [
          "Des valeurs de type « longueur » qui vont être généralement exprimées en px ou"
        ]
      },
      {
        "type": "p",
        "text": "en em ;"
      },
      {
        "type": "list",
        "items": [
          "Des valeurs en pourcentage, auquel cas le pourcentage donné sera relatif à la"
        ]
      },
      {
        "type": "p",
        "text": "dimension de l’élément parent. Problème de dépassement n°1 : l’élément dépasse de son parent Pour bien identifier ce premier problème de dépassement, prenons immédiatement un exemple qui va également nous permettre de comprendre pourquoi il est généralement déconseillé de mélanger des unités fixes et relatives lorsqu’on définit des dimensions. Dans cet exemple, la largeur de notre premier conteneur div class=\"d1\" est définie de manière relative par rapport à son parent (qui est le body). La largeur du div va donc changer en fonction de la largeur de la fenêtre. Ensuite, dans ce div conteneur, on spécifie une largeur pour notre premier paragraphe en unités absolues et fixes. Le problème ici va être que pour des fenêtres trop petites notre élément conteneur div va être plus petit que le paragraphe qu’il contient et cela va poser de nombreux problèmes de design. Pour éviter ce genre de problèmes, la première règle est de bien faire attention lorsqu’on définit des dimensions aux différents types de valeurs utilisés et aux interactions entre ces différentes valeurs. Ensuite, afin d’être certain que le design général de notre page ne sera pas impacté, on peut également utiliser la propriété overflow et en particulier sa valeur hidden sur l’élément parent. Cela va avoir pour effet de tronquer tout le contenu qui dépasse de l’élément. Si l’on souhaite que le contenu reste accessible, on peut utiliser overflow : scroll qui va proposer une barre de défilement dans l’élément parent."
      },
      {
        "type": "h",
        "text": "Problème de dépassement n°2 : le contenu dépasse de l’élément"
      },
      {
        "type": "p",
        "text": "Un autre problème de dépassement courant va être le problème « contraire » au précédent, à savoir le cas où le contenu de mon élément dépasse de sa boite. Ce problème va survenir si on définit une taille trop petite pour la boite de contenu de l’élément par rapport au contenu de l’élément. Dans ce cas-là, il va falloir utiliser la propriété overflow sur l’élément en soi afin que le contenu qui dépasse soit caché. Problème de dépassement n°3 : l’élément dépasse globalement de son parent Une autre erreur couramment faite se situe dans la mauvaise compréhension du modèle des boites. En effet, il faut bien ici se rappeler que les propriétés width et height ne servent qu’à définir les dimensions de la boite liée au contenu d’un élément. A ces dimensions vont venir s’ajouter les tailles des marges intérieures, des bordures et celles des marges extérieures pour former la taille totale de l’élément. Ainsi, si l’on ne fait pas attention, on peut très rapidement se retrouver avec des éléments enfants plus grands et qui vont dépasser de leur parent. Imaginons par exemple qu’on fixe la largeur d’un élément enfant à 100% de celle de son parent. Si on attribue ensuite une quelconque marge interne, bordure, ou marge externe à l’élément, celui-ci va dépasser de son élément parent."
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Largeur (width) et hauteur (height) de la boite de contenu */\n\n/* Valeurs absolues */\n.boite-fixe {\n  width: 300px;\n  height: 150px;\n  background: #3498db;\n}\n\n/* Valeurs en pourcentage (par rapport au parent) */\n.boite-pourcent {\n  width: 50%;   /* 50% de la largeur du parent */\n  height: 200px;\n  background: #e74c3c;\n}\n\n/* Valeurs min/max pour la responsivité */\n.boite-adaptable {\n  width: 100%;          /* Prend 100% de l'espace disponible */\n  max-width: 800px;     /* Mais pas plus de 800px */\n  min-width: 300px;     /* Mais pas moins de 300px */\n  min-height: 100px;    /* Hauteur minimale */\n  background: #2ecc71;\n}\n\n/* Valeurs spéciales */\n.auto {\n  width: auto;   /* Valeur par défaut : largeur calculée automatiquement */\n  height: auto;  /* Hauteur déterminée par le contenu */\n}\n\n/* fit-content, max-content, min-content */\n.fit {\n  width: fit-content;   /* Largeur adaptée au contenu */\n}\n\n/* Unités modernes */\n.viewport {\n  width: 100vw;   /* 100% de la largeur du viewport */\n  height: 100vh;  /* 100% de la hauteur du viewport */\n}"
},
            { "type": "image", "src": "images/htmlcss/img-268.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-269.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-270.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-271.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-272.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-273.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-274.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-275.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-276.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-277.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-278.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-279.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-280.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-281.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-282.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "41-cr-er-des-tableaux-en-html",
    "title": "Créer des tableaux en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Un tableau en HTML représente un ensemble organisé de données. Pour créer un tableau en HTML nous allons utiliser l’élément table qui signifie « tableau » en anglais. Les tableaux sont une notion importante du HTML et il est important que vous sachiez comment les créer. Dans cette leçon, nous allons voir comment créer un tableau simple."
      },
      {
        "type": "h",
        "text": "Définition et utilité des tableaux HTML"
      },
      {
        "type": "p",
        "text": "Les tableaux en HTML vont nous permettre de présenter des données de manière organisée et sous une certaine forme pour les structurer et les rendre compréhensibles pour les navigateurs, moteurs de recherche et utilisateurs. Historiquement, de nombreux développeurs et web designer se sont servi à tort des tableaux pour mettre en forme de pages web. En effet, à l’époque, utiliser des tableaux semblait être un bon moyen de contrôler l’affichage et le placement des différents éléments d’une page en les plaçant dans des cellules. Dans cette lignée, de nombreux attributs HTML permettant de modifier / mettre en forme un tableau avaient été créés. Cependant, cette utilisation est à bannir aujourd’hui. En effet, je vous rappelle que le rôle du HTML est et a toujours été de structurer du contenu et de lui donner du sens, pas de mettre en forme ledit contenu (ce qui est le rôle du CSS). Ainsi, vous comprendrez également que pour mettre en forme visuellement un tableau, nous n’utiliserons pas les attributs HTML (qui sont en grande majorité dépréciés) mais plutôt des propriétés CSS."
      },
      {
        "type": "h",
        "text": "Les éléments constitutifs essentiels d’un tableau HTML"
      },
      {
        "type": "p",
        "text": "Un tableau est un ensemble de lignes et de colonnes. L’intersection entre une ligne et une colonne est une cellule de tableau. Pour créer un tableau fonctionnel en HTML, nous allons devoir utiliser à minima 3 éléments :"
      },
      {
        "type": "list",
        "items": [
          "Un élément table (« tableau » en français) qui va définir le tableau en soi ;",
          "Des éléments tr, pour « table row » ou « ligne de tableau » en français qui vont"
        ]
      },
      {
        "type": "p",
        "text": "nous permettre d’ajouter des lignes dans notre tableau ;"
      },
      {
        "type": "list",
        "items": [
          "Des éléments td, pour « table data » ou « donnée de tableau » en français qui vont"
        ]
      },
      {
        "type": "p",
        "text": "nous permettre d’ajouter des cellules dans nos lignes et ainsi de créer automatiquement de nouvelles colonnes. L’élément HTML table va représenter le tableau en soi. Cet élément est composé d’une paire de balises ouvrante <table> et fermante </table> au sein desquelles nous allons placer les différents autres éléments de notre tableau. Les éléments tr et td sont également représentés sous la forme d’une paire de balises avec leur contenu entre les balises."
      },
      {
        "type": "h",
        "text": "Créer un tableau simple en HTML"
      },
      {
        "type": "p",
        "text": "Pour créer un tableau en HTML, il y a une chose que vous devez bien comprendre qui est que les tableaux HTML vont être créés ligne par ligne. A chaque fois que nous voudrons ajouter une ligne dans notre tableau, nous utiliserons un nouvel élément tr. Nous allons ensuite pouvoir ajouter autant d’éléments td au sein de chacune de nos lignes. Chaque élément td va représenter une cellule dans le tableau. Par exemple, pour créer un tableau en HTML contenant 3 lignes contenant chacune 4 cellules (c’est-à-dire un tableau de 3 lignes, 4 colonnes), nous utiliserons notre élément table qui va contenir 3 éléments tr et chaque élément tr contiendra 4 éléments td comme ceci (ne tenez pas compte de la mise en forme pour le moment, nous en reparlerons plus tard) : Nous venons ci-dessus de créer notre premier tableau entièrement en HTML. Retenez bien la syntaxe et particulièrement l’ordre d’imbrication des éléments avec nos éléments td à l’intérieur de nos éléments tr : on va utiliser un nouvel élément td dès que l’on va vouloir ajouter une cellule (et donc une colonne) au sein d’une même ligne. Si vous essayez de ne recopier que le code HTML présenté ci-dessus et de l’afficher, vous risquez d’avoir un objet qui ne ressemble pas à l’idée que l’on se fait d’un tableau. C’est tout à fait normal puisque j’ai déjà ici mis sommairement notre premier tableau HTML en forme en utilisant des propriétés CSS. Retenez cependant qu’au sens du HTML, et même sans mise en forme CSS, l’objet créé est bien un tableau. J’attire votre attention ici sur le fait que le rôle du HTML n’est que de structurer du contenu, c’est-à-dire le rendre intelligible pour les navigateurs et moteurs de recherche. Notez par ailleurs que différentes lignes peuvent contenir un nombre différent de cellules même si cela est considéré comme une mauvaise pratique pour des raisons évidentes de sémantique et de lisibilité. Dans le cas où cela arriverait, la largeur de notre tableau HTML (i.e. son nombre de colonnes) serait égale au nombre de cellules de la ligne contenant le plus de cellules. Regardez plutôt l’exemple suivant où on a créé un tableau HTML de 3 lignes avec une première ligne contenant 4 cellules, une deuxième ligne contenant seulement 2 cellules, et la dernière ligne contenant 3 cellules : Encore une fois, retenez que le fait de créer des lignes de tableau avec un nombre de cellules différent dans chacune est considéré comme une mauvaise pratique. Pour cela, nous attribuerons toujours un même nombre de td à nos différentes lignes. Si on souhaite laisser une cellule vide, nous nous contenterons d’écrire <td> </td> sans rien écrire entre les balises. Imaginons par exemple que nous voulions laisser la cellule « age » vide pour la ligne relative à « Pierre » Pour cela, il suffit de créer un élément td pour son âge et de ne mettre aucun contenu dedans."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\"><title>Tableaux HTML</title>\n    <style>\n      table { border-collapse: collapse; width: 100%; }\n      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n      th { background-color: #333; color: white; }\n      tr:nth-child(even) { background-color: #f2f2f2; }\n    </style>\n  </head>\n  <body>\n\n    <!-- Structure de base d'un tableau -->\n    <table>\n      <!-- En-tête du tableau -->\n      <thead>\n        <tr>\n          <th>Prénom</th>\n          <th>Nom</th>\n          <th>Âge</th>\n          <th>Ville</th>\n        </tr>\n      </thead>\n      <!-- Corps du tableau -->\n      <tbody>\n        <tr>\n          <td>Pierre</td>\n          <td>Dupont</td>\n          <td>29</td>\n          <td>Lyon</td>\n        </tr>\n        <tr>\n          <td>Marie</td>\n          <td>Martin</td>\n          <td>35</td>\n          <td>Paris</td>\n        </tr>\n      </tbody>\n      <!-- Pied de tableau -->\n      <tfoot>\n        <tr>\n          <td colspan=\"4\">Total : 2 personnes</td>\n        </tr>\n      </tfoot>\n    </table>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-397.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-398.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-399.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-400.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-401.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-402.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-403.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "42-structurer-un-tableau-html",
    "title": "Structurer un tableau HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Dans la leçon précédente, nous avons créé un premier tableau très simple. Ici, je vous rappelle que les tableaux sont des objets HTML qui servent à structurer et à donner du sens à des contenus en les organisant. Souvent, lorsque nous choisirons d’organiser de l’information dans un tableau, cette information sera hiérarchisée et on voudra que notre tableau possède une ligne d’en-tête dans laquelle on va préciser le type de données attendues dans chaque colonne voire une légende, etc. Dans cette nouvelle leçon, nous allons découvrir de nouveaux éléments et attributs qui vont nous servir à structurer nos tableaux HTML pour donner un maximum de sens à chaque donnée."
      },
      {
        "type": "h",
        "text": "Ajouter une ligne d’en-tête à un tableau HTML"
      },
      {
        "type": "p",
        "text": "Très souvent, les tableaux vont posséder une ligne d’en-tête dans laquelle on va donner des informations au lecteur sur le type des données qui seront renseignées dans chaque colonne. Cette ligne d’en-tête est différente des autres lignes puisqu’elle ne contient pas le même type d’informations que les autres lignes de notre tableau : elle sert simplement à indiquer quelles informations vont figurer dans le tableau. Nous allons ainsi pouvoir différencier cette ligne des autres en HTML à l’aide d’un élément particulier. Pour créer une ligne d’en-tête en HTML, nous allons cette fois-ci devoir utiliser l’élément th, pour « table head » ou « en-tête du tableau » en français à la place de nos éléments td dans notre première ligne. On peut appliquer un style particulier en CSS à cette ligne afin de bien la démarquer des autres. Par défaut, le texte au sein des éléments th s’affichera en gras dans la plupart des navigateurs. Si vous avez ajouté des bordures autour de chaque cellule de votre tableau en CSS, pensez bien ici à appliquer ces mêmes bordures aux éléments th en plus des éléments td pour avoir des bordures autour des cellules de la ligne d’en-tête également."
      },
      {
        "type": "h",
        "text": "Création d’un tableau structuré en HTML"
      },
      {
        "type": "p",
        "text": "Si vous devez créer des tableaux assez longs, il peut être judicieux de commencer à les structurer en les subdivisant en plusieurs parties. On peut distinguer trois parties dans un tableau : le haut du tableau contenant généralement la ligne d’en tête, le corps du tableau contenant les informations de notre tableau en soi et le pied du tableau servant à calculer des totaux ou à rappeler les informations d’en tête si votre tableau est vraiment long. Pour définir chaque partie d’un tableau, nous disposons d’un élément HTML spécifique :"
      },
      {
        "type": "list",
        "items": [
          "thead pour la tête du tableau ;",
          "tbody pour le corps du tableau ;",
          "tfoot pour le pied du tableau."
        ]
      },
      {
        "type": "p",
        "text": "Voyons immédiatement comment utiliser ces nouveaux éléments judicieusement. Vous pouvez par ailleurs noter ici une chose intéressante : il est strictement équivalent de mentionner un élément tfoot avant ou après un élément tbody. En effet, même si le tfoot est déclaré avant le tbody, son contenu s’affichera tout de même après dans le rendu final. Cette curiosité nous vient du HTML4 dans lequel il était interdit de déclarer un élément tfoot après un élément tbody ; il fallait absolument le mentionner avant. Cette règle totalement contre intuitive a été supprimée avec le HTML5. Fusionner des cellules entre elles avec colspan et rowspan Le CSS, bien que puissant aujourd’hui, ne nous permet pas encore de tout faire et certains attributs HTML ne sont pas encore dépréciés. C’est notamment le cas des attributs colspan et rowspan qui vont nous permettre de fusionner plusieurs cellules adjacentes d’une même ligne ou d’une même colonne. Ces attributs vont prendre en valeur le nombre de colonnes ou de lignes qu’une cellule doit couvrir, c’est-à-dire le nombre de colonnes ou de lignes qu’une cellule doit occuper ou encore sur lesquelles elle doit s’étendre. Essayons donc de fusionner plusieurs cellules entre elles dans un tableau HTML grâce à ces attributs : Notez bien ici qu’il faudra bien réfléchir à la construction de votre tableau lorsque vous utilisez ces attributs. Par exemple, si on définit qu’une cellule doit couvrir 3 lignes, il faudra omettre un élément td pour les deux lignes supplémentaires sur lesquelles la cellule s’étend et de même pour une cellule couvrant l’espace relatif à plusieurs colonnes."
      },
      {
        "type": "h",
        "text": "Ajouter une légende à un tableau HTML avec caption"
      },
      {
        "type": "p",
        "text": "On va également pouvoir ajouter un titre ou une légende à notre tableau afin d’indiquer ce que contient notre tableau. Pour ajouter une légende, nous allons utiliser l’élément HTML caption. Cet élément est très simple d’utilisation, mais il faut respecter une règle : il doit être inséré immédiatement après la balise ouvrante de l’élément table. Utiliser les éléments col et colgroup pour préparer la mise en forme des colonnes d’un tableau Nous avons vu précédemment qu’en HTML nous créons les tableaux ligne par ligne avec des éléments tr. Cela fait qu’il est très simple de mettre en forme en CSS les différentes lignes d’un tableau HTML, en utilisant pas exemple une pseudo-classe :nth-child() que nous étudierons plus tard dans ce cours. Cependant, cela est beaucoup plus compliqué lorsque l’on souhaite mettre en forme une colonne d’un tableau HTML puisque les cellules représentées par nos éléments td qui créent automatiquement ces colonnes sont dispersées au sein des différentes lignes. Pour régler ce problème de mise en forme, le HTML nous offre deux éléments qu’on va pouvoir intégrer dans nos tableaux : les éléments col et colgroup. L’élément colgroup va représenter un groupe d’une ou plusieurs colonnes dans un tableau qu’on va pouvoir ensuite mettre en forme en CSS. Cet élément est représenté par une paire de balises et doit être un enfant direct de l’élément table, précédé éventuellement uniquement par un élément caption. Cela signifie qu’il doit être inséré avant tout élément thead, tbody, tfoot, and tr au sein de l’élément table. Au sein d’un élément colgroup, nous allons pouvoir insérer autant d’éléments col qu’il y a de colonnes dans notre tableau. Chaque élément col représente une colonne de notre tableau. Cet élément ne sert également qu’à la mise en forme et est représenté par une unique balise orpheline <col>. Pour représenter plusieurs colonnes de notre tableau avec un seul élément col, on peut utiliser un attribut span qui va prendre en valeur le nombre de colonnes de notre tableau que l’élément col doit représenter. Ici, notre tableau possède quatre colonnes. On veut appliquer une couleur de fond pour toutes les cellules des trois premières colonnes d’un coup. On utilise donc un élément colgroup dans lequel on place deux éléments col. On passe un attribut span =\"3\" à notre premier élément col afin que cet élément représente les trois premières colonnes de notre tableau. Nous n’avons alors plus qu’à appliquer une couleur de fond à cet élément col pour ajouter un fond à chacune des cellules des trois premières colonnes de notre tableau. Pour le cibler facilement, on lui attribue donc une class."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\"><title>Tableau structuré</title>\n    <style>\n      table { border-collapse: collapse; width: 100%; }\n      th, td { border: 1px solid #ccc; padding: 10px; text-align: center; }\n      th { background: #2c3e50; color: white; }\n    </style>\n  </head>\n  <body>\n\n    <table>\n      <!-- caption : titre du tableau (accessibility) -->\n      <caption>Planning de la semaine</caption>\n\n      <!-- colgroup / col : cibler des colonnes pour le style -->\n      <colgroup>\n        <col style=\"background-color: #f0f0f0;\">  <!-- 1ère colonne -->\n        <col span=\"5\">                             <!-- 5 colonnes suivantes -->\n      </colgroup>\n\n      <thead>\n        <tr>\n          <th>Heure</th>\n          <th>Lundi</th>\n          <th>Mardi</th>\n          <th>Mercredi</th>\n          <th>Jeudi</th>\n          <th>Vendredi</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr>\n          <th>8h-10h</th>\n          <!-- colspan : fusionne des cellules horizontalement -->\n          <td colspan=\"2\">JavaScript</td>\n          <td>HTML</td>\n          <!-- rowspan : fusionne des cellules verticalement -->\n          <td rowspan=\"2\">CSS</td>\n          <td>PHP</td>\n        </tr>\n        <tr>\n          <th>10h-12h</th>\n          <td>React</td>\n          <td>Node.js</td>\n          <td>SQL</td>\n          <td>Git</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-404.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-405.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-406.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-407.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-408.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-409.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-410.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-411.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-412.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-413.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "43-mettre-en-forme-un-tableau-html",
    "title": "Mettre en forme un tableau HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Les tableaux sont des entités très particulières en HTML et des propriétés CSS ont donc été créées spécialement pour les mettre en forme et les personnaliser. Dans cette leçon, nous allons découvrir ces différentes propriétés et apprendre à les utiliser."
      },
      {
        "type": "h",
        "text": "Mettre en forme un tableau : attributs HTML ou CSS ?"
      },
      {
        "type": "p",
        "text": "S’il est vrai que le HTML sert à structurer le contenu et à lui donner du sens, nous créons des sites pour des visiteurs humains et donc nous voulons que ces sites soient compréhensibles pour eux et agréables à consulter. Pour cela, nous devons généralement mettre en forme notre contenu HTML brut afin de mieux le présenter. Pour les tableaux, comme pour la majorité des éléments HTML, nous utilisions à l’époque des attributs de mise en forme HTML. Les attributs les plus communs utilisés avec les tableaux étaient les suivants :"
      },
      {
        "type": "list",
        "items": [
          "align pour définir l’alignement du tableau dans la page ;",
          "bgcolor pour définir la couleur de fond du tableau ;",
          "border pour définir la taille d’une bordure autour du tableau ;",
          "cellpadding pour définir l’espace entre le contenu d’une cellule et sa bordure ;",
          "cellspacing pour définir l’espace entre deux cellules ;",
          "char pour aligner le contenu au sein d’une ligne à partir d’un certain caractère ;",
          "charoff pour définir le nombre de caractères à partir desquels le contenu doit être"
        ]
      },
      {
        "type": "p",
        "text": "aligné depuis le caractère défini par l’attribut char ;"
      },
      {
        "type": "list",
        "items": [
          "frame pour définir les côtés du tableau sur lesquels tracer une bordure ;",
          "rules pour définir la manière dont les traits doivent apparaître au sein du tableau ;",
          "summary pour définir un texte servant à résumer le tableau au cas où celui-ci ne"
        ]
      },
      {
        "type": "p",
        "text": "pourrait pas être affiché ;"
      },
      {
        "type": "list",
        "items": [
          "valign pour aligner verticalement le contenu des cellules au sein d’une ligne."
        ]
      },
      {
        "type": "p",
        "text": "Ces attributs sont tous néanmoins tous dépréciés et vous ne devriez jamais les utiliser pour mettre en forme vos tableaux HTML. A la place, nous utiliserons plutôt le CSS qui nous offre aujourd’hui de très bonnes alternatives et un bon support pour la mise en forme de nos tableaux. Ainsi, nous allons pouvoir par exemple ajouter des bordures autour de chaque cellule de notre tableau en appliquant la propriété border à nos éléments td puis fusionner les différentes bordures en une pour harmoniser l’ensemble en appliquant un border-collapse: collapse à notre élément table. Nous allons encore pouvoir modifier la couleur de fond de notre tableau ou d’un élément particulier de notre tableau ou aligner son contenu en CSS. Dans cette leçon, nous allons voir les propriétés CSS suivantes liées aux tableaux :"
      },
      {
        "type": "list",
        "items": [
          "border-collapse ;",
          "border-spacing ;",
          "caption-side ;",
          "empty-cells ;",
          "table-layout ;",
          "vertical-align."
        ]
      },
      {
        "type": "h",
        "text": "Les propriétés border-collapse et border-spacing"
      },
      {
        "type": "p",
        "text": "La création de bordures dans les tableaux semble complexe à priori. En effet, en appliquant une propriété border à notre élément table, nous allons créer une bordure autour de notre tableau mais pas entre chaque cellule de celui-ci. Au contraire, en appliquant une bordure à chaque élément th ou td, c’est-à-dire à chaque cellule de notre tableau, les bordures autour de chaque cellule ne vont pas se coller entre elles, ce qui n’est généralement pas le comportement voulu. Les propriétés border-collapse et border-spacing ont été créées pour répondre à ce problème. La propriété border-collapse va nous permettre de choisir si on veut faire fusionner les bordures des différentes cellules de notre tableau ou pas. On va pouvoir lui passer l’une de ces deux valeurs :"
      },
      {
        "type": "list",
        "items": [
          "separate : Valeur par défaut ; les bordures seront séparées et distinctes ;",
          "collapse : Les bordures adjacentes vont être fusionnées."
        ]
      },
      {
        "type": "p",
        "text": "Nous allons donc généralement appliquer border à nos éléments th et td ainsi que la propriété border-collapse avec sa valeur collapse à notre élément table. Dans le cas où l’on souhaite conserver des bordures séparées, on va tout de même pouvoir gérer la distance entre chaque bordure grâce à la propriété border-spacing. Cette propriété va prendre une distance en valeur (en px, cm, em, rem, etc.) qui représente l’espace entre deux bordures adjacentes. Il faudra à nouveau l’appliquer à l’élément table. Notez qu’indiquer un border-spacing : 0px ne va pas fusionner les bordures des cellules adjacentes comme le ferait border-collapse : collapse mais simplement coller les bordures des cellules adjacentes."
      },
      {
        "type": "h",
        "text": "Contrôler la largeur des colonnes avec table-layout"
      },
      {
        "type": "p",
        "text": "La propriété table-layout va nous permettre de gérer la largeur des différentes colonnes de notre tableau ou plus exactement de choisir selon quel algorithme la largeur de chaque colonne doit être calculée. On va pouvoir choisir parmi deux valeurs :"
      },
      {
        "type": "list",
        "items": [
          "auto : Valeur par défaut ; la largeur des différentes colonnes du tableau est calculée"
        ]
      },
      {
        "type": "p",
        "text": "automatiquement afin que le tableau prenne le moins d’espace possible en hauteur. De plus, si une largeur a été définie avec width pour le tableau, alors celui- ci essaiera de la respecter tant que son contenu ne dépasse pas du tableau ;"
      },
      {
        "type": "list",
        "items": [
          "fixed : La largeur des colonnes va être déterminée à partir de la propriété width des"
        ]
      },
      {
        "type": "p",
        "text": "éléments table ou col ou de la première ligne du tableau. Définir l’affichage des cellules vides d’un tableau avec empty-cells La propriété empty-cells va nous permettre de choisir si l’arrière-plan et les bordures d’une cellule sans contenu doivent être affichés ou pas. Notez que cette propriété ne va pouvoir s’appliquer que si la valeur de la propriété border- collapse pour le tableau est separate. On va pouvoir choisir parmi deux valeurs :"
      },
      {
        "type": "list",
        "items": [
          "show : Valeur par défaut ; les bordures et l’arrière-plan des cellules vides du tableau"
        ]
      },
      {
        "type": "p",
        "text": "seront bien visibles ;"
      },
      {
        "type": "list",
        "items": [
          "hide : Les bordures et l’arrière-plan des cellules vides du tableau ne sont pas"
        ]
      },
      {
        "type": "p",
        "text": "affichés. Choisir où s’affiche la légende d’un tableau avec caption- side La propriété caption-side va nous permettre de choisir où doit s’afficher la légende d’un tableau, c’est-à-dire où doit s’afficher le texte présent dans l’élément caption du tableau. Aujourd’hui, nous pouvons choisir entre deux valeurs qui représentent deux emplacements :"
      },
      {
        "type": "list",
        "items": [
          "top Valeur par défaut ; la légende sera positionnée au-dessus du tableau ;",
          "bottom : La légende sera positionnée en dessous du tableau."
        ]
      },
      {
        "type": "p",
        "text": "Aligner le contenu des cellules d’un tableau avec vertical- align La propriété vertical-align sert à définir l’alignement vertical du contenu d’une cellule d’un tableau. On va pouvoir lui passer une valeur de type longueur (en px ou en em par exemple), une valeur en pourcentage ou un mot clef à cette propriété. Dans la grande majorité des cas, nous nous contenterons de choisir parmi l’un de ces 3 mots clefs :"
      },
      {
        "type": "list",
        "items": [
          "top : Le contenu de chaque cellule va se placer en haut de la cellule ;",
          "middle : Le contenu de chaque cellule va se placer au milieu de la cellule ;",
          "bottom : Le contenu de chaque cellule va se placer se bas de la cellule."
        ]
      },
      
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Mise en forme d'un tableau HTML */\n\ntable {\n  border-collapse: collapse; /* Fusionne les bordures adjacentes */\n  /* border-separate : bordures séparées (défaut) */\n  width: 100%;\n  margin: 20px 0;\n  font-family: Arial, sans-serif;\n}\n\n/* border-spacing : espace entre cellules (avec border-separate) */\n/* table { border-spacing: 5px; } */\n\nth, td {\n  border: 1px solid #ddd;\n  padding: 12px 15px;\n  text-align: left;\n  vertical-align: middle; /* top, middle, bottom */\n}\n\nth {\n  background-color: #2c3e50;\n  color: white;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/* Lignes alternées (zebra striping) */\ntbody tr:nth-child(even) {\n  background-color: #f8f9fa;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #ffffff;\n}\n\n/* Effet de survol */\ntbody tr:hover {\n  background-color: #d1ecf1;\n  cursor: pointer;\n}\n\n/* Première colonne en gras */\ntd:first-child {\n  font-weight: bold;\n  color: #333;\n}\n\n/* Tableau responsive */\n.table-responsive {\n  overflow-x: auto; /* Défilement horizontal sur mobile */\n}"
},
            { "type": "image", "src": "images/htmlcss/img-414.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-415.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-416.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-417.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-418.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-419.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-420.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-421.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-422.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-423.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-424.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-425.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-426.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-427.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-428.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-429.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-430.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-431.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-432.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-433.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-434.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "44-ins-rer-des-images-en-html",
    "title": "Insérer des images en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons pouvoir insérer des images au sein de nos fichiers HTML en utilisant l’élément HTML img représenté par une balise orpheline <img>. Dans cette leçon, nous allons nous intéresser aux différents formats d’image (jpeg, png, etc.) et allons voir comment insérer une ou plusieurs images dans nos pages en HTML. Nous discuterons également de la notion d’accessibilité du web à tous ainsi que de la mise en forme des images."
      },
      {
        "type": "h",
        "text": "Un point sur les différents formats d’image"
      },
      {
        "type": "p",
        "text": "Comme vous le savez certainement, vous pouvez enregistrer vos images sous différents formats. Les formats les plus utilisés sont :"
      },
      {
        "type": "list",
        "items": [
          "Le JPG ou JPEG ;",
          "Le PNG ;",
          "Le GIF ;",
          "Le BITMAP."
        ]
      },
      {
        "type": "p",
        "text": "Chaque format possède ses propres spécificités et il faut donc faire bien attention au choix du format lorsqu’on enregistre une image. Le format JPEG (pour Joint Photographic Expert Group), ou plus communément JPG est un format qui permet généralement de compresser le poids d’une image par dix tout en conservant une très bonne qualité. Généralement, nous choisirons ce format pour enregistrer des photos. Le PNG (Portable Network Graphic) est un format qui a été créé à l’origine pour remplacer le format GIF. Le grand intérêt de ce format est qu’il gère la transparence. Celui-ci a un très bon taux de compression tout en conservant une bonne qualité d’image. Nous utiliserons généralement ce format pour enregistrer nos images qui ne sont pas des photographies. Le GIF (Graphic Interchange Format) est un vieux format d’images que je ne recommande plus d’utiliser aujourd’hui, sauf dans le cas d’images animées. Finalement, le BITMAP (ou BMP) est un format qui possède une très bonne prise en charge par tous les navigateurs et éditeurs. Cependant, la compression des images est assez mauvaise, ce qui donne au final des images très lourdes et donc longues à charger. Pour cette raison, je vous déconseille également d’utiliser le BITMAP pour enregistrer vos images."
      },
      {
        "type": "h",
        "text": "Insérer des images en HTML"
      },
      {
        "type": "p",
        "text": "L’insertion d’images en HTML va se faire au moyen de l’élément HTML img. Cet élément est représenté par une balise orpheline. Au sein de l’élément img, nous allons obligatoirement devoir préciser deux attributs : les attributs src et alt. L’attribut src (pour source) va prendre comme valeur l’adresse de l’image (adresse relative ou absolue) tandis que l’attribut alt (pour alternative) va contenir un texte alternatif décrivant l’image. Ce texte va être affiché si l’image ne peut pas l’être pour une raison ou pour une autre, et est également très utile pour les non-voyants ou les mal voyants qui vont pouvoir « lire » notre image grâce à leurs lecteurs particuliers. J’insiste ici sur l’importance de l’attribut alt : le web a été créé avec l’idée d’accessibilité à tous et il est donc de notre devoir de tout faire pour rendre chacune de nos pages lisibles pour tous et particulièrement pour les gens souffrant de déficiences. Voyons maintenant comment fonctionne l’insertion d’images en pratique. On va commencer par enregistrer une image dans le même dossier que notre page HTML. Pour ma part, mon image s’appelle « sunset.png » et possède une largeur et une hauteur de 150 pixels. Une nouvelle fois, choisissez un nom d’image sans espace ni caractère spécial (pas d’accent notamment). Cela évitera des problèmes potentiels. L’attribut src va fonctionner de la même manière que l’attribut href pour les liens. Ainsi, si vous enregistrez votre image dans un dossier différent de votre page HTML, pensez bien à en tenir compte dans la valeur donnée à src. Comme vous pouvez le voir, notre image s’affiche bien à sa taille d’origine, c’est-à-dire 150*150 pixels pour moi. Dans l’absolu, on essaiera de redimensionner l’image à priori (avant téléchargement sur serveur) pour éviter de consommer des ressources serveurs inutilement. En effet, une image plus grosse de base va demander plus de ressources et de temps à charger car celle-ci va être plus lourde. Pour redimensionner une image à posteriori, nous avons deux façons de faire : soit en utilisant le CSS, soit en ajoutant des attributs width et height dans notre élément img en HTML. Bien évidemment, nous préférerons toujours pour des raisons sémantiques et de maintenabilité du code dans la mesure du possible effectuer ces opérations en CSS. Cependant, dans certaines situations particulières, nous serons obligés de le faire en HTML et il est donc bon de savoir le faire."
      },
      {
        "type": "h",
        "text": "Insérer des images provenant d’autres sites en HTML"
      },
      {
        "type": "p",
        "text": "Comme je vous l’ai précisé, on peut aussi préciser une adresse absolue comme valeur pour notre attribut src. Par exemple, si je souhaite afficher une image provenant d’un autre site, j’utiliserai évidemment une adresse absolue, c’est-à-dire que j’indiquerai l’URL complète de la ressource image que je souhaite afficher en valeur de mon attribut src. Vous pouvez essayer avec n’importe quelle image sur le web, cela fonctionnera. Faites cependant attention à bien récupérer l’URL complète de l’image ainsi qu’aux droits d’auteur ! Notez également qu’il est généralement déconseillé d’utiliser des images provenant d’autres sites car si ces sites les suppriment, elles ne s’afficheront plus non plus sur le vôtre."
      },
      {
        "type": "h",
        "text": "Redimensionner une image en HTML"
      },
      {
        "type": "p",
        "text": "On va pouvoir ajouter des attributs facultatifs pour modifier l’affichage de la plupart des éléments HTML. Cependant, répétons-le, ce n’est jamais la façon recommandée de faire les choses pour des raisons de séparation de rôle des langages (raisons de sémantique) et de maintenabilité du code. Le HTML est un langage de balisage qui ne doit normalement servir qu’à indiquer l’identité des différents contenus d’une page. Pour mettre en forme ces contenus, il faut utiliser dans la mesure du possible le CSS qui est là pour ça. Cependant, dans certaines situations, nous n’allons pas avoir accès au CSS ou il va être beaucoup plus compliqué d’appliquer des styles à nos images en CSS qu’en HTML. Dans ces cas-là, nous allons déjà pouvoir utiliser les attributs width (« largeur ») et height (« hauteur ») au sein de notre élément img pour modifier la largeur et la hauteur de l’image. Ces attributs peuvent prendre des valeurs absolues (en px généralement) ou relatives (en % dans la majorité des cas) ou des mots clefs comme auto. Généralement, on ne modifiera que l’une des deux dimensions de l’image (largeur ou hauteur, mais plutôt la largeur car modifier la hauteur peut rapidement poser des problèmes d’ergonomie) afin que l’image se redimensionne d’elle-même et conserve ses proportions. On pourra éventuellement préciser la valeur auto pour la deuxième dimension si on a peur qu’une taille ait déjà été définie quelque part dans le code. Notez que dans le cas où on indique des valeurs en pourcentage, le pourcentage donné représente l’espace que l’image doit prendre par rapport à la taille de son conteneur (son élément parent le plus proche, c’est-à-dire l’élément dans lequel il est directement inclus dans le code) et n’est pas un pourcentage de la taille de base de l’image !"
      },
      {
        "type": "h",
        "text": "Mettre en forme nos images en CSS"
      },
      {
        "type": "p",
        "text": "Nous utiliserons de préférence le CSS pour mettre en forme nos images, que ce soit pour les redimensionner ou pour les afficher d’une façon ou d’une autre ou à un endroit ou à un autre dans nos pages."
      },
      {
        "type": "h",
        "text": "Redimensionner une image en CSS"
      },
      {
        "type": "p",
        "text": "Pour redimensionner une image en CSS, nous allons utiliser les propriétés width (pour la largeur) et height (pour la hauteur). Ici, nous ne préciserons généralement que la valeur de l’une de ces deux propriétés. En procédant comme cela, l’autre dimension sera calculée automatiquement afin de ne pas casser le rapport largeur/hauteur de base de l’image. Ici, je me contente d’insérer 4 fois la même image, ce qui est tout à fait autorisé puis je redimensionne mes images en CSS avec la propriété width, tout simplement. Notez que des espaces se créent automatiquement entre chacune des images, à droite et en dessous. Cela est dû au fait que nos images sont des éléments de type inline. L’espace à droite provient de mon code : les éléments inline vont conserver une espace s’il y en a au moins une dans le code. C’est le cas dans mon exemple puisque je suis allé à la ligne dans mon code à chaque nouvelle déclaration d’un élément img. Pour annuler cela, on peut par exemple faire flotter nos images ou les déclarer à la suite dans le code. L’espace en bas provient du fait que les images sont alignées par défaut sur la baseline, c’est-à-dire sur une ligne imaginaire sur laquelle sont alignés les différents caractères de texte. Les navigateurs ajoutent toujours par défaut une espace sous la baseline pour laisser de la place pour les caractères qui passent dessous comme les « g », « p » ou « y » par exemple. Pour annuler cela, on peut utiliser la propriété vertical-align et définir un autre type d’alignement vertical."
      },
      {
        "type": "h",
        "text": "Définir le type d’affichage et le positionnement des images en"
      },
      {
        "type": "p",
        "text": "CSS La plupart des navigateurs appliquent par défaut un display : inline aux images même si certains d’entre eux préfèrent appliquer un display : inline-block. Ces deux types d’affichage font que nos images vont venir se positionner en ligne et se placer à côté d’autres contenus si elles en ont la place. Nous avons différents moyens pour annuler ce comportement et faire que nos images s’affichent sur leur propre ligne. Les deux solutions les plus évidentes vont être soit d’enfermer chaque image à l’intérieur d’un élément de type block comme un élément p ou div par exemple ou d’appliquer directement un display : block en CSS à nos images."
      },
      {
        "type": "h",
        "text": "Poids des images et performances"
      },
      {
        "type": "p",
        "text": "Au début de cette leçon, j’ai beaucoup parlé de « poids des images ». Toute image possède un poids généralement exprimé de kilo-octets. Plus une image est lourde, plus elle va demander de ressources de la part du serveur et du navigateur pour être chargée. En effet, lors de la mise en ligne de votre site web, vous allez louer un espace serveur chez un hébergeur afin d’y envoyer (« héberger ») toute l’architecture de votre site. Le problème est que vous disposez d’un espace serveur et d’un débit limités. Il vous faudra donc déjà faire attention à ne pas le saturer avec des images inutilement lourdes. Ensuite, selon la qualité de la connexion de vos utilisateurs et du navigateur utilisé, certaines images, si elles sont trop lourdes, risquent de mettre longtemps à s’afficher complètement. Cela aura un effet négatif sur votre site puisque des visiteurs vont le quitter plutôt que de patienter. Cette problématique est véritablement à considérer aujourd’hui avec l’essor de l’Internet mobile car les mobiles disposent de moins de puissance que les ordinateurs et également d’une connexion plus lente. Pour conserver des poids d’images minimaux tout en vous assurant des images d’une qualité convenable, on pensera déjà à les enregistrer au bon format et également à les recadrer à la bonne taille avant de les envoyer sur votre serveur. Ainsi, elles consommeront moins de ressources lors de leur affichage."
      },
      {
        "type": "h",
        "text": "Media et sémantique : les éléments figure et figcaption"
      },
      {
        "type": "p",
        "text": "Les éléments figure et figcaption vont nous aider à marquer sémantiquement du contenu média comme des images, de l’audio ou des vidéos. En effet, il est très difficile pour un navigateur de savoir « de quoi parle » ou « ce que représente » votre image, votre fichier audio ou vidéo sans plus de détail. On va utiliser l’élément HTML figure pour indiquer qu’une image, une piste audio ou vidéo n’est pas strictement décorative, mais sert à la compréhension générale de notre page web. On n’utilisera donc pas cet élément si nos contenus ne sont là que pour habiller la page. Notez qu’un élément figure peut englober plusieurs images ou d’autres types de contenus média (audio, vidéo, etc.). On va ensuite utiliser l’élément figcaption à l’intérieur de figure pour accoler une légende au contenu de notre élément figure. Cette légende va être utile pour les personnes souffrant de déficiences et qui ne peuvent pas comprendre nos médias ainsi que pour les moteurs de recherche et navigateurs. Par défaut, la légende va s’afficher sous les médias. Nous allons bien évidemment pouvoir mettre en forme les éléments figure et figcaption en CSS si on le souhaite."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\"><title>Images en HTML</title>\n  </head>\n  <body>\n\n    <!-- Balise img (auto-fermante) -->\n    <!-- src : source de l'image (URL relative ou absolue) -->\n    <!-- alt : texte alternatif (OBLIGATOIRE pour l'accessibilité et le SEO) -->\n    <img src=\"images/photo.jpg\" alt=\"Photo d'un paysage de montagne\">\n\n    <!-- Image avec dimensions (pour éviter le layout shift) -->\n    <img src=\"logo.png\" alt=\"Logo de l'entreprise\" width=\"200\" height=\"100\">\n\n    <!-- Image avec lien -->\n    <a href=\"https://exemple.fr\">\n      <img src=\"logo.png\" alt=\"Accueil - Logo\">\n    </a>\n\n    <!-- Balise figure et figcaption pour les images avec légende -->\n    <figure>\n      <img src=\"images/graphique.png\" alt=\"Graphique des ventes 2024\">\n      <figcaption>Fig. 1 - Évolution des ventes en 2024</figcaption>\n    </figure>\n\n    <!-- Images responsives avec srcset (différentes résolutions) -->\n    <img\n      src=\"image-400.jpg\"\n      srcset=\"image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w\"\n      sizes=\"(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px\"\n      alt=\"Image responsive\">\n\n    <!-- Formats modernes avec <picture> (WebP avec fallback) -->\n    <picture>\n      <source srcset=\"image.webp\" type=\"image/webp\">\n      <source srcset=\"image.avif\" type=\"image/avif\">\n      <img src=\"image.jpg\" alt=\"Image avec format moderne\">\n    </picture>\n\n    <!-- Chargement différé (lazy loading) -->\n    <img src=\"image-en-bas.jpg\" alt=\"Image lazy loaded\" loading=\"lazy\">\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-435.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-436.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-437.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-438.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-439.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-440.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-441.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-442.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-443.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-444.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-445.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-446.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-447.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-448.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-449.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-450.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-451.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "45-ins-rer-de-l-audio-en-html",
    "title": "Insérer de l’audio en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons pouvoir intégrer un contenu audio dans un document avec l’élément audio. Dans cette nouvelle leçon, nous allons apprendre à l’utiliser et découvrir les subtilités des formats de codec audio."
      },
      {
        "type": "h",
        "text": "Les formats d’audio et leur support"
      },
      {
        "type": "p",
        "text": "Il existe différents formats de fichiers audio de la même façon qu’on a pu voir précédemment qu’il existait différents formats d’image. Jusqu’à très récemment, toutefois, l’insertion de fichiers audio était beaucoup plus complexe que l’insertion d’images pour la raison qu’aucun format de fichier audio n’était universellement reconnu : chaque navigateur possédait sa liste de formats audio qu’il était capable de lire. La raison ici était une question de brevets déposés sur des éléments servant à constituer les différents formats audio ou sur les formats audio en soi, comme le brevet sur le MP3 effectif jusqu’en 2017. Ainsi, les navigateurs étaient soit obligés de posséder des licences soit de payer des royalties pour pouvoir utiliser tel ou tel format audio. La situation s’est récemment beaucoup améliorée sur ce point-là et aujourd’hui certains formats audio sont bien reconnus par la plupart des navigateurs. Cependant, comme certains problèmes peuvent toujours subsister, je vais vous montrer dans ce cours la méthode « historique » d’insertion d’audio qui consiste à contourner le problème en proposant plusieurs fichiers audio source de différents formats afin que chaque navigateur puisse choisir celui qui lui convient. Les formats audio les plus courants généralement utilisés vont être les suivants :"
      },
      {
        "type": "list",
        "items": [
          "Le format audio Vorbis du conteneur WebM audio/webm ;",
          "Le format audio Vorbis du conteneur Ogg audio/ogg ;",
          "Le format audio MP3 audio/mpeg ;",
          "Le format audio PCM du conteneur WAVE audio/wave."
        ]
      },
      {
        "type": "p",
        "text": "Pour information, voici les supports de ces différents formats par les navigateurs les plus utilisés dans leur version la plus récente : Navigateur Vorbis MP3 PCM (WAVE)"
      },
      {
        "type": "h",
        "text": "Chrome                       Supporté               Supporté         Supporté"
      },
      {
        "type": "h",
        "text": "Safari                       Non supporté           Supporté         Supporté"
      },
      {
        "type": "h",
        "text": "Firefox                      Supporté               Supporté         Supporté"
      },
      {
        "type": "h",
        "text": "Edge                         Supporté               Supporté         Supporté"
      },
      {
        "type": "p",
        "text": "Navigateur Vorbis MP3 PCM (WAVE)"
      },
      {
        "type": "h",
        "text": "Opera                        Supporté               Supporté        Supporté"
      },
      {
        "type": "h",
        "text": "Safari (iOS)                 Non supporté           Supporté        Supporté"
      },
      {
        "type": "h",
        "text": "Android                      Supporté               Supporté        Supporté"
      },
      {
        "type": "h",
        "text": "Chrome (Android)             Supporté               Supporté        Supporté"
      },
      {
        "type": "h",
        "text": "Insérer de l’audio dans un fichier HTML"
      },
      {
        "type": "p",
        "text": "Pour pouvoir insérer de l’audio dans nos pages, nous allons déjà devoir nous munir d’une piste audio qui devra être enregistrée sous différents formats. Pour ma part, je vais utiliser un fichier audio qui s’appelle « perfect-time » et qui a été enregistré sous trois formats différents : mp3, ogg et wav. Munissez-vous de fichiers audio si vous voulez tester les codes suivants et placez ces fichiers dans le même dossier que vos fichiers de code. La façon la plus simple d’insérer un fichier audio dans un fichier va être d’utiliser un élément audio avec deux attributs src et controls. L’attribut src va indiquer le chemin vers la ressource à intégrer tandis que l’attribut controls va permettre de faire apparaitre les contrôles fournis par le navigateur (notamment un bouton de lecture / arrêt, un bouton pour choisir le niveau sonore, etc.). Nous allons également renseigner un texte dans l’élément audio qui pourra être affiché dans certains anciennes versions de navigateurs dans le cas où le navigateur ne pourrait pas lire le fichier audio fourni. Le problème en utilisant l’élément audio de cette manière est qu’on ne va pas pouvoir fournir de format audio alternatif au cas où le navigateur ne puisse pas lire le format fourni. Nous utiliserons donc généralement plutôt l’élément audio de concert avec des éléments source qui vont nous permettre d’intégrer différents fichiers parmi lesquels le navigateur fera son choix. Dans l’élément source, nous allons préciser l’emplacement du fichier audio dans un attribut src et allons également facultativement pouvoir ajouter un attribut type qui va nous permettre d’indiquer rapidement au navigateur le type de codec audio utilisé dans notre fichier pour que le navigateur sache immédiatement s’il peut le lire ou pas sans même avoir à le tester. Cela optimisera les performances de notre page. Ici, le navigateur va s’arrêter dès qu’il va rencontrer un format audio qu’il sait lire et ignorer les autres formats fournis en dessous. Cette technique permet de pouvoir lire un fichier audio sur (quasiment) tous les navigateurs."
      },
      {
        "type": "h",
        "text": "Les attributs de l’élément audio"
      },
      {
        "type": "p",
        "text": "En plus de l’attribut controls qui est obligatoire pour des raisons évidentes d’ergonomie et d’accessibilité, nous allons pouvoir indiquer d’autres attributs facultatifs à notre élément audio qui vont nous permettre de mieux contrôler comment le fichier audio doit être lu. Ces attributs sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "L’attribut preload permet d’indiquer au navigateur si le fichier doit être préchargé"
        ]
      },
      {
        "type": "p",
        "text": "ou pas. On va pouvoir lui passer l’une des valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "none : le fichier audio ne sera pas préchargé ;",
          "metadata : seules les métadonnées seront préchargées ;",
          "auto : le fichier sera préchargé.",
          "L’attribut autoplay va nous permettre de lancer automatiquement la lecture du"
        ]
      },
      {
        "type": "p",
        "text": "fichier audio dès qu’il sera chargé. Il suffit de le renseigner (même sans valeur explicite) pour que le fichier audio se lance automatiquement. Notez que certains navigateurs (dont Chrome) peuvent bloquer cet attribut car celui-ci est jugé mauvais pour vos visiteurs."
      },
      {
        "type": "list",
        "items": [
          "L’attribut loop permet de lire le fichier audio en boucle. Il suffit donc de le renseigner"
        ]
      },
      {
        "type": "p",
        "text": "(même sans valeur explicite) pour que le fichier soit lu en boucle."
      },
      {
        "type": "list",
        "items": [
          "L’attribut muted sert à définir si le son doit être initialement coupé. Il suffit de le"
        ]
      },
      {
        "type": "p",
        "text": "renseigner (même sans valeur explicite) pour couper le son."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Audio en HTML</title></head>\n  <body>\n\n    <!-- Balise audio simple -->\n    <audio src=\"musique.mp3\" controls>\n      Votre navigateur ne supporte pas l'audio HTML5.\n    </audio>\n\n    <!-- Avec plusieurs sources (compatibilité navigateurs) -->\n    <audio controls>\n      <source src=\"musique.ogg\" type=\"audio/ogg\">\n      <source src=\"musique.mp3\" type=\"audio/mpeg\">\n      <source src=\"musique.wav\" type=\"audio/wav\">\n      Votre navigateur ne supporte pas l'audio HTML5.\n    </audio>\n\n    <!-- Attributs de l'élément audio -->\n    <audio\n      controls          <!-- Affiche les contrôles de lecture -->\n      autoplay          <!-- Lecture automatique (souvent bloquée par les navigateurs) -->\n      loop              <!-- Lecture en boucle -->\n      muted             <!-- Muet au démarrage -->\n      preload=\"auto\"    <!-- auto|metadata|none - préchargement -->\n      src=\"podcast.mp3\">\n    </audio>\n\n    <!-- Formats audio courants -->\n    <!-- MP3 : format universel, bon support -->\n    <!-- OGG : open source, bon support -->\n    <!-- WAV : non compressé, haute qualité -->\n    <!-- AAC : meilleure compression que MP3 -->\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-452.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-453.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-454.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-455.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-456.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-457.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "46-ins-rer-des-vid-os-en-html",
    "title": "Insérer des vidéos en HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons pouvoir intégrer un contenu vidéo dans un document avec l’élément video. Cet élément fonctionne de manière analogue à l’élément audio vu précédemment."
      },
      {
        "type": "h",
        "text": "Les formats vidéo et leur support"
      },
      {
        "type": "p",
        "text": "Un fichier vidéo est relativement plus complexe qu’un simple fichier audio puisqu’une vidéo est va être composée à la fois d’une piste audio et d’une piste vidéo. Ces deux pistes vont être de formats différents et vont être regroupées dans un conteneur qui va se charger de les faire fonctionner ensemble. En termes de support par les navigateurs, nous allons donc nous heurter aux mêmes problèmes qu’on a déjà vu avec l’intégration d’audio et notamment aux problèmes de brevet cette fois-ci non seulement sur les codecs des pistes audio mais également sur ceux des pistes vidéo et des conteneurs. Comme pour l’élément audio, nous indiquerons donc généralement plusieurs formats de conteneurs dans notre élément video afin de s’assurer que la vidéo puisse être lue sur la plupart des navigateurs. Les conteneurs les plus utilisés aujourd’hui sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "WebM : contient de l’audio Ogg Vorbis avec de la vidéo VP8/VP9 ;",
          "MP4 : contient de l’audio AAC ou MP3 en audio avec de la vidéo H.264."
        ]
      },
      {
        "type": "p",
        "text": "Notez par ailleurs que le MP4-HEVC utilisant le format vidéo H.265, annoncé pour la première fois en 2013, est censé succéder au MP4 utilisant de la vidéo H.264. Le format AV1, annoncé en 2018 est lui censé succéder au WebM et concurrencer le HEVC. Ces deux formats n’ont cependant que peu de support par les navigateurs aujourd’hui : le HEVC n’est supporté que par Safari tandis que l’AV1 n’est supporté que par les dernières versions de Chrome (desktop). Pour information, voici les supports de ces différents formats par les navigateurs les plus utilisés dans leur version la plus récente :"
      },
      {
        "type": "h",
        "text": "Navigateur                      MP4/H.264            WebM"
      },
      {
        "type": "h",
        "text": "Chrome                          Supporté             Supporté"
      },
      {
        "type": "h",
        "text": "Safari                          Supporté             Non supporté"
      },
      {
        "type": "h",
        "text": "Firefox                         Supporté             Supporté"
      },
      {
        "type": "h",
        "text": "Edge                            Supporté             Supporté partiellement"
      },
      {
        "type": "h",
        "text": "Opera                           Supporté             Supporté"
      },
      {
        "type": "h",
        "text": "Navigateur                       MP4/H.264              WebM"
      },
      {
        "type": "h",
        "text": "Safari (iOS)                     Supporté               Non supporté"
      },
      {
        "type": "h",
        "text": "Android                          Supporté               Supporté"
      },
      {
        "type": "h",
        "text": "Chrome (Android)                 Supporté               Supporté"
      },
      {
        "type": "h",
        "text": "Insérer de la vidéo dans un fichier HTML"
      },
      {
        "type": "p",
        "text": "Pour pouvoir insérer de la vidéo dans nos pages, nous allons déjà devoir nous munir d’un fichier vidéo disponible sous différents formats. Ici, je vais utiliser un fichier vidéo qui s’appelle « tortue » qui est originellement un fichier MP4 et que j’ai converti également en WebM. Pour reproduire les codes ci-dessous, munissez-vous de vos propres fichiers vidéo et placez ces fichiers dans le même dossier que vos fichiers de code. La façon la plus simple d’insérer un fichier vidéo dans une page HTML va être d’utiliser un élément video avec deux attributs src et controls, exactement de la même façon que pour l’élément audio. L’attribut src va indiquer le chemin vers la ressource à intégrer tandis que l’attribut controls va permettre de faire apparaitre les contrôles fournis par le navigateur (notamment un bouton de lecture / arrêt, un bouton pour choisir le niveau sonore, etc.). Nous allons également renseigner un texte dans l’élément video qui pourra être affiché dans certains anciennes versions de navigateurs dans le cas où le navigateur ne pourrait pas lire le fichier vidéo fourni. En pratique, toutefois, cette façon de faire n’est pas optimale puisqu’elle ne nous permet pas de proposer plusieurs formats de fichiers différents pour les navigateurs. Nous utiliserons donc généralement plutôt l’élément video de concert avec des éléments source qui vont nous permettre d’intégrer différents formats de fichier parmi lesquels le navigateur fera son choix. Dans l’élément source, nous allons devoir inclure un attribut src qui va nous permettre d’indiquer l’emplacement du fichier vidéo. Nous allons également pouvoir, de manière facultative, ajouter un attribut type qui va nous permettre d’indiquer rapidement au navigateur le type de codecs utilisé dans notre fichier pour que le navigateur sache immédiatement s’il peut le lire ou pas sans même avoir à le tester. Cela optimisera les performances de notre page. Ici, le navigateur va s’arrêter dès qu’il va rencontrer un format qu’il sait lire et ignorer les autres formats fournis en dessous."
      },
      {
        "type": "h",
        "text": "Les attributs de l’élément video"
      },
      {
        "type": "p",
        "text": "L’élément video possède un attribut strictement obligatoire qui est l’attribut controls. Cet attribut permet d’afficher les contrôles de base pour l’utilisateur comme la lecture, la pause, le choix du volume, etc. Les différentes options de contrôle vont être fournies par le navigateur. En plus de cet attribut controls, on va pouvoir passer d’autres attributs facultatifs à l’élément video afin de contrôler comment le fichier doit être lu et notamment :"
      },
      {
        "type": "list",
        "items": [
          "L’attribut preload permet d’indiquer au navigateur si le fichier doit être"
        ]
      },
      {
        "type": "p",
        "text": "préchargé ou pas. On va pouvoir lui passer l’une des valeurs suivantes :"
      },
      {
        "type": "list",
        "items": [
          "none : le fichier vidéo ne sera pas préchargé ;",
          "metadata : seules les métadonnées seront préchargées ;",
          "auto : le fichier sera préchargé.",
          "L’attribut autoplay va nous permettre de lancer automatiquement la lecture du"
        ]
      },
      {
        "type": "p",
        "text": "fichier vidéo dès qu’il sera chargé. Il suffit de le renseigner (même sans valeur explicite) pour que le fichier vidéo se lance automatiquement. Notez que certains navigateurs (dont Chrome) peuvent bloquer cet attribut car celui-ci est jugé mauvais pour vos visiteurs."
      },
      {
        "type": "list",
        "items": [
          "L’attribut loop permet de lire le fichier vidéo en boucle. Il suffit donc de le"
        ]
      },
      {
        "type": "p",
        "text": "renseigner (même sans valeur explicite) pour que le fichier soit lu en boucle."
      },
      {
        "type": "list",
        "items": [
          "L’attribut muted sert à définir si le son doit être initialement coupé. Il suffit de le"
        ]
      },
      {
        "type": "p",
        "text": "renseigner (même sans valeur explicite) pour couper le son."
      },
      {
        "type": "list",
        "items": [
          "L’attribut poster va nous permettre de renseigner l’adresse d’une image qui"
        ]
      },
      {
        "type": "p",
        "text": "devra être utilisée comme image d’illustration de fond de la vidéo avant que celle-ci ne soit chargée et lancée. En plus de ces attributs, notez que nous allons pouvoir gérer la taille de nos vidéos grâce aux attributs HTML width et height ou idéalement avec les propriétés CSS du même nom. Pour des raisons évidentes de ratio, nous ne préciserons toujours que l’une de ces deux propriétés (généralement width) afin que la deuxième dimension soit calculée automatiquement."
      },
      {
        "type": "h",
        "text": "Ajouter des sous-titres à une vidéo"
      },
      {
        "type": "p",
        "text": "L’importance de l’ajout de sous-titres Il est toujours très important lorsqu’on code en HTML de penser en termes d’accessibilité. L’idée ici est que votre code devrait toujours être accessible à tous, c’est-à-dire que vos pages devraient toujours pouvoir être comprises d’une façon ou d’une autre par chacun de vos visiteurs. C’est là tout l’intérêt d’ajouter des descriptions sur nos images avec l’attribut alt par exemple. C’est la même logique qui se cache derrière l’ajout de sous-titres sur nos vidéos. Pour ajouter des sous-titres à nos vidéos, nous allons déjà devoir les écrire dans un fichier séparé en respectant une certaine syntaxe. Le fichier sera enregistré sous le format WebVTT pour « Web Video Text Tracks ». Nous allons ensuite pouvoir intégrer ces sous titres dans notre vidéo en utilisant l’élément track."
      },
      {
        "type": "h",
        "text": "L’écriture des sous-titres au format WebVTT"
      },
      {
        "type": "p",
        "text": "Nous allons écrire les sous-titres pour notre vidéo dans un fichier séparé au format WebVTT. Pour faire cela, nous pouvons utiliser notre éditeur ou un programme de bloc note et enregistrer le fichier avec l’extension .vtt. Un fichier WebVTT doit respecter une certaine syntaxe pour pouvoir être lu convenablement :"
      },
      {
        "type": "list",
        "items": [
          "Tout fichier WebVTT doit commencer par le mot WEBVTT, qui peut être"
        ]
      },
      {
        "type": "p",
        "text": "éventuellement suivi sur la même ligne par un texte d’en-tête ;"
      },
      {
        "type": "list",
        "items": [
          "La ligne sous la mention WEBVTT doit être vide ;",
          "Ensuite, nous allons placer des indications de temps sous la forme 00:01.000 --"
        ]
      },
      {
        "type": "p",
        "text": ">00:05.000suivies à chaque fois sur la ligne du dessous du sous-titre à afficher durant la période décrite. Voici à quoi va pouvoir ressembler notre fichier :"
      },
      {
        "type": "h",
        "text": "L’intégration des sous-titres avec l’élément track et ses attributs"
      },
      {
        "type": "p",
        "text": "Une fois que nous avons écrit nos sous-titres et qu’on les a enregistrés au bon format, il va falloir les intégrer dans nos vidéos. Pour cela, nous allons utiliser un élément track que nous allons placer à l’intérieur de notre élément video. Cet élément track va devoir être obligatoirement accompagné d’un attribut src qui va nous permettre d’indiquer l’adresse du fichier contenant les sous titres ainsi que d’un attribut srclang qui va nous permettre de préciser la langue utilisée (fr pour français, en pour anglais, es pour espagnol, etc.). Nous allons également pouvoir lui passer les attributs facultatifs suivants :"
      },
      {
        "type": "list",
        "items": [
          "default : Indique qu’on souhaite utiliser ce fichier de sous-titres par défaut (utile"
        ]
      },
      {
        "type": "p",
        "text": "dans le cas où on dispose de plusieurs fichiers de sous-titrage pour différentes langues) ;"
      },
      {
        "type": "list",
        "items": [
          "kind : Cet attribut nous permet de préciser la nature du texte ajouté à la vidéo. Sa"
        ]
      },
      {
        "type": "p",
        "text": "valeur par défaut est subtitles (« sous-titres ») mais si une mauvaise valeur est renseignée c’est la valeur metadata qui sera utilisée. Les valeurs possibles sont :"
      },
      {
        "type": "list",
        "items": [
          "subtitles : Le texte passé correspond à des sous-titres. Les sous-titres"
        ]
      },
      {
        "type": "p",
        "text": "sont pertinents pour des utilisateurs qui ne peuvent pas comprendre le contenu (cas des utilisateurs qui regardent des vidéos dans une autre langue que la leur) et ont également pour rôle de donner des informations contextuelles ;"
      },
      {
        "type": "list",
        "items": [
          "captions : Le texte est une traduction de l’audio de la vidéo. Le"
        ]
      },
      {
        "type": "p",
        "text": "type captions est pertinent pour des malentendants ou lorsque le son est désactivé par exemple ;"
      },
      {
        "type": "list",
        "items": [
          "descriptions : Le texte est une description du contenu vidéo. Ce type est"
        ]
      },
      {
        "type": "p",
        "text": "adapté pour les personnes malvoyantes ;"
      },
      {
        "type": "list",
        "items": [
          "chapters : Ce type représente les titres des chapitres lorsque l’utilisateur"
        ]
      },
      {
        "type": "p",
        "text": "navigue au sein du media ;"
      },
      {
        "type": "list",
        "items": [
          "metadata : Le texte sera utilisé par des scripts mais sera invisible pour"
        ]
      },
      {
        "type": "p",
        "text": "l’utilisateur."
      },
      {
        "type": "list",
        "items": [
          "label : Permet d’indiquer la langue de chaque sous-titres comme « Français », «"
        ]
      },
      {
        "type": "p",
        "text": "English » ou « Español. La liste de langues sera visible pour l’utilisateur et lui permettra de choisir le sous-titrage de son choix. Notez que dans le cas où nous avons plusieurs langues de sous-titrage à proposer, il faudra enregistrer chaque sous-titres dans un fichier .vtt différent et utiliser un nouvel élément track pour chacun d’entre eux. Nous pouvons également proposer plusieurs fichiers de texte de type (kind) différents dans un même langage. Il ne nous reste plus qu’à définir les styles de notre texte en ciblant l’élément track en CSS. Notez ici que certains navigateurs ne vont pas afficher les sous-titres pour des fichiers en local (vs en production ou sur serveur). Cela va être le cas pour Chrome notamment. La capture d’écran ci-dessus a donc été faite avec Safari qui n’a pas cette limitation."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Vidéo en HTML</title></head>\n  <body>\n\n    <!-- Balise video avec plusieurs sources -->\n    <video controls width=\"640\" height=\"360\">\n      <source src=\"video.mp4\" type=\"video/mp4\">\n      <source src=\"video.webm\" type=\"video/webm\">\n      <source src=\"video.ogv\" type=\"video/ogg\">\n      Votre navigateur ne supporte pas la vidéo HTML5.\n    </video>\n\n    <!-- Vidéo avec toutes les options -->\n    <video\n      src=\"video.mp4\"\n      controls                 <!-- Contrôles de lecture -->\n      autoplay                 <!-- Lecture auto (nécessite muted) -->\n      muted                    <!-- Muet (requis pour autoplay) -->\n      loop                     <!-- Lecture en boucle -->\n      poster=\"miniature.jpg\"   <!-- Image affichée avant lecture -->\n      preload=\"metadata\"       <!-- Précharger seulement les métadonnées -->\n      width=\"800\"\n      height=\"450\">\n    </video>\n\n    <!-- Sous-titres avec track -->\n    <video controls src=\"video.mp4\">\n      <track\n        kind=\"subtitles\"        <!-- subtitles, captions, chapters, metadata -->\n        src=\"sous-titres-fr.vtt\"\n        srclang=\"fr\"\n        label=\"Français\"\n        default>                <!-- Activé par défaut -->\n      <track kind=\"subtitles\" src=\"sous-titres-en.vtt\" srclang=\"en\" label=\"English\">\n    </video>\n\n    <!-- Vidéo YouTube (via iframe) -->\n    <iframe\n      width=\"560\" height=\"315\"\n      src=\"https://www.youtube.com/embed/ID_VIDEO\"\n      title=\"Titre de la vidéo\"\n      allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope\"\n      allowfullscreen>\n    </iframe>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-458.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-459.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-460.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-461.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-462.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-463.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-464.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-465.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-466.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-467.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "47-l-l-ment-iframe",
    "title": "L’élément iframe",
    "blocks": [
      {
        "type": "p",
        "text": "Nous savons désormais comment ajouter des images, de l’audio ou des vidéos dans nos pages en intégrant nos propres médias. Il nous reste donc une chose à voir : comment intégrer une autre page web dans un fichier HTML. L’élément iframe, qui est l’objet de cette leçon, va nous permettre de faire cela et d’intégrer, entre autres, des vidéos YouTube directement dans nos pages."
      },
      {
        "type": "h",
        "text": "L’élément iframe et ses attributs"
      },
      {
        "type": "p",
        "text": "L’élément iframe va nous permettre d’intégrer un fichier web entier dans un autre. Nous allons notamment utiliser cet élément pour intégrer des vidéos YouTube dans nos pages web ou des cartes Google Maps. Pourquoi intégrer des contenus provenant d’autres sites web plutôt qu’héberger nos propres contenus ? Il y a deux raisons principales. La première concerne l’économie des ressources : en hébergeant une vidéo sur YouTube, par exemple, et en l’intégrant après sur notre site on ne va pas utiliser notre espace serveur ni notre bande passante mais ceux de YouTube, ce qui peut se transformer en des économies substantielles de notre côté. La deuxième raison est purement technique : il est souvent plus facile et sûr d’utiliser les services créés par d’autres entités reconnues plutôt que de créer nous-mêmes ces choses. Cela est le cas pour les cartes Google Maps par exemple : il est hors de question de se procurer une carte du monde détaillée et de recréer l’outil de notre côté pour afficher une carte quand on peut utiliser celles de Google. De même pour l’intégration de vidéos YouTube : en passant par YouTube, on n’a pas à se soucier de tous les problèmes de compatibilité des différents codecs avec les différentes versions des navigateurs puisque YouTube se charge de faire ce travail de son côté lorsqu’on télécharge une vidéo sur la plateforme. Les attributs généralement précisés lors de l’utilisation de l’élément iframe sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "src : Cet attribut va nous permettre d’indiquer l’adresse du document à intégrer",
          "width et height : Ces attributs permettent de définir les dimensions de notre"
        ]
      },
      {
        "type": "p",
        "text": "élément iframe. On pourra les utiliser dans le cas où nous ne pouvons pas modifier les dimensions de l’iframe en CSS."
      },
      {
        "type": "list",
        "items": [
          "allow : Cet attribut permet de définir une politique de fonctionnalité pour notre"
        ]
      },
      {
        "type": "p",
        "text": "iframe. Le terme « politique de fonctionnalité » désigne le fait de choisir quelles fonctionnalités de l’iframe activer ou désactiver. Cet attribut est utilisé pour renforcer la sécurité du code."
      },
      {
        "type": "list",
        "items": [
          "sandbox : Cet attribut est relativement récent. Il nous permet de limiter les"
        ]
      },
      {
        "type": "p",
        "text": "permissions de notre iframe c’est-à-dire de limiter ses possibilités. Cet attribut est utilisé pour renforcer la sécurité de notre code."
      },
      {
        "type": "h",
        "text": "Intégrer une vidéo YouTube avec l’élément iframe"
      },
      {
        "type": "p",
        "text": "Voyons immédiatement comment utiliser l’élément iframe en pratique en intégrant une vidéo YouTube dans notre page. Pour cela, je vais utiliser l’une de mes toutes premières vidéos (disponibles sur ma chaine YouTube Pierre Giraud). Ici, nous allons cliquer sur le bouton « partager » sous la vidéo…"
      },
      {
        "type": "h",
        "text": "…puis sur « intégrer » (« embed » en anglais) …"
      },
      {
        "type": "p",
        "text": "… et nous allons finalement copier le code d’intégration qui est bien un élément iframe Nous n’avons ensuite plus qu’à coller ce code dans notre page HTML pour intégrer notre vidéo ! iframes et APIs : le cas de l’intégration de cartes Google Maps L’intégration de cartes Google Maps va être plus complexe ou tout au moins plus longue que celles de vidéos YouTube. Cela est dû au fait que l’API Google Maps est plus restrictive que celle de YouTube. Une API « Application Programming Interface » ou « Interface de Programmation Applicative » en français est une interface généralement complexe qui va permettre à différentes applications de communiquer entre elles et de s’échanger des données. L’intégration d’iframes va souvent de pair avec l’utilisation d’API. Pour nous, vous pouvez considérer qu’une API nous permet d’accéder à une application sans avoir à se soucier des mécanismes d’arrière-plan permettant de la faire fonctionner. D’un autre côté, les API servent également à limiter les intégrations « sauvages » en demandant à l’utilisateur de s’enregistrer et de générer une clef pour pouvoir utiliser une application en question sur son site. Cela va être le cas avec l’intégration de cartes Google Maps : nous allons devoir passer une clef de sécurité (API Key ou API Token) en attribut de notre iframe pour pouvoir s’identifier auprès de Google et pouvoir utiliser le service de cartes. Pour obtenir une clef d’API, il suffit généralement de s’inscrire sur le site proposant l’API. Dans le cas de Google Maps, cependant, cela n’est pas suffisant puisque l’utilisation de l’API Google Maps est payante depuis cette année. Il faudra donc également être prêt à payer pour intégrer des cartes Google Maps. Pour cette raison, je ne vous présenterai pas comment intégrer des cartes Google Maps dans ce cours mais cet exemple me semblait intéressant car il m’a permis d’introduire le concept d’API et également de vous expliquer les différentes contraintes auxquelles nous pouvons être soumis en tant que développeurs. iframe, sécurité et performance Il convient de faire preuve de prudence lors de l’utilisation d’un élément iframe comme pour tout autre élément faisant appel à des données externes. En effet, ce type d’élément peut potentiellement se transformer en point d’entrée pour des personnes mal intentionnées (des « hackeurs ») qui peuvent exploiter certaines failles pour dérober des informations sensibles à nos utilisateurs ou pour rendre notre site non opérationnel. Les problématiques de sécurité sont très complexes et ne sont pas à la portée de développeurs débutants et c’est la raison pour laquelle je n’en parlerai pas en détail dans ce cours. En effet, pour en comprendre les tenants et les aboutissants, il faut comprendre comment fonctionnent les sites Internet, les réseaux, ainsi que connaitre les langages comme le JavaScript et comprendre l’interaction entre les différents langages. Je resterai donc très superficiel ici et vais simplement vous conseiller d’ajouter des attributs allow et >sandbox dans vos éléments iframe qui vont permettre de très largement limiter les menaces entrantes. Chacun de ces deux attributs peut prendre de nombreuses valeurs. En les utilisant sans valeur, nous désactivons la plupart des fonctionnalités liées aux iframes. A chaque fois qu’on ajoute une valeur dans ces attributs, on indique qu’on souhaite réactiver la fonctionnalité liée à la valeur en question. Pour information, on va pouvoir passer les valeurs suivantes (et donc activer les fonctionnalités correspondantes) à allow :"
      },
      {
        "type": "list",
        "items": [
          "Accelerometer ;",
          "Ambient light sensor ;",
          "Autoplay ;",
          "Camera ;",
          "Encrypted media ;",
          "Fullscreen ;",
          "Geolocation ;",
          "Gyroscope ;",
          "Lazyload ;",
          "Microphone ;",
          "Midi ;",
          "Payment Request ;",
          "Picture-in-picture ;",
          "Speaker ;",
          "USB ;",
          "VR / XR."
        ]
      },
      {
        "type": "p",
        "text": "De même, l’attribut sandbox va nous permettre d’activer les fonctionnalités suivantes :"
      },
      {
        "type": "list",
        "items": [
          "allow-scripts : l’iframe peut exécuter des scripts ;",
          "allow-forms : l’envoi de formulaire dans l’iframe est permis ;",
          "allow-popups : l’iframe peut ouvrir des popup (fenêtres contextuelles) ;",
          "allow-modals : l’iframe peut ouvrir des fenêtres modales ;",
          "allow-orientation-lock ;",
          "allow-pointer-lock ;",
          "allow-popups-to-escape-sandbox ;",
          "allow-presentation ;",
          "allow-same-origin ;",
          "allow-top-navigation ;",
          "allow-top-navigation-by-user-activation."
        ]
      },
      {
        "type": "p",
        "text": "Un autre souci lié à l’utilisation d’iframe est l’intégration du contenu de notre site sur d’autres sites. Nous pouvons appeler ça des menaces « sortantes » pour les distinguer des précédentes. Les intentions liées à ce comportement sont généralement malveillantes : vol de contenu, tentative d’imitation de notre site ou épuisement de nos ressources. En effet, vous devez bien comprendre que lorsque quelqu’un intègre nos contenus sur son site avec un élément iframe, l’affichage du contenu de l’iframe va puiser dans nos ressources serveur puisque le contenu va être demandé et chargé à partir de notre serveur. Pour se prémunir contre cela, nous allons pouvoir interdire aux autres sites d’intégrer nos contenus via des éléments iframe. Pour faire cela, nous allons devoir définir une politique de sécurité de contenu ou CSP (Content Security Policy) adaptée. A ce niveau, le sujet commence à devenir vraiment complexe puisqu’il va falloir configurer nos en-tête HTTP à partir de notre serveur. Je n’entrerai pas plus dans le détail ici car le sujet mériterait un cours à lui seul et serai bien trop complexe pour le moment. Cependant, retenez tous ces termes pour pouvoir vous renseigner plus avant si un jour vous avez besoin d’utiliser ces objets."
      },
      {
        "type": "h",
        "text": "Les autres éléments d’intégration"
      },
      {
        "type": "p",
        "text": "Pour être tout à fait exhaustif, je dois ici préciser que l’élément iframe n’est pas le seul élément d’intégration de ressources externes. En effet, d’autres éléments comme embed et object existent et servent à intégrer des documents comment des PDF, des graphiques vectoriels (SVG) ou même des Flash. Cependant, ces éléments sont aujourd’hui à mon sens complètement désuets et vous ne devriez jamais avoir à les utiliser. Nous ne les étudierons donc pas dans ce cours."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Les iframes</title></head>\n  <body>\n\n    <!-- iframe : fenêtre intégrée vers une autre page -->\n    <iframe\n      src=\"https://www.exemple.fr\"\n      width=\"600\"\n      height=\"400\"\n      title=\"Titre de l'iframe (accessibilité)\"\n      frameborder=\"0\">           <!-- 0 = sans bordure (déprécié, utiliser CSS) -->\n      Votre navigateur ne supporte pas les iframes.\n    </iframe>\n\n    <!-- iframe avec CSS -->\n    <iframe\n      src=\"autre-page.html\"\n      style=\"width:100%; height:500px; border:none; border-radius:8px;\">\n    </iframe>\n\n    <!-- Intégration Google Maps -->\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=...\"\n      width=\"600\" height=\"450\"\n      loading=\"lazy\"\n      allowfullscreen\n      referrerpolicy=\"no-referrer-when-downgrade\"\n      title=\"Localisation\">\n    </iframe>\n\n    <!-- Sécurité : attribut sandbox -->\n    <iframe\n      src=\"contenu-tiers.html\"\n      sandbox=\"allow-scripts allow-same-origin\">\n      <!-- Valeurs sandbox : allow-scripts, allow-forms,\n           allow-popups, allow-same-origin, allow-top-navigation -->\n    </iframe>\n\n    <!-- Cible une iframe depuis un lien -->\n    <iframe name=\"moniframe\" src=\"page1.html\" width=\"500\" height=\"300\"></iframe>\n    <a href=\"page2.html\" target=\"monframe\">Charger page 2 dans l'iframe</a>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-468.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-469.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-470.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-471.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-472.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "56-exercice-1-cr-ation-d-un-menu-horizontal",
    "title": "EXERCICE #1 : Création d’un menu horizontal sticky",
    "blocks": [
      {
        "type": "p",
        "text": "sticky Au cours des dernières leçons, nous avons vu beaucoup de nouveaux concepts HTML et CSS. Il est maintenant temps de mettre ce qu’on a vu en application en créant un menu simple horizontal entièrement en HTML et en CSS. Étant donné que c’est notre premier « vrai » exercice, nous allons progresser ensemble. Commençons avec un conseil d’ordre général : lorsqu’on se lance dans un projet de code, il est rarement bénéfique de commencer immédiatement à coder. Au contraire, on commencera généralement par clarifier ce qu’on souhaite obtenir et par définir les différents langages, objets, etc. que nous allons devoir utiliser pour arriver au résultat voulu. Procéder comme cela limite les risques d’avoir à revenir en arrière et à réécrire son code au milieu du projet car on n’avait pas pensé à ceci ou cela et fait au final gagner beaucoup de temps ! Ici, le projet est très simple puisqu’on souhaite simplement créer un menu horizontal simple. Pour créer des menus, nous allons utiliser des éléments de liste ul que nous allons ensuite mettre en forme en CSS."
      },
      {
        "type": "h",
        "text": "Squelette HTML du menu"
      },
      {
        "type": "p",
        "text": "Nous allons commencer par créer le squelette de notre menu en HTML avant de le mettre en forme en CSS. Ici, nous allons utiliser une liste ul qui va représenter notre menu. Chaque élément de liste li va représenter un onglet de notre menu. Comme un menu est utilisé pour naviguer entre les pages d’un site, il va falloir que nos onglets de menu soient cliquables. Nous allons donc ajouter des éléments a dans nos éléments de liste. Pour cet exercice, je laisserai mes liens vides en écrivant href=\"#\". En pratique, nous devrons également placer notre menu principal de navigation dans un élément structurant nav qui sert à indiquer aux navigateurs et moteurs de recherche que ce qui est dans l’élément nav est notre menu principal de navigation. Voici donc le code HTML de notre menu et le résultat dans le navigateur : Pour le moment, il s’agit visuellement d’une simple liste non ordonnée et cela ne ressemble pas à un menu. C’est tout à fait normal : je vous rappelle que la mise en page est du ressort du CSS."
      },
      {
        "type": "h",
        "text": "Mise en forme du menu en CSS"
      },
      {
        "type": "p",
        "text": "Nous allons maintenant transformer notre liste HTML en quelque chose qui ressemble visuellement à un menu en CSS. Ici, nous allons déjà commencer par effectuer un reset des marges intérieures et extérieures des différents éléments de notre page pour nous assurer d’avoir un affichage cohérent d’un navigateur à l’autre. Profitons-en également pour définir une liste de polices d’écriture pour notre page. Ensuite, nous allons enlever les puces devant nos éléments de liste. Nous allons pouvoir faire cela en utilisant la propriété list-style-type avec sa valeur none. Ici, nous allons cibler uniquement la liste de notre menu avec le sélecteur nav ul afin de ne pas enlever les puces des autres listes qui pourraient potentiellement être affichées dans notre page. A partir d’ici, nous avons plusieurs solutions en CSS pour mettre nos éléments de liste sur la même ligne. Les deux solutions fonctionnant le mieux ici vont être d’ajouter soit un display : inline-block, soit un float : left à nos éléments de liste. Ici, je vais plutôt opter pour un float : left pour n’avoir aucune espace entre mes éléments de liste et faciliter la mise en forme. En effet, je vous rappelle qu’une espace va se créer entre différents éléments possédant un display : inline-block si ces éléments ne sont pas collés dans votre code. Cette espace, généralement de 4px, est l’équivalent d’une espace insécable. On peut le supprimer en collant les différents éléments dans le code. Comme on applique un float : left à tous nos éléments de liste, nous allons également utiliser le clearfix avec le pseudo-élément ::after que nous allons appliquer à la liste en soi pour éviter que sa hauteur ne soit nulle. C’était l’étape la plus complexe du menu. Nous allons ensuite espacer nos différents onglets de menu. Pour cela, on va attribuer une largeur égale à 100% divisée par le nombre d’éléments de menu à chaque élément de menu. Nous allons également pouvoir centrer le contenu textuel de chacun de nos éléments de menu dans l’élément de menu en appliquant un text-align : center aux différents éléments. Note : Ici, notre élément nav occupe 100% de la largeur disponible par défaut et on dirait donc que le menu est centré dans la page. Cependant, ce n’est pas le cas (il suffit de lui attribuer une largeur plus petite pour s’en apercevoir). Pour centrer le menu, on pourra appliquer une largeur explicite à l’élément nav ainsi que margin : 0 auto. Une fois arrivé ici, on s’aperçoit d’un problème d’ergonomie : seul le texte est cliquable et non pas tout l’espace dans chaque élément de menu. Cela est dû au fait que l’élément a est un élément inline. Changeons donc ce comportement par défaut et profitons-en pour enlever le trait de soulignement et pour changer la couleur de nos textes. Ensuite, nous allons vouloir mettre en relief un élément de menu lorsque celui-ci est survolé par l’utilisateur. Nous allons pouvoir faire cela en utilisant la pseudo-classe :hover. On va par exemple pouvoir changer la couleur du texte et ajouter une bordure basse lorsqu’un utilisateur passe sa souris sur un élément de menu. Ici, on se retrouve face à un autre problème d’ergonomie : en effet, en ajoutant une bordure durant l’état :hover, la hauteur de l’élément est modifiée de la taille de la bordure et cela va faire bouger les différents contenus sous le menu. La façon la plus simple de résoudre ce problème est d’ajouter une bordure de même taille mais de couleur transparente à nos éléments a dans leur état normal. Ainsi, les éléments auront toujours la même hauteur. Finalement, on va pouvoir aérer notre menu en hauteur. Ici, je vous propose d’ajouter des padding haut et bas de 10px à nos éléments a. Cela aura également pour effet de séparer la bordure basse de ces éléments de leur contenu pour un meilleur rendu visuel. Pour rendre enfin notre menu sticky, il va suffire d’ajouter une position :sticky à notre élément nav avec une propriété top :0px si on souhaite que le menu reste collé en haut de la page. Nous allons également en profiter pour ajouter une couleur de fond au menu. Notez que pour constater l’effet du positionnement sticky il va falloir pouvoir descendre dans la page. N’hésitez donc pas à ajouter un conteneur div sous le menu et à lui donner une hauteur de 2000px par exemple. Voilà tout pour ce menu simple créé en HTML et en CSS. N’hésitez pas à modifier ou à ajouter des styles à ce menu ! Voici le résultat auquel vous devriez arriver :"
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Menu horizontal sticky</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <nav id=\"menu-sticky\">\n    <div class=\"logo\">MonSite</div>\n    <ul>\n      <li><a href=\"#accueil\">Accueil</a></li>\n      <li><a href=\"#services\">Services</a></li>\n      <li><a href=\"#portfolio\">Portfolio</a></li>\n      <li><a href=\"#contact\">Contact</a></li>\n    </ul>\n  </nav>\n\n  <section id=\"accueil\">\n    <h1>Bienvenue</h1>\n    <p>Faites défiler la page pour voir le menu rester fixe en haut...</p>\n  </section>\n\n  <section id=\"services\">\n    <h2>Nos Services</h2>\n  </section>\n\n  <section id=\"portfolio\">\n    <h2>Portfolio</h2>\n  </section>\n\n  <section id=\"contact\">\n    <h2>Contact</h2>\n  </section>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "/* Reset */\n* { margin: 0; padding: 0; box-sizing: border-box; }\n\n/* Menu sticky */\n#menu-sticky {\n  position: sticky;    /* Reste fixe en défilant */\n  top: 0;              /* Collé en haut */\n  z-index: 1000;       /* Au-dessus du reste */\n  background: #2c3e50;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 40px;\n}\n\n.logo {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#menu-sticky ul {\n  display: flex;       /* Éléments en ligne */\n  list-style: none;\n  gap: 30px;\n}\n\n#menu-sticky a {\n  color: #ecf0f1;\n  text-decoration: none;\n  font-size: 1rem;\n  transition: color 0.3s;\n}\n\n#menu-sticky a:hover {\n  color: #3498db;\n}\n\n/* Sections pour la démo */\nsection {\n  height: 100vh;       /* Chaque section fait la hauteur de l'écran */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n}\n\nsection:nth-child(even) { background: #ecf0f1; }\nsection:nth-child(odd) { background: #f9f9f9; }"
},
            { "type": "image", "src": "images/htmlcss/img-618.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-619.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-620.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-622.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-623.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-624.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-625.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-626.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-627.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-628.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-629.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-630.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "57-exercice-2-cr-ation-d-un-menu-d-roulant",
    "title": "EXERCICE #2 : Création d’un menu déroulant",
    "blocks": [
      {
        "type": "p",
        "text": "Dans l’exercice précédent, nous avons réussi à créer un menu horizontal simple en HTML et en CSS. Je vous propose maintenant de transformer ce menu pour créer un menu déroulant, c’est-à-dire un menu comportant plusieurs niveaux. Créer un menu déroulant en HTML et en CSS va s’avérer un peu plus complexe que de créer un menu simple à cause notamment des questions de positionnement qu’il va falloir régler. Dans cet exercice, nous allons rester simple et nous contenter seulement d’un deuxième niveau de menu. Notez que de manière générale il est déconseillé d’aller plus loin que cela pour des raisons d’ergonomie de votre site. L’idée ici va donc être de créer des sous-menus. Chaque sous-menu va être lié à un onglet du menu principal et ne va devoir apparaitre que lorsqu’un utilisateur passe sa souris sur l’onglet en question."
      },
      {
        "type": "h",
        "text": "Squelette HTML du menu déroulant"
      },
      {
        "type": "p",
        "text": "Nous allons commencer par récupérer le code HTML de notre menu simple vu à la leçon précédente et lui rajouter des sous-menus. Pour représenter nos sous-menus, nous allons simplement imbriquer une nouvelle liste dans les différents éléments de notre liste principale. Ici, nous créons un deuxième niveau de menu sous nos deux premiers onglets de menu. Notez que j’ai rajouté des attributs class et des entités HTML &ensp; dans le code (qui servent à créer un espace double). Cela va nous être utile plus tard en CSS."
      },
      {
        "type": "h",
        "text": "Mise en forme du menu déroulant en CSS"
      },
      {
        "type": "p",
        "text": "Ici, nous allons essayer de nous appuyer un maximum sur les styles du menu horizontal simple créé dans l’exercice précédent en les complétant. Vous pouvez donc déjà commencer par récupérer les styles CSS du menu créé précédemment : On va donc déjà vouloir par défaut cacher les sous menus et ne les afficher que lorsqu’un utilisateur passe sa souris par-dessus l’onglet de menu correspondant. Nous allons donc appliquer un display : none par défaut à nos sous-menus et un display : block lorsqu’un utilisateur passe sa souris sur l’onglet du menu principal correspondant. On va également en profiter pour ajouter une couleur de fond aux sous-menus ainsi qu’une ombre légère autour des sous-menus pour qu’ils se distinguent du reste de la page avec box-shadow. Ici, notez qu’on peut placer les styles généraux de mes sous-menus soit dans le sélecteur nav > ul li:hover .sous , soit dans le sélecteur .sous. Par défaut, on préfèrera placer les styles dans le sélecteur le plus simple et général. Le sélecteur nav > ul li:hover .sous peut sembler complexe à première vue. Il sert à cibler un sous menu .sous lorsqu’un utilisateur passe sa souris sur un éléments li de la liste représentant notre menu principal. Ensuite, on va vouloir que les éléments de nos sous-menus s’affichent cette fois-ci les uns en dessous des autres, occupent tout l’espace disponible dans leur conteneur et que le texte soit aligné à gauche. On va donc annuler le flottement hérité des onglets du menu principal. On va également déjà en profiter pour mettre en forme les onglets de nos sous-menus et s’appuyant une nouvelle fois sur les styles déjà créées. Ici, on va se contenter de supprimer la bordure basse héritée du menu principal, d’ajouter une marge interne et une couleur de fond lorsqu’on passe la souris sur un élément. On va aussi montrer aux utilisateurs que notre menu est déroulant en ajoutant une petite flèche à côté des textes des onglets de menu qui contiennent des sous-menus. Pour cela, on va insérer le symbole ▼après le texte en utilisant le pseudo-élément ::after, ce qui va également nous permettre de définir la taille du symbole. Une fois arrivé ici, il nous reste un détail technique à régler qui est la partie complexe de ce menu : pour le moment, lorsqu’on affiche un sous-menu, le contenu situé sous le menu est poussé vers le bas ce qui n’est pas le comportement souhaité. On va pouvoir régler cela en appliquant une position : absolute à nos sous-menus, ce qui va avoir pour effet de les retirer du flux normal de la page. Les sous-menus n’impacteront plus le contenu suivant le menu. Pour que les sous-menus ne passent pas derrière le contenu qui suit le menu, nous allons également définir un z-index élevé. Nous allons également définir la taille des sous-menus à 100%. Ensuite, pour replacer les sous-menus correctement sous leur onglet correspondant et pour qu’ils fassent bien la même taille, on va également appliquer une position : relative aux éléments du menu principal. Voilà tout pour cet exercice ! Nous disposons maintenant d’un menu déroulant totalement fonctionnel. Vous devriez parvenir au résultat suivant :"
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Menu déroulant</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <nav>\n    <ul class=\"menu\">\n      <li><a href=\"#\">Accueil</a></li>\n      <li class=\"dropdown\">\n        <a href=\"#\">Services ▾</a>\n        <ul class=\"sous-menu\">\n          <li><a href=\"#\">Développement Web</a></li>\n          <li><a href=\"#\">Design UI/UX</a></li>\n          <li><a href=\"#\">SEO</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\">\n        <a href=\"#\">Produits ▾</a>\n        <ul class=\"sous-menu\">\n          <li><a href=\"#\">Formation</a></li>\n          <li><a href=\"#\">Consulting</a></li>\n        </ul>\n      </li>\n      <li><a href=\"#\">Contact</a></li>\n    </ul>\n  </nav>\n</body>\n</html>"
},
      {
        "type": "code",
        "filename": "style.css",
        "language": "css",
        "code": "* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: Arial, sans-serif; }\n\nnav { background: #2c3e50; }\n\n.menu {\n  display: flex;\n  list-style: none;\n}\n\n.menu > li > a {\n  display: block;\n  padding: 18px 25px;\n  color: white;\n  text-decoration: none;\n  transition: background 0.3s;\n}\n\n.menu > li > a:hover {\n  background: #34495e;\n}\n\n/* Sous-menu caché par défaut */\n.dropdown {\n  position: relative;  /* Contexte de positionnement */\n}\n\n.sous-menu {\n  display: none;       /* Caché par défaut */\n  position: absolute;  /* Sort du flux */\n  top: 100%;           /* Sous le parent */\n  left: 0;\n  background: #34495e;\n  min-width: 200px;\n  list-style: none;\n  z-index: 100;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}\n\n.sous-menu a {\n  display: block;\n  padding: 12px 20px;\n  color: #ecf0f1;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n\n.sous-menu a:hover {\n  background: #3498db;\n}\n\n/* Afficher le sous-menu au survol */\n.dropdown:hover .sous-menu {\n  display: block;\n}"
},
            { "type": "image", "src": "images/htmlcss/img-631.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-632.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-633.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-634.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-635.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-636.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-637.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-638.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-639.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "58-pr-sentation-des-formulaires-html",
    "title": "Présentation des formulaires HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Nous allons aborder dans cette nouvelle partie une partie essentielle du HTML qui va consister en la création de formulaires. Nous allons donc définir ensemble ce qu’est un formulaire HTML et à quoi vont servir les formulaires puis nous allons apprendre à créer des formulaires plus ou moins complexes."
      },
      {
        "type": "h",
        "text": "Définition et rôle des formulaires HTML"
      },
      {
        "type": "p",
        "text": "Les formulaires HTML vont permettre à nos visiteurs de nous envoyer des données que nous allons ensuite pouvoir manipuler et / ou stocker. Nous allons utiliser les formulaires pour permettre à des utilisateurs de s’inscrire sur notre site (formulaires d’inscription), de se connecter (formulaire de connexion), de nous envoyer des messages (formulaire de contact), de laisser des commentaires, etc. Vous l’aurez donc compris : les formulaires se révèlent indispensables et incontournables dans de nombreuses situations. Les formulaires HTML vont pouvoir être composés de champs de texte (cas d’un champ de formulaire demandant à un utilisateur de renseigner son adresse mail pour se connecter ou pour s’inscrire sur le site par exemple), de listes d’options (choix d’un pays dans une liste de pays par exemple), de cases à cocher, etc. Cependant, vous devez bien comprendre ici qu’on touche avec les formulaires aux limites du langage HTML. En effet, nous allons tout à fait pouvoir construire nos formulaires en HTML, mais le HTML ne va nous permettre ni de recueillir les données envoyées par nos visiteurs, ni de les manipuler, ni de les stocker. Pour réaliser ces différentes opérations, il faudra utiliser d’autres types de langages comme le PHP (pour la manipulation des données) et le MySQL (pour le stockage) par exemple qui vont s’exécuter côté serveur."
      },
      {
        "type": "h",
        "text": "L’élément form et ses attributs"
      },
      {
        "type": "p",
        "text": "Pour créer un formulaire, nous allons utiliser l’élément HTML form. Cet élément form va avoir besoin de deux attributs pour fonctionner normalement : les attributs method et action. L’attribut method va indiquer comment doivent être envoyées les données saisies par l’utilisateur. Cet attribut peut prendre deux valeurs : get et post. Que signifient ces deux valeurs et laquelle choisir ? Les valeurs get et post vont déterminer la méthode de transit des données du formulaire. En choisissant get, on indique que les données doivent transiter via l’URL (sous forme de paramètres) tandis qu’en choisissant la valeur post on indique qu’on veut envoyer les données du formulaire via transaction post HTTP. Concrètement, si l’on choisit l’envoi via l’URL (avec la valeur get), nous serons limités dans la quantité de données pouvant être envoyées et surtout les données vont être envoyées en clair. Évitez donc absolument d’utiliser cette méthode si vous demandez des mots de passe ou toute information sensible dans votre formulaire. Cette méthode de transit est généralement utilisée lors de l’affichage de produits triés sur un site e-commerce (car oui, les options de tris sont des éléments de formulaires avant tout !). Regardez bien les URL la prochaine fois que vous allez sur un site e-commerce après avoir fait un tri : si vous retrouvez des éléments de votre tri dedans c’est qu’un get a été utilisé. En choisissant l’envoi de données via post transaction HTTP (avec la valeur post), nous ne sommes plus limités dans la quantité de données pouvant être envoyées et les données ne sont visibles par personne. C’est donc généralement la méthode que nous utiliserons pour l’envoi véritablement de données que l’on souhaite stocker (création d’un compte client, etc.). L’attribut action va lui nous servir à préciser l’adresse de la page qui va traiter les données. Je vous rappelle ici qu’on ne va pas pouvoir manipuler les données des formulaires en HTML mais que nous allons être obligé d’utiliser un autre langage comme le PHP pour cela. Généralement, nous enverrons les données reçues vers un fichier PHP dont le but sera de traiter ces données justement. Nous n’allons bien évidemment pas créer ce fichier dans ce cours, mais je vous propose pour les exemples suivants de faire « comme si » ce fichier existait. Nous pourrons l’appeler form.php."
      },
      {
        "type": "h",
        "text": "Création d’un premier formulaire simple en HTML"
      },
      {
        "type": "p",
        "text": "Il est temps de passer à la pratique et de créer un premier formulaire simple en HTML. Dans ce formulaire, nous allons demander trois choses à l’utilisateur :"
      },
      {
        "type": "list",
        "items": [
          "Un pseudonyme à l’utilisateur ;",
          "Un mot de passe ;",
          "Une adresse mail."
        ]
      },
      {
        "type": "h",
        "text": "Création des champs de formulaire avec l’élément input"
      },
      {
        "type": "p",
        "text": "Pour faire cela, nous allons avoir besoin de créer trois champs de formulaires dans lesquels l’utilisateur pourra remplir les informations demandées. Pour créer ces champs, nous allons utiliser des éléments HTML input. L’élément HTML input est un élément qui va permettre à l’utilisateur d’envoyer des données. Il se présente sous la forme d’une balise orpheline et va obligatoirement posséder un attribut type auquel on va pouvoir donner de nombreuses valeurs. La valeur passée à l’attribut type va déterminer le type de données que l’utilisateur va pouvoir envoyer : un texte avec input type=\"text\", une adresse mail avec input type=\"email\", une date avec input type=\"date\", etc. Si le format de données entrées par l’utilisateur ne correspond pas à ce qui est attendu, alors il ne pourra pas envoyer le formulaire et un message d’erreur s’affichera selon le navigateur utilisé. Notez également que les navigateurs proposent aujourd’hui des présentations différentes en fonction du type d’input et notamment sur mobile : pour un input type=\"date\", par exemple, un calendrier sera souvent affiché pour aider l’utilisateur à choisir une date. La base de notre formulaire va donc ressembler à cela : Comme vous pouvez le voir, nos trois champs de formulaires sont bien créés. Si vous placez le curseur de votre souris dans un champ et que vous commencez à écrire, vous devriez voir que le navigateur comprend bien le type de données attendu dans chaque champ : par exemple, le texte inscrit dans le champ demandant un mot de passe par exemple devrait s’afficher sous forme d’étoiles. De plus, il est également possible que votre navigateur vous propose une auto-complétion des champs si vous avez déjà rempli des formulaires demandant des types de données similaires sur un autre site précédemment. En l’état, notre formulaire n’est cependant pas exploitable pour la simple et bonne raison que l’utilisateur ne possède pas d’indication sur ce qu’il doit rentrer dans chaque champ et également car pour le moment notre formulaire ne possède pas de bouton d’envoi des données ! Ajout d’indications sur les données attendues avec l’élément label Pour donner des indications sur les données attendues dans chaque champ aux utilisateurs, nous allons utiliser des éléments label. Cet élément va permettre d’attribuer un libellé (c’est-à-dire une étiquette ou une description) à chaque champ de notre formulaire. Pour des raisons d’ergonomie et de cohérence, il est considéré comme une bonne pratique de lier chaque label à son input correspondant. Ainsi, lorsque l’utilisateur va cliquer sur le label, le curseur de la souris va automatiquement être placé dans l’input correspondant. Pour lier un label et un input ensemble, nous allons attribuer un attribut id unique à chacun de nos éléments input pour les identifier de manière formelle et allons également rajouter un attribut for à chacun de nos label qui devra avoir la même valeur que l’id de l’input auquel il doit être lié. Ici, j’en ai profité pour placer mes couples label + input dans des div afin que chacun d’entre eux soit sur une ligne à eux et j’ai également passé une margin-bottom : 10px aux div. Nous en avons fini avec les champs de notre premier formulaire HTML en soi et il ne nous reste donc plus qu’à nous préoccuper de l’envoi des données."
      },
      {
        "type": "h",
        "text": "Ajout du bouton d’envoi de données"
      },
      {
        "type": "p",
        "text": "Pour permettre l’envoi de ces données vers notre page form.php, il va nous falloir créer un bouton de soumission de formulaire. Pour cela, nous allons à nouveau tout simplement utiliser un élément input mais cette fois-ci de type input type=\"submit\". Cet input un peu spécial va se présenter sous forme de « bouton » et nous n’allons pas avoir besoin de lui ajouter de label. A la place, nous allons utiliser un attribut value et lui passer en valeur le texte que doit contenir notre bouton (« soumettre », « valider », ou « envoyer » par exemple)."
      },
      {
        "type": "h",
        "text": "Identification des données du formulaire"
      },
      {
        "type": "p",
        "text": "En l’état, notre formulaire n’est pas encore tout à fait utilisable. En effet, celui-ci fonctionne côté « façade » et va bien permettre à un utilisateur de remplir des données et de les envoyer. Cependant, pour le moment, nous ne pourrions pas manipuler les données envoyées car elles n’ont pas été nommées : les données vont bien être envoyées mais il va être impossible pour nous de définir à quel champ correspond chaque donnée envoyée. Pour identifier les données et pouvoir ensuite les manipuler en PHP ou autre, nous allons devoir ajouter un attribut name qui doit également posséder une valeur unique à chaque élément de formulaire demandant des données à l’utilisateur. Notez bien ici que chaque attribut name doit posséder une valeur unique par rapport aux autres attributs name mais rien ne nous empêche de choisir la même valeur pour un attribut name et un attribut id par exemple puisqu’il n’y a pas de risque de confusion étant donné que ce sont deux attributs totalement différents. Ça y est, notre premier formulaire HTML est maintenant tout à fait fonctionnel. Expliquons rapidement la logique derrière ce formulaire, c’est-à-dire le fonctionnement de notre formulaire HTML. Lorsqu’un utilisateur arrive sur notre page, il va remplir les différents champs de formulaire créés avec des éléments input. Ensuite, il va cliquer sur le bouton d’envoi du formulaire. Les données du formulaire vont alors être envoyées via transaction HTTP de type post vers la page form.php. Dans cette page form.php, nous allons ensuite pouvoir manipuler les différentes données du formulaire qu’on va pouvoir identifier grâce aux attributs name donnés à chaque input. Encore une fois, l’objet de ce tutoriel n’est pas de présenter la manipulation des données en PHP ni le stockage mais bien de nous concentrer sur la création des formulaires en soi c’est-à-dire sur la partie HTML des formulaires."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Formulaires HTML</title></head>\n  <body>\n\n    <!-- Balise form : conteneur du formulaire -->\n    <form\n      action=\"/traitement.php\"  <!-- URL vers où envoyer les données -->\n      method=\"POST\"             <!-- GET ou POST -->\n      enctype=\"multipart/form-data\" <!-- Pour les fichiers -->\n      novalidate                <!-- Désactive la validation navigateur -->\n    >\n\n      <!-- Association label + input (accessibilité) -->\n      <label for=\"prenom\">Prénom :</label>\n      <input type=\"text\" id=\"prenom\" name=\"prenom\" required>\n\n      <label for=\"email\">Email :</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required>\n\n      <!-- Boutons de soumission -->\n      <button type=\"submit\">Envoyer</button>\n      <button type=\"reset\">Réinitialiser</button>\n      <input type=\"submit\" value=\"Soumettre\">\n\n    </form>\n\n    <!-- Méthodes HTTP -->\n    <!-- GET : données dans l'URL (barre d'adresse) - pour recherches -->\n    <!--       Limite de taille, données visibles, bookmarkable -->\n    <!-- POST : données dans le corps de la requête - pour formulaires -->\n    <!--        Pas de limite de taille, données non visibles dans URL -->\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-640.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-641.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-642.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-643.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-644.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-645.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-646.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-647.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-648.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "59-les-l-ments-des-formulaires",
    "title": "Les éléments des formulaires",
    "blocks": [
      {
        "type": "p",
        "text": "En HTML, nous avons de nombreux éléments spécifiques aux formulaires qui vont nous permettre de définir le formulaire en soi, de créer des zones de saisie de texte courtes ou longues, de proposer des zones d’options à nos utilisateurs, etc. Dans la leçon précédente, nous nous sommes concentrés sur l’éléments input qui est de loin le plus utilisé car son attribut type permet de créer toutes sortes de champs et le rend très puissant mais il en existe bien d’autres. L’objet de cette leçon va être de vous présenter la plupart des éléments de formulaire ainsi que les valeurs les plus courantes qu’on va pouvoir passer à l’attribut type de l’élément input."
      },
      {
        "type": "h",
        "text": "Les éléments de formulaires HTML"
      },
      {
        "type": "p",
        "text": "Commençons avec la liste des éléments que l’on va pouvoir utiliser dans nos formulaires HTML ainsi que leur rôle :"
      },
      {
        "type": "h",
        "text": "Elément      Définition"
      },
      {
        "type": "p",
        "text": "form Définit un formulaire input Définit un champ de données pour l’utilisateur label Définit une légende pour un élément input textarea Définit un champ de texte long select Définit une liste de choix optgroup Définit un groupe d’options dans une liste option Définit une option dans une liste fieldset Permet de regrouper les éléments d’un formulaire en différentes parties legend Ajoute une légende à un élément fieldset"
      },
      {
        "type": "h",
        "text": "L’élément input et les valeurs de l’attribut type"
      },
      {
        "type": "p",
        "text": "Commençons la présentation des éléments de formulaire avec un élément que nous connaissons : l’élément input. Cet élément est l’élément à connaitre dans le contexte de la création de formulaires HTML puisqu’il va nous permettre de créer tous types de champs pour récolter des données utilisateurs. Le type de champ va être défini par la valeur que l’on va donner à son attribut type. L’attribut type peut prendre de nombreuses valeurs. Voici les valeurs les plus utiles et les plus courantes :"
      },
      {
        "type": "h",
        "text": "Type"
      },
      {
        "type": "p",
        "text": "Définition d’input text Définit un champ de saisie monoligne qui accepte du texte number Définit un champ qui accepte un nombre décimal email Crée un champ qui permet de renseigner une adresse mail date Permet à l’utilisateur d’envoyer une date password Créer un champ de saisie monoligne dont la valeur va être cachée Permet de créer une case à cocher. L’utilisateur peut cocher une ou checkbox plusieurs cases d’un coup Permet de créer un bouton radio. Par définition, un seul bouton radio radio peut être coché dans un ensemble url Crée un champ qui accepte une URL file Permet à un utilisateur de télécharger un fichier submit Crée un bouton d’envoi des données du formulaire"
      },
      {
        "type": "h",
        "text": "L’élément textarea"
      },
      {
        "type": "p",
        "text": "Pour créer un champ de saisie classique dans nos formulaires, le premier réflexe va être d’utiliser un input type=\"text\" et cela va marcher pour toutes les données de type « texte court ». Le souci ici est qu’on ne va plus pouvoir utiliser d’input type=\"text\" si on veut par exemple laisser la possibilité à un utilisateur de commenter quelque chose ou si on lui demande de se décrire car le texte qu’on va pouvoir placer dans un input type=\"text\" est limité en taille. Dans le cas où on souhaite laisser la possibilité à un utilisateur d’écrire un texte long, on utilisera plutôt un élément textarea qui définit un champ de texte long."
      },
      {
        "type": "h",
        "text": "Les éléments select, option et optgroup"
      },
      {
        "type": "p",
        "text": "L’élément select va nous permettre de créer une liste d’options déroulante. Dans cette liste, nous allons placer autant d’éléments option que l’on souhaite donner de choix aux utilisateurs. Les listes d’options forcent l’utilisateur à faire un choix unique dans la liste et sont généralement utilisées lorsqu’on souhaite proposer de nombreux choix, comme par exemple dans le cas où on demande à l’utilisateur de choisir son pays de résidence. L’élément optgroup va nous permettre d’ordonner notre liste d’options et groupant des options. Par exemple, dans une liste de choix de pays, on pourrait grouper les différents pays par continent."
      },
      {
        "type": "h",
        "text": "Les éléments fieldset et legend"
      },
      {
        "type": "p",
        "text": "Les éléments fieldset et legend vont nous permettre de structurer et d’améliorer la sémantique d’un formulaire. L’élément fieldset va nous permettre de grouper plusieurs champs dans un formulaire pour l’organiser en parties. L’élément legend va nous permettre d’ajouter une légende à une partie de notre formulaire déterminée par fieldset pour expliquer son but par exemple."
      },
      {
        "type": "h",
        "text": "Création d’un formulaire HTML complet"
      },
      {
        "type": "p",
        "text": "Continuons à pratiquer et utilisons certaines des valeurs vues précédemment pour créer un formulaire HTML plus complet que le premier formulaire que nous avons créé. Nous allons cette fois-ci demander à l’utilisateur de nous transmettre les informations suivantes via un formulaire qui va être divisé en 3 sections : Section 1 :"
      },
      {
        "type": "list",
        "items": [
          "Son nom de famille ;",
          "Son prénom ;",
          "Son adresse mail ;",
          "Son âge ;",
          "Son sexe ;",
          "Son pays de résidence."
        ]
      },
      {
        "type": "p",
        "text": "Section 2 :"
      },
      {
        "type": "list",
        "items": [
          "Ses compétences parmi une liste de choix ;",
          "Une description d’une expérience professionnelle passée / d’un problème résolu."
        ]
      },
      {
        "type": "p",
        "text": "Section 3 :"
      },
      {
        "type": "list",
        "items": [
          "Un mot de passe – obligatoire."
        ]
      },
      {
        "type": "p",
        "text": "Commençons donc par définir les sections de notre formulaire avec des éléments fieldset et donnons-leur une légende avec l’élément legend. Ensuite, nous allons créer les différents champs section par section et nous nous occuperons de la mise en forme à la toute fin. Notre première section de formulaire contient 6 champs :"
      },
      {
        "type": "list",
        "items": [
          "Un premier champ demandant le nom de famille. On utilisera donc un input"
        ]
      },
      {
        "type": "p",
        "text": "type=\"text\" ;"
      },
      {
        "type": "list",
        "items": [
          "Un deuxième champ demandant le prénom, obligatoire également. On utilisera à"
        ]
      },
      {
        "type": "p",
        "text": "nouveau un input type=\"text\""
      },
      {
        "type": "list",
        "items": [
          "Un troisième champ demandant une adresse mail. On utilisera ici un input"
        ]
      },
      {
        "type": "p",
        "text": "type=\"email\" ;"
      },
      {
        "type": "list",
        "items": [
          "Un quatrième champ demandant un âge. On utilisera un input type=\"number\" ;",
          "Un cinquième champ qui va demander le sexe de l’utilisateur. Ici, on va proposer"
        ]
      },
      {
        "type": "p",
        "text": "un choix parmi deux boutons radio « homme » et « femme ». On utilisera ici des boutons radio plutôt qu’un input type=\"text\" pour recevoir des données bien formatés (choix 1 ou choix 2) plutôt que des résultats comme « homme », « masculin », « garçon », « mec », « fille », « femme », etc. qui seraient très difficile à classer par la suite ;"
      },
      {
        "type": "list",
        "items": [
          "Un sixième champ qui va permettre à l’utilisateur d’indiquer son pays de résidence."
        ]
      },
      {
        "type": "p",
        "text": "Ici, nous allons proposer une liste d’options avec une liste préconstruite de pays parmi lesquels l’utilisateur devra choisir. Nous allons également classer les pays par continent. Regardons de plus près le code ci-dessus pour noter les choses intéressantes. Tout d’abord, vous pouvez remarquer que nos deux boutons radio possèdent des attributs name qui partagent la même valeur. C’est tout à fait normal ici puisque l’attribut name nous sert dans le cas des boutons radio à grouper les options d’un groupe d’options ensemble (cela nous permet de distinguer d’une autre liste de boutons radio qu’il pourrait y avoir dans le formulaire). C’est également ce qui fait qu’on a besoin d’un attribut value supplémentaire pour ensuite pouvoir savoir quelle option a été cochée par l’utilisateur lors du traitement des données. Ici, on place également le label après l’élément input pour des raisons d’esthétisme tout simplement. Ensuite, vous pouvez également noter comment se construit une liste d’options de type select. Dans une liste d’options, chaque option est placée dans un élément option. On utilise à nouveau un attribut value qui va nous permettre de savoir quelle option a été choisie par l’utilisateur lors du traitement des données. On peut également classer les options par groupe pour structurer notre formulaire grâce à des éléments optgroup. Les éléments input type=\"radio\" et select servent le même but. De manière générale, pour des raisons d’ergonomie, nous utiliserons les boutons radio pour une liste de choix courte et des listes d’options pour les listes de choix longues. Dans notre deuxième section de formulaire, nous demandons aux utilisateurs de cocher leurs compétences dans une liste sans limite de nombre. Nous allons donc utiliser des input type=\"checkbox\" pour créer cette liste. Nous voulons également que l’utilisateur nous raconte une de ses expériences professionnelles. Pour cela, nous allons utiliser un élément textarea. Les input type=\"checkbox\" vont posséder une syntaxe relativement similaire aux input type=\"radio\" : les différentes cases à cocher d’un même groupe vont partager un même attribut name et nous allons pouvoir distinguer quelles cases ont bien été cochées grâce à l’attribut value. La grande différence entre les input type=\"checkbox\" (cases à cocher) et les input type=\"radio\" (boutons radios) est qu’avec les cases à cocher un utilisateur va pouvoir cocher plusieurs options. Concernant l’élément textarea, on utilise ici un attribut placeholder qui nous sert à indiquer aux utilisateurs ce qu’ils doivent remplir dans le champ en soi. Le placeholder prend la forme d’un texte semi transparent qui va s’effacer dès qu’un utilisateur place le curseur de sa souris dans le champ de formulaire lié. Finalement, notre dernière section de formulaire va tout simplement demander un mot de passe à l’utilisateur et contenir le bouton d’envoi du formulaire. On peut ensuite ajouter quelques styles à notre formulaire en CSS pour le rendre un peu plus présentable :"
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Éléments de formulaire</title></head>\n  <body>\n    <form>\n      <!-- Texte, email, nombre, mot de passe, téléphone, URL -->\n      <input type=\"text\" name=\"nom\" placeholder=\"Votre nom\">\n      <input type=\"email\" name=\"email\" placeholder=\"email@exemple.fr\">\n      <input type=\"password\" name=\"mdp\" placeholder=\"Mot de passe\">\n      <input type=\"number\" name=\"age\" min=\"0\" max=\"120\" step=\"1\">\n      <input type=\"tel\" name=\"tel\" placeholder=\"0612345678\">\n      <input type=\"url\" name=\"site\" placeholder=\"https://...\">\n\n      <!-- Date, heure, couleur -->\n      <input type=\"date\" name=\"date\">\n      <input type=\"time\" name=\"heure\">\n      <input type=\"datetime-local\" name=\"datetimelocal\">\n      <input type=\"color\" name=\"couleur\" value=\"#3498db\">\n\n      <!-- Fichier -->\n      <input type=\"file\" name=\"fichier\" accept=\".pdf,.docx\" multiple>\n\n      <!-- Recherche et plage -->\n      <input type=\"search\" name=\"recherche\" placeholder=\"Rechercher...\">\n      <input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" value=\"50\">\n\n      <!-- Case à cocher et bouton radio -->\n      <input type=\"checkbox\" id=\"cgv\" name=\"cgv\" value=\"oui\">\n      <label for=\"cgv\">J'accepte les CGV</label>\n\n      <input type=\"radio\" id=\"h\" name=\"genre\" value=\"H\">\n      <label for=\"h\">Homme</label>\n      <input type=\"radio\" id=\"f\" name=\"genre\" value=\"F\">\n      <label for=\"f\">Femme</label>\n\n      <!-- Liste déroulante -->\n      <select name=\"pays\">\n        <option value=\"\">-- Choisissez un pays --</option>\n        <optgroup label=\"Europe\">\n          <option value=\"fr\">France</option>\n          <option value=\"be\">Belgique</option>\n          <option value=\"ch\">Suisse</option>\n        </optgroup>\n      </select>\n\n      <!-- Zone de texte multiligne -->\n      <textarea name=\"message\" rows=\"5\" cols=\"40\"\n                placeholder=\"Votre message...\"></textarea>\n\n      <!-- Champ caché (envoyé mais non affiché) -->\n      <input type=\"hidden\" name=\"token\" value=\"abc123\">\n\n      <!-- Boutons -->\n      <button type=\"submit\">Envoyer</button>\n      <button type=\"button\" onclick=\"alert('Clic!')\">Action JS</button>\n      <button type=\"reset\">Réinitialiser</button>\n    </form>\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-649.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-650.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-651.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-652.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-653.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-654.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "60-attributs-des-formulaires-et-s-curit",
    "title": "Attributs des formulaires et sécurité",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette dernière leçon liée aux formulaires HTML, nous allons discuter de l’importance de sécuriser ses formulaires et de toujours traiter les données envoyées par les utilisateurs et je vais vous présenter quelques attributs HTML qu’il peut s’avérer intéressant d’utiliser."
      },
      {
        "type": "h",
        "text": "Le problème des données utilisateurs"
      },
      {
        "type": "p",
        "text": "Il n’y a qu’une règle que vous devez absolument retenir concernant les formulaires HTML : il ne faut jamais faire confiance aux données envoyées par les utilisateurs. En effet, vous ne devez jamais vous attendre à ce que vos formulaires soient correctement remplis : certains utilisateurs vont faire des fautes d’inattention ou vont avoir la flemme de remplir tous les champs de votre formulaire tandis que d’autres, malveillants, vont essayer d’exploiter les failles de votre formulaire pour récupérer des données dans votre base de données ou pour tromper vos utilisateurs. Les mécanismes d’intrusion et de protection des formulaires sont relativement complexes pour quelqu’un qui n’a pas une vue d’ensemble sur les langages utilisés mais je vais essayer d’illustrer le problème et les solutions possibles le plus simplement possible. Reprenons le formulaire créé à la partie précédente par exemple. Rien n’empêche un utilisateur, dans ce formulaire, d’envoyer des valeurs aberrantes comme 2000 ans pour son âge ou des données de type invalide comme des éléments HTML à la place de son nom ou encore de renvoyer le formulaire à moitié ou complètement vide. Dans ces cas-là, les données reçues vont être inexploitables et ce n’est pas ce que nous voulons. De plus, ici, rien n’empêcherait un utilisateur malveillant d’injecter du code JavaScript dans notre formulaire pour ensuite essayer de tromper des utilisateurs ou encore pour tenter d’injecter le code malveillant dans notre base de données. Nous n’allons pas entrer dans les détails ici car c’est assez complexe et car vous ne pourrez pas comprendre sans connaitre le JavaScript mais grosso modo retenez qu’ici un utilisateur peut tout à fait envoyer du code dans vos champs de formulaire et que le code envoyé risque d’être exécuté à un moment ou à un autre de notre côté."
      },
      {
        "type": "h",
        "text": "Quelles solutions pour sécuriser nos formulaires ?"
      },
      {
        "type": "p",
        "text": "Ici, il va falloir faire la différence entre deux types d’utilisateurs qui vont être gérés de façons différentes : les utilisateurs maladroits qui vont envoyer des données invalides par mégarde et les utilisateurs malveillants qui vont tenter d’exploiter des failles de sécurité dans nos formulaires pour par exemple récupérer les données personnelles d’autres utilisateurs. Pour ce premier groupe d’utilisateurs qui ne sont pas mal intentionnés, la première action que nous allons pouvoir prendre va être d’ajouter des contraintes directement dans notre formulaire pour limiter les données qui vont pouvoir être envoyées. Pour cela, nous allons pouvoir utiliser des attributs HTML comme required, min et max que nous allons étudier dans la suite de la leçon et allons devoir faire le maximum pour préciser les bonnes valeurs dans l’attribut type de l’élément input à chaque fois. Nous allons ensuite également pouvoir tester que les données nous conviennent dès le remplissage d’un champ ou au moment de l’envoi du formulaire grâce au HTML ou au JavaScript (principalement) et bloquer l’envoi du formulaire si des données ne correspondent pas à ce qu’on attend. Tout cela ne va malheureusement pas être suffisant contre les utilisateurs malintentionnés pour la simple et bonne raison que n’importe qui peut neutraliser toutes les formes de vérification effectuées dans le navigateur. Pour cela, il suffit par exemple de désactiver l’usage du JavaScript dans le navigateur et d’inspecter le formulaire pour supprimer les attributs limitatifs avant l’envoi. Contre les utilisateurs malveillants, nous allons donc également devoir vérifier les données après l’envoi du formulaire et neutraliser les données potentiellement dangereuses. Nous allons effectuer ces vérifications en PHP, côté serveur. Ces deux niveaux de vérifications (dans le navigateur / côté serveur) doivent être implémentés lors de la création de formulaires. En effet, n’utiliser qu’une validation dans le navigateur laisse de sérieuses failles de sécurité dans notre formulaire puisque les utilisateurs malveillants peuvent désactiver ces vérifications. N’effectuer qu’une série de vérifications côté serveur, d’autre part, serait également une très mauvaise idée d’un point de vue expérience utilisateur puisque ces vérifications sont effectuées une fois le formulaire envoyé. Ainsi, que faire si des données aberrantes mais pas dangereuses ont été envoyées par un utilisateur maladroit ? Supprimer les données ? Le recontacter pour qu’il soumette à nouveau le formulaire ? Il est bien plus facile dans ce cas de vérifier directement les données lorsqu’elles sont saisies dans le navigateur et de lui faire savoir si une donnée ne nous convient pas. Vérification et validation des données de formulaire dans le navigateur Les processus de validation des données que nous allons pouvoir mettre en place dans le navigateur vont s’effectuer avant ou au moment de la tentative d’envoi du formulaire. L’objectif va être ici de bloquer l’envoi du formulaire si certains champs ne sont pas correctement remplis et de demander aux utilisateurs de remplir correctement les champs invalides. Une nouvelle fois, cette série de validations va s’adresser aux utilisateurs étourdis / flemmards mais ne va pas bloquer les utilisateurs malveillants car n’importe quel utilisateur peut supprimer à la main des parties de code HTML en inspectant le code de la page et désactiver le JavaScript dans son navigateur. La première chose à faire ici va déjà être de s’assurer qu’on a bien précisé les bons types d’input pour chaque champ de formulaire car la plupart des navigateurs récents proposent des systèmes de contrôle. Par exemple, les navigateurs bloquent aujourd’hui l’envoi de code JavaScript et empêchent l’envoi du formulaire selon que certaines données ne soient pas de la forme attendue. Essayez par exemple de rentrer un prénom dans le champ de formulaire demandant un email : votre navigateur devrait renvoyer une erreur et vous demander d’ajouter un signe @ dans vos données. En plus de ces vérifications faites par le navigateur, le HTML propose aujourd’hui des options de validation relativement puissantes. La validation des données en HTML va principalement passer par l’ajout d’attributs dans les éléments de formulaire. Nous allons ainsi pouvoir utiliser les attributs suivants :"
      },
      {
        "type": "h",
        "text": "Attribut         Définition"
      },
      {
        "type": "p",
        "text": "size Permet de spécifier le nombre de caractères dans un champ Permet de spécifier le nombre minimum de caractères dans un minlength champ Permet de spécifier le nombre maximum de caractères dans un maxlength champ Permet de spécifier une valeur minimale pour un champ de type min number ou date Permet de spécifier une valeur maximale pour un champ de type max number ou date Permet de définir un multiple de validité pour un champ acceptant step des donnés de type nombre ou date. En indiquant step=\"4\" , les nombres valides seront -8, -4, 0, 4, 8, etc. Permet d’activer l’auto complétion pour un champ : si un utilisateur a autocomplete déjà rempli un formulaire, des valeurs lui seront proposées automatiquement lorsqu’il va commencer à remplir le champ Permet de forcer le remplissage d’un champ. Le formulaire ne pourra required pas être envoyé si le champ est vide Permet de préciser une expression régulière. La valeur du champ pattern devra respecter la contrainte de la regex pour être valide Note : les expressions régulières constituent un langage à part. Elles vont consister en la création de « motifs » ou de chaine de caractères constituées de caractères à la signification spéciale et qui vont servir à décrire un ensemble de chaines de caractères possibles. Les expressions régulières sont utilisées conjointement avec de nombreux langages informatiques pour comparer des données envoyées avec le motif attendu et les refuser si elles ne correspondent pas. Bien évidemment, l’objet de cette leçon n’est pas de faire un cours sur les expressions régulières. Reprenons notre formulaire précédent en se concentrant sur certains champs en particulier et ajoutons quelques contraintes sur les données que l’on souhaite recevoir :"
      },
      {
        "type": "list",
        "items": [
          "Les nom, prénom, adresse mail et mot de passe sont désormais obligatoires",
          "Les nom et prénom doivent faire au moins 2 caractères et maximum 25 caractères"
        ]
      },
      {
        "type": "list",
        "items": [
          "L’âge doit être compris entre 16 et 99 ans ;",
          "La description de l’expérience professionnelle ne doit pas excéder 500 caractères"
        ]
      },
      {
        "type": "list",
        "items": [
          "Le mot de passe doit contenir au moins 8 caractères."
        ]
      },
      {
        "type": "p",
        "text": "Essayez d’envoyer le formulaire ci-dessus en remplissant mal les différents champs : le navigateur va vous indiquer les différentes erreurs et va bloquer l’envoi du formulaire tant que vous ne les aurez pas corrigées. Vous pouvez noter que l’attribut required possède une valeur muette : il n’est pas nécessaire de la fournir (car elle est unique) et il suffit donc de préciser le nom de l’attribut pour rendre le remplissage du champ obligatoire."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head><meta charset=\"UTF-8\"><title>Attributs des formulaires</title></head>\n  <body>\n    <form action=\"/inscription\" method=\"POST\">\n\n      <!-- required : champ obligatoire -->\n      <input type=\"text\" name=\"nom\" required placeholder=\"Nom*\">\n\n      <!-- minlength / maxlength : longueur min/max -->\n      <input type=\"text\" name=\"prenom\" minlength=\"2\" maxlength=\"50\"\n             placeholder=\"Prénom (2-50 caractères)\">\n\n      <!-- min, max, step pour les nombres -->\n      <input type=\"number\" name=\"age\" min=\"18\" max=\"120\" step=\"1\" value=\"25\">\n\n      <!-- pattern : expression régulière de validation -->\n      <input type=\"text\" name=\"codePostal\"\n             pattern=\"[0-9]{5}\"\n             title=\"5 chiffres requis\"\n             placeholder=\"Code postal (12345)\">\n\n      <!-- disabled : désactivé (non envoyé) -->\n      <input type=\"text\" name=\"id\" value=\"12345\" disabled>\n\n      <!-- readonly : en lecture seule (envoyé) -->\n      <input type=\"text\" name=\"reference\" value=\"REF-001\" readonly>\n\n      <!-- autocomplete : activer/désactiver l'autocomplétion -->\n      <input type=\"email\" name=\"email\" autocomplete=\"email\">\n      <input type=\"new-password\" name=\"mdp\" autocomplete=\"new-password\">\n\n      <!-- autofocus : focus automatique au chargement -->\n      <input type=\"text\" name=\"recherche\" autofocus>\n\n      <!-- multiple : plusieurs valeurs (email, file) -->\n      <input type=\"email\" name=\"emails\" multiple>\n      <input type=\"file\" name=\"fichiers\" multiple>\n\n      <!-- Sécurité CSRF : toujours utiliser un token -->\n      <input type=\"hidden\" name=\"csrf_token\" value=\"token-securise-genere-cote-serveur\">\n\n      <button type=\"submit\">S'inscrire</button>\n    </form>\n\n    <!--\n    SÉCURITÉ CÔTÉ SERVEUR (INDISPENSABLE) :\n    1. Toujours valider les données côté serveur (jamais faire confiance au client)\n    2. Échapper les sorties HTML pour éviter les XSS\n    3. Utiliser des requêtes préparées pour éviter les injections SQL\n    4. Valider les fichiers uploadés (type, taille, contenu)\n    5. Utiliser HTTPS pour chiffrer les données en transit\n    -->\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-655.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-656.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "76-s-mantique-et-l-ments-structurants-du-ht",
    "title": "Sémantique et éléments structurants du HTML",
    "blocks": [
      {
        "type": "p",
        "text": "Dans cette leçon, nous allons repréciser le rôle du HTML et insister sur l’importance d’utiliser toujours les éléments les plus cohérents pour définir nos différents contenus. Nous allons également en profiter pour présenter différents éléments introduits avec le HTML5 et qui vont justement nous permettre de donner du sens aux différentes parties de nos pages ou de préciser la nature de certains contenus."
      },
      {
        "type": "h",
        "text": "Le HTML et la sémantique"
      },
      {
        "type": "p",
        "text": "L’objectif principal du HTML est de structurer du contenu ou de lui donner du sens. En effet, les robots et programmes ne parlent pas la même langue que nous, ne possèdent pas nos yeux ni notre intelligence pour pouvoir distinguer des contenus et les comprendre par eux-mêmes. C’est la raison pour laquelle nous utilisons le HTML puisque les différents robots et programmes vont très bien le comprendre. Cela va ainsi permettre aux moteurs de recherche et aux navigateurs de « lire » nos pages et de « comprendre » ce que représente chaque type de contenu pour les afficher au mieux dans le cas d’un navigateur ou pour pouvoir les présenter à des gens effectuant une recherche sur un sujet que notre page traite dans le cas d’un moteur de recherche. Grâce au HTML, nous allons pouvoir marquer nos différents contenus avec de nombreux éléments qui vont permettre de leur donner du sens. Utiliser les « bons » éléments à chaque fois et ceux qui font le plus de sens va ainsi être essentiel pour que notre page soit la plus lisible et la plus compréhensible possible pour les différents robots et programmes. Le HTML5 nous offre justement une série de nouveaux éléments dit « structurants » et qui vont nous permettre de préciser le sens de certains contenus. Ces éléments sont dits « structurants » puisqu’ils ont une visée purement sémantique. Certains de ces éléments vont notamment pouvoir être utilisés à la place des classiques div et span qui sont deux conteneurs génériques c’est-à-dire des éléments qui n’apportent aucun sens au contenu."
      },
      {
        "type": "h",
        "text": "Liste et description des éléments structurants"
      },
      {
        "type": "p",
        "text": "Le HTML5 apporte les éléments structurants suivants :"
      },
      {
        "type": "h",
        "text": "Nom de"
      },
      {
        "type": "p",
        "text": "Description l’élément header Représente l’en-tête ou le haut d’une page nav Représente un menu de navigation dans une page main Représente le contenu principal de l’élément body Représente une section dans une page, c’est-à-dire un groupement section thématique de contenu Représente une partie de page qui se suffit à elle-même, comme un article post sur un blog par exemple aside Représente une partie de contenu non lié au reste footer Représente le pied d’une page"
      },
      {
        "type": "h",
        "text": "L’élément header"
      },
      {
        "type": "p",
        "text": "L’élément header représente l’en-tête de nos pages. Cet élément va généralement contenir le logo du site et le menu principal de navigation. Dans le cas d’un blog, si nous avons un article de blog qui est placé dans un élément article, on pourra également utiliser un élément header dans l’élément article et y placer les informations relatives à l’auteur, au temps de lecture, etc."
      },
      {
        "type": "h",
        "text": "L’élément nav"
      },
      {
        "type": "p",
        "text": "L’élément nav représente un menu de navigation. Nous allons par exemple pouvoir utiliser cet élément pour entourer le menu de nos pages. Cela va permettre d’indiquer aux navigateurs et moteurs de recherche que notre élément ul (utilisé pour créer un menu) n’est pas qu’une liste mais bien un menu de navigation."
      },
      {
        "type": "h",
        "text": "L’élément main"
      },
      {
        "type": "p",
        "text": "L’élément main représente le contenu principal ou « majoritaire » du body. La zone de contenu principale d’un document comprend un contenu unique à ce document et exclut le contenu répété sur un ensemble de documents, tels que des liens de navigation de site, des informations de copyright, des logos de site et des bannières. La spécification officielle (HTML5.1) indique que l’élément main ne doit pas être imbriqué dans un autre élément structurant et qu’on ne doit utiliser qu’un élément main par page. Cependant, ces limitations sont levées dans le Living Standard (qui possède un peu d’avance sur la spéc officielle)."
      },
      {
        "type": "h",
        "text": "L’élément article"
      },
      {
        "type": "p",
        "text": "L’élément article représente une partie indépendante d’une page. Nous utiliserons cet élément pour entourer du contenu qui pourrait être extrait de notre page et distribué ailleurs tout en continuant à faire du sens. Imaginez par exemple une page catégorie d’un blog qui affiche les différents articles de la catégorie. Chacun des différents articles n’a pas besoin des autres ou du reste de la page pour faire du sens et pourrait tout à fait être extrait de la page et intégré sur un autre site et rester tout à fait lisible. Dans ce cas-là, il serait donc intéressant de placer chaque article dans un élément article."
      },
      {
        "type": "h",
        "text": "L’élément section"
      },
      {
        "type": "p",
        "text": "L’élément section représente à nouveau une partie d’une page cohérente mais qui ne va pas forcément faire du sens si on l’extrait seule de la page pour l’intégrer ailleurs. L’élément section est à mi-chemin entre les éléments article et div et nous pourrons nous en servir pour organiser nos pages. Un cas classique d’utilisation de section est le cas d’une page de présentation d’une entreprise. Sur ce type de pages, il y a généralement une partie dédiée à la présentation de l’activité de l’entreprise, une autre partie pour l’équipe, etc. Nous pourrons ici encadrer chaque partie avec un élément section pour les séparer les unes des autres. Il va être tout à fait possible d’inclure un ou plusieurs éléments section dans un élément article si on souhaite diviser le contenu de notre article en plusieurs parties. Notez que nous allons également pouvoir faire le contraire, c’est-à-dire placer un ou plusieurs éléments article dans un élément section. Pour des raisons de respect de la sémantique nous éviterons cependant d’imbriquer les éléments dans cet ordre."
      },
      {
        "type": "h",
        "text": "L’élément aside"
      },
      {
        "type": "p",
        "text": "L’élément aside permet d’indiquer un contenu en marge du reste de la page, c’est-à-dire différent du reste de la page. Imaginons par exemple que nous ayons un blog et que chaque article de blog se trouve dans un élément article. Dans nos articles, nous affichons des publicités. Les publicités n’ont aucune cohérence avec le contenu de l’article (ou tout au moins ne sont pas utiles à l’article). Nous pourrons donc les placer dans un élément aside pour le signaler aux moteurs de recherche et autres types de robots."
      },
      {
        "type": "h",
        "text": "L’élément footer"
      },
      {
        "type": "p",
        "text": "L’élément footer va avoir un rôle et une signification sémantique identiques à l’élément header mais pour le pied de page. Comme son nom l’indique, nous utiliserons cet élément pour entourer les informations de pied de page (notice de copyright, menu de navigation bas, etc.)."
      },
      {
        "type": "h",
        "text": "Utilisation des éléments HTML structurants"
      },
      {
        "type": "p",
        "text": "Nous allons donc en pratique utiliser nos éléments structurants pour mieux structurer nos pages et apporter du contexte et plus de sens aux différents objets dans nos pages. Voici par exemple une utilisation des éléments structurants HTML. Le schéma que je vous propose ici est un schéma d’une page simple et relativement classique : Et voici une représentation imagée de la structure HTML ci-dessus (j’ai bien évidemment positionné mes éléments en CSS et leur ai donné des couleurs pour arriver à cela : Autres éléments utilisés pour renforcer la sémantique d’une page Les éléments suivants ne vont pas servir à « structurer » une page en soi mais vont nous permettre de donner du sens à certains types de contenus ou de données. Nous allons ici étudier les éléments suivants :"
      },
      {
        "type": "list",
        "items": [
          "time ;",
          "address ;",
          "figure ;",
          "figcaption."
        ]
      },
      {
        "type": "h",
        "text": "L’élément time"
      },
      {
        "type": "p",
        "text": "L’élément time va pouvoir représenter soit une heure de la journée soit une date complète. Il faut savoir que les dates sont très difficiles à analyser pour les robots car la plupart des auteurs utilisent des syntaxes différentes dans l’écriture d’un moment de la journée ou d’une date. Pour cette raison, nous allons ajouter un attribut datetime à l’élément time. Nous allons ensuite simplement passer une date en valeur de cet attribut en respectant le format yyyy- mm-dd hh:mmTIMEZONE. La date devra être au format 24h et le timezone va être exprimé par rapport à GMT (on écrira donc +0100 pour Paris par exemple). Cette date pourra être récupérée et affichée à côté de l’extrait dans la liste des résultats de Google par exemple."
      },
      {
        "type": "h",
        "text": "L’élément address"
      },
      {
        "type": "p",
        "text": "L’élément address représente des informations de contact. On pourra par exemple l’utiliser pour encadrer l’adresse mail d’un auteur dans le cas d’un blog."
      },
      {
        "type": "h",
        "text": "Les éléments figure et figcaption"
      },
      {
        "type": "p",
        "text": "Nous connaissons déjà les deux derniers éléments structurants qui sont les éléments figure qui représente une figure (photo, illustration, etc.) et figcaption qui va nous servir à ajouter une légende à un élément figure."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>HTML Sémantique</title>\n  </head>\n  <body>\n\n    <!-- header : en-tête de la page ou d'une section -->\n    <header>\n      <nav>\n        <a href=\"/\">Accueil</a>\n        <a href=\"/services\">Services</a>\n        <a href=\"/contact\">Contact</a>\n      </nav>\n    </header>\n\n    <!-- main : contenu principal (un seul par page) -->\n    <main>\n\n      <!-- article : contenu autonome (article, post de blog) -->\n      <article>\n        <header>\n          <h1>Titre de l'article</h1>\n          <time datetime=\"2024-06-15\">15 juin 2024</time>\n          <p>Par <address>Pierre Dupont</address></p>\n        </header>\n        <p>Contenu de l'article...</p>\n        <footer>\n          <p>Tags : <a href=\"#\">HTML</a>, <a href=\"#\">Web</a></p>\n        </footer>\n      </article>\n\n      <!-- section : section thématique (avec un titre) -->\n      <section>\n        <h2>Nos Services</h2>\n        <p>...</p>\n      </section>\n\n      <!-- aside : contenu secondaire (sidebar, publicité) -->\n      <aside>\n        <h3>Articles récents</h3>\n        <ul>\n          <li><a href=\"#\">Article 1</a></li>\n          <li><a href=\"#\">Article 2</a></li>\n        </ul>\n      </aside>\n\n    </main>\n\n    <!-- footer : pied de page -->\n    <footer>\n      <p>&copy; 2024 MonSite. Tous droits réservés.</p>\n    </footer>\n\n    <!-- Autres éléments sémantiques -->\n    <!-- <nav>    : zone de navigation principale -->\n    <!-- <figure> : image avec légende -->\n    <!-- <figcaption> : légende de figure -->\n    <!-- <details> / <summary> : contenu dépliable -->\n    <!-- <dialog> : boîte de dialogue modale -->\n\n    <details>\n      <summary>Cliquez pour en savoir plus</summary>\n      <p>Contenu masqué qui s'affiche au clic.</p>\n    </details>\n\n  </body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-842.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-843.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-844.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "77-exercice-6-cr-ation-d-un-site-personnel-",
    "title": "EXERCICE #6 : Création d’un site personnel monopage",
    "blocks": [
      {
        "type": "p",
        "text": "monopage Dans ce nouvel exercice, je vous propose de créer une page complète en HTML et en CSS qui sera une page de CV. Pour cela, nous allons utiliser les dernières notions que nous avons étudié ensemble comme le flexbox, le responsive design et les éléments HTML5 structurants. Réalisation d’un projet en HTML et CSS : par où commencer ? Lorsqu’on est face à un projet qui commence à être complexe, la difficulté principale est bien souvent de savoir par où commencer. Cela est d’autant plus vrai lorsqu’on n’a pas beaucoup d’expérience en développement. La meilleure façon de faire, selon moi, est de commencer par réfléchir aux différents langages qu’on va devoir utiliser et d’identifier les points les plus complexes du projet. Ensuite, l’idée va être de découper le projet dans son ensemble en sous-projets ou en modules qu’on attaquera les uns après les autres. Dans le cas présent, cela reste relativement simple car nous n’avons qu’une page à créer et que nous nous contentons de n’utiliser que du HTML et du CSS. La réflexion principale va ici se faire sur le design général de la page. Si on crée une page de CV, nous allons déjà vouloir insérer une photographie avec un paragraphe de présentation et des informations de contact. Ensuite, nous voudrons présenter nos expériences professionnelles, puis notre formation académique, nos compétences et enfin finir avec nos centres d’intérêt. Nous allons commencer avec la version mobile de notre CV qui sera la version standard. Pour créer cette version, nous allons utiliser le modèle des boites flexibles en choisissant une orientation en colonne principalement. Voici le résultat auquel on souhaite parvenir :"
      },
      {
        "type": "h",
        "text": "Structure HTML de notre page de CV"
      },
      {
        "type": "p",
        "text": "Comme d’habitude, nous commençons par créer la structure HTML avant de définir les styles particuliers en CSS. Nous allons déjà ici commencer avec la structure minimale d’une page valide et allons également renseigner le meta name=\"viewport\" et lier notre fichier HTML à un fichier CSS. Ensuite, nous allons créer une zone d’en-tête pour notre page avec un élément header et allons simplement placer le titre principal de notre page de CV ici. Sous notre header, nous voulons créer une première section de présentation pour notre CV. Cette section va contenir :"
      },
      {
        "type": "list",
        "items": [
          "Un bloc contenant une photo de profil ;",
          "Un bloc contenant un paragraphe de présentation et un lien de téléchargement du"
        ]
      },
      {
        "type": "p",
        "text": "CV au format PDF ;"
      },
      {
        "type": "list",
        "items": [
          "Un bloc d’informations de contact et des liens vers nos réseaux sociaux."
        ]
      },
      {
        "type": "p",
        "text": "Ici, je vous propose la structure suivante : On commence par créer un premier bloc avec un div dans lequel on place notre photo de profil. Ensuite, on déclare deux nouveaux div pour chacun de nos deux blocs de section pour pouvoir ensuite les mettre en forme. Notre premier bloc de contenu possède une structure très simple : un titre, un paragraphe et un lien. La structure de notre deuxième bloc est un peu plus complexe : on place les différentes informations de contact dans différents div class=\"contact-flex\". L’idée va être de créer des conteneurs flexibles pour aligner les éléments. On crée également un bloc avec nos icônes sociales qui seront cliquables (je laisse ici les liens vides). A ce stade, je pense qu’il est important que vous notiez une chose : ici, je vous propose une structure en sachant que j’ai déjà réalisé l’exercice. En pratique, bien évidemment, on ne trouvera quasiment jamais la structure optimale du premier coup et serons souvent obligés de revenir sur le code HTML pour l’ajuster. Pour éviter de trop nombreux allers-retours dans le code et de vous retrouver au final avec un code brouillon, je ne saurais que trop vous recommander de bien réfléchir à ce que vous souhaitez obtenir avant de commencer à coder. Sous cette première section de présentation, nous allons avoir deux sections qui vont avoir une structure similaire : première une section décrivant nos expériences professionnelles et une seconde avec notre parcours scolaire. Chacune de ces deux sections va être divisée en blocs, chaque bloc représentant une expérience. Chaque bloc expérience va suivre le même schéma : un logo, des informations « méta » par rapport à l’expérience et une description de celle-ci. Je vous propose ici la structure suivante : Pour notre quatrième section présentant nos compétences, nous allons utiliser un système de barres plus ou moins remplies qui vont indiquer notre pourcentage de maitrise de la compétence en question. Ici, je vais vous proposer deux designs différents en CSS. Dans tous les cas, la structure de cette section va ressembler à notre bloc d’informations de contact de notre première section. Enfin, notre dernière section va nous permettre de présenter nos centres d’intérêt à travers des vignettes. Je vais également en profiter pour rajouter un pied de page à mon CV pour avoir un effet de symétrie avec l’en-tête."
      },
      {
        "type": "h",
        "text": "Styles CSS de la version mobile de notre CV"
      },
      {
        "type": "p",
        "text": "Comme on l’a décidé précédemment, nous allons commencer par créer les styles de la version mobile de notre CV qui seront donc les styles standards puis allons ensuite utiliser les Media Queries pour les styles de la version bureau. Nous allons déjà ici nous occuper d’effectuer un reset CSS des marges internes et externes sur tous nos éléments pour avoir le même comportement dans tous les navigateurs et pouvoir les positionner précisément ensuite. Nous allons également en profiter pour définir quelques styles généraux comme la police d’écriture, l’alignement par défaut des textes, la façon dont va être calculée la taille des éléments ou encore l’affichage des éléments de lien. Ensuite, nous allons nous occuper de régler les styles du header et du footer qui sont les parties les plus simples de notre CV. En version mobile, on va vouloir que le CV s’affiche en pleine page, c’est-à-dire que les différents blocs occupent tout l’espace en largeur et allons ensuite centrer les éléments à l’intérieur de façon à ce qu’on ait un espace vide égal à 5% de la largeur totale de la page de chaque côté. Pour faire cela, on va demander aux éléments dans nos blocs de n’occuper que 90% de la largeur des blocs qui eux occuperont 100% de la largeur disponible et allons centrer les éléments dans les blocs. Nous allons ensuite définir les styles généraux communs à toutes nos sections. Nos éléments section vont tous être des conteneurs flexibles et nous allons choisir l’axe horizontal comme axe principal. Nous allons également aligner les éléments au centre selon l’axe principal (l’axe horizontal donc) avec justify-content : center. Ensuite, on va définir des styles purement esthétiques pour nos sections : couleur de fond, ombres, etc. Nos éléments section sont des conteneurs flexibles. Cela signifie que tous leurs enfants directs sont des éléments flexibles. Pour notre première section, nos 3 div class=\"photo- profil\", div class=\"prez\" et div class=\"contact\" sont donc des éléments flexibles. Ces trois blocs occupent par défaut 90% de l’espace disponible en largeur dans le conteneur avec width: 90% tant qu’aucun flex-basis n’est défini. De plus, ils sont alignés au centre selon leur axe principal qui est l’axe horizontal grâce à justify-content : center. Il va suffire d’ajouter un text-align : center à notre premier div pour centrer notre photo dans la section. D’un point de vue esthétique, on va régler les dimensions de la photo sur 150*150px et allons lui attribuer une bordure blanche ainsi et allons créer un effet d’ombre autour. Ensuite, on applique un border-radius égal à la moitié de ses dimensions, ce qui aura pour effet « d’arrondir » notre image. Ici, nous allons également vouloir que notre image se trouve à cheval entre notre header et notre première section. Pour réaliser cela de manière simple, nous allons devoir utiliser un petit trick CSS qui consiste à attribuer une marge haute négative à l’image pour la faire sortir de son conteneur. Pour notre premier bloc de présentation, nous allons nous contenter d’ajouter une bordure basse et de mettre en forme notre lien de téléchargement. Notre deuxième bloc contenant nos informations de contact va subir une mise en forme un peu plus complexe. L’idée ici va être d’aligner les informations de contact les unes sous les autres. Pour cela, on va appliquer un display : flex à nos éléments portant la classe contact-flex en définissant à nouveau l’axe horizontal comme axe principal. On utilise align-items: center pour centrer les éléments en hauteur au cas où certains prendraient plusieurs lignes. On cible ensuite le premier paragraphe de chaque conteneur flexible avec .contact-flex p:first-child pour lui attribuer une largeur de base égale à 40% du conteneur flexible et le dernier avec .contact-flex p:last-child pour lui attribuer une largeur de base égale à 60% du conteneur flexible. Cela va permettre aux différents couples d’informations d’être bien alignés les uns sous les autres. On transforme également notre conteneur div class=\"social\" en conteneur flexible. L’axe principal est par défaut l’axe horizontal. On choisit de repartir l’espace libre selon l’axe principal dans le conteneur équitablement entre les différents éléments avec justify- content: space-around. Ici, on règle manuellement la taille des différents éléments flexibles en définissant explicitement une hauteur et une largeur mais pas de flex-basis. Nos deuxième et troisième sections de CV vont recevoir la même mise en forme. Ici, chaque expérience est composée de trois blocs : une image, des informations importantes et une description. Nous allons transformer nos conteneurs div class=\"exp\" qui contiennent une expérience chacun en conteneurs flexibles et allons définir l’axe horizontal comme axe principal. Nous allons ensuite demander à notre premier élément flexible qui est notre conteneur d’image de n’occuper que 25% de la largeur du conteneur jusqu’à 100px. On règle également la largeur de notre image en soi à 100% de la taille du conteneur. Notre deuxième élément flexible (exp-info) occupera lui 70% de la largeur et on définit une marge à gauche auto ce qui signifie que la marge va absorber l’espace restant dans le conteneur. Notre dernier élément flexible va occuper par défaut tout l’espace disponible. On va ensuite également mettre en forme l’intérieur de nos div class=\"exp-info\". Pour cela, on les transforme également en conteneur flexible et on choisit l’axe vertical comme axe principal. Cela va avoir pour effet d’afficher les différentes informations en colonne. Pour la section compétence de notre CV HTML et CSS, je vais vous proposer deux designs différents. Nous allons appliquer le premier design au bloc de compétences professionnelles et le deuxième design au bloc de compétences personnelles. Le niveau de maitrise de nos compétences va être représenté par une barre plus ou moins remplie et plus ou moins verte. Pour nos compétences professionnelles, nous allons vouloir placer les barres à côté des compétences tandis que pour les compétences personnelles nous allons placer les barres en dessous. On va donc commencer par transformer nos div class=\"comp\" en conteneurs flexibles et définir l’axe horizontal comme axe principal. Ensuite, on va vouloir que les textes décrivant les compétences occupent 40% de l’espace pour les compétences professionnelles et que le conteneur de barre occupe 60% de l’espace du conteneur. Ensuite, nous allons devoir créer notre barre en soi. Pour cela, on utilise un display : block pour nos span et une hauteur de 100% afin que les barres aient bien la même hauteur que les paragraphes. On applique finalement la couleur sur une certaine largeur du conteneur grâce aux classes c85, c90, etc. Pour les barres, on pense bien à répliquer le border-radius du conteneur lorsqu’elles touchent un angle du conteneur afin d’avoir le meilleur rendu possible. On va également appliquer un display : flex aux conteneurs de nos compétences personnelles, toujours en choisissant l’axe horizontal comme axe principal et en laissant la possibilité aux éléments flexibles de passer à la ligne. Ici, on utilise également justify-content: space-between pour coller le texte de la compétence contre un bord du conteneur et le pourcentage d’acquisition contre le bord opposé. On passe un flex: 0 0 100% à nos conteneurs de barre afin qu’ils occupent tout l’espace disponible et passe de fait à la ligne. Ici, on veut créer une barre moins épaisse que précédemment. On définit donc la hauteur du conteneur comme étant égale à la moitié de la hauteur de nos paragraphes. On réutilise ensuite les barres créées précédemment. Pour la dernière section de notre CV présentant nos centres d’intérêt, nous allons vouloir afficher des vignettes avec une légende en dessous et afficher deux vignettes par ligne en centrant le tout. On va un flex: 0 1 50% à nos différents éléments flexibles figure et également les transformer en conteneur flex en choisissant cette fois-ci l’axe vertical comme axe principal et en centrant les éléments selon leur axe secondaire, c’est-à-dire horizontalement. Finalement, on définit une taille fixe pour nos différentes vignettes ainsi qu’un border- radius : 50% afin que nos images apparaissent comme rondes."
      },
      {
        "type": "h",
        "text": "Styles CSS de la version bureau de notre CV"
      },
      {
        "type": "p",
        "text": "Pour la version bureau de notre CV HTML et CSS, nous allons pouvoir nous permettre de placer certains éléments de section côte-côte plutôt que les uns en dessous des autres. Pour créer cette version bureau, nous allons utiliser la règle CSS @media screen and (min- width: 980px){}. Les styles définis dans cette règle vont donc s’appliquer pour tous les appareils disposant d’un écran et lorsque la fenêtre est plus large que 980px. Ici, on va déjà commencer par modifier la largeur de nos sections afin qu’elles n’occupent que 80% de la largeur de la page. On en profite également pour aligner notre titre principal sur la nouvelle largeur des sections et pour définir une couleur pour les liens au survol. L’axe principal de nos sections est encore l’axe horizontal. Notre photo est toujours centrée car le div qui la contient occupe 90% de la largeur de la section, qu’il est lui-même centré et qu’on lui a appliqué un text-align : center. Nous allons cette fois-ci vouloir que les deux blocs de contenu de la première section de notre CV s’affichent côte-à-côte. On définit donc un flex: 0 0 45% pour chacun et des marges gauche pour le premier et droite pour le second automatique afin qu’elles absorbent l’espace restant. Ici, le flex-basis défini va être prioritaire que la largeur des div. On remplace également la bordure horizontale de séparation de nos deux blocs par une bordure verticale entre les deux et on en profite pour appliquer des styles à notre lien de téléchargement et notamment au survol de la souris. Pour nos deux sections suivantes, on se contente de réduire la taille de base des logos dans la section et d’augmenter la taille prise pas les informations. On en profite également pour cette fois-ci aligner la description sous les informations de chaque expérience. On ne touche pas au design de la section compétence qui nous convient très bien en l’état. Finalement, on place chacun des blocs représentant nos centres d’intérêt côte-à-côte en définissant un flex: 0 1 25% pour chacun de nos éléments figure."
      },
      
      {
        "type": "code",
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Pierre Dupont - Développeur Web</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <header id=\"header\">\n    <nav>\n      <div class=\"logo\">Pierre.dev</div>\n      <ul>\n        <li><a href=\"#accueil\">Accueil</a></li>\n        <li><a href=\"#competences\">Compétences</a></li>\n        <li><a href=\"#projets\">Projets</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"accueil\" class=\"hero\">\n      <h1>Bonjour, je suis <span class=\"highlight\">Pierre Dupont</span></h1>\n      <p class=\"sous-titre\">Développeur Web Full Stack</p>\n      <a href=\"#projets\" class=\"btn-cta\">Voir mes projets</a>\n    </section>\n\n    <section id=\"competences\">\n      <h2>Mes Compétences</h2>\n      <div class=\"grille-competences\">\n        <div class=\"competence\"><span>HTML5</span></div>\n        <div class=\"competence\"><span>CSS3</span></div>\n        <div class=\"competence\"><span>JavaScript</span></div>\n        <div class=\"competence\"><span>React</span></div>\n        <div class=\"competence\"><span>Node.js</span></div>\n        <div class=\"competence\"><span>SQL</span></div>\n      </div>\n    </section>\n\n    <section id=\"projets\">\n      <h2>Mes Projets</h2>\n      <div class=\"grille-projets\">\n        <article class=\"carte-projet\">\n          <h3>Application Todo</h3>\n          <p>Application de gestion de tâches en JavaScript vanilla.</p>\n          <a href=\"#\" class=\"btn\">Voir le projet</a>\n        </article>\n        <article class=\"carte-projet\">\n          <h3>Site E-commerce</h3>\n          <p>Boutique en ligne avec React et Node.js.</p>\n          <a href=\"#\" class=\"btn\">Voir le projet</a>\n        </article>\n      </div>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Me Contacter</h2>\n      <form>\n        <input type=\"text\" placeholder=\"Votre nom\" required>\n        <input type=\"email\" placeholder=\"Votre email\" required>\n        <textarea rows=\"5\" placeholder=\"Votre message\"></textarea>\n        <button type=\"submit\" class=\"btn-cta\">Envoyer</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2024 Pierre Dupont. Tous droits réservés.</p>\n  </footer>\n</body>\n</html>"
},
            { "type": "image", "src": "images/htmlcss/img-845.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-846.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-847.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-848.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-849.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-850.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-851.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-852.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-853.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-854.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-855.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-856.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-857.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-858.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-859.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-860.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-861.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-862.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-863.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-864.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-865.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-866.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-867.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-868.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-869.png", "alt": "Illustration du cours HTML" },
      { "type": "image", "src": "images/htmlcss/img-870.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "💡 Enrichi depuis tes notes",
        "text": "Contenu intégré depuis le cours complet HTML/CSS de ta formation."
      }
    ]
  },
  {
    "id": "88-conclusion-du-cours",
    "title": "Conclusion du cours",
    "blocks": [
      {
        "type": "p",
        "text": "Nous avons désormais fait le tour des notions à connaitre en HTML et en CSS. Vous connaissez désormais le rôle de chacun de ces deux langages et savez les utiliser à bon escient. Vous êtes capables d’utiliser les bons éléments HTML pour donner le plus de sens possible à vos différents contenus et savez créer des design complexes et adapter vos pages selon l’écran de vos visiteurs. Il ne vous reste désormais qu’une chose à faire : pratiquer le plus possible. En effet, je suis de ceux qui sont persuadés qu’on n’apprend véritablement à coder qu’en pratiquant et qu’en étant confronté aux difficultés et cela est un processus long. Par de panique donc si vous ne vous sentez pas encore tout à fait prêt pour gérer un projet de A à Z : c’est tout à fait normal. Il faut du temps et il faut surtout répéter les mêmes opérations plusieurs fois pour créer des automatismes. De plus, si vous voulez devenir un développeur à part entière, vous n’allez pas pouvoir vous contenter de ne connaitre que le HTML et le CSS mais allez également devoir découvrir, comprendre et apprendre à utiliser d’autres langages comme le JavaScript par exemple si vous souhaitez vous orienter plutôt sur du développement « front side » ou « côté client » ou le PHP et un langage de gestion de bases de données si vous êtes plutôt attiré par le développement « back side » ou « côté serveur ». Connaitre et comprendre un ensemble varié de langages de programmation différents vous permettra également de bien comprendre comment fonctionnent les différents langages entre eux et le rôle de chacun dans un site web, vous donnant par la même une bien meilleure vue d’ensemble et une bien meilleure approche du code dans vos projets futurs."
      },
      
            { "type": "image", "src": "images/htmlcss/img-975.png", "alt": "Illustration du cours HTML" },
{
        "type": "note",
        "variant": "success",
        "title": "✅ Cours HTML terminé !",
        "text": "Bravo ! Vous maîtrisez maintenant les bases du HTML : structure des pages, balises sémantiques, liens, images, tableaux, formulaires et accessibilité. La prochaine étape est d'approfondir le CSS pour la mise en forme et JavaScript pour l'interactivité."
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
