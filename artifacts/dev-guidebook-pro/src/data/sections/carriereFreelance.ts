import type { Section } from "../types";

export const carriereFreelance: Section = {
  id: "carriere-freelance",
  title: "Carrière & Freelance",
  icon: "Briefcase",
  tags: ["js"],
  subsections: [
    {
      id: "carriere-lettre-motivation",
      title: "Lettre de motivation — Développeur Web Full Stack",
      blocks: [
        { type: "p", text: "Exemple de lettre de motivation pour une candidature au poste de développeur web Full Stack, structurée selon la méthode MOI / VOUS / NOUS." },
        { type: "h", text: "Structure de la lettre de motivation" },
        {
          type: "diagram",
          content: `Architecture de la lettre
──────────────────────────────────────────────────────────
[MOI]    → Qui je suis + pourquoi cette entreprise spécifiquement
           • Reconversion / parcours vers le développement web
           • Valeurs : rigueur, autonomie, efficacité
           • Référencer un projet/produit connu de l'entreprise

[VOUS]   → Ce que l'entreprise m'apporte + ma motivation
           • Environnement stimulant et collaboratif
           • Contribuer à améliorer l'expérience utilisateur

[NOUS]   → Ce que j'apporte à l'entreprise
           • Rigueur acquise dans mes expériences précédentes
           • Stack technique : HTML5, CSS3, JS, PHP, React,
             Angular, SQL, Node.js, Python, Git/GitHub
           • Projets académiques et personnels réalisés
──────────────────────────────────────────────────────────`,
        },
        { type: "h", text: "1er paragraphe — MOI : introduction et connaissance de l'entreprise" },
        { type: "p", text: "Se présenter, indiquer son contexte de formation ou de reconversion, exprimer sa passion pour le domaine, et relier ses valeurs personnelles (rigueur, autonomie, efficacité) à la culture de l'entreprise ciblée. Mentionner si possible un projet ou produit spécifique connu de l'entreprise pour montrer un intérêt réel et documenté." },
        { type: "h", text: "2e paragraphe — VOUS : motivation pour l'entreprise" },
        { type: "p", text: "Expliquer en quoi rejoindre cette entreprise représente une opportunité concrète de mettre en pratique ses compétences techniques, dans un environnement stimulant et collaboratif. Relier les projets de l'entreprise à ses propres aspirations professionnelles." },
        { type: "h", text: "3e paragraphe — NOUS : parcours, compétences et projets" },
        { type: "p", text: "Présenter son parcours (y compris atypique), les compétences techniques maîtrisées, ainsi que des projets académiques ou personnels concrets réalisés. Terminer en réaffirmant sa motivation à apprendre rapidement et à s'intégrer dans l'équipe." },
        { type: "h", text: "Compétences mentionnées — Exemple" },
        { type: "table", headers: ["Catégorie", "Technologies"], rows: [
          ["Front-end", "HTML5, CSS3, JavaScript, React, Angular"],
          ["Back-end", "PHP, Node.js, Python"],
          ["Base de données", "SQL"],
          ["Outils", "Git, GitHub"],
          ["Soft skills", "Rigueur, autonomie, efficacité, adaptation, apprentissage rapide"],
        ]},
        { type: "note", variant: "info", text: "Terminer la lettre par une formule de politesse classique et se tenir à disposition pour un entretien." },
      ],
    },
    {
      id: "carriere-toptal",
      title: "Toptal — Plateforme freelance premium",
      blocks: [
        { type: "p", text: "Service freelance haut de gamme spécialisé dans le recrutement de développeurs, designers et experts en finance parmi les meilleurs mondiaux." },
        { type: "table", headers: ["Caractéristique", "Détail"], rows: [
          ["Type", "Plateforme de freelance premium"],
          ["Spécialité", "Recrutement sélectif (top 3% des candidats)"],
          ["Profils", "Développeurs, designers, chefs de projet, experts finance"],
          ["Processus", "Sélection très rigoureuse (tests techniques, entretiens)"],
          ["Clientèle", "Entreprises cherchant des talents de haut niveau"],
        ]},
        { type: "h", text: "Processus de sélection Toptal" },
        {
          type: "diagram",
          content: `Processus de sélection Toptal
──────────────────────────────────────────────────────
[1] Candidature
[2] Screening de langue et communication
[3] Tests de compétences techniques (algorithmes, logique)
[4] Test technique en direct (live coding)
[5] Test sur un projet réel (période d'essai)
[6] Acceptation → intégration dans le réseau Toptal
──────────────────────────────────────────────────────
Seul le top 3% des candidats est accepté.
──────────────────────────────────────────────────────`,
        },
      ],
    },
  ],
};
