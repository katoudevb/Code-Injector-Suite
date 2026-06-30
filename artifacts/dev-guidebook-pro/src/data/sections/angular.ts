import type { Section } from "../types";

export const angular: Section = {
  id: "angular",
  title: "Angular",
  icon: "Shield",
  tags: ["ts"],
  subsections: [

    // ── CLI & MISE EN PLACE ─────────────────────────────────────────────────
    {
      id: "angular-cli",
      title: "Commandes Angular CLI",
      blocks: [
        { type: "h", text: "Installation" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install -g @angular/cli` },
        { type: "h", text: "Création projet" },
        { type: "code", filename: "terminal", language: "bash", code: `ng new nom-projet
ng new nom-projet --minimal        # Sans tests
ng new --no-standalone             # Sans standalone (utile si je veux app.module.ts)` },
        { type: "h", text: "Générer des éléments" },
        { type: "code", filename: "terminal", language: "bash", code: `ng g c nom-composant   # composant
ng g s nom-service     # service
ng g m nom-module      # module
ng g d nom-directive   # directive
ng g i nom-interface   # interface
ng g p nom-pipe        # pipe` },
        { type: "h", text: "Lancer et tester" },
        { type: "code", filename: "terminal", language: "bash", code: `ng serve
ng serve --open
ng test` },
      ],
    },

    {
      id: "angular-setup",
      title: "Mise en place Angular",
      blocks: [
        { type: "p", text: "Angular nécessite Node.js (version LTS recommandée). Télécharger sur https://nodejs.org" },
        { type: "code", filename: "terminal", language: "bash", code: `# 1. Vérifier Node.js
node -v

# 2. Vérifier npm
npm -v
npm install -g npm@latest   # optionnel mais recommandé

# 3. Installer Angular CLI
npm install -g @angular/cli

# 4. Vérifier Angular
ng version

# 5. Aide Angular CLI
ng help` },
        { type: "note", variant: "info", text: "Lors de la première exécution, Angular peut demander une question de confidentialité (analytics) → répondre N." },
        { type: "note", variant: "info", text: "Extension VS Code importante : 'Angular Language Service' — permet auto-complétion Angular, détection d'erreurs dans les templates HTML et meilleure navigation dans le code." },
      ],
    },

    // ── STRUCTURE PROJET ────────────────────────────────────────────────────
    {
      id: "angular-structure-projet",
      title: "Structure d'un projet Angular",
      blocks: [
        {
          type: "diagram",
          content: `nom-projet/
│
├── node_modules/              # Dépendances npm installées
│
├── src/                       # Code source principal
│   │
│   ├── app/                   # Application Angular
│   │   ├── components/        # Composants réutilisables (optionnel)
│   │   ├── pages/             # Pages de l'application (optionnel)
│   │   ├── services/          # Services (API, logique métier)
│   │   │
│   │   ├── app-routing.module.ts  # Configuration des routes
│   │   ├── app.component.ts       # Composant racine
│   │   └── app.module.ts          # Module principal
│   │
│   ├── assets/                # Images, fichiers statiques
│   ├── environments/          # Variables d'environnement
│   │   ├── environment.ts         # Dev
│   │   └── environment.prod.ts    # Production
│   │
│   ├── index.html             # Page HTML principale
│   ├── main.ts                # Point d'entrée Angular
│   ├── styles.css             # Styles globaux
│   ├── polyfills.ts           # Compatibilité navigateurs
│   └── favicon.ico            # Icône du site
│
├── angular.json               # Configuration Angular CLI
├── package.json               # Dépendances + scripts npm
├── package-lock.json          # Version exacte des dépendances
├── tsconfig.json              # Configuration TypeScript globale
├── tsconfig.app.json          # Configuration TypeScript app
└── README.md                  # Documentation du projet`,
        },
      ],
    },

    // ── FICHIERS CLÉS ──────────────────────────────────────────────────────
    {
      id: "angular-fichiers",
      title: "Fichiers clés d'un projet Angular",
      blocks: [
        { type: "p", text: "1. index.html — Point d'entrée HTML. Angular injecte toute l'application dans la balise <app-root>." },
        { type: "p", text: "2. main.ts — Point d'entrée de l'application. Démarre Angular et charge le module principal (AppModule)." },
        { type: "code", filename: "main.ts", language: "typescript", code: `platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));` },
        { type: "p", text: "3. app.component.ts — Composant racine. Définit le composant principal avec le selector <app-root>." },
        { type: "code", filename: "app.component.ts", language: "typescript", code: `@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})` },
        { type: "p", text: "4. app.component.html — Vue principale (structure globale). Contient le layout général et sert de conteneur aux autres composants." },
        { type: "code", filename: "app.component.html", language: "html", code: `<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>` },
        { type: "p", text: "5. app.module.ts — Module racine Angular. Déclare les composants, importe les modules et configure l'application." },
      ],
    },

    // ── COMPOSANT ───────────────────────────────────────────────────────────
    {
      id: "composant",
      title: "Composant Angular",
      blocks: [
        { type: "h", text: "Structure d'un composant (4 fichiers)" },
        {
          type: "diagram",
          content: `MonComposant/
├── mon-composant.component.ts       # logique
├── mon-composant.component.html     # template
├── mon-composant.component.css      # style
└── mon-composant.component.spec.ts  # test unitaire`,
        },
        { type: "h", text: "Composition interne" },
        { type: "p", text: "1. Selector — Permet d'utiliser le composant dans le HTML." },
        { type: "code", filename: "mon-composant.component.ts", language: "typescript", code: `selector: 'app-mon-composant'` },
        { type: "code", filename: "template.html", language: "html", code: `<app-mon-composant></app-mon-composant>` },
        { type: "p", text: "2. Template — Contient le HTML du composant." },
        { type: "code", filename: "mon-composant.component.ts", language: "typescript", code: `templateUrl: './mon-composant.component.html'` },
        { type: "p", text: "3. Styles — Définit les styles CSS du composant." },
        { type: "code", filename: "mon-composant.component.ts", language: "typescript", code: `styleUrls: ['./mon-composant.component.css']` },
        { type: "p", text: "4. Classe du composant — Contient la logique (TypeScript). Sert à gérer les variables, fonctions, interactions." },
        { type: "code", filename: "mon-composant.component.ts", language: "typescript", code: `export class MonComposantComponent {
  message = "Bonjour Angular";

  click() {
    console.log("clic !");
  }
}` },
        { type: "h", text: "Composant complet" },
        { type: "code", filename: "hello.component.ts", language: "typescript", code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title = "Hello Angular";
}` },
        { type: "h", text: "Composant standalone (Angular 17+)" },
        { type: "code", filename: "produit.component.ts", language: "typescript", code: `import { Component } from "@angular/core";

@Component({
  selector: "app-produit",
  standalone: true,
  template: \`
    <h2>{{ nom }}</h2>
    <button (click)="acheter()">Acheter</button>
  \`,
})
export class ProduitComponent {
  nom = "Sac à dos";
  acheter() { console.log("Acheté"); }
}` },
      ],
    },

    // ── COMPOSANT DYNAMIQUE @INPUT ──────────────────────────────────────────
    {
      id: "angular-input",
      title: "Composant dynamique avec @Input",
      blocks: [
        { type: "p", text: "Un composant dynamique est un composant enfant qui reçoit des données depuis un composant parent. Il est rendu réutilisable grâce à @Input(). Les données sont transmises via des propriétés HTML." },
        {
          type: "diagram",
          content: `Communication parent → enfant

Parent ──[@Input()]──► Enfant`,
        },
        { type: "h", text: "1. Composant enfant" },
        { type: "code", filename: "carte-utilisateur.component.ts", language: "typescript", code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-utilisateur',
  templateUrl: './carte-utilisateur.component.html',
  styleUrls: ['./carte-utilisateur.component.css']
})
export class CarteUtilisateurComponent {
  @Input() nom: string = '';
  @Input() email: string = '';
  @Input() actif: boolean = false;
}` },
        { type: "h", text: "2. Template enfant" },
        { type: "code", filename: "carte-utilisateur.component.html", language: "html", code: `<div class="carte" [class.inactif]="!actif">
  <h3>{{ nom }}</h3>
  <p>{{ email }}</p>
  <p *ngIf="actif">✅ Utilisateur actif</p>
  <p *ngIf="!actif">❌ Utilisateur inactif</p>
</div>` },
        { type: "h", text: "3. Composant parent" },
        { type: "code", filename: "parent.component.html", language: "html", code: `<h2>Liste des utilisateurs</h2>

<app-carte-utilisateur
  [nom]="'Alice'"
  [email]="'alice@example.com'"
  [actif]="true">
</app-carte-utilisateur>

<app-carte-utilisateur
  [nom]="'Bob'"
  [email]="'bob@example.com'"
  [actif]="false">
</app-carte-utilisateur>` },
        {
          type: "table",
          headers: ["Concept", "Rôle"],
          rows: [
            ["@Input()", "Reçoit une donnée du parent"],
            ["[nom]", "Binding vers le composant enfant"],
            ["{{ nom }}", "Interpolation"],
            ["*ngIf", "Condition"],
            ["[class.xxx]", "Classe CSS dynamique"],
          ],
        },
      ],
    },

    // ── IMAGES ──────────────────────────────────────────────────────────────
    {
      id: "angular-images",
      title: "Images Angular",
      blocks: [
        { type: "h", text: "Dans angular.json (configuration assets)" },
        { type: "code", filename: "angular.json", language: "json", code: `"assets": [
  "src/favicon.ico",
  "src/assets"
],` },
        { type: "h", text: "Dans le template (chemin depuis src/assets/)" },
        { type: "code", filename: "template.html", language: "html", code: `<img src="assets/logo.png" alt="logo">` },
      ],
    },

    // ── BINDING ─────────────────────────────────────────────────────────────
    {
      id: "liaisons",
      title: "Types de Binding en Angular",
      blocks: [
        { type: "p", text: "Le binding permet de faire communiquer le TypeScript (composant) et la vue HTML." },
        {
          type: "diagram",
          content: `TYPES DE BINDING
┌──────────────────┬───────────────────────────┬──────────────────────┐
│ Type de binding  │ Syntaxe                   │ Sens                 │
├──────────────────┼───────────────────────────┼──────────────────────┤
│ Interpolation    │ {{ expression }}           │ Composant → Vue      │
│ Property binding │ [propriété]="expression"  │ Composant → Vue      │
│ Event binding    │ (événement)="méthode()"   │ Vue → Composant      │
│ Two-way binding  │ [(ngModel)]="propriété"   │ Bidirectionnel ↔     │
└──────────────────┴───────────────────────────┴──────────────────────┘`,
        },
        { type: "h", text: "Interpolation — afficher une variable" },
        { type: "code", filename: "template.html", language: "html", code: `<h1>{{ titre }}</h1>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `titre: string = 'Bonjour Kat';` },
        { type: "h", text: "Property binding — modifier une propriété HTML" },
        { type: "code", filename: "template.html", language: "html", code: `<img [src]="imageUrl"/>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `imageUrl: string = 'assets/logo.png';` },
        { type: "h", text: "Event binding — réagir à une action utilisateur" },
        { type: "code", filename: "template.html", language: "html", code: `<button (click)="afficherMessage()">Clique-moi</button>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `afficherMessage() {
  alert('Bonjour Kat !');
}` },
        { type: "h", text: "Two-way binding — liaison dans les 2 sens" },
        { type: "code", filename: "template.html", language: "html", code: `<input [(ngModel)]="prenom"/>
<p>Bonjour {{ prenom }} !</p>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `prenom: string = '';` },
        { type: "note", variant: "warning", text: "Pour utiliser ngModel, il faut importer FormsModule dans app.module.ts : import { FormsModule } from '@angular/forms';" },
        { type: "h", text: "Résumé mnémotechnique" },
        {
          type: "diagram",
          content: `{{ }}  → afficher
[ ]    → envoyer données vers HTML
( )    → écouter événements
[()]   → liaison double`,
        },
        { type: "h", text: "Liaisons et directives (Angular 17+)" },
        { type: "code", filename: "liste.component.html", language: "html", code: `<img [src]="urlImage" [alt]="nom" /> <!-- liaison de propriété -->
<input [(ngModel)]="recherche" />    <!-- liaison bidirectionnelle -->

<!-- Control flow Angular 17+ -->
@if (produits.length > 0) {
  <ul>
    @for (p of produits; track p.id) { <li>{{ p.nom }}</li> }
  </ul>
} @else {
  <p>Aucun produit</p>
}` },
      ],
    },

    // ── DIRECTIVES ──────────────────────────────────────────────────────────
    {
      id: "angular-directives",
      title: "Directives Angular",
      blocks: [
        { type: "h", text: "Anciennes directives (AngularJS)" },
        {
          type: "list",
          items: [
            "ng-model → liaison input ↔ variable",
            "ng-repeat → boucle (remplacé par ngFor)",
            "ng-if → condition (remplacé par ngIf)",
            "ng-click → clic (remplacé par (click))",
          ],
        },
        { type: "h", text: "2 grandes catégories (Angular moderne)" },
        {
          type: "diagram",
          content: `DIRECTIVES MODERNES
├── Structurelles  → modifier la structure du DOM
│   ├── ajouter des éléments
│   ├── supprimer des éléments
│   └── réorganiser des éléments
└── Attributs      → modifier l'apparence ou le comportement`,
        },
        { type: "h", text: "ngIf — condition" },
        { type: "code", filename: "template.html", language: "html", code: `<div *ngIf="isVisible">
  Je suis visible
</div>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `isVisible = true;` },
        { type: "code", filename: "template.html", language: "html", code: `<!-- avec else -->
<div *ngIf="isConnected; else notConnected">
  Connecté
</div>

<ng-template #notConnected>
  <p>Merci de vous connecter</p>
</ng-template>` },
        { type: "h", text: "ngFor — boucle" },
        { type: "code", filename: "template.html", language: "html", code: `<ul>
  <li *ngFor="let fruit of fruits">
    {{ fruit }}
  </li>
</ul>

<!-- avec index -->
<li *ngFor="let fruit of fruits; let i = index">
  {{ i + 1 }} - {{ fruit }}
</li>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `fruits = ['Pomme', 'Banane', 'Orange'];` },
        { type: "h", text: "ngSwitch — conditions multiples" },
        { type: "code", filename: "template.html", language: "html", code: `<div [ngSwitch]="valeur">
  <p *ngSwitchCase="'cas1'">Cas 1</p>
  <p *ngSwitchCase="'cas2'">Cas 2</p>
  <p *ngSwitchDefault>Défaut</p>
</div>` },
        { type: "h", text: "ngClass — classes dynamiques" },
        { type: "code", filename: "template.html", language: "html", code: `<p [ngClass]="{ important: isImportant }">
  Texte
</p>` },
        { type: "code", filename: "composant.ts", language: "typescript", code: `isImportant = true;` },
        { type: "code", filename: "styles.css", language: "css", code: `.important {
  color: red;
  font-weight: bold;
}` },
        { type: "h", text: "ngStyle — styles dynamiques" },
        { type: "code", filename: "template.html", language: "html", code: `<p [ngStyle]="{ color: estUrgent ? 'red' : 'green' }">
  Statut
</p>

<button [disabled]="isDisabled">Valider</button>` },
      ],
    },

    // ── SERVICES ────────────────────────────────────────────────────────────
    {
      id: "services",
      title: "Services Angular",
      blocks: [
        { type: "p", text: "Un service est une classe Angular utilisée pour centraliser la logique métier, partager des données entre composants et gérer les appels API. Il est injecté dans les composants via Dependency Injection." },
        { type: "h", text: "Créer un service" },
        { type: "code", filename: "terminal", language: "bash", code: `ng generate service nom-du-service` },
        { type: "h", text: "Structure du service" },
        { type: "code", filename: "nom-du-service.service.ts", language: "typescript", code: `import { Injectable } from '@angular/core';

@Injectable() // Injection par composant
export class TodoService {
  // ...
}

// OU

@Injectable({
  providedIn: 'root'     // Injection globale (singleton)
  // OU
  // providedIn: UserModule  // Injection dans le module
})
export class NomDuServiceService {
  constructor() { }

  getData(): string {
    return 'Données du service';
  }
}` },
        { type: "h", text: "Injection du service dans un composant" },
        { type: "code", filename: "exemple.component.ts", language: "typescript", code: `import { Component, OnInit } from '@angular/core';
import { NomDuServiceService } from '../services/nom-du-service.service';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html'
})
export class ExempleComponent implements OnInit {
  data: string;

  constructor(private service: NomDuServiceService) { }

  ngOnInit(): void {
    this.data = this.service.getData();
  }
}` },
        { type: "code", filename: "exemple.component.html", language: "html", code: `<ul>
  <li *ngFor="let item of data">
    {{ item.nom }}
  </li>
</ul>` },
        { type: "h", text: "Service avec HttpClient + Observable" },
        { type: "code", filename: "user.service.ts", language: "typescript", code: `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  getUsers$(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById$(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }
}` },
        { type: "code", filename: "user-list.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from './user.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers$();
  }
}` },
        { type: "code", filename: "user-list.component.html", language: "html", code: `<ul *ngIf="users$ | async as users; else loading">
  <li *ngFor="let user of users">
    {{ user.id }} - {{ user.name }} ({{ user.email }})
  </li>
</ul>

<ng-template #loading>
  <p>Chargement des utilisateurs...</p>
</ng-template>` },
        { type: "code", filename: "main.ts", language: "typescript", code: `import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});` },
        { type: "h", text: "Appels HTTP dans un ApiService" },
        { type: "code", filename: "api.service.ts", language: "typescript", code: `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://api.exemple.com';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any>(\`\${this.apiUrl}/items\`);
  }
}` },
        { type: "h", text: "Utilisation avec subscribe()" },
        { type: "code", filename: "item-list.component.ts", language: "typescript", code: `export class ItemListComponent implements OnInit {
  items: any[] = [];
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe({
      next: (data) => { this.items = data; },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des items';
        console.error(error);
      }
    });
  }
}` },
        {
          type: "table",
          headers: ["Étape", "Description"],
          rows: [
            ["Création du service", "ng generate service nom-du-service"],
            ["Injection dans composant", "Via constructeur (private service: NomService)"],
            ["Méthodes HTTP dans service", "Utilisation de HttpClient"],
            ["Consommation dans composant", "Abonnement à l'Observable (subscribe())"],
            ["Gestion des erreurs", "Avec le callback error dans le subscribe()"],
            ["Affichage dans template", "Binding des données (*ngFor, interpolation)"],
          ],
        },
        { type: "h", text: "Organisation des services" },
        {
          type: "diagram",
          content: `/src/app/
  services/
    auth.service.ts
    user.service.ts
    api/
      http.interceptor.ts
      token-storage.service.ts`,
        },
        { type: "h", text: "Services avec Routes Standalone" },
        { type: "code", filename: "app.routes.ts", language: "typescript", code: `const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
    providers: [DashboardService]
  }
];` },
      ],
    },

    // ── DÉCORATEURS ─────────────────────────────────────────────────────────
    {
      id: "angular-decorateurs",
      title: "Les décorateurs Angular",
      blocks: [
        { type: "p", text: "Un décorateur Angular est une fonction spéciale qui ajoute des métadonnées à une classe, une propriété ou une méthode. Il permet à Angular de comprendre comment utiliser ton code." },
        {
          type: "diagram",
          content: `DÉCORATEURS ANGULAR
