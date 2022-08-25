const express = require('express')
const router = express.Router();
const usersController = require('./controllers/user.js')
const errorHandler = require('./middlewares/errorHandler');
const bodyParser = require('body-parser')


router.use(bodyParser.json())
router.get('/users', usersController.getUsers)
router.post('/user', usersController.addUser)
router.use(errorHandler.notFound);

module.exports = router;