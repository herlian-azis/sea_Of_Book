'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize= sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Genre extends Model {

  };
  Genre.init({
    name: DataTypes.STRING
  }, {sequelize});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.belongsToMany(models.Book, { through: 'BookGenres' })
  };
  return Genre;
};