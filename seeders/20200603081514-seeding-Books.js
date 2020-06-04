'use strict';
const books = require('../files/books.json');
const dirName = 'http://localhost:3000';

books.forEach((book)=>{
  book.path = dirName + '/books/downloads/' + book.path;
  book.createdAt = new Date();
  book.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', books, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};