import type { Section } from "../types";

export const docker: Section = {
  id: "docker",
  title: "Docker",
  icon: "Container",
  tags: [],
  subsections: [
    {
      id: "concepts",
      title: "Concepts et commandes",
      blocks: [
        { type: "p", text: "Une image est un modèle figé (l'app + ses dépendances). Un container est une instance en cours d'exécution de cette image." },
        { type: "code", filename: "terminal", language: "bash", code: `docker ps                # containers en cours
docker images            # images locales
docker pull node:20      # télécharge une image
docker run -d -p 3000:3000 monapp # lance en arrière-plan
docker logs <id>         # logs
docker exec -it <id> sh  # terminal dans le container
docker stop <id>         # arrête` },
      ],
    },
    {
      id: "dockerfile",
      title: "Dockerfile",
      blocks: [
        { type: "code", filename: "Dockerfile", language: "dockerfile", code: `FROM node:20-alpine     # image de base légère
WORKDIR /app            # dossier de travail
COPY package*.json ./   # copie d'abord les dépendances (cache)
RUN npm install         # installe
COPY . .                # copie le reste du code
ENV NODE_ENV=production
EXPOSE 3000             # documente le port
CMD ["node", "server.js"] # commande au démarrage` },
      ],
    },
    {
      id: "multistage",
      title: "Multi-stage build",
      blocks: [
        { type: "code", filename: "Dockerfile", language: "dockerfile", code: `# Étape 1 : build
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build
# Étape 2 : image finale légère
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html` },
      ],
    },
    {
      id: "compose",
      title: "docker-compose",
      blocks: [
        { type: "code", filename: "docker-compose.yml", language: "yaml", code: `services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=mongodb://db:27017/boutique
    depends_on:
      - db          # démarre db avant app
  db:
    image: mongo:7
    volumes:
      - mongo_data:/data/db  # persiste les données
    ports:
      - "27017:27017"
volumes:
  mongo_data:` },
        { type: "code", filename: "terminal", language: "bash", code: `docker compose up -d  # lance toute la stack
docker compose down   # arrête et supprime` },
      ],
    },
    {
      id: "docker-outils-md",
      title: "Docker — Installation et commandes de gestion",
      blocks: [
        { type: "p", text: "Docker est un outil qui permet de : créer des conteneurs, gérer des images, exécuter des applications isolées." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────┐
│              DOCKER HOST                 │
│  ┌──────────┐  ┌──────────┐             │
│  │Container1│  │Container2│             │
│  │  App A   │  │  App B   │             │
│  └────┬─────┘  └────┬─────┘             │
│       │              │                  │
│  ┌────▼──────────────▼──────────────┐   │
│  │         Docker Engine            │   │
│  └──────────────────────────────────┘   │
└──────────────────────────────────────────┘
          │
    ┌─────▼──────┐
    │ Docker Hub │  (images officielles, perso, versions)
    └────────────┘`,
        },
        { type: "h", text: "Dockerfile" },
        { type: "p", text: "Fichier qui décrit comment construire une image : système, dépendances, application." },
        { type: "h", text: "Installation" },
        { type: "p", text: "Linux :" },
        { type: "code", filename: "terminal", language: "bash", code: `sudo apt install docker.io
sudo apt install docker-compose` },
        { type: "p", text: "Windows : installer Docker Desktop, redémarrer l'ordinateur." },
        { type: "p", text: "macOS : installer Docker Desktop, suivre l'installation officielle." },
        { type: "h", text: "Utilisation — Télécharger une image" },
        { type: "code", filename: "terminal", language: "bash", code: `docker pull mysql` },
        { type: "p", text: "Récupère une image depuis la bibliothèque Docker." },
        { type: "h", text: "Lancer un conteneur" },
        { type: "code", filename: "terminal", language: "bash", code: `docker run mysql` },
        { type: "p", text: "Démarre un conteneur basé sur l'image MySQL." },
        { type: "h", text: "Images" },
        { type: "p", text: "Une image Docker est un modèle prêt à l'emploi pour créer un conteneur." },
        { type: "p", text: "Bibliothèque : Docker propose des images officielles, différentes versions, images personnalisées." },
        { type: "h", text: "Commandes Docker" },
        { type: "code", filename: "terminal", language: "bash", code: `# Lancer un conteneur à partir d'une image
docker run <nom_image>

# Lister les conteneurs actifs
docker ps

# Lister tous les conteneurs
docker ps -a

# Arrêter un conteneur en cours
docker stop <id_conteneur>

# Redémarrer un conteneur arrêté
docker restart <id_conteneur>

# Supprimer un conteneur
docker rm <id_conteneur>

# Télécharger une image depuis Docker Hub
docker pull <nom_image>

# Télécharger une version spécifique
docker pull <nom_image>:<version>

# Lister les images téléchargées
docker images

# Supprimer une image locale
docker rmi <id_image>` },
      ],
    },
  ],
};
