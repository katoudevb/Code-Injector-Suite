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
  ],
};
