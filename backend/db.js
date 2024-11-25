// backend/db.js
const { Sequelize } = require('sequelize');

// Set up your Sequelize connection
const sequelize = new Sequelize('mysql://user:password@localhost:3306/ecommerce_db'); 

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
