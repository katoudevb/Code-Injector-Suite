import type { Section } from "../types";

export const laravel: Section = {
  id: "laravel",
  title: "Laravel",
  icon: "Flame",
  tags: ["php"],
  subsections: [
    {
      id: "routing",
      title: "Routing et Artisan",
      blocks: [
        { type: "code", filename: "routes/api.php", language: "php", code: `<?php
use App\\Http\\Controllers\\ProduitController;
use Illuminate\\Support\\Facades\\Route;
// Routes CRUD complètes en une ligne
Route::resource('produits', ProduitController::class);
// Groupe avec préfixe + middleware
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('/stats', [ProduitController::class, 'stats']);
});` },
        { type: "code", filename: "terminal", language: "bash", code: `php artisan make:controller ProduitController --resource
php artisan make:model Produit -m  # -m = migration aussi
php artisan migrate` },
      ],
    },
    {
      id: "controleur",
      title: "Contrôleur",
      blocks: [
        { type: "code", filename: "app/Http/Controllers/ProduitController.php", language: "php", code: `<?php
namespace App\\Http\\Controllers;
use App\\Models\\Produit;
use Illuminate\\Http\\Request;

class ProduitController extends Controller
{
    public function index() { return Produit::paginate(10); }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nom' => 'required|string|max:255',
            'prix' => 'required|numeric|min:0',
        ]);
        return Produit::create($data);
    }
}` },
      ],
    },
    {
      id: "eloquent",
      title: "Eloquent ORM",
      blocks: [
        { type: "code", filename: "app/Models/Produit.php", language: "php", code: `<?php
namespace App\\Models;
use Illuminate\\Database\\Eloquent\\Model;

class Produit extends Model
{
    protected $fillable = ['nom', 'prix']; // champs assignables
    public function categorie() {
        return $this->belongsTo(Categorie::class);
    }
}
// Produit::where('prix','>',20)->with('categorie')->get();` },
      ],
    },
    {
      id: "blade",
      title: "Blade",
      blocks: [
        { type: "code", filename: "resources/views/produits.blade.php", language: "php", code: `@extends('layouts.app')
@section('content')
  <h1>Produits</h1>
  @foreach ($produits as $produit)
    <p>{{ $produit->nom }} - {{ $produit->prix }} €</p>
  @endforeach
  @auth <a href="/admin">Espace admin</a> @endauth
@endsection` },
      ],
    },
    {
      id: "auth-jobs",
      title: "Auth, middleware et jobs",
      blocks: [
        { type: "code", filename: "terminal", language: "bash", code: `composer require laravel/breeze --dev # authentification
php artisan breeze:install
php artisan make:job EnvoyerEmail      # file d'attente
php artisan queue:work                 # traite les jobs` },
        { type: "note", variant: "info", text: "Sanctum gère l'authentification API par tokens. Protégez les routes avec auth:sanctum." },
      ],
    },
  ],
};
