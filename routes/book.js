const routes = require('express').Router();
const BookControlelr = require('../controllers/BookController');

routes.get('/',BookControlelr.listBooks);


module.exports = routes;