┌────────────────────┬─────────────────┬───────────────────────────────────┐
│ Décorateur         │ S'applique à    │ Rôle                              │
├────────────────────┼─────────────────┼───────────────────────────────────┤
│ @Component()       │ classe          │ Définit un composant Angular      │
│ @NgModule()        │ classe          │ Définit un module Angular         │
│ @Injectable()      │ classe          │ Crée un service injectable        │
│ @Input()           │ propriété       │ Reçoit données du parent          │
│ @Output()          │ propriété       │ Envoie données au parent          │
│ @HostListener()    │ méthode         │ Écoute événements DOM             │
│ @ViewChild()       │ propriété       │ Accède à un élément du template   │
│ @Directive()       │ classe          │ Crée une directive personnalisée  │
│ @Pipe()            │ classe          │ Crée un pipe personnalisé         │
└────────────────────┴─────────────────┴───────────────────────────────────┘`,
        },
        { type: "code", filename: "decorateurs.ts", language: "typescript", code: `// @Component() — interface utilisateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

// @NgModule() — organisation de l'app
@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  bootstrap: []
})
export class AppModule {}

// @Injectable() — services
@Injectable({ providedIn: 'root' })
export class DataService {}

// @Input() — parent → enfant
@Input() nom: string = '';

// @Output() — enfant → parent
@Output() clickEvent = new EventEmitter<string>();

