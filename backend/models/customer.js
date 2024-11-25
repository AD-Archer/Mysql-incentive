const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  registration_date: {
    type: DataTypes.DATE,  // Correct the datatype here
    defaultValue: DataTypes.NOW,  // Set default to the current date/time
    allowNull: false,
  },
});

module.exports = Customer;
