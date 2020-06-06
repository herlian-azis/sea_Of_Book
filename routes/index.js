const routes = require('express').Router();
const routesBook = require('./book');
const routesReview = require('./review');
const routesUser = require('./user');

let session = ((req,res,next) =>{
  if ((req.session.userId)) {
    next()
  }else{
    res.send("LOGIN DAHULU")
  }
})

routes.get('/',(req,res)=>{
  res.render('home2')
});
routes.use('/users',routesUser);
routes.use(session)
routes.use('/books',routesBook);
routes.use('/reviews',routesReview);

module.exports = routes;