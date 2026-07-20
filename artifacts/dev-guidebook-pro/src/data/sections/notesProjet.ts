import type { Section } from "../types";

export const notesProjet: Section = {
  id: "notes-projet",
  title: "Notes de projet — Setup local",
  icon: "Notebook",
  tags: ["js"],
  subsections: [
    {
      id: "np-cloner-lancer-replit",
      title: "Cloner et lancer le projet en local (depuis Replit)",
      blocks: [
        { type: "h", text: "1. Exporter et cloner" },
        { type: "list", items: [
          "Exporter le projet sur GitHub",
          "Cloner le dépôt sur VSCode",
        ]},
        { type: "h", text: "2. Installer les outils" },
        { type: "code", filename: "check-node.sh", language: "bash", code: `node -v` },
        { type: "code", filename: "install-pnpm.sh", language: "bash", code: `npm install -g pnpm
pnpm -v` },
        { type: "h", text: "3. Installer les dépendances" },
        { type: "code", filename: "install.sh", language: "bash", code: `# À la racine du projet
pnpm install` },
        { type: "note", variant: "info", text: "Le package.json principal ne sert qu'à gérer plusieurs sous-projets — c'est un monorepo." },
        { type: "h", text: "Structure du monorepo" },
        { type: "list", items: [
          "🖥️ Frontend principal : artifacts/dev-guidebook-pro",
          "🎨 Maquettes : artifacts/mockup-sandbox",
          "⚙️ Backend (API) : artifacts/api-server",
        ]},
        { type: "h", text: "4. Lancer le projet" },
        { type: "code", filename: "run-dev.sh", language: "bash", code: `PORT=5173 BASE_PATH=/ pnpm dev` },
        { type: "p", text: "Résultat attendu :" },
        { type: "code", filename: "output.txt", language: "text", code: `VITE v7.3.3  ready in 193 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.116:5173/
➜  press h + enter to show help` },
      ],
    },
    {
      id: "np-trouver-bon-sous-projet",
      title: "Trouver le bon sous-projet à lancer",
      blocks: [
        { type: "p", text: "Pour savoir lequel des dossiers correspond au projet à lancer, il faut regarder leur contenu — le nom du dossier seul n'est pas une preuve suffisante." },
        { type: "h", text: "1. Regarder l'arborescence" },
        { type: "code", filename: "arborescence.sh", language: "bash", code: `l` },
        { type: "h", text: "2. Chercher les package.json des sous-projets" },
        { type: "code", filename: "find-package-json.sh", language: "bash", code: `find artifacts lib scripts -name package.json` },
        { type: "p", text: "Chercher un package qui contient un script comme :" },
        { type: "code", filename: "scripts-attendus.json", language: "json", code: `"scripts": {
  "dev": "...",
  "start": "...",
  "preview": "..."
}` },
        { type: "h", text: "3. Vérifier chaque dossier candidat" },
        { type: "code", filename: "verifier-tous.sh", language: "bash", code: `cd ~/Code-Injector-Suite/artifacts

ls -la api-server
ls -la dev-guidebook-pro
ls -la mockup-sandbox

# Ou en une seule commande
for d in */; do echo "=== $d ==="; ls "$d" | grep package.json; done` },
        { type: "code", filename: "verifier-scripts.sh", language: "bash", code: `cat dev-guidebook-pro/package.json` },
        { type: "note", variant: "success", text: "Le dossier qui contient le bon package.json avec un script \"dev\" est celui dans lequel lancer pnpm dev." },
        { type: "h", text: "Si c'est une application Vite" },
        { type: "code", filename: "lancer-vite.sh", language: "bash", code: `cd artifacts/dev-guidebook-pro
pnpm install
pnpm dev` },
        { type: "h", text: "Si c'est une application avec un serveur API (2 terminaux)" },
        { type: "code", filename: "terminal-1-api.sh", language: "bash", code: `cd artifacts/api-server
pnpm dev` },
        { type: "code", filename: "terminal-2-front.sh", language: "bash", code: `cd artifacts/dev-guidebook-pro
pnpm dev` },
        { type: "h", text: "Erreur PORT manquant" },
        { type: "note", variant: "warning", text: "PORT environment variable is required but was not provided." },
        { type: "code", filename: "fix-port.sh", language: "bash", code: `PORT=5173 BASE_PATH=/ pnpm dev` },
      ],
    },
    {
      id: "np-workflow-git",
      title: "Workflow Git — Lier le projet local à GitHub",
      blocks: [
        { type: "p", text: "Pas besoin de créer un nouveau dépôt GitHub — il suffit de lier le projet local à GitHub et d'envoyer les modifications au fur et à mesure." },
        { type: "h", text: "1. Vérifier si le projet est déjà un repo Git" },
        { type: "code", filename: "git-status.sh", language: "bash", code: `git status` },
        { type: "h", text: "2. Si ce n'est pas encore un repo Git" },
        { type: "code", filename: "git-init.sh", language: "bash", code: `git init` },
        { type: "h", text: "3. Connecter le projet à GitHub" },
        { type: "p", text: "Créer un repo sur GitHub (vide), copier l'URL, puis :" },
        { type: "code", filename: "git-remote.sh", language: "bash", code: `git remote add origin https://github.com/TON_USER/TON_REPO.git` },
        { type: "h", text: "4. Sauvegarder les changements" },
        { type: "code", filename: "git-commit.sh", language: "bash", code: `git add .
git commit -m "mes modifications"` },
        { type: "h", text: "5. Envoyer sur GitHub" },
        { type: "code", filename: "git-push.sh", language: "bash", code: `git push origin main
# Si erreur, essayer "master" à la place de "main"` },
        { type: "h", text: "Workflow habituel (à chaque modification)" },
        { type: "code", filename: "workflow-quotidien.sh", language: "bash", code: `git add .
git commit -m "description de la modif"
git push` },
        { type: "note", variant: "warning", title: "Bonnes pratiques", text: "Éviter de trop toucher pnpm-lock.yaml : c'est normal qu'il change si on installe des packages, mais ne jamais le modifier à la main, et ne pas s'inquiéter s'il change souvent." },
      ],
    },
    {
      id: "np-lovable-bun",
      title: "Lovable — Cloner un projet utilisant Bun",
      blocks: [
        { type: "p", text: "Un projet Lovable récent utilise Bun (présence d'un fichier bun.lock). Il faut installer Bun une seule fois sur la machine." },
        { type: "h", text: "1. Installer Bun" },
        { type: "code", filename: "install-bun.sh", language: "bash", code: `curl -fsSL https://bun.sh/install | bash` },
        { type: "p", text: "Recharger le terminal une fois l'installation terminée :" },
        { type: "code", filename: "reload-shell.sh", language: "bash", code: `source ~/.zshrc` },
        { type: "p", text: "Vérifier l'installation :" },
        { type: "code", filename: "check-bun.sh", language: "bash", code: `bun --version` },
        { type: "h", text: "2. Installer les dépendances" },
        { type: "code", filename: "bun-install.sh", language: "bash", code: `bun install` },
        { type: "h", text: "3. Lancer le projet" },
        { type: "code", filename: "bun-dev.sh", language: "bash", code: `bun run dev` },
        { type: "note", variant: "success", text: "Adresse obtenue généralement : http://localhost:5173" },
      ],
    },
    {
      id: "np-depannage-pnpm-mac-arm",
      title: "Dépannage — pnpm sur Mac ARM (Apple Silicon)",
      blocks: [
        { type: "p", text: "Le projet utilise pnpm et non npm — il faut l'installer d'abord." },
        { type: "h", text: "1. Installer pnpm" },
        { type: "code", filename: "install-pnpm.sh", language: "bash", code: `npm install -g pnpm` },
        { type: "h", text: "2. Lancer le projet (monorepo)" },
        { type: "code", filename: "lancer-monorepo.sh", language: "bash", code: `pnpm install
cd artifacts/dev-guidebook-pro
pnpm dev` },
        { type: "p", text: "Si ça bloque encore, depuis la racine :" },
        { type: "code", filename: "filter-workspace.sh", language: "bash", code: `pnpm install
pnpm --filter dev-guidebook-pro dev` },
        { type: "h", text: "3. Autoriser le build d'esbuild" },
        { type: "code", filename: "approve-builds.sh", language: "bash", code: `pnpm approve-builds` },
        { type: "p", text: "Une liste interactive apparaît — sélectionner esbuild avec la barre espace, puis Entrée pour confirmer. Relancer ensuite :" },
        { type: "code", filename: "reinstall.sh", language: "bash", code: `pnpm install
cd artifacts/dev-guidebook-pro
pnpm dev` },
        { type: "h", text: "4. Module natif manquant (Mac ARM / Apple Silicon)" },
        { type: "p", text: "Problème classique de module natif manquant sur Mac ARM. Solution : supprimer node_modules à la racine et réinstaller." },
        { type: "code", filename: "clean-reinstall.sh", language: "bash", code: `cd /Users/bricotteaux/Code-Injector-Suite
rm -rf node_modules
pnpm install

cd artifacts/dev-guidebook-pro
pnpm dev` },
        { type: "p", text: "Si ça ne suffit pas, forcer la résolution du module manquant depuis la racine :" },
        { type: "code", filename: "force-rollup-arm64.sh", language: "bash", code: `cd /Users/bricotteaux/Code-Injector-Suite
pnpm add -D @rollup/rollup-darwin-arm64

cd artifacts/dev-guidebook-pro
pnpm dev` },
        { type: "p", text: "Si le même problème apparaît avec esbuild, approuver les builds depuis la racine et réinstaller proprement :" },
        { type: "code", filename: "approve-builds-racine.sh", language: "bash", code: `cd /Users/bricotteaux/Code-Injector-Suite
pnpm approve-builds
# Sélectionner esbuild avec espace, puis Entrée

rm -rf node_modules
pnpm install

cd artifacts/dev-guidebook-pro
pnpm dev` },
        { type: "h", text: "Ouvrir le projet pour reprendre le travail" },
        { type: "code", filename: "reprendre.sh", language: "bash", code: `cd ~/Code-Injector-Suite/artifacts/dev-guidebook-pro
PORT=5173 BASE_PATH=/ pnpm dev` },
      ],
    },
  ],
};
