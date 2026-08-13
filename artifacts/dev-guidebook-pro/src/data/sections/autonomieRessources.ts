import type { Section } from "../types";

export const autonomieRessources: Section = {
  id: "autonomie-ressources",
  title: "Autonomie & Ressources Web",
  icon: "Compass",
  tags: ["js"],
  subsections: [
    {
      id: "autonomie-cycle",
      title: "Méthode Autonomie — Comment l'utiliser",
      blocks: [
        { type: "note", variant: "info", text: "Ce cycle se répète à chaque nouveau projet, avec ou sans aide extérieure." },
        { type: "h", text: "Le cycle autonome" },
        {
          type: "diagram",
          content: `Idée → Inspiration → Stack → Code → Veille`,
        },
        { type: "list", items: [
          "Tu as une idée → tu vas chercher l'inspiration aux bons endroits",
          "Tu choisis ta stack → tu évalues les outils avec les 4 questions",
          "Tu codes → tu cherches 10 min seul avant de demander",
          "Tu restes informé → sans te noyer avec ton système de veille",
        ]},
      ],
    },
    {
      id: "autonomie-savoir-ou-chercher",
      title: "1. Savoir où chercher",
      blocks: [
        { type: "h", text: "Le principe" },
        { type: "p", text: "Formule ton besoin en une phrase précise avant de chercher." },
        { type: "p", text: "Cherche 10 minutes seul avant de demander à quelqu'un." },
        { type: "p", text: "Remonte toujours à la source officielle (doc officielle > blog > forum)." },
        { type: "h", text: "Quel besoin → quelle source" },
        { type: "table", headers: ["Besoin", "Sources"], rows: [
          ["Idée de projet", "Dribbble, Product Hunt, Indie Hackers, Awwwards"],
          ["Design & UI", "Figma, Mobbin, shadcn/ui, Coolors"],
          ["Choix de stack", "StackShare, roadmap.sh, State of JS"],
          ["Problème de code", "MDN, Stack Overflow, doc officielle de la lib"],
          ["Déploiement", "Vercel docs, Netlify docs, Supabase docs"],
        ]},
        { type: "h", text: "Objectif" },
        { type: "note", variant: "success", text: "Après 2-3 projets, savoir instinctivement « ce type de problème → je vais là » sans réfléchir." },
      ],
    },
    {
      id: "autonomie-evaluer-outil",
      title: "2. Évaluer un outil rapidement",
      blocks: [
        { type: "h", text: "Les 4 questions (5 minutes max)" },
        { type: "table", headers: ["Question", "Ce que tu vérifies"], rows: [
          ["La communauté fait confiance ?", "GitHub stars, avis, contributeurs actifs"],
          ["C'est maintenu ?", "Dernière mise à jour, issues résolues"],
          ["Je comprends en 2 minutes ?", "Lis le README — si tu ne captes pas, mauvais signe"],
          ["J'en ai vraiment besoin ?", "Est-ce que j'ai déjà quelque chose qui fait le job ?"],
        ]},
        { type: "h", text: "Règle simple" },
        { type: "list", items: [
          "✅ 3 questions sur 4 → tu testes",
          "❌ Moins de 3 → tu passes et tu cherches une alternative",
        ]},
        { type: "h", text: "Bons signes vs mauvais signes" },
        { type: "table", headers: ["✅ Bons signes", "❌ Mauvais signes"], rows: [
          ["Doc claire avec exemples", "Pas de mise à jour depuis 1 an+"],
          ["Issues actives et répondues", "Issues sans réponse"],
          ["Utilisé par des projets connus", "Doc vide ou incomplète"],
          ["README avec cas d'usage réels", "0 résultats Stack Overflow"],
        ]},
      ],
    },
    {
      id: "autonomie-veille",
      title: "3. Rester en veille sans se noyer",
      blocks: [
        { type: "h", text: "Le système en 4 règles" },
        { type: "list", items: [
          "Une seule source passive par jour — daily.dev OU Hacker News, 10 min max",
          "Un endroit unique pour noter — une page Notion ou fichier texte, tu notes sans explorer",
          "30 minutes par semaine pour trier — tu décides quoi tester vraiment",
          "Désabonne-toi du reste — sans culpabilité",
        ]},
        { type: "h", text: "Ce que tu suis vs ce que tu ignores" },
        { type: "table", headers: ["✅ Tu suis", "❌ Tu ignores"], rows: [
          ["Ta stack uniquement", "Les techs hors de ton périmètre actuel"],
          ["Les outils « à tester plus tard »", "Chaque article en entier"],
          ["Les mises à jour de tes libs", "Les tendances qui ne te concernent pas"],
        ]},
        { type: "h", text: "Objectif" },
        { type: "note", variant: "success", text: "Ne pas rater ce qui compte pour toi — pas être au courant de tout." },
      ],
    },
    {
      id: "autonomie-exercices",
      title: "4. Exercices à faire sur le prochain projet",
      blocks: [
        { type: "list", items: [
          "☐ Chercher 10 min seul avant de poser une question",
          "☐ Lire la doc officielle d'une lib que tu utilises",
          "☐ Comparer 2 outils qui font la même chose pendant 15 min",
          "☐ Appliquer les 4 questions sur un outil inconnu",
          "☐ Choisir UNE source de veille et désactiver les autres",
          "☐ Créer une page Notion pour noter les outils à tester",
          "☐ Bloquer 30 min vendredi pour trier ta liste",
        ]},
        { type: "h", text: "En résumé" },
        { type: "note", variant: "info", text: "La méthode ne change pas d'un projet à l'autre. Ce qui change c'est ta vitesse à l'appliquer. Après 2-3 projets, ces réflexes deviennent automatiques." },
        { type: "p", text: "À combiner avec la boîte à outils Ressources Dev Web pour une autonomie complète." },
      ],
    },
    {
      id: "validation-idee-artisans",
      title: "Valider une idée avant de développer",
      blocks: [
        { type: "p", text: "Contacter 20 à 30 artisans et poser seulement trois questions :" },
        { type: "list", items: [
          "Qu'est-ce qui te fait perdre le plus de temps chaque semaine ?",
          "Quelle tâche te fait le plus râler ?",
          "Pour quoi serais-tu prêt à payer 10 à 30 € par mois ?",
        ]},
        { type: "note", variant: "success", text: "Si 15 personnes répondent la même chose, il y a sûrement un vrai besoin." },
      ],
    },
    {
      id: "ressources-idees-veille",
      title: "Boîte à outils — Idées & Veille",
      blocks: [
        { type: "note", variant: "info", text: "Boîte à outils complète pour chaque étape d'un projet web." },
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["Dribbble", "Inspiration design et projets visuels", "https://dribbble.com/"],
          ["Behance", "Portfolios créatifs et projets design", "https://behance.net/"],
          ["Product Hunt", "Tendances et idées de produits", "https://producthunt.com/"],
          ["GitHub Trending", "Projets populaires du moment", "https://github.com/trending"],
          ["Indie Hackers", "Projets solo et micro-SaaS avec revenus partagés", "https://indiehackers.com/"],
          ["Hacker News", "Actualité tech et discussions profondes", "https://news.ycombinator.com/"],
          ["daily.dev", "Agrégateur d’articles dev personnalisé", "https://daily.dev/"],
          ["Awwwards", "Sites web primés pour l’inspiration", "https://awwwards.com/"],
          ["Reddit r/webdev", "Communauté dev web active", "https://reddit.com/r/webdev"],
        ]},
      ],
    },
    {
      id: "ressources-design-maquettes",
      title: "Boîte à outils — Design & Maquettes",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["Figma", "Outil de design collaboratif standard", "https://figma.com/"],
          ["Excalidraw", "Wireframes rapides et sketchy", "https://excalidraw.com/"],
          ["v0.dev", "Génère des UI en décrivant ce que tu veux", "https://v0.dev/"],
          ["Uizard", "Maquettes générées par IA", "https://uizard.io/"],
          ["Mobbin", "Patterns UI d’apps mobiles réelles", "https://mobbin.com/"],
          ["Land-book", "Inspiration landing pages", "https://land-book.com/"],
          ["Heroicons / Lucide", "Bibliothèques d’icônes gratuites", "https://heroicons.com/"],
          ["Coolors", "Générateur de palettes de couleurs", "https://coolors.co/"],
          ["Google Fonts", "Typographies gratuites pour le web", "https://fonts.google.com/"],
          ["Fontpair", "Associations de typographies", "https://fontpair.co/"],
        ]},
      ],
    },
    {
      id: "ressources-stack-architecture",
      title: "Boîte à outils — Choix de Stack & Architecture",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["StackShare", "Voir les stacks utilisées par les entreprises", "https://stackshare.io/"],
          ["roadmap.sh", "Guides de parcours par technologie", "https://roadmap.sh/"],
          ["State of JS", "Enquêtes annuelles sur les tendances JS", "https://stateofjs.com/"],
          ["ThoughtWorks Radar", "Radar des tendances technologiques", "https://thoughtworks.com/radar"],
          ["db-engines", "Comparer les bases de données", "https://db-engines.com/"],
          ["Bundlephobia", "Vérifier le poids d’un package npm", "https://bundlephobia.com/"],
        ]},
      ],
    },
    {
      id: "ressources-code-composants",
      title: "Boîte à outils — Code & Composants",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["GitHub Copilot", "Autocomplétion IA dans l’éditeur", "https://github.com/features/copilot"],
          ["Cursor", "Éditeur de code avec IA intégrée", "https://cursor.sh/"],
          ["Bolt.new", "Génère des projets complets par prompt", "https://bolt.new/"],
          ["Lovable.dev", "Applications fullstack générées par IA", "https://lovable.dev/"],
          ["CodePen", "Expérimenter du CSS/JS en live", "https://codepen.io/"],
          ["shadcn/ui", "Composants React prêts à l’emploi", "https://ui.shadcn.com/"],
          ["Tailwind UI", "Composants Tailwind premium", "https://tailwindui.com/"],
          ["Supabase", "Backend open-source prêt en minutes", "https://supabase.com/"],
          ["Vercel", "Déploiement rapide et CDN global", "https://vercel.com/"],
          ["Netlify", "Hébergement et déploiement continu", "https://netlify.com/"],
        ]},
      ],
    },
    {
      id: "ressources-apprendre",
      title: "Boîte à outils — Apprendre & Se Débloquer",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["MDN Web Docs", "Référence absolue pour le web", "https://developer.mozilla.org/"],
          ["Stack Overflow", "Résoudre des erreurs et blocages", "https://stackoverflow.com/"],
          ["The Odin Project", "Apprendre le web from scratch", "https://theodinproject.com/"],
          ["freeCodeCamp", "Certifications gratuites en dev web", "https://freecodecamp.org/"],
          ["Frontend Masters", "Formations avancées", "https://frontendmasters.com/"],
          ["Egghead.io", "Tutos courts et techniques", "https://egghead.io/"],
          ["ByteByteGo", "Architecture système expliquée visuellement", "https://bytebytego.com/"],
          ["CS50 Harvard", "Bases solides en informatique, gratuit", "https://cs50.harvard.edu/"],
          ["Fireship (YouTube)", "Tutos courts et percutants", "https://youtube.com/@Fireship"],
          ["Traversy Media (YouTube)", "Tutos pratiques toutes technologies", "https://youtube.com/@TraversyMedia"],
          ["Kevin Powell (YouTube)", "Maître du CSS", "https://youtube.com/@KevinPowell"],
        ]},
      ],
    },
    {
      id: "ressources-securite-devops",
      title: "Boîte à outils — Sécurité & DevOps",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["OWASP", "Référence sécurité web", "https://owasp.org/"],
          ["Docker Hub", "Conteneurs prêts à l’emploi", "https://hub.docker.com/"],
          ["Snyk", "Détecter les vulnérabilités dans le code", "https://snyk.io/"],
          ["Sentry", "Tracker les erreurs en production", "https://sentry.io/"],
          ["LogRocket", "Rejouer les sessions utilisateurs", "https://logrocket.com/"],
        ]},
      ],
    },
    {
      id: "ressources-business",
      title: "Boîte à outils — Business & Monétisation",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["Stripe", "Intégrer les paiements en ligne", "https://stripe.com/"],
          ["LemonSqueezy", "Alternative Stripe plus simple", "https://lemonsqueezy.com/"],
          ["Gumroad", "Vendre des produits digitaux", "https://gumroad.com/"],
        ]},
      ],
    },
    {
      id: "ressources-analytics-seo",
      title: "Boîte à outils — Analytics, SEO & Monitoring",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["Plausible", "Analytics respectueux de la vie privée", "https://plausible.io/"],
          ["Umami", "Alternative open-source à Google Analytics", "https://umami.is/"],
          ["Ahrefs", "Recherche de mots-clés et SEO", "https://ahrefs.com/"],
          ["PageSpeed Insights", "Performances et SEO technique", "https://pagespeed.web.dev/"],
          ["Wappalyzer", "Voir la stack d’un site concurrent", "https://wappalyzer.com/"],
          ["Postman", "Tester et documenter ses APIs", "https://postman.com/"],
          ["Lighthouse", "Auditer les performances d’un site", "Intégré dans Chrome DevTools"],
        ]},
      ],
    },
    {
      id: "ressources-ia-assistants",
      title: "Boîte à outils — IA & Assistants",
      blocks: [
        { type: "table", headers: ["Ressource", "Description", "Lien"], rows: [
          ["Claude (Anthropic)", "Centralise tout : idée → maquette → stack → code", "https://claude.ai/"],
          ["ChatGPT", "IA généraliste polyvalente", "https://chatgpt.com/"],
          ["Gemini", "IA bien intégrée à l’écosystème Google", "https://gemini.google.com/"],
          ["Perplexity", "Recherche web + synthèse IA", "https://perplexity.ai/"],
        ]},
        { type: "note", variant: "info", text: "Mis à jour régulièrement — le web évolue vite 🚀" },
      ],
    },
  ],
};
