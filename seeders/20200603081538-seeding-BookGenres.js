'use strict';
const bookGenres = require('../files/bookGenres.json');
bookGenres.forEach((bookGenre)=>{
  bookGenre.createdAt = new Date();
  bookGenre.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookGenres', bookGenres, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BookGenres', null, {});
  }
};