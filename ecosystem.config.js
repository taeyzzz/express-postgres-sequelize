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
      SALT_ROUNDS: 10
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 4000,
      DB_USERNAME: "postgres",
      DB_PASSWORD: "postgres",
      DB_NAME: "express-sequelize-prod",
      HOST_NAME: "127.0.0.1",
      DIALECT: "postgres",
      SALT_ROUNDS: 10
    }
  }]
};
