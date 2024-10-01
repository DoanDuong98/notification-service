'use strict'

const dev = {
  app: {
    port: process.env.DEV_APP_PORT
  },
  db: {
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    name: process.env.DEV_DB_NAME
  }
};

const prd = {
  app: {
    port: process.env.PRD_APP_PORT
  },
  db: {
    host: process.env.PRD_DB_HOST,
    port: process.env.PRD_DB_PORT,
    name: process.env.PRD_DB_NAME
  }
};

const config = { dev, prd };
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];
