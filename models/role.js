'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id_pk: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role: DataTypes.STRING,
    create: DataTypes.BOOLEAN,
    read: DataTypes.BOOLEAN,
    write: DataTypes.BOOLEAN,
    delete: DataTypes.BOOLEAN
  }, {
      tableName: 'roles',
      timestamps: false
    });
  Role.associate = function (models) {
  };
  return Role;
};