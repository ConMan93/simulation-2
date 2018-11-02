UPDATE products
SET name = ${name}, price = ${price}, img = ${img}
WHERE id = ${id};
SELECT * FROM products ORDER BY id DESC