import type { Section } from "../types";

export const liens: Section = {
  id: "liens",
  title: "Liens & Ressources",
  icon: "Link",
  tags: ["js"],
  subsections: [
    {
      id: "liens-vue-ensemble",
      title: "Vue d'ensemble des catégories",
      blocks: [
        { type: "p", text: "Toutes les ressources classées par catégorie, optimisées pour Notion mobile." },
        {
          type: "diagram",
          content: `LIENS
├── 🐍 Langages & Environnements
│   ├── Python / PyCharm
│   ├── Node JS
│   ├── React JS / React Router / Next JS
│   ├── Angular
│   ├── Symfony / Composer
│   └── ECMAScript / Standard JS / JS Doc
├── 🌐 Web & Standards
│   ├── W3C / MDN / Mozilla
│   ├── HTML / CSS / GRID / Flexbox
│   ├── Méta (Open Graph / Facebook / Twitter)
│   └── DOM
├── 🎨 Design & UI/UX
│   ├── Outils de design (Figma, Adobe XD, Excalidraw...)
│   ├── Polices & Typographie
│   ├── Couleurs & Palettes
│   └── Icônes & Images
├── 🖥️ Serveurs & Hébergement
│   ├── Hébergeurs (OVH, GoDaddy, O2Switch...)
│   ├── Cloud & DNS
│   └── Environnements locaux (WAMP, MAMP, XAMPP...)
├── 🗄️ Base de données
│   └── MySQL / SQL
├── 🔒 Sécurité
│   ├── ANSSI / CNIL / CERT_FR / OWASP
│   └── Gestionnaires de mots de passe
├── 📦 Frameworks CSS
│   ├── Bootstrap / Foundation / Materialize
│   ├── Knacss / Pure CSS / Sass / Less
│   └── Eric Meyer CSS
├── 🔁 Versioning
│   └── Git / GitHub / GitLab / Bitbucket
├── 🚀 SEO & Performance
│   ├── Google Analytics / PageSpeed
│   ├── Schema.org / Oncrawl
│   └── Outils SEO
├── 📝 Rédaction & Contenus
│   ├── Cahier des charges
│   └── Rédaction web
├── 🧰 Outils divers
│   ├── FTP / Transfert
│   ├── API / Postman
│   └── WordPress / Prestashop
└── 📚 Blogs & Documentation`,
        },
      ],
    },
    {
      id: "liens-langages-environnements",
      title: "Langages & Environnements",
      blocks: [
        { type: "h", text: "Python" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Téléchargement Python", "https://www.python.org/downloads/"],
          ["PyCharm (IDE)", "https://www.jetbrains.com/fr-fr/pycharm/download/"],
        ]},
        { type: "h", text: "JavaScript & Node" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Node JS", "https://nodejs.org/fr"],
          ["Standard JS", "https://standardjs.com/readme-fr.html"],
          ["ECMAScript (spec)", "https://262.ecma-international.org"],
          ["JS Doc", "https://jsdoc.app"],
        ]},
        { type: "h", text: "React & Écosystème" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["React JS (officiel)", "https://react.dev"],
          ["React Doc (legacy)", "https://legacy.reactjs.org"],
          ["React Router", "https://reactrouter.com/home"],
          ["Next JS", "https://nextjs.org"],
        ]},
        { type: "h", text: "Angular" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Angular (officiel)", "https://angular.dev"],
          ["Guide Angular", "https://guide-angular.wishtack.io"],
        ]},
        { type: "h", text: "PHP & Backend" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Symfony", "https://symfony.com"],
          ["Composer", "https://getcomposer.org/download/"],
          ["Prestashop", "https://docs.prestashop-project.org/welcome"],
        ]},
      ],
    },
    {
      id: "liens-web-standards",
      title: "Web & Standards",
      blocks: [
        { type: "h", text: "Références officielles" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["W3C (normes & notes)", "https://www.w3.org/TR"],
          ["W3C web mobile", "https://www.w3.org/TR/?title=mobile"],
          ["MDN Mozilla", "https://developer.mozilla.org/fr/"],
          ["DOM (spec)", "https://dom.spec.whatwg.org"],
          ["Format date et heure W3C", "https://www.w3.org/TR/NOTE-datetime"],
          ["Alignement GRID (CSS)", "https://www.w3.org/TR/CSS-align-3"],
        ]},
        { type: "h", text: "Validation & Outils" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Valider le code HTML", "https://validator.w3.org"],
        ]},
        { type: "h", text: "Méta & Réseaux sociaux" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Méta Open Graph", "https://ogp.me/"],
          ["Méta Facebook", "https://developers.facebook.com/docs/sharing/webmasters?locale=frFR#testing"],
          ["Meta Twitter/X", "https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup"],
        ]},
        { type: "h", text: "Pages Web" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Page statique (Wikipédia)", "https://fr.wikipedia.org/wiki/Page_web_statique"],
          ["Page dynamique (Wikipédia)", "https://fr.wikipedia.org/wiki/Page_web_dynamique"],
          ["Couches protocoles", "https://fr.wikipedia.org/wiki/Protocole_réseau"],
          ["Protocoles client-serveur", "https://fr.wikipedia.org/wiki/Client-serveur"],
        ]},
        {
          type: "diagram",
          content: `ARCHITECTURE CLIENT-SERVEUR
┌──────────────┐        Requête HTTP        ┌──────────────┐
│              │ ─────────────────────────► │              │
│   CLIENT     │                            │   SERVEUR    │
│  (Navigateur)│ ◄───────────────────────── │  (Apache...) │
│              │        Réponse HTML        │              │
└──────────────┘                            └──────────────┘

Page STATIQUE :  Client ──► Serveur ──► Fichier HTML fixe ──► Client
Page DYNAMIQUE : Client ──► Serveur ──► Script (PHP/JS) ──► BDD ──► HTML généré ──► Client`,
        },
      ],
    },
    {
      id: "liens-design-uiux",
      title: "Design & UI/UX",
      blocks: [
        { type: "h", text: "Outils de conception" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Figma", "https://www.figma.com/fr-fr/"],
          ["Adobe XD", "https://www.adobe.com"],
          ["Excalidraw", "https://excalidraw.com"],
          ["Justinmind", "https://www.justinmind.com"],
          ["Créer un diagramme", "https://app.diagrams.net/"],
          ["Design Google (Material)", "https://material.io/"],
          ["Spectrum Adobe", "https://spectrum.adobe.com"],
        ]},
        { type: "h", text: "UX / UI" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Blog UX/UI (différences)", "https://blog-ux.com/quelle-difference-ente-ux-design-et-ui-design/"],
        ]},
        {
          type: "diagram",
          content: `UX vs UI
┌─────────────────────────────────────────┐
│              EXPÉRIENCE GLOBALE         │
│  ┌──────────────────┐  ┌─────────────┐  │
│  │    UX DESIGN     │  │  UI DESIGN  │  │
│  │  (Expérience     │  │ (Interface  │  │
│  │  Utilisateur)    │  │  Visuelle)  │  │
│  │                  │  │             │  │
│  │ - Parcours       │  │ - Couleurs  │  │
│  │ - Architecture   │  │ - Typo      │  │
│  │ - Accessibilité  │  │ - Boutons   │  │
│  │ - Tests users    │  │ - Icônes    │  │
│  └──────────────────┘  └─────────────┘  │
└─────────────────────────────────────────┘`,
        },
        { type: "h", text: "Polices & Typographie" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Dafont", "https://www.dafont.com/fr/"],
          ["Google Fonts", "https://fonts.google.com"],
          ["Convertir police", "https://convertio.co/fr/"],
          ["Générateur police (harmonie)", "https://fontjoy.com/"],
        ]},
        { type: "h", text: "Couleurs & Palettes" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Coolors", "https://coolors.co"],
          ["Adobe Color", "https://color.adobe.com/fr/"],
          ["Adobe Color (créer)", "https://color.adobe.com/fr/create"],
          ["Colormind", "https://colormind.io/"],
          ["Paletton", "https://paletton.com/"],
          ["Couleur d'une image", "https://imagecolorpicker.com/fr"],
        ]},
        { type: "h", text: "Icônes & Images" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Font Awesome (icônes)", "https://fontawesome.com/"],
          ["The Noun Project (icônes)", "https://thenounproject.com/"],
          ["Freepik (icônes/images)", "https://fr.freepik.com/"],
          ["Pexels (images libres)", "https://www.pexels.com/fr-fr/"],
          ["Unsplash (images libres)", "https://unsplash.com/"],
          ["Visual Hunt (images libres)", "https://visualhunt.com/"],
        ]},
        { type: "h", text: "Retouche image" },
        { type: "table", headers: ["Ressource", "URL"], rows: [["GIMP", "https://www.gimp.org"]] },
        { type: "h", text: "Accessibilité web" },
        { type: "table", headers: ["Ressource", "URL"], rows: [["WAVE WebAIM", "https://wave.webaim.org"]] },
        { type: "h", text: "Contenus fictifs" },
        { type: "table", headers: ["Ressource", "URL"], rows: [["Faux texte (Lorem Ipsum)", "https://fr.lipsum.com"]] },
      ],
    },
    {
      id: "liens-serveurs-hebergement",
      title: "Serveurs & Hébergement",
      blocks: [
        { type: "h", text: "Hébergeurs" },
        { type: "table", headers: ["Hébergeur", "URL"], rows: [
          ["GoDaddy", "https://www.godaddy.com/fr-fr"],
          ["OVH", "https://www.ovhcloud.com/fr/"],
          ["O2Switch", "https://www.o2switch.fr/"],
          ["Always Data", "https://www.alwaysdata.com/fr/"],
          ["IONOS (guide)", "https://www.ionos.fr/digitalguide/"],
          ["Comparatif hébergeurs", "https://www.presse-citron.net/hebergeur/"],
        ]},
        { type: "h", text: "Cloud" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Types de Cloud (Wikipédia)", "https://fr.wikipedia.org/wiki/Cloud-computing"],
        ]},
        {
          type: "diagram",
          content: `TYPES DE CLOUD
┌─────────────────────────────────────────────────┐
│  IaaS          PaaS           SaaS              │
│  (Infrastructure) (Plateforme) (Logiciel)       │
│                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │  VMs    │  │ Heroku  │  │ G Suite │         │
│  │  AWS    │  │ Firebase│  │Salesforce│        │
│  │  Azure  │  │Vercel   │  │  Slack  │         │
│  └─────────┘  └─────────┘  └─────────┘         │
│  Tu gères OS  Tu gères app  Tu utilises         │
└─────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "DNS & Réseau" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["DNS Checker", "https://dnschecker.org/all-tools.php"],
          ["Savoir mon IP", "https://whatismyipaddress.com/"],
          ["Adresse IP d'un site", "https://www.mon.ip.co/ip-site-web"],
          ["Serveurs DNS en France", "https://public-dns.info/nameserver/fr.html"],
          ["Cloudflare", "https://www.cloudflare.com/fr-fr/"],
        ]},
        { type: "h", text: "Superviser un serveur" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Paessler (explication)", "https://www.paessler.com/fr/it-explained/server"],
          ["Web Scale", "https://www.webscale.com"],
        ]},
        { type: "h", text: "Environnements locaux (dev)" },
        { type: "table", headers: ["Outil", "Système", "URL"], rows: [
          ["WAMP", "Windows", "https://wampserver.aviatechno.net/?lang=fr"],
          ["MAMP", "Mac", "https://www.mamp.info/en/mac/"],
          ["XAMPP", "Multi", "https://www.apachefriends.org/fr/index.html"],
          ["Local (WordPress)", "Multi", "https://localwp.com/"],
          ["Homebrew", "Mac", "https://brews.sh"],
        ]},
        {
          type: "diagram",
          content: `PILE LOCALE TYPE
┌─────────────────────────────────┐
│         WAMP / MAMP / XAMPP     │
│  ┌──────┐  ┌──────┐  ┌──────┐  │
│  │Apache│  │ MySQL│  │ PHP  │  │
│  │(HTTP)│  │ (BDD)│  │(Back)│  │
│  └──────┘  └──────┘  └──────┘  │
│         localhost:80            │
└─────────────────────────────────┘`,
        },
        { type: "h", text: "FTP / Transfert de fichiers" },
        { type: "table", headers: ["Outil", "URL"], rows: [
          ["FileZilla", "https://filezilla-project.org/"],
          ["WinSCP", "https://winscp.net/eng/index.php"],
          ["Cyberduck", "https://cyberduck.io/"],
        ]},
      ],
    },
    {
      id: "liens-base-donnees",
      title: "Base de données",
      blocks: [
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["MySQL (officiel)", "https://www.mysql.com"],
          ["MySQL (téléchargement)", "https://dev.mysql.com/downloads/"],
          ["SQL.sh (tutoriels FR)", "https://sql.sh"],
        ]},
      ],
    },
    {
      id: "liens-securite",
      title: "Sécurité",
      blocks: [
        { type: "h", text: "Organismes officiels" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["ANSSI", "https://cyber.gouv.fr"],
          ["CNIL (sécurité sites web)", "https://www.cnil.fr/fr/securite-securiser-les-sites-web"],
          ["CERT_FR", "https://www.cert.ssi.gouv.fr/"],
          ["OWASP", "https://owasp.org/"],
          ["Sécurité Harvard", "https://privsec.harvard.edu/protect-identity"],
        ]},
        { type: "h", text: "Gestionnaires de mots de passe" },
        { type: "table", headers: ["Outil", "URL"], rows: [
          ["LastPass", "https://www.lastpass.com/fr"],
          ["1Password", "https://1password.com/fr"],
          ["Dashlane", "https://www.dashlane.com/fr"],
        ]},
      ],
    },
    {
      id: "liens-frameworks-css",
      title: "Frameworks CSS",
      blocks: [
        { type: "table", headers: ["Framework", "Description", "URL"], rows: [
          ["Bootstrap", "Framework CSS populaire", "https://getbootstrap.com"],
          ["Foundation", "Framework CSS avancé", "https://get.foundation"],
          ["Materialize", "Basé sur Material Design (Google)", "https://materializecss.com/"],
          ["Knacss", "Framework CSS FR léger", "https://www.knacss.com"],
          ["Pure CSS", "Minimaliste (Yahoo)", "https://purecss.github.io"],
          ["Sass", "Préprocesseur CSS", "https://sass-lang.com"],
          ["Less", "Préprocesseur CSS", "https://lesscss.org"],
          ["Eric Meyer CSS", "Reset CSS de référence", "https://meyerweb.com"],
        ]},
        {
          type: "diagram",
          content: `HIÉRARCHIE PRÉPROCESSEURS CSS
┌─────────────────────────────┐
│   Fichier .scss / .less     │
│   (variables, mixins...)    │
└──────────────┬──────────────┘
               │ Compilation
               ▼
┌─────────────────────────────┐
│   Fichier .css standard     │
│   (lu par le navigateur)    │
└─────────────────────────────┘`,
        },
      ],
    },
    {
      id: "liens-versioning",
      title: "Versioning & Collaboration",
      blocks: [
        { type: "table", headers: ["Outil", "URL"], rows: [
          ["Git (officiel)", "https://git-scm.com"],
          ["Git (documentation)", "https://git-scm.com/docs"],
          ["GitHub", "https://github.com"],
          ["GitLab", "https://about.gitlab.com/"],
          ["Bitbucket", "https://bitbucket.org/"],
        ]},
        {
          type: "diagram",
          content: `FLUX GIT STANDARD
┌──────────┐    git add     ┌──────────┐   git commit   ┌──────────┐
│ Working  │ ─────────────► │ Staging  │ ──────────────► │  Local   │
│ Directory│                │  Area    │                 │   Repo   │
└──────────┘                └──────────┘                 └────┬─────┘
                                                              │ git push
                                                              ▼
                                                         ┌──────────┐
                                                         │  Remote  │
                                                         │  (GitHub)│
                                                         └──────────┘`,
        },
      ],
    },
    {
      id: "liens-seo-performance",
      title: "SEO & Performance",
      blocks: [
        { type: "h", text: "Performance" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["PageSpeed Insights", "https://pagespeed.web.dev/"],
          ["Doc PageSpeed (Google)", "https://developers.google.com/speed/docs/insights/v5/about?hl=fr"],
        ]},
        { type: "h", text: "SEO & Analytics" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Google Analytics", "https://analytics.google.com/analytics/web/provision/?hl=fr#/provision"],
          ["Doc Google Search", "https://developers.google.com/search?hl=fr"],
          ["Web Rank Info", "https://www.webrankinfo.com"],
          ["Outils SEO", "https://www.seo.fr/outils-seo"],
          ["Schema.org", "https://schema.org"],
          ["Oncrawl", "https://fr.oncrawl.com"],
        ]},
      ],
    },
    {
      id: "liens-outils-divers",
      title: "Outils Divers",
      blocks: [
        { type: "h", text: "API & Tests" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Postman", "https://www.postman.com/"],
          ["APIs gratuites (sans clé)", "https://apipheny.io/free-api/#apis-without.key"],
        ]},
        { type: "h", text: "WordPress & CMS" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["WordPress (FR)", "https://fr.wordpress.org/"],
          ["WPML (multilingue)", "https://wpml.org/fr/"],
        ]},
        { type: "h", text: "Cahier des charges" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Modèles CDC", "https://cahiersdescharges.com"],
          ["Rédiger un CDC", "https://www.anthedesign.fr/creation-de-sites-internet/cahier-des-charges-site-internet/"],
        ]},
        { type: "h", text: "Jeux / Pratique" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Flexbox Froggy (jeu FR)", "https://flexboxfroggy.com/#fr"],
        ]},
        { type: "h", text: "Logiciel libre & Open Source" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["FSF (Free Software Foundation)", "https://www.fsf.org"],
          ["OSD (Open Source Definition)", "https://opensource.org/osd"],
        ]},
        { type: "h", text: "Noms de domaine & Juridique" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Répertoire sociétés", "https://www.societe.com/"],
          ["Répertoire Noms de domaine (WHOIS)", "https://who.is/"],
          ["BDD des marques (INPI)", "https://www.inpi.fr/base-marques"],
        ]},
        { type: "h", text: "Référence" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Table ASCII (Wikipédia)", "https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange"],
        ]},
      ],
    },
    {
      id: "liens-blogs-documentation",
      title: "Blogs & Documentation",
      blocks: [
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Alsacréations (HTML/CSS)", "http://www.alsacreations.com/"],
          ["CSS-Tricks", "https://css-tricks.com/"],
          ["SlideShare (infos)", "https://fr.slideshare.net"],
          ["Raidboxes Blog", "https://blog.raidboxes.io"],
          ["Delfstack (FR)", "https://www.delfstack.com/fr/"],
          ["Codecraft.tv", "https://codecraft.tv"],
          ["Stackoverflow (Q&A)", "https://stackoverflow.com/question"],
          ["Malekal (blog info)", "https://www.malekal.com"],
          ["Absolut Web", "https://www.absoluteweb.net"],
          ["Tutorials Teacher", "https://tutorialsteacher.com"],
          ["La Console Dev", "https://laconsole.dev/"],
        ]},
        { type: "h", text: "Rédaction Web" },
        { type: "table", headers: ["Ressource", "URL"], rows: [
          ["Types de contenus web", "https://skribix.com/blog/quels-sont-les-differents-types-de-contenus-en-redaction-web/"],
        ]},
      ],
    },
    {
      id: "liens-recap",
      title: "Tableau récapitulatif — Catégories & Nb de ressources",
      blocks: [
        { type: "table", headers: ["Catégorie", "Nb liens"], rows: [
          ["Langages & Environnements", "13"],
          ["Web & Standards", "11"],
          ["Design & UI/UX", "18"],
          ["Serveurs & Hébergement", "16"],
          ["Base de données", "3"],
          ["Sécurité", "8"],
          ["Frameworks CSS", "8"],
          ["Versioning", "5"],
          ["SEO & Performance", "8"],
          ["Outils divers", "11"],
          ["Blogs & Documentation", "12"],
          ["TOTAL", "~113"],
        ]},
      ],
    },
  ],
};
