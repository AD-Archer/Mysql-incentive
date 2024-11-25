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

// Define a model (Test)
const TestModel = sequelize.define('Test', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

// Sync the model with the database (create the table if it doesn't exist)
const syncDb = async () => {
  try {
    await sequelize.authenticate();  // Test DB connection
    console.log('Connection has been established successfully.');
    await TestModel.sync();  // Ensure the table is created
    console.log('Test table synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Insert test data into the database
const insertTestData = async () => {
  try {
    const newTestRecord = await TestModel.create({
      name: 'John Doe',
      age: 30
    });
    console.log('Test data inserted:', newTestRecord.toJSON());
  } catch (error) {
    console.error('Error inserting test data:', error);
  }
};

// Run the sync and insert functions
(async () => {
  await syncDb();
  await insertTestData();
})();