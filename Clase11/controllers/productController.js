const Product = require('../models/product');

const createProduct = async(req, res) => {
    Product.create({ title: req.body.title, price: req.body.price})
    .then(prod => {
        res.status(201).send(prod);
    }).catch(err => res.status(400).send(err));
    
   
}

const getProducts = async(req, res) => {
    Product.findAll().then(products => {
        let data = products.map(product => ({
            nombre: product.title,
            precio: product.price,
        }))
        data.sort(((a,b) => b.precio - a.precio))
        res.status(200).send(products)
    }).catch(err => res.status(400).send(err));
}

const productController = {
    createProduct,
    getProducts
}

module.exports = productController;