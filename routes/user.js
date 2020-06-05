const routes = require('express').Router();
const UserController = require('../controllers/UserController');

routes.get('/',UserController.listUser);
routes.get('/register',UserController.registerForm)
routes.post('/register',UserController.register)
routes.get('/login',UserController.login)
routes.post('/login',UserController.loginPost)
routes.get('/logout',UserController.logout)

module.exports = routes;