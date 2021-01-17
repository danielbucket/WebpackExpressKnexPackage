const path = require('path');

module.exports = {
  TEST: {
    client: 'pg',
    connection: 'postgress://localhost/knexTutorial',
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + './db/migrations',
    },
    seeds: {
      directory: __dirname + './db/seeds/test',
    },
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stocktracker',
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, './db/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './db/seeds/dev'),
    },
  },

  production: {
    client: 'pg',
    connection: {
      filename: process.env.DATABASE_URL  + '$ssl=true',
    },
    useNullAsDefault: true,
    migrations: {
      directoy: path.resolve(__dirname + './db/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname + './db/seeds/production'),
    },
};
