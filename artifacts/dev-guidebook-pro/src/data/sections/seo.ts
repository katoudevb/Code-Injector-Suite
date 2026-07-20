import type { Section } from "../types";

export const seo: Section = {
  id: "seo",
  title: "SEO — Référencement naturel",
  icon: "TrendingUp",
  tags: ["js"],
  subsections: [
    {
      id: "seo-4-piliers",
      title: "Les 4 piliers du SEO",
      blocks: [
        { type: "p", text: "Ensemble de techniques utilisées pour améliorer la visibilité d'un site web dans les résultats des moteurs de recherche." },
        {
          type: "diagram",
          content: `SEO
├── 1. Choix des mots-clés          → Comprendre ce que cherchent les utilisateurs
├── 2. Optimisation rédactionnelle  → Contenus pertinents et structurés
├── 3. Optimisation technique       → Vitesse, structure du site, indexation
└── 4. Netlinking                   → Acquisition de liens externes (autorité)`,
        },
        { type: "h", text: "Compléments importants" },
        { type: "list", items: [
          "Positionnement instable dû à l'évolution constante des algorithmes",
          "Données structurées aident Google à mieux comprendre le contenu",
          "SEO fonctionne en duo avec UX",
          "SEO local est essentiel pour les entreprises géolocalisées",
          "Accessibilité améliore UX et le référencement",
          "Sécurité du site (HTTPS) est un facteur de confiance",
          "Contenu dupliqué pénalise",
          "SEO international / multilingue optimise la visibilité dans divers pays",
        ]},
        { type: "h", text: "Mesures SEO à faire" },
        { type: "list", items: [
          "Contenu de qualité (textes pertinents, mots-clés…)",
          "Optimisation des images (réduire poids, formats adaptés…)",
          "Structure permaliens \"URL\" (claires et optimisées)",
          "Mise en cache et performance (améliore temps de chargement)",
          "Choix du thème (rapide, léger, SEO-friendly)",
          "Optimisation mobile (site responsive)",
          "Optimisation balises techniques (title, …)",
          "Sécurité et HTTPS (certificat SSL et MAJ régulière)",
          "Suivi performances / indexations (Google Search Console & Analytics)",
          "Fichiers robot.txt et sitemap.xml (contrôle crawl et indexation)",
          "Liens entrants \"backlinks\" (acquisition de liens externes de qualité)",
          "Maillage interne (structure de liens internes logique et optimisée)",
        ]},
      ],
    },
    {
      id: "seo-fonctionnement-moteur",
      title: "Fonctionnement d'un moteur de recherche",
      blocks: [
        {
          type: "diagram",
          content: `PROCESSUS D'INDEXATION ET DE CLASSEMENT

1. EXPLORATION (Crawling)
   Robots (crawlers) parcourent le web
   et découvrent le contenu des sites
            ↓
2. INDEXATION
   Infos récupérées → analysées
   → stockées dans une BDD nommée "index"
            ↓
3. RECHERCHE
   Analyse la requête utilisateur
   Comprend l'intention de recherche
   Sélectionne les pages les plus pertinentes
            ↓
4. RÉSULTAT
   Pages classées par pertinence
   selon + de 200 critères algorithmiques
   (SEO technique, contenu…)`,
        },
        { type: "h", text: "Exploration (Crawling)" },
        { type: "list", items: ["Robots (crawlers) parcourent le web et découvrent le contenu des sites"] },
        { type: "h", text: "Indexation" },
        { type: "list", items: ["Les infos récupérées sont analysées et stockées dans une BDD nommée index"] },
        { type: "h", text: "Recherche" },
        { type: "list", items: ["Analyse la requête utilisateur", "Comprend l'intention de recherche", "Sélectionne les pages les plus pertinentes"] },
        { type: "h", text: "Résultat" },
        { type: "list", items: ["Pages classées par pertinence selon + de 200 critères algorithmiques (SEO technique, contenu…)"] },
        { type: "h", text: "Types de SEO" },
        { type: "p", text: "White Hat ✅ : référencement éthique et conforme aux règles des moteurs de recherche (comme Google). Améliorer le classement de manière durable et propre. Respecte les guidelines officielles de Google." },
        { type: "p", text: "Black Hat ❌ : techniques frauduleuses ou manipulatrices visant à tromper les moteurs de recherche pour un meilleur classement rapidement. Gains rapides mais risqués, non conforme aux règles de Google. Risque de pénalités Google, voire suppression du site de l'index." },
      ],
    },
    {
      id: "seo-etapes-indexation",
      title: "Étapes de l'indexation",
      blocks: [
        { type: "p", text: "L'indexation est le processus par lequel les robots des moteurs de recherche (crawlers) explorent, analysent et enregistrent les pages web dans l'index du moteur de recherche." },
        {
          type: "diagram",
          content: `Site web
   │
   ▼
1. DÉCOUVERTE
   Via liens externes / sitemap.xml / URL connue
   │
   ▼
2. EXPLORATION (Crawling)
   Robots parcourent les pages → analysent le contenu
   │
   ▼
3. INDEXATION
   Pages analysées → stockées dans l'index
   (Délai : quelques heures à plusieurs semaines)`,
        },
        { type: "h", text: "1. Découverte du site" },
        { type: "p", text: "Le moteur de recherche découvre un site via : des liens externes, un sitemap.xml, une URL connue." },
        { type: "h", text: "2. Exploration (crawling)" },
        { type: "p", text: "Les robots parcourent les pages web pour analyser leur contenu." },
        { type: "h", text: "3. Indexation" },
        { type: "p", text: "Les pages analysées sont stockées dans l'index du moteur de recherche (une base de données géante)." },
        { type: "note", variant: "info", text: "Temps d'indexation : de quelques heures à plusieurs semaines (selon la qualité du site et la fréquence de publication)." },
      ],
    },
    {
      id: "seo-penalite-manuelle",
      title: "Pénalité manuelle Google",
      blocks: [
        { type: "p", text: "Une pénalité manuelle Google est une sanction appliquée par Google lorsqu'un site ne respecte pas les consignes de qualité (souvent à cause de pratiques SEO abusives ou Black Hat)." },
        {
          type: "diagram",
          content: `PROCESSUS DE PÉNALITÉ MANUELLE

1. Détection d'infraction
   (backlinks artificiels, contenu faible, sur-optimisation)
            ↓
2. Application de la sanction
   (déclassement ou retrait de l'index)
            ↓
3. Notification dans Google Search Console
            ↓
4. Correction
   (supprimer liens toxiques, améliorer contenu)
            ↓
5. Demande de réexamen envoyée à Google
            ↓
6. Levée de la pénalité
   (si tout est conforme)`,
        },
        { type: "h", text: "1. Détection d'une infraction" },
        { type: "p", text: "Google identifie une pratique non conforme, par exemple : backlinks artificiels, contenu de mauvaise qualité, sur-optimisation SEO." },
        { type: "h", text: "2. Application de la sanction" },
        { type: "p", text: "Le site peut être : déclassé dans les résultats, ou retiré de l'index." },
        { type: "h", text: "3. Notification" },
        { type: "p", text: "Le propriétaire du site reçoit un message dans Google Search Console indiquant la pénalité." },
        { type: "h", text: "4. Correction" },
        { type: "p", text: "Il faut corriger les pratiques interdites : supprimer les liens toxiques, améliorer le contenu, respecter les guidelines Google." },
        { type: "h", text: "5. Demande de réexamen" },
        { type: "p", text: "Une fois les corrections faites, une demande peut être envoyée à Google." },
        { type: "h", text: "6. Levée de la pénalité" },
        { type: "p", text: "Si tout est conforme, Google peut lever la sanction et rétablir le site." },
      ],
    },
    {
      id: "seo-facteurs-bloquants-ralentissants",
      title: "Facteurs bloquants et ralentissants le SEO",
      blocks: [
        { type: "p", text: "Les facteurs bloquants SEO sont des problèmes techniques ou structurels qui empêchent un site d'être correctement exploré, indexé ou bien positionné par les moteurs de recherche." },
        {
          type: "diagram",
          content: `FACTEURS BLOQUANTS
├── 1. Exploration & indexation  → meta robots, robots.txt, JS mal rendu
├── 2. Erreurs techniques        → HTTP 403/404/500, serveur instable
├── 3. Structure SEO             → pas de maillage, contenu dupliqué, no title/h1
├── 4. Performance & UX          → chargement trop long, mauvaises perfs
└── 5. Sécurité & accès          → formulaires vulnérables, restrictions mal gérées`,
        },
        { type: "h", text: "1. Problèmes d'exploration et d'indexation" },
        { type: "list", items: ["Balise <meta robots> mal configurée", "Fichier robots.txt mal paramétré", "Technologies obsolètes ou non crawlables", "Pages en JavaScript mal rendues"] },
        { type: "h", text: "2. Erreurs techniques" },
        { type: "list", items: ["Erreurs HTTP (403, 404, 500)", "Version de développement accessible en ligne", "Serveur instable ou mal configuré"] },
        { type: "h", text: "3. Problèmes de structure SEO" },
        { type: "list", items: ["Absence de maillage interne", "Contenu dupliqué", "Canonicalisation mal configurée", "Balises <title> et <h1> absentes ou mal utilisées"] },
        { type: "h", text: "4. Performance et UX" },
        { type: "list", items: ["Temps de chargement trop long", "Mauvaises performances globales"] },
        { type: "h", text: "5. Sécurité et accès" },
        { type: "list", items: ["Formulaires ou contenus vulnérables", "Restrictions d'accès mal gérées"] },
        { type: "h", text: "Facteurs ralentissants" },
        { type: "p", text: "Les facteurs ralentissants n'empêchent pas totalement l'indexation, mais dégradent les performances SEO et le positionnement." },
        {
          type: "diagram",
          content: `FACTEURS RALENTISSANTS
├── 1. Performance & vitesse  → chargement long, pages lourdes, iframes
├── 2. Structure du site      → pages trop profondes, URLs dynamiques/longues
├── 3. Contenu & optimisation → peu de texte, duplication, mauvaises balises meta
├── 4. Mobile & compatibilité → non responsive, JS lent
└── 5. Indexation & fichiers  → pas de sitemap XML, robots.txt mal configuré`,
        },
        { type: "h", text: "1. Performance et vitesse" },
        { type: "list", items: ["Temps de chargement trop long", "Pages trop lourdes (images, scripts, médias)", "Utilisation excessive d'éléments comme <iframe>"] },
        { type: "h", text: "2. Structure du site" },
        { type: "list", items: ["Pages trop profondes dans l'arborescence", "Mauvaise structure des liens internes", "URLs dynamiques ou trop longues"] },
        { type: "h", text: "3. Contenu et optimisation" },
        { type: "list", items: ["Pages très graphiques et pauvres en texte", "Contenu dupliqué", "Mauvaise utilisation des balises meta", "Absence ou mauvaise utilisation des balises sémantiques"] },
        { type: "h", text: "4. Mobile et compatibilité" },
        { type: "list", items: ["Absence de version mobile optimisée (non responsive)", "Problèmes liés au JavaScript (rendu incomplet ou lent)"] },
        { type: "h", text: "5. Indexation et fichiers techniques" },
        { type: "list", items: ["Absence de sitemap XML", "Fichier robots.txt mal configuré"] },
      ],
    },
    {
      id: "seo-contenu-duplique",
      title: "Contenu dupliqué pénalisant le SEO",
      blocks: [
        { type: "p", text: "Le contenu dupliqué correspond à un contenu identique ou très similaire présent sur plusieurs URLs. Cela peut perturber les moteurs de recherche et nuire au référencement." },
        {
          type: "diagram",
          content: `SOURCES DE CONTENU DUPLIQUÉ
├── 1. Accès technique   → plusieurs domaines, www/sans www, HTTP+HTTPS sans redirect
├── 2. Versions multiples → desktop vs mobile mal gérées, URLs différentes
├── 3. Multilingue        → mauvaise gestion des langues, absence de hreflang
├── 4. Structure interne  → contenu dans plusieurs catégories, chemins multiples
├── 5. Sous-domaines      → duplication entre domaine principal et sous-domaines
└── 6. Copie directe      → plagiat ou duplication de contenu externe ou interne`,
        },
        { type: "h", text: "1. Problèmes techniques d'accès" },
        { type: "list", items: ["Contenu accessible via plusieurs domaines", "Version avec et sans www", "Accès en HTTP et HTTPS sans redirection correcte"] },
        { type: "h", text: "2. Versions multiples du site" },
        { type: "list", items: ["Version desktop vs version mobile mal gérées", "URLs différentes pour un même contenu"] },
        { type: "h", text: "3. Sites multilingues ou internationaux" },
        { type: "list", items: ["Mauvaise gestion des versions linguistiques", "Absence de balises hreflang"] },
        { type: "h", text: "4. Structure interne du site" },
        { type: "list", items: ["Contenu présent dans plusieurs catégories ou sections", "Pages accessibles via plusieurs chemins"] },
        { type: "h", text: "5. Sous-domaines" },
        { type: "list", items: ["Contenu dupliqué entre domaine principal et sous-domaines"] },
        { type: "h", text: "6. Copie directe" },
        { type: "list", items: ["Plagiat ou duplication de contenu externe ou interne"] },
      ],
    },
    {
      id: "seo-optimisation-url",
      title: "Optimisation des URL",
      blocks: [
        { type: "p", text: "L'optimisation des URL consiste à créer des adresses de pages claires, lisibles et adaptées au référencement naturel afin d'aider les moteurs de recherche et les utilisateurs à comprendre le contenu." },
        { type: "h", text: "1. Structure et lisibilité" },
        { type: "list", items: [
          "Utilisation de tirets pour séparer les mots",
          "URLs lisibles, logiques et compréhensibles",
          "Cohérence avec le contenu de la page",
          "Inclure des mots-clés pertinents",
          "Utilisation cohérente des minuscules",
          "Éviter les répétitions inutiles",
          "Limiter la longueur des URL (idéalement < 100 caractères)",
        ]},
        { type: "h", text: "2. Technique et configuration" },
        { type: "list", items: [
          "Transformer les URL dynamiques en URL statiques (ex : via .htaccess)",
          "Utilisation du HTTPS",
          "Gestion correcte des trailing slashes (/)",
          "Éviter les redirections multiples",
          "URLs cohérentes avec la langue du site ou du sous-domaine",
        ]},
        { type: "h", text: "3. Erreurs à éviter" },
        { type: "code", filename: "erreurs-css.css", language: "css", code: `/* À éviter absolument */
visibility: hidden  /* Texte ou liens cachés */
display: none       /* Masquage de contenu */` },
        { type: "list", items: ["Redirections trompeuses ou \"cachées\"", "URLs incohérentes ou illisibles"] },
      ],
    },
    {
      id: "seo-referencement-medias",
      title: "Référencement des médias",
      blocks: [
        { type: "p", text: "Le SEO des médias consiste à optimiser les images, vidéos, documents et autres contenus multimédias pour améliorer leur visibilité dans les moteurs de recherche et leur performance sur le site." },
        {
          type: "diagram",
          content: `MÉDIAS SEO
├── 1. Images      → ALT, noms descriptifs, WebP/AVIF, lazy loading, sitemap images
├── 2. Vidéos      → métadonnées, transcriptions, thumbnails, hébergement optimisé
├── 3. Audio       → balises spécifiques, métadonnées
├── 4. Documents   → titres, métadonnées, indexables par Google
├── 5. GIF/Anim.   → poids optimisé, texte alternatif
└── 6. Infographies → description textuelle, balise ALT`,
        },
        { type: "h", text: "1. Images" },
        { type: "list", items: [
          "Positionner les images près d'un texte pertinent",
          "Utiliser des noms de fichiers descriptifs et significatifs",
          "Ajouter des attributs ALT (texte alternatif pertinent)",
          "Optimiser le poids et les dimensions des images",
          "Utiliser des formats modernes (WebP, AVIF…)",
          "Mettre en place le lazy loading (chargement différé)",
          "Utiliser des sitemaps dédiés aux images",
          "Respecter les droits d'utilisation (copyright)",
          "Utiliser des balises structurées pour les médias",
        ]},
        { type: "h", text: "2. Vidéos" },
        { type: "list", items: [
          "Améliorer la visibilité (SEO vidéo)",
          "Ajouter des métadonnées (titre, description…)",
          "Proposer des transcriptions et sous-titres",
          "Optimiser l'hébergement et le temps de chargement",
          "Utiliser des miniatures (thumbnails) attractives et optimisées",
        ]},
        { type: "h", text: "3. Audio" },
        { type: "list", items: ["Utiliser des balises spécifiques si nécessaire", "Ajouter des métadonnées (titre, description…)"] },
        { type: "h", text: "4. Documents (PDF, etc.)" },
        { type: "list", items: ["Optimiser les titres et métadonnées", "Rendre les documents indexables par Google", "Structurer correctement le contenu"] },
        { type: "h", text: "5. GIF / animations" },
        { type: "list", items: ["Optimiser le poids et le format", "Ajouter un texte alternatif si possible"] },
        { type: "h", text: "6. Infographies" },
        { type: "list", items: ["Ajouter une description textuelle", "Utiliser la balise ALT pour le référencement"] },
      ],
    },
    {
      id: "seo-top-positions-google",
      title: "Top positions Google",
      blocks: [
        { type: "h", text: "Répartition des clics (CTR)" },
        { type: "table", headers: ["Position", "Part de clics"], rows: [
          ["1er résultat", "~32%"],
          ["2e résultat", "~25%"],
          ["3e résultat", "~19%"],
          ["4e résultat", "~14%"],
          ["5e résultat", "~9%"],
        ]},
        { type: "note", variant: "info", text: "Conclusion : les 3 premières positions captent la majorité du trafic." },
        { type: "h", text: "Facteurs pour atteindre le top Google" },
        { type: "list", items: [
          "Base SEO technique irréprochable",
          "Contenu pertinent, structuré et optimisé",
          "Stratégie de netlinking solide (backlinks de qualité)",
          "UX optimale (expérience utilisateur fluide)",
          "Suivi et mise à jour continue du site",
          "Contenu optimisé pour les utilisateurs et Google",
          "Stratégie SEO en amont (planification)",
          "Aspects techniques avancés (performance, indexation, structure)",
        ]},
      ],
    },
    {
      id: "seo-indexation-technique-avancee",
      title: "Indexation SEO et optimisation technique avancée",
      blocks: [
        { type: "p", text: "L'indexation SEO regroupe les techniques permettant d'aider les moteurs de recherche à découvrir, explorer et comprendre correctement un site web afin de l'ajouter à leur index." },
        { type: "h", text: "1. Sitemap XML" },
        { type: "list", items: [
          "Génération d'un fichier sitemap.xml",
          "Placé à la racine du domaine",
          "Créé via un générateur ou CMS (XML Sitemap Generator)",
          "Soumission à Google et Bing via Search Console",
          "Mise à jour automatique recommandée",
        ]},
        { type: "h", text: "2. Mobile-first & performance" },
        { type: "list", items: ["Optimisation mobile-first (priorité mobile)", "Amélioration des performances de chargement", "Optimisation du crawl et de l'expérience utilisateur mobile"] },
        { type: "h", text: "3. Maillage interne et structure" },
        {
          type: "diagram",
          content: `STRUCTURE DU SITE IDÉALE

Accueil (niveau 1)
├── Catégorie A (niveau 2)
│   ├── Article 1 (niveau 3)  ✅ max 3 clics
│   └── Article 2 (niveau 3)
└── Catégorie B (niveau 2)
    └── Article 3 (niveau 3)`,
        },
        { type: "list", items: ["Liens contextuels internes", "Plan du site HTML (navigation claire)", "Profondeur des pages limitée (max ~3 clics depuis l'accueil)", "Éviter les pages orphelines"] },
        { type: "h", text: "4. Optimisation technique et sémantique" },
        { type: "list", items: ["Utilisation correcte des balises HTML (title, meta, H1…)", "Données structurées (Schema.org / JSON-LD)", "Éviter les doublons de balises (title, meta…)"] },
        { type: "h", text: "5. Stratégie de mise à jour" },
        { type: "list", items: ["Contenu régulièrement mis à jour", "Utilisation de <lastmod> dans le sitemap", "Pages fraîches et actives mieux référencées"] },
        { type: "h", text: "6. Analyse du crawl" },
        { type: "list", items: ["Analyse des logs serveur", "Identification des pages non explorées ou sur-crawlées", "Détection des problèmes de profondeur et d'accès"] },
        { type: "h", text: "7. SEO multilingue et international" },
        { type: "p", text: "Utilisation de hreflang :" },
        { type: "code", filename: "hreflang.html", language: "html", code: `<link rel="alternate" hreflang="fr" href="https://monsite.com/fr/"/>
<link rel="alternate" hreflang="en" href="https://monsite.com/en/"/>` },
        { type: "h", text: "8. Suivi et alertes" },
        { type: "list", items: ["Suivi via Google Search Console", "Alertes sur erreurs d'indexation", "Monitoring des performances SEO"] },
      ],
    },
    {
      id: "seo-donnees-structurees",
      title: "Données structurées",
      blocks: [
        { type: "p", text: "Les données structurées sont des informations ajoutées au code d'une page (souvent en JSON-LD) qui permettent aux moteurs de recherche de mieux comprendre le contenu." },
        { type: "h", text: "Rôle et avantages" },
        { type: "list", items: [
          "Facilitent l'indexation des contenus",
          "Améliorent l'affichage dans les résultats de recherche (rich snippets)",
          "Optimisent le référencement de contenus spécifiques",
          "Améliorent la pertinence contextuelle des pages",
          "Aident les moteurs de recherche à mieux comprendre le sens du contenu (SEO sémantique)",
          "Favorisent la recherche vocale",
          "Permettent d'accéder à des fonctionnalités avancées dans Google (rich results)",
          "Réduisent les ambiguïtés dans l'interprétation du contenu",
        ]},
      ],
    },
    {
      id: "seo-urls-multilingues-multisite",
      title: "URLs multilingues et sites multilingues",
      blocks: [
        { type: "p", text: "La structure des URL multilingues permet d'organiser un site en plusieurs langues afin d'améliorer la compréhension par les moteurs de recherche et l'expérience utilisateur." },
        { type: "h", text: "Comparatif des structures" },
        { type: "table", headers: ["Type", "Exemple", "SEO", "Gestion"], rows: [
          ["Query string", "monsite.com?lang=fr", "Moins optimal", "Facile"],
          ["Répertoire ✅", "monsite.com/fr/", "Bon", "Facile"],
          ["Sous-domaine", "fr.monsite.com", "Bon", "Complexe"],
          ["Domaines distincts", "monsite.fr", "Excellent local", "Lourd"],
        ]},
        { type: "p", text: "Query string : facile à mettre en place, moins optimal pour le SEO. Répertoire (recommandé) : bonne organisation, bon pour le SEO, facile à gérer. Sous-domaine : séparation claire des langues, gestion un peu plus complexe. Domaines distincts : très bon pour le SEO local, gestion plus lourde (coût + maintenance)." },
        { type: "h", text: "Site multilingue" },
        { type: "p", text: "Un site multilingue propose plusieurs langues avec des URLs différentes pour chaque langue, afin d'adapter le contenu aux utilisateurs internationaux." },
        {
          type: "diagram",
          content: `TYPES DE SITES MULTILINGUES
┌───────────────────┬──────────────────────────────────────────┐
│ Monosite          │ Un seul site gère plusieurs langues      │
│                   │ Ex: monsite.com/fr/ + monsite.com/en/    │
│                   │ ✅ Simple à gérer, centralisation        │
├───────────────────┼──────────────────────────────────────────┤
│ Multisite         │ Un site par langue                       │
│                   │ Ex: monsite.fr + monsite.co.uk           │
│                   │ ✅ Idéal grandes structures              │
│                   │ ❌ Gestion plus complexe                 │
└───────────────────┴──────────────────────────────────────────┘`,
        },
        { type: "h", text: "Avantages du multilingue" },
        { type: "list", items: ["Portée internationale", "Amélioration du SEO international", "Meilleure expérience utilisateur (contenu adapté)", "Image de marque renforcée", "Amélioration des performances commerciales"] },
        { type: "h", text: "Points importants" },
        { type: "list", items: ["Adapter les mentions légales selon les pays", "Adapter le contenu (pas seulement traduire)", "Bien gérer le SEO (hreflang, structure URL)"] },
      ],
    },
    {
      id: "seo-criteres-optimisation",
      title: "Critères d'optimisation SEO",
      blocks: [
        { type: "p", text: "Les critères d'optimisation SEO regroupent l'ensemble des éléments qui influencent le positionnement d'un site dans les moteurs de recherche." },
        {
          type: "diagram",
          content: `CRITÈRES SEO — VUE D'ENSEMBLE
├── Contenu           → Qualité, mots-clés, structure
├── Maillage interne  → Liens internes, "jus SEO"
├── Éléments tech.    → Balises HTML, canonicalisation
├── UX / comportement → Temps sur site, taux de rebond
├── SEO local/intl    → Géolocalisation, multilingue
├── Fréquence MAJ     → Contenu vivant et dynamique
└── Indexation        → Pages importantes vs secondaires`,
        },
        { type: "h", text: "1. Contenu" },
        { type: "list", items: ["Qualité et pertinence du contenu", "Mots-clés bien intégrés", "Contenu utile et structuré"] },
        { type: "h", text: "2. Maillage interne" },
        { type: "list", items: ["Liens internes entre les pages", "Bonne circulation du \"jus SEO\"", "Pages bien reliées entre elles"] },
        { type: "h", text: "3. Éléments techniques" },
        { type: "list", items: ["Balises HTML (title, meta, H1…)", "Structure du site propre", "Canonicalisation des pages"] },
        { type: "h", text: "4. UX et comportement utilisateur" },
        { type: "list", items: ["Temps passé sur le site", "Taux de rebond", "Expérience utilisateur (UX) fluide"] },
        { type: "h", text: "5. SEO local et international" },
        { type: "list", items: ["SEO local (géolocalisation)", "SEO multilingue / international"] },
        { type: "h", text: "6. Fréquence de mise à jour" },
        { type: "list", items: ["Contenu régulièrement actualisé", "Site vivant et dynamique"] },
        { type: "h", text: "7. Indexation intelligente" },
        { type: "list", items: ["Bonne indexation des pages", "Gestion des pages importantes vs secondaires"] },
      ],
    },
    {
      id: "seo-empecher-exploration-indexation",
      title: "Empêcher l'exploration et l'indexation",
      blocks: [
        { type: "h", text: "Via la balise meta robots (noindex / nofollow)" },
        { type: "code", filename: "meta-robots.html", language: "html", code: `<head>
  <meta name="robots" content="noindex, nofollow">
</head>` },
        { type: "h", text: "Contrôler le crawl sur les liens" },
        { type: "code", filename: "nofollow-link.html", language: "html", code: `<a href="https://developers.google.com/" rel="nofollow">Documentation</a>` },
        { type: "h", text: "Empêcher l'exploration des ressources via robots.txt" },
        { type: "p", text: "Utiliser en racine du domaine le fichier /robots.txt :" },
        { type: "code", filename: "robots.txt", language: "text", code: `User-agent: *
Disallow: /admin/
Disallow: /private/` },
      ],
    },
  ],
};
