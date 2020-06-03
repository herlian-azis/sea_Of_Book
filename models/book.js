'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize= sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Book extends Model {

  };

  Book.init({
    name: DataTypes.STRING,
    publisher: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.STRING,
    path: DataTypes.STRING,
    uploadedBy: DataTypes.STRING
  }, {sequelize});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsToMany(models.Genre,{through: 'BookGenres'})
    Book.belongsToMany(models.User,{through: 'Reviews'})
  };
  return Book;
};