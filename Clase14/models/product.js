const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config()
const sequelize = new Sequelize(
 process.env.DATABASE_NAME,
 process.env.DATABASE_USER,
 process.env.DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
const Product = sequelize.define('products', {
  title: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  price: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
    // Other model options go here
});



module.exports = Product;