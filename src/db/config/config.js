const dev_environment = require("../../../ecosystem.config").apps[0].env
const prod_environment = require("../../../ecosystem.config").apps[0].env_production

module.exports = {
  "development": {
    "username": dev_environment.DB_USERNAME,
    "password": dev_environment.DB_PASSWORD,
    "database": dev_environment.DB_NAME,
    "host": dev_environment.HOST_NAME,
    "dialect": dev_environment.DIALECT,
    "operatorsAliases": false
  },
  "test": {
    "username": dev_environment.DB_USERNAME,
    "password": dev_environment.DB_PASSWORD,
    "database": dev_environment.DB_NAME,
    "host": dev_environment.HOST_NAME,
    "dialect": dev_environment.DIALECT,
    "operatorsAliases": false
  },
  "production": {
    "username": prod_environment.DB_USERNAME,
    "password": prod_environment.DB_PASSWORD,
    "database": prod_environment.DB_NAME,
    "host": prod_environment.HOST_NAME,
    "dialect": prod_environment.DIALECT,
    "operatorsAliases": false
  }
}
