SELECT DISTINCT first_name from customers WHERE first_name LIKE 'Alex%';

SELECT order_id, count(*) as cnt from orders_history GROUP BY order_id HAVING count(*) > 2;

SELECT * from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;

SELECT * from customers CROSS JOIN orders;

SELECT c.first_name, c.last_name, o.order_id, p.name, p.description, p.availability, link.count, link.price, (link.count * link.price) as sum FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id
INNER JOIN orders_products AS link ON o.order_id = link.order_id
INNER JOIN products AS p ON link.product_id = p.product_id;
