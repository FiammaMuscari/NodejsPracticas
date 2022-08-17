const express = require('express')
const router = express.Router();
const movieController = require('./controllers/movieController');
const productController = require('./controllers/productController');
const dates = require('./middlewares/dates');
const errorHandler = require('./middlewares/errorHandler');
const bodyParser = require('body-parser')


function helloWorld(req, res) {
    res.send('Hello World! Its: ' + req.today + ' of ' + req.month)
}
router.use(dates.myDate)
router.use(bodyParser.json())
router.get('/', [dates.today, dates.month], helloWorld)
router.get('/products', productController.getProducts)
router.post('/product', productController.createProduct)
router.get('/ghibli', movieController.getRanking)
router.get('/ghibli/:name', [dates.today, dates.month], movieController.getMovieByName)
router.get('/ghibli/score/:score', movieController.getMoviesByScore)
router.use(errorHandler.notFound);

module.exports = router;