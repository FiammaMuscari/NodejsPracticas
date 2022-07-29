const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))


let getFilms = () => {
    return fetch('https://ghibliapi.herokuapp.com/films')
            .then(res=>res.json())
}

function getLocations() {
    return fetch('https://ghibliapi.herokuapp.com/locations').then(res => res.json());
}

async function getFilmByName(name){    
    let films = await getFilms();
    return films.find(film => film.title.includes(name))
}

async function getFilmsByScore(score) {
    // Me devuelve todas las peliculas con rt_score mayor al puntaje pasado por parametro
    let films = await getFilms();
    return films.filter(film => film.rt_score > score)
}

async function getPeopleFromFilm(name) {
    // Me devuelve un array de objetos que son las personas que aparecen en una pelicula
    let film = await getFilmByName(name);
    let peopleUrls = film.people;
    let people = peopleUrls.map(async url => {
        return await fetch(url).then(res => res.json());
    })
    return Promise.all(people);
}

let films = {
    getFilms,
    getLocations,
    getFilmByName,
    getFilmsByScore,
    getPeopleFromFilm
}

module.exports = films;