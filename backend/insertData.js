require('dotenv').config();  // Ensure environment variables are loaded
const { Sequelize, DataTypes } = require('sequelize');

// Set up the Sequelize instance with connection details from environment variables
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'mysql'
});

// Define models
const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING
  },
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, {
  tableName: 'Customers',
  timestamps: false
});

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'Products',
  timestamps: false
});

// Sync the model with the database (create the table if it doesn't exist)
const syncDb = async () => {
  try {
    await sequelize.authenticate();  // Test DB connection
    console.log('Connection has been established successfully.');
    await Customer.sync();  // Ensure the Customer table is created
    await Product.sync();   // Ensure the Product table is created
    console.log('Customer and Product tables synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Function to insert sample data
const insertSampleData = async () => {
  try {
    const [customer] = await Customer.findOrCreate({
      where: { email: 'alice@example.com' },
      defaults: {
        first_name: 'Alice',
        last_name: 'Johnson',
        phone: '1234567890'
      }
    });

    const [product1] = await Product.findOrCreate({
      where: { product_name: 'Laptop' },
      defaults: {
        price: 999.99
      }
    });

    const [product2] = await Product.findOrCreate({
      where: { product_name: 'Phone' },
      defaults: {
        price: 499.99
      }
    });

    const [product3] = await Product.findOrCreate({
      where: { product_name: 'Table' },
      defaults: {
        price: 299.99
      }
    });

    console.log('Sample data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

// Run the sync and insert functions
(async () => {
  await syncDb();
  await insertSampleData();
})();