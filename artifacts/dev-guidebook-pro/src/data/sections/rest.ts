import type { Section } from "../types";

export const rest: Section = {
  id: "rest",
  title: "APIs & REST",
  icon: "Network",
  tags: [],
  subsections: [
    {
      id: "principes",
      title: "Principes REST",
      blocks: [
        { type: "p", text: "REST organise une API autour de ressources manipulées par les verbes HTTP. Chaque requête est indépendante (stateless)." },
        { type: "table", headers: ["Verbe", "Action", "Exemple"], rows: [["GET", "Lire", "GET /produits"], ["POST", "Créer", "POST /produits"], ["PUT", "Remplacer", "PUT /produits/1"], ["PATCH", "Modifier", "PATCH /produits/1"], ["DELETE", "Supprimer", "DELETE /produits/1"]] },
      ],
    },
    {
      id: "codes",
      title: "Codes de statut HTTP",
      blocks: [
        { type: "table", headers: ["Code", "Signification"], rows: [["200 OK", "Succès"], ["201 Created", "Ressource créée"], ["204 No Content", "Succès sans contenu"], ["400 Bad Request", "Requête invalide"], ["401 Unauthorized", "Non authentifié"], ["403 Forbidden", "Non autorisé"], ["404 Not Found", "Introuvable"], ["422 Unprocessable", "Validation échouée"], ["500 Server Error", "Erreur serveur"]] },
      ],
    },
    {
      id: "design",
      title: "Design d'URL et réponses",
      blocks: [
        { type: "code", filename: "api.txt", language: "bash", code: `# Noms au pluriel, ressources imbriquées
GET    /users               # liste
GET    /users/42            # un utilisateur
GET    /users/42/orders     # commandes d'un utilisateur
POST   /users/42/orders     # créer une commande` },
        { type: "code", filename: "reponse.json", language: "json", code: `{
  "data": [{ "id": 1, "nom": "Sac" }],
  "meta": { "page": 1, "total": 120, "parPage": 10 },
  "error": null
}` },
      ],
    },
    {
      id: "auth",
      title: "Authentification et CORS",
      blocks: [
        { type: "code", filename: "requete.txt", language: "bash", code: `# Bearer token (JWT) dans le header Authorization
GET /api/profil
Authorization: Bearer eyJhbGc.payload.signature
# Un JWT = 3 parties : header.payload.signature (base64)` },
        { type: "note", variant: "info", text: "CORS : le serveur autorise certaines origines via Access-Control-Allow-Origin. Une requête préflight (OPTIONS) précède les requêtes complexes." },
      ],
    },
  ],
};
