import type { Section } from "../types";

export const symfony: Section = {
  id: "symfony",
  title: "Symfony",
  icon: "Layers",
  tags: ["php"],
  subsections: [
    {
      id: "controleur",
      title: "Contrôleur et routing",
      blocks: [
        { type: "code", filename: "src/Controller/ProduitController.php", language: "php", code: `<?php
namespace App\\Controller;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\JsonResponse;
use Symfony\\Component\\Routing\\Attribute\\Route;

class ProduitController extends AbstractController
{
    #[Route('/produits', name: 'produits_liste', methods: ['GET'])]
    public function liste(): JsonResponse
    {
        return $this->json([['id' => 1, 'nom' => 'Sac']]);
    }

    #[Route('/produit/{id}', name: 'produit_voir')]
    public function voir(int $id): JsonResponse
    {
        return $this->json(['id' => $id]);
    }
}` },
      ],
    },
    {
      id: "doctrine",
      title: "Doctrine ORM",
      blocks: [
        { type: "code", filename: "src/Entity/Produit.php", language: "php", code: `<?php
namespace App\\Entity;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
class Produit
{
    #[ORM\\Id, ORM\\GeneratedValue, ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private string $nom;

    public function getNom(): string { return $this->nom; }
    public function setNom(string $nom): self { $this->nom = $nom; return $this; }
}` },
        { type: "code", filename: "terminal", language: "bash", code: `php bin/console make:entity                  # créer une entité
php bin/console make:migration               # générer le SQL
php bin/console doctrine:migrations:migrate  # appliquer` },
      ],
    },
    {
      id: "relations",
      title: "Relations Doctrine",
      blocks: [
        { type: "code", filename: "src/Entity/Commande.php", language: "php", code: `<?php
// Une commande appartient à un utilisateur (ManyToOne)
#[ORM\\ManyToOne(inversedBy: 'commandes')]
private ?User $user = null;
// Une commande a plusieurs lignes (OneToMany)
#[ORM\\OneToMany(mappedBy: 'commande', targetEntity: LigneCommande::class)]
private Collection $lignes;` },
      ],
    },
    {
      id: "twig",
      title: "Twig",
      blocks: [
        { type: "code", filename: "templates/produit/liste.html.twig", language: "twig", code: `{% extends 'base.html.twig' %} {# hérite du layout #}
{% block body %}
  <h1>Produits</h1>
  <ul>
    {% for produit in produits %}
      <li>{{ produit.nom }} - {{ produit.prix }} €</li>
    {% else %}
      <li>Aucun produit</li>
    {% endfor %}
  </ul>
{% endblock %}` },
      ],
    },
    {
      id: "form-securite",
      title: "Formulaires et sécurité",
      blocks: [
        { type: "code", filename: "src/Controller/ProduitController.php", language: "php", code: `<?php
$form = $this->createForm(ProduitType::class, $produit);
$form->handleRequest($request);
if ($form->isSubmitted() && $form->isValid()) {
    $em->persist($produit);
    $em->flush(); // enregistre en base
    return $this->redirectToRoute('produits_liste');
}` },
        { type: "note", variant: "info", text: "Contraintes sur les entités (#[Assert\\NotBlank], #[Assert\\Email]) et IS_GRANTED pour les autorisations." },
      ],
    },
  ],
};
