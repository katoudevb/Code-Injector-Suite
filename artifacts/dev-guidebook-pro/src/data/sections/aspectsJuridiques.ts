import type { Section } from "../types";

export const aspectsJuridiques: Section = {
  id: "aspects-juridiques",
  title: "Aspects juridiques d'un site internet",
  icon: "Scale",
  tags: ["js"],
  subsections: [
    {
      id: "aj-cadre-juridique",
      title: "Le cadre juridique d'un site Web",
      blocks: [
        { type: "p", text: "Le cadre juridique d'un site web englobe toutes les lois et régulations que les propriétaires et exploitants doivent respecter." },
        { type: "h", text: "Propriété intellectuelle" },
        { type: "list", items: [
          "Droit d'auteur — protège textes, images, vidéos. Ne pas utiliser sans autorisation. Licences Creative Commons pour banques d'images libres de droits",
          "Marques déposées — protège noms de marque et logos",
          "Brevets — protège les inventions techniques",
        ]},
        { type: "h", text: "Responsabilité des contenus" },
        { type: "list", items: [
          "Diffamation — ne pas publier de fausses accusations",
          "Respect de la vie privée — ne pas divulguer des informations personnelles sans consentement",
          "Droit à l'image — obtenir permission avant de publier une photo",
        ]},
        { type: "h", text: "Protection des données" },
        { type: "list", items: ["RGPD — consentement explicite requis pour les cookies et la collecte de données"] },
        { type: "h", text: "Commerce électronique" },
        { type: "list", items: [
          "LCEN (Loi pour la confiance dans l'économie numérique) — obligations d'information, conditions de vente",
          "Directives européennes — harmonisation des règles de commerce en ligne dans l'UE",
        ]},
      ],
    },
    {
      id: "aj-rgpd",
      title: "Découvrez le RGPD",
      blocks: [
        { type: "p", text: "Le Règlement Général sur la Protection des Données est un cadre légal de l'UE entré en vigueur le 25 mai 2018. Il remplace la Directive de 1995." },
        { type: "p", text: "Donnée personnelle : toute information se rapportant à une personne physique identifiée ou identifiable (email, adresse IP, localisation, nom, prénom, numéro de sécurité sociale…)." },
        { type: "p", text: "Qui est concerné ? Toute entreprise ou personne possédant une application collectant des données personnelles au sein de l'UE." },
        { type: "h", text: "Principes clés du RGPD" },
        { type: "table", headers: ["Principe", "Description", "Exemple"], rows: [
          ["Consentement éclairé", "Consentement clair et explicite pour la collecte", "Case à cocher pour newsletter"],
          ["Transparence", "Informer sur l'utilisation des données", "Politique de confidentialité détaillée"],
          ["Droit d'accès et de rectification", "Accéder et corriger ses données", "Voir et corriger ses informations"],
          ["Droit à l'oubli", "Demander la suppression", "Supprimer son compte et données"],
          ["Portabilité des données", "Recevoir ses données dans un format structuré", "Fichier CSV des données sur demande"],
          ["Sécurité des données", "Mesures pour protéger les données", "Chiffrement des mots de passe, HTTPS"],
          ["Collecte à minima", "Collecter uniquement les données nécessaires", "Inscription : email + mdp uniquement"],
        ]},
        { type: "h", text: "Cookies nécessaires vs non nécessaires" },
        { type: "table", headers: ["Type", "Description", "Exemple"], rows: [
          ["Nécessaires", "Essentiels au fonctionnement du site", "Cookie de session utilisateur"],
          ["Non nécessaires", "Publicité, analyses. Consentement explicite requis", "Cookie de suivi publicitaire"],
        ]},
        { type: "note", variant: "info", title: "Ressource CNIL (MOOC RGPD)", text: "https://www.cnil.fr/fr/comprendre-le-rgpd/" },
      ],
    },
    {
      id: "aj-acteurs-juridiques",
      title: "Les acteurs juridiques majeurs sur internet",
      blocks: [
        { type: "table", headers: ["Acteur", "Rôle", "Sanction potentielle"], rows: [
          ["CNIL", "Régule la protection des données en France", "Amendes jusqu'à 20M€ ou 4% du CA annuel mondial"],
          ["EDPB", "Assure la cohérence du RGPD dans l'UE", "Sanctions nationales"],
          ["ICANN", "Gestion des noms de domaine et adresses IP", "Suspension/révocation des noms de domaine"],
          ["OMPI", "Protection de la propriété intellectuelle internationale", "Sanctions financières, cessation d'utilisation"],
          ["CJUE", "Interprète et veille au droit de l'UE", "Modifications législatives, sanctions admin/pénales"],
          ["DGCCRF", "Protection consommateurs, régulation concurrence en France", "Amendes, injonctions, sanctions pénales"],
        ]},
      ],
    },
    {
      id: "aj-pages-importantes",
      title: "Pages importantes de l'application",
      blocks: [
        { type: "h", text: "Mentions légales" },
        { type: "p", text: "But : informations sur l'éditeur du site, garantir la transparence." },
        { type: "h", text: "Éléments obligatoires" },
        { type: "list", items: [
          "Adresse du siège social, téléphone, email de l'éditeur",
          "Numéro et ville du RCS, capital social, SIREN, TVA",
          "Nom et prénom du responsable de publication",
          "Nom et prénom du directeur de publication",
          "Hébergeur : nom, adresse, numéro de téléphone",
        ]},
        { type: "h", text: "CGU (Conditions Générales d'Utilisation)" },
        { type: "p", text: "But : modalités d'utilisation, droits et devoirs des utilisateurs." },
        { type: "p", text: "Éléments clés : objet et qualité des contenus, accès et utilisation, propriété intellectuelle, données personnelles, connexion et sécurité (HTTPS)." },
        { type: "h", text: "Politique de confidentialité" },
        { type: "p", text: "But : informer sur la collecte, l'utilisation et la protection des données personnelles." },
        { type: "p", text: "Éléments clés : définition des cookies, types de cookies, consentement, durée de conservation (max 13 mois), droits des utilisateurs." },
        { type: "h", text: "CGV (Conditions Générales de Vente)" },
        { type: "p", text: "But : obligatoires pour les sites e-commerce. Conditions de vente, droits et obligations." },
        { type: "p", text: "Éléments clés : description des produits, prix (TTC), modalités de paiement, livraison, droit de rétractation (14 jours), garanties." },
      ],
    },
    {
      id: "aj-formulaires-rgpd",
      title: "Les formulaires et le RGPD",
      blocks: [
        { type: "p", text: "Deux règles importantes pour tout formulaire :" },
        { type: "list", items: [
          "Collecte à minima — ne collecter que les données strictement nécessaires (inscription : uniquement email + mot de passe, pas le nom)",
          "Acceptation des CGU — case à cocher obligatoire avec lien vers les CGU. Texte : \"En cochant cette case, vous acceptez nos [Conditions Générales d'Utilisation]\"",
        ]},
        { type: "h", text: "Formulaires courants" },
        { type: "table", headers: ["Formulaire", "Conformité RGPD requise"], rows: [
          ["Contact", "Collecte à minima + case CGU"],
          ["Inscription", "Email + mdp seulement + case CGU"],
          ["Connexion", "—"],
          ["Newsletter", "Email seulement + case CGU"],
        ]},
      ],
    },
    {
      id: "aj-bandeau-cookies",
      title: "Le bandeau des cookies",
      blocks: [
        { type: "p", text: "Un cookie est un fichier envoyé par le serveur web au fichier cookies du navigateur pour analyser les habitudes et fournir des services personnalisés." },
        { type: "h", text: "Règles obligatoires" },
        { type: "list", items: [
          "Afficher le bandeau sur toutes les pages tant que l'utilisateur n'a pas effectué un choix",
          "Boutons : \"Accepter\", \"Refuser\", \"Modifier\", \"En savoir plus\"",
          "Lien vers la politique de confidentialité",
        ]},
        { type: "h", text: "Contenu de la politique de confidentialité (cookies)" },
        { type: "list", items: [
          "Définition d'un cookie",
          "Utilisation des cookies sur le site",
          "Durée de conservation : max 13 mois à compter de la première visite",
          "Instructions pour supprimer les cookies (Safari, Chrome, Firefox, Edge…)",
        ]},
      ],
    },
  ],
};
