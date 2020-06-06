'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class User extends Model {

  };

  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING ,
    password: DataTypes.STRING
  }, {sequelize})
  
  User.beforeCreate((instance,option) =>{
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
    
  })

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Book,{through: 'Reviews'})
  };
  return User;
};