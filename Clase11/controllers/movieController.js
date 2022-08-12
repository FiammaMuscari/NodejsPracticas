const { getFilmByName, getFilms, getFilmsByScore } = require('../models/movie');
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

const getMoviesByScore = async(req, res) => {
    const score = req.params.score;
    console.log(score);
    let movies = await getFilmsByScore(score)
    movies = movies.map(movie => ({
        title: movie.title,
        score: movie.rt_score
    }))
    res.status(200).send(movies);
}

const movieController = {
    getRanking,
    getMovieByName,
    getMoviesByScore
}

module.exports = movieController;