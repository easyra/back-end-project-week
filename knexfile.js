// Update with your config settings.
require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'lambda',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};
const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './notes/data/notesDb.sqlite3'
    },
    migrations: {
      directory: './notes/data/migrations'
    },
    seeds: {
      directory: './notes/data/seeds'
    },
    useNullasDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './notes/data/notesDbTest.sqlite3'
    },
    migrations: {
      directory: './notes/data/migrations'
    },
    seeds: {
      directory: './notes/data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './notes/data/migrations'
    },
    seeds: {
      directory: './notes/data/seeds'
    },
    useNullasDefault: true
  }
};
