import type { Section } from "../types";

export const cybersecuriteAnalyste: Section = {
  id: "cybersecurite-analyste",
  title: "Cybersécurité — Analyste",
  icon: "ShieldAlert",
  tags: ["js"],
  subsections: [
    {
      id: "cyber-concepts-reseau",
      title: "Concepts fondamentaux — Pare-feu, DMZ, proxy",
      blocks: [
        { type: "h", text: "Qu'est-ce qu'un pare-feu ?" },
        { type: "p", text: "Un pare-feu est un système de protection du réseau qui surveille le trafic entrant et sortant. Il autorise ou bloque une partie du trafic en s'appuyant sur des règles de sécurité prédéfinies. Un pare-feu est constitué soit d'un appareil physique, d'un logiciel ou d'une combinaison des deux." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                     TYPES DE PARE-FEU                           │
├─────────────────────┬───────────────────────────────────────────┤
│ Proxy               │ Passerelle entre 2 réseaux pour une       │
│                     │ application spécifique                    │
├─────────────────────┼───────────────────────────────────────────┤
│ Stateful            │ Autorise/bloque selon l'état, port,       │
│ (inspection)        │ protocole — suit de l'ouverture à la      │
│                     │ fermeture de la connexion                 │
├─────────────────────┼───────────────────────────────────────────┤
│ UTM                 │ Combine pare-feu stateful + antivirus +   │
│ (Unified Threat     │ gestion cloud                             │
│ Management)         │                                           │
├─────────────────────┼───────────────────────────────────────────┤
│ NGFW                │ Next Generation — va au-delà du filtrage  │
│ (Nouvelle           │ de paquets : bloque malwares, attaques    │
│ génération)         │ applicatives — barrière réseaux sécurisés │
│                     │ vs réseaux non fiables (Internet)         │
└─────────────────────┴───────────────────────────────────────────┘`,
        },
        { type: "h", text: "Qu'est-ce qu'une DMZ ?" },
        { type: "p", text: "La DMZ (DeMilitarized Zone) est un sous-réseau isolé du réseau local et d'Internet. C'est une zone tampon entre un réseau sécurisé et un réseau non sécurisé." },
        {
          type: "diagram",
          content: `┌──────────┐     ┌──────────────┐     ┌──────────┐
│ Internet │────►│     DMZ      │────►│  LAN     │
│ (non     │     │ (zone tampon)│     │ (réseau  │
│ fiable)  │     │              │     │ interne) │
└──────────┘     │ Serveur Web  │     └──────────┘
                 │ Serveur Mail │
                 │ Proxy        │
                 └──────────────┘
                    ↕ Pare-feu ↕`,
        },
        { type: "p", text: "Dans cette zone, on connecte des serveurs avec des rôles spécifiques (serveur web, serveur messagerie…). L'étanchéité dépend de la configuration du pare-feu qui crée la séparation entre LAN, Internet et DMZ." },
        { type: "h", text: "Qu'est-ce qu'un proxy ?" },
        { type: "p", text: "Un proxy (serveur mandataire) joue le rôle d'intermédiaire entre un client et un serveur distant." },
        {
          type: "diagram",
          content: `[Machine cliente]
       │  requête vers www.site.fr
       ▼
  [PROXY]
       │  se connecte à www.site.fr
       ▼
  [Serveur www.site.fr]
       │  retourne la page au proxy
       ▼
  [PROXY] → retourne la page à la machine cliente`,
        },
        { type: "h", text: "Actions réalisées par le proxy" },
        { type: "list", items: [
          "Filtrage — bloquer certains sites ou catégories",
          "Mise en cache — retourner plus rapidement les requêtes",
          "Compression — réduire le poids des pages",
          "Journalisation — enregistrer les requêtes dans des logs",
          "Anonymisation — le serveur web ne voit que le proxy",
          "Définition des droits d'accès",
        ]},
        { type: "h", text: "Qu'est-ce qu'un reverse-proxy ?" },
        { type: "p", text: "À l'inverse du proxy, un reverse-proxy protège les serveurs web. Les requêtes sont reçues par le reverse-proxy qui vérifie si elles sont conformes aux règles de sécurité." },
        {
          type: "diagram",
          content: `[Internet / clients]
       │
       ▼
[REVERSE-PROXY]  ← protège les serveurs internes
  (DMZ / pare-feu)
       │
       ▼
[Serveurs Web internes]`,
        },
      ],
    },
    {
      id: "cyber-concepts-crypto",
      title: "Concepts fondamentaux — Chiffrement, certificat, PKI, hash",
      blocks: [
        { type: "h", text: "Qu'est-ce que le chiffrement ?" },
        { type: "p", text: "Le chiffrement sécurise les données numériques transmises sur un réseau. Il permet : intégrité, authentification, non-répudiation." },
        { type: "h", text: "Chiffrement symétrique — une seule clé" },
        {
          type: "diagram",
          content: `[Texte clair] ──clé secrète──► [Texte chiffré] ──clé secrète──► [Texte clair]`,
        },
        { type: "table", headers: ["Algorithme", "Description"], rows: [
          ["DES", "Chiffrement par blocs 64 bits, clés 48 bits — bas niveau"],
          ["AES", "Norme de référence actuelle"],
        ]},
        { type: "h", text: "Chiffrement asymétrique — deux clés" },
        {
          type: "diagram",
          content: `[Texte clair] ──clé publique──► [Texte chiffré] ──clé privée──► [Texte clair]`,
        },
        { type: "table", headers: ["Algorithme", "Description"], rows: [
          ["RSA", "Très utilisé — chiffre avec clé publique, déchiffre avec clé privée"],
          ["ICP/PKI", "Infrastructure à clé publique — gestion des clés via certificats numériques"],
        ]},
        { type: "h", text: "Qu'est-ce qu'un certificat électronique ?" },
        { type: "p", text: "Aussi appelé certificat numérique ou certificat de clé publique. Il identifie et authentifie un utilisateur. Il contient la clé publique de l'utilisateur." },
        { type: "h", text: "Qu'est-ce qu'une PKI ?" },
        { type: "p", text: "La PKI (Public Key Infrastructure) est une infrastructure à clé publique basée sur la cryptographie. Son rôle est de délivrer les certificats électroniques." },
        { type: "h", text: "Qu'est-ce qu'un hash ?" },
        { type: "p", text: "Le hash est le résultat d'une fonction de hachage qui code des données en une seule chaîne de caractères (quelle que soit la quantité de données initiales)." },
        {
          type: "diagram",
          content: `[Données de n'importe quelle taille]
          │
     fonction de hachage
          │
  [Chaîne de longueur fixe et unique]
   ← processus à sens unique, irréversible →`,
        },
        { type: "h", text: "Usages des fonctions de hachage" },
        { type: "list", items: ["Garantir l'authenticité des données", "Stocker les mots de passe", "Signer des documents électroniques"] },
        { type: "h", text: "Fonctions courantes" },
        { type: "table", headers: ["Fonction", "Taille du hash"], rows: [["MD5", "128 bits"], ["SHA512", "512 bits"]] },
      ],
    },
    {
      id: "cyber-concepts-menaces-auth",
      title: "Concepts fondamentaux — Menaces, SSL/TLS, biométrie, identité, tokens",
      blocks: [
        { type: "h", text: "Qu'est-ce qu'un threat ?" },
        { type: "p", text: "Un Threat est une menace due à une faiblesse dans le code ou dans l'architecture d'une application. Les équipes mettent en place des politiques comme la Threat Intelligence ou la modélisation des menaces. La communauté OWASP met à disposition un document consensus sur les pratiques de développement sécurisé." },
        { type: "h", text: "Qu'est-ce qu'un ransomware ?" },
        { type: "p", text: "Un ransomware est un script qui bloque l'accès à un système ou à des fichiers en les chiffrant, accompagné d'une demande de rançon." },
        { type: "p", text: "Modes d'infection : vulnérabilités connues, mail avec pièce-jointe/lien malveillant, navigation sur un site compromis." },
        { type: "h", text: "Qu'est-ce que SSL/TLS ?" },
        { type: "list", items: [
          "SSL (Secure Sockets Layer) — protocole obsolète de chiffrement de communication",
          "TLS (Transport Layer Security) — évolution de SSL, assure la confidentialité",
          "Un certificat SSL/TLS permet d'utiliser HTTPS (extension sécurisée de HTTP)",
          "Reconnaissable au cadenas dans la barre d'adresse",
        ]},
        { type: "h", text: "Qu'est-ce que les CAPTCHA ?" },
        { type: "p", text: "Un CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) détermine si un utilisateur est une personne physique ou un Bot. Il approuve ou rejette les utilisateurs de manière automatisée." },
        { type: "h", text: "Qu'est-ce que la biométrie ?" },
        { type: "p", text: "La biométrie est l'ensemble des techniques permettant de reconnaître automatiquement un individu à partir de ses caractéristiques physiques, biologiques ou comportementales (ADN, empreintes digitales…)." },
        { type: "note", variant: "info", text: "Les données biométriques sont des données personnelles — uniques et permanentes. En France, la CNIL encadre strictement leur traitement." },
        { type: "h", text: "Qu'est-ce qu'une identité numérique ?" },
        { type: "p", text: "L'identité numérique est constituée des justificatifs d'identité nécessaires pour accéder aux ressources en réseau ou en ligne." },
        {
          type: "diagram",
          content: `Système non sécurisé  → simple mot de passe
Serveurs publics      → informations anonymes (identité temporaire)
Réseau d'entreprise   → authentification forte (identifiants)
Internet              → échange d'identité sous une forme ou une autre`,
        },
        { type: "h", text: "Qu'est-ce que le SSO et le WebSSO ?" },
        { type: "list", items: [
          "SSO (Single Sign-On) — service d'authentification permettant à un utilisateur d'utiliser un seul ensemble d'identifiants pour accéder à plusieurs applications",
          "WebSSO — SSO pour un ensemble de serveurs web — simplifie l'accès des utilisateurs",
        ]},
        { type: "h", text: "Qu'est-ce qu'un cookie ?" },
        { type: "p", text: "Un cookie est un petit fichier stocké par un serveur dans le navigateur d'un utilisateur, associé à un domaine web. Il mémorise identifiant client, panier, navigation à des fins statistiques/publicitaires." },
        { type: "h", text: "Qu'est-ce qu'un jeton de session ?" },
        { type: "p", text: "Un jeton de session (identifiant de session) est une donnée utilisée dans les communications réseau pour identifier une session. Il est attribué à un visiteur lors de sa première demande de page. Généralement de courte durée." },
        { type: "h", text: "Qu'est-ce qu'un token ?" },
        { type: "p", text: "Un token (jeton) est un fichier généralement stocké sur un appareil client, utilisé pour authentifier un utilisateur lors de sa connexion à un service." },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Jetons physiques", "Appareils portables générant des codes à usage unique"],
          ["Codes à usage unique", "Envoyés par e-mail ou SMS"],
          ["Jetons 2FA", "Double facteur d'authentification (mot de passe + code)"],
        ]},
        { type: "note", variant: "success", title: "Je retiens — Introduction", text: "Pour sécuriser un réseau local → proxy + DMZ (postes ne communiquent pas directement sur Internet). Pour échanger sur le web sécurisé → PKI (chiffrement + certificats + clés publiques). Pour sécuriser les mots de passe → fonctions de hachage. Pour utiliser HTTPS → protocole SSL/TLS. Pour vérifier si un utilisateur n'est pas un Bot → CAPTCHA. Pour conserver des informations sur le client → cookies ou tokens. Pour maintenir une identification dans une session → jetons de session." },
      ],
    },
    {
      id: "cyber-motivations-hackers",
      title: "Que cherchent les hackers ?",
      blocks: [
        { type: "p", text: "Il faut vingt ans pour comprendre les motivations des hackers. Aujourd'hui, les malwares sont des \"bouts de logiciels\" particulièrement bien conçus. La faiblesse des protocoles Internet et l'absence de code sécurisé facilitent les attaques." },
        { type: "h", text: "La nécessaire refonte" },
        { type: "p", text: "La transformation digitale et l'IoT multiplient les points d'ancrage. La seule vraie solution serait de revoir entièrement les briques protocolaires d'Internet — une opération impensable au niveau mondial." },
        { type: "h", text: "Qui sont les hackers ?" },
        { type: "p", text: "Quatre catégories : les hackers par jeu, les criminels de la finance, les terroristes/officines gouvernementales, les espions." },
        { type: "h", text: "1. Jeu et humour — les \"script kiddies\"" },
        { type: "p", text: "Jeunes gens exploitant les faiblesses des TI, sans intérêt financier au départ. Ego surdimensionné, convaincus d'être invulnérables. Exemples célèbres : Kevin Mitnick, Adrian Lamo, Kevin Poulsen, Gary McKinnon. Même les fondateurs d'Apple (Wozniak et Jobs) ont commencé comme hackers." },
        { type: "h", text: "2. La pouponnière du hacking (5–12 ans)" },
        { type: "p", text: "Des enfants ayant démontré des qualités d'analyse : Paul Reuben (10 ans, vol de données Android), Betsy Davis (7 ans, hack réseau Wi-Fi public), Kristoffer Von Hassel (5 ans, contournement Xbox — récompensé par Microsoft)." },
        { type: "h", text: "3. Les criminels financiers et les terroristes" },
        { type: "list", items: [
          "Criminels financiers : vol de données, revente, ransomwares — toutes les mafias de la planète",
          "Terroristes : pour raisons politiques/religieuses, organisations structurées capables d'opérations sur plusieurs années. Exemples cités dans la littérature spécialisée : groupes affiliés à des mouvances terroristes ou à des États",
        ]},
        { type: "h", text: "4. Les espions" },
        { type: "p", text: "Hommes et femmes formés au vol d'informations confidentielles (politiques, économiques) et à la diffusion de fausses informations. Exemple : Cambridge Analytica." },
        { type: "note", variant: "success", title: "Je retiens — Le hacking", text: "Différents types de hackers : jeu, criminels financiers, terroristes/officines, espions. La motivation première des cybercriminels reste l'appât du gain." },
      ],
    },
    {
      id: "cyber-cyberguerre",
      title: "Cyberguerre Internet : réalité et fantasmes",
      blocks: [
        { type: "p", text: "Le numérique est effectivement utilisé dans les conflits modernes, mais on parle davantage de cyber déstabilisation, cyber désinformation, cyber destruction que de cyberguerre proprement dite." },
        { type: "h", text: "La cyberguerre est-elle une guerre ?" },
        { type: "p", text: "Une guerre = état de conflit armé entre groupes politiques constitués. La cyberguerre ne s'y applique pas : on confond l'outil avec sa finalité. Le numérique est un instrument, pas une finalité." },
        { type: "h", text: "Pourquoi les États sont-ils aussi vulnérables ?" },
        { type: "list", items: [
          "Dépendance à l'informatique beaucoup trop importante",
          "Services \"régaliens\" connectés aux réseaux traditionnels sans rupture (eau, énergie, recherche, espace)",
          "Véhicules autonomes pilotés par algorithmes non inattaquables",
          "Protocoles Internet faibles + anonymat des opérations (TOR, DOH)",
          "Connexion permanente : satellites basse altitude, 5G/6G, IoT",
          "Dépendance totale sans protections crédibles",
        ]},
        { type: "h", text: "Qu'est-ce qu'une cyber-puissance numérique ?" },
        { type: "p", text: "Le NCPI (National Cyber Power Index) du Belfer Center de Harvard évalue plusieurs dizaines de pays sur 7 domaines :" },
        { type: "list", items: [
          "Renforcement des cyberdéfenses nationales",
          "Surveillance et protection internes",
          "Capacité à contrôler et manipuler l'information",
          "Capacité à collecter des renseignements (espionnage)",
          "Amélioration des compétences en cybersécurité",
          "Capacités de destruction/désactivation des infrastructures adverses",
          "Participation à la définition des normes internationales",
        ]},
        { type: "p", text: "L'index combine des indicateurs d'intention et des indicateurs de capacité." },
        { type: "h", text: "De quoi demain sera-t-il fait ?" },
        { type: "list", items: [
          "Les attaques seront de plus en plus hébergées dans le Cloud (CWaaS — Cyber Warfare as a Service)",
          "L'arme numérique continuera de se démocratiser : \"la kalachnikov des réseaux\"",
          "La seule solution pour l'empêcher = arrêter Internet (impensable)",
        ]},
        { type: "note", variant: "success", title: "Je retiens — La cyberguerre", text: "On préfèrera parler de cyber déstabilisation, cyber désinformation, cyber destruction plutôt que de cyberguerre. Les États présentent une grande vulnérabilité. Le Cloud est et sera la cible privilégiée des attaques." },
      ],
    },
    {
      id: "cyber-hacking-ethique",
      title: "Hacking éthique : des outils à manier avec précautions",
      blocks: [
        { type: "p", text: "La meilleure manière de se protéger contre les criminels, c'est de pratiquer les mêmes techniques, méthodes et outils. Le hacking éthique regroupe l'ensemble des solutions permettant à des équipes internes de se comporter comme des criminels, mais uniquement pour protéger l'entreprise." },
        { type: "h", text: "Un travail de fourmi" },
        { type: "p", text: "Ce n'est pas une opération \"presse-bouton\". Cela nécessite compétence, expérience et initiative. Ces outils de \"footprinting\" sont des moyens pour parvenir à ses fins." },
        { type: "h", text: "Ce n'est pas un jeu" },
        { type: "p", text: "Arsenal juridique en vigueur : aux États-Unis, le Computer Fraud and Abuse Act (CFAA) prévoit des peines pouvant aller jusqu'à plusieurs années de prison selon les États. Même rigueur en Europe, au Japon et dans les grandes démocraties industrielles." },
        { type: "h", text: "Bonnes pratiques et recommandations" },
        { type: "list", items: [
          "Pratiquer la paranoïa — ne pas se demander SI l'entreprise va être attaquée, mais QUAND",
          "Ne jamais mener d'attaques depuis sa propre machine",
          "Se familiariser avec Linux / Kali (outils les plus performants)",
          "Prévoir une plateforme de test strictement identique à la production (détachée des domaines de production) — peut représenter jusqu'à 20% du budget informatique",
          "Sensibiliser les usagers (pas de \"buddy punching\", pas de post-it mot de passe)",
          "Trouver des praticiens de haut niveau maîtrisant programmation système, assembleur, C, architectures réseaux",
        ]},
        { type: "h", text: "Les stars du hacking légal" },
        { type: "p", text: "Aircrack-ng : suite d'outils pour retrouver les clés Wi-Fi (jusqu'au mode WPA2)." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│             Suite Aircrack-ng               │
├─────────────────┬───────────────────────────┤
│ airmon-ng       │ Passe la carte en mode    │
│                 │ "monitor" pour écouter le │
│                 │ trafic Wi-Fi              │
├─────────────────┼───────────────────────────┤
│ airodump-ng     │ Sniffer de paquets Wi-Fi  │
├─────────────────┼───────────────────────────┤
│ aireplay-ng     │ Réinjecte des paquets ARP │
│                 │ pour augmenter les chances│
│                 │ de retrouver les clés     │
└─────────────────┴───────────────────────────┘`,
        },
        { type: "p", text: "5 à 10% des routeurs Wi-Fi sont encore équipés d'une protection WEP." },
        { type: "p", text: "TCH Hydra : outil s'attaquant aux credentials d'authentification de plus de 50 protocoles (Cisco, FTP, HTTPS, IMAP, IRC, LDAP, MSSQL, MySQL, NNTP, Oracle, POP3, RDP, SAP/R3, SIP, SMTP, SSH, Telnet, VMWare-Auth, VNC…). C'est un outil d'attaque par force brute — il faut lui indiquer adresse IP ou famille d'IP, protocole, fichier de mots de passe à tester en priorité, longueur, position des caractères…" },
        { type: "p", text: "John the Ripper (JTR) : référence pour le cracking de mots de passe. Utilise des dictionnaires (3000+ occurrences par défaut) et des combinaisons de caractères majuscules/minuscules/numériques/symboles. Capable de déchiffrer des hash MD5 dans certains cas. Disponible sur une cinquantaine de plateformes." },
        { type: "p", text: "Nmap (Network Mapper) : \"sniffer\" de cibles conçu en 1997 par Gordon Lyon. Dresse une carte des ressources réseaux avec de nombreuses informations." },
        { type: "code", filename: "nmap-commands.sh", language: "bash", code: `# Syntaxe générale
nmap -option1 -option2 -optionN [cible]
# La cible peut être un DNS, une IP, une plage d'IPs, un réseau avec masque

# Détecter l'OS de la cible
nmap -A domaine

# Connaître tous les services actifs avec leurs ports
nmap -sV domaine

# Scanning TCP
nmap -sT domaine

# Scanning UDP
nmap -sU domaine

# Tests de vulnérabilités (script Lua)
nmap -Pn --script de_vulnérabilité domaine` },
        { type: "note", variant: "warning", text: "Nmap peut aussi servir à des tests de charge/force brute encadrés légalement (ex : simulation Slowloris, test de robustesse d'authentification) — uniquement sur des systèmes dont on a l'autorisation explicite de test." },
        { type: "p", text: "Metasploit : plateforme complète destinée aux spécialistes de la sécurité (framework réécrit en Ruby). Développe des exploits utilisant les anomalies détectées par Nmap ou John The Ripper. Fonctionne comme un vaccin : \"valide\" une faiblesse pour en déduire la meilleure parade. Plus de 1000 produits exploitables. Les dernières versions intègrent des fonctions de \"fuzzing\" (détection des anomalies)." },
        { type: "h", text: "Les forums et places de marché du deep web" },
        { type: "p", text: "Pour maintenir leur veille sur les menaces, certains professionnels de la sécurité surveillent des forums et places de marché spécialisés hébergés sur le deep web (souvent accessibles uniquement via TOR), où se échangent outils, exploits et données volées." },
        { type: "note", variant: "warning", text: "Il n'y a rien d'illégal à faire de la veille sur ce type de sources dans un cadre professionnel encadré. Ce sont les actions qui peuvent en découler (achat d'outils illégaux, exploitation de données volées…) qui sont répréhensibles." },
        { type: "note", variant: "success", title: "Je retiens — Hacking éthique", text: "Le meilleur moyen de se protéger reste d'utiliser les propres outils des hackers. Le hacking éthique = utiliser ces outils uniquement pour protéger l'entreprise. Le hacking n'est pas un jeu — grands dangers à connaître et maîtriser." },
      ],
    },
    {
      id: "cyber-steganographie",
      title: "La stéganographie",
      blocks: [
        { type: "p", text: "La stéganographie consiste à cacher un fichier, un programme, une image, une signature dans autre chose. Ex : texte dans une image, image dans une vidéo… Nom : du grec \"steganos\" (secret/caché) + \"graphie\" (écriture/dessin)." },
        { type: "h", text: "Double motivation" },
        { type: "list", items: [
          "Cacher des éléments prouvant l'identité/propriété d'un fichier",
          "Embarquer du code malveillant dans une machine cliente ou un serveur",
        ]},
        { type: "h", text: "La technique LSB (Least Significant Bit)" },
        { type: "p", text: "Un pixel = 3 couleurs, chacune sur 8 bits (0-255). Les bits de poids fort influencent la couleur ; les bits de poids faible (1er et 2e bits) ont un impact imperceptible pour l'œil humain." },
        {
          type: "diagram",
          content: `Pixel : [bit7 bit6 bit5 bit4 bit3 bit2 | bit1 bit0]
                       ↑ poids fort      ↑ poids faible
                    (couleur visible)   (invisible → utilisé pour cacher données)`,
        },
        { type: "p", text: "Calcul : une image 800×600 = 1 440 000 bytes. En utilisant le 1er bit : 1 440 000 bits = 180 000 bytes disponibles pour cacher des données (gros fichiers texte, autres images, petites vidéos)." },
        { type: "h", text: "Transformer l'objet caché en malware" },
        { type: "p", text: "3 phases :" },
        { type: "list", items: [
          "Modifier un fichier source (accès interne ou via faille PHP/JavaScript)",
          "Récupérer l'objet caché, réassembler ses constituants",
          "Exécuter le code via un événement JavaScript (ex : fin du chargement de la page)",
        ]},
        { type: "note", variant: "warning", title: "Limite", text: "La stéganographie n'assure pas la confidentialité — si un tiers récupère l'objet, il le voit en clair. Il faut combiner avec du chiffrement." },
        { type: "h", text: "Outils de stéganographie" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["steghide", "Le plus connu (début années 2000) — cache/extrait données dans JPG, BMP, WAV, AU"],
          ["steganography", "Insère et détecte les corps étrangers"],
          ["binwalk", "Syntaxe équivalente à steghide"],
          ["wavsteg", "Utilitaire Python 3, spécialisé clips sonores WAV"],
        ]},
        { type: "code", filename: "steganographie-commandes.sh", language: "bash", code: `# steghide
steghide extract -sf fichier      # extraction des données étrangères
steghide info fichier             # précise s'il y a des données insérées

# binwalk
binwalk fichier                   # affiche les données insérées
binwalk -e fichier                # affiche et extrait les données insérées

# wavsteg
wavsteg.py -r -s fichierson -o fichier_sortie   # détecte et extrait` },
        { type: "h", text: "Des malwares basés sur la stéganographie" },
        { type: "table", headers: ["Malware", "Description"], rows: [
          ["AdGholas", "Code JavaScript malicieux dans HTML ou image — remarqué par universités britanniques"],
          ["Cerber", "Capacité de renouvellement et d'adaptation très élevée"],
          ["Stegano", "Spécialisé bannières publicitaires PNG"],
          ["Stegoloadr (Lurk)", "Inclut chiffrement pour la confidentialité"],
          ["Sundown, SynCrypt, Zbot", "Autres exemples"],
          ["ZeoT", "Stéganographie sur images (variante chinoise documentée dans la littérature)"],
          ["TeslaCrypt", "Cache des commandes C2 (Command and Control) dans la page d'erreur HTTP 404 — permet au hacker de prendre le contrôle à distance"],
        ]},
        { type: "note", variant: "success", title: "Je retiens — Stéganographie", text: "Technologie consistant à cacher un fichier/programme/signature dans autre chose. Permet de cacher des éléments prouvant l'identité du propriétaire. Les cybercriminels s'en servent pour embarquer du code malveillant. Pléiade d'outils disponibles." },
      ],
    },
    {
      id: "cyber-ransomwares",
      title: "Le cancer des ransomwares",
      blocks: [
        { type: "p", text: "Les ransomwares sont tellement nombreux et les sommes demandées tellement faibles que la plupart des victimes paient pour avoir la paix. Un état d'esprit de confiance s'est installé car les pirates fournissent généralement la clé de déchiffrement." },
        { type: "h", text: "C'est quoi un ransomware ?" },
        { type: "p", text: "Un ransomware est un logiciel non invité (généralement un cheval de Troie) qui bloque tout ou partie des ressources si on ne s'acquitte pas d'une certaine somme — la rançon." },
        { type: "h", text: "Historique" },
        {
          type: "diagram",
          content: `1989 → Joseph L. Popp distribue 20 000 disquettes "AIDS Information"
       Cheval de Troie PC Cyborg, chiffrement symétrique, rançon 189$
       (s'active au 90e boot)

2006 → Introduction du chiffrement asymétrique
       Cheval de Troie Archiveus (RSA) - GPCode (clé RSA 600 bits)

2011 → Véritable épidémie : 60 000 nouveaux ransomwares
       2 000 nouveaux par jour dès 2012`,
        },
        { type: "h", text: "Les familles de ransomwares" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────────┐
│                    FAMILLES DE RANSOMWARES                           │
├──────────────────────┬──────────────────────────────────────────────┤
│ 1. Police            │ Affichent messages d'avertissement de fausses │
│    Ransomware        │ organisations gouvernementales (FBI, etc.)    │
│                      │ Ex : Reveton, Gimeno, Urausy                  │
├──────────────────────┼──────────────────────────────────────────────┤
│ 2. SMS               │ Envoient le code de déblocage par SMS         │
│                      │ Ex : CryptoLocker (RSA asymétrique, 72h,      │
│                      │ bitcoin/GreenDot/MoneyPak)                    │
├──────────────────────┼──────────────────────────────────────────────┤
│ 3. MBR               │ Modifient le Master Boot Record               │
│ (Master Boot Record) │ (secteur 0 du disque de démarrage)           │
│                      │ Bloquent le boot sans chiffrer les fichiers   │
├──────────────────────┼──────────────────────────────────────────────┤
│ 4. Mobiles           │ Visent Android/iOS                            │
│                      │ Ex : Koler.a (200k tablettes Android),        │
│                      │ Svpeng (900k smartphones en 30 jours),        │
│                      │ "Find My Phone" (iOS)                         │
└──────────────────────┴──────────────────────────────────────────────┘`,
        },
        { type: "p", text: "CryptoLocker : double clé RSA asymétrique, rançon de ~100$ payable en 72h (bitcoins, GreenDot, MoneyPak). Variantes : CryptoLocker 2.0, CTBLocker, CryptoWall, TorrentLocker…" },
        { type: "h", text: "Ce qui nous attend" },
        { type: "list", items: [
          "Utilisation croissante de réseaux d'anonymisation (TOR, peer-to-peer)",
          "Algorithmes de chiffrement asymétrique propriétaires",
          "RaaS (Ransomware as a Service) — personnalisation et ciblage des attaques",
          "Extension à Linux, iOS, Android (au-delà de Windows)",
        ]},
        { type: "note", variant: "success", title: "Je retiens — Ransomwares", text: "Logiciel non invité (cheval de Troie) bloquant les ressources contre rançon. Premier ransomware de l'histoire : 1989. 4 familles : police ransomware, SMS, MBR, mobiles." },
      ],
    },
    {
      id: "cyber-botnets",
      title: "Les botnets",
      blocks: [
        { type: "p", text: "Les botnets (bot + net = réseau de robots) sont des réseaux de machines d'utilisateurs regroupées à leur insu dans une fédération virtuelle, sous contrôle d'un serveur C&C (Command & Control), piloté par un malfaiteur." },
        { type: "h", text: "Les 4 acteurs" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                    ÉCOSYSTÈME BOTNET                      │
│                                                          │
│  ┌────────────┐    ┌────────────┐                        │
│  │ Malfaiteurs│    │  Clients   │ (tout aussi coupables)  │
│  │(organisés, │    │ (commandent│                        │
│  │ mafieux)   │    │ les actions│                        │
│  └─────┬──────┘    └─────┬──────┘                        │
│        │                 │                               │
│        ▼                 ▼                               │
│  ┌──────────────────────────────┐                        │
│  │      Serveur C&C             │                        │
│  │  (Command & Control)         │                        │
│  └──────────────┬───────────────┘                        │
│                 │                                        │
│                 ▼                                        │
│  ┌──────────────────────────────┐                        │
│  │ Nos machines infectées       │ (sans le savoir)        │
│  │ (botnet de milliers/millions)│                        │
│  └──────────────┬───────────────┘                        │
│                 │                                        │
│                 ▼                                        │
│  ┌──────────────────────────────┐                        │
│  │       Victimes ciblées       │                        │
│  └──────────────────────────────┘                        │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Méthode d'infection" },
        { type: "p", text: "Toutes les méthodes sont bonnes : le \"water holing\" en tête. Une fois installé, l'agent répond aux sollicitations via des protocoles historiquement IRC (maintenant P2P ou protocoles dédiés). Aussi via DNS, images stéganographiées." },
        { type: "h", text: "Usages rémunérés" },
        { type: "list", items: [
          "Envoi de spams en nombre",
          "Spear phishing (avec informations confidentielles récoltées)",
          "Relais de vol d'informations bancaires",
          "DDoS (Deny Distributed Of Service)",
          "Attaques par phishing classique",
          "Minage bitcoin (révélé peu lucratif)",
        ]},
        { type: "h", text: "Coût de location des botnets (selon Webroot)" },
        { type: "table", headers: ["Pays", "Prix/jour pour 1000 machines"], rows: [
          ["USA", "180 $"], ["Royaume-Uni", "240 $"], ["France", "200 $"], ["Canada", "270 $"], ["Russie", "200 $"],
        ]},
        { type: "h", text: "La résilience des botnets" },
        { type: "p", text: "Les botnets ont évolué pour mieux se cacher : DGA (Domain Generation Algorithm) — génère des noms de domaine dynamiquement (un botnet célèbre générait jusqu'à 50 000 noms/jour, en choisissant 500). Utilisation de TOR (serveur C&C anonyme). Protocoles P2P." },
        { type: "h", text: "Exemples de botnets célèbres" },
        { type: "table", headers: ["Botnet", "Description"], rows: [
          ["Zero Access", "9 millions de machines, 100 000 $/jour"],
          ["Grum", "6 serveurs Ukraine/Russie, 18 milliards spams/jour, 190 000 $/jour"],
          ["TDL_4", "Infectait le MBR, protocole P2P Kad, 4,5 millions machines"],
          ["Zeus", "\"Dieu des botnets DIY\" pour vol de données sensibles, 1000 serveurs P2P"],
          ["CryptoLocker", "Chiffrement asymétrique RSA"],
          ["Mariposa", "L'un des plus gros botnets"],
          ["MisoSMS", "Premier botnet mobile Android — vol de SMS"],
          ["Butterfly", "Vol de coordonnées bancaires de 11 millions de victimes"],
          ["Pony", "600 000 identifiants, détournement de 220 000$ en bitcoins"],
          ["Flashback", "Premier botnet significatif pour Mac"],
        ]},
        { type: "h", text: "Un avenir radieux (pour les malfaiteurs)" },
        { type: "p", text: "Botnets de plus en plus dédiés, quasi-impossibles à détecter. Utilisation de chiffrement \"maison\". Les mobiles, wearables et IoT seront le meilleur véhicule d'installation des malwares." },
        { type: "note", variant: "success", title: "Je retiens — Botnets", text: "Différents types de hackers : jeu, criminels financiers, terroristes, espions. Motivation première : l'appât du gain." },
      ],
    },
    {
      id: "cyber-vol-certificats",
      title: "Le vol de certificats",
      blocks: [
        { type: "p", text: "Un certificat est une sorte de passeport numérique garantissant qu'une personne, une application ou un site est bien celui qu'il prétend être. Il est attribué par une organisation indépendante." },
        { type: "h", text: "Contenu d'un certificat (norme X.509)" },
        { type: "table", headers: ["Élément", "Description"], rows: [
          ["N° de version", "1, 2, 3"],
          ["N° de série", "Attribué par le tiers de confiance"],
          ["Algorithme de signature", "md5WithRSAEncryption…"],
          ["Émetteur", "Description LDAP (Thawte, Verisign, Cert…)"],
          ["Dates de validité", "Not Before / Not After"],
          ["Identité du certifié", "Syntaxe LDAP"],
          ["Algorithme de chiffrement", "rsaEncryption + clé publique"],
          ["Signature du certificateur", "Hash chiffré avec clé privée du certificateur"],
        ]},
        { type: "p", text: "La norme X.509 décrit la structure du certificat, la gestion des privilèges et les mécanismes d'attribution/révocation (PKI)." },
        { type: "h", text: "Le piratage de certificat" },
        { type: "p", text: "Les pirates ont plusieurs options :" },
        { type: "list", items: [
          "Fabriquer de faux certificats en exploitant des faiblesses dans le processus (ex : failles historiques dans l'algorithme MD5)",
          "Voler des certificats chez des tiers de confiance",
          "Acheter légalement des certificats en se faisant passer pour une entreprise légitime inexistante",
        ]},
        { type: "p", text: "Exemple documenté : un faux logiciel se faisant passer pour un \"Antivirus Security Pro\" a utilisé un certificat frauduleux pour paraître légitime et inciter au téléchargement d'un cheval de Troie volant des informations sensibles." },
        { type: "h", text: "L'avenir du vol de certificat" },
        { type: "p", text: "Le déploiement des mobiles va provoquer un afflux de malwares garantis par des certificats apparemment valides. La seule solution : ne jamais installer quoi que ce soit sans validation par l'équipe sécurité interne." },
        { type: "note", variant: "success", title: "Je retiens — Vol de certificats", text: "Un certificat = passeport dont le contenu vérifie que le propriétaire est bien celui qu'il prétend être. Les pirates fabriquent de faux certificats, les volent ou les achètent légalement sous une fausse identité." },
      ],
    },
    {
      id: "cyber-boite-outils-pirates",
      title: "La boîte à outils des pirates (vue défensive)",
      blocks: [
        { type: "p", text: "En matière de sécurité, il faut anticiper, se mettre en situation et utiliser les mêmes méthodes que les hackers. Les entreprises se constituent un arsenal de protection (hacktools) identique à celui de leurs \"ennemis\", uniquement à des fins défensives et dans un cadre légal." },
        { type: "h", text: "Les règles du jeu" },
        { type: "p", text: "Deux questions fondamentales : comment ces gens s'y prennent-ils pour attaquer et pénétrer nos installations ? Comment se protéger ? Deux manières de constituer une hacktools : outils du commerce ou utilitaires ciblés sur Internet." },
        { type: "h", text: "À quoi sert la boîte à outils ?" },
        { type: "list", items: [
          "Navigation anonyme (TOR, nombreux utilitaires)",
          "Scanning — s'informer sur les infrastructures à attaquer (services actifs, versions, protections)",
          "Whois — informations sur adresses IP DNS, responsable technique",
          "Attaques DOS/DDOS — tester les défenses",
          "Tests d'intrusion — cartographier les faiblesses",
          "Defacing — modifier des pages web sans laisser de traces (XSS Cross Site Scripting)",
          "Récupération de mots de passe",
          "Injection SQL sur bases de données",
          "Attaques réseaux Wi-Fi",
          "Ingénierie sociale (man in the middle)",
        ]},
        { type: "h", text: "Les solutions globales" },
        { type: "p", text: "Metasploit (+ CANVAS + Core Impact) : framework Open Source (Ruby). Peut détecter les failles d'une cible (\"fuzzing\"), lancer des attaques contre ~1000 failles recensées. Démarche : choisir exploit → vérifier la faille → choisir le payload → exécuter." },
        { type: "p", text: "ARMITAGE : interface simplifiée de Metasploit, met à la portée de tous l'arsenal Metasploit." },
        { type: "p", text: "OCLHASHCAT : l'outil le plus efficace pour casser des mots de passe. Techniques : force brute, attaques combinées, dictionnaires, fingerprint, masque, permutation, règles, table lookup, toggle case. Taux de succès élevé selon ses concepteurs." },
        { type: "p", text: "WIFITE : produit le plus utilisé pour contrôler la robustesse d'un réseau Wi-Fi. Met en évidence les faiblesses, teste les protections WEP et WPA." },
        { type: "p", text: "AirCrack : très connu dans le domaine Wi-Fi." },
        { type: "p", text: "WIRESHARK (Acrylic) : meilleur outil pour sniffer un réseau et collecter les données en transit (Ethernet et Wi-Fi). Idéal pour valider les techniques de filtrage et prouver la nécessité de chiffrer les données sensibles." },
        { type: "p", text: "SET (Social Engineering Toolkit) : montage d'attaques sophistiquées fondées sur la crédulité des individus (phishing), utilisé en tests d'ingénierie sociale encadrés." },
        { type: "p", text: "Google Dorks : des centaines de techniques d'interrogation permettant de détecter des vulnérabilités et données sensibles exposées par erreur." },
        { type: "h", text: "Quelques catégories d'utilitaires \"underground\" (à connaître pour la défense)" },
        { type: "table", headers: ["Catégorie", "Exemples de noms rencontrés dans la littérature"], rows: [
          ["Déni de service", "ByteDOS, Hoic, LOIC, PoWeRFuL DoSER, Jays Booter, SYNFlood-DOS"],
          ["Defacing", "Horny Monkey, xcvDefaceMaker, Havij, Advanced Deface Page Maker"],
          ["Cacher l'IP", "SumRando, Real Hide IP, SecurityKISS, CyberGhost, HSS, Hide My IP"],
          ["Virus", "Virus-o-Matic, TeraVirus Maker"],
          ["Cassage mots de passe", "BrutusA2"],
        ]},
        { type: "note", variant: "success", title: "Je retiens — Boîte à outils du pirate", text: "On peut utiliser les mêmes ressources que les hackers pour se défendre. Pour constituer une hacktools : outils du commerce ou utilitaires ciblés sur Internet. La hacktools permet aux défenseurs de lancer les mêmes opérations que les pirates, sans les mettre en péril." },
      ],
    },
    {
      id: "cyber-apt",
      title: "APT : agression par enchaînement d'attaques",
      blocks: [
        { type: "p", text: "L'APT (Advanced Persistent Threat) est une forme d'attaque visant une cible d'entreprise déterminée, utilisant tous les moyens possibles pour \"exfiltrer\" ses données confidentielles. C'est l'enchaînement des techniques qui est nouveau — peut prendre des semaines voire des mois." },
        { type: "h", text: "Les 7 phases d'une attaque APT" },
        {
          type: "diagram",
          content: `Phase 1 : Intrusion initiale
  └─ Compromettre la machine d'un employé fragile
     Via : phishing, water holing, pièce attachée piégée
          ↓
Phase 2 : Tunnel de commande
  └─ Établir un tunnel avec la victime
     Acquérir des droits administrateur
          ↓
Phase 3 : Crédibilisation
  └─ Exploits sur failles méconnues, décryptage mots de passe
     Peut demander plusieurs semaines ("bruit" ambiant)
          ↓
Phase 4 : Découverte de l'infrastructure
  └─ Détecter les protections, types de fichiers mots de passe
     Cartographier la cible (comme un militaire en campagne)
          ↓
Phase 5 : Extension du contrôle
  └─ Tenter d'accéder à d'autres machines, serveurs sensibles
     Si possible en mode administrateur
          ↓
Phase 6 : Maintien de la mainmise
  └─ Maintenir le contrôle sur les points névralgiques du TI
          ↓
Phase 7 : Exfiltration
  └─ Exfiltrer les données sensibles choisies
     Certaines APT se sont maintenues jusqu'à 4 ans`,
        },
        { type: "p", text: "L'objectif d'un scénario APT est de pénétrer l'infrastructure d'une cible pour en retirer ses données confidentielles. Ce n'est pas une attaque par force brute classique, mais un enchaînement d'actions — c'est la globalité qui est difficile à appréhender pour les défenseurs." },
        { type: "note", variant: "success", title: "Je retiens — Attaque APT", text: "Une attaque APT = 7 phases : intrusion initiale → tunnel de commande → crédibilisation → découverte de l'infrastructure → extension du contrôle → maintien de la mainmise → exfiltration des données." },
      ],
    },
    {
      id: "cyber-securite-holistique",
      title: "La sécurité holistique (XDR, DFIR, SASE)",
      blocks: [
        { type: "p", text: "Les protocoles Internet datent du début des années 80 (40+ ans) — ne sont plus satisfaisants. Être holistique = appréhender les problèmes de manière globale plutôt que parcellaire." },
        { type: "h", text: "XDR — eXtended Detection and Response" },
        {
          type: "diagram",
          content: `┌────────────────────────────────────────────────────────┐
│                       XDR                              │
│         (eXtended Detection and Response)              │
│                                                        │
│  Tous les endpoints + équipements du TI                │
│  ↓ constater les anomalies                             │
│  ↓ faire remonter vers                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │   SOC (Security Operations Center)             │   │
│  │   IA + analyse comportementale                 │   │
│  │   → décisions liées aux activités du TI        │   │
│  └─────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "vs EDR (Endpoint Detection and Response) : XDR prend en compte tous les évènements du TI (VPN, proxies, pare-feux, déni de service, messages…), pas seulement les terminaux. Deux alternatives : intégré \"on premise\" ou Cloud." },
        { type: "p", text: "Fonctionnalités XDR : NGAV (New Generation Anti Virus), UEBA (User and Entity Behavior Analysis), comportements réseaux, \"Deception\"." },
        { type: "h", text: "DFIR — Digital Forensics and Incident Response" },
        { type: "p", text: "Approche holistique pour relever des indices, faits et éléments liés à une attaque en vue de les présenter à une administration légale (juge)." },
        { type: "table", headers: ["Étape", "Description"], rows: [
          ["1. Préparation", "Identifier les plateformes, caractériser les incidents à surveiller"],
          ["2. Identification", "Type d'attaque et nature des risques"],
          ["3. Non-diffusion", "Empêcher l'épidémie (ne pas corriger, contenir)"],
          ["4. Résolution", "Mise en place d'une solution de remédiation"],
          ["5. Reprise", "PRA — procédures de redémarrage"],
          ["6. Communication", "Reporting"],
        ]},
        { type: "p", text: "Solutions DFIR courantes : outils de forensic carving (analyse de centaines de types de fichiers), plateformes de récupération de disque, kits d'investigation numérique (Forensic Toolkit, Encase, Regripper, etc.)." },
        { type: "h", text: "SASE — Secure Access Service Edge" },
        { type: "p", text: "Architecture hébergée dans le Cloud regroupant toutes les fonctionnalités protectrices. Deux domaines : aspects réseaux + aspects sécurité." },
        { type: "h", text: "Services SASE" },
        { type: "list", items: [
          "Service de firewalls (FWaaS)",
          "Services CASB (Cloud Access Security Brokers)",
          "Proxy inline pour trafic Web et Cloud (NG SWG)",
          "Implémentation des règles \"zero trust\"",
          "Capacités d'authentification SSL/TLS",
          "Surveillance des données en transit (DLP)",
          "Protections contre attaques récentes (ATP, UEBA, sandboxing)",
          "Regroupement des informations sur les menaces (EDR, SIEM)",
          "Infrastructure réseau hyperscale SDWAN",
        ]},
        { type: "h", text: "Avantages SASE (selon Gartner)" },
        { type: "list", items: [
          "Faible complexité d'implantation et coûts réduits (mono-fournisseur Cloud)",
          "Grande souplesse et agilité",
          "Meilleure maîtrise des performances",
          "Gestion des accès plus complète (au-delà de l'IP)",
          "Plus grande efficacité d'usage du réseau",
          "Gestion totalement centralisée",
        ]},
        { type: "p", text: "Prestataires courants du marché : Cisco, Fortinet, Zscaler, Cato Networks…" },
        { type: "note", variant: "success", title: "Je retiens — Sécurité holistique", text: "Les protocoles Internet sont désormais datés et insuffisants. Être holistique = appréhender les problèmes de manière globale." },
      ],
    },
    {
      id: "cyber-architecture-perimetrique",
      title: "L'architecture globale de sécurité périmétrique",
      blocks: [
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────────┐
│            ARCHITECTURE DE PROTECTION PÉRIMÉTRIQUE               │
│                                                                  │
│  Internet ──► [Pare-feu NGFW] ──► [DMZ] ──► [Réseau interne]    │
│                    │                              │              │
│               [IDS/IPS]                      [Proxy]            │
│                    │                         [SIEM]             │
│               [IDPS + IA]                    [UTM]              │
│                    │                                             │
│              [SOC / XDR]                                         │
└──────────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Les IDS — Intrusion Detection System" },
        { type: "p", text: "Équipements ou logiciels analysant les flux réseaux ou serveurs pour détecter des activités potentiellement dangereuses. S'arrêtent là — informent sans prendre de décision de correction (\"appellent au feu mais n'appellent pas les pompiers\")." },
        { type: "p", text: "2 familles : détection par signatures de programmes malveillants, détection par comportements anormaux (profil standard préétabli)." },
        { type: "h", text: "Les IPS — Intrusion Prevention System" },
        { type: "p", text: "IDS de 2ème génération, couplés aux pare-feux. Capables de prendre des décisions (filtrage de flux) sur la foi des remontées IDS." },
        { type: "h", text: "Les NGFW — Next Generation Fire Wall" },
        { type: "p", text: "Pare-feux classiques avec fonctions supplémentaires d'analyse de paquets, prévention IPS et introspection intelligente. Scrutent les niveaux 2 à 7 du modèle OSI." },
        { type: "p", text: "Capacité DPI (Deep Packet Inspection) : introspecte les contenus des trames au-delà des en-têtes, scrute les \"payloads\" (mots-clés, associations, codes insérés…)." },
        { type: "h", text: "Les UTM — Unified Threat Management" },
        { type: "p", text: "Première génération des intégrés de la sécurité. Regroupent : anti-malwares, pare-feux, prévention intrusions (IPS), VPN, filtrage Web sur URL, DLP (Data Loss Prevention). La différence UTM/IDPS est difficile à trouver aujourd'hui." },
        { type: "h", text: "Les SIEM — Security Information and Event Management" },
        { type: "p", text: "Collectent, regroupent, corrèlent et agrègent les informations liées à la sécurité. Gestionnaires de logs, essentiels pour traiter la première phase d'analyse des données sécuritaires (très volumineuses)." },
        { type: "h", text: "Les serveurs proxy" },
        { type: "table", headers: ["Type", "Rôle"], rows: [
          ["Proxy", "Cache l'identité de l'utilisateur qui se connecte à Internet"],
          ["Reverse proxy", "Cache l'adresse IP réelle d'un serveur interne aux yeux d'un usager externe"],
        ]},
        { type: "p", text: "Le reverse proxy (dans la DMZ) peut aussi : filtrer, répartir la charge, mettre en cache." },
        { type: "h", text: "Les IDPS — Intrusion Detection Prevention System" },
        { type: "p", text: "2ème génération des intégrés. En plus des fonctions IDS/IPS, intègre des fonctions très avancées d'Intelligence Artificielle pour prendre des décisions et s'adapter par lui-même." },
        { type: "note", variant: "success", title: "Je retiens — Sécurité en entreprise", text: "De nombreuses solutions disponibles — le choix dépend des besoins et du niveau de sécurité souhaité." },
      ],
    },
    {
      id: "cyber-wifi-securite",
      title: "Wi-Fi, point faible du système",
      blocks: [
        { type: "p", text: "Wi-Fi a une réputation de mauvaise sécurité, mais l'avenir de Wi-Fi n'est pas en opposition avec les réseaux cellulaires — il est avec et en complément de ces réseaux." },
        { type: "h", text: "Règles d'installation" },
        { type: "list", items: [
          "Accès physique → placer les points d'accès hors de portée (bouton \"reset\" = réactivation des paramètres par défaut)",
          "Puissance des bornes → adapter la puissance à la surface réelle (ne pas émettre au maximum inutilement)",
          "Mot de passe administrateur → changer immédiatement (souvent \"admin\"), renouveler mensuellement",
          "Interface d'administration → n'autoriser qu'une seule adresse IP",
          "Filtrage adresses MAC → autoriser seulement certaines adresses",
          "SSID → désactiver la diffusion automatique, changer le nom",
        ]},
        { type: "h", text: "Techniques de protection Wi-Fi" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                 ÉVOLUTION DES PROTECTIONS WI-FI                  │
├──────────┬──────────────────────────────────────────────────────┤
│ WEP      │ Clé fixe RCA 64/128 bits — CASSÉ EN QUELQUES MINUTES │
│          │ Faille : vecteurs d'initialisation, clé partagée     │
├──────────┼──────────────────────────────────────────────────────┤
│ WPA      │ Clé PSK (8-63 caractères), TKIP + RC4                │
│          │ Meilleur que WEP mais toujours algorithme faible     │
├──────────┼──────────────────────────────────────────────────────┤
│ WPA2     │ Meilleur moyen actuel — AES + CCMP + serveur Radius  │
│          │ Processus en 5 phases avec clés temporaires PTK      │
│          │ Seule une installation WPA2 AES CCMP a des chances   │
│          │ de résister                                           │
└──────────┴──────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "WEP — Pourquoi il est cassé" },
        { type: "p", text: "Sur une clé 64 bits → seuls 40 bits chiffrent. 2^40 ≈ 1 000 milliards de combinaisons, testables rapidement avec les machines actuelles. De plus, les vecteurs d'initialisation présentent une faille connue depuis le début des années 2000 (recherche Fluhrer, Mantin, Shamir), ce qui rend WEP cassable en quelques minutes — d'où la nécessité absolue de migrer vers WPA2." },
        { type: "h", text: "WPA2 — Processus d'authentification (5 phases)" },
        { type: "p", text: "Le client s'authentifie auprès d'un serveur Radius, qui délivre une Master Key (MK). Celle-ci sert à calculer une PMK, transmise au point d'accès (AP), qui génère à son tour une PTK (Pairwise Transient Key) — un trousseau de 3 clés : la KCK (Key Confirmation Key, prouve la possession de la PMK), la KEK (Key Encryption Key, distribue la GTK pour le broadcast/multicast), et des clés temporaires pour le chiffrement des échanges." },
        { type: "h", text: "Outils de \"crack\" Wi-Fi (à connaître pour l'audit défensif)" },
        { type: "table", headers: ["Outil", "Description"], rows: [
          ["aircrack-ng", "Le plus connu — récupère clés WEP et WPA/WPA2PSK via plusieurs techniques d'attaque statistiques"],
          ["aircrack-ptw", "Version plus récente et plus rapide pour casser WEP"],
          ["Reaver", "Exploite la faille WPS (Wi-Fi Protected Setup) par force brute sur le PIN du routeur"],
          ["Wifite", "Script Python automatisant les audits WEP et WPA"],
          ["Wireshark", "Capture le trafic réseau (libpcap/winpcap)"],
          ["Fern cracker", "Audit sécurité Python + Qt, Linux uniquement"],
          ["Cain & Abel", "Récupère mots de passe Windows, scan Wi-Fi, très complet"],
          ["CloudCracker", "Dictionnaire de 300 millions de mots (Cloud)"],
        ]},
        { type: "note", variant: "warning", text: "Ces outils ne doivent être utilisés que dans un cadre légal strict (audit de son propre réseau ou pentest autorisé par écrit)." },
        { type: "note", variant: "success", title: "Je retiens — Sécurité Wi-Fi", text: "L'avenir de Wi-Fi est avec et en complément des réseaux cellulaires. Respecter les règles de sécurité à l'installation. Wi-Fi dispose de protections par chiffrement depuis toujours. Les outils de crack sont efficaces mais nécessitent une expertise et un cadre légal." },
      ],
    },
    {
      id: "cyber-securite-iot",
      title: "Sécurité des objets (IoT) — attention danger",
      blocks: [
        { type: "p", text: "La majorité des capteurs sont de véritables ordinateurs (processeur, OS, stockage, interfaces). On ne voit pas pourquoi on ne pourrait pas pirater un IoT comme une machine Windows. Il faut s'attendre à un déferlement d'attaques." },
        { type: "h", text: "Les faiblesses des IoT" },
        { type: "list", items: [
          "Pas de prise de conscience collective sur la dangerosité",
          "Gestion des identités souvent mal traitée",
          "Protocoles de transport peu sécurisés sur réseaux basse consommation — certains réseaux longue portée transmettent encore en clair, exposant à l'usurpation d'identité",
          "Code embarqué souvent fonctionnel mais sans contraintes de sécurité",
          "Manque de standards d'écriture et de mise en œuvre",
          "Tests manquants (outils JTAG, suite OWASP IoT disponibles)",
        ]},
        { type: "h", text: "8 groupes de risques IoT" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│               RISQUES IoT                               │
├─────┬───────────────────────────────────────────────────┤
│ 1   │ Accès physique aux objets installés partout       │
├─────┼───────────────────────────────────────────────────┤
│ 2   │ Modification des contenus/paramètres stockés      │
│     │ (compteurs électriques "intelligents"...)         │
├─────┼───────────────────────────────────────────────────┤
│ 3   │ Hébergement de chevaux de Troie, backdoors        │
│     │ → récupérer identifiants d'autres éléments        │
├─────┼───────────────────────────────────────────────────┤
│ 4   │ Modification paramètres domotique/immotique        │
│     │ Température, alertes sécurité, systèmes critiques │
├─────┼───────────────────────────────────────────────────┤
│ 5   │ Danger pour la santé — pacemakers, biometers       │
│     │ (décharge électrique potentiellement mortelle)    │
├─────┼───────────────────────────────────────────────────┤
│ 6   │ Attaques DDoS via IoT piratés                     │
│     │ (ex historique : un fournisseur inondé par des    │
│     │ centaines de milliers de caméras compromises)     │
├─────┼───────────────────────────────────────────────────┤
│ 7   │ Surveillance vie privée via capteurs piratés       │
│     │ (télévisions, appareils audiovisuels...)          │
├─────┼───────────────────────────────────────────────────┤
│ 8   │ Véhicules autonomes — prise de contrôle à distance│
│     │ (cas documentés de véhicules connectés hackés)    │
└─────┴───────────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Exemple documenté (recherche universitaire sur des solutions domotiques grand public) : déclenchement d'alarmes non justifiées, désactivation de l'allumage automatique, récupération du PIN de serrure, implantation d'un backdoor." },
        { type: "note", variant: "success", title: "Je retiens — Sécurité des objets", text: "Les objets IoT vont poser de gros problèmes de sécurité à leur entourage. Les faiblesses sécuritaires des objets sont celles de toutes les machines dotées d'un processeur." },
      ],
    },
    {
      id: "cyber-pare-feux-ngfw",
      title: "Les pare-feux de nouvelle génération (NGFW)",
      blocks: [
        { type: "h", text: "Ce que fait un pare-feu traditionnel (3 fonctions)" },
        { type: "table", headers: ["Fonction", "Description"], rows: [
          ["Filtrage statique", "Contrôle du trafic sur la base des n° de ports, adresses IP et protocoles (niveau 3 OSI)"],
          ["NAT (Network Address Translation)", "Traduction des adresses IP — flux arrivant avec une adresse, repartant avec une autre"],
          ["VPN", "Étend la sécurité interne à des usagers au-delà du pare-feu — chiffre les données en transit (IPSec, SSL)"],
        ]},
        { type: "note", variant: "info", title: "Différence proxy / NAT", text: "Le proxy est dédié à une application spécifique et comprend la nature du trafic. Le NAT est plus générique et sert par défaut l'ensemble de l'infrastructure." },
        { type: "h", text: "NGFW — Une autre dimension" },
        { type: "p", text: "Les NGFW scrutent tout : niveaux 2 à 7 du modèle OSI. Grande différence : capacité à introspecter les contenus des trames au-delà des en-têtes — scrute les \"payloads\" pour détecter des signes d'intrusion. Cette capacité d'inspection = DPI (Deep Packet Inspection)." },
        { type: "h", text: "Fonctionnalités avancées des NGFW" },
        { type: "list", items: [
          "Stateful — contrôle chaque connexion individuellement, conserve l'état dans le temps",
          "Mode routé ou transparent (niveau 2 ou 3 OSI)",
          "Analyse au niveau applicatif — filtrer ou bloquer selon l'application source",
          "Intégration annuaire LDAP — contrôles discriminatoires par utilisateur/groupe",
          "QoS — discriminer les flux entrants selon leur nature, attribuer des priorités",
          "Inspection trafic chiffré SSL/TLS — déchiffre, analyse, rechiffre et réinjecte",
          "Empilables pour s'adapter à des charges élevées",
        ]},
        { type: "note", variant: "success", title: "Je retiens — Pare-feux", text: "Pare-feu classique : filtrage statique + NAT + VPN. NGFW : capables d'introspecter les contenus et de scruter les \"payloads\". Grâce aux fonctions QoS, les NGFW discriminent les flux selon leur nature." },
      ],
    },
    {
      id: "cyber-idps-detail",
      title: "Les IDPS — mieux que la simple convergence IDS et IPS",
      blocks: [
        { type: "p", text: "Un IDPS (Intrusion Detection and Prevention System) est un dispositif physique ou logiciel qui détecte les tentatives d'intrusions (comme un IDS), les contient en s'associant à un pare-feu (comme un IPS), et intègre des fonctions très avancées d'Intelligence Artificielle pour prendre des décisions et s'adapter par lui-même." },
        { type: "h", text: "Les 4 types d'IDPS (selon NIST)" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────────┐
│                    TYPES D'IDPS                                  │
├────────────────────┬─────────────────────────────────────────────┤
│ IDPS de réseau     │ Capte et traite les données représentatives  │
│ (le plus courant)  │ de l'activité réseau et protocoles          │
├────────────────────┼─────────────────────────────────────────────┤
│ IDPS Wi-Fi         │ Forme dédiée — gère uniquement le trafic     │
│ (spécialisé)       │ sans fil                                     │
├────────────────────┼─────────────────────────────────────────────┤
│ NBA                │ Network Behavior Analysis — analyse des       │
│                    │ protocoles spécifiques des équipements        │
│                    │ (routeurs, switchs, frontaux)                │
├────────────────────┼─────────────────────────────────────────────┤
│ HIDS               │ Logiciel installé dans un serveur hôte       │
│ (hébergé)          │                                              │
└────────────────────┴─────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Positionnement dans l'architecture" },
        {
          type: "diagram",
          content: `Internet → [Pare-feu] → [IDPS] → [Réseau interne]
                          ↑
                   Capte le trafic,
                   détecte les anomalies,
                   prend des décisions`,
        },
        { type: "p", text: "On peut multiplier les IDPS en fonction des flux à protéger, ou privilégier une architecture unifiée." },
        { type: "h", text: "Les 3 technologies utilisées" },
        { type: "table", headers: ["Technologie", "Description", "Limite"], rows: [
          ["Bases de signatures", "Comme un anti-malware — chaque attaque identifiée au préalable", "Toujours en retard d'une guerre — nécessite mises à jour constantes"],
          ["Analyse comportementale", "Détecte les comportements anormaux — s'adapte aux différents contextes", "Risque de faux positifs — nécessite paramétrage long"],
          ["NBA protocols", "Analyse les échanges entre équipements réseau (protocoles propriétaires)", "Peu connu, mais riche en informations"],
        ]},
        { type: "p", text: "L'Intelligence Artificielle s'insère dans la détection comportementale : phase de paramétrage longue puis le système apprend." },
        { type: "h", text: "L'architecture des IDPS" },
        { type: "p", text: "Deux grandes formes d'implémentation : solution locale complète (serveur dédié), ou outil intégré dans un NGFW. La tendance est aux intégrés (comme ERP/CRM) — évite les problèmes d'intégration entre produits. Puis il faut choisir entre Cloud (IA avancée, mises à jour, résilience) ou local." },
        { type: "note", variant: "success", title: "Je retiens — IDPS", text: "Un IDPS détecte les tentatives d'intrusion et prend des décisions via un moteur d'IA. 3 technologies : bases de signatures, analyse comportementale, analyse des échanges réseaux." },
      ],
    },
    {
      id: "cyber-technique-leurres",
      title: "La technique des leurres (deceptive security)",
      blocks: [
        { type: "p", text: "La technologie des leurres consiste à mettre en place de fausses machines virtuelles, de faux serveurs, de faux annuaires, de faux fichiers d'authentification pour que les attaquants investissent ces fausses ressources et soient détournés sur des \"voies de garage\". L'utilisateur peut ainsi comprendre d'où viennent les attaques et protéger les vraies ressources. C'est la technique du cheval de Troie inversé." },
        { type: "h", text: "Les leçons de l'histoire" },
        { type: "p", text: "Deux grandes périodes : les pots de miel (\"honey pots\") — leurres placés aux endroits stratégiques, mais limités (ne donnaient pas de perspective globale) ; puis la \"deceptive security\" — une solution plus globale, où le SI dédié à la sécurité est imbriqué dans celui qu'il protège." },
        { type: "h", text: "Avantages de la \"deceptive security\" vs pots de miel" },
        { type: "list", items: [
          "Dynamique — affronte en temps réel les tentatives (pas de bases de signatures à mettre à jour)",
          "Transparente pour les usagers et applications",
          "Faible taux d'alertes — un leurre accédé = quasi-100% une attaque",
          "Œcuménique — protège contre n'importe quelle attaque, y compris \"zero day\"",
          "Pas d'apprentissage nécessaire sur l'utilisation de l'infrastructure",
          "Adaptée aux nouveaux contextes : IoT, mobiles, mainframes",
        ]},
        { type: "h", text: "Les leurres ne remplacent pas les moyens classiques" },
        { type: "p", text: "Pour les grandes entreprises, la voie la plus crédible est une intégration à 3 dimensions : physique (pare-feu NGFW, VPN, IDPS), anti-malware traditionnel (analyse comportementale, bases de signatures), et intelligence au sens large (compréhension des modèles d'attaques, apprentissage, technologie des leurres). La \"deception technology\" ne peut pas constituer une architecture de protection à part entière — seulement l'une de ses composantes." },
        { type: "note", variant: "success", title: "Je retiens — Les leurres", text: "\"Pots de miel\" : pièges disséminés sur les ressources les plus sensibles. \"Security decoys\" (2e génération) : plus générique, plus grand nombre de ressources, compréhension globale des stratégies." },
      ],
    },
    {
      id: "cyber-code-securise-cwe",
      title: "Le code sécurisé (CWE, SANS, SAFECode)",
      blocks: [
        { type: "p", text: "Les plus grandes menaces se trouvent dans les failles créées dans un code fonctionnel mais facile à détourner. La qualité et la sécurité du code vont parfois à l'encontre d'une plus grande productivité perçue à court terme." },
        { type: "h", text: "Le SANS — CWE (Common Weakness Enumeration)" },
        { type: "p", text: "Institut dont l'objectif est d'apporter une information fiable aux développeurs. S'appuie sur un très large réseau d'affiliés et sur MITRE. Son \"hit parade\" des 25 erreurs les plus courantes fait référence." },
        { type: "p", text: "Le consortium SAFECode (regroupant de grands éditeurs comme Adobe, EMC, Juniper, Microsoft, Nokia, SAP, Siemens, Symantec) donne des recommandations similaires." },
        { type: "h", text: "Les 3 familles d'erreurs" },
        { type: "h", text: "1. Interactions non sécurisées" },
        { type: "p", text: "Injection SQL :" },
        { type: "code", filename: "injection-sql-exemple.sql", language: "sql", code: `-- Requête dynamique normale
SELECT * FROM items WHERE owner = <userName> AND itemname = <itemName>;

-- Si l'utilisateur tape : name' OR 'a'='a' comme mot de passe
-- La requête devient :
SELECT * FROM items WHERE owner = 'sinatra' AND itemname = 'franck' OR 'a'='a';
-- 'a'='a' est toujours VRAI → accès garanti peu importe le mot de passe` },
        { type: "p", text: "Autres erreurs d'interactions :" },
        { type: "list", items: [
          "Upload de fichiers exécutables (.ASP, .PHP) sans contrôle",
          "CSRF (Cross Site Request Forgery) — ne pas vérifier les requêtes reçues",
          "Open Redirect — redirection automatique vers un site malveillant sans contrôle",
        ]},
        { type: "h", text: "2. Mauvaise gestion des ressources" },
        { type: "list", items: [
          "Débordement de mémoire tampon — ne pas contrôler la taille des entrées (permet d'exécuter du code non invité)",
          "Path Transversal — mauvais contrôle d'un chemin d'accès (récupération de fichiers sensibles)",
          "Téléchargement d'un exécutable sans contrôle d'intégrité ou vérification \"white list\"",
          "Composition de code depuis l'extérieur sans contrôle → backdoors C&C",
          "Calcul incorrect des buffers (surtout en C) → failles exploitables",
        ]},
        { type: "h", text: "3. Porosité des protections" },
        { type: "list", items: [
          "Ne pas contrôler les autorisations et authentifications affectées aux données critiques",
          "Placer les droits d'accès directement dans le code source",
          "Utiliser des algorithmes de chiffrement déjà cassés",
          "Ne pas utiliser de \"salt\" dans les calculs de hash",
          "Droits trop exagérés ou trop insuffisants (concept \"moindre privilège\")",
        ]},
        { type: "note", variant: "success", title: "Je retiens — Code sécurisé", text: "Le SANS est l'institut de référence en sécurité du code. 3 grandes familles d'erreurs : interactions non sécurisées, mauvaise gestion des ressources, porosité des protections." },
      ],
    },
    {
      id: "cyber-gestion-mots-de-passe",
      title: "Gestion des mots de passe",
      blocks: [
        { type: "p", text: "Un utilisateur doit se connecter à 3 types de ressources : applications professionnelles, réseaux sociaux, sites Internet. Le nombre de credentials est tellement élevé qu'il est impossible de tous les mémoriser." },
        { type: "h", text: "Que faut-il faire ?" },
        { type: "p", text: "Imposer une charte de sécurité courte et percutante, puis associer des technologies plus robustes." },
        { type: "h", text: "Règles de base (ANSSI)" },
        { type: "list", items: [
          "Choisir des mots de passe différents pour des systèmes distincts (ne pas utiliser le même identifiant pour messageries personnelle et professionnelle)",
          "Ne pas lier le mot de passe à son identité (compagnie, date de naissance, prénom, conjoint…)",
          "Ne jamais demander à un tiers de créer ces identités",
          "Changer immédiatement le mot de passe par défaut des ressources",
          "Renouveler à une fréquence raisonnable (3 mois = bon compromis)",
          "Ne jamais écrire les identités sur papier ni post-it",
          "Ne jamais communiquer les mots de passe par messagerie (supprimer les mails de création)",
          "Configurer les logiciels/browser pour qu'ils ne se souviennent pas des mots de passe",
          "Utiliser un gestionnaire de mots de passe (IAM ou logiciel dédié)",
        ]},
        { type: "h", text: "Méthodes mnémotechniques" },
        { type: "p", text: "Méthode poème + recette de cuisine : prendre les premières lettres de chaque mot d'un vers connu, puis appliquer une \"recette\" personnelle (remplacer certaines lettres par des chiffres selon leur position dans l'alphabet, alterner minuscules/majuscules) pour obtenir un mot de passe fort mais mémorisable." },
        { type: "p", text: "Méthode phrase-clé + décalage mensuel : partir d'une phrase mnémotechnique personnelle, en garder les initiales, puis appliquer un décalage qui change chaque mois (ex : décalage d'une position en janvier), ce qui permet de renouveler régulièrement le mot de passe tout en gardant une méthode facile à retenir." },
        { type: "h", text: "Les gestionnaires de mots de passe sécurisés" },
        { type: "table", headers: ["Gestionnaire", "Description"], rows: [
          ["KeePass", "Open-Source, chiffrement AES+Twofish, local et offline, générateur de mots de passe"],
          ["Dashlane", "Propriétaire, local (SQLite SQLCipher), synchronisation Cloud, audit de mots de passe"],
          ["1Password", "AgileBits (canadien), payant, chiffrement AES 256 bits"],
          ["LastPass", "Uniquement en ligne, offre gratuite (stockage AES 256 bits), synchronisation payante"],
        ]},
        { type: "note", variant: "success", title: "Je retiens — Mots de passe", text: "Imposer une charte de sécurité avec règles de base. L'ANSSI rappelle les règles simples et de bon sens. Utiliser des moyens mnémotechniques. Faire appel à un gestionnaire de mots de passe." },
      ],
    },
    {
      id: "cyber-principes-authentification",
      title: "Principes d'authentification (AHA, URI, OID, UUID)",
      blocks: [
        { type: "p", text: "AHA (Authentification Habilitations Accès) regroupe quatre grands domaines :" },
        { type: "table", headers: ["Domaine", "Description"], rows: [
          ["Identification libre", "Chaîne de caractères choisie pour désigner un usager"],
          ["Authentification standardisée", "Adresse MAC inscrite en dur dans une machine"],
          ["Authentification statique", "Format respecté : URI, OID, UUID"],
          ["Authentification dynamique", "Application sollicite un service de génération de token ou variable de session"],
        ]},
        { type: "h", text: "L'authentification des entités" },
        { type: "list", items: [
          "Entité = objet de l'identification (personne physique/morale, machine, application)",
          "Identité = ensemble d'attributs par lesquels l'entité est connue (une même entité peut avoir plusieurs identités)",
          "Identifiant = information unique, sécurisée et universelle",
        ]},
        { type: "p", text: "Le triptyque entité + identité + identifiant doit être unique. Qualités requises d'un identifiant : capacité à être protégé, unicité (probabilité d'homonymie négligeable), universalité (valable partout dans le monde)." },
        { type: "h", text: "L'identification dynamique" },
        { type: "p", text: "Dans un système de fédération d'identités, un token est généré pour passer d'un domaine à l'autre. L'authentification est dynamique car le token change à chaque session, bien qu'il se fonde sur un identifiant immuable." },
        { type: "h", text: "L'authentification technique sur Internet — URI" },
        { type: "p", text: "L'URI (Uniform Resource Identifier) est un format d'identification conforme à un standard Internet (sous responsabilité de l'IANA). Plus de 340 formats spécifiques existent." },
        { type: "code", filename: "uri-structure.txt", language: "text", code: `Structure : <nom_schéma>:<partie_hiérarchique>[?<requête>][#<fragment>]

Exemples :
dns:server.example.org?type=CERT
file://server.exemple.com/Share/path/to/monFichier.txt
geo:41.465422,118.388854;u=35
https://www.server.com
ldap://ldap.server.com:389/
mailto:addr1@server.com
sip:marcel@server.com?subject=projet%20x&priority=urgent
sms:+33123456789,33987654321
snmp://testeur1@server.com:8161/bridge1;800002b804616263` },
        { type: "p", text: "Avantage : pas de doublon possible. Inconvénient : phraséologie lourde parfois obscure." },
        { type: "h", text: "OID et les annuaires LDAP" },
        { type: "p", text: "L'OID (Object Identifier) identifie un objet par un nom et une séquence de chiffres séparés par un point. Représentation strictement hiérarchique (arborescence). Décrit par la RFC 2256, issu du schéma X500, tenu à jour par l'IANA." },
        { type: "code", filename: "oid-exemples.txt", language: "text", code: `2.16.124   → Canada
2.16.250   → France
2.16.840   → USA
1.3.14.3.2.26   → SHA1
2.16.840.1.101.3.4.1   → AES (USA)` },
        { type: "p", text: "Sert surtout pour SNMP (supervision réseau) et bases de données MIB (CMDB ITIL)." },
        { type: "h", text: "Les formats UUID" },
        { type: "p", text: "Un UUID (Universally Unique Identifier) est codé sur 16 octets (32 chiffres hexadécimaux) en 5 groupes séparés par des tirets. Microsoft l'appelle GUID." },
        { type: "code", filename: "uuid-exemple.txt", language: "text", code: `123d4567-e12c-12d3-f456-123456789123` },
        { type: "table", headers: ["Format", "Description"], rows: [
          ["Format 1", "Basé sur date/heure + adresse MAC — 12 derniers caractères identiques pour une même machine"],
          ["Format 4", "Totalement aléatoire — le plus utilisé — un très grand nombre de combinaisons possibles"],
          ["Format 3", "Permanent, hashage MD5 + namespace"],
          ["Format 5", "Permanent, hashage SHA1 + namespace (meilleure garantie)"],
        ]},
        { type: "p", text: "Format 4 et risque de doublon : même à un rythme très élevé de génération, le risque de collision reste extrêmement faible sur plusieurs décennies, mais non nul — on évite donc de l'utiliser pour identifier de façon absolue une personne (ex : un électeur)." },
        { type: "note", variant: "success", title: "Je retiens — Authentification", text: "4 domaines : identification libre, authentification standardisée, statique, dynamique. Ces 4 niveaux peuvent être concentrés dans un token changeant à chaque session. L'URI est un format d'identification conforme à un standard Internet." },
      ],
    },
    {
      id: "cyber-oauth-openid",
      title: "OAuth et OpenID Connect",
      blocks: [
        { type: "p", text: "Protocoles clés pour accéder aux ressources Internet en respectant les droits de propriété et s'authentifier. Ils sont indissociables dans le paysage AHA." },
        { type: "list", items: [
          "OAuth traite le problème de l'accès par une application à une ressource hébergée par un serveur",
          "OpenID Connect est une surcouche à OAuth qui ajoute le traitement des authentifications",
        ]},
        { type: "h", text: "OAuth 2.0 et la délégation d'autorisation" },
        { type: "p", text: "Conçu chez Twitter en 2006, en évolution de protocoles propriétaires antérieurs (AuthSub chez Google, BBAuth chez Yahoo!, OpenAuth chez AOL)." },
        { type: "p", text: "Cas d'usage : un utilisateur veut s'identifier avec son UserID/Password Facebook dans une application web tierce → l'application doit récupérer ses credentials en délégation, sans jamais voir le mot de passe original." },
        { type: "h", text: "Les 4 acteurs OAuth" },
        { type: "table", headers: ["Acteur", "Description"], rows: [
          ["Resource Owner", "Propriétaire des ressources protégées"],
          ["Resource Server", "Héberge les ressources protégées (Facebook, Google…)"],
          ["Client", "Application qui demande l'accès aux ressources (côté serveur PHP ou JavaScript mobile)"],
          ["Authorization Server", "Délivre les jetons d'accès après autorisation du propriétaire"],
        ]},
        { type: "h", text: "Les 2 types de jetons" },
        { type: "table", headers: ["Jeton", "Description"], rows: [
          ["Jeton d'accès", "Permet d'accéder à la ressource — limité dans le temps et en périmètre"],
          ["Jeton de rafraîchissement", "Renouvelle le jeton d'accès en fin de vie"],
        ]},
        { type: "h", text: "Les 4 scénarios OAuth 2.0" },
        { type: "table", headers: ["Scénario", "Description", "Usage"], rows: [
          ["Authorization Code Grant", "Client confidentiel — code échangé contre token", "Application serveur voulant accéder aux services d'un usager"],
          ["Implicit Grant", "Clients publics ne pouvant pas garantir la confidentialité", "JavaScript côté client, mobile"],
          ["Resource Owner Password Credentials Grant", "Identifiants du propriétaire — application et serveur auth = même entreprise", "—"],
          ["Client Credentials Grant", "Uniquement application cliente + serveur auth (\"two-legged OAuth\")", "Restrictions d'usage"],
        ]},
        { type: "h", text: "Mécanisme \"Autorisation avec un code\" (le plus courant)" },
        {
          type: "diagram",
          content: `Vous (Resource Owner)
      │ redirigé vers
      ▼
[Serveur d'autorisation Facebook]
      │ vous acceptez l'accès
      │ → code émis vers le site web
      ▼
[Site web client] ←→ échange code contre token avec Facebook
      │ token reçu et stocké côté serveur (invisible pour vous)
      ▼
Accès à votre profil Facebook`,
        },
        { type: "code", filename: "jetons-oauth-exemple.json", language: "json", code: `{
  "access_token": "2c68b64436f611e1-b5bc-67bcc68e2f43",
  "refresh_token": "67151562369411e18c88973c3788d6b1"
}` },
        { type: "h", text: "La complémentarité OAuth avec SAML" },
        { type: "p", text: "OAuth et SAML ne sont pas concurrents — ils sont parfaitement complémentaires. Ex : autoriser un utilisateur avec ses identifiants Facebook (OAuth), puis véhiculer ces credentials dans le système via SAML." },
        { type: "h", text: "OpenID Connect" },
        { type: "p", text: "Couche protocolaire au-dessus d'OAuth (fondation OpenID). Apporte une fonction d'authentification à OAuth (qui n'assure que la protection des ressources privées)." },
        { type: "list", items: [
          "Vérifie l'identité d'un usager auprès d'un serveur d'autorisation",
          "Obtient des informations stockées au format JWT (JSON Web Token)",
          "Regroupe OAuth et ses fonctions dans une seule API → évite 2 appels distincts",
        ]},
        { type: "p", text: "Ballet à 3 partenaires : usager + application web cliente + serveur d'autorisation." },
        { type: "note", variant: "success", title: "Je retiens — OAuth & OpenID", text: "OAuth = 4 acteurs : Resource Owner, Resource Server, Client, Authorization Server. OpenID Connect = couche protocolaire apportant une fonction d'authentification à OAuth." },
      ],
    },
    {
      id: "cyber-authentification-biometrique",
      title: "L'authentification biométrique des mobiles",
      blocks: [
        { type: "p", text: "Un processus à double détente : s'assurer que l'utilisateur est autorisé à se servir du mobile, puis garantir qu'il a le droit d'accéder aux applications." },
        { type: "h", text: "La reconnaissance des empreintes digitales" },
        { type: "p", text: "La plus répandue. L'empreinte enregistrée n'est pas une image — c'est la liste de points singuliers (ruptures de ligne, courbures inopinées, blancs dans le tracé), généralement entre 8 et 24 points." },
        { type: "p", text: "Historique : Apple depuis iPhone 5S (bouton du bas), Samsung depuis Galaxy S5 (capteur sous l'écran — efficacité critiquée)." },
        { type: "note", variant: "warning", title: "Problème documenté", text: "Les empreintes sont relativement faciles à copier : le groupe \"Chaos Computer Club\" a reconstitué, à partir d'une simple photo haute résolution, l'empreinte digitale d'une ministre allemande (Ursula von der Leyen) — un cas largement rapporté dans la presse spécialisée." },
        { type: "p", text: "Évolution : empreintes 3D par ultrasons (recherche universitaire) — image 3D avec creux et sillons, plus difficile à falsifier." },
        { type: "h", text: "La reconnaissance de l'iris de l'œil" },
        { type: "p", text: "L'iris = zone de l'œil ressemblant à un kaléidoscope avec au centre la pupille. Ne change jamais, très difficile à imiter." },
        { type: "p", text: "Solution industrielle (Fujitsu) : émetteur LED + caméra infrarouge → image de l'iris en 150 ms, taux d'erreur de l'ordre de 1 pour 10 millions. Fonctionne même avec l'œil mal aligné, l'utilisateur qui bouge, la pupille dilatée, mauvaises conditions lumineuses." },
        { type: "p", text: "Falsification : difficile (contrairement à la reconnaissance faciale) — mais le logiciel de reconnaissance lui-même pourrait être piraté." },
        { type: "h", text: "Les vaisseaux sanguins de l'œil" },
        { type: "p", text: "La partie blanche de l'œil est sillonnée de veines formant une signature immuable. Des technologies commerciales scannent les veines en moins d'une seconde (reconnaissance complète en quelques secondes)." },
        { type: "note", variant: "success", title: "Je retiens — Authentification biométrique", text: "La reconnaissance des empreintes digitales est la méthode la plus courante. L'avantage principal de la reconnaissance de l'iris : ne change jamais, presque impossible à imiter." },
      ],
    },
    {
      id: "cyber-donnees-personnelles-rgpd",
      title: "Données personnelles — l'impossible quête",
      blocks: [
        { type: "p", text: "Les données personnelles concernent une personne physique identifiable directement ou indirectement." },
        { type: "h", text: "Données personnelles sensibles (définition britannique)" },
        { type: "list", items: [
          "Origine raciale ou ethnique",
          "Opinions politiques",
          "Croyances religieuses",
          "Adhésion à un syndicat",
          "Santé mentale ou physique",
          "Vie sexuelle",
          "Condamnations judiciaires",
        ]},
        { type: "h", text: "Le problème" },
        { type: "list", items: [
          "Usages des données par des entreprises implantées dans des pays étrangers",
          "Prestataires Cloud manipulant des données personnelles sans transparence (réseaux sociaux, suites bureautiques Cloud, sites e-commerce)",
          "Tensions réglementaires entre USA / Union Européenne / Chine / Japon",
        ]},
        { type: "h", text: "Le Privacy Shield" },
        { type: "p", text: "A succédé à l'accord \"Safe Harbor\" (an 2000) après son invalidation. Ce nouvel accord a été critiqué pour offrir peu de contraintes réelles : autocertification des entreprises américaines, exemptions pour les agences de sécurité nationale, médiateur nommé côté américain, procédures de plainte jugées trop complexes pour aboutir en pratique." },
        { type: "h", text: "Le RGPD (Règlement Général sur la Protection des Données)" },
        { type: "p", text: "En vigueur depuis le printemps 2018 pour toutes les entreprises européennes (et leurs filiales étrangères). Il repose sur 6 injonctions :" },
        { type: "table", headers: ["N°", "Obligation", "Description"], rows: [
          ["1", "Informer", "Registre détaillé des traitements effectués sur les données"],
          ["2", "Sécurité et confidentialité", "Outils de chiffrement, sauvegardes sécurisées"],
          ["3", "Privacy by Design", "Tenir compte de la contrainte dès la conception des logiciels"],
          ["4", "Informer en cas de vol", "Notifier sous 72 heures les autorités de contrôle (et propriétaires des données)"],
          ["5", "Droit à l'oubli et portabilité", "Quasiment impossible à garantir en pratique"],
          ["6", "Nommer un DPO", "Data Protection Officer — veille à la bonne application du RGPD"],
        ]},
        { type: "h", text: "Sanctions" },
        { type: "list", items: [
          "Petite entreprise : amende pouvant aller jusqu'à 20 millions €",
          "Grande entreprise : jusqu'à 4% du chiffre d'affaires mondial",
        ]},
        { type: "note", variant: "success", title: "Je retiens — Données personnelles", text: "Les données personnelles concernent une personne physique identifiable directement ou indirectement. Le RGPD est fondé sur 6 injonctions : informer, sécurité, Privacy by Design, informer en cas de vol, droit à l'oubli/portabilité, nommer un DPO." },
      ],
    },
    {
      id: "cyber-securite-embarquee-certificats-bdd",
      title: "La sécurité embarquée : certificats et bases de données",
      blocks: [
        { type: "h", text: "Le principe du certificat" },
        { type: "p", text: "Le certificat numérique = passeport qui permet à un visiteur de s'assurer qu'il est bien sur le site souhaité et que l'entreprise est bien celle qu'elle prétend être. Il est fourni par un tiers certificateur (autorité de confiance)." },
        { type: "h", text: "Contenu d'un certificat" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│           CERTIFICAT NUMÉRIQUE              │
├─────────────────────────────────────────────┤
│ N° de version                               │
│ N° de série (fourni par le tiers)           │
│ Algorithme de signature (SHA1 ou SHA2)      │
│ DN LDAP du délivreur                        │
│ Dates de validité (Not Before / Not After)  │
│ DN du détenteur                             │
│ Clé publique du certifié (algorithme + clé) │
│ Informations optionnelles                   │
│ Extensions optionnelles                     │
│ Signature du certificat                     │
└─────────────────────────────────────────────┘`,
        },
        { type: "p", text: "Processus de signature : calcul du hash du certificat (SHA1 ou SHA2), puis chiffrement du hash avec la clé privée du certificateur → signature." },
        { type: "h", text: "Types de certificats SSL/TLS" },
        { type: "table", headers: ["Type", "Description", "Délai", "Niveau de confiance"], rows: [
          ["DV (Domain Validation)", "Envoyer une adresse email valide", "Quelques minutes", "Minimum"],
          ["OV (Organization Validation)", "Vérifications simples sur l'organisation", "4-5 jours", "Intermédiaire"],
          ["EV (Extended Validation)", "Véritable audit — existence légale, physique, opérationnelle, droit au nom de domaine", "~1 mois", "Élevé (URL fond vert historiquement)"],
        ]},
        { type: "note", variant: "warning", text: "Un certificat DV signifie seulement qu'un pirate a pu fournir une adresse email associée à un nom de domaine qu'il contrôle — le niveau de confiance réel est donc minimal." },
        { type: "h", text: "Contrôle du certificat" },
        {
          type: "diagram",
          content: `[Client reçoit le certificat du site]
       │
       ├─► Recalcule le hash du certificat (SHA1 ou SHA2)
       │
       ├─► Récupère le certificat du certificateur (contient sa clé publique)
       │
       ├─► Déchiffre la signature avec la clé publique du certificateur
       │
       └─► Si les deux résultats sont identiques → certificat valable ✅`,
        },
        { type: "h", text: "Certificats gratuits" },
        { type: "list", items: [
          "Let's Encrypt — certificats DV gratuits, soutenu par de grands acteurs du secteur — installation en quelques dizaines de secondes (vs plusieurs heures pour un certificat traditionnel). Recommandé uniquement pour applications internes ou sites peu sensibles",
          "D'autres prestataires gratuits existent — vérifier systématiquement leur crédibilité",
          "Certificats auto-signés — via PKI interne — uniquement pour usage interne",
        ]},
        { type: "h", text: "La sécurité embarquée dans les bases de données" },
        { type: "h", text: "Les 3 grandes techniques" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│         SÉCURITÉ EMBARQUÉE BDD                               │
├──────────────────┬───────────────────────────────────────────┤
│ Chiffrement      │ AES symétrique (128/192/256 bits) sur      │
│                  │ colonne, table ou base entière             │
│                  │ (solutions type Oracle Advanced Security,  │
│                  │ SQL Server Always Encrypted…)               │
├──────────────────┼───────────────────────────────────────────┤
│ Contrôle         │ Calcul de hash (SHA ou MD5) — recalculé   │
│ d'intégrité      │ à chaque utilisation pour vérifier que    │
│                  │ les données n'ont pas été modifiées        │
├──────────────────┼───────────────────────────────────────────┤
│ Masquage         │ Afficher des XXXXX ou données partielles   │
│ sélectif         │ si le requêteur n'est pas autorisé         │
└──────────────────┴───────────────────────────────────────────┘`,
        },
        { type: "h", text: "Chiffrement — exemple Oracle (Advanced Security)" },
        { type: "p", text: "Algorithme symétrique AES (128, 192 ou 256 bits). Clés gérées par des \"master keys\" stockées dans un coffre-fort logiciel dédié (type Oracle Wallet ou Oracle Key Vault)." },
        { type: "note", variant: "warning", title: "Problème du chiffrement homomorphe", text: "Il est aujourd'hui impossible d'appliquer un traitement algorithmique sur une donnée déjà chiffrée sans la déchiffrer au préalable — un problème non résolu en pratique en raison du temps de traitement nécessaire." },
        { type: "h", text: "Contrôle d'intégrité — exemples SQL" },
        { type: "code", filename: "oracle-hash.sql", language: "sql", code: `-- Calcul du hash MD5 d'une colonne (Oracle)
SELECT STANDARD_HASH('nom', 'MD5') FROM CLIENT;
-- Résultat : C47D187067C6CF953245F128B5FDE62A
-- Méthodes disponibles : SHA1, SHA256, SHA384, SHA512, MD5` },
        { type: "code", filename: "sqlserver-hash.sql", language: "sql", code: `-- SQL Server
CREATE TABLE dbo.Test1 (c1 nvarchar(50));
INSERT dbo.Test1 VALUES ('This is a test.');
INSERT dbo.Test1 VALUES ('This is test 2.');
SELECT HASHBYTES('SHA1', c1) FROM dbo.Test1;
-- Résultat :
-- 0x0E7AAB0B4FF0FD2DFB4F0233E2EE7A26CD08F173
-- 0xF643A82F948DEFB922B12E50B950CEE130A934D` },
        { type: "p", text: "Cas d'usage : signer numériquement un objet de base avec la clé privée d'un utilisateur → certifier que la mise à jour a été effectuée par le bon usager." },
        { type: "h", text: "Masquage sélectif de données — SQL Server" },
        { type: "code", filename: "sqlserver-masquage.sql", language: "sql", code: `-- Création d'une table avec masquage
CREATE TABLE EmpInfo (
  EmpID INT PRIMARY KEY,
  FirstName NVARCHAR(50) NOT NULL,
  LastName NVARCHAR(50) MASKED WITH FUNCTION ('default()') NOT NULL,
  Birthdate DATE MASKED WITH FUNCTION ('default()') NOT NULL,
  EmailAddress NVARCHAR(50),
  NatID NVARCHAR(15),
  PhoneNumber NVARCHAR(25)
);

-- Mise à jour du masque email
ALTER TABLE EmpInfo ALTER COLUMN EmailAddress NVARCHAR(50)
  MASKED WITH FUNCTION ('email()') NULL;` },
        { type: "h", text: "Fonctions de masquage disponibles" },
        { type: "table", headers: ["Fonction", "Résultat"], rows: [
          ["default()", "XXXXX pour chaînes, 01011900 pour dates, 0 pour numériques"],
          ["email()", "Première lettre + XXXX.com"],
          ["random(m,n)", "Nombre aléatoire entre m et n"],
          ["partial(prefix, padding, suffix)", "Affiche début et fin, masque le milieu"],
        ]},
        { type: "p", text: "Exemple pour une carte de crédit : XXXXXXXXX1234." },
        { type: "h", text: "Row-Level Security (SQL Server)" },
        { type: "list", items: [
          "Prédicat de filtre → filtre les lignes pour SELECT, UPDATE, DELETE",
          "Prédicat BLOCK → bloque explicitement les opérations d'écriture (AFTER INSERT, BEFORE UPDATE…)",
        ]},
        { type: "note", variant: "success", title: "Je retiens — Sécurité embarquée", text: "3 grandes techniques pour protéger les bases de données : chiffrement, masquage sélectif, contrôle d'intégrité. Le certificat numérique = passeport permettant de vérifier l'identité du site/entreprise." },
      ],
    },
  ],
};
