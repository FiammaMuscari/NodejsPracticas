const { getFilmByName } = require('../models/movie');
const movies = require('../models/movie')

const getRanking = async (req, res) => {
    let films = await movies.getFilms();
    let ranking = films.map(film => ({
        title: film.title,
        score: film.rt_score
    }));
    ranking.sort((a,b) => b.score - a.score);
    res.status(200).send(ranking);
}

const getMovieByName = async(req, res) => {
    let name = req.params.name;
    let movie = await getFilmByName(name);
    console.log(`User requested movie with name ${name} at day ${req.today}`);
    res.status(200).send(movie);
}

const movieController = {
    getRanking,
    getMovieByName
}

module.exports = movieController;