'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    id_pk: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    resource: DataTypes.STRING
  }, {
      tableName: 'resources'
    });
  Resource.associate = function (models) {
    // associations can be defined here
  };
  return Resource;
};