'use strict';
const users = require('../files/users.json');
users.forEach((user)=>{
  user.createdAt = new Date();
  user.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};