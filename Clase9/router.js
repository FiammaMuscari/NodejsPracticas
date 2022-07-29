const express = require('express')
const router = express.Router();
const movieController = require('./controllers/movieController');
const { dates } = require('./middlewares/dates');
const dates = require('./middlewares/dates');
const errorHandler = require('./middlewares/errorHandler');


function helloWorld(req, res) {
    res.send('Hello World! Its: ' + req.today + ' of ' + req.month)
}
router.get('/', [dates.myDate, dates.today, dates.month], helloWorld)
router.get('/ghibli', movieController.getRanking)
router.get('/ghibli/:name', [dates.myDate, dates.today, dates.month], movieController.getMovieByName)
router.get('/ghibli/:score', moviesController.getMoviesByScore)
router.use(errorHandler.notFound);

module.exports = router;