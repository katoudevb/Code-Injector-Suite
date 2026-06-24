import type { Section } from "../types";

export const sql: Section = {
  id: "sql",
  title: "Bases de données — SQL",
  icon: "Database",
  tags: [],
  subsections: [
    {
      id: "creation",
      title: "Créer des tables",
      blocks: [
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
      ],
    },
    {
      id: "crud",
      title: "INSERT, SELECT, UPDATE, DELETE",
      blocks: [
        { type: "code", filename: "crud.sql", language: "sql", code: `INSERT INTO products (nom, prix, stock) VALUES
  ('Sac à dos', 49.90, 12),
  ('Montre', 120.00, 5);

SELECT nom, prix FROM products
WHERE prix BETWEEN 20 AND 100 AND nom LIKE '%sac%'
ORDER BY prix DESC LIMIT 10;

UPDATE products SET prix = 39.90 WHERE id = 1; -- TOUJOURS un WHERE
DELETE FROM products WHERE stock = 0;` },
        { type: "note", variant: "warning", text: "Un UPDATE ou DELETE sans WHERE modifie TOUTES les lignes. Vérifiez toujours votre clause WHERE." },
      ],
    },
    {
      id: "joins",
      title: "JOINs",
      blocks: [
        { type: "code", filename: "joins.sql", language: "sql", code: `-- INNER JOIN : seulement les correspondances
SELECT orders.id, users.nom, orders.total
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- LEFT JOIN : toutes les lignes de gauche
SELECT users.nom, orders.id
FROM users LEFT JOIN orders ON users.id = orders.user_id;

-- Détail d'une commande (3 tables)
SELECT u.nom, p.nom AS produit, oi.quantite
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN users u ON o.user_id = u.id
JOIN products p ON oi.product_id = p.id;` },
      ],
    },
    {
      id: "agregation",
      title: "GROUP BY et agrégation",
      blocks: [
        { type: "code", filename: "stats.sql", language: "sql", code: `SELECT user_id, COUNT(*) AS nb, SUM(total) AS ca
FROM orders
GROUP BY user_id
HAVING SUM(total) > 500   -- filtre APRÈS le regroupement
ORDER BY ca DESC;

SELECT AVG(prix) AS moyenne, MAX(prix), MIN(prix) FROM products;` },
      ],
    },
    {
      id: "index-trans",
      title: "Index, transactions, clés étrangères",
      blocks: [
        { type: "code", filename: "avance.sql", language: "sql", code: `CREATE INDEX idx_email ON users(email); -- accélère les recherches

ALTER TABLE orders
ADD CONSTRAINT fk_user FOREIGN KEY (user_id)
REFERENCES users(id) ON DELETE CASCADE;

BEGIN;
UPDATE products SET stock = stock - 1 WHERE id = 1;
INSERT INTO orders (user_id, total) VALUES (1, 49.90);
COMMIT; -- ou ROLLBACK en cas d'erreur` },
      ],
    },
  ],
};
