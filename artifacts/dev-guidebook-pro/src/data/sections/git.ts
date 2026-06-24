import type { Section } from "../types";

export const git: Section = {
  id: "git",
  title: "Git & Terminal",
  icon: "GitBranch",
  tags: [],
  subsections: [
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
  ],
};
