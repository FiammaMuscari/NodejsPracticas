router.post("/",(req,res)=>{
    // Recibimos el body de la peticion,que es un objeto
     const newMovie=req.body;
    // Verificamos que la pelicula tenga todos los campos completos
    if (
       newMovie.title &&
       newMovie.year &&
       newMovie.id &&
       newMovie.genre &&
       newMovie.rating &&
       newMovie.director &&
       newMovie.runtime
    ){
      movies.push(newMovie);
       // Posteamos nuevo registro a base de datos
       res.status(201).send(newMovie);
    }else res.status(500).send("Error");
});

//localhost:3000/api/movies
// "id":3,
// "title": "The Godfather Part II"
// en https://www.postman.com > Body > Raw
