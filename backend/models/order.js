const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');

const Order = sequelize.define('Order', {
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id'
    }
  },
}, {
  timestamps: false
});

module.exports = Order;