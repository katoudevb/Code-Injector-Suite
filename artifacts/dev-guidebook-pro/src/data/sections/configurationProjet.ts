import type { Section, SubSection } from "../types";

// ── Contenu fusionné depuis laConsoleArticles2Configuration.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleArticles2Configuration: SubSection[] = [
  {
    id: "laconsole-virtual-host-wamp",
    title: "Créer un Virtual Host avec WampServer",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"Créer un Virtual Host avec WampServer - laConsole.pdf - 10 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"Créer un Virtual Host avec WampServer"},
      {"type":"h","text":"Créer un virtual host est utile lors du développement d'une"},
      {"type":"h","text":"application web. Voici comment procéder avec WampServer."},
      {"type":"h","text":"août 2023 5 min"},
      {"type":"p","text":"⏾"},
      {"type":"h","text":"# php # hébergement"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"h","text":"Qu’est-ce qu’un virtual"},
      {"type":"h","text":"host ?"},
      {"type":"p","text":"Un hébergement virtuel (de l’anglais « virtual host »,"},
      {"type":"p","text":"abrégé « vhost ») consiste à accueillir plus d’un nom de"},
      {"type":"h","text":"domaine sur le même serveur, tout en maintenant une"},
      {"type":"p","text":"gestion séparée de chacun de ces noms de domaine."},
      {"type":"h","text":"Cela permet de partager les ressources du serveur,"},
      {"type":"p","text":"comme la mémoire et le processeur, sans nécessiter que"},
      {"type":"p","text":"tous les services fournis utilisent le même nom d’hôte."},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p001.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"p","text":"Si vous cherchez à créer un virtual host avec WampServer,"},
      {"type":"p","text":"il y a des chances que notre\n ou aux bases"},
      {"type":"p","text":"formation à PHP"},
      {"type":"p","text":"de la"},
      {"type":"p","text":"conﬁguration d’un serveur Apache avec le ﬁchier"},
      {"type":"p","text":".htaccess"},
      {"type":"p","text":"vous intéresse."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-2-exemple-1","language":"apache","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Pourquoi créer des virtual hosts en local ?"},
      {"type":"p","text":"Créer un virtual host s’avère utile lors du développement"},
      {"type":"p","text":"d’une application web en local avec WampServer. Voici"},
      {"type":"p","text":"quelques-unes des raisons principales."},
      {"type":"h","text":"Gestion multi sites simpliﬁée"},
      {"type":"p","text":"Lorsque vous développez plusieurs sites web"},
      {"type":"p","text":"simultanément, l’utilisation de virtual hosts vous permet"},
      {"type":"h","text":"d’en faciliter leur gestion."},
      {"type":"p","text":"Chaque site peut avoir sa propre conﬁguration déﬁnie au"},
      {"type":"p","text":"sein d’un ﬁchier"},
      {"type":"p","text":"httpd-vhosts.conf  :"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p002.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"p","text":"Répertoire racine spéciﬁque"},
      {"type":"p","text":"Directives de sécurité"},
      {"type":"p","text":"Paramètres PHP"},
      {"type":"p","text":"Certiﬁcats SSL"},
      {"type":"p","text":"Journaux d’accès"},
      {"type":"p","text":"Etc."},
      {"type":"h","text":"URL plus propres"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"En utilisant des virtual hosts, vous pouvez conﬁgurer des"},
      {"type":"h","text":"noms d’hôtes / de domaines personnalisés pour vos"},
      {"type":"p","text":"projets locaux, ce qui rend les URL plus claires et plus"},
      {"type":"p","text":"faciles à utiliser lors du développement."},
      {"type":"p","text":"localhost/mes-sites/site1  pourrait par exemple être"},
      {"type":"p","text":"remplacé par site1.local ."},
      {"type":"h","text":"Migration facilitée"},
      {"type":"p","text":"Lorsque vous transférez vos projets d’un serveur local vers"},
      {"type":"p","text":"un serveur en ligne, la transition est plus ﬂuide, car vous"},
      {"type":"h","text":"pouvez utiliser les mêmes noms d’hôtes et structures de"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p003.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"h","text":"dossiers."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir"},
      {"type":"p","text":"chaque mois du contenu"},
      {"type":"p","text":"100% dev web ! #nospam"},
      {"type":"code","filename":"page-4-exemple-1","language":"apache","code":"KevCod3ur64@ma"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Créer un virtual host"},
      {"type":"p","text":"Garder une bonne organisation de vos projets en utilisant"},
      {"type":"p","text":"des virtual hosts facilite le développement et la gestion de"},
      {"type":"p","text":"vos sites web locaux."},
      {"type":"p","text":"Il est possible de créer des virtual hosts à la main"},
      {"type":"p","text":"(recommandé dans un premier temps pour limiter l’effet «"},
      {"type":"code","filename":"page-4-exemple-2","language":"apache","code":"magique ») ou via l’interface de Wamp Server."},
      {"type":"h","text":"Via le code"},
      {"type":"p","text":"Pour créer un virtual host sur WampServer, suivez ces 4"},
      {"type":"p","text":"étapes :"},
      {"type":"h","text":"1. Activer les vhosts dans la"},
      {"type":"h","text":"conﬁguration d’Apache"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p004.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"1. Cliquez sur l’icône WampServer de la barre des tâches"},
      {"type":"p","text":"(assurez-vous que WampServer est en cours"},
      {"type":"p","text":"d’exécution) et sélectionnez Apache  ->"},
      {"type":"p","text":"httpd.conf . Cela ouvrira le ﬁchier de conﬁguration"},
      {"type":"p","text":"d’Apache dans votre éditeur de texte par défaut."},
      {"type":"p","text":"2. Recherchez la ligne suivante dans le ﬁchier"},
      {"type":"p","text":"httpd.conf  :"},
      {"type":"p","text":"httpd.conf"},
      {"type":"p","text":"Include conf/extra/httpd-vhosts.conf"},
      {"type":"p","text":"Enlevez l’éventuel #  devant cette ligne aﬁn de"},
      {"type":"p","text":"l’activer ( #  est le symbole utilisé pour commenter une"},
      {"type":"p","text":"ligne de conﬁguration). Cela permettra d’inclure le"},
      {"type":"p","text":"ﬁchier de conﬁguration des hôtes virtuels"},
      {"type":"p","text":"httpd-"},
      {"type":"p","text":"vhosts.conf ."},
      {"type":"p","text":"3. Sauvegardez le ﬁchier"},
      {"type":"p","text":"httpd.conf  et fermez-le."},
      {"type":"h","text":"2. Modiﬁer la conﬁguration des"},
      {"type":"h","text":"hôtes virtuels"},
      {"type":"p","text":"1. Cliquez sur l’icône WampServer de la barre des tâches"},
      {"type":"p","text":"et sélectionnez Apache  ->"},
      {"type":"p","text":"httpd-vhosts.conf ."},
      {"type":"p","text":"Cela ouvrira le ﬁchier de conﬁguration des hôtes"},
      {"type":"p","text":"virtuels dans votre éditeur de texte par défaut."},
      {"type":"p","text":"2. Ajoutez les informations relatives au virtual host à"},
      {"type":"p","text":"créer. Voici un exemple de conﬁguration pour un hôte"},
      {"type":"p","text":"virtuel. Vous pouvez l’éditer selon vos besoins :"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p005.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"p","text":"httpd-vhosts.conf\ncopier"},
      {"type":"code","filename":"page-6-exemple-1","language":"apache","code":"<VirtualHost *:80>"},
      {"type":"p","text":"ServerName demo.local"},
      {"type":"p","text":"DocumentRoot \"c:/wamp64/www/lacons"},
      {"type":"code","filename":"page-6-exemple-2","language":"apache","code":"<Directory \"c:/wamp64/www/laconsol"},
      {"type":"p","text":"Options +Indexes +Includes +Fol"},
      {"type":"p","text":"AllowOverride All"},
      {"type":"p","text":"Require local"},
      {"type":"code","filename":"page-6-exemple-3","language":"apache","code":"</Directory>"},
      {"type":"code","filename":"page-6-exemple-4","language":"apache","code":"</VirtualHost>"},
      {"type":"p","text":"Veillez à bien remplacer :"},
      {"type":"p","text":"demo.local  par le nom d’hôte que vous"},
      {"type":"p","text":"souhaitez utiliser pour accéder à votre projet en"},
      {"type":"p","text":"local"},
      {"type":"p","text":"c:/wamp64/www/laconsole/demo/public  par"},
      {"type":"p","text":"le chemin absolu vers le dossier racine publique"},
      {"type":"p","text":"du projet"},
      {"type":"p","text":"3. Sauvegardez le ﬁchier"},
      {"type":"p","text":"httpd-vhosts.conf  et"},
      {"type":"p","text":"fermez-le."},
      {"type":"h","text":"3. Lier les noms d’hôtes"},
      {"type":"h","text":"personnalisés à l’adresse IP locale"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p006.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"h","text":"Formations gratuites"},
      {"type":"p","text":"Découvrir"},
      {"type":"p","text":"Formez-vous au dev web avec 20+"},
      {"type":"h","text":"formations 100% gratuites."},
      {"type":"p","text":"Si vous êtes sous Windows, il est important de lier le nom"},
      {"type":"p","text":"d’hôte préalablement créé à l’adresse locale 127.0.0.1 ."},
      {"type":"p","text":"Formations\nFREE\nRessources\nBlog\nlaVeilleuse"},
      {"type":"p","text":"Pour cela, ajoutez l’entrée correspondante dans le ﬁchier"},
      {"type":"p","text":"hosts  de votre système."},
      {"type":"p","text":"SOMMAIRE"},
      {"type":"p","text":"1. Ouvrez le bloc-notes ou un éditeur de texte avec des"},
      {"type":"p","text":"Qu’est-ce qu’un virtual host ?"},
      {"type":"h","text":"privilèges d’administrateur."},
      {"type":"p","text":"Pourquoi créer des virtual hosts\nen local ?"},
      {"type":"p","text":"2. Ouvrez le ﬁchier"},
      {"type":"p","text":"hosts  situé à l’emplacement :"},
      {"type":"p","text":"Gestion multi sites simpliﬁée"},
      {"type":"p","text":"C:\\Windows\\System32\\drivers\\etc . Changez le"},
      {"type":"p","text":"URL plus propres"},
      {"type":"code","filename":"page-7-exemple-1","language":"apache","code":"type de ﬁchier en Tous les fichiers (.)  pour voir"},
      {"type":"p","text":"Migration facilitée"},
      {"type":"p","text":"le ﬁchier"},
      {"type":"p","text":"hosts  apparaître."},
      {"type":"p","text":"Créer un virtual host"},
      {"type":"p","text":"3. Ajoutez une nouvelle ligne à la ﬁn du ﬁchier avec"},
      {"type":"p","text":"Via le code"},
      {"type":"p","text":"l’adresse IP locale ( 127.0.0.1 ) et le nom d’hôte que"},
      {"type":"p","text":"1. Activer les vhosts dans la"},
      {"type":"p","text":"vous avez conﬁguré dans le ﬁchier"},
      {"type":"p","text":"httpd-"},
      {"type":"p","text":"conﬁguration d’Apache"},
      {"type":"p","text":"vhosts.conf . Par exemple :"},
      {"type":"p","text":"2. Modiﬁer la conﬁguration\ndes hôtes virtuels"},
      {"type":"p","text":"3. Lier les noms d’hôtes"},
      {"type":"p","text":"hosts\ncopier"},
      {"type":"p","text":"personnalisés à l’adresse IP\nlocale"},
      {"type":"p","text":"127.0.0.1 demo.local"},
      {"type":"p","text":"4. Redémarrage de\nWampServer"},
      {"type":"p","text":"4. Sauvegardez le ﬁchier"},
      {"type":"p","text":"hosts  et fermez-le."},
      {"type":"code","filename":"page-7-exemple-2","language":"apache","code":"Via l’interface de WampServer"},
      {"type":"h","text":"4. Redémarrage de WampServer"},
      {"type":"p","text":"Cliquez sur l’icône WampServer de la barre des tâches et"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p007.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"p","text":"sélectionnez Redémarrer les services . Une fois que"},
      {"type":"p","text":"WampServer a redémarré, votre virtual host devrait être"},
      {"type":"p","text":"accessible en utilisant le nom d’hôte que vous avez"},
      {"type":"p","text":"conﬁguré dans votre navigateur."},
      {"type":"code","filename":"page-8-exemple-1","language":"apache","code":"Via l’interface de WampServer"},
      {"type":"p","text":"Il est également possible de créer un virtual host"},
      {"type":"code","filename":"page-8-exemple-2","language":"apache","code":"directement depuis l’interface de WampServer. Voici"},
      {"type":"p","text":"comment procéder :"},
      {"type":"p","text":"1. Démarrer WampServer"},
      {"type":"p","text":"2. Cliquez sur l’icône WampServer dans la barre des"},
      {"type":"p","text":"tâches, puis cliquez sur Vos VirtualHosts  ->"},
      {"type":"p","text":"Gestion VirtualHost . Cela ouvrira la page de"},
      {"type":"p","text":"gestion des hôtes virtuels."},
      {"type":"p","text":"3. Créez un nouveau virtual host en remplissant les 2"},
      {"type":"p","text":"champs requis (apparaissant en rouge) :"},
      {"type":"p","text":"Nom d’hôte du virtual host : par exemple"},
      {"type":"p","text":"demo.local"},
      {"type":"h","text":"Chemin complet absolu du dossier (vers le"},
      {"type":"p","text":"répertoire racine de votre projet) : par exemple :"},
      {"type":"p","text":"c:/wamp64/www/laconsole/demo/public"},
      {"type":"p","text":"4. Cliquez ensuite sur Démarrer la création ou la"},
      {"type":"p","text":"modification du VirtualHost ."},
      {"type":"p","text":"5. Aﬁn que ce nouveau virtual host soit pris en compte"},
      {"type":"p","text":"par Wamp, effectuer un Redémarrage DNS en faisant"},
      {"type":"p","text":"un clic droit sur l’icône WampServer dans la barre des"},
      {"type":"p","text":"tâches : Outils  -> Redémarrage DNS ."},
      {"type":"p","text":"Une fois ces étapes terminées, votre virtual host sera"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p008.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"accessible en utilisant le nom d’hôte que vous avez spéciﬁé"},
      {"type":"p","text":"(par exemple, demo.local ) dans votre navigateur."},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"&"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à\nremodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le\ndev, des LEGO où les briques"},
      {"type":"p","text":"sont remplacées par des lignes\nde code. J'en fais mon métier\npuis je décide de transmettre"},
      {"type":"p","text":""},
      {"type":"p","text":"cette passion en école de dev et\nsur laConsole."},
      {"type":"h","text":"Lire aussi"},
      {"type":"p","text":"Transfert"},
      {"type":"p","text":"de"},
      {"type":"p","text":"Que"},
      {"type":"p","text":"Comprendre"},
      {"type":"p","text":"ﬁchiers"},
      {"type":"p","text":"signiﬁe"},
      {"type":"p","text":"les CDN en"},
      {"type":"p","text":"avec FTP"},
      {"type":"p","text":"l'Extension"},
      {"type":"p","text":"5 min"},
      {"type":"p","text":"(mise en"},
      {"type":"p","text":".io ?"},
      {"type":"p","text":"Chrono"},
      {"type":"p","text":"ligne sur"},
      {"type":"p","text":"le web)"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"culture web"},
      {"type":"p","text":"hébergement"},
      {"type":"p","text":"hébergement"},
      {"type":"p","text":"hébergement"},
      {"type":"p","text":"performance"},
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p009.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"p","text":"E-LEARNING"},
      {"type":"p","text":"COMMUNAUTÉ"},
      {"type":"p","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions\nlégales"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},
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
      {"type":"image","src":"images/laconsole-articles-2/creer-un-virtual-host-avec-wampserver-laconsole-p010.jpg","alt":"Page originale de Créer un Virtual Host avec WampServer - laConsole.pdf - page 10"},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleArticles5Configuration.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles5Configuration: SubSection[] = [{"id":"laconsole-lancer-live-server-sur-son-reseau-wifi-local","title":"Lancer Live Server sur son Réseau Wifi Local","blocks":[{"type":"note","variant":"info","title":"Source","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - 7 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"h","text":"Lancer Live Server sur"},{"type":"h","text":"son Réseau Wifi Local"},{"type":"p","text":"Explorons comment lancer l'extension VS Code Live Server"},{"type":"p","text":"sur son réseau Wifi local pour accéder à une application en"},{"type":"p","text":"développement depuis d'autres appareils."},{"type":"p","text":"⏾"},{"type":"p","text":"nov. 2024 3 min"},{"type":"p","text":"# # #"},{"type":"p","text":"programmation debug hébergement"},{"type":"p","text":"Inscription à la"},{"type":"p","text":"Fatigués de devoir tester uniquement votre projet de dev"},{"type":"p","text":"NEWSLETTER"},{"type":"p","text":"depuis votre PC ? Accédez-y facilement depuis n’importe"},{"type":"p","text":"quel appareil sur votre réseau Wifi local grâce à Live"},{"type":"p","text":"Server !"},{"type":"h","text":"Live Server : une"},{"type":"h","text":"extension VS Code"},{"type":"h","text":"incontournable"},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 1 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p001.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"p","text":"Live Server est une extension VS Code largement utilisée"},{"type":"p","text":"par les développeurs web pour lancer un serveur de"},{"type":"p","text":"développement local et afficher instantanément les"},{"type":"p","text":"modifications du code HTML , CSS et JavaScript dans le"},{"type":"p","text":"navigateur."},{"type":"code","filename":"page-2-exemple-1","language":"javascript","code":"localhost"},{"type":"p","text":"Par défaut, Live Server utilise l’adresse locale ,"},{"type":"p","text":"ce qui signifie que l’application est accessible uniquement"},{"type":"code","filename":"page-2-exemple-2","language":"javascript","code":"127.0.0.1"},{"type":"p","text":"depuis l’adresse IP , propre au PC qui"},{"type":"p","text":"l’héberge ."},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"Si cela s’avère suffisant dans la majorité des cas, il devient"},{"type":"p","text":"parfois utile de lancer Live Server sur son réseau Wifi"},{"type":"p","text":"local ."},{"type":"p","text":"C’est notamment le cas lorsque l’on souhaite tester une"},{"type":"p","text":"application en développement depuis d’autres appareils ,"},{"type":"p","text":"tel qu’un smartphone."},{"type":"p","text":"Je vous invite à découvrir ici mon top des"},{"type":"p","text":"#"},{"type":"p","text":"extensions VS Code incontournables."},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 2 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p002.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Tutoriel : exécuter Live"},{"type":"h","text":"Server sur son réseau"},{"type":"h","text":"Wifi"},{"type":"p","text":"Pour tester votre développement depuis un autre appareil,"},{"type":"p","text":"il faut configurer Live Server pour qu’il utilise l’adresse IP"},{"type":"p","text":"locale de votre PC sur le réseau Wifi local."},{"type":"p","text":"Cela permet à d’autres appareils sur le même réseau de se"},{"type":"p","text":"connecter au serveur et de voir les modifications en temps"},{"type":"p","text":"réel ."},{"type":"p","text":"Voici les étapes clés à suivre."},{"type":"h","text":"1. Installer Live Server"},{"type":"p","text":"Oui, il paraît que ça aide."},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 3 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p003.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 3"},{"type":"h","text":"Page 4"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"p","text":"Télécharger l’extension Live Server depuis le"},{"type":"p","text":""},{"type":"p","text":"moteur de recherche d’extension de VS Code."},{"type":"h","text":"2. Trouver son IP locale"},{"type":"p","text":"Ouvrez un terminal pour trouver votre IP locale."},{"type":"p","text":"Sous Windows, tapez la commande :"},{"type":"p","text":""},{"type":"p","text":"copier"},{"type":"code","filename":"page-4-exemple-3","language":"javascript","code":"ipconfig"},{"type":"code","filename":"page-4-exemple-4","language":"javascript","code":"IPv4"},{"type":"p","text":"Cherchez ensuite l’adresse sous votre connexion"},{"type":"p","text":"réseau."},{"type":"p","text":"Sous Mac/Linux, tapez la commande :"},{"type":"p","text":""},{"type":"p","text":"copier"},{"type":"code","filename":"page-4-exemple-5","language":"javascript","code":"ifconfig"},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"code","filename":"page-4-exemple-6","language":"javascript","code":"inet"},{"type":"p","text":"Cherchez l’adresse sous ."},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 4 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p004.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 4"},{"type":"h","text":"Page 5"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"h","text":"3. Configurer Live Server pour"},{"type":"p","text":"FREE"},{"type":"h","text":"écouter sur cette IP"},{"type":"p","text":""},{"type":"p","text":"SOMMAIRE"},{"type":"code","filename":"page-5-exemple-7","language":"javascript","code":"Ctrl ,"},{"type":"p","text":"1. Ouvrez les paramètres de VS Code ( + )."},{"type":"p","text":"Live Server : une extension VS"},{"type":"code","filename":"page-5-exemple-8","language":"javascript","code":"Live Server settings"},{"type":"p","text":"2. Cherchez dans la barre de"},{"type":"p","text":"Code incontournable"},{"type":"p","text":"recherche."},{"type":"p","text":"Tutoriel : exécuter Live Server"},{"type":"p","text":"sur son réseau Wifi"},{"type":"code","filename":"page-5-exemple-9","language":"javascript","code":"liveServer.settings.host"},{"type":"p","text":"3. Trouvez l’option et"},{"type":"p","text":"1. Installer Live Server"},{"type":"p","text":"définissez-la sur votre IP locale , trouvée à l’étape"},{"type":"p","text":"2. Trouver son IP locale"},{"type":"p","text":"précédente."},{"type":"p","text":"3. Configurer Live Server pour"},{"type":"p","text":"écouter sur cette IP"},{"type":"p","text":""},{"type":"p","text":"4. Lancer Live Server"},{"type":"p","text":"settings.json"},{"type":"p","text":"5. Accédez à l’app"},{"type":"code","filename":"page-5-exemple-10","language":"javascript","code":"{"},{"type":"code","filename":"page-5-exemple-11","language":"javascript","code":"// Mes options..."},{"type":"code","filename":"page-5-exemple-12","language":"javascript","code":"\"liveServer.settings.host\": \"192.168.x.x\""},{"type":"code","filename":"page-5-exemple-13","language":"javascript","code":"}"},{"type":"h","text":"4. Lancer Live Server"},{"type":"p","text":"Lancez Live Server classiquement avec un clic droit sur le"},{"type":"code","filename":"page-5-exemple-14","language":"javascript","code":"index.html"},{"type":"p","text":"fichier ou celui que vous souhaitez ouvrir,"},{"type":"code","filename":"page-5-exemple-15","language":"javascript","code":"Open with Live Server"},{"type":"p","text":"puis ."},{"type":"p","text":"Le serveur démarrera et l’URL ressemblera à"},{"type":"code","filename":"page-5-exemple-16","language":"javascript","code":"http://192.168.x.x:5500 5500"},{"type":"p","text":"(ou un autre port que ,"},{"type":"p","text":"si configuré différemment)."},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 5 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p005.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 5"},{"type":"h","text":"Page 6"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"h","text":"5. Accédez à l’app"},{"type":"p","text":"Assurez-vous que votre autre appareil, tel que votre"},{"type":"p","text":"téléphone mobile, est connecté au même réseau Wifi ,"},{"type":"p","text":"ouvrez un navigateur et entrez l’URL de votre IP locale"},{"type":"code","filename":"page-6-exemple-17","language":"javascript","code":"http://192.168.x.x:5500"},{"type":"p","text":"( )."},{"type":"p","text":"Votre mobile devrait maintenant pouvoir accéder à la"},{"type":"p","text":"version en développement de votre site via Live Server sur"},{"type":"p","text":"votre réseau local !"},{"type":"p","text":"Avec cette configuration, Live Server devient encore plus"},{"type":"p","text":"puissant en vous permettant de tester vos applications"},{"type":"p","text":"web sur différents appareils connectés au même réseau"},{"type":"p","text":"Wifi."},{"type":"p","text":"Thibaud d'Arros"},{"type":"p","text":"Fondateur Développeur"},{"type":"p","text":"● ●"},{"type":"p","text":"Formateur"},{"type":"p","text":"●"},{"type":"p","text":"("},{"type":"p","text":"L"},{"type":"p","text":"Enfant, je passais des heures à"},{"type":"p","text":"'"},{"type":"p","text":"A"},{"type":"p","text":"U"},{"type":"p","text":"remodeler le monde avec des"},{"type":"p","text":"@"},{"type":"p","text":"T"},{"type":"p","text":"LEGO. Plus tard, je découvre le"},{"type":"p","text":"E"},{"type":"p","text":"U"},{"type":"p","text":"dev, des LEGO où les briques"},{"type":"p","text":"R"},{"type":"p","text":"sont remplacées par des lignes"},{"type":"p","text":""},{"type":"p","text":"de code. J'en fais mon métier"},{"type":"p","text":"puis je décide de transmettre"},{"type":"p","text":"cette passion en école de dev et"},{"type":"p","text":"sur laConsole."},{"type":"h","text":"Lire aussi"},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 6 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p006.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 6"},{"type":"h","text":"Page 7"},{"type":"p","text":"Lancer Live Server sur son Réseau Wifi Local - laConsole 02/03/2025 11 : 02"},{"type":"p","text":"Clean Code Différences 10+"},{"type":"p","text":": Ecrire du entre Let, Principaux"},{"type":"p","text":"Code Lisible Var et Codes de"},{"type":"p","text":"et Const en Réponse"},{"type":"p","text":"Maintenable JavaScript HTTP"},{"type":"p","text":"programmation js api debug"},{"type":"p","text":"debug programmation programmation"},{"type":"p","text":"E-LEARNING COMMUNAUTÉ LÉGAL"},{"type":"p","text":"Formations Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},{"type":"p","text":"légales"},{"type":"p","text":"Cheatsheets A propos"},{"type":"p","text":"développement web."},{"type":"p","text":"Politique de"},{"type":"p","text":"Blog Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Faire ma veille"},{"type":"p","text":"status : 200 laConsole © 2025"},{"type":"p","text":"https://laconsole.dev/blog/lancer-live-server-reseau-wifi-local Page 7 sur 7"},{"type":"image","src":"images/laconsole-articles-5/lancer-live-server-sur-son-reseau-wifi-local-laconsole-p007.jpg","alt":"Page originale de Lancer Live Server sur son Réseau Wifi Local - laConsole.pdf - page 7"}]}];

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
