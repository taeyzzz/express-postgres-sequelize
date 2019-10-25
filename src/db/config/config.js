require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "express-sequelize-dev",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST_NAME,
    "dialect": process.env.DIALECT,
    "operatorsAliases": false
  }
}