// @HostListener() — écoute événements DOM
@HostListener('click')
onClick() { console.log('clic détecté'); }

// @ViewChild() — accès DOM/template
@ViewChild('monElement') element: any;

// @Pipe() — transformation de données
@Pipe({ name: 'monPipe' })
export class MonPipe {}` },
      ],
    },

    // ── PIPES ───────────────────────────────────────────────────────────────
    {
      id: "angular-pipes",
      title: "Les Pipes en Angular",
      blocks: [
        { type: "p", text: "Un pipe est un outil Angular qui permet de transformer l'affichage des données dans le template sans modifier la valeur dans le composant. Il agit uniquement sur l'affichage (UI)." },
        { type: "h", text: "Structure de base" },
        { type: "code", filename: "nom-du-pipe.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomDeTaPipe' // utilisé dans le HTML
})
export class NomDeTaPipe implements PipeTransform {
  transform(valeur: any, ...parametres: any[]): any {
    // Traitement ici
    return valeur;
  }
}` },
        { type: "h", text: "Utilisation" },
        { type: "code", filename: "template.html", language: "html", code: `<p>{{ expression | nomDuPipe: argument : argument : .. }}</p>` },
        { type: "h", text: "Pipes natifs" },
        { type: "code", filename: "template.html", language: "html", code: `<!-- DatePipe -->
{{ today | date:'fullDate' }}

<!-- CurrencyPipe -->
{{ amount | currency:'EUR' }}

<!-- DecimalPipe -->
{{ numberValue | number:'1.2-2' }}

<!-- PercentPipe -->
{{ value | percent }}

<!-- JsonPipe -->
{{ object | json }}

<!-- LowerCasePipe / UpperCasePipe / TitleCasePipe -->
{{ text | lowercase }}
{{ text | uppercase }}
{{ text | titlecase }}

<!-- SlicePipe -->
{{ items | slice:0:3 }}

<!-- AsyncPipe — Observables / Promises -->
{{ data$ | async }}

<!-- KeyValuePipe — Transforme un objet en liste -->
<div *ngFor="let item of object | keyvalue">
  {{ item.key }} : {{ item.value }}
</div>` },
        { type: "h", text: "Pipe personnalisé" },
        { type: "code", filename: "encadrer.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'encadrer' })
export class EncadrerPipe implements PipeTransform {
  transform(value: string, debut = '[', fin = ']'): string {
    return \`\${debut}\${value}\${fin}\`;
  }
}` },
        { type: "code", filename: "template.html", language: "html", code: `<p>{{ 'Bonjour Kat' | encadrer }}</p>
<p>{{ 'Important' | encadrer:'<' :'>' }}</p>` },
        { type: "code", filename: "app.module.ts", language: "typescript", code: `@NgModule({
  declarations: [
    AppComponent,
    EncadrerPipe
  ]
})
export class AppModule {}` },
        { type: "code", filename: "sort-by-name.pipe.ts", language: "typescript", code: `@Pipe({ name: 'sortByName' })
export class SortByNamePipe implements PipeTransform {
  transform(array: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if (!Array.isArray(array)) return array;
    return array.sort((a, b) => {
      const nameA = a.name?.toLowerCase() || '';
      const nameB = b.name?.toLowerCase() || '';
      return order === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }
}` },
        { type: "code", filename: "template.html", language: "html", code: `<li *ngFor="let item of items | sortByName:'asc'">
  {{ item.name }}
</li>` },
        { type: "h", text: "Composant TypeScript associé" },
        { type: "code", filename: "app.component.ts", language: "typescript", code: `export class AppComponent {
  items = [
    { name: 'Zoé' },
    { name: 'Albert' },
    { name: 'Mathieu' }
  ];
}` },
        { type: "h", text: "Enregistrement dans app.module.ts (pipe non-standalone)" },
        { type: "code", filename: "app.module.ts", language: "typescript", code: `import { SortByNamePipe } from './sort-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortByNamePipe
  ],
  // ...
})
export class AppModule {}` },
        { type: "h", text: "Pipe avec locale (fr-FR)" },
        { type: "code", filename: "app.module.ts", language: "typescript", code: `import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class AppModule {}` },
        { type: "code", filename: "template.html", language: "html", code: `<p>Date localisée : {{ today | date:'fullDate' }}</p>` },
        { type: "code", filename: "app.component.ts", language: "typescript", code: `export class AppComponent {
  today: Date = new Date();
}` },
        { type: "h", text: "Pipe Standalone" },
        { type: "code", filename: "nom-du-pipe.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomDuPipe',
  standalone: true
})
export class NomDuPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value;
  }
}` },
        {
          type: "table",
          headers: ["Élément", "Rôle"],
          rows: [
            ["@Pipe", "Décorateur qui identifie la classe comme un pipe"],
            ["name", "Nom utilisé dans le template ({{ data | name }})"],
            ["standalone: true", "Obligatoire en Angular standalone pour que le pipe soit autonome"],
            ["transform()", "Méthode obligatoire — contient la logique de transformation"],
            ["value", "Première valeur passée au pipe (ex: {{ value | pipe }})"],
            ["...args", "Paramètres supplémentaires (facultatifs)"],
          ],
        },
        { type: "h", text: "Pipe avec arguments" },
        { type: "code", filename: "truncate.pipe.ts", language: "typescript", code: `@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20, suffix: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + suffix : value;
  }
}` },
        { type: "code", filename: "template.html", language: "html", code: `<p>{{ texteLong | truncate:30:' [...]' }}</p>` },
        { type: "h", text: "Créer un pipe (CLI)" },
        { type: "code", filename: "terminal", language: "bash", code: `ng generate pipe NomPipe` },
        { type: "code", filename: "capitalize.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // Logique ici
  }
}` },
        { type: "h", text: "Utilisation dans un composant standalone" },
        { type: "code", filename: "demo.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: \`<p>{{ 'angular' | capitalize }}</p>\`,
  imports: [CapitalizePipe] // on importe le pipe ici
})
export class DemoComponent {}` },
      ],
    },

    // ── PIPES AVEC ARGUMENTS — EXEMPLES COMPLETS ────────────────────────────
    {
      id: "angular-pipes-arguments",
      title: "Pipes standalone avec arguments — exemples complets",
      blocks: [
        { type: "h", text: "Utilisation d'un pipe simple dans un composant standalone" },
        { type: "code", filename: "exemple.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe'; // chemin à adapter

@Component({
  selector: 'app-exemple',
  standalone: true,
  imports: [CapitalizePipe], // obligatoire
  templateUrl: './exemple.component.html'
})
export class ExempleComponent {
  titre = 'angular standalone pipe';
}` },
        { type: "code", filename: "exemple.component.html", language: "html", code: `<p>{{ titre | capitalize }}</p>` },
        { type: "h", text: "Pipe truncate avec arguments (limite, suffixe)" },
        { type: "code", filename: "truncate.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20, suffix: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + suffix : value;
  }
}` },
        { type: "code", filename: "demo.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';

@Component({
  standalone: true,
  selector: 'app-demo',
  imports: [TruncatePipe],
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  texteLong = 'Ceci est une très longue chaîne de caractères destinée à être tronquée.';
}` },
        { type: "code", filename: "demo.component.html", language: "html", code: `<p>{{ texteLong | truncate:30:' [...]' }}</p>` },
        { type: "h", text: "Pipe userLabel avec capitalisation + suffixe configurables" },
        { type: "code", filename: "user-label.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userLabel',
  standalone: true
})
export class UserLabelPipe implements PipeTransform {
  transform(
    value: string,
    capitalize: boolean = true,
    suffix: string = ''
  ): string {
    if (!value) return '';
    let result = value;
    if (capitalize) {
      result = value.charAt(0).toUpperCase() + value.slice(1);
    }
    return suffix ? \`\${result}\${suffix}\` : result;
  }
}` },
        { type: "code", filename: "user-display.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLabelPipe } from './user-label.pipe';

@Component({
  standalone: true,
  selector: 'app-user-display',
  imports: [CommonModule, UserLabelPipe],
  templateUrl: './user-display.component.html'
})
export class UserDisplayComponent {
  username = 'charlie';
}` },
        { type: "code", filename: "user-display.component.html", language: "html", code: `<h3>Affichage du nom</h3>

<!-- Capitalisation + suffixe personnalisé -->
<p>{{ username | userLabel:true:'(admin)' }}</p>

<!-- Sans capitalisation, avec suffixe -->
<p>{{ username | userLabel:false:'[readonly]' }}</p>

<!-- Capitalisation seule -->
<p>{{ username | userLabel }}</p>` },
      ],
    },

    // ── CYCLE DE RÉCUPÉRATION DE DONNÉES BASÉES SUR LA ROUTE ────────────────
    {
      id: "angular-cycle-route-donnees",
      title: "Cycle de récupération de données basées sur la route",
      blocks: [
        { type: "h", text: "1. Définir la route" },
        { type: "code", filename: "app.routes.ts", language: "typescript", code: `import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

export const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent }
];` },
        { type: "h", text: "2. Récupération de l'ID dans le composant" },
        { type: "code", filename: "user-detail.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from './user.service';
import { AsyncPipe } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-user-detail',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    // Récupère l'ID dans l'URL, puis charge l'utilisateur
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.userService.getUserById$(id);
      })
    );
  }
}` },
        { type: "code", filename: "user-detail.component.html", language: "html", code: `<div *ngIf="user$ | async as user; else loading">
  <h2>Détail de l'utilisateur</h2>
  <p>Nom : {{ user.name }}</p>
  <p>Email : {{ user.email }}</p>
</div>

<ng-template #loading>
  <p>Chargement...</p>
</ng-template>` },
        { type: "h", text: "3. Appliquer un pipe sur les données récupérées" },
        { type: "code", filename: "user-label.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userLabel',
  standalone: true
})
export class UserLabelPipe implements PipeTransform {
  transform(
    value: string,
    capitalize: boolean = true,
    suffix: string = ''
  ): string {
    if (!value) return '';
    let result = value;
    if (capitalize) {
      result = value.charAt(0).toUpperCase() + value.slice(1);
    }
    return suffix ? \`\${result}\${suffix}\` : result;
  }
}` },
        { type: "code", filename: "user.display.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLabelPipe } from './user-label.pipe';

@Component({
  standalone: true,
  selector: 'app-user-display',
  imports: [CommonModule, UserLabelPipe],
  templateUrl: './user-display.component.html'
})
export class UserDisplayComponent {
  username = 'charlie';
}` },
        { type: "note", variant: "info", text: "Le Service est utilisé dans le .ts du composant pour récupérer/traiter des données (souvent via Observable). Le Pipe est utilisé dans le .html du composant pour transformer l'affichage (vue uniquement)." },
      ],
    },

    // ── ROUTING ─────────────────────────────────────────────────────────────
    {
      id: "angular-routing",
      title: "Routing Angular",
      blocks: [
        { type: "p", text: "Le routing Angular permet de naviguer entre plusieurs pages sans recharger l'application (SPA)." },
        { type: "h", text: "Création de app-routing.module.ts" },
        { type: "code", filename: "app-routing.module.ts", language: "typescript", code: `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } // Route 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}` },
        { type: "h", text: "Navigation HTML (sans rechargement)" },
        { type: "code", filename: "nav.component.html", language: "html", code: `<nav>
  <a routerLink="/accueil">Accueil</a>
  <a routerLink="/contact">Contact</a>
</nav>

<router-outlet></router-outlet>` },
        { type: "h", text: "Router standalone" },
        { type: "code", filename: "app.config.ts", language: "typescript", code: `import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig = [provideRouter(routes)];` },
        { type: "code", filename: "main.ts", language: "typescript", code: `import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

bootstrapApplication(AppComponent, {
  providers: [...appConfig]
});` },
        { type: "code", filename: "app.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <nav>
      <a routerLink="/">Accueil</a> |
      <a routerLink="/about">À propos</a>
    </nav>
    <router-outlet></router-outlet>
  \`
})
export class AppComponent {}` },
      ],
    },

    // ── ARCHITECTURE ────────────────────────────────────────────────────────
    {
      id: "angular-architecture",
      title: "Architecture Angular — blocs fondamentaux",
      blocks: [
        {
          type: "diagram",
          content: `ARCHITECTURE ANGULAR
┌──────────────────────────────────────────────────────────────┐
│ AppModule                                                    │
│ ├── Composants  ──── template HTML + logique TS             │
│ ├── Services    ──── logique métier + données partagées     │
│ ├── Directives  ──── modification DOM / comportement        │
│ ├── Pipes       ──── transformation affichage               │
│ └── Routing     ──── navigation entre pages (SPA)           │
└──────────────────────────────────────────────────────────────┘`,
        },
        {
          type: "table",
          headers: ["Bloc", "Rôle principal"],
          rows: [
            ["Module", "Organisation modulaire + gestion des dépendances"],
            ["Composant", "Construction d'une partie de l'interface utilisateur"],
            ["Template", "Vue HTML avec directives Angular"],
            ["Service", "Logique métier réutilisable + partage de données"],
            ["Directive", "Modification du DOM ou du comportement"],
            ["Pipe", "Transformation des données dans le template"],
          ],
        },
        { type: "h", text: "Schéma d'une application Angular complète" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────┐
│              AppComponent                   │
│  ┌──────────────────────────────────────┐   │
│  │  <app-header>  Home | Users | Logout │   │
│  └──────────────────────────────────────┘   │
│  ┌────────────────────┐ ┌───────────────┐   │
│  │  Contenu principal │ │   Side menu   │   │
│  │  <router-outlet>   │ │               │   │
│  │                    │ │               │   │
│  └────────────────────┘ └───────────────┘   │
└─────────────────────────────────────────────┘`,
        },
      ],
    },

    // ── STANDALONE SERVICE ──────────────────────────────────────────────────
    {
      id: "angular-standalone",
      title: "Standalone — Service et données structurées",
      blocks: [
        { type: "h", text: "Service standalone basique" },
        { type: "code", filename: "nom-du-service.service.ts", language: "typescript", code: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Rend le service accessible globalement
})
export class NomDuService {
  constructor() {}

  methodeExemple(): string {
    return 'Service fonctionnel';
  }
}` },
        { type: "h", text: "Service manipulant des données structurées" },
        { type: "code", filename: "user.service.ts", language: "typescript", code: `import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice Dupont', email: 'alice@example.com' },
    { id: 2, name: 'Bob Martin', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Durant', email: 'charlie@example.com' }
  ];

  getUsers(): User[] { return [...this.users]; }
  getUserById(id: number): User | undefined { return this.users.find(u => u.id === id); }
  addUser(newUser: User): void { this.users.push(newUser); }
  deleteUser(id: number): void { this.users = this.users.filter(u => u.id !== id); }
}` },
        { type: "code", filename: "user-list.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  users: User[];
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}` },
        { type: "code", filename: "user-list.component.html", language: "html", code: `<h2>Liste des utilisateurs</h2>
<ul>
  <li *ngFor="let user of users">
    {{ user.id }} - {{ user.name }} ({{ user.email }})
  </li>
</ul>` },
      ],
    },

    // ── CYCLE ROUTE + SERVICE + PIPE ────────────────────────────────────────
    {
      id: "angular-route-service-pipe",
      title: "Exemple complet : Route + Service + Pipe",
      blocks: [
        { type: "p", text: "Objectif : afficher la fiche d'un utilisateur à l'URL /users/3." },
        { type: "h", text: "1. Déclaration des routes" },
        { type: "code", filename: "app.routes.ts", language: "typescript", code: `import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

export const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent },
  { path: '', redirectTo: 'users/1', pathMatch: 'full' }
];` },
        { type: "h", text: "2. Service Angular standalone" },
        { type: "code", filename: "user.service.ts", language: "typescript", code: `import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User { id: number; name: string; role: string; }

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'alice', role: 'admin' },
    { id: 2, name: 'bob', role: 'editor' },
    { id: 3, name: 'charlie', role: 'viewer' },
  ];

  getUserById$(id: number): Observable<User | undefined> {
    return of(this.users.find(u => u.id === id));
  }
}` },
        { type: "h", text: "3. Pipe standalone" },
        { type: "code", filename: "user-label.pipe.ts", language: "typescript", code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'userLabel', standalone: true })
export class UserLabelPipe implements PipeTransform {
  transform(name: string, role: string): string {
    const formatted = name.charAt(0).toUpperCase() + name.slice(1);
    return \`\${formatted} (\${role})\`;
  }
}` },
        { type: "h", text: "4. Composant standalone" },
        { type: "code", filename: "user-detail.component.ts", language: "typescript", code: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService, User } from './user.service';
