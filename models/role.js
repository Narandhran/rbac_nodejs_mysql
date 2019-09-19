'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Role: DataTypes.STRING
  }, {
      tableName: 'roles',
      timestamps: false
    });
  Role.associate = function (models) {
    // associations can be defined here
  };
  return Role;
};