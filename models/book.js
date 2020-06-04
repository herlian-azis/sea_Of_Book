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
    GenreId: DataTypes.INTEGER,
    path: DataTypes.STRING,
    uploadedBy: DataTypes.STRING
  }, {sequelize});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Genre)
    Book.belongsToMany(models.User,{through: 'Reviews'})
  };
  return Book;
};