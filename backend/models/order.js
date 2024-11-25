const { DataTypes } = require('sequelize');
const sequelize = require('../db');  // Assuming sequelize is correctly initialized

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'customers',  // Assuming a 'customers' table exists
      key: 'customer_id',
    },
  },
  order_date: {
    type: DataTypes.DATE,  // This will correspond to a TIMESTAMP in MySQL
    allowNull: false,
    defaultValue: DataTypes.NOW,  // Automatically sets the current timestamp by default
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  order_status: {
    type: DataTypes.STRING(20),
    defaultValue: 'Pending',
  },
}, {
  tableName: 'orders',  // Explicitly define table name
});

module.exports = Order;
