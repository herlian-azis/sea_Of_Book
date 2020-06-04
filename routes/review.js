const routes = require('express').Router();
const ReviewController = require('../controllers/ReviewController');

routes.get('/:id',ReviewController.listReviewById);

module.exports = routes;