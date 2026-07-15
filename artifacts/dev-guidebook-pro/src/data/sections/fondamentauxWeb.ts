import type { Section } from "../types";

export const fondamentauxWeb: Section = {
  id: "fondamentaux-web",
  title: "Fondamentaux du Web",
  icon: "Globe",
  tags: ["html", "php"],
  subsections: [
    {
      id: "fw-fonctionnement-site",
      title: "Fonctionnement d'un site web",
      blocks: [
        { type: "h", text: "Site web statique" },
        { type: "p", text: "Développé avec les langages HTML et CSS côté machine client." },
        { type: "list", items: [
          "La mise à jour de son contenu n'est pas automatisée.",
          "Le serveur contient les fichiers HTML et CSS et les envoie tels quels aux clients.",
          "Les fichiers sont interprétés par le navigateur.",
        ]},
        { type: "h", text: "Site web dynamique" },
        { type: "p", text: "Permet à l'utilisateur d'interagir avec le site via des langages interprétés par les serveurs comme PHP et MySQL." },
        { type: "list", items: ["Le code PHP peut être mélangé avec du code HTML, à condition que le fichier soit en extension .php."] },
      ],
    },
    {
      id: "fw-fonctionnement-php",
      title: "Fonctionnement du PHP",
      blocks: [
        { type: "p", text: "En web, l'exécution du code PHP se fait ainsi :" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              CYCLE D'EXÉCUTION PHP                          │
│                                                             │
│  1. Visiteur ──[requête HTTP]──► Serveur HTTP               │
│                                                             │
│  2. Serveur ──► Interpréteur PHP                            │
│                    │                                        │
│                    ▼                                        │
│              Génère HTML + CSS + JS                         │
│                                                             │
│  3. Serveur ──[réponse HTTP]──► Client                      │
│                                                             │
│  4. Page générée à la demande = site dynamique              │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "1. Un visiteur demande à consulter une page Web : son navigateur envoie une requête au serveur HTTP.",
          "2. Le serveur reçoit la requête et utilise l'interpréteur PHP qui génère une réponse généralement constituée d'HTML, CSS et JS.",
          "3. Le code généré par le serveur est finalement envoyé au client sous forme de réponse.",
          "4. La page étant générée à la demande, les sites web PHP sont dits dynamiques.",
        ]},
        { type: "h", text: "Structure d'un site PHP" },
        { type: "list", items: [
          "Un site en PHP est un répertoire contenant des fichiers d'extension .php accessibles par un navigateur via une requête.",
          "Cette requête prend la forme d'une URL.",
        ]},
      ],
    },
    {
      id: "fw-url",
      title: "URL",
      blocks: [
        { type: "list", items: [
          "Une URL est une information permettant de localiser un élément.",
          "L'adresse d'un site Internet est une URL.",
          "Les URL permettent aussi de passer des paramètres au serveur.",
        ]},
      ],
    },
    {
      id: "fw-services-internet",
      title: "Principaux services Internet",
      blocks: [
        { type: "list", items: ["Web", "FTP", "Messagerie", "Groupes de discussion"] },
      ],
    },
    {
      id: "fw-etapes-w3c",
      title: "Étapes W3C",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│         CYCLE DE STANDARDISATION W3C     │
│                                          │
│  1. Working Draft                        │
│       │                                  │
│       ▼                                  │
│  2. Candidate Recommendation             │
│       │                                  │
│       ▼                                  │
│  3. Proposed Recommendation              │
│       │                                  │
│       ▼                                  │
│  4. W3C Recommendation ✅                │
└──────────────────────────────────────────┘`,
        },
        { type: "list", items: ["1. Working Draft", "2. Candidate Recommendation", "3. Proposed Recommendation", "4. W3C Recommendation"] },
      ],
    },
    {
      id: "fw-erreurs-organismes",
      title: "Erreurs et organismes de normalisation",
      blocks: [
        { type: "h", text: "Validation W3C" },
        { type: "list", items: [
          "🔴 Rouge : Erreur bloquante, à corriger",
          "🟡 Jaune : Avertissement, recommandé de corriger",
          "🟢 Vert : Information utile",
        ]},
        { type: "h", text: "Principaux organismes de normalisation" },
        { type: "table", headers: ["Organisme", "Domaine"], rows: [
          ["W3C", "HTML, CSS, ARIA"],
          ["WHATWG", "HTML moderne (HTML5+)"],
          ["IETF", "Protocoles Internet"],
          ["ECMA", "Standardisation JavaScript"],
          ["ISO / IEC", "Normes globales de l'informatique"],
          ["IEEE", "Normes réseau et matériel"],
          ["ISO (ASIS O dans les notes)", "Normes structurées et entreprise"],
          ["ITU", "Normes télécoms et médias"],
        ]},
      ],
    },
    {
      id: "fw-modele-client-serveur",
      title: "Modèle client / serveur",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│               MODÈLE CLIENT / SERVEUR                    │
│                                                          │
│   CLIENT                          SERVEUR                │
│  ┌────────────┐                ┌──────────────────────┐  │
│  │ Navigateur │──[Requête HTTP]►│ Serveur d'appli Web  │  │
│  │            │                │  (traite les données)│  │
│  │            │◄[Réponse HTTP]─│         │            │  │
│  └────────────┘                │         ▼            │  │
│                                │  ┌─────────────┐     │  │
│  Interactions :                │  │    SGBD     │     │  │
│  - clic bouton                 │  │ (cohérence  │     │  │
│  - envoi formulaire            │  │  et accès)  │     │  │
│  - échange de données          │  └──────┬──────┘     │  │
│                                │         │            │  │
│  → transformées en             │         ▼            │  │
│    requêtes HTTP               │  ┌─────────────┐     │  │
│                                │  │     BDD     │     │  │
│                                │  └─────────────┘     │  │
│                                └──────────────────────┘  │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: ["Client → Requête HTTP → Serveur", "Serveur → Réponse HTTP → Client"] },
        { type: "h", text: "Côté serveur" },
        { type: "list", items: [
          "Serveur d'application Web (traite les données et communique avec le SGBD)",
          "SGBD (assure la cohérence et l'accès aux données)",
          "Base de données (BDD)",
        ]},
        { type: "h", text: "Côté client" },
        { type: "list", items: [
          "Contient les navigateurs Web",
          "Gère les interactions utilisateur : clic sur bouton, envoi de formulaire",
          "Transforme les actions en requêtes HTTP",
          "Échange de données",
        ]},
      ],
    },
    {
      id: "fw-protocole-ftp",
      title: "Protocole FTP",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────┐
│                 PROTOCOLE FTP                    │
│                                                  │
│  CLIENT ──[upload / téléverser]──► SERVEUR       │
│  CLIENT ◄──[download / télécharger]── SERVEUR    │
│                                                  │
│  ⚠ Le serveur n'accepte ni envoi ni réception    │
│     sans requête FTP du client                   │
└──────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Permet de télécharger un fichier depuis un serveur.",
          "Permet de téléverser un fichier vers un serveur depuis une machine cliente.",
          "Un serveur n'accepte ni envoi ni réception sans requête FTP du client.",
        ]},
      ],
    },
    {
      id: "fw-hebergement-donnees",
      title: "Hébergement des données",
      blocks: [
        { type: "h", text: "Côté client" },
        { type: "list", items: [
          "Client léger (navigateur) qui interprète les réponses des serveurs.",
          "Mémoires dédiées : cache, LocalStorage, cookies.",
          "Exemples : fichiers téléchargés, e-mails sauvegardés.",
        ]},
        { type: "h", text: "Côté serveur" },
        { type: "list", items: [
          "Fichiers de l'application",
          "Données nécessaires au fonctionnement",
          "Serveur d'application hébergeant sites et applications",
          "Serveur de base de données pour accéder aux données et construire les réponses",
        ]},
      ],
    },
    {
      id: "fw-types-sites",
      title: "Types de sites web",
      blocks: [
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│               TYPES DE SITES WEB                       │
├──────────────────┬─────────────────────────────────────┤
│ Site vitrine     │ Présentation entreprise /            │
│                  │ organisation / professionnel         │
├──────────────────┼─────────────────────────────────────┤
│ E-commerce       │ Vente en ligne de produits           │
│                  │ ou services (marketplace…)           │
├──────────────────┼─────────────────────────────────────┤
│ Blog             │ Publication régulière d'articles     │
│                  │ ou contenus informatifs              │
├──────────────────┼─────────────────────────────────────┤
│ Institutionnel   │ Présentation d'une entreprise        │
│                  │ ou organisation                      │
├──────────────────┼─────────────────────────────────────┤
│ Statique         │ HTML/CSS/JS — sans BDD               │
│                  │ Contenu non généré automatiquement   │
│                  │ (ex: portfolio)                      │
├──────────────────┼─────────────────────────────────────┤
│ Dynamique        │ Contenu généré à la volée via BDD    │
│                  │ Langage serveur (ex: site actu)      │
├──────────────────┼─────────────────────────────────────┤
│ Réservation      │ Réserver un service / produit /      │
│                  │ créneau en temps réel via le web     │
└──────────────────┴─────────────────────────────────────┘`,
        },
        { type: "h", text: "Site vitrine" },
        { type: "p", text: "Présentation d'une entreprise, organisation ou professionnel." },
        { type: "h", text: "E-commerce" },
        { type: "p", text: "Plateforme de vente en ligne de produits ou services (marketplace…)." },
        { type: "h", text: "Blog" },
        { type: "p", text: "Publication régulière d'articles ou contenus informatifs." },
        { type: "h", text: "Institutionnel" },
        { type: "p", text: "Présentation d'une entreprise ou organisation." },
        { type: "h", text: "Statique" },
        { type: "list", items: ["Codé en HTML/CSS/JS", "Sans base de données", "Contenu non généré automatiquement (portfolio, etc.)"] },
        { type: "h", text: "Dynamique" },
        { type: "list", items: ["Contenu généré à la volée via base de données", "Langage serveur (site d'actualité, etc.)"] },
        { type: "h", text: "Réservation" },
        { type: "p", text: "Permet à l'utilisateur de réserver un service, produit ou créneau en temps réel via une interface web." },
      ],
    },
    {
      id: "fw-registrar-noms-domaine",
      title: "Le registrar et les noms de domaine",
      blocks: [
        { type: "p", text: "Entité accréditée permettant de gérer les noms de domaine. Renseigne les serveurs DNS de l'hébergeur." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────┐
│                   REGISTRAR                          │
│                                                      │
│  Titulaire ◄──────────────────► ICANN                │
│       │           Registrar          │               │
│       │         (intermédiaire)      │               │
│       ▼                             ▼               │
│  Gestion du         ←→       Serveurs DNS            │
│  nom de domaine              de l'hébergeur          │
└──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Fonctions" },
        { type: "list", items: [
          "Mise à jour des informations du titulaire (WHOIS)",
          "Sécurisation des données",
          "Gestion de la zone DNS",
          "Transfert de domaine",
          "Intermédiaire entre titulaires, futurs titulaires et l'ICANN",
          "Réservation et renouvellement des noms de domaine",
        ]},
        { type: "h", text: "Remarque" },
        { type: "list", items: [
          "Peut être différent de l'hébergeur web.",
          "Permet aux utilisateurs de réserver, enregistrer et gérer des noms de domaine.",
        ]},
      ],
    },
  ],
};
