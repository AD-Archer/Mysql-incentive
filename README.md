# Test Data Insertion with Sequelize

This project demonstrates how to set up a Sequelize model and insert test data into a MySQL database. It connects to a MySQL database, creates tables (if they don't already exist), and inserts records with test data.

## Prerequisites

Before running the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- A `.env` file to store your database connection details

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/AD-Archer/Mysql-incentive
    ```

2. Navigate to the project directory:
    ```bash
    cd Mysql-incentive
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and add your database connection details:
    ```ini
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=your_db_username
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_DIALECT=mysql
    ```

5. Ensure that your MySQL server is running and accessible.

## Usage

### Step 1: Start the Application

To establish a connection to the database and create the necessary tables, run the following command:

bash
node backend/start.js


This script will attempt to connect to the database using the credentials provided in the `.env` file. If the connection is successful, it will log a message indicating that the connection has been established.

### Step 2: Insert Sample Data

After successfully running `start.js`, you can insert sample data into the database by executing the following command:

bash
node backend/insertData.js

This script will create sample records in the `Customers` and `Products` tables. It uses the `findOrCreate` method to avoid inserting duplicate entries.

### Important Changes

- The `insertData.js` script has been updated to correctly match the database schema, using `first_name` and `last_name` for the `Customer` model.
- Ensure that your database schema matches the model definitions in the codebase.

## Queries

You can run the following SQL queries to interact with your database:

- Query to get all orders with customer information.
- Query to get order line items with product details.
- Calculate total revenue per customer.
- Calculate total revenue for the store.
- Calculate the average order value for the store.
- Count the number of orders per customer.
- Query to count the number of orders in the past 30 days.

## License

This project is licensed under the MIT License.