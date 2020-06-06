const {User} = require('../models')

const bcrypt =require('bcrypt')
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

  static registerForm(req,res){
    res.render("register")
  }

  static register(req,res){
    const {first_name,last_name,username,email,password} = req.body
    const data =  {first_name,last_name,username,email,password}
    User.create(data)
    .then(data =>{
      res.redirect('login')
    })
    .catch(err=>{
      res.send(err)
    })
    
  }

  static login(req,res){
    res.render('login')
  }

  static loginPost(req,res){
    console.log(req.body);
    
    User.findOne({where: {username:req.body.username}})
    .then(data =>{
      // console.log(data.username);
      
      if(!data) {
        res.send("Not found")
      }
      else{
        if(bcrypt.compareSync(req.body.password, data.password)){
          req.session.userId = req.body.username
          console.log("masuk<<<<<<<<<<<<<<<<<<<<<<");
          
          res.redirect("/")
        }else{
          res.send('Password Salah')
        }
      }
    })
    .catch(err =>{
      res.send("Masukan Dengan Benar")
    })

  }
  static logout(req,res){

    req.session.destroy(function(err) {
      if (err) {
        res.send(err)
      }
      else{
        res.redirect('/')
      }
    })
  }
}

module.exports = UserController;