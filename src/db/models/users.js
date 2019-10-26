'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.belongsTo(models.Roles, {foreignKey: 'roleId', as: 'role'})
  };
  return Users;
};
