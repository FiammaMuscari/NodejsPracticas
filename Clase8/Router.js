const express = require("express");
const router = express.Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

function getFilms() {
  return fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json()
  );
}

function getProduct(id) {
  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
}

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});



router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get('/', [myDate, today, month])

router.get("/fiamma", (req, res) => {
  console.log(req.query);
  res.send("Fiami es buena");
});
router.use("/fiammaa", (req, res) => {
  console.log("ENTRO");
  next();
});

router.get("/producto/", async (req, res) => {
  let productIDs = Object.values(req.query);
  console.log(req.body);
  let products = productIDs.map(async (product) => {
    return await getProduct(product);
  });
  res.send(await Promise.all(products));
});

function today(req, res, next){
    let today = req.date;
    req.today = today.getDay();
    next();
}

function month(req, res, next){
    let today = req.date;
    req.month= today.getMonth();
    next;
}

app.get("/google", (req, res) => {
    res.redirect("https://www.google.com/");
  });

  module.exports = router;