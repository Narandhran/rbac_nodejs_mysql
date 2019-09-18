'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    permission: DataTypes.STRING,
    p_id: DataTypes.INTEGER
  }, {
      tableName: 'permissions',
      timestamps: false
    });
  Permission.associate = function (models) {
    // associations can be defined here
  };
  return Permission;
};