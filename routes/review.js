const routes = require('express').Router();
const ReviewController = require('../controllers/ReviewController');

routes.get('/user/:id',ReviewController.listReviewById);
routes.get('/books/:id',ReviewController.addReview);
routes.post('/books/:id',ReviewController.addReviewPost);

module.exports = routes;