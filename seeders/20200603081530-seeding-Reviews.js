'use strict';
const reviews = require('../files/reviews.json');
reviews.forEach((review)=>{
  review.createdAt = new Date();
  review.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', reviews, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};