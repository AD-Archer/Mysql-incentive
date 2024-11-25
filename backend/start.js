require('dotenv').config();  // Load environment variables from .env file

const { Sequelize } = require('sequelize');

// Get database credentials from the .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,    // Database name
  process.env.DB_USER,    // Username (e.g. 'root')
  process.env.DB_PASSWORD, // Password (e.g. 'your_password')
  {
    host: process.env.DB_HOST,  // Database host (e.g. 'localhost')
    dialect: 'mysql',          // Database dialect
    logging: false,            // Optionally set to true for debugging
  }
);

const createDatabase = async () => {
  try {
    // Attempt to authenticate the connection
    await sequelize.authenticate();
    console.log('Connection established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

createDatabase();