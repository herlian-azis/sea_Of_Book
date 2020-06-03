'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class Review extends Model{

  };

  Review.init({
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {sequelize});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Book);
    Review.belongsTo(models.User);
  };
  return Review;
};