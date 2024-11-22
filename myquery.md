 ## This is my full script for the ecommerce database
 
 -- Create the new database 'ecommerce_db'
    CREATE DATABASE IF NOT EXISTS ecommerce_db;
    USE ecommerce_db;

    -- Create Customers Table
    CREATE TABLE IF NOT EXISTS customers (
        customer_id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (customer_id),
        CONSTRAINT uc_email UNIQUE (email)
    ) ENGINE=InnoDB;

    -- Create Products Table
    CREATE TABLE IF NOT EXISTS products (
        product_id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(100) NOT NULL,
        product_description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock_quantity INT NOT NULL DEFAULT 0,
        PRIMARY KEY (product_id),
        CONSTRAINT chk_price CHECK (price >= 0),
        CONSTRAINT chk_stock CHECK (stock_quantity >= 0)
    ) ENGINE=InnoDB;

    -- Create Orders Table
    CREATE TABLE IF NOT EXISTS orders (
        order_id INT NOT NULL AUTO_INCREMENT,
        customer_id INT,
        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        total_amount DECIMAL(10, 2),
        order_status VARCHAR(20) DEFAULT 'Pending',
        PRIMARY KEY (order_id),
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
    ) ENGINE=InnoDB;

    -- Create Order Items Table
    CREATE TABLE IF NOT EXISTS order_items (
        order_item_id INT NOT NULL AUTO_INCREMENT,
        order_id INT,
        product_id INT,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        PRIMARY KEY (order_item_id),
        FOREIGN KEY (order_id) REFERENCES orders(order_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
    ) ENGINE=InnoDB;

    -- Insert Sample Data into Customers Table
    INSERT INTO customers (first_name, last_name, email, phone)
    VALUES 
        ('John', 'Doe', 'john.doe@example.com', '1234567890'),
        ('Jane', 'Smith', 'jane.smith@example.com', '0987654321'),
        ('Alice', 'Johnson', 'alice.johnson@example.com', '1122334455');

    -- Insert Sample Data into Products Table
    INSERT INTO products (product_name, product_description, price, stock_quantity)
    VALUES 
        ('Laptop', '15-inch laptop', 999.99, 10),
        ('Phone', 'Smartphone with 6GB RAM', 599.99, 50),
        ('Headphones', 'Noise-cancelling headphones', 199.99, 30);

    -- Insert Sample Data into Orders Table
    INSERT INTO orders (customer_id, total_amount, order_status)
    VALUES 
        (1, 1599.98, 'Shipped'),
        (2, 1199.99, 'Pending'),
        (3, 399.99, 'Delivered');

    -- Insert Sample Data into Order Items Table
    INSERT INTO order_items (order_id, product_id, quantity, price)
    VALUES 
        (1, 1, 1, 999.99),
        (1, 2, 1, 599.99),
        (2, 3, 2, 199.99),
        (3, 1, 1, 999.99),
        (3, 2, 1, 599.99);

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