//Ejercicio Api
// functiongetFilms() {
//   returnfetch('https://ghibliapi.herokuapp.com/films')
//           .then(res=>res.json())
// }
// ​
// functiongetLocations() {
//   returnfetch('https://ghibliapi.herokuapp.com/locations').then(res=>res.json());
// }
// ​
// asyncfunctiongetFilmByName(name){    
//   // Me devuelve una pelicula que contenga las palabras pasadas por parametro
// }
// ​
// asyncfunctiongetFilmsByScore(score) {
//   // Me devuelve todas las peliculas con rt_score mayor al puntaje pasado por parametro
// }
// ​
// asyncfunctiongetFilmsRanking() {
//   // Me devuelve un array con todas las peliculas, unicamente con su titulo y su rt_score 
//   //ordenadas desc por score
// }
// ​
// asyncfunctiongetPeopleFromFilm(name) {
//   // Me devuelve un array de objetos que son las personas que aparecen en una pelicula
// }
// ​

const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));


const getFilms = async () => {
  const data = await fetch("https://ghibliapi.herokuapp.com/films");
  return await data.json();
};
const getLocations = async () => {
  const data = await fetch("https://ghibliapi.herokuapp.com/locations");
  return await data.json();
};

const getFilmByName = async (name) => {
  const data = await fetch(
    `https://ghibliapi.herokuapp.com/films?title=${name}`
  );
  const film = await data.json();
  return film[0];
};


const getFilmsByScore = async (score) => {
  const films = await getFilms();
  const filmsByScore = films.filter((film) => film.rt_score > score);
  return filmsByScore;
};
const getFilmsRanking = async () => {
  const films = await getFilms();
  const filmsRanking = films
    .map((film) => {
      return {
        title: film.title,
        rt_score: film.rt_score,
      };
    })
    .sort((a, b) => b.rt_score - a.rt_score);
  return filmsRanking;
};



const getPeopleFromFilm=async(name)=>{
   const film=await getFilmByName(name)
   const requestList=film.people.map((person)=>{
      return fetch(person)
  })
  const responseList=await Promise.all(requestList)
  const peopleArrayData=responseList.map((person)=>{
      return person.json()
  })
   // Devuelve todas las promesas para obtener los personajes
   
   let data = await Promise.all(peopleArrayData)
   console.log(data);

}
getFilms();
getFilmByName("Castle in the Sky");
getFilmsByScore("95");
getFilmsRanking();
getPeopleFromFilm("Castle in the Sky");