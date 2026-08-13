import type { Section, SubSection } from "../types";

// ── Contenu fusionné depuis htmlCourse.ts ─────────────────────────────────────
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

// ── Contenu fusionné depuis htmlFrontend.ts ─────────────────────────────────────
export const htmlFrontend: SubSection[] = [
  {
    id: "html-fe-base-de-page-html-s-mantique",
    title: "Base de page HTML s\u00e9mantique",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Base page HTML sémantique</title>
</head>
<body>

<header>
  <h1>Mon site</h1>
  <nav aria-label="Navigation principale">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Section 1</h2>
    <p>Contenu de la section 1...</p>
  </section>

  <article>
    <h2>Article 1</h2>
    <p>Texte de l'article...</p>
  </article>

  <aside>
    <p>Informations complémentaires ou encadrés</p>
  </aside>
</main>

<footer>
  <p>© 2026 Mon site - Mentions légales</p>
</footer>

</body>
</html>` },
    ],
  },
  {
    id: "html-fe-types-de-balises",
    title: "Types de balises",
    blocks: [
      { type: "table", headers: ["Type", "Exemple", "Description"], rows: [["Associer", "`<a>... <b>...</b></a>`", "Balises imbriqu\u00e9es"], ["Orpheline", "`<c ... />`", "Balise sans fermeture"], ["Paire", "`<d>...</d>`", "Balise ouvrante + fermante"]] },
    ],
  },
  {
    id: "html-fe-base-universelle-d-une-page-web",
    title: "Base universelle d\u2019une page web",
    blocks: [
      { type: "h", text: "\u00c9l\u00e9ments communs \u00e0 toutes les pages :" },
      { type: "list", items: ["Header (en-t\u00eate) : logo, menu de navigation", "Footer (pied de page) : contacts, liens utiles, mentions l\u00e9gales", "Styles et polices globales (CSS)"] },
      { type: "h", text: "\u00c9l\u00e9ments sp\u00e9cifiques \u00e0 chaque page :" },
      { type: "list", items: ["Titre de la page", "Contenu principal (texte, images, m\u00e9dias)", "Image ou visuel principal (facultatif)"] },
    ],
  },
  {
    id: "html-fe-les-balises",
    title: "Les balises",
    blocks: [
      { type: "h", text: "Date" },
      { type: "code", filename: "exemple.html", language: "html", code: `<time datetime="2025-07-23">23 juillet 2025</time>` },
      { type: "h", text: "Citations" },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Longue citation -->
<blockquote>
  "Le code est comme l'humour. Quand il faut l'expliquer, c'est qu'il est mauvais."
</blockquote>

<!-- Citation courte inline -->
<p>Comme le dit Linus Torvalds : <q>Talk is cheap. Show me the code.</q></p>

<!-- Citation avec auteur -->
<blockquote>
  "Talk is cheap. Show me the code."
  <cite>Linus Torvalds</cite>
</blockquote>` },
      { type: "h", text: "Saut de ligne" },
      { type: "code", filename: "exemple.html", language: "html", code: `Texte<br>
à la ligne<br>` },
      { type: "h", text: "Mise en forme du texte" },
      { type: "code", filename: "exemple.html", language: "html", code: `<mark>texte surligné</mark>
<u>texte souligné</u>
<strong>Texte en gras (important)</strong>
<small>Texte en petit</small>
<em>Texte accentué en italique</em>
<i>Texte italique</i>
<b>Texte gras</b>
<del>Texte barré</del>
<ins>Texte ajouté</ins>
<p>Paragraphe</p>` },
      { type: "h", text: "Titres" },
      { type: "code", filename: "exemple.html", language: "html", code: `<h1>Titre principal — 1 seul par page</h1>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>
<h4>Sous-section plus petite</h4>
<h5>Niveau encore plus petit</h5>
<h6>Niveau le plus petit</h6>` },
      { type: "h", text: "Texte brut (pre) & conteneur" },
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Texte brut avec indentation conservée -->
<pre>
Texte 1
  Texte indentée
</pre>

<!-- Conteneur générique pour CSS -->
<span class="texte">Mot stylisé</span>

<!-- Bloc conteneur -->
<div class="conteneur">
  <!-- Code -->
</div>` },
      { type: "h", text: "Abbr\u00e9viation & adresse" },
      { type: "code", filename: "exemple.html", language: "html", code: `<abbr title="information">info</abbr>

<address>
  <!-- contenu adresse -->
</address>` },
    ],
  },
  {
    id: "html-fe-liens-html",
    title: "Liens HTML",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Mail -->
<a href="mailto:nom@example.com">Envoyer un email</a>

<!-- Téléphone -->
<a href="tel:+33606060606">Appeler</a>

<!-- WhatsApp -->
<a href="https://wa.me/33606060606" target="_blank">Discuter</a>

<!-- Google Maps -->
<a href="https://www.google.com/maps?q=Entreprise+Adresse" target="_blank">
  Voir sur Google Maps
</a>

<!-- Lien externe (sécurisé) -->
<a href="https://www.exemple.com" target="_blank" rel="noopener noreferrer">
  Visiter le site
</a>

<!-- Lien interne -->
<a href="/contact">Page Contact</a>

<!-- SPA Vue Router -->
<router-link to="/contact">Contact</router-link>

<!-- SPA React Router -->
<Link to="/contact">Contact</Link>

<!-- Ancrage vers une section -->
<a href="#section-id">Aller à la section</a>
<section id="section-id">
  <!-- Contenu ciblé -->
</section>

<!-- Téléchargement -->
<a href="/fichiers/CV_Kat.pdf" download="CV_Kat.pdf">
  Télécharger mon CV
</a>` },
    ],
  },
  {
    id: "html-fe-image-vid-o",
    title: "Image & Vid\u00e9o",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Image -->
<img src="photo.jpg" alt="Description de l'image">

<!-- Vidéo YouTube (iframe) -->
<iframe
  src="https://www.youtube.com/embed/ID-VIDEO"
  title="Vidéo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<!-- Afficher une page externe -->
<iframe
  class="contenu-externe"
  src="https://www.exemple.com"
  title="Contenu externe">
</iframe>

<!-- Afficher une page interne -->
<iframe
  src="pages/moncontenu.html"
  title="Page interne">
</iframe>` },
    ],
  },
  {
    id: "html-fe-lier-des-fichiers",
    title: "Lier des fichiers",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- CSS dans le <head> -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- JS à la fin du <body> -->
<body>
  ...
  <script src="script.js"></script>
</body>` },
    ],
  },
  {
    id: "html-fe-m-tadonn-es",
    title: "M\u00e9tadonn\u00e9es",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- SEO - Description -->
<head>
  <meta name="description" content="Description de la page">
</head>

<!-- Responsive mobile/tablette -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">` },
    ],
  },
  {
    id: "html-fe-formulaires",
    title: "Formulaires",
    blocks: [
      { type: "h", text: "Menu d\u00e9roulant \u2014 choix multiple" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <label for="choix">Sélectionnez une ou plusieurs options :</label>
  <select name="choix[]" id="choix" multiple size="4">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Menu d\u00e9roulant \u2014 choix unique" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="# ou URL serveur" method="post">
  <label for="choix">Sélectionnez une option :</label>
  <select name="choix" id="choix">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Choix unique \u2014 radio" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="# ou URL serveur" method="post">
  <fieldset>
    <legend>Choisissez votre genre :</legend>
    <label>
      <input type="radio" name="genre" value="femme"> Femme
    </label>
    <label>
      <input type="radio" name="genre" value="homme"> Homme
    </label>
  </fieldset>
  <br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Choix multiple \u2014 checkbox" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <fieldset>
    <legend>Souscrivez à :</legend>
    <label>
      <input type="checkbox" name="abonnement[]" value="news"> Newsletter
    </label>
    <label>
      <input type="checkbox" name="abonnement[]" value="promo"> Promotions
    </label>
  </fieldset>
  <br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Champ multiligne (textarea)" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <label for="description">Description :</label>
  <textarea id="description" name="description" rows="4" cols="50"></textarea>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Champ avec indicatif (placeholder)" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="#" method="post">
  <label for="message">Votre message :</label>
  <textarea id="message" name="message" placeholder="Écrire un message..." rows="4" cols="50"></textarea>
  <br><br>
  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Formulaire de contact complet" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="URL du serveur ou #" method="post">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required>
  <br><br>

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>
  <br><br>

  <label for="message">Message :</label>
  <textarea id="message" name="message" placeholder="Écrire votre message..." rows="5" cols="50" required></textarea>
  <br><br>

  <input type="submit" value="Envoyer">
</form>` },
      { type: "h", text: "Bouton" },
      { type: "code", filename: "exemple.html", language: "html", code: `<form action="/envoyer" method="post">
  <button type="submit">Envoyer</button>
</form>` },
    ],
  },
  {
    id: "html-fe-listes",
    title: "Listes",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Non ordonnée (points) -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordonnée (numérotée) -->
<ol>
  <li>Analyser le besoin</li>
  <li>Coder la fonctionnalité</li>
  <li>Tester le résultat</li>
</ol>

<!-- Définition -->
<dl>
  <dt>HTML</dt>
  <dd>Langage de structure du web.</dd>
  <dt>CSS</dt>
  <dd>Langage de mise en forme.</dd>
</dl>` },
    ],
  },
  {
    id: "html-fe-tableau-s-mantique",
    title: "Tableau s\u00e9mantique",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<table>
  <caption>Statistiques des ventes par trimestre</caption>

  <thead>
    <tr>
      <th>Colonne 1</th>
      <th>Colonne 2</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Donnée A1</td>
      <td>Donnée A2</td>
    </tr>
    <tr>
      <td>Donnée B1</td>
      <td>Donnée B2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>42</td>
    </tr>
  </tfoot>
</table>` },
    ],
  },
  {
    id: "html-fe-entit-s-html",
    title: "Entit\u00e9s HTML",
    blocks: [
      { type: "table", headers: ["Symbole", "Code HTML"], rows: [["<", "`&lt;`"], [">", "`&gt;`"], ["&", "`&amp;`"], ["\u201d", "`&quot;`"], ["\u2019", "`&apos;`"], ["(espace ins\u00e9cable)", "`&nbsp;`"], ["\u20ac", "`&euro;`"], ["$", "`&#36;`"], ["\u00a3", "`&pound;`"], ["\u00a5", "`&yen;`"], ["\u00a2", "`&cent;`"], ["\u2212", "`&minus;`"], ["\u00d7", "`&times;`"], ["\u00f7", "`&divide;`"], ["\u2260", "`&ne;`"], ["\u2264", "`&le;`"], ["\u2265", "`&ge;`"], ["\u00b1", "`&plusmn;`"], ["\u2190", "`&larr;`"], ["\u2192", "`&rarr;`"], ["\u2191", "`&uarr;`"], ["\u2193", "`&darr;`"], ["\u2194\ufe0e", "`&harr;`"], ["\u21d2", "`&rArr;`"], ["\u21d0", "`&lArr;`"], ["\u21d4", "`&hArr;`"], ["\u00a9", "`&copy;`"], ["\u00ae", "`&reg;`"], ["\u2122", "`&trade;`"]] },
    ],
  },
  {
    id: "html-fe-commentaires",
    title: "Commentaires",
    blocks: [
      { type: "code", filename: "exemple.html", language: "html", code: `<!-- Commentaire simple -->

<!--==== Section de commentaire "En-tête" ==== -->` },
    ],
  },
  {
    id: "html-fe-guide-de-style",
    title: "Guide de style",
    blocks: [
      { type: "h", text: "Structure du document" },
      { type: "list", items: ["Toujours inclure <!DOCTYPE html>", "D\u00e9clarer l\u2019encodage : <meta charset=\"UTF-8\">", "Indentation coh\u00e9rente (2 espaces recommand\u00e9s)", "Arborescence logique : <header> \u2192 <nav> \u2192 <main> \u2192 <section> \u2192 <footer>"] },
      { type: "h", text: "Nommage et attributs" },
      { type: "list", items: ["Attributs en minuscules, valeurs entre guillemets doubles \" \"", "Classes en kebab-case : main-header", "Ordre des attributs : type \u2192 id \u2192 class \u2192 autres", "IDs uniques dans le document"] },
      { type: "h", text: "S\u00e9mantique HTML5" },
      { type: "list", items: ["Utiliser les balises appropri\u00e9es : <header>, <main>, <section>, <article>, <footer>", "\u00c9viter les <div> ou <span> inutiles", "Titres hi\u00e9rarchiques : <h1> \u2192 <h2> \u2192 <h3>"] },
      { type: "h", text: "Accessibilit\u00e9 (a11y)" },
      { type: "list", items: ["Toujours ajouter alt aux images : <img src=\"logo.png\" alt=\"Logo\">", "Lier label \u00e0 input via for : <label for=\"email\">Email</label>", "Utiliser ARIA si n\u00e9cessaire : <button aria-expanded=\"false\">Menu</button>", "Sp\u00e9cifier la langue : <html lang=\"fr\">"] },
      { type: "h", text: "Lisibilit\u00e9 et organisation" },
      { type: "list", items: ["Retour \u00e0 la ligne apr\u00e8s chaque balise importante", "Commentaires pour s\u00e9parer les sections : <!-- Section : Header -->", "Ne pas mettre de style inline dans les balises"] },
      { type: "h", text: "Performances" },
      { type: "list", items: ["Placer <script> \u00e0 la fin du <body> (sauf modules)", "Minifier HTML pour la production", "Charger les polices via <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"] },
      { type: "h", text: "Formulaires" },
      { type: "list", items: ["Grouper les champs avec <form> et <fieldset> si n\u00e9cessaire", "Boutons avec type=\"submit\" explicite : <button type=\"submit\">Envoyer</button>"] },
      { type: "h", text: "SEO" },
      { type: "list", items: ["Meta description pr\u00e9sente et descriptive : <meta name=\"description\" content=\"Page de contact\">", "Balise <title> unique et explicite", "Liens internes coh\u00e9rents avec la structure du site"] },
      { type: "h", text: "Bonnes pratiques g\u00e9n\u00e9rales" },
      { type: "list", items: ["Pas de texte brut dans <body> sans balise", "Grouper liens similaires dans <ul><li>", "Maintenir une arborescence et un code lisibles et coh\u00e9rents"] },
    ],
  },
  {
    id: "html-cheatsheet-balises",
    title: "CheatSheet — Les principales balises HTML",
    blocks: [
      { type: "h", text: "Les balises de premier niveau" },
      { type: "p", text: "Les balises de premier niveau sont les principales balises qui structurent une page HTML et sont indispensables pour réaliser le code minimal d'une page." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<!DOCTYPE>", "Indique au navigateur qu'il s'agit d'une page HTML."],
        ["<body>", "Corps de page"],
        ["<head>", "En-tête de page"],
        ["<html>", "Balise principale de toute page Web."],
      ]},
      { type: "h", text: "Le code minimal d'une page" },
      { type: "p", text: "Le code minimal d'une page est le code qui permet de structurer votre document HTML. Voici le code minimal que vous devrez saisir pour initier votre projet Web :" },
      { type: "code", filename: "index.html", language: "html", code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>` },
      { type: "note", variant: "info", title: "Astuce", text: "Sous VSCode, vous pouvez saisir le raccourci « ! » pour l'afficher automatiquement." },
      { type: "h", text: "Balises d'en-tête" },
      { type: "p", text: "Les balises d'en-tête sont des balises situées dans le haut de votre page Web. Ces dernières sont toutes comprises entre <head> et </head>." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<link>", "Liaison avec une feuille de style. Balise orpheline"],
        ["<meta>", "Métadonnées d'une page Web. Balise orpheline"],
        ["<script>", "Code JavaScript"],
        ["<style>", "Code CSS"],
        ["<title>", "Titre de la page"],
      ]},
      { type: "h", text: "Balises de structuration de texte" },
      { type: "p", text: "Les balises de structuration de texte permettent de mettre en forme votre texte." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<a>", "Lien hypertexte"],
        ["<abbr>", "Abréviation"],
        ["<blockquote>", "Citation (longue)"],
        ["<br/>", "Retour à la ligne. Balise orpheline"],
        ["<cite>", "Citation du titre d'une œuvre ou d'un évènement"],
        ["<em>", "Mise en valeur normale"],
        ["<figcaption>", "Description de la figure"],
        ["<figure>", "Figure (image, code, etc.)"],
        ["<h1>", "Titre de niveau 1"],
        ["<h2>", "Titre de niveau 2"],
        ["<h3>", "Titre de niveau 3"],
        ["<h4>", "Titre de niveau 4"],
        ["<h5>", "Titre de niveau 5"],
        ["<h6>", "Titre de niveau 6"],
        ["<img />", "Image. Balise orpheline"],
        ["<mark>", "Mise en valeur visuelle"],
        ["<p>", "Paragraphe"],
        ["<q>", "Citation (courte)"],
        ["<strong>", "Mise en valeur forte"],
        ["<sub>", "Indice"],
        ["<sup>", "Exposant"],
      ]},
      { type: "h", text: "Balises de listes" },
      { type: "p", text: "Les balises de liste permettent de créer toutes sortes de listes (à puces, numérotées, etc.)." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<dd>", "Définition du terme"],
        ["<dl>", "Liste de définitions"],
        ["<dt>", "Terme à définir"],
        ["<li>", "Élément de la liste à puces"],
        ["<ol>", "Liste numérotée"],
        ["<ul>", "Liste à puces, non numérotée"],
      ]},
      { type: "h", text: "Balises de tableau" },
      { type: "p", text: "Les balises de tableau permettent de créer et de mettre en forme un tableau." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<caption>", "Donner un titre au tableau"],
        ["<table>", "Délimite un tableau"],
        ["<tbody>", "Balise non obligatoire permettant d'insérer le pied du tableau"],
        ["<td>", "Cellule du tableau"],
        ["<tfoot>", "Balise non obligatoire permettant d'insérer le corps du tableau"],
        ["<th>", "Cellule d'en-tête du tableau"],
        ["<thead>", "Balise non obligatoire permettant d'insérer l'en-tête du tableau"],
        ["<tr>", "Ligne de tableau"],
      ]},
      { type: "h", text: "Balises de sectionnement" },
      { type: "p", text: "Les balises de sectionnement permettent de construire le squelette d'un site Web." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<article>", "Contenu autonome"],
        ["<aside>", "Informations complémentaires, à part"],
        ["<footer>", "Pied de page"],
        ["<header>", "En-tête"],
        ["<nav>", "Liens principaux de navigation"],
        ["<section>", "Section de page"],
      ]},
      { type: "h", text: "Balises de formulaire" },
      { type: "p", text: "Les balises de formulaire permettent de créer et de mettre en forme un formulaire." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<fieldset>", "Groupe de champs"],
        ["<form>", "Formulaire"],
        ["<input />", "Champ de formulaire (texte, mot de passe, case à cocher, bouton, etc.)"],
        ["<label>", "Libellé d'un champ"],
        ["<legend>", "Titre d'un groupe de champs"],
        ["<optgroup>", "Groupe d'éléments d'une liste déroulante"],
        ["<option>", "Élément d'une liste déroulante"],
        ["<select>", "Liste déroulante"],
        ["<textarea>", "Zone de saisie multiligne"],
      ]},
      { type: "h", text: "Balises d'intégration de contenus" },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<iframe>", "Intégrer une autre page HTML interne ou externe de manière imbriquée"],
        ["<audio>", "Ajouter des pistes audio"],
        ["<video>", "Ajouter des vidéos"],
        ["<object>", "Intégrer une ressource externe traitée de façon différente"],
        ["<embed>", "Intégrer une application externe ou du contenu interactif"],
        ["<source>", "Indiquer la source des balises"],
      ]},
      { type: "h", text: "Balises génériques" },
      { type: "p", text: "Les balises génériques (ou balises universelles) sont des balises qui n'ont pas de sens sémantique. On les utilise généralement pour construire le design." },
      { type: "table", headers: ["Balise", "Description"], rows: [
        ["<span>", "Balise générique de type inline"],
        ["<div>", "Balise générique de type block"],
      ]},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleHtml.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleHtml: SubSection[] = [
  {
    id: "laconsole-html",
    title: "HTML",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"HTML.pdf - 94 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"p","text":"Formations"},
      {"type":"h","text":"Cheatsheet : HTML"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"CheatSheet HTML : Guide complet, résumé, aide-mémoire, tutoriel et conseils clés"},
      {"type":"p","text":"pour apprendre et maîtriser HTML efﬁcacement et rapidement."},
      {"type":"p","text":"Blog"},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Newsletter"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"CHEATSHEETS / HTML"},
      {"type":"h","text":"! Recherche..."},
      {"type":"p","text":"Paire VS Orpheline"},
      {"type":"code","filename":"page-1-exemple-1","language":"javascript","code":"<!-- Balise paire -->\n<p></p>"},
      {"type":"code","filename":"page-1-exemple-2","language":"javascript","code":"<!-- Balise orpheline -->\n<br>"},
      {"type":"p","text":"Ajout de /  possible à la ﬁn d’une balise orpheline"},
      {"type":"p","text":"Squelette HTML"},
      {"type":"p","text":"Balises essentielles à toute page web."},
      {"type":"image","src":"images/laconsole/html-p001.jpg","alt":"Page originale de HTML.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"code","filename":"page-2-exemple-1","language":"javascript","code":"<!DOCTYPE html>\n<html lang=\"fr\">"},
      {"type":"code","filename":"page-2-exemple-2","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-2-exemple-3","language":"javascript","code":"<title>Titre</title>"},
      {"type":"code","filename":"page-2-exemple-4","language":"javascript","code":"<meta name=\"description\" content=\"Blablaba...\">\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initi"},
      {"type":"code","filename":"page-2-exemple-5","language":"javascript","code":"</head>\n<body></body>"},
      {"type":"code","filename":"page-2-exemple-6","language":"javascript","code":"</html>"},
      {"type":"p","text":"Commentaire"},
      {"type":"p","text":"<!-- Je suis un commentaire -->"},
      {"type":"p","text":"Lier du CSS"},
      {"type":"code","filename":"page-2-exemple-7","language":"javascript","code":"<link href=\"path/to/app.css\" rel=\"stylesheet\">"},
      {"type":"p","text":"Lier du JS"},
      {"type":"code","filename":"page-2-exemple-8","language":"html","code":"<script src=\"path/to/app.js\"></script>"},
      {"type":"p","text":"Titres"},
      {"type":"p","text":"Paragraphe"},
      {"type":"code","filename":"page-2-exemple-9","language":"javascript","code":"<h1>Titre 1</h1>\n<h2>Titre 2</h2>"},
      {"type":"code","filename":"page-2-exemple-10","language":"javascript","code":"<p>Je suis un paragraphe</p>"},
      {"type":"code","filename":"page-2-exemple-11","language":"javascript","code":"<h3>Titre 3</h3>\n<h4>Titre 4</h4>"},
      {"type":"code","filename":"page-2-exemple-12","language":"javascript","code":"<h5>Titre 5</h5>\n<h6>Titre 6</h6>"},
      {"type":"image","src":"images/laconsole/html-p002.jpg","alt":"Page originale de HTML.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"p","text":"h1  plus important que h6  (SEO)"},
      {"type":"p","text":"Lien"},
      {"type":"p","text":"Des liens hypertexte pour naviguer de page en page."},
      {"type":"code","filename":"page-3-exemple-1","language":"javascript","code":"<a href=\"...\">Texte du lien</a>"},
      {"type":"p","text":"target=\"_blank\"  : ouverture dans un nouvel onglet"},
      {"type":"p","text":"href=\"#about\"  : scroll vers l’élément portant l’id about"},
      {"type":"p","text":"href=\"mailto:...  : email via la messagerie par défaut de l’utilisateur"},
      {"type":"p","text":"href=\"tel:...  : appel téléphonique au numéro précisé (idéal sur mobile)"},
      {"type":"p","text":"Attribut download  : téléchargement d’un ﬁchier (précisé via href )"},
      {"type":"p","text":"Image"},
      {"type":"code","filename":"page-3-exemple-2","language":"javascript","code":"<img src=\"path/to/dev-night.png\" alt=\"Développeur qui code la nu"},
      {"type":"p","text":"Vidéo"},
      {"type":"code","filename":"page-3-exemple-3","language":"javascript","code":"<video controls>"},
      {"type":"code","filename":"page-3-exemple-4","language":"javascript","code":"<source src=\"movies/movie1.mp4\" type=\"video/mp4\">\n<source src=\"movies/movie1.webm\" type=\"video/webm\">"},
      {"type":"code","filename":"page-3-exemple-5","language":"javascript","code":"Element video non pris en charge par le navigateur.\n</video>"},
      {"type":"p","text":"Audio"},
      {"type":"code","filename":"page-3-exemple-6","language":"javascript","code":"<audio controls>"},
      {"type":"code","filename":"page-3-exemple-7","language":"javascript","code":"<source src=\"sounds/birds.mp3\" type=\"audio/mp3\">"},
      {"type":"p","text":"Element audio non pris en charge par le navigateur.\n</\ndi >"},
      {"type":"image","src":"images/laconsole/html-p003.jpg","alt":"Page originale de HTML.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"code","filename":"page-4-exemple-1","language":"javascript","code":"</audio>"},
      {"type":"p","text":"Canvas"},
      {"type":"p","text":"Zone de dessin dans laquelle on peut réaliser des graphiques."},
      {"type":"code","filename":"page-4-exemple-2","language":"javascript","code":"<canvas>"},
      {"type":"p","text":"Element canvas non pris en charge par le navigateur."},
      {"type":"code","filename":"page-4-exemple-3","language":"javascript","code":"</canvas>"},
      {"type":"p","text":"Usage de JavaScript  requis"},
      {"type":"p","text":"Liste"},
      {"type":"p","text":"<!-- Liste non-ordonnée -->"},
      {"type":"code","filename":"page-4-exemple-4","language":"javascript","code":"<ul>"},
      {"type":"code","filename":"page-4-exemple-5","language":"javascript","code":"<li>Item 1</li>"},
      {"type":"code","filename":"page-4-exemple-6","language":"javascript","code":"<li>Item 2</li>"},
      {"type":"code","filename":"page-4-exemple-7","language":"javascript","code":"</ul>"},
      {"type":"code","filename":"page-4-exemple-8","language":"javascript","code":"<!-- Liste ordonnée -->\n<ol>"},
      {"type":"code","filename":"page-4-exemple-9","language":"javascript","code":"<li>Item 1</li>\n<li>Item 2</li>"},
      {"type":"code","filename":"page-4-exemple-10","language":"javascript","code":"</ol>"},
      {"type":"code","filename":"page-4-exemple-11","language":"javascript","code":"<!-- Liste de définition -->\n<dl>"},
      {"type":"code","filename":"page-4-exemple-12","language":"javascript","code":"<dt>Mot à définir</dt>\n<dd>Définition</dd>\n</dl>"},
      {"type":"p","text":"Tableau"},
      {"type":"code","filename":"page-4-exemple-13","language":"javascript","code":"<table>"},
      {"type":"image","src":"images/laconsole/html-p004.jpg","alt":"Page originale de HTML.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"code","filename":"page-5-exemple-1","language":"javascript","code":"<caption>Légende du tableau</caption>\n<thead>"},
      {"type":"code","filename":"page-5-exemple-2","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-5-exemple-3","language":"javascript","code":"<th>Couleur</th>"},
      {"type":"code","filename":"page-5-exemple-4","language":"javascript","code":"<th>Hexadécimal</th>\n</tr>"},
      {"type":"code","filename":"page-5-exemple-5","language":"javascript","code":"</thead>\n<tbody>"},
      {"type":"p","text":"<!-- Ligne 1 -->"},
      {"type":"code","filename":"page-5-exemple-6","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-5-exemple-7","language":"javascript","code":"<td>Rouge</td>"},
      {"type":"code","filename":"page-5-exemple-8","language":"javascript","code":"<td>#FF0000</td>\n</tr>\n<tr></tr> <!-- Ligne 2 -->"},
      {"type":"code","filename":"page-5-exemple-9","language":"javascript","code":"<tr></tr> <!-- Ligne 3 -->\n</tbody>"},
      {"type":"code","filename":"page-5-exemple-10","language":"javascript","code":"<tfoot>"},
      {"type":"code","filename":"page-5-exemple-11","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-5-exemple-12","language":"javascript","code":"<th>Couleur</th>\n<th>Hexadécimal</th>"},
      {"type":"code","filename":"page-5-exemple-13","language":"javascript","code":"</tr>"},
      {"type":"code","filename":"page-5-exemple-14","language":"javascript","code":"</tfoot>"},
      {"type":"code","filename":"page-5-exemple-15","language":"javascript","code":"</table>"},
      {"type":"p","text":"Iframe"},
      {"type":"code","filename":"page-5-exemple-16","language":"javascript","code":"<iframe src=\"https://meteofrance.com/widget/prevision/330630\" ti"},
      {"type":"p","text":"Usage des iframe  gourmand en ressource"},
      {"type":"p","text":"CSP"},
      {"type":"p","text":": permet de limiter l’intégration d’une page"},
      {"type":"p","text":"Form"},
      {"type":"code","filename":"page-5-exemple-17","language":"html","code":"<form action=\"register.php\" method=\"POST\">"},
      {"type":"code","filename":"page-5-exemple-18","language":"javascript","code":"<!-- Champs du formulaire -->\n</f\n>"},
      {"type":"image","src":"images/laconsole/html-p005.jpg","alt":"Page originale de HTML.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"code","filename":"page-6-exemple-1","language":"javascript","code":"</form>"},
      {"type":"p","text":"action  et method  : utiles si traitement du formulaire (en PHP par exemple)"},
      {"type":"p","text":"Label"},
      {"type":"p","text":"Etiquette pour les champs de formulaire."},
      {"type":"code","filename":"page-6-exemple-2","language":"javascript","code":"<label for=\"email\">Adresse mail</label>"},
      {"type":"p","text":"for  doit être égal à id  du champ lié"},
      {"type":"p","text":"Input"},
      {"type":"p","text":"Un champ de saisie modulaire."},
      {"type":"code","filename":"page-6-exemple-3","language":"javascript","code":"<label for=\"pseudo\">Pseudo</label>"},
      {"type":"code","filename":"page-6-exemple-4","language":"html","code":"<input type=\"text\" id=\"pseudo\" name=\"pseudo\" maxlength=\"20\" requ"},
      {"type":"code","filename":"page-6-exemple-5","language":"html","code":"<input type=\"submit\" value=\"Envoyer\">"},
      {"type":"code","filename":"page-6-exemple-6","language":"html","code":"<input type=\"radio\" id=\"front\" name=\"type\" value=\"front\">"},
      {"type":"code","filename":"page-6-exemple-7","language":"html","code":"<label for=\"front\">Dev Front</label>\n<input type=\"radio\" id=\"back\" name=\"type\" value=\"back\">"},
      {"type":"code","filename":"page-6-exemple-8","language":"html","code":"<label for=\"back\">Dev Back</label>\n<input type=\"radio\" id=\"full-stack\" name=\"type\" value=\"full-stac\n<label for=\"full-stack\">Dev Fullstack</label>"},
      {"type":"code","filename":"page-6-exemple-9","language":"html","code":"<input type=\"checkbox\" id=\"html\" name=\"languages[]\" value=\"html\""},
      {"type":"code","filename":"page-6-exemple-10","language":"html","code":"<label for=\"html\">HTML</label>\n<input type=\"checkbox\" id=\"css\" name=\"languages[]\" value=\"css\">"},
      {"type":"code","filename":"page-6-exemple-11","language":"html","code":"<label for=\"css\">CSS</label>\n<input type=\"checkbox\" id=\"js\" name=\"languages[]\" value=\"js\">"},
      {"type":"code","filename":"page-6-exemple-12","language":"html","code":"<label for=\"js\">JS</label>\n<input type=\"checkbox\" id=\"php\" name=\"languages[]\" value=\"php\">"},
      {"type":"code","filename":"page-6-exemple-13","language":"javascript","code":"<label for=\"php\">PHP</label>"},
      {"type":"image","src":"images/laconsole/html-p006.jpg","alt":"Page originale de HTML.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"Types fréquents : text , email , password , radio , checkbox , submit"},
      {"type":"code","filename":"page-7-exemple-1","language":"javascript","code":"Type submit  : soumission d’un formulaire"},
      {"type":"p","text":"Sélecteur à choix unique ( radio )"},
      {"type":"p","text":"Sélecteur à choix multiples ( checkbox )"},
      {"type":"code","filename":"page-7-exemple-2","language":"javascript","code":"Select"},
      {"type":"p","text":"Liste déroulante."},
      {"type":"code","filename":"page-7-exemple-3","language":"javascript","code":"<label for=\"class\">Classe</label>\n<select id=\"class\" name=\"class\" required>"},
      {"type":"code","filename":"page-7-exemple-4","language":"javascript","code":"<option value=\"\" disabled selected>Sélectionner une classe</\n<optgroup label=\"Magique\">"},
      {"type":"code","filename":"page-7-exemple-5","language":"javascript","code":"<option value=\"wizard\">Mage</option>\n<option value=\"heal\">Soigneur</option>"},
      {"type":"code","filename":"page-7-exemple-6","language":"javascript","code":"</optgroup>"},
      {"type":"code","filename":"page-7-exemple-7","language":"javascript","code":"<optgroup label=\"Physique\">"},
      {"type":"code","filename":"page-7-exemple-8","language":"javascript","code":"<option value=\"warrior\">Guerrier</option>"},
      {"type":"code","filename":"page-7-exemple-9","language":"javascript","code":"<option value=\"archer\">Archer</option>\n</optgroup>"},
      {"type":"code","filename":"page-7-exemple-10","language":"javascript","code":"</select>"},
      {"type":"p","text":"Textarea"},
      {"type":"p","text":"Champ textuel long."},
      {"type":"code","filename":"page-7-exemple-11","language":"javascript","code":"<label for=\"bio\">Biographie</label>"},
      {"type":"code","filename":"page-7-exemple-12","language":"javascript","code":"<textarea id=\"bio\" name=\"bio\" rows=\"5\" placeholder=\"Parlez nous"},
      {"type":"p","text":"Div"},
      {"type":"code","filename":"page-7-exemple-13","language":"typescript","code":"Balise générique de type block ."},
      {"type":"code","filename":"page-7-exemple-14","language":"html","code":"<div class=\"container\"></div>"},
      {"type":"image","src":"images/laconsole/html-p007.jpg","alt":"Page originale de HTML.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"Prend\n00% de lélément parent"},
      {"type":"p","text":"Rôle structurel"},
      {"type":"p","text":"Span"},
      {"type":"code","filename":"page-8-exemple-1","language":"typescript","code":"Balise générique de type inline ."},
      {"type":"code","filename":"page-8-exemple-2","language":"javascript","code":"<p>Lorem ipsum dolor sit amet. <span class=\"hashtag\">dev</span><"},
      {"type":"p","text":"Prend juste l’espace nécessaire"},
      {"type":"p","text":"Sous-division de texte"},
      {"type":"p","text":"Structuration"},
      {"type":"p","text":"Ces balises jouent le rôle de conteneurs sémantiques."},
      {"type":"code","filename":"page-8-exemple-3","language":"javascript","code":"<header>En-tête d'élément</header>"},
      {"type":"code","filename":"page-8-exemple-4","language":"javascript","code":"<footer>Pied d'élément</footer>"},
      {"type":"code","filename":"page-8-exemple-5","language":"javascript","code":"<main>Contenu principal</main>"},
      {"type":"code","filename":"page-8-exemple-6","language":"javascript","code":"<nav>Ensemble de liens</nav>\n<section>Contenu thématique</section>"},
      {"type":"code","filename":"page-8-exemple-7","language":"javascript","code":"<article>Contenu autonome</article>"},
      {"type":"code","filename":"page-8-exemple-8","language":"javascript","code":"<aside>Contenu complémentaire / connexe</aside>"},
      {"type":"p","text":"Confèrent une sémantique que div  n’a pas"},
      {"type":"p","text":"Mise en valeur"},
      {"type":"code","filename":"page-8-exemple-9","language":"javascript","code":"<em>Mise en valeur</em>\n<strong>Mise en valeur forte</strong>"},
      {"type":"p","text":"Utile pour SEO et accessibilité"},
      {"type":"p","text":"Séparateur"},
      {"type":"image","src":"images/laconsole/html-p008.jpg","alt":"Page originale de HTML.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"<!-- Saut de ligne -->"},
      {"type":"code","filename":"page-9-exemple-1","language":"javascript","code":"<br>\n<!-- Ligne de séparation horizontale -->\n<hr>"},
      {"type":"code","filename":"page-9-exemple-2","language":"javascript","code":"Class"},
      {"type":"p","text":"Appartenance d’un élément HTML à une famille."},
      {"type":"code","filename":"page-9-exemple-3","language":"javascript","code":"<button class=\"btn btn-dark\">Bouton sombre</button>\n<button class=\"btn btn-light\">Bouton clair</button>"},
      {"type":"p","text":"Classes réutilisables / cumulables"},
      {"type":"p","text":"Utile pour JavaScript  et CSS"},
      {"type":"p","text":"Id"},
      {"type":"p","text":"Identiﬁcation d’un élément HTML."},
      {"type":"code","filename":"page-9-exemple-4","language":"javascript","code":"<button id=\"add-to-cart\">Ajouter au panier</button>"},
      {"type":"p","text":"Un identiﬁant doit être unique"},
      {"type":"p","text":"Utile pour JavaScript  et CSS"},
      {"type":"p","text":"Aussi utilisés pour les “ancres nommées”"},
      {"type":"image","src":"images/laconsole/html-p009.jpg","alt":"Page originale de HTML.pdf - page 9"},
      {"type":"h","text":"Page 10"},
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
      {"type":"image","src":"images/laconsole/html-p010.jpg","alt":"Page originale de HTML.pdf - page 10"},
      {"type":"h","text":"Page 11"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"code","filename":"page-11-exemple-1","language":"javascript","code":"HTML › Attributs Universels class"},
      {"type":"h","text":""},
      {"type":"h","text":"et id"},
      {"type":"code","filename":"page-11-exemple-2","language":"javascript","code":"Les attributs universels class et id peuvent être placés sur"},
      {"type":"p","text":"n'importe quelle balise HTML dans le but de les tagguer."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/"},
      {"type":"code","filename":"page-11-exemple-3","language":"javascript","code":"7. ATTRIBUTS UNIVERSELS CLASS ET ID"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"p","text":"Lors des chapitres précédents, on a découvert qu’il existait de nombreux attributs"},
      {"type":"p","text":"HTML, mais il est important de noter que si certains d’entre-eux n’étaient"},
      {"type":"p","text":"utilisables que sur certaines balises, d’autres le sont sur l’ensemble des balises de"},
      {"type":"image","src":"images/laconsole/html-p011.jpg","alt":"Page originale de HTML.pdf - page 11"},
      {"type":"h","text":"Page 12"},
      {"type":"code","filename":"page-12-exemple-1","language":"javascript","code":"contenu, de formulaires et de structuration ; on les appelle attributs universels."},
      {"type":"h","text":"Leur usage est omniprésent lors de l’intégration d’une page web."},
      {"type":"code","filename":"page-12-exemple-2","language":"javascript","code":"Attribut class"},
      {"type":"code","filename":"page-12-exemple-3","language":"javascript","code":"L’attribut class  permet de catégoriser un élément HTML. On donne une classe à"},
      {"type":"p","text":"un élément pour lui spéciﬁer une appartenance à un groupe. Il est possible de"},
      {"type":"p","text":"déclarer plusieurs classes en séparant leurs noms par des espaces."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-12-exemple-4","language":"html","code":"<div class=\"product\">"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-12-exemple-5","language":"javascript","code":"</div>"},
      {"type":"code","filename":"page-12-exemple-6","language":"html","code":"<div class=\"product bg-red\">"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-12-exemple-7","language":"javascript","code":"</div>"},
      {"type":"p","text":"On utilise les classes pour :"},
      {"type":"h","text":"Appliquer un style CSS commun à plusieurs éléments (miniatures d’articles,"},
      {"type":"p","text":"ﬁches produits, portions de textes, éléments de formulaire, etc.)."},
      {"type":"p","text":"Manipuler une famille d’éléments spéciﬁques en JS."},
      {"type":"image","src":"images/laconsole/html-p012.jpg","alt":"Page originale de HTML.pdf - page 12"},
      {"type":"h","text":"Page 13"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-13-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Attribut id"},
      {"type":"p","text":"L’attribut id  permet d’identiﬁer de manière unique un élément HTML."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-13-exemple-2","language":"html","code":"<div id=\"result\">"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-13-exemple-3","language":"javascript","code":"</div>"},
      {"type":"p","text":"On utilise les id pour :"},
      {"type":"h","text":"Appliquer un style CSS à un élément unique."},
      {"type":"p","text":"Manipuler un élément unique en JS."},
      {"type":"p","text":"Créer une ancre (lien interne sur une page)."},
      {"type":"image","src":"images/laconsole/html-p013.jpg","alt":"Page originale de HTML.pdf - page 13"},
      {"type":"h","text":"Page 14"},
      {"type":"p","text":"Précédent :\n6. Structurer sa\nPage\n〈"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"("},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des\nLEGO. Plus tard, je découvre le dev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et\nsur laConsole."},
      {"type":"p","text":""},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p014.jpg","alt":"Page originale de HTML.pdf - page 14"},
      {"type":"h","text":"Page 15"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTML › Balises de Premier Niveau"},
      {"type":"h","text":"(html, head, body)"},
      {"type":"h","text":""},
      {"type":"code","filename":"page-15-exemple-1","language":"javascript","code":"Une page HTML comporte au minimum les balises <doctype>,"},
      {"type":"code","filename":"page-15-exemple-2","language":"javascript","code":"<html>, <head> et <body>. Elles sont situées au plus haut niveau"},
      {"type":"p","text":"d'arborescence de la page."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/"},
      {"type":"p","text":"2. BALISES DE PREMIER NIVEAU (HTML, HEAD, BODY)"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"image","src":"images/laconsole/html-p015.jpg","alt":"Page originale de HTML.pdf - page 15"},
      {"type":"h","text":"Page 16"},
      {"type":"p","text":"Dans ce chapitre, vous allez écrire vos premières lignes de HTML. Pour"},
      {"type":"p","text":"cela, créez un ﬁchier nommé"},
      {"type":"p","text":"index.html . Pour visualiser votre page"},
      {"type":"h","text":"%"},
      {"type":"p","text":"web, il sufﬁra d’ouvrir ce ﬁchier avec le navigateur de votre choix."},
      {"type":"code","filename":"page-16-exemple-1","language":"javascript","code":"Type du document avec <!DOCTYPE>"},
      {"type":"p","text":"La balise <!DOCTYPE>  est la première balise HTML à écrire systématiquement au"},
      {"type":"p","text":"début de chaque document HTML."},
      {"type":"code","filename":"page-16-exemple-2","language":"typescript","code":"Son rôle est de spéciﬁer quel est le type du document, permettant aux navigateur"},
      {"type":"p","text":"de savoir quel langage de la vaste famille SGML il devra interpréter. Pour cela on"},
      {"type":"p","text":"ajoutera à l’intérieur un attribut html , sans valeur."},
      {"type":"p","text":"Cette balise a une syntaxe bien particulière puisqu’elle commence par un point"},
      {"type":"h","text":"d’exclamation."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"p","text":"&\nOn écrit généralement DOCTYPE  en majuscule."},
      {"type":"image","src":"images/laconsole/html-p016.jpg","alt":"Page originale de HTML.pdf - page 16"},
      {"type":"h","text":"Page 17"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-17-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Conteneurs de la page"},
      {"type":"code","filename":"page-17-exemple-2","language":"javascript","code":"Balise <html>"},
      {"type":"code","filename":"page-17-exemple-3","language":"javascript","code":"La balise <html>  contient l’intégralité d’un document HTML. Elle intervient"},
      {"type":"p","text":"comme une sorte de conteneur global pour l’ensemble du site web."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-17-exemple-4","language":"javascript","code":"<html></html>"},
      {"type":"p","text":"On prendra l’habitude de lui ajouter un attribut lang  aﬁn de spéciﬁer la langue"},
      {"type":"p","text":"utilisée pour le contenu de la page web."},
      {"type":"p","text":"La valeur de cet attribut est un code sur deux ou trois caractères (généralement en"},
      {"type":"p","text":"minuscules). Par exemple :"},
      {"type":"image","src":"images/laconsole/html-p017.jpg","alt":"Page originale de HTML.pdf - page 17"},
      {"type":"h","text":"Page 18"},
      {"type":"h","text":"fr  pour le français"},
      {"type":"h","text":"en  pour l’anglais"},
      {"type":"p","text":"…"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-18-exemple-1","language":"javascript","code":"<html lang=\"fr\"></html>"},
      {"type":"p","text":"La langue sera notamment utile en termes d’accessibilité, permettant aux"},
      {"type":"h","text":"&"},
      {"type":"p","text":"synthétiseurs vocaux d’adopter le bon accent."},
      {"type":"code","filename":"page-18-exemple-2","language":"javascript","code":"Balise <head>"},
      {"type":"code","filename":"page-18-exemple-3","language":"javascript","code":"La balise <head>  contient l’ensemble des métadonnées (informations d’en-tête)"},
      {"type":"p","text":"de la page web."},
      {"type":"p","text":"Tout ce qui est contenu dans cette balise est en quelque sorte invisible. On y place"},
      {"type":"p","text":"par exemple :"},
      {"type":"p","text":"Le favicon d’une page web"},
      {"type":"p","text":"Des informations utiles au SEO"},
      {"type":"p","text":"Des liens vers des ﬁchiers CSS ou JavaScript"},
      {"type":"p","text":"…"},
      {"type":"image","src":"images/laconsole/html-p018.jpg","alt":"Page originale de HTML.pdf - page 18"},
      {"type":"h","text":"Page 19"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-19-exemple-1","language":"javascript","code":"<html lang=\"fr\">"},
      {"type":"code","filename":"page-19-exemple-2","language":"javascript","code":"<head></head>"},
      {"type":"code","filename":"page-19-exemple-3","language":"javascript","code":"</html>"},
      {"type":"code","filename":"page-19-exemple-4","language":"javascript","code":"<head>  est imbriqué à l’intérieur de la balise <html> ."},
      {"type":"code","filename":"page-19-exemple-5","language":"javascript","code":"Balise <body>"},
      {"type":"code","filename":"page-19-exemple-6","language":"javascript","code":"La balise <body>  contient par déﬁnition l’ensemble du corps de la page web."},
      {"type":"code","filename":"page-19-exemple-7","language":"javascript","code":"Tout ce qui est contenu dans cette balise est destiné à constituer notre interface. Il"},
      {"type":"p","text":"peut s’agir de textes, images, boutons…"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-19-exemple-8","language":"javascript","code":"<html lang=\"fr\">"},
      {"type":"code","filename":"page-19-exemple-9","language":"javascript","code":"<head></head>"},
      {"type":"code","filename":"page-19-exemple-10","language":"javascript","code":"<body></body>"},
      {"type":"code","filename":"page-19-exemple-11","language":"javascript","code":"</html>"},
      {"type":"code","filename":"page-19-exemple-12","language":"javascript","code":"<body>  est imbriqué à l’intérieur de la balise <html> ."},
      {"type":"image","src":"images/laconsole/html-p019.jpg","alt":"Page originale de HTML.pdf - page 19"},
      {"type":"h","text":"Page 20"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-20-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Visualiser son code HTML comme un arbre"},
      {"type":"p","text":"Un excellent moyen de comprendre comment est constituée l’architecture d’une"},
      {"type":"p","text":"page web est de la visualiser comme un arbre."},
      {"type":"image","src":"images/laconsole/html-p020.jpg","alt":"Page originale de HTML.pdf - page 20"},
      {"type":"h","text":"Page 21"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-21-exemple-1","language":"javascript","code":"<html lang=\"fr\">"},
      {"type":"code","filename":"page-21-exemple-2","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-21-exemple-3","language":"javascript","code":"<title>Démo</title>"},
      {"type":"code","filename":"page-21-exemple-4","language":"javascript","code":"<meta name=\"description\" content=\"Blablaba...\">"},
      {"type":"code","filename":"page-21-exemple-5","language":"javascript","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-21-exemple-6","language":"javascript","code":"<meta name=\"viewport\" content=\"width=device-width"},
      {"type":"code","filename":"page-21-exemple-7","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-21-exemple-8","language":"javascript","code":"<body>"},
      {"type":"code","filename":"page-21-exemple-9","language":"javascript","code":"<section>"},
      {"type":"code","filename":"page-21-exemple-10","language":"javascript","code":"<h1>Titre de niveau 1</h1>"},
      {"type":"code","filename":"page-21-exemple-11","language":"javascript","code":"<p>Lorem ipsum dolor sit <a href=\"#\">amet</a>"},
      {"type":"code","filename":"page-21-exemple-12","language":"javascript","code":"<p>Lorem ipsum dolor sit amet...</p>"},
      {"type":"code","filename":"page-21-exemple-13","language":"javascript","code":"</section>"},
      {"type":"code","filename":"page-21-exemple-14","language":"javascript","code":"<section>"},
      {"type":"code","filename":"page-21-exemple-15","language":"javascript","code":"<img src=\"...\" alt=\"...\">"},
      {"type":"code","filename":"page-21-exemple-16","language":"javascript","code":"</section>"},
      {"type":"code","filename":"page-21-exemple-17","language":"javascript","code":"</body>"},
      {"type":"code","filename":"page-21-exemple-18","language":"javascript","code":"</html>"},
      {"type":"code","filename":"page-21-exemple-19","language":"javascript","code":"<html>  représente le tronc de l’arbre car il s’agit de la balise de plus haut"},
      {"type":"p","text":"niveau."},
      {"type":"code","filename":"page-21-exemple-20","language":"javascript","code":"<head>  et <body>  représentent les 2 branches primaires puisqu’elles sont"},
      {"type":"p","text":"directement reliées au tronc."},
      {"type":"p","text":"Et ainsi de suite…"},
      {"type":"image","src":"images/laconsole/html-p021.jpg","alt":"Page originale de HTML.pdf - page 21"},
      {"type":"h","text":"Page 22"},
      {"type":"p","text":"Précédent :\n1. Découverte du\nLangage\n〈"},
      {"type":"p","text":"Suivant :\n3. En-tête et\nMétadonnées"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"+"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des\nLEGO. Plus tard, je découvre le dev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et\nsur laConsole."},
      {"type":"p","text":""},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p022.jpg","alt":"Page originale de HTML.pdf - page 22"},
      {"type":"h","text":"Page 23"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTML › Balises Elémentaires"},
      {"type":"h","text":""},
      {"type":"p","text":"Textes, médias, listes, tableaux… Ce chapitre est dédié à"},
      {"type":"p","text":"l'apprentissage des balises HTML principales pour créer du"},
      {"type":"p","text":"contenu sur une page web."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/ 4. BALISES ELÉMENTAIRES"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"p","text":"La page suivante contient donc des extraits de code HTML que je vous"},
      {"type":"h","text":"\""},
      {"type":"p","text":"invite à vous approprier en les copiant, en les collant et en les modiﬁant"},
      {"type":"p","text":"sur l’outil\n."},
      {"type":"p","text":"codepen.io"},
      {"type":"image","src":"images/laconsole/html-p023.jpg","alt":"Page originale de HTML.pdf - page 23"},
      {"type":"h","text":"Page 24"},
      {"type":"p","text":"&\nVous trouverez la liste intégrale des balises HTML sur\n."},
      {"type":"p","text":"w3school"},
      {"type":"code","filename":"page-24-exemple-1","language":"javascript","code":"Paragraphes <p>"},
      {"type":"code","filename":"page-24-exemple-2","language":"javascript","code":"La balise <p>  (« Paragraph ») permet de créer un paragraphe."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-24-exemple-3","language":"javascript","code":"<p>Je suis un paragraphe.</p>"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-24-exemple-4","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-24-exemple-5","language":"javascript","code":"Titres <h*>"},
      {"type":"code","filename":"page-24-exemple-6","language":"javascript","code":"Les balises <h1> , <h2> , <h3> , <h4> , <h5>  et <h6>  (« Headline ») permettent"},
      {"type":"p","text":"de déﬁnir un titre de niveau variable."},
      {"type":"image","src":"images/laconsole/html-p024.jpg","alt":"Page originale de HTML.pdf - page 24"},
      {"type":"h","text":"Page 25"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-25-exemple-1","language":"javascript","code":"<h1>Je suis un titre de niveau 1</h1>"},
      {"type":"code","filename":"page-25-exemple-2","language":"javascript","code":"<h2>Je suis un titre de niveau 2</h2>"},
      {"type":"code","filename":"page-25-exemple-3","language":"javascript","code":"<h3>Je suis un titre de niveau 3</h3>"},
      {"type":"code","filename":"page-25-exemple-4","language":"javascript","code":"<h4>Je suis un titre de niveau 4</h4>"},
      {"type":"code","filename":"page-25-exemple-5","language":"javascript","code":"<h5>Je suis un titre de niveau 5</h5>"},
      {"type":"code","filename":"page-25-exemple-6","language":"javascript","code":"<h6>Je suis un titre de niveau 6</h6>"},
      {"type":"p","text":"Plus le chiffre est proche de 1, plus le titre est important et inversement."},
      {"type":"p","text":"Le titre de niveau 1 est le titre principal d’une page web. Il doit être unique."},
      {"type":"p","text":"Les titres de niveau 2 à 6 sont des sous-titres. Ils peuvent être multiples."},
      {"type":"h","text":"& Ces titres ont un poids important en termes de référencement (SEO)."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-25-exemple-7","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-25-exemple-8","language":"javascript","code":"Liens <a>"},
      {"type":"image","src":"images/laconsole/html-p025.jpg","alt":"Page originale de HTML.pdf - page 25"},
      {"type":"h","text":"Page 26"},
      {"type":"code","filename":"page-26-exemple-1","language":"javascript","code":"La balise <a>  (« Anchor ») permet de créer un lien hypertexte vers une autre page"},
      {"type":"p","text":"web. Cette balise est dédiée à la navigation au sein d’un site web."},
      {"type":"p","text":"Elle possède un attribut href , spéciﬁant la ressource ciblée par le lien"},
      {"type":"p","text":"(généralement une page web). Cette ressource peut être spéciﬁée via une URL"},
      {"type":"p","text":"complète dite absolue ( https://... ) ou relative ( /... )."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-26-exemple-2","language":"javascript","code":"<a href=\"...\">Démo</a>"},
      {"type":"p","text":"Un lien hypertexte peut être interne ou externe."},
      {"type":"h","text":"Lien interne"},
      {"type":"p","text":"Un lien interne pointe sur le même serveur que la page HTML contenant le lien"},
      {"type":"p","text":"hypertexte. Il peut s’agir d’une ressource (page HTML, image, document PDF…) ou"},
      {"type":"h","text":"d’un élément de la page (via une ancre nommée)."},
      {"type":"h","text":"Ressource interne"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-26-exemple-3","language":"javascript","code":"<a href=\"demo/mapage.html\">Démo</a>"},
      {"type":"p","text":"Au clic sur le lien, nous serons dirigés vers la ressource mapage.html , située dans"},
      {"type":"p","text":"le dossier"},
      {"type":"p","text":"demo  (admettant que ce dossier se trouve au même niveau"},
      {"type":"p","text":"d’arborescence - dans le même dossier - que le ﬁchier contenant le lien)."},
      {"type":"image","src":"images/laconsole/html-p026.jpg","alt":"Page originale de HTML.pdf - page 26"},
      {"type":"h","text":"Page 27"},
      {"type":"h","text":"Ancre nommée"},
      {"type":"p","text":"Les ancres nommées sont des liens que l’on fera non pas vers une nouvelle page"},
      {"type":"h","text":"mais vers une zone de la page actuelle."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-27-exemple-1","language":"javascript","code":"<a href=\"#demo\">Voir la démo</a>"},
      {"type":"code","filename":"page-27-exemple-2","language":"javascript","code":"<p id=\"demo\">Je suis la démo</p>"},
      {"type":"p","text":"Au clic sur le lien, le navigateur scrollera au sein de la page jusqu’à l’élément"},
      {"type":"p","text":"HTML possédant l’attribut id  « demo ». La valeur de l’attribut href  doit être"},
      {"type":"p","text":"précédée d’un # , suivi de la valeur de l’attribut id  de la zone ciblée."},
      {"type":"h","text":"Lien externe"},
      {"type":"p","text":"Un lien externe pointe vers une ressource située sur un serveur différent de celui"},
      {"type":"p","text":"sur lequel est située notre page HTML."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-27-exemple-3","language":"javascript","code":"<a href=\"https://google.fr\" target=\"_blank\">Aller sur Goo"},
      {"type":"p","text":"Au clic sur le lien, nous serons dirigés vers le site\n. Vous"},
      {"type":"p","text":"https://google.fr"},
      {"type":"p","text":"constaterez la présence d’un attribut facultatif target=\"_blank\"  dont le rôle est"},
      {"type":"h","text":"de faire en sorte que la page cible s’ouvre dans un nouvel onglet. Son usage est"},
      {"type":"p","text":"recommandé lors de la création de liens externes car il permet de garder ouvert"},
      {"type":"image","src":"images/laconsole/html-p027.jpg","alt":"Page originale de HTML.pdf - page 27"},
      {"type":"h","text":"Page 28"},
      {"type":"p","text":"notre site web aﬁn que l’utilisateur puisse y revenir facilement."},
      {"type":"h","text":"Dans la mesure où nous ne sommes pas propriétaires de la ressource"},
      {"type":"p","text":"vers laquelle pointe notre lien externe, nous ne pouvons pas garantir sa"},
      {"type":"h","text":"⚠"},
      {"type":"p","text":"validité dans le temps (changement de nom de domaine, ressource"},
      {"type":"p","text":"renommée ou supprimée…)."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-28-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-28-exemple-2","language":"javascript","code":"Images <img>"},
      {"type":"code","filename":"page-28-exemple-3","language":"javascript","code":"La balise <img>  (« IMaGe ») permet de créer une image. Cette balise est orpheline"},
      {"type":"p","text":"et possède deux attributs obligatoires :"},
      {"type":"p","text":"src  : spéciﬁe le chemin vers l’image à afﬁcher."},
      {"type":"p","text":"alt : il s’agit d’un texte dit « alternatif » dont le rôle est de décrire l’image. Cet"},
      {"type":"p","text":"attribut est fortement recommandé pour des raisons :"},
      {"type":"p","text":"1. De référencement (SEO) : il permettra aux moteurs de recherche de"},
      {"type":"p","text":"comprendre ce que représente votre image car leurs robots ne savent pas"},
      {"type":"image","src":"images/laconsole/html-p028.jpg","alt":"Page originale de HTML.pdf - page 28"},
      {"type":"h","text":"Page 29"},
      {"type":"p","text":"encore les interpréter. Notez par ailleurs que cela est de moins en moins"},
      {"type":"p","text":"vrai avec l’exploitation de l’intelligence artiﬁcielle pour la reconnaissance"},
      {"type":"p","text":"d’images."},
      {"type":"p","text":"2. D’accessibilité : il sera lu par des synthétiseurs vocaux pour décrire votre"},
      {"type":"h","text":"image à un malvoyant. - D’expérience utilisateur (UX) : il sera afﬁché si"},
      {"type":"p","text":"l’image ne peut pas être chargée."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-29-exemple-1","language":"javascript","code":"<img src=\"images/pic-du-midi-ossau.png\" alt=\"Photo du Pic"},
      {"type":"p","text":"L’attribut src  est assez similaire à l’attribut href  dans la mesure où il spéciﬁe le"},
      {"type":"p","text":"chemin vers une ressource. Cette ressource peut aussi bien être interne ou externe."},
      {"type":"p","text":"Une grande partie du poids d’une page web est liée au poids des images,"},
      {"type":"h","text":"⚠"},
      {"type":"p","text":"c’est donc un critère à ne pas négliger pour votre SEO. Il convient donc de"},
      {"type":"h","text":"correctement les redimensionner et compresser en amont."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-29-exemple-2","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"image","src":"images/laconsole/html-p029.jpg","alt":"Page originale de HTML.pdf - page 29"},
      {"type":"h","text":"Page 30"},
      {"type":"h","text":"Listes"},
      {"type":"p","text":"Les listes vont nous permettre de lister et regrouper plusieurs éléments rattachés"},
      {"type":"p","text":"à une thématique commune. En HTML, on distingue 3 familles de listes : les listes"},
      {"type":"h","text":"non-ordonnées, ordonnées et de déﬁnition."},
      {"type":"code","filename":"page-30-exemple-1","language":"javascript","code":"Liste non-ordonnée <ul>"},
      {"type":"p","text":"Les listes non-ordonnées sont les plus courantes, chaque puce est représentée par"},
      {"type":"h","text":"un cercle noir plein."},
      {"type":"code","filename":"page-30-exemple-2","language":"javascript","code":"On déclare une liste non numérotée avec la balise <ul>  (« Unordered List »)."},
      {"type":"code","filename":"page-30-exemple-3","language":"javascript","code":"On déclare chaque élément contenu dans la liste avec la balise <li>  (« List"},
      {"type":"p","text":"Item »)."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-30-exemple-4","language":"javascript","code":"<p>J'adore :</p>"},
      {"type":"code","filename":"page-30-exemple-5","language":"javascript","code":"<ul>"},
      {"type":"code","filename":"page-30-exemple-6","language":"javascript","code":"<li>La programmation</li>"},
      {"type":"code","filename":"page-30-exemple-7","language":"javascript","code":"<li>La montagne</li>"},
      {"type":"code","filename":"page-30-exemple-8","language":"javascript","code":"<li>La musique</li>"},
      {"type":"code","filename":"page-30-exemple-9","language":"javascript","code":"</ul>"},
      {"type":"image","src":"images/laconsole/html-p030.jpg","alt":"Page originale de HTML.pdf - page 30"},
      {"type":"h","text":"Page 31"},
      {"type":"code","filename":"page-31-exemple-1","language":"javascript","code":"Liste ordonnée <ol>"},
      {"type":"p","text":"Les listes ordonnées sont utiles pour afﬁcher des informations visuellement"},
      {"type":"p","text":"ordonnées. Chaque puce est représentée par un nombre entier croissant."},
      {"type":"code","filename":"page-31-exemple-2","language":"javascript","code":"On déclare une liste non numérotée avec la balise <ol>  (« Ordered List »)."},
      {"type":"code","filename":"page-31-exemple-3","language":"javascript","code":"On déclare chaque élément contenu dans la liste avec la balise <li>  (« List"},
      {"type":"p","text":"Item »)."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-31-exemple-4","language":"javascript","code":"<p>Recette du gâteau au chocolat :</p>"},
      {"type":"code","filename":"page-31-exemple-5","language":"javascript","code":"<ol>"},
      {"type":"code","filename":"page-31-exemple-6","language":"javascript","code":"<li>Préchauffez votre four à 180°C (thermostat 6). Da"},
      {"type":"code","filename":"page-31-exemple-7","language":"javascript","code":"<li>Dans un saladier, ajoutez le sucre, les œufs, la"},
      {"type":"code","filename":"page-31-exemple-8","language":"javascript","code":"<li>Ajoutez le mélange chocolat/beurre. Mélangez bien"},
      {"type":"code","filename":"page-31-exemple-9","language":"javascript","code":"<li>...</li>"},
      {"type":"code","filename":"page-31-exemple-10","language":"javascript","code":"</ol>"},
      {"type":"code","filename":"page-31-exemple-11","language":"javascript","code":"Liste de déﬁnition <dl>"},
      {"type":"p","text":"Les listes de déﬁnition sont utilisées pour déﬁnir des termes, à la manière d’un"},
      {"type":"p","text":"lexique. Visuellement, les navigateurs vont mettre en forme ces listes en décalant"},
      {"type":"p","text":"le terme à déﬁnir par rapport à sa description."},
      {"type":"code","filename":"page-31-exemple-12","language":"javascript","code":"On déclare une liste de déﬁnition avec la balise <dl>  (« Deﬁnition List »)."},
      {"type":"image","src":"images/laconsole/html-p031.jpg","alt":"Page originale de HTML.pdf - page 31"},
      {"type":"h","text":"Page 32"},
      {"type":"code","filename":"page-32-exemple-1","language":"javascript","code":"On déclare chaque terme à déﬁnir avec la balise <dt>  (« Deﬁnition Term »)."},
      {"type":"code","filename":"page-32-exemple-2","language":"javascript","code":"On déclare chaque description du terme avec la balise <dd>  (« Deﬁnition"},
      {"type":"p","text":"Description »)."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-32-exemple-3","language":"javascript","code":"<dl>"},
      {"type":"code","filename":"page-32-exemple-4","language":"javascript","code":"<dt>API</dt>"},
      {"type":"code","filename":"page-32-exemple-5","language":"javascript","code":"<dd>Une API (Application Programming Interface) est u"},
      {"type":"code","filename":"page-32-exemple-6","language":"javascript","code":"<dt>HTTP</dt>"},
      {"type":"code","filename":"page-32-exemple-7","language":"javascript","code":"<dd>Le protocole HTTP (HyperText Transfer Protocol) a"},
      {"type":"code","filename":"page-32-exemple-8","language":"javascript","code":"</dl>"},
      {"type":"p","text":"Les listes imbriquées"},
      {"type":"code","filename":"page-32-exemple-9","language":"javascript","code":"Quel que soit son type, une liste peut très bien être imbriquée dans une autre."},
      {"type":"code","filename":"page-32-exemple-10","language":"javascript","code":"Pour cela, à la place d’un item de liste <li> , on redéclare une liste <ul> ,"},
      {"type":"code","filename":"page-32-exemple-11","language":"javascript","code":"<ol>  ou <dl> ."},
      {"type":"image","src":"images/laconsole/html-p032.jpg","alt":"Page originale de HTML.pdf - page 32"},
      {"type":"h","text":"Page 33"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-33-exemple-1","language":"javascript","code":"<p>J'adore :</p>"},
      {"type":"code","filename":"page-33-exemple-2","language":"javascript","code":"<ol>"},
      {"type":"code","filename":"page-33-exemple-3","language":"javascript","code":"<li>L'informatique</li>"},
      {"type":"code","filename":"page-33-exemple-4","language":"javascript","code":"<ul>"},
      {"type":"code","filename":"page-33-exemple-5","language":"javascript","code":"<li>Le langages web</li>"},
      {"type":"code","filename":"page-33-exemple-6","language":"javascript","code":"<li>L'application « Notion »</li>"},
      {"type":"code","filename":"page-33-exemple-7","language":"javascript","code":"</ul>"},
      {"type":"code","filename":"page-33-exemple-8","language":"javascript","code":"<li>La montagne</li>"},
      {"type":"code","filename":"page-33-exemple-9","language":"javascript","code":"<ul>"},
      {"type":"code","filename":"page-33-exemple-10","language":"javascript","code":"<li>Le ski</li>"},
      {"type":"code","filename":"page-33-exemple-11","language":"javascript","code":"<li>Le snowboard</li>"},
      {"type":"code","filename":"page-33-exemple-12","language":"javascript","code":"<li>L'escalade</li>"},
      {"type":"code","filename":"page-33-exemple-13","language":"javascript","code":"</ul>"},
      {"type":"code","filename":"page-33-exemple-14","language":"javascript","code":"<li>La musique</li>"},
      {"type":"code","filename":"page-33-exemple-15","language":"javascript","code":"<ul>"},
      {"type":"code","filename":"page-33-exemple-16","language":"javascript","code":"<li>La MAO (musique assistée par ordinateur)</l"},
      {"type":"code","filename":"page-33-exemple-17","language":"javascript","code":"<li>Le rap</li>"},
      {"type":"code","filename":"page-33-exemple-18","language":"javascript","code":"<li>La batterie</li>"},
      {"type":"code","filename":"page-33-exemple-19","language":"javascript","code":"</ul>"},
      {"type":"code","filename":"page-33-exemple-20","language":"javascript","code":"</ol>"},
      {"type":"image","src":"images/laconsole/html-p033.jpg","alt":"Page originale de HTML.pdf - page 33"},
      {"type":"h","text":"Page 34"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-34-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-34-exemple-2","language":"javascript","code":"Tableaux <table>"},
      {"type":"p","text":"Les tableaux sont utiles pour présenter des données organisées. Leur structure"},
      {"type":"p","text":"peut être simple (peu de balises) mais aussi complexe (beaucoup de balises)."},
      {"type":"h","text":"Tableau simple"},
      {"type":"p","text":"Lors de la création d’un tableau, seules 3 balises sont essentielles :"},
      {"type":"code","filename":"page-34-exemple-3","language":"javascript","code":"Un tableau est déclaré avec la balise <table>  qui agit comme un conteneur."},
      {"type":"code","filename":"page-34-exemple-4","language":"javascript","code":"Chaque ligne du tableau est déclarée avec la balise <tr>  (« Table Row »)"},
      {"type":"code","filename":"page-34-exemple-5","language":"javascript","code":"Chaque cellule de données du tableau est déclarée avec la balise <td>  («"},
      {"type":"p","text":"Table Data »)"},
      {"type":"image","src":"images/laconsole/html-p034.jpg","alt":"Page originale de HTML.pdf - page 34"},
      {"type":"h","text":"Page 35"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-35-exemple-1","language":"javascript","code":"<table>"},
      {"type":"code","filename":"page-35-exemple-2","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-35-exemple-3","language":"javascript","code":"<td>Violet</td>"},
      {"type":"code","filename":"page-35-exemple-4","language":"javascript","code":"<td>#645ff2</td>"},
      {"type":"code","filename":"page-35-exemple-5","language":"javascript","code":"<td>rgb(100, 95, 242)</td>"},
      {"type":"code","filename":"page-35-exemple-6","language":"javascript","code":"</tr>"},
      {"type":"code","filename":"page-35-exemple-7","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-35-exemple-8","language":"javascript","code":"<td>Rose</td>"},
      {"type":"code","filename":"page-35-exemple-9","language":"javascript","code":"<td>#e12d79</td>"},
      {"type":"code","filename":"page-35-exemple-10","language":"javascript","code":"<td>rgb(225, 45, 121)</td>"},
      {"type":"code","filename":"page-35-exemple-11","language":"javascript","code":"</tr>"},
      {"type":"code","filename":"page-35-exemple-12","language":"javascript","code":"</table>"},
      {"type":"h","text":"Ce tableau liste des couleurs, associées à leur code hexadécimal et RGB."},
      {"type":"h","text":"Tableau structuré"},
      {"type":"p","text":"Il est possible de structurer davantage un tableau en faisant usage de 5 balises"},
      {"type":"p","text":"supplémentaires."},
      {"type":"h","text":"En-tête, corps et pied"},
      {"type":"p","text":"On peut distinguer trois parties dans un tableau :"},
      {"type":"p","text":"1. (en haut) L’en-tête du tableau contenant généralement les intitulés des"},
      {"type":"code","filename":"page-35-exemple-13","language":"javascript","code":"colonnes. On la déclare avec <thead> ."},
      {"type":"image","src":"images/laconsole/html-p035.jpg","alt":"Page originale de HTML.pdf - page 35"},
      {"type":"h","text":"Page 36"},
      {"type":"p","text":"2. (au milieu) Le corps du tableau contenant les informations de notre tableau."},
      {"type":"code","filename":"page-36-exemple-1","language":"javascript","code":"On le déclare avec <tbody> ."},
      {"type":"p","text":"3. (en bas) Le pied du tableau servant à calculer des valeurs (totaux,"},
      {"type":"h","text":"moyennes…) ou à rappeler les intitulés des colonnes si le tableau est long. On"},
      {"type":"code","filename":"page-36-exemple-2","language":"javascript","code":"le déclare avec <tfoot> ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-36-exemple-3","language":"javascript","code":"<table>"},
      {"type":"code","filename":"page-36-exemple-4","language":"javascript","code":"<thead>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-36-exemple-5","language":"javascript","code":"<thead>"},
      {"type":"code","filename":"page-36-exemple-6","language":"javascript","code":"<tbody>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-36-exemple-7","language":"javascript","code":"</tbody>"},
      {"type":"code","filename":"page-36-exemple-8","language":"javascript","code":"<tfoot>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-36-exemple-9","language":"javascript","code":"</tfoot>"},
      {"type":"code","filename":"page-36-exemple-10","language":"javascript","code":"</table>"},
      {"type":"h","text":"Cellules d’en-tête"},
      {"type":"code","filename":"page-36-exemple-11","language":"javascript","code":"Aussi, chaque cellule d’en-tête sera déclarée avec la balise <th>  (« Table Header"},
      {"type":"code","filename":"page-36-exemple-12","language":"javascript","code":"») et non avec la balise <td> ."},
      {"type":"image","src":"images/laconsole/html-p036.jpg","alt":"Page originale de HTML.pdf - page 36"},
      {"type":"h","text":"Page 37"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-37-exemple-1","language":"javascript","code":"<table>"},
      {"type":"code","filename":"page-37-exemple-2","language":"javascript","code":"<thead>"},
      {"type":"code","filename":"page-37-exemple-3","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-37-exemple-4","language":"javascript","code":"<th>Nom</th>"},
      {"type":"code","filename":"page-37-exemple-5","language":"javascript","code":"<th>Code hexadécimal</th>"},
      {"type":"code","filename":"page-37-exemple-6","language":"javascript","code":"<th>Code RGB</th>"},
      {"type":"code","filename":"page-37-exemple-7","language":"javascript","code":"</tr>"},
      {"type":"code","filename":"page-37-exemple-8","language":"javascript","code":"<thead>"},
      {"type":"code","filename":"page-37-exemple-9","language":"javascript","code":"<tbody>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-37-exemple-10","language":"javascript","code":"</tbody>"},
      {"type":"code","filename":"page-37-exemple-11","language":"javascript","code":"<tfoot>"},
      {"type":"code","filename":"page-37-exemple-12","language":"javascript","code":"<tr>"},
      {"type":"code","filename":"page-37-exemple-13","language":"javascript","code":"<th>Nom</th>"},
      {"type":"code","filename":"page-37-exemple-14","language":"javascript","code":"<th>Code hexadécimal</th>"},
      {"type":"code","filename":"page-37-exemple-15","language":"javascript","code":"<th>Code RGB</th>"},
      {"type":"code","filename":"page-37-exemple-16","language":"javascript","code":"</tr>"},
      {"type":"code","filename":"page-37-exemple-17","language":"javascript","code":"</tfoot>"},
      {"type":"code","filename":"page-37-exemple-18","language":"javascript","code":"</table>"},
      {"type":"h","text":"Légende"},
      {"type":"code","filename":"page-37-exemple-19","language":"javascript","code":"Une légende peut être ajoutée avec la balise <caption>  aﬁn de décrire le"},
      {"type":"h","text":"tableau."},
      {"type":"image","src":"images/laconsole/html-p037.jpg","alt":"Page originale de HTML.pdf - page 37"},
      {"type":"h","text":"Page 38"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-38-exemple-1","language":"javascript","code":"<table>"},
      {"type":"code","filename":"page-38-exemple-2","language":"javascript","code":"<caption>Les couleurs de laConsole</caption>"},
      {"type":"code","filename":"page-38-exemple-3","language":"javascript","code":"<thead>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-38-exemple-4","language":"javascript","code":"<thead>"},
      {"type":"code","filename":"page-38-exemple-5","language":"javascript","code":"<tbody>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-38-exemple-6","language":"javascript","code":"</tbody>"},
      {"type":"code","filename":"page-38-exemple-7","language":"javascript","code":"<tfoot>"},
      {"type":"p","text":"<!-- ... -->"},
      {"type":"code","filename":"page-38-exemple-8","language":"javascript","code":"</tfoot>"},
      {"type":"code","filename":"page-38-exemple-9","language":"javascript","code":"</table>"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-38-exemple-10","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-38-exemple-11","language":"javascript","code":"Contenus embarqués <iframe>"},
      {"type":"code","filename":"page-38-exemple-12","language":"javascript","code":"La balise <iframe>  « Inline FRAME » permet d’intégrer une page HTML au sein"},
      {"type":"image","src":"images/laconsole/html-p038.jpg","alt":"Page originale de HTML.pdf - page 38"},
      {"type":"h","text":"Page 39"},
      {"type":"p","text":"d’une autre."},
      {"type":"p","text":"Un iframe représente un véritable contexte de navigation avec lequel il est"},
      {"type":"p","text":"possible d’interagir, comme si nous étions sur la vraie page web."},
      {"type":"h","text":"On l’utilise la plupart du temps aﬁn d’intégrer des services interactifs externes à"},
      {"type":"p","text":"notre site web comme une carte Google Maps, un widget météo, un lecteur"},
      {"type":"p","text":"YouTube, un lecteur Spotify…"},
      {"type":"p","text":"On spéciﬁe le chemin vers la page à intégrer via l’attribut src ."},
      {"type":"p","text":"Pour une meilleure accessibilité, on prendra également l’habitude d’ajouter un"},
      {"type":"p","text":"attribut title  aﬁn de décrire de façon claire et concise, le contenu embarqué."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-39-exemple-1","language":"javascript","code":"<iframe src=\"https://meteofrance.com/widget/prevision/330"},
      {"type":"h","text":"Il est possible de déﬁnir une Politique de Sécurité de Contenu ou CSP"},
      {"type":"h","text":"&"},
      {"type":"p","text":"(Content Security Policy) sur son serveur web aﬁn d’interdire aux autres"},
      {"type":"code","filename":"page-39-exemple-2","language":"javascript","code":"sites d’intégrer nos contenus via des éléments <iframe> ."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-39-exemple-3","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"image","src":"images/laconsole/html-p039.jpg","alt":"Page originale de HTML.pdf - page 39"},
      {"type":"h","text":"Page 40"},
      {"type":"code","filename":"page-40-exemple-1","language":"javascript","code":"Médias riches <video> et <audio>"},
      {"type":"p","text":"S’il est très fréquent d’ajouter des images sur un site web, il peut également être"},
      {"type":"h","text":"intéressant d’y insérer un lecteur vidéo ou audio."},
      {"type":"code","filename":"page-40-exemple-2","language":"javascript","code":"Les balises <video>  et <audio>  permettent respectivement d’insérer un lecteur"},
      {"type":"p","text":"vidéo et audio au sein d’une page."},
      {"type":"p","text":"La source vers le média est renseignée via un attribut src  au sein d’une balise"},
      {"type":"code","filename":"page-40-exemple-3","language":"javascript","code":"<source> ."},
      {"type":"h","text":"Les navigateurs ne prennent pas en charge l’ensemble des formats vidéo (mp4,"},
      {"type":"p","text":"webm…). Il sera alors possible de fournir plusieurs sources en spéciﬁant plusieurs"},
      {"type":"code","filename":"page-40-exemple-4","language":"javascript","code":"balises <source>  ; le navigateur utilisera alors la première ressource dont il"},
      {"type":"p","text":"connaît le format."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-40-exemple-5","language":"javascript","code":"<video controls>"},
      {"type":"code","filename":"page-40-exemple-6","language":"javascript","code":"<source src=\"movies/movie1.mp4\" type=\"video/mp4\">"},
      {"type":"code","filename":"page-40-exemple-7","language":"javascript","code":"<source src=\"movies/movie1.webm\" type=\"video/webm\">"},
      {"type":"p","text":"Votre navigateur ne prend pas en charge l'élément vid"},
      {"type":"code","filename":"page-40-exemple-8","language":"javascript","code":"</video>"},
      {"type":"image","src":"images/laconsole/html-p040.jpg","alt":"Page originale de HTML.pdf - page 40"},
      {"type":"h","text":"Page 41"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-41-exemple-1","language":"javascript","code":"<audio controls>"},
      {"type":"code","filename":"page-41-exemple-2","language":"javascript","code":"<source src=\"sounds/birds.mp3\" type=\"audio/mp3\">"},
      {"type":"p","text":"Votre navigateur ne prend pas en charge l'élément aud"},
      {"type":"code","filename":"page-41-exemple-3","language":"javascript","code":"</audio>"},
      {"type":"p","text":"D’autres attributs facultatifs vont permettre de customiser davantage le lecteur,"},
      {"type":"p","text":"comme :"},
      {"type":"p","text":"controls  : afﬁchage des options de contrôle sur le lecteur (volume, bouton"},
      {"type":"p","text":"et barre de lecture…)."},
      {"type":"p","text":"muted  : coupe le son."},
      {"type":"p","text":"loop  : lecture en boucle."},
      {"type":"p","text":"autoplay  : lecture automatique. Pour des raisons d’expérience utilisateur"},
      {"type":"p","text":"(éviter les sursauts en arrivant sur un site…), nombreux sont les navigateurs"},
      {"type":"p","text":"qui bloquent la fonction de lecture automatique si le son du lecteur n’est pas"},
      {"type":"p","text":"coupé. Si vous déﬁnissez l’attribut autoplay , assurez-vous alors d’avoir"},
      {"type":"p","text":"également déﬁni l’attribut muted ."},
      {"type":"p","text":"…"},
      {"type":"p","text":"Si le navigateur ne prend pas en charge les lecteurs vidéos ou audio HTML5, alors"},
      {"type":"code","filename":"page-41-exemple-4","language":"javascript","code":"un message pourra être noté dans un paragraphe, au sein de la balise <video> ."},
      {"type":"image","src":"images/laconsole/html-p041.jpg","alt":"Page originale de HTML.pdf - page 41"},
      {"type":"h","text":"Page 42"},
      {"type":"p","text":"Si les lecteurs vidéo et audio natifs du langage HTML s’avèrent utiles"},
      {"type":"p","text":"lorsque les vidéos sont uploadées sur le serveur du site web, notez que"},
      {"type":"h","text":"&"},
      {"type":"p","text":"dans la majorité des cas, l’intégration de vidéos ou audios se fait via des «"},
      {"type":"code","filename":"page-42-exemple-1","language":"javascript","code":"embed » (= intégrations via l’usage de la base <iframe> ) des lecteurs"},
      {"type":"p","text":"YouTube, Vimeo, Spotify, Deezer, SoundCloud…"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-42-exemple-2","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-42-exemple-3","language":"javascript","code":"Mise en valeur <em> et <strong>"},
      {"type":"p","text":"Sur un site web, en termes de SEO, tous les mots ne sont pas égaux."},
      {"type":"p","text":"Par exemple, sur la page d’accueil d’une plateforme d’elearning dédiée au"},
      {"type":"p","text":"développement web, il est évident que les mots :"},
      {"type":"p","text":"“formations”, “développement web”, “gratuite”, “développeur”, “étudiant”…"},
      {"type":"h","text":"Auront plus d’importance que :"},
      {"type":"p","text":"“bonjour”, “koala”, “le”, “rouge”…"},
      {"type":"image","src":"images/laconsole/html-p042.jpg","alt":"Page originale de HTML.pdf - page 42"},
      {"type":"h","text":"Page 43"},
      {"type":"code","filename":"page-43-exemple-1","language":"javascript","code":"Si nous avons vu que les balises <h*>  jouent un rôle important dans la"},
      {"type":"p","text":"pondération des mots pour le référencement, elles ne sont pas seules."},
      {"type":"code","filename":"page-43-exemple-2","language":"javascript","code":"Les balises <em>  (« EMphasis ») et <strong>  vont respectivement permettre de"},
      {"type":"p","text":"déﬁnir une mise en valeur plus élevée pour un mot ou un ensemble de mots."},
      {"type":"code","filename":"page-43-exemple-3","language":"javascript","code":"<strong>  confère une mise en valeur supérieure à <em> ."},
      {"type":"p","text":"Cette mise en valeur se caractérise par :"},
      {"type":"p","text":"Une intonation plus forte de la part des synthétiseurs vocaux."},
      {"type":"h","text":"Une pondération accrue pour le SEO."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-43-exemple-4","language":"javascript","code":"<p>Venez là, <em>tout de suite</em> !</p>"},
      {"type":"code","filename":"page-43-exemple-5","language":"javascript","code":"<p>"},
      {"type":"p","text":"Vous êtes étudiant ? Développeur ?"},
      {"type":"code","filename":"page-43-exemple-6","language":"javascript","code":"Retrouvez sur la console des dizaines de <strong>form"},
      {"type":"code","filename":"page-43-exemple-7","language":"javascript","code":"</p>"},
      {"type":"p","text":"Visuellement, les navigateurs vont écrire en italique les termes contenus"},
      {"type":"code","filename":"page-43-exemple-8","language":"javascript","code":"dans les balises <em>  et en gras les termes contenus dans les balises"},
      {"type":"h","text":"&"},
      {"type":"code","filename":"page-43-exemple-9","language":"javascript","code":"<strong> . En revanche, leur utilisation ne doit en aucun cas servir à faire"},
      {"type":"p","text":"de la mise en forme, ce qui est le rôle du langage CSS."},
      {"type":"image","src":"images/laconsole/html-p043.jpg","alt":"Page originale de HTML.pdf - page 43"},
      {"type":"h","text":"Page 44"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-44-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-44-exemple-2","language":"javascript","code":"Dessins <canvas>"},
      {"type":"code","filename":"page-44-exemple-3","language":"javascript","code":"La balise <canvas>  permet de déﬁnir un conteneur dans lequel il sera possible de"},
      {"type":"h","text":"réaliser des graphiques à l’aide du langage JavaScript."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-44-exemple-4","language":"javascript","code":"<canvas id=\"zone-de-dessin\">"},
      {"type":"p","text":"Votre navigateur ne prend pas en charge l'élément can"},
      {"type":"code","filename":"page-44-exemple-5","language":"javascript","code":"</canvas>"},
      {"type":"p","text":"Son exploitation nécessitant des compétences en JS, nous ne détaillerons pas"},
      {"type":"p","text":"comment dessiner à l’intérieur. Vous en apprendrez plus sur le site\n."},
      {"type":"p","text":"w3school"},
      {"type":"image","src":"images/laconsole/html-p044.jpg","alt":"Page originale de HTML.pdf - page 44"},
      {"type":"h","text":"Page 45"},
      {"type":"p","text":"Précédent :\n3. En-tête et\nMétadonnées\n〈"},
      {"type":"p","text":"Suivant :\n5. Créer des\nFormulaires"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":","},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des\nLEGO. Plus tard, je découvre le dev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et\nsur laConsole."},
      {"type":"p","text":""},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p045.jpg","alt":"Page originale de HTML.pdf - page 45"},
      {"type":"h","text":"Page 46"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTML › Créer des Formulaires"},
      {"type":"h","text":""},
      {"type":"p","text":"Les formulaires sont des éléments indispensables pour rendre une"},
      {"type":"p","text":"page web interactive."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/ 5. CRÉER DES FORMULAIRES"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"p","text":"Les formulaires permettent aux utilisateurs d’interagir avec la page via des"},
      {"type":"p","text":"champs de texte, des cases à cocher, des menus de sélection, des boutons, etc."},
      {"type":"p","text":"Ils sont extrêmement utiles lorsqu’il s’agit d’envoyer des données à un serveur"},
      {"type":"p","text":"web."},
      {"type":"p","text":"Quelques exemples d’utilisations des formulaires sur le web :"},
      {"type":"image","src":"images/laconsole/html-p046.jpg","alt":"Page originale de HTML.pdf - page 46"},
      {"type":"h","text":"Page 47"},
      {"type":"p","text":"Filtrer des produits sur un site e-commerce"},
      {"type":"p","text":"S’inscrire / se connecter à un site"},
      {"type":"p","text":"Uploader des ﬁchiers"},
      {"type":"p","text":"Mettre en place un moteur de recherche"},
      {"type":"p","text":"Formulaire de contact"},
      {"type":"p","text":"…"},
      {"type":"code","filename":"page-47-exemple-1","language":"html","code":"Conteneur <form>"},
      {"type":"code","filename":"page-47-exemple-2","language":"html","code":"Un formulaire se déclare au sein de la balise <form>  qui joue le rôle de conteneur."},
      {"type":"p","text":"Cette balise fonctionne avec 2 attributs :"},
      {"type":"h","text":"L’attribut action  renseigne une URL à laquelle doivent être envoyées les"},
      {"type":"p","text":"données collectées par le formulaire. Valeur par défaut : /"},
      {"type":"p","text":"L’attribut method  déﬁni la méthode HTTP utilisée pour envoyer les données."},
      {"type":"p","text":"Valeur par défaut : GET"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-47-exemple-3","language":"html","code":"<form action=\"ma-page.php\" method=\"GET\"></form>"},
      {"type":"p","text":"Nous ne détaillerons pas davantage le rôle des attributs method  et"},
      {"type":"h","text":"%"},
      {"type":"p","text":"action  qui ne présenteront un véritable interêt que lors du traitement du"},
      {"type":"p","text":"formulaire avec un langage comme PHP."},
      {"type":"image","src":"images/laconsole/html-p047.jpg","alt":"Page originale de HTML.pdf - page 47"},
      {"type":"h","text":"Page 48"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-48-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-48-exemple-2","language":"javascript","code":"Etiquettes <label>"},
      {"type":"p","text":"Chaque champ de formulaire peut être accompagnée d’une étiquette descriptive."},
      {"type":"code","filename":"page-48-exemple-3","language":"javascript","code":"Cette étiquette est déclarée avec la balise <label> ."},
      {"type":"p","text":"On prendra systématiquement l’habitude de placer un attribut for , désignant"},
      {"type":"p","text":"l’information qui sera saisie dans le champ de formulaire."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-48-exemple-4","language":"html","code":"<form action=\"ma-page.php\" method=\"GET\">"},
      {"type":"code","filename":"page-48-exemple-5","language":"javascript","code":"<label for=\"firstname\">Prénom</label>"},
      {"type":"code","filename":"page-48-exemple-6","language":"javascript","code":"<label for=\"lastname\">Nom</label>"},
      {"type":"code","filename":"page-48-exemple-7","language":"javascript","code":"</form>"},
      {"type":"image","src":"images/laconsole/html-p048.jpg","alt":"Page originale de HTML.pdf - page 48"},
      {"type":"h","text":"Page 49"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-49-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-49-exemple-2","language":"html","code":"Balise polyvalente <input>"},
      {"type":"code","filename":"page-49-exemple-3","language":"html","code":"La balise orpheline <input>  est la plus utilisée pour déﬁnir des champs de"},
      {"type":"p","text":"formulaires. Un input peut se transformer en divers types de champs en fonction"},
      {"type":"code","filename":"page-49-exemple-4","language":"javascript","code":"de son attribut type ."},
      {"type":"p","text":"Nous allons nous pencher sur ses valeurs principales, mais"},
      {"type":"p","text":"il en existe des"},
      {"type":"p","text":"dizaines consultables sur la documentation ofﬁcielle"},
      {"type":"p","text":"."},
      {"type":"h","text":"Champs textuels"},
      {"type":"p","text":"Les champs textuels permettent aux utilisateurs de saisir librement du texte. Ce"},
      {"type":"p","text":"texte peut néanmoins être caractérisé par des formats différents via l’attribut"},
      {"type":"code","filename":"page-49-exemple-5","language":"javascript","code":"type . En fonction de la valeur précisée, le visuel n’est pas toujours identique."},
      {"type":"code","filename":"page-49-exemple-6","language":"javascript","code":"type=\"text\"  : Format textuel standard. Exemple : nom, prénom, titre"},
      {"type":"p","text":"d’article…"},
      {"type":"code","filename":"page-49-exemple-7","language":"javascript","code":"type=\"email\"  : Format spéciﬁque aux emails, à la forme →"},
      {"type":"image","src":"images/laconsole/html-p049.jpg","alt":"Page originale de HTML.pdf - page 49"},
      {"type":"h","text":"Page 50"},
      {"type":"p","text":"*******@****.**  Exemple :\n,\n…"},
      {"type":"code","filename":"page-50-exemple-1","language":"javascript","code":"K3viN33@gmail.com jc-dupont@wanadoo.fr"},
      {"type":"code","filename":"page-50-exemple-2","language":"javascript","code":"type=\"password\"  : Format utilisé pour la saisie de mot de passe. Les saisies"},
      {"type":"p","text":"au clavier sont masquées à l’écran par des « points noirs »."},
      {"type":"code","filename":"page-50-exemple-3","language":"javascript","code":"type=\"number\"  : Format utilisé pour la saisie de nombre. Des petites ﬂèches"},
      {"type":"p","text":"apparaissent dans le champ pour en modiﬁer la valeur. Exemple : âge, prix…"},
      {"type":"code","filename":"page-50-exemple-4","language":"javascript","code":"type=\"url\"  : pour des URLs - indique que la valeur du champ doit"},
      {"type":"p","text":"commencer par http://  ou https:// ."},
      {"type":"p","text":"…"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-50-exemple-5","language":"html","code":"<form>"},
      {"type":"code","filename":"page-50-exemple-6","language":"javascript","code":"<label for=\"firstname\">Prénom :</label>"},
      {"type":"code","filename":"page-50-exemple-7","language":"html","code":"<input type=\"text\" id=\"firstname\" name=\"firstname\" ma"},
      {"type":"code","filename":"page-50-exemple-8","language":"javascript","code":"<label for=\"lastname\">Nom :</label>"},
      {"type":"code","filename":"page-50-exemple-9","language":"html","code":"<input type=\"text\" id=\"lastname\" name=\"lastname\" maxl"},
      {"type":"code","filename":"page-50-exemple-10","language":"javascript","code":"<label for=\"email\">Adresse email :</label>"},
      {"type":"code","filename":"page-50-exemple-11","language":"html","code":"<input type=\"email\" id=\"email\" name=\"email\" required>"},
      {"type":"code","filename":"page-50-exemple-12","language":"javascript","code":"<label for=\"old\">Age :</label>"},
      {"type":"code","filename":"page-50-exemple-13","language":"html","code":"<input type=\"number\" id=\"old\" name=\"old\" placeholder="},
      {"type":"code","filename":"page-50-exemple-14","language":"javascript","code":"</form>"},
      {"type":"code","filename":"page-50-exemple-15","language":"html","code":"id  : Identiﬁe le champ. Si attribut id  de <input>  = attribut for  de"},
      {"type":"code","filename":"page-50-exemple-16","language":"javascript","code":"<label>  → lie l’étiquette au champ. C’est aussi cela qui permet de mettre le"},
      {"type":"p","text":"focus dans le champ lorsque vous cliquez sur le texte de l’étiquette."},
      {"type":"p","text":"placeholder  : Spéciﬁe un texte indicatif grisé dans le champ textuel. À"},
      {"type":"p","text":"l’écriture du premier caractère, ce texte disparaît pour laisser place à la"},
      {"type":"image","src":"images/laconsole/html-p050.jpg","alt":"Page originale de HTML.pdf - page 50"},
      {"type":"h","text":"Page 51"},
      {"type":"p","text":"saisie."},
      {"type":"h","text":"value  : Spéciﬁe une valeur par défaut pour le champ."},
      {"type":"h","text":"maxlength  : Spéciﬁe le nombre de caractères maximal autorisé pour ce"},
      {"type":"p","text":"champ."},
      {"type":"p","text":"required  : Spéciﬁe que ce champ de formulaire est obligatoire."},
      {"type":"p","text":"name  : Spéciﬁe un nom à tous nos champs de formulaire. Cette"},
      {"type":"p","text":"identiﬁcation est essentielle pour récupérer les données côté PHP."},
      {"type":"p","text":"…"},
      {"type":"p","text":"Il est également possible de rattacher une étiquette à un champ sans"},
      {"type":"code","filename":"page-51-exemple-1","language":"javascript","code":"forcément faire usage des attributs for  et id  ; pour cela, on place la"},
      {"type":"h","text":"%"},
      {"type":"code","filename":"page-51-exemple-2","language":"html","code":"balise <input>  à l’intérieur de la balise <label> ."},
      {"type":"h","text":"Sélecteurs"},
      {"type":"p","text":"Les sélecteurs permettent de choisir des options dans une liste. Cette liste peut"},
      {"type":"p","text":"être à choix unique ou multiple."},
      {"type":"h","text":"Choix unique (bouton radio)"},
      {"type":"code","filename":"page-51-exemple-3","language":"javascript","code":"Aussi appelés « boutons radios », on les créé avec l’attribut type=\"radio\" ."},
      {"type":"image","src":"images/laconsole/html-p051.jpg","alt":"Page originale de HTML.pdf - page 51"},
      {"type":"h","text":"Page 52"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-52-exemple-1","language":"html","code":"<form>"},
      {"type":"code","filename":"page-52-exemple-2","language":"javascript","code":"<p>Vous êtes :</p>"},
      {"type":"code","filename":"page-52-exemple-3","language":"html","code":"<input type=\"radio\" value=\"women\" id=\"women\" name=\"ge"},
      {"type":"code","filename":"page-52-exemple-4","language":"javascript","code":"<label for=\"women\">Femme</label>"},
      {"type":"code","filename":"page-52-exemple-5","language":"html","code":"<input type=\"radio\" value=\"men\" id=\"men\" name=\"gender"},
      {"type":"code","filename":"page-52-exemple-6","language":"javascript","code":"<label for=\"other\">Homme</label>"},
      {"type":"code","filename":"page-52-exemple-7","language":"html","code":"<input type=\"radio\" value=\"other\" id=\"other\" name=\"ge"},
      {"type":"code","filename":"page-52-exemple-8","language":"javascript","code":"<label for=\"other\">Autre</label>"},
      {"type":"code","filename":"page-52-exemple-9","language":"javascript","code":"</form>"},
      {"type":"code","filename":"page-52-exemple-10","language":"html","code":"id  : Identiﬁe le champ. Si attribut id  de <input>  = attribut for  de"},
      {"type":"code","filename":"page-52-exemple-11","language":"javascript","code":"<label>  → lie l’étiquette au champ. C’est aussi cela qui permet de mettre le"},
      {"type":"p","text":"focus dans le champ lorsque vous cliquez sur le texte de l’étiquette."},
      {"type":"p","text":"value  : Spéciﬁe la valeur qui sera envoyée via le formulaire si l’option est"},
      {"type":"p","text":"cliquée."},
      {"type":"p","text":"checked  : Permet de pré-cocher le bouton radio."},
      {"type":"p","text":"required  : Spéciﬁe que ce champ de formulaire est obligatoire."},
      {"type":"p","text":"name  : Spéciﬁe un nom à tous nos champs de formulaire. Cette identiﬁcation"},
      {"type":"p","text":"est essentielle pour en récupérer les données côté serveur (avec PHP par"},
      {"type":"p","text":"exemple)."},
      {"type":"code","filename":"page-52-exemple-12","language":"html","code":"Plusieurs balises <input type=\"radio\">  forment une seule entité."},
      {"type":"h","text":"%"},
      {"type":"p","text":"L’attribut name  est donc identique sur tous les champs."},
      {"type":"image","src":"images/laconsole/html-p052.jpg","alt":"Page originale de HTML.pdf - page 52"},
      {"type":"h","text":"Page 53"},
      {"type":"h","text":"Choix multiple (checkbox)"},
      {"type":"code","filename":"page-53-exemple-1","language":"javascript","code":"Aussi appelés « cases à cocher », on les créé avec l’attribut type=\"checkbox\" ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-53-exemple-2","language":"html","code":"<form>"},
      {"type":"code","filename":"page-53-exemple-3","language":"javascript","code":"<p>Langages web maîtrisés :</p>"},
      {"type":"code","filename":"page-53-exemple-4","language":"html","code":"<input type=\"checkbox\" value=\"html\" id=\"html\" name=\"l"},
      {"type":"code","filename":"page-53-exemple-5","language":"javascript","code":"<label for=\"html\">HTML</label>"},
      {"type":"code","filename":"page-53-exemple-6","language":"html","code":"<input type=\"checkbox\" value=\"css\" id=\"css\" name=\"lan"},
      {"type":"code","filename":"page-53-exemple-7","language":"javascript","code":"<label for=\"css\">CSS</label>"},
      {"type":"code","filename":"page-53-exemple-8","language":"html","code":"<input type=\"checkbox\" value=\"js\" id=\"js\" name=\"langu"},
      {"type":"code","filename":"page-53-exemple-9","language":"javascript","code":"<label for=\"js\">JS</label>"},
      {"type":"code","filename":"page-53-exemple-10","language":"html","code":"<input type=\"checkbox\" value=\"php\" id=\"php\" name=\"lan"},
      {"type":"code","filename":"page-53-exemple-11","language":"javascript","code":"<label for=\"php\">PHP</label>"},
      {"type":"code","filename":"page-53-exemple-12","language":"javascript","code":"</form>"},
      {"type":"code","filename":"page-53-exemple-13","language":"html","code":"id  : Identiﬁe le champ. Si attribut id  de <input>  = attribut for  de"},
      {"type":"code","filename":"page-53-exemple-14","language":"javascript","code":"<label>  → lie l’étiquette au champ. C’est aussi cela qui permet de mettre le"},
      {"type":"p","text":"focus dans le champ lorsque vous cliquez sur le texte de l’étiquette."},
      {"type":"p","text":"value  : Spéciﬁe la valeur qui sera envoyée via le formulaire si l’option est"},
      {"type":"p","text":"cliquée."},
      {"type":"p","text":"checked  : Permet de pré-cocher la case."},
      {"type":"p","text":"required  : Spéciﬁe que ce champ de formulaire est obligatoire."},
      {"type":"image","src":"images/laconsole/html-p053.jpg","alt":"Page originale de HTML.pdf - page 53"},
      {"type":"h","text":"Page 54"},
      {"type":"p","text":"name  : Spéciﬁe un nom à tous nos champs de formulaire. Cette identiﬁcation"},
      {"type":"p","text":"est essentielle pour en récupérer les données côté serveur (avec PHP par"},
      {"type":"p","text":"exemple)."},
      {"type":"code","filename":"page-54-exemple-1","language":"html","code":"Plusieurs balises <input type=\"checkbox\">  forment une seule entité."},
      {"type":"p","text":"L’attribut name  est donc identique sur tous les champs. L’usage des"},
      {"type":"h","text":"%"},
      {"type":"p","text":"crochets dans languages[]  indique au serveur qu’il est succeptible de"},
      {"type":"p","text":"recevoir plusieurs données (en programmation, on parle de tableau de"},
      {"type":"h","text":"valeurs)."},
      {"type":"h","text":"Bouton de soumission"},
      {"type":"code","filename":"page-54-exemple-2","language":"html","code":"Il est possible de transformer la balise <input>  en bouton de soumission de"},
      {"type":"code","filename":"page-54-exemple-3","language":"javascript","code":"formulaire via l’attribut type=\"submit\" ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-54-exemple-4","language":"html","code":"<form>"},
      {"type":"code","filename":"page-54-exemple-5","language":"html","code":"<input type=\"submit\" value=\"Valider\">"},
      {"type":"code","filename":"page-54-exemple-6","language":"javascript","code":"</form>"},
      {"type":"p","text":"L’attribut value  permet de renseigner le texte qui sera inscrit dans le bouton."},
      {"type":"image","src":"images/laconsole/html-p054.jpg","alt":"Page originale de HTML.pdf - page 54"},
      {"type":"h","text":"Page 55"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-55-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-55-exemple-2","language":"javascript","code":"Zone de texte <textarea>"},
      {"type":"p","text":"Pour écrire des textes longs (articles de blog, ﬁches produits, formulaire de"},
      {"type":"code","filename":"page-55-exemple-3","language":"html","code":"contact, etc.), la balise <input>  n’est plus adaptée, on utilisera alors la balise"},
      {"type":"code","filename":"page-55-exemple-4","language":"javascript","code":"<textarea> ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-55-exemple-5","language":"html","code":"<form>"},
      {"type":"code","filename":"page-55-exemple-6","language":"javascript","code":"<label for=\"message\">Votre message :</label>"},
      {"type":"code","filename":"page-55-exemple-7","language":"javascript","code":"<textarea placeholder=\"Décrivez la raison de votre ré"},
      {"type":"code","filename":"page-55-exemple-8","language":"javascript","code":"</form>"},
      {"type":"code","filename":"page-55-exemple-9","language":"html","code":"id  : Identiﬁe le champ. Si attribut id  de <input>  = attribut for  de"},
      {"type":"code","filename":"page-55-exemple-10","language":"javascript","code":"<label>  → lie l’étiquette au champ. C’est aussi cela qui permet de mettre le"},
      {"type":"p","text":"focus dans le champ lorsque vous cliquez sur le texte de l’étiquette."},
      {"type":"p","text":"placeholder  : Spéciﬁe un texte indicatif grisé dans le champ textuel. À"},
      {"type":"p","text":"l’écriture du premier caractère, ce texte disparaît pour laisser place à la saisie."},
      {"type":"image","src":"images/laconsole/html-p055.jpg","alt":"Page originale de HTML.pdf - page 55"},
      {"type":"h","text":"Page 56"},
      {"type":"p","text":"required  : Spéciﬁe que ce champ de formulaire est obligatoire."},
      {"type":"p","text":"maxlength  : Spéciﬁe le nombre de caractères maximal autorisé pour ce"},
      {"type":"p","text":"champ."},
      {"type":"p","text":"rows  : Déﬁnit un nombre de lignes pour le champ."},
      {"type":"p","text":"cols  : Déﬁnit un nombre de colonnes pour le champ."},
      {"type":"p","text":"name  : Spéciﬁe un nom à tous nos champs de formulaire. Cette identiﬁcation"},
      {"type":"p","text":"est essentielle pour récupérer les données côté PHP."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-56-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"code","filename":"page-56-exemple-2","language":"javascript","code":"Liste déroulante <select> et <option>"},
      {"type":"h","text":"Une liste déroulante est un sélecteur à choix unique ou multiple. Sa ﬁnalité est la"},
      {"type":"code","filename":"page-56-exemple-3","language":"html","code":"même que celle des balises <input type=\"checkbox\">  et <input"},
      {"type":"code","filename":"page-56-exemple-4","language":"javascript","code":"type=\"radio\"> . Une question légitime se pose alors… Pourquoi existe-t-elle ??"},
      {"type":"p","text":"Cette balise est très utile lorsque de nombreuses options sont sélectionnables"},
      {"type":"p","text":"(départements, code postaux, pays…) car elle a l’avantage de ne pas occuper"},
      {"type":"p","text":"d’espace dans le ﬂux du document."},
      {"type":"image","src":"images/laconsole/html-p056.jpg","alt":"Page originale de HTML.pdf - page 56"},
      {"type":"h","text":"Page 57"},
      {"type":"code","filename":"page-57-exemple-1","language":"javascript","code":"La balise <select>  permet de déclarer une liste déroulante."},
      {"type":"code","filename":"page-57-exemple-2","language":"javascript","code":"Les balises <option>  permettent de déﬁnir des éléments de liste."},
      {"type":"code","filename":"page-57-exemple-3","language":"javascript","code":"La balise <optgroup>  permet quant à elle de regrouper des éléments dans"},
      {"type":"p","text":"un même groupe. Son attribut label  permet de déﬁnir le nom de ce"},
      {"type":"p","text":"groupement d’éléments."},
      {"type":"image","src":"images/laconsole/html-p057.jpg","alt":"Page originale de HTML.pdf - page 57"},
      {"type":"h","text":"Page 58"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-58-exemple-1","language":"html","code":"<form>"},
      {"type":"p","text":"<!-- Liste déroulante simple -->"},
      {"type":"code","filename":"page-58-exemple-2","language":"javascript","code":"<label for=\"category\">Vous êtes un développeur :</lab"},
      {"type":"code","filename":"page-58-exemple-3","language":"javascript","code":"<select id=\"category\" name=\"category\" required>"},
      {"type":"code","filename":"page-58-exemple-4","language":"javascript","code":"<option value=\"back\">Back</option>"},
      {"type":"code","filename":"page-58-exemple-5","language":"javascript","code":"<option value=\"front\">Front</option>"},
      {"type":"code","filename":"page-58-exemple-6","language":"javascript","code":"<option value=\"full-stack\" selected>Full-stack</o"},
      {"type":"code","filename":"page-58-exemple-7","language":"javascript","code":"</select>"},
      {"type":"p","text":"<!-- Liste déroulante stucturée -->"},
      {"type":"code","filename":"page-58-exemple-8","language":"javascript","code":"<label for=\"languages\">Votre langage préféré parmi :<"},
      {"type":"code","filename":"page-58-exemple-9","language":"javascript","code":"<select id=\"languages\" name=\"languages\">"},
      {"type":"code","filename":"page-58-exemple-10","language":"javascript","code":"<optgroup label=\"Front\">"},
      {"type":"code","filename":"page-58-exemple-11","language":"javascript","code":"<option value=\"html\">HTML</option>"},
      {"type":"code","filename":"page-58-exemple-12","language":"javascript","code":"<option value=\"css\">CSS</option>"},
      {"type":"code","filename":"page-58-exemple-13","language":"javascript","code":"<option value=\"js\">Javascript</option>"},
      {"type":"code","filename":"page-58-exemple-14","language":"javascript","code":"</optgroup>"},
      {"type":"code","filename":"page-58-exemple-15","language":"javascript","code":"<optgroup label=\"Back\">"},
      {"type":"code","filename":"page-58-exemple-16","language":"javascript","code":"<option value=\"php\">PHP</option>"},
      {"type":"code","filename":"page-58-exemple-17","language":"javascript","code":"<option value=\"ruby\">Ruby</option>"},
      {"type":"code","filename":"page-58-exemple-18","language":"javascript","code":"</optgroup>"},
      {"type":"code","filename":"page-58-exemple-19","language":"javascript","code":"</select>"},
      {"type":"code","filename":"page-58-exemple-20","language":"javascript","code":"</form>"},
      {"type":"code","filename":"page-58-exemple-21","language":"html","code":"id  : Identiﬁe le champ. Si attribut id  de <input>  = attribut for  de"},
      {"type":"code","filename":"page-58-exemple-22","language":"javascript","code":"<label>  → lie l’étiquette au champ. C’est aussi cela qui permet de mettre le"},
      {"type":"p","text":"focus dans le champ lorsque vous cliquez sur le texte de l’étiquette."},
      {"type":"image","src":"images/laconsole/html-p058.jpg","alt":"Page originale de HTML.pdf - page 58"},
      {"type":"h","text":"Page 59"},
      {"type":"p","text":"required  : Spéciﬁe que ce champ de formulaire est obligatoire."},
      {"type":"p","text":"multiple  : Spéciﬁe que plusieurs options sont sélectionnables."},
      {"type":"code","filename":"page-59-exemple-1","language":"javascript","code":"selected  : S’applique sur une <option>  pour spéciﬁer que celle-ci sera"},
      {"type":"p","text":"sélectionnée par défaut."},
      {"type":"code","filename":"page-59-exemple-2","language":"javascript","code":"label  : S’applique sur un <optgroup>  pour déﬁnir le nom du groupe"},
      {"type":"p","text":"d’options."},
      {"type":"p","text":"name  : Spéciﬁe un nom à tous nos champs de formulaire. Cette identiﬁcation"},
      {"type":"p","text":"est essentielle pour récupérer les données côté PHP."},
      {"type":"p","text":"Précédent :\n4. Balises\nElémentaires\n〈"},
      {"type":"p","text":"Suivant :\n6. Structurer sa\nPage"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"*"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des\nLEGO. Plus tard, je découvre le dev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et\nsur laConsole."},
      {"type":"p","text":""},
      {"type":"image","src":"images/laconsole/html-p059.jpg","alt":"Page originale de HTML.pdf - page 59"},
      {"type":"h","text":"Page 60"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p060.jpg","alt":"Page originale de HTML.pdf - page 60"},
      {"type":"h","text":"Page 61"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTML › Découverte du Langage"},
      {"type":"h","text":""},
      {"type":"p","text":"Le langage HTML permet de concevoir des pages web en faisant"},
      {"type":"p","text":"usage de balises et d'attributs."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/"},
      {"type":"p","text":"1. DÉCOUVERTE DU LANGAGE"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"h","text":"Rôle du HTML"},
      {"type":"p","text":"Le rôle du langage HTML consiste à concevoir une page web en y déﬁnissant sa"},
      {"type":"image","src":"images/laconsole/html-p061.jpg","alt":"Page originale de HTML.pdf - page 61"},
      {"type":"h","text":"Page 62"},
      {"type":"h","text":"structure et son contenu."},
      {"type":"p","text":"Le HTML est un langage sémantique : son rôle est de donner du sens aux"},
      {"type":"p","text":"éléments qu’il contient aﬁn qu’ils soient correctement compris et afﬁchés des"},
      {"type":"p","text":"navigateurs et moteurs de recherche."},
      {"type":"p","text":"Cette sémantique est déterminée par des « balises » utilisées au sein du document"},
      {"type":"p","text":"HTML."},
      {"type":"p","text":"Créer une page web consiste à imbriquer ces balises HTML les unes à côté des"},
      {"type":"p","text":"autres et les unes dans les autres. Ces balises sont aussi appelées « tags »."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-62-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Balises HTML"},
      {"type":"p","text":"Les balises HTML ont un rôle double puisqu’elles vont permettre pour une page de"},
      {"type":"p","text":"déﬁnir :"},
      {"type":"p","text":"Sa structure (en-tête, pied de page, menu, section…)"},
      {"type":"p","text":"Son contenu (texte, image, vidéo…)"},
      {"type":"image","src":"images/laconsole/html-p062.jpg","alt":"Page originale de HTML.pdf - page 62"},
      {"type":"h","text":"Page 63"},
      {"type":"p","text":"Les balises HTML se distinguent en deux grandes familles : les balises paires et"},
      {"type":"h","text":"les balises orphelines."},
      {"type":"h","text":"Balises paires"},
      {"type":"p","text":"Les balises paires s’apparentent à des « boîtes » dans lesquelles il est possible de"},
      {"type":"p","text":"ranger des informations. Elles délimitent la structure d’une page web. Les balises"},
      {"type":"h","text":"paires ont une action sur le contenu qu’elles encadrent."},
      {"type":"p","text":"Leur syntaxe est la suivante :"},
      {"type":"code","filename":"page-63-exemple-1","language":"javascript","code":"<balise>Démonstration</balise>"},
      {"type":"code","filename":"page-63-exemple-2","language":"javascript","code":"<balise>  est la balise ouvrante (c’est notre boîte)."},
      {"type":"code","filename":"page-63-exemple-3","language":"javascript","code":"</balise>  est la balise fermante (c’est le couvercle qui vient fermer la boîte)."},
      {"type":"p","text":"Cette balise possède un slash /  avant son nom."},
      {"type":"p","text":"Démonstration  est le contenu de la balise. Il peut s’agir de texte mais aussi"},
      {"type":"p","text":"d’une autre balise (= imbrication de balises)."},
      {"type":"p","text":"On emploie le terme d’« élément » pour déﬁnir l’ensemble formé par la balise"},
      {"type":"p","text":"ouvrante + le contenu + la balise fermante."},
      {"type":"p","text":"%\nLes caractères <  et >  sont appelés « chevrons »."},
      {"type":"code","filename":"page-63-exemple-4","language":"javascript","code":"Bien entendu <balise>  sera remplacé par un nom de balise valide. Il existe de"},
      {"type":"p","text":"nombreuses balises HTML paires pour structurer notre page web. En voici"},
      {"type":"p","text":"quelques-unes :"},
      {"type":"image","src":"images/laconsole/html-p063.jpg","alt":"Page originale de HTML.pdf - page 63"},
      {"type":"h","text":"Page 64"},
      {"type":"code","filename":"page-64-exemple-1","language":"javascript","code":"<header>"},
      {"type":"code","filename":"page-64-exemple-2","language":"javascript","code":"<h2>Je suis un titre de niveau 2</h2>"},
      {"type":"code","filename":"page-64-exemple-3","language":"javascript","code":"<p>Je suis le premier paragraphe.</p>"},
      {"type":"code","filename":"page-64-exemple-4","language":"javascript","code":"<p>Je suis le second paragraphe.</p>"},
      {"type":"code","filename":"page-64-exemple-5","language":"javascript","code":"</header>"},
      {"type":"p","text":"Une balise paire peut tout à fait contenir d’autres balises : on parle d’imbrication."},
      {"type":"code","filename":"page-64-exemple-6","language":"javascript","code":"C’est le cas de <header>  : ici <h2>  et les <p>  appartiennent au <header> ."},
      {"type":"code","filename":"page-64-exemple-7","language":"javascript","code":"Les 3 balises contenues dans la balise <header>  sont « décalées » par"},
      {"type":"p","text":"rapport à elle (touche tabulation) de manière à faciliter la lecture du code"},
      {"type":"h","text":"%"},
      {"type":"p","text":"et rapidement comprendre la hiérarchie entre ces éléments. On dit que le"},
      {"type":"p","text":"code est indenté."},
      {"type":"h","text":"Balises orphelines"},
      {"type":"p","text":"Les balises orphelines s’apparentent à des « objets » qu’il est possible de ranger"},
      {"type":"p","text":"dans nos boîtes. Les balises orphelines ont une action sur elles-mêmes, elles ne"},
      {"type":"h","text":"peuvent pas contenir d’autres éléments."},
      {"type":"p","text":"D’un point de vue syntaxique, une balise orpheline s’écrit de la même manière"},
      {"type":"p","text":"qu’une balise ouvrante isolée."},
      {"type":"code","filename":"page-64-exemple-8","language":"javascript","code":"<balise>"},
      {"type":"image","src":"images/laconsole/html-p064.jpg","alt":"Page originale de HTML.pdf - page 64"},
      {"type":"h","text":"Page 65"},
      {"type":"p","text":"La structure d’une balise orpheline (absence de balise fermante) empêche"},
      {"type":"p","text":"d’y mettre quelque chose à l’intérieur. On ne les utilise donc que pour"},
      {"type":"h","text":"%"},
      {"type":"h","text":"déﬁnir des éléments et non pour structurer notre page."},
      {"type":"code","filename":"page-65-exemple-1","language":"html","code":"Une image <img> , un saut de ligne <br> , un champ de formulaire <input>  sont"},
      {"type":"p","text":"des exemples de balises orphelines puisqu’elles ne sont pas vouées à recevoir du"},
      {"type":"p","text":"contenu à l’intérieur."},
      {"type":"code","filename":"page-65-exemple-2","language":"javascript","code":"<br>"},
      {"type":"code","filename":"page-65-exemple-3","language":"javascript","code":"<img>"},
      {"type":"code","filename":"page-65-exemple-4","language":"html","code":"<input>"},
      {"type":"h","text":"La plupart des balises orphelines vont nécessiter l’usage d’attributs pour bien"},
      {"type":"h","text":"fonctionner."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-65-exemple-5","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Attributs"},
      {"type":"image","src":"images/laconsole/html-p065.jpg","alt":"Page originale de HTML.pdf - page 65"},
      {"type":"h","text":"Page 66"},
      {"type":"h","text":"Des options pour nos balises"},
      {"type":"p","text":"Un attribut se place dans une balise ouvrante, permettant d’y déﬁnir des"},
      {"type":"h","text":"propriétés / caractéristiques supplémentaires."},
      {"type":"h","text":"Les attributs constituent des sortes d’options pour conﬁgurer nos balises."},
      {"type":"p","text":"Les attributs se caractérisent par un mot-clé auquel on associera une valeur (écrite"},
      {"type":"p","text":"entre guillemets)."},
      {"type":"p","text":"Ils peuvent venir enrichir une balise paire ou orpheline de la manière suivante :"},
      {"type":"code","filename":"page-66-exemple-1","language":"javascript","code":"<p nom-attribut=\"valeur attribut\">Je suis un paragraphe</"},
      {"type":"code","filename":"page-66-exemple-2","language":"javascript","code":"<p nom-attribut1=\"valeur attribut\" nom-attribut2=\"valeur"},
      {"type":"code","filename":"page-66-exemple-3","language":"javascript","code":"<br nom-attribut=\"valeur attribut\">"},
      {"type":"h","text":"% Il est possible d’ajouter plusieurs attributs au sein d’une même balise."},
      {"type":"h","text":"Attributs facultatifs ou obligatoires"},
      {"type":"h","text":"Un attribut peut être facultatif ou obligatoire aﬁn de garantir le bon"},
      {"type":"p","text":"fonctionnement d’une balise."},
      {"type":"p","text":"C’est d’ailleurs la plupart du temps sur les balises orphelines qu’ils sont"},
      {"type":"p","text":"obligatoires, car ces balises ne jouent pas le rôle de conteneur, et vont donc la"},
      {"type":"p","text":"plupart du temps avoir besoin de ces attributs pour leur spéciﬁer des"},
      {"type":"p","text":"caractéristiques fonctionnelles."},
      {"type":"p","text":"Tout comme les balises, il existe de nombreux attributs HTML, et vous verrez que"},
      {"type":"image","src":"images/laconsole/html-p066.jpg","alt":"Page originale de HTML.pdf - page 66"},
      {"type":"h","text":"Page 67"},
      {"type":"p","text":"nous réutilisons souvent les mêmes."},
      {"type":"code","filename":"page-67-exemple-1","language":"javascript","code":"<p id=\"welcome-text\">Je suis un paragraphe</p>"},
      {"type":"code","filename":"page-67-exemple-2","language":"javascript","code":"<img src=\"https://mon-site.fr/image.png\" alt=\"Texte alter"},
      {"type":"p","text":"id  (facultatif) : déﬁnit un identiﬁant pour la balise."},
      {"type":"p","text":"src  (obligatoire) : déﬁnit la source d’une image."},
      {"type":"p","text":"alt  (obligatoire) : déﬁnit le texte alternatif décrivant une image. Il est"},
      {"type":"p","text":"important pour le SEO, l’accessibilité et l’expérience utilisateur en cas de non-"},
      {"type":"p","text":"afﬁchage de l’image."},
      {"type":"h","text":"Attributs abrégés"},
      {"type":"p","text":"Certains attributs ne possèdent pas de valeur. Ce raccourci d’écriture indique que"},
      {"type":"h","text":"la valeur de ces attributs est en fait identique au nom de l’attribut."},
      {"type":"p","text":"Ces syntaxes sont donc équivalentes :"},
      {"type":"code","filename":"page-67-exemple-3","language":"html","code":"<input type=\"email\" required>"},
      {"type":"code","filename":"page-67-exemple-4","language":"html","code":"<input type=\"email\" required=\"required\">"},
      {"type":"code","filename":"page-67-exemple-5","language":"html","code":"<input type=\"checkbox\" checked>"},
      {"type":"code","filename":"page-67-exemple-6","language":"html","code":"<input type=\"checkbox\" checked=\"checked\">"},
      {"type":"p","text":"required  : spéciﬁe qu’un champ de formulaire est obligatoire."},
      {"type":"p","text":"checked  : coche par défaut une case dans un questionnaire."},
      {"type":"image","src":"images/laconsole/html-p067.jpg","alt":"Page originale de HTML.pdf - page 67"},
      {"type":"h","text":"Page 68"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-68-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Environnement de développement"},
      {"type":"p","text":"Le HTML est un langage de développement web côté client, son environnement"},
      {"type":"p","text":"de développement est donc minimaliste puisqu’il ne se résume qu’à :"},
      {"type":"h","text":"Un éditeur de code"},
      {"type":"p","text":"Un navigateur web (Chrome, Firefox, Safari…)"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-68-exemple-2","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"image","src":"images/laconsole/html-p068.jpg","alt":"Page originale de HTML.pdf - page 68"},
      {"type":"h","text":"Page 69"},
      {"type":"h","text":"Où écrire son code HTML ?"},
      {"type":"p","text":"Les ﬁchiers destinés à recevoir du code HTML portent l’extension .html  du même"},
      {"type":"p","text":"nom."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-69-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Commentaires"},
      {"type":"p","text":"En HTML il est possible d’écrire des commentaires dans son code source."},
      {"type":"p","text":"Les commentaires sont des messages à destination des développeurs dans le but"},
      {"type":"p","text":"de documenter le code. Ils sont bien entendu invisibles pour les visiteurs qui"},
      {"type":"h","text":"navigueront sur votre site. On dit qu’ils ne sont pas interprétés."},
      {"type":"p","text":"Cela peut être utile lorsque :"},
      {"type":"image","src":"images/laconsole/html-p069.jpg","alt":"Page originale de HTML.pdf - page 69"},
      {"type":"h","text":"Page 70"},
      {"type":"h","text":"Vous retravaillez sur un ancien code"},
      {"type":"p","text":"Vous travaillez à plusieurs développeurs sur un même projet"},
      {"type":"p","text":"Un commentaire est délimité par les caractères <!--  (ouverture) et -->"},
      {"type":"p","text":"(fermeture)."},
      {"type":"p","text":"<!-- Je suis un commentaire en HTML -->"},
      {"type":"p","text":"Comme vous avez pu le constater, la syntaxe du HTML est relativement simple"},
      {"type":"h","text":"tout comme sa ﬁnalité : structurer et déﬁnir son contenu. En conséquence"},
      {"type":"p","text":"l’utilisation des commentaires est assez limitée."},
      {"type":"p","text":"En revanche, ils s’avéreront très intéressants pour documenter des langages de"},
      {"type":"p","text":"programmation comme JavaScript ou encore PHP."},
      {"type":"p","text":"Suivant :\n2. Balises de\nPremier Niveau\n(html, head,\nbody)"},
      {"type":"p","text":"〉"},
      {"type":"image","src":"images/laconsole/html-p070.jpg","alt":"Page originale de HTML.pdf - page 70"},
      {"type":"h","text":"Page 71"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"("},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le dev, des LEGO où les briques\nsont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et"},
      {"type":"p","text":""},
      {"type":"p","text":"sur laConsole."},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p071.jpg","alt":"Page originale de HTML.pdf - page 71"},
      {"type":"h","text":"Page 72"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTML › En-tête et Métadonnées"},
      {"type":"h","text":""},
      {"type":"p","text":"La balise head contient les métadonnées (informations d'en-tête)"},
      {"type":"p","text":"d'une page web. Bien qu'invisibles, les balises d'en-tête ont un"},
      {"type":"p","text":"rôle essentiel."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/"},
      {"type":"p","text":"3. EN-TÊTE ET MÉTADONNÉES"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"h","text":"Balises d’en-tête principales"},
      {"type":"image","src":"images/laconsole/html-p072.jpg","alt":"Page originale de HTML.pdf - page 72"},
      {"type":"h","text":"Page 73"},
      {"type":"code","filename":"page-73-exemple-1","language":"javascript","code":"Balise <title>"},
      {"type":"code","filename":"page-73-exemple-2","language":"javascript","code":"La balise <title>  permet de déﬁnir le titre d’une page web."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-73-exemple-3","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-73-exemple-4","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-73-exemple-5","language":"javascript","code":"<title>laConsole - Formations en développement we"},
      {"type":"code","filename":"page-73-exemple-6","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-73-exemple-7","language":"javascript","code":"</html>"},
      {"type":"p","text":"Ce titre s’afﬁchera :"},
      {"type":"h","text":"Dans les résultats des moteurs de recherche (SERP)"},
      {"type":"h","text":"Dans l’onglet du navigateur"},
      {"type":"code","filename":"page-73-exemple-8","language":"javascript","code":"Balise <meta>"},
      {"type":"code","filename":"page-73-exemple-9","language":"javascript","code":"La balise orpheline <meta>  déﬁnit de nombreuses métadonnées d’une page web."},
      {"type":"p","text":"Son comportement varie en fonction des attributs qui lui sont greffés."},
      {"type":"p","text":"#couteausuisse"},
      {"type":"h","text":"Encodage des caractères"},
      {"type":"code","filename":"page-73-exemple-10","language":"javascript","code":"Pour préciser l’encodage de la page on utilisera la balise <meta>  avec l’attribut"},
      {"type":"image","src":"images/laconsole/html-p073.jpg","alt":"Page originale de HTML.pdf - page 73"},
      {"type":"h","text":"Page 74"},
      {"type":"p","text":"charset ."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-74-exemple-1","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-74-exemple-2","language":"javascript","code":"<head>"},
      {"type":"p","text":"<!-- Autres balises ... -->"},
      {"type":"code","filename":"page-74-exemple-3","language":"javascript","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-74-exemple-4","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-74-exemple-5","language":"javascript","code":"</html>"},
      {"type":"p","text":"L’encodage des caractères sur une page web consiste à spéciﬁer un jeu de"},
      {"type":"p","text":"caractères utilisés par une page web. Il prendra quasi systématiquement la valeur"},
      {"type":"p","text":"UTF-8  sur la plupart de vos pages web car il s’agit de l’encodage le plus utilisé"},
      {"type":"p","text":"dans les systèmes GNU et Linux."},
      {"type":"h","text":"Méta description"},
      {"type":"code","filename":"page-74-exemple-6","language":"javascript","code":"Pour renseigner une méta description à notre page, on utilisera la balise <meta>"},
      {"type":"p","text":"avec les attributs :"},
      {"type":"p","text":"name  prenant la valeur « description »."},
      {"type":"p","text":"content  ayant pour valeur la méta description en question."},
      {"type":"image","src":"images/laconsole/html-p074.jpg","alt":"Page originale de HTML.pdf - page 74"},
      {"type":"h","text":"Page 75"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-75-exemple-1","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-75-exemple-2","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-75-exemple-3","language":"javascript","code":"<meta name=\"description\" content=\"Blablabla...\">"},
      {"type":"code","filename":"page-75-exemple-4","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-75-exemple-5","language":"javascript","code":"</html>"},
      {"type":"h","text":"Ce titre s’afﬁchera dans les résultats des moteurs de recherche (SERP)."},
      {"type":"h","text":"Responsive (mobile)"},
      {"type":"h","text":"Pour optimiser l’afﬁchage d’un site sur mobile on utilisera systématiquement la"},
      {"type":"code","filename":"page-75-exemple-6","language":"javascript","code":"balise <meta>  avec les attributs :"},
      {"type":"p","text":"name  prenant la valeur viewport ."},
      {"type":"p","text":"content  ayant pour valeur width=device-width, initial-scale=1.0 ."},
      {"type":"image","src":"images/laconsole/html-p075.jpg","alt":"Page originale de HTML.pdf - page 75"},
      {"type":"h","text":"Page 76"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-76-exemple-1","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-76-exemple-2","language":"javascript","code":"<head>"},
      {"type":"p","text":"<!-- Autres balises ... -->"},
      {"type":"code","filename":"page-76-exemple-3","language":"javascript","code":"<meta name=\"viewport\" content=\"width=device-width"},
      {"type":"code","filename":"page-76-exemple-4","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-76-exemple-5","language":"javascript","code":"</html>"},
      {"type":"p","text":"Je ne détaille ici que les 3 cas d’utilisation incontournables de la balise"},
      {"type":"h","text":"&"},
      {"type":"code","filename":"page-76-exemple-6","language":"javascript","code":"<meta>  mais elle possède en réalité de nombreuses autres propriétés."},
      {"type":"code","filename":"page-76-exemple-7","language":"javascript","code":"Balise <link>"},
      {"type":"code","filename":"page-76-exemple-8","language":"javascript","code":"La balise orpheline <link>  permet de lier une ressource à la page web. Cette"},
      {"type":"p","text":"ressource peut être locale (sur le même serveur) ou distante (sur un serveur"},
      {"type":"p","text":"distant)."},
      {"type":"p","text":"Cette balise possède 2 attributs :"},
      {"type":"h","text":"href  : il s’agit du chemin vers la ressource à lier à la page."},
      {"type":"code","filename":"page-76-exemple-9","language":"typescript","code":"rel  : indique le type de ressource à mettre en relation."},
      {"type":"p","text":"Une feuille de style La plupart du temps, cette ressource est une feuille de"},
      {"type":"h","text":"style CSS dont le rôle est de mettre en forme les balises HTML de la page."},
      {"type":"p","text":"C’est rel=\"stylesheet\"  qui indique que la ressource est une feuille CSS."},
      {"type":"image","src":"images/laconsole/html-p076.jpg","alt":"Page originale de HTML.pdf - page 76"},
      {"type":"h","text":"Page 77"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-77-exemple-1","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-77-exemple-2","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-77-exemple-3","language":"javascript","code":"<link href=\"dossier/fichier.css\" rel=\"stylesheet\""},
      {"type":"code","filename":"page-77-exemple-4","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-77-exemple-5","language":"javascript","code":"</html>"},
      {"type":"code","filename":"page-77-exemple-6","language":"html","code":"Vous croiserez parfois des balises <style>  contenant du code CSS à"},
      {"type":"h","text":"⚠"},
      {"type":"p","text":"l’intérieur même du ﬁchier HTML. Gardez cependant à l’esprit que la"},
      {"type":"p","text":"meilleure approche est d’écrire son style dans un ﬁchier CSS à part."},
      {"type":"h","text":"Un favicon Cette ressource externe peut également être un favicon. Le favicon"},
      {"type":"p","text":"est la petite icône qui apparait tout à gauche de l’onglet d’une page web. Il"},
      {"type":"p","text":"s’agit la plupart du temps d’une version originale ou allégée du logo d’un site."},
      {"type":"p","text":"C’est rel=\"stylesheet\"  qui indique que la ressource est une feuille CSS."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-77-exemple-7","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-77-exemple-8","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-77-exemple-9","language":"javascript","code":"<link href=\"favicon.ico\" rel=\"icon\">"},
      {"type":"code","filename":"page-77-exemple-10","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-77-exemple-11","language":"javascript","code":"</html>"},
      {"type":"p","text":"Un favicon porte généralement l’extension .ico , mais il peut également s’agir"},
      {"type":"image","src":"images/laconsole/html-p077.jpg","alt":"Page originale de HTML.pdf - page 77"},
      {"type":"h","text":"Page 78"},
      {"type":"p","text":"d’un PNG ou d’un SVG."},
      {"type":"code","filename":"page-78-exemple-1","language":"html","code":"Balise <script>"},
      {"type":"code","filename":"page-78-exemple-2","language":"html","code":"La balise <script>  permet de lier un document JavaScript à la page web. Ce"},
      {"type":"p","text":"document JavaScript peut être local (sur le même serveur) ou distant (sur un"},
      {"type":"p","text":"serveur distant)."},
      {"type":"p","text":"Le chemin vers le document JS est spéciﬁé par l’attribut src ."},
      {"type":"p","text":"Pour des raisons détaillées dans la formation dédiée à JavaScript, notez qu’il sera"},
      {"type":"code","filename":"page-78-exemple-3","language":"html","code":"aussi possible d’ajouter notre balise <script>  juste avant la fermeture du body"},
      {"type":"code","filename":"page-78-exemple-4","language":"javascript","code":"avec </body> ."},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-78-exemple-5","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-78-exemple-6","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-78-exemple-7","language":"html","code":"<script src=\"dossier/fichier.js\"></script>"},
      {"type":"code","filename":"page-78-exemple-8","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-78-exemple-9","language":"javascript","code":"<body>"},
      {"type":"code","filename":"page-78-exemple-10","language":"html","code":"<script src=\"dossier/fichier.js\"></script>"},
      {"type":"code","filename":"page-78-exemple-11","language":"javascript","code":"</body>"},
      {"type":"code","filename":"page-78-exemple-12","language":"javascript","code":"</html>"},
      {"type":"image","src":"images/laconsole/html-p078.jpg","alt":"Page originale de HTML.pdf - page 78"},
      {"type":"h","text":"Page 79"},
      {"type":"code","filename":"page-79-exemple-1","language":"html","code":"Vous croiserez parfois des balises <script> , sans attributs, contenant"},
      {"type":"h","text":"du code JavaScript à l’intérieur même du ﬁchier HTML. Gardez cependant"},
      {"type":"h","text":"⚠"},
      {"type":"p","text":"à l’esprit que la meilleure approche est d’écrire ses scripts dans un ﬁchier"},
      {"type":"p","text":"JS à part."},
      {"type":"code","filename":"page-79-exemple-2","language":"javascript","code":"La balise <head>  supporte également l’imbrication des balises <base> ,"},
      {"type":"h","text":"&"},
      {"type":"code","filename":"page-79-exemple-3","language":"html","code":"<style> , <noscript>  et <template> ."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-79-exemple-4","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Squelette minimal d’une page web"},
      {"type":"p","text":"En reprenant l’ensemble des balises vues précédemment, on obtient le squelette"},
      {"type":"p","text":"minimal d’une page web."},
      {"type":"image","src":"images/laconsole/html-p079.jpg","alt":"Page originale de HTML.pdf - page 79"},
      {"type":"h","text":"Page 80"},
      {"type":"p","text":"ma-page.html\ncopier"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-80-exemple-1","language":"javascript","code":"<html>"},
      {"type":"code","filename":"page-80-exemple-2","language":"javascript","code":"<head>"},
      {"type":"code","filename":"page-80-exemple-3","language":"javascript","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-80-exemple-4","language":"javascript","code":"<title>laConsole- Formations en développement web"},
      {"type":"code","filename":"page-80-exemple-5","language":"javascript","code":"<meta name=\"description\" content=\"Blablabla...\">"},
      {"type":"code","filename":"page-80-exemple-6","language":"javascript","code":"<meta name=\"viewport\" content=\"width=device-width"},
      {"type":"code","filename":"page-80-exemple-7","language":"javascript","code":"<link rel=\"icon\" href=\"favicon.ico\">"},
      {"type":"code","filename":"page-80-exemple-8","language":"javascript","code":"<link href=\"dossier/fichier.css\" rel=\"stylesheet\""},
      {"type":"code","filename":"page-80-exemple-9","language":"html","code":"<script src=\"dossier/fichier.js\"></script>"},
      {"type":"code","filename":"page-80-exemple-10","language":"javascript","code":"</head>"},
      {"type":"code","filename":"page-80-exemple-11","language":"javascript","code":"<body></body>"},
      {"type":"code","filename":"page-80-exemple-12","language":"javascript","code":"</html>"},
      {"type":"p","text":"Nous allons maintenant commencer à réellement construire notre page web en"},
      {"type":"code","filename":"page-80-exemple-13","language":"javascript","code":"ajoutant des balises HTML à l’intérieur de la balise <body> ."},
      {"type":"p","text":"Précédent :\n2. Balises de\nPremier Niveau\n(html, head,\nbody)"},
      {"type":"p","text":"Suivant :\n4. Balises\nElémentaires"},
      {"type":"p","text":"〉"},
      {"type":"p","text":"〈"},
      {"type":"image","src":"images/laconsole/html-p080.jpg","alt":"Page originale de HTML.pdf - page 80"},
      {"type":"h","text":"Page 81"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"+"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le dev, des LEGO où les briques\nsont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et"},
      {"type":"p","text":""},
      {"type":"p","text":"sur laConsole."},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p081.jpg","alt":"Page originale de HTML.pdf - page 81"},
      {"type":"h","text":"Page 82"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTML › Structurer sa Page"},
      {"type":"h","text":""},
      {"type":"p","text":"En-tête, pied de page, section… Ce chapitre est dédié à"},
      {"type":"p","text":"l'apprentissage des balises HTML principales pour structurer sa"},
      {"type":"p","text":"page web."},
      {"type":"h","text":"oct. 2022 ■■■Débutant 8 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nCRÉER DES PAGES WEB AVEC HTML\n/ 6. STRUCTURER SA PAGE"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"h","text":"Conteneurs sémantiques"},
      {"type":"p","text":"Les conteneurs sémantiques sont des balises un peu particulières apparues avec"},
      {"type":"image","src":"images/laconsole/html-p082.jpg","alt":"Page originale de HTML.pdf - page 82"},
      {"type":"h","text":"Page 83"},
      {"type":"p","text":"la version HTML5. Leur rôle est de structurer la page web en déﬁnissant des zones"},
      {"type":"p","text":"bien spéciﬁques. Ces conteneurs vont, de par leur nature, donner des indications"},
      {"type":"p","text":"sur le contenu qu’elles contiennent."},
      {"type":"p","text":"Il peut par exemple s’agir :"},
      {"type":"h","text":"D’une en-tête"},
      {"type":"h","text":"D’un pied de page"},
      {"type":"h","text":"D’un regroupement de liens de navigation"},
      {"type":"p","text":"D’une section avec une thématique propre au sein d’une page web"},
      {"type":"p","text":"…"},
      {"type":"p","text":"En découpant votre page en faisant usage de ces balises, vous montrez à"},
      {"type":"p","text":"l’algorithme des moteurs de recherche comment est structurée votre page et où"},
      {"type":"h","text":"se trouve le contenu important."},
      {"type":"p","text":"Cela présente deux avantages non négligeables :"},
      {"type":"h","text":"1. Vous économisez du travail de compréhension de votre page par moteurs de"},
      {"type":"p","text":"recherche, et ils aiment ça ! Ce qui impacte positivement votre SEO."},
      {"type":"p","text":"2. Vous contrôlez la compréhension de vos pages par les robots."},
      {"type":"code","filename":"page-83-exemple-1","language":"javascript","code":"En-tête <header>"},
      {"type":"code","filename":"page-83-exemple-2","language":"javascript","code":"La balise <header>  délimite l’en-tête de l’élément dans lequel elle est imbriquée."},
      {"type":"code","filename":"page-83-exemple-3","language":"javascript","code":"Si cette balise est imbriquée directement dans la balise <body> , alors il s’agit"},
      {"type":"p","text":"de l’en-tête de la page."},
      {"type":"image","src":"images/laconsole/html-p083.jpg","alt":"Page originale de HTML.pdf - page 83"},
      {"type":"h","text":"Page 84"},
      {"type":"p","text":"Si elle est imbriquée au sein d’une autre balise, alors elle déﬁnira l’en-tête de"},
      {"type":"h","text":"la balise en question."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-84-exemple-1","language":"javascript","code":"<header>...</header>"},
      {"type":"code","filename":"page-84-exemple-2","language":"javascript","code":"Pied <footer>"},
      {"type":"code","filename":"page-84-exemple-3","language":"javascript","code":"La balise <footer>  délimite le pied de l’élément dans lequel elle est imbriquée."},
      {"type":"code","filename":"page-84-exemple-4","language":"javascript","code":"Si cette balise est imbriquée directement dans la balise <body> , alors il s’agit"},
      {"type":"h","text":"du pied de la page."},
      {"type":"p","text":"Si elle est imbriquée au sein d’une autre balise, alors elle déﬁnira le pied de la"},
      {"type":"h","text":"balise en question."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-84-exemple-5","language":"javascript","code":"<footer>...</footer>"},
      {"type":"code","filename":"page-84-exemple-6","language":"javascript","code":"Contenu principal <main>"},
      {"type":"code","filename":"page-84-exemple-7","language":"javascript","code":"La balise <main>  représente le contenu principal d’une page."},
      {"type":"h","text":"Le contenu de la balise doit être unique et ne pas dupliquer les mêmes blocs que"},
      {"type":"p","text":"ceux utilisés dans d’autres documents, tels que l’en-tête du site, le pied de page, le"},
      {"type":"p","text":"menu, la barre de recherche, les informations de copyright, etc."},
      {"type":"image","src":"images/laconsole/html-p084.jpg","alt":"Page originale de HTML.pdf - page 84"},
      {"type":"h","text":"Page 85"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-85-exemple-1","language":"javascript","code":"<main>...</main>"},
      {"type":"code","filename":"page-85-exemple-2","language":"javascript","code":"Navigation <nav>"},
      {"type":"code","filename":"page-85-exemple-3","language":"javascript","code":"La balise <nav>  représente une section destinée à la navigation. Elle regroupe un"},
      {"type":"p","text":"ensemble de liens."},
      {"type":"p","text":"Il peut par exemple s’agir de :"},
      {"type":"p","text":"Menu (header ou footer)"},
      {"type":"p","text":"Table des matières"},
      {"type":"p","text":"Fil d’Ariane"},
      {"type":"p","text":"…"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-85-exemple-4","language":"javascript","code":"<nav>"},
      {"type":"code","filename":"page-85-exemple-5","language":"javascript","code":"<a href=\"...\">Lien 1</a>"},
      {"type":"code","filename":"page-85-exemple-6","language":"javascript","code":"<a href=\"...\">Lien 2</a>"},
      {"type":"code","filename":"page-85-exemple-7","language":"javascript","code":"<a href=\"...\">Lien 3</a>"},
      {"type":"code","filename":"page-85-exemple-8","language":"javascript","code":"</nav>"},
      {"type":"code","filename":"page-85-exemple-9","language":"javascript","code":"Section <section>"},
      {"type":"code","filename":"page-85-exemple-10","language":"javascript","code":"La balise <section>  représente une section thématique d’un document. Une"},
      {"type":"image","src":"images/laconsole/html-p085.jpg","alt":"Page originale de HTML.pdf - page 85"},
      {"type":"h","text":"Page 86"},
      {"type":"p","text":"section commence généralement avec un titre."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-86-exemple-1","language":"javascript","code":"<h1>Portfolio de John Doe</h1>"},
      {"type":"code","filename":"page-86-exemple-2","language":"javascript","code":"<section>"},
      {"type":"code","filename":"page-86-exemple-3","language":"javascript","code":"<h2>Compétences</h2>"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-86-exemple-4","language":"javascript","code":"</section>"},
      {"type":"code","filename":"page-86-exemple-5","language":"javascript","code":"<section>"},
      {"type":"code","filename":"page-86-exemple-6","language":"javascript","code":"<h2>Mes projets</h2>"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-86-exemple-7","language":"javascript","code":"</section>"},
      {"type":"code","filename":"page-86-exemple-8","language":"javascript","code":"<section>"},
      {"type":"code","filename":"page-86-exemple-9","language":"javascript","code":"<h2>Contactez-moi</h2>"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-86-exemple-10","language":"javascript","code":"</section>"},
      {"type":"code","filename":"page-86-exemple-11","language":"javascript","code":"Article <article>"},
      {"type":"code","filename":"page-86-exemple-12","language":"javascript","code":"La balise <article>  s’apparente à la section , mais pour un contenu «"},
      {"type":"p","text":"autonome », autrement dit, pour lequel le contexte ne dépend pas de celui de la"},
      {"type":"p","text":"page. Il doit pouvoir être traité indépendamment des autres parties du document."},
      {"type":"h","text":"Il vise à baliser des blocs de contenu que l’on pourrait extraire du document tout"},
      {"type":"p","text":"en conservant leur sens et leurs informations. Il s’agit essentiellement de :"},
      {"type":"p","text":"Fiches produits"},
      {"type":"p","text":"Articles de blog"},
      {"type":"image","src":"images/laconsole/html-p086.jpg","alt":"Page originale de HTML.pdf - page 86"},
      {"type":"h","text":"Page 87"},
      {"type":"p","text":"…"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-87-exemple-1","language":"javascript","code":"<article>"},
      {"type":"code","filename":"page-87-exemple-2","language":"javascript","code":"<h2>Nom du produit</h2>"},
      {"type":"code","filename":"page-87-exemple-3","language":"javascript","code":"<p>Description du produit...</p>"},
      {"type":"code","filename":"page-87-exemple-4","language":"javascript","code":"<a href=\"#\">Acheter</a>"},
      {"type":"code","filename":"page-87-exemple-5","language":"javascript","code":"</article>"},
      {"type":"p","text":"Une astuce pour savoir si cette balise est pertinente est de se poser la"},
      {"type":"h","text":"&"},
      {"type":"p","text":"question « Peut-on le placer dans un ﬂux RSS ? »."},
      {"type":"code","filename":"page-87-exemple-6","language":"javascript","code":"Aparté <aside>"},
      {"type":"code","filename":"page-87-exemple-7","language":"javascript","code":"La balise <aside>  représente un contenu qui n’a qu’un rapport indirect avec le"},
      {"type":"p","text":"contenu dans lequel il est placé. Elle est utilisée pour encapsuler du contenu"},
      {"type":"p","text":"complémentaire ou des informations connexes."},
      {"type":"p","text":"Même si on l’utilise généralement pour délimiter la sidebar d’un site, on peut"},
      {"type":"p","text":"l’utiliser pour n’importe quel contenu en aparté. Exemple : déﬁnir un terme, une"},
      {"type":"p","text":"biographie de l’auteur d’un article, un glossaire, préciser des sources, une liste"},
      {"type":"p","text":"d’articles en relation, etc."},
      {"type":"image","src":"images/laconsole/html-p087.jpg","alt":"Page originale de HTML.pdf - page 87"},
      {"type":"h","text":"Page 88"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-88-exemple-1","language":"javascript","code":"<main>"},
      {"type":"code","filename":"page-88-exemple-2","language":"javascript","code":"<h1>Apprendre le HTML</h1>"},
      {"type":"code","filename":"page-88-exemple-3","language":"javascript","code":"<p>...</p>"},
      {"type":"code","filename":"page-88-exemple-4","language":"javascript","code":"<p>...</p>"},
      {"type":"code","filename":"page-88-exemple-5","language":"javascript","code":"<aside>"},
      {"type":"p","text":"<!-- Biographie de l'auteur... -->"},
      {"type":"code","filename":"page-88-exemple-6","language":"javascript","code":"</aside>"},
      {"type":"code","filename":"page-88-exemple-7","language":"javascript","code":"</article>"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-88-exemple-8","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Balises génériques"},
      {"type":"code","filename":"page-88-exemple-9","language":"html","code":"Contrairement aux conteneurs sémantiques, <div>  et <span>  sont des"},
      {"type":"p","text":"conteneurs dits génériques."},
      {"type":"h","text":"Leur particularité est qu’elles n’ont pas de valeur sémantique vis-à-vis de leur"},
      {"type":"code","filename":"page-88-exemple-10","language":"typescript","code":"contenu ; elles ne donnent alors aucune indications sur le type de contenu qu’elles"},
      {"type":"image","src":"images/laconsole/html-p088.jpg","alt":"Page originale de HTML.pdf - page 88"},
      {"type":"h","text":"Page 89"},
      {"type":"h","text":"contiennent. On les utilise pour structurer nos pages selon un modèle de boîtes."},
      {"type":"code","filename":"page-89-exemple-1","language":"html","code":"Etant dépourvue de sémantique, les balises <div>  et <span>  présentent un"},
      {"type":"p","text":"véritable intérêt lorsqu’elles sont couplées aux langages CSS et/ou JavaScript, en"},
      {"type":"p","text":"vue d’un traitement spéciﬁque."},
      {"type":"code","filename":"page-89-exemple-2","language":"javascript","code":"Il est important de toujours leur ajouter un attribut class  ou id , en vue"},
      {"type":"h","text":"&"},
      {"type":"p","text":"de travailler dessus en CSS ou JavaScript."},
      {"type":"code","filename":"page-89-exemple-3","language":"html","code":"Conteneur block <div>"},
      {"type":"code","filename":"page-89-exemple-4","language":"html","code":"La balise <div>  est une balise générique de type block."},
      {"type":"h","text":"Elle prend toute la place qui lui est allouée par son parent. La boîte occupe sa"},
      {"type":"p","text":"propre nouvelle ligne et crée un retour à la ligne, faisant ainsi passer les"},
      {"type":"p","text":"éléments suivants à la ligne d’après."},
      {"type":"p","text":"C’est un conteneur que l’on utilise pour créer des sections contenant plusieurs"},
      {"type":"h","text":"autres éléments."},
      {"type":"image","src":"images/laconsole/html-p089.jpg","alt":"Page originale de HTML.pdf - page 89"},
      {"type":"h","text":"Page 90"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-90-exemple-1","language":"javascript","code":"<article class=\"product\">"},
      {"type":"code","filename":"page-90-exemple-2","language":"html","code":"<div class=\"product-image\">"},
      {"type":"code","filename":"page-90-exemple-3","language":"javascript","code":"<img src=\"...\" alt=\"...\">"},
      {"type":"code","filename":"page-90-exemple-4","language":"javascript","code":"</div>"},
      {"type":"code","filename":"page-90-exemple-5","language":"html","code":"<div class=\"product-infos\">"},
      {"type":"code","filename":"page-90-exemple-6","language":"javascript","code":"<h3>Nom produit</h3>"},
      {"type":"code","filename":"page-90-exemple-7","language":"javascript","code":"<p>Lorem ipsum dolor sit amet...</p>"},
      {"type":"code","filename":"page-90-exemple-8","language":"javascript","code":"</div>"},
      {"type":"code","filename":"page-90-exemple-9","language":"javascript","code":"</article>"},
      {"type":"code","filename":"page-90-exemple-10","language":"html","code":"La balise <div>  permet de structurer efﬁcacement notre HTML à des ﬁns de mise"},
      {"type":"p","text":"en forme / de traitement en JS."},
      {"type":"code","filename":"page-90-exemple-11","language":"javascript","code":"Conteneur inline <span>"},
      {"type":"code","filename":"page-90-exemple-12","language":"typescript","code":"La balise <span>  est une balise générique de type inline."},
      {"type":"h","text":"Elle prend uniquement la place nécessaire par son contenu."},
      {"type":"h","text":"C’est une sous-division au sein d’un paragraphe, permettant de styliser un"},
      {"type":"p","text":"élément textuel."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-90-exemple-13","language":"javascript","code":"<p>Je suis un paragraphe dans lequel certains mots comme"},
      {"type":"code","filename":"page-90-exemple-14","language":"javascript","code":"La balise <span>  permet de cibler une portion de texte à des ﬁns de mise en"},
      {"type":"image","src":"images/laconsole/html-p090.jpg","alt":"Page originale de HTML.pdf - page 90"},
      {"type":"h","text":"Page 91"},
      {"type":"p","text":"forme / de traitement en JS."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-91-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Séparateurs"},
      {"type":"code","filename":"page-91-exemple-2","language":"javascript","code":"Saut de ligne <br>"},
      {"type":"code","filename":"page-91-exemple-3","language":"javascript","code":"La balise <br>  (« BReakline ») sert à créer un saut de ligne."},
      {"type":"p","text":"Elle ne doit pas être utilisée dans un autre contexte que dans un bloc de texte."},
      {"type":"p","text":"L’espacement d’éléments dans un but stylistique sera géré par le langage CSS."},
      {"type":"image","src":"images/laconsole/html-p091.jpg","alt":"Page originale de HTML.pdf - page 91"},
      {"type":"h","text":"Page 92"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-92-exemple-1","language":"javascript","code":"<p>"},
      {"type":"p","text":"Je suis sur la ligne 1."},
      {"type":"code","filename":"page-92-exemple-2","language":"javascript","code":"<br>"},
      {"type":"p","text":"Et moi sur la ligne 2."},
      {"type":"code","filename":"page-92-exemple-3","language":"javascript","code":"</p>"},
      {"type":"code","filename":"page-92-exemple-4","language":"javascript","code":"Ligne horizontale <hr>"},
      {"type":"code","filename":"page-92-exemple-5","language":"javascript","code":"La balise <hr>  (« Horizontal Rule ») sert à créer une ligne horizontale pour"},
      {"type":"p","text":"séparer des paragraphes."},
      {"type":"p","text":"Historiquement cette balise servait à des ﬁns de mise en forme. Aujourd’hui, elle"},
      {"type":"h","text":"possède une signiﬁcation sémantique indiquant un changement thématique entre"},
      {"type":"p","text":"des paragraphes. La création d’un séparateur purement esthétique sera gérée par"},
      {"type":"p","text":"le langage CSS."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-92-exemple-6","language":"javascript","code":"<p>Je suis le premier paragraphe. Je parle de la pluie et"},
      {"type":"code","filename":"page-92-exemple-7","language":"javascript","code":"<hr>"},
      {"type":"code","filename":"page-92-exemple-8","language":"javascript","code":"<p>Je suis le second paragraphe, et personnellement, je p"},
      {"type":"image","src":"images/laconsole/html-p092.jpg","alt":"Page originale de HTML.pdf - page 92"},
      {"type":"h","text":"Page 93"},
      {"type":"p","text":"Précédent :\n5. Créer des\nFormulaires\n〈"},
      {"type":"code","filename":"page-93-exemple-1","language":"javascript","code":"Suivant :\n7. Attributs\nUniversels class\net id"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"*"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le dev, des LEGO où les briques\nsont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et"},
      {"type":"p","text":""},
      {"type":"p","text":"sur laConsole."},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/html-p093.jpg","alt":"Page originale de HTML.pdf - page 93"},
      {"type":"h","text":"Page 94"},
      {"type":"image","src":"images/laconsole/html-p094.jpg","alt":"Page originale de HTML.pdf - page 94"},
    ],
  },
  {
    id: "laconsole-htmx",
    title: "HTMX",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"HTMX.pdf - 30 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"p","text":"Formations"},
      {"type":"h","text":"Cheatsheet : HTMX"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"CheatSheet HTMX : Guide complet, résumé, aide-mémoire, tutoriel et conseils clés"},
      {"type":"p","text":"pour apprendre et maîtriser HTMX efﬁcacement et rapidement."},
      {"type":"p","text":"Blog"},
      {"type":"h","text":"avr. 2024 ■■■Intermédiaire 4 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Newsletter"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"CHEATSHEETS / HTMX"},
      {"type":"h","text":"! Recherche..."},
      {"type":"p","text":"Hypermedia API"},
      {"type":"p","text":"Les requêtes AJAX en HTMX doivent retourner du HTML."},
      {"type":"code","filename":"page-1-exemple-1","language":"javascript","code":"API retournant du HTML => « Hypermedia API »"},
      {"type":"code","filename":"page-1-exemple-2","language":"javascript","code":"API retournant du JSON => « Data API »"},
      {"type":"code","filename":"page-1-exemple-3","language":"bash","code":"Installation npm"},
      {"type":"code","filename":"page-1-exemple-4","language":"bash","code":"npm install htmx.org"},
      {"type":"image","src":"images/laconsole/htmx-p001.jpg","alt":"Page originale de HTMX.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"p","text":"Installation permettant de bénéﬁcier d’une phase de build"},
      {"type":"p","text":"Installation CDN"},
      {"type":"code","filename":"page-2-exemple-1","language":"html","code":"<script src=\"https://unpkg.com/htmx.org@1.9.11\" integrity=\"sha38"},
      {"type":"p","text":"Eviter l’utilisation d’un CDN en production"},
      {"type":"p","text":"Attributs HTTP"},
      {"type":"p","text":"Envoyer une requête AJAX à un serveur."},
      {"type":"code","filename":"page-2-exemple-2","language":"javascript","code":"<button hx-get=\"<url>\">Requête GET vers URL</button>"},
      {"type":"code","filename":"page-2-exemple-3","language":"javascript","code":"<button hx-post=\"<url>\">Requête POST vers URL</button>"},
      {"type":"code","filename":"page-2-exemple-4","language":"javascript","code":"<button hx-put=\"<url>\">Requête PUT vers URL</button>\n<button hx-patch=\"<url>\">Requête PATCH vers URL</button>"},
      {"type":"code","filename":"page-2-exemple-5","language":"javascript","code":"<button hx-delete=\"<url>\">Requête DELETE vers URL</button>"},
      {"type":"code","filename":"page-2-exemple-6","language":"javascript","code":"hx-<méthode_http>  => attribut obligatoire pour exploiter HTMX"},
      {"type":"p","text":"URL absolue ou relative selon emplacement du backend"},
      {"type":"p","text":"Triggers"},
      {"type":"p","text":"Spéciﬁer l’évènement déclenchant la requête AJAX."},
      {"type":"code","filename":"page-2-exemple-7","language":"javascript","code":"<button hx-get=\"<url>\" hx-trigger=\"<event>\">"},
      {"type":"p","text":"Démo"},
      {"type":"code","filename":"page-2-exemple-8","language":"javascript","code":"</button>"},
      {"type":"p","text":"hx-trigger  attend un évènement JS ( click , keyup …)"},
      {"type":"p","text":"Evènements spéciaux :"},
      {"type":"p","text":"load  : au chargement de l’élément"},
      {"type":"p","text":"revealed  : lorsque l’élément apparaît (au déﬁlement)"},
      {"type":"image","src":"images/laconsole/htmx-p002.jpg","alt":"Page originale de HTMX.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"p","text":"intersect  : lorsqu’une portion spéciﬁque de l’élément apparaît (au déﬁlement)"},
      {"type":"p","text":"Par défaut, requête AJAX déclenchée par évènement « naturel » :"},
      {"type":"code","filename":"page-3-exemple-1","language":"html","code":"<input> , <textarea>  et <select>  : change"},
      {"type":"code","filename":"page-3-exemple-2","language":"html","code":"<form>  : submit"},
      {"type":"p","text":"Autres balises : click"},
      {"type":"p","text":"Modiﬁers"},
      {"type":"p","text":"Modiﬁer le comportement du trigger."},
      {"type":"code","filename":"page-3-exemple-3","language":"javascript","code":"<button hx-get=\"<url>\" hx-trigger=\"mouseover <modifier>\">"},
      {"type":"code","filename":"page-3-exemple-4","language":"javascript","code":"Démo\n</button>"},
      {"type":"p","text":"Modiﬁers les plus courant :"},
      {"type":"p","text":"once  : Déclenchement unique."},
      {"type":"p","text":"changed  : Déclenchement si valeur du champ de formulaire rattaché a changé."},
      {"type":"code","filename":"page-3-exemple-5","language":"javascript","code":"delay:<délai>  : Attend avant déclenchement. Si nouvel évènement, réinitialise le"},
      {"type":"p","text":"décompte."},
      {"type":"code","filename":"page-3-exemple-6","language":"javascript","code":"throttle:<délai>  : Attend avant déclenchement. Si décompte en cours, ignore les"},
      {"type":"p","text":"évènements additionnels."},
      {"type":"code","filename":"page-3-exemple-7","language":"javascript","code":"from:<Sélecteur CSS>  : Écoute l’évènement sur un autre élément."},
      {"type":"p","text":"Filters"},
      {"type":"p","text":"Conditionne le déclenchement du trigger."},
      {"type":"code","filename":"page-3-exemple-8","language":"javascript","code":"<button hx-get=\"<url>\" hx-trigger=\"mouseover[<filter>]\">"},
      {"type":"p","text":"Démo"},
      {"type":"code","filename":"page-3-exemple-9","language":"javascript","code":"</button>"},
      {"type":"code","filename":"page-3-exemple-10","language":"javascript","code":"Filtre => expression JavaScript notée entre crochets"},
      {"type":"p","text":"Accès à l’objet event  ( target , clientX …)"},
      {"type":"p","text":"Accès à this , faisant référence à l’élément courant"},
      {"type":"image","src":"images/laconsole/htmx-p003.jpg","alt":"Page originale de HTMX.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"p","text":"Polling"},
      {"type":"p","text":"Déclencher des requêtes périodiques."},
      {"type":"code","filename":"page-4-exemple-1","language":"javascript","code":"<button hx-get=\"<url>\" hx-trigger=\"every <interval>\">"},
      {"type":"code","filename":"page-4-exemple-2","language":"javascript","code":"Démo\n</button>"},
      {"type":"p","text":"Intervalle généralement en secondes ( 0.5s , 10s …)."},
      {"type":"code","filename":"page-4-exemple-3","language":"javascript","code":"Arrêter le polling => répondre avec le code HTTP 286  depuis serveur"},
      {"type":"p","text":"Indicateur"},
      {"type":"p","text":"Loader visible pendant le traitement des requêtes AJAX."},
      {"type":"code","filename":"page-4-exemple-4","language":"javascript","code":"<span hx-get=\"/load-more\">"},
      {"type":"p","text":"Afficher plus"},
      {"type":"code","filename":"page-4-exemple-5","language":"javascript","code":"<img class=\"htmx-indicator\" src=\"loader.svg\">"},
      {"type":"code","filename":"page-4-exemple-6","language":"javascript","code":"</span>"},
      {"type":"code","filename":"page-4-exemple-7","language":"javascript","code":"Initialement : .htmx-indicator  => opacité 0"},
      {"type":"code","filename":"page-4-exemple-8","language":"javascript","code":"Pendant traitement requête AJAX : .htmx-indicator  => opacité à 1"},
      {"type":"p","text":"Target"},
      {"type":"p","text":"Spéciﬁer où injecter le contenu de la réponse AJAX."},
      {"type":"code","filename":"page-4-exemple-9","language":"javascript","code":"<button hx-get=\"<url>\" hx-target=\"<sélecteur_CSS>\">"},
      {"type":"code","filename":"page-4-exemple-10","language":"javascript","code":"Démo\n</button>"},
      {"type":"code","filename":"page-4-exemple-11","language":"html","code":"<div id=\"cible\"></div>"},
      {"type":"code","filename":"page-4-exemple-12","language":"javascript","code":"Requête AJAX par défaut injectée dans l’élément possédant hx-<méthode_http>"},
      {"type":"p","text":"Possiblité de cibler un autre élément via un sélecteur CSS (ex : #cible )"},
      {"type":"image","src":"images/laconsole/htmx-p004.jpg","alt":"Page originale de HTMX.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"Swapping"},
      {"type":"p","text":"Spéciﬁer comment le contenu ciblé par hx-target  dois être mis à jour."},
      {"type":"code","filename":"page-5-exemple-1","language":"javascript","code":"<button hx-get=\"<url>\" hx-swap=\"<swap>\">"},
      {"type":"p","text":"Démo"},
      {"type":"code","filename":"page-5-exemple-2","language":"javascript","code":"</button>"},
      {"type":"p","text":"Requête AJAX par défaut injectée dans l’élément ciblé ( innerHTML )"},
      {"type":"p","text":"Types de swapping :"},
      {"type":"p","text":"innerHTML  (défaut) : Insère à l’intérieur"},
      {"type":"p","text":"outerHTML  : Remplace"},
      {"type":"p","text":"beforebegin  : Avant"},
      {"type":"p","text":"afterbegin  : Premier enfant"},
      {"type":"p","text":"beforeend  : Dernier enfant"},
      {"type":"p","text":"afterend  : Après"},
      {"type":"code","filename":"page-5-exemple-3","language":"javascript","code":"delete  : Supprime, sans insertion"},
      {"type":"p","text":"none  : Aucune insertion"},
      {"type":"image","src":"images/laconsole/htmx-p005.jpg","alt":"Page originale de HTMX.pdf - page 5"},
      {"type":"h","text":"Page 6"},
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
      {"type":"image","src":"images/laconsole/htmx-p006.jpg","alt":"Page originale de HTMX.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTMX › Envoyer une Requête AJAX"},
      {"type":"h","text":""},
      {"type":"p","text":"La simpliﬁcation des requêtes AJAX est au coeur de la mécanique du"},
      {"type":"p","text":"HTMX. Découvrons comment procéder, sans écrire la moindre ligne de JS."},
      {"type":"h","text":"avr. 2024 ■■■Intermédiaire 4 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nHTMX : DE L'AJAX SANS JAVASCRIPT\n/ 3. ENVOYER UNE REQUÊTE AJAX"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"Dans ce guide sur HTMX, découvrez comment simpliﬁer les"},
      {"type":"p","text":"requêtes AJAX sans écrire une seule ligne de JavaScript."},
      {"type":"h","text":"Attributs HTTP"},
      {"type":"p","text":"La mécanique centrale de HTMX est d’envoyer des"},
      {"type":"p","text":"requêtes AJAX, sans JS. Mais alors comment faire ? Via des"},
      {"type":"p","text":"attributs HTML !"},
      {"type":"p","text":"HTMX propose d’utiliser un ensemble de 5 attributs,"},
      {"type":"image","src":"images/laconsole/htmx-p007.jpg","alt":"Page originale de HTMX.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"associés aux verbes HTTP traditionnels, employés lors de"},
      {"type":"p","text":"l’implémentation d’un CRUD : GET , POST , PUT , PATCH ,"},
      {"type":"code","filename":"page-8-exemple-1","language":"javascript","code":"DELETE ."},
      {"type":"p","text":"Ces attributs spéciaux permettent d’envoyer des requêtes"},
      {"type":"h","text":"AJAX à un serveur web."},
      {"type":"p","text":"Ils sont préﬁxés par hx-  et suivi du verbe HTTP avec"},
      {"type":"p","text":"lequel on souhaite que la requête HTTP soit envoyée."},
      {"type":"p","text":"hx-[VERBE_HTTP]"},
      {"type":"h","text":"Attribut Description"},
      {"type":"p","text":"hx-get\nEnvoie une requête GET  à l’URL donnée"},
      {"type":"p","text":"hx-post\nEnvoie une requête POST  à l’URL donnée"},
      {"type":"p","text":"hx-put\nEnvoie une requête PUT  à l’URL donnée"},
      {"type":"p","text":"hx-patch\nEnvoie une requête PATCH  à l’URL donnée"},
      {"type":"code","filename":"page-8-exemple-2","language":"javascript","code":"hx-delete\nEnvoie une requête DELETE  à l’URL donnée"},
      {"type":"p","text":"La valeur associée à ces attributs représente l’URL vers"},
      {"type":"p","text":"laquelle on souhaite envoyer la requête HTTP."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-8-exemple-3","language":"javascript","code":"<span hx-get=\"/articles\">"},
      {"type":"p","text":"Voir les articles"},
      {"type":"code","filename":"page-8-exemple-4","language":"javascript","code":"</span>"},
      {"type":"image","src":"images/laconsole/htmx-p008.jpg","alt":"Page originale de HTMX.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"Le simple usage de cet attribut indique au navigateur que"},
      {"type":"code","filename":"page-9-exemple-1","language":"javascript","code":"lorsqu’un utilisateur clique sur la <span> , une requête"},
      {"type":"p","text":"GET  est envoyée à /articles . La réponse du serveur est"},
      {"type":"code","filename":"page-9-exemple-2","language":"javascript","code":"ensuite injectée à l’intérieur de la <span> ."},
      {"type":"p","text":"Etant donné que le résultat de cet appel AJAX est"},
      {"type":"p","text":"automatiquement injecté dans le DOM, le"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"endpoint doit nécessairement retourner du HTML"},
      {"type":"p","text":"et non du JSON."},
      {"type":"p","text":"Dans le cas d’un frontend et d’un backend"},
      {"type":"p","text":"hebergés séparemment, l’URL à renseigner devrait"},
      {"type":"p","text":"'"},
      {"type":"p","text":"bien entendu être absolue ( https://... ) et non"},
      {"type":"h","text":"relative."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-9-exemple-3","language":"javascript","code":"KevCod3ur64@ma"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Triggers"},
      {"type":"p","text":"Les « triggers », traduits en français par « déclencheurs »,"},
      {"type":"h","text":"permettent de personnaliser la manière d’envoyer une"},
      {"type":"h","text":"requête AJAX."},
      {"type":"image","src":"images/laconsole/htmx-p009.jpg","alt":"Page originale de HTMX.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"h","text":"Déﬁnir un évènement"},
      {"type":"p","text":"Par défaut, les requêtes AJAX sont déclenchées par"},
      {"type":"p","text":"l’évènement « naturel » de l’élément HTML :"},
      {"type":"code","filename":"page-10-exemple-1","language":"html","code":"Les balises <input> , <textarea>  et <select>  sont"},
      {"type":"p","text":"déclenchées sur l’évènement change ."},
      {"type":"code","filename":"page-10-exemple-2","language":"html","code":"Les balises <form>  sont déclenchées sur l’évènement"},
      {"type":"p","text":"submit ."},
      {"type":"p","text":"Les autres balises sont déclenchées par l’évènement"},
      {"type":"p","text":"click ."},
      {"type":"p","text":"C’est pour cela que dans l’exemple précédent,"},
      {"type":"p","text":"'"},
      {"type":"code","filename":"page-10-exemple-3","language":"javascript","code":"notre <span>  était déclenchée par un click ."},
      {"type":"p","text":"Si vous souhaitez un comportement différent, vous pouvez"},
      {"type":"p","text":"utiliser l’attribut hx-trigger  pour spéciﬁer quel"},
      {"type":"p","text":"évènement déclenchera la requête."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-10-exemple-4","language":"javascript","code":"<span hx-get=\"/articles\" hx-trigger=\"dbl"},
      {"type":"p","text":"Voir les articles"},
      {"type":"code","filename":"page-10-exemple-5","language":"javascript","code":"</span>"},
      {"type":"p","text":"Dans ce cas, la requête AJAX sera envoyée à la condition"},
      {"type":"code","filename":"page-10-exemple-6","language":"javascript","code":"que la <span>  soit double-cliquée."},
      {"type":"p","text":"Les valeurs possibles pour l’attribut hx-trigger"},
      {"type":"p","text":"correspondent aux"},
      {"type":"p","text":"noms traditionnels des évènements"},
      {"type":"p","text":"JavaScript"},
      {"type":"p","text":": click , dblclick , mouseover …"},
      {"type":"p","text":"Les évènements spéciaux"},
      {"type":"image","src":"images/laconsole/htmx-p010.jpg","alt":"Page originale de HTMX.pdf - page 10"},
      {"type":"h","text":"Page 11"},
      {"type":"p","text":"Outre les évènements standards, HTMX fournit"},
      {"type":"p","text":"quelques évènements spéciaux :"},
      {"type":"p","text":"load  : se déclenche au chargement de l’élément"},
      {"type":"p","text":"revealed  : se déclenche lorsque l’élément"},
      {"type":"p","text":"apparaît (au déﬁlement)"},
      {"type":"p","text":"intersect  : similaire au revealed , se déclenche"},
      {"type":"h","text":"lorsqu’une portion sufﬁsante de l’élément est"},
      {"type":"h","text":"entrée en intersection avec la fenêtre du"},
      {"type":"p","text":"navigateur. Cela prend en charge deux options"},
      {"type":"p","text":"supplémentaires :"},
      {"type":"code","filename":"page-11-exemple-1","language":"javascript","code":"root:<sélecteur>  : le sélecteur CSS de"},
      {"type":"p","text":"l’élément racine pour l’intersection"},
      {"type":"code","filename":"page-11-exemple-2","language":"javascript","code":"threshold:<float>  : un nombre ﬂottant"},
      {"type":"p","text":"entre 0  et 1.0 , indiquant la part de l’élément"},
      {"type":"p","text":"devant être visible aﬁn de déclencher"},
      {"type":"p","text":"l’évènement ( 0.8  indique que 80%  de"},
      {"type":"p","text":"l’élément doit être visible)."},
      {"type":"p","text":"Là ou revealed  est délenché dès que le premier pixel"},
      {"type":"p","text":"de l’élément est visible, intersect  combiné à"},
      {"type":"p","text":"threshold  va permettre d’attendre qu’une portion"},
      {"type":"p","text":"sufﬁsante de l’élément soit entré dans la zone"},
      {"type":"p","text":"d’aﬁfchage."},
      {"type":"p","text":"Les évènements spéciaux ne se déclenchent qu’une"},
      {"type":"h","text":"seule fois."},
      {"type":"p","text":"Les évènements load , revealed  et"},
      {"type":"p","text":"intersect  sont très pratiques pour mettre en"},
      {"type":"p","text":"'"},
      {"type":"p","text":"place des mécaniques de scroll inﬁni ou de lazy"},
      {"type":"h","text":"loading."},
      {"type":"image","src":"images/laconsole/htmx-p011.jpg","alt":"Page originale de HTMX.pdf - page 11"},
      {"type":"h","text":"Page 12"},
      {"type":"p","text":"Il est possible d’attacher plusieurs triggers à un"},
      {"type":"p","text":"'"},
      {"type":"p","text":"élément HTML en les séparant avec des virgules."},
      {"type":"p","text":"Exemple : hx-trigger=\"click, dblclick\""},
      {"type":"h","text":"Modiﬁers : modiﬁer le comportement"},
      {"type":"p","text":"Les modiﬁers permettent de modiﬁer le comportement du"},
      {"type":"p","text":"trigger. Facultatifs, ils sont caractérisés par un mot-clé,"},
      {"type":"p","text":"noté à la suite de l’évènement."},
      {"type":"p","text":"Voici la liste des principaux modiﬁers :"},
      {"type":"h","text":"Modiﬁcateur Description"},
      {"type":"p","text":"once\nN’envoie la requête qu’une seule fois."},
      {"type":"p","text":"changed\nN’envoie la requête que si la valeur du"},
      {"type":"h","text":"champ de formulaire rattaché a changé."},
      {"type":"p","text":"Attend le temps spéciﬁé (par exemple, 1s )"},
      {"type":"p","text":"delay:"},
      {"type":"code","filename":"page-12-exemple-1","language":"javascript","code":"<délai>"},
      {"type":"p","text":"avant d’envoyer la requête. Si l’évènement"},
      {"type":"p","text":"se déclenche à nouveau, le compte à"},
      {"type":"p","text":"rebours est réinitialisé."},
      {"type":"p","text":"throttle:"},
      {"type":"p","text":"Attend le temps spéciﬁé (par exemple, 1s )"},
      {"type":"p","text":"avant d’envoyer la requête. Contrairement"},
      {"type":"code","filename":"page-12-exemple-2","language":"javascript","code":"<délai>"},
      {"type":"p","text":"à delay , si un nouvel évènement se"},
      {"type":"p","text":"produit avant que le délai ne soit atteint, il"},
      {"type":"p","text":"sera ignoré, donc la demande se"},
      {"type":"p","text":"déclenchera à la ﬁn de la période de temps."},
      {"type":"p","text":"from:"},
      {"type":"p","text":"Écoute l’évènement sur un autre élément."},
      {"type":"p","text":"Cela peut être utilisé pour des choses"},
      {"type":"code","filename":"page-12-exemple-3","language":"javascript","code":"<Sélecteur"},
      {"type":"image","src":"images/laconsole/htmx-p012.jpg","alt":"Page originale de HTMX.pdf - page 12"},
      {"type":"h","text":"Page 13"},
      {"type":"p","text":"CSS>\ncomme les raccourcis clavier. Supporte"},
      {"type":"p","text":"aussi les"},
      {"type":"p","text":"sélecteurs CSS étendus par"},
      {"type":"p","text":"HTMX"},
      {"type":"p","text":"Voir la liste intégrale sur la"},
      {"type":"p","text":"documentation ofﬁcielle de"},
      {"type":"p","text":"l’attribut hx-trigger"},
      {"type":"p","text":"."},
      {"type":"p","text":"Modiﬁers : exemple concret"},
      {"type":"p","text":"La documentation ofﬁcielle de HTMX fournit un"},
      {"type":"p","text":"excellent exemple pour illustrer l’efﬁcacité de ces"},
      {"type":"p","text":"modiﬁers :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-13-exemple-1","language":"html","code":"<input type=\"text\" name=\"q\""},
      {"type":"p","text":"hx-get=\"/trigger_delay\""},
      {"type":"p","text":"hx-trigger=\"keyup\""},
      {"type":"p","text":"hx-target=\"#search-results\""},
      {"type":"p","text":"placeholder=\"Search...\""},
      {"type":"p","text":">"},
      {"type":"code","filename":"page-13-exemple-2","language":"html","code":"<div id=\"search-results\"></div>"},
      {"type":"p","text":"hx-target  permet d’indiquer dans quelle"},
      {"type":"p","text":"balise HTML injecter la réponse. Nous"},
      {"type":"p","text":"'"},
      {"type":"p","text":"aborderons en détails cet attribut au chapitre"},
      {"type":"p","text":"suivant."},
      {"type":"p","text":"Cet exemple illustre un moteur de recherche en temps"},
      {"type":"p","text":"réel. Dès qu’un utilisateur relâche une touche ( keyup )"},
      {"type":"code","filename":"page-13-exemple-3","language":"html","code":"dans le champ <input> , une requête AJAX est envoyée."},
      {"type":"p","text":"Côté expérience utilisateur (UX), rien à dire, ce moteur de"},
      {"type":"image","src":"images/laconsole/htmx-p013.jpg","alt":"Page originale de HTMX.pdf - page 13"},
      {"type":"h","text":"Page 14"},
      {"type":"p","text":"recherche retourne à chaque saisie les résultats"},
      {"type":"p","text":"souhaités."},
      {"type":"p","text":"En revanche, en termes de performances, on repassera…"},
      {"type":"p","text":"envoyer une requête réseau à chaque saisie utilisateur"},
      {"type":"p","text":"est bien trop coûteux ! Un procédé visant à réduire ce"},
      {"type":"p","text":"phénomène est appellé « debounce » ou « throttling »."},
      {"type":"p","text":"Le debounce est une technique que les API"},
      {"type":"p","text":"cloud utilisent pour limiter le nombre de"},
      {"type":"p","text":"'"},
      {"type":"p","text":"requêtes pouvant être effectuées sur une"},
      {"type":"p","text":"période donnée."},
      {"type":"p","text":"Les modiﬁers s’avèrent de redoutables candidats pour"},
      {"type":"p","text":"implémenter une mécanique de debounce côté client."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-14-exemple-1","language":"html","code":"<input type=\"text\" name=\"q\""},
      {"type":"p","text":"hx-get=\"/trigger_delay\""},
      {"type":"p","text":"hx-trigger=\"keyup changed delay:5\n+"},
      {"type":"p","text":"hx-target=\"#search-results\""},
      {"type":"p","text":"placeholder=\"Search...\""},
      {"type":"p","text":">"},
      {"type":"code","filename":"page-14-exemple-2","language":"html","code":"<div id=\"search-results\"></div>"},
      {"type":"p","text":"Ici, les modiﬁers delay:500ms  et changed  permettent"},
      {"type":"p","text":"respectivement d’attendre 0.5s  avant d’envoyer la"},
      {"type":"p","text":"requête AJAX (si une touche est à nouveau saisie, le"},
      {"type":"p","text":"décompte est réinitialisé) et d’envoyer les requêtes"},
      {"type":"p","text":"uniquement si la valeur du formulaire a changé."},
      {"type":"p","text":"Ces modiﬁers contribuent à éviter d’envoyer des"},
      {"type":"h","text":"requêtes AJAX inutiles et coûteuses en ressources mais"},
      {"type":"image","src":"images/laconsole/htmx-p014.jpg","alt":"Page originale de HTMX.pdf - page 14"},
      {"type":"h","text":"Page 15"},
      {"type":"p","text":"d’attendre que l’utilisateur marque une pause dans sa"},
      {"type":"p","text":"saisie."},
      {"type":"h","text":"Filters : conditionner le déclenchement"},
      {"type":"h","text":"Les ﬁltres permettent de conditionner le déclenchement"},
      {"type":"h","text":"d’un évènement."},
      {"type":"p","text":"Un ﬁltre est représenté par une expression JavaScript"},
      {"type":"p","text":"notée entre crochets, à la suite du nom de l’évènement."},
      {"type":"p","text":"Si l’expression est évaluée à true , l’évènement se"},
      {"type":"p","text":"déclenchera, sinon il ne se déclenchera pas."},
      {"type":"p","text":"click[expression_js]"},
      {"type":"p","text":"Voici un exemple qui se déclenche uniquement lors d’un"},
      {"type":"p","text":"clic avec la touche Ctrl  enfoncée sur l’élément :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-15-exemple-1","language":"html","code":"<div hx-get=\"/demo\" hx-trigger=\"click[ct"},
      {"type":"p","text":"Cliquer en maintenant la touche « Ct"},
      {"type":"code","filename":"page-15-exemple-2","language":"javascript","code":"</div>"},
      {"type":"p","text":"La propriété ctrlKey  est une propriété standard"},
      {"type":"p","text":"de l’objet d’évènement JavaScript event , souvent"},
      {"type":"p","text":"'"},
      {"type":"p","text":"utilisée pour déterminer si la touche Ctrl  a été"},
      {"type":"p","text":"enfoncée lorsqu’un évènement de souris ou de"},
      {"type":"p","text":"clavier se produit."},
      {"type":"image","src":"images/laconsole/htmx-p015.jpg","alt":"Page originale de HTMX.pdf - page 15"},
      {"type":"h","text":"Page 16"},
      {"type":"p","text":"De la même manière, on pourrait accéder aux autres"},
      {"type":"p","text":"propriétés de l’objet event  ( target , clientX …) ou"},
      {"type":"p","text":"encore à this , faisant référence à l’élément courant."},
      {"type":"h","text":"Polling : déclenchement périodique"},
      {"type":"h","text":"Le « polling » consiste à déclencher des requêtes HTTP"},
      {"type":"p","text":"périodiques pour récupérer des mises à jour du serveur"},
      {"type":"p","text":"sans recharger toute la page."},
      {"type":"p","text":"Ça permet d’avoir des mises à jour en temps quasi-réel,"},
      {"type":"p","text":"sans que l’utilisateur n’ait besoin de rafraîchir"},
      {"type":"p","text":"manuellement la page. C’est utile pour des fonctionnalités"},
      {"type":"p","text":"comme les :"},
      {"type":"p","text":"Chats en ligne"},
      {"type":"p","text":"Flux d’actualités"},
      {"type":"p","text":"Tableaux de bord"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"HTMX propose une approche relativement simple pour"},
      {"type":"p","text":"implémenter le polling. Pour cela, il sufﬁt d’écrire :"},
      {"type":"code","filename":"page-16-exemple-1","language":"javascript","code":"hx-trigger=\"every <intervalle>\""},
      {"type":"p","text":"Pour récupérer les messages d’un chat toutes les 5"},
      {"type":"p","text":"secondes , on pourrait par exemple procéder comme ceci :"},
      {"type":"image","src":"images/laconsole/htmx-p016.jpg","alt":"Page originale de HTMX.pdf - page 16"},
      {"type":"h","text":"Page 17"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-17-exemple-1","language":"html","code":"<div hx-get=\"/chat/235\" hx-trigger=\"ever"},
      {"type":"p","text":"Si vous souhaitez arrêter le polling à partir d’une"},
      {"type":"p","text":"réponse du serveur, vous pouvez répondre avec le"},
      {"type":"p","text":"'"},
      {"type":"p","text":"code de réponse HTTP 286 ."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-17-exemple-2","language":"javascript","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"h","text":"Indicateurs"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Attributs HTTP"},
      {"type":"p","text":"Lorsqu’une requête AJAX est en cours, une bonne pratique"},
      {"type":"p","text":"Triggers"},
      {"type":"h","text":"d’UX consiste à en informer l’utilisateur, via un loader, car"},
      {"type":"p","text":"Déﬁnir un évènement"},
      {"type":"p","text":"le navigateur ne lui donnera aucun retour d’information."},
      {"type":"p","text":"Modiﬁers : modiﬁer le\ncomportement"},
      {"type":"p","text":"Vous pouvez accomplir cela en utilisant la classe htmx-"},
      {"type":"p","text":"indicator ."},
      {"type":"p","text":"Filters : conditionner le\ndéclenchement"},
      {"type":"p","text":"La classe htmx-indicator  applique une opacité à 0 aux"},
      {"type":"p","text":"Polling : déclenchement\npériodique"},
      {"type":"p","text":"éléments la portant, les rendant invisibles mais présent"},
      {"type":"p","text":"dans le DOM."},
      {"type":"p","text":"Indicateurs"},
      {"type":"image","src":"images/laconsole/htmx-p017.jpg","alt":"Page originale de HTMX.pdf - page 17"},
      {"type":"h","text":"Page 18"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-18-exemple-1","language":"javascript","code":"<img class=\"htmx-indicator\" src=\"assets/"},
      {"type":"p","text":"Lorsqu’une requête AJAX est émise par HTMX, il ajoutera"},
      {"type":"p","text":"une classe htmx-request  à :"},
      {"type":"p","text":"L’élément demandeur (par défaut)."},
      {"type":"p","text":"Un autre élément, si spéciﬁé."},
      {"type":"p","text":"La classe htmx-request  fera passer un élément enfant"},
      {"type":"p","text":"avec la classe htmx-indicator  à une opacité de 1,"},
      {"type":"p","text":"afﬁchant l’indicateur."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-18-exemple-2","language":"javascript","code":"<span hx-get=\"/load-more\">"},
      {"type":"p","text":"Afficher plus"},
      {"type":"code","filename":"page-18-exemple-3","language":"javascript","code":"<img class=\"htmx-indicator\" src=\"ass"},
      {"type":"code","filename":"page-18-exemple-4","language":"javascript","code":"</span>"},
      {"type":"code","filename":"page-18-exemple-5","language":"javascript","code":"Lorsque la <span>  est cliquée, la classe htmx-request"},
      {"type":"p","text":"lui sera ajoutée, ce qui révélera l’image (possédant la classe"},
      {"type":"p","text":"htmx-indicator )."},
      {"type":"p","text":"Customiser ses transitions"},
      {"type":"p","text":"Bien que la classe htmx-indicator  utilise l’opacité"},
      {"type":"p","text":"pour masquer et afﬁcher l’indicateur de progression, il"},
      {"type":"h","text":"est tout à fait possible de créer sa propre transition CSS,"},
      {"type":"p","text":"comme ceci :"},
      {"type":"image","src":"images/laconsole/htmx-p018.jpg","alt":"Page originale de HTMX.pdf - page 18"},
      {"type":"h","text":"Page 19"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-19-exemple-1","language":"css","code":".htmx-indicator{"},
      {"type":"p","text":"/* CSS masquant le loader */"},
      {"type":"code","filename":"page-19-exemple-2","language":"javascript","code":"}"},
      {"type":"p","text":".htmx-request .htmx-indicator,"},
      {"type":"code","filename":"page-19-exemple-3","language":"javascript","code":".htmx-request.htmx-indicator {"},
      {"type":"p","text":"/* CSS affichant le loader */"},
      {"type":"code","filename":"page-19-exemple-4","language":"javascript","code":"}"},
      {"type":"p","text":"Si vous souhaitez que la classe htmx-request soit ajoutée à"},
      {"type":"p","text":"un autre élément, vous pouvez utiliser l’attribut hx-"},
      {"type":"p","text":"indicator  avec un sélecteur CSS pour le faire :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-19-exemple-5","language":"javascript","code":"<span hx-get=\"/load-more\" hx-indicator=\"#"},
      {"type":"p","text":"Afficher plus"},
      {"type":"code","filename":"page-19-exemple-6","language":"javascript","code":"<img id=\"loader\" class=\"htmx-indicat"},
      {"type":"code","filename":"page-19-exemple-7","language":"javascript","code":"</span>"},
      {"type":"p","text":"Ici, nous appelons explicitement l’indicateur par"},
      {"type":"p","text":"'"},
      {"type":"p","text":"son id. Notez que nous aurions pu placer la classe"},
      {"type":"p","text":"sur une balise parente et obtenir le même effet."},
      {"type":"p","text":"Vous pouvez également ajouter l’attribut"},
      {"type":"p","text":"'"},
      {"type":"p","text":"disabled  aux éléments pour la durée d’une"},
      {"type":"p","text":"requête en utilisant l’attribut hx-disabled-elt ."},
      {"type":"p","text":"Comme vous avez pu le constater, avec HTMX, l’envoi de"},
      {"type":"image","src":"images/laconsole/htmx-p019.jpg","alt":"Page originale de HTMX.pdf - page 19"},
      {"type":"h","text":"Page 20"},
      {"type":"p","text":"requêtes AJAX devient facile grâce à des attributs HTML"},
      {"type":"p","text":"simples à utiliser, offrant ainsi une expérience de"},
      {"type":"p","text":"développement web plus ﬂuide."},
      {"type":"p","text":"Précédent :\n2.\nInstallation\n〈"},
      {"type":"p","text":"Suivant :\n4.\nRecevoir\nune\nRéponse\nAJAX"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":","},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à"},
      {"type":"p","text":"remodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le"},
      {"type":"p","text":"dev, des LEGO où les briques\nsont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier puis"},
      {"type":"p","text":"je décide de transmettre cette\npassion en école de dev et sur"},
      {"type":"p","text":"laConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions\nlégales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au\ndéveloppement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de\nconﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/htmx-p020.jpg","alt":"Page originale de HTMX.pdf - page 20"},
      {"type":"h","text":"Page 21"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTMX › Installation"},
      {"type":"h","text":""},
      {"type":"p","text":"Légère, sans dépendances et extensible, voici comment installer HTMX dans"},
      {"type":"p","text":"vos projets."},
      {"type":"p","text":"avr. 2024\n■■■Intermédiaire\n4 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nHTMX : DE L'AJAX SANS JAVASCRIPT\n/ 2. INSTALLATION"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"Installez HTMX en quelques clics et commencez à doper vos"},
      {"type":"p","text":"balises HTML."},
      {"type":"h","text":"Une bibliothèque à la"},
      {"type":"h","text":"taille de guêpe"},
      {"type":"p","text":"Dans la famille des librairies JS sans prise de tête, je demande"},
      {"type":"p","text":"HTMX !"},
      {"type":"p","text":"Pourquoi cela ? Car HTML est une librairie JS :"},
      {"type":"p","text":"Légère puisqu’elle pèse moins de 14 Ko"},
      {"type":"p","text":"Sans dépendance externe, ce qui est un réel gage de"},
      {"type":"image","src":"images/laconsole/htmx-p021.jpg","alt":"Page originale de HTMX.pdf - page 21"},
      {"type":"h","text":"Page 22"},
      {"type":"p","text":"tranquilité"},
      {"type":"p","text":"Extensible puisqu’il est possible d’y"},
      {"type":"p","text":"greffer des extensions"},
      {"type":"p","text":"pour en étendre les capacités si nécessaire"},
      {"type":"p","text":"Orientée navigateur. Il n’est pas nécessaire de l’inclure"},
      {"type":"p","text":"dans un build côté serveur (via Node.js par exemple). Une"},
      {"type":"code","filename":"page-22-exemple-1","language":"html","code":"balise <script> , et c’est parti !"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-22-exemple-2","language":"javascript","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Installer HTMX"},
      {"type":"p","text":"HTMX propose plusieurs approches pour procéder à son"},
      {"type":"p","text":"installation."},
      {"type":"h","text":"Via un CDN"},
      {"type":"p","text":"Le moyen le plus rapide étant\n, tel que"},
      {"type":"p","text":"l’usage d’un CDN"},
      {"type":"p","text":"l’incontournable\n."},
      {"type":"p","text":"unpkg.com"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-22-exemple-3","language":"html","code":"<script src=\"https://unpkg.com/htmx.org@1.9"},
      {"type":"image","src":"images/laconsole/htmx-p022.jpg","alt":"Page originale de HTMX.pdf - page 22"},
      {"type":"h","text":"Page 23"},
      {"type":"h","text":"En local"},
      {"type":"p","text":"Pour une utilisation en production, il est recommandé de"},
      {"type":"p","text":"le"},
      {"type":"p","text":"télécharger"},
      {"type":"p","text":"sur votre serveur et de pointer vers lui avec un"},
      {"type":"p","text":"chemin local :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"code","filename":"page-23-exemple-1","language":"html","code":"<script src=\"/path/to/htmx.min.js\"></script"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Si vous souhaitez\n,"},
      {"type":"p","text":"installer des extensions HTMX"},
      {"type":"p","text":"&"},
      {"type":"p","text":"Une bibliothèque à la taille de"},
      {"type":"p","text":"celles-ci sont présentes dans le dossier"},
      {"type":"p","text":"ext ."},
      {"type":"p","text":"guêpe"},
      {"type":"p","text":"Installer HTMX"},
      {"type":"p","text":"Via un CDN"},
      {"type":"code","filename":"page-23-exemple-2","language":"bash","code":"Via npm"},
      {"type":"p","text":"En local"},
      {"type":"code","filename":"page-23-exemple-3","language":"bash","code":"Via npm"},
      {"type":"code","filename":"page-23-exemple-4","language":"bash","code":"Pour les adeptes de npm , la commande suivante permet de"},
      {"type":"p","text":"télécharger dans"},
      {"type":"p","text":"node_modules  :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-23-exemple-5","language":"bash","code":"npm install htmx.org"},
      {"type":"p","text":"Cette méthode a l’avantage de proposer une phase de build de"},
      {"type":"p","text":"HTMX côté serveur avec les outils de votre choix. Cela permet"},
      {"type":"p","text":"ainsi d’appliquer des mécaniques d’optimisation (miniﬁcation,"},
      {"type":"p","text":"concaténation…) sur le ﬁchier source et de l’inclure dans un"},
      {"type":"p","text":"bundle JS."},
      {"type":"image","src":"images/laconsole/htmx-p023.jpg","alt":"Page originale de HTMX.pdf - page 23"},
      {"type":"h","text":"Page 24"},
      {"type":"p","text":"Un « bundle » JavaScript est un ﬁchier qui contient"},
      {"type":"p","text":"plusieurs ﬁchiers JavaScript regroupés ensemble. Cela"},
      {"type":"p","text":"&"},
      {"type":"p","text":"améliore les performances en réduisant le nombre de"},
      {"type":"p","text":"requêtes réseau nécessaires pour charger une page"},
      {"type":"p","text":"web."},
      {"type":"p","text":"La librairie propose même une"},
      {"type":"p","text":"installation spéciﬁque pour le"},
      {"type":"p","text":"bundler Webpack"},
      {"type":"p","text":"."},
      {"type":"p","text":"Précédent :\n1.\nFondamentaux\n〈"},
      {"type":"p","text":"Suivant :\n3.\nEnvoyer\nune\nRequête\nAJAX"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"+"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des LEGO."},
      {"type":"p","text":"@"},
      {"type":"p","text":"Plus tard, je découvre le dev, des\nLEGO où les briques sont remplacées"},
      {"type":"p","text":""},
      {"type":"p","text":"par des lignes de code. J'en fais mon\nmétier puis je décide de transmettre"},
      {"type":"p","text":"cette passion en école de dev et sur\nlaConsole."},
      {"type":"image","src":"images/laconsole/htmx-p024.jpg","alt":"Page originale de HTMX.pdf - page 24"},
      {"type":"h","text":"Page 25"},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de\nconﬁdentialité"},
      {"type":"p","text":"développement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/htmx-p025.jpg","alt":"Page originale de HTMX.pdf - page 25"},
      {"type":"h","text":"Page 26"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"HTMX › Recevoir une Réponse AJAX"},
      {"type":"h","text":""},
      {"type":"p","text":"Injecter dans le DOM les templates HTML retournés par le serveur est un"},
      {"type":"p","text":"jeu d'enfant avec HTMX."},
      {"type":"h","text":"avr. 2024 ■■■Intermédiaire 4 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours\nCheatsheet"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nHTMX : DE L'AJAX SANS JAVASCRIPT\n/ 4. RECEVOIR UNE RÉPONSE AJAX"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"Avec HTMX, la transmission de données se fait"},
      {"type":"p","text":"exclusivement à travers des templates HTML, évitant ainsi"},
      {"type":"p","text":"toute manipulation de données côté client (variables,"},
      {"type":"p","text":"conditions, boucles…). Cette approche simpliﬁe grandement"},
      {"type":"p","text":"l’intégration des données dans le DOM, offrant une"},
      {"type":"p","text":"ﬂexibilité optimale."},
      {"type":"h","text":"Target : ciblage du DOM"},
      {"type":"p","text":"Par défaut, le retour d’une requête AJAX est injecté dans le"},
      {"type":"image","src":"images/laconsole/htmx-p026.jpg","alt":"Page originale de HTMX.pdf - page 26"},
      {"type":"h","text":"Page 27"},
      {"type":"p","text":"DOM à l’intérieur de l’élément portant l’attribut hx-"},
      {"type":"code","filename":"page-27-exemple-1","language":"javascript","code":"<methode_http> ."},
      {"type":"p","text":"Il est possible de déﬁnir une autre balise, comme «"},
      {"type":"p","text":"réceptacle » de l’injection avec l’attribut hx-target  ayant"},
      {"type":"p","text":"pour valeur le sélecteur CSS de l’élément cible."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-27-exemple-2","language":"html","code":"<input type=\"text\" name=\"q\""},
      {"type":"p","text":"hx-get=\"/trigger_delay\""},
      {"type":"p","text":"hx-trigger=\"keyup changed delay:500ms"},
      {"type":"p","text":"hx-target=\"#search-results\""},
      {"type":"p","text":"placeholder=\"Search...\""},
      {"type":"p","text":">"},
      {"type":"code","filename":"page-27-exemple-3","language":"html","code":"<div id=\"search-results\"></div>"},
      {"type":"p","text":"Sans hx-target , les résultats seraient injectés dans la"},
      {"type":"code","filename":"page-27-exemple-4","language":"html","code":"balise <input>"},
      {"type":"p","text":"Avec hx-target , les résultats sont injectés dans la"},
      {"type":"code","filename":"page-27-exemple-5","language":"html","code":"balise <div id=\"search-results\"></div>"},
      {"type":"p","text":"Par défaut, le contenu est injecté par hx-target  dans"},
      {"type":"p","text":"l’élément indiqué ( innerHTML ). Si vous souhaitez avoir"},
      {"type":"p","text":"plus de ﬂexibilité lors de son insertion, il faudra faire appel"},
      {"type":"p","text":"à l’attribut hx-swap ."},
      {"type":"image","src":"images/laconsole/htmx-p027.jpg","alt":"Page originale de HTMX.pdf - page 27"},
      {"type":"h","text":"Page 28"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-28-exemple-1","language":"javascript","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Swapping : remplacement du DOM"},
      {"type":"p","text":"Le swapping consiste à spéciﬁer comment le contenu ciblée"},
      {"type":"p","text":"par hx-target  dois être mis à jour."},
      {"type":"h","text":"Nom Description"},
      {"type":"p","text":"innerHTML\n(défaut) Insère le contenu à l’intérieur de"},
      {"type":"p","text":"l’élément cible"},
      {"type":"h","text":"outerHTML Remplace l’intégralité de l’élément cible"},
      {"type":"h","text":"beforebegin Ajoute le contenu avant le parent de"},
      {"type":"p","text":"l’élément cible"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"h","text":"afterbegin Ajoute le contenu avant le premier"},
      {"type":"p","text":"enfant de l’élément cible"},
      {"type":"p","text":"\nSOMMAIRE"},
      {"type":"h","text":"beforeend Ajoute le contenu après le dernier enfant"},
      {"type":"p","text":"de l’élément cible"},
      {"type":"p","text":"Target : ciblage du DOM"},
      {"type":"p","text":"Swapping : remplacement du\nDOM"},
      {"type":"image","src":"images/laconsole/htmx-p028.jpg","alt":"Page originale de HTMX.pdf - page 28"},
      {"type":"h","text":"Page 29"},
      {"type":"p","text":"DOM"},
      {"type":"h","text":"afterend Ajoute le contenu après le parent de"},
      {"type":"p","text":"l’élément cible"},
      {"type":"code","filename":"page-29-exemple-1","language":"javascript","code":"delete\nSupprime l’élément cible"},
      {"type":"p","text":"indépendamment de la réponse"},
      {"type":"h","text":"none Aucune insertion dans le DOM"},
      {"type":"p","text":"L’exemple suivant illustre l’intérêt du swapping avec"},
      {"type":"code","filename":"page-29-exemple-2","language":"javascript","code":"beforeend , permettant de mettre à jour une liste <ul>  de"},
      {"type":"code","filename":"page-29-exemple-3","language":"javascript","code":"manière à conserver les éléments <li>  existants."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-29-exemple-4","language":"html","code":"<form hx-post=\"/tasks\" hx-target=\"#task-l"},
      {"type":"code","filename":"page-29-exemple-5","language":"html","code":"<input type=\"text\" name=\"task\">"},
      {"type":"code","filename":"page-29-exemple-6","language":"javascript","code":"<button type=\"submit\">Ajouter</button"},
      {"type":"code","filename":"page-29-exemple-7","language":"javascript","code":"</form>"},
      {"type":"code","filename":"page-29-exemple-8","language":"javascript","code":"<ul id=\"task-list\">"},
      {"type":"p","text":"<!-- Les tâches vont être ajoutées en"},
      {"type":"code","filename":"page-29-exemple-9","language":"javascript","code":"</ul>"},
      {"type":"p","text":"À chaque soumission du formulaire, une requête POST  est"},
      {"type":"p","text":"envoyée sur /tasks , enregistrant une nouvelle tâche (en"},
      {"type":"p","text":"base de données par exemple), et l’insérant dans le DOM,"},
      {"type":"p","text":"en ﬁn de liste."},
      {"type":"p","text":"On imagine que le HTML retourné par le serveur"},
      {"type":"p","text":"'"},
      {"type":"code","filename":"page-29-exemple-10","language":"javascript","code":"est un élément de liste. Par exemple : <li>Sortir"},
      {"type":"code","filename":"page-29-exemple-11","language":"javascript","code":"les poubelles</li> ."},
      {"type":"image","src":"images/laconsole/htmx-p029.jpg","alt":"Page originale de HTMX.pdf - page 29"},
      {"type":"h","text":"Page 30"},
      {"type":"p","text":"Précédent :\n3.\nEnvoyer\nune\nRequête\nAJAX"},
      {"type":"p","text":"〈"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"*"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à"},
      {"type":"p","text":"remodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le"},
      {"type":"p","text":"dev, des LEGO où les briques\nsont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier puis"},
      {"type":"p","text":"je décide de transmettre cette"},
      {"type":"p","text":"passion en école de dev et sur"},
      {"type":"p","text":"laConsole."},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au\ndéveloppement web.\nM'abonner à la newsletter"},
      {"type":"p","text":"légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/htmx-p030.jpg","alt":"Page originale de HTMX.pdf - page 30"},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleArticlesHtml.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleArticlesHtml: SubSection[] = [
  {
    id: "laconsole-newsletter-html",
    title: "7 conseils pour coder une newsletter en HTML",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - 14 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"7 Tips pour Coder sa Newsletter en HTML comme un Pro !"},
      {"type":"h","text":"Ah, écrire du HTML pour une newsletter, un vrai casse-tête !"},
      {"type":"h","text":"Voici 7 astuces pour éviter les problèmes d'afﬁchage courants"},
      {"type":"h","text":"des clients mails."},
      {"type":"h","text":"oct. 2024 6 min"},
      {"type":"p","text":"⏾"},
      {"type":"h","text":"# culture web # html # css # accessibilité"},
      {"type":"h","text":"# veille"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"La newsletter est un outil incontournable pour démarrer"},
      {"type":"code","filename":"page-1-exemple-1","language":"html","code":"une stratégie webmarketing. Si certains outils de type"},
      {"type":"p","text":"builders ou encore des templates HTML proposent de"},
      {"type":"p","text":"faciliter leur construction, il est toujours possible d’intégrer"},
      {"type":"p","text":"votre propre design en HTML/CSS."},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p001.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"h","text":"Pourquoi coder sa newsletter en HTML ?"},
      {"type":"p","text":"Coder sa newsletter en HTML permet de la personnaliser"},
      {"type":"p","text":"au maximum, et ainsi obtenir un design unique s’intégrant"},
      {"type":"p","text":"parfaitement dans notre identité de marque."},
      {"type":"p","text":"Mais coder une newsletter en HTML n’est pas aussi simple"},
      {"type":"p","text":"qu’on pourrait le croire…"},
      {"type":"p","text":"Si on pense au premier abord qu’il sufﬁt d’intégrer"},
      {"type":"p","text":"classiquement une page en HTML/CSS, que l’on"},
      {"type":"p","text":"prévisualiserait dans notre navigateur, vous seriez surpris"},
      {"type":"h","text":"par l’horreur qui sera afﬁchée au sein des clients de"},
      {"type":"p","text":"messagerie (Gmail, Yahoo, Outlook…) de vos abonnés."},
      {"type":"p","text":"Et la raison à cela est simple : les clients mails utilisent"},
      {"type":"h","text":"leur propre moteur de rendu, bien moins moderne que"},
      {"type":"p","text":"ceux utilisés par les navigateurs."},
      {"type":"p","text":"Autrement dit, chaque client mail interprète le HTML à sa"},
      {"type":"p","text":"manière, et cela, pour des raisons de :"},
      {"type":"p","text":"Sécurité : Les clients mails limitent certaines"},
      {"type":"p","text":"fonctionnalités du HTML ainsi que l’usage de"},
      {"type":"p","text":"JavaScript pour éviter les failles de sécurité."},
      {"type":"p","text":"Performance : Les moteurs de rendu des clients mails"},
      {"type":"p","text":"sont optimisés pour traiter rapidement le contenu,"},
      {"type":"p","text":"souvent en ignorant des éléments trop lourds, comme"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p002.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"p","text":"les polices web, les images ou certains styles CSS"},
      {"type":"p","text":"avancés."},
      {"type":"h","text":"Compatibilité fonctionnelle : Chaque client mail a ses"},
      {"type":"p","text":"priorités et contraintes, ce qui les pousse à adopter"},
      {"type":"p","text":"des interprétations différentes du code HTML/CSS"},
      {"type":"p","text":"pour s’assurer que les mails s’afﬁchent rapidement et"},
      {"type":"p","text":"de manière ﬁable, même depuis une connexion"},
      {"type":"p","text":"internet lente."},
      {"type":"p","text":"Vous l’aurez compris, entre les différences d’interprétation"},
      {"type":"p","text":"des clients mails et les limitations du HTML dans ce"},
      {"type":"p","text":"contexte, coder une newsletter compatible avec la plupart"},
      {"type":"p","text":"des clients de messagerie est un véritable déﬁ, car un"},
      {"type":"p","text":"simple défaut de compatibilité et vos efforts peuvent se"},
      {"type":"p","text":"transformer en un gros méli-mélo de styles cassés et"},
      {"type":"p","text":"d’éléments mal alignés."},
      {"type":"p","text":"Can I email"},
      {"type":"p","text":"est une excellente ressource pour"},
      {"type":"p","text":"#"},
      {"type":"p","text":"visualiser le support HTML et CSS en fonction"},
      {"type":"p","text":"des clients mails utilisés."},
      {"type":"p","text":"C’est ainsi en faisant face à ces contraintes lors du codage"},
      {"type":"p","text":"du template HTML de ma newsletter mensuelle (lien dans"},
      {"type":"p","text":"le menu"},
      {"type":"p","text":") que je me suis décidé à partager quelques tips"},
      {"type":"p","text":"à travers cet article."},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p003.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"p","text":"Il est donc temps de vous donner 7 astuces pour coder"},
      {"type":"p","text":"votre newsletter en HTML comme un pro."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-4-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"7 tips pour une newsletter largement"},
      {"type":"h","text":"compatible"},
      {"type":"h","text":"1. Utiliser les tableaux HTML"},
      {"type":"p","text":"Dans une page web classique, on utilise aujourd’hui les"},
      {"type":"p","text":"boîtes ﬂexibles\ngrilles CSS"},
      {"type":"p","text":"flex  ou les\n grid  pour"},
      {"type":"p","text":"organiser les éléments. Cependant, ces techniques ne sont"},
      {"type":"p","text":"pas bien supportées par la plupart des clients mails."},
      {"type":"p","text":"Pour éviter les mauvaises surprises, préférez les bons"},
      {"type":"code","filename":"page-4-exemple-2","language":"html","code":"vieux tableaux HTML ( <table> ). Oui vous avez bien lu…"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p004.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-5-exemple-1","language":"html","code":"<table"},
      {"type":"p","text":"role=\"presentation\""},
      {"type":"p","text":"width=\"100%\""},
      {"type":"p","text":"cellspacing=\"0\""},
      {"type":"p","text":"cellpadding=\"0\""},
      {"type":"p","text":"border=\"0\""},
      {"type":"p","text":">"},
      {"type":"code","filename":"page-5-exemple-2","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-5-exemple-3","language":"html","code":"<td width=\"25%\" valign=\"middle\">"},
      {"type":"code","filename":"page-5-exemple-4","language":"html","code":"<td width=\"75%\" valign=\"middle\">"},
      {"type":"code","filename":"page-5-exemple-5","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-5-exemple-6","language":"html","code":"</table>"},
      {"type":"p","text":"Cela vous permet de structurer vos colonnes et vos lignes"},
      {"type":"h","text":"de manière ﬁable, et d’assurer un rendu homogène sur les"},
      {"type":"p","text":"différents clients de messagerie."},
      {"type":"p","text":"Même le positionnement avec float  n’est pas"},
      {"type":"p","text":"⚠"},
      {"type":"p","text":"bien supporté par les clients mails."},
      {"type":"h","text":"2. Style inline"},
      {"type":"code","filename":"page-5-exemple-7","language":"html","code":"Les feuilles de style externes ( <link> ) ou les styles écrits"},
      {"type":"code","filename":"page-5-exemple-8","language":"html","code":"entre les balises <style>  sont souvent ignorées par les"},
      {"type":"p","text":"clients mail, c’est pourquoi il est recommandé d’utiliser des"},
      {"type":"p","text":"« styles inline », avec l’attribut HTML style ."},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p005.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-6-exemple-1","language":"html","code":"<td style=\"background-color: #f5f5f5; pa"},
      {"type":"p","text":"Contenu de la cellule"},
      {"type":"code","filename":"page-6-exemple-2","language":"html","code":"</td>"},
      {"type":"p","text":"C’est très vilain et loin des bonnes pratiques du web"},
      {"type":"p","text":"moderne, mais c’est le moyen le plus efﬁcace de vous"},
      {"type":"h","text":"assurer du bon rendu de votre mise en page."},
      {"type":"h","text":"3. Pas de balises sémantiques"},
      {"type":"p","text":"Si la totalité des clients mails supportent la balise"},
      {"type":"code","filename":"page-6-exemple-3","language":"html","code":"générique <div> , ce n’est pas le cas des conteneurs"},
      {"type":"p","text":"sémantiques, plus modernes, tels que les balises :"},
      {"type":"code","filename":"page-6-exemple-4","language":"html","code":"<header> , <footer> , <main> , <nav> , <article> ,"},
      {"type":"code","filename":"page-6-exemple-5","language":"html","code":"<section>  et <aside> ."},
      {"type":"p","text":"Si on vous a déja dit d’éviter la « divite » lorsque vous"},
      {"type":"p","text":"codiez vos premières pages web, vous avez la permission"},
      {"type":"p","text":"de vous lâcher dans le cas de la création de template"},
      {"type":"p","text":"HTML de newsletters !"},
      {"type":"p","text":"La divite est une pratique consistant à utiliser"},
      {"type":"code","filename":"page-6-exemple-6","language":"html","code":"excessivement la balise <div>  dans le code"},
      {"type":"p","text":"&"},
      {"type":"p","text":"HTML, au lieu d’utiliser des balises sémantiques"},
      {"type":"p","text":"plus appropriées."},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p006.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!--"},
      {"type":"p","text":"NON : Évitez cette structure pou"},
      {"type":"code","filename":"page-7-exemple-1","language":"html","code":"<header>"},
      {"type":"code","filename":"page-7-exemple-2","language":"html","code":"<img src=\"https...\" alt=\"Description"},
      {"type":"code","filename":"page-7-exemple-3","language":"html","code":"<h1>Titre de la newsletter</h1>"},
      {"type":"code","filename":"page-7-exemple-4","language":"html","code":"</header>"},
      {"type":"code","filename":"page-7-exemple-5","language":"html","code":"<main>"},
      {"type":"code","filename":"page-7-exemple-6","language":"html","code":"<article>Contenu principal</article>"},
      {"type":"code","filename":"page-7-exemple-7","language":"html","code":"</main>"},
      {"type":"code","filename":"page-7-exemple-8","language":"html","code":"<footer>"},
      {"type":"code","filename":"page-7-exemple-9","language":"html","code":"<p>Pied de page</p>"},
      {"type":"code","filename":"page-7-exemple-10","language":"html","code":"</footer>"},
      {"type":"p","text":"<!--"},
      {"type":"p","text":"OUI : Utilisez cette structure p"},
      {"type":"code","filename":"page-7-exemple-11","language":"html","code":"<div id=\"header\">"},
      {"type":"code","filename":"page-7-exemple-12","language":"html","code":"<img src=\"https...\" alt=\"Description"},
      {"type":"code","filename":"page-7-exemple-13","language":"html","code":"<h1>Titre de la newsletter</h1>"},
      {"type":"code","filename":"page-7-exemple-14","language":"html","code":"</div>"},
      {"type":"code","filename":"page-7-exemple-15","language":"html","code":"<div id=\"main\">"},
      {"type":"code","filename":"page-7-exemple-16","language":"html","code":"<div>Contenu principal</div>"},
      {"type":"code","filename":"page-7-exemple-17","language":"html","code":"</div>"},
      {"type":"code","filename":"page-7-exemple-18","language":"html","code":"<div id=\"footer\">"},
      {"type":"code","filename":"page-7-exemple-19","language":"html","code":"<p>Pied de page</p>"},
      {"type":"code","filename":"page-7-exemple-20","language":"html","code":"</div>"},
      {"type":"h","text":"4. Déﬁnir une largeur maximale (max-width)"},
      {"type":"p","text":"Votre newsletter doit être lisible aussi bien sur un écran de"},
      {"type":"p","text":"smartphone que sur un écran de 27 pouces."},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p007.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"Pour éviter que votre contenu ne s’étire de manière"},
      {"type":"p","text":"incontrôlée, pensez à déﬁnir une largeur maximale ﬁxe"},
      {"type":"p","text":"pour vos sections :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-8-exemple-1","language":"html","code":"<div style=\"max-width: 600px; margin: 0"},
      {"type":"p","text":"<!-- Section de la newsletter -->"},
      {"type":"code","filename":"page-8-exemple-2","language":"html","code":"</div>"},
      {"type":"h","text":"Cela permet de garder un bon équilibre sur tous les"},
      {"type":"p","text":"écrans, sans que vos lecteurs n’aient à lire des lignes de"},
      {"type":"p","text":"texte beaucoup trop longues ou ne voient des contenus"},
      {"type":"p","text":"médias trop zoomés."},
      {"type":"h","text":"5. Responsive Mobile First"},
      {"type":"p","text":"Adopter une approche mobile-ﬁrst assure un afﬁchage"},
      {"type":"p","text":"lisible sur mobile, qui restera fonctionnel sur desktop"},
      {"type":"h","text":"même dans le cas où les media queries ne sont pas prises"},
      {"type":"p","text":"en compte par le client mail."},
      {"type":"p","text":"Un layout sur une seule colonne s’afﬁchera"},
      {"type":"p","text":"proprement sur mobile et desktop (d’autant plus"},
      {"type":"p","text":"que l’afﬁchage sur desktop sera idéalement"},
      {"type":"p","text":"&"},
      {"type":"p","text":"contenu dans un conteneur pas trop large - cf."},
      {"type":"p","text":"max-width"},
      {"type":"p","text":") alors qu’un layout multi-colonnes"},
      {"type":"p","text":"sera la plupart du temps trop compressé sur"},
      {"type":"p","text":"mobile."},
      {"type":"p","text":"Etant donné qu’il n’est pas possible d’écrire des media"},
      {"type":"p","text":"queries en inline, notez qu’il est nécessaire de les insérer"},
      {"type":"code","filename":"page-8-exemple-3","language":"html","code":"dans des balises <style> , idéalement dans le <body> ,"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p008.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"car certains clients mails ignorent les styles placés dans le"},
      {"type":"code","filename":"page-9-exemple-1","language":"html","code":"<head> ."},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-9-exemple-2","language":"html","code":"<body>"},
      {"type":"code","filename":"page-9-exemple-3","language":"html","code":"<style type=\"text/css\">"},
      {"type":"code","filename":"page-9-exemple-4","language":"html","code":"@media only screen and (min-widt"},
      {"type":"code","filename":"page-9-exemple-5","language":"html","code":"#mon-img {"},
      {"type":"code","filename":"page-9-exemple-6","language":"html","code":"width: 300px !important;"},
      {"type":"code","filename":"page-9-exemple-7","language":"html","code":"}"},
      {"type":"code","filename":"page-9-exemple-8","language":"html","code":"}"},
      {"type":"code","filename":"page-9-exemple-9","language":"html","code":"</style>"},
      {"type":"code","filename":"page-9-exemple-10","language":"html","code":"<img src=\"https://...\" alt=\"Descript"},
      {"type":"code","filename":"page-9-exemple-11","language":"html","code":"</body>"},
      {"type":"p","text":"N’oubliez pas d’utiliser l’expression !important  pour"},
      {"type":"p","text":"garantir que les styles soient appliqués correctement, car"},
      {"type":"h","text":"certains clients peuvent les surcharger."},
      {"type":"h","text":"6. Les images"},
      {"type":"p","text":"Les images dans une newsletter jouent un rôle clé pour"},
      {"type":"p","text":"l’engagement, mais elles peuvent rapidement devenir un"},
      {"type":"p","text":"problème si elles ne respectent pas certaines règles :"},
      {"type":"p","text":"Texte alternatif"},
      {"type":"p","text":"Utilisez toujours un attribut alt  pour décrire vos"},
      {"type":"h","text":"images."},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"Cela permet aux lecteurs, y compris ceux utilisant des"},
      {"type":"h","text":"lecteurs d’écran, de comprendre le contenu visuel"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p009.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"h","text":"même si l’image ne se charge pas."},
      {"type":"p","text":"Pourquoi coder sa newsletter en"},
      {"type":"p","text":"HTML ?"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"7 tips pour une newsletter\nlargement compatible"},
      {"type":"code","filename":"page-10-exemple-1","language":"html","code":"<img src=\"https://example.com/image.jp"},
      {"type":"p","text":"1. Utiliser les tableaux HTML"},
      {"type":"p","text":"2. Style inline"},
      {"type":"p","text":"Liens absolus"},
      {"type":"p","text":"3. Pas de balises sémantiques"},
      {"type":"p","text":"4. Déﬁnir une largeur\nmaximale (max-width)"},
      {"type":"p","text":"Utilisez des chemins absolus pour vos images"},
      {"type":"p","text":"(hébergement sur un serveur public) au lieu de chemins"},
      {"type":"p","text":"5. Responsive Mobile First"},
      {"type":"p","text":"relatifs. Cela garanti que l’image sera accessible, peu"},
      {"type":"p","text":"6. Les images"},
      {"type":"p","text":"importe où elle est visualisée."},
      {"type":"p","text":"7. Une typographie classique"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"<!--"},
      {"type":"p","text":"Chemin absolu -->"},
      {"type":"code","filename":"page-10-exemple-2","language":"html","code":"<img src=\"https://example.com/image.jp"},
      {"type":"p","text":"<!--"},
      {"type":"p","text":"Chemin relatif -->"},
      {"type":"code","filename":"page-10-exemple-3","language":"html","code":"<img src=\"images/logo.jpg\" alt=\"Descri"},
      {"type":"p","text":"Poids des images"},
      {"type":"p","text":"Si vos images sont trop lourdes, elles peuvent ralentir le"},
      {"type":"h","text":"chargement de votre newsletter, ce qui peut frustrer"},
      {"type":"p","text":"vos lecteurs et les amener à quitter votre email."},
      {"type":"p","text":"Plus contraignant, des images trop lourdes peuvent"},
      {"type":"h","text":"également être bloquées par certains clients de"},
      {"type":"p","text":"messagerie, rendant votre contenu incomplet."},
      {"type":"h","text":"Le redimensionnement et l’optimisation de vos images"},
      {"type":"p","text":"est un point clé à ne pas négliger !"},
      {"type":"p","text":"Formats d'image"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p010.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 10"},
      {"type":"h","text":"Page 11"},
      {"type":"p","text":"Pour assurer une compatibilité maximale, privilégiez des"},
      {"type":"h","text":"formats d’image standards tels que .jpg , .png  ou"},
      {"type":"p","text":".gif ."},
      {"type":"p","text":"Le JPEG est idéal pour les photographies en raison"},
      {"type":"p","text":"de sa compression efﬁcace."},
      {"type":"p","text":"Le PNG convient mieux aux illustrations ou images"},
      {"type":"p","text":"nécessitant de la transparence."},
      {"type":"p","text":"Le GIF peut être utilisé pour des animations"},
      {"type":"p","text":"simples, mais il est limité en termes de couleurs."},
      {"type":"p","text":"Évitez des formats plus modernes comme .webp  ou"},
      {"type":"p","text":"encore .avif , car bien qu’intéressants en termes de"},
      {"type":"h","text":"rapport qualité/compression, ils pourraient ne pas être"},
      {"type":"p","text":"pris en charge par certains clients de messagerie."},
      {"type":"h","text":"7. Une typographie classique"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Quand on parle de typographie dans une newsletter,"},
      {"type":"p","text":"mieux vaut ne pas s’aventurer dans des choix trop"},
      {"type":"p","text":"audacieux."},
      {"type":"p","text":"Certains clients mails ne supportent qu’un nombre limité"},
      {"type":"p","text":"de polices, donc privilégiez des polices traditionnelles"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p011.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 11"},
      {"type":"h","text":"Page 12"},
      {"type":"p","text":"telles que :"},
      {"type":"p","text":"Arial"},
      {"type":"p","text":"Verdana"},
      {"type":"p","text":"Georgia"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"Cela garantit que votre texte s’afﬁchera correctement"},
      {"type":"p","text":"partout."},
      {"type":"p","text":"Si vous tenez à utiliser une police plus originale, prévoyez"},
      {"type":"h","text":"une police de secours en fallback :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-12-exemple-1","language":"html","code":"<h1 style=\"font-family: Nunito, Arial, s"},
      {"type":"p","text":"Coder une newsletter en HTML peut s’avérer être un vrai"},
      {"type":"p","text":"casse-tête pour les développeurs frontend, habitués à"},
      {"type":"p","text":"utiliser quotidiennement des fonctionnalités modernes de"},
      {"type":"p","text":"HTML et CSS. Avec ces astuces, vous vous épargnerez"},
      {"type":"p","text":"bien des soucis."},
      {"type":"p","text":"Pour garantir un rendu optimal partout, gardez en tête qu’il"},
      {"type":"p","text":"est crucial de tester l’afﬁchage de votre newsletter sur"},
      {"type":"p","text":"plusieurs plateformes et outils de messagerie."},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p012.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 12"},
      {"type":"h","text":"Page 13"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":")"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques\nsont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier\npuis je décide de transmettre\ncette passion en école de dev et"},
      {"type":"p","text":"sur laConsole."},
      {"type":"h","text":"Lire aussi"},
      {"type":"p","text":"new"},
      {"type":"p","text":"Pourquoi"},
      {"type":"p","text":"Utilise-t-"},
      {"type":"p","text":"2 Outils"},
      {"type":"p","text":"on 12"},
      {"type":"p","text":"Pourquoi"},
      {"type":"p","text":"pour"},
      {"type":"p","text":"Colonnes"},
      {"type":"p","text":"apprendre"},
      {"type":"p","text":"Connaître"},
      {"type":"p","text":"à coder"},
      {"type":"p","text":"en"},
      {"type":"p","text":"la"},
      {"type":"p","text":"Webdesign"},
      {"type":"p","text":"en 2025 ?"},
      {"type":"p","text":"Tendance"},
      {"type":"p","text":"?"},
      {"type":"p","text":"d'une"},
      {"type":"p","text":"Techno"},
      {"type":"p","text":"ui/ux"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"progression"},
      {"type":"p","text":"veille"},
      {"type":"p","text":"css"},
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p013.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 13"},
      {"type":"h","text":"Page 14"},
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
      {"type":"image","src":"images/laconsole-articles/7-tips-pour-coder-sa-newsletter-en-html-comme-un-pro-laconsole-p014.jpg","alt":"Page originale de 7 Tips pour Coder sa Newsletter en HTML comme un Pro ! - laConsole.pdf - page 14"},
    ],
  },
  {
    id: "laconsole-emmet-html",
    title: "10 raccourcis Emmet indispensables pour écrire du HTML",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - 24 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"10 Raccourcis Emmet Indispensables pour Ecrire du HTML"},
      {"type":"h","text":"Boostez votre productivité avec ces 10 raccourcis Emmet"},
      {"type":"h","text":"indispensables pour écrire du HTML plus rapidement et"},
      {"type":"h","text":"efﬁcacement."},
      {"type":"h","text":"sept. 2024 8 min"},
      {"type":"p","text":"⏾"},
      {"type":"h","text":"# productivité # ide"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"Emmet est un plugin incontournable pour les développeurs"},
      {"type":"p","text":"front-end qui cherchent à optimiser leur workﬂow à travers"},
      {"type":"p","text":"des raccourcis d’écriture. Voici les 10 raccourcis Emmet"},
      {"type":"p","text":"indispensables."},
      {"type":"p","text":"Et si je vous disais qu’il était possible d’écrire cet extrait de"},
      {"type":"p","text":"code HTML en 7 secondes chrono ?"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p001.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-2-exemple-1","language":"html","code":"<html lang=\"fr\">"},
      {"type":"code","filename":"page-2-exemple-2","language":"html","code":"<head>"},
      {"type":"code","filename":"page-2-exemple-3","language":"html","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-2-exemple-4","language":"html","code":"<meta name=\"viewport\" content=\"width"},
      {"type":"code","filename":"page-2-exemple-5","language":"html","code":"<title>Document</title>"},
      {"type":"code","filename":"page-2-exemple-6","language":"html","code":"<link rel=\"stylesheet\" href=\"style.c"},
      {"type":"code","filename":"page-2-exemple-7","language":"html","code":"</head>"},
      {"type":"code","filename":"page-2-exemple-8","language":"html","code":"<body>"},
      {"type":"code","filename":"page-2-exemple-9","language":"html","code":"<h1>Emmet est incroyable !</h1>"},
      {"type":"code","filename":"page-2-exemple-10","language":"html","code":"<script src=\"\"></script>"},
      {"type":"code","filename":"page-2-exemple-11","language":"html","code":"</body>"},
      {"type":"code","filename":"page-2-exemple-12","language":"html","code":"</html>"},
      {"type":"p","text":"Dit comme ça, c’est plutôt sympa. Mais comment s’y"},
      {"type":"p","text":"prendre ?! Welcoooome Emmet !"},
      {"type":"h","text":"Qu’est-ce qu’Emmet ?"},
      {"type":"p","text":"Emmet"},
      {"type":"h","text":"est un plugin qui permet d’accélérer le processus"},
      {"type":"h","text":"d’écriture de code HTML et de CSS en proposant des"},
      {"type":"p","text":"raccourcis d’écriture."},
      {"type":"p","text":"La syntaxe des ces raccourcis est étroitement inspirée de"},
      {"type":"p","text":"celles des sélecteurs CSS pour créer des structures HTML"},
      {"type":"p","text":"complexes en quelques touches. Un avantage indéniable"},
      {"type":"p","text":"qui rend l’écriture de raccourcis Emmet très intuitive."},
      {"type":"p","text":"Outre le gain de temps, générer son code avec des"},
      {"type":"p","text":"raccourcis permet d’éviter des erreurs courantes comme"},
      {"type":"p","text":"l’oubli d’un chevron dans l’écriture d’une balise HTML."},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p002.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"p","text":"Intégré nativement dans de nombreux éditeurs de code"},
      {"type":"p","text":"comme VS Code, il peut également l’être par"},
      {"type":"p","text":"l’intermédiaire d’un plugin."},
      {"type":"p","text":"Emmet est aujourd’hui si populaire et puissant qu’il est"},
      {"type":"p","text":"impensable pour un développeur web front de ne pas"},
      {"type":"p","text":"l’utiliser."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-3-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"TOP 10 raccourcis Emmet indispensbales"},
      {"type":"p","text":"Vous allez découvrir 10 raccourcis Emmet indispensables"},
      {"type":"p","text":"pour écrire du HTML plus rapidement."},
      {"type":"h","text":"1. Créer un squelette HTML"},
      {"type":"h","text":"Créer un squellette HTML avec les"},
      {"type":"p","text":"balises de premier"},
      {"type":"p","text":"niveaux"},
      {"type":"p","text":"( html , head  et body ) est une tâche longue et"},
      {"type":"p","text":"récurrente. Heureusement, il existe un raccourci Emmet"},
      {"type":"code","filename":"page-3-exemple-2","language":"html","code":"permettant de générer un squelette type de document"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p003.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"p","text":"HTML."},
      {"type":"h","text":"Pour créer un squelette de document HTML, tapez !  :"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"!"},
      {"type":"p","text":"HTML généré :"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-4-exemple-1","language":"html","code":"<html lang=\"en\">"},
      {"type":"code","filename":"page-4-exemple-2","language":"html","code":"<head>"},
      {"type":"code","filename":"page-4-exemple-3","language":"html","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-4-exemple-4","language":"html","code":"<meta name=\"viewport\" content=\"width"},
      {"type":"code","filename":"page-4-exemple-5","language":"html","code":"<title>Document</title>"},
      {"type":"code","filename":"page-4-exemple-6","language":"html","code":"</head>"},
      {"type":"code","filename":"page-4-exemple-7","language":"html","code":"<body>"},
      {"type":"code","filename":"page-4-exemple-8","language":"html","code":"</body>"},
      {"type":"code","filename":"page-4-exemple-9","language":"html","code":"</html>"},
      {"type":"h","text":"2. Créer un élément"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p004.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"Pour créer une balise HTML, tapez simplement le nom de"},
      {"type":"p","text":"l'élément , sans les chevrons :"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"section"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-5-exemple-1","language":"html","code":"<section></section>"},
      {"type":"h","text":"3. Créer un élément avec un id"},
      {"type":"h","text":"Pour créer une balise HTML avec un id  associé, tapez #"},
      {"type":"p","text":"suivi d’un nom de l’identiﬁant :"},
      {"type":"p","text":"Si le nom d’un élément préﬁxe le # , alors l’identiﬁant"},
      {"type":"p","text":"sera associé à l’élément en question."},
      {"type":"p","text":"Si rien ne préﬁxe le # , alors l’identiﬁant sera associé à"},
      {"type":"p","text":"l’élément div ."},
      {"type":"p","text":"Raccourcis Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"img#avatar"},
      {"type":"p","text":"#preview"},
      {"type":"p","text":"HTML généré :"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p005.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"code","filename":"page-6-exemple-1","language":"html","code":"<img src=\"\" alt=\"\" id=\"avatar\">"},
      {"type":"code","filename":"page-6-exemple-2","language":"html","code":"<div id=\"preview\"></div>"},
      {"type":"code","filename":"page-6-exemple-3","language":"html","code":"4. Créer un élément avec une\nclass"},
      {"type":"code","filename":"page-6-exemple-4","language":"html","code":"Pour créer une balise HTML avec une class  associée,"},
      {"type":"p","text":"tapez .  suivi d’un nom de classe :"},
      {"type":"p","text":"Si le nom d’un élément préﬁxe le . , alors la classe"},
      {"type":"p","text":"sera associée à l’élément en question."},
      {"type":"p","text":"Si rien ne préﬁxe le . , alors la classe sera associée à"},
      {"type":"p","text":"l’élément div ."},
      {"type":"p","text":"Raccourcis Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"button.btn.btn-primary"},
      {"type":"p","text":".container"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-6-exemple-5","language":"html","code":"<button class=\"btn btn-primary\"></button"},
      {"type":"code","filename":"page-6-exemple-6","language":"html","code":"<div class=\"container\"></div>"},
      {"type":"p","text":"Pour cumuler des classes, il sufﬁt de les chaîner avec"},
      {"type":"p","text":"plusieurs . ."},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p006.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"L’usage du raccourci de classes est extrêmement"},
      {"type":"p","text":"apprécié des usagers de framework CSS utilitaires"},
      {"type":"p","text":"comme\n qui y voient un énorme gain"},
      {"type":"p","text":"Tailwind CSS"},
      {"type":"p","text":"$"},
      {"type":"p","text":"de temps. Exemple de conteneur ﬂexible généré"},
      {"type":"p","text":"avec Emmet pour Tailwind CSS : .flex.justify-"},
      {"type":"p","text":"center.items-center.gap-4"},
      {"type":"h","text":"5. Créer un élément avec des attributs"},
      {"type":"h","text":"Pour ajouter des attributs custom à un élément, on les"},
      {"type":"p","text":"note entre crochets : [] , selon le format :"},
      {"type":"p","text":"[attribut1=\"valeur\" attribut2=\"valeur\" ...] ."},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"img[src=\"https://picsum.photos/500\" alt="},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-7-exemple-1","language":"html","code":"<img src=\"https://picsum.photos/500\" alt"},
      {"type":"p","text":"Bien que cette syntaxe fonctionne pour ajouter des"},
      {"type":"p","text":"classes ou identiﬁants, on privilégiera néanmoins"},
      {"type":"p","text":"$"},
      {"type":"p","text":"respectivement les syntaxes dédiées avec .  et # ."},
      {"type":"h","text":"6. Créer un élément contenant du texte"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p007.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"Pour ajouter du texte au sein d’une balise paire, on note ce"},
      {"type":"code","filename":"page-8-exemple-1","language":"html","code":"dernier entre accolades {}  :"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-8-exemple-2","language":"html","code":"h1{Emmet est fantastique !}"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-8-exemple-3","language":"html","code":"<h1>Emmet est fantastique !</h1>"},
      {"type":"h","text":"7. Créer des éléments imbriqués"},
      {"type":"h","text":"Pour imbriquer un élément dans un autre, on utilise le"},
      {"type":"p","text":"chevron > , selon le format :"},
      {"type":"p","text":"elementParent>elementEnfant  :"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"header>nav"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-8-exemple-4","language":"html","code":"<header>"},
      {"type":"code","filename":"page-8-exemple-5","language":"html","code":"<nav></nav>"},
      {"type":"code","filename":"page-8-exemple-6","language":"html","code":"</header>"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p008.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"h","text":"8. Créer des éléments voisins"},
      {"type":"h","text":"Pour créer un élément au même niveau d’arborescence"},
      {"type":"p","text":"qu’un autre, on utilise le + , selon le format :"},
      {"type":"p","text":"elementAvant+elementApres  :"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"header+main+footer"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-9-exemple-1","language":"html","code":"<header></header>"},
      {"type":"code","filename":"page-9-exemple-2","language":"html","code":"<main></main>"},
      {"type":"code","filename":"page-9-exemple-3","language":"html","code":"<footer></footer>"},
      {"type":"h","text":"9. Multiplier des éléments"},
      {"type":"h","text":"Pour multiplier le nombre d’éléments créés, on utilise"},
      {"type":"h","text":"l’opérateur *  suivi du nombre de générations souhaitées."},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"a*3"},
      {"type":"p","text":"HTML généré :"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p009.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"code","filename":"page-10-exemple-1","language":"html","code":"<a href=\"\"></a>"},
      {"type":"code","filename":"page-10-exemple-2","language":"html","code":"<a href=\"\"></a>"},
      {"type":"code","filename":"page-10-exemple-3","language":"html","code":"<a href=\"\"></a>"},
      {"type":"p","text":"L’opérateur *  est largment utilisé pour générer"},
      {"type":"p","text":"$"},
      {"type":"p","text":"des listes HTML. Par exemple : ul>li*5"},
      {"type":"h","text":"10. Regrouper des raccourcis"},
      {"type":"p","text":"Et si je souhaite créer deux section  au même niveau"},
      {"type":"p","text":"d’arborescence, contenant chacune un h2 . Comment faire"},
      {"type":"p","text":"?"},
      {"type":"p","text":"Cet extrait va bien générer deux sections voisines :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"section#s1+section#s2"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-10-exemple-4","language":"html","code":"<section id=\"s1\"></section>"},
      {"type":"code","filename":"page-10-exemple-5","language":"html","code":"<section id=\"s2\"></section>"},
      {"type":"p","text":"Mais alors, comment ajouter du contenu dedans ? Comme"},
      {"type":"p","text":"cela ?"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-10-exemple-6","language":"html","code":"section#s1>h2{Section 1}+section#s2>h2{S"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p010.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 10"},
      {"type":"h","text":"Page 11"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-11-exemple-1","language":"html","code":"<section id=\"s1\">"},
      {"type":"code","filename":"page-11-exemple-2","language":"html","code":"<h2>Section 1</h2>"},
      {"type":"code","filename":"page-11-exemple-3","language":"html","code":"<section id=\"s2\">"},
      {"type":"code","filename":"page-11-exemple-4","language":"html","code":"<h2>Section 2</h2>"},
      {"type":"code","filename":"page-11-exemple-5","language":"html","code":"</section>"},
      {"type":"code","filename":"page-11-exemple-6","language":"html","code":"</section>"},
      {"type":"p","text":"Raté… le problème vient du fait que la section 2 sera créée"},
      {"type":"p","text":"au même niveau d’arborescence que l’élément créé par"},
      {"type":"code","filename":"page-11-exemple-7","language":"html","code":"l’abréviation précédente, autrement dit h2{Section 1} ."},
      {"type":"p","text":"Heureusement, Emmet a pensé à tout en implémentant"},
      {"type":"p","text":"l’usage de parenthèses () , permettant de créer des"},
      {"type":"h","text":"élements au sein de plusieurs éléments de même niveau."},
      {"type":"p","text":"On parle de groupement."},
      {"type":"p","text":"Pour regrouper des éléments, le format est le suivant :"},
      {"type":"p","text":"(groupe de selecteurs 1)+(groupe de selecteurs"},
      {"type":"p","text":"2)  :"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p011.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 11"},
      {"type":"h","text":"Page 12"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-12-exemple-1","language":"html","code":"(section#s1>h2{Section 1})+(section#s2>h"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-12-exemple-2","language":"html","code":"<section id=\"s1\">"},
      {"type":"code","filename":"page-12-exemple-3","language":"html","code":"<h2>Section 1</h2>"},
      {"type":"code","filename":"page-12-exemple-4","language":"html","code":"</section>"},
      {"type":"code","filename":"page-12-exemple-5","language":"html","code":"<section id=\"s2\">"},
      {"type":"code","filename":"page-12-exemple-6","language":"html","code":"<h2>Section 2</h2>"},
      {"type":"code","filename":"page-12-exemple-7","language":"html","code":"</section>"},
      {"type":"p","text":"Les parenthèses agissent ici, comme en mathématiques, en"},
      {"type":"h","text":"déﬁnissant des groupes de priorité.Cela permet de"},
      {"type":"p","text":"contrôler précisément la hiérarchie des éléments,"},
      {"type":"p","text":"garantissant que les sections et leur contenu sont créés au"},
      {"type":"p","text":"même niveau d’arborescence, évitant ainsi toute"},
      {"type":"p","text":"imbrication incorrecte."},
      {"type":"h","text":"BONUS : Des raccourcis de raccourcis…"},
      {"type":"p","text":"Pour simpliﬁer la création d’éléments courants, Emmet"},
      {"type":"p","text":"propose des raccourcis… de raccourcis. Leur syntaxe est"},
      {"type":"p","text":"bien souvent :"},
      {"type":"p","text":"Une version abrégée d’un nom d’élément"},
      {"type":"p","text":"Constitué de l’opérateur :"},
      {"type":"p","text":"Préﬁxée d’un +  pour créer un groupement usuel"},
      {"type":"p","text":"d’éléments imbriqués"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p012.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 12"},
      {"type":"h","text":"Page 13"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"En voici quelques exemples :"},
      {"type":"h","text":"Raccourci"},
      {"type":"h","text":"Emmet"},
      {"type":"h","text":"Raccourci Emmet"},
      {"type":"h","text":"simpliﬁé"},
      {"type":"h","text":"traditionnel HTML"},
      {"type":"p","text":"link:css\nlink[rel=\"stylesheet\""},
      {"type":"code","filename":"page-13-exemple-1","language":"html","code":"<link"},
      {"type":"p","text":"href=\"style.css\"]"},
      {"type":"p","text":"rel=\"styl"},
      {"type":"p","text":"href=\"sty"},
      {"type":"p","text":"link:favicon\nlink[rel=\"shortcut"},
      {"type":"code","filename":"page-13-exemple-2","language":"html","code":"<link"},
      {"type":"code","filename":"page-13-exemple-3","language":"html","code":"icon\" type=\"image/x-"},
      {"type":"p","text":"rel=\"shor"},
      {"type":"p","text":"icon\""},
      {"type":"p","text":"icon\""},
      {"type":"p","text":"href=\"favicon.ico\"]"},
      {"type":"code","filename":"page-13-exemple-4","language":"html","code":"type=\"ima"},
      {"type":"p","text":"icon\""},
      {"type":"p","text":"href=\"fav"},
      {"type":"p","text":"/>"},
      {"type":"code","filename":"page-13-exemple-5","language":"html","code":"script:src\nscript[src=\"\"]\n<script"},
      {"type":"code","filename":"page-13-exemple-6","language":"html","code":"</script>"},
      {"type":"code","filename":"page-13-exemple-7","language":"html","code":"input:text\ninput[type=\"text\""},
      {"type":"code","filename":"page-13-exemple-8","language":"html","code":"<input"},
      {"type":"p","text":"name=\"\" id=\"\"]"},
      {"type":"code","filename":"page-13-exemple-9","language":"html","code":"type=\"tex"},
      {"type":"p","text":"name=\"\" i"},
      {"type":"code","filename":"page-13-exemple-10","language":"html","code":"a:mail\na[href=\"mailto:\"]\n<a"},
      {"type":"p","text":"href=\"mai"},
      {"type":"code","filename":"page-13-exemple-11","language":"html","code":"</a>"},
      {"type":"code","filename":"page-13-exemple-12","language":"html","code":"table+\ntable>tr>td\n<table><"},
      {"type":"code","filename":"page-13-exemple-13","language":"html","code":"</td></tr"},
      {"type":"code","filename":"page-13-exemple-14","language":"html","code":"</table>"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p013.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 13"},
      {"type":"h","text":"Page 14"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-14-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Exécuter un raccourci"},
      {"type":"p","text":"Lorsque vous avez écrit un raccourci, votre IDE ouvrira une"},
      {"type":"p","text":"petite fenêtre permettant de constater que la syntaxe"},
      {"type":"p","text":"d’Emmet a été reconnue. Pour exécuter le raccourci, il"},
      {"type":"p","text":"sufﬁra donc de taper la commande TAB  ou ENTER ."},
      {"type":"p","text":"Il peut arriver que cette fenêtre n’apparaisse pas (bien"},
      {"type":"p","text":"souvent car vous avez déplacé votre curseur ou édité le"},
      {"type":"h","text":"raccourci), il faudra alors placer votre curseur en ﬁn de"},
      {"type":"p","text":"raccourci et taper Ctrl + ESPACE ."},
      {"type":"p","text":"Taper une seconde fois Ctrl + ESPACE  vous"},
      {"type":"p","text":"$"},
      {"type":"h","text":"permettra même de prévisualiser le HTML généré."},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p014.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 14"},
      {"type":"h","text":"Page 15"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-15-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Exemples de raccourcis"},
      {"type":"h","text":"complexes"},
      {"type":"p","text":"Emmet offre bien évidemment la possibilité de combiner"},
      {"type":"h","text":"ces raccourcis entre eux pour créer des structures"},
      {"type":"h","text":"complexes."},
      {"type":"p","text":"Voici quelques extraits démontrant la potentiel d’Emmet :"},
      {"type":"p","text":"Générer un tableau complexe"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-15-exemple-2","language":"html","code":"table>(caption{Légende du tableau})+(t"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-15-exemple-3","language":"html","code":"<table>"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p015.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 15"},
      {"type":"h","text":"Page 16"},
      {"type":"code","filename":"page-16-exemple-1","language":"html","code":"<caption>Légende du tableau</capti"},
      {"type":"code","filename":"page-16-exemple-2","language":"html","code":"<thead>"},
      {"type":"code","filename":"page-16-exemple-3","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-16-exemple-4","language":"html","code":"<th>Colonne 1</th>"},
      {"type":"code","filename":"page-16-exemple-5","language":"html","code":"<th>Colonne 2</th>"},
      {"type":"code","filename":"page-16-exemple-6","language":"html","code":"<th>Colonne 3</th>"},
      {"type":"code","filename":"page-16-exemple-7","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-16-exemple-8","language":"html","code":"</thead>"},
      {"type":"code","filename":"page-16-exemple-9","language":"html","code":"<tbody>"},
      {"type":"code","filename":"page-16-exemple-10","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-16-exemple-11","language":"html","code":"<td>Data 1</td>"},
      {"type":"code","filename":"page-16-exemple-12","language":"html","code":"<td>Data 2</td>"},
      {"type":"code","filename":"page-16-exemple-13","language":"html","code":"<td>Data 3</td>"},
      {"type":"code","filename":"page-16-exemple-14","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-16-exemple-15","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-16-exemple-16","language":"html","code":"<td>Data 1</td>"},
      {"type":"code","filename":"page-16-exemple-17","language":"html","code":"<td>Data 2</td>"},
      {"type":"code","filename":"page-16-exemple-18","language":"html","code":"<td>Data 3</td>"},
      {"type":"code","filename":"page-16-exemple-19","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-16-exemple-20","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-16-exemple-21","language":"html","code":"<td>Data 1</td>"},
      {"type":"code","filename":"page-16-exemple-22","language":"html","code":"<td>Data 2</td>"},
      {"type":"code","filename":"page-16-exemple-23","language":"html","code":"<td>Data 3</td>"},
      {"type":"code","filename":"page-16-exemple-24","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-16-exemple-25","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-16-exemple-26","language":"html","code":"<td>Data 1</td>"},
      {"type":"code","filename":"page-16-exemple-27","language":"html","code":"<td>Data 2</td>"},
      {"type":"code","filename":"page-16-exemple-28","language":"html","code":"<td>Data 3</td>"},
      {"type":"code","filename":"page-16-exemple-29","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-16-exemple-30","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-16-exemple-31","language":"html","code":"<td>Data 1</td>"},
      {"type":"code","filename":"page-16-exemple-32","language":"html","code":"<td>Data 2</td>"},
      {"type":"code","filename":"page-16-exemple-33","language":"html","code":"<td>Data 3</td>"},
      {"type":"code","filename":"page-16-exemple-34","language":"html","code":"</tr>"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p016.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 16"},
      {"type":"h","text":"Page 17"},
      {"type":"code","filename":"page-17-exemple-1","language":"html","code":"</tbody>"},
      {"type":"code","filename":"page-17-exemple-2","language":"html","code":"<tfoot>"},
      {"type":"code","filename":"page-17-exemple-3","language":"html","code":"<tr>"},
      {"type":"code","filename":"page-17-exemple-4","language":"html","code":"<th>Colonne 1</th>"},
      {"type":"code","filename":"page-17-exemple-5","language":"html","code":"<th>Colonne 2</th>"},
      {"type":"code","filename":"page-17-exemple-6","language":"html","code":"<th>Colonne 3</th>"},
      {"type":"code","filename":"page-17-exemple-7","language":"html","code":"</tr>"},
      {"type":"code","filename":"page-17-exemple-8","language":"html","code":"</tfoot>"},
      {"type":"code","filename":"page-17-exemple-9","language":"html","code":"</table>"},
      {"type":"p","text":"Générer un menu de navigation"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"header>(a>img[src=\"https://picsum.phot"},
      {"type":"p","text":"HTML généré :"},
      {"type":"code","filename":"page-17-exemple-10","language":"html","code":"<header>"},
      {"type":"code","filename":"page-17-exemple-11","language":"html","code":"<a href=\"\"><img src=\"https://picsu"},
      {"type":"code","filename":"page-17-exemple-12","language":"html","code":"<nav class=\"navbar\">"},
      {"type":"code","filename":"page-17-exemple-13","language":"html","code":"<ul class=\"navbar-links\">"},
      {"type":"code","filename":"page-17-exemple-14","language":"html","code":"<li class=\"navbar-link\"><a"},
      {"type":"code","filename":"page-17-exemple-15","language":"html","code":"<li class=\"navbar-link\"><a"},
      {"type":"code","filename":"page-17-exemple-16","language":"html","code":"<li class=\"navbar-link\"><a"},
      {"type":"code","filename":"page-17-exemple-17","language":"html","code":"<li class=\"navbar-link\"><a"},
      {"type":"code","filename":"page-17-exemple-18","language":"html","code":"<li class=\"navbar-link\"><a"},
      {"type":"code","filename":"page-17-exemple-19","language":"html","code":"</ul>"},
      {"type":"code","filename":"page-17-exemple-20","language":"html","code":"</nav>"},
      {"type":"code","filename":"page-17-exemple-21","language":"html","code":"</header>"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p017.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 17"},
      {"type":"h","text":"Page 18"},
      {"type":"p","text":"Générer un listing de produits"},
      {"type":"p","text":"Raccourci Emmet :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"section#products>article.product*3>(he"},
      {"type":"p","text":"HTML généré :"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"Qu’est-ce qu’Emmet ?"},
      {"type":"p","text":"TOP 10 raccourcis Emmet"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p018.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 18"},
      {"type":"h","text":"Page 19"},
      {"type":"p","text":"TOP 10 raccourcis Emmet\nindispensbales"},
      {"type":"code","filename":"page-19-exemple-1","language":"html","code":"<section id=\"products\">"},
      {"type":"p","text":"1. Créer un squelette HTML"},
      {"type":"code","filename":"page-19-exemple-2","language":"html","code":"<article class=\"product\">"},
      {"type":"p","text":"2. Créer un élément"},
      {"type":"code","filename":"page-19-exemple-3","language":"html","code":"<header class=\"product-header\""},
      {"type":"p","text":"3. Créer un élément avec un id"},
      {"type":"code","filename":"page-19-exemple-4","language":"html","code":"<img src=\"\" alt=\"\">"},
      {"type":"p","text":"4. Créer un élément avec une"},
      {"type":"code","filename":"page-19-exemple-5","language":"html","code":"<h2>Produit 1</h2>"},
      {"type":"code","filename":"page-19-exemple-6","language":"html","code":"class"},
      {"type":"code","filename":"page-19-exemple-7","language":"html","code":"</header>"},
      {"type":"p","text":"5. Créer un élément avec des\nattributs"},
      {"type":"code","filename":"page-19-exemple-8","language":"html","code":"<div class=\"product-body\">"},
      {"type":"code","filename":"page-19-exemple-9","language":"html","code":"<span class=\"product-price"},
      {"type":"p","text":"6. Créer un élément contenant\ndu texte"},
      {"type":"code","filename":"page-19-exemple-10","language":"html","code":"<div class=\"product-descri"},
      {"type":"p","text":"7. Créer des éléments\nimbriqués"},
      {"type":"code","filename":"page-19-exemple-11","language":"html","code":"</div>"},
      {"type":"code","filename":"page-19-exemple-12","language":"html","code":"</article>"},
      {"type":"p","text":"8. Créer des éléments voisins"},
      {"type":"code","filename":"page-19-exemple-13","language":"html","code":"<article class=\"product\">"},
      {"type":"p","text":"9. Multiplier des éléments"},
      {"type":"code","filename":"page-19-exemple-14","language":"html","code":"<header class=\"product-header\""},
      {"type":"p","text":"10. Regrouper des raccourcis"},
      {"type":"code","filename":"page-19-exemple-15","language":"html","code":"<img src=\"\" alt=\"\">"},
      {"type":"p","text":"BONUS : Des raccourcis de\nraccourcis…"},
      {"type":"code","filename":"page-19-exemple-16","language":"html","code":"<h2>Produit 2</h2>"},
      {"type":"code","filename":"page-19-exemple-17","language":"html","code":"</header>"},
      {"type":"p","text":"Exécuter un raccourci"},
      {"type":"code","filename":"page-19-exemple-18","language":"html","code":"<div class=\"product-body\">"},
      {"type":"p","text":"Exemples de raccourcis"},
      {"type":"code","filename":"page-19-exemple-19","language":"html","code":"<span class=\"product-price"},
      {"type":"p","text":"complexes"},
      {"type":"code","filename":"page-19-exemple-20","language":"html","code":"<div class=\"product-descri"},
      {"type":"p","text":"Emmet, des raccourcis aussi"},
      {"type":"p","text":"pour CSS"},
      {"type":"code","filename":"page-19-exemple-21","language":"html","code":"</div>"},
      {"type":"code","filename":"page-19-exemple-22","language":"html","code":"</article>"},
      {"type":"code","filename":"page-19-exemple-23","language":"html","code":"<article class=\"product\">"},
      {"type":"code","filename":"page-19-exemple-24","language":"html","code":"<header class=\"product-header\""},
      {"type":"code","filename":"page-19-exemple-25","language":"html","code":"<img src=\"\" alt=\"\">"},
      {"type":"code","filename":"page-19-exemple-26","language":"html","code":"<h2>Produit 3</h2>"},
      {"type":"code","filename":"page-19-exemple-27","language":"html","code":"</header>"},
      {"type":"code","filename":"page-19-exemple-28","language":"html","code":"<div class=\"product-body\">"},
      {"type":"code","filename":"page-19-exemple-29","language":"html","code":"<span class=\"product-price"},
      {"type":"code","filename":"page-19-exemple-30","language":"html","code":"<div class=\"product-descri"},
      {"type":"code","filename":"page-19-exemple-31","language":"html","code":"</div>"},
      {"type":"code","filename":"page-19-exemple-32","language":"html","code":"</article>"},
      {"type":"code","filename":"page-19-exemple-33","language":"html","code":"</section>"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p019.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 19"},
      {"type":"h","text":"Page 20"},
      {"type":"p","text":"Comme vous avez pu le constater avec ces exemples, si les"},
      {"type":"p","text":"raccourcis Emmet sont redoutablement efﬁcaces pour"},
      {"type":"p","text":"générer de grandes portions de code HTML, leur syntaxe"},
      {"type":"p","text":"devient plus complexe à mesure que les structures"},
      {"type":"p","text":"s’approfondissent."},
      {"type":"p","text":"Une astuce que j’exploite personnellement consiste à"},
      {"type":"h","text":"procéder par itérations."},
      {"type":"p","text":"J’ai par exmeple pour habitude de décomposer une"},
      {"type":"code","filename":"page-20-exemple-1","language":"html","code":"expression comme table>(caption{Légende du"},
      {"type":"code","filename":"page-20-exemple-2","language":"html","code":"tableau})+(thead>tr>th*3{Colonne $})+"},
      {"type":"code","filename":"page-20-exemple-3","language":"html","code":"(tbody>tr*5>td*3{Data $})+(tfoot>tr>th*3{Colonne"},
      {"type":"code","filename":"page-20-exemple-4","language":"html","code":"$})  de la manière suivante :"},
      {"type":"p","text":"1. Dans un premier temps une structure globale avec :"},
      {"type":"code","filename":"page-20-exemple-5","language":"html","code":"table>caption{Légende du"},
      {"type":"code","filename":"page-20-exemple-6","language":"html","code":"tableau}+thead+tbody+tfoot"},
      {"type":"p","text":"2. Puis mettre mon curseur dans thead  pour écrire :"},
      {"type":"code","filename":"page-20-exemple-7","language":"html","code":"tr>th*3{Colonne $}"},
      {"type":"p","text":"3. Puis mettre mon curseur dans tbody  pour écrire :"},
      {"type":"code","filename":"page-20-exemple-8","language":"html","code":"tr*5>td*3{Data $}"},
      {"type":"p","text":"4. Puis mettre mon curseur dans tfoot  pour écrire :"},
      {"type":"code","filename":"page-20-exemple-9","language":"html","code":"tr>th*3{Colonne $}"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p020.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 20"},
      {"type":"h","text":"Page 21"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-21-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Emmet, des raccourcis"},
      {"type":"h","text":"aussi pour CSS"},
      {"type":"p","text":"Bien qu’Emmet soit principalement connu pour faciliter"},
      {"type":"p","text":"l’écriture de balises HTML grâce à des abréviations"},
      {"type":"p","text":"inspirées des sélecteurs CSS, il offre également de"},
      {"type":"h","text":"puissants raccourcis pour le CSS lui-même."},
      {"type":"p","text":"La syntaxe d’Emmet étant étroitement liée aux sélecteurs"},
      {"type":"p","text":"CSS, il n’est pas spécialement utilisé pour générer des"},
      {"type":"h","text":"sélecteurs, mais plutôt pour accélérer l’écriture de couples"},
      {"type":"p","text":"propriétés/valeurs fréquemment utilisés."},
      {"type":"p","text":"Voici quelques exemples concrets qui illustrent à quel"},
      {"type":"p","text":"point Emmet peut simpliﬁer et accélérer l’écriture du style"},
      {"type":"p","text":"CSS :"},
      {"type":"h","text":"Raccourci"},
      {"type":"h","text":"Emmet Équivalent CSS"},
      {"type":"code","filename":"page-21-exemple-2","language":"html","code":"w100p\nwidth: 100%;"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p021.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 21"},
      {"type":"h","text":"Page 22"},
      {"type":"code","filename":"page-22-exemple-1","language":"html","code":"df\ndisplay: flex;"},
      {"type":"code","filename":"page-22-exemple-2","language":"html","code":"dg\ndisplay: grid;"},
      {"type":"p","text":"jcsb\njustify-content: space-"},
      {"type":"code","filename":"page-22-exemple-3","language":"html","code":"between;"},
      {"type":"code","filename":"page-22-exemple-4","language":"html","code":"p10\npadding: 10px;"},
      {"type":"code","filename":"page-22-exemple-5","language":"html","code":"bgc#f00\nbackground-color: #f00;"},
      {"type":"p","text":"bgc#f00\ngrid-template-columns:"},
      {"type":"code","filename":"page-22-exemple-6","language":"html","code":"repeat();"},
      {"type":"code","filename":"page-22-exemple-7","language":"html","code":"fw700\nfont-weight: 700;"},
      {"type":"p","text":"Il existe de nombreuses autres abréviations, qui reposent"},
      {"type":"p","text":"généralement sur l’écriture des initiales seules des"},
      {"type":"p","text":"propriétés/valeurs dans le but qu’Emmet assure leur"},
      {"type":"p","text":"autocomplétion."},
      {"type":"p","text":"Ces abréviations permettent de coder rapidement des"},
      {"type":"p","text":"styles complexes avec une syntaxe concise, rendant ainsi"},
      {"type":"p","text":"la conception CSS bien plus rapide."},
      {"type":"p","text":"En tant que développeur web, Emmet est un outil"},
      {"type":"p","text":"incontournable pour accélérer l’écriture de code HTML et"},
      {"type":"p","text":"CSS, grâce à des raccourcis simples et intuitifs."},
      {"type":"p","text":"Alors, si vous ne l’utilisez pas encore, je ne peux que vous"},
      {"type":"p","text":"recommander de l’intégrer dans votre workﬂow. Chaque"},
      {"type":"p","text":"raccourci Emmet est une opportunité de coder plus vite,"},
      {"type":"p","text":"tout en réduisant les erreurs. Vous verrez, une fois maîtrisé,"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p022.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 22"},
      {"type":"h","text":"Page 23"},
      {"type":"p","text":"vous ne pourrez plus vous en passer !"},
      {"type":"p","text":"N’hésitez pas à explorer davantage les possibilités"},
      {"type":"p","text":"d’Emmet et à\n pour"},
      {"type":"p","text":"personnaliser vos propres raccourcis"},
      {"type":"p","text":"aller encore plus loin."},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"'"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à"},
      {"type":"p","text":"remodeler le monde avec des\nLEGO. Plus tard, je découvre le\ndev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes\nde code. J'en fais mon métier"},
      {"type":"p","text":""},
      {"type":"p","text":"puis je décide de transmettre\ncette passion en école de dev et\nsur laConsole."},
      {"type":"h","text":"Lire aussi"},
      {"type":"p","text":"19"},
      {"type":"p","text":"Utiliser un"},
      {"type":"p","text":"Commandes"},
      {"type":"p","text":"Stream Deck"},
      {"type":"p","text":"Développeurs"},
      {"type":"p","text":"Shell (Linux)"},
      {"type":"p","text":"pour le"},
      {"type":"p","text":": 9 Tips pour"},
      {"type":"p","text":"Indispensables"},
      {"type":"p","text":"Développement"},
      {"type":"p","text":"votre Santé"},
      {"type":"p","text":"programmation"},
      {"type":"p","text":"hardware"},
      {"type":"p","text":"productivité"},
      {"type":"p","text":"productivité"},
      {"type":"p","text":"productivité"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p023.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 23"},
      {"type":"h","text":"Page 24"},
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
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"conﬁdentialité"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"image","src":"images/laconsole-articles/10-raccourcis-emmet-indispensables-pour-ecrire-du-html-laconsole-p024.jpg","alt":"Page originale de 10 Raccourcis Emmet Indispensables pour Ecrire du HTML - laConsole.pdf - page 24"},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleArticles3Html.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleArticles3Html: SubSection[] = [
  {
    id: "laconsole-html-xml",
    title: "Différences entre HTML et XML",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"Différences entre HTML et XML - laConsole.pdf - 11 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"Di!érences entre HTML et XML"},
      {"type":"h","text":"HTML et XML sont tous deux des langages de balisage"},
      {"type":"h","text":"permettant de structurer des informations. Mais quelle est la"},
      {"type":"h","text":"différence entre HTML et XML ?"},
      {"type":"h","text":"déc. 2024 4 min # html"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"HTML et XML sont deux langages qui se ressemblent"},
      {"type":"p","text":"fortement et il y a une raison à cela. Comprendre leurs"},
      {"type":"p","text":"différences est important pour les développeurs web."},
      {"type":"h","text":"A l’origine : le SGML"},
      {"type":"p","text":"Le SGML (pour « Standard Generalized Markup Language"},
      {"type":"p","text":"») est un standard international publié en 1986 par l’ISO"},
      {"type":"p","text":"(International Organization for Standardization)."},
      {"type":"h","text":"Il a été conçu pour fournir une méthode générique"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p001.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"h","text":"permettant de déﬁnir des langages de balisage."},
      {"type":"p","text":"Le SGML se distingue par sa capacité à structurer, stocker"},
      {"type":"p","text":"et échanger des données complexes dans des documents."},
      {"type":"p","text":"À l’époque, le SGML visait à répondre aux besoins des"},
      {"type":"p","text":"grandes organisations, comme les gouvernements ou les"},
      {"type":"p","text":"industries (aéronautique, armée, CERN, etc.), où la gestion"},
      {"type":"h","text":"de gros volumes de documentation nécessitait une"},
      {"type":"p","text":"structure rigoureuse, claire et adaptable."},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Cependant, en raison de sa complexité, il n’était pas idéal"},
      {"type":"h","text":"pour des cas d’utilisation plus légers."},
      {"type":"p","text":"C’est là qu’interviennent HTML et XML, deux langages de"},
      {"type":"p","text":"balisage dérivés du SGML, adaptés à des besoins"},
      {"type":"p","text":"spéciﬁques :"},
      {"type":"h","text":"HTML pour structurer le contenu web"},
      {"type":"h","text":"XML pour faciliter l’échange de données"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p002.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-3-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Qu’est-ce que le XML ?"},
      {"type":"h","text":"Rôle du XML"},
      {"type":"p","text":"Le XML (pour « eXtensible Markup Language ») est un"},
      {"type":"h","text":"langage de balisage générique créé en 1998 par le W3C"},
      {"type":"h","text":"pour simpliﬁer et moderniser le SGML."},
      {"type":"p","text":"Contrairement à son prédécesseur, il se concentre sur la"},
      {"type":"p","text":"simplicité et l’accessibilité, tout en conservant une"},
      {"type":"h","text":"structure hiérarchique pour organiser les données."},
      {"type":"p","text":"Le principal objectif du XML est de structurer les données"},
      {"type":"p","text":"de manière ﬂexible, sans se limiter à un domaine"},
      {"type":"p","text":"spéciﬁque."},
      {"type":"h","text":"Les développeurs peuvent déﬁnir leurs propres balises et"},
      {"type":"p","text":"règles pour répondre aux besoins d’une application."},
      {"type":"p","text":"XML est couramment utilisé par des APIs utilisant le"},
      {"type":"p","text":"protocole SOAP ou encore dans les ﬁchiers de"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p003.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"h","text":"conﬁguration."},
      {"type":"h","text":"Syntaxe"},
      {"type":"p","text":"La syntaxe XML repose sur l’usage de balises paires"},
      {"type":"p","text":"permettant de structurer les données de manière"},
      {"type":"p","text":"hiérarchique et lisible. Chaque balise a une ouverture et"},
      {"type":"p","text":"une fermeture, ce qui garantit une structure claire et valide"},
      {"type":"p","text":"du document XML."},
      {"type":"code","filename":"page-4-exemple-1","language":"html","code":"<balise>contenu</balise>"},
      {"type":"p","text":"Les balises peuvent être complétées d’attributs,"},
      {"type":"p","text":"permettant de spéciﬁer des informations supplémentaires"},
      {"type":"p","text":"ou de décrire des propriétés de l’élément."},
      {"type":"p","text":"Les attributs sont déﬁnis dans la balise ouvrante."},
      {"type":"code","filename":"page-4-exemple-2","language":"html","code":"<balise attribut=\"valeur\">contenu</balis"},
      {"type":"p","text":"Chaque balise doit respecter des règles strictes :"},
      {"type":"code","filename":"page-4-exemple-3","language":"html","code":"Les balises doivent toujours être fermées ( <balise>"},
      {"type":"code","filename":"page-4-exemple-4","language":"html","code":"… </balise> )."},
      {"type":"p","text":"Les noms de balises sont\n."},
      {"type":"p","text":"sensibles à la casse"},
      {"type":"p","text":"Tous les attributs doivent être entourés de guillemets."},
      {"type":"p","text":"Exemple d’utilisation du XML pour un ﬁchier de"},
      {"type":"p","text":"conﬁguration :"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p004.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"database.xml"},
      {"type":"code","filename":"page-5-exemple-1","language":"html","code":"<database type=\"mysql\">"},
      {"type":"code","filename":"page-5-exemple-2","language":"html","code":"<host>localhost</host>"},
      {"type":"code","filename":"page-5-exemple-3","language":"html","code":"<port>3306</port>"},
      {"type":"code","filename":"page-5-exemple-4","language":"html","code":"</database>"},
      {"type":"p","text":"Exemple d’utilisation du XML pour l’échanges de données :"},
      {"type":"p","text":"response.xml"},
      {"type":"code","filename":"page-5-exemple-5","language":"html","code":"<response>"},
      {"type":"code","filename":"page-5-exemple-6","language":"html","code":"<status>success</status>"},
      {"type":"code","filename":"page-5-exemple-7","language":"html","code":"<data>"},
      {"type":"code","filename":"page-5-exemple-8","language":"html","code":"<user>"},
      {"type":"code","filename":"page-5-exemple-9","language":"html","code":"<name>John Doe</name>"},
      {"type":"code","filename":"page-5-exemple-10","language":"html","code":"<email>john.doe@example.com<"},
      {"type":"code","filename":"page-5-exemple-11","language":"html","code":"</user>"},
      {"type":"code","filename":"page-5-exemple-12","language":"html","code":"<user>"},
      {"type":"code","filename":"page-5-exemple-13","language":"html","code":"<name>Jane Doe</name>"},
      {"type":"code","filename":"page-5-exemple-14","language":"html","code":"<email>jane.doe@example.com<"},
      {"type":"code","filename":"page-5-exemple-15","language":"html","code":"</user>"},
      {"type":"code","filename":"page-5-exemple-16","language":"html","code":"</data>"},
      {"type":"code","filename":"page-5-exemple-17","language":"html","code":"</response>"},
      {"type":"p","text":"Le XML : un langage de balisage de moins en\nmoins populaire"},
      {"type":"p","text":"Cependant, avec l’avènement du JSON (pour «"},
      {"type":"p","text":"JavaScript Object Notation »), le XML a perdu de sa"},
      {"type":"p","text":"popularité. Le JSON, plus léger et adapté au web"},
      {"type":"p","text":"moderne, est souvent préféré pour décrire des ﬁchiers"},
      {"type":"p","text":"de conﬁguration ou encore l’échange de données entre"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p005.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"p","text":"applications à travers des\n, plus actuelles.\nAPIs REST"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-6-exemple-1","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Qu’est-ce que le HTML ?"},
      {"type":"h","text":"Rôle du HTML"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Le HTML (pour « HyperText Markup Language »), conçu en"},
      {"type":"p","text":"1991 par Tim Berners-Lee, est un langage de balisage"},
      {"type":"h","text":"utilisé pour déﬁnir la structure et la présentation des"},
      {"type":"h","text":"pages web."},
      {"type":"h","text":"Il s’agit d’un sous-ensemble simpliﬁé du SGML, créé pour"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p006.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"répondre aux besoins de l’internet naissant."},
      {"type":"p","text":"Il permet entres autres aux développeurs de :"},
      {"type":"p","text":"Structurer le contenu (balisage sémantique)"},
      {"type":"p","text":"Créer des éléments textuels (titres, paragraphes,"},
      {"type":"p","text":"liens, listes, etc.)"},
      {"type":"p","text":"Insérer des médias (images, vidéos, audios, etc.)"},
      {"type":"p","text":"#\nVous souhaitez vous\n ?"},
      {"type":"p","text":"former au HTML"},
      {"type":"h","text":"Syntaxe"},
      {"type":"h","text":"HTML utilise des balises et attributs prédéﬁnis qui"},
      {"type":"p","text":"indiquent comment le contenu doit être présenté."},
      {"type":"p","text":"Voici la\n :"},
      {"type":"code","filename":"page-7-exemple-1","language":"html","code":"structure type d’une page web"},
      {"type":"p","text":"index.html"},
      {"type":"p","text":"<!DOCTYPE html>"},
      {"type":"code","filename":"page-7-exemple-2","language":"html","code":"<html lang=\"fr\">"},
      {"type":"code","filename":"page-7-exemple-3","language":"html","code":"<head>"},
      {"type":"code","filename":"page-7-exemple-4","language":"html","code":"<meta charset=\"UTF-8\">"},
      {"type":"code","filename":"page-7-exemple-5","language":"html","code":"<meta name=\"viewport\" content=\"width"},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"code","filename":"page-7-exemple-6","language":"html","code":"<title>Démonstration</title>"},
      {"type":"code","filename":"page-7-exemple-7","language":"html","code":"</head>"},
      {"type":"code","filename":"page-7-exemple-8","language":"html","code":"<body>"},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"code","filename":"page-7-exemple-9","language":"html","code":"<h1>Démonstration</h1>"},
      {"type":"code","filename":"page-7-exemple-10","language":"html","code":"</body>"},
      {"type":"p","text":"A l’origine : le SGML"},
      {"type":"code","filename":"page-7-exemple-11","language":"html","code":"</html>"},
      {"type":"p","text":"Qu’est-ce que le XML ?"},
      {"type":"p","text":"Rôle du XML"},
      {"type":"p","text":"Syntaxe"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p007.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"Qu’est-ce que le HTML ?"},
      {"type":"p","text":"Le HTML introduit l’usage de balises orphelines"},
      {"type":"p","text":"Rôle du HTML"},
      {"type":"p","text":"%"},
      {"type":"code","filename":"page-8-exemple-1","language":"html","code":"comme <meta>  qui ne sont pas autorisées en"},
      {"type":"p","text":"Syntaxe"},
      {"type":"p","text":"XML."},
      {"type":"p","text":"HTML VS XML : différences clés"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-8-exemple-2","language":"html","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"HTML VS XML : di!érences clés"},
      {"type":"p","text":"Voici un tableau récapitulatif des principales différences"},
      {"type":"p","text":"entre HTML et XML :"},
      {"type":"h","text":"Critère HTML XML"},
      {"type":"p","text":"Objectif\nStructurer et"},
      {"type":"p","text":"Structurer et"},
      {"type":"p","text":"présenter du contenu"},
      {"type":"p","text":"échanger des"},
      {"type":"p","text":"pour le web."},
      {"type":"p","text":"données."},
      {"type":"p","text":"Balises\nPrédéﬁnies (par ex."},
      {"type":"p","text":"Déﬁnies par"},
      {"type":"code","filename":"page-8-exemple-3","language":"html","code":"<h1> , <p> , <a> )."},
      {"type":"p","text":"l’utilisateur (ex."},
      {"type":"code","filename":"page-8-exemple-4","language":"html","code":"<sandwich> )."},
      {"type":"p","text":"Structure\nFlexible et permissive\nStrict (toutes les"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p008.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"(balises auto-"},
      {"type":"p","text":"balises doivent"},
      {"type":"p","text":"fermantes parfois non"},
      {"type":"p","text":"être fermées)."},
      {"type":"p","text":"nécessaires)."},
      {"type":"p","text":"Sémantique\nOrientée présentation"},
      {"type":"p","text":"Ne fait aucune"},
      {"type":"p","text":"(styles et afﬁchage)."},
      {"type":"p","text":"supposition sur"},
      {"type":"p","text":"les données."},
      {"type":"h","text":"Tolérance"},
      {"type":"p","text":"Tolérant (les"},
      {"type":"p","text":"Aucun écart"},
      {"type":"h","text":"aux erreurs"},
      {"type":"p","text":"navigateurs corrigent"},
      {"type":"p","text":"permis : erreurs"},
      {"type":"p","text":"automatiquement les"},
      {"type":"p","text":"fatales."},
      {"type":"p","text":"erreurs)."},
      {"type":"h","text":"Domaines"},
      {"type":"p","text":"Pages web et"},
      {"type":"p","text":"Fichiers de"},
      {"type":"h","text":"d’usage"},
      {"type":"p","text":"interfaces utilisateur."},
      {"type":"p","text":"conﬁguration,"},
      {"type":"p","text":"échanges de"},
      {"type":"p","text":"données (API)."},
      {"type":"p","text":"HTML et XML, bien qu’étant tous deux des langages de"},
      {"type":"p","text":"balisage dérivés du SGML, répondent à des besoins"},
      {"type":"p","text":"différents. Tandis que le HTML est orienté vers la"},
      {"type":"p","text":"présentation et la mise en page des sites web, le XML offre"},
      {"type":"p","text":"une ﬂexibilité incomparable pour structurer les données."},
      {"type":"p","text":"Vous voilà incollables sur la différence entre le HTML et le"},
      {"type":"p","text":"XML !"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p009.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"'"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques\nsont remplacées par des lignes"},
      {"type":"p","text":""},
      {"type":"p","text":"de code. J'en fais mon métier\npuis je décide de transmettre\ncette passion en école de dev et"},
      {"type":"p","text":"sur laConsole."},
      {"type":"h","text":"Lire aussi"},
      {"type":"p","text":"7 Tips"},
      {"type":"p","text":"pour"},
      {"type":"p","text":"Moteurs de"},
      {"type":"p","text":"Coder sa"},
      {"type":"p","text":"Rendu &"},
      {"type":"p","text":"Newsletter"},
      {"type":"p","text":"Comprendre"},
      {"type":"p","text":"Compatibilité"},
      {"type":"p","text":"en HTML"},
      {"type":"p","text":"les Versions"},
      {"type":"p","text":": un Déﬁ"},
      {"type":"p","text":"comme un"},
      {"type":"p","text":"Logicielles"},
      {"type":"p","text":"pour les"},
      {"type":"p","text":"Pro !"},
      {"type":"p","text":"Devs"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"html"},
      {"type":"p","text":"css"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"accessibilité"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"html"},
      {"type":"p","text":"css"},
      {"type":"p","text":"veille"},
      {"type":"p","text":"debug"},
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p010.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 10"},
      {"type":"h","text":"Page 11"},
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
      {"type":"image","src":"images/laconsole-articles-3/differences-entre-html-et-xml-laconsole-p011.jpg","alt":"Page originale de Différences entre HTML et XML - laConsole.pdf - page 11"},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleArticles5Html.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles5Html: SubSection[] = [{"id":"laconsole-srcset-optimiser-le-chargement-des-images-en-html","title":"srcset : Optimiser le Chargement des Images en HTML","blocks":[{"type":"note","variant":"info","title":"Source","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - 20 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"h","text":"srcset : Optimiser le"},{"type":"h","text":"Chargement des Images"},{"type":"h","text":"en HTML"},{"type":"p","text":"L'optimisation des images est cruciale pour améliorer les"},{"type":"p","text":"performances d'un site web. Apprenez à utiliser l'attribut"},{"type":"p","text":"HTML srcset pour accélerer vos pages web."},{"type":"p","text":"⏾"},{"type":"p","text":"nov. 2024 10 min"},{"type":"p","text":"# #"},{"type":"p","text":"performance seo"},{"type":"p","text":"Inscription à la"},{"type":"p","text":"Dans cet article, nous allons explorer comment utiliser"},{"type":"p","text":"NEWSLETTER"},{"type":"code","filename":"page-1-exemple-1","language":"javascript","code":"srcset"},{"type":"p","text":"l’attribut HTML avec des exemples de code"},{"type":"p","text":"concrets pour tirer le meilleur parti de vos images."},{"type":"h","text":"Images et performance"},{"type":"h","text":"sur le web"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 1 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p001.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"h","text":"Les images : principales"},{"type":"h","text":"responsables d’un site lent"},{"type":"p","text":"Lorsque la vitesse de chargement d’un site est insuffisante,"},{"type":"p","text":"avant de s’attaquer à l’optimisation du code, il est essentiel"},{"type":"p","text":"de se concentrer sur les images . Elles sont souvent les"},{"type":"p","text":"principales responsables de cette lenteur ."},{"type":"p","text":"Les diverses études menées sur des échantillons"},{"type":"p","text":"de sites s’accordent à dire que les images"},{"type":"p","text":"#"},{"type":"p","text":"représentent plus de 50% du poids d’une page"},{"type":"p","text":"web."},{"type":"p","text":"Les images constituent les éléments les plus lourds d’une"},{"type":"p","text":"page, et lorsqu’elles ne sont pas optimisées, elles"},{"type":"p","text":"augmentent la consommation de bande passante . Un"},{"type":"p","text":"problème particulièrement visible sur les appareils"},{"type":"p","text":"mobiles, où la bande passante est plus limitée ."},{"type":"p","text":"Ce surplus de données ralentit les temps de chargement"},{"type":"p","text":"et, par conséquent, impacte négativement les"},{"type":"p","text":"performances globales du site ."},{"type":"h","text":"Pourquoi optimiser ses images"},{"type":"h","text":"?"},{"type":"p","text":"L’optimisation des images est un levier fondamental pour"},{"type":"p","text":"améliorer les performances d’un site ou d’une application."},{"type":"p","text":"Mais quels sont conrètement les bénéfices d’un site web"},{"type":"p","text":"rapide ?"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 2 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p002.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"h","text":"1. Meilleure expérience utilisateur"},{"type":"p","text":"Un temps de chargement plus rapide améliore"},{"type":"p","text":"considérablement l’expérience de navigation . Une bonne"},{"type":"p","text":"UX implique :"},{"type":"p","text":"Une diminution du taux de rebond"},{"type":"p","text":"Une augmentation du taux de conversion"},{"type":"p","text":"Bref, plus un site est rapide, plus il est agréable à utiliser !"},{"type":"h","text":"2. Amélioration du SEO"},{"type":"p","text":"Un site plus rapide bénéficie également d’un meilleur"},{"type":"p","text":"classement sur les moteurs de recherche tels que Google,"},{"type":"p","text":"ce qui booste sa visibilité."},{"type":"p","text":"Les performances d’un site web se mesurent en partie par"},{"type":"p","text":"des indicateurs comme les Core Web Vitals , qui"},{"type":"p","text":"influencent directement son positionnement dans les"},{"type":"p","text":"résultats de recherche."},{"type":"p","text":"La métrique clé lourdement impactée par le poids des"},{"type":"code","filename":"page-3-exemple-2","language":"javascript","code":"LCP"},{"type":"p","text":"images est le Largest Contentful Paint ( ), mesurant le"},{"type":"p","text":"temps nécessaire pour afficher le plus grand élément"},{"type":"p","text":"visible dans la fenêtre (souvent une image)."},{"type":"code","filename":"page-3-exemple-3","language":"javascript","code":"LCP"},{"type":"p","text":"Un mauvais score peut gravement nuire à votre SEO."},{"type":"p","text":"En optimisant les images, vous réussissez à la fois à offrir"},{"type":"p","text":"une expérience utilisateur fluide et à améliorer votre SEO."},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 3 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p003.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 3"},{"type":"h","text":"Page 4"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"Au-delà des méthodes classiques d’optimisation, comme"},{"type":"p","text":"le choix des formats d’image (PNG, JPG, WebP, AVIF,"},{"type":"p","text":"SVG…), la réduction de la taille ou le taux de compression,"},{"type":"p","text":"cet article explore comment optimiser le chargement des"},{"type":"code","filename":"page-4-exemple-4","language":"javascript","code":"srcset"},{"type":"p","text":"images à l’aide de l’attribut HTML ."},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Des images responsive"},{"type":"h","text":"avec l’attribut"},{"type":"code","filename":"page-4-exemple-5","language":"javascript","code":"srcset"},{"type":"code","filename":"page-4-exemple-6","language":"javascript","code":"srcset"},{"type":"h","text":"A quoi sert l’attribut ?"},{"type":"p","text":"Par défaut, un navigateur télécharge l’image spécifiée dans"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 4 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p004.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 4"},{"type":"h","text":"Page 5"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-5-exemple-7","language":"javascript","code":"src <img>"},{"type":"p","text":"l’attribut de la balise ."},{"type":"code","filename":"page-5-exemple-8","language":"javascript","code":"<img src=\"images/mountains.jpg\" alt=\"Montagnes\""},{"type":"p","text":"Toutefois, avec la diversité des résolutions d’écran"},{"type":"p","text":"(smartphones, tablettes, écrans Retina, etc.), cette"},{"type":"p","text":"approche peut entraîner :"},{"type":"p","text":"Un chargement inutilement lourd (image de"},{"type":"code","filename":"page-5-exemple-9","language":"javascript","code":"2000x1000"},{"type":"p","text":"sur mobile)"},{"type":"code","filename":"page-5-exemple-10","language":"javascript","code":"500x500"},{"type":"p","text":"Une image floue (image de en plein"},{"type":"p","text":"écran sur desktop)"},{"type":"code","filename":"page-5-exemple-11","language":"javascript","code":"srcset"},{"type":"p","text":"L’attribut vous permet de spécifier plusieurs"},{"type":"p","text":"versions d’une même image (dimension variable),"},{"type":"p","text":"optimisées pour différentes résolutions ou tailles d’écran ."},{"type":"p","text":"Le navigateur choisira automatiquement la meilleure"},{"type":"p","text":"image à afficher en fonction de :"},{"type":"p","text":"1. La taille de l’écran"},{"type":"code","filename":"page-5-exemple-12","language":"javascript","code":"DPR"},{"type":"p","text":"2. La densité des pixels (« Device Pixel Ratio » ou )."},{"type":"h","text":"Définir plusieurs sources"},{"type":"code","filename":"page-5-exemple-13","language":"javascript","code":"srcset"},{"type":"h","text":"d’images avec"},{"type":"h","text":"Indiquer la largeur des images avec"},{"type":"code","filename":"page-5-exemple-14","language":"javascript","code":"w"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 5 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p005.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 5"},{"type":"h","text":"Page 6"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":""},{"type":"p","text":"copier"},{"type":"code","filename":"page-6-exemple-15","language":"javascript","code":"<img"},{"type":"code","filename":"page-6-exemple-16","language":"javascript","code":"src=\"images/mountains-small.jpg\""},{"type":"code","filename":"page-6-exemple-17","language":"javascript","code":"alt=\"Montagnes\""},{"type":"code","filename":"page-6-exemple-18","language":"javascript","code":"+"},{"type":"code","filename":"page-6-exemple-19","language":"javascript","code":"srcset=\""},{"type":"code","filename":"page-6-exemple-20","language":"javascript","code":"+"},{"type":"code","filename":"page-6-exemple-21","language":"javascript","code":"images/mountains-small.jpg 400w,"},{"type":"code","filename":"page-6-exemple-22","language":"javascript","code":"+"},{"type":"code","filename":"page-6-exemple-23","language":"javascript","code":"images/mountains-medium.jpg 800w,"},{"type":"code","filename":"page-6-exemple-24","language":"javascript","code":"+"},{"type":"code","filename":"page-6-exemple-25","language":"javascript","code":"images/mountains-large.jpg 1200w"},{"type":"code","filename":"page-6-exemple-26","language":"javascript","code":"+"},{"type":"code","filename":"page-6-exemple-27","language":"javascript","code":"\""},{"type":"code","filename":"page-6-exemple-28","language":"javascript","code":">"},{"type":"code","filename":"page-6-exemple-29","language":"javascript","code":"src"},{"type":"p","text":"L’image spécifiée dans le traditionnel sera"},{"type":"code","filename":"page-6-exemple-30","language":"javascript","code":"srcset"},{"type":"p","text":"utilisée si le navigateur ne supporte pas ."},{"type":"p","text":"#"},{"type":"p","text":"Pour maximiser la légèreté sur ces anciens"},{"type":"p","text":"navigateurs, il est recommandé d’y spécifier la"},{"type":"p","text":"plus petite image."},{"type":"code","filename":"page-6-exemple-31","language":"javascript","code":"srcset"},{"type":"p","text":"L’attribut permet de définir plusieurs sources"},{"type":"p","text":"d’images . Chaque entrée est composée du chemin de"},{"type":"code","filename":"page-6-exemple-32","language":"javascript","code":"w"},{"type":"p","text":"l’image suivi par sa largeur ( )."},{"type":"code","filename":"page-6-exemple-33","language":"javascript","code":"400w mountains-small.jpg"},{"type":"p","text":": indique que"},{"type":"code","filename":"page-6-exemple-34","language":"javascript","code":"400px"},{"type":"p","text":"mesure de large"},{"type":"code","filename":"page-6-exemple-35","language":"javascript","code":"800w mountains-medium.jpg"},{"type":"p","text":": indique que"},{"type":"code","filename":"page-6-exemple-36","language":"javascript","code":"800px"},{"type":"p","text":"mesure de large"},{"type":"code","filename":"page-6-exemple-37","language":"javascript","code":"1200w mountains-large.jpg"},{"type":"p","text":": indique que"},{"type":"code","filename":"page-6-exemple-38","language":"javascript","code":"1200px"},{"type":"p","text":"mesure de large"},{"type":"p","text":"Pourquoi doit-on spécifier au navigateur la"},{"type":"p","text":"largeur des images ?"},{"type":"p","text":"Le navigateur ne peut pas connaître la taille d’une"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 6 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p006.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 6"},{"type":"h","text":"Page 7"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":"image sans l’avoir préalablement chargée. Pour éviter"},{"type":"p","text":"de lui faire tout charger, ce qui ruinerait les bénéfices de"},{"type":"code","filename":"page-7-exemple-39","language":"javascript","code":"srcset"},{"type":"p","text":", on spécifie explicitement au navigateur la"},{"type":"code","filename":"page-7-exemple-40","language":"javascript","code":"w"},{"type":"p","text":"largeur de chaque image avec afin qu’il décide quelle"},{"type":"p","text":"version d’image télécharger."},{"type":"p","text":"La taille de l’image sélectionnée par le navigateur dépend"},{"type":"p","text":"de la largeur de la fenêtre du navigateur de l’utilisateur."},{"type":"code","filename":"page-7-exemple-41","language":"javascript","code":"500px"},{"type":"p","text":"Si la largeur de la fenêtre du navigateur est de , il"},{"type":"p","text":"ira chercher l’image ayant la largeur supérieure la plus"},{"type":"p","text":"proche (pour ne pas créer de flou en étirant une image trop"},{"type":"p","text":"petite). On s’attend donc à voir apparaître l’image définie"},{"type":"code","filename":"page-7-exemple-42","language":"javascript","code":"800w"},{"type":"p","text":"avec ."},{"type":"p","text":"Voici un tableau qui montre quelle image sera chargée en"},{"type":"p","text":"fonction de la largeur de l’écran :"},{"type":"p","text":"Largeur de"},{"type":"p","text":"fenêtre (px) Image chargée"},{"type":"code","filename":"page-7-exemple-43","language":"javascript","code":"0px 400px images/mountains-small.jpg"},{"type":"p","text":"-"},{"type":"code","filename":"page-7-exemple-44","language":"javascript","code":"400w"},{"type":"p","text":"( )"},{"type":"code","filename":"page-7-exemple-45","language":"javascript","code":"401px 800px images/mountains-"},{"type":"p","text":"-"},{"type":"code","filename":"page-7-exemple-46","language":"javascript","code":"medium.jpg 800w"},{"type":"p","text":"( )"},{"type":"code","filename":"page-7-exemple-47","language":"javascript","code":"801px images/mountains-large.jpg"},{"type":"p","text":"et plus"},{"type":"code","filename":"page-7-exemple-48","language":"javascript","code":"1200w"},{"type":"p","text":"( )"},{"type":"p","text":"Si la taille de l’image sélectionnée par le navigateur est"},{"type":"p","text":"conditionnée par la largeur de la fenêtre du navigateur , il"},{"type":"p","text":"ne s’agit pas du seul critère entrant en jeu."},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 7 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p007.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 7"},{"type":"h","text":"Page 8"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-8-exemple-49","language":"javascript","code":"x"},{"type":"h","text":"Définir la densité de pixel avec"},{"type":"code","filename":"page-8-exemple-50","language":"javascript","code":"srcset x"},{"type":"p","text":"Lorsqu’on utilise avec des résolutions ( ), on"},{"type":"p","text":"indique au navigateur quelle version de l’image afficher en"},{"type":"p","text":"fonction de la densité de pixels (DPR) de l’appareil."},{"type":"p","text":"Mais avant tout, il est important de comprendre la"},{"type":"p","text":"distinction entre pixels CSS et pixels device ."},{"type":"p","text":"Pixels CSS : Il s’agit d’une unité de mesure utilisée"},{"type":"p","text":"dans les feuilles de style (CSS). C’est une unité"},{"type":"p","text":"relative, ce qui signifie qu’elle peut être mise à"},{"type":"p","text":"l’échelle en fonction de la densité de l’écran."},{"type":"p","text":"Pixels Device : Ce sont les pixels physiques sur un"},{"type":"p","text":"écran. Leur densité varie selon une métrique nommée"},{"type":"code","filename":"page-8-exemple-51","language":"javascript","code":"DPR"},{"type":"p","text":"(« Device Pixel Ratio »)."},{"type":"p","text":"Cette DPR détermine en partie la qualité d’un écran :"},{"type":"p","text":"DPR Description Ratio"},{"type":"code","filename":"page-8-exemple-52","language":"javascript","code":"DPR"},{"type":"p","text":"Écran standard avec densité de 1 pixel CSS ="},{"type":"code","filename":"page-8-exemple-53","language":"javascript","code":"= 1"},{"type":"p","text":"pixels normale. 1 pixel"},{"type":"p","text":"physique."},{"type":"code","filename":"page-8-exemple-54","language":"javascript","code":"DPR"},{"type":"p","text":"Écran haute densité (cf. Retina), 1 pixel CSS ="},{"type":"code","filename":"page-8-exemple-55","language":"javascript","code":"= 2"},{"type":"p","text":"pour une meilleure définition 2 pixels"},{"type":"p","text":"visuelle. physiques."},{"type":"code","filename":"page-8-exemple-56","language":"javascript","code":"DPR"},{"type":"p","text":"Écran très haute densité, utilisé 1 pixel CSS ="},{"type":"code","filename":"page-8-exemple-57","language":"javascript","code":"= 3"},{"type":"p","text":"sur des appareils haut de 3 pixels"},{"type":"p","text":"gamme. physiques."},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 8 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p008.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 8"},{"type":"h","text":"Page 9"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-9-exemple-58","language":"javascript","code":"DPR"},{"type":"p","text":"Un plus élevé signifie une densité de pixels plus"},{"type":"p","text":"élevée, ce qui nécessite des images de meilleure qualité"},{"type":"p","text":"pour éviter un rendu flou."},{"type":"code","filename":"page-9-exemple-59","language":"javascript","code":"200px"},{"type":"p","text":"Par exemple, si on a une image de de large en CSS"},{"type":"p","text":"sur un écran avec un DPR de 2, l’image utilisera en largeur"},{"type":"code","filename":"page-9-exemple-60","language":"javascript","code":"200px"},{"type":"p","text":"400 pixels device ( CSS x 2 DPR)."},{"type":"code","filename":"page-9-exemple-61","language":"javascript","code":"200px"},{"type":"p","text":"Une image de CSS sur un écran avec 1"},{"type":"code","filename":"page-9-exemple-62","language":"javascript","code":"200px"},{"type":"p","text":"DPR sera plus floue qu’une image de CSS"},{"type":"p","text":"#"},{"type":"p","text":"sur un écran avec 2 DPR, mais elles occuperont"},{"type":"p","text":"toutes deux la même taille."},{"type":"code","filename":"page-9-exemple-63","language":"javascript","code":"srcset"},{"type":"p","text":"Cette densité de pixel est spécifiée dans l’attribut"},{"type":"code","filename":"page-9-exemple-64","language":"javascript","code":"x"},{"type":"p","text":"avec un multiplicateur ."},{"type":"code","filename":"page-9-exemple-65","language":"javascript","code":"<img"},{"type":"code","filename":"page-9-exemple-66","language":"javascript","code":"src=\"images/mountains-small.jpg\""},{"type":"code","filename":"page-9-exemple-67","language":"javascript","code":"alt=\"Montagnes\""},{"type":"code","filename":"page-9-exemple-68","language":"javascript","code":"+"},{"type":"code","filename":"page-9-exemple-69","language":"javascript","code":"srcset=\""},{"type":"code","filename":"page-9-exemple-70","language":"javascript","code":"+"},{"type":"code","filename":"page-9-exemple-71","language":"javascript","code":"images/mountains-small.jpg 1x,"},{"type":"code","filename":"page-9-exemple-72","language":"javascript","code":"+"},{"type":"code","filename":"page-9-exemple-73","language":"javascript","code":"images/mountains-medium.jpg 2x,"},{"type":"code","filename":"page-9-exemple-74","language":"javascript","code":"+"},{"type":"code","filename":"page-9-exemple-75","language":"javascript","code":"images/mountains-large.jpg 3x"},{"type":"code","filename":"page-9-exemple-76","language":"javascript","code":"+"},{"type":"code","filename":"page-9-exemple-77","language":"javascript","code":"\""},{"type":"code","filename":"page-9-exemple-78","language":"javascript","code":">"},{"type":"code","filename":"page-9-exemple-79","language":"javascript","code":"DPR = 1"},{"type":"p","text":"Si l’utilisateur a un écran standard ( ), le"},{"type":"code","filename":"page-9-exemple-80","language":"javascript","code":"images/mountains-"},{"type":"p","text":"navigateur chargera"},{"type":"code","filename":"page-9-exemple-81","language":"javascript","code":"small.jpg"},{"type":"p","text":"."},{"type":"code","filename":"page-9-exemple-82","language":"javascript","code":"DPR = 2"},{"type":"p","text":"Sur un écran haute résolution ( ), il chargera"},{"type":"code","filename":"page-9-exemple-83","language":"javascript","code":"images/mountains-medium.jpg"},{"type":"p","text":"pour une"},{"type":"p","text":"meilleure qualité d’image."},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 9 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p009.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 9"},{"type":"h","text":"Page 10"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-10-exemple-84","language":"javascript","code":"DPR = 3"},{"type":"p","text":"Pour un écran très haute densité ( ), il choisira"},{"type":"code","filename":"page-10-exemple-85","language":"javascript","code":"images/mountains-large.jpg"},{"type":"p","text":"pour une image"},{"type":"p","text":"encore plus nette."},{"type":"h","text":"Spécifier la taille de l’image"},{"type":"p","text":"Par défaut, le navigateur se base sur la largeur totale de"},{"type":"code","filename":"page-10-exemple-86","language":"javascript","code":"100vw"},{"type":"p","text":"l’écran ( pour « Viewport Width ») pour servir une"},{"type":"code","filename":"page-10-exemple-87","language":"javascript","code":"100vw"},{"type":"p","text":"image. Dans le cas où notre image n’occupe pas ,"},{"type":"p","text":"cela posera problème."},{"type":"h","text":"Ratio fixe"},{"type":"code","filename":"page-10-exemple-88","language":"javascript","code":"1000px"},{"type":"p","text":"Si le navigateur est ouvert dans une fenêtre de de"},{"type":"code","filename":"page-10-exemple-89","language":"javascript","code":"1200px"},{"type":"p","text":"large, il va servir l’image de , même si celle ci"},{"type":"code","filename":"page-10-exemple-90","language":"javascript","code":"200px"},{"type":"p","text":"n’occupe que sur la page…"},{"type":"code","filename":"page-10-exemple-91","language":"javascript","code":"img {"},{"type":"code","filename":"page-10-exemple-92","language":"javascript","code":"width: 200px;"},{"type":"code","filename":"page-10-exemple-93","language":"javascript","code":"}"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 10 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p010.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 10"},{"type":"h","text":"Page 11"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":""},{"type":"p","text":"copier"},{"type":"code","filename":"page-11-exemple-94","language":"javascript","code":"<img"},{"type":"code","filename":"page-11-exemple-95","language":"javascript","code":"src=\"images/mountains-small.jpg\""},{"type":"code","filename":"page-11-exemple-96","language":"javascript","code":"alt=\"Montagnes\""},{"type":"code","filename":"page-11-exemple-97","language":"javascript","code":"srcset=\""},{"type":"code","filename":"page-11-exemple-98","language":"javascript","code":"images/mountains-small.jpg 400w,"},{"type":"code","filename":"page-11-exemple-99","language":"javascript","code":"images/mountains-medium.jpg 800w,"},{"type":"code","filename":"page-11-exemple-100","language":"javascript","code":"images/mountains-large.jpg 1200w"},{"type":"code","filename":"page-11-exemple-101","language":"javascript","code":"\""},{"type":"code","filename":"page-11-exemple-102","language":"javascript","code":">"},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"code","filename":"page-11-exemple-103","language":"javascript","code":"400w"},{"type":"p","text":"Au lieu de toujours charger l’image de (ce qui"},{"type":"p","text":"suffirait étant donné que l’image occupera toujours"},{"type":"code","filename":"page-11-exemple-104","language":"javascript","code":"200px"},{"type":"p","text":"), le navigateur va charger l’image correspondante à"},{"type":"p","text":"la largeur de la fenêtre :"},{"type":"p","text":"Largeur de"},{"type":"p","text":"fenêtre (px) Image chargée"},{"type":"code","filename":"page-11-exemple-105","language":"javascript","code":"0px 400px images/mountains-small.jpg"},{"type":"p","text":"-"},{"type":"code","filename":"page-11-exemple-106","language":"javascript","code":"400w"},{"type":"p","text":"( )"},{"type":"code","filename":"page-11-exemple-107","language":"javascript","code":"401px 800px images/mountains-"},{"type":"p","text":"-"},{"type":"code","filename":"page-11-exemple-108","language":"javascript","code":"medium.jpg 800w"},{"type":"p","text":"( )"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 11 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p011.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 11"},{"type":"h","text":"Page 12"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-12-exemple-109","language":"javascript","code":"801px images/mountains-large.jpg"},{"type":"p","text":"et plus"},{"type":"code","filename":"page-12-exemple-110","language":"javascript","code":"1200w"},{"type":"p","text":"( )"},{"type":"p","text":"Le navigateur choisit ici une version d’image avec une"},{"type":"p","text":"résolution plus élevée que nécessaire, même si l’image"},{"type":"p","text":"réelle est affichée plus petite sur la page web."},{"type":"p","text":"Pourquoi ? Car comme évoqué plus haut, par défaut, le"},{"type":"p","text":"navigateur se base sur la largeur totale de l’écran pour"},{"type":"code","filename":"page-12-exemple-111","language":"javascript","code":"100vw"},{"type":"p","text":"servir des images ( ), et ça, c’est problématique…"},{"type":"code","filename":"page-12-exemple-112","language":"javascript","code":"100vw"},{"type":"p","text":"Dans le cas où notre image n’occupe pas , il sera"},{"type":"code","filename":"page-12-exemple-113","language":"javascript","code":"srcset"},{"type":"p","text":"donc impératif de l’indiquer à l’attribut . Et ça, c’est"},{"type":"code","filename":"page-12-exemple-114","language":"javascript","code":"sizes"},{"type":"p","text":"le rôle de l’attribut complémentaire ."},{"type":"code","filename":"page-12-exemple-115","language":"javascript","code":"sizes"},{"type":"p","text":"L’attribut permet de définir la largeur de l’image"},{"type":"code","filename":"page-12-exemple-116","language":"javascript","code":"vw"},{"type":"p","text":"affichée en fonction de la largeur de la fenêtre ( ). En"},{"type":"p","text":"d’autres termes, il indique au navigateur quelle version"},{"type":"code","filename":"page-12-exemple-117","language":"javascript","code":"srcset"},{"type":"p","text":"d’image choisir parmi celles définies dans , selon"},{"type":"p","text":"l’espace réellement occupé par l’image sur l’écran."},{"type":"p","text":"Voilà une solution permettant de préciser que notre image"},{"type":"code","filename":"page-12-exemple-118","language":"javascript","code":"200px"},{"type":"p","text":"occupera toujours :"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 12 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p012.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 12"},{"type":"h","text":"Page 13"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":""},{"type":"p","text":"copier"},{"type":"code","filename":"page-13-exemple-119","language":"javascript","code":"<img"},{"type":"code","filename":"page-13-exemple-120","language":"javascript","code":"src=\"images/mountains-small.jpg\""},{"type":"code","filename":"page-13-exemple-121","language":"javascript","code":"alt=\"Montagnes\""},{"type":"code","filename":"page-13-exemple-122","language":"javascript","code":"srcset=\""},{"type":"code","filename":"page-13-exemple-123","language":"javascript","code":"images/mountains-small.jpg 400w,"},{"type":"code","filename":"page-13-exemple-124","language":"javascript","code":"images/mountains-medium.jpg 800w,"},{"type":"code","filename":"page-13-exemple-125","language":"javascript","code":"images/mountains-large.jpg 1200w"},{"type":"code","filename":"page-13-exemple-126","language":"javascript","code":"\""},{"type":"code","filename":"page-13-exemple-127","language":"javascript","code":"+"},{"type":"code","filename":"page-13-exemple-128","language":"javascript","code":"sizes=\"200px\""},{"type":"code","filename":"page-13-exemple-129","language":"javascript","code":">"},{"type":"code","filename":"page-13-exemple-130","language":"javascript","code":"images/mountains-small.jpg"},{"type":"p","text":"sera désormais"},{"type":"p","text":"chargée, quelque soit la largeur de l’écran."},{"type":"p","text":"Largeur de fenêtre"},{"type":"p","text":"(px) Image chargée"},{"type":"code","filename":"page-13-exemple-131","language":"javascript","code":"0px 400px images/mountains-"},{"type":"p","text":"-"},{"type":"code","filename":"page-13-exemple-132","language":"javascript","code":"small.jpg 400w"},{"type":"p","text":"( )"},{"type":"code","filename":"page-13-exemple-133","language":"javascript","code":"401px 800px images/mountains-"},{"type":"p","text":"-"},{"type":"code","filename":"page-13-exemple-134","language":"javascript","code":"small.jpg 400w"},{"type":"p","text":"( )"},{"type":"code","filename":"page-13-exemple-135","language":"javascript","code":"801px images/mountains-"},{"type":"p","text":"et plus"},{"type":"code","filename":"page-13-exemple-136","language":"javascript","code":"small.jpg 400w"},{"type":"p","text":"( )"},{"type":"p","text":"Prenons un autre exemple."},{"type":"code","filename":"page-13-exemple-137","language":"javascript","code":"width 50vw"},{"type":"p","text":"Si la de l’image avait été définie à , sans"},{"type":"code","filename":"page-13-exemple-138","language":"javascript","code":"sizes"},{"type":"p","text":"l’attribut , la version d’image aurait été chargée en"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 13 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p013.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 13"},{"type":"h","text":"Page 14"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":"fonction de la largeur totale de l’écran et non selon la place"},{"type":"p","text":"réelle occupée, soit la moitié."},{"type":"code","filename":"page-14-exemple-139","language":"javascript","code":"img {"},{"type":"code","filename":"page-14-exemple-140","language":"javascript","code":"width: 50vw;"},{"type":"code","filename":"page-14-exemple-141","language":"javascript","code":"}"},{"type":"code","filename":"page-14-exemple-142","language":"javascript","code":"50vw"},{"type":"p","text":"On précise ici que notre image occupera toujours :"},{"type":"p","text":""},{"type":"p","text":"copier"},{"type":"code","filename":"page-14-exemple-143","language":"javascript","code":"<img"},{"type":"code","filename":"page-14-exemple-144","language":"javascript","code":"src=\"images/mountains-small.jpg\""},{"type":"code","filename":"page-14-exemple-145","language":"javascript","code":"alt=\"Montagnes\""},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"p","text":"FREE"},{"type":"code","filename":"page-14-exemple-146","language":"javascript","code":"srcset=\""},{"type":"code","filename":"page-14-exemple-147","language":"javascript","code":"images/mountains-small.jpg 400w,"},{"type":"code","filename":"page-14-exemple-148","language":"javascript","code":"images/mountains-medium.jpg 800w,"},{"type":"p","text":""},{"type":"p","text":"SOMMAIRE"},{"type":"code","filename":"page-14-exemple-149","language":"javascript","code":"images/mountains-large.jpg 1200w"},{"type":"p","text":"Images et performance sur le"},{"type":"code","filename":"page-14-exemple-150","language":"javascript","code":"\""},{"type":"p","text":"web"},{"type":"code","filename":"page-14-exemple-151","language":"javascript","code":"+"},{"type":"code","filename":"page-14-exemple-152","language":"javascript","code":"sizes=\"50vw\""},{"type":"p","text":"Les images : principales"},{"type":"code","filename":"page-14-exemple-153","language":"javascript","code":">"},{"type":"p","text":"responsables d’un site lent"},{"type":"p","text":"Pourquoi optimiser ses images"},{"type":"p","text":"?"},{"type":"p","text":"On obtient ainsi :"},{"type":"p","text":"1. Meilleure expérience"},{"type":"p","text":"utilisateur"},{"type":"p","text":"2. Amélioration du SEO"},{"type":"p","text":"Largeur"},{"type":"p","text":"Des images responsive avec"},{"type":"p","text":"de"},{"type":"p","text":"l’attribut srcset"},{"type":"p","text":"fenêtre"},{"type":"p","text":"A quoi sert l’attribut srcset ?"},{"type":"p","text":"(px) Image chargée"},{"type":"p","text":"Définir plusieurs sources"},{"type":"p","text":"d’images avec srcset"},{"type":"code","filename":"page-14-exemple-154","language":"javascript","code":"0px images/mountains-small.jpg 400w"},{"type":"p","text":"- ( )"},{"type":"code","filename":"page-14-exemple-155","language":"javascript","code":"800px 50vw"},{"type":"p","text":"- car affichera au maximum une image"},{"type":"p","text":"Indiquer la largeur des"},{"type":"p","text":"images avec w"},{"type":"code","filename":"page-14-exemple-156","language":"javascript","code":"400px"},{"type":"p","text":"de"},{"type":"p","text":"Définir la densité de pixel"},{"type":"p","text":"avec x"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 14 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p014.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 14"},{"type":"h","text":"Page 15"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":"avec x"},{"type":"code","filename":"page-15-exemple-157","language":"javascript","code":"801px images/mountains-medium.jpg"},{"type":"p","text":"-"},{"type":"p","text":"Spécifier la taille de l’image"},{"type":"code","filename":"page-15-exemple-158","language":"javascript","code":"1600px 800w 50vw"},{"type":"p","text":"( ) - car affichera au maximum une"},{"type":"p","text":"Ratio fixe"},{"type":"code","filename":"page-15-exemple-159","language":"javascript","code":"800px"},{"type":"p","text":"image de"},{"type":"p","text":"Ratio variable"},{"type":"code","filename":"page-15-exemple-160","language":"javascript","code":"1601px images/mountains-large.jpg"},{"type":"code","filename":"page-15-exemple-161","language":"javascript","code":"1200w"},{"type":"p","text":"et plus ( )"},{"type":"code","filename":"page-15-exemple-162","language":"javascript","code":"%"},{"type":"p","text":"Il n’est pas possible d’utiliser dans l’attribut"},{"type":"code","filename":"page-15-exemple-163","language":"javascript","code":"sizes"},{"type":"p","text":"car il ne permettrait pas au navigateur de"},{"type":"p","text":"⚠"},{"type":"p","text":"déterminer avec précision la taille de l’image à"},{"type":"p","text":"afficher. Il est généralement recommandé de"},{"type":"code","filename":"page-15-exemple-164","language":"javascript","code":"px vw"},{"type":"p","text":"travailler avec des ou ."},{"type":"h","text":"Ratio variable"},{"type":"p","text":"La plupart du temps, l’espace occupé par une image est"},{"type":"p","text":"variable. Il ne dépend pas d’une valeur fixe en px ou vw,"},{"type":"p","text":"mais est ajusté dynamiquement via des media queries ."},{"type":"p","text":"Voici un exemple de code où l’espace occupé par l’image"},{"type":"p","text":"varie en fonction de la taille de l’écran :"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 15 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p015.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 15"},{"type":"h","text":"Page 16"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-16-exemple-165","language":"javascript","code":"img {"},{"type":"code","filename":"page-16-exemple-166","language":"javascript","code":"width: 100vw;"},{"type":"code","filename":"page-16-exemple-167","language":"javascript","code":"}"},{"type":"code","filename":"page-16-exemple-168","language":"javascript","code":"@media screen and (min-width: 576px) {"},{"type":"code","filename":"page-16-exemple-169","language":"javascript","code":"img {"},{"type":"code","filename":"page-16-exemple-170","language":"javascript","code":"width: 200px;"},{"type":"code","filename":"page-16-exemple-171","language":"javascript","code":"}"},{"type":"code","filename":"page-16-exemple-172","language":"javascript","code":"}"},{"type":"code","filename":"page-16-exemple-173","language":"javascript","code":"@media screen and (min-width: 1024px) {"},{"type":"code","filename":"page-16-exemple-174","language":"javascript","code":"img {"},{"type":"code","filename":"page-16-exemple-175","language":"javascript","code":"width: 300px;"},{"type":"code","filename":"page-16-exemple-176","language":"javascript","code":"}"},{"type":"code","filename":"page-16-exemple-177","language":"javascript","code":"}"},{"type":"p","text":"Les media queries indiquent ici :"},{"type":"code","filename":"page-16-exemple-178","language":"javascript","code":"100vw"},{"type":"p","text":"Par défaut :"},{"type":"code","filename":"page-16-exemple-179","language":"javascript","code":">= 576px 200px"},{"type":"p","text":"Pour les écrans de largeur :"},{"type":"code","filename":"page-16-exemple-180","language":"javascript","code":">= 1024px 300px"},{"type":"p","text":"Pour les écrans de largeur :"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 16 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p016.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 16"},{"type":"h","text":"Page 17"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-17-exemple-181","language":"javascript","code":"<img"},{"type":"code","filename":"page-17-exemple-182","language":"javascript","code":"src=\"images/mountains-small.jpg\""},{"type":"code","filename":"page-17-exemple-183","language":"javascript","code":"alt=\"Montagnes\""},{"type":"code","filename":"page-17-exemple-184","language":"javascript","code":"srcset=\""},{"type":"code","filename":"page-17-exemple-185","language":"javascript","code":"images/mountains-small.jpg 400w,"},{"type":"code","filename":"page-17-exemple-186","language":"javascript","code":"images/mountains-medium.jpg 800w,"},{"type":"code","filename":"page-17-exemple-187","language":"javascript","code":"images/mountains-large.jpg 1200w"},{"type":"code","filename":"page-17-exemple-188","language":"javascript","code":"\""},{"type":"code","filename":"page-17-exemple-189","language":"javascript","code":"+"},{"type":"code","filename":"page-17-exemple-190","language":"javascript","code":"sizes=\"(min-width: 1024px) 300px, (min-width: 576px) 200px, 100vw\""},{"type":"code","filename":"page-17-exemple-191","language":"javascript","code":">"},{"type":"code","filename":"page-17-exemple-192","language":"javascript","code":"srcset"},{"type":"p","text":"Le paramètre définit plusieurs versions de l’image,"},{"type":"code","filename":"page-17-exemple-193","language":"javascript","code":"sizes"},{"type":"p","text":"et permet de spécifier quelle taille d’image est"},{"type":"p","text":"attendue en fonction des breakpoints définis dans les"},{"type":"p","text":"media queries."},{"type":"code","filename":"page-17-exemple-194","language":"javascript","code":"sizes"},{"type":"p","text":"La valeur de l’attribut est une chaîne contenant une"},{"type":"p","text":"liste de descripteurs de taille de source , séparés par des"},{"type":"p","text":"virgules. Chaque descripteur comprend une condition"},{"type":"p","text":"média et une valeur de taille correspondant à l’image"},{"type":"p","text":"lorsque la condition est vraie."},{"type":"p","text":"La dernière valeur de cette liste est la taille par défaut,"},{"type":"p","text":"utilisée lorsqu’ aucune des conditions des media queries"},{"type":"p","text":"n’est remplie , ce qui est nécessaire pour les résolutions"},{"type":"p","text":"d’écran ne correspondant à aucune media query (par"},{"type":"code","filename":"page-17-exemple-195","language":"javascript","code":"< 576px"},{"type":"p","text":"exemple, )."},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 17 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p017.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 17"},{"type":"h","text":"Page 18"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":"Attention, l’ordre des descripteurs est important"},{"type":"p","text":"car le navigateur applique la première condition"},{"type":"p","text":"valide qu’il trouve en lisant de gauche à droite."},{"type":"code","filename":"page-18-exemple-196","language":"javascript","code":"sizes=\"(min-width: 576px)"},{"type":"p","text":"Inverser l’ordre en"},{"type":"p","text":"⚠"},{"type":"code","filename":"page-18-exemple-197","language":"javascript","code":"200px, (min-width: 1024px) 300px, 100vw\""},{"type":"p","text":"impliquerait que dès que la largeur du viewport"},{"type":"code","filename":"page-18-exemple-198","language":"javascript","code":"576px"},{"type":"p","text":"est supérieure ou égale à , il choisira"},{"type":"code","filename":"page-18-exemple-199","language":"javascript","code":"200px"},{"type":"p","text":", même si le viewport est supérieur à"},{"type":"code","filename":"page-18-exemple-200","language":"javascript","code":"1024px"},{"type":"p","text":"."},{"type":"p","text":"Largeur de"},{"type":"p","text":"fenêtre (px) Image chargée"},{"type":"code","filename":"page-18-exemple-201","language":"javascript","code":"0px images/mountains-small.jpg"},{"type":"p","text":"-"},{"type":"code","filename":"page-18-exemple-202","language":"javascript","code":"400px 400w 400px"},{"type":"p","text":"( ) - car maximum nécessaires"},{"type":"code","filename":"page-18-exemple-203","language":"javascript","code":"401px images/mountains-medium.jpg"},{"type":"p","text":"-"},{"type":"code","filename":"page-18-exemple-204","language":"javascript","code":"575px 800w 575px"},{"type":"p","text":"( ) - car maximum nécessaires"},{"type":"code","filename":"page-18-exemple-205","language":"javascript","code":"576px images/mountains-small.jpg"},{"type":"p","text":"-"},{"type":"code","filename":"page-18-exemple-206","language":"javascript","code":"1023px 400w 200px"},{"type":"p","text":"( ) - car nécessaires"},{"type":"code","filename":"page-18-exemple-207","language":"javascript","code":"1024px images/mountains-small.jpg"},{"type":"p","text":"et"},{"type":"code","filename":"page-18-exemple-208","language":"javascript","code":"400w 300px"},{"type":"p","text":"plus ( ) - car nécessaires"},{"type":"code","filename":"page-18-exemple-209","language":"javascript","code":"images/mountains-large.jpg 1200w"},{"type":"p","text":"L’image ( )"},{"type":"p","text":"n’est jamais utilisée ici, car notre page web n’affiche jamais"},{"type":"code","filename":"page-18-exemple-210","language":"javascript","code":"800px"},{"type":"p","text":"l’image dans une largeur supérieure à ."},{"type":"p","text":"Le bookmarklet RespImageLint est un excellent"},{"type":"p","text":"#"},{"type":"p","text":"moyen d’obtenir les valeurs précises à indiquer"},{"type":"code","filename":"page-18-exemple-211","language":"javascript","code":"sizes"},{"type":"p","text":"dans l’attribut d’une image responsive."},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 18 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p018.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 18"},{"type":"h","text":"Page 19"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"code","filename":"page-19-exemple-212","language":"javascript","code":"srcset"},{"type":"p","text":"Optimiser vos images avec , c’est non seulement"},{"type":"p","text":"améliorer les performances de votre site, mais aussi"},{"type":"p","text":"réduire votre empreinte carbone car les images constituent"},{"type":"p","text":"une part significative du poids total d’un site, ce qui signifie"},{"type":"p","text":"davantage de données à stocker et à charger pour les"},{"type":"p","text":"utilisateurs, engendrant ainsi des coûts énergétiques."},{"type":"p","text":"L’optimisation est donc également un enjeu"},{"type":"p","text":"environnemental."},{"type":"p","text":"Thibaud d'Arros"},{"type":"p","text":"Fondateur Développeur"},{"type":"p","text":"● ●"},{"type":"p","text":"Formateur"},{"type":"p","text":"●"},{"type":"p","text":"("},{"type":"p","text":"L"},{"type":"p","text":"Enfant, je passais des heures à"},{"type":"p","text":"'"},{"type":"p","text":"A"},{"type":"p","text":"U"},{"type":"p","text":"remodeler le monde avec des"},{"type":"p","text":"@"},{"type":"p","text":"T"},{"type":"p","text":"LEGO. Plus tard, je découvre le"},{"type":"p","text":"E"},{"type":"p","text":"U"},{"type":"p","text":"dev, des LEGO où les briques"},{"type":"p","text":"R"},{"type":"p","text":"sont remplacées par des lignes"},{"type":"p","text":""},{"type":"p","text":"de code. J'en fais mon métier"},{"type":"p","text":"puis je décide de transmettre"},{"type":"p","text":"cette passion en école de dev et"},{"type":"p","text":"sur laConsole."},{"type":"h","text":"Lire aussi"},{"type":"p","text":"Comprendre Mesurer le"},{"type":"p","text":"et Créer du Temps"},{"type":"p","text":"Différences"},{"type":"p","text":"Debounce d'Exécution"},{"type":"p","text":"entre SSR,"},{"type":"p","text":"(délai) en d'un Script"},{"type":"p","text":"CSR et"},{"type":"p","text":"JavaScript ? JS"},{"type":"p","text":"SSG"},{"type":"p","text":"programmation programmation"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 19 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p019.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 19"},{"type":"h","text":"Page 20"},{"type":"p","text":"srcset : Optimiser le Chargement des Images en HTML - laConsole 02/03/2025 11 : 01"},{"type":"p","text":"js programmation js debug"},{"type":"p","text":"performance performance performance"},{"type":"p","text":"E-LEARNING COMMUNAUTÉ LÉGAL"},{"type":"p","text":"Formations Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},{"type":"p","text":"légales"},{"type":"p","text":"Cheatsheets A propos"},{"type":"p","text":"développement web."},{"type":"p","text":"Politique de"},{"type":"p","text":"Blog Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Faire ma veille"},{"type":"p","text":"status : 200 laConsole © 2025"},{"type":"p","text":"https://laconsole.dev/blog/attribut-srcset-optimiser-chargement-images-html Page 20 sur 20"},{"type":"image","src":"images/laconsole-articles-5/srcset-optimiser-le-chargement-des-images-en-html-laconsole-p020.jpg","alt":"Page originale de srcset : Optimiser le Chargement des Images en HTML - laConsole.pdf - page 20"}]}];

export const html: Section = {
  id: "html",
  title: "HTML",
  icon: "FileCode",
  tags: ["html"],
  subsections: [...htmlCourse, ...htmlFrontend, ...laConsoleHtml, ...laConsoleArticlesHtml, ...laConsoleArticles3Html, ...laConsoleArticles5Html],
};
