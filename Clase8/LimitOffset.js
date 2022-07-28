// limit & offset

router.get("/movies", async (req, res) => {
    let moviesList = await movies.getFilms();
    moviesList.sort((a, b) => b.rt_score - a.rt_score);
    let { limit, offset } = req.query;
    offset = parseInt(offset, 10);
    limit = parseInt(limit, 10);
    let found = moviesList;
    if (isNaN(limit) && isNaN(offset))
      moviesList ? res.json(moviesList) : res.status(401).send("Bad request");
    else {
      if (offset && limit) {
        console.log("offsetylimit");
        found = moviesList.filter(
          (movie) => movie.rt_score < limit && movie.rt_score > offset
        );
      } else if (limit) {
        found = moviesList.filter((movie) => movie.rt_score < limit);
      } else if (offset) {
        found = moviesList.filter((movie) => movie.rt_score > offset);
        found.length > 0
          ? res.status(200).send(found)
          : res.status(401).send("Bad request");
      }
    }
  });
  