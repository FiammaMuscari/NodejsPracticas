const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  'skill_factory',
  'alexis',
  'java',
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