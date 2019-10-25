require('dotenv').config();

module.exports = {
  apps : [{
    name: 'express-postgres-sequalize-api',
    script: 'index.js',
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: 4000,
      DB_USERNAME: "postgres",
      DB_PASSWORD: "postgres",
      DB_NAME: "express-sequelize-dev",
      HOST_NAME: "127.0.0.1",
      DIALECT: "postgres",
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 4000,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      HOST_NAME: process.env.HOST_NAME,
      DIALECT: process.env.DIALECT,
    }
  }]
};
