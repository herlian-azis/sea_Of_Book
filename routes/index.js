const routes = require('express').Router();
const routesBook = require('./book');
const routesReview = require('./review');
const routesUser = require('./user');

routes.get('/',(req,res)=>{
  res.render('home2')
});
// routes.get('/upload',(req,res)=>{
//   res.render('uploadFile')
// });

let session = ((req,res,next) =>{
  if ((req.session.userId)) {
    next()
  }else{
    res.send("salah")
  }
})

routes.use('/books',routesBook);
routes.use('/users',routesUser);
routes.use(session)
routes.use('/reviews',routesReview);

module.exports = routes;