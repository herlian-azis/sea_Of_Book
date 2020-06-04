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
  
  static addBook(req,res){
    res.render('books-form')
  }

  static addBookPost(req,res){
    let newBook = {
      "name": req.body.name,
      "publisher": req.body.publisher,
      "year":req.body.year,
      "description":req.body.description,
      "GenreId":1,
      "path": req.body.file,
      "uploadedBy":"amiruljbr"
    }
    Book.create(newBook)
    .then(data=>{
      console.log('sukses add Book');
      res.redirect('/books')
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = BookController;