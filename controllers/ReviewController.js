const {Book,Review} = require ('../models');
class ReviewController {
  static listReviewById(req,res){
    Book.findAll({
      where:{
        id:req.params.id
      },
      include:[
        Review
      ]
    })
    .then(data=>{
      res.send(data)
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static addReview(req,res){
    res.render('review-form',{BookId: req.params.id})
  }

  static addReviewPost(req,res){
    let newReview = {
      UserId: 2,
      BookId: req.params.id,
      rating: req.body.rating,
      comment: req.body.comment
    }

    Review.create(newReview)
    .then(data=>{
      res.redirect('/books/detail/' + newReview.BookId)
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = ReviewController;