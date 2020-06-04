'use strict';
let genres = [{
  "id":1000,
  "name":"Uncategorize",
  "createdAt" : new Date(),
  "updatedAt" : new Date()
}]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', genres, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};