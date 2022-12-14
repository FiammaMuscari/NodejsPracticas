const express = require('express')
const router = require('./router')
require("dotenv").config()
const app = express()
const port = 3000
const Sequelize = require("sequelize");
const { errorLogger, errorParser } = require('./middlewares/errorHandler')

console.log(process.env.DATABASE_NAME)
app.use('/', router);
app.use([errorLogger, errorParser])
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
