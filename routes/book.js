const routes = require('express').Router();
const BookControlelr = require('../controllers/BookController');

routes.get('/',BookControlelr.listBooks);
routes.get('/form',BookControlelr.addBook);
routes.post('/form',BookControlelr.addBookPost);


module.exports = routes;