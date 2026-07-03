import type { Section } from "../types";

export const django: Section = {
  id: "django",
  title: "Django (Python)",
  icon: "Rocket",
  tags: ["python"],
  subsections: [
    // ── PATTERN MVT ──────────────────────────────────────────────────────
    {
      id: "django-pattern-mvt",
      title: "Le pattern MVT",
      blocks: [
        { type: "p", text: "Django suit une architecture MVT (Model — View — Template), variante du MVC." },
        {
          type: "diagram",
          content: `+─────────────────────────────────────────────────────────────────+
|                       REQUÊTE UTILISATEUR                       |
+─────────────────────────┬───────────────────────────────────────+
                          │ URL
                          ▼
+─────────────────────────────────────────────────────────────────+
|                        urls.py                                  |
|              Fait le lien requête → View                        |
+─────────────────────────┬───────────────────────────────────────+
                          │
                          ▼
+──────────────────┐   +──────────────────┐   +──────────────────+
|     MODEL        │◄──│      VIEW        │──►│    TEMPLATE      |
|  models.py       │   |  views.py        │   |  *.html          |
|  ORM / BDD       │   |  Logique métier  │   |  Affichage HTML  |
+──────────────────+   +──────────────────+   +──────────────────+`,
        },
        { type: "h", text: "1. Model" },
        { type: "p", text: "Le Model représente les données de l'application." },
        { type: "list", items: [
          "Il correspond généralement à une base de données",
          "Avec Django, tu utilises l'ORM (Object Relational Mapping) → pas besoin d'écrire du SQL",
          "Les modèles sont définis dans le fichier models.py",
        ]},
        { type: "p", text: "Exemple : utilisateurs, articles, produits…" },
        { type: "h", text: "2. View" },
        { type: "p", text: "La View est le cerveau de l'application." },
        { type: "list", items: [
          "Elle reçoit les requêtes HTTP (GET, POST…)",
          "Elle traite les données (via les Models)",
          "Elle renvoie une réponse",
        ]},
        { type: "p", text: "Les vues sont écrites dans views.py. Exemple : afficher une liste d'articles, traiter un formulaire…" },
        { type: "h", text: "3. Template" },
        { type: "p", text: "Le Template correspond à l'affichage (front-end)." },
        { type: "list", items: [
          "Ce sont des fichiers HTML",
          "Ils affichent les données envoyées par la View",
          "Stockés dans un dossier templates/",
        ]},
        { type: "p", text: "Exemple : page web avec une liste d'articles." },
        { type: "h", text: "4. URL" },
        { type: "p", text: "Les URLs servent à relier une requête à une View." },
        { type: "list", items: [
          "Définies dans urls.py",
          "Elles font le lien entre l'utilisateur et la logique",
        ]},
      ],
    },

    // ── FONCTIONNEMENT D'UNE REQUÊTE ────────────────────────────────────
    {
      id: "django-fonctionnement-requete",
      title: "Fonctionnement d'une requête",
      blocks: [
        { type: "list", items: [
          "L'utilisateur appelle une URL",
          "Django trouve la View correspondante",
          "La View récupère/modifie les données via le Model",
          "La View envoie les données au Template",
          "Le Template génère la page HTML affichée à l'utilisateur",
        ]},
        { type: "h", text: "Actions d'une requête en détail" },
        { type: "p", text: "1. Appel d'une URL" },
        { type: "list", items: [
          "L'utilisateur entre une URL dans son navigateur",
          "Django reçoit la requête HTTP",
          "Il compare cette URL avec celles définies dans urls.py",
          "Il redirige la requête vers la View correspondante",
        ]},
        { type: "p", text: "2. Traitement par la View" },
        { type: "list", items: [
          "La View reçoit la requête",
          "Elle communique avec le Model pour récupérer ou modifier des données",
          "Elle effectue le traitement nécessaire",
          "Elle construit une réponse",
        ]},
        { type: "p", text: "3. Envoi au Template pour affichage" },
        { type: "list", items: [
          "La réponse est envoyée au Template",
          "Le Template génère une page HTML dynamique",
          "Cette page est renvoyée au navigateur de l'utilisateur",
        ]},
      ],
    },

    // ── CRÉER UN PROJET DJANGO ──────────────────────────────────────────
    {
      id: "django-creer-projet",
      title: "Créer un projet Django",
      blocks: [
        { type: "h", text: "1. Vérifier Python et pip" },
        { type: "code", filename: "terminal", language: "bash", code: `# MacOS/Linux
pip3 --version

# Windows
python -m pip --version` },
        { type: "h", text: "2. Installer Django" },
        { type: "code", filename: "terminal", language: "bash", code: `# Windows
python -m pip install Django

# MacOS
pip3 install Django` },
        { type: "h", text: "3. Vérifier l'installation" },
        { type: "code", filename: "terminal", language: "bash", code: `django-admin --version` },
        { type: "h", text: "4. Créer" },
        { type: "code", filename: "terminal", language: "bash", code: `django-admin startproject Projet1
cd Projet1` },
        { type: "h", text: "5. Lancer le serveur" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py runserver` },
      ],
    },

    // ── STRUCTURE D'UN PROJET DJANGO ────────────────────────────────────
    {
      id: "django-structure-projet",
      title: "Structure d'un projet Django",
      blocks: [
        {
          type: "diagram",
          content: `mon_projet/
│
├── mon_app/                        # Application principale
│
│   ├── templates/                  # Pages HTML (templates)
│   │   └── mon_app/                # Namespace (évite les conflits)
│   │       ├── index.html
│   │       └── liste_emprunteurs.html
│   │
│   ├── static/                     # Fichiers statiques (CSS, JS, images)
│   │   └── mon_app/
│   │       ├── css/
│   │       ├── js/
│   │       └── images/
│   │
│   ├── models/                     # (structure personnalisée) modèles BDD
│   │   ├── __init__.py
│   │   ├── media.py
│   │   ├── emprunteur.py
│   │   └── emprunt.py
│   │
│   ├── services/                   # Logique métier
│   │   ├── __init__.py
│   │   └── gestion_bibliotheque.py
│   │
│   ├── tests/                      # Tests unitaires et fonctionnels
│   │   ├── __init__.py
│   │   ├── test_models.py
│   │   ├── test_services.py
│   │   └── test_views.py
│   │
│   ├── views.py                    # Logique des requêtes (controllers)
│   ├── urls.py                     # Routes de l'application
│   ├── admin.py                    # Interface admin Django
│   ├── apps.py                     # Configuration app
│   ├── serializers.py              # API REST (optionnel)
│   └── __init__.py
│
├── config/                         # Configuration globale du projet
│   ├── __init__.py
│   ├── settings.py                 # Paramètres globaux (BDD, apps…)
│   ├── urls.py                     # Routes principales
│   └── wsgi.py                     # Serveur WSGI
│
├── manage.py                       # Commandes Django (runserver, migrate…)
├── requirements.txt                # Dépendances Python
└── README.md                       # Documentation du projet`,
        },
      ],
    },

    // ── MANAGE.PY ────────────────────────────────────────────────────────
    {
      id: "django-manage-py",
      title: "Manage.py",
      blocks: [
        { type: "code", filename: "manage.py", language: "python", code: `#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    os.environ.setdefault(
        'DJANGO_SETTINGS_MODULE',
        'bibliotheque.settings'
    )
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Impossible d'importer Django. Vérifie qu'il est installé et activé dans ton environnement virtuel."
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()` },
      ],
    },

    // ── LES ACTIONS CRUD ────────────────────────────────────────────────
    {
      id: "django-crud-actions",
      title: "Les actions CRUD",
      blocks: [
        { type: "table", headers: ["Action", "Sigle", "Description"], rows: [
          ["Create", "C", "Créer une donnée"],
          ["Read", "R", "Lire / afficher des données"],
          ["Update", "U", "Modifier une donnée"],
          ["Delete", "D", "Supprimer une donnée"],
        ]},
      ],
    },

    // ── VUES DJANGO ──────────────────────────────────────────────────────
    {
      id: "django-vues-crud",
      title: "Vues Django (views.py)",
      blocks: [
        { type: "code", filename: "views.py", language: "python", code: `#READ (Lister les livres)
from django.shortcuts import render
from mediatheque.models import Livre

def listelivres(request):
    livres = Livre.objects.all()
    return render(request, 'livres/lists.html', {'livres': livres})

#CREATE (Ajouter un livre)
from mediatheque.forms import Creationlivre
from mediatheque.models import Livre

def ajoutlivre(request):
    if request.method == 'POST':
        form = Creationlivre(request.POST)
        if form.is_valid():
            livre = Livre()
            livre.name = form.cleaned_data['name']
            livre.auteur = form.cleaned_data['auteur']
            livre.save()
            livres = Livre.objects.all()
            return render(request, 'livres/lists.html', {'livres': livres})
    else:
        form = Creationlivre()
    return render(request, 'livres/ajoutlivre.html', {'creationLivre': form})

#UPDATE (Modifier un livre)
from mediatheque.forms import Updatelivre
from mediatheque.models import Livre

def updatelivre(request, id):
    livre = Livre.objects.get(pk=id)
    if request.method == 'POST':
        form = Updatelivre(request.POST)
        if form.is_valid():
            livre.name = form.cleaned_data['name']
            livre.auteur = form.cleaned_data['auteur']
            livre.save()
            livres = Livre.objects.all()
            return render(request, 'livres/lists.html', {'livres': livres})
    else:
        form = Updatelivre()
    return render(request, 'livres/updatelivre.html', {'updatelivre': form})

#DELETE (Supprimer un livre)
from mediatheque.models import Livre

def deletelivre(request, id):
    livre = Livre.objects.get(pk=id)
    livre.delete()
    livres = Livre.objects.all()
    return render(request, 'livres/lists.html', {'livres': livres})` },
      ],
    },

    // ── TEMPLATES HTML DJANGO ────────────────────────────────────────────
    {
      id: "django-templates-html",
      title: "Templates HTML Django",
      blocks: [
        { type: "code", filename: "templates.html", language: "html", code: `<!-- Liste (READ) -->
<h1>Liste des livres</h1>
<ul>
{% for livre in livres %}
    <li>
        Titre : {{ livre.name }} | Auteur : {{ livre.auteur }}
    </li>
{% endfor %}
</ul>

<!-- CREATE -->
<h1>Ajouter un livre</h1>
<form method="post">
    {% csrf_token %}
    {{ creationLivre }}
    <input type="submit" value="Envoyer">
</form>

<!-- UPDATE -->
<h1>Modifier un livre</h1>
<form method="post">
    {% csrf_token %}
    {{ updatelivre }}
    <input type="submit" value="Envoyer">
</form>` },
      ],
    },

    // ── FORMULAIRES DJANGO ───────────────────────────────────────────────
    {
      id: "django-formulaires",
      title: "Formulaires Django (forms.py)",
      blocks: [
        { type: "code", filename: "forms.py", language: "python", code: `from django import forms

class Creationlivre(forms.Form):
    name = forms.CharField(required=False)
    auteur = forms.CharField(required=False)

class Updatelivre(forms.Form):
    name = forms.CharField(required=False)
    auteur = forms.CharField(required=False)` },
      ],
    },

    // ── MODÈLE (BDD) ──────────────────────────────────────────────────────
    {
      id: "django-modele-bdd",
      title: "Modèle (BDD) Django",
      blocks: [
        { type: "code", filename: "models.py", language: "python", code: `# Model (BDD)
from django.db import models

class Livre(models.Model):
    name = models.CharField(max_length=100)
    auteur = models.CharField(max_length=100)

    def __str__(self):
        return self.name` },
      ],
    },

    // ── URLS DJANGO ───────────────────────────────────────────────────────
    {
      id: "django-urls-crud",
      title: "URLs Django (urls.py)",
      blocks: [
        { type: "code", filename: "urls.py", language: "python", code: `from django.urls import path
from . import views

urlpatterns = [
    path('livres/', views.listelivres, name='liste_livres'),
    path('livres/ajouter/', views.ajoutlivre, name='ajouter_livre'),
    path('livres/modifier/<int:id>/', views.updatelivre, name='modifier_livre'),
    path('livres/supprimer/<int:id>/', views.deletelivre, name='supprimer_livre'),
]` },
      ],
    },

    // ── CRÉER UN FORMULAIRE — EMPRUNTEUR ────────────────────────────────
    {
      id: "django-formulaire-emprunteur",
      title: "Créer un formulaire — Emprunteur",
      blocks: [
        { type: "h", text: "Le formulaire" },
        { type: "code", filename: "bibliotheque/forms.py", language: "python", code: `# bibliotheque/forms.py
from django import forms
from .models import Emprunteur

class EmprunteurForm(forms.ModelForm):
    class Meta:
        model = Emprunteur
        fields = ['nom', 'bloque']` },
        { type: "h", text: "La vue" },
        { type: "code", filename: "bibliotheque/views.py", language: "python", code: `# bibliotheque/views.py
from django.shortcuts import render, redirect
from .forms import EmprunteurForm

def creer_emprunteur(request):
    if request.method == 'POST':
        form = EmprunteurForm(request.POST)
        if form.is_valid():
            form.save()  # Enregistre en base
            return redirect('liste_emprunteurs')
    else:
        form = EmprunteurForm()
    return render(request, 'bibliotheque/creer_emprunteur.html', {'form': form})` },
        { type: "h", text: "URL" },
        { type: "code", filename: "bibliotheque/urls.py", language: "python", code: `# bibliotheque/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('emprunteurs/', views.liste_emprunteurs, name='liste_emprunteurs'),
    path('emprunteurs/creer/', views.creer_emprunteur, name='creer_emprunteur'),
]` },
        { type: "h", text: "Template HTML" },
        { type: "code", filename: "templates/bibliotheque/creer_emprunteur.html", language: "html", code: `<!-- templates/bibliotheque/creer_emprunteur.html -->
<h1>Créer un nouvel emprunteur</h1>

<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Créer</button>
</form>

<a href="{% url 'liste_emprunteurs' %}">Retour à la liste</a>` },
      ],
    },

    // ── TYPES DE VUES ─────────────────────────────────────────────────────
    {
      id: "django-types-vues",
      title: "Types de vues",
      blocks: [
        { type: "h", text: "Function-Based Views (FBV)" },
        { type: "p", text: "Une FBV est une simple fonction Python qui reçoit une requête et renvoie une réponse." },
        { type: "code", filename: "views.py", language: "python", code: `# views.py
from django.shortcuts import render
from .models import Emprunteur

def liste_emprunteurs(request):
    emprunteurs = Emprunteur.objects.all()
    context = {
        'emprunteurs': emprunteurs
    }
    return render(request, 'bibliotheque/liste_emprunteurs.html', context)` },
        { type: "h", text: "Class-Based Views (CBV)" },
        { type: "p", text: "Les CBV sont des classes Python plus structurées et réutilisables." },
        { type: "code", filename: "views.py", language: "python", code: `# views.py
from django.views.generic import ListView
from .models import Emprunteur

class ListeEmprunteursView(ListView):
    model = Emprunteur
    template_name = 'bibliotheque/liste_emprunteurs.html'
    context_object_name = 'emprunteurs'` },
        { type: "h", text: "Template HTML (commun aux deux approches)" },
        { type: "code", filename: "templates/bibliotheque/liste_emprunteurs.html", language: "html", code: `<!-- templates/bibliotheque/liste_emprunteurs.html -->
<h1>Liste des emprunteurs</h1>
<ul>
{% for emprunteur in emprunteurs %}
    <li>
        {{ emprunteur.nom }}
        {% if emprunteur.bloque %}
            (bloqué)
        {% endif %}
    </li>
{% empty %}
    <li>Aucun emprunteur trouvé.</li>
{% endfor %}
</ul>` },
      ],
    },

    // ── GESTION DE DONNÉES (SQLITE) ─────────────────────────────────────
    {
      id: "django-sqlite",
      title: "Gestion de données (SQLite)",
      blocks: [
        { type: "h", text: "1. Configurer l'application" },
        { type: "code", filename: "settings.py", language: "python", code: `# settings.py
INSTALLED_APPS = [
    ...
    'livres',
]` },
        { type: "h", text: "2. Configurer la base de données" },
        { type: "code", filename: "settings.py", language: "python", code: `DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "db.sqlite3",
    }
}` },
        { type: "h", text: "3. Créer un modèle" },
        { type: "code", filename: "models.py", language: "python", code: `# models.py
from django.db import models

class Livre(models.Model):
    nom = models.CharField(max_length=100)
    auteur = models.CharField(max_length=100)` },
        { type: "h", text: "4. Migrer" },
        { type: "code", filename: "terminal", language: "bash", code: `# Créer
python manage.py makemigrations

# Appliquer
python manage.py migrate` },
        { type: "h", text: "5. Lancer le serveur" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py runserver
# http://127.0.0.1:8000/` },
        { type: "h", text: "6. Ajouter des données" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py shell` },
        { type: "code", filename: "shell.py", language: "python", code: `# Importer le modèle
from livres.models import Livre

# Créer un objet
livre = Livre(
    nom="Le Petit Prince",
    auteur="Antoine de Saint-Exupéry"
)
livre.save()

# Lire les données
Livre.objects.all()` },
        { type: "h", text: "7. Vérifier dans SQLite" },
        { type: "list", items: [
          "Ouvrir DB Browser for SQLite",
          "Cliquer sur Open Database",
          "Sélectionner db.sqlite3",
          "Onglet Browse Data",
          "Choisir la table livre",
        ]},
      ],
    },

    // ── CONNECTER DJANGO À MYSQL AVEC XAMPP ─────────────────────────────
    {
      id: "django-mysql-xampp",
      title: "Connecter Django à MySQL avec XAMPP",
      blocks: [
        { type: "h", text: "1. Démarrer XAMPP" },
        { type: "list", items: ["Ouvrir XAMPP", "Démarrer Apache et MySQL"] },
        { type: "h", text: "2. Accéder à phpMyAdmin" },
        { type: "code", filename: "url", language: "text", code: `http://localhost/phpmyadmin` },
        { type: "h", text: "3. Créer une base de données" },
        { type: "list", items: [
          "Cliquer sur Base de données",
          "Nom : bibliotheque",
          "Interclassement : utf8mb4_general_ci",
          "Cliquer sur Créer",
        ]},
        { type: "h", text: "4. Créer un utilisateur MySQL" },
        { type: "p", text: "Dans phpMyAdmin, aller dans Comptes utilisateurs → Ajouter un compte utilisateur :" },
        { type: "list", items: [
          "Nom : bibliouser",
          "Hôte : localhost",
          "Mot de passe : Biblio123!",
        ]},
        { type: "note", variant: "info", text: "Donner les droits : SELECT, INSERT, UPDATE, DELETE (ou tous les privilèges sur la base bibliotheque). Cliquer sur Exécuter." },
        { type: "h", text: "5. Configurer Django" },
        { type: "code", filename: "settings.py", language: "python", code: `# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bibliotheque',
        'USER': 'bibliouser',
        'PASSWORD': 'Biblio123!',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}` },
        { type: "h", text: "6. Installer les dépendances MySQL" },
        { type: "code", filename: "terminal", language: "bash", code: `pip install mysqlclient
# OU
pip install pymysql` },
        { type: "code", filename: "__init__.py", language: "python", code: `# __init__.py
import pymysql
pymysql.install_as_MySQLdb()` },
        { type: "h", text: "7. Créer les tables" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py makemigrations
python manage.py migrate` },
      ],
    },

    // ── CRÉER UN ENVIRONNEMENT VIRTUEL ──────────────────────────────────
    {
      id: "django-environnement-virtuel",
      title: "Créer un environnement virtuel",
      blocks: [
        { type: "h", text: "1. Prérequis" },
        { type: "p", text: "Python doit être installé :" },
        { type: "code", filename: "terminal", language: "bash", code: `# Installé avec Homebrew (Mac)
brew install python

# Windows : Télécharger sur le site officiel` },
        { type: "p", text: "pip doit être installé (gestionnaire de paquets) :" },
        { type: "code", filename: "terminal", language: "bash", code: `python -m ensurepip --upgrade` },
        { type: "h", text: "2. Commandes" },
        { type: "p", text: "Sous Unix / Linux / macOS :" },
        { type: "code", filename: "terminal", language: "bash", code: `python3 -m venv env

# Activer l'environnement
source env/bin/activate` },
        { type: "p", text: "Sous Windows :" },
        { type: "code", filename: "terminal", language: "bash", code: `py -m venv env

# Activer l'environnement
env\\Scripts\\activate.bat` },
        { type: "h", text: "3. Installer des packages (ex: Django)" },
        { type: "code", filename: "terminal", language: "bash", code: `pip install django` },
        { type: "h", text: "4. Créer l'application" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py startapp bibliotheque` },
        { type: "h", text: "5. Configurer l'application" },
        { type: "code", filename: "MonProjet/settings.py", language: "python", code: `# MonProjet/settings.py
INSTALLED_APPS = [
    'bibliotheque',
]` },
        { type: "h", text: "6. Créer les modèles (Models)" },
        { type: "code", filename: "bibliotheque/models.py", language: "python", code: `# bibliotheque/models.py
from django.db import models

class Emprunteur(models.Model):
    nom = models.CharField(max_length=100)
    bloque = models.BooleanField(default=False)` },
        { type: "h", text: "7. Migration BDD" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py makemigrations
python manage.py migrate  # Créer les tables en base` },
        { type: "h", text: "8. Créer des vues (views.py)" },
        { type: "p", text: "Fonction ou classe qui traite une requête HTTP." },
        { type: "code", filename: "views.py", language: "python", code: `from django.shortcuts import render

def liste_emprunteurs(request):
    return render(request, 'bibliotheque/liste.html')` },
        { type: "h", text: "9. Templates" },
        { type: "p", text: "Créer un dossier : bibliotheque/templates/bibliotheque/ puis un fichier liste.html." },
        { type: "h", text: "10. Routes" },
        { type: "code", filename: "bibliotheque/urls.py", language: "python", code: `# bibliotheque/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('emprunteurs/', views.liste_emprunteurs, name='liste_emprunteurs'),
]` },
        { type: "code", filename: "mon_projet/urls.py", language: "python", code: `# mon_projet/urls.py
from django.urls import include, path

urlpatterns = [
    path('bibliotheque/', include('bibliotheque.urls')),
]` },
        { type: "h", text: "11. Test sur navigateur" },
        { type: "code", filename: "url", language: "text", code: `http://127.0.0.1:8000/bibliotheque/emprunteurs/` },
        { type: "h", text: "12. Interface administrateur" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py createsuperuser

# Accès
# http://127.0.0.1:8000/admin/` },
        { type: "h", text: "13. Tests" },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py test` },
        { type: "h", text: "14. Déploiement" },
        { type: "list", items: ["Serveur : Gunicorn, Nginx"] },
        { type: "code", filename: "terminal", language: "bash", code: `python manage.py collectstatic` },
        { type: "list", items: ["Sécurité : HTTPS"] },
      ],
    },

    // ── GESTION DE PIP ───────────────────────────────────────────────────
    {
      id: "django-gestion-pip",
      title: "Gestion de pip",
      blocks: [
        { type: "h", text: "Mettre à jour" },
        { type: "code", filename: "terminal", language: "bash", code: `# macOS/Linux
python3 -m pip install --upgrade pip

# Windows
python -m pip install --upgrade pip` },
        { type: "h", text: "Installer/réparer" },
        { type: "code", filename: "terminal", language: "bash", code: `# Windows
python -m ensurepip --upgrade

# macOS/Linux
python3 -m ensurepip --upgrade` },
        { type: "h", text: "Vérifier" },
        { type: "code", filename: "terminal", language: "bash", code: `pip --version
# OU
python -m pip --version` },
      ],
    },

    // ── CRÉER UNE INTERFACE CRUD AVEC DJANGO ────────────────────────────
    {
      id: "django-interface-crud",
      title: "Créer une interface CRUD avec Django",
      blocks: [
        { type: "h", text: "Structure du projet Django" },
        {
          type: "diagram",
          content: `monprojet/
│
├── manage.py
├── db.sqlite3
│
├── monprojet/                      # Configuration du projet
│   ├── __init__.py
│   ├── settings.py                 # Paramètres Django
│   ├── urls.py                     # URLs principales
│   └── wsgi.py
│
├── livres/                         # Application CRUD
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py                   # Modèle Livre
│   ├── views.py                    # Logique CRUD
│   ├── urls.py                     # Routes de l'app
│   ├── forms.py                    # Formulaire LivreForm
│   │
│   ├── migrations/
│   │   ├── __init__.py
│   │   └── 0001_initial.py
│   │
│   └── templates/
│       └── livres/
│           ├── liste.html
│           ├── formulaire.html
│           └── confirm_delete.html`,
        },
        { type: "h", text: "URLs de l'application" },
        { type: "code", filename: "livres/urls.py", language: "python", code: `# livres/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.listelivres),
    path('ajoutlivre/', views.ajoutlivre),
    path('updatelivre/<int:id>/', views.updatelivre),
    path('deletelivre/<int:id>/', views.deletelivre),
]` },
        { type: "h", text: "URLs principales du projet" },
        { type: "p", text: "Cela relie l'application livres au projet Django." },
        { type: "code", filename: "urls.py", language: "python", code: `from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('livres.urls')),
]` },
        { type: "h", text: "Vues (logique CRUD)" },
        { type: "p", text: "Les views gèrent les actions : afficher les livres, ajouter un livre, modifier un livre, supprimer un livre." },
        { type: "code", filename: "views.py", language: "python", code: `# views.py — Exemple de logique (simplifié)
def listelivres(request):
    pass  # afficher tous les livres

def ajoutlivre(request):
    pass  # ajouter un livre

def updatelivre(request, id):
    pass  # modifier un livre

def deletelivre(request, id):
    pass  # supprimer un livre` },
      ],
    },

    // ── PYCHARM (IDE) — VERSIONNER UN PROJET ────────────────────────────
    {
      id: "django-pycharm-git",
      title: "PyCharm (IDE) — Versionner un projet",
      blocks: [
        { type: "p", text: "1. Initialiser Git dans PyCharm" },
        { type: "list", items: [
          "Ouvrir le projet dans PyCharm",
          "Menu : VCS → Enable Version Control Integration",
          "Choisir : Git",
          "Cliquer sur OK",
        ]},
        { type: "note", variant: "info", text: "PyCharm crée automatiquement un dossier .git/" },
        { type: "p", text: "2. Ajouter les fichiers à Git" },
        { type: "list", items: [
          "Ouvrir l'onglet : Version Control",
          "Tu vois les fichiers en Untracked",
          "Ajouter tous les fichiers : clic droit → Git → Add ou Ctrl + A",
        ]},
        { type: "p", text: "3. Faire un commit initial" },
        { type: "list", items: [
          "Cliquer sur Commit",
          "Message : Initial commit of Django project",
          "Cliquer : Commit ou Commit and Push",
        ]},
        { type: "p", text: "4. Créer un dépôt Git distant (GitHub)" },
        { type: "p", text: "Sur GitHub :" },
        { type: "list", items: [
          "Créer un nouveau repository",
          "Ne pas cocher README, .gitignore",
          "Copier l'URL : https://github.com/ton-user/ton-repo.git",
        ]},
        { type: "p", text: "5. Lier projet local → GitHub" },
        { type: "code", filename: "terminal", language: "bash", code: `git remote add origin https://github.com/ton-user/ton-repo.git` },
        { type: "p", text: "6. Envoyer le projet (push)" },
        { type: "code", filename: "terminal", language: "bash", code: `git push -u origin main
# OU
git push -u origin master` },
        { type: "p", text: "7. Bonnes pratiques (.gitignore)" },
        { type: "p", text: "À exclure :" },
        { type: "list", items: [
          "venv/ ou env/",
          "__pycache__/",
          ".pyc",
          "db.sqlite3",
          ".env",
          "fichiers secrets",
        ]},
      ],
    },
  ],
};
