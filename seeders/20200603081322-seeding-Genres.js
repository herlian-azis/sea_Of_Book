'use strict';
const genres = require('../files/genres.json');
genres.forEach((genre)=>{
  genre.createdAt = new Date();
  genre.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', genres, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};