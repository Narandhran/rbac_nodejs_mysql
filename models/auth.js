'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_user: DataTypes.INTEGER,
    role: DataTypes.STRING,
    resource: DataTypes.STRING,
    permission: DataTypes.STRING
  }, {
      tableName: 'auths',
      timestamps: true
    });
  Auth.associate = function (models) {
    // associations can be defined here
  };
  return Auth;
};