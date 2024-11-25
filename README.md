# Test Data Insertion with Sequelize

This project demonstrates how to set up a Sequelize model and insert test data into a MySQL database. It connects to a MySQL database, creates a table (if it doesn't already exist), and inserts a record with test data.

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
    ```

5. Ensure that your MySQL server is running and accessible.

## Usage

1. After setting up the environment, run the script to insert test data into your MySQL database:
    ```bash
    node testData.js
    ```

2. If the connection is successful and the table doesn’t already exist, it will be created. Then, a test record with the name "John Doe" and age 30 will be inserted into the `Test` table.

3. Check the console for messages confirming the success or failure of the database connection and data insertion.

4. Then run npm start to start the application

## Dependencies

- `sequelize`: ORM for Node.js to interact with SQL databases.
- `mysql2`: MySQL client for Node.js.
- `dotenv`: Module to load environment variables from a `.env` file.

## Contributing

Feel free to fork this repository, submit issues, and create pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
