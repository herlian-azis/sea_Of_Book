const {Book , Genre} = require('../models')
const dirName = 'http://localhost:3000';

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
    Genre.findAll()
    .then(data=>{
      res.render('books-form',{data})
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static addBookPost(req,res){
    let newBook = {
      "name": req.body.name,
      "publisher": req.body.publisher,
      "year":req.body.year,
      "description":req.body.description,
      "GenreId":req.body.genre,
      "path": dirName + '/books/' + req.file.path,
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

  static download(req,res){
    res.download('./downloads/' +req.params.filename)
  }
}

module.exports = BookController;