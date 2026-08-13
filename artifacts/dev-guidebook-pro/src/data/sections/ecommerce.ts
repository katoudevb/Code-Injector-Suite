import type { Section } from "../types";
import { laConsoleArticlesEcommerce } from "./laConsoleArticlesEcommerce";

export const ecommerce: Section = {
  id: "ecommerce",
  title: "E-commerce",
  icon: "ShoppingCart",
  tags: ["php"],
  subsections: [
    {
      id: "ecommerce-structure-pages",
      title: "Structure des pages",
      blocks: [
        { type: "h", text: "1. Page d'accueil" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────┐
│                  HEADER                      │
│  Logo │ Menu navigation │ 🛒 │ Connexion     │
├──────────────────────────────────────────────┤
│            Bannières / Hero section          │
├──────────────────────────────────────────────┤
│         Catégories produits                  │
├──────────────────────────────────────────────┤
│  Bloc nouveautés  │  Bloc promotions         │
├──────────────────────────────────────────────┤
│       Catégories spéciales / Mis en avant    │
├──────────────────────────────────────────────┤
│           Témoignages clients                │
├──────────────────────────────────────────────┤
│           CTA (Voir produits...)             │
├──────────────────────────────────────────────┤
│   FOOTER: Newsletter │ Avis │ Liens utiles   │
└──────────────────────────────────────────────┘`,
        },
        { type: "h", text: "2. Pages catégories" },
        { type: "list", items: [
          "Titre de la catégorie",
          "Filtres (prix, marque, disponibilité…)",
          "Tri (prix, popularité, nouveautés…)",
          "Fil d'Ariane (breadcrumb)",
          "Grille de produits",
        ]},
        { type: "h", text: "3. Page produit (détail produit)" },
        { type: "list", items: [
          "Images produit",
          "Nom du produit",
          "Prix",
          "Description détaillée",
          "Stock / disponibilité",
          "Variantes (taille, couleur…)",
          'Bouton "Ajouter au panier"',
          "Avis clients",
          "Remises / promotions",
          "Produits similaires",
          "Caractéristiques techniques",
        ]},
        { type: "h", text: "4. Panier" },
        { type: "list", items: [
          "Liste des produits : Nom, Photo, Prix, Quantité (modifiable)",
          "Code promo",
          "Total TTC",
          'Bouton "Commander"',
        ]},
        { type: "h", text: "5. Commande / Checkout" },
        { type: "list", items: [
          "Résumé commande",
          "Coordonnées client",
          "Adresse de livraison",
          "Paiement",
          "Confirmation de commande",
          "Numéro de commande",
          "Message de remerciement",
          "Lien de suivi / espace client",
        ]},
        { type: "h", text: "6. Utilisateurs" },
        { type: "list", items: [
          "Connexion / Inscription",
          "Mon compte : Infos personnelles, Adresses, Commandes",
          "Mot de passe oublié / réinitialisation",
        ]},
        { type: "h", text: "7. Pages techniques" },
        { type: "list", items: [
          "Page 404 (page introuvable)",
          "Page maintenance",
          "Bandeau cookies (RGPD)",
        ]},
      ],
    },
    {
      id: "ecommerce-criteres-administrateur",
      title: "Critères e-commerce — Administrateur",
      blocks: [
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "Gestion centralisée et facilitée",
          "Ventes continues (24h/24, 7j/7)",
          "Supervision à distance (gestion depuis n'importe où)",
          "Suivi en temps réel des commandes et stocks",
          "Automatisation de certaines tâches (facturation, emails, etc.)",
        ]},
        { type: "h", text: "Inconvénients" },
        { type: "list", items: [
          "Complexité technique (mise en place et gestion)",
          "Maintenance continue (mises à jour, bugs, sécurité)",
          "Gestion des retours et litiges clients",
          "Investissement initial élevé (développement, hébergement, outils)",
          "Besoin de compétences techniques ou prestataires externes",
        ]},
      ],
    },
    {
      id: "ecommerce-boutique-en-ligne",
      title: "Boutique en ligne",
      blocks: [
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "Portée commerciale étendue (clients nationaux et internationaux)",
          "Image de marque renforcée et moderne",
          "Réduction des coûts physiques (loyer, personnel, magasin)",
          "Meilleure performance commerciale (volume de ventes plus élevé)",
          "Disponibilité permanente des produits",
        ]},
        { type: "h", text: "Inconvénients" },
        { type: "list", items: [
          "Forte concurrence en ligne",
          "Absence d'expérience physique du produit (pas de contact direct)",
          "Frais logistiques (livraison, retours, stockage)",
          "Problèmes de confiance des clients (sécurité, qualité)",
          "Dépendance à la connexion internet",
          "Sécurité des données (risques de piratage)",
          "Contraintes réglementaires (RGPD, fiscalité, droit du commerce)",
        ]},
      ],
    },
    {
      id: "ecommerce-types-paiement",
      title: "Types de paiement en ligne",
      blocks: [
        { type: "h", text: "Passerelles de paiement" },
        { type: "p", text: "Passerelles tierces : PayPal, Stripe, etc. — Services externes qui gèrent le paiement pour le marchand." },
        { type: "p", text: "Passerelles bancaires : Systempay, Paybox, etc. — Solutions directement liées aux banques." },
        { type: "h", text: "Types d'intégration de paiement" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Paiement auto-hébergé", "Formulaire intégré au site, l'utilisateur reste sur le site"],
          ["Paiement hébergé", "Redirection vers une page externe sécurisée (ex: PayPal checkout)"],
        ]},
        { type: "h", text: "Rôle d'une passerelle de paiement" },
        { type: "list", items: [
          "Validation des informations bancaires",
          "Transmission chiffrée et sécurisée des données",
          "Retour du statut de la transaction au site marchand (succès, échec, en attente)",
        ]},
        { type: "h", text: "Critères des passerelles de paiement" },
        { type: "p", text: "Avantages : sécurité renforcée, augmentation des ventes, facilité d'utilisation, large choix de moyens de paiement (CB, wallet, etc.)" },
        { type: "p", text: "Inconvénients : frais de transaction, dépendance à un prestataire tiers, expérience utilisateur parfois limitée (redirection), complexité d'intégration et conformité technique" },
        { type: "h", text: "Coût des passerelles de paiement" },
        { type: "list", items: [
          "Pourcentage sur chaque transaction (ex : 2,9 %)",
          "Frais fixes par transaction (ex : 0,30 €)",
          "Modèle hybride fréquent",
        ]},
      ],
    },
    {
      id: "ecommerce-solutions-saas-shopify",
      title: "Solutions SaaS (ex : Shopify)",
      blocks: [
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "Interface intuitive",
          "Installation rapide",
          "Bonne scalabilité (évolutif)",
          "Écosystème riche (plugins, apps)",
          "Support 24/7",
          "Sécurité intégrée",
        ]},
        { type: "h", text: "Inconvénients" },
        { type: "list", items: [
          "Coût récurrent (abonnement)",
          "SEO parfois limité",
          "Thèmes et apps souvent payants",
          "Support parfois en anglais",
          "Personnalisation limitée",
        ]},
      ],
    },
    {
      id: "ecommerce-types-produits",
      title: "Types de produits",
      blocks: [
        { type: "table", headers: ["#", "Type", "Description"], rows: [
          ["1", "Produits simples", "Produit unique, sans options ni variations (livre, t-shirt, e-book)"],
          ["2", "Produits téléchargeables", "Numérique, livré par téléchargement (PDF, musique, logiciel)"],
          ["3", "Produits variables", "Avec variations (prix/référence/stock différent par variante)"],
          ["4", "Produits groupés", "Ensemble de produits simples vendus ensemble, achetables séparément"],
          ["5", "Produits externes / affiliés", "Vendu sur un autre site, redirection plateforme externe"],
          ["6", "Produits configurables", "Options combinées avancées (RAM, stockage, processeur)"],
          ["7", "Produits par abonnement", "Facturation récurrente (mensuelle/annuelle)"],
          ["8", "Produits personnalisés", "Le client ajoute ses options (texte, gravure, image)"],
          ["9", "Précommandes", "Vendu avant disponibilité, livraison différée"],
          ["10", "Produits en rupture / hors stock", "Indisponible temporairement, commande en attente possible"],
          ["11", "Produits exclusifs / limités", "Disponibilité limitée, effet de rareté, édition limitée"],
          ["12", "Produits complémentaires", "Suggérés avec un article principal, augmente panier moyen"],
          ["13", "Produits alternatifs / premium", 'Alternatives plus chères, positionnement "upgrade"'],
        ]},
      ],
    },
    {
      id: "ecommerce-solutions-saas-wizishop",
      title: "Critères de solutions SaaS (ex : Wizishop)",
      blocks: [
        { type: "p", text: "Les solutions SaaS (Software as a Service) comme Wizishop permettent de créer une boutique en ligne sans gérer l'hébergement ni la technique." },
        { type: "h", text: "Avantages" },
        { type: "list", items: [
          "Interface accessible et simple d'utilisation",
          "Essai gratuit possible selon les offres",
          "Support en français",
          "Outils marketing intégrés",
          "Maintenance et sécurité gérées par la plateforme",
        ]},
        { type: "h", text: "Inconvénients" },
        { type: "list", items: [
          "SEO parfois limité par rapport à des solutions comme WordPress",
          "Commission sur les ventes (selon les formules)",
          "Personnalisation plus restreinte",
          "Coûts évolutifs (abonnement + commissions)",
          "Moins d'applications/extensions disponibles",
        ]},
      ],
    },
    ...laConsoleArticlesEcommerce,
  ],
};
