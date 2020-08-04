import path from 'path';
import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';

const {
  dbName,
  dbUser,
  dbPassword,
  options
} = require(path.join(__dirname, './config.ts'))["default"][env];

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, options);
