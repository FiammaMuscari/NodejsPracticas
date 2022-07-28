const express = require("express");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

const port = 3000;

function getFilms() {
  return fetch("https://ghibliapi.herokuapp.com/films").then((res) =>
    res.json()
  );
}

function getProduct(id) {
  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/alexis", (req, res) => {
  console.log(req.query);

  res.send("Alexis es un buen pibe");
});

app.get("/producto/", async (req, res) => {
  let productIDs = Object.values(req.query);

  console.log(req.body);

  let products = productIDs.map(async (product) => {
    return await getProduct(product);
  });

  res.send(await Promise.all(products));
});

app.get("/ghibli", async (req, res) => {
  let films = await getFilms();

  let ranking = films.map((film) => ({
    title: film.title,

    score: film.rt_score,
  }));

  ranking.sort((a, b) => b.score - a.score);

  res.status(200).send(ranking);
});

app.get("/google", (req, res) => {
  res.redirect("https://www.google.com/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
