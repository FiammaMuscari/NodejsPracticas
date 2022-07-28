const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");
const exp = express();
const port = 3000;

function getFilmId(id) {
  return fetch("https://ghibliapi.herokuapp.com/films/" + id).then((res) =>
    res.json()
  );
}

function getFilm() {
  return fetch("https://ghibliapi.herokuapp.com/films/").then((res) =>
    res.json()
  );
}

function getProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}


exp.get("/", (req, res) => {
    res.send("Hello Word¡");
});

exp.get("/pibe", (req, res) => {
  console.log(req.query);
  res.send("Alexis es un buen pibe");
});


exp.get("/film/:id", async (req, res) => {
  res.send(await getFilmId(req.params.id));
});


exp.get("/films", async (req, res) => {
  let filmsID = Object.values(req.query);
  let films = filmsID.map(async (films) => {
    return await getFilmId(films);
  });

  res.send(await Promise.all(films));
  console.log(films);
});


exp.get("/producto", async (req, res) => {
  let products = await getProducts();
  products = products.map((product) => ({
    title: product.title,
    price: product.price,
  }));
  let result = products.sort(
    (primero, segundo) => segundo.price - primero.price
  );
  res.send(result);
});

exp.get("/producto/filtro", async (req, res) => {
  let products = await getProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
  }));

  let limit = Object.values(req.query);
  let filtro = products.slice(limit[0]-1, limit[1]);
  let result = filtro.sort((primero, segundo) => segundo.price - primero.price);
  res.status(200).send(result);

});
    //try {
    // res.status(200).send(filtro);
    //} catch {
    // res.status(401).send("Bad request");
    //}

exp.get("/films/filtro", async (req, res) => {
  let films = await getFilm();
  let limitator = Object.values(req.query);
  let filtro = films.slice(limitator[0] - 1, limitator[1]);

  await Promise.all(filtro).then((data) => res.send(data));
});

exp.get("/google", (req, res) => {
  res.status(302).redirect("https://www.google.com/");
});

exp.listen(port, () => {
  console.log(`Listening on port ${port}`);
});