import { AsyncPipe } from '@angular/common';
import { UserLabelPipe } from './user-label.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe, UserLabelPipe],
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  user$: Observable<User | undefined>;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.userService.getUserById$(id);
      })
    );
  }
}` },
        { type: "code", filename: "user-detail.component.html", language: "html", code: `<h2>Détail utilisateur</h2>
<div *ngIf="user$ | async as user; else loading">
  <p>Nom : {{ user.name | userLabel:user.role }}</p>
  <p>ID : {{ user.id }}</p>
</div>

<ng-template #loading>
  <p>Chargement en cours...</p>
</ng-template>` },
        { type: "h", text: "5. Bootstrap (main.ts)" },
        { type: "code", filename: "main.ts", language: "typescript", code: `import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
});` },
        { type: "h", text: "Résumé du flux" },
        {
          type: "diagram",
          content: `FLUX ROUTE + SERVICE + PIPE
1. Route paramétrée /users/:id  → déclenche UserDetailComponent
2. Le composant récupère id     → avec ActivatedRoute
3. Le service injecté charge    → getUserById$(id)
4. Le user$ est résolu          → dans le HTML avec async
5. Le pipe transforme           → nom + rôle dans la vue`,
        },
        {
          type: "table",
          headers: ["Élément", "Fichier", "Rôle"],
          rows: [
            ["Le Service est utilisé dans", ".ts du composant", "Récupère, traite ou expose des données (souvent via Observable)"],
            ["Le Pipe est utilisé dans", ".html du composant", "Transforme l'affichage des données dans le template (vue uniquement)"],
          ],
        },
      ],
    },

    // ── RXJS ET SIGNALS ─────────────────────────────────────────────────────
    {
      id: "rxjs-signals",
      title: "RxJS et Signals",
      blocks: [
        { type: "code", filename: "rxjs.ts", language: "typescript", code: `import { BehaviorSubject } from "rxjs";
import { map, switchMap } from "rxjs/operators";

const panier$ = new BehaviorSubject<any[]>([]); // garde la dernière valeur
panier$.subscribe((articles) => console.log(articles));

this.recherche$.pipe(
  switchMap((terme) => this.service.chercher(terme)),
  map((res) => res.data)
);` },
        { type: "code", filename: "signals.ts", language: "typescript", code: `import { signal, computed, effect } from "@angular/core";

const count = signal(0);
const double = computed(() => count() * 2);
effect(() => console.log("Count :", count()));
count.set(5);` },
      ],
    },

    // ── FORMULAIRES RÉACTIFS ────────────────────────────────────────────────
    {
      id: "forms",
      title: "Formulaires réactifs",
      blocks: [
        { type: "code", filename: "inscription.component.ts", language: "typescript", code: `import { FormBuilder, Validators } from "@angular/forms";

const fb = new FormBuilder();
const form = fb.group({
  email: ["", [Validators.required, Validators.email]],
  motdepasse: ["", [Validators.required, Validators.minLength(8)]],
});

if (form.valid) console.log(form.value);` },
      ],
    },
  ],
};