const routes = require('express').Router();
const routesBook = require('./book');
const routesReview = require('./review');
const routesUser = require('./user');

routes.get('/',(req,res)=>{
  res.render('home')
});
routes.use('/books',routesBook);
routes.use('/reviews',routesReview);
routes.use('/users',routesUser);

module.exports = routes;