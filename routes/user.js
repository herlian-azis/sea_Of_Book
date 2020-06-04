const routes = require('express').Router();
const UserController = require('../controllers/UserController');

routes.get('/',UserController.listUser);

module.exports = routes;