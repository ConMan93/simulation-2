DELETE FROM products
WHERE id = $1;
SELECT * FROM products ORDER BY id DESC;