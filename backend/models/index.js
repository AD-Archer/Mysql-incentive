
const sequelize = require('../db');
const Customer = require("./customer");
const Product = require("./product");
const Order = require("./order");
const OrderItem = require("./orderItem");

// Define associations
Order.belongsTo(Customer, { foreignKey: "customer_id" });
Customer.hasMany(Order, { foreignKey: "customer_id" });

OrderItem.belongsTo(Order, { foreignKey: "order_id" });
Order.hasMany(OrderItem, { foreignKey: "order_id" });

OrderItem.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(OrderItem, { foreignKey: "product_id" });

// Export all models and sequelize instance
module.exports = {
  sequelize,
  Customer,
  Product,
  Order,
  OrderItem,
};
