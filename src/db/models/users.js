'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.belongsTo(models.Roles, {
      foreignKey: {
        name: "roleId",
        allowNull: false
      },
      as: 'role'
    })
  };
  return Users;
};
