const {User} = require('../models')
class UserController {
  static listUser(req,res){
    User.findAll()
    .then(data=>{
      res.send(data)
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = UserController;