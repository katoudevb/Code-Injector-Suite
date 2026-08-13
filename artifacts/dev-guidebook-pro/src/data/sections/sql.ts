import type { Section } from "../types";
import { laConsoleSql } from "./laConsoleSql";
import { laConsoleArticlesSql } from "./laConsoleArticlesSql";

export const sql: Section = {
  id: "sql",
  title: "Bases de données — SQL",
  icon: "Database",
  tags: [],
  subsections: [
    // ── CRÉATION ─────────────────────────────────────────────────────────────
    {
      id: "creation",
      title: "Créer & Supprimer",
      blocks: [
        { type: "h", text: "Créer une base de données" },
        { type: "code", filename: "schema.sql", language: "sql", code: `CREATE DATABASE nom-bdd;` },
        { type: "h", text: "Sélectionner une base de données" },
        { type: "code", filename: "schema.sql", language: "sql", code: `USE nom-bdd;
-- Définir les requêtes ensuite (SELECT, ...)` },
        { type: "h", text: "Créer une table" },
        { type: "code", filename: "schema.sql", language: "sql", code: `CREATE TABLE NomTable (
  -- Définir colonnes (id, ...)
);` },
        { type: "code", filename: "schema.sql", language: "sql", code: `-- Table des utilisateurs
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- clé primaire auto
  email VARCHAR(255) NOT NULL UNIQUE, -- obligatoire et unique
  nom VARCHAR(100) NOT NULL,
  cree_le DATETIME DEFAULT NOW()      -- valeur par défaut
);
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prix DECIMAL(10,2) NOT NULL,        -- 2 décimales
  stock INT DEFAULT 0
);` },
        { type: "table", headers: ["Type", "Usage"], rows: [["INT", "entier"], ["VARCHAR(n)", "texte court"], ["TEXT", "texte long"], ["DECIMAL(p,s)", "décimal (prix)"], ["DATETIME", "date + heure"], ["BOOLEAN", "vrai / faux"]] },
        { type: "h", text: "Supprimer une table" },
        { type: "code", filename: "schema.sql", language: "sql", code: `DROP TABLE NomTable;` },
        { type: "h", text: "Vider une table (réinitialise AUTO_INCREMENT)" },
        { type: "code", filename: "schema.sql", language: "sql", code: `TRUNCATE NomTable;` },
      ],
    },

    // ── CRUD ─────────────────────────────────────────────────────────────────
    {
      id: "crud",
      title: "INSERT, SELECT, UPDATE, DELETE",
      blocks: [
        { type: "h", text: "Lire — SELECT" },
        { type: "code", filename: "select.sql", language: "sql", code: `-- Lire toutes les colonnes
SELECT * FROM NomTable;

-- Lire des colonnes précises
SELECT NomColonne1, NomColonne2 FROM NomTable;

-- Lire avec filtre WHERE
SELECT * FROM NomTable WHERE condition;

-- Trier les résultats (ASC = croissant | DESC = décroissant)
SELECT * FROM NomTable ORDER BY NomColonne ASC;

-- Limiter le nombre de résultats
SELECT * FROM NomTable LIMIT 10;` },
        { type: "h", text: "Insérer — INSERT" },
        { type: "code", filename: "insert.sql", language: "sql", code: `-- Insérer une ligne
INSERT INTO NomTable (NomColonne1, NomColonne2)
VALUES ('valeur1', 'valeur2');

-- Insérer plusieurs lignes
INSERT INTO NomTable (NomColonne1, NomColonne2)
VALUES
  (valeur1a, valeur2a),
  (valeur1b, valeur2b),
  (valeur1c, valeur2c);

-- Insérer sans AUTO_INCREMENT (ID manuel)
INSERT INTO table (id, nom, prix)
VALUES
  (1, 'Focaccia Classique', 5.50),
  (2, 'Focaccia Romarin', 6.00),
  (3, 'Focaccia Olive', 6.50);` },
        { type: "note", variant: "info", text: "Points clés d'insertion : 1) Un enregistrement doit respecter la structure définie de la table. 2) Les valeurs doivent respecter le type, la taille et les contraintes (NOT NULL, UNIQUE…). 3) Ne pas fournir de valeur pour les champs AUTO_INCREMENT. 4) Les nouveaux enregistrements sont ajoutés en fin de table — l'ordre dépend de ORDER BY." },
        { type: "h", text: "Exemples e-commerce" },
        { type: "code", filename: "crud.sql", language: "sql", code: `INSERT INTO products (nom, prix, stock) VALUES
  ('Sac à dos', 49.90, 12),
  ('Montre', 120.00, 5);

SELECT nom, prix FROM products
WHERE prix BETWEEN 20 AND 100 AND nom LIKE '%sac%'
ORDER BY prix DESC LIMIT 10;

UPDATE products SET prix = 39.90 WHERE id = 1; -- TOUJOURS un WHERE
DELETE FROM products WHERE stock = 0;` },
        { type: "note", variant: "warning", text: "Un UPDATE ou DELETE sans WHERE modifie TOUTES les lignes. Vérifiez toujours votre clause WHERE." },
        { type: "h", text: "Mettre à jour — UPDATE" },
        { type: "code", filename: "update.sql", language: "sql", code: `UPDATE NomTable
SET NomColonne1 = 'valeur1', NomColonne2 = 'valeur2'
WHERE condition;` },
        { type: "h", text: "Supprimer — DELETE" },
        { type: "code", filename: "delete.sql", language: "sql", code: `DELETE FROM NomTable
WHERE condition;` },
      ],
    },

    // ── ALTER TABLE ──────────────────────────────────────────────────────────
    {
      id: "alter-table",
      title: "Modifier la structure — ALTER TABLE",
      blocks: [
        { type: "h", text: "Ajouter une colonne" },
        { type: "code", filename: "alter.sql", language: "sql", code: `ALTER TABLE NomTable
ADD COLUMN NomColonne "TYPE_DONNEE";` },
        { type: "h", text: "Supprimer une colonne" },
        { type: "code", filename: "alter.sql", language: "sql", code: `ALTER TABLE NomTable
DROP COLUMN NomColonne;` },
        { type: "h", text: "Renommer une colonne" },
        { type: "code", filename: "alter.sql", language: "sql", code: `ALTER TABLE NomTable
RENAME COLUMN AncienneColonne TO NouvelleColonne;` },
        { type: "h", text: "Modifier le type d'une colonne" },
        { type: "code", filename: "alter.sql", language: "sql", code: `ALTER TABLE NomTable
MODIFY COLUMN NomColonne "TYPE_DONNÉE";` },
        { type: "h", text: "Modifier avec contrainte" },
        { type: "code", filename: "alter.sql", language: "sql", code: `ALTER TABLE NomTable
MODIFY COLUMN NomColonne "TYPE_DONNÉE" "contrainte";` },
      ],
    },

    // ── JOINS ────────────────────────────────────────────────────────────────
    {
      id: "joins",
      title: "JOINs",
      blocks: [
        { type: "h", text: "Structure générale" },
        { type: "code", filename: "joins.sql", language: "sql", code: `SELECT NomColonne
FROM NomTable1 "TYPE_JOINTURE" NomTable2
ON Table1.clé = Table2.clé;` },
        { type: "h", text: "INNER JOIN — seulement ce qui est lié dans les 2 tables" },
        { type: "code", filename: "joins.sql", language: "sql", code: `-- INNER JOIN : seulement les correspondances
SELECT orders.id, users.nom, orders.total
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- Northwind
SELECT e.EmployeeID, e.FirstName, e.LastName, o.OrderID, o.OrderDate
FROM Employees e
INNER JOIN Orders o ON (e.EmployeeID = o.EmployeeID);` },
        { type: "h", text: "LEFT JOIN — tout de la table gauche + correspondances à droite (NULL si absent)" },
        { type: "code", filename: "joins.sql", language: "sql", code: `-- LEFT JOIN : toutes les lignes de gauche
SELECT users.nom, orders.id
FROM users LEFT JOIN orders ON users.id = orders.user_id;

-- Northwind
SELECT Employees.EmployeeID, Customers.CustomerID,
       Employees.City AS EmployeeCity, Customers.City AS CustomerCity
FROM Employees
LEFT OUTER JOIN Customers ON Employees.City = Customers.City;` },
        { type: "h", text: "RIGHT JOIN — tout de la table droite + correspondances à gauche (NULL si absent)" },
        { type: "code", filename: "joins.sql", language: "sql", code: `SELECT * FROM NomTable1
RIGHT JOIN NomTable2 ON NomTable1.clé = NomTable2.clé;` },
        { type: "h", text: "FULL OUTER JOIN — tout des 2 tables (NULL si pas de correspondance)" },
        { type: "code", filename: "joins.sql", language: "sql", code: `SELECT * FROM NomTable1
FULL OUTER JOIN NomTable2 ON NomTable1.clé = NomTable2.clé;` },
        { type: "h", text: "Jointure sur 3 tables" },
        { type: "code", filename: "joins.sql", language: "sql", code: `-- Détail d'une commande (3 tables) — e-commerce
SELECT u.nom, p.nom AS produit, oi.quantite
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN users u ON o.user_id = u.id
JOIN products p ON oi.product_id = p.id;

-- Northwind
SELECT o.OrderID, c.CompanyName, e.FirstName, e.LastName
FROM Orders o
JOIN Employees e ON (e.EmployeeID = o.EmployeeID)
JOIN Customers c ON (c.CustomerID = o.CustomerID)
WHERE o.ShippedDate > o.RequiredDate AND o.OrderDate > '1998-01-01';` },
        { type: "h", text: "Requête imbriquée (sans jointure)" },
        { type: "code", filename: "joins.sql", language: "sql", code: `-- Trouver le nom de l'entreprise qui a passé la commande 10290
SELECT CompanyName
FROM Customers
WHERE CustomerID = (
  SELECT CustomerID FROM Orders WHERE OrderID = 10290
);` },
      ],
    },

    // ── AGRÉGATION ───────────────────────────────────────────────────────────
    {
      id: "agregation",
      title: "GROUP BY et fonctions d'agrégation",
      blocks: [
        { type: "code", filename: "agg.sql", language: "sql", code: `SELECT colonne1, FONCTION(colonne2)
FROM NomTable
GROUP BY colonne1;` },
        { type: "table", headers: ["Fonction", "Description"], rows: [
          ["COUNT()", "Compte le nombre de lignes"],
          ["SUM()", "Calcule la somme"],
          ["MIN()", "Valeur minimale"],
          ["MAX()", "Valeur maximale"],
          ["AVG()", "Moyenne arithmétique"],
        ]},
        { type: "h", text: "Exemple avec GROUP BY + HAVING" },
        { type: "code", filename: "stats.sql", language: "sql", code: `SELECT user_id, COUNT(*) AS nb, SUM(total) AS ca
FROM orders
GROUP BY user_id
HAVING SUM(total) > 500   -- filtre APRÈS le regroupement
ORDER BY ca DESC;

SELECT AVG(prix) AS moyenne, MAX(prix), MIN(prix) FROM products;

-- Northwind
SELECT City, COUNT(EmployeeID) AS NumEmployees
FROM Employees
WHERE EmployeeID >= 1
GROUP BY City
HAVING COUNT(EmployeeID) > 1
ORDER BY COUNT(EmployeeID);` },
        { type: "h", text: "Projection et Restriction (rappel)" },
        { type: "code", filename: "projection.sql", language: "sql", code: `-- Projection : choisir les colonnes qui nous intéressent
SELECT nom_et, prenom_et FROM etudiant;

-- Restriction : ramener uniquement certaines lignes selon des critères
SELECT * FROM etudiant WHERE date_naiss_et > '1980-01-01';

-- Combiner projection + restriction
SELECT nom_et, prenom_et FROM etudiant WHERE date_naiss_et > '1980-01-01';` },
      ],
    },

    // ── FONCTIONS CHAÎNES, MATH, DATES ──────────────────────────────────────
    {
      id: "fonctions-sql",
      title: "Fonctions chaînes, mathématiques et dates",
      blocks: [
        { type: "h", text: "Fonctions de manipulation de chaînes" },
        { type: "table", headers: ["Fonction", "Description"], rows: [
          ["CONCAT()", "Assemble plusieurs chaînes"],
          ["SUBSTR() / SUBSTRING()", "Extrait une sous-chaîne"],
          ["REPLACE()", "Remplace une sous-chaîne"],
          ["UPPER()", "Convertit en majuscules"],
          ["LOWER()", "Convertit en minuscules"],
          ["TRIM()", "Supprime les espaces au début et à la fin"],
          ["LTRIM()", "Supprime les espaces au début"],
          ["RTRIM()", "Supprime les espaces à la fin"],
          ["LENGTH() / LEN()", "Longueur d'une chaîne"],
          ["INSTR()", "Position d'une sous-chaîne"],
          ["FORMAT()", "Formate une valeur en texte"],
          ["TO_CHAR()", "Convertit en chaîne selon un format"],
        ]},
        { type: "h", text: "Fonctions mathématiques" },
        { type: "table", headers: ["Fonction", "Description"], rows: [
          ["ROUND()", "Arrondit à N décimales"],
          ["TRUNC()", "Supprime les décimales sans arrondir"],
          ["ABS()", "Valeur absolue"],
          ["FLOOR()", "Plus grand entier ≤ au nombre"],
          ["CEIL() / CEILING()", "Plus petit entier ≥ au nombre"],
          ["POWER()", "Puissance"],
          ["SQRT()", "Racine carrée"],
          ["MOD()", "Reste de la division"],
          ["RAND()", "Nombre aléatoire"],
          ["PI()", "Constante π"],
        ]},
        { type: "h", text: "Fonctions de gestion des dates" },
        { type: "table", headers: ["Fonction", "Description", "Exemple", "Résultat"], rows: [
          ["NOW()", "Date et heure actuelles", "SELECT NOW();", "2025-08-16 14:32:10"],
          ["CURDATE()", "Date actuelle", "SELECT CURDATE();", "2025-08-16"],
          ["CURTIME()", "Heure actuelle", "SELECT CURTIME();", "14:32:10"],
          ["DATE(expr)", "Extrait la date d'un DATETIME", "SELECT DATE('2025-08-16 14:32:10');", "2025-08-16"],
          ["YEAR(date)", "Extrait l'année", "SELECT YEAR('2025-08-16');", "2025"],
          ["MONTH(date)", "Extrait le mois", "SELECT MONTH('2025-08-16');", "8"],
          ["DAY(date)", "Extrait le jour", "SELECT DAY('2025-08-16');", "16"],
          ["DATEDIFF(d1, d2)", "Différence en jours", "SELECT DATEDIFF('2025-08-16','2025-08-10');", "6"],
          ["ADDDATE(date, INTERVAL n unit)", "Ajoute un intervalle", "SELECT ADDDATE('2025-08-16', INTERVAL 10 DAY);", "2025-08-26"],
          ["SUBDATE(date, INTERVAL n unit)", "Soustrait un intervalle", "SELECT SUBDATE('2025-08-16', INTERVAL 1 MONTH);", "2025-07-16"],
          ["DATE_FORMAT(date, format)", "Formate une date", "SELECT DATE_FORMAT('2025-08-16', '%d/%m/%Y');", "16/08/2025"],
          ["STR_TO_DATE(str, format)", "Convertit une chaîne en date", "SELECT STR_TO_DATE('16-08-2025','%d-%m-%Y');", "2025-08-16"],
          ["LAST_DAY(date)", "Dernier jour du mois", "SELECT LAST_DAY('2025-08-16');", "2025-08-31"],
        ]},
        { type: "h", text: "Conversion de type" },
        { type: "code", filename: "cast.sql", language: "sql", code: `SELECT CAST(colonne1 AS "TYPE-DONNÉE")
FROM NomTable;` },
      ],
    },

    // ── TYPES DE DONNÉES ─────────────────────────────────────────────────────
    {
      id: "types-donnees",
      title: "Types de données",
      blocks: [
        { type: "h", text: "Texte" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["CHAR(n)", "Chaîne de longueur fixe (n caractères)"],
          ["VARCHAR(n)", "Chaîne de longueur variable (max n caractères)"],
          ["TEXT", "Texte long"],
        ]},
        { type: "h", text: "Numérique" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["INT", "Entier standard"],
          ["SMALLINT", "Petit entier"],
          ["BIGINT", "Grand entier"],
          ["FLOAT", "Nombre à virgule"],
          ["DOUBLE", "Nombre précis"],
          ["DECIMAL(p, s)", "Nombre précis défini (p chiffres, s décimales)"],
        ]},
        { type: "h", text: "Date et heure" },
        { type: "table", headers: ["Type", "Description", "Format"], rows: [
          ["DATE", "Date", "YYYY-MM-DD"],
          ["DATETIME", "Date et heure", "YYYY-MM-DD HH:MM:SS"],
          ["TIMESTAMP", "Horodatage automatique", "—"],
          ["TIME", "Heure", "HH:MM:SS"],
          ["YEAR", "Année (4 chiffres)", "YYYY"],
        ]},
        { type: "h", text: "Champs généralement obligatoires" },
        { type: "table", headers: ["Champ", "Type recommandé", "Justification"], rows: [
          ["Identifiant (ID)", "INT AUTO_INCREMENT ou UUID", "Unicité + identification"],
          ["Email", "VARCHAR + UNIQUE", "Authentification et communication"],
          ["Mot de passe", "VARCHAR ou TEXT", "Sécurité d'accès"],
          ["Nom / Prénom", "VARCHAR", "Identification personnelle"],
          ["Date de création", "DATETIME ou TIMESTAMP", "Historique et suivi"],
          ["Statut / État", "ENUM ou TINYINT", "Cycle de vie des données"],
        ]},
      ],
    },

    // ── CONTRAINTES ──────────────────────────────────────────────────────────
    {
      id: "contraintes",
      title: "Contraintes",
      blocks: [
        { type: "table", headers: ["Contrainte", "Abréviation", "Description"], rows: [
          ["PRIMARY KEY", "PK", "Clé primaire unique de la table"],
          ["FOREIGN KEY", "FK", "Clé étrangère vers une autre table"],
          ["UNIQUE", "UQ", "Valeurs uniques dans une colonne"],
          ["CHECK", "CK", "Condition à respecter sur une colonne"],
          ["NOT NULL", "—", "Valeur obligatoire"],
          ["DEFAULT", "—", "Valeur par défaut si aucune donnée fournie"],
          ["AUTO_INCREMENT", "—", "Incrémentation automatique (clé primaire)"],
        ]},
        { type: "note", variant: "info", text: "Bonne pratique : toujours avoir une colonne id en clé primaire dans chaque table." },
        { type: "h", text: "Rappel visuel des cardinalités" },
        {
          type: "diagram",
          content: `Un à un (1:1)
[A] ──1────1── [B]
Exemple : Utilisateur ──── Passeport

Un à plusieurs (1:N)
[A] ──1────N── [B]
Exemple : Client ──── Commandes

Plusieurs à plusieurs (N:M)
[A] ──N────M── [B]
Exemple : Étudiant ──── Cours
→ Nécessite une table d'association : Étudiant_Cours(idÉtudiant, idCours)`,
        },
      ],
    },

    // ── CONDITIONS WHERE ─────────────────────────────────────────────────────
    {
      id: "conditions-where",
      title: "Conditions — WHERE",
      blocks: [
        { type: "h", text: "Structure" },
        { type: "code", filename: "where.sql", language: "sql", code: `WHERE condition1 "opérateur" condition2 ...;` },
        { type: "h", text: "Opérateurs de comparaison" },
        { type: "table", headers: ["Opérateur", "Signification"], rows: [
          ["=", "Égal à"],
          ["<> ou !=", "Différent de"],
          ["<", "Inférieur à"],
          [">", "Supérieur à"],
          ["<=", "Inférieur ou égal à"],
          [">=", "Supérieur ou égal à"],
        ]},
        { type: "h", text: "Opérateurs logiques" },
        { type: "table", headers: ["Opérateur", "Description"], rows: [
          ["AND", "Toutes les conditions doivent être vraies"],
          ["OR", "Au moins une condition doit être vraie"],
          ["NOT", "Nie une condition (vrai → faux)"],
        ]},
        { type: "h", text: "Opérateurs spécifiques" },
        { type: "table", headers: ["Opérateur", "Description"], rows: [
          ["BETWEEN…AND", "Filtre entre 2 valeurs"],
          ["IN (…)", "Vérifie si une valeur appartient à une liste"],
          ["IS NULL", "Teste si une valeur est absente"],
          ["IS NOT NULL", "Teste si une colonne contient une valeur"],
          ["LIKE", "Filtre par motif (% = n'importe quoi, _ = un caractère)"],
        ]},
        { type: "h", text: "Exemples" },
        { type: "code", filename: "where.sql", language: "sql", code: `-- Tous les étudiants nés après 1980
SELECT * FROM etudiant WHERE date_naiss_et > '1980-01-01';

-- Filtre BETWEEN
SELECT * FROM produits WHERE prix BETWEEN 10 AND 50;

-- Filtre IN
SELECT * FROM clients WHERE ville IN ('Paris', 'Lyon', 'Marseille');

-- Filtre LIKE
SELECT * FROM clients WHERE nom LIKE 'Mar%';
-- % = n'importe quelle suite de caractères` },
      ],
    },

    // ── RELATIONS ENTRE TABLES ───────────────────────────────────────────────
    {
      id: "relations-tables",
      title: "Relations entre tables & cardinalités",
      blocks: [
        { type: "table", headers: ["Relation", "Description", "Exemple"], rows: [
          ["1:1", "Un enregistrement A lié à un seul B", "Utilisateur → Profil"],
          ["1:N", "Un A lié à plusieurs B, mais B lié à un seul A", "Client → Commandes"],
          ["N:M", "Plusieurs A liés à plusieurs B (nécessite une table intermédiaire)", "Étudiants ↔ Cours"],
        ]},
        { type: "note", variant: "info", text: "La relation permet d'éviter les données dupliquées et rend la BDD plus légère et maintenable." },
        { type: "h", text: "Schéma des cardinalités" },
        {
          type: "diagram",
          content: `1:1 (Un-à-un)
[Utilisateur] 1 ───── 1 [Profil]
→ Chaque utilisateur a un seul profil

1:N (Un-à-plusieurs)
[Auteur] 1 ───── N [Livre]
→ Un auteur peut écrire plusieurs livres, mais chaque livre a un seul auteur

N:M (Plusieurs-à-plusieurs)
[Étudiant] N ───── M [Cours]
→ Un étudiant suit plusieurs cours, un cours a plusieurs étudiants
→ Nécessite une table d'association : Étudiant_Cours`,
        },
        { type: "h", text: "Table parent + table enfant (1:N)" },
        { type: "code", filename: "relations.sql", language: "sql", code: `-- Table parent
CREATE TABLE utilisateurs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL
);

-- Table enfant reliée au parent
CREATE TABLE commandes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date_commande DATE NOT NULL,
  utilisateur_id INT,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);` },
        { type: "h", text: "Ajouter une clé étrangère avec ALTER TABLE" },
        { type: "code", filename: "relations.sql", language: "sql", code: `ALTER TABLE commande
ADD CONSTRAINT fk_commande_client
FOREIGN KEY (id_client)
REFERENCES client(id_client)
ON DELETE CASCADE
ON UPDATE CASCADE;` },
        { type: "h", text: "Exemple complet client / commande" },
        { type: "code", filename: "relations.sql", language: "sql", code: `-- Table parent
CREATE TABLE client (
  id_client INT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL
);

-- Table enfant
CREATE TABLE commande (
  id_commande INT PRIMARY KEY,
  id_client INT,
  date_commande DATE
);` },
        { type: "h", text: "Table d'association N:M (LigneCommande)" },
        { type: "code", filename: "relations.sql", language: "sql", code: `CREATE TABLE LigneCommande (
  idCommande INT,
  idProduit INT,
  quantite INT,
  prixUnitaire DECIMAL(10,2),
  PRIMARY KEY (idCommande, idProduit),
  FOREIGN KEY (idCommande) REFERENCES Commande(idCommande),
  FOREIGN KEY (idProduit) REFERENCES Produit(idProduit)
);` },
        { type: "h", text: "Comportement en cas de suppression / modification" },
        { type: "table", headers: ["Option", "Comportement"], rows: [
          ["CASCADE", "Supprime / met à jour les enfants automatiquement"],
          ["SET NULL", "Place NULL dans la clé étrangère des enfants"],
          ["RESTRICT", "(par défaut) — bloque la requête"],
          ["NO ACTION", "Comme RESTRICT, mais après les triggers"],
        ]},
        { type: "h", text: "Violations d'intégrité référentielle" },
        { type: "note", variant: "warning", text: "Si on tente de supprimer un enregistrement parent qui a des enfants, MySQL retourne une erreur. Solution : utiliser CASCADE ou supprimer d'abord les enfants." },
        { type: "code", filename: "relations.sql", language: "sql", code: `-- Exemple d'erreur : supprimer une classe avec des étudiants dedans
DELETE FROM classe WHERE num_classe = 23;
-- → Erreur si des étudiants sont liés à cette classe` },
        { type: "h", text: "Ajouter une relation dans phpMyAdmin" },
        { type: "list", items: [
          "Structure → Relation view (Vue relationnelle)",
          "Dans \"Foreign key constraints\" → choisir la colonne + table de référence",
          "Choisir l'action (CASCADE, RESTRICT…)",
          "Sauvegarder",
        ]},
      ],
    },

    // ── MODÉLISATION MERISE / UML ────────────────────────────────────────────
    {
      id: "modelisation-merise",
      title: "Modélisation — Merise (MCD, MLD, MPD, MCT)",
      blocks: [
        { type: "h", text: "MCD — Modèle Conceptuel de Données" },
        { type: "p", text: "Répond au QUOI (quelles données gérer). Contient : Entités (ex. Étudiant, Cours, Facture), Associations (ex. Étudiant s'inscrit à Cours), Attributs des entités (ex. nom, date), Cardinalités (1, N)." },
        { type: "code", filename: "mcd-exemple.txt", language: "text", code: `Entité : Étudiant (Nom, Prénom, DateNaissance)
Entité : Cours (Code, Intitulé)
Association : Inscription (Date)` },
        { type: "h", text: "MLD — Modèle Logique de Données" },
        { type: "p", text: "Répond au COMMENT organiser les données. Contient : Tables issues des entités et associations, Clés primaires (PK), Clés étrangères (FK), Gestion des relations (1-N, N-N), Normalisation (éviter les doublons)." },
        { type: "code", filename: "mld-exemple.txt", language: "text", code: `Table Étudiant (idÉtudiant PK, Nom, Prénom)
Table Cours (idCours PK, Intitulé)
Table Inscription (idÉtudiant FK, idCours FK, Date)` },
        { type: "h", text: "MPD — Modèle Physique de Données" },
        { type: "p", text: "Répond au COMMENT technique. Contient : Types exacts (INT, VARCHAR, DATE…), Contraintes d'intégrité (NOT NULL, UNIQUE, CHECK…), Index et optimisation du stockage, Particularités du SGBD (MySQL, PostgreSQL…)." },
        { type: "code", filename: "mpd-exemple.sql", language: "sql", code: `CREATE TABLE Etudiant (
  idEtudiant INT PRIMARY KEY,
  Nom VARCHAR(50) NOT NULL,
  Prenom VARCHAR(50)
);` },
        { type: "h", text: "MCT — Modèle Conceptuel de Traitements" },
        { type: "p", text: "Répond au QUOI (quels traitements réaliser). Contient : Acteurs (utilisateurs, systèmes externes), Traitements (ex. Inscription, Facturation), Flux d'informations échangées, Logique métier de haut niveau." },
        { type: "h", text: "Merise vs UML" },
        { type: "table", headers: ["Critère", "Merise", "UML"], rows: [
          ["Nature", "Méthodologie complète", "Langage visuel standardisé"],
          ["Orientation", "BDD et processus métiers", "Orienté objet"],
          ["Modèles", "MCD, MLD, MPD, MCT", "Diagrammes de classes, séquences…"],
          ["Usage typique", "Système d'information (BDD)", "Application logicielle"],
        ]},
        { type: "h", text: "Logiciel Looping" },
        { type: "p", text: "Logiciel de modélisation pour créer des MCD (Modèles Conceptuels de Données). Gratuit, simple d'utilisation. Permet de dessiner les entités, associations et cardinalités. Génère automatiquement le SQL correspondant au modèle." },
      ],
    },

    // ── DROITS D'ACCÈS — GRANT / REVOKE ──────────────────────────────────────
    {
      id: "droits-acces",
      title: "Droits d'accès — GRANT / REVOKE",
      blocks: [
        { type: "h", text: "Attribuer des droits" },
        { type: "code", filename: "grant.sql", language: "sql", code: `GRANT privilèges
ON objet
TO utilisateur;

-- Exemple : tous les droits sur une BDD
GRANT ALL PRIVILEGES ON nom-bdd.* TO 'nom'@'localhost';
FLUSH PRIVILEGES;` },
        { type: "h", text: "Retirer des droits" },
        { type: "code", filename: "grant.sql", language: "sql", code: `REVOKE privilèges
ON objet
FROM utilisateur;` },
        { type: "h", text: "Types de privilèges" },
        { type: "table", headers: ["Privilège", "Action"], rows: [
          ["SELECT", "Lecture"],
          ["INSERT", "Insertion"],
          ["UPDATE", "Modification"],
          ["DELETE", "Suppression"],
          ["ALL PRIVILEGES", "Tous les droits"],
          ["FLUSH PRIVILEGES", "Applique tous les changements"],
        ]},
        { type: "h", text: "Créer un utilisateur avec mot de passe" },
        { type: "code", filename: "grant.sql", language: "sql", code: `CREATE USER 'nom'@'localhost' IDENTIFIED BY 'mon_mot_de_passe';` },
      ],
    },

    // ── SÉCURITÉ DES ACCÈS ───────────────────────────────────────────────────
    {
      id: "securite-acces",
      title: "Sécurité des accès",
      blocks: [
        { type: "h", text: "Principe du moindre privilège" },
        { type: "note", variant: "info", text: "Ne donner à chaque utilisateur que les droits strictement nécessaires à son rôle." },
        { type: "h", text: "Bonnes pratiques essentielles" },
        { type: "list", items: [
          "Comptes SQL uniques par utilisateur (login + mot de passe)",
          "Utiliser des rôles pour centraliser la gestion des permissions",
          "Logs des accès et modifications (audit)",
          "Sécurisation réseau : firewalls, VPN, listes blanches IP",
          "Rôle administrateur (ALL PRIVILEGES) → réservé au créateur de la BDD uniquement",
        ]},
        { type: "h", text: "Authentification renforcée" },
        { type: "list", items: [
          "LDAP (Lightweight Directory Access Protocol)",
          "OAuth / OpenID Connect",
          "Authentification multifactorielle (MFA)",
          "SSL/TLS pour chiffrer les connexions client/serveur",
        ]},
        { type: "h", text: "Gestion des mots de passe" },
        { type: "list", items: [
          "Politiques de complexité et renouvellement obligatoire",
          "Stockage sécurisé (hachage + salage)",
          "Verrouillage des comptes après tentatives échouées",
        ]},
      ],
    },

    // ── PLAN DE SAUVEGARDE ───────────────────────────────────────────────────
    {
      id: "plan-sauvegarde",
      title: "Plan de sauvegarde",
      blocks: [
        { type: "note", variant: "warning", text: "Les serveurs ne sont pas infaillibles — la sauvegarde est obligatoire." },
        { type: "list", items: [
          "2 à 3 copies de données sur au moins 2 supports différents",
          "Sauvegarde quotidienne → supprimer les copies de +3 jours",
          "Sauvegarde toutes les heures pour projets critiques (financier…)",
          "Sauvegarde complète hebdomadaire",
          "Protéger les sauvegardes contre les fuites ou pertes",
        ]},
        { type: "h", text: "MySQLDump (ligne de commande)" },
        { type: "code", filename: "terminal", language: "bash", code: `# Sauvegarder une BDD
mysqldump --user=mon_user --password=mon_password --databases ecole > ecole.sql

# Sauvegarder une table précise
mysqldump --user=mon_user --password=mon_password ecole Etudiant > etudiant.sql

# Restaurer une BDD
mysql --user=mon_user --password=mon_password ecole < fichier_source.sql

# Depuis le terminal (version courte)
mysqldump -u root -p test > backup.sql   # export
mysql -u root -p test < backup.sql       # import` },
        { type: "h", text: "Réinitialiser le mot de passe root MySQL" },
        { type: "code", filename: "terminal", language: "bash", code: `# 1. Arrêter le service MySQL
# 2. Redémarrer sans authentification
mysqld_safe --skip-grant-tables --user=root &

# 3. Reconfigurer le mot de passe
mysql -u root
UPDATE mysql.user SET Password=PASSWORD('nouveau_mdp') WHERE User='root';
FLUSH PRIVILEGES;

# 4. Redémarrer MySQL normalement` },
      ],
    },

    // ── TRANSACTIONS & ACID ──────────────────────────────────────────────────
    {
      id: "transactions-acid",
      title: "Transactions & ACID",
      blocks: [
        { type: "p", text: "Une transaction regroupe plusieurs opérations SQL en une unité indivisible : soit tout réussit, soit rien n'est appliqué." },
        { type: "h", text: "Propriétés ACID" },
        { type: "table", headers: ["Lettre", "Propriété", "Description"], rows: [
          ["A", "Atomicité", "Tout ou rien — pas d'état intermédiaire"],
          ["C", "Cohérence", "La BDD reste dans un état valide après la transaction"],
          ["I", "Isolation", "Chaque transaction est isolée des autres (pas d'interférence)"],
          ["D", "Durabilité", "Après COMMIT, les modifications sont permanentes même en cas de panne"],
        ]},
        { type: "h", text: "Types d'isolation (problèmes évités)" },
        { type: "list", items: [
          "Dirty reads (lectures sales)",
          "Non-repeatable reads (lectures non répétables)",
          "Phantom reads",
        ]},
        { type: "h", text: "Exemple de transaction" },
        { type: "code", filename: "transaction.sql", language: "sql", code: `BEGIN;
UPDATE products SET stock = stock - 1 WHERE id = 1;
INSERT INTO orders (user_id, total) VALUES (1, 49.90);
COMMIT; -- ou ROLLBACK en cas d'erreur` },
      ],
    },

    // ── TRIGGERS ─────────────────────────────────────────────────────────────
    {
      id: "triggers",
      title: "Triggers",
      blocks: [
        { type: "p", text: "Un trigger s'exécute automatiquement avant ou après un événement sur une table (INSERT, UPDATE, DELETE)." },
        { type: "h", text: "Types de triggers DML" },
        { type: "table", headers: ["Type", "Moment", "Événement", "Cas d'usage"], rows: [
          ["BEFORE INSERT", "Avant l'insertion", "INSERT", "Valider/modifier les données avant insertion"],
          ["AFTER INSERT", "Après l'insertion", "INSERT", "Ajouter une ligne de log"],
          ["BEFORE UPDATE", "Avant la mise à jour", "UPDATE", "Vérifier ou modifier les nouvelles valeurs"],
          ["AFTER UPDATE", "Après la mise à jour", "UPDATE", "Historiser les changements"],
          ["BEFORE DELETE", "Avant la suppression", "DELETE", "Contrôler si la suppression est autorisée"],
          ["AFTER DELETE", "Après la suppression", "DELETE", "Enregistrer la suppression dans un log"],
        ]},
        { type: "h", text: "Types de triggers DDL (Oracle / SQL Server — non supporté MySQL)" },
        { type: "table", headers: ["Événement", "Description"], rows: [
          ["CREATE TABLE", "Création d'une table"],
          ["ALTER TABLE", "Modification de structure"],
          ["DROP TABLE", "Suppression d'une table"],
          ["CREATE / DROP INDEX", "Gestion des index"],
          ["CREATE / DROP PROCEDURE", "Gestion des procédures"],
        ]},
        { type: "h", text: "Types selon le niveau d'exécution" },
        { type: "table", headers: ["Type", "Fréquence"], rows: [
          ["Statement-level", "Une fois par requête"],
          ["Row-level", "Pour chaque ligne affectée (le plus courant)"],
        ]},
        { type: "h", text: "Utilisations typiques" },
        { type: "list", items: [
          "Historisation des opérations (INSERT, UPDATE, DELETE) dans une table d'audit",
          "Calcul automatique de valeurs dérivées (totaux, moyennes)",
          "Formatage des données à l'insertion (majuscules, formats de date)",
          "Vérification d'intégrité complexe",
          "Suppression en cascade personnalisée",
        ]},
        { type: "h", text: "Risques et limitations" },
        { type: "table", headers: ["Risque", "Description"], rows: [
          ["Impact sur performances", "Triggers lourds ralentissent les transactions"],
          ["Complexité accrue", "Trop de triggers = maintenance difficile"],
          ["Effets cachés", "Modifications silencieuses difficiles à tracer"],
          ["Boucles infinies", "Triggers qui s'appellent mutuellement"],
          ["Portabilité limitée", "Syntaxe différente selon le SGBD"],
        ]},
        { type: "h", text: "Bonnes pratiques triggers" },
        { type: "list", items: [
          "Réserver aux tâches simples ou contraintes difficiles à gérer autrement",
          "Documenter clairement chaque trigger",
          "Tester rigoureusement en environnement de test",
          "Éviter plusieurs triggers sur un même événement",
          "Encapsuler la logique dans des procédures stockées appelées par le trigger",
          "Utiliser un système de nommage cohérent",
        ]},
      ],
    },

    // ── TESTS DE DONNÉES ─────────────────────────────────────────────────────
    {
      id: "tests-donnees",
      title: "Tests de données",
      blocks: [
        { type: "h", text: "Tests fonctionnels" },
        { type: "p", text: "Vérifie si les données ont un sens au niveau métier : l'âge des employés est positif, le nom contient uniquement des lettres, le prix d'un produit est positif." },
        { type: "h", text: "Tests ACID" },
        { type: "p", text: "Vérifie que le SGBD respecte les contraintes ACID." },
        { type: "h", text: "Tests non-fonctionnels" },
        { type: "p", text: "Vérifie si la BDD supporte les opérations en production (performance, volume)." },
        { type: "list", items: [
          "Outils : SolarWinds Database Performance Analyzer, DTM Data Generator",
          "Remplissage de BDD avec des données de test",
          "Analyse des performances sur des transactions volumineuses",
          "Tests d'assurance qualité",
        ]},
      ],
    },

    // ── ARCHITECTURE CLIENT-SERVEUR ──────────────────────────────────────────
    {
      id: "architecture-client-serveur",
      title: "Architecture client-serveur d'un SGBD",
      blocks: [
        { type: "h", text: "Le rôle du composant serveur" },
        { type: "list", items: [
          "Manipuler les fichiers contenant la BDD",
          "Permettre un accès optimisé aux données",
          "Gérer la cohérence et la journalisation",
          "Gérer la confidentialité et les accès concurrents (verrous)",
          "Enregistrer des procédures stockées",
          "Gérer les triggers",
        ]},
        { type: "h", text: "Protocoles réseau" },
        { type: "list", items: [
          "TCP/IP est le plus populaire (port 3306 par défaut pour MySQL)",
          "Possibilité de chiffrer la communication",
          "Définir la taille du paquet réseau",
          "Définir un délai de connexion maximum",
        ]},
        { type: "h", text: "Les 4 sous-groupes SQL" },
        { type: "table", headers: ["Sigle", "Nom", "Rôle"], rows: [
          ["LDD", "Langage de Définition de Données", "Structure de la BDD (CREATE, ALTER, DROP)"],
          ["LMD", "Langage de Manipulation de Données", "Données dans les tables (SELECT, INSERT, UPDATE, DELETE)"],
          ["LCD", "Langage de Contrôle de Données", "Gestion des privilèges (GRANT, REVOKE)"],
          ["LCT", "Langage de Contrôle des Transactions", "Validation/annulation (COMMIT, ROLLBACK)"],
        ]},
        { type: "h", text: "Comparatif SGBD" },
        { type: "table", headers: ["SGBD", "Points forts", "Points faibles"], rows: [
          ["MySQL", "Simple, rapide, intégré à WAMP", "Peu scalable, SQL non 100% standard"],
          ["MariaDB", "Meilleures performances que MySQL, cryptographie", "—"],
          ["PostgreSQL", "Types personnalisés, outils avancés", "Documentation limitée"],
          ["Oracle", "Cloud, haute performance et solidité", "Coût élevé, lourd en ressources"],
          ["SQL Server", "Large gamme de fonctionnalités, Cloud, bonne doc", "Coût élevé en version entreprise"],
          ["MongoDB", "Non relationnel, orienté objet", "Pas de SQL standard"],
        ]},
      ],
    },

    // ── OUTILS SGBD ──────────────────────────────────────────────────────────
    {
      id: "outils-sgbd",
      title: "Outils — MySQL Workbench, phpMyAdmin, MAMP",
      blocks: [
        { type: "h", text: "MySQL Workbench — Créer un schéma (Windows)" },
        { type: "list", items: [
          "\"File\" → \"New Model\"",
          "\"Add Diagram\" → \"Place a New Table\"",
          "Double-clic pour renommer et entrer les infos",
        ]},
        { type: "h", text: "MySQL Workbench — Créer un schéma (macOS)" },
        { type: "list", items: [
          "\"File\" → \"New Model\"",
          "Panneau \"EER Diagrams\" → \"Add Diagram\"",
          "Glisser les tables sur la toile blanche",
        ]},
        { type: "h", text: "MySQL Workbench — Exporter un schéma (générer le SQL)" },
        { type: "list", items: [
          "\"File\" → \"Export\"",
          "\"Forward Engineer SQL CREATE Script\" → \"Next\"",
          "\"Export MySQL Table Objects\" → \"Next\"",
          "\"Copy to Clipboard\" → Exécuter dans la BDD",
        ]},
        { type: "h", text: "Exporter / Restaurer une BDD" },
        { type: "code", filename: "terminal", language: "bash", code: `# Exporter (sauvegarder)
mysqldump -u root -p test > backup.sql

# Restaurer
mysql -u root -p test < backup.sql` },
        { type: "h", text: "phpMyAdmin — Examiner une BDD" },
        { type: "list", items: [
          "Copier le fichier fichier.sql",
          "Coller dans \"SQL\" → \"Exécuter\"",
          "Copier fichier-data.sql",
          "Coller dans \"SQL\" en effaçant la requête de base → \"Exécuter\"",
        ]},
        { type: "h", text: "phpMyAdmin — Filtrer des données" },
        { type: "list", items: [
          "Sélectionner la table",
          "\"Éditer en ligne\" → choisir la requête de filtre",
        ]},
        { type: "h", text: "phpMyAdmin — Lier deux tables" },
        { type: "list", items: [
          "\"Structure\" → clé étrangère visible à côté de la colonne id",
          "\"Designer\" → voir les traits de liaison",
        ]},
        { type: "note", variant: "warning", text: "Taille maximale pour importer un fichier SQL via phpMyAdmin : 2 048 Mo." },
        { type: "h", text: "phpMyAdmin — Ajouter une clé primaire" },
        { type: "list", items: [
          "Sélectionner la BDD",
          "Sélectionner la table",
          "\"Structure\" → \"Index\"",
          "Cliquer \"Exécuter\" → \"Primary\" → \"Exécuter\"",
        ]},
        { type: "h", text: "MAMP (macOS) — Créer une BDD" },
        { type: "list", items: [
          "Lancer MAMP → \"Start\" (bouton devient vert = serveur actif)",
          "\"Start\" → ouvre la page du serveur",
          "\"TOOLS\" → \"PHPMYADMIN\"",
        ]},
        { type: "h", text: "Iperius Backup (sauvegarde cloud)" },
        { type: "p", text: "Outil spécialisé pour MySQL et MariaDB." },
        { type: "list", items: [
          "Sauvegarde sans interrompre le service",
          "Destinations : Google Drive, Amazon S3, Azure Storage, Dropbox, OneDrive",
          "Compression à la volée",
          "Chiffrement AES 256 bits",
        ]},
        { type: "h", text: "MySQLDumper (sauvegarde locale)" },
        { type: "p", text: "Alternative à phpMyAdmin pour les très gros volumes." },
        { type: "list", items: [
          "Sauvegardes locales, autonomes",
          "Gestion de plusieurs sauvegardes simultanées",
          "Envoi automatique via FTP",
          "Notification par e-mail",
        ]},
        { type: "h", text: "Installer MySQL (Windows)" },
        { type: "list", items: [
          "Choisir la version classique (pas web) → \"No thanks, just start my download\"",
          "\"Custom\" → sélectionner : MySQL Server, MySQL Workbench, MySQL Shell → \"Next\"",
          "\"Execute\" → \"Next\" → \"Next\"",
          "\"Development Computer\" → cocher TCP/IP + \"Open Windows Firewall ports\" → Port 3306 → \"Next\"",
          "Choisir la méthode d'authentification recommandée → définir un mot de passe root",
          "Décocher \"Start the MySQL Server at System Startup\" → \"Next\" → \"Execute\"",
        ]},
        { type: "h", text: "Commandes système — Vérifier les versions" },
        { type: "code", filename: "terminal", language: "bash", code: `# MySQL
mysql --version

# PostgreSQL
psql --version

# SQLite
sqlite3 --version` },
      ],
    },

    // ── INDEX (détaillé) ─────────────────────────────────────────────────────
    {
      id: "index-detaille",
      title: "Les index — Détails et bonnes pratiques",
      blocks: [
        { type: "p", text: "Un index est une structure de données qui accélère les recherches dans une table." },
        { type: "table", headers: ["Avantage", "Description"], rows: [
          ["Accélération SELECT", "Évite le full table scan (parcours complet)"],
          ["Optimisation des JOIN", "Accélère les requêtes multi-tables"],
          ["Support des contraintes", "Les index uniques garantissent l'unicité"],
          ["Amélioration du tri", "Accélère ORDER BY et GROUP BY"],
          ["Réduction des ressources", "Moins de CPU, d'I/O disque, de mémoire"],
        ]},
        { type: "note", variant: "warning", text: "Inconvénient : ralentit INSERT, UPDATE et DELETE (l'index doit être mis à jour)." },
        { type: "h", text: "Clés primaires vs index simples" },
        { type: "list", items: [
          "Clé jaune dans phpMyAdmin = champ défini en clé primaire (index + unicité)",
          "Clé grise = index simple (pas de contrainte d'unicité)",
        ]},
        { type: "note", variant: "info", text: "Avoir une clé primaire dans chaque table est fortement conseillé." },
      ],
    },

    // ── DICTIONNAIRE DE DONNÉES ──────────────────────────────────────────────
    {
      id: "dictionnaire-donnees",
      title: "Dictionnaire de données",
      blocks: [
        { type: "p", text: "Répertoire centralisé contenant des informations sur chaque élément de la BDD : tables, colonnes, types, contraintes, relations, index, vues." },
        { type: "table", headers: ["Élément", "Description"], rows: [
          ["Nom de l'objet", "Nom de la table ou de la colonne"],
          ["Type de données", "INT, VARCHAR, DATE, DECIMAL…"],
          ["Taille / précision", "Longueur maximale, précision pour décimaux"],
          ["Valeurs possibles", "Domaine autorisé ou liste de valeurs"],
          ["Nullabilité", "Peut être NULL ou NON NULL"],
          ["Clé primaire / étrangère", "Relations entre tables"],
          ["Index", "Optimisations de recherche"],
          ["Valeur par défaut", "Valeur utilisée si aucune donnée fournie"],
          ["Description fonctionnelle", "Rôle ou usage métier"],
          ["Historique / version", "Suivi des modifications dans le temps"],
        ]},
      ],
    },

    // ── LANGAGES BDD ET TYPES DE BDD ─────────────────────────────────────────
    {
      id: "langages-bdd",
      title: "Les différents langages BDD",
      blocks: [
        { type: "table", headers: ["Langage", "Usage"], rows: [
          ["SQL", "Bases de données relationnelles"],
          ["XQuery", "Données XML"],
          ["JSON / BSON", "Bases NoSQL (MongoDB…)"],
          ["XPath", "Parcourir le DOM XML"],
          ["DMX", "Modèles d'exploration de données (Data Mining)"],
          ["MDX", "Bases de données multidimensionnelles"],
          ["OQL", "Bases orientées objet"],
          ["SPARQL", "Graphes RDF"],
        ]},
        { type: "note", variant: "info", text: "SQL, XQuery et JSON sont les trois fondamentaux à maîtriser." },
        { type: "h", text: "Les 2 types de BDD" },
        { type: "h", text: "Relationnelle" },
        { type: "list", items: [
          "Très structurée",
          "Données sous forme de tables (lignes + colonnes)",
          "SGBD : MySQL, PostgreSQL, MariaDB, Oracle, SQL Server",
          "Langage : SQL",
        ]},
        { type: "h", text: "Non relationnelle (NoSQL)" },
        { type: "list", items: [
          "Adaptée aux données très volumineuses",
          "Données sous format clé-valeur, documents, graphes, colonnes",
          "SGBD : MongoDB, Oracle NoSQL",
          "Utile pour : réseaux sociaux, transport, données non structurées",
        ]},
      ],
    },

    // ── FORMATS SGBD ─────────────────────────────────────────────────────────
    {
      id: "formats-sgbd",
      title: "Les formats SGBD",
      blocks: [
        { type: "h", text: "Relationnel" },
        { type: "list", items: [
          "Données dans des tables avec lignes et colonnes",
          "Tables liées par des relations (intégrité, pas de redondance)",
          "Langage SQL",
          "Grande majorité des SGBD",
        ]},
        { type: "h", text: "Hiérarchique" },
        { type: "p", text: "Données stockées dans une structure arborescente." },
        { type: "h", text: "Orienté objet" },
        { type: "list", items: [
          "Données sous forme d'objets persistants",
          "Utilisé avec C++, Java, C#",
        ]},
        { type: "h", text: "XML" },
        { type: "list", items: [
          "Données dans des fichiers XML (textuel, auto-descriptif)",
          "Langages de requête : XPath, XQuery",
        ]},
      ],
    },

    // ── FORMAT XML ───────────────────────────────────────────────────────────
    {
      id: "format-xml",
      title: "Format XML",
      blocks: [
        { type: "h", text: "Syntaxe de base" },
        { type: "code", filename: "exemple.xml", language: "xml", code: `<nom_de_la_balise> contenu </nom_de_la_balise>` },
        { type: "list", items: [
          "Textuel, basé sur des balises",
          "Extensible : permet de définir d'autres langages (XHTML, XSLT, RSS, SVG)",
        ]},
        { type: "h", text: "Langages de la famille XML" },
        { type: "table", headers: ["Langage", "Description"], rows: [
          ["XHTML", "Reformulation rigoureuse de HTML 4"],
          ["XSLT", "Transformation XML → PDF ou HTML (repose sur XPath)"],
          ["RSS", "Flux d'information en temps réel"],
          ["SVG", "Format de données pour graphiques vectoriels"],
        ]},
        { type: "h", text: "XML vs BDD relationnelle" },
        { type: "table", headers: ["Critère", "XML", "BDD relationnelle"], rows: [
          ["Lisibilité", "Lisible par un humain", "Format binaire, non lisible directement"],
          ["Vitesse d'indexation", "Lente (format texte)", "Rapide (format binaire)"],
          ["Place disque", "Verbeux, prend beaucoup de place", "Compact"],
          ["Relations", "Difficile à reproduire", "Native"],
          ["Requêtes", "XPath (moins puissant que SQL)", "SQL (très avancé)"],
        ]},
        { type: "note", variant: "info", text: "Une BDD sous XML est possible mais non recommandée." },
      ],
    },

    // ── LANGAGE XPATH ────────────────────────────────────────────────────────
    {
      id: "langage-xpath",
      title: "Langage XPath",
      blocks: [
        { type: "p", text: "Permet de localiser une portion d'un document XML." },
        { type: "h", text: "Structure d'un \"pas de localisation\"" },
        { type: "p", text: "Chaque pas est constitué de : 1) Un axe (monter ou descendre dans la hiérarchie), 2) Une condition sur un nœud, 3) Un ou plusieurs prédicats." },
        { type: "h", text: "Tableau de référence XPath" },
        { type: "table", headers: ["Requête XPath", "Résultat attendu"], rows: [
          ["/", "Le nœud racine (document entier)"],
          ["/catalog", "L'élément <catalog> et son contenu"],
          ["//article", "Tous les <article> du document"],
          ["//title", "Tous les <title> du document"],
          [".", "Le nœud courant"],
          ["..", "Le nœud parent"],
          ["child::article", "Les enfants directs nommés <article>"],
          ["//article[@nom='XPath']", "<article> avec attribut nom=\"XPath\""],
          ["//article[1]", "Premier <article>"],
          ["//article[last()]", "Dernier <article>"],
          ["//article[position()=2]", "Le 2ème <article>"],
          ["//article/@nom", "Valeurs des attributs nom"],
          ["//@id", "Toutes les valeurs d'attribut id"],
          ["count(//article)", "Nombre d'articles"],
          ["//article/title/text()", "Texte de tous les <title>"],
          ["//article[not(@nom='XSLT')]", "Articles dont nom ≠ \"XSLT\""],
          ["//article[title[contains(.,'XSLT')]]", "Article dont le titre contient \"XSLT\""],
        ]},
      ],
    },

    // ── LANGAGE XQUERY ───────────────────────────────────────────────────────
    {
      id: "langage-xquery",
      title: "Langage XQuery",
      blocks: [
        { type: "p", text: "Permet d'extraire des données de documents XML." },
        { type: "h", text: "Fonctions principales" },
        { type: "code", filename: "requetes.xq", language: "text", code: `-- Ouvrir un fichier XML
doc("games.xml")

-- Sélectionner tous les titres
doc("games.xml")/gamestore/game/title

-- Sélectionner avec prédicat (prix < 30)
doc("games.xml")/gamestore/game[price<30]` },
      ],
    },

    // ── FORMAT JSON / BSON ───────────────────────────────────────────────────
    {
      id: "format-json-bson",
      title: "Format JSON / BSON",
      blocks: [
        { type: "h", text: "JSON" },
        { type: "list", items: [
          "Peut intégrer plusieurs documents JSON (max 100) dans un seul fichier",
          "Types supportés : chaînes, nombres, objets, tableaux, true, false, null",
        ]},
        { type: "h", text: "BSON" },
        { type: "list", items: [
          "Utilisé dans MongoDB pour chiffrer les données JSON",
          "Format binaire (Binary JSON)",
        ]},
      ],
    },

    // ── PROCÉDURES STOCKÉES ET VUES ──────────────────────────────────────────
    {
      id: "vues-procedures",
      title: "Procédures stockées et Vues",
      blocks: [
        { type: "h", text: "Vue (VIEW)" },
        { type: "p", text: "Requête SQL sauvegardée qui agit comme une table virtuelle." },
        { type: "code", filename: "view.sql", language: "sql", code: `-- Exemple de création de vue
CREATE VIEW vue_etudiants_actifs AS
SELECT nom, prenom, email
FROM etudiant
WHERE statut = 'actif';

-- Utilisation comme une table normale
SELECT * FROM vue_etudiants_actifs;` },
        { type: "h", text: "Procédure stockée" },
        { type: "p", text: "Ensemble d'instructions SQL stockées et précompilées dans la base, exécutées de façon sécurisée par leur nom." },
        { type: "code", filename: "procedure.sql", language: "sql", code: `-- Créer une procédure
CREATE PROCEDURE nom_procedure(IN param1 INT)
BEGIN
  SELECT * FROM NomTable WHERE id = param1;
END;

-- Appeler une procédure
CALL nom_procedure(5);` },
        { type: "note", variant: "info", text: "Avantage : exécution sécurisée, réutilisable, performances améliorées." },
      ],
    },

    // ── BASE NORTHWIND ───────────────────────────────────────────────────────
    {
      id: "base-northwind",
      title: "La base Northwind",
      blocks: [
        { type: "p", text: "C'est la BDD d'un logiciel de gestion commerciale — souvent utilisée pour apprendre SQL." },
        { type: "h", text: "Tables contenues" },
        { type: "list", items: [
          "Employés", "Commandes", "Détails des commandes", "Produits",
          "Clients", "Contacts", "Fournisseurs", "Régions", "Livreurs",
        ]},
        { type: "h", text: "Composants" },
        { type: "list", items: [
          "Tables — contiennent les données",
          "Vues — requêtes SQL cachées pour voir les données d'une façon appropriée",
          "Procédures stockées — fonctions SQL précompilées pour des opérations sécurisées",
        ]},
        { type: "h", text: "Examiner la BDD Northwind dans phpMyAdmin" },
        { type: "list", items: [
          "Copier le fichier fichier.sql",
          "Coller dans \"SQL\" → \"Exécuter\"",
          "Copier fichier-data.sql",
          "Coller dans \"SQL\" en effaçant la requête de base → \"Exécuter\"",
        ]},
        { type: "h", text: "Exporter Northwind depuis MySQL Workbench" },
        { type: "list", items: [
          "\"File\" → \"Export\"",
          "\"Forward Engineer SQL CREATE Script\" → cocher \"Generate DROP SCHEMA\" → \"Next\"",
          "\"Next\" → copier le script ou l'enregistrer → importer dans phpMyAdmin",
        ]},
        { type: "h", text: "Voir le modèle physique dans phpMyAdmin" },
        { type: "list", items: ["Sélectionner la BDD", "\"Plus\" → \"Concepteur\""] },
        { type: "h", text: "Requête complexe exemple" },
        { type: "code", filename: "northwind.sql", language: "sql", code: `SELECT City, COUNT(EmployeeID) AS NumEmployees
FROM Employees
WHERE EmployeeID >= 1
GROUP BY City
HAVING COUNT(EmployeeID) > 1
ORDER BY COUNT(EmployeeID);` },
        { type: "h", text: "Rédiger un script de génération de BDD" },
        { type: "p", text: "Pour chaque table, le script doit : Détruire la table si elle existait (DROP TABLE IF EXISTS), Créer entièrement sa structure (colonnes, types, attributs), Remplir la table avec tous les enregistrements." },
        { type: "code", filename: "constraint.sql", language: "sql", code: `-- Exemple de contrainte d'intégrité référentielle entre orders et customers
ALTER TABLE orders
ADD CONSTRAINT fk_orders_customers
FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
ON DELETE CASCADE
ON UPDATE CASCADE;` },
        { type: "note", variant: "warning", text: "La taille max d'un fichier SQL importé via phpMyAdmin est 2 048 Mo. Les données BLOB (images, sons) prennent beaucoup de place." },
      ],
    },

    // ── CONNEXION PHP — PDO ──────────────────────────────────────────────────
    {
      id: "php-connexion-pdo",
      title: "Connexion PHP — PDO",
      blocks: [
        { type: "code", filename: "connexion.php", language: "php", code: `<?php
$host = 'localhost';
$db   = 'nom_bdd';
$user = 'root';
$pass = 'mot_de_passe';

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$db;charset=utf8mb4",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
    echo "Connexion réussie.";
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>` },
        { type: "note", variant: "info", text: "dsn = nom de la BDD + serveur. $user / $pass = identifiants MySQL." },
      ],
    },

    // ── CONNEXION PHP — MYSQLI ───────────────────────────────────────────────
    {
      id: "php-connexion-mysqli",
      title: "Connexion PHP — MySQLi",
      blocks: [
        { type: "code", filename: "connexion.php", language: "php", code: `<?php
$host = 'localhost'; // serveur BDD
$user = 'root';      // nom utilisateur
$pass = '';          // mot de passe (vide en local)
$db   = 'nom_bdd';  // nom de la BDD

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
    die('Erreur de connexion : ' . $mysqli->connect_error);
}
echo "Connexion réussie.";
?>` },
        { type: "note", variant: "info", text: "Bonne pratique : la connexion doit avoir lieu une seule fois à l'initialisation de l'application. Plusieurs instances d'une même connexion peuvent générer des conflits." },
        { type: "h", text: "Arguments nécessaires pour toute connexion" },
        { type: "list", items: [
          "L'adresse du serveur (ex. localhost)",
          "Le port d'écoute (ex. 3306 pour MySQL)",
          "Le nom de l'utilisateur",
          "Le mot de passe",
        ]},
      ],
    },

    // ── REQUÊTES PRÉPARÉES PHP ───────────────────────────────────────────────
    {
      id: "php-requetes-preparees",
      title: "Requêtes préparées (paramétrées)",
      blocks: [
        { type: "p", text: "Permettent d'interroger une BDD en toute sécurité, sans risque d'injection SQL." },
        { type: "h", text: "SELECT avec PDO" },
        { type: "code", filename: "select.php", language: "php", code: `<?php
$email = 'utilisateur@example.com';

$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
$stmt->execute([$email]);

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
print_r($result);
?>` },
        { type: "h", text: "INSERT avec PDO" },
        { type: "code", filename: "insert.php", language: "php", code: `<?php
$stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, email) VALUES (?, ?)");
$stmt->execute(['Alice', 'alice@example.com']);
echo "Enregistrement ajouté.";
?>` },
        { type: "h", text: "Avec bindParam (nommé)" },
        { type: "code", filename: "bind.php", language: "php", code: `<?php
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = :email");
$stmt->bindParam(':email', $email);
$email = 'alice@example.com';
$stmt->execute();
?>` },
        { type: "h", text: "En pseudo-code (concept)" },
        { type: "code", filename: "pseudo.txt", language: "text", code: `// Interroger en toute sécurité avec une donnée variable
db.query("SELECT * FROM Utilisateurs WHERE email = ?", [email]);` },
      ],
    },

    // ── SAUVEGARDE BDD VIA PHP ───────────────────────────────────────────────
    {
      id: "php-sauvegarde-bdd",
      title: "Sauvegarde — Exporter/Importer une BDD via PHP",
      blocks: [
        { type: "h", text: "Via PDO" },
        { type: "code", filename: "backup-pdo.php", language: "php", code: `<?php
$host = 'localhost';
$db   = 'test';
$user = 'root';
$pass = 'votre_mot_de_passe';
$backupFile = 'backup.sql';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    $sql = file_get_contents($backupFile);
    if ($sql === false) {
        throw new Exception("Impossible de lire le fichier SQL.");
    }

    $pdo->exec($sql);
    echo "✅ Importation réussie via PDO.";

} catch (Exception $e) {
    echo "❌ Échec de l'importation : " . $e->getMessage();
}
?>` },
        { type: "h", text: "Via MySQLi" },
        { type: "code", filename: "backup-mysqli.php", language: "php", code: `<?php
$host = 'localhost';
$db   = 'test';
$user = 'root';
$pass = 'votre_mot_de_passe';
$backupFile = 'backup.sql';

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
    die('Erreur de connexion : ' . $mysqli->connect_error);
}

$sql = file_get_contents($backupFile);
if ($sql === false) {
    die("Impossible de lire le fichier SQL.");
}

if ($mysqli->multi_query($sql)) {
    do {
        if ($result = $mysqli->store_result()) {
            $result->free();
        }
    } while ($mysqli->more_results() && $mysqli->next_result());
    echo "✅ Importation réussie via MySQLi.";
} else {
    echo "❌ Erreur lors de l'importation : " . $mysqli->error;
}

$mysqli->close();
?>` },
      ],
    },

    // ── CONNEXION PYTHON ─────────────────────────────────────────────────────
    {
      id: "python-connexion-bdd",
      title: "Connexion BDD avec Python",
      blocks: [
        { type: "h", text: "Installer un driver MySQL (Python)" },
        { type: "code", filename: "terminal", language: "bash", code: `python -m pip install mysql-connector-python` },
        { type: "h", text: "Exemple de connexion et requête" },
        { type: "code", filename: "connexion.py", language: "python", code: `import mysql.connector

cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mot_de_passe",
    database="nom_bdd"
)

cursor = cnx.cursor()
cursor.execute("SELECT * FROM utilisateurs WHERE email =%s", ("alice@example.com",))
result = cursor.fetchall()
print(result)

cnx.close()` },
      ],
    },

    // ── PERSISTANCE DES DONNÉES ──────────────────────────────────────────────
    {
      id: "persistance-donnees",
      title: "Persistance des données",
      blocks: [
        { type: "p", text: "La persistance des données consiste à sauvegarder des informations de manière durable, afin qu'elles ne disparaissent pas lorsque l'application s'arrête. Elle est principalement assurée côté serveur grâce à des bases de données." },
      ],
    },

    // ── SQLITE ────────────────────────────────────────────────────────────────
    {
      id: "sqlite",
      title: "SQLite",
      blocks: [
        { type: "h", text: "Visualiser une base SQLite — Méthode graphique" },
        { type: "list", items: [
          "Ouvrir DB Browser for SQLite",
          "Cliquer sur Open Database",
          "Sélectionner le fichier db.sqlite3",
          "Aller dans l'onglet Browse Data",
          "Choisir une table (ex : livre)",
        ]},
        { type: "h", text: "Méthode ligne de commande" },
        { type: "code", filename: "terminal", language: "bash", code: `# Ouvrir SQLite
sqlite3 db.sqlite3

# Voir les tables
.tables

# Voir le contenu d'une table
SELECT * FROM livre;

# Quitter SQLite
.exit` },
      ],
    },

    // ── TYPES DE BASES DE DONNÉES & CAS D'USAGE ─────────────────────────────
    {
      id: "types-bdd-cas-usage",
      title: "Types de bases de données & cas d'usage",
      blocks: [
        { type: "h", text: "Bases de données relationnelles (SQL)" },
        { type: "p", text: "Données structurées organisées en tables reliées entre elles." },
        { type: "list", items: ["ERP (gestion d'entreprise)", "CRM (relation client)", "Banques et finance", "Gestion de stock et commandes", "Systèmes nécessitant des transactions fiables (ACID)"] },
        { type: "p", text: "Caractéristiques : Schéma fixe, Langage SQL, Forte intégrité des données." },
        { type: "p", text: "Inconvénients : Difficile à scaler horizontalement, Peu flexible." },
        { type: "h", text: "Bases de données documentaires (NoSQL)" },
        { type: "p", text: "Stockage de données semi-structurées (JSON)." },
        { type: "list", items: ["Applications web et mobiles", "Profils utilisateurs", "CMS (contenu dynamique)", "Logs et événements", "Données évolutives"] },
        { type: "p", text: "Caractéristiques : Schéma flexible, Très évolutif. Ex : MongoDB, Firebase." },
        { type: "h", text: "Bases clé-valeur (NoSQL)" },
        { type: "p", text: "Stockage sous forme : clé → valeur." },
        { type: "list", items: ["Cache (Redis)", "Sessions utilisateurs", "Files d'attente", "Données temporaires rapides"] },
        { type: "p", text: "Caractéristiques : Très rapide, Simple, Peu de structure." },
        { type: "h", text: "Bases en colonnes (NoSQL)" },
        { type: "p", text: "Données stockées par colonnes plutôt que par lignes." },
        { type: "list", items: ["Big Data", "Analyse de données massives", "Temps réel", "Très gros volumes"] },
        { type: "p", text: "Caractéristiques : Très scalable, Optimisé pour la lecture rapide." },
        { type: "h", text: "Bases de données graphes (NoSQL)" },
        { type: "p", text: "Stocke les données sous forme de nœuds et relations." },
        { type: "list", items: ["Réseaux sociaux", "Systèmes de recommandation", "Détection de fraude", "Relations complexes"] },
        { type: "p", text: "Caractéristiques : Très bon pour les relations complexes. Ex : Neo4j." },
      ],
    },

    // ── OPTIMISATION ET FIABILITÉ ────────────────────────────────────────────
    {
      id: "optimisation-fiabilite",
      title: "Optimisation et fiabilité — BDD relationnelles",
      blocks: [
        { type: "p", text: "L'optimisation des BDD a pour but de : Améliorer les performances, Réduire le temps de réponse, Garantir la fiabilité et la cohérence des données." },
        { type: "h", text: "Transactions — ACID" },
        { type: "p", text: "Groupe d'opérations exécutées comme une seule unité — garantit : Atomicité, Cohérence, Isolation, Durabilité." },
        { type: "h", text: "Verrouillage" },
        { type: "p", text: "Contrôle l'accès concurrent aux données — évite les conflits et corruptions." },
        { type: "h", text: "Normalisation" },
        { type: "p", text: "Organisation des données en tables — réduit la redondance, améliore la cohérence." },
        { type: "h", text: "Dénormalisation" },
        { type: "p", text: "Ajout contrôlé de redondance pour améliorer les performances de lecture." },
        { type: "h", text: "Partitionnement" },
        { type: "p", text: "Découpe une table en plusieurs parties (physique ou logique) — pour gérer de gros volumes." },
        { type: "h", text: "Réplication & sauvegarde" },
        { type: "p", text: "Duplication des données sur plusieurs serveurs — protection contre les pertes, haute disponibilité." },
      ],
    },

    // ── CONCEPTION / MODÉLISATION RELATIONNELLE ──────────────────────────────
    {
      id: "conception-modelisation-relationnelle",
      title: "Conception / Modélisation — BDD relationnelle",
      blocks: [
        { type: "p", text: "Une table relationnelle représente un objet métier (ex : utilisateur, produit, commande). Elle est composée de : Colonnes (attributs) → propriétés des données, Lignes (enregistrements) → instances de l'objet. Chaque ligne correspond à un élément unique du monde réel." },
        { type: "h", text: "Structure d'une table" },
        { type: "table", headers: ["Élément", "Description", "Exemple"], rows: [
          ["Nom du champ", "Nom de la colonne", "id, nom, date_creation"],
          ["Type de données", "Type stocké", "INT, VARCHAR, DATE, BOOLEAN"],
          ["Taille", "Taille max (texte/mémoire)", "VARCHAR(255)"],
          ["NULL / NOT NULL", "Autorise ou non les valeurs vides", "NOT NULL"],
          ["Valeur par défaut", "Valeur automatique si vide", "DEFAULT 'inconnu'"],
        ]},
        { type: "h", text: "Contraintes importantes" },
        { type: "code", filename: "contraintes.sql", language: "sql", code: `-- Clé primaire : identifie uniquement chaque ligne, ne peut pas être NULL, doit être unique
PRIMARY KEY

-- Auto-incrément : génère automatiquement une valeur unique
AUTO_INCREMENT

-- Clé étrangère : crée un lien entre deux tables, assure l'intégrité référentielle
FOREIGN KEY (id_user) REFERENCES users(id)

-- CHECK : vérifie une condition sur les données
CHECK (age >= 18)

-- COLLATION : définit les règles de tri et comparaison du texte
COLLATE utf8_general_ci

-- COMMENT : ajoute une description à une colonne
COMMENT 'Identifiant unique'` },
      ],
    },

    // ── ORM ───────────────────────────────────────────────────────────────────
    {
      id: "orm-concepts",
      title: "ORM (Object-Relational Mapping)",
      blocks: [
        { type: "p", text: "Un ORM est un outil qui fait le lien entre les tables de la base de données et les classes du code." },
        { type: "h", text: "Sans ORM" },
        { type: "list", items: [
          "Le programme envoie des requêtes SQL manuellement",
          "Récupère les résultats et les transforme en objets",
          "Demande plus de code et de travail",
        ]},
        { type: "h", text: "Avec ORM" },
        { type: "list", items: [
          "Les requêtes SQL sont gérées automatiquement",
          "Les données sont converties directement en objets",
          "Les opérations CRUD sont déjà intégrées",
          "Le développeur travaille uniquement avec des objets",
        ]},
        { type: "h", text: "Relation BDD ↔ POO" },
        { type: "p", text: "Dans une base relationnelle, les liens entre données sont faits avec des clés primaires (PK) et clés étrangères (FK). Dans le code (POO), chaque table correspond à une classe :" },
        {
          type: "diagram",
          content: `Membre
Livre
Emprunt`,
        },
        { type: "p", text: "Les objets peuvent contenir des attributs simples ou des objets liés (ex : un emprunt contient un livre et un membre)." },
        { type: "h", text: "Avantages de l'ORM" },
        { type: "list", items: [
          "Simplifie les échanges avec la BDD",
          "Réduit le code SQL à écrire",
          "CRUD déjà généré automatiquement",
          "Améliore la productivité",
          "Limite certaines erreurs SQL",
          "Protège partiellement contre les injections SQL",
          "Facilite la maintenance du code",
          "Contient des méthodes créées automatiquement basées sur les classes Models",
        ]},
        { type: "h", text: "Inconvénients de l'ORM" },
        { type: "list", items: [
          "Peut ralentir les performances",
          "Ajoute une couche supplémentaire (complexité)",
          "Abstraction parfois difficile à comprendre (boîte noire)",
          "Mauvais mapping = pertes de performance",
          "Peut générer des requêtes SQL non optimisées",
        ]},
      ],
    },

    // ── COOKIES SERVEUR (EXPRESS) ─────────────────────────────────────────────
    {
      id: "cookies-express",
      title: "Mise en place côté serveur — Express + cookies",
      blocks: [
        { type: "h", text: "Installation du module cookies" },
        { type: "code", filename: "terminal", language: "bash", code: `npm install cookie-session` },
        { type: "p", text: "Ce module permet de : Créer des cookies, Stocker des données utilisateur côté navigateur, Conserver un état (ex : session, compteur, connexion)." },
        { type: "h", text: "Exemple — Compteur de visites" },
        { type: "code", filename: "server.js", language: "javascript", code: `const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['secretKey']
}));

app.get('/', (req, res) => {
  if (!req.session.count) {
    req.session.count = 0;
  }
  req.session.count++;
  res.send(\`Vous avez visité cette page \${req.session.count} fois\`);
});

app.listen(3000);` },
        { type: "h", text: "Lancement du serveur" },
        { type: "code", filename: "terminal", language: "bash", code: `node server.js` },
      ],
    },

    // ── PHPMYADMIN VIA XAMPP ─────────────────────────────────────────────────
    {
      id: "phpmyadmin-xampp",
      title: "Outils — PhpMyAdmin via XAMPP",
      blocks: [
        { type: "h", text: "Installation de XAMPP" },
        { type: "list", items: ["Télécharger et installer XAMPP", "Lancer le panneau de contrôle XAMPP"] },
        { type: "h", text: "Démarrer les services" },
        { type: "list", items: ["Apache Web Server", "MySQL Database", "Ouvrir avec \"Welcome\" → \"Go to application\" → \"PHPMyAdmin\""] },
        { type: "h", text: "Accéder à phpMyAdmin" },
        { type: "code", filename: "url", language: "text", code: `http://localhost/phpmyadmin` },
        { type: "h", text: "Créer une base de données" },
        { type: "list", items: [
          "Aller dans \"Bases de données\"",
          "Cliquer sur \"Créer une base de données\"",
          "Entrer le nom de la BDD",
          "Choisir le collation : utf8mb4_bin (ou utf8mb4_general_ci selon besoin)",
          "Cliquer sur Créer",
        ]},
        { type: "h", text: "Créer un utilisateur MySQL" },
        { type: "list", items: [
          "Aller dans \"Comptes utilisateurs\"",
          "Cliquer sur \"Ajouter un compte utilisateur\"",
          "Remplir : nom d'utilisateur / hôte : localhost / mot de passe",
          "Donner les privilèges globaux",
          "Cliquer sur Exécuter",
        ]},
        { type: "h", text: "Créer une table" },
        { type: "list", items: [
          "Sélectionner la BDD",
          "Aller dans \"Structure\"",
          "Entrer : nom de la table + nombre de colonnes",
          "Cliquer sur Exécuter",
          "Définir les champs : types de données, clé primaire (PRIMARY), auto-incrément (A.I)",
        ]},
        { type: "h", text: "Modifier une table" },
        { type: "list", items: ["Sélectionner la table", "Onglet \"Structure\"", "Modifier colonnes : type / nom / paramètres"] },
        { type: "h", text: "Ajouter des colonnes" },
        { type: "list", items: ["Aller dans Structure", "Cliquer sur Ajouter", "Choisir : nombre de colonnes + position (début / fin / après colonne)", "Enregistrer"] },
        { type: "h", text: "Supprimer une table" },
        { type: "list", items: ["Aller dans \"Opérations\"", "Cliquer sur \"Supprimer la table\""] },
        { type: "h", text: "Rechercher des données" },
        { type: "list", items: ["Sélectionner la BDD", "Choisir la table", "Onglet \"Rechercher\"", "Entrer la valeur à chercher"] },
        { type: "h", text: "Exporter une base de données" },
        { type: "list", items: [
          "Ouvrir phpMyAdmin",
          "Cliquer sur le nom de la BDD dans le panneau de gauche",
          "Aller dans l'onglet \"Exporter\"",
          "Cliquer sur \"Tout cocher\" si nécessaire",
          "Choisir le format : SQL (recommandé) ou ZIP",
          "Cliquer sur \"Exécuter\" / \"Go\"",
          "Télécharger le fichier .sql",
        ]},
        { type: "h", text: "Importer une base de données" },
        { type: "list", items: ["Sélectionner la BDD", "Onglet \"Importer\"", "Choisir le fichier .sql", "Cliquer sur Importer"] },
        { type: "h", text: "Import CSV (Excel → phpMyAdmin)" },
        { type: "p", text: "1. Préparer le fichier : Première ligne = noms des colonnes, Pas de formules, Données propres." },
        { type: "p", text: "2. Convertir en CSV : Excel → Enregistrer sous → Format : CSV (UTF-8)." },
        { type: "p", text: "3. Importer : Aller dans phpMyAdmin → choisir BDD ou table → onglet Importer, Sélectionner le fichier CSV, Configurer : format CSV / séparateur , ou ; / encodage UTF-8, Cliquer sur Exécuter." },
        { type: "h", text: "Gestion des utilisateurs (sécurité)" },
        { type: "list", items: [
          "Éviter l'utilisateur root en production",
          "Utiliser des mots de passe forts",
          "Créer des comptes limités (ex: SELECT uniquement)",
          "Supprimer les privilèges inutiles",
          "Surveiller les connexions (logs)",
        ]},
      ],
    },
    {
      id: "sql-contraintes",
      title: "Contraintes de champs (NOT NULL, DEFAULT, UNIQUE, intégrité)",
      blocks: [
        { type: "p", text: "Par défaut, tous les champs de tous les enregistrements d'une table doivent contenir une valeur. Il est possible de rendre un champ \"Nullable\" (autoriser une absence de valeur) via le mot-clé NULL. Sinon, on a une contrainte NOT NULL." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                TABLE ÉTUDIANT — STRUCTURE                │
├───┬──────────────────────────┬──────┬────────────────────┤
│ # │ Nom                      │ Null │ Extra              │
├───┼──────────────────────────┼──────┼────────────────────┤
│ 1 │ Num_et (PK)              │ Non  │ AUTO_INCREMENT      │
│ 2 │ Nom_et varchar(26)       │ Non  │                    │
│ 3 │ Prenom_et varchar(20)    │ Non  │                    │
│ 4 │ date_naissance_et date   │ Oui  │ NULL               │
│ 5 │ id_classe                │ Non  │                    │
└───┴──────────────────────────┴──────┴────────────────────┘

Les 4 premiers champs ont une contrainte NOT NULL
Le champ date_naissance_et autorise NULL`,
        },
        { type: "h", text: "Contrainte DEFAULT" },
        { type: "p", text: "On peut forcer la base de données à définir une valeur par défaut pour tout champ manquant dans une table. Exemple : dans une table Étudiant, on peut imposer le prénom \"Alphonse\" pour toute insertion où ce champ n'est pas spécifié." },
        { type: "code", filename: "default.sql", language: "sql", code: `-- Le champ Prenom_et a comme valeur par défaut "Alphonse"` },
        { type: "h", text: "Contrainte UNIQUE" },
        { type: "p", text: "On peut interdire à un champ d'avoir la même valeur pour deux enregistrements différents. C'est une contrainte de type UNIQUE — on crée un Index Unique sur le champ concerné." },
        { type: "code", filename: "unique.sql", language: "sql", code: `Index name  : Date_unique
Index type  : UNIQUE
Column      : date_naissance_et [date]

→ Prevents 2 Students from having the same date of birth` },
        { type: "h", text: "Contraintes d'intégrité" },
        { type: "p", text: "Si une table contient une référence vers une autre table, une contrainte d'intégrité va forcer l'information présente dans la première table à exister également dans la seconde." },
        {
          type: "diagram",
          content: `┌────────────────────────┐        ┌──────────────────────┐
│  ecolebis.etudiant     │        │  ecolebis.classe     │
├────────────────────────┤        ├──────────────────────┤
│ * num_et : int(11)     │        │ * num_classe : int(11│
│ @ nom_et : varchar(50) │        │ @ nom_classe : varcha│
│ @ prenom_et : varchar  │        └──────────────────────┘
│ @ date_naiss_et : date │              ▲
│ # num_classe : int(11) │──────────────┘
└────────────────────────┘
    Integrity constraint:
    Student.num_classe → Classe.num_classe
    Vérifie que la classe existe bien`,
        },
        { type: "list", items: [
          "Un SGBD permet de créer des obligations sur les valeurs autorisées de certains champs d'une table — ce sont des contraintes.",
          "Les contraintes d'intégrité sont utilisées pour vérifier la cohérence des données entre deux tables.",
        ]},
      ],
    },
    {
      id: "sql-optimisation-requetes",
      title: "Optimisation des requêtes SQL",
      blocks: [
        { type: "p", text: "Les SGBDR sont manipulés à l'aide de requêtes en langage SQL. L'exécution de ces requêtes peut prendre du temps si elles sont mal écrites et si le volume de données hébergées dans la base est important." },
        { type: "h", text: "Différentes façons de réduire le temps d'exécution d'une requête SQL" },
        { type: "list", items: [
          "Diminuer le nombre d'enregistrements retournés par la requête",
          "Créer un index basé sur les critères de recherche",
          "Filtrer les enregistrements retournés avant de les trier",
          "Chercher des valeurs précises plutôt qu'approximatives",
        ]},
        { type: "note", variant: "info", text: "Il est parfois nécessaire d'optimiser les requêtes SQL pour réduire leur temps d'exécution." },
      ],
    },
    {
      id: "sql-introduction-bases-de-donnees",
      title: "Introduction aux bases de données SQL",
      blocks: [
        { type: "p", text: "Une base de données est un ensemble d'informations stockées sur un support informatique. Les bases de données relationnelles stockent l'information de façon parfaitement structurée dans des tables qui regroupent des enregistrements dont les champs sont tous identiques." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│              EXEMPLE — TABLE ÉTUDIANT                    │
├──────────┬───────────┬───────────┬──────────────┬────────┤
│ num_et   │ nom_et    │ prenom_et │ date_naiss_et│ classe │
├──────────┼───────────┼───────────┼──────────────┼────────┤
│ 3        │ Hill      │ Benny     │ 1935-06-05   │ 23     │
│ 4        │ Durant    │ Karine    │ 1956-06-15   │ 23     │
│ 5        │ Hallyday  │ Helene    │ 1969-06-15   │ 23     │
│ 6        │ Ferrat    │ Alain     │ 1929-06-15   │ 37     │
│ 7        │ Brassens  │ Jean      │ 1989-06-15   │ 38     │
│ 8        │ Voulzy    │ Patrica   │ 1979-06-15   │ 23     │
└──────────┴───────────┴───────────┴──────────────┴────────┘
Each row = a record. All records have exactly the same fields.`,
        },
        { type: "h", text: "Utilité d'une base de données" },
        { type: "p", text: "Un SGBD (Système de Gestion de Base de Données) est un logiciel qui permet de manipuler une base de données. Il permet de créer, mettre à jour et supprimer tous les éléments de la structure de la base de données :" },
        { type: "list", items: [
          "Les tables qui contiennent les données",
          "Les vues qui contiennent un point de vue sur les données",
          "Les procédures stockées qui sont des requêtes SQL enregistrées",
          "Les triggers, qui déclenchent l'exécution de requêtes selon certains événements",
          "Les utilisateurs associés avec leurs privilèges",
        ]},
        { type: "p", text: "Les tables peuvent avoir des relations entre elles permettant à la base de données d'assurer la cohérence des données." },
        { type: "h", text: "Fonctionnement d'un SGBD" },
        { type: "p", text: "Les bases de données relationnelles sont entièrement gérées à l'aide d'un langage appelé SQL. Il existe différents SGBDR sur le marché : MS SQL Server, Oracle Database, MySQL. Chacun stocke les informations dans un format propriétaire et est capable de comprendre une requête SQL pour la manipuler." },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│              PRINCIPAUX RDBMS                           │
├──────────────────┬──────────────────────────────────────┤
│ MS SQL Server    │ Propriétaire Microsoft               │
│ Oracle Database  │ Propriétaire Oracle                  │
│ MySQL            │ Open source (Oracle) — le + populaire│
│ PostgreSQL       │ Open source                          │
│ MariaDB          │ Open source (clone MySQL)            │
│ CockroachDB      │ Open source distribué                │
└──────────────────┴──────────────────────────────────────┘`,
        },
        { type: "note", variant: "info", text: "Un SGBD est un logiciel capable d'exécuter des requêtes SQL sur des bases de données." },
      ],
    },
    {
      id: "sql-manipulation-donnees",
      title: "Manipulation des données (INSERT, UPDATE, DELETE)",
      blocks: [
        { type: "h", text: "Insérer des enregistrements" },
        { type: "p", text: "Le langage SQL permet de remplir des tables avec la commande INSERT." },
        { type: "list", items: [
          "On ne peut pas ajouter un \"demi-enregistrement\" — on l'ajoute en entier ou pas du tout",
          "Les enregistrements ajoutés doivent avoir des champs conformes à la structure de la table",
          "Il est possible d'avoir un champ (souvent la clé primaire) auto-incrémenté — le SGBD ajoute une valeur prédéfinie automatiquement",
          "Les enregistrements sont ajoutés à la fin de la table",
        ]},
        { type: "code", filename: "insert-syntax1.sql", language: "sql", code: `INSERT INTO table (column_name_1, column_name_2, ...) VALUES ('value 1', 'value 2', ...)` },
        { type: "code", filename: "insert-exemple1.sql", language: "sql", code: `INSERT INTO student (\`num_et\`, \`nom_et\`, \`firstname_and\`, \`date_naiss_et\`, \`num_classe\`)
VALUES (NULL, 'Dupont', 'Alain', '1987-05-15', 23)` },
        { type: "code", filename: "insert-syntax2.sql", language: "sql", code: `INSERT INTO table VALUES('value 1', 'value 2', ...)` },
        { type: "code", filename: "insert-exemple2.sql", language: "sql", code: `INSERT INTO student VALUES (NULL, 'Durand', 'Alain', '1987-05-12', 23)` },
        { type: "h", text: "Modifier des enregistrements" },
        { type: "code", filename: "update.sql", language: "sql", code: `UPDATE table SET column_1 = 'val 1', column_2 = 'val 2' … WHERE condition` },
        { type: "list", items: [
          "Ne spécifier que les colonnes dont on veut changer la valeur — les autres restent inchangées",
          "Les nouvelles valeurs doivent être compatibles avec le type du champ",
          "La condition est essentielle — elle précise la liste des enregistrements à modifier",
        ]},
        { type: "note", variant: "warning", text: "⚠️ Attention : si la condition WHERE est omise, toute la table est mise à jour !" },
        { type: "code", filename: "update-exemple.sql", language: "sql", code: `UPDATE \`etudiant\` SET \`Nom_et\`='Dupont', \`Prenom_et\`='Arthur' WHERE num_et = 7` },
        { type: "h", text: "Supprimer des enregistrements" },
        { type: "code", filename: "delete.sql", language: "sql", code: `DELETE FROM \`table\` WHERE condition` },
        { type: "note", variant: "info", text: "La suppression d'un ou plusieurs enregistrements se fait par la commande DELETE." },
      ],
    },
    {
      id: "sql-sgbd-open-source",
      title: "Comparatif des SGBD Open Source",
      blocks: [
        { type: "p", text: "Le classement est fait à partir : du nombre de mentions sur les sites web, de l'intérêt général pour le logiciel, de la fréquence des discussions techniques, et du nombre d'offres d'emploi. En dehors de MySQL (de loin la solution SGBD open source la plus populaire au monde), il existe d'autres solutions de qualité." },
        { type: "h", text: "PostgreSQL" },
        { type: "table", headers: ["Caractéristique", "Description"], rows: [
          ["Types de données", "Built-in Array, Range, UUID, Geolocation…"],
          ["Stockage document", "Native JSON (style), XML, key-value (Hstore)"],
          ["Réplication", "Synchronous and asynchronous"],
          ["Scripting", "PL, Perl, Python and more"],
          ["Recherche", "Full text search"],
        ]},
        { type: "h", text: "MariaDB" },
        { type: "p", text: "MariaDB a été créé par le créateur de MySQL après qu'il l'ait vendu à Oracle en 2010. MariaDB est largement un clone de MySQL, mais possède quelques fonctionnalités supplémentaires :" },
        { type: "list", items: [
          "Plusieurs autres options de moteur de stockage pour des besoins spécialisés",
          "Colonnes dynamiques pour différentes lignes d'une table",
          "Meilleures capacités de réplication",
          "Beaucoup plus rapide que MySQL",
        ]},
        { type: "h", text: "CockroachDB" },
        { type: "p", text: "CockroachDB est un SGBDR open source distribué sur plusieurs serveurs." },
        { type: "list", items: [
          "Basé sur un dictionnaire clé-valeur transactionnel et cohérent",
          "S'adapte horizontalement ; résiste aux pannes de disque, machine, rack et même de datacenter avec peu de perturbation de latence",
          "Supporte des transactions ACID fortement cohérentes",
          "Fournit une API SQL familière pour structurer, manipuler et interroger les données",
        ]},
        { type: "h", text: "Neo4j" },
        { type: "p", text: "Neo4j est un SGBD qui permet de travailler avec des graphes." },
        { type: "list", items: [
          "Support des applications transactionnelles et de l'analyse graphique",
          "Capacités de transformation de données pour digérer des données tabulaires à grande échelle en graphes",
          "Langage de requête spécialisé : Cypher",
          "Fonctions de visualisation et de découverte",
        ]},
        { type: "note", variant: "info", text: "Le marché des SGBD comprend plusieurs SGBD propriétaires (Oracle, IBM, Microsoft), mais de nombreuses solutions open source sont disponibles et présentent de nombreux avantages." },
      ],
    },
    {
      id: "sql-composant-serveur-sgbd",
      title: "Le rôle du composant serveur d'un SGBD",
      blocks: [
        { type: "p", text: "Les données d'une base de données se trouvent sur des fichiers hébergés sur un support de stockage. Y accéder directement poserait deux problèmes : l'obligation d'être sur la même machine que la base de données, et l'impossibilité de gérer les accès concurrents. C'est pourquoi le modèle client/serveur a été inventé." },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────────┐
│                MODÈLE CLIENT / SERVEUR SGBD               │
│                                                           │
│  [Client 1]  [Client 2]  [Client 3]                       │
│      │            │           │                           │
│      └────────────┴───────────┘                           │
│                   │  Réseau                               │
│                   ▼                                       │
│  ┌─────────────────────────────────┐                      │
│  │  COMPOSANT SERVEUR DU SGBD      │                      │
│  │  (processus sur la machine)     │                      │
│  └──────────────┬──────────────────┘                      │
│                 │                                         │
│                 ▼                                         │
│  ┌─────────────────────────────────┐                      │
│  │  FICHIERS DE LA BASE DE DONNÉES │                      │
│  └─────────────────────────────────┘                      │
└───────────────────────────────────────────────────────────┘

Pour une application web :
[Browser] → [Serveur Web] → [Composant Serveur SGBD] → [BDD]`,
        },
        { type: "h", text: "Tâches du composant serveur SGBD" },
        { type: "list", items: [
          "Manipuler les données des fichiers",
          "Permettre un accès optimisé aux données",
          "Gérer la cohérence des données",
          "Gérer la journalisation (toutes les opérations réalisées)",
          "Gérer la confidentialité d'accès",
          "Gérer les accès concurrents par un système de verrous",
          "Enregistrer des procédures stockées",
          "Gérer la sécurité (pannes)",
          "Gérer un système de déclencheurs (triggers)",
        ]},
        { type: "h", text: "Les protocoles réseau" },
        { type: "table", headers: ["Protocole", "Description"], rows: [
          ["Mémoire partagée (Shared Memory)", "Simple, clients sur la même machine, rarement utilisé"],
          ["TCP/IP", "Plus populaire, nécessite une configuration serveur/client"],
          ["Canaux nommés (Named Pipes)", "Canaux FIFO (premier entré, premier sorti)"],
        ]},
        { type: "p", text: "Connexion TCP/IP : le composant serveur doit définir le port d'écoute et son adresse IP. Un login et un mot de passe sont fortement conseillés. Options supplémentaires : chiffrer la communication, définir la taille du paquet réseau, définir le délai de connexion au-delà duquel la tentative sera rejetée." },
      ],
    },
    {
      id: "sql-decouvrez-base-donnees",
      title: "Découvrez la base de données",
      blocks: [
        { type: "p", text: "Une base de données est un système qui enregistre des informations de manière structurée et organisée. Elle permet de gagner du temps lors de la création, mise à jour, suppression ou récupération des données." },
        { type: "note", variant: "info", text: "Un fichier texte, une feuille de calcul ou un fichier audio/vidéo sont des bases de données." },
        { type: "p", text: "Exemple simple : CV/Portfolio en ligne → stocker informations de connexion, projets, expériences professionnelles, diplômes…" },
        { type: "h", text: "Les deux types de base de données" },
        { type: "p", text: "Base de données relationnelle : très structurée. Stocke les données sous forme de tableaux (tables) avec des lignes et des colonnes." },
        {
          type: "diagram",
          content: `TABLE : Utilisateurs
┌─────┬─────────┬──────────┬───────────────────────┐
│ id  │ nom     │ prenom   │ email                 │
├─────┼─────────┼──────────┼───────────────────────┤
│  1  │ Dupont  │ Alain    │ alain@example.com     │
│  2  │ Martin  │ Sophie   │ sophie@example.com    │
│  3  │ Bernard │ Paul     │ paul@example.com      │
└─────┴─────────┴──────────┴───────────────────────┘`,
        },
        { type: "p", text: "Base de données non relationnelle (NoSQL) : données stockées sous un format clé-valeur. Plus adapté au stockage de données très volumineuses." },
        { type: "code", filename: "exemple.json", language: "json", code: `{
  "id": "1",
  "nom": "Dupont",
  "prenom": "Alain",
  "email": "alain@example.com"
}` },
        { type: "h", text: "La gestion des données" },
        { type: "p", text: "Le SGBD (Système de Gestion de Base de Données) est un logiciel qui permet de créer et gérer une ou plusieurs bases de données. Relationnel : MySQL, PostgreSQL. Non relationnel : Oracle NoSQL, MongoDB." },
        { type: "h", text: "Concepts clés" },
        { type: "list", items: [
          "Le modèle (schéma de données) — décrit visuellement l'organisation des données, les types et les relations",
          "L'entité (table) — représente un type de donnée (utilisateurs, articles, événements). Chaque table comporte des enregistrements (lignes)",
          "Les attributs (champs/colonnes) — caractéristiques de l'entité (prénom, nom, mot de passe…)",
          "La clé primaire — attribut dont la valeur unique change à chaque nouvelle ligne. Généralement un id auto-incrémenté",
          "L'association — possibilité de relier un enregistrement d'une table avec un enregistrement d'une autre table",
          "La clé étrangère (foreign key) — attribut présent dans une table qui contient une référence vers l'enregistrement d'une autre table",
        ]},
        { type: "h", text: "Notion de cardinalité" },
        { type: "p", text: "La cardinalité représente le nombre d'enregistrements A qu'il existe pour un enregistrement B." },
        {
          type: "diagram",
          content: `┌───────────────────────────────────────────────────────────┐
│                    CARDINALITÉS                           │
├──────────────────┬────────────────────────────────────────┤
│  UN à UN (1:1)   │  Un utilisateur ↔ Une adresse          │
├──────────────────┼────────────────────────────────────────┤
│  UN à PLUSIEURS  │  Un utilisateur → Plusieurs articles   │
│  (1:N)           │  Un article ← Un auteur                │
├──────────────────┼────────────────────────────────────────┤
│  PLUSIEURS à     │  Un article ↔ Plusieurs catégories     │
│  PLUSIEURS (N:N) │  Une catégorie ↔ Plusieurs articles    │
└──────────────────┴────────────────────────────────────────┘`,
        },
        { type: "h", text: "Le stockage des données" },
        { type: "table", headers: ["Type de stockage", "Description"], rows: [
          ["Logiciel", "Logiciel sépare données du matériel. Pour micro-services et données non structurées"],
          ["Cloud", "Données accessibles depuis internet. Principaux : Microsoft, Google, IBM"],
          ["Mode objet", "Fichiers décomposés en éléments répartis (objets distincts)"],
          ["Mode fichier", "Fichiers organisés avec identifiant unique (nom, URL…)"],
          ["Mode bloc", "Volume divisé en blocs indépendants. Rapide, adapté aux bases multimédias"],
        ]},
        { type: "h", text: "Stockage relationnel et propriétés ACID" },
        { type: "table", headers: ["Propriété", "Description"], rows: [
          ["Atomicité", "Tout changement doit être effectué de bout en bout. En cas d'interruption, annulation complète"],
          ["Cohérence", "Une transaction n'enfreint pas les contraintes d'intégrité définies"],
          ["Isolation", "Écriture/lecture n'impacte pas les autres transactions en cours"],
          ["Durabilité", "Tout changement apporté à la BDD est permanent"],
        ]},
      ],
    },
    {
      id: "sql-mcd-mld-mpd",
      title: "Le Modèle Conceptuel de Données (MCD) et méthode Merise",
      blocks: [
        { type: "p", text: "Le MCD est un langage de haut niveau, utilisant un formalisme graphique pour représenter les différents éléments d'un problème à formaliser." },
        { type: "h", text: "Il est composé de" },
        { type: "list", items: [
          "Entités — éléments de base du problème à modéliser, avec des propriétés dont un identifiant unique",
          "Relations — liens entre les entités, pouvant porter des propriétés",
          "Cardinalités — nombre d'entités mises en jeu dans une relation",
        ]},
        { type: "p", text: "Méthode Merise : convertit le MCD en MLD, puis en MPD." },
        {
          type: "diagram",
          content: `┌──────────────────────────────────────────────────────────┐
│                 MÉTHODE MERISE                           │
│                                                          │
│  MCD (Modèle Conceptuel de Données)                      │
│  → Indépendant de toute informatisation                  │
│           │                                              │
│           ▼ Merise                                       │
│  MLD (Modèle Logique de Données)                         │
│  → Tables et champs, sans cibler de SGBD particulier     │
│           │                                              │
│           ▼ Merise                                       │
│  MPD (Modèle Physique de Données)                        │
│  → Associé à un SGBD précis                              │
└──────────────────────────────────────────────────────────┘`,
        },
        { type: "note", variant: "info", title: "Logiciels", text: "JMerise, PowerAMC" },
      ],
    },
    {
      id: "sql-langage-sql-4-sous-langages",
      title: "Le langage SQL — les 4 sous-langages",
      blocks: [
        { type: "p", text: "Le langage SQL (Structured Query Language) est un langage informatique descriptif permettant de manipuler entièrement une base de données relationnelle." },
        { type: "table", headers: ["Sous-langage", "Sigle", "Commandes", "Rôle"], rows: [
          ["Langage de Définition des Données", "LDD / DDL", "CREATE, ALTER, DROP, TRUNCATE", "Créer/modifier le schéma"],
          ["Langage de Manipulation des Données", "LMD / DML", "INSERT, UPDATE, DELETE", "Manipuler les données"],
          ["Langage de Contrôle des Données", "LCD / DQL", "SELECT", "Interroger les données"],
          ["Langage de Contrôle des Transactions", "LCT / TCL", "COMMIT, ROLLBACK", "Gérer les transactions"],
        ]},
        { type: "h", text: "Commandes de base SQL" },
        { type: "p", text: "SELECT — récupérer des données :" },
        { type: "code", filename: "select.sql", language: "sql", code: `SELECT nom, prenom FROM etudiant WHERE num_classe = 23;` },
        { type: "p", text: "INSERT INTO — insérer un enregistrement :" },
        { type: "code", filename: "insert.sql", language: "sql", code: `-- Avec liste de colonnes
INSERT INTO etudiant (nom_et, prenom_et, date_naiss_et, num_classe)
VALUES ('Dupont', 'Alain', '1987-05-15', 23);

-- Sans liste (respecter l'ordre des colonnes)
INSERT INTO etudiant VALUES (NULL, 'Durand', 'Alain', '1987-05-12', 23);` },
        { type: "p", text: "Insérer plusieurs enregistrements :" },
        { type: "code", filename: "insert-multiple.sql", language: "sql", code: `INSERT INTO etudiant VALUES
(NULL, 'boumaiville', 'Edguar', '1937-08-12', 23),
(NULL, 'de la roche', 'eric', '1980-02-12', 23),
(NULL, 'Noah', 'Yanick', '1961-01-12', 23);` },
        { type: "p", text: "UPDATE — modifier un enregistrement :" },
        { type: "code", filename: "update.sql", language: "sql", code: `UPDATE etudiant
SET prenom_et = 'Jean', date_naiss_et = '1990-01-01'
WHERE num_et = 4;` },
        { type: "note", variant: "warning", text: "Si on omet la condition, toute la table est mise à jour." },
        { type: "p", text: "DELETE — supprimer un enregistrement :" },
        { type: "code", filename: "delete.sql", language: "sql", code: `DELETE FROM etudiant WHERE num_et = 4;` },
        { type: "note", variant: "warning", text: "Sans condition, la table entière est vidée." },
        { type: "p", text: "TRUNCATE : supprime tous les enregistrements ET réinitialise la clé primaire auto-incrémentée (contrairement à DELETE)." },
        { type: "note", variant: "info", title: "Documentation SQL", text: "https://sql.sh/cours" },
        { type: "h", text: "Créer une base de données" },
        { type: "code", filename: "create-database.sql", language: "sql", code: `CREATE DATABASE ma_base;` },
        { type: "p", text: "Options supplémentaires selon le SGBD : nom du propriétaire, nom des fichiers et leurs tailles, interclassement (collation) pour la comparaison de chaînes." },
        { type: "p", text: "Chaque SGBD a créé son propre SQL étendu : Microsoft → Transact SQL (SQL Server), Oracle → PL SQL. SQL est normalisé depuis 1986 et purement descriptif (pas de boucle, pas de branchement conditionnel)." },
        { type: "p", text: "Logiciels clients : SSMS (SQL Server Management Studio) pour SQL Server, phpMyAdmin pour MySQL (web)." },
      ],
    },
    {
      id: "sql-sgbd-formats-comparaison",
      title: "SGBD — Formats et comparaison",
      blocks: [
        { type: "p", text: "Un SGBD (Système de Gestion de Base de Données) est un logiciel permettant de manipuler les données stockées. Il réalise les opérations CRUD (Create, Read, Update, Delete)." },
        { type: "h", text: "Un SGBD doit aussi" },
        { type: "list", items: [
          "Gérer les accès concurrents",
          "Garantir l'intégrité logique",
          "Gérer les sauvegardes et restaurations",
          "Être responsable de la sécurité et confidentialité",
          "Comprendre un langage déclaratif (SQL)",
          "Permettre la création et l'utilisation de vues logiques",
        ]},
        { type: "h", text: "Formats de SGBD" },
        { type: "table", headers: ["Format", "Description"], rows: [
          ["Relationnel", "Données en tables avec lignes/colonnes. Langage SQL. Le plus répandu"],
          ["Hiérarchique", "Données en structure arborescente"],
          ["Orienté objet", "Données en objets persistants, compatible C++, Java, C#"],
          ["XML", "Données en fichiers XML, langage XPath/XQuery"],
        ]},
        { type: "h", text: "Comparaison entre SGBD relationnels" },
        { type: "table", headers: ["SGBD", "Points forts", "Points faibles"], rows: [
          ["MySQL", "Simple, logiciel client web, installation rapide", "Partiellement open source (Oracle), peu scalable"],
          ["MariaDB", "Fork MySQL, meilleures performances, cryptographie avancée", "—"],
          ["Oracle", "N°1 mondial, cloud, performances remarquables", "Coût élevé, forte consommation CPU/RAM, complexe"],
          ["PostgreSQL", "Types personnalisés, totalement open source, outils riches", "Documentation limitée"],
          ["SQL Server", "Large gamme, outils ETL, cloud, communauté importante", "Coût élevé en entreprise"],
        ]},
        { type: "h", text: "Le SGBDR" },
        { type: "p", text: "Le SGBDR (Système de Gestion de Base de Données Relationnel) propose trois fonctions principales : définition des données sous forme de relations, manipulation des données par un langage déclaratif, administration des données." },
      ],
    },
    ...laConsoleSql,
    ...laConsoleArticlesSql,
  ],
};
