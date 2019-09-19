'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      tableName: 'users',
      timestamps: false
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};