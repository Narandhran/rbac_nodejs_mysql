'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('auth', {
    id_pk: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_user: DataTypes.INTEGER,
    fk_role: DataTypes.INTEGER,
    fk_resource: DataTypes.INTEGER
  }, {
      tableName: 'auths',
      timestamps: false
    });
  Auth.associate = function (models) {
  };
  return Auth;
};