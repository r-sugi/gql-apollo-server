import path from 'path';
import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './config.ts'))["default"][env];
export const sequelize = new Sequelize('example', 'example', 'example', config);
