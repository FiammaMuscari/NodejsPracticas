const express = require('express')
const router = require('./router')
const app = express()
const port = 3000
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'skill_factory',
 'alexis',
 'java',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
