
# E-commerce Database Project

This project sets up an e-commerce database to manage customers, products, orders, and order items. It is designed for scalability, performance, and ease of use with Sequelize ORM and `.env` configuration for environment-specific settings.

## Features

- **Database Setup**: Creates tables for customers, products, orders, and order items with robust constraints and relationships.
- **Sample Data**: Includes seed data for quick testing and development.
- **Analytics Queries**: Provides useful SQL queries to analyze revenue, orders, and customer activity.
- **Sequelize Integration**: Models and migrations built using Sequelize.
- **Environment Management**: `.env` file used for secure and flexible configuration.

## Prerequisites

Ensure you have the following installed:

- **Node.js** and **npm**
- **MySQL** (or any other SQL database supported by Sequelize)
- **Sequelize CLI**

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository_url>
   cd ecommerce-database
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up `.env` file**:

   Create a `.env` file in the root directory with the following variables:

   ```dotenv
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=ecommerce_db
   DB_PORT=3306
   ```

4. **Run Migrations and Seeders**:

   Use Sequelize CLI to set up the database schema and insert sample data:

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```


## Database Schema

### Tables

1. **Customers**:
   - Stores customer details.
   - Ensures unique email addresses.
   - Includes a registration timestamp.

2. **Products**:
   - Contains product information including name, description, price, and stock quantity.
   - Enforces non-negative price and stock values.

3. **Orders**:
   - Tracks customer orders with timestamps, total amount, and status.
   - References customers via foreign key constraints.

4. **Order Items**:
   - Details individual items in each order.
   - Links products and orders through foreign keys.

### Relationships

- `Customers` ↔ `Orders`: One-to-Many
- `Orders` ↔ `Order Items`: One-to-Many
- `Products` ↔ `Order Items`: One-to-Many

## SQL Script

The full SQL script is located in `app.mjs`. This file includes commands for:

- Creating the database and tables.
- Inserting sample data.
- Analytical queries for insights like total revenue, average order value, and recent orders.

### Key SQL Features

- Foreign key constraints with cascading updates/deletes.
- Aggregate functions for revenue and order analysis.
- Ensures data integrity with constraints (e.g., unique email, non-negative prices).

## Additional Notes

- **Editing SQL**: The SQL commands are maintained in `.mjs` files for modularity and ES6 support.
- **Sequelize Models**: Ensure your Sequelize models align with the SQL schema. See the `models/` directory for reference.


## License

This project is licensed under the MIT License. See the LICENSE file for details.
