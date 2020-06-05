const {Book , Genre, Review, User} = require('../models')
const dirName = 'http://localhost:3000';
const helperFileName = require('../helper/getFileName')
const QRCode = require('qrcode')

class BookController {
  static listBooks(req,res){
    Book.findAll({
      include:[
        Genre
      ]
    })
    .then(data=>{
      res.render('books-list',{data})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static detail(req,res){
    let dataBook;
    Book.findAll({
      where:{
        id:req.params.id
      },
      include:[
        Genre
      ]
    })
    .then(data=>{
      dataBook=data;
      console.log(data);
      return Review.findAll({
          where:{
            BookId:req.params.id
          },
          include:[
            User
          ]
        })
      })
    .then(dataReview=>{
      QRCode.toDataURL(dataBook[0].path)
      .then(url=>{
        res.render('books-detail',{dataBook,dataReview,helperFileName,url})
      })
      .catch(err =>{
        console.log('error qr niiih')
      })
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