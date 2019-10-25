'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name : 'admin',
        description : 'Admin can do everything.',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'manager',
        description : 'Manager can do something.',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'user',
        description : 'user can do nothing.',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', [
      {
        name :'admin'
      },
      {
        name :'manager'
      },
      {
        name :'user'
      }
    ])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
