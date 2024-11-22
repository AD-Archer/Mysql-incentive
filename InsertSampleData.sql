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