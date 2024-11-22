-- Query to get all orders with customer information
SELECT o.order_id, o.order_date, o.total_amount, o.order_status, 
       c.first_name, c.last_name, c.email
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id;

-- Query to get order line items with product details
SELECT oi.order_item_id, oi.quantity, oi.price, 
       p.product_name, p.product_description
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN orders o ON oi.order_id = o.order_id;

-- Calculate total revenue per customer
SELECT c.first_name, c.last_name, SUM(o.total_amount) AS total_revenue
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;

-- Calculate total revenue for the store
SELECT SUM(total_amount) AS total_revenue
FROM orders;

-- Calculate the average order value for the store
SELECT AVG(total_amount) AS average_order_value
FROM orders;

-- Count the number of orders per customer
SELECT c.first_name, c.last_name, COUNT(o.order_id) AS number_of_orders
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;

-- Query to count the number of orders in the past 30 days
SELECT COUNT(order_id) AS orders_last_30_days
FROM orders
WHERE order_date >= CURDATE() - INTERVAL 30 DAY; 