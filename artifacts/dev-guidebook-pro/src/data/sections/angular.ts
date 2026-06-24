import type { Section } from "../types";

export const angular: Section = {
  id: "angular",
  title: "Angular",
  icon: "Shield",
  tags: ["ts"],
  subsections: [
    {
      id: "composant",
      title: "Composant standalone",
      blocks: [
        { type: "code", filename: "produit.component.ts", language: "typescript", code: `import { Component } from "@angular/core";
@Component({
  selector: "app-produit", // balise <app-produit>
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
    {
      id: "liaisons",
      title: "Liaisons et directives",
      blocks: [
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
    {
      id: "services",
      title: "Services et HttpClient",
      blocks: [
        { type: "code", filename: "produit.service.ts", language: "typescript", code: `import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({ providedIn: "root" }) // singleton global
export class ProduitService {
  private http = inject(HttpClient);
  getProduits(): Observable<any[]> { return this.http.get<any[]>("/api/produits"); }
  creer(p: any): Observable<any> { return this.http.post("/api/produits", p); }
}` },
      ],
    },
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
