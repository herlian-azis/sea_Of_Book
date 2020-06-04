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
}

module.exports = ReviewController;