import type { Section } from "../types";

export const git: Section = {
  id: "git",
  title: "Git & Terminal",
  icon: "GitBranch",
  tags: [],
  subsections: [
    {
      id: "git-commandes-base-outils",
      title: "Git — Commandes de base",
      blocks: [
        { type: "p", text: "Permet de garder l'historique et gérer les versions du code." },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer dossier caché ".git" + dépôt vide
git init

# Créer une branche
git branch nom_branche

# Supprimer branche locale non fusionnée
git branch -D nom_branche

# Aller sur une branche
git checkout nom_branche

# Créer + aller sur une branche
git checkout -b nom_branche

# Supprimer branche locale fusionnée
git branch -d nom_branche

# Lister les branches locales
git branch

# Créer branche principale
git branch main

# Renommer branche principale "master" en "main"
git branch -M main

# Fusion d'une branche à celle en cours
git merge nom_branche

# Préparer sauvegarde de tous les fichiers
git add .

# Lister fichiers prêts pour sauvegarde "état"
git status

# Préparer sauvegarde d'un fichier
git add nom_fichier

# Créer la sauvegarde avec message précis
git commit -m "message descriptif"

# Envoyer branche principale locale vers distante
git push origin main

# Envoi + relier nouvelle branche locale vers distante
git push -u origin nom_branche

# Envoyer toutes les branches locales vers distante
git push --all origin

# Envoyer modification branche locale à distante déjà reliée
git push

# Récupérer + ajouter modification distant à local
git pull

# Supprimer une branche distante
git push origin --delete nom_branche

# Récupérer modification distant sans fusion
git fetch

# Fusion modification distant dans branche locale
git merge

# Récupérer + ajouter modification branche main distante à locale
git pull origin main

# Voir historique des sauvegardes "commit"
git log

# Afficher configuration Git du PC
git config --list

# Configuration git global "1 fois"
git config --global user.name "nom"
git config --global user.email "email@example.com"

# Configuration git pour un projet "local"
git config user.name "nom projet"
git config user.email "email@projet.com"` },
      ],
    },
    {
      id: "config-base",
      title: "Configuration et workflow",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `git config --global user.name "Alice Dupont"
git config --global user.email "alice@exemple.fr"
git init                 # initialise un dépôt
git status               # état des fichiers
git add .                # indexe les changements
git commit -m "Ajout du panier"
git push origin main     # envoie vers le distant
git pull                 # récupère les changements` },
      ],
    },
    {
      id: "branches",
      title: "Branches et fusion",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `git branch                     # liste les branches
git checkout -b feature/panier # crée et bascule
git merge feature/panier       # fusionne
git branch -d feature/panier   # supprime
# Conflit : éditer les fichiers marqués <<<<<<< puis git add && commit` },
        { type: "note", variant: "info", text: "rebase réécrit l'historique pour le rendre linéaire. Ne jamais rebaser une branche partagée." },
      ],
    },
    {
      id: "outils",
      title: "Log, diff, stash, reset",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `git log --oneline --graph  # historique compact
git diff                   # changements non indexés
git stash                  # met de côté
git stash pop              # récupère
git reset --soft HEAD~1    # annule le commit, garde les fichiers
git reset --hard HEAD~1    # annule tout (DANGER)
git revert <hash>          # annule via un nouveau commit` },
      ],
    },
    {
      id: "gitignore",
      title: ".gitignore",
      blocks: [
        { type: "code", filename: ".gitignore", language: "bash", code: `node_modules/   # dépendances réinstallables
.env            # secrets (ne JAMAIS committer)
dist/           # fichiers compilés
vendor/         # dépendances PHP
*.log           # logs` },
      ],
    },
    {
      id: "terminal",
      title: "Commandes Terminal",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `ls -la              # liste détaillée
cd dossier          # se déplacer
pwd                 # dossier courant
mkdir -p src/utils  # crée l'arborescence
cp -r src dist      # copie récursive
mv ancien.js nouveau.js # renommer
rm -rf dossier      # supprime (DANGER)
grep -r "TODO" .    # recherche récursive
find . -name "*.js" # trouve des fichiers
chmod +x script.sh  # rend exécutable
export API_KEY=abc  # variable d'environnement
echo $API_KEY       # affiche` },
      ],
    },
    {
      id: "github-flux",
      title: "GitHub — Flux de travail",
      blocks: [
        { type: "p", text: "Permet de garder l'historique et gérer les versions du code." },
        {
          type: "diagram",
          content: `[ PC local / IDE ]
       |
   git add / commit
       |
   git push
       |
[ Dépôt distant GitHub ]
       |
   git pull / fetch
       |
[ PC local / IDE ]`,
        },
        { type: "h", text: "Envoyer un projet local (IDE) sur GitHub" },
        { type: "p", text: "1. Sur GitHub : créer un repository (nom projet), choisir visibilité (public ou privé)." },
        { type: "p", text: "2. Dans VS Code :" },
        { type: "code", filename: "terminal", language: "bash", code: `echo "#Projet" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pseudo/nom-repository.git
git push -u origin main` },
      ],
    },
    {
      id: "github-branche-travail",
      title: "Créer et utiliser une branche de travail",
      blocks: [
        { type: "h", text: "1. VS Code — Ouvrir le projet / Terminal" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout main
git pull origin main
git checkout -b prefixe/nom-branche` },
        { type: "h", text: "2. Modifier le code puis" },
        { type: "code", filename: "terminal", language: "bash", code: `git add .
git commit -m "Message"
git push -u origin prefixe/nom-branche` },
        { type: "h", text: "3. GitHub" },
        { type: "p", text: 'Ouvrir "Pull Request" pour une revue de code.' },
        { type: "h", text: "4. VS Code" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout main
git pull origin main
git branch -d prefixe/nom-branche
git push origin --delete prefixe/nom-branche` },
        { type: "h", text: "5. Modifications futures sur le projet" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout -b prefixe/nom-branche
git add .
git commit -m "Message"
git push -u origin prefixe/nom-branche` },
        { type: "h", text: "Modification à envoyer sur une branche spécifique" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout "feature/#4back"
git add .
git commit -m "Description des changements"
git push origin "feature/#4back"` },
        { type: "h", text: "Envoyer modification locale sur GitHub (branche existante)" },
        { type: "code", filename: "terminal", language: "bash", code: `git add .
git commit -m "Message"
git push origin nom-branche` },
      ],
    },
    {
      id: "github-branches-mal-nommees",
      title: "Renommer et corriger des branches",
      blocks: [
        { type: "h", text: "1. Renommer branche locale" },
        { type: "p", text: "Sur la branche à renommer :" },
        { type: "code", filename: "terminal", language: "bash", code: `git branch -m nouveau-nom` },
        { type: "p", text: "Sur une autre branche :" },
        { type: "code", filename: "terminal", language: "bash", code: `git branch -m ancien-nom nouveau-nom` },
        { type: "h", text: "2. Supprimer ancienne branche sur GitHub" },
        { type: "code", filename: "terminal", language: "bash", code: `git push origin --delete ancien-nom` },
        { type: "h", text: "3. Pousser branche renommée sur GitHub" },
        { type: "code", filename: "terminal", language: "bash", code: `git push origin nouveau-nom` },
        { type: "h", text: "4. Mettre à jour le suivi de la branche locale" },
        { type: "code", filename: "terminal", language: "bash", code: `git push --set-upstream origin nouveau-nom` },
      ],
    },
    {
      id: "github-equipe-issue",
      title: "Travailler en équipe — Issues et Pull Requests",
      blocks: [
        { type: "h", text: "Créer et utiliser une branche de travail (en équipe)" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout main
git pull origin main
git checkout -b prefixe/N°-nomBranche` },
        { type: "code", filename: "terminal", language: "bash", code: `git add .
git commit -m "Message"
git push -u origin prefixe/N°-nomBranche` },
        { type: "p", text: 'GitHub : ouvrir "Pull Request" lié à l\'issue N°, revue de code, fusion si Ok.' },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout main
git pull origin main
git branch -d prefixe/N°-nomBranche
git push origin --delete prefixe/N°-nombranche` },
        { type: "h", text: "Récupérer et fusionner modifications dépôt distant à local" },
        { type: "code", filename: "terminal", language: "bash", code: `git status
git checkout nom-branche
git pull origin nom-branche` },
        { type: "note", variant: "info", text: "L'étoile (*) devant la branche indique qu'on est dessus." },
        { type: "h", text: "Nommage des branches (préfixes)" },
        { type: "table", headers: ["Type de modification", "Préfixe", "Exemple"], rows: [
          ["Nouvelle fonctionnalité", "feature/", "feature/login-system"],
          ["Correction de bug", "fix/", "fix/navbar-error"],
          ["Correction urgente (production)", "hotfix/", "hotfix/security-patch"],
          ["Tâche technique (non fonctionnelle)", "chore/", "chore/update-dependencies"],
          ["Refactoring", "refactor/", "refactor/auth-service"],
          ["Tests", "test/", "test/user-service"],
          ["Documentation", "docs/", "docs/api-guide"],
          ["Release (version)", "release/", "release/v1.2.0"],
          ["CI / Build", "ci/ ou build/", "ci/pipeline-update"],
          ["Performance", "perf/", "perf/query-optimization"],
          ["Style / mise en forme", "style/", "style/formatting-css"],
        ]},
        { type: "h", text: "Revue de code — Processus complet" },
        { type: "p", text: '1. Créer une issue : "Issues" → "New issues" → remplir les infos → "Submit new issue"' },
        { type: "code", filename: "terminal", language: "bash", code: `git branch prefixe/nom-N°issue
git checkout nom-branche
git add .
git commit -m "Message"
git push -u origin nom-branche` },
        { type: "p", text: '3. Créer une pull request : "Pull request" → "New pull request" → choisir la branche → "Create pull request"' },
        { type: "p", text: '4. Faire un merge : "Pull request" → choisir le PR → "Files changed" → "Conversation" → "Merge pull request" → "Confirm merge" → "Delete branch"' },
        { type: "h", text: "Fusion d'une branche locale vers distante" },
        { type: "code", filename: "terminal", language: "bash", code: `git add .
git commit -m "Message"
git checkout branche-ciblé
git pull origin branche-ciblé
git merge branche-source
git push origin branche-ciblé

# Supprimer la branche
git branch -d branche-source
git push origin --delete branche-source` },
        { type: "h", text: "Demande d'ajout / modification sur un projet GitHub" },
        { type: "p", text: '1. Créer une issue : "Issues" → "New issues" → remplir les infos → "Submit new issue"' },
        { type: "p", text: "2. Créer une branche : prefixe/nom-N°issue" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout prefixe/nom-N°issue
git add .
git commit -m "Message"
git push -u origin prefixe/nom-N°issue` },
        { type: "p", text: "4. Créer la pull request : merger la branche si ok, sinon corriger le code → commits → push → revue de code → merge branche → supprimer." },
      ],
    },
    {
      id: "github-recuperer-restaurer",
      title: "Récupérer, restaurer et supprimer des dépôts",
      blocks: [
        { type: "h", text: "Récupérer et rétablir un projet depuis le dépôt distant" },
        { type: "p", text: "1. Supprimer le dossier du projet sur le PC" },
        { type: "code", filename: "terminal", language: "bash", code: `# Lister toutes les branches distantes
git branch -r

# Récupérer toutes les branches distantes
git fetch --all

# Créer une branche locale qui suit la distante
git checkout -b branche-locale origin/branche-distante` },
        { type: "p", text: "3. Reprendre le travail et réinstaller les dépendances." },
        { type: "h", text: "Restaurer branche ou fichiers supprimés depuis une autre branche ou un commit" },
        { type: "p", text: "1. Chercher commit ou branche contenant tous les fichiers :" },
        { type: "code", filename: "terminal", language: "bash", code: `git log --all --oneline` },
        { type: "p", text: "2. Noter le hash du commit ou nom de la branche (ex : d479673 ou branche-source-Achat) :" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout branche-ciblé` },
        { type: "p", text: "3. Restaurer tous les fichiers :" },
        { type: "code", filename: "terminal", language: "bash", code: `git checkout branche.source -- .` },
        { type: "p", text: "4. Vérifier visuellement les fichiers, puis :" },
        { type: "code", filename: "terminal", language: "bash", code: `git add .
git commit -m "Restauration"
git push -u origin branche-cible` },
        { type: "h", text: 'Supprimer un dépôt "repositories"' },
        { type: "list", items: ["1. Choisir le dépôt", '2. "Settings"', '3. "Général"', '4. "Danger zone"', '5. "Delete this repository"'] },
        { type: "h", text: "Récupérer un dépôt sur un éditeur de code" },
        { type: "p", text: "1. Choisir le dépôt : <> Code → copier le lien" },
        { type: "p", text: "2. VS Code :" },
        { type: "code", filename: "terminal", language: "bash", code: `git clone "lien copié"` },
        { type: "p", text: "3. Ouvrir le dossier PC sur VS Code :" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install` },
        { type: "p", text: 'ou méthode "Download ZIP"' },
      ],
    },
    {
      id: "github-pages",
      title: "GitHub Pages",
      blocks: [
        { type: "p", text: "GitHub Pages permet de publier un site web statique gratuitement directement depuis un dépôt GitHub." },
        { type: "h", text: "1. Création du repository" },
        { type: "list", items: ["Créer un repository public sur GitHub", "Envoyer le projet local (branche main)"] },
        { type: "h", text: "2. Activation de GitHub Pages" },
        { type: "list", items: [
          "Aller dans Settings → Pages",
          "Choisir : Branche main, Dossier /docs",
          "Sauvegarder",
        ]},
        { type: "h", text: "3. Préparation du projet (VS Code)" },
        { type: "list", items: [
          "Build du projet (ex Angular / autre) : sortie dans /docs",
          "Supprimer les anciens fichiers inutiles si besoin (/browser)",
          "Pousser les modifications sur GitHub",
        ]},
        { type: "h", text: "4. Déploiement" },
        { type: "list", items: [
          "Aller dans Actions → Deployments",
          "Activer GitHub Pages",
          "Récupérer l'URL du site : https://username.github.io/nom-repository/",
        ]},
        { type: "h", text: "5. Gestion des erreurs (404)" },
        { type: "list", items: [
          "Créer un fichier 404.html dans /docs",
          "Copier le contenu de index.html",
          "Adapter pour éviter les erreurs de navigation",
        ]},
      ],
    },
    {
      id: "git-versioning-revision",
      title: "Qu'est-ce que le versioning ? (révision)",
      blocks: [
        { type: "p", text: "Le versioning est un système qui permet de suivre les modifications apportées à un projet au fil du temps. Il permet de revenir à des versions précédentes, voir l'historique, et gérer plusieurs versions en parallèle." },
        { type: "h", text: "Les cycles de versions" },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────────┐
│                  CYCLE DE DÉVELOPPEMENT                      │
│                                                              │
│  Alpha ──► Bêta ──► Release Candidate ──► Stable ──► Maint. │
│                                                              │
│  Alpha   : Fonctionnalités de base, tests internes           │
│  Bêta    : Tests avec groupe restreint d'utilisateurs        │
│  RC      : Candidats à la sortie, corrections de bugs bêta   │
│  Stable  : Version finale, production                        │
│  Maint.  : Correctifs mineurs, bugs post-production          │
└──────────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Pourquoi le versioning est important ?" },
        { type: "list", items: [
          "Historique des modifications — chaque modification enregistrée avec un commit (identifiant unique)",
          "Restauration — retourner à une version antérieure stable",
          "Collaboration — plusieurs développeurs travaillent simultanément, modifications fusionnées",
          "Branches — travailler sur des fonctionnalités sans affecter la version principale",
          "Suivi des bugs — identifier quand et où un bug a été introduit",
        ]},
        { type: "h", text: "Qu'est-ce que Git ?" },
        { type: "p", text: "Git est le système de versioning le plus utilisé. Il est distribué : chaque développeur possède une copie complète de l'historique." },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────────┐
│                    CONCEPTS GIT                           │
│                                                           │
│  DÉPÔT (Repository)                                       │
│  ├── Local : sur votre ordinateur                         │
│  └── Distant : GitHub, GitLab…                            │
│                                                           │
│  COMMIT = Instantané du projet à un moment donné          │
│  (message descriptif + fichiers modifiés + métadonnées)   │
│                                                           │
│  BRANCHE (Branch) = Version distincte du projet           │
│  ├── Branche principale : main / master                   │
│  └── Branches de fonctionnalités / correctifs             │
│                                                           │
│  FUSION (Merge) = Intégrer modifications d'une branche    │
└───────────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "Avantages de Git" },
        { type: "list", items: [
          "Fiabilité et redondance — copies complètes, pas de point de défaillance unique",
          "Flexibilité — s'adapte à différents workflows",
          "Performance — opérations courantes optimisées",
        ]},
        { type: "h", text: "Créer votre premier dépôt local (VS Code)" },
        { type: "list", items: [
          "Ouvrir VS Code et votre projet (bouton \"Ouvrir le dossier\")",
          "Ouvrir le terminal intégré (clic droit sur le dossier → \"Ouvrir dans le terminal intégré\")",
        ]},
        { type: "code", filename: "git-init.sh", language: "bash", code: `git init` },
        { type: "list", items: [
          "Dans l'explorateur VS Code, les fichiers non suivis sont marqués \"U\" (Untracked)",
          "Aller dans l'icône \"Source Control\" (barre latérale gauche)",
          "Cliquer sur \"+\" pour ajouter des fichiers au suivi (ou \"Ajouter tout\")",
          "Entrer un message de commit dans le champ en haut",
          "Cliquer sur l'icône de Validation (✔) pour effectuer le commit",
        ]},
        { type: "note", variant: "info", text: "Les messages de commit doivent être explicites : \"ajout de la barre de navigation au header\" plutôt que \"premier commit\"." },
        { type: "h", text: "Utiliser GitHub pour déposer vos projets à distance" },
        { type: "p", text: "GitHub est une plateforme de développement collaboratif qui héberge des dépôts Git à distance. Fonctionnalités : issues, pull requests, GitHub Actions (CI/CD)." },
        { type: "h", text: "Pourquoi utiliser GitHub ?" },
        { type: "list", items: [
          "Collaboration — travail en équipe",
          "Hébergement — projets accessibles depuis partout",
          "Historique et traçabilité — suivi complet des modifications",
          "Sécurité — sauvegarde cloud",
        ]},
        { type: "h", text: "Étapes pour lier un dépôt local à GitHub" },
        { type: "list", items: [
          "Créer un compte sur https://github.com",
          "Dans VS Code, après le premier commit, cliquer sur \"Publier Branch\" dans le Source Control",
          "S'authentifier à GitHub via VS Code",
          "Choisir public ou privé selon le projet",
          "Le push (envoi vers GitHub) s'effectue automatiquement",
        ]},
        { type: "p", text: "Pousser les modifications vers GitHub : après un commit, cliquer sur l'icône \"Push\" dans le Source Control pour pousser vers le dépôt distant." },
        { type: "note", variant: "success", text: "Vérification : aller sur GitHub pour confirmer que les modifications apparaissent (message du dernier commit visible)." },
      ],
    },
  ],
};
