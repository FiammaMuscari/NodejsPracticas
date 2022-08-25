const db = require('../models/index');
const { User } = db;

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).send(users))
        .catch(err => next(err))
}

const addUser = (req, res, next) => {
    User.create(req.body)
        .then(user => res.status(201).send("User Created"))
        .catch(err => next(err))
}

module.exports = {
    getUsers,
    addUser
}