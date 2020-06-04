const {Book} = require('../models')
class BookController {
  static listBooks(req,res){
    Book.findAll()
    .then(data=>{
      res.send(data)
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = BookController;