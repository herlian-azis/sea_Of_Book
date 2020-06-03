'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize= sequelize.Sequelize;
  const Model = Sequelize.Model;

  class BookGenre extends Model {

  };
  BookGenre.init({
    GenreId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {sequelize});
  BookGenre.associate = function(models) {
    // associations can be defined here
  };
  return BookGenre;
};