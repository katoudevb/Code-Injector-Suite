import type { Section } from "../types";

export const reseaux: Section = {
  id: "reseaux",
  title: "Réseaux",
  icon: "Network",
  tags: ["js"],
  subsections: [
    {
      id: "reseaux-modele-osi",
      title: "Modèle OSI + TCP/IP",
      blocks: [
        { type: "p", text: "Le modèle OSI (Open Systems Interconnection) est un modèle standard établi par l'ISO. Il ne précise pas exactement quels protocoles sont utilisés dans chaque couche." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│                    MODÈLE OSI — 7 COUCHES                   │
├────┬──────────────────┬────────────────────────────────────┤
│  7 │ APPLICATION      │ HTTP, HTTPS, FTP, SMTP, DNS…       │
├────┼──────────────────┼────────────────────────────────────┤
│  6 │ PRÉSENTATION     │ SSL/TLS, ASCII, JPEG…              │
├────┼──────────────────┼────────────────────────────────────┤
│  5 │ SESSION          │ NetBIOS, RPC…                      │
├────┼──────────────────┼────────────────────────────────────┤
│  4 │ TRANSPORT        │ TCP, UDP                           │
├────┼──────────────────┼────────────────────────────────────┤
│  3 │ RÉSEAU           │ IP, ICMP                           │
├────┼──────────────────┼────────────────────────────────────┤
│  2 │ LIAISON DONNÉES  │ Ethernet, ARP                      │
├────┼──────────────────┼────────────────────────────────────┤
│  1 │ PHYSIQUE         │ Câble Ethernet, Wi-Fi, Fibre, BT   │
└────┴──────────────────┴────────────────────────────────────┘
     ▲ Couches hautes (5–7)
     ▲ Couches basses (1–4)`,
        },
        { type: "h", text: "Couches basses (1 à 4)" },
        { type: "h", text: "Couche 1 — Physique" },
        { type: "p", text: "Décrit les caractéristiques physiques et les moyens utilisés pour transmettre les données. Exemples : câble Ethernet, Wi-Fi, fibre optique, Bluetooth." },
        { type: "h", text: "Couche 2 — Liaison de données" },
        { type: "p", text: "Communication entre machines sur un même réseau. Protocoles : Ethernet, ARP (Address Resolution Protocol)." },
        { type: "h", text: "Couche 3 — Réseau" },
        { type: "p", text: "Acheminement des paquets. Protocoles : IP (Internet Protocol), ICMP (Internet Control Message Protocol)." },
        { type: "note", variant: "info", text: "IP est très important : il permet l'adressage des paquets et leur arrivée à destination." },
        { type: "h", text: "Couche 4 — Transport" },
        { type: "p", text: "Gère la transmission entre deux machines." },
        { type: "table", headers: ["Protocole", "Caractéristiques"], rows: [
          ["TCP (Transmission Control Protocol)", "Connexion fiable, contrôle des erreurs"],
          ["UDP", "Plus rapide, moins fiable (streaming, vidéo…)"],
        ]},
        { type: "h", text: "Couches hautes (5 à 7)" },
        { type: "h", text: "Couche 5 — Session" },
        { type: "p", text: "Gestion des connexions. Exemples : NetBIOS, RPC (Remote Procedure Calls)." },
        { type: "h", text: "Couche 6 — Présentation" },
        { type: "p", text: "Format des données. Exemples : SSL / TLS, ASCII, JPEG." },
        { type: "h", text: "Couche 7 — Application" },
        { type: "p", text: "Protocoles utilisés par les applications. Exemples : HTTP / HTTPS, FTP, SMTP, DNS, TELNET, POP3, IMAP." },
        { type: "h", text: "Autres modèles réseau" },
        { type: "list", items: ["SNA", "AppleTalk"] },
      ],
    },
    {
      id: "reseaux-modele-tcpip",
      title: "Modèle TCP/IP",
      blocks: [
        { type: "p", text: "Le protocole le plus utilisé est TCP/IP. Il comporte 4 couches." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              MODÈLE TCP/IP — 4 COUCHES                      │
├────┬──────────────────┬────────────────────────────────────┤
│  4 │ APPLICATION      │ HTTP, FTP, DNS…                    │
├────┼──────────────────┼────────────────────────────────────┤
│  3 │ TRANSPORT        │ TCP (fiable) / UDP (rapide)        │
├────┼──────────────────┼────────────────────────────────────┤
│  2 │ INTERNET         │ IP, ICMP, ARP, PPP                 │
├────┼──────────────────┼────────────────────────────────────┤
│  1 │ ACCÈS RÉSEAU     │ Ethernet, Wi-Fi, Bluetooth…        │
└────┴──────────────────┴────────────────────────────────────┘`,
        },
        { type: "h", text: "1. Couche accès réseau" },
        { type: "p", text: "Décrit les caractéristiques physiques. Exemples : Ethernet, Wi-Fi, Bluetooth." },
        { type: "h", text: "2. Couche Internet" },
        { type: "list", items: [
          "IP : adressage des paquets",
          "ICMP : gestion des erreurs",
          "ARP : correspondance IP ↔ MAC",
          "PPP (Point to Point Protocol) : connexion distante par téléphone",
        ]},
        { type: "h", text: "3. Couche transport" },
        { type: "list", items: ["TCP : fiable, connexion établie", "UDP : rapide, peu de vérifications"] },
        { type: "h", text: "4. Couche application" },
        { type: "p", text: "HTTP, FTP, DNS, etc." },
      ],
    },
    {
      id: "reseaux-protocoles",
      title: "Protocoles réseau",
      blocks: [
        { type: "h", text: "Protocoles de la couche Internet / Réseau" },
        { type: "table", headers: ["Protocole", "Rôle"], rows: [
          ["IP", "Protocole principal — permet l'adressage des paquets"],
          ["ICMP", "Gestion des erreurs — envoi de messages d'erreur"],
          ["ARP", "Fait correspondre adresse IP ↔ adresse MAC"],
          ["PPP", "Connexion point à point distante"],
        ]},
        { type: "h", text: "Protocoles de transport" },
        { type: "table", headers: ["Protocole", "Rôle"], rows: [
          ["TCP", "Connexion entre 2 ordinateurs — fiable"],
          ["UDP", "Rapide — streaming / vidéoconférence"],
        ]},
        { type: "h", text: "Protocoles de la couche application" },
        { type: "table", headers: ["Protocole", "Rôle"], rows: [
          ["FTP", "Transfert de fichiers"],
          ["SMTP", "Envoi d'e-mails"],
          ["HTTP", "Navigation web"],
          ["DNS", "Traduit nom de domaine → IP"],
          ["TELNET", "Connexion à distance"],
          ["BGP / EGP", "Gestion du routage entre réseaux"],
          ["SNMP", "Gestion des équipements réseau"],
          ["POP3 / IMAP4", "Récupération des emails"],
        ]},
      ],
    },
    {
      id: "reseaux-communication-web",
      title: "Communication Web et Web services",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              COMMUNICATION FRONTEND ↔ BACKEND               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   FRONTEND (JS)           BACKEND                          │
│   ┌─────────────┐         ┌──────────────────┐            │
│   │ fetch()     │────────►│ Reçoit requête   │            │
│   │ Envoie      │  HTTP   │ HTTP             │            │
│   │ requête HTTP│◄────────│ Renvoie réponse  │            │
│   └─────────────┘         └──────────────────┘            │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Frontend (JS) : utilise fetch() — envoie des requêtes HTTP",
          "Backend : reçoit les requêtes HTTP — renvoie une réponse HTTP",
        ]},
        { type: "h", text: "Web services" },
        { type: "p", text: "Permettent la communication entre applications." },
        { type: "list", items: ["SOAP", "REST", "HTTP"] },
        { type: "p", text: "WSDL : décrit les services web — contient : méthodes, signatures, URL / ports." },
        { type: "h", text: "Fonctionnement d'un web service" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              FONCTIONNEMENT WEB SERVICE                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. Client envoie requête                                  │
│          │                                                  │
│          ▼                                                  │
│   2. Appel de procédure distante (RPC)                      │
│          │                                                  │
│          ▼                                                  │
│   3. Données échangées (souvent XML)                        │
│          │                                                  │
│          ▼                                                  │
│   4. Utilisation de SOAP ou HTTP                            │
└─────────────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "reseaux-iot",
      title: "IoT (Internet of Things)",
      blocks: [
        { type: "p", text: "Objets connectés à Internet avec échange d'informations via API ou web services." },
        { type: "h", text: "Contraintes IoT" },
        { type: "list", items: ["Couverture réseau", "Autonomie batterie", "Distance", "Coût"] },
        { type: "h", text: "Réseaux longue portée" },
        { type: "table", headers: ["Réseau", "Consommation", "Débit", "Portée ville", "Portée campagne"], rows: [
          ["Sigfox", "Basse", "10 à 100 bits/s", "~10 km", "~50 km"],
          ["LoRa", "Très basse", "0.3 à 50 kbps", "2 à 5 km", "jusqu'à 45 km"],
          ["GSM / 2G–5G", "Élevée", "Gros débit", "Réseau opérateurs", "Réseau opérateurs"],
          ["LTE-M", "Moyenne", "Moyen", "Basé sur 4G", "Basé sur 4G"],
          ["NB-IoT", "Basse", "Faible", "Basé sur infra 4G", "Basé sur infra 4G"],
          ["Wize", "Basse", "Faible", "Protocole ouvert", "Déploiement local"],
        ]},
        { type: "h", text: "Réseaux courte portée" },
        { type: "table", headers: ["Réseau", "Usage", "Portée / Débit"], rows: [
          ["Wi-Fi", "Usage général", "jusqu'à 600 Mbps"],
          ["Z-Wave", "Domotique", "~30m"],
          ["ZigBee", "Domotique + données", "courte portée"],
          ["Bluetooth", "Faible débit", "courte portée"],
          ["Wirepas", "Communication indoor", "intérieur"],
          ["RFID", "Identification radio", "très courte portée"],
          ["EnOcean", "Sans fil, sans batterie", "courte portée"],
        ]},
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│           COMPARATIF PORTÉE RÉSEAUX IoT                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Courte portée    │ Longue portée      │ Très longue       │
│  (< 100m)         │ (km)               │ (national)        │
│  ───────────────  │ ─────────────────  │ ──────────────    │
│  Wi-Fi            │ Sigfox             │ GSM/4G/5G         │
│  Bluetooth        │ LoRa               │ LTE-M             │
│  ZigBee           │ Wize               │ NB-IoT            │
│  Z-Wave           │                    │                   │
│  RFID             │                    │                   │
│  EnOcean          │                    │                   │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "IoT & programmation" },
        { type: "list", items: [
          "Node.js utilisé pour IoT",
          "Frameworks : Johnny-Five, Node-RED, ioTivity",
          "Scalabilité Node.js pour objets connectés",
        ]},
      ],
    },
    {
      id: "reseaux-dns",
      title: "DNS (Domain Name System)",
      blocks: [
        { type: "p", text: "Le DNS traduit les noms de domaine en adresses IP." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────┐
│              FONCTIONNEMENT DNS                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Navigateur                DNS                  Serveur    │
│   ┌──────────┐    ──────►  ┌───────┐  ──────►  ┌────────┐   │
│   │ google   │   "google.  │       │  190.1.0.1│        │   │
│   │ .com     │   com ?"    │  DNS  │◄──────────│ Web    │   │
│   └──────────┘   ◄──────   └───────┘           └────────┘   │
│                  190.1.0.1                                  │
│                                                             │
│   Système distribué + arborescence mondiale + cache (TTL)   │
└─────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Fonctionnement" },
        { type: "list", items: ["Système distribué", "Arborescence mondiale", "Cache DNS avec TTL (Time To Live)"] },
        { type: "h", text: "Adresses IP" },
        { type: "table", headers: ["Version", "Format", "Exemple"], rows: [
          ["IPv4", "4 nombres décimaux", "190.160.1.1"],
          ["IPv6", "8 groupes hexadécimaux", "2001:0db8:85a3:0000:0000:8a2e:0370:1334"],
        ]},
        { type: "h", text: "Enregistrements DNS" },
        { type: "table", headers: ["Type", "Rôle"], rows: [
          ["A", "IPv4"],
          ["AAAA", "IPv6"],
          ["CNAME", "Alias"],
          ["MX", "Mail"],
          ["NS", "Serveurs DNS"],
          ["SOA", "Info zone"],
          ["TXT", "Infos diverses (SPF, DKIM…)"],
          ["SRV", "Services spécifiques"],
          ["PTR", "Reverse DNS"],
        ]},
        { type: "h", text: "Serveurs DNS" },
        { type: "list", items: ["Primaire → copie originale", "Secondaire → copie répliquée"] },
        { type: "h", text: "Propagation DNS" },
        { type: "list", items: ["Cache DNS avec TTL", "Mise à jour jusqu'à 48h", "Impact sur disponibilité du site"] },
      ],
    },
  ],
};
